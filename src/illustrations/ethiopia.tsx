import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LucyFosil: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="10" ry="12" fill={light} />
      <path d="M195 152 L190 175 M205 152 L210 175 M198 155 L198 175 M202 155 L202 175" stroke={dark} strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="200" cy="140" r="5" fill={accentColor} />
    </g>
  );
};

const NuncaColonizada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 130 Q225 135 225 160 Q225 178 200 185 Q175 178 175 160 Q175 135 200 130 Z" fill={accentColor} />
      <circle cx="200" cy="155" r="8" fill={light} />
      <line x1="230" y1="120" x2="200" y2="150" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const CalendarioEtiope: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="130" width="60" height="50" fill={light} />
      <rect x="170" y="130" width="60" height="12" fill={accentColor} />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect key={`${row}-${col}`} x={178 + col * 16} y={150 + row * 10} width="8" height="6" fill={dark} opacity="0.6" />
        ))
      )}
    </g>
  );
};

const CafeOrigen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 150 h30 v20 a15 15 0 0 1 -30 0 Z" fill={accentColor} />
      <path d="M210 155 h10 a8 8 0 0 1 0 16 h-10 Z" fill={dark} />
      <ellipse cx="185" cy="130" rx="5" ry="7" fill={light} />
      <ellipse cx="196" cy="126" rx="5" ry="7" fill={light} />
    </g>
  );
};

const LalibelaIglesias: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 130 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 v-20 h20 Z" fill={accentColor} />
      <rect x="192" y="150" width="16" height="16" fill={light} />
    </g>
  );
};

const AksumObeliscos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="115" width="16" height="65" fill={accentColor} />
      <path d="M192 115 L200 105 L208 115 Z" fill={dark} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1="194" y1={130 + i * 15} x2="206" y2={130 + i * 15} stroke={light} strokeWidth="1.6" />
      ))}
    </g>
  );
};

const HaileSelassieRastafari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="145" r="16" fill={accentColor} />
      <circle cx="200" cy="145" r="9" fill={light} />
      <path d="M184 150 Q170 145 168 155 M216 150 Q230 145 232 155" stroke={dark} strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
};

const AlfabetoGeez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="130" width="50" height="40" fill={light} />
      <circle cx="175" cy="150" r="6" fill={accentColor} />
      <circle cx="225" cy="150" r="6" fill={accentColor} />
      <path d="M185 140 q5 5 0 10 M195 140 q5 5 0 10 M205 140 q5 5 0 10" stroke={dark} strokeWidth="2" fill="none" />
    </g>
  );
};

const HoraEtiope: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="150" r="26" fill="none" stroke={accentColor} strokeWidth="4" />
      <line x1="200" y1="150" x2="200" y2="128" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <line x1="200" y1="150" x2="216" y2="150" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="124" r="4" fill={light} />
    </g>
  );
};

const CorredoresEtiopes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="160" width="4" height="30" fill={dark} />
      <rect x="226" y="160" width="4" height="30" fill={dark} />
      <line x1="174" y1="168" x2="226" y2="168" stroke={accentColor} strokeWidth="4" />
      <path d="M185 185 L195 165 L205 178 L215 160" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

export const ethiopiaIllustrations: Record<string, IllustrationDefinition> = {
  "lucy-fosil": { component: LucyFosil, variant: "medallion" },
  "nunca-colonizada": { component: NuncaColonizada, variant: "medallion" },
  "calendario-etiope": { component: CalendarioEtiope },
  "cafe-origen": { component: CafeOrigen },
  "lalibela-iglesias": { component: LalibelaIglesias, variant: "medallion" },
  "aksum-obeliscos": { component: AksumObeliscos },
  "haile-selassie-rastafari": { component: HaileSelassieRastafari, variant: "medallion" },
  "alfabeto-geez": { component: AlfabetoGeez },
  "hora-etiope": { component: HoraEtiope, variant: "medallion" },
  "corredores-etiopes": { component: CorredoresEtiopes },
};
