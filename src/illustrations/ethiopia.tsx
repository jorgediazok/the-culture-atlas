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

const InjeraBerbere: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bread = "#E8DFC4";
  const stews = ["#B5341F", "#C98A3C", "#6E7F3C", "#7A4A2B", "#A8412A"];
  return (
    <g>
      <ellipse cx="205" cy="180" rx="115" ry="60" fill={shade(bread, 0.18)} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="170" rx="112" ry="56" fill={bread} stroke={dark} strokeWidth="2.5" />
      {[[160, 160], [250, 158], [205, 150], [175, 190], [240, 192], [205, 200]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="20" fill={stews[i % stews.length]} stroke={shade(stews[i % stews.length], 0.3)} strokeWidth="2" />
      ))}
      {[130, 160, 190, 220, 250].map((x) => (
        <circle key={x} cx={x} cy={165 + ((x / 15) % 2) * 8} r="2.5" fill={dark} opacity="0.35" />
      ))}
    </g>
  );
};

const Timkat: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const robe = "#F2EFE6";
  const umbrella = accentColor;
  const water = "#2E86AB";
  return (
    <g>
      <path d="M90 235 Q205 225 320 235 L320 250 L90 250 Z" fill={water} />
      {/* embroidered umbrella */}
      <path d="M130 95 Q205 45 280 95 Z" fill={umbrella} stroke={dark} strokeWidth="3" />
      <path d="M130 95 Q150 88 170 95 Q190 88 205 95 Q220 88 240 95 Q260 88 280 95" fill="none" stroke={shade(umbrella, 0.3)} strokeWidth="3" />
      <line x1="205" y1="50" x2="205" y2="120" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="46" r="5" fill="#C9A24B" />
      {/* priest */}
      <path d="M175 235 L180 150 Q205 135 230 150 L235 235 Z" fill={robe} stroke={dark} strokeWidth="3" />
      <rect x="197" y="128" width="16" height="24" fill="#B08258" />
      <ellipse cx="205" cy="118" rx="15" ry="16" fill="#B08258" stroke={dark} strokeWidth="2" />
      {/* tabot carried on head */}
      <rect x="182" y="96" width="46" height="24" fill="#C9A24B" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="96" x2="205" y2="88" stroke={dark} strokeWidth="2" />
      <line x1="198" y1="92" x2="212" y2="92" stroke={dark} strokeWidth="2" />
      <path d="M182 175 h46 M180 200 h55" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const CeremoniaCafe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const clay = "#7A4A2B";
  const robe = "#F0EDE2";
  const skin = "#9C6B44";
  const steam = tint(accentColor, 0.5);
  return (
    <g>
      {/* seated woman */}
      <path d="M120 240 Q120 175 165 172 L205 176 L210 240 Z" fill={robe} stroke={dark} strokeWidth="3" />
      <ellipse cx="150" cy="150" rx="16" ry="17" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M134 148 Q134 124 150 122 Q166 124 166 148 Z" fill="#2A2A2E" />
      {/* pouring arm */}
      <path d="M162 178 Q200 168 232 150" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* jebena pot */}
      <path d="M232 150 Q222 150 224 168 Q226 200 250 202 Q274 200 276 168 Q278 150 268 150 Z" fill={clay} stroke={shade(clay, 0.3)} strokeWidth="3" />
      <path d="M250 150 L250 122 L238 108" fill="none" stroke={shade(clay, 0.3)} strokeWidth="4" />
      <path d="M276 168 Q292 165 288 150" fill="none" stroke={shade(clay, 0.3)} strokeWidth="4" />
      {/* stream + cups */}
      <path d="M235 118 Q244 150 250 178" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      {[228, 250, 272].map((x) => (
        <rect key={x} x={x - 7} y="214" width="14" height="16" rx="2" fill={robe} stroke={dark} strokeWidth="2" />
      ))}
      {[-8, 0, 8].map((d) => (
        <path key={d} d={`M${250 + d} 108 q${d} -12 0 -24`} fill="none" stroke={steam} strokeWidth="3" opacity="0.6" />
      ))}
    </g>
  );
};

