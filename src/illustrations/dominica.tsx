import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElLagoQueHierveDentroDeUnVolcan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L110 180 L160 150 L205 140 L250 150 L300 180 L320 250 Z" fill="#5C4A42" stroke={dark} strokeWidth="2.5" opacity="0.55" />
      <ellipse cx="205" cy="220" rx="95" ry="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="215" rx="70" ry="18" fill={tint(accentColor, 0.3)} opacity="0.8" />
      {[170, 205, 240].map((x, i) => (
        <ellipse key={x} cx={x} cy={200 - i * 4} rx="6" ry="4" fill="#F5F0E6" opacity="0.7" />
      ))}
      <path d="M150 190 Q145 150 155 120" fill="none" stroke="#DDDDDD" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      <path d="M260 190 Q268 155 258 125" fill="none" stroke="#DDDDDD" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const ElLoroImperialQueSoloViveEnEstaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 235 Q160 180 205 175 Q250 180 260 235 Z" fill="#3A5F2E" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="150" rx="42" ry="46" fill="#2E6B3A" stroke={dark} strokeWidth="3" />
      <path d="M180 175 Q205 195 230 175 Q225 200 205 205 Q185 200 180 175 Z" fill="#5B3A9E" stroke={dark} strokeWidth="2.4" />
      <circle cx="220" cy="140" r="6" fill="#1A1A1A" />
      <polygon points="240,150 262,146 246,164" fill="#C9A227" stroke="#8A6A10" strokeWidth="2" />
      <path d="M175 130 Q160 115 168 95" fill="none" stroke="#2E6B3A" strokeWidth="10" strokeLinecap="round" />
      <path d="M235 130 Q250 115 242 95" fill="none" stroke="#2E6B3A" strokeWidth="10" strokeLinecap="round" />
      <line x1="140" y1="230" x2="270" y2="230" stroke="#5C3A21" strokeWidth="5" />
    </g>
  );
};

const ElUltimoTerritorioIndigenaDelCaribe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="150,150 205,105 260,150" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <rect x="160" y="150" width="90" height="65" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="178" width="20" height="37" fill="#3A2418" />
      <path d="M95 235 Q130 215 175 225 L172 245 Q130 240 95 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M270 245 L305 235 L305 250 L270 252 Z" fill="#C9A227" stroke="#8A6A10" strokeWidth="2" />
      <path d="M275 240 L300 233" stroke="#8A6A10" strokeWidth="2" />
      <path d="M278 246 L298 240" stroke="#8A6A10" strokeWidth="2" />
    </g>
  );
};

const ElSenderoDe185KmQueCruzaTodaLaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,250 150,140 210,250" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <polygon points="180,250 250,110 320,250" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M110 250 Q160 200 205 220 Q250 235 300 195" fill="none" stroke="#C9A227" strokeWidth="4" strokeDasharray="10 8" />
      <circle cx="205" cy="205" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x="197" y="217" width="16" height="26" fill="#3A3A3A" stroke={dark} strokeWidth="1.8" />
      <rect x="188" y="222" width="10" height="16" fill="#8B1A1A" stroke={dark} strokeWidth="1.6" />
      <line x1="197" y1="243" x2="192" y2="248" stroke="#3A3A3A" strokeWidth="3" />
      <line x1="213" y1="243" x2="218" y2="248" stroke="#3A3A3A" strokeWidth="3" />
    </g>
  );
};

const ElArrecifeDondeElMarBurbujea: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1B5E7A" opacity="0.35" />
      <ellipse cx="205" cy="180" rx="16" ry="24" fill="#3A3A3A" stroke={dark} strokeWidth="2.2" />
      <circle cx="205" cy="150" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <ellipse cx="185" cy="185" rx="14" ry="6" fill="#2E6B8C" opacity="0.7" />
      <ellipse cx="225" cy="185" rx="14" ry="6" fill="#2E6B8C" opacity="0.7" />
      {[[170, 220], [200, 195], [230, 225], [190, 155], [215, 165]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5 - (i % 2)} fill="#F5F0E6" opacity="0.75" />
      ))}
      <path d="M110 245 Q150 220 205 235 Q260 245 300 220" fill="none" stroke={accentColor} strokeWidth="6" opacity="0.7" />
    </g>
  );
};

const ElDiaEnQueTodaLaIslaCelebraSuCriollo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="20" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <path d="M180 122 Q205 100 230 122 Q225 112 205 108 Q185 112 180 122 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M165 245 Q160 180 205 172 Q250 180 245 245 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <path d="M175 200 L235 200" stroke={accentColor} strokeWidth="6" />
      <path d="M170 225 L240 225" stroke={accentColor} strokeWidth="6" />
      <path d="M180 175 L230 175" stroke={accentColor} strokeWidth="6" />
      <path d="M165 245 Q160 180 205 172" fill="none" stroke={dark} strokeWidth="2.6" />
    </g>
  );
};

const ElPrimerPatrimonioMundialDelCaribeOriental: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,250 140,120 190,250" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <polygon points="160,250 205,90 250,250" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <polygon points="220,250 270,130 320,250" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <path d="M180 190 Q190 160 205 190 Q195 235 190 250 L200 250 Q210 210 205 190" fill="#F5F0E6" stroke="#7A9AB0" strokeWidth="2" opacity="0.85" />
    </g>
  );
};

