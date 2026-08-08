import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import type { CultureEntry } from "@/content/types";

export default function PageSpread({ entry }: { entry: CultureEntry }) {
  return (
    <Paper
      elevation={3}
      sx={{
        overflow: "hidden",
        borderRadius: 3,
        width: "100%",
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }}>
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
        </Box>
      </Stack>
    </Paper>
  );
}
