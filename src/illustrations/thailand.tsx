import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Wai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M200 100 L182 175 L200 190 L218 175 Z" fill={accentColor} />
      <path d="M200 100 L200 190" stroke={dark} strokeWidth="3" />
      <circle cx="200" cy="95" r="8" fill={light} />
    </g>
  );
};

const MuayThai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="200" cy="120" r="14" fill={light} />
      <path d="M200 134 v30 M200 150 L175 130 M200 150 L225 130 M200 164 L180 195 M200 164 L220 195" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <circle cx="175" cy="130" r="8" fill={accentColor} />
      <circle cx="225" cy="130" r="8" fill={accentColor} />
    </g>
  );
};

const PadThai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 165 a50 26 0 0 0 100 0 Z" fill={dark} />
      <ellipse cx="200" cy="165" rx="50" ry="14" fill={accentColor} />
      <path d="M170 158 q10 -8 20 0 q10 -8 20 0 q10 -8 20 0" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
      <circle cx="180" cy="148" r="4" fill={light} />
      <circle cx="220" cy="150" r="4" fill={light} />
    </g>
  );
};

const TemplosDorados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="200,90 216,120 184,120" fill={light} />
      <polygon points="180,120 220,120 232,150 168,150" fill={accentColor} />
      <polygon points="165,150 235,150 250,190 150,190" fill={dark} />
    </g>
  );
};

const Songkran: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="150" r="24" fill={light} />
      <path d="M170 110 q6 12 0 20 M190 100 q6 12 0 20 M212 100 q6 12 0 20 M230 110 q6 12 0 20" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <circle cx="170" cy="140" r="3" fill={dark} />
      <circle cx="230" cy="140" r="3" fill={dark} />
    </g>
  );
};

const Elefantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="195" cy="150" rx="38" ry="26" fill={accentColor} />
      <path d="M225 150 q22 6 18 30" fill="none" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <circle cx="220" cy="128" r="9" fill={light} />
      <path d="M160 150 a15 15 0 0 0 0 20" fill={dark} />
    </g>
  );
};

const MercadosFlotantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 175 q40 -14 80 0 l-8 15 h-64 Z" fill={accentColor} />
      <circle cx="185" cy="160" r="9" fill={dark} />
      <circle cx="205" cy="158" r="7" fill={light} />
      <circle cx="215" cy="165" r="6" fill={dark} />
    </g>
  );
};

const Monarquia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M170 165 h60 v10 h-60 Z" fill={dark} />
      <path d="M170 165 l6 -30 20 18 4 -30 4 30 20 -18 6 30 Z" fill={accentColor} />
      <circle cx="200" cy="122" r="6" fill={light} />
    </g>
  );
};

const Durian: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="36" ry="30" fill={accentColor} />
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const x1 = 200 + Math.cos(angle) * 36;
        const y1 = 150 + Math.sin(angle) * 30;
        const x2 = 200 + Math.cos(angle) * 46;
        const y2 = 150 + Math.sin(angle) * 40;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={dark} strokeWidth="3" strokeLinecap="round" />;
      })}
      <ellipse cx="200" cy="150" rx="14" ry="12" fill={light} />
    </g>
  );
};

const TukTuk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M165 175 a35 15 0 0 1 70 0 Z" fill={accentColor} />
      <rect x="170" y="150" width="60" height="25" rx="6" fill={light} />
      <circle cx="180" cy="180" r="8" fill={dark} />
      <circle cx="220" cy="180" r="8" fill={dark} />
    </g>
  );
};

export const thailandIllustrations: Record<string, IllustrationDefinition> = {
  wai: { component: Wai, variant: "medallion" },
  "muay-thai": { component: MuayThai },
  "pad-thai": { component: PadThai },
  "templos-dorados": { component: TemplosDorados },
  songkran: { component: Songkran, variant: "medallion" },
  elefantes: { component: Elefantes },
  "mercados-flotantes": { component: MercadosFlotantes },
  monarquia: { component: Monarquia, variant: "medallion" },
  durian: { component: Durian, variant: "medallion" },
  "tuk-tuk": { component: TukTuk },
};
