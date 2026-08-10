import type { ComponentType } from "react";

export type EmblemComponent = ComponentType<{ accentColor: string }>;

const Netherlands: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 58 C36 54 32 40 40 28 C44 34 48 44 50 58 Z" fill="#fff" />
    <path d="M50 58 C64 54 68 40 60 28 C56 34 52 44 50 58 Z" fill="#fff" />
    <path d="M50 58 C44 46 46 30 50 22 C54 30 56 46 50 58 Z" fill="#fff" />
    <rect x="47" y="57" width="6" height="28" fill="#cfe8c0" />
    <path d="M47 78 C32 74 28 86 32 94 C42 90 47 84 47 78 Z" fill="#cfe8c0" />
  </svg>
);

const Belgium: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="38,50 62,50 55,96 45,96" fill="#fff" />
    <polygon points="38,50 62,50 59,44 41,44" fill="#c23b2e" />
    <rect x="40" y="18" width="7" height="38" fill="#ffce6b" transform="rotate(-8 43 36)" />
    <rect x="49" y="14" width="7" height="42" fill="#ffce6b" />
    <rect x="58" y="18" width="7" height="38" fill="#ffce6b" transform="rotate(8 61 36)" />
  </svg>
);

const Switzerland: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="42" y="28" width="16" height="54" fill="#fff" />
    <rect x="23" y="47" width="54" height="16" fill="#fff" />
  </svg>
);

const France: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M42 96 L47 60 L38 60 L50 14 L62 60 L53 60 L58 96 Z" fill="#fff" />
    <path
      d="M40 76 L60 76 M43 60 L57 60"
      stroke={accentColor}
      strokeWidth="2.5"
    />
    <path
      d="M50 14 L38 60 M50 14 L62 60"
      stroke={accentColor}
      strokeWidth="1.6"
      opacity="0.5"
    />
    <rect x="34" y="94" width="32" height="5" fill="#fff" />
  </svg>
);

const Croatia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 20 L74 28 C74 52 66 78 50 92 C34 78 26 52 26 28 Z"
      fill="#fff"
    />
    <g fill={accentColor}>
      <rect x="34" y="30" width="10" height="10" />
      <rect x="54" y="30" width="10" height="10" />
      <rect x="44" y="40" width="10" height="10" />
      <rect x="34" y="50" width="10" height="10" />
      <rect x="54" y="50" width="10" height="10" />
      <rect x="44" y="60" width="10" height="10" />
      <rect x="34" y="70" width="10" height="10" />
      <rect x="54" y="70" width="10" height="10" />
    </g>
  </svg>
);

const Italy: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M20 92 V56 A30 30 0 0 1 80 56 V92 Z" fill="#fff" />
    <g fill={accentColor}>
      <rect x="30" y="60" width="8" height="32" />
      <rect x="46" y="56" width="8" height="36" />
      <rect x="62" y="60" width="8" height="32" />
    </g>
  </svg>
);

const Luxembourg: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="30" y="54" width="40" height="34" fill="#fff" />
    <rect x="22" y="34" width="14" height="54" fill="#fff" />
    <rect x="64" y="34" width="14" height="54" fill="#fff" />
    <path d="M22 34 V26 H26 V34 H30 V26 H34 V34" fill="#fff" />
    <path d="M64 34 V26 H68 V34 H72 V26 H76 V34" fill="#fff" />
    <rect x="45" y="68" width="10" height="20" fill={accentColor} />
  </svg>
);

const Albania: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 30 L58 42 L74 36 L62 48 L76 56 L60 56 L66 72 L52 62 L50 82 L48 62 L34 72 L40 56 L24 56 L38 48 L26 36 L42 42 Z"
      fill="#1a1714"
    />
    <circle cx="44" cy="40" r="3" fill="#DA291C" />
    <circle cx="56" cy="40" r="3" fill="#DA291C" />
  </svg>
);

