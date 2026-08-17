import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaFelicidadNacionalBrutaDeButan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="205" y1="90" x2="205" y2="220" stroke="#5C3A21" strokeWidth="6" />
      <polygon points="180,220 230,220 215,235 195,235" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <line x1="130" y1="115" x2="280" y2="115" stroke="#8B5A2B" strokeWidth="5" />
      <line x1="130" y1="115" x2="120" y2="155" stroke={dark} strokeWidth="2.5" />
      <line x1="140" y1="115" x2="120" y2="155" stroke={dark} strokeWidth="2.5" />
      <path d="M120 155 Q100 145 120 155 Q140 145 120 155" fill="none" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="120" cy="160" rx="24" ry="8" fill="#B8A484" stroke={dark} strokeWidth="2" />
      <line x1="280" y1="115" x2="270" y2="150" stroke={dark} strokeWidth="2.5" />
      <line x1="290" y1="115" x2="270" y2="150" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="270" cy="155" rx="24" ry="8" fill="#B8A484" stroke={dark} strokeWidth="2" />
      <path d="M255 130 Q270 105 285 130 Q280 115 270 112 Q260 115 255 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ParoTaktsangElNidoDelTigre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,250 150,90 210,140 250,90 320,250" fill="#8B7355" stroke={dark} strokeWidth="3" />
      <polygon points="150,90 160,70 175,90" fill="#8B7355" opacity="0.8" />
      <rect x="175" y="150" width="70" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="170,150 210,125 250,150" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="170" width="16" height="25" fill={dark} opacity="0.5" />
      <rect x="215" y="170" width="16" height="25" fill={dark} opacity="0.5" />
      {[195, 210, 225].map((x) => (
        <path key={x} d={`M${x} 125 L${x + 8} 118 L${x + 16} 125`} fill="none" stroke="#B71C1C" strokeWidth="2" />
      ))}
    </g>
  );
};

const LosDzongFortalezasMonasterioDeButan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="130,240 150,150 260,150 280,240" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="150,150 205,125 260,150" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="180" y="90" width="50" height="65" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="176,90 205,68 234,90" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[150, 175, 205, 235, 260].map((x) => (
        <rect key={x} x={x - 6} y="170" width="12" height="16" fill={accentColor} opacity="0.6" />
      ))}
    </g>
  );
};

const ElGhoYLaKiraElUniformeNacionalDeButan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="160" cy="110" r="15" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M138 130 Q160 118 182 130 L175 220 L145 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="140" y1="165" x2="180" y2="165" stroke="#5C3A21" strokeWidth="6" />
      <circle cx="250" cy="105" r="15" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M226 125 Q250 115 274 125 L285 225 L215 225 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <circle cx="240" cy="115" r="4" fill="#B8860B" />
      <circle cx="260" cy="115" r="4" fill="#B8860B" />
    </g>
  );
};

const ElTiroConArcoDeporteNacionalDeButan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="150" cy="115" r="13" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M132 132 Q150 122 168 132 L162 225 L138 225 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M168 145 Q205 120 200 90" fill="none" stroke="#5C3A21" strokeWidth="4" strokeLinecap="round" />
      <path d="M200 90 Q195 130 205 175" fill="none" stroke="#8B5A2B" strokeWidth="2.5" />
      <line x1="168" y1="145" x2="285" y2="150" stroke="#3E2E24" strokeWidth="2" />
      <circle cx="290" cy="150" r="12" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="290" cy="150" r="5" fill="#B71C1C" />
    </g>
  );
};

