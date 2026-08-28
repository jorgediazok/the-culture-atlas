import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElMonstruoDelLagoNess: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1B2E22" opacity="0.5" />
      <path d="M90 250 L130 190 L170 220 L210 170 L320 250 Z" fill="#3E5C4A" opacity="0.6" />
      <path d="M180 220 Q190 170 210 130 Q220 110 240 115" fill="none" stroke={accentColor} strokeWidth="16" strokeLinecap="round" />
      <ellipse cx="245" cy="112" rx="14" ry="10" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="250" cy="108" r="2.5" fill="#1A1A1A" />
      <path d="M170 235 Q185 225 200 235" fill="none" stroke={accentColor} strokeWidth="10" opacity="0.7" />
    </g>
  );
};

const ElWhiskyEscocesSinLaE: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 180 Q145 155 175 150 Q205 145 200 175 Q225 185 215 210 L215 250 L155 250 L155 210 Q145 195 150 180 Z" fill="#B8860B" stroke={dark} strokeWidth="3" opacity="0.85" />
      <ellipse cx="270" cy="220" rx="30" ry="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M270 190 Q285 160 305 165" fill="none" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <rect x="245" y="185" width="10" height="30" fill="#F5F0E6" opacity="0.4" />
    </g>
  );
};

const ElTartanYLosClanesEscoceses: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="110" width="220" height="140" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[130, 175, 220, 265, 305].map((x) => (
        <rect key={x} x={x} y="110" width="10" height="140" fill="#F5F0E6" opacity="0.85" />
      ))}
      {[140, 180, 220].map((y) => (
        <rect key={y} x="100" y={y} width="220" height="8" fill="#1A1A1A" opacity="0.5" />
      ))}
      {[130, 220, 305].map((x) => (
        <rect key={`v-${x}`} x={x} y="110" width="6" height="140" fill="#1A1A1A" opacity="0.5" />
      ))}
    </g>
  );
};

const LaGaitaEscocesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="190" rx="55" ry="45" fill={accentColor} stroke={dark} strokeWidth="3" transform="rotate(-10 205 190)" />
      {[[150, 150, -30], [260, 150, 20], [195, 235, 10], [235, 240, -15]].map(([x, y, rot]) => (
        <rect key={`${x}-${y}`} x={x - 6} y={y - 40} width="12" height="55" fill="#5C3A21" stroke={dark} strokeWidth="2" transform={`rotate(${rot} ${x} ${y})`} />
      ))}
      <rect x="130" y="175" width="30" height="14" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElFestivalMasGrandeDelMundoEnEdimburgo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="170" cy="150" r="16" fill={skin} />
      <path d="M154 175 Q170 160 186 175 L180 250 L160 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="154" y1="185" x2="130" y2="165" stroke={dark} strokeWidth="4" />
      <line x1="186" y1="185" x2="215" y2="160" stroke={dark} strokeWidth="4" />
      <circle cx="270" cy="220" r="10" fill={tint(accentColor, 0.3)} opacity="0.7" />
      <circle cx="290" cy="200" r="8" fill={tint(accentColor, 0.5)} opacity="0.6" />
      <circle cx="250" cy="200" r="7" fill={dark} opacity="0.5" />
    </g>
  );
};

const ElHaggisYLaNocheDeBurns: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="215" rx="110" ry="32" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <ellipse cx="185" cy="195" rx="55" ry="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="270" cy="215" rx="30" ry="18" fill="#F4B400" opacity="0.8" />
      <ellipse cx="240" cy="225" rx="25" ry="14" fill="#F5F0E6" opacity="0.85" />
    </g>
  );
};

const StAndrewsLaCunaDelGolf: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q150 220 205 235 Q260 220 320 250 Z" fill="#7A8B5A" opacity="0.5" />
      <line x1="150" y1="230" x2="230" y2="120" stroke="#5C3A21" strokeWidth="6" strokeLinecap="round" />
      <path d="M225 115 L245 108 L250 128 L228 132 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="270" cy="225" r="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <ellipse cx="270" cy="238" rx="18" ry="4" fill={dark} opacity="0.3" />
    </g>
  );
};

