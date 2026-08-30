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

const LaConchaQueFueDineroAntesQueElOro: IllustrationComponent = () => {
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

const LaCantanteQueGanoCincoGrammys: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const red = "#C1272D";
  return (
    <g>
      <path d="M175 240 Q170 195 205 185 Q240 195 235 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <circle cx="205" cy="165" r="22" fill={skin} stroke={dark} strokeWidth="2.2" />
      <path d="M180 158 Q205 120 230 158 Q222 145 205 142 Q188 145 180 158 Z" fill={red} stroke={shade(red, 0.3)} strokeWidth="2.2" />
      <path d="M182 195 Q160 205 165 225" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M228 195 Q250 205 245 225" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="205" cy="195" rx="9" ry="13" fill="#3A3A3A" />
      <rect x="202" y="205" width="6" height="30" fill="#5C5C5C" />
    </g>
  );
};

const LaFiestaDeMascarasQueHonraALasMadres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const wood = "#8B5A2B";
  return (
    <g>
      <ellipse cx="205" cy="105" rx="45" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="185" cy="100" r="8" fill={dark} />
      <circle cx="225" cy="100" r="8" fill={dark} />
      <path d="M205 115 Q250 120 250 170 Q250 215 205 230 Q160 215 160 170 Q160 120 205 115 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" />
      <ellipse cx="183" cy="165" rx="10" ry="14" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <ellipse cx="227" cy="165" rx="10" ry="14" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="183" cy="165" r="4" fill="#1A1A1A" />
      <circle cx="227" cy="165" r="4" fill="#1A1A1A" />
      <path d="M190 200 Q205 210 220 200" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
      <path d="M175 140 L195 150 M235 140 L215 150" stroke={accentColor} strokeWidth="2.5" />
    </g>
  );
};

const ElParqueDondeSobrevivenLosUltimosLeones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={tint(accentColor, 0.7)} opacity="0.3" />
      <ellipse cx="205" cy="245" rx="115" ry="8" fill={dark} opacity="0.25" />
      <line x1="270" y1="245" x2="272" y2="170" stroke="#5C3A21" strokeWidth="6" />
      <ellipse cx="272" cy="155" rx="42" ry="20" fill="#3A7A45" opacity="0.6" />
      <ellipse cx="150" cy="215" rx="14" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="175" cy="222" rx="30" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M195 218 Q205 222 200 235" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <line x1="160" y1="228" x2="158" y2="248" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <line x1="192" y1="228" x2="196" y2="248" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="255" cy="210" rx="34" ry="24" fill="#8C8C8C" stroke={dark} strokeWidth="2.4" />
      <path d="M225 205 Q210 210 208 230" fill="none" stroke="#8C8C8C" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="222" cy="198" rx="10" ry="12" fill="#8C8C8C" stroke={dark} strokeWidth="2" />
      <path d="M222 205 Q228 220 222 232" fill="none" stroke="#7A7A7A" strokeWidth="4" strokeLinecap="round" />
      <line x1="240" y1="224" x2="238" y2="248" stroke="#8C8C8C" strokeWidth="7" strokeLinecap="round" />
      <line x1="270" y1="224" x2="272" y2="248" stroke="#8C8C8C" strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const ElQuesoQueNacioEntrePastoresFulani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const leaf = "#3A7A45";
  return (
    <g>
      <rect x="110" y="200" width="190" height="14" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <rect x="122" y="145" width="36" height="30" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="167" y="140" width="36" height="30" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.2" />
      <rect x="212" y="148" width="36" height="30" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="252" y="142" width="36" height="30" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.2" />
      <path d="M120 175 Q110 155 125 140 Q120 160 130 172 Z" fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="2" />
      <path d="M290 170 Q302 150 290 135 Q295 155 282 168 Z" fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="2" />
    </g>
  );
};

const LaConferenciaQueInventoUnaTransicionPacifica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const SEATS: [number, number][] = [
    [140, 175], [205, 160], [270, 175], [140, 225], [205, 240], [270, 225],
  ];
  return (
    <g>
      <ellipse cx="205" cy="200" rx="80" ry="30" fill="#8B5A2B" stroke={dark} strokeWidth="2.8" />
      {SEATS.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y - 14} r="10" fill={skin} stroke={dark} strokeWidth="1.8" />
          <path d={`M${x - 10} ${y} Q${x} ${y - 20} ${x + 10} ${y}`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <rect x="195" y="110" width="20" height="30" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M215 112 L245 122 L215 132 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
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
  "la-cantante-que-gano-cinco-grammys": { component: LaCantanteQueGanoCincoGrammys },
  "la-fiesta-de-mascaras-que-honra-a-las-madres": { component: LaFiestaDeMascarasQueHonraALasMadres },
  "el-parque-donde-sobreviven-los-ultimos-leones": { component: ElParqueDondeSobrevivenLosUltimosLeones },
  "el-queso-que-nacio-entre-pastores-fulani": { component: ElQuesoQueNacioEntrePastoresFulani },
  "la-conferencia-que-invento-una-transicion-pacifica": { component: LaConferenciaQueInventoUnaTransicionPacifica },
};
