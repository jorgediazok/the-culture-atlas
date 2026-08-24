import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PaisMasBajo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.6" />
      <path d="M100 220 Q205 212 310 220 L310 226 Q205 219 100 226 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M130 220 Q135 210 145 220" fill="none" stroke="#4A8F4E" strokeWidth="3" strokeLinecap="round" />
      <path d="M260 220 Q265 210 275 220" fill="none" stroke="#4A8F4E" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 195 Q205 185 320 195" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const NacionDigital: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="180" width="230" height="70" fill={water} opacity="0.4" />
      <ellipse cx="150" cy="215" rx="30" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M200 150 Q195 130 215 125 Q220 108 240 112 Q258 108 262 125 Q280 128 275 148 Q280 160 262 162 L215 162 Q198 160 200 150 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2.5" />
      <path d="M175 200 Q195 180 220 158" fill="none" stroke={dark} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
    </g>
  );
};

const DominioTv: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="140" width="130" height="90" rx="8" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      <rect x="152" y="152" width="106" height="66" fill={accentColor} />
      <text x="205" y="197" fontSize="34" fontWeight="700" fill="#fff" textAnchor="middle">TV</text>
      <line x1="180" y1="230" x2="230" y2="230" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const FunafutiPista: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="100" y="180" width="220" height="40" fill="#5C5C5C" />
      <line x1="100" y1="200" x2="320" y2="200" stroke="#F5F0E6" strokeWidth="2" strokeDasharray="10 8" />
      {[[150, 230], [230, 235], [270, 225]].map(([x, y]) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 20} r="7" fill={skin} />
          <path d={`M${(x as number) - 8} ${y} Q${x} ${(y as number) - 14} ${(x as number) + 8} ${y}`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <circle cx="150" cy="195" r="6" fill="#F4A300" opacity="0.6" />
    </g>
  );
};

