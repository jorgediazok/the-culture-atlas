import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CanalDePanama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      {/* lock chamber walls */}
      <rect x="95" y="120" width="30" height="120" fill={dark} />
      <rect x="285" y="120" width="30" height="120" fill={dark} />
      {/* water in the lock */}
      <rect x="125" y="150" width="160" height="90" fill={water} />
      {/* lock gates, open */}
      <rect x="120" y="130" width="10" height="80" fill={accentColor} transform="rotate(25 120 130)" />
      <rect x="280" y="130" width="10" height="80" fill={accentColor} transform="rotate(-25 280 130)" />
      {/* ship passing through */}
      <path d="M155 175 L255 175 L245 200 L165 200 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="190" y="155" width="30" height="22" fill={dark} />
    </g>
  );
};

const IstmoPuenteBiologico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.5" />
      {/* two landmasses */}
      <path d="M95 130 Q140 110 170 140 Q150 170 110 175 Q90 160 95 130 Z" fill={accentColor} />
      <path d="M320 220 Q275 240 245 210 Q265 180 305 175 Q325 190 320 220 Z" fill={shade(accentColor, 0.15)} />
      {/* thin land bridge connecting them */}
      <path d="M170 150 Q210 175 245 205 L235 220 Q200 190 160 165 Z" fill={dark} />
    </g>
  );
};

const MolasGuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const colors = ["#F4C430", "#1565C0", "#2E7D32"];
  return (
    <g>
      {/* layered reverse-appliqué panel */}
      <rect x="105" y="95" width="200" height="150" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="125" y="115" width="160" height="110" fill={colors[0]} />
      <rect x="145" y="135" width="120" height="70" fill={colors[1]} />
      {/* central animal-like figure cut through the layers */}
      <path d="M205 145 Q185 150 185 170 Q185 190 205 195 Q225 190 225 170 Q225 150 205 145 Z" fill={colors[2]} />
      <circle cx="197" cy="165" r="4" fill={accentColor} />
      <circle cx="213" cy="165" r="4" fill={accentColor} />
      {[125, 285].map((x) => (
        <line key={x} x1={x} y1="115" x2={x} y2="225" stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
    </g>
  );
};

const SombreroPanamaMito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.3);
  return (
    <g>
      <ellipse cx="205" cy="185" rx="115" ry="26" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[-90, -60, 195, 155, 115, 75, 35, 0].map((deg) => (
        <line key={deg} x1="205" y1="185" x2="205" y2="163" stroke={light} strokeWidth="1.5" opacity="0.5" transform={`rotate(${deg} 205 185)`} />
      ))}
      <path d="M175 178 Q175 138 205 132 Q235 138 235 178 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      <path d="M175 172 Q205 184 235 172" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const CascoViejoSkyline: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* modern skyscrapers behind */}
      {[[240, 100], [270, 80], [300, 120]].map(([x, y], i) => (
        <rect key={x} x={x} y={y} width="24" height={240 - Number(y)} fill={i % 2 === 0 ? dark : light} />
      ))}
      {/* low colonial building in front */}
      <rect x="110" y="170" width="110" height="70" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="105,170 165,142 225,170" fill={dark} />
      <rect x="150" y="205" width="30" height="35" fill={dark} />
      {[125, 200].map((x) => (
        <rect key={x} x={x} y="185" width="16" height="20" fill={light} />
      ))}
    </g>
  );
};

const RanaDorada: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <path d="M95 240 Q210 225 320 240 L320 250 L95 250 Z" fill={shade(accentColor, 0.1)} opacity="0.3" />
      <ellipse cx="205" cy="180" rx="42" ry="34" fill={accentColor} />
      <circle cx="178" cy="150" r="15" fill={accentColor} />
      <circle cx="232" cy="150" r="15" fill={accentColor} />
      <circle cx="172" cy="144" r="6" fill="#1A1A1A" />
      <circle cx="238" cy="144" r="6" fill="#1A1A1A" />
      {[[190, 175], [220, 185], [200, 200], [175, 190]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill="#1A1A1A" />
      ))}
      <path d="M172 205 L155 225 M238 205 L255 225 M188 215 L180 235 M222 215 L230 235" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const AutonomiaGunaYala: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const sand = "#E8C87A";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={accentColor} opacity="0.55" />
      {[[130, 190], [175, 175], [220, 195], [265, 170], [300, 200]].map(([x, y], i) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx={18 - (i % 2) * 4} ry="10" fill={sand} stroke={dark} strokeWidth="1.5" />
          <circle cx={x} cy={Number(y) - 8} r="8" fill={shade(accentColor, 0.1)} />
        </g>
      ))}
    </g>
  );
};

