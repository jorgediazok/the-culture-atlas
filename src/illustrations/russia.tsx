import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Samovar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* table */}
      <rect x="120" y="230" width="160" height="14" fill={dark} opacity="0.4" />
      {/* samovar body */}
      <path d="M160 220 L160 170 Q160 130 200 122 Q240 130 240 170 L240 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="200" cy="170" rx="40" ry="10" fill={light} opacity="0.5" />
      {/* lid and handle */}
      <rect x="188" y="108" width="24" height="14" fill={dark} />
      <circle cx="200" cy="104" r="5" fill={dark} />
      {/* spout */}
      <path d="M160 195 Q140 195 138 210" fill="none" stroke={dark} strokeWidth="6" />
      {/* handles */}
      <path d="M160 165 Q145 165 145 180" fill="none" stroke={dark} strokeWidth="5" />
      <path d="M240 165 Q255 165 255 180" fill="none" stroke={dark} strokeWidth="5" />
      {/* steam */}
      <path d="M195 100 Q190 85 198 72" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M208 100 Q214 85 206 72" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const MATRIOSKA_DOLLS = [
  { x: 135, w: 60, h: 100 },
  { x: 185, w: 48, h: 82 },
  { x: 225, w: 38, h: 66 },
  { x: 258, w: 30, h: 52 },
  { x: 284, w: 22, h: 40 },
];

const Matrioska: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  return (
    <g>
      {MATRIOSKA_DOLLS.map((d, i) => {
        const bottom = 240;
        const top = bottom - d.h;
        return (
          <g key={d.x}>
            <rect x={d.x - d.w / 2} y={top + d.w * 0.4} width={d.w} height={d.h - d.w * 0.4} rx={d.w * 0.35} fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="2" />
            <circle cx={d.x} cy={top + d.w * 0.35} r={d.w * 0.35} fill={skin} stroke={dark} strokeWidth="1.5" />
            <path d={`M${d.x - d.w * 0.4} ${top + d.w * 0.35} Q${d.x} ${top - d.w * 0.1} ${d.x + d.w * 0.4} ${top + d.w * 0.35}`} fill={dark} />
          </g>
        );
      })}
    </g>
  );
};

const PINE_X = [110, 290];

const Transiberiano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const snow = "#F5F0E6";
  const pine = "#2D4A34";
  return (
    <g>
      {/* snowy ground */}
      <rect x="90" y="220" width="220" height="25" fill={snow} />
      {/* pine trees on either side */}
      {PINE_X.map((x) => (
        <g key={x}>
          <polygon points={`${x - 18},210 ${x + 18},210 ${x},180`} fill={pine} />
          <polygon points={`${x - 14},190 ${x + 14},190 ${x},165`} fill={pine} />
          <rect x={x - 4} y="210" width="8" height="12" fill={dark} />
        </g>
      ))}
      {/* train */}
      <rect x="140" y="180" width="120" height="40" rx="6" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="188" width="20" height="16" fill={light} />
      <rect x="180" y="188" width="20" height="16" fill={light} />
      <rect x="210" y="188" width="20" height="16" fill={light} />
      <circle cx="160" cy="222" r="8" fill={dark} />
      <circle cx="240" cy="222" r="8" fill={dark} />
    </g>
  );
};

const Bolshoi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  return (
    <g>
      {/* stage curtains */}
      <path d="M105 100 Q125 170 105 240 L135 240 Q150 170 135 100 Z" fill={dark} opacity="0.85" />
      <path d="M295 100 Q275 170 295 240 L265 240 Q250 170 265 100 Z" fill={dark} opacity="0.85" />
      {/* ballerina en pointe */}
      <circle cx="200" cy="140" r="12" fill={skin} />
      <path d="M188 155 Q200 148 212 155 L214 190 Q200 198 186 190 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="200" cy="190" rx="34" ry="10" fill={accentColor} opacity="0.8" />
      <line x1="196" y1="198" x2="192" y2="235" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <line x1="204" y1="198" x2="222" y2="220" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <path d="M188 160 Q170 150 165 130" fill="none" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <path d="M212 160 Q230 150 235 130" fill="none" stroke={skin} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const SAN_BASILIO_DOMES = [
  { x: 130, h: 45, c: "#C1272D" },
  { x: 165, h: 60, c: "#F4A300" },
  { x: 200, h: 75, c: "#2A9D8F" },
  { x: 235, h: 60, c: "#C1272D" },
  { x: 270, h: 45, c: "#F4A300" },
];

const SanBasilio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      {/* base building */}
      <rect x="110" y="200" width="180" height="35" fill={dark} />
      {SAN_BASILIO_DOMES.map((d) => (
        <g key={d.x}>
          <rect x={d.x - 10} y={200 - d.h * 0.3} width="20" height={d.h * 0.3} fill={d.c} stroke={dark} strokeWidth="1.5" />
          <path d={`M${d.x - 16} ${200 - d.h * 0.3} Q${d.x - 16} ${200 - d.h} ${d.x} ${200 - d.h - 14} Q${d.x + 16} ${200 - d.h} ${d.x + 16} ${200 - d.h * 0.3} Z`} fill={d.c} stroke={dark} strokeWidth="1.5" />
          <circle cx={d.x} cy={200 - d.h - 18} r="3" fill={dark} />
        </g>
      ))}
    </g>
  );
};

