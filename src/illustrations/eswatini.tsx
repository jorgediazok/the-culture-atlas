import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElPaisQueCambioSuNombrePorDecretoReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="16" fill="#3A2418" stroke={dark} strokeWidth="2.2" />
      <path d="M180 155 Q205 145 230 155 L222 240 Q205 250 188 240 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.6" />
      <polygon points="185,115 195,130 175,130" fill="#C9A227" />
      <polygon points="205,110 215,128 195,128" fill="#C9A227" />
      <polygon points="225,115 232,130 215,130" fill="#C9A227" />
      <rect x="150" y="230" width="110" height="10" fill="#8B5A2B" opacity="0.6" />
    </g>
  );
};

const LaMinaMasAntiguaQueLaHumanidadConoce: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L110 140 Q160 95 205 100 Q250 95 300 140 L320 250 Z" fill="#8B1A1A" opacity="0.55" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="200" rx="45" ry="55" fill="#1A1A1A" />
      <rect x="150" y="220" width="14" height="30" fill="#5C3A21" transform="rotate(-20 157 235)" />
      <polygon points="200,225 195,205 210,210" fill="#8C8C8C" />
    </g>
  );
};

const LaDanzaDeLasCanasQuePuedeElegirReina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="150" r="11" fill="#3A2418" stroke={dark} strokeWidth="1.8" />
      <path d={`M${x - 18} 230 Q${x - 20} 190 ${x} 185 Q${x + 20} 190 ${x + 18} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
      <line x1={x} y1="163" x2={x} y2="200" stroke="#8B5A2B" strokeWidth="4" />
    </g>
  );
  return (
    <g>
      {dancer(160, accentColor)}
      {dancer(255, "#C1272D")}
      <rect x="90" y="238" width="230" height="8" fill="#2F6B3A" opacity="0.4" />
    </g>
  );
};

const LaRocaQueEsElSegundoMonolitoMasGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q95 190 130 150 Q170 100 230 105 Q290 115 310 175 Q320 220 320 250 Z" fill="#8C8C74" stroke={dark} strokeWidth="2.8" />
      <path d="M130 200 Q180 175 250 190" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      <path d="M90 250 L320 250" stroke="#2F6B3A" strokeWidth="8" opacity="0.4" />
    </g>
  );
};

const ElVidrioQueSeSoplaConBotellasRecicladas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="200" cy="140" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M212 140 L245 140" stroke="#5C3A21" strokeWidth="6" />
      <circle cx="255" cy="140" r="10" fill={tint(accentColor, 0.3)} opacity="0.6" />
      <path d="M190 155 Q160 175 165 210 Q170 235 195 235 Q220 235 210 210 Q205 190 190 155 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <rect x="150" y="235" width="110" height="8" fill="#5C5C5C" opacity="0.5" />
    </g>
  );
};

const LaCascadaQueCaeSobreUnValleReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q150 90 205 90 Q260 90 320 200 L320 250 L90 250 Z" fill="#2F6B3A" opacity="0.45" stroke={dark} strokeWidth="2.4" />
      <path d="M195 100 L195 220 Q205 235 215 220 L215 100 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="205" cy="235" rx="50" ry="10" fill="#F5F0E6" opacity="0.7" />
    </g>
  );
};

const LaCeremoniaSecretaQueRenuevaAlRey: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const warrior = (x: number) => (
    <g key={x}>
      <circle cx={x} cy="150" r="10" fill="#3A2418" stroke={dark} strokeWidth="1.8" />
      <path d={`M${x - 14} 200 Q${x - 16} 175 ${x} 172 Q${x + 16} 175 ${x + 14} 200 Z`} fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x={x - 6} y="200" width="12" height="35" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <rect x={x - 30} y="180" width="20" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
  return (
    <g>
      {warrior(150)}
      {warrior(220)}
      {warrior(280)}
      <rect x="90" y="238" width="230" height="8" fill="#3A2418" opacity="0.4" />
    </g>
  );
};

const ElSantuarioDondeLosRinocerontesCaminanLibres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 240 Q125 200 155 195 Q160 175 195 175 Q225 175 220 200 L245 205 L240 220 L215 215 Q210 240 190 240 Z" fill="#5C6B6E" stroke={dark} strokeWidth="2.6" />
      <polygon points="155,180 148,168 160,172" fill="#5C6B6E" stroke={dark} strokeWidth="1.8" />
      <line x1="150" y1="240" x2="147" y2="250" stroke={dark} strokeWidth="4" />
      <line x1="205" y1="240" x2="208" y2="250" stroke={dark} strokeWidth="4" />
      <ellipse cx="270" cy="215" rx="22" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const ElDoselDeCablesQueCruzaUnCanonVerde: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 130 320 250 Z" fill="#2F6B3A" opacity="0.4" />
      <line x1="110" y1="150" x2="300" y2="200" stroke="#3A2418" strokeWidth="3" />
      <circle cx="205" cy="175" r="9" fill={accentColor} stroke={dark} strokeWidth="2" />
      <line x1="205" y1="175" x2="200" y2="195" stroke="#3A2418" strokeWidth="2" />
      <rect x="105" y="145" width="10" height="12" fill="#8B5A2B" />
      <rect x="295" y="195" width="10" height="12" fill="#8B5A2B" />
    </g>
  );
};

const ElToroYElBuitreQueSostienenElEscudo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="185" rx="45" ry="55" fill="#8B5A2B" stroke={dark} strokeWidth="2.8" />
      <line x1="185" y1="150" x2="185" y2="220" stroke="#3A2418" strokeWidth="3" />
      <line x1="225" y1="150" x2="225" y2="220" stroke="#3A2418" strokeWidth="3" />
      {[0, 1, 2].map((i) => (
        <polygon key={i} points={`${195 + i * 8},120 ${200 + i * 8},100 ${205 + i * 8},120`} fill="#C9A227" />
      ))}
      <ellipse cx="140" cy="200" rx="18" ry="26" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="270" cy="200" rx="18" ry="26" fill="#1A1A1A" stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const SibhacaDanzaDePiesVeloces: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2418";
  const kicker = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="130" r="11" fill={skin} stroke={dark} strokeWidth="1.8" />
      <path d={`M${x - 16} 195 Q${x - 18} 155 ${x} 150 Q${x + 18} 155 ${x + 16} 195 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
      <line x1={x - 6} y1="195" x2={x - 10} y2="235" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d={`M${x + 6} 190 Q${x + 30} 175 ${x + 40} 130`} fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <line x1={x - 18} y1="165" x2={x - 35} y2="150" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <line x1={x + 16} y1="165" x2={x + 30} y2="150" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
  return (
    <g>
      {kicker(160, accentColor)}
      {kicker(255, "#C1272D")}
      <rect x="90" y="235" width="230" height="10" fill={dark} opacity="0.3" />
    </g>
  );
};

