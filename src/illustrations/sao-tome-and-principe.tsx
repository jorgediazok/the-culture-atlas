import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

// Reusable cacao tree: trunk drawn FIRST, canopy ellipse SECOND so the canopy's
// opaque fill covers the trunk's top seam. Trunk top sits ~20 units inside the
// canopy ellipse's true bottom edge (canopy cy=0 ry=25 -> bottom edge ~25 at
// center and ~24.8 at the trunk's x=+/-3 edges; trunk top at y=5 overlaps by
// ~20 either way), well within the 15-25 target.
function cacaoTree(x: number, y: number, scale: number) {
  return (
    <g key={`ct-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-3" y="5" width="6" height="34" fill="#5C3A21" stroke="#3A2410" strokeWidth="1.6" />
      <ellipse cx="0" cy="0" rx="24" ry="25" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.2" />
      <ellipse cx="15" cy="6" rx="6" ry="10" fill="#D9A227" stroke="#8A5A10" strokeWidth="1.4" transform="rotate(20 15 6)" />
      <ellipse cx="-13" cy="10" rx="5" ry="9" fill="#C1272D" stroke="#7A1818" strokeWidth="1.4" transform="rotate(-15 -13 10)" />
    </g>
  );
}

// Palm tree: trunk and fronds are strokes (not filled areas), so a shared
// endpoint at (4,-34) is a true zero-gap join, not an approximation — safer
// than a filled-shape overlap for this thin-stroke case.
function palmTree(x: number, y: number, scale: number) {
  return (
    <g key={`pt-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 40 Q-6 0 4 -34" stroke="#6B4423" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path
        d="M4 -34 Q-24 -46 -40 -34 M4 -34 Q28 -50 46 -40 M4 -34 Q4 -58 0 -70 M4 -34 Q-14 -50 -24 -60 M4 -34 Q22 -48 34 -58"
        stroke="#2E7D32"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

// 1. Las mansiones que cultivaron el cacao del mundo — a roça manor house
// with columns fronting rows of cacao trees. Roof triangle base and wall
// rect top share the exact same y (118), a straight-edge join that cannot
// leave a gap. Columns/door extend below the wall into the porch slab.
const LasMansionesQueCultivaronElCacaoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M115 118 L200 68 L285 118 Z" fill="#7A4A28" stroke="#4A2E14" strokeWidth="2.6" />
      <rect x="130" y="118" width="140" height="90" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2.6" />
      {[150, 178, 206, 234].map((cx, i) => (
        <rect key={i} x={cx - 5} y="155" width="10" height="55" fill="#D9C9A3" stroke="#8B7355" strokeWidth="1.8" />
      ))}
      <rect x="122" y="206" width="156" height="14" fill="#C9BBA0" stroke="#8B7355" strokeWidth="2" />
      <rect x="185" y="168" width="30" height="42" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="150" y="136" width="20" height="18" fill="#1B7A9C" opacity="0.6" stroke="#8B7355" strokeWidth="1.6" />
      <rect x="230" y="136" width="20" height="18" fill="#1B7A9C" opacity="0.6" stroke="#8B7355" strokeWidth="1.6" />
      {cacaoTree(110, 238, 0.62)}
      {cacaoTree(148, 246, 0.55)}
      {cacaoTree(258, 244, 0.58)}
      {cacaoTree(300, 236, 0.65)}
    </g>
  );
};

// 2. La aguja de roca que perfora la selva — Pico Cão Grande. The spire's
// base already meets the ground line (y=248); canopy clumps at the base
// are drawn AFTER the spire so their opaque fill grounds the seam visually.
const LaAgujaDeRocaQuePerforaLaSelva: IllustrationComponent = () => {
  function canopyClump(x: number, y: number, scale: number) {
    return (
      <g key={`cc-${x}`} transform={`translate(${x} ${y}) scale(${scale})`}>
        <ellipse cx="0" cy="0" rx="34" ry="20" fill="#2E7D32" stroke="#1B4B1E" strokeWidth="2.2" />
        <ellipse cx="-14" cy="-6" rx="16" ry="11" fill="#3A9245" opacity="0.85" />
        <ellipse cx="16" cy="-4" rx="14" ry="10" fill="#3A9245" opacity="0.85" />
      </g>
    );
  }
  return (
    <g>
      <path
        d="M180 248 Q178 190 188 140 Q196 105 205 90 Q214 105 222 140 Q232 190 230 248 Z"
        fill="#8C8272"
        stroke="#5C5548"
        strokeWidth="2.8"
      />
      <path d="M205 96 L205 244" stroke="#6B6458" strokeWidth="2" opacity="0.5" />
      <path d="M232 118 Q240 112 248 118 Q240 114 232 118" stroke="#1B1B1B" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M165 108 Q173 102 181 108 Q173 104 165 108" stroke="#1B1B1B" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {canopyClump(115, 238, 1)}
      {canopyClump(160, 244, 0.85)}
      {canopyClump(192, 236, 0.8)}
      {canopyClump(228, 238, 0.85)}
      {canopyClump(268, 244, 0.9)}
      {canopyClump(305, 236, 0.75)}
    </g>
  );
};

// 3. El islote donde se pisan dos hemisferios — Ilhéu das Rolas equator
// monument. Pillar drawn FIRST, globe sphere SECOND: pillar top (y=135)
// sits ~20 units inside the sphere's true bottom edge (cy=140,r=16 -> edge
// ~155.5 at the pillar's x=197/205 sides), well within 15-25.
const ElIsloteDondeSePisanDosHemisferios: IllustrationComponent = () => (
  <g>
    <path d="M90 80 L320 80 L320 195 L90 195 Z" fill="#1B7A9C" opacity="0.45" />
    <path d="M90 195 L320 195 L320 250 L90 250 Z" fill="#3FBFC4" opacity="0.5" />
    <ellipse cx="200" cy="222" rx="115" ry="30" fill="#E8D3A0" stroke="#C9B98A" strokeWidth="2.4" />
    <path d="M90 140 L320 140" stroke="#F5F0E6" strokeWidth="3" strokeDasharray="10 8" opacity="0.85" />
    <rect x="197" y="135" width="8" height="85" fill="#C9C2B0" stroke="#8B7355" strokeWidth="2.2" />
    <circle cx="201" cy="140" r="16" fill="#1B7A9C" stroke="#0F4A5C" strokeWidth="2.4" />
    <path d="M185 140 L217 140" stroke="#F5F0E6" strokeWidth="2.4" />
    <path d="M201 124 L201 156" stroke="#F5F0E6" strokeWidth="1.6" opacity="0.7" />
    {palmTree(130, 224, 0.85)}
    {palmTree(275, 226, 0.95)}
  </g>
);

// 4. El teatro popular que reinventó una tragedia real — two Tchiloli
// performers with feathered hats and swords. Body/head/arm joints reuse the
// vetted person()-style anatomy inline. Sword blade starts exactly at the
// hand path's own endpoint (24,-2) — a shared coordinate, zero gap.
const ElTeatroPopularQueReinventoUnaTragediaReal: IllustrationComponent = ({ accentColor }) => {
  function performer(x: number, y: number, scale: number, robe: string, feather: string) {
    const dark = shade(robe, 0.45);
    return (
      <g key={`perf-${x}`} transform={`translate(${x} ${y}) scale(${scale})`}>
        <path d="M-14 -24 Q-24 -12 -20 4" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
        <path d="M14 -24 Q26 -16 24 -2" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
        <path d="M24 -2 L38 -28" stroke="#C9CDD3" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 -16 L40 -22 L37 -27 L28 -21 Z" fill="#C9CDD3" stroke="#6B6F76" strokeWidth="1.4" />
        <path d="M-10 -50 L-16 -66 M0 -52 L0 -70 M10 -50 L16 -66" stroke={feather} strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="-38" r="10" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
        <ellipse cx="0" cy="-45" rx="10" ry="4.5" fill={feather} stroke={shade(feather, 0.4)} strokeWidth="1.6" />
        <path d="M-14 -28 Q0 -34 14 -28 L18 12 Q0 20 -18 12 Z" fill={robe} stroke={dark} strokeWidth="2.2" />
      </g>
    );
  }
  return (
    <g>
      <ellipse cx="205" cy="248" rx="120" ry="10" fill="#3A2A1E" opacity="0.2" />
      {performer(160, 225, 1.15, accentColor, "#D9A227")}
      {performer(250, 228, 1.05, "#1B4B6B", "#F5F0E6")}
    </g>
  );
};

// 5. El bosque de aves que no existen en otro lugar — an endemic forest
// bird on a branch. Joint check against the body ellipse's TRUE curve, not
// its bounding box:
//  - body ellipse cx=205 cy=178 rx=40 ry=30.
//  - head circle cx=225 cy=158 r=17: at x=225 (dx=20 from body center), the
//    body's true y-edge is 178 +/- 30*sqrt(1-(20/40)^2)=178+/-25.98, i.e.
//    [152.0, 204.0]; the head circle at that x spans y=[141,175]; the
//    overlap between [152,204] and [141,175] is [152,175] = 23 units.
//  - tail base x=183: body left edge (at center height) is cx-rx=165, so
//    183-165=18 units inside.
//  - legs top y=188, at x=195/215 (dx=10) the body's true bottom edge is
//    178+30*sqrt(1-(10/40)^2)=178+29.05=207.05, so 207-188=19 units inside.
// All three land in the 15-25 target. Legs/tail/beak/head are drawn BEFORE
// the body ellipse so its opaque fill absorbs every seam; the eye is drawn
// LAST so it always stays visible regardless of layering underneath.
const ElBosqueDeAvesQueNoExistenEnOtroLugar: IllustrationComponent = () => (
  <g>
    <ellipse cx="205" cy="130" rx="130" ry="65" fill="#1B4B1E" opacity="0.3" />
    {[[110, 108], [305, 102], [150, 86], [262, 84]].map(([px, py], i) => (
      <ellipse key={i} cx={px} cy={py} rx="36" ry="24" fill="#2E7D32" stroke="#1B4B1E" strokeWidth="2" opacity="0.75" />
    ))}
    <path d="M150 228 Q205 221 292 228" stroke="#5C3A21" strokeWidth="7" fill="none" strokeLinecap="round" />
    <path d="M175 220 Q170 212 178 204 M228 220 Q235 212 243 206" stroke="#2E7D32" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M195 188 L193 228 M215 188 L217 228" stroke="#3A2A1E" strokeWidth="4.4" strokeLinecap="round" />
    <path d="M193 228 L185 234 M193 228 L201 234 M217 228 L209 234 M217 228 L225 234" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
    <path d="M183 178 Q155 182 137 176 M183 178 Q158 191 140 191" stroke="#4A6B3A" strokeWidth="7" fill="none" strokeLinecap="round" />
    <path d="M235 150 L262 141 L244 160 Z" fill="#D9822B" stroke="#8A5010" strokeWidth="2" />
    <circle cx="225" cy="158" r="17" fill="#1B1B1B" stroke="#000000" strokeWidth="1.8" />
    <ellipse cx="205" cy="178" rx="40" ry="30" fill="#4A6B3A" stroke="#1B4B1E" strokeWidth="2.6" />
    <ellipse cx="205" cy="190" rx="26" ry="16" fill="#F5F0E6" opacity="0.9" />
    <path d="M197 162 Q228 168 235 194 Q212 198 192 186 Z" fill="#3A5222" stroke="#1B4B1E" strokeWidth="2" />
    <circle cx="231" cy="153" r="2.2" fill="#F5F0E6" />
  </g>
);

// 6. El guiso que reúne pescado seco y hojas del monte — calulu bowl with a
// piece of fish, served beside fried plantain. Static stacked shapes, no
// multi-part joints.
const ElGuisoQueReunePescadoSecoYHojasDelMonte: IllustrationComponent = () => (
  <g>
    <ellipse cx="185" cy="205" rx="95" ry="26" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.6" />
    <ellipse cx="185" cy="198" rx="80" ry="20" fill="#1B4B1E" stroke="#0F2E10" strokeWidth="2.2" />
    <path d="M150 192 Q170 184 195 192 Q180 200 158 198 Z" fill="#4A6B3A" opacity="0.85" />
    <path d="M205 194 L228 186 L230 202 Z" fill="#C9A98A" stroke="#8B6F47" strokeWidth="1.8" />
    <circle cx="212" cy="196" r="1.8" fill="#1A1A1A" />
    <ellipse cx="270" cy="212" rx="34" ry="22" fill="#D9A227" stroke="#8A5A10" strokeWidth="2.4" />
    <path d="M250 208 Q270 200 292 210 M252 218 Q270 212 290 220" stroke="#8A5A10" strokeWidth="1.6" opacity="0.6" />
  </g>
);

// 7. Los bailes que marcan cada ritmo de la isla — two dancers (ússua /
// socopé) with a drum, reusing the vetted person() anatomy, plus motion
// swirls for movement.
const LosBailesQueMarcanCadaRitmoDeLaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="210" cy="248" rx="120" ry="10" fill="#3A2A1E" opacity="0.2" />
      {person(145, 228, 1.15, dark, accentColor)}
      {person(225, 232, 1.05, "#3A2A1E", "#D9A227")}
      <path d="M290 250 L288 208 Q288 198 300 198 Q312 198 312 208 L310 250 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.4" />
      <ellipse cx="300" cy="198" rx="12" ry="6" fill="#D9C08A" stroke="#4A2E14" strokeWidth="2" />
      <path d="M288 213 L312 213 M289 228 L311 228" stroke="#4A2E14" strokeWidth="1.6" opacity="0.7" />
      <path d="M100 210 Q110 190 130 185" stroke={accentColor} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M320 215 Q310 195 292 188" stroke="#D9A227" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

// 8. Las piraguas de colores que sostienen cada aldea — colorful pirogues on
// a beach with a fisherman mending a net. Boat hulls are single self-
// contained shapes; the person reuses the vetted person() anatomy.
const LasPiraguasDeColoresQueSostienenCadaAldea: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  function pirogue(x: number, y: number, scale: number, hull: string, trim: string) {
    return (
      <g key={`pi-${x}`} transform={`translate(${x} ${y}) scale(${scale})`}>
        <path d="M-55 10 Q-40 -14 0 -16 Q40 -14 55 10 Q20 20 -20 20 Q-42 20 -55 10 Z" fill={hull} stroke={shade(hull, 0.4)} strokeWidth="2.6" />
        <path d="M-45 6 Q0 -4 45 6" fill="none" stroke={trim} strokeWidth="3" opacity="0.8" />
      </g>
    );
  }
  return (
    <g>
      <path d="M90 235 Q205 220 320 235 L320 250 L90 250 Z" fill="#E8D3A0" />
      {pirogue(140, 225, 1, "#C1272D", "#D9A227")}
      {pirogue(258, 232, 0.85, "#1B7A9C", "#F5F0E6")}
      {person(200, 218, 0.9, dark, accentColor)}
      <ellipse cx="197" cy="207" rx="26" ry="16" fill="none" stroke="#3A2A1E" strokeWidth="1.6" opacity="0.5" />
      <path d="M182 200 Q195 208 210 200 M186 208 Q197 214 208 208 M190 214 Q197 218 204 214" stroke="#3A2A1E" strokeWidth="1.6" fill="none" opacity="0.7" />
    </g>
  );
};

