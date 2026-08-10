import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const IslasGalapagos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 175 a25 15 0 1 0 50 0 a25 15 0 1 0 -50 0 Z" fill={dark} />
      <path d="M225 172 q10 -4 12 2 q-6 6 -12 2 Z" fill={accentColor} />
      <path d="M180 165 q4 -8 6 0" stroke={light} strokeWidth="3" fill="none" />
    </g>
  );
};

const MitadDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="185" y="115" width="30" height="55" fill={dark} />
      <path d="M180 170 h40 v10 h-40 Z" fill={light} />
      <line x1="155" y1="182" x2="245" y2="182" stroke={accentColor} strokeWidth="4" />
    </g>
  );
};

const QuitoPatrimonio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="140" width="60" height="45" fill={light} />
      <rect x="182" y="110" width="12" height="35" fill={accentColor} />
      <rect x="206" y="110" width="12" height="35" fill={accentColor} />
      <path d="M182 110 L188 100 L194 110 Z" fill={dark} />
      <path d="M206 110 L212 100 L218 110 Z" fill={dark} />
    </g>
  );
};

const SombreroDePanama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="45" ry="12" fill={accentColor} />
      <path d="M180 158 a20 20 0 0 1 40 0 Z" fill={light} />
      <ellipse cx="200" cy="158" rx="45" ry="12" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CacaoFinoDeAroma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M185 115 q25 5 25 35 q0 25 -25 35 q-10 -30 -5 -35 q-5 -5 5 -35 Z" fill={accentColor} />
      <path d="M190 130 q10 3 10 20 q0 14 -10 20" fill="none" stroke={dark} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={198 - i * 2} cy={140 + i * 12} r="4" fill={light} />
      ))}
    </g>
  );
};

const MercadoOtavalo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="125" width="70" height="50" fill={light} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={165 + i * 17.5} y="125" width="9" height="50" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
    </g>
  );
};

const AvenidaDeLosVolcanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M155 185 L180 130 L205 185 Z" fill={accentColor} />
      <path d="M205 185 L230 120 L245 185 Z" fill={dark} />
      <path d="M172 145 L180 130 L188 145 Z" fill={light} />
      <path d="M222 138 L230 120 L238 138 Z" fill={light} />
    </g>
  );
};

const Dolarizacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="140" width="70" height="35" rx="4" fill={accentColor} />
      <circle cx="200" cy="157" r="14" fill={light} />
      <path d="M195 150 h10 M195 157 h10 M195 164 h10" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const AmazoniaYasuni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 150 Q175 130 165 145 Q180 155 200 150 Z" fill={accentColor} />
      <path d="M200 150 Q225 130 235 145 Q220 155 200 150 Z" fill={light} />
      <line x1="200" y1="150" x2="200" y2="175" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const RosasEcuatorianas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="140" r="18" fill={accentColor} />
      <circle cx="200" cy="140" r="10" fill={light} />
      <rect x="197" y="155" width="6" height="30" fill={dark} />
    </g>
  );
};

export const ecuadorIllustrations: Record<string, IllustrationDefinition> = {
  "islas-galapagos": { component: IslasGalapagos },
  "mitad-del-mundo": { component: MitadDelMundo, variant: "medallion" },
  "quito-patrimonio": { component: QuitoPatrimonio },
  "sombrero-de-panama": { component: SombreroDePanama, variant: "medallion" },
  "cacao-fino-de-aroma": { component: CacaoFinoDeAroma },
  "mercado-otavalo": { component: MercadoOtavalo },
  "avenida-de-los-volcanes": { component: AvenidaDeLosVolcanes },
  dolarizacion: { component: Dolarizacion, variant: "medallion" },
  "amazonia-yasuni": { component: AmazoniaYasuni },
  "rosas-ecuatorianas": { component: RosasEcuatorianas },
};
