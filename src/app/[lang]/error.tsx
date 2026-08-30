"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { defaultLocale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale = isValidLocale(segment) ? segment : defaultLocale;
  const dict = getDictionary(locale);

  useEffect(() => {
    console.error(error);
  }, [error]);

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
          {dict.errorTitle}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 420 }}>
          {dict.errorBody}
        </Typography>
        <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
          <Button onClick={() => retry()} variant="contained">
            {dict.errorRetry}
          </Button>
          <Button component={Link} href={`/${locale}`} variant="outlined">
            {dict.notFoundCta}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
