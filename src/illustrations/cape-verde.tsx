import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Morna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M185 150 a25 25 0 1 0 0.1 0 Z" fill={accentColor} />
      <line x1="205" y1="130" x2="220" y2="90" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M232 92 a20 26 0 0 1 6 34" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const CesariaEvora: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="22" ry="30" fill={accentColor} />
      <circle cx="200" cy="112" r="16" fill={light} />
      <rect x="197" y="180" width="6" height="14" fill={dark} />
      <rect x="212" y="182" width="6" height="12" fill={dark} />
    </g>
  );
};

const Crioulo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 115 h60 a10 10 0 0 1 10 10 v22 a10 10 0 0 1 -10 10 h-38 l-14 14 v-14 h-8 a10 10 0 0 1 -10 -10 v-22 a10 10 0 0 1 10 -10 Z" fill={accentColor} />
      <path d="M215 150 h55 a10 10 0 0 1 10 10 v18 a10 10 0 0 1 -10 10 h-6 v12 l-14 -12 h-35 a10 10 0 0 1 -10 -10 v-18 a10 10 0 0 1 10 -10 Z" fill={dark} />
      <circle cx="178" cy="136" r="4" fill={light} />
      <circle cx="192" cy="136" r="4" fill={light} />
    </g>
  );
};

const Cachupa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M155 150 a45 32 0 0 0 90 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="150" rx="45" ry="13" fill={light} />
      <rect x="146" y="182" width="14" height="18" fill={dark} />
      <rect x="240" y="182" width="14" height="18" fill={dark} />
      <path d="M182 118 q6 -14 0 -22" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M215 118 q6 -14 0 -22" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const DiezIslas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="170" cy="165" rx="22" ry="12" fill={accentColor} />
      <ellipse cx="215" cy="172" rx="16" ry="9" fill={dark} />
      <ellipse cx="250" cy="160" rx="12" ry="7" fill={light} />
      <polygon points="170,165 160,140 180,150" fill={dark} />
    </g>
  );
};

const PedraDeLume: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M150 160 a50 22 0 0 0 100 0 Z" fill={dark} />
      <ellipse cx="200" cy="158" rx="42" ry="16" fill={light} />
      <polygon points="150,160 165,110 200,160" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const CarnavalMindelo: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  const dark = shade(accentColor, 0.3);
  const angles = [-55, -33, -11, 11, 33, 55];
  return (
    <g>
      {angles.map((deg, i) => (
        <rect
          key={deg}
          x="196"
          y="78"
          width="8"
          height="48"
          rx="4"
          fill={i % 2 === 0 ? accentColor : light}
          transform={`rotate(${deg} 200 140)`}
        />
      ))}
      <circle cx="200" cy="148" r="22" fill={dark} />
    </g>
  );
};

const Batuku: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="42" ry="18" fill={accentColor} />
      <ellipse cx="200" cy="152" rx="42" ry="18" fill={light} />
      <path d="M175 120 q25 -20 50 0" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const PicoDoFogo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="200,95 245,190 155,190" fill={dark} />
      <polygon points="200,95 215,130 185,130" fill={accentColor} />
      <path d="M200 95 q6 -14 -4 -24" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
    </g>
  );
};

const Diaspora: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon points="160,150 250,140 220,155 250,170" fill={accentColor} />
      <polygon points="160,150 195,140 195,160" fill={dark} />
      <circle cx="230" cy="105" r="10" fill={light} />
      <circle cx="255" cy="120" r="7" fill={light} opacity="0.7" />
    </g>
  );
};

export const capeVerdeIllustrations: Record<string, IllustrationDefinition> = {
  morna: { component: Morna, variant: "medallion" },
  "cesaria-evora": { component: CesariaEvora, variant: "medallion" },
  crioulo: { component: Crioulo },
  cachupa: { component: Cachupa },
  "diez-islas": { component: DiezIslas },
  "pedra-de-lume": { component: PedraDeLume },
  "carnaval-mindelo": { component: CarnavalMindelo, variant: "medallion" },
  batuku: { component: Batuku },
  "pico-do-fogo": { component: PicoDoFogo },
  diaspora: { component: Diaspora },
};
