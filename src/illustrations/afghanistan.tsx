import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BudasDeBamiyanGigantesTallados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L100 130 Q205 90 320 130 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M175 250 L175 115 Q205 100 235 115 L235 250 Z" fill="#F5F0E6" opacity="0.15" stroke={dark} strokeWidth="2.5" strokeDasharray="6 5" />
      <path d="M188 250 Q188 200 205 190 Q222 200 222 250 Z" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
    </g>
  );
};

const EncrucijadaDeLaRutaDeLaSeda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 245 Q205 260 320 245" fill="none" stroke="#B7752E" strokeWidth="4" opacity="0.4" />
      {[[140, 220], [190, 225], [240, 220]].map(([x, y], i) => (
        <g key={x as number}>
          <path d={`M${(x as number) - 20} ${(y as number) + 15} Q${x} ${(y as number) - 10} ${(x as number) + 25} ${(y as number) + 15} L${(x as number) + 20} ${(y as number) + 22} L${(x as number) - 16} ${(y as number) + 22} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <rect x={(x as number) - 6} y={(y as number) - 22} width="12" height="18" fill={dark} opacity="0.7" />
        </g>
      ))}
      <path d="M150 190 L160 150 M270 190 L280 150" stroke={dark} strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const BuzkashiElDeporteNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const horse1 = "#6B4C3A";
  const horse2 = "#8B5A2B";
  return (
    <g>
      <path d="M110 245 Q140 195 195 205 Q220 208 225 225 L215 245 Z" fill={horse1} stroke={dark} strokeWidth="2.5" />
      <path d="M285 245 Q260 195 215 200 Q195 202 190 218 L200 245 Z" fill={horse2} stroke={dark} strokeWidth="2.5" />
      <circle cx="165" cy="180" r="13" fill={skin} />
      <circle cx="245" cy="178" r="13" fill={skin} />
      <path d="M150 195 Q165 188 182 198 L178 220 L158 220 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M230 193 Q245 186 262 196 L258 218 L238 218 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="205" rx="14" ry="9" fill="#3E2712" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LapislazuliLaMinaMasAntiguaDelMundo: IllustrationComponent = () => (
  <g>
    <path d="M120 250 Q140 160 205 150 Q270 160 290 250 Z" fill="#8B7355" opacity="0.6" />
    <path d="M175 220 L205 165 L235 220 Z" fill="#1B3A6B" stroke="#0F2647" strokeWidth="2.5" />
    <path d="M195 200 L205 185 L215 205 L205 215 Z" fill="#D4AF37" opacity="0.85" />
    <path d="M180 213 L188 198 M225 210 L218 195" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
    <rect x="185" y="230" width="40" height="20" fill="#4A4A4A" />
  </g>
);

const MinareteDeJamLaTorrePerdida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="190" y="100" width="30" height="145" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[120, 145, 170, 195, 220].map((y) => (
        <line key={y} x1="190" y1={y} x2="220" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      <path d="M190 100 Q205 80 220 100 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <path d="M100 245 Q150 200 205 245" fill="none" stroke="#3D8FB0" strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const RumiElPoetaQueNacioEnBalj: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="150" r="16" fill="#C68642" />
      <path d="M205 130 Q185 120 190 105" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M175 175 Q205 155 235 175 Q245 210 225 250 L185 250 Q165 210 175 175 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M165 200 Q205 220 245 200" fill="none" stroke={tint(accentColor, 0.4)} strokeWidth="6" opacity="0.7" />
      <rect x="120" y="220" width="45" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2" transform="rotate(-8 142 235)" />
    </g>
  );
};

const CometasDeKabul: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="160,100 190,150 160,200 130,150" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="160" y1="100" x2="160" y2="200" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      <line x1="130" y1="150" x2="190" y2="150" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      <polygon points="255,130 280,175 255,220 230,175" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.5" />
      <line x1="190" y1="150" x2="230" y2="175" stroke="#B0B8BF" strokeWidth="1.5" />
      <line x1="160" y1="200" x2="240" y2="240" stroke="#B0B8BF" strokeWidth="1.5" />
    </g>
  );
};

const NomadasKuchiLaVidaItinerante: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <path d="M120 245 Q150 190 200 205 Q225 210 230 230 L220 245 Z" fill="#6B4C3A" stroke={dark} strokeWidth="2.5" />
      <path d="M150 205 Q165 180 185 195 Q178 205 170 210 Z" fill="#6B4C3A" />
      <circle cx="245" cy="195" r="13" fill={skin} />
      <path d="M230 210 Q245 202 262 215 L258 245 L238 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="290" cy="235" rx="18" ry="14" fill="#8B7355" stroke={dark} strokeWidth="2" />
      <path d="M282 222 L282 210 M298 222 L298 210" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const HeratCiudadDeLosMinaretes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[140, -4], [190, 2], [240, -3], [280, 5]].map(([x, deg], i) => (
        <g key={x as number} transform={`rotate(${deg} ${x} 240)`}>
          <rect x={(x as number) - 10} y="120" width="20" height="120" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
          <path d={`M${(x as number) - 10} 120 Q${x} 100 ${(x as number) + 10} 120 Z`} fill="#0B6E4F" />
        </g>
      ))}
    </g>
  );
};

const GranadasDeKandahar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="180" cy="190" r="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 158 L180 148 L190 158 Z" fill="#2E6B5E" />
      <circle cx="255" cy="200" r="30" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M245 173 L255 163 L265 173 Z" fill="#2E6B5E" />
      <path d="M225 205 Q240 195 255 205" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={165 + (i % 4) * 10} cy={200 + Math.floor(i / 4) * 12} r="3.5" fill="#D4AF37" />
      ))}
    </g>
  );
};

const LasAlfombrasAfganasAnudadasAMano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* vertical loom frame */}
      <rect x="100" y="90" width="210" height="15" fill="#6B4A2F" />
      <rect x="100" y="235" width="210" height="15" fill="#6B4A2F" />
      <rect x="100" y="90" width="12" height="160" fill="#6B4A2F" />
      <rect x="298" y="90" width="12" height="160" fill="#6B4A2F" />
      {/* woven carpet with geometric diamonds */}
      <rect x="120" y="110" width="170" height="120" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[
        [150, 140],
        [205, 140],
        [260, 140],
        [150, 195],
        [205, 195],
        [260, 195],
      ].map(([x, y]) => (
        <polygon key={`${x}-${y}`} points={`${x},${y - 18} ${x + 18},${y} ${x},${y + 18} ${x - 18},${y}`} fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* warp threads still hanging below */}
      {[130, 150, 170, 190, 210, 230, 250, 270].map((x) => (
        <line key={x} x1={x} y1="230" x2={x} y2="245" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      ))}
    </g>
  );
};

const ElOroDeBactrianaElTesoroDeTillyaTepe: IllustrationComponent = () => {
  const gold = "#D4AF37";
  const dark = shade(gold, 0.35);
  return (
    <g>
      {/* crown band */}
      <path d="M140 190 Q205 210 270 190 L270 205 Q205 225 140 205 Z" fill={gold} stroke={dark} strokeWidth="2.5" />
      {/* five tree-like spikes */}
      {[150, 180, 205, 230, 260].map((x, i) => (
        <path key={x} d={`M${x} 195 L${x - 10} ${150 - (i % 2) * 10} L${x} ${140 - (i % 2) * 10} L${x + 10} ${150 - (i % 2) * 10} Z`} fill={gold} stroke={dark} strokeWidth="2" />
      ))}
      {/* hanging ornament discs */}
      {[160, 190, 220, 250].map((x) => (
        <circle key={x} cx={x} cy="212" r="5" fill={gold} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* central gemstone */}
      <circle cx="205" cy="150" r="8" fill="#8B1A2B" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElGalgoAfganoElPerroDeLasMontanas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  return (
    <g>
      {/* body, running pose */}
      <path d="M140 200 Q150 180 190 178 Q230 176 255 195 Q260 200 250 205 L245 220 L155 222 L148 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head with long silky ear */}
      <circle cx="150" cy="185" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M140 190 Q115 195 108 220" fill="none" stroke={tint(accentColor, 0.2)} strokeWidth="7" strokeLinecap="round" opacity="0.85" />
      {/* long silky tail */}
      <path d="M248 205 Q285 195 295 215" fill="none" stroke={tint(accentColor, 0.2)} strokeWidth="6" strokeLinecap="round" />
      {/* legs mid-stride */}
      <path d="M170 220 Q160 235 175 245" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <path d="M200 222 Q195 240 210 248" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <path d="M230 220 Q245 232 235 245" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const ElKabuliPalawElPlatoNacionalAfgano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const carrot = "#E8912D";
  const raisin = "#3E2712";
  return (
    <g>
      {/* platter */}
      <ellipse cx="205" cy="215" rx="100" ry="26" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="3" />
      {/* mound of rice */}
      <path d="M140 210 Q145 180 205 178 Q265 180 270 210 Q260 225 205 225 Q150 225 140 210 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      {/* carrot strips */}
      {[
        [165, 195, 20],
        [195, 190, -20],
        [225, 195, 20],
        [250, 200, -20],
      ].map(([x, y, rot]) => (
        <rect key={x} x={x} y={y} width="18" height="5" fill={carrot} transform={`rotate(${rot} ${x} ${y})`} />
      ))}
      {/* raisins */}
      {[
        [175, 205],
        [205, 200],
        [235, 207],
        [190, 212],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill={raisin} />
      ))}
      {/* lamb pieces peeking at the base */}
      <ellipse cx="160" cy="215" rx="16" ry="10" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="255" cy="213" rx="16" ry="10" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElAttanLaDanzaNacionalEnCirculo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  // 5 dancer positions arranged in a rough circle around (205,175), precomputed offline
  const positions: [number, number][] = [
    [205, 90],
    [286, 148],
    [254, 240],
    [156, 240],
    [124, 148],
  ];
  return (
    <g>
      {positions.map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y - 14} r="10" fill={skin} stroke={dark} strokeWidth="2" />
          <path d={`M${x - 11} ${y - 2} Q${x} ${y - 8} ${x + 11} ${y - 2} L${x + 8} ${y + 30} L${x - 8} ${y + 30} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x - 11} ${y + 5} L${x - 25} ${y - 5}`} stroke={skin} strokeWidth="6" strokeLinecap="round" />
          <path d={`M${x + 11} ${y + 5} L${x + 25} ${y - 5}`} stroke={skin} strokeWidth="6" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

export const afghanistanIllustrations: Record<string, IllustrationDefinition> = {
  "budas-de-bamiyan-gigantes-tallados": { component: BudasDeBamiyanGigantesTallados },
  "encrucijada-de-la-ruta-de-la-seda": { component: EncrucijadaDeLaRutaDeLaSeda },
  "buzkashi-el-deporte-nacional": { component: BuzkashiElDeporteNacional },
  "lapislazuli-la-mina-mas-antigua-del-mundo": { component: LapislazuliLaMinaMasAntiguaDelMundo },
  "minarete-de-jam-la-torre-perdida": { component: MinareteDeJamLaTorrePerdida },
  "rumi-el-poeta-que-nacio-en-balj": { component: RumiElPoetaQueNacioEnBalj },
  "cometas-de-kabul": { component: CometasDeKabul },
  "nomadas-kuchi-la-vida-itinerante": { component: NomadasKuchiLaVidaItinerante },
  "herat-ciudad-de-los-minaretes": { component: HeratCiudadDeLosMinaretes },
  "granadas-de-kandahar": { component: GranadasDeKandahar },
  "las-alfombras-afganas-anudadas-a-mano": { component: LasAlfombrasAfganasAnudadasAMano },
  "el-oro-de-bactriana-el-tesoro-de-tillya-tepe": { component: ElOroDeBactrianaElTesoroDeTillyaTepe },
  "el-galgo-afgano-el-perro-de-las-montanas": { component: ElGalgoAfganoElPerroDeLasMontanas },
  "el-kabuli-palaw-el-plato-nacional-afgano": { component: ElKabuliPalawElPlatoNacionalAfgano },
  "el-attan-la-danza-nacional-en-circulo": { component: ElAttanLaDanzaNacionalEnCirculo },
};