const Banya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* wooden interior */}
      <rect x="100" y="110" width="220" height="130" fill={wood} opacity="0.3" />
      {/* bench */}
      <rect x="110" y="200" width="200" height="14" fill={wood} />
      {/* hot stones */}
      <ellipse cx="220" cy="200" rx="28" ry="14" fill={dark} />
      <circle cx="205" cy="192" r="9" fill={shade(dark, 0.15)} />
      <circle cx="222" cy="188" r="10" fill={shade(dark, 0.1)} />
      <circle cx="238" cy="194" r="8" fill={shade(dark, 0.2)} />
      {/* steam */}
      <path d="M215 175 Q210 160 218 148" fill="none" stroke={light} strokeWidth="3" opacity="0.7" />
      <path d="M228 175 Q233 160 226 148" fill="none" stroke={light} strokeWidth="3" opacity="0.6" />
      {/* venik birch branches hanging */}
      <line x1="140" y1="140" x2="140" y2="170" stroke={dark} strokeWidth="2" />
      <path d="M140 145 Q125 155 122 175 Q135 165 140 155 Q145 165 158 175 Q155 155 140 145 Z" fill={accentColor} />
    </g>
  );
};

const METRO_COLUMNS = [130, 175, 225, 270];

const MetroMoscu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const gold = "#D4AF37";
  return (
    <g>
      {/* platform floor */}
      <rect x="100" y="225" width="220" height="15" fill={dark} opacity="0.4" />
      {METRO_COLUMNS.map((x) => (
        <g key={x}>
          <rect x={x - 10} y="130" width="20" height="95" fill={light} stroke={dark} strokeWidth="1.5" />
          <rect x={x - 14} y="120" width="28" height="10" fill={dark} />
        </g>
      ))}
      {/* chandelier */}
      <line x1="200" y1="90" x2="200" y2="110" stroke={gold} strokeWidth="2" />
      <path d="M175 110 Q200 100 225 110 Q220 125 200 122 Q180 125 175 110 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.5" />
      <circle cx="185" cy="118" r="3" fill="#fff" />
      <circle cx="200" cy="120" r="3" fill="#fff" />
      <circle cx="215" cy="118" r="3" fill="#fff" />
    </g>
  );
};

const GranNovelaRusa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const wood = "#8B5A2B";
  return (
    <g>
      <rect x="100" y="225" width="220" height="18" fill={wood} />
      <rect x="140" y="195" width="130" height="24" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <rect x="150" y="171" width="115" height="24" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="1.5" />
      <rect x="142" y="147" width="120" height="24" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <rect x="155" y="123" width="100" height="24" fill={light} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const DedMoroz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  const treeGreen = "#2E7D32";
  return (
    <g>
      {/* decorated tree */}
      <polygon points="255,240 225,240 240,195" fill={treeGreen} />
      <polygon points="248,205 232,205 240,175" fill={treeGreen} />
      <polygon points="245,180 235,180 240,160" fill={treeGreen} />
      <circle cx="232" cy="220" r="4" fill="#F4A300" />
      <circle cx="248" cy="200" r="4" fill="#C1272D" />
      <circle cx="238" cy="185" r="3" fill="#F4A300" />
      {/* Ded Moroz figure */}
      <circle cx="160" cy="150" r="14" fill={skin} />
      <path d="M148 145 Q160 130 172 145 Q176 155 160 158 Q144 155 148 145 Z" fill="#fff" />
      <path d="M140 165 Q160 155 180 165 L176 235 L144 235 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="150" y="200" width="20" height="8" fill="#fff" />
      {/* staff */}
      <line x1="185" y1="170" x2="185" y2="235" stroke={dark} strokeWidth="4" />
      <circle cx="185" cy="166" r="6" fill={light} />
    </g>
  );
};

