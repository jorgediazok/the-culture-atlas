import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Haka: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="200" cy="118" r="16" fill={light} />
      <path d="M200 134 v40 M200 150 L178 165 M200 150 L222 165" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <circle cx="192" cy="115" r="3" fill={dark} />
      <circle cx="208" cy="115" r="3" fill={dark} />
      <path d="M196 128 q4 4 8 0" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const SenorDeLosAnillos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="200" cy="175" rx="55" ry="20" fill={accentColor} />
      <path d="M175 175 a25 22 0 0 1 50 0 Z" fill={dark} />
      <rect x="192" y="170" width="16" height="20" fill={light} />
      <circle cx="200" cy="150" r="6" fill={light} />
    </g>
  );
};

const Kiwi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="30" ry="26" fill={accentColor} />
      <path d="M172 148 q-20 -4 -28 2" stroke={dark} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="180" cy="130" r="4" fill={light} />
    </g>
  );
};

const RugbyAllBlacks: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="38" ry="24" fill={accentColor} transform="rotate(-20 200 140)" />
      <path d="M175 120 L225 160 M225 120 L175 160" stroke={dark} strokeWidth="3" transform="rotate(-20 200 140)" />
      <circle cx="200" cy="118" r="4" fill={light} />
    </g>
  );
};

const Moko: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round">
      <path d="M170 130 q20 -10 20 20 q0 20 -14 30" />
      <path d="M230 130 q-20 -10 -20 20 q0 20 14 30" />
      <path d="M186 175 q14 8 28 0" stroke={dark} />
    </g>
  );
};

const Fiordos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon points="150,190 175,110 200,190" fill={dark} />
      <polygon points="200,190 225,120 250,190" fill={accentColor} />
      <rect x="210" y="150" width="5" height="40" fill={light} />
    </g>
  );
};

const Hangi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="175" rx="45" ry="16" fill={dark} />
      <circle cx="185" cy="170" r="9" fill={accentColor} />
      <circle cx="205" cy="172" r="8" fill={accentColor} />
      <circle cx="220" cy="168" r="7" fill={accentColor} />
      <path d="M180 150 q4 -12 -2 -20 M200 148 q4 -12 -2 -20" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const Sufragio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="175" y="150" width="50" height="40" rx="4" fill={accentColor} />
      <rect x="185" y="150" width="30" height="8" fill={dark} />
      <rect x="193" y="118" width="14" height="34" fill={light} />
    </g>
  );
};

const Bungee: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <line x1="200" y1="95" x2="200" y2="170" stroke={dark} strokeWidth="3" />
      <circle cx="200" cy="180" r="12" fill={accentColor} />
      <path d="M194 175 v-10 M206 175 v-10" stroke={light} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const CeroMamiferos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <ellipse cx="175" cy="150" rx="18" ry="14" fill={accentColor} />
      <ellipse cx="220" cy="140" rx="14" ry="11" fill={dark} />
      <ellipse cx="200" cy="168" rx="16" ry="12" fill={light} />
    </g>
  );
};

export const newZealandIllustrations: Record<string, IllustrationDefinition> = {
  haka: { component: Haka, variant: "medallion" },
  "senor-de-los-anillos": { component: SenorDeLosAnillos },
  kiwi: { component: Kiwi },
  "rugby-all-blacks": { component: RugbyAllBlacks },
  moko: { component: Moko, variant: "medallion" },
  fiordos: { component: Fiordos },
  hangi: { component: Hangi },
  sufragio: { component: Sufragio, variant: "medallion" },
  bungee: { component: Bungee },
  "cero-mamiferos": { component: CeroMamiferos },
};
