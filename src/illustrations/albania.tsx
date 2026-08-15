import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Bunkers: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const field = "#4C7A3D";
  const fieldLight = tint(field, 0.3);
  return (
    <g>
      {/* green field */}
      <rect x="90" y="205" width="220" height="45" fill={fieldLight} />
      <path d="M90 210 q55 -14 110 0 t110 0 v40 h-220 Z" fill={field} opacity="0.6" />
      {/* round concrete bunker dome */}
      <path d="M130 205 a70 55 0 0 1 140 0 Z" fill={accentColor} stroke={dark} strokeWidth="5" />
      {/* gun slit */}
      <rect x="188" y="178" width="24" height="10" rx="2" fill={dark} />
      {/* seam line on the concrete */}
      <path d="M150 205 Q150 165 200 155 Q250 165 250 205" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const UMBRELLAS: [number, string][] = [
  [140, "#E63946"],
  [200, "#F4A300"],
  [260, "#2A9D8F"],
];

const Riviera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const sand = "#E8D5A8";
  return (
    <g>
      {/* mountains behind the bay */}
      <polygon points="100,175 150,110 200,175" fill={dark} opacity="0.55" />
      <polygon points="180,175 240,100 300,175" fill={dark} opacity="0.75" />
      {/* turquoise water */}
      <rect x="90" y="175" width="220" height="45" fill={accentColor} />
      <path d="M90 185 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={light} strokeWidth="4" />
      {/* sand */}
      <rect x="90" y="220" width="220" height="25" fill={sand} />
      {/* colorful umbrellas */}
      {UMBRELLAS.map(([x, c]) => (
        <g key={x}>
          <line x1={x} y1="205" x2={x} y2="230" stroke={dark} strokeWidth="3" />
          <path d={`M${x - 20} 205 Q${x} 185 ${x + 20} 205 Z`} fill={c} />
        </g>
      ))}
    </g>
  );
};

const Besa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const stone = tint(shade(accentColor, 0.15), 0.6);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  const skinDark = shade(skin, 0.15);
  return (
    <g>
      {/* traditional stone house behind */}
      <rect x="120" y="130" width="160" height="70" fill={stone} stroke={dark} strokeWidth="3" />
      <polygon points="112,130 200,85 288,130" fill={dark} />
      <rect x="192" y="160" width="20" height="40" fill={dark} opacity="0.6" />
      {/* two forearms meeting at chest height, clasping hands */}
      <path d="M110 218 L178 210" stroke={skin} strokeWidth="20" strokeLinecap="round" />
      <path d="M290 218 L222 210" stroke={skinDark} strokeWidth="20" strokeLinecap="round" />
      {/* clasped fists */}
      <path d="M178 197 Q200 188 222 197 L222 224 Q200 234 178 224 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="192" y1="196" x2="192" y2="226" stroke={dark} strokeWidth="2" opacity="0.4" />
      <line x1="208" y1="196" x2="208" y2="226" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const Aguila: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const red = "#DA291C";
  return (
    <g>
      {/* red field */}
      <circle cx="200" cy="165" r="95" fill={red} />
      {/* wings spread wide */}
      <polygon points="200,190 120,120 130,175 90,155 115,205 150,205" fill={dark} />
      <polygon points="200,190 280,120 270,175 310,155 285,205 250,205" fill={dark} />
      {/* body */}
      <polygon points="185,150 215,150 220,215 200,235 180,215" fill={dark} />
      {/* two heads with beaks */}
      <circle cx="178" cy="140" r="16" fill={dark} />
      <polygon points="160,140 145,135 160,150" fill={dark} />
      <circle cx="222" cy="140" r="16" fill={dark} />
      <polygon points="240,140 255,135 240,150" fill={dark} />
    </g>
  );
};

const GJIROKASTRA_HOUSES = [
  { x: 100, y: 190, w: 70, h: 55 },
  { x: 160, y: 160, w: 70, h: 70 },
  { x: 220, y: 130, w: 70, h: 85 },
];

