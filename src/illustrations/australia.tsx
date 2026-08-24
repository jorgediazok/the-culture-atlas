import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const OperaHouse: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 240 Q205 250 320 240 L320 250 L90 250 Z" fill={water} />
      {[[130, 235, 60], [190, 240, 75], [255, 235, 55]].map(([x, y, h], i) => (
        <path key={x as number} d={`M${(x as number) - 40} ${y} Q${x} ${(y as number) - (h as number)} ${(x as number) + 40} ${y} Z`} fill={i === 1 ? "#fff" : tint(accentColor, 0.6)} stroke={dark} strokeWidth="2.5" />
      ))}
      {[130, 190, 255].map((x, i) => (
        <path key={`s${x}`} d={`M${x - 40} 240 Q${x} ${240 - [60, 75, 55][i] + 15} ${x + 40} 240`} fill="none" stroke={dark} strokeWidth="1" opacity="0.3" />
      ))}
    </g>
  );
};

const GranBarreraCoral: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.55" />
      {[[130, 220, 30], [180, 210, 24], [230, 225, 28], [270, 215, 20]].map(([x, y, h], i) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 14} ${(y as number) - (h as number)} ${x} ${(y as number) - (h as number) * 1.4} Q${(x as number) + 14} ${(y as number) - (h as number)} ${x} ${y} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
      ))}
      {[[150, 165], [210, 145], [260, 175]].map(([x, y]) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="14" ry="8" fill="#F4A300" stroke={dark} strokeWidth="1.5" />
          <path d={`M${(x as number) - 14} ${y} L${(x as number) - 22} ${(y as number) - 6} M${(x as number) - 14} ${y} L${(x as number) - 22} ${(y as number) + 6}`} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const Canguros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.35);
  return (
    <g>
      {/* thick tail trailing behind for balance */}
      <path d="M172 220 Q145 228 122 248 Q130 253 142 249 Q166 238 186 216 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* haunch and back, leaning forward into the hop */}
      <path d="M168 222 Q150 190 172 165 Q186 152 202 158 Q222 148 232 170 Q242 192 230 216 Q220 233 198 235 Q178 235 168 222 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* powerful hind leg and elongated foot, extended forward mid-hop */}
      <path d="M212 214 Q226 220 236 238 Q248 246 266 243 Q268 234 258 230 Q240 220 220 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* small front paws tucked at the chest */}
      <path d="M196 190 Q192 202 196 213" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M210 188 Q209 200 214 210" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* pouch with the joey peeking out */}
      <ellipse cx="184" cy="203" rx="12" ry="10" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="178" cy="195" r="7" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M174 190 L171 182 L178 187 Z" fill={dark} />
      <path d="M181 190 L184 182 L177 187 Z" fill={dark} />
      {/* head with snout and upright ears */}
      <ellipse cx="234" cy="150" rx="15" ry="17" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M234 160 Q248 168 251 182 Q246 187 239 182 Q230 172 226 161 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="226" cy="126" rx="6" ry="16" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(-16 226 126)" />
      <ellipse cx="242" cy="124" rx="6" ry="16" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(14 242 124)" />
      <circle cx="240" cy="151" r="2.5" fill="#1A1A1A" />
      {/* motion dust under the leading foot */}
      <path d="M245 246 Q252 248 260 246 M250 250 Q258 251 265 249" stroke={dark} strokeWidth="1.5" opacity="0.4" fill="none" />
    </g>
  );
};

