import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Las23PruebasNuclearesDeBikini: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <path d="M90 235 Q205 245 320 235 L320 250 L90 250 Z" fill={water} />
      <path d="M175 235 L195 175 L215 175 L235 235 Z" fill={dark} opacity="0.4" />
      <ellipse cx="205" cy="150" rx="55" ry="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="118" rx="24" ry="18" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <path d="M195 175 Q200 165 205 175 Q210 165 215 175" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const LosMapasDePalitos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      {[[130, 130, 275, 220], [275, 130, 130, 220], [130, 175, 275, 175], [155, 130, 155, 220], [250, 130, 250, 220]].map(([x1, y1, x2, y2]) => (
        <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={wood} strokeWidth="3" strokeLinecap="round" />
      ))}
      {[[150, 150], [205, 175], [260, 145], [180, 205], [230, 200]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="7" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const LaNacionMasBaja: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.6" />
      <path d="M100 220 Q205 210 310 220 L310 228 Q205 220 100 228 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[140, 218], [270, 216]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 8} ${(y as number) - 10} ${(x as number) + 16} ${y}`} fill="none" stroke="#4A8F4E" strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M90 195 Q205 185 320 195" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const ElPactoLibreAsociacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin1 = "#8B5A2B";
  const skin2 = "#D9A46A";
  return (
    <g>
      <path d="M130 200 Q140 190 160 195 L200 200 L200 212 L165 210 Q145 212 135 202 Z" fill={skin1} stroke={dark} strokeWidth="2.5" />
      <path d="M280 200 Q270 190 250 195 L210 200 L210 212 L245 210 Q265 212 275 202 Z" fill={skin2} stroke={dark} strokeWidth="2.5" />
      <rect x="120" y="150" width="170" height="30" fill={accentColor} opacity="0.25" />
      <circle cx="150" cy="165" r="10" fill={accentColor} opacity="0.6" />
      <circle cx="260" cy="165" r="10" fill={accentColor} opacity="0.6" />
    </g>
  );
};

const ElMayorAtolonKwajalein: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const lagoon = "#26C6DA";
  return (
    <g>
      <ellipse cx="195" cy="180" rx="90" ry="50" fill={accentColor} stroke={dark} strokeWidth="4" />
      <ellipse cx="195" cy="180" rx="62" ry="32" fill={lagoon} stroke={shade(lagoon, 0.3)} strokeWidth="2" />
      <path d="M280 150 L285 110 L295 110 L292 155 Z" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <path d="M280 150 L270 140 L288 140 Z" fill={dark} />
      <path d="M285 155 Q280 165 285 175 M292 155 Q297 165 292 175" fill="none" stroke="#F4A300" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LaEconomiaCopra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const husk = "#8B5A2B";
  return (
    <g>
      <rect x="120" y="195" width="170" height="45" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="2" opacity="0.5" />
      {[[145, 210], [180, 218], [215, 208], [250, 216], [270, 208]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="18" ry="12" fill={husk} stroke={shade(husk, 0.3)} strokeWidth="1.5" opacity={0.9 - i * 0.05} />
      ))}
      <circle cx="270" cy="140" r="24" fill="#F4A300" opacity="0.85" />
    </g>
  );
};

const LasCanoasAsimetricasWalap: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 220 Q205 235 320 220 L320 250 L90 250 Z" fill={water} />
      <path d="M130 210 Q160 195 220 205 Q260 210 270 220 L265 225 L140 225 Q125 220 130 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="180" y1="205" x2="180" y2="130" stroke="#8B5A2B" strokeWidth="4" />
      <path d="M180 130 L225 200 L180 200 Z" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="2" />
      <line x1="150" y1="215" x2="115" y2="205" stroke={dark} strokeWidth="3" />
      <ellipse cx="105" cy="203" rx="12" ry="5" fill="#B0B8BF" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElTejidoDeHojasDePandano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.45);
  return (
    <g>
      <path d="M145 230 Q145 175 205 165 Q265 175 265 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect key={`${row}-${col}`} x={155 + col * 26} y={185 + row * 10} width="24" height="8" fill={(row + col) % 2 === 0 ? light : shade(accentColor, 0.15)} opacity="0.75" transform={col % 2 === 0 ? "" : `rotate(3 ${167 + col * 26} ${189 + row * 10})`} />
        ))
      )}
    </g>
  );
};

const LaCupulaDeHormigon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const concrete = "#8B8378";
  return (
    <g>
      <path d="M90 240 Q205 230 320 240 L320 250 L90 250 Z" fill={accentColor} opacity="0.4" />
      <path d="M130 235 Q130 165 205 165 Q280 165 280 235 Z" fill={concrete} stroke={shade(concrete, 0.3)} strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${140 + i * 35} 230 Q${140 + i * 35} ${200 - i * 5} ${205} 168`} fill="none" stroke={shade(concrete, 0.35)} strokeWidth="1.2" opacity="0.5" />
      ))}
      <path d="M180 232 L185 220 M225 232 L220 220" stroke={dark} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const LaMayorComunidadMarshalesaArkansas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="165" y="170" width="80" height="65" rx="6" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="190" y="158" width="30" height="16" rx="4" fill="none" stroke={dark} strokeWidth="3" />
      <rect x="195" y="195" width="20" height="15" fill={dark} opacity="0.4" />
      <path d="M280 215 Q272 200 280 180 Q284 195 288 190" fill="none" stroke="#4A8F4E" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

export const marshallIslandsIllustrations: Record<string, IllustrationDefinition> = {
  "las-23-pruebas-nucleares-de-bikini": { component: Las23PruebasNuclearesDeBikini },
  "los-mapas-de-palitos-para-navegar-sin-instrumentos": { component: LosMapasDePalitos },
  "la-nacion-mas-baja-frente-al-mar-que-sube": { component: LaNacionMasBaja },
  "el-pacto-que-permite-vivir-en-ee-uu-sin-visa": { component: ElPactoLibreAsociacion },
  "el-mayor-atolon-de-coral-por-superficie-de-laguna": { component: ElMayorAtolonKwajalein },
  "la-economia-que-giro-en-torno-al-coco-seco": { component: LaEconomiaCopra },
  "las-canoas-asimetricas-mas-veloces-del-pacifico": { component: LasCanoasAsimetricasWalap },
  "el-tejido-de-hojas-de-pandano": { component: ElTejidoDeHojasDePandano },
  "la-cupula-de-hormigon-que-tapa-desechos-nucleares": { component: LaCupulaDeHormigon },
  "la-mayor-comunidad-marshalesa-esta-en-arkansas": { component: LaMayorComunidadMarshalesaArkansas },
};
