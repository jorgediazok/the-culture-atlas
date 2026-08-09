import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Cerveza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <path d="M175 110 L180 200 a20 20 0 0 0 40 0 L225 110 Z" fill={accentColor} />
      <path d="M175 110 L225 110 L221 128 L179 128 Z" fill={light} />
      <path
        d="M225 130 C245 130 250 150 235 158 C245 158 248 172 232 176"
        fill="none"
        stroke={dark}
        strokeWidth="6"
      />
    </g>
  );
};

const Chocolate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="150" y="115" width="100" height="55" rx="8" fill={accentColor} />
      <line x1="200" y1="115" x2="200" y2="170" stroke={dark} strokeWidth="4" />
      <line x1="150" y1="142" x2="250" y2="142" stroke={dark} strokeWidth="4" />
      <circle cx="175" cy="128" r="5" fill={light} />
      <circle cx="225" cy="156" r="5" fill={light} />
    </g>
  );
};

const PapasFritas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <polygon points="175,205 225,205 214,120 186,120" fill={light} />
      <polygon points="180,205 220,205 213,130 187,130" fill="none" stroke={dark} strokeWidth="3" />
      {[-16, -6, 4, 14].map((dx) => (
        <rect key={dx} x={200 + dx - 4} y={70} width="8" height="60" fill={accentColor} transform={`rotate(${dx} ${200 + dx} 130)`} />
      ))}
    </g>
  );
};

const Comic: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <polygon
        points="200,90 214,128 254,128 222,152 234,190 200,168 166,190 178,152 146,128 186,128"
        fill={accentColor}
      />
      <circle cx="200" cy="138" r="16" fill={light} />
    </g>
  );
};

const Multilinguismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path
        d="M130 110 h100 a14 14 0 0 1 14 14 v40 a14 14 0 0 1 -14 14 h-70 l-22 20 v-20 h-8 a14 14 0 0 1 -14 -14 v-40 a14 14 0 0 1 14 -14 Z"
        fill={accentColor}
      />
      <path
        d="M270 140 h-30 a14 14 0 0 0 -14 14 v34 a14 14 0 0 0 14 14 h56 l20 18 v-18 h4 a14 14 0 0 0 14 -14 v-34 a14 14 0 0 0 -14 -14 h-20"
        fill={dark}
      />
    </g>
  );
};

const Waffles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="105" width="100" height="70" rx="10" fill={accentColor} />
      {[170, 190, 210, 230].map((x) => (
        <line key={x} x1={x} y1="112" x2={x} y2="168" stroke={dark} strokeWidth="4" />
      ))}
      {[122, 140, 158].map((y) => (
        <line key={y} x1="156" y1={y} x2="244" y2={y} stroke={dark} strokeWidth="4" />
      ))}
      <circle cx="235" cy="185" r="5" fill={light} />
      <circle cx="215" cy="192" r="5" fill={light} />
    </g>
  );
};

const Atomium: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g stroke={dark} strokeWidth="5" fill="none">
      <line x1="200" y1="120" x2="160" y2="170" />
      <line x1="200" y1="120" x2="240" y2="170" />
      <line x1="200" y1="120" x2="200" y2="80" />
      <line x1="160" y1="170" x2="240" y2="170" />
      <circle cx="200" cy="120" r="16" fill={accentColor} stroke="none" />
      <circle cx="160" cy="170" r="14" fill={accentColor} stroke="none" />
      <circle cx="240" cy="170" r="14" fill={accentColor} stroke="none" />
      <circle cx="200" cy="80" r="14" fill={accentColor} stroke="none" />
    </g>
  );
};

const Ciclismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  return (
    <g>
      <circle cx="200" cy="150" r="50" fill="none" stroke={dark} strokeWidth="8" />
      <circle cx="200" cy="150" r="6" fill={accentColor} />
      <line x1="200" y1="150" x2="230" y2="120" stroke={accentColor} strokeWidth="5" />
      <line x1="200" y1="150" x2="175" y2="120" stroke={accentColor} strokeWidth="5" />
      <line x1="200" y1="150" x2="200" y2="185" stroke={accentColor} strokeWidth="5" />
    </g>
  );
};

const CarnavalBinche: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="34" ry="40" fill={light} />
      <circle cx="188" cy="132" r="7" fill={dark} />
      <circle cx="212" cy="132" r="7" fill={dark} />
      <path d="M170 110 C180 80 220 80 230 110" fill="none" stroke={accentColor} strokeWidth="8" />
    </g>
  );
};

const CapitalEuropea: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.75);
  const points = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    return [200 + Math.cos(angle) * 60, 138 + Math.sin(angle) * 60];
  });
  return (
    <g>
      {points.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill={light} />
      ))}
      <rect x="180" y="118" width="40" height="40" fill={accentColor} />
    </g>
  );
};

export const belgiumIllustrations: Record<string, IllustrationDefinition> = {
  cerveza: { component: Cerveza, variant: "medallion" },
  chocolate: { component: Chocolate, variant: "medallion" },
  "papas-fritas": { component: PapasFritas, variant: "medallion" },
  comic: { component: Comic, variant: "medallion" },
  multilinguismo: { component: Multilinguismo, variant: "medallion" },
  waffles: { component: Waffles, variant: "medallion" },
  atomium: { component: Atomium },
  ciclismo: { component: Ciclismo },
  "carnaval-binche": { component: CarnavalBinche, variant: "medallion" },
  "capital-europea": { component: CapitalEuropea, variant: "medallion" },
};
