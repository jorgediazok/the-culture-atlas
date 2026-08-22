import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaEspeciaQueApareceDibujadaEnLaBandera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 150 Q205 95 260 150 Q205 130 150 150 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.6" />
      <path d="M150 150 Q205 205 260 150 Q205 170 150 150 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="205" cy="150" rx="34" ry="42" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 40, -40, 80, -80].map((off) => (
        <path key={off} d={`M205 ${115 + Math.abs(off) * 0.3} q${off > 0 ? 14 : -14} 35 0 70`} fill="none" stroke={tint(accentColor, 0.3)} strokeWidth="3" transform={`translate(${off * 0.2} 0)`} />
      ))}
      <ellipse cx="205" cy="235" rx="55" ry="10" fill="#3A2418" opacity="0.4" />
    </g>
  );
};

const ElPrimerParqueDeEsculturasBajoElMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const figure = (x: number, h: number) => (
    <g key={x}>
      <circle cx={x} cy={185 - h} r="10" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" opacity="0.85" />
      <rect x={x - 8} y={195 - h} width="16" height="45" fill={accentColor} stroke={dark} strokeWidth="2" opacity="0.85" />
    </g>
  );
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1B5E7A" opacity="0.3" />
      {figure(150, 20)}
      {figure(205, 35)}
      {figure(260, 10)}
      <line x1="90" y1="245" x2="320" y2="245" stroke="#8C8C74" strokeWidth="6" opacity="0.5" />
      {[[130, 140], [175, 110], [230, 155], [280, 130]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#F5F0E6" opacity="0.7" />
      ))}
      <path d="M280 200 Q290 195 300 200 Q290 205 280 200 Z" fill="#E8A9BC" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const ElLagoQueDuermeDentroDeUnCraterVolcanico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q100 120 205 100 Q310 120 320 200 L320 250 L90 250 Z" fill="#2F6B3A" stroke={dark} strokeWidth="2.5" opacity="0.55" />
      <ellipse cx="205" cy="210" rx="90" ry="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="200" rx="60" ry="16" fill={tint(accentColor, 0.25)} opacity="0.7" />
      <g transform="translate(150 165)">
        <circle cx="0" cy="0" r="8" fill="#5C3A21" stroke={dark} strokeWidth="1.6" />
        <path d="M-8 6 Q0 22 8 6" fill="none" stroke="#5C3A21" strokeWidth="4" />
        <path d="M-4 -8 Q0 -4 4 -8" fill="none" stroke="#5C3A21" strokeWidth="3" />
      </g>
      <g transform="translate(255 172)">
        <circle cx="0" cy="0" r="7" fill="#8B5A2B" stroke={dark} strokeWidth="1.6" />
        <path d="M-7 5 Q0 18 7 5" fill="none" stroke="#8B5A2B" strokeWidth="3.5" />
      </g>
    </g>
  );
};

const ElTamborQueConservaCantosDeAfricaOccidental: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const drum = (x: number, scale: number, fill: string) => (
    <g key={x} transform={`translate(${x} 0) scale(${scale})`}>
      <path d="M-16 0 L-13 40 L13 40 L16 0 Z" fill={fill} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="0" cy="0" rx="16" ry="7" fill="#D9C9A3" stroke={dark} strokeWidth="2" />
      <rect x="-14" y="14" width="28" height="4" fill="#3A2418" />
      <rect x="-13.5" y="28" width="27" height="4" fill="#3A2418" />
    </g>
  );
  return (
    <g>
      {drum(150, 1.1, "#8B1A1A")}
      {drum(205, 1.3, accentColor)}
      {drum(260, 0.95, "#8B5A2B")}
      <rect x="90" y="235" width="230" height="8" fill="#3A3A3A" opacity="0.5" />
      {[150, 205, 260].map((x) => (
        <ellipse key={x} cx={x} cy="185" rx="10" ry="4" fill="#3A2418" opacity="0.6" />
      ))}
    </g>
  );
};

const ElPuebloQueSeVuelveFiestaCadaViernes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="150" width="90" height="70" fill="#3A3A3A" opacity="0.85" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="145" cy="180" rx="34" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M120 180 Q145 165 170 180" fill="none" stroke="#8B5A2B" strokeWidth="3" />
      {[130, 170, 210, 250, 285].map((x, i) => (
        <polygon key={x} points={`${x - 6},95 ${x + 6},95 ${x},${115 + (i % 2) * 8}`} fill="#C9A227" opacity="0.8" />
      ))}
      <rect x="230" y="160" width="70" height="60" fill="#7A5C3A" stroke={dark} strokeWidth="2.5" />
      <circle cx="265" cy="150" r="12" fill="#C9A227" opacity="0.6" />
    </g>
  );
};

const ElFuerteConstruidoPorFranciaEnElSigloXviii: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="190" width="230" height="60" fill="#1B5E7A" opacity="0.4" />
      <polygon points="120,190 290,190 270,120 140,120" fill="#8C8C74" stroke={dark} strokeWidth="3" />
      {[140, 175, 210, 245].map((x) => (
        <rect key={x} x={x} y="110" width="20" height="14" fill="#8C8C74" stroke={dark} strokeWidth="2" />
      ))}
      <rect x="185" y="150" width="30" height="40" fill="#5C5C5C" stroke={dark} strokeWidth="2.2" />
      <g transform="translate(155 175) rotate(-10)">
        <rect x="-4" y="-4" width="45" height="9" fill="#3A3A3A" rx="3" />
        <circle cx="-4" cy="0" r="7" fill="#1A1A1A" />
      </g>
      <g transform="translate(255 175) rotate(10)">
        <rect x="-40" y="-4" width="45" height="9" fill="#3A3A3A" rx="3" />
        <circle cx="4" cy="0" r="7" fill="#1A1A1A" />
      </g>
    </g>
  );
};

