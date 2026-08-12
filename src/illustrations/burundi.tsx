import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LosTamborilerosQueCarganElTamborEnLaCabeza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 178 L192 160 L208 160 L210 178 Z" fill={accentColor} />
      <ellipse cx="200" cy="160" rx="8" ry="3" fill={light} stroke={dark} strokeWidth="1" />
      <line x1="193" y1="168" x2="207" y2="168" stroke={dark} strokeWidth="1" opacity="0.5" />
    </g>
  );
};

const TanganicaUnoDeLosLagosMasAntiguosDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 168 Q193 162 200 168 Q207 174 214 168" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <path d="M186 176 Q193 170 200 176 Q207 182 214 176" fill="none" stroke={dark} strokeWidth="2.5" />
      <circle cx="200" cy="158" r="2" fill={light} />
    </g>
  );
};

const LaPiramideQueMarcaUnaFuenteDelNilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 152 L214 178 L186 178 Z" fill={accentColor} />
      <path d="M200 152 L207 178 L193 178 Z" fill={dark} opacity="0.5" />
      <circle cx="200" cy="148" r="1.6" fill={light} />
    </g>
  );
};

const GitegaUnaCapitalTrasladadaEn2019: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="160" width="24" height="18" fill={accentColor} />
      <path d="M188 160 L200 150 L212 160 Z" fill={dark} />
      <rect x="196" y="166" width="8" height="12" fill={light} />
    </g>
  );
};

const ElCafeQueSostieneABuenaParteDelPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M188 178 Q186 168 192 162" fill="none" stroke={dark} strokeWidth="1.5" />
      {[[192, 164], [197, 160], [202, 165], [195, 170], [200, 172]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill={accentColor} opacity="0.9" />
      ))}
      <circle cx="197" cy="166" r="1.2" fill={light} />
    </g>
  );
};

const ElUmuganuroLaFiestaRealDeLaCosecha: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 178 Q194 162 200 150 Q206 162 200 178 Z" fill={accentColor} />
      <path d="M200 156 L194 160 M200 162 L206 166 M200 168 L194 172" stroke={dark} strokeWidth="1" opacity="0.6" />
      <ellipse cx="200" cy="178" rx="10" ry="2" fill={light} opacity="0.6" />
    </g>
  );
};

const ElInangaLaCitaraQueCantaAlabanzas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 172 Q200 160 214 172 Q200 178 186 172 Z" fill={accentColor} />
      <line x1="190" y1="170" x2="210" y2="170" stroke={light} strokeWidth="1" opacity="0.7" />
      <line x1="192" y1="173" x2="208" y2="173" stroke={dark} strokeWidth="1" opacity="0.5" />
    </g>
  );
};

const HipopotamosYCocodrilosDondeElRioSeEncuentraConElLago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 174 Q192 168 200 172 Q208 168 214 174 L214 178 L186 178 Z" fill={accentColor} />
      <circle cx="193" cy="170" r="1.6" fill={dark} />
      <circle cx="207" cy="170" r="1.6" fill={dark} />
      <line x1="186" y1="178" x2="214" y2="178" stroke={light} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const UnaDeLasPoblacionesMasDensasDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 178 L192 166 L198 178 Z" fill={accentColor} />
      <path d="M196 178 L202 160 L208 178 Z" fill={dark} />
      <path d="M206 178 L211 168 L216 178 Z" fill={light} />
    </g>
  );
};

const ElConsejoDeSabiosQueResuelveDisputas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="192" y1="178" x2="196" y2="152" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="200" y1="178" x2="200" y2="150" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="208" y1="178" x2="204" y2="152" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
};

export const burundiIllustrations: Record<string, IllustrationDefinition> = {
  "los-tamborileros-que-cargan-el-tambor-en-la-cabeza": { component: LosTamborilerosQueCarganElTamborEnLaCabeza },
  "tanganica-uno-de-los-lagos-mas-antiguos-del-mundo": { component: TanganicaUnoDeLosLagosMasAntiguosDelMundo, variant: "medallion" },
  "la-piramide-que-marca-una-fuente-del-nilo": { component: LaPiramideQueMarcaUnaFuenteDelNilo },
  "gitega-una-capital-trasladada-en-2019": { component: GitegaUnaCapitalTrasladadaEn2019 },
  "el-cafe-que-sostiene-a-buena-parte-del-pais": { component: ElCafeQueSostieneABuenaParteDelPais, variant: "medallion" },
  "el-umuganuro-la-fiesta-real-de-la-cosecha": { component: ElUmuganuroLaFiestaRealDeLaCosecha },
  "el-inanga-la-citara-que-canta-alabanzas": { component: ElInangaLaCitaraQueCantaAlabanzas },
  "hipopotamos-y-cocodrilos-donde-el-rio-se-encuentra-con-el-lago": { component: HipopotamosYCocodrilosDondeElRioSeEncuentraConElLago },
  "una-de-las-poblaciones-mas-densas-de-africa": { component: UnaDeLasPoblacionesMasDensasDeAfrica },
  "el-consejo-de-sabios-que-resuelve-disputas": { component: ElConsejoDeSabiosQueResuelveDisputas },
};
