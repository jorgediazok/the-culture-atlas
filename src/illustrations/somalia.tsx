import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

// Standing figure: head circle bottom sits at y=-28 (center -38, r10); the
// robe's top curve peaks at y=-31 (t=0.5 on the quad Bezier), a point 7
// units inside the head circle's radius (distance 7 < r10) — solid overlap,
// no gap. Vetted pattern shared with togo.tsx / niger.tsx.
function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`p-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

// Seated figure, same head/robe overlap ratio as person() scaled down
// (head r9 centered -30, robe top curve peaks at -23.5, distance 6.5 < r9).
function seated(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`s-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-30" r="9" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-12 -21 Q0 -26 12 -21 L20 6 Q0 12 -20 6 Z" fill={robe} stroke={dark} strokeWidth="2" />
    </g>
  );
}

// Camel: legs drawn first, body drawn second so the body's fill absorbs the
// leg tops. Checked numerically against the body path's true quadratic-
// Bezier boundary (not a bounding box): at leg x=-22/-9/9/22 the body's
// bottom curve sits at y=18.0/20.3/20.3/18.0 while the legs start at
// y=12/12/10/9 — overlaps of 6-10 units, all positive, into a filled core
// drawn after.
function camel(x: number, y: number, scale: number, dark: string, loadColor?: string) {
  return (
    <g key={`camel-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-22 12 L-24 40 M-9 12 L-11 40 M9 10 L11 38 M22 9 L25 37" stroke={dark} strokeWidth="4.4" strokeLinecap="round" />
      <path d="M-32 14 Q-28 -8 -12 -14 Q0 -22 10 -13 Q26 -9 32 14 Q16 22 0 20 Q-16 22 -32 14 Z" fill={dark} stroke="#2A1A0E" strokeWidth="2.4" />
      <path d="M24 -4 Q38 -18 42 -34 Q43 -40 38 -41 L31 -37 Q29 -26 20 -14 Z" fill={dark} stroke="#2A1A0E" strokeWidth="2.4" />
      <ellipse cx="40" cy="-38" rx="4" ry="3" fill="#2A1A0E" />
      <path d="M-30 12 Q-38 20 -35 32" stroke={dark} strokeWidth="3.4" fill="none" strokeLinecap="round" />
      {loadColor && (
        <>
          <rect x="-8" y="-24" width="18" height="12" fill={loadColor} stroke="#2A1A0E" strokeWidth="1.8" transform="rotate(-8)" />
          <rect x="-6" y="-30" width="16" height="10" fill={tint(loadColor, 0.25)} stroke="#2A1A0E" strokeWidth="1.6" transform="rotate(-8)" />
        </>
      )}
    </g>
  );
}

// Cow (side profile, for the Laas Geel rock-art panel): torso+neck/head is
// the same proven silhouette proportions as niger.tsx's horse() (explicitly
// the reference joint-overlap fix), with horns swept sideways instead of a
// mane (per the "no bunny-ear horns" rule — short, thick, horizontal sweep).
// Legs checked the same way as camel() above: leg tops sit inside the
// torso's lower curve, torso/neck drawn after the legs so the fill covers
// the seam.
function cow(x: number, y: number, scale: number, dark: string, hornColor: string) {
  return (
    <g key={`cow-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-20 13 L-23 38 M-6 16 L-9 40 M8 13 L6 38 M22 10 L25 35" stroke={dark} strokeWidth="4.6" strokeLinecap="round" />
      <path d="M-30 10 Q-33 -10 -12 -14 Q10 -17 28 -6 Q33 0 28 11 Q10 18 -10 17 Q-24 18 -30 10 Z" fill={dark} stroke="#1A0F08" strokeWidth="2.4" />
      <path d="M24 -6 Q37 -20 38 -33 Q38 -38 33 -38 L26 -31 Q23 -20 15 -11 Z" fill={dark} stroke="#1A0F08" strokeWidth="2.4" />
      <path d="M33 -35 Q16 -42 6 -37" stroke={hornColor} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M34 -33 Q47 -30 55 -21" stroke={hornColor} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M-30 12 Q-42 20 -37 34" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  );
}

const LaTierraDePuntQueComerciabaConLosFaraones: IllustrationComponent = () => (
  <g>
    <path d="M90 210 Q200 195 320 212 L320 250 L90 250 Z" fill="#1B7A9C" opacity="0.5" />
    {/* mast drawn first (bottom reaches y=205), hull drawn second: hull top
        edge sits at y~184 at this x, so the mast's bottom is 21 units deep
        inside the hull's fill, well past the 15-25 target. */}
    <rect x="196" y="105" width="8" height="100" fill="#5C3A21" />
    <path d="M204 115 L204 175 L252 143 Z" fill="#F5F0E6" stroke="#C9B98A" strokeWidth="2" />
    <path d="M100 195 Q110 220 200 224 Q290 220 300 195 Q295 183 200 185 Q105 183 100 195 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.6" />
    {/* potted tree: trunk drawn first (top y=150, bottom y=200), canopy
        second (ellipse cy=145 ry=14 -> bottom 159, overlap 9 into trunk
        top), pot last (top edge at cy192-ry7=185, trunk bottom 200 is 15
        units past it, pot fill covers that span). */}
    <rect x="146" y="150" width="8" height="50" fill="#5C3A21" />
    <ellipse cx="150" cy="145" rx="20" ry="14" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2" />
    <ellipse cx="150" cy="192" rx="14" ry="7" fill="#B5651D" stroke="#6B3A18" strokeWidth="2" />
    <ellipse cx="255" cy="205" rx="10" ry="14" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2" />
    <path d="M251 191 L259 191 L257 183 L253 183 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="1.6" />
  </g>
);

const ElInciensoYLaMirraQuePerfumanElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* trunk drawn first (top y=130, bottom y=240), canopy clusters
          second (each ellipse bottom reaches y=140, overlap 10 into the
          trunk top). */}
      <path d="M195 240 Q186 180 195 132 Q200 122 208 132 Q217 180 208 240 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
      {[[188, 122], [204, 112], [218, 124]].map(([cx, cy], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="16" ry="18" fill="#5C7A3A" stroke="#3A5222" strokeWidth="1.8" />
      ))}
      <path d="M203 165 L206 175 Q208 182 202 184" fill="none" stroke="#D9A227" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="202" cy="186" rx="4" ry="5" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.4" />
      {person(165, 225, 1.05, dark, accentColor)}
      <path d="M180 205 Q195 195 200 178" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="160" cy="238" rx="18" ry="10" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2" />
    </g>
  );
};

