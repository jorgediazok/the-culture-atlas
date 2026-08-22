import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaIslaConPermisoParaCazarUnaBallenaAlAno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#1B5E7A" opacity="0.4" />
      <path d="M110 210 Q160 165 210 195 Q235 210 220 225 Q170 235 130 220 Q112 214 110 210 Z" fill="#5C5C5C" stroke={dark} strokeWidth="2.6" />
      <path d="M210 195 Q222 175 235 190 Q228 200 210 195 Z" fill="#5C5C5C" stroke={dark} strokeWidth="2.2" />
      <circle cx="180" cy="185" r="3" fill="#1A1A1A" />
      <path d="M175 165 Q178 145 172 130 M188 168 Q192 150 198 138" stroke="#7A9AB0" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M255 220 L280 210 L275 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M255 235 L290 235 L280 245 L255 245 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <line x1="270" y1="235" x2="270" y2="205" stroke="#3A2418" strokeWidth="2.4" />
    </g>
  );
};

const ElArchipielagoDe32IslasDeAguasTurquesas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={accentColor} opacity="0.3" />
      <ellipse cx="140" cy="150" rx="30" ry="20" fill="#2F6B3A" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="215" cy="120" rx="22" ry="15" fill="#3A7A45" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="270" cy="175" rx="26" ry="17" fill="#2F6B3A" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="180" cy="205" rx="18" ry="12" fill="#3A7A45" stroke={dark} strokeWidth="2" />
      <ellipse cx="240" cy="225" rx="15" ry="10" fill="#2F6B3A" stroke={dark} strokeWidth="2" />
      <path d="M100 235 Q205 250 310 235" fill="none" stroke={tint(accentColor, 0.35)} strokeWidth="4" opacity="0.7" />
    </g>
  );
};

const ElVolcanQueSigueVigilandoLaIslaPrincipal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="120,250 205,110 290,250" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="180,160 205,110 230,160" fill="#8B1A1A" opacity="0.6" />
      <path d="M205 110 Q195 85 210 65 Q220 80 215 95 Q235 75 240 55 Q245 80 225 100 Q245 90 255 75" fill="none" stroke="#8C8C8C" strokeWidth="10" strokeLinecap="round" opacity="0.7" />
      <path d="M150 250 L150 220 Q160 200 175 220 L175 250 Z" fill="#3A5F3A" opacity="0.6" />
    </g>
  );
};

const ElArbolQueTrajoElCapitanDelMotinDelBounty: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="196" y="180" width="18" height="60" fill="#5C3A21" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="140" rx="70" ry="55" fill="#2F6B3A" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="135" rx="52" ry="40" fill="#3A7A45" opacity="0.6" />
      {[[165, 130], [205, 105], [245, 130], [180, 165], [230, 165]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="13" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      ))}
    </g>
  );
};

const LaBahiaQueSeConvirtioEnDecoradoDeHollywood: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,90 150,90 100,250 90,250" fill="#2F6B3A" opacity="0.55" />
      <polygon points="260,90 320,90 320,250 300,250" fill="#3A7A45" opacity="0.55" />
      <rect x="90" y="215" width="230" height="35" fill="#1B5E7A" opacity="0.4" />
      <path d="M150 210 L260 210 L245 235 Q205 245 165 235 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.8" />
      <rect x="200" y="140" width="8" height="70" fill="#3A2418" />
      <path d="M208 145 L245 165 L208 185 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M172 165 L172 195 L200 210 L200 175 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" opacity="0.9" />
    </g>
  );
};

const ElCarnavalQueSeMudoDeFechaParaBrillarSolo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="150" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 26} 133 L${x} 88 L${x + 26} 133`} fill="none" stroke="#C9A227" strokeWidth="4" strokeLinecap="round" />
      <path d={`M${x - 16} 230 Q${x - 18} 190 ${x} 185 Q${x + 18} 190 ${x + 16} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
    </g>
  );
  return (
    <g>
      {dancer(160, accentColor)}
      {dancer(255, "#C1272D")}
      <rect x="90" y="238" width="230" height="10" fill="#3A3A3A" opacity="0.5" />
      <rect x="100" y="205" width="35" height="35" fill="#5C5C5C" stroke={dark} strokeWidth="2" />
      <circle cx="117" cy="215" r="5" fill="#1A1A1A" />
    </g>
  );
};

