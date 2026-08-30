import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Cerveza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <path d="M175 110 L180 200 a20 20 0 0 0 40 0 L225 110 Z" fill={accentColor} />
      <path d="M175 110 L225 110 L221 128 L179 128 Z" fill={light} />
      <path
        d="M225 130 C245 130 250 150 235 158 C245 158 248 172 232 176"
        fill="none"
        stroke={dark}
        strokeWidth="6"
      />
    </g>
  );
};

const Chocolate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="150" y="115" width="100" height="55" rx="8" fill={accentColor} />
      <line x1="200" y1="115" x2="200" y2="170" stroke={dark} strokeWidth="4" />
      <line x1="150" y1="142" x2="250" y2="142" stroke={dark} strokeWidth="4" />
      <circle cx="175" cy="128" r="5" fill={light} />
      <circle cx="225" cy="156" r="5" fill={light} />
    </g>
  );
};

const PapasFritas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <polygon points="175,205 225,205 214,120 186,120" fill={light} />
      <polygon points="180,205 220,205 213,130 187,130" fill="none" stroke={dark} strokeWidth="3" />
      {[-16, -6, 4, 14].map((dx) => (
        <rect key={dx} x={200 + dx - 4} y={70} width="8" height="60" fill={accentColor} transform={`rotate(${dx} ${200 + dx} 130)`} />
      ))}
    </g>
  );
};

const Comic: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      {/* a comic mural painted on a building wall, one of Brussels' "Route de la BD" panels */}
      <rect x="150" y="100" width="100" height="76" fill={light} stroke={dark} strokeWidth="4" />
      <circle cx="180" cy="140" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="175" cy="136" r="2" fill={dark} />
      <circle cx="186" cy="136" r="2" fill={dark} />
      <path d="M173 146 Q180 151 187 146" stroke={dark} strokeWidth="2" fill="none" />
      <path d="M212 112 h26 a6 6 0 0 1 6 6 v14 a6 6 0 0 1 -6 6 h-14 l-8 8 v-8 h-4 a6 6 0 0 1 -6 -6 v-14 a6 6 0 0 1 6 -6 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <text x="225" y="130" fontSize="16" fontWeight="700" fill={dark} textAnchor="middle">!</text>
    </g>
  );
};

const Multilinguismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path
        d="M130 110 h100 a14 14 0 0 1 14 14 v40 a14 14 0 0 1 -14 14 h-70 l-22 20 v-20 h-8 a14 14 0 0 1 -14 -14 v-40 a14 14 0 0 1 14 -14 Z"
        fill={accentColor}
      />
      <path
        d="M270 140 h-30 a14 14 0 0 0 -14 14 v34 a14 14 0 0 0 14 14 h56 l20 18 v-18 h4 a14 14 0 0 0 14 -14 v-34 a14 14 0 0 0 -14 -14 h-20"
        fill={dark}
      />
    </g>
  );
};

const Waffles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="105" width="100" height="70" rx="10" fill={accentColor} />
      {[170, 190, 210, 230].map((x) => (
        <line key={x} x1={x} y1="112" x2={x} y2="168" stroke={dark} strokeWidth="4" />
      ))}
      {[122, 140, 158].map((y) => (
        <line key={y} x1="156" y1={y} x2="244" y2={y} stroke={dark} strokeWidth="4" />
      ))}
      <circle cx="235" cy="185" r="5" fill={light} />
      <circle cx="215" cy="192" r="5" fill={light} />
    </g>
  );
};

const Atomium: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g stroke={dark} strokeWidth="5" fill="none">
      <line x1="200" y1="120" x2="160" y2="170" />
      <line x1="200" y1="120" x2="240" y2="170" />
      <line x1="200" y1="120" x2="200" y2="80" />
      <line x1="160" y1="170" x2="240" y2="170" />
      <circle cx="200" cy="120" r="16" fill={accentColor} stroke="none" />
      <circle cx="160" cy="170" r="14" fill={accentColor} stroke="none" />
      <circle cx="240" cy="170" r="14" fill={accentColor} stroke="none" />
      <circle cx="200" cy="80" r="14" fill={accentColor} stroke="none" />
    </g>
  );
};

const Ciclismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  return (
    <g stroke={dark} strokeWidth="5" fill="none" strokeLinecap="round">
      <circle cx="165" cy="180" r="26" />
      <circle cx="240" cy="180" r="26" />
      <path d="M165 180 L200 130 L240 180 M200 130 L188 180 M200 130 L190 108 h16" />
      <line x1="165" y1="180" x2="188" y2="180" />
    </g>
  );
};

const CarnavalBinche: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      {/* the Gilles mask: wax glasses, mustache, tall ostrich-feather hat */}
      <ellipse cx="200" cy="145" rx="30" ry="34" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="188" cy="138" r="8" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="212" cy="138" r="8" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="196" y1="138" x2="204" y2="138" stroke={dark} strokeWidth="3" />
      <path d="M188 158 Q194 152 200 158 Q206 152 212 158" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M172 116 Q200 70 228 116 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[184, 200, 216].map((x) => (
        <path key={x} d={`M${x} 100 Q${x - 6} 78 ${x} 60`} stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" />
      ))}
    </g>
  );
};

const CapitalEuropea: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.75);
  const points = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    return [200 + Math.cos(angle) * 60, 138 + Math.sin(angle) * 60];
  });
  return (
    <g>
      {points.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill={light} />
      ))}
      <rect x="180" y="118" width="40" height="40" fill={accentColor} />
    </g>
  );
};

const Saxofon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path
        d="M182 95 h16 v55 c20 0 32 16 32 34 c0 20 -18 32 -36 26 c-12 -4 -18 -16 -14 -26 l6 -10"
        fill="none"
        stroke={accentColor}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="190" cy="103" r="7" fill={light} stroke={dark} strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={205 + (i % 2) * 8} cy={150 + i * 16} r="4" fill={dark} />
      ))}
      <path d="M170 170 q10 12 22 10" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  );
};

const BigBang: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <circle cx="200" cy="140" r="10" fill={light} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line
          key={deg}
          x1="200"
          y1="140"
          x2={200 + Math.cos((deg * Math.PI) / 180) * (28 + (i % 2) * 10)}
          y2={140 + Math.sin((deg * Math.PI) / 180) * (28 + (i % 2) * 10)}
          stroke={accentColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
};

const AudreyHepburn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* elegant gown shoulders */}
      <path d="M175 190 C175 155 182 140 200 140 C218 140 225 155 225 190 Z" fill={dark} />
      <rect x="193" y="122" width="14" height="20" fill={light} />
      <circle cx="200" cy="112" r="17" fill={light} />
      {/* the signature upswept bun */}
      <path d="M183 106 a17 17 0 0 1 34 0 Q217 90 200 84 Q183 90 183 106 Z" fill={dark} />
      <circle cx="200" cy="80" r="7" fill={dark} />
      {/* pearl necklace */}
      {[-8, 0, 8].map((dx) => (
        <circle key={dx} cx={200 + dx} cy="132" r="2.4" fill="#fff" />
      ))}
      {/* long cigarette holder */}
      <line x1="217" y1="115" x2="238" y2="108" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
};

const Magritte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <ellipse cx="200" cy="130" rx="30" ry="18" fill={light} />
      <path d="M185 128 h34 c10 0 14 8 8 14 c-6 4 -30 4 -38 -2 c-6 -4 -6 -10 -4 -12 Z" fill={dark} />
      <rect x="192" y="112" width="16" height="10" fill={dark} />
      <path d="M188 112 q12 -8 24 0" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const JacquesBrel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* spotlight and stage */}
      <ellipse cx="200" cy="185" rx="46" ry="10" fill={light} opacity="0.6" />
      <rect x="150" y="185" width="100" height="8" fill={dark} />
      {/* standing microphone */}
      <line x1="230" y1="193" x2="230" y2="120" stroke={dark} strokeWidth="3" />
      <circle cx="230" cy="114" r="7" fill={dark} />
      {/* the singer, one arm reaching toward the mic mid-performance */}
      <circle cx="195" cy="108" r="14" fill={light} />
      <path d="M180 185 C178 150 184 135 195 132 C206 135 212 150 210 185 Z" fill={dark} />
      <path d="M205 138 Q225 130 222 108" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  );
};

