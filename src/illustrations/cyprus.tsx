import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElLugarDondeNacioAfroditaDeLaEspumaDelMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#3D8FB0" opacity="0.35" />
      <path d="M220 250 L220 170 Q220 150 245 145 Q270 150 265 175 Q290 185 275 210 L260 250 Z" fill="#8B8378" stroke={dark} strokeWidth="3" />
      <ellipse cx="150" cy="200" rx="55" ry="14" fill="#F5F0E6" opacity="0.8" />
      <circle cx="150" cy="175" r="14" fill="#E0B89A" />
      <path d="M136 195 Q150 180 164 195 L160 245 L140 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const NicosiaLaUltimaCapitalDivididaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="95" y="150" width="90" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="215" y="140" width="90" height="110" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="90" width="20" height="160" fill="#9E9A92" stroke={dark} strokeWidth="2.5" />
      <path d="M195 110 L215 105 M195 130 L215 125 M195 150 L215 145" stroke="#4A4A4A" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const ElNombreDeChipreVieneDeLaPalabraCobre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 Q130 220 150 190 Q140 165 170 155 Q195 145 210 165 Q235 160 240 190 Q260 210 240 240 Q220 255 195 245 Q170 260 150 250 Z" fill="#C9793C" stroke={dark} strokeWidth="3" />
      <path d="M170 200 L190 190 M200 215 L225 205 M180 230 L205 225" stroke="#8A4A1F" strokeWidth="3" opacity="0.5" />
      <line x1="270" y1="240" x2="300" y2="180" stroke="#5C3A21" strokeWidth="7" strokeLinecap="round" />
      <path d="M292 178 L312 168 L318 182 L298 192 Z" fill="#9E9A92" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const HalloumiElQuesoQueSeFrieSinDerretirse: IllustrationComponent = () => (
  <g>
    <ellipse cx="205" cy="230" rx="90" ry="16" fill="#E8DCC0" stroke="#8B5A2B" strokeWidth="2.5" />
    {[[140, 175, -8], [190, 165, 5], [240, 175, -4], [275, 195, 8]].map(([x, y, rot], i) => (
      <rect key={x} x={x - 22} y={y} width="44" height="24" rx="4" fill={i % 2 === 0 ? "#F5F0E6" : "#E8C078"} stroke="#8B5A2B" strokeWidth="2.5" transform={`rotate(${rot} ${x} ${y})`} />
    ))}
  </g>
);

const LosMosaicosRomanosDePafosCasiIntactos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="130" width="210" height="120" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      {[[140, 170], [205, 150], [270, 170], [205, 210]].map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="22" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      <circle cx="205" cy="180" r="16" fill="#F4A300" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CommandariaUnoDeLosVinosMasViejosDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 150 Q170 190 205 195 Q240 190 240 150 Z" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.85" />
      <line x1="205" y1="195" x2="205" y2="230" stroke={dark} strokeWidth="4" />
      <rect x="180" y="230" width="50" height="10" fill={dark} opacity="0.5" />
      <line x1="270" y1="160" x2="300" y2="150" stroke="#5C3A21" strokeWidth="4" />
      {[275, 285, 295].map((x, i) => (
        <circle key={x} cx={x} cy={155 + i * 4} r="8" fill="#6B2C39" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElMouflonLaOvejaSalvajeQueCasiDesaparecio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L120 220 L150 235 L180 210 L210 240 L320 250 Z" fill="#8B8378" opacity="0.4" />
      <ellipse cx="200" cy="200" rx="45" ry="26" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="245" cy="190" r="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M255 178 Q275 165 270 150 Q260 165 250 172 M258 182 Q280 175 280 158 Q265 168 253 176" fill="none" stroke="#5C3A21" strokeWidth="5" strokeLinecap="round" />
      <line x1="175" y1="222" x2="170" y2="248" stroke={dark} strokeWidth="6" />
      <line x1="215" y1="222" x2="220" y2="248" stroke={dark} strokeWidth="6" />
    </g>
  );
};

const ElMonasterioDeKykkosEnLasMontanasTroodos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L170 130 L250 250 Z" fill="#3E5C4A" opacity="0.5" />
      <rect x="165" y="190" width="80" height="60" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="180" r="20" fill="#D4AF37" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="160" x2="205" y2="145" stroke={dark} strokeWidth="3" />
      <line x1="197" y1="152" x2="213" y2="152" stroke={dark} strokeWidth="3" />
      <rect x="270" y="200" width="16" height="24" fill={accentColor} opacity="0.6" />
    </g>
  );
};

