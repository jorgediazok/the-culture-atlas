import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BurjKhalifa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M195 240 L192 160 L200 100 L208 160 L205 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M192 160 L175 175 L192 175 Z M208 160 L225 175 L208 175 Z" fill={light} stroke={dark} strokeWidth="1.5" />
      <path d="M195 200 L188 210 L195 210 Z M205 200 L212 210 L205 210 Z" fill={light} opacity="0.7" />
      <line x1="200" y1="100" x2="200" y2="80" stroke={dark} strokeWidth="2" />
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
      {[[130, 235], [270, 232]].map(([x, y]) => (
        <rect key={x as number} x={(x as number) - 12} y={(y as number) - 40} width="24" height="40" fill={dark} opacity="0.4" />
      ))}
    </g>
  );
};

const IslasArtificialesPalmera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#26C6DA";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      <line x1="205" y1="235" x2="205" y2="140" stroke="#4A8F4E" strokeWidth="6" />
      {[-55, -30, -5, 20, 45].map((dy) => (
        <path key={dy} d={`M205 ${175 + dy * 0.4} Q170 ${170 + dy * 0.5} 150 ${150 + dy * 0.4}`} fill="none" stroke="#4A8F4E" strokeWidth="5" strokeLinecap="round" />
      ))}
      {[-55, -30, -5, 20, 45].map((dy) => (
        <path key={`r${dy}`} d={`M205 ${175 + dy * 0.4} Q240 ${170 + dy * 0.5} 260 ${150 + dy * 0.4}`} fill="none" stroke="#4A8F4E" strokeWidth="5" strokeLinecap="round" />
      ))}
      <circle cx="205" cy="235" r="45" fill="none" stroke={dark} strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const UnionSieteEmiratos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C1272D", "#006233", "#1A1A1A", "#D4AF37", "#0288D1", tint(accentColor, 0.3)];
  return (
    <g>
      <circle cx="205" cy="175" r="55" fill="none" stroke={dark} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      {[[205, 122], [246, 143], [258, 187], [232, 222], [178, 222], [152, 187], [164, 143]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="14" fill={colors[i]} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const HalconesPasaportePropio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <ellipse cx="215" cy="180" rx="14" ry="20" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(15 215 180)" />
      <path d="M225 168 Q245 160 255 145" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M205 172 Q195 178 190 165" fill="none" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
      <path d="M220 160 L228 150 L232 165 Z" fill="#F4A300" />
      <rect x="130" y="200" width="45" height="30" rx="3" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="140" y="208" width="12" height="14" fill={accentColor} opacity="0.6" />
      <line x1="158" y1="212" x2="168" y2="212" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="158" y1="218" x2="168" y2="218" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <path d="M215 218 Q210 232 220 240" fill="none" stroke={skin} strokeWidth="6" />
    </g>
  );
};

const DePuebloPescadorAMetropolis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 235 Q205 245 320 235 L320 250 L90 250 Z" fill={water} />
      <path d="M120 225 L120 190 L150 175 L150 225 Z" fill="#D9BE8F" stroke={shade("#D9BE8F", 0.3)} strokeWidth="2.5" />
      <path d="M118 192 L152 192 L135 172 Z" fill="#8B5A2B" />
      {[[210, 235, 55], [250, 232, 80], [285, 236, 45]].map(([x, y, h]) => (
        <rect key={x as number} x={(x as number) - 12} y={(y as number) - (h as number)} width="24" height={h} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const KanduraVestimentaTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M180 235 L180 155 Q180 140 205 138 Q230 140 230 155 L230 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="128" r="14" fill={skin} />
      <path d="M188 118 Q205 108 222 118 L228 150 L182 150 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={195 + i * 8} y1="120" x2={195 + i * 8} y2="140" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      <line x1="205" y1="148" x2="205" y2="165" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="168" r="5" fill="#1A1A1A" />
    </g>
  );
};

const CarrerasCamellosRobots: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 250 320 240 L320 250 L90 250 Z" fill="#D9BE8F" opacity="0.6" />
      <path d="M140 225 Q135 200 155 195 Q165 178 180 195 Q195 178 200 200 Q215 205 210 225 L205 235 L195 235 L192 222 L155 222 L150 235 L142 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M140 210 Q125 205 120 195" stroke={accentColor} strokeWidth="7" strokeLinecap="round" fill="none" />
      <rect x="163" y="180" width="16" height="16" rx="3" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <circle cx="171" cy="186" r="2.5" fill="#1A1A1A" />
      <line x1="171" y1="196" x2="171" y2="222" stroke="#78909C" strokeWidth="4" />
      <line x1="240" y1="235" x2="270" y2="225" stroke={dark} strokeWidth="2" strokeDasharray="4 3" opacity="0.5" />
      <path d="M255 225 L265 220 L262 232 Z" fill={dark} opacity="0.5" />
    </g>
  );
};

