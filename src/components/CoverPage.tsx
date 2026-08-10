import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { LocalizedCountry } from "@/content/types";
import { getEmblem } from "@/illustrations/emblems";
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
            minHeight: { xs: 220, md: 480 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 2,
            p: { xs: 4, md: 6 },
            position: "relative",
            backgroundColor: country.accentColor,
            color: "#fff",
          }}
        >
          <Typography sx={{ fontSize: 40 }}>{country.flagEmoji}</Typography>

          {Emblem ? (
            <Box sx={{ width: { xs: 92, md: 128 }, height: { xs: 92, md: 128 } }}>
              <Emblem accentColor={country.accentColor} />
            </Box>
          ) : null}

          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            {country.name}
          </Typography>

          {/* Gutter shadow, half A: anchored to this box's own right edge. */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
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
            flex: { xs: 1, md: "1 1 50%" },
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            pt: { xs: 4, md: 6 },
            pr: { xs: 4, md: 6 },
            pb: { xs: 4, md: 6 },
            pl: { xs: 4, md: 9 },
            position: "relative",
            backgroundColor: country.accentColor,
            color: "#fff",
          }}
        >
          {/* Gutter shadow, half B: anchored to this box's own left edge. */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
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
              bottom: { xs: 16, md: 24 },
              right: { xs: 20, md: 32 },
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
