import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaRakijaTejidaEnLaHospitalidadSerbia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* rounded bottle */}
      <path d="M185 160 L185 145 L200 145 L200 160 Q220 175 220 205 Q220 245 190 245 Q160 245 160 205 Q160 175 185 160 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="182" y="130" width="21" height="18" fill={dark} />
      <ellipse cx="192" cy="195" rx="22" ry="14" fill={tint(accentColor, 0.3)} opacity="0.6" />
      {/* small shot glass */}
      <path d="M245 210 L260 210 L256 245 L249 245 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2.5" />
      {/* plums, referencing šljivovica */}
      <circle cx="270" cy="150" r="12" fill="#5B2C6F" stroke={dark} strokeWidth="2" />
      <circle cx="285" cy="165" r="10" fill="#7B3F94" stroke={dark} strokeWidth="2" />
      <line x1="270" y1="138" x2="266" y2="125" stroke="#3E5C3A" strokeWidth="2.5" />
    </g>
  );
};

const GucaElPuebloQueLaTrompetaTomaEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <path d="M120 220 L200 220 L200 200 L230 200 L230 190 L260 175 L280 175 L280 195 L255 205 L230 210 L230 225 L200 225 L200 235 L120 235 Z" fill={gold} stroke={dark} strokeWidth="3" />
      <circle cx="280" cy="185" r="18" fill={gold} stroke={dark} strokeWidth="3" />
      <circle cx="130" cy="227" r="6" fill={dark} opacity="0.6" />
      <circle cx="155" cy="227" r="6" fill={dark} opacity="0.6" />
      {/* festive burst behind */}
      <path d="M270 130 L275 155 M290 135 L282 158 M305 150 L288 165" stroke={accentColor} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const TeslaLasCenizasEnUnaEsferaDorada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="175" y="210" width="60" height="40" fill={dark} opacity="0.5" />
      <circle cx="205" cy="165" r="45" fill={gold} stroke={dark} strokeWidth="3" />
      <circle cx="190" cy="150" r="12" fill="#F5F0E6" opacity="0.5" />
      {/* electric arcs referencing Tesla */}
      <path d="M150 140 L170 150 L155 165 L175 175" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M260 140 L240 150 L255 165 L235 175" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const LaSlavaElSantoPropioDeCadaFamilia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* braided bread loaf */}
      <ellipse cx="200" cy="220" rx="70" ry="22" fill="#D4A017" stroke={dark} strokeWidth="3" />
      <path d="M140 220 Q160 205 180 220 Q200 205 220 220 Q240 205 260 220" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      {/* candle */}
      <rect x="255" y="150" width="16" height="60" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M263 150 Q255 135 263 122 Q271 135 263 150 Z" fill="#F4A300" />
    </g>
  );
};

const KalemegdanLaFortalezaReconstruidaDecenasDeVeces: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q150 220 205 225 Q260 220 320 250 Z" fill={dark} opacity="0.25" />
      <rect x="120" y="180" width="170" height="60" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[125, 150, 175, 200, 225, 250, 275].map((x) => (
        <rect key={x} x={x} y="168" width="16" height="16" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      {/* two rivers meeting below */}
      <path d="M90 250 Q205 240 320 250" fill="none" stroke="#3D8FB0" strokeWidth="6" opacity="0.6" />
    </g>
  );
};

const ElTurboFolkElGeneroMasDiscutidoDeLosBalcanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="120" width="90" height="130" rx="8" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="195" cy="155" r="20" fill={dark} opacity="0.6" />
      <circle cx="195" cy="155" r="10" fill={tint(accentColor, 0.4)} />
      <circle cx="195" cy="210" r="28" fill={dark} opacity="0.6" />
      <circle cx="195" cy="210" r="14" fill={tint(accentColor, 0.4)} />
      {/* musical notes */}
      <circle cx="270" cy="200" r="9" fill={dark} />
      <line x1="279" y1="200" x2="279" y2="150" stroke={dark} strokeWidth="3" />
      <circle cx="295" cy="175" r="9" fill={dark} />
      <line x1="304" y1="175" x2="304" y2="130" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElGusleEpicaConUnaSolaCuerda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 245 Q170 200 185 160 Q195 140 205 140 Q200 175 200 210 Q200 235 195 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="192" y1="145" x2="192" y2="240" stroke={dark} strokeWidth="2" opacity="0.6" />
      {/* carved head at the top of the neck */}
      <circle cx="205" cy="135" r="10" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      {/* bow */}
      <line x1="230" y1="245" x2="270" y2="150" stroke="#6B4C3A" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const DosAlfabetosUsadosAlMismoTiempo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="110" width="90" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      <text x="165" y="200" fontSize="80" fontWeight="700" fill="#F5F0E6" textAnchor="middle" fontFamily="serif">
        Ђ
      </text>
      <rect x="210" y="110" width="90" height="130" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <text x="255" y="200" fontSize="80" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">
        Đ
      </text>
    </g>
  );
};

