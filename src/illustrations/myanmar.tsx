import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BaganMilesDeTemplos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 178 L184 162 L190 152 L196 162 L196 178 Z" fill={accentColor} />
      <path d="M200 178 L200 156 L208 144 L216 156 L216 178 Z" fill={dark} />
      <path d="M180 178 L220 178" stroke={light} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const PagodaShwedagonDeOro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 178 Q188 156 200 150 Q212 156 212 178 Z" fill={accentColor} />
      <path d="M196 150 L200 132 L204 150 Z" fill={light} />
      <circle cx="200" cy="130" r="2.2" fill={dark} />
      <ellipse cx="200" cy="164" rx="14" ry="3" fill={dark} opacity="0.5" />
    </g>
  );
};

const LongyiVestimentaTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 152 L214 152 L210 178 L190 178 Z" fill={accentColor} />
      <rect x="192" y="156" width="6" height="6" fill={light} opacity="0.8" />
      <rect x="202" y="164" width="6" height="6" fill={light} opacity="0.8" />
      <rect x="192" y="164" width="6" height="6" fill={dark} opacity="0.5" />
      <path d="M186 152 Q200 146 214 152" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ThanakaMaquillajeTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="150" width="8" height="26" fill={dark} />
      <circle cx="210" cy="164" r="11" fill={light} />
      <circle cx="210" cy="164" r="5" fill={accentColor} />
    </g>
  );
};

const LagoInleRemerosDePierna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 172 Q200 164 220 172 L214 178 L186 178 Z" fill={accentColor} />
      <line x1="200" y1="172" x2="196" y2="146" stroke={dark} strokeWidth="2.2" />
      <path d="M182 172 Q200 178 218 172" fill="none" stroke={light} strokeWidth="1.6" opacity="0.6" />
    </g>
  );
};

const RocaDoradaKyaiktiyo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 178 L218 178 L212 168 L188 168 Z" fill={dark} />
      <ellipse cx="200" cy="156" rx="15" ry="12" fill={accentColor} />
      <path d="M196 148 L200 138 L204 148 Z" fill={light} />
    </g>
  );
};

const MosaicoDe135Etnias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="148" width="14" height="28" fill={accentColor} />
      <rect x="200" y="148" width="14" height="28" fill={dark} />
      <line x1="184" y1="156" x2="198" y2="156" stroke={light} strokeWidth="1.4" opacity="0.7" />
      <line x1="200" y1="164" x2="214" y2="164" stroke={light} strokeWidth="1.4" opacity="0.7" />
    </g>
  );
};

const GatosBirmanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="164" rx="14" ry="10" fill={accentColor} />
      <path d="M190 156 L186 146 L196 152 Z" fill={accentColor} />
      <path d="M210 156 L214 146 L204 152 Z" fill={accentColor} />
      <circle cx="195" cy="160" r="1.8" fill={light} />
      <circle cx="205" cy="160" r="1.8" fill={light} />
      <line x1="200" y1="176" x2="212" y2="180" stroke={dark} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
};

const ShinbyuNoviciosBudistas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 178 L190 150 Q200 144 210 150 L210 178 Z" fill={accentColor} />
      <ellipse cx="188" cy="172" rx="6" ry="4" fill={dark} />
      <circle cx="188" cy="164" r="2" fill={light} />
    </g>
  );
};

const ChinloneDeporteSinCompetencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="158" r="16" fill="none" stroke={accentColor} strokeWidth="3" />
      <path d="M188 148 Q200 158 188 168 M212 148 Q200 158 212 168" fill="none" stroke={dark} strokeWidth="2" opacity="0.7" />
      <circle cx="200" cy="158" r="3" fill={light} />
    </g>
  );
};

export const myanmarIllustrations: Record<string, IllustrationDefinition> = {
  "bagan-miles-de-templos": { component: BaganMilesDeTemplos },
  "pagoda-shwedagon-de-oro": { component: PagodaShwedagonDeOro, variant: "medallion" },
  "longyi-vestimenta-tradicional": { component: LongyiVestimentaTradicional },
  "thanaka-maquillaje-tradicional": { component: ThanakaMaquillajeTradicional },
  "lago-inle-remeros-de-pierna": { component: LagoInleRemerosDePierna },
  "roca-dorada-kyaiktiyo": { component: RocaDoradaKyaiktiyo, variant: "medallion" },
  "mosaico-de-135-etnias": { component: MosaicoDe135Etnias },
  "gatos-birmanos": { component: GatosBirmanos },
  "shinbyu-novicios-budistas": { component: ShinbyuNoviciosBudistas },
  "chinlone-deporte-sin-competencia": { component: ChinloneDeporteSinCompetencia },
};
