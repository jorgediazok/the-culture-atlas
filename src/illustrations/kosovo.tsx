import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnoDeLosPaisesMasJovenesDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="154" width="28" height="24" rx="2" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <line x1="186" y1="162" x2="214" y2="162" stroke={dark} strokeWidth="1.5" />
      <circle cx="200" cy="170" r="3" fill={accentColor} />
    </g>
  );
};

const ElMonumentoQueSeRepintaCadaAno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {["#C1272D", accentColor, dark, light].map((c, i) => (
        <rect key={i} x={186 + i * 8} y={158 + (i % 2) * 6} width="6" height={20 - (i % 2) * 6} fill={c} />
      ))}
    </g>
  );
};

const ElMitoFundadorDeLaBatallaDe1389: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="196" y1="178" x2="204" y2="150" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M196 178 L204 178 L200 184 Z" fill={dark} />
    </g>
  );
};

const UnaDeLasPoblacionesMasJovenesDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="192" cy="164" r="6" fill={accentColor} />
      <circle cx="204" cy="160" r="5" fill={dark} />
      <circle cx="200" cy="172" r="4" fill={light} />
      <line x1="192" y1="170" x2="192" y2="178" stroke={dark} strokeWidth="1" />
    </g>
  );
};

const LaCuevaDeMarmolHalladaPorAccidente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 178 Q186 158 200 156 Q214 158 214 178 Z" fill={dark} opacity="0.5" />
      <path d="M194 158 L196 168 M200 154 L200 166 M206 158 L204 168" stroke={light} strokeWidth="1.5" />
      <circle cx="200" cy="172" r="1.6" fill={accentColor} />
    </g>
  );
};

const UsaElEuroSinPertenecerALaEurozona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="166" r="12" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <path d="M204 160 Q196 160 196 166 Q196 172 204 172" fill="none" stroke={dark} strokeWidth="2" />
      <line x1="194" y1="164" x2="201" y2="164" stroke={dark} strokeWidth="1.5" />
      <line x1="194" y1="168" x2="201" y2="168" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElQelesheElGorroBlancoDeFieltro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 172 Q188 156 200 154 Q212 156 212 172 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <line x1="200" y1="154" x2="200" y2="172" stroke={accentColor} strokeWidth="1" opacity="0.4" />
    </g>
  );
};

const PrizrenCunaDelMovimientoNacionalAlbanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 174 Q200 164 214 174" fill="none" stroke={dark} strokeWidth="2.5" />
      <path d="M196 174 L196 154 Q200 148 204 154 L204 174" fill={accentColor} />
      <circle cx="200" cy="150" r="1.6" fill={light} />
    </g>
  );
};

const ElQuesoPastorilDeLasMontanasSar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 178 L188 164 L212 168 L212 178 Z" fill={accentColor} />
      <circle cx="196" cy="172" r="1.4" fill={dark} />
      <circle cx="204" cy="174" r="1.4" fill={dark} />
      <circle cx="200" cy="169" r="1.2" fill={light} />
    </g>
  );
};

const LaBanderaDisenadaParaNoRepresentarANadieEnParticular: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 158 Q198 154 204 160 Q210 166 206 174 Q198 178 192 172 Q186 164 188 158 Z" fill={dark} />
      {[[196, 152], [204, 154], [208, 160], [206, 168]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill="#fff" />
      ))}
    </g>
  );
};

export const kosovoIllustrations: Record<string, IllustrationDefinition> = {
  "uno-de-los-paises-mas-jovenes-del-mundo": { component: UnoDeLosPaisesMasJovenesDelMundo },
  "el-monumento-que-se-repinta-cada-ano": { component: ElMonumentoQueSeRepintaCadaAno },
  "el-mito-fundador-de-la-batalla-de-1389": { component: ElMitoFundadorDeLaBatallaDe1389 },
  "una-de-las-poblaciones-mas-jovenes-de-europa": { component: UnaDeLasPoblacionesMasJovenesDeEuropa },
  "la-cueva-de-marmol-hallada-por-accidente": { component: LaCuevaDeMarmolHalladaPorAccidente, variant: "medallion" },
  "usa-el-euro-sin-pertenecer-a-la-eurozona": { component: UsaElEuroSinPertenecerALaEurozona },
  "el-qeleshe-el-gorro-blanco-de-fieltro": { component: ElQelesheElGorroBlancoDeFieltro },
  "prizren-cuna-del-movimiento-nacional-albanes": { component: PrizrenCunaDelMovimientoNacionalAlbanes },
  "el-queso-pastoril-de-las-montanas-sar": { component: ElQuesoPastorilDeLasMontanasSar },
  "la-bandera-disenada-para-no-representar-a-nadie-en-particular": { component: LaBanderaDisenadaParaNoRepresentarANadieEnParticular, variant: "medallion" },
};
