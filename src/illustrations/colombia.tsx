import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Cafe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M165 130 h60 v35 a30 26 0 0 1 -60 0 Z" fill={accentColor} />
      <path d="M225 138 a16 14 0 0 1 0 28 h-6 v-28 Z" fill={dark} />
      <path d="M180 118 q6 -12 0 -20" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <path d="M198 118 q6 -12 0 -20" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const GarciaMarquez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="168" y="120" width="64" height="46" rx="4" fill={dark} />
      <rect x="176" y="128" width="48" height="6" fill={light} />
      <rect x="176" y="140" width="48" height="6" fill={light} />
      <rect x="176" y="152" width="30" height="6" fill={light} />
      <ellipse cx="255" cy="110" rx="8" ry="6" fill={accentColor} />
      <ellipse cx="270" cy="125" rx="8" ry="6" fill={accentColor} />
    </g>
  );
};

const Vallenato: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="115" width="34" height="50" rx="4" fill={accentColor} />
      <rect x="199" y="118" width="10" height="44" fill={dark} />
      {[124, 136, 148, 160].map((y) => (
        <circle key={y} cx="180" cy={y} r="3" fill={light} />
      ))}
      <rect x="215" y="130" width="26" height="30" rx="3" fill={dark} />
    </g>
  );
};

const Shakira: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M200 108 q30 4 20 45 q-6 20 -20 20 q-14 0 -20 -20 q-10 -41 20 -45 Z" fill={dark} />
      <circle cx="200" cy="140" r="22" fill={light} />
      <rect x="196" y="160" width="8" height="30" fill={accentColor} />
    </g>
  );
};

const Cartagena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="150" width="100" height="14" fill={dark} />
      <rect x="160" y="115" width="20" height="35" fill={accentColor} />
      <rect x="190" y="105" width="20" height="45" fill={light} />
      <rect x="220" y="120" width="20" height="30" fill={accentColor} />
      {[160, 190, 220].map((x) => (
        <rect key={x} x={x + 4} y="97" width="12" height="8" fill={dark} />
      ))}
    </g>
  );
};

const Esmeraldas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="200,100 225,120 216,168 184,168 175,120" fill={accentColor} />
      <polygon points="200,100 216,168 184,168" fill={dark} opacity="0.5" />
      <polygon points="188,116 212,116 200,100" fill={light} opacity="0.8" />
    </g>
  );
};

const CarnavalBarranquilla: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <path d="M200 110 a55 55 0 0 1 0 60 a55 55 0 0 1 0 -60" fill={accentColor} />
      <path d="M200 110 a55 55 0 0 0 0 60 a55 55 0 0 0 0 -60" fill={light} />
      <circle cx="200" cy="140" r="10" fill={dark} />
    </g>
  );
};

const Ciclismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.8);
  return (
    <g fill="none" stroke={dark} strokeWidth="5">
      <circle cx="175" cy="168" r="20" />
      <circle cx="225" cy="168" r="20" />
      <path d="M175 168 L200 130 L225 168 M200 130 L190 168 M200 130 L188 115" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M182 112 h16" strokeLinecap="round" />
      <circle cx="188" cy="115" r="4" fill={light} stroke="none" />
    </g>
  );
};

const Biodiversidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="205" cy="140" rx="14" ry="7" fill={accentColor} />
      <path d="M191 140 q-30 -20 -45 -8 q15 18 45 8 Z" fill={light} />
      <path d="M191 140 q-30 20 -45 8 q15 -18 45 -8 Z" fill={dark} />
      <circle cx="218" cy="136" r="5" fill={dark} />
      <path d="M223 133 l14 -18" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const Arepa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="48" ry="30" fill={accentColor} />
      <path d="M155 138 a45 28 0 0 0 90 0 Z" fill={dark} />
      <ellipse cx="200" cy="138" rx="40" ry="22" fill={light} />
    </g>
  );
};

export const colombiaIllustrations: Record<string, IllustrationDefinition> = {
  cafe: { component: Cafe },
  "garcia-marquez": { component: GarciaMarquez },
  vallenato: { component: Vallenato },
  shakira: { component: Shakira, variant: "medallion" },
  cartagena: { component: Cartagena },
  esmeraldas: { component: Esmeraldas, variant: "medallion" },
  "carnaval-barranquilla": { component: CarnavalBarranquilla, variant: "medallion" },
  ciclismo: { component: Ciclismo },
  biodiversidad: { component: Biodiversidad, variant: "medallion" },
  arepa: { component: Arepa },
};
