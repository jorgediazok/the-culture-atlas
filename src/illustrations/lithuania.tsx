import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElEstadoMasGrandeDeLaEuropaMedieval: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 150 Q160 130 220 140 Q270 150 300 190 Q290 220 260 235 Q200 250 150 230 Q110 210 110 150 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 170 Q200 160 250 180" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <circle cx="170" cy="180" r="4" fill="#F5F0E6" />
      <circle cx="260" cy="200" r="4" fill="#F5F0E6" />
    </g>
  );
};

const CaminoBalticoCadenaHumanaDeDosMillones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="175" r="12" fill={skin} />
          <path d={`M${x - 14} 187 Q${x} 180 ${x + 14} 187 L${x + 12} 235 L${x - 12} 235 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <line x1="142" y1="210" x2="163" y2="210" stroke={dark} strokeWidth="4" />
      <line x1="187" y1="210" x2="208" y2="210" stroke={dark} strokeWidth="4" />
      <line x1="232" y1="210" x2="253" y2="210" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const BaloncestoLaSegundaReligionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="90" width="10" height="130" fill={dark} />
      <ellipse cx="205" cy="90" rx="55" ry="10" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="230" cy="170" r="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M200 170 L260 170 M230 140 L230 200 M208 150 Q230 170 208 190 M252 150 Q230 170 252 190" stroke={dark} strokeWidth="2" fill="none" opacity="0.7" />
    </g>
  );
};

const AmbarElOroBaltico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 150 Q160 180 175 220 Q190 245 210 240 Q230 235 232 205 Q234 175 210 155 Q195 145 180 150 Z" fill={accentColor} opacity="0.8" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="195" rx="8" ry="5" fill={dark} opacity="0.6" />
      <path d="M195 190 L200 195 L195 200" stroke={dark} strokeWidth="1.5" fill="none" opacity="0.5" />
    </g>
  );
};

const CastilloDeTrakaiEnUnaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 230 Q205 245 320 230 L320 250 L90 250 Z" fill="#3D8FB0" opacity="0.6" />
      <rect x="160" y="170" width="90" height="60" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="150" width="20" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="240" y="150" width="20" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="150,150 160,135 170,150" fill={dark} />
      <polygon points="240,150 250,135 260,150" fill={dark} />
      <rect x="197" y="200" width="16" height="30" fill={dark} opacity="0.6" />
    </g>
  );
};

const ColinaDeLasCrucesSimboloDeResistencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 Q205 210 320 250 Z" fill={accentColor} opacity="0.3" />
      {[[140, 235, 25], [170, 220, 35], [200, 225, 20], [230, 215, 40], [260, 230, 25], [290, 240, 18]].map(([x, y, h]) => (
        <g key={x as number}>
          <line x1={x} y1={y} x2={x} y2={(y as number) - (h as number)} stroke={dark} strokeWidth="2.5" />
          <line x1={(x as number) - 8} y1={(y as number) - (h as number) * 0.55} x2={(x as number) + 8} y2={(y as number) - (h as number) * 0.55} stroke={dark} strokeWidth="2.5" />
        </g>
      ))}
    </g>
  );
};

const CepelinaiElPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="80" ry="14" fill="#E8E4DC" opacity="0.6" />
      <ellipse cx="175" cy="195" rx="35" ry="22" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="245" cy="200" rx="32" ry="20" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M150 195 Q175 205 200 195" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M220 200 Q245 210 270 200" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const UzupisLaRepublicaDeUnBarrio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 250 320 240 L320 250 L90 250 Z" fill="#3D8FB0" opacity="0.5" />
      <rect x="180" y="200" width="50" height="40" fill={dark} opacity="0.4" />
      <line x1="205" y1="200" x2="205" y2="160" stroke="#8B7355" strokeWidth="4" />
      <rect x="185" y="145" width="40" height="18" rx="3" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const DunasDeCurlandiaElSaharaBaltico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q140 170 205 210 Q260 165 320 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M90 250 Q205 230 320 250" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <line x1="200" y1="205" x2="200" y2="185" stroke="#2E4A3E" strokeWidth="5" />
      <line x1="255" y1="160" x2="255" y2="140" stroke="#2E4A3E" strokeWidth="5" />
    </g>
  );
};

const ElUltimoPaisPaganoDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 250 L200 160 L210 160 L215 250 Z" fill="#5C4A3A" />
      <path d="M205 160 Q170 155 165 120 Q195 130 205 150 Q215 130 245 120 Q240 155 205 160 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[175, 230], [235, 235]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="10" ry="14" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="1.5" opacity="0.8" />
      ))}
    </g>
  );
};

export const lithuaniaIllustrations: Record<string, IllustrationDefinition> = {
  "el-estado-mas-grande-de-la-europa-medieval": { component: ElEstadoMasGrandeDeLaEuropaMedieval },
  "camino-baltico-cadena-humana-de-dos-millones": { component: CaminoBalticoCadenaHumanaDeDosMillones },
  "baloncesto-la-segunda-religion-nacional": { component: BaloncestoLaSegundaReligionNacional },
  "ambar-el-oro-baltico": { component: AmbarElOroBaltico },
  "castillo-de-trakai-en-una-isla": { component: CastilloDeTrakaiEnUnaIsla },
  "colina-de-las-cruces-simbolo-de-resistencia": { component: ColinaDeLasCrucesSimboloDeResistencia },
  "cepelinai-el-plato-nacional": { component: CepelinaiElPlatoNacional },
  "uzupis-la-republica-de-un-barrio": { component: UzupisLaRepublicaDeUnBarrio },
  "dunas-de-curlandia-el-sahara-baltico": { component: DunasDeCurlandiaElSaharaBaltico },
  "el-ultimo-pais-pagano-de-europa": { component: ElUltimoPaisPaganoDeEuropa },
};
