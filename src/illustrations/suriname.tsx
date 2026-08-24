import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PaisMasBoscosoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      {/* dense canopy seen from above, filling the whole canvas */}
      <circle cx="130" cy="120" r="38" fill={dark} />
      <circle cx="170" cy="95" r="34" fill={accentColor} />
      <circle cx="120" cy="175" r="36" fill={accentColor} />
      <circle cx="200" cy="140" r="40" fill={light} opacity="0.9" />
      <circle cx="255" cy="105" r="36" fill={dark} />
      <circle cx="285" cy="160" r="38" fill={accentColor} />
      <circle cx="230" cy="200" r="34" fill={dark} opacity="0.85" />
      <circle cx="165" cy="220" r="30" fill={light} opacity="0.8" />
      <circle cx="300" cy="215" r="26" fill={accentColor} opacity="0.85" />
    </g>
  );
};

const ParamariboPatrimonioColonial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2E7D32";
  return (
    <g>
      {/* white wooden colonial house */}
      <rect x="140" y="140" width="130" height="95" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <polygon points="130,140 205,95 280,140" fill={accentColor} />
      <rect x="188" y="180" width="34" height="55" fill={dark} />
      {/* green shutters flanking each window */}
      {[[150, 155], [230, 155]].map(([x, y]) => (
        <g key={x}>
          <rect x={x} y={y} width="26" height="34" fill="#EAF2E8" stroke={dark} strokeWidth="1.5" />
          <rect x={x - 10} y={y} width="9" height="34" fill={green} />
          <rect x={x + 27} y={y} width="9" height="34" fill={green} />
        </g>
      ))}
      <line x1="140" y1="180" x2="270" y2="180" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const MezquitaYSinagogaVecinas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const gold = "#D4A017";
  return (
    <g>
      {/* mosque with a dome and minaret */}
      <rect x="118" y="185" width="60" height="55" fill={accentColor} />
      <path d="M118 185 a30 26 0 0 1 60 0 Z" fill={light} />
      <circle cx="148" cy="150" r="7" fill={gold} />
      <rect x="100" y="150" width="10" height="90" fill={dark} />
      <path d="M100 150 a5 8 0 0 1 10 0 Z" fill={gold} />
      {/* synagogue beside it, with a Star of David */}
      <rect x="200" y="175" width="80" height="65" fill={dark} />
      <polygon points="192,175 240,140 288,175" fill={shade(accentColor, 0.55)} />
      <path d="M240 148 L246 158 L257 158 L248 165 L251 176 L240 169 L229 176 L232 165 L223 158 L234 158 Z" fill="none" stroke={gold} strokeWidth="2.5" />
      <rect x="228" y="195" width="24" height="45" fill={light} />
    </g>
  );
};

const CimarronesCulturaMarron: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const gold = "#D4A017";
  return (
    <g>
      {/* carved wooden drum */}
      <path d="M130 235 L145 145 L200 145 L215 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="172" cy="145" rx="27" ry="10" fill={light} stroke={dark} strokeWidth="2" />
      {[160, 175, 190].map((y) => (
        <path key={y} d={`M136 ${y} Q172 ${y + 10} 208 ${y}`} fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      ))}
      {/* colorful folded fabric beside it */}
      <path d="M235 165 L295 165 L288 235 L242 235 Z" fill={gold} />
      <path d="M235 165 L295 165 L292 185 L238 185 Z" fill={dark} opacity="0.4" />
      <path d="M240 200 L290 200 L287 215 L243 215 Z" fill={tint(gold, 0.3)} />
    </g>
  );
};

const HindustanosDeLaIndia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* plate with a stack of roti */}
      <ellipse cx="185" cy="215" rx="70" ry="18" fill={light} stroke={dark} strokeWidth="2" />
      <ellipse cx="185" cy="200" rx="52" ry="14" fill={accentColor} />
      <ellipse cx="185" cy="188" rx="48" ry="12" fill={tint(accentColor, 0.2)} />
      {/* steam */}
      <path d="M170 180 Q162 155 174 130" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <path d="M195 180 Q188 155 200 130" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      {/* small piles of spices beside the plate */}
      <ellipse cx="280" cy="220" rx="18" ry="8" fill="#C1272D" />
      <ellipse cx="270" cy="195" rx="15" ry="7" fill="#D4A017" />
    </g>
  );
};

