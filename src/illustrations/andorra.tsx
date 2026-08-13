import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DosJefesDeEstadoExtranjeros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const goldDark = shade(gold, 0.3);
  return (
    <g>
      {/* bishop's mitre, representing the Bishop of Urgell */}
      <path d="M130 225 Q130 155 168 108 Q176 98 184 108 Q222 155 222 225 Q176 242 130 225 Z" fill={accentColor} />
      <path d="M158 114 L176 90 L194 114" fill="none" stroke={dark} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      {/* jeweled crown, representing the President of France */}
      <polygon points="240,225 240,178 256,202 276,160 296,202 312,178 312,225" fill={gold} stroke={goldDark} strokeWidth="5" strokeLinejoin="round" />
      <circle cx="276" cy="192" r="9" fill="#fff" />
    </g>
  );
};

const ParlamentoQueFuncionaDesde1419: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* stone facade with a pitched roof */}
      <rect x="130" y="140" width="150" height="100" fill={accentColor} />
      <polygon points="118,140 205,80 292,140" fill={dark} />
      {/* arched window */}
      <path d="M180 210 L180 168 Q205 145 230 168 L230 210 Z" fill={light} />
      {/* carved balcony jutting from the facade */}
      <rect x="158" y="210" width="94" height="16" rx="3" fill={dark} />
      {[178, 205, 232].map((x) => (
        <line key={x} x1={x} y1="226" x2={x} y2="244" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      ))}
    </g>
  );
};

const SinEjercitoPropioDesdeHaceSiglos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      {/* wall corner the shield rests against */}
      <line x1="290" y1="70" x2="290" y2="250" stroke={dark} strokeWidth="10" opacity="0.25" />
      {/* shield, tilted and leaning, no one holding it */}
      <g transform="rotate(9 200 165)">
        <path d="M200 90 L264 114 L264 176 Q264 218 200 242 Q136 218 136 176 L136 114 Z" fill={accentColor} stroke={dark} strokeWidth="5" />
        <line x1="200" y1="90" x2="200" y2="242" stroke={dark} strokeWidth="4" opacity="0.5" />
      </g>
      {/* shadow on the ground */}
      <ellipse cx="205" cy="248" rx="46" ry="8" fill={dark} opacity="0.18" />
    </g>
  );
};

const LaCapitalMasAltaDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const snow = "#F5F0E6";
  return (
    <g>
      {/* snowy Pyrenees peaks */}
      <polygon points="120,235 175,120 230,235" fill={accentColor} />
      <polygon points="175,120 192,155 158,155" fill={snow} />
      <polygon points="210,235 260,135 310,235" fill={dark} />
      <polygon points="260,135 277,170 243,170" fill={snow} />
      {/* small mountain town nestled in the valley */}
      <rect x="195" y="200" width="34" height="35" fill={light} stroke={dark} strokeWidth="2" />
      <polygon points="191,200 212,178 233,200" fill={snow} stroke={dark} strokeWidth="2" strokeLinejoin="round" />
    </g>
  );
};

const UnicoPaisConElCatalanComoIdiomaOficial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* a smaller, fading bubble for the other languages spoken day to day */}
      <path d="M255 110 Q255 96 273 96 L300 96 Q318 96 318 110 Q318 124 300 124 L286 124 L272 138 L275 124 Q255 124 255 110 Z" fill={light} opacity="0.7" />
      {/* the main speech bubble, Catalan, the sole official language */}
      <path d="M110 100 Q110 78 140 78 L220 78 Q250 78 250 100 Q250 122 220 122 L178 122 L152 148 L160 122 Q110 122 110 100 Z" fill={accentColor} />
      <text x="180" y="112" fontSize="44" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="serif">C</text>
    </g>
  );
};

const ElParaisoDeComprasSinImpuestos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* shopping bag */}
      <path d="M130 145 L230 145 L216 240 Q214 250 204 250 L156 250 Q146 250 144 240 Z" fill={accentColor} />
      <path d="M152 145 Q152 105 180 105 Q208 105 208 145" fill="none" stroke={dark} strokeWidth="9" />
      {/* crossed-out circle, no taxes */}
      <circle cx="272" cy="165" r="34" fill="none" stroke="#B71C1C" strokeWidth="9" />
      <line x1="250" y1="187" x2="294" y2="143" stroke="#B71C1C" strokeWidth="9" />
    </g>
  );
};

