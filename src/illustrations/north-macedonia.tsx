import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElPaisQueCambioDeNombreEn2019: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="150" y1="250" x2="150" y2="110" stroke="#8B7355" strokeWidth="8" />
      <rect x="105" y="120" width="180" height="55" rx="6" fill="#F5F0E6" stroke={dark} strokeWidth="3.5" />
      <rect x="195" y="120" width="90" height="55" fill={accentColor} opacity="0.85" />
      <line x1="125" y1="147" x2="180" y2="147" stroke={dark} strokeWidth="4" opacity="0.4" />
      <line x1="220" y1="140" x2="265" y2="140" stroke="#F5F0E6" strokeWidth="4" opacity="0.7" />
      <line x1="220" y1="155" x2="255" y2="155" stroke="#F5F0E6" strokeWidth="4" opacity="0.5" />
      <line x1="245" y1="200" x2="290" y2="120" stroke="#8B5A2B" strokeWidth="7" strokeLinecap="round" />
      <path d="M280 128 L300 118 L295 138 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElLagoOhridYLaLeyendaDe365Iglesias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1B5E7A" opacity="0.4" />
      <path d="M90 250 L90 210 L130 190 L130 250 Z" fill="#8B8378" opacity="0.6" />
      <rect x="220" y="195" width="55" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="215,195 247,165 280,195" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="247" y1="165" x2="247" y2="148" stroke={dark} strokeWidth="2.5" />
      <line x1="240" y1="155" x2="254" y2="155" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#0E4A5E" opacity="0.5" />
    </g>
  );
};

const MadreTeresaNacioEnSkopje: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="195" y="170" width="90" height="80" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="190,170 240,140 290,170" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="225" y="200" width="30" height="50" fill={dark} opacity="0.4" />
      <path d="M120 250 L120 195 Q120 178 137 178 Q154 178 154 195 L154 235 Q154 250 137 250 Z" fill="#37474F" stroke={dark} strokeWidth="2.5" />
      <circle cx="137" cy="165" r="14" fill="#E0B89A" />
      <path d="M123 165 Q137 150 151 165 Q151 178 137 178 Q123 178 123 165 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M128 240 L118 260 M146 240 L156 260" stroke="#37474F" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Skopje2014LaCiudadLlenaDeEstatuasNuevas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#9E9A92" />
      <rect x="185" y="150" width="40" height="80" fill="#D4AF37" stroke={dark} strokeWidth="3" />
      <path d="M175 150 Q205 100 235 150 Q220 165 205 158 Q190 165 175 150 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="120" r="13" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="235" y1="140" x2="270" y2="115" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="205" cy="240" rx="80" ry="12" fill="#3D8FB0" opacity="0.4" />
      <rect x="95" y="200" width="24" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2" opacity="0.8" />
      <rect x="291" y="205" width="24" height="25" fill="#F5F0E6" stroke={dark} strokeWidth="2" opacity="0.8" />
    </g>
  );
};

