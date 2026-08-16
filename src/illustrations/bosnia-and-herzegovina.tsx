import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SarajevoDondeSeCruzanCuatroReligiones: IllustrationComponent = () => (
  <g>
    <rect x="90" y="200" width="48" height="50" fill="#2E7D5A" stroke="#1B4A38" strokeWidth="2.5" />
    <rect x="108" y="150" width="12" height="50" fill="#2E7D5A" stroke="#1B4A38" strokeWidth="2" />
    <path d="M108 150 Q114 132 120 150 Z" fill="#2E7D5A" stroke="#1B4A38" strokeWidth="2" />
    <path d="M114 122 m -5,0 a 5,5 0 1,0 10,0 a 3.7,3.7 0 1,1 -10,0" fill="#D4AF37" />
    <rect x="148" y="195" width="48" height="55" fill="#8B1A2B" stroke="#5C0F1C" strokeWidth="2.5" />
    <path d="M155 195 Q172 160 189 195 Q172 175 155 195 Z" fill="#8B1A2B" stroke="#5C0F1C" strokeWidth="2.5" />
    <line x1="172" y1="160" x2="172" y2="140" stroke="#5C0F1C" strokeWidth="3" />
    <line x1="165" y1="147" x2="179" y2="147" stroke="#5C0F1C" strokeWidth="3" />
    <rect x="206" y="205" width="48" height="45" fill="#1B4F91" stroke="#0E3161" strokeWidth="2.5" />
    <polygon points="206,205 230,160 254,205" fill="#1B4F91" stroke="#0E3161" strokeWidth="2.5" />
    <line x1="230" y1="160" x2="230" y2="140" stroke="#0E3161" strokeWidth="3" />
    <line x1="223" y1="147" x2="237" y2="147" stroke="#0E3161" strokeWidth="3" />
    <rect x="264" y="205" width="48" height="45" fill="#B8860B" stroke="#7A5900" strokeWidth="2.5" />
    <polygon points="264,205 288,175 312,205" fill="#B8860B" stroke="#7A5900" strokeWidth="2.5" />
    <polygon points="288,182 294,192 282,192" fill="none" stroke="#F5F0E6" strokeWidth="2.2" />
    <polygon points="288,196 294,186 282,186" fill="none" stroke="#F5F0E6" strokeWidth="2.2" />
    <path d="M90 250 L320 250" stroke="#8B8378" strokeWidth="4" opacity="0.4" />
  </g>
);

const LosClavadistasDelPuenteViejoDeMostar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="225" width="230" height="25" fill="#3D8FB0" opacity="0.5" />
      <path d="M100 225 Q205 150 310 225 L310 235 Q205 170 100 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="95" y="215" width="18" height="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="297" y="215" width="18" height="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="250" cy="125" rx="13" ry="7" fill={dark} transform="rotate(25 250 125)" />
      <circle cx="238" cy="115" r="8" fill="#C68642" />
      <line x1="248" y1="118" x2="268" y2="108" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="256" y1="130" x2="272" y2="140" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="260" y1="128" x2="278" y2="120" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Sarajevo1984LosJuegosOlimpicosDeInvierno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q120 140 205 100 Q290 140 320 250 Z" fill="#B0D8E8" opacity="0.4" stroke={dark} strokeWidth="2" />
      <path d="M100 245 Q130 150 205 115 Q280 150 310 245" fill="none" stroke="#E8F4FA" strokeWidth="18" opacity="0.75" />
      {[[150, 233], [175, 240], [200, 233], [225, 240], [250, 233]].map(([cx, cy], i) => (
        <circle key={cx as number} cx={cx} cy={cy} r="11" fill="none" stroke={i % 2 === 0 ? dark : accentColor} strokeWidth="4" />
      ))}
    </g>
  );
};

const LasRosasDeSarajevoCicatricesDeGuerra: IllustrationComponent = () => (
  <g>
    <rect x="90" y="80" width="230" height="170" fill="#9E9A92" />
    <line x1="90" y1="130" x2="320" y2="120" stroke="#7C7870" strokeWidth="2" opacity="0.4" />
    <line x1="90" y1="210" x2="320" y2="220" stroke="#7C7870" strokeWidth="2" opacity="0.4" />
    {[[180, 150], [230, 150], [230, 190], [180, 190], [205, 130], [205, 210]].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="20" fill="#B8283F" opacity="0.9" />
    ))}
    <circle cx="205" cy="170" r="16" fill="#8B1A2B" />
    <circle cx="120" cy="215" r="13" fill="#8B1A2B" opacity="0.6" />
    <circle cx="290" cy="205" r="16" fill="#8B1A2B" opacity="0.55" />
  </g>
);

const CevapiElPlatoNacionalServidoEnSomun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="210" rx="110" ry="35" fill="#E8C078" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="200" rx="88" ry="20" fill="#F5D89A" opacity="0.7" />
      {[130, 165, 200, 235, 270].map((x, i) => (
        <rect key={x} x={x - 12} y="175" width="24" height="40" rx="12" fill={i % 2 === 0 ? "#8B5A2B" : "#6B3E1D"} stroke={dark} strokeWidth="2.5" />
      ))}
      <path d="M100 235 Q205 250 310 235" fill="none" stroke="#F5F0E6" strokeWidth="6" opacity="0.4" />
    </g>
  );
};

