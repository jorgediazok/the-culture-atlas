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
};
