import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Mate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 140 a20 24 0 1 0 40 0 a20 24 0 1 0 -40 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="140" rx="16" ry="8" fill={light} />
      <line x1="205" y1="135" x2="225" y2="105" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const PepeMujica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M175 130 a25 12 0 1 0 50 0 a25 12 0 1 0 -50 0 Z" fill={accentColor} />
      <rect x="160" y="165" width="80" height="20" rx="6" fill={dark} />
      <circle cx="185" cy="175" r="9" fill={light} />
      <circle cx="215" cy="175" r="9" fill={light} />
    </g>
  );
};

const Mundial1930: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M185 150 a15 20 0 1 0 30 0 v15 h-30 Z" fill={light} />
      <rect x="192" y="165" width="16" height="20" fill={dark} />
      <rect x="180" y="185" width="40" height="8" rx="3" fill={accentColor} />
    </g>
  );
};

const CarnavalMontevideo: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  const dark = shade(accentColor, 0.3);
  const angles = [-55, -33, -11, 11, 33, 55];
  return (
    <g>
      {angles.map((deg, i) => (
        <rect
          key={deg}
          x="196"
          y="78"
          width="8"
          height="48"
          rx="4"
          fill={i % 2 === 0 ? accentColor : light}
          transform={`rotate(${deg} 200 140)`}
        />
      ))}
      <circle cx="200" cy="148" r="22" fill={dark} />
    </g>
  );
};

const PuntaDelEste: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="185" rx="55" ry="10" fill={light} />
      {[-20, -8, 4, 16, 28].map((dx, i) => (
        <rect key={dx} x={200 + dx} y={130 - (i % 2) * 12} width="8" height={55 + (i % 2) * 12} rx="4" fill={accentColor} />
      ))}
      <ellipse cx="200" cy="128" rx="30" ry="8" fill={dark} />
    </g>
  );
};

const ColoniaSacramento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="150" width="100" height="40" fill={light} />
      <rect x="205" y="105" width="10" height="55" fill={dark} />
      <circle cx="210" cy="100" r="8" fill={accentColor} />
      <rect x="160" y="160" width="18" height="20" fill={accentColor} />
    </g>
  );
};

const AsadoUruguayo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="155" y="155" width="90" height="10" rx="4" fill={dark} />
      <path d="M170 155 q10 -20 -4 -34 M195 155 q10 -20 -4 -34 M220 155 q10 -20 -4 -34" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M165 165 q6 12 0 20 M235 165 q6 12 0 20" fill="none" stroke={light} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const LegalizacionMarihuana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 105 C210 125 225 130 200 150 C175 130 190 125 200 105 Z" fill={accentColor} />
      <path d="M200 120 C207 132 216 135 200 148 C184 135 193 132 200 120 Z" fill={light} />
      <line x1="200" y1="148" x2="200" y2="180" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const EduardoGaleano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M160 120 h80 v55 h-80 Z" fill={accentColor} />
      <line x1="200" y1="120" x2="200" y2="175" stroke={dark} strokeWidth="2" />
      <path d="M175 135 q10 15 0 30 M225 135 q-10 15 0 30" fill="none" stroke={light} strokeWidth="3" />
    </g>
  );
};

const RamblaMontevideo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 160 q50 -30 100 0 Z" fill={light} />
      <path d="M150 165 q50 -25 100 0 l0 10 q-50 -20 -100 0 Z" fill={accentColor} />
      <circle cx="220" cy="110" r="14" fill={dark} />
    </g>
  );
};

export const uruguayIllustrations: Record<string, IllustrationDefinition> = {
  mate: { component: Mate, variant: "medallion" },
  "pepe-mujica": { component: PepeMujica },
  "mundial-1930": { component: Mundial1930 },
  "carnaval-montevideo": { component: CarnavalMontevideo, variant: "medallion" },
  "punta-del-este": { component: PuntaDelEste },
  "colonia-sacramento": { component: ColoniaSacramento },
  "asado-uruguayo": { component: AsadoUruguayo },
  "legalizacion-marihuana": { component: LegalizacionMarihuana, variant: "medallion" },
  "eduardo-galeano": { component: EduardoGaleano },
  "rambla-montevideo": { component: RamblaMontevideo },
};
