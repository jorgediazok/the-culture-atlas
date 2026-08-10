import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LandDivingPentecost: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 185 L185 115 L195 185 M205 185 L215 115 L225 185" stroke={dark} strokeWidth="4" fill="none" />
      <line x1="185" y1="115" x2="215" y2="115" stroke={dark} strokeWidth="4" />
      <path d="M200 120 q-3 25 0 50" stroke={accentColor} strokeWidth="2" fill="none" />
      <circle cx="200" cy="172" r="6" fill={light} />
    </g>
  );
};

const CultoCargoJohnFrum: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="197" y="150" width="6" height="35" fill={dark} />
      <rect x="203" y="150" width="26" height="16" fill={light} />
      <rect x="180" y="172" width="8" height="14" fill={accentColor} />
    </g>
  );
};

const PaisMasFelizPlaneta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="150" r="24" fill={accentColor} />
      <path d="M188 155 q12 12 24 0" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" />
      <circle cx="191" cy="144" r="2.4" fill={dark} />
      <circle cx="209" cy="144" r="2.4" fill={dark} />
    </g>
  );
};

const VolcanYasur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 185 L200 130 L240 185 Z" fill={dark} />
      <path d="M190 145 L200 130 L210 145 L200 155 Z" fill={accentColor} />
      <circle cx="200" cy="120" r="6" fill={light} />
    </g>
  );
};

const IdiomasVanuatu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="185" cy="150" r="18" fill={accentColor} />
      <circle cx="215" cy="160" r="14" fill={light} />
      <circle cx="195" cy="175" r="10" fill={dark} />
    </g>
  );
};

const MusicaAguaMujeres: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 180 Q200 170 245 180 L245 185 L155 185 Z" fill={accentColor} />
      <path d="M180 170 q4 -10 8 0 M200 165 q4 -12 8 0 M218 172 q4 -10 8 0" stroke={light} strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </g>
  );
};

const BislamaIdioma: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 130 h60 v30 h-40 l-10 10 v-10 h-10 Z" fill={accentColor} />
      <line x1="180" y1="140" x2="220" y2="140" stroke={light} strokeWidth="2.4" />
      <line x1="180" y1="150" x2="210" y2="150" stroke={light} strokeWidth="2.4" />
    </g>
  );
};

const BuceoPresidentCoolidge: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 170 L240 170 L228 182 L172 182 Z" fill={accentColor} />
      <rect x="190" y="145" width="6" height="25" fill={dark} />
      <rect x="205" y="150" width="6" height="20" fill={dark} />
      <circle cx="220" cy="175" r="3" fill={light} />
    </g>
  );
};

const IndependenciaCondominio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="193" y="120" width="4" height="55" fill={dark} />
      <rect x="197" y="125" width="26" height="16" fill={accentColor} />
      <rect x="169" y="141" width="24" height="16" fill={light} />
    </g>
  );
};

const VulnerabilidadDesastres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 185 v-20 h40 v20 Z" fill={light} />
      <path d="M175 165 L200 145 L225 165 Z" fill={dark} />
      <ellipse cx="200" cy="125" rx="24" ry="12" fill={accentColor} />
    </g>
  );
};

export const vanuatuIllustrations: Record<string, IllustrationDefinition> = {
  "land-diving-pentecost": { component: LandDivingPentecost },
  "culto-cargo-john-frum": { component: CultoCargoJohnFrum },
  "pais-mas-feliz-planeta": { component: PaisMasFelizPlaneta, variant: "medallion" },
  "volcan-yasur": { component: VolcanYasur },
  "idiomas-vanuatu": { component: IdiomasVanuatu },
  "musica-agua-mujeres": { component: MusicaAguaMujeres },
  "bislama-idioma": { component: BislamaIdioma, variant: "medallion" },
  "buceo-president-coolidge": { component: BuceoPresidentCoolidge },
  "independencia-condominio": { component: IndependenciaCondominio },
  "vulnerabilidad-desastres": { component: VulnerabilidadDesastres },
};
