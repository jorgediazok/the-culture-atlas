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

// 1. La semilla más grande del mundo, envuelta en leyenda — coco de mer palm.
const LaSemillaMasGrandeDelMundoEnvueltaEnLeyenda: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="250" rx="60" ry="10" fill="#3A2A1E" opacity="0.25" />
    <path d="M198 248 Q188 190 196 140 Q200 118 205 100" stroke="#6B4423" strokeWidth="12" fill="none" strokeLinecap="round" />
    <path
      d="M203 108 Q165 92 145 55 M203 108 Q235 88 258 50 M203 108 Q203 75 200 40 M203 108 Q178 95 165 65 M203 108 Q225 98 245 72"
      stroke="#2E7D32"
      strokeWidth="7"
      fill="none"
      strokeLinecap="round"
    />
    {[[145, 55], [258, 50], [200, 40], [165, 65], [245, 72]].map(([px, py], i) => (
      <ellipse key={i} cx={px} cy={py} rx="13" ry="7" fill="#3A9245" opacity="0.85" stroke="#1B4B1E" strokeWidth="1.4" />
    ))}
    <path d="M208 118 Q232 135 248 152" stroke="#5C3A21" strokeWidth="4" fill="none" strokeLinecap="round" />
    <g transform="translate(255 190)">
      <path d="M-20 -25 Q-34 -12 -30 10 Q-26 30 -6 34 Q4 22 0 -2 Q-4 -18 -20 -25 Z" fill="#4A2E14" stroke="#2A1A0E" strokeWidth="2.6" />
      <path d="M20 -22 Q34 -10 28 12 Q24 30 4 32 Q-2 20 2 -2 Q6 -16 20 -22 Z" fill="#5C3A21" stroke="#2A1A0E" strokeWidth="2.6" />
      <path d="M-14 -10 Q-16 8 -10 26 M14 -8 Q17 8 10 24" stroke="#1A0F08" strokeWidth="1.6" fill="none" opacity="0.7" />
    </g>
  </g>
);

// 2. Los gigantes que viven más de cien años — Aldabra giant tortoise, side profile.
// Joint check: the shell is an ELLIPSE (cx=195,cy=175,rx=70,ry=45), so its lower
// boundary curves inward toward the sides — a leg positioned near the shell's edge
// needs to start much higher (smaller y) than one under the shell's center to still
// land inside the ellipse's true curve, not just its bounding box. At x=140/250 the
// ellipse's own bottom edge is only y~=203; at x=165/225 it's y~=216. Leg start points
// below are set to y=183 (outer legs) and y=196 (inner legs) so each clears the actual
// elliptical boundary by a comfortable ~20px, not just the box. Tail starts x=150
// (well inside the ellipse) and pokes out to x=121; neck starts x=225,y=160 (well
// inside) and reaches out to the head at x~300-314. Legs/tail/neck are all drawn
// BEFORE the shell ellipse so its opaque fill covers every seam, leaving only the
// parts that extend past the shell's true curve (feet, tail tip, head) visible —
// head/eye/mouth details are drawn after the shell too so they stay on top.
const LosGigantesQueVivenMasDeCienAnos: IllustrationComponent = () => (
  <g>
    <ellipse cx="195" cy="248" rx="120" ry="12" fill="#D9C9A3" opacity="0.5" />
    <ellipse cx="90" cy="252" rx="18" ry="6" fill="#C9B98A" opacity="0.6" />
    <ellipse cx="300" cy="253" rx="22" ry="6" fill="#C9B98A" opacity="0.6" />

    <path d="M140 183 L138 248 M165 196 L163 250 M225 196 L227 250 M250 183 L253 248" stroke="#4A3A1E" strokeWidth="9" strokeLinecap="round" />
    {[[138, 249], [163, 251], [227, 251], [253, 249]].map(([px, py], i) => (
      <ellipse key={i} cx={px} cy={py} rx="7" ry="4" fill="#3A2E14" stroke="#1A130A" strokeWidth="1.4" />
    ))}

    <path d="M150 190 Q135 195 125 205 Q118 210 121 217 Q130 214 140 203 Z" fill="#4A3A1E" stroke="#2A1E0E" strokeWidth="2" />

    <path d="M225 160 Q262 163 288 175 Q302 181 303 191 Q296 199 282 193 Q254 185 227 178 Z" fill="#5C6B3A" stroke="#2A1E0E" strokeWidth="2.4" />

    <ellipse cx="195" cy="175" rx="70" ry="45" fill="#6B7A45" stroke="#2A1E0E" strokeWidth="3" />
    <path
      d="M150 145 Q160 175 150 205 M195 135 Q195 175 195 215 M240 145 Q230 175 240 205 M165 150 L225 150 M160 200 L230 200"
      stroke="#2A1E0E"
      strokeWidth="1.8"
      fill="none"
      opacity="0.5"
    />

    <ellipse cx="300" cy="188" rx="16" ry="13" fill="#5C6B3A" stroke="#2A1E0E" strokeWidth="2.4" />
    <path d="M287 195 Q300 199 312 195" stroke="#2A1E0E" strokeWidth="1.6" fill="none" />
    <circle cx="306" cy="183" r="2.4" fill="#1A1A1A" />
  </g>
);

