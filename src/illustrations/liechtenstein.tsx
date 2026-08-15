import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnoDeLosDosUnicosPaisesDoblementeSinMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="110" y="100" width="180" height="140" fill="none" stroke={light} strokeWidth="4" strokeDasharray="10 6" />
      <rect x="150" y="130" width="100" height="80" fill="none" stroke={accentColor} strokeWidth="4" strokeDasharray="8 5" />
      <rect x="185" y="160" width="30" height="20" fill={dark} />
    </g>
  );
};

const CROWN_JEWEL_X = [165, 200, 235];

const ElPrincipeQueTodaviaGobiernaDeVerdad: IllustrationComponent = () => {
  const dark = "#5D4037";
  const gold = "#D4AF37";
  const goldDark = shade(gold, 0.3);
  return (
    <g>
      <path d="M140 220 L140 175 L165 200 L185 160 L200 190 L215 160 L235 200 L260 175 L260 220 Z" fill={gold} stroke={goldDark} strokeWidth="3" />
      <rect x="140" y="220" width="120" height="14" fill={goldDark} />
      {CROWN_JEWEL_X.map((x) => (
        <circle key={x} cx={x} cy="195" r="7" fill={dark} stroke={goldDark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const COMPANY_BUILDING_X = [130, 175, 220, 265];

const MasEmpresasRegistradasQueCiudadanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {COMPANY_BUILDING_X.map((x, i) => (
        <g key={x}>
          <rect x={x} y="160" width="30" height="70" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="2" />
          <rect x={x + 6} y="170" width="6" height="8" fill={dark} opacity="0.6" />
          <rect x={x + 18} y="170" width="6" height="8" fill={dark} opacity="0.6" />
          <rect x={x + 6} y="185" width="6" height="8" fill={dark} opacity="0.6" />
          <rect x={x + 18} y="185" width="6" height="8" fill={dark} opacity="0.6" />
        </g>
      ))}
    </g>
  );
};

const SinEjercitoDesde1868YSinAeropuertoPropio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* helipad */}
      <circle cx="200" cy="215" r="55" fill={light} stroke={dark} strokeWidth="3" />
      <text x="200" y="230" fontSize="34" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="sans-serif">
        H
      </text>
      {/* helicopter body */}
      <ellipse cx="195" cy="170" rx="35" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M230 168 L255 162 L255 172 L230 176 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {/* rotor blades */}
      <line x1="140" y1="150" x2="250" y2="150" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <line x1="195" y1="154" x2="195" y2="150" stroke={dark} strokeWidth="3" />
      {/* landing skids */}
      <line x1="175" y1="186" x2="175" y2="196" stroke={dark} strokeWidth="2" />
      <line x1="215" y1="186" x2="215" y2="196" stroke={dark} strokeWidth="2" />
      <line x1="165" y1="196" x2="225" y2="196" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const STAMP_TEETH_X = [130, 148, 166, 184, 202, 220, 238, 256, 270];
const STAMP_TEETH_Y = [155, 190, 225];

const LasEstampillasQueFueronUnaIndustriaSeria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="130" y="140" width="140" height="100" fill="#fff" stroke={dark} strokeWidth="2" />
      {STAMP_TEETH_X.map((x) => (
        <circle key={`t-${x}`} cx={x} cy="140" r="6" fill="#F5F0E6" />
      ))}
      {STAMP_TEETH_X.map((x) => (
        <circle key={`b-${x}`} cx={x} cy="240" r="6" fill="#F5F0E6" />
      ))}
      {STAMP_TEETH_Y.map((y) => (
        <circle key={`l-${y}`} cx="130" cy={y} r="6" fill="#F5F0E6" />
      ))}
      {STAMP_TEETH_Y.map((y) => (
        <circle key={`r-${y}`} cx="270" cy={y} r="6" fill="#F5F0E6" />
      ))}
      <rect x="145" y="155" width="110" height="70" fill={accentColor} />
      <circle cx="200" cy="190" r="26" fill={light} />
      <circle cx="200" cy="190" r="16" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElCastilloDondeElPrincipeRealmenteVive: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* hill */}
      <path d="M100 240 Q200 190 320 240 Z" fill={dark} opacity="0.25" />
      {/* castle body */}
      <rect x="165" y="185" width="70" height="55" fill={light} stroke={dark} strokeWidth="2.5" />
      {/* two towers */}
      <rect x="150" y="150" width="26" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="147,150 163,128 179,150" fill={dark} />
      <rect x="224" y="140" width="26" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="221,140 237,116 253,140" fill={dark} />
    </g>
  );
};

