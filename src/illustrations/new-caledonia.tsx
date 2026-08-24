import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SegundaBarreraDeCoralMasLarga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      {[[130, 220, 26], [180, 210, 32], [230, 225, 24], [270, 205, 28]].map(([x, y, h], i) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 14} ${(y as number) - (h as number)} ${x} ${(y as number) - (h as number) * 1.4} Q${(x as number) + 14} ${(y as number) - (h as number)} ${x} ${y} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
      ))}
      {[[150, 165], [210, 145], [255, 175]].map(([x, y]) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="12" ry="7" fill="#F4A300" stroke={dark} strokeWidth="1.2" />
          <path d={`M${(x as number) - 12} ${y} L${(x as number) - 19} ${(y as number) - 5} M${(x as number) - 12} ${y} L${(x as number) - 19} ${(y as number) + 5}`} stroke={dark} strokeWidth="1.2" />
        </g>
      ))}
    </g>
  );
};

const LaGranChozaKanak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const thatch = "#8B5A2B";
  return (
    <g>
      <path d="M140 235 Q140 145 205 105 Q270 145 270 235 Z" fill={thatch} stroke={shade(thatch, 0.3)} strokeWidth="3" />
      {[150, 165, 180].map((y, i) => (
        <path key={y} d={`M${150 - i * 3} ${230 - i * 22} Q205 ${215 - i * 22} ${260 + i * 3} ${230 - i * 22}`} fill="none" stroke={shade(thatch, 0.35)} strokeWidth="1.5" opacity="0.5" />
      ))}
      <line x1="205" y1="105" x2="205" y2="70" stroke="#5C3A1E" strokeWidth="4" />
      <path d="M195 78 L205 70 L215 78 L210 90 L200 90 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const UnCuartoDelNiquelDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const redEarth = "#B0855A";
  return (
    <g>
      <polygon points="110,240 175,150 240,240" fill={redEarth} stroke={shade(redEarth, 0.3)} strokeWidth="3" />
      <polygon points="200,240 250,175 300,240" fill={shade(redEarth, 0.1)} stroke={shade(redEarth, 0.3)} strokeWidth="2.5" opacity="0.85" />
      <line x1="180" y1="220" x2="200" y2="170" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <path d="M192 178 L200 170 L212 180 L200 190 Z" fill={dark} />
    </g>
  );
};

