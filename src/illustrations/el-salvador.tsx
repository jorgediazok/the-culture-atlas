import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LasPupusasElPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="160" cy="200" rx="45" ry="14" fill="#EAD9A0" stroke={dark} strokeWidth="3" />
      <ellipse cx="160" cy="196" rx="30" ry="8" fill="#F5D060" opacity="0.9" />
      <ellipse cx="255" cy="205" rx="45" ry="14" fill="#E0C888" stroke={dark} strokeWidth="3" />
      <ellipse cx="255" cy="201" rx="30" ry="8" fill={accentColor} opacity="0.85" />
      <path d="M120 225 Q160 235 200 225" fill="none" stroke="#5C7A3A" strokeWidth="6" opacity="0.7" />
      <ellipse cx="205" cy="240" rx="90" ry="6" fill="#8C8C8C" opacity="0.4" />
    </g>
  );
};

const JoyaDeCerenLaPompeyaDeAmerica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#B8A878" opacity="0.6" />
      <path d="M150 240 L150 175 Q150 165 205 160 Q260 165 260 175 L260 240 Z" fill="#8B7355" stroke={dark} strokeWidth="2.8" />
      <path d="M140 178 L205 148 L270 178" fill="none" stroke="#5C3A21" strokeWidth="6" strokeLinecap="round" />
      <rect x="180" y="200" width="24" height="40" fill="#3A2418" />
      <ellipse cx="205" cy="238" rx="130" ry="10" fill="#C9BE9E" opacity="0.7" />
      <path d="M100 220 Q110 200 100 180 M310 215 Q300 195 312 175" stroke="#8C8C74" strokeWidth="4" fill="none" opacity="0.6" />
    </g>
  );
};

const ElTuncoYLasOlasDelPacifico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q160 160 205 190 Q250 150 320 195 L320 250 L90 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M90 200 Q160 160 205 190 Q250 150 320 195" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.8" />
      <g transform="translate(200 175) rotate(-15)">
        <path d="M0 0 L4 -30 L-4 -20 Z" fill="#1B4F72" stroke={dark} strokeWidth="2" />
        <path d="M-8 -5 L14 -12 L-2 5 Z" fill="#C9A227" stroke={dark} strokeWidth="1.8" />
      </g>
      <ellipse cx="205" cy="238" rx="110" ry="8" fill="#3A3A3A" opacity="0.4" />
    </g>
  );
};

const ElIzalcoElFaroDelPacifico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="150,240 205,110 260,240" fill="#3A2418" stroke={dark} strokeWidth="3" />
      <polygon points="188,150 205,110 222,150" fill="#C1272D" opacity="0.9" />
      <path d="M205 110 Q195 90 205 70 Q215 90 205 110 Z" fill="#8C8C8C" opacity="0.6" />
      <path d="M175 200 Q185 190 205 195 Q225 190 235 200" fill="none" stroke="#C1440E" strokeWidth="5" opacity="0.8" />
      <ellipse cx="205" cy="240" rx="100" ry="8" fill="#3A3A3A" opacity="0.5" />
    </g>
  );
};

const ElAnilDeSuchitoto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 235 L150 130 L260 130 L260 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 175 L260 175 M150 200 L260 200" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      <line x1="140" y1="120" x2="270" y2="120" stroke="#5C3A21" strokeWidth="5" />
      <line x1="150" y1="120" x2="150" y2="130" stroke="#5C3A21" strokeWidth="3" />
      <line x1="260" y1="120" x2="260" y2="130" stroke="#5C3A21" strokeWidth="3" />
      <path d="M100 150 Q115 155 118 170 M290 155 Q305 150 300 170" fill="none" stroke="#3E5C2E" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const LaPalmaYElArteNaifDeFernandoLlort: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C1440E", "#1F5C3A", "#C9A227"];
  return (
    <g>
      <rect x="110" y="140" width="190" height="100" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="150" cy="175" r="18" fill={colors[0]} stroke={dark} strokeWidth="2" />
      <polygon points="220,160 240,195 200,195" fill={colors[1]} stroke={dark} strokeWidth="2" />
      <rect x="255" y="160" width="30" height="30" fill={colors[2]} stroke={dark} strokeWidth="2" />
      <circle cx="150" cy="220" r="10" fill={colors[3]} />
      <circle cx="270" cy="220" r="10" fill={colors[0]} />
      <path d="M180 220 Q205 200 230 220" fill="none" stroke={colors[1]} strokeWidth="4" />
    </g>
  );
};

const ElTorogozElAveNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="195" cy="150" rx="26" ry="20" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <circle cx="172" cy="138" r="13" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="161,138 152,135 161,143" fill="#3A2418" />
      <ellipse cx="200" cy="162" rx="14" ry="9" fill="#C1440E" opacity="0.9" />
      <line x1="210" y1="165" x2="215" y2="215" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="167" x2="208" y2="215" stroke={dark} strokeWidth="3" />
      <circle cx="215" cy="222" r="5" fill={dark} />
      <circle cx="208" cy="222" r="5" fill={dark} />
      <line x1="170" y1="195" x2="170" y2="220" stroke={dark} strokeWidth="3.5" />
      <line x1="185" y1="195" x2="188" y2="220" stroke={dark} strokeWidth="3.5" />
    </g>
  );
};

