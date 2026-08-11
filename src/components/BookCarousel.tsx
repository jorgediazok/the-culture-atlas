"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { keyframes, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MAX_ROTATION_DEG = 55;
const FLIP_DURATION = "0.7s";
const FLIP_EASING = "cubic-bezier(.4,.05,.2,1)";

const flipNextTransform = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(-180deg); }
`;
const flipPrevTransform = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(180deg); }
`;
// The lift-shadow lives on its own non-rotating wrapper. Animating `filter`
// on the very same element that also carries the 3D `transform` makes
// Chrome stop hiding the back face correctly mid-turn — you'd see the front
// face's own content mirrored instead of the page behind it.
const flipShadow = keyframes`
  0% { filter: drop-shadow(0 6px 14px rgba(20,14,6,0.25)); }
  50% { filter: drop-shadow(0 18px 34px rgba(20,14,6,0.4)); }
  100% { filter: drop-shadow(0 6px 14px rgba(20,14,6,0.25)); }
`;

type Flip = { dir: "next" | "prev"; from: number; to: number };

/** Renders `slide` at double width, shifted so only its left or right half
 * falls inside this box — lets the flip leaf show a real half-page without
 * CoverPage/PageSpread needing to know they're being cut in half. */
function HalfClip({
  slide,
  side,
}: {
  slide: React.ReactNode;
  side: "left" | "right";
}) {
  return (
    <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: side === "right" ? "-100%" : 0,
          width: "200%",
        }}
      >
        {slide}
      </Box>
    </Box>
  );
}

