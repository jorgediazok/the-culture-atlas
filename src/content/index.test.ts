import { getEntriesForCountry, localizeCountry, localizeEntry } from "./index";
import type { Country, CultureEntry } from "./types";

describe("localizeEntry", () => {
  const entry: CultureEntry = {
    id: "test-entry",
    order: 1,
    accentColor: "#ff0000",
    imageUrl: null,
    placeholderEmoji: "🎈",
    translations: {
      es: {
        title: "Título",
        subtitle: "Subtítulo",
        description: "Descripción",
        imageAlt: "Alt es",
      },
      en: {
        title: "Title",
        subtitle: "Subtitle",
        description: "Description",
        imageAlt: "Alt en",
      },
    },
  };

  it("merges the requested locale's translation into the entry", () => {
    expect(localizeEntry(entry, "es")).toEqual({
      id: "test-entry",
      order: 1,
      accentColor: "#ff0000",
      imageUrl: null,
      placeholderEmoji: "🎈",
      title: "Título",
      subtitle: "Subtítulo",
      description: "Descripción",
      imageAlt: "Alt es",
    });
  });

  it("switches translations when given a different locale", () => {
    expect(localizeEntry(entry, "en").title).toBe("Title");
  });

  it("does not leak the translations object onto the result", () => {
    expect(localizeEntry(entry, "es")).not.toHaveProperty("translations");
  });
});

describe("localizeCountry", () => {
  const country: Country = {
    slug: "testland",
    flagEmoji: "🏳️",
    accentColor: "#00ff00",
    continent: "europe",
    population: 1000,
    translations: {
      es: { name: "Tierra de Prueba", intro: "Intro es" },
      en: { name: "Testland", intro: "Intro en" },
    },
  };

  it("merges the requested locale's translation into the country", () => {
    const localized = localizeCountry(country, "en");
    expect(localized.name).toBe("Testland");
    expect(localized.intro).toBe("Intro en");
    expect(localized.slug).toBe("testland");
  });

  it("omits optional quick facts when not provided", () => {
    const localized = localizeCountry(country, "es");
    expect(localized.capital).toBeUndefined();
  });
});

describe("getEntriesForCountry", () => {
  it("returns the entries for a real, known country slug", () => {
    const entries = getEntriesForCountry("spain");
    expect(entries).not.toBeNull();
    expect(entries!.length).toBeGreaterThan(0);
  });

  it("returns null for a slug that doesn't exist", () => {
    expect(getEntriesForCountry("not-a-real-country")).toBeNull();
  });
});
