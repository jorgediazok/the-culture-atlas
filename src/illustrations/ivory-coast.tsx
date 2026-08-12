import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElMayorProductorDeCacaoQueCasiNoComeChocolate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M200 150 Q212 156 210 168 Q208 178 200 180 Q192 178 190 168 Q188 156 200 150 Z" fill={accentColor} />
      <path d="M200 152 L200 178 M195 158 L195 172 M205 158 L205 172" stroke={dark} strokeWidth="1" opacity="0.6" />
      <circle cx="200" cy="165" r="1.4" fill={light} />
    </g>
  );
};

const LaBasilicaMasGrandeQueLaDeSanPedro: IllustrationComponent = ({ accentColor }) => {
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

const LosCocodrilosSagradosDelLagoPresidencial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 170 Q196 164 216 168 L212 174 L196 174 L190 178 Z" fill={accentColor} />
      <path d="M210 168 L216 164 L215 170 Z" fill={dark} />
      <circle cx="200" cy="169" r="1" fill={light} />
    </g>
  );
};

const LasMascarasDanQueInspiraronAlArteModerno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 152 L210 152 L208 178 L192 178 Z" fill={accentColor} />
      <rect x="194" y="160" width="4" height="6" fill={dark} />
      <rect x="202" y="160" width="4" height="6" fill={dark} />
      <line x1="196" y1="172" x2="204" y2="172" stroke={light} strokeWidth="1.5" />
    </g>
  );
};

const GrandBassamLaCapitalQueLaNaturalezaRecupera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="188" y="156" width="24" height="22" fill={accentColor} />
      <path d="M190 156 Q186 166 190 178 M198 152 Q198 164 200 178" stroke={light} strokeWidth="1.5" fill="none" />
      <rect x="194" y="166" width="6" height="12" fill={dark} />
    </g>
  );
};

const TambienElMayorProductorMundialDeAnacardos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M196 156 Q186 160 188 170 Q190 178 200 176 Q206 174 204 166 Q210 162 208 156 Q202 152 196 156 Z" fill={accentColor} />
      <circle cx="204" cy="158" r="4" fill={light} />
      <circle cx="204" cy="158" r="4" fill="none" stroke={dark} strokeWidth="1" />
    </g>
  );
};

const ElRuegoFutbolisticoQueFrenoUnaGuerraCivil: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="164" r="10" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <path d="M193 160 L200 164 L207 160 M193 168 L200 164 L207 168" stroke={dark} strokeWidth="1.2" fill="none" />
      <circle cx="200" cy="164" r="2" fill={light} />
    </g>
  );
};

const ElAbissaLaSemanaEnQueSeInvierteElOrden: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 156 Q200 150 210 156 L208 176 Q200 180 192 176 Z" fill={accentColor} />
      <circle cx="196" cy="164" r="2" fill={dark} />
      <circle cx="204" cy="164" r="2" fill={dark} />
      <path d="M195 172 Q200 176 205 172" fill="none" stroke={light} strokeWidth="1.5" />
    </g>
  );
};

const ComoeSelvaYSabanaEnUnMismoParque: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <ellipse cx="200" cy="158" rx="16" ry="6" fill={accentColor} />
      <line x1="200" y1="164" x2="200" y2="178" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="200" cy="180" rx="14" ry="2" fill={light} opacity="0.7" />
    </g>
  );
};

const ElDipriElRitualDondeNadieSangra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <circle cx="200" cy="158" r="10" fill={light} />
      <circle cx="205" cy="154" r="9" fill={dark} opacity="0.7" />
      <line x1="188" y1="178" x2="212" y2="178" stroke={accentColor} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

export const ivoryCoastIllustrations: Record<string, IllustrationDefinition> = {
  "el-mayor-productor-de-cacao-que-casi-no-come-chocolate": { component: ElMayorProductorDeCacaoQueCasiNoComeChocolate, variant: "medallion" },
  "la-basilica-mas-grande-que-la-de-san-pedro": { component: LaBasilicaMasGrandeQueLaDeSanPedro },
  "los-cocodrilos-sagrados-del-lago-presidencial": { component: LosCocodrilosSagradosDelLagoPresidencial },
  "las-mascaras-dan-que-inspiraron-al-arte-moderno": { component: LasMascarasDanQueInspiraronAlArteModerno },
  "grand-bassam-la-capital-que-la-naturaleza-recupera": { component: GrandBassamLaCapitalQueLaNaturalezaRecupera },
  "tambien-el-mayor-productor-mundial-de-anacardos": { component: TambienElMayorProductorMundialDeAnacardos, variant: "medallion" },
  "el-ruego-futbolistico-que-freno-una-guerra-civil": { component: ElRuegoFutbolisticoQueFrenoUnaGuerraCivil },
  "el-abissa-la-semana-en-que-se-invierte-el-orden": { component: ElAbissaLaSemanaEnQueSeInvierteElOrden },
  "comoe-selva-y-sabana-en-un-mismo-parque": { component: ComoeSelvaYSabanaEnUnMismoParque },
  "el-dipri-el-ritual-donde-nadie-sangra": { component: ElDipriElRitualDondeNadieSangra },
};
