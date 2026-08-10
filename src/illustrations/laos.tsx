import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LuangPrabang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[170, 195, 220].map((x, i) => (
        <g key={x}>
          <path
            d={`M${x} 185 L${x - 8} 150 Q${x} 140 ${x + 8} 150 L${x + 16} 185 Z`}
            fill={i % 2 === 0 ? accentColor : dark}
          />
          <circle cx={x + 4} cy="142" r="6" fill={light} />
        </g>
      ))}
    </g>
  );
};

const LlanuraDeLasJarras: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 185 V155 Q175 145 185 145 Q195 145 195 155 V185 Z" fill={accentColor} />
      <path d="M205 185 V160 Q205 150 215 150 Q225 150 225 160 V185 Z" fill={dark} />
      <ellipse cx="185" cy="145" rx="10" ry="4" fill={light} />
      <ellipse cx="215" cy="150" rx="10" ry="4" fill={light} />
    </g>
  );
};

const MekongLaos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 175 Q200 165 245 175 L235 185 Q200 178 165 185 Z" fill={accentColor} />
      <path d="M190 172 L210 172 L204 155 L196 155 Z" fill={dark} />
      <line x1="200" y1="155" x2="200" y2="140" stroke={light} strokeWidth="2" />
    </g>
  );
};

const QueLao: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="150" width="24" height="40" rx="3" fill={accentColor} />
      <rect x="194" y="120" width="12" height="32" fill={dark} />
      <rect x="192" y="112" width="16" height="10" rx="2" fill={light} />
    </g>
  );
};

const TextilesLaosianos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="125" width="60" height="50" fill={light} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={`v${i}`} x={170 + i * 15} y="125" width="6" height="50" fill={accentColor} opacity="0.85" />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={`h${i}`} x="170" y={130 + i * 15} width="60" height="6" fill={dark} opacity="0.7" />
      ))}
    </g>
  );
};

const ArrozPegajoso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 185 L180 145 Q200 138 220 145 L225 185 Z" fill={accentColor} />
      <ellipse cx="200" cy="145" rx="22" ry="8" fill={light} />
      <path d="M182 150 L218 150 M180 165 L220 165" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ThatLuang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 105 L206 130 L194 130 Z" fill={light} />
      <rect x="196" y="130" width="8" height="12" fill={accentColor} />
      <path d="M182 142 L218 142 L210 165 L190 165 Z" fill={accentColor} />
      <path d="M172 165 L228 165 L216 188 L184 188 Z" fill={dark} />
    </g>
  );
};

const HmongLaos: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={175 + col * 17}
            y={130 + row * 17}
            width="13"
            height="13"
            fill={(row + col) % 2 === 0 ? accentColor : light}
          />
        ))
      )}
    </g>
  );
};

export const laosIllustrations: Record<string, IllustrationDefinition> = {
  "luang-prabang": { component: LuangPrabang },
  "llanura-de-las-jarras": { component: LlanuraDeLasJarras },
  "mekong-laos": { component: MekongLaos },
  "que-lao": { component: QueLao, variant: "medallion" },
  "textiles-laosianos": { component: TextilesLaosianos },
  "arroz-pegajoso": { component: ArrozPegajoso },
  "that-luang": { component: ThatLuang, variant: "medallion" },
  "hmong-laos": { component: HmongLaos },
};