const LasHighlandGamesYElLanzamientoDelTronco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="180" cy="150" r="15" fill={skin} />
      <path d="M163 173 Q180 160 197 173 L190 250 L170 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="197" y1="180" x2="230" y2="140" stroke="#5C3A21" strokeWidth="9" strokeLinecap="round" />
      <line x1="163" y1="180" x2="230" y2="140" stroke="#5C3A21" strokeWidth="9" strokeLinecap="round" opacity="0.4" />
      <line x1="150" y1="190" x2="163" y2="180" stroke={dark} strokeWidth="4" />
      <line x1="210" y1="190" x2="197" y2="180" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const HogmanayLaFiestaDeFinDeAno: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1B2E44" opacity="0.5" />
      <rect x="150" y="180" width="110" height="70" fill="#3E3A2F" stroke="#1A1A1A" strokeWidth="2.5" />
      <rect x="160" y="150" width="24" height="40" fill="#3E3A2F" stroke="#1A1A1A" strokeWidth="2" />
      <rect x="226" y="150" width="24" height="40" fill="#3E3A2F" stroke="#1A1A1A" strokeWidth="2" />
      {[[130, 120], [270, 110], [205, 90]].map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="4" fill={i % 2 === 0 ? accentColor : "#D4AF37"} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1={x} y1={y} x2={x} y2={y - 14} stroke={i % 2 === 0 ? accentColor : "#D4AF37"} strokeWidth="2" transform={`rotate(${deg} ${x} ${y})`} opacity="0.8" />
          ))}
        </g>
      ))}
    </g>
  );
};

const ElUnicornioElAnimalNacionalDeEscocia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 250 L170 200 Q170 175 195 170 L215 165 Q235 160 245 175 L255 195 L235 210 L220 195 L210 210 L210 250 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M245 175 L270 145" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
      <path d="M170 210 Q150 220 150 240" fill="none" stroke={dark} strokeWidth="4" opacity="0.5" />
      <line x1="230" y1="200" x2="230" y2="230" stroke={accentColor} strokeWidth="4" opacity="0.7" />
      <circle cx="248" cy="180" r="3" fill="#1A1A1A" />
    </g>
  );
};

const RobertTheBruceYLaBatallaDeBannockburn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {/* horse body and legs */}
      <ellipse cx="190" cy="200" rx="55" ry="24" fill="#5C3A21" stroke={dark} strokeWidth="3" />
      <line x1="160" y1="222" x2="150" y2="250" stroke="#5C3A21" strokeWidth="9" strokeLinecap="round" />
      <line x1="220" y1="222" x2="230" y2="250" stroke="#5C3A21" strokeWidth="9" strokeLinecap="round" />
      {/* neck reaching forward */}
      <path d="M225 195 Q250 175 245 150" fill="none" stroke="#5C3A21" strokeWidth="14" strokeLinecap="round" />
      {/* rider */}
      <circle cx="205" cy="165" r="16" fill={skin} />
      <path d="M190 178 Q205 170 220 178 L214 210 L196 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* raised sword */}
      <line x1="218" y1="175" x2="255" y2="125" stroke="#B0B8BF" strokeWidth="5" strokeLinecap="round" />
      <line x1="245" y1="140" x2="262" y2="123" stroke="#8B5A2B" strokeWidth="4" />
    </g>
  );
};

