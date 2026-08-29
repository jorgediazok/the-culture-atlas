import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Persepolis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* elevated stone platform */}
      <rect x="95" y="220" width="225" height="20" fill={dark} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={100 + i * 8} y={225 + i * 5} width={215 - i * 16} height="4" fill={shade(dark, 0.15)} />
      ))}
      {/* columns with carved capitals */}
      {[130, 175, 220, 265].map((x) => (
        <g key={x}>
          <rect x={x} y="120" width="16" height="100" fill={accentColor} stroke={dark} strokeWidth="1.5" />
          <rect x={x - 6} y="108" width="28" height="14" fill={light} stroke={dark} strokeWidth="1.5" />
          {[135, 155, 175, 195].map((y) => (
            <line key={y} x1={x} y1={y} x2={x + 16} y2={y} stroke={dark} strokeWidth="1" opacity="0.3" />
          ))}
        </g>
      ))}
    </g>
  );
};

const PoesiaPersa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const red = "#C1272D";
  return (
    <g>
      {/* open book */}
      <path d="M205 150 L120 165 L120 225 L205 215 Z" fill={accentColor} />
      <path d="M205 150 L290 165 L290 225 L205 215 Z" fill={dark} />
      <line x1="205" y1="150" x2="205" y2="215" stroke={light} strokeWidth="2" />
      {[170, 185, 200].map((y) => (
        <line key={y} x1="135" y1={y} x2="190" y2={y - 3} stroke={light} strokeWidth="1.5" opacity="0.7" />
      ))}
      {/* rose beside it */}
      <path d="M255 200 L255 240" stroke="#4A8F4E" strokeWidth="4" />
      <circle cx="255" cy="185" r="18" fill={red} />
      <circle cx="255" cy="185" r="10" fill={shade(red, 0.15)} />
    </g>
  );
};

const AlfombrasPersas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const red = "#8B2942";
  return (
    <g>
      <rect x="105" y="105" width="200" height="140" fill={red} stroke={dark} strokeWidth="3" />
      <rect x="120" y="120" width="170" height="110" fill="none" stroke={gold} strokeWidth="4" />
      <path d="M205 145 L225 175 L205 205 L185 175 Z" fill={gold} />
      <circle cx="205" cy="175" r="10" fill={accentColor} />
      {[[140, 140], [270, 140], [140, 210], [270, 210]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="10" fill={gold} opacity="0.8" />
      ))}
    </g>
  );
};

const Nowruz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  const red = "#C1272D";
  return (
    <g>
      {/* table */}
      <rect x="105" y="195" width="215" height="12" fill={dark} />
      <rect x="115" y="207" width="10" height="35" fill={dark} />
      <rect x="290" y="207" width="10" height="35" fill={dark} />
      {/* wheat/green sprouts */}
      <path d="M150 195 Q145 170 150 145 M158 195 Q163 172 158 148" stroke={green} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M240 195 Q235 168 240 142 M248 195 Q253 170 248 146" stroke={green} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* red apple */}
      <circle cx="205" cy="175" r="22" fill={red} />
      <path d="M205 153 Q200 145 205 140" stroke="#4A8F4E" strokeWidth="3" fill="none" />
    </g>
  );
};

const CineIrani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="115" y="150" width="120" height="90" fill={dark} />
      <path d="M115 150 L235 150 L225 122 L105 122 Z" fill={accentColor} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={108 + i * 24} y="122" width="12" height="28" fill={i % 2 === 0 ? "#1A1A1A" : "#F5F0E6"} transform="skewX(-20)" />
      ))}
      <rect x="130" y="175" width="90" height="10" fill={light} opacity="0.6" />
      <circle cx="280" cy="195" r="40" fill="none" stroke={dark} strokeWidth="8" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <circle key={deg} cx="280" cy="168" r="8" fill={dark} transform={`rotate(${deg} 280 195)`} />
      ))}
    </g>
  );
};

const JardinesPersas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="105" y="105" width="200" height="140" fill={accentColor} opacity="0.5" />
      <rect x="195" y="105" width="20" height="140" fill={water} />
      <rect x="105" y="165" width="200" height="20" fill={water} />
      {[[150, 130], [255, 130], [150, 220], [255, 220]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="18" fill={dark} opacity="0.6" />
      ))}
    </g>
  );
};

const Zoroastrismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      <path d="M155 240 L165 195 L245 195 L255 240 Z" fill={dark} />
      <rect x="170" y="220" width="70" height="12" fill={shade(dark, 0.2)} />
      <ellipse cx="205" cy="195" rx="45" ry="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M205 195 Q190 170 200 145 Q205 155 205 145 Q210 155 210 145 Q220 170 205 195 Z" fill={flame} />
    </g>
  );
};

const Azafran: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const purple = "#8B5FBF";
  const red = "#C1272D";
  return (
    <g>
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse key={deg} cx="205" cy="150" rx="14" ry="34" fill={purple} transform={`rotate(${deg} 205 195)`} />
      ))}
      <circle cx="205" cy="195" r="16" fill={accentColor} />
      {[-15, 0, 15].map((deg) => (
        <line key={deg} x1="205" y1="195" x2="205" y2="155" stroke={red} strokeWidth="4" strokeLinecap="round" transform={`rotate(${deg} 205 195)`} />
      ))}
      <line x1="205" y1="195" x2="205" y2="240" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const AzulejosIsfahan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const teal = "#1D8FA5";
  const gold = "#D4A017";
  return (
    <g>
      <path d="M115 235 L115 175 Q115 120 205 105 Q295 120 295 175 L295 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect key={`${row}-${col}`} x={130 + col * 32} y={130 + row * 24} width="26" height="20" fill={(row + col) % 2 === 0 ? teal : gold} opacity="0.85" />
        ))
      )}
    </g>
  );
};

const CiroElGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 235 L155 130 Q155 118 175 118 L235 118 Q255 118 255 130 L255 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="130" rx="50" ry="12" fill={light} stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="235" rx="50" ry="12" fill={dark} />
      {[150, 165, 180, 195, 210].map((y) => (
        <g key={y}>
          {[170, 190, 210, 230].map((x) => (
            <line key={x} x1={x} y1={y} x2={x + 6} y2={y + 4} stroke={dark} strokeWidth="1.5" opacity="0.6" />
          ))}
        </g>
      ))}
    </g>
  );
};

const Zurkhaneh: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C9946B";
  const wood = "#6B4A2F";
  return (
    <g>
      {/* circular pit */}
      <ellipse cx="205" cy="225" rx="110" ry="20" fill={accentColor} opacity="0.25" stroke={dark} strokeWidth="2" />
      {/* athlete */}
      <circle cx="205" cy="150" r="18" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M186 165 Q205 156 224 165 L230 220 L180 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* arms raised holding clubs */}
      <path d="M190 172 Q160 165 150 130" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <path d="M220 172 Q250 165 260 130" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      {/* wooden clubs (meels) */}
      <path d="M150 130 L140 95 Q150 88 160 95 L152 130 Z" fill={wood} stroke={dark} strokeWidth="2" />
      <path d="M260 130 L250 95 Q260 88 270 95 L262 130 Z" fill={wood} stroke={dark} strokeWidth="2" />
      {/* legs */}
      <line x1="192" y1="216" x2="185" y2="245" stroke={dark} strokeWidth="10" strokeLinecap="round" />
      <line x1="218" y1="216" x2="225" y2="245" stroke={dark} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const LosQanatsIngenieriaSubterranea: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = tint(accentColor, 0.5);
  const water = "#3D8FB0";
  return (
    <g>
      {/* ground/desert surface */}
      <rect x="85" y="150" width="235" height="20" fill={sand} stroke={dark} strokeWidth="2" />
      {/* small surface mounds marking shafts */}
      {[130, 180, 230, 280].map((x) => (
        <ellipse key={x} cx={x} cy="148" rx="14" ry="6" fill={dark} opacity="0.3" />
      ))}
      {/* vertical shaft */}
      <rect x="196" y="150" width="18" height="70" fill={dark} opacity="0.5" />
      {/* underground sloped tunnel */}
      <path d="M110 235 Q205 210 300 220" fill="none" stroke={dark} strokeWidth="14" strokeLinecap="round" opacity="0.6" />
      <path d="M110 235 Q205 210 300 220" fill="none" stroke={water} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const NocheDeYalda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#4A7A52";
  const paper = "#F5F0E6";
  return (
    <g>
      {/* watermelon slice */}
      <path d="M120 235 Q120 175 190 175 Q190 235 120 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M132 225 Q132 190 178 190" fill="none" stroke="#F5EFE0" strokeWidth="6" opacity="0.8" />
      {[
        [150, 205],
        [165, 215],
        [145, 220],
      ].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="3" ry="4" fill="#1A1A1A" />
      ))}
      {/* pomegranate */}
      <circle cx="245" cy="205" r="30" fill="#8B1A1A" stroke={dark} strokeWidth="2.5" />
      <path d="M235 178 L245 168 L255 178 Z" fill={green} />
      {/* poetry book + candle */}
      <path d="M270 225 L320 220 L320 245 L270 250 Z" fill={paper} stroke={dark} strokeWidth="2" />
      <rect x="150" y="150" width="6" height="25" fill={dark} />
      <path d="M153 150 Q149 140 153 132" stroke="#F4A300" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  );
};

