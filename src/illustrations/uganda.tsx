import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const FuentesNilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="120" fill={water} opacity="0.5" />
      <path d="M180 200 Q195 215 205 235 Q215 215 230 200" fill={water} stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="215" width="16" height="22" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <circle cx="203" cy="212" r="3" fill={dark} />
      <path d="M150 175 Q160 165 180 168" fill="none" stroke={tint(water, 0.4)} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const GorilasMontana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const fur = "#3D2B1F";
  return (
    <g>
      <path d="M90 245 Q205 235 320 245" stroke="#2E7D32" strokeWidth="30" opacity="0.35" fill="none" />
      <ellipse cx="205" cy="215" rx="55" ry="30" fill={fur} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="175" r="34" fill={fur} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="185" rx="20" ry="14" fill="#5C4433" />
      <circle cx="193" cy="178" r="4" fill="#1A1A1A" />
      <circle cx="217" cy="178" r="4" fill="#1A1A1A" />
      <path d="M150 220 L130 215 M260 220 L280 215" stroke={fur} strokeWidth="10" strokeLinecap="round" />
      {[[130, 140], [280, 145], [160, 120]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} L${x} ${(y as number) + 20}`} stroke="#2E7D32" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
      ))}
    </g>
  );
};

const PerlaDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const green = "#2E8B57";
  return (
    <g>
      {[[130, 150, 20], [180, 180, 26], [230, 145, 18], [270, 190, 22]].map(([x, y, r]) => (
        <path key={x as number} d={`M${(x as number) - (r as number)} ${y} Q${x} ${(y as number) - (r as number) * 1.4} ${(x as number) + (r as number)} ${y} Q${x} ${(y as number) + (r as number) * 0.4} ${(x as number) - (r as number)} ${y} Z`} fill={green} opacity="0.35" />
      ))}
      <path d="M205 130 Q175 140 175 180 Q175 215 205 235 Q235 215 235 180 Q235 140 205 130 Z" fill={accentColor} stroke={shade(accentColor, 0.3)} strokeWidth="3" />
      <ellipse cx="195" cy="165" rx="12" ry="18" fill="#fff" opacity="0.35" />
    </g>
  );
};

const BobiWine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  return (
    <g>
      <ellipse cx="175" cy="185" rx="12" ry="16" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <line x1="175" y1="201" x2="175" y2="235" stroke={dark} strokeWidth="3" />
      <circle cx="260" cy="150" r="14" fill={skin} />
      <path d="M245 165 Q260 158 275 165 L270 220 L250 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M260 165 L255 195 L262 195 L250 235 L262 205 L255 205 Z" fill="#D4A017" />
    </g>
  );
};

const LagoVictoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.55" />
      {[[150, 140, 14], [230, 165, 18], [270, 120, 10]].map(([x, y, r]) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill="#8FA05A" stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M150 210 L200 205 L192 225 L158 225 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <line x1="175" y1="205" x2="175" y2="185" stroke={dark} strokeWidth="2" />
      <path d="M175 185 L195 192 L175 198 Z" fill={accentColor} />
    </g>
  );
};

const Matoke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#7A9D2E";
  return (
    <g>
      <path d="M155 200 L155 225 Q155 240 180 240 L230 240 Q255 240 255 225 L255 200 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2.5" />
      <path d="M150 200 Q205 185 260 200 Q205 210 150 200 Z" fill={green} stroke={shade(green, 0.3)} strokeWidth="2" />
      {[[175, 195], [205, 190], [235, 195]].map(([x, y], i) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 6} ${(y as number) - 18} ${x} ${(y as number) - 34} Q${(x as number) + 6} ${(y as number) - 18} ${x} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" opacity={1 - i * 0.05} />
      ))}
    </g>
  );
};

const ReinoBuganda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      <ellipse cx="205" cy="220" rx="60" ry="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M155 215 L165 175 L180 200 L195 165 L205 195 L215 165 L230 200 L245 175 L255 215 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="165" cy="170" r="5" fill={gold} />
      <circle cx="195" cy="160" r="5" fill={gold} />
      <circle cx="215" cy="160" r="5" fill={gold} />
      <circle cx="245" cy="170" r="5" fill={gold} />
    </g>
  );
};

const BodaBoda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  return (
    <g>
      <circle cx="155" cy="225" r="20" fill="none" stroke={dark} strokeWidth="5" />
      <circle cx="255" cy="225" r="20" fill="none" stroke={dark} strokeWidth="5" />
      <path d="M155 225 L190 195 L225 225 M190 195 L200 165" stroke={dark} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M225 225 L255 225" stroke={dark} strokeWidth="5" />
      <circle cx="200" cy="150" r="10" fill={skin} />
      <path d="M190 160 Q200 155 210 160 L206 195 L194 195 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="230" cy="145" r="9" fill={skin} />
      <path d="M222 154 Q230 150 238 154 L235 185 L225 185 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
      <rect x="245" y="175" width="20" height="16" fill="#8B5A2B" transform="rotate(-15 255 183)" />
    </g>
  );
};

const Rolex: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const egg = "#F4C430";
  return (
    <g>
      <path d="M150 190 Q205 175 260 190 Q255 210 205 215 Q155 210 150 190 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <ellipse key={i} cx={175 + i * 35} cy={195 - i * 2} rx="26" ry="16" fill="#F5EFE0" stroke={dark} strokeWidth="2" transform={`rotate(${i * 15 - 15} ${175 + i * 35} 195)`} />
      ))}
      <ellipse cx="205" cy="185" rx="34" ry="10" fill={egg} opacity="0.85" />
      {[[190, 182], [220, 188]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="5" ry="4" fill="#4A8F4E" />
      ))}
    </g>
  );
};

const RaftingNilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.6" />
      {[[110, 130], [200, 110], [280, 140], [140, 200], [250, 210]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 10} ${(y as number) - 8} ${(x as number) + 20} ${y} Q${(x as number) + 10} ${(y as number) + 8} ${x} ${y} Z`} fill="#fff" opacity="0.5" />
      ))}
      <path d="M170 190 L240 175 L245 200 L165 215 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[185, 190], [210, 185], [230, 182]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="7" fill="#F4A300" opacity={1 - i * 0.1} />
      ))}
    </g>
  );
};

export const ugandaIllustrations: Record<string, IllustrationDefinition> = {
  "fuentes-nilo": { component: FuentesNilo },
  "gorilas-montana": { component: GorilasMontana },
  "perla-de-africa": { component: PerlaDeAfrica },
  "bobi-wine": { component: BobiWine },
  "lago-victoria": { component: LagoVictoria },
  matoke: { component: Matoke },
  "reino-buganda": { component: ReinoBuganda },
  "boda-boda": { component: BodaBoda },
  rolex: { component: Rolex },
  "rafting-nilo": { component: RaftingNilo },
};
