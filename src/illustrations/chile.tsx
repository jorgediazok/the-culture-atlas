import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RapaNui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const grass = "#4A8F4E";
  return (
    <g>
      {/* grassy hill */}
      <path d="M95 245 Q210 220 320 245 L320 250 L95 250 Z" fill={grass} />
      {/* moai: elongated head with deep brow ridge, long nose, thin lips */}
      <path d="M170 235 L170 130 Q170 95 205 92 Q240 95 240 130 L240 235 Z" fill={accentColor} stroke={dark} strokeWidth="4" />
      <rect x="164" y="140" width="82" height="16" fill={dark} />
      <path d="M195 156 L195 195 L215 195 L215 156 Z" fill={dark} opacity="0.85" />
      <ellipse cx="187" cy="150" rx="8" ry="6" fill={light} />
      <ellipse cx="223" cy="150" rx="8" ry="6" fill={light} />
      <rect x="188" y="210" width="34" height="8" rx="3" fill={dark} />
    </g>
  );
};

const Atacama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const night = "#1B2A4A";
  return (
    <g>
      {/* starry sky */}
      <rect x="95" y="80" width="225" height="120" fill={night} opacity="0.55" />
      {[[120, 100], [160, 90], [270, 95], [300, 115], [140, 130], [290, 145]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="#fff" opacity="0.9" />
      ))}
      {/* sand dunes */}
      <path d="M95 220 Q160 195 210 220 Q260 240 320 218 L320 250 L95 250 Z" fill={light} />
      {/* telescope on a tripod, angled up at the sky */}
      <path d="M205 210 L165 130 L182 122 L222 202 Z" fill="#fff" stroke={dark} strokeWidth="3" />
      <circle cx="171" cy="127" r="9" fill={dark} />
      <path d="M205 210 L185 240 M205 210 L205 244 M205 210 L225 240" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const PabloNeruda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const purple = "#8E5A9E";
  return (
    <g>
      {/* quill pen */}
      <path d="M225 100 Q255 108 235 140 L205 210 L192 206 L218 138 Q200 112 225 100 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="205" y1="210" x2="195" y2="232" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      {/* onion */}
      <path d="M120 210 Q108 185 130 165 Q150 150 168 165 Q186 185 174 210 Q147 226 120 210 Z" fill={purple} />
      <path d="M147 165 L142 150 M154 165 L160 148" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      {/* pair of socks */}
      <path d="M245 200 Q245 175 265 175 Q280 175 280 195 L280 220 Q280 235 262 235 Q245 235 245 218 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      <rect x="245" y="175" width="35" height="10" fill={dark} opacity="0.4" />
    </g>
  );
};

const Cueca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      {/* couple facing each other, each waving a white handkerchief */}
      <circle cx="155" cy="140" r="16" fill={skin} />
      <path d="M138 156 Q155 148 172 156 L166 225 L144 225 Z" fill={accentColor} />
      <path d="M148 160 Q120 150 108 128" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M100 122 Q108 116 118 124 Q112 132 100 122 Z" fill="#fff" stroke={dark} strokeWidth="1.5" />

      <circle cx="248" cy="140" r="16" fill={skin} />
      <path d="M228 158 Q248 146 268 158 L262 225 L234 225 Z" fill={dark} />
      <path d="M258 160 Q286 150 298 128" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M292 122 Q300 116 310 124 Q304 132 292 122 Z" fill="#fff" stroke={dark} strokeWidth="1.5" />
      {/* skirt hem flaring with the turn */}
      <path d="M144 225 Q155 245 166 225" fill={accentColor} opacity="0.8" />
    </g>
  );
};

const VinoChileno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const snow = "#F5F0E6";
  return (
    <g>
      {/* snow-capped Andes */}
      <polygon points="95,190 150,110 205,190" fill={dark} />
      <polygon points="150,110 165,135 135,135" fill={snow} />
      <polygon points="180,190 240,95 300,190" fill={dark} opacity="0.85" />
      <polygon points="240,95 258,125 222,125" fill={snow} />
      {/* rows of vineyards in the foreground */}
      {[200, 214, 228, 242].map((y, i) => (
        <line key={y} x1="90" y1={y} x2="325" y2={y} stroke={accentColor} strokeWidth="6" strokeLinecap="round" opacity={0.5 + i * 0.12} />
      ))}
    </g>
  );
};

