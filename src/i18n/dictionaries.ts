import type { Continent, Locale } from "@/content/types";

const dictionaries = {
  es: {
    brand: "The Culture Book",
    eyebrow: "Un libro cultural digital",
    tagline: "País por país · página por página",
    backToIndex: "← Volver al índice",
    storiesLabel: "historias",
    coverLabel: "Portada",
    continents: {
      europe: "Europa",
      "south-america": "Sudamérica",
      "north-america": "Norteamérica",
      asia: "Asia",
      africa: "África",
      oceania: "Oceanía",
    } satisfies Record<Continent, string>,
  },
  en: {
    brand: "The Culture Book",
    eyebrow: "A digital culture book",
    tagline: "Country by country · page by page",
    backToIndex: "← Back to index",
    storiesLabel: "stories",
    coverLabel: "Cover",
    continents: {
      europe: "Europe",
      "south-america": "South America",
      "north-america": "North America",
      asia: "Asia",
      africa: "Africa",
      oceania: "Oceania",
    } satisfies Record<Continent, string>,
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
