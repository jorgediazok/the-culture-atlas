import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function elephant(x: number, y: number, scale: number, dark: string) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-24 6 L-24 26 Q-24 30 -20 30 L-15 30 Q-13 30 -13 26 L-13 6 Z" fill="#8C8478" stroke={dark} strokeWidth="1.8" />
      <path d="M-6 8 L-6 28 Q-6 32 -2 32 L3 32 Q5 32 5 28 L5 8 Z" fill="#8C8478" stroke={dark} strokeWidth="1.8" />
      <path d="M9 8 L9 28 Q9 32 13 32 L18 32 Q20 32 20 28 L20 8 Z" fill="#8C8478" stroke={dark} strokeWidth="1.8" />
      <path d="M24 6 L24 26 Q24 30 28 30 L33 30 Q35 30 35 26 L35 6 Z" fill="#8C8478" stroke={dark} strokeWidth="1.8" />
      <path d="M-32 -8 Q-38 0 -32 12 Q-29 14 -27 10 Q-31 2 -26 -6 Z" fill="#8C8478" stroke={dark} strokeWidth="2" />
      <ellipse cx="0" cy="-8" rx="32" ry="18" fill="#8C8478" stroke={dark} strokeWidth="2.4" />
      <path d="M22 -24 Q40 -28 38 -8 Q36 6 20 -2 Z" fill="#7A7264" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="32" cy="-16" rx="14" ry="13" fill="#8C8478" stroke={dark} strokeWidth="2.4" />
      <circle cx="37" cy="-18" r="1.8" fill="#2B2620" />
      <path d="M34 -12 Q42 -6 40 6 Q38 16 30 22 Q27 23 28 19 Q34 12 34 2 Q34 -6 28 -10 Z" fill="#8C8478" stroke={dark} strokeWidth="2.2" />
    </g>
  );
}

function person(x: number, y: number, scale: number, dark: string, robe: string) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

const ElClaroDeSelvaDondeSeReunenLosElefantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#2F6B3A" opacity="0.22" />
      <ellipse cx="205" cy="225" rx="120" ry="30" fill="#C9A227" opacity="0.55" />
      {elephant(150, 225, 1.05, dark)}
      {elephant(215, 232, 0.85, dark)}
      {elephant(270, 210, 0.62, dark)}
    </g>
  );
};

const ElCantoQueHaceEcoEntreLosArbolesMasAltos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#2F6B3A" opacity="0.18" />
      <path d="M120 250 L128 110 M320 250 L308 110" stroke="#2F6B3A" strokeWidth="8" opacity="0.4" />
      {person(160, 245, 0.85, dark, accentColor)}
      {person(205, 250, 0.95, dark, tint(accentColor, 0.2))}
      {person(250, 245, 0.85, dark, accentColor)}
    </g>
  );
};

const LasPiedrasParadasQueNadieSabeQuienLevanto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="130" ry="14" fill="#C9A227" opacity="0.35" />
      {[130, 175, 220, 260].map((x, i) => (
        <g key={x}>
          <rect x={x} y={230 - (i % 2 === 0 ? 100 : 75)} width="22" height={i % 2 === 0 ? 100 : 75} fill={accentColor} stroke={dark} strokeWidth="2.6" />
          <path d={`M${x + 5} ${235 - (i % 2 === 0 ? 100 : 75)} L${x + 5} 225 M${x + 12} ${233 - (i % 2 === 0 ? 100 : 75)} L${x + 12} 225`} stroke={dark} strokeWidth="1.4" opacity="0.5" />
        </g>
      ))}
    </g>
  );
};

const LaLenguaQueUneAUnPaisDeDecenasDePueblos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="205" width="150" height="45" fill="#8B5A2B" opacity="0.4" />
      <path d="M130 205 L150 175 L260 175 L280 205 Z" fill="#5C3A21" opacity="0.5" />
      {person(165, 235, 0.85, dark, tint(accentColor, 0.15))}
      {person(240, 238, 0.9, dark, accentColor)}
      <path d="M185 195 Q200 188 195 190 M225 190 Q240 195 233 193" fill="none" stroke={dark} strokeWidth="2.6" />
    </g>
  );
};

