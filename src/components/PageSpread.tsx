import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import type { LocalizedCultureEntry } from "@/content/types";
import { getIllustration } from "@/illustrations";
import IllustrationFrame from "@/illustrations/IllustrationFrame";
import BookPageFrame from "./BookPageFrame";

export default function PageSpread({
  entry,
  countrySlug,
}: {
  entry: LocalizedCultureEntry;
  countrySlug: string;
}) {
  const illustration = getIllustration(countrySlug, entry.id);

  // The page now has a fixed height on desktop (set in BookCarousel), so a
  // long description can't just grow the page anymore. Most entries are
  // well under this threshold and render at full size — this only kicks in
  // for the rare outlier that's still long after trimming the copy itself.
  const descriptionLength = entry.description.length;
  const descriptionFontSize =
    descriptionLength > 1300 ? 13.5 : descriptionLength > 1100 ? 15 : 16;
  const descriptionLineHeight =
    descriptionLength > 1300 ? 1.5 : descriptionLength > 1100 ? 1.6 : 1.7;

  return (
    <BookPageFrame>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ height: "100%", position: "relative" }}
      >
        <Box
          sx={{
            flex: { xs: "0 0 auto", md: "1 1 50%" },
            minWidth: 0,
            minHeight: { xs: 260, md: 480 },
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
            flex: { xs: 1, md: "1 1 50%" },
            minWidth: 0,
            pt: { xs: 3, md: 5 },
            pr: { xs: 3, md: 5 },
            pb: { xs: 3, md: 5 },
            pl: { xs: 3, md: 7 },
            display: "flex",
            flexDirection: "column",
            // Top-aligned, not centered: a centered flex column with
            // overflow clips content from BOTH ends when it's too tall,
            // which was hiding the chip and title at the top. Starting
            // from the top guarantees they're always visible, and only
            // the tail of a long description can ever get cut.
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 1.5,
            position: "relative",
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
            size="small"
            sx={{
              alignSelf: "flex-start",
              backgroundColor: entry.accentColor,
              color: "#fff",
              fontWeight: 600,
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { md: descriptionLength > 1100 ? "1.5rem" : "2.125rem" },
              lineHeight: { md: 1.25 },
            }}
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

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              position: "absolute",
              bottom: { xs: 16, md: 24 },
              right: { xs: 20, md: 32 },
              fontVariantNumeric: "tabular-nums",
              opacity: 0.6,
            }}
          >
            {entry.order}
          </Typography>
        </Box>
      </Stack>
    </BookPageFrame>
  );
}
