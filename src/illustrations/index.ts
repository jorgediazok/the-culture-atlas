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
import { laosIllustrations } from "./laos";
import { botswanaIllustrations } from "./botswana";
import { moroccoIllustrations } from "./morocco";
import { egyptIllustrations } from "./egypt";
import { algeriaIllustrations } from "./algeria";
import { tuvaluIllustrations } from "./tuvalu";
import { fijiIllustrations } from "./fiji";
import { micronesiaIllustrations } from "./micronesia";
import { nauruIllustrations } from "./nauru";
import { tongaIllustrations } from "./tonga";
import { vanuatuIllustrations } from "./vanuatu";
import { ethiopiaIllustrations } from "./ethiopia";
import { kiribatiIllustrations } from "./kiribati";
import { jamaicaIllustrations } from "./jamaica";
import { cubaIllustrations } from "./cuba";
import { canadaIllustrations } from "./canada";
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
  laos: laosIllustrations,
  botswana: botswanaIllustrations,
  morocco: moroccoIllustrations,
  egypt: egyptIllustrations,
  algeria: algeriaIllustrations,
  tuvalu: tuvaluIllustrations,
  fiji: fijiIllustrations,
  micronesia: micronesiaIllustrations,
  nauru: nauruIllustrations,
  tonga: tongaIllustrations,
  vanuatu: vanuatuIllustrations,
  ethiopia: ethiopiaIllustrations,
  kiribati: kiribatiIllustrations,
  jamaica: jamaicaIllustrations,
  cuba: cubaIllustrations,
  canada: canadaIllustrations,
};

export function getIllustration(
  countrySlug: string,
  entryId: string
): IllustrationDefinition | null {
  return illustrationsByCountry[countrySlug]?.[entryId] ?? null;
}