const ElAjvarCaseroDeCadaOtono: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 250 L185 210 L225 210 L240 250 Z" fill="#3A3A3A" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="210" rx="38" ry="14" fill="#5C5C5C" stroke={dark} strokeWidth="2.5" />
      <path d="M175 245 L165 260 M195 248 L188 264 M215 248 L222 264 M235 245 L245 260" stroke="#C0392B" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      {[[130, 225], [110, 200], [155, 195], [280, 220], [300, 195], [255, 200]].map(([x, y], i) => (
        <path key={`${x}-${y}`} d={`M${x} ${y} Q${(x as number) - 10} ${(y as number) - 18} ${x} ${(y as number) - 30} Q${(x as number) + 10} ${(y as number) - 18} ${x} ${y} Z`} fill={i % 2 === 0 ? "#C0392B" : "#A5281C"} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const LosVinedosDeTikvesLaRegionVinicola: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="270" cy="120" r="20" fill="#F4B400" opacity="0.6" />
      <path d="M90 205 Q150 150 205 175 Q260 145 320 190 L320 250 L90 250 Z" fill="#A9BA7A" opacity="0.35" />
      <path d="M90 250 L90 200 Q205 180 320 200 L320 250 Z" fill="#7A8B5A" opacity="0.55" />
      {[110, 150, 190, 230, 270, 305].map((x) => (
        <line key={x} x1={x} y1="205" x2={x} y2="245" stroke="#4A5A3A" strokeWidth="3" opacity="0.6" />
      ))}
      <ellipse cx="150" cy="240" rx="45" ry="30" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      {[220, 235].map((y) => (
        <line key={y} x1="108" y1={y} x2="192" y2={y} stroke={dark} strokeWidth="2.5" opacity="0.5" />
      ))}
      {[[260, 150], [278, 160], [270, 175], [290, 145]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill="#5B2C6B" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const LaBodaTradicionalDeGalicnik: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 L150 195 Q150 175 170 175 Q190 175 190 195 L190 240 Q190 250 170 250 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="170" cy="160" r="14" fill="#E0B89A" />
      <path d="M156 160 Q170 145 184 160 L184 155 Q170 148 156 155 Z" fill={dark} opacity="0.6" />
      <path d="M230 250 L220 190 Q220 170 245 170 Q270 170 270 190 L262 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="245" cy="155" r="14" fill="#C68642" />
      <path d="M231 155 Q245 138 259 155" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      <rect x="238" y="140" width="14" height="10" fill="#D4AF37" opacity="0.85" />
      <path d="M100 240 Q150 260 190 240" fill="none" stroke={dark} strokeWidth="3" opacity="0.3" />
      <path d="M270 240 Q300 255 320 235" fill="none" stroke={dark} strokeWidth="3" opacity="0.3" />
    </g>
  );
};

const ElCanonDeMatkaYSusMonasterios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 90 L150 90 L120 250 Z" fill="#5C6C62" stroke={dark} strokeWidth="2" />
      <path d="M320 250 L320 90 L260 90 L290 250 Z" fill="#4A5A52" stroke={dark} strokeWidth="2" />
      <rect x="230" y="140" width="45" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="226,140 252,120 278,140" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="245" rx="90" ry="10" fill="#1B5E7A" opacity="0.5" />
      <path d="M175 230 Q205 220 235 230 L228 240 L182 240 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LasPerlasDeOhridUnaRecetaSecreta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 130 Q205 100 300 130" fill="none" stroke={dark} strokeWidth="3" opacity="0.4" />
      {[[110, 130], [140, 155], [175, 172], [205, 178], [235, 172], [270, 155], [300, 130]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="14" fill="#F0E6D2" stroke={dark} strokeWidth="2" />
      ))}
      {[[130, 220], [155, 215], [175, 228]].map(([x, y], i) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="10" ry="6" fill={i % 2 === 0 ? "#B0C4D4" : "#93AABF"} stroke={dark} strokeWidth="1.5" transform={`rotate(${i * 15} ${x} ${y})`} />
      ))}
      <rect x="240" y="195" width="8" height="55" fill="#8B7355" stroke={dark} strokeWidth="2" transform="rotate(20 244 222)" />
      <circle cx="257" cy="200" r="9" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const OhridCunaDeLaEscrituraEslava: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 140 Q170 120 205 140 L205 235 Q170 218 100 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M205 140 Q240 120 310 140 L310 235 Q240 218 205 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[160, 178, 196].map((y) => (
        <line key={y} x1="115" y1={y} x2="190" y2={y - 8} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {[160, 178, 196].map((y) => (
        <line key={`r-${y}`} x1="220" y1={y - 8} x2="295" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <path d="M255 130 L290 95" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M285 90 L296 84 L290 100 Z" fill={dark} />
    </g>
  );
};

const STONE_DATA: [number, number][] = [
  [125, 60],
  [160, 75],
  [205, 85],
  [250, 75],
  [285, 60],
];

const KokinoElObservatorioMegaliticoMilenario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sun = "#F4A300";
  return (
    <g>
      {/* hilltop */}
      <path d="M90 250 Q205 200 320 250 Z" fill={dark} opacity="0.25" />
      {/* rising sun with rays */}
      <circle cx="205" cy="110" r="24" fill={sun} opacity="0.9" />
      <line x1="205" y1="80" x2="205" y2="60" stroke={sun} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <line x1="178" y1="92" x2="160" y2="78" stroke={sun} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <line x1="232" y1="92" x2="250" y2="78" stroke={sun} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      {/* ring of megalithic standing stones */}
      {STONE_DATA.map(([x, h]) => (
        <rect key={x} x={x - 9} y={250 - h} width="18" height={h} fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
    </g>
  );
};

const ElCarnavalDeVevcaniMascarasPaganas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const fire = "#E8622C";
  return (
    <g>
      {/* bonfire */}
      <path d="M255 250 Q245 220 260 200 Q270 220 258 235 Q280 215 275 190 Q295 215 285 245 Q290 235 295 245 L295 250 Z" fill={fire} opacity="0.85" />
      {/* dancer body, mid-step */}
      <path d="M150 250 L155 190 Q155 175 175 175 Q195 175 195 190 L200 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* grotesque wooden mask */}
      <path d="M155 175 Q155 145 175 140 Q195 145 195 175 Q175 190 155 175 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      {/* horns/tufts on the mask */}
      <path d="M158 148 L148 128 L166 142 Z" fill={dark} />
      <path d="M192 148 L202 128 L184 142 Z" fill={dark} />
      {/* wide grotesque mouth */}
      <path d="M162 172 Q175 182 188 172" fill="none" stroke={dark} strokeWidth="3" />
      {/* one arm raised */}
      <path d="M155 195 Q130 185 118 160" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
    </g>
  );
};

export const northMacedoniaIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-que-cambio-de-nombre-en-2019": { component: ElPaisQueCambioDeNombreEn2019 },
  "el-lago-ohrid-y-la-leyenda-de-365-iglesias": { component: ElLagoOhridYLaLeyendaDe365Iglesias },
  "madre-teresa-nacio-en-skopje": { component: MadreTeresaNacioEnSkopje },
  "skopje-2014-la-ciudad-llena-de-estatuas-nuevas": { component: Skopje2014LaCiudadLlenaDeEstatuasNuevas },
  "el-ajvar-casero-de-cada-otono": { component: ElAjvarCaseroDeCadaOtono },
  "los-vinedos-de-tikves-la-region-vinicola": { component: LosVinedosDeTikvesLaRegionVinicola },
  "la-boda-tradicional-de-galicnik": { component: LaBodaTradicionalDeGalicnik },
  "el-canon-de-matka-y-sus-monasterios": { component: ElCanonDeMatkaYSusMonasterios },
  "las-perlas-de-ohrid-una-receta-secreta": { component: LasPerlasDeOhridUnaRecetaSecreta },
  "ohrid-cuna-de-la-escritura-eslava": { component: OhridCunaDeLaEscrituraEslava },
  "kokino-el-observatorio-megalitico-milenario": { component: KokinoElObservatorioMegaliticoMilenario },
  "el-carnaval-de-vevcani-mascaras-paganas": { component: ElCarnavalDeVevcaniMascarasPaganas },
};