const ElArteRupestreMasAntiguoDeAfricaOriental: IllustrationComponent = () => (
  <g>
    <path d="M95 250 L95 130 Q95 95 160 90 L280 90 Q315 95 315 135 L315 250 Z" fill="#D9C08A" stroke="#8A6A3A" strokeWidth="3" />
    {cow(165, 175, 1.05, "#8A2A18", "#5C1810")}
    {cow(240, 185, 0.95, "#B5651D", "#7A4A20")}
    {/* rock-art herder: simple stroke-only stick figure, every segment
        shares an exact endpoint with the next, so there is no gap to
        check numerically — continuity is structural, not overlap-based. */}
    <g transform="translate(115 160)" stroke="#8A2A18" strokeWidth="4" strokeLinecap="round" fill="none">
      <circle cx="0" cy="-32" r="6" fill="#8A2A18" stroke="none" />
      <path d="M0 -26 L0 0" />
      <path d="M0 -18 L-16 -34 M0 -18 L16 -34" />
      <path d="M0 0 L-10 22 M0 0 L10 22" />
    </g>
  </g>
);

const LaNacionDePoetasQueMemorizaVersosEnteros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="115" ry="10" fill="#3A2A1E" opacity="0.25" />
      {person(150, 205, 1.15, dark, accentColor)}
      <path d="M158 178 Q172 165 168 148" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {seated(220, 232, 0.9, "#5C3A21", "#3A7A45")}
      {seated(258, 236, 0.85, "#5C3A21", "#C1272D")}
      {seated(285, 228, 0.8, "#5C3A21", "#D9A227")}
      <g transform="translate(255 246)">
        <path d="M-10 0 L0 -18 L10 0 Z" fill="#D9A227" opacity="0.85" />
        <path d="M-5 0 L0 -10 L5 0 Z" fill="#C1272D" opacity="0.9" />
      </g>
    </g>
  );
};

const ElPaisConMasCamellosDeTodoElPlaneta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q170 228 260 246 Q290 250 320 240" fill="#E8D3A0" opacity="0.6" />
      {camel(150, 195, 1, "#8B5A2B")}
      {camel(215, 205, 1.1, "#B5651D")}
      {camel(280, 198, 0.95, "#A0522D")}
      {person(150, 158, 0.6, dark, accentColor)}
    </g>
  );
};