const Russia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="30" y="70" width="40" height="20" fill="#fff" />
    <path d="M42 70 C42 56 46 46 50 40 C54 46 58 56 58 70 Z" fill="#fff" />
    <path d="M46 40 C46 34 50 28 50 28 C50 28 54 34 54 40 Z" fill="#ffce6b" />
    <path d="M22 82 C22 72 26 64 30 60 C34 64 38 72 38 82 Z" fill="#e9dcc2" />
    <path d="M62 82 C62 72 66 64 70 60 C74 64 78 72 78 82 Z" fill="#e9dcc2" />
  </svg>
);

const Argentina: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M35 48 C35 30 65 30 65 48 C65 66 58 78 50 78 C42 78 35 66 35 48 Z"
      fill="#fff"
    />
    <ellipse cx="50" cy="76" rx="14" ry="5" fill="#e3edf7" opacity="0.85" />
    <rect
      x="60"
      y="20"
      width="6"
      height="34"
      fill="#d8b46a"
      transform="rotate(20 63 37)"
    />
  </svg>
);

const Brazil: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="30" r="7" fill="#ffce6b" />
    <rect x="46" y="37" width="8" height="10" fill="#fff" />
    <path d="M50 47 L78 60 L68 96 L32 96 L22 60 Z" fill="#fff" />
    <rect x="20" y="60" width="60" height="9" fill="#ffce6b" />
  </svg>
);

const Colombia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M32 46 h32 v34 a16 15 0 0 1 -32 0 Z" fill="#fff" />
    <path d="M64 52 a13 11 0 0 1 0 22 h-5 v-22 Z" fill={accentColor} />
    <path d="M40 40 q5 -10 0 -18" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    <path d="M54 40 q5 -10 0 -18" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
  </svg>
);

const CapeVerde: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="38" cy="70" rx="16" ry="9" fill="#fff" />
    <ellipse cx="62" cy="76" rx="12" ry="7" fill="#fff" opacity="0.85" />
    <ellipse cx="78" cy="66" rx="9" ry="5" fill="#fff" opacity="0.7" />
    {Array.from({ length: 10 }).map((_, i) => {
      const angle = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const cx = 50 + Math.cos(angle) * 20;
      const cy = 38 + Math.sin(angle) * 20;
      return <circle key={i} cx={cx} cy={cy} r="3" fill="#fff" />;
    })}
    <circle cx="50" cy="38" r="3" fill={accentColor} />
  </svg>
);

const SouthAfrica: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 51, 102, 153, 204, 255, 306].map((deg) => (
      <ellipse
        key={deg}
        cx="50"
        cy="30"
        rx="9"
        ry="24"
        fill="#fff"
        opacity="0.9"
        transform={`rotate(${deg} 50 60)`}
      />
    ))}
    <circle cx="50" cy="60" r="13" fill={accentColor} />
  </svg>
);

const Thailand: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="50,18 58,36 42,36" fill="#fff" />
    <polygon points="38,36 62,36 68,54 32,54" fill="#fff" opacity="0.92" />
    <polygon points="26,54 74,54 82,96 18,96" fill="#fff" opacity="0.85" />
    <rect x="46" y="10" width="8" height="10" fill="#fff" />
  </svg>
);

const Vietnam: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="65" rx="10" ry="24" fill="#fff" />
    <ellipse cx="50" cy="65" rx="10" ry="24" fill="#fff" transform="rotate(60 50 65)" />
    <ellipse cx="50" cy="65" rx="10" ry="24" fill="#fff" transform="rotate(120 50 65)" />
    <ellipse cx="50" cy="65" rx="10" ry="24" fill="#fff" transform="rotate(180 50 65)" />
    <ellipse cx="50" cy="65" rx="10" ry="24" fill="#fff" transform="rotate(240 50 65)" />
    <ellipse cx="50" cy="65" rx="10" ry="24" fill="#fff" transform="rotate(300 50 65)" />
    <circle cx="50" cy="65" r="10" fill={accentColor} />
  </svg>
);

