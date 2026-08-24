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

const GabrielaMistral: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  const hills = tint(accentColor, 0.75);
  return (
    <g>
      {/* Elqui valley hills */}
      <path d="M90 150 Q160 110 230 145 Q280 168 320 140 L320 250 L90 250 Z" fill={hills} />
      {/* seated teacher: torso first so arms/head paint over the seam */}
      <path d="M170 140 L210 140 L226 228 L154 228 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* arms reaching toward the open book, originating inside the torso */}
      <path d="M172 142 Q150 165 158 180" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <path d="M208 142 Q230 165 222 180" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      {/* head overlaps well into the torso top edge */}
      <circle cx="190" cy="134" r="23" fill={skin} />
      {/* hair, centered inside the head's radius so it always attaches */}
      <circle cx="177" cy="126" r="9" fill={dark} />
      <path d="M167 128 Q167 108 190 108 Q213 108 213 128 Q201 116 190 116 Q179 116 167 128 Z" fill={dark} />
      {/* open book */}
      <path d="M150 175 L188 185 L188 200 L150 190 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <path d="M230 175 L192 185 L192 200 L230 190 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <line x1="188" y1="185" x2="192" y2="185" stroke={dark} strokeWidth="2" />
      {/* two children listening, heads overlapping into their seated bodies */}
      <ellipse cx="128" cy="222" rx="20" ry="16" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="128" cy="207" r="15" fill={skin} />
      <ellipse cx="258" cy="222" rx="20" ry="16" fill={light} stroke={dark} strokeWidth="2" />
      <circle cx="258" cy="207" r="15" fill={skin} />
    </g>
  );
};

const Mapuche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const skin = "#C68642";
  const gold = "#D4A017";
  const red = "#B23A34";
  return (
    <g>
      {/* loom frame */}
      <rect x="106" y="93" width="10" height="140" fill={dark} />
      <rect x="284" y="93" width="10" height="140" fill={dark} />
      <rect x="106" y="93" width="188" height="10" fill={dark} />
      <rect x="106" y="223" width="188" height="10" fill={dark} />
      {/* woven textile with a geometric nimin pattern */}
      <rect x="120" y="105" width="160" height="116" fill={light} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="120" y={105 + i * 29} width="160" height="10" fill={i % 2 === 0 ? accentColor : red} />
      ))}
      {[150, 190, 230].map((x) => (
        <polygon key={x} points={`${x},128 ${x + 15},153 ${x - 15},153`} fill={gold} />
      ))}
      {/* seated weaver in front of the loom, torso drawn before head/arms */}
      <path d="M165 190 L235 190 L245 250 L155 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* arm reaching up to the textile, starting inside the torso */}
      <path d="M225 195 Q246 182 240 158" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <rect x="232" y="149" width="18" height="8" rx="2" fill={gold} transform="rotate(-20 241 153)" />
      {/* head overlaps well into the torso */}
      <circle cx="200" cy="182" r="25" fill={skin} />
      <path d="M175 178 Q175 157 200 157 Q225 157 225 178 Q212 168 200 168 Q188 168 175 178 Z" fill={dark} />
    </g>
  );
};

const Chiloe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3E8FB0";
  const colors = [accentColor, "#C1440E", "#4FB0C6", "#E8A33D"];
  const houses = [
    { x: 100, w: 58, roofColor: colors[0] },
    { x: 168, w: 62, roofColor: colors[1] },
    { x: 240, w: 56, roofColor: colors[2] },
  ];
  return (
    <g>
      {/* water */}
      <rect x="90" y="205" width="230" height="45" fill={water} />
      {[105, 145, 185, 225, 265, 300].map((x) => (
        <path key={x} d={`M${x} 220 q8 6 16 0`} stroke="#fff" strokeWidth="2" fill="none" opacity="0.5" />
      ))}
      {houses.map((h, i) => {
        const bodyTop = 145 - i * 5;
        return (
          <g key={h.x}>
            {/* stilts start exactly at the house body's bottom edge, no gap */}
            <rect x={h.x + 9} y="205" width="7" height="35" fill={dark} />
            <rect x={h.x + h.w - 16} y="205" width="7" height="35" fill={dark} />
            {/* house body */}
            <rect x={h.x} y={bodyTop} width={h.w} height={205 - bodyTop} fill={colors[(i + 1) % colors.length]} stroke={dark} strokeWidth="2.5" />
            {/* roof sits flush on the body's top edge */}
            <polygon points={`${h.x - 6},${bodyTop} ${h.x + h.w / 2},${bodyTop - 30} ${h.x + h.w + 6},${bodyTop}`} fill={h.roofColor} stroke={dark} strokeWidth="2.5" />
            {/* door */}
            <rect x={h.x + h.w / 2 - 7} y={205 - 30} width="14" height="30" fill={dark} opacity="0.7" />
          </g>
        );
      })}
    </g>
  );
};

