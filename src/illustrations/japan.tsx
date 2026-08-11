import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DinastiaImperialMasAntigua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 150 Q182 137 199 137 L216 137 Q206 150 216 163 L199 163 Q182 163 182 150 Z" fill={light} />
      <circle cx="196" cy="150" r="6" fill={accentColor} />
      <circle cx="196" cy="150" r="2.4" fill={dark} />
    </g>
  );
};

const ShinkansenPuntualidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 168 Q182 154 200 154 L216 154 Q220 154 220 160 L220 168 Z" fill={light} />
      <rect x="182" y="168" width="38" height="6" fill={dark} />
      <rect x="192" y="158" width="10" height="6" fill={accentColor} opacity="0.7" />
      <rect x="206" y="158" width="10" height="6" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const SumoDeporteSagrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 152 L214 152 L210 172 L190 172 Z" fill={accentColor} />
      <rect x="188" y="158" width="24" height="6" fill={dark} />
      <circle cx="196" cy="182" r="2" fill={light} />
      <circle cx="204" cy="182" r="2" fill={light} />
    </g>
  );
};

const OnsenCulturaTermal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="166" rx="22" ry="10" fill={accentColor} />
      <path d="M188 152 Q184 144 190 140 Q188 148 192 152 Z" fill={light} opacity="0.8" />
      <path d="M200 148 Q196 140 202 136 Q200 144 204 148 Z" fill={light} opacity="0.8" />
      <path d="M212 152 Q208 144 214 140 Q212 148 216 152 Z" fill={light} opacity="0.8" />
      <ellipse cx="200" cy="166" rx="22" ry="10" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const KintsugiArteDeReparar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 158 Q186 148 200 148 Q214 148 214 158 L210 178 L190 178 Z" fill={accentColor} />
      <path d="M196 150 L202 162 L194 168 L206 178" fill="none" stroke={light} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
};

const IkigaiRazonDeSer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 172 Q200 138 218 172 Z" fill={accentColor} opacity="0.85" />
      <circle cx="200" cy="172" r="16" fill="none" />
      <path d="M182 172 Q200 172 218 172" stroke={dark} strokeWidth="2.4" fill="none" />
      <circle cx="214" cy="150" r="4" fill={light} />
    </g>
  );
};

const MangaYAnimeInfluenciaGlobal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="142" width="32" height="28" rx="2" fill={light} />
      <path d="M188 150 L200 156 L188 162 Z" fill={accentColor} />
      <line x1="204" y1="148" x2="212" y2="148" stroke={dark} strokeWidth="1.6" />
      <line x1="204" y1="154" x2="212" y2="154" stroke={dark} strokeWidth="1.6" />
      <line x1="204" y1="160" x2="212" y2="160" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const HanamiFlorDeCerezo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 178 Q192 156 210 142" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="196" cy="160" r="5" fill={accentColor} />
      <circle cx="206" cy="148" r="5" fill={light} />
      <circle cx="188" cy="172" r="4" fill={accentColor} opacity="0.7" />
      <circle cx="214" cy="152" r="3" fill={light} opacity="0.8" />
    </g>
  );
};

const OrigamiArteDelPapel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 168 L200 140 L214 168 Z" fill={accentColor} />
      <path d="M200 140 L200 168" stroke={dark} strokeWidth="1.6" opacity="0.6" />
      <path d="M214 168 L222 172 L214 178 Z" fill={light} />
    </g>
  );
};

const CeremoniaDelTe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 158 Q186 174 200 174 Q214 174 214 158 Z" fill={accentColor} />
      <ellipse cx="200" cy="158" rx="14" ry="4" fill={dark} />
      <line x1="200" y1="146" x2="200" y2="158" stroke={light} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="196" y1="148" x2="204" y2="148" stroke={light} strokeWidth="1.6" />
    </g>
  );
};

export const japanIllustrations: Record<string, IllustrationDefinition> = {
  "dinastia-imperial-mas-antigua": { component: DinastiaImperialMasAntigua },
  "shinkansen-puntualidad": { component: ShinkansenPuntualidad },
  "sumo-deporte-sagrado": { component: SumoDeporteSagrado },
  "onsen-cultura-termal": { component: OnsenCulturaTermal, variant: "medallion" },
  "kintsugi-arte-de-reparar": { component: KintsugiArteDeReparar },
  "ikigai-razon-de-ser": { component: IkigaiRazonDeSer },
  "manga-y-anime-influencia-global": { component: MangaYAnimeInfluenciaGlobal },
  "hanami-flor-de-cerezo": { component: HanamiFlorDeCerezo, variant: "medallion" },
  "origami-arte-del-papel": { component: OrigamiArteDelPapel },
  "ceremonia-del-te": { component: CeremoniaDelTe },
};
