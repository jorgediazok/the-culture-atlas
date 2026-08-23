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

function horse(x: number, y: number, scale: number, dark: string) {
  return (
    <g key={`horse-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-30 10 Q-33 -10 -12 -14 Q10 -17 28 -6 Q33 0 28 11 Q10 18 -10 17 Q-24 18 -30 10 Z" fill={dark} stroke="#1A0F08" strokeWidth="2.4" />
      <path d="M24 -6 Q37 -20 38 -33 Q38 -38 33 -38 L26 -31 Q23 -20 15 -11 Z" fill={dark} stroke="#1A0F08" strokeWidth="2.4" />
      <path d="M26 -33 L20 -24 M31 -35 L26 -25 M34 -36 L30 -25" stroke="#1A0F08" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M-30 12 Q-42 20 -37 34" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M-20 13 L-23 38 M-6 16 L-9 40 M8 13 L6 38 M22 10 L25 35" stroke={dark} strokeWidth="4.6" strokeLinecap="round" />
    </g>
  );
}

// 1. La industria de cine más prolífica del mundo — clapperboard + film camera on a tripod + operator.
const LaIndustriaDeCineMasProlificaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="248" rx="115" ry="10" fill="#1A1A1A" opacity="0.2" />
      {person(178, 238, 1.05, dark, accentColor)}
      <path d="M255 150 L228 248 M255 150 L282 248 M255 150 L255 250" stroke="#2A2A2A" strokeWidth="4.4" strokeLinecap="round" />
      <rect x="225" y="118" width="60" height="40" fill="#2A2A2A" stroke="#0A0A0A" strokeWidth="2.4" />
      <rect x="236" y="100" width="20" height="20" fill="#3A3A3A" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="291" cy="138" r="16" fill="#0A0A0A" stroke="#3A3A3A" strokeWidth="2.4" />
      <circle cx="291" cy="138" r="8" fill="#4A6A8A" opacity="0.8" />
      <rect x="112" y="197" width="82" height="46" fill="#1A1A1A" stroke="#000" strokeWidth="2.4" />
      <path d="M112 197 L194 197 L188 176 L118 176 Z" fill="#1A1A1A" stroke="#000" strokeWidth="2.4" transform="rotate(-16 112 197)" />
      <path
        d="M118 183 L130 176 M132 183 L144 176 M146 183 L158 176 M160 183 L172 176 M174 183 L186 176"
        stroke="#F5F0E6"
        strokeWidth="4.5"
        transform="rotate(-16 112 197)"
      />
      <path d="M118 232 L186 232 M118 220 L186 220" stroke="#F5F0E6" strokeWidth="2" opacity="0.7" />
    </g>
  );
};

// 2. Del afrobeat de Fela Kuti al pop global — saxophonist and a singer with a microphone.
const DelAfrobeatDeFelaKutiAlPopGlobal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dark2 = shade("#C1272D", 0.4);
  return (
    <g>
      <ellipse cx="205" cy="248" rx="118" ry="10" fill="#1A1A1A" opacity="0.22" />
      <path d="M110 250 L150 130 L170 130 L145 250 Z" fill="#F5F0E6" opacity="0.18" />
      <path d="M300 250 L260 130 L240 130 L265 250 Z" fill="#F5F0E6" opacity="0.18" />
      {person(150, 228, 1.05, dark, accentColor)}
      <path d="M150 187 Q160 197 168 212 Q176 224 184 242" stroke="#D9A227" strokeWidth="8" fill="none" strokeLinecap="round" />
      <ellipse cx="188" cy="246" rx="12" ry="8" fill="#D9A227" stroke="#8A6A10" strokeWidth="2" transform="rotate(20 188 246)" />
      {[[159, 197], [166, 208], [173, 219]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.6" fill="#8A6A10" />
      ))}
      {person(258, 232, 1, dark2, "#C1272D")}
      <path d="M258 251 L260 205" stroke="#4A4A4A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="261" cy="199" r="8" fill="#2A2A2A" stroke="#0A0A0A" strokeWidth="1.8" />
      <path d="M180 100 L200 130 M220 95 L215 130 M255 100 L245 132" stroke="#D9A227" strokeWidth="2.4" opacity="0.55" strokeLinecap="round" />
    </g>
  );
};

// 3. Las cabezas de bronce del reino de Benín — cast bronze head with coral bead crown and collar on a pedestal.
// Joint check: collar path bottom control point reaches y=240, well inside the
// pedestal (which spans y=225-250, so ~15 units of true overlap). The head
// ellipse (cx=200 cy=165 rx=38 ry=48, spanning y=117-213) is drawn AFTER the
// collar, and its bottom edge (213) sits deep inside the collar's own range
// (185-240), so the head's opaque fill fully absorbs that seam. The crown's
// flat base sits at y=137: checked against the head ellipse's true curve
// (not bounding box) — ((25/38)^2 + (28/48)^2) = 0.77 < 1 at the crown's own
// side edges (x=175/225), confirming the whole base is inside the ellipse,
// not just near its center — roughly 20 units of real overlap at x=200.
const LasCabezasDeBronceDelReinoDeBenin: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="250" rx="90" ry="9" fill="#1A1A1A" opacity="0.2" />
    <rect x="163" y="225" width="74" height="27" fill="#4A4A4A" stroke="#2A2A2A" strokeWidth="2.4" />
    <path d="M178 185 Q170 205 168 225 Q200 240 232 225 Q230 205 222 185 Z" fill="#8A6A10" stroke="#5C4A10" strokeWidth="2.6" />
    <ellipse cx="200" cy="165" rx="38" ry="48" fill="#B5872A" stroke="#6B4A10" strokeWidth="3" />
    <path d="M175 137 Q178 95 200 82 Q222 95 225 137 Z" fill="#8A6A10" stroke="#5C4A10" strokeWidth="2.6" />
    <ellipse cx="200" cy="85" rx="6" ry="6" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.4" />
    {[178, 186, 194, 206, 214, 222].map((cx, i) => (
      <circle key={`crown-${i}`} cx={cx} cy="136" r="3.2" fill={i % 2 === 0 ? "#C1272D" : "#D9A227"} stroke="#5C4A10" strokeWidth="1" />
    ))}
    {[[175, 202], [186, 207], [200, 210], [214, 207], [225, 202]].map(([cx, cy], i) => (
      <circle key={`beadA-${i}`} cx={cx} cy={cy} r="4" fill={i % 2 === 0 ? "#C1272D" : "#D9A227"} stroke="#5C4A10" strokeWidth="1.2" />
    ))}
    {[[176, 218], [190, 224], [204, 225], [218, 222], [228, 216]].map(([cx, cy], i) => (
      <circle key={`beadB-${i}`} cx={cx} cy={cy} r="4" fill={i % 2 === 0 ? "#D9A227" : "#C1272D"} stroke="#5C4A10" strokeWidth="1.2" />
    ))}
    <ellipse cx="185" cy="160" rx="5.5" ry="4" fill="#3A2A10" />
    <ellipse cx="215" cy="160" rx="5.5" ry="4" fill="#3A2A10" />
    <path d="M178 150 Q185 146 192 150 M208 150 Q215 146 222 150" stroke="#5C4A10" strokeWidth="2.2" fill="none" />
    <path d="M200 162 L197 180 Q200 183 203 180 Z" fill="#8A6A10" stroke="#5C4A10" strokeWidth="1.4" />
    <path d="M188 195 Q200 202 212 195" stroke="#3A2A10" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    <ellipse cx="162" cy="168" rx="7" ry="10" fill="#B5872A" stroke="#6B4A10" strokeWidth="2" />
    <ellipse cx="238" cy="168" rx="7" ry="10" fill="#B5872A" stroke="#6B4A10" strokeWidth="2" />
  </g>
);

// 4. El añil teñido a mano de las mujeres yorubas — woman dyeing cloth in an indigo vat, finished cloth hanging.
// Joint check: the cloth strip's top end (171,205) sits on the hand endpoint
// of the person() helper (local (18,0) at scale 0.9, translate 155/205 =
// 171.2/205) so it starts exactly at the hand with no gap, then dips down to
// y=250, well past the pot rim (the pot's true opening curve at x≈171-190 is
// around y=208-212, so the cloth's y=250 endpoint is ~40 units inside the
// pot's interior, not just past its bounding box).
const ElAnilTenidoAManoDeLasMujeresYorubas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 210 Q118 250 150 255 L250 255 Q282 250 280 210 Z" fill="#16224A" stroke="#0A1530" strokeWidth="2.6" />
      <ellipse cx="200" cy="210" rx="80" ry="14" fill="#2A3F7A" stroke="#0A1530" strokeWidth="2.4" />
      {person(155, 205, 0.9, dark, accentColor)}
      <path d="M171 205 Q180 218 175 232 Q171 246 192 250" stroke="#F5F0E6" strokeWidth="9" fill="none" strokeLinecap="round" />
      <line x1="238" y1="108" x2="308" y2="108" stroke="#5C3A21" strokeWidth="4" />
      <circle cx="238" cy="108" r="4" fill="#5C3A21" />
      <circle cx="308" cy="108" r="4" fill="#5C3A21" />
      <rect x="248" y="110" width="52" height="78" fill="#1B3A6B" stroke="#0F2350" strokeWidth="2.4" />
      {[[262, 128], [286, 128], [262, 152], [286, 152], [274, 140], [262, 176], [286, 176]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.85" />
      ))}
    </g>
  );
};

// 5. Los espíritus enmascarados que bailan en la calle — Igbo mmanwu masquerade dancer.
// Joint check: raffia fringe lines start at y=190 (well inside the torso,
// which spans y=165-218) and extend down past the torso's bottom edge to
// y=235-248 — about 28 units of true overlap. The fringe group is drawn
// BEFORE the torso path so the torso's opaque fill absorbs the seam at the
// waist, leaving only the fanned-out lower fringe visible below it. The
// angular mask's bottom vertex (200,178) also sits inside the torso's
// shoulder curve (top edge ~158-165), giving clear head-to-body contact.
const LosEspiritusEnmascaradosQueBailanEnLaCalle: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="250" rx="80" ry="9" fill="#1A1A1A" opacity="0.2" />
    {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M200 190 Q${200 + i * 5} 215 ${200 + i * 9} ${236 + Math.abs(i) * 3}`}
        stroke="#B5651D"
        strokeWidth="3.4"
        fill="none"
        strokeLinecap="round"
      />
    ))}
    <path d="M182 165 Q200 157 218 165 L216 218 Q200 226 184 218 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.4" />
    <path d="M182 170 Q168 182 172 200" fill="none" stroke="#D9A227" strokeWidth="7" strokeLinecap="round" />
    <path d="M218 170 Q232 182 228 200" fill="none" stroke="#D9A227" strokeWidth="7" strokeLinecap="round" />
    <path d="M183 143 L217 143 L224 165 L200 179 L176 165 Z" fill="#D9A227" stroke="#4A2E14" strokeWidth="2.6" />
    <path d="M188 152 L198 152 L193 162 Z" fill="#1A1A1A" />
    <path d="M202 152 L212 152 L207 162 Z" fill="#1A1A1A" />
    <path d="M193 168 Q200 173 207 168" stroke="#4A2E14" strokeWidth="2" fill="none" />
    <path d="M176 148 L166 138 M224 148 L234 138" stroke="#3A7A45" strokeWidth="4" strokeLinecap="round" />
  </g>
);

