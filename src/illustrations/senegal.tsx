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

function wrestler(x: number, y: number, scale: number, skin: string, wrap: string, mirror = false) {
  const sx = mirror ? -scale : scale;
  return (
    <g key={`w-${x}-${y}`} transform={`translate(${x} ${y}) scale(${sx} ${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke="#1A120C" strokeWidth="1.6" />
      <path d="M-13 -28 Q0 -33 13 -28 L15 10 Q0 16 -15 10 Z" fill={skin} stroke="#1A120C" strokeWidth="2" />
      <path d="M-13 -24 Q-24 -12 -20 6" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M13 -24 Q24 -12 20 6" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M-8 6 L-10 40 M8 6 L10 40" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M-14 3 Q0 8 14 3" fill="none" stroke={wrap} strokeWidth="5" />
      <circle cx="-6" cy="-1" r="2.2" fill={wrap} />
      <circle cx="6" cy="1" r="2.2" fill={wrap} />
    </g>
  );
}

const LaIslaQueGuardaLaMemoriaDeUnComercioDoloroso: IllustrationComponent = () => (
  <g>
    <rect x="90" y="195" width="230" height="55" fill="#1B7A9C" opacity="0.5" />
    <path d="M110 195 Q200 178 300 195 L300 212 Q200 197 110 212 Z" fill="#C9B98A" stroke="#8C7B6B" strokeWidth="1.6" />
    <rect x="150" y="130" width="90" height="65" fill="#D98C6B" stroke="#7A4A20" strokeWidth="2.6" />
    <path d="M180 195 L180 155 Q180 145 195 145 Q210 145 210 155 L210 195 Z" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2.4" />
    <rect x="158" y="140" width="16" height="16" fill="#F5F0E6" stroke="#7A4A20" strokeWidth="1.8" />
    <rect x="216" y="140" width="16" height="16" fill="#F5F0E6" stroke="#7A4A20" strokeWidth="1.8" />
    <path d="M270 240 L268 173 Q268 163 278 163 Q288 163 288 173 L286 240 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.4" />
    <path d="M270 168 Q252 152 246 132 M279 165 Q279 140 271 118 M288 168 Q305 150 311 130" stroke="#6B8A45" strokeWidth="5" fill="none" strokeLinecap="round" />
    {[[246, 132], [271, 118], [311, 130]].map(([px, py], i) => (
      <ellipse key={i} cx={px} cy={py} rx="15" ry="9" fill="#6B8A45" stroke="#3A5222" strokeWidth="1.6" />
    ))}
    <path d="M110 222 Q135 214 160 222 L155 230 Q135 226 115 230 Z" fill="#B5651D" stroke="#5C3A21" strokeWidth="2" />
  </g>
);

const LaLuchaQueConvierteAUnLuchadorEnIdolo: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="245" rx="115" ry="12" fill="#D9C08A" opacity="0.5" />
    {wrestler(178, 215, 1.1, "#5C3A21", "#D9A227")}
    {wrestler(222, 213, 1.05, "#8B5A2B", "#C1272D", true)}
    <path d="M280 240 Q267 236 267 216 Q267 205 273 200 Q267 197 268 182 Q269 170 282 168 Q295 170 296 182 Q297 197 291 200 Q297 205 297 216 Q297 236 285 240 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.4" />
    <ellipse cx="282" cy="169" rx="14" ry="6" fill="#D9C08A" stroke="#4A2E14" strokeWidth="2" />
  </g>
);

const ElRitmoDeTamborQueConquistoAlMundoEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="245" rx="110" ry="12" fill="#8C7B6B" opacity="0.3" />
      <path d="M240 240 Q225 235 225 210 Q225 195 232 190 Q225 185 226 165 Q228 150 245 148 Q262 150 264 165 Q265 185 258 190 Q265 195 265 210 Q265 235 250 240 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.6" />
      <ellipse cx="245" cy="148" rx="19" ry="7" fill="#D9C08A" stroke="#4A2E14" strokeWidth="2.2" />
      <path d="M230 165 L260 165 M228 185 L262 185" stroke="#4A2E14" strokeWidth="1.6" opacity="0.6" />
      <g transform="translate(165 210)">
        <circle cx="0" cy="-40" r="11" fill={dark} stroke="#1A120C" strokeWidth="1.8" />
        <path d="M-14 -30 Q0 -36 14 -30 L16 20 Q0 27 -16 20 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
        <path d="M12 -24 Q34 -30 42 -14" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
        <path d="M-12 -22 Q-26 -8 -20 10" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
        <path d="M-10 18 Q-24 32 -18 52" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
        <path d="M10 18 Q26 32 22 54" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      </g>
    </g>
  );
};

const LaPalabraQueResumeComoSeRecibeAUnExtrano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="245" rx="100" ry="10" fill="#D9C08A" opacity="0.4" />
      {person(150, 225, 1.05, dark, accentColor)}
      {person(250, 225, 1.05, "#4A2E14", "#3A7A45")}
      <ellipse cx="200" cy="232" rx="34" ry="14" fill="#F5F0E6" stroke="#8B6F47" strokeWidth="2.4" />
      <ellipse cx="200" cy="228" rx="26" ry="9" fill="#D9622C" stroke="#8B4A1E" strokeWidth="1.8" />
    </g>
  );
};

const ElPlatoDeArrozYPescadoQueNacioEnUnPuerto: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="105" ry="28" fill="#C1272D" stroke="#7A1818" strokeWidth="2.6" />
    <ellipse cx="200" cy="208" rx="95" ry="22" fill="#D9622C" stroke="#7A1818" strokeWidth="2" />
    <path d="M148 198 L135 190 L138 205 Z" fill="#C9A227" stroke="#6B4423" strokeWidth="2" />
    <path d="M150 195 Q170 185 195 195 Q210 200 200 210 Q180 212 160 205 Q148 200 150 195 Z" fill="#C9A227" stroke="#6B4423" strokeWidth="2.2" />
    <circle cx="168" cy="197" r="2.4" fill="#1A1A1A" />
    <path d="M175 195 L192 200" stroke="#6B4423" strokeWidth="1.6" />
    <ellipse cx="245" cy="200" rx="16" ry="11" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.8" />
    <ellipse cx="235" cy="215" rx="14" ry="10" fill="#D9A227" stroke="#8A5A10" strokeWidth="1.8" />
    <ellipse cx="150" cy="220" rx="13" ry="9" fill="#B5651D" stroke="#5C3A21" strokeWidth="1.8" />
  </g>
);

const LaTunicaAmpliaQueVisteATodoUnPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="13" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.8" />
      <path d="M187 143 Q205 135 223 143 L245 245 Q205 262 165 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M187 148 Q160 165 165 208" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <path d="M223 148 Q250 165 245 208" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <path d="M192 122 Q205 108 218 122 Q220 128 205 126 Q190 128 192 122 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="1.8" />
      <path d="M188 165 Q205 158 222 165 L219 195 Q205 200 191 195 Z" fill="none" stroke={dark} strokeWidth="1.4" opacity="0.75" />
      <path d="M195 172 L215 172 M193 182 L217 182" stroke={dark} strokeWidth="1.4" opacity="0.7" />
    </g>
  );
};

// Ellipse points around (200,195), rx=90, ry=30, precomputed offline (0°, 45°, ... 315°).
const STONE_CIRCLE_POINTS: [number, number][] = [
  [290, 195], [263.6, 216.2], [200, 225], [136.4, 216.2],
  [110, 195], [136.4, 173.8], [200, 165], [263.6, 173.8],
];

const LosCirculosDePiedraDePropositoDesconocido: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="200" rx="115" ry="45" fill="#D9C08A" opacity="0.35" />
    {STONE_CIRCLE_POINTS.map(([px, py], i) => (
      <path
        key={i}
        d={`M${px - 8} ${py + 22} L${px - 6} ${py - 20} Q${px} ${py - 26} ${px + 6} ${py - 20} L${px + 8} ${py + 22} Z`}
        fill="#8C7B6B"
        stroke="#5C4A3A"
        strokeWidth="2.2"
      />
    ))}
  </g>
);

const ElArpaDeVeintiunaCuerdasQueCuentaLaHistoria: IllustrationComponent = () => (
  <g>
    <path d="M250 240 L250 140" stroke="#5C3A21" strokeWidth="6" strokeLinecap="round" />
    <ellipse cx="250" cy="205" rx="28" ry="20" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.4" />
    <path d="M225 199 Q250 189 275 199" fill="none" stroke="#D9C08A" strokeWidth="3" opacity="0.8" />
    {[233, 241, 250, 259, 267].map((sx, i) => (
      <line key={i} x1={sx} y1="150" x2={sx - 6 + i * 3} y2="222" stroke="#D9C08A" strokeWidth="1.3" opacity="0.85" />
    ))}
    <g transform="translate(190 215)">
      <circle cx="0" cy="-40" r="11" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.8" />
      <path d="M-14 -30 Q0 -35 14 -30 L15 20 Q0 26 -15 20 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.2" />
      <path d="M10 -22 Q34 -10 44 -16" fill="none" stroke="#D9A227" strokeWidth="7" strokeLinecap="round" />
      <path d="M12 -10 Q35 3 41 4" fill="none" stroke="#D9A227" strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="-10" cy="30" rx="22" ry="10" fill="#D9A227" stroke="#8A6A10" strokeWidth="2" />
    </g>
  </g>
);

const ElLagoQueSeVuelveRosaPorUnaBacteria: IllustrationComponent = () => (
  <g>
    <rect x="90" y="150" width="230" height="100" fill="#E27FA0" opacity="0.55" />
    <path d="M90 165 Q200 150 320 168" fill="none" stroke="#F5C6D8" strokeWidth="2.4" opacity="0.7" />
    <path d="M90 185 Q200 170 320 188" fill="none" stroke="#F5C6D8" strokeWidth="2.4" opacity="0.6" />
    {[[130, 235], [160, 240], [195, 238]].map(([x, y], i) => (
      <path key={i} d={`M${x - 14} ${y} Q${x} ${y - 22} ${x + 14} ${y} Z`} fill="#F5F0E6" stroke="#C9B98A" strokeWidth="2" />
    ))}
    <path d="M225 205 Q255 198 280 208 L275 216 Q252 208 228 213 Z" fill="#B5651D" stroke="#5C3A21" strokeWidth="2" />
    <g transform="translate(252 195)">
      <circle cx="0" cy="-16" r="8" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.6" />
      <path d="M-9 -9 Q0 -13 9 -9 L10 8 Q0 13 -10 8 Z" fill="#1B7A9C" stroke="#0F4A5E" strokeWidth="1.8" />
      <path d="M6 -5 Q18 4 24 18" stroke="#3A2A1E" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="25" cy="19" rx="5" ry="2.6" fill="#3A2A1E" />
    </g>
  </g>
);

const LaAntiguaCapitalDeBalconesDeHierroForjado: IllustrationComponent = () => (
  <g>
    <rect x="90" y="215" width="230" height="35" fill="#1B7A9C" opacity="0.5" />
    <rect x="140" y="120" width="120" height="95" fill="#E8C97A" stroke="#7A4A20" strokeWidth="2.6" />
    {[160, 180, 200, 220, 240].map((x, i) => (
      <rect key={i} x={x - 8} y="130" width="16" height="24" fill="#F5F0E6" stroke="#7A4A20" strokeWidth="1.8" />
    ))}
    <rect x="150" y="165" width="100" height="14" fill="#3A2A1E" opacity="0.85" />
    <path d="M150 165 Q150 155 160 155 L240 155 Q250 155 250 165" fill="none" stroke="#1A1A1A" strokeWidth="2.4" />
    {[158, 175, 192, 209, 226, 243].map((x, i) => (
      <line key={i} x1={x} y1="165" x2={x} y2="179" stroke="#1A1A1A" strokeWidth="2.2" />
    ))}
    <path d="M300 220 L300 195 Q300 185 290 185 L230 185 Q220 185 220 195 L220 218" fill="none" stroke="#8C7B6B" strokeWidth="3.4" />
    <path d="M240 185 L240 218 M260 185 L260 218 M280 185 L280 218" stroke="#8C7B6B" strokeWidth="2.4" />
  </g>
);

export const senegalIllustrations: Record<string, IllustrationDefinition> = {
  "la-isla-que-guarda-la-memoria-de-un-comercio-doloroso": { component: LaIslaQueGuardaLaMemoriaDeUnComercioDoloroso },
  "la-lucha-que-convierte-a-un-luchador-en-idolo": { component: LaLuchaQueConvierteAUnLuchadorEnIdolo },
  "el-ritmo-de-tambor-que-conquisto-al-mundo-entero": { component: ElRitmoDeTamborQueConquistoAlMundoEntero },
  "la-palabra-que-resume-como-se-recibe-a-un-extrano": { component: LaPalabraQueResumeComoSeRecibeAUnExtrano },
  "el-plato-de-arroz-y-pescado-que-nacio-en-un-puerto": { component: ElPlatoDeArrozYPescadoQueNacioEnUnPuerto },
  "la-tunica-amplia-que-viste-a-todo-un-pais": { component: LaTunicaAmpliaQueVisteATodoUnPais },
  "los-circulos-de-piedra-de-proposito-desconocido": { component: LosCirculosDePiedraDePropositoDesconocido },
  "el-arpa-de-veintiuna-cuerdas-que-cuenta-la-historia": { component: ElArpaDeVeintiunaCuerdasQueCuentaLaHistoria },
  "el-lago-que-se-vuelve-rosa-por-una-bacteria": { component: ElLagoQueSeVuelveRosaPorUnaBacteria },
  "la-antigua-capital-de-balcones-de-hierro-forjado": { component: LaAntiguaCapitalDeBalconesDeHierroForjado },
};
