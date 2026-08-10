import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CuatroHemisferios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="150" r="30" fill={light} />
      <ellipse cx="200" cy="150" rx="30" ry="12" fill="none" stroke={accentColor} strokeWidth="2" />
      <line x1="200" y1="120" x2="200" y2="180" stroke={accentColor} strokeWidth="2" />
      <line x1="170" y1="150" x2="230" y2="150" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LineaFechaKiribati: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 185 Q180 160 200 160 Q220 160 220 185 Z" fill={light} />
      <path d="M155 130 Q200 115 245 130" fill="none" stroke={accentColor} strokeWidth="3" strokeDasharray="6 5" />
      <circle cx="245" cy="130" r="3" fill={dark} />
    </g>
  );
};

const KiritimatiAtolon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="155" rx="34" ry="20" fill="none" stroke={accentColor} strokeWidth="8" />
      <ellipse cx="200" cy="155" rx="18" ry="10" fill={light} />
      <circle cx="200" cy="155" r="3" fill={dark} />
    </g>
  );
};

const AreaMarinaProtegida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 160 Q195 145 220 158 Q195 172 170 160 Z" fill={accentColor} />
      <path d="M220 158 L232 150 L230 166 Z" fill={dark} />
      <circle cx="225" cy="130" r="10" fill={light} opacity="0.7" />
    </g>
  );
};

const BanabaFosfatoReubicacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 185 Q165 165 200 163 Q235 165 235 185 Z" fill={dark} />
      <path d="M215 145 Q235 140 240 150 L220 155 Z" fill={accentColor} />
      <line x1="218" y1="148" x2="218" y2="160" stroke={light} strokeWidth="2" />
    </g>
  );
};

const ManeabaCasaReunion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M160 165 L200 130 L240 165 Z" fill={accentColor} />
      <line x1="175" y1="185" x2="175" y2="155" stroke={dark} strokeWidth="4" />
      <line x1="225" y1="185" x2="225" y2="155" stroke={dark} strokeWidth="4" />
      <line x1="200" y1="185" x2="200" y2="145" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const CompraTierraFiyi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="175" cy="175" rx="16" ry="6" fill={light} />
      <ellipse cx="225" cy="175" rx="16" ry="6" fill={accentColor} />
      <path d="M185 168 L212 168" stroke={dark} strokeWidth="2" strokeDasharray="4 4" />
      <path d="M206 163 L214 168 L206 173" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BatallaTarawa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 165 Q180 145 200 145 Q220 145 220 165 Z" fill={accentColor} />
      <rect x="176" y="165" width="48" height="6" fill={dark} />
      <rect x="185" y="171" width="30" height="14" fill={light} />
    </g>
  );
};

const TeBikeDanza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="197" y="140" width="6" height="40" fill={accentColor} />
      <path d="M200 150 L175 135 M200 150 L225 135" stroke={dark} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="200" cy="130" r="8" fill={light} />
    </g>
  );
};

const IndependenciaGilbert: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M170 155 Q185 140 205 148 Q195 152 195 158 Q212 152 228 162 Q208 168 195 162 Q188 170 175 168 Q182 160 170 155 Z"
        fill={light}
      />
      <circle cx="178" cy="152" r="2.2" fill={dark} />
    </g>
  );
};

export const kiribatiIllustrations: Record<string, IllustrationDefinition> = {
  "cuatro-hemisferios": { component: CuatroHemisferios, variant: "medallion" },
  "linea-fecha-kiribati": { component: LineaFechaKiribati },
  "kiritimati-atolon": { component: KiritimatiAtolon, variant: "medallion" },
  "area-marina-protegida": { component: AreaMarinaProtegida },
  "banaba-fosfato-reubicacion": { component: BanabaFosfatoReubicacion },
  "maneaba-casa-reunion": { component: ManeabaCasaReunion },
  "compra-tierra-fiyi": { component: CompraTierraFiyi },
  "batalla-tarawa": { component: BatallaTarawa },
  "te-bike-danza": { component: TeBikeDanza, variant: "medallion" },
  "independencia-gilbert": { component: IndependenciaGilbert },
};
