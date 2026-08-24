import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CunaDelSteelpan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#C1272D", "#1565C0", "#2E7D32", "#6A1B9A"];
  return (
    <g>
      {/* metal drum body */}
      <path d="M130 240 L120 150 Q120 130 145 128 L265 128 Q290 130 290 150 L280 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* concave top with colorful dents/notes */}
      <ellipse cx="205" cy="128" rx="85" ry="18" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      {[[170, 122, colors[0]], [205, 116, colors[1]], [240, 122, colors[2]], [205, 132, colors[3]]].map(([x, y, c], i) => (
        <ellipse key={i} cx={x as number} cy={y as number} rx="16" ry="8" fill={c as string} opacity="0.85" />
      ))}
    </g>
  );
};

const CarnavalDeTrinidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const colors = [accentColor, "#F4C430", "#C1272D", "#1565C0"];
  return (
    <g>
      {[-70, -35, 0, 35, 70].map((deg, i) => (
        <path key={deg} d="M205 175 Q195 130 205 75 Q215 130 205 175 Z" fill={colors[i % colors.length]} transform={`rotate(${deg} 205 175)`} />
      ))}
      <circle cx="205" cy="180" r="26" fill={dark} />
    </g>
  );
};

const DosIslasUnaNacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.5" />
      <path d="M100 150 Q140 110 195 130 Q230 145 210 185 Q170 210 125 195 Q95 180 100 150 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M280 190 Q305 175 312 195 Q318 215 298 222 Q278 225 272 208 Q270 195 280 190 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CalypsoYSoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* vintage microphone */}
      <ellipse cx="200" cy="160" rx="24" ry="30" fill={dark} />
      {[145, 154, 163, 172].map((y) => (
        <line key={y} x1="180" y1={y} x2="220" y2={y} stroke={light} strokeWidth="1.5" opacity="0.6" />
      ))}
      <rect x="193" y="190" width="14" height="42" fill={dark} />
      <path d="M172 232 L228 232" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* musical notes */}
      <g transform="translate(255,120)">
        <circle cx="0" cy="20" r="7" fill={accentColor} />
        <line x1="7" y1="20" x2="7" y2="-15" stroke={accentColor} strokeWidth="3" />
        <path d="M7 -15 Q18 -12 16 -2" fill="none" stroke={accentColor} strokeWidth="3" />
      </g>
      <g transform="translate(285,155) scale(0.8)">
        <circle cx="0" cy="20" r="7" fill={dark} />
        <line x1="7" y1="20" x2="7" y2="-15" stroke={dark} strokeWidth="3" />
        <path d="M7 -15 Q18 -12 16 -2" fill="none" stroke={dark} strokeWidth="3" />
      </g>
    </g>
  );
};

const MosaicoIndoYAfrotrinitense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skinA = "#C97C4A";
  const skinB = "#5C4033";
  return (
    <g>
      <path d="M130 200 Q150 175 175 190 Q195 200 195 220 L195 235 L130 235 Z" fill={skinA} stroke={dark} strokeWidth="2" />
      <path d="M280 200 Q260 175 235 190 Q215 200 215 220 L215 235 L280 235 Z" fill={skinB} stroke={dark} strokeWidth="2" />
      <path d="M195 220 Q205 210 215 220" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LagoDeBrea: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const shine = "#5A5652";
  return (
    <g>
      <ellipse cx="205" cy="180" rx="110" ry="55" fill={dark} />
      <path d="M115 165 Q160 150 205 165 Q250 180 295 160" fill="none" stroke={shine} strokeWidth="4" opacity="0.6" />
      <path d="M125 195 Q170 210 215 195 Q260 180 285 200" fill="none" stroke={shine} strokeWidth="4" opacity="0.5" />
      <ellipse cx="170" cy="160" rx="18" ry="7" fill={shine} opacity="0.3" />
    </g>
  );
};

const CunaDelLimbo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      <line x1="130" y1="165" x2="280" y2="165" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <line x1="130" y1="165" x2="130" y2="235" stroke={dark} strokeWidth="6" />
      <line x1="280" y1="165" x2="280" y2="235" stroke={dark} strokeWidth="6" />
      <path d="M130 165 Q122 150 130 132 Q138 150 130 165 Z" fill={flame} />
      <path d="M280 165 Q272 150 280 132 Q288 150 280 165 Z" fill={flame} />
    </g>
  );
};

