import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const EstambulLaUnicaCiudadEnDosContinentes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="90" height="50" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="230" y="190" width="90" height="60" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <rect x="200" y="150" width="20" height="100" fill="#9E9A92" stroke={dark} strokeWidth="2" />
      <path d="M90 210 L320 200" stroke="#9E9A92" strokeWidth="6" />
      <path d="M200 150 L150 205 M220 150 L270 195" stroke="#9E9A92" strokeWidth="2" opacity="0.6" />
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#1B5E7A" opacity="0.5" />
    </g>
  );
};

const SantaSofiaMezquitaIglesiaMuseoYMezquitaOtraVez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="190" width="110" height="60" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M150 190 Q205 140 260 190 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="150" r="7" fill={dark} />
      {[110, 300].map((x) => (
        <rect key={x} x={x - 6} y="130" width="12" height="120" fill="#E8DCC0" stroke={dark} strokeWidth="2" />
      ))}
      {[110, 300].map((x) => (
        <polygon key={`t-${x}`} points={`${x - 6},130 ${x},110 ${x + 6},130`} fill={dark} opacity="0.6" />
      ))}
    </g>
  );
};

const CapadociaLasChimeneasDeHadasYLosGlobos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[130, 250, 90], [200, 250, 70], [265, 250, 100]].map(([x, y, h]) => (
        <path key={x} d={`M${x - 20} ${y} L${x} ${y - h} L${x + 20} ${y} Z`} fill="#D4C098" stroke={dark} strokeWidth="2.5" />
      ))}
      {[[140, 120], [220, 95], [290, 130]].map(([x, y], i) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="18" ry="22" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <line x1={x} y1={y + 22} x2={x} y2={y + 35} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const ElTeTurcoServidoEnVasosDeTulipan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 190 Q170 220 190 245 L220 245 Q240 220 230 190 Z" fill={accentColor} opacity="0.85" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="190" rx="26" ry="7" fill="#F5F0E6" opacity="0.6" />
      <rect x="255" y="180" width="45" height="40" fill="#8B7355" stroke={dark} strokeWidth="2.5" />
      <rect x="262" y="155" width="30" height="30" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <path d="M292 195 L310 190" stroke="#8B7355" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ElCafeTurcoQueSeLeeEnLaBorra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="170" cy="215" rx="55" ry="14" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <path d="M140 210 Q140 175 170 175 Q200 175 200 210 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <path d="M200 145 L200 165 Q225 165 235 150" fill="#B8703A" stroke={dark} strokeWidth="3" />
      <line x1="235" y1="150" x2="270" y2="135" stroke="#B8703A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="230" cy="220" r="9" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const ElNazarElOjoAzulContraElMalDeOjo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="165" r="70" fill="#1B4F91" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="165" r="48" fill="#F5F0E6" />
      <circle cx="205" cy="165" r="26" fill={accentColor} />
      <circle cx="205" cy="165" r="10" fill="#1A1A1A" />
      <line x1="205" y1="235" x2="205" y2="250" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const EfesoLaCiudadAntiguaMejorConservada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="150" width="220" height="100" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      {[120, 165, 210, 255, 295].map((x) => (
        <rect key={x} x={x - 8} y="160" width="16" height="80" fill={accentColor} opacity="0.5" stroke={dark} strokeWidth="1.5" />
      ))}
      {[145, 235].map((x) => (
        <rect key={`n-${x}`} x={x - 15} y="175" width="30" height="40" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      ))}
      <rect x="100" y="145" width="220" height="10" fill="#B8A484" />
    </g>
  );
};

