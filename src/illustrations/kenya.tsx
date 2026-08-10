import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GranMigracionMasaiMara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 165 h80 v14 h-80 Z" fill={light} />
      {[170, 190, 210, 225].map((x, i) => (
        <path key={x} d={`M${x} 165 l6 -14 l6 14 Z`} fill={i % 2 === 0 ? accentColor : dark} />
      ))}
    </g>
  );
};

const PuebloMasai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="120" width="60" height="55" fill={accentColor} />
      {[0, 1, 2].map((row) => (
        <line key={row} x1="170" y1={135 + row * 15} x2="230" y2={135 + row * 15} stroke={dark} strokeWidth="3" />
      ))}
      <circle cx="200" cy="147" r="6" fill={light} />
    </g>
  );
};

const MPesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="115" width="40" height="65" rx="6" fill={dark} />
      <rect x="185" y="122" width="30" height="45" fill={light} />
      <circle cx="200" cy="150" r="10" fill={accentColor} />
    </g>
  );
};

const CorredoresKeniatas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 185 L190 155 L182 140 L200 130 L205 150 L220 145" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <circle cx="203" cy="120" r="8" fill={dark} />
      <path d="M155 185 h90" stroke={light} strokeWidth="3" strokeDasharray="6 6" />
    </g>
  );
};

const MonteKenia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M160 185 L195 115 L230 185 Z" fill={accentColor} />
      <path d="M182 145 L195 115 L208 145 L195 155 Z" fill={light} />
      <path d="M170 185 L195 140 L220 185 Z" fill={dark} opacity="0.3" />
    </g>
  );
};

const CafeKeniata: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 140 h35 v25 a17.5 17.5 0 0 1 -35 0 Z" fill={accentColor} />
      <path d="M212 145 h10 a8 10 0 0 1 0 20 h-10 Z" fill={dark} />
      <path d="M185 130 q3 -8 -2 -14 M198 130 q3 -8 -2 -14" stroke={light} strokeWidth="2" fill="none" />
    </g>
  );
};

const LenguaSwahili: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 130 h45 v26 h-16 l-8 11 v-11 h-21 Z" fill={accentColor} />
      <path d="M212 150 h30 v20 h-11 l-6 9 v-9 h-13 Z" fill={light} />
      <circle cx="182" cy="143" r="2.5" fill={dark} />
      <circle cx="193" cy="143" r="2.5" fill={dark} />
    </g>
  );
};

const FlamencosLagoNakuru: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="200" cy="180" rx="45" ry="8" fill={light} opacity="0.5" />
      <path d="M185 180 V150 Q185 140 195 140 Q200 140 198 148 L188 180 Z" fill={accentColor} />
      <circle cx="197" cy="139" r="5" fill={dark} />
      <path d="M215 180 V158 Q215 148 223 150 L212 180 Z" fill={light} />
    </g>
  );
};

const CostaSwahiliMombasa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="155" width="30" height="30" fill={dark} />
      <path d="M210 185 L210 130 L235 155 Z" fill={light} />
      <rect x="207" y="150" width="6" height="35" fill={accentColor} />
    </g>
  );
};

const GranValleDelRift: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M155 185 L185 120 L200 150 L215 120 L245 185 Z" fill={accentColor} />
      <path d="M195 185 L200 160 L205 185 Z" fill={dark} />
      <circle cx="200" cy="150" r="4" fill={light} />
    </g>
  );
};

export const kenyaIllustrations: Record<string, IllustrationDefinition> = {
  "gran-migracion-masai-mara": { component: GranMigracionMasaiMara },
  "pueblo-masai": { component: PuebloMasai, variant: "medallion" },
  "m-pesa": { component: MPesa },
  "corredores-keniatas": { component: CorredoresKeniatas },
  "monte-kenia": { component: MonteKenia },
  "cafe-keniata": { component: CafeKeniata, variant: "medallion" },
  "lengua-swahili": { component: LenguaSwahili },
  "flamencos-lago-nakuru": { component: FlamencosLagoNakuru },
  "costa-swahili-mombasa": { component: CostaSwahiliMombasa },
  "gran-valle-del-rift": { component: GranValleDelRift },
};
