import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

// [ring, x, y] for each book in Borges's spiral, precomputed offline.
const BORGES_SPIRAL: [number, number, number][] = [
  [0, 276, 165], [0, 274.1, 154.9], [0, 268.5, 145.2], [0, 259.4, 136.6],
  [0, 247.4, 129.3], [0, 233, 123.9], [0, 216.9, 120.5], [0, 200, 119.4],
  [0, 183.1, 120.5], [0, 167, 123.9], [0, 152.6, 129.3], [0, 140.6, 136.6],
  [0, 131.5, 145.2], [0, 125.9, 154.9],
  [1, 256.2, 156.3], [1, 249.8, 147.2], [1, 239.5, 139.5], [1, 225.9, 133.9],
  [1, 210.2, 130.7], [1, 193.7, 130.4], [1, 177.7, 132.9], [1, 163.5, 137.9],
  [1, 152.3, 145.2], [1, 144.9, 154.1], [1, 142, 163.8],
  [2, 235.1, 153.4], [2, 225, 146.3], [2, 211.2, 142], [2, 195.6, 141.1],
  [2, 180.7, 144], [2, 168.8, 150], [2, 161.6, 158.3], [2, 160.2, 167.6],
  [3, 216, 156], [3, 204.1, 152], [3, 190.6, 153.1], [3, 180.7, 158.6],
  [3, 178.2, 166.7],
];

const Mate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* gourd with bombilla */}
      <path
        d="M155 185 C142 185 136 162 144 142 C152 122 218 122 226 142 C234 162 228 185 215 185 Z"
        fill={accentColor}
      />
      <ellipse cx="185" cy="185" rx="32" ry="9" fill={dark} />
      <rect x="196" y="88" width="11" height="70" rx="4" fill={dark} transform="rotate(12 201 123)" />
      <circle cx="211" cy="90" r="7" fill={light} />
      {/* thermos beside it */}
      <rect x="248" y="120" width="34" height="80" rx="10" fill={light} />
      <rect x="254" y="104" width="22" height="18" rx="4" fill={dark} />
      <rect x="248" y="150" width="34" height="8" fill={dark} opacity="0.4" />
    </g>
  );
};

const Asado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.55);
  const ember = tint(accentColor, 0.35);
  return (
    <g>
      {/* grill grate on legs */}
      <rect x="120" y="175" width="160" height="10" rx="4" fill={dark} />
      <path d="M130 185 L120 220" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <path d="M270 185 L280 220" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      {[135, 158, 181, 204, 227, 250].map((x) => (
        <line key={x} x1={x} y1="175" x2={x} y2="185" stroke={dark} strokeWidth="3" />
      ))}
      {/* cuts and chorizos sizzling on top */}
      {[145, 170, 195, 220, 245].map((x, i) => (
        <rect key={x} x={x} y="152" width="20" height="24" rx={i % 2 === 0 ? 10 : 4} fill={accentColor} />
      ))}
      {/* glowing coals beneath */}
      <ellipse cx="200" cy="200" rx="70" ry="10" fill={ember} opacity="0.5" />
      {/* rising smoke */}
      <path
        d="M155 150 C163 130 151 118 158 100 C168 116 180 116 176 96 C192 110 190 132 176 150"
        fill="none"
        stroke={light}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
  );
};

