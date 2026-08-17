import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PetraLaCiudadRosadaTalladaEnLaRoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,250 130,90 280,90 320,250" fill={shade(accentColor, 0.15)} opacity="0.5" />
      <rect x="155" y="150" width="100" height="95" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[172, 197, 222, 247].map((x, i) => (
        i < 3 && <rect key={x} x={x} y="150" width="10" height="95" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="1.5" />
      ))}
      <polygon points="150,150 205,120 260,150" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="192" y="190" width="26" height="55" fill={dark} opacity="0.6" />
      <path d="M195 120 Q205 105 215 120" fill="none" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="112" rx="6" ry="9" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const WadiRumElValleDeLaLuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[100, 240, -230, 80], [140, 240, -100, 130], [230, 240, -140, 100], [280, 240, -60, 70]].map(([x, y, dx, h], i) => (
        <polygon key={i} points={`${x - 22},${y} ${x + dx * 0.05} ${y - h} ${x + 22},${y}`} fill={i % 2 === 0 ? accentColor : shade(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      ))}
      <ellipse cx="205" cy="240" rx="120" ry="14" fill={tint(accentColor, 0.3)} />
      {[[130, 100], [175, 85], [225, 95], [270, 105], [155, 110]].map(([x, y]) => (
        <circle key={x + "-" + y} cx={x} cy={y} r="1.8" fill="#F5F0E6" opacity="0.85" />
      ))}
      <circle cx="290" cy="95" r="10" fill="#F5F0E6" opacity="0.9" />
    </g>
  );
};

const ElMarMuertoElPuntoMasBajoDeLaTierra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="150" width="230" height="90" fill={accentColor} opacity="0.55" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="175" rx="20" ry="10" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <circle cx="190" cy="168" r="7" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M180 178 L172 172 M230 178 L238 172" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      {[[110, 230], [140, 235], [270, 232], [300, 228]].map(([x, y]) => (
        <polygon key={x + "-" + y} points={`${x},${y - 6} ${x + 5},${y} ${x - 5},${y}`} fill="#F5F0E6" stroke={dark} strokeWidth="1" />
      ))}
    </g>
  );
};

