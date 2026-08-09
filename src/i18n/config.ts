import type { Locale } from "@/content/types";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
