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

const FranzLisztElVirtuosoHungaro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* grand piano */}
      <path d="M130 210 L130 175 Q130 165 145 165 L260 165 L260 230 L170 230 Q130 230 130 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="200" width="90" height="16" fill="#1A1A1A" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect key={i} x={150 + i * 10} y="200" width="8" height="16" fill={i % 2 === 0 ? "#F5F0E6" : "#1A1A1A"} stroke={dark} strokeWidth="0.5" />
      ))}
      {/* long wavy hair mane */}
      <path d="M255 165 Q280 150 275 125 Q290 140 280 160 Q300 150 290 175 Q285 190 265 185" fill={dark} opacity="0.85" />
    </g>
  );
};

const HarryHoudiniNacidoErikWeisz: IllustrationComponent = () => {
  const metal = "#B0B7BD";
  const dark = shade(metal, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* open handcuffs */}
      <circle cx="170" cy="180" r="26" fill="none" stroke={metal} strokeWidth="8" />
      <circle cx="230" cy="200" r="26" fill="none" stroke={metal} strokeWidth="8" transform="rotate(20 230 200)" />
      <path d="M195 178 L207 195" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* golden key */}
      <circle cx="280" cy="150" r="12" fill="none" stroke={gold} strokeWidth="4" />
      <line x1="290" y1="158" x2="310" y2="178" stroke={gold} strokeWidth="4" strokeLinecap="round" />
      <line x1="300" y1="168" x2="305" y2="163" stroke={gold} strokeWidth="3" />
      <line x1="306" y1="174" x2="311" y2="169" stroke={gold} strokeWidth="3" />
    </g>
  );
};