const TroyaElSitioQueInspiroUnMitoFundacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="55" ry="20" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <path d="M170 210 Q160 180 175 160 Q185 145 200 150 L200 210 Z" fill="#A0693A" stroke={dark} strokeWidth="3" />
      <path d="M200 150 Q210 140 220 148 L215 165" fill="#A0693A" stroke={dark} strokeWidth="2.5" />
      <line x1="180" y1="150" x2="175" y2="130" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="190" y1="147" x2="188" y2="127" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      {[180, 230].map((x) => (
        <circle key={x} cx={x} cy="245" r="12" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const ElHamamElBanoTurcoTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 150 Q205 100 310 150 L310 175 Q205 130 100 175 Z" fill={accentColor} opacity="0.4" stroke={dark} strokeWidth="2" />
      {[150, 205, 260].map((x) => (
        <circle key={x} cx={x} cy="140" r="6" fill="#F5F0E6" opacity="0.8" />
      ))}
      <ellipse cx="205" cy="215" rx="75" ry="30" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="210" rx="50" ry="18" fill="#D4C098" opacity="0.7" />
    </g>
  );
};

const ElGranBazarUnoDeLosMercadosMasViejosDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q205 150 320 200 L320 250 L90 250 Z" fill="#8B7355" opacity="0.3" />
      <path d="M90 200 Q205 150 320 200" fill="none" stroke={dark} strokeWidth="4" />
      {[130, 175, 235, 280].map((x, i) => (
        <rect key={x} x={x - 18} y="210" width="36" height="35" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      {[150, 205, 260].map((x) => (
        <circle key={x} cx={x} cy="185" r="5" fill="#D4AF37" opacity="0.8" />
      ))}
    </g>
  );
};

const GobekliTepeCunaDeLaCivilizacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* ground */}
      <ellipse cx="205" cy="240" rx="120" ry="10" fill="#B8A484" opacity="0.4" />
      {/* T-shaped pillars in a circle */}
      {[[130, 200], [175, 175], [235, 175], [280, 200]].map(([x, y], i) => (
        <g key={i}>
          <rect x={(x as number) - 8} y={y as number} width="16" height="50" fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <rect x={(x as number) - 20} y={(y as number) - 12} width="40" height="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
        </g>
      ))}
      {/* carved animal relief on front pillar */}
      <path d="M195 220 Q200 210 210 215 Q205 222 195 220 Z" fill={dark} opacity="0.6" />
    </g>
  );
};

const LosDervichesGirovagosYRumi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#E8B989";
  return (
    <g>
      {/* wide white skirt, spinning */}
      <path d="M200 165 L120 235 Q200 255 280 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[150, 200, 250].map((x) => (
        <line key={x} x1="200" y1="170" x2={x} y2="230" stroke={dark} strokeWidth="1" opacity="0.3" />
      ))}
      {/* torso */}
      <rect x="188" y="145" width="24" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="130" r="13" fill={skin} />
      {/* tall conical hat */}
      <path d="M190 118 L200 85 L210 118 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {/* arms, one up one down */}
      <line x1="188" y1="150" x2="160" y2="110" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <line x1="212" y1="150" x2="235" y2="185" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const ElLokumODeliciaTurca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sugar = "#F5F0E6";
  return (
    <g>
      {/* tray */}
      <rect x="115" y="215" width="180" height="14" fill="#8B5A2B" />
      {/* stacked jellied cubes */}
      {[[140, 195], [175, 195], [210, 195], [245, 195]].map(([x, y], i) => (
        <rect key={i} x={x as number} y={y as number} width="28" height="28" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" opacity="0.9" />
      ))}
      {[[157, 165], [227, 165]].map(([x, y], i) => (
        <rect key={i} x={x as number} y={y as number} width="28" height="28" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="2" opacity="0.85" />
      ))}
      {/* powdered sugar dusting */}
      {[[150, 180], [200, 175], [250, 180], [175, 200], [225, 195]].map(([x, y], i) => (
        <circle key={i} cx={x as number} cy={y as number} r="2" fill={sugar} opacity="0.9" />
      ))}
    </g>
  );
};

