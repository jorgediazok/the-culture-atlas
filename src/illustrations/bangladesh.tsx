import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElMayorBosqueDeManglaresDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 178 L188 164 M196 178 L196 158 M204 178 L204 164 M212 178 L212 158" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M188 164 Q184 168 182 174 M196 158 Q192 164 190 172 M204 164 Q208 168 210 174 M212 158 Q216 164 218 172" stroke={dark} strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="200" cy="179" rx="20" ry="2" fill={light} opacity="0.6" />
    </g>
  );
};

const LasEscuelasFlotantesQueEsquivanLaInundacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 172 Q200 180 216 172 L212 178 L188 178 Z" fill={accentColor} />
      <rect x="192" y="158" width="16" height="12" fill={light} stroke={dark} strokeWidth="1" />
      <line x1="200" y1="158" x2="200" y2="150" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosViejosVaporesDeRuedaQueSiguenNavegando: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="160" width="24" height="14" fill={accentColor} />
      <circle cx="214" cy="167" r="8" fill="none" stroke={dark} strokeWidth="2" />
      <line x1="214" y1="159" x2="214" y2="175" stroke={dark} strokeWidth="1" opacity="0.6" />
      <line x1="206" y1="167" x2="222" y2="167" stroke={dark} strokeWidth="1" opacity="0.6" />
      <rect x="192" y="152" width="4" height="8" fill={light} />
    </g>
  );
};

const ElMovimientoPorElIdiomaQueSeVolvioGlobal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 156 L200 156 L200 178 L186 178 Z" fill={light} stroke={dark} strokeWidth="1" />
      <path d="M200 156 L214 156 L214 178 L200 178 Z" fill={dark} opacity="0.15" stroke={dark} strokeWidth="1" />
      <circle cx="200" cy="166" r="4" fill={accentColor} />
    </g>
  );
};

const ElJamdaniLaTelaQueLlamabanAireTejido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="186" y="156" width="28" height="22" fill={light} opacity="0.5" stroke={accentColor} strokeWidth="1" />
      <circle cx="194" cy="164" r="2" fill={accentColor} />
      <circle cx="206" cy="164" r="2" fill={dark} />
      <circle cx="194" cy="172" r="2" fill={dark} />
      <circle cx="206" cy="172" r="2" fill={accentColor} />
    </g>
  );
};

const DhakaLaCapitalMundialDelRickshawPintado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="192" cy="178" r="5" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="212" cy="178" r="5" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M188 170 L216 170 L212 158 L192 158 Z" fill={accentColor} />
      <circle cx="200" cy="164" r="2.2" fill={light} />
    </g>
  );
};

const ElHilsaElPezNacionalQueDefineUnaCocina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 166 Q200 156 214 166 Q200 176 186 166 Z" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <path d="M186 166 L178 160 L180 172 Z" fill={dark} />
      <circle cx="206" cy="163" r="1.4" fill={dark} />
    </g>
  );
};

const LaMezquitaDeSesentaCupulasDeBagerhat: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <rect x="186" y="164" width="28" height="14" fill={accentColor} />
      <circle cx="192" cy="160" r="4" fill={dark} />
      <circle cx="200" cy="158" r="5" fill={accentColor} />
      <circle cx="208" cy="160" r="4" fill={dark} />
    </g>
  );
};

const ElMicrocreditoQueNacioParaLosMasPobres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="164" r="9" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <text x="200" y="168" fontSize="9" fill={dark} textAnchor="middle" fontFamily="serif">৳</text>
      <path d="M186 176 Q193 182 200 176 M200 176 Q207 182 214 176" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

const ElMayorDeltaFluvialDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 148 L200 162 M200 162 L188 178 M200 162 L200 178 M200 162 L212 178" stroke={accentColor} strokeWidth="2.5" fill="none" />
      <path d="M188 178 L212 178" stroke={light} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

export const bangladeshIllustrations: Record<string, IllustrationDefinition> = {
  "el-mayor-bosque-de-manglares-del-mundo": { component: ElMayorBosqueDeManglaresDelMundo },
  "las-escuelas-flotantes-que-esquivan-la-inundacion": { component: LasEscuelasFlotantesQueEsquivanLaInundacion },
  "los-viejos-vapores-de-rueda-que-siguen-navegando": { component: LosViejosVaporesDeRuedaQueSiguenNavegando },
  "el-movimiento-por-el-idioma-que-se-volvio-global": { component: ElMovimientoPorElIdiomaQueSeVolvioGlobal, variant: "medallion" },
  "el-jamdani-la-tela-que-llamaban-aire-tejido": { component: ElJamdaniLaTelaQueLlamabanAireTejido },
  "dhaka-la-capital-mundial-del-rickshaw-pintado": { component: DhakaLaCapitalMundialDelRickshawPintado },
  "el-hilsa-el-pez-nacional-que-define-una-cocina": { component: ElHilsaElPezNacionalQueDefineUnaCocina },
  "la-mezquita-de-sesenta-cupulas-de-bagerhat": { component: LaMezquitaDeSesentaCupulasDeBagerhat },
  "el-microcredito-que-nacio-para-los-mas-pobres": { component: ElMicrocreditoQueNacioParaLosMasPobres, variant: "medallion" },
  "el-mayor-delta-fluvial-del-mundo": { component: ElMayorDeltaFluvialDelMundo },
};