const ElPuenteDeLasCadenasSobreElDanubio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#8B8378";
  return (
    <g>
      {/* two pylons with chains */}
      <rect x="140" y="100" width="16" height="130" fill={stone} stroke={dark} strokeWidth="2" />
      <rect x="245" y="100" width="16" height="130" fill={stone} stroke={dark} strokeWidth="2" />
      <path d="M148 110 Q200 160 253 110" fill="none" stroke={accentColor} strokeWidth="5" />
      <path d="M148 130 Q200 175 253 130" fill="none" stroke={accentColor} strokeWidth="5" />
      <line x1="90" y1="230" x2="320" y2="230" stroke={dark} strokeWidth="4" />
      {/* stone lions */}
      <ellipse cx="120" cy="225" rx="18" ry="12" fill={stone} stroke={dark} strokeWidth="2" />
      <ellipse cx="280" cy="225" rx="18" ry="12" fill={stone} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BartokYKodalyCazadoresDeCancionesFolcloricas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const brass = "#B87333";
  return (
    <g>
      {/* phonograph horn */}
      <path d="M170 200 Q140 190 120 150 Q160 165 185 195 Z" fill={brass} stroke={shade(brass, 0.3)} strokeWidth="2.5" />
      <ellipse cx="195" cy="205" rx="20" ry="14" fill={brass} stroke={shade(brass, 0.3)} strokeWidth="2" />
      <rect x="195" y="205" width="55" height="18" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      {/* sheet music notebook */}
      <rect x="255" y="175" width="55" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[190, 205, 220].map((y) => (
        <line key={y} x1="263" y1={y} x2="302" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
    </g>
  );
};

const LaPorcelanaZsolnayYSuEsmalteEosina: IllustrationComponent = () => {
  const green = "#3F8F6F";
  const gold = "#D4AF37";
  const purple = "#6A1B9A";
  const dark = shade(green, 0.35);
  return (
    <g>
      <path d="M180 240 L180 190 Q180 170 165 155 Q160 140 175 130 Q200 118 225 130 Q240 140 235 155 Q220 170 220 190 L220 240 Z" fill={green} stroke={dark} strokeWidth="3" />
      <path d="M175 130 Q200 122 225 130" fill="none" stroke={gold} strokeWidth="3" opacity="0.8" />
      <ellipse cx="200" cy="180" rx="20" ry="30" fill={purple} opacity="0.4" />
      <circle cx="190" cy="200" r="8" fill={gold} opacity="0.6" />
    </g>
  );
};

const ElPuliElPerroPastorDeRastas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="65" ry="42" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[160, 175], [180, 165], [200, 162], [220, 165], [240, 175], [165, 200], [245, 200], [175, 225], [235, 225], [200, 230]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q${(x as number) - 5} ${(y as number) + 15} ${x} ${(y as number) + 25}`} stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
      ))}
      <ellipse cx="205" cy="195" rx="8" ry="5" fill="#1A1A1A" opacity="0.7" />
    </g>
  );
};

const LosRomkocsmakLosBaresEnRuinas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wall = "#B8A484";
  return (
    <g>
      {/* peeling walls */}
      <rect x="100" y="120" width="210" height="120" fill={wall} stroke={dark} strokeWidth="2.5" opacity="0.6" />
      <path d="M130 150 Q140 160 130 175 Q145 170 140 190" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      {/* mismatched furniture */}
      <rect x="130" y="205" width="30" height="20" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="180" y="195" width="24" height="30" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      {/* string lights */}
      <path d="M110 130 Q205 110 300 130" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {[130, 170, 210, 250, 290].map((x) => (
        <circle key={x} cx={x} cy={128 - Math.abs(x - 205) * 0.05} r="4" fill="#F4D35E" />
      ))}
    </g>
  );
};

const ElUnicumElAmargoNacionalHungaro: IllustrationComponent = () => {
  const glass = "#3E2712";
  const dark = shade(glass, 0.3);
  const red = "#C1272D";
  return (
    <g>
      <circle cx="205" cy="195" r="55" fill={glass} stroke={dark} strokeWidth="3" />
      <rect x="190" y="130" width="30" height="30" fill={glass} stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="118" width="40" height="14" fill={dark} />
      <line x1="205" y1="170" x2="205" y2="220" stroke={red} strokeWidth="6" />
      <line x1="180" y1="195" x2="230" y2="195" stroke={red} strokeWidth="6" />
    </g>
  );
};

const HungriaYSuTradicionEsgrimistica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const metal = "#B0B7BD";
  return (
    <g>
      {/* two crossed sabers */}
      <line x1="140" y1="230" x2="270" y2="130" stroke={metal} strokeWidth="6" strokeLinecap="round" />
      <path d="M140 230 Q130 240 125 232" fill="none" stroke={dark} strokeWidth="5" />
      <line x1="140" y1="130" x2="270" y2="230" stroke={metal} strokeWidth="6" strokeLinecap="round" />
      <path d="M270 230 Q280 240 273 245" fill="none" stroke={dark} strokeWidth="5" />
      {/* fencing mask */}
      <circle cx="205" cy="180" r="30" fill="none" stroke={accentColor} strokeWidth="5" />
      <path d="M185 165 L225 195 M185 195 L225 165 M205 150 L205 210" stroke={accentColor} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const CSARDAS_DUST: [number, number][] = [
  [150, 235], [170, 240], [240, 240], [260, 235],
];

const ElCsardasElBaileNacionalHungaro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const boot = "#5C3A21";
  return (
    <g>
      {/* two pairs of boots mid-spin */}
      <path d="M160 220 L155 195 L175 195 L180 220 Z" fill={boot} stroke={dark} strokeWidth="2" transform="rotate(-15 167 210)" />
      <path d="M200 220 L195 195 L215 195 L220 220 Z" fill={boot} stroke={dark} strokeWidth="2" transform="rotate(15 207 210)" />
      <path d="M240 220 L235 195 L255 195 L260 220 Z" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(-10 247 210)" />
      {/* rising dust */}
      {CSARDAS_DUST.map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="14" ry="5" fill="#D4C098" opacity="0.6" />
      ))}
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
  "franz-liszt-el-virtuoso-hungaro": { component: FranzLisztElVirtuosoHungaro },
  "harry-houdini-nacido-erik-weisz": { component: HarryHoudiniNacidoErikWeisz },
  "el-puente-de-las-cadenas-sobre-el-danubio": { component: ElPuenteDeLasCadenasSobreElDanubio },
  "bartok-y-kodaly-cazadores-de-canciones-folcloricas": { component: BartokYKodalyCazadoresDeCancionesFolcloricas },
  "la-porcelana-zsolnay-y-su-esmalte-eosina": { component: LaPorcelanaZsolnayYSuEsmalteEosina },
  "el-puli-el-perro-pastor-de-rastas": { component: ElPuliElPerroPastorDeRastas },
  "los-romkocsmak-los-bares-en-ruinas": { component: LosRomkocsmakLosBaresEnRuinas },
  "el-unicum-el-amargo-nacional-hungaro": { component: ElUnicumElAmargoNacionalHungaro },
  "hungria-y-su-tradicion-esgrimistica": { component: HungriaYSuTradicionEsgrimistica },
  "el-csardas-el-baile-nacional-hungaro": { component: ElCsardasElBaileNacionalHungaro },
};
