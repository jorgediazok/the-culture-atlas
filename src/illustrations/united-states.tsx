import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const JazzNuevaOrleans: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M185 140 Q182 165 195 178 Q205 182 208 172 Q210 160 198 155 L192 138 Z" fill={accentColor} />
      <circle cx="200" cy="168" r="4" fill={light} />
      <circle cx="192" cy="152" r="2" fill={dark} />
      <path d="M215 145 Q222 138 218 130" fill="none" stroke={dark} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

const HollywoodCine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="178" y="150" width="44" height="30" fill={accentColor} />
      <rect x="178" y="140" width="44" height="10" fill={dark} transform="skewX(-20)" />
      <circle cx="188" cy="165" r="6" fill={light} />
      <circle cx="212" cy="165" r="6" fill={light} />
    </g>
  );
};

const AccionDeGracias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="162" rx="18" ry="14" fill={accentColor} />
      <path d="M188 152 Q182 138 190 132 M195 150 Q192 134 200 128 M205 150 Q206 134 214 130" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="212" cy="158" r="5" fill={light} />
    </g>
  );
};

const ParquesNacionalesYellowstone: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 180 Q192 150 198 130 Q202 150 208 180 Z" fill={light} opacity="0.8" />
      <ellipse cx="198" cy="180" rx="20" ry="6" fill={dark} />
      <path d="M198 130 Q194 118 198 108" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

const EstatuaDeLaLibertad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 130 Q192 138 195 148 Q197 156 200 158 Q203 156 205 148 Q208 138 200 130 Z" fill={light} />
      <rect x="193" y="158" width="14" height="10" fill={accentColor} />
      <rect x="188" y="168" width="24" height="18" fill={dark} />
    </g>
  );
};

const JeansLeviStrauss: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 132 L214 132 L210 182 L200 182 L200 155 L190 182 L182 182 Z" fill={accentColor} />
      <circle cx="192" cy="140" r="2.4" fill={light} />
      <circle cx="208" cy="140" r="2.4" fill={light} />
      <line x1="186" y1="132" x2="214" y2="132" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Ruta66: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 130 L220 130 L220 155 L200 165 L180 155 Z" fill={light} />
      <text x="200" y="150" fontSize="16" fontWeight="700" textAnchor="middle" fill={dark}>66</text>
    </g>
  );
};

const SiliconValley: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="144" width="32" height="32" rx="3" fill={dark} />
      <rect x="192" y="152" width="16" height="16" fill={light} />
      <line x1="184" y1="152" x2="176" y2="152" stroke={accentColor} strokeWidth="2" />
      <line x1="184" y1="164" x2="176" y2="164" stroke={accentColor} strokeWidth="2" />
      <line x1="216" y1="152" x2="224" y2="152" stroke={accentColor} strokeWidth="2" />
      <line x1="216" y1="164" x2="224" y2="164" stroke={accentColor} strokeWidth="2" />
    </g>
  );
};

const Apollo11Luna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="155" r="26" fill={dark} opacity="0.3" />
      <path d="M192 148 Q192 140 198 140 Q204 140 204 148 Q204 158 200 168 Q196 158 192 148 Z" fill={light} />
      <circle cx="197" cy="146" r="1.6" fill={dark} />
      <circle cx="201" cy="150" r="1.6" fill={dark} />
    </g>
  );
};

const RockAndRollMemphis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="192" cy="168" rx="14" ry="10" fill={accentColor} transform="rotate(-20 192 168)" />
      <rect x="200" y="130" width="5" height="42" fill={dark} transform="rotate(-20 202 151)" />
      <circle cx="192" cy="168" r="4" fill={light} />
    </g>
  );
};

export const unitedStatesIllustrations: Record<string, IllustrationDefinition> = {
  "jazz-nueva-orleans": { component: JazzNuevaOrleans },
  "hollywood-cine": { component: HollywoodCine },
  "accion-de-gracias": { component: AccionDeGracias, variant: "medallion" },
  "parques-nacionales-yellowstone": { component: ParquesNacionalesYellowstone },
  "estatua-de-la-libertad": { component: EstatuaDeLaLibertad },
  "jeans-levi-strauss": { component: JeansLeviStrauss, variant: "medallion" },
  "ruta-66": { component: Ruta66, variant: "medallion" },
  "silicon-valley": { component: SiliconValley },
  "apollo-11-luna": { component: Apollo11Luna, variant: "medallion" },
  "rock-and-roll-memphis": { component: RockAndRollMemphis },
};
