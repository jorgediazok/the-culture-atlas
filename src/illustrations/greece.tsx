import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AtenasLaCunaDeLaDemocracia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[110, 320].map((x) => (
        <rect key={x} x={x - 10} y="140" width="20" height="110" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="90" y="130" width="230" height="12" fill="#E8DCC0" stroke={dark} strokeWidth="2" />
      {[170, 210, 250].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="180" r="12" fill={skin} />
          <path d={`M${x - 14} 195 Q${x} 185 ${x + 14} 195 L${x + 10} 240 L${x - 10} 240 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <line x1={x} y1="192" x2={x} y2="170" stroke={dark} strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const ElPartenonElTemploQueDominaLaAcropolis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="220" width="220" height="14" fill="#B8A484" />
      <polygon points="100,190 205,155 320,190" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <rect x="100" y="190" width="220" height="10" fill="#B8A484" stroke={dark} strokeWidth="1.5" />
      {[115, 145, 175, 205, 235, 265, 295].map((x) => (
        <rect key={x} x={x - 8} y="200" width="16" height="20" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const LosJuegosOlimpicosNacieronEnOlimpia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#B8A484" opacity="0.5" />
      <circle cx="180" cy="150" r="14" fill={skin} />
      <path d="M168 168 Q180 160 192 168 L200 220 L160 230 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="200" y1="185" x2="235" y2="165" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <path d="M235 165 Q245 150 240 135" stroke="#F4A300" strokeWidth="6" fill="none" strokeLinecap="round" />
      <line x1="160" y1="200" x2="130" y2="230" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const MeteoraLosMonasteriosSobreColumnasDeRoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M160 250 L150 130 L260 130 L250 250 Z" fill="#8B7355" stroke={dark} strokeWidth="3" />
      <rect x="175" y="95" width="60" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="170,95 205,72 240,95" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M90 250 L160 250 M250 250 L320 250" stroke={dark} strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const SantoriniNacidaDeUnaErupcionVolcanica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 190 Q205 160 320 190 L320 250 Z" fill="#8B7355" opacity="0.5" />
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <rect x={x - 18} y="165" width="36" height="35" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
          <circle cx={x} cy="160" r="16" fill={i % 2 === 0 ? accentColor : "#1B5E7A"} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#0D5EAF" opacity="0.5" />
    </g>
  );
};

const ElPalacioDeCnososYElMitoDelLaberinto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 130 L200 130 L200 190 L320 190 L320 250 Z" fill="none" stroke={dark} strokeWidth="6" />
      <rect x="150" y="180" width="35" height="70" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M150 180 Q145 155 160 145 Q175 135 185 145 Q195 155 185 180 Z" fill="#4A2C2A" stroke={dark} strokeWidth="2.5" />
      <path d="M155 143 Q150 128 155 118 M180 143 Q185 128 180 118" stroke="#4A2C2A" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="163" cy="150" r="3" fill="#1A1A1A" />
    </g>
  );
};

const ElGriegoUnoDeLosIdiomasVivosMasAntiguos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 130 Q110 250 130 250 L130 130 Z" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <path d="M130 130 L200 130 L200 250 L130 250 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <text x="140" y="205" fontSize="46" fontWeight="700" fill={accentColor}>
        α
      </text>
      <path d="M215 140 Q260 122 310 140 L310 235 Q260 218 215 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <text x="240" y="200" fontSize="34" fontWeight="700" fill={dark}>
        β
      </text>
    </g>
  );
};

const LaBanderaConNueveFranjasQueCuentanUnaFrase: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="90" y={90 + i * 32} width="230" height="16" fill={accentColor} />
      ))}
      <rect x="90" y="90" width="90" height="80" fill={accentColor} />
      <rect x="120" y="90" width="30" height="80" fill="#F5F0E6" />
      <rect x="90" y="118" width="90" height="24" fill="#F5F0E6" />
    </g>
  );
};

const ElAlfabetoQueLeDioLetrasAMedioMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="130" width="220" height="120" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <text x="125" y="220" fontSize="60" fontWeight="700" fill={accentColor}>
        Α
      </text>
      <text x="195" y="220" fontSize="60" fontWeight="700" fill={dark}>
        A
      </text>
      <text x="255" y="220" fontSize="60" fontWeight="700" fill={accentColor}>
        А
      </text>
    </g>
  );
};

const ElCafeGriegoQueSeLeeEnLosPosos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="215" rx="80" ry="16" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M160 210 Q160 160 205 160 Q250 160 250 210 Z" fill="#5C3A21" stroke={dark} strokeWidth="3" />
      <path d="M180 195 Q205 205 225 190" stroke="#3E2A1A" strokeWidth="3" fill="none" opacity="0.6" />
      <path d="M250 190 L280 180" stroke="#5C3A21" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="205" cy="140" r="6" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const ElMonteOlimpoYLosDoceDioses: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* mountain */}
      <path d="M90 245 L170 110 L230 200 L260 150 L320 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 145 L170 110 L190 145 Z" fill="#F5F0E6" opacity="0.7" />
      {/* clouds */}
      <ellipse cx="250" cy="130" rx="24" ry="10" fill="#F5F0E6" opacity="0.6" />
      <ellipse cx="270" cy="120" rx="18" ry="9" fill="#F5F0E6" opacity="0.6" />
      {/* golden lightning bolt */}
      <path d="M210 95 L192 135 L206 135 L188 175 L222 128 L206 128 Z" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="2" />
    </g>
  );
};

const ElOraculoDeDelfos: IllustrationComponent = () => {
  const gold = "#D4AF37";
  const rock = "#8B7355";
  const vapor = "#B0BEC5";
  return (
    <g>
      {/* rocky crack */}
      <path d="M90 240 Q205 215 320 240 L320 250 L90 250 Z" fill={rock} />
      <path d="M180 240 Q200 220 220 240" fill="none" stroke={shade(rock, 0.4)} strokeWidth="3" />
      {/* tripod */}
      <path d="M170 235 L200 150 L230 235 M200 150 L200 235 M180 200 L220 200" stroke={gold} strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="200" cy="148" rx="22" ry="8" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="2" />
      {/* vapor rising */}
      <path d="M195 220 Q185 190 198 165 Q205 190 195 220" fill="none" stroke={vapor} strokeWidth="4" opacity="0.6" />
      <path d="M210 225 Q220 195 208 170" fill="none" stroke={vapor} strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const AlejandroMagnoYSuImperio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* war helmet with crest */}
      <path d="M155 190 Q150 145 200 140 Q250 145 245 190 L235 195 L165 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M175 195 L180 220 L165 220 L160 195 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M225 195 L230 220 L245 220 L240 195 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M200 140 Q195 110 200 90 Q205 110 200 140" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      {/* map with eastward route */}
      <rect x="255" y="175" width="55" height="45" fill="#E8DCC0" stroke={dark} strokeWidth="2" />
      <path d="M262 210 Q280 195 300 182" stroke="#8B1A2B" strokeWidth="2.5" fill="none" strokeDasharray="4 3" />
      <circle cx="300" cy="182" r="3" fill="#8B1A2B" />
    </g>
  );
};

const LaIliadaYLaOdiseaDeHomero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* wooden horse */}
      <path d="M120 220 L120 185 Q120 170 140 170 L165 170 Q180 170 185 155 L200 140 L210 155 L195 170 Q210 175 208 195 L205 220 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      <rect x="130" y="215" width="8" height="20" fill={wood} />
      <rect x="185" y="215" width="8" height="20" fill={wood} />
      {/* ship with unfurled sail */}
      <path d="M230 235 L320 235 L305 250 L245 250 Z" fill={dark} />
      <line x1="270" y1="235" x2="270" y2="150" stroke={dark} strokeWidth="4" />
      <path d="M270 155 Q305 165 300 210 L270 210 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LasIslasGriegas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#0A7EA4";
  return (
    <g>
      <rect x="90" y="120" width="230" height="130" fill={water} opacity="0.3" />
      {[[130, 210, 30], [200, 225, 45], [270, 205, 26]].map(([x, y, w], i) => (
        <ellipse key={i} cx={x as number} cy={y as number} rx={w as number} ry={(w as number) * 0.4} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      {/* white house dot on middle island */}
      <rect x="192" y="205" width="16" height="14" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaPascuaOrtodoxaGriega: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* tall lit candle */}
      <rect x="255" y="150" width="16" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <path d="M263 150 Q257 132 263 120 Q269 132 263 150 Z" fill="#F4A300" />
      {/* red eggs */}
      {[[140, 220], [175, 200], [200, 225]].map(([x, y], i) => (
        <ellipse key={i} cx={x as number} cy={y as number} rx="18" ry="24" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
    </g>
  );
};

const ElOuzoYSuEfectoLechoso: IllustrationComponent = () => {
  const glass = "#B0BEC5";
  const milky = "#F5F0E6";
  return (
    <g>
      {/* glass with milky liquid */}
      <path d="M170 150 L170 220 Q170 235 190 235 L210 235 Q230 235 230 220 L230 150 Z" fill="none" stroke={glass} strokeWidth="3" />
      <path d="M175 190 L175 220 Q175 230 190 230 L210 230 Q225 230 225 220 L225 190 Z" fill={milky} opacity="0.85" />
      {/* bottle beside it */}
      <path d="M260 130 L260 150 Q260 158 268 162 L268 225 L292 225 L292 162 Q300 158 300 150 L300 130 Z" fill={glass} opacity="0.6" stroke={shade(glass, 0.4)} strokeWidth="2" />
      <rect x="266" y="118" width="28" height="14" fill={shade(glass, 0.4)} />
    </g>
  );
};

const LaFetaYSuDenominacionProtegida: IllustrationComponent = () => {
  const cheese = "#FBFBF0";
  const dark = shade(cheese, 0.35);
  return (
    <g>
      {/* plate */}
      <ellipse cx="200" cy="225" rx="90" ry="18" fill="#E8DCC0" stroke={shade("#E8DCC0", 0.3)} strokeWidth="2.5" />
      {/* crumbly cheese block */}
      <path d="M145 220 L145 165 L255 160 L255 210 Z" fill={cheese} stroke={dark} strokeWidth="2.5" />
      <circle cx="165" cy="185" r="4" fill={dark} opacity="0.4" />
      <circle cx="195" cy="195" r="3" fill={dark} opacity="0.4" />
      <circle cx="225" cy="180" r="4" fill={dark} opacity="0.4" />
      <circle cx="210" cy="205" r="3" fill={dark} opacity="0.4" />
      {/* crumbs beside it */}
      <rect x="270" y="210" width="10" height="10" fill={cheese} stroke={dark} strokeWidth="1.5" />
      <rect x="285" y="200" width="8" height="8" fill={cheese} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElMatiElAmuletoDelOjoGriego: IllustrationComponent = () => {
  const blue = "#1565C0";
  const darkBlue = shade(blue, 0.4);
  return (
    <g>
      <line x1="200" y1="100" x2="200" y2="150" stroke="#8B8378" strokeWidth="2" />
      <circle cx="200" cy="185" r="50" fill={blue} stroke={darkBlue} strokeWidth="3" />
      <circle cx="200" cy="185" r="34" fill="#F5F0E6" />
      <circle cx="200" cy="185" r="20" fill={darkBlue} />
      <circle cx="200" cy="185" r="9" fill="#F5F0E6" />
    </g>
  );
};

const LaNavieraGriegaYAristotelesOnassis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* hull */}
      <path d="M110 220 L290 220 L270 245 L130 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="130" y="195" width="140" height="25" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      {/* cargo containers */}
      {[145, 175, 205, 235].map((x, i) => (
        <rect key={x} x={x} y="175" width="24" height="20" fill={i % 2 === 0 ? "#C1272D" : "#F4A300"} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* smokestack with blue cross */}
      <rect x="250" y="140" width="20" height="35" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <line x1="256" y1="150" x2="264" y2="150" stroke="#0D3B66" strokeWidth="3" />
      <line x1="260" y1="146" x2="260" y2="154" stroke="#0D3B66" strokeWidth="3" />
    </g>
  );
};

export const greeceIllustrations: Record<string, IllustrationDefinition> = {
  "atenas-la-cuna-de-la-democracia": { component: AtenasLaCunaDeLaDemocracia },
  "el-partenon-el-templo-que-domina-la-acropolis": { component: ElPartenonElTemploQueDominaLaAcropolis },
  "los-juegos-olimpicos-nacieron-en-olimpia": { component: LosJuegosOlimpicosNacieronEnOlimpia },
  "meteora-los-monasterios-sobre-columnas-de-roca": { component: MeteoraLosMonasteriosSobreColumnasDeRoca },
  "santorini-nacida-de-una-erupcion-volcanica": { component: SantoriniNacidaDeUnaErupcionVolcanica },
  "el-palacio-de-cnosos-y-el-mito-del-laberinto": { component: ElPalacioDeCnososYElMitoDelLaberinto },
  "el-griego-uno-de-los-idiomas-vivos-mas-antiguos": { component: ElGriegoUnoDeLosIdiomasVivosMasAntiguos },
  "la-bandera-con-nueve-franjas-que-cuentan-una-frase": { component: LaBanderaConNueveFranjasQueCuentanUnaFrase },
  "el-alfabeto-que-le-dio-letras-a-medio-mundo": { component: ElAlfabetoQueLeDioLetrasAMedioMundo },
  "el-cafe-griego-que-se-lee-en-los-posos": { component: ElCafeGriegoQueSeLeeEnLosPosos },
  "el-monte-olimpo-y-los-doce-dioses": { component: ElMonteOlimpoYLosDoceDioses },
  "el-oraculo-de-delfos": { component: ElOraculoDeDelfos },
  "alejandro-magno-y-su-imperio": { component: AlejandroMagnoYSuImperio },
  "la-iliada-y-la-odisea-de-homero": { component: LaIliadaYLaOdiseaDeHomero },
  "las-islas-griegas": { component: LasIslasGriegas },
  "la-pascua-ortodoxa-griega": { component: LaPascuaOrtodoxaGriega },
  "el-ouzo-y-su-efecto-lechoso": { component: ElOuzoYSuEfectoLechoso },
  "la-feta-y-su-denominacion-protegida": { component: LaFetaYSuDenominacionProtegida },
  "el-mati-el-amuleto-del-ojo-griego": { component: ElMatiElAmuletoDelOjoGriego },
  "la-naviera-griega-y-aristoteles-onassis": { component: LaNavieraGriegaYAristotelesOnassis },
};
