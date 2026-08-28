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

const ElEstonioUnIdiomaEmparentadoConElFinlandes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 130 Q100 108 125 108 L195 108 Q220 108 220 130 Q220 152 195 152 L160 152 L145 172 L150 152 L125 152 Q100 152 100 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M200 145 Q200 128 220 128 L280 128 Q300 128 300 145 Q300 162 280 162 L255 162 L262 178 L240 162 L220 162 Q200 162 200 145 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <line x1="245" y1="90" x2="270" y2="115" stroke="#B71C1C" strokeWidth="5" strokeLinecap="round" />
      <line x1="270" y1="90" x2="245" y2="115" stroke="#B71C1C" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const LosSetoYElCantoPolifonicoLeelo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="165" cy="160" r="15" fill={skin} />
      <path d="M150 178 Q165 168 180 178 L174 235 L156 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="245" cy="160" r="15" fill={skin} />
      <path d="M230 178 Q245 168 260 178 L254 235 L236 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      {/* embroidered collar bands */}
      <rect x="152" y="182" width="26" height="8" fill="#D4AF37" opacity="0.8" />
      <rect x="232" y="182" width="26" height="8" fill="#D4AF37" opacity="0.8" />
      {/* sound waves between them */}
      <path d="M182 175 Q205 165 228 175" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
    </g>
  );
};

const LaSaunaDeHumoDeVoromaaPatrimonioDeLaUnesco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="170" width="90" height="70" fill="#2E241A" stroke={dark} strokeWidth="3" />
      <polygon points="155,170 205,140 255,170" fill={dark} />
      <rect x="190" y="200" width="20" height="40" fill="#1A1310" />
      {/* rising smoke */}
      <path d="M225 170 Q215 145 230 120 Q240 100 225 78" fill="none" stroke="#B0B4B8" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
      <path d="M175 170 Q168 150 180 130" fill="none" stroke="#B0B4B8" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
    </g>
  );
};

const KihnuLaIslaDondeLasMujeresSostienenLaTradicion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <path d="M90 250 Q205 240 320 250 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.4" />
      <circle cx="205" cy="140" r="18" fill={skin} />
      <path d="M188 160 Q205 150 222 160 L214 195 L196 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* striped skirt, widening toward the hem */}
      <path d="M188 195 Q205 185 222 195 L235 250 L175 250 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <line x1="185.2" y1="207" x2="224.8" y2="207" stroke={accentColor} strokeWidth="4" />
      <line x1="182.3" y1="219" x2="227.7" y2="219" stroke={accentColor} strokeWidth="4" />
      <line x1="179.5" y1="231" x2="230.5" y2="231" stroke={accentColor} strokeWidth="4" />
      <line x1="176.7" y1="243" x2="233.3" y2="243" stroke={accentColor} strokeWidth="4" />
    </g>
  );
};

const ElCraterDeKaaliLaTumbaDelSol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const craters: [number, number][] = [
    [110, 220],
    [300, 215],
    [130, 170],
    [280, 175],
  ];
  return (
    <g>
      <ellipse cx="205" cy="200" rx="90" ry="45" fill="#8B7355" opacity="0.4" />
      <ellipse cx="205" cy="200" rx="60" ry="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="45" ry="20" fill="#1F6FA5" opacity="0.7" />
      {craters.map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="12" ry="6" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

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
  "el-estonio-un-idioma-emparentado-con-el-finlandes": { component: ElEstonioUnIdiomaEmparentadoConElFinlandes },
  "los-seto-y-el-canto-polifonico-leelo": { component: LosSetoYElCantoPolifonicoLeelo },
  "la-sauna-de-humo-de-voromaa-patrimonio-de-la-unesco": { component: LaSaunaDeHumoDeVoromaaPatrimonioDeLaUnesco },
  "kihnu-la-isla-donde-las-mujeres-sostienen-la-tradicion": { component: KihnuLaIslaDondeLasMujeresSostienenLaTradicion },
  "el-crater-de-kaali-la-tumba-del-sol": { component: ElCraterDeKaaliLaTumbaDelSol },
};
