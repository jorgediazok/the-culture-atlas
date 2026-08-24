import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ReggaeBobMarley: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* electric guitar: solid double-cutaway body with pointed horns (not a
          round acoustic bout), no soundhole, long neck with headstock */}
      <path
        d="M115 210 Q112 246 155 249 Q198 246 195 210 Q197 190 180 182 L188 140 L157 155 L126 140 L134 182 Q117 190 115 210 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      {/* pickups */}
      <rect x="138" y="196" width="38" height="8" rx="2" fill={dark} />
      <rect x="138" y="213" width="38" height="8" rx="2" fill={dark} />
      {/* neck and headstock */}
      <rect x="152" y="98" width="10" height="57" fill={dark} />
      <path d="M142 98 L172 98 L167 78 L147 78 Z" fill={dark} />
      {[83, 90, 97].map((y) => (
        <circle key={y} cx="139" cy={y} r="3" fill={light} />
      ))}
      {/* strings running down the neck onto the body */}
      {[152, 156, 160, 164].map((x) => (
        <line key={x} x1={x} y1="98" x2="157" y2="228" stroke={light} strokeWidth="1.2" opacity="0.8" />
      ))}
      {/* stacked vinyl records */}
      {[[230, 210], [255, 195], [280, 218]].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r="30" fill={dark} />
          <circle cx={x} cy={y} r="9" fill={light} />
          <circle cx={x} cy={y} r="3" fill={dark} />
        </g>
      ))}
    </g>
  );
};

const RastafariMovimiento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#C1272D";
  const green = "#1B5E20";
  return (
    <g>
      {/* stylized lion head with a bold mane */}
      <circle cx="205" cy="165" r="30" fill={accentColor} />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <path key={deg} d="M205 165 Q198 130 205 105 Q212 130 205 165 Z" fill={dark} transform={`rotate(${deg} 205 165)`} />
      ))}
      <circle cx="205" cy="165" r="20" fill={dark} opacity="0.5" />
      <circle cx="196" cy="160" r="3" fill="#1A1A1A" />
      <circle cx="214" cy="160" r="3" fill="#1A1A1A" />
      <path d="M198 178 Q205 184 212 178" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* red, gold, green bars beside it */}
      <rect x="255" y="150" width="16" height="55" fill={red} />
      <rect x="273" y="150" width="16" height="55" fill={accentColor} />
      <rect x="291" y="150" width="16" height="55" fill={green} />
    </g>
  );
};

const VelocistasJamaicanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* track spike shoe, side profile */}
      <path d="M115 210 Q110 195 130 190 L200 185 Q220 185 228 198 L228 212 L115 212 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 190 Q140 178 160 180 L195 185" fill="none" stroke={dark} strokeWidth="3" />
      {[145, 165, 185].map((x) => (
        <line key={x} x1={x} y1="188" x2={x - 4} y2="210" stroke={light} strokeWidth="3" />
      ))}
      {[210, 216, 222].map((x) => (
        <circle key={x} cx={x} cy="196" r="2.5" fill={dark} />
      ))}
      {/* speed lines trailing behind */}
      <line x1="95" y1="175" x2="150" y2="175" stroke={dark} strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      <line x1="100" y1="192" x2="165" y2="192" stroke={dark} strokeWidth="6" strokeLinecap="round" opacity="0.45" />
      <line x1="90" y1="225" x2="140" y2="225" stroke={dark} strokeWidth="6" strokeLinecap="round" opacity="0.3" />
    </g>
  );
};

const PatoisJamaicano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <path d="M110 105 Q110 88 128 88 L205 88 Q223 88 223 105 Q223 122 205 122 L180 122 L165 138 L170 122 L128 122 Q110 122 110 105 Z" fill={light} />
      <path d="M180 135 Q180 118 198 118 L275 118 Q293 118 293 135 Q293 152 275 152 L245 152 L255 168 L230 152 L198 152 Q180 152 180 135 Z" fill={accentColor} opacity="0.9" />
      <text x="166" y="112" fontSize="34" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">!</text>
      <text x="236" y="142" fontSize="30" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="serif">!</text>
    </g>
  );
};

