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
    <polygon points="38,50 62,50 50,98" fill="#fff" />
    <polygon points="38,50 62,50 59,44 41,44" fill="#c23b2e" />
    <rect x="40" y="18" width="7" height="38" fill="#ffce6b" transform="rotate(-8 43 36)" />
    <rect x="49" y="14" width="7" height="42" fill="#ffce6b" />
    <rect x="53" y="18" width="7" height="38" fill="#ffce6b" transform="rotate(8 57 36)" />
  </svg>
);

const Switzerland: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="44" y="30" width="16" height="54" rx="3" fill="#8E1A12" opacity="0.35" />
    <rect x="25" y="49" width="54" height="16" rx="3" fill="#8E1A12" opacity="0.35" />
    <rect x="42" y="28" width="16" height="54" rx="3" fill="#fff" />
    <rect x="23" y="47" width="54" height="16" rx="3" fill="#fff" />
  </svg>
);

const France: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 8 L54 42 L60 62 L82 96 L66 96 L58 78 L50 72 L42 78 L34 96 L18 96 L40 62 L46 42 Z" fill="#5C4A3A" />
    <rect x="40" y="41" width="20" height="3" fill="#3E3226" opacity="0.8" />
    <rect x="32" y="61" width="36" height="3" fill="#3E3226" opacity="0.8" />
    <line x1="50" y1="8" x2="50" y2="2" stroke="#5C4A3A" strokeWidth="2" />
    <circle cx="50" cy="8" r="2" fill="#F4C430" />
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
    <g transform="rotate(8 50 55)">
      <rect x="40" y="18" width="20" height="70" rx="4" fill="#EDE1C9" />
      <rect x="36" y="86" width="28" height="8" fill="#D9C9A3" />
      <rect x="40" y="28" width="20" height="3" fill={accentColor} opacity="0.8" />
      <rect x="40" y="42" width="20" height="3" fill={accentColor} opacity="0.8" />
      <rect x="40" y="56" width="20" height="3" fill={accentColor} opacity="0.8" />
      <rect x="40" y="70" width="20" height="3" fill={accentColor} opacity="0.8" />
    </g>
  </svg>
);

const Luxembourg: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="30" y="54" width="40" height="34" fill="#B8AFA0" />
    <rect x="22" y="34" width="14" height="54" fill="#A89F8F" />
    <rect x="64" y="34" width="14" height="54" fill="#A89F8F" />
    <path d="M22 34 V26 H26 V34 H30 V26 H34 V34" fill="#A89F8F" />
    <path d="M64 34 V26 H68 V34 H72 V26 H76 V34" fill="#A89F8F" />
    <rect x="45" y="68" width="10" height="20" fill={accentColor} />
    <line x1="29" y1="26" x2="29" y2="16" stroke="#6B5D4F" strokeWidth="1.5" />
    <path d="M29 16 L29 22 L37 19 Z" fill="#ED2939" />
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
    <rect x="16" y="70" width="14" height="20" fill="#fff" />
    <path d="M23 46 Q13 46 13 58 Q13 68 23 71 Q33 68 33 58 Q33 46 23 46 Z" fill="#4CAF50" />
    <path d="M23 38 L26 46 L20 46 Z" fill="#4CAF50" />

    <rect x="43" y="62" width="14" height="28" fill="#fff" />
    <path d="M50 30 Q36 30 36 46 Q36 58 50 62 Q64 58 64 46 Q64 30 50 30 Z" fill="#C1272D" />
    <path d="M50 20 L54 30 L46 30 Z" fill="#C1272D" />

    <rect x="70" y="70" width="14" height="20" fill="#fff" />
    <path d="M77 46 Q67 46 67 58 Q67 68 77 71 Q87 68 87 58 Q87 46 77 46 Z" fill="#E8912D" />
    <path d="M77 38 L80 46 L74 46 Z" fill="#E8912D" />
  </svg>
);

const Argentina: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M36 46 Q34 66 40 76 Q45 82 50 82 Q55 82 60 76 Q66 66 64 46 Z" fill="#8B5E34" />
    <path d="M40 50 Q38 64 43 73" fill="none" stroke="#6B4423" strokeWidth="2" opacity="0.5" />
    <ellipse cx="50" cy="46" rx="14" ry="5" fill="#4A7C3C" />
    <rect x="54" y="22" width="6" height="30" rx="3" fill="#B0B8BF" transform="rotate(18 57 37)" />
    <circle cx="59" cy="23" r="4" fill="#B0B8BF" />
  </svg>
);

