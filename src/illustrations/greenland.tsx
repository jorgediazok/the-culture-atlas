import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CapaDeHielo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 175 L190 138 L205 158 L215 145 L225 175 Z" fill={light} />
      <path d="M195 175 L205 158 L215 145 L220 175 Z" fill={dark} opacity="0.5" />
    </g>
  );
};

const SolDeMedianoche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="165" r="16" fill={accentColor} />
      <path d="M175 165 L225 165" stroke={dark} strokeWidth="2" opacity="0.6" />
      <path d="M180 178 L170 186 M220 178 L230 186" stroke={light} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

const TrineosDePerros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M178 175 L222 175 L216 160 L184 160 Z" fill={accentColor} />
      <line x1="184" y1="160" x2="178" y2="175" stroke={dark} strokeWidth="2" />
      <circle cx="195" cy="150" r="5" fill={light} />
    </g>
  );
};

const IdiomaGroenlandes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M178 148 Q178 135 195 135 L212 135 Q222 135 222 148 Q222 159 212 159 L190 159 L182 168 L186 158 Q178 156 178 148 Z"
        fill={light}
      />
      <circle cx="190" cy="147" r="2" fill={dark} />
      <circle cx="200" cy="147" r="2" fill={dark} />
      <circle cx="210" cy="147" r="2" fill={accentColor} />
    </g>
  );
};

const CazaSubsistencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 175 Q200 168 220 175 Q200 180 180 175 Z" fill={light} />
      <line x1="215" y1="150" x2="205" y2="172" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <path d="M212 150 L219 147 L215 156 Z" fill={accentColor} />
    </g>
  );
};

const NombreGroenlandia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="140" width="40" height="30" fill={light} />
      <path d="M186 148 Q196 158 206 148 Q214 158 216 150" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="178" r="4" fill={accentColor} />
    </g>
  );
};

const AurorasBoreales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 160 Q185 140 200 160 Q215 140 230 160" fill="none" stroke={accentColor} strokeWidth="3" opacity="0.7" />
      <path d="M175 172 Q190 155 205 172 Q220 155 228 172" fill="none" stroke={light} strokeWidth="3" opacity="0.6" />
      {[188, 200, 212].map((x) => (
        <circle key={x} cx={x} cy={148} r="1.2" fill={dark} />
      ))}
    </g>
  );
};

const AutonomiaDinamarca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="150" width="16" height="28" fill={light} />
      <polygon points="180,150 196,150 188,138" fill={light} />
      <rect x="204" y="155" width="16" height="23" fill={dark} />
      <polygon points="204,155 220,155 212,145" fill={dark} />
      <rect x="196" y="172" width="8" height="6" fill={accentColor} />
    </g>
  );
};

const InvencionDelKayak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M172 168 Q200 155 228 168 Q200 178 172 168 Z" fill={accentColor} />
      <line x1="180" y1="150" x2="220" y2="186" stroke={dark} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="182" cy="152" rx="5" ry="2" fill={light} transform="rotate(35 182 152)" />
      <ellipse cx="218" cy="184" rx="5" ry="2" fill={light} transform="rotate(35 218 184)" />
    </g>
  );
};

const PrimeraLineaCambioClimatico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M185 140 L200 135 L198 160 L210 165 L192 178 L188 158 Z" fill={light} />
      <line x1="199" y1="148" x2="199" y2="168" stroke={dark} strokeWidth="1.5" strokeDasharray="2 3" />
    </g>
  );
};

export const greenlandIllustrations: Record<string, IllustrationDefinition> = {
  "capa-de-hielo": { component: CapaDeHielo },
  "sol-de-medianoche": { component: SolDeMedianoche, variant: "medallion" },
  "trineos-de-perros": { component: TrineosDePerros },
  "idioma-groenlandes": { component: IdiomaGroenlandes },
  "caza-subsistencia": { component: CazaSubsistencia },
  "nombre-groenlandia": { component: NombreGroenlandia },
  "auroras-boreales": { component: AurorasBoreales },
  "autonomia-dinamarca": { component: AutonomiaDinamarca },
  "invencion-del-kayak": { component: InvencionDelKayak },
  "primera-linea-cambio-climatico": { component: PrimeraLineaCambioClimatico, variant: "medallion" },
};
