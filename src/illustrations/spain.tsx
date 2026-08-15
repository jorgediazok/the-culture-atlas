import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SagradaFamiliaObraInconclusa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* organic tapering Gaudí spires */}
      <path d="M150 240 L150 160 Q150 140 160 120 Q170 140 170 160 L170 240 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M180 240 L180 140 Q180 110 195 80 Q210 110 210 140 L210 240 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M220 240 L220 165 Q220 145 232 125 Q244 145 244 165 L244 240 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* spire tips */}
      <circle cx="195" cy="78" r="6" fill={dark} />
      <circle cx="160" cy="118" r="4" fill={dark} />
      <circle cx="232" cy="123" r="4" fill={dark} />
      {/* construction crane beside the towers */}
      <line x1="270" y1="240" x2="270" y2="110" stroke={dark} strokeWidth="4" />
      <line x1="270" y1="110" x2="310" y2="110" stroke={dark} strokeWidth="4" />
      <line x1="270" y1="110" x2="250" y2="118" stroke={dark} strokeWidth="3" />
      <line x1="300" y1="110" x2="300" y2="130" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const FAN_RIB_ENDS: [number, number][] = [
  [111, 198],
  [146, 152],
  [200, 135],
  [255, 152],
  [289, 198],
];

const FlamencoArteAndaluz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* open fan */}
      <path d="M111 198 Q200 100 289 198 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {FAN_RIB_ENDS.map(([x, y]) => (
        <line key={x} x1="200" y1="230" x2={x} y2={y} stroke={dark} strokeWidth="2" opacity="0.5" />
      ))}
      <circle cx="200" cy="230" r="6" fill={dark} />
      {/* castanets */}
      <path d="M150 240 Q150 224 166 224 Q182 224 182 240 Q166 250 150 240 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M218 240 Q218 224 234 224 Q250 224 250 240 Q234 250 218 240 Z" fill={light} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LAUBURU_ANGLES = [0, 90, 180, 270];

const EuskeraLenguaMasAntigua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* speech bubble */}
      <path d="M140 130 Q140 110 165 110 L235 110 Q260 110 260 130 Q260 150 235 150 L190 150 L170 168 L175 150 Q140 150 140 130 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* lauburu, four comma shapes around a center point */}
      {LAUBURU_ANGLES.map((deg) => (
        <path key={deg} d="M200 130 Q200 116 214 116 Q214 126 204 130 Z" fill={dark} transform={`rotate(${deg} 200 130)`} />
      ))}
    </g>
  );
};

const CaminoDeSantiago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const goldDark = shade(gold, 0.3);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* scallop shell */}
      <path d="M200 130 Q160 150 165 200 Q182 190 200 230 Q218 190 235 200 Q240 150 200 130 Z" fill={gold} stroke={goldDark} strokeWidth="2.5" />
      {[180, 190, 200, 210, 220].map((x) => (
        <line key={x} x1="200" y1="140" x2={x} y2="205" stroke={goldDark} strokeWidth="1.5" opacity="0.6" />
      ))}
      {/* pilgrim's walking staff beside it */}
      <line x1="260" y1="240" x2="270" y2="100" stroke={wood} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="272" cy="120" rx="10" ry="14" fill={wood} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const TILE_ANCHORS = [112, 132, 268, 288];
const TILE_ROWS = [180, 200, 220];

const AlhambraLegadoAndalusi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* horseshoe arch */}
      <path d="M160 240 L160 180 Q160 130 200 130 Q240 130 240 180 L240 240 Z" fill={light} stroke={dark} strokeWidth="3" />
      <path d="M178 240 L178 182 Q178 150 200 150 Q222 150 222 182 L222 240 Z" fill={accentColor} />
      {/* geometric tiles flanking the arch */}
      {TILE_ANCHORS.map((x) =>
        TILE_ROWS.map((y) => (
          <rect key={`${x}-${y}`} x={x - 8} y={y - 8} width="16" height="16" fill={dark} opacity="0.4" transform={`rotate(45 ${x} ${y})`} />
        ))
      )}
    </g>
  );
};

const TOMATO_SPLASH: [number, number][] = [
  [140, 150],
  [260, 140],
  [130, 210],
  [270, 200],
  [200, 120],
];

const LaTomatina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const leaf = "#3E7D32";
  return (
    <g>
      {/* splashing juice droplets */}
      {TOMATO_SPLASH.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={light} opacity="0.8" />
      ))}
      {/* tomato body */}
      <circle cx="200" cy="185" r="55" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="182" cy="168" r="14" fill={light} opacity="0.5" />
      {/* stem and leaves */}
      <path d="M195 132 Q185 118 170 122 Q182 128 190 138 Z" fill={leaf} />
      <path d="M205 132 Q215 118 230 122 Q218 128 210 138 Z" fill={leaf} />
      <rect x="197" y="128" width="6" height="10" fill={leaf} />
    </g>
  );
};

