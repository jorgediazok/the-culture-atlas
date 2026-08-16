import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RegistanSamarcanda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {[[130, 120, 45], [205, 105, 55], [280, 120, 45]].map(([x, y, h], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 30} y={y} width="60" height={(h as number) + 60} fill={i === 1 ? tint(accentColor, 0.15) : accentColor} stroke={dark} strokeWidth="2.5" />
          <path d={`M${(x as number) - 30} ${y} Q${x} ${(y as number) - 22} ${(x as number) + 30} ${y} Z`} fill={dark} />
          <ellipse cx={x} cy={(y as number) - 22} rx="14" ry="18" fill={accentColor} stroke={dark} strokeWidth="2" />
          <path d={`M${x} ${(y as number) - 40} L${x} ${(y as number) - 52}`} stroke={gold} strokeWidth="2.5" />
          <path d={`M${(x as number) - 22} ${(y as number) + 10} L${(x as number) - 22} ${(y as number) + 60} M${(x as number) + 22} ${(y as number) + 10} L${(x as number) + 22} ${(y as number) + 60}`} stroke={gold} strokeWidth="2" opacity="0.6" />
        </g>
      ))}
    </g>
  );
};

const AmirTimurTamerlan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const jade = "#2E7D5B";
  return (
    <g>
      <path d="M170 235 L165 155 Q163 120 205 112 Q247 120 245 155 L240 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M178 150 Q205 138 232 150 L226 175 Q205 168 184 175 Z" fill={jade} stroke={shade(jade, 0.3)} strokeWidth="2" />
      <ellipse cx="205" cy="130" rx="24" ry="20" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M182 122 L228 122 L205 105 Z" fill={dark} />
      <path d="M110 225 Q100 200 118 175 Q128 190 122 210 Q135 195 132 172" fill="none" stroke="#B0B8BF" strokeWidth="7" strokeLinecap="round" />
      <path d="M118 175 L108 165 L112 180 Z" fill="#8B5A2B" />
    </g>
  );
};

