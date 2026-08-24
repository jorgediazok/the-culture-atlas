import type { ComponentType } from "react";
import { shade } from "./palette";

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
  <svg viewBox="0 -6 100 110" width="100%" height="100%">
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
    <g fill={shade(accentColor, 0.4)}>
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
      <rect x="40" y="28" width="20" height="3" fill={shade(accentColor, 0.4)} opacity="0.8" />
      <rect x="40" y="42" width="20" height="3" fill={shade(accentColor, 0.4)} opacity="0.8" />
      <rect x="40" y="56" width="20" height="3" fill={shade(accentColor, 0.4)} opacity="0.8" />
      <rect x="40" y="70" width="20" height="3" fill={shade(accentColor, 0.4)} opacity="0.8" />
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
    <rect x="45" y="68" width="10" height="20" fill={shade(accentColor, 0.4)} />
    <line x1="29" y1="26" x2="29" y2="16" stroke="#6B5D4F" strokeWidth="1.5" />
    <path d="M29 16 L29 22 L37 19 Z" fill="#ED2939" />
  </svg>
);

const Albania: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="44,46 20,32 28,40 12,44 22,50 10,56 22,62 14,70 26,70 44,66" fill="#1a1714" />
    <polygon points="56,46 80,32 72,40 88,44 78,50 90,56 78,62 86,70 74,70 56,66" fill="#1a1714" />
    <path d="M50 40 Q40 55 44 76 Q50 82 56 76 Q60 55 50 40 Z" fill="#1a1714" />
    <path d="M50 44 Q36 30 26 22" stroke="#1a1714" strokeWidth="11" fill="none" strokeLinecap="round" />
    <path d="M50 44 Q64 30 74 22" stroke="#1a1714" strokeWidth="11" fill="none" strokeLinecap="round" />
    <circle cx="26" cy="22" r="8" fill="#1a1714" />
    <circle cx="74" cy="22" r="8" fill="#1a1714" />
    <polygon points="24,18 8,22 24,26" fill="#D4AF37" />
    <polygon points="76,18 92,22 76,26" fill="#D4AF37" />
    <circle cx="28" cy="20" r="1.8" fill="#D4AF37" />
    <circle cx="72" cy="20" r="1.8" fill="#D4AF37" />
    <path d="M46 76 L42 92 M42 92 L37 88 M42 92 L47 89" stroke="#1a1714" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M54 76 L58 92 M58 92 L53 89 M58 92 L63 88" stroke="#1a1714" strokeWidth="3" fill="none" strokeLinecap="round" />
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
  <svg viewBox="0 -4 100 110" width="100%" height="100%">
    <path d="M36 46 Q34 66 40 76 Q45 82 50 82 Q55 82 60 76 Q66 66 64 46 Z" fill="#8B5E34" />
    <path d="M40 50 Q38 64 43 73" fill="none" stroke="#6B4423" strokeWidth="2" opacity="0.5" />
    <ellipse cx="50" cy="46" rx="14" ry="5" fill="#4A7C3C" />
    <rect x="54" y="22" width="6" height="30" rx="3" fill="#B0B8BF" transform="rotate(18 57 37)" />
    <circle cx="59" cy="23" r="4" fill="#B0B8BF" />
  </svg>
);

const Brazil: EmblemComponent = () => (
  <svg viewBox="4 -2 100 110" width="100%" height="100%">
    <path d="M30 38 L70 38 L63 90 L37 90 Z" fill="none" stroke="#fff" strokeWidth="3" />
    <path d="M33 44 L67 44 L61 86 L39 86 Z" fill="#E8B84B" opacity="0.85" />
    <rect x="40" y="52" width="9" height="9" fill="#fff" opacity="0.9" transform="rotate(12 44 56)" />
    <rect x="52" y="64" width="9" height="9" fill="#fff" opacity="0.9" transform="rotate(-10 56 68)" />
    <path d="M60 30 Q70 26 68 16 Q78 20 74 32 Q68 36 60 30 Z" fill="#4CAF50" />
    <circle cx="66" cy="24" r="2.5" fill="#fff" opacity="0.6" />
  </svg>
);

const Colombia: EmblemComponent = () => (
  <svg viewBox="-4 1 100 110" width="100%" height="100%">
    <ellipse cx="46" cy="82" rx="24" ry="6" fill="#D9B382" />
    <path d="M30 48 h32 v28 a16 15 0 0 1 -32 0 Z" fill="#F5EDE0" />
    <ellipse cx="46" cy="48" rx="16" ry="4.5" fill="#4A2C17" />
    <path d="M62 54 a12 10 0 0 1 0 20" fill="none" stroke="#4A2C17" strokeWidth="4" strokeLinecap="round" />
    <path d="M38 40 Q40 32 38 24 M48 40 Q50 32 48 24" stroke="#B0A08C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.75" />
  </svg>
);

const CapeVerde: EmblemComponent = () => (
  <svg viewBox="0 9 100 110" width="100%" height="100%">
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
  <svg viewBox="0 4 100 110" width="100%" height="100%">
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
  <svg viewBox="3 8 100 110" width="100%" height="100%">
    <ellipse cx="44" cy="58" rx="18" ry="14" fill="#3A6B4A" />
    <path d="M60 54 L80 49 L63 61 Z" fill="#C8D9C0" />
    <circle cx="52" cy="50" r="2" fill="#E8E8E8" />
    <line x1="38" y1="72" x2="34" y2="82" stroke="#5C4A3A" strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="72" x2="52" y2="82" stroke="#5C4A3A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Chile: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 -4 100 110" width="100%" height="100%">
    <path d="M38 20 Q38 14 50 14 Q62 14 62 20 L62 70 Q62 84 50 88 Q38 84 38 70 Z" fill="#fff" />
    <rect x="36" y="38" width="28" height="6" fill={shade(accentColor, 0.4)} />
    <path d="M46 44 L46 66 Q46 70 50 70 Q54 70 54 66 L54 44" fill="none" stroke={accentColor} strokeWidth="2.5" />
    <rect x="40" y="52" width="7" height="3" fill={shade(accentColor, 0.4)} />
    <rect x="53" y="52" width="7" height="3" fill={shade(accentColor, 0.4)} />
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
  <svg viewBox="6 -3 100 110" width="100%" height="100%">
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
  <svg viewBox="8 8 100 110" width="100%" height="100%">
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
  <svg viewBox="3 4 100 110" width="100%" height="100%">
    <ellipse cx="42" cy="55" rx="11" ry="15" fill="#4A2C1E" />
    <path d="M53 48 Q75 36 88 44 Q74 50 60 56 Z" fill="#F4A623" />
    <path d="M53 58 Q73 66 82 82 Q66 76 56 62 Z" fill="#E8622C" />
    <path d="M36 44 Q40 40 45 42" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
    <circle cx="38" cy="49" r="2.4" fill="#1A1A1A" />
    <path d="M31 55 q-9 2 -13 -3" fill="none" stroke="#4A2C1E" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Peru: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="1 9 100 110" width="100%" height="100%">
    <path d="M16 88 L30 58 L38 70 L50 40 L62 68 L70 56 L86 88 Z" fill="#fff" />
    <path d="M28 88 L34 74 L40 88 Z" fill={shade(accentColor, 0.4)} opacity="0.5" />
    <path d="M58 88 L64 76 L70 88 Z" fill={shade(accentColor, 0.4)} opacity="0.5" />
  </svg>
);

const Bolivia: EmblemComponent = () => (
  <svg viewBox="0 -4 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="62" rx="26" ry="7" fill="#3B2A1E" />
    <path d="M32 62 Q32 32 50 32 Q68 32 68 62 Z" fill="#3B2A1E" />
    <rect x="32" y="56" width="36" height="6" fill="#8B1E3F" />
  </svg>
);

const Germany: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="40,84 28,100 72,100 60,84" fill="#6B7A7C" stroke="#3A4547" strokeWidth="2.2" />
    <polygon points="46,46 54,46 60,84 40,84" fill="#8C9CA0" stroke="#3A4547" strokeWidth="2.2" />
    <circle cx="50" cy="30" r="16" fill="#B0BEC5" stroke="#3A4547" strokeWidth="2.6" />
    <rect x="33" y="26" width="34" height="8" fill="#3A4547" opacity="0.55" />
    {[38, 44, 56, 62].map((x) => (
      <circle key={x} cx={x} cy="30" r="1.6" fill="#F5F0E6" opacity="0.85" />
    ))}
    <polygon points="47,14 53,14 50,2" fill="#8C9CA0" stroke="#3A4547" strokeWidth="1.6" />
    <circle cx="50" cy="3" r="1.8" fill="#C1272D" />
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
    <circle cx="50" cy="55" r="11" fill={shade(accentColor, 0.4)} />
    <circle cx="50" cy="55" r="15" fill="none" stroke="#fff" strokeWidth="3" />
    <line x1="20" y1="82" x2="80" y2="82" stroke="#fff" strokeWidth="3" strokeDasharray="6 5" />
  </svg>
);

const Nepal: EmblemComponent = () => (
  <svg viewBox="6 -9 100 110" width="100%" height="100%">
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
  <svg viewBox="-7 1 100 110" width="100%" height="100%">
    {/* arpa paraguaya: a curved resonator body, an arching neck, and a front pillar with strings between them */}
    <path d="M35 20 Q23 42 25 68 Q27 90 38 96 Q45 90 42 68 Q40 42 35 20 Z" fill="#F5F0E6" stroke="#00287A" strokeWidth="1.5" opacity="0.95" />
    <path d="M35 20 Q55 6 74 26" fill="none" stroke="#F5F0E6" strokeWidth="7" strokeLinecap="round" />
    <path d="M74 26 Q64 65 50 92" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
    <line x1="40" y1="24" x2="44" y2="88" stroke="#D4AF37" strokeWidth="1.5" opacity="0.85" />
    <line x1="48" y1="17" x2="49" y2="80" stroke="#D4AF37" strokeWidth="1.5" opacity="0.85" />
    <line x1="56" y1="12" x2="54" y2="72" stroke="#D4AF37" strokeWidth="1.5" opacity="0.85" />
    <line x1="64" y1="15" x2="59" y2="60" stroke="#D4AF37" strokeWidth="1.5" opacity="0.85" />
    <line x1="71" y1="22" x2="63" y2="48" stroke="#D4AF37" strokeWidth="1.5" opacity="0.85" />
    {/* small red rosette, nodding to the flag's third color */}
    <circle cx="32" cy="58" r="3.5" fill="#C1272D" />
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

const SouthKorea: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {/* circular medallion backing so the taegeuk reads against any cover color */}
    <circle cx="50" cy="58" r="29" fill="#F5F0E6" stroke="#00000022" strokeWidth="1" />
    {/* taegeuk, the swirl from the center of the Korean flag */}
    <path d="M50 32 A26 26 0 0 1 50 84 A13 13 0 0 1 50 58 A13 13 0 0 0 50 32 Z" fill="#8B0822" />
    <path d="M50 84 A26 26 0 0 1 50 32 A13 13 0 0 1 50 58 A13 13 0 0 0 50 84 Z" fill="#003478" />
    {/* geon trigram, three solid bars, top-left */}
    <g stroke="#1A1A1A" strokeWidth="2.5">
      <line x1="8" y1="14" x2="22" y2="14" />
      <line x1="8" y1="20" x2="22" y2="20" />
      <line x1="8" y1="26" x2="22" y2="26" />
    </g>
    {/* gam trigram, broken-solid-broken, top-right */}
    <g stroke="#1A1A1A" strokeWidth="2.5">
      <line x1="78" y1="14" x2="83" y2="14" />
      <line x1="87" y1="14" x2="92" y2="14" />
      <line x1="78" y1="20" x2="92" y2="20" />
      <line x1="78" y1="26" x2="83" y2="26" />
      <line x1="87" y1="26" x2="92" y2="26" />
    </g>
    {/* ri trigram, solid-broken-solid, bottom-left */}
    <g stroke="#1A1A1A" strokeWidth="2.5">
      <line x1="8" y1="88" x2="22" y2="88" />
      <line x1="8" y1="94" x2="13" y2="94" />
      <line x1="17" y1="94" x2="22" y2="94" />
      <line x1="8" y1="100" x2="22" y2="100" />
    </g>
    {/* gon trigram, three broken bars, bottom-right */}
    <g stroke="#1A1A1A" strokeWidth="2.5">
      <line x1="78" y1="88" x2="83" y2="88" />
      <line x1="87" y1="88" x2="92" y2="88" />
      <line x1="78" y1="94" x2="83" y2="94" />
      <line x1="87" y1="94" x2="92" y2="94" />
      <line x1="78" y1="100" x2="83" y2="100" />
      <line x1="87" y1="100" x2="92" y2="100" />
    </g>
  </svg>
);

const Uzbekistan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {/* a Registan-style peshtaq gateway, sandy brick with turquoise tile inlay, the pointed portal arch of a Samarkand madrasa */}
    <rect x="20" y="16" width="60" height="86" fill="#D9BE8F" stroke="#8B7355" strokeWidth="2" />
    <rect x="27" y="23" width="46" height="72" fill="#0097A7" stroke="#00695C" strokeWidth="2" />
    <path d="M36 100 L36 54 Q36 28 50 22 Q64 28 64 54 L64 100 Z" fill="#1A2340" />
    <path d="M32 100 L32 20 L36 20 L36 100 Z M64 100 L64 20 L68 20 L68 100 Z" fill="#D4AF37" opacity="0.7" />
    {[26, 34, 66, 74].map((x) => (
      <rect key={x} x={x} y="26" width="6" height="6" fill="#D4AF37" opacity="0.7" />
    ))}
    <line x1="50" y1="22" x2="50" y2="10" stroke="#D4AF37" strokeWidth="2.5" />
    <circle cx="50" cy="8" r="3" fill="#D4AF37" />
  </svg>
);

const Tajikistan: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {/* the chorkhona, the stepped skylight of a Pamiri five-pillar house, seen from below */}
    <rect x="8" y="13" width="84" height="84" fill="#5C3A1E" stroke="#3E2712" strokeWidth="2" />
    <rect x="20" y="25" width="60" height="60" fill={shade(accentColor, 0.4)} />
    <rect x="32" y="37" width="36" height="36" fill="#D4AF37" opacity="0.9" />
    <rect x="43" y="48" width="14" height="14" fill="#7EC8E3" />
  </svg>
);

const Kyrgyzstan: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {/* the kalpak, Kyrgyzstan's traditional pointed felt hat */}
    <path d="M20 72 Q20 30 50 18 Q80 30 80 72 Q65 63 50 61 Q35 63 20 72 Z" fill="#F5F0E6" stroke="#00000022" strokeWidth="1" />
    <path d="M20 72 Q35 63 50 61 Q65 63 80 72 L80 85 Q65 76 50 74 Q35 76 20 85 Z" fill="#1A1A1A" />
    <path d="M30 79 Q50 70 70 79" fill="none" stroke={accentColor} strokeWidth="3" opacity="0.9" />
  </svg>
);

const UnitedArabEmirates: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {/* the sail-shaped silhouette of Dubai's Burj Al Arab, rising from the gulf */}
    <path d="M35 95 Q28 55 42 25 Q46 15 50 22 Q68 55 62 95 Z" fill="#F5F0E6" stroke="#00000022" strokeWidth="1.5" />
    <path d="M42 95 L42 60 Q46 45 50 45 Q50 70 46 95 Z" fill={shade(accentColor, 0.4)} opacity="0.35" />
    <line x1="48" y1="95" x2="48" y2="102" stroke="#455A64" strokeWidth="3" />
    <path d="M20 100 Q35 94 50 100 Q65 94 80 100" fill="none" stroke="#0288D1" strokeWidth="3" opacity="0.7" />
  </svg>
);

const Turkmenistan: EmblemComponent = () => (
  <svg viewBox="0 4 100 110" width="100%" height="100%">
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
  <svg viewBox="-5 15 100 110" width="100%" height="100%">
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
  <svg viewBox="5 0 100 110" width="100%" height="100%">
    <circle cx="52" cy="55" r="24" fill="#fff" />
    <circle cx="61" cy="51" r="20" fill={shade(accentColor, 0.4)} />
    <path d="M68 46 L71 54 L80 54 L73 59 L76 68 L68 62 L60 68 L63 59 L56 54 L65 54 Z" fill="#fff" />
  </svg>
);

const Tuvalu: EmblemComponent = () => (
  <svg viewBox="0 7 100 110" width="100%" height="100%">
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
  <svg viewBox="0 15 100 110" width="100%" height="100%">
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
  <svg viewBox="0 -5 100 110" width="100%" height="100%">
    <rect x="30" y="30" width="40" height="40" rx="2" fill="#fff" />
    <rect x="30" y="30" width="40" height="40" rx="2" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.35" />
    <rect x="44" y="36" width="12" height="28" rx="2" fill={shade(accentColor, 0.4)} />
    <rect x="36" y="44" width="28" height="12" rx="2" fill={shade(accentColor, 0.4)} />
  </svg>
);

const Vanuatu: EmblemComponent = () => (
  <svg viewBox="-7 -7 100 110" width="100%" height="100%">
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
  <svg viewBox="0 -7 100 110" width="100%" height="100%">
    <path
      d="M50 55 Q20 40 10 50 Q28 52 42 58 Q26 62 14 74 Q34 70 50 60 Q66 70 86 74 Q74 62 58 58 Q72 52 90 50 Q80 40 50 55 Z"
      fill="#1A1A1A"
    />
    <circle cx="50" cy="30" r="8" fill="#F4C430" />
  </svg>
);

