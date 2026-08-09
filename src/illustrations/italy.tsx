import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Pasta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M160 150 q10 -14 20 0 q10 -14 20 0 q10 -14 20 0" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <circle cx="180" cy="175" r="14" fill="none" stroke={dark} strokeWidth="5" />
      <rect x="215" y="160" width="26" height="10" rx="5" fill={light} />
      <rect x="215" y="178" width="26" height="10" rx="5" fill={accentColor} />
    </g>
  );
};

const Espresso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M170 140 h50 v25 a25 25 0 0 1 -50 0 Z" fill={accentColor} />
      <path d="M220 148 c14 0 14 20 0 20" fill="none" stroke={dark} strokeWidth="5" />
      <rect x="162" y="188" width="66" height="8" rx="3" fill={dark} />
      <path d="M180 130 q4 -10 -2 -16 M196 130 q4 -10 -2 -16" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const Vespa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="165" cy="205" r="20" fill="none" stroke={dark} strokeWidth="7" />
      <circle cx="245" cy="205" r="20" fill="none" stroke={dark} strokeWidth="7" />
      <path d="M165 205 C170 170 200 160 220 170 C245 165 255 180 245 205" fill={accentColor} />
      <circle cx="215" cy="160" r="12" fill={light} />
    </g>
  );
};

const Coliseo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <rect x="140" y="170" width="120" height="60" fill={accentColor} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={150 + i * 18} y="185" width="10" height="30" fill={dark} />
      ))}
      <rect x="140" y="160" width="120" height="12" fill={dark} />
    </g>
  );
};

const ModaMilanese: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.2);
  return (
    <g>
      <line x1="200" y1="90" x2="200" y2="105" stroke={dark} strokeWidth="4" />
      <path d="M165 105 h70 l-10 12 h-50 Z" fill={dark} />
      <path d="M185 117 C165 140 155 175 170 195 h60 c15,-20 5,-55 -15,-78 Z" fill={accentColor} />
    </g>
  );
};

const PalioSiena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path
        d="M150 210 C150 190 165 175 185 178 C195 165 215 165 222 178 C240 178 250 195 240 210 Z"
        fill={accentColor}
      />
      <rect x="150" y="205" width="8" height="30" fill={dark} />
      <rect x="230" y="205" width="8" height="30" fill={dark} />
      <rect x="190" y="205" width="8" height="30" fill={dark} />
      <rect x="205" y="205" width="8" height="30" fill={dark} />
    </g>
  );
};

const PranzoDomenica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="200" cy="195" rx="80" ry="18" fill={dark} />
      <circle cx="160" cy="188" r="14" fill={light} />
      <circle cx="200" cy="182" r="16" fill={light} />
      <circle cx="240" cy="188" r="14" fill={light} />
      <rect x="192" y="150" width="16" height="26" fill={accentColor} />
    </g>
  );
};

const MotorValley: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M150 195 h100 l-10 -25 h-80 Z" fill={accentColor} />
      <rect x="160" y="185" width="80" height="14" fill={light} />
      <circle cx="170" cy="200" r="14" fill={dark} />
      <circle cx="230" cy="200" r="14" fill={dark} />
    </g>
  );
};

const VeneciaGondolas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M140 200 h130 l-20 20 h-90 Z" fill={dark} />
      <path d="M255 175 c10 5 10 20 0 30" fill="none" stroke={accentColor} strokeWidth="5" />
      <rect x="180" y="165" width="10" height="35" fill={accentColor} />
      <path d="M120 210 q20 -8 40 0 t40 0 t40 0 t40 0" fill="none" stroke={light} strokeWidth="4" />
    </g>
  );
};

const DolceVita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M150 200 a50 16 0 1 0 100 0 a50 16 0 1 0 -100 0" fill={dark} />
      <rect x="192" y="150" width="16" height="50" fill={accentColor} />
      <path d="M200 150 C185 145 185 130 200 128 C215 130 215 145 200 150 Z" fill={light} />
    </g>
  );
};

export const italyIllustrations: Record<string, IllustrationDefinition> = {
  pasta: { component: Pasta, variant: "medallion" },
  espresso: { component: Espresso, variant: "medallion" },
  vespa: { component: Vespa },
  coliseo: { component: Coliseo },
  "moda-milanese": { component: ModaMilanese, variant: "medallion" },
  "palio-siena": { component: PalioSiena },
  "pranzo-domenica": { component: PranzoDomenica },
  "motor-valley": { component: MotorValley },
  "venecia-gondolas": { component: VeneciaGondolas },
  "dolce-vita": { component: DolceVita },
};
