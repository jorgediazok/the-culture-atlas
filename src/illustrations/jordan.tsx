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

const ElZarbLaCoccionBeduinaBajoTierra: IllustrationComponent = () => {
  const sand = "#D4C098";
  const dark = shade(sand, 0.35);
  const ember = "#D2691E";
  return (
    <g>
      {/* sand mound around the pit */}
      <path d="M85 235 Q205 218 320 235 L320 250 L85 250 Z" fill={sand} />
      {/* pit opening */}
      <ellipse cx="205" cy="215" rx="75" ry="18" fill={dark} opacity="0.7" />
      {/* embers glowing inside */}
      {[175, 205, 235].map((x) => (
        <circle key={x} cx={x} cy="215" r="9" fill={ember} opacity="0.85" />
      ))}
      {/* rising steam */}
      {[165, 205, 245].map((x) => (
        <path key={x} d={`M${x} 195 Q${x - 8} 165 ${x} 135 Q${x + 8} 110 ${x} 85`} fill="none" stroke="#E8E4DC" strokeWidth="5" opacity="0.6" strokeLinecap="round" />
      ))}
    </g>
  );
};

const ElMapaDeMosaicoDeMadaba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const ochre = "#C9A227";
  const tones = [accentColor, ochre, "#3D8FB0"];
  return (
    <g>
      {/* mosaic ground frame */}
      <rect x="95" y="95" width="220" height="150" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      {/* grid of small tesserae in varied tones */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((__, col) => (
          <rect key={`${row}-${col}`} x={100 + col * 27} y={100 + row * 24} width="24" height="21" fill={tones[(row + col) % 3]} opacity="0.6" />
        ))
      )}
      {/* buildings/streets outline over the mosaic */}
      <rect x="150" y="140" width="40" height="55" fill="none" stroke={dark} strokeWidth="3" />
      <rect x="210" y="120" width="35" height="75" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M100 220 L310 220" stroke={dark} strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const ElDabkeLaDanzaDeLineaJordana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  return (
    <g>
      {[130, 180, 230, 280].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="140" r="14" fill={skin} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x - 14} 153 Q${x} 145 ${x + 14} 153 L${x + 10} 225 L${x - 10} 225 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
          {i % 2 === 0 ? (
            <path d={`M${x - 6} 220 Q${x - 20} 215 ${x - 22} 195`} fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
          ) : (
            <line x1={x - 6} y1="220" x2={x - 8} y2="245" stroke={skin} strokeWidth="8" strokeLinecap="round" />
          )}
          <line x1={x + 6} y1="220" x2={x + 8} y2="245" stroke={skin} strokeWidth="8" strokeLinecap="round" />
        </g>
      ))}
      {/* linked arms */}
      <path d="M144 165 L166 165 M194 165 L216 165 M244 165 L266 165" stroke={dark} strokeWidth="4" opacity="0.6" />
    </g>
  );
};

const LaReservaDeDanaYLaCabraMontesDeNubia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const rock = "#8A8272";
  return (
    <g>
      {/* rocky crag */}
      <path d="M85 245 L150 210 L200 240 L250 195 L320 230 L320 250 L85 250 Z" fill={rock} opacity="0.6" />
      {/* body */}
      <path d="M175 205 Q170 180 200 175 Q235 170 250 190 Q258 198 250 205 L245 220 L180 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head */}
      <circle cx="185" cy="188" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* backward-curving horns */}
      <path d="M180 176 Q170 155 185 135 Q195 122 190 108" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M192 176 Q182 155 197 135 Q207 122 202 108" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* legs balancing on the crag */}
      {[195, 215, 230, 240].map((x, i) => (
        <line key={x} x1={x} y1="218" x2={x + (i % 2 === 0 ? -4 : 4)} y2="238" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      ))}
    </g>
  );
};

const LosCircasianosQueAyudaronAFundarAmanModerna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const fur = "#3E2E24";
  return (
    <g>
      {/* fur hat */}
      <ellipse cx="205" cy="112" rx="24" ry="14" fill={fur} stroke={shade(fur, 0.3)} strokeWidth="2" />
      {/* head */}
      <circle cx="205" cy="130" r="17" fill={skin} stroke={dark} strokeWidth="2.5" />
      {/* torso/coat */}
      <path d="M180 148 Q205 138 230 148 L238 230 L172 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* bandolier cartridge belt across chest */}
      <path d="M185 155 L225 200" stroke="#C9A227" strokeWidth="4" opacity="0.85" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={188 + i * 11} y={160 + i * 11} width="6" height="10" fill="#C9A227" transform={`rotate(35 ${191 + i * 11} ${165 + i * 11})`} />
      ))}
      {/* ceremonial dagger at belt */}
      <path d="M195 200 L205 175 L215 200 L210 225 L200 225 Z" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
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
  "el-zarb-la-coccion-beduina-bajo-tierra": { component: ElZarbLaCoccionBeduinaBajoTierra },
  "el-mapa-de-mosaico-de-madaba": { component: ElMapaDeMosaicoDeMadaba },
  "el-dabke-la-danza-de-linea-jordana": { component: ElDabkeLaDanzaDeLineaJordana },
  "la-reserva-de-dana-y-la-cabra-montes-de-nubia": { component: LaReservaDeDanaYLaCabraMontesDeNubia },
  "los-circasianos-que-ayudaron-a-fundar-aman-moderna": { component: LosCircasianosQueAyudaronAFundarAmanModerna },
};
