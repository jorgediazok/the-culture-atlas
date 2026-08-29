import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

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

const AfricaEnMiniaturaTodosLosClimasEnUnPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="60" fill="#F5F0E6" opacity="0.5" />
      <rect x="90" y="140" width="230" height="55" fill="#2F6B3A" opacity="0.6" />
      <rect x="90" y="195" width="230" height="55" fill="#C9A227" opacity="0.6" />
      <polygon points="150,80 175,40 200,80" fill="#fff" stroke={dark} strokeWidth="2.4" />
      <path d="M110 165 Q120 148 130 165 Q120 178 110 165 Z" fill="#3A5F3A" stroke={dark} strokeWidth="1.8" />
      <rect x="118" y="163" width="4" height="20" fill="#5C3A21" />
      <ellipse cx="260" cy="220" rx="16" ry="9" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <path d="M244 214 Q238 210 240 218" fill="none" stroke={dark} strokeWidth="2" />
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
      <path d="M115 235 L115 210 L155 225 L155 245 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.2" />
      <rect x="128" y="188" width="4" height="38" fill={dark} />
      <polygon points="130,188 145,200 130,212" fill="#F5F0E6" stroke={dark} strokeWidth="1.6" />
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
      <circle cx="195" cy="155" r="13" fill="#3A2A1E" stroke={dark} strokeWidth="1.8" />
      <path d="M182 168 Q200 158 215 172 L210 210 Q195 220 178 208 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M182 172 Q160 180 168 200" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <path d="M212 175 Q235 170 232 190" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <path d="M195 210 Q178 225 165 222 M200 210 Q215 228 230 220" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      <ellipse cx="163" cy="224" rx="8" ry="4" fill="#1a1a1a" />
      <ellipse cx="232" cy="222" rx="8" ry="4" fill="#1a1a1a" />
    </g>
  );
};

const LosTronosDeCuentasDeLosReinosBamileke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 L150 130 Q200 100 250 130 L250 250 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.8" />
      <path d="M175 190 Q160 175 172 158 Q185 150 195 162 Q198 172 190 178 Q200 188 195 200 Q185 210 175 202 Q168 198 175 190 Z" fill="#D9A227" stroke={dark} strokeWidth="2" />
      <circle cx="182" cy="168" r="2.4" fill="#1a1a1a" />
      {[[170, 150], [200, 140], [230, 150], [220, 180], [200, 210]].map(([x, y], i) => (
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
      <path d="M130 235 L120 230 M280 235 L290 230" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const ElGuisoVerdeQueTodosReclamanComoPropio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="215" rx="75" ry="22" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      <path d="M155 205 Q200 175 245 205 Q235 218 200 216 Q165 218 155 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      {[[175, 198], [200, 192], [222, 199]].map(([x, y], i) => (
        <path key={i} d={`M${x - 6} ${y} Q${x} ${y - 8} ${x + 6} ${y} Q${x + 3} ${y + 4} ${x - 3} ${y + 4} Z`} fill="#D98C5F" stroke={dark} strokeWidth="1.4" />
      ))}
      <rect x="270" y="180" width="10" height="45" fill="#EDE6D6" stroke={dark} strokeWidth="1.8" />
      <rect x="285" y="180" width="10" height="45" fill="#EDE6D6" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const ElSaxofonQuePusoABailarAlPlanetaEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="185" cy="130" r="14" fill="#3A2A1E" stroke={dark} strokeWidth="1.8" />
      <path d="M170 145 Q185 138 200 146 L204 220 Q185 232 166 218 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M198 150 Q170 165 195 190 Q215 205 210 225 Q200 240 188 232" fill="none" stroke="#D9A227" strokeWidth="12" strokeLinecap="round" />
      <circle cx="188" cy="230" r="9" fill="#B8860B" />
      {[[196, 172], [200, 190], [204, 208]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" fill={dark} />
      ))}
      <path d="M168 150 Q150 158 155 175" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M120 140 Q135 130 150 140 M255 130 Q270 120 285 130" fill="none" stroke="#D9A227" strokeWidth="3" opacity="0.7" />
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
        <g key={i}>
          <path d={`M${x - 3} ${y - 12} Q${x - 8} ${y - 4} ${x} ${y}`} fill="none" stroke="#3A5F3A" strokeWidth="1.6" />
          <circle cx={x} cy={y} r="9" fill={accentColor} stroke={dark} strokeWidth="1.8" />
        </g>
      ))}
    </g>
  );
};

const ElParqueDondeSeCruzanElefantesYJirafas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill={accentColor} opacity="0.5" />
      <path d="M310 90 L310 200 M310 90 Q325 95 322 108 M310 105 Q323 108 320 118" stroke="#3A5F3A" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M118 230 L118 200 Q118 190 128 190 L138 200 L138 230 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="160" cy="215" rx="34" ry="20" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <path d="M126 205 Q110 200 108 215 Q112 222 128 215" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x="150" y="230" width="8" height="20" fill="#8B5A2B" />
      <rect x="175" y="230" width="8" height="20" fill="#8B5A2B" />
      <path d="M255 230 L258 130 Q258 118 268 118 Q278 118 278 130 L280 230" fill="#D9A227" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="268" cy="112" rx="14" ry="11" fill="#D9A227" stroke={dark} strokeWidth="2.2" />
      <path d="M262 104 L258 96 M274 104 L278 96" stroke="#D9A227" strokeWidth="3" strokeLinecap="round" />
      {[[264, 150], [270, 175], [262, 200]].map(([x, y], i) => (
        <path key={i} d={`M${x - 4} ${y} L${x + 4} ${y + 6}`} stroke="#8B5A2B" strokeWidth="3" />
      ))}
    </g>
  );
};

