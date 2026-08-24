import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AbolicionDelEjercito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  return (
    <g>
      {/* rifle, broken in two, laid diagonally across the lower half */}
      <g transform="translate(195, 210) rotate(-20)">
        {/* buttstock + receiver, with a trigger guard loop so it reads as a gun, not a stick */}
        <path d="M-100 22 L-70 6 L-70 -8 L-88 -20 L-102 -12 Z" fill={dark} />
        <rect x="-70" y="-6" width="55" height="12" fill={dark} />
        <path d="M-52 6 Q-52 20 -38 20 Q-25 20 -25 6" fill="none" stroke={dark} strokeWidth="5" />
        {/* the break */}
        {/* barrel, tapering to the muzzle */}
        <path d="M15 -6 L95 -9 L102 -5 L95 -1 L18 6 Z" fill={dark} />
      </g>
      {/* white dove flying above the gap left by the broken rifle */}
      <path d="M175 120 Q195 108 215 118 Q230 110 250 112 Q235 122 225 122 Q240 130 250 140 Q228 135 215 128 Q195 138 180 132 Q190 125 175 120 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="220" cy="117" r="2.5" fill={dark} />
    </g>
  );
};

const PuraVida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* wavy rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <path key={deg} d="M205 165 Q198 130 205 90 Q212 130 205 165 Z" fill={accentColor} opacity="0.8" transform={`rotate(${deg} 205 165)`} />
      ))}
      {/* smiling sun face */}
      <circle cx="205" cy="165" r="46" fill={accentColor} />
      <circle cx="188" cy="155" r="5" fill={dark} />
      <circle cx="222" cy="155" r="5" fill={dark} />
      <path d="M182 178 Q205 200 228 178" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const BiodiversidadExtrema: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const red = "#C1272D";
  const blue = "#1565C0";
  return (
    <g>
      {/* green leaf */}
      <path d="M95 235 Q150 195 230 200 Q300 205 320 175 Q300 235 220 240 Q140 245 95 235 Z" fill={accentColor} />
      <path d="M320 175 Q260 205 180 215" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* red frog with blue spots */}
      <ellipse cx="210" cy="175" rx="38" ry="30" fill={red} />
      <circle cx="188" cy="150" r="13" fill={red} />
      <circle cx="232" cy="150" r="13" fill={red} />
      <circle cx="182" cy="145" r="6" fill="#1A1A1A" />
      <circle cx="238" cy="145" r="6" fill="#1A1A1A" />
      {[[195, 170], [222, 180], [205, 195], [180, 185]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill={blue} />
      ))}
      <path d="M180 195 L165 210 M240 195 L255 210 M195 200 L188 218 M222 200 L228 218" stroke={red} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const CarretasPintadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C1272D", "#1565C0", "#2E7D32"];
  return (
    <g>
      {/* oxcart wheel with colorful geometric spokes */}
      <circle cx="205" cy="165" r="80" fill="none" stroke={dark} strokeWidth="10" />
      <circle cx="205" cy="165" r="80" fill="none" stroke={accentColor} strokeWidth="3" opacity="0.6" />
      {[0, 45, 90, 135].map((deg, i) => (
        <rect key={deg} x="201" y="90" width="8" height="150" fill={colors[i % colors.length]} transform={`rotate(${deg} 205 165)`} />
      ))}
      <circle cx="205" cy="165" r="22" fill={dark} />
      <circle cx="205" cy="165" r="12" fill="#F4C430" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle key={deg} cx="205" cy="105" r="5" fill="#F4C430" transform={`rotate(${deg} 205 165)`} />
      ))}
    </g>
  );
};

