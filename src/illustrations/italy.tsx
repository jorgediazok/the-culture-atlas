import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Pasta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const wood = "#B08552";
  return (
    <g>
      {/* wooden table */}
      <rect x="90" y="215" width="220" height="25" fill={wood} />
      {/* spaghetti strands */}
      <path d="M120 210 Q125 180 118 150" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M132 210 Q137 180 130 150" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M144 210 Q149 180 142 150" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      {/* penne tubes */}
      <rect x="170" y="190" width="14" height="34" rx="6" fill={light} stroke={dark} strokeWidth="2" transform="rotate(-15 177 207)" />
      <rect x="190" y="185" width="14" height="34" rx="6" fill={light} stroke={dark} strokeWidth="2" transform="rotate(10 197 202)" />
      {/* farfalle bowtie */}
      <path d="M230 195 L250 185 L250 205 Z M230 195 L210 185 L210 205 Z" fill={dark} />
      <rect x="226" y="191" width="8" height="8" fill={dark} />
      {/* fusilli spiral */}
      <path d="M270 175 Q280 180 275 190 Q265 195 270 205 Q280 210 275 218" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const Espresso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* bar counter */}
      <rect x="120" y="215" width="200" height="20" fill={dark} />
      {/* person standing */}
      <circle cx="180" cy="140" r="16" fill={skin} />
      <path d="M162 158 Q180 148 198 158 L194 215 L166 215 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {/* arm raising the cup */}
      <path d="M194 165 Q215 170 218 190" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* small espresso cup */}
      <path d="M212 185 L228 185 L225 198 L215 198 Z" fill="#fff" stroke={dark} strokeWidth="1.5" />
      {/* steam */}
      <path d="M220 178 Q216 170 220 162" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const Vespa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* cobblestone ground */}
      <rect x="100" y="230" width="220" height="20" fill={dark} opacity="0.15" />
      {/* wheels */}
      <circle cx="150" cy="215" r="20" fill={dark} />
      <circle cx="150" cy="215" r="8" fill={light} />
      <circle cx="250" cy="215" r="20" fill={dark} />
      <circle cx="250" cy="215" r="8" fill={light} />
      {/* scooter body */}
      <path d="M150 215 C155 175 195 160 220 168 C245 163 258 178 250 215 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* headlight and handlebar */}
      <circle cx="222" cy="158" r="10" fill={light} stroke={dark} strokeWidth="2" />
      <line x1="222" y1="148" x2="222" y2="135" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="205" y1="135" x2="238" y2="135" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      {/* seat */}
      <ellipse cx="175" cy="172" rx="18" ry="6" fill={dark} />
    </g>
  );
};

const COLISEO_ARCHES = [140, 158, 176, 194, 212, 230, 248];

const Coliseo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const sky = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="90" y="90" width="220" height="70" fill={sky} opacity="0.4" />
      <path d="M110 230 Q110 150 200 150 Q290 150 290 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {COLISEO_ARCHES.map((x) => (
        <path key={x} d={`M${x} 230 L${x} 195 Q${x + 9} 185 ${x + 18} 195 L${x + 18} 230 Z`} fill={dark} opacity="0.7" />
      ))}
      <rect x="110" y="150" width="180" height="10" fill={dark} opacity="0.5" />
    </g>
  );
};

const ModaMilanese: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  return (
    <g>
      {/* shop window frame */}
      <rect x="120" y="120" width="180" height="110" fill="none" stroke={dark} strokeWidth="4" />
      {/* two dressed mannequins */}
      <circle cx="165" cy="150" r="10" fill={skin} />
      <path d="M150 165 Q165 158 180 165 L175 225 L155 225 Z" fill={accentColor} />
      <circle cx="245" cy="150" r="10" fill={skin} />
      <path d="M228 165 Q245 156 262 165 L256 225 L234 225 Z" fill={light} />
    </g>
  );
};

const PalioSiena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  const crowdX = [100, 120, 140, 280, 260, 240];
  return (
    <g>
      {/* plaza edge with crowd */}
      <path d="M90 235 Q200 250 310 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" />
      {crowdX.map((x) => (
        <circle key={x} cx={x} cy="238" r="4" fill={dark} opacity="0.5" />
      ))}
      {/* galloping horse, bareback */}
      <path d="M140 200 Q135 178 165 172 Q190 166 205 180 Q218 178 224 188 L214 195 Q216 205 208 212 L145 212 Z" fill={dark} />
      <path d="M205 180 Q218 172 230 170 Q235 170 234 176 Q228 176 222 182 Z" fill={dark} />
      <path d="M165 205 L155 230 M180 205 L188 232 M198 212 L192 232 M210 212 L220 230" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* bareback rider, no saddle */}
      <circle cx="185" cy="165" r="9" fill={skin} />
      <path d="M177 173 Q185 168 193 173 L191 195 L179 195 Z" fill={accentColor} />
    </g>
  );
};

