import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Mandela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon points="180,190 220,190 225,225 175,225" fill={dark} />
      <path d="M190 190 v-20 a10 10 0 0 1 20 0 v20" fill="none" stroke={dark} strokeWidth="8" />
      <circle cx="200" cy="150" r="4" fill={light} />
    </g>
  );
};

const RugbySpringboks: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="38" ry="24" fill={accentColor} transform="rotate(-20 200 140)" />
      <path d="M175 120 L225 160 M225 120 L175 160" stroke={dark} strokeWidth="3" transform="rotate(-20 200 140)" />
      <rect x="192" y="170" width="16" height="22" fill={light} />
    </g>
  );
};

const KrugerSafari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="150" y="150" width="60" height="30" rx="6" fill={accentColor} />
      <circle cx="165" cy="184" r="9" fill={dark} />
      <circle cx="195" cy="184" r="9" fill={dark} />
      <path d="M225 190 q-10 -50 20 -60 q-6 30 4 45 Z" fill={light} />
    </g>
  );
};

const TableMountain: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon points="145,190 160,120 240,120 255,190" fill={accentColor} />
      <rect x="155" y="115" width="90" height="8" fill={dark} />
      <rect x="197" y="90" width="6" height="25" fill={light} />
      <circle cx="200" cy="86" r="5" fill={light} />
    </g>
  );
};

const OnceIdiomas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <path d="M155 115 h60 a10 10 0 0 1 10 10 v22 a10 10 0 0 1 -10 10 h-38 l-14 14 v-14 h-8 a10 10 0 0 1 -10 -10 v-22 a10 10 0 0 1 10 -10 Z" fill={accentColor} />
      <path d="M215 150 h55 a10 10 0 0 1 10 10 v18 a10 10 0 0 1 -10 10 h-6 v12 l-14 -12 h-35 a10 10 0 0 1 -10 -10 v-18 a10 10 0 0 1 10 -10 Z" fill={dark} />
      <circle cx="178" cy="136" r="4" fill={light} />
      <circle cx="192" cy="136" r="4" fill={light} />
    </g>
  );
};

const Braai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="155" y="155" width="90" height="10" rx="4" fill={dark} />
      <path d="M170 155 q10 -20 -4 -34 M195 155 q10 -20 -4 -34 M220 155 q10 -20 -4 -34" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M165 165 q6 12 0 20 M235 165 q6 12 0 20" fill="none" stroke={light} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const RainbowNation: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g fill="none" strokeWidth="7" strokeLinecap="round">
      <path d="M150 110 a60 60 0 0 1 100 0" stroke={accentColor} />
      <path d="M158 128 a48 48 0 0 1 84 0" stroke={dark} />
      <path d="M166 146 a36 36 0 0 1 68 0" stroke={light} />
    </g>
  );
};

const Rooibos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M170 150 a30 22 0 0 0 60 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="150" rx="30" ry="9" fill={light} />
      <rect x="163" y="170" width="10" height="14" fill={dark} />
      <rect x="227" y="170" width="10" height="14" fill={dark} />
      <path d="M188 118 q6 -12 0 -20" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const DiamantesKimberley: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <circle cx="200" cy="160" r="42" fill={dark} />
      <circle cx="200" cy="160" r="30" fill={accentColor} />
      <polygon points="200,105 216,125 184,125" fill={light} />
      <polygon points="188,110 212,110 200,95" fill={light} opacity="0.8" />
    </g>
  );
};

const MiriamMakeba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="20" ry="28" fill={accentColor} />
      <circle cx="200" cy="114" r="15" fill={light} />
      <rect x="196" y="178" width="8" height="16" fill={dark} />
      <circle cx="225" cy="100" r="4" fill={light} />
      <circle cx="180" cy="95" r="3" fill={light} />
    </g>
  );
};

export const southAfricaIllustrations: Record<string, IllustrationDefinition> = {
  mandela: { component: Mandela },
  "rugby-springboks": { component: RugbySpringboks },
  "kruger-safari": { component: KrugerSafari },
  "table-mountain": { component: TableMountain },
  "once-idiomas": { component: OnceIdiomas, variant: "medallion" },
  braai: { component: Braai },
  "rainbow-nation": { component: RainbowNation, variant: "medallion" },
  rooibos: { component: Rooibos },
  "diamantes-kimberley": { component: DiamantesKimberley, variant: "medallion" },
  "miriam-makeba": { component: MiriamMakeba, variant: "medallion" },
};