const Australia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 24 C58 24 60 34 56 40 C64 42 70 50 66 58 C74 62 74 72 66 76 C68 84 62 90 54 88 C52 96 44 96 42 88 C34 90 28 84 30 76 C22 72 22 62 30 58 C26 50 32 42 40 40 C36 34 42 24 50 24 Z"
      fill={accentColor}
    />
    {[
      [50, 32],
      [66, 50],
      [58, 78],
      [38, 78],
      [30, 50],
    ].map(([cx, cy], i) => (
      <path
        key={i}
        d="M0 -5 L1.5 -1.5 L5 -1.5 L2 1 L3 5 L0 2.5 L-3 5 L-2 1 L-5 -1.5 L-1.5 -1.5 Z"
        fill="#fff"
        transform={`translate(${cx} ${cy})`}
      />
    ))}
  </svg>
);

const NewZealand: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 20 C54 40 54 55 50 70 C58 60 66 56 76 56 C64 62 56 70 52 80 C62 80 70 84 78 92 C64 90 54 92 46 98 C48 82 44 68 34 58 C44 60 50 56 52 46 C46 52 38 52 30 48 C40 44 46 36 46 24 C48 22 49 21 50 20 Z"
      fill="#fff"
    />
  </svg>
);

const Chile: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M42 20 h16 v30 a8 8 0 0 1 -16 0 Z" fill="#fff" />
    <rect x="40" y="34" width="6" height="6" fill="#fff" />
    <rect x="54" y="34" width="6" height="6" fill="#fff" />
    <path d="M28 96 q22 -34 44 0 Z" fill="#fff" />
  </svg>
);

const Uruguay: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <path
        key={deg}
        d="M50 26 L54 38 L50 50 L46 38 Z"
        fill="#fff"
        transform={`rotate(${deg} 50 55)`}
      />
    ))}
    <circle cx="50" cy="55" r="16" fill="#fff" />
    <circle cx="44" cy="51" r="2.4" fill={accentColor} />
    <circle cx="56" cy="51" r="2.4" fill={accentColor} />
    <path d="M43 61 q7 6 14 0" fill="none" stroke={accentColor} strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

const Uganda: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="52" cy="62" rx="16" ry="20" fill="#fff" />
    <path d="M40 48 C34 40 34 30 40 24" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    <circle cx="40" cy="22" r="6" fill={accentColor} />
    <path d="M34 22 h-10" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <path d="M60 55 l16 -6 M60 62 l18 2 M60 68 l16 8" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
    <rect x="48" y="80" width="4" height="16" fill="#fff" />
    <rect x="56" y="80" width="4" height="16" fill="#fff" />
  </svg>
);

const Zimbabwe: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="46" y="60" width="8" height="30" fill="#fff" />
    <ellipse cx="50" cy="48" rx="20" ry="15" fill="#fff" />
    <polygon points="68,44 84,40 68,52" fill="#fff" />
    <circle cx="58" cy="42" r="3" fill={accentColor} />
    <rect x="34" y="94" width="32" height="6" fill="#fff" />
  </svg>
);

const China: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="18" y="70" width="64" height="10" fill="#fff" />
    {[18, 30, 42, 54, 66, 78].map((x) => (
      <rect key={x} x={x} y="58" width="10" height="12" fill="#fff" />
    ))}
    <rect x="42" y="40" width="16" height="30" fill="#fff" />
    <polygon points="34,40 66,40 50,26" fill="#fff" />
    <circle cx="50" cy="20" r="4" fill={accentColor} />
  </svg>
);

const Iran: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 22 L58 42 L50 62 L42 42 Z" fill="#fff" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <path
        key={deg}
        d="M50 42 L54 48 L50 54 L46 48 Z"
        fill="#fff"
        opacity="0.85"
        transform={`rotate(${deg} 50 65)`}
      />
    ))}
    <circle cx="50" cy="65" r="8" fill={accentColor} />
    <circle cx="50" cy="65" r="14" fill="none" stroke="#fff" strokeWidth="3" />
  </svg>
);

