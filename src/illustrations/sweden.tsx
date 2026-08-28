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

const AstridLindgrenYPippiCalzaslargas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#E8B989";
  return (
    <g>
      {/* small horse */}
      <path d="M240 240 L240 195 Q240 175 260 175 Q280 175 285 195 L288 240 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <path d="M285 195 Q300 185 305 165 Q295 180 280 178" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {/* head with red braids sticking up */}
      <circle cx="150" cy="175" r="30" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M130 155 Q120 110 135 95 Q140 130 140 155 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M170 155 Q180 110 165 95 Q160 130 160 155 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="140" cy="178" r="3" fill="#1A1A1A" />
      <circle cx="160" cy="178" r="3" fill="#1A1A1A" />
    </g>
  );
};

const SystembolagetElMonopolioDelAlcohol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const glass = "#B0BEC5";
  return (
    <g>
      {/* counter */}
      <rect x="110" y="200" width="200" height="16" fill="#8B5A2B" />
      {/* bottle behind counter */}
      <path d="M195 90 L195 115 Q195 125 205 130 L205 195 L225 195 L225 130 Q235 125 235 115 L235 90 Z" fill={glass} stroke={shade(glass, 0.4)} strokeWidth="2.5" opacity="0.85" />
      <rect x="200" y="80" width="30" height="14" fill={shade(glass, 0.4)} />
      {/* sign with clock hours */}
      <rect x="240" y="140" width="60" height="40" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="270" cy="160" r="12" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <line x1="270" y1="160" x2="270" y2="152" stroke={dark} strokeWidth="1.5" />
      <line x1="270" y1="160" x2="276" y2="160" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LagomNiMuchoNiPoco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* balance stand */}
      <line x1="205" y1="240" x2="205" y2="120" stroke={dark} strokeWidth="6" />
      <line x1="140" y1="130" x2="270" y2="130" stroke={dark} strokeWidth="5" />
      {/* left pan with cup */}
      <line x1="150" y1="130" x2="150" y2="165" stroke={dark} strokeWidth="2" />
      <path d="M130 165 Q150 180 170 165 L166 175 Q150 185 134 175 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M140 155 Q150 150 160 155 L157 168 L143 168 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
      {/* right pan with cup, mirrored */}
      <line x1="260" y1="130" x2="260" y2="165" stroke={dark} strokeWidth="2" />
      <path d="M240 165 Q260 180 280 165 L276 175 Q260 185 244 175 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M250 155 Q260 150 270 155 L267 168 L253 168 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
      {/* base */}
      <path d="M175 240 L235 240 L225 225 L185 225 Z" fill={dark} />
    </g>
  );
};

const ElDalahastElCaballoDeDalarna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const white = "#FBFBFB";
  return (
    <g>
      {/* horse body */}
      <path d="M140 235 L140 190 Q140 165 170 160 L200 158 Q225 158 235 140 Q245 130 255 138 Q250 150 240 158 L235 175 L235 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* legs */}
      <rect x="150" y="225" width="14" height="25" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="205" y="225" width="14" height="25" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* floral motifs */}
      <circle cx="180" cy="185" r="7" fill={white} opacity="0.9" />
      <circle cx="205" cy="195" r="6" fill="#4A90A4" opacity="0.9" />
      <circle cx="195" cy="210" r="6" fill={white} opacity="0.9" />
      <path d="M170 175 Q175 168 182 172 M195 185 Q200 178 207 182" stroke={dark} strokeWidth="1.5" fill="none" opacity="0.6" />
    </g>
  );
};

const KraftskivaLaFiestaDelCangrejoDeRio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* moon lantern */}
      <path d="M270 100 Q295 100 295 130 Q295 155 270 155 Q285 130 270 100 Z" fill="#F4A300" stroke={shade("#F4A300", 0.3)} strokeWidth="2.5" />
      <circle cx="279" cy="118" r="3" fill="#1A1A1A" />
      <path d="M270 148 Q278 152 286 148" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      {/* crayfish */}
      <ellipse cx="170" cy="195" rx="42" ry="24" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 195 Q105 185 95 165 Q115 180 132 188" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M130 200 Q105 210 95 230 Q115 215 132 205" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[150, 165, 180, 195].map((x) => (
        <line key={x} x1={x} y1="215" x2={x - 5} y2="235" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      ))}
      <circle cx="205" cy="188" r="3" fill="#1A1A1A" />
    </g>
  );
};

const LosSamiYElPastoreoDeRenos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const antler = "#8B5A2B";
  return (
    <g>
      {/* cone tent */}
      <path d="M110 240 L155 130 L200 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M148 140 L155 130 L162 140" fill="none" stroke={dark} strokeWidth="2" />
      {/* reindeer body */}
      <path d="M225 235 L225 195 Q225 178 245 176 Q265 178 268 195 L270 235 Z" fill="#6B4A38" stroke={shade("#6B4A38", 0.35)} strokeWidth="2.5" />
      {/* big antlers */}
      <path d="M245 176 Q235 150 215 148 Q230 155 235 168 M245 176 Q238 140 220 130 Q235 145 240 160" fill="none" stroke={antler} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M255 176 Q265 150 285 148 Q270 155 265 168 M255 176 Q262 140 280 130 Q265 145 260 160" fill="none" stroke={antler} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="230" y="225" width="10" height="20" fill="#6B4A38" />
      <rect x="255" y="225" width="10" height="20" fill="#6B4A38" />
    </g>
  );
};