const DiablosRojos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#F4C430";
  const red = "#C1272D";
  return (
    <g>
      {/* school bus body */}
      <path d="M110 140 L110 210 Q110 220 120 220 L295 220 Q305 220 305 210 L305 155 Q305 140 290 140 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[130, 165, 200, 235, 270].map((x) => (
        <rect key={x} x={x} y="150" width="24" height="26" fill={tint(accentColor, 0.6)} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* vibrant painted decoration */}
      <path d="M115 195 Q160 185 205 195 Q250 205 300 195" fill="none" stroke={gold} strokeWidth="5" />
      <circle cx="150" cy="205" r="8" fill={red} />
      <circle cx="260" cy="205" r="8" fill={gold} />
      {[150, 230].map((x) => (
        <circle key={x} cx={x} cy="232" r="16" fill="#2E2E2E" />
      ))}
    </g>
  );
};

const TaponDelDarien: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      <circle cx="130" cy="130" r="34" fill={dark} />
      <circle cx="165" cy="105" r="30" fill={accentColor} />
      <circle cx="120" cy="180" r="32" fill={accentColor} />
      <circle cx="280" cy="115" r="32" fill={accentColor} />
      <circle cx="255" cy="170" r="30" fill={dark} />
      <circle cx="295" cy="205" r="28" fill={light} opacity="0.85" />
      <circle cx="105" cy="225" r="26" fill={light} opacity="0.85" />
      <circle cx="200" cy="150" r="36" fill={accentColor} opacity="0.9" />
      <circle cx="210" cy="210" r="30" fill={dark} opacity="0.85" />
    </g>
  );
};

const DolarizacionBalboa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const gold = "#D4A017";
  return (
    <g>
      {/* green banknotes */}
      <rect x="130" y="140" width="130" height="68" rx="4" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="145" y="152" width="100" height="44" rx="20" fill="none" stroke={light} strokeWidth="2" />
      {/* balboa coin overlapping */}
      <circle cx="255" cy="205" r="38" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <circle cx="255" cy="205" r="26" fill="none" stroke={shade(gold, 0.3)} strokeWidth="2" />
      <text x="255" y="216" fontSize="34" fontWeight="700" fill={shade(gold, 0.3)} textAnchor="middle" fontFamily="serif">$</text>
    </g>
  );
};

const EmberaWounaan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.3);
  const water = "#3D8FB0";
  const figure = "#3E2723";
  return (
    <g>
      {/* jungle canopy */}
      <ellipse cx="130" cy="95" rx="48" ry="32" fill="#3F6B32" />
      <ellipse cx="290" cy="100" rx="42" ry="28" fill="#2E5E22" />
      {/* river */}
      <path d="M90 190 Q205 165 320 195 L320 250 L90 250 Z" fill={water} />
      {/* dugout canoe hull, pointed at both ends so no separate prow joint is needed */}
      <path d="M150 205 Q160 190 200 188 Q240 190 250 205 Q240 218 200 220 Q160 218 150 205 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M158 204 L242 204" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* head, drawn first so the torso covers the neck seam (overlap 181-165=16) */}
      <circle cx="205" cy="163" r="18" fill={figure} />
      {/* arm + paddle, drawn before the torso so the torso covers the shoulder seam (~20 units inside) */}
      <path d="M203 175 L246 158" stroke={figure} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M230 166 L278 132" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      <ellipse cx="278" cy="132" rx="9" ry="17" fill={light} stroke={dark} strokeWidth="2" transform="rotate(-25 278 132)" />
      {/* torso, drawn last to seal the head and arm seams */}
      <path d="M188 165 L222 165 L214 205 L196 205 Z" fill={figure} />
    </g>
  );
};

