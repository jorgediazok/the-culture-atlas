import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Trilinguismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="193" y="110" width="14" height="130" fill={dark} />
      <rect x="207" y="130" width="85" height="26" fill={accentColor} stroke={dark} strokeWidth="2" />
      <text x="249" y="149" fontSize="16" fontWeight="700" fill="#fff" textAnchor="middle">
        LU
      </text>
      <rect x="108" y="168" width="85" height="26" fill={light} stroke={dark} strokeWidth="2" />
      <text x="150" y="187" fontSize="16" fontWeight="700" fill={dark} textAnchor="middle">
        FR
      </text>
      <rect x="207" y="206" width="75" height="26" fill={dark} stroke={dark} strokeWidth="2" />
      <text x="244" y="225" fontSize="16" fontWeight="700" fill="#fff" textAnchor="middle">
        DE
      </text>
    </g>
  );
};

const Casamatas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M110 240 L110 190 Q110 140 200 140 Q290 140 290 190 L290 240 Z" fill={dark} />
      <path d="M140 240 L140 195 Q140 165 200 165 Q260 165 260 195 L260 240 Z" fill={accentColor} />
      {/* cannon */}
      <rect x="175" y="205" width="70" height="18" rx="8" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="175" cy="214" r="14" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="150" y="222" width="100" height="10" fill={dark} />
    </g>
  );
};

const CURRENCY_SYMBOLS: [number, number, string][] = [
  [145, 110, "$"],
  [255, 105, "€"],
  [280, 150, "£"],
];
const OFFICE_LEFT_WINDOWS = [0, 1, 2, 3];
const OFFICE_RIGHT_WINDOWS = [0, 1, 2, 3, 4];

const CentroFinanciero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="140" y="140" width="55" height="100" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      <rect x="205" y="110" width="60" height="130" fill={accentColor} stroke={dark} strokeWidth="2" />
      {OFFICE_LEFT_WINDOWS.map((row) => [0, 1].map((col) => (
        <rect key={`${row}-${col}`} x={148 + col * 20} y={150 + row * 20} width="12" height="12" fill={light} />
      )))}
      {OFFICE_RIGHT_WINDOWS.map((row) => [0, 1].map((col) => (
        <rect key={`${row}-${col}`} x={213 + col * 24} y={120 + row * 20} width="14" height="12" fill={light} />
      )))}
      {CURRENCY_SYMBOLS.map(([x, y, s]) => (
        <text key={s} x={x} y={y} fontSize="28" fontWeight="700" fill={dark} opacity="0.6" textAnchor="middle">
          {s}
        </text>
      ))}
    </g>
  );
};

const TransporteGratis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      <path d="M110 165 Q110 145 130 145 L270 145 Q290 145 290 165 L290 220 L110 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* open doors */}
      <rect x="150" y="160" width="6" height="55" fill={dark} />
      <rect x="200" y="160" width="6" height="55" fill={dark} />
      <rect x="115" y="155" width="30" height="55" fill={light} />
      <rect x="245" y="155" width="30" height="55" fill={light} />
      {/* wheels */}
      <circle cx="150" cy="228" r="12" fill={dark} />
      <circle cx="250" cy="228" r="12" fill={dark} />
      {/* person boarding without a ticket */}
      <circle cx="178" cy="200" r="10" fill={skin} />
      <rect x="170" y="210" width="16" height="28" fill={dark} />
    </g>
  );
};

const FLAG_POLE_X = [140, 270];

