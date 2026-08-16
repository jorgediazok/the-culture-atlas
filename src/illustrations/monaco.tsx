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
      <rect x="100" y="170" width="210" height="75" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[120, 155, 190, 225, 260, 290].map((x) => (
        <rect key={x} x={x - 7} y="145" width="14" height="100" fill="#D4AF37" opacity="0.85" />
      ))}
      <path d="M100 170 L205 112 L310 170 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="175" y="205" width="60" height="40" fill={dark} opacity="0.4" />
      <path d="M90 250 Q205 262 320 250" fill="none" stroke={dark} strokeWidth="3" opacity="0.3" />
    </g>
  );
};

const ElGranPremioQueSeCorrePorLasCalles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[105, 110, 100], [150, 90, 120], [205, 105, 105], [260, 95, 115], [300, 115, 95]].map(([x, y, h], i) => (
        <rect key={x as number} x={(x as number) - 20} y={y as number} width="38" height={h as number} fill={i % 2 === 0 ? tint(accentColor, 0.2) : accentColor} opacity="0.55" stroke={dark} strokeWidth="2" />
      ))}
      <rect x="90" y="210" width="230" height="14" fill="#8B8378" />
      <path d="M175 210 L200 193 L248 193 L273 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="195" cy="223" r="13" fill="#1A1A1A" />
      <circle cx="253" cy="223" r="13" fill="#1A1A1A" />
      <rect x="216" y="182" width="20" height="15" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
      <path d="M90 200 L320 200" stroke="#F5F0E6" strokeWidth="2" strokeDasharray="10 8" opacity="0.5" />
    </g>
  );
};

const GraceKellyDeHollywoodAPrincesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 90 Q100 170 90 250" fill="none" stroke={accentColor} strokeWidth="14" opacity="0.5" strokeLinecap="round" />
      <path d="M320 90 Q310 170 320 250" fill="none" stroke={accentColor} strokeWidth="14" opacity="0.5" strokeLinecap="round" />
      <path d="M205 88 L150 195 L260 195 Z" fill={accentColor} opacity="0.14" />
      <path d="M130 190 Q150 165 170 190 L165 220 L135 220 Z" fill="#D4AF37" stroke={dark} strokeWidth="2.5" />
      <path d="M138 190 L145 172 L152 190 M152 190 L160 168 L168 190 M168 190 L175 175 L182 190" fill="#D4AF37" stroke={dark} strokeWidth="1.8" />
      <rect x="235" y="185" width="55" height="35" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <rect x="233" y="163" width="57" height="16" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" transform="rotate(-8 233 163)" />
      <line x1="246" y1="165" x2="253" y2="177" stroke="#F5F0E6" strokeWidth="3" transform="rotate(-8 233 163)" />
      <line x1="263" y1="165" x2="270" y2="177" stroke="#F5F0E6" strokeWidth="3" transform="rotate(-8 233 163)" />
      <line x1="242" y1="200" x2="282" y2="200" stroke="#F5F0E6" strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const SinImpuestoALaRentaDesdeHaceSigloYMedio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="175" width="150" height="65" rx="5" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="175" cy="207" r="22" fill="#F5F0E6" />
      <text x="175" y="216" textAnchor="middle" fontSize="24" fontWeight="700" fill={dark}>
        €
      </text>
      <rect x="240" y="140" width="70" height="100" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[255, 280].map((x) => (
        <rect key={x} x={x - 6} y="155" width="12" height="70" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="1.5" />
      ))}
      <polygon points="240,140 275,108 310,140" fill={dark} opacity="0.5" />
    </g>
  );
};