const CafeCostarricense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="180" cy="222" rx="52" ry="10" fill={dark} />
      <path d="M148 165 h64 v40 a32 28 0 0 1 -64 0 Z" fill={accentColor} />
      <path d="M212 178 a18 16 0 0 1 0 32 h-8 v-32 Z" fill={dark} />
      <path d="M165 150 q7 -14 0 -24" fill="none" stroke={light} strokeWidth="5" strokeLinecap="round" opacity="0.75" />
      <path d="M185 150 q7 -14 0 -24" fill="none" stroke={light} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      {[[260, 165], [285, 195], [255, 210]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="16" ry="11" fill={dark} transform={`rotate(${Number(x) % 3 === 0 ? 20 : -15} ${x} ${y})`} />
          <path d={`M${x} ${Number(y) - 9} Q${x} ${y} ${x} ${Number(y) + 9}`} stroke={light} strokeWidth="2" fill="none" />
        </g>
      ))}
    </g>
  );
};

const QuetzalResplandeciente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#C1272D";
  return (
    <g>
      {/* long curved tail feathers */}
      <path d="M195 190 Q140 200 105 165" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <path d="M198 195 Q150 215 120 195" fill="none" stroke={shade(accentColor, 0.15)} strokeWidth="7" strokeLinecap="round" />
      {/* body */}
      <ellipse cx="225" cy="180" rx="34" ry="26" fill={accentColor} />
      <ellipse cx="230" cy="195" rx="16" ry="18" fill={red} />
      {/* head */}
      <circle cx="245" cy="150" r="20" fill={accentColor} />
      <path d="M262 150 L280 146 L266 158 Z" fill={dark} />
      <circle cx="250" cy="145" r="3" fill="#1A1A1A" />
      <path d="M235 135 Q245 125 255 133" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const PeninsulaNicoyaLongevidad: IllustrationComponent = ({ accentColor }) => {
  const sand = "#E8C87A";
  const sun = "#F4A300";
  return (
    <g>
      <path d="M95 235 Q210 220 320 235 L320 250 L95 250 Z" fill={sand} />
      <circle cx="270" cy="120" r="30" fill={sun} />
      {/* palm tree */}
      <path d="M175 235 Q170 190 185 150" fill="none" stroke="#8B5A2B" strokeWidth="9" strokeLinecap="round" />
      <path d="M185 150 Q155 135 138 148" fill={accentColor} />
      <path d="M185 150 Q215 135 232 148" fill={accentColor} />
      <path d="M185 150 Q165 118 170 98" fill={accentColor} />
      <path d="M185 150 Q205 118 200 98" fill={accentColor} />
      <path d="M185 150 Q185 115 185 95" fill={accentColor} />
    </g>
  );
};

const VolcanArenal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const smoke = "#B0AFA8";
  const lava = "#F4A300";
  return (
    <g>
      <polygon points="105,240 205,105 305,240" fill={dark} />
      <path d="M180 240 L205 150 L230 240 Z" fill={lava} opacity="0.85" />
      <path d="M195 195 Q205 175 215 195 L212 240 L198 240 Z" fill={lava} />
      {/* smoke from the top */}
      <path d="M205 108 Q190 90 200 70 Q215 85 205 60" fill="none" stroke={smoke} strokeWidth="8" strokeLinecap="round" opacity="0.75" />
    </g>
  );
};

const PerezososEmbajadores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* branch */}
      <line x1="95" y1="120" x2="320" y2="120" stroke="#8B5A2B" strokeWidth="12" strokeLinecap="round" />
      {/* sloth hanging, arms wrapped over the branch */}
      <path d="M175 118 Q175 108 190 108 Q195 108 195 118 L195 145 Q195 155 185 155 Q175 155 175 145 Z" fill={accentColor} />
      <path d="M225 118 Q225 108 210 108 Q205 108 205 118 L205 145 Q205 155 215 155 Q225 155 225 145 Z" fill={accentColor} />
      <circle cx="200" cy="185" r="42" fill={accentColor} />
      <ellipse cx="200" cy="192" rx="26" ry="22" fill={light} />
      <circle cx="188" cy="182" r="5" fill="#1A1A1A" />
      <circle cx="212" cy="182" r="5" fill="#1A1A1A" />
      <path d="M188 200 Q200 210 212 200" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M175 210 Q160 225 165 240 M225 210 Q240 225 235 240" stroke={accentColor} strokeWidth="10" strokeLinecap="round" fill="none" />
    </g>
  );
};