const AyersRock: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const sky = "#F4C87A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="120" fill={sky} opacity="0.4" />
      <path d="M100 235 Q140 175 180 195 Q210 165 250 195 Q280 180 315 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M100 230 Q140 172 180 192 Q210 163 250 192 Q280 178 315 230" fill="none" stroke={shade(accentColor, 0.15)} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const AborigenesArte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C9682B", "#D4A017", "#8A5A2B"];
  return (
    <g>
      <rect x="105" y="95" width="200" height="160" fill="#F5EFE0" opacity="0.5" />
      {[0, 1, 2, 3, 4].map((ring) => (
        <circle key={ring} cx="205" cy="175" r={20 + ring * 22} fill="none" stroke={colors[ring % colors.length]} strokeWidth="8" strokeDasharray="4 6" />
      ))}
      <circle cx="205" cy="175" r="14" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Vegemite: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bread = "#E8C99B";
  return (
    <g>
      <path d="M140 230 L140 165 Q140 145 175 140 Q205 135 235 140 Q270 145 270 165 L270 230 Z" fill={bread} stroke={shade(bread, 0.3)} strokeWidth="3" />
      <path d="M155 200 Q205 190 255 200 Q255 215 205 218 Q155 215 155 200 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M155 200 Q205 190 255 200" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const Surf: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const skin = "#D9A46A";
  return (
    <g>
      <path d="M90 210 Q160 165 205 210 Q250 250 320 200 L320 250 L90 250 Z" fill={water} />
      <ellipse cx="195" cy="205" rx="55" ry="12" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-15 195 205)" />
      <circle cx="195" cy="170" r="10" fill={skin} />
      <path d="M195 180 L195 200 M195 185 Q175 190 165 205 M195 190 Q215 195 225 180" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
      {[[130, 220], [270, 195]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 10} ${(y as number) - 12} ${(x as number) + 20} ${y}`} fill="none" stroke="#fff" strokeWidth="3" opacity="0.5" />
      ))}
    </g>
  );
};

const AnimalesPeligrosos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M155 235 Q160 210 190 210 Q220 210 230 235 Z" fill="#4A8F4E" stroke={shade("#4A8F4E", 0.3)} strokeWidth="2.5" />
      <ellipse cx="205" cy="185" rx="20" ry="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="197" cy="180" r="3" fill="#1A1A1A" />
      <circle cx="213" cy="180" r="3" fill="#1A1A1A" />
      {[[-30, -20], [-10, -35], [10, -35], [30, -20]].map(([dx, dy], i) => (
        <path key={i} d={`M205 185 L${205 + (dx as number)} ${185 + (dy as number)}`} stroke={dark} strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${i * 20 - 30} 205 185)`} />
      ))}
      {[[-30, 20], [-10, 35], [10, 35], [30, 20]].map(([dx, dy], i) => (
        <path key={`b${i}`} d={`M205 185 L${205 + (dx as number)} ${185 + (dy as number)}`} stroke={dark} strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${i * 20 - 30} 205 185)`} />
      ))}
    </g>
  );
};

const Acdc: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 220 Q165 250 195 253 Q225 255 222 225 Q220 205 200 200 Q188 210 175 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="150" width="10" height="55" fill="#1A1A1A" />
      <rect x="188" y="138" width="24" height="14" fill="#1A1A1A" />
      <polygon points="230,140 210,180 225,180 205,220 250,175 232,175 250,140" fill="#F4A300" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Outback: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sky = "#F4C87A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="110" fill={sky} opacity="0.4" />
      <rect x="90" y="190" width="230" height="60" fill={accentColor} opacity="0.5" />
      <path d="M205 250 L185 190 L225 190 Z" fill="#5C5C5C" stroke={dark} strokeWidth="2" />
      {[195, 205, 215].map((x) => (
        <rect key={x} x={x - 1.5} y="200" width="3" height="16" fill="#F5F0E6" opacity="0.7" />
      ))}
      <circle cx="270" cy="110" r="24" fill="#F4A300" opacity="0.85" />
    </g>
  );
};

const PrimeraFlotaConvictos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={water} opacity="0.5" />
      <path d="M140 200 L140 235 L200 235 L195 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="160" y1="200" x2="160" y2="140" stroke="#5C3A1E" strokeWidth="4" />
      <path d="M160 145 L195 155 L160 175 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M225 210 L225 240 L270 240 L266 210 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <line x1="240" y1="210" x2="240" y2="160" stroke="#5C3A1E" strokeWidth="3.5" />
      <path d="M240 163 L268 172 L240 188 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      <rect x="100" y="120" width="24" height="16" fill="#00247D" />
      <path d="M100 120 L124 136 M124 120 L100 136" stroke="#fff" strokeWidth="2" />
    </g>
  );
};

const PuenteDeLaPercha: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill={water} opacity="0.5" />
      <path d="M110 220 Q205 95 300 220" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <line x1="110" y1="225" x2="300" y2="225" stroke={dark} strokeWidth="6" />
      {[[130, 170], [160, 130], [190, 108], [220, 108], [250, 130], [280, 170]].map(([x, y]) => (
        <line key={x as number} x1={x} y1="225" x2={x} y2={y} stroke={dark} strokeWidth="2.5" opacity="0.6" />
      ))}
    </g>
  );
};

const FutbolAustralianoAFL: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <ellipse cx="205" cy="240" rx="115" ry="14" fill="#4A8F4E" opacity="0.4" />
      <circle cx="195" cy="150" r="13" fill={skin} />
      <path d="M182 163 Q195 155 208 163 L212 205 L188 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M188 205 Q170 225 155 240" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M212 205 Q235 195 255 165" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="270" cy="150" rx="20" ry="12" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" transform="rotate(-25 270 150)" />
      <path d="M182 170 L172 160 M212 170 L225 160" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const LasCenizasDeTheAshes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bat = "#D9BE8F";
  return (
    <g>
      <rect x="170" y="215" width="70" height="20" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M188 215 Q182 175 195 155 Q205 145 215 155 Q228 175 222 215 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="155" rx="14" ry="6" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      <path d="M255 235 L275 150 L282 152 L262 237 Z" fill={bat} stroke={shade(bat, 0.3)} strokeWidth="2" />
      <rect x="270" y="140" width="16" height="14" rx="3" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaBanderaAborigenYSuBatallaLegal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="120" y1="235" x2="120" y2="100" stroke={dark} strokeWidth="5" />
      <rect x="120" y="100" width="180" height="65" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <rect x="120" y="165" width="180" height="65" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="210" cy="165" r="42" fill="#F4C430" stroke={shade("#F4C430", 0.3)} strokeWidth="3" />
    </g>
  );
};

const LaGuerraContraLosEmus: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#BC6C25" opacity="0.4" />
      <circle cx="160" cy="175" r="11" fill={skin} />
      <path d="M148 188 Q160 180 172 188 L168 225 L152 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="170" y="195" width="55" height="6" fill="#2E2E2E" />
      <rect x="215" y="188" width="14" height="10" fill="#2E2E2E" />
      {[[250, 210], [275, 215], [295, 205]].map(([x, y], i) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="10" ry="22" fill="#8B7355" stroke={shade("#8B7355", 0.3)} strokeWidth="2" />
          <path d={`M${x} ${(y as number) - 22} Q${(x as number) + (i % 2 === 0 ? 10 : -10)} ${(y as number) - 38} ${(x as number) + (i % 2 === 0 ? 4 : -4)} ${(y as number) - 45}`} stroke="#8B7355" strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>
      ))}
    </g>
  );
};

const LaCercaMasLargaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="120" fill="#F4C87A" opacity="0.35" />
      <rect x="90" y="200" width="230" height="50" fill="#BC6C25" opacity="0.5" />
      {[110, 150, 190, 230, 270, 300].map((x) => (
        <line key={x} x1={x} y1="150" x2={x} y2="230" stroke={dark} strokeWidth="4" />
      ))}
      <line x1="100" y1="165" x2="310" y2="165" stroke={accentColor} strokeWidth="3" />
      <line x1="100" y1="185" x2="310" y2="185" stroke={accentColor} strokeWidth="3" />
      <line x1="100" y1="205" x2="310" y2="205" stroke={accentColor} strokeWidth="3" />
    </g>
  );
};

const ElUnicoAnimalConCacaCubica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="180" cy="195" rx="45" ry="32" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="145" cy="185" rx="16" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="136" cy="180" r="3" fill="#1A1A1A" />
      <ellipse cx="128" cy="172" rx="5" ry="7" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M150 225 L146 238 M170 228 L168 240 M195 225 L198 238" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      {[[250, 225], [275, 235], [255, 245]].map(([x, y], i) => (
        <rect key={x as number} x={(x as number) - 9} y={(y as number) - 9} width="18" height="18" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" transform={`rotate(${i * 8} ${x} ${y})`} />
      ))}
    </g>
  );
};

const ElTimTamSlam: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const choc = "#4A2C2A";
  const cup = "#F5F0E6";
  return (
    <g>
      <path d="M155 240 L165 180 L245 180 L255 240 Z" fill={cup} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="180" rx="40" ry="10" fill={shade(cup, 0.15)} stroke={dark} strokeWidth="2.5" />
      <path d="M195 205 L195 130 L215 130 L215 205 Z" fill={choc} stroke={shade(choc, 0.3)} strokeWidth="2.5" />
      <path d="M195 130 L198 118 M215 130 L212 118" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M108 190 L118 195 M108 205 L120 208" stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const LaCarreraQueDetieneAUnPais: IllustrationComponent = ({ accentColor }) => {
  const horse = "#6B4423";
  return (
    <g>
      <line x1="270" y1="240" x2="270" y2="110" stroke="#F5F0E6" strokeWidth="8" />
      <line x1="270" y1="115" x2="270" y2="235" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="10 10" />
      <path d="M110 225 Q150 210 190 218 Q225 224 245 210 L242 232 Q210 245 175 240 Q135 238 108 235 Z" fill={horse} stroke={shade(horse, 0.3)} strokeWidth="3" />
      <path d="M242 210 Q255 190 250 170" stroke={horse} strokeWidth="9" strokeLinecap="round" fill="none" />
      <ellipse cx="252" cy="165" rx="10" ry="8" fill={horse} stroke={shade(horse, 0.3)} strokeWidth="2" />
      <path d="M110 225 Q95 235 85 245 M150 235 Q145 245 140 250" stroke={shade(horse, 0.4)} strokeWidth="4" strokeLinecap="round" />
      {[[200, 150], [230, 140], [180, 130]].map(([x, y], i) => (
        <rect key={x as number} x={x} y={y} width="8" height="8" fill={i % 2 === 0 ? accentColor : "#F4A300"} transform={`rotate(${i * 30} ${x} ${y})`} />
      ))}
    </g>
  );
};

export const australiaIllustrations: Record<string, IllustrationDefinition> = {
  "opera-house": { component: OperaHouse },
  "gran-barrera-coral": { component: GranBarreraCoral },
  canguros: { component: Canguros },
  "ayers-rock": { component: AyersRock },
  "aborigenes-arte": { component: AborigenesArte },
  vegemite: { component: Vegemite },
  surf: { component: Surf },
  "animales-peligrosos": { component: AnimalesPeligrosos },
  acdc: { component: Acdc },
  outback: { component: Outback },
  "primera-flota-convictos": { component: PrimeraFlotaConvictos },
  "puente-de-la-percha": { component: PuenteDeLaPercha },
  "futbol-australiano-afl": { component: FutbolAustralianoAFL },
  "las-cenizas-de-the-ashes": { component: LasCenizasDeTheAshes },
  "la-bandera-aborigen-y-su-batalla-legal": { component: LaBanderaAborigenYSuBatallaLegal },
  "la-guerra-contra-los-emus": { component: LaGuerraContraLosEmus },
  "la-cerca-mas-larga-del-mundo": { component: LaCercaMasLargaDelMundo },
  "el-unico-animal-con-caca-cubica": { component: ElUnicoAnimalConCacaCubica },
  "el-tim-tam-slam": { component: ElTimTamSlam },
  "la-carrera-que-detiene-a-un-pais": { component: LaCarreraQueDetieneAUnPais },
};
