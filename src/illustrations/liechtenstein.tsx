import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnoDeLosDosUnicosPaisesDoblementeSinMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="166" r="16" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="166" r="10" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="200" cy="166" r="3" fill={light} />
    </g>
  );
};

const ElPrincipeQueTodaviaGobiernaDeVerdad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 176 L188 162 L194 168 L200 156 L206 168 L212 162 L212 176 Z" fill={accentColor} />
      <rect x="188" y="176" width="24" height="4" fill={dark} />
      <circle cx="200" cy="160" r="1.6" fill={light} />
    </g>
  );
};

const MasEmpresasRegistradasQueCiudadanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[186, 196, 206].map((x, i) => (
        <rect key={x} x={x} y={166 - i * 2} width="8" height={12 + i * 2} fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <circle cx="200" cy="160" r="1" fill={light} />
    </g>
  );
};

const SinEjercitoDesde1868YSinAeropuertoPropio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M192 150 L208 150 L208 168 Q200 178 192 168 Z" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <line x1="212" y1="150" x2="212" y2="178" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const LasEstampillasQueFueronUnaIndustriaSeria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="152" width="24" height="28" fill={light} stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 1.5" />
      <rect x="193" y="158" width="14" height="12" fill={accentColor} />
      <circle cx="200" cy="164" r="3" fill={dark} />
    </g>
  );
};

const ElCastilloDondeElPrincipeRealmenteVive: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="164" width="24" height="14" fill={accentColor} />
      <rect x="190" y="152" width="6" height="12" fill={dark} />
      <rect x="204" y="152" width="6" height="12" fill={dark} />
      <rect x="197" y="168" width="6" height="10" fill={light} />
    </g>
  );
};

const UnoDeLosPibPerCapitaMasAltosDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={196 + i * 2} cy={174 - i * 5} r="6" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="1" />
      ))}
    </g>
  );
};

const ElPaisEnteroSePuedeAlquilarPorUnDia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="192" cy="160" r="6" fill="none" stroke={accentColor} strokeWidth="3" />
      <line x1="196" y1="164" x2="210" y2="178" stroke={accentColor} strokeWidth="3" />
      <line x1="204" y1="172" x2="208" y2="168" stroke={dark} strokeWidth="2" />
      <circle cx="192" cy="160" r="1.6" fill={light} />
    </g>
  );
};

const UnAlemanQueNoSuenaComoElDeLosLibros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M186 156 Q186 150 194 150 L206 150 Q214 150 214 156 Q214 162 206 162 L198 162 L192 168 L193 162 Q186 162 186 156 Z" fill={accentColor} />
      <path d="M192 156 Q195 154 198 156 Q201 158 204 156" stroke={dark} strokeWidth="1.3" fill="none" />
    </g>
  );
};

const ElSenderoQueCruzaElPaisDePuntaAPunta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 178 Q192 160 200 178 Q208 160 216 178" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      <path d="M186 176 Q196 156 206 176" fill="none" stroke={accentColor} strokeWidth="2.5" strokeDasharray="3 2" />
      <circle cx="186" cy="176" r="2" fill={light} />
    </g>
  );
};

export const liechtensteinIllustrations: Record<string, IllustrationDefinition> = {
  "uno-de-los-dos-unicos-paises-doblemente-sin-mar": { component: UnoDeLosDosUnicosPaisesDoblementeSinMar, variant: "medallion" },
  "el-principe-que-todavia-gobierna-de-verdad": { component: ElPrincipeQueTodaviaGobiernaDeVerdad },
  "mas-empresas-registradas-que-ciudadanos": { component: MasEmpresasRegistradasQueCiudadanos },
  "sin-ejercito-desde-1868-y-sin-aeropuerto-propio": { component: SinEjercitoDesde1868YSinAeropuertoPropio },
  "las-estampillas-que-fueron-una-industria-seria": { component: LasEstampillasQueFueronUnaIndustriaSeria },
  "el-castillo-donde-el-principe-realmente-vive": { component: ElCastilloDondeElPrincipeRealmenteVive },
  "uno-de-los-pib-per-capita-mas-altos-del-mundo": { component: UnoDeLosPibPerCapitaMasAltosDelMundo, variant: "medallion" },
  "el-pais-entero-se-puede-alquilar-por-un-dia": { component: ElPaisEnteroSePuedeAlquilarPorUnDia },
  "un-aleman-que-no-suena-como-el-de-los-libros": { component: UnAlemanQueNoSuenaComoElDeLosLibros },
  "el-sendero-que-cruza-el-pais-de-punta-a-punta": { component: ElSenderoQueCruzaElPaisDePuntaAPunta },
};