const CunaSchengen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const water = "#4A7A9C";
  return (
    <g>
      <path d="M90 220 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={water} strokeWidth="6" />
      <path d="M90 235 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={tint(water, 0.3)} strokeWidth="6" />
      {/* boat hull */}
      <polygon points="140,195 260,195 245,220 155,220" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      <rect x="175" y="165" width="50" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      {FLAG_POLE_X.map((x) => (
        <g key={x}>
          <line x1={x} y1="195" x2={x} y2="150" stroke={dark} strokeWidth="2.5" />
          <path d={`M${x} 150 Q${x + 22} 156 ${x} 164`} fill={light} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const MOSELA_TERRACE_LINES = [160, 180, 200, 220];
const MOSELA_WATER = "#4A7A9C";

const ValleMosela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* terraced hillside */}
      <polygon points="90,240 90,170 320,140 320,240" fill={accentColor} opacity="0.4" />
      {MOSELA_TERRACE_LINES.map((y) => (
        <line key={y} x1="95" y1={y} x2="315" y2={y - 14} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* river */}
      <rect x="90" y="225" width="230" height="15" fill={MOSELA_WATER} />
      {/* small village */}
      <rect x="150" y="195" width="20" height="20" fill={light} stroke={dark} strokeWidth="1.5" />
      <polygon points="146,195 160,183 174,195" fill={dark} />
      <rect x="180" y="200" width="16" height="15" fill={light} stroke={dark} strokeWidth="1.5" />
      <polygon points="177,200 188,190 199,200" fill={dark} />
    </g>
  );
};

const RadioLuxembourg: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <rect x="150" y="170" width="100" height="60" rx="8" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="180" cy="200" r="16" fill={light} stroke={dark} strokeWidth="3" />
      <rect x="210" y="188" width="30" height="8" fill={light} />
      <rect x="210" y="202" width="22" height="8" fill={light} />
      {/* sound waves radiating outward */}
      <path d="M 260 140 A 30 30 0 0 1 290 170" fill="none" stroke={dark} strokeWidth="3" opacity="0.6" />
      <path d="M 260 120 A 50 50 0 0 1 310 170" fill="none" stroke={dark} strokeWidth="3" opacity="0.45" />
      <path d="M 260 100 A 70 70 0 0 1 330 170" fill="none" stroke={dark} strokeWidth="3" opacity="0.3" />
      <line x1="200" y1="170" x2="215" y2="130" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const FIREWORK_BURSTS: [number, number, string][] = [
  [140, 100, "#E63946"],
  [270, 90, "#F4A300"],
  [230, 130, "#2A9D8F"],
];
const FIREWORK_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const GranDucado: IllustrationComponent = () => {
  const gold = "#D4AF37";
  const goldDark = shade(gold, 0.3);
  return (
    <g>
      {FIREWORK_BURSTS.map(([x, y, c]) => (
        <g key={`${x}-${y}`}>
          {FIREWORK_ANGLES.map((deg) => (
            <line key={deg} x1={x} y1={y} x2={x} y2={y - 14} stroke={c} strokeWidth="2" strokeLinecap="round" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      {/* cushion */}
      <path d="M150 230 Q150 214 200 214 Q250 214 250 230 Q250 242 200 242 Q150 242 150 230 Z" fill="#5D4037" />
      {/* ducal crown */}
      <path d="M160 214 L160 195 L172 205 L185 185 L200 200 L215 185 L228 205 L240 195 L240 214 Z" fill={gold} stroke={goldDark} strokeWidth="2.5" />
      <rect x="160" y="214" width="80" height="10" fill={goldDark} />
    </g>
  );
};

const PECKVILLERCHER_BIRDS: [number, string][] = [
  [150, "#E63946"],
  [200, "#2A9D8F"],
  [250, "#F4A300"],
];

const Peckvillercher: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* market stall table */}
      <rect x="110" y="220" width="200" height="14" fill={dark} opacity="0.5" />
      {PECKVILLERCHER_BIRDS.map(([x, c]) => (
        <g key={x}>
          <ellipse cx={x} cy="195" rx="24" ry="18" fill={c} stroke={shade(c, 0.3)} strokeWidth="2" />
          <polygon points={`${x + 20},193 ${x + 34},198 ${x + 20},203`} fill={c} />
          <circle cx={x - 12} cy="188" r="2.5" fill="#fff" />
          <path d={`M${x - 10} 178 Q${x - 6} 170 ${x} 178`} fill="none" stroke={shade(c, 0.3)} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const CastillosRurales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const forest = "#2D4A34";
  return (
    <g>
      <polygon points="95,240 130,190 165,240" fill={forest} opacity="0.7" />
      <polygon points="245,240 280,185 315,240" fill={forest} opacity="0.7" />
      {/* castle body */}
      <rect x="165" y="185" width="70" height="55" fill={light} stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="150" width="24" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="147,150 162,128 177,150" fill={dark} />
      <rect x="226" y="140" width="24" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="223,140 238,116 253,140" fill={dark} />
    </g>
  );
};

const SesAstra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const earth = "#2E7D32";
  return (
    <g>
      {/* earth */}
      <circle cx="200" cy="220" r="45" fill={earth} opacity="0.8" />
      {/* satellite body */}
      <rect x="188" y="120" width="24" height="24" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="126" width="34" height="12" fill={light} stroke={dark} strokeWidth="1.5" />
      <rect x="216" y="126" width="34" height="12" fill={light} stroke={dark} strokeWidth="1.5" />
      {/* curved signal lines pointing to earth */}
      <path d="M200 144 Q180 170 200 200" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      <path d="M200 144 Q220 170 200 200" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
    </g>
  );
};

const VilleroyBoch: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* wheel */}
      <ellipse cx="200" cy="228" rx="55" ry="14" fill={dark} opacity="0.4" />
      {/* vase */}
      <path d="M185 130 h30 v18 q18 10 18 35 q0 40 -33 40 q-33 0 -33 -40 q0 -25 18 -35 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="200" cy="148" rx="18" ry="6" fill={light} />
      <path d="M180 175 q20 12 40 0" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      <path d="M178 195 q22 14 44 0" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
    </g>
  );
};

// Hexagon points around (200,110), radius 34, precomputed offline (0°, 60°, ... 300°).
const EU_STARS_SCHUMAN: [number, number][] = [
  [234, 110],
  [217, 139.4],
  [183, 139.4],
  [166, 110],
  [183, 80.6],
  [217, 80.6],
];

const RobertSchuman: IllustrationComponent = () => {
  const dark = "#5D4037";
  const light = "#F5F0E6";
  const gold = "#D4A017";
  return (
    <g>
      {EU_STARS_SCHUMAN.map(([x, y]) => (
        <path key={`${x}-${y}`} d="M0 -6 L1.8 -1.8 L6 0 L1.8 1.8 L0 6 L-1.8 1.8 L-6 0 L-1.8 -1.8 Z" fill={gold} transform={`translate(${x} ${y})`} />
      ))}
      {/* dove body */}
      <ellipse cx="200" cy="185" rx="30" ry="16" fill={light} stroke={dark} strokeWidth="2" transform="rotate(-10 200 185)" />
      <circle cx="228" cy="176" r="8" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M200 182 Q170 170 145 178 Q172 182 188 192 Z" fill={light} stroke={dark} strokeWidth="1.5" />
      {/* olive branch in beak */}
      <path d="M236 176 Q252 172 262 180" fill="none" stroke="#3E7D32" strokeWidth="2.5" />
      <ellipse cx="256" cy="176" rx="4" ry="2.5" fill="#3E7D32" />
      <ellipse cx="262" cy="182" rx="4" ry="2.5" fill="#3E7D32" />
    </g>
  );
};

const CHARLOTTE_MIC_LINES = [158, 166, 174];

const GranDuquesaCharlotte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* mic stand */}
      <line x1="200" y1="240" x2="200" y2="180" stroke={dark} strokeWidth="5" />
      <line x1="175" y1="240" x2="225" y2="240" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* mic head */}
      <rect x="182" y="150" width="36" height="34" rx="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {CHARLOTTE_MIC_LINES.map((y) => (
        <line key={y} x1="188" y1={y} x2="212" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* crown resting on top */}
      <path d="M182 150 L188 132 L196 144 L200 128 L204 144 L212 132 L218 150 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
    </g>
  );
};

const EdwardSteichen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* tripod */}
      <line x1="200" y1="195" x2="165" y2="245" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="195" x2="200" y2="245" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="195" x2="235" y2="245" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      {/* camera body */}
      <rect x="160" y="155" width="80" height="50" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="200" cy="180" r="22" fill={dark} />
      <circle cx="200" cy="180" r="14" fill={light} />
      <rect x="215" y="140" width="20" height="16" fill={dark} />
    </g>
  );
};

