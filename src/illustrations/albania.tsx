import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Bunkers: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M140 220 a60 45 0 0 1 120 0 Z" fill={accentColor} />
      <rect x="192" y="195" width="16" height="25" fill={dark} />
      <ellipse cx="200" cy="220" rx="70" ry="10" fill={light} />
    </g>
  );
};

const Riviera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path
        d="M160 150 C160 130 240 130 240 150 L200 150 Z"
        fill={accentColor}
      />
      <line x1="200" y1="150" x2="200" y2="210" stroke={dark} strokeWidth="5" />
      <path d="M120 225 q20 -10 40 0 t40 0 t40 0 t40 0" fill="none" stroke={light} strokeWidth="5" />
    </g>
  );
};

const Besa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M150 160 h35 l20 18 -20 18 h-35 Z" fill={accentColor} />
      <path d="M250 160 h-35 l-20 18 20 18 h35 Z" fill={dark} />
      <circle cx="200" cy="178" r="8" fill={light} />
    </g>
  );
};

const Aguila: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g fill={dark}>
      <polygon points="200,120 210,150 240,140 215,165 235,190 205,175 200,205 195,175 165,190 185,165 160,140 190,150" />
      <circle cx="192" cy="140" r="5" />
      <circle cx="208" cy="140" r="5" />
    </g>
  );
};

const GjirokastraBerat: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="140" y="170" width="130" height="60" fill={light} />
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={148 + col * 20}
            y={178 + row * 10}
            width="10"
            height="7"
            fill={dark}
          />
        ))
      )}
      <polygon points="140,170 205,140 270,170" fill={accentColor} />
    </g>
  );
};

const IsoPolifonia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g fill={accentColor}>
      <circle cx="200" cy="138" r="6" />
      <circle cx="230" cy="150" r="6" />
      <circle cx="238" cy="130" r="6" />
      <circle cx="170" cy="150" r="6" />
      <circle cx="162" cy="130" r="6" />
      <circle cx="200" cy="108" r="6" />
      <path
        d="M200 138 v20 M230 150 v16 M238 130 v14 M170 150 v16 M162 130 v14 M200 108 v14"
        stroke={dark}
        strokeWidth="3"
      />
    </g>
  );
};

const Skanderbeg: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 180 a30 26 0 0 1 60 0 Z" fill={accentColor} />
      <rect x="168" y="176" width="64" height="10" rx="4" fill={dark} />
      <path d="M180 176 C176 156 186 140 200 176" fill={light} />
      <path d="M220 176 C224 156 214 140 200 176" fill={light} />
    </g>
  );
};

const Raki: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <path d="M186 100 h28 v18 c16 6 20 24 20 40 c0 22 -14 36 -34 36 c-20 0 -34 -14 -34 -36 c0 -16 4 -34 20 -40 Z" fill={accentColor} />
      <rect x="190" y="92" width="20" height="12" fill="#5a3d1f" />
      <ellipse cx="200" cy="140" rx="18" ry="10" fill={light} opacity="0.5" />
    </g>
  );
};

const Byrek: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <path
        d="M200 138 m-50 0 a50 50 0 1 1 100 0 a50 50 0 1 1 -100 0"
        fill={accentColor}
      />
      <path
        d="M200 138 m-38 0 a38 38 0 1 1 76 0"
        fill="none"
        stroke={dark}
        strokeWidth="4"
      />
      <path
        d="M200 138 m-24 0 a24 24 0 1 1 48 0"
        fill="none"
        stroke={dark}
        strokeWidth="4"
      />
    </g>
  );
};

const MadreTeresa: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path
        d="M200 120 C185 128 178 142 186 154 C178 160 178 172 190 176 C196 184 210 184 216 176 C226 172 226 160 218 154 C226 142 219 128 204 120 Z"
        fill={light}
      />
      <path
        d="M180 148 C170 142 168 130 176 122 C170 118 172 110 182 110"
        fill="none"
        stroke={accentColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  );
};

export const albaniaIllustrations: Record<string, IllustrationDefinition> = {
  bunkers: { component: Bunkers },
  riviera: { component: Riviera },
  besa: { component: Besa, variant: "medallion" },
  aguila: { component: Aguila, variant: "medallion" },
  "gjirokastra-berat": { component: GjirokastraBerat },
  "iso-polifonia": { component: IsoPolifonia, variant: "medallion" },
  skanderbeg: { component: Skanderbeg, variant: "medallion" },
  raki: { component: Raki, variant: "medallion" },
  byrek: { component: Byrek, variant: "medallion" },
  "madre-teresa": { component: MadreTeresa, variant: "medallion" },
};
