import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

const ElTechoNevadoDeTodaAfrica: IllustrationComponent = () => (
  <g>
    <rect x="90" y="220" width="230" height="30" fill="#D9C08A" opacity="0.5" />
    <path d="M110 230 L200 100 L290 230 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.8" />
    <path d="M170 155 L200 100 L230 155 Q200 170 170 155 Z" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="2" />
    <path d="M155 180 Q200 165 245 180" fill="none" stroke="#5C4A3A" strokeWidth="1.6" opacity="0.5" />
  </g>
);

const LaMigracionDeDosMillonesDeAnimales: IllustrationComponent = () => (
  <g>
    <rect x="90" y="150" width="230" height="100" fill="#D9C08A" opacity="0.3" />
    {[[120, 220], [150, 210], [180, 225], [210, 205], [240, 220], [270, 210], [295, 222]].map(([x, y], i) => (
      <g key={i} transform={`translate(${x} ${y}) scale(0.6)`}>
        <path d="M-20 8 Q-22 -6 -10 -10 Q0 -16 10 -10 Q20 -6 18 8 Z" fill="#5C6B6E" stroke="#2E3B3D" strokeWidth="2" />
        <path d="M8 -12 Q16 -22 22 -20 M-8 -12 Q-14 -22 -20 -20" stroke="#2E3B3D" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M-20 6 L-22 20 M0 8 L0 20 M16 6 L18 20" stroke="#2E3B3D" strokeWidth="3" strokeLinecap="round" />
      </g>
    ))}
  </g>
);

const ElCraterVolcanicoMasGrandeDelMundo: IllustrationComponent = () => (
  <g>
    <path d="M90 190 Q200 240 320 190 L320 200 Q200 250 90 200 Z" fill="#8C7B6B" opacity="0.7" />
    <ellipse cx="200" cy="205" rx="130" ry="40" fill="#3A7A45" opacity="0.5" />
    <path d="M90 190 Q200 145 320 190" fill="none" stroke="#5C4A3A" strokeWidth="4" />
    {[[160, 210, 10], [200, 218, 8], [240, 208, 9]].map(([x, y, r], i) => (
      <ellipse key={i} cx={x} cy={y} rx={r} ry={Number(r) * 0.6} fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.6" />
    ))}
  </g>
);

const LaCiudadDePiedraConMilPuertasTalladas: IllustrationComponent = () => (
  <g>
    <rect x="150" y="130" width="100" height="120" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2.6" />
    <path d="M165 250 L165 160 Q165 145 200 145 Q235 145 235 160 L235 250 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.8" />
    {[0, 1, 2, 3, 4, 5].map((row) =>
      [0, 1].map((col) => (
        <circle key={`${row}-${col}`} cx={180 + col * 40} cy={170 + row * 12} r="2.2" fill="#D9A227" />
      ))
    )}
    <circle cx="200" cy="200" r="8" fill="#5C3A21" stroke="#3A2410" strokeWidth="1.6" />
  </g>
);

const ElSaltoQueMideElPrestigioDeUnGuerrero: IllustrationComponent = () => (
  <g>
    {person(155, 220, 0.85, "#3A2A1E", "#C1272D")}
    {person(200, 200, 0.9, "#3A2A1E", "#E8558A")}
    {person(245, 222, 0.85, "#3A2A1E", "#C1272D")}
    <path d="M195 165 L200 145 M205 165 L210 148" stroke="#8B5A2B" strokeWidth="2.4" />
  </g>
);

const ElBarrancoDondeSeEncontraronLosPrimerosHumanos: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L120 100 L280 100 L310 250 Z" fill="#B5651D" stroke="#7A4010" strokeWidth="2.8" />
    <path d="M120 100 Q200 130 280 100" fill="none" stroke="#8A5A10" strokeWidth="1.6" opacity="0.5" />
    <path d="M140 160 Q200 180 260 160" fill="none" stroke="#8A5A10" strokeWidth="1.6" opacity="0.5" />
    <ellipse cx="205" cy="210" rx="16" ry="10" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="1.8" />
    <path d="M197 205 Q205 198 213 205" fill="none" stroke="#8B7355" strokeWidth="1.6" />
  </g>
);