const Cuba: EmblemComponent = () => (
  <svg viewBox="3 -17 100 110" width="100%" height="100%">
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
  <svg viewBox="0 24 100 110" width="100%" height="100%">
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
  <svg viewBox="0 9 100 110" width="100%" height="100%">
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
    <rect x="22" y="42" width="16" height="26" rx="8" fill="none" stroke="#B0B8BF" strokeWidth="5" transform="rotate(10 30 55)" />
    <rect x="36" y="42" width="16" height="26" rx="8" fill="none" stroke="#B0B8BF" strokeWidth="5" transform="rotate(-10 44 55)" />
    <rect x="62" y="46" width="14" height="22" rx="7" fill="none" stroke="#B0B8BF" strokeWidth="5" transform="rotate(25 69 57)" />
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
    <circle cx="50" cy="55" r="26" fill="#BC002D" />
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
  <svg viewBox="6 9 100 110" width="100%" height="100%">
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
    {/* Kaieteur Falls: a wide single-drop curtain off a jungle plateau */}
    <path d="M15 30 L85 30 L80 42 L20 42 Z" fill="#5C4A3A" />
    <path d="M35 42 L65 42 L60 95 L40 95 Z" fill="#BFD9E8" opacity="0.9" />
    <path d="M35 42 L65 42 L62 60 L38 60 Z" fill="#E8F2F7" opacity="0.6" />
    <ellipse cx="50" cy="97" rx="30" ry="9" fill="#E8F2F7" opacity="0.7" />
    <path d="M15 60 Q8 75 14 95 Q22 90 24 75 Q20 65 15 60 Z" fill="#2E7D32" />
    <path d="M85 60 Q92 75 86 95 Q78 90 76 75 Q80 65 85 60 Z" fill="#2E7D32" />
  </svg>
);

const Austria: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[15, 25, 35, 45, 55, 65, 75].map((x) => (
      <rect key={x} x={x} y="35" width="10" height="40" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="1.5" />
    ))}
    {[25, 35, 55, 65, 75].map((x) => (
      <rect key={x} x={x - 3} y="35" width="6" height="24" fill="#150F0A" />
    ))}
  </svg>
);

const Spain: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="48" rx="30" ry="16" fill="#1A1A1A" />
    <circle cx="24" cy="40" r="11" fill="#1A1A1A" />
    <path d="M14 42 L4 46 L14 48 Z" fill="#1A1A1A" />
    <path d="M18 32 Q8 26 2 30 Q10 34 16 38 Z" fill="#1A1A1A" />
    <path d="M30 32 Q34 22 30 14 Q24 24 24 34 Z" fill="#1A1A1A" />
    <rect x="30" y="58" width="8" height="24" fill="#1A1A1A" />
    <rect x="46" y="58" width="8" height="24" fill="#1A1A1A" />
    <rect x="62" y="58" width="8" height="24" fill="#1A1A1A" />
    <rect x="76" y="55" width="8" height="24" fill="#1A1A1A" />
    <path d="M78 44 Q92 46 90 60 Q88 66 82 62" fill="none" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const CostaRica: EmblemComponent = () => (
  <svg viewBox="-5 5 100 110" width="100%" height="100%">
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
  <svg viewBox="0 -5 100 110" width="100%" height="100%">
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
    <path d="M45 70 L55 70 L58 98 L42 98 Z" fill="#FFFFFF" />
    <path
      d="M50 10
         Q66 24 66 42
         Q80 40 82 48
         Q72 54 62 52
         Q70 62 68 72
         Q56 62 52 58
         Q50 70 50 78
         Q50 70 48 58
         Q44 62 32 72
         Q30 62 38 52
         Q28 54 18 48
         Q20 40 34 42
         Q34 24 50 10 Z"
      fill="#FFFFFF"
    />
    <path
      d="M50 22 L50 66 M50 38 L36 46 M50 38 L64 46"
      stroke="#B71C1C"
      strokeWidth="1.4"
      fill="none"
      opacity="0.8"
      strokeLinecap="round"
    />
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
  <svg viewBox="0 7 100 110" width="100%" height="100%">
    <path d="M32 40 L68 40 L60 90 L40 90 Z" fill="#8B5A2B" />
    <ellipse cx="50" cy="40" rx="18" ry="7" fill="#E8DCC0" />
    <ellipse cx="50" cy="40" rx="18" ry="7" fill="none" stroke="#6B4423" strokeWidth="2" />
    <line x1="36" y1="48" x2="32" y2="80" stroke="#6B4423" strokeWidth="1.5" opacity="0.6" />
    <line x1="50" y1="48" x2="48" y2="86" stroke="#6B4423" strokeWidth="1.5" opacity="0.6" />
    <line x1="64" y1="48" x2="68" y2="80" stroke="#6B4423" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

const Ghana: EmblemComponent = () => (
  <svg viewBox="-3 17 100 110" width="100%" height="100%">
    <path d="M35 85 Q35 68 52 68 Q68 68 70 85 Q70 92 62 92 L44 92 Q35 92 35 85 Z" fill="#1A1A1A" />
    <path d="M62 68 Q66 50 50 45 Q40 42 38 50" fill="none" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" />
    <circle cx="38" cy="50" r="6" fill="#1A1A1A" />
    <path d="M33 52 L24 56 L33 58 Z" fill="#1A1A1A" />
    <circle cx="46" cy="60" r="4.5" fill="#FCD116" />
    <rect x="45" y="92" width="4" height="9" fill="#1A1A1A" />
    <rect x="57" y="92" width="4" height="9" fill="#1A1A1A" />
  </svg>
);

const Eritrea: EmblemComponent = () => (
  <svg viewBox="0 9 100 110" width="100%" height="100%">
    <path
      d="M22 82 L26 60 Q28 50 36 50 Q40 50 40 44 Q40 36 46 36 Q52 36 52 44 L52 56 Q60 56 62 66 L70 66 L78 74 L70 76 L66 82 L60 82 L58 76 L38 76 L36 82 Z"
      fill="#B8860B"
    />
    <line x1="30" y1="82" x2="30" y2="92" stroke="#6B4A17" strokeWidth="4" strokeLinecap="round" />
    <line x1="46" y1="82" x2="46" y2="92" stroke="#6B4A17" strokeWidth="4" strokeLinecap="round" />
    <circle cx="65" cy="68" r="1.6" fill="#1A1A1A" />
  </svg>
);

const SolomonIslands: EmblemComponent = () => (
  <svg viewBox="-4 2 100 110" width="100%" height="100%">
    <path
      d="M28 70 Q22 56 32 44 Q38 36 48 38 Q58 40 58 50 Q66 48 70 56 Q62 58 58 64 Q60 74 50 80 Q40 84 28 70 Z"
      fill="#3E2723"
    />
    <path d="M34 46 Q30 38 36 30 Q40 36 38 44 Z" fill="#3E2723" />
    <circle cx="44" cy="52" r="2.2" fill="#F0E8D8" />
    <circle cx="52" cy="58" r="1.8" fill="#F0E8D8" />
    <circle cx="38" cy="62" r="1.6" fill="#F0E8D8" />
  </svg>
);

const NewCaledonia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="52" cy="62" rx="16" ry="22" fill="#78909C" />
    <path d="M40 40 Q34 28 42 22 Q44 32 46 40 Z" fill="#B0BEC5" />
    <path d="M44 38 Q40 24 48 20 Q49 32 50 40 Z" fill="#78909C" />
    <path d="M60 52 Q74 46 78 54 Q68 56 60 60 Z" fill="#607D8B" />
    <circle cx="44" cy="50" r="2" fill="#1A1A1A" />
    <path d="M32 50 L24 54 L32 56 Z" fill="#455A64" />
    <line x1="46" y1="84" x2="46" y2="96" stroke="#455A64" strokeWidth="3" strokeLinecap="round" />
    <line x1="58" y1="84" x2="58" y2="96" stroke="#455A64" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Andorra: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="10,85 28,45 46,85" fill="#8C9CA0" stroke="#3A4547" strokeWidth="2.2" />
    <polygon points="54,85 72,40 90,85" fill="#8C9CA0" stroke="#3A4547" strokeWidth="2.2" />
    <polygon points="30,85 50,25 70,85" fill="#6B7A7C" stroke="#3A4547" strokeWidth="2.6" />
    <polygon points="22,55 28,45 34,55" fill="#F5F0E6" stroke="#3A4547" strokeWidth="1.4" />
    <polygon points="66,50 72,40 78,50" fill="#F5F0E6" stroke="#3A4547" strokeWidth="1.4" />
    <polygon points="44,40 50,25 56,40" fill="#F5F0E6" stroke="#3A4547" strokeWidth="1.6" />
  </svg>
);

const SanMarino: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M14 88 L28 62 L40 78 L50 50 L60 78 L72 60 L86 88 Z" fill="#8D9CA8" />
    <rect x="20" y="52" width="10" height="18" fill="#78909C" />
    <path d="M20 52 L22 46 L24 52 M26 52 L28 46 L30 52" stroke="#546E7A" strokeWidth="2" fill="none" />
    <rect x="44" y="34" width="12" height="24" fill="#78909C" />
    <path d="M44 34 L46.5 27 L49 34 M51 34 L53.5 27 L56 34" stroke="#546E7A" strokeWidth="2" fill="none" />
    <rect x="66" y="46" width="10" height="20" fill="#78909C" />
    <path d="M66 46 L68 40 L70 46 M72 46 L74 40 L76 46" stroke="#546E7A" strokeWidth="2" fill="none" />
  </svg>
);

const Palau: EmblemComponent = () => (
  <svg viewBox="0 4 100 110" width="100%" height="100%">
    <path d="M20 80 L50 20 L80 80 Z" fill="#8B5A2B" />
    <path d="M32 80 L50 40 L68 80 Z" fill="#F5E6C8" />
    <circle cx="50" cy="64" r="8" fill="#C1272D" />
    <rect x="16" y="80" width="68" height="7" fill="#9E9E9E" />
    <rect x="24" y="87" width="6" height="10" fill="#78706A" />
    <rect x="70" y="87" width="6" height="10" fill="#78706A" />
  </svg>
);

const MarshallIslands: EmblemComponent = () => (
  <svg viewBox="0 5 100 110" width="100%" height="100%">
    <line x1="18" y1="32" x2="82" y2="88" stroke="#A1795D" strokeWidth="2.5" />
    <line x1="18" y1="88" x2="82" y2="32" stroke="#A1795D" strokeWidth="2.5" />
    <path d="M14 48 Q50 38 86 56" fill="none" stroke="#8A6448" strokeWidth="2.5" />
    <path d="M16 72 Q50 82 84 66" fill="none" stroke="#8A6448" strokeWidth="2.5" />
    <circle cx="36" cy="46" r="3.4" fill="#F0E6D2" stroke="#5D4536" strokeWidth="1" />
    <circle cx="62" cy="42" r="3.4" fill="#F0E6D2" stroke="#5D4536" strokeWidth="1" />
    <circle cx="48" cy="66" r="3.4" fill="#F0E6D2" stroke="#5D4536" strokeWidth="1" />
    <circle cx="68" cy="70" r="3.4" fill="#F0E6D2" stroke="#5D4536" strokeWidth="1" />
  </svg>
);

// 24 spoke endpoints spaced 15° apart around (50, 55) at radius 28, precomputed
// so rendering never calls Math.sin/cos: those aren't guaranteed bit-identical
// across CPU architectures, and the tiny difference between the server's and
// the browser's rounding was enough to fail hydration on this attribute.
const ASHOKA_CHAKRA_SPOKES: [number, number][] = [
  [50, 27],
  [57.25, 27.95],
  [64, 30.75],
  [69.8, 35.2],
  [74.25, 41],
  [77.05, 47.75],
  [78, 55],
  [77.05, 62.25],
  [74.25, 69],
  [69.8, 74.8],
  [64, 79.25],
  [57.25, 82.05],
  [50, 83],
  [42.75, 82.05],
  [36, 79.25],
  [30.2, 74.8],
  [25.75, 69],
  [22.95, 62.25],
  [22, 55],
  [22.95, 47.75],
  [25.75, 41],
  [30.2, 35.2],
  [36, 30.75],
  [42.75, 27.95],
];

const India: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="55" r="30" fill="none" stroke="#0D1B4C" strokeWidth="4" />
    <circle cx="50" cy="55" r="4" fill="#0D1B4C" />
    {ASHOKA_CHAKRA_SPOKES.map(([x2, y2], i) => (
      <line key={i} x1="50" y1="55" x2={x2} y2={y2} stroke="#0D1B4C" strokeWidth="1.6" />
    ))}
  </svg>
);

const Bangladesh: EmblemComponent = () => (
  <svg viewBox="-2 13 100 110" width="100%" height="100%">
    <circle cx="42" cy="86" r="9" fill="none" stroke="#1A1A1A" strokeWidth="3.5" />
    <circle cx="76" cy="86" r="9" fill="none" stroke="#1A1A1A" strokeWidth="3.5" />
    <circle cx="18" cy="86" r="7" fill="none" stroke="#1A1A1A" strokeWidth="3" />
    <path d="M34 78 L84 78 L78 52 L40 52 Z" fill="#0288D1" />
    <path d="M40 52 Q60 40 78 52" fill="none" stroke="#1A1A1A" strokeWidth="3" />
    <circle cx="58" cy="64" r="7" fill="#F57C00" />
    <path d="M52 64 L64 64 M58 58 L58 70" stroke="#FFEB3B" strokeWidth="2" />
    <line x1="18" y1="86" x2="34" y2="78" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Pakistan: EmblemComponent = () => (
  <svg viewBox="0 5 100 110" width="100%" height="100%">
    <rect x="26" y="34" width="48" height="30" rx="3" fill="#D4A017" />
    <rect x="32" y="40" width="36" height="14" rx="2" fill="#02682D" />
    <circle cx="50" cy="47" r="5" fill="#F5E6C8" />
    <rect x="26" y="64" width="48" height="8" fill="#C1272D" />
    {[30, 38, 46, 54, 62, 70].map((x) => (
      <path key={x} d={`M${x} 72 Q${x} 82 ${x + 2} 90`} stroke="#78706A" strokeWidth="2" fill="none" strokeLinecap="round" />
    ))}
    <circle cx="34" cy="80" r="6" fill="none" stroke="#1A1A1A" strokeWidth="3" />
    <circle cx="66" cy="80" r="6" fill="none" stroke="#1A1A1A" strokeWidth="3" />
  </svg>
);

const Mongolia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 90 L30 62 Q30 44 50 40 Q70 44 70 62 L70 90 Z" fill="#F5EFE0" stroke="#D4A017" strokeWidth="2" />
    <rect x="30" y="70" width="40" height="8" fill="#C1272D" opacity="0.85" />
    <rect x="43" y="78" width="14" height="12" fill="#8B5A2B" />
    <line x1="50" y1="40" x2="50" y2="30" stroke="#D4A017" strokeWidth="2.5" />
    <circle cx="50" cy="28" r="4" fill="#D4A017" />
  </svg>
);

const Philippines: EmblemComponent = () => (
  <svg viewBox="0 7 100 110" width="100%" height="100%">
    <rect x="18" y="52" width="64" height="24" rx="4" fill="#C1272D" />
    <rect x="28" y="36" width="44" height="18" rx="2" fill="#D6E9F5" stroke="#1A1A1A" strokeWidth="1.5" />
    <line x1="50" y1="36" x2="50" y2="54" stroke="#1A1A1A" strokeWidth="1.5" />
    <rect x="18" y="62" width="64" height="6" fill="#FFCC00" />
    <circle cx="28" cy="56" r="4" fill="#F5E6C8" stroke="#8D6E63" strokeWidth="1" />
    <circle cx="72" cy="56" r="4" fill="#F5E6C8" stroke="#8D6E63" strokeWidth="1" />
    <circle cx="30" cy="80" r="7" fill="none" stroke="#1A1A1A" strokeWidth="4" />
    <circle cx="70" cy="80" r="7" fill="none" stroke="#1A1A1A" strokeWidth="4" />
  </svg>
);

const VaticanCity: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <line x1="30" y1="90" x2="66" y2="54" stroke="#8B6914" strokeWidth="4" strokeLinecap="round" />
    <circle cx="30" cy="90" r="7" fill="none" stroke="#8B6914" strokeWidth="4" />
    <path d="M60 60 L70 50 L70 58 L64 64 Z" fill="#8B6914" />
    <line x1="70" y1="90" x2="34" y2="54" stroke="#8D8D8D" strokeWidth="4" strokeLinecap="round" />
    <circle cx="70" cy="90" r="7" fill="none" stroke="#8D8D8D" strokeWidth="4" />
    <path d="M40 60 L30 50 L30 58 L36 64 Z" fill="#8D8D8D" />
    <path d="M36 34 Q50 16 64 34 L64 40 L36 40 Z" fill="#FDF6E3" stroke="#8B6914" strokeWidth="1.5" />
    <rect x="34" y="30" width="32" height="4" fill="#8B6914" />
    <circle cx="50" cy="16" r="2.5" fill="#8B6914" />
    <line x1="50" y1="16" x2="50" y2="8" stroke="#8B6914" strokeWidth="2" />
    <line x1="46" y1="10" x2="54" y2="10" stroke="#8B6914" strokeWidth="2" />
  </svg>
);

const Serbia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M40 95 Q30 80 36 62 Q42 48 50 46 Q58 48 64 62 Q70 80 60 95 Q50 100 40 95 Z" fill="#8B5A2B" stroke="#5D3A1A" strokeWidth="1.5" />
    <path d="M50 46 L50 14" stroke="#5D3A1A" strokeWidth="3" />
    <path d="M50 14 Q42 8 42 18 Q42 26 50 24 Q58 26 58 18 Q58 8 50 14 Z" fill="#8B5A2B" stroke="#5D3A1A" strokeWidth="1.5" />
    <line x1="50" y1="18" x2="50" y2="90" stroke="#F5E6C8" strokeWidth="1.5" />
  </svg>
);

