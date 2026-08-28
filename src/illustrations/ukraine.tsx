import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElKyivPecherskLavraMonasterioDeLasCuevas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="150" width="60" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="192" y="100" width="26" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M188 100 Q205 65 222 100 Q214 88 205 88 Q196 88 188 100 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="65" x2="205" y2="50" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="48" r="3" fill={accentColor} />
      <rect x="120" y="200" width="45" height="40" fill="#8B7355" stroke={dark} strokeWidth="2.5" />
      <path d="M130 200 Q142 185 155 200" fill="none" stroke={dark} strokeWidth="2" />
      {[[145, 218], [130, 222]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill="#F5C518" opacity="0.9" />
      ))}
    </g>
  );
};

const LaPysankaElHuevoDePascuaUcraniano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M205 100 Q260 100 260 175 Q260 235 205 240 Q150 235 150 175 Q150 100 205 100 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M150 155 Q205 140 260 155" fill="none" stroke={accentColor} strokeWidth="10" />
      <path d="M150 185 Q205 200 260 185" fill="none" stroke="#3E5C40" strokeWidth="10" />
      {[170, 205, 240].map((x) => (
        <line key={x} x1={x} y1="118" x2={x} y2="222" stroke="#D4941E" strokeWidth="5" />
      ))}
      <rect x="270" y="190" width="10" height="45" rx="3" fill="#B8860B" stroke={dark} strokeWidth="2" transform="rotate(20 275 212)" />
    </g>
  );
};

const LaVyshyvankaLaCamisaBordadaUcraniana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 120 L170 100 L190 90 L220 90 L240 100 L240 120 L270 140 L255 165 L240 150 L240 235 L170 235 L170 150 L155 165 L140 140 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M190 90 Q205 108 220 90" fill="none" stroke={accentColor} strokeWidth="4" />
      {[178, 232].map((x) => (
        <rect key={x} x={x - 5} y="110" width="10" height="40" fill={accentColor} opacity="0.8" />
      ))}
      <rect x="185" y="215" width="40" height="14" fill={accentColor} opacity="0.85" />
      {[190, 200, 210, 220].map((x) => (
        <rect key={x} x={x} y="217" width="4" height="10" fill="#1A1A1A" opacity="0.6" />
      ))}
    </g>
  );
};

const ChernobilLaNaturalezaQueReclamoLaZona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="130" width="70" height="100" fill="#8B8378" stroke={dark} strokeWidth="2.5" />
      <rect x="210" y="150" width="55" height="80" fill="#9E9A92" stroke={dark} strokeWidth="2.5" />
      {[[130, 150], [155, 180], [140, 200], [220, 170], [240, 200]].map(([x, y]) => (
        <path key={x + "-" + y} d={`M${x} ${y} Q${x + 15} ${y - 10} ${x + 5} ${y + 20} Q${x - 5} ${y + 35} ${x + 10} ${y + 45}`} fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M100 235 L115 210 L130 220 L150 200 L165 218 L180 235 Z" fill="#5B5B5B" stroke={dark} strokeWidth="2.5" />
      <polygon points="119,207 116,196 123,203" fill="#5B5B5B" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosCosacosDeZaporiyiaJinetesLibres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 225 Q110 195 135 185 Q140 165 165 168 Q195 155 225 168 Q255 175 260 200 Q265 220 245 228 L135 230 Z" fill="#5C3A21" stroke={dark} strokeWidth="3" />
      <path d="M165 168 Q175 140 200 130 Q210 128 208 138 Q205 148 195 155" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <path d="M120 225 L108 245 M150 230 L148 250 M215 230 L217 250 M245 228 L250 248" stroke="#3E2E24" strokeWidth="4" strokeLinecap="round" />
      <path d="M165 168 Q160 155 168 145" fill="none" stroke="#1A1A1A" strokeWidth="3" opacity="0.6" />
      <circle cx="195" cy="150" r="14" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M195 138 Q195 118 202 108" stroke="#1A1A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M180 172 Q195 160 215 172 L212 210 L183 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="215" y1="180" x2="255" y2="150" stroke="#C9C9C9" strokeWidth="3.5" strokeLinecap="round" />
    </g>
  );
};

const ElBorschtPatrimonioCulturalDeUcrania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="210" rx="70" ry="22" fill="#8B7355" stroke={dark} strokeWidth="3" />
      <path d="M140 205 Q140 165 205 165 Q270 165 270 205 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 190 Q205 178 240 190 Q220 198 205 196 Q190 198 170 190 Z" fill="#F5F0E6" opacity="0.9" />
      {[[185, 175], [220, 178]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill="#3F7D2E" opacity="0.8" />
      ))}
    </g>
  );
};

