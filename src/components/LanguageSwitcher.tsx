"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { locales } from "@/i18n/config";
import type { Locale } from "@/content/types";

const labels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function pathFor(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || "/";
  }

  return (
    <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
      {locales.map((code, i) => {
        const active = code === locale;
        return (
          <Stack key={code} direction="row" sx={{ alignItems: "center", gap: 1 }}>
            {i > 0 && (
              <Box
                sx={{
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  backgroundColor: "text.disabled",
                }}
              />
            )}
            <Box
              component={Link}
              href={pathFor(code)}
              sx={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: "0.75rem",
                fontWeight: active ? 600 : 500,
                letterSpacing: "0.06em",
                textDecoration: "none",
                color: active ? "primary.main" : "text.secondary",
                borderBottom: active ? "1px solid" : "1px solid transparent",
                borderColor: active ? "primary.main" : "transparent",
                pb: "2px",
                transition: "color 0.15s ease",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {labels[code]}
            </Box>
          </Stack>
        );
      })}
    </Stack>
  );
}
