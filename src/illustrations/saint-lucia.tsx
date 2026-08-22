import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LosPitonesLasDosAgujasVolcanicas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <polygon points="110,240 165,120 220,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="200,240 260,90 320,240" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="238" rx="120" ry="8" fill="#1B5E7A" opacity="0.6" />
    </g>
  );
};

const LasFuentesDeAzufreElVolcanAlQueSeEntraEnAuto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#8C8C74" opacity="0.5" />
      <ellipse cx="205" cy="200" rx="90" ry="30" fill="#D9BE5C" stroke={dark} strokeWidth="3" />
      <ellipse cx="170" cy="195" rx="20" ry="10" fill={accentColor} opacity="0.85" />
      <ellipse cx="240" cy="205" rx="18" ry="8" fill={accentColor} opacity="0.85" />
      <path d="M170 185 Q175 170 170 155 M240 190 Q245 175 238 160" stroke="#F5F0E6" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
    </g>
  );
};

const DosPremiosNobelDeUnaIslaDiminuta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="165" cy="160" r="30" fill="#C9A227" stroke={dark} strokeWidth="2.8" />
      <circle cx="165" cy="160" r="20" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <circle cx="245" cy="185" r="30" fill="#C9A227" stroke={dark} strokeWidth="2.8" />
      <circle cx="245" cy="185" r="20" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <path d="M150 220 L150 235 L280 235 L280 225 L200 225 L200 210 L150 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const ElUnicoPaisNombradoEnHonorAUnaMujer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 230 L195 150 Q195 120 205 100 Q215 120 215 150 L215 230 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M203 100 Q205 80 195 65 Q210 70 213 90 Q220 75 232 78 Q222 92 205 100 Z" fill={accentColor} opacity="0.85" />
      <ellipse cx="205" cy="235" rx="40" ry="8" fill="#8C8C8C" opacity="0.4" />
    </g>
  );
};

const ElJumpUpDeGrosIslet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="170" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <path d={`M${x - 14} 230 Q${x - 16} 195 ${x} 190 Q${x + 16} 195 ${x + 14} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
    </g>
  );
  return (
    <g>
      {dancer(150, accentColor)}
      {dancer(205, "#C9A227")}
      {dancer(260, tint(accentColor, 0.2))}
      <rect x="90" y="238" width="230" height="8" fill="#3A3A3A" opacity="0.5" />
      <rect x="110" y="140" width="16" height="30" fill="#5C3A21" />
      <ellipse cx="118" cy="135" rx="14" ry="8" fill="#3A3A3A" />
    </g>
  );
};

const ElKweyolYElDiaDelCriollo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="160" cy="150" r="16" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M144 225 L140 175 Q140 165 160 165 Q180 165 180 175 L176 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="255" cy="150" r="16" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M239 225 L235 175 Q235 165 255 165 Q275 165 275 175 L271 225 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.4" />
      <path d="M185 195 Q205 180 225 195" fill="none" stroke={dark} strokeWidth="2.5" strokeDasharray="6 5" opacity="0.6" />
    </g>
  );
};

const LosArrecifesDeAnseChastanet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#1B5E7A" opacity="0.5" />
      {[[150, 170], [200, 190], [250, 160], [180, 210], [230, 220]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 15} ${(y as number) - 18} ${(x as number) + 30} ${y}`} fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" opacity="0.7" />
      ))}
      {[[140, 140], [270, 175]].map(([x, y]) => (
        <ellipse key={x as number} cx={x as number} cy={y as number} rx="12" ry="7" fill="#C9A227" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElGreenFigAndSaltfishPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="195" rx="75" ry="24" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[[160, 190], [190, 185], [220, 190], [250, 185]].map(([x, y]) => (
        <ellipse key={x as number} cx={x as number} cy={y as number} rx="14" ry="9" fill="#E8DCA0" stroke={dark} strokeWidth="1.6" />
      ))}
      <path d="M175 200 Q205 210 235 200" fill="none" stroke={accentColor} strokeWidth="6" opacity="0.85" />
    </g>
  );
};

const LaRoseYLaMargueriteLasSociedadesFlorales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const petals = [0, 72, 144, 216, 288];
  return (
    <g>
      {petals.map((deg) => (
        <ellipse key={"a" + deg} cx="160" cy="150" rx="16" ry="9" fill={accentColor} stroke={dark} strokeWidth="1.8" transform={`rotate(${deg} 160 168)`} />
      ))}
      <circle cx="160" cy="168" r="8" fill="#C9A227" />
      {petals.map((deg) => (
        <ellipse key={"b" + deg} cx="250" cy="150" rx="16" ry="9" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" transform={`rotate(${deg} 250 168)`} />
      ))}
      <circle cx="250" cy="168" r="8" fill="#C9A227" />
    </g>
  );
};

const PigeonIslandElFuerteQueCambioDeManos14Veces: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <polygon points="130,240 130,180 320,180 320,240" fill="#8C8C74" opacity="0.4" />
      <rect x="160" y="150" width="120" height="70" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      {[170, 200, 230, 260].map((x) => (
        <rect key={x} x={x} y="140" width="10" height="14" fill={dark} opacity="0.6" />
      ))}
      <rect x="150" y="220" width="30" height="10" fill="#3A3A3A" />
      <circle cx="155" cy="225" r="5" fill="#3A3A3A" />
    </g>
  );
};

export const saintLuciaIllustrations: Record<string, IllustrationDefinition> = {
  "los-pitones-las-dos-agujas-volcanicas": { component: LosPitonesLasDosAgujasVolcanicas },
  "las-fuentes-de-azufre-el-volcan-al-que-se-entra-en-auto": { component: LasFuentesDeAzufreElVolcanAlQueSeEntraEnAuto },
  "dos-premios-nobel-de-una-isla-diminuta": { component: DosPremiosNobelDeUnaIslaDiminuta },
  "el-unico-pais-nombrado-en-honor-a-una-mujer": { component: ElUnicoPaisNombradoEnHonorAUnaMujer },
  "el-jump-up-de-gros-islet": { component: ElJumpUpDeGrosIslet },
  "el-kweyol-y-el-dia-del-criollo": { component: ElKweyolYElDiaDelCriollo },
  "los-arrecifes-de-anse-chastanet": { component: LosArrecifesDeAnseChastanet },
  "el-green-fig-and-saltfish-plato-nacional": { component: ElGreenFigAndSaltfishPlatoNacional },
  "la-rose-y-la-marguerite-las-sociedades-florales": { component: LaRoseYLaMargueriteLasSociedadesFlorales },
  "pigeon-island-el-fuerte-que-cambio-de-manos-14-veces": { component: PigeonIslandElFuerteQueCambioDeManos14Veces },
};
