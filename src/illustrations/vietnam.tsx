import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Pho: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const noodle = "#F0D080";
  const green = "#4A8F4E";
  return (
    <g>
      {/* bowl */}
      <path d="M120 185 Q120 235 205 235 Q290 235 290 185 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="185" rx="85" ry="18" fill={dark} />
      <ellipse cx="205" cy="183" rx="70" ry="13" fill="#8B5A2B" opacity="0.6" />
      {/* noodles */}
      <path d="M170 175 Q180 160 170 145 M190 178 Q200 160 192 140 M215 178 Q225 160 218 142 M235 175 Q245 160 238 148" fill="none" stroke={noodle} strokeWidth="5" strokeLinecap="round" />
      {/* meat slices */}
      <ellipse cx="185" cy="178" rx="14" ry="8" fill="#C97C4A" stroke={dark} strokeWidth="1.5" />
      <ellipse cx="225" cy="180" rx="14" ry="8" fill="#C97C4A" stroke={dark} strokeWidth="1.5" />
      {/* herbs */}
      <path d="M150 172 Q145 160 155 155 Q160 165 150 172 Z" fill={green} />
      <path d="M258 172 Q253 158 265 155 Q268 168 258 172 Z" fill={green} />
    </g>
  );
};

const AoDai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* long fitted tunic, side slits */}
      <path d="M180 110 L230 110 L238 200 L222 240 L188 240 L172 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M190 130 L190 235 M220 130 L220 235" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {/* wide flowing pants beneath */}
      <path d="M180 205 L165 245 L195 245 L200 210 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M230 205 L245 245 L215 245 L210 210 Z" fill={light} stroke={dark} strokeWidth="2" />
      {/* collar */}
      <path d="M188 112 L205 128 L222 112" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const HaLongBay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.55" />
      {[[130, 225, 55], [180, 235, 70], [235, 220, 60], [285, 232, 45]].map(([x, y, h], i) => (
        <path key={x} d={`M${(x as number) - 22} ${y} Q${x} ${(y as number) - (h as number)} ${(x as number) + 22} ${y} Z`} fill={i % 2 === 0 ? dark : accentColor} />
      ))}
      {[[130, 195], [180, 178], [235, 190], [285, 198]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="10" fill={green} opacity="0.8" />
      ))}
    </g>
  );
};

const CafeConHuevo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const foam = "#F0D9A8";
  return (
    <g>
      <path d="M155 165 h64 v40 a32 28 0 0 1 -64 0 Z" fill={accentColor} />
      <path d="M219 178 a18 16 0 0 1 0 32 h-8 v-32 Z" fill={dark} />
      <ellipse cx="205" cy="205" rx="55" ry="12" fill={dark} />
      {/* thick creamy foam on top */}
      <ellipse cx="187" cy="165" rx="32" ry="16" fill={foam} stroke={shade(foam, 0.2)} strokeWidth="2" />
      <path d="M165 158 Q175 150 187 158 Q199 150 209 158" fill="none" stroke={shade(foam, 0.15)} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const NonLa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.3);
  return (
    <g>
      <polygon points="205,105 100,220 310,220" fill={accentColor} stroke={dark} strokeWidth="3" strokeLinejoin="round" />
      {[130, 150, 172, 194, 216, 238, 262, 284].map((x) => (
        <line key={x} x1={x} y1="220" x2="205" y2="105" stroke={light} strokeWidth="1" opacity="0.5" />
      ))}
      <ellipse cx="205" cy="220" rx="105" ry="10" fill={dark} opacity="0.4" />
      <path d="M175 150 Q205 165 235 150" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const TunelCuChi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const jungle = "#3E5C3A";
  return (
    <g>
      {/* dense jungle vegetation */}
      {[[110, 200], [150, 215], [280, 205], [305, 195], [190, 210]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="26" fill={jungle} />
      ))}
      {/* camouflaged square hatch entrance */}
      <path d="M175 220 L235 220 L228 250 L182 250 Z" fill="#1A1A1A" />
      <path d="M175 220 L235 220 L232 210 L178 210 Z" fill={dark} opacity="0.8" />
      <rect x="196" y="222" width="16" height="10" fill={dark} />
    </g>
  );
};