const UnaDinastiaQueGobiernaDesdeHaceSetecientosAnos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 262 320 250" fill="none" stroke="#3D8FB0" strokeWidth="6" opacity="0.4" />
      <rect x="165" y="180" width="80" height="65" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="140,180 205,135 270,180" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <rect x="120" y="165" width="26" height="40" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="264" y="165" width="26" height="40" fill={accentColor} stroke={dark} strokeWidth="2" />
      <line x1="133" y1="165" x2="133" y2="115" stroke={dark} strokeWidth="3" />
      <path d="M133 115 L163 128 L133 141 Z" fill="#D4AF37" stroke={dark} strokeWidth="1.5" />
      <line x1="277" y1="165" x2="277" y2="120" stroke={dark} strokeWidth="3" />
      <path d="M277 120 L307 133 L277 146 Z" fill="#D4AF37" stroke={dark} strokeWidth="1.5" />
      <rect x="195" y="205" width="20" height="40" fill={dark} opacity="0.5" />
    </g>
  );
};

const MasPoliciasPorHabitanteQueNinguntOtroLugar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="175" cy="140" r="20" fill={skin} />
      <path d="M155 140 Q175 125 195 140 L195 130 Q175 118 155 130 Z" fill="#1A1A1A" />
      <path d="M148 168 Q175 155 202 168 L195 245 L155 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="163" y="182" width="24" height="14" fill="#D4AF37" opacity="0.85" />
      <line x1="270" y1="248" x2="270" y2="120" stroke="#4A4A4A" strokeWidth="7" />
      <rect x="255" y="100" width="30" height="20" rx="4" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
      <circle cx="270" cy="110" r="5" fill="#3D8FB0" opacity="0.8" />
      <path d="M90 250 Q205 262 320 250" fill="none" stroke={dark} strokeWidth="3" opacity="0.3" />
    </g>
  );
};

const UnJardinExoticoTalladoEnUnAcantilado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cactusGreen = "#3C7A4B";
  const cactusDark = "#2A5A38";
  return (
    <g>
      <path d="M90 250 L90 220 L140 220 L140 190 L200 190 L200 155 L260 155 L260 250 Z" fill="#B0A489" stroke={dark} strokeWidth="2.5" opacity="0.55" />
      <rect x="100" y="215" width="26" height="35" rx="13" fill={cactusGreen} stroke={cactusDark} strokeWidth="2.5" />
      <line x1="113" y1="220" x2="113" y2="245" stroke={cactusDark} strokeWidth="1.5" opacity="0.6" />
      <circle cx="215" cy="205" r="24" fill={cactusGreen} stroke={cactusDark} strokeWidth="2.5" />
      {[195, 205, 215, 225, 235].map((x) => (
        <line key={x} x1={x} y1="184" x2={x} y2="226" stroke={cactusDark} strokeWidth="1.5" opacity="0.5" />
      ))}
      <rect x="150" y="120" width="18" height="70" rx="9" fill={cactusGreen} stroke={cactusDark} strokeWidth="2.5" />
      <line x1="159" y1="125" x2="159" y2="185" stroke={cactusDark} strokeWidth="1.5" opacity="0.5" />
      <rect x="132" y="140" width="14" height="35" rx="7" fill={cactusGreen} stroke={cactusDark} strokeWidth="2.5" transform="rotate(-15 139 157)" />
      <rect x="172" y="130" width="14" height="40" rx="7" fill={cactusGreen} stroke={cactusDark} strokeWidth="2.5" transform="rotate(15 179 150)" />
      <path d="M270 250 L300 175 L320 250 Z" fill="#3D8FB0" opacity="0.35" />
    </g>
  );
};

const ElPrincipeQueCorrioEnLosJuegosOlimpicos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q120 140 205 100 Q290 140 320 250 Z" fill="#B0D8E8" opacity="0.4" stroke={dark} strokeWidth="2" />
      <path d="M100 245 Q130 150 205 115 Q280 150 310 245" fill="none" stroke="#E8F4FA" strokeWidth="16" opacity="0.75" />
      <path d="M150 220 Q180 200 220 205 Q240 208 236 220 L178 236 Q166 230 150 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="163" cy="216" r="10" fill="#C68642" />
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
