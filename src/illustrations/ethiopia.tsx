import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LucyFosil: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bone = "#F5F0E6";
  return (
    <g>
      <rect x="90" y="150" width="230" height="100" fill={accentColor} opacity="0.4" />
      <circle cx="150" cy="175" r="16" fill={bone} stroke={dark} strokeWidth="2" />
      <path d="M150 191 L150 225 M150 195 L120 215 M150 200 L182 210 M150 225 L128 245 M150 225 L172 245" stroke={bone} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M195 200 L245 195 M210 205 L255 202 M225 210 L260 212" stroke={bone} strokeWidth="4" strokeLinecap="round" opacity="0.75" />
      <ellipse cx="150" cy="240" rx="70" ry="8" fill={dark} opacity="0.3" />
    </g>
  );
};

const NuncaColonizada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#078930";
  return (
    <g>
      <polygon points="90,240 205,130 320,240" fill={dark} opacity="0.5" />
      <path d="M205 130 L205 230 Q235 225 245 195 Q248 160 205 130 Z" fill={green} stroke={shade(green, 0.3)} strokeWidth="2.5" />
      <path d="M195 130 Q205 120 215 130 L212 230 L198 230 Z" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="118" x2="205" y2="240" stroke="#8B5A2B" strokeWidth="5" />
      <path d="M195 130 L215 130 L212 145 L198 145 Z" fill={dark} />
    </g>
  );
};

const CalendarioEtiope: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="140" y="120" width="130" height="115" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="140" y="120" width="130" height="28" fill={accentColor} />
      <line x1="160" y1="112" x2="160" y2="128" stroke={dark} strokeWidth="3" />
      <line x1="250" y1="112" x2="250" y2="128" stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <text key={`${row}-${col}`} x={162 + col * 26} y={185 + row * 26} fontSize="14" fill={dark} textAnchor="middle" fontFamily="serif">{["፩", "፪", "፫", "፬"][col]}</text>
        ))
      )}
      <rect x="190" y="176" width="22" height="20" fill={light} opacity="0.6" />
    </g>
  );
};

const CafeOrigen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const clay = "#B5651D";
  return (
    <g>
      <path d="M155 195 Q150 235 195 238 Q235 235 230 195 L226 155 Q195 145 160 155 Z" fill={clay} stroke={shade(clay, 0.3)} strokeWidth="2.5" />
      <path d="M226 165 Q252 168 255 195 Q252 212 228 208" fill="none" stroke={clay} strokeWidth="6" strokeLinecap="round" />
      <path d="M195 145 L195 125" stroke={shade(clay, 0.3)} strokeWidth="3" />
      {[[265, 220], [280, 235]].map(([x, y]) => (
        <g key={x as number}>
          <rect x={(x as number) - 9} y={(y as number) - 12} width="18" height="12" fill={accentColor} stroke={dark} strokeWidth="1.2" />
        </g>
      ))}
      <path d="M195 155 Q188 140 195 122" fill="none" stroke="#B0AFA8" strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const LalibelaIglesias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const rock = "#8D6E63";
  return (
    <g>
      <rect x="100" y="120" width="220" height="120" fill={rock} stroke={shade(rock, 0.3)} strokeWidth="3" />
      <path d="M175 235 L175 190 L190 190 L190 175 L220 175 L220 190 L235 190 L235 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="197" y="150" width="16" height="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[145, 165, 185, 205].map((y) => (
        <line key={y} x1="100" y1={y} x2="175" y2={y} stroke={shade(rock, 0.3)} strokeWidth="1" opacity="0.4" />
      ))}
      {[145, 165, 185, 205].map((y) => (
        <line key={`r${y}`} x1="235" y1={y} x2="320" y2={y} stroke={shade(rock, 0.3)} strokeWidth="1" opacity="0.4" />
      ))}
    </g>
  );
};