const Palestine: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 30 C40 45 30 55 30 68 C30 80 39 88 50 88 C61 88 70 80 70 68 C70 55 60 45 50 30 Z" fill="#fff" />
    <path d="M50 45 C44 55 38 62 38 70 C38 78 43 83 50 83" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const PapuaNewGuinea: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="46" cy="55" rx="10" ry="14" fill="#fff" />
    <path d="M56 50 C72 40 84 44 86 52 C74 54 64 58 56 62 Z" fill="#fff" />
    <path d="M56 58 C70 64 78 76 76 86 C64 82 56 70 54 60 Z" fill="#fff" />
    <circle cx="42" cy="50" r="2.4" fill={accentColor} />
    <path d="M36 55 q-8 2 -12 -2" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Peru: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 70 L45 42 L58 62 L68 46 L82 70 Z" fill="#fff" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <rect
        key={deg}
        x="47"
        y="14"
        width="6"
        height="14"
        rx="2"
        fill="#fff"
        opacity="0.85"
        transform={`rotate(${deg} 50 34)`}
      />
    ))}
    <circle cx="50" cy="34" r="10" fill={accentColor} />
    <circle cx="50" cy="34" r="14" fill="none" stroke="#fff" strokeWidth="3" />
  </svg>
);

const Bolivia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M22 72 L38 46 L48 60 L62 38 L78 72 Z" fill="#fff" />
    <path d="M22 78 h56 v8 h-56 Z" fill="#fff" opacity="0.85" />
    <circle cx="60" cy="30" r="9" fill={accentColor} />
    <circle cx="60" cy="30" r="13" fill="none" stroke="#fff" strokeWidth="3" />
  </svg>
);

const Germany: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 24 C40 30 36 42 40 54 C34 56 30 62 32 70 C40 66 44 60 46 54 C44 64 46 76 54 86 C58 76 56 64 54 54 C56 60 60 66 68 70 C70 62 66 56 60 54 C64 42 60 30 50 24 Z" fill="#fff" />
    <circle cx="50" cy="52" r="5" fill={accentColor} />
  </svg>
);

const Venezuela: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 72, 144, 216, 288].map((deg) => (
      <path
        key={deg}
        d="M50 22 L54 40 L50 48 L46 40 Z"
        fill="#fff"
        transform={`rotate(${deg} 50 55)`}
      />
    ))}
    <circle cx="50" cy="55" r="9" fill={accentColor} />
    <circle cx="50" cy="55" r="13" fill="none" stroke="#fff" strokeWidth="3" />
  </svg>
);

const Kenya: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 26 L64 52 L50 44 L36 52 Z" fill="#fff" />
    <path d="M36 52 L64 52 L58 84 L42 84 Z" fill="#fff" />
    <path d="M50 60 L50 78" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="52" r="4" fill={accentColor} />
  </svg>
);

const Indonesia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 20 C62 40 70 50 70 66 C70 80 61 90 50 90 C39 90 30 80 30 66 C30 50 38 40 50 20 Z" fill="#fff" />
    <path d="M50 38 C57 50 62 58 62 68 C62 76 57 82 50 82 C43 82 38 76 38 68 C38 58 43 50 50 38 Z" fill={accentColor} />
  </svg>
);

const Ecuador: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <rect
        key={deg}
        x="47"
        y="18"
        width="6"
        height="13"
        rx="2"
        fill="#fff"
        opacity="0.85"
        transform={`rotate(${deg} 50 55)`}
      />
    ))}
    <circle cx="50" cy="55" r="11" fill={accentColor} />
    <circle cx="50" cy="55" r="15" fill="none" stroke="#fff" strokeWidth="3" />
    <line x1="20" y1="82" x2="80" y2="82" stroke="#fff" strokeWidth="3" strokeDasharray="6 5" />
  </svg>
);

const Nepal: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M28 80 L45 40 L58 65 L70 30 L84 80 Z" fill="#fff" />
    <circle cx="70" cy="26" r="6" fill={accentColor} />
    <path d="M40 32 a8 8 0 1 0 10 -10 a10 10 0 1 1 -10 10 Z" fill="#fff" />
  </svg>
);

const Paraguay: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="55" r="30" fill="none" stroke="#fff" strokeWidth="3" />
    {Array.from({ length: 5 }, (_, i) => {
      const angle = (i * 144 - 90) * (Math.PI / 180);
      const x = 50 + 16 * Math.cos(angle);
      const y = 55 + 16 * Math.sin(angle);
      return <circle key={i} cx={x} cy={y} r="4" fill="#fff" />;
    })}
    <circle cx="50" cy="55" r="6" fill={accentColor} />
  </svg>
);