const Valparaiso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const hill = "#D8CBB0";
  const colors = ["#E85D75", "#4FB0C6", "#F2A541", accentColor, "#6A9F58"];
  const houses: [number, number, number, number][] = [
    [108, 195, 30, 40],
    [148, 168, 32, 45],
    [193, 152, 30, 50],
    [238, 147, 32, 48],
    [280, 158, 28, 42],
  ];
  return (
    <g>
      {/* steep hill */}
      <path d="M90 250 L90 160 Q200 90 320 140 L320 250 Z" fill={hill} />
      {/* colorful, mural-like house facades along the hillside */}
      {houses.map(([x, y, w, h], i) => (
        <g key={x}>
          <rect x={x} y={y} width={w} height={h} fill={colors[i % colors.length]} stroke={dark} strokeWidth="2" />
          <rect x={x + w * 0.3} y={y + h * 0.15} width={w * 0.25} height={h * 0.25} fill="#fff" opacity="0.6" />
        </g>
      ))}
      {/* funicular track */}
      <path d="M105 245 L235 130" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M113 245 L243 130" stroke={dark} strokeWidth="6" strokeLinecap="round" opacity="0.5" />
      {/* funicular car climbing the track */}
      <g transform="rotate(-40 170 190)">
        <rect x="150" y="172" width="40" height="36" rx="4" fill={accentColor} stroke={dark} strokeWidth="3" />
        <rect x="156" y="180" width="10" height="12" fill="#fff" />
        <rect x="174" y="180" width="10" height="12" fill="#fff" />
      </g>
    </g>
  );
};