// 6. El arroz que encendió una rivalidad culinaria — steaming pot of jollof rice with a served plate.
const ElArrozQueEncendioUnaRivalidadCulinaria: IllustrationComponent = () => (
  <g>
    <path d="M135 232 L135 208 Q135 198 148 198 L252 198 Q265 198 265 208 L265 232 Z" fill="#3A2A1E" stroke="#1A0F08" strokeWidth="2.6" />
    <rect x="130" y="228" width="140" height="10" fill="#2A1A10" stroke="#1A0F08" strokeWidth="2" />
    <ellipse cx="198" cy="196" rx="66" ry="22" fill="#C1440E" stroke="#7A1818" strokeWidth="2.4" />
    {[[170, 190], [195, 186], [220, 192], [180, 200], [210, 200]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="#8A2A0A" opacity="0.75" />
    ))}
    <path d="M175 178 Q180 165 173 152 M198 176 Q203 163 196 150 M221 178 Q226 165 219 152" stroke="#F5F0E6" strokeWidth="2.6" fill="none" opacity="0.55" strokeLinecap="round" />
    <ellipse cx="285" cy="220" rx="32" ry="19" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.2" />
    <ellipse cx="278" cy="215" rx="16" ry="9" fill="#C1440E" stroke="#7A1818" strokeWidth="1.8" />
    <ellipse cx="302" cy="222" rx="10" ry="6" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.6" />
    <ellipse cx="296" cy="230" rx="10" ry="6" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.6" />
    <path d="M160 200 Q168 192 178 196" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.8" />
  </g>
);

