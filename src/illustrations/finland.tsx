import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SaunaMasQueCochesQuePersonas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="205,95 300,165 110,165" fill={dark} />
      <rect x="130" y="165" width="150" height="80" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="195" width="40" height="50" fill="#3E2712" />
      <path d="M260 150 Q265 130 258 115 Q252 130 260 150 Z" fill="#B0B8BF" opacity="0.7" />
      <path d="M255 130 Q260 110 253 95" fill="none" stroke="#B0B8BF" strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const SantaClausDomicilioOficial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="90" y1="200" x2="320" y2="200" stroke="#F5F0E6" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="205,110 260,160 150,160" fill={dark} />
      <rect x="160" y="160" width="90" height="70" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="195" y="190" width="20" height="40" fill="#3E2712" />
      <circle cx="205" cy="130" r="6" fill="#F5F0E6" />
    </g>
  );
};

const NokiaFabricaDePapelATelefonos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 Q205 240 310 250 L310 260 L100 260 Z" fill="#3D8FB0" opacity="0.5" />
      <rect x="140" y="130" width="120" height="90" fill="#8B8378" stroke={dark} strokeWidth="3" />
      <rect x="160" y="100" width="20" height="35" fill="#6B6355" />
      <rect x="195" y="90" width="20" height="45" fill="#6B6355" />
      <rect x="185" y="170" width="40" height="70" rx="6" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="192" y="180" width="26" height="40" fill="#F5F0E6" opacity="0.85" />
    </g>
  );
};

const KalevalaEpopeyaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="150" width="170" height="100" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="150" x2="205" y2="250" stroke={dark} strokeWidth="2" />
      <circle cx="230" cy="130" r="18" fill="#C68642" />
      <path d="M220 115 Q205 90 200 130 M240 115 Q255 90 260 130" fill="none" stroke="#F5F0E6" strokeWidth="4" />
      <ellipse cx="260" cy="165" rx="24" ry="14" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(-15 260 165)" />
      <line x1="248" y1="158" x2="272" y2="172" stroke={dark} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const MuminsPersonajesQueConquistaronElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="180" y="160" width="24" height="60" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="192,110 235,160 149,160" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="150" cy="215" r="34" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <ellipse cx="140" cy="205" rx="10" ry="12" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="136" cy="212" r="3" fill="#1A1A1A" />
      <circle cx="150" cy="212" r="3" fill="#1A1A1A" />
      <ellipse cx="143" cy="222" rx="5" ry="3" fill="#1A1A1A" opacity="0.7" />
    </g>
  );
};

const CienOchentaMilLagosDeVerdad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#3E5C3A" opacity="0.5" />
      {[[140, 130, 30, 18], [210, 150, 40, 22], [270, 120, 26, 16], [160, 200, 35, 20], [250, 210, 30, 18]].map(([x, y, rx, ry], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx={rx} ry={ry} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" transform={`rotate(${i * 15} ${x} ${y})`} />
      ))}
    </g>
  );
};

const EducacionSinExamenesLaMejorDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <rect x="150" y="180" width="110" height="55" rx="4" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <line x1="165" y1="200" x2="245" y2="200" stroke={dark} strokeWidth="2" opacity="0.5" />
      <line x1="165" y1="212" x2="245" y2="212" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[[160, 250], [205, 255], [250, 250]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 25} r="12" fill={skin} />
          <path d={`M${(x as number) - 12} ${y} Q${x} ${(y as number) - 15} ${(x as number) + 12} ${y}`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const DisenoFinlandesMarimekkoYAalto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="90" width="120" height="160" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[[170, 150], [170, 210]].map(([x, y]) => (
        <g key={y as number}>
          <circle cx={x} cy={y} r="24" fill={accentColor} />
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x} cy={(y as number) - 24} rx="8" ry="16" fill={accentColor} transform={`rotate(${deg} ${x} ${y})`} opacity="0.85" />
          ))}
          <circle cx={x} cy={y} r="7" fill="#2E2A1F" />
        </g>
      ))}
      <path d="M260 110 Q245 160 260 180 Q275 200 260 250 L285 250 Q275 200 285 180 Q295 155 275 110 Z" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const SolDeMedianocheYNochePolar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={dark} opacity="0.3" />
      <path d="M90 240 Q205 210 320 240 L320 250 L90 250 Z" fill="#E8E4DC" opacity="0.6" />
      <circle cx="205" cy="220" r="30" fill={accentColor} />
      <line x1="205" y1="170" x2="205" y2="185" stroke={accentColor} strokeWidth="3" />
      <line x1="245" y1="200" x2="258" y2="192" stroke={accentColor} strokeWidth="3" />
      <line x1="165" y1="200" x2="152" y2="192" stroke={accentColor} strokeWidth="3" />
    </g>
  );
};

