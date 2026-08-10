import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MonteEverest: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M155 185 L195 115 L235 185 Z" fill={accentColor} />
      <path d="M178 150 L195 115 L212 150 L195 160 Z" fill={light} />
      <path d="M160 178 h20 M220 178 h20" stroke={dark} strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const BudaLumbini: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="193" y="110" width="14" height="60" fill={dark} />
      <ellipse cx="200" cy="105" rx="14" ry="8" fill={accentColor} />
      <path d="M200 130 q15 5 15 20 q-15 8 -15 -20 Z" fill={light} />
    </g>
  );
};

const BanderaNepal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="185" y="105" width="6" height="75" fill={dark} />
      <path d="M191 108 L228 128 L191 138 Z" fill={accentColor} />
      <path d="M191 138 L225 155 L191 172 Z" fill={accentColor} />
      <circle cx="205" cy="120" r="4" fill={light} />
    </g>
  );
};

const KumariDiosaViviente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 150 a20 22 0 1 0 40 0 a20 22 0 1 0 -40 0 Z" fill={accentColor} />
      <path d="M185 138 q15 -16 30 0" fill="none" stroke={light} strokeWidth="4" />
      <circle cx="200" cy="128" r="6" fill={dark} />
    </g>
  );
};

const Gurkhas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 120 Q210 130 195 175 Q185 160 180 120 Z" fill={accentColor} />
      <path d="M180 120 Q210 130 195 175" fill="none" stroke={light} strokeWidth="2" />
      <rect x="200" y="170" width="20" height="8" rx="2" fill={dark} />
    </g>
  );
};

const ValleKatmandu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="150" width="50" height="30" fill={light} />
      <path d="M170 150 h60 l-10 -14 h-40 Z" fill={accentColor} />
      <path d="M180 136 h40 l-8 -12 h-24 Z" fill={dark} />
    </g>
  );
};

const PuebloSherpa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 180 Q180 140 200 140 Q220 140 220 180" fill="none" stroke={accentColor} strokeWidth="6" />
      <path d="M188 145 l24 -20 l6 6 l-24 20 Z" fill={dark} />
      <circle cx="212" cy="127" r="4" fill={light} />
    </g>
  );
};

const Momos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="165" y="160" width="70" height="10" rx="4" fill={dark} />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${178 + i * 22} 158 a10 10 0 1 0 0.1 0 Z`} fill={i % 2 === 0 ? accentColor : light} />
      ))}
    </g>
  );
};

const RinoceronteChitwan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="38" ry="20" fill={accentColor} />
      <path d="M225 145 l10 -16 l4 4 l-8 16 Z" fill={dark} />
      <ellipse cx="200" cy="160" rx="38" ry="20" fill="none" stroke={light} strokeWidth="2" />
    </g>
  );
};

const OchoOchomiles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M${158 + i * 22} 185 L${170 + i * 22} ${140 - (i % 2) * 15} L${182 + i * 22} 185 Z`}
          fill={i % 2 === 0 ? accentColor : dark}
        />
      ))}
      <circle cx="170" cy="128" r="3" fill={light} />
    </g>
  );
};

export const nepalIllustrations: Record<string, IllustrationDefinition> = {
  "monte-everest": { component: MonteEverest },
  "buda-lumbini": { component: BudaLumbini, variant: "medallion" },
  "bandera-nepal": { component: BanderaNepal },
  "kumari-diosa-viviente": { component: KumariDiosaViviente, variant: "medallion" },
  gurkhas: { component: Gurkhas },
  "valle-katmandu": { component: ValleKatmandu },
  "pueblo-sherpa": { component: PuebloSherpa },
  momos: { component: Momos, variant: "medallion" },
  "rinoceronte-chitwan": { component: RinoceronteChitwan },
  "ocho-ochomiles": { component: OchoOchomiles },
};
