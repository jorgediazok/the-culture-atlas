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
import { unitedStatesIllustrations } from "./united-states";
import { mexicoIllustrations } from "./mexico";
import { greenlandIllustrations } from "./greenland";
import { costaRicaIllustrations } from "./costa-rica";
import { panamaIllustrations } from "./panama";
import { belizeIllustrations } from "./belize";
import { curacaoIllustrations } from "./curacao";
import { surinameIllustrations } from "./suriname";
import { guyanaIllustrations } from "./guyana";
import { austriaIllustrations } from "./austria";
import { spainIllustrations } from "./spain";
import { haitiIllustrations } from "./haiti";
import { trinidadAndTobagoIllustrations } from "./trinidad-and-tobago";
import { japanIllustrations } from "./japan";
import { myanmarIllustrations } from "./myanmar";
import { ghanaIllustrations } from "./ghana";
import { eritreaIllustrations } from "./eritrea";
import { solomonIslandsIllustrations } from "./solomon-islands";
import { newCaledoniaIllustrations } from "./new-caledonia";
import { andorraIllustrations } from "./andorra";
import { sanMarinoIllustrations } from "./san-marino";
import { palauIllustrations } from "./palau";
import { marshallIslandsIllustrations } from "./marshall-islands";
import { indiaIllustrations } from "./india";
import { bangladeshIllustrations } from "./bangladesh";
import { pakistanIllustrations } from "./pakistan";
import { mongoliaIllustrations } from "./mongolia";
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
  "united-states": unitedStatesIllustrations,
  mexico: mexicoIllustrations,
  greenland: greenlandIllustrations,
  "costa-rica": costaRicaIllustrations,
  panama: panamaIllustrations,
  belize: belizeIllustrations,
  curacao: curacaoIllustrations,
  suriname: surinameIllustrations,
  guyana: guyanaIllustrations,
  austria: austriaIllustrations,
  spain: spainIllustrations,
  haiti: haitiIllustrations,
  "trinidad-and-tobago": trinidadAndTobagoIllustrations,
  japan: japanIllustrations,
  myanmar: myanmarIllustrations,
  ghana: ghanaIllustrations,
  eritrea: eritreaIllustrations,
  "solomon-islands": solomonIslandsIllustrations,
  "new-caledonia": newCaledoniaIllustrations,
  andorra: andorraIllustrations,
  "san-marino": sanMarinoIllustrations,
  palau: palauIllustrations,
  "marshall-islands": marshallIslandsIllustrations,
  india: indiaIllustrations,
  bangladesh: bangladeshIllustrations,
  pakistan: pakistanIllustrations,
  mongolia: mongoliaIllustrations,
};

export function getIllustration(
  countrySlug: string,
  entryId: string
): IllustrationDefinition | null {
  return illustrationsByCountry[countrySlug]?.[entryId] ?? null;
}
