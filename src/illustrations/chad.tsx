import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function camel(x: number, y: number, scale: number, dark: string) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-16 4 L-18 20 M-4 6 L-5 22 M8 6 L9 22 M18 4 L20 20" stroke={dark} strokeWidth="3.4" strokeLinecap="round" />
      <ellipse cx="0" cy="0" rx="24" ry="12" fill="#C9A227" stroke={dark} strokeWidth="2.2" />
      <path d="M-8 -8 Q-4 -20 4 -18 Q10 -16 8 -8 Q0 -14 -8 -8 Z" fill="#C9A227" stroke={dark} strokeWidth="2" />
      <path d="M18 -4 Q28 -14 26 -26 Q22 -22 20 -14 Q16 -8 14 -2 Z" fill="#C9A227" stroke={dark} strokeWidth="2" />
      <ellipse cx="27" cy="-22" rx="6" ry="5" fill="#C9A227" stroke={dark} strokeWidth="1.8" />
      <circle cx="29" cy="-23" r="1.3" fill="#1a1a1a" />
      <path d="M-20 -2 Q-26 4 -22 12" fill="none" stroke={dark} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

function person(x: number, y: number, scale: number, dark: string, robe: string) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

const ElMarDelSaharaQueSeEstaQuedandoSinAgua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="115" ry="45" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[160, 195], [210, 205], [250, 190]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="14" ry="8" fill="#2F6B3A" opacity="0.7" />
      ))}
      <path d="M150 220 L150 205 L165 208 L165 222 Z" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <path d="M235 195 L235 182 L250 185 L250 197 Z" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <path d="M140 220 Q145 210 155 215 M270 225 Q275 215 285 220" stroke="#8B5A2B" strokeWidth="3" fill="none" />
    </g>
  );
};

const LosArcosDePiedraQueEsculpioElVientoDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#C9A227" opacity="0.4" />
      <path d="M140 250 L140 150 Q140 110 205 110 Q270 110 270 150 L270 250" fill="none" stroke={accentColor} strokeWidth="26" strokeLinecap="round" />
      <path d="M140 250 L140 150 Q140 110 205 110 Q270 110 270 150 L270 250" fill="none" stroke={dark} strokeWidth="2.4" />
      <path d="M180 205 Q186 195 195 198 Q200 205 194 212 Q186 216 180 205 Z" fill="#8B1A1A" opacity="0.7" />
      <path d="M195 210 L188 228 M205 208 L212 226" stroke="#8B1A1A" strokeWidth="3" opacity="0.7" strokeLinecap="round" />
      <path d="M225 210 L216 196 M232 214 L242 202" stroke="#8B1A1A" strokeWidth="2.6" opacity="0.6" />
    </g>
  );
};

const ElVolcanMasAltoDeTodoElSahara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L200 100 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="200" cy="150" rx="45" ry="16" fill="#3A2A1E" stroke={dark} strokeWidth="2.4" />
      <path d="M90 250 Q205 235 320 250" fill="none" stroke="#8B5A2B" strokeWidth="8" opacity="0.5" />
      {camel(150, 240, 0.55, dark)}
    </g>
  );
};

const LosBroncesDeUnPuebloPerdidoJuntoAlLago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="80" ry="12" fill="#8B5A2B" opacity="0.4" />
      <rect x="180" y="200" width="50" height="12" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <circle cx="205" cy="115" r="13" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M192 128 L192 175 Q192 185 205 188 Q218 185 218 175 L218 128 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M192 145 Q180 150 182 168 M218 145 Q230 150 228 168" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M198 200 L198 212 M212 200 L212 212" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const LaSalQueCruzabaElDesiertoEnLomoDeCamello: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q140 220 190 250 Q240 220 290 250" fill={accentColor} opacity="0.4" />
      {camel(140, 220, 0.95, dark)}
      {camel(210, 228, 0.8, dark)}
      {camel(275, 210, 0.6, dark)}
    </g>
  );
};

const ElFestivalDondeLosHombresSeMaquillanParaSeducir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 130 Q205 105 240 130 L245 165 Q205 150 165 165 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="180" rx="38" ry="48" fill="#C9A227" stroke={dark} strokeWidth="2.6" />
      <path d="M172 160 L238 160 M172 175 L238 175" stroke="#8B1A1A" strokeWidth="4" />
      <path d="M185 155 L182 200 M225 155 L228 200" stroke="#fff" strokeWidth="3" opacity="0.8" />
      <circle cx="188" cy="180" r="4" fill="#1a1a1a" />
      <circle cx="222" cy="180" r="4" fill="#1a1a1a" />
      <path d="M182 215 Q205 232 228 215" fill="none" stroke="#fff" strokeWidth="5" />
      <path d="M180 220 Q170 250 178 250 L232 250 Q240 250 230 220" fill="#8B1A1A" opacity="0.75" />
    </g>
  );
};

