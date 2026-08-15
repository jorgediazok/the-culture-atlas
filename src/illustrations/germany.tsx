import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GRAFFITI_COLORS = ["#E63946", "#F4A300", "#2A9D8F", "#457B9D"];

const MuroDeBerlin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      {/* concrete wall segments with a gap between them */}
      <rect x="100" y="110" width="90" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="210" y="110" width="90" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <line x1="100" y1={140 + row * 35} x2="190" y2={140 + row * 35} stroke={dark} strokeWidth="1.5" opacity="0.4" />
          <line x1="210" y1={140 + row * 35} x2="300" y2={140 + row * 35} stroke={dark} strokeWidth="1.5" opacity="0.4" />
        </g>
      ))}
      {/* colorful graffiti */}
      <path d="M115 180 q15 -20 30 0 t30 0" fill="none" stroke={GRAFFITI_COLORS[0]} strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="150" r="10" fill={GRAFFITI_COLORS[1]} opacity="0.85" />
      <polygon points="225,200 245,160 265,200" fill={GRAFFITI_COLORS[2]} opacity="0.85" />
      <path d="M230 140 q15 15 30 0" fill="none" stroke={GRAFFITI_COLORS[3]} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const Oktoberfest: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      {/* mug body */}
      <rect x="150" y="140" width="90" height="100" fill={accentColor} stroke={dark} strokeWidth="4" />
      {/* handle */}
      <path d="M240 155 Q275 160 275 190 Q275 220 240 225" fill="none" stroke={dark} strokeWidth="10" />
      {/* overflowing foam */}
      <path d="M145 140 Q160 115 180 138 Q195 108 210 138 Q225 112 240 140 Q245 145 235 148 L155 148 Q145 145 145 140 Z" fill="#fff" stroke={dark} strokeWidth="2" />
      <circle cx="170" cy="125" r="4" fill="#fff" opacity="0.8" />
      <circle cx="215" cy="118" r="3" fill="#fff" opacity="0.8" />
    </g>
  );
};

const HermanosGrimm: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const forest = "#2D4A34";
  const paper = tint(shade(accentColor, 0.1), 0.65);
  return (
    <g>
      {/* dark forest behind */}
      <polygon points="100,240 130,150 160,240" fill={forest} opacity="0.8" />
      <polygon points="150,240 190,130 230,240" fill={forest} />
      <polygon points="220,240 260,155 300,240" fill={forest} opacity="0.8" />
      {/* open storybook in front */}
      <path d="M110 210 L200 195 L200 240 L110 250 Z" fill={paper} stroke={dark} strokeWidth="2" />
      <path d="M200 195 L290 210 L290 250 L200 240 Z" fill={tint(paper, 0.15)} stroke={dark} strokeWidth="2" />
      <line x1="200" y1="195" x2="200" y2="240" stroke={dark} strokeWidth="2.5" />
      {[215, 225].map((y) => (
        <line key={`l-${y}`} x1="125" y1={y} x2="180" y2={y - 3} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      {[220, 230].map((y) => (
        <line key={`r-${y}`} x1="220" y1={y} x2="270" y2={y + 3} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
    </g>
  );
};

const Autobahn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* sky */}
      <rect x="90" y="90" width="220" height="80" fill={light} opacity="0.4" />
      {/* road, perspective toward the horizon */}
      <polygon points="140,240 260,240 210,150 190,150" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* lane dashes shrinking toward the horizon */}
      <rect x="197" y="225" width="6" height="16" fill="#fff" />
      <rect x="199" y="200" width="4" height="12" fill="#fff" />
      <rect x="200" y="180" width="3" height="9" fill="#fff" />
      <rect x="200.5" y="165" width="2" height="6" fill="#fff" />
      {/* car */}
      <rect x="188" y="205" width="24" height="12" rx="3" fill={dark} />
    </g>
  );
};

const Beethoven: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* sheet music */}
      <rect x="110" y="120" width="100" height="120" fill={light} stroke={dark} strokeWidth="2" />
      {[140, 160, 180, 200].map((y) => (
        <line key={y} x1="122" y1={y} x2="198" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.6" />
      ))}
      <circle cx="140" cy="160" r="5" fill={dark} />
      <circle cx="165" cy="180" r="5" fill={dark} />
      <circle cx="185" cy="150" r="5" fill={dark} />
      {/* composer's bust */}
      <path d="M285 240 L285 200 Q285 165 250 165 Q215 165 215 200 L215 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="250" cy="150" r="26" fill={accentColor} stroke={dark} strokeWidth="3" />
    </g>
  );
};