const Kosovo: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M24 76 Q22 40 50 30 Q78 40 76 76 Z" fill="#F5F0E6" stroke="#B0A98F" strokeWidth="1.5" />
    <line x1="50" y1="30" x2="50" y2="76" stroke="#B0A98F" strokeWidth="1" opacity="0.6" />
    <rect x="22" y="74" width="56" height="8" rx="2" fill="#F5F0E6" stroke="#B0A98F" strokeWidth="1.5" />
  </svg>
);

const IvoryCoast: EmblemComponent = () => (
  <svg viewBox="0 -6 100 110" width="100%" height="100%">
    <path d="M50 14 Q68 22 70 44 Q72 64 60 78 Q54 84 50 86 Q46 84 40 78 Q28 64 30 44 Q32 22 50 14 Z" fill="#F4C430" stroke="#8B5A2B" strokeWidth="2" />
    <path d="M50 18 L50 82 M40 34 L44 68 M60 34 L56 68" stroke="#8B5A2B" strokeWidth="1.6" fill="none" opacity="0.7" />
    <circle cx="50" cy="14" r="3" fill="#5D4037" />
  </svg>
);

const Lesotho: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M26 78 Q26 34 50 22 Q74 34 74 78 Z" fill="#F5EFE0" stroke="#8B7355" strokeWidth="2" />
    <path d="M32 60 Q50 50 68 60" fill="none" stroke="#8B7355" strokeWidth="1.2" opacity="0.6" />
    <ellipse cx="50" cy="78" rx="26" ry="6" fill="#8B5A2B" />
    <circle cx="50" cy="22" r="2.4" fill="#8B7355" />
  </svg>
);

const Burundi: EmblemComponent = () => (
  <svg viewBox="0 10 100 110" width="100%" height="100%">
    <path d="M28 90 L32 42 L68 42 L72 90 Z" fill="#8B5A2B" stroke="#5D3A1A" strokeWidth="2" />
    <ellipse cx="50" cy="42" rx="20" ry="7" fill="#F5E6C8" stroke="#5D3A1A" strokeWidth="2" />
    <path d="M30 60 L70 60 M29 74 L71 74" stroke="#5D3A1A" strokeWidth="1.5" opacity="0.5" />
    <ellipse cx="50" cy="90" rx="22" ry="4" fill="#5D3A1A" opacity="0.4" />
  </svg>
);

const RUBIK_COLORS = ["#C1272D", "#F9A825", "#FFFFFF", "#1565C0", "#2E7D32", "#F5F0E6", "#C1272D", "#FFFFFF", "#F9A825"];

const Hungary: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 1, 2].map((row) =>
      [0, 1, 2].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={26 + col * 16}
          y={34 + row * 16}
          width="14"
          height="14"
          rx="1.5"
          fill={RUBIK_COLORS[row * 3 + col]}
          stroke="#1A1A1A"
          strokeWidth="1.5"
        />
      ))
    )}
  </svg>
);

const GAMBIA_RIVER_PATH = "M18 30 Q40 34 38 46 Q36 58 58 60 Q80 62 78 76 Q76 88 50 90";

const Gambia: EmblemComponent = () => (
  <svg viewBox="-1 5 100 110" width="100%" height="100%">
    <path d={GAMBIA_RIVER_PATH} fill="none" stroke="#F5F0E6" strokeWidth="10" strokeLinecap="round" />
    <path d={GAMBIA_RIVER_PATH} fill="none" stroke="#8FBFE0" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" transform="translate(0,-2.5)" />
    <path d={GAMBIA_RIVER_PATH} fill="none" stroke="#8FBFE0" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" transform="translate(0,2.5)" />
  </svg>
);

const Liechtenstein: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="20" y="42" width="16" height="44" fill="#D4AF37" stroke="#8B6914" strokeWidth="2.4" />
    <polygon points="20,42 28,20 36,42" fill="#8B6914" />
    <rect x="64" y="42" width="16" height="44" fill="#D4AF37" stroke="#8B6914" strokeWidth="2.4" />
    <polygon points="64,42 72,20 80,42" fill="#8B6914" />
    <rect x="34" y="24" width="32" height="62" fill="#E8C458" stroke="#8B6914" strokeWidth="2.8" />
    <path d="M34 24 L34 16 L40 16 L40 24 M44 24 L44 14 L52 14 L52 24 M56 24 L56 16 L62 16 L62 24" fill="#E8C458" stroke="#8B6914" strokeWidth="2.2" />
    <path d="M42 86 L42 66 Q50 58 58 66 L58 86 Z" fill="#5C3A21" stroke="#3A2410" strokeWidth="2" />
    <ellipse cx="50" cy="92" rx="36" ry="5" fill="#8B6914" opacity="0.4" />
  </svg>
);

const Bulgaria: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="36" r="15" fill="#FFF8F0" />
    <circle cx="50" cy="36" r="10" fill="#F8BBD0" />
    <circle cx="50" cy="36" r="5" fill="#AD1457" />
    <path d="M40 30 Q34 26 36 20 Q42 22 42 30 Z" fill="#FFF8F0" />
    <path d="M60 30 Q66 26 64 20 Q58 22 58 30 Z" fill="#FFF8F0" />
    <path d="M40 42 Q34 46 36 52 Q42 50 42 42 Z" fill="#FFF8F0" />
    <path d="M60 42 Q66 46 64 52 Q58 50 58 42 Z" fill="#FFF8F0" />
    <path d="M50 51 L50 86" stroke="#2E7D32" strokeWidth="3.5" />
    <path d="M50 62 Q38 58 32 66 Q42 68 50 62 Z" fill="#2E7D32" />
    <path d="M50 72 Q62 68 68 76 Q58 78 50 72 Z" fill="#2E7D32" />
  </svg>
);

const Romania: EmblemComponent = () => (
  <svg viewBox="0 -11 100 110" width="100%" height="100%">
    <path d="M22 26 Q22 20 50 20 Q78 20 78 26 L78 34 L22 34 Z" fill="#4A0E0E" />
    <path d="M30 34 L42 34 L36 62 Z" fill="#FFF8F0" stroke="#4A0E0E" strokeWidth="1.5" />
    <path d="M58 34 L70 34 L64 62 Z" fill="#FFF8F0" stroke="#4A0E0E" strokeWidth="1.5" />
    <circle cx="36" cy="66" r="2.4" fill="#C1272D" />
  </svg>
);

const Qatar: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M10 84 Q50 96 90 84 L90 92 L10 92 Z" fill="#3D8FB0" opacity="0.65" />
    <path d="M14 78 Q30 90 50 90 Q70 90 84 74 Q88 68 84 66 Q68 78 50 79 Q32 78 18 70 Q12 73 14 78 Z" fill="#F5F0E6" stroke="#5C4630" strokeWidth="2.5" />
    <line x1="46" y1="72" x2="46" y2="16" stroke="#5C4630" strokeWidth="3.5" />
    <path d="M46 16 Q78 32 82 62 Q64 54 46 60 Z" fill="#F5F0E6" stroke="#5C4630" strokeWidth="2.5" />
    <path d="M50 32 Q64 44 68 58" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.85" />
  </svg>
);

const Armenia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M12 88 Q35 40 50 20 Q65 40 88 88 Z" fill="#7A8A9A" stroke="#4A5A6A" strokeWidth="2" />
    <path d="M50 20 Q40 38 34 52 Q42 46 50 46 Q58 46 66 52 Q60 38 50 20 Z" fill="#F5F0E6" stroke="#4A5A6A" strokeWidth="1.5" />
    <path d="M12 88 Q28 55 38 45 Q30 66 26 88 Z" fill="#5C6E80" opacity="0.7" />
    <rect x="44" y="86" width="12" height="18" fill={shade(accentColor, 0.4)} stroke="#4A5A6A" strokeWidth="1.5" />
    <line x1="50" y1="86" x2="50" y2="104" stroke="#4A5A6A" strokeWidth="1.5" />
    <line x1="44" y1="95" x2="56" y2="95" stroke="#4A5A6A" strokeWidth="1.5" />
  </svg>
);

const Azerbaijan: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M25 95 Q20 60 50 55 Q80 60 75 95 Z" fill="#5C4A3A" stroke="#3E2712" strokeWidth="2" />
    <path d="M50 55 Q40 30 50 12 Q60 30 50 55 Z" fill="#F4A300" stroke="#B7410E" strokeWidth="1.5" />
    <path d="M50 50 Q44 32 50 20 Q56 32 50 50 Z" fill="#FFD166" />
    <circle cx="50" cy="75" r="6" fill={shade(accentColor, 0.4)} opacity="0.9" />
  </svg>
);

const Finland: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 14 L66 40 L58 40 L72 62 L62 62 L78 88 L22 88 L38 62 L28 62 L42 40 L34 40 Z" fill="#3C7A5C" stroke="#1B3A2E" strokeWidth="2" />
    <rect x="45" y="88" width="10" height="14" fill="#5C4A3A" />
    <ellipse cx="50" cy="20" rx="5" ry="3" fill="#F5F0E6" opacity="0.9" />
    <ellipse cx="38" cy="40" rx="6" ry="3" fill="#F5F0E6" opacity="0.9" />
    <ellipse cx="66" cy="40" rx="6" ry="3" fill="#F5F0E6" opacity="0.9" />
    <ellipse cx="28" cy="62" rx="7" ry="3.5" fill="#F5F0E6" opacity="0.9" />
    <ellipse cx="72" cy="62" rx="7" ry="3.5" fill="#F5F0E6" opacity="0.9" />
    <circle cx="50" cy="30" r="3.5" fill={shade(accentColor, 0.4)} />
    <circle cx="42" cy="50" r="3" fill={shade(accentColor, 0.4)} opacity="0.85" />
    <circle cx="58" cy="50" r="3" fill={shade(accentColor, 0.4)} opacity="0.85" />
  </svg>
);

const Kazakhstan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 95 L38 75 L62 75 L70 95 Z" fill="#D9BE8F" stroke="#8B7355" strokeWidth="2" />
    <circle cx="50" cy="55" r="26" fill="none" stroke="#D4AF37" strokeWidth="4" />
    {/* 8 spokes at 45° increments, radius 26 around (50,55), precomputed offline */}
    <line x1="50" y1="55" x2="76" y2="55" stroke="#D4AF37" strokeWidth="3" />
    <line x1="50" y1="55" x2="68.4" y2="73.4" stroke="#D4AF37" strokeWidth="3" />
    <line x1="50" y1="55" x2="50" y2="81" stroke="#D4AF37" strokeWidth="3" />
    <line x1="50" y1="55" x2="31.6" y2="73.4" stroke="#D4AF37" strokeWidth="3" />
    <line x1="50" y1="55" x2="24" y2="55" stroke="#D4AF37" strokeWidth="3" />
    <line x1="50" y1="55" x2="31.6" y2="36.6" stroke="#D4AF37" strokeWidth="3" />
    <line x1="50" y1="55" x2="50" y2="29" stroke="#D4AF37" strokeWidth="3" />
    <line x1="50" y1="55" x2="68.4" y2="36.6" stroke="#D4AF37" strokeWidth="3" />
    <circle cx="50" cy="55" r="5" fill="#D4AF37" />
  </svg>
);

const Afghanistan: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="50,15 72,55 50,55" fill="#C1272D" stroke="#3A2A1A" strokeWidth="1.5" />
    <polygon points="72,55 50,95 50,55" fill="#0B6E4F" stroke="#3A2A1A" strokeWidth="1.5" />
    <polygon points="50,95 28,55 50,55" fill="#C1272D" stroke="#3A2A1A" strokeWidth="1.5" />
    <polygon points="28,55 50,15 50,55" fill="#0B6E4F" stroke="#3A2A1A" strokeWidth="1.5" />
    <line x1="50" y1="15" x2="50" y2="95" stroke="#3A2A1A" strokeWidth="1.5" />
    <line x1="28" y1="55" x2="72" y2="55" stroke="#3A2A1A" strokeWidth="1.5" />
    <circle cx="50" cy="55" r="6" fill={shade(accentColor, 0.4)} stroke="#3A2A1A" strokeWidth="1.5" />
    <path d="M50 95 Q46 102 50 108 Q54 102 50 95 Z" fill="#D4AF37" />
  </svg>
);

const Belarus: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M28 92 L28 72 Q28 50 48 44 Q68 38 82 48 Q90 54 88 64 L84 92 Z" fill="#4A3C2E" stroke="#2E241A" strokeWidth="2" />
    <path d="M34 58 Q20 55 15 68 Q12 78 22 80 Q31 78 35 68 Z" fill="#2E241A" opacity="0.85" />
    <path d="M22 70 Q17 80 19 90 Q24 93 28 88 Q26 78 22 70 Z" fill="#2E241A" opacity="0.6" />
    <path d="M32 58 Q22 53 14 57" fill="none" stroke="#2E241A" strokeWidth="4" strokeLinecap="round" />
    <circle cx="22" cy="68" r="2" fill="#1A1A1A" />
    <rect x="38" y="80" width="7" height="14" fill="#2E241A" />
    <rect x="60" y="76" width="7" height="18" fill="#2E241A" />
    <ellipse cx="60" cy="56" rx="8" ry="5" fill={shade(accentColor, 0.4)} opacity="0.55" />
  </svg>
);

const Denmark: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="25,50 55,65 55,95 25,80" fill="#C98F00" stroke="#8A6200" strokeWidth="2.5" />
    <polygon points="55,65 85,50 85,80 55,95" fill="#A87200" stroke="#8A6200" strokeWidth="2.5" />
    <polygon points="55,35 85,50 55,65 25,50" fill="#F4B400" stroke="#8A6200" strokeWidth="2.5" />
    <ellipse cx="45" cy="47" rx="8" ry="4.5" fill={shade(accentColor, 0.4)} stroke="#8A6200" strokeWidth="2" />
    <ellipse cx="65" cy="47" rx="8" ry="4.5" fill={shade(accentColor, 0.4)} stroke="#8A6200" strokeWidth="2" />
  </svg>
);

const Norway: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="30" y="70" width="40" height="28" fill="#4A3426" stroke="#2A1C12" strokeWidth="2.5" />
    <polygon points="18,70 50,44 82,70" fill="#3A2A1C" stroke="#2A1C12" strokeWidth="2.5" />
    <rect x="40" y="44" width="20" height="16" fill="#4A3426" stroke="#2A1C12" strokeWidth="2.5" />
    <polygon points="34,44 50,22 66,44" fill="#3A2A1C" stroke="#2A1C12" strokeWidth="2.5" />
    <path d="M50 22 Q44 12 34 15 Q40 20 46 23 Z" fill="#2A1C12" />
    <rect x="45" y="80" width="10" height="18" fill={shade(accentColor, 0.4)} />
  </svg>
);

const Sweden: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="30" y="15" width="40" height="45" rx="10" fill="#D9BE8F" stroke="#8B6F47" strokeWidth="2.5" />
    <rect x="22" y="55" width="56" height="14" rx="5" fill="#D9BE8F" stroke="#8B6F47" strokeWidth="2.5" />
    <line x1="28" y1="68" x2="20" y2="100" stroke="#8B6F47" strokeWidth="4" strokeLinecap="round" />
    <line x1="72" y1="68" x2="80" y2="100" stroke="#8B6F47" strokeWidth="4" strokeLinecap="round" />
    <line x1="36" y1="68" x2="32" y2="100" stroke="#8B6F47" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
    <line x1="64" y1="68" x2="68" y2="100" stroke="#8B6F47" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
    <rect x="28" y="57" width="44" height="9" rx="4" fill={shade(accentColor, 0.4)} opacity="0.85" />
  </svg>
);

const Estonia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="15" y="80" width="20" height="18" fill="#E8E4DC" stroke="#4A4A4A" strokeWidth="2" />
    <rect x="65" y="80" width="20" height="18" fill="#E8E4DC" stroke="#4A4A4A" strokeWidth="2" />
    <rect x="35" y="50" width="30" height="48" fill="#E8E4DC" stroke="#4A4A4A" strokeWidth="2.5" />
    <polygon points="35,50 50,25 65,50" fill="#9E1B32" stroke="#4A4A4A" strokeWidth="2.5" />
    <rect x="46" y="75" width="8" height="23" fill="#4A4A4A" opacity="0.6" />
    <rect x="40" y="60" width="6" height="8" fill={shade(accentColor, 0.4)} />
    <rect x="54" y="60" width="6" height="8" fill={shade(accentColor, 0.4)} />
  </svg>
);

const Lithuania: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="18" r="7" fill="none" stroke="#6B3E0A" strokeWidth="4" />
    <line x1="50" y1="25" x2="50" y2="38" stroke="#6B3E0A" strokeWidth="3" />
    <path d="M50 35 L72 55 L64 90 L36 90 L28 55 Z" fill="#906514" stroke="#6B3E0A" strokeWidth="3" />
    <path d="M50 35 L64 90 M50 35 L36 90 M28 55 L72 55" stroke="#F0C070" strokeWidth="2" opacity="0.8" />
    <path d="M50 35 L58 55 L54 80 L50 35 Z" fill="#F0C070" opacity="0.5" />
  </svg>
);

const Latvia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="45" cy="60" rx="22" ry="14" fill="#F5F0E6" stroke="#2A2A2A" strokeWidth="2.5" />
    <rect x="60" y="30" width="12" height="35" rx="6" fill="#F5F0E6" stroke="#2A2A2A" strokeWidth="2.5" transform="rotate(25 66 47)" />
    <ellipse cx="80" cy="24" rx="9" ry="7" fill="#F5F0E6" stroke="#2A2A2A" strokeWidth="2.5" transform="rotate(15 80 24)" />
    <path d="M88 22 L100 18 L88 28 Z" fill="#F4A300" stroke="#8B5E0A" strokeWidth="1.5" />
    <circle cx="82" cy="22" r="1.8" fill="#1A1A1A" />
    <line x1="40" y1="72" x2="36" y2="98" stroke="#F4A300" strokeWidth="4" strokeLinecap="round" />
    <line x1="52" y1="72" x2="56" y2="98" stroke="#F4A300" strokeWidth="4" strokeLinecap="round" />
    <path d="M35 55 Q25 60 30 72" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" opacity="0.85" />
  </svg>
);