const LaCatedralDeSantaSofiaDeKiev: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const domes = [
    { x: 150, h: 30 },
    { x: 205, h: 42 },
    { x: 260, h: 30 },
  ];
  return (
    <g>
      <rect x="120" y="185" width="170" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {domes.map((d) => (
        <g key={d.x}>
          <rect x={d.x - 12} y={185 - d.h} width="24" height={d.h} fill="#F5F0E6" stroke={dark} strokeWidth="2" />
          <path d={`M${d.x - 14} ${185 - d.h} Q${d.x} ${185 - d.h - 28} ${d.x + 14} ${185 - d.h} Z`} fill="#D9A521" stroke={dark} strokeWidth="2" />
          <line x1={d.x} y1={185 - d.h - 28} x2={d.x} y2={185 - d.h - 38} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {[145, 175, 205, 235, 265].map((x) => (
        <rect key={x} x={x - 6} y="200" width="12" height="40" fill={accentColor} opacity="0.5" />
      ))}
    </g>
  );
};

const LaBanduraYLosBardosKobzari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const strings = [155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255];
  return (
    <g>
      <ellipse cx="205" cy="185" rx="70" ry="55" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      {strings.map((x) => (
        <line key={x} x1={x} y1="140" x2={x + 15} y2="230" stroke="#D9C9A3" strokeWidth="1.8" />
      ))}
      <rect x="185" y="95" width="14" height="50" fill="#5C3A21" stroke={dark} strokeWidth="2.5" transform="rotate(-8 192 120)" />
      <circle cx="205" cy="185" r="18" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElHopakLaDanzaNacionalDeUcrania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="16" fill="#D9B48A" stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="90" width="40" height="14" fill="#1E5631" stroke={dark} strokeWidth="2" />
      <path d="M188 148 Q205 138 222 148 L228 180 L182 180 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M188 178 Q140 185 115 220" fill="none" stroke="#D9B48A" strokeWidth="16" strokeLinecap="round" />
      <path d="M222 178 Q280 175 300 200" fill="none" stroke="#D9B48A" strokeWidth="16" strokeLinecap="round" />
      <path d="M115 220 L100 235 M300 200 L318 195" stroke="#5C3A21" strokeWidth="6" strokeLinecap="round" />
      <path d="M195 175 Q170 200 175 235" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" opacity="0.85" />
    </g>
  );
};

const LosGirasolesElPaisajeDoradoDeUcrania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flowers = [
    [130, 130, 26], [190, 100, 32], [250, 125, 28], [160, 175, 22], [225, 180, 24], [290, 160, 20],
  ];
  return (
    <g>
      <rect x="90" y="80" width="230" height="90" fill="#1B5FAE" opacity="0.25" />
      {flowers.map(([x, y, r], i) => (
        <g key={i}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
            <ellipse key={rot} cx={x} cy={y - r * 0.65} rx="6" ry="12" fill={accentColor} transform={`rotate(${rot} ${x} ${y})`} />
          ))}
          <circle cx={x} cy={y} r={r * 0.35} fill="#5C3A21" stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <rect x="90" y="220" width="230" height="30" fill="#3F7D2E" opacity="0.5" />
    </g>
  );
};

const TRYPILLIA_HOUSES: [number, number][] = [
  [205, 110], [255, 130], [275, 180], [255, 230], [205, 250],
  [155, 230], [135, 180], [155, 130],
];

