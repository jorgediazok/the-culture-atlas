import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnicoPaisAnglohablante: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M178 148 Q178 135 195 135 L212 135 Q222 135 222 148 Q222 159 212 159 L190 159 L182 168 L186 158 Q178 156 178 148 Z"
        fill={light}
      />
      <text x="200" y="152" fontSize="12" fontWeight="700" textAnchor="middle" fill={dark}>
        EN
      </text>
    </g>
  );
};

const ArrecifeHoyoAzul: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="160" r="20" fill={light} />
      <circle cx="200" cy="160" r="20" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <circle cx="200" cy="160" r="12" fill={dark} />
    </g>
  );
};

const CulturaGarifuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 145 L212 145 L208 178 L192 178 Z" fill={accentColor} />
      <ellipse cx="200" cy="145" rx="12" ry="4" fill={light} />
      <line x1="192" y1="155" x2="208" y2="155" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      <line x1="190" y1="165" x2="210" y2="165" stroke={dark} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const RuinasMayasCaracol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 178 L200 132 L214 178 Z" fill={accentColor} />
      <rect x="194" y="160" width="12" height="18" fill={dark} />
      <rect x="196" y="148" width="8" height="8" fill={light} opacity="0.8" />
    </g>
  );
};

const BajaDensidadPoblacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 132 Q188 148 190 162 Q192 172 200 175 Q208 172 210 162 Q212 148 200 132 Z" fill={accentColor} />
      <rect x="197" y="175" width="6" height="10" fill={dark} />
      <path d="M200 145 Q205 150 202 158" fill="none" stroke={light} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const MosaicoMulticultural: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="144" width="16" height="16" fill={accentColor} />
      <rect x="200" y="144" width="16" height="16" fill={dark} />
      <rect x="184" y="160" width="16" height="16" fill={dark} />
      <rect x="200" y="160" width="16" height="16" fill={light} />
    </g>
  );
};

const ReservaJaguares: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="18" ry="12" fill={accentColor} />
      <circle cx="192" cy="154" r="2" fill={dark} />
      <circle cx="200" cy="150" r="2" fill={dark} />
      <circle cx="208" cy="154" r="2" fill={dark} />
      <circle cx="196" cy="164" r="2" fill={dark} />
      <circle cx="204" cy="164" r="2" fill={dark} />
      <path d="M182 158 L172 154 M218 158 L228 154" stroke={light} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

const Independencia1981: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 135 L200 178" stroke={dark} strokeWidth="3" />
      <path d="M200 135 L222 142 L200 152 Z" fill={accentColor} />
      <circle cx="185" cy="145" r="2" fill={light} />
      <circle cx="215" cy="160" r="2" fill={light} />
      <circle cx="190" cy="168" r="2" fill={light} />
    </g>
  );
};

const CuevaSagradaAtm: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 178 Q180 145 200 140 Q220 145 220 178 Z" fill={dark} />
      <path d="M190 178 Q190 155 200 150 Q210 155 210 178 Z" fill={accentColor} />
      <path d="M196 145 L192 152 M204 145 L208 152" stroke={light} strokeWidth="1.5" opacity="0.7" />
    </g>
  );
};

const ComunidadesMenonitas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 158 Q200 148 218 158 Q200 165 182 158 Z" fill={light} />
      <rect x="197" y="130" width="6" height="16" fill={accentColor} transform="rotate(15 200 138)" />
      <rect x="197" y="130" width="6" height="16" fill={dark} transform="rotate(-15 200 138)" />
    </g>
  );
};

export const belizeIllustrations: Record<string, IllustrationDefinition> = {
  "unico-pais-anglohablante": { component: UnicoPaisAnglohablante },
  "arrecife-hoyo-azul": { component: ArrecifeHoyoAzul, variant: "medallion" },
  "cultura-garifuna": { component: CulturaGarifuna },
  "ruinas-mayas-caracol": { component: RuinasMayasCaracol },
  "baja-densidad-poblacional": { component: BajaDensidadPoblacional },
  "mosaico-multicultural": { component: MosaicoMulticultural, variant: "medallion" },
  "reserva-jaguares": { component: ReservaJaguares },
  "independencia-1981": { component: Independencia1981 },
  "cueva-sagrada-atm": { component: CuevaSagradaAtm },
  "comunidades-menonitas": { component: ComunidadesMenonitas, variant: "medallion" },
};
