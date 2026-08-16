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
          justifyContent: "space-evenly",
          textAlign: "center",
          gap: 3,
          pt: 7,
          pb: 6,
          px: 4,
          minHeight: { xs: 1000 },
          backgroundColor: country.accentColor,
          color: textColor,
        }}
      >
        {Emblem ? (
          <Box
            sx={{
              width: 260,
              height: 260,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              backgroundColor: "rgba(0,0,0,0.08)",
              boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.28)",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "13px",
                borderRadius: "50%",
                border: "1px solid rgba(0,0,0,0.22)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -7,
                left: "50%",
                transform: "translateX(-50%)",
                width: "2.5px",
                height: "15px",
                backgroundColor: textColor,
                opacity: 0.4,
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -7,
                left: "50%",
                transform: "translateX(-50%)",
                width: "2.5px",
                height: "15px",
                backgroundColor: textColor,
                opacity: 0.4,
              }}
            />
            <Box sx={{ width: 178, height: 178 }}>
              <Emblem accentColor={country.accentColor} />
            </Box>
          </Box>
        ) : null}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2.5,
          }}
        >
          <Box sx={{ width: 48, height: "2px", backgroundColor: textColor, opacity: 0.35 }} />

          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            {country.name}
          </Typography>

          <Typography sx={{ lineHeight: 1.7, opacity: 0.92, maxWidth: 340 }}>
            {country.intro}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid",
            borderColor: textColor,
            borderRadius: 999,
            px: 2.5,
            py: 0.75,
            opacity: 0.85,
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {entryCount} {storiesLabel}
          </Typography>
        </Box>
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
          {Emblem ? (
            <Box
              sx={{
                width: 210,
                height: 210,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                backgroundColor: "rgba(0,0,0,0.08)",
                boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.28)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: "10px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,0,0,0.22)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2px",
                  height: "12px",
                  backgroundColor: textColor,
                  opacity: 0.4,
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -5,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2px",
                  height: "12px",
                  backgroundColor: textColor,
                  opacity: 0.4,
                }}
              />
              <Box sx={{ width: 140, height: 140 }}>
                <Emblem accentColor={country.accentColor} />
              </Box>
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
