import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnicoPaisAnglohablanteSudamerica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#B5651D";
  return (
    <g>
      {/* cricket ball */}
      <circle cx="150" cy="185" r="34" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 151 Q160 168 150 185 Q140 202 150 219" fill="none" stroke="#fff" strokeWidth="2.5" strokeDasharray="3 3" />
      {/* wooden bat beside it */}
      <path d="M225 235 L260 120 Q263 108 253 105 Q243 102 240 114 L215 231 Z" fill={wood} stroke={dark} strokeWidth="2" />
      <rect x="212" y="228" width="26" height="16" rx="4" fill={dark} />
    </g>
  );
};

const CataratasKaieteur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const mist = "#E8E4DC";
  return (
    <g>
      {/* cliff */}
      <path d="M95 165 L180 165 L180 130 L95 130 Z" fill={dark} />
      {/* waterfall plunging */}
      <path d="M185 132 Q180 175 187 232 L213 232 Q218 175 210 132 Z" fill={light} />
      <path d="M192 135 Q188 175 194 228 M204 135 Q207 175 202 228" stroke="#fff" strokeWidth="2" opacity="0.5" />
      {/* mist cloud at the base */}
      <ellipse cx="200" cy="235" rx="70" ry="15" fill={mist} opacity="0.85" />
      <ellipse cx="170" cy="228" rx="30" ry="12" fill={mist} opacity="0.7" />
      <ellipse cx="240" cy="230" rx="34" ry="13" fill={mist} opacity="0.7" />
    </g>
  );
};

const MitoDeElDorado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  const goldDark = shade(gold, 0.3);
  return (
    <g>
      {/* stone pedestal */}
      <path d="M155 240 L165 195 L245 195 L255 240 Z" fill={dark} />
      <rect x="170" y="220" width="60" height="10" fill={shade(dark, 0.2)} />
      {/* shining golden crown */}
      <path d="M160 195 L172 145 L192 172 L205 138 L218 172 L238 145 L250 195 Z" fill={gold} stroke={goldDark} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="205" cy="160" r="9" fill="#C2185B" />
      <circle cx="178" cy="170" r="4" fill="#fff" />
      <circle cx="232" cy="170" r="4" fill="#fff" />
      <path d="M205 118 L209 128 L219 128 L211 134 L214 144 L205 138 L196 144 L199 134 L191 128 L201 128 Z" fill="#fff" opacity="0.9" />
    </g>
  );
};

const MosaicoIndoguyanesAfroguyanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const skinA = "#C97C4A";
  const skinB = "#5C4033";
  return (
    <g>
      {/* two hands of different colors holding the flag pole together */}
      <path d="M170 240 Q160 220 172 200 Q178 190 186 195 L186 240 Z" fill={skinA} />
      <path d="M234 240 Q244 220 232 200 Q226 190 218 195 L218 240 Z" fill={skinB} />
      <line x1="202" y1="240" x2="202" y2="100" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* shared flag */}
      <path d="M202 105 L280 118 L260 140 L280 162 L202 150 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="230" cy="132" r="8" fill={light} />
    </g>
  );
};

const SabanaRupununiBiodiversidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#E8B84B";
  return (
    <g>
      {/* golden grassland */}
      <rect x="95" y="205" width="225" height="45" fill={gold} opacity="0.6" />
      {[100, 130, 160, 190, 220, 250, 280, 310].map((x) => (
        <line key={x} x1={x} y1="205" x2={x - 4} y2="225" stroke={shade(gold, 0.3)} strokeWidth="2" opacity="0.6" />
      ))}
      {/* jaguar walking */}
      <path d="M140 195 Q135 175 155 168 Q195 160 225 175 Q240 182 235 195 L228 210 L215 208 L212 195 L165 195 L162 210 L148 208 Z" fill={accentColor} />
      <circle cx="145" cy="172" r="15" fill={accentColor} />
      <path d="M136 165 L132 155 M154 165 L158 155" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      {[[150, 178], [165, 172], [180, 176], [195, 172], [210, 178]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill={dark} />
      ))}
      <path d="M225 178 Q248 172 255 155" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const GeorgetownBajoElNivelDelMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sea = "#3D8FB0";
  const colors = [accentColor, "#D4A017", "#C1272D"];
  return (
    <g>
      {/* sea */}
      <rect x="95" y="80" width="225" height="90" fill={sea} opacity="0.55" />
      {/* sea wall */}
      <path d="M95 175 L320 175 L320 200 L95 200 Z" fill={dark} />
      <path d="M95 175 Q210 165 320 175" fill="none" stroke={shade(dark, 0.2)} strokeWidth="3" />
      {/* colorful wooden houses behind the wall */}
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <rect x={x} y="205" width="35" height="35" fill={colors[i % colors.length]} />
          <polygon points={`${x - 4},205 ${x + 17.5},188 ${x + 39},205`} fill={dark} />
        </g>
      ))}
    </g>
  );
};