// 3. Las rocas rosadas que esculpió el océano — Anse Source d'Argent granite boulders.
const LasRocasRosadasQueEsculpioElOceano: IllustrationComponent = () => (
  <g>
    <path d="M90 130 L320 130 L320 190 Q205 200 90 188 Z" fill="#3FBFC4" opacity="0.55" />
    <path d="M90 188 Q205 200 320 190 L320 250 L90 250 Z" fill="#F5EBD8" />
    <path
      d="M120 100 Q118 85 128 75 M120 100 Q108 88 100 72 M120 100 Q122 90 118 78"
      stroke="#2E7D32"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    <path d="M110 235 Q100 205 130 195 Q160 188 168 212 Q174 235 148 242 Q120 248 110 235 Z" fill="#D98878" stroke="#8B4A3A" strokeWidth="2.6" />
    <path d="M175 240 Q160 195 205 180 Q250 168 265 205 Q276 235 240 248 Q195 258 175 240 Z" fill="#E0988A" stroke="#8B4A3A" strokeWidth="2.8" />
    <path d="M270 235 Q262 210 288 202 Q310 196 316 216 Q320 232 298 240 Q278 244 270 235 Z" fill="#D98878" stroke="#8B4A3A" strokeWidth="2.4" />
    <path d="M195 215 Q210 205 225 212 M205 225 Q218 220 230 226" stroke="#8B4A3A" strokeWidth="1.6" fill="none" opacity="0.6" />
    <path d="M130 212 Q140 206 150 210" stroke="#8B4A3A" strokeWidth="1.4" fill="none" opacity="0.5" />
  </g>
);

// 4. El tambor que se tocaba a escondidas de noche — moutya dancers around a bonfire.
const ElTamborQueSeTocabaAEscondidasDeNoche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="115" ry="10" fill="#1A1A1A" opacity="0.25" />
      {person(150, 232, 1.05, dark, accentColor)}
      {person(255, 236, 0.95, "#3A2A1E", "#D9A227")}
      <path d="M255 250 L253 205 Q253 195 265 195 Q277 195 277 205 L275 250 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.4" />
      <ellipse cx="265" cy="195" rx="12" ry="6" fill="#D9C08A" stroke="#4A2E14" strokeWidth="2" />
      <path d="M253 210 L277 210 M254 225 L276 225" stroke="#4A2E14" strokeWidth="1.6" opacity="0.7" />
      <path d="M195 246 L215 246 L212 240 L198 240 Z" fill="#4A2E14" opacity="0.7" />
      <path d="M198 246 Q186 222 197 202 Q201 193 205 202 Q216 222 204 246 Z" fill="#D9A227" stroke="#8A5A10" strokeWidth="2" />
      <path d="M200 242 Q192 224 200 208 Q202 202 204 208 Q211 224 202 242 Z" fill="#C1272D" opacity="0.88" />
    </g>
  );
};

// 5. El curry de pescado que define la mesa criolla — fish curry with rice and breadfruit.
const ElCurryDePescadoQueDefineLaMesaCriolla: IllustrationComponent = () => (
  <g>
    <ellipse cx="190" cy="215" rx="70" ry="22" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.6" />
    <ellipse cx="190" cy="205" rx="60" ry="16" fill="#C1272D" stroke="#7A1818" strokeWidth="2" />
    <path d="M168 200 Q184 194 200 201 Q192 210 176 209 Z" fill="#D9A227" stroke="#8A5A10" strokeWidth="1.6" />
    <path d="M200 201 L212 195 L210 208 Z" fill="#D9A227" stroke="#8A5A10" strokeWidth="1.6" />
    <circle cx="178" cy="200" r="1.6" fill="#1A1A1A" />
    <ellipse cx="270" cy="212" rx="30" ry="20" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.2" />
    <circle cx="132" cy="205" r="24" fill="#8FA05C" stroke="#4A5A2E" strokeWidth="2.4" />
    {[[122, 195], [140, 198], [128, 212], [144, 214], [134, 202]].map(([px, py], i) => (
      <circle key={i} cx={px} cy={py} r="2.6" fill="#4A5A2E" opacity="0.75" />
    ))}
    <path d="M175 190 Q178 178 173 168 M195 188 Q198 176 194 166" stroke="#F5F0E6" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
  </g>
);