const NorthKorea: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 24 L58 46 L82 46 L62 60 L70 82 L50 68 L30 82 L38 60 L18 46 L42 46 Z"
      fill="#fff"
    />
    <circle cx="50" cy="53" r="10" fill={accentColor} />
  </svg>
);

const Turkmenistan: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M28 78 Q30 50 48 42 Q68 34 76 48 L64 52 Q58 44 48 50 Q38 56 36 78 Z"
      fill="#fff"
    />
    <path d="M48 42 L62 22 L68 30 L54 48 Z" fill="#fff" />
    <circle cx="60" cy="27" r="2.6" fill={accentColor} />
  </svg>
);

const Laos: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 14 L54 34 L46 34 Z" fill="#fff" />
    <rect x="47" y="34" width="6" height="10" fill="#fff" />
    <path d="M38 44 L62 44 L57 62 L43 62 Z" fill="#fff" />
    <path d="M32 62 L68 62 L61 84 L39 84 Z" fill="#fff" />
    <rect x="28" y="84" width="44" height="8" fill="#fff" />
    <circle cx="50" cy="20" r="2.4" fill={accentColor} />
  </svg>
);

const Botswana: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="58" cy="56" rx="24" ry="17" fill="#fff" />
    <path d="M34 40 C18 38 10 52 18 64 C26 60 34 50 34 40 Z" fill="#fff" />
    <path d="M26 52 C16 58 14 72 22 82 C27 78 28 68 26 52 Z" fill="#fff" />
    <circle cx="28" cy="46" r="2.2" fill={accentColor} />
    <rect x="42" y="70" width="7" height="18" fill="#fff" />
    <rect x="56" y="72" width="7" height="18" fill="#fff" />
    <rect x="68" y="70" width="7" height="18" fill="#fff" />
  </svg>
);

const Morocco: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="34" y="39" width="32" height="32" fill="#fff" />
    <rect x="34" y="39" width="32" height="32" fill="#fff" transform="rotate(45 50 55)" />
    <circle cx="50" cy="55" r="6" fill={accentColor} />
  </svg>
);

const Egypt: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="32" r="9" fill={accentColor} />
    <path d="M30 86 L50 40 L70 86 Z" fill="#fff" />
    <path d="M40 86 L50 58 L60 86 Z" fill={accentColor} opacity="0.4" />
  </svg>
);

const Algeria: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="52" cy="55" r="24" fill="#fff" />
    <circle cx="61" cy="51" r="20" fill={accentColor} />
    <path d="M68 46 L71 54 L80 54 L73 59 L76 68 L68 62 L60 68 L63 59 L56 54 L65 54 Z" fill="#fff" />
  </svg>
);

export const emblems: Record<string, EmblemComponent> = {
  netherlands: Netherlands,
  belgium: Belgium,
  switzerland: Switzerland,
  france: France,
  croatia: Croatia,
  italy: Italy,
  luxembourg: Luxembourg,
  albania: Albania,
  russia: Russia,
  vietnam: Vietnam,
  argentina: Argentina,
  brazil: Brazil,
  colombia: Colombia,
  "cape-verde": CapeVerde,
  "south-africa": SouthAfrica,
  thailand: Thailand,
  australia: Australia,
  "new-zealand": NewZealand,
  chile: Chile,
  uruguay: Uruguay,
  uganda: Uganda,
  zimbabwe: Zimbabwe,
  china: China,
  iran: Iran,
  palestine: Palestine,
  "papua-new-guinea": PapuaNewGuinea,
  peru: Peru,
  bolivia: Bolivia,
  germany: Germany,
  venezuela: Venezuela,
  kenya: Kenya,
  indonesia: Indonesia,
  ecuador: Ecuador,
  nepal: Nepal,
  paraguay: Paraguay,
  "north-korea": NorthKorea,
  turkmenistan: Turkmenistan,
  laos: Laos,
  botswana: Botswana,
  morocco: Morocco,
  egypt: Egypt,
  algeria: Algeria,
};

export function getEmblem(slug: string): EmblemComponent | null {
  return emblems[slug] ?? null;
}
