import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaPrimeraCiudadEuropeaFundadaEnAmerica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="150" width="110" height="90" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="3" />
      <rect x="170" y="105" width="18" height="50" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <polygon points="170,105 179,88 188,105" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="222" y="105" width="18" height="50" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <polygon points="222,105 231,88 240,105" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M188 155 Q205 130 222 155" fill="none" stroke={dark} strokeWidth="2.6" />
      <rect x="195" y="200" width="20" height="40" fill="#3A2418" stroke={dark} strokeWidth="2" />
      <rect x="90" y="240" width="230" height="8" fill="#8C8C74" opacity="0.6" />
    </g>
  );
};

const LosDosRitmosDeclaradosPatrimonioDeLaHumanidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="145" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 16} 230 Q${x - 18} 185 ${x} 180 Q${x + 18} 185 ${x + 16} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
    </g>
  );
  return (
    <g>
      {dancer(165, accentColor)}
      {dancer(245, "#C1272D")}
      <rect x="105" y="185" width="26" height="45" rx="4" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" transform="rotate(-8 118 207)" />
      <circle cx="285" cy="195" r="16" fill="#C9A227" stroke={dark} strokeWidth="2.2" />
      <line x1="269" y1="195" x2="301" y2="195" stroke="#8A6A10" strokeWidth="2" />
      <rect x="90" y="238" width="230" height="8" fill="#3A3A3A" opacity="0.4" />
    </g>
  );
};

const ElPuebloQueExportaMasPeloterosQueNadie: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="145" r="14" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M191 130 Q205 118 219 130 Q212 122 205 122 Q198 122 191 130 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="192" y="159" width="26" height="40" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <line x1="205" y1="199" x2="205" y2="235" stroke="#5C3A21" strokeWidth="4" />
      <rect x="235" y="175" width="14" height="45" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" transform="rotate(25 242 197)" />
      <path d="M110 200 Q90 165 120 145 Q150 155 145 185 Q125 205 110 200 Z" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      <path d="M110 200 Q90 165 120 145" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LaPiedraAzulQueSoloExisteEnUnLugarDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="150,235 130,180 175,130 235,140 260,195 220,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 180 Q175 195 200 175 Q220 200 245 185" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.75" />
      <path d="M140 210 Q170 220 195 205 Q225 222 245 205" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.6" />
      <polygon points="175,130 190,110 210,115 200,140" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const ElAmbarConInsectosAtrapadosHaceMillonesDeAnos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 235 L155 165 L205 110 L255 165 L240 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.9" />
      <ellipse cx="205" cy="185" rx="16" ry="10" fill="#1A1A1A" opacity="0.75" />
      <line x1="196" y1="178" x2="200" y2="165" stroke="#1A1A1A" strokeWidth="1.6" opacity="0.7" />
      <line x1="214" y1="178" x2="210" y2="165" stroke="#1A1A1A" strokeWidth="1.6" opacity="0.7" />
      <path d="M175 150 L235 150" stroke="#F5F0E6" strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const LaBasilicaConFormaDeManosUnidasEnOracion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="190" width="110" height="50" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.6" />
      <path d="M170 190 Q170 130 205 100 Q240 130 240 190 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M195 190 Q195 150 205 130 Q215 150 215 190 Z" fill="#F5F0E6" opacity="0.7" />
      <rect x="195" y="205" width="20" height="35" fill="#3A2418" stroke={dark} strokeWidth="2" />
      <rect x="90" y="238" width="230" height="8" fill="#8C8C74" opacity="0.5" />
    </g>
  );
};

const LosDiablosEnmascaradosDelCarnavalMasAntiguo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="170" rx="50" ry="55" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M165 140 Q150 105 175 90 Q170 120 180 135 Z" fill="#C1272D" stroke={dark} strokeWidth="2.4" />
      <path d="M245 140 Q260 105 235 90 Q240 120 230 135 Z" fill="#C1272D" stroke={dark} strokeWidth="2.4" />
      <circle cx="188" cy="165" r="6" fill="#1A1A1A" />
      <circle cx="222" cy="165" r="6" fill="#1A1A1A" />
      <path d="M180 195 L195 210 L210 195 L225 210" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
      <circle cx="205" cy="130" r="5" fill="#C9A227" />
      <circle cx="180" cy="150" r="4" fill="#C9A227" />
      <circle cx="230" cy="150" r="4" fill="#C9A227" />
    </g>
  );
};

