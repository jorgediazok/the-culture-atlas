import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BaikonurCosmodromoPrimerLanzamiento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 240 Q205 90 215 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="195,240 215,240 205,220" fill="#B0B8BF" />
      <path d="M195 235 L175 250 L195 250 Z" fill={dark} />
      <path d="M215 235 L235 250 L215 250 Z" fill={dark} />
      <path d="M190 250 Q205 270 220 250 Q212 258 205 258 Q198 258 190 250 Z" fill="#F4A300" opacity="0.85" />
      <circle cx="205" cy="110" r="8" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const BerkutchiCazadoresConAguilas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const horse = "#6B4C3A";
  return (
    <g>
      <path d="M120 245 Q150 200 210 210 Q260 215 280 245 Z" fill={horse} stroke={dark} strokeWidth="2.5" />
      <path d="M255 215 Q275 195 290 205 Q280 215 275 225 Z" fill={horse} />
      <path d="M150 245 L145 210 M180 245 L178 215 M230 245 L235 212 M260 245 L268 218" stroke={dark} strokeWidth="6" />
      <circle cx="175" cy="175" r="15" fill={skin} />
      <path d="M160 190 Q175 180 195 195 L190 225 L165 225 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M188 175 Q210 165 225 178 L218 188 Q200 182 190 185 Z" fill={skin} />
      <path d="M218 178 Q230 165 245 168 Q250 175 242 182 Q235 190 225 185 Q218 182 218 178 Z" fill="#3E2712" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const HombreDeOroGuerreroDeIssyk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 245 L165 140 Q205 110 245 140 L235 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={175 + i * 18} y1="150" x2={175 + i * 18} y2="240" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      <path d="M180 140 Q205 90 230 140 Q225 110 205 100 Q185 110 180 140 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="100" r="9" fill="#F4A300" />
      <path d="M193 108 Q205 100 217 108" fill="none" stroke="#F4A300" strokeWidth="3" />
    </g>
  );
};

const YurtaCasaNomadaDeFieltro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 240 Q130 180 205 165 Q280 180 280 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="165" rx="22" ry="8" fill={dark} />
      <ellipse cx="205" cy="163" rx="14" ry="5" fill="none" stroke="#F5F0E6" strokeWidth="2" />
      <rect x="185" y="210" width="40" height="30" fill="#5C4A3A" />
      {[150, 175, 235, 260].map((x) => (
        <line key={x} x1={x} y1="240" x2={205} y2="170" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
    </g>
  );
};

const MausoleoDeYasauiRutaDeLaSeda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="170" width="90" height="70" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M180 170 Q205 130 230 170 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M175 145 Q205 90 235 145 Q225 115 205 105 Q185 115 175 145 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="98" r="6" fill="#F4A300" />
      <rect x="192" y="195" width="26" height="45" fill={dark} opacity="0.5" />
    </g>
  );
};

const PoligonoNuclearSemipalatinsk: IllustrationComponent = () => (
  <g>
    <path d="M90 240 L320 240 L320 250 L90 250 Z" fill="#8B7355" opacity="0.5" />
    <rect x="195" y="130" width="16" height="110" fill="#B0B8BF" stroke="#4A4A4A" strokeWidth="2" />
    <rect x="180" y="115" width="46" height="18" fill="#B0B8BF" stroke="#4A4A4A" strokeWidth="2" />
    <circle cx="203" cy="180" r="20" fill="none" stroke="#F4A300" strokeWidth="3" />
    <path d="M203 165 L203 180 L215 187" stroke="#F4A300" strokeWidth="3" fill="none" />
    {[0, 120, 240].map((deg) => (
      <path key={deg} d="M203 160 L210 145 L196 145 Z" fill="#F4A300" transform={`rotate(${deg} 203 180)`} />
    ))}
  </g>
);

