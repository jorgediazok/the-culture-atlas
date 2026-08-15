import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

// Isometric cube vertices, precomputed offline (apex 200,140 / edge 55 / 30-degree faces).
const CUBE_TOP = "200,140 247.6,167.5 200,195 152.4,167.5";
const CUBE_LEFT = "152.4,167.5 200,195 200,250 152.4,222.5";
const CUBE_RIGHT = "200,195 247.6,167.5 247.6,222.5 200,250";

const ElCuboQueInventoUnProfesorDeArquitectura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points={CUBE_TOP} fill={light} stroke={dark} strokeWidth="2" />
      <polygon points={CUBE_LEFT} fill={dark} stroke={dark} strokeWidth="2" />
      <polygon points={CUBE_RIGHT} fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* grid lines suggesting the classic 3x3 sticker faces */}
      <line x1="168.3" y1="176.7" x2="168.3" y2="231.7" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="184.1" y1="185.8" x2="184.1" y2="240.8" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="152.4" y1="185.8" x2="200" y2="213.3" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="152.4" y1="204.2" x2="200" y2="231.7" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="215.9" y1="176.7" x2="215.9" y2="231.7" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="231.7" y1="185.8" x2="231.7" y2="240.8" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="213.3" x2="247.6" y2="185.8" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="231.7" x2="247.6" y2="204.2" stroke={dark} strokeWidth="1" opacity="0.5" />
    </g>
  );
};

const ElIdiomaSinParientesCercanosEnEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M130 130 Q130 108 155 108 L245 108 Q270 108 270 130 Q270 152 245 152 L190 152 L165 175 L172 152 Q130 152 130 130 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <text x="175" y="138" fontSize="22" fontWeight="700" fill={light} fontFamily="serif">
        ?
      </text>
      <text x="215" y="130" fontSize="16" fontWeight="700" fill={light} fontFamily="serif" opacity="0.7">
        ?
      </text>
      <text x="230" y="145" fontSize="14" fontWeight="700" fill={light} fontFamily="serif" opacity="0.5">
        ?
      </text>
    </g>
  );
};

const STEAM_X = [150, 180, 220, 250];

const LasTermasQueFlotanSobreUnMarSubterraneo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* pool */}
      <ellipse cx="200" cy="210" rx="90" ry="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="200" cy="205" rx="75" ry="22" fill={light} opacity="0.6" />
      {/* rising steam */}
      {STEAM_X.map((x, i) => (
        <path
          key={x}
          d={`M${x} 190 Q${x - 10} 165 ${x} 145 Q${x + 10} 125 ${x} 105`}
          fill="none"
          stroke={light}
          strokeWidth="4"
          strokeLinecap="round"
          opacity={0.5 + i * 0.05}
        />
      ))}
    </g>
  );
};

const GRAPE_POSITIONS: [number, number][] = [
  [255, 180],
  [268, 188],
  [280, 180],
  [262, 200],
  [275, 200],
  [268, 214],
];

const ElVinoClasificadoAntesQueElDeBurdeos: IllustrationComponent = () => {
  const gold = "#D4A017";
  const goldDark = shade(gold, 0.3);
  const grapeColor = "#6A1B7A";
  const dark = shade(grapeColor, 0.3);
  return (
    <g>
      {/* wine glass */}
      <path d="M175 140 Q175 175 200 180 Q225 175 225 140 Z" fill={gold} stroke={goldDark} strokeWidth="2" />
      <path d="M175 140 Q200 150 225 140" fill="none" stroke={goldDark} strokeWidth="1.5" opacity="0.6" />
      <line x1="200" y1="180" x2="200" y2="220" stroke={goldDark} strokeWidth="3" />
      <ellipse cx="200" cy="224" rx="20" ry="5" fill={goldDark} />
      {/* grape cluster beside it */}
      {GRAPE_POSITIONS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill={grapeColor} stroke={dark} strokeWidth="1" />
      ))}
      <path d="M268 168 Q260 155 270 148" fill="none" stroke="#3E7D32" strokeWidth="2.5" />
    </g>
  );
};

const LaPimientaQueTambienGanoUnPremioNobel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* jar */}
      <rect x="160" y="150" width="70" height="85" rx="6" fill={light} stroke={dark} strokeWidth="2.5" />
      <rect x="170" y="160" width="50" height="65" fill={accentColor} />
      <rect x="168" y="138" width="54" height="16" rx="3" fill={dark} />
      {/* small spoon beside it */}
      <line x1="255" y1="235" x2="270" y2="170" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="272" cy="160" rx="10" ry="14" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaSinagogaMasGrandeDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* facade */}
      <rect x="150" y="180" width="100" height="60" fill={light} stroke={dark} strokeWidth="2.5" />
      {/* rose window */}
      <circle cx="200" cy="200" r="16" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* two symmetric onion-domed towers, bulging out before tapering to a point */}
      <rect x="155" y="140" width="20" height="45" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M155 140 Q148 120 158 100 Q165 85 165 75 Q165 85 172 100 Q182 120 175 140 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="165" cy="72" r="3" fill={dark} />
      <rect x="225" y="140" width="20" height="45" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M225 140 Q218 120 228 100 Q235 85 235 75 Q235 85 242 100 Q252 120 245 140 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="235" cy="72" r="3" fill={dark} />
    </g>
  );
};

