import { shade, tint } from "./palette";
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

// Intore dancer: headdress strands attach at the head circle's own top edge (a thin
// stroke, not a filled seam, so no gap risk there). The two legs are the joint to
// watch: the robe path's hem sits around y=8-14, so both legs START at y=2-4 —
// 6-10 units above the hem, i.e. solidly inside the robe's filled body — and are
// drawn BEFORE the robe so the robe's opaque fill covers the entry seam entirely.
function dancer(x: number, y: number, scale: number, dark: string, robe: string) {
  return (
    <g key={`dancer-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* high-kicking front leg (drawn first, starts at y=4, well inside the robe hem at y~11) */}
      <path d="M-6 4 Q-24 -4 -19 -27" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* trailing support leg (starts at y=6, inside the robe) */}
      <path d="M6 6 Q3 26 11 43" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="-19" cy="-29" rx="6" ry="4" fill={dark} stroke="#1A120C" strokeWidth="1.4" />
      <ellipse cx="11" cy="45" rx="6" ry="4" fill={dark} stroke="#1A120C" strokeWidth="1.4" />
      {/* flowing white headdress strands, rooted right at the head's own top edge */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M${-5 + i * 1.6} -49 Q${-20 + i * 7} -74 ${-25 + i * 8.6} -96`} stroke="#F5F0E6" strokeWidth="3" fill="none" strokeLinecap="round" />
      ))}
      <circle cx="0" cy="-40" r="10" fill={dark} stroke="#1A120C" strokeWidth="1.6" />
      <path d="M-13 -30 Q0 -35 13 -30 L15 11 Q0 17 -15 11 Z" fill={robe} stroke={dark} strokeWidth="2.2" />
      <path d="M-13 -26 Q-26 -20 -32 -4" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M13 -26 Q26 -16 30 2" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <circle cx="-19" cy="-27" r="2.2" fill="#D9A227" />
      <circle cx="11" cy="42" r="2.2" fill="#D9A227" />
    </g>
  );
}

