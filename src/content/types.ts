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
};

export type Country = {
  slug: string;
  flagEmoji: string;
  accentColor: string;
  translations: Record<Locale, CountryTranslation>;
};

export type LocalizedCultureEntry = Omit<CultureEntry, "translations"> &
  CultureEntryTranslation;

export type LocalizedCountry = Omit<Country, "translations"> &
  CountryTranslation;
