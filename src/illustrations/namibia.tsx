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
};