// 6. La isla donde las bicicletas ganan a los autos — cyclist and ox-cart on La Digue.
// Joint check for the ox: legs start at y=193-197 (body bottom edge ~y=213, overlap
// 16-20), neck/head starts at x=300 (body right edge ~x=320, overlap 20) and reaches
// out to the head/horns beyond x=320. Legs and neck are drawn BEFORE the ox body path
// so the body's opaque fill covers both seams; head, eye and horns are drawn AFTER the
// body so they stay visible on top, matching the giraffe/tortoise fix pattern.
const LaIslaDondeLasBicicletasGananALosAutos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 248 Q205 236 320 248" stroke="#D9C9A3" strokeWidth="10" fill="none" opacity="0.5" />

      {/* cyclist */}
      <circle cx="128" cy="235" r="20" fill="none" stroke="#2A2A2A" strokeWidth="4" />
      <circle cx="193" cy="235" r="20" fill="none" stroke="#2A2A2A" strokeWidth="4" />
      <path d="M128 235 L150 198 L178 198 L193 235 M150 198 L146 176" stroke="#2A2A2A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M178 198 L192 192" stroke="#2A2A2A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="141" cy="150" r="9" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <path d="M141 159 Q147 168 146 176" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <path d="M146 176 Q168 184 178 198" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M147 178 Q168 190 192 192" fill="none" stroke="#3A2A1E" strokeWidth="4" strokeLinecap="round" />
      <path d="M149 179 Q158 200 165 216" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M165 216 Q170 220 176 216" fill="none" stroke="#3A2A1E" strokeWidth="4" strokeLinecap="round" />

      {/* ox cart */}
      <circle cx="165" cy="235" r="17" fill="none" stroke="#2A2A2A" strokeWidth="3.6" />
      <circle cx="205" cy="235" r="17" fill="none" stroke="#2A2A2A" strokeWidth="3.6" />
      <path d="M150 210 L225 210 L220 230 L155 230 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.4" />
      <path d="M225 218 Q250 205 262 195" stroke="#5C3A21" strokeWidth="4" fill="none" strokeLinecap="round" />

      <path d="M265 193 L263 245 M280 195 L278 248 M298 194 L300 246 M312 190 L315 242" stroke="#6B5A45" strokeWidth="8" strokeLinecap="round" />
      <path d="M258 205 Q252 212 256 220" fill="none" stroke="#6B5A45" strokeWidth="4" strokeLinecap="round" />
      <path d="M300 190 Q315 178 325 165 Q328 160 324 157 L318 160 Q312 170 302 182 Z" fill="#6B5A45" stroke="#2A1E14" strokeWidth="2.4" />
      <path d="M255 210 Q252 188 275 182 Q298 178 315 190 Q320 196 315 206 Q298 213 278 212 Q262 214 255 210 Z" fill="#6B5A45" stroke="#2A1E14" strokeWidth="2.6" />
      <ellipse cx="320" cy="162" rx="11" ry="9" fill="#6B5A45" stroke="#2A1E14" strokeWidth="2.2" />
      <circle cx="325" cy="158" r="1.8" fill="#1A1A1A" />
      <path d="M313 152 Q303 148 296 152 M327 153 Q337 150 343 155" stroke="#D9C9A3" strokeWidth="5" fill="none" strokeLinecap="round" />
    </g>
  );
};