const LaCasaQueSeDesarmaYSeLlevaEnUnCamello: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="180" cy="248" rx="90" ry="10" fill="#8B5A2B" opacity="0.3" />
      {/* dome frame: self-contained arcs, each a single continuous stroke
          from one foot to the other, no separate pieces to join. */}
      <path d="M120 235 Q120 165 175 155 Q230 165 230 235" fill="none" stroke="#5C3A21" strokeWidth="4" />
      <path d="M130 235 Q132 175 175 163" fill="none" stroke="#5C3A21" strokeWidth="3" />
      <path d="M220 235 Q218 175 175 163" fill="none" stroke="#5C3A21" strokeWidth="3" />
      {/* mat covering: opaque overlay drawn after the frame, intentionally
          layered rather than a jointed piece. */}
      <path d="M125 232 Q125 170 175 160 Q225 170 225 232 Q175 245 125 232 Z" fill="#D9C08A" opacity="0.9" stroke="#8A6A3A" strokeWidth="2" />
      <path d="M175 160 L175 245" stroke="#8A6A3A" strokeWidth="1.6" opacity="0.6" />
      {person(115, 220, 0.9, dark, accentColor)}
      <path d="M133 200 Q145 190 158 195" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      {camel(290, 205, 0.85, "#8B5A2B", "#D9A227")}
    </g>
  );
};

const ElAlfabetoInventadoParaEscribirElSomali: IllustrationComponent = ({ accentColor }) => (
  <g>
    <rect x="120" y="100" width="180" height="130" fill="#C9C0A8" stroke="#6B6350" strokeWidth="3" />
    <path d="M150 140 Q150 120 170 120 Q190 120 190 140 Q190 155 170 155 L170 195" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
    <path d="M215 122 L215 195 M215 122 L245 150 M215 160 L245 195" fill="none" stroke="#C1272D" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M262 195 Q262 155 262 122 Q262 118 275 118 Q288 118 288 135 Q288 150 270 150" fill="none" stroke="#3A7A45" strokeWidth="9" strokeLinecap="round" />
  </g>
);

const LaLeyQueNuncaSeEscribioEnNingunPapel: IllustrationComponent = () => (
  <g>
    {/* shade tree: trunk first (top y=120, bottom y=245), canopy second
        (ellipse cy=110 ry=42 -> bottom 152, overlap 32 into trunk top). */}
    <path d="M197 245 L203 245 L207 120 L193 120 Z" fill="#5C3A21" stroke="#3A2410" strokeWidth="2.4" />
    <ellipse cx="200" cy="105" rx="70" ry="42" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.6" />
    <ellipse cx="205" cy="245" rx="100" ry="10" fill="#3A2A1E" opacity="0.2" />
    {seated(150, 225, 1, "#3A2A1E", "#8B5A2B")}
    {seated(200, 235, 1, "#3A2A1E", "#C1272D")}
    {seated(250, 228, 1, "#3A2A1E", "#D9A227")}
    {seated(275, 205, 0.9, "#3A2A1E", "#1B7A9C")}
  </g>
);

const ElTeEspeciadoQueRecibeACadaVisitante: IllustrationComponent = () => (
  <g>
    {/* teapot: spout and handle drawn first with their base points well
        inside the body ellipse (cx200 cy190 rx45 ry32) — spout base
        (225,175) gives (dx/rx)^2+(dy/ry)^2=0.53<1, handle bases (170,175)
        and (170,205) give 0.66<1 — both comfortably interior, body drawn
        after covers the seams. Lid drawn last on top of the body's neck. */}
    <path d="M225 175 Q265 165 280 145 Q283 140 278 138 Q265 155 232 195 Z" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2" />
    <path d="M170 175 Q140 172 138 200 Q137 215 155 218 Q145 200 170 205 Z" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2" />
    <ellipse cx="200" cy="190" rx="45" ry="32" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2.4" />
    <ellipse cx="200" cy="160" rx="18" ry="10" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2" />
    <circle cx="200" cy="152" r="5" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.4" />
    <path d="M278 140 Q295 155 300 172" fill="none" stroke="#A0522D" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
    <path d="M292 178 L288 220 L312 220 L308 178 Z" fill="#F5F0E6" opacity="0.3" stroke="#C9B98A" strokeWidth="2" />
    <path d="M292 178 L288 220 L312 220 L308 178 Z" fill="none" stroke="#C9B98A" strokeWidth="2" />
    <path d="M296 195 L304 195 L303 218 L297 218 Z" fill="#A0522D" opacity="0.9" />
    <path d="M150 128 Q146 115 152 105 M162 130 Q158 115 165 103" stroke="#C9C0A8" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
  </g>
);

