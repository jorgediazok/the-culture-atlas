import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MonteEverest: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  const cloud = "#E8E4DC";
  return (
    <g>
      <polygon points="105,240 205,105 305,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="170,190 205,105 240,190" fill={snow} />
      <path d="M105 195 L150 195 Q160 195 165 205 L245 205 Q250 195 260 195 L305 195" fill="none" stroke={cloud} strokeWidth="16" opacity="0.85" />
    </g>
  );
};

const BudaLumbini: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="185" y="120" width="40" height="120" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="178" y="110" width="54" height="14" fill={dark} />
      {[145, 165, 185, 205].map((y) => (
        <line key={y} x1="185" y1={y} x2="225" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* bodhi leaf beside it */}
      <path d="M270 235 Q255 200 270 165 Q285 200 270 235 Z" fill={green} />
      <path d="M270 165 L270 150" stroke={green} strokeWidth="3" />
      <line x1="270" y1="180" x2="270" y2="225" stroke={shade(green, 0.3)} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const BanderaNepal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = "#fff";
  return (
    <g>
      <line x1="130" y1="235" x2="130" y2="95" stroke={dark} strokeWidth="6" />
      <path d="M130 100 L245 150 L130 165 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M130 165 L235 205 L130 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="165" cy="130" r="10" fill={light} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line key={deg} x1="185" y1="205" x2="185" y2="192" stroke={light} strokeWidth="2.5" transform={`rotate(${deg} 185 205)`} />
      ))}
    </g>
  );
};

const KumariDiosaViviente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <path d="M135 215 Q135 235 165 235 L245 235 Q275 235 275 215 L270 200 L140 200 Z" fill={accentColor} />
      <ellipse cx="205" cy="201" rx="70" ry="10" fill={dark} />
      <path d="M160 200 L160 165 Q160 145 180 140 L195 155 L205 130 L215 155 L230 140 Q250 145 250 165 L250 200 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="205" cy="150" r="8" fill="#C1272D" />
    </g>
  );
};

const Gurkhas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* curved kukri knife */}
      <path d="M140 230 Q170 200 155 160 Q190 175 200 210 Q195 235 165 240 Q150 240 140 230 Z" fill="#B0B8BF" stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="220" width="30" height="14" fill="#5C4A3A" transform="rotate(-30 145 227)" />
      {/* military beret beside it */}
      <path d="M220 165 Q220 130 265 128 Q310 130 310 165 Q280 178 265 178 Q250 178 220 165 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="272" cy="132" r="6" fill={gold} />
    </g>
  );
};

const ValleKatmandu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="175" y="195" width="60" height="45" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <polygon points={`${165 - i * 10},${195 - i * 30} ${245 + i * 10},${195 - i * 30} ${205},${165 - i * 30}`} fill={i % 2 === 0 ? light : dark} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <line x1="205" y1="105" x2="205" y2="90" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const PuebloSherpa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* coiled rope */}
      <circle cx="170" cy="185" r="42" fill="none" stroke={accentColor} strokeWidth="9" />
      <circle cx="170" cy="185" r="28" fill="none" stroke={accentColor} strokeWidth="9" />
      <circle cx="170" cy="185" r="14" fill="none" stroke={accentColor} strokeWidth="9" />
      {/* ice axe beside it */}
      <line x1="255" y1="235" x2="280" y2="130" stroke={wood} strokeWidth="7" strokeLinecap="round" />
      <path d="M280 130 L260 118 L262 140 Z" fill={dark} />
      <path d="M280 130 L302 122 L298 143 Z" fill={dark} />
    </g>
  );
};

const Momos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* bamboo steamer basket */}
      <path d="M120 200 L290 200 L275 235 L135 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[130, 145, 160, 175, 190, 205, 220, 235, 250, 265].map((x) => (
        <line key={x} x1={x} y1="200" x2={x - 3} y2="235" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      <ellipse cx="205" cy="200" rx="85" ry="12" fill={light} stroke={dark} strokeWidth="2" />
      {/* dumplings inside */}
      {[[175, 195], [205, 190], [235, 195]].map(([x, y]) => (
        <path key={x} d={`M${(x as number) - 12} ${y} Q${x} ${(y as number) - 12} ${(x as number) + 12} ${y} Q${x} ${(y as number) + 8} ${(x as number) - 12} ${y} Z`} fill="#F5EFE0" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const RinoceronteChitwan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const grass = "#B8A93A";
  return (
    <g>
      {[110, 300].map((x) => (
        <g key={x}>
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={x + i * 6} y1="245" x2={x + i * 6 - 4} y2="205" stroke={grass} strokeWidth="4" strokeLinecap="round" />
          ))}
        </g>
      ))}
      {/* rhino body */}
      <path d="M150 235 Q140 205 165 195 Q195 185 235 195 Q260 200 262 220 L258 235 L245 235 L242 222 L172 222 L168 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M150 220 Q130 218 122 200 Q135 195 150 205 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M126 205 L112 200 L118 214 Z" fill={dark} />
      <ellipse cx="200" cy="190" rx="35" ry="8" fill={dark} opacity="0.3" />
    </g>
  );
};

const OchoOchomiles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const snow = "#F5F0E6";
  return (
    <g>
      {[[100, 130, 220], [150, 100, 240], [200, 140, 200], [250, 95, 235], [300, 150, 210]].map(([x, y, base], i) => (
        <g key={x}>
          <polygon points={`${(x as number) - 40},${base} ${x},${y} ${(x as number) + 40},${base}`} fill={i % 2 === 0 ? accentColor : dark} />
          <polygon points={`${(x as number) - 14},${(y as number) + 28} ${x},${y} ${(x as number) + 14},${(y as number) + 28}`} fill={snow} />
        </g>
      ))}
    </g>
  );
};

export const nepalIllustrations: Record<string, IllustrationDefinition> = {
  "monte-everest": { component: MonteEverest },
  "buda-lumbini": { component: BudaLumbini },
  "bandera-nepal": { component: BanderaNepal },
  "kumari-diosa-viviente": { component: KumariDiosaViviente },
  gurkhas: { component: Gurkhas },
  "valle-katmandu": { component: ValleKatmandu },
  "pueblo-sherpa": { component: PuebloSherpa },
  momos: { component: Momos },
  "rinoceronte-chitwan": { component: RinoceronteChitwan },
  "ocho-ochomiles": { component: OchoOchomiles },
};
