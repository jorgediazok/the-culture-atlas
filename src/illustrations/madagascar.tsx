import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

function baobab(x: number, y: number, scale: number, dark: string) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-9" y="-70" width="18" height="70" fill="#C1440E" stroke={dark} strokeWidth="2.2" />
      <path d="M-9 -70 Q-16 -85 -6 -92 M9 -70 Q16 -85 6 -92 M0 -70 L0 -95" stroke="#8B3010" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
  );
}

const LaAvenidaDeGigantesQueTocanElCielo: IllustrationComponent = () => (
  <g>
    <rect x="90" y="220" width="230" height="30" fill="#C1440E" opacity="0.4" />
    {baobab(130, 245, 1.1, "#8B3010")}
    {baobab(175, 248, 0.85, "#8B3010")}
    {baobab(225, 246, 1, "#8B3010")}
    {baobab(270, 249, 0.75, "#8B3010")}
    <path d="M90 250 Q205 244 320 250" fill="none" stroke="#8B3010" strokeWidth="2" opacity="0.5" />
  </g>
);

const LosPrimatesQueNoExistenEnNingunOtroLugar: IllustrationComponent = () => (
  <g>
    <rect x="150" y="180" width="20" height="60" fill="#5C3A21" />
    <ellipse cx="200" cy="215" rx="34" ry="26" fill="#3A2A5C" stroke="#1B1030" strokeWidth="2.6" />
    <circle cx="200" cy="175" r="22" fill="#3A2A5C" stroke="#1B1030" strokeWidth="2.4" />
    <path d="M182 165 Q192 155 198 165" fill="#F5F0E6" />
    <circle cx="192" cy="167" r="3" fill="#0A0805" />
    <circle cx="208" cy="167" r="3" fill="#0A0805" />
    <path d="M234 220 Q270 210 280 240 Q265 260 250 245 Q265 235 250 225 Q260 240 245 240" fill="none" stroke="#1B1030" strokeWidth="6" strokeLinecap="round" />
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={i} x={252 + i * 6} y="228" width="5" height="14" fill={i % 2 === 0 ? "#F5F0E6" : "#1B1030"} transform={`rotate(${20 + i * 6} ${255 + i * 6} 235)`} />
    ))}
  </g>
);

const LaFiestaDondeSeVuelveABailarConLosMuertos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(150, 240, 0.85, dark, accentColor)}
      {person(250, 240, 0.85, dark, tint(accentColor, 0.25))}
      <rect x="180" y="205" width="40" height="18" rx="7" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      {person(200, 230, 0.9, dark, "#D9A227")}
      <path d="M130 220 Q150 205 170 220 M230 220 Q250 205 270 220" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const LasTerrazasVerdesQueAlimentanATodaLaIsla: IllustrationComponent = () => (
  <g>
    {[0, 1, 2, 3, 4].map((i) => (
      <path key={i} d={`M${90 + i * 8} ${250 - i * 30} L${320 - i * 8} ${250 - i * 30 - 10} L${320 - i * 8} ${232 - i * 30} L${90 + i * 8} ${222 - i * 30} Z`} fill={i % 2 === 0 ? "#3A7A45" : "#5C9A5C"} stroke="#1B4B1E" strokeWidth="1.8" />
    ))}
    <path d="M110 240 L110 90" stroke="#1B7A9C" strokeWidth="3" opacity="0.6" />
  </g>
);

const ElBosqueDePiedraDondeNadiePuedeCaminarDescalzo: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#F5D9A8" opacity="0.2" />
    {[[110, 250, 90], [140, 250, 130], [170, 250, 70], [200, 250, 150], [230, 250, 100], [260, 250, 140], [290, 250, 80]].map(([x, y, h], i) => (
      <polygon key={i} points={`${x - 8},${y} ${x},${y - h} ${x + 8},${y}`} fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2" />
    ))}
  </g>
);

