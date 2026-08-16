import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CrnaGoraElPaisDeLaMontanaNegra: IllustrationComponent = () => (
  <g>
    <rect x="90" y="80" width="230" height="170" fill="#D98A4A" opacity="0.3" />
    <path d="M90 250 L130 140 L165 190 L200 110 L235 185 L270 150 L320 250 Z" fill="#1B2E22" stroke="#0E1A12" strokeWidth="2.5" />
    {[[130, 140], [200, 110], [270, 150]].map(([x, y]) => (
      <path key={x as number} d={`M${x} ${y} L${(x as number) - 10} ${(y as number) + 30} L${(x as number) + 10} ${(y as number) + 30} Z`} fill="#0E1A12" opacity="0.5" />
    ))}
  </g>
);

const LaBahiaDeKotorUnFiordoQueNoLoEs: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 150 L150 100 L150 250 Z" fill="#4A5A52" stroke={dark} strokeWidth="2" />
      <path d="M320 250 L320 140 L250 90 L250 250 Z" fill="#5C6C62" stroke={dark} strokeWidth="2" />
      <rect x="160" y="200" width="90" height="50" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      {[175, 200, 225].map((x) => (
        <rect key={x} x={x - 6} y="185" width="12" height="18" fill="#C9BB98" stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M175 185 Q175 165 190 160 Q195 175 190 185" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <ellipse cx="205" cy="248" rx="115" ry="10" fill="#1B5E7A" opacity="0.5" />
    </g>
  );
};

const ElMonasterioDeOstrogTalladoEnLaRoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L110 90 L320 90 L320 250 Z" fill="#8B8378" opacity="0.65" stroke={dark} strokeWidth="2" />
      <rect x="150" y="170" width="110" height="60" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[170, 200, 230].map((x) => (
        <rect key={x} x={x - 8} y="185" width="16" height="26" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M150 170 L150 150 Q150 140 165 140 L245 140 Q260 140 260 150 L260 170 Z" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="140" x2="205" y2="120" stroke={dark} strokeWidth="3" />
      <line x1="197" y1="127" x2="213" y2="127" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const NjegosElPrincipeObispoPoetaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <path d="M90 250 L150 130 L210 250 Z" fill="#4A5A52" opacity="0.5" />
      <path d="M180 250 L250 100 L320 250 Z" fill="#5C6C62" opacity="0.4" />
      <circle cx="205" cy="150" r="18" fill={skin} />
      <path d="M187 150 Q205 138 223 150 L223 142 Q205 132 187 142 Z" fill="#1A1A1A" />
      <path d="M175 175 Q205 160 235 175 L228 250 L182 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="205" width="45" height="32" rx="3" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <line x1="195" y1="215" x2="220" y2="215" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="195" y1="225" x2="215" y2="225" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const ElPaisQueAdoptoElEuroSinSerDeLaUe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="160" cy="170" r="65" fill="#D4AF37" stroke={dark} strokeWidth="4" />
      <circle cx="160" cy="170" r="50" fill="none" stroke={dark} strokeWidth="3" />
      <text x="160" y="188" textAnchor="middle" fontSize="55" fontWeight="700" fill={dark}>
        €
      </text>
      <rect x="250" y="140" width="60" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="250" y1="230" x2="250" y2="245" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const ElPrsutYElQuesoDeNjegusi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 160 L140 130 L140 250 Z" fill="#9E9A92" stroke={dark} strokeWidth="2.5" />
      <rect x="140" y="180" width="55" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="135,180 167,150 200,180" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="230" y1="90" x2="230" y2="110" stroke={dark} strokeWidth="3" />
      <path d="M230 110 Q214 130 218 165 Q222 195 240 208 Q258 195 262 165 Q266 130 250 110 Q240 102 230 110 Z" fill="#B8703A" stroke={dark} strokeWidth="2.5" />
      <circle cx="285" cy="215" r="35" fill="#E8C078" stroke={dark} strokeWidth="3" />
      {[265, 285, 305].map((x) => (
        <line key={x} x1={x} y1="182" x2={x} y2="248" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
    </g>
  );
};

const ElLagoSkadarYSusPelicanos: IllustrationComponent = () => (
  <g>
    <rect x="90" y="80" width="230" height="170" fill="#3D8FB0" opacity="0.35" />
    {[[130, 220], [175, 235], [220, 215], [265, 230]].map(([x, y]) => (
      <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="16" ry="7" fill="#2E7D32" opacity="0.6" />
    ))}
    <ellipse cx="180" cy="175" rx="34" ry="20" fill="#F5F0E6" stroke="#B0A48E" strokeWidth="2.5" />
    <path d="M210 172 L245 160 Q252 165 249 175 L240 185 Q230 190 218 182 L208 178 Z" fill="#F4A300" stroke="#B7410E" strokeWidth="2" />
    <circle cx="222" cy="176" r="3.5" fill="#1A1A1A" />
    <ellipse cx="260" cy="150" rx="28" ry="16" fill="#F5F0E6" stroke="#B0A48E" strokeWidth="2.5" />
    <path d="M285 148 L312 138 Q318 143 315 151 L308 159 Q300 163 290 157 L282 154 Z" fill="#F4A300" stroke="#B7410E" strokeWidth="2" />
    <circle cx="296" cy="150" r="3" fill="#1A1A1A" />
  </g>
);

const ElMausoleoDeNjegosEnLaCimaDelLovcen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L205 110 L320 250 Z" fill="#4A5A52" opacity="0.5" />
      <rect x="165" y="195" width="80" height="55" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <polygon points="160,195 205,165 250,195" fill="#D4AF37" stroke={dark} strokeWidth="2.5" />
      <path d="M205 165 Q185 140 205 118 Q210 130 215 118 Q225 132 205 152 Q215 158 205 165 Z" fill="#D4AF37" stroke={dark} strokeWidth="2.5" />
      <rect x="192" y="222" width="22" height="28" fill={dark} opacity="0.5" />
    </g>
  );
};

const ElLagoNegroGlaciarDelParqueDurmitor: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L130 140 L165 200 L205 110 L245 200 L280 140 L320 250 Z" fill="#3E5C4A" opacity="0.55" />
    <ellipse cx="205" cy="220" rx="95" ry="28" fill="#1B2E2A" stroke="#0E1A18" strokeWidth="2.5" />
    <ellipse cx="205" cy="212" rx="70" ry="16" fill="#2A4038" opacity="0.6" />
  </g>
);

const ElAguilaBicefalaQueCompartaConSerbia: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#A6192E" stroke="#6B0F1E" strokeWidth="3" />
    <path d="M205 200 L205 140" stroke="#D4AF37" strokeWidth="8" />
    <path d="M205 150 Q150 130 110 155 Q140 175 175 165 Q150 185 120 190 Q155 205 190 185" fill="#D4AF37" stroke="#8A6A10" strokeWidth="2" />
    <path d="M205 150 Q260 130 300 155 Q270 175 235 165 Q260 185 290 190 Q255 205 220 185" fill="#D4AF37" stroke="#8A6A10" strokeWidth="2" />
    <circle cx="185" cy="130" r="14" fill="#D4AF37" stroke="#8A6A10" strokeWidth="2" />
    <circle cx="225" cy="130" r="14" fill="#D4AF37" stroke="#8A6A10" strokeWidth="2" />
    <path d="M171 128 L158 124 L171 133 Z" fill="#8A6A10" />
    <path d="M239 128 L252 124 L239 133 Z" fill="#8A6A10" />
    <rect x="192" y="195" width="26" height="30" fill="#F5F0E6" stroke="#8A6A10" strokeWidth="2" />
  </g>
);

