"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { defaultLocale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale = isValidLocale(segment) ? segment : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 10, md: 16 }, textAlign: "center" }}>
      <Stack spacing={2.5} sx={{ alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "var(--font-fraunces), serif",
            fontWeight: 700,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
          }}
        >
          {dict.notFoundTitle}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 420 }}>
          {dict.notFoundBody}
        </Typography>
        <Button component={Link} href={`/${locale}`} variant="contained" sx={{ mt: 1 }}>
          {dict.notFoundCta}
        </Button>
      </Stack>
    </Container>
  );
}