const GjirokastraBerat: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const white = "#F5F0E6";
  const roof = shade(accentColor, 0.25);
  return (
    <g>
      {/* steep hillside */}
      <polygon points="90,250 320,250 320,160 90,235" fill={accentColor} opacity="0.3" />
      {GJIROKASTRA_HOUSES.map((h) => (
        <g key={h.x}>
          <rect x={h.x} y={h.y} width={h.w} height={h.h} fill={white} stroke={dark} strokeWidth="2" />
          <polygon points={`${h.x - 6},${h.y} ${h.x + h.w / 2},${h.y - 20} ${h.x + h.w + 6},${h.y}`} fill={roof} />
          {[0, 1, 2].map((row) =>
            [0, 1].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={h.x + 10 + col * (h.w - 30)}
                y={h.y + 12 + row * 18}
                width="10"
                height="12"
                fill={dark}
              />
            ))
          )}
        </g>
      ))}
    </g>
  );
};

const SINGER_POSITIONS: [number, number][] = [
  [200, 110],
  [255, 130],
  [275, 185],
  [235, 225],
  [165, 225],
  [125, 185],
  [145, 130],
];

const IsoPolifonia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* village square ground */}
      <ellipse cx="200" cy="178" rx="110" ry="70" fill={accentColor} opacity="0.15" />
      {SINGER_POSITIONS.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="14" fill={skin} />
          <path d={`M${x - 14} ${y + 30} Q${x} ${y + 8} ${x + 14} ${y + 30} Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const Skanderbeg: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const stone = tint(shade(accentColor, 0.15), 0.55);
  return (
    <g>
      {/* stone pedestal */}
      <rect x="150" y="215" width="100" height="35" fill={stone} stroke={dark} strokeWidth="3" />
      <rect x="140" y="205" width="120" height="14" fill={dark} />
      {/* helmet dome */}
      <path d="M160 205 a40 38 0 0 1 80 0 Z" fill={accentColor} stroke={dark} strokeWidth="4" />
      {/* nose guard */}
      <rect x="194" y="205" width="12" height="30" fill={dark} />
      {/* thick goat horns, sweeping outward almost sideways from the helmet base */}
      <path d="M175 180 Q145 178 118 165 Q108 158 112 148 Q135 158 165 172 Z" fill={dark} />
      <path d="M225 180 Q255 178 282 165 Q292 158 288 148 Q265 158 235 172 Z" fill={dark} />
    </g>
  );
};

const Raki: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* wooden table */}
      <rect x="100" y="220" width="220" height="16" fill={wood} />
      {/* door frame behind */}
      <rect x="230" y="90" width="70" height="140" fill="none" stroke={dark} strokeWidth="5" opacity="0.5" />
      {/* homemade bottle */}
      <path d="M170 220 L170 165 Q170 155 178 150 L178 130 L192 130 L192 150 Q200 155 200 165 L200 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* two small glasses */}
      <path d="M130 220 L134 195 L156 195 L160 220 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M205 220 L209 200 L227 200 L231 220 Z" fill={light} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Byrek: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* whole pie, spiral pattern */}
      <circle cx="200" cy="175" r="75" fill={accentColor} stroke={dark} strokeWidth="4" />
      <path d="M200 175 m-55 0 a55 55 0 1 1 110 0" fill="none" stroke={dark} strokeWidth="4" opacity="0.6" />
      <path d="M200 175 m-38 0 a38 38 0 1 1 76 0" fill="none" stroke={dark} strokeWidth="4" opacity="0.6" />
      <path d="M200 175 m-20 0 a20 20 0 1 1 40 0" fill="none" stroke={dark} strokeWidth="4" opacity="0.6" />
      {/* one slice pulled out, cut into a triangle */}
      <polygon points="200,175 275,155 285,205" fill={light} stroke={dark} strokeWidth="3" />
    </g>
  );
};

const MadreTeresa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const white = "#F5F0E6";
  return (
    <g>
      {/* veiled figure, serene silhouette */}
      <path d="M200 250 Q150 250 150 210 Q150 165 175 150 Q170 130 200 122 Q230 130 225 150 Q250 165 250 210 Q250 250 200 250 Z" fill={accentColor} opacity="0.85" />
      <path d="M182 155 Q200 170 218 155" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      {/* white dove flying above */}
      <ellipse cx="200" cy="105" rx="16" ry="8" fill={white} stroke={dark} strokeWidth="1.5" transform="rotate(-10 200 105)" />
      <circle cx="216" cy="100" r="5" fill={white} stroke={dark} strokeWidth="1.5" />
      <path d="M200 105 Q180 95 165 100 Q182 104 192 110 Z" fill={white} stroke={dark} strokeWidth="1.2" />
      <path d="M204 108 Q190 118 178 128 Q195 120 208 114 Z" fill={white} stroke={dark} strokeWidth="1.2" opacity="0.8" />
    </g>
  );
};

const MeshariBuzuku: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const paper = tint(shade(accentColor, 0.1), 0.65);
  return (
    <g>
      <path d="M110 130 L200 118 L200 225 L110 240 Z" fill={paper} stroke={dark} strokeWidth="2" />
      <path d="M200 118 L290 130 L290 240 L200 225 Z" fill={tint(paper, 0.15)} stroke={dark} strokeWidth="2" />
      <line x1="200" y1="118" x2="200" y2="225" stroke={dark} strokeWidth="2.5" />
      {[145, 165, 185].map((y) => (
        <line key={`l-${y}`} x1="125" y1={y} x2="180" y2={y - 3} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      {[150, 170, 190].map((y) => (
        <line key={`r-${y}`} x1="220" y1={y} x2="270" y2={y + 3} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* worn, torn edge on the left page */}
      <path d="M110 130 L118 140 L112 152 L120 165 L114 178 L122 195 L110 240" fill="none" stroke={dark} strokeWidth="1" opacity="0.3" />
    </g>
  );
};

const MANASTIR_FOREIGN_GLYPHS = [
  { char: "Α", x: 130, y: 125, rot: -20 },
  { char: "ا", x: 160, y: 115, rot: 15 },
  { char: "Ж", x: 275, y: 200, rot: -10 },
];

const AlfabetoManastir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* baseline the letters are aligning to */}
      <line x1="110" y1="175" x2="290" y2="175" stroke={dark} strokeWidth="2" opacity="0.3" />
      {MANASTIR_FOREIGN_GLYPHS.map((g) => (
        <text
          key={g.char}
          x={g.x}
          y={g.y}
          fontSize="26"
          fontWeight="700"
          fill={light}
          fontFamily="serif"
          opacity="0.5"
          transform={`rotate(${g.rot} ${g.x} ${g.y})`}
        >
          {g.char}
        </text>
      ))}
      {["A", "B", "C", "D"].map((l, i) => (
        <text key={l} x={175 + i * 22} y="185" fontSize="26" fontWeight="700" fill={accentColor} fontFamily="serif">
          {l}
        </text>
      ))}
    </g>
  );
};

const KADARE_BOOKS = [
  { y: 205, w: 140, x: 130 },
  { y: 187, w: 120, x: 140 },
  { y: 169, w: 130, x: 135 },
];

const IsmailKadare: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  const fills = [accentColor, dark, light];
  return (
    <g>
      {KADARE_BOOKS.map((b, i) => (
        <rect key={b.y} x={b.x} y={b.y} width={b.w} height="18" fill={fills[i]} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* quill pen crossed over the stack */}
      <path d="M255 120 L165 205" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M255 120 Q270 105 262 90 Q248 100 245 118 Z" fill={light} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const DuaLipa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* mic stand */}
      <line x1="200" y1="250" x2="200" y2="150" stroke={dark} strokeWidth="5" />
      <line x1="175" y1="250" x2="225" y2="250" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* studio mic head, shockmount ring */}
      <ellipse cx="200" cy="150" rx="24" ry="14" fill="none" stroke={dark} strokeWidth="5" />
      <rect x="184" y="138" width="32" height="24" rx="8" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* singer silhouette leaning toward the mic */}
      <circle cx="150" cy="130" r="18" fill={skin} />
      <path d="M132 148 Q150 138 170 150 L165 200 L135 200 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const KangeKreshnike: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* seated musician silhouette */}
      <circle cx="160" cy="130" r="16" fill={skin} />
      <path d="M144 148 Q160 140 178 150 L178 230 L142 230 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* lahuta body */}
      <ellipse cx="225" cy="195" rx="26" ry="34" fill={wood} stroke={dark} strokeWidth="3" />
      <line x1="225" y1="161" x2="225" y2="120" stroke={wood} strokeWidth="8" />
      <line x1="225" y1="120" x2="225" y2="230" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {/* bow */}
      <path d="M180 130 Q215 150 250 165" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

// Hexagon vertices around (200, 167), radius 28, precomputed offline (0°, 60°, ... 300°).
const FILM_REEL_HOLES: [number, number][] = [
  [228, 167],
  [214, 191],
  [186, 191],
  [172, 167],
  [186, 143],
  [214, 143],
];

const Kinostudio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      {/* film reel */}
      <circle cx="200" cy="167" r="52" fill={accentColor} stroke={dark} strokeWidth="4" />
      <circle cx="200" cy="167" r="13" fill={dark} />
      {FILM_REEL_HOLES.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill={dark} />
      ))}
      {/* old movie camera beside it */}
      <rect x="260" y="180" width="55" height="35" fill={dark} />
      <rect x="290" y="165" width="28" height="20" fill={dark} />
      <circle cx="318" cy="197" r="10" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const TIRANA_STRIPE_COLORS = ["#E63946", "#2A9D8F", "#F4A300", "#457B9D"];

const TiranaColores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="110" width="160" height="130" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {TIRANA_STRIPE_COLORS.map((c, i) => (
        <rect key={c} x={128 + i * 36} y="118" width="28" height="114" fill={c} />
      ))}
      {/* window grid across the stripes */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect key={`${row}-${col}`} x={130 + col * 36} y={128 + row * 26} width="14" height="16" fill="#fff" opacity="0.85" />
        ))
      )}
    </g>
  );
};

const VloraExodo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* horizon and water */}
      <line x1="90" y1="215" x2="310" y2="215" stroke={dark} strokeWidth="2" opacity="0.4" />
      <path d="M90 225 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" />
      {/* ship hull */}
      <polygon points="120,215 280,215 260,240 140,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* funnel */}
      <rect x="285" y="175" width="16" height="40" fill={dark} />
      {/* people packed on deck */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={135 + col * 18} cy={205 - row * 10} r="5" fill={row % 2 === 0 ? skin : dark} opacity="0.9" />
        ))
      )}
    </g>
  );
};

const GestosInvertidos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      <circle cx="185" cy="175" r="34" fill={skin} stroke={dark} strokeWidth="3" />
      <path d="M212 168 L228 178 L212 188 Z" fill={skin} stroke={dark} strokeWidth="3" />
      <circle cx="192" cy="165" r="4" fill={dark} />
      {/* up-down nod arrow */}
      <line x1="185" y1="110" x2="185" y2="145" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <path d="M172 120 L185 105 L198 120" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M172 138 L185 153 L198 138" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* question mark */}
      <text x="240" y="200" fontSize="56" fontWeight="700" fill={accentColor} fontFamily="serif">
        ?
      </text>
    </g>
  );
};

const SyriIKalter: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const deep = shade(accentColor, 0.25);
  return (
    <g>
      {/* rocky rim */}
      <ellipse cx="200" cy="180" rx="105" ry="60" fill={dark} opacity="0.25" />
      {/* rings of water, lighter outward */}
      <ellipse cx="200" cy="180" rx="85" ry="48" fill={light} />
      <ellipse cx="200" cy="180" rx="58" ry="33" fill={accentColor} />
      <ellipse cx="200" cy="180" rx="30" ry="17" fill={deep} />
    </g>
  );
};

export const albaniaIllustrations: Record<string, IllustrationDefinition> = {
  bunkers: { component: Bunkers },
  riviera: { component: Riviera },
  besa: { component: Besa },
  aguila: { component: Aguila },
  "gjirokastra-berat": { component: GjirokastraBerat },
  "iso-polifonia": { component: IsoPolifonia },
  skanderbeg: { component: Skanderbeg },
  raki: { component: Raki },
  byrek: { component: Byrek },
  "madre-teresa": { component: MadreTeresa },
  "meshari-buzuku": { component: MeshariBuzuku },
  "alfabeto-manastir": { component: AlfabetoManastir },
  "ismail-kadare": { component: IsmailKadare },
  "dua-lipa": { component: DuaLipa },
  "kange-kreshnike": { component: KangeKreshnike },
  kinostudio: { component: Kinostudio },
  "tirana-colores": { component: TiranaColores },
  "vlora-exodo": { component: VloraExodo },
  "gestos-invertidos": { component: GestosInvertidos },
  "syri-i-kalter": { component: SyriIKalter },
};