// 1. El último refugio de los gorilas de montaña — mountain gorilla seated at a
// volcano's foot. JOINT SELF-CHECK (all against the torso ellipse cx=205 cy=185
// rx=55 ry=50, true boundary since head/neck share the same cx so the vertical
// check equals the horizontal-axis check exactly, no bounding-box shortcut needed):
//  - Neck rect x=186-224 (36 wide) spans y=95-165. Torso's top boundary at cx=205
//    is y=135, so the rect's bottom (y=165) sits 30px INSIDE the torso — well past
//    the 15-25px minimum. The rect's top (y=95) sits inside the head circle
//    (cy=112 r=30, spans y=82-142 at x=205, and at the rect's x-extremes 186/224
//    the circle still covers y=88.8-135.2) so the head, drawn last, fully hides it.
//  - Front leg starts (185,215): dy=30 from center, (30/50)^2=.36, remaining .64,
//    x half-width = 55*0.8=44, so torso spans x=161-249 at y=215 — x=185 is 24px
//    inside that true edge. Back leg start (225,215) is the mirror, 24px inside.
//  - Left arm starts (185,165): dy=-20, (20/50)^2=.16, remaining .84, half-width
//    =55*0.917=50.4, torso spans x=154.6-255.4 at y=165 — x=185 is 30px inside.
//    Right arm start (225,165) mirrors it, 30px inside.
//  - Draw order: legs, arms, neck (all first) -> torso ellipse (absorbs every
//    seam) -> head (covers the neck's top) -> face/silverback details on top.
const ElUltimoRefugioDeLosGorilasDeMontana: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L205 95 L320 250 Z" fill="#7A8A72" opacity="0.35" />
    <path d="M90 250 Q205 235 320 250 L320 250 L90 250 Z" fill="#3A5A2E" opacity="0.4" />
    {[[110, 235, 20], [140, 245, 26], [270, 240, 24], [300, 232, 22]].map(([px, py, r], i) => (
      <ellipse key={i} cx={px} cy={py} rx={r} ry={Number(r) * 0.6} fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2" opacity="0.85" />
    ))}
    {/* legs (drawn first, start points well inside the torso ellipse) */}
    <path d="M185 215 Q170 232 162 248" stroke="#3A3A3A" strokeWidth="17" fill="none" strokeLinecap="round" />
    <path d="M225 215 Q242 232 250 248" stroke="#3A3A3A" strokeWidth="17" fill="none" strokeLinecap="round" />
    {/* arms resting on the ground, knuckle-walking seated pose */}
    <path d="M185 165 Q158 195 150 224" stroke="#3A3A3A" strokeWidth="16" fill="none" strokeLinecap="round" />
    <path d="M225 165 Q253 195 262 222" stroke="#3A3A3A" strokeWidth="16" fill="none" strokeLinecap="round" />
    {/* neck, extending deep into the torso and up under the head */}
    <rect x="186" y="95" width="38" height="70" fill="#3A3A3A" />
    {/* torso — the core shape, painted over every seam above */}
    <ellipse cx="205" cy="185" rx="55" ry="50" fill="#3A3A3A" stroke="#1A1A1A" strokeWidth="3" />
    <path d="M185 150 Q205 140 225 150 Q235 185 222 218 Q205 228 188 218 Q175 185 185 150 Z" fill="#8C8C8C" stroke="#5A5A5A" strokeWidth="1.6" opacity="0.6" />
    {/* head, drawn on top, overlapping down onto the neck's visible top */}
    <circle cx="205" cy="112" r="30" fill="#3A3A3A" stroke="#1A1A1A" strokeWidth="3" />
    <path d="M182 108 Q205 96 228 108 Q226 122 205 122 Q184 122 182 108 Z" fill="#2A2A2A" stroke="#1A1A1A" strokeWidth="1.6" />
    <ellipse cx="205" cy="130" rx="14" ry="9" fill="#4A4A4A" stroke="#1A1A1A" strokeWidth="1.8" />
    <circle cx="196" cy="108" r="3" fill="#0A0A0A" />
    <circle cx="214" cy="108" r="3" fill="#0A0A0A" />
    <ellipse cx="150" cy="226" rx="9" ry="6" fill="#2A2A2A" />
    <ellipse cx="262" cy="224" rx="9" ry="6" fill="#2A2A2A" />
  </g>
);

// 2. El sábado en que todo el país trabaja junto — umuganda: neighbors sweeping
// and planting trees together. Uses the standard `person` helper (proven safe
// joint pattern reused across many countries) plus a broom and a sapling.
const ElSabadoEnQueTodoElPaisTrabajaJunto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 Q205 233 320 245" stroke="#C9B98A" strokeWidth="10" fill="none" opacity="0.5" />
      {person(140, 235, 1, dark, accentColor)}
      <path d="M152 195 L172 165" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
      <path d="M168 172 L178 158 L182 172 Z" fill="#D9C08A" stroke="#8B6F47" strokeWidth="1.6" />
      {person(215, 240, 1.05, "#3A2A1E", "#3A7A45")}
      <path d="M215 200 L215 168" stroke="#5C3A21" strokeWidth="5" strokeLinecap="round" />
      <path d="M215 168 Q205 158 198 148 M215 168 Q225 156 232 146 M215 168 Q215 152 214 142" stroke="#3A7A45" strokeWidth="4" fill="none" strokeLinecap="round" />
      {person(280, 232, 0.95, "#5C3A21", "#D9A227")}
      <path d="M292 200 L305 178" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
      <path d="M300 190 L315 182 L312 198 Z" fill="#D9C08A" stroke="#8B6F47" strokeWidth="1.6" />
      <g transform="translate(160 250)">
        <path d="M0 0 L0 -18" stroke="#5C3A21" strokeWidth="3" />
        <ellipse cx="0" cy="-20" rx="5" ry="8" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.4" />
      </g>
    </g>
  );
};

