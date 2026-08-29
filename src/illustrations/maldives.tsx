import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MaldivasElPaisMasBajoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={accentColor} opacity="0.35" />
      <path d="M120 225 Q205 210 290 225 L290 235 Q205 222 120 235 Z" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <line x1="175" y1="225" x2="170" y2="150" stroke="#5C3A21" strokeWidth="5" />
      <path d="M170 150 Q140 145 130 165 M170 150 Q150 130 155 110 M170 150 Q195 140 205 155 M170 150 Q185 125 175 105" fill="none" stroke="#3F7D2E" strokeWidth="6" strokeLinecap="round" />
      <rect x="220" y="195" width="35" height="28" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <polygon points="215,195 237,178 260,195" fill="#B71C1C" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LosAtolonesDeCoralDeMaldivas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const islands: [number, number][] = [
    [205, 100], [255, 115], [285, 155], [285, 195], [255, 225], [205, 240], [155, 225], [125, 195], [125, 155], [155, 115],
  ];
  return (
    <g>
      <ellipse cx="205" cy="170" rx="90" ry="65" fill={tint(accentColor, 0.35)} opacity="0.6" />
      {islands.map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="14" ry="9" fill="#E8DCC0" stroke={dark} strokeWidth="2" />
      ))}
      <ellipse cx="205" cy="170" rx="90" ry="65" fill="none" stroke={accentColor} strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const ElMarDeEstrellasDeLaIslaVaadhoo: IllustrationComponent = ({ accentColor }) => {
  const dots: [number, number][] = [
    [120, 200], [150, 215], [180, 195], [210, 220], [240, 200], [270, 215], [130, 175], [200, 180], [260, 175], [165, 165], [225, 160],
  ];
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#0B1E3A" />
      <path d="M90 210 Q205 190 320 210 L320 250 L90 250 Z" fill={accentColor} opacity="0.5" />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.5 : 2} fill="#4FD8E8" opacity="0.9" />
      ))}
    </g>
  );
};

const ElDhoniElBarcoTradicionalMaldivo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="238" rx="120" ry="10" fill="#0E7C9E" opacity="0.5" />
      <path d="M130 220 Q140 195 190 195 L260 195 Q275 200 270 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 220 Q110 165 140 130 Q150 155 145 195" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="215" y1="195" x2="215" y2="115" stroke="#5C3A21" strokeWidth="5" />
      <path d="M215 120 L260 140 L215 150 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const MaldivasYLaCabanaSobreElAgua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="45" fill={accentColor} opacity="0.4" />
      <rect x="230" y="150" width="70" height="55" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <polygon points="222,150 265,125 308,150" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      {[240, 260, 280].map((x) => (
        <line key={x} x1={x} y1="205" x2={x} y2="225" stroke="#5C3A21" strokeWidth="4" />
      ))}
      <path d="M100 210 L230 190" stroke="#8B5A2B" strokeWidth="6" />
      {[110, 140, 170, 200].map((x) => (
        <line key={x} x1={x} y1="207" x2={x} y2="220" stroke="#5C3A21" strokeWidth="3" />
      ))}
    </g>
  );
};

const ElMasHuniDesayunoNacionalDeMaldivas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="175" cy="205" rx="65" ry="18" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <path d="M120 200 Q120 165 175 165 Q230 165 230 200 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[[145, 185], [170, 178], [195, 185], [155, 195], [185, 195], [210, 190]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={i % 3 === 0 ? "#C1440E" : i % 3 === 1 ? "#3F7D2E" : "#F5F0E6"} stroke={dark} strokeWidth="1" />
      ))}
      <ellipse cx="270" cy="215" rx="35" ry="12" fill="#D4941E" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ElThaanaElAlfabetoUnicoDeMaldivas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const rows = [125, 155, 185, 210];
  return (
    <g>
      <rect x="115" y="100" width="180" height="135" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {rows.map((y) => (
        <g key={y}>
          {[270, 240, 210, 180, 150].map((x) => (
            <g key={x}>
              <circle cx={x} cy={y} r="5" fill="none" stroke={accentColor} strokeWidth="2.2" />
              <line x1={x} y1={y - 5} x2={x} y2={y - 14} stroke={accentColor} strokeWidth="2.2" />
            </g>
          ))}
        </g>
      ))}
      <path d="M290 100 L290 235" stroke={dark} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
    </g>
  );
};

const LaMezquitaDeLosViernesTalladaEnCoral: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stones: [number, number][] = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 8; col++) {
      stones.push([120 + col * 22 + (row % 2 === 0 ? 0 : 11), 160 + row * 16]);
    }
  }
  return (
    <g>
      <rect x="115" y="155" width="180" height="85" fill="#B8B8A0" stroke={dark} strokeWidth="3" />
      {stones.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="20" height="14" fill="none" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      <path d="M195 240 Q195 205 205 205 Q215 205 215 240 Z" fill="#8B8368" stroke={dark} strokeWidth="2" />
      {[130, 280].map((x) => (
        <rect key={x} x={x} y="185" width="10" height="20" fill="#8B8368" opacity="0.6" />
      ))}
      {[[110, 245], [130, 248], [300, 246]].map(([x, y]) => (
        <rect key={x + "-" + y} x={x} y={y} width="14" height="6" rx="2" fill="#B8B8A0" stroke={dark} strokeWidth="1.2" />
      ))}
    </g>
  );
};

