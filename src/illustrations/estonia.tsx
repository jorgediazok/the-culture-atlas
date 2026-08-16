import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SkypeNacioEnTallin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="130" width="110" height="80" rx="8" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <rect x="160" y="140" width="90" height="55" fill={accentColor} opacity="0.85" />
      <circle cx="205" cy="167" r="18" fill="#F5F0E6" />
      <path d="M197 167 Q205 158 213 167 L210 176 L200 176 Z" fill={dark} />
      <path d="M175 220 Q205 235 235 220" fill="none" stroke={dark} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const EResidenciaElPaisMasDigital: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="150" width="110" height="70" rx="10" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="165" y="165" width="30" height="30" rx="4" fill="#F5F0E6" opacity="0.9" />
      <line x1="205" y1="170" x2="245" y2="170" stroke="#F5F0E6" strokeWidth="3" opacity="0.7" />
      <line x1="205" y1="182" x2="245" y2="182" stroke="#F5F0E6" strokeWidth="3" opacity="0.5" />
      <path d="M172 178 L182 188 L196 170" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const RevolucionCantadaIndependenciaSinViolencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[150, 185, 220, 255].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={i % 2 === 0 ? 175 : 185} r="12" fill={skin} />
          <path d={`M${x - 14} ${(i % 2 === 0 ? 175 : 185) + 12} Q${x} ${(i % 2 === 0 ? 175 : 185) + 5} ${x + 14} ${(i % 2 === 0 ? 175 : 185) + 12} L${x + 12} ${240} L${x - 12} ${240} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <line x1={x - 8} y1={(i % 2 === 0 ? 175 : 185) - 8} x2={x - 14} y2={(i % 2 === 0 ? 175 : 185) - 22} stroke={dark} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const FestivalDeCantoLaulupidu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 240 Q205 190 320 240 L320 250 L100 250 Z" fill={accentColor} opacity="0.3" />
      {[[130, 225], [165, 215], [200, 220], [235, 210], [270, 222]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="11" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M175 130 Q205 100 235 130 L225 175 L185 175 Z" fill={dark} opacity="0.7" />
    </g>
  );
};

const TallinLaCiudadMedievalMejorConservada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="160" width="90" height="80" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="130" width="40" height="40" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <path d="M185 130 L205 100 L225 130 Z" fill="#B71C1C" stroke={dark} strokeWidth="2" />
      <rect x="200" y="200" width="20" height="40" fill={dark} opacity="0.5" />
      <rect x="140" y="180" width="20" height="60" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const KalevipoegLaEpopeyaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 Q205 260 320 250 L320 255 L100 255 Z" fill="#3E5C3A" opacity="0.5" />
      <path d="M185 250 L195 130 L215 130 L225 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="235" y1="120" x2="270" y2="90" stroke="#B0B8BF" strokeWidth="8" />
      <polygon points="270,90 285,80 275,100" fill="#B0B8BF" />
      <circle cx="205" cy="105" r="18" fill="#C68642" />
    </g>
  );
};

const ElPaisMasBoscosoDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 230 320 240 L320 250 L90 250 Z" fill="#5C4A3A" opacity="0.5" />
      <line x1="140" y1="240" x2="270" y2="240" stroke="#8B7355" strokeWidth="6" />
      {[160, 190, 220, 250].map((x, i) => (
        <line key={x} x1={x} y1="240" x2={x} y2="232" stroke="#8B7355" strokeWidth="4" opacity={i % 2 === 0 ? 0.8 : 0.5} />
      ))}
      {[[150, 190], [190, 160], [230, 195]].map(([x, y], i) => (
        <polygon key={x as number} points={`${x},${(y as number) - 40} ${(x as number) + 22},${y} ${(x as number) - 22},${y}`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const NarvaDosFortalezasFrenteAFrente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#3D8FB0" opacity="0.6" />
      <rect x="120" y="170" width="50" height="60" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="145,150 165,170 125,170" fill={dark} />
      <rect x="235" y="170" width="50" height="60" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <polygon points="260,150 280,170 240,170" fill={dark} opacity="0.7" />
    </g>
  );
};

const UnicorniosTecnologicosPerCapita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 240 L195 160 L215 160 L215 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="195,160 205,120 215,160" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <path d="M170 240 Q160 220 175 205 L185 215 Q178 225 182 240 Z" fill={dark} opacity="0.6" />
      <path d="M100 200 L140 190 L180 195 L220 175 L260 160" fill="none" stroke={dark} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const JaanipaevHoguerasDePlenoVerano: IllustrationComponent = () => (
  <g>
    <path d="M100 250 Q205 260 320 250 L320 255 L100 255 Z" fill="#3E5C3A" opacity="0.4" />
    <path d="M175 250 L185 200 L225 200 L235 250 Z" fill="#5C4A3A" />
    <path d="M195 200 Q190 170 205 145 Q215 170 210 185 Q220 165 218 150 Q230 175 215 200 Z" fill="#F4A300" />
    <path d="M198 195 Q195 175 205 160 Q212 178 208 190 Z" fill="#E85D04" opacity="0.85" />
  </g>
);

export const estoniaIllustrations: Record<string, IllustrationDefinition> = {
  "skype-nacio-en-tallin": { component: SkypeNacioEnTallin },
  "e-residencia-el-pais-mas-digital": { component: EResidenciaElPaisMasDigital },
  "revolucion-cantada-independencia-sin-violencia": { component: RevolucionCantadaIndependenciaSinViolencia },
  "festival-de-canto-laulupidu": { component: FestivalDeCantoLaulupidu },
  "tallin-la-ciudad-medieval-mejor-conservada": { component: TallinLaCiudadMedievalMejorConservada },
  "kalevipoeg-la-epopeya-nacional": { component: KalevipoegLaEpopeyaNacional },
  "el-pais-mas-boscoso-de-europa": { component: ElPaisMasBoscosoDeEuropa },
  "narva-dos-fortalezas-frente-a-frente": { component: NarvaDosFortalezasFrenteAFrente },
  "unicornios-tecnologicos-per-capita": { component: UnicorniosTecnologicosPerCapita },
  "jaanipaev-hogueras-de-pleno-verano": { component: JaanipaevHoguerasDePlenoVerano },
};