const MercadosNavidenos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const wood = "#8B5A2B";
  const treeGreen = "#2E7D32";
  return (
    <g>
      {/* market stall */}
      <rect x="110" y="170" width="90" height="70" fill={wood} stroke={dark} strokeWidth="2" />
      <polygon points="100,170 155,135 210,170" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M100 172 Q155 185 210 172" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {[115, 140, 165, 190].map((x, i) => (
        <circle key={x} cx={x} cy={i % 2 === 0 ? 176 : 179} r="3" fill="#FFD700" />
      ))}
      {/* christmas tree beside the stall */}
      <polygon points="255,240 225,240 240,205" fill={treeGreen} />
      <polygon points="248,205 232,205 240,180" fill={treeGreen} />
      <rect x="236" y="240" width="8" height="10" fill={wood} />
      <circle cx="240" cy="178" r="4" fill="#FFD700" />
    </g>
  );
};

const GutenbergImprenta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* press frame */}
      <rect x="140" y="100" width="16" height="130" fill={dark} />
      <rect x="244" y="100" width="16" height="130" fill={dark} />
      <rect x="140" y="100" width="120" height="16" fill={dark} />
      {/* screw mechanism */}
      <rect x="192" y="116" width="16" height="50" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="180" y="160" width="40" height="14" fill={dark} />
      {/* bed with type tray */}
      <rect x="160" y="195" width="80" height="14" fill={light} stroke={dark} strokeWidth="2" />
      {[168, 182, 196, 210, 224].map((x) => (
        <rect key={x} x={x} y="210" width="8" height="14" fill={dark} opacity="0.7" />
      ))}
    </g>
  );
};

const Bauhaus: IllustrationComponent = () => {
  const red = "#DD0000";
  const yellow = "#FFCE00";
  const blue = "#0072CE";
  const dark = "#1A1A1A";
  return (
    <g>
      {/* geometric chair: circle seat, tube legs, primary colors */}
      <circle cx="200" cy="175" r="30" fill={yellow} stroke={dark} strokeWidth="3" />
      <rect x="185" y="140" width="30" height="10" fill={blue} />
      <line x1="180" y1="200" x2="165" y2="240" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="220" y1="200" x2="235" y2="240" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <circle cx="200" cy="175" r="10" fill={red} />
    </g>
  );
};

const SistemaPfand: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* vending machine body */}
      <rect x="160" y="110" width="90" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="175" y="125" width="60" height="30" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="185" y="170" width="40" height="8" fill={dark} />
      <rect x="185" y="200" width="40" height="20" fill={dark} opacity="0.6" />
      {/* bottles being fed in */}
      <path d="M120 230 L120 205 Q120 198 126 195 L126 180 L136 180 L136 195 Q142 198 142 205 L142 230 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M270 225 L270 200 Q270 194 275 192 L275 178 L283 178 L283 192 Q288 194 288 200 L288 225 Z" fill={accentColor} stroke={dark} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const BARLEY_COLOR = "#D4A017";

const LeyPurezaCerveza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* two mugs clinking */}
      <g transform="rotate(-12 165 190)">
        <rect x="140" y="150" width="50" height="80" fill={accentColor} stroke={dark} strokeWidth="3" />
        <path d="M190 160 Q210 165 210 185 Q210 205 190 210" fill="none" stroke={dark} strokeWidth="6" />
        <ellipse cx="165" cy="150" rx="25" ry="8" fill="#fff" />
      </g>
      <g transform="rotate(12 245 190)">
        <rect x="220" y="150" width="50" height="80" fill={light} stroke={dark} strokeWidth="3" />
        <path d="M220 160 Q200 165 200 185 Q200 205 220 210" fill="none" stroke={dark} strokeWidth="6" />
        <ellipse cx="245" cy="150" rx="25" ry="8" fill="#fff" />
      </g>
      {/* barley stalk */}
      <path d="M120 240 Q118 210 122 185" fill="none" stroke={shade(BARLEY_COLOR, 0.35)} strokeWidth="2.5" />
      {[190, 200, 210, 220].map((y, i) => (
        <ellipse key={y} cx={122 + (i % 2 === 0 ? 4 : -4)} cy={y} rx="4" ry="7" fill={BARLEY_COLOR} />
      ))}
      {/* hop cone */}
      <ellipse cx="285" cy="220" rx="10" ry="16" fill="#8FBC5A" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const Neuschwanstein: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  const forest = "#2D4A34";
  return (
    <g>
      {/* wooded hill */}
      <polygon points="90,240 200,175 310,240" fill={forest} opacity="0.4" />
      <polygon points="120,240 150,195 180,240" fill={forest} />
      <polygon points="230,240 260,195 290,240" fill={forest} />
      {/* castle body */}
      <rect x="165" y="150" width="70" height="90" fill={light} stroke={dark} strokeWidth="2.5" />
      {/* towers with pointed roofs */}
      <rect x="150" y="110" width="24" height="70" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="146,110 162,80 178,110" fill={dark} />
      <rect x="226" y="125" width="20" height="55" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="222,125 236,98 250,125" fill={dark} />
      {[180, 200, 220].map((y) => (
        <rect key={y} x="195" y={y} width="10" height="14" fill={dark} opacity="0.6" />
      ))}
    </g>
  );
};

