import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GeysirLaPalabraQueNacioEnIslandia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="240" rx="115" ry="20" fill="#8B8378" opacity="0.6" />
      <path d="M188 240 Q180 175 195 120 Q205 78 215 55 Q222 110 227 155 Q235 200 222 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.9" />
      <ellipse cx="205" cy="240" rx="62" ry="14" fill={dark} opacity="0.5" />
      <path d="M110 235 Q150 225 180 235" fill="none" stroke={dark} strokeWidth="3" opacity="0.3" />
      <path d="M230 235 Q265 222 300 235" fill="none" stroke={dark} strokeWidth="3" opacity="0.3" />
    </g>
  );
};

const IslandiaSobreLaDorsalMesoatlantica: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L205 100 L320 250 Z" fill="#3E3A2F" stroke="#1A1710" strokeWidth="3" />
    <path d="M180 140 L205 100 L230 140 L215 140 L205 120 L195 140 Z" fill="#B7410E" />
    <circle cx="205" cy="90" r="18" fill="#8B8378" opacity="0.7" />
    <circle cx="185" cy="75" r="14" fill="#9E9A92" opacity="0.65" />
    <circle cx="225" cy="72" r="16" fill="#9E9A92" opacity="0.65" />
    <circle cx="205" cy="60" r="13" fill="#B0ACA2" opacity="0.6" />
    <path d="M205 130 Q190 175 178 215 Q173 235 185 250 L225 250 Q233 232 220 200 Q212 165 220 135 Z" fill="#F4A300" stroke="#B7410E" strokeWidth="2.5" />
    <path d="M205 145 Q196 180 198 220 L200 250" stroke="#FFD166" strokeWidth="5" fill="none" opacity="0.8" strokeLinecap="round" />
  </g>
);

const LagunaAzulNacidaDeUnaPlantaGeotermica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 240 Q205 260 320 240 L320 250 Q205 268 100 250 Z" fill={accentColor} opacity="0.8" stroke={dark} strokeWidth="2" />
      {[[140, 210], [175, 200], [210, 205], [245, 195], [280, 215]].map(([x, y], i) => (
        <path key={x as number} d={`M${x} ${y} L${(x as number) - 15} ${y + 20} L${(x as number) + 15} ${y + 20} Z`} fill={i % 2 === 0 ? "#2E2A1F" : "#4A4A4A"} />
      ))}
    </g>
  );
};