const Slovakia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="30" y="45" width="40" height="45" fill="#F5F0E6" stroke="#4A4A4A" strokeWidth="2.5" />
    <rect x="22" y="30" width="16" height="20" fill="#F5F0E6" stroke="#4A4A4A" strokeWidth="2.5" />
    <rect x="62" y="30" width="16" height="20" fill="#F5F0E6" stroke="#4A4A4A" strokeWidth="2.5" />
    <rect x="46" y="70" width="8" height="20" fill="#4A4A4A" opacity="0.5" />
    <rect x="35" y="55" width="8" height="8" fill={shade(accentColor, 0.4)} opacity="0.85" />
    <rect x="57" y="55" width="8" height="8" fill={shade(accentColor, 0.4)} opacity="0.85" />
  </svg>
);

const Slovenia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M45 62 Q30 52 25 68 Q10 65 8 50 Q6 40 15 34" fill="none" stroke="#2E6B5E" strokeWidth="9" strokeLinecap="round" />
    <path d="M12 32 L4 22 L18 28 Z" fill="#2E6B5E" stroke="#1B3A2E" strokeWidth="1.5" />
    <ellipse cx="48" cy="68" rx="24" ry="13" fill="#2E6B5E" stroke="#1B3A2E" strokeWidth="2.5" transform="rotate(-12 48 68)" />
    <path d="M35 58 Q45 30 68 22 Q58 38 60 48 Q72 34 84 30 Q68 46 62 56 Q76 50 86 54 Q68 62 52 63 Z" fill="#1B3A2E" opacity="0.8" />
    <path d="M64 52 L83 40 L90 49 L80 60 L66 63 Z" fill="#2E6B5E" stroke="#1B3A2E" strokeWidth="2.5" />
    <path d="M80 60 L93 65 L82 68 L70 62 Z" fill="#1B3A2E" />
    <path d="M76 38 L73 24 L84 34 Z" fill="#1B3A2E" />
    <circle cx="75" cy="49" r="2.3" fill="#1A1A1A" />
    <path d="M32 78 L28 92 M42 80 L40 94" stroke="#1B3A2E" strokeWidth="4.5" strokeLinecap="round" />
    <ellipse cx="45" cy="70" rx="9" ry="5" fill={shade(accentColor, 0.4)} opacity="0.65" transform="rotate(-12 45 70)" />
  </svg>
);

const Iceland: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M12 88 Q35 40 50 20 Q65 40 88 88 Z" fill="#3E3A2F" stroke="#1A1710" strokeWidth="2" />
    <path d="M12 88 Q28 55 38 45 Q30 66 26 88 Z" fill="#2E2A1F" opacity="0.7" />
    <path d="M50 20 Q40 38 34 52 Q42 46 50 46 Q58 46 66 52 Q60 38 50 20 Z" fill="#B7410E" stroke="#7A2A0A" strokeWidth="1.5" />
    <path d="M50 46 Q46 65 48 88 L52 88 Q54 65 50 46 Z" fill="#F4A300" stroke="#B7410E" strokeWidth="1.5" />
  </svg>
);

const CzechRepublic: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="55" r="38" fill="#F5F0E6" stroke="#4A2C2A" strokeWidth="3" />
    <circle cx="50" cy="55" r="26" fill="none" stroke={accentColor} strokeWidth="2.5" />
    <line x1="50" y1="17" x2="50" y2="23" stroke="#4A2C2A" strokeWidth="2" />
    <line x1="50" y1="87" x2="50" y2="93" stroke="#4A2C2A" strokeWidth="2" />
    <line x1="12" y1="55" x2="18" y2="55" stroke="#4A2C2A" strokeWidth="2" />
    <line x1="82" y1="55" x2="88" y2="55" stroke="#4A2C2A" strokeWidth="2" />
    <line x1="50" y1="55" x2="50" y2="30" stroke="#4A2C2A" strokeWidth="3" />
    <line x1="50" y1="55" x2="68" y2="62" stroke="#4A2C2A" strokeWidth="2.5" />
    <circle cx="50" cy="55" r="4" fill="#4A2C2A" />
    <rect x="38" y="93" width="24" height="10" fill="#4A2C2A" opacity="0.6" />
  </svg>
);

const Monaco: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="55" r="38" fill="#1A1A1A" stroke="#F5F0E6" strokeWidth="2.5" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <rect key={deg} x="47" y="20" width="6" height="16" fill={i % 2 === 0 ? "#B71C1C" : "#F5F0E6"} transform={`rotate(${deg} 50 55)`} />
    ))}
    <circle cx="50" cy="55" r="14" fill={shade(accentColor, 0.4)} stroke="#8B6F00" strokeWidth="2" />
    <circle cx="50" cy="40" r="4" fill="#F5F0E6" stroke="#4A4A4A" strokeWidth="1.5" />
  </svg>
);

const Moldova: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M45 25 Q35 30 38 40 Q30 42 32 52" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
    <path d="M30 30 Q45 20 60 30 Q65 35 58 40 Q45 32 32 40 Q25 35 30 30 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="2" />
    {[[45, 50], [58, 50], [38, 62], [51, 62], [64, 62], [45, 74], [58, 74], [51, 86]].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="8" fill="#5B2C6B" stroke="#3A1B45" strokeWidth="1.8" />
    ))}
    <ellipse cx="42" cy="47" rx="2.5" ry="3.5" fill="#B08FC0" opacity="0.7" />
  </svg>
);

const BosniaAndHerzegovina: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="10" y="70" width="80" height="14" fill="#3D8FB0" opacity="0.6" />
    <path d="M15 72 Q50 35 85 72 L85 80 Q50 46 15 80 Z" fill="#F5F0E6" stroke="#4A2C2A" strokeWidth="2.5" />
    <rect x="10" y="64" width="12" height="16" fill="#F5F0E6" stroke="#4A2C2A" strokeWidth="1.8" />
    <rect x="78" y="64" width="12" height="16" fill="#F5F0E6" stroke="#4A2C2A" strokeWidth="1.8" />
  </svg>
);

const Montenegro: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <line x1="50" y1="72" x2="50" y2="45" stroke="#D4AF37" strokeWidth="5" />
    <path d="M50 48 Q25 38 12 50 Q26 60 42 55 Q28 66 15 68 Q30 76 45 62" fill="#D4AF37" stroke="#8A6A10" strokeWidth="1.5" />
    <path d="M50 48 Q75 38 88 50 Q74 60 58 55 Q72 66 85 68 Q70 76 55 62" fill="#D4AF37" stroke="#8A6A10" strokeWidth="1.5" />
    <circle cx="42" cy="40" r="7" fill="#D4AF37" stroke="#8A6A10" strokeWidth="1.5" />
    <circle cx="58" cy="40" r="7" fill="#D4AF37" stroke="#8A6A10" strokeWidth="1.5" />
    <rect x="44" y="62" width="12" height="14" fill="#F5F0E6" stroke="#8A6A10" strokeWidth="1.5" />
  </svg>
);

const NorthMacedonia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="10" y="80" width="80" height="16" fill="#1B5E7A" opacity="0.55" />
    <path d="M10 75 L30 60 L30 96 L10 96 Z" fill="#8B8378" opacity="0.65" />
    <rect x="52" y="55" width="30" height="28" fill="#F5F0E6" stroke="#4A2C2A" strokeWidth="2.2" />
    <polygon points="48,55 67,38 86,55" fill="#B71C1C" stroke="#4A2C2A" strokeWidth="2.2" />
    <line x1="67" y1="38" x2="67" y2="28" stroke="#4A2C2A" strokeWidth="2" />
    <line x1="62" y1="32" x2="72" y2="32" stroke="#4A2C2A" strokeWidth="2" />
  </svg>
);

const Ireland: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 92 Q25 48 42 24 Q52 12 66 20" fill="none" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
    <path d="M30 92 L30 30" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
    <path d="M22 92 L38 92 L36 100 L24 100 Z" fill="#8A6A10" />
    {[[34, 30, 62, 40], [34, 42, 58, 50], [32, 54, 54, 61], [31, 66, 50, 72]].map(([x1, y1, x2, y2]) => (
      <line key={y1} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8A6A10" strokeWidth="1.6" opacity="0.7" />
    ))}
  </svg>
);

const NorthernIreland: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="10" y="85" width="80" height="10" fill="#1B5E7A" opacity="0.4" />
    {[[20, 55], [35, 68], [50, 48], [65, 62], [80, 52]].map(([x, h], i) => (
      <g key={x}>
        <rect x={x - 6} y={95 - h} width="12" height={h} fill={i % 2 === 0 ? "#4A4A4A" : "#3A3A3A"} stroke="#1A1A1A" strokeWidth="1.5" />
        <polygon points={`${x - 6},${95 - h} ${x},${89 - h} ${x + 6},${95 - h}`} fill={i % 2 === 0 ? "#5A5A5A" : "#4A4A4A"} stroke="#1A1A1A" strokeWidth="1.2" />
      </g>
    ))}
  </svg>
);

const England: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 72, 144, 216, 288].map((deg) => (
      <ellipse key={deg} cx="50" cy="38" rx="10" ry="18" fill="#DE5D6A" stroke="#8B0E19" strokeWidth="1.8" transform={`rotate(${deg} 50 55)`} />
    ))}
    {[36, 108, 180, 252, 324].map((deg) => (
      <ellipse key={deg} cx="50" cy="42" rx="7" ry="13" fill="#F5F0E6" stroke="#8B0E19" strokeWidth="1.5" transform={`rotate(${deg} 50 55)`} />
    ))}
    <circle cx="50" cy="55" r="9" fill="#D4AF37" stroke="#8B0E19" strokeWidth="1.8" />
  </svg>
);

