import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnicaMonarquiaPacifico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M172 175 L178 145 L190 160 L200 138 L210 160 L222 145 L228 175 Z" fill={accentColor} />
      <rect x="172" y="175" width="56" height="10" fill={dark} />
      <circle cx="200" cy="138" r="4" fill={light} />
    </g>
  );
};

const ErupcionHungaTonga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 185 h90 v-6 h-90 Z" fill={dark} />
      <path d="M192 179 Q188 140 198 110 Q205 140 208 179 Z" fill={accentColor} />
      <circle cx="200" cy="105" r="10" fill={light} opacity="0.8" />
    </g>
  );
};

const NadarConBallenas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 165 Q195 145 230 158 Q225 172 195 172 Q175 172 165 165 Z" fill={accentColor} />
      <path d="M230 158 L245 150 L242 165 Z" fill={dark} />
      <circle cx="180" cy="160" r="2" fill={light} />
    </g>
  );
};

const VakaNavegacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 178 Q165 170 175 170 L175 178 Z" fill={dark} />
      <path d="M225 178 Q225 170 215 170 L215 178 Z" fill={dark} />
      <rect x="175" y="168" width="50" height="6" fill={accentColor} />
      <path d="M198 168 L198 130 L215 145 Z" fill={light} />
    </g>
  );
};

const DomingoSagrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="178" y="130" width="44" height="50" fill={light} />
      <rect x="184" y="148" width="32" height="10" fill={accentColor} />
      <circle cx="200" cy="122" r="4" fill={dark} />
      <line x1="200" y1="126" x2="200" y2="130" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const NgatuTapa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="130" width="70" height="45" fill={light} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={175 + i * 20} y="140" width="12" height="12" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
    </g>
  );
};

const RugbyTonga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="14" ry="10" fill={accentColor} transform="rotate(-15 200 140)" />
      <rect x="196" y="150" width="8" height="20" fill={dark} />
      <rect x="188" y="170" width="24" height="6" fill={light} />
    </g>
  );
};

const PrimerPaisNuevoDia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 175 h90 v10 h-90 Z" fill={dark} />
      <path d="M155 175 Q200 175 245 175 Q200 135 155 175 Z" fill={accentColor} />
      <circle cx="200" cy="160" r="14" fill={light} />
    </g>
  );
};

const TuimalilaTortuga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="28" ry="18" fill={accentColor} />
      <circle cx="200" cy="160" r="14" fill={dark} opacity="0.4" />
      <circle cx="228" cy="155" r="8" fill={light} />
    </g>
  );
};

const RemesasTonga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="145" width="50" height="34" fill={accentColor} />
      <path d="M175 145 L200 165 L225 145" fill="none" stroke={light} strokeWidth="2" />
      <circle cx="200" cy="160" r="6" fill={dark} />
    </g>
  );
};

export const tongaIllustrations: Record<string, IllustrationDefinition> = {
  "unica-monarquia-pacifico": { component: UnicaMonarquiaPacifico, variant: "medallion" },
  "erupcion-hunga-tonga": { component: ErupcionHungaTonga },
  "nadar-con-ballenas": { component: NadarConBallenas },
  "vaka-navegacion": { component: VakaNavegacion },
  "domingo-sagrado": { component: DomingoSagrado, variant: "medallion" },
  "ngatu-tapa": { component: NgatuTapa },
  "rugby-tonga": { component: RugbyTonga, variant: "medallion" },
  "primer-pais-nuevo-dia": { component: PrimerPaisNuevoDia },
  "tuimalila-tortuga": { component: TuimalilaTortuga, variant: "medallion" },
  "remesas-tonga": { component: RemesasTonga },
};