// Hexagon points around (255,195), radius 16, precomputed offline (0°, 60°, ... 300°).
const FILM_REEL_HOLES: [number, number][] = [
  [271, 195],
  [263, 209.9],
  [247, 209.9],
  [239, 195],
  [247, 180.1],
  [263, 180.1],
];
const CLAPPER_STRIPES = [0, 1, 2, 3];

const LuxembourgCine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* clapperboard */}
      <rect x="120" y="160" width="90" height="70" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      <polygon points="120,160 135,140 225,140 210,160" fill={accentColor} stroke={dark} strokeWidth="2" />
      {CLAPPER_STRIPES.map((i) => (
        <polygon key={i} points={`${140 + i * 22},140 ${152 + i * 22},140 ${144 + i * 22},158 ${132 + i * 22},158`} fill={i % 2 === 0 ? light : shade(accentColor, 0.2)} />
      ))}
      {/* film reel */}
      <circle cx="255" cy="195" r="34" fill={light} stroke={dark} strokeWidth="3" />
      <circle cx="255" cy="195" r="9" fill={dark} />
      {FILM_REEL_HOLES.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={dark} />
      ))}
    </g>
  );
};

// Hexagon points around (200,95), radius 24, precomputed offline (0°, 60°, ... 300°).
const EU_STARS_CAPITAL: [number, number][] = [
  [224, 95],
  [212, 115.8],
  [188, 115.8],
  [176, 95],
  [188, 74.2],
  [212, 74.2],
];
const CAPITAL_WINDOW_ROWS = [0, 1, 2, 3, 4];

