import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DiversidadLinguistica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M155 115 h60 a10 10 0 0 1 10 10 v22 a10 10 0 0 1 -10 10 h-38 l-14 14 v-14 h-8 a10 10 0 0 1 -10 -10 v-22 a10 10 0 0 1 10 -10 Z" fill={accentColor} />
      <path d="M215 150 h55 a10 10 0 0 1 10 10 v18 a10 10 0 0 1 -10 10 h-6 v12 l-14 -12 h-35 a10 10 0 0 1 -10 -10 v-18 a10 10 0 0 1 10 -10 Z" fill={dark} />
      <circle cx="178" cy="136" r="4" fill={light} />
      <circle cx="192" cy="136" r="4" fill={light} />
    </g>
  );
};

const TokPisin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M165 120 a20 18 0 1 0 0.1 0" fill={accentColor} />
      <path d="M225 145 a20 18 0 1 0 0.1 0" fill={dark} />
      <path d="M180 130 q20 10 40 5" fill="none" stroke={light} strokeWidth="3" strokeDasharray="4 4" />
    </g>
  );
};

const SingSing: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  const dark = shade(accentColor, 0.3);
  const angles = [-55, -33, -11, 11, 33, 55];
  return (
    <g>
      {angles.map((deg, i) => (
        <rect
          key={deg}
          x="196"
          y="78"
          width="8"
          height="48"
          rx="4"
          fill={i % 2 === 0 ? accentColor : light}
          transform={`rotate(${deg} 200 140)`}
        />
      ))}
      <circle cx="200" cy="148" r="22" fill={dark} />
    </g>
  );
};

const AveDelParaiso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="190" cy="145" rx="18" ry="14" fill={dark} />
      <path d="M205 145 q35 -10 40 10 q-30 6 -40 -10 Z" fill={accentColor} />
      <path d="M205 148 q30 12 32 30 q-25 -4 -32 -30 Z" fill={light} />
      <circle cx="175" cy="140" r="6" fill={dark} />
    </g>
  );
};

const KulaRing: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g fill="none" strokeWidth="6">
      <circle cx="185" cy="140" r="20" stroke={accentColor} />
      <circle cx="215" cy="140" r="20" stroke={dark} />
      <circle cx="185" cy="140" r="6" fill={light} stroke="none" />
      <circle cx="215" cy="140" r="6" fill={light} stroke="none" />
    </g>
  );
};

const PrimerContactoHighlands: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="150,190 175,130 195,190" fill={accentColor} />
      <polygon points="190,190 215,110 240,190" fill={dark} />
      <polygon points="205,140 218,120 231,140" fill={light} />
    </g>
  );
};

const BetelNut: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="20" ry="26" fill={accentColor} />
      <ellipse cx="200" cy="130" rx="10" ry="12" fill={light} />
      <circle cx="175" cy="180" r="6" fill={dark} />
      <circle cx="225" cy="185" r="5" fill={dark} />
    </g>
  );
};

const ArteSepik: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 115 h50 v55 q-25 15 -50 0 Z" fill={accentColor} />
      <circle cx="188" cy="140" r="6" fill={light} />
      <circle cx="212" cy="140" r="6" fill={light} />
      <path d="M185 160 q15 10 30 0" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const RugbyLeague: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="34" ry="20" fill={accentColor} />
      <line x1="180" y1="140" x2="220" y2="140" stroke={light} strokeWidth="3" />
      <line x1="188" y1="132" x2="188" y2="148" stroke={light} strokeWidth="2" />
      <line x1="200" y1="130" x2="200" y2="150" stroke={light} strokeWidth="2" />
      <line x1="212" y1="132" x2="212" y2="148" stroke={light} strokeWidth="2" />
      <ellipse cx="200" cy="140" rx="34" ry="20" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const SelvaBiodiversidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[[170, 150], [200, 135], [230, 150]].map(([cx, cy], i) => (
        <circle key={cx} cx={cx} cy={cy} r={i === 1 ? 30 : 24} fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <rect x="196" y="165" width="8" height="25" fill={light} />
    </g>
  );
};

export const papuaNewGuineaIllustrations: Record<string, IllustrationDefinition> = {
  "diversidad-linguistica": { component: DiversidadLinguistica, variant: "medallion" },
  "tok-pisin": { component: TokPisin },
  "sing-sing": { component: SingSing, variant: "medallion" },
  "ave-del-paraiso": { component: AveDelParaiso },
  "kula-ring": { component: KulaRing },
  "primer-contacto-highlands": { component: PrimerContactoHighlands },
  "betel-nut": { component: BetelNut },
  "arte-sepik": { component: ArteSepik },
  "rugby-league": { component: RugbyLeague, variant: "medallion" },
  "selva-biodiversidad": { component: SelvaBiodiversidad },
};
