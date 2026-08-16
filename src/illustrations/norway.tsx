import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const FiordosTalladosPorGlaciares: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L100 140 L165 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M310 250 L310 130 L245 250 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <path d="M165 250 Q205 240 245 250 L245 250 L165 250 Z" fill="#3D8FB0" opacity="0.7" />
      <path d="M270 140 Q265 190 275 250" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.8" />
    </g>
  );
};

const FondoSoberanoMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 235 L120 235 L120 200 L155 200 L155 175 L90 175 Z" fill="#3D8FB0" opacity="0.5" />
      <rect x="135" y="185" width="20" height="15" fill="#8B8378" />
      <line x1="140" y1="185" x2="140" y2="165" stroke={dark} strokeWidth="2" />
      <path d="M255 155 Q290 155 295 190 Q298 225 265 240 Q230 250 220 220 Q215 190 240 165 Q248 158 255 155 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M255 175 Q245 185 250 200" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <rect x="252" y="145" width="6" height="12" fill={dark} />
    </g>
  );
};

const PremioNobelDeLaPazEnOslo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M160 240 Q205 190 250 240 Q205 260 160 240 Z" fill="#F5F0E6" opacity="0.6" />
      <path d="M170 210 Q160 195 170 180 Q180 195 175 210 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="235" cy="180" r="24" fill="#D4AF37" stroke={dark} strokeWidth="2.5" />
      <circle cx="235" cy="180" r="16" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      <path d="M235 168 L239 178 L249 178 L241 184 L244 194 L235 188 L226 194 L229 184 L221 178 L231 178 Z" fill={accentColor} opacity="0.8" />
    </g>
  );
};

const CunaMundialDelEsqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <path d="M90 245 Q205 210 320 245" fill="none" stroke="#F5F0E6" strokeWidth="6" opacity="0.7" />
      <circle cx="195" cy="150" r="12" fill={skin} />
      <path d="M185 165 Q195 158 210 168 L215 205 L180 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="150" y1="235" x2="240" y2="235" stroke={dark} strokeWidth="4" />
      <line x1="155" y1="230" x2="235" y2="230" stroke={dark} strokeWidth="4" />
      <line x1="215" y1="175" x2="250" y2="190" stroke="#8B7355" strokeWidth="2.5" />
      <line x1="180" y1="180" x2="150" y2="195" stroke="#8B7355" strokeWidth="2.5" />
    </g>
  );
};

const BovedaGlobalDeSemillasSvalbard: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 Q120 190 205 175 Q290 190 310 250 Z" fill="#B0B8BF" opacity="0.6" />
      <polygon points="170,250 205,190 240,250" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="195" y="215" width="20" height="35" fill={dark} opacity="0.7" />
      <circle cx="205" cy="210" r="4" fill="#F5F0E6" />
    </g>
  );
};

const LeifEriksonAmerica500AnosAntes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M280 245 Q285 200 320 190 Q310 220 300 245 Z" fill="#2E6B5E" opacity="0.6" />
      <path d="M100 235 Q205 250 300 235 L290 220 L120 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="215" x2="205" y2="135" stroke="#8B5A2B" strokeWidth="4" />
      <path d="M160 145 L250 145 L235 195 L175 195 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BarcosVikingosDeOsebergYGokstad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 255 320 240 L305 225 L105 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M105 225 Q80 205 90 178 Q112 198 122 225 Z" fill={dark} />
      <path d="M300 225 Q320 210 315 190 Q298 205 290 225 Z" fill={dark} opacity="0.7" />
      {[130, 165, 200, 235, 270].map((x) => (
        <circle key={x} cx={x} cy="220" r="4" fill="#F4A300" opacity="0.8" />
      ))}
    </g>
  );
};

const SalmonNoruegoMitadDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 200 Q160 180 210 195 Q240 205 250 195 L245 215 Q235 225 210 220 Q160 225 120 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="245,195 265,180 265,215" fill={dark} />
      <circle cx="140" cy="198" r="4" fill="#1A1A1A" />
      <circle cx="230" cy="255" r="30" fill="none" stroke="#3D8FB0" strokeWidth="3" opacity="0.6" />
      <circle cx="280" cy="245" r="22" fill="none" stroke="#3D8FB0" strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const BryggenElMuelleHanseaticoDeBergen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[110, "#B7752E"], [150, accentColor], [190, tint(accentColor, 0.3)], [230, "#8B5A2B"], [270, "#C1272D"]].map(([x, color]) => (
        <g key={x as number}>
          <rect x={x as number} y="170" width="35" height="75" fill={color as string} stroke={dark} strokeWidth="2" />
          <polygon points={`${x},170 ${(x as number) + 17.5},150 ${(x as number) + 35},170`} fill={dark} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const AurorasBorealesCazadoresDeLuces: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 245 L130 150 L155 245 Z" fill={dark} opacity="0.7" />
      <path d="M260 245 L285 140 L310 245 Z" fill={dark} opacity="0.6" />
      <path d="M100 140 Q160 110 220 140 Q270 160 320 130" fill="none" stroke={accentColor} strokeWidth="10" opacity="0.6" strokeLinecap="round" />
      <path d="M110 165 Q170 135 230 165 Q275 185 315 155" fill="none" stroke={tint(accentColor, 0.3)} strokeWidth="8" opacity="0.5" strokeLinecap="round" />
    </g>
  );
};

export const norwayIllustrations: Record<string, IllustrationDefinition> = {
  "fiordos-tallados-por-glaciares": { component: FiordosTalladosPorGlaciares },
  "fondo-soberano-mas-grande-del-mundo": { component: FondoSoberanoMasGrandeDelMundo },
  "premio-nobel-de-la-paz-en-oslo": { component: PremioNobelDeLaPazEnOslo },
  "cuna-mundial-del-esqui": { component: CunaMundialDelEsqui },
  "boveda-global-de-semillas-svalbard": { component: BovedaGlobalDeSemillasSvalbard },
  "leif-erikson-america-500-anos-antes": { component: LeifEriksonAmerica500AnosAntes },
  "barcos-vikingos-de-oseberg-y-gokstad": { component: BarcosVikingosDeOsebergYGokstad },
  "salmon-noruego-mitad-del-mundo": { component: SalmonNoruegoMitadDelMundo },
  "bryggen-el-muelle-hanseatico-de-bergen": { component: BryggenElMuelleHanseaticoDeBergen },
  "auroras-boreales-cazadores-de-luces": { component: AurorasBorealesCazadoresDeLuces },
};
