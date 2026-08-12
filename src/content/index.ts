import type {
  Country,
  CultureEntry,
  Locale,
  LocalizedCountry,
  LocalizedCultureEntry,
} from "./types";
import { netherlands } from "./netherlands";
import { argentina } from "./argentina";
import { belgium } from "./belgium";
import { switzerland } from "./switzerland";
import { france } from "./france";
import { croatia } from "./croatia";
import { luxembourg } from "./luxembourg";
import { albania } from "./albania";
import { italy } from "./italy";
import { russia } from "./russia";
import { brazil } from "./brazil";
import { colombia } from "./colombia";
import { capeVerde } from "./cape-verde";
import { southAfrica } from "./south-africa";
import { thailand } from "./thailand";
import { vietnam } from "./vietnam";
import { australia } from "./australia";
import { newZealand } from "./new-zealand";
import { chile } from "./chile";
import { uruguay } from "./uruguay";
import { uganda } from "./uganda";
import { zimbabwe } from "./zimbabwe";
import { china } from "./china";
import { iran } from "./iran";
import { palestine } from "./palestine";
import { papuaNewGuinea } from "./papua-new-guinea";
import { peru } from "./peru";
import { bolivia } from "./bolivia";
import { germany } from "./germany";
import { venezuela } from "./venezuela";
import { kenya } from "./kenya";
import { indonesia } from "./indonesia";
import { ecuador } from "./ecuador";
import { nepal } from "./nepal";
import { paraguay } from "./paraguay";
import { northKorea } from "./north-korea";
import { turkmenistan } from "./turkmenistan";
import { laos } from "./laos";
import { botswana } from "./botswana";
import { morocco } from "./morocco";
import { egypt } from "./egypt";
import { algeria } from "./algeria";
import { tuvalu } from "./tuvalu";
import { fiji } from "./fiji";
import { micronesia } from "./micronesia";
import { nauru } from "./nauru";
import { tonga } from "./tonga";
import { vanuatu } from "./vanuatu";
import { ethiopia } from "./ethiopia";
import { kiribati } from "./kiribati";
import { jamaica } from "./jamaica";
import { cuba } from "./cuba";
import { canada } from "./canada";
import { unitedStates } from "./united-states";
import { mexico } from "./mexico";
import { greenland } from "./greenland";
import { costaRica } from "./costa-rica";
import { panama } from "./panama";
import { belize } from "./belize";
import { curacao } from "./curacao";
import { suriname } from "./suriname";
import { guyana } from "./guyana";
import { austria } from "./austria";
import { spain } from "./spain";
import { haiti } from "./haiti";
import { trinidadAndTobago } from "./trinidad-and-tobago";
import { japan } from "./japan";
import { myanmar } from "./myanmar";
import { ghana } from "./ghana";
import { eritrea } from "./eritrea";
import { solomonIslands } from "./solomon-islands";
import { newCaledonia } from "./new-caledonia";
import { andorra } from "./andorra";
import { sanMarino } from "./san-marino";
import { palau } from "./palau";
import { marshallIslands } from "./marshall-islands";

export const contentByCountry: Record<string, CultureEntry[]> = {
  netherlands,
  argentina,
  belgium,
  switzerland,
  france,
  croatia,
  luxembourg,
  albania,
  italy,
  russia,
  brazil,
  colombia,
  "cape-verde": capeVerde,
  "south-africa": southAfrica,
  thailand,
  vietnam,
  australia,
  "new-zealand": newZealand,
  chile,
  uruguay,
  uganda,
  zimbabwe,
  china,
  iran,
  palestine,
  "papua-new-guinea": papuaNewGuinea,
  peru,
  bolivia,
  germany,
  venezuela,
  kenya,
  indonesia,
  ecuador,
  nepal,
  paraguay,
  "north-korea": northKorea,
  turkmenistan,
  laos,
  botswana,
  morocco,
  egypt,
  algeria,
  tuvalu,
  fiji,
  micronesia,
  nauru,
  tonga,
  vanuatu,
  ethiopia,
  kiribati,
  jamaica,
  cuba,
  canada,
  "united-states": unitedStates,
  mexico,
  greenland,
  "costa-rica": costaRica,
  panama,
  belize,
  curacao,
  suriname,
  guyana,
  austria,
  spain,
  haiti,
  "trinidad-and-tobago": trinidadAndTobago,
  japan,
  myanmar,
  ghana,
  eritrea,
  "solomon-islands": solomonIslands,
  "new-caledonia": newCaledonia,
  andorra,
  "san-marino": sanMarino,
  palau,
  "marshall-islands": marshallIslands,
};

export function getEntriesForCountry(slug: string): CultureEntry[] | null {
  return contentByCountry[slug] ?? null;
}

export function localizeEntry(
  entry: CultureEntry,
  locale: Locale
): LocalizedCultureEntry {
  const { translations, ...rest } = entry;
  return { ...rest, ...translations[locale] };
}

export function localizeCountry(
  country: Country,
  locale: Locale
): LocalizedCountry {
  const { translations, ...rest } = country;
  return { ...rest, ...translations[locale] };
}