const CapitalInstitucionesUe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="175" y="110" width="50" height="130" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {CAPITAL_WINDOW_ROWS.map((i) => (
        <rect key={i} x="183" y={122 + i * 20} width="34" height="10" fill={light} />
      ))}
      {EU_STARS_CAPITAL.map(([x, y]) => (
        <path key={`${x}-${y}`} d="M0 -6 L1.8 -1.8 L6 0 L1.8 1.8 L0 6 L-1.8 1.8 L-6 0 L-1.8 -1.8 Z" fill={gold} transform={`translate(${x} ${y})`} />
      ))}
    </g>
  );
};

const CROSS_ROWS = [
  [140, 170, 200, 230, 260, 290],
  [140, 170, 200, 230, 260, 290],
];

const CementerioAmericanoPatton: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="230" width="220" height="15" fill={dark} opacity="0.3" />
      {CROSS_ROWS.map((row, ri) =>
        row.map((x) => (
          <g key={`${ri}-${x}`}>
            <line x1={x} y1={190 + ri * 22} x2={x} y2={220 + ri * 22} stroke="#F5F0E6" strokeWidth="4" />
            <line x1={x - 7} y1={198 + ri * 22} x2={x + 7} y2={198 + ri * 22} stroke="#F5F0E6" strokeWidth="4" />
          </g>
        ))
      )}
    </g>
  );
};

const HOP_X = [140, 180, 220, 260];

const Sprangprozessioun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* ground line the procession bounces along */}
      <line x1="110" y1="238" x2="290" y2="238" stroke={dark} strokeWidth="2" opacity="0.3" />
      {HOP_X.map((x, i) => {
        const hop = i % 2 === 0;
        const headY = hop ? 155 : 180;
        const footY = hop ? 220 : 238;
        return (
          <g key={x}>
            <circle cx={x} cy={headY} r="11" fill={skin} />
            <path d={`M${x - 12} ${footY} Q${x - 14} ${headY + 12} ${x} ${headY + 16} Q${x + 14} ${headY + 12} ${x + 12} ${footY} Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
            <line x1={x - 6} y1={footY} x2={x - 9} y2={footY + 8} stroke={dark} strokeWidth="3" strokeLinecap="round" />
            <line x1={x + 6} y1={footY} x2={x + 9} y2={footY + 8} stroke={dark} strokeWidth="3" strokeLinecap="round" />
            {hop && <ellipse cx={x} cy="240" rx="12" ry="3" fill={dark} opacity="0.2" />}
          </g>
        );
      })}
    </g>
  );
};

// Octagon points around (200,165), radius 55, precomputed offline (0°, 45°, ... 315°).
const FERRIS_CABINS: [number, number][] = [
  [255, 165],
  [238.9, 204.9],
  [200, 220],
  [161.1, 204.9],
  [145, 165],
  [161.1, 125.1],
  [200, 110],
  [238.9, 125.1],
];

const Schueberfouer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* ferris wheel */}
      <circle cx="200" cy="165" r="55" fill="none" stroke={accentColor} strokeWidth="5" />
      {FERRIS_CABINS.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <line x1="200" y1="165" x2={x} y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
          <rect x={x - 6} y={y - 6} width="12" height="12" fill={i % 2 === 0 ? light : dark} stroke={dark} strokeWidth="1" />
        </g>
      ))}
      {/* support and lit-up stalls */}
      <line x1="200" y1="220" x2="200" y2="240" stroke={dark} strokeWidth="4" />
      <rect x="110" y="225" width="30" height="20" fill={light} stroke={dark} strokeWidth="1.5" />
      <rect x="260" y="225" width="30" height="20" fill={light} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

export const luxembourgIllustrations: Record<string, IllustrationDefinition> = {
  trilinguismo: { component: Trilinguismo },
  casamatas: { component: Casamatas },
  "centro-financiero": { component: CentroFinanciero },
  "transporte-gratis": { component: TransporteGratis },
  "cuna-schengen": { component: CunaSchengen },
  "valle-mosela": { component: ValleMosela },
  "radio-luxembourg": { component: RadioLuxembourg },
  "gran-ducado": { component: GranDucado },
  peckvillercher: { component: Peckvillercher },
  "castillos-rurales": { component: CastillosRurales },
  "ses-astra": { component: SesAstra },
  "villeroy-boch": { component: VilleroyBoch },
  "robert-schuman": { component: RobertSchuman },
  "gran-duquesa-charlotte": { component: GranDuquesaCharlotte },
  "edward-steichen": { component: EdwardSteichen },
  "luxembourg-cine": { component: LuxembourgCine },
  "capital-instituciones-ue": { component: CapitalInstitucionesUe },
  "cementerio-americano-patton": { component: CementerioAmericanoPatton },
  sprangprozessioun: { component: Sprangprozessioun },
  schueberfouer: { component: Schueberfouer },
};
