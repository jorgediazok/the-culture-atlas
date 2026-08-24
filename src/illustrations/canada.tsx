import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const JarabeArceReserva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* maple leaf */}
      <path
        d="M150 130 L158 150 L178 142 L170 160 L188 165 L168 175 L178 195 L158 185 L150 210 L142 185 L122 195 L132 175 L112 165 L130 160 L122 142 L142 150 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="2"
      />
      {/* bottle of golden syrup */}
      <path d="M235 235 L235 165 Q235 155 245 155 L275 155 Q285 155 285 165 L285 235 Z" fill={gold} opacity="0.9" stroke={dark} strokeWidth="2.5" />
      <rect x="248" y="130" width="24" height="25" fill={dark} />
      <rect x="252" y="115" width="16" height="18" fill={shade(dark, 0.2)} />
      <rect x="240" y="195" width="40" height="18" fill="#fff" opacity="0.85" />
    </g>
  );
};

const HockeyCunaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const ice = "#DCEEF5";
  return (
    <g>
      {/* ice rink ground */}
      <rect x="95" y="215" width="225" height="30" fill={ice} />
      <line x1="205" y1="215" x2="205" y2="245" stroke={accentColor} strokeWidth="3" opacity="0.6" />
      {/* hockey stick */}
      <path d="M120 220 L255 105 Q262 99 268 106 Q274 113 267 119 L135 232 Q126 238 120 230 Z" fill={dark} />
      <path d="M120 220 L108 235 L118 240 L128 226 Z" fill={dark} />
      {/* puck */}
      <ellipse cx="255" cy="228" rx="26" ry="12" fill="#1A1A1A" />
    </g>
  );
};

const MulticulturalismoOficial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const colors = [accentColor, "#D4A017", "#7B1FA2", "#00695C", "#C1272D", "#1565C0"];
  // Hand positions precomputed offline around a circle, center (205,165) radius 65.
  const hands: [number, number][] = [
    [205, 100],
    [261, 132],
    [261, 197],
    [205, 230],
    [148, 197],
    [148, 132],
  ];
  return (
    <g>
      {hands.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="20" fill={colors[i % colors.length]} />
      ))}
      <circle cx="205" cy="165" r="34" fill="none" stroke={dark} strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const BilinguismoFrancesIngles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M105 110 Q105 90 128 90 L188 90 Q211 90 211 110 Q211 130 188 130 L160 130 L145 148 L150 130 L128 130 Q105 130 105 110 Z" fill={accentColor} />
      <text x="158" y="118" fontSize="26" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="serif">oui</text>
      <path d="M205 138 Q205 120 226 120 L280 120 Q301 120 301 138 Q301 156 280 156 L258 156 L270 172 L248 156 L226 156 Q205 156 205 138 Z" fill={dark} />
      <text x="253" y="145" fontSize="24" fontWeight="700" fill={light} textAnchor="middle" fontFamily="serif">yes</text>
    </g>
  );
};

const ArteTotemsCostaNoroeste: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const red = "#B71C1C";
  const teal = "#00695C";
  return (
    <g>
      {/* carved totem pole, stacked figures */}
      <rect x="175" y="90" width="60" height="150" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* top figure: wide eyes and beak */}
      <circle cx="192" cy="112" r="9" fill="#fff" />
      <circle cx="192" cy="112" r="4" fill={dark} />
      <circle cx="218" cy="112" r="9" fill="#fff" />
      <circle cx="218" cy="112" r="4" fill={dark} />
      <path d="M195 128 L215 128 L205 145 Z" fill={red} />
      <line x1="175" y1="150" x2="235" y2="150" stroke={dark} strokeWidth="3" />
      {/* middle figure */}
      <circle cx="192" cy="170" r="8" fill={teal} />
      <circle cx="218" cy="170" r="8" fill={teal} />
      <rect x="190" y="185" width="30" height="14" fill={red} />
      <line x1="175" y1="205" x2="235" y2="205" stroke={dark} strokeWidth="3" />
      {/* base figure */}
      <path d="M185 210 L225 210 L220 235 L190 235 Z" fill={red} />
    </g>
  );
};

const PoliciaMontadaRcmp: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* wide-brimmed campaign hat */}
      <ellipse cx="185" cy="180" rx="70" ry="16" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M155 178 Q155 140 185 132 Q215 140 215 178 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M165 158 Q185 148 205 158" fill="none" stroke={dark} strokeWidth="4" />
      {/* gold badge beside it */}
      <path d="M270 130 L295 142 L295 168 L270 190 L245 168 L245 142 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="270" cy="160" r="14" fill="#fff" opacity="0.7" />
    </g>
  );
};

const PoutinePlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gravy = "#6B4423";
  const cheese = "#F5E6C8";
  return (
    <g>
      {/* paper cone */}
      <path d="M155 130 L255 130 L215 235 L195 235 Z" fill="#fff" stroke={dark} strokeWidth="3" />
      {/* fries */}
      {[165, 178, 192, 206, 220, 234, 246].map((x, i) => (
        <rect key={x} x={x} y={140 + (i % 2) * 6} width="8" height={70 - (i % 3) * 8} fill={accentColor} transform={`rotate(${(i - 3) * 3} ${x} 210)`} />
      ))}
      {/* gravy poured over the top */}
      <path d="M160 165 Q205 150 250 165 Q245 185 205 190 Q165 185 160 165 Z" fill={gravy} opacity="0.9" />
      {/* cheese curds */}
      {[[185, 172], [205, 180], [222, 168], [195, 190]].map(([x, y]) => (
        <rect key={x} x={x} y={y} width="14" height="12" rx="2" fill={cheese} />
      ))}
    </g>
  );
};

const TerryFoxMaratonEsperanza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* running shoe */}
      <path d="M120 195 Q115 180 135 175 L195 168 Q212 168 218 182 L218 198 L120 198 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M135 175 Q145 162 165 165 L195 168" fill="none" stroke={dark} strokeWidth="3" />
      {[145, 162, 179].map((x) => (
        <line key={x} x1={x} y1="172" x2={x - 4} y2="196" stroke={light} strokeWidth="3" />
      ))}
      {/* stylized prosthetic leg beside it */}
      <rect x="245" y="110" width="16" height="70" rx="6" fill={light} stroke={dark} strokeWidth="2.5" />
      <circle cx="253" cy="185" r="10" fill={dark} />
      <path d="M245 205 L261 205 L258 225 L248 225 Z" fill={dark} />
      <line x1="253" y1="130" x2="253" y2="150" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const GrupoDeLosSiete: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const green = "#2E7D32";
  return (
    <g>
      {/* easel legs */}
      <path d="M150 240 L180 130 M260 240 L230 130 M205 240 L205 150" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* canvas */}
      <rect x="150" y="105" width="110" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {/* simple pines and mountains painted on it */}
      <polygon points="170,185 195,140 220,185" fill={light} />
      <polygon points="215,185 245,120 255,185" fill={dark} opacity="0.6" />
      <path d="M180 185 L180 155 M175 168 L185 168 M177 178 L183 178" stroke={green} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const NaismithBasquetbol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const net = "#F5F0E6";
  return (
    <g>
      {/* hoop and net */}
      <rect x="255" y="105" width="10" height="60" fill={dark} />
      <ellipse cx="230" cy="130" rx="34" ry="8" fill="none" stroke={dark} strokeWidth="5" />
      {[205, 215, 230, 245, 255].map((x) => (
        <line key={x} x1={x} y1="133" x2={x + (230 - x) * 0.3} y2="168" stroke={net} strokeWidth="2" />
      ))}
      {/* basketball */}
      <circle cx="150" cy="185" r="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 147 L150 223 M112 185 L188 185 M122 158 Q150 185 122 212 M178 158 Q150 185 178 212" stroke={dark} strokeWidth="2.5" fill="none" />
    </g>
  );
};

const UndergroundRailroadTerminal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const night = "#1A237E";
  const gold = "#FFD54F";
  const ground = shade(accentColor, 0.65);
  // 10-point star, precomputed offline (outer r=30, inner r=12), translated to center (205,120).
  const starPoints: [number, number][] = [
    [205, 90], [212.1, 110.3], [233.5, 110.7], [216.4, 123.7], [222.6, 144.3],
    [205, 132], [187.4, 144.3], [193.6, 123.7], [176.5, 110.7], [197.9, 110.3],
  ];
  return (
    <g>
      {/* night sky */}
      <rect x="95" y="85" width="225" height="165" fill={night} opacity="0.9" />
      {/* north star */}
      <polygon points={starPoints.map(([x, y]) => `${x},${y}`).join(" ")} fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      {/* winding path toward the horizon */}
      <path d="M110 248 Q160 210 150 175 Q140 140 195 128" fill="none" stroke={ground} strokeWidth="14" strokeLinecap="round" />
      {/* border fence marker */}
      <line x1="255" y1="248" x2="255" y2="180" stroke={dark} strokeWidth="6" />
      <line x1="230" y1="205" x2="280" y2="205" stroke={dark} strokeWidth="5" />
      <line x1="230" y1="225" x2="280" y2="225" stroke={dark} strokeWidth="5" />
      {/* small walking figure on the path; body line starts inside the head circle for a solid neck join */}
      <path d="M152 172 L152 210 L142 240 M152 210 L164 238 M152 186 L136 200 M152 186 L170 196" stroke={accentColor} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="152" cy="168" r="10" fill={accentColor} />
    </g>
  );
};