const Brazil: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 38 L70 38 L63 90 L37 90 Z" fill="none" stroke="#fff" strokeWidth="3" />
    <path d="M33 44 L67 44 L61 86 L39 86 Z" fill="#E8B84B" opacity="0.85" />
    <rect x="40" y="52" width="9" height="9" fill="#fff" opacity="0.9" transform="rotate(12 44 56)" />
    <rect x="52" y="64" width="9" height="9" fill="#fff" opacity="0.9" transform="rotate(-10 56 68)" />
    <path d="M60 30 Q70 26 68 16 Q78 20 74 32 Q68 36 60 30 Z" fill="#4CAF50" />
    <circle cx="66" cy="24" r="2.5" fill="#fff" opacity="0.6" />
  </svg>
);

const Colombia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="46" cy="82" rx="24" ry="6" fill="#D9B382" />
    <path d="M30 48 h32 v28 a16 15 0 0 1 -32 0 Z" fill="#F5EDE0" />
    <ellipse cx="46" cy="48" rx="16" ry="4.5" fill="#4A2C17" />
    <path d="M62 54 a12 10 0 0 1 0 20" fill="none" stroke="#4A2C17" strokeWidth="4" strokeLinecap="round" />
    <path d="M38 40 Q40 32 38 24 M48 40 Q50 32 48 24" stroke="#B0A08C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.75" />
  </svg>
);

const CapeVerde: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M14 86 Q28 78 42 86 Q56 94 70 86 Q84 80 86 86" fill="none" stroke="#BFE3F0" strokeWidth="3" opacity="0.85" />
    <circle cx="30" cy="60" r="8" fill="#B5651D" />
    <circle cx="54" cy="46" r="12" fill="#C97C3D" />
    <circle cx="74" cy="62" r="6" fill="#B5651D" />
    <circle cx="54" cy="46" r="3" fill="#F4C430" />
    <circle cx="30" cy="60" r="1.6" fill="#F4C430" opacity="0.85" />
    <circle cx="74" cy="62" r="1.6" fill="#F4C430" opacity="0.85" />
  </svg>
);

const SouthAfrica: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <path
        key={deg}
        d="M50 55 Q42 38 50 16 Q58 38 50 55 Z"
        fill={i % 2 === 0 ? "#C81D5B" : "#E85D75"}
        transform={`rotate(${deg} 50 55)`}
      />
    ))}
    <circle cx="50" cy="55" r="12" fill="#F4E3C1" />
    <circle cx="50" cy="55" r="7" fill="#8B5E2A" />
  </svg>
);

const Thailand: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="46" y="10" width="8" height="10" fill="#F4C430" />
    <polygon points="50,18 58,36 42,36" fill="#F4C430" />
    <polygon points="38,36 62,36 68,54 32,54" fill="#D4AF37" stroke="#FFF8E1" strokeWidth="1.5" />
    <polygon points="26,54 74,54 82,96 18,96" fill="#B8860B" stroke="#FFF8E1" strokeWidth="1.5" />
    <line x1="32" y1="54" x2="68" y2="54" stroke="#FFF8E1" strokeWidth="2" opacity="0.9" />
  </svg>
);

const Vietnam: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M18 76 Q50 28 82 76 Z" fill="#EBDCAE" />
    <ellipse cx="50" cy="78" rx="34" ry="7" fill="#CBAE72" />
    <path d="M32 60 Q50 54 68 60" fill="none" stroke="#A88D54" strokeWidth="1.5" opacity="0.6" />
    <path d="M26 70 Q50 63 74 70" fill="none" stroke="#A88D54" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

const Australia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 92 L50 66" stroke="#B85C38" strokeWidth="5" strokeLinecap="round" />
    <path
      d="M50 66 Q30 60 22 40 M50 66 Q38 54 34 30 M50 66 Q50 50 50 26 M50 66 Q62 54 66 30 M50 66 Q70 60 78 40"
      fill="none"
      stroke="#E8622C"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M50 66 Q34 58 28 44 M50 66 Q44 52 44 34 M50 66 Q56 52 56 34 M50 66 Q66 58 72 44"
      fill="none"
      stroke="#F2926B"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