// 7. El desfile ecuestre que honra a los emires — turbaned rider on a caparisoned horse, with a kakaki trumpeter.
const ElDesfileEcuestreQueHonraALosEmires: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="120" ry="10" fill="#1B4B1E" opacity="0.3" />
      {horse(215, 195, 1.3, "#5C3A21")}
      <path d="M185 175 Q215 165 245 175 L242 202 Q215 194 188 202 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M190 178 Q215 172 240 178 L238 188 Q215 182 192 188" fill="none" stroke="#D9A227" strokeWidth="3" opacity="0.85" />
      <g transform="translate(215 148)">
        <circle cx="0" cy="0" r="10" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.6" />
        <path d="M-12 -8 Q0 -18 12 -8 Q15 3 8 9 Q0 4 -8 9 Q-15 3 -12 -8 Z" fill="#F5F0E6" stroke="#C9B98A" strokeWidth="1.6" />
        <path d="M-12 6 Q0 15 12 6 L15 36 Q0 43 -15 36 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      </g>
      <path d="M258 182 L272 174 L278 180 L266 188 Z" fill="#C9CDD3" stroke="#6B6F76" strokeWidth="1.6" />
      {person(140, 236, 0.85, "#1B4B1E", "#3A7A45")}
      <path d="M144 204 L195 197" stroke="#D9A227" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="199" cy="197" rx="7" ry="4" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.6" />
    </g>
  );
};

