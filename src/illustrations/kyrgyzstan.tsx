import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ManasEpicaMasLarga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="175" cy="150" r="13" fill={skin} />
      <path d="M162 165 Q175 158 188 165 L182 220 L168 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="188" y1="170" x2="230" y2="120" stroke="#8B5A2B" strokeWidth="4" />
      <path d="M225 118 L235 108 L238 122 Z" fill={dark} />
      {[[250, 210], [270, 220], [290, 205], [255, 230]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 20} r="8" fill={skin} opacity={0.9 - i * 0.05} />
          <path d={`M${(x as number) - 8} ${y} Q${x} ${(y as number) - 10} ${(x as number) + 8} ${y}`} fill={tint(accentColor, 0.3)} opacity={0.85 - i * 0.05} />
        </g>
      ))}
    </g>
  );
};

const TundukTechoDeYurta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <circle cx="205" cy="175" r="70" fill="none" stroke={wood} strokeWidth="8" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1="205" y1="175" x2="205" y2="115" stroke={wood} strokeWidth="5" transform={`rotate(${deg} 205 175)`} />
      ))}
      <circle cx="205" cy="175" r="22" fill={tint(accentColor, 0.3)} opacity="0.5" />
      <circle cx="205" cy="175" r="70" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const JuegosMundialesNomadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      {[[160, 220, -1], [250, 220, 1]].map(([x, y, dir]) => (
        <g key={x as number}>
          <path d={`M${x} ${y} Q${(x as number) - 25 * (dir as number)} ${(y as number) - 5} ${(x as number) - 45 * (dir as number)} ${y}`} fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
          <path d={`M${x} ${y} Q${x} ${(y as number) - 25} ${x} ${(y as number) - 50}`} fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
          <circle cx={x} cy={(y as number) - 62} r="10" fill={skin} />
          <path d={`M${(x as number) - 12} ${(y as number) - 50} Q${x} ${(y as number) - 58} ${(x as number) + 12} ${(y as number) - 50} L${(x as number) + 9} ${y} L${(x as number) - 9} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <ellipse cx="205" cy="228" rx="90" ry="12" fill={dark} opacity="0.3" />
    </g>
  );
};

const KokBoruJuegoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <ellipse cx="205" cy="230" rx="95" ry="12" fill={dark} opacity="0.3" />
      {[[150, 205, -1], [260, 205, 1]].map(([x, y, dir]) => (
        <g key={x as number}>
          <path d={`M${x} ${y} L${x} ${(y as number) + 25} L${(x as number) - 10 * (dir as number)} ${(y as number) + 30}`} stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
          <circle cx={x} cy={(y as number) - 12} r="9" fill={skin} />
          <path d={`M${(x as number) - 10} ${y} Q${x} ${(y as number) - 8} ${(x as number) + 10} ${y} L${(x as number) + 8} ${(y as number) + 25} L${(x as number) - 8} ${(y as number) + 25} Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
          <path d={`M${x} ${(y as number) + 5} Q${(x as number) + 20 * (dir as number)} ${y} ${(x as number) + 35 * (dir as number)} ${(y as number) + 15}`} stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>
      ))}
      <ellipse cx="205" cy="215" rx="16" ry="10" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const IssykKulLagoCaliente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  return (
    <g>
      <polygon points="90,200 150,120 210,200" fill={dark} opacity="0.5" />
      <polygon points="180,200 250,110 320,200" fill={dark} opacity="0.4" />
      <polygon points="120,165 150,120 180,165" fill={snow} />
      <polygon points="220,155 250,110 280,155" fill={snow} />
      <path d="M90 200 Q205 185 320 200 L320 250 L90 250 Z" fill={accentColor} />
      <path d="M90 205 Q205 192 320 205" fill="none" stroke={tint(accentColor, 0.4)} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const TashRabatCaravasar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#8B7355";
  return (
    <g>
      <polygon points="90,240 205,140 320,240" fill={accentColor} opacity="0.3" />
      <rect x="140" y="185" width="130" height="55" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="3" />
      <path d="M140 185 Q205 155 270 185 Z" fill={shade(stone, 0.1)} stroke={shade(stone, 0.3)} strokeWidth="2.5" />
      <circle cx="205" cy="175" r="14" fill={dark} opacity="0.4" />
      <rect x="190" y="210" width="30" height="30" fill={dark} opacity="0.5" />
      {[160, 250].map((x) => (
        <rect key={x} x={x - 10} y="200" width="20" height="20" fill={dark} opacity="0.35" />
      ))}
    </g>
  );
};

const JailooPastosDeVerano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skyBlue = "#7EC8E3";
  return (
    <g>
      <rect x="90" y="80" width="230" height="110" fill={skyBlue} opacity="0.3" />
      <path d="M155 240 Q155 185 205 180 Q255 185 255 240 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M155 195 Q205 165 255 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[110, 225], [130, 235], [285, 228], [300, 238]].map(([x, y], i) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="12" ry="9" fill="#fff" stroke={dark} strokeWidth="1.5" opacity={0.9 - i * 0.05} />
          <circle cx={(x as number) - 7} cy={(y as number) - 6} r="4" fill="#fff" stroke={dark} strokeWidth="1" />
        </g>
      ))}
    </g>
  );
};

