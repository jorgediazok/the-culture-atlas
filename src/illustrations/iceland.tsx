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

const ThingvellirElParlamentoMasAntiguoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* the rift splitting the plain */}
      <path d="M90 250 L90 180 Q140 160 165 190 Q175 210 165 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M245 250 Q235 210 245 190 Q270 160 320 180 L320 250 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="3" />
      <path d="M165 190 Q205 205 245 190 L245 250 L165 250 Z" fill="#3D8FB0" opacity="0.4" />
      {/* small gathered figures */}
      {[190, 210, 230].map((x) => (
        <g key={x}>
          <circle cx={x} cy="225" r="8" fill="#C68642" />
          <path d={`M${x - 8} 240 Q${x} 233 ${x + 8} 240 L${x + 6} 250 L${x - 6} 250 Z`} fill={dark} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const JolabokaflodLaInundacionDeLibrosEnNavidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[150, accentColor], [180, tint(accentColor, 0.25)], [210, shade(accentColor, 0.15)]].map(([y, color], i) => (
        <rect key={y as number} x={150 - i * 5} y={y as number} width="120" height="26" fill={color as string} stroke={dark} strokeWidth="2.5" transform={`rotate(${(i - 1) * 3} 205 ${y})`} />
      ))}
      {/* mug of hot chocolate */}
      <path d="M255 200 L255 240 Q255 250 265 250 L285 250 Q295 250 295 240 L295 200 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M295 210 Q310 210 310 222 Q310 234 295 232" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M262 195 Q270 185 265 175 M280 195 Q288 185 283 175" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const BjorkYSigurRosLaMusicaIslandesaEnElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="235" width="230" height="15" fill={dark} opacity="0.5" />
      <line x1="205" y1="235" x2="205" y2="140" stroke={dark} strokeWidth="4" />
      <ellipse cx="205" cy="130" rx="20" ry="26" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="195" y="150" width="20" height="12" fill={dark} opacity="0.6" />
      {/* sound waves */}
      <path d="M150 150 Q130 130 150 105" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <path d="M125 165 Q95 130 125 85" fill="none" stroke={tint(accentColor, 0.3)} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M260 150 Q280 130 260 105" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <path d="M285 165 Q315 130 285 85" fill="none" stroke={tint(accentColor, 0.3)} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </g>
  );
};

const ElColapsoFinancieroDe2008YSuRecuperacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* tilted, cracking bank facade */}
      <g transform="rotate(-8 205 190)">
        <rect x="160" y="130" width="90" height="120" fill={accentColor} stroke={dark} strokeWidth="3" />
        <polygon points="150,130 205,100 260,130" fill={dark} />
        {[175, 195, 215].map((x) => (
          <rect key={x} x={x} y="150" width="10" height="60" fill={dark} opacity="0.5" />
        ))}
        <line x1="180" y1="130" x2="230" y2="250" stroke={dark} strokeWidth="2" opacity="0.6" />
      </g>
      {/* falling banknotes */}
      {[[110, 160, -15], [290, 180, 20], [270, 120, -10]].map(([x, y, rot]) => (
        <rect key={x as number} x={x as number} y={y as number} width="26" height="16" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" transform={`rotate(${rot} ${x} ${y})`} opacity="0.9" />
      ))}
    </g>
  );
};

const ElCaballoIslandesQueNuncaPuedeVolverAEntrar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {/* horse body and legs */}
      <ellipse cx="190" cy="210" rx="60" ry="26" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="155" y1="232" x2="150" y2="250" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <line x1="225" y1="232" x2="230" y2="250" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      {/* neck and long mane */}
      <path d="M235 200 Q260 180 255 155" fill="none" stroke={accentColor} strokeWidth="16" strokeLinecap="round" />
      <path d="M225 195 Q245 200 250 220 M235 180 Q255 185 260 205" stroke={dark} strokeWidth="3" opacity="0.5" fill="none" />
      {/* rider */}
      <circle cx="200" cy="175" r="14" fill={skin} />
      <path d="M188 188 Q200 180 212 188 L207 215 L193 215 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      {/* raised cup */}
      <path d="M210 190 L225 165" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <path d="M220 158 L232 155 L228 168 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
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
  "thingvellir-el-parlamento-mas-antiguo-del-mundo": { component: ThingvellirElParlamentoMasAntiguoDelMundo },
  "jolabokaflod-la-inundacion-de-libros-en-navidad": { component: JolabokaflodLaInundacionDeLibrosEnNavidad },
  "bjork-y-sigur-ros-la-musica-islandesa-en-el-mundo": { component: BjorkYSigurRosLaMusicaIslandesaEnElMundo },
  "el-colapso-financiero-de-2008-y-su-recuperacion": { component: ElColapsoFinancieroDe2008YSuRecuperacion },
  "el-caballo-islandes-que-nunca-puede-volver-a-entrar": { component: ElCaballoIslandesQueNuncaPuedeVolverAEntrar },
};
