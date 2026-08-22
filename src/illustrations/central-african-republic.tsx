import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElClaroDeSelvaDondeSeReunenLosElefantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#2F6B3A" opacity="0.25" />
      <ellipse cx="205" cy="220" rx="110" ry="26" fill="#C9A227" opacity="0.6" />
      {[[150, 205], [205, 215], [255, 200]].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="26" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
          <path d={`M${x - 24} ${y - 4} Q${x - 34} ${y} ${x - 32} ${y + 12}`} fill="none" stroke={dark} strokeWidth="4" />
        </g>
      ))}
    </g>
  );
};

const ElCantoQueHaceEcoEntreLosArbolesMasAltos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#2F6B3A" opacity="0.2" />
      {[[160, 200], [200, 190], [240, 200], [180, 220], [220, 220]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="14" fill={accentColor} stroke={dark} strokeWidth="2" />
          <path d={`M${x} ${y - 14} Q${x + 8} ${y - 30} ${x - 4} ${y - 40}`} fill="none" stroke="#D9A227" strokeWidth="2.4" opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const LasPiedrasParadasQueNadieSabeQuienLevanto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#C9A227" opacity="0.4" />
      {[130, 175, 220, 260].map((x, i) => (
        <rect key={x} x={x} y={230 - (i % 2 === 0 ? 100 : 75)} width="22" height={i % 2 === 0 ? 100 : 75} fill={accentColor} stroke={dark} strokeWidth="2.6" />
      ))}
    </g>
  );
};

const LaLenguaQueUneAUnPaisDeDecenasDePueblos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="150" cy="180" r="24" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.2" />
      <circle cx="205" cy="160" r="24" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <circle cx="260" cy="180" r="24" fill="#D9A227" stroke={dark} strokeWidth="2.2" />
      <path d="M175 175 Q190 168 182 168 M228 168 Q245 172 236 172" fill="none" stroke={dark} strokeWidth="3" />
      <rect x="150" y="220" width="120" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CazarSinArmasConUnaRedTejidaAMano: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <path d="M100 250 L100 110 M320 250 L320 110" stroke="#8B5A2B" strokeWidth="8" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M100 ${130 + i * 20} Q210 ${150 + i * 20} 320 ${130 + i * 20}`} fill="none" stroke={accentColor} strokeWidth="2.4" opacity="0.75" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${115 + i * 45} 115 Q${125 + i * 45} 180 ${115 + i * 45} 245`} fill="none" stroke={accentColor} strokeWidth="2.4" opacity="0.75" />
      ))}
    </g>
  );
};

const LaCascadaQueRefrescaLaCapitalDesdeLejos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 90 L140 230 Q140 250 170 250 L240 250 Q270 250 270 230 L270 90 Z" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="2.6" />
      <path d="M150 100 L150 240 M180 90 L180 245 M210 95 L210 240 M240 90 L240 245" stroke="#fff" strokeWidth="4" opacity="0.5" />
      <ellipse cx="205" cy="250" rx="100" ry="16" fill="#1B7A9C" opacity="0.6" />
    </g>
  );
};

const LaCapitalQueMiraHaciaElOtroLadoDelRio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="180" width="230" height="70" fill="#2E6B8C" opacity="0.6" />
      <path d="M140 190 L200 165 L200 195 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <path d="M230 200 L280 178 L280 205 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <rect x="120" y="130" width="30" height="50" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="250" y="140" width="30" height="40" fill="#D9A227" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElBrilloQueSeEscondeBajoLosRiosDeDiamantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 220 Q205 200 320 220 L320 250 L90 250 Z" fill="#2E6B8C" opacity="0.5" />
      <ellipse cx="200" cy="215" rx="60" ry="20" fill="#B0A88C" stroke={dark} strokeWidth="2.4" />
      {[[170, 210], [200, 200], [230, 212]].map(([x, y], i) => (
        <polygon key={i} points={`${x},${y - 12} ${x + 10},${y} ${x},${y + 12} ${x - 10},${y}`} fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      ))}
    </g>
  );
};

const LaSalsaDeManiQueAcompanaCadaComidaFamiliar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="150" cy="220" rx="55" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="150" cy="215" rx="30" ry="12" fill="#EDE6D6" />
      <ellipse cx="255" cy="220" rx="45" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="255" cy="214" rx="28" ry="9" fill={accentColor} opacity="0.85" />
    </g>
  );
};

const LosGorilasSilenciososDeLaSelvaMasDensa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#2F6B3A" opacity="0.2" />
      <ellipse cx="205" cy="215" rx="45" ry="35" fill="#3A2A1E" stroke={dark} strokeWidth="2.6" />
      <circle cx="205" cy="165" r="26" fill="#3A2A1E" stroke={dark} strokeWidth="2.4" />
      <circle cx="196" cy="162" r="3.5" fill="#fff" />
      <circle cx="214" cy="162" r="3.5" fill="#fff" />
      <ellipse cx="205" cy="176" rx="10" ry="6" fill="#5C4A3E" />
      <path d="M170 200 Q150 190 155 220 M240 200 Q260 190 255 220" fill="none" stroke="#3A2A1E" strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

export const centralAfricanRepublicIllustrations: Record<string, IllustrationDefinition> = {
  "el-claro-de-selva-donde-se-reunen-los-elefantes": { component: ElClaroDeSelvaDondeSeReunenLosElefantes },
  "el-canto-que-hace-eco-entre-los-arboles-mas-altos": { component: ElCantoQueHaceEcoEntreLosArbolesMasAltos },
  "las-piedras-paradas-que-nadie-sabe-quien-levanto": { component: LasPiedrasParadasQueNadieSabeQuienLevanto },
  "la-lengua-que-une-a-un-pais-de-decenas-de-pueblos": { component: LaLenguaQueUneAUnPaisDeDecenasDePueblos },
  "cazar-sin-armas-con-una-red-tejida-a-mano": { component: CazarSinArmasConUnaRedTejidaAMano },
  "la-cascada-que-refresca-la-capital-desde-lejos": { component: LaCascadaQueRefrescaLaCapitalDesdeLejos },
  "la-capital-que-mira-hacia-el-otro-lado-del-rio": { component: LaCapitalQueMiraHaciaElOtroLadoDelRio },
  "el-brillo-que-se-esconde-bajo-los-rios-de-diamantes": { component: ElBrilloQueSeEscondeBajoLosRiosDeDiamantes },
  "la-salsa-de-mani-que-acompana-cada-comida-familiar": { component: LaSalsaDeManiQueAcompanaCadaComidaFamiliar },
  "los-gorilas-silenciosos-de-la-selva-mas-densa": { component: LosGorilasSilenciososDeLaSelvaMasDensa },
};