const Fatele: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const tin = "#B0B8BF";
  return (
    <g>
      {[[150, 220], [255, 220]].map(([x, y]) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 55} r="10" fill={skin} />
          <path d={`M${(x as number) - 16} ${(y as number) - 20} Q${x} ${(y as number) - 32} ${(x as number) + 16} ${(y as number) - 20} L${(x as number) + 12} ${y} L${(x as number) - 12} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <rect x="185" y="210" width="40" height="26" fill={tin} stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="210" rx="20" ry="6" fill={tint(tin, 0.3)} stroke={dark} strokeWidth="1.5" />
      <path d="M195 200 L192 210 M215 200 L218 210" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const MarinosTuvaluanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="230" y="180" width="80" height="45" fill="#5C5C5C" stroke={dark} strokeWidth="2.5" />
      <rect x="245" y="165" width="14" height="20" fill="#5C5C5C" stroke={dark} strokeWidth="2" />
      <path d="M90 225 Q205 235 320 225 L320 250 L90 250 Z" fill="#3D8FB0" />
      <circle cx="170" cy="175" r="14" fill={skin} />
      <path d="M155 175 Q170 165 185 175 L182 168 Q170 160 158 168 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M158 190 Q170 183 182 190 L178 235 L162 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const PescaLicencias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.6" />
      <path d="M240 195 L270 178 L262 205 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <rect x="200" y="188" width="45" height="20" fill="#8B5A2B" stroke={dark} strokeWidth="2" opacity="0.7" />
      <path d="M120 210 Q155 192 195 205 Q220 213 225 225 Q220 235 195 232 Q155 226 130 218 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M225 225 L245 212 L240 230 Z" fill={dark} />
      <circle cx="140" cy="209" r="3" fill="#1A1A1A" />
    </g>
  );
};

const OnuMiembroPequeno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="150" width="110" height="90" fill={light} stroke={dark} strokeWidth="3" />
      {[170, 200, 230].map((x) => (
        <rect key={x} x={x - 8} y="175" width="16" height="30" fill="none" stroke={dark} strokeWidth="1.5" />
      ))}
      <line x1="130" y1="235" x2="130" y2="140" stroke={dark} strokeWidth="3" />
      <rect x="130" y="140" width="35" height="22" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const AtolonesTuvalu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const lagoon = "#26C6DA";
  return (
    <g>
      <ellipse cx="205" cy="175" rx="85" ry="50" fill={accentColor} stroke={dark} strokeWidth="4" />
      <ellipse cx="205" cy="175" rx="55" ry="28" fill={lagoon} stroke={shade(lagoon, 0.3)} strokeWidth="2" />
      <ellipse cx="205" cy="172" rx="38" ry="17" fill={tint(lagoon, 0.4)} opacity="0.7" />
    </g>
  );
};

const IndependenciaEllice: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const other = "#8E24AA";
  return (
    <g>
      <rect x="90" y="150" width="230" height="90" fill={water} opacity="0.45" />
      {[[140, 195, 18], [175, 210, 14]].map(([x, y, r]) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      {[[260, 190, 20], [290, 205, 16]].map(([x, y, r]) => (
        <circle key={`b${x}`} cx={x} cy={y} r={r} fill={other} stroke={shade(other, 0.3)} strokeWidth="1.5" />
      ))}
      <path d="M195 195 L235 195" stroke={dark} strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
      <path d="M225 190 L235 195 L225 200" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const PulakaPozos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const soil = "#6B4A2E";
  const soilDark = shade(soil, 0.35);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#DCD3B4" opacity="0.5" />
      <path d="M140 245 L155 185 Q205 172 255 185 L270 245 Z" fill={soil} stroke={soilDark} strokeWidth="3" />
      <path d="M155 185 L165 210 M180 190 L185 218 M225 190 L222 218 M245 185 L238 210" stroke={soilDark} strokeWidth="2" opacity="0.5" />
      <ellipse cx="205" cy="184" rx="52" ry="13" fill={tint(soil, 0.15)} stroke={soilDark} strokeWidth="2.5" />
      <path d="M205 178 Q165 130 150 108 Q178 145 205 178 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M205 178 Q185 128 205 92 Q225 128 205 178 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <path d="M205 178 Q238 140 262 108 Q235 152 205 178 Z" fill={tint(accentColor, 0.45)} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="178" x2="205" y2="192" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const FalekaupuleConsejo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const thatch = "#B08A4E";
  const thatchDark = shade(thatch, 0.35);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#DCE8E0" opacity="0.4" />
      <path d="M100 165 L205 100 L310 165 L285 178 L205 128 L125 178 Z" fill={thatch} stroke={thatchDark} strokeWidth="3" />
      <line x1="130" y1="178" x2="130" y2="235" stroke={dark} strokeWidth="4" />
      <line x1="205" y1="128" x2="205" y2="235" stroke={dark} strokeWidth="4" />
      <line x1="280" y1="178" x2="280" y2="235" stroke={dark} strokeWidth="4" />
      <rect x="110" y="235" width="190" height="15" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      {[[150, 220], [190, 226], [230, 226], [265, 220]].map(([x, y]) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 18} r="9" fill={skin} />
          <path d={`M${(x as number) - 15} ${(y as number) + 10} Q${x} ${(y as number) - 6} ${(x as number) + 15} ${(y as number) + 10} L${(x as number) + 11} ${(y as number) + 16} Q${x} ${(y as number) + 8} ${(x as number) - 11} ${(y as number) + 16} Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

export const tuvaluIllustrations: Record<string, IllustrationDefinition> = {
  "pais-mas-bajo": { component: PaisMasBajo },
  "nacion-digital": { component: NacionDigital },
  "dominio-tv": { component: DominioTv },
  "funafuti-pista": { component: FunafutiPista },
  fatele: { component: Fatele },
  "marinos-tuvaluanos": { component: MarinosTuvaluanos },
  "pesca-licencias": { component: PescaLicencias },
  "onu-miembro-pequeno": { component: OnuMiembroPequeno },
  "atolones-tuvalu": { component: AtolonesTuvalu },
  "independencia-ellice": { component: IndependenciaEllice },
  "pulaka-pozos": { component: PulakaPozos },
  "falekaupule-consejo": { component: FalekaupuleConsejo },
};
