import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DosJefesDeEstadoExtranjeros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 170 L192 158 L196 170 Z" fill={accentColor} />
      <circle cx="192" cy="156" r="2" fill={light} />
      <path d="M204 170 L209 156 L214 170 Z" fill={dark} />
      <circle cx="209" cy="154" r="2" fill={light} />
      <line x1="184" y1="178" x2="218" y2="178" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ParlamentoQueFuncionaDesde1419: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="158" width="28" height="20" fill={accentColor} />
      <path d="M186 158 L200 148 L214 158 Z" fill={dark} />
      <rect x="196" y="164" width="8" height="14" fill={light} />
    </g>
  );
};

const SinEjercitoPropioDesdeHaceSiglos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <path d="M192 150 L208 150 L208 168 Q200 178 192 168 Z" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <line x1="212" y1="150" x2="212" y2="178" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const LaCapitalMasAltaDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M182 178 L194 154 L202 168 L208 158 L220 178 Z" fill={accentColor} />
      <path d="M194 154 L198 160 L190 162 Z" fill={light} />
      <path d="M208 158 L211 163 L205 164 Z" fill={light} />
      <rect x="196" y="170" width="6" height="8" fill={dark} />
    </g>
  );
};

const UnicoPaisConElCatalanComoIdiomaOficial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M186 156 Q186 150 194 150 L206 150 Q214 150 214 156 Q214 162 206 162 L198 162 L192 168 L193 162 Q186 162 186 156 Z" fill={accentColor} />
      <text x="200" y="159" fontSize="10" fill="#fff" textAnchor="middle" fontFamily="serif">C</text>
      <line x1="188" y1="176" x2="212" y2="176" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const ElParaisoDeComprasSinImpuestos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 158 L212 158 L210 178 L190 178 Z" fill={accentColor} />
      <path d="M192 158 Q192 148 200 148 Q208 148 208 158" fill="none" stroke={dark} strokeWidth="2.5" />
      <circle cx="200" cy="168" r="2" fill={light} />
    </g>
  );
};

const GrandvaliraElMayorDominioEsquiablePirenaico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 178 L194 152 L204 168 L212 156 L220 178 Z" fill={light} />
      <path d="M180 178 L194 152 L200 162 L188 178 Z" fill={accentColor} />
      <line x1="196" y1="170" x2="184" y2="176" stroke={dark} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
};

const ElCultivoDeTabacoQueAlimentoElContrabando: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <line x1="186" y1="150" x2="214" y2="150" stroke={dark} strokeWidth="2" />
      <path d="M190 150 Q188 162 192 174" stroke={accentColor} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M200 150 Q198 164 202 176" stroke={light} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M210 150 Q208 162 212 174" stroke={accentColor} strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  );
};

const UnaDeLasMayoresEsperanzasDeVidaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M200 176 Q184 162 188 150 Q192 142 200 150 Q208 142 212 150 Q216 162 200 176 Z" fill={accentColor} />
      <path d="M182 178 L196 156 L206 170 L218 154" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ElSantuarioQueRenacioDeUnIncendio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 178 L186 162 Q200 148 214 162 L214 178 Z" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <rect x="196" y="168" width="8" height="10" fill={dark} />
      <circle cx="200" cy="156" r="2" fill={accentColor} />
    </g>
  );
};

export const andorraIllustrations: Record<string, IllustrationDefinition> = {
  "dos-jefes-de-estado-extranjeros": { component: DosJefesDeEstadoExtranjeros },
  "parlamento-que-funciona-desde-1419": { component: ParlamentoQueFuncionaDesde1419 },
  "sin-ejercito-propio-desde-hace-siglos": { component: SinEjercitoPropioDesdeHaceSiglos, variant: "medallion" },
  "la-capital-mas-alta-de-europa": { component: LaCapitalMasAltaDeEuropa },
  "unico-pais-con-el-catalan-como-idioma-oficial": { component: UnicoPaisConElCatalanComoIdiomaOficial },
  "el-paraiso-de-compras-sin-impuestos": { component: ElParaisoDeComprasSinImpuestos },
  "grandvalira-el-mayor-dominio-esquiable-pirenaico": { component: GrandvaliraElMayorDominioEsquiablePirenaico },
  "el-cultivo-de-tabaco-que-alimento-el-contrabando": { component: ElCultivoDeTabacoQueAlimentoElContrabando },
  "una-de-las-mayores-esperanzas-de-vida-del-mundo": { component: UnaDeLasMayoresEsperanzasDeVidaDelMundo, variant: "medallion" },
  "el-santuario-que-renacio-de-un-incendio": { component: ElSantuarioQueRenacioDeUnIncendio },
};
