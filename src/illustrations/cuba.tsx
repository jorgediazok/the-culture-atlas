import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AutosClasicosCuba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const chrome = "#B0B8BF";
  return (
    <g>
      {/* vintage car, rounded body */}
      <path d="M100 210 Q95 175 130 170 L150 145 Q165 135 190 135 L235 135 Q255 138 265 155 L285 168 Q305 172 305 195 L305 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M165 145 L185 145 L188 168 L155 168 Z" fill={tint(accentColor, 0.65)} />
      <path d="M200 138 L250 140 L262 168 L205 168 Z" fill={tint(accentColor, 0.65)} />
      {/* chrome bumper */}
      <rect x="95" y="205" width="215" height="10" rx="4" fill={chrome} />
      <circle cx="140" cy="215" r="20" fill="#2E2E2E" />
      <circle cx="140" cy="215" r="8" fill={chrome} />
      <circle cx="260" cy="215" r="20" fill="#2E2E2E" />
      <circle cx="260" cy="215" r="8" fill={chrome} />
      <circle cx="290" cy="180" r="6" fill={chrome} />
    </g>
  );
};

const HabanosTabaco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* cigar wrapped in a tobacco leaf */}
      <path d="M115 195 L275 155 Q290 151 293 163 Q296 175 281 179 L121 219 Q106 223 103 211 Q100 199 115 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 200 L270 165 M140 208 L272 172" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {/* smoke curl */}
      <path d="M280 158 Q300 140 290 115" fill="none" stroke={tint(accentColor, 0.5)} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      {/* gold band */}
      <path d="M155 190 L175 185 L182 208 L162 213 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <circle cx="169" cy="199" r="6" fill={shade(gold, 0.3)} />
    </g>
  );
};

const SonCubanoBuenaVista: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* trumpet */}
      <path d="M130 200 L230 160 L240 172 L145 216 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <circle cx="150" cy="208" r="14" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      {[160, 172, 184].map((x, i) => (
        <circle key={x} cx={x - i * 6} cy={196 - i * 6} r="6" fill={shade(gold, 0.15)} />
      ))}
      {/* crossed maracas */}
      <g transform="rotate(20 220 190)">
        <ellipse cx="220" cy="175" rx="16" ry="22" fill={accentColor} />
        <rect x="216" y="195" width="8" height="35" fill={dark} />
      </g>
      <g transform="rotate(-25 260 190)">
        <ellipse cx="260" cy="175" rx="16" ry="22" fill={shade(accentColor, 0.15)} />
        <rect x="256" y="195" width="8" height="35" fill={dark} />
      </g>
    </g>
  );
};

const RevolucionCubana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* beret with a star */}
      <path d="M150 145 Q150 110 195 108 Q240 110 240 145 Q210 158 195 158 Q180 158 150 145 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="212" cy="112" r="6" fill={dark} />
      <path d="M195 118 L200 130 L213 130 L203 138 L207 151 L195 143 L183 151 L187 138 L177 130 L190 130 Z" fill={gold} />
      {/* rifle crossed with a pen */}
      <path d="M130 235 L260 175" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <path d="M130 235 L120 245 M140 230 L134 244" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M270 165 Q280 158 272 148 L200 190 L208 200 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const SanteriaReligion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      {/* colorful beaded necklaces */}
      {[0, 1, 2].map((row) => (
        <g key={row}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <circle
              key={i}
              cx={130 + i * 12}
              cy={140 + row * 16 + Math.abs(i - 4) * 3}
              r="6"
              fill={i % 3 === 0 ? accentColor : i % 3 === 1 ? "#F4C430" : dark}
            />
          ))}
        </g>
      ))}
      {/* lit candle beside them */}
      <rect x="255" y="170" width="26" height="60" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M268 170 Q262 155 268 140 Q274 155 268 170 Z" fill={flame} />
      <path d="M268 165 Q265 155 268 148" fill="none" stroke={shade(flame, 0.3)} strokeWidth="2" />
    </g>
  );
};

const BeisbolPasionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#B5651D";
  return (
    <g>
      <path d="M140 235 L215 115 Q220 105 210 100 Q200 95 195 105 L130 228 Z" fill={wood} stroke={dark} strokeWidth="2" />
      <path d="M260 235 L185 115 Q180 105 190 100 Q200 95 205 105 L270 228 Z" fill={shade(wood, 0.15)} stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="165" r="30" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M200 137 Q212 152 200 165 Q188 178 200 193" fill="none" stroke={accentColor} strokeWidth="2.5" strokeDasharray="3 3" />
    </g>
  );
};

const BalletNacionalCuba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const satin = tint(accentColor, 0.15);
  const ribbon = "#F5E6EC";
  return (
    <g>
      {/* two pointe shoes crossed in an X: wide ankle opening at top, tapering
          to a flat toe block at the bottom where a dancer balances, with
          ribbons crossing up the ankle and tying in a bow */}
      <g transform="rotate(-28 205 175)">
        <path d="M188 128 Q183 118 205 115 Q227 118 222 128 Q232 162 220 200 Q215 224 205 228 Q195 224 190 200 Q178 162 188 128 Z" fill={satin} stroke={dark} strokeWidth="2.5" />
        <ellipse cx="205" cy="222" rx="11" ry="5" fill={dark} opacity="0.55" />
        <path d="M192 122 Q222 100 205 82" stroke={ribbon} strokeWidth="4" fill="none" />
        <path d="M218 122 Q188 100 205 82" stroke={ribbon} strokeWidth="4" fill="none" />
        <circle cx="205" cy="82" r="6" fill={ribbon} />
      </g>
      <g transform="rotate(28 205 175)">
        <path d="M188 128 Q183 118 205 115 Q227 118 222 128 Q232 162 220 200 Q215 224 205 228 Q195 224 190 200 Q178 162 188 128 Z" fill={shade(satin, 0.1)} stroke={dark} strokeWidth="2.5" />
        <ellipse cx="205" cy="222" rx="11" ry="5" fill={dark} opacity="0.55" />
        <path d="M192 122 Q222 100 205 82" stroke={ribbon} strokeWidth="4" fill="none" />
        <path d="M218 122 Q188 100 205 82" stroke={ribbon} strokeWidth="4" fill="none" />
        <circle cx="205" cy="82" r="6" fill={ribbon} />
      </g>
    </g>
  );
};

const CampanaAlfabetizacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const flame = "#F4A300";
  return (
    <g>
      {/* open book */}
      <path d="M205 155 L120 168 L120 220 L205 210 Z" fill={accentColor} />
      <path d="M205 155 L290 168 L290 220 L205 210 Z" fill={dark} />
      <line x1="205" y1="155" x2="205" y2="210" stroke={light} strokeWidth="2" />
      {[135, 148, 161].map((y) => (
        <line key={y} x1="135" y1={y} x2="185" y2={y - 3} stroke={light} strokeWidth="2" opacity="0.7" />
      ))}
      {/* lit lantern beside it */}
      <path d="M255 130 L285 130 L280 175 L260 175 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M267 138 Q262 152 268 165 Q274 152 267 138 Z" fill={flame} />
      <rect x="264" y="118" width="6" height="12" fill={dark} />
      <line x1="270" y1="175" x2="270" y2="188" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const RonCubaLibre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const lime = "#8FBC3F";
  return (
    <g>
      {/* tall glass */}
      <path d="M175 130 L235 130 L228 235 L182 235 Z" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M180 165 L230 165 L225 232 L185 232 Z" fill={accentColor} opacity="0.85" />
      {/* ice cubes */}
      <rect x="190" y="175" width="16" height="16" fill="#fff" opacity="0.8" transform="rotate(-10 198 183)" />
      <rect x="205" y="200" width="16" height="16" fill="#fff" opacity="0.75" transform="rotate(12 213 208)" />
      {/* bubbles */}
      {[[195, 210], [212, 190], [200, 160]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2.5" fill="#fff" opacity="0.6" />
      ))}
      {/* lime wedge on the rim */}
      <path d="M225 132 A22 22 0 0 1 247 154 L225 154 Z" fill={lime} stroke={shade(lime, 0.3)} strokeWidth="2" />
    </g>
  );
};

const MedicosCubanosMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const red = "#C1272D";
  return (
    <g>
      {/* medical bag with a cross */}
      <path d="M130 165 L230 165 Q240 165 240 175 L240 225 Q240 235 230 235 L130 235 Q120 235 120 225 L120 175 Q120 165 130 165 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M155 165 L155 150 Q155 143 165 143 L195 143 Q205 143 205 150 L205 165" fill="none" stroke={dark} strokeWidth="5" />
      <rect x="168" y="188" width="24" height="8" fill={red} />
      <rect x="176" y="180" width="8" height="24" fill={red} />
      {/* small globe beside it */}
      <circle cx="270" cy="200" r="34" fill={light} stroke={dark} strokeWidth="3" />
      <path d="M270 166 Q250 200 270 234 Q290 200 270 166 Z" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      <line x1="236" y1="200" x2="304" y2="200" stroke={dark} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const JoseMartiIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const steel = "#B0B8BF";
  const steelDark = shade(steel, 0.35);
  const gold = "#D4A017";
  // Ten-point star (5 outer @ r=30, 5 inner @ r=12), center (290,155), starting
  // straight up and stepping every 36deg, precomputed offline — no trig at render time.
  const STAR_POINTS: [number, number][] = [
    [290, 125], [297.05, 145.29], [318.53, 145.73], [301.41, 158.71], [307.63, 179.27],
    [290, 167], [272.37, 179.27], [278.59, 158.71], [261.47, 145.73], [282.95, 145.29],
  ];
  const starPath = `M${STAR_POINTS.map((p) => p.join(",")).join(" L")} Z`;
  return (
    <g>
      {/* machete handle, sharing exact vertices with the blade below so the two meet with no gap */}
      <path d="M148 225 L165 240 L142 250 L128 240 Z" fill={shade("#6D4C41", 0.2)} stroke={dark} strokeWidth="2" />
      {/* machete blade crossing diagonally */}
      <path d="M148 225 L270 108 L284 121 L165 240 Z" fill={steel} stroke={steelDark} strokeWidth="3" />
      {/* writer's quill crossing the other way, nib sharing an exact vertex with the feather */}
      <path d="M247 233 L132 106 L121 114 L236 246 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M225 210 L155 132 M212 196 L145 120 M199 182 L160 140" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <path d="M247 233 L259 246 L241 251 Z" fill={dark} />
      {/* lone star from the Cuban flag */}
      <path d={starPath} fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
    </g>
  );
};

