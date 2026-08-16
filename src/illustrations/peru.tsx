import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MachuPicchu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const fog = "#E8E4DC";
  return (
    <g>
      {/* mountain peaks behind */}
      <polygon points="95,220 150,110 205,220" fill={dark} opacity="0.55" />
      <polygon points="205,220 265,95 320,220" fill={dark} opacity="0.4" />
      {/* fog bands */}
      <rect x="90" y="150" width="230" height="16" fill={fog} opacity="0.7" />
      <rect x="90" y="180" width="230" height="10" fill={fog} opacity="0.5" />
      {/* stepped stone terraces of the citadel */}
      {[0, 1, 2, 3, 4].map((row) => (
        <rect
          key={row}
          x={130 + row * 8}
          y={205 - row * 16}
          width={140 - row * 16}
          height="14"
          fill={row % 2 === 0 ? accentColor : light}
        />
      ))}
      <rect x="165" y="115" width="40" height="20" fill={light} />
      <polygon points="163,115 185,98 207,115" fill={dark} />
    </g>
  );
};

const LineasNazca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const desert = "#D9BE8F";
  return (
    <g>
      {/* desert ground */}
      <rect x="95" y="80" width="225" height="170" fill={desert} />
      {/* hummingbird traced as a single continuous geoglyph line */}
      <path
        d="M120 140 Q150 130 165 148 Q178 138 205 142 Q195 155 178 158
           Q195 168 210 200 Q195 195 180 175
           Q170 195 155 220 Q158 190 165 168
           Q140 178 115 172 Q140 162 160 158
           Q135 150 120 140 Z"
        fill="none"
        stroke={dark}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="120" cy="140" r="4" fill={dark} />
    </g>
  );
};

const ImperioInca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const sky = tint(accentColor, 0.75);
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={sky} opacity="0.4" />
      {/* Andean mountains */}
      <polygon points="95,220 155,120 215,220" fill={dark} />
      <polygon points="180,220 250,100 320,220" fill={accentColor} />
      <polygon points="155,120 168,145 142,145" fill={light} />
      <polygon points="250,100 264,128 236,128" fill={light} />
      {/* stone road winding through */}
      <path d="M110 240 Q150 220 140 195 Q130 175 165 160 Q200 145 195 120 Q192 105 210 95" fill="none" stroke={light} strokeWidth="9" strokeLinecap="round" />
      <path d="M110 240 Q150 220 140 195 Q130 175 165 160 Q200 145 195 120 Q192 105 210 95" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="1 10" strokeLinecap="round" />
    </g>
  );
};

const PapaOriginaria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const purple = "#6B3FA0";
  const gold = "#D4A017";
  return (
    <g>
      {/* Andean fabric backdrop */}
      <rect x="100" y="180" width="215" height="55" fill={dark} opacity="0.25" />
      {[110, 145, 180, 215, 250, 285].map((x) => (
        <line key={x} x1={x} y1="180" x2={x} y2="235" stroke={dark} strokeWidth="3" opacity="0.3" />
      ))}
      {/* several potatoes, different shapes and colors */}
      <ellipse cx="150" cy="190" rx="26" ry="19" fill={accentColor} />
      <ellipse cx="205" cy="200" rx="20" ry="24" fill={purple} />
      <ellipse cx="255" cy="188" rx="24" ry="17" fill={gold} />
      <ellipse cx="180" cy="215" rx="18" ry="13" fill={light} />
      <ellipse cx="270" cy="215" rx="16" ry="12" fill={dark} />
      {[[144, 186], [212, 195], [251, 184]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2" fill={shade(accentColor, 0.5)} opacity="0.6" />
      ))}
    </g>
  );
};

const Ceviche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  const fish = "#F5EFE0";
  const onion = "#9B4F8C";
  const lime = "#8FBC3F";
  return (
    <g>
      {/* plate */}
      <ellipse cx="205" cy="180" rx="90" ry="42" fill={light} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="178" rx="68" ry="30" fill={accentColor} opacity="0.5" />
      {/* cubed raw fish */}
      {[[170, 170], [195, 185], [220, 165], [180, 195], [230, 190]].map(([x, y]) => (
        <rect key={x} x={x} y={y} width="18" height="18" rx="2" fill={fish} stroke={dark} strokeWidth="1.5" transform={`rotate(${x % 20} ${x} ${y})`} />
      ))}
      {/* red onion slivers */}
      <path d="M155 175 Q160 160 175 162 Q168 178 155 175 Z" fill={onion} />
      <path d="M245 200 Q252 186 267 190 Q258 205 245 200 Z" fill={onion} />
      {/* lime wedge */}
      <path d="M250 155 A20 20 0 0 1 270 175 L250 175 Z" fill={lime} stroke={shade(lime, 0.3)} strokeWidth="2" />
    </g>
  );
};

