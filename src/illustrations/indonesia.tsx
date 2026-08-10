import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Borobudur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2, 3].map((row) => (
        <rect key={row} x={175 + row * 6} y={110 + row * 16} width={50 - row * 12} height="14" fill={row % 2 === 0 ? accentColor : dark} />
      ))}
      <circle cx="200" cy="106" r="5" fill={light} />
    </g>
  );
};

const WayangKulit: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="160" y="110" width="80" height="60" fill={light} opacity="0.5" />
      <path d="M195 120 h10 v25 l10 15 h-30 l10 -15 Z" fill={dark} />
      <circle cx="200" cy="128" r="5" fill={accentColor} />
    </g>
  );
};

const DragonKomodo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 175 Q180 150 210 155 Q235 158 240 145" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <path d="M240 145 l8 -6 l-2 8 l6 -2 l-6 8 Z" fill={dark} />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${185 + i * 12} 150 l4 -8 l4 8 Z`} fill={light} />
      ))}
    </g>
  );
};

const Batik: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="120" width="70" height="55" fill={light} />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <circle key={`${row}-${col}`} cx={180 + col * 20} cy={135 + row * 18} r="5" fill={col % 2 === 0 ? accentColor : dark} />
        ))
      )}
    </g>
  );
};

const Archipielago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="155" y="170" width="90" height="15" fill={light} />
      <ellipse cx="175" cy="163" rx="14" ry="8" fill={accentColor} />
      <ellipse cx="205" cy="168" rx="10" ry="6" fill={dark} />
      <ellipse cx="228" cy="162" rx="12" ry="7" fill={accentColor} />
    </g>
  );
};

const Gamelan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="160" width="70" height="10" fill={dark} />
      {[0, 1, 2, 3].map((i) => (
        <ellipse key={i} cx={178 + i * 16} cy="145" rx="8" ry={10 + (i % 2) * 4} fill={i % 2 === 0 ? accentColor : light} />
      ))}
    </g>
  );
};

const AnilloDeFuego: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 185 L200 120 L235 185 Z" fill={dark} />
      <path d="M195 140 q5 -10 10 0 q3 6 -2 10 q-8 4 -8 -10 Z" fill={accentColor} />
      <circle cx="200" cy="118" r="5" fill={light} opacity="0.8" />
    </g>
  );
};

const Rendang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="200" cy="165" rx="40" ry="18" fill={dark} />
      <ellipse cx="200" cy="158" rx="34" ry="12" fill={accentColor} />
      <path d="M180 150 q5 -10 0 -18 M210 150 q5 -10 0 -18" stroke={light} strokeWidth="2" fill="none" />
    </g>
  );
};

const BaliHindu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 110 C210 130 225 140 200 165 C175 140 190 130 200 110 Z" fill={accentColor} />
      <path d="M200 125 C206 136 214 142 200 158 C186 142 194 136 200 125 Z" fill={light} />
      <rect x="185" y="170" width="30" height="10" fill={dark} />
    </g>
  );
};

const BuluTangkis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="190" cy="140" rx="22" ry="26" fill="none" stroke={accentColor} strokeWidth="5" />
      <rect x="188" y="164" width="4" height="25" fill={dark} />
      <path d="M225 120 l10 -15 l3 6 l7 -2 l-8 15 Z" fill={light} />
    </g>
  );
};

export const indonesiaIllustrations: Record<string, IllustrationDefinition> = {
  borobudur: { component: Borobudur },
  "wayang-kulit": { component: WayangKulit },
  "dragon-komodo": { component: DragonKomodo },
  batik: { component: Batik, variant: "medallion" },
  archipielago: { component: Archipielago },
  gamelan: { component: Gamelan },
  "anillo-de-fuego": { component: AnilloDeFuego },
  rendang: { component: Rendang, variant: "medallion" },
  "bali-hindu": { component: BaliHindu },
  "bulu-tangkis": { component: BuluTangkis },
};