// 8. La megaciudad más grande de África — Lagos skyline, a bridge over the lagoon, boats, and a stilt house.
const LaMegaciudadMasGrandeDeAfrica: IllustrationComponent = () => (
  <g>
    <rect x="90" y="195" width="230" height="55" fill="#1B7A9C" opacity="0.5" />
    {[
      [113, 108, 18, 70, "#4A5A6B"],
      [138, 88, 20, 90, "#5C6B7A"],
      [163, 122, 16, 56, "#4A5A6B"],
      [232, 98, 18, 80, "#5C6B7A"],
      [255, 116, 16, 62, "#4A5A6B"],
      [278, 92, 20, 86, "#3A4A5A"],
    ].map(([bx, by, bw, bh, fill], i) => (
      <rect key={i} x={bx as number} y={by as number} width={bw as number} height={bh as number} fill={fill as string} stroke="#1A2A38" strokeWidth="1.8" />
    ))}
    {[[122, 125], [122, 145], [146, 105], [146, 130], [146, 155], [239, 115], [239, 140], [262, 132]].map(([cx, cy], i) => (
      <rect key={i} x={cx - 3} y={cy} width="6" height="8" fill="#D9E4EC" opacity="0.75" />
    ))}
    <path d="M95 178 Q205 148 315 178" stroke="#8C7B6B" strokeWidth="5" fill="none" />
    <path d="M140 168 L140 196 M205 163 L205 196 M270 168 L270 196" stroke="#5C4A3A" strokeWidth="4" />
    <path d="M105 212 Q125 222 150 212 L142 205 L112 205 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="1.8" />
    <path d="M170 222 Q190 232 215 222 L207 215 L177 215 Z" fill="#B5651D" stroke="#4A2E14" strokeWidth="1.8" />
    <path d="M280 190 L305 205 L255 205 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2" />
    <rect x="262" y="205" width="36" height="20" fill="#C68642" stroke="#4A2E14" strokeWidth="2" />
    <path d="M268 225 L268 245 M292 225 L292 245" stroke="#4A2E14" strokeWidth="3.4" strokeLinecap="round" />
  </g>
);

// 9. El tambor que imita el habla yoruba — dundun drummer squeezing the hourglass drum under one arm.
// Joint check: the drum body (x=200-234) is drawn FIRST, its left edge
// (x=200) reaching well inside the torso's own right boundary (which runs
// roughly x=215 at the shoulder to x=220 near the hip — checked against the
// torso path's actual curve, not a box), giving ~15-20 units of true overlap
// before the person() torso is drawn second and its opaque fill covers the
// seam. Only the drum's visible right portion and both drumheads remain
// showing beside the arm, exactly like the reference giraffe/tortoise fix.
// The beater stick is drawn last, its tip (217,197) landing inside the top
// drumhead ellipse (cy=195, ry=7) rather than stopping short of it.
const ElTamborQueImitaElHablaYoruba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="248" rx="90" ry="9" fill="#1A1A1A" opacity="0.2" />
      <path d="M200 195 Q210 213 200 231 L234 231 Q224 213 234 195 Z" fill="#8B5A2B" stroke="#2A1A0E" strokeWidth="2.4" />
      <path d="M204 197 L230 229 M230 197 L204 229 M212 196 L222 230" stroke="#2A1A0E" strokeWidth="1.5" opacity="0.7" />
      <ellipse cx="217" cy="195" rx="17" ry="7" fill="#D9C08A" stroke="#2A1A0E" strokeWidth="2" />
      <ellipse cx="217" cy="231" rx="16" ry="7" fill="#D9C08A" stroke="#2A1A0E" strokeWidth="2" />
      {person(200, 225, 1.1, dark, accentColor)}
      <path d="M220 222 Q222 205 217 197" stroke="#3A2A1E" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="217" cy="196" r="3" fill="#3A2A1E" />
    </g>
  );
};

