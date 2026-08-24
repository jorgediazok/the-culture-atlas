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

const CevicheEcuatoriano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  const shrimp = "#F2A65A";
  const onion = "#B565A7";
  const gold = "#D4A017";
  return (
    <g>
      {/* bowl */}
      <path d="M110 175 Q110 240 205 240 Q300 240 300 175 Z" fill={light} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="95" ry="22" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* shrimp */}
      <path d="M170 165 Q155 150 165 138 Q178 145 175 160 Z" fill={shrimp} stroke={dark} strokeWidth="1.5" />
      <path d="M225 170 Q212 155 222 143 Q234 150 230 165 Z" fill={shrimp} stroke={dark} strokeWidth="1.5" />
      {/* red onion rings */}
      <ellipse cx="200" cy="180" rx="14" ry="6" fill="none" stroke={onion} strokeWidth="3" />
      <ellipse cx="230" cy="190" rx="12" ry="5" fill="none" stroke={onion} strokeWidth="3" />
      {/* tomato bits */}
      <circle cx="180" cy="195" r="6" fill="#D64550" />
      <circle cx="255" cy="180" r="6" fill="#D64550" />
      {/* chifles on the side */}
      <ellipse cx="325" cy="215" rx="16" ry="9" fill={gold} stroke={dark} strokeWidth="2" transform="rotate(-15 325 215)" />
      <ellipse cx="335" cy="195" rx="16" ry="9" fill={gold} stroke={dark} strokeWidth="2" transform="rotate(10 335 195)" />
    </g>
  );
};

const ConferenciaDeGuayaquil: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C97C4A";
  const gold = "#D4AF37";
  const building = "#C9B18C";
  return (
    <g>
      {/* colonial building arch behind them */}
      <rect x="95" y="110" width="230" height="120" fill={building} opacity="0.5" />
      <path d="M175 230 L175 165 Q200 140 225 165 L225 230 Z" fill="none" stroke={dark} strokeWidth="3" opacity="0.6" />
      {/* general A: torso built with a curved top edge overlapping the head's true circle */}
      <path d="M138 100 Q150 118 162 100 L172 200 L128 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="150" cy="110" r="16" fill={skin} />
      <path d="M132 104 Q150 90 168 104 L168 100 Q150 96 132 100 Z" fill={dark} />
      <path d="M140 150 Q170 160 195 172" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M140 155 L135 195" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M140 200 L136 232 M158 200 L162 232" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      {/* general B, mirrored */}
      <path d="M238 100 Q250 118 262 100 L272 200 L228 200 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <circle cx="250" cy="110" r="16" fill={skin} />
      <path d="M232 104 Q250 90 268 104 L268 100 Q250 96 232 100 Z" fill={dark} />
      <path d="M260 150 Q230 160 205 172" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M260 155 L265 195" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M240 200 L236 232 M258 200 L262 232" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      {/* clasped hands at the meeting point */}
      <circle cx="200" cy="172" r="9" fill={gold} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LagunaQuilotoa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const rock = "#8B7355";
  const rockLight = tint(rock, 0.3);
  return (
    <g>
      {/* crater walls */}
      <path d="M95 250 L130 100 Q205 78 280 100 L320 250 Z" fill={rock} />
      <path d="M95 250 L130 100 Q160 92 190 90 L165 250 Z" fill={rockLight} opacity="0.6" />
      <path d="M250 95 Q285 100 320 250 L280 250 L245 105 Z" fill={shade(rock, 0.2)} opacity="0.6" />
      {/* turquoise lake filling the crater floor */}
      <path d="M150 250 Q160 175 205 168 Q250 175 260 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M180 230 Q205 218 230 230" stroke={tint(accentColor, 0.4)} strokeWidth="3" fill="none" opacity="0.6" />
    </g>
  );
};

const MamaNegraLatacunga: IllustrationComponent = ({ accentColor }) => {
  const dark = "#3A2A22";
  const skin = "#8B5A3C";
  const gold = "#D4AF37";
  return (
    <g>
      {/* horse tail and legs, drawn first so the body ellipse covers their roots */}
      <path d="M145 190 Q120 205 110 230" fill="none" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      <path d="M165 210 L155 245 M185 214 L178 248 M215 212 L222 246 M235 206 L245 240" stroke={dark} strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* neck, drawn before the body and head so both cover its roots */}
      <path d="M218 182 Q248 145 268 155" fill="none" stroke={dark} strokeWidth="24" strokeLinecap="round" />
      {/* horse body */}
      <ellipse cx="190" cy="197" rx="58" ry="28" fill={dark} />
      {/* horse head and mane */}
      <circle cx="270" cy="152" r="18" fill={dark} />
      <path d="M282 145 Q300 150 298 162 Q285 162 280 152 Z" fill={dark} />
      <path d="M228 168 Q245 150 262 148" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      <polygon points="260,138 265,126 270,138" fill={dark} />
      {/* rider torso, curved top overlapping the rider's head circle */}
      <path d="M182 148 Q200 168 218 148 L226 210 L174 210 Z" fill={accentColor} stroke={shade(accentColor, 0.4)} strokeWidth="3" />
      <circle cx="200" cy="158" r="15" fill={skin} />
      {/* headwrap / dark face paint, part of the tradition's costume */}
      <path d="M186 152 Q200 140 214 152 Q214 165 200 170 Q186 165 186 152 Z" fill={dark} />
      {/* embroidered cape trim */}
      <path d="M178 165 Q200 178 222 165" fill="none" stroke={gold} strokeWidth="4" />
      {/* arms, strokes starting well inside the torso fill */}
      <path d="M190 175 Q165 185 155 200" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M210 175 Q235 185 245 195" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const BalsaKonTiki: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const sail = "#F5F0E6";
  return (
    <g>
      {/* ocean waves */}
      <path d="M95 220 Q140 205 185 220 Q230 235 275 220 Q300 212 320 220 L320 250 L95 250 Z" fill={water} />
      <path d="M95 220 Q140 205 185 220 Q230 235 275 220 Q300 212 320 220" fill="none" stroke={tint(water, 0.4)} strokeWidth="2" opacity="0.6" />
      {/* balsa log raft */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={110 + i * 30} y="205" width="26" height="14" rx="6" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      {/* mast and square sail */}
      <line x1="200" y1="200" x2="200" y2="105" stroke={dark} strokeWidth="5" />
      <line x1="165" y1="120" x2="235" y2="120" stroke={dark} strokeWidth="4" />
      <path d="M167 120 L233 120 L225 175 L175 175 Z" fill={sail} stroke={dark} strokeWidth="2" />
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
  "ceviche-ecuatoriano": { component: CevicheEcuatoriano },
  "conferencia-de-guayaquil": { component: ConferenciaDeGuayaquil },
  "laguna-quilotoa": { component: LagunaQuilotoa },
  "mama-negra-latacunga": { component: MamaNegraLatacunga },
  "balsa-kon-tiki": { component: BalsaKonTiki },
};
