import type { Continent, Locale } from "@/content/types";

const dictionaries = {
  es: {
    brand: "The Culture Book",
    eyebrow: "Un libro cultural digital",
    tagline: "País por país · página por página",
    backToIndex: "← Volver al índice",
    backToFirstPage: "← Volver a la primera página",
    storiesLabel: "historias",
    coverLabel: "Portada",
    countriesLabel: "países",
    footerLocation: "Compuesto en Buenos Aires, Argentina",
    madeBy: "Hecho por",
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
    backToFirstPage: "← Back to first page",
    storiesLabel: "stories",
    coverLabel: "Cover",
    countriesLabel: "countries",
    footerLocation: "Set in Buenos Aires, Argentina",
    madeBy: "Made by",
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
