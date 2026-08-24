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

const MovimientoDerechosCiviles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const gold = "#D4A017";
  return (
    <g>
      {/* bus body */}
      <path
        d="M95 145 L265 145 Q280 145 280 160 L280 205 Q280 215 268 215 L102 215 Q90 215 90 203 L90 160 Q90 145 95 145 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      {/* wheels */}
      <circle cx="125" cy="222" r="14" fill={dark} />
      <circle cx="245" cy="222" r="14" fill={dark} />
      {/* regular windows */}
      {[105, 143, 181].map((x) => (
        <rect key={x} x={x} y="158" width="30" height="30" rx="3" fill={light} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* highlighted seat window */}
      <rect x="221" y="158" width="42" height="30" rx="3" fill={gold} stroke={dark} strokeWidth="2.5" />
      {/* protest sign */}
      <rect x="298" y="150" width="6" height="70" fill={dark} />
      <rect x="278" y="95" width="52" height="40" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <line x1="288" y1="112" x2="320" y2="112" stroke={dark} strokeWidth="3" />
      <line x1="288" y1="122" x2="312" y2="122" stroke={dark} strokeWidth="3" />
      {/* raised fist above the bus roof; wrist drawn first, fist blob after so it absorbs the seam */}
      <rect x="162" y="105" width="12" height="35" fill={dark} />
      <path d="M155 100 L132 108 L138 120 L158 112 Z" fill={dark} />
      <rect x="148" y="82" width="44" height="38" rx="14" fill={dark} />
    </g>
  );
};

const BluesDeltaMisisipi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* wooden porch floor */}
      <rect x="90" y="225" width="230" height="25" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
      {[120, 150, 180, 210, 240, 270, 300].map((x) => (
        <line key={x} x1={x} y1="225" x2={x} y2="250" stroke={shade(wood, 0.3)} strokeWidth="1.5" />
      ))}
      {/* guitar neck + headstock, drawn first so the body absorbs the heel seam */}
      <rect x="163" y="72" width="14" height="113" fill={dark} />
      <path d="M158 88 L182 88 L176 66 L164 66 Z" fill={dark} />
      {[76, 83, 90].map((y) => (
        <circle key={y} cx="188" cy={y} r="3.5" fill={light} />
      ))}
      {/* figure-8 acoustic body */}
      <ellipse cx="170" cy="172" rx="30" ry="34" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="170" cy="216" rx="44" ry="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="170" cy="200" r="15" fill={dark} />
      {[152, 164, 176, 188].map((x) => (
        <line key={x} x1={x} y1="90" x2="170" y2="220" stroke={light} strokeWidth="1" opacity="0.7" />
      ))}
      {/* harmonica */}
      <rect x="245" y="150" width="65" height="26" rx="6" fill="#B0B8BF" stroke={dark} strokeWidth="2.5" />
      {[255, 265, 275, 285, 295].map((x) => (
        <line key={x} x1={x} y1="155" x2={x} y2="171" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const HarlemRenaissance: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const night = "#2B2140";
  return (
    <g>
      {/* skyline backdrop */}
      <rect x="90" y="190" width="26" height="60" fill={night} />
      <rect x="120" y="170" width="22" height="80" fill={night} />
      <rect x="270" y="180" width="24" height="70" fill={night} />
      <rect x="296" y="200" width="24" height="50" fill={night} />
      {/* open book */}
      <path d="M118 230 Q160 212 200 230 L200 248 Q160 232 118 248 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <line x1="160" y1="219" x2="160" y2="238" stroke={dark} strokeWidth="2" />
      {/* trumpet */}
      <path
        d="M205 205 L245 190 L268 182 Q280 178 282 188 Q284 198 270 200 L248 206 L215 218 Z"
        fill={gold}
        stroke={shade(gold, 0.3)}
        strokeWidth="2.5"
      />
      {[220, 230, 240].map((x, i) => (
        <rect key={x} x={x} y={214 - i * 4.5} width="6" height="16" fill={shade(gold, 0.25)} />
      ))}
      {/* theater mask */}
      <ellipse cx="230" cy="130" rx="26" ry="32" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="220" cy="122" rx="5" ry="7" fill={dark} />
      <ellipse cx="240" cy="122" rx="5" ry="7" fill={dark} />
      <path d="M216 142 Q230 154 244 142" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const BeisbolPasatiempoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leather = "#8B5A2B";
  const red = "#B22234";
  return (
    <g>
      {/* home plate */}
      <path
        d="M165 225 L205 225 L205 240 L185 252 L165 240 Z"
        fill={accentColor}
        stroke={shade(accentColor, 0.3)}
        strokeWidth="2"
      />
      {/* bat */}
      <path
        d="M110 235 L100 245 L108 253 L245 130 Q252 123 245 116 Q238 109 231 116 L118 228 Z"
        fill="#D9B382"
        stroke={dark}
        strokeWidth="2.5"
      />
      {/* ball */}
      <circle cx="255" cy="110" r="26" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <path d="M238 96 Q248 108 238 124" fill="none" stroke={red} strokeWidth="2.5" />
      <path d="M272 96 Q262 108 272 124" fill="none" stroke={red} strokeWidth="2.5" />
      {/* leather glove */}
      <path
        d="M150 200 Q140 165 165 150 Q172 145 178 152 Q184 145 192 150 Q198 145 205 152 Q212 148 217 156 Q224 165 218 178 Q230 190 220 210 Q210 230 180 228 Q155 226 150 200 Z"
        fill={leather}
        stroke={shade(leather, 0.3)}
        strokeWidth="3"
      />
      <path d="M165 205 Q185 215 208 202" fill="none" stroke={shade(leather, 0.35)} strokeWidth="2.5" />
    </g>
  );
};

const BroadwayTeatro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const gold = "#D4A017";
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* marquee box with bulbs */}
      <rect x="120" y="100" width="150" height="55" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="3" />
      <rect x="132" y="112" width="126" height="31" fill={light} />
      {[128, 150, 172, 194, 216, 238, 260].map((x) => (
        <circle key={`t-${x}`} cx={x} cy="106" r="3.5" fill={gold} />
      ))}
      {[128, 150, 172, 194, 216, 238, 260].map((x) => (
        <circle key={`b-${x}`} cx={x} cy="149" r="3.5" fill={gold} />
      ))}
      <rect x="188" y="155" width="14" height="30" fill={dark} />
      {/* red curtain */}
      <path
        d="M225 88 L308 88 L308 232 Q288 248 268 232 Q248 248 228 232 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="2.5"
      />
      <line x1="225" y1="88" x2="308" y2="88" stroke={dark} strokeWidth="4" />
      <circle cx="216" cy="93" r="7" fill={gold} />
    </g>
  );
};