const LasSagasIslandesasLiteraturaMedieval: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 130 Q205 108 300 130 L300 235 Q205 213 110 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="119" x2="205" y2="224" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      {[155, 175, 195].map((y) => (
        <line key={y} x1="130" y1={y} x2="190" y2={y - 10} stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
      {[155, 175, 195].map((y) => (
        <line key={`r-${y}`} x1="220" y1={y - 10} x2="280" y2={y} stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
      <path d="M255 122 L285 100" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const NombresSinApellidosHijoDeSuPadre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="105" y="140" width="200" height="110" rx="12" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      <circle cx="155" cy="180" r="22" fill="#F5F0E6" />
      <line x1="188" y1="170" x2="270" y2="170" stroke="#F5F0E6" strokeWidth="5" opacity="0.85" />
      <line x1="188" y1="192" x2="250" y2="192" stroke="#F5F0E6" strokeWidth="5" opacity="0.65" />
      <line x1="125" y1="225" x2="285" y2="225" stroke="#F5F0E6" strokeWidth="3.5" opacity="0.45" />
    </g>
  );
};

const AppParaNoSalirConUnPrimo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="110" width="230" height="140" rx="16" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      <rect x="102" y="122" width="206" height="116" fill={tint(accentColor, 0.1)} opacity="0.25" />
      <circle cx="160" cy="170" r="20" fill={accentColor} />
      <circle cx="245" cy="205" r="20" fill={tint(accentColor, 0.3)} />
      <line x1="160" y1="170" x2="245" y2="205" stroke="#F5F0E6" strokeWidth="4" />
      <rect x="130" y="225" width="150" height="12" rx="6" fill="#F5F0E6" opacity="0.7" />
    </g>
  );
};

const ElPaisSinEjercito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 190 L145 172 L140 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="195" cy="178" rx="58" ry="26" fill="#F5F0E6" stroke={dark} strokeWidth="3" transform="rotate(-8 195 178)" />
      <path d="M165 165 Q195 95 255 122 Q222 148 190 172 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="248" cy="158" r="19" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M266 158 L288 152 L288 166 Z" fill="#F4A300" />
      <circle cx="255" cy="153" r="3" fill="#1A1A1A" />
      <path d="M288 159 L312 152 M296 150 Q300 142 308 144 M296 168 Q300 176 308 174" fill="none" stroke="#4C7A3D" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const LocacionesDeCineEnPaisajesVolcanicos: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L140 160 L190 250 Z" fill="#2E2A1F" />
    <path d="M170 250 L230 140 L290 250 Z" fill="#3E3A2F" />
    <rect x="130" y="180" width="60" height="10" fill="#1A1A1A" stroke="#000" strokeWidth="1" transform="rotate(-15 160 185)" />
    <rect x="128" y="178" width="60" height="14" fill="#F5F0E6" opacity="0.9" transform="rotate(-15 158 185)" />
  </g>
);

const FrailecillosLaMayorColoniaDelAtlantico: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L120 190 L150 250 Z" fill="#8B8378" opacity="0.6" />
    <ellipse cx="195" cy="205" rx="30" ry="38" fill="#1A1A1A" />
    <ellipse cx="188" cy="222" rx="19" ry="24" fill="#F5F0E6" />
    <ellipse cx="220" cy="172" rx="18" ry="17" fill="#F5F0E6" stroke="#1A1A1A" strokeWidth="1.5" />
    <path d="M234 158 L272 142 Q282 148 279 162 L268 178 Q258 184 244 176 L230 168 Z" fill="#F4A300" stroke="#B7410E" strokeWidth="2.5" />
    <path d="M272 142 Q282 148 279 162 L266 158 Q270 149 262 144 Z" fill="#5C8FA8" opacity="0.9" />
    <circle cx="226" cy="167" r="4" fill="#1A1A1A" />
    <path d="M175 245 L168 262 M200 245 L206 262" stroke="#F4A300" strokeWidth="5" strokeLinecap="round" />
  </g>
);

const EnergiaCienPorCientoGeotermicaYRenovable: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="115,248 115,165 205,110 295,165 295,248" fill="#F5F0E6" stroke={dark} strokeWidth="3.5" />
      <line x1="205" y1="248" x2="205" y2="75" stroke="#8B7355" strokeWidth="8" />
      <path d="M188 115 Q178 92 188 68 Q198 92 188 115 Z" fill={accentColor} opacity="0.75" />
      <path d="M220 135 Q210 112 220 88 Q230 112 220 135 Z" fill={accentColor} opacity="0.55" />
      <rect x="180" y="195" width="26" height="53" fill={dark} opacity="0.5" />
    </g>
  );
};

export const icelandIllustrations: Record<string, IllustrationDefinition> = {
  "geysir-la-palabra-que-nacio-en-islandia": { component: GeysirLaPalabraQueNacioEnIslandia },
  "islandia-sobre-la-dorsal-mesoatlantica": { component: IslandiaSobreLaDorsalMesoatlantica },
  "laguna-azul-nacida-de-una-planta-geotermica": { component: LagunaAzulNacidaDeUnaPlantaGeotermica },
  "las-sagas-islandesas-literatura-medieval": { component: LasSagasIslandesasLiteraturaMedieval },
  "nombres-sin-apellidos-hijo-de-su-padre": { component: NombresSinApellidosHijoDeSuPadre },
  "app-para-no-salir-con-un-primo": { component: AppParaNoSalirConUnPrimo },
  "el-pais-sin-ejercito": { component: ElPaisSinEjercito },
  "locaciones-de-cine-en-paisajes-volcanicos": { component: LocacionesDeCineEnPaisajesVolcanicos },
  "frailecillos-la-mayor-colonia-del-atlantico": { component: FrailecillosLaMayorColoniaDelAtlantico },
  "energia-cien-por-ciento-geotermica-y-renovable": { component: EnergiaCienPorCientoGeotermicaYRenovable },
};