const MustafaKemalAtaturkYLaRepublica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* felt hat */}
      <ellipse cx="200" cy="150" rx="45" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M170 150 Q170 118 200 118 Q230 118 230 150 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* open document */}
      <rect x="140" y="185" width="130" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[195, 210, 225].map((y) => (
        <line key={y} x1="155" y1={y} x2="255" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* pen */}
      <line x1="255" y1="235" x2="290" y2="180" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
      <path d="M290 180 L296 170 L282 176 Z" fill={dark} />
    </g>
  );
};

const PamukkaleElCastilloDeAlgodon: IllustrationComponent = () => {
  const white = "#F5F0E6";
  const turquoise = "#2FA5A0";
  return (
    <g>
      {[[90, 230, 240], [110, 205, 220], [130, 180, 200], [150, 155, 180]].map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x as number} y={y as number} width={w as number} height="20" fill={white} stroke={shade(white, 0.25)} strokeWidth="2" />
          <ellipse cx={(x as number) + (w as number) / 2} cy={(y as number) + 20} rx={(w as number) / 3} ry="6" fill={turquoise} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const LasAlfombrasYKilimsTurcos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const blue = "#1B4F91";
  return (
    <g>
      <rect x="100" y="140" width="210" height="110" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="115" y="155" width="180" height="80" fill="none" stroke={blue} strokeWidth="3" />
      {[[150, 175], [205, 175], [260, 175], [150, 215], [205, 215], [260, 215]].map(([x, y], i) => (
        <rect key={i} x={(x as number) - 10} y={(y as number) - 10} width="20" height="20" fill={i % 2 === 0 ? blue : "#F5F0E6"} opacity="0.85" transform={`rotate(45 ${x} ${y})`} />
      ))}
    </g>
  );
};

const ElYagliGuresLaLuchaConAceite: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const leather = "#8B5A2B";
  return (
    <g>
      {/* two wrestlers grappling */}
      <circle cx="165" cy="150" r="14" fill={skin} />
      <path d="M150 165 Q165 158 180 165 L175 220 Q165 230 155 220 Z" fill={skin} opacity="0.9" />
      <rect x="155" y="200" width="20" height="30" fill={leather} stroke={dark} strokeWidth="2" />
      <circle cx="245" cy="150" r="14" fill={skin} />
      <path d="M230 165 Q245 158 260 165 L255 220 Q245 230 235 220 Z" fill={skin} opacity="0.9" />
      <rect x="235" y="200" width="20" height="30" fill={leather} stroke={dark} strokeWidth="2" />
      {/* arms grappling */}
      <line x1="180" y1="180" x2="230" y2="185" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <line x1="230" y1="170" x2="180" y2="200" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      {/* oil sheen highlights */}
      <circle cx="170" cy="190" r="3" fill="#FBFBFB" opacity="0.6" />
      <circle cx="240" cy="195" r="3" fill="#FBFBFB" opacity="0.6" />
    </g>
  );
};

const ElTulipanExportacionOtomana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* tulips */}
      <path d="M150 220 L150 175 Q150 155 165 150 Q180 155 180 175 Q180 190 165 195 Q150 190 150 175" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="165" y1="195" x2="165" y2="235" stroke="#5B8C3E" strokeWidth="3" />
      <path d="M220 220 L220 175 Q220 155 235 150 Q250 155 250 175 Q250 190 235 195 Q220 190 220 175" fill="#F4D35E" stroke={shade("#F4D35E", 0.3)} strokeWidth="2.5" />
      <line x1="235" y1="195" x2="235" y2="235" stroke="#5B8C3E" strokeWidth="3" />
      {/* ottoman turban */}
      <ellipse cx="290" cy="200" rx="24" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M280 195 Q290 185 300 195" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const SESAME_SEED_POSITIONS: [number, number][] = [
  [255, 185], [250.8, 206], [238.9, 223.9], [221, 235.8],
  [200, 240], [179, 235.8], [161.1, 223.9], [149.2, 206],
  [145, 185], [149.2, 164], [161.1, 146.1], [179, 134.2],
  [200, 130], [221, 134.2], [238.9, 146.1], [250.8, 164],
];

