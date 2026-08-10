"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MAX_ROTATION_DEG = 55;

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
  const slideNodes = useRef<HTMLElement[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
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
      if (event.key === "ArrowLeft") scrollPrev();
      if (event.key === "ArrowRight") scrollNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [scrollPrev, scrollNext]);

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
          onClick={() => emblaApi?.scrollTo(0)}
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
      <Box ref={emblaRef} sx={{ overflow: "hidden", height: { md: 680 } }}>
        <Box sx={{ display: "flex", height: { md: "100%" } }}>
          {slides.map((slide, index) => (
            <Box
              key={index}
              ref={(el: HTMLElement | null) => {
                if (el) slideNodes.current[index] = el;
              }}
              sx={{
                flex: "0 0 100%",
                minWidth: 0,
                height: { md: "100%" },
                transformOrigin: "center left",
              }}
            >
              {slide}
            </Box>
          ))}
        </Box>
      </Box>

      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "center", gap: 2, mt: 3 }}
      >
        <IconButton
          onClick={scrollPrev}
          disabled={selectedIndex === 0}
          aria-label="Anterior"
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <Stack direction="row" sx={{ gap: 0.75, alignItems: "center" }}>
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
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
          onClick={scrollNext}
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