const ElGanadoDeCuernosLargosQueMideLaRiqueza: IllustrationComponent = () => (
  <g>
    <ellipse cx="195" cy="200" rx="50" ry="30" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.6" />
    <path d="M175 175 Q195 165 215 175 Q220 185 195 182 Q170 185 175 175" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
    <ellipse cx="255" cy="195" rx="18" ry="14" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
    <path d="M245 185 Q235 165 245 155 M262 185 Q272 165 262 155" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
    <path d="M160 225 L155 250 M180 228 L178 252 M210 228 L212 252 M230 225 L232 250" stroke="#5C3A21" strokeWidth="6" strokeLinecap="round" />
  </g>
);

const ElArteDeHablarQueDecideQuienManda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(180, 235, 1.05, dark, accentColor)}
      <path d="M215 200 Q235 190 240 205" fill="none" stroke={dark} strokeWidth="2.4" />
      {person(255, 245, 0.75, dark, "#D9A227")}
      {person(280, 243, 0.7, dark, tint(accentColor, 0.25))}
      {person(300, 246, 0.7, dark, "#F5F0E6")}
    </g>
  );
};

const LaVainaNegraQuePerfumaAlMundoEntero: IllustrationComponent = () => (
  <g>
    <path d="M140 100 Q160 90 175 105 Q190 120 175 140 Q155 130 140 100" fill="#D9A227" stroke="#8A6A10" strokeWidth="2" />
    {[[175, 130], [195, 160], [210, 195], [195, 220]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 10} ${y + 20} ${x} ${y + 45}`} fill="none" stroke="#2A1F1A" strokeWidth="7" strokeLinecap="round" />
    ))}
  </g>
);

const ElInstrumentoDeBambuQueCantaComoUnArpa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(160, 240, 1, dark, accentColor)}
      <rect x="190" y="170" width="16" height="80" rx="8" fill="#D9A227" stroke="#8B5A2B" strokeWidth="2.4" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1="192" y1={178 + i * 12} x2="204" y2={178 + i * 12} stroke="#5C3A21" strokeWidth="1.2" />
      ))}
    </g>
  );
};

const ElPalacioRealQueDominaLaCapitalDesdeLaColina: IllustrationComponent = () => (
  <g>
    <path d="M100 250 L110 200 L320 200 L310 250 Z" fill="#3A7A45" opacity="0.4" />
    <rect x="160" y="150" width="80" height="80" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="2.6" />
    <path d="M155 150 L200 120 L245 150" fill="none" stroke="#3A2A1E" strokeWidth="2.6" />
    <rect x="192" y="90" width="16" height="60" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="2.2" />
    <path d="M192 90 L200 75 L208 90" fill="none" stroke="#3A2A1E" strokeWidth="2.2" />
    <rect x="185" y="200" width="30" height="30" fill="#3A2A1E" />
  </g>
);

const PiratasIslaSantaMaria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="150" fill="#1D6FA5" opacity="0.35" />
      <path d="M130 235 Q205 225 280 235 Q270 220 205 218 Q140 220 130 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <rect x="200" y="120" width="6" height="95" fill="#5C3A21" />
      <path d="M206 130 L260 145 L206 165 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
      <circle cx="223" cy="145" r="4" fill="#F5F0E6" />
      <path d="M215 141 L219 145 L215 149 M231 141 L227 145 L231 149" stroke="#F5F0E6" strokeWidth="1.6" />
      <ellipse cx="270" cy="230" rx="18" ry="8" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.8" />
      <path d="M255 225 L260 210 M285 225 L280 210" stroke="#3A2A1E" strokeWidth="3" />
    </g>
  );
};

const SistemaDeFady: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const green = "#3A7A45";
  return (
    <g>
      <ellipse cx="255" cy="230" rx="40" ry="16" fill={accentColor} opacity="0.3" />
      <line x1="255" y1="235" x2="255" y2="150" stroke="#5C3A21" strokeWidth="8" />
      <path d="M255 150 Q225 155 220 130 Q245 130 255 150 Q265 125 290 130 Q285 155 255 150 Z" fill={green} stroke={shade(green, 0.3)} strokeWidth="2.4" />
      <line x1="130" y1="205" x2="180" y2="200" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M130 220 Q130 190 160 185 L160 235 Q145 240 130 220 Z" fill={skin} stroke={dark} strokeWidth="2.4" />
      <circle cx="118" cy="210" r="12" fill={skin} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CamaleonesMalgaches: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 240 L120 250 M170 245 L155 260" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M150 235 Q160 200 200 195 Q205 175 220 178 Q225 190 215 200 Q245 195 255 215 Q235 225 210 220 Q190 235 165 232 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M250 220 Q260 235 250 250" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M225 195 Q245 185 255 200" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <circle cx="256" cy="201" r="4" fill="#8B1A1A" />
      <circle cx="205" cy="195" r="20" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <circle cx="197" cy="188" r="9" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      <circle cx="197" cy="188" r="3.5" fill="#1A1A1A" />
    </g>
  );
};

const SedaLandibeLambaMena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const STRIPES = [0, 1, 2, 3];
  return (
    <g>
      <ellipse cx="110" cy="200" rx="20" ry="28" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.4" />
      <path d="M95 185 Q110 175 125 185 M95 215 Q110 225 125 215" fill="none" stroke={dark} strokeWidth="1.6" opacity="0.5" />
      <rect x="140" y="120" width="150" height="110" fill="#8B1A1A" stroke={shade("#8B1A1A", 0.3)} strokeWidth="3" />
      {STRIPES.map((i) => (
        <rect key={i} x="140" y={132 + i * 24} width="150" height="12" fill={gold} opacity="0.85" />
      ))}
    </g>
  );
};

const RomazavaPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const MEAT = [
    [240, 202], [262, 198], [280, 206],
  ];
  return (
    <g>
      <ellipse cx="160" cy="215" rx="55" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="160" cy="208" rx="42" ry="12" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <ellipse cx="260" cy="215" rx="55" ry="20" fill="#1B4B1E" stroke={shade("#1B4B1E", 0.2)} strokeWidth="2.6" />
      <ellipse cx="260" cy="207" rx="42" ry="12" fill={accentColor} opacity="0.85" />
      {MEAT.map(([x, y]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="10" ry="7" fill="#8B5A2B" stroke={dark} strokeWidth="1.6" />
      ))}
    </g>
  );
};

export const madagascarIllustrations: Record<string, IllustrationDefinition> = {
  "la-avenida-de-gigantes-que-tocan-el-cielo": { component: LaAvenidaDeGigantesQueTocanElCielo },
  "los-primates-que-no-existen-en-ningun-otro-lugar": { component: LosPrimatesQueNoExistenEnNingunOtroLugar },
  "la-fiesta-donde-se-vuelve-a-bailar-con-los-muertos": { component: LaFiestaDondeSeVuelveABailarConLosMuertos },
  "las-terrazas-verdes-que-alimentan-a-toda-la-isla": { component: LasTerrazasVerdesQueAlimentanATodaLaIsla },
  "el-bosque-de-piedra-donde-nadie-puede-caminar-descalzo": { component: ElBosqueDePiedraDondeNadiePuedeCaminarDescalzo },
  "el-ganado-de-cuernos-largos-que-mide-la-riqueza": { component: ElGanadoDeCuernosLargosQueMideLaRiqueza },
  "el-arte-de-hablar-que-decide-quien-manda": { component: ElArteDeHablarQueDecideQuienManda },
  "la-vaina-negra-que-perfuma-al-mundo-entero": { component: LaVainaNegraQuePerfumaAlMundoEntero },
  "el-instrumento-de-bambu-que-canta-como-un-arpa": { component: ElInstrumentoDeBambuQueCantaComoUnArpa },
  "el-palacio-real-que-domina-la-capital-desde-la-colina": { component: ElPalacioRealQueDominaLaCapitalDesdeLaColina },
  "piratas-isla-santa-maria": { component: PiratasIslaSantaMaria },
  "sistema-de-fady": { component: SistemaDeFady },
  "camaleones-malgaches": { component: CamaleonesMalgaches },
  "seda-landibe-lamba-mena": { component: SedaLandibeLambaMena },
  "romazava-plato-nacional": { component: RomazavaPlatoNacional },
};
