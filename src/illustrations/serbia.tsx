import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaRakijaTejidaEnLaHospitalidadSerbia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M192 156 L192 148 L208 148 L208 156 Q214 160 214 168 L214 178 L186 178 L186 168 Q186 160 192 156 Z" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <rect x="188" y="166" width="8" height="6" fill={dark} />
    </g>
  );
};

const GucaElPuebloQueLaTrompetaTomaEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 168 L204 168 Q216 168 216 160 L216 156 Q210 158 204 156 L188 160 Z" fill={accentColor} />
      <circle cx="188" cy="164" r="4" fill={dark} />
      <circle cx="210" cy="160" r="1.6" fill={light} />
    </g>
  );
};

const TeslaLasCenizasEnUnaEsferaDorada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="162" r="12" fill={accentColor} />
      <circle cx="196" cy="158" r="3" fill={light} opacity="0.7" />
      <rect x="196" y="174" width="8" height="4" fill={dark} />
    </g>
  );
};

const LaSlavaElSantoPropioDeCadaFamilia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M198 178 L198 158 Q198 152 200 148 Q202 152 202 158 L202 178 Z" fill={accentColor} />
      <path d="M198 150 Q200 144 202 150 Q200 147 198 150 Z" fill={light} />
      <ellipse cx="200" cy="178" rx="14" ry="3" fill={dark} opacity="0.5" />
    </g>
  );
};

const KalemegdanLaFortalezaReconstruidaDecenasDeVeces: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <rect x="186" y="164" width="28" height="14" fill={accentColor} />
      {[186, 192, 198, 204, 210].map((x) => (
        <rect key={x} x={x} y="160" width="3" height="5" fill={dark} />
      ))}
    </g>
  );
};

const ElTurboFolkElGeneroMasDiscutidoDeLosBalcanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 178 Q188 160 200 158 Q212 160 212 178 Z" fill={accentColor} />
      <circle cx="200" cy="164" r="3" fill={dark} />
      <path d="M192 170 L196 172 M204 170 L208 172" stroke={light} strokeWidth="1.5" />
    </g>
  );
};

const ElGusleEpicaConUnaSolaCuerda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M192 178 Q186 160 194 150 Q200 146 200 152 Q200 168 198 178 Z" fill={accentColor} />
      <line x1="196" y1="150" x2="196" y2="178" stroke={light} strokeWidth="1.2" />
      <circle cx="196" cy="150" r="2.4" fill={dark} />
    </g>
  );
};

const DosAlfabetosUsadosAlMismoTiempo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <text x="192" y="172" fontSize="18" fill={accentColor} fontFamily="serif">Ð</text>
      <text x="204" y="172" fontSize="18" fill={dark} fontFamily="serif">D</text>
    </g>
  );
};

const ElPuebloDelDiabloTalladoEnPiedra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M195 178 L195 156 L205 156 L205 178 Z" fill={accentColor} />
      <ellipse cx="200" cy="152" rx="7" ry="4" fill={dark} />
    </g>
  );
};

const ElMayorExportadorDeFrambuesasDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M198 178 Q188 168 194 160" fill="none" stroke={dark} strokeWidth="1.5" />
      {[[194, 162], [199, 158], [204, 163], [197, 168], [202, 170]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill={accentColor} opacity="0.9" />
      ))}
      <circle cx="199" cy="164" r="1.2" fill={light} />
    </g>
  );
};

export const serbiaIllustrations: Record<string, IllustrationDefinition> = {
  "la-rakija-tejida-en-la-hospitalidad-serbia": { component: LaRakijaTejidaEnLaHospitalidadSerbia },
  "guca-el-pueblo-que-la-trompeta-toma-entero": { component: GucaElPuebloQueLaTrompetaTomaEntero },
  "tesla-las-cenizas-en-una-esfera-dorada": { component: TeslaLasCenizasEnUnaEsferaDorada, variant: "medallion" },
  "la-slava-el-santo-propio-de-cada-familia": { component: LaSlavaElSantoPropioDeCadaFamilia },
  "kalemegdan-la-fortaleza-reconstruida-decenas-de-veces": { component: KalemegdanLaFortalezaReconstruidaDecenasDeVeces },
  "el-turbo-folk-el-genero-mas-discutido-de-los-balcanes": { component: ElTurboFolkElGeneroMasDiscutidoDeLosBalcanes },
  "el-gusle-poesia-epica-con-una-sola-cuerda": { component: ElGusleEpicaConUnaSolaCuerda },
  "dos-alfabetos-usados-al-mismo-tiempo": { component: DosAlfabetosUsadosAlMismoTiempo },
  "el-pueblo-del-diablo-tallado-en-piedra": { component: ElPuebloDelDiabloTalladoEnPiedra, variant: "medallion" },
  "el-mayor-exportador-de-frambuesas-del-mundo": { component: ElMayorExportadorDeFrambuesasDelMundo },
};