const LosPetroglifosQueDejaronLosPrimerosHabitantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 245 Q150 235 205 245 Q260 235 310 245" fill="none" stroke="#1B5E7A" strokeWidth="6" opacity="0.6" />
      <path d="M130 235 Q120 160 205 140 Q290 160 280 235 Q205 250 130 235 Z" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="175" r="18" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="197" cy="170" r="3" fill="#3A2418" />
      <circle cx="215" cy="170" r="3" fill="#3A2418" />
      <path d="M195 185 Q205 192 217 185" fill="none" stroke="#3A2418" strokeWidth="2.5" />
      <path d="M170 200 L175 210 M240 200 L235 210" stroke={accentColor} strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const LaPiscinaNaturalQueTalloElPropioOceano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q205 170 320 200 L320 210 Q205 240 90 210 Z" fill="#8C8C74" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="205" cy="225" rx="90" ry="22" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M90 150 Q140 110 90 90 M320 150 Q270 110 320 90" fill="none" stroke="#7A9AB0" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
      {[[170, 220], [205, 215], [240, 222]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="8" ry="4" fill={tint(accentColor, 0.3)} opacity="0.8" />
      ))}
    </g>
  );
};

const ElPlatoNacionalHechoDeFrutaDePanYPescado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="210" rx="100" ry="18" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      <path d="M150 205 Q150 175 175 165 Q195 195 190 205 Q170 210 150 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <polygon points="70,150 70,190 195,205 210,175 130,150" fill="none" />
      <path d="M225 200 Q215 165 245 150 Q285 155 280 190 Q255 205 225 200 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <polygon points="280,175 300,170 300,182" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <circle cx="255" cy="170" r="2.5" fill="#1A1A1A" />
    </g>
  );
};

const LaIslaPrivadaDondeVeraneaLaRealezaEuropea: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="180" width="110" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="140,180 205,145 270,180" fill="#8B1A1A" stroke={dark} strokeWidth="2.8" />
      <rect x="190" y="200" width="30" height="35" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <rect x="163" y="192" width="16" height="16" fill={accentColor} stroke={dark} strokeWidth="1.6" />
      <rect x="231" y="192" width="16" height="16" fill={accentColor} stroke={dark} strokeWidth="1.6" />
      <path d="M115 235 Q110 175 130 150" fill="none" stroke="#5C3A21" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="130" cy="145" rx="26" ry="16" fill="#2F6B3A" stroke={dark} strokeWidth="2.2" />
      <rect x="90" y="240" width="230" height="8" fill="#1B5E7A" opacity="0.5" />
    </g>
  );
};

export const saintVincentAndTheGrenadinesIllustrations: Record<string, IllustrationDefinition> = {
  "la-isla-con-permiso-para-cazar-una-ballena-al-ano": { component: LaIslaConPermisoParaCazarUnaBallenaAlAno },
  "el-archipielago-de-32-islas-de-aguas-turquesas": { component: ElArchipielagoDe32IslasDeAguasTurquesas },
  "el-volcan-que-sigue-vigilando-la-isla-principal": { component: ElVolcanQueSigueVigilandoLaIslaPrincipal },
  "el-arbol-que-trajo-el-capitan-del-motin-del-bounty": { component: ElArbolQueTrajoElCapitanDelMotinDelBounty },
  "la-bahia-que-se-convirtio-en-decorado-de-hollywood": { component: LaBahiaQueSeConvirtioEnDecoradoDeHollywood },
  "el-carnaval-que-se-mudo-de-fecha-para-brillar-solo": { component: ElCarnavalQueSeMudoDeFechaParaBrillarSolo },
  "los-petroglifos-que-dejaron-los-primeros-habitantes": { component: LosPetroglifosQueDejaronLosPrimerosHabitantes },
  "la-piscina-natural-que-tallo-el-propio-oceano": { component: LaPiscinaNaturalQueTalloElPropioOceano },
  "el-plato-nacional-hecho-de-fruta-de-pan-y-pescado": { component: ElPlatoNacionalHechoDeFrutaDePanYPescado },
  "la-isla-privada-donde-veranea-la-realeza-europea": { component: LaIslaPrivadaDondeVeraneaLaRealezaEuropea },
};