const Curanto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const stone = "#6E6259";
  const shell = "#2C4A52";
  const potato = "#C9A66B";
  const leaf = "#3F7D42";
  return (
    <g>
      {/* pit */}
      <ellipse cx="205" cy="215" rx="115" ry="30" fill={dark} opacity="0.5" />
      <ellipse cx="205" cy="205" rx="100" ry="26" fill="#4A3B2A" />
      {/* hot stones */}
      {[[150, 205], [180, 215], [210, 203], [240, 213], [270, 206]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="10" fill={stone} />
      ))}
      {/* shellfish */}
      <ellipse cx="165" cy="192" rx="16" ry="10" fill={shell} transform="rotate(-15 165 192)" />
      <ellipse cx="245" cy="190" rx="16" ry="10" fill={shell} transform="rotate(15 245 190)" />
      {/* potatoes */}
      <ellipse cx="200" cy="188" rx="13" ry="10" fill={potato} />
      <ellipse cx="225" cy="196" rx="12" ry="9" fill={potato} />
      {/* big nalca leaf covering part of the pit */}
      <path d="M110 200 Q140 150 205 165 Q270 150 300 200 Q270 225 205 220 Q140 225 110 200 Z" fill={leaf} opacity="0.9" stroke={dark} strokeWidth="2" />
      {/* rising steam */}
      <path d="M170 160 Q160 130 175 105" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M210 160 Q200 125 215 95" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M250 160 Q240 130 255 105" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const RodeoChileno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  const skin = "#D9A46A";
  const horse = "#4A3B2A";
  const bull = "#3B2E2A";
  return (
    <g>
      {/* padded arena wall on the right, curving like a medialuna */}
      <path d="M295 85 L320 85 L320 250 L295 250 Q285 168 295 85 Z" fill={light} stroke={dark} strokeWidth="3" />
      {/* ground */}
      <path d="M90 245 L320 245" stroke={dark} strokeWidth="3" opacity="0.35" />
      {/* steer pinned against the wall */}
      <ellipse cx="278" cy="196" rx="28" ry="16" fill={bull} />
      <ellipse cx="300" cy="188" rx="13" ry="10" fill={bull} />
      <path d="M292 180 Q286 168 278 172" fill="none" stroke={bull} strokeWidth="5" strokeLinecap="round" />
      <path d="M308 180 Q314 168 322 172" fill="none" stroke={bull} strokeWidth="5" strokeLinecap="round" />
      <rect x="264" y="208" width="7" height="30" fill={bull} />
      <rect x="286" y="210" width="7" height="30" fill={bull} />
      {/* horse: neck/head and legs drawn first so the body ellipse absorbs the seams */}
      <path d="M228 172 Q252 158 272 145" fill="none" stroke={horse} strokeWidth="20" strokeLinecap="round" />
      <ellipse cx="280" cy="140" rx="16" ry="12" fill={horse} transform="rotate(-25 280 140)" />
      <polygon points="270,128 275,110 281,127" fill={horse} />
      <path d="M150 180 Q128 190 112 205" fill="none" stroke={horse} strokeWidth="14" strokeLinecap="round" />
      <rect x="146" y="185" width="8" height="60" fill={horse} />
      <rect x="166" y="188" width="8" height="57" fill={horse} />
      <rect x="206" y="188" width="8" height="57" fill={horse} />
      <rect x="226" y="185" width="8" height="60" fill={horse} />
      <ellipse cx="190" cy="185" rx="58" ry="24" fill={horse} />
      {/* mane along the neck, on top of the body */}
      <path d="M232 168 Q252 156 268 148" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      {/* rider seated on the horse, in the page accent color for contrast */}
      <path d="M182 155 L218 155 L214 200 L186 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="200" cy="153" r="17" fill={skin} />
      <ellipse cx="200" cy="140" rx="22" ry="7" fill={dark} />
      <path d="M188 140 Q200 118 212 140 Z" fill={dark} />
    </g>
  );
};

const Los33: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const skin = "#D9A46A";
  const helmet = "#F2A541";
  return (
    <g>
      {/* ground mound and mine shaft opening */}
      <ellipse cx="205" cy="230" rx="90" ry="16" fill={dark} opacity="0.5" />
      <ellipse cx="205" cy="222" rx="42" ry="12" fill="#2B2320" />
      {/* rescue capsule emerging from the shaft */}
      <line x1="205" y1="82" x2="205" y2="112" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="82" r="8" fill="none" stroke={dark} strokeWidth="3" />
      <rect x="185" y="112" width="40" height="108" rx="18" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="150" r="8" fill="#fff" opacity="0.8" />
      <rect x="188" y="180" width="34" height="8" fill={dark} opacity="0.6" />
      {/* miner 1, arm raised in celebration, torso drawn before head/arm */}
      <path d="M112 210 L142 210 L148 245 L106 245 Z" fill={dark} />
      <path d="M118 212 Q106 190 110 165" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="127" cy="206" r="21" fill={skin} />
      <path d="M108 198 Q127 182 146 198" fill="none" stroke={helmet} strokeWidth="10" strokeLinecap="round" />
      {/* miner 2, mirrored */}
      <path d="M264 210 L294 210 L300 245 L258 245 Z" fill={dark} />
      <path d="M288 212 Q300 190 296 165" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="279" cy="206" r="21" fill={skin} />
      <path d="M260 198 Q279 182 298 198" fill="none" stroke={helmet} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const Chilenismos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const other = "#9C6644";
  return (
    <g>
      {/* two people chatting, torsos drawn before heads */}
      <path d="M118 190 L158 190 L164 235 L112 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="138" cy="184" r="20" fill={skin} />
      <path d="M232 190 L272 190 L278 235 L226 235 Z" fill={other} stroke={dark} strokeWidth="2.5" />
      <circle cx="252" cy="184" r="20" fill={skin} />
      {/* big speech bubble with a Chilean slang word */}
      <path d="M120 90 Q100 90 100 115 Q100 140 120 140 L145 140 L150 158 L162 140 L280 140 Q300 140 300 115 Q300 90 280 90 Z" fill="#fff" stroke={dark} strokeWidth="3" />
      <text x="200" y="122" fontSize="30" fontWeight="700" fill={dark} textAnchor="middle">
        ¡CACHÁI!
      </text>
      {/* small tag bubbles with more slang */}
      <ellipse cx="118" cy="150" rx="26" ry="15" fill={other} opacity="0.85" />
      <text x="118" y="155" fontSize="13" fontWeight="700" fill="#fff" textAnchor="middle">
        PO
      </text>
      <ellipse cx="292" cy="160" rx="30" ry="15" fill={accentColor} opacity="0.85" />
      <text x="292" y="165" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">
        BACÁN
      </text>
    </g>
  );
};