const EcoturismoPionero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const path = "#C9A66B";
  return (
    <g>
      {/* leafy tree */}
      <rect x="150" y="180" width="18" height="60" fill="#8B5A2B" />
      <circle cx="140" cy="150" r="34" fill={dark} />
      <circle cx="175" cy="135" r="38" fill={accentColor} />
      <circle cx="200" cy="160" r="30" fill={light} opacity="0.85" />
      {/* winding path beside it */}
      <path d="M230 240 Q250 210 235 185 Q220 160 245 130 Q260 112 300 100" fill="none" stroke={path} strokeWidth="18" strokeLinecap="round" />
      <path d="M230 240 Q250 210 235 185 Q220 160 245 130 Q260 112 300 100" fill="none" stroke={shade(path, 0.2)} strokeWidth="2" strokeDasharray="1 12" />
    </g>
  );
};

const TortugasTortuguero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#C9A66B";
  const sandDark = shade("#C9A66B", 0.25);
  const moon = "#F4E9C9";
  return (
    <g>
      {/* night sky: moon and stars */}
      <circle cx="300" cy="95" r="18" fill={moon} opacity="0.9" />
      {[[110, 95], [250, 65], [135, 58], [270, 130]].map(([x, y]) => (
        <circle key={`star-${x}-${y}`} cx={x} cy={y} r="2.2" fill={moon} opacity="0.8" />
      ))}
      {/* sand mound, drawn first so the shell and flippers sit into it */}
      <path d="M105 250 Q120 195 200 200 Q280 195 295 250 Z" fill={sand} />
      <path d="M105 250 Q120 195 200 200 Q280 195 295 250 Z" fill="none" stroke={sandDark} strokeWidth="1.5" opacity="0.4" />
      {/* four flippers, drawn before the shell so their roots sit underneath it */}
      <path d="M165 149 L128 108 L138 98 L179 135 Z" fill={dark} />
      <path d="M235 149 L272 108 L262 98 L221 135 Z" fill={dark} />
      <path d="M169 194 L141 236 L153 244 L185 206 Z" fill={dark} />
      <path d="M231 194 L259 236 L247 244 L215 206 Z" fill={dark} />
      {/* shell, painted over the flipper roots to keep the joins seamless */}
      <ellipse cx="200" cy="170" rx="65" ry="55" fill={accentColor} />
      <path d="M155 140 Q200 155 245 140" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      <path d="M150 185 Q200 205 250 185" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      <path d="M200 120 L200 220" fill="none" stroke={dark} strokeWidth="3" opacity="0.4" />
      {/* head, drawn last so it reads as a complete shape at the front of the shell */}
      <circle cx="200" cy="113" r="22" fill={accentColor} />
      <circle cx="192" cy="108" r="3" fill="#1A1A1A" />
      <circle cx="208" cy="108" r="3" fill="#1A1A1A" />
      {/* half-buried eggs beside the nest */}
      <ellipse cx="130" cy="238" rx="9" ry="7" fill={moon} />
      <ellipse cx="272" cy="236" rx="9" ry="7" fill={moon} />
    </g>
  );
};