const VODKA_BREAD = "#8B5A2B";
const VODKA_PICKLE = "#5B8C3E";

const VodkaBrindis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      {/* bottle */}
      <rect x="180" y="120" width="30" height="90" rx="4" fill={light} stroke={accentColor} strokeWidth="3" />
      <rect x="188" y="105" width="14" height="18" fill={dark} />
      {/* small glasses */}
      <path d="M140 190 L145 165 L165 165 L170 190 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M225 190 L230 165 L250 165 L255 190 Z" fill={light} stroke={dark} strokeWidth="2" />
      {/* dark bread */}
      <ellipse cx="150" cy="215" rx="24" ry="14" fill={VODKA_BREAD} />
      {/* pickles */}
      <ellipse cx="245" cy="212" rx="8" ry="18" fill={VODKA_PICKLE} transform="rotate(20 245 212)" />
      <ellipse cx="258" cy="216" rx="8" ry="18" fill={VODKA_PICKLE} transform="rotate(-10 258 216)" />
    </g>
  );
};

const ELEMENT_SYMBOLS = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg"];

const TablaPeriodica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {ELEMENT_SYMBOLS.map((sym, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        return (
          <g key={sym}>
            <rect x={130 + col * 45} y={120 + row * 45} width="38" height="38" fill={(row + col) % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="1.5" />
            <text x={149 + col * 45} y={144 + row * 45} fontSize="16" fontWeight="700" fill={dark} textAnchor="middle">
              {sym}
            </text>
          </g>
        );
      })}
    </g>
  );
};

const Tetris: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="130" y="205" width="140" height="35" fill={dark} opacity="0.2" />
      {/* L piece falling */}
      <rect x="150" y="150" width="18" height="18" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <rect x="150" y="168" width="18" height="18" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <rect x="150" y="186" width="18" height="18" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <rect x="168" y="186" width="18" height="18" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {/* square piece already settled */}
      <rect x="210" y="186" width="18" height="18" fill={light} stroke={dark} strokeWidth="1.5" />
      <rect x="228" y="186" width="18" height="18" fill={light} stroke={dark} strokeWidth="1.5" />
      <rect x="210" y="204" width="18" height="18" fill={light} stroke={dark} strokeWidth="1.5" />
      <rect x="228" y="204" width="18" height="18" fill={light} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const YuriGagarin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* rocket launching in background */}
      <path d="M255 230 L265 190 L275 230 Z" fill={dark} opacity="0.6" />
      <path d="M258 230 L272 230 L268 240 L262 240 Z" fill={dark} opacity="0.6" />
      <path d="M262 230 Q262 245 258 255 M268 230 Q268 245 272 255" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* cosmonaut helmet */}
      <circle cx="180" cy="160" r="45" fill={light} stroke={accentColor} strokeWidth="7" />
      <circle cx="180" cy="160" r="26" fill={dark} />
      <path d="M155 195 q25 18 50 0" fill="none" stroke={accentColor} strokeWidth="5" />
    </g>
  );
};

const SCORE_LINES = [140, 155, 170, 185];

const Tchaikovsky: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* open score */}
      <rect x="120" y="130" width="160" height="90" fill={light} stroke={dark} strokeWidth="2" />
      {SCORE_LINES.map((y) => (
        <line key={y} x1="132" y1={y} x2="268" y2={y} stroke={dark} strokeWidth="1.2" opacity="0.5" />
      ))}
      <circle cx="150" cy="170" r="4" fill={dark} />
      <circle cx="175" cy="155" r="4" fill={dark} />
      <circle cx="200" cy="185" r="4" fill={dark} />
      <circle cx="225" cy="160" r="4" fill={dark} />
      {/* baton resting diagonally */}
      <line x1="140" y1="235" x2="250" y2="150" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="140" cy="235" rx="8" ry="5" fill={dark} />
    </g>
  );
};

const VanguardiaRusa: IllustrationComponent = ({ accentColor }) => {
  const gold = "#D4A017";
  const teal = "#2A9D8F";
  return (
    <g>
      <rect x="130" y="130" width="90" height="90" fill="#1A1A1A" />
      <circle cx="255" cy="160" r="40" fill={accentColor} />
      <rect x="190" y="175" width="30" height="70" fill={gold} transform="rotate(25 205 210)" />
      <polygon points="140,220 175,220 158,180" fill={teal} opacity="0.85" />
    </g>
  );
};

const FILM_FRAMES = [0, 1, 2, 3, 4];

