import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RihannaLaHeroinaNacionalMasJoven: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="140" r="18" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <rect x="185" y="155" width="40" height="20" fill="#3A3A3A" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="175" x2="205" y2="230" stroke="#5C3A21" strokeWidth="4" />
      <ellipse cx="205" cy="178" rx="16" ry="10" fill="#8C8C8C" stroke={dark} strokeWidth="2" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line key={deg} x1="205" y1="105" x2="205" y2="120" stroke="#C9A227" strokeWidth="3" transform={`rotate(${deg} 205 118)`} />
      ))}
      <circle cx="205" cy="118" r="6" fill="#C9A227" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaCuevaDeHarrisonElPalacioSubterraneo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 90 L320 90 L320 250 L90 250 Z" fill="#3A3A3A" opacity="0.35" />
      {[130, 175, 230, 275].map((x, i) => (
        <polygon key={x} points={`${x - 10},90 ${x + 10},90 ${x},${125 + i * 5}`} fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
      {[150, 205, 260].map((x, i) => (
        <polygon key={x + "b"} points={`${x - 12},250 ${x + 12},250 ${x},${195 - i * 5}`} fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M90 220 Q205 205 320 220" fill="none" stroke="#1B5E7A" strokeWidth="5" opacity="0.7" />
    </g>
  );
};

const MountGayElRonMasAntiguoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const barrel = (x: number, scale: number) => (
    <g key={x} transform={`translate(${x} 0) scale(${scale})`}>
      <path d="M-20 0 Q-26 30 -20 60 L20 60 Q26 30 20 0 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <rect x="-22" y="14" width="44" height="6" fill="#3A2418" />
      <rect x="-24" y="40" width="48" height="6" fill="#3A2418" />
    </g>
  );
  return (
    <g>
      {barrel(140, 1)}
      {barrel(210, 1.1)}
      {barrel(280, 0.9)}
      <rect x="90" y="238" width="230" height="8" fill="#3A3A3A" opacity="0.5" />
      <path d="M255 150 L255 100 Q255 90 265 90 Q275 90 275 100 L275 150 Z" fill={accentColor} opacity="0.85" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CropOverYElGranKadooment: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="150" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 24} 135 L${x} 90 L${x + 24} 135`} fill="none" stroke="#C9A227" strokeWidth="4" strokeLinecap="round" />
      <path d={`M${x - 15} 230 Q${x - 18} 190 ${x} 185 Q${x + 18} 190 ${x + 15} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
    </g>
  );
  return (
    <g>
      {dancer(160, accentColor)}
      {dancer(255, "#C1272D")}
      <rect x="90" y="238" width="230" height="8" fill="#3A3A3A" opacity="0.5" />
    </g>
  );
};

const ElPezVoladorYElCouCou: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <g transform="translate(205 170) rotate(-15)">
        <path d="M-40 0 Q0 -14 40 0 Q0 10 -40 0 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
        <path d="M-10 -3 Q-25 -35 -50 -30 Q-30 -15 -10 -3 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
        <path d="M-10 3 Q-25 30 -50 28 Q-30 12 -10 3 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
        <polygon points="40,0 52,-6 52,6" fill={accentColor} stroke={dark} strokeWidth="1.8" />
      </g>
    </g>
  );
};

const BridgetownHistoricaYSuGuarnicion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[120, 190, 260].map((x, i) => (
        <g key={x}>
          <rect x={x} y={170 + i * 5} width="55" height={70 - i * 5} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
          <rect x={x - 4} y={160 + i * 5} width="63" height="12" fill={dark} opacity="0.5" />
        </g>
      ))}
      <rect x="150" y="225" width="20" height="8" fill="#3A3A3A" />
      <circle cx="155" cy="230" r="4" fill="#3A3A3A" />
    </g>
  );
};

const ElDiaEnQueBarbadosSeVolvioRepublica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 240 L100 190 L310 190 L310 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.85" />
      <ellipse cx="205" cy="220" rx="60" ry="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M180 165 L185 148 L195 158 L205 140 L215 158 L225 148 L230 165 Z" fill="#C9A227" stroke="#8A6A10" strokeWidth="2" />
    </g>
  );
};

const LasTresWDelCriquet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const batsman = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="140" r="11" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <ellipse cx={x} cy="132" rx="12" ry="7" fill={fill} stroke={dark} strokeWidth="1.6" />
      <rect x={x - 10} y="150" width="20" height="55" fill={fill} stroke={dark} strokeWidth="2" />
      <line x1={x} y1="205" x2={x} y2="235" stroke="#5C3A21" strokeWidth="3" />
    </g>
  );
  return (
    <g>
      {batsman(140, accentColor)}
      {batsman(205, "#C1272D")}
      {batsman(270, tint(accentColor, 0.2))}
      <rect x="90" y="238" width="230" height="8" fill="#5C7A3A" opacity="0.5" />
    </g>
  );
};

const GeorgeWashingtonYSuUnicoViajeAlExterior: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="170" width="110" height="70" fill="#D9C9A3" stroke={dark} strokeWidth="3" />
      <polygon points="140,170 205,135 270,170" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <rect x="190" y="195" width="30" height="45" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <rect x="165" y="185" width="18" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.6" />
      <rect x="227" y="185" width="18" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const ElBajanElAcentoMasDistintivoDelCaribe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[
        { x: 150, fill: accentColor },
        { x: 260, fill: tint(accentColor, 0.2) },
      ].map((p) => (
        <g key={p.x}>
          <circle cx={p.x} cy="150" r="15" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
          <path d={`M${p.x - 20} 230 Q${p.x - 22} 190 ${p.x} 185 Q${p.x + 22} 190 ${p.x + 20} 230 Z`} fill={p.fill} stroke={dark} strokeWidth="2.2" />
        </g>
      ))}
      <path d="M175 130 Q205 110 235 130" fill="none" stroke={dark} strokeWidth="2.5" strokeDasharray="6 5" opacity="0.6" />
    </g>
  );
};

export const barbadosIllustrations: Record<string, IllustrationDefinition> = {
  "rihanna-la-heroina-nacional-mas-joven": { component: RihannaLaHeroinaNacionalMasJoven },
  "la-cueva-de-harrison-el-palacio-subterraneo": { component: LaCuevaDeHarrisonElPalacioSubterraneo },
  "mount-gay-el-ron-mas-antiguo-del-mundo": { component: MountGayElRonMasAntiguoDelMundo },
  "crop-over-y-el-gran-kadooment": { component: CropOverYElGranKadooment },
  "el-pez-volador-y-el-cou-cou": { component: ElPezVoladorYElCouCou },
  "bridgetown-historica-y-su-guarnicion": { component: BridgetownHistoricaYSuGuarnicion },
  "el-dia-en-que-barbados-se-volvio-republica": { component: ElDiaEnQueBarbadosSeVolvioRepublica },
  "las-tres-w-del-criquet": { component: LasTresWDelCriquet },
  "george-washington-y-su-unico-viaje-al-exterior": { component: GeorgeWashingtonYSuUnicoViajeAlExterior },
  "el-bajan-el-acento-mas-distintivo-del-caribe": { component: ElBajanElAcentoMasDistintivoDelCaribe },
};
