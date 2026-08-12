import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElCuboQueInventoUnProfesorDeArquitectura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={188 + col * 8}
            y={156 + row * 8}
            width="7"
            height="7"
            fill={(row + col) % 2 === 0 ? accentColor : (row === 1 ? light : dark)}
          />
        ))
      )}
    </g>
  );
};

const ElIdiomaSinParientesCercanosEnEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 156 Q188 150 196 150 L208 150 Q216 150 216 156 Q216 162 208 162 L200 162 L194 168 L195 162 Q188 162 188 156 Z" fill={accentColor} />
      <text x="202" y="159" fontSize="9" fill="#fff" textAnchor="middle">?</text>
      <line x1="190" y1="176" x2="214" y2="176" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const LasTermasQueFlotanSobreUnMarSubterraneo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="172" rx="16" ry="6" fill={accentColor} />
      <path d="M192 164 Q194 158 191 152 M200 164 Q202 158 199 152 M208 164 Q210 158 207 152" stroke={light} strokeWidth="1.5" fill="none" opacity="0.7" />
      <ellipse cx="200" cy="172" rx="16" ry="6" fill="none" stroke={dark} strokeWidth="1" opacity="0.4" />
    </g>
  );
};

const ElVinoClasificadoAntesQueElDeBurdeos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M192 154 L208 154 L203 170 L197 170 Z" fill={accentColor} />
      <rect x="197" y="170" width="6" height="6" fill={dark} />
      <rect x="192" y="176" width="16" height="3" fill={dark} />
      <circle cx="200" cy="160" r="1.6" fill={light} />
    </g>
  );
};

const LaPimientaQueTambienGanoUnPremioNobel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="190" y="156" width="20" height="20" rx="2" fill={light} stroke={dark} strokeWidth="1.5" />
      <rect x="194" y="160" width="12" height="12" fill={accentColor} />
      <rect x="192" y="152" width="16" height="5" fill={dark} />
    </g>
  );
};

const LaSinagogaMasGrandeDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="164" width="24" height="14" fill={accentColor} />
      <circle cx="193" cy="158" r="5" fill={dark} />
      <circle cx="207" cy="158" r="5" fill={dark} />
      <circle cx="193" cy="152" r="1.4" fill={light} />
      <circle cx="207" cy="152" r="1.4" fill={light} />
    </g>
  );
};

const ElParlamentoQueDominaElDanubio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="166" width="28" height="12" fill={accentColor} />
      <circle cx="200" cy="160" r="7" fill={dark} />
      <path d="M186 166 L190 158 L190 166 Z" fill={light} />
      <path d="M214 166 L210 158 L210 166 Z" fill={light} />
    </g>
  );
};

const LosJinetesQueLlegaronDesdeLaEstepa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 178 L190 164 Q192 156 200 158 Q206 160 204 168 L210 178 Z" fill={accentColor} />
      <path d="M192 158 L188 151 M195 157 L194 150 M198 157 L199 150" stroke={dark} strokeWidth="1.4" />
    </g>
  );
};

const ElDominioHistoricoDelWaterpoloHungaro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="164" r="9" fill={accentColor} />
      <path d="M192 164 Q200 160 208 164 M192 164 Q200 168 208 164" stroke={dark} strokeWidth="1.2" fill="none" />
      <path d="M188 178 Q194 174 200 178 Q206 182 212 178" fill="none" stroke={light} strokeWidth="2" />
    </g>
  );
};

const ElMetroMasAntiguoDeLaEuropaContinental: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="158" width="24" height="16" rx="4" fill={accentColor} />
      <rect x="191" y="161" width="7" height="6" fill={light} />
      <rect x="202" y="161" width="7" height="6" fill={light} />
      <circle cx="193" cy="177" r="2.4" fill={dark} />
      <circle cx="207" cy="177" r="2.4" fill={dark} />
    </g>
  );
};

export const hungaryIllustrations: Record<string, IllustrationDefinition> = {
  "el-cubo-que-invento-un-profesor-de-arquitectura": { component: ElCuboQueInventoUnProfesorDeArquitectura, variant: "medallion" },
  "el-idioma-sin-parientes-cercanos-en-europa": { component: ElIdiomaSinParientesCercanosEnEuropa },
  "las-termas-que-flotan-sobre-un-mar-subterraneo": { component: LasTermasQueFlotanSobreUnMarSubterraneo },
  "el-vino-clasificado-antes-que-el-de-burdeos": { component: ElVinoClasificadoAntesQueElDeBurdeos },
  "la-pimienta-que-tambien-gano-un-premio-nobel": { component: LaPimientaQueTambienGanoUnPremioNobel, variant: "medallion" },
  "la-sinagoga-mas-grande-de-europa": { component: LaSinagogaMasGrandeDeEuropa },
  "el-parlamento-que-domina-el-danubio": { component: ElParlamentoQueDominaElDanubio },
  "los-jinetes-que-llegaron-desde-la-estepa": { component: LosJinetesQueLlegaronDesdeLaEstepa },
  "el-dominio-historico-del-waterpolo-hungaro": { component: ElDominioHistoricoDelWaterpoloHungaro },
  "el-metro-mas-antiguo-de-la-europa-continental": { component: ElMetroMasAntiguoDeLaEuropaContinental },
};
