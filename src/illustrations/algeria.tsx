import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MayorPaisAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 185 Q175 155 195 185 Q215 150 245 185 Z" fill={accentColor} />
      <path d="M170 185 Q185 165 200 185 Z" fill={light} opacity="0.6" />
      <circle cx="220" cy="130" r="12" fill={dark} />
    </g>
  );
};

const CasbahArgel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={170 + i * 8}
          y={165 - i * 18}
          width={60 - i * 16}
          height={20 + i * 3}
          fill={i % 2 === 0 ? light : accentColor}
        />
      ))}
      <path d="M155 185 L245 185 L235 165 L165 165 Z" fill={dark} opacity="0.4" />
    </g>
  );
};

const TassiliNajjer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 185 L175 130 L195 150 L210 115 L230 160 L245 185 Z" fill={light} />
      <path d="M180 165 L190 148 L200 160 L212 138" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="222" cy="150" r="3" fill={accentColor} />
    </g>
  );
};

const TuaregArgelia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="145" rx="22" ry="26" fill={accentColor} />
      <path d="M180 150 Q200 175 220 150 Q220 165 200 170 Q180 165 180 150 Z" fill={dark} />
      <ellipse cx="192" cy="140" rx="3" ry="4" fill={light} />
      <ellipse cx="208" cy="140" rx="3" ry="4" fill={light} />
    </g>
  );
};

const RaiMusica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="130" rx="14" ry="18" fill={accentColor} />
      <rect x="197" y="148" width="6" height="28" fill={dark} />
      <path d="M185 155 Q185 172 200 172 Q215 172 215 155" fill="none" stroke={light} strokeWidth="3" />
    </g>
  );
};

const GuerraIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M170 150 Q185 135 205 145 Q195 148 195 155 Q210 150 225 160 Q205 165 195 160 Q188 168 175 165 Q182 158 170 150 Z"
        fill={light}
      />
      <circle cx="178" cy="148" r="2.4" fill={dark} />
    </g>
  );
};

const ValleMzab: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="196" y="115" width="8" height="45" fill={dark} />
      <path d="M165 185 Q165 140 200 140 Q235 140 235 185 Z" fill={accentColor} />
      <path d="M178 185 Q178 155 200 155 Q222 155 222 185 Z" fill={light} />
    </g>
  );
};

const GasArgelia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="194" y="140" width="12" height="45" fill={dark} />
      <path d="M200 100 Q212 118 200 132 Q188 118 200 100 Z" fill={accentColor} />
      <path d="M200 112 Q206 122 200 130 Q194 122 200 112 Z" fill={light} />
    </g>
  );
};

const CouscousArgelia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="170" rx="35" ry="10" fill={dark} />
      <path d="M170 170 Q170 145 200 145 Q230 145 230 170 Z" fill={light} />
      {[[188, 155], [200, 150], [212, 156]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill={accentColor} />
      ))}
    </g>
  );
};

const KabiliaAmazigh: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 185 L180 140 L200 165 L220 130 L245 185 Z" fill={accentColor} />
      <rect x="188" y="155" width="12" height="30" fill={light} />
      <rect x="204" y="145" width="12" height="40" fill={dark} />
    </g>
  );
};

export const algeriaIllustrations: Record<string, IllustrationDefinition> = {
  "mayor-pais-africa": { component: MayorPaisAfrica },
  "casbah-argel": { component: CasbahArgel },
  "tassili-najjer": { component: TassiliNajjer },
  "tuareg-argelia": { component: TuaregArgelia, variant: "medallion" },
  "rai-musica": { component: RaiMusica, variant: "medallion" },
  "guerra-independencia": { component: GuerraIndependencia },
  "valle-mzab": { component: ValleMzab, variant: "medallion" },
  "gas-argelia": { component: GasArgelia, variant: "medallion" },
  "couscous-argelia": { component: CouscousArgelia },
  "kabilia-amazigh": { component: KabiliaAmazigh },
};
