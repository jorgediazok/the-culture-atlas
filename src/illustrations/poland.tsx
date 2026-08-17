import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const WieliczkaLaMinaDeSalConCatedralIncluida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 150 Q205 120 320 150 L320 250 Z" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M150 250 L150 190 Q150 170 175 170 L235 170 Q260 170 260 190 L260 250 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="175" cy="150" r="8" fill={accentColor} opacity="0.8" />
      <circle cx="235" cy="150" r="8" fill={accentColor} opacity="0.8" />
      <path d="M175 150 L175 170 M235 150 L235 170" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M205 170 L205 140 L195 150 M205 140 L215 150" stroke={dark} strokeWidth="2.5" fill="none" />
    </g>
  );
};

const PierogiElPlatoQueCadaRegionDefiende: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="215" rx="110" ry="30" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      {[130, 165, 200, 235, 270].map((x, i) => (
        <path key={x} d={`M${x - 20} 205 Q${x} 185 ${x + 20} 205 Q${x} 220 ${x - 20} 205 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      ))}
    </g>
  );
};

const SolidarnoscElSindicatoQueTumboAlComunismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="270" y1="250" x2="270" y2="100" stroke="#8B8378" strokeWidth="7" opacity="0.6" />
      <line x1="270" y1="110" x2="220" y2="140" stroke="#8B8378" strokeWidth="6" opacity="0.6" />
      <line x1="220" y1="140" x2="220" y2="200" stroke="#8B8378" strokeWidth="3" opacity="0.4" />
      <rect x="120" y="150" width="70" height="80" rx="14" fill="#C68642" stroke={dark} strokeWidth="3" />
      {[135, 155, 175].map((x) => (
        <rect key={x} x={x} y="120" width="14" height="45" rx="6" fill="#C68642" stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="105" y="165" width="22" height="45" rx="10" fill="#C68642" stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="245" width="50" height="10" fill={accentColor} />
    </g>
  );
};

const CopernicoElHombreQueDetuvoAlSol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="160" cy="140" r="18" fill={skin} />
      <path d="M140 165 Q160 150 180 165 L175 250 L145 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="255" cy="185" r="22" fill="#F4A300" />
      <circle cx="255" cy="185" r="38" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      <circle cx="290" cy="185" r="6" fill="#3D8FB0" />
      <circle cx="255" cy="220" r="5" fill="#B7410E" />
      <line x1="180" y1="180" x2="220" y2="185" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElCorazonDeChopinGuardadoEnUnaColumna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 220 L110 180 Q110 170 130 168 L200 160 L200 220 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <rect x="105" y="220" width="100" height="12" fill="#1A1A1A" />
      {[120, 135, 150, 165, 180].map((x) => (
        <rect key={x} x={x} y="215" width="10" height="15" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
      ))}
      <rect x="255" y="130" width="40" height="120" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M267 175 Q275 165 283 175 Q283 190 275 198 Q267 190 267 175 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BialowiezaElUltimoBosquePrimitivoDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[110, 300].map((x) => (
        <path key={x} d={`M${x} 250 L${x} 130 M${x - 15} 160 L${x} 140 L${x + 15} 160`} stroke="#2E4A3A" strokeWidth="6" fill="none" opacity="0.6" />
      ))}
      <path d="M130 230 Q125 165 155 145 Q165 130 185 132 Q210 128 225 145 Q260 150 275 175 Q290 190 280 210 Q275 230 250 230 Z" fill="#4A2C2A" stroke={dark} strokeWidth="3" />
      <path d="M160 140 Q150 128 155 115 Q165 122 168 135 M182 132 Q178 118 188 108 Q195 118 192 132" fill="#3E2A1A" />
      <ellipse cx="163" cy="165" rx="8" ry="14" fill="#3E2A1A" opacity="0.8" />
      <circle cx="158" cy="155" r="3" fill="#1A1A1A" />
      {[150, 175, 235, 260].map((x) => (
        <rect key={x} x={x} y="225" width="12" height="20" fill="#4A2C2A" />
      ))}
      <path d="M275 200 Q290 210 285 225" stroke="#4A2C2A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="205" cy="245" rx="115" ry="8" fill={accentColor} opacity="0.3" />
    </g>
  );
};

const VarsoviaLaCiudadReconstruidaConPinturas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[95, 160, 90], [150, 140, 110], [205, 155, 95], [260, 145, 105]].map(([x, y, h], i) => (
        <g key={x}>
          <rect x={x} y={y} width="50" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
          <polygon points={`${x},${y} ${x + 25},${y - 20} ${x + 50},${y}`} fill={dark} opacity="0.7" />
        </g>
      ))}
      <ellipse cx="205" cy="248" rx="115" ry="8" fill="#9E9A92" opacity="0.4" />
    </g>
  );
};

const VodkaElOrigenQuePoloniaYRusiaSeDisputan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 250 L170 160 Q170 145 185 145 L195 145 Q210 145 210 160 L210 250 Z" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M175 250 L175 165 Q175 150 187 150 L193 150 Q205 150 205 165 L205 250 Z" fill={tint(accentColor, 0.4)} opacity="0.4" />
      <rect x="172" y="200" width="36" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {[100, 130, 250, 280, 310].map((x) => (
        <path key={x} d={`M${x} 250 L${x} 200 Q${x - 4} 190 ${x} 180`} stroke="#D4941E" strokeWidth="4" fill="none" />
      ))}
    </g>
  );
};

const ElDragonDeWawelQueEscupeFuegoDeVerdad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 250 Q120 200 150 180 Q145 160 160 150 Q175 160 172 180 Q210 175 230 195 Q220 210 195 205 Q200 230 180 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M230 195 Q260 185 280 200" stroke={accentColor} strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M280 195 Q300 190 310 175 Q305 200 315 210 Q295 210 280 200 Z" fill="#F4A300" opacity="0.9" />
      <path d="M150 165 L140 150 M158 158 L152 142" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <circle cx="165" cy="163" r="3" fill="#1A1A1A" />
    </g>
  );
};

const ElAlfabetoQueTieneNueveLetrasQueNoExistenEnIngles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 140 Q170 120 205 140 L205 235 Q170 218 100 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M205 140 Q240 120 310 140 L310 235 Q240 218 205 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <text x="118" y="195" fontSize="42" fontWeight="700" fill={accentColor}>
        ą
      </text>
      <text x="225" y="180" fontSize="38" fontWeight="700" fill={dark}>
        ł
      </text>
      <text x="255" y="215" fontSize="38" fontWeight="700" fill={accentColor}>
        ż
      </text>
    </g>
  );
};

export const polandIllustrations: Record<string, IllustrationDefinition> = {
  "wieliczka-la-mina-de-sal-con-catedral-incluida": { component: WieliczkaLaMinaDeSalConCatedralIncluida },
  "pierogi-el-plato-que-defiende-cada-region": { component: PierogiElPlatoQueCadaRegionDefiende },
  "solidarnosc-el-sindicato-que-tumbo-al-comunismo": { component: SolidarnoscElSindicatoQueTumboAlComunismo },
  "copernico-el-hombre-que-detuvo-al-sol": { component: CopernicoElHombreQueDetuvoAlSol },
  "el-corazon-de-chopin-guardado-en-una-columna": { component: ElCorazonDeChopinGuardadoEnUnaColumna },
  "bialowieza-el-ultimo-bosque-primitivo-de-europa": { component: BialowiezaElUltimoBosquePrimitivoDeEuropa },
  "varsovia-la-ciudad-reconstruida-con-pinturas": { component: VarsoviaLaCiudadReconstruidaConPinturas },
  "vodka-el-origen-que-polonia-y-rusia-se-disputan": { component: VodkaElOrigenQuePoloniaYRusiaSeDisputan },
  "el-dragon-de-wawel-que-escupe-fuego-de-verdad": { component: ElDragonDeWawelQueEscupeFuegoDeVerdad },
  "el-alfabeto-que-tiene-nueve-letras-que-no-existen-en-ingles": { component: ElAlfabetoQueTieneNueveLetrasQueNoExistenEnIngles },
};
