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

const WimbledonFresasCremaYCesped: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* racket */}
      <ellipse cx="165" cy="150" rx="38" ry="48" fill="none" stroke="#F5F0E6" strokeWidth="6" />
      {[-20, -10, 0, 10, 20].map((dx) => (
        <line key={dx} x1={165 + dx} y1="105" x2={165 + dx} y2="195" stroke="#F5F0E6" strokeWidth="1.5" opacity="0.6" />
      ))}
      <line x1="165" y1="195" x2="165" y2="245" stroke="#8B5A2B" strokeWidth="8" />
      {/* bowl of strawberries and cream */}
      <ellipse cx="270" cy="225" rx="35" ry="14" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="270" cy="215" rx="28" ry="9" fill="#FBFBFB" />
      {[[255, 208], [270, 203], [285, 208]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} L${x + 5} ${y + 10} L${x - 5} ${y + 10} Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElFullEnglishElDesayunoCompleto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* plate */}
      <ellipse cx="205" cy="205" rx="95" ry="35" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {/* fried egg */}
      <ellipse cx="160" cy="195" rx="22" ry="16" fill="#FBFBFB" stroke={dark} strokeWidth="1.5" />
      <circle cx="160" cy="195" r="8" fill="#F4A300" />
      {/* sausage */}
      <ellipse cx="225" cy="190" rx="24" ry="10" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" transform="rotate(-10 225 190)" />
      {/* bacon */}
      <path d="M155 210 Q170 200 185 210 Q170 218 155 210" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {/* beans */}
      <ellipse cx="265" cy="212" rx="26" ry="14" fill="#C1272D" opacity="0.85" />
      {[[255, 208], [270, 214], [260, 218]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2.5" fill="#8B5A2B" />
      ))}
    </g>
  );
};

const GuyFawkesYLaNocheDeLasHogueras: IllustrationComponent = () => {
  const flame = "#E64A19";
  const flameLight = "#F9A825";
  return (
    <g>
      {/* bonfire */}
      <path d="M150 240 Q160 195 200 175 Q240 195 250 240 Z" fill={flame} opacity="0.9" />
      <path d="M175 240 Q185 205 200 190 Q215 205 225 240 Z" fill={flameLight} opacity="0.85" />
      {/* effigy on top */}
      <circle cx="200" cy="165" r="10" fill="#D4C098" stroke={shade("#D4C098", 0.3)} strokeWidth="1.5" />
      <rect x="192" y="173" width="16" height="20" fill="#8B7355" />
      {/* fireworks */}
      {[[110, 100], [300, 90], [260, 130]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="#D4AF37" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line key={deg} x1={x} y1={y} x2={x} y2={y - 16} stroke="#D4AF37" strokeWidth="2" transform={`rotate(${deg} ${x} ${y})`} opacity="0.7" />
          ))}
        </g>
      ))}
    </g>
  );
};

const ElCarnavalDeNottingHill: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* feathered headdress */}
      {[[160, 100, -25], [180, 85, -10], [200, 78, 0], [220, 85, 10], [240, 100, 25]].map(([x, y, rot], i) => (
        <ellipse key={i} cx={x} cy={y} rx="10" ry="35" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.4)} stroke={dark} strokeWidth="1.5" transform={`rotate(${rot} ${x} ${y})`} />
      ))}
      <ellipse cx="200" cy="140" rx="30" ry="18" fill="#D4AF37" stroke={dark} strokeWidth="2" />
      {/* speaker */}
      <rect x="140" y="190" width="60" height="50" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
      <circle cx="170" cy="215" r="18" fill="#3A3A3A" stroke={dark} strokeWidth="2" />
      <circle cx="170" cy="215" r="8" fill="#1A1A1A" />
    </g>
  );
};

