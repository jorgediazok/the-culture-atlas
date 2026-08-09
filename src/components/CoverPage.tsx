import Box from "@mui/material/Box";
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
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 2,
          p: { xs: 4, md: 8 },
          backgroundColor: country.accentColor,
          color: "#fff",
        }}
      >
        <Typography sx={{ fontSize: 40 }}>{country.flagEmoji}</Typography>

        {Emblem ? (
          <Box sx={{ width: { xs: 96, md: 140 }, height: { xs: 96, md: 140 } }}>
            <Emblem accentColor={country.accentColor} />
          </Box>
        ) : null}

        <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
          {country.name}
        </Typography>

        <Typography
          sx={{ maxWidth: 480, lineHeight: 1.7, opacity: 0.92 }}
        >
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
    </BookPageFrame>
  );
}
