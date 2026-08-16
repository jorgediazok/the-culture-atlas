import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CasiMilIslasSetentaLenguas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.55" />
      {[[130, 160, 18], [175, 195, 24], [220, 150, 14], [260, 190, 20], [290, 145, 12], [150, 220, 15]].map(([x, y, r]) => (
        <path key={x as number} d={`M${(x as number) - (r as number)} ${y} Q${x} ${(y as number) - (r as number) * 1.3} ${(x as number) + (r as number)} ${y} Q${x} ${(y as number) + (r as number) * 0.4} ${(x as number) - (r as number)} ${y} Z`} fill="#4A8F4E" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const SonidoDeHierroDeGuadalcanal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.65" />
      <line x1="205" y1="235" x2="205" y2="130" stroke="#8B8378" strokeWidth="6" transform="rotate(8 205 235)" />
      <path d="M195 140 L225 140 L220 155 L200 155 Z" fill="#8B8378" stroke={dark} strokeWidth="2" transform="rotate(8 205 235)" />
      <path d="M175 225 L245 225 L230 245 L190 245 Z" fill={dark} opacity="0.5" />
      <path d="M170 230 Q160 220 165 205 M240 232 Q250 222 245 208" fill="none" stroke="#F4A300" strokeWidth="2" opacity="0.5" />
    </g>
  );
};

// Points along a hanging-strand curve from (150,130) to (260,130), precomputed offline.
const SHELL_STRAND_POINTS: [number, number][] = [
  [150, 130], [162, 161], [174, 188], [187, 208], [199, 219],
  [211, 219], [223, 208], [236, 188], [248, 161], [260, 130],
];

const DineroDeConchasDeLangaLanga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const shell = "#F5EFE0";
  return (
    <g>
      <path d="M150 130 Q205 145 260 130" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      {SHELL_STRAND_POINTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="8" fill={i % 2 === 0 ? accentColor : shell} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const TierraBajoTenenciaConsuetudinaria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2E7D32";
  return (
    <g>
      <rect x="120" y="150" width="170" height="90" fill={green} opacity="0.5" stroke={dark} strokeWidth="2.5" strokeDasharray="6 4" />
      <line x1="205" y1="235" x2="205" y2="150" stroke="#5C3A1E" strokeWidth="6" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M205 ${180 - i * 20} Q${185 - i * 3} ${165 - i * 20} 205 ${150 - i * 20}`} stroke={accentColor} strokeWidth="5" strokeLinecap="round" fill="none" opacity={1 - i * 0.15} />
      ))}
      <path d="M205 150 Q225 155 205 170 Q185 155 205 150 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const IslasDePiedraArtificiales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const stone = "#8B8378";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={water} opacity="0.55" />
      <ellipse cx="205" cy="210" rx="90" ry="20" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2.5" />
      {[165, 205, 245].map((x) => (
        <path key={x} d={`M${x - 14} 205 L${x - 10} 180 L${x + 10} 180 L${x + 14} 205 Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      {[165, 205, 245].map((x) => (
        <path key={`r${x}`} d={`M${x - 12} 180 L${x} 168 L${x + 12} 180 Z`} fill={dark} opacity="0.5" />
      ))}
    </g>
  );
};

const SantuariosDeCraneos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bone = "#F5F0E6";
  return (
    <g>
      <rect x="115" y="200" width="180" height="20" fill="#8B8378" stroke={shade("#8B8378", 0.3)} strokeWidth="2.5" />
      {[145, 180, 215, 250].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="185" rx="14" ry="16" fill={bone} stroke={dark} strokeWidth="2" />
          <ellipse cx={x - 5} cy="183" rx="3" ry="4" fill="#1A1A1A" />
          <ellipse cx={x + 5} cy="183" rx="3" ry="4" fill="#1A1A1A" />
          <rect x={x - 6} y="192" width="12" height="4" fill="#1A1A1A" opacity="0.5" />
        </g>
      ))}
      <rect x="190" y="220" width="30" height="15" fill={accentColor} opacity="0.4" />
    </g>
  );
};