const CazarSinArmasConUnaRedTejidaAMano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L100 115 M320 250 L320 115" stroke="#8B5A2B" strokeWidth="8" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M100 ${130 + i * 20} Q210 ${150 + i * 20} 320 ${130 + i * 20}`} fill="none" stroke={accentColor} strokeWidth="2.2" opacity="0.7" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${115 + i * 45} 118 Q${125 + i * 45} 180 ${115 + i * 45} 245`} fill="none" stroke={accentColor} strokeWidth="2.2" opacity="0.7" />
      ))}
      {person(112, 250, 0.62, dark, "#5C3A21")}
      {person(308, 250, 0.62, dark, "#5C3A21")}
    </g>
  );
};

const LaCascadaQueRefrescaLaCapitalDesdeLejos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 80 L320 80 L320 250 L90 250 Z" fill="#2F6B3A" opacity="0.15" />
      <path d="M140 90 L140 230 Q140 250 170 250 L240 250 Q270 250 270 230 L270 90 Z" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="2.6" />
      <path d="M150 100 L150 240 M180 90 L180 245 M210 95 L210 240 M240 90 L240 245" stroke="#fff" strokeWidth="4" opacity="0.5" />
      <ellipse cx="205" cy="250" rx="100" ry="16" fill="#1B7A9C" opacity="0.6" />
      <path d="M140 250 Q150 260 165 258 M270 250 Q260 262 245 258" fill="none" stroke="#1B7A9C" strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const LaCapitalQueMiraHaciaElOtroLadoDelRio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="180" width="230" height="70" fill="#2E6B8C" opacity="0.55" />
      <path d="M140 190 L200 165 L200 195 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <path d="M230 200 L280 178 L280 205 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      {person(168, 187, 0.4, dark, accentColor)}
      {person(258, 197, 0.36, dark, accentColor)}
      <rect x="120" y="130" width="30" height="50" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="115,130 135,110 155,130" fill={dark} />
      <rect x="250" y="140" width="30" height="40" fill="#D9A227" stroke={dark} strokeWidth="2" />
      <polygon points="245,140 265,122 285,140" fill={dark} />
    </g>
  );
};

const ElBrilloQueSeEscondeBajoLosRiosDeDiamantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 220 Q205 200 320 220 L320 250 L90 250 Z" fill="#2E6B8C" opacity="0.5" />
      <path d="M195 230 Q210 210 205 195" fill="none" stroke="#B0A88C" strokeWidth="6" opacity="0.6" />
      <circle cx="207" cy="188" r="9" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <path d="M195 200 Q207 192 219 200 L226 235 Q207 245 188 235 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="207" cy="232" rx="26" ry="10" fill="#B0A88C" stroke={dark} strokeWidth="2" />
      {[[172, 215], [242, 218]].map(([x, y], i) => (
        <polygon key={i} points={`${x},${y - 10} ${x + 8},${y} ${x},${y + 10} ${x - 8},${y}`} fill="#F5F0E6" stroke={dark} strokeWidth="1.6" />
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
      {[[240, 210], [255, 206], [270, 210]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="3" fill="#3A2A1E" opacity="0.6" />
      ))}
    </g>
  );
};

const LosGorilasSilenciososDeLaSelvaMasDensa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#2F6B3A" opacity="0.2" />
      <path d="M110 250 Q120 150 100 90 M290 250 Q300 150 310 90" stroke="#2F6B3A" strokeWidth="10" opacity="0.4" fill="none" />
      <ellipse cx="205" cy="215" rx="45" ry="35" fill="#3A2A1E" stroke={dark} strokeWidth="2.6" />
      <circle cx="205" cy="165" r="26" fill="#3A2A1E" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="176" rx="12" ry="8" fill="#5C4A3E" stroke={dark} strokeWidth="1.6" />
      <circle cx="196" cy="162" r="3.5" fill="#fff" />
      <circle cx="214" cy="162" r="3.5" fill="#fff" />
      <path d="M170 200 Q150 190 155 220 M240 200 Q260 190 255 220" fill="none" stroke="#3A2A1E" strokeWidth="10" strokeLinecap="round" />
      <path d="M180 148 Q170 138 178 128 M230 148 Q240 138 232 128" fill="none" stroke="#3A2A1E" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
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