const CafeBlueMountain: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const cloud = "#E8E4DC";
  return (
    <g>
      {/* mountain wrapped in clouds */}
      <polygon points="180,235 235,110 290,235" fill={dark} />
      <ellipse cx="235" cy="160" rx="55" ry="14" fill={cloud} opacity="0.85" />
      <ellipse cx="255" cy="185" rx="45" ry="12" fill={cloud} opacity="0.75" />
      {/* roasted coffee beans beside it */}
      {[[130, 190], [150, 215], [115, 220]].map(([x, y], i) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="17" ry="12" fill={accentColor} transform={`rotate(${i * 20 - 15} ${x} ${y})`} />
          <path d={`M${x} ${y - 9} Q${x} ${y} ${x} ${y + 9}`} stroke={light} strokeWidth="2" fill="none" />
        </g>
      ))}
    </g>
  );
};

const CimarronesNanny: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#2E7D32";
  return (
    <g>
      {/* mountains covered in dense vegetation */}
      <polygon points="95,240 150,150 205,240" fill={dark} />
      <polygon points="180,240 240,130 300,240" fill={green} />
      {[110, 130, 200, 220, 260, 280].map((x, i) => (
        <circle key={x} cx={x} cy={225 - (i % 2) * 8} r="14" fill={green} opacity="0.8" />
      ))}
      {/* war horn (abeng) in front */}
      <path d="M150 210 Q175 195 210 205 Q220 208 218 216 Q185 220 155 222 Q148 218 150 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="212" cy="211" r="5" fill={dark} />
    </g>
  );
};

const PortRoyalHundida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const water = "#2E6F8E";
  return (
    <g>
      {/* tilted colonial buildings, half submerged */}
      <rect x="130" y="130" width="45" height="90" fill={accentColor} transform="rotate(8 152 175)" />
      <polygon points="128,130 152,110 177,130" fill={dark} transform="rotate(8 152 175)" />
      <rect x="195" y="115" width="50" height="105" fill={light} transform="rotate(-6 220 167)" />
      <polygon points="192,115 220,92 248,115" fill={dark} transform="rotate(-6 220 167)" />
      {/* water rising over the lower halves */}
      <rect x="95" y="185" width="225" height="55" fill={water} opacity="0.75" />
      <path d="M95 185 Q210 175 320 185" fill="none" stroke="#fff" strokeWidth="3" opacity="0.35" />
    </g>
  );
};

const AckeeFrutaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const red = "#C1272D";
  return (
    <g>
      {/* split ackee pod, red outside, yellow flesh inside */}
      <path d="M150 235 Q120 220 125 175 Q130 130 175 118 Q160 155 158 195 Q158 220 150 235 Z" fill={red} stroke={dark} strokeWidth="3" />
      <path d="M255 235 Q285 220 280 175 Q275 130 230 118 Q245 155 247 195 Q247 220 255 235 Z" fill={red} stroke={dark} strokeWidth="3" />
      <path d="M175 200 Q200 218 230 200 Q225 225 200 232 Q175 225 175 200 Z" fill={accentColor} />
      {/* glossy black seeds */}
      <circle cx="192" cy="205" r="10" fill="#1A1A1A" />
      <circle cx="215" cy="207" r="10" fill="#1A1A1A" />
      <circle cx="189" cy="202" r="2.5" fill="#fff" opacity="0.6" />
      <circle cx="212" cy="204" r="2.5" fill="#fff" opacity="0.6" />
    </g>
  );
};