const JerashLaPompeyaDeMedioOriente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cols = [110, 145, 180, 230, 265, 300];
  return (
    <g>
      <path d="M90 235 Q205 250 320 235 L320 245 Q205 260 90 245 Z" fill={dark} opacity="0.2" />
      {cols.map((x) => (
        <g key={x}>
          <rect x={x - 6} y="140" width="12" height="95" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
          <rect x={x - 9} y="132" width="18" height="8" fill={accentColor} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <path d="M90 235 Q205 210 320 235" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElCafeBeduinoYLaHospitalidadJordana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M155 150 Q145 150 145 165 L150 220 Q150 235 165 235 L190 235 Q205 235 205 220 L205 165 Q205 150 195 150 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M200 175 Q235 175 245 155" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <rect x="170" y="140" width="14" height="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M240 190 L200 205" stroke="#8B5A2B" strokeWidth="3" opacity="0.7" />
      {[[260, 220], [285, 222]].map(([x, y]) => (
        <path key={x} d={`M${x - 10} ${y} L${x + 10} ${y} L${x + 8} ${y + 18} Q${x} ${y + 24} ${x - 8} ${y + 18} Z`} fill="#5C3A21" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const ElMansafPlatoNacionalDeJordania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="105" ry="35" fill="#B8A484" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="85" ry="25" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {[[170, 185, 22], [215, 178, 26], [250, 190, 20]].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.55} fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      ))}
      <path d="M150 180 Q205 165 260 180" fill="none" stroke="#F5F0E6" strokeWidth="10" opacity="0.85" />
      {[[160, 172], [190, 168], [220, 170], [245, 175]].map(([x, y]) => (
        <ellipse key={x + "-" + y} cx={x} cy={y} rx="3" ry="2" fill={accentColor} opacity="0.8" />
      ))}
    </g>
  );
};

const ElMonteNeboSinPoderCruzar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,240 205,110 320,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="180,150 205,110 230,150" fill="#F5F0E6" opacity="0.8" />
      <circle cx="205" cy="128" r="9" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M195 137 L215 137 L212 150 L198 150 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
      <line x1="270" y1="235" x2="270" y2="170" stroke="#5C3A21" strokeWidth="4" />
      <path d="M270 170 Q262 178 270 186 Q278 178 270 170 Z" fill="#3E8E7E" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElTeatroRomanoDeAman: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="100" width="50" height="120" fill="#B8A484" stroke={dark} strokeWidth="2" opacity="0.7" />
      <rect x="150" y="85" width="45" height="135" fill="#B8A484" stroke={dark} strokeWidth="2" opacity="0.7" />
      <rect x="270" y="95" width="48" height="125" fill="#B8A484" stroke={dark} strokeWidth="2" opacity="0.7" />
      <path d="M100 240 A105 70 0 0 1 310 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M120 240 A85 55 0 0 1 290 240 Z" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M140 240 A65 42 0 0 1 270 240 Z" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <ellipse cx="205" cy="240" rx="45" ry="14" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElBeitAlShaarLaCasaDePeloBeduina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="240" rx="120" ry="10" fill="#C9A87C" opacity="0.6" />
      <path d="M110 235 L145 155 L265 155 L300 235 Z" fill="#3E2E24" stroke={dark} strokeWidth="3" />
      {[145, 175, 205, 235, 265].map((x) => (
        <line key={x} x1={x} y1="155" x2="205" y2="120" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      <line x1="120" y1="235" x2="120" y2="155" stroke="#5C3A21" strokeWidth="5" />
      <line x1="290" y1="235" x2="290" y2="155" stroke="#5C3A21" strokeWidth="5" />
      <line x1="205" y1="235" x2="205" y2="120" stroke="#5C3A21" strokeWidth="6" />
      <polygon points="195,235 215,235 210,220 200,220" fill={accentColor} opacity="0.8" />
    </g>
  );
};

const ElCastilloDeKerak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <polygon points="100,240 140,190 270,190 310,240" fill={dark} opacity="0.3" />
      <rect x="140" y="130" width="130" height="110" fill="#5B5B5B" stroke={dark} strokeWidth="3" />
      <rect x="120" y="150" width="30" height="90" fill="#4A4A4A" stroke={dark} strokeWidth="2.5" />
      <rect x="260" y="150" width="30" height="90" fill="#4A4A4A" stroke={dark} strokeWidth="2.5" />
      {[125, 145, 265, 285].map((x) => (
        <rect key={x} x={x - 4} y="140" width="8" height="12" fill="#5B5B5B" stroke={dark} strokeWidth="1.5" />
      ))}
      {[150, 172, 194, 216, 238, 260].map((x) => (
        <rect key={x} x={x} y="120" width="14" height="12" fill="#5B5B5B" stroke={dark} strokeWidth="1.5" />
      ))}
      <rect x="195" y="190" width="20" height="50" fill="#1A1A1A" opacity="0.7" />
    </g>
  );
};

export const jordanIllustrations: Record<string, IllustrationDefinition> = {
  "petra-la-ciudad-rosada-tallada-en-la-roca": { component: PetraLaCiudadRosadaTalladaEnLaRoca },
  "wadi-rum-el-valle-de-la-luna": { component: WadiRumElValleDeLaLuna },
  "el-mar-muerto-el-punto-mas-bajo-de-la-tierra": { component: ElMarMuertoElPuntoMasBajoDeLaTierra },
  "jerash-la-pompeya-de-medio-oriente": { component: JerashLaPompeyaDeMedioOriente },
  "el-cafe-beduino-y-la-hospitalidad-jordana": { component: ElCafeBeduinoYLaHospitalidadJordana },
  "el-mansaf-plato-nacional-de-jordania": { component: ElMansafPlatoNacionalDeJordania },
  "el-monte-nebo-sin-poder-cruzar": { component: ElMonteNeboSinPoderCruzar },
  "el-teatro-romano-de-aman": { component: ElTeatroRomanoDeAman },
  "el-beit-al-shaar-la-casa-de-pelo-beduina": { component: ElBeitAlShaarLaCasaDePeloBeduina },
  "el-castillo-de-kerak": { component: ElCastilloDeKerak },
};