const LosDibujosDeHennaParaBodasYParaEid: IllustrationComponent = () => (
  <g>
    <path
      d="M175 245 Q160 240 158 215 L156 165 Q155 155 163 155 Q170 155 171 166 L172 190 L175 150 Q175 140 183 140 Q191 140 191 150 L192 188 L196 148 Q197 139 205 140 Q213 141 212 151 L210 190 L216 155 Q218 146 226 149 Q233 152 231 162 L222 210 Q240 220 238 245 Z"
      fill="#C9946B"
      stroke="#7A4A20"
      strokeWidth="2.6"
    />
    <g stroke="#8A2A18" strokeWidth="1.8" fill="none" opacity="0.9">
      <path d="M170 200 Q180 195 190 200 Q200 195 210 200" />
      <path d="M175 215 Q185 210 195 215" />
      <circle cx="182" cy="175" r="6" />
      <circle cx="200" cy="172" r="6" />
      <path d="M182 169 L182 181 M176 175 L188 175" />
      <path d="M200 166 L200 178 M194 172 L206 172" />
      <path d="M168 230 Q180 224 192 230 Q204 224 216 230" />
    </g>
    <path d="M245 195 L280 175 Q288 171 292 178 Q296 185 288 190 L253 210 Z" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2.2" />
    <path d="M245 195 L253 210 L238 218 Z" fill="#8A6A45" stroke="#3A2410" strokeWidth="1.8" />
    <circle cx="240" cy="211" r="2.6" fill="#3A2A1E" />
  </g>
);

const CocinaSomaliCanjeero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bread = "#E8CE94";
  const rice = "#E8C87A";
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <ellipse key={i} cx={155} cy={195 - i * 12} rx="55" ry="16" fill={bread} stroke={dark} strokeWidth="2.5" transform={`translate(${i * 4} 0)`} />
      ))}
      {[120, 140, 160, 180].map((x) => (
        <circle key={x} cx={x} cy="171" r="2" fill={dark} opacity="0.4" />
      ))}
      <path d="M235 235 Q225 175 275 175 Q315 175 305 235 Z" fill={rice} stroke={shade(rice, 0.3)} strokeWidth="3" />
      {[[255, 205], [280, 195], [265, 220]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} l14 -8 6 12 -14 8 Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const HawalaSistemaTransferencias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skinA = "#8A5C38";
  const skinB = "#5C3A22";
  const counter = tint(accentColor, 0.4);
  return (
    <g>
      {[110, 275].map((x) => (
        <rect key={x} x={x} y="190" width="35" height="45" fill={counter} stroke={dark} strokeWidth="2.5" />
      ))}
      <path d="M145 195 Q205 175 265 195" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="6 5" opacity="0.6" />
      <ellipse cx="127" cy="170" rx="14" ry="15" fill={skinA} stroke={shade(skinA, 0.3)} strokeWidth="2" />
      <ellipse cx="292" cy="170" rx="14" ry="15" fill={skinB} stroke={shade(skinB, 0.3)} strokeWidth="2" />
      <path d="M141 190 Q175 180 195 188" fill="none" stroke={skinA} strokeWidth="7" strokeLinecap="round" />
      <path d="M278 190 Q245 180 225 188" fill="none" stroke={skinB} strokeWidth="7" strokeLinecap="round" />
      <circle cx="205" cy="188" r="9" fill={dark} opacity="0.5" />
      {/* phones */}
      <rect x="118" y="150" width="12" height="18" rx="2" fill={dark} transform="rotate(-15 124 159)" />
      <rect x="283" y="150" width="12" height="18" rx="2" fill={dark} transform="rotate(15 289 159)" />
    </g>
  );
};

