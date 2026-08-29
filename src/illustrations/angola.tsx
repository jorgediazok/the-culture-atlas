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

const LaReinaQueResistioTreintaAnosAPortugal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const gold = "#C9A227";
  return (
    <g>
      {/* robe, drawn with a tall apex so the head circle overlaps it well */}
      <path d="M175 240 Q170 195 200 165 Q230 195 225 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <circle cx="200" cy="160" r="20" fill={skin} stroke={dark} strokeWidth="2.2" />
      <path d="M178 152 Q200 105 222 152 Q210 140 200 138 Q190 140 178 152 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.4" />
      <path d="M222 195 Q248 185 258 155" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <line x1="258" y1="155" x2="272" y2="95" stroke="#8C6A3E" strokeWidth="5" strokeLinecap="round" />
      <path d="M268 100 L280 90 L272 112 Z" fill="#B0B0B0" stroke={dark} strokeWidth="1.5" />
      <path d="M178 195 Q160 210 165 235" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const LaPlantaQuePuedeVivirMilAnos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9C9A3";
  return (
    <g>
      <ellipse cx="205" cy="245" rx="110" ry="14" fill={sand} opacity="0.6" />
      <path d="M195 220 Q140 200 110 150 Q150 195 175 215 Q130 175 100 110 Q160 185 190 218" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M215 220 Q270 200 300 150 Q260 195 235 215 Q280 175 310 110 Q250 185 220 218" fill="none" stroke={tint(accentColor, 0.2)} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="205" cy="225" rx="26" ry="14" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="2.4" />
    </g>
  );
};

const LaMascaraQueRepresentaALaMujerIdeal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const wood = "#3A2A1E";
  return (
    <g>
      <path d="M180 122 Q205 95 230 122" fill="none" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <path d="M205 120 Q250 125 250 175 Q250 220 205 235 Q160 220 160 175 Q160 125 205 120 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" />
      <path d="M185 145 L195 155 L185 165 M225 145 L215 155 L225 165" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <path d="M180 175 Q190 168 200 175" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M210 175 Q220 168 230 175" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="205" y1="178" x2="205" y2="198" stroke={accentColor} strokeWidth="2.5" />
      <path d="M190 210 Q205 218 220 210" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const LasRocasNegrasDondeNjingaDejoSuHuella: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#B8A67A" opacity="0.4" />
      <path d="M110 240 Q100 160 150 130 Q190 110 195 160 Q200 210 160 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M190 240 Q180 130 240 100 Q290 90 285 160 Q280 220 230 240 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M270 240 Q265 190 300 175 Q320 170 320 210 Q320 235 295 240 Z" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.6" />
      <ellipse cx="255" cy="150" rx="6" ry="10" fill={dark} opacity="0.6" />
      <ellipse cx="270" cy="145" rx="6" ry="10" fill={dark} opacity="0.6" />
    </g>
  );
};

const ElArteMarcialBrasilenoQueLlevaElNombreDeAngola: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin1 = "#8B5A2B";
  const skin2 = "#C68A5A";
  return (
    <g>
      <ellipse cx="205" cy="240" rx="100" ry="10" fill={dark} opacity="0.3" />
      <circle cx="165" cy="215" r="12" fill={skin1} stroke={dark} strokeWidth="2" />
      <path d="M165 220 Q160 200 180 190" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <line x1="180" y1="190" x2="180" y2="150" stroke={skin1} strokeWidth="8" strokeLinecap="round" />
      <path d="M172 200 Q150 210 145 235" fill="none" stroke={skin1} strokeWidth="8" strokeLinecap="round" />
      <circle cx="255" cy="150" r="12" fill={skin2} stroke={dark} strokeWidth="2" />
      <path d="M255 158 Q260 190 240 205" fill="none" stroke={tint(accentColor, 0.2)} strokeWidth="9" strokeLinecap="round" />
      <line x1="240" y1="205" x2="285" y2="215" stroke={skin2} strokeWidth="8" strokeLinecap="round" />
      <path d="M248 175 Q225 165 215 148" fill="none" stroke={skin2} strokeWidth="8" strokeLinecap="round" />
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
  "la-reina-que-resistio-treinta-anos-a-portugal": { component: LaReinaQueResistioTreintaAnosAPortugal },
  "la-planta-que-puede-vivir-mil-anos": { component: LaPlantaQuePuedeVivirMilAnos },
  "la-mascara-que-representa-a-la-mujer-ideal": { component: LaMascaraQueRepresentaALaMujerIdeal },
  "las-rocas-negras-donde-njinga-dejo-su-huella": { component: LasRocasNegrasDondeNjingaDejoSuHuella },
  "el-arte-marcial-brasileno-que-lleva-el-nombre-de-angola": { component: ElArteMarcialBrasilenoQueLlevaElNombreDeAngola },
};