const NacionNavajo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F0E6D2";
  const red = "#A6192E";
  const turquoise = "#3E7C7C";
  const silver = "#C0C0C8";
  return (
    <g>
      {/* woven blanket */}
      <rect x="95" y="100" width="180" height="120" fill={cream} stroke={dark} strokeWidth="3" />
      <rect x="95" y="100" width="180" height="14" fill={red} />
      <rect x="95" y="206" width="180" height="14" fill={red} />
      {/* diamond band, hand-placed geometric zigzag */}
      <polygon points="105,160 130,135 155,160 130,185" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="150,160 175,135 200,160 175,185" fill={red} stroke={dark} strokeWidth="2" />
      <polygon points="195,160 220,135 245,160 220,185" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="240,160 265,135 265,185" fill={red} stroke={dark} strokeWidth="2" />
      {/* silver and turquoise necklace beside the blanket */}
      <path d="M285 130 Q310 145 285 165" fill="none" stroke={silver} strokeWidth="6" strokeLinecap="round" />
      <line x1="285" y1="165" x2="291" y2="174" stroke={silver} strokeWidth="4" />
      <circle cx="291" cy="178" r="12" fill={turquoise} stroke={shade(turquoise, 0.3)} strokeWidth="2.5" />
      <circle cx="286" cy="140" r="4" fill={silver} />
      <circle cx="296" cy="152" r="4" fill={silver} />
    </g>
  );
};

const BarbacoaTradicionesRegionales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const meatColor = "#8B3A2E";
  const smoke = "#D9D2C5";
  return (
    <g>
      {/* smoker barrel */}
      <rect x="110" y="140" width="150" height="70" rx="35" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      {/* legs, started inside the barrel's interior for a clean join */}
      <line x1="140" y1="200" x2="130" y2="240" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="230" y1="200" x2="240" y2="240" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* firebox */}
      <rect x="90" y="165" width="35" height="40" rx="8" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      {/* chimney, extended down into the barrel's interior */}
      <rect x="255" y="120" width="16" height="65" fill={dark} />
      <path d="M263 115 Q275 100 268 85" fill="none" stroke={smoke} strokeWidth="8" strokeLinecap="round" opacity="0.8" />
      <path d="M263 110 Q250 95 260 78" fill="none" stroke={smoke} strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      {/* meat on the grate */}
      <ellipse cx="185" cy="175" rx="42" ry="16" fill={meatColor} stroke={shade(meatColor, 0.3)} strokeWidth="2.5" />
      {[160, 175, 190, 205].map((x) => (
        <line key={x} x1={x} y1="168" x2={x} y2="182" stroke={shade(meatColor, 0.4)} strokeWidth="1.5" opacity="0.6" />
      ))}
      {/* basting brush */}
      <rect x="290" y="190" width="10" height="45" fill="#8B5A2B" />
      <path d="M282 190 L308 190 L305 170 L285 170 Z" fill="#D9B382" stroke={shade("#D9B382", 0.3)} strokeWidth="2" />
    </g>
  );
};

