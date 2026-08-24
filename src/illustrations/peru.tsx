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

const LagoTiticacaUros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const reed = "#D9BE7A";
  const reedDark = shade(reed, 0.3);
  const sky = tint(accentColor, 0.8);
  return (
    <g>
      {/* sky and lake water */}
      <rect x="90" y="80" width="230" height="45" fill={sky} opacity="0.5" />
      <rect x="90" y="125" width="230" height="125" fill={accentColor} opacity="0.85" />
      <rect x="90" y="125" width="230" height="10" fill={light} opacity="0.6" />
      {/* distant shoreline hills */}
      <polygon points="90,128 140,100 190,128" fill={dark} opacity="0.35" />
      {/* small reed boat floating beside the island */}
      <path d="M245 205 Q255 190 268 205 Q280 218 300 210 Q292 222 270 222 Q250 222 245 205 Z" fill={reed} stroke={reedDark} strokeWidth="2" />
      {/* floating reed island base, irregular bundled edge */}
      <path
        d="M115 210 Q108 195 130 190 Q145 178 175 185 Q210 172 245 186 Q275 180 288 198 Q296 212 275 220 Q250 232 205 228 Q160 234 135 224 Q115 222 115 210 Z"
        fill={reed}
        stroke={reedDark}
        strokeWidth="3"
      />
      {/* reed hut on the island: walls then peaked roof */}
      <rect x="172" y="158" width="42" height="38" fill={light} stroke={reedDark} strokeWidth="2" />
      <polygon points="165,175 193,118 221,175" fill={reedDark} />
      {/* upright reed stalks poking up around the island */}
      <line x1="130" y1="188" x2="126" y2="160" stroke={reedDark} strokeWidth="4" strokeLinecap="round" />
      <line x1="262" y1="184" x2="268" y2="152" stroke={reedDark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Caral: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  const sky = tint(accentColor, 0.82);
  const sun = "#E8A33D";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={sky} opacity="0.45" />
      <circle cx="280" cy="112" r="20" fill={sun} opacity="0.85" />
      {/* distant desert hills */}
      <polygon points="90,235 150,205 210,235" fill={dark} opacity="0.25" />
      {/* desert ground */}
      <rect x="90" y="235" width="230" height="15" fill={dark} opacity="0.3" />
      {/* stepped pyramid, five tiers narrowing upward */}
      {[0, 1, 2, 3, 4].map((row) => {
        const w = 190 - row * 32;
        const x = 200 - w / 2;
        const y = 232 - row * 22;
        return (
          <rect key={row} x={x} y={y} width={w} height="24" fill={row % 2 === 0 ? accentColor : light} />
        );
      })}
      {/* staircase up the front face */}
      <polygon points="192,232 208,232 200,122" fill={dark} opacity="0.55" />
    </g>
  );
};

const SenorDeSipan: IllustrationComponent = ({ accentColor }) => {
  const gold = "#D4A017";
  const goldDark = shade(gold, 0.35);
  const dark = shade(accentColor, 0.5);
  return (
    <g>
      {/* feathered headdress fan, drawn first behind the mask */}
      <polygon
        points="140,118 158,60 172,100 185,52 200,98 215,52 228,100 242,60 260,118"
        fill={accentColor}
        stroke={goldDark}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* round ear ornaments, drawn before the face so it absorbs the seam */}
      <circle cx="135" cy="160" r="34" fill={gold} stroke={goldDark} strokeWidth="3" />
      <circle cx="265" cy="160" r="34" fill={gold} stroke={goldDark} strokeWidth="3" />
      <circle cx="135" cy="160" r="12" fill={dark} />
      <circle cx="265" cy="160" r="12" fill={dark} />
      {/* golden face plate, straight-edged trapezoid, painted over the ear-ornament seams */}
      <polygon points="140,110 260,110 235,215 165,215" fill={gold} stroke={goldDark} strokeWidth="4" strokeLinejoin="round" />
      {/* eyes */}
      <ellipse cx="172" cy="150" rx="12" ry="7" fill={dark} />
      <ellipse cx="228" cy="150" rx="12" ry="7" fill={dark} />
      {/* nose bridge and hanging nariguera ornament */}
      <rect x="194" y="150" width="12" height="30" fill={goldDark} />
      <path d="M180 190 Q200 215 220 190 L212 190 Q200 202 188 190 Z" fill={goldDark} />
    </g>
  );
};