const Scotland: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <line x1="50" y1="98" x2="50" y2="65" stroke="#F5F0E6" strokeWidth="5" />
    <path d="M50 80 Q30 78 25 65 Q40 70 50 80 Z" fill="#F5F0E6" stroke="#0065BD" strokeWidth="2" />
    <path d="M50 80 Q70 78 75 65 Q60 70 50 80 Z" fill="#F5F0E6" stroke="#0065BD" strokeWidth="2" />
    <circle cx="50" cy="50" r="16" fill="#5296D2" stroke="#00408A" strokeWidth="2" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <line key={deg} x1="50" y1="50" x2="50" y2="30" stroke="#F5F0E6" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${deg} 50 50)`} />
    ))}
  </svg>
);

const Wales: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 95 L38 70 Q30 55 40 40 Q45 30 55 30 Q65 30 70 40 Q80 55 72 70 L60 95 Z" fill="#C8102E" stroke="#7A0E1C" strokeWidth="2.5" />
    <path d="M40 40 L28 25 L38 35 Z M70 40 L82 25 L72 35 Z" fill="#C8102E" stroke="#7A0E1C" strokeWidth="2" />
    <circle cx="45" cy="48" r="3" fill="#1A1A1A" />
    <circle cx="65" cy="48" r="3" fill="#1A1A1A" />
    <path d="M35 62 L45 62 L40 72 Z M48 65 L58 65 L53 76 Z M60 62 L70 62 L65 72 Z" fill="#F5F0E6" stroke="#7A0E1C" strokeWidth="1.5" />
  </svg>
);

const Poland: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="50,50 15,30 30,55 15,75 50,60" fill="#F5F0E6" stroke="#8B0E19" strokeWidth="2" />
    <polygon points="50,50 85,30 70,55 85,75 50,60" fill="#F5F0E6" stroke="#8B0E19" strokeWidth="2" />
    <circle cx="50" cy="48" r="9" fill="#F5F0E6" stroke="#8B0E19" strokeWidth="2" />
    <polygon points="50,55 44,66 56,66" fill="#F5F0E6" stroke="#8B0E19" strokeWidth="2" />
    <rect x="40" y="30" width="20" height="8" fill="#D4AF37" stroke="#8B0E19" strokeWidth="1.5" />
    <polygon points="40,30 45,18 50,30" fill="#D4AF37" stroke="#8B0E19" strokeWidth="1.2" />
    <polygon points="45,30 50,16 55,30" fill="#D4AF37" stroke="#8B0E19" strokeWidth="1.2" />
    <polygon points="50,30 55,18 60,30" fill="#D4AF37" stroke="#8B0E19" strokeWidth="1.2" />
    <line x1="50" y1="60" x2="50" y2="90" stroke="#8B0E19" strokeWidth="4" />
  </svg>
);

const Malta: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 55 L38 20 L50 30 L62 20 Z" fill="#F5F0E6" stroke="#8B8378" strokeWidth="2" />
    <path d="M50 55 L38 90 L50 80 L62 90 Z" fill="#F5F0E6" stroke="#8B8378" strokeWidth="2" />
    <path d="M50 55 L15 43 L25 55 L15 67 Z" fill="#F5F0E6" stroke="#8B8378" strokeWidth="2" />
    <path d="M50 55 L85 43 L75 55 L85 67 Z" fill="#F5F0E6" stroke="#8B8378" strokeWidth="2" />
  </svg>
);

const Cyprus: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 95 Q20 85 20 55 Q20 30 50 20 Q80 30 80 55 Q80 85 50 95 Z" fill="#F5F0E6" stroke="#8B8378" strokeWidth="2.5" />
    <path d="M30 88 L50 30 M38 92 L50 30 M50 94 L50 28 M62 92 L50 30 M70 88 L50 30" stroke="#8B8378" strokeWidth="1.8" opacity="0.6" fill="none" />
  </svg>
);

const Georgia: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <line x1="50" y1="20" x2="50" y2="45" stroke="#5C3A21" strokeWidth="3" />
    <path d="M50 30 Q30 20 20 30 Q30 40 50 35 Q70 20 80 30 Q70 40 50 35" fill="#4A7A3E" stroke="#2E4A26" strokeWidth="1.5" />
    {[[38, 48], [50, 52], [62, 48], [32, 62], [44, 66], [56, 66], [68, 62], [38, 78], [50, 82], [62, 78], [44, 92], [56, 92]].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill={shade(accentColor, 0.4)} stroke="#4A1A2A" strokeWidth="1.5" />
    ))}
  </svg>
);

const Portugal: EmblemComponent = ({ accentColor }) => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[[70, 30, -35], [78, 35, -15], [82, 45, 5], [80, 58, 25], [72, 68, 45]].map(([x, y, rot]) => (
      <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="9" ry="20" fill={shade(accentColor, 0.4)} stroke="#1A1A1A" strokeWidth="2" transform={`rotate(${rot} ${x} ${y})`} />
    ))}
    <ellipse cx="42" cy="65" rx="18" ry="24" fill={shade(accentColor, 0.4)} stroke="#1A1A1A" strokeWidth="2.5" />
    <circle cx="35" cy="34" r="11" fill={shade(accentColor, 0.4)} stroke="#1A1A1A" strokeWidth="2.5" />
    <path d="M25 30 L15 25 L24 37 Z" fill="#D4AF37" stroke="#1A1A1A" strokeWidth="1.8" />
    <path d="M28 24 L25 14 M34 22 L33 12 M40 24 L42 14" stroke="#B71C1C" strokeWidth="3" strokeLinecap="round" />
    <circle cx="31" cy="32" r="2" fill="#1A1A1A" />
    <line x1="35" y1="86" x2="28" y2="98" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
    <line x1="48" y1="86" x2="54" y2="98" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Greece: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 90 Q15 70 20 45 Q24 25 40 15" fill="none" stroke="#4A6A3A" strokeWidth="4" strokeLinecap="round" />
    <path d="M70 90 Q85 70 80 45 Q76 25 60 15" fill="none" stroke="#4A6A3A" strokeWidth="4" strokeLinecap="round" />
    {[[26, 80, -40], [20, 65, -25], [19, 50, -10], [24, 35, 10], [33, 22, 30]].map(([x, y, rot]) => (
      <ellipse key={`l-${x}-${y}`} cx={x} cy={y} rx="8" ry="4" fill="#7AAA5E" stroke="#2E4A26" strokeWidth="1.3" transform={`rotate(${rot} ${x} ${y})`} />
    ))}
    {[[74, 80, 40], [80, 65, 25], [81, 50, 10], [76, 35, -10], [67, 22, -30]].map(([x, y, rot]) => (
      <ellipse key={`r-${x}-${y}`} cx={x} cy={y} rx="8" ry="4" fill="#7AAA5E" stroke="#2E4A26" strokeWidth="1.3" transform={`rotate(${rot} ${x} ${y})`} />
    ))}
  </svg>
);

const Turkey: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      fillRule="evenodd"
      d="M 55 20 A 35 35 0 1 1 55 90 A 35 35 0 1 1 55 20 Z M 63 30 A 25 25 0 1 1 63 80 A 25 25 0 1 1 63 30 Z"
      fill="#F5F0E6"
      stroke="#7A0E1C"
      strokeWidth="2"
    />
    <path d="M70 45 L73 53 L82 53 L75 58 L78 66 L70 61 L62 66 L65 58 L58 53 L67 53 Z" fill="#F5F0E6" stroke="#7A0E1C" strokeWidth="1.5" />
  </svg>
);

const Iraq: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="15,95 85,95 75,80 25,80" fill="#9C6B3E" stroke="#5C3E22" strokeWidth="2" />
    <polygon points="25,80 75,80 67,65 33,65" fill="#8B5A2B" stroke="#5C3E22" strokeWidth="2" />
    <polygon points="33,65 67,65 60,50 40,50" fill="#9C6B3E" stroke="#5C3E22" strokeWidth="2" />
    <polygon points="40,50 60,50 55,38 45,38" fill="#8B5A2B" stroke="#5C3E22" strokeWidth="2" />
    <rect x="46" y="26" width="8" height="12" fill="#C9A227" stroke="#5C3E22" strokeWidth="1.5" />
    <polygon points="44,26 50,18 56,26" fill="#C9A227" stroke="#5C3E22" strokeWidth="1.2" />
    <polygon points="46,95 54,95 50,80" fill="#5C3E22" opacity="0.45" />
  </svg>
);

const Syria: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="20" y="45" width="10" height="50" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2" />
    <rect x="45" y="35" width="10" height="60" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2" />
    <rect x="70" y="45" width="10" height="50" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2" />
    <path d="M45 35 Q50 20 55 35" fill="none" stroke="#D9C9A3" strokeWidth="6" />
    <rect x="16" y="40" width="18" height="6" fill="#C9A227" stroke="#8B7355" strokeWidth="1.5" />
    <rect x="41" y="30" width="18" height="6" fill="#C9A227" stroke="#8B7355" strokeWidth="1.5" />
    <rect x="66" y="40" width="18" height="6" fill="#C9A227" stroke="#8B7355" strokeWidth="1.5" />
    <rect x="12" y="95" width="76" height="8" fill="#8B7355" opacity="0.5" />
  </svg>
);

const Yemen: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 15 Q62 40 56 62 Q50 72 44 62 Q38 40 50 15 Z" fill="#C9A227" stroke="#5C3E22" strokeWidth="2.2" />
    <rect x="42" y="60" width="16" height="10" fill="#8B1A1A" stroke="#5C3E22" strokeWidth="2" />
    <path d="M38 70 Q50 88 62 70 L58 96 Q50 102 42 96 Z" fill="#7A5230" stroke="#5C3E22" strokeWidth="2.2" />
    <rect x="20" y="88" width="60" height="10" rx="2" fill="#3E5C40" stroke="#1A1A1A" strokeWidth="2" />
    <circle cx="50" cy="93" r="4" fill="#C9A227" stroke="#5C3E22" strokeWidth="1.2" />
  </svg>
);

const Cambodia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="10" y="80" width="80" height="14" fill="#8A6A42" stroke="#5C3E22" strokeWidth="2.2" />
    <rect x="14.5" y="64" width="11" height="16" fill="#B8935F" stroke="#6B4A2A" strokeWidth="2" />
    <polygon points="14.5,64 12,57 20,48 28,57 25.5,64" fill="#B8935F" stroke="#6B4A2A" strokeWidth="2" />
    <rect x="27.5" y="55" width="13" height="25" fill="#B8935F" stroke="#6B4A2A" strokeWidth="2" />
    <polygon points="27.5,55 24,45 34,35 44,45 40.5,55" fill="#B8935F" stroke="#6B4A2A" strokeWidth="2" />
    <rect x="42" y="45" width="16" height="35" fill="#C9A96E" stroke="#6B4A2A" strokeWidth="2.5" />
    <polygon points="42,45 38,32 50,20 62,32 58,45" fill="#C9A96E" stroke="#6B4A2A" strokeWidth="2.5" />
    <rect x="59.5" y="55" width="13" height="25" fill="#B8935F" stroke="#6B4A2A" strokeWidth="2" />
    <polygon points="59.5,55 56,45 66,35 76,45 72.5,55" fill="#B8935F" stroke="#6B4A2A" strokeWidth="2" />
    <rect x="74.5" y="64" width="11" height="16" fill="#B8935F" stroke="#6B4A2A" strokeWidth="2" />
    <polygon points="74.5,64 72,57 80,48 88,57 85.5,64" fill="#B8935F" stroke="#6B4A2A" strokeWidth="2" />
  </svg>
);

const Jordan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="24,45 50,25 76,45" fill="#C1694F" stroke="#7A3E2C" strokeWidth="2.5" />
    <rect x="30" y="45" width="40" height="45" fill="#C1694F" stroke="#7A3E2C" strokeWidth="2.5" />
    {[38, 50, 62].map((x) => (
      <rect key={x} x={x - 3} y="45" width="6" height="45" fill="#D98F72" stroke="#7A3E2C" strokeWidth="1.2" />
    ))}
    <rect x="46" y="65" width="8" height="25" fill="#7A3E2C" opacity="0.6" />
    <ellipse cx="50" cy="20" rx="5" ry="7" fill="#C1694F" stroke="#7A3E2C" strokeWidth="1.8" />
  </svg>
);

const Bhutan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="30,90 35,55 65,55 70,90" fill="#F5F0E6" stroke="#5C3E22" strokeWidth="2.2" />
    <polygon points="35,55 50,42 65,55" fill="#8B1A2B" stroke="#5C3E22" strokeWidth="2" />
    <rect x="42" y="25" width="16" height="22" fill="#F5F0E6" stroke="#5C3E22" strokeWidth="2" />
    <polygon points="40,25 50,15 60,25" fill="#8B1A2B" stroke="#5C3E22" strokeWidth="2" />
    <rect x="44" y="68" width="12" height="22" fill="#8B1A2B" opacity="0.5" />
  </svg>
);

const SriLanka: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="50,15 72,35 65,80 35,80 28,35" fill="#1B4F91" stroke="#0D2C52" strokeWidth="2.5" />
    <polygon points="50,15 65,80 35,80" fill="#2E6BB8" opacity="0.5" />
    <line x1="50" y1="15" x2="50" y2="80" stroke="#0D2C52" strokeWidth="1.5" opacity="0.6" />
    <line x1="28" y1="35" x2="72" y2="35" stroke="#0D2C52" strokeWidth="1.5" opacity="0.6" />
    <line x1="50" y1="15" x2="28" y2="35" stroke="#0D2C52" strokeWidth="1" opacity="0.4" />
    <line x1="50" y1="15" x2="72" y2="35" stroke="#0D2C52" strokeWidth="1" opacity="0.4" />
  </svg>
);

const Maldives: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M20 78 Q30 90 50 90 Q70 90 80 78 L75 65 Q60 72 50 72 Q40 72 25 65 Z" fill="#5BA6BD" stroke="#0A4A5E" strokeWidth="2.5" />
    <path d="M20 78 Q10 68 18 52 Q25 60 25 65 Z" fill="#5BA6BD" stroke="#0A4A5E" strokeWidth="2.5" />
    <line x1="55" y1="70" x2="55" y2="30" stroke="#5C3E22" strokeWidth="3" />
    <polygon points="55,32 78,45 55,50" fill="#F5F0E6" stroke="#0A4A5E" strokeWidth="1.8" />
  </svg>
);

const EastTimor: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon
      points="10,82 17,60 27,58 36,45 46,58 56,45 66,58 76,60 88,64 95,73 88,80 78,80 73,86 18,86"
      fill="#3F7D2E"
      stroke="#1F4A1A"
      strokeWidth="2.5"
    />
    <polygon points="10,82 2,77 4,90 10,88" fill="#3F7D2E" stroke="#1F4A1A" strokeWidth="2" />
    <circle cx="83" cy="70" r="3.5" fill="#1A1A1A" />
    <line x1="80" y1="78" x2="92" y2="76" stroke="#1F4A1A" strokeWidth="1.8" />
    <polygon points="30,86 24,96 34,96" fill="#1F4A1A" opacity="0.6" />
    <polygon points="60,86 54,96 64,96" fill="#1F4A1A" opacity="0.6" />
  </svg>
);

const SaudiArabia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="22" y="20" width="56" height="65" fill="#1A1A1A" stroke="#000" strokeWidth="2.5" />
    <rect x="22" y="42" width="56" height="12" fill="#D9A521" />
    <rect x="46" y="20" width="8" height="65" fill="#2A2A2A" opacity="0.6" />
    <rect x="40" y="60" width="20" height="25" fill="#0D0D0D" stroke="#D9A521" strokeWidth="1.5" />
    <ellipse cx="50" cy="92" rx="42" ry="7" fill="#143A21" opacity="0.5" />
  </svg>
);

const Oman: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="25" y="75" width="50" height="15" fill="#8A6A42" stroke="#5C3E22" strokeWidth="2.2" />
    <circle cx="50" cy="55" r="28" fill="#BE8970" stroke="#5C3E22" strokeWidth="3" />
    <circle cx="50" cy="55" r="19" fill="#C1694F" opacity="0.6" />
    {[[50, 25], [72, 33], [82, 55], [72, 77], [50, 85], [28, 77], [18, 55], [28, 33]].map(([x, y], i) => (
      <rect key={i} x={x - 5} y={y - 5} width="10" height="10" fill="#BE8970" stroke="#5C3E22" strokeWidth="1.3" />
    ))}
    <rect x="42" y="65" width="16" height="20" fill="#5C3E22" opacity="0.5" />
  </svg>
);

const Ukraine: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M40 78 Q32 58 18 46 Q12 41 18 30" fill="none" stroke="#F5C518" strokeWidth="10" strokeLinecap="round" />
    <path d="M60 78 Q68 58 82 46 Q88 41 82 30" fill="none" stroke="#F5C518" strokeWidth="10" strokeLinecap="round" />
    <polygon points="50,14 57,22 53,78 47,78 43,22" fill="#F5C518" stroke="#8A6A10" strokeWidth="2.2" />
    <polygon points="34,78 66,78 72,92 28,92" fill="#F5C518" stroke="#8A6A10" strokeWidth="2.2" />
    <path d="M40 78 Q32 58 18 46 Q12 41 18 30" fill="none" stroke="#8A6A10" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    <path d="M60 78 Q68 58 82 46 Q88 41 82 30" fill="none" stroke="#8A6A10" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const Bahrain: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M15 55 Q50 28 85 55 L85 62 Q75 96 50 101 Q25 96 15 62 Z" fill="#D9D2C0" stroke="#7A6A50" strokeWidth="2.2" />
    <line x1="50" y1="42" x2="25" y2="90" stroke="#7A6A50" strokeWidth="1.6" opacity="0.55" />
    <line x1="50" y1="42" x2="38" y2="96" stroke="#7A6A50" strokeWidth="1.6" opacity="0.55" />
    <line x1="50" y1="42" x2="50" y2="99" stroke="#7A6A50" strokeWidth="1.6" opacity="0.55" />
    <line x1="50" y1="42" x2="62" y2="96" stroke="#7A6A50" strokeWidth="1.6" opacity="0.55" />
    <line x1="50" y1="42" x2="75" y2="90" stroke="#7A6A50" strokeWidth="1.6" opacity="0.55" />
    <path d="M20 50 Q50 20 80 50 Q65 56 50 46 Q35 56 20 50 Z" fill="#EDE6D6" stroke="#7A6A50" strokeWidth="2.2" />
    <circle cx="50" cy="56" r="15" fill="#F5F0E6" stroke="#7A6A50" strokeWidth="2.2" />
    <circle cx="45" cy="51" r="4" fill="#FFFFFF" opacity="0.85" />
  </svg>
);

const Kuwait: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="16" y="100" width="68" height="6" fill="#0D3A42" opacity="0.55" />
    <polygon points="40,100 60,100 55,80 45,80" fill="#0D3A42" opacity="0.45" />
    <rect x="45" y="70" width="10" height="12" fill="#D9D2C0" stroke="#0D3A42" strokeWidth="2.4" />
    <circle cx="50" cy="46" r="25" fill="#1B7A8C" stroke="#0D3A42" strokeWidth="2.8" />
    <circle cx="50" cy="46" r="18" fill="none" stroke="#0D3A42" strokeWidth="1.8" opacity="0.5" />
    <circle cx="50" cy="46" r="10" fill="none" stroke="#0D3A42" strokeWidth="1.8" opacity="0.5" />
    <rect x="47" y="16" width="6" height="7" fill="#D9D2C0" stroke="#0D3A42" strokeWidth="2.2" />
    <circle cx="50" cy="11" r="9" fill="#2E96A8" stroke="#0D3A42" strokeWidth="2.4" />
    <circle cx="50" cy="2" r="2.5" fill="#C9A227" stroke="#0D3A42" strokeWidth="1.4" />
  </svg>
);

const Singapore: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="20" y="100" width="60" height="6" fill="#0D2E44" opacity="0.5" />
    <polygon points="45,100 55,100 53,44 47,44" fill="#5C4A3A" stroke="#3A2E22" strokeWidth="2.2" />
    <ellipse cx="50" cy="46" rx="40" ry="15" fill="#2E8B57" stroke="#1A5C38" strokeWidth="2.4" />
    <ellipse cx="50" cy="46" rx="28" ry="10" fill="#3EA86B" opacity="0.6" />
    <ellipse cx="50" cy="27" rx="28" ry="11" fill="#2E8B57" stroke="#1A5C38" strokeWidth="2.2" />
    <ellipse cx="50" cy="12" rx="16" ry="7" fill="#2E8B57" stroke="#1A5C38" strokeWidth="2.2" />
    <circle cx="18" cy="46" r="3.5" fill="#C9A227" />
    <circle cx="82" cy="46" r="3.5" fill="#C9A227" />
    <circle cx="28" cy="27" r="3" fill="#C9A227" />
    <circle cx="72" cy="27" r="3" fill="#C9A227" />
    <circle cx="50" cy="6" r="3" fill="#C9A227" />
  </svg>
);

const Malaysia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="15" y="100" width="70" height="6" fill="#0D2E44" opacity="0.5" />
    <polygon points="28,100 42,100 40,60 38,40 34,20 30,40 28,60" fill="#64879F" stroke="#0D2E44" strokeWidth="2.2" />
    <line x1="34" y1="20" x2="34" y2="8" stroke="#0D2E44" strokeWidth="2.6" />
    <polygon points="58,100 72,100 70,60 68,40 64,20 60,40 58,60" fill="#64879F" stroke="#0D2E44" strokeWidth="2.2" />
    <line x1="64" y1="20" x2="64" y2="8" stroke="#0D2E44" strokeWidth="2.6" />
    <rect x="42" y="55" width="16" height="8" fill="#2E96A8" stroke="#0D2E44" strokeWidth="1.8" />
  </svg>
);

const Brunei: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="20" y="80" width="60" height="14" rx="3" fill="#5C3A21" stroke="#2E1D10" strokeWidth="2.2" />
    <circle cx="32" cy="94" r="10" fill="#5C3A21" stroke="#2E1D10" strokeWidth="2" />
    <circle cx="68" cy="94" r="10" fill="#5C3A21" stroke="#2E1D10" strokeWidth="2" />
    <circle cx="32" cy="94" r="3.5" fill="#8A6A10" />
    <circle cx="68" cy="94" r="3.5" fill="#8A6A10" />
    <path d="M25 78 L75 78 L70 50 Q70 40 60 38 L40 38 Q30 40 30 50 Z" fill="#DAC06C" stroke="#8A6A10" strokeWidth="2.4" />
    <ellipse cx="50" cy="38" rx="10" ry="4" fill="#8A6A10" />
    <rect x="30" y="55" width="40" height="6" fill="#8A6A10" opacity="0.6" />
    <rect x="33" y="65" width="34" height="5" fill="#8A6A10" opacity="0.5" />
  </svg>
);

const Taiwan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="35" cy="62" rx="22" ry="30" fill="#3E7D4A" stroke="#1F4D2A" strokeWidth="2.2" transform="rotate(-15 35 62)" />
    <ellipse cx="65" cy="62" rx="22" ry="30" fill="#3E7D4A" stroke="#1F4D2A" strokeWidth="2.2" transform="rotate(15 65 62)" />
    <ellipse cx="50" cy="57" rx="24" ry="34" fill="#5FA35F" stroke="#1F4D2A" strokeWidth="2.4" />
    <ellipse cx="50" cy="64" rx="14" ry="22" fill="#B8D98A" opacity="0.85" />
    <ellipse cx="65" cy="35" rx="9" ry="4" fill="#8B6F2E" stroke="#5C4A1E" strokeWidth="1.6" transform="rotate(-20 65 35)" />
    <line x1="60" y1="33" x2="52" y2="26" stroke="#5C4A1E" strokeWidth="1.6" />
    <line x1="70" y1="36" x2="78" y2="30" stroke="#5C4A1E" strokeWidth="1.6" />
  </svg>
);

const Guatemala: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <line x1="15" y1="95" x2="85" y2="95" stroke="#5C3A21" strokeWidth="4" />
    <path d="M55 55 Q75 70 68 95 Q80 78 78 100" fill="none" stroke="#1F5C3A" strokeWidth="5" strokeLinecap="round" />
    <path d="M55 58 Q80 65 85 90" fill="none" stroke="#2E8B6E" strokeWidth="5" strokeLinecap="round" />
    <path d="M55 60 Q85 62 92 82" fill="none" stroke="#1F5C3A" strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="42" cy="60" rx="20" ry="24" fill="#1F5F4B" stroke="#123322" strokeWidth="2.4" />
    <circle cx="35" cy="35" r="14" fill="#1F5F4B" stroke="#123322" strokeWidth="2.4" />
    <path d="M28 24 L30 14 L34 24 M34 22 L38 12 L40 23" stroke="#123322" strokeWidth="2" fill="none" />
    <polygon points="22,35 10,32 22,40" fill="#C9A227" stroke="#8A6A10" strokeWidth="1.6" />
    <circle cx="32" cy="33" r="2.5" fill="#0A1A0F" />
    <ellipse cx="42" cy="70" rx="12" ry="16" fill="#C1272D" />
    <line x1="35" y1="84" x2="33" y2="95" stroke="#123322" strokeWidth="2.5" />
    <line x1="48" y1="84" x2="50" y2="95" stroke="#123322" strokeWidth="2.5" />
  </svg>
);

const Honduras: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <line x1="15" y1="95" x2="85" y2="95" stroke="#5C3A21" strokeWidth="4" />
    <path d="M55 55 L95 62 L92 72 L55 65 Z" fill="#D56C70" stroke="#7A1818" strokeWidth="2" />
    <path d="M55 60 L90 78 L85 88 L55 70 Z" fill="#1B4F72" stroke="#123048" strokeWidth="2" />
    <path d="M50 65 L78 90 L70 98 L50 72 Z" fill="#D9A441" stroke="#8A6A10" strokeWidth="2" />
    <ellipse cx="42" cy="60" rx="20" ry="24" fill="#D56C70" stroke="#7A1818" strokeWidth="2.4" />
    <path d="M30 55 Q40 50 48 58 Q42 68 30 65 Z" fill="#1B4F72" stroke="#123048" strokeWidth="1.8" />
    <circle cx="34" cy="36" r="14" fill="#D56C70" stroke="#7A1818" strokeWidth="2.4" />
    <path d="M22 36 Q8 34 8 44 Q8 50 18 48 Q24 46 24 40 Z" fill="#3A3A3A" stroke="#1A1A1A" strokeWidth="1.8" />
    <ellipse cx="30" cy="32" rx="8" ry="6" fill="#F5F0E6" opacity="0.85" />
    <circle cx="30" cy="33" r="2.2" fill="#0A0A0A" />
    <line x1="35" y1="84" x2="33" y2="95" stroke="#7A1818" strokeWidth="2.5" />
    <line x1="48" y1="84" x2="50" y2="95" stroke="#7A1818" strokeWidth="2.5" />
  </svg>
);

const ElSalvador: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="10" y="100" width="80" height="6" fill="#1F140C" opacity="0.5" />
    <polygon points="20,100 50,20 80,100" fill="#3A2418" stroke="#1F140C" strokeWidth="2.4" />
    <polygon points="38,55 50,20 62,55" fill="#C1272D" opacity="0.9" />
    <path d="M50 20 Q44 8 50 0 Q56 8 50 20 Z" fill="#8C8C8C" opacity="0.6" />
    <path d="M30 90 Q40 80 50 90 Q60 80 70 90" fill="none" stroke="#C1440E" strokeWidth="4" opacity="0.85" />
  </svg>
);

const Nicaragua: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="5" y="85" width="90" height="20" fill="#1B5E7A" opacity="0.6" />
    <polygon points="15,90 40,25 62,90" fill="#909A9C" stroke="#2E3B3D" strokeWidth="2.2" />
    <polygon points="55,90 78,40 100,90" fill="#6B7A7C" stroke="#2E3B3D" strokeWidth="2.2" />
    <path d="M40 25 Q36 15 40 8 Q44 15 40 25 Z" fill="#8C8C8C" opacity="0.6" />
    <ellipse cx="30" cy="93" rx="10" ry="3" fill="#F5F0E6" opacity="0.4" />
    <ellipse cx="70" cy="95" rx="10" ry="3" fill="#F5F0E6" opacity="0.4" />
  </svg>
);

const SaintLucia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <line x1="50" y1="70" x2="50" y2="105" stroke="#2E6B3A" strokeWidth="4" />
    <path d="M50 85 Q35 82 30 92 Q42 92 50 85 Z" fill="#3E8B4A" stroke="#1F4D2A" strokeWidth="1.8" />
    <path d="M50 92 Q65 90 70 100 Q58 100 50 92 Z" fill="#3E8B4A" stroke="#1F4D2A" strokeWidth="1.8" />
    <ellipse cx="50" cy="33" rx="13" ry="19" fill="#C1272D" stroke="#7A1818" strokeWidth="2" transform="rotate(0 50 52)" />
    <ellipse cx="50" cy="33" rx="13" ry="19" fill="#C1272D" stroke="#7A1818" strokeWidth="2" transform="rotate(72 50 52)" />
    <ellipse cx="50" cy="33" rx="13" ry="19" fill="#C1272D" stroke="#7A1818" strokeWidth="2" transform="rotate(144 50 52)" />
    <ellipse cx="50" cy="33" rx="13" ry="19" fill="#C1272D" stroke="#7A1818" strokeWidth="2" transform="rotate(216 50 52)" />
    <ellipse cx="50" cy="33" rx="13" ry="19" fill="#C1272D" stroke="#7A1818" strokeWidth="2" transform="rotate(288 50 52)" />
    <circle cx="50" cy="52" r="10" fill="#E8A227" stroke="#8A6A10" strokeWidth="1.8" />
  </svg>
);

const SaintKittsAndNevis: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="10" y="98" width="80" height="6" fill="#2E2A20" opacity="0.5" />
    <polygon points="15,98 35,55 65,55 85,98" fill="#5F5F4F" opacity="0.55" />
    <rect x="28" y="62" width="44" height="34" fill="#6B6458" stroke="#2E2A20" strokeWidth="2.4" />
    {[30, 42, 54, 66].map((x) => (
      <rect key={x} x={x} y="54" width="8" height="9" fill="#6B6458" stroke="#2E2A20" strokeWidth="1.8" />
    ))}
    <rect x="44" y="76" width="12" height="20" fill="#2E2A20" opacity="0.7" />
    <rect x="18" y="86" width="14" height="7" fill="#3A3A3A" stroke="#1A1A1A" strokeWidth="1.6" />
    <circle cx="22" cy="90" r="4" fill="#3A3A3A" />
  </svg>
);

const AntiguaAndBarbuda: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 55 L70 90 L58 85 L50 100 L42 85 L30 90 Z" fill="#1A1A1A" stroke="#0A0A0A" strokeWidth="2.2" />
    <path d="M50 45 L10 30 L22 48 L48 52 Z" fill="#1A1A1A" stroke="#0A0A0A" strokeWidth="2.2" />
    <path d="M50 45 L90 30 L78 48 L52 52 Z" fill="#1A1A1A" stroke="#0A0A0A" strokeWidth="2.2" />
    <circle cx="50" cy="30" r="9" fill="#1A1A1A" stroke="#0A0A0A" strokeWidth="2" />
    <polygon points="42,28 28,25 42,33" fill="#3A3A3A" stroke="#0A0A0A" strokeWidth="1.5" />
    <ellipse cx="50" cy="48" rx="11" ry="17" fill="#C1272D" stroke="#7A1818" strokeWidth="2.2" />
  </svg>
);

const Bahamas: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="55" rx="30" ry="40" fill="#E8A9BC" stroke="#B06B82" strokeWidth="2.6" />
    <ellipse cx="45" cy="40" rx="16" ry="20" fill="#F0C4D0" stroke="#B06B82" strokeWidth="2" />
    <ellipse cx="45" cy="40" rx="8" ry="10" fill="#B06B82" opacity="0.5" />
    <path d="M62 55 Q75 60 72 85 Q68 100 55 98 Q45 96 48 80 Q50 65 62 55 Z" fill="#F5D6DE" stroke="#B06B82" strokeWidth="2.2" />
    <polygon points="75,40 84,36 78,48" fill="#E8A9BC" stroke="#B06B82" strokeWidth="1.6" />
    <polygon points="72,60 82,60 75,70" fill="#E8A9BC" stroke="#B06B82" strokeWidth="1.6" />
    <polygon points="30,30 22,25 30,20" fill="#E8A9BC" stroke="#B06B82" strokeWidth="1.6" />
  </svg>
);

const Barbados: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M15 85 Q30 75 50 85 Q70 75 90 85 L90 95 L15 95 Z" fill="#1B5E7A" opacity="0.6" />
    <path d="M25 68 Q50 35 78 52 Q62 58 50 55 Q56 63 46 66 Q35 68 25 68 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.4" />
    <polygon points="78,52 92,44 90,60" fill="#C1272D" stroke="#7A1818" strokeWidth="2" />
    <path d="M38 55 Q15 48 10 30 Q28 36 44 52 Z" fill="#2E6B8C" stroke="#123048" strokeWidth="2" />
    <path d="M45 60 Q28 68 18 85 Q35 76 50 65 Z" fill="#2E6B8C" stroke="#123048" strokeWidth="2" />
    <circle cx="32" cy="60" r="2.8" fill="#0A0A0A" />
  </svg>
);

const Lebanon: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="20" y="98" width="60" height="8" rx="2" fill="#3E5C40" stroke="#1A1A1A" strokeWidth="2" />
    <rect x="46" y="84" width="8" height="16" fill="#5C3A21" stroke="#2E1D10" strokeWidth="2.2" />
    <polygon points="14,86 86,86 74,66 26,66" fill="#679079" stroke="#123322" strokeWidth="2.2" />
    <polygon points="22,68 78,68 66,50 34,50" fill="#2A6B45" stroke="#123322" strokeWidth="2.2" />
    <polygon points="30,52 70,52 60,36 40,36" fill="#679079" stroke="#123322" strokeWidth="2.2" />
    <polygon points="38,38 62,38 50,20" fill="#2A6B45" stroke="#123322" strokeWidth="2.2" />
  </svg>
);

const Dominica: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M25 75 Q20 45 45 35 Q70 25 78 40 Q85 50 75 55 Q80 65 70 75 Q55 90 35 85 Q22 82 25 75 Z" fill="#2E6B3A" stroke="#123322" strokeWidth="2.4" />
    <circle cx="72" cy="38" r="12" fill="#2E6B3A" stroke="#123322" strokeWidth="2.2" />
    <path d="M55 60 Q45 70 40 85 Q55 90 65 78 Q68 65 55 60 Z" fill="#8F79BD" stroke="#3A2266" strokeWidth="2" />
    <polygon points="82,38 96,34 86,48" fill="#C9A227" stroke="#8A6A10" strokeWidth="1.8" />
    <circle cx="76" cy="34" r="2.5" fill="#0A0A0A" />
    <path d="M25 75 Q15 80 12 95 Q25 92 30 82 Z" fill="#1F5C3A" stroke="#123322" strokeWidth="2" />
  </svg>
);

const Grenada: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M20 45 Q50 15 80 45 Q65 40 50 42 Q35 40 20 45 Z" fill="#5C3A21" stroke="#2E1D10" strokeWidth="2.4" />
    <path d="M20 45 Q50 85 80 45 Q65 55 50 53 Q35 55 20 45 Z" fill="#5F3D1D" stroke="#2E1D10" strokeWidth="2.4" />
    <ellipse cx="50" cy="47" rx="17" ry="22" fill="#C1272D" stroke="#7A1818" strokeWidth="2.2" />
    <circle cx="50" cy="47" r="11" fill="#2E1D10" stroke="#1A1208" strokeWidth="1.8" />
    <path d="M38 30 Q44 40 38 50 M50 25 Q56 37 50 49 M62 30 Q56 40 62 50" fill="none" stroke="#E8A9BC" strokeWidth="2" opacity="0.8" />
  </svg>
);

const SaintVincentAndTheGrenadines: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M15 75 L85 75 L72 90 L28 90 Z" fill="#64879F" stroke="#0D2A3D" strokeWidth="2.4" />
    <rect x="48" y="30" width="4" height="48" fill="#3A2418" />
    <path d="M52 32 L82 68 L52 68 Z" fill="#F5F0E6" stroke="#0D2A3D" strokeWidth="2" />
    <path d="M48 40 L28 70 L48 70 Z" fill="#7A9AB0" stroke="#0D2A3D" strokeWidth="2" />
    <path d="M10 82 Q30 75 50 82 Q70 75 90 82" fill="none" stroke="#1B4F72" strokeWidth="3" opacity="0.7" />
  </svg>
);

const DominicanRepublic: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="50,15 75,35 68,75 32,75 25,35" fill="#7CC5CF" stroke="#1F6F7A" strokeWidth="2.6" />
    <polygon points="50,15 68,75 50,95 32,75" fill="#7ED0DB" stroke="#1F6F7A" strokeWidth="2.2" opacity="0.85" />
    <polygon points="50,15 75,35 50,50 25,35" fill="#B8E8ED" stroke="#1F6F7A" strokeWidth="1.8" opacity="0.7" />
    <path d="M38 55 Q50 60 62 55" stroke="#F5F0E6" strokeWidth="2" fill="none" opacity="0.6" />
  </svg>
);

const Samoa: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M15 55 Q50 20 85 55 Q50 45 15 55 Z" fill="#8B5A2B" stroke="#2E1D10" strokeWidth="2.6" />
    <rect x="22" y="55" width="4" height="30" fill="#5C3A21" />
    <rect x="38" y="55" width="4" height="30" fill="#5C3A21" />
    <rect x="58" y="55" width="4" height="30" fill="#5C3A21" />
    <rect x="74" y="55" width="4" height="30" fill="#5C3A21" />
    <ellipse cx="50" cy="88" rx="42" ry="7" fill="#D9C9A3" stroke="#8A6A4A" strokeWidth="1.8" />
  </svg>
);

const Angola: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M15 70 Q20 50 40 45 Q60 40 75 50 Q85 55 80 62 Q70 58 60 60 Q65 68 55 75 Q35 85 20 78 Q13 75 15 70 Z" fill="#1A1A1A" stroke="#000000" strokeWidth="2.2" />
    <circle cx="68" cy="48" r="9" fill="#1A1A1A" stroke="#000000" strokeWidth="2" />
    <path d="M70 40 Q78 22 72 10 Q68 24 62 34" fill="none" stroke="#C9A227" strokeWidth="5" strokeLinecap="round" />
    <path d="M76 42 Q88 26 84 12 Q76 28 66 38" fill="none" stroke="#C9A227" strokeWidth="5" strokeLinecap="round" />
    <line x1="25" y1="78" x2="22" y2="92" stroke="#1A1A1A" strokeWidth="4" />
    <line x1="65" y1="78" x2="68" y2="92" stroke="#1A1A1A" strokeWidth="4" />
  </svg>
);

const Benin: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M24 56 Q12 51 14 38 Q16 28 26 30" fill="none" stroke="#7A2E0E" strokeWidth="6" strokeLinecap="round" />
    <ellipse cx="48" cy="58" rx="25" ry="15" fill="#C1440E" stroke="#7A2E0E" strokeWidth="2.6" />
    <circle cx="76" cy="46" r="12" fill="#C1440E" stroke="#7A2E0E" strokeWidth="2.4" />
    <polygon points="70,36 74,24 78,36" fill="#C1440E" stroke="#7A2E0E" strokeWidth="2" />
    <rect x="30" y="70" width="6" height="14" rx="2" fill="#C1440E" stroke="#7A2E0E" strokeWidth="1.8" />
    <rect x="40" y="74" width="6" height="14" rx="2" fill="#C1440E" stroke="#7A2E0E" strokeWidth="1.8" />
    <rect x="56" y="74" width="6" height="14" rx="2" fill="#C1440E" stroke="#7A2E0E" strokeWidth="1.8" />
    <rect x="66" y="70" width="6" height="14" rx="2" fill="#C1440E" stroke="#7A2E0E" strokeWidth="1.8" />
    <circle cx="82" cy="43" r="2" fill="#1A1A1A" />
    {[[38, 54], [53, 64], [63, 51], [73, 38], [46, 46]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="#1A1A1A" opacity="0.75" />
    ))}
  </svg>
);

const BurkinaFaso: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M10 58 L90 48 L90 60 L10 70 Z" fill="#8B5A2B" stroke="#3A2418" strokeWidth="2.2" />
    <ellipse cx="22" cy="85" rx="10" ry="14" fill="#C9A227" stroke="#8A6A10" strokeWidth="2" />
    <ellipse cx="42" cy="82" rx="10" ry="14" fill="#C9A227" stroke="#8A6A10" strokeWidth="2" />
    <ellipse cx="62" cy="79" rx="10" ry="14" fill="#C9A227" stroke="#8A6A10" strokeWidth="2" />
    <ellipse cx="80" cy="76" rx="10" ry="14" fill="#C9A227" stroke="#8A6A10" strokeWidth="2" />
    <line x1="22" y1="85" x2="30" y2="63" stroke="#3A2418" strokeWidth="2" />
    <line x1="42" y1="82" x2="48" y2="61" stroke="#3A2418" strokeWidth="2" />
    <line x1="62" y1="79" x2="66" y2="59" stroke="#3A2418" strokeWidth="2" />
    <line x1="80" y1="76" x2="82" y2="57" stroke="#3A2418" strokeWidth="2" />
    <circle cx="35" cy="35" r="7" fill="#C1272D" />
    <line x1="35" y1="42" x2="35" y2="52" stroke="#3A2418" strokeWidth="3" />
  </svg>
);

const Libya: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="15" y="70" width="20" height="30" fill="#DAC06C" stroke="#8A6A10" strokeWidth="2.2" />
    <rect x="65" y="70" width="20" height="30" fill="#DAC06C" stroke="#8A6A10" strokeWidth="2.2" />
    <path d="M15 70 L15 40 Q50 15 85 40 L85 70 L70 70 L70 45 Q50 30 30 45 L30 70 Z" fill="#D9A85A" stroke="#8A6A10" strokeWidth="2.4" />
    <rect x="10" y="98" width="80" height="8" fill="#B8860B" opacity="0.6" />
  </svg>
);

const Tunisia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 72, 144, 216, 288].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 50 60)`}>
        <ellipse cx="50" cy="32" rx="9" ry="18" fill="#F5F0E6" stroke="#B0A88C" strokeWidth="2" />
      </g>
    ))}
    <circle cx="50" cy="60" r="11" fill="#C9A227" stroke="#8A6A10" strokeWidth="2" />
    <path d="M50 78 Q40 90 30 88" fill="none" stroke="#2F6B3A" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 78 Q60 92 72 90" fill="none" stroke="#2F6B3A" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const Eswatini: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="50,90 42,50 50,20 58,50" fill="#C1272D" stroke="#7A1818" strokeWidth="2" />
    <polygon points="30,92 28,55 40,25 42,58" fill="#B06363" stroke="#5C1010" strokeWidth="2" />
    <polygon points="70,92 72,55 60,25 58,58" fill="#B06363" stroke="#5C1010" strokeWidth="2" />
    <rect x="42" y="88" width="16" height="14" fill="#3A2418" stroke="#1A1208" strokeWidth="2" />
  </svg>
);

