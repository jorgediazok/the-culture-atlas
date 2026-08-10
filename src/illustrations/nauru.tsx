import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const FosfatoNauru: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 185 Q165 160 200 158 Q235 160 235 185 Z" fill={light} />
      <rect x="196" y="120" width="8" height="45" fill={dark} />
      <path d="M204 122 L228 110 L226 122 L204 132 Z" fill={accentColor} />
    </g>
  );
};

const TopografiaLunar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M160 185 L168 150 L176 170 L184 140 L192 170 L200 145 L208 170 L216 150 L224 185 Z" fill={accentColor} />
      <path d="M172 185 L178 165 L184 185 Z" fill={dark} opacity="0.5" />
    </g>
  );
};

const DiabetesObesidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="195" cy="165" rx="30" ry="10" fill={light} />
      <rect x="215" y="130" width="16" height="26" rx="3" fill={accentColor} />
      <rect x="219" y="136" width="8" height="6" fill={dark} />
    </g>
  );
};

const CentroDetencionRefugiados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[170, 190, 210, 230].map((x) => (
        <line key={x} x1={x} y1="130" x2={x} y2="185" stroke={dark} strokeWidth="3" />
      ))}
      <path d="M170 145 L230 155 M170 165 L230 145 M170 175 L230 165" stroke={light} strokeWidth="1.6" />
    </g>
  );
};

const SinCapitalOficial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="150" width="50" height="35" fill={accentColor} />
      <path d="M170 150 L200 130 L230 150 Z" fill={dark} />
      <rect x="192" y="165" width="16" height="20" fill={light} />
    </g>
  );
};

const PecesDomesticadosLaguna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="170" rx="40" ry="14" fill={light} />
      <path d="M185 168 Q195 160 205 168 Q195 176 185 168 Z" fill={accentColor} />
      <path d="M205 168 L215 162 L215 174 Z" fill={dark} />
    </g>
  );
};

const RefugioFiscalNauru: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="178" y="130" width="44" height="44" rx="4" fill={accentColor} />
      <circle cx="200" cy="152" r="10" fill={light} />
      <circle cx="200" cy="152" r="3" fill={dark} />
    </g>
  );
};

const IdiomaNauruano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 140 h30 v35 l-15 -6 l-15 6 Z" fill={accentColor} />
      <path d="M230 140 h-30 v35 l15 -6 l15 6 Z" fill={light} />
      <line x1="200" y1="140" x2="200" y2="175" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CambioClimaticoNauru: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 180 Q200 172 245 180 L245 185 L155 185 Z" fill={light} />
      <path d="M160 165 Q180 155 200 165 Q220 175 240 165" fill="none" stroke={accentColor} strokeWidth="3" />
      <path d="M170 150 Q190 140 210 150 Q225 158 240 150" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const RecuperacionAmbiental: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 185 L185 160 L195 185 Z" fill={dark} />
      <path d="M205 185 L215 155 L225 185 Z" fill={dark} />
      <path d="M200 185 V165 Q200 155 208 152" stroke={accentColor} strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="208" cy="150" r="4" fill={light} />
    </g>
  );
};

export const nauruIllustrations: Record<string, IllustrationDefinition> = {
  "fosfato-nauru": { component: FosfatoNauru },
  "topografia-lunar": { component: TopografiaLunar },
  "diabetes-obesidad": { component: DiabetesObesidad },
  "centro-detencion-refugiados": { component: CentroDetencionRefugiados },
  "sin-capital-oficial": { component: SinCapitalOficial },
  "peces-domesticados-laguna": { component: PecesDomesticadosLaguna },
  "refugio-fiscal-nauru": { component: RefugioFiscalNauru, variant: "medallion" },
  "idioma-nauruano": { component: IdiomaNauruano },
  "cambio-climatico-nauru": { component: CambioClimaticoNauru },
  "recuperacion-ambiental": { component: RecuperacionAmbiental },
};
