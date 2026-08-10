import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GranMuralla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 185 q15 -40 30 -30 q10 -25 25 -10 q10 -25 25 -5 q10 -20 25 -5 q10 -15 20 5 L275 185 Z" fill={accentColor} />
      {[165, 195, 225, 255].map((x) => (
        <rect key={x} x={x} y="150" width="10" height="14" fill={dark} />
      ))}
      <ellipse cx="212" cy="188" rx="80" ry="8" fill={light} />
    </g>
  );
};

const CuatroGrandesInventos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="195" cy="140" r="30" fill={light} stroke={accentColor} strokeWidth="5" />
      <path d="M195 118 L195 140 L212 150" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="222" y="128" width="24" height="30" rx="3" fill={accentColor} />
    </g>
  );
};

const Confucio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="165" y="115" width="70" height="8" fill={dark} />
      <rect x="165" y="115" width="70" height="55" fill={accentColor} />
      <line x1="175" y1="130" x2="225" y2="130" stroke={light} strokeWidth="3" />
      <line x1="175" y1="142" x2="225" y2="142" stroke={light} strokeWidth="3" />
      <line x1="175" y1="154" x2="210" y2="154" stroke={light} strokeWidth="3" />
    </g>
  );
};

const EjercitoTerracota: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[172, 200, 228].map((x, i) => (
        <g key={x}>
          <rect x={x - 10} y={140 - (i % 2) * 4} width="20" height="45" fill={i % 2 === 0 ? accentColor : dark} />
          <circle cx={x} cy={128 - (i % 2) * 4} r="10" fill={light} />
        </g>
      ))}
    </g>
  );
};

const TeChino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M170 140 h40 v20 c14 4 18 18 18 30 c0 16 -12 26 -29 26 h-18 c-17 0 -29 -10 -29 -26 c0 -12 4 -26 18 -30 Z" fill={accentColor} />
      <rect x="176" y="132" width="28" height="10" fill={dark} />
      <ellipse cx="190" cy="180" rx="18" ry="8" fill={light} opacity="0.5" />
    </g>
  );
};

const AnoNuevoChino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="180" y="115" width="40" height="55" rx="6" fill={accentColor} />
      <rect x="180" y="130" width="40" height="6" fill={dark} />
      <circle cx="200" cy="150" r="10" fill={light} />
      <line x1="200" y1="115" x2="200" y2="105" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const CaligrafiaChina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="165" y="115" width="70" height="65" fill={light} />
      <path d="M200 125 v50 M180 140 h40 M185 160 q15 10 30 0" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="230" y1="110" x2="245" y2="95" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const KungFuShaolin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <circle cx="200" cy="118" r="14" fill={light} />
      <path d="M200 132 v25 M200 145 L175 130 M200 145 L228 138 M200 157 L180 190 M200 157 L222 185" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="200" cy="118" r="14" fill="none" stroke={accentColor} strokeWidth="3" />
    </g>
  );
};

const PandasGigantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.7);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="35" ry="28" fill={light} stroke={dark} strokeWidth="2" />
      <ellipse cx="180" cy="140" rx="10" ry="12" fill={dark} />
      <ellipse cx="220" cy="140" rx="10" ry="12" fill={dark} />
      <circle cx="200" cy="120" r="18" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="192" cy="105" r="6" fill={dark} />
      <circle cx="208" cy="105" r="6" fill={dark} />
      <rect x="185" y="170" width="6" height="16" fill={accentColor} />
    </g>
  );
};

const TrenAltaVelocidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M155 165 h70 a15 15 0 0 0 15 -15 v-10 q0 -15 -25 -15 h-60 Z" fill={accentColor} />
      <rect x="150" y="165" width="100" height="12" fill={dark} />
      <rect x="175" y="135" width="20" height="14" rx="3" fill={light} />
      <rect x="205" y="135" width="20" height="14" rx="3" fill={light} />
    </g>
  );
};

export const chinaIllustrations: Record<string, IllustrationDefinition> = {
  "gran-muralla": { component: GranMuralla },
  "cuatro-grandes-inventos": { component: CuatroGrandesInventos, variant: "medallion" },
  confucio: { component: Confucio },
  "ejercito-terracota": { component: EjercitoTerracota },
  "te-chino": { component: TeChino },
  "ano-nuevo-chino": { component: AnoNuevoChino, variant: "medallion" },
  "caligrafia-china": { component: CaligrafiaChina },
  "kung-fu-shaolin": { component: KungFuShaolin, variant: "medallion" },
  "pandas-gigantes": { component: PandasGigantes, variant: "medallion" },
  "tren-alta-velocidad": { component: TrenAltaVelocidad },
};
