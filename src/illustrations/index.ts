import { netherlandsIllustrations } from "./netherlands";
import { argentinaIllustrations } from "./argentina";
import { belgiumIllustrations } from "./belgium";
import { switzerlandIllustrations } from "./switzerland";
import { franceIllustrations } from "./france";
import { croatiaIllustrations } from "./croatia";
import { luxembourgIllustrations } from "./luxembourg";
import { albaniaIllustrations } from "./albania";
import { italyIllustrations } from "./italy";
import type { IllustrationDefinition } from "./types";

const illustrationsByCountry: Record<string, Record<string, IllustrationDefinition>> = {
  netherlands: netherlandsIllustrations,
  argentina: argentinaIllustrations,
  belgium: belgiumIllustrations,
  switzerland: switzerlandIllustrations,
  france: franceIllustrations,
  croatia: croatiaIllustrations,
  luxembourg: luxembourgIllustrations,
  albania: albaniaIllustrations,
  italy: italyIllustrations,
};

export function getIllustration(
  countrySlug: string,
  entryId: string
): IllustrationDefinition | null {
  return illustrationsByCountry[countrySlug]?.[entryId] ?? null;
}