// 9. La ciudad de fachadas pastel y un antiguo fuerte — São Tomé town's
// colonial buildings and Fort São Sebastião. Static architecture, no
// multi-part joints.
const LaCiudadDeFachadasPastelYUnAntiguoFuerte: IllustrationComponent = () => (
  <g>
    <rect x="90" y="205" width="230" height="45" fill="#1B7A9C" opacity="0.45" />
    <rect x="100" y="150" width="55" height="65" fill="#E8B4A8" stroke="#8B6F5A" strokeWidth="2.4" />
    <rect x="160" y="140" width="55" height="75" fill="#F5E0A8" stroke="#8B6F5A" strokeWidth="2.4" />
    <rect x="220" y="155" width="50" height="60" fill="#B8D8C8" stroke="#8B6F5A" strokeWidth="2.4" />
    {[[115, 165], [175, 155], [235, 168]].map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="16" height="20" fill="#1B7A9C" opacity="0.55" stroke="#8B6F5A" strokeWidth="1.6" />
    ))}
    <rect x="278" y="160" width="42" height="55" fill="#C9BBA0" stroke="#5C4A3A" strokeWidth="2.8" />
    <path d="M278 160 L299 138 L320 160 Z" fill="none" stroke="#5C4A3A" strokeWidth="2.4" />
    <rect x="292" y="175" width="14" height="18" fill="#5C4A3A" opacity="0.6" />
  </g>
);