const UnPaisConDoscientasCincuentaLenguasPropias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(160, 220, 0.85, dark, tint(accentColor, 0.2))}
      {person(230, 222, 0.9, dark, accentColor)}
      <path d="M182 200 Q195 194 190 196 M210 194 Q223 200 216 198" fill="none" stroke={dark} strokeWidth="2.4" />
      <rect x="120" y="230" width="55" height="20" fill="#fff" stroke={dark} strokeWidth="2" />
      <rect x="222" y="230" width="55" height="20" fill="#fff" stroke={dark} strokeWidth="2" />
      <rect x="145" y="200" width="4" height="32" fill={dark} />
      <rect x="247" y="200" width="4" height="32" fill={dark} />
    </g>
  );
};

const NgondoFestivalSawa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1B4F72";
  return (
    <g>
      <rect x="90" y="190" width="230" height="60" fill={water} opacity="0.5" />
      <path d="M110 220 Q140 205 175 220 L170 235 Q140 225 115 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M195 210 Q230 192 270 210 L263 228 Q230 215 200 228 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.6" />
      <circle cx="140" cy="215" r="6" fill="#3A2A1E" />
      <circle cx="230" cy="205" r="6" fill="#3A2A1E" />
      <path d="M120 235 Q150 245 180 235 M210 232 Q240 242 270 230" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <path d="M100 175 Q100 155 90 145" fill="none" stroke="#8CA9B5" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </g>
  );
};

const EscrituraBamunNjoya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const wood = "#8B5A2B";
  return (
    <g>
      <rect x="130" y="110" width="150" height="120" rx="6" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path
        d="M150 135 L165 135 L165 150 L150 150 Z M180 135 L195 145 L180 155 Z M210 132 Q222 132 222 145 Q222 155 210 155 M150 175 L165 190 M165 175 L150 190 M185 175 Q200 170 205 185 Q200 200 185 195 M155 210 L155 222 M170 210 L170 222 M185 210 L185 222"
        fill="none"
        stroke="#F5F0E6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M290 100 L305 90 L300 115 L280 130 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
    </g>
  );
};

const ReservaFaunaDja: IllustrationComponent = ({ accentColor }) => {
  const fur = "#2E2418";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={accentColor} opacity="0.25" />
      <ellipse cx="270" cy="230" rx="8" ry="60" fill="#1F5C3A" opacity="0.5" />
      <ellipse cx="130" cy="220" rx="8" ry="70" fill="#1F5C3A" opacity="0.5" />
      <path d="M170 210 Q150 220 148 245" fill="none" stroke={fur} strokeWidth="12" strokeLinecap="round" />
      <path d="M240 210 Q260 220 262 245" fill="none" stroke={fur} strokeWidth="12" strokeLinecap="round" />
      <ellipse cx="205" cy="220" rx="45" ry="35" fill={fur} stroke={shade(fur, 0.4)} strokeWidth="2.6" />
      <circle cx="205" cy="165" r="30" fill={fur} stroke={shade(fur, 0.4)} strokeWidth="2.6" />
      <ellipse cx="205" cy="175" rx="16" ry="12" fill="#5C4433" />
      <circle cx="195" cy="168" r="3" fill="#1A1A1A" />
      <circle cx="215" cy="168" r="3" fill="#1A1A1A" />
    </g>
  );
};

const ToghuTercipeloGrassfields: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const gold = "#D9A227";
  return (
    <g>
      <path d="M170 240 L165 130 Q165 115 205 110 Q245 115 245 130 L240 240 Z" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      <path d="M180 150 Q205 140 230 150" fill="none" stroke={gold} strokeWidth="4" />
      <path d="M178 170 Q205 158 232 170" fill="none" stroke={gold} strokeWidth="4" />
      <path d="M176 190 Q205 176 234 190" fill="none" stroke={gold} strokeWidth="4" />
      <path d="M174 210 Q205 194 236 210" fill="none" stroke={gold} strokeWidth="4" />
      <circle cx="205" cy="122" r="8" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.8" />
      <path d="M190 122 L220 122 M205 107 L205 137" stroke={gold} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const BasquetbolistasCamerunNba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  const orange = "#E05A2B";
  return (
    <g>
      <line x1="290" y1="90" x2="290" y2="230" stroke="#5C3A21" strokeWidth="6" />
      <rect x="255" y="70" width="35" height="35" fill="none" stroke="#B0B0B0" strokeWidth="2.5" opacity="0.7" />
      <ellipse cx="255" cy="100" rx="30" ry="7" fill="none" stroke={orange} strokeWidth="4" />
      <circle cx="200" cy="140" r="14" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M186 158 Q200 140 214 158 L208 200 Q200 208 192 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M192 165 Q220 145 245 108" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="248" cy="100" r="10" fill={orange} stroke={shade(orange, 0.3)} strokeWidth="1.8" />
      <path d="M186 190 Q170 210 175 235" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M210 195 Q225 215 218 240" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
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
  "ngondo-festival-sawa": { component: NgondoFestivalSawa },
  "escritura-bamun-njoya": { component: EscrituraBamunNjoya },
  "reserva-fauna-dja": { component: ReservaFaunaDja },
  "toghu-terciopelo-grassfields": { component: ToghuTercipeloGrassfields },
  "basquetbolistas-camerun-nba": { component: BasquetbolistasCamerunNba },
};
