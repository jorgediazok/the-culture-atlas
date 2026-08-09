import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Baguette: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="150" width="140" height="26" rx="13" fill={accentColor} transform="rotate(-8 200 163)" />
      {[-30, -10, 10, 30].map((dx) => (
        <line key={dx} x1={200 + dx} y1="145" x2={195 + dx} y2="180" stroke={dark} strokeWidth="3" transform="rotate(-8 200 163)" />
      ))}
    </g>
  );
};

const Vino: IllustrationComponent = ({ accentColor }) => {
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

const CafesTerrazas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="34" ry="10" fill={accentColor} />
      <line x1="200" y1="160" x2="200" y2="200" stroke={dark} strokeWidth="6" />
      <line x1="150" y1="220" x2="164" y2="188" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="250" y1="220" x2="236" y2="188" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="160" y1="196" x2="176" y2="196" stroke={dark} strokeWidth="5" />
      <line x1="224" y1="196" x2="240" y2="196" stroke={dark} strokeWidth="5" />
    </g>
  );
};

const Moda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="200" y1="90" x2="200" y2="105" stroke={dark} strokeWidth="4" />
      <path d="M160 105 h80 l-8 12 h-64 Z" fill={dark} />
      <path d="M180 117 C160 140 150 175 165 195 h70 c15,-20 5,-55 -15,-78 Z" fill={accentColor} />
    </g>
  );
};

const Queso: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="200,100 250,190 150,190" fill={accentColor} />
      <circle cx="195" cy="150" r="6" fill={light} />
      <circle cx="215" cy="168" r="5" fill={light} />
      <circle cx="185" cy="172" r="4" fill={light} />
    </g>
  );
};

const Monumentos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g stroke={dark} strokeWidth="5" fill="none" strokeLinecap="round">
      <line x1="200" y1="90" x2="160" y2="210" />
      <line x1="200" y1="90" x2="240" y2="210" />
      <line x1="178" y1="150" x2="222" y2="150" />
      <line x1="170" y1="180" x2="230" y2="180" />
      <line x1="150" y1="210" x2="250" y2="210" strokeWidth="7" />
    </g>
  );
};

const Huelgas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <rect x="192" y="120" width="8" height="70" fill={dark} />
      <path d="M200 100 h50 l-14 16 14 16 h-50 Z" fill={accentColor} />
      <circle cx="200" cy="95" r="16" fill={dark} />
    </g>
  );
};

const Cine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <circle cx="200" cy="138" r="52" fill={accentColor} />
      <circle cx="200" cy="138" r="14" fill={dark} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle key={deg} cx={200 + Math.cos((deg * Math.PI) / 180) * 32} cy={138 + Math.sin((deg * Math.PI) / 180) * 32} r="7" fill={dark} />
      ))}
    </g>
  );
};

const TourDeFrancia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  return (
    <g>
      <circle cx="200" cy="200" r="42" fill="none" stroke={dark} strokeWidth="8" />
      <rect x="182" y="115" width="36" height="50" rx="8" fill={accentColor} />
      <circle cx="200" cy="105" r="12" fill={dark} />
    </g>
  );
};

const SavoirVivre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="200" cy="160" r="46" fill={light} stroke={accentColor} strokeWidth="4" />
      <line x1="150" y1="120" x2="150" y2="170" stroke={dark} strokeWidth="4" />
      <line x1="144" y1="120" x2="144" y2="140" stroke={dark} strokeWidth="3" />
      <line x1="156" y1="120" x2="156" y2="140" stroke={dark} strokeWidth="3" />
      <path d="M250 120 v50 M250 120 c8 0 8 16 0 20" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

export const franceIllustrations: Record<string, IllustrationDefinition> = {
  baguette: { component: Baguette, variant: "medallion" },
  vino: { component: Vino, variant: "medallion" },
  "cafes-terrazas": { component: CafesTerrazas },
  moda: { component: Moda, variant: "medallion" },
  queso: { component: Queso, variant: "medallion" },
  monumentos: { component: Monumentos },
  huelgas: { component: Huelgas, variant: "medallion" },
  cine: { component: Cine, variant: "medallion" },
  "tour-de-francia": { component: TourDeFrancia },
  "savoir-vivre": { component: SavoirVivre, variant: "medallion" },
};
