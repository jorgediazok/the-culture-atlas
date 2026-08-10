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

const SesAstra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="188" y="130" width="24" height="24" fill={accentColor} transform="rotate(45 200 142)" />
      <rect x="160" y="135" width="24" height="14" fill={dark} transform="rotate(45 172 142)" />
      <rect x="216" y="135" width="24" height="14" fill={dark} transform="rotate(-45 228 142)" />
      <path d="M200 154 q-20 20 -30 45 M200 154 q20 20 30 45" fill="none" stroke={light} strokeWidth="3" />
    </g>
  );
};

const VilleroyBoch: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 110 h40 v20 q20 10 20 35 q0 30 -40 30 q-40 0 -40 -30 q0 -25 20 -35 Z" fill={accentColor} />
      <ellipse cx="200" cy="130" rx="20" ry="6" fill={light} />
      <path d="M185 150 q15 10 30 0" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const RobertSchuman: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M175 140 q10 -20 25 -10 q15 -10 25 10 q-15 25 -25 35 q-10 -10 -25 -35 Z" fill={light} />
      <path d="M200 130 q-8 15 0 40" fill="none" stroke={dark} strokeWidth="3" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle
          key={deg}
          cx={200 + Math.cos((deg * Math.PI) / 180) * 34}
          cy={110 + Math.sin((deg * Math.PI) / 180) * 12}
          r="3"
          fill={accentColor}
        />
      ))}
    </g>
  );
};

const GranDuquesaCharlotte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="180" y="140" width="40" height="30" rx="4" fill={dark} />
      <circle cx="200" cy="140" r="16" fill={accentColor} />
      <polygon points="188,128 192,116 200,124 208,116 212,128" fill={light} />
    </g>
  );
};

const EdwardSteichen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <rect x="160" y="130" width="80" height="50" rx="6" fill={accentColor} />
      <circle cx="200" cy="155" r="18" fill={dark} />
      <circle cx="200" cy="155" r="9" fill={light} />
      <rect x="188" y="118" width="24" height="14" fill={dark} />
    </g>
  );
};

const LuxembourgCine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="160" y="120" width="80" height="14" fill={dark} />
      {[0, 1, 2, 3].map((i) => (
        <polygon key={i} points={`${168 + i * 18},120 ${178 + i * 18},120 ${174 + i * 18},134 ${164 + i * 18},134`} fill={i % 2 === 0 ? light : accentColor} />
      ))}
      <rect x="160" y="134" width="80" height="46" fill={accentColor} />
    </g>
  );
};

const CapitalInstitucionesUe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="175" y="110" width="50" height="80" fill={accentColor} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="183" y={120 + i * 16} width="34" height="8" fill={dark} />
      ))}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle
          key={deg}
          cx={200 + Math.cos((deg * Math.PI) / 180) * 24}
          cy={95 + Math.sin((deg * Math.PI) / 180) * 10}
          r="3"
          fill={light}
        />
      ))}
    </g>
  );
};

const CementerioAmericanoPatton: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.85);
  return (
    <g>
      {[170, 190, 210, 230].map((x) => (
        <g key={x}>
          <rect x={x - 2} y="130" width="4" height="30" fill={light} />
          <rect x={x - 10} y="140" width="20" height="4" fill={light} />
        </g>
      ))}
      <rect x="150" y="185" width="100" height="8" fill={accentColor} />
    </g>
  );
};

const Sprangprozessioun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {[170, 200, 230].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={110 + (i % 2) * 10} r="9" fill={light} />
          <line x1={x} y1={120 + (i % 2) * 10} x2={x} y2={155 + (i % 2) * 10} stroke={accentColor} strokeWidth="5" />
          <line x1={x - 8} y1={175 + (i % 2) * 10} x2={x} y2={155 + (i % 2) * 10} stroke={dark} strokeWidth="5" />
          <line x1={x + 8} y1={165 + (i % 2) * 10} x2={x} y2={155 + (i % 2) * 10} stroke={dark} strokeWidth="5" />
        </g>
      ))}
    </g>
  );
};

const Schueberfouer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="200" cy="140" r="38" fill="none" stroke={accentColor} strokeWidth="6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <circle
          key={deg}
          cx={200 + Math.cos((deg * Math.PI) / 180) * 38}
          cy={140 + Math.sin((deg * Math.PI) / 180) * 38}
          r="5"
          fill={i % 2 === 0 ? accentColor : dark}
        />
      ))}
      <rect x="196" y="178" width="8" height="18" fill={dark} />
      <circle cx="200" cy="140" r="8" fill={light} />
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
  "ses-astra": { component: SesAstra, variant: "medallion" },
  "villeroy-boch": { component: VilleroyBoch },
  "robert-schuman": { component: RobertSchuman, variant: "medallion" },
  "gran-duquesa-charlotte": { component: GranDuquesaCharlotte },
  "edward-steichen": { component: EdwardSteichen },
  "luxembourg-cine": { component: LuxembourgCine },
  "capital-instituciones-ue": { component: CapitalInstitucionesUe },
  "cementerio-americano-patton": { component: CementerioAmericanoPatton },
  sprangprozessioun: { component: Sprangprozessioun, variant: "medallion" },
  schueberfouer: { component: Schueberfouer, variant: "medallion" },
};
