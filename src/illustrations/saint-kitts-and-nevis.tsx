import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BrimstoneHillElGibraltarDelCaribe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="110,240 160,150 250,150 300,240" fill="#8C8C74" opacity="0.5" />
      <rect x="150" y="165" width="110" height="75" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[160, 190, 220, 245].map((x) => (
        <rect key={x} x={x} y="150" width="12" height="16" fill={dark} opacity="0.6" />
      ))}
      <polygon points="150,240 130,240 155,200 165,210" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.2" />
      <rect x="120" y="215" width="30" height="10" fill="#3A3A3A" />
      <circle cx="125" cy="220" r="5" fill="#3A3A3A" />
    </g>
  );
};

const ElNacimientoDeAlexanderHamiltonEnNieves: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="170" width="110" height="70" fill="#D9C9A3" stroke={dark} strokeWidth="3" />
      <polygon points="140,170 205,135 270,170" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <rect x="190" y="195" width="30" height="45" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <g transform="translate(280 175) rotate(20)">
        <path d="M0 40 Q-6 15 4 0 Q10 -8 14 0 Q18 15 8 40 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      </g>
      <ellipse cx="255" cy="220" rx="14" ry="10" fill="#3A2418" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElTrenPanoramicoDeLaCanaDeAzucar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 225 320 240" fill="none" stroke="#5C3A21" strokeWidth="4" />
      <rect x="150" y="180" width="130" height="45" rx="8" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="160" y="190" width="30" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      <rect x="200" y="190" width="30" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      <rect x="240" y="190" width="30" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      <circle cx="170" cy="230" r="9" fill="#3A3A3A" stroke={dark} strokeWidth="1.6" />
      <circle cx="260" cy="230" r="9" fill="#3A3A3A" stroke={dark} strokeWidth="1.6" />
      <path d="M110 220 Q118 205 112 190 M120 225 Q128 208 122 192" stroke="#5C7A3A" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const ElPaisSoberanoMasPequenoDeAmerica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="110" width="210" height="130" fill="#D9D2C0" stroke={dark} strokeWidth="3" />
      <circle cx="180" cy="175" r="18" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="220" cy="185" r="10" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <circle cx="240" cy="150" r="24" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="257" y1="167" x2="270" y2="180" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ElPicoNievesYSuNombreDeNieve: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="120,240 205,110 290,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M165 155 Q205 130 245 155 Q235 175 205 172 Q175 175 165 155 Z" fill="#F5F0E6" opacity="0.9" />
      <path d="M170 165 Q205 148 240 165" fill="none" stroke="#F5F0E6" strokeWidth="3" opacity="0.7" />
      <ellipse cx="205" cy="238" rx="100" ry="8" fill="#3A3A3A" opacity="0.4" />
    </g>
  );
};

const LaIglesiaCottleYSuCultoIntegrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="170" width="90" height="70" fill="#8C8C74" opacity="0.6" stroke={dark} strokeWidth="2.5" />
      <polygon points="150,170 205,130 260,170" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <rect x="195" y="200" width="20" height="40" fill="#3A3A3A" />
      <path d="M175 145 L175 130 L185 130 L185 122 L195 122 L195 130 L205 130 L205 145" fill="none" stroke={dark} strokeWidth="2.5" />
      <path d="M100 235 Q150 220 180 235 M230 235 Q270 220 310 235" stroke="#5C7A3A" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const SugarMasElCarnavalNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="150" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 22} 130 L${x} 90 L${x + 22} 130`} fill="none" stroke="#C9A227" strokeWidth="4" strokeLinecap="round" />
      <path d={`M${x - 14} 230 Q${x - 17} 190 ${x} 185 Q${x + 17} 190 ${x + 14} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
    </g>
  );
  return (
    <g>
      {dancer(160, accentColor)}
      {dancer(255, "#C1272D")}
      <rect x="90" y="238" width="230" height="8" fill="#3A3A3A" opacity="0.5" />
    </g>
  );
};