const LaIslaConUnRioParaCadaDiaDelAno: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <path d="M90 90 L220 90 L150 250 L90 250 Z" fill="#3A5F3A" opacity="0.5" />
      <path d="M320 90 L200 90 L270 250 L320 250 Z" fill="#2F6B3A" opacity="0.5" />
      <path d="M150 95 Q160 140 145 175 Q135 205 155 250" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <path d="M225 95 Q215 140 235 175 Q248 205 225 250" fill="none" stroke={tint(accentColor, 0.2)} strokeWidth="7" strokeLinecap="round" />
      <path d="M188 95 Q195 150 190 200 Q185 225 195 250" fill="none" stroke={shade(accentColor, 0.15)} strokeWidth="6" strokeLinecap="round" />
      <rect x="90" y="245" width="230" height="6" fill="#1B5E7A" opacity="0.6" />
    </g>
  );
};

const LaEscritoraQueNuncaDejoDeImaginarSuIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="235" y="90" width="60" height="140" fill="#7A9AB0" opacity="0.3" stroke={dark} strokeWidth="2" />
      <path d="M250 150 Q260 120 275 150" fill="#2F6B3A" opacity="0.6" />
      <rect x="130" y="180" width="80" height="55" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <circle cx="150" cy="150" r="16" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M135 220 Q140 190 165 190 Q190 190 190 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="140" y="195" width="35" height="6" fill="#F5F0E6" />
      <line x1="145" y1="170" x2="160" y2="185" stroke="#5C3A21" strokeWidth="2.5" />
    </g>
  );
};

const LaIslaQueSePropusoResistirAlProximoHuracan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 130 Q150 100 210 125 Q270 105 320 135" fill="none" stroke="#5C5C5C" strokeWidth="10" strokeLinecap="round" opacity="0.5" />
      <rect x="150" y="175" width="105" height="65" fill="#D9C9A3" stroke={dark} strokeWidth="3" />
      <polygon points="140,175 205,140 265,175" fill="#7A7A7A" stroke={dark} strokeWidth="3" />
      <rect x="185" y="205" width="28" height="35" fill="#3A2418" stroke={dark} strokeWidth="2" />
      <rect x="160" y="190" width="18" height="18" fill={accentColor} stroke={dark} strokeWidth="1.6" />
      <rect x="228" y="190" width="18" height="18" fill={accentColor} stroke={dark} strokeWidth="1.6" />
      <path d="M120 150 L135 165 M280 155 L265 168" stroke="#7A9AB0" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const TitouGorgeElDesfiladeroQueHollywoodDescubrio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,90 150,90 130,250 90,250" fill="#3A2E28" stroke={dark} strokeWidth="2.5" />
      <polygon points="320,90 260,90 280,250 320,250" fill="#4A3C32" stroke={dark} strokeWidth="2.5" />
      <path d="M130 90 L280 90 L205 250 L130 250 Z" fill={accentColor} opacity="0.85" />
      <path d="M150 90 Q205 130 260 90" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.6" />
      <path d="M195 100 Q205 130 195 150" fill="none" stroke="#F5F0E6" strokeWidth="5" opacity="0.7" strokeLinecap="round" />
    </g>
  );
};

const ElCadenceLypsoElGeneroQueInspiroElZouk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M120 210 Q117 246 155 249 Q193 246 190 210 Q192 190 176 182 L183 140 L155 155 L127 140 L134 182 Q118 190 120 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="140" y="196" width="30" height="8" rx="2" fill={dark} />
      <rect x="140" y="213" width="30" height="8" rx="2" fill={dark} />
      <rect x="150" y="100" width="10" height="55" fill={dark} />
      <ellipse cx="255" cy="205" rx="45" ry="18" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="255" cy="195" rx="45" ry="18" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="295" cy="150" r="16" fill={light} stroke={dark} strokeWidth="2" />
      <line x1="255" y1="177" x2="295" y2="166" stroke="#3A3A3A" strokeWidth="3" />
      <line x1="240" y1="180" x2="255" y2="150" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
      <line x1="255" y1="182" x2="270" y2="150" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

export const dominicaIllustrations: Record<string, IllustrationDefinition> = {
  "el-lago-que-hierve-dentro-de-un-volcan": { component: ElLagoQueHierveDentroDeUnVolcan },
  "el-loro-imperial-que-solo-vive-en-esta-isla": { component: ElLoroImperialQueSoloViveEnEstaIsla },
  "el-ultimo-territorio-indigena-del-caribe": { component: ElUltimoTerritorioIndigenaDelCaribe },
  "el-sendero-de-185-km-que-cruza-toda-la-isla": { component: ElSenderoDe185KmQueCruzaTodaLaIsla },
  "el-arrecife-donde-el-mar-burbujea": { component: ElArrecifeDondeElMarBurbujea },
  "el-dia-en-que-toda-la-isla-celebra-su-criollo": { component: ElDiaEnQueTodaLaIslaCelebraSuCriollo },
  "el-primer-patrimonio-mundial-del-caribe-oriental": { component: ElPrimerPatrimonioMundialDelCaribeOriental },
  "la-isla-con-un-rio-para-cada-dia-del-ano": { component: LaIslaConUnRioParaCadaDiaDelAno },
  "la-escritora-que-nunca-dejo-de-imaginar-su-isla": { component: LaEscritoraQueNuncaDejoDeImaginarSuIsla },
  "la-isla-que-se-propuso-resistir-al-proximo-huracan": { component: LaIslaQueSePropusoResistirAlProximoHuracan },
  "titou-gorge-el-desfiladero-que-hollywood-descubrio": { component: TitouGorgeElDesfiladeroQueHollywoodDescubrio },
  "el-cadence-lypso-el-genero-que-inspiro-el-zouk": { component: ElCadenceLypsoElGeneroQueInspiroElZouk },
};
