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
};