// 3. El arte geométrico hecho con estiércol de vaca — imigongo panel with bold
// black/white/red/ochre spirals and zigzags. No multi-part figure; geometric
// shapes only.
const ElArteGeometricoHechoConEstiercolDeVaca: IllustrationComponent = () => (
  <g>
    <rect x="110" y="95" width="180" height="150" fill="#D9C08A" stroke="#5C3A21" strokeWidth="4" />
    <rect x="118" y="103" width="164" height="134" fill="#F5F0E6" />
    <path d="M118 103 L160 103 L118 145 Z" fill="#1A1A1A" />
    <path d="M282 103 L240 103 L282 145 Z" fill="#C1272D" />
    <path d="M118 237 L160 237 L118 195 Z" fill="#C1272D" />
    <path d="M282 237 L240 237 L282 195 Z" fill="#1A1A1A" />
    <path
      d="M200 170 Q200 150 220 150 Q238 150 238 168 Q238 184 222 184 Q210 184 210 172 Q210 164 218 164"
      fill="none"
      stroke="#8A5A10"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path d="M150 130 L172 152 L150 174 L128 152 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2" />
    <path d="M150 138 L164 152 L150 166 L136 152 Z" fill="#F5F0E6" />
    {[0, 1, 2, 3, 4].map((i) => (
      <path key={i} d={`M${128 + i * 9} 210 L${137 + i * 9} 195 L${146 + i * 9} 210 Z`} fill={i % 2 === 0 ? "#1A1A1A" : "#8A5A10"} />
    ))}
  </g>
);

// 4. La danza guerrera que honraba a la corte real — three intore dancers using
// the `dancer` helper above (joint math documented there).
const LaDanzaGuerreraQueHonrabaALaCorteReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="248" rx="120" ry="10" fill="#8A5A10" opacity="0.3" />
      {dancer(150, 228, 1.1, dark, accentColor)}
      {dancer(215, 232, 1.05, "#3A2A1E", tint(accentColor, 0.15))}
      {dancer(280, 224, 1, dark, accentColor)}
    </g>
  );
};

// 5. Las cestas que se convirtieron en símbolo de paz — a single agaseke basket,
// cone body with a pointed lid, given a distinct woven silhouette (not a blob).
const LasCestasQueSeConvirtieronEnSimboloDePaz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="90" ry="10" fill="#3A2A1E" opacity="0.2" />
      <path d="M140 232 Q135 160 175 130 L235 130 Q275 160 270 232 Q205 250 140 232 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${143 + i * 21} ${228 - i * 1} Q${150 + i * 21} ${175 - i * 3} ${172 + i * 13} 132`} fill="none" stroke={dark} strokeWidth="1.6" opacity="0.55" />
      ))}
      <path d="M150 165 Q205 152 260 165" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.85" />
      <path d="M155 195 Q205 182 255 195" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.85" />
      <path d="M145 220 Q205 208 265 220" fill="none" stroke="#3A2A1E" strokeWidth="3" opacity="0.5" />
      <path d="M172 130 Q205 60 238 130 Q222 118 205 116 Q188 118 172 130 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.6" />
      <circle cx="205" cy="72" r="6" fill="#8A6A10" />
    </g>
  );
};

// 6. El café de altura que enorgullece a un país — person picking red coffee
// cherries from a bush on a hillside. Uses `person`; the reaching arm is a
// separate stroke drawn after the body, starting at the shoulder (x=252,y=196,
// well inside the robe silhouette) so it reads as one continuous limb.
const ElCafeDeAlturaQueEnorgulleceAUnPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q160 210 230 240 Q280 255 320 220 L320 250 L90 250 Z" fill="#3A5A2E" opacity="0.35" />
      {person(250, 235, 1.1, dark, accentColor)}
      <path d="M252 196 Q225 185 205 165" stroke={dark} strokeWidth="7" fill="none" strokeLinecap="round" />
      <ellipse cx="150" cy="180" rx="55" ry="45" fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2.6" />
      <ellipse cx="120" cy="205" rx="30" ry="26" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.2" />
      {[[130, 165], [155, 175], [110, 190], [140, 200], [165, 195], [120, 220], [95, 200]].map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r="6" fill="#C1272D" stroke="#7A1818" strokeWidth="1.4" />
      ))}
      <path d="M205 165 L198 172 L210 178 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="1.4" />
    </g>
  );
};