const ElPuebloDelDiabloTalladoEnPiedra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const spires = [
    { x: 140, h: 60 },
    { x: 205, h: 90 },
    { x: 270, h: 50 },
  ];
  return (
    <g>
      <path d="M90 250 Q205 240 320 250 L320 255 L90 255 Z" fill="#8B7355" opacity="0.4" />
      {spires.map(({ x, h }, i) => (
        <path key={x} d={`M${x - 14} 250 L${x - 6} ${250 - h} L${x + 6} ${250 - h} L${x + 14} 250 Z`} fill={i === 1 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      ))}
      {spires.map(({ x, h }) => (
        <ellipse key={x} cx={x} cy={250 - h - 6} rx="16" ry="8" fill={dark} />
      ))}
    </g>
  );
};

const ElMayorExportadorDeFrambuesasDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const clusters = [
    [150, 150],
    [175, 175],
    [200, 155],
    [225, 180],
    [250, 150],
    [200, 205],
  ];
  const drupelets = [
    [-6, -6],
    [6, -6],
    [0, -12],
    [-6, 4],
    [6, 4],
    [0, 10],
  ];
  return (
    <g>
      <path d="M120 130 Q180 150 200 200 Q220 150 280 130" fill="none" stroke="#3E5C3A" strokeWidth="5" strokeLinecap="round" />
      {clusters.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          {drupelets.map(([dx, dy]) => (
            <circle key={`${dx}-${dy}`} cx={x + dx} cy={y + dy} r="7" fill={accentColor} stroke={dark} strokeWidth="1.5" />
          ))}
        </g>
      ))}
      <path d="M135 140 L130 125" stroke="#3E5C3A" strokeWidth="2.5" />
      <path d="M265 140 L270 125" stroke="#3E5C3A" strokeWidth="2.5" />
      <path d="M200 190 L195 175" stroke="#3E5C3A" strokeWidth="2.5" />
    </g>
  );
};

const CevapiElPlatoQueCadaBalcanicoReclamaPropio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="100" ry="25" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      {[150, 175, 200, 225, 250].map((x) => (
        <rect key={x} x={x - 10} y="195" width="20" height="35" rx="8" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <circle cx="165" cy="205" r="8" fill="none" stroke="#F5F0E6" strokeWidth="3" />
      <circle cx="240" cy="208" r="7" fill="none" stroke="#F5F0E6" strokeWidth="3" />
    </g>
  );
};

const EmirKusturicaYElPuebloDeMaderaQueConstruyo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const houses = [
    { x: 110, y: 200, h: 40 },
    { x: 160, y: 180, h: 60 },
    { x: 230, y: 190, h: 50 },
  ];
  return (
    <g>
      {houses.map(({ x, y, h }, i) => (
        <g key={x}>
          <rect x={x} y={y} width="45" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
          <polygon points={`${x - 5},${y} ${x + 22.5},${y - 28} ${x + 50},${y}`} fill={dark} />
        </g>
      ))}
      {/* small church with a cross */}
      <rect x="280" y="205" width="30" height="45" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <polygon points="275,205 295,180 315,205" fill={dark} />
      <line x1="295" y1="180" x2="295" y2="165" stroke={dark} strokeWidth="2.5" />
      <line x1="289" y1="170" x2="301" y2="170" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const NovakDjokovicElMejorTenistaDeLaHistoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="185" cy="140" r="20" fill={skin} />
      <path d="M165 162 Q185 150 205 162 L198 230 L172 230 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* raised arm holding the trophy */}
      <line x1="200" y1="168" x2="240" y2="120" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M225 100 L255 100 L250 125 Q240 132 230 125 Z" fill="#D4AF37" stroke={dark} strokeWidth="2" />
      <rect x="235" y="125" width="10" height="12" fill="#D4AF37" stroke={dark} strokeWidth="1.5" />
      {/* racket in the other hand */}
      <line x1="170" y1="175" x2="140" y2="215" stroke="#37474F" strokeWidth="5" strokeLinecap="round" />
      <circle cx="132" cy="222" r="18" fill="none" stroke="#37474F" strokeWidth="4" />
    </g>
  );
};