const ElRitualDelCafeBosnioEnDzezva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M115 250 L115 190 Q115 165 140 165 L160 165 Q183 165 183 190 L183 250 Z" fill="#C87F3A" stroke={dark} strokeWidth="3" />
      <ellipse cx="149" cy="165" rx="34" ry="10" fill="#E0A25E" stroke={dark} strokeWidth="2.5" />
      <path d="M183 195 L228 173" stroke="#C87F3A" strokeWidth="7" strokeLinecap="round" />
      <circle cx="149" cy="150" r="9" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M149 138 Q140 118 149 100 M149 138 Q158 122 152 105" fill="none" stroke={dark} strokeWidth="2" opacity="0.35" />
      <rect x="255" y="215" width="42" height="30" rx="4" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="276" cy="212" rx="23" ry="7" fill="#5C3A21" />
      <rect x="238" y="198" width="18" height="18" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BlagajTekijaLaCasaDervicheEnElAcantilado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 130 Q140 100 170 130 L200 250 Z" fill="#8B8378" opacity="0.7" stroke={dark} strokeWidth="2" />
      <rect x="150" y="185" width="90" height="65" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="150,185 195,155 240,185" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="180" y="215" width="20" height="35" fill={dark} opacity="0.5" />
      <rect x="165" y="200" width="14" height="14" fill="#3D8FB0" opacity="0.7" />
      <rect x="205" y="200" width="14" height="14" fill="#3D8FB0" opacity="0.7" />
      <ellipse cx="275" cy="245" rx="45" ry="10" fill="#3D8FB0" opacity="0.5" />
      <path d="M240 230 Q260 215 275 230 Q290 245 320 240" fill="none" stroke="#3D8FB0" strokeWidth="5" opacity="0.55" />
    </g>
  );
};

const NeumLosVeinteKilometrosDeCostaDelPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="100" width="95" height="150" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="225" y="100" width="95" height="150" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="100" width="40" height="150" fill="#3D8FB0" stroke={dark} strokeWidth="2.5" />
      <path d="M185 175 L225 175" stroke="#F5F0E6" strokeWidth="2" strokeDasharray="5 4" opacity="0.7" />
      <circle cx="205" cy="150" r="6" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const SevdalinkaElBluesDeLosBalcanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="140" cy="140" r="18" fill={skin} />
      <path d="M122 165 Q140 152 158 165 L152 245 L128 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M140 165 Q130 190 140 210" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      <circle cx="262" cy="145" r="17" fill={skin} />
      <path d="M245 168 Q262 156 279 168 L273 245 L251 245 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <rect x="236" y="185" width="20" height="45" rx="3" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" transform="rotate(-12 246 207)" />
      <rect x="262" y="185" width="20" height="45" rx="3" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" transform="rotate(12 272 207)" />
      {[195, 210, 225].map((y) => (
        <line key={y} x1="252" y1={y} x2="269" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
    </g>
  );
};

const LasPiramidesDeVisokoUnaTeoriaControvertida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L205 100 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M140 250 L140 210 Q140 195 155 195 L185 195 Q200 195 200 210 L200 250 Z" fill="#2E2A1F" stroke={dark} strokeWidth="2.5" />
      <path d="M155 195 L145 175 M185 195 L195 175" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      <line x1="255" y1="130" x2="285" y2="190" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
      <path d="M278 175 L298 165 L305 178 L285 190 Z" fill="#9E9A92" stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const bosniaAndHerzegovinaIllustrations: Record<string, IllustrationDefinition> = {
  "sarajevo-donde-se-cruzan-cuatro-religiones": { component: SarajevoDondeSeCruzanCuatroReligiones },
  "los-clavadistas-del-puente-viejo-de-mostar": { component: LosClavadistasDelPuenteViejoDeMostar },
  "sarajevo-1984-los-juegos-olimpicos-de-invierno": { component: Sarajevo1984LosJuegosOlimpicosDeInvierno },
  "las-rosas-de-sarajevo-cicatrices-de-guerra": { component: LasRosasDeSarajevoCicatricesDeGuerra },
  "cevapi-el-plato-nacional-servido-en-somun": { component: CevapiElPlatoNacionalServidoEnSomun },
  "el-ritual-del-cafe-bosnio-en-dzezva": { component: ElRitualDelCafeBosnioEnDzezva },
  "blagaj-tekija-la-casa-derviche-en-el-acantilado": { component: BlagajTekijaLaCasaDervicheEnElAcantilado },
  "neum-los-veinte-kilometros-de-costa-del-pais": { component: NeumLosVeinteKilometrosDeCostaDelPais },
  "sevdalinka-el-blues-de-los-balcanes": { component: SevdalinkaElBluesDeLosBalcanes },
  "las-piramides-de-visoko-una-teoria-controvertida": { component: LasPiramidesDeVisokoUnaTeoriaControvertida },
};
