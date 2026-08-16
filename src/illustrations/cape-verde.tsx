import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Morna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={dark} opacity="0.75" />
      {[[95, 200], [140, 190], [190, 205], [250, 195], [310, 202]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 12} ${(y as number) - 10} ${(x as number) + 24} ${y}`} fill="none" stroke={light} strokeWidth="2.5" opacity="0.6" />
      ))}
      <path d="M170 230 Q160 190 175 155 Q180 145 190 148 Q195 165 190 195 Q205 190 210 210 Q212 232 190 240 Q170 244 170 230 Z" fill={accentColor} stroke={shade(accentColor, 0.2)} strokeWidth="2.5" />
      <rect x="182" y="120" width="6" height="30" fill={dark} />
      <ellipse cx="255" cy="150" rx="16" ry="24" fill={light} stroke={dark} strokeWidth="2.5" transform="rotate(20 255 150)" />
      <line x1="245" y1="128" x2="238" y2="112" stroke={dark} strokeWidth="3" transform="rotate(20 255 150)" />
    </g>
  );
};

const CesariaEvora: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M175 235 Q170 190 205 180 Q240 190 235 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="160" r="20" fill={skin} />
      <path d="M188 152 Q205 140 222 152 Q220 145 205 143 Q190 145 188 152 Z" fill="#1A1A1A" />
      <path d="M195 232 L192 245 M215 232 L218 245" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      {/* microphone */}
      <ellipse cx="270" cy="180" rx="10" ry="14" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <line x1="270" y1="194" x2="270" y2="235" stroke={dark} strokeWidth="3" />
      {/* cigarette wisp */}
      <line x1="185" y1="175" x2="170" y2="170" stroke={dark} strokeWidth="2" />
      <path d="M170 170 Q165 155 172 145" fill="none" stroke="#B0AFA8" strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const Crioulo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="150" width="220" height="70" fill={water} opacity="0.4" />
      {[[130, 175], [165, 190], [200, 170], [235, 195], [270, 180]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="7" fill="#4A8F4E" stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M130 130 Q130 115 150 115 L185 115 Q195 115 193 128 L195 145 L175 128 L150 128 Q130 128 130 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M290 155 Q290 140 270 140 L235 140 Q225 140 227 153 L225 170 L245 153 L270 153 Q290 153 290 155 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const Cachupa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const corn = "#F4C430";
  return (
    <g>
      <path d="M145 190 L145 220 Q145 240 175 240 L235 240 Q265 240 265 220 L265 190 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="190" rx="60" ry="16" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      {[[175, 187], [195, 183], [215, 189], [235, 184], [185, 193], [225, 193]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="5" fill={corn} stroke={shade(corn, 0.3)} strokeWidth="1" />
      ))}
      <path d="M175 165 Q170 150 180 140 M205 160 Q205 145 200 132 M235 165 Q240 150 232 140" fill="none" stroke="#B0AFA8" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <rect x="120" y="235" width="170" height="10" fill={dark} opacity="0.4" />
    </g>
  );
};

const DiezIslas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      {[[130, 200, 26, green], [175, 175, 20, accentColor], [215, 195, 30, green], [255, 165, 18, accentColor], [280, 210, 22, green], [155, 220, 16, accentColor]].map(([x, y, r, c], i) => (
        <path key={i} d={`M${(x as number) - (r as number)} ${y} Q${x} ${(y as number) - (r as number) * 1.4} ${(x as number) + (r as number)} ${y} Q${x} ${(y as number) + (r as number) * 0.5} ${(x as number) - (r as number)} ${y} Z`} fill={c as string} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const PedraDeLume: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const turquoise = "#26C6DA";
  return (
    <g>
      <path d="M100 235 Q100 160 205 145 Q310 160 310 235 Z" fill="#8B7355" stroke={shade("#8B7355", 0.3)} strokeWidth="3" />
      <ellipse cx="205" cy="220" rx="85" ry="30" fill={turquoise} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="215" rx="65" ry="20" fill={tint(turquoise, 0.4)} opacity="0.7" />
    </g>
  );
};

const CarnavalMindelo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const colors = ["#F4A300", "#C1272D", "#1D6FA5", "#4A8F4E"];
  return (
    <g>
      <path d="M90 240 Q205 232 320 240 L320 250 L90 250 Z" fill="#3D8FB0" />
      <circle cx="205" cy="175" r="15" fill={skin} />
      <path d="M190 205 Q205 195 220 205 L216 240 L194 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[-40, -20, 0, 20, 40].map((deg, i) => (
        <ellipse key={deg} cx="205" cy="150" rx="6" ry="28" fill={colors[i % colors.length]} transform={`rotate(${deg} 205 168)`} />
      ))}
    </g>
  );
};

const Batuku: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      {[[140, 220], [205, 230], [270, 220]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 50} r="11" fill={skin} />
          <ellipse cx={x} cy={y} rx="24" ry="12" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2.5" />
          <path d={`M${(x as number) - 22} ${(y as number) - 20} Q${x} ${(y as number) - 30} ${(x as number) + 22} ${(y as number) - 20} L${(x as number) + 20} ${y} L${(x as number) - 20} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="2" opacity={1 - i * 0.06} />
          <path d={`M${x} ${(y as number) - 18} L${(x as number) - 12} ${(y as number) - 6}`} stroke={skin} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const PicoDoFogo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const lava = "#C1272D";
  return (
    <g>
      <polygon points="110,240 205,105 300,240" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="3" />
      <path d="M205 105 Q195 130 205 150 Q215 130 205 105 Z" fill={lava} />
      <path d="M195 150 Q180 190 165 240 L185 240 Q195 195 210 155 Z" fill={lava} opacity="0.85" />
      {[[150, 232, 22, 18], [195, 235, 26, 20], [245, 230, 20, 16]].map(([x, y, w, h]) => (
        <rect key={x as number} x={(x as number) - (w as number) / 2} y={(y as number) - (h as number)} width={w} height={h} fill={accentColor} stroke={shade(accentColor, 0.2)} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const Diaspora: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="90" y="150" width="230" height="90" fill={water} opacity="0.45" />
      {[[140, 195, 16], [210, 205, 20], [270, 190, 14]].map(([x, y, r]) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill={green} stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M120 130 L260 95 L200 140 L235 150 L120 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M120 130 L260 95" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

export const capeVerdeIllustrations: Record<string, IllustrationDefinition> = {
  morna: { component: Morna },
  "cesaria-evora": { component: CesariaEvora },
  crioulo: { component: Crioulo },
  cachupa: { component: Cachupa },
  "diez-islas": { component: DiezIslas },
  "pedra-de-lume": { component: PedraDeLume },
  "carnaval-mindelo": { component: CarnavalMindelo },
  batuku: { component: Batuku },
  "pico-do-fogo": { component: PicoDoFogo },
  diaspora: { component: Diaspora },
};
