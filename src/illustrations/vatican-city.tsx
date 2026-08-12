import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElPaisSoberanoMasPequenoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <rect x="188" y="160" width="24" height="18" fill={accentColor} />
      {[186, 192, 198, 204, 210].map((x) => (
        <rect key={x} x={x} y="156" width="4" height="4" fill={dark} />
      ))}
    </g>
  );
};

const ElPapaLaUltimaMonarquiaAbsolutaDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 174 Q188 166 200 166 Q212 166 212 174 Z" fill={accentColor} />
      <path d="M190 166 Q190 160 200 160 Q210 160 210 166 Z" fill={dark} />
      <circle cx="200" cy="156" r="2.4" fill={light} />
    </g>
  );
};

const LaGuardiaSuizaElEjercitoMasAntiguoActivo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="188" y1="176" x2="212" y2="154" stroke={dark} strokeWidth="2.5" />
      <path d="M204 154 L214 152 L210 162 Z" fill={accentColor} />
    </g>
  );
};

const NadieNaceSiendoCiudadanoVaticano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="158" width="28" height="18" rx="2" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <circle cx="194" cy="167" r="3" fill={dark} />
      <line x1="200" y1="164" x2="210" y2="164" stroke={dark} strokeWidth="1.2" />
      <line x1="200" y1="169" x2="208" y2="169" stroke={dark} strokeWidth="1.2" />
    </g>
  );
};

const MonedaSelloPostalYRadioPropios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <line x1="200" y1="176" x2="200" y2="158" stroke={dark} strokeWidth="2" />
      <path d="M200 158 Q206 160 200 164 Q194 168 200 170" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="200" cy="176" r="2" fill={light} />
    </g>
  );
};

const ElTechoDeLaCapillaSixtinaCuatroAnosPintando: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <line x1="190" y1="176" x2="204" y2="156" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="206" cy="153" r="4" fill={accentColor} />
      <circle cx="206" cy="153" r="4" fill="none" stroke={light} strokeWidth="1" />
    </g>
  );
};

const LosArchivosSecretosQueEnRealidadSonPrivados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {[188, 195, 202, 209].map((x, i) => (
        <rect key={x} x={x} y={160 + (i % 2) * 3} width="5" height={16 - (i % 2) * 3} fill={i % 2 === 0 ? accentColor : light} />
      ))}
      <line x1="185" y1="178" x2="215" y2="178" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaBasilicaDeSanPedroLaIglesiaMasGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 178 Q186 160 200 158 Q214 160 214 178 Z" fill={accentColor} />
      <line x1="200" y1="158" x2="200" y2="148" stroke={dark} strokeWidth="2" />
      <line x1="196" y1="151" x2="204" y2="151" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="166" r="2" fill={light} />
    </g>
  );
};

const ElBancoVaticanoUnaInstitucionFinancieraUnica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="196" cy="166" r="7" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <line x1="201" y1="171" x2="212" y2="182" stroke={accentColor} strokeWidth="2.5" />
      <circle cx="196" cy="166" r="2" fill={light} />
      <line x1="207" y1="177" x2="211" y2="173" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaMayorTasaDeDelitosPerCapitaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 168 L212 168 L212 178 L186 178 Z" fill={accentColor} />
      <path d="M186 168 Q186 160 194 160 L200 160 L200 168" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="204" cy="173" r="1.6" fill={light} />
    </g>
  );
};

export const vaticanCityIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-soberano-mas-pequeno-del-mundo": { component: ElPaisSoberanoMasPequenoDelMundo },
  "el-papa-la-ultima-monarquia-absoluta-de-europa": { component: ElPapaLaUltimaMonarquiaAbsolutaDeEuropa, variant: "medallion" },
  "la-guardia-suiza-el-ejercito-mas-antiguo-activo": { component: LaGuardiaSuizaElEjercitoMasAntiguoActivo },
  "nadie-nace-siendo-ciudadano-vaticano": { component: NadieNaceSiendoCiudadanoVaticano },
  "moneda-sello-postal-y-radio-propios": { component: MonedaSelloPostalYRadioPropios },
  "el-techo-de-la-capilla-sixtina-cuatro-anos-pintando": { component: ElTechoDeLaCapillaSixtinaCuatroAnosPintando },
  "los-archivos-secretos-que-en-realidad-son-privados": { component: LosArchivosSecretosQueEnRealidadSonPrivados },
  "la-basilica-de-san-pedro-la-iglesia-mas-grande": { component: LaBasilicaDeSanPedroLaIglesiaMasGrande, variant: "medallion" },
  "el-banco-vaticano-una-institucion-financiera-unica": { component: ElBancoVaticanoUnaInstitucionFinancieraUnica },
  "la-mayor-tasa-de-delitos-per-capita-del-mundo": { component: LaMayorTasaDeDelitosPerCapitaDelMundo },
};