const VestimentaGuntiino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8A5C38";
  const cloth = accentColor;
  return (
    <g>
      <path d="M175 240 L170 150 Q205 130 225 155 L245 240 Z" fill={cloth} stroke={dark} strokeWidth="3" />
      <path d="M188 155 Q170 145 178 130 Q195 125 200 145 Z" fill={tint(cloth, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M170 150 Q160 145 158 132" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <ellipse cx="205" cy="118" rx="15" ry="16" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M190 116 Q190 96 205 94 Q220 96 220 116 Q212 106 205 106 Q198 106 190 116 Z" fill="#2A2A2E" />
      <path d="M180 235 Q205 226 230 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const DhaantoDanzaSomali: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skins = ["#8A5C38", "#C99A6B", "#5C3A22"];
  return (
    <g>
      {[0, 1, 2].map((i) => {
        const x = 140 + i * 65;
        const skin = skins[i];
        const lean = i % 2 ? 8 : -8;
        return (
          <g key={i} transform={`translate(${lean} 0)`}>
            <path d={`M${x - 16} 240 L${x - 14} 190 Q${x} 178 ${x + 14} 190 L${x + 16} 240 Z`} fill={tint(accentColor, i % 2 ? 0.15 : 0.4)} stroke={dark} strokeWidth="2.5" />
            <ellipse cx={x} cy="172" rx="13" ry="14" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
            {i < 2 && (
              <line x1={x + 13} y1="188" x2={x + 65 - 13} y2="188" stroke={skin} strokeWidth="7" strokeLinecap="round" />
            )}
          </g>
        );
      })}
    </g>
  );
};

const HeelloGeneroMusical: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const machine = "#4A4A50";
  const skin = "#8A5C38";
  return (
    <g>
      <rect x="105" y="180" width="90" height="45" rx="6" fill={machine} stroke={dark} strokeWidth="2.5" />
      <rect x="112" y="192" width="76" height="18" fill="#2A2A2E" />
      {[120, 135, 150, 165, 180].map((x) => (
        <rect key={x} x={x} y="212" width="8" height="8" fill="#D8D0C4" stroke={dark} strokeWidth="1" />
      ))}
      <rect x="140" y="170" width="20" height="10" fill={dark} />
      {/* singer */}
      <path d="M235 240 L231 165 Q260 148 285 165 L281 240 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <ellipse cx="258" cy="150" rx="15" ry="16" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <line x1="258" y1="188" x2="258" y2="235" stroke={dark} strokeWidth="4" />
      <circle cx="258" cy="180" r="10" fill={dark} />
    </g>
  );
};

const SultanatoAdalComercio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#2E86AB";
  const sail = "#E8DCC0";
  return (
    <g>
      <path d="M90 235 Q205 225 320 235 L320 250 L90 250 Z" fill={water} />
      {[[140, 200], [260, 195]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x - 22} ${y} Q${x} ${y + 10} ${x + 22} ${y} L${x + 16} ${y + 22} L${x - 16} ${y + 22} Z`} fill={shade(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
          <line x1={x} y1={y} x2={x} y2={y - 45} stroke={dark} strokeWidth="3" />
          <path d={`M${x} ${y - 45} L${x + 24} ${y - 5} L${x} ${y - 5} Z`} fill={sail} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {[125, 148, 245, 268].map((x) => (
        <rect key={x} x={x} y="215" width="10" height="12" fill="#C99A3C" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const PuertoBerberaAntiguo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#2E86AB";
  const sand = "#E8D6A8";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={sand} />
      <path d="M90 200 Q205 190 320 200 L320 90 L90 90 Z" fill={water} />
      {[[140, 150], [230, 165]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x - 20} ${y + 30} L${x} ${y} L${x + 20} ${y + 30} Z`} fill={shade(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
          <line x1={x} y1={y} x2={x} y2={y - 15} stroke={dark} strokeWidth="2.5" />
        </g>
      ))}
      {/* sacks of goods on the dock */}
      {[110, 135, 290].map((x) => (
        <ellipse key={x} cx={x} cy="215" rx="12" ry="14" fill="#C99A3C" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const ComunidadBravaneseChimwiini: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = tint(accentColor, 0.4);
  const mosque = "#F2EFE6";
  return (
    <g>
      <rect x="95" y="160" width="90" height="80" fill={stone} stroke={dark} strokeWidth="2.5" />
      <rect x="105" y="175" width="16" height="20" fill={dark} opacity="0.4" />
      <rect x="140" y="175" width="16" height="20" fill={dark} opacity="0.4" />
      {/* mosque */}
      <rect x="210" y="185" width="90" height="55" fill={mosque} stroke={dark} strokeWidth="2.5" />
      <path d="M235 185 Q255 155 275 185 Z" fill={mosque} stroke={dark} strokeWidth="2.5" />
      <rect x="290" y="130" width="16" height="80" fill={mosque} stroke={dark} strokeWidth="2.5" />
      <path d="M290 130 Q298 118 306 130 Z" fill={mosque} stroke={dark} strokeWidth="2" />
      <path d="M90 240 L320 240 L320 250 L90 250 Z" fill={dark} opacity="0.3" />
    </g>
  );
};

const UunsiInciensoDomestico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const clay = "#9C6B44";
  const smoke = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M175 235 Q170 205 205 200 Q240 205 235 235 Z" fill={clay} stroke={shade(clay, 0.3)} strokeWidth="3" />
      <ellipse cx="205" cy="200" rx="30" ry="9" fill={shade(clay, 0.15)} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="198" rx="20" ry="5" fill="#C4874A" />
      {[-14, 0, 16].map((d, i) => (
        <path
          key={i}
          d={`M${205 + d} 195 Q${195 + d} 160 ${210 + d} 135 Q${200 + d} 105 ${215 + d} 80`}
          fill="none"
          stroke={smoke}
          strokeWidth="5"
          opacity="0.55"
        />
      ))}
    </g>
  );
};

const BuraanburPoesiaFemenina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skins = ["#8A5C38", "#C99A6B", "#5C3A22"];
  const drum = "#7A4A2B";
  return (
    <g>
      <path d="M195 240 L190 195 Q205 182 220 195 L215 240 Z" fill={drum} stroke={shade(drum, 0.3)} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="15" ry="7" fill="#E8DCC0" stroke={dark} strokeWidth="2" />
      {skins.map((skin, i) => {
        const x = 130 + i * 90;
        return (
          <g key={i}>
            <path d={`M${x - 16} 240 L${x - 14} 195 Q${x} 184 ${x + 14} 195 L${x + 16} 240 Z`} fill={tint(accentColor, i % 2 ? 0.3 : 0.1)} stroke={dark} strokeWidth="2.5" />
            <ellipse cx={x} cy="178" rx="13" ry="14" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
            <path d={`M${x - 10} 194 q10 8 20 0`} fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
          </g>
        );
      })}
    </g>
  );
};

