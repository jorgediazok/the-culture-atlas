import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RepresaItaipu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* two banks */}
      <rect x="90" y="95" width="40" height="150" fill={dark} />
      <rect x="290" y="95" width="40" height="150" fill={dark} />
      {/* dam wall */}
      <rect x="130" y="110" width="160" height="60" fill={shade(accentColor, 0.15)} />
      {[145, 175, 205, 235, 265].map((x) => (
        <rect key={x} x={x} y="118" width="16" height="44" fill={dark} opacity="0.5" />
      ))}
      {/* water gushing from the spillway */}
      <path d="M155 170 Q150 210 140 245 L170 245 Q178 210 178 170 Z" fill={light} />
      <path d="M200 170 Q195 215 185 245 L215 245 Q222 215 222 170 Z" fill={light} opacity="0.85" />
      <path d="M245 170 Q240 210 230 245 L260 245 Q266 210 266 170 Z" fill={light} />
    </g>
  );
};

const YerbaMateOrigen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const metal = "#B0B8BF";
  return (
    <g>
      <path d="M150 180 a34 38 0 1 0 68 0 a34 38 0 1 0 -68 0 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="184" cy="180" rx="25" ry="11" fill={light} />
      <line x1="194" y1="173" x2="222" y2="128" stroke={metal} strokeWidth="7" strokeLinecap="round" />
      <circle cx="222" cy="128" r="6" fill={metal} />
      {/* yerba leaves beside the gourd */}
      <path d="M255 150 Q245 175 260 200 Q280 190 275 165 Q270 150 255 150 Z" fill={dark} />
      <line x1="257" y1="155" x2="267" y2="190" stroke={light} strokeWidth="2" opacity="0.6" />
      <path d="M280 165 Q272 185 283 205 Q298 197 294 178 Q290 165 280 165 Z" fill={accentColor} />
      <line x1="281" y1="170" x2="289" y2="197" stroke={light} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LenguaGuarani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* two interlocking speech bubbles with a traditional geometric pattern */}
      <path d="M110 110 Q110 90 132 90 L210 90 Q232 90 232 110 Q232 130 210 130 L180 130 L165 148 L170 130 L132 130 Q110 130 110 110 Z" fill={accentColor} />
      <path d="M195 150 Q195 132 215 132 L280 132 Q300 132 300 150 Q300 168 280 168 L260 168 L272 186 L246 168 L215 168 Q195 168 195 150 Z" fill={dark} />
      {[125, 145, 165, 185, 205].map((x) => (
        <circle key={x} cx={x} cy="108" r="4" fill={light} />
      ))}
      {[220, 240, 260, 280].map((x) => (
        <rect key={x} x={x - 3} y="146" width="6" height="6" fill={light} transform={`rotate(45 ${x} 149)`} />
      ))}
    </g>
  );
};

const GuerraTripleAlianza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      {/* empty field */}
      <path d="M95 235 Q210 225 320 235 L320 250 L95 250 Z" fill={shade(accentColor, 0.1)} opacity="0.5" />
      {/* flagpole */}
      <line x1="150" y1="235" x2="150" y2="95" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      {/* torn flag, ragged trailing edge */}
      <path
        d="M150 100 L260 118 L245 130 L258 145 L238 152 L250 165 L228 168 L235 180 L212 178 L150 165 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="2"
      />
    </g>
  );
};

const Nanduti: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.65);
  const spokes = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <g>
      <circle cx="205" cy="165" r="82" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="165" r="60" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="205" cy="165" r="38" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="205" cy="165" r="16" fill={light} stroke={dark} strokeWidth="2" />
      {[38, 60].map((r) => (
        <circle key={r} cx="205" cy="165" r={r} fill="none" stroke={light} strokeWidth="1" opacity="0.5" strokeDasharray="3 5" />
      ))}
      {spokes.map((deg) => (
        <line key={deg} x1="205" y1="83" x2="205" y2="247" stroke={dark} strokeWidth="1.5" opacity="0.6" transform={`rotate(${deg} 205 165)`} />
      ))}
    </g>
  );
};

const ReduccionesJesuiticas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* ruined arcade of columns and an arch */}
      <rect x="100" y="230" width="220" height="12" fill={dark} opacity="0.5" />
      {[120, 155, 190, 225, 260, 295].map((x, i) => (
        <rect key={x} x={x} y={i === 2 ? 150 : 175} width="16" height={i === 2 ? 92 : 67} fill={accentColor} />
      ))}
      <path d="M170 175 Q190 148 210 175" fill="none" stroke={light} strokeWidth="14" />
      <path d="M244 175 Q260 155 276 175" fill="none" stroke={dark} strokeWidth="14" opacity="0.7" />
      {/* rubble at the base */}
      <rect x="230" y="220" width="20" height="14" fill={dark} transform="rotate(12 240 227)" />
      <rect x="90" y="222" width="22" height="14" fill={dark} transform="rotate(-8 101 229)" />
    </g>
  );
};