const ElCagouElAveQueLadra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const grey = "#78909C";
  return (
    <g>
      <line x1="270" y1="235" x2="270" y2="150" stroke="#5C3A1E" strokeWidth="5" />
      <path d="M255 235 Q250 195 265 175 Q280 165 292 175 Q300 190 292 205 Q288 218 270 220 Q258 220 255 235 Z" fill={grey} stroke={dark} strokeWidth="2.5" />
      <path d="M275 168 L268 150 M280 168 L285 148" stroke={dark} strokeWidth="2.5" />
      <path d="M292 185 Q305 180 312 190" stroke={grey} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="285" cy="178" r="2.5" fill="#1A1A1A" />
      <line x1="270" y1="220" x2="265" y2="238" stroke={dark} strokeWidth="4" />
      <line x1="278" y1="220" x2="283" y2="238" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LaBougnaAlHornoDeTierra: IllustrationComponent = ({ accentColor }) => {
  const green = "#2E7D32";
  return (
    <g>
      <path d="M155 195 Q150 165 175 155 Q205 148 235 155 Q260 165 255 195 Q260 220 205 225 Q150 220 155 195 Z" fill={green} stroke={shade(green, 0.3)} strokeWidth="3" />
      <path d="M170 165 Q205 158 240 165 M165 190 Q205 182 245 190" fill="none" stroke={shade(green, 0.35)} strokeWidth="1.5" opacity="0.5" />
      {[[175, 200], [205, 210], [235, 200]].map((p, i) => (
        <line key={i} x1={p[0]} y1={(p[1] as number) - 40} x2={p[0]} y2={p[1]} stroke={accentColor} strokeWidth="4" strokeLinecap="round" transform={`rotate(${(i - 1) * 15} ${p[0]} ${p[1]})`} />
      ))}
    </g>
  );
};

const LosPinosQueSeInclinanHaciaElEcuador: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="205" y1="240" x2="220" y2="110" stroke="#5C3A1E" strokeWidth="6" />
      {[130, 150, 170, 190, 210].map((y, i) => (
        <path key={y} d={`M${220 - i} ${y} L${190 - i * 4} ${y + 12} M${220 - i} ${y} L${240 - i} ${y + 10}`} stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const LaIslaDeLosPinos: IllustrationComponent = ({ accentColor }) => {
  const lagoon = "#26C6DA";
  return (
    <g>
      <ellipse cx="205" cy="200" rx="90" ry="35" fill={lagoon} stroke={shade(lagoon, 0.3)} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="65" ry="20" fill={tint(lagoon, 0.4)} opacity="0.7" />
      {[[140, 175], [270, 170]].map(([x, y]) => (
        <g key={x as number}>
          <line x1={x} y1={y} x2={x} y2={(y as number) - 55} stroke="#5C3A1E" strokeWidth="4" />
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M${x} ${(y as number) - 20 - i * 15} L${(x as number) - 12} ${(y as number) - 10 - i * 15} M${x} ${(y as number) - 20 - i * 15} L${(x as number) + 12} ${(y as number) - 10 - i * 15}`} stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
          ))}
        </g>
      ))}
    </g>
  );
};

const ElNameCultivoSagrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  return (
    <g>
      <path d="M150 225 Q140 200 165 180 Q195 160 235 170 Q265 178 260 205 Q255 225 220 232 Q175 238 150 225 Z" fill="#D9BE8F" stroke={shade("#D9BE8F", 0.3)} strokeWidth="3" />
      <path d="M165 185 Q200 178 235 190 M155 210 Q200 220 250 210" fill="none" stroke={shade("#D9BE8F", 0.35)} strokeWidth="1.5" opacity="0.5" />
      <path d="M130 235 Q140 210 160 220 Q150 235 130 235 Z" fill={green} stroke={dark} strokeWidth="2" />
      <path d="M270 235 Q260 210 245 222 Q252 235 270 235 Z" fill={green} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const DosBanderasParaUnMismoTerritorio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="150" y1="235" x2="150" y2="115" stroke={dark} strokeWidth="5" />
      <line x1="260" y1="235" x2="260" y2="105" stroke={dark} strokeWidth="5" />
      <g>
        <rect x="150" y="120" width="26" height="35" fill="#0055A4" />
        <rect x="176" y="120" width="26" height="35" fill="#fff" />
        <rect x="202" y="120" width="26" height="35" fill="#EF4135" />
      </g>
      <g>
        <rect x="260" y="110" width="70" height="40" fill={accentColor} />
        <circle cx="295" cy="130" r="12" fill="#F4C430" />
        <polygon points="290,122 300,122 295,138" fill="#1A1A1A" />
      </g>
    </g>
  );
};

const ElRefugioDeDugongosDelPacifico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.6" />
      <path d="M150 190 Q160 170 195 172 Q230 175 245 190 Q250 200 240 205 L230 208 L225 200 L175 200 L168 208 L158 205 Q148 200 150 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="168" cy="188" r="3" fill="#1A1A1A" />
      <path d="M245 192 Q260 188 268 175" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      {[[140, 225], [180, 230], [220, 222]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${x} ${(y as number) - 16} ${(x as number) + 4} ${(y as number) - 26}`} stroke="#4A8F4E" strokeWidth="4" strokeLinecap="round" fill="none" />
      ))}
    </g>
  );
};

const MonedaKanak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const shell = "#F0E6D2";
  const fur = "#2E2420";
  return (
    <g>
      <path d="M175 105 Q205 95 235 105 L230 130 L180 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="185" y1="130" x2="185" y2="235" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {[145, 168, 191, 214].map((y, i) => (
        <ellipse key={y} cx="185" cy={y} rx="15" ry="6" fill={i % 2 === 0 ? shell : tint(shell, 0.15)} stroke={shade(shell, 0.3)} strokeWidth="1.5" />
      ))}
      <line x1="225" y1="130" x2="225" y2="235" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <path d="M225 135 Q218 165 222 195 Q216 215 225 235" stroke={fur} strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M240 135 Q247 170 242 200 Q249 218 240 235" stroke={fur} strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.85" />
    </g>
  );
};

const CentroCulturalTjibaou: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#4A8F4E" opacity="0.3" />
      {[[130, 235, 60], [175, 225, 85], [220, 230, 70], [265, 222, 90]].map(([x, base, h], i) => (
        <g key={x as number}>
          <path d={`M${(x as number) - 22} ${base} Q${(x as number) - 22} ${(base as number) - (h as number)} ${x} ${(base as number) - (h as number) - 14} Q${(x as number) + 22} ${(base as number) - (h as number)} ${(x as number) + 22} ${base} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x} ${(base as number) - (h as number) - 14} L${x} ${base}`} stroke={dark} strokeWidth="1.5" opacity="0.5" />
          <path d={`M${(x as number) - 11} ${(base as number) - (h as number) / 2} L${(x as number) - 18} ${base} M${(x as number) + 11} ${(base as number) - (h as number) / 2} L${(x as number) + 18} ${base}`} stroke={dark} strokeWidth="1.2" opacity="0.4" />
        </g>
      ))}
    </g>
  );
};

export const newCaledoniaIllustrations: Record<string, IllustrationDefinition> = {
  "segunda-barrera-de-coral-mas-larga": { component: SegundaBarreraDeCoralMasLarga },
  "la-gran-choza-kanak": { component: LaGranChozaKanak },
  "un-cuarto-del-niquel-del-mundo": { component: UnCuartoDelNiquelDelMundo },
  "el-cagou-el-ave-que-ladra": { component: ElCagouElAveQueLadra },
  "la-bougna-al-horno-de-tierra": { component: LaBougnaAlHornoDeTierra },
  "los-pinos-que-se-inclinan-hacia-el-ecuador": { component: LosPinosQueSeInclinanHaciaElEcuador },
  "la-isla-de-los-pinos": { component: LaIslaDeLosPinos },
  "el-name-cultivo-sagrado": { component: ElNameCultivoSagrado },
  "dos-banderas-para-un-mismo-territorio": { component: DosBanderasParaUnMismoTerritorio },
  "el-refugio-de-dugongos-del-pacifico": { component: ElRefugioDeDugongosDelPacifico },
  "la-moneda-kanak-de-conchas-y-pelo": { component: MonedaKanak },
  "el-centro-cultural-tjibaou": { component: CentroCulturalTjibaou },
};