const ElEmaDatshiPlatoNacionalDeButan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="215" rx="80" ry="22" fill="#8B7355" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="208" rx="65" ry="16" fill="#F5F0E6" opacity="0.85" />
      {[[165, 195, 12], [195, 185, 10], [225, 195, 12], [245, 205, 9]].map(([x, y, r], i) => (
        <path key={i} d={`M${x} ${y - r} Q${x + r * 1.3} ${y} ${x} ${y + r} Q${x - r * 1.3} ${y} ${x} ${y - r} Z`} fill={i % 2 === 0 ? accentColor : "#3F7D2E"} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const LosFalosPintadosProteccionDelLamaLoco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="90" width="190" height="140" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="95" y="80" width="220" height="14" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M180 195 Q170 150 190 115 Q205 100 220 115 Q240 150 230 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="195" rx="28" ry="9" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M170 120 Q160 115 155 130 M240 120 Q250 115 255 130" fill="none" stroke="#B71C1C" strokeWidth="3" strokeLinecap="round" />
      {[130, 280].map((x) => (
        <rect key={x} x={x - 8} y="105" width="16" height="16" fill="#3E5C40" opacity="0.7" />
      ))}
    </g>
  );
};

const ButanElUnicoPaisCarbonoNegativoDelPlaneta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const trees = [
    [130, 90], [160, 70], [195, 85], [230, 65], [265, 90], [285, 75],
  ];
  return (
    <g>
      <polygon points="90,240 320,240 320,250 90,250" fill="#3F7D2E" opacity="0.3" />
      {trees.map(([x, y]) => (
        <g key={x}>
          <polygon points={`${x},${y} ${x - 22},${240} ${x + 22},240`} fill="#2E6B4F" stroke={dark} strokeWidth="2" />
          <polygon points={`${x},${y + 20} ${x - 26},250 ${x + 26},250`} fill="#3F7D2E" stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <path d="M230 100 Q245 85 260 100 Q250 90 240 92 Q232 95 230 100 Z" fill="#B8B8B8" opacity="0.5" />
      <path d="M245 90 Q260 100 270 95" fill="none" stroke="#3F7D2E" strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const ElPunakhaDzongLaFortalezaMasBellaDeButan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 230 Q205 245 320 230 L320 245 Q205 258 90 245 Z" fill="#1B5E7A" opacity="0.5" />
      <polygon points="160,225 250,225 235,150 175,150" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="175,150 205,128 235,150" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="180" width="20" height="45" fill={dark} opacity="0.4" />
      <path d="M90 230 Q130 200 160 225" fill="none" stroke="#1B5E7A" strokeWidth="6" opacity="0.7" />
      <path d="M320 230 Q280 200 250 225" fill="none" stroke="#1B5E7A" strokeWidth="6" opacity="0.7" />
    </g>
  );
};

const ElKishutharaLaSedaTejidaMasFinaDeButan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#B8860B", "#3E5C40", "#B5495B"];
  return (
    <g transform="rotate(-4 205 165)">
      <rect x="115" y="95" width="180" height="140" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 6 }).map((__, col) => (
          <polygon
            key={`${row}-${col}`}
            points={`${130 + col * 28 + 14},${110 + row * 26} ${130 + col * 28 + 24},${110 + row * 26 + 13} ${130 + col * 28 + 14},${110 + row * 26 + 26} ${130 + col * 28 + 4},${110 + row * 26 + 13}`}
            fill={colors[(row + col) % colors.length]}
            opacity="0.85"
          />
        ))
      )}
    </g>
  );
};

export const bhutanIllustrations: Record<string, IllustrationDefinition> = {
  "la-felicidad-nacional-bruta-de-butan": { component: LaFelicidadNacionalBrutaDeButan },
  "paro-taktsang-el-nido-del-tigre": { component: ParoTaktsangElNidoDelTigre },
  "los-dzong-fortalezas-monasterio-de-butan": { component: LosDzongFortalezasMonasterioDeButan },
  "el-gho-y-la-kira-el-uniforme-nacional-de-butan": { component: ElGhoYLaKiraElUniformeNacionalDeButan },
  "el-tiro-con-arco-deporte-nacional-de-butan": { component: ElTiroConArcoDeporteNacionalDeButan },
  "el-ema-datshi-plato-nacional-de-butan": { component: ElEmaDatshiPlatoNacionalDeButan },
  "los-falos-pintados-proteccion-del-lama-loco": { component: LosFalosPintadosProteccionDelLamaLoco },
  "butan-el-unico-pais-carbono-negativo-del-planeta": { component: ButanElUnicoPaisCarbonoNegativoDelPlaneta },
  "el-punakha-dzong-la-fortaleza-mas-bella-de-butan": { component: ElPunakhaDzongLaFortalezaMasBellaDeButan },
  "el-kishuthara-la-seda-tejida-mas-fina-de-butan": { component: ElKishutharaLaSedaTejidaMasFinaDeButan },
};
