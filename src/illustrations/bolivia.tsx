import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SalarDeUyuni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="155" y="150" width="90" height="35" fill={light} />
      <path d="M155 150 L200 120 L245 150 Z" fill={accentColor} opacity="0.6" />
      <line x1="155" y1="150" x2="245" y2="150" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LagoTiticaca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="200" cy="165" rx="55" ry="20" fill={accentColor} />
      <path d="M175 155 h30 v18 h-8 l-7 8 v-8 h-15 Z" fill={light} />
      <line x1="150" y1="165" x2="250" y2="165" stroke={dark} strokeWidth="2" strokeDasharray="4 4" />
    </g>
  );
};

const TelefericoLaPaz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 120 L250 175" stroke={dark} strokeWidth="3" fill="none" />
      <rect x="188" y="140" width="24" height="20" rx="4" fill={accentColor} transform="rotate(30 200 150)" />
      <path d="M165 185 Q200 155 235 185" fill="none" stroke={light} strokeWidth="4" />
    </g>
  );
};

const Cholitas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="26" ry="8" fill={dark} />
      <path d="M180 140 a20 12 0 1 1 40 0 Z" fill={accentColor} />
      <path d="M165 165 Q200 150 235 165 L235 185 Q200 175 165 185 Z" fill={light} />
    </g>
  );
};

const Tiwanaku: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 120 h20 v65 h-20 Z" fill={accentColor} />
      <path d="M215 120 h20 v65 h-20 Z" fill={accentColor} />
      <rect x="165" y="120" width="70" height="16" fill={dark} />
      <rect x="188" y="140" width="24" height="30" fill={light} />
    </g>
  );
};

const CarnavalDeOruro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="155" rx="30" ry="26" fill={accentColor} />
      <circle cx="188" cy="148" r="6" fill="#fff" />
      <circle cx="212" cy="148" r="6" fill="#fff" />
      <path d="M180 125 q6 -14 14 -4 M206 121 q8 -10 14 4" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M188 172 q12 10 24 0" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const HojaDeCoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {[-18, 0, 18].map((dx, i) => (
        <path
          key={dx}
          d="M200 185 C195 160 195 130 200 110 C205 130 205 160 200 185 Z"
          fill={i === 1 ? accentColor : light}
          transform={`translate(${dx} 0) rotate(${dx / 2} 200 150)`}
        />
      ))}
      <line x1="200" y1="185" x2="200" y2="192" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const PotosiCerroRico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M160 185 L200 115 L240 185 Z" fill={accentColor} />
      <path d="M185 185 L200 155 L215 185 Z" fill={dark} />
      <circle cx="200" cy="115" r="6" fill={light} />
    </g>
  );
};

const IdiomasOficiales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 130 h50 v28 h-16 l-8 12 v-12 h-26 Z" fill={accentColor} />
      <path d="M215 150 h35 v22 h-12 l-6 10 v-10 h-17 Z" fill={light} />
      <path d="M175 165 h30 v18 h-10 l-6 8 v-8 h-14 Z" fill={dark} />
    </g>
  );
};

const Charango: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="195" cy="160" rx="24" ry="26" fill={accentColor} />
      <rect x="205" y="105" width="8" height="55" fill={dark} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={186 + i * 9} y1="145" x2={186 + i * 9} y2="180" stroke={light} strokeWidth="2" />
      ))}
    </g>
  );
};

export const boliviaIllustrations: Record<string, IllustrationDefinition> = {
  "salar-de-uyuni": { component: SalarDeUyuni },
  "lago-titicaca": { component: LagoTiticaca, variant: "medallion" },
  "teleferico-la-paz": { component: TelefericoLaPaz },
  cholitas: { component: Cholitas, variant: "medallion" },
  tiwanaku: { component: Tiwanaku },
  "carnaval-de-oruro": { component: CarnavalDeOruro, variant: "medallion" },
  "hoja-de-coca": { component: HojaDeCoca },
  "potosi-cerro-rico": { component: PotosiCerroRico },
  "idiomas-oficiales": { component: IdiomasOficiales },
  charango: { component: Charango, variant: "medallion" },
};