const BoomGastronomico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A066";
  const food = "#C9483A";
  const herb = "#5C9B4B";
  return (
    <g>
      {/* counter and plate */}
      <rect x="110" y="215" width="200" height="18" fill={dark} opacity="0.5" />
      <ellipse cx="188" cy="209" rx="42" ry="14" fill="#fff" stroke={dark} strokeWidth="2" />
      <ellipse cx="188" cy="205" rx="30" ry="9" fill={light} opacity="0.6" />
      <circle cx="182" cy="207" r="12" fill={food} />
      <path d="M200 200 Q212 198 214 210 Q206 214 198 208 Z" fill={herb} />
      {/* strumming arm attaches inside the torso, torso painted after covers the seam */}
      <path d="M215 150 L245 165 L238 195 L228 208" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      {/* chef torso/apron, straight-edged trapezoid */}
      <polygon points="160,110 230,110 250,215 140,215" fill={accentColor} />
      {/* head, painted last to cover the torso-head seam */}
      <circle cx="195" cy="105" r="22" fill={skin} />
      {/* toque hat band and puffy top */}
      <rect x="173" y="75" width="44" height="20" fill="#fff" stroke={dark} strokeWidth="2" />
      <ellipse cx="195" cy="65" rx="30" ry="22" fill="#fff" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Marinera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A066";
  const hat = "#8B6F47";
  return (
    <g>
      {/* female dancer's raised arm, attaches inside her skirt before the skirt is painted over it */}
      <path d="M150 132 L120 88 L85 55" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="85,55 65,45 78,68" fill="#fff" stroke={dark} strokeWidth="2" strokeLinejoin="round" />
      {/* her flowing skirt, straight-edged trapezoid, painted over the arm's shoulder seam */}
      <polygon points="140,110 172,110 200,235 112,235" fill={accentColor} />
      <path d="M122 205 Q156 218 190 205" fill="none" stroke={light} strokeWidth="6" strokeLinecap="round" />
      <circle cx="156" cy="108" r="18" fill={skin} />

      {/* male dancer's raised arm */}
      <path d="M250 132 L280 88 L315 55" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="315,55 335,45 322,68" fill="#fff" stroke={dark} strokeWidth="2" strokeLinejoin="round" />
      {/* his poncho, painted over the arm's shoulder seam */}
      <polygon points="228,110 260,110 288,235 200,235" fill={dark} />
      <circle cx="244" cy="108" r="18" fill={skin} />
      {/* wide-brim hat, sits on top of his head */}
      <ellipse cx="244" cy="92" rx="30" ry="8" fill={hat} />
      <ellipse cx="244" cy="82" rx="16" ry="14" fill={hat} />
    </g>
  );
};

const CaballoDePaso: IllustrationComponent = ({ accentColor }) => {
  const horse = "#6B4530";
  const horseDark = shade(horse, 0.35);
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A066";
  return (
    <g>
      {/* ground shadow */}
      <ellipse cx="195" cy="248" rx="100" ry="8" fill={horseDark} opacity="0.2" />
      {/* tail, drawn before the body so the body's fill absorbs its base */}
      <path d="M135 180 Q100 200 85 240 Q112 226 132 206 Z" fill={horseDark} />
      {/* neck and head, drawn before the body absorbs the neck base and after the head absorbs the tip */}
      <polygon points="190,158 222,163 250,100 228,110" fill={horse} />
      {/* four legs in a walking gait, drawn before the body so it covers their tops */}
      <line x1="150" y1="187" x2="146" y2="245" stroke={horseDark} strokeWidth="10" strokeLinecap="round" />
      <line x1="175" y1="191" x2="180" y2="245" stroke={horse} strokeWidth="10" strokeLinecap="round" />
      <line x1="205" y1="191" x2="200" y2="245" stroke={horse} strokeWidth="10" strokeLinecap="round" />
      <line x1="230" y1="187" x2="236" y2="245" stroke={horseDark} strokeWidth="10" strokeLinecap="round" />
      {/* body, painted after the legs, neck, and tail to absorb all their seams */}
      <ellipse cx="190" cy="175" rx="75" ry="35" fill={horse} />
      {/* head, painted after the neck to absorb its tip */}
      <ellipse cx="255" cy="95" rx="20" ry="14" fill={horse} />
      <polygon points="248,84 253,68 258,84" fill={horse} />
      {/* mane along the neck */}
      <path d="M228 112 Q238 128 224 148 Q234 132 220 118 Z" fill={horseDark} />
      {/* rider, painted last, sitting on top of the horse's back */}
      <polygon points="175,130 210,130 220,190 165,190" fill={accentColor} />
      <circle cx="192" cy="112" r="16" fill={skin} />
      <ellipse cx="192" cy="98" rx="18" ry="7" fill={dark} />
      <line x1="150" y1="150" x2="130" y2="200" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <line x1="230" y1="150" x2="248" y2="200" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const CanonDelColca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.45);
  const sky = tint(accentColor, 0.82);
  const river = "#5FA8D3";
  const white = "#F5F0E6";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={sky} opacity="0.5" />
      {/* two canyon walls forming a deep V-shaped gorge */}
      <polygon points="90,90 200,250 90,250" fill={dark} />
      <polygon points="320,90 200,250 320,250" fill={accentColor} />
      <polygon points="90,90 150,90 195,225 175,235" fill={light} opacity="0.4" />
      {/* river at the bottom of the canyon */}
      <path d="M175 250 Q200 235 225 250" fill="none" stroke={river} strokeWidth="10" strokeLinecap="round" />
      {/* condor, a single unified silhouette, wings extended in a glide */}
      <path
        d="M200 140 Q160 118 108 130 Q150 138 178 150 Q150 158 122 176 Q160 168 196 152 L200 168 L204 152 Q240 168 278 176 Q250 158 222 150 Q250 138 292 130 Q240 118 200 140 Z"
        fill={dark}
      />
      <path d="M192 150 Q200 158 208 150 Q204 162 200 168 Q196 162 192 150 Z" fill={white} />
    </g>
  );
};