const MundialDeCargarALaEsposa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <path d="M100 245 Q205 260 310 245 L310 252 L100 252 Z" fill="#3D8FB0" opacity="0.6" />
      <path d="M140 246 Q160 242 180 246 Q200 250 220 246 Q240 242 260 246" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5" />

      {/* runner */}
      <path d="M170 210 L158 232 L150 250 L162 250 L175 228 Z" fill={dark} />
      <path d="M195 210 L218 222 L232 248 L220 250 L200 226 Z" fill={dark} />
      <path d="M158 155 Q182 148 195 160 L200 212 Q178 220 155 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="172" cy="140" r="14" fill={skin} />
      <path d="M188 168 Q205 160 215 172 L208 182 Q195 176 186 178 Z" fill={skin} />

      {/* carried person, draped upside-down over the shoulders */}
      <path d="M172 135 Q192 112 216 120" fill="none" stroke={tint(accentColor, 0.4)} strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="216" cy="120" rx="6" ry="4.5" fill={skin} transform="rotate(-15 216 120)" />
      <path d="M180 148 Q200 128 224 138" fill="none" stroke={tint(accentColor, 0.1)} strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="224" cy="138" rx="6" ry="4.5" fill={skin} transform="rotate(-10 224 138)" />
      <path d="M186 140 Q205 172 216 205" fill="none" stroke={shade(accentColor, 0.15)} strokeWidth="9" strokeLinecap="round" />
      <circle cx="219" cy="216" r="11" fill={skin} />
      <path d="M212 225 Q219 236 226 225" fill="none" stroke="#3E2712" strokeWidth="3" strokeLinecap="round" />
      <path d="M211 219 Q199 230 192 242" fill="none" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <path d="M227 219 Q239 230 246 242" fill="none" stroke={skin} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const JeanSibeliusYLaMusicaFinlandia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {/* music stand with sheet music */}
      <rect x="230" y="150" width="60" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <line x1="240" y1="165" x2="280" y2="165" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="240" y1="175" x2="280" y2="175" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="260" y1="195" x2="260" y2="245" stroke={dark} strokeWidth="3" />
      {/* conductor */}
      <circle cx="165" cy="150" r="16" fill={skin} />
      <path d="M150 170 Q165 160 182 170 L176 225 L154 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="180" y1="180" x2="215" y2="150" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const ElFinlandesUnIdiomaSinParientesCercanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 130 Q100 105 130 105 L290 105 Q320 105 320 130 Q320 155 290 155 L180 155 L155 180 L165 155 L130 155 Q100 155 100 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[115, 135, 155, 175, 195, 215, 235, 255, 275, 295].map((x, i) => (
        <rect key={x} x={x} y={i % 2 === 0 ? 122 : 128} width="14" height={i % 2 === 0 ? 18 : 12} fill="#F5F0E6" opacity="0.85" />
      ))}
    </g>
  );
};