const LosElefantesQueVolvieronDeCasiDesaparecer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#2F6B3A" opacity="0.4" />
      {[[140, 210, 1], [200, 222, 0.8], [255, 200, 0.62]].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
          <path d="M-22 6 L-22 24 Q-22 27 -19 27 L-15 27 Q-13 27 -13 24 L-13 6 Z" fill="#8C8478" stroke={dark} strokeWidth="1.6" />
          <path d="M13 6 L13 24 Q13 27 16 27 L20 27 Q22 27 22 24 L22 6 Z" fill="#8C8478" stroke={dark} strokeWidth="1.6" />
          <ellipse cx="0" cy="-6" rx="28" ry="16" fill="#8C8478" stroke={dark} strokeWidth="2.2" />
          <path d="M20 -22 Q35 -25 33 -8 Q31 3 18 -2 Z" fill="#7A7264" stroke={dark} strokeWidth="2" />
          <ellipse cx="28" cy="-14" rx="12" ry="11" fill="#8C8478" stroke={dark} strokeWidth="2.2" />
          <path d="M30 -10 Q37 -4 34 8 Q31 16 24 20" fill="none" stroke="#8C8478" strokeWidth="6" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const LaCapitalNacidaDondeSeAbrazanDosRios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q150 190 205 210 L320 210 L320 250 L90 250 Z" fill="#1B7A9C" opacity="0.55" />
      <path d="M205 210 Q260 170 320 180 L320 210 Z" fill="#2E6B8C" opacity="0.55" />
      <rect x="140" y="160" width="26" height="45" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="136,160 153,142 170,160" fill={dark} />
      <rect x="180" y="150" width="26" height="55" fill="#D9A227" stroke={dark} strokeWidth="2" />
      <polygon points="176,150 193,132 210,150" fill={dark} />
      <path d="M235 225 L260 218 L260 230 Z" fill="#8B5A2B" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const LaBolaDeMijoQueSePartYSeComparte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="228" rx="90" ry="16" fill="#D9C9A3" stroke={dark} strokeWidth="2.4" />
      <circle cx="160" cy="212" r="35" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <path d="M140 205 Q160 195 180 205" fill="none" stroke={dark} strokeWidth="1.6" opacity="0.5" />
      <ellipse cx="255" cy="215" rx="42" ry="15" fill="#2F6B3A" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="255" cy="209" rx="26" ry="8" fill={accentColor} opacity="0.85" />
    </g>
  );
};

const LosPastoresQueConocenCadaPozoDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L150 130 L210 250 Z" fill="#5C3A21" opacity="0.35" />
      <path d="M230 250 L280 150 L320 250 Z" fill="#8B5A2B" opacity="0.35" />
      {camel(155, 220, 0.85, dark)}
      {person(112, 250, 0.9, dark, accentColor)}
    </g>
  );
};

export const chadIllustrations: Record<string, IllustrationDefinition> = {
  "el-mar-del-sahara-que-se-esta-quedando-sin-agua": { component: ElMarDelSaharaQueSeEstaQuedandoSinAgua },
  "los-arcos-de-piedra-que-esculpio-el-viento-del-desierto": { component: LosArcosDePiedraQueEsculpioElVientoDelDesierto },
  "el-volcan-mas-alto-de-todo-el-sahara": { component: ElVolcanMasAltoDeTodoElSahara },
  "los-bronces-de-un-pueblo-perdido-junto-al-lago": { component: LosBroncesDeUnPuebloPerdidoJuntoAlLago },
  "la-sal-que-cruzaba-el-desierto-en-lomo-de-camello": { component: LaSalQueCruzabaElDesiertoEnLomoDeCamello },
  "el-festival-donde-los-hombres-se-maquillan-para-seducir": { component: ElFestivalDondeLosHombresSeMaquillanParaSeducir },
  "los-elefantes-que-volvieron-de-casi-desaparecer": { component: LosElefantesQueVolvieronDeCasiDesaparecer },
  "la-capital-nacida-donde-se-abrazan-dos-rios": { component: LaCapitalNacidaDondeSeAbrazanDosRios },
  "la-bola-de-mijo-que-se-parte-y-se-comparte": { component: LaBolaDeMijoQueSePartYSeComparte },
  "los-pastores-que-conocen-cada-pozo-del-desierto": { component: LosPastoresQueConocenCadaPozoDelDesierto },
};
