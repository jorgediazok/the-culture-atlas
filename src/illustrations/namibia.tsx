import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElDesiertoMasAntiguoDelPlaneta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q150 130 210 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M170 250 Q225 100 280 250 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.8" />
      <path d="M90 250 Q150 210 210 250" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      <rect x="90" y="90" width="230" height="40" fill="#F5F0E6" opacity="0.3" />
    </g>
  );
};

const ElCementerioDeArbolesNegrosEnArenaBlanca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q205 130 320 200 L320 250 L90 250 Z" fill={accentColor} opacity="0.55" stroke={dark} strokeWidth="2.4" />
      <rect x="90" y="220" width="230" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {[[150, 220], [205, 225], [260, 218]].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x} y2={y - 40} stroke="#1A1A1A" strokeWidth="4" />
          <path d={`M${x} ${y - 40} L${x - 15} ${y - 55} M${x} ${y - 30} L${x + 15} ${y - 48}`} stroke="#1A1A1A" strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const LaCostaDondeLosBarcosVanAMorir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#8C8C74" opacity="0.6" />
      <path d="M150 220 L150 190 L230 190 L235 220 Z" fill="#5C6B6E" stroke={dark} strokeWidth="2.6" />
      <line x1="190" y1="190" x2="190" y2="150" stroke="#3A2418" strokeWidth="4" />
      <path d="M190 155 L225 175 L190 185 Z" fill={accentColor} opacity="0.7" />
      <path d="M90 130 Q205 110 320 130" fill="none" stroke="#F5F0E6" strokeWidth="10" opacity="0.5" />
    </g>
  );
};

const ElPuebloDiamanteroQueSeTragaElDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="150" width="110" height="90" fill="#D9C9A3" stroke={dark} strokeWidth="2.8" />
      <polygon points="140,150 205,115 270,150" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <path d="M150 240 Q180 200 220 210 Q250 218 260 240 Z" fill={accentColor} opacity="0.85" />
      <rect x="185" y="180" width="18" height="20" fill="#3A2418" opacity="0.6" />
      <rect x="215" y="180" width="18" height="20" fill="#3A2418" opacity="0.6" />
    </g>
  );
};

const ElPuebloQueSePintaLaPielDeColorOcre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="145" rx="24" ry="28" fill="#B8571F" stroke={dark} strokeWidth="2.6" />
      <path d="M182 130 Q205 110 228 130 Q225 118 205 115 Q185 118 182 130 Z" fill="#3A2418" />
      <path d="M170 240 Q168 190 205 180 Q242 190 240 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={190 + i * 15} cy={200 + i * 5} r="4" fill="#C9A227" opacity="0.8" />
      ))}
    </g>
  );
};

const ElCanonQueCompiteConElGranCanon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 100 L150 100 L180 250 L90 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M320 100 L260 100 L230 250 L320 250 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.4" />
      <path d="M150 100 L180 250 L230 250 L260 100" fill="#8C8C74" opacity="0.4" />
      <path d="M195 250 Q205 220 215 250" fill="#1B5E7A" opacity="0.6" />
    </g>
  );
};

const ElParqueDondeLaSalAtraeATodaLaFauna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="230" rx="115" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <path d="M150 225 Q145 190 165 175 Q170 150 195 150 L200 225 Z" fill="#5C5C5C" stroke={dark} strokeWidth="2.4" />
      <path d="M245 225 Q248 195 260 185 Q275 195 270 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <polygon points="150,140 145,110 160,135" fill={accentColor} opacity="0.85" />
    </g>
  );
};

const LaPlantaQuePuedeVivirMilAnosConDosHojas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="40" ry="14" fill="#8B5A2B" opacity="0.6" />
      <path d="M205 220 Q150 210 120 190 Q160 200 205 205 Q195 175 175 150 Q200 175 205 205 Z" fill="#2F6B3A" stroke={dark} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M205 220 Q260 210 290 190 Q250 200 205 205 Q215 175 235 150 Q210 175 205 205 Z" fill="#3A7A45" stroke={dark} strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="205" cy="222" r="10" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaMayorPoblacionDeGuepardosEnLibertad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 220 Q150 195 175 190 Q195 175 220 190 Q245 195 245 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <circle cx="230" cy="185" r="14" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      {[[170, 200], [190, 195], [210, 205], [225, 195]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#1A1A1A" />
      ))}
      <path d="M150 220 L130 235 M245 220 L265 240" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="180" y1="235" x2="178" y2="248" stroke={dark} strokeWidth="4" />
      <line x1="210" y1="235" x2="212" y2="248" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LaCiudadAlemanaQueQuedoVaradaEnElDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="170" width="110" height="70" fill="#D9C9A3" stroke={dark} strokeWidth="2.8" />
      <polygon points="145,170 205,130 265,170" fill="#8B1A1A" stroke={dark} strokeWidth="2.6" />
      <rect x="195" y="145" width="20" height="25" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="120" cy="230" rx="30" ry="18" fill="#C1272D" opacity="0.5" />
      <path d="M90 240 Q205 225 320 240" fill="none" stroke="#C9A227" strokeWidth="6" opacity="0.6" />
    </g>
  );
};