const AngryBirdsYLaIndustriaFinlandesaDeVideojuegos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* slingshot */}
      <path d="M120 245 L120 190 M120 190 L105 160 M120 190 L135 160" fill="none" stroke="#6B4C3A" strokeWidth="6" strokeLinecap="round" />
      <line x1="105" y1="160" x2="150" y2="200" stroke={dark} strokeWidth="2.5" />
      <line x1="135" y1="160" x2="150" y2="200" stroke={dark} strokeWidth="2.5" />
      {/* bird */}
      <circle cx="150" cy="200" r="18" fill="#C1272D" stroke={dark} strokeWidth="2.5" />
      <path d="M165 197 L180 203 L165 209 Z" fill="#F4A300" />
      {/* tower of blocks being hit */}
      <rect x="240" y="205" width="35" height="45" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="240" y="160" width="35" height="45" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const SalmiakkiElCarameloSaladoQueSoloGustanLosFinlandeses: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 L150 170 Q150 150 175 150 L235 150 Q260 150 260 170 L260 250 Z" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <path d="M150 170 L175 150 M260 170 L235 150" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[[175, 200], [205, 190], [230, 210], [190, 225]].map(([x, y]) => (
        <polygon
          key={x as number}
          points={`${x},${(y as number) - 14} ${(x as number) + 14},${y} ${x},${(y as number) + 14} ${(x as number) - 14},${y}`}
          fill="#1A1A1A"
          stroke={dark}
          strokeWidth="1.5"
        />
      ))}
    </g>
  );
};

const ElDiaDeLaIndependenciaYLasDosVelas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* window frame */}
      <rect x="120" y="90" width="170" height="160" fill={dark} opacity="0.15" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="90" x2="205" y2="250" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      {/* windowsill */}
      <rect x="110" y="245" width="190" height="10" fill={dark} />
      {/* two candles */}
      <rect x="170" y="200" width="14" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M177 200 Q170 188 177 178 Q184 188 177 200 Z" fill="#F4A300" />
      <rect x="226" y="200" width="14" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M233 200 Q226 188 233 178 Q240 188 233 200 Z" fill="#F4A300" />
    </g>
  );
};

export const finlandIllustrations: Record<string, IllustrationDefinition> = {
  "sauna-mas-que-coches-que-personas": { component: SaunaMasQueCochesQuePersonas },
  "santa-claus-domicilio-oficial": { component: SantaClausDomicilioOficial },
  "nokia-fabrica-de-papel-a-telefonos": { component: NokiaFabricaDePapelATelefonos },
  "kalevala-epopeya-nacional": { component: KalevalaEpopeyaNacional },
  "mumins-personajes-que-conquistaron-el-mundo": { component: MuminsPersonajesQueConquistaronElMundo },
  "cien-ochenta-mil-lagos-de-verdad": { component: CienOchentaMilLagosDeVerdad },
  "educacion-sin-examenes-la-mejor-del-mundo": { component: EducacionSinExamenesLaMejorDelMundo },
  "diseno-finlandes-marimekko-y-aalto": { component: DisenoFinlandesMarimekkoYAalto },
  "sol-de-medianoche-y-noche-polar": { component: SolDeMedianocheYNochePolar },
  "mundial-de-cargar-a-la-esposa": { component: MundialDeCargarALaEsposa },
  "jean-sibelius-y-la-musica-finlandia": { component: JeanSibeliusYLaMusicaFinlandia },
  "el-finlandes-un-idioma-sin-parientes-cercanos": { component: ElFinlandesUnIdiomaSinParientesCercanos },
  "angry-birds-y-la-industria-finlandesa-de-videojuegos": { component: AngryBirdsYLaIndustriaFinlandesaDeVideojuegos },
  "salmiakki-el-caramelo-salado-que-solo-gustan-los-finlandeses": { component: SalmiakkiElCarameloSaladoQueSoloGustanLosFinlandeses },
  "el-dia-de-la-independencia-y-las-dos-velas": { component: ElDiaDeLaIndependenciaYLasDosVelas },
};
