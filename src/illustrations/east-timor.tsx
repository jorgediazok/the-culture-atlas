import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const TimorOrientalLaNacionMasJovenDeAsia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="95" width="190" height="120" fill="#8B1A2B" stroke={dark} strokeWidth="3" />
      <polygon points="110,95 205,155 110,215" fill="#1A1A1A" />
      <polygon points="110,95 175,155 110,215" fill="#D4941E" />
      <polygon points="130,140 138,155 155,155 141,164 147,180 130,170 113,180 119,164 105,155 122,155" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      {[[140, 235], [170, 245], [200, 232], [230, 245], [260, 235]].map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y - 14} r="8" fill="#D9B48A" stroke={dark} strokeWidth="1.5" />
          <path d={`M${x - 10} ${y} Q${x} ${y - 8} ${x + 10} ${y} L${x + 8} ${y + 14} L${x - 8} ${y + 14} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const ElTaisElTejidoQueIdentificaCadaRegion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g transform="rotate(-3 205 165)">
      <rect x="110" y="95" width="190" height="140" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[110, 145, 180, 215, 250, 285].map((x, i) => (
        <rect key={x} x={x} y="95" width="18" height="140" fill={i % 2 === 0 ? accentColor : "#D4941E"} opacity="0.85" />
      ))}
      {[120, 155, 190, 225, 260].map((x) => (
        <polygon key={x} points={`${x},130 ${x+10},150 ${x},170 ${x-10},150`} fill="#F5F0E6" opacity="0.8" />
      ))}
    </g>
  );
};

const LafaekElMitoFundadorDelCocodrilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 220 Q120 190 160 195 Q170 175 195 178 Q200 160 225 165 Q235 150 255 158 Q280 165 290 195 Q300 215 280 225 L110 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="100,220 80,215 90,235 100,230" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="88" cy="220" r="4" fill="#1A1A1A" />
      <polygon points="190,178 200,160 210,178" fill="#3F7D2E" opacity="0.7" />
      <polygon points="220,165 230,145 240,165" fill="#3F7D2E" opacity="0.7" />
      {[130, 160, 190, 220, 250].map((x) => (
        <polygon key={x} points={`${x},218 ${x+8},228 ${x-8},228`} fill={dark} opacity="0.4" />
      ))}
    </g>
  );
};

const ElBuaMalusLaHospitalidadDelBetel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="45" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="192" rx="35" ry="10" fill="#F5F0E6" />
      {[[190, 190], [205, 186], [220, 190]].map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r="7" fill={i % 2 === 0 ? "#8B1A2B" : "#3F7D2E"} stroke={dark} strokeWidth="1.2" />
      ))}
      <path d="M130 220 Q150 195 175 200" fill="none" stroke="#D9B48A" strokeWidth="10" strokeLinecap="round" />
      <path d="M280 220 Q260 195 235 200" fill="none" stroke="#D9B48A" strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const ElTetumLenguaFrancaDeTimorOriental: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="150" cy="160" r="18" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M130 185 Q150 175 170 185 L165 235 L135 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="260" cy="160" r="18" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M240 185 Q260 175 280 185 L275 235 L245 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <path d="M165 120 Q185 105 210 112 Q215 100 205 95 L225 100 L215 118 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M245 130 Q225 118 200 122 Q198 112 208 108 L188 110 L195 128 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaUmaLulikCasaSagradaDeTimor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="150,235 150,150 205,80 260,150 260,235" fill="#5C3A21" stroke={dark} strokeWidth="3" />
      <polygon points="150,150 205,80 260,150" fill={accentColor} opacity="0.7" />
      <rect x="175" y="185" width="60" height="50" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <line x1="160" y1="235" x2="160" y2="215" stroke="#3E2E24" strokeWidth="6" />
      <line x1="250" y1="235" x2="250" y2="215" stroke="#3E2E24" strokeWidth="6" />
      <line x1="205" y1="235" x2="205" y2="200" stroke="#3E2E24" strokeWidth="6" />
    </g>
  );
};

const ElTatamailauLaMontanaMasAltaDeTimor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,240 205,100 320,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="199" y="88" width="12" height="16" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <circle cx="205" cy="82" r="6" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <ellipse cx="150" cy="150" rx="35" ry="12" fill="#F5F0E6" opacity="0.5" />
      <ellipse cx="260" cy="170" rx="30" ry="10" fill="#F5F0E6" opacity="0.5" />
    </g>
  );
};

const ElCafeDeTimorOrganicoCasiPorAccidente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="100" rx="90" ry="35" fill="#3F7D2E" opacity="0.4" />
      <line x1="205" y1="230" x2="205" y2="120" stroke="#5C3A21" strokeWidth="6" />
      <path d="M205 150 Q170 145 155 165 M205 170 Q235 165 250 185 M205 190 Q175 190 165 210" fill="none" stroke="#3F7D2E" strokeWidth="5" strokeLinecap="round" />
      {[[160, 160], [175, 170], [245, 180], [230, 195], [170, 205]].map(([x, y]) => (
        <circle key={x + "-" + y} cx={x} cy={y} r="6" fill="#B71C1C" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElLikuraiLaDanzaDeBienvenidaGuerrera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const positions = [140, 205, 270];
  return (
    <g>
      {positions.map((x, i) => (
        <g key={x} transform={i === 1 ? "translate(0 -10)" : undefined}>
          <circle cx={x} cy="130" r="13" fill="#D9B48A" stroke={dark} strokeWidth="2" />
          <path d={`M${x - 16} 148 Q${x} 138 ${x + 16} 148 L${x + 12} 225 L${x - 12} 225 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
          <circle cx={x + 18} cy="165" r="10" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const ElCatolicismoCasiUniversalEnTimor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,240 320,240 320,250 90,250" fill="#3F7D2E" opacity="0.35" />
      <rect x="170" y="170" width="70" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="192" y="120" width="26" height="50" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="188,120 205,100 222,120" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="95" x2="205" y2="75" stroke={dark} strokeWidth="3" />
      <line x1="196" y1="82" x2="214" y2="82" stroke={dark} strokeWidth="3" />
      <rect x="197" y="200" width="16" height="40" fill={accentColor} opacity="0.5" />
    </g>
  );
};

export const eastTimorIllustrations: Record<string, IllustrationDefinition> = {
  "timor-oriental-la-nacion-mas-joven-de-asia": { component: TimorOrientalLaNacionMasJovenDeAsia },
  "el-tais-el-tejido-que-identifica-cada-region": { component: ElTaisElTejidoQueIdentificaCadaRegion },
  "lafaek-el-mito-fundador-del-cocodrilo": { component: LafaekElMitoFundadorDelCocodrilo },
  "el-bua-malus-la-hospitalidad-del-betel": { component: ElBuaMalusLaHospitalidadDelBetel },
  "el-tetum-lengua-franca-de-timor-oriental": { component: ElTetumLenguaFrancaDeTimorOriental },
  "la-uma-lulik-casa-sagrada-de-timor": { component: LaUmaLulikCasaSagradaDeTimor },
  "el-tatamailau-la-montana-mas-alta-de-timor": { component: ElTatamailauLaMontanaMasAltaDeTimor },
  "el-cafe-de-timor-organico-casi-por-accidente": { component: ElCafeDeTimorOrganicoCasiPorAccidente },
  "el-likurai-la-danza-de-bienvenida-guerrera": { component: ElLikuraiLaDanzaDeBienvenidaGuerrera },
  "el-catolicismo-casi-universal-en-timor": { component: ElCatolicismoCasiUniversalEnTimor },
};
