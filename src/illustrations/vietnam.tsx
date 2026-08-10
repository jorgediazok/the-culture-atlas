import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Pho: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 150 a45 32 0 0 0 90 0 Z" fill={dark} />
      <ellipse cx="200" cy="150" rx="45" ry="13" fill={accentColor} />
      <path d="M175 145 q8 -10 16 0 q8 -10 16 0 q8 -10 16 0" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
      <path d="M185 122 q6 -12 0 -20" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </g>
  );
};

const AoDai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M188 105 h24 l10 90 h-44 Z" fill={accentColor} />
      <path d="M178 195 l14 -40 h16 l14 40 Z" fill={dark} />
      <circle cx="200" cy="95" r="10" fill={light} />
    </g>
  );
};

const HaLongBay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="150,190 165,130 180,190" fill={accentColor} />
      <polygon points="185,190 200,110 215,190" fill={dark} />
      <polygon points="220,190 235,140 250,190" fill={light} />
    </g>
  );
};

const CafeConHuevo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <path d="M170 145 h60 v30 a30 22 0 0 1 -60 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="145" rx="30" ry="10" fill={light} />
      <path d="M230 150 a14 12 0 0 1 0 24 h-4 v-24 Z" fill={dark} />
    </g>
  );
};

const NonLa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <path d="M155 175 q45 -60 90 0 Z" fill={accentColor} />
      <path d="M165 172 q35 -42 70 0" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <circle cx="200" cy="128" r="5" fill={light} />
    </g>
  );
};

const TunelCuChi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="175" rx="30" ry="12" fill={dark} />
      <ellipse cx="200" cy="172" rx="20" ry="8" fill="#1a1712" />
      <path d="M170 160 q-10 -30 20 -40 M230 160 q10 -30 -20 -40" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const Tet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="178" y="130" width="44" height="56" rx="4" fill={accentColor} />
      <circle cx="200" cy="158" r="10" fill={light} />
      <path d="M200 130 q-14 -20 -26 -14 M200 130 q14 -20 26 -14" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const MotoHanoi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="175" cy="182" r="12" fill="none" stroke={dark} strokeWidth="5" />
      <circle cx="225" cy="182" r="12" fill="none" stroke={dark} strokeWidth="5" />
      <path d="M175 182 L195 150 L225 182 M195 150 L205 130" stroke={accentColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="180" y="128" width="20" height="16" rx="3" fill={light} />
    </g>
  );
};

const BanhMi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 155 a45 22 0 0 1 90 0 a45 22 0 0 1 -90 0 Z" fill={accentColor} />
      <path d="M165 152 a35 15 0 0 1 70 0" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      <path d="M170 150 l6 -8 M190 148 l6 -8 M210 148 l6 -8 M228 150 l6 -8" stroke={light} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const ArrozalesTerrazas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <polygon points="150,190 250,190 235,170 165,170" fill={dark} />
      <polygon points="165,170 235,170 222,150 178,150" fill={accentColor} />
      <polygon points="178,150 222,150 210,132 190,132" fill={light} />
    </g>
  );
};

export const vietnamIllustrations: Record<string, IllustrationDefinition> = {
  pho: { component: Pho },
  "ao-dai": { component: AoDai },
  "ha-long-bay": { component: HaLongBay },
  "cafe-con-huevo": { component: CafeConHuevo },
  "non-la": { component: NonLa },
  "tunel-cu-chi": { component: TunelCuChi },
  tet: { component: Tet, variant: "medallion" },
  "moto-hanoi": { component: MotoHanoi },
  "banh-mi": { component: BanhMi },
  "arrozales-terrazas": { component: ArrozalesTerrazas },
};
