import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

const CuatroIslasNacidasDeUnMismoVolcan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="150" width="230" height="100" fill="#1B7A9C" opacity="0.5" />
      {[[130, 170], [180, 155], [230, 165], [280, 175]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x - 22} 190 L${x} ${y} L${x + 22} 190 Z`} fill="#2F6B3A" stroke={dark} strokeWidth="2.2" />
          <path d={`M${x - 4} ${y + 10} Q${x} ${y} ${x + 4} ${y + 10}`} fill="none" stroke="#1B4B1E" strokeWidth="1.6" opacity="0.7" />
        </g>
      ))}
      <path d="M90 200 Q205 192 320 200" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
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
      <path d="M140 230 Q150 210 145 190 M260 230 Q250 210 255 190" stroke="#1B4B1E" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="140" cy="190" rx="7" ry="5" fill="#3A7A45" />
      <ellipse cx="255" cy="190" rx="7" ry="5" fill="#3A7A45" />
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
      <path d="M158 178 Q165 172 172 180" fill="none" stroke="#8A6A10" strokeWidth="1.6" opacity="0.7" />
      <rect x="140" y="225" width="45" height="10" fill="#5C3A21" stroke={dark} strokeWidth="1.6" />
      <rect x="150" y="205" width="4" height="22" fill="#3A5F3A" />
      <path d="M150 200 L228 195" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="3 3" />
    </g>
  );
};

const ElPezQueSeCreiaExtintoHaceMillonesDeAnos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#1B4F72" opacity="0.3" />
      {[[130, 230, 24], [255, 240, 30], [190, 245, 18]].map(([x, y, r], i) => (
        <polygon key={i} points={`${x},${y - r} ${x + r * 0.9},${y} ${x},${y + r * 0.4} ${x - r * 0.9},${y}`} fill="#3A2A1E" opacity="0.6" />
      ))}
      <path d="M140 190 Q200 158 262 188 Q235 198 235 200 Q262 210 262 220 Q200 222 140 190 Z" fill="#2E6B8C" stroke={dark} strokeWidth="2.6" />
      <path d="M175 185 Q195 178 210 190" fill="none" stroke="#1B4F72" strokeWidth="2" opacity="0.6" />
      <path d="M225 195 Q245 192 258 200" fill="none" stroke="#1B4F72" strokeWidth="6" opacity="0.7" />
      <circle cx="155" cy="188" r="4" fill="#fff" />
      <path d="M175 205 Q170 220 155 220" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const LaBodaQueDefineElEstatusDeTodaUnaVida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(175, 235, 1.05, dark, "#D9A227")}
      {person(235, 238, 1, dark, tint(accentColor, 0.15))}
      <path d="M175 195 Q205 185 235 197" fill="none" stroke="#B8860B" strokeWidth="3" opacity="0.7" />
      {[[120, 235], [290, 232]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y - 26} r="6" fill="#3A2A1E" />
          <path d={`M${x - 8} ${y - 12} Q${x} ${y - 18} ${x + 8} ${y - 12} L${x + 8} ${y} L${x - 8} ${y} Z`} fill={accentColor} opacity="0.8" />
        </g>
      ))}
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
      <path d="M140 140 L140 120 L160 120 L160 140" fill="none" stroke={dark} strokeWidth="1.6" opacity="0.5" />
      <path d="M250 140 L250 120 L270 120 L270 140" fill="none" stroke={dark} strokeWidth="1.6" opacity="0.5" />
      <ellipse cx="205" cy="130" rx="26" ry="14" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <rect x="200" y="105" width="6" height="25" fill={dark} />
      <circle cx="203" cy="103" r="4" fill="#D9A227" />
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
          <ellipse cx={x} cy={y} rx="5" ry="6" fill="#3A2A1E" stroke={dark} strokeWidth="1.2" />
          <path d={`M${x} ${y + 6} L${x} ${y + 18}`} stroke="#3A2A1E" strokeWidth="2.4" />
          <path d={`M${x - 4} ${y - 4} L${x} ${y} L${x + 4} ${y - 4}`} fill="none" stroke="#5C3A21" strokeWidth="1.4" />
        </g>
      ))}
      <path d="M120 220 Q160 225 200 218 Q240 212 280 220" fill="none" stroke="#3A5F3A" strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ElCantoArabeQueLlegoNavegandoDesdeZanzibar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(155, 232, 0.85, dark, accentColor)}
      <ellipse cx="185" cy="205" rx="24" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" transform="rotate(-15 185 205)" />
      <rect x="205" y="175" width="5" height="38" fill={dark} transform="rotate(-15 208 194)" />
      {person(255, 235, 0.85, dark, tint(accentColor, 0.15))}
      <rect x="240" y="200" width="20" height="32" fill="#D9A227" stroke={dark} strokeWidth="2" />
      <rect x="238" y="196" width="24" height="8" fill="#8A6A10" stroke={dark} strokeWidth="1.4" />
    </g>
  );
};

const LaLangostaQueNadaEnSalsaDeCoco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="220" rx="90" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="200" cy="200" rx="22" ry="42" fill="#8B1A1A" stroke={dark} strokeWidth="2.4" transform="rotate(90 200 200)" />
      <path d="M175 200 L175 208 M188 200 L188 210 M200 200 L200 210 M212 200 L212 208" stroke="#8B1A1A" strokeWidth="2.4" opacity="0.6" />
      <path d="M245 200 L270 190 M245 208 L270 215" stroke="#8B1A1A" strokeWidth="4" />
      <path d="M155 195 Q145 185 155 178" fill="none" stroke="#8B1A1A" strokeWidth="4" />
      <path d="M160 192 L150 186 M160 200 L148 198" stroke="#8B1A1A" strokeWidth="2" />
    </g>
  );
};

const LosVelerosDeMaderaQueTodaviaCruzanElCanal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 225 320 240" fill="none" stroke="#1B7A9C" strokeWidth="10" opacity="0.5" />
      <path d="M170 235 L230 235 L215 195 L185 195 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <rect x="197" y="130" width="4" height="105" fill={dark} />
      <path d="M200 135 L200 210 L245 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M200 140 L200 205 L165 197 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.8" opacity="0.8" />
    </g>
  );
};

const MsindzanoMascaraFacial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M160 240 Q155 188 205 178 Q255 188 250 240 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.6" />
      <circle cx="205" cy="150" r="42" fill={skin} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="205" cy="160" rx="34" ry="30" fill={accentColor} opacity="0.9" />
      <circle cx="192" cy="150" r="3.5" fill="#1A1A1A" />
      <circle cx="218" cy="150" r="3.5" fill="#1A1A1A" />
      <path d="M195 178 Q205 183 215 178" stroke={dark} strokeWidth="2.4" fill="none" />
      {[[178, 130], [232, 130], [205, 115]].map(([x, y], i) => (
        <circle key={i} cx={x as number} cy={y as number} r="4" fill="#D4A017" opacity="0.85" />
      ))}
    </g>
  );
};

const ParqueMarinoDeMoheli: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = tint(accentColor, 0.4);
  const turtle = "#4A8F4E";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      <path d="M240 130 Q270 110 290 125 Q300 135 285 145 Q300 150 295 165 Q275 175 255 160 Q245 145 240 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M285 145 Q305 140 315 150 Q305 158 288 155 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="165" cy="210" rx="45" ry="32" fill={turtle} stroke={dark} strokeWidth="2.8" />
      <circle cx="128" cy="205" r="14" fill={turtle} stroke={dark} strokeWidth="2.4" />
      <path d="M150 190 Q140 165 155 155 Q165 168 158 192 Z" fill={turtle} stroke={dark} strokeWidth="2" />
      <path d="M150 228 Q140 250 158 258 Q168 240 158 222 Z" fill={turtle} stroke={dark} strokeWidth="2" />
      <path d="M190 200 Q210 178 225 190 Q212 200 200 210 Z" fill={turtle} stroke={dark} strokeWidth="2" />
      <path d="M190 220 Q212 240 228 228 Q212 218 200 212 Z" fill={turtle} stroke={dark} strokeWidth="2" />
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
  "msindzano-mascara-facial": { component: MsindzanoMascaraFacial },
  "parque-marino-de-moheli": { component: ParqueMarinoDeMoheli },
};
