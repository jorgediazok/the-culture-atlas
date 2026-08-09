import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Samovar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M170 130 h60 v10 c14 4 18 20 18 34 c0 26 -18 40 -48 40 c-30 0 -48 -14 -48 -40 c0 -14 4 -30 18 -34 Z"
        fill={accentColor}
      />
      <rect x="185" y="122" width="30" height="10" fill={dark} />
      <rect x="140" y="165" width="20" height="8" fill={dark} />
      <circle cx="200" cy="180" r="6" fill={light} />
    </g>
  );
};

const Matrioska: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 100 C215 100 224 112 224 126 C236 132 242 148 242 168 C242 190 224 204 200 204 C176 204 158 190 158 168 C158 148 164 132 176 126 C176 112 185 100 200 100 Z" fill={accentColor} />
      <circle cx="200" cy="122" r="10" fill={light} />
      <path d="M188 150 h24 v30 h-24 Z" fill={dark} />
    </g>
  );
};

const Transiberiano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="150,220 160,190 240,190 250,220" fill={dark} />
      <rect x="160" y="192" width="80" height="20" fill={accentColor} />
      <rect x="170" y="196" width="18" height="12" fill={light} />
      <rect x="196" y="196" width="18" height="12" fill={light} />
      <polygon points="130,240 150,200 130,200" fill={light} />
    </g>
  );
};

const Bolshoi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M170 100 C160 140 165 180 175 210 h50 c10,-30 15,-70 5,-110 Z" fill={dark} />
      <circle cx="200" cy="120" r="10" fill={light} />
      <line x1="200" y1="130" x2="200" y2="180" stroke={light} strokeWidth="3" />
    </g>
  );
};

const SanBasilio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  const domes = [
    { x: 155, color: dark },
    { x: 180, color: accentColor },
    { x: 205, color: light },
    { x: 230, color: accentColor },
    { x: 255, color: dark },
  ];
  return (
    <g>
      <rect x="140" y="200" width="130" height="30" fill={dark} />
      {domes.map((d) => (
        <g key={d.x}>
          <rect x={d.x - 8} y="185" width="16" height="20" fill={d.color} />
          <path d={`M${d.x - 12} 185 C${d.x - 12} 165 ${d.x + 12} 165 ${d.x + 12} 185 Z`} fill={d.color} />
          <polygon points={`${d.x - 2},165 ${d.x + 2},165 ${d.x},155`} fill={d.color} />
        </g>
      ))}
    </g>
  );
};

const Banya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="190" rx="40" ry="14" fill={dark} />
      {[178, 194, 210, 226].map((x, i) => (
        <circle key={x} cx={x} cy={185 - (i % 2) * 4} r="8" fill={accentColor} />
      ))}
      <path d="M160 150 C150 130 160 110 175 108 C180 95 200 95 200 112 C210 100 225 110 220 128 C232 130 232 150 218 155 Z" fill={light} />
    </g>
  );
};

const MetroMoscu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="120" width="16" height="90" fill={accentColor} />
      <rect x="234" y="120" width="16" height="90" fill={accentColor} />
      <path d="M150 120 C150 95 250 95 250 120 Z" fill={dark} />
      <rect x="150" y="205" width="100" height="10" fill={dark} />
      <circle cx="200" cy="108" r="8" fill={light} />
    </g>
  );
};

const GranNovelaRusa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="175" width="100" height="16" rx="3" fill={accentColor} />
      <rect x="158" y="157" width="90" height="16" rx="3" fill={dark} />
      <rect x="150" y="139" width="95" height="16" rx="3" fill={accentColor} />
      <rect x="162" y="121" width="80" height="16" rx="3" fill={light} />
    </g>
  );
};

const DedMoroz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M180 240 C170 200 175 160 200 150 C225 160 230 200 220 240 Z" fill={dark} />
      <circle cx="200" cy="140" r="18" fill={light} />
      <polygon points="185,125 215,125 200,105" fill={accentColor} />
      <circle cx="200" cy="106" r="5" fill={light} />
    </g>
  );
};

const VodkaBrindis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <rect x="185" y="100" width="30" height="70" rx="6" fill={light} stroke={accentColor} strokeWidth="4" />
      <rect x="190" y="92" width="20" height="10" fill={dark} />
      <polygon points="225,150 245,158 225,166" fill={accentColor} />
      <polygon points="160,150 140,158 160,166" fill={dark} />
    </g>
  );
};

export const russiaIllustrations: Record<string, IllustrationDefinition> = {
  samovar: { component: Samovar, variant: "medallion" },
  matrioska: { component: Matrioska, variant: "medallion" },
  transiberiano: { component: Transiberiano },
  bolshoi: { component: Bolshoi, variant: "medallion" },
  "san-basilio": { component: SanBasilio },
  banya: { component: Banya, variant: "medallion" },
  "metro-moscu": { component: MetroMoscu },
  "gran-novela-rusa": { component: GranNovelaRusa, variant: "medallion" },
  "ded-moroz": { component: DedMoroz },
  "vodka-brindis": { component: VodkaBrindis, variant: "medallion" },
};