const ElValleDeLasHamacas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="110,240 150,150 190,240" fill="#8C8C8C" stroke={dark} strokeWidth="2.2" opacity="0.7" />
      <polygon points="240,240 270,160 300,240" fill="#8C8C8C" stroke={dark} strokeWidth="2.2" opacity="0.7" />
      <g transform="rotate(-2 195 200)">
        <rect x="175" y="150" width="40" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" />
        {[160, 180, 200, 220].map((y) => (
          <rect key={y} x="180" y={y} width="10" height="12" fill="#F5F0E6" opacity="0.8" />
        ))}
      </g>
      <path d="M90 245 Q205 250 320 245" fill="none" stroke={dark} strokeWidth="3" strokeDasharray="8 6" opacity="0.5" />
    </g>
  );
};

const AtacoYLaRutaDeLasFlores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="160" width="200" height="80" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M130 180 Q150 165 170 180 Q160 195 140 195 Z" fill={accentColor} opacity="0.85" />
      <path d="M200 175 Q220 190 240 175 Q235 200 210 200 Z" fill="#C1440E" opacity="0.85" />
      <path d="M260 185 Q280 170 295 190" fill="none" stroke="#1F5C3A" strokeWidth="6" strokeLinecap="round" />
      {[130, 170, 210, 250, 290].map((x) => (
        <circle key={x} cx={x} cy="150" r="6" fill="#D9A441" />
      ))}
    </g>
  );
};

const ElMimbreDeNahuizalco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const basket = (x: number, scale: number) => (
    <g key={x} transform={`translate(${x} 0) scale(${scale})`}>
      <path d="M-20 0 L20 0 L15 40 Q0 48 -15 40 Z" fill="#B8935F" stroke={dark} strokeWidth="2.2" />
      {[8, 16, 24, 32].map((y) => (
        <line key={y} x1={-18 + y * 0.15} y1={y} x2={18 - y * 0.15} y2={y} stroke="#8B6F47" strokeWidth="1.5" />
      ))}
    </g>
  );
  return (
    <g>
      <rect x="90" y="230" width="230" height="15" fill="#8C8C8C" opacity="0.4" />
      {basket(150, 1.3)}
      {basket(210, 1)}
      {basket(265, 0.8)}
    </g>
  );
};

const ElXucElBaileNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <path d={`M${x - 16} 235 Q${x - 18} 190 ${x} 145 Q${x + 18} 190 ${x + 16} 235 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
      <circle cx={x} cy="150" r="14" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 14} 190 Q${x - 28} 195 ${x - 30} 175`} fill="none" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
  return (
    <g>
      {dancer(140, accentColor)}
      {dancer(190, "#C9A227")}
      <rect x="215" y="205" width="100" height="12" fill={dark} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={222 + i * 13} y={198 - (i % 3) * 5} width="9" height={20 + (i % 3) * 5} fill={i % 2 === 0 ? accentColor : "#C9A227"} stroke={dark} strokeWidth="1" />
      ))}
      <line x1="240" y1="180" x2="250" y2="150" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="250" cy="148" r="5" fill={dark} />
      <line x1="270" y1="180" x2="280" y2="150" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="280" cy="148" r="5" fill={dark} />
    </g>
  );
};

const ElSalvadorYElBitcoin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="100,240 150,150 200,240" fill="#3A2418" stroke={dark} strokeWidth="3" />
      <polygon points="135,180 150,150 165,180" fill="#C1272D" opacity="0.85" />
      <path d="M170 170 L200 140 L215 155 L245 120" fill="none" stroke={dark} strokeWidth="4" strokeDasharray="6 5" strokeLinecap="round" />
      <circle cx="270" cy="150" r="48" fill={accentColor} stroke={dark} strokeWidth="4" />
      <text x="270" y="168" fontSize="52" fontWeight="700" fill="#F5F0E6" textAnchor="middle" fontFamily="sans-serif">
        ₿
      </text>
      <ellipse cx="205" cy="240" rx="110" ry="8" fill="#3A3A3A" opacity="0.4" />
    </g>
  );
};

export const elSalvadorIllustrations: Record<string, IllustrationDefinition> = {
  "las-pupusas-el-plato-nacional": { component: LasPupusasElPlatoNacional },
  "joya-de-ceren-la-pompeya-de-america": { component: JoyaDeCerenLaPompeyaDeAmerica },
  "el-tunco-y-las-olas-del-pacifico": { component: ElTuncoYLasOlasDelPacifico },
  "el-izalco-el-faro-del-pacifico": { component: ElIzalcoElFaroDelPacifico },
  "el-anil-de-suchitoto": { component: ElAnilDeSuchitoto },
  "la-palma-y-el-arte-naif-de-fernando-llort": { component: LaPalmaYElArteNaifDeFernandoLlort },
  "el-torogoz-el-ave-nacional": { component: ElTorogozElAveNacional },
  "el-valle-de-las-hamacas": { component: ElValleDeLasHamacas },
  "ataco-y-la-ruta-de-las-flores": { component: AtacoYLaRutaDeLasFlores },
  "el-mimbre-de-nahuizalco": { component: ElMimbreDeNahuizalco },
  "el-xuc-el-baile-nacional": { component: ElXucElBaileNacional },
  "el-salvador-y-el-bitcoin": { component: ElSalvadorYElBitcoin },
};
