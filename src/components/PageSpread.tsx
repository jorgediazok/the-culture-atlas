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

  return (
    <Paper
      elevation={0}
      sx={{
        overflow: "hidden",
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        width: "100%",
        height: "100%",
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "100%" }}>
        <Box
          sx={{
            flex: 1,
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
        </Box>

        <Box
          sx={{
            flex: 1,
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
  );
}
