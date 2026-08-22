import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AfricaEnMiniaturaTodosLosClimasEnUnPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="60" fill="#F5F0E6" opacity="0.5" />
      <rect x="90" y="140" width="230" height="55" fill="#2F6B3A" opacity="0.6" />
      <rect x="90" y="195" width="230" height="55" fill="#C9A227" opacity="0.6" />
      <polygon points="150,80 175,40 200,80" fill="#fff" stroke={dark} strokeWidth="2.4" />
      <path d="M90 250 Q200 235 320 250" fill="none" stroke="#1B4F72" strokeWidth="8" opacity="0.6" />
    </g>
  );
};

const ElVolcanQueLosMarinerosLlamaronCarroDeDioses: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L200 100 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 165 Q200 130 230 165 L245 250 L155 250 Z" fill="#8B1A1A" opacity="0.85" />
      <path d="M90 250 Q205 235 320 250" fill="none" stroke="#1B4F72" strokeWidth="10" opacity="0.5" />
      <circle cx="270" cy="90" r="16" fill="#F5F0E6" opacity="0.7" />
    </g>
  );
};

const ElBaileEnElBanderinQueParalizoUnMundial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#2F6B3A" opacity="0.4" />
      <rect x="248" y="120" width="6" height="110" fill={dark} />
      <polygon points="254,120 290,132 254,144" fill="#fff" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="170" r="16" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M200 186 L185 225 M200 186 L215 220 M200 186 L170 200 M200 186 L230 195" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <circle cx="190" cy="230" r="8" fill="#1a1a1a" opacity="0.85" />
    </g>
  );
};

const LosTronosDeCuentasDeLosReinosBamileke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 L150 130 Q200 100 250 130 L250 250 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.8" />
      {[[170, 150], [200, 140], [230, 150], [180, 180], [220, 180], [200, 210]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill={i % 2 === 0 ? accentColor : "#D9A227"} stroke={dark} strokeWidth="1.6" />
      ))}
      <path d="M170 130 Q200 105 230 130" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const ElLagoQueExhaloUnaNubeInvisibleYMortal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q140 190 200 200 Q260 210 320 250 Z" fill="#2F6B3A" opacity="0.5" />
      <ellipse cx="205" cy="230" rx="90" ry="20" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="180" rx="110" ry="26" fill="#8C8C8C" opacity="0.55" />
      <ellipse cx="205" cy="185" rx="70" ry="16" fill="#B0B0B0" opacity="0.5" />
    </g>
  );
};

const ElGuisoVerdeQueTodosReclamanComoPropio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="215" rx="75" ry="22" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      <path d="M155 205 Q200 175 245 205 Q235 218 200 216 Q165 218 155 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <rect x="270" y="180" width="10" height="45" fill="#EDE6D6" stroke={dark} strokeWidth="1.8" />
      <rect x="285" y="180" width="10" height="45" fill="#EDE6D6" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const ElSaxofonQuePusoABailarAlPlanetaEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 100 Q170 160 200 190 Q230 215 220 240 Q210 255 190 245" fill="none" stroke="#D9A227" strokeWidth="14" strokeLinecap="round" />
      <circle cx="195" cy="240" r="10" fill="#B8860B" />
      {[[185, 130], [190, 150], [195, 170]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={dark} />
      ))}
      <path d="M120 200 Q140 180 160 200 M240 190 Q260 170 280 190" fill="none" stroke={accentColor} strokeWidth="4" opacity="0.7" />
    </g>
  );
};

const LaPimientaQueNaceDeTierraDeVolcan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L150 140 L210 250 Z" fill="#5C3A21" opacity="0.4" />
      <path d="M180 240 Q170 160 200 100" fill="none" stroke="#3A5F3A" strokeWidth="6" />
      {[[185, 130], [195, 150], [180, 170], [195, 190], [185, 210]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill={accentColor} stroke={dark} strokeWidth="1.8" />
      ))}
    </g>
  );
};

const ElParqueDondeSeCruzanElefantesYJirafas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill={accentColor} opacity="0.5" />
      <ellipse cx="160" cy="215" rx="34" ry="20" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <path d="M126 205 Q110 200 108 215 Q112 222 128 215" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x="150" y="230" width="8" height="20" fill="#8B5A2B" />
      <rect x="175" y="230" width="8" height="20" fill="#8B5A2B" />
      <path d="M250 130 L260 230 M270 130 L280 230" stroke="#D9A227" strokeWidth="14" strokeLinecap="round" />
      <path d="M255 130 L275 130 L265 105 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const UnPaisConDoscientasCincuentaLenguasPropias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="160" cy="170" r="26" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.4" />
      <circle cx="240" cy="170" r="26" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M186 165 Q213 155 214 165" fill="none" stroke={dark} strokeWidth="3" />
      <rect x="130" y="215" width="60" height="24" fill="#fff" stroke={dark} strokeWidth="2" />
      <rect x="210" y="215" width="60" height="24" fill="#fff" stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const cameroonIllustrations: Record<string, IllustrationDefinition> = {
  "africa-en-miniatura-todos-los-climas-en-un-pais": { component: AfricaEnMiniaturaTodosLosClimasEnUnPais },
  "el-volcan-que-los-marineros-llamaron-carro-de-los-dioses": { component: ElVolcanQueLosMarinerosLlamaronCarroDeDioses },
  "el-baile-de-la-bandera-que-paralizo-un-mundial": { component: ElBaileEnElBanderinQueParalizoUnMundial },
  "los-tronos-de-cuentas-de-los-reinos-bamileke": { component: LosTronosDeCuentasDeLosReinosBamileke },
  "el-lago-que-exhalo-una-nube-invisible-y-mortal": { component: ElLagoQueExhaloUnaNubeInvisibleYMortal },
  "el-guiso-verde-que-todos-reclaman-como-propio": { component: ElGuisoVerdeQueTodosReclamanComoPropio },
  "el-saxofon-que-puso-a-bailar-al-planeta-entero": { component: ElSaxofonQuePusoABailarAlPlanetaEntero },
  "la-pimienta-que-nace-de-tierra-de-volcan": { component: LaPimientaQueNaceDeTierraDeVolcan },
  "el-parque-donde-se-cruzan-elefantes-y-jirafas": { component: ElParqueDondeSeCruzanElefantesYJirafas },
  "un-pais-con-doscientas-cincuenta-lenguas-propias": { component: UnPaisConDoscientasCincuentaLenguasPropias },
};
