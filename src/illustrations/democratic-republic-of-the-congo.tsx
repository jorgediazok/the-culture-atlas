import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

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

const ElRioMasProfundoDelPlanetaEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#2F6B3A" opacity="0.25" />
      <path d="M90 150 Q160 130 205 160 Q250 190 320 150 L320 210 Q250 240 205 210 Q160 180 90 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M120 168 Q160 158 190 172 M230 185 Q260 195 290 178" stroke="#fff" strokeWidth="2" opacity="0.4" fill="none" />
      <path d="M105 130 L105 160 M300 135 L300 165" stroke="#3A5F3A" strokeWidth="10" opacity="0.5" />
    </g>
  );
};

const LaSegundaSelvaMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[130, 190, 34], [180, 170, 40], [230, 185, 38], [280, 195, 30]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={i % 2 === 0 ? accentColor : "#2F6B3A"} opacity="0.75" stroke={dark} strokeWidth="1.8" />
      ))}
      {[[150, 175], [205, 165], [255, 178]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q${x + 8} ${y - 10} ${x + 16} ${y}`} fill="none" stroke="#1B4B1E" strokeWidth="1.6" opacity="0.5" />
      ))}
      <ellipse cx="205" cy="245" rx="120" ry="10" fill="#8B5A2B" opacity="0.4" />
    </g>
  );
};

const ElParqueMasViejoDeAfricaYSusGorilas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L180 110 L270 250 Z" fill="#5C6B3A" opacity="0.4" />
      <ellipse cx="220" cy="220" rx="35" ry="30" fill="#3A2A1E" stroke={dark} strokeWidth="2.6" />
      <circle cx="220" cy="180" r="22" fill="#3A2A1E" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="220" cy="189" rx="10" ry="6" fill="#5C4A3E" />
      <circle cx="212" cy="177" r="3" fill="#fff" />
      <circle cx="228" cy="177" r="3" fill="#fff" />
      <path d="M190 205 Q175 195 180 220" fill="none" stroke="#3A2A1E" strokeWidth="9" strokeLinecap="round" />
      <path d="M250 205 Q262 198 258 218" fill="none" stroke="#3A2A1E" strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const ElLagoDeLavaMasGrandeJamasObservado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 120 320 240 Z" fill="#1A1A1A" opacity="0.6" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="205" cy="220" rx="80" ry="24" fill="#C1272D" stroke={dark} strokeWidth="3" />
      <path d="M170 215 Q190 200 210 215 Q230 200 245 215" fill="none" stroke="#F5A623" strokeWidth="4" opacity="0.85" />
      <path d="M150 180 L165 195 M260 180 L245 195" stroke="#8B1A1A" strokeWidth="4" opacity="0.6" strokeLinecap="round" />
    </g>
  );
};

const LaRumbaQueHizoBailarATodaAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(175, 235, 1, dark, accentColor)}
      <path d="M195 190 L195 100 Q210 96 210 110 L210 190" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <path d="M180 205 Q170 175 200 172 Q225 175 218 205 Q200 218 180 205 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <circle cx="199" cy="188" r="10" fill="#5C3A21" stroke={dark} strokeWidth="1.4" />
      <rect x="255" y="150" width="6" height="70" fill={dark} />
      <ellipse cx="258" cy="145" rx="14" ry="9" fill="#8B8378" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const LasTelasGeometricasTejidasPorUnReinoReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="115" y="120" width="180" height="120" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      {[0, 1, 2, 3].map((i) => (
        <path key={`a${i}`} d={`M${135 + i * 40} 120 L${155 + i * 40} 180 L${135 + i * 40} 240`} fill="none" stroke={accentColor} strokeWidth="3" />
      ))}
      {[0, 1, 2].map((i) => (
        <path key={`b${i}`} d={`M115 ${140 + i * 35} L295 ${140 + i * 35}`} fill="none" stroke="#8B5A2B" strokeWidth="1.4" opacity="0.5" />
      ))}
    </g>
  );
};

const LasArpasYTocadosDeUnaCorteOlvidada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 240 Q168 160 195 130 L215 130 Q225 140 218 152" fill="none" stroke="#8B5A2B" strokeWidth="10" strokeLinecap="round" />
      <path d="M200 120 Q195 100 205 88 Q215 100 210 120 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="205" cy="112" rx="13" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="209" cy="108" r="1.8" fill="#1a1a1a" />
      <path d="M197 124 Q205 130 213 124" fill="none" stroke={dark} strokeWidth="1.6" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${180 + i * 8} 230 L${203 + i * 3} 135`} stroke="#D9A227" strokeWidth="1.6" />
      ))}
      <path d="M170 230 Q195 240 220 228" fill="none" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const LosPrimatesPacificosQueSoloVivenAqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 230 Q205 195 320 230 L320 250 L90 250 Z" fill="#8B5A2B" opacity="0.4" />
      <path d="M110 230 Q108 160 120 100 M300 230 Q302 160 290 100" stroke="#2F6B3A" strokeWidth="9" opacity="0.5" fill="none" />
      <ellipse cx="205" cy="205" rx="32" ry="26" fill="#4A3A2E" stroke={dark} strokeWidth="2.4" />
      <circle cx="205" cy="168" r="20" fill="#4A3A2E" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="205" cy="176" rx="9" ry="6" fill="#6B5A4C" />
      <circle cx="198" cy="163" r="3" fill="#fff" />
      <circle cx="212" cy="163" r="3" fill="#fff" />
      <path d="M175 200 Q160 190 165 215 M235 200 Q250 190 245 215" fill="none" stroke="#4A3A2E" strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const LosCazadoresQueConocenCadaSonidoDeLaSelva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 250 Q170 190 205 185 Q240 190 240 250 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <path d="M180 190 Q205 160 230 190" fill="none" stroke="#2F6B3A" strokeWidth="6" />
      <rect x="200" y="220" width="10" height="22" fill="#3A2A1E" opacity="0.7" />
      <path d="M100 250 L112 165 Q116 150 128 150 M310 250 L298 165 Q294 150 282 150" stroke="#2F6B3A" strokeWidth="9" opacity="0.5" fill="none" />
      <ellipse cx="120" cy="145" rx="14" ry="8" fill="#3A5F3A" opacity="0.6" />
      <ellipse cx="282" cy="145" rx="14" ry="8" fill="#3A5F3A" opacity="0.6" />
    </g>
  );
};