const LosMonasteriosMedievalesConFrescosBizantinos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="170" width="110" height="80" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="140,170 205,120 270,170" fill={dark} />
      <circle cx="205" cy="122" r="10" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      {/* painted icon fresco on the facade */}
      <circle cx="205" cy="200" r="18" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M190 218 Q205 205 220 218 L216 245 L194 245 Z" fill="#D4A017" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElTrenSarganOchoUnaViaEnFormaDeOcho: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q150 190 205 200 Q260 210 320 150" fill="none" stroke="#3E5C3A" strokeWidth="30" opacity="0.3" />
      <path d="M100 245 Q155 190 205 198 Q255 206 310 155" fill="none" stroke={dark} strokeWidth="3" strokeDasharray="6 6" opacity="0.6" />
      {/* locomotive */}
      <rect x="175" y="180" width="60" height="35" rx="6" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="190" cy="222" r="10" fill={dark} />
      <circle cx="220" cy="222" r="10" fill={dark} />
      <rect x="165" y="165" width="18" height="20" fill={dark} opacity="0.7" />
      <path d="M165 165 Q160 150 168 140" fill="none" stroke="#B0B8BF" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

export const serbiaIllustrations: Record<string, IllustrationDefinition> = {
  "la-rakija-tejida-en-la-hospitalidad-serbia": { component: LaRakijaTejidaEnLaHospitalidadSerbia },
  "guca-el-pueblo-que-la-trompeta-toma-entero": { component: GucaElPuebloQueLaTrompetaTomaEntero },
  "tesla-las-cenizas-en-una-esfera-dorada": { component: TeslaLasCenizasEnUnaEsferaDorada },
  "la-slava-el-santo-propio-de-cada-familia": { component: LaSlavaElSantoPropioDeCadaFamilia },
  "kalemegdan-la-fortaleza-reconstruida-decenas-de-veces": { component: KalemegdanLaFortalezaReconstruidaDecenasDeVeces },
  "el-turbo-folk-el-genero-mas-discutido-de-los-balcanes": { component: ElTurboFolkElGeneroMasDiscutidoDeLosBalcanes },
  "el-gusle-poesia-epica-con-una-sola-cuerda": { component: ElGusleEpicaConUnaSolaCuerda },
  "dos-alfabetos-usados-al-mismo-tiempo": { component: DosAlfabetosUsadosAlMismoTiempo },
  "el-pueblo-del-diablo-tallado-en-piedra": { component: ElPuebloDelDiabloTalladoEnPiedra },
  "el-mayor-exportador-de-frambuesas-del-mundo": { component: ElMayorExportadorDeFrambuesasDelMundo },
  "cevapi-el-plato-que-cada-balcanico-reclama-propio": { component: CevapiElPlatoQueCadaBalcanicoReclamaPropio },
  "emir-kusturica-y-el-pueblo-de-madera-que-construyo": { component: EmirKusturicaYElPuebloDeMaderaQueConstruyo },
  "novak-djokovic-el-mejor-tenista-de-la-historia": { component: NovakDjokovicElMejorTenistaDeLaHistoria },
  "los-monasterios-medievales-con-frescos-bizantinos": { component: LosMonasteriosMedievalesConFrescosBizantinos },
  "el-tren-sargan-ocho-una-via-en-forma-de-ocho": { component: ElTrenSarganOchoUnaViaEnFormaDeOcho },
};
