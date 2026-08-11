import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DiaDeLosMuertos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 135 Q182 140 182 158 Q182 175 200 182 Q218 175 218 158 Q218 140 200 135 Z" fill={light} />
      <circle cx="192" cy="155" r="3" fill={dark} />
      <circle cx="208" cy="155" r="3" fill={dark} />
      <path d="M194 168 Q200 172 206 168" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="140" r="4" fill={accentColor} />
    </g>
  );
};

const Mariachi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 165 Q180 148 200 145 Q220 148 220 165 Q200 172 180 165 Z" fill={light} />
      <ellipse cx="200" cy="150" rx="6" ry="4" fill={dark} />
      <rect x="196" y="172" width="8" height="16" fill={accentColor} />
    </g>
  );
};

const ChocolateOrigen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 135 Q178 155 188 178 Q200 184 212 178 Q222 155 212 135 Q200 128 188 135 Z" fill={accentColor} />
      <ellipse cx="197" cy="152" rx="5" ry="7" fill={dark} />
      <ellipse cx="208" cy="162" rx="5" ry="7" fill={dark} />
      <ellipse cx="197" cy="170" rx="5" ry="7" fill={light} />
    </g>
  );
};

const LuchaLibre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 150 Q182 135 200 133 Q218 135 218 150 L218 165 Q200 172 182 165 Z" fill={accentColor} />
      <path d="M190 150 L196 158 L190 158 Z" fill={light} />
      <path d="M210 150 L204 158 L210 158 Z" fill={light} />
      <path d="M192 165 Q200 170 208 165" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ChichenItza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 130 L215 178 L185 178 Z" fill={accentColor} />
      <path d="M200 130 L207 178 L193 178 Z" fill={dark} opacity="0.5" />
      <rect x="192" y="170" width="16" height="8" fill={light} />
      <rect x="195" y="158" width="10" height="6" fill={light} opacity="0.7" />
    </g>
  );
};

const TacosComidaCallejera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M178 160 Q178 145 200 145 Q222 145 222 160 Q200 175 178 160 Z" fill={light} />
      <circle cx="192" cy="156" r="3" fill={dark} />
      <circle cx="200" cy="160" r="3" fill={accentColor} />
      <circle cx="208" cy="156" r="3" fill={dark} />
    </g>
  );
};

const FridaKahlo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="158" rx="16" ry="20" fill={light} />
      <path d="M188 148 Q200 142 212 148" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="192" cy="153" r="1.8" fill={dark} />
      <circle cx="208" cy="153" r="1.8" fill={dark} />
      <circle cx="188" cy="142" r="3" fill={accentColor} />
      <circle cx="212" cy="142" r="3" fill={accentColor} />
    </g>
  );
};

const MuralismoMexicano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="135" width="40" height="30" fill={light} />
      <path d="M180 165 L188 130 M220 165 L212 130 M200 178 L200 135" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="192" cy="148" r="4" fill={accentColor} />
      <path d="M202 155 L214 148" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const TenochtitlanLago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="192" cy="165" rx="18" ry="8" fill={light} />
      <ellipse cx="215" cy="158" rx="12" ry="6" fill={light} opacity="0.8" />
      <path d="M185 165 L185 152 L200 152 L200 165" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M182 172 Q200 178 220 170" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const VirgenDeGuadalupe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 130 Q182 145 186 168 Q190 182 200 186 Q210 182 214 168 Q218 145 200 130 Z" fill={accentColor} />
      <path d="M200 138 Q190 150 193 166" fill="none" stroke={light} strokeWidth="1.5" opacity="0.7" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="200"
          y1="128"
          x2="200"
          y2="120"
          stroke={dark}
          strokeWidth="2"
          opacity="0.6"
          transform={`rotate(${deg} 200 158)`}
        />
      ))}
    </g>
  );
};

export const mexicoIllustrations: Record<string, IllustrationDefinition> = {
  "dia-de-los-muertos": { component: DiaDeLosMuertos, variant: "medallion" },
  mariachi: { component: Mariachi },
  "chocolate-origen": { component: ChocolateOrigen },
  "lucha-libre": { component: LuchaLibre, variant: "medallion" },
  "chichen-itza": { component: ChichenItza },
  "tacos-comida-callejera": { component: TacosComidaCallejera, variant: "medallion" },
  "frida-kahlo": { component: FridaKahlo },
  "muralismo-mexicano": { component: MuralismoMexicano },
  "tenochtitlan-lago": { component: TenochtitlanLago },
  "virgen-de-guadalupe": { component: VirgenDeGuadalupe, variant: "medallion" },
};
