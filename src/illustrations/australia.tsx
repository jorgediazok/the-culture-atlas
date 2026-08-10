import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const OperaHouse: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <path d="M150 180 q10 -55 45 -60 q-8 30 4 60 Z" fill={light} />
      <path d="M195 180 q10 -60 50 -65 q-10 32 6 65 Z" fill="#fff" />
      <path d="M235 180 q6 -40 30 -44 q-6 22 4 44 Z" fill={dark} />
      <rect x="145" y="178" width="130" height="10" fill={dark} />
    </g>
  );
};

const GranBarreraCoral: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 175 q10 -35 25 -10 q10 -30 25 5 q10 -28 25 8 q10 -25 20 -3" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="185" cy="140" rx="10" ry="6" fill={light} />
      <ellipse cx="225" cy="130" rx="8" ry="5" fill={dark} />
    </g>
  );
};

const Canguros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M180 195 q-6 -50 20 -70 q26 10 22 45 q-4 15 -14 25 Z" fill={accentColor} />
      <circle cx="205" cy="118" r="12" fill={dark} />
      <path d="M195 165 q10 8 20 0" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
      <path d="M175 195 q-14 -6 -18 -25" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const AyersRock: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      <path d="M150 185 q30 -45 50 -50 q30 4 50 50 Z" fill={accentColor} />
      <path d="M170 178 q30 -35 60 0" fill="none" stroke={dark} strokeWidth="3" opacity="0.6" />
      <ellipse cx="200" cy="187" rx="60" ry="8" fill={light} />
    </g>
  );
};

const AborigenesArte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <circle cx="200" cy="140" r="40" fill="none" stroke={accentColor} strokeWidth="6" strokeDasharray="2 8" strokeLinecap="round" />
      <circle cx="200" cy="140" r="24" fill="none" stroke={dark} strokeWidth="6" strokeDasharray="2 8" strokeLinecap="round" />
      <circle cx="200" cy="140" r="8" fill={light} />
    </g>
  );
};

const Vegemite: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon points="160,120 240,120 232,190 168,190" fill={light} />
      <rect x="168" y="150" width="64" height="30" fill={dark} />
      <rect x="160" y="115" width="80" height="10" fill={accentColor} />
    </g>
  );
};

const Surf: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M150 175 q50 -50 100 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="175" rx="50" ry="10" fill={light} />
      <ellipse cx="205" cy="150" rx="7" ry="16" fill={dark} transform="rotate(-20 205 150)" />
    </g>
  );
};

const AnimalesPeligrosos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <circle cx="200" cy="150" r="14" fill={dark} />
      <path d="M200 150 L175 130 M200 150 L170 148 M200 150 L175 170 M200 150 L225 130 M200 150 L230 148 M200 150 L225 170 M200 150 L185 122 M200 150 L215 122" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const Acdc: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.8);
  return (
    <g>
      <path d="M180 105 L225 105 L195 145 L215 145 L175 195 L185 150 L165 150 Z" fill={light} />
      <rect x="182" y="108" width="6" height="80" fill={dark} />
    </g>
  );
};

const Outback: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="150" y="180" width="100" height="10" fill={dark} />
      <polygon points="196,180 204,180 200,100" fill={light} />
      <circle cx="200" cy="88" r="10" fill={accentColor} />
    </g>
  );
};

export const australiaIllustrations: Record<string, IllustrationDefinition> = {
  "opera-house": { component: OperaHouse },
  "gran-barrera-coral": { component: GranBarreraCoral },
  canguros: { component: Canguros },
  "ayers-rock": { component: AyersRock },
  "aborigenes-arte": { component: AborigenesArte, variant: "medallion" },
  vegemite: { component: Vegemite },
  surf: { component: Surf },
  "animales-peligrosos": { component: AnimalesPeligrosos, variant: "medallion" },
  acdc: { component: Acdc },
  outback: { component: Outback },
};
