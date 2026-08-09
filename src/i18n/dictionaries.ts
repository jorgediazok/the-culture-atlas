import type { Locale } from "@/content/types";

const dictionaries = {
  es: {
    brand: "The Culture Book",
    tagline: "Un libro cultural digital, país por país",
    backToIndex: "← Volver al índice",
  },
  en: {
    brand: "The Culture Book",
    tagline: "A digital culture book, country by country",
    backToIndex: "← Back to index",
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