const ElGuisoDeUnaSolaOllaQueEsPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 175 L270 175 L255 235 Q205 250 155 235 Z" fill="#3A3A3A" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="65" ry="14" fill="#5C5C5C" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="205" cy="172" rx="50" ry="9" fill={accentColor} />
      <circle cx="180" cy="168" r="7" fill="#2F6B3A" />
      <circle cx="220" cy="166" r="8" fill="#8B5A2B" />
      <circle cx="205" cy="172" r="6" fill="#C9A227" />
      <rect x="150" y="150" width="10" height="30" fill="#3A3A3A" transform="rotate(-20 155 165)" />
      <rect x="250" y="150" width="10" height="30" fill="#3A3A3A" transform="rotate(20 255 165)" />
      <path d="M170 145 Q175 125 165 110 M195 140 Q198 118 190 100 M225 142 Q222 120 232 105" fill="none" stroke="#CCCCCC" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
    </g>
  );
};

const ElCarnavalDondeLaGenteSeCubreDeAceiteYPintura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const jabjab = (x: number) => (
    <g key={x}>
      <circle cx={x} cy="150" r="14" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 14} 138 L${x - 20} 118 M${x + 14} 138 L${x + 20} 118`} stroke="#8B1A1A" strokeWidth="4" strokeLinecap="round" />
      <path d={`M${x - 20} 200 Q${x - 22} 165 ${x} 160 Q${x + 22} 165 ${x + 20} 200 Z`} fill="#1A1A1A" stroke={dark} strokeWidth="2.2" />
      <path d={`M${x - 15} 175 Q${x} 168 ${x + 15} 175`} stroke={accentColor} strokeWidth="3" fill="none" />
      <line x1={x - 18} y1="200" x2={x - 18} y2="235" stroke="#3A3A3A" strokeWidth="4" />
      <line x1={x + 18} y1="200" x2={x + 18} y2="235" stroke="#3A3A3A" strokeWidth="4" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={x - 18 + i * 18} cy="218" r="3.5" fill="#C9A227" />
      ))}
    </g>
  );
  return (
    <g>
      {jabjab(155)}
      {jabjab(255)}
      <rect x="90" y="240" width="230" height="8" fill="#3A3A3A" opacity="0.4" />
    </g>
  );
};

const LasTortugasQueRegresanCadaAnoALaMismaPlaya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="225" width="230" height="25" fill="#3A2418" opacity="0.4" />
      <ellipse cx="205" cy="190" rx="70" ry="50" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="190" rx="50" ry="34" fill={tint(accentColor, 0.2)} opacity="0.6" />
      <ellipse cx="140" cy="200" rx="22" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <ellipse cx="270" cy="200" rx="22" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="150" rx="20" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="212" cy="146" r="2.5" fill="#1A1A1A" />
      {[[170, 160], [240, 160], [180, 220], [230, 220]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#F5F0E6" opacity="0.6" />
      ))}
    </g>
  );
};

const ElArbolQueCreceHaciaAbajoBajoTierra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 150 Q205 100 260 150 Q250 190 205 195 Q160 190 150 150 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.8" />
      <path d="M150 150 Q205 175 260 150" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[[180, 145], [205, 155], [230, 148], [195, 165], [218, 165]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="9" ry="11" fill={accentColor} stroke={dark} strokeWidth="1.8" />
      ))}
      <rect x="180" y="205" width="50" height="35" fill="#3A2418" stroke={dark} strokeWidth="2.4" />
      <rect x="185" y="212" width="40" height="7" fill="#C9A227" />
    </g>
  );
};

export const grenadaIllustrations: Record<string, IllustrationDefinition> = {
  "la-especia-que-aparece-dibujada-en-la-bandera": { component: LaEspeciaQueApareceDibujadaEnLaBandera },
  "el-primer-parque-de-esculturas-bajo-el-mar": { component: ElPrimerParqueDeEsculturasBajoElMar },
  "el-lago-que-duerme-dentro-de-un-crater-volcanico": { component: ElLagoQueDuermeDentroDeUnCraterVolcanico },
  "el-tambor-que-conserva-cantos-de-africa-occidental": { component: ElTamborQueConservaCantosDeAfricaOccidental },
  "el-pueblo-que-se-vuelve-fiesta-cada-viernes": { component: ElPuebloQueSeVuelveFiestaCadaViernes },
  "el-fuerte-construido-por-francia-en-el-siglo-xviii": { component: ElFuerteConstruidoPorFranciaEnElSigloXviii },
  "el-guiso-de-una-sola-olla-que-es-plato-nacional": { component: ElGuisoDeUnaSolaOllaQueEsPlatoNacional },
  "el-carnaval-donde-la-gente-se-cubre-de-especias": { component: ElCarnavalDondeLaGenteSeCubreDeAceiteYPintura },
  "las-tortugas-que-regresan-cada-ano-a-la-misma-playa": { component: LasTortugasQueRegresanCadaAnoALaMismaPlaya },
  "el-cacao-cuyo-chocolate-se-rastrea-hasta-un-solo-arbol": { component: ElArbolQueCreceHaciaAbajoBajoTierra },
};
