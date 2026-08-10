import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SaltoAngel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 110 h30 v10 h-30 Z" fill={dark} />
      <path d="M182 120 q4 30 -2 65 h10 q6 -35 2 -65 Z" fill={light} />
      <ellipse cx="188" cy="188" rx="30" ry="8" fill={accentColor} opacity="0.6" />
    </g>
  );
};

const TepuyesRoraima: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M165 185 L175 130 H225 L235 185 Z" fill={accentColor} />
      <rect x="175" y="122" width="50" height="10" fill={dark} />
      <path d="M185 185 L190 155 H210 L215 185 Z" fill={light} />
    </g>
  );
};

const SimonBolivar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="110" width="8" height="60" fill={dark} />
      <path d="M196 108 l14 14 -14 14 Z" fill={accentColor} />
      <rect x="170" y="172" width="60" height="10" rx="3" fill={light} />
    </g>
  );
};

const RayoDelCatatumbo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="155" y="165" width="90" height="20" fill={dark} />
      <path d="M205 108 L188 148 h14 L192 182 L222 138 h-16 Z" fill={light} />
      <circle cx="200" cy="150" r="2" fill={accentColor} />
    </g>
  );
};

const MissVenezuela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 155 L185 125 L200 140 L215 125 L225 155 Z" fill={accentColor} />
      <circle cx="185" cy="125" r="4" fill={light} />
      <circle cx="200" cy="118" r="4" fill={light} />
      <circle cx="215" cy="125" r="4" fill={light} />
      <ellipse cx="200" cy="158" rx="30" ry="6" fill={dark} />
    </g>
  );
};

const Arepa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="35" ry="20" fill={accentColor} />
      <path d="M170 150 a35 20 0 0 0 60 0" fill="none" stroke={dark} strokeWidth="3" />
      <ellipse cx="200" cy="145" rx="20" ry="8" fill={light} />
    </g>
  );
};

const Joropo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 180 Q170 110 220 120 Q210 150 200 180 Z" fill={accentColor} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={178 + i * 10} y1="170" x2={205 + i * 3} y2="125" stroke={light} strokeWidth="1.5" />
      ))}
      <rect x="215" y="150" width="8" height="30" fill={dark} />
    </g>
  );
};

const BeisbolVenezolano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="195" cy="145" r="18" fill={light} />
      <path d="M185 135 q10 10 0 20 M205 135 q-10 10 0 20" stroke={accentColor} strokeWidth="2" fill="none" />
      <rect x="212" y="160" width="6" height="30" rx="3" fill={dark} transform="rotate(25 215 175)" />
    </g>
  );
};

const ReservasPetroleo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="180" y="140" width="40" height="45" fill={light} />
      <path d="M186 140 v-20 M214 140 v-20" stroke={dark} strokeWidth="6" />
      <path d="M186 120 h10 M204 120 h10" stroke={accentColor} strokeWidth="6" />
    </g>
  );
};

const OrinocoLlanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 165 Q200 145 245 165 L245 185 Q200 165 155 185 Z" fill={light} />
      <ellipse cx="190" cy="150" rx="16" ry="10" fill={accentColor} />
      <ellipse cx="215" cy="155" rx="10" ry="6" fill={dark} />
    </g>
  );
};

export const venezuelaIllustrations: Record<string, IllustrationDefinition> = {
  "salto-angel": { component: SaltoAngel },
  "tepuyes-roraima": { component: TepuyesRoraima },
  "simon-bolivar": { component: SimonBolivar, variant: "medallion" },
  "rayo-del-catatumbo": { component: RayoDelCatatumbo },
  "miss-venezuela": { component: MissVenezuela, variant: "medallion" },
  arepa: { component: Arepa },
  joropo: { component: Joropo },
  "beisbol-venezolano": { component: BeisbolVenezolano, variant: "medallion" },
  "reservas-petroleo": { component: ReservasPetroleo },
  "orinoco-llanos": { component: OrinocoLlanos },
};