const JavanesesDeIndonesia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      {/* screen backdrop */}
      <rect x="110" y="95" width="200" height="145" fill={light} opacity="0.6" />
      {/* wayang shadow puppet silhouette on a stick */}
      <line x1="205" y1="240" x2="205" y2="115" stroke={dark} strokeWidth="4" />
      <path d="M195 118 Q195 100 210 100 Q222 100 220 115 Q235 108 238 96" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="207" cy="140" rx="18" ry="30" fill={dark} />
      <path d="M195 165 Q170 175 160 200" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M220 165 Q248 158 258 130" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M198 168 L192 220" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M216 168 L222 220" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const SrananTongoLenguaFranca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#D4A017", "#C1272D", "#2E7D32", "#6A1B9A"];
  return (
    <g>
      {/* big speech bubble */}
      <path
        d="M105 110 Q105 90 128 90 L282 90 Q305 90 305 110 L305 165 Q305 185 282 185 L200 185 L175 210 L182 185 L128 185 Q105 185 105 165 Z"
        fill={tint(accentColor, 0.7)}
        stroke={dark}
        strokeWidth="3"
      />
      {/* mixed colorful letters */}
      {["S", "R", "A", "N", "A", "N"].map((letter, i) => (
        <text key={i} x={140 + i * 30} y="150" fontSize="34" fontWeight="700" fill={colors[i % colors.length]} textAnchor="middle" fontFamily="sans-serif">
          {letter}
        </text>
      ))}
    </g>
  );
};

const UnicoPaisNeerlandofonoDeSudamerica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const green = "#2E7D32";
  return (
    <g>
      {/* small windmill */}
      <path d="M180 240 L188 150 L200 150 L206 240 Z" fill={dark} />
      <circle cx="193" cy="150" r="8" fill={light} />
      <line x1="193" y1="150" x2="160" y2="118" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <line x1="193" y1="150" x2="226" y2="118" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <line x1="193" y1="150" x2="160" y2="182" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <line x1="193" y1="150" x2="226" y2="182" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      {/* tropical palm tree beside it */}
      <path d="M260 240 Q255 190 268 150" fill="none" stroke="#8B5A2B" strokeWidth="8" strokeLinecap="round" />
      <path d="M268 150 Q240 135 225 148" fill={green} />
      <path d="M268 150 Q296 135 311 148" fill={green} />
      <path d="M268 150 Q250 120 255 100" fill={green} />
      <path d="M268 150 Q286 120 281 100" fill={green} />
      <path d="M268 150 Q268 118 268 98" fill={green} />
    </g>
  );
};

const ReservaNaturalCentralSuriname: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const blue = "#3D8FB0";
  return (
    <g>
      {/* large tropical leaf */}
      <path d="M205 240 Q160 220 155 165 Q150 115 205 95 Q260 115 255 165 Q250 220 205 240 Z" fill={dark} opacity="0.4" />
      <line x1="205" y1="235" x2="205" y2="100" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* blue morpho butterfly */}
      <line x1="205" y1="160" x2="205" y2="190" stroke={shade(blue, 0.5)} strokeWidth="3" />
      <path d="M205 165 Q165 135 150 158 Q160 190 205 178 Z" fill={blue} />
      <path d="M205 165 Q245 135 260 158 Q250 190 205 178 Z" fill={blue} />
      <path d="M205 178 Q175 195 168 215 Q188 217 205 195 Z" fill={shade(blue, 0.15)} />
      <path d="M205 178 Q235 195 242 215 Q222 217 205 195 Z" fill={shade(blue, 0.15)} />
      <circle cx="205" cy="160" r="4" fill={shade(blue, 0.5)} />
    </g>
  );
};

const AntonDeKomIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  const gold = "#D4A017";
  return (
    <g>
      {/* open book */}
      <path d="M205 145 L120 158 L120 220 L205 210 Z" fill={accentColor} />
      <path d="M205 145 L290 158 L290 220 L205 210 Z" fill={dark} />
      <line x1="205" y1="145" x2="205" y2="210" stroke={light} strokeWidth="2" />
      {/* quill resting on the book */}
      <path d="M255 110 Q278 118 262 145 L238 190 L228 186 L250 145 Q238 122 255 110 Z" fill={dark} />
      {/* star above */}
      <path d="M160 100 L166 116 L183 116 L169 126 L175 143 L160 133 L145 143 L151 126 L137 116 L154 116 Z" fill={gold} />
    </g>
  );
};