const Tet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const pink = "#F4A6C6";
  return (
    <g>
      {/* peach blossom branch */}
      <path d="M115 240 Q140 200 130 160 Q125 130 150 110" fill="none" stroke="#6B4423" strokeWidth="6" strokeLinecap="round" />
      {[[135, 155], [122, 175], [148, 130], [160, 115]].map(([x, y]) => (
        <g key={x}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 6} rx="5" ry="7" fill={pink} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      {/* red envelope */}
      <rect x="220" y="140" width="70" height="90" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M220 140 L255 175 L290 140" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="255" cy="195" r="14" fill={gold} />
      <text x="255" y="201" fontSize="16" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">福</text>
    </g>
  );
};

const MotoHanoi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* scooter body */}
      <path d="M140 220 Q135 190 165 185 L230 185 Q245 185 248 200 L248 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="155" cy="230" r="16" fill="#2E2E2E" />
      <circle cx="240" cy="230" r="16" fill="#2E2E2E" />
      <line x1="248" y1="195" x2="270" y2="180" stroke={dark} strokeWidth="4" />
      {/* stacked cargo boxes and bags */}
      <rect x="175" y="140" width="45" height="40" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="185" y="115" width="30" height="28" fill={shade(light, 0.1)} stroke={dark} strokeWidth="2" />
      <path d="M225 155 Q245 150 250 175 Q235 180 225 165 Z" fill={dark} opacity="0.7" />
    </g>
  );
};

const BanhMi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#4A8F4E";
  const red = "#C1272D";
  return (
    <g>
      <path d="M115 200 Q115 175 145 175 L265 175 Q295 175 295 200 Q295 225 265 225 L145 225 Q115 225 115 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 180 Q205 168 280 180" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* filling peeking out */}
      <path d="M140 195 Q170 178 200 195 Q230 178 260 195 Q255 210 200 205 Q145 210 140 195 Z" fill="#C97C4A" />
      {[[160, 190], [220, 190]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill={red} />
      ))}
      <path d="M180 192 Q185 185 190 192" fill="none" stroke={green} strokeWidth="3" />
    </g>
  );
};

const ArrozalesTerrazas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <path
          key={row}
          d={`M${95 + row * 8} ${240 - row * 26} L${320 - row * 10} ${230 - row * 26} L${320 - row * 10} ${222 - row * 26} L${95 + row * 8} ${232 - row * 26} Z`}
          fill={row % 2 === 0 ? accentColor : light}
          stroke={dark}
          strokeWidth="1"
        />
      ))}
    </g>
  );
};

const RoiNuoc: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const wood = "#C9A876";
  return (
    <g>
      {/* backdrop screen */}
      <rect x="90" y="90" width="230" height="90" fill={accentColor} opacity="0.5" />
      <rect x="90" y="90" width="230" height="90" fill="none" stroke={dark} strokeWidth="2" />
      {/* water */}
      <path d="M85 180 Q205 168 320 180 L320 250 L85 250 Z" fill={water} />
      <path d="M90 190 Q205 180 315 190" fill="none" stroke={shade(water, 0.3)} strokeWidth="2" opacity="0.5" />
      {/* dragon puppet */}
      <path d="M130 175 Q150 155 180 165 Q200 150 215 160" fill="none" stroke={wood} strokeWidth="10" strokeLinecap="round" />
      <circle cx="125" cy="176" r="9" fill={wood} stroke={dark} strokeWidth="2" />
      {/* farmer puppet */}
      <circle cx="255" cy="165" r="10" fill="#D9A46A" stroke={dark} strokeWidth="2" />
      <path d="M245 175 Q255 170 265 175 L262 195 L248 195 Z" fill="#C1272D" stroke={dark} strokeWidth="2" />
      {/* buffalo puppet */}
      <ellipse cx="290" cy="188" rx="20" ry="12" fill="#6B4A2F" stroke={dark} strokeWidth="2" />
      <path d="M282 182 Q274 172 278 158" fill="none" stroke="#6B4A2F" strokeWidth="6" strokeLinecap="round" />
      <circle cx="278" cy="155" r="7" fill="#6B4A2F" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const HoiAn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C9184A", "#F4A300", "#00838F"];
  return (
    <g>
      {/* buildings */}
      <rect x="85" y="150" width="100" height="100" fill="#E8DCC8" stroke={dark} strokeWidth="2" />
      <rect x="220" y="140" width="100" height="110" fill="#D9C9A8" stroke={dark} strokeWidth="2" />
      {/* string across the street */}
      <path d="M95 110 Q205 90 310 110" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* hanging lanterns */}
      {[110, 150, 190, 230, 270, 300].map((x, i) => {
        const y = 118 + (i % 3) * 10;
        return (
          <g key={x}>
            <line x1={x} y1={y - 14} x2={x} y2={y - 2} stroke={dark} strokeWidth="1.5" opacity="0.5" />
            <ellipse cx={x} cy={y + 10} rx="12" ry="15" fill={colors[i % colors.length]} stroke={dark} strokeWidth="1.5" />
          </g>
        );
      })}
    </g>
  );
};