export default function BookCarousel({
  children,
  coverLabel,
  backToIndexHref,
  backToIndexLabel,
  backToFirstPageLabel,
  countryName,
  countryFlagEmoji,
}: {
  children: React.ReactNode;
  /** When provided, the first slide is treated as an unnumbered cover: it
   * shows this label instead of a page number, and content pages count
   * from 1 starting after it — matching the folio number printed on the
   * page itself instead of the cover's raw position in the slide list. */
  coverLabel?: string;
  backToIndexHref: string;
  backToIndexLabel: string;
  /** Shown on the same row as the "back to index" link, only once the
   * reader reaches the last page — a quick way back to the cover. */
  backToFirstPageLabel: string;
  countryName: string;
  countryFlagEmoji: string;
}) {
  const slides = Children.toArray(children);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [flip, setFlip] = useState<Flip | null>(null);
  const slideNodes = useRef<HTMLElement[]>([]);
  const theme = useTheme();
  // Desktop (mouse) users only page-turn via click or the arrow buttons —
  // Embla's own drag/swipe is switched off there below. Mobile keeps plain
  // carousel-style drag, since the real flip overlay only ever renders at
  // md+ (it needs the fixed-height desktop frame to fill).
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // On desktop, discrete moves (click, arrow keys, buttons, dots) play a
  // real single-page turn, then hand the final position to Embla. On
  // mobile there's no flip overlay to play, so these just move Embla
  // directly — the reader's actual page-turning there is the swipe/drag.
  const goNext = useCallback(() => {
    const to = selectedIndex + 1;
    if (to >= slides.length) return;
    if (!isDesktop) {
      emblaApi?.scrollNext();
      return;
    }
    if (flip) return;
    setFlip({ dir: "next", from: selectedIndex, to });
  }, [flip, selectedIndex, slides.length, isDesktop, emblaApi]);

  const goPrev = useCallback(() => {
    const to = selectedIndex - 1;
    if (to < 0) return;
    if (!isDesktop) {
      emblaApi?.scrollPrev();
      return;
    }
    if (flip) return;
    setFlip({ dir: "prev", from: selectedIndex, to });
  }, [flip, selectedIndex, isDesktop, emblaApi]);

  const jumpTo = useCallback(
    (index: number) => {
      if (index === selectedIndex) return;
      if (!isDesktop) {
        emblaApi?.scrollTo(index);
        return;
      }
      if (flip) return;
      emblaApi?.scrollTo(index, true);
      setSelectedIndex(index);
    },
    [flip, selectedIndex, isDesktop, emblaApi]
  );

  const finishFlip = useCallback(() => {
    if (!flip) return;
    emblaApi?.scrollTo(flip.to, true);
    setSelectedIndex(flip.to);
    setFlip(null);
  }, [flip, emblaApi]);

  // Mouse drag/swipe only ever moves pages on mobile — desktop readers
  // page-turn by clicking or using the arrow buttons instead.
  useEffect(() => {
    emblaApi?.reInit({ watchDrag: !isDesktop });
  }, [emblaApi, isDesktop]);

  useEffect(() => {
    if (!emblaApi) return;
    // Keeps things in sync when the reader drags/swipes instead of
    // clicking — a finished flip already sets the index itself.
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const tween = (api: EmblaCarouselType) => {
      const scrollProgress = api.scrollProgress();
      api.scrollSnapList().forEach((snapPoint, index) => {
        const diff = snapPoint - scrollProgress;
        const rotation = Math.min(
          Math.max(diff * slides.length * MAX_ROTATION_DEG, -MAX_ROTATION_DEG),
          MAX_ROTATION_DEG
        );
        const node = slideNodes.current[index];
        if (node) {
          const isActive = Math.abs(rotation) >= 0.5;
          // A page mid-turn hinges from whichever edge is nearer the spine:
          // a slide still ahead of the reader (diff >= 0, not reached yet)
          // opens from its left edge as it swings into view; a slide already
          // behind (diff < 0) hinges from its right edge as it swings away —
          // matching how an actual page turns, instead of every slide
          // pivoting from the same fixed corner regardless of direction.
          node.style.transformOrigin = diff >= 0 ? "center left" : "center right";
          // Only promote the node to its own GPU compositing layer while
          // it's actually rotating. Leaving `will-change`/backface-visibility
          // on permanently keeps the node composited even at rest, and
          // Chrome fails to clip border-radius correctly on a composited
          // node nested inside another composited ancestor — that's what
          // was showing up as a square (unrounded) page corner.
          node.style.transform = isActive
            ? `perspective(1600px) rotateY(${-rotation}deg)`
            : "";
          node.style.willChange = isActive ? "transform" : "auto";
          node.style.backfaceVisibility = isActive ? "hidden" : "visible";
        }
      });
    };

    tween(emblaApi);
    emblaApi.on("scroll", tween);
    emblaApi.on("reInit", tween);

    return () => {
      emblaApi.off("scroll", tween);
      emblaApi.off("reInit", tween);
    };
  }, [emblaApi, slides.length]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  const isLastSlide = selectedIndex === slides.length - 1;

  return (
    <Box>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", mb: 2 }}
      >
        <Typography
          component={Link}
          href={backToIndexHref}
          color="text.secondary"
          sx={{
            textDecoration: "none",
            width: "fit-content",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {backToIndexLabel}
        </Typography>

        <Typography
          component="button"
          onClick={() => jumpTo(0)}
          sx={{
            all: "unset",
            cursor: "pointer",
            color: "text.secondary",
            visibility: isLastSlide ? "visible" : "hidden",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {backToFirstPageLabel}
        </Typography>
      </Stack>

      <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
        {countryFlagEmoji} {countryName}
      </Typography>

      {/* Fixed height on desktop so every page renders at the same size
          regardless of how much text an entry has — otherwise a long
          description stretches the whole row (including the illustration
          side) to match it. Mobile stays auto-height since pages stack
          the image above the text instead of side by side. */}
      <Box sx={{ position: "relative", height: { md: 680 } }}>
        <Box ref={emblaRef} sx={{ overflow: "hidden", height: "100%" }}>
          {/* alignItems stretch is the flex default — fine on desktop where
              every slide already has a fixed height, but on mobile it would
              stretch every slide (including the cover) to match whichever
              sibling page has the longest text, leaving huge empty gaps. */}
          <Box
            sx={{
              display: "flex",
              height: { md: "100%" },
              alignItems: { xs: "flex-start", md: "stretch" },
            }}
          >
            {slides.map((slide, index) => (
              <Box
                key={index}
                ref={(el: HTMLElement | null) => {
                  if (el) slideNodes.current[index] = el;
                }}
                onClick={(event) => {
                  if (!isDesktop || flip) return;
                  const target = event.target as HTMLElement;
                  if (target.closest("a, button, [role='button']")) return;
                  const rect = event.currentTarget.getBoundingClientRect();
                  const clickedRightHalf =
                    event.clientX - rect.left > rect.width / 2;
                  if (clickedRightHalf) goNext();
                  else goPrev();
                }}
                sx={{
                  flex: "0 0 100%",
                  minWidth: 0,
                  height: { md: "100%" },
                  cursor: { md: "pointer" },
                  transformOrigin: "center left",
                }}
              >
                {slide}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Page-turn overlay for discrete moves — only ever covers the one
            half that's actually turning, hinged at the book's own spine.
            Desktop only: needs the fixed-height frame above to have
            something definite to fill, which mobile's stacked,
            content-driven height doesn't give it. */}
        {flip && (
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 0,
              bottom: 0,
              left: flip.dir === "next" ? "50%" : 0,
              width: "50%",
              zIndex: 20,
              perspective: "2000px",
            }}
          >
            {/* Revealed once the leaf swings clear — must already show the
                destination page while still hidden under the leaf's opaque
                front face, or the old page flashes for a frame first. */}
            <HalfClip
              slide={slides[flip.to]}
              side={flip.dir === "next" ? "right" : "left"}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                animation: `${flipShadow} ${FLIP_DURATION} ${FLIP_EASING} forwards`,
              }}
            >
              <Box
                onAnimationEnd={finishFlip}
                sx={{
                  position: "absolute",
                  inset: 0,
                  transformStyle: "preserve-3d",
                  transformOrigin: flip.dir === "next" ? "left center" : "right center",
                  animation: `${
                    flip.dir === "next" ? flipNextTransform : flipPrevTransform
                  } ${FLIP_DURATION} ${FLIP_EASING} forwards`,
                }}
              >
                {/* front: matches what's already on screen right now */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <HalfClip
                    slide={slides[flip.from]}
                    side={flip.dir === "next" ? "right" : "left"}
                  />
                </Box>
                {/* back: the destination page's other half, revealed as the
                    leaf finishes rotating onto the opposite side */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    WebkitTransform: "rotateY(180deg)",
                  }}
                >
                  <HalfClip
                    slide={slides[flip.to]}
                    side={flip.dir === "next" ? "left" : "right"}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "center", gap: 2, mt: 3 }}
      >
        <IconButton onClick={goPrev} disabled={selectedIndex === 0} aria-label="Anterior">
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <Stack direction="row" sx={{ gap: 0.75, alignItems: "center" }}>
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => jumpTo(index)}
              sx={{
                width: index === selectedIndex ? 20 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  index === selectedIndex ? "text.primary" : "action.disabled",
                transition: "width 0.2s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </Stack>

        <IconButton
          onClick={goNext}
          disabled={selectedIndex === slides.length - 1}
          aria-label="Siguiente"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center", mt: 1 }}
      >
        {coverLabel && selectedIndex === 0
          ? coverLabel
          : `${coverLabel ? selectedIndex : selectedIndex + 1} / ${
              coverLabel ? slides.length - 1 : slides.length
            }`}
      </Typography>
    </Box>
  );
}
