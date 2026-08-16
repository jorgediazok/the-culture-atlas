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
};
