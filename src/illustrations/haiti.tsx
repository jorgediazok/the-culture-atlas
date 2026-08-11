import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PrimeraRepublicaNegraIndependiente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="190" cy="152" r="7" fill="none" stroke={light} strokeWidth="3" />
      <circle cx="204" cy="160" r="7" fill="none" stroke={light} strokeWidth="3" />
      <path d="M196 154 L198 158" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <path d="M186 172 L214 172 L214 178 L186 178 Z" fill={accentColor} />
      <path d="M186 172 Q200 166 214 172" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const DeudaDeLaIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="158" width="24" height="4" fill={dark} transform="rotate(-12 200 160)" />
      <line x1="200" y1="158" x2="200" y2="148" stroke={dark} strokeWidth="2" />
      <circle cx="190" cy="166" r="6" fill={accentColor} />
      <circle cx="212" cy="152" r="6" fill={light} />
    </g>
  );
};

const CitadelleLaferriere: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 178 L188 150 L212 150 L218 178 Z" fill={accentColor} />
      <rect x="190" y="146" width="6" height="6" fill={dark} />
      <rect x="204" y="146" width="6" height="6" fill={dark} />
      <path d="M182 178 L186 160 L214 160 L218 178 Z" fill={light} opacity="0.3" />
    </g>
  );
};

const VuduHaitiano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M197 150 L203 150 L201 176 L199 176 Z" fill={accentColor} />
      <path d="M200 132 Q206 140 200 148 Q194 140 200 132 Z" fill={light} />
      <circle cx="188" cy="168" r="2.4" fill={dark} />
      <circle cx="212" cy="168" r="2.4" fill={dark} />
      <circle cx="188" cy="176" r="2.4" fill={light} />
      <circle cx="212" cy="176" r="2.4" fill={light} />
    </g>
  );
};

const KreyolAyisyen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M178 148 Q178 135 195 135 L212 135 Q222 135 222 148 Q222 159 212 159 L190 159 L182 168 L186 158 Q178 156 178 148 Z"
        fill={light}
      />
      <circle cx="192" cy="147" r="2.6" fill={dark} />
      <circle cx="200" cy="147" r="2.6" fill={accentColor} />
      <circle cx="208" cy="147" r="2.6" fill={dark} />
    </g>
  );
};

const ArteNaifHaitiano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 168 Q186 148 206 148 Q212 148 212 158 Q212 164 204 164 L196 164 Q192 164 192 168 Z" fill={light} />
      <circle cx="196" cy="154" r="2.6" fill={dark} />
      <circle cx="206" cy="154" r="2.6" fill={accentColor} />
      <circle cx="201" cy="160" r="2.6" fill={dark} />
      <line x1="192" y1="168" x2="188" y2="178" stroke={dark} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
};

const ToussaintLouverture: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 156 Q200 146 216 156 Q216 162 200 162 Q184 162 184 156 Z" fill={accentColor} />
      <rect x="196" y="148" width="8" height="8" fill={dark} />
      <line x1="196" y1="168" x2="212" y2="184" stroke={light} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="196" y1="184" x2="204" y2="176" stroke={light} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  );
};

const KonpaMusicaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="146" width="14" height="20" rx="2" fill={accentColor} />
      <rect x="200" y="150" width="14" height="24" rx="2" fill={dark} />
      <circle cx="193" cy="156" r="1.6" fill={light} />
      <circle cx="207" cy="162" r="1.6" fill={light} />
    </g>
  );
};

const CarnavalYRara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 168 Q186 146 200 146 Q214 146 214 168 Q200 176 186 168 Z" fill={accentColor} />
      <circle cx="194" cy="156" r="2.4" fill={light} />
      <circle cx="206" cy="156" r="2.4" fill={light} />
      <path d="M197 162 Q200 165 203 162" fill="none" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const GastronomiaHaitiana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="164" rx="20" ry="9" fill={light} />
      <path d="M188 160 Q200 152 212 160 Q206 164 200 160 Q194 164 188 160 Z" fill={accentColor} />
      <circle cx="192" cy="168" r="2" fill={dark} opacity="0.6" />
      <circle cx="208" cy="168" r="2" fill={dark} opacity="0.6" />
    </g>
  );
};

export const haitiIllustrations: Record<string, IllustrationDefinition> = {
  "primera-republica-negra-independiente": { component: PrimeraRepublicaNegraIndependiente },
  "deuda-de-la-independencia": { component: DeudaDeLaIndependencia },
  "citadelle-laferriere": { component: CitadelleLaferriere, variant: "medallion" },
  "vudu-haitiano": { component: VuduHaitiano },
  "kreyol-ayisyen": { component: KreyolAyisyen },
  "arte-naif-haitiano": { component: ArteNaifHaitiano },
  "toussaint-louverture": { component: ToussaintLouverture },
  "konpa-musica-nacional": { component: KonpaMusicaNacional },
  "carnaval-y-rara": { component: CarnavalYRara, variant: "medallion" },
  "gastronomia-haitiana": { component: GastronomiaHaitiana },
};
