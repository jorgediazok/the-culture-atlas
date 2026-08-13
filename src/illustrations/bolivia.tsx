import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SalarDeUyuni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  const sky = tint(accentColor, 0.85);
  return (
    <g>
      {/* reflected sky above the horizon, ground below — the mirror effect */}
      <rect x="100" y="98" width="200" height="72" fill={sky} opacity="0.6" />
      <rect x="100" y="170" width="200" height="72" fill={light} />
      <line x1="100" y1="170" x2="300" y2="170" stroke={dark} strokeWidth="2" />
      {/* tessellated salt-crust cracks */}
      {[[130, 190], [160, 205], [190, 192], [220, 208], [250, 194]].map(([x, y]) => (
        <path
          key={x}
          d={`M${x - 14} ${y} L${x} ${y - 8} L${x + 14} ${y} L${x} ${y + 8} Z`}
          fill="none"
          stroke={dark}
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
      {/* giant cardón cactus on Isla Incahuasi, mirrored below the horizon */}
      <g>
        <rect x="193" y="118" width="14" height="52" rx="7" fill={accentColor} />
        <rect x="176" y="140" width="12" height="30" rx="6" fill={accentColor} />
        <rect x="212" y="132" width="12" height="38" rx="6" fill={accentColor} />
        <path d="M193 118 L200 118 L200 170 L193 170 Z" fill={dark} opacity="0.25" />
      </g>
      <g opacity="0.3" transform="translate(0,340) scale(1,-1)">
        <rect x="193" y="118" width="14" height="52" rx="7" fill={accentColor} />
        <rect x="176" y="140" width="12" height="30" rx="6" fill={accentColor} />
        <rect x="212" y="132" width="12" height="38" rx="6" fill={accentColor} />
      </g>
    </g>
  );
};

const LagoTiticaca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const mountain = shade(accentColor, 0.2);
  return (
    <g>
      {/* Andean peaks behind the lake */}
      <path d="M100 165 L145 105 L180 150 L215 95 L260 150 L300 165 Z" fill={mountain} opacity="0.5" />
      <path d="M155 150 L180 150 L167 130 Z" fill="#fff" opacity="0.6" />
      {/* water */}
      <rect x="100" y="165" width="200" height="55" fill={light} />
      <path d="M100 178 q50 -8 100 0 t100 0" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      {/* totora reed boat with curled bow and stern */}
      <path
        d="M150 195 Q150 178 170 176 Q160 186 168 195 L232 195 Q240 186 230 176 Q250 178 250 195 Z"
        fill={accentColor}
      />
      <path d="M170 195 L230 195 L226 205 L174 205 Z" fill={dark} />
      {[178, 190, 202, 214, 222].map((x) => (
        <line key={x} x1={x} y1="195" x2={x} y2="202" stroke={light} strokeWidth="1.5" opacity="0.7" />
      ))}
    </g>
  );
};

const TelefericoLaPaz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const hillside = shade(accentColor, 0.15);
  return (
    <g>
      {/* the bowl-shaped valley city sits on a steep hillside */}
      <path d="M100 220 L100 165 Q200 120 300 175 L300 220 Z" fill={hillside} opacity="0.55" />
      {[[112, 195, 14, 22], [132, 185, 12, 32], [152, 200, 16, 18], [200, 178, 14, 30], [225, 190, 12, 22], [248, 182, 15, 28], [270, 198, 12, 18]].map(
        ([x, y, w, h]) => (
          <rect key={x} x={x} y={y} width={w} height={h} fill={light} opacity="0.85" />
        )
      )}
      {/* the cable line and three gondolas climbing the hill */}
      <line x1="115" y1="130" x2="285" y2="185" stroke={dark} strokeWidth="2.5" />
      {[[150, 141], [200, 156], [250, 172]].map(([x, y]) => (
        <g key={x}>
          <line x1={x} y1={y} x2={x} y2={y + 8} stroke={dark} strokeWidth="1.5" />
          <rect x={x - 11} y={y + 8} width="22" height="16" rx="6" fill={accentColor} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <rect x="108" y="118" width="10" height="14" fill={dark} />
    </g>
  );
};

const Cholitas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* bombín hat */}
      <ellipse cx="200" cy="120" rx="26" ry="6" fill={dark} />
      <path d="M180 120 a20 16 0 1 1 40 0 Z" fill={dark} />
      <rect x="192" y="106" width="16" height="6" rx="2" fill={light} />
      {/* face and braids */}
      <circle cx="200" cy="138" r="15" fill={skin} />
      <path d="M186 140 q-10 30 -4 55" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <path d="M214 140 q10 30 4 55" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      {/* shawl over the shoulders */}
      <path d="M160 165 Q200 148 240 165 L250 195 Q200 178 150 195 Z" fill={light} stroke={dark} strokeWidth="1.5" />
      {/* wide pollera skirt */}
      <path d="M155 195 Q200 182 245 195 L262 246 Q200 262 138 246 Z" fill={accentColor} />
      <path d="M148 222 Q200 236 252 222" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      <path d="M143 240 Q200 254 257 240" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.5" />
    </g>
  );
};

