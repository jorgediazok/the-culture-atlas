import type {
  Country,
  CultureEntry,
  Locale,
  LocalizedCountry,
  LocalizedCultureEntry,
} from "./types";
import { netherlands } from "./netherlands";
import { argentina } from "./argentina";
import { belgium } from "./belgium";
import { switzerland } from "./switzerland";
import { france } from "./france";
import { croatia } from "./croatia";

export const contentByCountry: Record<string, CultureEntry[]> = {
  netherlands,
  argentina,
  belgium,
  switzerland,
  france,
  croatia,
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
