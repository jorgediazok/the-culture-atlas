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
};

export function getEmblem(slug: string): EmblemComponent | null {
  return emblems[slug] ?? null;
}