const MarimbaCostarricense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const wood = "#8B5A2B";
  const woodDark = shade("#8B5A2B", 0.3);
  const keys = [
    { x: 104, w: 26, tube: 50 },
    { x: 132, w: 24, tube: 45 },
    { x: 158, w: 23, tube: 41 },
    { x: 183, w: 21, tube: 37 },
    { x: 206, w: 20, tube: 33 },
    { x: 228, w: 19, tube: 29 },
    { x: 249, w: 18, tube: 25 },
    { x: 269, w: 17, tube: 21 },
  ];
  return (
    <g>
      {/* stand: two legs and a crossbar */}
      <path d="M128 248 L150 248 L144 198 L134 198 Z" fill={woodDark} />
      <path d="M248 248 L270 248 L264 198 L254 198 Z" fill={woodDark} />
      <rect x="108" y="206" width="180" height="9" fill={woodDark} />
      {/* resonator tubes, hanging beneath the keys */}
      {keys.map((k) => (
        <rect key={`tube-${k.x}`} x={k.x - (k.w - 4) / 2} y="170" width={k.w - 4} height={k.tube} rx="4" fill={wood} opacity="0.85" />
      ))}
      {/* wooden keys */}
      {keys.map((k) => (
        <rect key={`key-${k.x}`} x={k.x - k.w / 2} y="150" width={k.w} height="18" rx="3" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* two mallets mid-strike */}
      <line x1="95" y1="85" x2="170" y2="152" stroke={woodDark} strokeWidth="5" strokeLinecap="round" />
      <circle cx="170" cy="152" r="10" fill={dark} />
      <line x1="303" y1="80" x2="232" y2="150" stroke={woodDark} strokeWidth="5" strokeLinecap="round" />
      <circle cx="232" cy="150" r="10" fill={dark} />
      {/* small motion arcs suggesting sound at the point of impact */}
      <path d="M155 140 Q170 130 185 140" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      <path d="M217 138 Q232 128 247 138" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
    </g>
  );
};

const MascarasBoruca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const wood = "#7B4B2A";
  const woodDark = shade("#7B4B2A", 0.3);
  const palette = [accentColor, "#F4A300", "#2E7D32", "#1565C0"];
  const dots: [number, number][] = [[150, 130], [250, 130], [150, 195], [250, 195]];
  return (
    <g>
      {/* mask base, drawn first so the horns can be painted over its top edge */}
      <ellipse cx="200" cy="165" rx="68" ry="62" fill={wood} />
      <ellipse cx="200" cy="165" rx="68" ry="62" fill="none" stroke={accentColor} strokeWidth="7" opacity="0.85" />
      {dots.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={palette[i % palette.length]} />
      ))}
      {/* horns, short, thick, and swept almost sideways so they read as horns, not ears */}
      <path d="M159 137 Q120 118 95 124 L91 136 Q125 145 151 163 Z" fill={dark} />
      <path d="M241 137 Q280 118 305 124 L309 136 Q275 145 249 163 Z" fill={dark} />
      {/* eyes */}
      <circle cx="175" cy="150" r="16" fill="#F4E9C9" />
      <circle cx="225" cy="150" r="16" fill="#F4E9C9" />
      <circle cx="175" cy="150" r="7" fill="#1A1A1A" />
      <circle cx="225" cy="150" r="7" fill="#1A1A1A" />
      {/* nose */}
      <path d="M200 158 L188 195 L212 195 Z" fill={woodDark} />
      {/* mouth with carved teeth */}
      <path d="M170 194 Q200 210 230 194 L230 203 Q200 218 170 203 Z" fill="#1A1A1A" />
      {[180, 192, 204, 216].map((x) => (
        <rect key={x} x={x - 4} y="195" width="8" height="8" fill="#F4E9C9" />
      ))}
    </g>
  );
};