const NewZealand: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="44" cy="58" rx="18" ry="14" fill="#3A6B4A" />
    <path d="M60 54 L80 49 L63 61 Z" fill="#C8D9C0" />
    <circle cx="52" cy="50" r="2" fill="#E8E8E8" />
    <line x1="38" y1="72" x2="34" y2="82" stroke="#5C4A3A" strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="72" x2="52" y2="82" stroke="#5C4A3A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Chile: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M38 20 Q38 14 50 14 Q62 14 62 20 L62 70 Q62 84 50 88 Q38 84 38 70 Z" fill="#fff" />
    <rect x="36" y="38" width="28" height="6" fill={accentColor} />
    <path d="M46 44 L46 66 Q46 70 50 70 Q54 70 54 66 L54 44" fill="none" stroke={accentColor} strokeWidth="2.5" />
    <rect x="40" y="52" width="7" height="3" fill={accentColor} />
    <rect x="53" y="52" width="7" height="3" fill={accentColor} />
  </svg>
);

const Uruguay: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <path
        key={deg}
        d="M50 24 L56 40 L50 48 L44 40 Z"
        fill="#F4C430"
        transform={`rotate(${deg} 50 55)`}
      />
    ))}
    <circle cx="50" cy="55" r="18" fill="#F4C430" />
  </svg>
);

const Uganda: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="52" cy="60" rx="18" ry="20" fill="#6E7B7C" />
    <path d="M42 44 Q34 34 36 22" fill="none" stroke="#6E7B7C" strokeWidth="6" strokeLinecap="round" />
    <circle cx="36" cy="20" r="7" fill="#3A3A3A" />
    <circle cx="33" cy="19" r="3" fill="#fff" />
    <path d="M30 15 Q36 7 43 15 Q36 12 30 15 Z" fill="#E8B923" />
    <path d="M36 26 L33 32 L38 32 Z" fill="#C1272D" />
    <circle cx="38" cy="19" r="1.3" fill="#1A1A1A" />
    <path d="M62 52 L80 46 M62 60 L82 60 M62 68 L80 74" stroke="#9AA5A6" strokeWidth="4" strokeLinecap="round" fill="none" />
    <rect x="46" y="80" width="4" height="16" fill="#1A1A1A" />
    <rect x="56" y="80" width="4" height="16" fill="#1A1A1A" />
  </svg>
);

const Zimbabwe: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="46" y="55" width="8" height="32" fill="#4A5D53" />
    <ellipse cx="50" cy="46" rx="20" ry="15" fill="#5C7266" />
    <polygon points="68,42 86,38 68,50" fill="#5C7266" />
    <circle cx="58" cy="40" r="3" fill="#C1272D" />
    <rect x="32" y="87" width="36" height="7" fill="#3A4A42" />
  </svg>
);

const China: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M35 41 L39 51 L49 51 L41 58 L44 68 L35 62 L26 68 L29 58 L21 51 L31 51 Z"
      fill="#FFDE00"
    />
    {[
      [60, 38],
      [70, 48],
      [70, 64],
      [60, 74],
    ].map(([cx, cy]) => (
      <path
        key={`${cx}-${cy}`}
        d={`M${cx} ${cy - 4} L${cx + 1.2} ${cy - 1.2} L${cx + 4} ${cy} L${cx + 1.2} ${cy + 1.2} L${cx} ${cy + 4} L${cx - 1.2} ${cy + 1.2} L${cx - 4} ${cy} L${cx - 1.2} ${cy - 1.2} Z`}
        fill="#FFDE00"
      />
    ))}
  </svg>
);

const Iran: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 70 Q30 40 50 30 Q70 40 70 70 Z" fill="#178A8A" />
    <rect x="42" y="70" width="16" height="20" fill="#F0E6D2" />
    <path d="M46 90 L46 78 Q46 72 50 72 Q54 72 54 78 L54 90 Z" fill="#0F5C5C" />
    <line x1="50" y1="30" x2="50" y2="18" stroke="#D4AF37" strokeWidth="3" />
    <circle cx="50" cy="16" r="3" fill="#D4AF37" />
    <rect x="20" y="42" width="6" height="48" fill="#178A8A" opacity="0.9" />
    <path d="M20 42 Q23 32 26 42 Z" fill="#D4AF37" />
    <rect x="74" y="42" width="6" height="48" fill="#178A8A" opacity="0.9" />
    <path d="M74 42 Q77 32 80 42 Z" fill="#D4AF37" />
  </svg>
);

