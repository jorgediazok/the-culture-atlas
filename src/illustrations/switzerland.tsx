import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ChocolateSuizo: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <polygon points="200,95 250,180 150,180" fill={accentColor} />
      <polygon points="200,95 225,138 175,138" fill={light} />
    </g>
  );
};

const Relojeria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="200" cy="138" r="55" fill={light} stroke={accentColor} strokeWidth="6" />
      <line x1="200" y1="138" x2="200" y2="105" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <line x1="200" y1="138" x2="222" y2="150" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <circle cx="200" cy="138" r="6" fill={dark} />
    </g>
  );
};

const AlpesEsqui: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <polygon points="130,240 200,120 240,190 260,160 300,240" fill={accentColor} />
      <polygon points="200,120 218,152 182,152" fill={light} />
      <polygon points="260,160 272,182 248,182" fill={light} />
      <path d="M160 220 l14 -14 10 8 16 -18" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const Neutralidad: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <rect x="150" y="88" width="100" height="100" rx="10" fill={accentColor} />
      <rect x="185" y="106" width="30" height="64" fill={light} />
      <rect x="168" y="123" width="64" height="30" fill={light} />
    </g>
  );
};

const Fondue: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M150 170 a50 30 0 0 0 100 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="170" rx="50" ry="14" fill={light} />
      <rect x="140" y="205" width="16" height="20" fill={dark} />
      <rect x="244" y="205" width="16" height="20" fill={dark} />
      <line x1="200" y1="150" x2="180" y2="110" stroke={dark} strokeWidth="4" />
      <circle cx="180" cy="105" r="6" fill={dark} />
    </g>
  );
};

const CuatroIdiomas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="140" y="115" width="120" height="70" rx="6" fill={accentColor} />
      <rect x="150" y="125" width="100" height="50" rx="4" fill="none" stroke={light} strokeWidth="2" />
      {[135, 148, 161].map((y) => (
        <line key={y} x1="165" y1={y} x2="235" y2={y} stroke={dark} strokeWidth="4" strokeLinecap="round" />
      ))}
    </g>
  );
};

const DemocraciaDirecta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon points="150,170 250,170 235,220 165,220" fill={accentColor} />
      <rect x="180" y="150" width="40" height="10" fill={dark} />
      <polygon points="190,90 210,90 210,150 190,150" fill={light} />
      <polygon points="185,95 215,95 200,80" fill={dark} />
    </g>
  );
};

const Puntualidad: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.75);
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="200" cy="140" r="58" fill={light} stroke={accentColor} strokeWidth="7" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="200"
          y1="90"
          x2="200"
          y2="98"
          stroke={dark}
          strokeWidth="3"
          transform={`rotate(${deg} 200 140)`}
        />
      ))}
      <line x1="200" y1="140" x2="200" y2="108" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <line x1="200" y1="140" x2="228" y2="140" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const Trenes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="140" y="130" width="120" height="60" rx="14" fill={accentColor} />
      <rect x="155" y="142" width="30" height="24" rx="4" fill={light} />
      <rect x="195" y="142" width="30" height="24" rx="4" fill={light} />
      <circle cx="165" cy="196" r="9" fill={dark} />
      <circle cx="235" cy="196" r="9" fill={dark} />
    </g>
  );
};

const NavajaSuiza: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <rect x="160" y="105" width="80" height="34" rx="10" fill={accentColor} />
      <rect x="163" y="112" width="74" height="4" fill={light} opacity="0.6" />
      <polygon points="238,116 275,122 238,128" fill={light} stroke={accentColor} strokeWidth="2" />
    </g>
  );
};

export const switzerlandIllustrations: Record<string, IllustrationDefinition> = {
  "chocolate-suizo": { component: ChocolateSuizo, variant: "medallion" },
  relojeria: { component: Relojeria, variant: "medallion" },
  "alpes-esqui": { component: AlpesEsqui },
  neutralidad: { component: Neutralidad, variant: "medallion" },
  fondue: { component: Fondue },
  "cuatro-idiomas": { component: CuatroIdiomas, variant: "medallion" },
  "democracia-directa": { component: DemocraciaDirecta },
  puntualidad: { component: Puntualidad, variant: "medallion" },
  trenes: { component: Trenes },
  "navaja-suiza": { component: NavajaSuiza, variant: "medallion" },
};