const TamboritoYPollera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.35);
  const gold = "#D4A017";
  const skin = "#C68642";
  return (
    <g>
      {/* skirt, drawn first so the torso overlaps its waistline */}
      <path d="M188 152 Q140 200 120 245 L290 245 Q260 200 222 152 Z" fill={accentColor} />
      <path d="M150 200 Q205 210 260 200" fill="none" stroke={light} strokeWidth="4" opacity="0.8" />
      <path d="M135 225 Q205 238 275 225" fill="none" stroke={gold} strokeWidth="4" opacity="0.8" />
      {/* head, drawn first so the torso covers the neck seam (overlap 127-112=15) */}
      <circle cx="205" cy="110" r="17" fill={skin} />
      {/* raised twirling arms, drawn before the torso so it covers the shoulder seams (~22 units inside each) */}
      <path d="M210 132 L160 95" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M200 132 L250 95" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* torso/bodice, drawn last to seal the head and arm seams */}
      <path d="M193 112 L217 112 L225 160 L185 160 Z" fill={dark} />
      {/* tembleques, hand-placed dots framing the head */}
      {[[183, 98], [227, 98], [188, 84], [222, 84], [205, 80]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill={gold} />
      ))}
    </g>
  );
};

// Feather-fan coordinates precomputed offline (angles -70..70deg step ~20-40,
// measured from vertical, centered at the head's own circle so every feather's
// base sits 18-19 units inside the head's true boundary — see script output).
const FEATHERS: { base: [number, number]; tip: [number, number] }[] = [
  { base: [203.1, 139.3], tip: [143.0, 117.4] },
  { base: [203.5, 138.7], tip: [154.4, 97.6] },
  { base: [204.0, 138.3], tip: [172.0, 82.8] },
  { base: [204.7, 138.0], tip: [193.5, 75.0] },
  { base: [205.3, 138.0], tip: [216.5, 75.0] },
  { base: [206.0, 138.3], tip: [238.0, 82.8] },
  { base: [206.5, 138.7], tip: [255.6, 97.6] },
  { base: [206.9, 139.3], tip: [267.0, 117.4] },
];

const CarnavalDeLasTablas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#F4C430";
  const skin = "#C68642";
  const confettiColors = [accentColor, gold, "#26A69A", "#E64A19"];
  return (
    <g>
      {/* confetti, scattered decoration, drawn first so it sits behind everything */}
      {[[110, 100], [320, 95], [140, 130], [280, 115], [100, 180], [310, 190], [130, 220], [270, 230]].map(
        ([x, y], i) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" fill={confettiColors[i % confettiColors.length]} transform={`rotate(${(i * 37) % 90} ${x} ${y})`} />
        )
      )}
      {/* feathers, drawn before the head so the head covers each base (18-19 units inside) */}
      {FEATHERS.map((f, i) => (
        <path
          key={`${f.base[0]}-${f.base[1]}`}
          d={`M${f.base[0]} ${f.base[1]} L${f.tip[0]} ${f.tip[1]}`}
          stroke={i % 2 === 0 ? accentColor : gold}
          strokeWidth="10"
          strokeLinecap="round"
        />
      ))}
      {/* head, drawn after the feathers so their bases are hidden */}
      <circle cx="205" cy="140" r="21" fill={skin} />
      {/* open arms, drawn before the torso so it covers the shoulder seams (~24 units inside each) */}
      <path d="M200 150 L145 175" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M210 150 L265 175" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* torso, drawn last to seal the head and arm seams */}
      <path d="M184 144 L226 144 L242 190 L168 190 Z" fill={dark} />
      {/* skirt */}
      <path d="M172 185 Q120 220 100 245 L310 245 Q290 220 238 185 Z" fill={accentColor} />
      <circle cx="150" cy="215" r="5" fill={gold} />
      <circle cx="260" cy="215" r="5" fill={gold} />
    </g>
  );
};