const LasTumbasDeLosReyesQueNoSonDeReyes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 190 L320 190 L320 250 Z" fill="#E8DCC0" opacity="0.5" />
      {[130, 175, 235, 280].map((x) => (
        <rect key={x} x={x - 10} y="150" width="20" height="100" fill="#E8C078" stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="150" y="200" width="110" height="50" fill={accentColor} opacity="0.25" />
    </g>
  );
};

const ElMezeLaComidaQueNuncaTerminaDeLlegar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="200" width="210" height="16" fill="#8B5A2B" />
      {[[120, 175], [155, 165], [190, 178], [225, 165], [260, 178], [290, 168]].map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r="16" fill={i % 2 === 0 ? "#F5F0E6" : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const LosGatosDeSanNicolasUnaLeyendaChipriota: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cats: [number, number][] = [
    [130, 225],
    [280, 228],
    [205, 235],
  ];
  return (
    <g>
      <path d="M90 250 Q205 235 320 250 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.4" />
      <rect x="165" y="170" width="80" height="70" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="160,170 205,140 250,170" fill={dark} />
      <line x1="205" y1="140" x2="205" y2="125" stroke={dark} strokeWidth="3" />
      {/* cats sitting in front */}
      {cats.map(([x, y]) => (
        <g key={x}>
          <path d={`M${x - 14} ${y} Q${x} ${y - 22} ${x + 14} ${y} L${x + 10} ${y + 15} L${x - 10} ${y + 15} Z`} fill="#F5F0E6" stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 10},${y - 16} ${x - 16},${y - 28} ${x - 6},${y - 22}`} fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
          <polygon points={`${x + 10},${y - 16} ${x + 16},${y - 28} ${x + 6},${y - 22}`} fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const JorokitiaElAsentamientoNeoliticoMejorConservado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const houses: [number, number, number][] = [
    [150, 210, 32],
    [220, 225, 26],
    [270, 200, 22],
  ];
  return (
    <g>
      <path d="M90 250 Q205 240 320 250 L320 255 L90 255 Z" fill="#8B7355" opacity="0.3" />
      <path d="M100 245 Q205 260 320 245" fill="none" stroke={dark} strokeWidth="4" opacity="0.4" />
      {houses.map(([x, y, r], i) => (
        <g key={x}>
          <circle cx={x} cy={y} r={r} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
          <polygon points={`${x - r * 0.7},${y - r * 0.7} ${x},${y - r - 14} ${x + r * 0.7},${y - r * 0.7}`} fill={dark} opacity="0.5" />
        </g>
      ))}
    </g>
  );
};

const LaBanderaNeutralDeChipreSinColoresNacionales: IllustrationComponent = () => {
  const dark = "#4A3A2A";
  return (
    <g>
      <line x1="120" y1="90" x2="120" y2="250" stroke={dark} strokeWidth="6" />
      <rect x="120" y="100" width="180" height="120" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {/* copper island silhouette */}
      <path d="M160 140 Q190 130 220 140 Q250 145 260 165 Q240 175 210 170 Q180 178 160 165 Q150 152 160 140 Z" fill="#B8703A" stroke={dark} strokeWidth="2" />
      {/* olive branches */}
      <path d="M175 195 Q205 185 235 195" fill="none" stroke="#4C7A3D" strokeWidth="4" />
      {[185, 205, 225].map((x) => (
        <ellipse key={x} cx={x} cy="192" rx="6" ry="3" fill="#4C7A3D" />
      ))}
    </g>
  );
};

const ElEncajeDeLefkaraQueComproLeonardoDaVinci: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const motifs: [number, number][] = [
    [160, 160],
    [240, 160],
    [160, 220],
    [240, 220],
    [205, 190],
  ];
  return (
    <g>
      <rect x="140" y="140" width="130" height="100" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {motifs.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <line x1={x - 12} y1={y} x2={x + 12} y2={y} stroke={accentColor} strokeWidth="2" />
          <line x1={x} y1={y - 12} x2={x} y2={y + 12} stroke={accentColor} strokeWidth="2" />
        </g>
      ))}
      <rect x="140" y="140" width="130" height="100" fill="none" stroke={accentColor} strokeWidth="3" strokeDasharray="6 4" />
    </g>
  );
};

const KataklysmosElFestivalDelDiluvio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const people: [number, number][] = [
    [150, 190],
    [260, 195],
  ];
  return (
    <g>
      <path d="M90 250 Q205 240 320 250 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.5" />
      {people.map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y} r="14" fill={skin} />
          <path d={`M${x - 12} ${y + 16} Q${x} ${y + 8} ${x + 12} ${y + 16} L${x + 9} ${y + 55} L${x - 9} ${y + 55} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {/* water splash between them */}
      <path d="M175 195 Q205 170 235 200" fill="none" stroke="#3D8FB0" strokeWidth="4" strokeLinecap="round" />
      {[[195, 180], [210, 175], [225, 185]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill="#3D8FB0" opacity="0.8" />
      ))}
    </g>
  );
};

export const cyprusIllustrations: Record<string, IllustrationDefinition> = {
  "el-lugar-donde-nacio-afrodita-de-la-espuma-del-mar": { component: ElLugarDondeNacioAfroditaDeLaEspumaDelMar },
  "nicosia-la-ultima-capital-dividida-del-mundo": { component: NicosiaLaUltimaCapitalDivididaDelMundo },
  "el-nombre-de-chipre-viene-de-la-palabra-cobre": { component: ElNombreDeChipreVieneDeLaPalabraCobre },
  "halloumi-el-queso-que-se-frie-sin-derretirse": { component: HalloumiElQuesoQueSeFrieSinDerretirse },
  "los-mosaicos-romanos-de-pafos-casi-intactos": { component: LosMosaicosRomanosDePafosCasiIntactos },
  "commandaria-uno-de-los-vinos-mas-viejos-del-mundo": { component: CommandariaUnoDeLosVinosMasViejosDelMundo },
  "el-mouflon-la-oveja-salvaje-que-casi-desaparece": { component: ElMouflonLaOvejaSalvajeQueCasiDesaparecio },
  "el-monasterio-de-kykkos-en-las-montanas-troodos": { component: ElMonasterioDeKykkosEnLasMontanasTroodos },
  "las-tumbas-de-los-reyes-que-no-son-de-reyes": { component: LasTumbasDeLosReyesQueNoSonDeReyes },
  "el-meze-la-comida-que-nunca-termina-de-llegar": { component: ElMezeLaComidaQueNuncaTerminaDeLlegar },
  "los-gatos-de-san-nicolas-una-leyenda-chipriota": { component: LosGatosDeSanNicolasUnaLeyendaChipriota },
  "jorokitia-el-asentamiento-neolitico-mejor-conservado": { component: JorokitiaElAsentamientoNeoliticoMejorConservado },
  "la-bandera-neutral-de-chipre-sin-colores-nacionales": { component: LaBanderaNeutralDeChipreSinColoresNacionales },
  "el-encaje-de-lefkara-que-compro-leonardo-da-vinci": { component: ElEncajeDeLefkaraQueComproLeonardoDaVinci },
  "kataklysmos-el-festival-del-diluvio": { component: KataklysmosElFestivalDelDiluvio },
};
