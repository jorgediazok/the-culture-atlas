import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageSpread from "@/components/PageSpread";
import { countries } from "@/content/countries";
import { getEntriesForCountry } from "@/content";

export default function Home() {
  const country = countries[0];
  const entries = getEntriesForCountry(country.slug) ?? [];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
          The Culture Book
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Un libro cultural digital, país por país
        </Typography>
      </Stack>

      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
          {country.flagEmoji} {country.name}
        </Typography>
      </Stack>

      <Stack spacing={4}>
        {entries
          .sort((a, b) => a.order - b.order)
          .map((entry) => (
            <PageSpread key={entry.id} entry={entry} />
          ))}
      </Stack>
    </Container>
  );
}
