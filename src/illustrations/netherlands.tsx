import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Fiets: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.55);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="150" cy="188" r="46" fill="none" stroke={dark} strokeWidth="10" />
      <circle cx="270" cy="188" r="46" fill="none" stroke={dark} strokeWidth="10" />
      <polygon points="150,188 205,105 232,105 270,188 232,188 205,120" fill={dark} />
      <rect x="158" y="95" width="50" height="26" rx="4" fill={accentColor} />
      <circle cx="170" cy="90" r="7" fill={light} />
      <circle cx="186" cy="86" r="7" fill={light} />
      <circle cx="200" cy="92" r="7" fill={light} />
    </g>
  );
};

const Molens: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.55);
  const dark = shade(accentColor, 0.5);
  return (
    <g>
      <polygon points="185,244 215,244 206,112 194,112" fill={dark} />
      <circle cx="200" cy="112" r="9" fill={light} />
      {[0, 90, 180, 270].map((deg) => (
        <rect
          key={deg}
          x="197"
          y="42"
          width="6"
          height="70"
          rx="3"
          fill={accentColor}
          transform={`rotate(${deg} 200 112)`}
        />
      ))}
    </g>
  );
};

const Tulpen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path
        d="M200 100 C170 100 160 130 170 155 C178 168 190 172 200 172 C210 172 222 168 230 155 C240 130 230 100 200 100 Z"
        fill={accentColor}
      />
      <path
        d="M200 100 C190 108 188 125 195 140"
        fill="none"
        stroke={dark}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="195" y="170" width="10" height="70" fill={dark} />
      <path
        d="M200 210 C170 205 160 225 165 245 C185 240 200 225 200 210 Z"
        fill={light}
      />
    </g>
  );
};

const Koningsdag: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.5);
  const people = [140, 200, 260];
  return (
    <g>
      {people.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={200} r="14" fill={dark} />
          <polygon
            points={`${x - 20},252 ${x + 20},252 ${x + 14},210 ${x - 14},210`}
            fill={i % 2 === 0 ? accentColor : dark}
          />
        </g>
      ))}
      <polygon
        points="180,140 190,110 200,130 210,110 220,140"
        fill={light}
        stroke={dark}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="178"
        y="138"
        width="44"
        height="10"
        rx="3"
        fill={light}
        stroke={dark}
        strokeWidth="3"
      />
    </g>
  );
};

const Gezelligheid: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="200" rx="90" ry="18" fill={dark} />
      <rect x="193" y="140" width="14" height="60" rx="3" fill={light} />
      <path
        d="M200 118 C192 128 192 138 200 144 C208 138 208 128 200 118 Z"
        fill={accentColor}
      />
      <rect x="140" y="178" width="26" height="26" rx="6" fill={light} />
      <rect x="234" y="178" width="26" height="26" rx="6" fill={light} />
    </g>
  );
};

const Kaasmarkt: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="120" y="205" width="160" height="14" rx="4" fill={dark} />
      {[0, 1, 2].map((i) => (
        <ellipse
          key={i}
          cx={160 + i * 40}
          cy={190 - i * 6}
          rx="34"
          ry="16"
          fill={accentColor}
          stroke={dark}
          strokeWidth="3"
        />
      ))}
      <circle cx="160" cy="188" r="4" fill={light} />
      <circle cx="176" cy="192" r="4" fill={light} />
    </g>
  );
};

const Grachten: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.55);
  const light = tint(accentColor, 0.55);
  const houses = [
    { x: 120, w: 40, h: 90, color: dark },
    { x: 160, w: 34, h: 110, color: accentColor },
    { x: 194, w: 40, h: 95, color: dark },
    { x: 234, w: 34, h: 120, color: accentColor },
    { x: 268, w: 40, h: 100, color: dark },
  ];
  return (
    <g>
      {houses.map((h) => (
        <g key={h.x}>
          <rect x={h.x} y={180 - h.h} width={h.w} height={h.h} fill={h.color} />
          <polygon
            points={`${h.x},${180 - h.h} ${h.x + h.w / 2},${180 - h.h - 22} ${h.x + h.w},${180 - h.h}`}
            fill={h.color}
          />
        </g>
      ))}
      <rect x="0" y="180" width="400" height="4" fill={light} />
    </g>
  );
};

const Sinterklaas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="140,220 260,220 244,244 156,244" fill={dark} />
      <rect x="164" y="180" width="72" height="40" fill={accentColor} />
      <rect x="192" y="140" width="16" height="44" fill={dark} />
      <circle cx="200" cy="128" r="14" fill={light} />
      <circle cx="214" cy="112" r="10" fill={light} opacity="0.7" />
    </g>
  );
};

const DelftsBlauw: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <circle cx="200" cy="138" r="70" fill={light} stroke={accentColor} strokeWidth="5" />
      <circle cx="200" cy="138" r="55" fill="none" stroke={accentColor} strokeWidth="2" />
      <polygon points="192,160 208,160 202,110 198,110" fill={accentColor} />
      {[0, 90, 180, 270].map((deg) => (
        <rect
          key={deg}
          x="197"
          y="90"
          width="5"
          height="34"
          fill={dark}
          transform={`rotate(${deg} 200 110)`}
        />
      ))}
    </g>
  );
};

const Directheid: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path
        d="M130 100 h140 a16 16 0 0 1 16 16 v56 a16 16 0 0 1 -16 16 h-92 l-30 26 v-26 h-18 a16 16 0 0 1 -16 -16 v-56 a16 16 0 0 1 16 -16 Z"
        fill={accentColor}
      />
      <rect x="180" y="132" width="12" height="34" rx="4" fill={light} />
      <circle cx="186" cy="178" r="7" fill={light} />
    </g>
  );
};

export const netherlandsIllustrations: Record<string, IllustrationDefinition> = {
  fiets: { component: Fiets },
  molens: { component: Molens },
  tulpen: { component: Tulpen },
  koningsdag: { component: Koningsdag },
  gezelligheid: { component: Gezelligheid },
  kaasmarkt: { component: Kaasmarkt },
  grachten: { component: Grachten },
  sinterklaas: { component: Sinterklaas },
  "delfts-blauw": { component: DelftsBlauw, variant: "medallion" },
  directheid: { component: Directheid, variant: "medallion" },
};