const Palestine: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 92 Q46 60 50 28" fill="none" stroke="#6B4423" strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="40" cy="42" rx="10" ry="5.5" fill="#4A7C3C" transform="rotate(-35 40 42)" />
    <ellipse cx="62" cy="38" rx="10" ry="5.5" fill="#3D6B31" transform="rotate(35 62 38)" />
    <ellipse cx="38" cy="62" rx="10" ry="5.5" fill="#3D6B31" transform="rotate(-25 38 62)" />
    <ellipse cx="64" cy="58" rx="10" ry="5.5" fill="#4A7C3C" transform="rotate(25 64 58)" />
    <circle cx="50" cy="24" r="6" fill="#3B3B1F" />
    <circle cx="59" cy="32" r="6" fill="#3B3B1F" />
    <circle cx="50" cy="22" r="1.8" fill="#8B9B4A" opacity="0.7" />
    <circle cx="59" cy="30" r="1.8" fill="#8B9B4A" opacity="0.7" />
  </svg>
);

const PapuaNewGuinea: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="42" cy="55" rx="11" ry="15" fill="#4A2C1E" />
    <path d="M53 48 Q75 36 88 44 Q74 50 60 56 Z" fill="#F4A623" />
    <path d="M53 58 Q73 66 82 82 Q66 76 56 62 Z" fill="#E8622C" />
    <path d="M36 44 Q40 40 45 42" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
    <circle cx="38" cy="49" r="2.4" fill="#1A1A1A" />
    <path d="M31 55 q-9 2 -13 -3" fill="none" stroke="#4A2C1E" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Peru: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M16 88 L30 58 L38 70 L50 40 L62 68 L70 56 L86 88 Z" fill="#fff" />
    <path d="M28 88 L34 74 L40 88 Z" fill={accentColor} opacity="0.5" />
    <path d="M58 88 L64 76 L70 88 Z" fill={accentColor} opacity="0.5" />
  </svg>
);

const Bolivia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="62" rx="26" ry="7" fill="#3B2A1E" />
    <path d="M32 62 Q32 32 50 32 Q68 32 68 62 Z" fill="#3B2A1E" />
    <rect x="32" y="56" width="36" height="6" fill="#8B1E3F" />
  </svg>
);

const Germany: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="22" y="42" width="7" height="48" fill="#FFCE00" />
    <rect x="35" y="42" width="7" height="48" fill="#FFCE00" />
    <rect x="47" y="42" width="7" height="48" fill="#FFCE00" />
    <rect x="59" y="42" width="7" height="48" fill="#FFCE00" />
    <rect x="71" y="42" width="7" height="48" fill="#FFCE00" />
    <rect x="18" y="32" width="64" height="10" fill="#DD0000" />
    <path d="M40 32 L50 18 L60 32 Z" fill="#FFCE00" />
    <rect x="46" y="24" width="8" height="8" fill="#DD0000" />
  </svg>
);

const Venezuela: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M25 54 L35 20 L65 20 L75 54 Z" fill="#7A6350" />
    <path d="M46 54 L44 90 M54 54 L56 92" stroke="#fff" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" fill="none" />
    <path d="M50 54 L50 96" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const Kenya: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <line x1="24" y1="90" x2="72" y2="20" stroke="#7A5230" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M72 20 L79 27 L68 32 Z" fill="#B0B8BF" />
    <line x1="76" y1="90" x2="28" y2="20" stroke="#7A5230" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M28 20 L21 27 L32 32 Z" fill="#B0B8BF" />
    <path d="M38 32 L62 32 Q67 34 65 58 Q63 82 50 92 Q37 82 35 58 Q33 34 38 32 Z" fill="#E8DCC0" />
    <rect x="33" y="52" width="34" height="7" fill="#C1272D" />
    <rect x="47" y="36" width="6" height="52" fill="#1A1A1A" />
  </svg>
);

const Indonesia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M18 90 L50 28 L82 90 Z" fill="#4A3B33" />
    <path d="M35 90 L50 55 L65 90 Z" fill="#2E241E" opacity="0.7" />
    <path d="M44 50 L50 34 L56 50 L50 46 Z" fill="#E8622C" />
    <path d="M44 28 Q48 18 52 28 Q56 20 60 26" fill="none" stroke="#D8D8D8" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
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

const Nepal: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M28 80 L45 40 L58 65 L70 30 L84 80 Z" fill="#F2F6FA" />
    <path d="M30 74 L45 48 L54 62" fill="none" stroke="#AFC9DE" strokeWidth="2" opacity="0.55" />
    <line x1="70" y1="16" x2="70" y2="12" stroke="#F4C430" strokeWidth="2" strokeLinecap="round" />
    <line x1="70" y1="36" x2="70" y2="40" stroke="#F4C430" strokeWidth="2" strokeLinecap="round" />
    <line x1="60" y1="26" x2="56" y2="26" stroke="#F4C430" strokeWidth="2" strokeLinecap="round" />
    <line x1="80" y1="26" x2="84" y2="26" stroke="#F4C430" strokeWidth="2" strokeLinecap="round" />
    <circle cx="70" cy="26" r="6" fill="#F4C430" />
    <path d="M40 32 a8 8 0 1 0 10 -10 a10 10 0 1 1 -10 10 Z" fill="#fff" />
  </svg>
);