const EisensteinMontaje: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <g transform="rotate(-10 200 165)">
        <rect x="110" y="150" width="180" height="30" fill={dark} />
        {FILM_FRAMES.map((i) => (
          <rect key={i} x={120 + i * 35} y="156" width="22" height="18" fill={light} />
        ))}
      </g>
      <g transform="rotate(12 200 165)">
        <rect x="110" y="165" width="180" height="30" fill={accentColor} opacity="0.85" />
        {FILM_FRAMES.map((i) => (
          <rect key={i} x={120 + i * 35} y="171" width="22" height="18" fill={light} opacity="0.9" />
        ))}
      </g>
    </g>
  );
};

const RUSSIA_MAP_MERIDIANS = [160, 185, 210, 235];
const RUSSIA_OCEAN = "#4A7A9C";

const RusiaMasGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <circle cx="200" cy="165" r="70" fill={RUSSIA_OCEAN} />
      <path d="M140 140 Q160 120 190 128 Q220 118 250 135 Q265 150 255 170 Q260 190 235 195 Q210 205 180 198 Q150 200 145 175 Q130 160 140 140 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {RUSSIA_MAP_MERIDIANS.map((x) => (
        <line key={x} x1={x} y1="100" x2={x} y2="230" stroke={dark} strokeWidth="1" opacity="0.15" />
      ))}
    </g>
  );
};

const CAVIAR_EGGS: [number, number][] = Array.from({ length: 18 }, (_, i) => [172 + (i % 6) * 10, 165 + Math.floor(i / 6) * 10]);

const Caviar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="160" y="150" width="80" height="70" rx="6" fill="none" stroke={dark} strokeWidth="3" />
      <rect x="168" y="158" width="64" height="55" fill={accentColor} />
      {CAVIAR_EGGS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill={light} opacity="0.9" />
      ))}
      <rect x="158" y="140" width="84" height="12" fill={dark} />
      {/* mother-of-pearl spoon */}
      <ellipse cx="265" cy="185" rx="10" ry="16" fill={light} stroke={dark} strokeWidth="2" />
      <line x1="265" y1="200" x2="275" y2="230" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const LagoBaikal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  const snow = "#F5F0E6";
  return (
    <g>
      {/* snowy mountains behind */}
      <polygon points="100,210 145,150 190,210" fill={dark} opacity="0.4" />
      <polygon points="145,150 155,168 135,168" fill={snow} />
      <polygon points="210,210 255,145 300,210" fill={dark} opacity="0.5" />
      <polygon points="255,145 266,165 244,165" fill={snow} />
      {/* deep lake */}
      <ellipse cx="200" cy="215" rx="100" ry="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="200" cy="212" rx="70" ry="18" fill={light} opacity="0.6" />
    </g>
  );
};

const KIZHI_DOMES = [140, 165, 190, 215, 240, 265];

const KizhiPogost: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* main structure */}
      <rect x="130" y="190" width="150" height="50" fill={dark} />
      <polygon points="130,190 205,155 280,190" fill={accentColor} />
      {KIZHI_DOMES.map((x, i) => (
        <g key={x}>
          <rect x={x - 6} y={170 - (i % 2) * 20} width="12" height={20 + (i % 2) * 10} fill={accentColor} stroke={dark} strokeWidth="1.5" />
          <path d={`M${x - 10} ${170 - (i % 2) * 20} Q${x - 10} ${150 - (i % 2) * 20} ${x} ${143 - (i % 2) * 20} Q${x + 10} ${150 - (i % 2) * 20} ${x + 10} ${170 - (i % 2) * 20} Z`} fill={light} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

export const russiaIllustrations: Record<string, IllustrationDefinition> = {
  samovar: { component: Samovar },
  matrioska: { component: Matrioska },
  transiberiano: { component: Transiberiano },
  bolshoi: { component: Bolshoi },
  "san-basilio": { component: SanBasilio },
  banya: { component: Banya },
  "metro-moscu": { component: MetroMoscu },
  "gran-novela-rusa": { component: GranNovelaRusa },
  "ded-moroz": { component: DedMoroz },
  "vodka-brindis": { component: VodkaBrindis },
  "tabla-periodica": { component: TablaPeriodica },
  tetris: { component: Tetris },
  "yuri-gagarin": { component: YuriGagarin },
  tchaikovsky: { component: Tchaikovsky },
  "vanguardia-rusa": { component: VanguardiaRusa },
  "eisenstein-montaje": { component: EisensteinMontaje },
  "rusia-mas-grande": { component: RusiaMasGrande },
  caviar: { component: Caviar },
  "lago-baikal": { component: LagoBaikal },
  "kizhi-pogost": { component: KizhiPogost },
};