const Pitufos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      {/* white trousers */}
      <path d="M186 175 Q182 145 200 140 Q218 145 214 175 Z" fill="#fff" stroke={dark} strokeWidth="2" />
      {/* blue torso and head */}
      <ellipse cx="200" cy="150" rx="16" ry="14" fill={accentColor} />
      <circle cx="200" cy="122" r="17" fill={accentColor} />
      <circle cx="194" cy="122" r="2" fill="#fff" />
      <circle cx="206" cy="122" r="2" fill="#fff" />
      {/* the white Phrygian cap */}
      <path d="M184 114 Q186 88 210 92 Q222 96 214 112 Q200 100 184 114 Z" fill="#fff" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const MannekenPis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const stone = "#9C9284";
  return (
    <g>
      {/* stone pedestal */}
      <rect x="178" y="185" width="44" height="14" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2" />
      <rect x="188" y="170" width="24" height="18" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2" />
      {/* the boy, curly hair and the statue's characteristic arched pose */}
      <circle cx="200" cy="130" r="12" fill={light} />
      <path d="M190 122 Q188 108 200 108 Q212 108 210 122" fill={dark} />
      <path d="M191 142 Q186 155 190 170 L210 170 Q214 155 209 142 Z" fill={light} />
      {/* the water arc */}
      <path d="M200 150 Q212 152 210 165" fill="none" stroke="#8FC1D6" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const GrandPlace: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="140" width="35" height="50" fill={accentColor} />
      <rect x="190" y="120" width="20" height="70" fill={dark} />
      <polygon points="190,120 200,95 210,120" fill={light} />
      <rect x="215" y="140" width="35" height="50" fill={accentColor} />
    </g>
  );
};

const DiamantesAmberes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <polygon points="200,105 225,130 200,180 175,130" fill={light} stroke={dark} strokeWidth="2" />
      <polygon points="175,130 225,130 200,145" fill={accentColor} />
      <line x1="200" y1="105" x2="200" y2="145" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const Tomorrowland: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="160" y="150" width="80" height="40" fill={accentColor} />
      <polygon points="160,150 175,120 190,150" fill={dark} />
      <polygon points="210,150 225,120 240,150" fill={dark} />
      <rect x="192" y="120" width="16" height="30" fill={light} />
    </g>
  );
};

export const belgiumIllustrations: Record<string, IllustrationDefinition> = {
  cerveza: { component: Cerveza, variant: "medallion" },
  chocolate: { component: Chocolate, variant: "medallion" },
  "papas-fritas": { component: PapasFritas, variant: "medallion" },
  comic: { component: Comic, variant: "medallion" },
  multilinguismo: { component: Multilinguismo, variant: "medallion" },
  waffles: { component: Waffles, variant: "medallion" },
  atomium: { component: Atomium },
  ciclismo: { component: Ciclismo },
  "carnaval-binche": { component: CarnavalBinche, variant: "medallion" },
  "capital-europea": { component: CapitalEuropea, variant: "medallion" },
  saxofon: { component: Saxofon, variant: "medallion" },
  "big-bang": { component: BigBang, variant: "medallion" },
  "audrey-hepburn": { component: AudreyHepburn, variant: "medallion" },
  magritte: { component: Magritte, variant: "medallion" },
  "jacques-brel": { component: JacquesBrel, variant: "medallion" },
  pitufos: { component: Pitufos, variant: "medallion" },
  "manneken-pis": { component: MannekenPis, variant: "medallion" },
  "grand-place": { component: GrandPlace },
  "diamantes-amberes": { component: DiamantesAmberes, variant: "medallion" },
  tomorrowland: { component: Tomorrowland },
};
