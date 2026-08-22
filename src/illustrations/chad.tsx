import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElMarDelSaharaQueSeEstaQuedandoSinAgua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="115" ry="45" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[160, 195], [210, 205], [250, 190]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="14" ry="8" fill="#2F6B3A" opacity="0.7" />
      ))}
      <path d="M140 220 Q145 210 155 215 M270 225 Q275 215 285 220" stroke="#8B5A2B" strokeWidth="3" fill="none" />
    </g>
  );
};

const LosArcosDePiedraQueEsculpioElVientoDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#C9A227" opacity="0.4" />
      <path d="M140 250 L140 150 Q140 110 205 110 Q270 110 270 150 L270 250" fill="none" stroke={accentColor} strokeWidth="26" strokeLinecap="round" />
      <path d="M140 250 L140 150 Q140 110 205 110 Q270 110 270 150 L270 250" fill="none" stroke={dark} strokeWidth="2.4" />
      <circle cx="185" cy="200" r="4" fill="#8B1A1A" opacity="0.6" />
      <path d="M190 200 L200 190 M210 195 L220 205" stroke="#8B1A1A" strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const ElVolcanMasAltoDeTodoElSahara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L200 100 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="200" cy="150" rx="45" ry="16" fill="#3A2A1E" stroke={dark} strokeWidth="2.4" />
      <path d="M90 250 Q205 235 320 250" fill="none" stroke="#8B5A2B" strokeWidth="8" opacity="0.5" />
    </g>
  );
};

const LosBroncesDeUnPuebloPerdidoJuntoAlLago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="80" ry="12" fill="#8B5A2B" opacity="0.4" />
      <rect x="185" y="200" width="40" height="10" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <path d="M195 200 L195 140 Q195 120 205 115 Q215 120 215 140 L215 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <circle cx="205" cy="105" r="14" fill={accentColor} stroke={dark} strokeWidth="2.4" />
    </g>
  );
};

const LaSalQueCruzabaElDesiertoEnLomoDeCamello: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q140 220 190 250 Q240 220 290 250" fill={accentColor} opacity="0.4" />
      {[130, 195, 260].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="215" rx="26" ry="14" fill="#C9A227" stroke={dark} strokeWidth="2.2" />
          <path d={`M${x - 10} 205 Q${x - 6} 192 ${x} 205 Q${x + 4} 192 ${x + 10} 205`} fill="none" stroke={dark} strokeWidth="2.4" />
          <path d={`M${x - 16} 225 L${x - 20} 245 M${x + 16} 225 L${x + 20} 245`} stroke={dark} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const ElFestivalDondeLosHombresSeMaquillanParaSeducir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="180" rx="42" ry="52" fill="#C9A227" stroke={dark} strokeWidth="2.6" />
      <path d="M175 155 L235 155 M175 170 L235 170" stroke="#8B1A1A" strokeWidth="4" />
      <circle cx="188" cy="175" r="4" fill="#1a1a1a" />
      <circle cx="222" cy="175" r="4" fill="#1a1a1a" />
      <path d="M185 210 Q205 225 225 210" fill="none" stroke="#fff" strokeWidth="5" />
    </g>
  );
};

const LosElefantesQueVolvieronDeCasiDesaparecer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#2F6B3A" opacity="0.4" />
      {[130, 190, 250].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy={205 - i * 4} rx="28" ry="18" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
          <path d={`M${x - 26} ${195 - i * 4} Q${x - 38} ${192 - i * 4} ${x - 36} ${208 - i * 4}`} fill="none" stroke={dark} strokeWidth="3.4" />
        </g>
      ))}
    </g>
  );
};

const LaCapitalNacidaDondeSeAbrazanDosRios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q150 190 205 210 L320 210 L320 250 L90 250 Z" fill="#1B7A9C" opacity="0.55" />
      <path d="M205 210 Q260 170 320 180 L320 210 Z" fill="#2E6B8C" opacity="0.55" />
      <rect x="140" y="160" width="26" height="45" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="180" y="150" width="26" height="55" fill="#D9A227" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaBolaDeMijoQueSePartYSeComparte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="160" cy="210" r="35" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="255" cy="220" rx="45" ry="16" fill="#2F6B3A" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="255" cy="214" rx="28" ry="9" fill={accentColor} opacity="0.85" />
    </g>
  );
};

const LosPastoresQueConocenCadaPozoDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L150 130 L210 250 Z" fill="#5C3A21" opacity="0.35" />
      <path d="M230 250 L280 150 L320 250 Z" fill="#8B5A2B" opacity="0.35" />
      <ellipse cx="150" cy="215" rx="24" ry="13" fill="#C9A227" stroke={dark} strokeWidth="2.2" />
      <path d="M138 207 Q142 195 148 207 Q152 195 158 207" fill="none" stroke={dark} strokeWidth="2.4" />
      <circle cx="150" cy="185" r="14" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M140 178 Q150 170 160 178" fill="none" stroke="#fff" strokeWidth="3" />
    </g>
  );
};

export const chadIllustrations: Record<string, IllustrationDefinition> = {
  "el-mar-del-sahara-que-se-esta-quedando-sin-agua": { component: ElMarDelSaharaQueSeEstaQuedandoSinAgua },
  "los-arcos-de-piedra-que-esculpio-el-viento-del-desierto": { component: LosArcosDePiedraQueEsculpioElVientoDelDesierto },
  "el-volcan-mas-alto-de-todo-el-sahara": { component: ElVolcanMasAltoDeTodoElSahara },
  "los-bronces-de-un-pueblo-perdido-junto-al-lago": { component: LosBroncesDeUnPuebloPerdidoJuntoAlLago },
  "la-sal-que-cruzaba-el-desierto-en-lomo-de-camello": { component: LaSalQueCruzabaElDesiertoEnLomoDeCamello },
  "el-festival-donde-los-hombres-se-maquillan-para-seducir": { component: ElFestivalDondeLosHombresSeMaquillanParaSeducir },
  "los-elefantes-que-volvieron-de-casi-desaparecer": { component: LosElefantesQueVolvieronDeCasiDesaparecer },
  "la-capital-nacida-donde-se-abrazan-dos-rios": { component: LaCapitalNacidaDondeSeAbrazanDosRios },
  "la-bola-de-mijo-que-se-parte-y-se-comparte": { component: LaBolaDeMijoQueSePartYSeComparte },
  "los-pastores-que-conocen-cada-pozo-del-desierto": { component: LosPastoresQueConocenCadaPozoDelDesierto },
};
