import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Pho: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const noodle = "#F0D080";
  const green = "#4A8F4E";
  return (
    <g>
      {/* bowl */}
      <path d="M120 185 Q120 235 205 235 Q290 235 290 185 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="185" rx="85" ry="18" fill={dark} />
      <ellipse cx="205" cy="183" rx="70" ry="13" fill="#8B5A2B" opacity="0.6" />
      {/* noodles */}
      <path d="M170 175 Q180 160 170 145 M190 178 Q200 160 192 140 M215 178 Q225 160 218 142 M235 175 Q245 160 238 148" fill="none" stroke={noodle} strokeWidth="5" strokeLinecap="round" />
      {/* meat slices */}
      <ellipse cx="185" cy="178" rx="14" ry="8" fill="#C97C4A" stroke={dark} strokeWidth="1.5" />
      <ellipse cx="225" cy="180" rx="14" ry="8" fill="#C97C4A" stroke={dark} strokeWidth="1.5" />
      {/* herbs */}
      <path d="M150 172 Q145 160 155 155 Q160 165 150 172 Z" fill={green} />
      <path d="M258 172 Q253 158 265 155 Q268 168 258 172 Z" fill={green} />
    </g>
  );
};

const AoDai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* long fitted tunic, side slits */}
      <path d="M180 110 L230 110 L238 200 L222 240 L188 240 L172 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M190 130 L190 235 M220 130 L220 235" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {/* wide flowing pants beneath */}
      <path d="M180 205 L165 245 L195 245 L200 210 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M230 205 L245 245 L215 245 L210 210 Z" fill={light} stroke={dark} strokeWidth="2" />
      {/* collar */}
      <path d="M188 112 L205 128 L222 112" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const HaLongBay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.55" />
      {[[130, 225, 55], [180, 235, 70], [235, 220, 60], [285, 232, 45]].map(([x, y, h], i) => (
        <path key={x} d={`M${(x as number) - 22} ${y} Q${x} ${(y as number) - (h as number)} ${(x as number) + 22} ${y} Z`} fill={i % 2 === 0 ? dark : accentColor} />
      ))}
      {[[130, 195], [180, 178], [235, 190], [285, 198]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="10" fill={green} opacity="0.8" />
      ))}
    </g>
  );
};

const CafeConHuevo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const foam = "#F0D9A8";
  return (
    <g>
      <path d="M155 165 h64 v40 a32 28 0 0 1 -64 0 Z" fill={accentColor} />
      <path d="M219 178 a18 16 0 0 1 0 32 h-8 v-32 Z" fill={dark} />
      <ellipse cx="205" cy="205" rx="55" ry="12" fill={dark} />
      {/* thick creamy foam on top */}
      <ellipse cx="187" cy="165" rx="32" ry="16" fill={foam} stroke={shade(foam, 0.2)} strokeWidth="2" />
      <path d="M165 158 Q175 150 187 158 Q199 150 209 158" fill="none" stroke={shade(foam, 0.15)} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const NonLa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.3);
  return (
    <g>
      <polygon points="205,105 100,220 310,220" fill={accentColor} stroke={dark} strokeWidth="3" strokeLinejoin="round" />
      {[130, 150, 172, 194, 216, 238, 262, 284].map((x) => (
        <line key={x} x1={x} y1="220" x2="205" y2="105" stroke={light} strokeWidth="1" opacity="0.5" />
      ))}
      <ellipse cx="205" cy="220" rx="105" ry="10" fill={dark} opacity="0.4" />
      <path d="M175 150 Q205 165 235 150" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const TunelCuChi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const jungle = "#3E5C3A";
  return (
    <g>
      {/* dense jungle vegetation */}
      {[[110, 200], [150, 215], [280, 205], [305, 195], [190, 210]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="26" fill={jungle} />
      ))}
      {/* camouflaged square hatch entrance */}
      <path d="M175 220 L235 220 L228 250 L182 250 Z" fill="#1A1A1A" />
      <path d="M175 220 L235 220 L232 210 L178 210 Z" fill={dark} opacity="0.8" />
      <rect x="196" y="222" width="16" height="10" fill={dark} />
    </g>
  );
};

const Tet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const pink = "#F4A6C6";
  return (
    <g>
      {/* peach blossom branch */}
      <path d="M115 240 Q140 200 130 160 Q125 130 150 110" fill="none" stroke="#6B4423" strokeWidth="6" strokeLinecap="round" />
      {[[135, 155], [122, 175], [148, 130], [160, 115]].map(([x, y]) => (
        <g key={x}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 6} rx="5" ry="7" fill={pink} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      {/* red envelope */}
      <rect x="220" y="140" width="70" height="90" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M220 140 L255 175 L290 140" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="255" cy="195" r="14" fill={gold} />
      <text x="255" y="201" fontSize="16" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">福</text>
    </g>
  );
};

const MotoHanoi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* scooter body */}
      <path d="M140 220 Q135 190 165 185 L230 185 Q245 185 248 200 L248 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="155" cy="230" r="16" fill="#2E2E2E" />
      <circle cx="240" cy="230" r="16" fill="#2E2E2E" />
      <line x1="248" y1="195" x2="270" y2="180" stroke={dark} strokeWidth="4" />
      {/* stacked cargo boxes and bags */}
      <rect x="175" y="140" width="45" height="40" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="185" y="115" width="30" height="28" fill={shade(light, 0.1)} stroke={dark} strokeWidth="2" />
      <path d="M225 155 Q245 150 250 175 Q235 180 225 165 Z" fill={dark} opacity="0.7" />
    </g>
  );
};

const BanhMi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#4A8F4E";
  const red = "#C1272D";
  return (
    <g>
      <path d="M115 200 Q115 175 145 175 L265 175 Q295 175 295 200 Q295 225 265 225 L145 225 Q115 225 115 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 180 Q205 168 280 180" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* filling peeking out */}
      <path d="M140 195 Q170 178 200 195 Q230 178 260 195 Q255 210 200 205 Q145 210 140 195 Z" fill="#C97C4A" />
      {[[160, 190], [220, 190]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill={red} />
      ))}
      <path d="M180 192 Q185 185 190 192" fill="none" stroke={green} strokeWidth="3" />
    </g>
  );
};

const ArrozalesTerrazas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <path
          key={row}
          d={`M${95 + row * 8} ${240 - row * 26} L${320 - row * 10} ${230 - row * 26} L${320 - row * 10} ${222 - row * 26} L${95 + row * 8} ${232 - row * 26} Z`}
          fill={row % 2 === 0 ? accentColor : light}
          stroke={dark}
          strokeWidth="1"
        />
      ))}
    </g>
  );
};

export const vietnamIllustrations: Record<string, IllustrationDefinition> = {
  pho: { component: Pho },
  "ao-dai": { component: AoDai },
  "ha-long-bay": { component: HaLongBay },
  "cafe-con-huevo": { component: CafeConHuevo },
  "non-la": { component: NonLa },
  "tunel-cu-chi": { component: TunelCuChi },
  tet: { component: Tet },
  "moto-hanoi": { component: MotoHanoi },
  "banh-mi": { component: BanhMi },
  "arrozales-terrazas": { component: ArrozalesTerrazas },
};