const EmahiyaVestimentaCotidiana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2418";
  return (
    <g>
      <circle cx="205" cy="120" r="20" fill={skin} stroke={dark} strokeWidth="2.2" />
      <path d="M175 142 Q205 128 240 145 L255 235 Q205 250 165 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M240 145 Q260 158 255 128 Q245 133 235 143 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <g transform="translate(190, 175)">
        <ellipse cx="0" cy="0" rx="14" ry="10" fill={dark} opacity="0.5" />
        <circle cx="12" cy="-4" r="7" fill={dark} opacity="0.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line key={deg} x1="12" y1="-4" x2="12" y2="-14" stroke={dark} strokeWidth="2" opacity="0.5" transform={`rotate(${deg} 12 -4)`} />
        ))}
      </g>
      <polygon points="185,205 190,195 195,205 200,193 205,205 210,195 215,205" fill={dark} opacity="0.5" />
    </g>
  );
};

export const eswatiniIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-que-cambio-su-nombre-por-decreto-real": { component: ElPaisQueCambioSuNombrePorDecretoReal },
  "la-mina-mas-antigua-que-la-humanidad-conoce": { component: LaMinaMasAntiguaQueLaHumanidadConoce },
  "la-danza-de-las-canas-que-elige-reina": { component: LaDanzaDeLasCanasQuePuedeElegirReina },
  "la-roca-que-es-el-segundo-monolito-mas-grande": { component: LaRocaQueEsElSegundoMonolitoMasGrande },
  "el-vidrio-que-se-sopla-con-botellas-recicladas": { component: ElVidrioQueSeSoplaConBotellasRecicladas },
  "la-cascada-que-cae-sobre-un-valle-real": { component: LaCascadaQueCaeSobreUnValleReal },
  "la-ceremonia-secreta-que-renueva-al-rey": { component: LaCeremoniaSecretaQueRenuevaAlRey },
  "el-santuario-donde-los-rinocerontes-caminan-libres": { component: ElSantuarioDondeLosRinocerontesCaminanLibres },
  "el-dosel-de-cables-que-cruza-un-canon-verde": { component: ElDoselDeCablesQueCruzaUnCanonVerde },
  "el-toro-y-el-buitre-que-sostienen-el-escudo": { component: ElToroYElBuitreQueSostienenElEscudo },
  "sibhaca-danza-de-pies-veloces": { component: SibhacaDanzaDePiesVeloces },
  "emahiya-vestimenta-cotidiana": { component: EmahiyaVestimentaCotidiana },
};
