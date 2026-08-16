import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LegoElJugueteNacidoEnBillund: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[140, 210, 60, 40], [190, 175, 55, 35], [140, 165, 45, 30]].map(([x, y, w, h], i) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={w} height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
          {[0, 1, 2].map((n) => (
            <circle key={n} cx={(x as number) + 12 + n * 16} cy={y as number} r="5" fill={dark} opacity="0.5" />
          ))}
        </g>
      ))}
      <rect x="240" y="180" width="50" height="70" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <circle cx="253" cy="180" r="5" fill={dark} opacity="0.5" />
      <circle cx="277" cy="180" r="5" fill={dark} opacity="0.5" />
    </g>
  );
};

const HyggeElArteDanesDeLaCalidez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="200" width="90" height="15" rx="6" fill="#E8DCC0" stroke={dark} strokeWidth="2" />
      <path d="M170 130 Q160 160 175 200 L205 200 Q220 160 210 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M182 118 Q188 108 182 98 M198 118 Q192 108 198 98" fill="none" stroke="#F4A300" strokeWidth="3" />
      <ellipse cx="270" cy="215" rx="28" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M255 210 Q270 220 285 210" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const LaSirenitaEstatuaEnElPuerto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 225 320 240 L320 250 L90 250 Z" fill="#3D8FB0" opacity="0.6" />
      <ellipse cx="205" cy="225" rx="45" ry="15" fill="#8B8378" stroke={dark} strokeWidth="2.5" />
      <circle cx="195" cy="195" r="12" fill="#C68642" />
      <path d="M185 205 Q195 198 210 202 L215 222 L180 222 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M210 210 Q235 218 245 235 Q225 238 212 228 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const PiedrasDeJellingPartidaDeNacimiento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M160 250 L155 130 Q205 100 255 130 L250 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M180 160 Q205 145 230 160 Q225 190 205 200 Q185 190 180 160 Z" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      <path d="M190 210 L220 210 M195 225 L215 225" stroke={dark} strokeWidth="2" opacity="0.5" />
      <ellipse cx="130" cy="248" rx="25" ry="8" fill="#8B7355" opacity="0.5" />
      <ellipse cx="280" cy="248" rx="25" ry="8" fill="#8B7355" opacity="0.5" />
    </g>
  );
};

const PaisMasFelizDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <rect x="150" y="200" width="60" height="18" rx="6" fill="#8B5A2B" />
      <circle cx="180" cy="180" r="18" fill={skin} />
      <path d="M165 200 Q180 190 195 200 L192 218 L168 218 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M172 178 Q180 184 188 178" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
      {[[240, 210], [260, 225], [280, 208]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="16" fill="none" stroke={dark} strokeWidth="2.5" />
      ))}
    </g>
  );
};

const EnergiaEolicaPioneraMundial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 Q205 255 320 245 L320 250 L90 250 Z" fill="#3D8FB0" opacity="0.5" />
      <line x1="205" y1="230" x2="205" y2="120" stroke="#F5F0E6" strokeWidth="6" />
      <circle cx="205" cy="120" r="6" fill={dark} />
      <path d="M205 120 L205 75 Q212 90 205 120" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(0 205 120)" />
      <path d="M205 120 L245 140 Q225 135 205 120" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(120 205 120)" />
      <path d="M205 120 L165 140 Q185 135 205 120" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(240 205 120)" />
    </g>
  );
};

const TivoliUnoDeLosParquesMasAntiguos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="170" r="55" fill="none" stroke={dark} strokeWidth="4" />
      <line x1="150" y1="170" x2="260" y2="170" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="205" y1="115" x2="205" y2="225" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {[0, 90, 180, 270].map((deg, i) => (
        <circle key={deg} cx={205 + [55, 0, -55, 0][i]} cy={170 + [0, 55, 0, -55][i]} r="10" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.35)} stroke={dark} strokeWidth="2" />
      ))}
      <rect x="195" y="225" width="20" height="20" fill="#8B7355" />
    </g>
  );
};

const CopenhagueMasBicicletasQueAutos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="220" width="220" height="10" fill="#1F6FA5" opacity="0.6" />
      <circle cx="170" cy="230" r="22" fill="none" stroke={dark} strokeWidth="4" />
      <circle cx="250" cy="230" r="22" fill="none" stroke={dark} strokeWidth="4" />
      <line x1="170" y1="230" x2="200" y2="180" stroke={dark} strokeWidth="3" />
      <line x1="200" y1="180" x2="250" y2="230" stroke={dark} strokeWidth="3" />
      <line x1="200" y1="180" x2="215" y2="230" stroke={dark} strokeWidth="3" />
      <rect x="192" y="170" width="20" height="8" rx="3" fill={accentColor} />
    </g>
  );
};

const SmorrebrodElSandwichAbierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="200" width="130" height="20" fill="#3E2712" stroke={dark} strokeWidth="2" />
      <path d="M150 200 Q170 185 190 200 Q210 188 230 200 Q250 190 265 200 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="230" cy="192" rx="14" ry="8" fill="#F4A300" />
      <circle cx="180" cy="190" r="6" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
    </g>
  );
};

const VikingosDanesesYSusBarcos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 235 Q205 250 310 235 L300 220 L120 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M120 220 Q100 200 110 175 Q130 195 140 220 Z" fill={dark} />
      <line x1="205" y1="215" x2="205" y2="130" stroke="#8B5A2B" strokeWidth="4" />
      <path d="M175 145 L235 145 L225 190 L185 190 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <line x1="175" y1="160" x2="235" y2="160" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

export const denmarkIllustrations: Record<string, IllustrationDefinition> = {
  "lego-el-juguete-nacido-en-billund": { component: LegoElJugueteNacidoEnBillund },
  "hygge-el-arte-danes-de-la-calidez": { component: HyggeElArteDanesDeLaCalidez },
  "la-sirenita-estatua-en-el-puerto": { component: LaSirenitaEstatuaEnElPuerto },
  "piedras-de-jelling-partida-de-nacimiento": { component: PiedrasDeJellingPartidaDeNacimiento },
  "pais-mas-feliz-del-mundo": { component: PaisMasFelizDelMundo },
  "energia-eolica-pionera-mundial": { component: EnergiaEolicaPioneraMundial },
  "tivoli-uno-de-los-parques-mas-antiguos": { component: TivoliUnoDeLosParquesMasAntiguos },
  "copenhague-mas-bicicletas-que-autos": { component: CopenhagueMasBicicletasQueAutos },
  "smorrebrod-el-sandwich-abierto": { component: SmorrebrodElSandwichAbierto },
  "vikingos-daneses-y-sus-barcos": { component: VikingosDanesesYSusBarcos },
};
