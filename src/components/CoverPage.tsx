import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { LocalizedCountry } from "@/content/types";
import { getEmblem } from "@/illustrations/emblems";
import { readableTextColor } from "@/illustrations/palette";
import BookPageFrame from "./BookPageFrame";

export default function CoverPage({
  country,
  entryCount,
  storiesLabel,
}: {
  country: LocalizedCountry;
  entryCount: number;
  storiesLabel: string;
}) {
  const Emblem = getEmblem(country.slug);
  const textColor = readableTextColor(country.accentColor);

  return (
    <BookPageFrame>
      {/* Mobile: a single cover panel. The desktop spread (icon side +
          text side) doesn't translate to a stacked layout — it just reads
          as two disconnected slabs with dead space between them. */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 1.5,
          p: 4,
          backgroundColor: country.accentColor,
          color: textColor,
        }}
      >
        {Emblem ? (
          <Box sx={{ width: 168, height: 168 }}>
            <Emblem accentColor={country.accentColor} />
          </Box>
        ) : null}

        <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
          {country.name}
        </Typography>

        <Typography sx={{ lineHeight: 1.7, opacity: 0.92, mt: 1 }}>
          {country.intro}
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.75,
            mt: 1,
          }}
        >
          {entryCount} {storiesLabel}
        </Typography>
      </Box>

      <Stack
        direction="row"
        sx={{ display: { xs: "none", md: "flex" }, height: "100%", position: "relative" }}
      >
        <Box
          sx={{
            flex: "1 1 50%",
            minWidth: 0,
            minHeight: 480,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 2,
            p: 6,
            position: "relative",
            backgroundColor: country.accentColor,
            color: textColor,
          }}
        >
          <Typography sx={{ fontSize: 40 }}>{country.flagEmoji}</Typography>

          {Emblem ? (
            <Box sx={{ width: 128, height: 128 }}>
              <Emblem accentColor={country.accentColor} />
            </Box>
          ) : null}

          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            {country.name}
          </Typography>

          {/* Gutter shadow, half A: anchored to this box's own right edge. */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: "10px",
              background:
                "linear-gradient(to left, rgba(0,0,0,0.28), rgba(0,0,0,0))",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: "1 1 50%",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            pt: 6,
            pr: 6,
            pb: 6,
            pl: 9,
            position: "relative",
            backgroundColor: country.accentColor,
            color: textColor,
          }}
        >
          {/* Gutter shadow, half B: anchored to this box's own left edge. */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "10px",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.28), rgba(0,0,0,0))",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <Typography sx={{ lineHeight: 1.7, opacity: 0.92 }}>
            {country.intro}
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              bottom: 24,
              right: 32,
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              opacity: 0.75,
            }}
          >
            {entryCount} {storiesLabel}
          </Typography>
        </Box>
      </Stack>
    </BookPageFrame>
  );
}