const KumisLecheDeYeguaFermentada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const horse = "#C68642";
  return (
    <g>
      <path d="M110 245 Q140 200 180 215 Q200 218 205 230 L200 245 Z" fill={horse} stroke={dark} strokeWidth="2.5" />
      <path d="M175 215 Q190 195 205 205 Q198 212 190 218 Z" fill={horse} />
      <line x1="130" y1="245" x2="127" y2="220" stroke={dark} strokeWidth="5" />
      <line x1="160" y1="245" x2="160" y2="225" stroke={dark} strokeWidth="5" />
      <path d="M240 200 Q235 240 260 240 Q285 240 280 200 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="260" cy="200" rx="20" ry="8" fill={tint(accentColor, 0.3)} />
    </g>
  );
};

const CanonDeCharyn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L120 130 L150 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M160 250 L190 100 L220 250 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M230 250 L255 150 L285 250 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <path d="M300 250 L315 170 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const PaisSinMarMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 200 Q130 130 220 120 Q300 130 310 190 Q300 230 240 240 Q160 250 110 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 200 Q150 160 220 155 Q280 160 290 195" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <circle cx="220" cy="185" r="5" fill="#F5F0E6" />
      <path d="M215 185 L225 185 M220 180 L220 190" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const MedeuPistaDeHieloMasAlta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L150 130 L180 250 Z" fill="#8B8378" opacity="0.7" />
      <path d="M230 250 L260 110 L300 250 Z" fill="#8B8378" opacity="0.7" />
      <ellipse cx="205" cy="235" rx="95" ry="18" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.5" />
      <path d="M160 235 Q205 225 250 235" fill="none" stroke="#fff" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LaDombraYElAitysDueloDePoetas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* neck drawn first so body absorbs the seam */}
      <rect x="198" y="80" width="14" height="110" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
      {/* pear-shaped body */}
      <path d="M205 160 Q150 165 150 205 Q150 245 205 250 Q260 245 260 205 Q260 165 205 160 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* sound hole */}
      <circle cx="205" cy="205" r="16" fill={dark} opacity="0.5" />
      {/* two strings */}
      <line x1="200" y1="85" x2="200" y2="245" stroke="#F5F0E6" strokeWidth="2" opacity="0.8" />
      <line x1="210" y1="85" x2="210" y2="245" stroke="#F5F0E6" strokeWidth="2" opacity="0.8" />
      {/* tuning pegs */}
      <circle cx="198" cy="85" r="5" fill={wood} />
      <circle cx="212" cy="85" r="5" fill={wood} />
    </g>
  );
};

