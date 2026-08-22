export type Locale = "es" | "en";

export type CultureEntryTranslation = {
  title: string;
  subtitle: string;
  description: string;
  imageAlt: string;
};

export type CultureEntry = {
  id: string;
  order: number;
  accentColor: string;
  imageUrl: string | null;
  placeholderEmoji: string;
  translations: Record<Locale, CultureEntryTranslation>;
};

export type CountryTranslation = {
  name: string;
  intro: string;
  // Quick facts — optional while the atlas rolls these out country by
  // country, same as imageUrl/illustrations. Only render them as a group:
  // a country either has all four or none, never a partial set.
  capital?: string;
  language?: string;
  currency?: string;
};

export type Continent =
  | "europe"
  | "south-america"
  | "north-america"
  | "asia"
  | "africa"
  | "oceania";

export type Country = {
  slug: string;
  flagEmoji: string;
  accentColor: string;
  continent: Continent;
  population?: number;
  translations: Record<Locale, CountryTranslation>;
};

export type LocalizedCultureEntry = Omit<CultureEntry, "translations"> &
  CultureEntryTranslation;

export type LocalizedCountry = Omit<Country, "translations"> &
  CountryTranslation;
