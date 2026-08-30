import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CapaDeHielo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* white snowy landscape */}
      <path d="M95 240 Q210 220 320 240 L320 250 L95 250 Z" fill={light} />
      {/* large bluish ice block with cracks */}
      <path d="M120 240 L145 130 L200 100 L260 135 L290 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 160 L155 210 M210 145 L225 220 M195 130 L195 200" stroke={dark} strokeWidth="3" opacity="0.6" />
      <path d="M145 130 L200 100 L215 118 L165 148 Z" fill={light} opacity="0.85" />
    </g>
  );
};

const SolDeMedianoche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#EAF3F8";
  return (
    <g>
      {/* snowy mountains */}
      <polygon points="95,235 150,140 205,235" fill={dark} />
      <polygon points="150,140 165,168 135,168" fill={snow} />
      <polygon points="180,235 240,120 300,235" fill={shade(dark, 0.15)} />
      <polygon points="240,120 255,150 225,150" fill={snow} />
      {/* low sun sitting right on the horizon */}
      <circle cx="205" cy="178" r="34" fill={accentColor} />
      <path d="M95 178 L320 178" stroke={accentColor} strokeWidth="2" opacity="0.4" />
      {[[130, 178], [155, 178], [255, 178], [280, 178]].map(([x, y]) => (
        <line key={x} x1={x} y1={y} x2={x} y2={y - 20} stroke={accentColor} strokeWidth="3" opacity="0.5" />
      ))}
    </g>
  );
};

const TrineosDePerros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const snow = "#EAF3F8";
  return (
    <g>
      <rect x="95" y="215" width="225" height="35" fill={snow} />
      {/* wooden sled */}
      <path d="M130 215 L130 195 Q130 185 140 185 L230 185 L230 215 Z" fill="none" stroke={accentColor} strokeWidth="6" />
      <path d="M120 220 Q135 175 160 185" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      {[150, 175, 200].map((x) => (
        <line key={x} x1={x} y1="185" x2={x} y2="215" stroke={accentColor} strokeWidth="4" />
      ))}
      <line x1="115" y1="220" x2="245" y2="220" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* paw prints trailing in the snow */}
      {[[260, 225], [280, 215], [298, 228]].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r="4" fill={dark} opacity="0.5" />
          <circle cx={x - 6} cy={y - 7} r="2.2" fill={dark} opacity="0.5" />
          <circle cx={x + 6} cy={y - 7} r="2.2" fill={dark} opacity="0.5" />
        </g>
      ))}
    </g>
  );
};

const IdiomaGroenlandes: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M110 105 Q110 85 133 85 L280 85 Q303 85 303 105 L303 155 Q303 175 280 175 L200 175 L180 195 L185 175 L133 175 Q110 175 110 155 Z" fill={accentColor} />
      {/* one long interlocking word wrapping across two lines */}
      <text x="205" y="122" fontSize="17" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="serif">
        NUNARSUARMI
      </text>
      <text x="205" y="150" fontSize="17" fontWeight="700" fill={light} textAnchor="middle" fontFamily="serif">
        ILLOQARFIK
      </text>
    </g>
  );
};

const CazaSubsistencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  const ice = "#EAF3F8";
  return (
    <g>
      {/* ice shelf */}
      <path d="M95 230 L180 205 L220 215 L320 195 L320 250 L95 250 Z" fill={ice} />
      {/* kayak resting on the ice, side profile */}
      <path d="M120 200 Q150 188 200 195 Q170 205 120 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* harpoon leaning beside it */}
      <line x1="240" y1="230" x2="290" y2="130" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
      <path d="M290 130 L280 108 L300 112 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M240 230 L232 240 M240 230 L248 240" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const NombreGroenlandia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const parchment = "#F0E6C8";
  const green = "#4A8F4E";
  return (
    <g>
      {/* old map */}
      <rect x="110" y="100" width="190" height="150" fill={parchment} stroke={dark} strokeWidth="3" />
      <path d="M120 230 Q140 200 130 170 M280 235 Q265 190 285 150" stroke={dark} strokeWidth="1.5" opacity="0.4" fill="none" />
      {/* green island drawn on it */}
      <path d="M160 220 Q140 180 165 145 Q185 115 215 140 Q245 155 235 195 Q225 230 190 235 Q170 233 160 220 Z" fill={green} stroke={dark} strokeWidth="2" />
      <path d="M175 200 Q190 175 210 190" fill="none" stroke={shade(green, 0.3)} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const AurorasBoreales: IllustrationComponent = ({ accentColor }) => {
  const night = "#0F1B33";
  const pink = "#D97BC4";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={night} />
      {[[120, 95], [160, 85], [270, 100], [300, 120], [140, 130], [290, 150]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" fill="#fff" opacity="0.85" />
      ))}
      {/* curving waves of green (and pink) light */}
      <path d="M100 150 Q150 100 200 145 Q250 190 310 130" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" opacity="0.75" />
      <path d="M100 180 Q150 135 200 175 Q250 215 310 165" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" opacity="0.5" />
      <path d="M110 120 Q160 85 215 115 Q260 145 305 100" fill="none" stroke={pink} strokeWidth="6" strokeLinecap="round" opacity="0.45" />
      {/* dark mountain silhouette at the base */}
      <polygon points="95,250 160,205 220,250" fill={night} stroke={accentColor} strokeWidth="1" opacity="0.6" />
    </g>
  );
};

