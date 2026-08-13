import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AsentirParaDecirNoYNegarParaDecirSi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="162" r="10" fill={accentColor} />
      <path d="M212 158 Q220 158 220 164" fill="none" stroke={dark} strokeWidth="2" strokeLinecap="round" />
      <circle cx="196" cy="160" r="1.4" fill={light} />
      <circle cx="204" cy="160" r="1.4" fill={light} />
    </g>
  );
};

const ElAlfabetoCirilicoNacioAqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <rect x="188" y="152" width="24" height="26" fill="none" stroke={accentColor} strokeWidth="2" />
      <text x="200" y="170" fontSize="14" fill={dark} textAnchor="middle" fontFamily="serif">Б</text>
    </g>
  );
};

const LaBacteriaDelYogurLlevaElNombreDelPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M192 154 L208 154 L206 178 L194 178 Z" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M194 166 L206 166 L204.5 178 L195.5 178 Z" fill={light} />
      <line x1="192" y1="158" x2="208" y2="158" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElValleQuePerfumaAlMundoConRosas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="160" r="8" fill={accentColor} />
      <circle cx="200" cy="160" r="4" fill={light} />
      <path d="M200 168 L200 180" stroke={dark} strokeWidth="2" />
      <path d="M200 174 L194 178 M200 174 L206 178" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosTesorosDeOroEnterradosPorLosTracios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M192 178 L192 162 Q192 154 200 154 Q208 154 208 162 L208 178 Z" fill={accentColor} />
      <ellipse cx="200" cy="162" rx="8" ry="3" fill={light} />
      <path d="M194 170 L206 170" stroke={dark} strokeWidth="1" opacity="0.5" />
    </g>
  );
};

const ElMonasterioARayasEnLoAltoDeLaMontana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 178 L188 162 Q200 152 212 162 L212 178 Z" fill={light} />
      {[164, 168, 172, 176].map((y, i) => (
        <rect key={y} x="188" y={y} width="24" height="2" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
    </g>
  );
};

const LosKukeriFigurasCubiertasDeCascabeles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 150 Q186 156 190 178 L210 178 Q214 156 200 150 Z" fill={accentColor} />
      {[[192, 166], [200, 172], [208, 166], [196, 158], [204, 158]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill={light} stroke={dark} strokeWidth="0.5" />
      ))}
    </g>
  );
};

const ElMonumentoComunistaConFormaDeOvni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="166" rx="18" ry="7" fill={accentColor} />
      <rect x="197" y="152" width="6" height="14" fill={dark} />
      <circle cx="200" cy="150" r="2" fill={light} />
    </g>
  );
};

const UnoDeLosEstadosMasAntiguosDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 156 Q188 150 196 150 L208 150 L208 176 Q208 178 206 178 L190 178 Q188 178 188 176 Z" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <circle cx="196" cy="176" r="4" fill={dark} />
    </g>
  );
};

const ElCantoAGargantaAbiertaQueGanoUnGrammy: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="192" cy="168" r="6" fill={accentColor} />
      <circle cx="200" cy="164" r="7" fill={dark} />
      <circle cx="209" cy="168" r="6" fill={light} />
    </g>
  );
};

export const bulgariaIllustrations: Record<string, IllustrationDefinition> = {
  "asentir-para-decir-no-y-negar-para-decir-si": { component: AsentirParaDecirNoYNegarParaDecirSi },
  "el-alfabeto-cirilico-nacio-aqui": { component: ElAlfabetoCirilicoNacioAqui, variant: "medallion" },
  "la-bacteria-del-yogur-lleva-el-nombre-del-pais": { component: LaBacteriaDelYogurLlevaElNombreDelPais },
  "el-valle-que-perfuma-al-mundo-con-rosas": { component: ElValleQuePerfumaAlMundoConRosas },
  "los-tesoros-de-oro-enterrados-por-los-tracios": { component: LosTesorosDeOroEnterradosPorLosTracios, variant: "medallion" },
  "el-monasterio-a-rayas-en-lo-alto-de-la-montana": { component: ElMonasterioARayasEnLoAltoDeLaMontana },
  "los-kukeri-figuras-cubiertas-de-cascabeles": { component: LosKukeriFigurasCubiertasDeCascabeles },
  "el-monumento-comunista-con-forma-de-ovni": { component: ElMonumentoComunistaConFormaDeOvni },
  "uno-de-los-estados-mas-antiguos-de-europa": { component: UnoDeLosEstadosMasAntiguosDeEuropa },
  "el-canto-a-garganta-abierta-que-gano-un-grammy": { component: ElCantoAGargantaAbiertaQueGanoUnGrammy },
};
