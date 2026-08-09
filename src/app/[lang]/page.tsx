import { notFound } from "next/navigation";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CountryCard from "@/components/CountryCard";
import { countries } from "@/content/countries";
import { localizeCountry } from "@/content";
import { isValidLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
          {dict.brand}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {dict.tagline}
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {countries.map((country) => (
          <Grid key={country.slug} size={{ xs: 12, sm: 6 }}>
            <CountryCard country={localizeCountry(country, lang)} locale={lang} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