// 7. Las casas de madera con encajes de tijera — gingerbread Creole house.
const LasCasasDeMaderaConEncajesDeTijera: IllustrationComponent = () => (
  <g>
    <path d="M150 250 L150 220 M250 250 L250 220" stroke="#6B4423" strokeWidth="8" strokeLinecap="round" />
    <rect x="140" y="205" width="120" height="18" fill="#C68642" stroke="#6B4423" strokeWidth="2.4" />
    <rect x="150" y="140" width="100" height="68" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2.4" />
    <path d="M140 140 L200 100 L260 140 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.6" />
    <path
      d="M150 140 L158 148 L166 140 L174 148 L182 140 L190 148 L198 140 L206 148 L214 140 L222 148 L230 140 L238 148 L246 140 L250 140"
      stroke="#4A2E14"
      strokeWidth="2.2"
      fill="none"
    />
    <path d="M155 205 L155 175 M245 205 L245 175" stroke="#8B7355" strokeWidth="4" />
    <path d="M145 175 L200 160 L255 175 Z" fill="none" stroke="#8B7355" strokeWidth="2.2" />
    <rect x="163" y="155" width="20" height="24" fill="#1B7A9C" opacity="0.5" stroke="#8B7355" strokeWidth="1.8" />
    <path d="M173 155 L173 179 M163 167 L183 167" stroke="#8B7355" strokeWidth="1.4" />
    <rect x="217" y="155" width="20" height="24" fill="#1B7A9C" opacity="0.5" stroke="#8B7355" strokeWidth="1.8" />
    <path d="M227 155 L227 179 M217 167 L237 167" stroke="#8B7355" strokeWidth="1.4" />
    <rect x="190" y="182" width="20" height="26" fill="#5C3A21" stroke="#2A1A0E" strokeWidth="1.8" />
  </g>
);

// 8. La vaina que se poliniza a mano, flor por flor — hand-pollinating vanilla vine.
const LaVainaQueSePolinizaAManoFlorPorFlor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="248" rx="100" ry="10" fill="#3A2A1E" opacity="0.2" />
      <path d="M245 245 L245 130" stroke="#5C3A21" strokeWidth="5" strokeLinecap="round" />
      <path d="M245 240 Q225 225 245 210 Q265 195 245 180 Q225 165 245 150 Q262 138 245 130" stroke="#3A7A45" strokeWidth="4" fill="none" strokeLinecap="round" />
      {[[228, 220], [262, 190], [228, 162], [255, 140]].map(([px, py], i) => (
        <ellipse key={i} cx={px} cy={py} rx="9" ry="5" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.4" transform={`rotate(${i % 2 === 0 ? -20 : 20} ${px} ${py})`} />
      ))}
      <g transform="translate(245 195)">
        <ellipse cx="0" cy="0" rx="15" ry="9" fill="#F5F0E6" stroke="#C9B98A" strokeWidth="1.8" />
        <ellipse cx="-14" cy="-2" rx="10" ry="5" fill="#F5F0E6" stroke="#C9B98A" strokeWidth="1.6" transform="rotate(-25 -14 -2)" />
        <path d="M-4 0 Q0 -6 4 0 Q0 7 -4 0 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.4" />
      </g>
      {person(165, 225, 0.95, dark, accentColor)}
      <path d="M182 198 L204 192" stroke="#D9C08A" strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
};

// 9. Las piraguas talladas a mano que aún salen a pescar — carving a wooden pirogue.
const LasPiraguasTalladasAManoQueAunSalenAPescar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 248 Q205 240 320 248" stroke="#D9C9A3" strokeWidth="12" fill="none" opacity="0.5" />
      <path d="M110 225 Q100 210 130 205 L270 205 Q300 210 290 225 Q270 235 200 235 Q130 235 110 225 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.8" />
      <path d="M135 212 Q200 205 265 212 Q260 220 200 222 Q140 220 135 212 Z" fill="#C68642" opacity="0.6" />
      <path d="M120 214 Q116 210 122 207 M280 214 Q284 210 278 207" stroke="#4A2E14" strokeWidth="1.6" fill="none" opacity="0.6" />
      {person(148, 232, 0.85, dark, accentColor)}
      <path d="M162 205 L182 213" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
      <path d="M180 209 L192 204 L189 216 Z" fill="#6B6F76" stroke="#2A2A2A" strokeWidth="1.4" />
      <path d="M195 198 Q202 193 198 186 M210 200 Q218 196 216 188" stroke="#C68642" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
};