const ElBoduBeruElTamborGrandeDeMaldivas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="150" cy="120" r="13" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M135 138 Q150 130 165 138 L160 175 L140 175 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="175" width="45" height="30" rx="4" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" transform="rotate(15 152 190)" />
      <circle cx="260" cy="120" r="13" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M245 138 Q260 130 275 138 L268 220 L252 220 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M245 155 Q225 165 220 145 M275 155 Q295 165 300 145" fill="none" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const LaPescaDeCanaYLineaOrgulloMaldivo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="240" rx="120" ry="10" fill="#0E7C9E" opacity="0.5" />
      <path d="M120 225 L290 225 L275 195 L135 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[150, 205, 260].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="165" r="10" fill="#D9B48A" stroke={dark} strokeWidth="2" />
          <path d={`M${x - 10} 178 Q${x} 172 ${x + 10} 178 L${x + 6} 195 L${x - 6} 195 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <line x1={x + 8} y1="180" x2={x + 30} y2="165" stroke="#5C3A21" strokeWidth="2.5" />
          <line x1={x + 30} y1="165" x2={x + 34} y2="200" stroke="#3E2E24" strokeWidth="1.2" />
        </g>
      ))}
    </g>
  );
};

const HanifaruBaySantuarioDeMantarrayas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#4FA8E8";
  const mantas: [number, number, number, number][] = [
    [160, 165, 1, -20],
    [230, 150, 0.85, 40],
    [205, 210, 0.7, 160],
  ];
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.3" />
      {mantas.map(([cx, cy, scale, rotate], i) => (
        <g key={i} transform={`translate(${cx} ${cy}) rotate(${rotate}) scale(${scale})`}>
          <path d="M0 -30 Q-40 -10 -45 15 Q-20 5 0 10 Q20 5 45 15 Q40 -10 0 -30 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <path d="M0 10 Q3 30 -2 48" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const ConversionAlIslam1153: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#B8A484";
  return (
    <g>
      <rect x="130" y="220" width="60" height="20" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2.5" />
      <path d="M135 220 Q135 170 160 155 Q185 170 185 220 Z" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="3" />
      <rect x="155" y="130" width="10" height="25" fill={shade(stone, 0.2)} />
      <circle cx="160" cy="125" r="6" fill={shade(stone, 0.2)} />
      <rect x="230" y="200" width="70" height="40" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <ellipse cx="265" cy="195" rx="26" ry="20" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="265" y1="178" x2="265" y2="140" stroke={dark} strokeWidth="3" />
      <path
        fillRule="evenodd"
        d="M265 122 a9 9 0 1 0 0 18 a9 9 0 1 0 0 -18 Z M269 124 a7 7 0 1 0 0 14 a7 7 0 1 0 0 -14 Z"
        fill="#D4AF37"
      />
    </g>
  );
};

export const maldivesIllustrations: Record<string, IllustrationDefinition> = {
  "maldivas-el-pais-mas-bajo-del-mundo": { component: MaldivasElPaisMasBajoDelMundo },
  "los-atolones-de-coral-de-maldivas": { component: LosAtolonesDeCoralDeMaldivas },
  "el-mar-de-estrellas-de-la-isla-vaadhoo": { component: ElMarDeEstrellasDeLaIslaVaadhoo },
  "el-dhoni-el-barco-tradicional-maldivo": { component: ElDhoniElBarcoTradicionalMaldivo },
  "maldivas-y-la-cabana-sobre-el-agua": { component: MaldivasYLaCabanaSobreElAgua },
  "el-mas-huni-desayuno-nacional-de-maldivas": { component: ElMasHuniDesayunoNacionalDeMaldivas },
  "el-thaana-el-alfabeto-unico-de-maldivas": { component: ElThaanaElAlfabetoUnicoDeMaldivas },
  "la-mezquita-de-los-viernes-tallada-en-coral": { component: LaMezquitaDeLosViernesTalladaEnCoral },
  "el-bodu-beru-el-tambor-grande-de-maldivas": { component: ElBoduBeruElTamborGrandeDeMaldivas },
  "la-pesca-de-cana-y-linea-orgullo-maldivo": { component: LaPescaDeCanaYLineaOrgulloMaldivo },
  "hanifaru-bay-santuario-de-mantarrayas": { component: HanifaruBaySantuarioDeMantarrayas },
  "conversion-al-islam-1153": { component: ConversionAlIslam1153 },
};
