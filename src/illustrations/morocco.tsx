import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MedinaFez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="130" width="70" height="50" fill={light} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={180 + i * 20} cy="165" r="8" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
    </g>
  );
};

const Chefchaouen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="115" width="60" height="70" fill={accentColor} />
      <path d="M185 185 V150 Q185 135 200 135 Q215 135 215 150 V185 Z" fill={light} />
      <rect x="178" y="122" width="10" height="10" fill={dark} />
      <rect x="212" y="122" width="10" height="10" fill={dark} />
    </g>
  );
};

const TeMenta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="185" cy="140" rx="20" ry="16" fill={accentColor} />
      <path d="M205 138 q14 0 14 8 q0 6 -10 6" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <rect x="178" y="122" width="8" height="10" fill={dark} />
      <path d="M209 152 q3 15 3 28" stroke={light} strokeWidth="2" strokeDasharray="2 3" />
      <rect x="205" y="180" width="14" height="10" fill={light} />
    </g>
  );
};

const SaharaErgChebbi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 185 Q180 150 210 185 Z" fill={accentColor} />
      <path d="M190 185 Q220 140 250 185 Z" fill={light} />
      <path d="M225 175 q6 -14 12 0 q3 -8 6 0" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const AlfombrasBereberes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="130" width="70" height="45" fill={light} />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${180 + i * 20} 140 L${188 + i * 20} 152 L${180 + i * 20} 164 L${172 + i * 20} 152 Z`}
          fill={i % 2 === 0 ? accentColor : dark}
        />
      ))}
    </g>
  );
};

const Gnawa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="145" width="30" height="40" rx="6" fill={accentColor} />
      <rect x="192" y="110" width="6" height="40" fill={dark} />
      <path d="M186 150 v30 M195 148 v32 M204 150 v30" stroke={light} strokeWidth="1.6" />
    </g>
  );
};

const Tayin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="175" rx="30" ry="10" fill={dark} />
      <path d="M172 175 Q172 160 200 160 Q228 160 228 175 Z" fill={accentColor} />
      <path d="M188 160 Q200 120 212 160 Z" fill={light} />
    </g>
  );
};

const AtlasBereber: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 185 L180 130 L200 155 L220 120 L245 185 Z" fill={accentColor} />
      <rect x="185" y="160" width="14" height="25" fill={light} />
      <rect x="205" y="150" width="14" height="35" fill={dark} />
    </g>
  );
};

export const moroccoIllustrations: Record<string, IllustrationDefinition> = {
  "medina-fez": { component: MedinaFez },
  chefchaouen: { component: Chefchaouen },
  "te-menta": { component: TeMenta },
  "sahara-erg-chebbi": { component: SaharaErgChebbi },
  "alfombras-bereberes": { component: AlfombrasBereberes },
  gnawa: { component: Gnawa, variant: "medallion" },
  tayin: { component: Tayin, variant: "medallion" },
  "atlas-bereber": { component: AtlasBereber },
};
