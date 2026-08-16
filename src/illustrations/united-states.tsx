import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const JazzNuevaOrleans: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* saxophone */}
      <path d="M180 235 Q150 235 148 205 Q146 175 175 160 L205 145 L215 155 L188 172 Q168 182 170 205 Q172 220 190 220 Q205 220 205 205 L205 160 L218 160 L218 210 Q218 235 190 235 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <circle cx="190" cy="228" r="9" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.5" />
      {[[178, 195], [195, 178], [205, 200]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill={shade(gold, 0.25)} />
      ))}
      <path d="M215 150 L235 128" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* floating musical notes */}
      <g transform="translate(260,140)">
        <circle cx="0" cy="20" r="7" fill={accentColor} />
        <line x1="7" y1="20" x2="7" y2="-15" stroke={accentColor} strokeWidth="3" />
        <path d="M7 -15 Q18 -12 16 -2" fill="none" stroke={accentColor} strokeWidth="3" />
      </g>
      <g transform="translate(290,180) scale(0.8)">
        <circle cx="0" cy="20" r="7" fill={dark} />
        <line x1="7" y1="20" x2="7" y2="-15" stroke={dark} strokeWidth="3" />
        <path d="M7 -15 Q18 -12 16 -2" fill="none" stroke={dark} strokeWidth="3" />
      </g>
    </g>
  );
};

const HollywoodCine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* clapperboard */}
      <rect x="115" y="150" width="120" height="90" fill={dark} />
      <path d="M115 150 L235 150 L225 122 L105 122 Z" fill={accentColor} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={108 + i * 24} y="122" width="12" height="28" fill={i % 2 === 0 ? "#1A1A1A" : "#F5F0E6"} transform={`skewX(-20)`} />
      ))}
      <rect x="130" y="175" width="90" height="10" fill={light} opacity="0.6" />
      <rect x="130" y="195" width="60" height="10" fill={light} opacity="0.6" />
      {/* film reel */}
      <circle cx="280" cy="195" r="40" fill="none" stroke={dark} strokeWidth="8" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <circle key={deg} cx="280" cy="168" r="8" fill={dark} transform={`rotate(${deg} 280 195)`} />
      ))}
    </g>
  );
};

const AccionDeGracias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  const brownLeaf = "#B5651D";
  return (
    <g>
      {/* platter */}
      <ellipse cx="205" cy="215" rx="95" ry="20" fill={light} stroke={dark} strokeWidth="2" />
      {/* roasted turkey */}
      <ellipse cx="205" cy="185" rx="55" ry="42" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M160 185 Q140 175 130 195 Q145 205 165 198 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M250 185 Q270 175 280 195 Q265 205 245 198 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="150" r="14" fill={dark} />
      {/* autumn leaves beside it */}
      <path d="M290 150 Q280 135 292 122 Q304 135 294 150 Z" fill={brownLeaf} />
      <path d="M115 165 Q105 150 117 137 Q129 150 119 165 Z" fill="#E85D25" />
    </g>
  );
};

const ParquesNacionalesYellowstone: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#4FBFB0";
  return (
    <g>
      <polygon points="95,240 155,140 210,240" fill={dark} />
      <polygon points="185,240 245,120 305,240" fill={accentColor} />
      {/* pine trees */}
      {[130, 270].map((x) => (
        <g key={x}>
          <path d="M0 0 L-12 20 L12 20 Z M0 -12 L-9 6 L9 6 Z M0 -22 L-6 -6 L6 -6 Z" fill={dark} transform={`translate(${x},225)`} />
        </g>
      ))}
      {/* erupting geyser */}
      <ellipse cx="205" cy="228" rx="20" ry="8" fill={water} />
      <path d="M200 228 Q195 180 205 130 Q210 100 200 75" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity="0.85" />
      <path d="M205 228 Q210 190 220 150" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const EstatuaDeLaLibertad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* raised arm and torch */}
      <path d="M225 240 L215 150 L230 130 L245 145 L232 165 L238 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M225 130 Q215 105 230 85 Q245 105 235 130 Z" fill="#F4A300" stroke={dark} strokeWidth="2" />
      <rect x="222" y="128" width="16" height="14" fill={light} />
      {/* spiked crown */}
      <circle cx="150" cy="200" r="50" fill={light} />
      {[0, -40, -80, 40, 80].map((deg) => (
        <path key={deg} d="M150 150 L157 118 L164 150 Z" fill={light} transform={`rotate(${deg} 150 200)`} />
      ))}
    </g>
  );
};

