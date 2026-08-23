import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

const ElLagoConMasEspeciesDePecesQueNingunOtro: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#0EA5B8" opacity="0.35" />
    {[[140, 170, "#D9A227"], [190, 200, "#C1440E"], [240, 160, "#3A7A45"], [270, 210, "#B5651D"], [160, 220, "#1B7A9C"]].map(([x, y, color], i) => (
      <g key={i} transform={`translate(${x} ${y})`}>
        <path d="M-16 0 Q0 -12 16 0 Q0 12 -16 0 Z" fill={color as string} stroke="#0A4A5C" strokeWidth="1.8" />
        <path d="M-16 0 L-26 -8 L-26 8 Z" fill={color as string} stroke="#0A4A5C" strokeWidth="1.4" />
        <circle cx="8" cy="-2" r="1.6" fill="#0A0805" />
      </g>
    ))}
  </g>
);

const ElGranBaileDeMascarasQueSoloLosIniciadosConocen: IllustrationComponent = () => (
  <g>
    {person(150, 240, 0.9, "#0A0805", "#8B5A2B", "#0A0805")}
    <ellipse cx="150" cy="185" rx="18" ry="24" fill="#1B1B1B" stroke="#0A0805" strokeWidth="2.4" />
    <path d="M138 178 Q150 168 162 178" fill="none" stroke="#F5F0E6" strokeWidth="2.2" />
    <path d="M132 220 L128 250 M144 222 L140 255 M156 222 L160 255 M168 220 L172 250" stroke="#D9A227" strokeWidth="4" strokeLinecap="round" />
    {[[240, 230], [270, 220]].map(([x, y], i) => (
      person(x, y, 0.7, "#3A2A1E", i % 2 === 0 ? "#D9A227" : "#8B5A2B")
    ))}
  </g>
);

const LasPinturasEnRocaQueTienenMilesDeAnos: IllustrationComponent = () => (
  <g>
    <path d="M110 250 L130 130 L270 130 L290 250 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.8" />
    {[[160, 200], [190, 190], [220, 205], [175, 220]].map(([x, y], i) => (
      <g key={i} transform={`translate(${x} ${y})`}>
        <circle cx="0" cy="-10" r="4" fill="#B5651D" />
        <path d="M0 -6 L0 10 M-8 0 L8 0 M-6 18 L0 10 L6 18" stroke="#B5651D" strokeWidth="2.4" fill="none" />
      </g>
    ))}
  </g>
);

const LaMontanaIslaQueFlotaSobreLasNubes: IllustrationComponent = () => (
  <g>
    <path d="M110 250 L160 120 L200 180 L240 100 L290 250 Z" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.8" />
    {[[130, 190], [220, 160], [270, 200]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="30" ry="10" fill="#F5F0E6" opacity="0.85" />
    ))}
    <path d="M238 100 Q244 90 250 100" fill="#1B4B1E" stroke="#0A2A0E" strokeWidth="1.6" />
  </g>
);

const ElPezQueSePescaIgualDesdeHaceGeneraciones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="180" width="230" height="70" fill="#0EA5B8" opacity="0.5" />
      <path d="M155 220 L245 220 L232 200 L168 200 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      {person(200, 195, 0.95, dark, accentColor)}
      <path d="M215 168 Q245 158 265 170" fill="none" stroke="#3A2A1E" strokeWidth="3" />
      <ellipse cx="270" cy="172" rx="14" ry="8" fill="none" stroke="#3A2A1E" strokeWidth="2.6" />
    </g>
  );
};

const LaPastaDeMaizQueEstaEnCadaPlatoDiario: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="90" ry="24" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="185" cy="195" rx="34" ry="28" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.4" />
    {[[245, 200], [260, 210]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="12" ry="9" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.8" />
    ))}
  </g>
);

const LasVasijasQueCuentanLaHistoriaDeUnPueblo: IllustrationComponent = () => (
  <g>
    {[[150, 230, 30], [200, 240, 40], [250, 225, 26]].map(([x, y, r], i) => (
      <g key={i}>
        <path d={`M${x - r * 0.7} ${y} Q${x - r} ${y - r} ${x} ${y - r * 1.3} Q${x + r} ${y - r} ${x + r * 0.7} ${y} Z`} fill="#B5651D" stroke="#5C3A21" strokeWidth="2.2" />
        <path d={`M${x - r * 0.5} ${y - r * 0.6} L${x + r * 0.5} ${y - r * 0.6}`} stroke="#5C3A21" strokeWidth="1.4" opacity="0.7" />
      </g>
    ))}
  </g>
);

const LaHojaQueSostieneLaEconomiaDeTodoUnPais: IllustrationComponent = () => (
  <g>
    <rect x="120" y="100" width="160" height="12" fill="#5C3A21" />
    {[0, 1, 2, 3].map((i) => (
      <path key={i} d={`M${140 + i * 40} 112 Q${130 + i * 40} 160 ${140 + i * 40} 210 Q${150 + i * 40} 160 ${140 + i * 40} 112 Z`} fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    ))}
    <path d="M110 100 L110 130 M290 100 L290 130" stroke="#3A2A1E" strokeWidth="3" />
  </g>
);

const ElPredicadorQueDesafioAlImperioAntesQueNadie: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(190, 245, 1.1, dark, "#1B1B1B")}
      <rect x="180" y="192" width="20" height="10" rx="3" fill="#1B1B1B" stroke={dark} strokeWidth="1.6" />
      <path d="M240 200 L240 250 L280 250 L280 200 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <path d="M255 200 L255 180 L265 180 L265 200" fill="none" stroke={dark} strokeWidth="2.2" />
      <rect x="256" y="215" width="8" height="20" fill="#F5F0E6" />
    </g>
  );
};

const ElPaisQueRecibeACualquieraConLosBrazosAbiertos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(160, 235, 1, dark, accentColor)}
      {person(240, 235, 1, dark, tint(accentColor, 0.25))}
      <path d="M178 210 L222 210" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M120 220 L140 210 M280 220 L260 210" stroke="#D9A227" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

export const malawiIllustrations: Record<string, IllustrationDefinition> = {
  "el-lago-con-mas-especies-de-peces-que-ningun-otro": { component: ElLagoConMasEspeciesDePecesQueNingunOtro },
  "el-gran-baile-de-mascaras-que-solo-los-iniciados-conocen": { component: ElGranBaileDeMascarasQueSoloLosIniciadosConocen },
  "las-pinturas-en-roca-que-tienen-miles-de-anos": { component: LasPinturasEnRocaQueTienenMilesDeAnos },
  "la-montana-isla-que-flota-sobre-las-nubes": { component: LaMontanaIslaQueFlotaSobreLasNubes },
  "el-pez-que-se-pesca-igual-desde-hace-generaciones": { component: ElPezQueSePescaIgualDesdeHaceGeneraciones },
  "la-pasta-de-maiz-que-esta-en-cada-plato-diario": { component: LaPastaDeMaizQueEstaEnCadaPlatoDiario },
  "las-vasijas-de-barro-que-cuentan-la-historia-de-un-pueblo": { component: LasVasijasQueCuentanLaHistoriaDeUnPueblo },
  "la-hoja-que-sostiene-la-economia-de-todo-un-pais": { component: LaHojaQueSostieneLaEconomiaDeTodoUnPais },
  "el-predicador-que-desafio-al-imperio-mucho-antes-que-otros": { component: ElPredicadorQueDesafioAlImperioAntesQueNadie },
  "el-pais-que-recibe-a-cualquiera-con-los-brazos-abiertos": { component: ElPaisQueRecibeACualquieraConLosBrazosAbiertos },
};