const Quechua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      {/* two speech bubbles */}
      <path d="M110 105 Q110 88 130 88 L195 88 Q215 88 215 105 Q215 122 195 122 L165 122 L150 138 L155 122 L130 122 Q110 122 110 105 Z" fill={accentColor} />
      <path d="M210 128 Q210 112 228 112 L280 112 Q298 112 298 128 Q298 144 280 144 L262 144 L272 160 L248 144 L228 144 Q210 144 210 128 Z" fill={dark} />
      {/* Andean stepped-key geometric pattern inside each */}
      {[130, 148, 166, 184].map((x) => (
        <rect key={x} x={x} y="100" width="10" height="10" fill={light} />
      ))}
      {[228, 244, 260, 276].map((x, i) => (
        <rect key={x} x={x} y={122 + (i % 2) * 8} width="9" height="9" fill={light} />
      ))}
    </g>
  );
};

const AmazoniaPeruana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.4);
  const river = "#5FA8D3";
  return (
    <g>
      <circle cx="125" cy="115" r="32" fill={dark} />
      <circle cx="150" cy="90" r="28" fill={accentColor} />
      <circle cx="120" cy="170" r="30" fill={accentColor} />
      <circle cx="285" cy="105" r="30" fill={accentColor} />
      <circle cx="265" cy="160" r="28" fill={dark} />
      <circle cx="300" cy="195" r="26" fill={light} opacity="0.85" />
      <circle cx="110" cy="220" r="24" fill={light} opacity="0.85" />
      <path
        d="M160 90 Q125 130 168 155 Q210 178 178 205 Q150 226 195 245"
        fill="none"
        stroke={river}
        strokeWidth="19"
        strokeLinecap="round"
      />
    </g>
  );
};

const Pisco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* coupe glass with white foam */}
      <path d="M170 130 L240 130 L212 180 L198 180 Z" fill={accentColor} opacity="0.85" />
      <path d="M168 125 Q205 138 242 125 L240 130 L170 130 Z" fill="#fff" stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="126" rx="37" ry="8" fill="#fff" />
      <line x1="205" y1="180" x2="205" y2="205" stroke={dark} strokeWidth="4" />
      <ellipse cx="205" cy="207" rx="20" ry="5" fill={dark} />
      {/* bottle beside it */}
      <path d="M260 235 L260 155 Q260 148 267 148 L283 148 Q290 148 290 155 L290 235 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      <rect x="268" y="128" width="14" height="22" fill={dark} />
    </g>
  );
};

const VargasLlosa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* stack of books */}
      <rect x="150" y="205" width="110" height="18" fill={dark} />
      <rect x="158" y="187" width="94" height="18" fill={accentColor} />
      <rect x="166" y="169" width="78" height="18" fill={light} />
      {/* quill beside the stack */}
      <path d="M270 100 Q295 108 278 138 L250 200 L238 196 L262 138 Q248 114 270 100 Z" fill={dark} />
      <line x1="250" y1="200" x2="240" y2="220" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const TextilesAndinos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const gold = "#D4A017";
  return (
    <g>
      {/* loom frame */}
      <rect x="105" y="95" width="10" height="150" fill={dark} />
      <rect x="300" y="95" width="10" height="150" fill={dark} />
      <rect x="100" y="95" width="220" height="10" fill={dark} />
      <rect x="100" y="235" width="220" height="10" fill={dark} />
      {/* half-woven geometric pattern */}
      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          {[0, 1, 2, 3, 4, 5].map((col) => (
            <rect
              key={col}
              x={125 + col * 30}
              y={115 + row * 24}
              width="26"
              height="20"
              fill={(row + col) % 3 === 0 ? accentColor : (row + col) % 3 === 1 ? gold : light}
            />
          ))}
        </g>
      ))}
      {/* loose unwoven threads below */}
      {[130, 160, 190, 220, 250, 280].map((x) => (
        <line key={x} x1={x} y1="235" x2={x} y2="248" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

export const peruIllustrations: Record<string, IllustrationDefinition> = {
  "machu-picchu": { component: MachuPicchu },
  "lineas-nazca": { component: LineasNazca },
  "imperio-inca": { component: ImperioInca },
  "papa-originaria": { component: PapaOriginaria },
  ceviche: { component: Ceviche },
  quechua: { component: Quechua },
  "amazonia-peruana": { component: AmazoniaPeruana },
  pisco: { component: Pisco },
  "vargas-llosa": { component: VargasLlosa },
  "textiles-andinos": { component: TextilesAndinos },
};