const ElAndenNueveYTresCuartosYKingsCross: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const brick = "#8B4A3A";
  return (
    <g>
      {/* brick wall */}
      <rect x="90" y="110" width="230" height="130" fill={brick} stroke={shade(brick, 0.35)} strokeWidth="2" />
      {[130, 155, 180, 205].map((y) => (
        <line key={y} x1="90" y1={y} x2="320" y2={y} stroke={shade(brick, 0.35)} strokeWidth="1" opacity="0.5" />
      ))}
      {/* luggage cart half-vanished, back half faded */}
      <rect x="230" y="180" width="60" height="14" fill={accentColor} stroke={dark} strokeWidth="2" opacity="0.4" />
      <rect x="150" y="180" width="80" height="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="165" cy="205" r="10" fill="#1A1A1A" />
      <circle cx="215" cy="205" r="10" fill="#1A1A1A" />
      <rect x="160" y="150" width="35" height="30" fill="#5C3A21" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaCabinaTelefonicaRojaK2: IllustrationComponent = () => {
  const red = "#C8102E";
  const dark = shade(red, 0.35);
  return (
    <g>
      <rect x="160" y="130" width="80" height="110" fill={red} stroke={dark} strokeWidth="3" />
      <path d="M160 130 Q200 105 240 130 Z" fill={dark} />
      {[170, 195, 220].map((x) => (
        <rect key={x} x={x} y="145" width="16" height="40" fill="#B0DDE8" stroke={dark} strokeWidth="1.5" opacity="0.7" />
      ))}
      <rect x="185" y="200" width="30" height="30" fill={red} stroke={dark} strokeWidth="1.5" />
      <text x="188" y="222" fontSize="18" fontWeight="700" fill="#F5F0E6">
        T
      </text>
    </g>
  );
};

const ElSwanUppingElConteoRealDeCisnes: IllustrationComponent = () => {
  const white = "#FBFBFB";
  const dark = shade(white, 0.35);
  const boat = "#8B5A2B";
  return (
    <g>
      {/* swan */}
      <ellipse cx="150" cy="190" rx="30" ry="20" fill={white} stroke={dark} strokeWidth="2" />
      <path d="M150 175 Q170 155 190 160 Q180 165 175 175 Q170 165 155 168" fill={white} stroke={dark} strokeWidth="2" />
      <circle cx="188" cy="162" r="3" fill="#1A1A1A" />
      <path d="M191 162 L200 160 L191 166 Z" fill="#F4A300" />
      {/* rowboat with flags */}
      <path d="M220 220 L300 220 L285 240 L235 240 Z" fill={boat} stroke={shade(boat, 0.3)} strokeWidth="2.5" />
      <line x1="260" y1="220" x2="260" y2="190" stroke={shade(boat, 0.3)} strokeWidth="2" />
      <path d="M260 190 L280 195 L260 200 Z" fill="#C1272D" />
    </g>
  );
};

const ElPubYLaCulturaDeLaCervezaReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* pint of beer */}
      <path d="M170 150 L170 235 Q170 245 185 245 L205 245 Q220 245 220 235 L220 150 Z" fill={accentColor} opacity="0.85" stroke={dark} strokeWidth="3" />
      <ellipse cx="195" cy="150" rx="25" ry="8" fill="#F5F0E6" />
      <path d="M220 165 Q240 165 240 185 Q240 205 220 200" fill="none" stroke={dark} strokeWidth="3" />
      {/* hanging pub sign */}
      <line x1="270" y1="100" x2="270" y2="130" stroke="#5C3A21" strokeWidth="3" />
      <rect x="245" y="130" width="50" height="35" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <line x1="255" y1="105" x2="285" y2="105" stroke="#5C3A21" strokeWidth="3" />
    </g>
  );
};

const SherlockHolmesYEl221BDeBakerStreet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* map background */}
      <rect x="120" y="120" width="180" height="120" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      <path d="M140 160 Q200 140 270 170 M150 210 Q210 190 280 220" stroke={dark} strokeWidth="1.5" opacity="0.4" fill="none" />
      {/* curved pipe */}
      <path d="M170 200 Q170 175 195 175 Q220 175 225 195 Q228 205 218 208" fill="none" stroke="#5C3A21" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="225" cy="197" rx="12" ry="9" fill="#5C3A21" />
      {/* magnifying glass */}
      <circle cx="255" cy="150" r="22" fill="none" stroke={dark} strokeWidth="4" />
      <line x1="270" y1="167" x2="285" y2="182" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const LaObsesionInglesaConElClima: IllustrationComponent = () => {
  const cloud = "#8A8F98";
  const rain = "#4A90A4";
  return (
    <g>
      {/* gray cloud */}
      <ellipse cx="230" cy="130" rx="45" ry="24" fill={cloud} />
      <ellipse cx="200" cy="140" rx="32" ry="18" fill={cloud} />
      {[195, 215, 235, 255].map((x) => (
        <line key={x} x1={x} y1="160" x2={x - 6} y2="180" stroke={rain} strokeWidth="3" strokeLinecap="round" />
      ))}
      {/* open umbrella */}
      <path d="M120 210 Q120 165 165 165 Q210 165 210 210 Z" fill="#37474F" stroke={shade("#37474F", 0.3)} strokeWidth="2.5" />
      {[145, 165, 185].map((x) => (
        <line key={x} x1={x} y1="210" x2={x} y2="167" stroke={shade("#37474F", 0.3)} strokeWidth="1" opacity="0.5" />
      ))}
      <line x1="165" y1="210" x2="165" y2="245" stroke="#5C3A21" strokeWidth="4" />
    </g>
  );
};

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
  "wimbledon-fresas-crema-y-cesped": { component: WimbledonFresasCremaYCesped },
  "el-full-english-el-desayuno-completo": { component: ElFullEnglishElDesayunoCompleto },
  "guy-fawkes-y-la-noche-de-las-hogueras": { component: GuyFawkesYLaNocheDeLasHogueras },
  "el-carnaval-de-notting-hill": { component: ElCarnavalDeNottingHill },
  "el-anden-nueve-y-tres-cuartos-y-kings-cross": { component: ElAndenNueveYTresCuartosYKingsCross },
  "la-cabina-telefonica-roja-k2": { component: LaCabinaTelefonicaRojaK2 },
  "el-swan-upping-el-conteo-real-de-cisnes": { component: ElSwanUppingElConteoRealDeCisnes },
  "el-pub-y-la-cultura-de-la-cerveza-real": { component: ElPubYLaCulturaDeLaCervezaReal },
  "sherlock-holmes-y-el-221b-de-baker-street": { component: SherlockHolmesYEl221BDeBakerStreet },
  "la-obsesion-inglesa-con-el-clima": { component: LaObsesionInglesaConElClima },
};
