import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const IslasGalapagos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const rock = "#6B6355";
  return (
    <g>
      {/* volcanic rock */}
      <path d="M95 245 Q160 225 210 240 Q260 220 320 245 L320 250 L95 250 Z" fill={rock} />
      {/* giant tortoise */}
      <ellipse cx="165" cy="205" rx="52" ry="34" fill={dark} />
      <path d="M180 208 Q135 185 130 200 Q135 215 175 218 Z" fill={dark} opacity="0.6" />
      <circle cx="128" cy="198" r="13" fill={dark} />
      <path d="M120 205 L112 210 M120 190 L112 186" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {[150, 172, 194].map((x) => (
        <line key={x} x1={x} y1="185" x2={x} y2="225" stroke={shade(dark, 0.2)} strokeWidth="2" opacity="0.6" />
      ))}
      {/* marine iguana */}
      <path d="M225 230 Q260 215 290 225 Q300 230 296 238 Q265 245 225 240 Z" fill={accentColor} />
      <path d="M240 218 L245 208 M255 216 L260 204 M270 218 L276 206" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <circle cx="230" cy="228" r="9" fill={accentColor} />
      <path d="M296 235 Q312 232 318 222" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <circle cx="227" cy="225" r="1.6" fill={light} />
    </g>
  );
};

const MitadDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const gold = "#F4C430";
  return (
    <g>
      {/* stone monument */}
      <path d="M175 235 L175 130 L200 100 L225 130 L225 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="187" y="150" width="26" height="40" fill={light} />
      <circle cx="200" cy="128" r="10" fill={dark} />
      {/* yellow equatorial line crossing the ground */}
      <path d="M95 235 Q200 250 320 235" stroke={gold} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M95 235 Q200 250 320 235" stroke={dark} strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="2 8" />
    </g>
  );
};

const QuitoPatrimonio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const gold = "#D4AF37";
  return (
    <g>
      {/* church facade */}
      <path d="M155 235 L155 145 Q155 120 205 108 Q255 120 255 145 L255 235 Z" fill={gold} stroke={dark} strokeWidth="3" />
      <path d="M180 235 L180 195 Q180 178 205 172 Q230 178 230 195 L230 235 Z" fill={dark} />
      {/* twin towers */}
      <rect x="150" y="95" width="20" height="55" fill={light} />
      <polygon points="146,95 160,72 174,95" fill={dark} />
      <rect x="240" y="95" width="20" height="55" fill={light} />
      <polygon points="236,95 250,72 264,95" fill={dark} />
      <circle cx="205" cy="150" r="10" fill={light} />
    </g>
  );
};

const SombreroDePanama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.3);
  return (
    <g>
      {/* wide woven brim */}
      <ellipse cx="205" cy="185" rx="115" ry="26" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[-90, -60, 195, 155, 115, 75, 35, 0].map((deg) => (
        <line key={deg} x1="205" y1="185" x2="205" y2="163" stroke={light} strokeWidth="1.5" opacity="0.5" transform={`rotate(${deg} 205 185)`} />
      ))}
      {/* crown */}
      <path d="M175 178 Q175 138 205 132 Q235 138 235 178 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      <path d="M175 172 Q205 184 235 172" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const CacaoFinoDeAroma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* split cacao pod */}
      <path d="M150 235 Q135 190 150 145 Q165 100 200 92 Q170 140 172 190 Q170 220 150 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M255 235 Q270 190 255 145 Q240 100 205 92 Q235 140 233 190 Q235 220 255 235 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      {/* fresh beans visible in the middle */}
      {[[190, 140], [200, 165], [195, 190], [212, 150], [215, 178], [208, 205]].map(([x, y]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="10" ry="14" fill={light} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const MercadoOtavalo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4C430", "#2E7D5B", "#C1272D"];
  return (
    <g>
      {/* market stall frame */}
      <line x1="110" y1="230" x2="110" y2="100" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <line x1="300" y1="230" x2="300" y2="100" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <line x1="105" y1="105" x2="305" y2="105" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      {/* colorful hanging tapestries and ponchos */}
      {[130, 175, 220, 265].map((x, i) => (
        <path key={x} d={`M${x - 18} 110 L${x + 18} 110 L${x + 14} 210 L${x - 14} 210 Z`} fill={colors[i % colors.length]} />
      ))}
      {[130, 175, 220, 265].map((x, i) => (
        <line key={`stripe-${x}`} x1={x - 12} y1={150 + (i % 2) * 10} x2={x + 12} y2={150 + (i % 2) * 10} stroke="#fff" strokeWidth="3" opacity="0.6" />
      ))}
    </g>
  );
};

const AvenidaDeLosVolcanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  const valley = "#4A8F4E";
  return (
    <g>
      {/* green valley between them */}
      <path d="M95 245 Q210 220 320 245 L320 250 L95 250 Z" fill={valley} />
      {/* two snow-capped volcanic cones */}
      <polygon points="95,240 165,105 235,240" fill={accentColor} />
      <polygon points="165,105 185,148 145,148" fill={snow} />
      <polygon points="245,240 300,120 320,150" fill={dark} opacity="0.85" />
      <polygon points="257,215 300,120 320,150 297,225" fill={dark} opacity="0.85" />
      <polygon points="300,120 313,144 288,148" fill={snow} />
    </g>
  );
};

const Dolarizacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* dollar bill */}
      <rect x="130" y="130" width="140" height="72" rx="4" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="200" cy="166" r="26" fill="none" stroke={light} strokeWidth="2.5" />
      <text x="200" y="176" fontSize="30" fontWeight="700" fill={light} textAnchor="middle" fontFamily="serif">$</text>
      {[145, 255].map((x) => (
        <circle key={x} cx={x} cy="166" r="6" fill={light} />
      ))}
      {/* coins beside it */}
      <circle cx="290" cy="205" r="22" fill={light} stroke={dark} strokeWidth="3" />
      <circle cx="290" cy="205" r="13" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="255" cy="222" r="16" fill={light} stroke={dark} strokeWidth="3" />
    </g>
  );
};

