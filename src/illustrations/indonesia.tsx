import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Borobudur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={120 + i * 12} y={225 - i * 24} width={170 - i * 24} height="24" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="1.5" />
      ))}
      {[150, 180, 210, 240, 270].map((x) => (
        <g key={x}>
          <path d={`M${x - 8} 118 Q${x} 100 ${x + 8} 118 Z`} fill={dark} />
          <circle cx={x} cy="112" r="3" fill={light} />
        </g>
      ))}
    </g>
  );
};

const WayangKulit: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <rect x="110" y="95" width="200" height="150" fill={light} opacity="0.6" />
      <line x1="205" y1="240" x2="205" y2="115" stroke={dark} strokeWidth="4" />
      <path d="M195 118 Q195 100 210 100 Q222 100 220 115 Q235 108 238 96" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="207" cy="140" rx="18" ry="30" fill={dark} />
      <path d="M195 165 Q170 175 160 200" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M220 165 Q248 158 258 130" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M198 168 L192 220" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M216 168 L222 220" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const DragonKomodo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9BE8F";
  return (
    <g>
      <path d="M95 240 Q210 228 320 240 L320 250 L95 250 Z" fill={sand} />
      <path d="M130 220 Q125 200 145 195 Q190 185 240 200 Q265 208 260 222 L253 235 L240 235 L237 222 L165 222 L160 235 L148 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="125" cy="200" rx="16" ry="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="120" cy="196" r="2.5" fill="#1A1A1A" />
      <path d="M110 202 Q95 205 85 198 M110 206 Q95 210 88 215" stroke="#C1272D" strokeWidth="2" fill="none" />
      <path d="M260 222 Q285 218 300 205" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${150 + i * 30} 197 L${155 + i * 30} 186`} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const Batik: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="105" y="105" width="200" height="140" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}-${col}`} transform={`translate(${140 + col * 44}, ${140 + row * 40})`}>
            <circle cx="0" cy="0" r="14" fill="none" stroke={light} strokeWidth="2" />
            <path d="M0 -14 Q6 0 0 14 Q-6 0 0 -14 Z" fill={light} opacity="0.7" />
          </g>
        ))
      )}
    </g>
  );
};

const Archipielago: IllustrationComponent = ({ accentColor }) => {
  const water = "#3D8FB0";
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.5" />
      {[[130, 130, 26, green], [180, 165, 34, accentColor], [235, 120, 22, green], [270, 175, 30, accentColor], [155, 205, 20, green]].map(([x, y, r, c], i) => (
        <circle key={i} cx={x as number} cy={y as number} r={r as number} fill={c as string} />
      ))}
    </g>
  );
};

const Gamelan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="150" r={20 - i * 2} fill="none" stroke={gold} strokeWidth="6" />
          <circle cx={x} cy="150" r="5" fill={dark} />
        </g>
      ))}
      <rect x="115" y="200" width="180" height="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[130, 155, 180, 205, 230, 255, 280].map((x) => (
        <rect key={x} x={x} y="205" width="16" height="20" fill={gold} opacity="0.85" />
      ))}
    </g>
  );
};

const AnilloDeFuego: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  const smoke = "#B0AFA8";
  return (
    <g>
      <polygon points="130,240 205,120 280,240" fill={dark} />
      <path d="M205 128 Q195 108 205 90 Q215 108 205 90" fill="none" stroke={smoke} strokeWidth="8" strokeLinecap="round" opacity="0.75" />
      {[0, 1, 2, 3].map((row) => (
        <path key={row} d={`M${95 - row * 5} ${230 - row * 14} L${315 + row * 5} ${230 - row * 14} L${315 + row * 5} ${222 - row * 14} L${95 - row * 5} ${222 - row * 14} Z`} fill={row % 2 === 0 ? green : accentColor} />
      ))}
    </g>
  );
};

const Rendang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M130 175 Q125 230 205 235 Q285 230 280 175 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="75" ry="16" fill={dark} />
      <ellipse cx="205" cy="172" rx="58" ry="10" fill="#3E2817" />
      <path d="M175 155 q6 -14 0 -24" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <path d="M200 155 q6 -14 0 -24" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <path d="M225 155 q6 -14 0 -24" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </g>
  );
};

const BaliHindu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  return (
    <g>
      {/* palm leaf */}
      <path d="M150 235 L260 220 L255 235 L155 250 Z" fill={green} stroke={dark} strokeWidth="2" />
      {/* small offering: flowers, rice, incense */}
      {[[180, 220], [210, 215], [235, 220]].map(([x, y], i) => (
        <g key={x}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 6} rx="5" ry="7" fill={i % 2 === 0 ? accentColor : "#F4C430"} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      <line x1="200" y1="205" x2="196" y2="170" stroke="#8B5A2B" strokeWidth="2" />
      <path d="M196 170 Q192 160 196 150" fill="none" stroke="#B0AFA8" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const BuluTangkis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* racket */}
      <ellipse cx="165" cy="150" rx="42" ry="52" fill="none" stroke={dark} strokeWidth="6" />
      <ellipse cx="165" cy="150" rx="42" ry="52" fill={light} opacity="0.3" />
      {[-24, -8, 8, 24].map((dx) => (
        <line key={dx} x1={165 + dx} y1="102" x2={165 + dx} y2="198" stroke={dark} strokeWidth="1.2" opacity="0.5" />
      ))}
      <line x1="165" y1="202" x2="165" y2="240" stroke={dark} strokeWidth="10" />
      {/* shuttlecock mid-flight */}
      <ellipse cx="255" cy="150" rx="10" ry="8" fill="#fff" stroke={dark} strokeWidth="2" />
      <path d="M255 145 L280 105 M250 148 L268 108 M260 148 L288 112" stroke="#F5F0E6" strokeWidth="2.5" strokeOpacity="0.9" />
      <circle cx="257" cy="150" r="3" fill={accentColor} />
    </g>
  );
};

export const indonesiaIllustrations: Record<string, IllustrationDefinition> = {
  borobudur: { component: Borobudur },
  "wayang-kulit": { component: WayangKulit },
  "dragon-komodo": { component: DragonKomodo },
  batik: { component: Batik },
  archipielago: { component: Archipielago },
  gamelan: { component: Gamelan },
  "anillo-de-fuego": { component: AnilloDeFuego },
  rendang: { component: Rendang },
  "bali-hindu": { component: BaliHindu },
  "bulu-tangkis": { component: BuluTangkis },
};