const LaCulturaDeTrypillia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="180" r="95" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
      {TRYPILLIA_HOUSES.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 14} y={y - 10} width="28" height="20" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 16},${y - 10} ${x},${y - 22} ${x + 16},${y - 10}`} fill={dark} opacity="0.7" />
        </g>
      ))}
      <circle cx="205" cy="180" r="20" fill="#8B7355" opacity="0.5" />
    </g>
  );
};

const TarasShevchenkoElPoetaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* open book */}
      <path d="M120 220 L200 205 L200 165 L120 180 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M280 220 L200 205 L200 165 L280 180 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[178, 190].map((y) => (
        <line key={y} x1="130" y1={y} x2="192" y2={y - 8} stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      {/* long mustache */}
      <path d="M235 130 Q255 118 275 130 Q260 122 250 128 Q240 122 225 132 Q215 120 195 130 Q210 122 220 128" fill={dark} />
      {/* fur cap */}
      <ellipse cx="245" cy="105" rx="35" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const LvivYSuCascoHistoricoMulticultural: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* town hall tower */}
      <rect x="185" y="110" width="40" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="180,110 205,80 230,110" fill={dark} />
      {/* colorful rooftops flanking */}
      {[[120, 175, 45], [255, 165, 55]].map(([x, y, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width="50" height={h as number} fill={i === 0 ? tint(accentColor, 0.3) : shade(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 3},${y} ${(x as number) + 25},${(y as number) - 18} ${(x as number) + 53},${y}`} fill={dark} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const ElPolloALaKiev: IllustrationComponent = () => {
  const gold = "#D9A441";
  const goldDark = shade(gold, 0.35);
  const butter = "#F4D35E";
  return (
    <g>
      {/* breaded chicken breast, sliced */}
      <path d="M140 195 Q135 165 165 155 Q195 145 210 165 Q220 180 205 195 L200 235 L145 235 Z" fill={gold} stroke={goldDark} strokeWidth="3" />
      <line x1="175" y1="160" x2="175" y2="235" stroke={goldDark} strokeWidth="2" strokeDasharray="3 3" />
      {/* melted butter oozing */}
      <path d="M175 200 Q195 210 210 225 Q220 235 215 245" fill="none" stroke={butter} strokeWidth="6" strokeLinecap="round" />
      <circle cx="215" cy="248" r="6" fill={butter} />
    </g>
  );
};

const LaPinturaDecorativaDePetrykivka: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="110" width="190" height="130" fill="#FBFBFB" stroke={dark} strokeWidth="2.5" />
      <path d="M200 230 Q195 190 200 150 Q205 120 200 100" fill="none" stroke="#4A7C59" strokeWidth="3" />
      {[[170, 150], [230, 170], [180, 195], [220, 130]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="16" ry="10" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.35)} stroke={dark} strokeWidth="1.5" transform={`rotate(${i * 35} ${x} ${y})`} />
      ))}
      <circle cx="200" cy="175" r="8" fill="#F4D35E" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosHutsulesYLaTrembitaDeLosCarpatos: IllustrationComponent = ({ accentColor }) => {
  const wood = "#8B5A2B";
  return (
    <g>
      {/* mountainside */}
      <path d="M90 240 L160 130 L230 240 Z" fill={accentColor} opacity="0.5" />
      {/* long wooden trembita horn leaning */}
      <path d="M120 235 L280 105" stroke={wood} strokeWidth="12" strokeLinecap="round" />
      <path d="M270 100 L295 100 L280 115 Z" fill={shade(wood, 0.2)} />
      <ellipse cx="120" cy="235" rx="10" ry="7" fill={shade(wood, 0.3)} />
    </g>
  );
};

const ElKyivskyiTortLaTortaDeKiev: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5F0E6";
  const cocoa = "#5C3A21";
  return (
    <g>
      {/* layered cake slice */}
      <path d="M140 235 L140 200 L270 170 L270 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M140 200 L270 170" fill="none" stroke={cream} strokeWidth="10" />
      <path d="M140 218 L270 188" fill="none" stroke={cream} strokeWidth="8" />
      {/* cocoa dusting */}
      {[[160, 190], [190, 183], [220, 178], [250, 172]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2" fill={cocoa} opacity="0.7" />
      ))}
    </g>
  );
};

