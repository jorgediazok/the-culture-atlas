import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaCascadaQueSeEscuchaAntesDeVerse: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="90" width="140" height="70" fill="#3A5F3A" opacity="0.5" />
      <path d="M150 95 L150 230 Q170 245 190 230 L190 95 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M210 95 L210 230 Q230 245 250 230 L250 95 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="200" cy="240" rx="90" ry="12" fill="#F5F0E6" opacity="0.7" />
      {[[160, 140], [230, 160], [180, 190]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#F5F0E6" opacity="0.6" />
      ))}
    </g>
  );
};

const ElAntilopeQueSeCreyoExtintoYNoLoEstaba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 235 Q145 190 175 175 Q205 165 235 175 Q265 190 260 235 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2.6" />
      <circle cx="230" cy="150" r="20" fill="#1A1A1A" stroke={dark} strokeWidth="2.4" />
      <path d="M235 135 Q250 100 240 75 Q235 100 225 120" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M245 138 Q265 108 260 82 Q250 105 235 125" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <line x1="170" y1="230" x2="165" y2="250" stroke="#1A1A1A" strokeWidth="6" />
      <line x1="240" y1="230" x2="245" y2="250" stroke="#1A1A1A" strokeWidth="6" />
      <circle cx="238" cy="145" r="2.5" fill="#F5F0E6" />
    </g>
  );
};

const ElBaileQueCruzoElAtlanticoYSeVolvioSamba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string, flip: number) => (
    <g key={x}>
      <circle cx={x} cy="145" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x} 157 L${x + 10 * flip} 200`} stroke={fill} strokeWidth="10" strokeLinecap="round" />
      <path d={`M${x + 10 * flip} 190 Q${x + 25 * flip} 215 ${x + 15 * flip} 240`} fill="none" stroke={fill} strokeWidth="9" strokeLinecap="round" />
      <line x1={x} y1="160" x2={x - 22 * flip} y2="140" stroke={fill} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
  return (
    <g>
      {dancer(175, accentColor, 1)}
      {dancer(225, "#C1272D", -1)}
      <rect x="90" y="240" width="230" height="8" fill="#3A3A3A" opacity="0.4" />
    </g>
  );
};

const ElGeneroQueNacioDeComputadorasViejasEnLuanda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="140" r="13" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M188 132 Q205 110 222 132" fill="none" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
      <rect x="192" y="153" width="26" height="35" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M192 165 Q160 180 155 220" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <path d="M218 165 Q250 150 260 120" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <path d="M195 188 Q175 210 180 245" fill="none" stroke="#3A2418" strokeWidth="8" strokeLinecap="round" />
      <path d="M215 188 Q240 215 230 245" fill="none" stroke="#3A2418" strokeWidth="8" strokeLinecap="round" />
      <rect x="90" y="245" width="230" height="6" fill="#5C5C5C" opacity="0.5" />
    </g>
  );
};

const LosDibujosEnLaArenaQueSonTambienMatematica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="110" width="210" height="130" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      <path
        d="M130 230 L130 140 L160 140 L160 200 L190 200 L190 130 L220 130 L220 210 L250 210 L250 150 L280 150 L280 220"
        fill="none"
        stroke={accentColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[[130, 230], [280, 220]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={dark} />
      ))}
    </g>
  );
};

const ElValleErosionadoQueParecOtroPlaneta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#1B5E7A" opacity="0.4" />
      <path d="M90 200 Q130 140 170 195 Q205 150 240 195 Q275 145 320 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M90 200 Q130 165 170 195" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M170 195 Q205 175 240 195" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[[130, 175], [200, 165], [265, 170]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} L${x + 6} ${y + 20}`} stroke={tint(accentColor, 0.3)} strokeWidth="3" opacity="0.6" />
      ))}
    </g>
  );
};

const ElFuerteQueVigilaLaBahiaDeLuanda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#1B5E7A" opacity="0.4" />
      <polygon points="130,200 280,200 260,130 150,130" fill="#8C8C74" stroke={dark} strokeWidth="3" />
      {[150, 185, 220, 250].map((x) => (
        <rect key={x} x={x} y="118" width="18" height="14" fill="#8C8C74" stroke={dark} strokeWidth="2" />
      ))}
      <g transform="translate(165 165) rotate(-8)">
        <rect x="-4" y="-4" width="42" height="8" fill="#3A3A3A" rx="3" />
        <circle cx="-4" cy="0" r="6" fill="#1A1A1A" />
      </g>
      <g transform="translate(245 165) rotate(8)">
        <rect x="-38" y="-4" width="42" height="8" fill="#3A3A3A" rx="3" />
        <circle cx="4" cy="0" r="6" fill="#1A1A1A" />
      </g>
    </g>
  );
};

