import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CuatroIslasNacidasDeUnMismoVolcan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="150" width="230" height="100" fill="#1B7A9C" opacity="0.5" />
      {[[130, 170], [180, 155], [230, 165], [280, 175]].map(([x, y], i) => (
        <path key={i} d={`M${x - 22} 190 L${x} ${y} L${x + 22} 190 Z`} fill="#2F6B3A" stroke={dark} strokeWidth="2.2" />
      ))}
    </g>
  );
};

const ElVolcanActivoQueVigilaDesdeElCielo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L200 110 L300 250 Z" fill="#2F6B3A" stroke={dark} strokeWidth="3" />
      <ellipse cx="200" cy="150" rx="42" ry="15" fill="#8B1A1A" opacity="0.85" />
      <path d="M195 150 Q205 125 215 150" fill="none" stroke="#C1272D" strokeWidth="4" opacity="0.8" />
      <ellipse cx="180" cy="90" rx="18" ry="10" fill="#D9D9D9" opacity="0.6" />
    </g>
  );
};

const ElPerfumeQueHueleAComorasEnTodoElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="220" y="180" width="16" height="50" fill="#B8860B" stroke={dark} strokeWidth="2" />
      <path d="M212 200 Q205 190 212 180 Q228 175 236 180 Q243 190 236 200 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <path d="M150 200 Q140 170 160 155 Q180 165 175 195 Q165 210 150 200 Z" fill="#D9A227" stroke={dark} strokeWidth="2.4" />
      <path d="M150 200 L228 195" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="3 3" />
    </g>
  );
};

const ElPezQueSeCreiaExtintoHaceMillonesDeAnos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#1B4F72" opacity="0.3" />
      <path d="M140 190 Q200 160 260 190 Q230 200 230 200 Q260 210 260 220 Q200 220 140 190 Z" fill="#2E6B8C" stroke={dark} strokeWidth="2.6" />
      <circle cx="155" cy="188" r="4" fill="#fff" />
      <path d="M175 205 Q170 220 155 220" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const LaBodaQueDefineElEstatusDeTodaUnaVida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 250 L170 160 Q170 130 200 130 Q230 130 230 160 L230 250 Z" fill="#D9A227" stroke={dark} strokeWidth="2.6" />
      <circle cx="200" cy="115" r="16" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M140 240 Q130 200 155 190 M260 240 Q270 200 245 190" fill="none" stroke="#B8860B" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const UnaMedinaDeCoralBlancoFrenteAlOceanoIndico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="180" width="230" height="70" fill="#1B7A9C" opacity="0.4" />
      <rect x="130" y="140" width="150" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <rect x="180" y="160" width="20" height="50" fill={accentColor} opacity="0.7" />
      <ellipse cx="205" cy="130" rx="26" ry="14" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <rect x="200" y="105" width="6" height="25" fill={dark} />
    </g>
  );
};

const LasEspeciasQuePerfumanElComercioDeLasIslas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[140, 190], [165, 200], [190, 185]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q${x + 20} ${y - 10} ${x + 10} ${y + 22} Q${x - 5} ${y + 10} ${x} ${y}`} fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      ))}
      {[[240, 190], [260, 205], [280, 185]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#3A2A1E" />
          <path d={`M${x} ${y + 6} L${x} ${y + 18}`} stroke="#3A2A1E" strokeWidth="2.4" />
        </g>
      ))}
    </g>
  );
};

const ElCantoArabeQueLlegoNavegandoDesdeZanzibar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="170" cy="190" rx="30" ry="20" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" transform="rotate(-15 170 190)" />
      <rect x="195" y="150" width="6" height="50" fill={dark} transform="rotate(-15 198 175)" />
      <rect x="250" y="170" width="24" height="60" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="248" y="165" width="28" height="10" fill="#D9A227" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const LaLangostaQueNadaEnSalsaDeCoco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="220" rx="90" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="200" cy="200" rx="22" ry="42" fill="#8B1A1A" stroke={dark} strokeWidth="2.4" transform="rotate(90 200 200)" />
      <path d="M245 200 L270 190 M245 208 L270 215" stroke="#8B1A1A" strokeWidth="4" />
      <path d="M155 195 Q145 185 155 178" fill="none" stroke="#8B1A1A" strokeWidth="4" />
    </g>
  );
};

const LosVelerosDeMaderaQueTodaviaCruzanElCanal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 225 320 240" fill="none" stroke="#1B7A9C" strokeWidth="10" opacity="0.5" />
      <path d="M170 235 L230 235 L215 195 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <path d="M200 235 L200 130 L245 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
    </g>
  );
};

export const comorosIllustrations: Record<string, IllustrationDefinition> = {
  "cuatro-islas-nacidas-de-un-mismo-volcan": { component: CuatroIslasNacidasDeUnMismoVolcan },
  "el-volcan-activo-que-vigila-desde-el-cielo": { component: ElVolcanActivoQueVigilaDesdeElCielo },
  "el-perfume-que-huele-a-comoras-en-todo-el-mundo": { component: ElPerfumeQueHueleAComorasEnTodoElMundo },
  "el-pez-que-se-creia-extinto-hace-sesenta-millones-de-anos": { component: ElPezQueSeCreiaExtintoHaceMillonesDeAnos },
  "la-boda-que-define-el-estatus-de-toda-una-vida": { component: LaBodaQueDefineElEstatusDeTodaUnaVida },
  "una-medina-de-coral-blanco-frente-al-oceano-indico": { component: UnaMedinaDeCoralBlancoFrenteAlOceanoIndico },
  "las-especias-que-perfuman-el-comercio-de-las-islas": { component: LasEspeciasQuePerfumanElComercioDeLasIslas },
  "el-canto-arabe-que-llego-navegando-desde-zanzibar": { component: ElCantoArabeQueLlegoNavegandoDesdeZanzibar },
  "la-langosta-que-nada-en-salsa-de-coco": { component: LaLangostaQueNadaEnSalsaDeCoco },
  "los-veleros-de-madera-que-todavia-cruzan-el-canal": { component: LosVelerosDeMaderaQueTodaviaCruzanElCanal },
};