const PARLIAMENT_TURRET_X = [150, 250];

const ElParlamentoQueDominaElDanubio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const water = "#4A7A9C";
  return (
    <g>
      {/* river */}
      <rect x="90" y="225" width="220" height="20" fill={water} opacity="0.6" />
      {/* main facade */}
      <rect x="140" y="180" width="120" height="50" fill={light} stroke={dark} strokeWidth="2.5" />
      {/* central dome */}
      <path d="M180 180 Q180 145 200 140 Q220 145 220 180 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="200" y1="140" x2="200" y2="125" stroke={dark} strokeWidth="2.5" />
      {/* pointed turrets on either side */}
      {PARLIAMENT_TURRET_X.map((x) => (
        <g key={x}>
          <rect x={x - 8} y="160" width="16" height="25" fill={light} stroke={dark} strokeWidth="1.5" />
          <polygon points={`${x - 10},160 ${x},140 ${x + 10},160`} fill={dark} />
        </g>
      ))}
    </g>
  );
};

const LosJinetesQueLlegaronDesdeLaEstepa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* open plain */}
      <path d="M90 225 Q200 210 310 225 L310 245 L90 245 Z" fill={accentColor} opacity="0.3" />
      {/* horse body, clearly separate from the rider */}
      <path d="M150 195 Q145 175 170 168 Q195 162 210 175 Q220 180 222 190 L218 200 L155 200 Q148 198 150 195 Z" fill={dark} />
      {/* neck and head reaching forward */}
      <path d="M210 178 Q225 168 238 165 Q244 165 244 172 Q238 172 232 178 Q240 180 242 186 L226 188 Q216 185 210 178 Z" fill={dark} />
      {/* mane */}
      <path d="M212 170 L218 162 M220 173 L227 166" stroke={dark} strokeWidth="2" strokeLinecap="round" />
      {/* tail streaming behind in the gallop */}
      <path d="M152 192 Q138 190 130 200 Q140 196 148 198 Q136 204 134 214 Q146 204 154 200" fill={dark} />
      {/* legs in a full gallop, front pair forward, back pair back */}
      <path d="M165 200 L155 225 M180 200 L190 228 M200 200 L192 226 M212 199 L224 224" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* rider, seated on top of the horse */}
      <circle cx="195" cy="152" r="11" fill={skin} />
      <path d="M186 152 a9 5.5 0 1 1 18 0 Z" fill={dark} />
      <path d="M178 165 Q195 156 212 165 L215 190 Q195 197 175 190 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const WATERPOLO_WATER = "#2E86AB";

const ElDominioHistoricoDelWaterpoloHungaro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* waves */}
      <path d="M90 220 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={WATERPOLO_WATER} strokeWidth="6" />
      <path d="M90 235 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={tint(WATERPOLO_WATER, 0.3)} strokeWidth="6" />
      {/* ball floating above */}
      <circle cx="200" cy="165" r="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M175 150 Q200 160 225 150 M175 180 Q200 170 225 180 M200 130 L200 200" stroke={dark} strokeWidth="2" fill="none" opacity="0.6" />
    </g>
  );
};

const ElMetroMasAntiguoDeLaEuropaContinental: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* rounded train car */}
      <path d="M140 170 Q140 150 165 150 L235 150 Q260 150 260 170 L260 215 L140 215 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* windows */}
      <rect x="155" y="162" width="30" height="24" rx="4" fill={light} stroke={dark} strokeWidth="1.5" />
      <rect x="195" y="162" width="30" height="24" rx="4" fill={light} stroke={dark} strokeWidth="1.5" />
      {/* wheels */}
      <circle cx="160" cy="222" r="10" fill={dark} />
      <circle cx="240" cy="222" r="10" fill={dark} />
      {/* rails */}
      <line x1="110" y1="232" x2="290" y2="232" stroke={dark} strokeWidth="3" />
      <line x1="110" y1="240" x2="290" y2="240" stroke={dark} strokeWidth="3" />
    </g>
  );
};

export const hungaryIllustrations: Record<string, IllustrationDefinition> = {
  "el-cubo-que-invento-un-profesor-de-arquitectura": { component: ElCuboQueInventoUnProfesorDeArquitectura },
  "el-idioma-sin-parientes-cercanos-en-europa": { component: ElIdiomaSinParientesCercanosEnEuropa },
  "las-termas-que-flotan-sobre-un-mar-subterraneo": { component: LasTermasQueFlotanSobreUnMarSubterraneo },
  "el-vino-clasificado-antes-que-el-de-burdeos": { component: ElVinoClasificadoAntesQueElDeBurdeos },
  "la-pimienta-que-tambien-gano-un-premio-nobel": { component: LaPimientaQueTambienGanoUnPremioNobel },
  "la-sinagoga-mas-grande-de-europa": { component: LaSinagogaMasGrandeDeEuropa },
  "el-parlamento-que-domina-el-danubio": { component: ElParlamentoQueDominaElDanubio },
  "los-jinetes-que-llegaron-desde-la-estepa": { component: LosJinetesQueLlegaronDesdeLaEstepa },
  "el-dominio-historico-del-waterpolo-hungaro": { component: ElDominioHistoricoDelWaterpoloHungaro },
  "el-metro-mas-antiguo-de-la-europa-continental": { component: ElMetroMasAntiguoDeLaEuropaContinental },
};
