import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BakuBajoElNivelDelMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 200 320 240 L320 250 L90 250 Z" fill="#3D8FB0" opacity="0.6" />
      {[[140, 235, 40], [190, 220, 55], [245, 230, 45], [280, 210, 35]].map(([x, y, h], i) => (
        <rect key={x as number} x={(x as number) - 15} y={(y as number) - (h as number)} width="30" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M215 175 Q205 150 195 175 L195 220 L215 220 Z" fill={dark} />
    </g>
  );
};

const YanarDagMontanaEnLlamas: IllustrationComponent = () => (
  <g>
    <path d="M100 250 Q150 200 205 220 Q260 200 310 250 Z" fill="#5C4A3A" />
    {[[140, 220], [175, 205], [210, 215], [245, 200], [280, 225]].map(([x, y], i) => (
      <path key={x as number} d={`M${x} ${y} Q${(x as number) - 8} ${(y as number) - 25} ${x} ${(y as number) - 40} Q${(x as number) + 8} ${(y as number) - 25} ${x} ${y} Z`} fill={i % 2 === 0 ? "#F4A300" : "#E85D04"} opacity="0.9" />
    ))}
  </g>
);

const AteshgahTemploDelFuego: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="205,90 300,155 265,250 145,250 110,155" fill="none" stroke={dark} strokeWidth="3" />
      <polygon points="205,90 300,155 265,250 145,250 110,155" fill={accentColor} opacity="0.15" />
      {[[145, 220], [180, 235], [230, 235], [265, 220]].map(([x, y]) => (
        <rect key={x as number} x={(x as number) - 10} y={(y as number) - 25} width="20" height="25" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M195 210 Q205 175 200 150 Q212 178 215 210 Z" fill="#F4A300" />
    </g>
  );
};

const AlfombrasAzerbaiyanasUnesco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="130" width="170" height="110" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="140" y="150" width="130" height="70" fill="none" stroke="#F5F0E6" strokeWidth="3" />
      {[[170, 165], [205, 165], [240, 165], [170, 205], [205, 205], [240, 205]].map(([x, y]) => (
        <polygon key={`${x}-${y}`} points={`${x},${(y as number) - 10} ${(x as number) + 10},${y} ${x},${(y as number) + 10} ${(x as number) - 10},${y}`} fill="#F5F0E6" opacity="0.85" />
      ))}
    </g>
  );
};

const VolcanesDeLodoMasNumerosos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[140, 240, 40], [205, 250, 55], [270, 240, 42]].map(([x, y, r], i) => (
        <g key={x as number}>
          <path d={`M${(x as number) - (r as number)} ${y} Q${x} ${(y as number) - (r as number) * 1.6} ${(x as number) + (r as number)} ${y} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
          <ellipse cx={x} cy={(y as number) - (r as number) * 1.5} rx="8" ry="5" fill={dark} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const TorresDeLaLlamaBaku: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 Q140 170 165 130 Q175 110 185 130 Q195 170 180 250 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <path d="M185 250 Q175 150 205 95 Q215 75 225 95 Q245 150 225 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M225 250 Q218 175 240 140 Q250 122 260 140 Q272 175 255 250 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <line x1="185" y1="130" x2="225" y2="130" stroke="#F4A300" strokeWidth="2" opacity="0.7" />
      <line x1="185" y1="170" x2="225" y2="170" stroke="#F4A300" strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const CaviarEsturionDelCaspio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 170 Q160 155 220 165 Q270 172 300 180 Q270 190 220 187 Q160 185 110 170 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="290,178 315,168 315,192" fill={dark} />
      <circle cx="140" cy="167" r="3" fill="#1A1A1A" />
      <circle cx="205" cy="230" r="35" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {Array.from({ length: 10 }).map((_, i) => (
        <circle key={i} cx={190 + (i % 5) * 8} cy={220 + Math.floor(i / 5) * 12} r="3" fill="#1C2833" />
      ))}
    </g>
  );
};

const AshiqLosBardosViajeros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="200" cy="140" r="22" fill={skin} />
      <path d="M180 165 Q200 155 225 168 L235 240 L170 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="235" y1="175" x2="270" y2="90" stroke="#8B5A2B" strokeWidth="4" />
      <ellipse cx="255" cy="175" rx="26" ry="16" fill="#D9BE8F" stroke={dark} strokeWidth="2" transform="rotate(-30 255 175)" />
      <line x1="245" y1="165" x2="265" y2="185" stroke={dark} strokeWidth="1.5" opacity="0.7" />
    </g>
  );
};

const NowruzAnoNuevoPersa: IllustrationComponent = () => (
  <g>
    <ellipse cx="140" cy="245" rx="20" ry="6" fill="#F4A300" opacity="0.8" />
    <path d="M130 245 Q135 220 140 210 Q145 220 150 245 Z" fill="#E85D04" />
    <ellipse cx="270" cy="245" rx="20" ry="6" fill="#F4A300" opacity="0.8" />
    <path d="M260 245 Q265 220 270 210 Q275 220 280 245 Z" fill="#E85D04" />
    <circle cx="205" cy="150" r="18" fill="#8B5A2B" />
    <path d="M190 175 L220 175 L225 220 L235 240 L175 240 L185 220 Z" fill="#2E7D32" />
    <path d="M180 210 Q205 195 230 210" fill="none" stroke="#F5F0E6" strokeWidth="3" />
  </g>
);

const BoomPetroleroPrimerPozo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 90 L215 90 L235 190 L175 190 Z" fill="none" stroke="#5C4A3A" strokeWidth="4" />
      <line x1="180" y1="150" x2="230" y2="150" stroke="#5C4A3A" strokeWidth="3" />
      <line x1="185" y1="120" x2="225" y2="120" stroke="#5C4A3A" strokeWidth="3" />
      {[[150, 240], [180, 230], [210, 245], [240, 232], [270, 240]].map(([x, y], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 12} y={y as number} width="24" height="30" rx="3" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

export const azerbaijanIllustrations: Record<string, IllustrationDefinition> = {
  "baku-bajo-el-nivel-del-mar": { component: BakuBajoElNivelDelMar },
  "yanar-dag-montana-en-llamas": { component: YanarDagMontanaEnLlamas },
  "ateshgah-templo-del-fuego": { component: AteshgahTemploDelFuego },
  "alfombras-azerbaiyanas-unesco": { component: AlfombrasAzerbaiyanasUnesco },
  "volcanes-de-lodo-mas-numerosos": { component: VolcanesDeLodoMasNumerosos },
  "torres-de-la-llama-baku": { component: TorresDeLaLlamaBaku },
  "caviar-esturion-del-caspio": { component: CaviarEsturionDelCaspio },
  "ashiq-los-bardos-viajeros": { component: AshiqLosBardosViajeros },
  "nowruz-ano-nuevo-persa": { component: NowruzAnoNuevoPersa },
  "boom-petrolero-primer-pozo": { component: BoomPetroleroPrimerPozo },
};
