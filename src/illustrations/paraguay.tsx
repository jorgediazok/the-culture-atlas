import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RepresaItaipu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="160" y="120" width="80" height="20" fill={dark} />
      <path d="M170 140 q0 25 -6 45 h14 q4 -20 4 -45 Z" fill={light} />
      <path d="M215 140 q0 25 8 45 h14 q-6 -20 -8 -45 Z" fill={accentColor} />
    </g>
  );
};

const YerbaMateOrigen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 140 a20 24 0 1 0 40 0 a20 24 0 1 0 -40 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="140" rx="16" ry="8" fill={light} />
      <line x1="205" y1="135" x2="222" y2="108" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const LenguaGuarani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 130 h45 v26 h-16 l-8 11 v-11 h-21 Z" fill={accentColor} />
      <path d="M212 150 h30 v20 h-11 l-6 9 v-9 h-13 Z" fill={light} />
      <circle cx="182" cy="143" r="2.5" fill={dark} />
      <circle cx="193" cy="143" r="2.5" fill={dark} />
    </g>
  );
};

const GuerraTripleAlianza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="193" y="110" width="6" height="65" fill={dark} />
      <path d="M199 112 L235 122 L199 138 Z" fill={accentColor} />
      <path d="M199 138 L225 148 L199 158 Z" fill={light} opacity="0.6" />
    </g>
  );
};

const Nanduti: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <circle cx="200" cy="148" r="30" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="200" cy="148" r="20" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="200" cy="148" r="10" fill="none" stroke={accentColor} strokeWidth="2" />
      {[0, 45, 90, 135].map((deg) => (
        <line key={deg} x1="200" y1="118" x2="200" y2="178" stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 200 148)`} />
      ))}
    </g>
  );
};

const ReduccionesJesuiticas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="150" width="70" height="30" fill={light} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={172 + i * 16} y="130" width="8" height="20" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <path d="M160 150 h80 l-10 -12 h-60 Z" fill={dark} />
    </g>
  );
};

const Chipa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={180 + i * 20} cy="155" r="14" fill="none" stroke={i % 2 === 0 ? accentColor : dark} strokeWidth="10" />
      ))}
      <circle cx="200" cy="130" r="6" fill={light} />
    </g>
  );
};

const ArpaParaguaya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 175 Q170 120 210 110 Q220 140 210 175 Z" fill={dark} />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={182 + i * 6} y1="172" x2={195 + i * 3} y2="118" stroke={light} strokeWidth="1.5" />
      ))}
      <ellipse cx="205" cy="175" rx="20" ry="6" fill={accentColor} />
    </g>
  );
};

const ChacoParaguayo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="160" y="175" width="80" height="10" fill={dark} />
      <path d="M180 175 v-30 q0 -8 6 -8 q6 0 6 8 v30 M195 175 v-45 q0 -8 6 -8 q6 0 6 8 v45" stroke={accentColor} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M215 175 v-20 q0 -6 5 -6 q5 0 5 6 v20" stroke={light} strokeWidth="5" fill="none" strokeLinecap="round" />
    </g>
  );
};

const RioParaguay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 165 Q200 145 245 165 L245 185 Q200 165 155 185 Z" fill={light} />
      <rect x="185" y="145" width="30" height="16" rx="2" fill={accentColor} />
      <rect x="195" y="135" width="10" height="12" fill={dark} />
    </g>
  );
};

export const paraguayIllustrations: Record<string, IllustrationDefinition> = {
  "represa-itaipu": { component: RepresaItaipu },
  "yerba-mate-origen": { component: YerbaMateOrigen, variant: "medallion" },
  "lengua-guarani": { component: LenguaGuarani },
  "guerra-triple-alianza": { component: GuerraTripleAlianza },
  nanduti: { component: Nanduti, variant: "medallion" },
  "reducciones-jesuiticas": { component: ReduccionesJesuiticas },
  chipa: { component: Chipa },
  "arpa-paraguaya": { component: ArpaParaguaya, variant: "medallion" },
  "chaco-paraguayo": { component: ChacoParaguayo },
  "rio-paraguay": { component: RioParaguay },
};
