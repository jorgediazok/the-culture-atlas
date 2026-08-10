import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Persepolis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="180" width="100" height="10" fill={dark} />
      {[160, 180, 200, 220, 240].map((x) => (
        <g key={x}>
          <rect x={x} y="130" width="10" height="50" fill={accentColor} />
          <rect x={x - 4} y="122" width="18" height="10" fill={light} />
        </g>
      ))}
    </g>
  );
};

const PoesiaPersa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M160 120 h75 v55 h-75 Z" fill={accentColor} />
      <line x1="197" y1="120" x2="197" y2="175" stroke={dark} strokeWidth="2" />
      <path d="M172 140 q10 15 0 30 M222 140 q-10 15 0 30" fill="none" stroke={light} strokeWidth="3" />
    </g>
  );
};

const AlfombrasPersas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="155" y="115" width="90" height="60" fill={accentColor} />
      <rect x="165" y="125" width="70" height="40" fill="none" stroke={light} strokeWidth="3" />
      <circle cx="200" cy="145" r="10" fill={dark} />
      {[170, 230].map((x) => (
        <circle key={x} cx={x} cy="145" r="5" fill={light} />
      ))}
    </g>
  );
};

const Nowruz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="160" y="165" width="80" height="8" fill={dark} />
      {[172, 192, 212, 228].map((x, i) => (
        <path key={x} d={`M${x} 165 q0 -${20 + (i % 2) * 8} 8 -${28 + (i % 2) * 8}`} fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      ))}
      <circle cx="220" cy="130" r="8" fill={light} />
    </g>
  );
};

const CineIrani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <circle cx="200" cy="140" r="46" fill={accentColor} />
      <circle cx="200" cy="140" r="12" fill={dark} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle key={deg} cx={200 + Math.cos((deg * Math.PI) / 180) * 28} cy={140 + Math.sin((deg * Math.PI) / 180) * 28} r="6" fill={dark} />
      ))}
    </g>
  );
};

const JardinesPersas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="115" width="100" height="65" fill={light} />
      <rect x="196" y="115" width="8" height="65" fill={dark} />
      <rect x="150" y="143" width="100" height="8" fill={dark} />
      {[170, 225].map((x) => (
        <circle key={x} cx={x} cy="128" r="8" fill={accentColor} />
      ))}
    </g>
  );
};

const Zoroastrismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 108 C180 108 170 128 178 140 C168 148 170 168 188 172 C192 182 208 182 212 172 C230 168 232 148 222 140 C230 128 220 108 200 108 Z" fill={accentColor} />
      <rect x="180" y="180" width="40" height="10" fill={dark} />
      <circle cx="200" cy="140" r="8" fill={light} />
    </g>
  );
};

const Azafran: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="200"
          cy="118"
          rx="9"
          ry="20"
          fill={light}
          transform={`rotate(${deg} 200 140)`}
        />
      ))}
      <circle cx="200" cy="140" r="7" fill={accentColor} />
      <path d="M195 140 l-4 12 M200 140 l0 14 M205 140 l4 12" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const AzulejosIsfahan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M200 108 a35 35 0 0 1 35 35 h-70 a35 35 0 0 1 35 -35 Z" fill={accentColor} />
      {Array.from({ length: 5 }).map((_, i) => (
        <circle key={i} cx={175 + i * 12} cy="140" r="4" fill={i % 2 === 0 ? light : dark} />
      ))}
      <rect x="185" y="143" width="30" height="40" fill={dark} />
    </g>
  );
};

const CiroElGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="115" width="20" height="60" rx="8" fill={accentColor} />
      <line x1="181" y1="128" x2="189" y2="128" stroke={dark} strokeWidth="2" />
      <line x1="181" y1="140" x2="189" y2="140" stroke={dark} strokeWidth="2" />
      <line x1="181" y1="152" x2="189" y2="152" stroke={dark} strokeWidth="2" />
      <circle cx="220" cy="130" r="14" fill={light} />
    </g>
  );
};

export const iranIllustrations: Record<string, IllustrationDefinition> = {
  persepolis: { component: Persepolis },
  "poesia-persa": { component: PoesiaPersa },
  "alfombras-persas": { component: AlfombrasPersas },
  nowruz: { component: Nowruz },
  "cine-irani": { component: CineIrani, variant: "medallion" },
  "jardines-persas": { component: JardinesPersas },
  zoroastrismo: { component: Zoroastrismo, variant: "medallion" },
  azafran: { component: Azafran, variant: "medallion" },
  "azulejos-isfahan": { component: AzulejosIsfahan },
  "ciro-el-grande": { component: CiroElGrande },
};