const DollyLaOvejaElPrimerMamiferoClonado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* fluffy sheep body and head */}
      <ellipse cx="190" cy="195" rx="60" ry="35" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="245" cy="180" r="22" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="256" cy="182" rx="10" ry="7" fill={dark} opacity="0.8" />
      <circle cx="250" cy="172" r="2.5" fill="#1A1A1A" />
      <line x1="160" y1="222" x2="158" y2="248" stroke={dark} strokeWidth="6" />
      <line x1="215" y1="225" x2="217" y2="248" stroke={dark} strokeWidth="6" />
      {/* lab test tubes */}
      <rect x="120" y="150" width="12" height="45" rx="5" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
      <rect x="140" y="160" width="12" height="35" rx="5" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const IrnBruLaBebidaQueLeGanaALaCocaCola: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const orange = "#F4A300";
  return (
    <g>
      <rect x="175" y="130" width="60" height="110" rx="10" fill={orange} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="130" rx="30" ry="8" fill={tint(orange, 0.3)} stroke={dark} strokeWidth="2" />
      <rect x="185" y="165" width="40" height="30" fill={accentColor} opacity="0.85" />
      {[[150, 150, 10], [260, 170, 8], [240, 120, 6], [165, 110, 7]].map(([x, y, r]) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill={orange} opacity="0.7" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const AdamSmithYLaIlustracionEscocesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="200" width="130" height="16" fill="#5C3A21" />
      <path d="M150 200 L205 190 L205 205 L150 215 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M205 190 L260 200 L260 215 L205 205 Z" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <line x1="160" y1="207" x2="195" y2="200" stroke={dark} strokeWidth="1" opacity="0.4" />
      <line x1="215" y1="200" x2="250" y2="207" stroke={dark} strokeWidth="1" opacity="0.4" />
      {/* quill */}
      <line x1="280" y1="230" x2="245" y2="140" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M245 140 L258 122 L252 136 L262 132 L248 152 Z" fill={dark} />
      {/* inkwell */}
      <ellipse cx="290" cy="235" rx="16" ry="8" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaIslaDeSkyeYLasPiscinasDeLasHadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1FB8C4";
  return (
    <g>
      <path d="M90 250 L110 190 L150 200 L180 150 L220 210 L260 170 L320 250 Z" fill={tint(accentColor, 0.2)} opacity="0.6" stroke={dark} strokeWidth="2" />
      {/* waterfall */}
      <path d="M180 150 Q185 190 178 230" fill="none" stroke="#F5F0E6" strokeWidth="10" opacity="0.85" strokeLinecap="round" />
      {/* turquoise pools */}
      <ellipse cx="160" cy="235" rx="45" ry="14" fill={water} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="250" cy="240" rx="35" ry="11" fill={water} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

export const scotlandIllustrations: Record<string, IllustrationDefinition> = {
  "el-monstruo-del-lago-ness": { component: ElMonstruoDelLagoNess },
  "el-whisky-escoces-sin-la-e": { component: ElWhiskyEscocesSinLaE },
  "el-tartan-y-los-clanes-escoceses": { component: ElTartanYLosClanesEscoceses },
  "la-gaita-escocesa": { component: LaGaitaEscocesa },
  "el-festival-mas-grande-del-mundo-en-edimburgo": { component: ElFestivalMasGrandeDelMundoEnEdimburgo },
  "el-haggis-y-la-noche-de-burns": { component: ElHaggisYLaNocheDeBurns },
  "st-andrews-la-cuna-del-golf": { component: StAndrewsLaCunaDelGolf },
  "las-highland-games-y-el-lanzamiento-del-tronco": { component: LasHighlandGamesYElLanzamientoDelTronco },
  "hogmanay-la-fiesta-de-fin-de-ano": { component: HogmanayLaFiestaDeFinDeAno },
  "el-unicornio-el-animal-nacional-de-escocia": { component: ElUnicornioElAnimalNacionalDeEscocia },
  "robert-the-bruce-y-la-batalla-de-bannockburn": { component: RobertTheBruceYLaBatallaDeBannockburn },
  "dolly-la-oveja-el-primer-mamifero-clonado": { component: DollyLaOvejaElPrimerMamiferoClonado },
  "irn-bru-la-bebida-que-le-gana-a-la-coca-cola": { component: IrnBruLaBebidaQueLeGanaALaCocaCola },
  "adam-smith-y-la-ilustracion-escocesa": { component: AdamSmithYLaIlustracionEscocesa },
  "la-isla-de-skye-y-las-piscinas-de-las-hadas": { component: LaIslaDeSkyeYLasPiscinasDeLasHadas },
};
