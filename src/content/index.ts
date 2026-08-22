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
import { southKorea } from "./south-korea";
import { uzbekistan } from "./uzbekistan";
import { tajikistan } from "./tajikistan";
import { kyrgyzstan } from "./kyrgyzstan";
import { unitedArabEmirates } from "./united-arab-emirates";
import { qatar } from "./qatar";
import { armenia } from "./armenia";
import { azerbaijan } from "./azerbaijan";
import { finland } from "./finland";
import { kazakhstan } from "./kazakhstan";
import { afghanistan } from "./afghanistan";
import { belarus } from "./belarus";
import { denmark } from "./denmark";
import { norway } from "./norway";
import { sweden } from "./sweden";
import { estonia } from "./estonia";
import { lithuania } from "./lithuania";
import { latvia } from "./latvia";
import { slovakia } from "./slovakia";
import { slovenia } from "./slovenia";
import { iceland } from "./iceland";
import { czechRepublic } from "./czech-republic";
import { monaco } from "./monaco";
import { moldova } from "./moldova";
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
import { india } from "./india";
import { bangladesh } from "./bangladesh";
import { pakistan } from "./pakistan";
import { mongolia } from "./mongolia";
import { philippines } from "./philippines";
import { vaticanCity } from "./vatican-city";
import { serbia } from "./serbia";
import { kosovo } from "./kosovo";
import { ivoryCoast } from "./ivory-coast";
import { lesotho } from "./lesotho";
import { burundi } from "./burundi";
import { hungary } from "./hungary";
import { gambia } from "./gambia";
import { liechtenstein } from "./liechtenstein";
import { bulgaria } from "./bulgaria";
import { romania } from "./romania";
import { bosniaAndHerzegovina } from "./bosnia-and-herzegovina";
import { montenegro } from "./montenegro";
import { northMacedonia } from "./north-macedonia";
import { ireland } from "./ireland";
import { northernIreland } from "./northern-ireland";
import { england } from "./england";
import { scotland } from "./scotland";
import { wales } from "./wales";
import { poland } from "./poland";
import { malta } from "./malta";
import { cyprus } from "./cyprus";
import { georgia } from "./georgia";
import { portugal } from "./portugal";
import { greece } from "./greece";
import { turkey } from "./turkey";
import { iraq } from "./iraq";
import { syria } from "./syria";
import { yemen } from "./yemen";
import { cambodia } from "./cambodia";
import { jordan } from "./jordan";
import { bhutan } from "./bhutan";
import { sriLanka } from "./sri-lanka";
import { maldives } from "./maldives";
import { eastTimor } from "./east-timor";
import { saudiArabia } from "./saudi-arabia";
import { oman } from "./oman";
import { ukraine } from "./ukraine";
import { lebanon } from "./lebanon";
import { bahrain } from "./bahrain";
import { kuwait } from "./kuwait";
import { singapore } from "./singapore";
import { malaysia } from "./malaysia";
import { brunei } from "./brunei";
import { taiwan } from "./taiwan";
import { guatemala } from "./guatemala";
import { honduras } from "./honduras";
import { elSalvador } from "./el-salvador";
import { nicaragua } from "./nicaragua";

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
  "south-korea": southKorea,
  uzbekistan,
  tajikistan,
  kyrgyzstan,
  "united-arab-emirates": unitedArabEmirates,
  qatar,
  armenia,
  azerbaijan,
  finland,
  kazakhstan,
  afghanistan,
  belarus,
  denmark,
  norway,
  sweden,
  estonia,
  lithuania,
  latvia,
  slovakia,
  slovenia,
  iceland,
  "czech-republic": czechRepublic,
  monaco,
  moldova,
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
  india,
  bangladesh,
  pakistan,
  mongolia,
  philippines,
  "vatican-city": vaticanCity,
  serbia,
  kosovo,
  "ivory-coast": ivoryCoast,
  lesotho,
  burundi,
  hungary,
  gambia,
  liechtenstein,
  bulgaria,
  romania,
  "bosnia-and-herzegovina": bosniaAndHerzegovina,
  montenegro,
  "north-macedonia": northMacedonia,
  ireland,
  "northern-ireland": northernIreland,
  england,
  scotland,
  wales,
  poland,
  malta,
  cyprus,
  georgia,
  portugal,
  greece,
  turkey,
  iraq,
  syria,
  yemen,
  cambodia,
  jordan,
  bhutan,
  "sri-lanka": sriLanka,
  maldives,
  "east-timor": eastTimor,
  "saudi-arabia": saudiArabia,
  oman,
  ukraine,
  lebanon,
  bahrain,
  kuwait,
  singapore,
  malaysia,
  brunei,
  taiwan,
  guatemala,
  honduras,
  "el-salvador": elSalvador,
  nicaragua,
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
