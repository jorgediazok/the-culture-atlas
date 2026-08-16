import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CymraegElGaloQueSigueVivo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="120" width="210" height="120" rx="6" fill="#F5F0E6" stroke={dark} strokeWidth="3.5" />
      <line x1="120" y1="150" x2="290" y2="150" stroke={accentColor} strokeWidth="6" opacity="0.85" />
      <line x1="120" y1="175" x2="260" y2="175" stroke={accentColor} strokeWidth="6" opacity="0.6" />
      <line x1="120" y1="210" x2="270" y2="210" stroke={dark} strokeWidth="5" opacity="0.5" />
    </g>
  );
};

const YDdraigGochLaBanderaMasAntiguaEnUso: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="80" fill="#F5F0E6" />
    <rect x="90" y="170" width="230" height="80" fill="#00843D" />
    <path d="M150 230 Q140 195 165 175 Q150 165 160 145 Q180 150 185 170 Q200 155 220 165 Q215 185 195 190 Q210 200 205 220 Q185 215 175 200 Q165 220 150 230 Z" fill="#C8102E" stroke="#7A0E1C" strokeWidth="2.5" />
    <circle cx="168" cy="178" r="3.5" fill="#1A1A1A" />
  </g>
);

const ElPaisDelCantoLosCorosMasculinos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[130, 175, 220, 265].map((x, i) => {
        const lift = i % 2 === 0 ? 0 : 10;
        const headY = 150 + lift;
        const mouthY = 168 + lift;
        const shoulderY = 190 + lift;
        return (
          <g key={x}>
            <circle cx={x} cy={headY} r="14" fill={skin} />
            <ellipse cx={x} cy={mouthY} rx="6" ry="4" fill="#1A1A1A" />
            <path d={`M${x - 16} ${shoulderY} Q${x} ${shoulderY - 15} ${x + 16} ${shoulderY} L${x + 13} 250 L${x - 13} 250 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
          </g>
        );
      })}
    </g>
  );
};

const ElEisteddfodElFestivalDePoesiaYMusica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[[110, 240], [150, 220], [260, 220], [300, 240]].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 9} y={y - 50} width="18" height="50" fill="#9E9A92" stroke={dark} strokeWidth="2" />
      ))}
      <circle cx="205" cy="165" r="15" fill={skin} />
      <path d="M188 165 Q205 148 222 165 L218 155 Q205 145 192 155 Z" fill="#D4AF37" stroke={dark} strokeWidth="1.5" />
      <path d="M180 190 Q205 175 230 190 L222 250 L188 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElCastilloDeCardiff: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="200" width="220" height="50" fill="#8B8378" stroke={dark} strokeWidth="3" />
      <path d="M170 200 Q170 165 205 160 Q240 165 240 200 Z" fill="#9E9A92" stroke={dark} strokeWidth="2.5" />
      <rect x="190" y="120" width="30" height="55" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="185,120 205,95 225,120" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      {[130, 290].map((x) => (
        <rect key={x} x={x - 8} y="185" width="16" height="20" fill="#7A756A" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const SnowdoniaYLaMontanaMasAltaDeGales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L170 120 L250 250 Z" fill="#3E5C4A" stroke={dark} strokeWidth="2.5" />
      <path d="M170 250 L250 130 L320 250 Z" fill="#4A5A52" opacity="0.7" stroke={dark} strokeWidth="2.5" />
      <path d="M120 235 L165 155 L210 235" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeDasharray="8 5" opacity="0.9" />
      <rect x="145" y="195" width="26" height="16" rx="2" fill="#B71C1C" stroke="#5C0F1C" strokeWidth="2" />
      <circle cx="151" cy="211" r="3" fill="#1A1A1A" />
      <circle cx="165" cy="211" r="3" fill="#1A1A1A" />
    </g>
  );
};

const ElRugbyUnaObsesionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 210 320 240 L320 250 Q205 225 90 250 Z" fill="#9E9A92" opacity="0.5" />
      <ellipse cx="205" cy="180" rx="55" ry="32" fill={accentColor} stroke={dark} strokeWidth="3" transform="rotate(-20 205 180)" />
      <line x1="180" y1="160" x2="230" y2="200" stroke={dark} strokeWidth="2" opacity="0.5" transform="rotate(-20 205 180)" />
      {[170, 190, 210, 230].map((x) => (
        <line key={x} x1={x - 15} y1="150" x2={x + 15} y2="150" stroke={dark} strokeWidth="1.5" opacity="0.4" transform="rotate(-20 205 180)" />
      ))}
    </g>
  );
};

const ElDiaDeSanDavidNarcisosYPuerros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="160" cy="170" rx="10" ry="24" fill="#F4B400" stroke={dark} strokeWidth="2" transform="rotate(-30 160 170)" />
      <ellipse cx="160" cy="170" rx="10" ry="24" fill="#F4B400" stroke={dark} strokeWidth="2" transform="rotate(30 160 170)" />
      <ellipse cx="160" cy="170" rx="10" ry="24" fill="#F4B400" stroke={dark} strokeWidth="2" transform="rotate(90 160 170)" />
      <circle cx="160" cy="170" r="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      <line x1="160" y1="182" x2="160" y2="250" stroke="#3E5C4A" strokeWidth="5" />
      <rect x="255" y="150" width="24" height="100" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M255 150 Q267 120 279 150" fill="#3E5C4A" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const PortmeirionElPuebloItalianoEnGales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="190" width="60" height="60" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="130" cy="180" r="22" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <rect x="180" y="170" width="70" height="80" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="215" cy="160" r="26" fill="#D4941E" stroke={dark} strokeWidth="2.5" />
      <rect x="270" y="200" width="35" height="50" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <circle cx="287" cy="192" r="14" fill={accentColor} opacity="0.6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const HayOnWyeLaCapitalMundialDeLosLibrosUsados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[100, 180, 70], [170, 160, 90], [250, 175, 75]].map(([x, y, h], i) => (
        <rect key={x} x={x} y={y} width="60" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      ))}
      {[110, 180, 260].map((x) => (
        <g key={x}>
          {[0, 10, 20].map((dy) => (
            <rect key={dy} x={x} y={240 - dy} width="40" height="8" fill="#F5F0E6" stroke={dark} strokeWidth="1" opacity="0.9" />
          ))}
        </g>
      ))}
    </g>
  );
};

export const walesIllustrations: Record<string, IllustrationDefinition> = {
  "cymraeg-el-galo-que-sigue-vivo": { component: CymraegElGaloQueSigueVivo },
  "y-ddraig-goch-la-bandera-mas-antigua-en-uso": { component: YDdraigGochLaBanderaMasAntiguaEnUso },
  "el-pais-del-canto-los-coros-masculinos": { component: ElPaisDelCantoLosCorosMasculinos },
  "el-eisteddfod-el-festival-de-poesia-y-musica": { component: ElEisteddfodElFestivalDePoesiaYMusica },
  "el-castillo-de-cardiff": { component: ElCastilloDeCardiff },
  "snowdonia-y-la-montana-mas-alta-de-gales": { component: SnowdoniaYLaMontanaMasAltaDeGales },
  "el-rugby-una-obsesion-nacional": { component: ElRugbyUnaObsesionNacional },
  "el-dia-de-san-david-narcisos-y-puerros": { component: ElDiaDeSanDavidNarcisosYPuerros },
  "portmeirion-el-pueblo-italiano-en-gales": { component: PortmeirionElPuebloItalianoEnGales },
  "hay-on-wye-la-capital-mundial-de-los-libros-usados": { component: HayOnWyeLaCapitalMundialDeLosLibrosUsados },
};
