import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#E8C39E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

// Sheep in side profile. Body is one continuous fluffy silhouette path.
// Head/legs are drawn first (as attaching pieces), then the body path is
// drawn second so its opaque fill absorbs each seam — head base sits ~20
// units inside the body's true curve, legs start well above the body's
// lowest boundary at their respective x positions.
function sheep(x: number, y: number, scale: number, wool: string, dark: string) {
  return (
    <g key={`sheep-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* head, drawn first: base at x=6 sits ~20-24 units inside the body's right
          boundary (body's right edge runs roughly x=26-30 in this y band) */}
      <path d="M6 -7 Q28 -11 44 -3 Q47 1 43 6 Q24 11 6 9 Z" fill={wool} stroke={dark} strokeWidth="2" />
      <ellipse cx="40" cy="1" rx="4" ry="3.4" fill={dark} opacity="0.85" />
      {/* ears, small, based well inside the head shape */}
      <path d="M18 -8 Q16 -18 24 -20 Q28 -18 22 -6 Z" fill={wool} stroke={dark} strokeWidth="1.6" />
      {/* legs, drawn before the body so the body's bottom curve covers their tops */}
      <path
        d="M-18 -4 L-19 34 M-6 -2 L-6 36 M6 -2 L7 36 M18 -4 L20 34"
        stroke={dark}
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      {/* body: fluffy wool silhouette, drawn last so it absorbs the head/leg seams */}
      <path
        d="M-26 10 Q-30 -10 -14 -16 Q0 -20 14 -16 Q30 -10 26 10 Q14 18 0 16 Q-14 18 -26 10 Z"
        fill={wool}
        stroke={dark}
        strokeWidth="2.4"
      />
      {[[-14, -12], [0, -16], [13, -11], [-4, -2]].map(([bx, by], i) => (
        <circle key={i} cx={bx} cy={by} r="6" fill={tint(wool, 0.15)} opacity="0.7" />
      ))}
    </g>
  );
}

// Puffin in flight, side profile. Body+head is a single continuous path
// (avoids a head/body seam entirely). The beak is drawn first with its base
// ~18 units inside the body's front boundary (front edge runs x≈20-25 in
// that y band), then the body is drawn second so its fill absorbs the seam.
function puffin(x: number, y: number, scale: number, rotate = 0) {
  return (
    <g key={`puffin-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotate})`}>
      <path d="M4 -5 Q14 -6 34 -1 Q37 1 34 5 Q16 8 4 3 Z" fill="#E8791A" stroke="#8A4A0A" strokeWidth="1.6" />
      <path
        d="M-20 4 Q-10 -14 8 -14 Q20 -14 24 -6 Q25 -2 20 2 Q10 10 -6 10 Q-16 12 -20 4 Z"
        fill="#1A1A1A"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse cx="-6" cy="6" rx="12" ry="5" fill="#F5F0E6" opacity="0.9" />
      <circle cx="10" cy="-9" r="2" fill="#F5F0E6" />
      <circle cx="10.6" cy="-9" r="1" fill="#1A1A1A" />
      <path d="M-2 -12 Q10 -22 24 -16 Q14 -12 8 -6 Z" fill="#3A3A3A" stroke="#000000" strokeWidth="1.4" />
    </g>
  );
}

// Whale (pilot whale) in side profile. Body is a single continuous path.
// The tail fluke and dorsal fin are drawn first with their bases well
// inside the body's true boundary (checked numerically against the
// bezier curve, not a bounding box: ~17-20 units past the tapered tail
// edge, ~16-17 units past the back edge), then the body is drawn last so
// its fill absorbs both seams.
function whale(x: number, y: number, scale: number) {
  return (
    <g key={`whale-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-20 -2 Q-40 -16 -60 -14 Q-56 0 -58 16 Q-38 14 -20 4 Z" fill="#3A3F45" stroke="#1A1D20" strokeWidth="2" />
      <path d="M-4 -2 Q0 -22 8 -32 Q12 -28 6 0 Z" fill="#3A3F45" stroke="#1A1D20" strokeWidth="2" />
      <path
        d="M-40 0 Q-38 -14 -16 -18 Q10 -20 26 -10 Q34 -4 30 4 Q10 14 -16 12 Q-34 12 -40 0 Z"
        fill="#4A4F57"
        stroke="#1A1D20"
        strokeWidth="2.6"
      />
      <ellipse cx="22" cy="0" rx="7" ry="4.5" fill="#7A828C" opacity="0.7" />
      <circle cx="24" cy="-6" r="1.6" fill="#1A1D20" />
    </g>
  );
}