export const montenegroIllustrations: Record<string, IllustrationDefinition> = {
  "crna-gora-el-pais-de-la-montana-negra": { component: CrnaGoraElPaisDeLaMontanaNegra },
  "la-bahia-de-kotor-un-fiordo-que-no-lo-es": { component: LaBahiaDeKotorUnFiordoQueNoLoEs },
  "el-monasterio-de-ostrog-tallado-en-la-roca": { component: ElMonasterioDeOstrogTalladoEnLaRoca },
  "njegos-el-principe-obispo-poeta-nacional": { component: NjegosElPrincipeObispoPoetaNacional },
  "el-pais-que-adopto-el-euro-sin-ser-de-la-ue": { component: ElPaisQueAdoptoElEuroSinSerDeLaUe },
  "el-prsut-y-el-queso-de-njegusi": { component: ElPrsutYElQuesoDeNjegusi },
  "el-lago-skadar-y-sus-pelicanos": { component: ElLagoSkadarYSusPelicanos },
  "el-mausoleo-de-njegos-en-la-cima-del-lovcen": { component: ElMausoleoDeNjegosEnLaCimaDelLovcen },
  "el-lago-negro-glaciar-del-parque-durmitor": { component: ElLagoNegroGlaciarDelParqueDurmitor },
  "el-aguila-bicefala-que-comparte-con-serbia": { component: ElAguilaBicefalaQueCompartaConSerbia },
};
