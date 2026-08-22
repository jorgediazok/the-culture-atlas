import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElPaisQueVioNacerAlVudu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="190" width="110" height="50" fill="#5C3A21" stroke={dark} strokeWidth="2.8" />
      <circle cx="205" cy="150" r="20" fill="#1A1A1A" stroke={dark} strokeWidth="2.4" />
      <path d="M180 210 L230 210" stroke={accentColor} strokeWidth="6" />
      <path d="M175 225 L235 225" stroke={accentColor} strokeWidth="6" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={175 + i * 15} cy="180" r="4" fill="#F5F0E6" opacity="0.85" />
      ))}
      <path d="M190 170 L180 190 M220 170 L230 190" stroke="#1A1A1A" strokeWidth="4" />
    </g>
  );
};

const LosPalaciosRealesDeUnReinoQueGoberno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="150" width="200" height="90" fill="#B85C3A" stroke={dark} strokeWidth="3" />
      <rect x="150" y="130" width="30" height="20" fill="#8B4A2E" stroke={dark} strokeWidth="2.4" />
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <rect x={x} y="170" width="35" height="50" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} opacity="0.85" stroke={dark} strokeWidth="2" />
          <circle cx={x + 17} cy="195" r="6" fill="#3A2418" />
        </g>
      ))}
      <rect x="90" y="240" width="230" height="8" fill="#8C7B6B" opacity="0.6" />
    </g>
  );
};

const ElEjercitoDeMujeresQueAterrorizoASusEnemigos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="14" fill="#3A2418" stroke={dark} strokeWidth="2.2" />
      <rect x="188" y="144" width="34" height="55" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M188 155 L150 190" stroke="#3A2418" strokeWidth="9" strokeLinecap="round" />
      <path d="M222 155 L245 145" stroke="#3A2418" strokeWidth="9" strokeLinecap="round" />
      <polygon points="130,205 150,175 158,182 140,212" fill="#8C8C8C" stroke={dark} strokeWidth="2" />
      <rect x="235" y="120" width="26" height="38" rx="3" fill="#5C5C5C" stroke={dark} strokeWidth="2" transform="rotate(15 248 139)" />
      <line x1="205" y1="199" x2="200" y2="240" stroke="#3A2418" strokeWidth="6" />
      <line x1="215" y1="199" x2="222" y2="240" stroke="#3A2418" strokeWidth="6" />
    </g>
  );
};

const ElPuebloConstruidoSobreElAguaParaEscapar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="170" width="230" height="80" fill="#1B5E7A" opacity="0.4" />
      {[[140, 155], [205, 145], [265, 160]].map(([x, y], i) => (
        <g key={i}>
          <polygon points={`${x - 22},${y} ${x + 22},${y} ${x + 16},${y - 18} ${x - 16},${y - 18}`} fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
          <rect x={x - 22} y={y} width="44" height="20" fill={accentColor} stroke={dark} strokeWidth="2.2" />
          <line x1={x - 15} y1={y + 20} x2={x - 15} y2={y + 40} stroke="#3A2418" strokeWidth="4" />
          <line x1={x + 15} y1={y + 20} x2={x + 15} y2={y + 40} stroke="#3A2418" strokeWidth="4" />
        </g>
      ))}
      <path d="M110 235 Q120 225 140 232 Q125 240 110 235 Z" fill="#5C3A21" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaPuertaSinRetornoFrenteAlOceano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="215" width="230" height="35" fill="#1B5E7A" opacity="0.45" />
      <path d="M155 240 L155 140 Q205 100 255 140 L255 240 Z" fill="none" stroke={accentColor} strokeWidth="10" />
      <path d="M155 240 L155 140 Q205 100 255 140 L255 240" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[[175, 190], [235, 195], [205, 225]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="8" fill="#3A2418" opacity="0.75" />
      ))}
    </g>
  );
};

const LasCasasFortalezaConTorresDeBarro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[150, 205, 260].map((x, i) => (
        <g key={x}>
          <rect x={x - 20} y="150" width="40" height="80" fill={accentColor} stroke={dark} strokeWidth="2.6" />
          <polygon points={`${x - 24},150 ${x},120 ${x + 24},150`} fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
          {i < 2 && <rect x={x + 20} y="185" width="20" height="10" fill="#5C3A21" />}
        </g>
      ))}
      <rect x="90" y="230" width="230" height="10" fill="#8C7B6B" opacity="0.6" />
    </g>
  );
};

