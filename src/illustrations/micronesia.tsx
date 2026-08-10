import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const NanMadol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 185 h90 v-8 h-90 Z" fill={light} />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={168 + i * 18}
          y={150 - (i % 2) * 10}
          width="10"
          height={35 + (i % 2) * 10}
          fill={i % 2 === 0 ? accentColor : dark}
        />
      ))}
    </g>
  );
};

const PiedrasRai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="150" r="30" fill={accentColor} />
      <circle cx="200" cy="150" r="10" fill={light} />
      <circle cx="200" cy="150" r="30" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CompactoLibreAsociacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 155 q15 -10 30 0 q15 -10 30 0 q-15 15 -30 5 q-15 10 -30 -5 Z" fill={accentColor} />
      <circle cx="185" cy="150" r="3" fill={light} />
      <circle cx="215" cy="150" r="3" fill={dark} />
    </g>
  );
};

const PeciosChuuk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 165 L235 165 L220 180 L180 180 Z" fill={dark} />
      <rect x="195" y="140" width="10" height="25" fill={accentColor} />
      <path d="M170 160 q30 -8 60 0" fill="none" stroke={light} strokeWidth="2" strokeDasharray="3 3" />
    </g>
  );
};

const CuatroEstados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const colors = [accentColor, dark, light, accentColor];
  return (
    <g>
      {[
        [185, 140],
        [215, 140],
        [185, 170],
        [215, 170],
      ].map(([cx, cy], i) => (
        <rect key={i} x={cx - 10} y={cy - 10} width="20" height="20" fill={colors[i]} />
      ))}
    </g>
  );
};

const NavegacionTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 150 L230 160 M170 165 L230 145 M185 135 L200 185" stroke={accentColor} strokeWidth="2.4" fill="none" />
      <circle cx="185" cy="150" r="3" fill={dark} />
      <circle cx="215" cy="155" r="3" fill={light} />
    </g>
  );
};

const SakauPohnpei: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="170" rx="30" ry="10" fill={dark} />
      <rect x="188" y="140" width="10" height="30" rx="3" fill={accentColor} transform="rotate(-15 193 155)" />
      <ellipse cx="200" cy="160" rx="14" ry="6" fill={light} />
    </g>
  );
};

const IdiomasMicronesia: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 135 h30 v20 h-20 l-6 8 v-8 h-4 Z" fill={accentColor} />
      <path d="M205 150 h30 v20 h-4 v8 l-6 -8 h-20 Z" fill={light} />
    </g>
  );
};

const PescaAtun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 160 Q200 130 235 160 Q200 175 165 160 Z" fill={accentColor} />
      <path d="M235 160 L250 148 L250 172 Z" fill={dark} />
      <circle cx="180" cy="155" r="2.4" fill={light} />
    </g>
  );
};

const NivelMarAmenaza: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 175 Q200 165 225 175 L225 185 L175 185 Z" fill={light} />
      <path d="M155 178 Q200 168 245 178 L245 185 L155 185 Z" fill={accentColor} opacity="0.7" />
    </g>
  );
};

export const micronesiaIllustrations: Record<string, IllustrationDefinition> = {
  "nan-madol": { component: NanMadol },
  "piedras-rai": { component: PiedrasRai, variant: "medallion" },
  "compacto-libre-asociacion": { component: CompactoLibreAsociacion },
  "pecios-chuuk": { component: PeciosChuuk },
  "cuatro-estados": { component: CuatroEstados },
  "navegacion-tradicional": { component: NavegacionTradicional },
  "sakau-pohnpei": { component: SakauPohnpei },
  "idiomas-micronesia": { component: IdiomasMicronesia },
  "pesca-atun": { component: PescaAtun },
  "nivel-mar-amenaza": { component: NivelMarAmenaza },
};