const LosVarenykyEmpanadillasUcranianas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="225" rx="90" ry="18" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      {[[150, 205], [190, 195], [230, 205], [270, 195]].map(([x, y], i) => (
        <path key={i} d={`M${(x as number) - 22} ${y} Q${x} ${(y as number) - 16} ${(x as number) + 22} ${y} Q${x} ${(y as number) + 12} ${(x as number) - 22} ${y} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      <circle cx="205" cy="175" r="14" fill="#FBFBFB" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const MalankaLaMascaradaDeAnoNuevo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const fur = "#8B7355";
  return (
    <g>
      {/* furry goat mask */}
      <ellipse cx="205" cy="180" rx="45" ry="55" fill={fur} stroke={dark} strokeWidth="3" />
      <path d="M180 140 Q170 110 155 100 Q165 130 178 150 M230 140 Q240 110 255 100 Q245 130 232 150" fill="none" stroke="#F5F0E6" strokeWidth="6" strokeLinecap="round" />
      <circle cx="190" cy="175" r="5" fill="#1A1A1A" />
      <circle cx="220" cy="175" r="5" fill="#1A1A1A" />
      {/* ribbons */}
      {[[130, 220], [280, 220]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${(y as number) - 20} Q${(x as number) + (i === 0 ? -10 : 10)} ${y} ${x} ${(y as number) + 20}`} fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      ))}
    </g>
  );
};

const ElUcranianoUnIdiomaEslavoPropio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* open book */}
      <path d="M120 230 L200 215 L200 155 L120 170 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M280 230 L200 215 L200 155 L280 170 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <text x="140" y="200" fontSize="30" fontWeight="700" fill={accentColor}>
        Ї
      </text>
      <text x="220" y="200" fontSize="30" fontWeight="700" fill={dark}>
        і
      </text>
      {/* pencil crossing out a line */}
      <line x1="130" y1="185" x2="190" y2="180" stroke="#C1272D" strokeWidth="3" opacity="0.8" />
      <line x1="240" y1="245" x2="270" y2="215" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
      <path d="M270 215 L278 207 L282 218 Z" fill={dark} />
    </g>
  );
};

export const ukraineIllustrations: Record<string, IllustrationDefinition> = {
  "el-kyiv-pechersk-lavra-monasterio-de-las-cuevas": { component: ElKyivPecherskLavraMonasterioDeLasCuevas },
  "la-pysanka-el-huevo-de-pascua-ucraniano": { component: LaPysankaElHuevoDePascuaUcraniano },
  "la-vyshyvanka-la-camisa-bordada-ucraniana": { component: LaVyshyvankaLaCamisaBordadaUcraniana },
  "chernobil-la-naturaleza-que-reclamo-la-zona": { component: ChernobilLaNaturalezaQueReclamoLaZona },
  "los-cosacos-de-zaporiyia-jinetes-libres": { component: LosCosacosDeZaporiyiaJinetesLibres },
  "el-borscht-patrimonio-cultural-de-ucrania": { component: ElBorschtPatrimonioCulturalDeUcrania },
  "la-catedral-de-santa-sofia-de-kiev": { component: LaCatedralDeSantaSofiaDeKiev },
  "la-bandura-y-los-bardos-kobzari": { component: LaBanduraYLosBardosKobzari },
  "el-hopak-la-danza-nacional-de-ucrania": { component: ElHopakLaDanzaNacionalDeUcrania },
  "los-girasoles-el-paisaje-dorado-de-ucrania": { component: LosGirasolesElPaisajeDoradoDeUcrania },
  "la-cultura-de-trypillia": { component: LaCulturaDeTrypillia },
  "taras-shevchenko-el-poeta-nacional": { component: TarasShevchenkoElPoetaNacional },
  "lviv-y-su-casco-historico-multicultural": { component: LvivYSuCascoHistoricoMulticultural },
  "el-pollo-a-la-kiev": { component: ElPolloALaKiev },
  "la-pintura-decorativa-de-petrykivka": { component: LaPinturaDecorativaDePetrykivka },
  "los-hutsules-y-la-trembita-de-los-carpatos": { component: LosHutsulesYLaTrembitaDeLosCarpatos },
  "el-kyivskyi-tort-la-torta-de-kiev": { component: ElKyivskyiTortLaTortaDeKiev },
  "los-varenyky-empanadillas-ucranianas": { component: LosVarenykyEmpanadillasUcranianas },
  "malanka-la-mascarada-de-ano-nuevo": { component: MalankaLaMascaradaDeAnoNuevo },
  "el-ucraniano-un-idioma-eslavo-propio": { component: ElUcranianoUnIdiomaEslavoPropio },
};