const LaMaderaNegraQueLosArtesanosTallanSinDescanso: IllustrationComponent = () => (
  <g>
    <rect x="185" y="220" width="30" height="30" fill="#2A1F1A" stroke="#150F0A" strokeWidth="2.2" />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <ellipse cx="200" cy={200 - i * 30} rx="20" ry="12" fill="#2A1F1A" stroke="#150F0A" strokeWidth="2.2" />
        <circle cx={190 - (i % 2) * 4} cy={200 - i * 30} r="5" fill="#150F0A" />
        <circle cx={210 + (i % 2) * 4} cy={198 - i * 30} r="5" fill="#150F0A" />
      </g>
    ))}
  </g>
);

const LaIslaQueHueleAClavoDeOlor: IllustrationComponent = () => (
  <g>
    <path d="M150 100 Q170 90 180 105" fill="none" stroke="#3A7A45" strokeWidth="3" />
    {[[160, 150], [180, 170], [195, 200], [180, 225]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 10} ${y + 20} ${x} ${y + 45}`} fill="none" stroke="#2A1F1A" strokeWidth="7" strokeLinecap="round" />
    ))}
    {[[240, 160], [260, 190], [245, 220]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 10} ${y + 20} ${x} ${y + 45}`} fill="none" stroke="#2A1F1A" strokeWidth="7" strokeLinecap="round" />
    ))}
  </g>
);

const LasPinturasEnRocaDeHaceMilesDeAnos: IllustrationComponent = () => (
  <g>
    <path d="M110 250 L130 130 L270 130 L290 250 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.8" />
    {[[160, 190], [190, 180], [220, 195], [175, 210]].map(([x, y], i) => (
      <g key={i} transform={`translate(${x} ${y})`}>
        <path d="M0 -8 L-6 4 L0 0 L6 4 Z" fill="#B5651D" />
        <path d="M0 0 L0 16 M-6 6 L6 6" stroke="#B5651D" strokeWidth="2" />
      </g>
    ))}
  </g>
);

const LaPastaDeMaizQueAcompanaCadaComidaTanzana: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="90" ry="24" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="185" cy="195" rx="32" ry="26" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.4" />
    <ellipse cx="245" cy="205" rx="22" ry="15" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.8" />
    {[[235, 200], [250, 210], [260, 198]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x + 6} ${y - 8}`} stroke="#1B4B1E" strokeWidth="2" strokeLinecap="round" />
    ))}
  </g>
);

export const tanzaniaIllustrations: Record<string, IllustrationDefinition> = {
  "el-techo-nevado-de-toda-africa": { component: ElTechoNevadoDeTodaAfrica },
  "la-migracion-de-dos-millones-de-animales": { component: LaMigracionDeDosMillonesDeAnimales },
  "el-crater-volcanico-mas-grande-del-mundo": { component: ElCraterVolcanicoMasGrandeDelMundo },
  "la-ciudad-de-piedra-con-mil-puertas-talladas": { component: LaCiudadDePiedraConMilPuertasTalladas },
  "el-salto-que-mide-el-prestigio-de-un-guerrero": { component: ElSaltoQueMideElPrestigioDeUnGuerrero },
  "el-barranco-donde-se-encontraron-los-primeros-humanos": { component: ElBarrancoDondeSeEncontraronLosPrimerosHumanos },
  "la-madera-negra-que-los-artesanos-tallan-sin-descanso": { component: LaMaderaNegraQueLosArtesanosTallanSinDescanso },
  "la-isla-que-huele-a-clavo-de-olor": { component: LaIslaQueHueleAClavoDeOlor },
  "las-pinturas-en-roca-de-hace-miles-de-anos": { component: LasPinturasEnRocaDeHaceMilesDeAnos },
  "la-pasta-de-maiz-que-acompana-cada-comida-tanzana": { component: LaPastaDeMaizQueAcompanaCadaComidaTanzana },
};