const MarDeAralDesastre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9BE8F";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={sand} opacity="0.6" />
      <path d="M140 235 L150 190 Q150 180 165 180 L245 180 Q255 180 258 195 L262 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="150" width="14" height="35" fill={dark} />
      <path d="M150 200 L262 200" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <path d="M105 235 L108 210 Q108 202 116 202 L128 202 Q135 202 136 212 L138 235 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2" transform="rotate(-8 120 220)" />
      {[[130, 210], [280, 205]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 10} ${(y as number) - 16} ${(x as number) + 22} ${y}`} fill="none" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      ))}
    </g>
  );
};

const PlovPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rice = "#F5EFE0";
  const carrot = "#E8912D";
  return (
    <g>
      <path d="M140 190 L140 215 Q140 235 205 238 Q270 235 270 215 L270 190 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="3" />
      <ellipse cx="205" cy="190" rx="65" ry="18" fill={rice} stroke={dark} strokeWidth="2.5" />
      {[[175, 186], [205, 182], [235, 188], [190, 194], [220, 192]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="8" ry="5" fill={i % 2 === 0 ? carrot : accentColor} opacity="0.85" />
      ))}
      <path d="M120 175 Q130 178 140 190 M290 175 Q280 178 270 190" fill="none" stroke="#B0AFA8" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M175 160 Q170 145 180 132 M235 160 Q240 145 230 132" fill="none" stroke="#E8E4DC" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const AtlasIkatSeda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#C1272D"];
  return (
    <g>
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <rect x={x - 20} y="110" width="40" height="130" fill={colors[i % colors.length]} opacity="0.85" />
          {[0, 1, 2, 3].map((row) => (
            <path key={row} d={`M${x - 16} ${125 + row * 30} Q${x} ${118 + row * 30} ${x + 16} ${125 + row * 30} Q${x} ${135 + row * 30} ${x - 16} ${125 + row * 30} Z`} fill={colors[(i + row + 1) % colors.length]} opacity="0.55" />
          ))}
        </g>
      ))}
      <rect x="110" y="105" width="200" height="10" fill={dark} opacity="0.5" />
    </g>
  );
};

const AlgodonOroBlanco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#8B7355" opacity="0.35" />
      {[[130, 210], [175, 205], [220, 212], [265, 206]].map(([x, y], i) => (
        <g key={x as number}>
          <line x1={x} y1={y} x2={x} y2={(y as number) - 30} stroke="#4A6741" strokeWidth="3" />
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 35} rx="9" ry="11" fill="#F5F0E6" stroke={shade("#F5F0E6", 0.25)} strokeWidth="1.5" transform={`rotate(${deg} ${x} ${(y as number) - 30})`} opacity={0.95 - i * 0.05} />
          ))}
        </g>
      ))}
      <circle cx="195" cy="150" r="9" fill={skin} />
      <path d="M186 160 Q195 155 204 160 L200 178 L190 178 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M204 165 Q215 172 220 190" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
    </g>
  );
};

const UlugbekObservatorio: IllustrationComponent = ({ accentColor }) => {
  const stone = "#8B8378";
  const night = "#1A2340";
  return (
    <g>
      <rect x="90" y="80" width="230" height="90" fill={night} opacity="0.5" />
      <circle cx="270" cy="110" r="10" fill="#F5F0E6" opacity="0.9" />
      <path d="M120 235 Q120 190 160 175 Q195 162 205 130 Q215 162 250 175 Q290 190 290 235 Z" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="3" />
      <path d="M205 130 L200 235 M210 130 L215 235" stroke={accentColor} strokeWidth="4" opacity="0.7" />
      <path d="M150 220 L260 220" stroke={shade(stone, 0.35)} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const PanSagradoNon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="180" rx="85" ry="55" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      <ellipse cx="205" cy="180" rx="65" ry="40" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.35" />
      <circle cx="205" cy="180" r="20" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <circle key={deg} cx="205" cy="160" r="3" fill={dark} opacity="0.6" transform={`rotate(${deg} 205 180)`} />
      ))}
    </g>
  );
};

const MetroTashkent: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const marble = "#E8DCC0";
  return (
    <g>
      <rect x="100" y="90" width="220" height="150" fill={marble} stroke={shade(marble, 0.3)} strokeWidth="3" />
      {[135, 205, 275].map((x) => (
        <g key={x}>
          <rect x={x - 10} y="105" width="20" height="120" fill={accentColor} stroke={dark} strokeWidth="2" />
          <ellipse cx={x} cy="102" rx="16" ry="7" fill={dark} opacity="0.6" />
        </g>
      ))}
      {[135, 205, 275].map((x) => (
        <g key={`c${x}`}>
          <line x1={x} y1="90" x2={x} y2="78" stroke={dark} strokeWidth="2" />
          <path d={`M${x - 12} 78 L${x + 12} 78 L${x} 65 Z`} fill="#F4C430" opacity="0.85" />
        </g>
      ))}
      <rect x="100" y="225" width="220" height="15" fill={dark} opacity="0.3" />
    </g>
  );
};

const DoblementeSinMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="165" r="85" fill="none" stroke={dark} strokeWidth="3" strokeDasharray="6 5" opacity="0.5" />
      <circle cx="205" cy="165" r="55" fill="none" stroke={dark} strokeWidth="3" strokeDasharray="6 5" opacity="0.6" />
      <path d="M175 150 Q205 135 235 150 Q245 165 235 180 Q205 195 175 180 Q165 165 175 150 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="165" r="6" fill={dark} />
    </g>
  );
};

export const uzbekistanIllustrations: Record<string, IllustrationDefinition> = {
  "registan-samarcanda": { component: RegistanSamarcanda },
  "amir-timur-tamerlan": { component: AmirTimurTamerlan },
  "mar-de-aral-desastre": { component: MarDeAralDesastre },
  "plov-plato-nacional": { component: PlovPlatoNacional },
  "atlas-ikat-seda": { component: AtlasIkatSeda },
  "algodon-oro-blanco": { component: AlgodonOroBlanco },
  "ulugbek-observatorio": { component: UlugbekObservatorio },
  "pan-sagrado-non": { component: PanSagradoNon },
  "metro-tashkent": { component: MetroTashkent },
  "doblemente-sin-mar": { component: DoblementeSinMar },
};