const SanFerminEncierro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#C1272D";
  return (
    <g>
      {/* bull, side profile, charging */}
      <path d="M140 210 Q135 180 165 172 Q190 165 210 178 L225 170 L232 180 L222 188 Q225 200 218 210 L150 210 Z" fill={dark} />
      {/* horns */}
      <path d="M162 172 Q150 158 140 155 Q148 168 158 178 Z" fill={dark} />
      <path d="M178 168 Q172 150 178 138 Q188 152 186 170 Z" fill={dark} />
      {/* legs */}
      <line x1="160" y1="210" x2="158" y2="235" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <line x1="200" y1="210" x2="204" y2="235" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      {/* red neckerchief */}
      <path d="M250 150 L280 150 L272 175 L258 175 Z" fill={red} stroke={shade(red, 0.3)} strokeWidth="2" />
      <circle cx="265" cy="150" r="6" fill={shade(red, 0.2)} />
    </g>
  );
};

const HorarioNocturnoEspanol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* night sky */}
      <circle cx="255" cy="120" r="4" fill={dark} opacity="0.5" />
      <circle cx="270" cy="145" r="3" fill={dark} opacity="0.5" />
      <path d="M140 120 Q150 110 162 116 Q152 116 148 126 Q142 126 140 120 Z" fill={dark} opacity="0.6" />
      {/* clock face reading ten at night */}
      <circle cx="200" cy="185" r="55" fill={light} stroke={dark} strokeWidth="4" />
      <circle cx="200" cy="185" r="4" fill={dark} />
      <line x1="200" y1="185" x2="174" y2="170" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <line x1="200" y1="185" x2="200" y2="140" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <circle cx="200" cy="135" r="2.5" fill={dark} />
      <circle cx="250" cy="185" r="2.5" fill={dark} />
      <circle cx="200" cy="235" r="2.5" fill={dark} />
      <circle cx="150" cy="185" r="2.5" fill={dark} />
    </g>
  );
};

const TapasCulturaDeCompartir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const colors = [accentColor, light, dark, tint(accentColor, 0.3)];
  const plateX = [140, 195, 250, 300];
  return (
    <g>
      {/* bar counter */}
      <rect x="110" y="215" width="220" height="16" fill={dark} />
      {/* several small tapa plates */}
      {plateX.map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy="205" rx="26" ry="10" fill="#fff" stroke={dark} strokeWidth="2" />
          <ellipse cx={x} cy="203" rx="16" ry="6" fill={colors[i % colors.length]} />
        </g>
      ))}
    </g>
  );
};

const PaellaOrigenValenciano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rice = "#F4D35E";
  const pepper = "#C1272D";
  const green = "#5B8C3E";
  return (
    <g>
      {/* pan */}
      <ellipse cx="200" cy="190" rx="90" ry="45" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="3" />
      <ellipse cx="200" cy="185" rx="80" ry="38" fill={rice} />
      {/* handles */}
      <rect x="100" y="182" width="24" height="10" fill={dark} />
      <rect x="276" y="182" width="24" height="10" fill={dark} />
      {/* vegetables scattered on top */}
      <path d="M170 175 L182 175 L176 190 Z" fill={pepper} />
      <path d="M215 195 L227 195 L221 210 Z" fill={pepper} />
      <circle cx="200" cy="170" r="6" fill={green} />
      <circle cx="230" cy="180" r="5" fill={green} />
      <circle cx="180" cy="200" r="5" fill={green} />
    </g>
  );
};

export const spainIllustrations: Record<string, IllustrationDefinition> = {
  "sagrada-familia-obra-inconclusa": { component: SagradaFamiliaObraInconclusa },
  "flamenco-arte-andaluz": { component: FlamencoArteAndaluz },
  "euskera-lengua-mas-antigua": { component: EuskeraLenguaMasAntigua },
  "camino-de-santiago": { component: CaminoDeSantiago },
  "alhambra-legado-andalusi": { component: AlhambraLegadoAndalusi },
  "la-tomatina": { component: LaTomatina },
  "san-fermin-encierro": { component: SanFerminEncierro },
  "horario-nocturno-espanol": { component: HorarioNocturnoEspanol },
  "tapas-cultura-de-compartir": { component: TapasCulturaDeCompartir },
  "paella-origen-valenciano": { component: PaellaOrigenValenciano },
};