const Namibia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M30 69 Q25 51 40 41 Q53 32 64 42 Q73 50 67 62 Q76 68 67 79 Q58 90 45 87 Q32 84 30 69 Z" fill="#C9A063" stroke="#5C4A3A" strokeWidth="2.6" />
    <path d="M41 43 Q34 33 39 23" fill="none" stroke="#8C7B6B" strokeWidth="3" strokeLinecap="round" />
    <path d="M43 42 L29 23" stroke="#2A1F1A" strokeWidth="5" strokeLinecap="round" />
    <path d="M53 37 L44 20" stroke="#2A1F1A" strokeWidth="5" strokeLinecap="round" />
    <path d="M42 44 Q51 59 57 77 L47 82 Q39 62 33 49 Z" fill="#1A1A1A" />
    <circle cx="46" cy="55" r="2.6" fill="#F5F0E6" />
    <ellipse cx="65" cy="75" rx="5" ry="3.4" fill="#1A1A1A" />
  </svg>
);

const Zambia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="50,15 75,40 65,85 35,85 25,40" fill="#CF8D67" stroke="#7A3A10" strokeWidth="2.6" />
    <polygon points="50,15 65,85 50,100 35,85" fill="#D97A3A" stroke="#7A3A10" strokeWidth="2.2" opacity="0.85" />
    <polygon points="50,15 75,40 50,55 25,40" fill="#E8956B" stroke="#7A3A10" strokeWidth="1.8" opacity="0.7" />
  </svg>
);

