import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GeysirLaPalabraQueNacioEnIslandia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="235" rx="55" ry="14" fill="#8B8378" opacity="0.6" />
      <path d="M195 235 Q190 190 200 150 Q205 120 210 100 Q215 130 218 160 Q222 195 215 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" opacity="0.9" />
      <ellipse cx="205" cy="235" rx="30" ry="10" fill={dark} opacity="0.5" />
    </g>
  );
};

const IslandiaSobreLaDorsalMesoatlantica: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L140 130 L190 250 Z" fill="#4A4A4A" />
    <path d="M120 150 Q140 100 160 60 Q145 100 150 140 Q170 90 175 50 Q165 100 165 150 Q185 110 195 70 Q185 115 190 155 Z" fill="#8B8378" opacity="0.7" />
    <path d="M155 140 Q165 100 172 65" fill="none" stroke="#B7410E" strokeWidth="4" opacity="0.7" />
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
      <path d="M150 150 Q205 135 260 150 L260 235 Q205 220 150 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="140" x2="205" y2="228" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[165, 180, 195].map((y) => (
        <line key={y} x1="160" y1={y} x2="195" y2={y - 5} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <path d="M255 145 L275 130" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const NombresSinApellidosHijoDeSuPadre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="160" width="110" height="70" rx="8" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="180" cy="185" r="12" fill="#F5F0E6" />
      <line x1="200" y1="180" x2="240" y2="180" stroke="#F5F0E6" strokeWidth="3" opacity="0.8" />
      <line x1="200" y1="195" x2="230" y2="195" stroke="#F5F0E6" strokeWidth="3" opacity="0.6" />
      <line x1="165" y1="210" x2="245" y2="210" stroke="#F5F0E6" strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const AppParaNoSalirConUnPrimo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="165" y="130" width="80" height="130" rx="12" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <circle cx="195" cy="180" r="10" fill={accentColor} />
      <circle cx="220" cy="200" r="10" fill={tint(accentColor, 0.3)} />
      <line x1="195" y1="180" x2="220" y2="200" stroke="#F5F0E6" strokeWidth="2.5" />
      <rect x="180" y="225" width="50" height="8" rx="4" fill="#F5F0E6" opacity="0.7" />
    </g>
  );
};

const ElPaisSinEjercito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="205" y1="240" x2="205" y2="130" stroke="#8B7355" strokeWidth="5" />
      <path d="M205 145 Q225 148 225 165 Q210 172 205 165 Z" fill={accentColor} opacity="0.4" stroke={dark} strokeWidth="2" strokeDasharray="4 4" />
      <path d="M195 150 Q180 148 175 160 Q188 168 195 160 Q198 155 195 150 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
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
      <polygon points="150,240 150,180 205,150 260,180 260,240" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="240" x2="205" y2="100" stroke="#8B7355" strokeWidth="6" />
      <path d="M195 130 Q188 115 195 100 Q202 115 195 130 Z" fill={accentColor} opacity="0.7" />
      <path d="M215 145 Q208 130 215 115 Q222 130 215 145 Z" fill={accentColor} opacity="0.5" />
      <rect x="185" y="200" width="16" height="40" fill={dark} opacity="0.5" />
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