// 10. El cacao de sombra que hoy se vende como oro fino — a cacao tree under
// a taller shade-tree canopy plus a large opened pod with beans in the
// foreground. Trunk drawn FIRST, canopy SECOND (trunk top y=140 sits ~40
// units inside the canopy's cy=150 ry=30 span — comfortably past the 15-25
// minimum). Hanging pod stems start at points verified inside the canopy
// ellipse ((215,172): (11/34)^2+(22/30)^2=0.64<1, so inside) before hanging
// out below it.
const ElCacaoDeSombraQueHoySeVendeComoOroFino: IllustrationComponent = () => (
  <g>
    <ellipse cx="230" cy="105" rx="95" ry="45" fill="#2E7D32" opacity="0.3" />
    <ellipse cx="150" cy="115" rx="70" ry="35" fill="#3A9245" opacity="0.28" />
    <rect x="222" y="140" width="8" height="70" fill="#5C3A21" stroke="#3A2410" strokeWidth="1.8" />
    <ellipse cx="226" cy="150" rx="34" ry="30" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.4" />
    <path d="M215 172 L204 205 Q202 214 210 216 Q218 214 216 205 Z" fill="#D9A227" stroke="#8A5A10" strokeWidth="2.2" />
    <path d="M245 168 L258 198 Q261 207 253 210 Q245 208 246 199 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.2" />
    <path d="M135 248 Q130 195 150 158 Q157 146 166 152 Q176 195 158 248 Z" fill="#C1272D" stroke="#7A1010" strokeWidth="2.8" />
    <path d="M138 205 Q150 200 163 206 Q150 235 138 205 Z" fill="#8A5010" opacity="0.5" />
    {[[147, 175], [150, 190], [145, 205], [151, 218], [144, 230]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="9" ry="12" fill="#F5E0A8" stroke="#B8860B" strokeWidth="1.4" transform={`rotate(${i % 2 === 0 ? 12 : -10} ${x} ${y})`} />
    ))}
  </g>
);