const Paraguay: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 20 Q18 55 32 92" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
    <path d="M30 20 L68 26 L38 92" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="38" y1="34" x2="35" y2="80" stroke="#fff" strokeWidth="2.5" opacity="0.55" />
    <line x1="46" y1="36" x2="38" y2="78" stroke="#fff" strokeWidth="2.5" opacity="0.55" />
    <line x1="54" y1="38" x2="41" y2="76" stroke="#fff" strokeWidth="2.5" opacity="0.55" />
  </svg>
);

const NorthKorea: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="55" r="32" fill="none" stroke="#D4AF37" strokeWidth="2.5" opacity="0.7" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <line
        key={deg}
        x1="50"
        y1="26"
        x2="50"
        y2="18"
        stroke="#D4AF37"
        strokeWidth="2.5"
        opacity="0.7"
        transform={`rotate(${deg} 50 55)`}
      />
    ))}
    <path
      d="M50 26 L58 46 L80 46 L62 58 L69 80 L50 67 L31 80 L38 58 L20 46 L42 46 Z"
      fill="#C1272D"
    />
  </svg>
);

const Turkmenistan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="18" y="56" width="46" height="20" rx="8" fill="#C9A227" />
    <path
      d="M54 56 L58 36 Q59 30 65 30 L76 30 Q82 30 82 38 L82 46 Q82 52 76 52 L58 52 Z"
      fill="#C9A227"
    />
    <path d="M65 30 L63 20 L69 22 Z" fill="#8B6B1F" />
    <path d="M74 30 L74 20 L80 24 Z" fill="#8B6B1F" />
    <circle cx="74" cy="40" r="2.4" fill="#2A1F0D" />
    <line x1="26" y1="76" x2="24" y2="98" stroke="#8B6B1F" strokeWidth="5" strokeLinecap="round" />
    <line x1="40" y1="76" x2="40" y2="98" stroke="#8B6B1F" strokeWidth="5" strokeLinecap="round" />
    <line x1="54" y1="76" x2="56" y2="98" stroke="#8B6B1F" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const Laos: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 14 L54 34 L46 34 Z" fill="#F4C430" />
    <rect x="47" y="34" width="6" height="10" fill="#F4C430" />
    <path d="M38 44 L62 44 L57 62 L43 62 Z" fill="#D4A017" />
    <path d="M32 62 L68 62 L61 84 L39 84 Z" fill="#B8860B" />
    <rect x="28" y="84" width="44" height="8" fill="#8B6B1F" />
    <circle cx="50" cy="18" r="2.2" fill="#C1272D" />
  </svg>
);

const Botswana: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="58" cy="64" rx="26" ry="18" fill="#8B8B8B" />
    <circle cx="30" cy="52" r="13" fill="#8B8B8B" />
    <path d="M20 42 Q6 44 8 58 Q10 68 22 66 Q16 56 20 42 Z" fill="#787878" />
    <path d="M22 58 Q16 68 18 82 Q20 92 26 90 Q22 76 24 62 Z" fill="#8B8B8B" />
    <path d="M23 60 L15 68" stroke="#F5F0E6" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="44" y="80" width="7" height="18" fill="#6E6E6E" />
    <rect x="58" y="82" width="7" height="18" fill="#6E6E6E" />
    <rect x="72" y="78" width="7" height="18" fill="#6E6E6E" />
  </svg>
);

const Morocco: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 24 L58 46 L82 46 L62 60 L70 82 L50 68 L30 82 L38 60 L18 46 L42 46 Z"
      fill="none"
      stroke="#0F8A3C"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);

const Egypt: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="32" r="9" fill="#E8622C" />
    <path d="M30 86 L50 40 L70 86 Z" fill="#E8D3A0" />
    <path d="M40 86 L50 58 L60 86 Z" fill="#C9A876" opacity="0.85" />
  </svg>
);

const Algeria: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="52" cy="55" r="24" fill="#fff" />
    <circle cx="61" cy="51" r="20" fill={accentColor} />
    <path d="M68 46 L71 54 L80 54 L73 59 L76 68 L68 62 L60 68 L63 59 L56 54 L65 54 Z" fill="#fff" />
  </svg>
);