const ElShyrdakAlfombrasDeFieltroBordado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="100" y="110" width="210" height="140" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="118" y="128" width="174" height="104" fill="none" stroke={light} strokeWidth="4" />
      {/* horn-shaped spiral motifs */}
      {[
        [155, 155],
        [255, 155],
        [155, 205],
        [255, 205],
      ].map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x} ${y} Q${x + 20} ${y - 15} ${x + 10} ${y + 5} Q${x + 2} ${y + 18} ${x + 18} ${y + 15}`} fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
      ))}
      <circle cx="205" cy="180" r="20" fill="none" stroke={light} strokeWidth="4" />
    </g>
  );
};

const BaiterekLaTorreDelHuevoDorado: IllustrationComponent = () => {
  const white = "#F5F0E6";
  const gold = "#D4AF37";
  const dark = "#6B6B6B";
  return (
    <g>
      {/* trunk */}
      <path d="M195 250 L200 140 L210 140 L215 250 Z" fill={white} stroke={dark} strokeWidth="2.5" />
      {/* branching supports */}
      <path d="M205 150 L165 175 M205 150 L245 175 M205 165 L170 195 M205 165 L240 195" stroke={white} strokeWidth="6" strokeLinecap="round" />
      {/* golden sphere */}
      <circle cx="205" cy="115" r="38" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <ellipse cx="192" cy="102" rx="10" ry="6" fill="#fff" opacity="0.4" />
      {/* base ring */}
      <ellipse cx="205" cy="250" rx="45" ry="10" fill={dark} opacity="0.3" />
    </g>
  );
};

const ElBeshbarmakElPlatoDeLosCincoDedos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const pasta = "#F5E6C8";
  const meat = "#8B4A3D";
  const onion = "#E8D9B5";
  return (
    <g>
      {/* platter */}
      <ellipse cx="205" cy="215" rx="100" ry="28" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="210" rx="85" ry="20" fill={pasta} stroke={dark} strokeWidth="2" />
      {/* pasta sheets */}
      {[
        [165, 205, -8],
        [205, 200, 0],
        [245, 205, 8],
      ].map(([x, y, rot]) => (
        <rect key={x} x={x - 22} y={y - 8} width="44" height="16" fill={pasta} stroke={dark} strokeWidth="1.5" opacity="0.9" transform={`rotate(${rot} ${x} ${y})`} />
      ))}
      {/* meat chunks */}
      {[
        [175, 190],
        [210, 185],
        [240, 192],
        [195, 198],
      ].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="16" ry="11" fill={meat} stroke={shade(meat, 0.3)} strokeWidth="2" />
      ))}
      {/* onions */}
      {[
        [185, 195],
        [225, 190],
      ].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="9" ry="5" fill={onion} opacity="0.85" />
      ))}
    </g>
  );
};

const LosLeopardosDeLasNievesDelTianShan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const snow = "#E8E4DC";
  return (
    <g>
      {/* snowy rocks */}
      <path d="M85 245 L130 190 L170 245 Z" fill={snow} opacity="0.7" />
      <path d="M230 245 L280 175 L320 245 Z" fill={snow} opacity="0.7" />
      {/* tail curling, drawn first so body absorbs the seam */}
      <path d="M255 205 Q290 195 295 165 Q297 150 285 148" fill="none" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
      {/* body */}
      <path d="M150 220 Q145 190 180 185 Q225 180 250 200 Q265 210 255 220 L250 235 L155 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head */}
      <circle cx="160" cy="195" r="20" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* ears */}
      <path d="M148 180 L145 168 L155 178 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M172 180 L178 168 L168 178 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {/* spots */}
      {[
        [170, 215],
        [195, 205],
        [220, 212],
        [185, 225],
        [210, 222],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill={dark} opacity="0.5" />
      ))}
      {/* legs */}
      {[165, 190, 215, 235].map((x) => (
        <line key={x} x1={x} y1="233" x2={x} y2="248" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      ))}
    </g>
  );
};

export const kazakhstanIllustrations: Record<string, IllustrationDefinition> = {
  "baikonur-cosmodromo-primer-lanzamiento": { component: BaikonurCosmodromoPrimerLanzamiento },
  "berkutchi-cazadores-con-aguilas": { component: BerkutchiCazadoresConAguilas },
  "hombre-de-oro-guerrero-de-issyk": { component: HombreDeOroGuerreroDeIssyk },
  "yurta-casa-nomada-de-fieltro": { component: YurtaCasaNomadaDeFieltro },
  "mausoleo-de-yasaui-ruta-de-la-seda": { component: MausoleoDeYasauiRutaDeLaSeda },
  "poligono-nuclear-semipalatinsk": { component: PoligonoNuclearSemipalatinsk },
  "kumis-leche-de-yegua-fermentada": { component: KumisLecheDeYeguaFermentada },
  "canon-de-charyn": { component: CanonDeCharyn },
  "pais-sin-mar-mas-grande-del-mundo": { component: PaisSinMarMasGrandeDelMundo },
  "medeu-pista-de-hielo-mas-alta": { component: MedeuPistaDeHieloMasAlta },
  "la-dombra-y-el-aitys-duelo-de-poetas": { component: LaDombraYElAitysDueloDePoetas },
  "el-shyrdak-alfombras-de-fieltro-bordado": { component: ElShyrdakAlfombrasDeFieltroBordado },
  "baiterek-la-torre-del-huevo-dorado": { component: BaiterekLaTorreDelHuevoDorado },
  "el-beshbarmak-el-plato-de-los-cinco-dedos": { component: ElBeshbarmakElPlatoDeLosCincoDedos },
  "los-leopardos-de-las-nieves-del-tian-shan": { component: LosLeopardosDeLasNievesDelTianShan },
};
