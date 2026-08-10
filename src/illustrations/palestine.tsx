import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Tatreez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="160" y="115" width="80" height="60" fill={light} />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={172 + col * 18}
            y={128 + row * 16}
            width="10"
            height="10"
            fill={(row + col) % 2 === 0 ? accentColor : dark}
          />
        ))
      )}
    </g>
  );
};

const OlivosMilenarios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M195 190 q-4 -30 0 -40 q-14 -6 -10 -20 q10 4 12 12 q0 -18 6 -24 q4 10 2 22 q6 -10 16 -8 q-4 10 -12 14 q6 8 4 20 q6 -10 16 -8 q-6 12 -16 14 q2 10 -2 18 Z" fill={accentColor} />
      <rect x="196" y="182" width="6" height="10" fill={dark} />
      {[[178, 130], [222, 140], [200, 118]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill={light} />
      ))}
    </g>
  );
};

const Dabke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      {[172, 200, 228].map((x) => (
        <g key={x}>
          <circle cx={x} cy="120" r="9" fill={light} />
          <rect x={x - 6} y="130" width="12" height="35" fill={accentColor} />
          <line x1={x - 8} y1="180" x2={x - 3} y2="165" stroke={dark} strokeWidth="5" strokeLinecap="round" />
          <line x1={x + 8} y1="180" x2={x + 3} y2="165" stroke={dark} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const Keffiyeh: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.9);
  return (
    <g>
      <path d="M165 115 h70 l-15 65 h-40 Z" fill={light} stroke={accentColor} strokeWidth="3" />
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={170 + col * 13}
            y={122 + row * 13}
            width="9"
            height="9"
            fill={accentColor}
            opacity={(row + col) % 2 === 0 ? 0.9 : 0}
          />
        ))
      )}
    </g>
  );
};

const Maqluba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 150 a45 30 0 0 0 90 0 Z" fill={dark} />
      <ellipse cx="200" cy="150" rx="45" ry="13" fill={accentColor} />
      {[178, 200, 222].map((x) => (
        <circle key={x} cx={x} cy="146" r="6" fill={light} />
      ))}
    </g>
  );
};

const MahmoudDarwish: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M160 120 h75 v55 h-75 Z" fill={accentColor} />
      <line x1="197" y1="120" x2="197" y2="175" stroke={dark} strokeWidth="2" />
      <line x1="172" y1="135" x2="188" y2="135" stroke={light} strokeWidth="3" />
      <line x1="172" y1="148" x2="188" y2="148" stroke={light} strokeWidth="3" />
      <line x1="207" y1="135" x2="223" y2="135" stroke={light} strokeWidth="3" />
    </g>
  );
};

const JabonNablus: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[0, 1, 2].map((row) => (
        <rect key={row} x={180 - row * 3} y={165 - row * 16} width={40 + row * 6} height="14" rx="2" fill={row % 2 === 0 ? light : dark} />
      ))}
    </g>
  );
};

const BelenNatividad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <rect x="175" y="140" width="50" height="45" fill={accentColor} />
      <polygon points="170,140 230,140 200,110" fill={dark} />
      <path d="M200 118 l3 8 8 0 -6 5 2 8 -7 -5 -7 5 2 -8 -6 -5 8 0 Z" fill={light} />
    </g>
  );
};

const Handala: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="200" cy="118" r="14" fill={light} />
      <path d="M200 132 v40" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M188 150 q12 8 24 0" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <line x1="192" y1="172" x2="185" y2="192" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="208" y1="172" x2="215" y2="192" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const CeramicaJerusalen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <circle cx="200" cy="145" r="40" fill={light} stroke={accentColor} strokeWidth="4" />
      <circle cx="200" cy="145" r="10" fill={accentColor} />
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="200"
          cy="120"
          rx="5"
          ry="10"
          fill={dark}
          transform={`rotate(${deg} 200 145)`}
        />
      ))}
    </g>
  );
};

export const palestineIllustrations: Record<string, IllustrationDefinition> = {
  tatreez: { component: Tatreez },
  "olivos-milenarios": { component: OlivosMilenarios },
  dabke: { component: Dabke },
  keffiyeh: { component: Keffiyeh },
  maqluba: { component: Maqluba },
  "mahmoud-darwish": { component: MahmoudDarwish },
  "jabon-nablus": { component: JabonNablus },
  "belen-natividad": { component: BelenNatividad },
  handala: { component: Handala, variant: "medallion" },
  "ceramica-jerusalen": { component: CeramicaJerusalen, variant: "medallion" },
};