const FiebreOroKlondike: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const snow = "#ECEFF1";
  const water = "#4FC3F7";
  return (
    <g>
      {/* snowy mountains */}
      <polygon points="95,215 150,110 200,215" fill={shade(accentColor, 0.35)} />
      <polygon points="150,215 100,130 118,130 145,175" fill={snow} opacity="0.85" />
      <polygon points="185,215 245,95 305,215" fill={shade(accentColor, 0.5)} />
      <polygon points="245,95 225,140 265,140" fill={snow} opacity="0.85" />
      {/* stream */}
      <path d="M120 218 Q170 235 230 220 Q270 210 315 225" fill="none" stroke={water} strokeWidth="14" strokeLinecap="round" opacity="0.85" />
      {/* gold pan */}
      <ellipse cx="205" cy="222" rx="62" ry="20" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="3" />
      <ellipse cx="205" cy="216" rx="52" ry="14" fill={shade(dark, -0.1)} opacity="0.5" />
      {/* gold nuggets */}
      {[[178, 214], [200, 210], [222, 215], [190, 222], [214, 222]].map(([x, y], i) => (
        <circle key={`${x}-${i}`} cx={x} cy={y} r={i % 2 === 0 ? 7 : 5.5} fill={accentColor} stroke={shade(accentColor, 0.3)} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const FerrocarrilPacificoCanadiense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const red = "#B71C1C";
  const steam = "#ECEFF1";
  return (
    <g>
      {/* mountain backdrop */}
      <polygon points="95,235 160,120 225,235" fill={shade(accentColor, 0.3)} opacity="0.7" />
      <polygon points="180,235 250,140 320,235" fill={shade(accentColor, 0.45)} opacity="0.7" />
      {/* railway tracks receding */}
      <path d="M110 245 L300 245 M110 245 L150 210 L270 210 L300 245" fill="none" stroke={dark} strokeWidth="4" />
      {[120, 150, 180, 210, 240, 270].map((x) => (
        <line key={x} x1={x} y1="245" x2={x - (x - 200) * 0.18} y2="210" stroke={dark} strokeWidth="4" />
      ))}
      {/* locomotive boiler */}
      <rect x="140" y="150" width="110" height="55" rx="8" fill={red} stroke={dark} strokeWidth="3" />
      <circle cx="160" cy="205" r="20" fill={dark} />
      <circle cx="210" cy="205" r="20" fill={dark} />
      <circle cx="160" cy="205" r="7" fill={shade(dark, -0.2)} />
      <circle cx="210" cy="205" r="7" fill={shade(dark, -0.2)} />
      {/* cowcatcher */}
      <path d="M140 178 L110 205 L140 205 Z" fill={dark} />
      {/* smokestack + steam; extends down into the boiler rect for a solid join */}
      <rect x="150" y="120" width="16" height="45" fill={dark} />
      <ellipse cx="158" cy="110" rx="16" ry="12" fill={steam} opacity="0.85" />
      <ellipse cx="140" cy="92" rx="14" ry="10" fill={steam} opacity="0.7" />
    </g>
  );
};

const CurlingDeportePiedras: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const ice = "#E1F5FE";
  const red = "#C62828";
  return (
    <g>
      {/* ice sheet */}
      <rect x="95" y="90" width="225" height="150" fill={ice} />
      {/* house target rings */}
      <circle cx="245" cy="160" r="48" fill="none" stroke={red} strokeWidth="3" opacity="0.6" />
      <circle cx="245" cy="160" r="30" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="245" cy="160" r="12" fill={red} opacity="0.8" />
      {/* curling stone with handle */}
      <ellipse cx="150" cy="200" rx="34" ry="22" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="140" y="168" width="20" height="18" rx="4" fill={dark} />
      <path d="M136 168 Q150 156 164 168" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      {/* broom */}
      <line x1="205" y1="235" x2="255" y2="105" stroke={shade(accentColor, 0.55)} strokeWidth="6" strokeLinecap="round" />
      <rect x="238" y="95" width="34" height="20" rx="4" fill={dark} transform="rotate(-70 255 105)" />
    </g>
  );
};

const CirqueDuSoleil: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const gold = "#FFC107";
  const skin = "#E8B896";
  return (
    <g>
      {/* big top tent */}
      <polygon points="205,85 105,190 305,190" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="205,85 155,190 255,190" fill={gold} opacity="0.55" />
      <circle cx="205" cy="85" r="8" fill={gold} />
      <rect x="100" y="188" width="210" height="16" fill={dark} />
      {/* aerial hoop */}
      <circle cx="235" cy="150" r="34" fill="none" stroke={gold} strokeWidth="6" />
      {/* acrobat inside the hoop; body line starts inside the head circle for a solid neck join */}
      <path d="M235 136 L235 172 L220 195 M235 172 L252 190 M235 150 L212 140 M235 150 L258 160" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="235" cy="132" r="11" fill={skin} />
      {/* flowing ribbons */}
      <path d="M212 140 Q195 150 200 175" fill="none" stroke={gold} strokeWidth="4" strokeLinecap="round" />
      <path d="M258 160 Q278 172 270 200" fill="none" stroke={gold} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

// Reusable parka-clad figure (Inuit throat singing). The reaching arm starts
// deep inside the torso interior (so the torso's opaque fill absorbs that
// seam) and extends outward toward the other figure; the torso's own apex
// reaches up into the head circle's interior for the neck join. `reach` is
// +1 for a figure reaching rightward, -1 for reaching leftward.
function parkaFigure(x: number, y: number, dark: string, accent: string, reach: 1 | -1) {
  const armEndX = x + reach * 45;
  const armEndY = y + 2;
  return (
    <g key={x}>
      {/* reaching arm, drawn first so the torso fill covers its inner half */}
      <path d={`M${x} ${y + 32} L${armEndX} ${armEndY}`} stroke={dark} strokeWidth="9" strokeLinecap="round" />
      {/* torso/parka; apex reaches up to the head circle's center for a solid neck join */}
      <path d={`M${x - 26} ${y + 70} Q${x - 30} ${y + 10} ${x} ${y - 18} Q${x + 30} ${y + 10} ${x + 26} ${y + 70} Z`} fill={dark} />
      {/* fur-trimmed hood ring */}
      <circle cx={x} cy={y - 20} r="22" fill="none" stroke={accent} strokeWidth="7" />
      {/* face, drawn last so it sits on top of the torso apex */}
      <circle cx={x} cy={y - 20} r="15" fill="#E8B896" />
    </g>
  );
}

const CantoGargantaInuit: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* ground */}
      <rect x="95" y="225" width="225" height="18" fill={shade(accentColor, 0.55)} opacity="0.5" />
      {/* two figures reaching toward each other; their arm ends overlap near the middle, depicting arms held */}
      {parkaFigure(165, 175, dark, accentColor, 1)}
      {parkaFigure(245, 175, dark, accentColor, -1)}
    </g>
  );
};

