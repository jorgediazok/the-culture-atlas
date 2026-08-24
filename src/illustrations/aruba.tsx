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

// Divi-divi tree bent sideways by wind. Trunk (attaching piece) is drawn
// first, tip extended well into where the canopy ellipse (core piece) will
// sit; canopy drawn second so its fill absorbs the trunk-tip seam.
// Trunk tip at local (-58,-76); canopy center (-78,-80) rx48 ry17 —
// checked against the true ellipse boundary along that direction the tip
// sits about 22 units inside the curve, within the 15-25 target.
function diviDivi(x: number, y: number, scale: number, trunkColor: string, leafColor: string, leafDark: string, flip = 1) {
  return (
    <g key={`divi-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale * flip} ${scale})`}>
      <path
        d="M0 0 Q-10 -38 -34 -58 Q-50 -70 -58 -76"
        fill="none"
        stroke={trunkColor}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <ellipse cx="-95" cy="-85" rx="22" ry="10" fill={shade(leafColor, 0.1)} stroke={leafDark} strokeWidth="2" />
      <ellipse cx="-78" cy="-80" rx="48" ry="17" fill={leafColor} stroke={leafDark} strokeWidth="2.6" />
      <ellipse cx="-55" cy="-84" rx="20" ry="9" fill={tint(leafColor, 0.15)} stroke={leafDark} strokeWidth="1.8" />
      <path d="M-30 -95 L-45 -108 M-15 -100 L-25 -115 M0 -95 L-4 -112" stroke={leafDark} strokeWidth="1.6" opacity="0.5" />
    </g>
  );
}

const ElArbolDobladoPorElVientoEterno: IllustrationComponent = () => (
  <g>
    <path d="M90 245 Q205 232 320 244 L320 250 L90 250 Z" fill="#D9C08A" opacity="0.5" />
    <path d="M310 130 L280 128 M300 150 L265 148 M292 170 L255 168" stroke="#9CC2D6" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    {diviDivi(255, 245, 2.05, "#6B4423", "#4A7C3C", "#274A1C")}
    <ellipse cx="130" cy="246" rx="14" ry="5" fill="#8B6F47" opacity="0.4" />
    {diviDivi(140, 248, 0.7, "#6B4423", "#5A8F3C", "#2F5722")}
  </g>
);

const ElPapiamentoLenguaCriollaOficial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      {person(150, 235, 1.05, "#3A2A1E", accentColor)}
      {person(255, 233, 1.05, "#3A2A1E", "#D9A227")}
      <path
        d="M155 150 Q140 130 160 115 Q190 100 220 112 Q245 122 240 145 Q235 162 210 165 L200 178 L198 160 Q170 168 155 150 Z"
        fill="#F5F0E6"
        stroke={dark}
        strokeWidth="2.4"
      />
      <text x="185" y="140" fontSize="17" fontWeight="700" fill={dark} fontFamily="Georgia, serif">
        P
      </text>
      <text x="205" y="150" fontSize="14" fontWeight="700" fill="#8A6A10" fontFamily="Georgia, serif">
        A
      </text>
    </g>
  );
};

const ElCarnavalYLaQuemaDelReyMomo: IllustrationComponent = () => {
  // Dancer legs (attaching piece) are drawn first, starting at local y=-5 —
  // checked against the robe's true bottom-hem curve (which dips from
  // y=10 at the sides to y=17 at center), the robe boundary at x=-7/7 is
  // about y=13.7, so a leg starting at y=-5 overlaps roughly 18.7 units
  // into the robe. The robe (core) is drawn second so its fill absorbs the
  // seam, and both arms are colored to match the robe exactly (no
  // mismatched trim) so any residual shoulder-seam sliver is invisible,
  // matching the same safe-by-construction pattern used by person().
  function dancer(dx: number, dy: number, scale: number, feather: string) {
    return (
      <g key={dx} transform={`translate(${dx} ${dy}) scale(${scale})`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={-14 + i * 7} y1="-48" x2={-24 + i * 11} y2="-82" stroke={feather} strokeWidth="3.2" strokeLinecap="round" />
        ))}
        <line x1="-7" y1="-5" x2="-9" y2="34" stroke="#3A2A1E" strokeWidth="4" strokeLinecap="round" />
        <line x1="7" y1="-5" x2="5" y2="34" stroke="#3A2A1E" strokeWidth="4" strokeLinecap="round" />
        <circle cx="0" cy="-38" r="10" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.6" />
        <path d="M-13 -28 Q0 -34 13 -28 L15 10 Q0 17 -15 10 Z" fill="#D6336C" stroke="#8A1B41" strokeWidth="2.2" />
        <path d="M-13 -24 Q-24 -13 -20 2" fill="none" stroke="#D6336C" strokeWidth="6" strokeLinecap="round" />
        <path d="M13 -24 Q24 -13 20 2" fill="none" stroke="#D6336C" strokeWidth="6" strokeLinecap="round" />
      </g>
    );
  }
  return (
    <g>
      <ellipse cx="215" cy="246" rx="120" ry="9" fill="#3A2A1E" opacity="0.25" />
      <rect x="185" y="222" width="55" height="14" fill="#6B4423" stroke="#3A2410" strokeWidth="2.2" />
      <path d="M188 214 L237 214 M190 208 L235 208" stroke="#5C3A21" strokeWidth="5" strokeLinecap="round" />
      {person(212, 210, 1.35, "#8A1B10", "#E8912D")}
      <path
        d="M195 220 Q205 190 200 165 Q212 195 208 222 Q225 195 222 170 Q232 200 228 222 Q212 202 195 220 Z"
        fill="#E8912D"
        opacity="0.85"
      />
      <path
        d="M198 222 Q206 198 202 178 Q216 202 210 222 Z"
        fill="#F2C230"
        opacity="0.9"
      />
      {dancer(140, 225, 1, "#00838F")}
      {dancer(285, 228, 0.95, "#6A1B9A")}
    </g>
  );
};