const DINNER_TABLE_X = [130, 165, 200, 235, 270];

const PranzoDomenica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* table */}
      <rect x="100" y="195" width="220" height="14" fill={dark} />
      {DINNER_TABLE_X.map((x) => (
        <ellipse key={x} cx={x} cy="192" rx="14" ry="6" fill={light} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* several generations seated */}
      {DINNER_TABLE_X.map((x, i) => (
        <circle key={x} cx={x} cy={160 - (i % 2) * 6} r="11" fill={skin} />
      ))}
    </g>
  );
};

const MotorValley: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* factory behind */}
      <rect x="220" y="150" width="90" height="70" fill={light} opacity="0.5" stroke={dark} strokeWidth="1.5" />
      <rect x="290" y="120" width="14" height="35" fill={dark} opacity="0.6" />
      {/* sports car, side profile */}
      <path d="M110 215 L120 195 Q140 185 165 188 L200 180 Q220 180 228 195 L240 215 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M155 188 Q165 175 185 178 L195 190 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="1.5" />
      <circle cx="145" cy="215" r="16" fill={dark} />
      <circle cx="145" cy="215" r="6" fill={light} />
      <circle cx="215" cy="215" r="16" fill={dark} />
      <circle cx="215" cy="215" r="6" fill={light} />
    </g>
  );
};

const VENICE_BUILDINGS: [number, number, string][] = [
  [95, 140, "#E8B923"],
  [300, 150, "#C1272D"],
];

const VeneciaGondolas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {VENICE_BUILDINGS.map(([x, y, c]) => (
        <rect key={x} x={x} y={y} width="40" height="80" fill={c} opacity="0.8" />
      ))}
      {/* water */}
      <rect x="90" y="210" width="220" height="35" fill={tint(accentColor, 0.3)} />
      {/* gondola hull */}
      <path d="M130 220 Q130 235 150 235 L250 235 Q270 235 260 220 L240 218 L150 218 Z" fill={dark} />
      <path d="M240 218 Q255 200 250 185" fill="none" stroke={dark} strokeWidth="3" />
      {/* gondolier standing with oar */}
      <circle cx="215" cy="195" r="8" fill={tint(shade(accentColor, 0.1), 0.6)} />
      <line x1="215" y1="203" x2="215" y2="218" stroke={dark} strokeWidth="5" />
      <line x1="225" y1="180" x2="200" y2="230" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const DOLCE_VITA_STARS: [number, number][] = [
  [130, 110],
  [280, 100],
  [260, 130],
];

const DolceVita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {DOLCE_VITA_STARS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill={light} />
      ))}
      {/* tiered fountain */}
      <ellipse cx="230" cy="220" rx="40" ry="12" fill={dark} />
      <ellipse cx="230" cy="200" rx="26" ry="9" fill={dark} opacity="0.8" />
      <ellipse cx="230" cy="185" rx="14" ry="6" fill={dark} opacity="0.6" />
      <line x1="230" y1="220" x2="230" y2="185" stroke={dark} strokeWidth="3" opacity="0.5" />
      {/* woman in an elegant dress beside it */}
      <circle cx="160" cy="155" r="10" fill={tint(shade(accentColor, 0.1), 0.6)} />
      <path d="M148 168 Q160 160 172 168 Q180 200 165 230 L155 230 Q140 200 148 168 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const PIANO_KEY_INDEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const PIANO_BLACK_KEYS = [1, 3, 4, 6, 8];

const Piano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* grand piano wing shape, seen from above */}
      <path d="M120 150 Q120 130 150 128 L260 120 Q290 118 290 150 Q290 200 240 215 L150 215 Q120 200 120 150 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* keyboard */}
      <rect x="130" y="195" width="120" height="24" fill="#fff" stroke={dark} strokeWidth="2" />
      {PIANO_KEY_INDEX.map((i) => (
        <line key={i} x1={130 + i * 12} y1="195" x2={130 + i * 12} y2="219" stroke={dark} strokeWidth="1" />
      ))}
      {PIANO_BLACK_KEYS.map((i) => (
        <rect key={i} x={130 + i * 12 - 3} y="195" width="6" height="14" fill={dark} />
      ))}
    </g>
  );
};

