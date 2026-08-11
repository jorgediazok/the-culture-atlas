import type { Continent, Locale } from "@/content/types";

const dictionaries = {
  es: {
    brand: "Atlas de la Cultura",
    eyebrow: "Un atlas cultural digital",
    tagline: "País por país · página por página",
    intro:
      "Un libro ilustrado por país, con historias breves para conocer una cultura de a poco.",
    searchPlaceholder: "Buscar un país...",
    exploreByContinent: "o explorá por continente",
    backToIndex: "← Volver al índice",
    backToFirstPage: "← Volver a la primera página",
    storiesLabel: "historias",
    coverLabel: "Portada",
    countriesLabel: "países",
    footerLocation: "Hecho en Buenos Aires, Argentina",
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
    brand: "The Culture Atlas",
    eyebrow: "A digital culture atlas",
    tagline: "Country by country · page by page",
    intro:
      "An illustrated book for every country, with short stories to get to know a culture bit by bit.",
    searchPlaceholder: "Search a country...",
    exploreByContinent: "or explore by continent",
    backToIndex: "← Back to index",
    backToFirstPage: "← Back to first page",
    storiesLabel: "stories",
    coverLabel: "Cover",
    countriesLabel: "countries",
    footerLocation: "Made in Buenos Aires, Argentina",
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