const ElPanDeMandiocaQueEnvuelveCadaComida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="185" width="60" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <path d="M140 185 L130 175 L200 175 L210 185" fill="#2F6B3A" opacity="0.6" />
      <path d="M140 200 L200 200 M140 215 L200 215" stroke={dark} strokeWidth="1.2" opacity="0.4" />
      <ellipse cx="255" cy="220" rx="45" ry="16" fill="#1B4B1E" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="255" cy="214" rx="28" ry="9" fill={accentColor} opacity="0.8" />
      {[[240, 208], [255, 204], [270, 208]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="3" fill="#3A2A1E" opacity="0.5" />
      ))}
    </g>
  );
};

export const democraticRepublicOfTheCongoIllustrations: Record<string, IllustrationDefinition> = {
  "el-rio-mas-profundo-del-planeta-entero": { component: ElRioMasProfundoDelPlanetaEntero },
  "la-segunda-selva-mas-grande-del-mundo": { component: LaSegundaSelvaMasGrandeDelMundo },
  "el-parque-mas-viejo-de-africa-y-sus-gorilas-de-montana": { component: ElParqueMasViejoDeAfricaYSusGorilas },
  "el-lago-de-lava-mas-grande-jamas-observado": { component: ElLagoDeLavaMasGrandeJamasObservado },
  "la-rumba-que-hizo-bailar-a-toda-africa": { component: LaRumbaQueHizoBailarATodaAfrica },
  "las-telas-geometricas-tejidas-por-un-reino-real": { component: LasTelasGeometricasTejidasPorUnReinoReal },
  "las-arpas-y-tocados-de-una-corte-olvidada": { component: LasArpasYTocadosDeUnaCorteOlvidada },
  "los-primates-pacificos-que-solo-viven-aqui": { component: LosPrimatesPacificosQueSoloVivenAqui },
  "los-cazadores-que-conocen-cada-sonido-de-la-selva": { component: LosCazadoresQueConocenCadaSonidoDeLaSelva },
  "el-pan-de-mandioca-que-envuelve-cada-comida": { component: ElPanDeMandiocaQueEnvuelveCadaComida },
};