const ElFerrocarrilQueCruzoElContinenteDeCostaACosta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M95 235 Q205 210 315 235" fill="none" stroke="#5C3A21" strokeWidth="6" opacity="0.6" />
      <path d="M100 240 L310 240 M100 245 L310 245" stroke="#3A3A3A" strokeWidth="3" opacity="0.5" />
      <rect x="150" y="175" width="70" height="45" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="150" cy="197" rx="14" ry="22" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <circle cx="165" cy="225" r="10" fill="#1A1A1A" />
      <circle cx="200" cy="225" r="10" fill="#1A1A1A" />
      <rect x="155" y="150" width="10" height="25" fill="#3A3A3A" />
      <path d="M160 145 Q170 130 175 115" fill="none" stroke="#8C8C8C" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const ElGuisoDePolloQueSeCocinaEnTodoHogar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="185" rx="70" ry="18" fill="#5C5C5C" stroke={dark} strokeWidth="2.8" />
      <path d="M135 185 L145 235 Q205 250 265 235 L275 185 Z" fill="#8C8C74" stroke={dark} strokeWidth="2.8" />
      <ellipse cx="205" cy="183" rx="55" ry="11" fill={accentColor} />
      <circle cx="185" cy="180" r="7" fill="#8B5A2B" />
      <circle cx="220" cy="178" r="6" fill="#2F6B3A" />
      <circle cx="205" cy="185" r="6" fill="#C1272D" />
      <rect x="115" y="160" width="10" height="30" fill="#3A3A3A" transform="rotate(-15 120 175)" />
      <rect x="285" y="160" width="10" height="30" fill="#3A3A3A" transform="rotate(15 290 175)" />
    </g>
  );
};

const ElParqueDondeReintrodujeronAnimalesTrasLaGuerra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#1B5E7A" opacity="0.4" />
      <rect x="90" y="80" width="230" height="140" fill="#2F6B3A" opacity="0.25" />
      <path d="M150 235 Q150 190 165 180 Q170 150 180 130 L188 130 Q182 155 180 185 Q195 190 195 235 Z" fill="#5C5C5C" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="230" cy="200" rx="40" ry="28" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <ellipse cx="255" cy="185" rx="14" ry="10" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <line x1="215" y1="225" x2="212" y2="240" stroke={dark} strokeWidth="5" />
      <line x1="245" y1="225" x2="248" y2="240" stroke={dark} strokeWidth="5" />
    </g>
  );
};

export const angolaIllustrations: Record<string, IllustrationDefinition> = {
  "la-cascada-que-se-escucha-antes-de-verse": { component: LaCascadaQueSeEscuchaAntesDeVerse },
  "el-antilope-que-se-creyo-extinto-y-no-lo-estaba": { component: ElAntilopeQueSeCreyoExtintoYNoLoEstaba },
  "el-baile-que-cruzo-el-atlantico-y-se-volvio-samba": { component: ElBaileQueCruzoElAtlanticoYSeVolvioSamba },
  "el-genero-que-nacio-de-computadoras-viejas-en-luanda": { component: ElGeneroQueNacioDeComputadorasViejasEnLuanda },
  "los-dibujos-en-la-arena-que-son-tambien-matematica": { component: LosDibujosEnLaArenaQueSonTambienMatematica },
  "el-valle-erosionado-que-parece-otro-planeta": { component: ElValleErosionadoQueParecOtroPlaneta },
  "el-fuerte-que-vigila-la-bahia-de-luanda": { component: ElFuerteQueVigilaLaBahiaDeLuanda },
  "el-ferrocarril-que-cruzo-el-continente-de-costa-a-costa": { component: ElFerrocarrilQueCruzoElContinenteDeCostaACosta },
  "el-guiso-de-pollo-que-se-cocina-en-todo-hogar": { component: ElGuisoDePolloQueSeCocinaEnTodoHogar },
  "el-parque-donde-reintrodujeron-animales-tras-la-guerra": { component: ElParqueDondeReintrodujeronAnimalesTrasLaGuerra },
};