const MontanasSimien: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rock = tint(accentColor, 0.3);
  const fur = "#6B4A2E";
  return (
    <g>
      <path d="M90 235 L140 150 L180 210 L230 120 L280 205 L320 155 L320 235 Z" fill={rock} stroke={dark} strokeWidth="3" />
      <path d="M230 120 L250 165 L215 165 Z" fill={dark} opacity="0.4" />
      {[[150, 220], [200, 228], [250, 220]].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="16" ry="13" fill={fur} stroke={shade(fur, 0.3)} strokeWidth="2" />
          <path d={`M${x - 16} ${y - 4} Q${x} ${y - 22} ${x + 16} ${y - 4}`} fill={shade(fur, 0.25)} stroke={shade(fur, 0.3)} strokeWidth="2" />
          <ellipse cx={x} cy={y - 14} rx="8" ry="9" fill={fur} stroke={shade(fur, 0.3)} strokeWidth="1.5" />
          <path d={`M${x - 5} ${y - 2} q5 6 10 0`} fill="#B5341F" />
        </g>
      ))}
    </g>
  );
};

const DepresionDanakil: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const salt = "#E4D06A";
  const sulfur = "#C4E04A";
  const camel = "#8A6A3C";
  return (
    <g>
      <rect x="90" y="170" width="230" height="65" fill={salt} stroke={dark} strokeWidth="2.5" />
      <path d="M90 170 L320 170" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {[120, 175, 235, 290].map((x) => (
        <ellipse key={x} cx={x} cy="200" rx="18" ry="7" fill={sulfur} opacity="0.7" />
      ))}
      {/* volcano glow */}
      <path d="M250 170 L285 110 L320 170 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M275 128 q10 -10 20 0 q-6 8 -20 0 Z" fill="#E8571F" />
      {/* camel caravan */}
      {[110, 145, 178].map((x, i) => (
        <g key={x} opacity={1 - i * 0.12}>
          <path d={`M${x} 165 L${x} 148 Q${x + 6} 138 ${x + 12} 148 Q${x + 18} 136 ${x + 24} 148 L${x + 24} 165`} fill="none" stroke={camel} strokeWidth="5" />
          <path d={`M${x} 148 Q${x - 6} 138 ${x - 4} 128`} fill="none" stroke={camel} strokeWidth="4" />
          <rect x={x + 4} y="150" width="16" height="8" fill={salt} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const Meskel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#7A4A2B";
  const flame = "#E8571F";
  return (
    <g>
      <path d="M90 240 Q205 230 320 240 L320 250 L90 250 Z" fill={dark} opacity="0.35" />
      <path d="M205 100 L255 235 L155 235 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" />
      <path d="M170 235 L205 120 L240 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      <path d="M205 90 Q225 130 218 165 Q235 150 232 120 Q250 165 235 200 Q220 225 205 225 Q190 225 178 200 Q165 165 180 120 Q178 150 192 165 Q185 130 205 90 Z" fill={flame} />
      <path d="M205 130 Q215 160 205 195 Q195 160 205 130 Z" fill="#F4C430" />
      {[150, 260].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy="215" rx="9" ry="10" fill="#B08258" />
          <path d={`M${x - 8} 235 L${x - 8} 218 Q${x} 205 ${x + 8} 218 L${x + 8} 235 Z`} fill={i === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {[125, 285].map((x) => (
        <circle key={x} cx={x} cy="150" r="5" fill="#F4C430" opacity="0.8" />
      ))}
    </g>
  );
};

const EthioJazz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#7A4A2B";
  const bar = "#C9A24B";
  const skin = "#9C6B44";
  return (
    <g>
      {/* vibraphone */}
      <rect x="105" y="185" width="130" height="16" rx="3" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      {[115, 133, 151, 169, 187, 205, 223].map((x, i) => (
        <rect key={x} x={x} y={182 - i} width="12" height="6" fill={bar} stroke={dark} strokeWidth="1" />
      ))}
      <line x1="120" y1="201" x2="120" y2="235" stroke={dark} strokeWidth="3" />
      <line x1="220" y1="201" x2="220" y2="235" stroke={dark} strokeWidth="3" />
      {/* player */}
      <ellipse cx="175" cy="120" rx="15" ry="16" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M159 118 Q159 98 175 96 Q191 98 191 118 Z" fill="#2A2A2E" />
      <path d="M175 136 L172 172 L200 172 L200 140 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M178 145 Q160 165 150 180 M195 145 Q210 165 205 178" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      {/* masinko one-string fiddle */}
      <path d="M255 150 L275 200 M258 160 q22 -6 14 -30" fill="none" stroke={wood} strokeWidth="4" />
      <path d="M262 175 l18 -8 8 16 -18 8 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
      <line x1="258" y1="150" x2="285" y2="192" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const TerrazasKonso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = tint(accentColor, 0.3);
  const green = "#6E8F4C";
  return (
    <g>
      {[210, 190, 170, 150, 130].map((y) => (
        <g key={y}>
          <path d={`M90 ${y + 24} Q205 ${y + 14} 320 ${y + 24} L320 ${y + 30} Q205 ${y + 20} 90 ${y + 30} Z`} fill={stone} stroke={dark} strokeWidth="2.5" />
          <path d={`M90 ${y + 24} Q205 ${y + 14} 320 ${y + 24}`} fill="none" stroke={green} strokeWidth="4" opacity={0.5} />
        </g>
      ))}
      {/* walled village + waka posts */}
      <path d="M150 130 Q205 108 260 130" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M165 126 Q205 112 245 126" fill="none" stroke={dark} strokeWidth="2.5" />
      {[190, 205, 220].map((x) => (
        <g key={x}>
          <line x1={x} y1="126" x2={x} y2="100" stroke="#6B4A2E" strokeWidth="4" />
          <circle cx={x} cy="96" r="4" fill="#6B4A2E" />
        </g>
      ))}
    </g>
  );
};

const EnsetFalsoBanano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leaf = "#4A8F4E";
  const stem = "#8FBF6A";
  const skin = "#9C6B44";
  return (
    <g>
      <rect x="150" y="150" width="24" height="90" fill={stem} stroke={shade(stem, 0.35)} strokeWidth="3" />
      {[[-1, 150], [1, 150], [-1, 120], [1, 120], [0, 105]].map(([d, y], i) => (
        <path
          key={i}
          d={`M162 ${y} Q${162 + d * 90} ${y - 40} ${162 + d * 120} ${y + 10}`}
          fill="none"
          stroke={i % 2 ? shade(leaf, 0.15) : leaf}
          strokeWidth="16"
          strokeLinecap="round"
        />
      ))}
      {/* person scraping the stem */}
      <ellipse cx="215" cy="150" rx="14" ry="15" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M215 165 L210 210 L240 210 L238 168 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M214 172 Q192 168 174 178" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <line x1="176" y1="178" x2="158" y2="188" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const VestimentaHabesha: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cloth = "#F2EFE6";
  const skin = "#9C6B44";
  const tibeb = ["#C9A24B", "#B5341F", "#2E6E9E", "#4A8F4E"];
  return (
    <g>
      <path d="M155 240 L162 150 Q205 128 248 150 L255 240 Z" fill={cloth} stroke={dark} strokeWidth="3" />
      {/* tibeb border down the front and along the hem */}
      <path d="M205 135 L205 240" stroke={tibeb[0]} strokeWidth="7" />
      <path d="M158 232 Q205 224 252 232" fill="none" stroke={tibeb[0]} strokeWidth="7" />
      {tibeb.map((c, i) => (
        <rect key={i} x={201} y={150 + i * 20} width="8" height="9" fill={c} />
      ))}
      {/* shawl over shoulders */}
      <path d="M160 152 Q205 138 250 152 L244 172 Q205 158 166 172 Z" fill={shade(cloth, 0.08)} stroke={dark} strokeWidth="2" />
      <rect x="197" y="122" width="16" height="24" fill={skin} />
      <ellipse cx="205" cy="110" rx="16" ry="17" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M189 108 Q189 84 205 82 Q221 84 221 108 Z" fill="#2A2A2E" />
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
  "injera-berbere": { component: InjeraBerbere },
  timkat: { component: Timkat },
  "ceremonia-cafe": { component: CeremoniaCafe },
  "montanas-simien": { component: MontanasSimien },
  "depresion-danakil": { component: DepresionDanakil },
  meskel: { component: Meskel },
  "ethio-jazz": { component: EthioJazz },
  "terrazas-konso": { component: TerrazasKonso },
  "enset-falso-banano": { component: EnsetFalsoBanano },
  "vestimenta-habesha": { component: VestimentaHabesha },
};