const JeansLeviStrauss: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.3);
  return (
    <g>
      {/* denim pants */}
      <path d="M155 110 L255 110 L262 240 L232 240 L210 175 L188 240 L158 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M155 110 L255 110 L253 140 L157 140 Z" fill={light} opacity="0.5" />
      <path d="M170 120 L170 235 M240 120 L240 235" stroke={dark} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      {/* pocket stitching */}
      <path d="M165 125 L195 125 L190 150 L170 150 Z" fill="none" stroke={dark} strokeWidth="1.5" />
      {/* metal rivet */}
      <circle cx="180" cy="138" r="5" fill="#B0B8BF" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const Ruta66: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* highway sign */}
      <path d="M175 100 L175 150 L155 165 L175 180 L175 200 L235 200 L235 180 L255 165 L235 150 L235 100 Z" fill="#fff" stroke={dark} strokeWidth="4" />
      <text x="205" y="130" fontSize="18" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="sans-serif">ROUTE</text>
      <text x="205" y="175" fontSize="42" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="sans-serif">66</text>
      <rect x="199" y="200" width="12" height="35" fill={dark} />
      {/* cactus beside it */}
      <path d="M280 235 L280 165 Q280 155 290 155 Q300 155 300 165 L300 190 M280 190 Q265 190 265 175 Q265 165 275 165" fill="none" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
    </g>
  );
};

const SiliconValley: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* computer chip */}
      <rect x="165" y="130" width="80" height="80" fill={dark} />
      <rect x="180" y="145" width="50" height="50" fill={light} />
      {[145, 165, 185, 205].map((y) => (
        <g key={y}>
          <line x1="165" y1={y} x2="145" y2={y} stroke={dark} strokeWidth="4" />
          <line x1="245" y1={y} x2="265" y2={y} stroke={dark} strokeWidth="4" />
        </g>
      ))}
      {[185, 205, 225].map((x) => (
        <g key={x}>
          <line x1={x} y1="130" x2={x} y2="110" stroke={dark} strokeWidth="4" />
          <line x1={x} y1="210" x2={x} y2="230" stroke={dark} strokeWidth="4" />
        </g>
      ))}
      {/* stylized circuit trace */}
      <path d="M270 140 L295 140 L295 175 L310 175" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      <circle cx="310" cy="175" r="5" fill={accentColor} />
    </g>
  );
};

const Apollo11Luna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const night = "#1B2A4A";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={night} />
      {[[120, 100], [280, 95], [300, 130], [140, 140], [250, 155]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#fff" opacity="0.85" />
      ))}
      {/* lunar surface */}
      <path d="M95 220 Q210 200 320 220 L320 250 L95 250 Z" fill={accentColor} />
      <circle cx="150" cy="225" r="10" fill={dark} opacity="0.4" />
      <circle cx="260" cy="235" r="14" fill={dark} opacity="0.4" />
      {/* boot print */}
      <ellipse cx="210" cy="220" rx="16" ry="24" fill={dark} opacity="0.7" />
      <ellipse cx="210" cy="205" rx="12" ry="10" fill={dark} opacity="0.7" />
    </g>
  );
};

const RockAndRollMemphis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* electric guitar, double-cutaway solid body */}
      <path
        d="M115 210 Q112 246 155 249 Q198 246 195 210 Q197 190 180 182 L188 140 L157 155 L126 140 L134 182 Q117 190 115 210 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      <rect x="138" y="196" width="38" height="8" rx="2" fill={dark} />
      <rect x="138" y="213" width="38" height="8" rx="2" fill={dark} />
      <rect x="152" y="98" width="10" height="57" fill={dark} />
      <path d="M142 98 L172 98 L167 78 L147 78 Z" fill={dark} />
      {[83, 90, 97].map((y) => (
        <circle key={y} cx="139" cy={y} r="3" fill={light} />
      ))}
      {[152, 156, 160, 164].map((x) => (
        <line key={x} x1={x} y1="98" x2="157" y2="228" stroke={light} strokeWidth="1.2" opacity="0.8" />
      ))}
      {/* vintage microphone beside it */}
      <ellipse cx="270" cy="150" rx="22" ry="28" fill={dark} />
      {[140, 148, 156, 164].map((y) => (
        <line key={y} x1="252" y1={y} x2="288" y2={y} stroke={light} strokeWidth="1.5" opacity="0.6" />
      ))}
      <rect x="264" y="178" width="12" height="40" fill={dark} />
      <path d="M245 218 L295 218" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

export const unitedStatesIllustrations: Record<string, IllustrationDefinition> = {
  "jazz-nueva-orleans": { component: JazzNuevaOrleans },
  "hollywood-cine": { component: HollywoodCine },
  "accion-de-gracias": { component: AccionDeGracias },
  "parques-nacionales-yellowstone": { component: ParquesNacionalesYellowstone },
  "estatua-de-la-libertad": { component: EstatuaDeLaLibertad },
  "jeans-levi-strauss": { component: JeansLeviStrauss },
  "ruta-66": { component: Ruta66 },
  "silicon-valley": { component: SiliconValley },
  "apollo-11-luna": { component: Apollo11Luna },
  "rock-and-roll-memphis": { component: RockAndRollMemphis },
};