const COIN_STACK_Y = [220, 208, 196, 184];
const GDP_GOLD = "#D4AF37";

const UnoDeLosPibPerCapitaMasAltosDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* small building */}
      <rect x="220" y="170" width="60" height="70" fill={dark} opacity="0.5" stroke={dark} strokeWidth="1.5" />
      <polygon points="216,170 250,150 284,170" fill={dark} opacity="0.7" />
      {/* stack of coins */}
      {COIN_STACK_Y.map((y) => (
        <ellipse key={y} cx="160" cy={y} rx="30" ry="10" fill={GDP_GOLD} stroke={shade(GDP_GOLD, 0.3)} strokeWidth="2" />
      ))}
    </g>
  );
};

const ElPaisEnteroSePuedeAlquilarPorUnDia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* large key */}
      <circle cx="160" cy="160" r="22" fill="none" stroke={accentColor} strokeWidth="9" />
      <line x1="176" y1="176" x2="240" y2="240" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <line x1="215" y1="215" x2="225" y2="205" stroke={accentColor} strokeWidth="7" />
      <line x1="228" y1="228" x2="238" y2="218" stroke={accentColor} strokeWidth="7" />
      {/* small flag on a pole */}
      <line x1="270" y1="230" x2="270" y2="150" stroke={dark} strokeWidth="3" />
      <path d="M270 150 L300 158 L270 166 Z" fill={light} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const UnAlemanQueNoSuenaComoElDeLosLibros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 130 Q130 108 155 108 L245 108 Q270 108 270 130 Q270 152 245 152 L190 152 L165 175 L172 152 Q130 152 130 130 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M150 122 Q158 114 166 122 Q174 130 182 122" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M190 122 Q198 114 206 122 Q214 130 222 122" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M150 140 Q158 132 166 140 Q174 148 182 140" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const ElSenderoQueCruzaElPaisDePuntaAPunta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* small peaks */}
      <polygon points="100,240 140,170 180,240" fill={dark} opacity="0.3" />
      <polygon points="160,240 210,150 260,240" fill={dark} opacity="0.4" />
      <polygon points="240,240 275,180 310,240" fill={dark} opacity="0.3" />
      {/* winding trail */}
      <path d="M105 235 Q140 220 155 235 Q175 250 195 225 Q215 200 235 220 Q255 240 300 232" fill="none" stroke={accentColor} strokeWidth="5" strokeDasharray="10 6" strokeLinecap="round" />
    </g>
  );
};

export const liechtensteinIllustrations: Record<string, IllustrationDefinition> = {
  "uno-de-los-dos-unicos-paises-doblemente-sin-mar": { component: UnoDeLosDosUnicosPaisesDoblementeSinMar },
  "el-principe-que-todavia-gobierna-de-verdad": { component: ElPrincipeQueTodaviaGobiernaDeVerdad },
  "mas-empresas-registradas-que-ciudadanos": { component: MasEmpresasRegistradasQueCiudadanos },
  "sin-ejercito-desde-1868-y-sin-aeropuerto-propio": { component: SinEjercitoDesde1868YSinAeropuertoPropio },
  "las-estampillas-que-fueron-una-industria-seria": { component: LasEstampillasQueFueronUnaIndustriaSeria },
  "el-castillo-donde-el-principe-realmente-vive": { component: ElCastilloDondeElPrincipeRealmenteVive },
  "uno-de-los-pib-per-capita-mas-altos-del-mundo": { component: UnoDeLosPibPerCapitaMasAltosDelMundo },
  "el-pais-entero-se-puede-alquilar-por-un-dia": { component: ElPaisEnteroSePuedeAlquilarPorUnDia },
  "un-aleman-que-no-suena-como-el-de-los-libros": { component: UnAlemanQueNoSuenaComoElDeLosLibros },
  "el-sendero-que-cruza-el-pais-de-punta-a-punta": { component: ElSenderoQueCruzaElPaisDePuntaAPunta },
};