export const somaliaIllustrations: Record<string, IllustrationDefinition> = {
  "la-tierra-de-punt-que-comerciaba-con-los-faraones": { component: LaTierraDePuntQueComerciabaConLosFaraones },
  "el-incienso-y-la-mirra-que-perfuman-el-mundo": { component: ElInciensoYLaMirraQuePerfumanElMundo },
  "el-arte-rupestre-mas-antiguo-de-africa-oriental": { component: ElArteRupestreMasAntiguoDeAfricaOriental },
  "la-nacion-de-poetas-que-memoriza-versos-enteros": { component: LaNacionDePoetasQueMemorizaVersosEnteros },
  "el-pais-con-mas-camellos-de-todo-el-planeta": { component: ElPaisConMasCamellosDeTodoElPlaneta },
  "la-casa-que-se-desarma-y-se-lleva-en-un-camello": { component: LaCasaQueSeDesarmaYSeLlevaEnUnCamello },
  "el-alfabeto-inventado-para-escribir-el-somali": { component: ElAlfabetoInventadoParaEscribirElSomali },
  "la-ley-que-nunca-se-escribio-en-ningun-papel": { component: LaLeyQueNuncaSeEscribioEnNingunPapel },
  "el-te-especiado-que-recibe-a-cada-visitante": { component: ElTeEspeciadoQueRecibeACadaVisitante },
  "los-dibujos-de-henna-para-bodas-y-para-eid": { component: LosDibujosDeHennaParaBodasYParaEid },
  "cocina-somali-canjeero": { component: CocinaSomaliCanjeero },
  "hawala-sistema-transferencias": { component: HawalaSistemaTransferencias },
  "vestimenta-guntiino": { component: VestimentaGuntiino },
  "dhaanto-danza-somali": { component: DhaantoDanzaSomali },
  "heello-genero-musical": { component: HeelloGeneroMusical },
  "sultanato-adal-comercio": { component: SultanatoAdalComercio },
  "puerto-berbera-antiguo": { component: PuertoBerberaAntiguo },
  "comunidad-bravanese-chimwiini": { component: ComunidadBravaneseChimwiini },
  "uunsi-incienso-domestico": { component: UunsiInciensoDomestico },
  "buraanbur-poesia-femenina": { component: BuraanburPoesiaFemenina },
};
