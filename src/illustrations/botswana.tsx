import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DeltaOkavango: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 175 Q180 165 200 175 Q220 185 245 175" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M160 160 Q185 150 205 160 Q225 168 240 158" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
      <path d="M180 150 v-20 M190 150 v-24 M200 150 v-18" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const DiamantesBotswana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 140 L225 140 L200 115 Z" fill={accentColor} />
      <path d="M200 115 L225 140 L200 185 L175 140 Z" fill={light} />
      <path d="M200 115 L200 185 M175 140 L225 140" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const SanKalahari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 120 Q165 150 180 180" fill="none" stroke={accentColor} strokeWidth="4" />
      <line x1="180" y1="120" x2="180" y2="180" stroke={dark} strokeWidth="1.6" />
      <line x1="180" y1="150" x2="230" y2="150" stroke={light} strokeWidth="3" strokeLinecap="round" />
      <path d="M230 150 L220 145 M230 150 L220 155" stroke={light} strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
};

const ElefantesBotswana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="205" cy="160" rx="30" ry="20" fill={accentColor} />
      <path d="M180 145 C165 143 158 155 165 165 Q175 162 180 145 Z" fill={dark} />
      <path d="M172 155 C164 160 162 175 170 183 Q176 178 176 155 Z" fill={light} />
    </g>
  );
};

const Kgotla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="196" y="150" width="8" height="35" fill={dark} />
      <circle cx="200" cy="135" r="28" fill={accentColor} />
      <circle cx="200" cy="135" r="18" fill={light} />
      {[175, 195, 215].map((x) => (
        <circle key={x} cx={x} cy="185" r="4" fill={dark} />
      ))}
    </g>
  );
};

const ChobeSafari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="150" r="20" fill={dark} />
      <circle cx="200" cy="150" r="12" fill={light} />
      <ellipse cx="200" cy="175" rx="26" ry="10" fill={accentColor} />
    </g>
  );
};

const SeretseKhama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 175 L180 145 L192 160 L200 138 L208 160 L220 145 L225 175 Z" fill={accentColor} />
      <rect x="175" y="175" width="50" height="10" fill={dark} />
      <circle cx="200" cy="138" r="4" fill={light} />
    </g>
  );
};

const BasarwaArte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="120" width="70" height="55" fill={light} />
      <path d="M180 160 L190 140 L200 155 L210 135 L220 160" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="195" cy="130" r="3" fill={accentColor} />
      <circle cx="215" cy="145" r="3" fill={accentColor} />
    </g>
  );
};

export const botswanaIllustrations: Record<string, IllustrationDefinition> = {
  "delta-okavango": { component: DeltaOkavango },
  "diamantes-botswana": { component: DiamantesBotswana, variant: "medallion" },
  "san-kalahari": { component: SanKalahari },
  "elefantes-botswana": { component: ElefantesBotswana },
  kgotla: { component: Kgotla },
  "chobe-safari": { component: ChobeSafari, variant: "medallion" },
  "seretse-khama": { component: SeretseKhama, variant: "medallion" },
  "basarwa-arte": { component: BasarwaArte },
};
