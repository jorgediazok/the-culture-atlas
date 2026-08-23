import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

const ElPaisConMasPiramidesQueEgipto: IllustrationComponent = () => (
  <g>
    <rect x="90" y="230" width="230" height="20" fill="#D9C08A" opacity="0.5" />
    {[[120, 240, 60], [165, 240, 80], [215, 240, 55], [260, 240, 70], [295, 240, 45]].map(([x, y, h], i) => (
      <polygon key={i} points={`${x - 18},${y} ${x},${y - h} ${x + 18},${y}`} fill="#C97C3D" stroke="#7A4A20" strokeWidth="2.2" />
    ))}
  </g>
);

const ElLugarDondeDosRiosSeEncuentranSinMezclarse: IllustrationComponent = () => (
  <g>
    <path d="M90 100 Q160 130 150 250 L90 250 Z" fill="#1B7A9C" opacity="0.7" />
    <path d="M320 100 Q250 130 260 250 L320 250 Z" fill="#BFE3F0" opacity="0.85" />
    <path d="M150 250 Q205 240 260 250" fill="none" stroke="#0A4A5C" strokeWidth="2" opacity="0.6" />
    <path d="M175 190 Q205 180 235 190" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
  </g>
);

const LosFaraonesNegrosQueGobernaronEgipto: IllustrationComponent = () => (
  <g>
    <rect x="170" y="180" width="60" height="70" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.6" />
    <path d="M170 180 L200 155 L230 180 Z" fill="none" stroke="#5C3A21" strokeWidth="2" />
    <circle cx="200" cy="130" r="20" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2.4" />
    <path d="M188 108 Q200 90 212 108 Q216 120 208 122 Q200 112 192 122 Q184 120 188 108 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.2" />
    <path d="M188 145 Q200 152 212 145" fill="none" stroke="#1A120C" strokeWidth="2" />
    <rect x="185" y="150" width="30" height="35" fill="#D9A227" stroke="#8A6A10" strokeWidth="2" />
  </g>
);

const ElBaileDervicheQueGiraCadaViernes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(150, 235, 1, dark, accentColor)}
      {person(200, 240, 1.05, dark, "#3A7A45")}
      {person(250, 235, 1, dark, "#C1272D")}
      <path d="M130 210 Q150 195 170 210 M180 215 Q200 198 220 215 M230 210 Q250 195 270 210" fill="none" stroke={dark} strokeWidth="1.6" opacity="0.4" />
    </g>
  );
};

const LosLuchadoresCubiertosDeCenizaAntesDelCombate: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="240" rx="110" ry="14" fill="#D9C08A" opacity="0.5" />
    <g transform="translate(170 210)">
      <circle cx="0" cy="-30" r="11" fill="#B0AFA8" stroke="#6B6A62" strokeWidth="1.8" />
      <path d="M-14 -20 Q0 -26 14 -20 L16 20 Q0 28 -16 20 Z" fill="#C9C8C0" stroke="#6B6A62" strokeWidth="2.2" />
      <path d="M14 -16 Q30 -8 26 10" fill="none" stroke="#C9C8C0" strokeWidth="8" strokeLinecap="round" />
    </g>
    <g transform="translate(230 212)">
      <circle cx="0" cy="-30" r="11" fill="#B0AFA8" stroke="#6B6A62" strokeWidth="1.8" />
      <path d="M-14 -20 Q0 -26 14 -20 L16 20 Q0 28 -16 20 Z" fill="#C9C8C0" stroke="#6B6A62" strokeWidth="2.2" />
      <path d="M-14 -16 Q-30 -8 -26 10" fill="none" stroke="#C9C8C0" strokeWidth="8" strokeLinecap="round" />
    </g>
  </g>
);

const LaMontanaSagradaDondeNacioUnDios: IllustrationComponent = () => (
  <g>
    <path d="M110 250 L150 110 Q160 95 170 110 L210 250 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2.8" />
    <path d="M155 105 Q160 92 165 105" fill="none" stroke="#5C3A21" strokeWidth="2.4" />
    <rect x="230" y="200" width="55" height="50" fill="#D9C08A" stroke="#8A6A10" strokeWidth="2.4" />
    <path d="M230 200 L257 180 L285 200 Z" fill="none" stroke="#8A6A10" strokeWidth="2" />
    <rect x="248" y="220" width="18" height="30" fill="#8A6A10" opacity="0.6" />
  </g>
);