const MezquitaJequeZayed: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4AF37";
  return (
    <g>
      <rect x="140" y="190" width="130" height="50" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="188" rx="30" ry="20" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="160" r="4" fill={gold} />
      <line x1="205" y1="164" x2="205" y2="150" stroke={dark} strokeWidth="2" />
      {[125, 285].map((x) => (
        <g key={x}>
          <rect x={x - 6} y="145" width="12" height="95" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
          <ellipse cx={x} cy="143" rx="9" ry="8" fill={gold} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      {[165, 245].map((x) => (
        <ellipse key={x} cx={x} cy="205" rx="14" ry="12" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const EsquiarEnElDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const snow = "#F5F0E6";
  return (
    <g>
      <rect x="100" y="90" width="220" height="150" fill={accentColor} opacity="0.15" stroke={dark} strokeWidth="3" />
      <path d="M130 235 L280 235 L230 110 L180 110 Z" fill={snow} stroke={shade(snow, 0.2)} strokeWidth="2.5" />
      <line x1="200" y1="220" x2="215" y2="140" stroke={dark} strokeWidth="9" strokeLinecap="round" transform="rotate(-12 205 180)" />
      <line x1="200" y1="220" x2="215" y2="140" stroke={dark} strokeWidth="9" strokeLinecap="round" transform="rotate(12 205 180)" />
      <circle cx="205" cy="175" r="9" fill={dark} />
      <path d="M330 235 Q325 220 335 205" stroke="#4A8F4E" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7" />
    </g>
  );
};

const EconomiaPostPetroleo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      <rect x="140" y="195" width="18" height="45" fill="#5C5C5C" stroke={dark} strokeWidth="2" />
      <path d="M132 195 L166 195 L158 175 L140 175 Z" fill="#8B8378" stroke={dark} strokeWidth="2" />
      <path d="M149 175 Q145 160 149 148 Q153 160 149 175 Z" fill={flame} />
      {[[210, 220], [235, 210], [260, 225]].map(([x, y]) => (
        <g key={x as number}>
          <rect x={(x as number) - 14} y={y} width="28" height="6" fill={accentColor} stroke={dark} strokeWidth="1.5" transform={`rotate(-15 ${x} ${(y as number) + 3})`} />
          <rect x={(x as number) - 14} y={(y as number) + 8} width="10" height="18" fill={dark} opacity="0.5" />
        </g>
      ))}
      <path d="M275 165 L305 155 L300 175 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M275 165 Q265 168 262 175" stroke={dark} strokeWidth="1.5" opacity="0.5" fill="none" />
    </g>
  );
};

export const unitedArabEmiratesIllustrations: Record<string, IllustrationDefinition> = {
  "burj-khalifa": { component: BurjKhalifa },
  "islas-artificiales-palmera": { component: IslasArtificialesPalmera },
  "union-siete-emiratos": { component: UnionSieteEmiratos },
  "halcones-pasaporte-propio": { component: HalconesPasaportePropio },
  "de-pueblo-pescador-a-metropolis": { component: DePuebloPescadorAMetropolis },
  "kandura-vestimenta-tradicional": { component: KanduraVestimentaTradicional },
  "carreras-camellos-robots": { component: CarrerasCamellosRobots },
  "mezquita-jeque-zayed": { component: MezquitaJequeZayed },
  "esquiar-en-el-desierto": { component: EsquiarEnElDesierto },
  "economia-post-petroleo": { component: EconomiaPostPetroleo },
};