const TaarofLaCortesiaPersa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  return (
    <g>
      {/* doorway */}
      <path d="M195 90 L195 240 M215 90 L215 240 M195 90 Q205 78 215 90" fill="none" stroke={dark} strokeWidth="3" opacity="0.4" />
      {/* person 1 */}
      <circle cx="150" cy="160" r="16" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M134 174 Q150 166 166 174 L172 230 L128 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M166 180 Q188 190 195 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* person 2 */}
      <circle cx="260" cy="160" r="16" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M244 174 Q260 166 276 174 L282 230 L238 230 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <path d="M244 180 Q222 190 215 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const MiniaturaPersa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const paper = "#F0E4D0";
  const gold = "#D4A017";
  return (
    <g>
      {/* manuscript page */}
      <rect x="100" y="100" width="210" height="150" fill={paper} stroke={dark} strokeWidth="3" />
      {/* decorative border */}
      <rect x="112" y="112" width="186" height="126" fill="none" stroke={gold} strokeWidth="2" />
      {/* tiny detailed scene: garden with figure */}
      <path d="M130 220 Q205 190 280 220" fill="none" stroke="#4A7A52" strokeWidth="6" opacity="0.6" />
      <circle cx="180" cy="180" r="10" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M172 190 Q180 185 188 190 L190 215 L170 215 Z" fill={gold} stroke={dark} strokeWidth="1.5" />
      <path d="M230 175 Q245 150 260 175 Q245 195 230 175 Z" fill="#4A7A52" opacity="0.7" />
      {/* text lines below */}
      {[130, 140].map((y) => (
        <line key={y} x1="125" y1={y + 95} x2="285" y2={y + 95} stroke={dark} strokeWidth="1" opacity="0.35" />
      ))}
    </g>
  );
};

const LosBadgirTorresDeVientoDeYazd: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const clay = tint(accentColor, 0.2);
  return (
    <g>
      {/* mudbrick house */}
      <rect x="110" y="190" width="190" height="60" fill={clay} stroke={dark} strokeWidth="2.5" />
      {/* wind tower */}
      <rect x="185" y="100" width="40" height="95" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* vertical openings on the tower */}
      {[192, 205, 218].map((x) => (
        <rect key={x} x={x} y="112" width="8" height="70" fill={dark} opacity="0.5" />
      ))}
      {/* small windows on the house */}
      <rect x="130" y="205" width="20" height="26" fill={dark} opacity="0.4" />
      <rect x="260" y="205" width="20" height="26" fill={dark} opacity="0.4" />
    </g>
  );
};

const LaCasaDeTePersa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const tea = "#8B4513";
  return (
    <g>
      {/* samovar */}
      <path d="M170 235 L170 170 Q170 145 205 145 Q240 145 240 170 L240 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="145" rx="20" ry="8" fill={gold} />
      <rect x="197" y="120" width="16" height="26" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="118" r="7" fill={gold} />
      {/* tap */}
      <path d="M170 210 Q150 210 148 225" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      {/* tea glasses with sugar cubes */}
      {[270, 300].map((x) => (
        <g key={x}>
          <path d={`M${x - 12} 200 L${x + 12} 200 L${x + 9} 235 L${x - 9} 235 Z`} fill={tea} opacity="0.7" stroke={dark} strokeWidth="1.5" />
          <rect x={x - 6} y="188" width="12" height="10" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
        </g>
      ))}
    </g>
  );
};