const LosPueblosNubiosPintadosDeColoresBrillantes: IllustrationComponent = () => (
  <g>
    <rect x="90" y="200" width="230" height="50" fill="#1B7A9C" opacity="0.4" />
    {[[110, 160, "#0EA5B8"], [175, 155, "#E8558A"], [240, 158, "#D9A227"], [280, 162, "#3A7A45"]].map(([x, y, color], i) => (
      <g key={i}>
        <rect x={Number(x)} y={Number(y)} width="48" height={200 - Number(y)} fill={color as string} stroke="#5C3A21" strokeWidth="2" />
        <path d={`M${Number(x) - 4} ${y} Q${Number(x) + 24} ${Number(y) - 16} ${Number(x) + 52} ${y}`} fill="none" stroke="#5C3A21" strokeWidth="1.8" />
        <rect x={Number(x) + 16} y={Number(y) + 20} width="14" height="18" fill="#F5F0E6" stroke="#5C3A21" strokeWidth="1.4" />
      </g>
    ))}
  </g>
);

const LaTelaQueEnvuelveElCuerpoEnteroDeUnaMujer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="200" cy="130" r="14" fill="#3A2A1E" stroke={dark} strokeWidth="1.8" />
      <path d="M170 150 Q200 135 230 150 L245 250 Q200 268 155 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M170 150 Q150 175 158 230" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <path d="M186 145 Q200 155 214 145" fill="none" stroke={tint(accentColor, 0.3)} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const ElPlatoDeHabasQueDesayunaTodoUnPais: IllustrationComponent = () => (
  <g>
    <ellipse cx="195" cy="215" rx="70" ry="20" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
    {[[175, 210], [200, 216], [215, 208], [185, 220]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="7" ry="5" fill="#5C3A21" opacity="0.7" />
    ))}
    <ellipse cx="280" cy="220" rx="35" ry="10" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="1.8" />
    <circle cx="150" cy="200" r="10" fill="#D9A227" />
  </g>
);

const ElCafeQueSeSirvePerfumadoConJengibre: IllustrationComponent = () => (
  <g>
    <path d="M180 230 L180 190 Q180 165 200 160 Q220 165 220 190 L220 230 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.6" />
    <rect x="192" y="140" width="16" height="24" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
    {[[260, 225], [285, 230]].map(([x, y], i) => (
      <g key={i}>
        <ellipse cx={x} cy={y} rx="12" ry="8" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="1.6" />
        <ellipse cx={x} cy={y - 2} rx="8" ry="3" fill="#5C3A21" />
      </g>
    ))}
    <path d="M180 200 L165 195" stroke="#3A2A1E" strokeWidth="2" opacity="0.5" />
  </g>
);

export const sudanIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-con-mas-piramides-que-egipto": { component: ElPaisConMasPiramidesQueEgipto },
  "el-lugar-donde-dos-rios-azules-y-blancos-se-encuentran": { component: ElLugarDondeDosRiosSeEncuentranSinMezclarse },
  "los-faraones-negros-que-gobernaron-egipto": { component: LosFaraonesNegrosQueGobernaronEgipto },
  "el-baile-derviche-que-gira-cada-viernes": { component: ElBaileDervicheQueGiraCadaViernes },
  "los-luchadores-que-se-cubren-de-ceniza-antes-del-combate": { component: LosLuchadoresCubiertosDeCenizaAntesDelCombate },
  "la-montana-sagrada-donde-nacio-un-dios": { component: LaMontanaSagradaDondeNacioUnDios },
  "los-pueblos-nubios-pintados-de-colores-brillantes": { component: LosPueblosNubiosPintadosDeColoresBrillantes },
  "la-tela-que-una-mujer-envuelve-alrededor-de-todo-el-cuerpo": { component: LaTelaQueEnvuelveElCuerpoEnteroDeUnaMujer },
  "el-plato-de-habas-que-desayuna-todo-un-pais": { component: ElPlatoDeHabasQueDesayunaTodoUnPais },
  "el-cafe-que-se-sirve-perfumado-con-jengibre": { component: ElCafeQueSeSirvePerfumadoConJengibre },
};
