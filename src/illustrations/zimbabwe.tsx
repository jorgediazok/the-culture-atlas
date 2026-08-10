import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CataratasVictoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="170" y="110" width="60" height="70" fill={accentColor} />
      <path d="M170 110 q30 -15 60 0" fill="none" stroke={light} strokeWidth="6" opacity="0.7" />
      <ellipse cx="200" cy="185" rx="45" ry="10" fill={dark} />
    </g>
  );
};

const GranZimbabwe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g fill={accentColor}>
      <rect x="150" y="150" width="100" height="40" fill={dark} />
      {[155, 175, 195, 215, 235].map((x) => (
        <rect key={x} x={x} y="120" width="12" height="70" />
      ))}
    </g>
  );
};

const AveZimbabwe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="192" y="150" width="16" height="35" fill={dark} />
      <ellipse cx="200" cy="140" rx="18" ry="14" fill={accentColor} />
      <polygon points="216,138 232,134 216,144" fill={light} />
      <circle cx="205" cy="135" r="3" fill={dark} />
    </g>
  );
};

const Hiperinflacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <rect x="155" y="125" width="90" height="50" rx="4" fill={light} stroke={accentColor} strokeWidth="4" />
      {[[172, 145], [195, 138], [218, 150], [200, 158]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill={dark} />
      ))}
    </g>
  );
};

const Mbira: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="130" width="70" height="45" rx="6" fill={dark} />
      {[172, 184, 196, 208, 220, 228].map((x, i) => (
        <rect key={x} x={x} y={122} width="5" height={20 + (i % 3) * 6} fill={accentColor} />
      ))}
      <ellipse cx="200" cy="175" rx="35" ry="8" fill={light} />
    </g>
  );
};

const EsculturaShona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M200 105 C220 110 224 140 210 155 C220 165 214 185 195 185 C178 185 172 168 180 156 C168 145 174 112 200 105 Z" fill={accentColor} />
      <ellipse cx="196" cy="130" rx="6" ry="10" fill={dark} />
      <ellipse cx="204" cy="160" rx="8" ry="12" fill={light} opacity="0.5" />
    </g>
  );
};

const ThomasMapfumo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M185 120 a15 18 0 1 0 0.1 0" fill={accentColor} transform="rotate(-15 190 150)" />
      <line x1="205" y1="105" x2="220" y2="170" stroke={dark} strokeWidth="5" />
      <path d="M225 105 q10 -6 4 -16 q10 4 6 16 Z" fill={light} />
    </g>
  );
};

const HwangeElefantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="195" cy="155" rx="34" ry="24" fill={accentColor} />
      <path d="M225 155 q20 6 16 28" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="200" cy="185" rx="40" ry="8" fill={light} />
    </g>
  );
};

const Sadza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M155 155 a45 30 0 0 0 90 0 Z" fill={dark} />
      <ellipse cx="200" cy="152" rx="42" ry="16" fill={accentColor} />
      <ellipse cx="200" cy="150" rx="20" ry="7" fill={light} />
    </g>
  );
};

const NyaminyamiKariba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 175 q10 -35 20 -35 q10 0 5 20 q15 -15 25 5 q10 -10 20 10" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <circle cx="235" cy="175" r="10" fill={dark} />
      <circle cx="230" cy="172" r="2" fill={light} />
    </g>
  );
};

export const zimbabweIllustrations: Record<string, IllustrationDefinition> = {
  "cataratas-victoria": { component: CataratasVictoria },
  "gran-zimbabwe": { component: GranZimbabwe },
  "ave-zimbabwe": { component: AveZimbabwe, variant: "medallion" },
  hiperinflacion: { component: Hiperinflacion, variant: "medallion" },
  mbira: { component: Mbira },
  "escultura-shona": { component: EsculturaShona },
  "thomas-mapfumo": { component: ThomasMapfumo },
  "hwange-elefantes": { component: HwangeElefantes },
  sadza: { component: Sadza },
  "nyaminyami-kariba": { component: NyaminyamiKariba },
};