// 7. El puente colgante sobre un bosque milenario — Nyungwe canopy walkway.
const ElPuenteColganteSobreUnBosqueMilenario: IllustrationComponent = () => (
  <g>
    <ellipse cx="130" cy="160" rx="55" ry="45" fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2.6" />
    <ellipse cx="280" cy="150" rx="60" ry="48" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.6" />
    <ellipse cx="205" cy="230" rx="140" ry="20" fill="#1B4B1E" opacity="0.35" />
    <path d="M110 145 L108 250 M290 138 L292 250" stroke="#5C3A21" strokeWidth="7" strokeLinecap="round" />
    <path d="M120 178 Q205 158 290 172" fill="none" stroke="#6B5A45" strokeWidth="10" strokeLinecap="round" />
    {[130, 155, 180, 205, 230, 255, 280].map((wx, i) => (
      <line key={i} x1={wx} y1={175 - Math.abs(wx - 205) * 0.06} x2={wx} y2={185 - Math.abs(wx - 205) * 0.06} stroke="#4A3A21" strokeWidth="3" />
    ))}
    <path d="M120 168 Q205 148 290 162" fill="none" stroke="#8B7355" strokeWidth="3" opacity="0.85" />
    <path d="M120 188 Q205 168 290 182" fill="none" stroke="#8B7355" strokeWidth="3" opacity="0.85" />
    <path d="M120 168 L120 178 M290 162 L290 172" stroke="#8B7355" strokeWidth="2.4" opacity="0.7" />
    <path d="M150 160 Q160 148 152 138 M240 150 Q230 140 238 130" stroke="#5C6B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
  </g>
);

// 8. La capital que prohibió las bolsas de plástico — Kigali skyline among
// green hills with spotless streets.
const LaCapitalQueProhibioLasBolsasDePlastico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="130" cy="235" rx="90" ry="35" fill="#3A7A45" opacity="0.55" />
      <ellipse cx="290" cy="240" rx="80" ry="32" fill="#2F6B3A" opacity="0.55" />
      <rect x="165" y="140" width="30" height="105" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <rect x="200" y="110" width="34" height="135" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.4" />
      <rect x="240" y="155" width="26" height="90" fill="#C9CDD3" stroke="#6B6F76" strokeWidth="2.2" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={`a-${i}`} x={172} y={150 + i * 20} width="16" height="10" fill="#F5F0E6" opacity="0.8" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`b-${i}`} x={208} y={122 + i * 20} width="18" height="11" fill="#F5F0E6" opacity="0.85" />
      ))}
      <path d="M90 248 Q205 240 320 248" stroke="#F5F0E6" strokeWidth="8" fill="none" opacity="0.7" />
      <path d="M90 248 Q205 240 320 248" stroke="#8C7B6B" strokeWidth="2" fill="none" strokeDasharray="6 6" opacity="0.6" />
    </g>
  );
};

// 9. Los tambores reales que anunciaban al rey — ingoma drums with two
// drummers. `person`-style figures with a separate striking arm added after
// the body, rooted at the shoulder (well inside the robe silhouette) so it
// reads as one continuous limb reaching to the drumhead.
const LosTamboresRealesQueAnunciabanAlRey: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  function drum(x: number, y: number, h: number) {
    return (
      <g key={`drum-${x}`} transform={`translate(${x} ${y})`}>
        <rect x={-16} y={0} width="32" height={h} fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.4" />
        <ellipse cx="0" cy="0" rx="16" ry="8" fill="#D9C08A" stroke="#4A2E14" strokeWidth="2.2" />
        <path d={`M-16 ${h * 0.35} L16 ${h * 0.35} M-16 ${h * 0.7} L16 ${h * 0.7}`} stroke="#4A2E14" strokeWidth="1.6" opacity="0.6" />
      </g>
    );
  }
  return (
    <g>
      <ellipse cx="205" cy="248" rx="120" ry="10" fill="#3A2A1E" opacity="0.25" />
      {drum(150, 195, 45)}
      {drum(205, 205, 40)}
      {drum(260, 195, 45)}
      {person(150, 190, 0.85, dark, accentColor)}
      <path d="M162 155 Q170 168 160 190" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
      {person(260, 190, 0.85, "#3A2A1E", "#D9A227")}
      <path d="M248 155 Q240 168 250 190" stroke="#3A2A1E" strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  );
};