const RiquezaPetroleraCaribena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="205" width="225" height="35" fill={water} opacity="0.6" />
      <rect x="165" y="150" width="70" height="18" fill={dark} />
      <line x1="175" y1="168" x2="160" y2="230" stroke={dark} strokeWidth="6" />
      <line x1="225" y1="168" x2="240" y2="230" stroke={dark} strokeWidth="6" />
      <line x1="200" y1="168" x2="200" y2="230" stroke={dark} strokeWidth="6" />
      <rect x="192" y="120" width="8" height="32" fill={accentColor} />
      <path d="M200 118 L214 108" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const DiwaliYHosay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      {[130, 175, 220, 265].map((x) => (
        <g key={x}>
          <path d={`M${x - 22} 220 Q${x} 200 ${x + 22} 220 L${x + 18} 232 L${x - 18} 232 Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
          <path d={`M${x} 200 Q${x - 6} 185 ${x} 170 Q${x + 6} 185 ${x} 200 Z`} fill={flame} />
        </g>
      ))}
    </g>
  );
};

const IbisEscarlataCaroni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2E7D32";
  return (
    <g>
      {/* mangrove branch */}
      <path d="M95 235 Q210 220 320 235" stroke="#5C4033" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M150 235 L150 210 M250 235 L250 205" stroke="#5C4033" strokeWidth="7" fill="none" />
      <circle cx="150" cy="200" r="20" fill={green} />
      <circle cx="250" cy="195" r="24" fill={green} />
      {/* scarlet ibis perched */}
      <ellipse cx="205" cy="180" rx="34" ry="24" fill={accentColor} />
      <circle cx="245" cy="165" r="14" fill={accentColor} />
      <path d="M259 165 L278 160 L262 172 Z" fill={dark} />
      <circle cx="250" cy="160" r="2" fill="#1A1A1A" />
      <path d="M185 200 L178 232 M195 202 L190 234" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const DoublesYRoti: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bread = tint(accentColor, 0.15);
  const chickpea = "#C68E17";
  const sauce = "#B23A1C";
  return (
    <g>
      {/* bottom fried bread layer */}
      <path d="M110 195 Q205 245 300 195 Q300 175 205 170 Q110 175 110 195 Z" fill={bread} stroke={dark} strokeWidth="3" />
      {/* top fried bread layer, folded over */}
      <path d="M115 170 Q205 115 295 170 Q295 195 205 200 Q115 195 115 170 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* spiced chickpeas peeking between the layers */}
      {[[160, 175], [185, 180], [210, 172], [235, 180], [260, 175]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="8" fill={chickpea} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* tamarind sauce drizzle */}
      <path d="M130 150 Q160 140 190 152 Q220 164 250 150 Q270 142 285 152" fill="none" stroke={sauce} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const TortugasBaulaMatura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const flipperColor = shade(accentColor, 0.15);
  const sand = "#D9C27E";
  const water = "#3D8FB0";
  return (
    <g>
      {/* ocean horizon behind */}
      <path d="M90 100 Q205 85 320 100" fill="none" stroke={water} strokeWidth="6" opacity="0.5" />
      {/* sand */}
      <rect x="90" y="225" width="230" height="25" fill={sand} opacity="0.7" />
      {/* front flipper — drawn first so the shell painted after seals the joint (verified overlap: ~20 units past the shell's true ellipse boundary) */}
      <path d="M135 180 Q95 165 55 178 Q90 198 135 196 Z" fill={flipperColor} stroke={dark} strokeWidth="2" />
      {/* rear flippers — same 20-unit overlap check against the ellipse boundary */}
      <path d="M268 186 Q300 196 322 206 Q304 216 272 200 Z" fill={flipperColor} stroke={dark} strokeWidth="2" />
      <path d="M268 144 Q300 130 322 121 Q304 111 272 128 Z" fill={flipperColor} stroke={dark} strokeWidth="2" />
      {/* head — right edge reaches 20 units inside the shell's left boundary (x=110) */}
      <circle cx="102" cy="165" r="28" fill={flipperColor} stroke={dark} strokeWidth="2" />
      <circle cx="88" cy="160" r="3.5" fill="#1A1A1A" />
      {/* shell / carapace, drawn last to cleanly seal every joint above */}
      <ellipse cx="205" cy="165" rx="95" ry="55" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* carapace ridge lines */}
      <path d="M125 150 Q205 130 285 150" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      <path d="M125 180 Q205 200 285 180" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const ArrecifeBuccoo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = tint(accentColor, 0.55);
  const fishColors = ["#FF7043", "#FFCA28", "#EC407A"];
  const coral = "#F06292";
  const coral2 = "#8E24AA";
  return (
    <g>
      {/* water tint */}
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.35" />
      {/* coral formations at the base */}
      <path d="M110 250 Q100 210 125 195 Q135 215 130 235 Q150 215 160 195 Q170 220 155 250 Z" fill={coral} stroke={dark} strokeWidth="2" />
      <path d="M240 250 Q235 220 255 205 Q265 225 260 245 Q280 225 295 210 Q300 235 280 250 Z" fill={coral2} stroke={dark} strokeWidth="2" />
      {/* fish 1 — tail drawn first, body ellipse over it (20-unit overlap past the boundary at x=122) */}
      <path d="M142 140 L108 123 L108 157 Z" fill={fishColors[0]} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="150" cy="140" rx="28" ry="16" fill={fishColors[0]} stroke={dark} strokeWidth="2" />
      <circle cx="168" cy="136" r="2.5" fill="#1A1A1A" />
      {/* fish 2, facing left — tail overlap past the boundary at x=264 */}
      <path d="M244 105 L282 90 L282 120 Z" fill={fishColors[1]} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="240" cy="105" rx="24" ry="14" fill={fishColors[1]} stroke={dark} strokeWidth="2" />
      <circle cx="224" cy="102" r="2.2" fill="#1A1A1A" />
      {/* fish 3 — tail overlap past the boundary at x=199 */}
      <path d="M219 178 L182 163 L182 193 Z" fill={fishColors[2]} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="225" cy="178" rx="26" ry="15" fill={fishColors[2]} stroke={dark} strokeWidth="2" />
      <circle cx="246" cy="174" r="2.4" fill="#1A1A1A" />
    </g>
  );
};

const CalindaTradicionStickfighting: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8D5A2B";
  const stick = "#6B4423";
  const robeB = shade(accentColor, 0.2);
  return (
    <g>
      {/* fighting ring */}
      <ellipse cx="205" cy="245" rx="115" ry="14" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="6 5" opacity="0.5" />
      {/* figure A: head drawn first, torso second (covers the 20-unit overlap at the shoulder line y=190), stick/arm drawn last on top */}
      <circle cx="160" cy="192" r="18" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M150 190 Q140 220 130 250 L190 250 Q180 220 170 190 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M165 195 L225 95" stroke={stick} strokeWidth="7" strokeLinecap="round" />
      {/* figure B, mirrored */}
      <circle cx="240" cy="192" r="18" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M250 190 Q260 220 270 250 L210 250 Q220 220 230 190 Z" fill={robeB} stroke={dark} strokeWidth="3" />
      <path d="M235 195 L175 95" stroke={stick} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const ChutneyElOtroSonido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8D5A2B";
  const keys = "#F5F0E6";
  const laceX = [150, 175, 200, 225, 250];
  const keyIndexes = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <g>
      {/* dholak drum body */}
      <path d="M120 195 Q205 178 290 195 L290 220 Q205 237 120 220 Z" fill={wood} stroke={dark} strokeWidth="3" />
      <ellipse cx="120" cy="207" rx="13" ry="24" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="290" cy="207" rx="13" ry="24" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      {/* lacing pattern */}
      {laceX.map((x, i) => (
        <path key={i} d={`M${x} 195 L${x + 12} 207 L${x} 220`} fill="none" stroke={dark} strokeWidth="2" opacity="0.7" />
      ))}
      {/* harmonium box */}
      <rect x="150" y="110" width="100" height="55" rx="4" fill={dark} stroke={shade(accentColor, 0.5)} strokeWidth="2" />
      {keyIndexes.map((i) => (
        <rect key={i} x={158 + i * 11} y="118" width="9" height="30" fill={keys} stroke={dark} strokeWidth="1" />
      ))}
      {/* musical note */}
      <g transform="translate(275,100)">
        <circle cx="0" cy="20" r="6" fill={accentColor} />
        <line x1="6" y1="20" x2="6" y2="-8" stroke={accentColor} strokeWidth="3" />
        <path d="M6 -8 Q16 -6 14 4" fill="none" stroke={accentColor} strokeWidth="3" />
      </g>
    </g>
  );
};

export const trinidadAndTobagoIllustrations: Record<string, IllustrationDefinition> = {
  "cuna-del-steelpan": { component: CunaDelSteelpan },
  "carnaval-de-trinidad": { component: CarnavalDeTrinidad },
  "dos-islas-una-nacion": { component: DosIslasUnaNacion },
  "calypso-y-soca": { component: CalypsoYSoca },
  "mosaico-indo-y-afrotrinitense": { component: MosaicoIndoYAfrotrinitense },
  "lago-de-brea": { component: LagoDeBrea },
  "cuna-del-limbo": { component: CunaDelLimbo },
  "riqueza-petrolera-caribena": { component: RiquezaPetroleraCaribena },
  "diwali-y-hosay": { component: DiwaliYHosay },
  "ibis-escarlata-caroni": { component: IbisEscarlataCaroni },
  "doubles-y-roti": { component: DoublesYRoti },
  "tortugas-baula-matura": { component: TortugasBaulaMatura },
  "arrecife-buccoo": { component: ArrecifeBuccoo },
  "calinda-tradicion-stickfighting": { component: CalindaTradicionStickfighting },
  "chutney-el-otro-sonido": { component: ChutneyElOtroSonido },
};