const TianShanMontanasCelestiales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  return (
    <g>
      <polygon points="90,240 150,130 195,190 240,110 300,240" fill={accentColor} stroke={dark} strokeWidth="3" strokeLinejoin="round" />
      <polygon points="125,175 150,130 170,175" fill={snow} />
      <polygon points="210,155 240,110 265,160" fill={snow} />
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const RevolucionTulipanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="160" y="180" width="90" height="60" fill="#B0B8BF" stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="195" width="40" height="45" fill={dark} opacity="0.4" />
      {[[130, 225], [270, 225], [150, 235], [255, 235]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 18} r="7" fill={skin} opacity={0.9 - i * 0.05} />
          <line x1={x} y1={(y as number) - 11} x2={x} y2={y} stroke={dark} strokeWidth="4" />
          <path d={`M${x} ${(y as number) - 30} Q${(x as number) - 6} ${(y as number) - 22} ${x} ${(y as number) - 14} Q${(x as number) + 6} ${(y as number) - 22} ${x} ${(y as number) - 30} Z`} fill={accentColor} />
        </g>
      ))}
    </g>
  );
};

const KalpakSombreroNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 220 Q150 160 205 130 Q260 160 260 220 Q234 232 205 232 Q176 232 150 220 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M150 220 Q176 232 205 232 Q234 232 260 220" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      <path d="M165 205 Q205 190 245 205" fill="none" stroke={accentColor} strokeWidth="5" opacity="0.85" />
      <path d="M175 218 Q205 208 235 218" fill="none" stroke={accentColor} strokeWidth="4" opacity="0.7" />
    </g>
  );
};

const BerkutchiCazadoresAguila: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const eagleBrown = "#6B4226";
  const eagleDark = shade(eagleBrown, 0.3);
  const glove = "#C68642";
  return (
    <g>
      <circle cx="145" cy="145" r="17" fill={skin} />
      <path d="M120 160 Q145 148 170 160 L162 235 L128 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M150 180 Q195 182 235 198" fill="none" stroke={accentColor} strokeWidth="16" strokeLinecap="round" />
      <ellipse cx="248" cy="205" rx="20" ry="14" fill={glove} stroke={shade(glove, 0.3)} strokeWidth="2.5" transform="rotate(15 248 205)" />
      <ellipse cx="252" cy="172" rx="27" ry="35" fill={eagleBrown} stroke={eagleDark} strokeWidth="2.5" />
      <circle cx="252" cy="135" r="15" fill={shade(eagleBrown, 0.1)} stroke={eagleDark} strokeWidth="2" />
      <path d="M252 135 L237 141 L252 148 Z" fill="#D4A017" />
      <path d="M230 155 Q205 170 214 202 Q233 193 238 165 Z" fill={eagleDark} />
      <path d="M274 155 Q299 170 290 202 Q271 193 266 165 Z" fill={eagleDark} />
      <path d="M240 205 L234 220 M252 208 L252 222 M264 205 L270 220" stroke={eagleDark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const KomuzInstrumentoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#A0752B";
  return (
    <g>
      <path d="M175 240 Q140 235 138 195 Q136 160 175 150 Q214 160 212 195 Q210 235 175 240 Z" fill={wood} stroke={dark} strokeWidth="3" />
      <circle cx="175" cy="195" r="14" fill={dark} opacity="0.5" />
      <rect x="168" y="90" width="14" height="75" fill={wood} stroke={dark} strokeWidth="2.5" />
      <rect x="160" y="75" width="30" height="20" rx="4" fill={dark} />
      {[168, 178, 188].map((x) => (
        <circle key={x} cx={x} cy="80" r="3" fill={accentColor} />
      ))}
      {[172, 178, 184].map((x) => (
        <line key={x} x1={x} y1="90" x2={x} y2="235" stroke="#F5F0E6" strokeWidth="1.5" opacity="0.85" />
      ))}
    </g>
  );
};

export const kyrgyzstanIllustrations: Record<string, IllustrationDefinition> = {
  "manas-epica-mas-larga": { component: ManasEpicaMasLarga },
  "tunduk-techo-de-yurta": { component: TundukTechoDeYurta },
  "juegos-mundiales-nomadas": { component: JuegosMundialesNomadas },
  "kok-boru-juego-nacional": { component: KokBoruJuegoNacional },
  "issyk-kul-lago-caliente": { component: IssykKulLagoCaliente },
  "tash-rabat-caravasar": { component: TashRabatCaravasar },
  "jailoo-pastos-de-verano": { component: JailooPastosDeVerano },
  "tian-shan-montanas-celestiales": { component: TianShanMontanasCelestiales },
  "revolucion-tulipanes": { component: RevolucionTulipanes },
  "kalpak-sombrero-nacional": { component: KalpakSombreroNacional },
  "berkutchi-cazadores-aguila": { component: BerkutchiCazadoresAguila },
  "komuz-instrumento-nacional": { component: KomuzInstrumentoNacional },
};
