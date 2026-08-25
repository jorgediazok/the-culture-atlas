import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CALENDAR_ROWS = [0, 1, 2, 3];
const CALENDAR_COLS = [0, 1, 2, 3, 4];

const UnoDeLosPaisesMasJovenesDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="130" y="120" width="140" height="120" fill={light} stroke={dark} strokeWidth="3" />
      <rect x="130" y="120" width="140" height="24" fill={dark} />
      <line x1="155" y1="110" x2="155" y2="132" stroke={dark} strokeWidth="4" />
      <line x1="245" y1="110" x2="245" y2="132" stroke={dark} strokeWidth="4" />
      {CALENDAR_ROWS.map((row) =>
        CALENDAR_COLS.map((col) => (
          <rect key={`${row}-${col}`} x={140 + col * 26} y={155 + row * 20} width="20" height="14" fill="none" stroke={dark} strokeWidth="1" opacity="0.4" />
        ))
      )}
      {/* the single highlighted date */}
      <rect x={140 + 2 * 26} y={155 + 1 * 20} width="20" height="14" fill={accentColor} />
    </g>
  );
};

const NEWBORN_LETTER_COLORS = ["#E63946", "#F4A300", "#2A9D8F"];

const ElMonumentoQueSeRepintaCadaAno: IllustrationComponent = () => {
  const dark = "#2B2B2B";
  return (
    <g>
      {NEWBORN_LETTER_COLORS.map((c, i) => (
        <g key={c}>
          <rect x={130 + i * 60} y="130" width="40" height="90" fill={c} stroke={dark} strokeWidth="2.5" />
          <polygon points={`${130 + i * 60},130 ${142 + i * 60},118 ${182 + i * 60},118 ${170 + i * 60},130`} fill={shade(c, 0.15)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const ElMitoFundadorDeLaBatallaDe1389: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* ground */}
      <rect x="100" y="225" width="220" height="15" fill={dark} opacity="0.3" />
      {/* sword, blade tapering to a point driven into the ground */}
      <polygon points="195,150 205,150 200,225" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <rect x="178" y="145" width="44" height="7" rx="2" fill={dark} />
      <rect x="197" y="122" width="6" height="26" fill={dark} />
      <circle cx="200" cy="118" r="6" fill={dark} />
      {/* blackbird */}
      <ellipse cx="260" cy="170" rx="18" ry="10" fill={dark} transform="rotate(-15 260 170)" />
      <circle cx="278" cy="163" r="6" fill={dark} />
      <path d="M260 165 Q245 155 230 160 Q248 162 256 170 Z" fill={dark} />
    </g>
  );
};

const BALLOON_DATA: [number, string][] = [
  [160, "#E63946"],
  [200, "#F4A300"],
  [240, "#2A9D8F"],
];

const UnaDeLasPoblacionesMasJovenesDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {BALLOON_DATA.map(([x, c], i) => {
        const cy = 140 + (i % 2) * 15;
        return (
          <g key={x}>
            <ellipse cx={x} cy={cy} rx="22" ry="28" fill={c} stroke={shade(c, 0.3)} strokeWidth="2" />
            <line x1={x} y1={cy + 28} x2={x} y2="230" stroke={dark} strokeWidth="1.5" />
            <polygon points={`${x - 4},${cy + 28} ${x + 4},${cy + 28} ${x},${cy + 36}`} fill={c} />
          </g>
        );
      })}
    </g>
  );
};

const CRYSTAL_STALACTITES = [150, 180, 220, 250];

const LaCuevaDeMarmolHalladaPorAccidente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* dark cave interior */}
      <path d="M100 240 L100 180 Q200 150 320 180 L320 240 Z" fill={dark} opacity="0.85" />
      {/* stalactites hanging down */}
      {CRYSTAL_STALACTITES.map((x, i) => (
        <polygon key={x} points={`${x - 8},${170 + (i % 2) * 10} ${x + 8},${170 + (i % 2) * 10} ${x},${200 + (i % 2) * 10}`} fill={light} />
      ))}
      {/* stalagmites rising up */}
      <polygon points="130,240 145,240 137,205" fill={light} opacity="0.8" />
      <polygon points="270,240 288,240 279,200" fill={light} opacity="0.8" />
      {/* sparkle glints */}
      <circle cx="200" cy="190" r="3" fill="#fff" opacity="0.9" />
      <circle cx="240" cy="210" r="2.5" fill="#fff" opacity="0.8" />
    </g>
  );
};

const UsaElEuroSinPertenecerALaEurozona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="165" r="65" fill={accentColor} stroke={dark} strokeWidth="4" />
      <circle cx="200" cy="165" r="52" fill="none" stroke={light} strokeWidth="2" opacity="0.6" />
      <text x="200" y="190" fontSize="70" fontWeight="700" fill={light} textAnchor="middle" fontFamily="serif">
        €
      </text>
    </g>
  );
};

const ElQelesheElGorroBlancoDeFieltro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 220 Q140 150 200 140 Q260 150 260 220 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <line x1="200" y1="140" x2="200" y2="220" stroke={accentColor} strokeWidth="2" opacity="0.4" />
      <path d="M140 220 Q200 232 260 220" fill="none" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const PRIZREN_WATER = "#4A7A9C";

