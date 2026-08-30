import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RegistanSamarcanda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {[[130, 120, 45], [205, 105, 55], [280, 120, 45]].map(([x, y, h], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 30} y={y} width="60" height={(h as number) + 60} fill={i === 1 ? tint(accentColor, 0.15) : accentColor} stroke={dark} strokeWidth="2.5" />
          <path d={`M${(x as number) - 30} ${y} Q${x} ${(y as number) - 22} ${(x as number) + 30} ${y} Z`} fill={dark} />
          <ellipse cx={x} cy={(y as number) - 22} rx="14" ry="18" fill={accentColor} stroke={dark} strokeWidth="2" />
          <path d={`M${x} ${(y as number) - 40} L${x} ${(y as number) - 52}`} stroke={gold} strokeWidth="2.5" />
          <path d={`M${(x as number) - 22} ${(y as number) + 10} L${(x as number) - 22} ${(y as number) + 60} M${(x as number) + 22} ${(y as number) + 10} L${(x as number) + 22} ${(y as number) + 60}`} stroke={gold} strokeWidth="2" opacity="0.6" />
        </g>
      ))}
    </g>
  );
};

const AmirTimurTamerlan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const jade = "#2E7D5B";
  return (
    <g>
      <path d="M170 235 L165 155 Q163 120 205 112 Q247 120 245 155 L240 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M178 150 Q205 138 232 150 L226 175 Q205 168 184 175 Z" fill={jade} stroke={shade(jade, 0.3)} strokeWidth="2" />
      <ellipse cx="205" cy="130" rx="24" ry="20" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M182 122 L228 122 L205 105 Z" fill={dark} />
      <path d="M110 225 Q100 200 118 175 Q128 190 122 210 Q135 195 132 172" fill="none" stroke="#B0B8BF" strokeWidth="7" strokeLinecap="round" />
      <path d="M118 175 L108 165 L112 180 Z" fill="#8B5A2B" />
    </g>
  );
};