const Tango: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* the leader: dark suit, one leg stepping wide */}
      <circle cx="168" cy="98" r="13" fill={skin} />
      <path d="M156 112 L180 112 L188 175 L165 190 L148 175 Z" fill={dark} />
      <path d="M148 175 L120 210" stroke={dark} strokeWidth="12" strokeLinecap="round" />
      <path d="M165 190 L172 235" stroke={dark} strokeWidth="12" strokeLinecap="round" />
      {/* his raised, embracing arm */}
      <path d="M180 118 Q210 108 224 128" fill="none" stroke={dark} strokeWidth="10" strokeLinecap="round" />
      {/* the follower: dress with the classic kicked-up leg */}
      <circle cx="230" cy="104" r="12" fill={skin} />
      <path d="M220 117 L242 117 L248 168 Q234 182 216 168 Z" fill={accentColor} />
      <path d="M216 168 Q186 178 172 156" fill="none" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
      <path d="M234 168 L230 220" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
      {/* her arm resting on his shoulder */}
      <path d="M220 122 Q198 118 188 132" fill="none" stroke={light} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const Futbol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* goal frame and net */}
      <rect x="130" y="120" width="140" height="70" fill="none" stroke={dark} strokeWidth="7" />
      {[145, 160, 175, 190, 205, 220, 235, 250].map((x) => (
        <line key={x} x1={x} y1="120" x2={x} y2="190" stroke={dark} strokeWidth="1.2" opacity="0.5" />
      ))}
      {[130, 145, 160].map((y) => (
        <line key={y} x1="130" y1={y} x2="270" y2={y} stroke={dark} strokeWidth="1.2" opacity="0.5" />
      ))}
      {/* the ball mid-flight into the net */}
      <circle cx="200" cy="210" r="30" fill={light} stroke={dark} strokeWidth="4" />
      <polygon points="200,190 213,200 208,216 192,216 187,200" fill={accentColor} />
      <path d="M200 190 L200 210 M187 200 L200 210 L213 200" stroke={dark} strokeWidth="2" fill="none" />
      {/* celebrating flags either side */}
      <path d="M132 236 L132 200 L156 208 L132 216 Z" fill={accentColor} />
      <path d="M268 236 L268 200 L244 208 L268 216 Z" fill={dark} />
    </g>
  );
};

const Voseo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <path
        d="M124 100 h130 a16 16 0 0 1 16 16 v46 a16 16 0 0 1 -16 16 h-92 l-26 22 v-22 h-12 a16 16 0 0 1 -16 -16 v-46 a16 16 0 0 1 16 -16 Z"
        fill={accentColor}
      />
      <text x="189" y="140" fontSize="30" fontWeight="700" fill="#fff" textAnchor="middle">
        VOS
      </text>
      <path
        d="M226 148 h64 a12 12 0 0 1 12 12 v34 a12 12 0 0 1 -12 12 h-14 l24 20 v-20 h-74 a12 12 0 0 1 -12 -12 v-34 a12 12 0 0 1 12 -12 Z"
        fill={dark}
      />
      <text x="273" y="180" fontSize="16" fill={light} textAnchor="middle">
        ¿pensás?
      </text>
    </g>
  );
};

