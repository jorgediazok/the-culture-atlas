import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AbolicionDelEjercito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="150" width="4" height="30" fill={dark} transform="rotate(20 194 165)" />
      <rect x="204" y="150" width="4" height="30" fill={dark} transform="rotate(-20 206 165)" />
      <path d="M195 148 Q200 142 205 148" fill="none" stroke={light} strokeWidth="2" />
      <ellipse cx="200" cy="145" rx="10" ry="6" fill={light} />
    </g>
  );
};

const PuraVida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="158" r="16" fill={accentColor} />
      <path d="M192 155 Q200 162 208 155" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="194" cy="152" r="1.8" fill={dark} />
      <circle cx="206" cy="152" r="1.8" fill={dark} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1="200"
          y1="140"
          x2="200"
          y2="134"
          stroke={light}
          strokeWidth="2"
          transform={`rotate(${deg} 200 158)`}
        />
      ))}
    </g>
  );
};

const BiodiversidadExtrema: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="16" ry="12" fill={accentColor} />
      <circle cx="192" cy="155" r="3" fill={dark} />
      <circle cx="208" cy="155" r="3" fill={dark} />
      <circle cx="200" cy="166" r="3" fill={light} />
      <path d="M186 160 L178 156 M214 160 L222 156" stroke={dark} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

const CarretasPintadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="160" r="20" fill="none" stroke={accentColor} strokeWidth="4" />
      <circle cx="200" cy="160" r="20" fill="none" stroke={dark} strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="200" cy="160" r="5" fill={light} />
      {[0, 45, 90, 135].map((deg) => (
        <line key={deg} x1="200" y1="140" x2="200" y2="180" stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 200 160)`} />
      ))}
    </g>
  );
};

const CafeCostarricense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="192" cy="165" rx="7" ry="10" fill={accentColor} transform="rotate(-15 192 165)" />
      <line x1="192" y1="158" x2="192" y2="172" stroke={dark} strokeWidth="1.5" transform="rotate(-15 192 165)" />
      <ellipse cx="208" cy="158" rx="7" ry="10" fill={dark} transform="rotate(15 208 158)" />
      <line x1="208" y1="151" x2="208" y2="165" stroke={light} strokeWidth="1.5" transform="rotate(15 208 158)" />
    </g>
  );
};

const QuetzalResplandeciente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 150 Q192 165 195 182 Q198 168 200 165 Q202 168 205 182 Q208 165 200 150 Z" fill={accentColor} />
      <ellipse cx="200" cy="145" rx="8" ry="11" fill={accentColor} />
      <circle cx="200" cy="132" r="6" fill={dark} />
      <ellipse cx="200" cy="150" rx="4" ry="6" fill={light} />
    </g>
  );
};

const PeninsulaNicoyaLongevidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M185 178 Q195 145 200 130 Q205 145 215 178 Z" fill={light} />
      <path d="M200 178 L200 140" stroke={dark} strokeWidth="2" opacity="0.5" />
      <ellipse cx="200" cy="180" rx="22" ry="4" fill={accentColor} opacity="0.6" />
    </g>
  );
};

const VolcanArenal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 180 L200 135 L220 180 Z" fill={accentColor} />
      <path d="M192 155 Q196 145 200 148 Q204 142 208 150" fill="none" stroke={light} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <path d="M200 135 L196 142 L204 142 Z" fill={dark} />
    </g>
  );
};

const PerezososEmbajadores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <line x1="180" y1="145" x2="222" y2="145" stroke={dark} strokeWidth="3" />
      <ellipse cx="200" cy="160" rx="12" ry="14" fill={accentColor} />
      <circle cx="200" cy="148" r="7" fill={light} />
      <circle cx="197" cy="146" r="1.4" fill={dark} />
      <circle cx="203" cy="146" r="1.4" fill={dark} />
      <path d="M188 148 L182 145 M212 148 L218 145" stroke={dark} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

const EcoturismoPionero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 130 L215 158 L185 158 Z" fill={accentColor} />
      <path d="M200 148 L212 172 L188 172 Z" fill={dark} opacity="0.85" />
      <rect x="197" y="172" width="6" height="12" fill={light} />
    </g>
  );
};

export const costaRicaIllustrations: Record<string, IllustrationDefinition> = {
  "abolicion-del-ejercito": { component: AbolicionDelEjercito },
  "pura-vida": { component: PuraVida, variant: "medallion" },
  "biodiversidad-extrema": { component: BiodiversidadExtrema, variant: "medallion" },
  "carretas-pintadas": { component: CarretasPintadas, variant: "medallion" },
  "cafe-costarricense": { component: CafeCostarricense },
  "quetzal-resplandeciente": { component: QuetzalResplandeciente },
  "peninsula-nicoya-longevidad": { component: PeninsulaNicoyaLongevidad },
  "volcan-arenal": { component: VolcanArenal },
  "perezosos-embajadores": { component: PerezososEmbajadores },
  "ecoturismo-pionero": { component: EcoturismoPionero },
};
