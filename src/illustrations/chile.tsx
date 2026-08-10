import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RapaNui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 110 h36 v50 a18 14 0 0 1 -36 0 Z" fill={accentColor} />
      <rect x="188" y="122" width="8" height="8" fill={dark} />
      <rect x="204" y="122" width="8" height="8" fill={dark} />
      <rect x="150" y="190" width="100" height="10" fill={light} />
    </g>
  );
};

const Atacama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 190 q50 -18 100 0 Z" fill={accentColor} />
      <rect x="197" y="110" width="6" height="60" fill={dark} />
      <circle cx="200" cy="105" r="9" fill={light} />
      <polygon points="188,115 212,115 200,95" fill={dark} />
    </g>
  );
};

const PabloNeruda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M180 110 L220 110 L212 150 L188 150 Z" fill={light} />
      <line x1="200" y1="150" x2="200" y2="185" stroke={dark} strokeWidth="4" />
      <circle cx="200" cy="105" r="6" fill={accentColor} />
    </g>
  );
};

const Cueca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <circle cx="175" cy="150" r="16" fill={accentColor} />
      <circle cx="225" cy="150" r="16" fill={dark} />
      <path d="M175 134 q10 -20 20 -4" fill={light} />
      <path d="M225 134 q-10 -20 -20 -4" fill={light} />
    </g>
  );
};

const VinoChileno: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <path d="M175 100 C175 130 185 145 200 145 C215 145 225 130 225 100 Z" fill={light} stroke={accentColor} strokeWidth="4" />
      <path d="M180 108 C182 128 190 138 200 140 C210 138 218 128 220 108 Z" fill={accentColor} />
      <rect x="196" y="145" width="8" height="34" fill={accentColor} />
      <rect x="180" y="179" width="40" height="8" rx="3" fill={accentColor} />
    </g>
  );
};

const Terremotos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="110" width="50" height="80" fill={accentColor} transform="rotate(-3 200 150)" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="182" y={122 + i * 22} width="36" height="10" fill={light} transform="rotate(-3 200 150)" />
      ))}
      <path d="M150 195 q50 -10 100 0" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const Completo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M155 165 a45 22 0 0 1 90 0 Z" fill={dark} />
      <ellipse cx="200" cy="163" rx="42" ry="10" fill={accentColor} />
      <path d="M165 158 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const PatagoniaChilena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="160,190 175,120 190,190" fill={accentColor} />
      <polygon points="190,190 205,105 220,190" fill={dark} />
      <polygon points="220,190 235,130 250,190" fill={accentColor} />
      <rect x="150" y="185" width="100" height="8" fill={light} />
    </g>
  );
};

const Cobre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="48" ry="28" fill={dark} />
      <ellipse cx="200" cy="146" rx="34" ry="18" fill={accentColor} />
      <ellipse cx="200" cy="142" rx="18" ry="9" fill={light} />
    </g>
  );
};

const VioletaParra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M185 120 a15 18 0 1 0 0.1 0 M215 155 a15 18 0 1 0 0.1 0" fill={light} transform="rotate(-15 200 140)" />
      <line x1="205" y1="105" x2="220" y2="170" stroke={dark} strokeWidth="5" />
      <circle cx="220" cy="108" r="4" fill={accentColor} />
    </g>
  );
};

export const chileIllustrations: Record<string, IllustrationDefinition> = {
  "rapa-nui": { component: RapaNui },
  atacama: { component: Atacama },
  "pablo-neruda": { component: PabloNeruda },
  cueca: { component: Cueca, variant: "medallion" },
  "vino-chileno": { component: VinoChileno, variant: "medallion" },
  terremotos: { component: Terremotos },
  completo: { component: Completo },
  "patagonia-chilena": { component: PatagoniaChilena },
  cobre: { component: Cobre, variant: "medallion" },
  "violeta-parra": { component: VioletaParra },
};