// 10. La cerveza de banana que corre en cada celebración — pressing bananas
// into a vessel beside a shared gourd. `person` bent forward; the pressing arm
// is a separate stroke rooted at the shoulder, well inside the robe body.
const LaCervezaDeBananaQueCorreEnCadaCelebracion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="248" rx="120" ry="10" fill="#3A2A1E" opacity="0.2" />
      {person(155, 210, 1, dark, accentColor)}
      <path d="M168 178 Q195 190 205 208" stroke={dark} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M142 175 Q120 165 128 148 Q132 140 140 145 Q136 155 145 165 Q150 172 142 175 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.2" />
      <path d="M130 155 Q118 150 122 138 Q126 132 132 136 Q128 144 133 152 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="2" />
      <path d="M175 215 Q205 205 235 215 L232 245 Q205 253 178 245 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.6" />
      <path d="M180 215 Q205 208 230 215" fill="none" stroke="#D9A227" strokeWidth="4" opacity="0.7" />
      <g transform="translate(280 225)">
        <path d="M-22 -20 Q-30 -5 -25 15 Q-20 32 0 34 Q10 20 5 -4 Q0 -18 -22 -20 Z" fill="#C68642" stroke="#6B4423" strokeWidth="2.4" />
        <path d="M-16 -8 Q-18 8 -12 24 M8 -6 Q10 8 4 22" stroke="#4A2E14" strokeWidth="1.4" fill="none" opacity="0.6" />
      </g>
    </g>
  );
};

// 11. El primer parlamento del mundo con mayoría de mujeres — speaker figure
// (the proven `person` helper) before a legislative bench.
const MujeresParlamentoRuanda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const SEATS = [0, 1, 2, 3, 4];
  return (
    <g>
      <rect x="100" y="170" width="210" height="60" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.4" />
      {SEATS.map((i) => (
        <circle key={i} cx={120 + i * 40} cy={195} r="8" fill="#3A2A1E" opacity="0.5" />
      ))}
      {person(205, 235, 1.15, dark, accentColor)}
      <path d="M218 195 Q235 188 240 172" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  );
};

// 12. El renacimiento del Parque de Akagera — lion and rhino on savanna,
// using the same overlap margins proven safe elsewhere in this style.
const RenacimientoParqueAkagera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#D9BE8F" opacity="0.5" />
      <line x1="270" y1="245" x2="272" y2="170" stroke="#5C3A21" strokeWidth="6" />
      <ellipse cx="272" cy="155" rx="42" ry="20" fill="#3A7A45" opacity="0.6" />
      <ellipse cx="150" cy="215" rx="14" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="175" cy="222" rx="30" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <line x1="160" y1="228" x2="158" y2="248" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <line x1="192" y1="228" x2="196" y2="248" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="255" cy="215" rx="30" ry="18" fill="#8C8C8C" stroke={dark} strokeWidth="2.4" />
      <path d="M225 212 Q210 215 208 232" fill="none" stroke="#8C8C8C" strokeWidth="9" strokeLinecap="round" />
      <path d="M212 212 L200 205" stroke="#8C8C8C" strokeWidth="6" strokeLinecap="round" />
      <line x1="238" y1="230" x2="236" y2="248" stroke="#8C8C8C" strokeWidth="6" strokeLinecap="round" />
      <line x1="268" y1="230" x2="270" y2="248" stroke="#8C8C8C" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

