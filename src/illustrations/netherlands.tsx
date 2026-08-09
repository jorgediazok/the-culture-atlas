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

const CdPhilips: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="180" cy="140" r="38" fill={light} stroke={dark} strokeWidth="3" />
      <circle cx="180" cy="140" r="8" fill={dark} />
      <rect x="222" y="118" width="46" height="30" rx="4" fill={dark} />
      <rect x="228" y="124" width="34" height="18" rx="3" fill={light} />
    </g>
  );
};

const Microscopio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="96" width="12" height="40" rx="4" fill={dark} transform="rotate(15 198 116)" />
      <path d="M180 150 h44 l-8 30 h-28 Z" fill={accentColor} />
      <ellipse cx="200" cy="182" rx="34" ry="8" fill={dark} />
      <circle cx="210" cy="120" r="8" fill={light} />
    </g>
  );
};

const VanGogh: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="185" y="100" width="8" height="80" fill={dark} />
      <rect x="150" y="150" width="80" height="8" fill={dark} />
      <circle cx="200" cy="120" r="16" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="197"
          y="96"
          width="6"
          height="14"
          fill={light}
          transform={`rotate(${deg} 200 120)`}
        />
      ))}
    </g>
  );
};

const SigloDeOro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="165" y="105" width="70" height="90" fill={dark} />
      <rect x="174" y="114" width="52" height="72" fill={light} />
      <rect x="185" y="130" width="30" height="40" fill={accentColor} />
    </g>
  );
};

const CapitalEdm: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <path d="M170 150 a30 30 0 0 1 60 0" fill="none" stroke={dark} strokeWidth="8" />
      <rect x="164" y="148" width="14" height="26" rx="5" fill={accentColor} />
      <rect x="222" y="148" width="14" height="26" rx="5" fill={accentColor} />
      <rect x="180" y="176" width="40" height="16" rx="3" fill={light} />
    </g>
  );
};

const AnaFrank: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M160 110 h38 v70 h-38 Z" fill={accentColor} />
      <path d="M202 110 h38 v70 h-38 Z" fill={dark} />
      <line x1="200" y1="108" x2="200" y2="182" stroke={light} strokeWidth="2" />
      {[122, 134, 146].map((y) => (
        <line key={y} x1="168" y1={y} x2="192" y2={y} stroke={light} strokeWidth="2" />
      ))}
    </g>
  );
};

const Heineken: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <path d="M188 100 h24 v20 c14 6 18 24 18 40 c0 22 -14 36 -30 36 c-16 0 -30 -14 -30 -36 c0 -16 4 -34 18 -40 Z" fill={accentColor} />
      <polygon points="200,130 206,140 217,141 209,149 211,160 200,154 189,160 191,149 183,141 194,140" fill={light} />
      <rect x="190" y="94" width="20" height="10" fill={dark} />
    </g>
  );
};

const BolsaValores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="170" width="100" height="16" fill={dark} />
      {[160, 180, 200, 220, 236].map((x) => (
        <rect key={x} x={x} y="130" width="10" height="40" fill={accentColor} />
      ))}
      <polygon points="150,130 200,104 250,130" fill={light} />
    </g>
  );
};

const DeltaWorks: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="150" y="150" width="100" height="20" fill={dark} />
      {[160, 180, 200, 220, 236].map((x) => (
        <rect key={x} x={x} y="120" width="8" height="34" fill={light} />
      ))}
      <path d="M120 190 q40 -16 80 0 t80 0" fill="none" stroke={accentColor} strokeWidth="6" />
    </g>
  );
};

const Giethoorn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="160" y="150" width="40" height="30" fill={accentColor} />
      <polygon points="155,150 180,128 205,150" fill={dark} />
      <rect x="215" y="160" width="34" height="22" fill={dark} />
      <polygon points="211,160 232,142 253,160" fill={accentColor} />
      <path d="M120 195 q60 -14 160 0" fill="none" stroke={light} strokeWidth="5" />
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
  "cd-philips": { component: CdPhilips, variant: "medallion" },
  microscopio: { component: Microscopio },
  "van-gogh": { component: VanGogh, variant: "medallion" },
  "siglo-de-oro": { component: SigloDeOro, variant: "medallion" },
  "capital-edm": { component: CapitalEdm, variant: "medallion" },
  "ana-frank": { component: AnaFrank, variant: "medallion" },
  heineken: { component: Heineken, variant: "medallion" },
  "bolsa-valores": { component: BolsaValores },
  "delta-works": { component: DeltaWorks },
  giethoorn: { component: Giethoorn },
};
