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
import { chileIllustrations } from "./chile";
import { uruguayIllustrations } from "./uruguay";
import { ugandaIllustrations } from "./uganda";
import { zimbabweIllustrations } from "./zimbabwe";
import { chinaIllustrations } from "./china";
import { iranIllustrations } from "./iran";
import { palestineIllustrations } from "./palestine";
import { papuaNewGuineaIllustrations } from "./papua-new-guinea";
import { peruIllustrations } from "./peru";
import { boliviaIllustrations } from "./bolivia";
import { germanyIllustrations } from "./germany";
import { venezuelaIllustrations } from "./venezuela";
import { kenyaIllustrations } from "./kenya";
import { indonesiaIllustrations } from "./indonesia";
import { ecuadorIllustrations } from "./ecuador";
import { nepalIllustrations } from "./nepal";
import { paraguayIllustrations } from "./paraguay";
import { northKoreaIllustrations } from "./north-korea";
import { turkmenistanIllustrations } from "./turkmenistan";
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
  chile: chileIllustrations,
  uruguay: uruguayIllustrations,
  uganda: ugandaIllustrations,
  zimbabwe: zimbabweIllustrations,
  china: chinaIllustrations,
  iran: iranIllustrations,
  palestine: palestineIllustrations,
  "papua-new-guinea": papuaNewGuineaIllustrations,
  peru: peruIllustrations,
  bolivia: boliviaIllustrations,
  germany: germanyIllustrations,
  venezuela: venezuelaIllustrations,
  kenya: kenyaIllustrations,
  indonesia: indonesiaIllustrations,
  ecuador: ecuadorIllustrations,
  nepal: nepalIllustrations,
  paraguay: paraguayIllustrations,
  "north-korea": northKoreaIllustrations,
  turkmenistan: turkmenistanIllustrations,
};

export function getIllustration(
  countrySlug: string,
  entryId: string
): IllustrationDefinition | null {
  return illustrationsByCountry[countrySlug]?.[entryId] ?? null;
}