const AmazoniaYasuni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#F4C430";
  const purple = "#7B3FA0";
  return (
    <g>
      {/* dense jungle leaves */}
      <path d="M95 245 Q140 200 190 235 Q230 195 285 240 Q305 220 320 245 L320 250 L95 250 Z" fill={dark} opacity="0.35" />
      {/* butterfly */}
      <line x1="205" y1="140" x2="205" y2="185" stroke={dark} strokeWidth="3" />
      <path d="M205 148 Q160 118 145 145 Q160 175 205 158 Z" fill={accentColor} />
      <path d="M205 158 Q170 178 165 200 Q188 202 205 172 Z" fill={purple} />
      <path d="M205 148 Q250 118 265 145 Q250 175 205 158 Z" fill={gold} />
      <path d="M205 158 Q240 178 245 200 Q222 202 205 172 Z" fill={accentColor} opacity="0.85" />
      <circle cx="205" cy="140" r="5" fill={dark} />
    </g>
  );
};

const RosasEcuatorianas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.35);
  const leaf = "#4A8F4E";
  return (
    <g>
      {/* long stem */}
      <line x1="205" y1="145" x2="205" y2="245" stroke={leaf} strokeWidth="6" strokeLinecap="round" />
      <path d="M205 195 Q225 190 232 205 Q212 208 205 195 Z" fill={leaf} />
      <path d="M205 215 Q185 210 178 225 Q198 228 205 215 Z" fill={leaf} />
      {/* large, open bloom */}
      <circle cx="205" cy="120" r="34" fill={dark} />
      <circle cx="205" cy="120" r="26" fill={accentColor} />
      <circle cx="205" cy="120" r="17" fill={light} opacity="0.85" />
      <path d="M205 103 Q216 112 205 120 Q194 112 205 103 Z" fill={dark} opacity="0.6" />
    </g>
  );
};

export const ecuadorIllustrations: Record<string, IllustrationDefinition> = {
  "islas-galapagos": { component: IslasGalapagos },
  "mitad-del-mundo": { component: MitadDelMundo },
  "quito-patrimonio": { component: QuitoPatrimonio },
  "sombrero-de-panama": { component: SombreroDePanama },
  "cacao-fino-de-aroma": { component: CacaoFinoDeAroma },
  "mercado-otavalo": { component: MercadoOtavalo },
  "avenida-de-los-volcanes": { component: AvenidaDeLosVolcanes },
  dolarizacion: { component: Dolarizacion },
  "amazonia-yasuni": { component: AmazoniaYasuni },
  "rosas-ecuatorianas": { component: RosasEcuatorianas },
};