const AksumObeliscos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M185 235 L190 130 L220 130 L225 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="195" y="120" width="20" height="14" fill={dark} />
      {[150, 170, 190, 210].map((y) => (
        <rect key={y} x="192" y={y} width="21" height="10" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      ))}
      <ellipse cx="205" cy="235" rx="45" ry="8" fill={dark} opacity="0.3" />
      <polygon points="150,235 165,180 180,235" fill={dark} opacity="0.4" />
      <polygon points="230,235 245,190 260,235" fill={dark} opacity="0.3" />
    </g>
  );
};

const HaileSelassieRastafari: IllustrationComponent = () => {
  const gold = "#D4AF37";
  return (
    <g>
      <rect x="90" y="80" width="230" height="56" fill="#078930" />
      <rect x="90" y="136" width="230" height="57" fill="#FCDD09" />
      <rect x="90" y="193" width="230" height="57" fill="#DA121A" />
      <path d="M170 200 Q170 165 205 155 Q240 165 240 200 L232 200 Q228 172 205 168 Q182 172 178 200 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      {[178, 205, 232].map((x, i) => (
        <circle key={x} cx={x} cy={i === 1 ? 155 : 165} r="6" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const AlfabetoGeez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const parchment = "#E8DCC0";
  return (
    <g>
      <path d="M130 130 Q120 135 120 150 L120 220 Q120 235 130 240 L280 240 Q290 235 290 220 L290 150 Q290 135 280 130 Z" fill={parchment} stroke={dark} strokeWidth="3" />
      {[[160, 165], [200, 170], [240, 165], [175, 195], [225, 198], [155, 220], [255, 215]].map(([x, y], i) => (
        <text key={x as number} x={x} y={y} fontSize="24" fill={shade(parchment, 0.55)} fontFamily="serif" opacity={0.9 - i * 0.03}>{["ገ", "ዘ", "ሀ", "ደ", "መ", "ሰ", "ጠ"][i]}</text>
      ))}
    </g>
  );
};

const HoraEtiope: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="205" cy="180" r="70" fill={light} stroke={dark} strokeWidth="4" />
      <circle cx="205" cy="115" r="10" fill="#F4A300" />
      <path d="M205 108 L205 95 M198 100 L188 90 M212 100 L222 90" stroke="#F4A300" strokeWidth="2.5" strokeLinecap="round" />
      {["12", "3", "6", "9"].map((n, i) => {
        const positions = [[205, 128], [247, 180], [205, 232], [163, 180]];
        return <text key={n} x={positions[i][0]} y={positions[i][1] + 5} fontSize="16" fontWeight="700" fill={dark} textAnchor="middle">{n}</text>;
      })}
      <line x1="205" y1="180" x2="205" y2="140" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="205" y1="180" x2="235" y2="180" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const CorredoresEtiopes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  return (
    <g>
      <line x1="270" y1="120" x2="270" y2="235" stroke="#fff" strokeWidth="8" strokeDasharray="10 8" />
      <circle cx="180" cy="145" r="12" fill={skin} />
      <path d="M170 160 Q182 155 194 160 L190 200 L200 235 L188 235 L180 205 L172 235 L160 235 L166 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M194 165 Q220 155 235 130" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M170 165 Q150 175 145 200" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      {[220, 240, 258].map((x) => (
        <line key={x} x1={x} y1="140" x2={x + 14} y2="140" stroke={dark} strokeWidth="2" opacity="0.5" />
      ))}
    </g>
  );
};

export const ethiopiaIllustrations: Record<string, IllustrationDefinition> = {
  "lucy-fosil": { component: LucyFosil },
  "nunca-colonizada": { component: NuncaColonizada },
  "calendario-etiope": { component: CalendarioEtiope },
  "cafe-origen": { component: CafeOrigen },
  "lalibela-iglesias": { component: LalibelaIglesias },
  "aksum-obeliscos": { component: AksumObeliscos },
  "haile-selassie-rastafari": { component: HaileSelassieRastafari },
  "alfabeto-geez": { component: AlfabetoGeez },
  "hora-etiope": { component: HoraEtiope },
  "corredores-etiopes": { component: CorredoresEtiopes },
};
