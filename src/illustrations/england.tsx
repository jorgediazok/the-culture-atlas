import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const StonehengeElCirculoDePiedrasMilenario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[110, 155, 255, 300].map((x) => (
        <rect key={x} x={x - 14} y="140" width="28" height="110" fill="#8B8378" stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="123" y="120" width="55" height="20" fill="#7A756A" stroke={dark} strokeWidth="2.5" />
      <rect x="232" y="120" width="55" height="20" fill="#7A756A" stroke={dark} strokeWidth="2.5" />
      <rect x="180" y="160" width="26" height="90" fill="#9E9A92" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="248" rx="120" ry="10" fill="#7A8B5A" opacity="0.4" />
    </g>
  );
};

const ElTeDeLaTardeUnRitualNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 220 Q110 195 135 195 L165 195 Q190 195 190 220 L190 235 L110 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="150" cy="195" rx="40" ry="10" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <path d="M190 205 L215 200" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="270" cy="235" rx="45" ry="10" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="270" cy="195" rx="35" ry="8" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="270" cy="160" rx="25" ry="7" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <line x1="270" y1="235" x2="270" y2="153" stroke={dark} strokeWidth="3" />
      {[[255, 225], [285, 225], [260, 188], [280, 150]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#B8860B" opacity="0.7" />
      ))}
    </g>
  );
};

const ElTubeElMetroMasAntiguoDelMundo: IllustrationComponent = () => (
  <g>
    <rect x="110" y="150" width="200" height="100" fill="#3E3A2F" stroke="#1A1A1A" strokeWidth="3" />
    <path d="M140 250 L140 200 L270 200 L270 250 Z" fill="#1A1A1A" />
    <circle cx="205" cy="140" r="45" fill="none" stroke="#CE1124" strokeWidth="12" />
    <rect x="150" y="132" width="110" height="16" fill="#1B4F91" />
  </g>
);

const ShakespeareYElGlobeTheatre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="115" ry="50" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="200" rx="80" ry="35" fill="none" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="200" rx="45" ry="20" fill="#3D8FB0" opacity="0.4" />
      <path d="M90 200 A115 50 0 0 1 320 200" fill="none" stroke="#8B5A2B" strokeWidth="8" />
      <rect x="195" y="145" width="20" height="15" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElFutbolModernoNacioAqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="150" cy="190" r="45" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[[150, 155], [120, 175], [180, 175], [130, 215], [170, 215]].map(([x, y], i) => (
        <polygon
          key={`${x}-${y}`}
          points={`${x},${y - 14} ${x + 13},${y - 4} ${x + 8},${y + 12} ${x - 8},${y + 12} ${x - 13},${y - 4}`}
          fill={i % 2 === 0 ? dark : accentColor}
          opacity="0.85"
        />
      ))}
      <rect x="230" y="160" width="70" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[180, 200, 220].map((y) => (
        <line key={y} x1="242" y1={y} x2="288" y2={y} stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
    </g>
  );
};

const FishAndChipsElPlatoQueUneAlPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 230 L300 230 L280 180 L140 180 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="175" cy="195" rx="45" ry="26" fill="#D4941E" stroke={dark} strokeWidth="3" />
      {[220, 240, 260, 280].map((x) => (
        <rect key={x} x={x} y="190" width="12" height="38" rx="3" fill={accentColor} stroke={dark} strokeWidth="1.8" />
      ))}
    </g>
  );
};

const ElCambioDeGuardiaEnBuckingham: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="180" y="185" width="50" height="65" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="150" width="40" height="45" fill="#1A1A1A" stroke="#000000" strokeWidth="2.5" />
      <path d="M185 150 Q205 130 225 150" fill="#1A1A1A" />
      <line x1="200" y1="200" x2="200" y2="245" stroke="#F5F0E6" strokeWidth="4" />
      <rect x="170" y="120" width="70" height="12" fill="#D4AF37" opacity="0.6" />
    </g>
  );
};

const BigBenLaCampanaMasFamosaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="140" width="60" height="110" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="170,140 205,95 240,140" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="125" r="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="125" x2="205" y2="115" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="125" x2="212" y2="130" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="95" x2="205" y2="80" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const LaCulturaDeHacerFila: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[130, 170, 210, 250, 290].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="190" r="12" fill={skin} />
          <path d={`M${x - 12} 205 Q${x} 195 ${x + 12} 205 L${x + 9} 250 L${x - 9} 250 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <rect x="100" y="250" width="220" height="8" fill={dark} opacity="0.3" />
    </g>
  );
};

const AbbeyRoadYElCruceMasFotografiado: IllustrationComponent = () => (
  <g>
    <rect x="90" y="190" width="230" height="45" fill="#3A3A3A" />
    {[100, 135, 170, 205, 240, 275, 305].map((x) => (
      <rect key={x} x={x} y="190" width="20" height="45" fill="#F5F0E6" />
    ))}
    {[130, 170, 210, 250].map((x, i) => (
      <g key={x}>
        <circle cx={x} cy="160" r="11" fill="#C68642" />
        <rect x={x - 10} y="171" width="20" height="18" fill={i % 2 === 0 ? "#1A1A1A" : "#37474F"} />
      </g>
    ))}
  </g>
);

export const englandIllustrations: Record<string, IllustrationDefinition> = {
  "stonehenge-el-circulo-de-piedras-milenario": { component: StonehengeElCirculoDePiedrasMilenario },
  "el-te-de-la-tarde-un-ritual-nacional": { component: ElTeDeLaTardeUnRitualNacional },
  "el-tube-el-metro-mas-antiguo-del-mundo": { component: ElTubeElMetroMasAntiguoDelMundo },
  "shakespeare-y-el-globe-theatre": { component: ShakespeareYElGlobeTheatre },
  "el-futbol-moderno-nacio-aqui": { component: ElFutbolModernoNacioAqui },
  "fish-and-chips-el-plato-que-une-al-pais": { component: FishAndChipsElPlatoQueUneAlPais },
  "el-cambio-de-guardia-en-buckingham": { component: ElCambioDeGuardiaEnBuckingham },
  "big-ben-la-campana-mas-famosa-del-mundo": { component: BigBenLaCampanaMasFamosaDelMundo },
  "la-cultura-de-hacer-fila": { component: LaCulturaDeHacerFila },
  "abbey-road-y-el-cruce-mas-fotografiado": { component: AbbeyRoadYElCruceMasFotografiado },
};
