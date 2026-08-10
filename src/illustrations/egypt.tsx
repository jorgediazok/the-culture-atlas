import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PiramidesGiza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 185 L180 140 L205 185 Z" fill={light} />
      <path d="M180 185 L210 125 L240 185 Z" fill={accentColor} />
      <path d="M215 185 L232 155 L249 185 Z" fill={dark} />
    </g>
  );
};

const PiedraRosetta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 120 h50 v55 q0 10 -10 10 h-30 q-10 0 -10 -10 Z" fill={accentColor} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="183" y1={135 + i * 12} x2="217" y2={135 + i * 12} stroke={light} strokeWidth="2" />
      ))}
      <rect x="175" y="120" width="50" height="8" fill={dark} />
    </g>
  );
};

const NiloCrecidas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 165 Q180 150 200 165 Q220 180 245 165 L245 185 L155 185 Z" fill={accentColor} />
      <path d="M160 150 Q185 138 205 150 Q225 162 240 150" fill="none" stroke={light} strokeWidth="3" />
      <path d="M170 185 v-15 M190 185 v-20 M210 185 v-12" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const Momificacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M185 115 Q200 105 215 115 L218 175 Q200 185 182 175 Z" fill={accentColor} />
      <ellipse cx="200" cy="128" rx="12" ry="10" fill={light} />
      <path d="M190 150 h20 M190 160 h20" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const AbuSimbel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="130" width="60" height="55" fill={accentColor} />
      {[182, 200, 218].map((x, i) => (
        <rect key={x} x={x - 6} y="115" width="12" height="20" fill={i === 1 ? light : dark} />
      ))}
    </g>
  );
};

const KhanElKhalili: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="150" width="70" height="35" fill={light} />
      {[180, 200, 220].map((x, i) => (
        <path key={x} d={`M${x} 120 q6 8 0 16 q-6 -8 0 -16 Z`} fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <line x1="165" y1="140" x2="235" y2="140" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const PapiroEgipcio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="130" width="50" height="35" fill={light} />
      <circle cx="175" cy="147" r="7" fill={accentColor} />
      <circle cx="225" cy="147" r="7" fill={accentColor} />
      <line x1="183" y1="140" x2="217" y2="140" stroke={dark} strokeWidth="1.6" />
      <line x1="183" y1="150" x2="217" y2="150" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const Tutankamon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 120 Q200 110 220 120 L216 175 Q200 185 184 175 Z" fill={accentColor} />
      <path d="M172 130 Q180 115 190 130 L188 160 Q180 168 174 160 Z" fill={dark} />
      <path d="M228 130 Q220 115 210 130 L212 160 Q220 168 226 160 Z" fill={dark} />
      <line x1="192" y1="145" x2="208" y2="145" stroke={light} strokeWidth="2" />
    </g>
  );
};

const CanalSuez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 178 h90 v10 h-90 Z" fill={light} />
      <path d="M175 178 L175 160 L215 160 L215 178 Z" fill={accentColor} />
      <path d="M188 160 L188 145 L202 145 L202 160" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const FaroAlejandria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 185 L192 120 L208 120 L212 185 Z" fill={accentColor} />
      <rect x="190" y="108" width="20" height="14" fill={dark} />
      <path d="M195 100 q5 -10 10 0 q-5 6 -10 0 Z" fill={light} />
    </g>
  );
};

export const egyptIllustrations: Record<string, IllustrationDefinition> = {
  "piramides-giza": { component: PiramidesGiza },
  "piedra-rosetta": { component: PiedraRosetta, variant: "medallion" },
  "nilo-crecidas": { component: NiloCrecidas },
  momificacion: { component: Momificacion, variant: "medallion" },
  "abu-simbel": { component: AbuSimbel },
  "khan-el-khalili": { component: KhanElKhalili },
  "papiro-egipcio": { component: PapiroEgipcio, variant: "medallion" },
  tutankamon: { component: Tutankamon, variant: "medallion" },
  "canal-suez": { component: CanalSuez },
  "faro-alejandria": { component: FaroAlejandria },
};
