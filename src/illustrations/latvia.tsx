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

const ElPalacioDeRundaleElVersallesDeLetonia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="150" width="130" height="70" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="130" width="40" height="30" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      {[155, 180, 230, 255].map((x) => (
        <rect key={x} x={x - 8} y="165" width="16" height="35" fill="#D4AF37" opacity="0.7" />
      ))}
      {/* geometric garden in front */}
      <rect x="150" y="230" width="110" height="20" fill="#4C7A3D" opacity="0.5" />
      <circle cx="205" cy="240" r="8" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosMitonesLetonesConCientosDePatronesSimbolicos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mittens: [number, number][] = [
    [160, 0],
    [250, 1],
  ];
  return (
    <g>
      {mittens.map(([x, i]) => (
        <g key={x}>
          <path d={`M${x - 25} 240 L${x - 25} 170 Q${x - 25} 155 ${x - 10} 155 L${x + 10} 155 Q${x + 25} 155 ${x + 25} 170 L${x + 25} 240 Z`} fill={i === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
          {/* thumb */}
          <path d={`M${x - 25} 210 Q${x - 42} 205 ${x - 42} 190 Q${x - 42} 178 ${x - 28} 182 L${x - 25} 200 Z`} fill={i === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
          {/* pattern stripes */}
          {[175, 195, 215].map((y) => (
            <line key={y} x1={x - 20} y1={y} x2={x + 20} y2={y} stroke={dark} strokeWidth="2" opacity="0.5" />
          ))}
        </g>
      ))}
    </g>
  );
};

const ElAmbarBalticoElOroDelNorteDeLetonia: IllustrationComponent = () => {
  const amber = "#D4941E";
  const dark = shade(amber, 0.4);
  return (
    <g>
      <path d="M205 130 Q245 140 250 180 Q255 220 215 240 Q180 250 155 220 Q135 190 155 155 Q170 125 205 130 Z" fill={amber} stroke={dark} strokeWidth="3" opacity="0.9" />
      <path d="M175 170 Q195 165 210 175" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {/* trapped insect silhouette */}
      <ellipse cx="205" cy="195" rx="10" ry="6" fill={dark} opacity="0.7" />
      <line x1="195" y1="192" x2="188" y2="186" stroke={dark} strokeWidth="1.5" opacity="0.7" />
      <line x1="215" y1="192" x2="222" y2="186" stroke={dark} strokeWidth="1.5" opacity="0.7" />
    </g>
  );
};

const JurmalaLaCiudadBalnearioDeArquitecturaDeMadera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 260 320 250 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.4" />
      <rect x="160" y="180" width="90" height="60" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="155,180 205,150 255,180" fill={dark} />
      {/* ornamental porch details */}
      {[175, 220].map((x) => (
        <line key={x} x1={x} y1="200" x2={x} y2="240" stroke="#F5F0E6" strokeWidth="4" />
      ))}
      <rect x="195" y="205" width="20" height="35" fill="#F5F0E6" opacity="0.7" />
      {/* carved trim */}
      <path d="M160 180 Q205 195 250 180" fill="none" stroke="#D4AF37" strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const JaniLaNocheDeCoronasDeRobleYQuesoDeComino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {/* bonfire */}
      <path d="M245 250 Q240 220 260 200 Q275 215 280 195 Q295 215 288 250 Z" fill="#F4A300" stroke="#B7410E" strokeWidth="2" />
      {/* person with oak wreath */}
      <circle cx="160" cy="170" r="16" fill={skin} />
      <path d="M144 188 Q160 178 176 188 L170 240 L150 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* oak leaf crown */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse key={deg} cx="160" cy="155" rx="10" ry="5" fill="#4C7A3D" stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 160 170)`} />
      ))}
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
  "el-palacio-de-rundale-el-versalles-de-letonia": { component: ElPalacioDeRundaleElVersallesDeLetonia },
  "los-mitones-letones-con-cientos-de-patrones-simbolicos": { component: LosMitonesLetonesConCientosDePatronesSimbolicos },
  "el-ambar-baltico-el-oro-del-norte-de-letonia": { component: ElAmbarBalticoElOroDelNorteDeLetonia },
  "jurmala-la-ciudad-balneario-de-arquitectura-de-madera": { component: JurmalaLaCiudadBalnearioDeArquitecturaDeMadera },
  "jani-la-noche-de-coronas-de-roble-y-queso-de-comino": { component: JaniLaNocheDeCoronasDeRobleYQuesoDeComino },
};
