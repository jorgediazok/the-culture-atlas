import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElHumoQueTruenaYSeVeDesdeLejos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="70" fill="#3A5F3A" opacity="0.3" />
      <path d="M150 95 L150 230 Q170 245 190 230 L190 95 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M210 95 L210 230 Q230 245 250 230 L250 95 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="200" cy="240" rx="90" ry="12" fill="#F5F0E6" opacity="0.7" />
      {[[160, 130], [230, 110], [190, 90]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={7 - i} fill="#F5F0E6" opacity="0.6" />
      ))}
    </g>
  );
};

const LaPiscinaAlBordeDelAbismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={accentColor} opacity="0.4" />
      <ellipse cx="205" cy="195" rx="70" ry="16" fill="#2E6B8C" stroke={dark} strokeWidth="2.6" />
      <path d="M135 195 Q135 235 100 250" fill="none" stroke="#1B5E7A" strokeWidth="8" opacity="0.6" />
      <path d="M275 195 Q275 235 310 250" fill="none" stroke="#1B5E7A" strokeWidth="8" opacity="0.6" />
      <circle cx="180" cy="192" r="9" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <circle cx="225" cy="190" r="9" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const ElSafarioAPieQueNacioEnEsteValle: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 235 Q205 220 320 235" fill="none" stroke="#1B5E7A" strokeWidth="8" opacity="0.5" />
      <circle cx="170" cy="150" r="11" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <rect x="160" y="161" width="20" height="35" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <line x1="170" y1="196" x2="165" y2="225" stroke="#3A2418" strokeWidth="4" />
      <line x1="175" y1="196" x2="180" y2="225" stroke="#3A2418" strokeWidth="4" />
      <ellipse cx="250" cy="205" rx="35" ry="20" fill="#5C6B6E" stroke={dark} strokeWidth="2.4" />
      <polygon points="240,190 232,178 245,182" fill="#5C6B6E" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const ElMetalRojoQueLeDioNombreAUnaRegion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q150 230 205 245 Q260 255 320 235 L320 130 L90 130 Z" fill="#5C5C5C" opacity="0.4" />
      <path d="M120 240 Q160 190 205 210 Q250 225 280 180" fill="none" stroke="#B8571F" strokeWidth="10" strokeLinecap="round" />
      <path d="M140 245 Q175 200 215 218" fill="none" stroke="#C9A227" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const ElLagoArtificialMasGrandePorVolumen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 90 L150 240 L260 240 L260 90 Z" fill="#5C5C5C" stroke={dark} strokeWidth="2.8" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={158 + i * 25} y="100" width="15" height="130" fill="#3A3A3A" opacity="0.5" />
      ))}
      <path d="M90 240 Q205 220 320 240 L320 250 L90 250 Z" fill="#1B4F72" stroke={dark} strokeWidth="2.4" />
      <path d="M90 230 Q205 210 320 230" fill="none" stroke={accentColor} strokeWidth="4" opacity="0.6" />
    </g>
  );
};

const LaBarcazaRealQueMigraConLasInundaciones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#1B4F72" opacity="0.4" />
      <path d="M120 220 L290 220 L275 200 L135 200 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2.6" />
      <rect x="120" y="200" width="170" height="8" fill="#F5F0E6" opacity="0.8" />
      <path d="M195 200 Q205 175 215 200" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <polygon points="185,195 175,183 195,187" fill={accentColor} stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const ElExploradorQueDesaparecioYElPeriodistaQueLoHallo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="235" width="230" height="8" fill="#2F6B3A" opacity="0.4" />
      <circle cx="205" cy="150" r="14" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <polygon points="185,140 205,125 225,140 225,150 185,150" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="192" y="164" width="26" height="45" fill="#5C6B6E" stroke={dark} strokeWidth="2.4" />
      <circle cx="255" cy="200" r="9" fill={dark} opacity="0.5" />
      <line x1="255" y1="191" x2="255" y2="209" stroke="#F5F0E6" strokeWidth="1.5" />
      <line x1="246" y1="200" x2="264" y2="200" stroke="#F5F0E6" strokeWidth="1.5" />
    </g>
  );
};

const ElAguilaPescadoraQueVigilaDesdeLaBandera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M205 160 Q150 140 110 160 Q150 155 195 168 Q150 175 120 195 Q160 185 200 175 Z" fill="#3A2418" stroke={dark} strokeWidth="2.2" />
      <path d="M205 160 Q260 140 300 160 Q260 155 215 168 Q260 175 290 195 Q250 185 210 175 Z" fill="#3A2418" stroke={dark} strokeWidth="2.2" />
      <circle cx="205" cy="165" r="14" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" />
      <polygon points="205,178 198,190 212,190" fill="#C9A227" />
      <ellipse cx="205" cy="200" rx="20" ry="30" fill={accentColor} stroke={dark} strokeWidth="2.4" />
    </g>
  );
};

const LaCascadaMasAltaDeTodaAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 100 L150 100 L170 250 L110 250 Z" fill="#2F6B3A" opacity="0.4" />
      <path d="M250 100 L310 100 L290 250 L230 250 Z" fill="#3A7A45" opacity="0.4" />
      <path d="M185 95 L185 235 Q200 245 215 235 L215 95 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="200" cy="240" rx="45" ry="10" fill="#F5F0E6" opacity="0.75" />
    </g>
  );
};

const LaMasaDeMaizQueEstaEnCadaPlato: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="215" rx="80" ry="18" fill="#8C8C74" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="165" cy="205" rx="35" ry="20" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="255" cy="210" rx="30" ry="16" fill="#2F6B3A" opacity="0.85" />
      <circle cx="245" cy="200" r="10" fill="#8B5A2B" opacity="0.8" />
    </g>
  );
};

export const zambiaIllustrations: Record<string, IllustrationDefinition> = {
  "el-humo-que-truena-y-se-ve-desde-lejos": { component: ElHumoQueTruenaYSeVeDesdeLejos },
  "la-piscina-al-borde-del-abismo": { component: LaPiscinaAlBordeDelAbismo },
  "el-safari-a-pie-que-nacio-en-este-valle": { component: ElSafarioAPieQueNacioEnEsteValle },
  "el-metal-rojo-que-le-dio-nombre-a-una-region": { component: ElMetalRojoQueLeDioNombreAUnaRegion },
  "el-lago-artificial-mas-grande-por-volumen": { component: ElLagoArtificialMasGrandePorVolumen },
  "la-barcaza-real-que-migra-con-las-inundaciones": { component: LaBarcazaRealQueMigraConLasInundaciones },
  "el-explorador-que-desaparecio-y-el-periodista-que-lo-hallo": { component: ElExploradorQueDesaparecioYElPeriodistaQueLoHallo },
  "el-aguila-pescadora-que-vigila-desde-la-bandera": { component: ElAguilaPescadoraQueVigilaDesdeLaBandera },
  "la-cascada-mas-alta-de-toda-africa": { component: LaCascadaMasAltaDeTodaAfrica },
  "la-masa-de-maiz-que-esta-en-cada-plato": { component: LaMasaDeMaizQueEstaEnCadaPlato },
};
