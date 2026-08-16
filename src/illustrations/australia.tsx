import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const OperaHouse: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 240 Q205 250 320 240 L320 250 L90 250 Z" fill={water} />
      {[[130, 235, 60], [190, 240, 75], [255, 235, 55]].map(([x, y, h], i) => (
        <path key={x as number} d={`M${(x as number) - 40} ${y} Q${x} ${(y as number) - (h as number)} ${(x as number) + 40} ${y} Z`} fill={i === 1 ? "#fff" : tint(accentColor, 0.6)} stroke={dark} strokeWidth="2.5" />
      ))}
      {[130, 190, 255].map((x, i) => (
        <path key={`s${x}`} d={`M${x - 40} 240 Q${x} ${240 - [60, 75, 55][i] + 15} ${x + 40} 240`} fill="none" stroke={dark} strokeWidth="1" opacity="0.3" />
      ))}
    </g>
  );
};

const GranBarreraCoral: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.55" />
      {[[130, 220, 30], [180, 210, 24], [230, 225, 28], [270, 215, 20]].map(([x, y, h], i) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 14} ${(y as number) - (h as number)} ${x} ${(y as number) - (h as number) * 1.4} Q${(x as number) + 14} ${(y as number) - (h as number)} ${x} ${y} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
      ))}
      {[[150, 165], [210, 145], [260, 175]].map(([x, y]) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="14" ry="8" fill="#F4A300" stroke={dark} strokeWidth="1.5" />
          <path d={`M${(x as number) - 14} ${y} L${(x as number) - 22} ${(y as number) - 6} M${(x as number) - 14} ${y} L${(x as number) - 22} ${(y as number) + 6}`} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const Canguros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.35);
  return (
    <g>
      {/* thick tail trailing behind for balance */}
      <path d="M172 220 Q145 228 122 248 Q130 253 142 249 Q166 238 186 216 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* haunch and back, leaning forward into the hop */}
      <path d="M168 222 Q150 190 172 165 Q186 152 202 158 Q222 148 232 170 Q242 192 230 216 Q220 233 198 235 Q178 235 168 222 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* powerful hind leg and elongated foot, extended forward mid-hop */}
      <path d="M212 214 Q226 220 236 238 Q248 246 266 243 Q268 234 258 230 Q240 220 220 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* small front paws tucked at the chest */}
      <path d="M196 190 Q192 202 196 213" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M210 188 Q209 200 214 210" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* pouch with the joey peeking out */}
      <ellipse cx="184" cy="203" rx="12" ry="10" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="178" cy="195" r="7" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M174 190 L171 182 L178 187 Z" fill={dark} />
      <path d="M181 190 L184 182 L177 187 Z" fill={dark} />
      {/* head with snout and upright ears */}
      <ellipse cx="234" cy="150" rx="15" ry="17" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M234 160 Q248 168 251 182 Q246 187 239 182 Q230 172 226 161 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="226" cy="126" rx="6" ry="16" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(-16 226 126)" />
      <ellipse cx="242" cy="124" rx="6" ry="16" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(14 242 124)" />
      <circle cx="240" cy="151" r="2.5" fill="#1A1A1A" />
      {/* motion dust under the leading foot */}
      <path d="M245 246 Q252 248 260 246 M250 250 Q258 251 265 249" stroke={dark} strokeWidth="1.5" opacity="0.4" fill="none" />
    </g>
  );
};