const MarDeAralDesastre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9BE8F";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={sand} opacity="0.6" />
      <path d="M140 235 L150 190 Q150 180 165 180 L245 180 Q255 180 258 195 L262 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="150" width="14" height="35" fill={dark} />
      <path d="M150 200 L262 200" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <path d="M105 235 L108 210 Q108 202 116 202 L128 202 Q135 202 136 212 L138 235 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2" transform="rotate(-8 120 220)" />
      {[[130, 210], [280, 205]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 10} ${(y as number) - 16} ${(x as number) + 22} ${y}`} fill="none" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      ))}
    </g>
  );
};

const PlovPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rice = "#F5EFE0";
  const carrot = "#E8912D";
  return (
    <g>
      <path d="M140 190 L140 215 Q140 235 205 238 Q270 235 270 215 L270 190 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="3" />
      <ellipse cx="205" cy="190" rx="65" ry="18" fill={rice} stroke={dark} strokeWidth="2.5" />
      {[[175, 186], [205, 182], [235, 188], [190, 194], [220, 192]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="8" ry="5" fill={i % 2 === 0 ? carrot : accentColor} opacity="0.85" />
      ))}
      <path d="M120 175 Q130 178 140 190 M290 175 Q280 178 270 190" fill="none" stroke="#B0AFA8" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M175 160 Q170 145 180 132 M235 160 Q240 145 230 132" fill="none" stroke="#E8E4DC" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const AtlasIkatSeda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#C1272D"];
  return (
    <g>
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <rect x={x - 20} y="110" width="40" height="130" fill={colors[i % colors.length]} opacity="0.85" />
          {[0, 1, 2, 3].map((row) => (
            <path key={row} d={`M${x - 16} ${125 + row * 30} Q${x} ${118 + row * 30} ${x + 16} ${125 + row * 30} Q${x} ${135 + row * 30} ${x - 16} ${125 + row * 30} Z`} fill={colors[(i + row + 1) % colors.length]} opacity="0.55" />
          ))}
        </g>
      ))}
      <rect x="110" y="105" width="200" height="10" fill={dark} opacity="0.5" />
    </g>
  );
};

const AlgodonOroBlanco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#8B7355" opacity="0.35" />
      {[[130, 210], [175, 205], [220, 212], [265, 206]].map(([x, y], i) => (
        <g key={x as number}>
          <line x1={x} y1={y} x2={x} y2={(y as number) - 30} stroke="#4A6741" strokeWidth="3" />
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 35} rx="9" ry="11" fill="#F5F0E6" stroke={shade("#F5F0E6", 0.25)} strokeWidth="1.5" transform={`rotate(${deg} ${x} ${(y as number) - 30})`} opacity={0.95 - i * 0.05} />
          ))}
        </g>
      ))}
      <circle cx="195" cy="150" r="9" fill={skin} />
      <path d="M186 160 Q195 155 204 160 L200 178 L190 178 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M204 165 Q215 172 220 190" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
    </g>
  );
};

const UlugbekObservatorio: IllustrationComponent = ({ accentColor }) => {
  const stone = "#8B8378";
  const night = "#1A2340";
  return (
    <g>
      <rect x="90" y="80" width="230" height="90" fill={night} opacity="0.5" />
      <circle cx="270" cy="110" r="10" fill="#F5F0E6" opacity="0.9" />
      <path d="M120 235 Q120 190 160 175 Q195 162 205 130 Q215 162 250 175 Q290 190 290 235 Z" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="3" />
      <path d="M205 130 L200 235 M210 130 L215 235" stroke={accentColor} strokeWidth="4" opacity="0.7" />
      <path d="M150 220 L260 220" stroke={shade(stone, 0.35)} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const PanSagradoNon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="180" rx="85" ry="55" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      <ellipse cx="205" cy="180" rx="65" ry="40" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.35" />
      <circle cx="205" cy="180" r="20" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <circle key={deg} cx="205" cy="160" r="3" fill={dark} opacity="0.6" transform={`rotate(${deg} 205 180)`} />
      ))}
    </g>
  );
};

const MetroTashkent: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const marble = "#E8DCC0";
  return (
    <g>
      <rect x="100" y="90" width="220" height="150" fill={marble} stroke={shade(marble, 0.3)} strokeWidth="3" />
      {[135, 205, 275].map((x) => (
        <g key={x}>
          <rect x={x - 10} y="105" width="20" height="120" fill={accentColor} stroke={dark} strokeWidth="2" />
          <ellipse cx={x} cy="102" rx="16" ry="7" fill={dark} opacity="0.6" />
        </g>
      ))}
      {[135, 205, 275].map((x) => (
        <g key={`c${x}`}>
          <line x1={x} y1="90" x2={x} y2="78" stroke={dark} strokeWidth="2" />
          <path d={`M${x - 12} 78 L${x + 12} 78 L${x} 65 Z`} fill="#F4C430" opacity="0.85" />
        </g>
      ))}
      <rect x="100" y="225" width="220" height="15" fill={dark} opacity="0.3" />
    </g>
  );
};

const DoblementeSinMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="165" r="85" fill="none" stroke={dark} strokeWidth="3" strokeDasharray="6 5" opacity="0.5" />
      <circle cx="205" cy="165" r="55" fill="none" stroke={dark} strokeWidth="3" strokeDasharray="6 5" opacity="0.6" />
      <path d="M175 150 Q205 135 235 150 Q245 165 235 180 Q205 195 175 180 Q165 165 175 150 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="165" r="6" fill={dark} />
    </g>
  );
};

const ItchanKalaLaCiudadAmuralladaDeJiva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mud = "#C9A26D";
  return (
    <g>
      {/* mud-brick wall */}
      <rect x="85" y="175" width="235" height="65" fill={mud} stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((row) => (
        <line key={row} x1="85" y1={190 + row * 17} x2="320" y2={190 + row * 17} stroke={shade(mud, 0.25)} strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* crenellations */}
      {[95, 120, 145, 260, 285, 310].map((x) => (
        <rect key={x} x={x} y="165" width="15" height="14" fill={mud} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* Kalta Minor truncated minaret, tapering cylinder */}
      <path d="M175 240 L180 110 Q205 100 230 110 L235 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* turquoise band pattern */}
      <line x1="190" y1="130" x2="220" y2="130" stroke="#F5F0E6" strokeWidth="3" opacity="0.6" />
      <line x1="188" y1="155" x2="222" y2="155" stroke="#F5F0E6" strokeWidth="3" opacity="0.6" />
      <line x1="186" y1="180" x2="224" y2="180" stroke="#F5F0E6" strokeWidth="3" opacity="0.6" />
      <ellipse cx="205" cy="110" rx="27" ry="9" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElSuzaniBordadoNupcialUzbeko: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5EFE0";
  return (
    <g>
      <rect x="95" y="95" width="220" height="160" fill={cream} stroke={dark} strokeWidth="3" />
      {[
        [150, 150],
        [260, 150],
        [150, 220],
        [260, 220],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="26" fill="none" stroke={accentColor} strokeWidth="5" />
          {[0, 45, 90, 135].map((deg) => (
            <line key={deg} x1={cx} y1={cy - 26} x2={cx} y2={cy + 26} stroke={accentColor} strokeWidth="4" transform={`rotate(${deg} ${cx} ${cy})`} opacity="0.7" />
          ))}
          <circle cx={cx} cy={cy} r="8" fill="#C1272D" />
        </g>
      ))}
      <path d="M205 150 Q230 185 205 220 Q180 185 205 150 Z" fill="#8FA05A" opacity="0.8" />
    </g>
  );
};

const LosMelonesQueLosEmperadoresMogolesAnoraban: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flesh = "#F4C430";
  return (
    <g>
      {/* stacked whole melons */}
      {[
        [150, 200, 30],
        [210, 195, 34],
        [270, 205, 28],
      ].map(([x, y, r]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx={r} ry={r * 0.85} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          {[-1, 0, 1].map((i) => (
            <path key={i} d={`M${x + i * (r / 2)} ${y - r * 0.8} Q${x + i * (r / 2) + 3} ${y} ${x + i * (r / 2)} ${y + r * 0.8}`} fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
          ))}
        </g>
      ))}
      {/* juicy slice in front */}
      <path d="M170 245 Q205 260 240 245 Q240 220 205 218 Q170 220 170 245 Z" fill={flesh} stroke={dark} strokeWidth="2.5" />
      <path d="M175 240 Q205 250 235 240" fill="none" stroke={accentColor} strokeWidth="6" opacity="0.7" />
      {[
        [190, 232],
        [205, 236],
        [220, 232],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2.5" fill="#8B5A2B" opacity="0.7" />
      ))}
    </g>
  );
};

const AlisherNavoiElPadreDeLaLiteraturaUzbeka: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const page = "#F5EFE0";
  return (
    <g>
      {/* open book */}
      <path d="M110 220 Q160 205 205 215 L205 155 Q160 145 110 160 Z" fill={page} stroke={dark} strokeWidth="2.5" />
      <path d="M300 220 Q250 205 205 215 L205 155 Q250 145 300 160 Z" fill={page} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <line x1="120" y1={172 + row * 13} x2="195" y2={168 + row * 13} stroke={dark} strokeWidth="1.5" opacity="0.4" />
          <line x1="215" y1={168 + row * 13} x2="290" y2={172 + row * 13} stroke={dark} strokeWidth="1.5" opacity="0.4" />
        </g>
      ))}
      {/* quill pen */}
      <path d="M225 165 L280 100 L288 108 L235 175 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M278 98 L292 84 L296 98 L286 112 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* ink drop */}
      <circle cx="235" cy="178" r="4" fill={dark} opacity="0.6" />
    </g>
  );
};

const ElShashmaqamLosSeisModosMusicales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* tanbur neck drawn first so the body absorbs the seam */}
      <rect x="198" y="80" width="10" height="110" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
      {/* small pear-shaped body */}
      <path d="M203 165 Q175 168 175 195 Q175 220 203 225 Q231 220 231 195 Q231 168 203 165 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="203" y1="85" x2="203" y2="220" stroke="#F5F0E6" strokeWidth="1.5" opacity="0.7" />
      {/* doira frame drum beside */}
      <circle cx="270" cy="205" r="42" fill="none" stroke={dark} strokeWidth="6" />
      <circle cx="270" cy="205" r="36" fill={tint(accentColor, 0.4)} opacity="0.7" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle key={deg} cx="270" cy="169" r="2.5" fill={dark} opacity="0.6" transform={`rotate(${deg} 270 205)`} />
      ))}
    </g>
  );
};

export const uzbekistanIllustrations: Record<string, IllustrationDefinition> = {
  "registan-samarcanda": { component: RegistanSamarcanda },
  "amir-timur-tamerlan": { component: AmirTimurTamerlan },
  "mar-de-aral-desastre": { component: MarDeAralDesastre },
  "plov-plato-nacional": { component: PlovPlatoNacional },
  "atlas-ikat-seda": { component: AtlasIkatSeda },
  "algodon-oro-blanco": { component: AlgodonOroBlanco },
  "ulugbek-observatorio": { component: UlugbekObservatorio },
  "pan-sagrado-non": { component: PanSagradoNon },
  "metro-tashkent": { component: MetroTashkent },
  "doblemente-sin-mar": { component: DoblementeSinMar },
  "itchan-kala-la-ciudad-amurallada-de-jiva": { component: ItchanKalaLaCiudadAmuralladaDeJiva },
  "el-suzani-bordado-nupcial-uzbeko": { component: ElSuzaniBordadoNupcialUzbeko },
  "los-melones-que-los-emperadores-mogoles-anoraban": { component: LosMelonesQueLosEmperadoresMogolesAnoraban },
  "alisher-navoi-el-padre-de-la-literatura-uzbeka": { component: AlisherNavoiElPadreDeLaLiteraturaUzbeka },
  "el-shashmaqam-los-seis-modos-musicales": { component: ElShashmaqamLosSeisModosMusicales },
};
