import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const FosfatoNauru: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rock = "#E8E4DC";
  return (
    <g>
      <polygon points="120,240 175,150 230,240" fill={rock} stroke={shade(rock, 0.3)} strokeWidth="3" />
      <polygon points="180,240 230,170 280,240" fill={tint(rock, 0.1)} stroke={shade(rock, 0.3)} strokeWidth="2.5" opacity="0.85" />
      <rect x="250" y="205" width="10" height="35" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M255 205 Q280 195 295 165" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M290 155 L305 148 L298 168 Z" fill={dark} />
    </g>
  );
};

const TopografiaLunar: IllustrationComponent = () => {
  const rock = "#B0AFA8";
  return (
    <g>
      <rect x="90" y="80" width="230" height="90" fill="#F4C87A" opacity="0.3" />
      {[[120, 240, 150], [160, 240, 130], [200, 240, 165], [240, 240, 140], [280, 240, 155]].map(([x, base, peak]) => (
        <polygon key={x as number} points={`${(x as number) - 16},${base} ${x},${peak} ${(x as number) + 16},${base}`} fill={rock} stroke={shade(rock, 0.3)} strokeWidth="1.5" />
      ))}
      <circle cx="270" cy="110" r="16" fill="#F4A300" opacity="0.6" />
    </g>
  );
};

const DiabetesObesidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const food = "#E8A33D";
  return (
    <g>
      <ellipse cx="175" cy="200" rx="55" ry="18" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      {[[150, 195], [175, 190], [200, 197]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="14" ry="8" fill={food} stroke={shade(food, 0.3)} strokeWidth="1.5" />
      ))}
      <rect x="255" y="165" width="34" height="60" rx="6" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <rect x="262" y="175" width="20" height="14" fill={accentColor} opacity="0.6" />
      <circle cx="272" cy="205" r="4" fill="#C1272D" />
    </g>
  );
};

const CentroDetencionRefugiados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9BE8F";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={sand} opacity="0.6" />
      {[110, 140, 170, 200, 230, 260, 290].map((x) => (
        <line key={x} x1={x} y1="165" x2={x} y2="220" stroke="#5C5C5C" strokeWidth="2" />
      ))}
      <line x1="110" y1="180" x2="290" y2="180" stroke="#5C5C5C" strokeWidth="1.5" />
      <line x1="110" y1="200" x2="290" y2="200" stroke="#5C5C5C" strokeWidth="1.5" />
      {[[130, 220], [220, 218]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} L${(x as number) + 25} ${(y as number) - 25} L${(x as number) + 50} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
    </g>
  );
};

const SinCapitalOficial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 240 Q205 250 320 240 L320 250 L90 250 Z" fill={water} />
      <path d="M90 220 Q205 210 320 220" fill="none" stroke="#5C5C5C" strokeWidth="8" />
      <rect x="175" y="180" width="60" height="40" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="170,180 205,155 240,180" fill={dark} opacity="0.5" />
      <rect x="195" y="195" width="12" height="25" fill={dark} opacity="0.5" />
    </g>
  );
};

const PecesDomesticadosLaguna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <ellipse cx="205" cy="180" rx="95" ry="55" fill={water} opacity="0.55" stroke={dark} strokeWidth="2.5" />
      {[[160, 175], [210, 195], [250, 165], [190, 155]].map(([x, y], i) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="14" ry="7" fill="#C9D3DB" stroke={dark} strokeWidth="1.5" opacity={0.95 - i * 0.05} />
          <path d={`M${(x as number) - 14} ${y} L${(x as number) - 22} ${(y as number) - 5} M${(x as number) - 14} ${y} L${(x as number) - 22} ${(y as number) + 5}`} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const RefugioFiscalNauru: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      <ellipse cx="205" cy="205" rx="70" ry="30" fill={accentColor} opacity="0.5" />
      <rect x="170" y="150" width="70" height="65" rx="6" fill="#455A64" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="182" r="14" fill="#78909C" stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="182" r="4" fill={dark} />
    </g>
  );
};

