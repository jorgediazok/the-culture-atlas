import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Mate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M170 190 C160 190 156 172 162 156 C168 140 232 140 238 156 C244 172 240 190 230 190 Z"
        fill={accentColor}
      />
      <ellipse cx="200" cy="190" rx="30" ry="8" fill={dark} />
      <rect x="214" y="90" width="10" height="70" rx="4" fill={dark} transform="rotate(10 219 125)" />
      <circle cx="226" cy="92" r="7" fill={light} />
    </g>
  );
};

const Asado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="130" y="200" width="140" height="10" rx="4" fill={dark} />
      <rect x="140" y="210" width="10" height="34" fill={dark} />
      <rect x="250" y="210" width="10" height="34" fill={dark} />
      {[150, 175, 200, 225, 250].map((x) => (
        <rect key={x} x={x} y="180" width="8" height="26" rx="3" fill={accentColor} />
      ))}
      <path
        d="M160 178 C168 160 156 150 162 134 C170 148 182 148 178 130 C192 142 190 162 178 178 Z"
        fill={light}
      />
    </g>
  );
};

const Tango: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path
        d="M160 70 C150 90 150 105 165 118 C178 128 180 145 168 158 C158 168 158 185 172 198"
        fill="none"
        stroke={accentColor}
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M240 88 C255 100 258 118 246 132 C260 145 268 165 250 190 C238 205 236 220 246 232"
        fill="none"
        stroke={dark}
        strokeWidth="18"
        strokeLinecap="round"
      />
      <circle cx="158" cy="60" r="13" fill={accentColor} />
      <circle cx="252" cy="80" r="13" fill={dark} />
    </g>
  );
};

const Futbol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="150" y="200" width="100" height="44" fill="none" stroke={dark} strokeWidth="6" />
      <line x1="150" y1="222" x2="250" y2="222" stroke={dark} strokeWidth="4" />
      <circle cx="200" cy="150" r="34" fill={light} stroke={dark} strokeWidth="4" />
      <polygon points="200,128 214,140 209,158 191,158 186,140" fill={accentColor} />
    </g>
  );
};

const Voseo: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <path
        d="M120 100 h140 a16 16 0 0 1 16 16 v50 a16 16 0 0 1 -16 16 h-100 l-26 24 v-24 h-14 a16 16 0 0 1 -16 -16 v-50 a16 16 0 0 1 16 -16 Z"
        fill={accentColor}
      />
      <path
        d="M148 140 q14 -16 28 0 q14 -16 28 0 q14 -16 28 0"
        fill="none"
        stroke={light}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  );
};

const CenarTarde: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path
        d="M225 90 A55 55 0 1 0 235 198 A44 44 0 1 1 225 90 Z"
        fill={light}
      />
      <ellipse cx="200" cy="210" rx="30" ry="8" fill={dark} />
      <rect x="196" y="185" width="8" height="24" fill={dark} />
    </g>
  );
};

const DulceDeLeche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <rect x="165" y="115" width="70" height="90" rx="10" fill={accentColor} />
      <rect x="160" y="100" width="80" height="20" rx="6" fill={dark} />
      <path
        d="M235 150 C250 158 250 172 240 182"
        fill="none"
        stroke={dark}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="190" cy="150" r="6" fill={light} />
      <circle cx="210" cy="165" r="6" fill={light} />
    </g>
  );
};

const GauchosPampa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path
        d="M140 220 C150 190 175 175 200 178 C225 175 250 190 260 220 C265 235 255 244 240 240 C230 236 218 236 200 236 C182 236 170 236 160 240 C145 244 135 235 140 220 Z"
        fill={dark}
      />
      <polygon points="176,178 186,150 214,150 224,178" fill={light} />
      <line x1="176" y1="178" x2="224" y2="178" stroke={accentColor} strokeWidth="5" />
    </g>
  );
};

const Fileteado: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.55);
  return (
    <g fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round">
      <path d="M200 138 C170 108 150 108 150 138 C150 168 180 168 200 138 C220 108 250 108 250 138 C250 168 230 168 200 138 Z" />
      <circle cx="200" cy="138" r="10" fill={light} stroke="none" />
      <path d="M160 90 C170 100 180 100 190 92" />
      <path d="M240 90 C230 100 220 100 210 92" />
    </g>
  );
};