const CenarTarde: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* wall clock reading eleven */}
      <circle cx="200" cy="130" r="34" fill={light} stroke={dark} strokeWidth="5" />
      <line x1="200" y1="130" x2="200" y2="108" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="130" x2="216" y2="126" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <circle cx="200" cy="130" r="3" fill={dark} />
      {/* small table setting below, still going at that hour */}
      <ellipse cx="200" cy="215" rx="70" ry="10" fill={dark} opacity="0.5" />
      <circle cx="200" cy="205" r="24" fill={accentColor} />
      <rect x="150" y="170" width="8" height="46" rx="3" fill={light} />
      <path d="M146 170 h16 l-4 20 h-8 Z" fill={light} />
      {/* stars for the late hour */}
      {[[130, 90], [270, 100], [250, 70]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y - 5} L${x + 2} ${y - 1} L${x + 6} ${y} L${x + 2} ${y + 1} L${x} ${y + 5} L${x - 2} ${y + 1} L${x - 6} ${y} L${x - 2} ${y - 1} Z`} fill={light} />
      ))}
    </g>
  );
};

const DulceDeLeche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      {/* jar */}
      <path d="M162 130 h56 v10 l10 8 v56 a10 10 0 0 1 -10 10 h-56 a10 10 0 0 1 -10 -10 v-56 l10 -8 Z" fill={accentColor} />
      <rect x="158" y="112" width="64" height="20" rx="6" fill={dark} />
      <path d="M228 155 C244 163 244 178 232 188" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      {/* alfajores beside the jar */}
      <g transform="translate(255,175)">
        <ellipse rx="26" ry="10" fill={light} />
        <ellipse rx="26" ry="4" fill={dark} opacity="0.5" />
        <ellipse cy="-9" rx="26" ry="10" fill={light} />
      </g>
      <circle cx="255" cy="210" r="20" fill={light} />
      <ellipse cx="255" cy="210" rx="20" ry="6" fill={dark} opacity="0.5" />
    </g>
  );
};

const GauchosPampa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.55);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  return (
    <g>
      {/* endless plain */}
      <path d="M110 195 Q200 185 290 195 L290 220 L110 220 Z" fill={light} opacity="0.6" />
      {/* horse: elongated body, arched neck, distinct head, mane, tail, four legs */}
      <path d="M158 178 Q156 160 175 155 Q195 150 210 158 Q222 162 226 175 Q228 183 220 187 L168 189 Q158 187 158 178 Z" fill={dark} />
      {/* neck + head in profile: poll, muzzle and jaw read clearly as a horse, not a blob */}
      <path d="M212 160 Q218 145 232 140 Q244 142 250 152 Q253 158 249 162 L238 166 Q230 169 222 168 Q214 166 212 160 Z" fill={dark} />
      {/* ear */}
      <path d="M228 141 L232 128 L237 140 Z" fill={dark} />
      {/* mane */}
      <path d="M216 153 L221 145 M222 155 L227 147 M228 157 L233 150" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      {/* tail */}
      <path d="M160 176 Q148 180 145 195 Q152 188 160 186 Q150 196 150 206 Q158 194 164 186" fill={dark} />
      {/* four legs, offset front/back so the gait reads clearly */}
      <path d="M172 188 L168 214 M186 189 L184 216 M204 188 L208 214 M218 187 L224 213" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* gaucho rider, seated on the horse's back, poncho in the page accent color for contrast against the dark horse */}
      <circle cx="196" cy="120" r="10" fill={skin} />
      <path d="M187 120 a9 5.5 0 1 1 18 0 Z" fill={dark} />
      <path d="M177 131 Q196 122 215 131 L219 160 Q196 168 173 160 Z" fill={accentColor} />
      <path d="M196 131 L196 160" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const Fileteado: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.55);
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* signboard */}
      <rect x="118" y="96" width="164" height="120" rx="6" fill={light} stroke={dark} strokeWidth="4" />
      {/* filete curling flourishes and flower */}
      <g fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round">
        <path d="M200 150 C170 120 150 120 150 150 C150 180 180 180 200 150 C220 120 250 120 250 150 C250 180 230 180 200 150 Z" />
        <path d="M160 108 C170 118 180 118 190 110" />
        <path d="M240 108 C230 118 220 118 210 110" />
        <path d="M160 204 C170 194 180 194 190 202" />
        <path d="M240 204 C230 194 220 194 210 202" />
      </g>
      <circle cx="200" cy="150" r="11" fill={dark} stroke="none" />
      <circle cx="200" cy="150" r="5" fill={light} stroke="none" />
    </g>
  );
};

const DivanTerapia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  return (
    <g>
      {/* bookshelf backdrop */}
      {[126, 138, 150, 162].map((x, i) => (
        <rect key={x} x={x} y="96" width="10" height="30" fill={i % 2 === 0 ? dark : light} opacity="0.6" />
      ))}
      {/* wall clock */}
      <circle cx="255" cy="112" r="18" fill={light} />
      <line x1="255" y1="112" x2="255" y2="100" stroke={dark} strokeWidth="2.5" />
      <line x1="255" y1="112" x2="263" y2="112" stroke={dark} strokeWidth="2.5" />
      {/* the chaise longue */}
      <rect x="120" y="180" width="160" height="36" rx="14" fill={accentColor} />
      <rect x="110" y="150" width="30" height="66" rx="12" fill={dark} />
      {/* the reclining figure */}
      <circle cx="160" cy="168" r="13" fill={skin} />
      <path d="M172 172 Q225 168 262 176 Q262 190 225 192 Q190 192 172 186 Z" fill={dark} opacity="0.85" />
    </g>
  );
};

const Boligrafo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g transform="rotate(28 200 150)">
      <rect x="182" y="80" width="36" height="110" rx="8" fill={accentColor} />
      <rect x="182" y="80" width="36" height="26" rx="8" fill={dark} />
      <rect x="192" y="60" width="16" height="26" rx="4" fill={dark} />
      <polygon points="182,190 218,190 200,224" fill={dark} />
      <circle cx="200" cy="222" r="4" fill={light} />
      <path d="M200 226 q-4 16 -14 24" stroke={light} strokeWidth="4" strokeLinecap="round" fill="none" transform="rotate(-28 200 150)" />
    </g>
  );
};

const HuellaDactilar: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      {/* id card */}
      <rect x="128" y="100" width="144" height="112" rx="8" fill={light} stroke={dark} strokeWidth="3" />
      <line x1="144" y1="188" x2="256" y2="188" stroke={dark} strokeWidth="3" opacity="0.5" />
      <line x1="144" y1="198" x2="220" y2="198" stroke={dark} strokeWidth="3" opacity="0.3" />
      {/* the fingerprint whorls */}
      <g fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round">
        <path d="M170 130 a30 34 0 0 1 60 0" />
        <path d="M162 144 a38 40 0 0 1 76 4" />
        <path d="M168 165 q32 -18 64 0" />
        <path d="M175 180 q25 -13 50 0" />
      </g>
    </g>
  );
};

const Maradona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.85);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  return (
    <g>
      {/* jersey with the 10 */}
      <path d="M168 140 L168 200 Q200 210 232 200 L232 140 L212 132 Q200 140 188 132 Z" fill={light} stroke={dark} strokeWidth="3" />
      <text x="200" y="188" fontSize="34" fontWeight="700" fill={accentColor} textAnchor="middle">
        10
      </text>
      {/* head and raised arm lifting the cup */}
      <circle cx="200" cy="115" r="15" fill={skin} />
      <path d="M212 128 Q236 118 244 92" stroke={light} strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* the golden trophy */}
      <path d="M232 78 Q232 96 250 96 Q268 96 268 78 L264 78 Q264 88 250 88 Q236 88 236 78 Z" fill={dark} />
      <rect x="246" y="96" width="8" height="10" fill={dark} />
      <rect x="240" y="106" width="20" height="6" rx="2" fill={dark} />
    </g>
  );
};

const Borges: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* spiraling shelves of books receding into the library, positions
          precomputed — Math.cos/sin at render time isn't guaranteed
          bit-identical across server and client CPUs, which broke India's
          emblem the same way earlier this project. */}
      {BORGES_SPIRAL.map(([ring, x, y]) => {
        // Ring 0 is the widest, outermost arc (closest to the viewer); ring 3 is the
        // tightest, innermost one (deepest into the spiral). Shrinking size and fading
        // opacity as ring increases is what actually reads as "receding into the
        // distance" — same-sized, evenly-opaque bars at every ring just look like noise.
        const scale = 1 - ring * 0.16;
        const w = 7 * scale;
        const h = 20 * scale;
        return (
          <rect
            key={`${ring}-${x}-${y}`}
            x={x - w / 2}
            y={y - h / 2}
            width={w}
            height={h}
            fill={ring % 2 === 0 ? accentColor : dark}
            opacity={0.9 - ring * 0.18}
          />
        );
      })}
      <circle cx="200" cy="168" r="9" fill={light} />
    </g>
  );
};

const RockNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* stage spotlight */}
      <path d="M200 96 L150 200 L250 200 Z" fill={light} opacity="0.35" />
      {/* electric guitar */}
      <path d="M175 165 C155 165 148 190 165 210 C180 225 210 225 222 208 C235 190 225 165 200 165 Z" fill={accentColor} />
      <circle cx="196" cy="192" r="9" fill={dark} />
      <rect x="205" y="98" width="10" height="72" fill={dark} />
      <rect x="199" y="92" width="22" height="12" rx="3" fill={dark} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={219 + i * 3} y1="100" x2={219 + i * 3} y2="160" stroke={light} strokeWidth="1.5" />
      ))}
      {[210, 215, 220, 225].map((y) => (
        <line key={y} x1="207" y1={y} x2="213" y2={y} stroke={light} strokeWidth="1.5" opacity="0.7" />
      ))}
    </g>
  );
};

const CineOscar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* the statuette */}
      <rect x="190" y="150" width="18" height="40" fill={dark} />
      <circle cx="199" cy="128" r="17" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M188 143 L210 143 L206 152 L192 152 Z" fill={dark} />
      <rect x="180" y="190" width="38" height="9" rx="2" fill={dark} />
      {/* the film reel beside it */}
      <circle cx="260" cy="165" r="26" fill="none" stroke={light} strokeWidth="6" />
      <circle cx="260" cy="165" r="7" fill={light} />
      {/* six reel holes, precomputed around the hub so no trig runs at render time */}
      {[
        [275, 165],
        [267.5, 178],
        [252.5, 178],
        [245, 165],
        [252.5, 152],
        [267.5, 152],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={light} />
      ))}
    </g>
  );
};

const Iguazu: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  const jungle = shade(accentColor, 0.15);
  return (
    <g>
      {/* jungle framing the falls */}
      <path d="M105 200 Q130 150 105 105 L120 105 Q145 150 120 200 Z" fill={jungle} opacity="0.6" />
      <path d="M295 200 Q270 150 295 105 L280 105 Q255 150 280 200 Z" fill={jungle} opacity="0.6" />
      {/* multiple falls at varying heights */}
      {[
        [140, 100],
        [162, 88],
        [184, 104],
        [206, 82],
        [228, 98],
        [250, 92],
      ].map(([x, topY]) => (
        <polygon key={x} points={`${x},${topY} ${x + 14},${topY} ${x + 10},200 ${x + 4},200`} fill={accentColor} />
      ))}
      {/* mist rising at the base */}
      <ellipse cx="196" cy="202" rx="90" ry="14" fill={light} opacity="0.8" />
      <ellipse cx="196" cy="192" rx="60" ry="10" fill={light} opacity="0.5" />
    </g>
  );
};

const Evita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  return (
    <g>
      {/* balcony railing */}
      <rect x="130" y="196" width="140" height="10" fill={dark} />
      {[140, 156, 172, 188, 204, 220, 236, 252].map((x) => (
        <line key={x} x1={x} y1="176" x2={x} y2="196" stroke={dark} strokeWidth="4" />
      ))}
      {/* Evita, arms outstretched */}
      <circle cx="200" cy="120" r="14" fill={skin} />
      <path d="M186 134 L214 134 L220 196 L180 196 Z" fill={accentColor} />
      <path d="M186 138 Q160 130 148 108" stroke={accentColor} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M214 138 Q240 130 252 108" stroke={accentColor} strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* the crowd below */}
      {[145, 165, 185, 205, 225, 245, 265].map((x, i) => (
        <circle key={x} cx={x} cy={222 - (i % 2) * 4} r="7" fill={light} />
      ))}
    </g>
  );
};

const PeritoMoreno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.25);
  const light = tint(accentColor, 0.55);
  const water = shade(accentColor, 0.1);
  return (
    <g>
      {/* the lake */}
      <rect x="110" y="196" width="180" height="24" fill={water} opacity="0.5" />
      {/* the glacier face with crevasses */}
      <path d="M120 196 L135 110 L165 140 L190 96 L220 145 L250 108 L280 196 Z" fill={accentColor} />
      <path d="M165 140 L172 196 M220 145 L226 196 M190 96 L196 196" stroke={dark} strokeWidth="2.5" opacity="0.45" />
      {/* a chunk calving off into the water */}
      <polygon points="245,175 262,160 270,190 250,196" fill={light} />
      <ellipse cx="257" cy="200" rx="26" ry="6" fill={light} opacity="0.7" />
    </g>
  );
};

const Ushuaia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const water = shade(accentColor, 0.15);
  return (
    <g>
      {/* snowy mountains behind */}
      <path d="M110 195 L150 130 L180 195 Z" fill={light} opacity="0.7" />
      <path d="M230 195 L262 122 L294 195 Z" fill={light} opacity="0.7" />
      {/* the lighthouse on rocks */}
      <path d="M170 195 L184 195 L188 150 L216 150 L220 195 L234 195 L228 205 L176 205 Z" fill={dark} />
      <rect x="192" y="98" width="16" height="52" fill={accentColor} />
      <rect x="188" y="118" width="24" height="8" fill={light} />
      <path d="M188 98 h24 l-6 -14 h-12 Z" fill={dark} />
      <circle cx="200" cy="92" r="5" fill={light} />
      {/* water and a small boat */}
      <rect x="110" y="205" width="184" height="16" fill={water} opacity="0.5" />
      <path d="M240 208 L268 208 L262 216 L246 216 Z" fill={dark} />
      <line x1="254" y1="208" x2="254" y2="196" stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const argentinaIllustrations: Record<string, IllustrationDefinition> = {
  mate: { component: Mate },
  asado: { component: Asado },
  tango: { component: Tango },
  futbol: { component: Futbol },
  voseo: { component: Voseo },
  "cenar-tarde": { component: CenarTarde },
  "dulce-de-leche": { component: DulceDeLeche },
  "gauchos-pampa": { component: GauchosPampa },
  fileteado: { component: Fileteado },
  "divan-terapia": { component: DivanTerapia },
  boligrafo: { component: Boligrafo },
  "huella-dactilar": { component: HuellaDactilar },
  maradona: { component: Maradona },
  borges: { component: Borges },
  "rock-nacional": { component: RockNacional },
  "cine-oscar": { component: CineOscar },
  iguazu: { component: Iguazu },
  evita: { component: Evita },
  "perito-moreno": { component: PeritoMoreno },
  ushuaia: { component: Ushuaia },
};
