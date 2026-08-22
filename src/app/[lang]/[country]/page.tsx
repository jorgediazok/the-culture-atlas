import { notFound } from "next/navigation";
import Container from "@mui/material/Container";
import BookCarousel from "@/components/BookCarousel";
import CoverPage from "@/components/CoverPage";
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
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <BookCarousel
        coverLabel={dict.coverLabel}
        backToIndexHref={`/${lang}`}
        backToIndexLabel={dict.backToIndex}
        backToFirstPageLabel={dict.backToFirstPage}
      >
        <CoverPage
          country={localizedCountry}
          entryCount={entries.length}
          storiesLabel={dict.storiesLabel}
          locale={lang}
          capitalLabel={dict.capitalLabel}
          languageLabel={dict.languageLabel}
          populationLabel={dict.populationLabel}
          currencyLabel={dict.currencyLabel}
        />
        {entries.map((entry) => (
          <PageSpread key={entry.id} entry={entry} countrySlug={slug} />
        ))}
      </BookCarousel>
    </Container>
  );
}