const STADIUM_FAN_X = [140, 175, 210, 245, 280];

const FutbolAlemania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* terrace steps */}
      <polygon points="90,240 90,220 310,220 310,240" fill={dark} opacity="0.3" />
      {STADIUM_FAN_X.map((x, i) => {
        const headY = i % 2 === 0 ? 170 : 180;
        const bodyY = i % 2 === 0 ? 184 : 194;
        return (
          <g key={x}>
            <circle cx={x} cy={headY} r="14" fill={skin} />
            <rect x={x - 16} y={bodyY} width="32" height="40" fill={accentColor} stroke={dark} strokeWidth="2" />
            <line x1={x - 10} y1={bodyY} x2={x - 22} y2={bodyY - 24} stroke={dark} strokeWidth="5" strokeLinecap="round" />
            <line x1={x + 10} y1={bodyY} x2={x + 22} y2={bodyY - 24} stroke={dark} strokeWidth="5" strokeLinecap="round" />
          </g>
        );
      })}
    </g>
  );
};

const AngelaMerkel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* briefcase */}
      <rect x="120" y="180" width="90" height="60" rx="4" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="168" width="30" height="14" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="120" y1="205" x2="210" y2="205" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* glasses */}
      <circle cx="245" cy="155" r="16" fill="none" stroke={dark} strokeWidth="4" />
      <circle cx="277" cy="155" r="16" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M229 152 Q261 140 293 152" fill="none" stroke={dark} strokeWidth="4" />
      {/* simple molecular diagram */}
      <circle cx="245" cy="210" r="6" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="275" cy="195" r="6" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="275" cy="225" r="6" fill={light} stroke={dark} strokeWidth="2" />
      <line x1="245" y1="210" x2="275" y2="195" stroke={dark} strokeWidth="2" />
      <line x1="245" y1="210" x2="275" y2="225" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const FilosofiaAlemana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* stack of thick books */}
      <rect x="120" y="205" width="90" height="20" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="128" y="185" width="80" height="20" fill={dark} stroke={dark} strokeWidth="2" />
      <rect x="122" y="165" width="85" height="20" fill={light} stroke={dark} strokeWidth="2" />
      {/* classical thinker's bust */}
      <path d="M270 240 L270 195 Q270 160 240 160 Q210 160 210 195 L210 240 Z" fill={light} stroke={dark} strokeWidth="3" />
      <circle cx="240" cy="140" r="26" fill={light} stroke={dark} strokeWidth="3" />
      <rect x="225" y="215" width="30" height="10" fill={dark} opacity="0.3" />
    </g>
  );
};

const KraftwerkMusicaElectronica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* geometric background */}
      <polygon points="90,240 200,90 310,240" fill={dark} opacity="0.15" />
      {/* synth body */}
      <rect x="120" y="170" width="160" height="60" rx="4" fill={dark} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={128 + i * 19} y="205" width="15" height="20" fill="#fff" stroke={dark} strokeWidth="1" />
      ))}
      {[140, 170, 200, 230, 260].map((x, i) => (
        <circle key={x} cx={x} cy="188" r="7" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const RelojCucu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* chalet-shaped carved case */}
      <path d="M160 240 L160 170 L200 130 L240 170 L240 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* clock face */}
      <circle cx="200" cy="200" r="24" fill={light} stroke={dark} strokeWidth="3" />
      <line x1="200" y1="200" x2="200" y2="186" stroke={dark} strokeWidth="2.5" />
      <line x1="200" y1="200" x2="210" y2="204" stroke={dark} strokeWidth="2.5" />
      {/* little door with the cuckoo bird peeking out */}
      <rect x="188" y="150" width="24" height="16" rx="3" fill={dark} />
      <circle cx="200" cy="152" r="6" fill={light} />
      <path d="M200 152 L212 150" stroke={dark} strokeWidth="2" strokeLinecap="round" />
      {/* pinecone weights */}
      <ellipse cx="175" cy="235" rx="6" ry="10" fill={dark} />
      <ellipse cx="225" cy="235" rx="6" ry="10" fill={dark} />
    </g>
  );
};

