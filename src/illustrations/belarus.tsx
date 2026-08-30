import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BelovezhskayaPushchaBosquePrimigenio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[130, 60], [180, 80], [230, 55], [280, 75]].map(([x, h], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 6} y={250 - (h as number)} width="12" height={h} fill="#5C4A3A" />
          <polygon points={`${x},${190 - (h as number)} ${(x as number) + 26},${250 - (h as number)} ${(x as number) - 26},${250 - (h as number)}`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <path d="M90 230 Q205 245 320 230" fill="none" stroke="#F5F0E6" strokeWidth="10" opacity="0.15" />
    </g>
  );
};

const BisonteEuropeoSalvadoDeLaExtincion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const forest = shade(accentColor, 0.55);
  return (
    <g>
      {/* forest backdrop, pushed behind and to the sides so the bison stays the clear subject */}
      <g opacity="0.35">
        <polygon points="100,150 122,150 111,100" fill={forest} />
        <rect x="106" y="150" width="10" height="26" fill="#5C4A3A" />
        <polygon points="288,158 310,158 299,112" fill={forest} />
        <rect x="294" y="158" width="10" height="24" fill="#5C4A3A" />
      </g>

      {/* legs first — the body's fill covers each leg's top so there's no visible seam.
          Same accentColor as the body (not a separate dark tone) so the animal reads as
          one continuous silhouette rather than mismatched pieces. */}
      <rect x="165" y="188" width="16" height="50" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="205" y="185" width="16" height="55" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="245" y="188" width="15" height="50" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="270" y="190" width="15" height="46" fill={accentColor} stroke={dark} strokeWidth="2" />

      {/* humped shoulder + back, side profile facing left */}
      <path
        d="M155 220 Q160 155 225 128 Q270 115 292 145 Q302 175 292 205 Q270 222 220 222 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />

      {/* lowered head, same accentColor as the body so it reads as one animal — only the
          outline stroke defines where the head's contour separates from the shoulder.
          Neck end (195,168)-(185,195) reaches 20-25 units past the shoulder's own left
          boundary at those heights (computed from the shoulder path's Bezier curve), so it
          overlaps rather than just touching it. */}
      <path
        d="M195 168 Q150 145 128 158 Q95 162 82 188 Q78 208 98 228 Q118 234 140 222 Q155 208 185 195 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />

      {/* shaggy mane texture over the head/shoulder join, a few short dark strokes rather
          than a solid color block */}
      <path d="M165 172 Q172 182 168 194" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <path d="M148 165 Q156 176 152 190" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <path d="M130 170 Q138 180 135 194" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.5" />

      {/* short horns swept sideways from the head, not vertical */}
      <path d="M112 178 Q88 168 70 174" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <path d="M120 183 Q100 170 86 162" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />

      <circle cx="102" cy="210" r="4" fill="#1A1A1A" />

      <path d="M290 205 Q306 214 298 232" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const ChernobilLaMayorParteCayoEnBielorrusia: IllustrationComponent = () => (
  <g>
    <rect x="150" y="200" width="110" height="45" fill="#5C4A3A" opacity="0.7" />
    <polygon points="205,90 235,150 175,150" fill="none" stroke="#F4A300" strokeWidth="4" />
    <circle cx="205" cy="130" r="6" fill="#F4A300" />
    <path d="M205 100 L205 118 M195 135 L211 135 M199 138 L188 128 M211 138 L222 128" stroke="#F4A300" strokeWidth="3" />
    <rect x="170" y="220" width="15" height="25" fill="#3E2712" />
    <rect x="225" y="215" width="15" height="30" fill="#3E2712" />
  </g>
);

const FortalezaDeBrestLaFortalezaHeroe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 250 L130 180 L155 180 L150 210 L175 210 L170 175 L195 175 L200 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M215 250 L220 170 L245 170 L240 205 L265 205 L260 180 L285 180 L290 250 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M205 175 L200 130 L215 130 Z" fill={dark} />
      <path d="M215 130 Q235 132 235 145 L215 142 Z" fill="#B71C1C" />
    </g>
  );
};

const KhatynMemorialALasAldeasQuemadas: IllustrationComponent = () => (
  <g>
    <rect x="185" y="120" width="40" height="90" fill="#4A4A4A" />
    <ellipse cx="205" cy="115" rx="24" ry="14" fill="#6B6355" stroke="#3A3A3A" strokeWidth="2" />
    <path d="M195 130 L205 155 L215 130" fill="none" stroke="#3A3A3A" strokeWidth="2.5" />
    <path d="M90 240 L320 240" stroke="#8B7355" strokeWidth="3" opacity="0.5" />
    {[140, 175, 245, 280].map((x) => (
      <rect key={x} x={x - 8} y="220" width="16" height="20" fill="#5C4A3A" opacity="0.5" />
    ))}
  </g>
);

const CinturonesDeSlutskUnSimboloNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="150" width="200" height="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="110" y="150" width="200" height="30" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="8 4" />
      {[130, 165, 200, 235, 270].map((x, i) => (
        <polygon key={x} points={`${x},155 ${x + 8},165 ${x},175 ${x - 8},165`} fill={i % 2 === 0 ? "#D4AF37" : "#F5F0E6"} />
      ))}
      <path d="M110 180 L100 210 M310 180 L320 210" stroke={dark} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const VytinankaArteDelPapelRecortado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="110" width="110" height="130" fill="#3D8FB0" opacity="0.25" />
      <path d="M205 130 L215 155 L240 155 L220 172 L228 197 L205 182 L182 197 L190 172 L170 155 L195 155 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="163" r="10" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const DranikiElPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="70" ry="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[[160, 200], [205, 195], [250, 202]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="30" ry="12" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
      <ellipse cx="205" cy="188" rx="14" ry="7" fill="#F5F0E6" opacity="0.9" />
    </g>
  );
};

const MinskReconstruidaDesdeLosEscombros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 240 Q205 250 320 240 L320 246 L100 246 Z" fill={dark} opacity="0.4" />
      {[[140, 100], [190, 130], [240, 95], [285, 120]].map(([x, h], i) => (
        <rect key={x as number} x={(x as number) - 20} y={240 - (h as number)} width="40" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M120 240 L300 240" stroke="#F5F0E6" strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const GranDucadoDeLituaniaCorazonBelaruso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const metal = "#AEB6BD";
  return (
    <g>
      {/* legs, drawn first so the tunic's hem (bottom edge at y=212) covers their tops */}
      <rect x="195" y="188" width="22" height="57" fill={metal} stroke={dark} strokeWidth="2" />
      <rect x="223" y="188" width="22" height="57" fill={metal} stroke={dark} strokeWidth="2" />

      {/* shield arm sleeve, rooted inside the tunic's shoulder before the shield covers its end */}
      <path d="M202 149 Q172 158 168 188" fill="none" stroke={metal} strokeWidth="11" strokeLinecap="round" />
      {/* scroll arm sleeve, same pattern on the other shoulder */}
      <path d="M238 149 Q262 160 267 183" fill="none" stroke={metal} strokeWidth="11" strokeLinecap="round" />

      {/* tunic / torso, shoulders wide tapering to the hem */}
      <path d="M188 145 L252 145 L242 212 L198 212 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />

      {/* kite shield, its right edge overlapping the sleeve's end point so the hand reads as gripping it */}
      <path
        d="M132 155 Q172 148 176 188 Q173 220 150 233 Q127 220 124 190 Q125 168 132 155 Z"
        fill={tint(accentColor, 0.2)}
        stroke={dark}
        strokeWidth="2.5"
      />
      <line x1="150" y1="160" x2="150" y2="222" stroke={dark} strokeWidth="2" opacity="0.6" />
      <line x1="128" y1="192" x2="172" y2="192" stroke={dark} strokeWidth="2" opacity="0.6" />

      {/* unrolled scroll, its near roll centered on the sleeve's end point */}
      <circle cx="266" cy="186" r="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <rect x="266" y="177" width="42" height="18" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <line x1="272" y1="183" x2="302" y2="183" stroke={dark} strokeWidth="1.2" opacity="0.5" />
      <line x1="272" y1="189" x2="298" y2="189" stroke={dark} strokeWidth="1.2" opacity="0.5" />
      <circle cx="308" cy="186" r="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />

      {/* helmet, its base overlapping the tunic's top edge so head and body read as one figure */}
      <circle cx="220" cy="135" r="28" fill={metal} stroke={dark} strokeWidth="2.5" />
      <polygon points="220,100 236,135 204,135" fill={metal} stroke={dark} strokeWidth="2" />
      <rect x="216" y="125" width="8" height="30" fill={dark} opacity="0.5" />
    </g>
  );
};

const MarcChagallElPintorNacidoEnVitebsk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* village rooftops */}
      {[130, 180, 230, 280].map((x, i) => (
        <g key={x}>
          <rect x={x - 18} y="210" width="36" height="35" fill={tint(accentColor, i % 2 === 0 ? 0.2 : 0.05)} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 20},210 ${x},188 ${x + 20},210`} fill={dark} opacity="0.6" />
        </g>
      ))}
      {/* floating cow */}
      <ellipse cx="205" cy="130" rx="35" ry="20" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-12 205 130)" />
      <circle cx="240" cy="118" r="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M178 128 Q160 120 155 105 M232 108 Q245 95 265 98" stroke={dark} strokeWidth="3" fill="none" opacity="0.6" />
      {/* floating human figure beside it */}
      <circle cx="130" cy="105" r="12" fill="#C68642" />
      <path d="M118 118 Q130 110 142 118 L138 155 L122 155 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElCastilloDeMirPatrimonioDeLaHumanidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="170" width="110" height="80" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="140" y="130" width="30" height="45" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <polygon points="135,130 155,105 175,130" fill={dark} />
      <rect x="240" y="120" width="30" height="55" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <polygon points="235,120 255,95 275,120" fill={dark} />
      {/* Renaissance decorative band */}
      <rect x="150" y="195" width="110" height="10" fill="#D4AF37" opacity="0.7" />
    </g>
  );
};

const KupalleLaNochePaganaDeSanJuan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {/* bonfire */}
      <path d="M175 250 Q170 220 190 200 Q205 215 210 195 Q225 215 220 235 Q235 220 230 250 Z" fill="#F4A300" stroke="#B7410E" strokeWidth="2" />
      {/* jumping couple, mid-leap */}
      <circle cx="150" cy="170" r="13" fill={skin} />
      <path d="M138 185 Q150 178 162 185 L156 220 L144 220 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="270" cy="170" r="13" fill={skin} />
      <path d="M258 185 Q270 178 282 185 L276 220 L264 220 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      {/* clasped hands */}
      <line x1="162" y1="195" x2="258" y2="195" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const LaTradicionBielorrusaDeTejerConPajaDeCenteno: IllustrationComponent = () => {
  const straw = "#D4A017";
  const dark = shade(straw, 0.4);
  return (
    <g>
      <line x1="205" y1="90" x2="205" y2="120" stroke={dark} strokeWidth="2" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line key={deg} x1="205" y1="150" x2="205" y2="110" stroke={straw} strokeWidth="4" transform={`rotate(${deg} 205 150)`} />
      ))}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line key={`o-${deg}`} x1="205" y1="150" x2="255" y2="150" stroke={straw} strokeWidth="3" opacity="0.7" transform={`rotate(${deg} 205 150)`} />
      ))}
      <circle cx="205" cy="150" r="8" fill={dark} />
      {/* small hanging ornaments below */}
      <line x1="180" y1="195" x2="180" y2="220" stroke={straw} strokeWidth="3" />
      <line x1="230" y1="195" x2="230" y2="220" stroke={straw} strokeWidth="3" />
    </g>
  );
};

const ElLagoNarachElMarDeBielorrusia: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <path d="M90 250 L90 190 Q205 170 320 190 L320 250 Z" fill="#1F6FA5" opacity="0.5" />
      {[170, 190, 210, 230].map((y, i) => (
        <path key={y} d={`M90 ${y} Q150 ${y - 8} 205 ${y} Q260 ${y + 8} 320 ${y}`} fill="none" stroke={accentColor} strokeWidth="3" opacity={0.5 - i * 0.08} />
      ))}
      {/* sandy shore */}
      <path d="M90 250 Q205 258 320 250 L320 255 L90 255 Z" fill="#D4A017" opacity="0.5" />
    </g>
  );
};

export const belarusIllustrations: Record<string, IllustrationDefinition> = {
  "belovezhskaya-pushcha-bosque-primigenio": { component: BelovezhskayaPushchaBosquePrimigenio },
  "bisonte-europeo-salvado-de-la-extincion": { component: BisonteEuropeoSalvadoDeLaExtincion },
  "chernobil-la-mayor-parte-cayo-en-bielorrusia": { component: ChernobilLaMayorParteCayoEnBielorrusia },
  "fortaleza-de-brest-la-fortaleza-heroe": { component: FortalezaDeBrestLaFortalezaHeroe },
  "khatyn-memorial-a-las-aldeas-quemadas": { component: KhatynMemorialALasAldeasQuemadas },
  "cinturones-de-slutsk-un-simbolo-nacional": { component: CinturonesDeSlutskUnSimboloNacional },
  "vytinanka-arte-del-papel-recortado": { component: VytinankaArteDelPapelRecortado },
  "draniki-el-plato-nacional": { component: DranikiElPlatoNacional },
  "minsk-reconstruida-desde-los-escombros": { component: MinskReconstruidaDesdeLosEscombros },
  "gran-ducado-de-lituania-corazon-belaruso": { component: GranDucadoDeLituaniaCorazonBelaruso },
  "marc-chagall-el-pintor-nacido-en-vitebsk": { component: MarcChagallElPintorNacidoEnVitebsk },
  "el-castillo-de-mir-patrimonio-de-la-humanidad": { component: ElCastilloDeMirPatrimonioDeLaHumanidad },
  "kupalle-la-noche-pagana-de-san-juan": { component: KupalleLaNochePaganaDeSanJuan },
  "la-tradicion-bielorrusa-de-tejer-con-paja-de-centeno": { component: LaTradicionBielorrusaDeTejerConPajaDeCenteno },
  "el-lago-narach-el-mar-de-bielorrusia": { component: ElLagoNarachElMarDeBielorrusia },
};
