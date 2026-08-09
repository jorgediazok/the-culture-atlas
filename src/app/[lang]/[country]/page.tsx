import { notFound } from "next/navigation";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BackLink from "@/components/BackLink";
import BookCarousel from "@/components/BookCarousel";
import PageSpread from "@/components/PageSpread";
import { countries } from "@/content/countries";
import { getEntriesForCountry, localizeCountry, localizeEntry } from "@/content";
import { isValidLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    countries.map((country) => ({ lang, country: country.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[country]">) {
  const { lang, country: slug } = await params;
  if (!isValidLocale(lang)) return {};

  const country = countries.find((c) => c.slug === slug);
  const dict = getDictionary(lang);

  return {
    title: country
      ? `${localizeCountry(country, lang).name} — ${dict.brand}`
      : dict.brand,
  };
}

export default async function CountryPage({
  params,
}: PageProps<"/[lang]/[country]">) {
  const { lang, country: slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const country = countries.find((c) => c.slug === slug);
  const rawEntries = getEntriesForCountry(slug);

  if (!country || !rawEntries) {
    notFound();
  }

  const dict = getDictionary(lang);
  const localizedCountry = localizeCountry(country, lang);
  const entries = rawEntries
    .sort((a, b) => a.order - b.order)
    .map((entry) => localizeEntry(entry, lang));

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <BackLink href={`/${lang}`}>{dict.backToIndex}</BackLink>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          {localizedCountry.flagEmoji} {localizedCountry.name}
        </Typography>
      </Stack>

      <BookCarousel>
        {entries.map((entry) => (
          <PageSpread key={entry.id} entry={entry} countrySlug={slug} />
        ))}
      </BookCarousel>
    </Container>
  );
}
