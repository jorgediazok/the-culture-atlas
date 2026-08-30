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
    capitalLabel: "Capital",
    languageLabel: "Idioma",
    populationLabel: "Población",
    currencyLabel: "Moneda",
    footerLocation: "Hecho en Buenos Aires, Argentina",
    madeBy: "Hecho por",
    disclaimer:
      "El contenido de este sitio fue generado con asistencia de IA y puede contener imprecisiones. No reemplaza fuentes verificadas.",
    notFoundTitle: "Página no encontrada",
    notFoundBody: "No encontramos lo que buscabas — puede que el país no exista todavía o que el enlace esté mal escrito.",
    notFoundCta: "Volver al índice",
    errorTitle: "Algo salió mal",
    errorBody: "Ocurrió un error inesperado al cargar esta página.",
    errorRetry: "Reintentar",
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
    capitalLabel: "Capital",
    languageLabel: "Language",
    populationLabel: "Population",
    currencyLabel: "Currency",
    footerLocation: "Made in Buenos Aires, Argentina",
    madeBy: "Made by",
    disclaimer:
      "This site's content was generated with AI assistance and may contain inaccuracies. It is not a substitute for verified sources.",
    notFoundTitle: "Page not found",
    notFoundBody: "We couldn't find what you were looking for — the country may not exist yet, or the link may be mistyped.",
    notFoundCta: "Back to index",
    errorTitle: "Something went wrong",
    errorBody: "An unexpected error occurred while loading this page.",
    errorRetry: "Try again",
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