// 10. La roca monolítica que vigila la entrada a Abuja — Zuma Rock beside a road, with a passing car.
const LaRocaMonoliticaQueVigilaLaEntradaAAbuja: IllustrationComponent = () => (
  <g>
    <path d="M90 244 Q205 226 320 246" stroke="#6B6B6B" strokeWidth="20" fill="none" />
    <path d="M105 243 L125 241 M150 240 L170 239 M195 239 L215 239 M240 240 L260 241 M285 243 L305 244" stroke="#F5F0E6" strokeWidth="2.4" opacity="0.8" />
    <path d="M120 250 L118 190 L140 130 L160 95 L200 78 L235 98 L255 140 L278 195 L282 250 Z" fill="#6B5A45" stroke="#3A2E1E" strokeWidth="3" />
    <path d="M160 140 L170 180 L155 210 M210 130 L205 175 L215 205 M185 105 L188 145" stroke="#4A3A2E" strokeWidth="2" opacity="0.6" fill="none" />
    <ellipse cx="176" cy="152" rx="10" ry="14" fill="#3A2E1E" opacity="0.5" />
    <ellipse cx="224" cy="152" rx="10" ry="14" fill="#3A2E1E" opacity="0.5" />
    <path d="M180 196 Q200 206 220 196" stroke="#3A2E1E" strokeWidth="5" fill="none" opacity="0.5" strokeLinecap="round" />
    {[[105, 246, 10], [96, 250, 8], [300, 248, 10], [312, 251, 8]].map(([cx, cy, r], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.6" />
    ))}
    <rect x="145" y="226" width="28" height="13" rx="2" fill="#C1272D" stroke="#7A1818" strokeWidth="1.6" />
    <rect x="150" y="219" width="14" height="9" rx="1.5" fill="#C1272D" stroke="#7A1818" strokeWidth="1.4" />
    <circle cx="152" cy="240" r="4.4" fill="#1A1A1A" stroke="#000" strokeWidth="1" />
    <circle cx="167" cy="240" r="4.4" fill="#1A1A1A" stroke="#000" strokeWidth="1" />
  </g>
);

export const nigeriaIllustrations: Record<string, IllustrationDefinition> = {
  "la-industria-de-cine-mas-prolifica-del-mundo": { component: LaIndustriaDeCineMasProlificaDelMundo },
  "del-afrobeat-de-fela-kuti-al-pop-global": { component: DelAfrobeatDeFelaKutiAlPopGlobal },
  "las-cabezas-de-bronce-del-reino-de-benin": { component: LasCabezasDeBronceDelReinoDeBenin },
  "el-anil-tenido-a-mano-de-las-mujeres-yorubas": { component: ElAnilTenidoAManoDeLasMujeresYorubas },
  "los-espiritus-enmascarados-que-bailan-en-la-calle": { component: LosEspiritusEnmascaradosQueBailanEnLaCalle },
  "el-arroz-que-encendio-una-rivalidad-culinaria": { component: ElArrozQueEncendioUnaRivalidadCulinaria },
  "el-desfile-ecuestre-que-honra-a-los-emires": { component: ElDesfileEcuestreQueHonraALosEmires },
  "la-megaciudad-mas-grande-de-africa": { component: LaMegaciudadMasGrandeDeAfrica },
  "el-tambor-que-imita-el-habla-yoruba": { component: ElTamborQueImitaElHablaYoruba },
  "la-roca-monolitica-que-vigila-la-entrada-a-abuja": { component: LaRocaMonoliticaQueVigilaLaEntradaAAbuja },
};
