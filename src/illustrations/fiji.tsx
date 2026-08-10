import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const KavaYaqona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 155 Q200 175 235 155 L228 165 Q200 180 172 165 Z" fill={accentColor} />
      <ellipse cx="200" cy="155" rx="35" ry="10" fill={light} />
      <ellipse cx="200" cy="155" rx="35" ry="10" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const RugbyOroOlimpico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="195" cy="150" r="18" fill={accentColor} />
      <circle cx="195" cy="150" r="11" fill={light} />
      <ellipse cx="222" cy="168" rx="14" ry="9" fill={dark} transform="rotate(-20 222 168)" />
    </g>
  );
};

const AguaEmbotelladaFiji: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="182" y="140" width="36" height="45" rx="4" fill={accentColor} />
      <rect x="192" y="122" width="16" height="20" fill={dark} />
      <rect x="188" y="150" width="24" height="16" fill={light} />
    </g>
  );
};

const Archipielago330Islas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[
        [170, 170, 14],
        [200, 178, 20],
        [225, 165, 10],
        [190, 150, 8],
      ].map(([cx, cy, r], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.4} fill={i % 2 === 0 ? accentColor : light} />
      ))}
    </g>
  );
};

const IndoFiyianos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 140 h30 v30 h-30 Z" fill={accentColor} />
      <path d="M200 155 h30 v30 h-30 Z" fill={dark} />
      <circle cx="200" cy="155" r="6" fill={light} />
    </g>
  );
};

const ArrecifeArcoiris: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 185 Q170 160 190 160 Q195 145 210 155 Q225 150 225 170 Q225 185 200 185 Z" fill={light} />
      <circle cx="190" cy="170" r="4" fill={accentColor} />
      <circle cx="210" cy="168" r="4" fill={dark} />
    </g>
  );
};

const GolpesEstado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <line x1="200" y1="120" x2="200" y2="175" stroke={dark} strokeWidth="4" />
      <path d="M170 135 L200 128 L230 140" fill="none" stroke={accentColor} strokeWidth="3" />
      <circle cx="170" cy="140" r="8" fill={light} />
      <circle cx="230" cy="146" r="8" fill={light} />
    </g>
  );
};

const BureTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="155" width="50" height="30" fill={light} />
      <path d="M165 155 L200 120 L235 155 Z" fill={accentColor} />
      <path d="M165 155 L200 130 L235 155" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const IslasCanibalesHistoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="197" y="150" width="6" height="35" fill={accentColor} />
      <path d="M188 120 v30 M194 118 v32 M200 117 v33 M206 118 v32" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <path d="M188 150 q12 8 24 0" fill="none" stroke={light} strokeWidth="2" />
    </g>
  );
};

const MekeDanza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M195 185 V150 Q195 135 205 135 Q215 135 210 150 L212 185 Z" fill={accentColor} />
      <circle cx="205" cy="128" r="8" fill={dark} />
      <path d="M215 145 L235 130" stroke={light} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

export const fijiIllustrations: Record<string, IllustrationDefinition> = {
  "kava-yaqona": { component: KavaYaqona },
  "rugby-oro-olimpico": { component: RugbyOroOlimpico, variant: "medallion" },
  "agua-embotellada-fiji": { component: AguaEmbotelladaFiji, variant: "medallion" },
  "archipielago-330-islas": { component: Archipielago330Islas },
  "indo-fiyianos": { component: IndoFiyianos, variant: "medallion" },
  "arrecife-arcoiris": { component: ArrecifeArcoiris },
  "golpes-estado": { component: GolpesEstado, variant: "medallion" },
  "bure-tradicional": { component: BureTradicional },
  "islas-canibales-historia": { component: IslasCanibalesHistoria, variant: "medallion" },
  "meke-danza": { component: MekeDanza },
};
