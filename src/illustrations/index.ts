import { netherlandsIllustrations } from "./netherlands";
import { argentinaIllustrations } from "./argentina";
import { belgiumIllustrations } from "./belgium";
import { switzerlandIllustrations } from "./switzerland";
import { franceIllustrations } from "./france";
import { croatiaIllustrations } from "./croatia";
import { luxembourgIllustrations } from "./luxembourg";
import { albaniaIllustrations } from "./albania";
import { italyIllustrations } from "./italy";
import { russiaIllustrations } from "./russia";
import { brazilIllustrations } from "./brazil";
import { colombiaIllustrations } from "./colombia";
import { capeVerdeIllustrations } from "./cape-verde";
import { southAfricaIllustrations } from "./south-africa";
import { thailandIllustrations } from "./thailand";
import { vietnamIllustrations } from "./vietnam";
import { australiaIllustrations } from "./australia";
import { newZealandIllustrations } from "./new-zealand";
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
  russia: russiaIllustrations,
  brazil: brazilIllustrations,
  colombia: colombiaIllustrations,
  "cape-verde": capeVerdeIllustrations,
  "south-africa": southAfricaIllustrations,
  thailand: thailandIllustrations,
  vietnam: vietnamIllustrations,
  australia: australiaIllustrations,
  "new-zealand": newZealandIllustrations,
};

export function getIllustration(
  countrySlug: string,
  entryId: string
): IllustrationDefinition | null {
  return illustrationsByCountry[countrySlug]?.[entryId] ?? null;
}
