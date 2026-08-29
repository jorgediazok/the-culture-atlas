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

const VimbuzaDanzaSanadora: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  return (
    <g>
      <ellipse cx="150" cy="235" rx="16" ry="8" fill="#8B1A1A" opacity="0.6" />
      <path d="M144 235 Q142 210 148 195 M156 235 Q158 210 152 195" stroke="#F4A300" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
      <ellipse cx="255" cy="230" rx="20" ry="12" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <rect x="245" y="205" width="20" height="26" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <path d="M187 172 Q165 155 170 130" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M213 172 Q235 190 225 215" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <line x1="194" y1="205" x2="188" y2="240" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="206" y1="205" x2="215" y2="240" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M187 165 Q200 158 213 165 L206 205 L194 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="200" cy="150" r="13" fill={skin} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const FestivalLakeOfStars: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="120" fill="#0A1A3A" />
      <circle cx="270" cy="110" r="14" fill="#F5F0E6" opacity="0.9" />
      <path d="M90 200 Q205 190 320 200 L320 250 L90 250 Z" fill="#0EA5B8" opacity="0.4" />
      <rect x="160" y="150" width="90" height="55" fill="#1B1B1B" stroke={dark} strokeWidth="2.4" />
      <path d="M175 205 L175 150 M205 205 L205 150 M235 205 L235 150" stroke={accentColor} strokeWidth="4" opacity="0.7" />
      <circle cx="175" cy="150" r="6" fill={accentColor} />
      <circle cx="205" cy="150" r="6" fill="#D9A227" />
      <circle cx="235" cy="150" r="6" fill="#C1272D" />
      <path d="M160 205 Q205 220 250 205" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ParqueNacionalNyika: IllustrationComponent = ({ accentColor }) => {
  const ZEBRAS: [number, number, number][] = [
    [150, 220, 1], [220, 210, 0.85],
  ];
  return (
    <g>
      <path d="M90 250 Q140 190 205 200 Q270 210 320 180 L320 250 Z" fill={accentColor} opacity="0.4" />
      {ZEBRAS.map(([x, y, s]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${s})`}>
          <ellipse cx="0" cy="0" rx="26" ry="15" fill="#F5F0E6" stroke="#1A1A1A" strokeWidth="2.2" />
          <path d="M-22 -10 Q0 -14 22 -10 Q0 -6 -22 -10 M-15 8 Q0 12 15 8" stroke="#1A1A1A" strokeWidth="2" fill="none" />
          <path d="M18 -8 Q30 -16 32 -8 L26 -2 Z" fill="#F5F0E6" stroke="#1A1A1A" strokeWidth="2" />
          <line x1="20" y1="-8" x2="18" y2="-16" stroke="#1A1A1A" strokeWidth="2" />
          <line x1="24" y1="-8" x2="26" y2="-16" stroke="#1A1A1A" strokeWidth="2" />
          <line x1="-15" y1="12" x2="-17" y2="24" stroke="#1A1A1A" strokeWidth="4" />
          <line x1="10" y1="13" x2="12" y2="25" stroke="#1A1A1A" strokeWidth="4" />
        </g>
      ))}
    </g>
  );
};

const HastingsBandaIndependencia1964: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  return (
    <g>
      <rect x="255" y="110" width="6" height="130" fill="#5C3A21" />
      <path d="M261 115 L300 130 L261 145 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M188 178 Q165 190 170 215" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="170" y1="215" x2="168" y2="238" stroke="#5C3A21" strokeWidth="4" strokeLinecap="round" />
      <path d="M212 178 Q235 190 228 210" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M184 172 Q200 163 216 172 L210 235 Q200 242 190 235 Z" fill="#1B1B1B" stroke={dark} strokeWidth="2.6" />
      <circle cx="200" cy="155" r="14" fill={skin} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const WilliamKamkwambaMolinoViento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  return (
    <g>
      <rect x="255" y="130" width="8" height="110" fill="#8C8C8C" stroke={dark} strokeWidth="2" />
      <line x1="259" y1="130" x2="290" y2="115" stroke="#3A3A3A" strokeWidth="5" strokeLinecap="round" />
      <line x1="259" y1="130" x2="290" y2="145" stroke="#3A3A3A" strokeWidth="5" strokeLinecap="round" />
      <line x1="259" y1="130" x2="228" y2="130" stroke="#3A3A3A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="259" cy="130" r="6" fill="#3A3A3A" />
      <path d="M166 175 Q195 180 220 170" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M154 180 Q135 190 138 215" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="154" y1="220" x2="150" y2="248" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <line x1="166" y1="220" x2="172" y2="248" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <path d="M147 165 Q160 158 173 165 L166 220 Q160 226 154 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="160" cy="150" r="13" fill={skin} stroke={dark} strokeWidth="2" />
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
  "vimbuza-danza-sanadora": { component: VimbuzaDanzaSanadora },
  "festival-lake-of-stars": { component: FestivalLakeOfStars },
  "parque-nacional-nyika": { component: ParqueNacionalNyika },
  "hastings-banda-independencia-1964": { component: HastingsBandaIndependencia1964 },
  "william-kamkwamba-molino-viento": { component: WilliamKamkwambaMolinoViento },
};