// 10. El idioma criollo que se convirtió en lengua oficial — bilingual sign and open book.
const ElIdiomaCriolloQueSeConvirtioEnLenguaOficial: IllustrationComponent = () => (
  <g>
    <rect x="196" y="120" width="8" height="130" fill="#5C3A21" stroke="#2A1A0E" strokeWidth="2" />
    <path d="M196 150 L140 150 L150 165 L140 180 L196 180 Z" fill="#1B7A9C" stroke="#0F4A5C" strokeWidth="2.2" />
    <path d="M204 175 L260 175 L250 190 L260 205 L204 205 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.2" />
    <path d="M150 158 L182 158 M150 165 L176 165 M150 172 L184 172" stroke="#F5F0E6" strokeWidth="2.4" opacity="0.85" />
    <path d="M212 182 L245 182 M212 189 L240 189 M212 196 L246 196" stroke="#F5F0E6" strokeWidth="2.4" opacity="0.85" />
    <path d="M130 230 Q170 218 200 228 L200 250 Q170 240 130 250 Z" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2.2" />
    <path d="M270 230 Q230 218 200 228 L200 250 Q230 240 270 250 Z" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2.2" />
    <path d="M200 228 L200 250" stroke="#8B7355" strokeWidth="2" />
    <path d="M140 233 L165 229 M140 239 L162 235 M140 245 L165 241" stroke="#D9A227" strokeWidth="2" opacity="0.85" />
    <path d="M260 233 L235 229 M260 239 L238 235 M260 245 L235 241" stroke="#3A7A45" strokeWidth="2" opacity="0.85" />
  </g>
);

const PapaLangueDeSeychelles: IllustrationComponent = () => (
  <g>
    <path d="M150 245 L270 235" stroke="#5C4A3E" strokeWidth="8" strokeLinecap="round" />
    <ellipse cx="215" cy="205" rx="26" ry="20" fill="#1A1A1A" stroke="#000" strokeWidth="2.2" />
    <circle cx="200" cy="195" r="13" fill="#1A1A1A" stroke="#000" strokeWidth="2" />
    <ellipse cx="215" cy="212" rx="14" ry="10" fill="#F5F0E6" />
    <path d="M189 193 L177 189 L189 198 Z" fill="#3A2A1E" />
    <circle cx="195" cy="191" r="2" fill="#fff" />
    <path d="M225 215 Q260 222 285 215 Q295 212 290 222 Q265 232 235 225 Z" fill="#1A1A1A" stroke="#000" strokeWidth="1.8" />
    <line x1="205" y1="220" x2="203" y2="240" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
    <line x1="225" y1="220" x2="227" y2="240" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
  </g>
);

const DokterFeyCuranderosCriollos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="130" y="215" width="150" height="12" fill="#6B4423" stroke="#3A2A1E" strokeWidth="2" />
      <rect x="140" y="227" width="10" height="20" fill="#5C3A21" />
      <rect x="260" y="227" width="10" height="20" fill="#5C3A21" />
      <circle cx="195" cy="150" r="14" fill={skin} stroke={dark} strokeWidth="1.8" />
      <path d="M180 155 Q195 145 210 155 L215 215 Q195 225 175 215 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M180 172 Q160 185 165 205" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <path d="M210 172 Q225 182 220 200" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="220" cy="205" rx="20" ry="10" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="2" />
      {[[205, 198], [215, 192], [228, 196], [235, 203]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q${(x as number) + 6} ${(y as number) - 8} ${(x as number) + 2} ${(y as number) - 16}`} fill="none" stroke="#3A7A45" strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M155 205 Q145 195 148 210" fill="none" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

export const seychellesIllustrations: Record<string, IllustrationDefinition> = {
  "la-semilla-mas-grande-del-mundo-envuelta-en-leyenda": { component: LaSemillaMasGrandeDelMundoEnvueltaEnLeyenda },
  "los-gigantes-que-viven-mas-de-cien-anos": { component: LosGigantesQueVivenMasDeCienAnos },
  "las-rocas-rosadas-que-esculpio-el-oceano": { component: LasRocasRosadasQueEsculpioElOceano },
  "el-tambor-que-se-tocaba-a-escondidas-de-noche": { component: ElTamborQueSeTocabaAEscondidasDeNoche },
  "el-curry-de-pescado-que-define-la-mesa-criolla": { component: ElCurryDePescadoQueDefineLaMesaCriolla },
  "la-isla-donde-las-bicicletas-ganan-a-los-autos": { component: LaIslaDondeLasBicicletasGananALosAutos },
  "las-casas-de-madera-con-encajes-de-tijera": { component: LasCasasDeMaderaConEncajesDeTijera },
  "la-vaina-que-se-poliniza-a-mano-flor-por-flor": { component: LaVainaQueSePolinizaAManoFlorPorFlor },
  "las-piraguas-talladas-a-mano-que-aun-salen-a-pescar": { component: LasPiraguasTalladasAManoQueAunSalenAPescar },
  "el-idioma-criollo-que-se-convirtio-en-lengua-oficial": { component: ElIdiomaCriolloQueSeConvirtioEnLenguaOficial },
  "papa-langue-de-seychelles": { component: PapaLangueDeSeychelles },
  "dokter-fey-curanderos-criollos": { component: DokterFeyCuranderosCriollos },
};