const LosTapicesQueNarranLaHistoriaDeLosReyes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="100" width="170" height="140" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M150 200 Q170 160 200 200 Q220 165 250 200 Q235 210 205 205 Q175 210 150 200 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.2" />
      <circle cx="205" cy="145" r="20" fill="#C9A227" stroke="#8A6A10" strokeWidth="2.2" />
      <path d="M195 145 Q200 135 210 138 Q215 145 205 150 Q198 150 195 145 Z" fill="#F5F0E6" opacity="0.8" />
      <rect x="120" y="100" width="170" height="20" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const LaConchaQueFueDineroAntesQueElOro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="225" rx="90" ry="14" fill="#D9C9A3" opacity="0.5" />
      {[[160, 195, 1], [205, 180, 1.3], [250, 200, 0.9], [180, 215, 0.8], [230, 220, 1.1]].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
          <ellipse cx="0" cy="0" rx="18" ry="12" fill="#F5F0E6" stroke="#B0A88C" strokeWidth="2" />
          <path d="M-14 0 Q0 -6 14 0 Q0 6 -14 0 Z" fill="#D9C9A3" />
        </g>
      ))}
      <rect x="270" y="180" width="4" height="45" fill="#3A2418" />
      <rect x="240" y="185" width="65" height="5" fill="#3A2418" />
    </g>
  );
};

const LosGuardianesNocturnosVestidosDePaja: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M205 235 Q160 230 165 170 Q170 120 205 100 Q240 120 245 170 Q250 230 205 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      {[130, 150, 170, 190, 210].map((y) => (
        <path key={y} d={`M175 ${y} Q205 ${y - 8} 235 ${y}`} fill="none" stroke={tint(accentColor, 0.3)} strokeWidth="2.5" opacity="0.7" />
      ))}
      <rect x="90" y="238" width="230" height="8" fill="#3A2418" opacity="0.4" />
    </g>
  );
};

const ElTemploDeSerpientesFrenteAUnaCatedral: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="150" cy="200" rx="55" ry="40" fill="#8B5A2B" stroke={dark} strokeWidth="2.8" />
      <path d="M150 235 Q195 230 210 190 Q225 150 260 140 Q235 165 235 195 Q225 220 195 230 Q220 200 215 175 Q195 210 165 215 Q195 190 190 165 Q160 195 150 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" strokeLinejoin="round" />
      <circle cx="152" cy="192" r="3" fill="#1A1A1A" />
      <polygon points="290,150 320,140 320,160" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M290 150 L290 240 L320 240 L320 150" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

export const beninIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-que-vio-nacer-al-vudu": { component: ElPaisQueVioNacerAlVudu },
  "los-palacios-reales-de-un-reino-que-goberno-el-golfo": { component: LosPalaciosRealesDeUnReinoQueGoberno },
  "el-ejercito-de-mujeres-que-aterrorizo-a-sus-enemigos": { component: ElEjercitoDeMujeresQueAterrorizoASusEnemigos },
  "el-pueblo-construido-sobre-el-agua-para-escapar": { component: ElPuebloConstruidoSobreElAguaParaEscapar },
  "la-puerta-sin-retorno-frente-al-oceano": { component: LaPuertaSinRetornoFrenteAlOceano },
  "las-casas-fortaleza-con-torres-de-barro": { component: LasCasasFortalezaConTorresDeBarro },
  "los-tapices-que-narran-la-historia-de-los-reyes": { component: LosTapicesQueNarranLaHistoriaDeLosReyes },
  "la-concha-que-fue-dinero-antes-que-el-oro": { component: LaConchaQueFueDineroAntesQueElOro },
  "los-guardianes-nocturnos-vestidos-de-paja": { component: LosGuardianesNocturnosVestidosDePaja },
  "el-templo-de-serpientes-frente-a-una-catedral": { component: ElTemploDeSerpientesFrenteAUnaCatedral },
};
