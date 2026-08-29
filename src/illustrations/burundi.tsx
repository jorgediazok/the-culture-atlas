import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LosTamborilerosQueCarganElTamborEnLaCabeza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  return (
    <g>
      {[[135, 220], [205, 235], [275, 220]].map(([x, y], i) => (
        <g key={x as number}>
          <ellipse cx={x} cy={(y as number) - 55} rx="26" ry="12" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="2.5" />
          <path d={`M${(x as number) - 26} ${(y as number) - 55} L${(x as number) - 22} ${y} Q${x} ${(y as number) + 8} ${(x as number) + 22} ${y} L${(x as number) + 26} ${(y as number) - 55}`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <ellipse cx={x} cy={y} rx="22" ry="9" fill={shade(accentColor, 0.2)} />
          <circle cx={x} cy={(y as number) - 80} r="9" fill={skin} />
          <path d={`M${(x as number) - 8} ${(y as number) - 72} L${x} ${(y as number) - 65} L${(x as number) + 8} ${(y as number) - 72} Z`} fill={skin} opacity={i === 1 ? 1 : 0.85} />
        </g>
      ))}
    </g>
  );
};

const TanganicaUnoDeLosLagosMasAntiguosDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={accentColor} opacity="0.85" />
      {[[105, 130], [140, 175], [180, 120], [220, 165], [260, 135], [295, 190], [120, 220]].map(([cx, cy], i) => (
        <path key={cx as number} d={`M${(cx as number) - 22} ${cy} Q${cx} ${(cy as number) - 12} ${(cx as number) + 22} ${cy} Q${cx} ${(cy as number) + 12} ${(cx as number) - 22} ${cy} Z`} fill="none" stroke={i % 2 === 0 ? light : dark} strokeWidth="2.5" opacity="0.6" />
      ))}
    </g>
  );
};

const LaPiramideQueMarcaUnaFuenteDelNilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#4A8F4E";
  const stone = "#B8A99A";
  return (
    <g>
      <path d="M90 245 Q160 200 205 220 Q250 200 320 245 Z" fill={green} opacity="0.6" />
      <polygon points="205,130 245,225 165,225" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="3" />
      <polygon points="205,130 245,225 205,225" fill={dark} opacity="0.4" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={190 + i * 4} y1={225 - i * 22} x2={220 - i * 4} y2={225 - i * 22} stroke={shade(stone, 0.4)} strokeWidth="1.5" opacity="0.5" />
      ))}
    </g>
  );
};

const GitegaUnaCapitalTrasladadaEn2019: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="145" y="165" width="120" height="75" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="140,165 205,130 270,165" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[170, 200, 230].map((x) => (
        <rect key={x} x={x - 10} y="185" width="20" height="35" fill={dark} opacity="0.5" />
      ))}
      <rect x="196" y="120" width="4" height="30" fill={dark} />
      <path d="M200 122 L225 128 L200 134 Z" fill="#C1272D" />
    </g>
  );
};

const ElCafeQueSostieneABuenaParteDelPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  const bean = "#6D4C41";
  return (
    <g>
      <path d="M150 235 Q140 190 165 160 Q190 135 220 140" fill="none" stroke="#5C3A1E" strokeWidth="6" strokeLinecap="round" />
      {[[165, 165], [185, 145], [205, 150], [220, 140]].map(([x, y], i) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 14} ${(y as number) - 10} ${(x as number) - 8} ${(y as number) - 26} Q${x} ${(y as number) - 20} ${(x as number) + 6} ${(y as number) - 8} Q${x} ${y} ${x} ${y} Z`} fill={green} stroke={dark} strokeWidth="1.5" opacity={1 - i * 0.05} />
      ))}
      {[[150, 225], [180, 235], [215, 228], [245, 235], [270, 222], [165, 210], [200, 215], [235, 212]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="10" ry="7" fill={bean} stroke={shade(bean, 0.3)} strokeWidth="1.5" transform={`rotate(20 ${x} ${y})`} />
      ))}
      {[[150, 225], [180, 235], [215, 228], [245, 235], [270, 222], [165, 210], [200, 215], [235, 212]].map(([x, y]) => (
        <line key={`s${x}`} x1={x} y1={(y as number) - 4} x2={x} y2={(y as number) + 4} stroke={shade(bean, 0.4)} strokeWidth="1.2" transform={`rotate(20 ${x} ${y})`} />
      ))}
    </g>
  );
};

const ElUmuganuroLaFiestaRealDeLaCosecha: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <path d="M205 235 L205 130" stroke="#8B5A2B" strokeWidth="4" />
      {[[205, 145], [205, 165], [205, 185], [205, 205]].map(([x, y]) => (
        <g key={y as number}>
          <ellipse cx={(x as number) - 14} cy={y} rx="10" ry="6" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.2" transform={`rotate(-20 ${x} ${y})`} />
          <ellipse cx={(x as number) + 14} cy={(y as number) + 8} rx="10" ry="6" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.2" transform={`rotate(20 ${x} ${y})`} />
        </g>
      ))}
      <path d="M255 240 Q250 210 275 195 Q300 210 295 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="275" cy="240" rx="22" ry="8" fill={dark} opacity="0.5" />
    </g>
  );
};

const ElInangaLaCitaraQueCantaAlabanzas: IllustrationComponent = ({ accentColor }) => {
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M110 200 Q150 175 205 178 Q265 180 300 210 Q265 225 205 222 Q150 220 110 200 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={140 + i * 22} y1="188" x2={140 + i * 22} y2="212" stroke={accentColor} strokeWidth="2" opacity="0.85" />
      ))}
    </g>
  );
};

const HipopotamosYCocodrilosDondeElRioSeEncuentraConElLago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 200 Q205 190 320 200 L320 250 L90 250 Z" fill={water} />
      <path d="M140 210 Q135 195 155 192 Q175 190 178 205 L175 220 L145 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="150" cy="198" r="3" fill="#1A1A1A" />
      <circle cx="165" cy="198" r="3" fill="#1A1A1A" />
      <path d="M235 215 Q230 205 250 202 L285 200 Q295 200 293 208 L288 218 L245 220 Z" fill="#4A8F4E" stroke={dark} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${250 + i * 12} 202 L${253 + i * 12} 193`} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const UnaDeLasPoblacionesMasDensasDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M90 245 Q205 195 320 245 L320 250 L90 250 Z" fill={accentColor} opacity="0.4" />
      {[[110, 225, 30], [150, 210, 34], [190, 195, 30], [230, 205, 34], [270, 220, 30], [130, 240, 26], [250, 238, 28]].map(([x, y, w], i) => (
        <g key={x as number}>
          <rect x={(x as number) - (w as number) / 2} y={y} width={w} height="24" fill={i % 2 === 0 ? light : dark} stroke={dark} strokeWidth="1.5" />
          <polygon points={`${(x as number) - (w as number) / 2 - 3},${y} ${x},${(y as number) - 14} ${(x as number) + (w as number) / 2 + 3},${y}`} fill={dark} />
        </g>
      ))}
    </g>
  );
};

