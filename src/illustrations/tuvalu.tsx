import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PaisMasBajo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 180 Q200 172 245 180 L245 185 L155 185 Z" fill={light} />
      <ellipse cx="200" cy="178" rx="35" ry="6" fill={accentColor} />
      <path d="M170 165 Q185 155 200 165 Q215 175 230 165" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const NacionDigital: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M170 150 q-15 0 -15 12 q0 10 15 10 h50 q15 0 15 -12 q0 -10 -15 -10 q-3 -14 -20 -14 q-15 0 -20 12 Z"
        fill={light}
      />
      <circle cx="185" cy="158" r="3" fill={accentColor} />
      <circle cx="200" cy="158" r="3" fill={dark} />
      <circle cx="215" cy="158" r="3" fill={accentColor} />
    </g>
  );
};

const DominioTv: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="125" width="60" height="42" rx="4" fill={accentColor} />
      <rect x="178" y="133" width="44" height="26" fill={light} />
      <rect x="192" y="167" width="16" height="10" fill={dark} />
      <rect x="182" y="177" width="36" height="5" fill={dark} />
    </g>
  );
};

const FunafutiPista: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="160" y="165" width="80" height="14" fill={dark} />
      <line x1="165" y1="172" x2="235" y2="172" stroke={light} strokeWidth="2" strokeDasharray="6 6" />
      <path d="M200 165 L215 150 L220 152 L210 165 Z" fill={accentColor} />
    </g>
  );
};

const Fatele: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="150" width="18" height="24" fill={accentColor} />
      <rect x="202" y="150" width="18" height="24" fill={dark} />
      <path d="M189 150 q-4 -10 4 -14 M211 150 q4 -10 -4 -14" stroke={light} strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
};

const MarinosTuvaluanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="120" r="7" fill="none" stroke={accentColor} strokeWidth="4" />
      <line x1="200" y1="127" x2="200" y2="170" stroke={dark} strokeWidth="4" />
      <path d="M180 160 Q200 180 220 160" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
      <line x1="185" y1="140" x2="215" y2="140" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const PescaLicencias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 160 Q200 140 225 160 Q200 180 175 160 Z" fill={accentColor} />
      <path d="M175 160 L160 150 L160 170 Z" fill={dark} />
      <circle cx="210" cy="155" r="2.4" fill={light} />
    </g>
  );
};

const OnuMiembroPequeno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="196" y="115" width="6" height="60" fill={dark} />
      <path d="M202 118 L232 128 L202 138 Z" fill={accentColor} />
      <circle cx="212" cy="128" r="2.2" fill={light} />
    </g>
  );
};

const AtolonesTuvalu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="155" r="30" fill="none" stroke={accentColor} strokeWidth="8" />
      <circle cx="200" cy="155" r="18" fill={light} />
      <circle cx="200" cy="155" r="4" fill={dark} />
    </g>
  );
};

const IndependenciaEllice: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="175" cy="165" rx="20" ry="8" fill={accentColor} />
      <ellipse cx="228" cy="155" rx="16" ry="7" fill={dark} />
      <path d="M195 165 L212 158" stroke={light} strokeWidth="2" strokeDasharray="3 3" />
    </g>
  );
};

export const tuvaluIllustrations: Record<string, IllustrationDefinition> = {
  "pais-mas-bajo": { component: PaisMasBajo },
  "nacion-digital": { component: NacionDigital, variant: "medallion" },
  "dominio-tv": { component: DominioTv, variant: "medallion" },
  "funafuti-pista": { component: FunafutiPista },
  fatele: { component: Fatele },
  "marinos-tuvaluanos": { component: MarinosTuvaluanos, variant: "medallion" },
  "pesca-licencias": { component: PescaLicencias },
  "onu-miembro-pequeno": { component: OnuMiembroPequeno, variant: "medallion" },
  "atolones-tuvalu": { component: AtolonesTuvalu, variant: "medallion" },
  "independencia-ellice": { component: IndependenciaEllice },
};
