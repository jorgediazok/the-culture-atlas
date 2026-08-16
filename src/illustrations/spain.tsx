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
  const light = tint(accentColor, 0.6);
  const red = "#C1272D";
  return (
    <g>
      {/* cobbled street ground line */}
      <path d="M85 230 Q210 222 320 230" stroke={shade(accentColor, 0.2)} strokeWidth="3" fill="none" opacity="0.5" />
      {/* bull torso: long stocky barrel with a pronounced shoulder hump and sloping rump */}
      <path d="M112 190 Q108 158 145 148 Q175 140 200 148 Q210 152 212 166 Q214 180 206 192 L200 208 Q160 215 130 210 L118 202 Q108 198 112 190 Z" fill={dark} />
      {/* head: a compact bulging skull (not a thin neck stretch) so horns, eye and muzzle all sit on one recognizable head mass */}
      <path d="M202 160 Q205 142 226 138 Q246 138 256 152 Q264 164 260 178 Q256 190 244 194 L230 198 Q214 196 206 184 Q198 172 202 160 Z" fill={dark} />
      {/* muzzle patch and nostril for contrast */}
      <ellipse cx="255" cy="167" rx="11" ry="8" fill={light} opacity="0.85" />
      <circle cx="262" cy="164" r="2.2" fill={shade(accentColor, 0.6)} />
      {/* eye */}
      <circle cx="236" cy="151" r="3.2" fill={light} />
      <circle cx="237" cy="151" r="1.4" fill={shade(accentColor, 0.6)} />
      {/* ear, just behind the horns */}
      <path d="M222 140 L210 126 L228 134 Z" fill={dark} />
      {/* horns: wide lyre spread rooted on top of the head — one sweeps back, one sweeps forward, both thick */}
      <path d="M228 140 Q206 130 202 108 Q206 94 217 99 Q216 116 234 138 Z" fill={dark} />
      <path d="M242 138 Q252 114 278 102 Q291 100 287 111 Q262 120 248 140 Z" fill={dark} />
      {/* dewlap under the throat */}
      <path d="M206 186 Q200 196 204 206" stroke={dark} strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* tail, raised and whipping mid-charge */}
      <path d="M115 168 Q98 158 92 138" stroke={dark} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M86 130 Q92 136 96 146 Q86 144 80 136 Q80 128 86 130 Z" fill={dark} />
      {/* four legs, offset front/back so the running gait reads clearly */}
      <path d="M128 208 L120 236 M150 212 L158 238 M188 205 L182 233 M204 198 L216 222" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      {/* motion dust behind the charging bull */}
      <ellipse cx="85" cy="226" rx="15" ry="5" fill={light} opacity="0.35" />
      <ellipse cx="65" cy="217" rx="10" ry="4" fill={light} opacity="0.3" />
      {/* red pañuelo, small and fluttering, dropped along the run */}
      <path d="M290 96 Q302 90 313 98 Q308 109 314 118 Q300 121 292 113 Q285 104 290 96 Z" fill={red} stroke={shade(red, 0.3)} strokeWidth="2" />
      <circle cx="301" cy="105" r="3" fill={shade(red, 0.2)} />
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