const Tuvalu: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="88" rx="30" ry="6" fill="#D9C9A3" />
    <rect x="47" y="40" width="6" height="48" fill="#8B6B4A" />
    <path d="M50 42 Q28 30 16 44 Q34 42 50 48 Z" fill="#F5F0E6" />
    <path d="M50 42 Q72 30 84 44 Q66 42 50 48 Z" fill="#F5F0E6" />
    <circle cx="50" cy="42" r="5" fill="#8B5A2B" />
    <circle cx="30" cy="36" r="1.5" fill="#F4C430" opacity="0.85" />
    <circle cx="70" cy="36" r="1.5" fill="#F4C430" opacity="0.85" />
  </svg>
);

const Fiji: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M18 52 Q18 70 50 70 Q82 70 82 52 L74 58 Q74 64 50 64 Q26 64 26 58 Z" fill="#8B5A2B" />
    <ellipse cx="50" cy="56" rx="20" ry="6" fill="#5A3A1A" opacity="0.6" />
    <rect x="24" y="70" width="6" height="16" fill="#8B5A2B" transform="rotate(20 27 78)" />
    <rect x="70" y="70" width="6" height="16" fill="#8B5A2B" transform="rotate(-20 73 78)" />
    <rect x="47" y="72" width="6" height="18" fill="#8B5A2B" />
  </svg>
);

const Micronesia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M25 40 L75 70 M25 70 L75 40 M50 25 L50 90" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="50" cy="55" r="5" fill="#F4C430" />
    <circle cx="30" cy="45" r="2.6" fill="#fff" />
    <circle cx="70" cy="65" r="2.6" fill="#fff" />
  </svg>
);

const Nauru: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M22 85 L30 52 L37 68 L44 42 L50 66 L57 38 L64 66 L71 48 L78 85 Z" fill="#E8DCC0" />
    <circle cx="50" cy="28" r="6" fill="#F4C430" />
  </svg>
);

const Tonga: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="30" y="30" width="40" height="40" rx="2" fill="#fff" />
    <rect x="30" y="30" width="40" height="40" rx="2" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.35" />
    <rect x="44" y="36" width="12" height="28" rx="2" fill={accentColor} />
    <rect x="36" y="44" width="28" height="12" rx="2" fill={accentColor} />
  </svg>
);

const Vanuatu: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M32 78 Q18 50 40 28 Q56 18 68 32" fill="none" stroke="#F0E6D2" strokeWidth="7" strokeLinecap="round" />
    <path
      d="M50 42 L50 78 M50 55 L40 47 M50 55 L60 47 M50 66 L42 60 M50 66 L58 60"
      stroke="#4CAF50"
      strokeWidth="2.8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Ethiopia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="55" rx="22" ry="30" fill="#fff" transform="rotate(-15 50 55)" />
    <path d="M50 28 Q56 55 50 82" fill="none" stroke={accentColor} strokeWidth="4" transform="rotate(-15 50 55)" />
  </svg>
);

const Kiribati: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 55 Q20 40 10 50 Q28 52 42 58 Q26 62 14 74 Q34 70 50 60 Q66 70 86 74 Q74 62 58 58 Q72 52 90 50 Q80 40 50 55 Z"
      fill="#1A1A1A"
    />
    <circle cx="50" cy="30" r="8" fill="#F4C430" />
  </svg>
);

const Cuba: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="20" y="48" width="66" height="14" rx="7" fill="#A0714A" transform="rotate(-18 50 55)" />
    <rect x="30" y="48" width="10" height="14" fill="#E8DCC0" transform="rotate(-18 50 55)" />
    <path d="M78 35 Q84 28 78 20 Q84 22 82 14" fill="none" stroke="#D8D0C0" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
  </svg>
);

const Belize: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="55" r="30" fill="#4DD0C4" />
    <circle cx="50" cy="55" r="30" fill="none" stroke="#2E9B8F" strokeWidth="3" />
    <circle cx="50" cy="55" r="20" fill="#0D3B66" />
  </svg>
);

const Curacao: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="10" y="80" width="80" height="20" fill="#2E6DA4" />
    <ellipse cx="22" cy="80" rx="9" ry="5" fill="#E8DCC0" />
    <ellipse cx="40" cy="78" rx="9" ry="5" fill="#E8DCC0" />
    <ellipse cx="58" cy="78" rx="9" ry="5" fill="#E8DCC0" />
    <ellipse cx="76" cy="80" rx="9" ry="5" fill="#E8DCC0" />
    <path d="M14 76 Q50 58 86 76" fill="none" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
    <circle cx="20" cy="68" r="3" fill="#D4A017" />
    <circle cx="80" cy="68" r="3" fill="#D4A017" />
  </svg>
);

