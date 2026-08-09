import type {
  Country,
  CultureEntry,
  Locale,
  LocalizedCountry,
  LocalizedCultureEntry,
} from "./types";
import { netherlands } from "./netherlands";

export const contentByCountry: Record<string, CultureEntry[]> = {
  netherlands,
};

export function getEntriesForCountry(slug: string): CultureEntry[] | null {
  return contentByCountry[slug] ?? null;
}

export function localizeEntry(
  entry: CultureEntry,
  locale: Locale
): LocalizedCultureEntry {
  const { translations, ...rest } = entry;
  return { ...rest, ...translations[locale] };
}

export function localizeCountry(
  country: Country,
  locale: Locale
): LocalizedCountry {
  const { translations, ...rest } = country;
  return { ...rest, ...translations[locale] };
}