export const saoTomeAndPrincipeIllustrations: Record<string, IllustrationDefinition> = {
  "las-mansiones-que-cultivaron-el-cacao-del-mundo": { component: LasMansionesQueCultivaronElCacaoDelMundo },
  "la-aguja-de-roca-que-perfora-la-selva": { component: LaAgujaDeRocaQuePerforaLaSelva },
  "el-islote-donde-se-pisan-dos-hemisferios": { component: ElIsloteDondeSePisanDosHemisferios },
  "el-teatro-popular-que-reinvento-una-tragedia-real": { component: ElTeatroPopularQueReinventoUnaTragediaReal },
  "el-bosque-de-aves-que-no-existen-en-otro-lugar": { component: ElBosqueDeAvesQueNoExistenEnOtroLugar },
  "el-guiso-que-reune-pescado-seco-y-hojas-del-monte": { component: ElGuisoQueReunePescadoSecoYHojasDelMonte },
  "los-bailes-que-marcan-cada-ritmo-de-la-isla": { component: LosBailesQueMarcanCadaRitmoDeLaIsla },
  "las-piraguas-de-colores-que-sostienen-cada-aldea": { component: LasPiraguasDeColoresQueSostienenCadaAldea },
  "la-ciudad-de-fachadas-pastel-y-un-antiguo-fuerte": { component: LaCiudadDeFachadasPastelYUnAntiguoFuerte },
  "el-cacao-de-sombra-que-hoy-se-vende-como-oro-fino": { component: ElCacaoDeSombraQueHoySeVendeComoOroFino },
};