const AnaTejasVerdes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2E7D32";
  const skin = "#F5D0A9";
  return (
    <g>
      {/* farmhouse with green roof */}
      <rect x="215" y="165" width="90" height="75" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="205,165 260,110 315,165" fill={green} stroke={shade(green, 0.4)} strokeWidth="3" />
      <rect x="248" y="195" width="24" height="45" fill={dark} />
      <rect x="285" y="185" width="16" height="16" fill={dark} opacity="0.7" />
      {/* girl figure: torso first, apex reaches up to the head's center for a solid neck join; head drawn after to absorb the seam */}
      <path d="M148 180 Q145 235 150 245 L180 245 Q185 235 182 180 Z" fill={accentColor} />
      <path d="M148 180 L120 215 M182 180 L205 210" stroke={accentColor} strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="165" cy="180" r="17" fill={skin} />
      {/* braids */}
      <path d="M150 178 Q135 185 138 205" fill="none" stroke="#C62828" strokeWidth="7" strokeLinecap="round" />
      <path d="M180 178 Q195 185 192 205" fill="none" stroke="#C62828" strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const ParqueNacionalBanff: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const snow = "#ECEFF1";
  const lake = "#26C6DA";
  return (
    <g>
      {/* rocky peaks */}
      <polygon points="95,220 155,110 210,220" fill={shade(accentColor, 0.3)} />
      <polygon points="155,110 135,155 175,155" fill={snow} opacity="0.9" />
      <polygon points="175,220 240,95 305,220" fill={shade(accentColor, 0.42)} />
      <polygon points="240,95 218,145 262,145" fill={snow} opacity="0.9" />
      {/* turquoise lake */}
      <ellipse cx="210" cy="228" rx="105" ry="20" fill={lake} />
      <ellipse cx="210" cy="222" rx="80" ry="10" fill="#fff" opacity="0.25" />
      {/* deer/elk figure at the shore */}
      <path d="M118 220 L118 195 L128 190 L128 220 Z" fill={dark} />
      <ellipse cx="128" cy="185" rx="14" ry="11" fill={dark} />
      <path d="M120 180 L112 160 M120 180 L118 158 M136 180 L144 160 M136 180 L146 158" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const TerranovaCulturaOutport: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const water = "#4FC3F7";
  const colors = [accentColor, "#C62828", "#00897B", shade(accentColor, 0.3)];
  return (
    <g>
      {/* water */}
      <rect x="95" y="205" width="225" height="40" fill={water} opacity="0.6" />
      {/* dock */}
      <rect x="105" y="195" width="200" height="16" fill={dark} />
      {[120, 150, 180, 210, 240, 270].map((x) => (
        <line key={x} x1={x} y1="211" x2={x} y2="240" stroke={dark} strokeWidth="4" />
      ))}
      {/* row of colorful fishing houses */}
      {[125, 165, 205, 245].map((x, i) => (
        <g key={x}>
          <rect x={x} y={150} width="35" height="45" fill={colors[i % colors.length]} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 5},150 ${x + 17.5},125 ${x + 40},150`} fill={shade(colors[i % colors.length], 0.3)} />
        </g>
      ))}
      {/* boat */}
      <path d="M255 220 L305 220 L292 235 L262 235 Z" fill={dark} />
      <line x1="278" y1="220" x2="278" y2="190" stroke={dark} strokeWidth="4" />
      <path d="M280 192 L300 210 L280 210 Z" fill="#fff" opacity="0.8" />
    </g>
  );
};

const ChansonQuebequense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#E8B896";
  const gold = "#D4A017";
  return (
    <g>
      {/* vintage microphone */}
      <ellipse cx="255" cy="130" rx="20" ry="26" fill={dark} />
      <rect x="248" y="150" width="14" height="12" fill={shade(dark, -0.1)} />
      <line x1="255" y1="162" x2="255" y2="235" stroke={dark} strokeWidth="6" />
      <ellipse cx="255" cy="237" rx="26" ry="8" fill={dark} />
      {/* singer torso first, then head to overlap the neck */}
      <path d="M120 245 Q116 190 145 175 Q174 190 170 245 Z" fill={accentColor} />
      <circle cx="145" cy="168" r="17" fill={skin} />
      {/* guitar body (figure-eight) held by the singer */}
      <path d="M150 205 Q135 205 135 222 Q135 240 152 240 Q169 240 169 222 Q169 202 155 202 Q148 202 150 205 Z" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="2.5" />
      <line x1="152" y1="200" x2="164" y2="150" stroke={shade(gold, 0.4)} strokeWidth="8" />
      {/* strumming arm */}
      <path d="M145 190 Q160 200 152 222" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

export const canadaIllustrations: Record<string, IllustrationDefinition> = {
  "jarabe-arce-reserva": { component: JarabeArceReserva },
  "hockey-cuna-nacional": { component: HockeyCunaNacional },
  "multiculturalismo-oficial": { component: MulticulturalismoOficial },
  "bilinguismo-frances-ingles": { component: BilinguismoFrancesIngles },
  "arte-totems-costa-noroeste": { component: ArteTotemsCostaNoroeste },
  "policia-montada-rcmp": { component: PoliciaMontadaRcmp },
  "poutine-plato-nacional": { component: PoutinePlatoNacional },
  "terry-fox-maraton-esperanza": { component: TerryFoxMaratonEsperanza },
  "grupo-de-los-siete": { component: GrupoDeLosSiete },
  "naismith-basquetbol": { component: NaismithBasquetbol },
  "underground-railroad-terminal": { component: UndergroundRailroadTerminal },
  "fiebre-oro-klondike": { component: FiebreOroKlondike },
  "ferrocarril-pacifico-canadiense": { component: FerrocarrilPacificoCanadiense },
  "curling-deporte-piedras": { component: CurlingDeportePiedras },
  "cirque-du-soleil": { component: CirqueDuSoleil },
  "canto-garganta-inuit": { component: CantoGargantaInuit },
  "ana-tejas-verdes": { component: AnaTejasVerdes },
  "parque-nacional-banff": { component: ParqueNacionalBanff },
  "terranova-cultura-outport": { component: TerranovaCulturaOutport },
  "chanson-quebequense": { component: ChansonQuebequense },
};