const CongosDePortobelo: IllustrationComponent = ({ accentColor }) => {
  const wood = "#4E342E";
  const gold = "#D4A017";
  const green = "#2E7D32";
  return (
    <g>
      {/* horns, drawn before the face so the face covers each base (r=58-40=18 units inside the true circle) */}
      <path d="M165.6 171.9 Q132.5 198.8 105.4 173.7" fill="none" stroke="#1A1A1A" strokeWidth="20" strokeLinecap="round" />
      <path d="M244.4 171.9 Q277.5 198.8 304.6 173.7" fill="none" stroke="#1A1A1A" strokeWidth="20" strokeLinecap="round" />
      {/* wooden mask face, drawn after the horns to seal their base seams */}
      <circle cx="205" cy="165" r="58" fill={wood} stroke="#2A1A15" strokeWidth="3" />
      {/* ruffled collar framing the mask, drawn after the face with a modest overlap */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 150 + i * 15.7;
        return <circle key={x} cx={x} cy="222" r="13" fill={i % 2 === 0 ? accentColor : gold} />;
      })}
      {/* eyes, brows, teeth */}
      <circle cx="185" cy="155" r="10" fill="#F5F0E6" />
      <circle cx="225" cy="155" r="10" fill="#F5F0E6" />
      <circle cx="185" cy="155" r="4" fill="#1A1A1A" />
      <circle cx="225" cy="155" r="4" fill="#1A1A1A" />
      <path d="M168 138 L195 145 M242 138 L215 145" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
      <path d="M180 195 L230 195 L225 205 L220 195 L215 205 L210 195 L205 205 L200 195 L195 205 L190 195 L185 205 Z" fill="#F5F0E6" />
      <circle cx="205" cy="178" r="8" fill={green} />
    </g>
  );
};

const SancochoPanameno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#F4C430";
  return (
    <g>
      {/* stove legs */}
      <path d="M140 230 L120 250 M270 230 L290 250 M205 235 L205 250" stroke="#3E2723" strokeWidth="8" strokeLinecap="round" />
      {/* handles, drawn before the pot body so it covers the inner ~24 units of each loop */}
      <ellipse cx="126" cy="150" rx="18" ry="22" fill="none" stroke={dark} strokeWidth="7" />
      <ellipse cx="284" cy="150" rx="18" ry="22" fill="none" stroke={dark} strokeWidth="7" />
      {/* pot body, drawn after the handles to seal their inner seams */}
      <ellipse cx="205" cy="178" rx="85" ry="55" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* pot rim */}
      <ellipse cx="205" cy="130" rx="88" ry="18" fill={dark} />
      <ellipse cx="205" cy="127" rx="80" ry="14" fill="#5D2E0A" />
      {/* steam curls */}
      <path d="M175 108 Q165 90 178 75 Q188 62 178 48" fill="none" stroke="#CFCFCF" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      <path d="M232 108 Q222 88 235 72 Q245 58 235 42" fill="none" stroke="#CFCFCF" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      {/* drumstick peeking from the rim, drawn overlapping the rim by a generous margin */}
      <path d="M255 118 L280 95" stroke="#B5651D" strokeWidth="14" strokeLinecap="round" />
      <circle cx="284" cy="91" r="10" fill="#E8B04B" />
      {/* corn cob leaning on the pot */}
      <path d="M130 100 L155 155" stroke="#6B4226" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="142" cy="127" rx="15" ry="34" fill={gold} transform="rotate(-18 142 127)" />
      <path d="M132 105 L152 148 M138 100 L158 143 M144 98 L164 141" stroke="#B8860B" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

export const panamaIllustrations: Record<string, IllustrationDefinition> = {
  "canal-de-panama": { component: CanalDePanama },
  "istmo-puente-biologico": { component: IstmoPuenteBiologico },
  "molas-guna": { component: MolasGuna },
  "sombrero-panama-mito": { component: SombreroPanamaMito },
  "casco-viejo-skyline": { component: CascoViejoSkyline },
  "rana-dorada": { component: RanaDorada },
  "autonomia-guna-yala": { component: AutonomiaGunaYala },
  "diablos-rojos": { component: DiablosRojos },
  "tapon-del-darien": { component: TaponDelDarien },
  "dolarizacion-balboa": { component: DolarizacionBalboa },
  "embera-wounaan": { component: EmberaWounaan },
  "tamborito-y-pollera": { component: TamboritoYPollera },
  "carnaval-de-las-tablas": { component: CarnavalDeLasTablas },
  "congos-de-portobelo": { component: CongosDePortobelo },
  "sancocho-panameno": { component: SancochoPanameno },
};
