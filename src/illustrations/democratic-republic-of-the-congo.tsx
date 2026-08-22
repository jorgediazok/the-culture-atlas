import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElRioMasProfundoDelPlanetaEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#2F6B3A" opacity="0.25" />
      <path d="M90 150 Q160 130 205 160 Q250 190 320 150 L320 210 Q250 240 205 210 Q160 180 90 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
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
      <circle cx="212" cy="177" r="3" fill="#fff" />
      <circle cx="228" cy="177" r="3" fill="#fff" />
      <path d="M190 205 Q175 195 180 220" fill="none" stroke="#3A2A1E" strokeWidth="9" strokeLinecap="round" />
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
    </g>
  );
};

const LaRumbaQueHizoBailarATodaAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 245 L180 130 Q180 100 210 105 Q225 108 220 130 L220 245" fill="none" stroke="#8B5A2B" strokeWidth="18" strokeLinecap="round" />
      <ellipse cx="180" cy="245" rx="18" ry="10" fill={dark} />
      <path d="M240 240 Q260 220 240 200 M255 235 Q275 215 255 195" fill="none" stroke={accentColor} strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const LasTelasGeometricasTejidasPorUnReinoReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="130" width="170" height="110" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${140 + i * 40} 130 L${160 + i * 40} 185 L${140 + i * 40} 240`} fill="none" stroke={accentColor} strokeWidth="3" />
      ))}
    </g>
  );
};

const LasArpasYTocadosDeUnaCorteOlvidada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 240 Q170 140 220 120 Q250 130 240 150" fill="none" stroke="#8B5A2B" strokeWidth="10" strokeLinecap="round" />
      <circle cx="235" cy="118" r="16" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${180 + i * 8} 230 L${222 + i * 3} 135`} stroke="#D9A227" strokeWidth="1.6" />
      ))}
    </g>
  );
};

const LosPrimatesPacificosQueSoloVivenAqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 220 320 250" fill="none" stroke="#8B5A2B" strokeWidth="10" opacity="0.6" />
      <ellipse cx="205" cy="200" rx="32" ry="26" fill="#4A3A2E" stroke={dark} strokeWidth="2.4" />
      <circle cx="205" cy="165" r="20" fill="#4A3A2E" stroke={dark} strokeWidth="2.2" />
      <circle cx="198" cy="163" r="3" fill="#fff" />
      <circle cx="212" cy="163" r="3" fill="#fff" />
      <path d="M175 195 Q160 185 165 210 M235 195 Q250 185 245 210" fill="none" stroke="#4A3A2E" strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const LosCazadoresQueConocenCadaSonidoDeLaSelva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 250 Q170 190 205 185 Q240 190 240 250 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <path d="M180 190 Q205 160 230 190" fill="none" stroke="#2F6B3A" strokeWidth="6" />
      <path d="M100 250 L120 150 M310 250 L290 150" stroke="#2F6B3A" strokeWidth="10" opacity="0.5" />
    </g>
  );
};

const ElPanDeMandiocaQueEnvuelveCadaComida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="185" width="60" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <path d="M140 185 L130 175 L200 175 L210 185" fill="#2F6B3A" opacity="0.6" />
      <ellipse cx="255" cy="220" rx="45" ry="16" fill="#1B4B1E" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="255" cy="214" rx="28" ry="9" fill={accentColor} opacity="0.8" />
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