const ElTahdigElArrozDorado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const plate = "#F5F0E6";
  return (
    <g>
      {/* plate */}
      <ellipse cx="205" cy="210" rx="95" ry="24" fill={plate} stroke={dark} strokeWidth="2.5" />
      {/* golden crispy rice disc */}
      <ellipse cx="205" cy="195" rx="75" ry="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="188" rx="60" ry="20" fill={tint(accentColor, 0.3)} opacity="0.7" />
      {/* crispy texture cracks */}
      {[
        [170, 190],
        [205, 180],
        [240, 195],
      ].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} L${x + 10} ${y + 8}`} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
    </g>
  );
};

const LosPistachosDeIran: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const shell = "#E8DCC8";
  const bag = "#8B5A2B";
  return (
    <g>
      {/* cloth bag */}
      <path d="M120 170 Q110 230 150 245 Q205 255 260 245 Q300 230 290 170 Z" fill={bag} stroke={dark} strokeWidth="2.5" />
      <path d="M150 170 Q205 155 260 170" fill="none" stroke={shade(bag, 0.2)} strokeWidth="6" />
      {/* spilling pistachios */}
      {[
        [160, 150],
        [190, 140],
        [220, 148],
        [175, 165],
        [240, 160],
        [205, 175],
      ].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="10" ry="7" fill={shell} stroke={dark} strokeWidth="1.5" transform={`rotate(${((i * 31) % 40) - 20} ${x} ${y})`} />
          <path d={`M${x} ${y - 3} L${x} ${y + 3}`} stroke={accentColor} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const ElBackgammonTableroMilenario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* board */}
      <rect x="100" y="120" width="210" height="120" fill={light} stroke={dark} strokeWidth="3" />
      {/* triangular points */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <polygon key={`t-${i}`} points={`${115 + i * 32},120 ${129 + i * 32},120 ${122 + i * 32},175`} fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <polygon key={`b-${i}`} points={`${115 + i * 32},240 ${129 + i * 32},240 ${122 + i * 32},185`} fill={i % 2 === 0 ? dark : accentColor} />
      ))}
      {/* pieces */}
      {[122, 186, 250].map((x) => (
        <circle key={x} cx={x} cy="135" r="8" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      ))}
      {[154, 218, 282].map((x) => (
        <circle key={x} cx={x} cy="225" r="8" fill="#1A1A1A" stroke={dark} strokeWidth="1.5" />
      ))}
      {/* dice */}
      <rect x="290" y="150" width="20" height="20" rx="3" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" transform="rotate(15 300 160)" />
      <rect x="270" y="165" width="20" height="20" rx="3" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" transform="rotate(-10 280 175)" />
    </g>
  );
};

export const iranIllustrations: Record<string, IllustrationDefinition> = {
  persepolis: { component: Persepolis },
  "poesia-persa": { component: PoesiaPersa },
  "alfombras-persas": { component: AlfombrasPersas },
  nowruz: { component: Nowruz },
  "cine-irani": { component: CineIrani },
  "jardines-persas": { component: JardinesPersas },
  zoroastrismo: { component: Zoroastrismo },
  azafran: { component: Azafran },
  "azulejos-isfahan": { component: AzulejosIsfahan },
  "ciro-el-grande": { component: CiroElGrande },
  zurkhaneh: { component: Zurkhaneh },
  "los-qanats-ingenieria-subterranea": { component: LosQanatsIngenieriaSubterranea },
  "noche-de-yalda": { component: NocheDeYalda },
  "taarof-la-cortesia-persa": { component: TaarofLaCortesiaPersa },
  "miniatura-persa": { component: MiniaturaPersa },
  "los-badgir-torres-de-viento-de-yazd": { component: LosBadgirTorresDeVientoDeYazd },
  "la-casa-de-te-persa": { component: LaCasaDeTePersa },
  "el-tahdig-el-arroz-dorado": { component: ElTahdigElArrozDorado },
  "los-pistachos-de-iran": { component: LosPistachosDeIran },
  "el-backgammon-tablero-milenario": { component: ElBackgammonTableroMilenario },
};
