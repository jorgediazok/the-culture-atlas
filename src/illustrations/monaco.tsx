import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElSegundoPaisMasPequenoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 260 320 250 L320 130 Q205 150 90 130 Z" fill="#3D8FB0" opacity="0.35" />
      <path d="M140 250 L150 160 L320 160 L320 250 Z" fill="#8B8378" opacity="0.5" />
      {[[160, 200, 40], [195, 180, 55], [230, 195, 45], [265, 185, 50]].map(([x, y, h], i) => (
        <rect key={x as number} x={(x as number) - 12} y={y as number} width="22" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const ElCasinoQueLosPropiosMonegascosNoPuedenEntrar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="170" width="110" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[170, 205, 240].map((x) => (
        <rect key={x} x={x - 6} y="150" width="12" height="90" fill="#D4AF37" opacity="0.85" />
      ))}
      <path d="M150 170 L205 145 L260 170 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="190" y="200" width="30" height="40" fill={dark} opacity="0.4" />
    </g>
  );
};

const ElGranPremioQueSeCorrePorLasCalles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="210" width="230" height="12" fill="#8B8378" />
      <path d="M175 210 L200 195 L245 195 L270 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="195" cy="222" r="12" fill="#1A1A1A" />
      <circle cx="250" cy="222" r="12" fill="#1A1A1A" />
      <rect x="215" y="185" width="18" height="14" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
      <path d="M90 200 L320 200" stroke="#F5F0E6" strokeWidth="2" strokeDasharray="10 8" opacity="0.6" />
    </g>
  );
};

const GraceKellyDeHollywoodAPrincesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M165 150 Q180 130 195 150 L192 175 L168 175 Z" fill="#D4AF37" stroke={dark} strokeWidth="2.5" />
      <path d="M170 150 L176 138 L180 150 M180 150 L184 135 L188 150 M188 150 L192 140 L196 150" fill="#D4AF37" stroke={dark} strokeWidth="1.5" />
      <rect x="215" y="150" width="40" height="30" rx="3" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
      <polygon points="225,150 235,150 230,140" fill="#1A1A1A" />
      <line x1="220" y1="160" x2="250" y2="160" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const SinImpuestoALaRentaDesdeHaceSigloYMedio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="180" width="90" height="50" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="205" r="16" fill="#F5F0E6" />
      <text x="205" y="212" textAnchor="middle" fontSize="18" fontWeight="700" fill={dark}>
        €
      </text>
      <rect x="180" y="150" width="60" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const UnaDinastiaQueGobiernaDesdeHaceSetecientosAnos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="170" y="180" width="70" height="60" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="150,180 205,140 260,180" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <rect x="140" y="170" width="20" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="250" y="170" width="20" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="195" y="205" width="20" height="35" fill={dark} opacity="0.5" />
    </g>
  );
};

const MasPoliciasPorHabitanteQueNinguntOtroLugar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="205" cy="155" r="14" fill={skin} />
      <path d="M191 155 Q205 145 219 155 L219 148 Q205 140 191 148 Z" fill="#1A1A1A" />
      <path d="M185 175 Q205 165 225 175 L220 235 L190 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="185" width="20" height="10" fill="#D4AF37" opacity="0.8" />
    </g>
  );
};

const UnJardinExoticoTalladoEnUnAcantilado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L150 130 L200 250 Z" fill="#8B8378" opacity="0.6" />
      {[[140, 220], [160, 200], [130, 190]].map(([x, y], i) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="8" ry="18" fill={i % 2 === 0 ? accentColor : "#2E7D32"} stroke={dark} strokeWidth="2" />
          <line x1={x} y1={(y as number) - 18} x2={x} y2={(y as number) - 26} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <path d="M220 250 L280 150 L320 250 Z" fill="#3D8FB0" opacity="0.4" />
    </g>
  );
};

const ElPrincipeQueCorrioEnLosJuegosOlimpicos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 240 Q205 220 300 240" fill="none" stroke="#B0D8E8" strokeWidth="20" opacity="0.6" />
      <path d="M175 220 Q195 205 225 210 Q240 213 238 222 L180 235 Q170 230 175 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="188" cy="218" r="9" fill="#C68642" />
    </g>
  );
};

const MasDeLaMitadDeMonacoNoEsMonegasca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="180" cy="180" r="12" fill={skin} />
      <path d="M168 195 Q180 188 192 195 L190 220 L170 220 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[[225, 175], [255, 185], [235, 210]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={y} r="10" fill={skin} opacity="0.85" />
          <path d={`M${(x as number) - 10} ${(y as number) + 12} Q${x} ${(y as number) + 7} ${(x as number) + 10} ${(y as number) + 12} L${(x as number) + 8} ${(y as number) + 32} L${(x as number) - 8} ${(y as number) + 32} Z`} fill={tint(accentColor, i % 2 === 0 ? 0.2 : 0.4)} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

export const monacoIllustrations: Record<string, IllustrationDefinition> = {
  "el-segundo-pais-mas-pequeno-del-mundo": { component: ElSegundoPaisMasPequenoDelMundo },
  "el-casino-que-los-propios-monegascos-no-pueden-entrar": { component: ElCasinoQueLosPropiosMonegascosNoPuedenEntrar },
  "el-gran-premio-que-se-corre-por-las-calles": { component: ElGranPremioQueSeCorrePorLasCalles },
  "grace-kelly-de-hollywood-a-princesa": { component: GraceKellyDeHollywoodAPrincesa },
  "sin-impuesto-a-la-renta-desde-hace-siglo-y-medio": { component: SinImpuestoALaRentaDesdeHaceSigloYMedio },
  "una-dinastia-que-gobierna-desde-hace-setecientos-anos": { component: UnaDinastiaQueGobiernaDesdeHaceSetecientosAnos },
  "mas-policias-por-habitante-que-ningun-otro-lugar": { component: MasPoliciasPorHabitanteQueNinguntOtroLugar },
  "un-jardin-exotico-tallado-en-un-acantilado": { component: UnJardinExoticoTalladoEnUnAcantilado },
  "el-principe-que-corrio-en-los-juegos-olimpicos": { component: ElPrincipeQueCorrioEnLosJuegosOlimpicos },
  "mas-de-la-mitad-de-monaco-no-es-monegasca": { component: MasDeLaMitadDeMonacoNoEsMonegasca },
};