const Panama: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="18" y="30" width="10" height="66" fill="#5A6B7A" />
    <rect x="72" y="30" width="10" height="66" fill="#5A6B7A" />
    <path d="M32 68 L68 68 L62 82 L38 82 Z" fill="#37474F" />
    <rect x="44" y="55" width="12" height="15" fill="#37474F" />
    <rect x="48" y="46" width="4" height="10" fill="#37474F" />
    <rect x="14" y="90" width="72" height="8" fill="#1565C0" opacity="0.75" />
  </svg>
);

const Haiti: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="40" cy="55" r="12" fill="none" stroke="#B0B8BF" strokeWidth="6" />
    <path d="M62 45 Q72 45 72 55 Q72 62 65 64" fill="none" stroke="#B0B8BF" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const TrinidadAndTobago: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M20 50 L24 78 L76 78 L80 50 Z" fill="#37474F" />
    <ellipse cx="50" cy="50" rx="30" ry="12" fill="#1A1A1A" />
    <circle cx="40" cy="46" r="5" fill="none" stroke="#C1272D" strokeWidth="2" />
    <circle cx="58" cy="48" r="7" fill="none" stroke="#4CAF50" strokeWidth="2" />
    <circle cx="50" cy="40" r="4" fill="none" stroke="#1565C0" strokeWidth="2" />
  </svg>
);

const Japan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 90 L30 40 Q50 30 70 40 Z" fill="#D4AF37" />
    <line x1="50" y1="90" x2="35" y2="45" stroke="#8B1A1A" strokeWidth="1.4" opacity="0.6" />
    <line x1="50" y1="90" x2="50" y2="35" stroke="#8B1A1A" strokeWidth="1.4" opacity="0.6" />
    <line x1="50" y1="90" x2="65" y2="45" stroke="#8B1A1A" strokeWidth="1.4" opacity="0.6" />
    <circle cx="50" cy="90" r="4" fill="#8B1A1A" />
  </svg>
);

const Myanmar: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M35 95 L35 75 Q35 55 50 45 Q65 55 65 75 L65 95 Z" fill="#E8912D" />
    <path d="M45 45 L50 25 L55 45 Z" fill="#F4C430" />
    <circle cx="50" cy="23" r="2.5" fill="#C1272D" />
    <ellipse cx="50" cy="75" rx="16" ry="4" fill="#A85E1E" opacity="0.7" />
    <path d="M35 95 L35 75 Q35 55 50 45 Q65 55 65 75 L65 95 Z" fill="none" stroke="#B8860B" strokeWidth="1.5" />
  </svg>
);

const Suriname: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="46" cy="66" rx="15" ry="19" fill="#1A1A1A" />
    <circle cx="42" cy="44" r="10" fill="#1A1A1A" />
    <path d="M48 40 Q76 36 80 46 Q76 52 48 50 Z" fill="#F4A623" />
    <path d="M74 44 Q80 45 80 47 Q76 48 74 47 Z" fill="#C1272D" />
    <ellipse cx="40" cy="54" rx="6" ry="8" fill="#fff" />
    <circle cx="38" cy="40" r="2" fill="#fff" />
    <circle cx="38.5" cy="40" r="1" fill="#000" />
    <rect x="42" y="84" width="4" height="10" fill="#8B5A2B" />
  </svg>
);

const Guyana: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="20,40 60,55 20,70" fill="#1A1A1A" />
    <polygon points="26,44 62,55 26,66" fill="#fff" />
    <polygon points="30,47 68,55 30,63" fill="#FFD700" />
    <polygon points="30,47 50,55 30,63" fill="#C1272D" opacity="0.85" />
  </svg>
);

const Austria: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 60 L30 76 L70 76 L70 60 L58 68 L50 54 L42 68 Z" fill="#D4AF37" />
    <rect x="30" y="76" width="40" height="6" fill="#B8901E" />
    <circle cx="50" cy="52" r="4" fill="#8B1A3A" />
    <circle cx="36" cy="64" r="2" fill="#1565C0" opacity="0.85" />
    <circle cx="64" cy="64" r="2" fill="#1565C0" opacity="0.85" />
  </svg>
);