const Cameroon: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="20,95 50,25 80,95" fill="#3A5F3A" stroke="#1F3D1F" strokeWidth="2.4" />
    <polygon points="38,62 50,28 62,62" fill="#8B1A1A" opacity="0.85" />
    <path d="M43 62 Q50 46 57 62" fill="none" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" />
    <rect x="10" y="95" width="80" height="8" fill="#2E6B8C" opacity="0.55" />
  </svg>
);

const CentralAfricanRepublic: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="40" cy="58" rx="25" ry="17" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.6" />
    <ellipse cx="68" cy="48" rx="14" ry="13" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.4" />
    <path d="M56 35 Q46 28 50 45 Q52 58 62 56 Q57 46 56 35 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.2" />
    <circle cx="66" cy="45" r="2.4" fill="#3A2A1E" />
    <path d="M80 52 Q88 60 84 72 Q80 80 72 76" fill="none" stroke="#5C4A3A" strokeWidth="6" strokeLinecap="round" />
    <path d="M78 58 Q84 60 82 66" fill="none" stroke="#F5F0E6" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 72 L20 88 M32 74 L32 90 M46 74 L46 90 M56 72 L56 88" stroke="#5C4A3A" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const Chad: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M8 95 Q28 82 48 95 Q68 82 92 95" fill="none" stroke="#C9A227" strokeWidth="6" opacity="0.5" />
    <ellipse cx="48" cy="65" rx="24" ry="13" fill="#B8860B" stroke="#6B4A10" strokeWidth="2.4" />
    <path d="M36 58 Q31 44 40 38 Q49 44 43 58 Z" fill="#B8860B" stroke="#6B4A10" strokeWidth="2.2" />
    <path d="M68 60 Q80 48 78 32 Q71 34 67 48 Q64 56 68 60 Z" fill="#B8860B" stroke="#6B4A10" strokeWidth="2.2" />
    <path d="M38 76 L36 95 M48 76 L46 95 M58 76 L56 95 M66 74 L64 93" stroke="#6B4A10" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Comoros: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 50 55)`}>
        <path d="M50 55 C60 42 74 46 77 58 C71 66 56 63 50 55 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.8" />
      </g>
    ))}
    <circle cx="50" cy="55" r="9" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
  </svg>
);

const DemocraticRepublicOfTheCongo: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <circle cx="50" cy="55" r="38" fill="#D9C9A3" stroke="#5C3A21" strokeWidth="2.6" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 50 55)`}>
        <rect x="47" y="20" width="6" height="16" fill="#8B5A2B" />
      </g>
    ))}
    <circle cx="50" cy="55" r="12" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
  </svg>
);

const RepublicOfTheCongo: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="26,78 50,22 74,78" fill="#2F8F5B" stroke="#1B4F2E" strokeWidth="2.6" />
    <polygon points="34,78 50,36 66,78" fill="none" stroke="#1B4F2E" strokeWidth="1.6" opacity="0.5" />
    <rect x="44" y="16" width="12" height="14" fill="#2F8F5B" stroke="#1B4F2E" strokeWidth="2" />
    <polygon points="44,16 50,4 56,16" fill="#2F8F5B" stroke="#1B4F2E" strokeWidth="2" />
    <rect x="47" y="86" width="6" height="18" fill="#D9C9A3" stroke="#1B4F2E" strokeWidth="1.6" />
  </svg>
);

const Djibouti: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M20 90 Q34 82 48 90 Q62 98 76 90 Q82 87 84 90" fill="none" stroke="#0EA5B8" strokeWidth="3.5" opacity="0.85" />
    <path d="M40 92 L50 34 Q56 42 54 92 Z" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2.2" />
    <path d="M50 34 L48 20" stroke="#D9D2C0" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    <path d="M62 90 L70 46 Q76 54 74 90 Z" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2" />
    <circle cx="30" cy="30" r="7" fill="#D9A227" />
  </svg>
);

const EquatorialGuinea: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="47" y="70" width="6" height="26" fill="#5C3A21" />
    <path d="M40 32 Q28 52 40 78 Q50 86 60 78 Q72 52 60 32 Q50 20 40 32 Z" fill="#D9A227" stroke="#8B5A2B" strokeWidth="2.6" />
    <path d="M43 40 Q48 58 43 74 M57 40 Q52 58 57 74" fill="none" stroke="#B8860B" strokeWidth="1.8" opacity="0.6" />
    <path d="M32 24 Q40 12 52 18" fill="none" stroke="#3A7A45" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const Gabon: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="50" cy="50" rx="22" ry="30" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="2.6" />
    <path d="M32 32 Q50 22 68 32 Q71 42 64 40 Q50 32 36 40 Q29 42 32 32 Z" fill="#1B1B1B" />
    <path d="M40 50 Q46 44 52 50" fill="none" stroke="#1B1B1B" strokeWidth="2.4" />
    <path d="M56 50 Q62 44 68 50" fill="none" stroke="#1B1B1B" strokeWidth="2.4" />
    <path d="M38 68 Q50 76 62 68 Q59 80 50 82 Q41 80 38 68 Z" fill="#C1272D" stroke="#8B1A1A" strokeWidth="1.6" />
  </svg>
);

const Guinea: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M34 88 L37 40 Q50 22 63 40 L66 88 Z" fill="#D9A227" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="50" cy="36" rx="14" ry="6" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.2" />
    <path d="M37 88 L27 96 M45 88 L43 98 M55 88 L57 98 M63 88 L73 96" stroke="#5C3A21" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

const GuineaBissau: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="41" cy="54" rx="26" ry="17" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2.6" />
    <ellipse cx="70" cy="48" rx="14" ry="11" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2.4" />
    <ellipse cx="64" cy="36" rx="4" ry="5" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2" />
    <ellipse cx="75" cy="35" rx="4" ry="5" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2" />
    <circle cx="66" cy="40" r="2.2" fill="#1B1B1B" />
    <circle cx="77" cy="39" r="2.2" fill="#1B1B1B" />
    <ellipse cx="84" cy="48" rx="3" ry="2" fill="#1B1B1B" />
    <rect x="26" y="66" width="8" height="14" rx="3" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2" />
    <rect x="46" y="68" width="8" height="14" rx="3" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2" />
    <path d="M11 76 Q26 70 41 76 Q56 82 71 76 Q81 72 86 76" fill="none" stroke="#1B7A9C" strokeWidth="3.5" strokeLinecap="round" opacity="0.75" />
  </svg>
);

const Liberia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 18 Q68 22 66 42 Q70 55 62 66 Q66 80 50 92 Q34 80 38 66 Q30 55 34 42 Q32 22 50 18 Z" fill="#1B1B1B" stroke="#0A0805" strokeWidth="2.6" />
    <path d="M50 18 Q40 20 38 30 Q50 26 62 30 Q60 20 50 18 Z" fill="#3A3A3A" />
    <ellipse cx="42" cy="48" rx="5" ry="3" fill="#F5F0E6" />
    <ellipse cx="58" cy="48" rx="5" ry="3" fill="#F5F0E6" />
    <path d="M50 52 L48 64 L52 64 Z" fill="none" stroke="#5C5C5C" strokeWidth="1.6" />
    <path d="M44 74 Q50 78 56 74" fill="none" stroke="#5C5C5C" strokeWidth="2.2" />
    <path d="M40 90 Q50 95 60 90" fill="none" stroke="#0A0805" strokeWidth="2.4" opacity="0.7" />
  </svg>
);

const Madagascar: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M38 100 Q35 70 40 55 L60 55 Q65 70 62 100 Z" fill="#8B3010" stroke="#5C1F08" strokeWidth="2.6" />
    <ellipse cx="50" cy="42" rx="30" ry="20" fill="#8B3010" stroke="#5C1F08" strokeWidth="2.6" />
    <path d="M30 30 Q26 18 34 12 M42 24 Q40 10 48 6 M58 24 Q60 10 52 6 M70 30 Q74 18 66 12" stroke="#5C1F08" strokeWidth="4.5" strokeLinecap="round" fill="none" />
  </svg>
);

const Malawi: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <ellipse cx="52" cy="63" rx="30" ry="20" fill="#F4A623" stroke="#8A5A10" strokeWidth="2.6" />
    <path d="M22 63 L6 48 L6 78 Z" fill="#F4A623" stroke="#8A5A10" strokeWidth="2.2" />
    <path d="M40 44 L50 26 L60 44 Z" fill="#F4A623" stroke="#8A5A10" strokeWidth="2.2" />
    <path d="M78 58 L94 60 L78 68 Z" fill="#F4A623" stroke="#8A5A10" strokeWidth="2" />
    <circle cx="72" cy="58" r="3.4" fill="#1B1B1B" />
    <path d="M35 63 Q52 70 68 63" fill="none" stroke="#8A5A10" strokeWidth="1.6" opacity="0.5" />
  </svg>
);

const Mali: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M26 92 L33 44 Q50 26 67 44 L74 92 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2.6" />
    <path d="M33 44 L38 44 L38 30 L33 30 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2" />
    <path d="M46 34 L52 34 L52 18 L46 18 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2" />
    <path d="M62 44 L67 44 L67 30 L62 30 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2" />
    <path d="M28 58 L34 58 M66 58 L72 58 M30 74 L37 74 M63 74 L70 74 M40 68 L46 68 M54 68 L60 68" stroke="#7A4A20" strokeWidth="3.4" strokeLinecap="round" />
  </svg>
);

const Sudan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="30,88 50,20 70,88" fill="#B5651D" stroke="#7A4A20" strokeWidth="2.6" />
    <path d="M44.1 40 L55.9 40 M40.6 52 L59.4 52 M37.1 64 L62.9 64 M33.5 76 L66.5 76" stroke="#7A4A20" strokeWidth="1.8" opacity="0.65" />
    <rect x="45" y="76" width="10" height="12" fill="#4A2E12" />
    <circle cx="74" cy="22" r="9" fill="#D9A227" stroke="#8A6A10" strokeWidth="2" />
    <path d="M74 6 L74 12 M90 22 L84 22 M86 8 L82 12 M86 36 L82 32 M62 32 L66 36" stroke="#D9A227" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SouthSudan: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M35 42 Q15 38 10 18 Q8 12 14 14 Q22 28 38 40 Q40 44 35 42 Z" fill="#C9B48A" stroke="#8B7355" strokeWidth="2.4" />
    <path d="M65 42 Q85 38 90 18 Q92 12 86 14 Q78 28 62 40 Q60 44 65 42 Z" fill="#C9B48A" stroke="#8B7355" strokeWidth="2.4" />
    <path d="M26 50 L18 44 L30 56 Z" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2" />
    <path d="M74 50 L82 44 L70 56 Z" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2" />
    <path d="M50 38 Q30 42 28 63 Q26 80 40 88 Q50 93 60 88 Q74 80 72 63 Q70 42 50 38 Z" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2.6" />
    <circle cx="38" cy="63" r="3" fill="#1A1A1A" />
    <circle cx="62" cy="63" r="3" fill="#1A1A1A" />
    <ellipse cx="50" cy="86" rx="10" ry="6" fill="#8B7355" />
    <circle cx="45" cy="85" r="1.4" fill="#1A1A1A" />
    <circle cx="55" cy="85" r="1.4" fill="#1A1A1A" />
  </svg>
);

const Tanzania: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <polygon points="15,88 35,58 46,74 55,28 66,64 76,52 88,88" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.6" />
    <polygon points="45,50 55,28 65,50 55,44 Z" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="2" />
    <ellipse cx="34" cy="63" rx="13" ry="5" fill="#F5F0E6" opacity="0.75" />
    <ellipse cx="72" cy="58" rx="14" ry="5" fill="#F5F0E6" opacity="0.75" />
  </svg>
);

const Togo: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M26 26 L74 26 L70 88 Q50 96 30 88 Z" fill="#F5F0E6" stroke="#5C4A3A" strokeWidth="2.6" />
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={i} x={28 + i * 9.2} y="28" width="9.2" height="58" fill={["#C8102E", "#D9A227", "#3A7A45", "#1B7A9C", "#C8102E"][i]} opacity="0.9" />
    ))}
    <path d="M30 88 Q50 96 70 88 L68 92 Q50 100 32 92 Z" fill="#5C4A3A" />
  </svg>
);

const Mauritania: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M0 110 L0 88 Q30 68 50 82 Q70 94 100 74 L100 110 Z" fill="#C9A277" stroke="#7A4A20" strokeWidth="2.2" />
    <path
      fillRule="evenodd"
      d="M9 20 A13 13 0 1 0 35 20 A13 13 0 1 0 9 20 Z M16 17 A11 11 0 1 0 38 17 A11 11 0 1 0 16 17 Z"
      fill="#D9A227"
      stroke="#8A6A10"
      strokeWidth="1.6"
    />
    <g transform="translate(45 54) scale(0.74)">
      <path d="M-30 10 Q-20 -18 0 -12 Q10 -22 22 -14 Q30 -10 28 6 L26 20 L-28 20 Z" fill="#6B4226" stroke="#3A2410" strokeWidth="4" />
      <path d="M22 -14 Q34 -26 40 -20 Q44 -14 36 -6 L28 6" fill="#6B4226" stroke="#3A2410" strokeWidth="3.6" />
      <ellipse cx="42" cy="-24" rx="7" ry="6" fill="#6B4226" stroke="#3A2410" strokeWidth="3" />
      <path d="M-28 20 L-30 38 M-14 20 L-16 38 M14 20 L16 38 M24 20 L26 38" stroke="#3A2410" strokeWidth="5" strokeLinecap="round" />
      <path d="M40 -22 Q42 -28 38 -30" fill="none" stroke="#3A2410" strokeWidth="2.4" />
    </g>
  </svg>
);

const Mauritius: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M14 64 Q10 38 40 33 Q64 29 74 48 Q80 60 70 73 Q62 85 40 85 Q16 85 14 64 Z" fill="#8C7B6B" stroke="#3A2A1E" strokeWidth="3" />
    <path d="M16 60 Q4 54 6 42 Q13 50 22 53 Z" fill="#5C4A3A" stroke="#3A2A1E" strokeWidth="2.2" />
    <path d="M12 68 Q2 66 2 56 Q9 62 17 64 Z" fill="#5C4A3A" stroke="#3A2A1E" strokeWidth="2.2" />
    <path d="M34 52 Q24 46 22 58 Q32 63 42 57 Z" fill="#5C4A3A" stroke="#3A2A1E" strokeWidth="2.2" />
    <circle cx="74" cy="36" r="13" fill="#8C7B6B" stroke="#3A2A1E" strokeWidth="3" />
    <circle cx="78" cy="32" r="2.6" fill="#1A1A1A" />
    <ellipse cx="86" cy="39" rx="10" ry="7" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.2" transform="rotate(-8 86 39)" />
    <path d="M94 35 Q99 39 94 44" fill="none" stroke="#8A6A10" strokeWidth="3" strokeLinecap="round" />
    <path d="M36 84 L34 102 M56 84 L58 102" stroke="#3A2A1E" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M25 102 L43 102 M48 103 L68 103" stroke="#D9A227" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

const Mozambique: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="15" y="75" width="70" height="9" fill="#C9973A" stroke="#6B4A1E" strokeWidth="2.4" />
    <rect x="20" y="63" width="60" height="9" fill="#D9A94A" stroke="#6B4A1E" strokeWidth="2.2" />
    <rect x="25" y="51" width="50" height="9" fill="#C9973A" stroke="#6B4A1E" strokeWidth="2.2" />
    <rect x="30" y="39" width="40" height="9" fill="#D9A94A" stroke="#6B4A1E" strokeWidth="2" />
    <rect x="35" y="27" width="30" height="9" fill="#C9973A" stroke="#6B4A1E" strokeWidth="2" />
    <ellipse cx="26" cy="93" rx="7" ry="5" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    <ellipse cx="50" cy="95" rx="8" ry="5.5" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    <ellipse cx="74" cy="93" rx="7" ry="5" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    <path d="M22 22 L44 42" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
    <circle cx="20" cy="19" r="4.5" fill="#3A2A1E" />
    <path d="M78 22 L56 42" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
    <circle cx="80" cy="19" r="4.5" fill="#3A2A1E" />
  </svg>
);

