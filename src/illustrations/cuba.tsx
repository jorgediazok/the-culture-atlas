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
};