const LosMonosVerdesQueSuperanALaPoblacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 L90 130 M320 240 L320 130" stroke="#5C3A21" strokeWidth="8" opacity="0.5" />
      <ellipse cx="205" cy="150" rx="26" ry="22" fill="#5C7A3A" stroke={dark} strokeWidth="2.6" />
      <circle cx="185" cy="130" r="10" fill="#5C7A3A" stroke={dark} strokeWidth="2" />
      <circle cx="225" cy="130" r="10" fill="#5C7A3A" stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="155" rx="12" ry="9" fill="#E8DCA0" />
      <circle cx="198" cy="150" r="2.5" fill="#0A0A0A" />
      <circle cx="212" cy="150" r="2.5" fill="#0A0A0A" />
      <path d="M205 190 Q195 210 205 235" fill="none" stroke="#5C7A3A" strokeWidth="8" strokeLinecap="round" />
      <circle cx="205" cy="205" r="10" fill="#C9A227" opacity="0.9" />
    </g>
  );
};

const LaFederacionDondeUnaIslaPuedeSepararse: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <ellipse cx="145" cy="200" rx="45" ry="32" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="270" cy="205" rx="35" ry="26" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.8" />
      <path d="M190 205 L225 210" stroke={dark} strokeWidth="4" strokeDasharray="8 6" opacity="0.6" />
    </g>
  );
};

const ElGoatWaterElGuisoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 175 Q150 235 205 240 Q260 235 260 175 L150 175 Z" fill="#3A3A3A" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="55" ry="15" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="170" rx="42" ry="9" fill={accentColor} opacity="0.85" />
      <path d="M180 165 Q188 155 196 165 M205 162 Q213 152 221 162" stroke="#8B6F47" strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M120 165 Q130 150 122 135 M290 165 Q280 150 288 135" stroke="#8C8C8C" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round" />
    </g>
  );
};

const LaCiudadaniaPorInversionLaPrimeraDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <path d="M130 110 L130 235 L205 225 L205 100 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M280 110 L280 235 L205 225 L205 100 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <circle cx="165" cy="160" r="18" fill="#F5F0E6" opacity="0.85" />
      <line x1="150" y1="195" x2="180" y2="192" stroke="#F5F0E6" strokeWidth="3" opacity="0.7" />
      <line x1="150" y1="205" x2="180" y2="202" stroke="#F5F0E6" strokeWidth="3" opacity="0.7" />
      <circle cx="255" cy="165" r="14" fill="none" stroke={gold} strokeWidth="6" />
      <line x1="266" y1="175" x2="290" y2="200" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      <line x1="278" y1="188" x2="286" y2="180" stroke={gold} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const LiamuigaElNombreKalinagoDeLaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <path d="M120 225 Q205 245 290 225 Q270 205 205 208 Q140 205 120 225 Z" fill="#6B4226" stroke={dark} strokeWidth="3" />
      <line x1="150" y1="180" x2="180" y2="215" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="147" cy="175" rx="10" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {[160, 200, 240].map((x) => (
        <polygon key={x} points={`${x},140 ${x + 14},155 ${x},170 ${x - 14},155`} fill="none" stroke={accentColor} strokeWidth="3" />
      ))}
    </g>
  );
};

export const saintKittsAndNevisIllustrations: Record<string, IllustrationDefinition> = {
  "brimstone-hill-el-gibraltar-del-caribe": { component: BrimstoneHillElGibraltarDelCaribe },
  "el-nacimiento-de-alexander-hamilton-en-nieves": { component: ElNacimientoDeAlexanderHamiltonEnNieves },
  "el-tren-panoramico-de-la-cana-de-azucar": { component: ElTrenPanoramicoDeLaCanaDeAzucar },
  "el-pais-soberano-mas-pequeno-de-america": { component: ElPaisSoberanoMasPequenoDeAmerica },
  "el-pico-nieves-y-su-nombre-de-nieve": { component: ElPicoNievesYSuNombreDeNieve },
  "la-iglesia-cottle-y-su-culto-integrado": { component: LaIglesiaCottleYSuCultoIntegrado },
  "sugar-mas-el-carnaval-nacional": { component: SugarMasElCarnavalNacional },
  "los-monos-verdes-que-superan-a-la-poblacion": { component: LosMonosVerdesQueSuperanALaPoblacion },
  "la-federacion-donde-una-isla-puede-separarse": { component: LaFederacionDondeUnaIslaPuedeSepararse },
  "el-goat-water-el-guiso-nacional": { component: ElGoatWaterElGuisoNacional },
  "la-ciudadania-por-inversion-la-primera-del-mundo": { component: LaCiudadaniaPorInversionLaPrimeraDelMundo },
  "liamuiga-el-nombre-kalinago-de-la-isla": { component: LiamuigaElNombreKalinagoDeLaIsla },
};