// 13. El Palacio del Rey en Nyanza y las vacas inyambo — dome-shaped hut plus
// a cow with extravagantly long, sweeping horns.
const PalacioNyanzaVacasInyambo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cow = "#C68642";
  return (
    <g>
      <path d="M110 240 Q108 195 130 185 Q150 178 165 190 L165 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M110 195 Q100 185 105 175 Q112 182 115 192 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="250" cy="200" rx="45" ry="28" fill={cow} stroke="#6B4423" strokeWidth="2.6" />
      <line x1="225" y1="222" x2="220" y2="245" stroke={cow} strokeWidth="8" strokeLinecap="round" />
      <line x1="270" y1="222" x2="278" y2="245" stroke={cow} strokeWidth="8" strokeLinecap="round" />
      <circle cx="220" cy="175" r="16" fill={cow} stroke="#6B4423" strokeWidth="2.4" />
      <path d="M215 165 Q170 140 155 105 M212 168 Q160 175 130 165" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
      <path d="M225 165 Q260 135 285 100 M228 168 Q275 168 305 152" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

// 14. El Mundial de Ciclismo de la UCI 2025 — cyclist climbing a hilly road.
const MundialCiclismoUci2025: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  return (
    <g>
      <path d="M90 250 Q150 200 205 190 Q260 180 320 130" fill="none" stroke="#8C8C8C" strokeWidth="10" opacity="0.5" />
      <circle cx="175" cy="205" r="18" fill="none" stroke="#3A3A3A" strokeWidth="4" />
      <circle cx="225" cy="185" r="16" fill="none" stroke="#3A3A3A" strokeWidth="4" />
      <path d="M175 205 L200 195 L225 185 L210 190 L200 195" stroke="#3A3A3A" strokeWidth="3" fill="none" />
      <path d="M195 190 Q198 170 210 165" stroke={skin} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M195 190 Q188 178 178 178" stroke={skin} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M188 175 Q200 168 212 175 L206 195 L194 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <circle cx="200" cy="163" r="10" fill={skin} stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

// 15. El umushanana — draped dress with a diagonal sash across one shoulder.
const UmushananaVestidoTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  const gold = "#D9A227";
  return (
    <g>
      <path d="M183 190 Q165 200 168 240" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M213 190 Q232 198 228 235" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M185 195 Q200 185 215 195 L222 240 Q200 250 178 240 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.4" />
      <path d="M178 195 Q160 200 165 240 Q195 250 200 240 L188 198 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.2" />
      <circle cx="200" cy="178" r="13" fill={skin} stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const rwandaIllustrations: Record<string, IllustrationDefinition> = {
  "el-ultimo-refugio-de-los-gorilas-de-montana": { component: ElUltimoRefugioDeLosGorilasDeMontana },
  "el-sabado-en-que-todo-el-pais-trabaja-junto": { component: ElSabadoEnQueTodoElPaisTrabajaJunto },
  "el-arte-geometrico-hecho-con-estiercol-de-vaca": { component: ElArteGeometricoHechoConEstiercolDeVaca },
  "la-danza-guerrera-que-honraba-a-la-corte-real": { component: LaDanzaGuerreraQueHonrabaALaCorteReal },
  "las-cestas-que-se-convirtieron-en-simbolo-de-paz": { component: LasCestasQueSeConvirtieronEnSimboloDePaz },
  "el-cafe-de-altura-que-enorgullece-a-un-pais": { component: ElCafeDeAlturaQueEnorgulleceAUnPais },
  "el-puente-colgante-sobre-un-bosque-milenario": { component: ElPuenteColganteSobreUnBosqueMilenario },
  "la-capital-que-prohibio-las-bolsas-de-plastico": { component: LaCapitalQueProhibioLasBolsasDePlastico },
  "los-tambores-reales-que-anunciaban-al-rey": { component: LosTamboresRealesQueAnunciabanAlRey },
  "la-cerveza-de-banana-que-corre-en-cada-celebracion": { component: LaCervezaDeBananaQueCorreEnCadaCelebracion },
  "mujeres-parlamento-ruanda": { component: MujeresParlamentoRuanda },
  "renacimiento-parque-akagera": { component: RenacimientoParqueAkagera },
  "palacio-nyanza-vacas-inyambo": { component: PalacioNyanzaVacasInyambo },
  "mundial-ciclismo-uci-2025": { component: MundialCiclismoUci2025 },
  "umushanana-vestido-tradicional": { component: UmushananaVestidoTradicional },
};
