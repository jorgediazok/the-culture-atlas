import type { MetadataRoute } from "next";
import { countries } from "@/content/countries";
import { locales } from "@/i18n/config";

const BASE_URL = "https://the-culture-atlas.vercel.app";

function languageAlternates(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages: languageAlternates("") },
  }));

  const countryEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    countries.map((country) => ({
      url: `${BASE_URL}/${locale}/${country.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: languageAlternates(`/${country.slug}`) },
    }))
  );

  return [...homeEntries, ...countryEntries];
}