const FutbolAmericanoSuperBowl: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leather = "#8B5A2B";
  return (
    <g>
      {/* motion lines */}
      <path d="M110 190 Q140 185 165 178" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      <path d="M105 210 Q140 202 170 195" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.4" />
      {/* football, pointed oval in flight */}
      <path
        d="M140 220 Q160 160 220 130 Q245 118 265 130 Q245 155 210 175 Q170 200 140 220 Z"
        fill={leather}
        stroke={shade(leather, 0.3)}
        strokeWidth="3"
      />
      <line x1="175" y1="192" x2="215" y2="152" stroke="#fff" strokeWidth="3" />
      {[
        [182, 185],
        [192, 175],
        [202, 165],
        [212, 155],
      ].map(([x, y]) => (
        <line key={x} x1={x - 5} y1={y + 5} x2={x + 5} y2={y - 5} stroke="#fff" strokeWidth="2.5" />
      ))}
      {/* helmet */}
      <path
        d="M245 190 Q245 155 285 155 Q320 155 320 195 Q320 220 295 225 L245 225 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      <path
        d="M245 200 Q265 195 285 200 Q290 210 280 218 Q260 222 250 215 Q245 208 245 200 Z"
        fill="none"
        stroke={dark}
        strokeWidth="3"
      />
    </g>
  );
};

const LenguaDeSenasAmericana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A066";
  return (
    <g>
      {/* university building */}
      <rect x="95" y="178" width="130" height="52" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M90 178 L160 130 L230 178 Z" fill={dark} />
      {[115, 140, 165, 190].map((x) => (
        <rect key={x} x={x} y="190" width="10" height="40" fill={tint(accentColor, 0.6)} />
      ))}
      {/* hand 1: open palm, fingers drawn first so the palm absorbs the seam */}
      <g transform="translate(250,150)">
        <rect x="-16" y="-18" width="8" height="45" rx="4" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
        <rect x="-5" y="-24" width="8" height="51" rx="4" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
        <rect x="6" y="-24" width="8" height="51" rx="4" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
        <rect x="17" y="-16" width="8" height="43" rx="4" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
        <rect x="-14" y="10" width="28" height="34" rx="10" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2.5" />
      </g>
      {/* hand 2: thumb and pinky extended, drawn first so the palm absorbs the seam */}
      <g transform="translate(300,190)">
        <rect x="-6" y="-20" width="8" height="45" rx="4" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
        <rect x="10" y="-14" width="8" height="39" rx="4" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
        <path d="M-28 4 L-10 -6 L-2 4 L-14 18 Z" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
        <ellipse cx="0" cy="15" rx="16" ry="20" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2.5" />
      </g>
    </g>
  );
};

const FerrocarrilTranscontinental: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const smoke = "#D9D2C5";
  return (
    <g>
      {/* track */}
      <line x1="90" y1="235" x2="320" y2="235" stroke={dark} strokeWidth="4" />
      <line x1="90" y1="245" x2="320" y2="245" stroke={dark} strokeWidth="4" />
      {[100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300].map((x) => (
        <line key={x} x1={x} y1="232" x2={x} y2="248" stroke={shade(dark, 0.2)} strokeWidth="4" />
      ))}
      {/* golden spike at the join */}
      <path d="M198 235 L208 235 L205 205 L201 205 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.5" />
      {/* cab, drawn first so the boiler absorbs the seam */}
      <rect x="220" y="150" width="55" height="55" fill={dark} />
      {/* boiler */}
      <path
        d="M120 175 L235 175 L235 210 L120 210 Q108 210 108 192 Q108 175 120 175 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      {/* cowcatcher, overlapping well inside the boiler's body */}
      <path d="M100 200 L88 232 L125 232 L125 193 Z" fill={dark} />
      {/* smokestack, extended down into the boiler's interior */}
      <path d="M140 192 L140 150 Q140 140 150 140 Q160 140 160 150 L160 192 Z" fill={dark} />
      {/* smoke puffs */}
      <circle cx="150" cy="125" r="12" fill={smoke} opacity="0.85" />
      <circle cx="165" cy="105" r="16" fill={smoke} opacity="0.7" />
      <circle cx="185" cy="85" r="18" fill={smoke} opacity="0.55" />
      {/* wheels */}
      <circle cx="150" cy="215" r="20" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      <circle cx="205" cy="215" r="20" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      <circle cx="255" cy="215" r="16" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
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
  "movimiento-derechos-civiles": { component: MovimientoDerechosCiviles },
  "blues-delta-misisipi": { component: BluesDeltaMisisipi },
  "harlem-renaissance": { component: HarlemRenaissance },
  "beisbol-pasatiempo-nacional": { component: BeisbolPasatiempoNacional },
  "broadway-teatro": { component: BroadwayTeatro },
  "nacion-navajo": { component: NacionNavajo },
  "barbacoa-tradiciones-regionales": { component: BarbacoaTradicionesRegionales },
  "futbol-americano-super-bowl": { component: FutbolAmericanoSuperBowl },
  "lengua-de-senas-americana": { component: LenguaDeSenasAmericana },
  "ferrocarril-transcontinental": { component: FerrocarrilTranscontinental },
};
