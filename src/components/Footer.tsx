import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formatNumber } from "@/i18n/format";
import { countries } from "@/content/countries";
import { contentByCountry } from "@/content";

const COUNTRY_COUNT = countries.length;
const STORY_COUNT = Object.values(contentByCountry).reduce(
  (total, entries) => total + entries.length,
  0
);

export default function Footer({
  brand,
  countriesLabel,
  storiesLabel,
  locationLabel,
  tagline,
  madeByLabel,
  disclaimer,
  locale,
}: {
  brand: string;
  countriesLabel: string;
  storiesLabel: string;
  locationLabel: string;
  tagline: string;
  madeByLabel: string;
  disclaimer: string;
  locale: string;
}) {
  const countryCount = formatNumber(COUNTRY_COUNT, locale);
  const storyCount = formatNumber(STORY_COUNT, locale);
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        mt: 8,
        py: 5,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-fraunces), serif",
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        {brand}
      </Typography>

      <Typography
        sx={{ color: "text.secondary", fontSize: 12, letterSpacing: "0.3em", my: 1.25 }}
      >
        ✦ ✦ ✦
      </Typography>

      <Typography sx={{ fontSize: 12.5, color: "text.secondary" }}>
        {locationLabel} · {countryCount} {countriesLabel} · {storyCount} {storiesLabel}
      </Typography>

      <Typography
        sx={{
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "text.disabled",
          mt: 1.25,
        }}
      >
        {tagline}
      </Typography>

      <Typography sx={{ fontSize: 11, color: "text.disabled", mt: 1.5 }}>
        {madeByLabel}{" "}
        <Box
          component="a"
          href="mailto:jorgediazok@gmail.com"
          sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
        >
          Jorge Dev
        </Box>
      </Typography>

      <Typography
        sx={{
          fontSize: 10.5,
          color: "text.disabled",
          mt: 2,
          maxWidth: 420,
          mx: "auto",
          lineHeight: 1.5,
        }}
      >
        {disclaimer}
      </Typography>
    </Box>
  );
}