const Niger: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M26 64 L24 95 M34 64 L33 95 M50 62 L52 95 M58 60 L61 95" stroke="#8A5A10" strokeWidth="5" strokeLinecap="round" />
    <path d="M20 62 Q18 40 38 36 Q54 34 60 44 Q64 52 58 60 Q40 68 24 64 Z" fill="#D9A227" stroke="#8A5A10" strokeWidth="3" />
    <path d="M52 42 Q58 26 66 14 Q70 8 74 8 Q78 8 76 14 Q70 24 62 40 Z" fill="#D9A227" stroke="#8A5A10" strokeWidth="3" />
    <ellipse cx="76" cy="10" rx="9" ry="7" fill="#D9A227" stroke="#8A5A10" strokeWidth="2.6" />
    <circle cx="72" cy="2" r="2.4" fill="#8A5A10" />
    <circle cx="80" cy="2" r="2.4" fill="#8A5A10" />
    <circle cx="79" cy="9" r="1.3" fill="#2A1A0E" />
    <path d="M84 12 L88 14 L84 17 Z" fill="#8A5A10" />
    <path d="M28 46 L36 44 L38 52 L30 54 Z" fill="#8A5A10" opacity="0.9" />
    <path d="M42 40 L50 39 L51 47 L43 48 Z" fill="#8A5A10" opacity="0.9" />
    <path d="M60 28 L66 25 L68 32 L62 34 Z" fill="#8A5A10" opacity="0.9" />
    <path d="M22 56 L29 55 L30 61 L23 62 Z" fill="#8A5A10" opacity="0.9" />
    <path d="M20 58 Q12 62 14 72" stroke="#8A5A10" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="14" cy="74" r="2.6" fill="#8A5A10" />
  </svg>
);

const Senegal: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M50 100 L50 15" stroke="#5C3A21" strokeWidth="5" strokeLinecap="round" />
    <ellipse cx="50" cy="72" rx="26" ry="20" fill="#B5651D" stroke="#5C3A21" strokeWidth="2.4" />
    <path d="M28 66 Q50 56 72 66" fill="none" stroke="#E8C97A" strokeWidth="3" opacity="0.85" />
    <path d="M34 58 L34 88 M42 55 L42 91 M50 54 L50 92 M58 55 L58 91 M66 58 L66 88" stroke="#E8C97A" strokeWidth="1.6" opacity="0.9" />
    <circle cx="50" cy="17" r="4" fill="#5C3A21" />
  </svg>
);

const Seychelles: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M20 62 L18 98 M35 66 L33 100 M55 66 L57 100 M68 60 L70 96" stroke="#4A3A1E" strokeWidth="6" strokeLinecap="round" />
    <path d="M20 55 Q8 58 5 66 Q3 71 9 72 Q16 66 22 57 Z" fill="#4A3A1E" stroke="#2A1E0E" strokeWidth="1.8" />
    <path d="M58 40 Q75 34 85 28 Q92 25 94 30 Q95 35 88 39 Q76 46 62 50 Z" fill="#5C6B3A" stroke="#2A1E0E" strokeWidth="1.8" />
    <path d="M10 66 Q8 40 35 34 Q60 30 72 46 Q78 55 72 64 Q50 74 28 70 Q14 70 10 66 Z" fill="#6B7A45" stroke="#2A1E0E" strokeWidth="2.4" />
    <path d="M22 44 Q30 58 24 68 M40 38 Q42 56 38 70 M56 40 Q54 54 52 64" stroke="#2A1E0E" strokeWidth="1.4" fill="none" opacity="0.55" />
    <ellipse cx="90" cy="32" rx="10" ry="8" fill="#5C6B3A" stroke="#2A1E0E" strokeWidth="1.8" />
    <path d="M80 38 Q90 42 98 37" stroke="#2A1E0E" strokeWidth="1.3" fill="none" />
    <circle cx="94" cy="28" r="1.8" fill="#1A1A1A" />
  </svg>
);

const SierraLeone: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M0 110 L0 94 Q50 80 100 94 L100 110 Z" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.4" />
    <path d="M40 96 Q35 80 42 66 L44 40 L56 40 L58 66 Q65 80 60 96 Z" fill="#6B4A2E" stroke="#2A1A0E" strokeWidth="2.6" />
    <circle cx="50" cy="32" r="22" fill="#2F6B3A" stroke="#123322" strokeWidth="2.4" />
    <circle cx="29" cy="37" r="15" fill="#2F6B3A" stroke="#123322" strokeWidth="2.4" />
    <circle cx="71" cy="37" r="15" fill="#2F6B3A" stroke="#123322" strokeWidth="2.4" />
    <circle cx="50" cy="15" r="14" fill="#2F6B3A" stroke="#123322" strokeWidth="2.4" />
  </svg>
);

const Nigeria: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <rect x="30" y="92" width="40" height="14" fill="#4A4A4A" stroke="#2A2A2A" strokeWidth="2" />
    <path d="M35 60 Q30 78 28 92 Q50 100 72 92 Q70 78 65 60 Z" fill="#8A6A10" stroke="#5C4A10" strokeWidth="2" />
    <ellipse cx="50" cy="48" rx="20" ry="28" fill="#B5872A" stroke="#6B4A10" strokeWidth="2.4" />
    <path d="M38 30 Q40 12 50 8 Q60 12 62 30 Z" fill="#8A6A10" stroke="#5C4A10" strokeWidth="2" />
    {[40, 45, 50, 55, 60].map((cx, i) => (
      <circle key={`crown-${i}`} cx={cx} cy="29" r="1.6" fill={i % 2 === 0 ? "#C1272D" : "#D9A227"} />
    ))}
    {[35, 42, 50, 58, 65].map((cx, i) => (
      <circle key={`beadA-${i}`} cx={cx} cy="64" r="2.4" fill={i % 2 === 0 ? "#C1272D" : "#D9A227"} stroke="#5C4A10" strokeWidth="0.8" />
    ))}
    {[32, 42, 50, 58, 68].map((cx, i) => (
      <circle key={`beadB-${i}`} cx={cx} cy="86" r="2.6" fill={i % 2 === 0 ? "#D9A227" : "#C1272D"} stroke="#5C4A10" strokeWidth="0.8" />
    ))}
    <ellipse cx="30" cy="46" rx="4" ry="6" fill="#B5872A" stroke="#6B4A10" strokeWidth="1.6" />
    <ellipse cx="70" cy="46" rx="4" ry="6" fill="#B5872A" stroke="#6B4A10" strokeWidth="1.6" />
    <ellipse cx="43" cy="44" rx="3" ry="4" fill="#3A2A10" />
    <ellipse cx="57" cy="44" rx="3" ry="4" fill="#3A2A10" />
    <path d="M44 58 Q50 62 56 58" stroke="#3A2A10" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const Rwanda: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M55 8 Q38 12 32 24 Q22 28 18 42 Q10 52 16 62 Q12 72 22 76 Q26 84 36 84 Q42 92 54 90 Q66 92 72 100 Q88 85 84 60 Q86 38 72 24 Q64 10 55 8 Z"
      fill="#2E2E2E"
      stroke="#141414"
      strokeWidth="2.6"
    />
    <ellipse cx="76" cy="37" rx="9" ry="12" fill="#2E2E2E" stroke="#141414" strokeWidth="2.2" />
    <path d="M30 26 Q22 34 20 44" stroke="#141414" strokeWidth="2" fill="none" opacity="0.6" />
    <circle cx="26" cy="36" r="3.6" fill="#141414" />
    <circle cx="26" cy="36" r="1.4" fill="#8C8C8C" />
    <ellipse cx="18" cy="60" rx="4" ry="5" fill="#141414" />
    <path d="M24 70 Q30 74 38 72" stroke="#141414" strokeWidth="2" fill="none" opacity="0.5" />
  </svg>
);

const SaoTomeAndPrincipe: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path
      d="M50 8 Q76 18 80 48 Q84 74 62 96 Q55 103 50 104 Q45 103 38 96 Q16 74 20 48 Q24 18 50 8 Z"
      fill="#D9A227"
      stroke="#8A5A10"
      strokeWidth="2.8"
    />
    <path d="M50 12 Q46 55 50 100 M38 20 Q28 55 40 92 M62 20 Q72 55 60 92" fill="none" stroke="#8A5A10" strokeWidth="1.8" opacity="0.55" />
    <path d="M62 30 Q84 40 78 66 Q73 84 58 92 Q64 68 62 30 Z" fill="#B5651D" stroke="#7A4010" strokeWidth="2.2" />
    {[[64, 45], [70, 51], [66, 59], [72, 64], [65, 72], [71, 77]].map(([cx, cy], i) => (
      <ellipse key={i} cx={cx} cy={cy} rx="5" ry="4" fill="#F5E0A8" stroke="#B8860B" strokeWidth="1.2" />
    ))}
    <rect x="46" y="1" width="8" height="10" fill="#5C3A21" stroke="#3A2410" strokeWidth="1.6" />
  </svg>
);

const Somalia: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M0 110 L0 94 Q28 82 50 90 Q74 98 100 88 L100 110 Z" fill="#C9A877" stroke="#7A5A32" strokeWidth="2" />
    <path d="M45 100 L43 58 L57 58 L55 100 Z" fill="#6B4226" stroke="#3A2410" strokeWidth="2.2" />
    <path d="M50 62 Q34 52 22 30" stroke="#6B4226" strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M50 60 Q68 48 80 28" stroke="#6B4226" strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M48 78 L54 82 L50 92 Z" fill="#3A2410" opacity="0.7" />
    <path d="M22 30 L16 44 L28 44 Z" fill="#D9A227" />
    <circle cx="22" cy="46" r="9" fill="#D9A227" stroke="#8A5A10" strokeWidth="2" />
    <path d="M80 28 L74 42 L86 42 Z" fill="#D9A227" />
    <circle cx="80" cy="44" r="9" fill="#D9A227" stroke="#8A5A10" strokeWidth="2" />
  </svg>
);

const FaroeIslands: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M6 90 Q50 74 94 90 L94 106 L6 106 Z" fill="#3A4A5C" stroke="#1E2833" strokeWidth="2" />
    <path d="M60 26 Q85 24 98 33 Q99 36 95 40 Q78 46 60 42 Z" fill="#E8791A" stroke="#8A4A0A" strokeWidth="2.4" />
    <line x1="64" y1="28" x2="64" y2="40" stroke="#8A4A0A" strokeWidth="1.6" />
    <path d="M18 78 Q14 45 34 28 Q52 14 68 20 Q82 26 84 40 Q85 46 78 50 Q60 62 40 60 Q20 60 18 78 Z" fill="#1A1A1A" stroke="#000000" strokeWidth="2.6" />
    <ellipse cx="70" cy="35" rx="11" ry="10" fill="#F5F0E6" />
    <circle cx="75" cy="31" r="2.6" fill="#1A1A1A" />
  </svg>
);

const Aruba: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M14 96 L86 96 L78 104 L22 104 Z" fill="#D9B463" stroke="#8A6A34" strokeWidth="2" />
    <path
      d="M42 98 Q40 75 52 58 Q62 46 68 38"
      fill="none"
      stroke="#6B4423"
      strokeWidth="11"
      strokeLinecap="round"
    />
    <path
      d="M50 50 L56 30 L78 16 L96 22 L94 40 L76 54 L58 58 Z"
      fill="#3D6B2C"
      stroke="#1F3E17"
      strokeWidth="2.4"
    />
    <path d="M48 44 L54 28 L66 24 L62 38 Z" fill="#4F8536" />
    <path d="M6 30 L26 26 M4 42 L24 40" stroke="#9CC2D6" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
  </svg>
);

const SintMaarten: EmblemComponent = () => (
  <svg viewBox="0 0 100 110" width="100%" height="100%">
    <path d="M0 78 Q28 58 55 70 Q80 80 100 68 L100 110 L0 110 Z" fill="#E8D3A0" />
    <path
      d="M0 92 Q25 84 50 92 Q75 100 100 90"
      fill="none"
      stroke="#2E86AB"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.75"
    />
    <g transform="translate(52 38) rotate(-14) scale(1.35)">
      <path
        d="M-25 0 Q-25 -3 -19 -3 L12 -3 L16 -10 L19 -3 L20 -3 Q23 -2 23 0 Q23 2 20 3 L16 3 L4 9 L-1 9 L-2 3 L-19 3 Q-25 2 -25 0 Z"
        fill="#F5F0E6"
        stroke="#5C4A3A"
        strokeWidth="1.6"
      />
      <circle cx="-9" cy="0" r="1.1" fill="#5C4A3A" />
      <circle cx="-3" cy="0" r="1.1" fill="#5C4A3A" />
      <circle cx="3" cy="0" r="1.1" fill="#5C4A3A" />
    </g>
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
  "south-korea": SouthKorea,
  uzbekistan: Uzbekistan,
  tajikistan: Tajikistan,
  kyrgyzstan: Kyrgyzstan,
  "united-arab-emirates": UnitedArabEmirates,
  qatar: Qatar,
  armenia: Armenia,
  azerbaijan: Azerbaijan,
  finland: Finland,
  kazakhstan: Kazakhstan,
  afghanistan: Afghanistan,
  belarus: Belarus,
  denmark: Denmark,
  norway: Norway,
  sweden: Sweden,
  estonia: Estonia,
  lithuania: Lithuania,
  latvia: Latvia,
  slovakia: Slovakia,
  slovenia: Slovenia,
  iceland: Iceland,
  "czech-republic": CzechRepublic,
  monaco: Monaco,
  moldova: Moldova,
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
  ghana: Ghana,
  eritrea: Eritrea,
  "solomon-islands": SolomonIslands,
  "new-caledonia": NewCaledonia,
  andorra: Andorra,
  "san-marino": SanMarino,
  palau: Palau,
  "marshall-islands": MarshallIslands,
  india: India,
  bangladesh: Bangladesh,
  pakistan: Pakistan,
  mongolia: Mongolia,
  philippines: Philippines,
  "vatican-city": VaticanCity,
  serbia: Serbia,
  kosovo: Kosovo,
  "ivory-coast": IvoryCoast,
  lesotho: Lesotho,
  burundi: Burundi,
  hungary: Hungary,
  gambia: Gambia,
  liechtenstein: Liechtenstein,
  bulgaria: Bulgaria,
  romania: Romania,
  "bosnia-and-herzegovina": BosniaAndHerzegovina,
  montenegro: Montenegro,
  "north-macedonia": NorthMacedonia,
  ireland: Ireland,
  "northern-ireland": NorthernIreland,
  england: England,
  scotland: Scotland,
  wales: Wales,
  poland: Poland,
  malta: Malta,
  cyprus: Cyprus,
  georgia: Georgia,
  portugal: Portugal,
  greece: Greece,
  turkey: Turkey,
  iraq: Iraq,
  syria: Syria,
  yemen: Yemen,
  cambodia: Cambodia,
  jordan: Jordan,
  bhutan: Bhutan,
  "sri-lanka": SriLanka,
  maldives: Maldives,
  "east-timor": EastTimor,
  "saudi-arabia": SaudiArabia,
  oman: Oman,
  ukraine: Ukraine,
  lebanon: Lebanon,
  bahrain: Bahrain,
  kuwait: Kuwait,
  singapore: Singapore,
  malaysia: Malaysia,
  brunei: Brunei,
  taiwan: Taiwan,
  guatemala: Guatemala,
  honduras: Honduras,
  "el-salvador": ElSalvador,
  nicaragua: Nicaragua,
  "saint-lucia": SaintLucia,
  "saint-kitts-and-nevis": SaintKittsAndNevis,
  "antigua-and-barbuda": AntiguaAndBarbuda,
  bahamas: Bahamas,
  barbados: Barbados,
  dominica: Dominica,
  grenada: Grenada,
  "saint-vincent-and-the-grenadines": SaintVincentAndTheGrenadines,
  "dominican-republic": DominicanRepublic,
  samoa: Samoa,
  angola: Angola,
  benin: Benin,
  "burkina-faso": BurkinaFaso,
  libya: Libya,
  tunisia: Tunisia,
  eswatini: Eswatini,
  namibia: Namibia,
  zambia: Zambia,
  cameroon: Cameroon,
  "central-african-republic": CentralAfricanRepublic,
  chad: Chad,
  comoros: Comoros,
  "democratic-republic-of-the-congo": DemocraticRepublicOfTheCongo,
  "republic-of-the-congo": RepublicOfTheCongo,
  djibouti: Djibouti,
  "equatorial-guinea": EquatorialGuinea,
  gabon: Gabon,
  guinea: Guinea,
  "guinea-bissau": GuineaBissau,
  liberia: Liberia,
  madagascar: Madagascar,
  malawi: Malawi,
  mali: Mali,
  sudan: Sudan,
  "south-sudan": SouthSudan,
  tanzania: Tanzania,
  togo: Togo,
  mauritania: Mauritania,
  mauritius: Mauritius,
  mozambique: Mozambique,
  niger: Niger,
  senegal: Senegal,
  seychelles: Seychelles,
  "sierra-leone": SierraLeone,
  nigeria: Nigeria,
  rwanda: Rwanda,
  "sao-tome-and-principe": SaoTomeAndPrincipe,
  somalia: Somalia,
  "faroe-islands": FaroeIslands,
  aruba: Aruba,
  "sint-maarten": SintMaarten,
};

export function getEmblem(slug: string): EmblemComponent | null {
  return emblems[slug] ?? null;
}