const DivanTerapia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="130" y="190" width="140" height="34" rx="12" fill={accentColor} />
      <rect x="120" y="170" width="26" height="54" rx="10" fill={dark} />
      <rect x="130" y="160" width="60" height="34" rx="14" fill={dark} />
      <circle cx="235" cy="120" r="20" fill={light} />
      <circle cx="235" cy="120" r="20" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const Boligrafo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="188" y="100" width="16" height="70" fill={accentColor} transform="rotate(20 196 135)" />
      <polygon points="188,168 204,168 200,186 192,186" fill={dark} transform="rotate(20 196 135)" />
      <circle cx="200" cy="190" r="4" fill={light} transform="rotate(20 196 135)" />
    </g>
  );
};

const HuellaDactilar: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g fill="none" stroke={light} strokeWidth="4" strokeLinecap="round">
      <path d="M170 120 a30 40 0 0 1 60 0" />
      <path d="M162 135 a38 45 0 0 1 76 5" />
      <path d="M168 160 q32 -20 64 0" />
      <path d="M175 178 q25 -14 50 0" />
      <path d="M185 195 q15 -8 30 0" />
    </g>
  );
};

const Maradona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M170 150 h60 v40 c0 14 -60 14 -60 0 Z" fill={accentColor} />
      <rect x="194" y="110" width="12" height="42" fill={dark} />
      <text x="200" y="180" fontSize="26" fontWeight="700" fill={light} textAnchor="middle">10</text>
    </g>
  );
};

const Borges: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g fill="none" stroke={accentColor} strokeWidth="4">
      <path d="M200 190 a20 20 0 1 1 0.1 0" />
      <path d="M200 175 a10 10 0 1 1 0.1 0" fill={dark} stroke="none" />
      <path d="M200 140 v-30 M180 150 l-14 -20 M220 150 l14 -20" strokeLinecap="round" />
    </g>
  );
};

const RockNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="195" cy="168" rx="26" ry="18" fill={accentColor} />
      <circle cx="195" cy="168" r="8" fill={dark} />
      <rect x="216" y="105" width="8" height="65" fill={dark} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={228 + i * 3} y1="112" x2={228 + i * 3} y2="150" stroke={light} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const CineOscar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="192" y="150" width="16" height="36" fill={dark} />
      <circle cx="200" cy="130" r="16" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="182" y="182" width="36" height="8" rx="2" fill={light} />
    </g>
  );
};

const Iguazu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="160,110 175,110 168,190 152,190" fill={accentColor} />
      <polygon points="185,100 200,100 195,190 178,190" fill={dark} />
      <polygon points="210,115 225,115 220,190 203,190" fill={accentColor} />
      <ellipse cx="190" cy="195" rx="60" ry="10" fill={light} opacity="0.7" />
    </g>
  );
};

const Evita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="160" y="170" width="80" height="14" fill={dark} />
      <path d="M185 168 C180 140 190 120 200 112 C210 120 220 140 215 168 Z" fill={accentColor} />
      <circle cx="200" cy="105" r="10" fill={light} />
    </g>
  );
};

const PeritoMoreno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <polygon points="150,190 170,120 190,190" fill={light} />
      <polygon points="185,190 205,100 225,190" fill={accentColor} />
      <polygon points="220,190 238,135 256,190" fill={dark} />
    </g>
  );
};

const Ushuaia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon points="140,190 170,130 200,190" fill={dark} />
      <rect x="215" y="120" width="16" height="60" fill={light} />
      <polygon points="210,120 236,120 223,102" fill={accentColor} />
      <rect x="221" y="96" width="4" height="10" fill={dark} />
    </g>
  );
};

export const argentinaIllustrations: Record<string, IllustrationDefinition> = {
  mate: { component: Mate, variant: "medallion" },
  asado: { component: Asado },
  tango: { component: Tango, variant: "medallion" },
  futbol: { component: Futbol, variant: "medallion" },
  voseo: { component: Voseo, variant: "medallion" },
  "cenar-tarde": { component: CenarTarde, variant: "medallion" },
  "dulce-de-leche": { component: DulceDeLeche, variant: "medallion" },
  "gauchos-pampa": { component: GauchosPampa },
  fileteado: { component: Fileteado, variant: "medallion" },
  "divan-terapia": { component: DivanTerapia },
  boligrafo: { component: Boligrafo, variant: "medallion" },
  "huella-dactilar": { component: HuellaDactilar, variant: "medallion" },
  maradona: { component: Maradona, variant: "medallion" },
  borges: { component: Borges, variant: "medallion" },
  "rock-nacional": { component: RockNacional, variant: "medallion" },
  "cine-oscar": { component: CineOscar, variant: "medallion" },
  iguazu: { component: Iguazu },
  evita: { component: Evita, variant: "medallion" },
  "perito-moreno": { component: PeritoMoreno },
  ushuaia: { component: Ushuaia },
};