const IndependenciaNamibia1990: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  const CROWD: [number, number][] = [
    [130, 240], [160, 245], [250, 245], [280, 240],
  ];
  return (
    <g>
      {CROWD.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y - 16} r="9" fill={skin} opacity="0.6" />
          <path d={`M${x - 8} ${y} Q${x} ${y - 12} ${x + 8} ${y}`} fill={dark} opacity="0.5" />
        </g>
      ))}
      <line x1="205" y1="110" x2="205" y2="240" stroke="#5C3A21" strokeWidth="5" />
      <rect x="205" y="115" width="70" height="45" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M205 115 L275 160" stroke={dark} strokeWidth="2" opacity="0.4" />
      <circle cx="240" cy="137" r="12" fill="#F4C430" stroke={shade("#F4C430", 0.3)} strokeWidth="1.8" />
    </g>
  );
};

const ArteRupestreTwyfelfontein: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill={accentColor} opacity="0.3" />
      <path d="M140 220 Q135 195 155 190 Q160 175 180 178 Q200 180 205 195 L200 220 Z" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M155 190 L148 178 M160 188 L156 176" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="150" y1="218" x2="148" y2="235" stroke={dark} strokeWidth="5" />
      <line x1="192" y1="218" x2="195" y2="235" stroke={dark} strokeWidth="5" />
      <path d="M230 210 Q225 185 245 180 Q260 175 275 190 Q285 205 275 220 Z" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="235" y1="218" x2="232" y2="235" stroke={dark} strokeWidth="4" />
      <line x1="265" y1="218" x2="268" y2="235" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const BasterDeRehoboth: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#D9C08A" opacity="0.5" />
      <rect x="130" y="200" width="90" height="30" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <circle cx="145" cy="235" r="14" fill="none" stroke="#3A2A1E" strokeWidth="4" />
      <circle cx="205" cy="235" r="14" fill="none" stroke="#3A2A1E" strokeWidth="4" />
      <path d="M220 215 Q245 210 260 220" fill="none" stroke="#3A2A1E" strokeWidth="4" />
      <rect x="255" y="100" width="6" height="90" fill="#5C3A21" />
      <rect x="261" y="105" width="45" height="30" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="261" y="115" width="45" height="10" fill={tint(accentColor, 0.4)} />
    </g>
  );
};

const MarulaOmagongoOvambo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#3A7A45";
  const FRUIT: [number, number][] = [
    [175, 140], [205, 150], [235, 140], [190, 165], [220, 165],
  ];
  return (
    <g>
      <line x1="205" y1="240" x2="205" y2="130" stroke="#5C3A21" strokeWidth="7" />
      <ellipse cx="205" cy="115" rx="55" ry="24" fill={green} opacity="0.7" />
      {FRUIT.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="8" fill={accentColor} stroke={dark} strokeWidth="1.8" />
      ))}
      <ellipse cx="205" cy="235" rx="35" ry="14" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="228" rx="26" ry="8" fill={tint(accentColor, 0.3)} />
    </g>
  );
};

const FrankieFredericksVelocista: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  return (
    <g>
      <line x1="260" y1="100" x2="260" y2="240" stroke="#fff" strokeWidth="6" opacity="0.8" />
      <line x1="260" y1="100" x2="320" y2="100" stroke="#fff" strokeWidth="4" opacity="0.6" />
      <path d="M175 175 Q160 190 165 215" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M195 175 Q225 165 245 150" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M188 220 Q170 235 175 250" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M202 220 Q225 210 235 225" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M182 190 Q195 182 208 190 L202 225 Q195 231 188 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="195" cy="170" r="13" fill={skin} stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const namibiaIllustrations: Record<string, IllustrationDefinition> = {
  "el-desierto-mas-antiguo-del-planeta": { component: ElDesiertoMasAntiguoDelPlaneta },
  "el-cementerio-de-arboles-negros-en-arena-blanca": { component: ElCementerioDeArbolesNegrosEnArenaBlanca },
  "la-costa-donde-los-barcos-van-a-morir": { component: LaCostaDondeLosBarcosVanAMorir },
  "el-pueblo-diamantero-que-se-traga-el-desierto": { component: ElPuebloDiamanteroQueSeTragaElDesierto },
  "el-pueblo-que-se-pinta-la-piel-de-color-ocre": { component: ElPuebloQueSePintaLaPielDeColorOcre },
  "el-canon-que-compite-con-el-gran-canon": { component: ElCanonQueCompiteConElGranCanon },
  "el-parque-donde-la-sal-atrae-a-toda-la-fauna": { component: ElParqueDondeLaSalAtraeATodaLaFauna },
  "la-planta-que-puede-vivir-mil-anos-con-dos-hojas": { component: LaPlantaQuePuedeVivirMilAnosConDosHojas },
  "la-mayor-poblacion-de-guepardos-en-libertad": { component: LaMayorPoblacionDeGuepardosEnLibertad },
  "la-ciudad-alemana-que-quedo-varada-en-el-desierto": { component: LaCiudadAlemanaQueQuedoVaradaEnElDesierto },
  "independencia-namibia-1990": { component: IndependenciaNamibia1990 },
  "arte-rupestre-twyfelfontein": { component: ArteRupestreTwyfelfontein },
  "baster-de-rehoboth": { component: BasterDeRehoboth },
  "marula-omagongo-ovambo": { component: MarulaOmagongoOvambo },
  "frankie-fredericks-velocista": { component: FrankieFredericksVelocista },
};
