import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PuertaAlInfierno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <ellipse cx="200" cy="170" rx="42" ry="14" fill={dark} />
      <path d="M180 170 q4 -20 -4 -34 M195 170 q6 -26 -2 -40 M212 170 q6 -20 -2 -34" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M188 170 q4 -12 -2 -20 M205 170 q4 -14 -1 -22" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const CaballosAkhalTeke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 175 Q175 140 200 135 Q220 133 225 150 L215 155 Q210 145 200 148 Q185 152 182 175 Z" fill={accentColor} />
      <path d="M200 135 L212 118 L216 124 L206 138 Z" fill={dark} />
      <circle cx="211" cy="122" r="2.5" fill={light} />
    </g>
  );
};

const AsjabatMarmolBlanco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="165" y="140" width="25" height="45" fill={light} />
      <rect x="195" y="120" width="25" height="65" fill={accentColor} />
      <rect x="225" y="150" width="20" height="35" fill={dark} />
    </g>
  );
};

const Ruhnama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M170 130 h30 v50 h-30 Z" fill={accentColor} />
      <path d="M200 130 h30 v50 h-30 Z" fill={dark} />
      <line x1="200" y1="130" x2="200" y2="180" stroke={light} strokeWidth="2" />
    </g>
  );
};

const NeutralidadPermanente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 115 q-25 10 -25 40 q0 15 25 30 q25 -15 25 -30 q0 -30 -25 -40 Z" fill="none" stroke={accentColor} strokeWidth="4" />
      <path d="M185 145 q8 10 15 -5 M200 155 q8 8 14 -4" stroke={dark} strokeWidth="3" fill="none" />
      <circle cx="200" cy="140" r="4" fill={light} />
    </g>
  );
};

const AntiguaMerv: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 180 h60 v-15 a30 25 0 0 0 -60 0 Z" fill={accentColor} />
      <rect x="185" y="150" width="10" height="30" fill={dark} />
      <circle cx="200" cy="140" r="5" fill={light} />
    </g>
  );
};

const AlfombrasTurcomanas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="165" y="130" width="70" height="45" fill={accentColor} />
      <rect x="175" y="140" width="50" height="25" fill="none" stroke={light} strokeWidth="3" />
      <rect x="188" y="148" width="24" height="9" fill={dark} />
    </g>
  );
};

const ReservasDeGas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="150" width="16" height="35" fill={dark} />
      <path d="M200 110 q-14 20 -6 32 q3 6 6 6 q3 0 6 -6 q8 -12 -6 -32 Z" fill={accentColor} />
      <path d="M200 130 q-6 10 -2 16 q2 3 2 3 q0 0 2 -3 q4 -6 -2 -16 Z" fill={light} />
    </g>
  );
};

const CultoALaPersonalidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="193" y="140" width="14" height="45" fill={dark} />
      <circle cx="200" cy="125" r="15" fill={accentColor} />
      <circle cx="200" cy="125" r="15" fill="none" stroke={light} strokeWidth="2" />
    </g>
  );
};

const CulturaNomadaTurcomana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 180 a35 30 0 0 1 70 0 Z" fill={accentColor} />
      <path d="M165 180 a35 30 0 0 1 70 0" fill="none" stroke={dark} strokeWidth="3" />
      <rect x="192" y="165" width="16" height="15" fill={light} />
    </g>
  );
};

export const turkmenistanIllustrations: Record<string, IllustrationDefinition> = {
  "puerta-al-infierno": { component: PuertaAlInfierno },
  "caballos-akhal-teke": { component: CaballosAkhalTeke, variant: "medallion" },
  "asjabat-marmol-blanco": { component: AsjabatMarmolBlanco },
  ruhnama: { component: Ruhnama },
  "neutralidad-permanente": { component: NeutralidadPermanente, variant: "medallion" },
  "antigua-merv": { component: AntiguaMerv },
  "alfombras-turcomanas": { component: AlfombrasTurcomanas },
  "reservas-de-gas": { component: ReservasDeGas, variant: "medallion" },
  "culto-a-la-personalidad": { component: CultoALaPersonalidad },
  "cultura-nomada-turcomana": { component: CulturaNomadaTurcomana },
};