const IntiRaymi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const gold = "#E8A33D";
  const skin = "#D9A066";
  const stone = "#8C8272";
  return (
    <g>
      {/* Sacsayhuamán stone-wall backdrop */}
      <polygon points="90,250 90,205 150,190 150,250" fill={stone} opacity="0.5" />
      <polygon points="240,250 240,190 320,205 320,250" fill={stone} opacity="0.5" />
      {/* sun disc with rays, above the raised hands */}
      <circle cx="195" cy="55" r="24" fill={gold} />
      <polygon points="195,15 202,32 188,32" fill={gold} />
      <polygon points="150,45 168,52 160,66" fill={gold} />
      <polygon points="240,45 222,52 230,66" fill={gold} />
      {/* both arms raised, attaching inside the tunic before it is painted over them */}
      <path d="M172 145 L140 90 L110 55" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M218 145 L250 90 L280 55" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      {/* tunic, straight-edged trapezoid, painted over both shoulder seams */}
      <polygon points="170,125 220,125 240,235 150,235" fill={accentColor} />
      {/* head, painted last to cover the torso-head seam */}
      <circle cx="195" cy="120" r="22" fill={skin} />
      {/* feathered headdress fanning from the head's crown */}
      <polygon points="170,105 150,50 182,100" fill={dark} />
      <polygon points="182,100 195,25 208,100" fill={gold} />
      <polygon points="208,100 240,50 220,105" fill={dark} />
    </g>
  );
};

const ChichaCumbia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.55);
  const skin = "#D9A066";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* speaker stack behind the guitarist */}
      <rect x="255" y="150" width="60" height="45" fill={dark} />
      <rect x="255" y="198" width="60" height="45" fill={dark} />
      <circle cx="285" cy="172" r="15" fill={light} />
      <circle cx="285" cy="220" r="15" fill={light} />
      {/* strumming arm, attaches inside the torso before the torso is painted over it */}
      <path d="M175 150 L150 175 L145 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      {/* torso, straight-edged trapezoid, painted over the arm's shoulder seam */}
      <polygon points="165,120 215,120 230,235 150,235" fill={accentColor} />
      {/* head, painted last to cover the torso-head seam */}
      <circle cx="190" cy="108" r="20" fill={skin} />
      {/* guitar neck resting against the torso, then headstock */}
      <rect x="150" y="90" width="10" height="80" fill={wood} transform="rotate(-18 155 130)" />
      <rect x="128" y="70" width="18" height="14" fill={dark} transform="rotate(-18 155 130)" />
      {/* waisted figure-eight guitar body, drawn last in front of the torso */}
      <path
        d="M138 175 Q118 175 118 198 Q118 216 140 220 Q135 232 150 244 Q165 232 158 220 Q182 214 182 194 Q182 172 160 172 Q149 168 138 175 Z"
        fill={wood}
        stroke={dark}
        strokeWidth="3"
      />
      <circle cx="150" cy="204" r="12" fill={dark} />
    </g>
  );
};

const Paracas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const sand = "#D9BE8F";
  const gold = "#D4A017";
  return (
    <g>
      {/* desert ground and sun */}
      <rect x="90" y="80" width="230" height="170" fill={sand} opacity="0.5" />
      <circle cx="280" cy="110" r="18" fill={gold} opacity="0.8" />
      <ellipse cx="200" cy="248" rx="110" ry="10" fill={dark} opacity="0.2" />
      {/* rounded conical funerary bundle */}
      <path
        d="M200 100 Q150 108 140 160 Q132 205 150 235 Q175 248 200 248 Q225 248 250 235 Q268 205 260 160 Q250 108 200 100 Z"
        fill={light}
        stroke={dark}
        strokeWidth="3"
      />
      {/* woven false head on top of the bundle */}
      <circle cx="200" cy="95" r="20" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* embroidered textile bands wrapped around the bundle */}
      <path d="M144 155 Q200 168 256 155" fill="none" stroke={accentColor} strokeWidth="10" />
      <path d="M138 190 Q200 205 262 190" fill="none" stroke={dark} strokeWidth="10" />
      {/* small embroidered mythical-animal motif */}
      <path d="M186 218 Q200 208 214 218 Q206 226 200 220 Q194 226 186 218 Z" fill={gold} />
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
  "lago-titicaca-uros": { component: LagoTiticacaUros },
  caral: { component: Caral },
  "senor-de-sipan": { component: SenorDeSipan },
  "boom-gastronomico": { component: BoomGastronomico },
  marinera: { component: Marinera },
  "caballo-de-paso": { component: CaballoDePaso },
  "canon-del-colca": { component: CanonDelColca },
  "inti-raymi": { component: IntiRaymi },
  "chicha-cumbia": { component: ChichaCumbia },
  paracas: { component: Paracas },
};