const ElPalacioDondeVivioElHijoDeCristobalColon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="140" width="130" height="100" fill={tint(accentColor, 0.12)} stroke={dark} strokeWidth="3" />
      {[160, 195, 230, 255].map((x) => (
        <path key={x} d={`M${x} 175 L${x} 140 Q${x + 9} 130 ${x + 18} 140 L${x + 18} 175 Z`} fill="#F5F0E6" stroke={dark} strokeWidth="2" opacity="0.85" />
      ))}
      <path d="M170 240 L180 220 L240 220 L250 240 Z" fill={accentColor} opacity="0.5" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LosPurosEnrolladosAManoQueCompitenConCuba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[130, -8], [175, 6], [220, -4]].map(([x, rot], i) => (
        <g key={i} transform={`translate(${x} 160) rotate(${rot})`}>
          <rect x="-45" y="-7" width="90" height="14" rx="7" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
          <rect x="30" y="-7" width="14" height="14" rx="4" fill="#3A2418" />
        </g>
      ))}
      <path d="M270 230 Q265 200 275 175 Q285 195 282 220 Q290 200 295 185" fill="none" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <path d="M110 230 Q105 200 115 175" fill="none" stroke="#2F6B3A" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <rect x="90" y="230" width="230" height="10" fill="#3A2418" opacity="0.4" />
    </g>
  );
};

const LaCuevaConArteTainoDeHaceMilAnos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L100 140 Q150 90 205 95 Q265 90 310 140 L320 250 Z" fill="#5C4A42" opacity="0.5" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="170" r="22" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <circle cx="195" cy="163" r="3" fill="#1A1A1A" />
      <circle cx="215" cy="163" r="3" fill="#1A1A1A" />
      <path d="M192 182 Q205 190 218 182" fill="none" stroke="#1A1A1A" strokeWidth="2.4" />
      <path d="M140 200 L150 185 M270 200 L260 185" stroke={accentColor} strokeWidth="3" opacity="0.6" />
      {[130, 165, 245, 280].map((x, i) => (
        <polygon key={x} points={`${x - 8},95 ${x + 8},95 ${x},${125 + (i % 2) * 6}`} fill="#8C8C8C" opacity="0.6" />
      ))}
    </g>
  );
};

export const dominicanRepublicIllustrations: Record<string, IllustrationDefinition> = {
  "la-primera-ciudad-europea-fundada-en-america": { component: LaPrimeraCiudadEuropeaFundadaEnAmerica },
  "los-dos-ritmos-declarados-patrimonio-de-la-humanidad": { component: LosDosRitmosDeclaradosPatrimonioDeLaHumanidad },
  "el-pueblo-que-exporta-mas-peloteros-que-nadie": { component: ElPuebloQueExportaMasPeloterosQueNadie },
  "la-piedra-azul-que-solo-existe-en-un-lugar-del-mundo": { component: LaPiedraAzulQueSoloExisteEnUnLugarDelMundo },
  "el-ambar-con-insectos-atrapados-hace-millones-de-anos": { component: ElAmbarConInsectosAtrapadosHaceMillonesDeAnos },
  "la-basilica-con-forma-de-manos-unidas-en-oracion": { component: LaBasilicaConFormaDeManosUnidasEnOracion },
  "los-diablos-enmascarados-del-carnaval-mas-antiguo": { component: LosDiablosEnmascaradosDelCarnavalMasAntiguo },
  "el-palacio-donde-vivio-el-hijo-de-cristobal-colon": { component: ElPalacioDondeVivioElHijoDeCristobalColon },
  "los-puros-enrollados-a-mano-que-compiten-con-cuba": { component: LosPurosEnrolladosAManoQueCompitenConCuba },
  "la-cueva-con-arte-taino-de-hace-mil-anos": { component: LaCuevaConArteTainoDeHaceMilAnos },
};
