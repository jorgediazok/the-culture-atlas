import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Carnaval: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  const dark = shade(accentColor, 0.3);
  const angles = [-60, -40, -20, 0, 20, 40, 60];
  return (
    <g>
      {angles.map((deg, i) => (
        <rect
          key={deg}
          x="196"
          y="70"
          width="8"
          height="55"
          rx="4"
          fill={i % 2 === 0 ? accentColor : light}
          transform={`rotate(${deg} 200 140)`}
        />
      ))}
      <circle cx="200" cy="150" r="26" fill={dark} />
      <circle cx="191" cy="146" r="4" fill={light} />
      <circle cx="209" cy="146" r="4" fill={light} />
    </g>
  );
};

const Futebol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <circle cx="200" cy="140" r="46" fill={light} stroke={accentColor} strokeWidth="5" />
      <polygon points="200,112 218,126 211,148 189,148 182,126" fill={dark} />
      <line x1="200" y1="112" x2="200" y2="94" stroke={accentColor} strokeWidth="4" />
      <line x1="218" y1="126" x2="234" y2="116" stroke={accentColor} strokeWidth="4" />
      <line x1="182" y1="126" x2="166" y2="116" stroke={accentColor} strokeWidth="4" />
    </g>
  );
};

const Feijoada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M155 150 a45 32 0 0 0 90 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="150" rx="45" ry="13" fill={dark} />
      <rect x="146" y="182" width="14" height="18" fill={dark} />
      <rect x="240" y="182" width="14" height="18" fill={dark} />
      <circle cx="255" cy="118" r="12" fill={light} />
      <path d="M182 118 q6 -14 0 -22" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M200 112 q6 -14 0 -22" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const Samba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 100 L225 100 L235 190 L165 190 Z" fill={accentColor} />
      <ellipse cx="200" cy="100" rx="25" ry="10" fill={light} />
      <line x1="180" y1="120" x2="220" y2="120" stroke={dark} strokeWidth="3" />
      <line x1="176" y1="140" x2="224" y2="140" stroke={dark} strokeWidth="3" />
      <line x1="172" y1="160" x2="228" y2="160" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const Amazonia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M140 100 Q170 130 150 150 Q130 170 165 190 Q190 205 220 190 Q260 172 250 150 Q240 130 260 100"
        fill="none"
        stroke={light}
        strokeWidth="16"
        strokeLinecap="round"
      />
      <ellipse cx="150" cy="95" rx="16" ry="10" fill={accentColor} />
      <ellipse cx="255" cy="95" rx="16" ry="10" fill={dark} />
      <ellipse cx="200" cy="88" rx="16" ry="10" fill={accentColor} />
    </g>
  );
};

const Capoeira: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="170" cy="115" r="12" fill={dark} />
      <path d="M170 127 L160 165 M170 127 L185 150 M185 150 L210 100 M160 165 L140 190" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M215 130 a35 45 0 0 1 -8 55" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <circle cx="207" cy="128" r="7" fill={light} />
    </g>
  );
};

const CristoRedentor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="160,220 240,220 210,120 190,120" fill={dark} />
      <rect x="196" y="95" width="8" height="90" fill={accentColor} />
      <rect x="150" y="118" width="100" height="9" rx="4" fill={accentColor} />
      <circle cx="200" cy="88" r="10" fill={light} />
    </g>
  );
};

const BossaNova: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <path d="M185 150 a25 25 0 1 0 0.1 0 Z" fill={accentColor} />
      <path d="M210 150 a20 20 0 1 0 0.1 0 Z" fill={light} />
      <line x1="205" y1="130" x2="222" y2="88" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <circle cx="222" cy="88" r="5" fill={dark} />
    </g>
  );
};

const CachacaCaipirinha: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <polygon points="172,110 228,110 216,195 184,195" fill={light} />
      <circle cx="192" cy="150" r="8" fill="#fff" opacity="0.8" />
      <circle cx="210" cy="165" r="7" fill="#fff" opacity="0.8" />
      <circle cx="200" cy="130" r="6" fill="#fff" opacity="0.8" />
      <path d="M226 118 a14 14 0 1 1 -0.1 0" fill="none" stroke={dark} strokeWidth="5" />
      <line x1="219" y1="111" x2="233" y2="125" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const PortuguesBrasileiro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M155 110 h70 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-45 l-15 16 v-16 h-10 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10 Z" fill={accentColor} />
      <circle cx="180" cy="140" r="4" fill={light} />
      <circle cx="195" cy="140" r="4" fill={light} />
      <circle cx="210" cy="140" r="4" fill={light} />
      <path d="M215 170 h55 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-8 v14 l-16 -14 h-31 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10 Z" fill={dark} />
    </g>
  );
};

export const brazilIllustrations: Record<string, IllustrationDefinition> = {
  carnaval: { component: Carnaval, variant: "medallion" },
  futebol: { component: Futebol, variant: "medallion" },
  feijoada: { component: Feijoada },
  samba: { component: Samba },
  amazonia: { component: Amazonia },
  capoeira: { component: Capoeira },
  "cristo-redentor": { component: CristoRedentor },
  "bossa-nova": { component: BossaNova, variant: "medallion" },
  "cachaca-caipirinha": { component: CachacaCaipirinha },
  "portugues-brasileiro": { component: PortuguesBrasileiro, variant: "medallion" },
};
