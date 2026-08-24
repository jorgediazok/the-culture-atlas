import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PrimeraRepublicaNegraIndependiente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const red = "#C1272D";
  return (
    <g>
      {/* broken chain */}
      <g stroke={dark} strokeWidth="8" fill="none">
        <ellipse cx="130" cy="205" rx="17" ry="22" transform="rotate(15 130 205)" />
        <ellipse cx="160" cy="222" rx="17" ry="22" transform="rotate(-18 160 222)" />
      </g>
      <path d="M195 210 L188 198 M200 220 L212 213" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* waving flag */}
      <line x1="255" y1="235" x2="255" y2="100" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <rect x="255" y="105" width="55" height="35" fill={red} />
      <rect x="255" y="140" width="55" height="35" fill={dark} />
      <path d="M310 105 Q322 122 310 175 Q320 140 310 105 Z" fill={red} opacity="0.7" />
    </g>
  );
};

const DeudaDeLaIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* tilted scale */}
      <line x1="205" y1="240" x2="205" y2="130" stroke={dark} strokeWidth="7" />
      <line x1="150" y1="150" x2="270" y2="115" stroke={dark} strokeWidth="6" />
      <circle cx="205" cy="132" r="6" fill={dark} />
      <line x1="150" y1="150" x2="140" y2="195" stroke={dark} strokeWidth="2.5" />
      <line x1="160" y1="147" x2="150" y2="192" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="150" cy="200" rx="34" ry="10" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="270" y1="115" x2="260" y2="150" stroke={dark} strokeWidth="2.5" />
      <line x1="280" y1="118" x2="270" y2="153" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="270" cy="158" rx="26" ry="8" fill="none" stroke={dark} strokeWidth="3" />
      {/* coins falling onto the heavier side */}
      {[[260, 100], [275, 85], [250, 78]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="10" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      ))}
    </g>
  );
};

const CitadelleLaferriere: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <polygon points="95,240 205,120 315,240" fill={dark} opacity="0.4" />
      <path d="M150 240 L150 180 L165 165 L165 150 L180 150 L180 165 L230 165 L230 150 L245 150 L245 165 L260 180 L260 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[165, 190, 220, 245].map((x) => (
        <rect key={x} x={x} y="195" width="10" height="16" fill={light} />
      ))}
      <rect x="196" y="150" width="18" height="12" fill={dark} />
    </g>
  );
};

const VuduHaitiano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  const colors = ["#D4A017", "#C1272D", "#2E7D32", accentColor];
  return (
    <g>
      {/* lit candle */}
      <rect x="150" y="185" width="20" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M160 185 Q153 168 160 152 Q167 168 160 185 Z" fill={flame} />
      {/* colorful beads */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle key={i} cx={225 + i * 10} cy={175 + Math.abs(i - 3.5) * 6} r="7" fill={colors[i % colors.length]} />
      ))}
    </g>
  );
};

const KreyolAyisyen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#D4A017", "#C1272D", "#2E7D32", "#6A1B9A"];
  return (
    <g>
      <path d="M105 105 Q105 85 128 85 L282 85 Q305 85 305 105 L305 155 Q305 175 282 175 L200 175 L180 195 L185 175 L128 175 Q105 175 105 155 Z" fill={dark} />
      {["K", "R", "E", "Y", "O", "L"].map((letter, i) => (
        <text key={i} x={140 + i * 30} y="140" fontSize="30" fontWeight="700" fill={colors[i % colors.length]} textAnchor="middle" fontFamily="sans-serif">
          {letter}
        </text>
      ))}
    </g>
  );
};

const ArteNaifHaitiano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#C1272D", "#D4A017", "#2E7D32", "#1565C0", "#6A1B9A"];
  return (
    <g>
      {/* color palette */}
      <path d="M115 165 Q100 200 130 225 Q160 245 195 225 Q225 208 220 175 Q215 140 175 130 Q130 130 115 165 Z" fill="#F5EFE0" stroke={dark} strokeWidth="3" />
      {colors.map((c, i) => (
        <circle key={c} cx={140 + (i % 3) * 30} cy={165 + Math.floor(i / 3) * 35} r="12" fill={c} />
      ))}
      {/* paintbrush */}
      <path d="M260 235 L290 150 L300 153 L272 238 Z" fill="#B5651D" />
      <rect x="282" y="128" width="18" height="26" fill={dark} transform="rotate(18 291 141)" />
      <path d="M289 118 Q302 122 297 138 L281 132 Q283 120 289 118 Z" fill={accentColor} transform="rotate(18 291 141)" />
    </g>
  );
};

const ToussaintLouverture: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* period military bicorn hat */}
      <path d="M120 175 Q160 140 205 155 Q250 140 290 175 Q250 165 205 172 Q160 165 120 175 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 160 Q205 148 240 160" fill="none" stroke={gold} strokeWidth="3" />
      <circle cx="205" cy="158" r="6" fill={gold} />
      {/* sword */}
      <path d="M150 240 L245 145 L255 155 L160 250 Z" fill={dark} />
      <rect x="140" y="230" width="24" height="10" fill={dark} transform="rotate(45 152 235)" />
      <circle cx="145" cy="245" r="6" fill={gold} />
    </g>
  );
};

const KonpaMusicaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  return (
    <g>
      {/* accordion */}
      <rect x="165" y="115" width="34" height="50" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="211" y="118" width="10" height="44" fill={dark} />
      {[199, 208].map((x) => (
        <rect key={x} x={x} y="116" width="7" height="48" fill={x === 199 ? tint(accentColor, 0.3) : dark} />
      ))}
      <rect x="221" y="130" width="30" height="34" rx="3" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      {[136, 148, 160].map((y) => (
        <circle key={y} cx="180" cy={y} r="2.5" fill={dark} />
      ))}
      {/* musical notes */}
      <g transform="translate(280,110)">
        <circle cx="0" cy="20" r="7" fill={accentColor} />
        <line x1="7" y1="20" x2="7" y2="-15" stroke={accentColor} strokeWidth="3" />
        <path d="M7 -15 Q18 -12 16 -2" fill="none" stroke={accentColor} strokeWidth="3" />
      </g>
    </g>
  );
};

const CarnavalYRara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#C1272D", "#2E7D32", "#1565C0"];
  return (
    <g>
      {/* colorful carnival mask */}
      <path d="M150 235 L150 165 Q150 115 205 115 Q260 115 260 165 L260 235 Q205 255 150 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 165 Q185 150 200 165 Q185 178 170 165 Z" fill="#fff" />
      <path d="M210 165 Q225 150 240 165 Q225 178 210 165 Z" fill="#fff" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${180 + i * 15} 195 Q${185 + i * 15} 130 ${190 + i * 15} 108`} fill="none" stroke={colors[i % colors.length]} strokeWidth="5" strokeLinecap="round" />
      ))}
      {/* drum beside it */}
      <path d="M280 200 L320 200 L313 240 L287 240 Z" fill={dark} />
      <ellipse cx="300" cy="200" rx="20" ry="9" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const GastronomiaHaitiana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  const green = "#4A8F4E";
  return (
    <g>
      {/* plate */}
      <ellipse cx="185" cy="200" rx="70" ry="30" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      {/* golden fried meat */}
      <path d="M150 190 Q145 172 165 168 Q185 162 200 172 Q215 178 208 195 Q195 205 175 202 Q158 200 150 190 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      {/* pickled vegetables beside it */}
      <ellipse cx="270" cy="205" rx="30" ry="22" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      {[[258, 198], [272, 210], [284, 196], [265, 214]].map(([x, y], i) => (
        <path key={x} d={`M${x} ${Number(y) - 5} L${Number(x) + 8} ${y} L${x} ${Number(y) + 5}`} fill="none" stroke={i % 2 === 0 ? "#C1272D" : green} strokeWidth="3" />
      ))}
    </g>
  );
};

const JeanJacquesDessalines: IllustrationComponent = () => {
  const dark = "#1A1A1A";
  const blue = "#2E4C9C";
  const red = "#C1272D";
  const white = "#F5F0E6";
  return (
    <g>
      {/* old French tricolor, torn apart */}
      <line x1="120" y1="235" x2="120" y2="95" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <rect x="118" y="100" width="20" height="115" fill={blue} stroke={dark} strokeWidth="2" />
      <rect x="170" y="100" width="20" height="115" fill={red} stroke={dark} strokeWidth="2" />
      {/* torn white fragment falling away, mid-tear */}
      <polygon
        points="144,150 162,144 158,175 140,178"
        fill={white}
        stroke={dark}
        strokeWidth="2"
        transform="rotate(18 150 162)"
      />
      {/* new bicolor Haitian flag */}
      <line x1="270" y1="235" x2="270" y2="95" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <rect x="270" y="100" width="45" height="42" fill={blue} stroke={dark} strokeWidth="2" />
      <rect x="270" y="142" width="45" height="42" fill={red} stroke={dark} strokeWidth="2" />
      <path d="M315 100 Q327 121 315 184 Q325 142 315 100 Z" fill={blue} opacity="0.6" />
    </g>
  );
};

const PalacioSansSouci: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.55);
  const stone = shade(accentColor, 0.15);
  return (
    <g>
      {/* pediment (drawn first, base hidden under the building) */}
      <polygon points="133,153 210,85 287,153" fill={dark} />
      {/* main facade block (covers the pediment's lower 18 units) */}
      <rect x="145" y="135" width="130" height="100" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* arched windows */}
      {[172, 232].map((x) => (
        <g key={x}>
          <rect x={x} y="175" width="18" height="30" fill={light} stroke={dark} strokeWidth="2" />
          <path d={`M${x} 175 Q${x + 9} 160 ${x + 18} 175 Z`} fill={light} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {/* solid stone staircase mass */}
      <polygon points="150,235 270,235 285,260 135,260" fill={stone} stroke={dark} strokeWidth="2" />
      <line x1="140" y1="248" x2="280" y2="248" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* columns, drawn last so they visibly run from the facade down into the staircase */}
      {[160, 190, 220, 250].map((x) => (
        <rect key={x} x={x} y="150" width="12" height="103" fill={light} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const CuentosKrikKrak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flameOuter = "#D9531E";
  const flameInner = "#F4B942";
  const moon = "#F4D35E";
  const starColor = "#F4D35E";
  return (
    <g>
      {/* crossed logs */}
      <rect x="140" y="222" width="110" height="14" fill="#6B4226" stroke={dark} strokeWidth="2" transform="rotate(-8 195 229)" />
      <rect x="150" y="222" width="110" height="14" fill="#4A2E17" stroke={dark} strokeWidth="2" transform="rotate(6 205 229)" />
      {/* flames rising from the logs */}
      <path d="M195 222 Q160 195 178 155 Q195 178 195 132 Q213 178 212 155 Q232 195 195 222 Z" fill={flameOuter} />
      <path d="M195 222 Q175 198 188 168 Q195 185 195 150 Q205 185 202 168 Q217 198 195 222 Z" fill={flameInner} />
      {/* crescent moon: cutout circle (r19, offset 5) fully contained in the main circle (r26), so evenodd leaves a clean crescent with no stray blob */}
      <path
        fillRule="evenodd"
        d="M244 110 a26 26 0 1 0 52 0 a26 26 0 1 0 -52 0 Z M256 110 a19 19 0 1 0 38 0 a19 19 0 1 0 -38 0 Z"
        fill={moon}
      />
      {/* stars */}
      {[[140, 95], [230, 78], [300, 140]].map(([x, y]) => (
        <g key={x} stroke={starColor} strokeWidth="2.5" strokeLinecap="round">
          <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
          <line x1={x} y1={y - 6} x2={x} y2={y + 6} />
        </g>
      ))}
    </g>
  );
};

const ArteMetalRecuperado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = "#F5F0E6";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* flattened metal disc */}
      <circle cx="190" cy="160" r="78" fill={accentColor} stroke={dark} strokeWidth="4" />
      <circle cx="190" cy="160" r="68" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {/* cut-out tree silhouette, trunk drawn first so the foliage covers its top */}
      <rect x="183" y="155" width="14" height="55" fill={light} />
      <circle cx="190" cy="140" r="34" fill={light} />
      {/* hammer leaning beside the disc: handle first, head drawn over its top */}
      <rect x="280" y="155" width="10" height="90" fill={wood} stroke={dark} strokeWidth="2" />
      <rect x="260" y="150" width="50" height="22" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
    </g>
  );
};

const LiteraturaHaitiana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5F0E6";
  const quillDark = "#3A2E27";
  return (
    <g>
      {/* small tree sprouting from the spine: trunk drawn first, hidden under the pages */}
      <rect x="202" y="100" width="6" height="68" fill={accentColor} />
      <circle cx="205" cy="95" r="22" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* open book pages, drawn over the trunk's base */}
      <polygon points="100,230 100,150 205,150 205,235" fill={cream} stroke={dark} strokeWidth="3" />
      <polygon points="310,230 310,150 205,150 205,235" fill={shade(cream, 0.05)} stroke={dark} strokeWidth="3" />
      <line x1="205" y1="150" x2="205" y2="235" stroke={dark} strokeWidth="3" />
      {/* text lines */}
      <line x1="118" y1="185" x2="180" y2="182" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      <line x1="230" y1="182" x2="292" y2="185" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      {/* quill resting on the page */}
      <line x1="238" y1="95" x2="264" y2="195" stroke={quillDark} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M238 95 Q225 108 236 122 Q244 108 238 95 Z" fill={dark} />
      <path d="M243 100 Q232 112 241 124 Q248 112 243 100 Z" fill={dark} opacity="0.7" />
    </g>
  );
};

export const haitiIllustrations: Record<string, IllustrationDefinition> = {
  "primera-republica-negra-independiente": { component: PrimeraRepublicaNegraIndependiente },
  "deuda-de-la-independencia": { component: DeudaDeLaIndependencia },
  "citadelle-laferriere": { component: CitadelleLaferriere },
  "vudu-haitiano": { component: VuduHaitiano },
  "kreyol-ayisyen": { component: KreyolAyisyen },
  "arte-naif-haitiano": { component: ArteNaifHaitiano },
  "toussaint-louverture": { component: ToussaintLouverture },
  "konpa-musica-nacional": { component: KonpaMusicaNacional },
  "carnaval-y-rara": { component: CarnavalYRara },
  "gastronomia-haitiana": { component: GastronomiaHaitiana },
  "jean-jacques-dessalines": { component: JeanJacquesDessalines },
  "palacio-sans-souci": { component: PalacioSansSouci },
  "cuentos-krik-krak": { component: CuentosKrikKrak },
  "arte-metal-recuperado": { component: ArteMetalRecuperado },
  "literatura-haitiana": { component: LiteraturaHaitiana },
};