const Humberstone: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9C08C";
  const sky = "#F2E8CF";
  const rust = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={sky} opacity="0.4" />
      <rect x="90" y="215" width="230" height="35" fill={sand} />
      {/* cracked desert ground */}
      <path d="M110 230 L130 236 L120 244" stroke={dark} strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M260 235 L280 228 L295 238" stroke={dark} strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* theater facade, roof pediment flush with the body's top edge */}
      <rect x="140" y="130" width="120" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="132,130 200,95 268,130" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* arched window openings */}
      <path d="M155 175 L155 150 Q155 138 167 138 Q179 138 179 150 L179 175 Z" fill="#2B2320" />
      <path d="M188 175 L188 150 Q188 138 200 138 Q212 138 212 150 L212 175 Z" fill="#2B2320" />
      <path d="M221 175 L221 150 Q221 138 233 138 Q245 138 245 150 L245 175 Z" fill="#2B2320" />
      {/* boarded double door */}
      <rect x="182" y="185" width="36" height="35" fill="#3B2E22" />
      <line x1="200" y1="185" x2="200" y2="220" stroke={dark} strokeWidth="2" />
      {/* rusted winding-tower structure beside the theater */}
      <path d="M280 220 L295 130 L310 220 Z" fill="none" stroke={rust} strokeWidth="4" />
      <line x1="284" y1="180" x2="306" y2="180" stroke={rust} strokeWidth="4" />
      <circle cx="295" cy="128" r="10" fill="none" stroke={rust} strokeWidth="4" />
    </g>
  );
};

const SurfPacifico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wave = "#1B7A8C";
  const waveLight = tint(accentColor, 0.5);
  const skin = "#D9A46A";
  const rock = "#6E6259";
  return (
    <g>
      {/* rocky coast in the background */}
      <polygon points="95,140 120,90 140,140" fill={rock} opacity="0.7" />
      {/* big curling Pacific wave */}
      <path d="M90 250 Q90 195 135 168 Q165 150 158 122 Q195 142 205 182 Q212 212 182 235 Q255 222 300 182 Q320 165 320 140 L320 250 Z" fill={wave} />
      <path d="M158 122 Q188 140 198 172 Q205 198 182 220" fill="none" stroke={waveLight} strokeWidth="6" strokeLinecap="round" opacity="0.8" />
      {/* foam along the crest */}
      <path d="M150 130 Q165 122 180 132" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.85" />
      {/* longboard, angled along the wave face */}
      <rect x="170" y="199" width="90" height="14" rx="7" fill={accentColor} stroke={dark} strokeWidth="3" transform="rotate(-15 215 206)" />
      {/* surfer: torso drawn before head/arms */}
      <path d="M195 150 L225 150 L232 205 L188 205 Z" fill={dark} />
      <path d="M197 155 Q170 145 150 155" stroke={skin} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M223 155 Q250 145 270 155" stroke={skin} strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="210" cy="145" r="20" fill={skin} />
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
  "gabriela-mistral": { component: GabrielaMistral },
  mapuche: { component: Mapuche },
  chiloe: { component: Chiloe },
  valparaiso: { component: Valparaiso },
  curanto: { component: Curanto },
  "rodeo-chileno": { component: RodeoChileno },
  "los-33": { component: Los33 },
  chilenismos: { component: Chilenismos },
  humberstone: { component: Humberstone },
  "surf-pacifico": { component: SurfPacifico },
};
