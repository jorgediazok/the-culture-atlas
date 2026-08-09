import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Trilinguismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="130" width="16" height="110" fill={dark} />
      <polygon points="208,150 270,150 258,170 208,170" fill={accentColor} />
      <polygon points="192,180 130,180 142,200 192,200" fill={dark} />
      <polygon points="208,210 262,210 250,230 208,230" fill={light} />
    </g>
  );
};

const Casamatas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M140 230 v-40 a60 60 0 0 1 120 0 v40 Z" fill={dark} />
      <path d="M160 230 v-30 a40 40 0 0 1 80 0 v30 Z" fill={accentColor} />
      <rect x="190" y="190" width="30" height="14" fill={light} />
      <circle cx="205" cy="197" r="6" fill={dark} />
    </g>
  );
};

const CentroFinanciero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="110" width="45" height="130" fill={dark} />
      <rect x="205" y="140" width="45" height="100" fill={accentColor} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="160" y={125 + i * 22} width="12" height="12" fill={light} />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x="215" y={155 + i * 22} width="12" height="12" fill={light} />
      ))}
      <circle cx="230" cy="120" r="16" fill={light} stroke={dark} strokeWidth="3" />
    </g>
  );
};

const TransporteGratis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="140" y="130" width="120" height="60" rx="14" fill={accentColor} />
      <rect x="155" y="142" width="30" height="24" rx="4" fill={light} />
      <rect x="195" y="142" width="30" height="24" rx="4" fill={light} />
      <circle cx="165" cy="196" r="9" fill={dark} />
      <circle cx="235" cy="196" r="9" fill={dark} />
      <rect x="140" y="115" width="10" height="18" fill={dark} />
    </g>
  );
};

const CunaSchengen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="140,220 260,220 244,244 156,244" fill={dark} />
      <rect x="170" y="185" width="60" height="35" fill={accentColor} />
      <rect x="192" y="150" width="8" height="35" fill={dark} />
      <polygon points="200,150 230,158 200,166" fill={light} />
    </g>
  );
};

const ValleMosela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="110" width="140" height="20" fill={light} />
      <rect x="145" y="135" width="120" height="20" fill={accentColor} />
      <rect x="160" y="160" width="105" height="20" fill={dark} />
      <circle cx="200" cy="200" r="14" fill={accentColor} />
      <circle cx="215" cy="210" r="14" fill={dark} />
      <circle cx="185" cy="210" r="14" fill={accentColor} />
    </g>
  );
};

const RadioLuxembourg: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <rect x="155" y="130" width="90" height="55" rx="8" fill={accentColor} />
      <circle cx="180" cy="157" r="14" fill={light} stroke={dark} strokeWidth="3" />
      <rect x="205" y="147" width="28" height="8" fill={light} />
      <rect x="205" y="160" width="20" height="8" fill={light} />
      <line x1="220" y1="130" x2="235" y2="100" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const GranDucado: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon
        points="160,180 160,140 180,160 200,130 220,160 240,140 240,180"
        fill={accentColor}
      />
      <rect x="158" y="178" width="84" height="14" rx="4" fill={accentColor} />
      <circle cx="180" cy="140" r="6" fill={light} />
      <circle cx="200" cy="130" r="7" fill={light} />
      <circle cx="220" cy="140" r="6" fill={light} />
    </g>
  );
};

const Peckvillercher: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M170 150 C170 130 190 118 210 122 C230 126 238 146 224 160 C232 162 236 168 232 176 C224 190 200 190 188 176 C176 176 168 164 170 150 Z"
        fill={accentColor}
      />
      <circle cx="212" cy="136" r="4" fill={dark} />
      <polygon points="234 150, 248 156, 234 162" fill={light} />
    </g>
  );
};

const CastillosRurales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="160" y="170" width="80" height="60" fill={dark} />
      <rect x="150" y="140" width="20" height="90" fill={accentColor} />
      <rect x="230" y="140" width="20" height="90" fill={accentColor} />
      <polygon points="150,140 160,120 170,140" fill={light} />
      <polygon points="230,140 240,120 250,140" fill={light} />
      <rect x="192" y="195" width="16" height="35" fill={light} />
    </g>
  );
};

export const luxembourgIllustrations: Record<string, IllustrationDefinition> = {
  trilinguismo: { component: Trilinguismo, variant: "medallion" },
  casamatas: { component: Casamatas },
  "centro-financiero": { component: CentroFinanciero },
  "transporte-gratis": { component: TransporteGratis },
  "cuna-schengen": { component: CunaSchengen },
  "valle-mosela": { component: ValleMosela },
  "radio-luxembourg": { component: RadioLuxembourg, variant: "medallion" },
  "gran-ducado": { component: GranDucado, variant: "medallion" },
  peckvillercher: { component: Peckvillercher, variant: "medallion" },
  "castillos-rurales": { component: CastillosRurales },
};