const OrquestasDeFlautasDePan: IllustrationComponent = ({ accentColor }) => {
  const bamboo = "#B8A93A";
  return (
    <g>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={140 + i * 20} y={230 - (i < 4 ? i * 18 : (6 - i) * 18)} width="14" height={90 + (i < 4 ? i * 18 : (6 - i) * 18)} fill={i % 2 === 0 ? bamboo : accentColor} stroke={shade(bamboo, 0.3)} strokeWidth="1.5" />
      ))}
      <path d="M130 232 Q205 240 300 232" fill="none" stroke="#8B5A2B" strokeWidth="6" />
    </g>
  );
};

const ElAtolonDeCoralMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const lagoon = "#26C6DA";
  return (
    <g>
      <ellipse cx="205" cy="175" rx="95" ry="55" fill={accentColor} stroke={dark} strokeWidth="4" />
      <ellipse cx="205" cy="175" rx="65" ry="34" fill={lagoon} stroke={shade(lagoon, 0.3)} strokeWidth="2" />
      {[[160, 150], [250, 165]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 8} ${(y as number) - 6} ${(x as number) + 16} ${y}`} fill="none" stroke="#4A8F4E" strokeWidth="4" strokeLinecap="round" />
      ))}
    </g>
  );
};

const CulturaDeLaNuezDeBetel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const nut = "#8B5A2B";
  return (
    <g>
      <ellipse cx="175" cy="190" rx="22" ry="26" fill={nut} stroke={shade(nut, 0.3)} strokeWidth="2.5" />
      <line x1="175" y1="164" x2="175" y2="216" stroke={shade(nut, 0.4)} strokeWidth="1.5" opacity="0.5" />
      <path d="M225 165 Q210 180 220 205 Q235 220 250 205 Q245 185 235 175 Q230 168 225 165 Z" fill="#4A8F4E" stroke={shade("#4A8F4E", 0.3)} strokeWidth="2.5" />
      <ellipse cx="270" cy="215" rx="18" ry="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CanoasDeGuerraYElNguzunguzu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const pearl = "#E8DCC0";
  return (
    <g>
      <path d="M130 220 Q160 205 220 210 Q270 214 285 200 L290 208 Q270 225 220 222 Q160 218 130 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="288" cy="196" rx="16" ry="20" fill={pearl} stroke={shade(pearl, 0.3)} strokeWidth="2.5" transform="rotate(-20 288 196)" />
      <path d="M280 190 Q288 185 296 190" fill="none" stroke={dark} strokeWidth="1.5" transform="rotate(-20 288 196)" />
      <circle cx="284" cy="192" r="2" fill="#1A1A1A" transform="rotate(-20 288 196)" />
    </g>
  );
};

export const solomonIslandsIllustrations: Record<string, IllustrationDefinition> = {
  "casi-mil-islas-setenta-lenguas": { component: CasiMilIslasSetentaLenguas },
  "sonido-de-hierro-de-guadalcanal": { component: SonidoDeHierroDeGuadalcanal },
  "dinero-de-conchas-de-langa-langa": { component: DineroDeConchasDeLangaLanga },
  "tierra-bajo-tenencia-consuetudinaria": { component: TierraBajoTenenciaConsuetudinaria },
  "islas-de-piedra-artificiales": { component: IslasDePiedraArtificiales },
  "santuarios-de-craneos": { component: SantuariosDeCraneos },
  "orquestas-de-flautas-de-pan": { component: OrquestasDeFlautasDePan },
  "el-atolon-de-coral-mas-grande-del-mundo": { component: ElAtolonDeCoralMasGrandeDelMundo },
  "cultura-de-la-nuez-de-betel": { component: CulturaDeLaNuezDeBetel },
  "canoas-de-guerra-y-el-nguzunguzu": { component: CanoasDeGuerraYElNguzunguzu },
};