const SonDoong: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = "#F4E4B8";
  const skin = "#D9A46A";
  return (
    <g>
      {/* cavern walls */}
      <path d="M85 250 Q95 130 205 110 Q315 130 320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* light shaft from the opening above */}
      <path d="M180 110 L150 250 L260 250 L230 110 Z" fill={light} opacity="0.35" />
      {/* jungle patch at the bottom lit by the shaft */}
      <ellipse cx="205" cy="235" rx="45" ry="14" fill="#4A7A52" opacity="0.7" />
      {/* tiny explorer for scale */}
      <circle cx="205" cy="205" r="4" fill={skin} />
      <rect x="202" y="209" width="6" height="12" fill={dark} />
    </g>
  );
};

const NuocMam: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#6B4A2F";
  return (
    <g>
      {/* barrels */}
      {[120, 175].map((x) => (
        <g key={x}>
          <rect x={x} y="170" width="45" height="65" rx="6" fill={wood} stroke={dark} strokeWidth="2" />
          <rect x={x} y="188" width="45" height="6" fill={dark} opacity="0.5" />
          <rect x={x} y="212" width="45" height="6" fill={dark} opacity="0.5" />
        </g>
      ))}
      {/* bottle of sauce */}
      <path d="M245 150 L245 235 Q245 245 260 245 L270 245 Q285 245 285 235 L285 150 Z" fill={accentColor} opacity="0.85" stroke={dark} strokeWidth="2.5" />
      <rect x="258" y="130" width="14" height="24" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="255" y="122" width="20" height="10" fill={dark} />
    </g>
  );
};

const TamboresDongSon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* drum body */}
      <path d="M130 160 L280 160 L265 235 L145 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="160" rx="75" ry="18" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      {/* central star */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1="205" y1="160" x2="205" y2="140" stroke={gold} strokeWidth="4" strokeLinecap="round" transform={`rotate(${deg} 205 160)`} />
      ))}
      <circle cx="205" cy="160" r="6" fill={gold} />
      {/* concentric geometric bands */}
      <ellipse cx="205" cy="160" rx="50" ry="12" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[160, 180, 200, 220].map((y, i) => (
        <rect key={y} x="150" y={y} width="110" height="6" fill={i % 2 === 0 ? dark : gold} opacity="0.4" />
      ))}
    </g>
  );
};

