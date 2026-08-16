import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GiantsCausewayLasColumnasDeBasalto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#B0D8E8" opacity="0.35" />
      {[[110, 80], [150, 100], [190, 70], [230, 110], [270, 85], [300, 60]].map(([x, h], i) => (
        <rect key={x} x={x - 16} y={250 - h} width="34" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const TitanicBelfastElBarcoQueNacioAqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L100 160 Q205 130 310 160 L310 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="130" y="140" width="10" height="60" fill="#5C5C5C" stroke={dark} strokeWidth="1.5" />
      <rect x="270" y="140" width="10" height="60" fill="#5C5C5C" stroke={dark} strokeWidth="1.5" />
      {[150, 180, 210, 240].map((x) => (
        <line key={x} x1={x} y1="170" x2={x} y2="230" stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
      <ellipse cx="205" cy="248" rx="115" ry="8" fill="#1B5E7A" opacity="0.5" />
    </g>
  );
};

const JuegoDeTronosYSusLocacionesReales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#B0D8E8" opacity="0.4" />
      <path d="M90 250 L110 190 L140 220 L165 160 L195 210 L220 175 L250 230 L280 190 L320 250 Z" fill="#4A5A52" stroke={dark} strokeWidth="2.5" />
      <path d="M150 195 L165 160 L180 195 Z" fill="#5C6C62" stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#1B5E7A" opacity="0.5" />
    </g>
  );
};

const LosMurosDeLaPazQueSiguenEnPie: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="110" width="230" height="140" fill="#9E9A92" stroke={dark} strokeWidth="3" />
      <rect x="110" y="130" width="80" height="80" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="2" />
      <circle cx="150" cy="160" r="20" fill="#F5F0E6" opacity="0.85" />
      <rect x="220" y="130" width="80" height="80" fill={tint(accentColor, 0.3)} opacity="0.7" stroke={dark} strokeWidth="2" />
      <path d="M235 195 L260 145 L285 195 Z" fill="#F5F0E6" opacity="0.8" />
    </g>
  );
};

const ElAcuerdoDelViernesSantoDe1998: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 200 L180 175 L200 185 L220 175 L260 200 L245 220 L205 205 L165 220 Z" fill="#E0B89A" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="140" rx="30" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-10 205 140)" />
      <path d="M195 128 Q220 105 250 118 Q225 135 205 140 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="232" cy="132" r="9" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M240 130 L252 128 L242 136 Z" fill="#F4A300" />
      <circle cx="236" cy="129" r="1.8" fill="#1A1A1A" />
    </g>
  );
};

const TheDarkHedgesElTunelDeArboles: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L110 90 M320 250 L300 90" stroke="#3E5C4A" strokeWidth="26" strokeLinecap="round" />
    <path d="M110 90 Q205 60 300 90" fill="none" stroke="#2E4A3A" strokeWidth="22" opacity="0.7" />
    <path d="M150 250 L165 150 L245 150 L260 250 Z" fill="#8B7355" opacity="0.5" />
  </g>
);

const SanPatricioYSuTumbaEnDownpatrick: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="140" rx="70" ry="45" fill="#3E5C4A" opacity="0.5" />
      <rect x="201" y="140" width="8" height="60" fill="#5C3A21" />
      <path d="M160 235 L250 235 L235 195 L175 195 Z" fill="#9E9A92" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="200" x2="205" y2="225" stroke={dark} strokeWidth="4" />
      <line x1="190" y1="210" x2="220" y2="210" stroke={dark} strokeWidth="4" />
      <circle cx="205" cy="210" r="18" fill="none" stroke={accentColor} strokeWidth="3" />
    </g>
  );
};

const ElUlsterFryElDesayunoCompleto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="210" rx="110" ry="35" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <circle cx="150" cy="195" r="24" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="150" cy="195" r="10" fill="#F4B400" />
      <rect x="185" y="180" width="40" height="18" fill="#B8703A" stroke={dark} strokeWidth="2" />
      <rect x="185" y="200" width="40" height="18" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x="245" y="185" width="24" height="35" rx="10" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="272" y="185" width="24" height="35" rx="10" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LoughNeaghElLagoMasGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#3D8FB0" opacity="0.35" />
      <path d="M150 220 L260 220 L245 245 L165 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="205" y1="220" x2="205" y2="170" stroke="#5C3A21" strokeWidth="4" />
      <path d="M205 175 L250 190 L205 200 Z" fill="#F5F0E6" opacity="0.85" />
      <line x1="110" y1="200" x2="320" y2="195" stroke={dark} strokeWidth="2" strokeDasharray="8 6" opacity="0.5" />
    </g>
  );
};

const BelfastLinenopolisLaCapitalDelLino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="150" width="120" height="100" fill="#8B7355" stroke={dark} strokeWidth="3" />
      {[120, 150, 180, 210].map((x) => (
        <rect key={x} x={x} y="120" width="12" height="30" fill="#5C3A21" stroke={dark} strokeWidth="1.5" />
      ))}
      {[130, 155, 180].map((y) => (
        <rect key={y} x="115" y={y} width="90" height="10" fill="#3E5C4A" opacity="0.4" />
      ))}
      <ellipse cx="270" cy="200" rx="35" ry="45" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M245 175 Q270 200 245 225 M295 175 Q270 200 295 225" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

export const northernIrelandIllustrations: Record<string, IllustrationDefinition> = {
  "giants-causeway-las-columnas-de-basalto": { component: GiantsCausewayLasColumnasDeBasalto },
  "titanic-belfast-el-barco-que-nacio-aqui": { component: TitanicBelfastElBarcoQueNacioAqui },
  "juego-de-tronos-y-sus-locaciones-reales": { component: JuegoDeTronosYSusLocacionesReales },
  "los-muros-de-la-paz-que-siguen-en-pie": { component: LosMurosDeLaPazQueSiguenEnPie },
  "el-acuerdo-del-viernes-santo-de-1998": { component: ElAcuerdoDelViernesSantoDe1998 },
  "the-dark-hedges-el-tunel-de-arboles": { component: TheDarkHedgesElTunelDeArboles },
  "san-patricio-y-su-tumba-en-downpatrick": { component: SanPatricioYSuTumbaEnDownpatrick },
  "el-ulster-fry-el-desayuno-completo": { component: ElUlsterFryElDesayunoCompleto },
  "lough-neagh-el-lago-mas-grande": { component: LoughNeaghElLagoMasGrande },
  "belfast-linenopolis-la-capital-del-lino": { component: BelfastLinenopolisLaCapitalDelLino },
};