const PrizrenCunaDelMovimientoNacionalAlbanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* river */}
      <rect x="90" y="210" width="220" height="30" fill={PRIZREN_WATER} />
      {/* stone bridge arches */}
      <path d="M100 210 Q130 175 160 210" fill="none" stroke={dark} strokeWidth="6" />
      <path d="M160 210 Q190 175 220 210" fill="none" stroke={dark} strokeWidth="6" />
      <rect x="95" y="205" width="215" height="8" fill={dark} />
      {/* minaret beside the bridge */}
      <rect x="260" y="140" width="14" height="65" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M260 140 Q267 120 274 140 Z" fill={dark} />
      <circle cx="267" cy="116" r="3" fill={dark} />
    </g>
  );
};

const CHEESE_HOLES: [number, number][] = [
  [190, 190],
  [210, 200],
  [195, 210],
  [220, 185],
];

const ElQuesoPastorilDeLasMontanasSar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* mountains behind */}
      <polygon points="100,220 150,155 200,220" fill={dark} opacity="0.25" />
      <polygon points="180,220 230,150 280,220" fill={dark} opacity="0.35" />
      {/* cheese wedge */}
      <path d="M150 220 L150 180 L270 200 L270 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M150 180 L175 175 L270 200 L150 180 Z" fill={light} />
      {CHEESE_HOLES.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={dark} opacity="0.5" />
      ))}
    </g>
  );
};

const FLAG_STARS_X = [160, 178, 196, 214, 232, 250];

const LaBanderaDisenadaParaNoRepresentarANadieEnParticular: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* blue field */}
      <rect x="110" y="120" width="180" height="120" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* simplified gold map silhouette */}
      <path d="M170 220 Q160 190 175 175 Q170 160 185 150 Q195 140 210 148 Q225 138 235 155 Q245 165 235 180 Q245 200 225 210 Q210 225 190 218 Q178 225 170 220 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.5" />
      {/* six stars arcing above */}
      {FLAG_STARS_X.map((x) => (
        <path key={x} d="M0 -6 L1.8 -1.8 L6 0 L1.8 1.8 L0 6 L-1.8 1.8 L-6 0 L-1.8 -1.8 Z" fill="#fff" transform={`translate(${x} 135)`} />
      ))}
    </g>
  );
};

const DokufestElFestivalDeDocumentalesDePrizren: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* fortress silhouette on the hill behind */}
      <polygon points="90,240 130,150 170,240" fill={dark} opacity="0.4" />
      <rect x="115" y="165" width="10" height="20" fill={dark} opacity="0.4" />
      <rect x="135" y="165" width="10" height="20" fill={dark} opacity="0.4" />
      {/* projection screen */}
      <rect x="170" y="140" width="140" height="90" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      <rect x="180" y="150" width="120" height="70" fill={light} />
      {/* projected film frame */}
      <rect x="200" y="165" width="80" height="40" fill={accentColor} opacity="0.7" />
      {/* screen stand legs */}
      <line x1="185" y1="230" x2="175" y2="250" stroke={dark} strokeWidth="4" />
      <line x1="295" y1="230" x2="305" y2="250" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LaBesaLaPalabraDeHonorAlbanesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#C68642";
  return (
    <g>
      {/* open house doorway */}
      <rect x="140" y="120" width="120" height="120" fill={light} stroke={dark} strokeWidth="3" />
      <path d="M170 240 L170 165 Q170 150 200 150 Q230 150 230 165 L230 240 Z" fill={dark} opacity="0.6" />
      {/* two forearms reaching in from either side, clasping hands */}
      <path d="M120 210 L185 195" stroke={skin} strokeWidth="14" strokeLinecap="round" />
      <path d="M280 210 L215 195" stroke={skin} strokeWidth="14" strokeLinecap="round" />
      <circle cx="200" cy="197" r="12" fill={skin} stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const kosovoIllustrations: Record<string, IllustrationDefinition> = {
  "uno-de-los-paises-mas-jovenes-del-mundo": { component: UnoDeLosPaisesMasJovenesDelMundo },
  "el-monumento-que-se-repinta-cada-ano": { component: ElMonumentoQueSeRepintaCadaAno },
  "el-mito-fundador-de-la-batalla-de-1389": { component: ElMitoFundadorDeLaBatallaDe1389 },
  "una-de-las-poblaciones-mas-jovenes-de-europa": { component: UnaDeLasPoblacionesMasJovenesDeEuropa },
  "la-cueva-de-marmol-hallada-por-accidente": { component: LaCuevaDeMarmolHalladaPorAccidente },
  "usa-el-euro-sin-pertenecer-a-la-eurozona": { component: UsaElEuroSinPertenecerALaEurozona },
  "el-qeleshe-el-gorro-blanco-de-fieltro": { component: ElQelesheElGorroBlancoDeFieltro },
  "prizren-cuna-del-movimiento-nacional-albanes": { component: PrizrenCunaDelMovimientoNacionalAlbanes },
  "el-queso-pastoril-de-las-montanas-sar": { component: ElQuesoPastorilDeLasMontanasSar },
  "la-bandera-disenada-para-no-representar-a-nadie-en-particular": { component: LaBanderaDisenadaParaNoRepresentarANadieEnParticular },
  "dokufest-el-festival-de-documentales-de-prizren": { component: DokufestElFestivalDeDocumentalesDePrizren },
  "la-besa-la-palabra-de-honor-albanesa": { component: LaBesaLaPalabraDeHonorAlbanesa },
};