const AutonomiaDinamarca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* two small government buildings side by side */}
      <rect x="120" y="150" width="70" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="112,150 155,118 198,150" fill={dark} />
      <rect x="145" y="205" width="20" height="35" fill={dark} />
      {[135, 175].map((x) => (
        <rect key={x} x={x - 6} y="170" width="12" height="16" fill={light} />
      ))}
      <rect x="220" y="165" width="60" height="75" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="213,165 250,140 287,165" fill={dark} />
      <rect x="240" y="205" width="18" height="35" fill={dark} />
      {[232, 262].map((x) => (
        <rect key={x} x={x - 5} y="180" width="10" height="14" fill={accentColor} />
      ))}
    </g>
  );
};

const InvencionDelKayak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* narrow elongated kayak seen from above */}
      <path d="M110 165 Q160 150 205 150 Q250 150 300 165 Q250 180 205 180 Q160 180 110 165 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="165" rx="26" ry="12" fill={dark} opacity="0.55" />
      <line x1="205" y1="153" x2="205" y2="177" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {/* double-bladed paddle laid across it */}
      <line x1="140" y1="120" x2="270" y2="210" stroke={light} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="140" cy="120" rx="14" ry="8" fill={light} transform="rotate(38 140 120)" />
      <ellipse cx="270" cy="210" rx="14" ry="8" fill={light} transform="rotate(38 270 210)" />
    </g>
  );
};

const PrimeraLineaCambioClimatico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const water = "#2E6F8E";
  return (
    <g>
      <rect x="95" y="200" width="225" height="50" fill={water} opacity="0.6" />
      {/* iceberg splitting in two */}
      <path d="M150 210 L130 130 L175 150 L185 100 L205 155 L165 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M215 210 L225 145 L250 165 L270 120 L280 210 Z" fill={light} stroke={dark} strokeWidth="3" />
      {/* the split/crack between the two halves */}
      <path d="M195 130 Q200 165 210 210" fill="none" stroke="#fff" strokeWidth="3" opacity="0.7" />
      <path d="M110 220 Q210 205 305 220" stroke="#fff" strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const ElFiordoHeladoDeIlulissat: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1B3A52" opacity="0.7" />
      <path d="M120 240 L100 150 L150 170 L165 110 L195 165 L175 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M230 240 L215 130 L255 155 L280 95 L300 240 Z" fill={light} stroke={dark} strokeWidth="3" />
      <path d="M90 245 Q205 235 320 245" stroke="#fff" strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const ElCantoDeTamborQueNarraHistoriasInuit: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C8996B";
  return (
    <g>
      <path d="M180 148 L215 148 L228 190 L222 240 L173 240 L167 190 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="197" cy="146" r="17" fill={skin} stroke={dark} strokeWidth="2.5" />
      <circle cx="270" cy="165" r="38" fill="none" stroke="#8B5A2B" strokeWidth="8" />
      <circle cx="270" cy="165" r="34" fill="#D9C9A3" opacity="0.5" />
      <line x1="228" y1="185" x2="250" y2="175" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M300 195 Q315 180 305 165" fill="none" stroke="#5C3A21" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

export const greenlandIllustrations: Record<string, IllustrationDefinition> = {
  "capa-de-hielo": { component: CapaDeHielo },
  "sol-de-medianoche": { component: SolDeMedianoche },
  "trineos-de-perros": { component: TrineosDePerros },
  "idioma-groenlandes": { component: IdiomaGroenlandes },
  "caza-subsistencia": { component: CazaSubsistencia },
  "nombre-groenlandia": { component: NombreGroenlandia },
  "auroras-boreales": { component: AurorasBoreales },
  "autonomia-dinamarca": { component: AutonomiaDinamarca },
  "invencion-del-kayak": { component: InvencionDelKayak },
  "primera-linea-cambio-climatico": { component: PrimeraLineaCambioClimatico },
  "el-fiordo-helado-de-ilulissat": { component: ElFiordoHeladoDeIlulissat },
  "el-canto-de-tambor-que-narra-historias-inuit": { component: ElCantoDeTamborQueNarraHistoriasInuit },
};
