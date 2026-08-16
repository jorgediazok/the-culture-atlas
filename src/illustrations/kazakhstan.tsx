import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BaikonurCosmodromoPrimerLanzamiento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 240 Q205 90 215 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="195,240 215,240 205,220" fill="#B0B8BF" />
      <path d="M195 235 L175 250 L195 250 Z" fill={dark} />
      <path d="M215 235 L235 250 L215 250 Z" fill={dark} />
      <path d="M190 250 Q205 270 220 250 Q212 258 205 258 Q198 258 190 250 Z" fill="#F4A300" opacity="0.85" />
      <circle cx="205" cy="110" r="8" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const BerkutchiCazadoresConAguilas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const horse = "#6B4C3A";
  return (
    <g>
      <path d="M120 245 Q150 200 210 210 Q260 215 280 245 Z" fill={horse} stroke={dark} strokeWidth="2.5" />
      <path d="M255 215 Q275 195 290 205 Q280 215 275 225 Z" fill={horse} />
      <path d="M150 245 L145 210 M180 245 L178 215 M230 245 L235 212 M260 245 L268 218" stroke={dark} strokeWidth="6" />
      <circle cx="175" cy="175" r="15" fill={skin} />
      <path d="M160 190 Q175 180 195 195 L190 225 L165 225 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M188 175 Q210 165 225 178 L218 188 Q200 182 190 185 Z" fill={skin} />
      <path d="M218 178 Q230 165 245 168 Q250 175 242 182 Q235 190 225 185 Q218 182 218 178 Z" fill="#3E2712" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const HombreDeOroGuerreroDeIssyk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 245 L165 140 Q205 110 245 140 L235 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={175 + i * 18} y1="150" x2={175 + i * 18} y2="240" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      <path d="M180 140 Q205 90 230 140 Q225 110 205 100 Q185 110 180 140 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="100" r="9" fill="#F4A300" />
      <path d="M193 108 Q205 100 217 108" fill="none" stroke="#F4A300" strokeWidth="3" />
    </g>
  );
};

const YurtaCasaNomadaDeFieltro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 240 Q130 180 205 165 Q280 180 280 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="165" rx="22" ry="8" fill={dark} />
      <ellipse cx="205" cy="163" rx="14" ry="5" fill="none" stroke="#F5F0E6" strokeWidth="2" />
      <rect x="185" y="210" width="40" height="30" fill="#5C4A3A" />
      {[150, 175, 235, 260].map((x) => (
        <line key={x} x1={x} y1="240" x2={205} y2="170" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
    </g>
  );
};

const MausoleoDeYasauiRutaDeLaSeda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="170" width="90" height="70" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M180 170 Q205 130 230 170 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M175 145 Q205 90 235 145 Q225 115 205 105 Q185 115 175 145 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="98" r="6" fill="#F4A300" />
      <rect x="192" y="195" width="26" height="45" fill={dark} opacity="0.5" />
    </g>
  );
};

const PoligonoNuclearSemipalatinsk: IllustrationComponent = () => (
  <g>
    <path d="M90 240 L320 240 L320 250 L90 250 Z" fill="#8B7355" opacity="0.5" />
    <rect x="195" y="130" width="16" height="110" fill="#B0B8BF" stroke="#4A4A4A" strokeWidth="2" />
    <rect x="180" y="115" width="46" height="18" fill="#B0B8BF" stroke="#4A4A4A" strokeWidth="2" />
    <circle cx="203" cy="180" r="20" fill="none" stroke="#F4A300" strokeWidth="3" />
    <path d="M203 165 L203 180 L215 187" stroke="#F4A300" strokeWidth="3" fill="none" />
    {[0, 120, 240].map((deg) => (
      <path key={deg} d="M203 160 L210 145 L196 145 Z" fill="#F4A300" transform={`rotate(${deg} 203 180)`} />
    ))}
  </g>
);

const KumisLecheDeYeguaFermentada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const horse = "#C68642";
  return (
    <g>
      <path d="M110 245 Q140 200 180 215 Q200 218 205 230 L200 245 Z" fill={horse} stroke={dark} strokeWidth="2.5" />
      <path d="M175 215 Q190 195 205 205 Q198 212 190 218 Z" fill={horse} />
      <line x1="130" y1="245" x2="127" y2="220" stroke={dark} strokeWidth="5" />
      <line x1="160" y1="245" x2="160" y2="225" stroke={dark} strokeWidth="5" />
      <path d="M240 200 Q235 240 260 240 Q285 240 280 200 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="260" cy="200" rx="20" ry="8" fill={tint(accentColor, 0.3)} />
    </g>
  );
};

const CanonDeCharyn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L120 130 L150 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M160 250 L190 100 L220 250 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M230 250 L255 150 L285 250 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <path d="M300 250 L315 170 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const PaisSinMarMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 200 Q130 130 220 120 Q300 130 310 190 Q300 230 240 240 Q160 250 110 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 200 Q150 160 220 155 Q280 160 290 195" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <circle cx="220" cy="185" r="5" fill="#F5F0E6" />
      <path d="M215 185 L225 185 M220 180 L220 190" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const MedeuPistaDeHieloMasAlta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L150 130 L180 250 Z" fill="#8B8378" opacity="0.7" />
      <path d="M230 250 L260 110 L300 250 Z" fill="#8B8378" opacity="0.7" />
      <ellipse cx="205" cy="235" rx="95" ry="18" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.5" />
      <path d="M160 235 Q205 225 250 235" fill="none" stroke="#fff" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

export const kazakhstanIllustrations: Record<string, IllustrationDefinition> = {
  "baikonur-cosmodromo-primer-lanzamiento": { component: BaikonurCosmodromoPrimerLanzamiento },
  "berkutchi-cazadores-con-aguilas": { component: BerkutchiCazadoresConAguilas },
  "hombre-de-oro-guerrero-de-issyk": { component: HombreDeOroGuerreroDeIssyk },
  "yurta-casa-nomada-de-fieltro": { component: YurtaCasaNomadaDeFieltro },
  "mausoleo-de-yasaui-ruta-de-la-seda": { component: MausoleoDeYasauiRutaDeLaSeda },
  "poligono-nuclear-semipalatinsk": { component: PoligonoNuclearSemipalatinsk },
  "kumis-leche-de-yegua-fermentada": { component: KumisLecheDeYeguaFermentada },
  "canon-de-charyn": { component: CanonDeCharyn },
  "pais-sin-mar-mas-grande-del-mundo": { component: PaisSinMarMasGrandeDelMundo },
  "medeu-pista-de-hielo-mas-alta": { component: MedeuPistaDeHieloMasAlta },
};
