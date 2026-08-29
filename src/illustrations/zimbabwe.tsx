import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CataratasVictoria: IllustrationComponent = ({ accentColor }) => {
  const mist = "#E8E4DC";
  return (
    <g>
      <rect x="150" y="110" width="110" height="130" fill={accentColor} opacity="0.85" />
      {[160, 180, 200, 220, 240].map((x) => (
        <line key={x} x1={x} y1="115" x2={x} y2="235" stroke={tint(accentColor, 0.5)} strokeWidth="4" opacity="0.7" />
      ))}
      <ellipse cx="205" cy="240" rx="90" ry="14" fill="#fff" opacity="0.6" />
      <ellipse cx="180" cy="100" rx="70" ry="30" fill={mist} opacity="0.85" />
      <ellipse cx="240" cy="90" rx="40" ry="20" fill={mist} opacity="0.7" />
    </g>
  );
};

const GranZimbabwe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <ellipse cx="205" cy="190" rx="95" ry="45" fill="none" stroke={accentColor} strokeWidth="16" />
      <ellipse cx="205" cy="190" rx="95" ry="45" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={115 + i * 24} y="175" width="20" height="10" fill={i % 2 === 0 ? accentColor : dark} opacity="0.7" />
      ))}
      <rect x="185" y="140" width="14" height="55" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const AveZimbabwe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#8B7355";
  return (
    <g>
      <rect x="190" y="200" width="30" height="40" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2.5" />
      <ellipse cx="205" cy="160" rx="24" ry="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M195 145 L175 138 L192 155 Z" fill={dark} />
      <path d="M205 130 Q198 118 205 108 Q212 118 205 130 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M195 190 Q185 210 190 200 M215 190 Q225 210 220 200" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const Hiperinflacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="110" y="140" width="190" height="100" rx="6" fill={green} stroke={dark} strokeWidth="3" />
      <rect x="120" y="150" width="170" height="80" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <text x="205" y="200" fontSize="26" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">100.000.000.000.000</text>
      <circle cx="150" cy="190" r="16" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <circle cx="260" cy="190" r="16" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const Mbira: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <rect x="140" y="180" width="130" height="60" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" />
      {[150, 165, 180, 195, 210, 225, 240, 255].map((x, i) => (
        <rect key={x} x={x} y="150" width="9" height={40 + (i % 3) * 15} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const EsculturaShona: IllustrationComponent = ({ accentColor }) => {
  const stone = "#2E2E2E";
  return (
    <g>
      <path d="M205 235 L200 190 Q195 170 205 155 Q195 145 200 125 Q205 110 215 125 Q222 140 212 155 Q222 170 218 190 L215 235 Z" fill={stone} stroke={shade(stone, 0.2)} strokeWidth="2.5" />
      <ellipse cx="205" cy="235" rx="30" ry="8" fill={accentColor} opacity="0.4" />
    </g>
  );
};

const ThomasMapfumo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 220 Q140 245 165 250 Q190 253 190 225 Q190 200 165 195 Q155 205 150 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="163" y="140" width="8" height="60" fill="#5C3A1E" />
      <rect x="158" y="130" width="18" height="14" fill="#5C3A1E" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={163 + i * 3} y1="140" x2={163 + i * 3} y2="220" stroke={dark} strokeWidth="0.8" opacity="0.5" />
      ))}
      <ellipse cx="270" cy="200" rx="26" ry="18" fill="#B8860B" stroke={dark} strokeWidth="2.5" />
      <path d="M245 200 Q235 195 232 180 Q240 178 250 190 Z" fill="#B8860B" stroke={dark} strokeWidth="1.5" />
      <path d="M232 180 L222 175 L228 188 Z" fill={dark} />
    </g>
  );
};

const HwangeElefantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <ellipse cx="205" cy="225" rx="90" ry="20" fill={water} opacity="0.6" />
      {[[140, 200, 1], [205, 195, 0.85], [265, 205, 0.7]].map(([x, y, scale], i) => (
        <g key={x as number} transform={`translate(${x} ${y}) scale(${scale})`}>
          <path d="M0 0 Q-8 -32 18 -36 Q45 -38 50 -18 Q55 -5 48 3 L45 10 L36 10 L34 0 L8 0 L4 10 L-4 10 Z" fill={accentColor} stroke={dark} strokeWidth="2" opacity={1 - i * 0.08} />
          <path d="M-3 -20 Q-16 -14 -18 4 Q-19 12 -12 14 Q-5 12 -2 2" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const Sadza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const white = "#F5F0E6";
  return (
    <g>
      <ellipse cx="205" cy="220" rx="85" ry="22" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M155 210 Q155 175 205 170 Q255 175 255 210 Q255 218 205 220 Q155 218 155 210 Z" fill={white} stroke={shade(white, 0.2)} strokeWidth="2" />
      {[[190, 190], [220, 195]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="6" fill="#4A8F4E" opacity="0.7" />
      ))}
    </g>
  );
};

const NyaminyamiKariba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D3F6E";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.85" />
      <path d="M150 235 Q170 190 150 160 Q130 130 155 110" fill="none" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
      <ellipse cx="155" cy="105" rx="16" ry="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M139 100 L125 95 L133 110 Z" fill={dark} />
      <circle cx="160" cy="100" r="2.5" fill="#F4A300" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${150 - i * 4} ${190 - i * 20} Q${140 - i * 4} ${185 - i * 20} ${150 - i * 4} ${180 - i * 20}`} stroke={dark} strokeWidth="1.5" opacity="0.4" fill="none" />
      ))}
    </g>
  );
};

const ElImperioDelOroQueSucedioAlGranZimbabwe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  return (
    <g>
      <circle cx="200" cy="150" r="16" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M182 165 Q200 158 218 165 L212 235 L188 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M188 145 L212 145 L206 130 L194 130 Z" fill="#D4AF37" stroke={dark} strokeWidth="1.8" />
      <line x1="218" y1="175" x2="250" y2="160" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <rect x="245" y="150" width="30" height="12" fill="#D4AF37" stroke={dark} strokeWidth="1.8" />
      <rect x="245" y="165" width="30" height="12" fill="#D4AF37" stroke={dark} strokeWidth="1.8" opacity="0.85" />
    </g>
  );
};

const LasRocasBalanceadasConArteRupestreMilenario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 235 320 250" stroke="#8C8C74" strokeWidth="14" opacity="0.3" fill="none" />
      <ellipse cx="205" cy="225" rx="70" ry="26" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="195" cy="180" rx="50" ry="24" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.6" />
      <ellipse cx="205" cy="130" rx="34" ry="18" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M150 200 Q160 210 175 208 Q168 195 152 190" fill="none" stroke="#B8571F" strokeWidth="3" opacity="0.7" />
      <path d="M230 195 L245 205 M235 200 L248 195" stroke="#B8571F" strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const ElBaileQueLaUnescoDeclaroPrimeroDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="175" cy="145" r="13" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M160 160 Q175 152 190 160 L182 220 Q175 230 168 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M160 175 Q145 190 155 205" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <circle cx="235" cy="150" r="13" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M220 165 Q235 157 250 165 L258 225 Q235 232 212 225 Z" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.4" />
      <path d="M250 180 Q265 195 255 210" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const ElReyQueFundoUnReinoTrasHuirDeZululandia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  return (
    <g>
      <circle cx="200" cy="130" r="15" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M182 145 Q200 138 218 145 L212 225 L188 225 Z" fill="#3A2418" stroke={dark} strokeWidth="2.4" />
      <path d="M195 160 L205 160 L212 220 L188 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="150" cy="185" rx="20" ry="45" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M150 145 L150 225" stroke={dark} strokeWidth="1.6" opacity="0.4" />
      <line x1="212" y1="170" x2="260" y2="140" stroke={dark} strokeWidth="4" />
      <polygon points="260,140 275,133 265,150" fill={dark} />
    </g>
  );
};

const LasTierrasAltasConNeblinaYTerrazasDePiedra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 Q140 210 190 245 L190 250 L90 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M110 215 Q160 180 210 215 L210 245 Q160 235 110 245 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.4" />
      <path d="M150 180 Q210 140 270 180 L270 215 Q210 200 150 215 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <ellipse cx="230" cy="150" rx="70" ry="24" fill="#F5F0E6" opacity="0.7" />
      <ellipse cx="150" cy="200" rx="55" ry="16" fill="#F5F0E6" opacity="0.6" />
    </g>
  );
};

export const zimbabweIllustrations: Record<string, IllustrationDefinition> = {
  "cataratas-victoria": { component: CataratasVictoria },
  "gran-zimbabwe": { component: GranZimbabwe },
  "ave-zimbabwe": { component: AveZimbabwe },
  hiperinflacion: { component: Hiperinflacion },
  mbira: { component: Mbira },
  "escultura-shona": { component: EsculturaShona },
  "thomas-mapfumo": { component: ThomasMapfumo },
  "hwange-elefantes": { component: HwangeElefantes },
  sadza: { component: Sadza },
  "nyaminyami-kariba": { component: NyaminyamiKariba },
  "el-imperio-del-oro-que-sucedio-al-gran-zimbabwe": { component: ElImperioDelOroQueSucedioAlGranZimbabwe },
  "las-rocas-balanceadas-con-arte-rupestre-milenario": { component: LasRocasBalanceadasConArteRupestreMilenario },
  "el-baile-que-la-unesco-declaro-primero-del-mundo": { component: ElBaileQueLaUnescoDeclaroPrimeroDelMundo },
  "el-rey-que-fundo-un-reino-tras-huir-de-zululandia": { component: ElReyQueFundoUnReinoTrasHuirDeZululandia },
  "las-tierras-altas-con-neblina-y-terrazas-de-piedra": { component: LasTierrasAltasConNeblinaYTerrazasDePiedra },
};