const CiudadelaDeHue: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* base wall */}
      <rect x="110" y="185" width="190" height="55" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[130, 160, 190, 220, 250, 280].map((x) => (
        <rect key={x} x={x} y="185" width="6" height="55" fill={dark} opacity="0.5" />
      ))}
      {/* gate opening */}
      <path d="M185 240 L185 210 Q185 195 205 195 Q225 195 225 210 L225 240 Z" fill={dark} opacity="0.7" />
      {/* layered curved roofs */}
      <polygon points="100,185 150,150 260,150 310,185" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="2.5" />
      <polygon points="130,150 165,120 245,120 280,150" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="2.5" />
      <path d="M100 185 Q90 172 105 158" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      <path d="M310 185 Q320 172 305 158" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const LacaVietnamita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  const pearl = "#F5F0E6";
  return (
    <g>
      {/* lacquered bowl */}
      <path d="M120 170 Q120 225 205 230 Q290 225 290 170 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="170" rx="85" ry="16" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      {/* mother-of-pearl inlay flecks */}
      {[
        [170, 195],
        [205, 205],
        [240, 192],
        [185, 215],
        [225, 212],
      ].map(([x, y], i) => (
        <polygon key={i} points={`${x},${y - 6} ${x + 6},${y} ${x},${y + 6} ${x - 6},${y}`} fill={pearl} opacity="0.85" />
      ))}
      {/* gold rim detail */}
      <ellipse cx="205" cy="170" rx="85" ry="16" fill="none" stroke={gold} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const MercadosFlotantesMekong: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* water */}
      <rect x="85" y="190" width="235" height="60" fill={water} opacity="0.5" />
      {/* boats loaded with produce */}
      {[130, 205, 280].map((x, i) => (
        <g key={x}>
          <path d={`M${x - 38} 215 L${x + 38} 215 L${x + 28} 235 L${x - 28} 235 Z`} fill={wood} stroke={dark} strokeWidth="2.5" />
          {[
            [-18, accentColor],
            [0, "#F4A300"],
            [18, "#4A7A52"],
          ].map(([dx, c]) => (
            <circle key={dx as number} cx={x + (dx as number)} cy="205" r="10" fill={c as string} stroke={dark} strokeWidth="1.5" />
          ))}
          {/* pole with a sample hanging */}
          <line x1={x} y1="215" x2={x} y2="175" stroke={dark} strokeWidth="2" />
          <circle cx={x} cy="172" r="6" fill={i % 2 === 0 ? "#F4A300" : accentColor} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const HermanasTrung: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const elephant = "#78909C";
  return (
    <g>
      {[140, 270].map((x, i) => (
        <g key={x}>
          {/* elephant */}
          <ellipse cx={x} cy="205" rx="34" ry="24" fill={elephant} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x - (i === 0 ? 30 : -30)} 200 Q${x - (i === 0 ? 46 : -46)} 195 ${x - (i === 0 ? 50 : -50)} 215`} fill="none" stroke={elephant} strokeWidth="9" strokeLinecap="round" />
          <ellipse cx={x - (i === 0 ? 36 : -36)} cy="190" rx="12" ry="14" fill={elephant} stroke={dark} strokeWidth="2" />
          <line x1={x - 14} y1="225" x2={x - 16} y2="245" stroke={dark} strokeWidth="6" strokeLinecap="round" />
          <line x1={x + 14} y1="225" x2={x + 16} y2="245" stroke={dark} strokeWidth="6" strokeLinecap="round" />
          {/* rider */}
          <circle cx={x} cy="165" r="11" fill={skin} />
          <path d={`M${x - 9} 174 Q${x} 168 ${x + 9} 174 L${x + 7} 195 L${x - 7} 195 Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
          {/* raised spear */}
          <line x1={x + 8} y1="178" x2={x + (i === 0 ? 30 : -30)} y2="130" stroke="#6B4A2F" strokeWidth="3" strokeLinecap="round" />
          <polygon points={`${x + (i === 0 ? 30 : -30)},130 ${x + (i === 0 ? 24 : -24)},140 ${x + (i === 0 ? 36 : -36)},140`} fill="#B0B8BF" />
        </g>
      ))}
    </g>
  );
};

const TrangAn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* limestone cliffs */}
      <path d="M85 250 L85 140 Q100 110 120 140 L120 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M290 250 L290 120 Q310 90 320 120 L320 250 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <path d="M180 250 L180 155 Q205 125 230 155 L230 250 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      {/* river */}
      <path d="M85 225 Q205 210 320 225 L320 250 L85 250 Z" fill={water} opacity="0.6" />
      {/* small sampan boat */}
      <path d="M150 230 Q205 220 260 230 L250 240 L160 240 Z" fill={wood} stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="220" r="7" fill="#D9A46A" />
    </g>
  );
};

export const vietnamIllustrations: Record<string, IllustrationDefinition> = {
  pho: { component: Pho },
  "ao-dai": { component: AoDai },
  "ha-long-bay": { component: HaLongBay },
  "cafe-con-huevo": { component: CafeConHuevo },
  "non-la": { component: NonLa },
  "tunel-cu-chi": { component: TunelCuChi },
  tet: { component: Tet },
  "moto-hanoi": { component: MotoHanoi },
  "banh-mi": { component: BanhMi },
  "arrozales-terrazas": { component: ArrozalesTerrazas },
  "roi-nuoc": { component: RoiNuoc },
  "hoi-an": { component: HoiAn },
  "son-doong": { component: SonDoong },
  "nuoc-mam": { component: NuocMam },
  "tambores-dong-son": { component: TamboresDongSon },
  "ciudadela-de-hue": { component: CiudadelaDeHue },
  "laca-vietnamita": { component: LacaVietnamita },
  "mercados-flotantes-mekong": { component: MercadosFlotantesMekong },
  "hermanas-trung": { component: HermanasTrung },
  "trang-an": { component: TrangAn },
};