const ElSimitElPanCallejeroDeEstambul: IllustrationComponent = ({ accentColor }) => {
  const sesame = "#F5E7A8";
  return (
    <g>
      {/* bread ring */}
      <circle cx="200" cy="185" r="55" fill="none" stroke={accentColor} strokeWidth="26" />
      {SESAME_SEED_POSITIONS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill={sesame} />
      ))}
    </g>
  );
};

const LasDiziElFenomenoGlobalDeLaTvTurca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#C1272D";
  return (
    <g>
      {/* television screen */}
      <rect x="130" y="140" width="150" height="100" rx="8" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      <rect x="145" y="153" width="120" height="74" fill={accentColor} opacity="0.85" />
      <rect x="185" y="245" width="40" height="12" fill={dark} />
      {/* floating hearts */}
      <path d="M295 130 Q290 118 280 122 Q280 132 295 145 Q310 132 310 122 Q300 118 295 130 Z" fill={red} />
      <path d="M100 175 Q96 167 89 169 Q89 176 100 185 Q111 176 111 169 Q104 167 100 175 Z" fill={red} opacity="0.7" />
    </g>
  );
};

export const turkeyIllustrations: Record<string, IllustrationDefinition> = {
  "estambul-la-unica-ciudad-en-dos-continentes": { component: EstambulLaUnicaCiudadEnDosContinentes },
  "santa-sofia-mezquita-iglesia-museo-y-mezquita-otra-vez": { component: SantaSofiaMezquitaIglesiaMuseoYMezquitaOtraVez },
  "capadocia-las-chimeneas-de-hadas-y-los-globos": { component: CapadociaLasChimeneasDeHadasYLosGlobos },
  "el-te-turco-servido-en-vasos-de-tulipan": { component: ElTeTurcoServidoEnVasosDeTulipan },
  "el-cafe-turco-que-se-lee-en-la-borra": { component: ElCafeTurcoQueSeLeeEnLaBorra },
  "el-nazar-el-ojo-azul-contra-el-mal-de-ojo": { component: ElNazarElOjoAzulContraElMalDeOjo },
  "efeso-la-ciudad-antigua-mejor-conservada": { component: EfesoLaCiudadAntiguaMejorConservada },
  "troya-el-sitio-que-inspiro-un-mito-fundacional": { component: TroyaElSitioQueInspiroUnMitoFundacional },
  "el-hamam-el-bano-turco-tradicional": { component: ElHamamElBanoTurcoTradicional },
  "el-gran-bazar-uno-de-los-mercados-mas-viejos-del-mundo": { component: ElGranBazarUnoDeLosMercadosMasViejosDelMundo },
  "gobekli-tepe-cuna-de-la-civilizacion": { component: GobekliTepeCunaDeLaCivilizacion },
  "los-derviches-girovagos-y-rumi": { component: LosDervichesGirovagosYRumi },
  "el-lokum-o-delicia-turca": { component: ElLokumODeliciaTurca },
  "mustafa-kemal-ataturk-y-la-republica": { component: MustafaKemalAtaturkYLaRepublica },
  "pamukkale-el-castillo-de-algodon": { component: PamukkaleElCastilloDeAlgodon },
  "las-alfombras-y-kilims-turcos": { component: LasAlfombrasYKilimsTurcos },
  "el-yagli-gures-la-lucha-con-aceite": { component: ElYagliGuresLaLuchaConAceite },
  "el-tulipan-exportacion-otomana": { component: ElTulipanExportacionOtomana },
  "el-simit-el-pan-callejero-de-estambul": { component: ElSimitElPanCallejeroDeEstambul },
  "las-dizi-el-fenomeno-global-de-la-tv-turca": { component: LasDiziElFenomenoGlobalDeLaTvTurca },
};