// Precomputed points for the small turf tufts along the roof's two sloped
// edges (a few units inward from the true edge at y=-30/-15/0), well above
// the wall's top edge so they stay visible once the wall is drawn on top.
const ROOF_TUFTS: [number, number][] = [
  [-4.9, -30], [4.9, -30], [-16, -15], [16, -15], [-27, 0], [27, 0],
];

// A single turf-roofed house. The chimney and the gable roof are the
// attaching pieces, each drawn before the shape they join so that shape's
// fill absorbs the seam. The roof is a plain triangle (apex to two base
// corners) so there is no unfilled notch between roof and wall. The
// chimney is centered on the roof's apex line so it stays within the
// triangle's narrowing width until right near the peak, then the wall's
// top edge sits 20 units above (inside) the roof's true bottom edge.
function turfHouse(x: number, y: number, scale: number, wallColor: string) {
  return (
    <g key={`house-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-6" y="-65" width="12" height="65" fill="#8C7B6B" stroke="#4A3F33" strokeWidth="2" />
      <path d="M0 -42 L-52 28 L52 28 Z" fill="#4A6B3A" stroke="#2E4522" strokeWidth="2.6" />
      {ROOF_TUFTS.map(([tx, ty], i) => (
        <ellipse key={i} cx={tx} cy={ty} rx="7" ry="4" fill="#5C7F45" stroke="#2E4522" strokeWidth="1.2" />
      ))}
      <rect x="-50" y="8" width="100" height="87" fill={wallColor} stroke={shade(wallColor, 0.4)} strokeWidth="2.6" />
      <rect x="-12" y="55" width="24" height="40" fill="#C1272D" stroke="#7A1818" strokeWidth="2" />
      <rect x="-38" y="35" width="18" height="18" fill="#F5F0E6" stroke="#C1272D" strokeWidth="2" />
      <rect x="20" y="35" width="18" height="18" fill="#F5F0E6" stroke="#C1272D" strokeWidth="2" />
    </g>
  );
}

const LasCasasConTechoDeCespedQueResistenElViento: IllustrationComponent = () => (
  <g>
    <path d="M90 240 Q160 190 230 205 Q280 213 320 195 L320 250 L90 250 Z" fill="#6B8A45" opacity="0.55" />
    <path d="M90 250 Q150 225 220 232 Q270 238 320 222 L320 250 Z" fill="#4A6B3A" opacity="0.7" />
    {sheep(130, 235, 0.7, "#F5F0E6", "#8C7B6B")}
    {sheep(300, 240, 0.6, "#EDE7D9", "#8C7B6B")}
    {turfHouse(210, 235, 1.15, "#2A2A2A")}
  </g>
);

const LaFiestaNacionalQueEnciendeTodoTorshavn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#1B6B8A" opacity="0.5" />
      <path d="M120 205 Q205 190 290 205 L285 218 Q205 205 125 218 Z" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2.4" />
      {[[150, 205], [180, 200], [210, 200], [240, 202], [265, 206]].map(([px, py], i) => (
        <g key={i} transform={`translate(${px} ${py})`}>
          <circle cx="0" cy="-14" r="6" fill="#E8C39E" stroke={dark} strokeWidth="1.4" />
          <rect x="-6" y="-14" width="12" height="19" fill={i % 2 === 0 ? accentColor : "#F5F0E6"} stroke={dark} strokeWidth="1.4" />
          <line x1="-6" y1="-3" x2="-18" y2="4" stroke="#5C3A21" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="6" y1="-3" x2="18" y2="4" stroke="#5C3A21" strokeWidth="2.6" strokeLinecap="round" />
        </g>
      ))}
      <g transform="translate(105 165)">
        <line x1="0" y1="0" x2="0" y2="-45" stroke="#5C3A21" strokeWidth="2.6" />
        <path d="M0 -45 L26 -38 L0 -30 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="1.6" />
      </g>
      <g transform="translate(305 160)">
        <line x1="0" y1="0" x2="0" y2="-48" stroke="#5C3A21" strokeWidth="2.6" />
        <path d="M0 -48 L-26 -41 L0 -33 Z" fill={accentColor} stroke={dark} strokeWidth="1.6" />
      </g>
    </g>
  );
};

const LaDanzaEnCadenaQueCantaBaladasMedievales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skirt = tint(accentColor, 0.2);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="120" ry="10" fill="#4A6B3A" opacity="0.3" />
      {person(150, 225, 1.05, dark, skirt)}
      {person(205, 215, 1.15, dark, accentColor)}
      {person(260, 225, 1.05, dark, skirt)}
      <path d="M164 195 Q180 202 190 200" fill="none" stroke="#E8C39E" strokeWidth="4" strokeLinecap="round" />
      <path d="M220 198 Q235 203 246 195" fill="none" stroke="#E8C39E" strokeWidth="4" strokeLinecap="round" />
      <path d="M170 165 Q175 155 185 158" fill="none" stroke="#3A2A1E" strokeWidth="2" opacity="0.6" />
      <path d="M225 155 Q233 150 240 156" fill="none" stroke="#3A2A1E" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LaRedEnUnPaloConLaQueSeCazanFrailecillos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 200 Q160 175 200 210 Q205 220 195 250 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.6" />
      <path d="M90 250 L320 250 L320 260 L90 260 Z" fill="#1B6B8A" opacity="0.5" />
      {person(150, 210, 1, dark, accentColor)}
      <g transform="translate(163 178) rotate(-35)">
        <rect x="-3" y="-58" width="6" height="70" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.6" />
        <ellipse cx="0" cy="-64" rx="16" ry="12" fill="none" stroke="#3A3A3A" strokeWidth="2.4" />
        <path d="M-11 -64 L11 -64 M-8 -72 L8 -56 M8 -72 L-8 -56" stroke="#3A3A3A" strokeWidth="1.2" />
      </g>
      {puffin(255, 140, 1.1, -18)}
      {puffin(290, 175, 0.85, 10)}
    </g>
  );
};

const LasOvejasQueLeDieronNombreALasIslas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="245" rx="130" ry="8" fill="#4A6B3A" opacity="0.3" />
      {person(155, 225, 1.1, dark, accentColor)}
      <path d="M180 178 Q200 170 220 180 L218 218 Q200 226 182 218 Z" fill="none" stroke={dark} strokeWidth="1" />
      <g transform="translate(178 200) rotate(-8)">
        <rect x="-3" y="-4" width="6" height="30" fill="#C1272D" stroke="#7A1818" strokeWidth="1.4" />
      </g>
      {sheep(275, 220, 1.05, "#F5F0E6", "#8C7B6B")}
    </g>
  );
};

const ElLagoQuePareceFlotarSobreElOceano: IllustrationComponent = () => (
  <g>
    <path d="M90 165 Q160 105 230 140 Q270 158 320 130 L320 100 L90 100 Z" fill="#5C7A45" opacity="0.6" />
    <path d="M110 175 Q170 150 220 168 Q250 178 280 168 Q260 195 210 198 Q150 200 120 190 Z" fill="#3A8AA6" stroke="#1B5C74" strokeWidth="2.4" />
    <path d="M280 168 Q300 178 296 210 L286 208 Q284 185 280 168 Z" fill="#3A8AA6" stroke="#1B5C74" strokeWidth="2" />
    <path d="M90 250 L320 250 L320 218 Q210 232 90 218 Z" fill="#1B4B6B" opacity="0.6" />
    <path d="M90 222 Q205 236 320 222" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
    {person(150, 155, 0.6, "#3A2A1E", "#1B4B6B")}
  </g>
);

const ElCorderoFermentadoQueCuelgaMesesAlViento: IllustrationComponent = () => (
  <g>
    <path d="M105 250 L105 130 L295 130 L295 250" fill="none" stroke="#5C3A21" strokeWidth="6" strokeLinecap="round" />
    <path d="M105 130 L200 100 L295 130" fill="#4A6B3A" stroke="#2E4522" strokeWidth="2.6" />
    <line x1="120" y1="150" x2="280" y2="150" stroke="#3A2A1E" strokeWidth="4" />
    {[135, 165, 195, 225, 255].map((sx, i) => (
      <g key={i} transform={`translate(${sx} 150)`}>
        <line x1="0" y1="0" x2="0" y2="16" stroke="#3A2A1E" strokeWidth="2" />
        <path d={`M-9 16 Q-11 55 -5 90 Q0 96 5 90 Q11 55 9 16 Z`} fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" opacity={i % 2 === 0 ? 1 : 0.85} />
      </g>
    ))}
    <path d="M105 250 L105 220 L120 220 L120 250 Z M280 250 L280 220 L295 220 L295 250 Z" fill="#8C7B6B" opacity="0.4" />
  </g>
);

const UnaDeLasCapitalesMasPequenasDelMundo: IllustrationComponent = () => (
  <g>
    <rect x="90" y="200" width="230" height="50" fill="#1B6B8A" opacity="0.5" />
    {turfHouse(140, 230, 0.68, "#7A2E2E")}
    {turfHouse(190, 233, 0.6, "#2A2A2A")}
    {turfHouse(235, 230, 0.72, "#7A2E2E")}
    <path d="M270 235 Q285 220 305 232 L303 245 L272 245 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2" />
    <line x1="285" y1="220" x2="285" y2="205" stroke="#5C3A21" strokeWidth="2" />
  </g>
);

const ElIdiomaVikingoQueSobrevivioGraciasAlOrgullo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(170, 225, 1.1, dark, accentColor)}
      <path d="M195 200 L245 195 L248 235 L198 240 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2.4" />
      <path d="M198 240 Q222 232 248 235" fill="none" stroke="#8C7B6B" strokeWidth="2" />
      {[208, 216, 224].map((ly, i) => (
        <line key={i} x1="205" y1={ly} x2="240" y2={ly - 3} stroke="#8C7B6B" strokeWidth="1.6" opacity="0.7" />
      ))}
      <g transform="translate(275 160)">
        <circle cx="0" cy="0" r="20" fill="none" stroke={accentColor} strokeWidth="3" />
        <path d="M-14 0 L14 0 M0 -14 L0 14 M-10 -10 L10 10 M10 -10 L-10 10" stroke={dark} strokeWidth="2.2" opacity="0.7" />
      </g>
    </g>
  );
};

const LaCazaDeBallenasPilotoQueDivideOpiniones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q205 185 320 205 L320 250 L90 250 Z" fill="#1B6B8A" opacity="0.55" />
      {whale(190, 210, 1)}
      {whale(235, 225, 0.75)}
      <g transform="translate(150 178)">
        <path d="M-30 10 Q-32 -2 -14 -6 L20 -6 Q32 -2 30 10 Q0 18 -30 10 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
        {person(-8, -8, 0.6, dark, "#F5F0E6")}
      </g>
      <ellipse cx="200" cy="245" rx="90" ry="8" fill="#4A6B3A" opacity="0.4" />
      {person(105, 235, 0.75, "#3A2A1E", "#7A2E2E")}
      {person(130, 238, 0.65, "#3A2A1E", "#1B4B6B")}
    </g>
  );
};

const LaVictoriaImposibleDelFutbolFeroes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 235 320 250 L320 260 L90 260 Z" fill="#4A6B3A" opacity="0.5" />
      {/* small wooden stand in the background */}
      <rect x="230" y="150" width="80" height="55" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.4" />
      {[240, 255, 270, 285, 300].map((x) => (
        <line key={x} x1={x} y1="155" x2={x} y2="200" stroke="#5C4A3A" strokeWidth="1.4" opacity="0.5" />
      ))}
      {/* goal net with the ball inside */}
      <rect x="95" y="150" width="70" height="60" fill="none" stroke={dark} strokeWidth="3" />
      {[110, 125, 140, 155].map((x) => (
        <line key={x} x1={x} y1="150" x2={x} y2="210" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      {[165, 180, 195].map((y) => (
        <line key={y} x1="95" y1={y} x2="165" y2={y} stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      <circle cx="130" cy="185" r="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {person(210, 225, 1.1, dark, accentColor)}
    </g>
  );
};

// Points precomputed offline (10 positions around an ellipse
// cx=205 cy=205 rx=75 ry=30) for the ring of glowing chain-dance figures
// lining the undersea roundabout — never computed with Math.sin/cos at
// render time.
const CHAIN_FIGURE_POINTS: [number, number][] = [
  [280.0, 205.0],
  [265.7, 222.6],
  [228.2, 233.5],
  [181.8, 233.5],
  [144.3, 222.6],
  [130.0, 205.0],
  [144.3, 187.4],
  [181.8, 176.5],
  [228.2, 176.5],
  [265.7, 187.4],
];

const LaRotondaSubmarinaConArteDeLuz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* tunnel walls */}
      <rect x="90" y="90" width="230" height="160" fill="#1A2A33" />
      {/* the elliptical roundabout road */}
      <ellipse cx="205" cy="205" rx="75" ry="30" fill="none" stroke="#3A4A55" strokeWidth="22" />
      {/* glowing chain-dance light figures ringing the roundabout wall */}
      {CHAIN_FIGURE_POINTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill={i % 2 === 0 ? accentColor : "#F5F0E6"} opacity="0.9" />
      ))}
      {/* car on the road */}
      <g transform="translate(205 205)">
        <rect x="-16" y="-8" width="32" height="14" rx="4" fill={dark} />
        <rect x="-9" y="-15" width="18" height="10" rx="3" fill={dark} />
        <circle cx="-9" cy="7" r="4" fill="#1A1A1A" />
        <circle cx="9" cy="7" r="4" fill="#1A1A1A" />
      </g>
    </g>
  );
};

export const faroeIslandsIllustrations: Record<string, IllustrationDefinition> = {
  "las-casas-con-techo-de-cesped-que-resisten-el-viento": { component: LasCasasConTechoDeCespedQueResistenElViento },
  "la-fiesta-nacional-que-enciende-todo-torshavn": { component: LaFiestaNacionalQueEnciendeTodoTorshavn },
  "la-danza-en-cadena-que-canta-baladas-medievales": { component: LaDanzaEnCadenaQueCantaBaladasMedievales },
  "la-red-en-un-palo-con-la-que-se-cazan-frailecillos": { component: LaRedEnUnPaloConLaQueSeCazanFrailecillos },
  "las-ovejas-que-le-dieron-nombre-a-las-islas": { component: LasOvejasQueLeDieronNombreALasIslas },
  "el-lago-que-parece-flotar-sobre-el-oceano": { component: ElLagoQuePareceFlotarSobreElOceano },
  "el-cordero-fermentado-que-cuelga-meses-al-viento": { component: ElCorderoFermentadoQueCuelgaMesesAlViento },
  "una-de-las-capitales-mas-pequenas-del-mundo": { component: UnaDeLasCapitalesMasPequenasDelMundo },
  "el-idioma-vikingo-que-sobrevivio-gracias-al-orgullo": { component: ElIdiomaVikingoQueSobrevivioGraciasAlOrgullo },
  "la-caza-de-ballenas-piloto-que-divide-opiniones": { component: LaCazaDeBallenasPilotoQueDivideOpiniones },
  "la-victoria-imposible-del-futbol-feroes": { component: LaVictoriaImposibleDelFutbolFeroes },
  "la-rotonda-submarina-con-arte-de-luz": { component: LaRotondaSubmarinaConArteDeLuz },
};