const IdiomaNauruano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 160 Q130 145 150 145 L260 145 Q280 145 280 160 L280 220 Q280 235 260 235 L150 235 Q130 235 130 220 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="145" x2="205" y2="235" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      {[165, 180].map((y) => (
        <g key={y}>
          <line x1="145" y1={y} x2="195" y2={y} stroke={dark} strokeWidth="1.2" opacity="0.4" />
          <line x1="215" y1={y} x2="265" y2={y} stroke={dark} strokeWidth="1.2" opacity="0.4" />
        </g>
      ))}
      {[[175, 120], [235, 115], [155, 105]].map(([x, y]) => (
        <text key={x as number} x={x} y={y} fontSize="20" fontWeight="700" fill={accentColor} fontFamily="serif">Aa</text>
      ))}
    </g>
  );
};

const CambioClimaticoNauru: IllustrationComponent = ({ accentColor }) => {
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="120" fill={water} opacity="0.55" />
      <rect x="90" y="200" width="230" height="50" fill={accentColor} opacity="0.5" />
      {[[130, 195], [190, 190], [250, 198], [290, 192]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 12} ${(y as number) - 10} ${(x as number) + 24} ${y}`} fill="none" stroke="#fff" strokeWidth="3" opacity="0.6" />
      ))}
    </g>
  );
};

const RecuperacionAmbiental: IllustrationComponent = ({ accentColor }) => {
  const rock = "#B0AFA8";
  return (
    <g>
      {[[130, 240, 190], [180, 240, 200], [230, 240, 195], [275, 240, 205]].map(([x, base, peak]) => (
        <polygon key={x as number} points={`${(x as number) - 14},${base} ${x},${peak} ${(x as number) + 14},${base}`} fill={rock} stroke={shade(rock, 0.3)} strokeWidth="1.5" />
      ))}
      {[[150, 235], [205, 232], [255, 236]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 4} ${(y as number) - 14} ${x} ${(y as number) - 24}`} stroke={accentColor} strokeWidth="4" strokeLinecap="round" fill="none" />
      ))}
      {[[150, 211], [205, 208], [255, 212]].map(([x, y]) => (
        <path key={`l${x}`} d={`M${x} ${y} Q${(x as number) - 8} ${(y as number) - 3} ${(x as number) - 12} ${(y as number) - 10}`} stroke={accentColor} strokeWidth="3" fill="none" />
      ))}
    </g>
  );
};

const DoceTribusBandera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const white = "#F5F0E6";
  return (
    <g>
      <rect x="100" y="95" width="210" height="140" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="100" y="158" width="210" height="9" fill={gold} />
      <path d="M175 183 L180 199 L196 196 L184 207 L196 218 L180 215 L175 231 L170 215 L154 218 L166 207 L154 196 L170 199 Z" fill={white} stroke={shade(white, 0.25)} strokeWidth="1.5" />
    </g>
  );
};

const LevantamientoDePesas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="205" cy="140" r="14" fill={skin} />
      <path d="M191 154 Q205 148 219 154 L224 205 L186 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M186 200 L165 235 M224 200 L245 235" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M195 205 L178 240 M215 205 L232 240" stroke={dark} strokeWidth="4" />
      <path d="M191 158 L170 120 M219 158 L240 120" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <line x1="150" y1="118" x2="260" y2="118" stroke="#2E2E2E" strokeWidth="6" />
      <circle cx="160" cy="118" r="16" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
      <circle cx="250" cy="118" r="16" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
      <circle cx="160" cy="118" r="8" fill="#5C5C5C" />
      <circle cx="250" cy="118" r="8" fill="#5C5C5C" />
    </g>
  );
};

export const nauruIllustrations: Record<string, IllustrationDefinition> = {
  "fosfato-nauru": { component: FosfatoNauru },
  "topografia-lunar": { component: TopografiaLunar },
  "diabetes-obesidad": { component: DiabetesObesidad },
  "centro-detencion-refugiados": { component: CentroDetencionRefugiados },
  "sin-capital-oficial": { component: SinCapitalOficial },
  "peces-domesticados-laguna": { component: PecesDomesticadosLaguna },
  "refugio-fiscal-nauru": { component: RefugioFiscalNauru },
  "idioma-nauruano": { component: IdiomaNauruano },
  "cambio-climatico-nauru": { component: CambioClimaticoNauru },
  "recuperacion-ambiental": { component: RecuperacionAmbiental },
  "doce-tribus-bandera": { component: DoceTribusBandera },
  "levantamiento-de-pesas-nauru": { component: LevantamientoDePesas },
};
