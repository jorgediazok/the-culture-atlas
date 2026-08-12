import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Las23PruebasNuclearesDeBikini: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M192 178 L196 166 L204 166 L208 178 Z" fill={dark} />
      <path d="M188 166 Q200 148 212 166 Q206 160 200 160 Q194 160 188 166 Z" fill={accentColor} />
      <circle cx="200" cy="152" r="3" fill={light} />
    </g>
  );
};

const LosMapasDePalitosParaNavegarSinInstrumentos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <line x1="186" y1="154" x2="214" y2="176" stroke={accentColor} strokeWidth="2" />
      <line x1="186" y1="176" x2="214" y2="154" stroke={accentColor} strokeWidth="2" />
      <line x1="186" y1="165" x2="214" y2="165" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="165" r="2.4" fill={light} />
      <circle cx="192" cy="159" r="1.8" fill={light} />
    </g>
  );
};

const LaNacionMasBajaFrenteAlMarQueSube: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="172" width="32" height="6" fill={light} />
      <path d="M184 172 Q192 168 200 172 Q208 176 216 172" fill="none" stroke={accentColor} strokeWidth="2" />
      <path d="M184 178 Q192 174 200 178 Q208 182 216 178" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElPactoQuePermiteVivirEnEeUuSinVisa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M186 168 Q192 164 198 168" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M202 168 Q208 164 214 168" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="168" r="3" fill={accentColor} />
    </g>
  );
};

const ElMayorAtolonDeCoralPorSuperficieDeLaguna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <circle cx="200" cy="166" r="16" fill="none" stroke={accentColor} strokeWidth="5" />
      <circle cx="200" cy="166" r="9" fill={light} />
      <path d="M200 158 L203 150 L206 156" fill={dark} />
    </g>
  );
};

const LaEconomiaQueGiroEnTornoAlCocoSeco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="192" cy="170" rx="7" ry="5" fill={light} stroke={dark} strokeWidth="1" />
      <ellipse cx="206" cy="172" rx="7" ry="5" fill={light} stroke={dark} strokeWidth="1" />
      <line x1="184" y1="178" x2="216" y2="178" stroke={accentColor} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LasCanoasAsimetricasMasVelocesDelPacifico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 176 Q200 180 216 176 L212 172 L188 172 Z" fill={dark} />
      <path d="M200 172 L200 150 L212 168 Z" fill={accentColor} />
      <line x1="184" y1="176" x2="180" y2="176" stroke={light} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const ElTejidoDeHojasDePandano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M188 178 L188 162 Q200 156 212 162 L212 178 Z" fill={accentColor} />
      <path d="M188 166 L212 166 M188 172 L212 172" stroke={light} strokeWidth="1.5" opacity="0.8" />
      <path d="M194 162 L194 178 M206 162 L206 178" stroke={dark} strokeWidth="1.2" opacity="0.5" />
    </g>
  );
};

const LaCupulaDeHormigonQueTapaDesechosNucleares: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <path d="M184 178 Q184 160 200 160 Q216 160 216 178 Z" fill={accentColor} />
      <line x1="184" y1="178" x2="216" y2="178" stroke={dark} strokeWidth="2" />
      <path d="M192 178 L192 172 M200 178 L200 168 M208 178 L208 172" stroke={dark} strokeWidth="1" opacity="0.4" />
    </g>
  );
};

const LaMayorComunidadMarshalesaEstaEnArkansas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="190" y="160" width="18" height="16" rx="2" fill={accentColor} />
      <rect x="196" y="156" width="6" height="6" fill="none" stroke={dark} strokeWidth="2" />
      <line x1="190" y1="168" x2="208" y2="168" stroke={light} strokeWidth="1.5" />
    </g>
  );
};

export const marshallIslandsIllustrations: Record<string, IllustrationDefinition> = {
  "las-23-pruebas-nucleares-de-bikini": { component: Las23PruebasNuclearesDeBikini, variant: "medallion" },
  "los-mapas-de-palitos-para-navegar-sin-instrumentos": { component: LosMapasDePalitosParaNavegarSinInstrumentos },
  "la-nacion-mas-baja-frente-al-mar-que-sube": { component: LaNacionMasBajaFrenteAlMarQueSube },
  "el-pacto-que-permite-vivir-en-ee-uu-sin-visa": { component: ElPactoQuePermiteVivirEnEeUuSinVisa },
  "el-mayor-atolon-de-coral-por-superficie-de-laguna": { component: ElMayorAtolonDeCoralPorSuperficieDeLaguna, variant: "medallion" },
  "la-economia-que-giro-en-torno-al-coco-seco": { component: LaEconomiaQueGiroEnTornoAlCocoSeco },
  "las-canoas-asimetricas-mas-veloces-del-pacifico": { component: LasCanoasAsimetricasMasVelocesDelPacifico },
  "el-tejido-de-hojas-de-pandano": { component: ElTejidoDeHojasDePandano },
  "la-cupula-de-hormigon-que-tapa-desechos-nucleares": { component: LaCupulaDeHormigonQueTapaDesechosNucleares },
  "la-mayor-comunidad-marshalesa-esta-en-arkansas": { component: LaMayorComunidadMarshalesaEstaEnArkansas },
};