const Anteojos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* book */}
      <rect x="130" y="200" width="150" height="20" rx="3" fill={accentColor} stroke={dark} strokeWidth="2" />
      <line x1="205" y1="200" x2="205" y2="220" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {/* round glasses resting on top */}
      <circle cx="175" cy="185" r="24" fill="none" stroke={dark} strokeWidth="5" />
      <circle cx="235" cy="185" r="24" fill="none" stroke={dark} strokeWidth="5" />
      <line x1="199" y1="185" x2="211" y2="185" stroke={dark} strokeWidth="5" />
      <path d="M151 180 Q140 175 132 182" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M259 180 Q270 175 278 182" fill="none" stroke={dark} strokeWidth="4" />
      <circle cx="175" cy="185" r="18" fill={light} opacity="0.4" />
      <circle cx="235" cy="185" r="18" fill={light} opacity="0.4" />
    </g>
  );
};

const SKETCH_LINES = [160, 175, 190, 205];

const LeonardoDaVinci: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const paper = tint(shade(accentColor, 0.1), 0.65);
  return (
    <g>
      <path d="M110 150 L200 138 L200 225 L110 240 Z" fill={paper} stroke={dark} strokeWidth="2" />
      <path d="M200 138 L290 150 L290 240 L200 225 Z" fill={tint(paper, 0.15)} stroke={dark} strokeWidth="2" />
      <line x1="200" y1="138" x2="200" y2="225" stroke={dark} strokeWidth="2.5" />
      {/* technical gear sketch on the left page */}
      <circle cx="155" cy="185" r="22" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.7" />
      <circle cx="155" cy="185" r="8" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.7" />
      <line x1="155" y1="163" x2="155" y2="207" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="133" y1="185" x2="177" y2="185" stroke={dark} strokeWidth="1" opacity="0.5" />
      {/* text lines on the right page */}
      {SKETCH_LINES.map((y) => (
        <line key={y} x1="220" y1={y} x2="270" y2={y + 2} stroke={dark} strokeWidth="1.2" opacity="0.4" />
      ))}
      {/* quill beside it */}
      <path d="M295 130 L255 210" stroke={dark} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M295 130 Q308 115 300 100 Q286 110 282 128 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const TELESCOPE_STARS: [number, number][] = [
  [150, 110],
  [240, 95],
  [270, 130],
  [190, 90],
];

const GalileoGalilei: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {TELESCOPE_STARS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill={light} />
      ))}
      {/* telescope tube, angled up */}
      <rect x="185" y="120" width="24" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-35 197 165)" />
      <rect x="180" y="112" width="34" height="16" fill={dark} transform="rotate(-35 197 120)" />
      {/* tripod */}
      <line x1="200" y1="210" x2="175" y2="245" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="210" x2="200" y2="245" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="210" x2="225" y2="245" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Opera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  const curtain = "#7A1F2B";
  return (
    <g>
      {/* stage curtains */}
      <path d="M100 100 Q120 170 100 240 L130 240 Q145 170 130 100 Z" fill={curtain} opacity="0.85" />
      <path d="M300 100 Q280 170 300 240 L270 240 Q255 170 270 100 Z" fill={curtain} opacity="0.85" />
      {/* singer, arms open wide */}
      <circle cx="200" cy="150" r="14" fill={skin} />
      <path d="M180 170 Q200 160 220 170 L215 230 L185 230 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <line x1="180" y1="172" x2="150" y2="150" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <line x1="220" y1="172" x2="250" y2="150" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const CEILING_RIBS = [0, 45, 90, 135, 180, 225, 270, 315];
// Hexagon points around (200,165), radius 55, precomputed offline (0°, 60°, ... 300°).
const CEILING_FIGURES: [number, number][] = [
  [255, 165],
  [227.5, 212.6],
  [172.5, 212.6],
  [145, 165],
  [172.5, 117.4],
  [227.5, 117.4],
];

const Renacimiento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="165" r="80" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="165" r="55" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <circle cx="200" cy="165" r="28" fill={accentColor} />
      {CEILING_RIBS.map((deg) => (
        <line key={deg} x1="200" y1="165" x2="200" y2="85" stroke={dark} strokeWidth="1.5" opacity="0.4" transform={`rotate(${deg} 200 165)`} />
      ))}
      {CEILING_FIGURES.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={dark} />
      ))}
    </g>
  );
};