const DisputaEsequiboVenezuela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* map outline */}
      <path d="M110 235 L100 150 L140 100 L200 95 L230 130 L280 120 L310 165 L295 220 L230 240 L160 245 Z" fill={light} stroke={dark} strokeWidth="3" />
      {/* Essequibo region marked with a dashed line, roughly two-thirds of the territory */}
      <path d="M110 235 L100 150 L140 100 L200 95 L215 140 L190 200 L160 245 Z" fill={accentColor} opacity="0.55" />
      <path d="M100 150 L140 100 L200 95 L215 140 L190 200 L160 245" fill="none" stroke={dark} strokeWidth="2.5" strokeDasharray="6 5" />
    </g>
  );
};

const BoomPetroleroReciente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const gold = "#D4A017";
  const sea = "#3D8FB0";
  return (
    <g>
      {/* sea */}
      <rect x="95" y="205" width="225" height="35" fill={sea} opacity="0.6" />
      {/* offshore platform */}
      <rect x="165" y="150" width="70" height="18" fill={dark} />
      <line x1="175" y1="168" x2="160" y2="230" stroke={dark} strokeWidth="6" />
      <line x1="225" y1="168" x2="240" y2="230" stroke={dark} strokeWidth="6" />
      <line x1="200" y1="168" x2="200" y2="230" stroke={dark} strokeWidth="6" />
      <rect x="192" y="120" width="8" height="32" fill={light} />
      <path d="M200 118 L214 108" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      {/* golden coins beside it */}
      <circle cx="270" cy="215" r="18" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <circle cx="290" cy="230" r="14" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <circle cx="255" cy="232" r="12" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
    </g>
  );
};

const CricketEquipoCaribeno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#B5651D";
  return (
    <g>
      {/* crossed bat and ball, emblem-style */}
      <path d="M140 235 L215 115 Q220 105 210 100 Q200 95 195 105 L130 228 Z" fill={wood} stroke={dark} strokeWidth="2" />
      <path d="M260 235 L185 115 Q180 105 190 100 Q200 95 205 105 L270 228 Z" fill={shade(wood, 0.15)} stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="165" r="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M200 137 Q212 152 200 165 Q188 178 200 193" fill="none" stroke="#fff" strokeWidth="2.5" strokeDasharray="3 3" />
    </g>
  );
};

const CaricomIdentidadCaribena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const flagColors = ["#C1272D", "#D4A017", "#2E7D32", accentColor];
  return (
    <g>
      {/* office building */}
      <rect x="150" y="130" width="110" height="105" fill={light} stroke={dark} strokeWidth="2" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <rect key={`${row}-${col}`} x={162 + col * 32} y={145 + row * 22} width="20" height="14" fill={dark} opacity="0.5" />
        ))
      )}
      {/* flags of different countries along the roof */}
      {flagColors.map((c, i) => (
        <g key={c}>
          <line x1={170 + i * 27} y1="130" x2={170 + i * 27} y2="100" stroke={dark} strokeWidth="3" />
          <polygon points={`${170 + i * 27},100 ${196 + i * 27},107 ${170 + i * 27},116`} fill={c} />
        </g>
      ))}
    </g>
  );
};

export const guyanaIllustrations: Record<string, IllustrationDefinition> = {
  "unico-pais-anglohablante-sudamerica": { component: UnicoPaisAnglohablanteSudamerica },
  "cataratas-kaieteur": { component: CataratasKaieteur },
  "mito-de-el-dorado": { component: MitoDeElDorado },
  "mosaico-indoguyanes-afroguyanes": { component: MosaicoIndoguyanesAfroguyanes },
  "sabana-rupununi-biodiversidad": { component: SabanaRupununiBiodiversidad },
  "georgetown-bajo-el-nivel-del-mar": { component: GeorgetownBajoElNivelDelMar },
  "disputa-esequibo-venezuela": { component: DisputaEsequiboVenezuela },
  "boom-petrolero-reciente": { component: BoomPetroleroReciente },
  "cricket-equipo-caribeno": { component: CricketEquipoCaribeno },
  "caricom-identidad-caribena": { component: CaricomIdentidadCaribena },
};