const MinecraftCreadoEnSuecia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const grass = "#5B8C3E";
  const dirt = "#8B5A2B";
  return (
    <g>
      {/* stacked blocks forming a mountain */}
      {[[150, 220], [180, 220], [210, 220], [240, 220], [165, 190], [195, 190], [225, 190], [180, 160], [210, 160]].map(([x, y], i) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="30" height="30" fill={i < 4 ? dirt : i < 7 ? tint(dirt, 0.15) : grass} stroke={dark} strokeWidth="2" />
      ))}
      {/* blocky tree */}
      <rect x="270" y="205" width="14" height="35" fill="#6B4A2E" stroke={dark} strokeWidth="2" />
      <rect x="255" y="175" width="44" height="34" fill={grass} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElTomteElDuendeNavidenoSueco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#E8B989";
  const beard = "#F5F0E6";
  return (
    <g>
      {/* pointed red cap */}
      <path d="M175 145 Q200 90 225 145 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="225" cy="145" r="6" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* face and beard */}
      <circle cx="200" cy="160" r="20" fill={skin} />
      <path d="M180 165 Q200 210 220 165 Q210 185 200 185 Q190 185 180 165 Z" fill={beard} stroke={shade(beard, 0.2)} strokeWidth="1.5" />
      {/* porridge bowl */}
      <ellipse cx="150" cy="225" rx="26" ry="10" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <ellipse cx="150" cy="220" rx="20" ry="7" fill="#F5F0E6" />
      <rect x="142" y="212" width="6" height="8" fill="#F4A300" />
    </g>
  );
};

const LaSaunaYElChapuzonHeladoSuecos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const ice = "#B3E5FC";
  return (
    <g>
      {/* sauna cabin */}
      <rect x="110" y="160" width="90" height="80" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M105 160 L155 120 L205 160 Z" fill={dark} />
      <rect x="140" y="195" width="30" height="45" fill={shade(accentColor, 0.5)} />
      {/* steam */}
      <path d="M175 150 Q185 135 175 120 Q190 130 180 150" fill="none" stroke="#F5F0E6" strokeWidth="3" opacity="0.6" />
      {/* frozen lake with ice hole */}
      <ellipse cx="260" cy="225" rx="60" ry="20" fill={ice} opacity="0.6" />
      <ellipse cx="260" cy="225" rx="22" ry="12" fill="#1565C0" opacity="0.5" stroke={shade(ice, 0.3)} strokeWidth="2.5" />
    </g>
  );
};

const ElArchipielagoDeEstocolmo: IllustrationComponent = () => {
  const water = "#4A90A4";
  const rock = "#8B8378";
  const cottageRed = "#B71C1C";
  return (
    <g>
      {/* water */}
      <rect x="90" y="120" width="230" height="120" fill={water} opacity="0.35" />
      {/* rocky islands */}
      {[[130, 220, 40], [220, 230, 55], [280, 205, 30]].map(([x, y, w], i) => (
        <ellipse key={i} cx={x as number} cy={y as number} rx={w as number} ry={(w as number) * 0.35} fill={rock} opacity="0.8" />
      ))}
      {/* red cottages */}
      <rect x="150" y="195" width="20" height="16" fill={cottageRed} stroke={shade(cottageRed, 0.3)} strokeWidth="1.5" />
      <polygon points="148,195 160,182 172,195" fill={shade(cottageRed, 0.3)} />
      <rect x="235" y="200" width="18" height="14" fill={cottageRed} stroke={shade(cottageRed, 0.3)} strokeWidth="1.5" />
      <polygon points="233,200 244,188 255,200" fill={shade(cottageRed, 0.3)} />
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
  "astrid-lindgren-y-pippi-calzaslargas": { component: AstridLindgrenYPippiCalzaslargas },
  "systembolaget-el-monopolio-del-alcohol": { component: SystembolagetElMonopolioDelAlcohol },
  "lagom-ni-mucho-ni-poco": { component: LagomNiMuchoNiPoco },
  "el-dalahast-el-caballo-de-dalarna": { component: ElDalahastElCaballoDeDalarna },
  "kraftskiva-la-fiesta-del-cangrejo-de-rio": { component: KraftskivaLaFiestaDelCangrejoDeRio },
  "los-sami-y-el-pastoreo-de-renos": { component: LosSamiYElPastoreoDeRenos },
  "minecraft-creado-en-suecia": { component: MinecraftCreadoEnSuecia },
  "el-tomte-el-duende-navideno-sueco": { component: ElTomteElDuendeNavidenoSueco },
  "la-sauna-y-el-chapuzon-helado-suecos": { component: LaSaunaYElChapuzonHeladoSuecos },
  "el-archipielago-de-estocolmo": { component: ElArchipielagoDeEstocolmo },
};