// Saguaro-style cactus. Arms (attaching pieces) are drawn first with their
// proximal end 20 units inside the trunk's true straight-side boundary
// (trunk sides are vertical lines at x=-14/x=14, so arm start at x=6 for
// the left arm and x=-6 for the right arm gives an exact 20-unit overlap);
// the trunk rect (core) is drawn second so its fill absorbs the seam.
function saguaro(x: number, y: number, scale: number, green: string, dark: string) {
  return (
    <g key={`saguaro-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M6 -70 Q-20 -72 -26 -95 Q-28 -108 -18 -110 Q-10 -111 -10 -100 Q-8 -84 6 -82 Z"
        fill={green}
        stroke={dark}
        strokeWidth="2.6"
      />
      <path
        d="M-6 -90 Q20 -93 27 -114 Q30 -126 20 -128 Q12 -129 12 -118 Q10 -102 -6 -100 Z"
        fill={green}
        stroke={dark}
        strokeWidth="2.6"
      />
      <rect x="-14" y="-118" width="28" height="118" rx="14" fill={green} stroke={dark} strokeWidth="3" />
      <path d="M0 -114 L0 -8 M-8 -110 L-8 -12 M8 -110 L8 -12" stroke={dark} strokeWidth="1.2" opacity="0.4" />
    </g>
  );
}

const ArikokElDesiertoCaribeno: IllustrationComponent = () => (
  <g>
    <path d="M90 235 Q160 205 240 222 Q285 232 320 212 L320 250 L90 250 Z" fill="#D9A24A" opacity="0.7" />
    <path d="M90 240 Q160 218 240 232 Q285 240 320 224" fill="none" stroke="#B5651D" strokeWidth="2.2" opacity="0.5" />
    {saguaro(150, 245, 1.15, "#5A8F3C", "#2F5722")}
    <ellipse cx="255" cy="242" rx="20" ry="16" fill="#6B8A45" stroke="#3A5222" strokeWidth="2.4" />
    <path d="M255 226 L255 258 M241 234 L269 250 M269 234 L241 250" stroke="#3A5222" strokeWidth="1.6" opacity="0.5" />
    <ellipse cx="290" cy="238" rx="13" ry="11" fill="#6B8A45" stroke="#3A5222" strokeWidth="2.2" />
    {diviDivi(112, 246, 0.75, "#6B4423", "#4A7C3C", "#274A1C", -1)}
  </g>
);

// Leaves fan out via rotate() around the crown's local origin, so the most
// tilted leaves (+-70deg) land farthest from the hub ellipse's own center.
// Checked numerically: at +-70deg the rotated leaf-base corner lands about
// (2.9,6.1) from the hub center, versus a true elliptical boundary radius
// of ~22.3 along that direction on a cx=0 cy=-4 rx=34 ry=21 hub — an
// overlap of about 15.5 units, the worst case across all six leaves.
const LaEraDoradaDelAloeVera: IllustrationComponent = () => {
  const angles = [-70, -35, -12, 12, 35, 70];
  return (
    <g>
      <ellipse cx="185" cy="248" rx="55" ry="10" fill="#5A8F3C" opacity="0.3" />
      <g transform="translate(185 244)">
        {angles.map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <path
              d="M-3 -2 Q-18 -55 -4 -118 Q0 -124 4 -118 Q18 -55 3 -2 Z"
              fill="#5A8F3C"
              stroke="#2F5722"
              strokeWidth="2.2"
            />
            <path d="M0 -20 L0 -100" stroke="#3F6B2C" strokeWidth="1.2" opacity="0.5" />
          </g>
        ))}
        <ellipse cx="0" cy="-4" rx="34" ry="21" fill="#6B9E4C" stroke="#2F5722" strokeWidth="2.6" />
      </g>
      <rect x="255" y="195" width="34" height="46" rx="4" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2.2" />
      <rect x="255" y="205" width="34" height="34" fill="#8FBF6A" opacity="0.85" />
      <rect x="261" y="186" width="22" height="12" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.8" />
      <rect x="222" y="212" width="24" height="30" rx="3" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2" />
      <rect x="222" y="220" width="24" height="22" fill="#6B9E4C" opacity="0.85" />
      <rect x="227" y="205" width="14" height="9" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.6" />
    </g>
  );
};

const LasRuinasDelMolinoDeOroBushiribana: IllustrationComponent = () => (
  <g>
    <path d="M90 220 Q205 205 320 218 L320 250 L90 250 Z" fill="#1B7A9C" opacity="0.45" />
    <path d="M90 232 Q205 218 320 230" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
    <path d="M140 218 L140 150 Q140 140 155 140 L245 140 Q260 140 260 150 L260 218 Z" fill="#8C7B6B" stroke="#4A3A2A" strokeWidth="3" />
    <rect x="140" y="212" width="120" height="10" fill="#6B5A45" />
    <rect x="165" y="165" width="24" height="34" fill="#2A2018" opacity="0.8" />
    <rect x="212" y="165" width="24" height="34" fill="#2A2018" opacity="0.8" />
    <path d="M140 150 Q155 132 200 130 Q245 132 260 150" fill="none" stroke="#4A3A2A" strokeWidth="2.6" />
    <path d="M100 250 L118 210 L128 250 Z" fill="#5C4A3A" opacity="0.6" />
    <path d="M275 250 L288 218 L300 250 Z" fill="#5C4A3A" opacity="0.6" />
  </g>
);

const PetroglifosArawakYCaquetio: IllustrationComponent = () => (
  <g>
    <path d="M100 250 L100 130 Q100 100 140 95 L270 95 Q310 100 310 135 L310 250 Z" fill="#C9A876" stroke="#8A6F4A" strokeWidth="3" />
    <path d="M115 245 L115 140 Q115 115 145 110 L265 110 Q295 115 295 140 L295 245" fill="none" stroke="#8A6F4A" strokeWidth="1.4" opacity="0.4" />
    <path
      d="M155 200 Q145 195 143 182 Q141 172 150 170 Q158 168 160 176 L172 174 Q182 172 188 180 L200 178 Q195 190 182 190 L168 190 Q160 198 155 200 Z M143 182 L132 178 M150 170 L148 160"
      fill="none"
      stroke="#B5651D"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M225 145 Q245 140 250 158 Q253 172 238 178 Q225 182 220 168 Q217 156 225 145 Z" fill="none" stroke="#B5651D" strokeWidth="3" />
    <circle cx="230" cy="210" r="5" fill="#B5651D" opacity="0.85" />
    <circle cx="245" cy="220" r="5" fill="#B5651D" opacity="0.85" />
    <circle cx="215" cy="222" r="5" fill="#B5651D" opacity="0.85" />
  </g>
);

const LasCasasCunucuDeTejadosTriangulares: IllustrationComponent = () => (
  <g>
    <path d="M90 245 Q205 236 320 244 L320 250 L90 250 Z" fill="#D9C08A" opacity="0.5" />
    <rect x="140" y="175" width="130" height="70" fill="#F2C230" stroke="#8A6A10" strokeWidth="3" />
    <path d="M128 178 L205 118 L282 178 Z" fill="#B5651D" stroke="#6B3A18" strokeWidth="3" />
    <rect x="190" y="205" width="30" height="40" fill="#3A2A1E" stroke="#1A120C" strokeWidth="2.2" />
    <rect x="150" y="192" width="22" height="22" fill="#9CC2D6" stroke="#4A6A78" strokeWidth="2.2" />
    <path d="M150 203 L172 203 M161 192 L161 214" stroke="#4A6A78" strokeWidth="1.6" />
    <rect x="238" y="192" width="22" height="22" fill="#9CC2D6" stroke="#4A6A78" strokeWidth="2.2" />
    <path d="M238 203 L260 203 M249 192 L249 214" stroke="#4A6A78" strokeWidth="1.6" />
    {saguaro(300, 246, 0.55, "#5A8F3C", "#2F5722")}
  </g>
);

const ElDandeQueCantaLaBuenaFortuna: IllustrationComponent = () => (
  <g>
    <circle cx="280" cy="110" r="20" fill="#F5F0E6" opacity="0.8" />
    <rect x="150" y="130" width="90" height="115" fill="#4A6A78" stroke="#233A42" strokeWidth="3" />
    <rect x="182" y="185" width="30" height="60" fill="#2A2018" stroke="#1A120C" strokeWidth="2.2" />
    <path d="M140 133 L195 95 L250 133 Z" fill="#8C7B6B" stroke="#4A3A2A" strokeWidth="2.6" />
    {person(130, 235, 1.05, "#3A2A1E", "#D6336C")}
    <path d="M112 208 Q100 205 98 225 Q97 240 112 242 Q125 243 126 228 Q127 212 112 208 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.2" />
    <path d="M112 208 L118 178" stroke="#3A2A1E" strokeWidth="2.4" />
    {person(268, 233, 1.05, "#3A2A1E", "#00838F")}
    <ellipse cx="292" cy="222" rx="15" ry="11" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.2" />
    <ellipse cx="292" cy="222" rx="8" ry="6" fill="#5C3A21" />
  </g>
);

// Windsurfer over the board. The board is drawn FIRST here (unlike the
// arm/leg helpers above) because it functions as the ground plane the
// figure stands on, not a small core shape meant to hide a seam — drawing
// it first lets every part of the person and rig render fully visible on
// top of it. Feet (191,226)/(219,225) land far inside the board's true
// curve (cx=205 cy=230 rx=72 ry=19): checked numerically, both are more
// than 35 units past the boundary along their direction from center, so
// they're solidly planted with no gap. The mast base was originally at
// (204,200), a full 10 units above the board's true top edge (~y=211 at
// that x) — a real floating-mast gap caught by this check — fixed by
// extending it to (204,228), about 18.8 units past the board's true
// boundary in that direction.
const ElVientoConstanteQueAtraeWindsurfistas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const sail = tint(accentColor, 0.1);
  return (
    <g>
      <path d="M90 232 Q160 220 230 230 Q280 238 320 222" fill="none" stroke="#1B7A9C" strokeWidth="3" opacity="0.6" />
      <path d="M90 250 Q170 235 260 248 Q290 252 320 242" fill="#1B7A9C" opacity="0.4" />
      <ellipse cx="205" cy="230" rx="72" ry="19" fill="#E8912D" stroke="#8A5A10" strokeWidth="2.6" />
      <path d="M150 230 Q205 222 260 230" fill="none" stroke="#8A5A10" strokeWidth="1.4" opacity="0.5" />
      <path d="M191 226 L189 205 M219 225 L221 203" stroke="#3A2A1E" strokeWidth="4.6" strokeLinecap="round" />
      <path d="M204 228 L204 105" stroke="#5C4A3A" strokeWidth="4" strokeLinecap="round" />
      <path d="M204 150 Q235 145 234 168 Q233 178 204 176 Z" fill={sail} stroke={dark} strokeWidth="2.4" />
      <path d="M204 108 Q172 128 175 166 Q178 180 204 176" fill="none" stroke="#5C4A3A" strokeWidth="3" />
      <path d="M194 158 Q200 152 208 158 L210 205 Q200 211 190 205 Z" fill={sail} stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="150" r="9" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.6" />
      <path d="M194 160 Q184 166 179 176" fill="none" stroke={sail} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M208 160 Q202 152 204 138" fill="none" stroke={sail} strokeWidth="5.5" strokeLinecap="round" />
    </g>
  );
};

export const arubaIllustrations: Record<string, IllustrationDefinition> = {
  "el-arbol-doblado-por-el-viento-eterno": { component: ElArbolDobladoPorElVientoEterno },
  "el-papiamento-lengua-criolla-oficial": { component: ElPapiamentoLenguaCriollaOficial },
  "el-carnaval-y-la-quema-del-rey-momo": { component: ElCarnavalYLaQuemaDelReyMomo },
  "arikok-el-desierto-caribeno": { component: ArikokElDesiertoCaribeno },
  "la-era-dorada-del-aloe-vera": { component: LaEraDoradaDelAloeVera },
  "las-ruinas-del-molino-de-oro-bushiribana": { component: LasRuinasDelMolinoDeOroBushiribana },
  "petroglifos-arawak-y-caquetio": { component: PetroglifosArawakYCaquetio },
  "las-casas-cunucu-de-tejados-triangulares": { component: LasCasasCunucuDeTejadosTriangulares },
  "el-dande-que-canta-la-buena-fortuna": { component: ElDandeQueCantaLaBuenaFortuna },
  "el-viento-constante-que-atrae-windsurfistas": { component: ElVientoConstanteQueAtraeWindsurfistas },
};
