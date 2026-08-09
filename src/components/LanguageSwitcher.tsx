"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
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
    <ToggleButtonGroup value={locale} exclusive size="small">
      {locales.map((code) => (
        <ToggleButton
          key={code}
          value={code}
          component={Link}
          href={pathFor(code)}
        >
          {labels[code]}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
