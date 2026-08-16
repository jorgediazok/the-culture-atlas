import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CricovaLaBodegaMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 Q205 230 320 250 L320 130 Q205 150 100 130 Z" fill="#5C4A3A" opacity="0.4" />
      {[150, 260].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="200" rx="22" ry="30" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
          <line x1={x - 22} y1="195" x2={x + 22} y2="195" stroke={dark} strokeWidth="1.5" opacity="0.5" />
        </g>
      ))}
      <rect x="195" y="180" width="20" height="55" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElPaisConMasVinedosPorHabitante: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <path d="M90 245 Q205 225 320 245 L320 250 L90 250 Z" fill="#8B7355" opacity="0.4" />
      {[130, 165, 200, 235, 270].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="230" x2={x} y2="150" stroke="#5C4A3A" strokeWidth="3" />
          {[170, 190, 210].map((y) => (
            <circle key={y} cx={x + (i % 2 === 0 ? -8 : 8)} cy={y} r="6" fill={accentColor} opacity="0.85" />
          ))}
        </g>
      ))}
    </g>
  );
};

const TransnistriaElPaisQueNadieReconoce: IllustrationComponent = () => (
  <g>
    <rect x="150" y="180" width="15" height="60" fill="#B71C1C" />
    <rect x="255" y="180" width="15" height="60" fill="#B71C1C" />
    <rect x="165" y="195" width="90" height="10" fill="#F5F0E6" stroke="#1A1A1A" strokeWidth="2" />
    <path d="M195 190 L200 178 L205 190 L215 190 L207 197 L210 208 L200 202 L190 208 L193 197 Z" fill="#F4A300" opacity="0.85" />
  </g>
);

const ElPaisMasPobreDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 235 320 250 L320 255 L90 255 Z" fill="#D4A017" opacity="0.4" />
      <path d="M170 200 L170 240 L230 240 L230 200 L200 175 Z" fill={accentColor} opacity="0.3" stroke={dark} strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M160 235 L200 225 L200 250 L160 250 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <circle cx="185" cy="230" r="3" fill={dark} />
    </g>
  );
};

const OrheiulVechiUnMonasterioTalladoEnRoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L110 150 L320 150 L320 250 Z" fill="#8B8378" opacity="0.55" />
      <path d="M190 250 L195 200 Q195 190 205 190 Q215 190 215 200 L220 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M90 240 Q205 250 320 240" fill="none" stroke="#3D8FB0" strokeWidth="4" opacity="0.6" />
    </g>
  );
};

const MameligaElPlatoNacionalDeMaiz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="165" y="195" width="80" height="45" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M165 195 L205 175 L245 195 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <line x1="160" y1="190" x2="250" y2="200" stroke="#F5F0E6" strokeWidth="1.5" opacity="0.7" />
      <ellipse cx="205" cy="245" rx="35" ry="8" fill="#F5F0E6" opacity="0.8" />
    </g>
  );
};

const UnIdiomaQueSeParaceMuchoAlRumano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 160 Q140 160 140 175 L140 195 Q140 210 155 210 L165 210 L160 225 L185 210 L215 210 Q230 210 230 195 L230 175 Q230 160 215 160 Z" fill={accentColor} opacity="0.4" stroke={dark} strokeWidth="2" />
      <path d="M180 150 Q170 150 170 165 L170 185 Q170 200 185 200 L195 200 L190 215 L215 200 L245 200 Q260 200 260 185 L260 165 Q260 150 245 150 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElComplejoDeFortalezasDeSoroca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="200" r="45" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[205, 155], [243, 175], [243, 225], [205, 245], [167, 225], [167, 175]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="10" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M90 245 Q205 260 320 245" fill="none" stroke="#3D8FB0" strokeWidth="5" opacity="0.5" />
    </g>
  );
};

const GagauziaUnaRegionTurcoparlanteYOrtodoxa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="195" width="60" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="175" r="24" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M199 158 L199 148 M211 158 L211 148" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="145" r="4" fill={dark} />
    </g>
  );
};

const ElComplejoHidroelectricoMasAllaDelMapa: IllustrationComponent = () => (
  <g>
    <path d="M90 245 L320 245 L320 190 L90 190 Z" fill="#1B4F91" opacity="0.85" />
    {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg, i) => (
      <circle key={i} cx={130 + i * 22} cy={165} r="6" fill="#F4C430" />
    ))}
  </g>
);

export const moldovaIllustrations: Record<string, IllustrationDefinition> = {
  "cricova-la-bodega-mas-grande-del-mundo": { component: CricovaLaBodegaMasGrandeDelMundo },
  "el-pais-con-mas-vinedos-por-habitante": { component: ElPaisConMasVinedosPorHabitante },
  "transnistria-el-pais-que-nadie-reconoce": { component: TransnistriaElPaisQueNadieReconoce },
  "el-pais-mas-pobre-de-europa": { component: ElPaisMasPobreDeEuropa },
  "orheiul-vechi-un-monasterio-tallado-en-roca": { component: OrheiulVechiUnMonasterioTalladoEnRoca },
  "mameliga-el-plato-nacional-de-maiz": { component: MameligaElPlatoNacionalDeMaiz },
  "un-idioma-que-se-parece-mucho-al-rumano": { component: UnIdiomaQueSeParaceMuchoAlRumano },
  "el-complejo-de-fortalezas-de-soroca": { component: ElComplejoDeFortalezasDeSoroca },
  "gagauzia-una-region-turcoparlante-y-ortodoxa": { component: GagauziaUnaRegionTurcoparlanteYOrtodoxa },
  "el-complejo-hidroelectrico-mas-alla-del-mapa": { component: ElComplejoHidroelectricoMasAllaDelMapa },
};