const CeramicaChorotega: IllustrationComponent = ({ accentColor }) => {
  const clay = "#C97B4A";
  const clayDark = shade("#C97B4A", 0.3);
  const dark = "#3E2412";
  return (
    <g>
      {/* ground shadow */}
      <ellipse cx="200" cy="245" rx="100" ry="8" fill={clayDark} opacity="0.25" />
      {/* small secondary vessel, each drawn as one continuous outline so no seam is needed */}
      <path d="M100 240 Q88 240 88 226 Q88 205 96 195 Q100 180 96 168 Q108 162 120 168 Q116 180 120 195 Q128 205 128 226 Q128 240 116 240 Z" fill={shade(accentColor, 0.15)} />
      {/* main vessel, one continuous outline */}
      <path d="M170 240 Q150 240 150 220 Q150 180 165 160 Q170 130 165 110 Q163 95 175 90 L225 90 Q237 95 235 110 Q230 130 235 160 Q250 180 250 220 Q250 240 230 240 Z" fill={clay} stroke={clayDark} strokeWidth="2" />
      {/* painted geometric bands, sized to stay inside the vessel's true silhouette */}
      <path d="M172 145 L184 136 L196 152 L208 136 L220 152 L228 145" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M160 190 L175 180 L190 200 L205 180 L220 200 L240 190" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {[172, 192, 212].map((x) => (
        <polygon key={x} points={`${x},218 ${x + 12},218 ${x + 6},204`} fill={accentColor} />
      ))}
    </g>
  );
};

const AntorchaIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const handle = "#5D4037";
  const handleDark = shade("#5D4037", 0.3);
  const glow = "#FFF3C4";
  return (
    <g>
      {/* torch handle, drawn first so the flame can be painted over its top */}
      <rect x="152" y="170" width="16" height="80" rx="4" fill={handle} />
      <rect x="148" y="242" width="24" height="10" rx="3" fill={handleDark} />
      {/* layered flame, rooted well inside the handle's top edge */}
      <path d="M150 190 Q138 145 162 92 Q186 145 174 190 Z" fill="#C1272D" />
      <path d="M156 190 Q148 150 162 108 Q176 150 168 190 Z" fill="#F4A300" />
      <path d="M160 190 Q156 158 162 128 Q168 158 164 190 Z" fill="#FFEB3B" />
      {[[122, 120], [200, 100], [130, 150]].map(([x, y]) => (
        <circle key={`spark-${x}-${y}`} cx={x} cy={y} r="2.4" fill="#F4A300" opacity="0.75" />
      ))}
      {/* hanging paper lantern beside the torch */}
      <line x1="255" y1="82" x2="255" y2="108" stroke={handleDark} strokeWidth="2" />
      {/* tassel drawn first so the lantern body sits over its root */}
      <path d="M240 178 L270 178 L255 218 Z" fill={dark} />
      <path d="M242 108 L268 108 L263 133 L247 133 Z" fill={dark} />
      <ellipse cx="255" cy="155" rx="32" ry="42" fill={accentColor} />
      <circle cx="255" cy="155" r="14" fill={glow} opacity="0.75" />
      <line x1="240" y1="122" x2="240" y2="188" stroke={dark} strokeWidth="2" opacity="0.5" />
      <line x1="255" y1="118" x2="255" y2="192" stroke={dark} strokeWidth="2" opacity="0.5" />
      <line x1="270" y1="122" x2="270" y2="188" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

export const costaRicaIllustrations: Record<string, IllustrationDefinition> = {
  "abolicion-del-ejercito": { component: AbolicionDelEjercito },
  "pura-vida": { component: PuraVida },
  "biodiversidad-extrema": { component: BiodiversidadExtrema },
  "carretas-pintadas": { component: CarretasPintadas },
  "cafe-costarricense": { component: CafeCostarricense },
  "quetzal-resplandeciente": { component: QuetzalResplandeciente },
  "peninsula-nicoya-longevidad": { component: PeninsulaNicoyaLongevidad },
  "volcan-arenal": { component: VolcanArenal },
  "perezosos-embajadores": { component: PerezososEmbajadores },
  "ecoturismo-pionero": { component: EcoturismoPionero },
  "tortugas-tortuguero": { component: TortugasTortuguero },
  "marimba-costarricense": { component: MarimbaCostarricense },
  "mascaras-boruca": { component: MascarasBoruca },
  "ceramica-chorotega": { component: CeramicaChorotega },
  "antorcha-independencia": { component: AntorchaIndependencia },
};
