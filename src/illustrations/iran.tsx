import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Persepolis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* elevated stone platform */}
      <rect x="95" y="220" width="225" height="20" fill={dark} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={100 + i * 8} y={225 + i * 5} width={215 - i * 16} height="4" fill={shade(dark, 0.15)} />
      ))}
      {/* columns with carved capitals */}
      {[130, 175, 220, 265].map((x) => (
        <g key={x}>
          <rect x={x} y="120" width="16" height="100" fill={accentColor} stroke={dark} strokeWidth="1.5" />
          <rect x={x - 6} y="108" width="28" height="14" fill={light} stroke={dark} strokeWidth="1.5" />
          {[135, 155, 175, 195].map((y) => (
            <line key={y} x1={x} y1={y} x2={x + 16} y2={y} stroke={dark} strokeWidth="1" opacity="0.3" />
          ))}
        </g>
      ))}
    </g>
  );
};

const PoesiaPersa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const red = "#C1272D";
  return (
    <g>
      {/* open book */}
      <path d="M205 150 L120 165 L120 225 L205 215 Z" fill={accentColor} />
      <path d="M205 150 L290 165 L290 225 L205 215 Z" fill={dark} />
      <line x1="205" y1="150" x2="205" y2="215" stroke={light} strokeWidth="2" />
      {[170, 185, 200].map((y) => (
        <line key={y} x1="135" y1={y} x2="190" y2={y - 3} stroke={light} strokeWidth="1.5" opacity="0.7" />
      ))}
      {/* rose beside it */}
      <path d="M255 200 L255 240" stroke="#4A8F4E" strokeWidth="4" />
      <circle cx="255" cy="185" r="18" fill={red} />
      <circle cx="255" cy="185" r="10" fill={shade(red, 0.15)} />
    </g>
  );
};

const AlfombrasPersas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const red = "#8B2942";
  return (
    <g>
      <rect x="105" y="105" width="200" height="140" fill={red} stroke={dark} strokeWidth="3" />
      <rect x="120" y="120" width="170" height="110" fill="none" stroke={gold} strokeWidth="4" />
      <path d="M205 145 L225 175 L205 205 L185 175 Z" fill={gold} />
      <circle cx="205" cy="175" r="10" fill={accentColor} />
      {[[140, 140], [270, 140], [140, 210], [270, 210]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="10" fill={gold} opacity="0.8" />
      ))}
    </g>
  );
};

const Nowruz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  const red = "#C1272D";
  return (
    <g>
      {/* table */}
      <rect x="105" y="195" width="215" height="12" fill={dark} />
      <rect x="115" y="207" width="10" height="35" fill={dark} />
      <rect x="290" y="207" width="10" height="35" fill={dark} />
      {/* wheat/green sprouts */}
      <path d="M150 195 Q145 170 150 145 M158 195 Q163 172 158 148" stroke={green} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M240 195 Q235 168 240 142 M248 195 Q253 170 248 146" stroke={green} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* red apple */}
      <circle cx="205" cy="175" r="22" fill={red} />
      <path d="M205 153 Q200 145 205 140" stroke="#4A8F4E" strokeWidth="3" fill="none" />
    </g>
  );
};

const CineIrani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="115" y="150" width="120" height="90" fill={dark} />
      <path d="M115 150 L235 150 L225 122 L105 122 Z" fill={accentColor} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={108 + i * 24} y="122" width="12" height="28" fill={i % 2 === 0 ? "#1A1A1A" : "#F5F0E6"} transform="skewX(-20)" />
      ))}
      <rect x="130" y="175" width="90" height="10" fill={light} opacity="0.6" />
      <circle cx="280" cy="195" r="40" fill="none" stroke={dark} strokeWidth="8" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <circle key={deg} cx="280" cy="168" r="8" fill={dark} transform={`rotate(${deg} 280 195)`} />
      ))}
    </g>
  );
};

const JardinesPersas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="105" y="105" width="200" height="140" fill={accentColor} opacity="0.5" />
      <rect x="195" y="105" width="20" height="140" fill={water} />
      <rect x="105" y="165" width="200" height="20" fill={water} />
      {[[150, 130], [255, 130], [150, 220], [255, 220]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="18" fill={dark} opacity="0.6" />
      ))}
    </g>
  );
};

const Zoroastrismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      <path d="M155 240 L165 195 L245 195 L255 240 Z" fill={dark} />
      <rect x="170" y="220" width="70" height="12" fill={shade(dark, 0.2)} />
      <ellipse cx="205" cy="195" rx="45" ry="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M205 195 Q190 170 200 145 Q205 155 205 145 Q210 155 210 145 Q220 170 205 195 Z" fill={flame} />
    </g>
  );
};

const Azafran: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const purple = "#8B5FBF";
  const red = "#C1272D";
  return (
    <g>
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse key={deg} cx="205" cy="150" rx="14" ry="34" fill={purple} transform={`rotate(${deg} 205 195)`} />
      ))}
      <circle cx="205" cy="195" r="16" fill={accentColor} />
      {[-15, 0, 15].map((deg) => (
        <line key={deg} x1="205" y1="195" x2="205" y2="155" stroke={red} strokeWidth="4" strokeLinecap="round" transform={`rotate(${deg} 205 195)`} />
      ))}
      <line x1="205" y1="195" x2="205" y2="240" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const AzulejosIsfahan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const teal = "#1D8FA5";
  const gold = "#D4A017";
  return (
    <g>
      <path d="M115 235 L115 175 Q115 120 205 105 Q295 120 295 175 L295 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect key={`${row}-${col}`} x={130 + col * 32} y={130 + row * 24} width="26" height="20" fill={(row + col) % 2 === 0 ? teal : gold} opacity="0.85" />
        ))
      )}
    </g>
  );
};

const CiroElGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 235 L155 130 Q155 118 175 118 L235 118 Q255 118 255 130 L255 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="130" rx="50" ry="12" fill={light} stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="235" rx="50" ry="12" fill={dark} />
      {[150, 165, 180, 195, 210].map((y) => (
        <g key={y}>
          {[170, 190, 210, 230].map((x) => (
            <line key={x} x1={x} y1={y} x2={x + 6} y2={y + 4} stroke={dark} strokeWidth="1.5" opacity="0.6" />
          ))}
        </g>
      ))}
    </g>
  );
};

export const iranIllustrations: Record<string, IllustrationDefinition> = {
  persepolis: { component: Persepolis },
  "poesia-persa": { component: PoesiaPersa },
  "alfombras-persas": { component: AlfombrasPersas },
  nowruz: { component: Nowruz },
  "cine-irani": { component: CineIrani },
  "jardines-persas": { component: JardinesPersas },
  zoroastrismo: { component: Zoroastrismo },
  azafran: { component: Azafran },
  "azulejos-isfahan": { component: AzulejosIsfahan },
  "ciro-el-grande": { component: CiroElGrande },
};