const ElConsejoDeSabiosQueResuelveDisputas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#6B4423";
  return (
    <g>
      {[-25, 0, 25].map((deg) => (
        <line key={deg} x1="205" y1="235" x2="205" y2="130" stroke={wood} strokeWidth="6" strokeLinecap="round" transform={`rotate(${deg} 205 235)`} />
      ))}
      {[-25, 0, 25].map((deg) => (
        <circle key={`k${deg}`} cx="205" cy="130" r="6" fill={accentColor} stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 205 235)`} />
      ))}
      <ellipse cx="205" cy="238" rx="60" ry="10" fill={dark} opacity="0.3" />
    </g>
  );
};

const UrwarwaCervezaDeBanana: IllustrationComponent = ({ accentColor }) => {
  const clay = "#B5651D";
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M160 240 Q150 200 175 180 Q205 165 235 180 Q260 200 250 240 Z" fill={clay} stroke={shade(clay, 0.3)} strokeWidth="3" />
      <ellipse cx="205" cy="180" rx="45" ry="14" fill={shade(clay, 0.15)} stroke={shade(clay, 0.3)} strokeWidth="2.5" />
      <path d="M185 178 Q160 150 145 120" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <path d="M225 178 Q250 150 265 120" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <circle cx="140" cy="112" r="13" fill={skin} />
      <circle cx="270" cy="112" r="13" fill={skin} />
    </g>
  );
};

const ParqueNacionalDeKibira: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leaf = tint(accentColor, 0.3);
  const fur = "#4A3428";
  const face = "#C9A27E";
  return (
    <g>
      {[
        [110, 110, 40],
        [170, 90, 45],
        [240, 95, 42],
        [300, 120, 36],
        [130, 160, 38],
        [270, 165, 34],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x as number} cy={y as number} r={r as number} fill={i % 2 === 0 ? accentColor : leaf} opacity="0.5" />
      ))}
      <rect x="120" y="185" width="180" height="10" rx="5" fill="#6B4423" />
      <circle cx="205" cy="168" r="22" fill={fur} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="210" rx="34" ry="32" fill={fur} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="174" rx="13" ry="11" fill={face} />
      <circle cx="199" cy="170" r="2.5" fill="#1A1A1A" />
      <circle cx="211" cy="170" r="2.5" fill="#1A1A1A" />
      <path d="M196 182 Q205 187 214 182" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <path d="M180 200 Q165 195 168 188" fill="none" stroke={fur} strokeWidth="12" strokeLinecap="round" />
      <path d="M230 200 Q245 195 242 188" fill="none" stroke={fur} strokeWidth="12" strokeLinecap="round" />
      <path d="M190 230 Q185 248 195 255" fill="none" stroke={fur} strokeWidth="10" strokeLinecap="round" />
      <path d="M220 230 Q225 248 215 255" fill="none" stroke={fur} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

export const burundiIllustrations: Record<string, IllustrationDefinition> = {
  "los-tamborileros-que-cargan-el-tambor-en-la-cabeza": { component: LosTamborilerosQueCarganElTamborEnLaCabeza },
  "tanganica-uno-de-los-lagos-mas-antiguos-del-mundo": { component: TanganicaUnoDeLosLagosMasAntiguosDelMundo },
  "la-piramide-que-marca-una-fuente-del-nilo": { component: LaPiramideQueMarcaUnaFuenteDelNilo },
  "gitega-una-capital-trasladada-en-2019": { component: GitegaUnaCapitalTrasladadaEn2019 },
  "el-cafe-que-sostiene-a-buena-parte-del-pais": { component: ElCafeQueSostieneABuenaParteDelPais },
  "el-umuganuro-la-fiesta-real-de-la-cosecha": { component: ElUmuganuroLaFiestaRealDeLaCosecha },
  "el-inanga-la-citara-que-canta-alabanzas": { component: ElInangaLaCitaraQueCantaAlabanzas },
  "hipopotamos-y-cocodrilos-donde-el-rio-se-encuentra-con-el-lago": { component: HipopotamosYCocodrilosDondeElRioSeEncuentraConElLago },
  "una-de-las-poblaciones-mas-densas-de-africa": { component: UnaDeLasPoblacionesMasDensasDeAfrica },
  "el-consejo-de-sabios-que-resuelve-disputas": { component: ElConsejoDeSabiosQueResuelveDisputas },
  "urwarwa-cerveza-de-banana": { component: UrwarwaCervezaDeBanana },
  "parque-nacional-de-kibira": { component: ParqueNacionalDeKibira },
};
