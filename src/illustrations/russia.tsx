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

const TablaPeriodica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={160 + col * 20}
            y={115 + row * 20}
            width="16"
            height="16"
            fill={(row + col) % 2 === 0 ? accentColor : light}
            stroke={dark}
            strokeWidth="1"
          />
        ))
      )}
    </g>
  );
};

const Tetris: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="120" width="14" height="14" fill={accentColor} />
      <rect x="189" y="120" width="14" height="14" fill={accentColor} />
      <rect x="189" y="134" width="14" height="14" fill={dark} />
      <rect x="203" y="134" width="14" height="14" fill={dark} />
      <rect x="175" y="150" width="14" height="14" fill={light} />
      <rect x="189" y="150" width="14" height="14" fill={light} />
      <rect x="203" y="150" width="14" height="14" fill={light} />
    </g>
  );
};

const YuriGagarin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <circle cx="200" cy="140" r="35" fill={light} stroke={accentColor} strokeWidth="6" />
      <circle cx="200" cy="140" r="18" fill={dark} />
      <path d="M180 175 q20 15 40 0" fill="none" stroke={accentColor} strokeWidth="4" />
    </g>
  );
};

const Tchaikovsky: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="180" y1="180" x2="220" y2="105" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="180" cy="180" rx="10" ry="6" fill={accentColor} />
      <path d="M220 105 q14 4 10 16" fill="none" stroke={accentColor} strokeWidth="4" />
    </g>
  );
};

const VanguardiaRusa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="160" y="115" width="55" height="55" fill={dark} />
      <circle cx="235" cy="150" r="24" fill={accentColor} />
      <rect x="205" y="160" width="18" height="40" fill={light} transform="rotate(20 214 180)" />
    </g>
  );
};

const EisensteinMontaje: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="155" y="120" width="35" height="45" fill={accentColor} transform="rotate(-8 172 142)" />
      <rect x="205" y="125" width="35" height="45" fill={dark} transform="rotate(6 222 147)" />
      <circle cx="172" cy="142" r="4" fill={light} />
      <circle cx="222" cy="147" r="4" fill={light} />
    </g>
  );
};

const RusiaMasGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="65" ry="30" fill={light} />
      <path d="M145 135 q60 -20 110 5 q-55 25 -110 -5 Z" fill={accentColor} />
      {[165, 195, 225].map((x) => (
        <line key={x} x1={x} y1="115" x2={x} y2="165" stroke={dark} strokeWidth="2" opacity="0.5" />
      ))}
    </g>
  );
};

const Caviar: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="35" ry="20" fill={accentColor} />
      {Array.from({ length: 14 }).map((_, i) => (
        <circle key={i} cx={175 + (i % 7) * 7} cy={143 + Math.floor(i / 7) * 12} r="3" fill={light} />
      ))}
    </g>
  );
};

const LagoBaikal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="55" ry="35" fill={light} stroke={accentColor} strokeWidth="4" />
      <ellipse cx="200" cy="150" rx="30" ry="16" fill={dark} opacity="0.5" />
      <polygon points="160,120 170,105 180,120" fill={accentColor} />
      <polygon points="215,115 225,100 235,115" fill={accentColor} />
    </g>
  );
};

const KizhiPogost: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  const domes = [162, 178, 194, 210, 226];
  return (
    <g>
      <rect x="150" y="185" width="100" height="15" fill={dark} />
      {domes.map((x, i) => (
        <g key={x}>
          <rect x={x - 4} y={165 - (i % 2) * 8} width="8" height="20" fill={accentColor} />
          <circle cx={x} cy={160 - (i % 2) * 8} r="7" fill={i % 2 === 0 ? accentColor : light} />
        </g>
      ))}
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
  "tabla-periodica": { component: TablaPeriodica },
  tetris: { component: Tetris },
  "yuri-gagarin": { component: YuriGagarin, variant: "medallion" },
  tchaikovsky: { component: Tchaikovsky },
  "vanguardia-rusa": { component: VanguardiaRusa },
  "eisenstein-montaje": { component: EisensteinMontaje },
  "rusia-mas-grande": { component: RusiaMasGrande },
  caviar: { component: Caviar, variant: "medallion" },
  "lago-baikal": { component: LagoBaikal },
  "kizhi-pogost": { component: KizhiPogost },
};