const Tiwanaku: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      {/* Gate of the Sun: a monolithic trapezoid doorway carved from a single stone */}
      <path d="M140 235 L150 130 Q200 110 250 130 L260 235 Z" fill={accentColor} />
      <path d="M170 235 L177 150 Q200 140 223 150 L230 235 Z" fill={dark} />
      {/* carved relief frieze along the lintel */}
      {[152, 168, 184, 200, 216, 232, 248].map((x, i) => (
        <rect key={x} x={x - 5} y={i % 2 === 0 ? 132 : 128} width="10" height="14" fill={light} opacity="0.85" />
      ))}
      <circle cx="200" cy="122" r="9" fill={light} />
      {/* fallen stone blocks at the base */}
      <rect x="118" y="222" width="24" height="16" fill={dark} opacity="0.6" />
      <rect x="258" y="220" width="26" height="18" fill={dark} opacity="0.6" />
    </g>
  );
};

const CarnavalDeOruro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  const fangColor = "#fff";
  return (
    <g>
      {/* elaborate diablada headdress with plumes */}
      <path d="M155 118 Q200 82 245 118 L238 138 Q200 118 162 138 Z" fill={light} />
      {[168, 186, 200, 214, 232].map((x, i) => (
        <path key={x} d={`M${x} 128 Q${x - 6} 98 ${x} 78 Q${x + 6} 98 ${x} 128 Z`} fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      {/* devil face */}
      <ellipse cx="200" cy="170" rx="46" ry="42" fill={accentColor} />
      {/* curled horns */}
      <path d="M162 148 Q140 130 148 105 Q168 118 168 145" fill={dark} />
      <path d="M238 148 Q260 130 252 105 Q232 118 232 145" fill={dark} />
      {/* bulging eyes */}
      <circle cx="182" cy="164" r="10" fill="#fff" />
      <circle cx="218" cy="164" r="10" fill="#fff" />
      <circle cx="182" cy="164" r="4" fill={dark} />
      <circle cx="218" cy="164" r="4" fill={dark} />
      {/* fangs and mustache curls */}
      <path d="M180 196 Q200 210 220 196 L214 214 L200 202 L186 214 Z" fill={fangColor} />
      <path d="M168 188 Q158 196 164 206 M232 188 Q242 196 236 206" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const HojaDeCoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const leaf = (x: number, y: number, rot: number, fill: string) => (
    <g key={`${x}-${y}`} transform={`rotate(${rot} ${x} ${y})`}>
      <path
        d={`M${x} ${y} C${x - 16} ${y - 6} ${x - 18} ${y - 30} ${x} ${y - 46} C${x + 18} ${y - 30} ${x + 16} ${y - 6} ${x} ${y} Z`}
        fill={fill}
        stroke={dark}
        strokeWidth="1"
      />
      <line x1={x} y1={y - 4} x2={x} y2={y - 42} stroke={dark} strokeWidth="1.2" opacity="0.5" />
    </g>
  );
  return (
    <g>
      <path d="M120 220 Q200 200 280 220" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      {leaf(150, 218, -18, light)}
      {leaf(200, 214, 0, accentColor)}
      {leaf(250, 218, 18, light)}
      {leaf(175, 224, -8, accentColor)}
      {leaf(225, 224, 8, light)}
    </g>
  );
};

const PotosiCerroRico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const vein = tint(accentColor, 0.8);
  return (
    <g>
      {/* the cone-shaped mountain, famous for its reddish mineral strata */}
      <path d="M130 232 L200 100 L270 232 Z" fill={accentColor} />
      {[[145, 210, 255, 210], [155, 190, 245, 190], [168, 168, 232, 168], [182, 145, 218, 145]].map(
        ([x1, y1, x2, y2]) => (
          <line key={x1} x1={x1} y1={y1} x2={x2} y2={y2} stroke={dark} strokeWidth="3" opacity="0.4" />
        )
      )}
      <path d="M175 232 L200 155 L225 232 Z" fill={vein} opacity="0.5" />
      {/* mine tunnel entrance at the base */}
      <path d="M186 232 L186 214 Q200 202 214 214 L214 232 Z" fill={dark} />
      {/* the colonial mint building at the foot of the mountain */}
      <rect x="110" y="212" width="46" height="20" fill={light} />
      <rect x="118" y="200" width="8" height="12" fill={light} />
      <rect x="136" y="200" width="8" height="12" fill={light} />
    </g>
  );
};

const IdiomasOficiales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const glyph = shade(accentColor, 0.15);
  return (
    <g>
      <path d="M118 130 h72 v46 h-24 l-14 18 v-18 h-34 Z" fill={accentColor} />
      <text x="152" y="158" fontSize="20" fill="#fff" textAnchor="middle" fontFamily="serif">
        Ñ
      </text>
      <path d="M210 108 h68 v40 h-14 l-12 16 v-16 h-42 Z" fill={light} />
      <text x="242" y="134" fontSize="17" fill={glyph} textAnchor="middle" fontFamily="serif">
        Aymar
      </text>
      <path d="M160 190 h70 v38 h-16 l-12 14 v-14 h-42 Z" fill={dark} />
      <text x="193" y="214" fontSize="16" fill="#fff" textAnchor="middle" fontFamily="serif">
        Qhichwa
      </text>
    </g>
  );
};

const Charango: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* neck and headstock */}
      <rect x="192" y="88" width="16" height="66" fill={dark} />
      <rect x="182" y="80" width="36" height="16" rx="4" fill={dark} />
      {[188, 198, 208].map((x) => (
        <circle key={x} cx={x} cy="88" r="3" fill={light} />
      ))}
      {/* armadillo-shell body, banded like the animal's carapace */}
      <path d="M200 150 C160 150 148 190 165 225 C178 246 222 246 235 225 C252 190 240 150 200 150 Z" fill={accentColor} />
      {[164, 178, 192, 206, 220].map((y) => (
        <path
          key={y}
          d={`M${160 + (y - 150) * 0.15} ${y} Q200 ${y + 6} ${240 - (y - 150) * 0.15} ${y}`}
          fill="none"
          stroke={dark}
          strokeWidth="1.5"
          opacity="0.5"
        />
      ))}
      <circle cx="200" cy="196" r="14" fill={dark} />
      {/* strings */}
      {[186, 193, 200, 207, 214].map((x) => (
        <line key={x} x1={x} y1="96" x2={x} y2="238" stroke={light} strokeWidth="1.2" opacity="0.8" />
      ))}
    </g>
  );
};

export const boliviaIllustrations: Record<string, IllustrationDefinition> = {
  "salar-de-uyuni": { component: SalarDeUyuni },
  "lago-titicaca": { component: LagoTiticaca },
  "teleferico-la-paz": { component: TelefericoLaPaz },
  cholitas: { component: Cholitas },
  tiwanaku: { component: Tiwanaku },
  "carnaval-de-oruro": { component: CarnavalDeOruro },
  "hoja-de-coca": { component: HojaDeCoca },
  "potosi-cerro-rico": { component: PotosiCerroRico },
  "idiomas-oficiales": { component: IdiomasOficiales },
  charango: { component: Charango },
};
