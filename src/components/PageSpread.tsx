import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import type { LocalizedCultureEntry } from "@/content/types";
import { getIllustration } from "@/illustrations";
import IllustrationFrame from "@/illustrations/IllustrationFrame";

export default function PageSpread({
  entry,
  countrySlug,
}: {
  entry: LocalizedCultureEntry;
  countrySlug: string;
}) {
  const illustration = getIllustration(countrySlug, entry.id);
  const bookRadius = { xs: "12px", md: "4px 28px 28px 4px" };

  return (
    // Slightly smaller than its slide on desktop, leaving real empty space
    // at the bottom-right for the stacked "page edge" layers below to peek
    // into — otherwise the carousel viewport's required overflow:hidden
    // clips them before they're ever visible.
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", md: "calc(100% - 12px)" },
        height: { xs: "100%", md: "calc(100% - 16px)" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          inset: 0,
          borderRadius: bookRadius,
          backgroundColor: "#ede4cd",
          border: "1px solid #cdbf9c",
          transform: "translate(10px, 14px)",
        }}
      />
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          inset: 0,
          borderRadius: bookRadius,
          backgroundColor: "#f6efdd",
          border: "1px solid #dccfab",
          transform: "translate(5px, 7px)",
        }}
      />
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: bookRadius,
          border: "1px solid",
          borderColor: "divider",
          width: "100%",
          height: "100%",
        }}
      >
      <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "100%" }}>
        <Box
          sx={{
            flex: { xs: "0 0 auto", md: 1 },
            minWidth: 0,
            minHeight: { xs: 260, md: 480 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundColor: entry.accentColor,
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              inset: 0,
              width: "26px",
              background: "linear-gradient(to right, rgba(0,0,0,0.22), rgba(0,0,0,0))",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
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
        </Box>

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            p: { xs: 3, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            position: "relative",
          }}
        >
          <Chip
            label={entry.subtitle}
            sx={{
              alignSelf: "flex-start",
              backgroundColor: entry.accentColor,
              color: "#fff",
              fontWeight: 600,
            }}
          />
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            {entry.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
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
      </Paper>
    </Box>
  );
}
