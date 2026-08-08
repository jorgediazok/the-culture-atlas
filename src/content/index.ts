import type { CultureEntry } from "./types";
import { netherlands } from "./netherlands";

export const contentByCountry: Record<string, CultureEntry[]> = {
  netherlands,
};

export function getEntriesForCountry(slug: string): CultureEntry[] | null {
  return contentByCountry[slug] ?? null;
}
