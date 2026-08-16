import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const IkeaMueblesQueCambiaronElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="170" width="120" height="15" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <rect x="160" y="200" width="80" height="50" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="160" y1="200" x2="160" y2="250" stroke={dark} strokeWidth="3" />
      <line x1="240" y1="200" x2="240" y2="250" stroke={dark} strokeWidth="3" />
      <path d="M150 165 L130 190 L145 190 L165 165 Z" fill="#8B8378" opacity="0.6" />
      <circle cx="220" cy="220" r="8" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const SpotifyLaAppQueCambioLaMusica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="165" y="120" width="80" height="130" rx="12" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="175" r="35" fill={accentColor} />
      <path d="M188 165 Q205 158 222 165 M188 175 Q205 170 222 175 M190 185 Q205 182 220 185" fill="none" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
      <rect x="180" y="225" width="50" height="8" rx="4" fill="#F5F0E6" opacity="0.7" />
    </g>
  );
};

const PremioNobelNacioEnSuecia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="225" rx="40" ry="10" fill="#8B7355" opacity="0.5" />
      <circle cx="205" cy="170" r="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="170" r="26" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <circle cx="205" cy="163" r="10" fill="#F5F0E6" opacity="0.8" />
      <path d="M190 180 Q205 190 220 180" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const AbbaElPopQueConquistoElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="185" y="150" width="10" height="80" fill={dark} />
      <ellipse cx="190" cy="140" rx="18" ry="12" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(-20 190 140)" />
      <circle cx="255" cy="180" r="30" fill="none" stroke="#D4AF37" strokeWidth="3" />
      <circle cx="245" cy="170" r="4" fill="#D4AF37" />
      <circle cx="268" cy="185" r="4" fill="#D4AF37" />
      <circle cx="250" cy="195" r="4" fill="#D4AF37" />
      <circle cx="265" cy="165" r="4" fill="#D4AF37" />
    </g>
  );
};

const AllemansrattenElDerechoDeTodos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="180,240 180,190 205,175 230,190 230,240" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="192,240 192,215 218,215 218,240" fill={dark} opacity="0.6" />
      <path d="M100 245 Q150 235 205 240 Q260 245 320 235" fill="none" stroke="#8B7355" strokeWidth="3" opacity="0.6" strokeDasharray="8 6" />
    </g>
  );
};

const VasaElBarcoQueSeHundioEnSuViaje: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g transform="rotate(18 205 200)">
      <path d="M120 235 Q205 250 290 235 L280 220 L130 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="215" x2="205" y2="130" stroke="#8B5A2B" strokeWidth="4" />
      <path d="M175 145 L235 145 L225 190 L185 190 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <line x1="150" y1="165" x2="150" y2="215" stroke="#8B5A2B" strokeWidth="3" />
      <path d="M135 172 L165 172 L160 195 L140 195 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const MidsommarLaFiestaMasEsperada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="205" y1="240" x2="205" y2="100" stroke="#8B5A2B" strokeWidth="6" />
      <line x1="150" y1="150" x2="260" y2="150" stroke="#8B5A2B" strokeWidth="4" />
      {[[170, 148], [205, 145], [240, 148]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="10" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      {[[160, 220], [250, 220]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="14" fill="#C68642" />
      ))}
      <path d="M175 235 Q205 210 235 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const FikaLaPausaDeCafeObligatoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M160 200 L160 235 Q160 245 175 245 L195 245 Q210 245 210 235 L210 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M210 205 Q230 205 230 220 Q230 235 210 232" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M172 195 Q175 185 170 178 M188 195 Q191 185 186 178" fill="none" stroke="#B0B8BF" strokeWidth="2.5" opacity="0.7" />
      <ellipse cx="270" cy="230" rx="20" ry="14" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M255 225 Q270 220 285 225" fill="none" stroke="#F4A300" strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const CinturonDeSeguridadRegaladoAlMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="160" width="130" height="80" rx="10" fill="#B0B8BF" opacity="0.4" />
      <line x1="230" y1="150" x2="165" y2="245" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
      <line x1="165" y1="150" x2="230" y2="245" stroke={dark} strokeWidth="10" strokeLinecap="round" opacity="0.7" />
      <rect x="188" y="190" width="24" height="18" rx="3" fill="#D4AF37" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const SmorgasbordElOrigenDelBufet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="215" width="200" height="12" fill="#8B5A2B" />
      {[130, 165, 200, 235, 270].map((x, i) => (
        <ellipse key={x} cx={x} cy="205" rx="16" ry="9" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      <circle cx="165" cy="200" r="4" fill="#C1272D" />
      <circle cx="235" cy="200" r="4" fill="#F4A300" />
    </g>
  );
};

export const swedenIllustrations: Record<string, IllustrationDefinition> = {
  "ikea-muebles-que-cambiaron-el-mundo": { component: IkeaMueblesQueCambiaronElMundo },
  "spotify-la-app-que-cambio-la-musica": { component: SpotifyLaAppQueCambioLaMusica },
  "premio-nobel-nacio-en-suecia": { component: PremioNobelNacioEnSuecia },
  "abba-el-pop-que-conquisto-el-mundo": { component: AbbaElPopQueConquistoElMundo },
  "allemansratten-el-derecho-de-todos": { component: AllemansrattenElDerechoDeTodos },
  "vasa-el-barco-que-se-hundio-en-su-viaje": { component: VasaElBarcoQueSeHundioEnSuViaje },
  "midsommar-la-fiesta-mas-esperada": { component: MidsommarLaFiestaMasEsperada },
  "fika-la-pausa-de-cafe-obligatoria": { component: FikaLaPausaDeCafeObligatoria },
  "cinturon-de-seguridad-regalado-al-mundo": { component: CinturonDeSeguridadRegaladoAlMundo },
  "smorgasbord-el-origen-del-bufet": { component: SmorgasbordElOrigenDelBufet },
};
