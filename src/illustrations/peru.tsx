import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MachuPicchu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 185 L175 130 L195 160 L215 120 L235 165 L250 185 Z" fill={dark} />
      {[0, 1, 2].map((row) => (
        <rect key={row} x={170 + row * 4} y={150 + row * 12} width={60 - row * 8} height="8" fill={row % 2 === 0 ? accentColor : light} />
      ))}
    </g>
  );
};

const LineasNazca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path
        d="M160 150 Q180 110 200 150 Q220 190 240 150"
        fill="none"
        stroke={accentColor}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="200" cy="150" r="6" fill={dark} />
      <path d="M155 165 L245 165" stroke={dark} strokeWidth="3" strokeDasharray="10 8" />
    </g>
  );
};

const ImperioInca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 175 Q200 100 245 175 Z" fill={light} />
      <path d="M165 175 L235 175 L225 165 L175 165 Z" fill={accentColor} />
      <path d="M180 175 Q200 130 220 175" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const PapaOriginaria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="185" cy="150" rx="24" ry="18" fill={accentColor} />
      <ellipse cx="222" cy="165" rx="18" ry="14" fill={light} />
      <ellipse cx="200" cy="180" rx="16" ry="10" fill={dark} />
    </g>
  );
};

const Ceviche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="165" rx="48" ry="18" fill={light} />
      <ellipse cx="200" cy="160" rx="42" ry="14" fill={accentColor} />
      <circle cx="185" cy="158" r="5" fill={dark} />
      <circle cx="210" cy="162" r="5" fill={dark} />
      <circle cx="198" cy="150" r="5" fill={dark} />
    </g>
  );
};

const Quechua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 130 h50 v28 h-18 l-8 12 v-12 h-24 Z" fill={accentColor} />
      <path d="M215 155 h35 v22 h-12 l-6 10 v-10 h-17 Z" fill={light} />
      <circle cx="180" cy="144" r="3" fill={dark} />
      <circle cx="192" cy="144" r="3" fill={dark} />
    </g>
  );
};

const AmazoniaPeruana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M155 185 Q180 150 165 115 Q210 140 200 185 Q230 155 245 185 Z" fill={accentColor} />
      <path d="M175 185 Q195 165 195 140" fill="none" stroke={light} strokeWidth="5" strokeLinecap="round" />
      <path d="M200 185 Q215 170 215 150" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Pisco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M185 140 h30 l10 45 h-50 Z" fill={light} />
      <path d="M188 150 h24 l7 30 h-38 Z" fill={accentColor} />
      <rect x="195" y="110" width="10" height="32" fill={dark} />
    </g>
  );
};

const VargasLlosa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <rect x="160" y="140" width="55" height="42" rx="3" fill={accentColor} />
      <rect x="170" y="130" width="55" height="42" rx="3" fill={light} />
      <line x1="197" y1="130" x2="197" y2="172" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const TextilesAndinos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="160" y="130" width="80" height="50" fill={light} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={165 + i * 18} y="130" width="9" height="50" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
    </g>
  );
};

export const peruIllustrations: Record<string, IllustrationDefinition> = {
  "machu-picchu": { component: MachuPicchu },
  "lineas-nazca": { component: LineasNazca, variant: "medallion" },
  "imperio-inca": { component: ImperioInca },
  "papa-originaria": { component: PapaOriginaria, variant: "medallion" },
  ceviche: { component: Ceviche },
  quechua: { component: Quechua, variant: "medallion" },
  "amazonia-peruana": { component: AmazoniaPeruana },
  pisco: { component: Pisco },
  "vargas-llosa": { component: VargasLlosa },
  "textiles-andinos": { component: TextilesAndinos },
};
