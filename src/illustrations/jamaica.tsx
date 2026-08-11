import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ReggaeBobMarley: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="180" cy="160" r="22" fill={dark} />
      <circle cx="180" cy="160" r="6" fill={light} />
      <rect x="205" y="130" width="8" height="55" rx="3" fill={accentColor} />
      <path d="M205 130 Q195 120 210 118 Q222 118 213 130 Z" fill={accentColor} />
    </g>
  );
};

const RastafariMovimiento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="197"
          y="128"
          width="6"
          height="16"
          rx="3"
          fill={accentColor}
          transform={`rotate(${deg} 200 155)`}
        />
      ))}
      <circle cx="200" cy="155" r="16" fill={light} />
      <circle cx="200" cy="155" r="9" fill={dark} />
    </g>
  );
};

const VelocistasJamaicanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M170 175 Q170 160 190 158 L215 158 L215 175 Z" fill={accentColor} />
      <line x1="140" y1="150" x2="165" y2="150" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <line x1="145" y1="160" x2="165" y2="160" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <line x1="150" y1="170" x2="165" y2="170" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const PatoisJamaicano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M170 145 Q170 130 190 130 L210 130 Q222 130 222 145 Q222 158 210 158 L185 158 L175 168 L180 156 Q170 154 170 145 Z"
        fill={light}
      />
      <path
        d="M205 168 Q205 156 220 156 L235 156 Q245 156 245 168 Q245 178 235 178 L222 178 L216 186 L219 177 Q205 176 205 168 Z"
        fill={dark}
      />
    </g>
  );
};

const CafeBlueMountain: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 175 L195 130 L225 175 Z" fill={light} />
      <ellipse cx="190" cy="160" rx="7" ry="10" fill={accentColor} transform="rotate(-15 190 160)" />
      <line x1="190" y1="153" x2="190" y2="167" stroke={dark} strokeWidth="1.5" transform="rotate(-15 190 160)" />
      <ellipse cx="208" cy="168" rx="7" ry="10" fill={dark} transform="rotate(10 208 168)" />
      <line x1="208" y1="161" x2="208" y2="175" stroke={accentColor} strokeWidth="1.5" transform="rotate(10 208 168)" />
    </g>
  );
};

const CimarronesNanny: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 178 L190 145 L205 178 Z" fill={light} />
      <path d="M195 178 L220 138 L238 178 Z" fill={dark} />
      <path d="M175 165 Q190 158 205 168 Q195 172 190 180 Q185 172 175 165 Z" fill={accentColor} />
    </g>
  );
};

const PortRoyalHundida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="150" width="18" height="30" fill={dark} transform="rotate(8 184 165)" />
      <rect x="200" y="140" width="16" height="40" fill={accentColor} transform="rotate(-5 208 160)" />
      <path d="M160 178 Q200 168 240 178 L240 190 L160 190 Z" fill={light} opacity="0.7" />
    </g>
  );
};

const AckeeFrutaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 145 Q195 135 215 145 Q222 165 195 180 Q168 165 175 145 Z" fill={light} />
      <circle cx="190" cy="158" r="5" fill={dark} />
      <circle cx="202" cy="162" r="5" fill={dark} />
      <circle cx="196" cy="172" r="5" fill={dark} />
    </g>
  );
};

const SoundSystemCultura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="178" y="130" width="44" height="26" rx="2" fill={accentColor} />
      <circle cx="200" cy="143" r="9" fill={dark} />
      <rect x="178" y="160" width="44" height="26" rx="2" fill={dark} />
      <circle cx="200" cy="173" r="9" fill={light} />
    </g>
  );
};

const BanderaUnPueblo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="170,135 230,135 200,160" fill={light} />
      <polygon points="170,185 230,185 200,160" fill={light} />
      <polygon points="170,135 170,185 200,160" fill={dark} />
      <polygon points="230,135 230,185 200,160" fill={dark} />
      <line x1="170" y1="135" x2="230" y2="185" stroke={accentColor} strokeWidth="6" />
      <line x1="230" y1="135" x2="170" y2="185" stroke={accentColor} strokeWidth="6" />
    </g>
  );
};

export const jamaicaIllustrations: Record<string, IllustrationDefinition> = {
  "reggae-bob-marley": { component: ReggaeBobMarley },
  "rastafari-movimiento": { component: RastafariMovimiento, variant: "medallion" },
  "velocistas-jamaicanos": { component: VelocistasJamaicanos },
  "patois-jamaicano": { component: PatoisJamaicano },
  "cafe-blue-mountain": { component: CafeBlueMountain },
  "cimarrones-nanny": { component: CimarronesNanny },
  "port-royal-hundida": { component: PortRoyalHundida },
  "ackee-fruta-nacional": { component: AckeeFrutaNacional, variant: "medallion" },
  "sound-system-cultura": { component: SoundSystemCultura },
  "bandera-un-pueblo": { component: BanderaUnPueblo, variant: "medallion" },
};