const PIZZA_MOZZARELLA: [number, number][] = [
  [185, 155],
  [215, 150],
  [195, 175],
  [220, 178],
  [175, 180],
];

const PizzaNapoletana: IllustrationComponent = ({ accentColor }) => {
  const crust = "#E8B923";
  const cheese = "#FFF3D6";
  const basil = "#3E7D32";
  return (
    <g>
      <circle cx="200" cy="165" r="70" fill={crust} stroke={shade(crust, 0.3)} strokeWidth="4" />
      <circle cx="200" cy="165" r="55" fill={accentColor} />
      {PIZZA_MOZZARELLA.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="12" fill={cheese} />
      ))}
      <path d="M160 155 Q152 148 158 140 Q166 148 160 155 Z" fill={basil} />
      <path d="M230 175 Q222 168 228 160 Q236 168 230 175 Z" fill={basil} />
    </g>
  );
};

const TORRE_BANDS = [110, 128, 146, 164, 182];
const TORRE_COLUMN_INDEX = [0, 1, 2, 3];

const TorrePisa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g transform="rotate(9 200 220)">
      <rect x="175" y="90" width="50" height="140" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {TORRE_BANDS.map((y) => (
        <g key={y}>
          <rect x="175" y={y} width="50" height="8" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
          {TORRE_COLUMN_INDEX.map((i) => (
            <circle key={i} cx={183 + i * 13} cy={y + 4} r="2" fill={dark} opacity="0.5" />
          ))}
        </g>
      ))}
      <rect x="168" y="222" width="64" height="12" fill={dark} />
    </g>
  );
};

const Vaticano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 220 L150 175 Q150 130 200 122 Q250 130 250 175 L250 220 Z" fill={light} stroke={dark} strokeWidth="3" />
      <line x1="200" y1="122" x2="200" y2="100" stroke={dark} strokeWidth="3" />
      <line x1="192" y1="108" x2="208" y2="108" stroke={dark} strokeWidth="3" />
      {/* two crossed keys */}
      <line x1="160" y1="235" x2="200" y2="195" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <line x1="240" y1="235" x2="200" y2="195" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="235" r="8" fill="none" stroke={accentColor} strokeWidth="4" />
      <circle cx="240" cy="235" r="8" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const SASSI_HOUSES = [
  { x: 120, y: 190, w: 45, h: 40 },
  { x: 170, y: 170, w: 50, h: 60 },
  { x: 225, y: 195, w: 40, h: 35 },
  { x: 265, y: 175, w: 45, h: 55 },
];

const SassiMatera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* ravine cliff face */}
      <path d="M100 230 Q200 145 320 230 Z" fill={accentColor} opacity="0.25" />
      {SASSI_HOUSES.map((h, i) => (
        <g key={h.x}>
          <rect x={h.x} y={h.y} width={h.w} height={h.h} rx="8" fill={i % 2 === 0 ? light : accentColor} stroke={dark} strokeWidth="2" />
          <rect x={h.x + h.w / 2 - 5} y={h.y + h.h - 16} width="10" height="16" fill={dark} opacity="0.6" />
        </g>
      ))}
    </g>
  );
};

export const italyIllustrations: Record<string, IllustrationDefinition> = {
  pasta: { component: Pasta },
  espresso: { component: Espresso },
  vespa: { component: Vespa },
  coliseo: { component: Coliseo },
  "moda-milanese": { component: ModaMilanese },
  "palio-siena": { component: PalioSiena },
  "pranzo-domenica": { component: PranzoDomenica },
  "motor-valley": { component: MotorValley },
  "venecia-gondolas": { component: VeneciaGondolas },
  "dolce-vita": { component: DolceVita },
  piano: { component: Piano },
  anteojos: { component: Anteojos },
  "leonardo-da-vinci": { component: LeonardoDaVinci },
  "galileo-galilei": { component: GalileoGalilei },
  opera: { component: Opera },
  renacimiento: { component: Renacimiento },
  "pizza-napoletana": { component: PizzaNapoletana },
  "torre-pisa": { component: TorrePisa },
  vaticano: { component: Vaticano },
  "sassi-matera": { component: SassiMatera },
};
