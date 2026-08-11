import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// The project's target scope: every country in the world, 20 entries each —
// not the current in-progress count, which keeps growing with every batch.
const TARGET_COUNTRIES = 195;
const TARGET_ENTRIES_PER_COUNTRY = 20;
const TARGET_STORIES = TARGET_COUNTRIES * TARGET_ENTRIES_PER_COUNTRY;

// Node's default (small-icu) build only ships full number-formatting data
// for "en", so `toLocaleString("es")` silently drops the thousands
// separator. Formatting it by hand sidesteps that instead of depending on
// the runtime's ICU data.
function formatNumber(value: number, locale: string): string {
  const separator = locale === "es" ? "." : ",";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export default function Footer({
  brand,
  countriesLabel,
  storiesLabel,
  locationLabel,
  tagline,
  madeByLabel,
  locale,
}: {
  brand: string;
  countriesLabel: string;
  storiesLabel: string;
  locationLabel: string;
  tagline: string;
  madeByLabel: string;
  locale: string;
}) {
  const countryCount = formatNumber(TARGET_COUNTRIES, locale);
  const storyCount = formatNumber(TARGET_STORIES, locale);
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
        {madeByLabel} Jorge Dev
      </Typography>
    </Box>
  );
}