const SoundSystemCultura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* large speaker boxes stacked */}
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <rect x="150" y={220 - row * 48} width="110" height="42" fill={row % 2 === 0 ? accentColor : dark} stroke={shade(accentColor, 0.5)} strokeWidth="2" />
          <circle cx="180" cy={241 - row * 48} r="14" fill={light} />
          <circle cx="230" cy={241 - row * 48} r="9" fill={light} />
        </g>
      ))}
    </g>
  );
};

const BanderaUnPueblo: IllustrationComponent = ({ accentColor }) => {
  const black = "#1A1A1A";
  const green = "#1B5E20";
  return (
    <g>
      <rect x="110" y="105" width="190" height="130" fill={green} />
      <polygon points="110,105 205,170 110,235" fill={black} />
      <polygon points="300,105 205,170 300,235" fill={black} />
      <polygon points="110,105 300,105 205,170" fill={accentColor} />
      <polygon points="110,235 300,235 205,170" fill={accentColor} />
    </g>
  );
};

// Pip dot layouts for domino halves, hardcoded (3x3 grid positions within a
// 34x34 half) — no trig needed, these are fixed dot patterns.
const PIP_LAYOUTS: Record<number, [number, number][]> = {
  1: [[17, 17]],
  2: [[10, 10], [24, 24]],
  3: [[10, 10], [17, 17], [24, 24]],
  4: [[10, 10], [24, 10], [10, 24], [24, 24]],
  5: [[10, 10], [24, 10], [17, 17], [10, 24], [24, 24]],
  6: [[10, 9], [24, 9], [10, 17], [24, 17], [10, 25], [24, 25]],
};