const CastilloMorroHabana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = tint(accentColor, 0.2);
  const sea = "#5DA9C7";
  const light = "#FFF4C2";
  return (
    <g>
      {/* lighthouse tower drawn first: its base sits 20 units inside the wall's y-range
          (tower bottom y=190, wall top y=170), so the wall's fill painted after covers the seam */}
      <rect x="180" y="90" width="40" height="100" fill={stone} stroke={dark} strokeWidth="2.5" />
      {/* lantern gallery: bottom edge at y=105 overlaps the tower top (y=90) by 15 units */}
      <rect x="182" y="70" width="36" height="35" fill={tint(stone, 0.35)} stroke={dark} strokeWidth="2" />
      {/* roof cone shares its base corners exactly with the lantern's top edge */}
      <path d="M182 70 L200 52 L218 70 Z" fill={dark} />
      <path d="M218 82 L258 60 L258 73 L218 92 Z" fill={light} opacity="0.6" />
      {/* fortress wall, painted over the tower's base to hide the join */}
      <path d="M100 170 L310 170 L310 225 L100 225 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* crenellations: bottom edge at y=185 overlaps the wall top (y=170) by 15 units, invisible since fill matches the wall */}
      {[110, 138, 166, 194, 222, 250, 278].map((x) => (
        <rect key={x} x={x} y="155" width="16" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      {/* embrasure openings cut into the wall */}
      {[140, 190, 240, 270].map((x) => (
        <rect key={x} x={x} y="185" width="10" height="18" fill={dark} opacity="0.5" />
      ))}
      {/* sea waves lapping at the base */}
      <path d="M90 232 Q120 218 150 232 Q180 246 210 232 Q240 218 270 232 Q300 246 320 232" fill="none" stroke={sea} strokeWidth="5" strokeLinecap="round" />
      <path d="M95 240 Q130 232 165 240 Q200 248 235 240 Q270 232 305 240" fill="none" stroke={sea} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const RumbaAfrocubana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  const woodDark = shade(wood, 0.35);
  const skin = "#E8C39E";
  const drums = [
    { cx: 140, topY: 150, botY: 235, topW: 46, botW: 34, fill: shade(accentColor, 0.1) },
    { cx: 200, topY: 125, botY: 235, topW: 52, botW: 38, fill: accentColor },
    { cx: 262, topY: 108, botY: 235, topW: 58, botW: 42, fill: shade(accentColor, 0.2) },
  ];
  return (
    <g>
      {drums.map((d) => (
        <g key={d.cx}>
          <path
            d={`M${d.cx - d.topW / 2} ${d.topY} L${d.cx + d.topW / 2} ${d.topY} L${d.cx + d.botW / 2} ${d.botY} L${d.cx - d.botW / 2} ${d.botY} Z`}
            fill={d.fill}
            stroke={dark}
            strokeWidth="2.5"
          />
          {/* tuning lugs, fully contained within the drum body */}
          {[0.22, 0.5, 0.78].map((t) => (
            <rect key={t} x={d.cx - d.topW / 2 + t * d.topW - 3} y={d.topY + 14} width="6" height="14" fill={woodDark} />
          ))}
          {/* drumhead cap: centered 4 units below the body's top edge with ry=15, so it
              penetrates 19 units into the body (well past the 15-25 target) while still
              rising 11 units above the rim, reading as a raised skin, not a floating disk */}
          <ellipse cx={d.cx} cy={d.topY + 4} rx={d.topW / 2 + 2} ry="15" fill={skin} stroke={dark} strokeWidth="2.5" />
        </g>
      ))}
      {/* crossed claves in front */}
      <g transform="rotate(18 200 220)">
        <rect x="150" y="214" width="100" height="12" rx="6" fill={wood} stroke={woodDark} strokeWidth="2" />
      </g>
      <g transform="rotate(-18 200 220)">
        <rect x="150" y="214" width="100" height="12" rx="6" fill={shade(wood, 0.12)} stroke={woodDark} strokeWidth="2" />
      </g>
    </g>
  );
};

const TrinidadCiudadColonial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const facade = "#F2C46D";
  const facadeDark = shade(facade, 0.35);
  const roof = "#A63A2E";
  const iron = "#3E3E3E";
  return (
    <g>
      {/* colonial bell tower: one continuous tiered path, so there are no internal joints to gap */}
      <path
        d="M110 235 L165 235 L165 170 L155 170 L155 115 L147 115 L147 90 L137.5 68 L128 90 L128 115 L120 115 L120 170 L110 170 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      {/* bell, fully contained inside the belfry opening */}
      <path d="M132 96 Q137.5 90 143 96 L145 110 L130 110 Z" fill={dark} />
      {/* cross starting exactly at the tower's apex vertex (137.5,68), so it meets with no gap */}
      <path d="M137.5 68 L137.5 50 M128 58 L147 58" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      {/* pitched roof over the facade: its base spans y150-165, overlapping the wall's top
          edge (y150) by 15 units once the wall is painted over it */}
      <path d="M180 165 L245 128 L310 165 Z" fill={roof} stroke={shade(roof, 0.3)} strokeWidth="2" />
      {/* colorful facade wall */}
      <path d="M190 150 L300 150 L300 235 L190 235 Z" fill={facade} stroke={facadeDark} strokeWidth="3" />
      <rect x="230" y="195" width="20" height="40" fill={facadeDark} />
      <rect x="205" y="165" width="18" height="20" fill={tint(facade, 0.4)} stroke={facadeDark} strokeWidth="2" />
      <rect x="265" y="165" width="18" height="20" fill={tint(facade, 0.4)} stroke={facadeDark} strokeWidth="2" />
      {/* iron balcony: spans x175-225, so it overlaps the wall (x190-300) by 25 units while
          the x175-190 portion protrudes visibly to the left as the ledge */}
      <rect x="175" y="183" width="50" height="13" fill={iron} />
      {[180, 190, 200, 210, 220].map((x) => (
        <line key={x} x1={x} y1="183" x2={x} y2="170" stroke={iron} strokeWidth="2.5" />
      ))}
      {/* cobblestone street in the foreground */}
      {[100, 130, 160, 190, 220, 250, 280, 305].map((x, i) => (
        <ellipse key={x} cx={x} cy={245 + (i % 2) * 4} rx="10" ry="4" fill={dark} opacity="0.35" />
      ))}
    </g>
  );
};

const CafeCubanoCultura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5F0E6";
  const bean = "#3E2723";
  const steam = tint(accentColor, 0.55);
  return (
    <g>
      {/* moka pot: one continuous silhouette (bottom chamber + waist + top chamber), so
          there are no internal joints to gap */}
      <path
        d="M220 210 L300 210 L290 170 L285 170 L280 120 L240 120 L235 170 L230 170 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      {/* spout, sharing an exact vertex (280,120) with the pot's top-right corner */}
      <path d="M280 120 L305 108 L292 128 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* handle: endpoints computed on the pot's true left edge (not its bounding box) —
          (223.75,195) lies on segment (220,210)-(230,170); (238,140) lies on segment
          (235,170)-(240,120) — so both ends sit flush on the pot wall with no gap */}
      <path d="M223.75 195 Q195 155 238 140" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <circle cx="260" cy="120" r="7" fill={dark} />
      {/* saucer and cup: the saucer ellipse's true top boundary under the cup (x145-180)
          sits at y≈210.5-211, not the y=210 bounding-box edge, so the cup's bottom is
          extended to y=226 for a verified ~15-16 unit overlap into the saucer, drawn
          after it so the seam is fully covered */}
      <ellipse cx="160" cy="222" rx="50" ry="12" fill={shade(cream, 0.1)} stroke={dark} strokeWidth="2" />
      <path d="M145 175 L180 175 L180 226 L145 226 Z" fill={cream} stroke={dark} strokeWidth="2.5" />
      {/* cup handle, endpoints exactly on the cup's straight right wall (x=180) so it meets with no gap */}
      <path d="M180 182 Q205 182 205 193.5 Q205 205 180 205" fill="none" stroke={dark} strokeWidth="4" />
      {/* steam curling up from the rim */}
      <path d="M155 175 Q148 155 158 140 Q166 128 158 112" fill="none" stroke={steam} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <path d="M172 175 Q178 158 170 145" fill="none" stroke={steam} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* scattered coffee beans */}
      {[[110, 205], [95, 190], [118, 225]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="9" ry="6" fill={bean} transform={`rotate(20 ${x} ${y})`} />
          <line x1={x - 6} y1={y} x2={x + 6} y2={y} stroke={shade(bean, 0.4)} strokeWidth="1.5" transform={`rotate(20 ${x} ${y})`} />
        </g>
      ))}
    </g>
  );
};

export const cubaIllustrations: Record<string, IllustrationDefinition> = {
  "autos-clasicos-cuba": { component: AutosClasicosCuba },
  "habanos-tabaco": { component: HabanosTabaco },
  "son-cubano-buena-vista": { component: SonCubanoBuenaVista },
  "revolucion-cubana": { component: RevolucionCubana },
  "santeria-religion": { component: SanteriaReligion },
  "beisbol-pasion-nacional": { component: BeisbolPasionNacional },
  "ballet-nacional-cuba": { component: BalletNacionalCuba },
  "campana-alfabetizacion": { component: CampanaAlfabetizacion },
  "ron-cuba-libre": { component: RonCubaLibre },
  "medicos-cubanos-mundo": { component: MedicosCubanosMundo },
  "jose-marti-independencia": { component: JoseMartiIndependencia },
  "castillo-morro-habana": { component: CastilloMorroHabana },
  "rumba-afrocubana": { component: RumbaAfrocubana },
  "trinidad-ciudad-colonial": { component: TrinidadCiudadColonial },
  "cafe-cubano-cultura": { component: CafeCubanoCultura },
};
