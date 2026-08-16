import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GranMuralla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <polygon points="95,240 150,180 200,220 250,160 320,220 320,250 95,250" fill={light} opacity="0.5" />
      <path d="M100 235 Q140 195 180 215 Q220 170 260 195 Q290 175 315 200" fill="none" stroke={accentColor} strokeWidth="20" strokeLinecap="round" />
      {[110, 150, 190, 230, 270, 305].map((x, i) => (
        <rect key={x} x={x} y={[220, 195, 205, 175, 190, 180][i] - 22} width="14" height="22" fill={dark} />
      ))}
    </g>
  );
};

const CuatroGrandesInventos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* compass */}
      <circle cx="165" cy="175" r="45" fill={light} stroke={dark} strokeWidth="3" />
      <circle cx="165" cy="175" r="34" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <polygon points="165,140 174,175 165,210 156,175" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <circle cx="165" cy="175" r="5" fill={dark} />
      {/* rolled sheet of paper */}
      <path d="M240 150 L290 150 L290 220 L240 220 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <ellipse cx="240" cy="150" rx="10" ry="10" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <ellipse cx="240" cy="220" rx="10" ry="10" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <line x1="255" y1="165" x2="280" y2="165" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="255" y1="180" x2="280" y2="180" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const Confucio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* rolled scroll */}
      <path d="M130 145 L130 225 L200 225 L200 145 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="130" cy="185" rx="10" ry="40" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="200" cy="185" rx="10" ry="40" fill={accentColor} stroke={dark} strokeWidth="2" />
      <text x="165" y="195" fontSize="30" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">仁</text>
      {/* writing brush beside it */}
      <path d="M240 235 L270 150 L280 153 L252 238 Z" fill="#B5651D" stroke={dark} strokeWidth="1.5" />
      <path d="M264 128 Q280 133 275 150 L258 145 Q260 132 264 128 Z" fill="#1A1A1A" />
      <rect x="248" y="118" width="16" height="20" fill={light} transform="rotate(15 256 128)" />
    </g>
  );
};

const EjercitoTerracota: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}-${col}`} transform={`translate(${130 + col * 45 - row * 10}, ${230 - row * 22})`}>
            <rect x="0" y="0" width="24" height="34" fill={row % 2 === 0 ? accentColor : dark} />
            <circle cx="12" cy="-8" r="10" fill={light} />
          </g>
        ))
      )}
    </g>
  );
};

const TeChino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* small clay teapot */}
      <path d="M130 200 Q130 175 165 175 Q200 175 200 200 Q200 220 165 220 Q130 220 130 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M108 195 Q95 195 95 210 Q95 222 112 218" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M200 195 L222 180" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="165" cy="172" rx="12" ry="6" fill={dark} />
      {/* steaming cup */}
      <path d="M250 210 L280 210 L276 235 L254 235 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M262 200 Q256 190 262 180" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const AnoNuevoChino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="165" y="140" width="70" height="90" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M165 140 L200 175 L235 140" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="195" r="14" fill={gold} />
      <text x="200" y="201" fontSize="16" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">福</text>
      {/* fireworks */}
      {[[280, 120], [110, 150]].map(([x, y], i) => (
        <g key={x}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1={x} y1={y} x2={x} y2={(y as number) - 16} stroke={i % 2 === 0 ? gold : "#C1272D"} strokeWidth="3" strokeLinecap="round" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
    </g>
  );
};

const CaligrafiaChina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="115" width="150" height="130" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      <text x="205" y="215" fontSize="90" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">道</text>
      {/* ink brush tracing it */}
      <path d="M255 145 L300 100 L310 103 L268 152 Z" fill="#B5651D" stroke={dark} strokeWidth="1.5" />
      <path d="M293 85 Q310 90 302 108 L285 100 Q287 88 293 85 Z" fill="#1A1A1A" />
    </g>
  );
};

const KungFuShaolin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  return (
    <g>
      {/* temple with curved roofs behind */}
      <polygon points="230,180 280,150 330,180" fill={dark} opacity="0.5" />
      <rect x="245" y="180" width="70" height="55" fill={light} opacity="0.5" />
      {/* monk in fighting stance */}
      <circle cx="180" cy="140" r="16" fill={skin} />
      <path d="M165 156 Q180 148 195 156 L188 210 L172 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M170 160 Q145 165 138 145" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M190 160 Q212 172 205 195" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M172 210 L160 240" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <path d="M188 210 Q210 210 218 190" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const PandasGigantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.7);
  const green = "#4A8F4E";
  return (
    <g>
      {/* panda body, sitting */}
      <ellipse cx="205" cy="200" rx="55" ry="42" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="150" r="35" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="180" cy="128" r="12" fill={dark} />
      <circle cx="230" cy="128" r="12" fill={dark} />
      <ellipse cx="190" cy="150" rx="10" ry="13" fill={dark} />
      <ellipse cx="220" cy="150" rx="10" ry="13" fill={dark} />
      <circle cx="192" cy="150" r="3" fill="#fff" />
      <circle cx="222" cy="150" r="3" fill="#fff" />
      <ellipse cx="205" cy="165" rx="8" ry="6" fill={dark} />
      <ellipse cx="180" cy="200" rx="16" ry="24" fill={dark} />
      <ellipse cx="230" cy="200" rx="16" ry="24" fill={dark} />
      {/* bamboo stalk */}
      <path d="M195 210 L210 175" stroke={green} strokeWidth="9" strokeLinecap="round" />
      <path d="M198 195 L192 188 M202 183 L196 178" stroke={green} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const TrenAltaVelocidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* long-nosed bullet train */}
      <path d="M110 210 Q95 200 110 185 L150 175 L300 175 L300 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M110 185 Q130 178 150 178" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[160, 190, 220, 250, 280].map((x) => (
        <rect key={x} x={x} y="182" width="20" height="16" fill={light} />
      ))}
      <line x1="95" y1="220" x2="320" y2="220" stroke={dark} strokeWidth="4" />
      {/* speed lines */}
      <line x1="95" y1="200" x2="60" y2="200" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <line x1="95" y1="215" x2="70" y2="215" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.35" />
    </g>
  );
};

export const chinaIllustrations: Record<string, IllustrationDefinition> = {
  "gran-muralla": { component: GranMuralla },
  "cuatro-grandes-inventos": { component: CuatroGrandesInventos },
  confucio: { component: Confucio },
  "ejercito-terracota": { component: EjercitoTerracota },
  "te-chino": { component: TeChino },
  "ano-nuevo-chino": { component: AnoNuevoChino },
  "caligrafia-china": { component: CaligrafiaChina },
  "kung-fu-shaolin": { component: KungFuShaolin },
  "pandas-gigantes": { component: PandasGigantes },
  "tren-alta-velocidad": { component: TrenAltaVelocidad },
};