const CulturaDelPan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* wooden table */}
      <rect x="100" y="220" width="220" height="16" fill={wood} />
      {/* three differently shaped loaves */}
      <ellipse cx="145" cy="210" rx="35" ry="18" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M133 198 q12 6 0 10 q-12 -4 0 -10" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <path d="M195 220 Q195 175 225 175 Q255 175 255 220 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M205 200 L245 200 M205 210 L245 210" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="280" cy="212" rx="24" ry="16" fill={dark} opacity="0.85" />
    </g>
  );
};

const RIVER_WATER = "#4A7A9C";

const CastillosRin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* river */}
      <rect x="90" y="200" width="220" height="40" fill={RIVER_WATER} />
      <path d="M90 210 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={tint(RIVER_WATER, 0.3)} strokeWidth="2" />
      {/* terraced vineyard hillside */}
      <polygon points="90,200 90,160 220,140 220,200" fill={accentColor} opacity="0.5" />
      {[150, 165, 180].map((y) => (
        <line key={y} x1="95" y1={y} x2="215" y2={y - 8} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* castle on the cliff */}
      <polygon points="230,200 230,150 320,150 320,200" fill={dark} opacity="0.3" />
      <rect x="245" y="130" width="50" height="55" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="255" y="100" width="16" height="35" fill={light} stroke={dark} strokeWidth="2" />
      <polygon points="251,100 263,80 275,100" fill={dark} />
    </g>
  );
};

const KarlMarx: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  const wood = "#6B4423";
  return (
    <g>
      {/* desk */}
      <rect x="100" y="220" width="220" height="20" fill={wood} />
      {/* thick red book */}
      <rect x="150" y="160" width="110" height="60" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="160" width="14" height="60" fill={dark} opacity="0.4" />
      <line x1="205" y1="165" x2="205" y2="215" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      {/* quill */}
      <path d="M280 150 L230 210" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M280 150 Q296 132 288 115 Q272 127 268 148 Z" fill={light} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const EscarabajoVolkswagen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* rounded car body, side profile */}
      <path d="M110 210 Q110 150 170 140 Q200 130 230 140 Q290 150 290 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* windows */}
      <path d="M165 150 Q170 138 195 138 Q195 155 175 158 Z" fill={light} stroke={dark} strokeWidth="1.5" />
      <path d="M205 138 Q235 138 250 155 L215 158 Z" fill={light} stroke={dark} strokeWidth="1.5" />
      {/* wheels */}
      <circle cx="150" cy="210" r="20" fill={dark} />
      <circle cx="150" cy="210" r="8" fill={light} />
      <circle cx="250" cy="210" r="20" fill={dark} />
      <circle cx="250" cy="210" r="8" fill={light} />
      <line x1="115" y1="195" x2="285" y2="195" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

export const germanyIllustrations: Record<string, IllustrationDefinition> = {
  "muro-de-berlin": { component: MuroDeBerlin },
  oktoberfest: { component: Oktoberfest },
  "hermanos-grimm": { component: HermanosGrimm },
  autobahn: { component: Autobahn },
  beethoven: { component: Beethoven },
  "mercados-navidenos": { component: MercadosNavidenos },
  "gutenberg-imprenta": { component: GutenbergImprenta },
  bauhaus: { component: Bauhaus },
  "sistema-pfand": { component: SistemaPfand },
  "ley-pureza-cerveza": { component: LeyPurezaCerveza },
  neuschwanstein: { component: Neuschwanstein },
  "futbol-alemania": { component: FutbolAlemania },
  "angela-merkel": { component: AngelaMerkel },
  "filosofia-alemana": { component: FilosofiaAlemana },
  "kraftwerk-musica-electronica": { component: KraftwerkMusicaElectronica },
  "reloj-cucu": { component: RelojCucu },
  "cultura-del-pan": { component: CulturaDelPan },
  "castillos-rin": { component: CastillosRin },
  "karl-marx": { component: KarlMarx },
  "escarabajo-volkswagen": { component: EscarabajoVolkswagen },
};
