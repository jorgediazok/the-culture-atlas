import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElFadoLaMusicaDeLaNostalgiaPortuguesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="150" cy="140" r="16" fill={skin} />
      <path d="M120 155 Q150 140 180 155 L172 250 L128 250 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <path d="M115 165 Q100 175 105 195" stroke="#1A1A1A" strokeWidth="6" fill="none" opacity="0.7" />
      <circle cx="255" cy="195" r="38" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <circle cx="255" cy="195" r="14" fill="#3E2A1A" />
      <line x1="255" y1="157" x2="255" y2="140" stroke={dark} strokeWidth="4" />
      <circle cx="248" cy="140" r="3" fill={dark} />
      <circle cx="262" cy="140" r="3" fill={dark} />
    </g>
  );
};

const LaEraDeLosDescubrimientosUnImperioDiminuto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 230 L290 230 L270 250 L140 250 Z" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="230" x2="205" y2="120" stroke="#5C3A21" strokeWidth="5" />
      <path d="M205 130 L270 165 Q260 175 205 180 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M205 150 L155 180 Q165 190 205 195 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#1B5E7A" opacity="0.5" />
    </g>
  );
};

const BacalaoMilManerasDeCocinarUnPescadoQueNoTienen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="150" y1="90" x2="260" y2="90" stroke="#5C3A21" strokeWidth="4" />
      <path d="M205 95 Q170 100 165 150 Q160 190 190 210 Q205 218 220 210 Q250 190 245 150 Q240 100 205 95 Z" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="95" x2="205" y2="210" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="150" cy="230" rx="90" ry="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[120, 150, 180].map((x) => (
        <rect key={x} x={x - 8} y="205" width="16" height="30" fill="#E8C078" stroke={dark} strokeWidth="2" />
      ))}
      <circle cx="255" cy="225" r="10" fill={accentColor} opacity="0.8" />
    </g>
  );
};

const LosAzulejosQueCubrenFachadasEnteras: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="100" width="220" height="150" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (
          <rect key={`${row}-${col}`} x={110 + col * 34} y={110 + row * 28} width="30" height="24" fill={(row + col) % 2 === 0 ? accentColor : tint(accentColor, 0.35)} stroke={dark} strokeWidth="1" opacity="0.85" />
        ))
      )}
    </g>
  );
};

const ElTerremotoDeLisboaDe1755: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="150" width="70" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-4 135 200)" />
      <rect x="180" y="130" width="70" height="120" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" transform="rotate(3 215 190)" />
      <rect x="255" y="160" width="65" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-2 288 205)" />
      <path d="M150 150 L160 190 L145 220 L155 250" stroke={dark} strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M90 250 L320 250" stroke={dark} strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const LaTorreDeBelemPuntoDePartidaDeUnImperio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="150" width="60" height="100" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <rect x="165" y="120" width="80" height="35" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      {[175, 195, 215, 230].map((x) => (
        <rect key={x} x={x} y="112" width="8" height="12" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#1B5E7A" opacity="0.5" />
      {[190, 220].map((x) => (
        <rect key={x} x={x} y="185" width="14" height="20" fill={accentColor} opacity="0.6" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElPastelDeNataYSuRecetaDeMonjas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 240 Q150 190 205 190 Q260 190 260 240 Z" fill="#E8C078" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="55" ry="16" fill="#F5E7A8" stroke={dark} strokeWidth="2.5" />
      <path d="M170 195 Q205 205 240 195" fill="none" stroke="#8B5A2B" strokeWidth="3" opacity="0.7" />
      {[170, 200, 230].map((x) => (
        <path key={x} d={`M${x} 240 Q${x} 220 ${x + 8} 210`} stroke={accentColor} strokeWidth="2.5" fill="none" opacity="0.6" />
      ))}
    </g>
  );
};

const FatimaElSantuarioDeLasAparicionesDe1917: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="170" y="160" width="70" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="195" y="110" width="20" height="60" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="192,110 205,90 218,110" fill={dark} opacity="0.5" />
      <ellipse cx="205" cy="245" rx="115" ry="10" fill="#9E9A92" opacity="0.4" />
      {[130, 160, 250, 280].map((x) => (
        <circle key={x} cx={x} cy="235" r="5" fill={accentColor} opacity="0.8" />
      ))}
    </g>
  );
};

const ElPaisConLasFronterasMasViejasDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="140" width="170" height="110" rx="4" fill="#E8DCC0" stroke={dark} strokeWidth="3" transform="rotate(-3 205 195)" />
      <ellipse cx="125" cy="195" rx="10" ry="55" fill="#D4C098" stroke={dark} strokeWidth="2" transform="rotate(-3 125 195)" />
      <ellipse cx="285" cy="195" rx="10" ry="55" fill="#D4C098" stroke={dark} strokeWidth="2" transform="rotate(-3 285 195)" />
      <circle cx="240" cy="220" r="20" fill={accentColor} stroke={dark} strokeWidth="2.5" opacity="0.85" />
    </g>
  );
};

const ElNumeroDeEmigrantesPortuguesesEnElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="170" width="110" height="80" rx="8" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="155" width="40" height="20" rx="4" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="150" y1="210" x2="260" y2="210" stroke={dark} strokeWidth="2" opacity="0.4" />
      {[[110, 190], [290, 200], [270, 140]].map(([x, y], i) => (
        <rect key={`${x}-${y}`} x={x - 12} y={y - 10} width="24" height="18" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.8" transform={`rotate(${i % 2 === 0 ? -10 : 10} ${x} ${y})`} />
      ))}
    </g>
  );
};

export const portugalIllustrations: Record<string, IllustrationDefinition> = {
  "el-fado-la-musica-de-la-nostalgia-portuguesa": { component: ElFadoLaMusicaDeLaNostalgiaPortuguesa },
  "la-era-de-los-descubrimientos-un-imperio-diminuto": { component: LaEraDeLosDescubrimientosUnImperioDiminuto },
  "bacalao-mil-maneras-de-cocinar-un-pescado-que-no-tienen": { component: BacalaoMilManerasDeCocinarUnPescadoQueNoTienen },
  "los-azulejos-que-cubren-fachadas-enteras": { component: LosAzulejosQueCubrenFachadasEnteras },
  "el-terremoto-de-lisboa-de-1755": { component: ElTerremotoDeLisboaDe1755 },
  "la-torre-de-belem-punto-de-partida-de-un-imperio": { component: LaTorreDeBelemPuntoDePartidaDeUnImperio },
  "el-pastel-de-nata-y-su-receta-de-monjas": { component: ElPastelDeNataYSuRecetaDeMonjas },
  "fatima-el-santuario-de-las-apariciones-de-1917": { component: FatimaElSantuarioDeLasAparicionesDe1917 },
  "el-pais-con-las-fronteras-mas-viejas-de-europa": { component: ElPaisConLasFronterasMasViejasDeEuropa },
  "el-numero-de-emigrantes-portugueses-en-el-mundo": { component: ElNumeroDeEmigrantesPortuguesesEnElMundo },
};
