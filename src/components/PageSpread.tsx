"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import type { LocalizedCultureEntry } from "@/content/types";
import { getIllustration } from "@/illustrations";
import IllustrationFrame from "@/illustrations/IllustrationFrame";
import { readableTextColor } from "@/illustrations/palette";
import BookPageFrame from "./BookPageFrame";
import { useContainScroll } from "./useContainScroll";

export default function PageSpread({
  entry,
  countrySlug,
}: {
  entry: LocalizedCultureEntry;
  countrySlug: string;
}) {
  const illustration = getIllustration(countrySlug, entry.id);
  const scrollRef = useContainScroll<HTMLDivElement>();

  // The page has a fixed height at every breakpoint (set in BookCarousel),
  // so a long description can't just grow the page anymore. Most entries
  // are well under this threshold and render at full size — this only
  // kicks in for the rare outlier that's still long after trimming the
  // copy itself; there's a scroll fallback for that case too (see
  // overflowY below — whole page on mobile, text column on desktop).
  const descriptionLength = entry.description.length;
  const descriptionFontSize = descriptionLength > 1400 ? 14.5 : 16;
  const descriptionLineHeight = descriptionLength > 1400 ? 1.6 : 1.7;

  return (
    <BookPageFrame>
      {/* This wrapping box (not the Stack below) is what the page-number
          badge anchors to — it never scrolls, so the number stays put in
          the corner regardless of how the content inside moves. */}
      <Box sx={{ position: "relative", height: "100%" }}>
        <Stack
          ref={scrollRef}
          direction={{ xs: "column", md: "row" }}
          sx={{
            height: "100%",
            // Mobile: the whole page — illustration and text together —
            // scrolls as one unit when it doesn't fit, like a normal
            // mobile page, instead of freezing the illustration and
            // scrolling only the text underneath it. Desktop keeps its
            // own per-column scroll (see the text box below) since the
            // two sit side by side there and freezing the image column
            // reads fine in that layout. useContainScroll (see the ref
            // above) stops this inner scroll from chaining into the outer
            // page once it hits its top/bottom edge on mobile.
            overflowY: { xs: "auto", md: "visible" },
          }}
        >
          <Box
            sx={{
              // A fixed pixel flex-basis on mobile (not a percentage) so it
              // never depends on the parent's height resolving first — a
              // percentage basis here previously collapsed the illustration
              // to 0 height in some cases.
              flex: { xs: "0 0 240px", md: "1 1 50%" },
              minWidth: 0,
              minHeight: { md: 480 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              backgroundColor: entry.accentColor,
            }}
          >
            {entry.imageUrl ? (
              <Image
                src={entry.imageUrl}
                alt={entry.imageAlt}
                fill
                style={{ objectFit: "cover" }}
              />
            ) : illustration ? (
              <IllustrationFrame
                accentColor={entry.accentColor}
                variant={illustration.variant}
              >
                <illustration.component accentColor={entry.accentColor} />
              </IllustrationFrame>
            ) : (
              <Typography sx={{ fontSize: { xs: 96, md: 140 } }}>
                {entry.placeholderEmoji}
              </Typography>
            )}
            {/* Gutter shadow, half A: anchored to this box's own right edge
                (not the stack's midpoint) so it can never drift into a gap
                against the illustration, whatever its rendered width is. */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: "10px",
                background:
                  "linear-gradient(to left, rgba(20,14,6,0.28), rgba(20,14,6,0))",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          </Box>

          <Box
            sx={{
              flex: { xs: "0 0 auto", md: "1 1 50%" },
              minWidth: 0,
              pt: { xs: 3.5, md: 6 },
              pr: { xs: 3, md: 6 },
              pb: { xs: 3.5, md: 6 },
              pl: { xs: 3, md: 9 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: { xs: 2, md: 2 },
              position: "relative",
              // Desktop only: the two columns sit side by side, so
              // scrolling just the text here (while the illustration
              // column stays put) still reads fine — unlike mobile, which
              // now scrolls the whole stacked page together (see the
              // Stack above).
              overflowY: { md: "auto" },
            }}
          >
            {/* Gutter shadow, half B: anchored to this box's own left edge,
                matching the illustration side's half at the seam. */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "10px",
                background:
                  "linear-gradient(to right, rgba(20,14,6,0.28), rgba(20,14,6,0))",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <Chip
              label={entry.subtitle}
              sx={{
                alignSelf: "flex-start",
                backgroundColor: entry.accentColor,
                color: readableTextColor(entry.accentColor),
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 700, fontSize: { xs: "1.5rem" } }}
            >
              {entry.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { md: descriptionFontSize },
                lineHeight: { xs: 1.7, md: descriptionLineHeight },
              }}
            >
              {entry.description}
            </Typography>

            {/* Mobile only: plain trailing content instead of a floating
                overlay — it scrolls into view only once the reader
                actually reaches the end of the text, then just sits there
                like any other line, instead of hovering over the content
                the whole time and drifting during the scroll gesture. */}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                display: { xs: "block", md: "none" },
                alignSelf: "flex-end",
                fontVariantNumeric: "tabular-nums",
                opacity: 0.6,
              }}
            >
              {entry.order}
            </Typography>
          </Box>
        </Stack>

        {/* Desktop only: floats over the text column, anchored to the
            non-scrolling wrapper (not the Stack) so it stays put in the
            corner regardless of how much that column is scrolled. Mobile
            has its own inline version instead (see above). */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            bottom: 24,
            right: 32,
            fontVariantNumeric: "tabular-nums",
            opacity: 0.6,
          }}
        >
          {entry.order}
        </Typography>
      </Box>
    </BookPageFrame>
  );
}
