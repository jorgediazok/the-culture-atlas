import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RigaLaCapitalDelArtNouveau: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="140" width="110" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="165" r="14" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2" />
      <path d="M180 165 Q205 150 230 165" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      <ellipse cx="180" cy="205" rx="14" ry="20" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <ellipse cx="230" cy="205" rx="14" ry="20" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaLeyendaDetrasDeLaBanderaMasAntigua: IllustrationComponent = () => (
  <g>
    <line x1="150" y1="130" x2="150" y2="245" stroke="#8B7355" strokeWidth="5" />
    <path d="M150 130 L280 145 L280 200 L150 195 Z" fill="#9E1B32" />
    <path d="M150 154 L280 160 L280 175 L150 172 Z" fill="#F5F0E6" />
  </g>
);

const UnMillonDeCancionesPopularesCatalogadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="130" width="130" height="110" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect key={`${row}-${col}`} x={150 + col * 30} y={140 + row * 33} width="24" height="26" fill={accentColor} stroke={dark} strokeWidth="1.5" />
        ))
      )}
    </g>
  );
};

const MercadoCentralEnHangaresDeZepelines: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 240 L120 190 Q205 150 290 190 L290 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="200" width="20" height="40" fill={dark} opacity="0.3" />
      <rect x="190" y="200" width="20" height="40" fill={dark} opacity="0.3" />
      <rect x="230" y="200" width="20" height="40" fill={dark} opacity="0.3" />
      <path d="M120 190 Q205 150 290 190" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const CaminoBalticoDosMillonesDeManosUnidas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <path d="M90 245 Q205 260 320 245" fill="none" stroke="#3D8FB0" strokeWidth="6" opacity="0.5" />
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="180" r="12" fill={skin} />
          <path d={`M${x - 14} 192 Q${x} 185 ${x + 14} 192 L${x + 12} 235 L${x - 12} 235 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <line x1="142" y1="215" x2="163" y2="215" stroke={dark} strokeWidth="4" />
      <line x1="187" y1="215" x2="208" y2="215" stroke={dark} strokeWidth="4" />
      <line x1="232" y1="215" x2="253" y2="215" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const BalsamoNegroDeRigaRemedioCentenario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M185 150 L225 150 L225 165 L235 180 L235 235 Q235 245 220 245 L190 245 Q175 245 175 235 L175 180 L185 165 Z" fill="#2E241A" stroke={dark} strokeWidth="2.5" />
      <rect x="192" y="140" width="26" height="14" fill="#8B7355" />
      <rect x="180" y="195" width="50" height="30" fill={accentColor} opacity="0.85" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ParqueNacionalDeGaujaLaSuizaLetona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L130 150 L170 250 Z" fill="#B7410E" opacity="0.75" stroke={dark} strokeWidth="2" />
      <path d="M170 250 L215 130 L260 250 Z" fill="#C1541A" opacity="0.75" stroke={dark} strokeWidth="2" />
      <rect x="195" y="105" width="16" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="195,105 203,90 211,105" fill={dark} />
      <path d="M260 250 L295 175 L320 250 Z" fill="#B7410E" opacity="0.6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElPrimerArbolDeNavidadDecoradoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 240 320 250" fill="none" stroke="#8B7355" strokeWidth="3" opacity="0.5" />
      <path d="M205 240 L205 100" stroke="#5C4A3A" strokeWidth="6" />
      <polygon points="205,100 175,150 235,150" fill="#1B4D3E" stroke={dark} strokeWidth="2" />
      <polygon points="205,130 165,190 245,190" fill="#1B4D3E" stroke={dark} strokeWidth="2" />
      <polygon points="205,165 155,230 255,230" fill="#1B4D3E" stroke={dark} strokeWidth="2" />
      {[[180, 175], [230, 175], [195, 210], [220, 210]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="6" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const MildaElMonumentoALaLibertad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="195" y="150" width="20" height="90" fill="#B0B8BF" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="140" rx="16" ry="12" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M195 128 L188 108 M215 128 L222 108 M205 122 L205 100" stroke="#D4AF37" strokeWidth="2.5" />
      {[188, 205, 222].map((x) => (
        <path key={x} d={`M${x - 4} ${x === 205 ? 96 : 104} L${x} ${x === 205 ? 88 : 96} L${x + 4} ${x === 205 ? 96 : 104} Z`} fill="#D4AF37" />
      ))}
    </g>
  );
};

const LaMayorDensidadDeCiguenasDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="205" y1="240" x2="205" y2="180" stroke="#8B7355" strokeWidth="6" />
      <ellipse cx="205" cy="178" rx="24" ry="8" fill="#8B5A2B" />
      <ellipse cx="200" cy="150" rx="16" ry="22" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M210 140 Q225 138 232 130" fill="none" stroke="#F4A300" strokeWidth="4" strokeLinecap="round" />
      <path d="M195 168 L198 195 M205 168 L204 195" stroke={accentColor} strokeWidth="4" />
      <circle cx="205" cy="130" r="3" fill="#1A1A1A" />
    </g>
  );
};

export const latviaIllustrations: Record<string, IllustrationDefinition> = {
  "riga-la-capital-del-art-nouveau": { component: RigaLaCapitalDelArtNouveau },
  "la-leyenda-detras-de-la-bandera-mas-antigua": { component: LaLeyendaDetrasDeLaBanderaMasAntigua },
  "un-millon-de-canciones-populares-catalogadas": { component: UnMillonDeCancionesPopularesCatalogadas },
  "mercado-central-en-hangares-de-zepelines": { component: MercadoCentralEnHangaresDeZepelines },
  "camino-baltico-dos-millones-de-manos-unidas": { component: CaminoBalticoDosMillonesDeManosUnidas },
  "balsamo-negro-de-riga-remedio-centenario": { component: BalsamoNegroDeRigaRemedioCentenario },
  "parque-nacional-de-gauja-la-suiza-letona": { component: ParqueNacionalDeGaujaLaSuizaLetona },
  "el-primer-arbol-de-navidad-decorado-del-mundo": { component: ElPrimerArbolDeNavidadDecoradoDelMundo },
  "milda-el-monumento-a-la-libertad": { component: MildaElMonumentoALaLibertad },
  "la-mayor-densidad-de-ciguenas-de-europa": { component: LaMayorDensidadDeCiguenasDeEuropa },
};