const Spain: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="54" cy="56" rx="24" ry="14" fill="#1A1A1A" />
    <path d="M32 66 L36 84 L44 84 L42 66 Z" fill="#1A1A1A" />
    <path d="M64 66 L68 84 L76 84 L72 66 Z" fill="#1A1A1A" />
    <path d="M30 50 Q18 44 20 32 Q30 36 38 46 Z" fill="#1A1A1A" />
    <path d="M20 32 Q14 24 20 20 M26 30 Q28 20 36 22" stroke="#1A1A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M78 52 Q90 58 86 70 Q84 74 80 72" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="86" cy="71" r="3" fill="#1A1A1A" />
  </svg>
);

const CostaRica: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 70 Q42 74 44 94 Q46 80 50 76 Q54 80 56 94 Q58 74 50 70 Z" fill="#0F8A5F" />
    <ellipse cx="50" cy="52" rx="12" ry="16" fill="#0F8A5F" />
    <circle cx="50" cy="34" r="9" fill="#0F8A5F" />
    <path d="M40 32 L28 28 L39 37 Z" fill="#0F8A5F" />
    <ellipse cx="50" cy="56" rx="6" ry="9" fill="#C1272D" />
  </svg>
);

const Mexico: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="70" rx="34" ry="9" fill="#D4A017" />
    <ellipse cx="50" cy="70" rx="34" ry="9" fill="none" stroke="#8B5A2B" strokeWidth="2" />
    <path d="M32 70 Q32 42 50 34 Q68 42 68 70 Z" fill="#D4A017" />
    <path d="M35 58 Q50 62 65 58" fill="none" stroke="#C1272D" strokeWidth="3" />
  </svg>
);

const Greenland: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M26 52 L74 52 L82 74 L18 74 Z"
      fill="#3A7CA5"
      stroke="#EAF6FB"
      strokeWidth="1.5"
      opacity="0.9"
    />
    <path d="M40 30 L58 26 L72 50 L60 46 L50 68 L38 48 L26 52 Z" fill="#EAF6FB" />
  </svg>
);

const Canada: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 14 L59 30 L80 34 L61 46 L67 66 L50 53 L33 66 L39 46 L20 34 L41 30 Z"
      fill="#A0522D"
    />
    <rect x="47" y="66" width="6" height="20" fill="#7A3B1E" />
  </svg>
);

const UnitedStates: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 10 Q34 22 38 40 Q41 52 50 56 Q59 52 62 40 Q66 22 50 10 Z" fill="#F4A623" />
    <path d="M50 20 Q40 30 43 40" fill="none" stroke="#FFD966" strokeWidth="3" opacity="0.75" />
    <rect x="38" y="56" width="24" height="11" rx="3" fill="#8FBFA0" />
    <path d="M28 67 L72 67 L62 84 L38 84 Z" fill="#8FBFA0" />
    <rect x="38" y="84" width="24" height="16" fill="#6FA98A" />
  </svg>
);

const Jamaica: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M32 40 L68 40 L60 90 L40 90 Z" fill="#8B5A2B" />
    <ellipse cx="50" cy="40" rx="18" ry="7" fill="#E8DCC0" />
    <ellipse cx="50" cy="40" rx="18" ry="7" fill="none" stroke="#6B4423" strokeWidth="2" />
    <line x1="36" y1="48" x2="32" y2="80" stroke="#6B4423" strokeWidth="1.5" opacity="0.6" />
    <line x1="50" y1="48" x2="48" y2="86" stroke="#6B4423" strokeWidth="1.5" opacity="0.6" />
    <line x1="64" y1="48" x2="68" y2="80" stroke="#6B4423" strokeWidth="1.5" opacity="0.6" />
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
  tuvalu: Tuvalu,
  fiji: Fiji,
  micronesia: Micronesia,
  nauru: Nauru,
  tonga: Tonga,
  vanuatu: Vanuatu,
  ethiopia: Ethiopia,
  kiribati: Kiribati,
  jamaica: Jamaica,
  cuba: Cuba,
  canada: Canada,
  "united-states": UnitedStates,
  mexico: Mexico,
  greenland: Greenland,
  "costa-rica": CostaRica,
  panama: Panama,
  belize: Belize,
  curacao: Curacao,
  suriname: Suriname,
  guyana: Guyana,
  austria: Austria,
  spain: Spain,
  haiti: Haiti,
  "trinidad-and-tobago": TrinidadAndTobago,
  japan: Japan,
  myanmar: Myanmar,
};

export function getEmblem(slug: string): EmblemComponent | null {
  return emblems[slug] ?? null;
}