const Terremotos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* ground line and seismic isolators at the base */}
      <path d="M95 240 Q210 232 320 240" stroke={dark} strokeWidth="3" fill="none" opacity="0.4" />
      {[170, 195, 220, 245].map((x) => (
        <ellipse key={x} cx={x} cy="226" rx="9" ry="6" fill={dark} />
      ))}
      {/* modern building, swaying, motion arcs showing the sway */}
      <path d="M175 224 L165 100 L245 100 L235 224 Z" fill={accentColor} transform="rotate(-4 200 224)" />
      <g transform="rotate(-4 200 224)">
        {[112, 132, 152, 172, 192].map((y) => (
          <rect key={y} x="180" y={y} width="40" height="10" fill={light} />
        ))}
      </g>
      <path d="M140 130 Q120 150 140 172" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M260 130 Q280 150 260 172" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    </g>
  );
};

const Completo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const avocado = "#6B9B3F";
  const tomato = "#D62828";
  return (
    <g>
      {/* bun */}
      <path d="M110 200 a90 34 0 0 1 180 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="200" rx="90" ry="14" fill={dark} />
      {/* sausage */}
      <path d="M120 195 a80 16 0 0 1 160 0 Z" fill="#B5651D" />
      {/* mashed avocado */}
      <path d="M125 188 Q160 168 200 186 Q240 168 275 188 L272 195 L128 195 Z" fill={avocado} />
      {/* chopped tomato */}
      {[145, 175, 205, 235, 265].map((x) => (
        <rect key={x} x={x} y="180" width="10" height="10" fill={tomato} transform={`rotate(${x % 30} ${x} 185)`} />
      ))}
      {/* mayonnaise squiggle on top */}
      <path d="M120 178 Q140 165 160 178 Q180 165 200 178 Q220 165 240 178 Q260 165 280 178" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const PatagoniaChilena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const snow = "#F5F0E6";
  const lake = "#3FBFC4";
  return (
    <g>
      {/* turquoise lake */}
      <ellipse cx="205" cy="232" rx="120" ry="18" fill={lake} />
      {/* three granite towers */}
      <polygon points="120,225 148,120 176,225" fill={dark} />
      <polygon points="148,120 156,140 140,140" fill={snow} />
      <polygon points="175,225 205,88 235,225" fill={accentColor} />
      <polygon points="205,88 215,112 195,112" fill={snow} />
      <polygon points="232,225 260,130 288,225" fill={dark} opacity="0.85" />
      <polygon points="260,130 268,150 252,150" fill={snow} />
    </g>
  );
};

const Cobre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.35);
  return (
    <g>
      {/* open-pit mine, terraced rings seen from above */}
      <ellipse cx="205" cy="165" rx="115" ry="78" fill={dark} />
      <ellipse cx="205" cy="165" rx="94" ry="63" fill={accentColor} />
      <ellipse cx="205" cy="165" rx="72" ry="47" fill={shade(accentColor, 0.15)} />
      <ellipse cx="205" cy="165" rx="50" ry="32" fill={light} opacity="0.9" />
      <ellipse cx="205" cy="165" rx="28" ry="17" fill={dark} opacity="0.8" />
      {/* access road spiraling down */}
      <path d="M205 87 Q290 100 295 165" fill="none" stroke="#fff" strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const VioletaParra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* folk guitar */}
      <path d="M140 165 Q120 165 120 190 Q120 216 148 216 Q176 216 176 190 Q176 170 158 165 Q176 156 168 130 Q156 118 144 130 Q136 148 140 165 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="148" cy="192" r="14" fill={dark} />
      <line x1="148" y1="130" x2="148" y2="95" stroke={dark} strokeWidth="7" />
      <line x1="142" y1="100" x2="135" y2="96" stroke={dark} strokeWidth="3" />
      <line x1="142" y1="112" x2="135" y2="109" stroke={dark} strokeWidth="3" />
      {/* colorful arpillera embroidery panel */}
      <rect x="215" y="120" width="90" height="90" fill="#F5EFE0" stroke={dark} strokeWidth="3" />
      <path d="M225 190 L245 155 L262 178 L280 140 L296 190 Z" fill={light} />
      <circle cx="285" cy="140" r="9" fill="#F4C430" />
      <path d="M225 200 L296 200" stroke="#D62828" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

export const chileIllustrations: Record<string, IllustrationDefinition> = {
  "rapa-nui": { component: RapaNui },
  atacama: { component: Atacama },
  "pablo-neruda": { component: PabloNeruda },
  cueca: { component: Cueca },
  "vino-chileno": { component: VinoChileno },
  terremotos: { component: Terremotos },
  completo: { component: Completo },
  "patagonia-chilena": { component: PatagoniaChilena },
  cobre: { component: Cobre },
  "violeta-parra": { component: VioletaParra },
};