const GrandvaliraElMayorDominioEsquiablePirenaico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const snow = "#F5F0E6";
  return (
    <g>
      {/* snowy mountain */}
      <polygon points="120,240 205,105 290,240" fill={light} />
      <polygon points="205,105 240,160 170,160" fill={snow} />
      {/* winding ski trail down the slope */}
      <path d="M195 165 Q230 190 180 215 Q140 235 200 240" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      {/* skier on the trail */}
      <circle cx="200" cy="240" r="9" fill={dark} />
    </g>
  );
};

const ElCultivoDeTabacoQueAlimentoElContrabando: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* drying line */}
      <line x1="120" y1="110" x2="290" y2="110" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      {/* hanging tobacco leaves */}
      {[155, 205, 255].map((x, i) => (
        <path
          key={x}
          d={`M${x} 110 Q${x - 32} 150 ${x - 10} 210 Q${x} 225 ${x + 10} 210 Q${x + 32} 150 ${x} 110 Z`}
          fill={i % 2 === 0 ? accentColor : light}
        />
      ))}
    </g>
  );
};

const UnaDeLasMayoresEsperanzasDeVidaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* mountain silhouette behind */}
      <polygon points="120,235 195,120 270,235" fill={dark} opacity="0.3" />
      {/* beating heart */}
      <path d="M200 228 Q150 186 150 148 Q150 122 176 122 Q190 122 200 138 Q210 122 224 122 Q250 122 250 148 Q250 186 200 228 Z" fill={accentColor} />
      {/* heartbeat / EKG line across it */}
      <path d="M138 170 L172 170 L182 142 L200 202 L214 156 L224 170 L262 170" fill="none" stroke={light} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
};

const ElSantuarioQueRenacioDeUnIncendio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* modern curved-roof shrine, Bofill style */}
      <path d="M135 240 L135 195 Q135 155 205 142 Q275 155 275 195 L275 240 Z" fill={light} />
      {/* distinctive curved roofline */}
      <path d="M128 195 Q205 135 282 195" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      {/* arched entrance */}
      <path d="M178 240 L178 205 Q205 188 232 205 L232 240 Z" fill={dark} />
      {/* cross atop the bell tower */}
      <line x1="205" y1="112" x2="205" y2="142" stroke={dark} strokeWidth="6" />
      <line x1="193" y1="120" x2="217" y2="120" stroke={dark} strokeWidth="6" />
    </g>
  );
};

export const andorraIllustrations: Record<string, IllustrationDefinition> = {
  "dos-jefes-de-estado-extranjeros": { component: DosJefesDeEstadoExtranjeros },
  "parlamento-que-funciona-desde-1419": { component: ParlamentoQueFuncionaDesde1419 },
  "sin-ejercito-propio-desde-hace-siglos": { component: SinEjercitoPropioDesdeHaceSiglos },
  "la-capital-mas-alta-de-europa": { component: LaCapitalMasAltaDeEuropa },
  "unico-pais-con-el-catalan-como-idioma-oficial": { component: UnicoPaisConElCatalanComoIdiomaOficial },
  "el-paraiso-de-compras-sin-impuestos": { component: ElParaisoDeComprasSinImpuestos },
  "grandvalira-el-mayor-dominio-esquiable-pirenaico": { component: GrandvaliraElMayorDominioEsquiablePirenaico },
  "el-cultivo-de-tabaco-que-alimento-el-contrabando": { component: ElCultivoDeTabacoQueAlimentoElContrabando },
  "una-de-las-mayores-esperanzas-de-vida-del-mundo": { component: UnaDeLasMayoresEsperanzasDeVidaDelMundo },
  "el-santuario-que-renacio-de-un-incendio": { component: ElSantuarioQueRenacioDeUnIncendio },
};
