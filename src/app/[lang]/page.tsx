import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BookCover from "@/components/BookCover";
import ShelfRow from "@/components/ShelfRow";
import ContinentChips from "@/components/ContinentChips";
import CountrySearch from "@/components/CountrySearch";
import { countries } from "@/content/countries";
import { localizeCountry } from "@/content";
import { isValidLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { averageColor } from "@/illustrations/palette";
import type { Continent } from "@/content/types";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const CONTINENT_ORDER: Continent[] = [
  "europe",
  "south-america",
  "north-america",
  "asia",
  "africa",
  "oceania",
];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = getDictionary(lang);

  const shelves = CONTINENT_ORDER.map((continent) => ({
    continent,
    countries: countries
      .filter((c) => c.continent === continent)
      .map((c) => localizeCountry(c, lang))
      .sort((a, b) => a.name.localeCompare(b.name, lang)),
  })).filter((shelf) => shelf.countries.length > 0);

  const counts = Object.fromEntries(
    CONTINENT_ORDER.map((c) => [c, 0])
  ) as Record<Continent, number>;
  const colors = {} as Record<Continent, string>;
  for (const shelf of shelves) {
    counts[shelf.continent] = shelf.countries.length;
    colors[shelf.continent] = averageColor(
      shelf.countries.map((c) => c.accentColor)
    );
  }

  const searchIndex = shelves
    .flatMap((s) => s.countries)
    .map((c) => ({ slug: c.slug, name: c.name, flagEmoji: c.flagEmoji }))
    .sort((a, b) => a.name.localeCompare(b.name, lang));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          maxWidth: 560,
          mx: "auto",
          mb: { xs: 5, md: 6 },
          textAlign: "center",
          px: { xs: 4, md: 5 },
          py: { xs: 4, md: 5 },
          border: "1px solid",
          borderColor: "divider",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 7,
            border: "1px solid",
            borderColor: "divider",
            pointerEvents: "none",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "primary.main",
            fontWeight: 600,
            mb: 2.25,
          }}
        >
          {dict.eyebrow}
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontSize: { xs: 34, md: 44 }, letterSpacing: "0.01em" }}
        >
          {dict.brand}
        </Typography>
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ alignItems: "center", justifyContent: "center", my: 2.5 }}
        >
          <Box sx={{ width: 46, height: "1px", backgroundColor: "divider" }} />
          <Typography sx={{ fontSize: 13, color: "primary.main" }}>✦</Typography>
          <Box sx={{ width: 46, height: "1px", backgroundColor: "divider" }} />
        </Stack>
        <Typography
          sx={{
            fontSize: 13,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "text.secondary",
            mb: 2,
          }}
        >
          {dict.tagline}
        </Typography>
        <Typography sx={{ fontSize: 14.5, color: "text.secondary", lineHeight: 1.5 }}>
          {dict.intro}
        </Typography>
      </Box>

      <Box
        sx={{
          mb: { xs: 7, md: 9 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <CountrySearch
          locale={lang}
          countries={searchIndex}
          placeholder={dict.searchPlaceholder}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            width: "100%",
            maxWidth: 560,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "divider" }} />
          <Typography
            sx={{
              fontSize: 11,
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            {dict.exploreByContinent}
          </Typography>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "divider" }} />
        </Box>
        <ContinentChips
          labels={dict.continents}
          counts={counts}
          colors={colors}
          countriesLabel={dict.countriesLabel}
        />
      </Box>

      {shelves.map(({ continent, countries: shelfCountries }) => (
        <Box
          key={continent}
          id={`shelf-${continent}`}
          sx={{ mb: { xs: 7, md: 8 }, scrollMarginTop: 24 }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ alignItems: "baseline", mb: 2.5 }}
          >
            <Typography variant="h5" component="h2">
              {dict.continents[continent]}
            </Typography>
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              {shelfCountries.length}
            </Typography>
            <Box sx={{ flex: 1, height: "1px", backgroundColor: "divider" }} />
          </Stack>

          <ShelfRow>
            {shelfCountries.map((country) => (
              <BookCover key={country.slug} country={country} locale={lang} />
            ))}
          </ShelfRow>
        </Box>
      ))}
    </Container>
  );
}
