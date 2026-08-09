import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Corbata: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="188,105 212,105 220,125 200,138 180,125" fill={dark} />
      <polygon points="192,138 208,138 224,205 200,220 176,205" fill={accentColor} />
    </g>
  );
};

const Adriatico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="200,100 200,190 155,190" fill={light} />
      <polygon points="150,192 250,192 235,205 165,205" fill={accentColor} />
      <path d="M120 215 q20 -10 40 0 t40 0 t40 0 t40 0" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const Dubrovnik: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g fill={dark}>
      <rect x="140" y="160" width="120" height="50" />
      {[140, 164, 188, 212, 236, 252].map((x) => (
        <rect key={x} x={x} y="148" width="12" height="14" />
      ))}
      <polygon points="140,160 260,160 260,148 140,148" fill={accentColor} />
    </g>
  );
};

const Vatreni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <circle cx="200" cy="140" r="50" fill={light} stroke={dark} strokeWidth="4" />
      {[
        [180, 118],
        [220, 118],
        [180, 158],
        [220, 158],
        [200, 138],
      ].map(([cx, cy], i) => (
        <rect key={i} x={cx - 10} y={cy - 10} width="20" height="20" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
    </g>
  );
};

const Klapa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g fill={accentColor}>
      <circle cx="170" cy="170" r="10" />
      <rect x="178" y="110" width="4" height="60" fill={dark} />
      <path d="M182 110 q22 -4 22 14 q0 14 -22 12 Z" fill={dark} />
      <circle cx="225" cy="150" r="10" />
      <rect x="233" y="98" width="4" height="52" fill={dark} />
      <path d="M237 98 q20 -4 20 12 q0 13 -20 11 Z" fill={dark} />
    </g>
  );
};

const Diocleciano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g fill={accentColor}>
      <rect x="150" y="200" width="100" height="10" fill={dark} />
      {[155, 180, 205, 230].map((x) => (
        <rect key={x} x={x} y="120" width="14" height="80" />
      ))}
      <rect x="150" y="108" width="100" height="12" fill={dark} />
    </g>
  );
};

const Rakija: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <path d="M186 100 h28 v18 c16 6 20 24 20 40 c0 22 -14 36 -34 36 c-20 0 -34 -14 -34 -36 c0 -16 4 -34 20 -40 Z" fill={accentColor} />
      <rect x="190" y="92" width="20" height="12" fill="#7a5230" />
      <ellipse cx="200" cy="140" rx="18" ry="10" fill={light} opacity="0.5" />
    </g>
  );
};

const Plitvice: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.25);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="110" width="120" height="26" fill={light} />
      <rect x="155" y="140" width="105" height="26" fill={accentColor} />
      <rect x="170" y="170" width="95" height="26" fill={dark} />
    </g>
  );
};

const TrufaIstria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path
        d="M200 105 C220 105 236 118 234 138 C246 142 244 162 228 166 C224 180 204 184 196 172 C178 176 164 160 172 144 C164 130 178 112 196 116 C196 110 198 105 200 105 Z"
        fill={accentColor}
      />
      <circle cx="196" cy="130" r="3" fill={dark} />
      <circle cx="214" cy="140" r="3" fill={dark} />
      <circle cx="204" cy="156" r="3" fill={dark} />
    </g>
  );
};

const Licitar: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.8);
  return (
    <g>
      <path
        d="M200 190 C160 160 150 130 172 112 C188 100 200 112 200 122 C200 112 212 100 228 112 C250 130 240 160 200 190 Z"
        fill={accentColor}
      />
      <path
        d="M200 178 C168 152 160 130 176 116"
        fill="none"
        stroke={light}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  );
};

export const croatiaIllustrations: Record<string, IllustrationDefinition> = {
  corbata: { component: Corbata, variant: "medallion" },
  adriatico: { component: Adriatico },
  dubrovnik: { component: Dubrovnik },
  vatreni: { component: Vatreni, variant: "medallion" },
  klapa: { component: Klapa, variant: "medallion" },
  diocleciano: { component: Diocleciano },
  rakija: { component: Rakija, variant: "medallion" },
  plitvice: { component: Plitvice },
  "trufa-istria": { component: TrufaIstria, variant: "medallion" },
  licitar: { component: Licitar, variant: "medallion" },
};