const Chipa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* tray */}
      <ellipse cx="205" cy="225" rx="110" ry="16" fill={dark} />
      {/* ring-shaped rolls */}
      {[[150, 195], [205, 185], [260, 200], [178, 210], [232, 218]].map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r="20" fill="none" stroke={i % 2 === 0 ? accentColor : light} strokeWidth="14" />
      ))}
    </g>
  );
};

const ArpaParaguaya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const gold = "#D4A017";
  return (
    <g>
      {/* wooden harp frame */}
      <path d="M150 232 Q140 150 175 100 Q182 96 188 102 Q205 150 205 232 Z" fill={dark} />
      <path d="M175 100 Q225 108 250 165 L238 172 Q220 122 178 112 Z" fill={dark} />
      <ellipse cx="177" cy="232" rx="30" ry="9" fill={accentColor} />
      {/* taut golden strings */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={i}
          x1={183 + i * 8}
          y1="228"
          x2={198 + i * 6}
          y2="112"
          stroke={gold}
          strokeWidth="1.6"
        />
      ))}
    </g>
  );
};

const ChacoParaguayo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* cracked, dry ground */}
      <rect x="95" y="200" width="225" height="45" fill={accentColor} opacity="0.7" />
      <path d="M120 200 L135 245 M175 200 L160 245 M230 200 L215 245 M280 200 L295 245 M150 200 L200 245" stroke={dark} strokeWidth="2" opacity="0.6" fill="none" />
      {/* thorny shrubs */}
      <path d="M155 200 L155 155 M155 175 L140 165 M155 175 L170 165 M155 190 L142 182 M155 190 L168 182" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <path d="M245 200 L245 145 M245 165 L228 152 M245 165 L262 152 M245 180 L232 172 M245 180 L258 172 M245 195 L235 190 M245 195 L255 190" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <circle cx="290" cy="170" r="16" fill={light} opacity="0.8" />
      <path d="M290 154 L290 186 M275 160 L305 180 M275 180 L305 160" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const RioParaguay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* wide, calm river */}
      <path d="M95 175 Q210 155 320 175 L320 245 Q210 225 95 245 Z" fill={light} />
      <path d="M110 200 Q210 185 310 200" fill="none" stroke="#fff" strokeWidth="3" opacity="0.4" />
      {/* barge hull with cargo */}
      <path d="M150 195 L260 195 L248 220 L162 220 Z" fill={dark} />
      <rect x="170" y="170" width="26" height="26" fill={accentColor} />
      <rect x="200" y="170" width="26" height="26" fill={shade(accentColor, 0.15)} />
      <rect x="230" y="170" width="20" height="26" fill={accentColor} />
      <rect x="150" y="185" width="10" height="12" fill={dark} />
    </g>
  );
};

const SopaParaguaya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  const gold = "#D4A017";
  return (
    <g>
      {/* square baking dish */}
      <rect x="120" y="150" width="160" height="80" rx="4" fill={dark} />
      <rect x="130" y="140" width="140" height="70" rx="4" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      {/* golden crust texture */}
      <rect x="145" y="152" width="24" height="20" rx="3" fill={light} opacity="0.5" />
      <rect x="180" y="158" width="24" height="20" rx="3" fill={light} opacity="0.5" />
      <rect x="215" y="150" width="24" height="20" rx="3" fill={light} opacity="0.5" />
      {/* steam */}
      <path d="M170 130 Q163 105 175 82" stroke={light} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M215 130 Q208 100 222 78" stroke={light} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
    </g>
  );
};

const CarnavalEncarnacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const skin = "#C97C4A";
  const feathers = [-70, -50, -30, -10, 10, 30, 50, 70];
  const featherColors = [dark, gold, accentColor];
  return (
    <g>
      {/* float platform */}
      <path d="M110 235 L300 235 L285 250 L125 250 Z" fill={dark} opacity="0.6" />
      {/* feather fan, drawn first so the dancer sits in front of it */}
      {feathers.map((deg, i) => (
        <path
          key={deg}
          d="M205 175 Q195 130 205 82 Q215 130 205 175 Z"
          fill={featherColors[i % featherColors.length]}
          transform={`rotate(${deg} 205 175)`}
        />
      ))}
      {/* dancer torso; top edge curves to overlap the head circle's true boundary */}
      <path d="M193 176 Q205 184 217 176 L225 225 L185 225 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head, painted over the torso's neckline */}
      <circle cx="205" cy="178" r="18" fill={skin} />
      <circle cx="197" cy="205" r="5" fill={gold} />
      <circle cx="213" cy="205" r="5" fill={gold} />
      {/* raised arms, strokes starting well inside the torso fill */}
      <path d="M198 195 Q170 180 158 152" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M212 195 Q240 180 252 154" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* legs */}
      <path d="M197 225 L190 250 M213 225 L220 250" stroke={dark} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const AoPoiYataity: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const cloth = "#F5F0E6";
  const spots: [number, number][] = [
    [150, 140],
    [255, 140],
    [150, 200],
    [255, 200],
    [205, 170],
  ];
  return (
    <g>
      {/* fine cotton cloth */}
      <rect x="100" y="95" width="210" height="150" fill={cloth} stroke={dark} strokeWidth="3" />
      {/* embroidered flower motifs */}
      {spots.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x} cy={y - 10} rx="6" ry="10" fill={accentColor} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
          <circle cx={x} cy={y} r="5" fill={light} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      {/* the 'sombra' drawn-thread openwork lines between motifs */}
      <line x1="205" y1="95" x2="205" y2="245" stroke={dark} strokeWidth="1" opacity="0.4" strokeDasharray="1 5" />
      <line x1="100" y1="170" x2="310" y2="170" stroke={dark} strokeWidth="1" opacity="0.4" strokeDasharray="1 5" />
    </g>
  );
};

const IndependenciaSilenciosa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const flame = "#F4A300";
  const wax = "#F5F0E6";
  return (
    <g>
      {/* night backdrop */}
      <rect x="90" y="80" width="230" height="170" fill={dark} opacity="0.25" />
      {/* sealed document */}
      <rect x="130" y="170" width="130" height="70" rx="3" fill={light} stroke={dark} strokeWidth="3" />
      <line x1="145" y1="188" x2="245" y2="188" stroke={dark} strokeWidth="2" opacity="0.5" />
      <line x1="145" y1="200" x2="230" y2="200" stroke={dark} strokeWidth="2" opacity="0.5" />
      <line x1="145" y1="212" x2="240" y2="212" stroke={dark} strokeWidth="2" opacity="0.5" />
      <circle cx="230" cy="225" r="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* candle */}
      <rect x="255" y="150" width="18" height="60" fill={wax} stroke={dark} strokeWidth="2" />
      <path d="M264 150 Q258 130 264 112 Q270 130 264 150" fill={flame} />
      <path d="M264 145 Q262 132 264 122" fill={light} opacity="0.7" />
    </g>
  );
};

const FutbolAlbirroja: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const white = "#F5F0E6";
  return (
    <g>
      {/* jersey */}
      <path d="M150 110 L175 95 L205 108 L235 95 L260 110 L250 140 L235 132 L235 230 L175 230 L175 132 L160 140 Z" fill={white} stroke={dark} strokeWidth="3" />
      {[178, 194, 210, 226].map((x, i) => (
        <rect key={x} x={x} y="108" width="10" height="118" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      {/* ball */}
      <circle cx="270" cy="205" r="26" fill={white} stroke={dark} strokeWidth="3" />
      <polygon points="270,190 280,197 276,210 264,210 260,197" fill={dark} />
    </g>
  );
};

export const paraguayIllustrations: Record<string, IllustrationDefinition> = {
  "represa-itaipu": { component: RepresaItaipu },
  "yerba-mate-origen": { component: YerbaMateOrigen },
  "lengua-guarani": { component: LenguaGuarani },
  "guerra-triple-alianza": { component: GuerraTripleAlianza },
  nanduti: { component: Nanduti },
  "reducciones-jesuiticas": { component: ReduccionesJesuiticas },
  chipa: { component: Chipa },
  "arpa-paraguaya": { component: ArpaParaguaya },
  "chaco-paraguayo": { component: ChacoParaguayo },
  "rio-paraguay": { component: RioParaguay },
  "sopa-paraguaya": { component: SopaParaguaya },
  "carnaval-encarnacion": { component: CarnavalEncarnacion },
  "ao-poi-yataity": { component: AoPoiYataity },
  "independencia-silenciosa": { component: IndependenciaSilenciosa },
  "futbol-albirroja": { component: FutbolAlbirroja },
};