const TortugasGalibi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  const sand = "#E8C87A";
  return (
    <g>
      {/* sand at night */}
      <rect x="90" y="80" width="230" height="170" fill={sand} opacity="0.35" />
      {/* flippers, drawn first so the shell's fill covers their roots */}
      <path d="M225 155 Q255 130 290 118 Q265 155 232 172 Z" fill={dark} />
      <path d="M225 205 Q255 232 288 246 Q262 208 230 190 Z" fill={dark} />
      <path d="M180 158 Q150 138 118 130 Q145 165 178 178 Z" fill={dark} />
      <path d="M180 202 Q150 224 116 234 Q145 195 178 182 Z" fill={dark} />
      {/* neck, drawn before the shell and head so both cover its roots */}
      <path d="M240 165 Q255 168 262 168" fill="none" stroke={dark} strokeWidth="16" strokeLinecap="round" />
      {/* shell */}
      <ellipse cx="205" cy="180" rx="60" ry="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[180, 165], [205, 155], [230, 165], [180, 195], [230, 195], [205, 205]].map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x - 10} ${y} L${x} ${y - 9} L${x + 10} ${y} L${x} ${y + 9} Z`} fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* head, painted over the neck's root */}
      <circle cx="270" cy="170" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="277" cy="167" r="2" fill={dark} />
      {/* eggs being laid in the sand nest */}
      <ellipse cx="150" cy="235" rx="30" ry="10" fill={light} opacity="0.6" />
      <circle cx="138" cy="233" r="7" fill="#F5F0E6" />
      <circle cx="155" cy="238" r="7" fill="#F5F0E6" />
      <circle cx="170" cy="232" r="7" fill="#F5F0E6" />
    </g>
  );
};

const BauxitaHistoriaEconomica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rail = "#6B6355";
  const ore = "#B5651D";
  return (
    <g>
      {/* rail track */}
      <line x1="95" y1="235" x2="320" y2="235" stroke={rail} strokeWidth="4" />
      <line x1="95" y1="245" x2="320" y2="245" stroke={rail} strokeWidth="4" />
      {[110, 140, 170, 200, 230, 260, 290].map((x) => (
        <line key={x} x1={x} y1="233" x2={x} y2="247" stroke={rail} strokeWidth="4" />
      ))}
      {/* mining cart */}
      <path d="M150 175 L270 175 L258 220 L162 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="175" cy="228" r="12" fill={dark} />
      <circle cx="245" cy="228" r="12" fill={dark} />
      {/* reddish ore heaped in the cart */}
      <path d="M158 175 Q175 150 200 160 Q225 145 245 165 Q262 155 262 175 Z" fill={ore} stroke={shade(ore, 0.3)} strokeWidth="2" />
    </g>
  );
};

export const surinameIllustrations: Record<string, IllustrationDefinition> = {
  "pais-mas-boscoso-del-mundo": { component: PaisMasBoscosoDelMundo },
  "paramaribo-patrimonio-colonial": { component: ParamariboPatrimonioColonial },
  "mezquita-y-sinagoga-vecinas": { component: MezquitaYSinagogaVecinas },
  "cimarrones-cultura-marron": { component: CimarronesCulturaMarron },
  "hindustanos-de-la-india": { component: HindustanosDeLaIndia },
  "javaneses-de-indonesia": { component: JavanesesDeIndonesia },
  "sranan-tongo-lengua-franca": { component: SrananTongoLenguaFranca },
  "unico-pais-neerlandofono-de-sudamerica": { component: UnicoPaisNeerlandofonoDeSudamerica },
  "reserva-natural-central-suriname": { component: ReservaNaturalCentralSuriname },
  "anton-de-kom-independencia": { component: AntonDeKomIndependencia },
  "tortugas-galibi": { component: TortugasGalibi },
  "bauxita-historia-economica": { component: BauxitaHistoriaEconomica },
};
