import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PamirTechoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  const road = "#5C5C5C";
  return (
    <g>
      <polygon points="100,240 175,110 250,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="230,240 300,130 320,240" fill={dark} opacity="0.7" />
      <polygon points="145,180 175,110 205,180" fill={snow} />
      <path d="M110 240 Q140 200 120 175 Q100 155 130 130 Q160 108 175 105" fill="none" stroke={road} strokeWidth="12" strokeLinecap="round" />
      <path d="M110 240 Q140 200 120 175 Q100 155 130 130 Q160 108 175 105" fill="none" stroke="#F5F0E6" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.7" />
    </g>
  );
};

const LagoSarezRepresaNatural: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const rock = "#8B7355";
  return (
    <g>
      <path d="M90 235 L150 130 Q160 115 175 130 L230 235 Z" fill={rock} stroke={shade(rock, 0.3)} strokeWidth="3" />
      <ellipse cx="255" cy="200" rx="65" ry="45" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="255" cy="192" rx="45" ry="28" fill={tint(accentColor, 0.4)} opacity="0.6" />
      <path d="M160 165 L180 155 L175 175 Z" fill={shade(rock, 0.2)} />
    </g>
  );
};

const CasasPamirisCincoPilares: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M120 240 L120 150 L290 150 L290 240 Z" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="2.5" />
      {[135, 175, 205, 235, 275].map((x) => (
        <rect key={x} x={x - 6} y="150" width="12" height="90" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="1.5" />
      ))}
      <path d="M170 150 L170 120 L240 120 L240 150 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="192" y="128" width="18" height="14" fill="#F4C87A" opacity="0.85" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${170 - i * 8} ${120 - i * 10} L${240 + i * 8} ${120 - i * 10}`} stroke={dark} strokeWidth="1.5" opacity="0.4" fill="none" />
      ))}
    </g>
  );
};

const SomoniIsmailSamani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      <circle cx="205" cy="170" r="55" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="4" />
      <circle cx="205" cy="170" r="38" fill="none" stroke={shade(gold, 0.3)} strokeWidth="1.5" opacity="0.6" />
      <text x="205" y="182" fontSize="30" fontWeight="700" fill={shade(gold, 0.45)} textAnchor="middle" fontFamily="serif">S</text>
      <path d="M170 240 L165 220 Q163 205 185 200 Q205 197 225 200 Q247 205 245 220 L240 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const RudakiPadrePoesiaPersa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const parchment = "#E8DCC0";
  return (
    <g>
      <path d="M130 130 Q120 135 120 150 L120 220 Q120 235 130 240 L280 240 Q290 235 290 220 L290 150 Q290 135 280 130 Z" fill={parchment} stroke={dark} strokeWidth="3" />
      {[165, 185].map((y) => (
        <line key={y} x1="145" y1={y} x2="265" y2={y} stroke={shade(parchment, 0.5)} strokeWidth="1.5" opacity="0.5" />
      ))}
      <line x1="330" y1="220" x2="330" y2="120" stroke="#8B5A2B" strokeWidth="4" />
      <ellipse cx="330" cy="220" rx="28" ry="20" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={315 + i * 8} y1="200" x2={315 + i * 8} y2="120" stroke={dark} strokeWidth="1" opacity="0.5" />
      ))}
    </g>
  );
};

const PenjikentPompeyaAsiaCentral: IllustrationComponent = ({ accentColor }) => {
  const adobe = "#C68642";
  return (
    <g>
      <path d="M110 240 L110 165 L200 150 L200 240 Z" fill={adobe} stroke={shade(adobe, 0.3)} strokeWidth="3" />
      <path d="M220 240 L220 175 L300 190 L300 240 Z" fill={shade(adobe, 0.1)} stroke={shade(adobe, 0.3)} strokeWidth="3" opacity="0.85" />
      <rect x="130" y="185" width="50" height="35" fill={accentColor} opacity="0.7" />
      {[[145, 195], [165, 200], [155, 210]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="4" fill="#F4C430" opacity={0.8 - i * 0.1} />
      ))}
      <rect x="240" y="200" width="40" height="30" fill={accentColor} opacity="0.6" />
    </g>
  );
};

const PresaNurek: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#26C6DA";
  return (
    <g>
      <polygon points="90,240 205,110 320,240" fill={accentColor} opacity="0.35" />
      <path d="M130 240 L150 150 Q205 130 260 150 L280 240 Z" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={155 + i * 30} y1="240" x2={160 + i * 22} y2={155 + i * 5} stroke={dark} strokeWidth="1" opacity="0.3" />
      ))}
      <ellipse cx="205" cy="145" rx="70" ry="16" fill={water} stroke={shade(water, 0.3)} strokeWidth="2" />
    </g>
  );
};

const BanderaMasAltaDushanbe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="235" width="230" height="12" fill={dark} opacity="0.3" />
      <line x1="205" y1="240" x2="205" y2="95" stroke="#B0B8BF" strokeWidth="5" />
      <path d="M205 100 L280 108 Q285 112 280 118 L205 128 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="95" r="4" fill="#D4AF37" />
    </g>
  );
};

const MigrantesRemesas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,240 165,140 220,240" fill={accentColor} opacity="0.35" />
      <polygon points="180,240 260,120 320,240" fill={accentColor} opacity="0.25" />
      <rect x="150" y="150" width="70" height="50" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" transform="rotate(-8 185 175)" />
      <path d="M150 150 L185 175 L220 150" fill="none" stroke={dark} strokeWidth="2" transform="rotate(-8 185 175)" />
      <path d="M240 150 Q260 130 285 135" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      <path d="M278 130 L285 135 L278 142" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const GuerraCivilIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <polygon points="90,240 160,150 210,240" fill={dark} opacity="0.55" />
      <polygon points="180,240 250,130 320,240" fill={accentColor} opacity="0.45" />
      <path d="M160 155 L170 145 M180 150 L190 140 M200 158 L210 148" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M175 130 Q185 118 200 125 Q195 132 205 137 Q188 145 172 138 Q163 134 175 130 Z" fill="#fff" stroke={dark} strokeWidth="2" />
      <path d="M175 130 L162 125" stroke={dark} strokeWidth="2" />
      <circle cx="196" cy="130" r="2" fill={dark} />
    </g>
  );
};

export const tajikistanIllustrations: Record<string, IllustrationDefinition> = {
  "pamir-techo-del-mundo": { component: PamirTechoDelMundo },
  "lago-sarez-represa-natural": { component: LagoSarezRepresaNatural },
  "casas-pamiris-cinco-pilares": { component: CasasPamirisCincoPilares },
  "somoni-ismail-samani": { component: SomoniIsmailSamani },
  "rudaki-padre-poesia-persa": { component: RudakiPadrePoesiaPersa },
  "penjikent-pompeya-asia-central": { component: PenjikentPompeyaAsiaCentral },
  "presa-nurek": { component: PresaNurek },
  "bandera-mas-alta-dushanbe": { component: BanderaMasAltaDushanbe },
  "migrantes-remesas": { component: MigrantesRemesas },
  "guerra-civil-independencia": { component: GuerraCivilIndependencia },
};
