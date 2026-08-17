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
};