function DominoTile({
  x,
  y,
  rotation,
  top,
  bottom,
  fill,
  stroke,
  pipFill,
}: {
  x: number;
  y: number;
  rotation: number;
  top: number;
  bottom: number;
  fill: string;
  stroke: string;
  pipFill: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotation} 17 34)`}>
      <rect x="0" y="0" width="34" height="68" rx="4" fill={fill} stroke={stroke} strokeWidth="2.5" />
      <line x1="0" y1="34" x2="34" y2="34" stroke={stroke} strokeWidth="2" />
      {PIP_LAYOUTS[top].map(([px, py], i) => (
        <circle key={`t${i}`} cx={px} cy={py} r="3" fill={pipFill} />
      ))}
      {PIP_LAYOUTS[bottom].map(([px, py], i) => (
        <circle key={`b${i}`} cx={px} cy={py + 34} r="3" fill={pipFill} />
      ))}
    </g>
  );
}

const DominosJamaicanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const ivory = "#F5F0E6";
  const black = "#1A1A1A";
  return (
    <g>
      {/* wooden table */}
      <rect x="90" y="195" width="230" height="55" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* two tiles resting flat, forming a chain */}
      <DominoTile x={112} y={150} rotation={0} top={5} bottom={3} fill={ivory} stroke={dark} pipFill={black} />
      <DominoTile x={152} y={150} rotation={0} top={6} bottom={4} fill={ivory} stroke={dark} pipFill={black} />
      {/* third tile mid-slam, tilted above the table */}
      <DominoTile x={225} y={92} rotation={-18} top={2} bottom={6} fill={ivory} stroke={dark} pipFill={black} />
      {/* impact motion lines under the slamming tile */}
      <line x1="215" y1="185" x2="245" y2="192" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <line x1="205" y1="195" x2="240" y2="203" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      <line x1="198" y1="205" x2="228" y2="212" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.28" />
    </g>
  );
};

const CocinaJerk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const metal = "#455A64";
  const metalDark = shade("#455A64", 0.3);
  const bone = "#F5E6C8";
  const smoke = "#D7D2C8";
  return (
    <g>
      {/* halved-drum grill */}
      <rect x="140" y="178" width="150" height="55" fill={metal} stroke={metalDark} strokeWidth="3" />
      <ellipse cx="215" cy="178" rx="75" ry="14" fill={metalDark} />
      {[155, 175, 195, 215, 235, 255, 275].map((x) => (
        <line key={x} x1={x} y1="167" x2={x} y2="189" stroke={metal} strokeWidth="3" />
      ))}
      {/* three jerk meat pieces on the grate */}
      {[
        [172, 158],
        [212, 152],
        [252, 160],
      ].map(([x, y], i) => (
        <g key={x}>
          <rect x={x - 3} y={y - 22} width="6" height="28" rx="3" fill={bone} transform={`rotate(${i % 2 === 0 ? -12 : 10} ${x} ${y})`} />
          <ellipse cx={x} cy={y} rx="22" ry="15" fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <ellipse cx={x - 7} cy={y - 3} rx="4" ry="3" fill={dark} opacity="0.6" />
          <ellipse cx={x + 8} cy={y + 4} rx="4" ry="3" fill={dark} opacity="0.6" />
        </g>
      ))}
      {/* rising smoke */}
      <path d="M160 178 Q148 145 163 115 Q172 95 162 75" stroke={smoke} strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M260 178 Q272 148 258 118 Q250 98 262 80" stroke={smoke} strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.5" />
    </g>
  );
};

const CascadasDunnsRiver: IllustrationComponent = ({ accentColor }) => {
  const rock = "#8D6E63";
  const rockDark = shade("#8D6E63", 0.3);
  const water = tint(accentColor, 0.35);
  const sea = shade(accentColor, 0.1);
  return (
    <g>
      {/* stepped limestone terraces descending left to right */}
      <polygon points="100,95 175,95 185,125 108,125" fill={rock} stroke={rockDark} strokeWidth="3" />
      <polygon points="140,125 215,125 225,155 148,155" fill={rock} stroke={rockDark} strokeWidth="3" />
      <polygon points="180,155 255,155 265,185 188,185" fill={rock} stroke={rockDark} strokeWidth="3" />
      <polygon points="220,185 295,185 305,215 228,215" fill={rock} stroke={rockDark} strokeWidth="3" />
      {/* white water cascading over each step edge */}
      <path d="M108 125 Q146 133 185 125" stroke="#fff" strokeWidth="6" fill="none" opacity="0.8" strokeLinecap="round" />
      <path d="M148 155 Q186 163 225 155" stroke="#fff" strokeWidth="6" fill="none" opacity="0.8" strokeLinecap="round" />
      <path d="M188 185 Q226 193 265 185" stroke="#fff" strokeWidth="6" fill="none" opacity="0.8" strokeLinecap="round" />
      <path d="M228 215 Q266 223 305 215" stroke="#fff" strokeWidth="6" fill="none" opacity="0.8" strokeLinecap="round" />
      {/* pool / sea at the bottom */}
      <rect x="90" y="215" width="230" height="30" fill={sea} />
      <path d="M90 222 Q205 214 320 222" stroke={water} strokeWidth="4" fill="none" opacity="0.7" />
    </g>
  );
};

// Jonkonnu mask: head ellipse centered (200,150) rx=55 ry=65.
// Horn base points precomputed offline as points on the ellipse boundary
// pulled 20 units inward along the outward radial direction (script-verified
// insideVal ~0.41-0.44, well inside the 1.0 boundary), so each horn's root
// overlaps 20 units into the head before the head ellipse is drawn on top.
const JonkonnuMascaradas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#6D4C41";
  const woodDark = shade("#6D4C41", 0.3);
  const ribbonColors = ["#C1272D", "#D4A017", "#1B5E20", "#0277BD", "#C1272D"];
  return (
    <g>
      {/* ribbon strips, drawn first so the mask head covers their top seam.
          topY per strip is precomputed offline (node script) so each ribbon
          overlaps ~20 units into the ellipse's TRUE lower boundary curve at
          its own x — the outer strips sit under a much higher curve point
          than the center one, so a single shared topY (originally 198)
          left the two outermost ribbons only ~8 units overlapped instead
          of the intended 15-25; fixed by using per-x topY values below. */}
      {[
        [172, 185.9],
        [186, 192.9],
        [200, 195],
        [214, 192.9],
        [228, 185.9],
      ].map(([x, topY], i) => (
        <rect
          key={x}
          x={x - 4}
          y={topY}
          width="8"
          height={250 - topY}
          fill={ribbonColors[i]}
          transform={`rotate(${(i - 2) * 6} ${x} ${topY})`}
        />
      ))}
      {/* horns, drawn before the head so their base is hidden under it */}
      <path d="M165.9 139.2 Q130 145 108 120 Q118 100 172.8 121.1 Z" fill={wood} stroke={woodDark} strokeWidth="2.5" />
      <path d="M234.1 139.2 Q270 145 292 120 Q282 100 227.2 121.1 Z" fill={wood} stroke={woodDark} strokeWidth="2.5" />
      {/* carved wooden mask head, painted over the horn and ribbon roots */}
      <ellipse cx="200" cy="150" rx="55" ry="65" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      <ellipse cx="180" cy="145" rx="8" ry="10" fill="#1A1A1A" />
      <ellipse cx="220" cy="145" rx="8" ry="10" fill="#1A1A1A" />
      <path d="M175 180 Q200 195 225 180" stroke="#1A1A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M200 145 L196 168 L204 168 Z" fill={dark} />
    </g>
  );
};

const CricketSabinaPark: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#C8A951";
  const woodDark = shade("#C8A951", 0.35);
  const red = "#B71C1C";
  return (
    <g>
      {/* three wicket stumps with two bails resting on top */}
      {[240, 258, 276].map((x) => (
        <rect key={x} x={x - 4} y="120" width="8" height="95" fill={wood} stroke={woodDark} strokeWidth="2" />
      ))}
      <rect x="234" y="114" width="26" height="14" rx="3" fill={woodDark} />
      <rect x="256" y="114" width="26" height="14" rx="3" fill={woodDark} />
      {/* cricket bat, angled */}
      <g transform="rotate(-18 150 190)">
        <rect x="140" y="95" width="20" height="95" rx="6" fill={accentColor} stroke={dark} strokeWidth="3" />
        <rect x="145" y="185" width="10" height="45" fill={dark} />
      </g>
      {/* red cricket ball with seam stitching */}
      <circle cx="130" cy="215" r="20" fill={red} stroke={shade(red, 0.4)} strokeWidth="2.5" />
      <path d="M118 200 Q130 215 118 230" stroke="#F5F0E6" strokeWidth="2" fill="none" />
      <path d="M142 200 Q130 215 142 230" stroke="#F5F0E6" strokeWidth="2" fill="none" />
    </g>
  );
};

export const jamaicaIllustrations: Record<string, IllustrationDefinition> = {
  "reggae-bob-marley": { component: ReggaeBobMarley },
  "rastafari-movimiento": { component: RastafariMovimiento },
  "velocistas-jamaicanos": { component: VelocistasJamaicanos },
  "patois-jamaicano": { component: PatoisJamaicano },
  "cafe-blue-mountain": { component: CafeBlueMountain },
  "cimarrones-nanny": { component: CimarronesNanny },
  "port-royal-hundida": { component: PortRoyalHundida },
  "ackee-fruta-nacional": { component: AckeeFrutaNacional },
  "sound-system-cultura": { component: SoundSystemCultura },
  "bandera-un-pueblo": { component: BanderaUnPueblo },
  "dominos-jamaicanos": { component: DominosJamaicanos },
  "cocina-jerk": { component: CocinaJerk },
  "cascadas-dunns-river": { component: CascadasDunnsRiver },
  "jonkonnu-mascaradas": { component: JonkonnuMascaradas },
  "cricket-sabina-park": { component: CricketSabinaPark },
};