const AyersRock: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const sky = "#F4C87A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="120" fill={sky} opacity="0.4" />
      <path d="M100 235 Q140 175 180 195 Q210 165 250 195 Q280 180 315 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M100 230 Q140 172 180 192 Q210 163 250 192 Q280 178 315 230" fill="none" stroke={shade(accentColor, 0.15)} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const AborigenesArte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C9682B", "#D4A017", "#8A5A2B"];
  return (
    <g>
      <rect x="105" y="95" width="200" height="160" fill="#F5EFE0" opacity="0.5" />
      {[0, 1, 2, 3, 4].map((ring) => (
        <circle key={ring} cx="205" cy="175" r={20 + ring * 22} fill="none" stroke={colors[ring % colors.length]} strokeWidth="8" strokeDasharray="4 6" />
      ))}
      <circle cx="205" cy="175" r="14" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Vegemite: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bread = "#E8C99B";
  return (
    <g>
      <path d="M140 230 L140 165 Q140 145 175 140 Q205 135 235 140 Q270 145 270 165 L270 230 Z" fill={bread} stroke={shade(bread, 0.3)} strokeWidth="3" />
      <path d="M155 200 Q205 190 255 200 Q255 215 205 218 Q155 215 155 200 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M155 200 Q205 190 255 200" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const Surf: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const skin = "#D9A46A";
  return (
    <g>
      <path d="M90 210 Q160 165 205 210 Q250 250 320 200 L320 250 L90 250 Z" fill={water} />
      <ellipse cx="195" cy="205" rx="55" ry="12" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-15 195 205)" />
      <circle cx="195" cy="170" r="10" fill={skin} />
      <path d="M195 180 L195 200 M195 185 Q175 190 165 205 M195 190 Q215 195 225 180" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
      {[[130, 220], [270, 195]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 10} ${(y as number) - 12} ${(x as number) + 20} ${y}`} fill="none" stroke="#fff" strokeWidth="3" opacity="0.5" />
      ))}
    </g>
  );
};

const AnimalesPeligrosos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M155 235 Q160 210 190 210 Q220 210 230 235 Z" fill="#4A8F4E" stroke={shade("#4A8F4E", 0.3)} strokeWidth="2.5" />
      <ellipse cx="205" cy="185" rx="20" ry="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="197" cy="180" r="3" fill="#1A1A1A" />
      <circle cx="213" cy="180" r="3" fill="#1A1A1A" />
      {[[-30, -20], [-10, -35], [10, -35], [30, -20]].map(([dx, dy], i) => (
        <path key={i} d={`M205 185 L${205 + (dx as number)} ${185 + (dy as number)}`} stroke={dark} strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${i * 20 - 30} 205 185)`} />
      ))}
      {[[-30, 20], [-10, 35], [10, 35], [30, 20]].map(([dx, dy], i) => (
        <path key={`b${i}`} d={`M205 185 L${205 + (dx as number)} ${185 + (dy as number)}`} stroke={dark} strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${i * 20 - 30} 205 185)`} />
      ))}
    </g>
  );
};

const Acdc: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 220 Q165 250 195 253 Q225 255 222 225 Q220 205 200 200 Q188 210 175 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="150" width="10" height="55" fill="#1A1A1A" />
      <rect x="188" y="138" width="24" height="14" fill="#1A1A1A" />
      <polygon points="230,140 210,180 225,180 205,220 250,175 232,175 250,140" fill="#F4A300" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Outback: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sky = "#F4C87A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="110" fill={sky} opacity="0.4" />
      <rect x="90" y="190" width="230" height="60" fill={accentColor} opacity="0.5" />
      <path d="M205 250 L185 190 L225 190 Z" fill="#5C5C5C" stroke={dark} strokeWidth="2" />
      {[195, 205, 215].map((x) => (
        <rect key={x} x={x - 1.5} y="200" width="3" height="16" fill="#F5F0E6" opacity="0.7" />
      ))}
      <circle cx="270" cy="110" r="24" fill="#F4A300" opacity="0.85" />
    </g>
  );
};

export const australiaIllustrations: Record<string, IllustrationDefinition> = {
  "opera-house": { component: OperaHouse },
  "gran-barrera-coral": { component: GranBarreraCoral },
  canguros: { component: Canguros },
  "ayers-rock": { component: AyersRock },
  "aborigenes-arte": { component: AborigenesArte },
  vegemite: { component: Vegemite },
  surf: { component: Surf },
  "animales-peligrosos": { component: AnimalesPeligrosos },
  acdc: { component: Acdc },
  outback: { component: Outback },
};
