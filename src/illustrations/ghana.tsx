import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AtaudesDeFantasia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 168 Q188 158 200 160 Q212 158 220 168 L214 178 L186 178 Z" fill={accentColor} />
      <path d="M180 168 L172 164 L178 172 Z" fill={dark} />
      <path d="M220 168 L228 164 L222 172 Z" fill={dark} />
      <circle cx="196" cy="168" r="1.6" fill={light} />
      <circle cx="204" cy="168" r="1.6" fill={light} />
    </g>
  );
};

const KenteTejidoDeReyes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="182" y="150" width="36" height="8" fill={accentColor} />
      <rect x="182" y="160" width="36" height="8" fill={dark} />
      <rect x="182" y="170" width="36" height="8" fill={light} />
      <rect x="182" y="150" width="6" height="28" fill={dark} opacity="0.5" />
      <rect x="212" y="150" width="6" height="28" fill={dark} opacity="0.5" />
    </g>
  );
};

const TaburereDoradoAshanti: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 168 Q186 156 200 156 Q214 156 214 168 L214 172 L186 172 Z" fill={accentColor} />
      <rect x="188" y="172" width="6" height="10" fill={dark} />
      <rect x="206" y="172" width="6" height="10" fill={dark} />
      <ellipse cx="200" cy="182" rx="20" ry="3" fill={light} opacity="0.6" />
    </g>
  );
};

const SimbolosAdinkra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path
        d="M204 150 Q192 152 190 164 Q189 172 196 174 Q192 168 195 162 Q198 156 206 156"
        fill="none"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="206" cy="156" r="3" fill={accentColor} />
      <path d="M188 178 L212 178" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const CastilloDeCapeCoast: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="182" y="156" width="36" height="22" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <rect x="188" y="164" width="6" height="14" fill={dark} />
      <rect x="182" y="150" width="6" height="8" fill={light} stroke={accentColor} strokeWidth="1" />
      <rect x="212" y="150" width="6" height="8" fill={light} stroke={accentColor} strokeWidth="1" />
    </g>
  );
};

const PrimeraIndependenciaAfricana: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.4);
  return (
    <g>
      <path
        d="M200 148 L204 160 L217 160 L206 168 L210 180 L200 172 L190 180 L194 168 L183 160 L196 160 Z"
        fill={accentColor}
        stroke={light}
        strokeWidth="1"
      />
    </g>
  );
};

const SegundoMayorProductorDeCacao: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M200 150 Q214 158 210 174 Q204 182 200 178 Q196 182 190 174 Q186 158 200 150 Z" fill={accentColor} />
      <ellipse cx="196" cy="164" rx="3" ry="4" fill={light} />
      <ellipse cx="204" cy="170" rx="3" ry="4" fill={light} />
      <path d="M200 150 Q198 164 200 178" stroke={dark} strokeWidth="1.5" fill="none" opacity="0.6" />
    </g>
  );
};

const PuenteDeCopasDeKakum: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M182 160 Q200 172 218 160" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="188" y1="163" x2="188" y2="178" stroke={accentColor} strokeWidth="3" />
      <line x1="212" y1="163" x2="212" y2="178" stroke={accentColor} strokeWidth="3" />
      <line x1="200" y1="167" x2="200" y2="178" stroke={accentColor} strokeWidth="3" />
    </g>
  );
};

const FestivalHomowo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="170" rx="18" ry="9" fill={accentColor} />
      <ellipse cx="200" cy="167" rx="14" ry="6" fill={light} />
      <circle cx="195" cy="166" r="1.6" fill={dark} />
      <circle cx="200" cy="164" r="1.6" fill={dark} />
      <circle cx="205" cy="166" r="1.6" fill={dark} />
    </g>
  );
};

const TamboresParlantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 152 Q200 160 190 168 L190 168 Q200 176 190 178" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M190 150 Q182 164 190 178 L210 178 Q218 164 210 150 Z" fill={accentColor} />
      <ellipse cx="200" cy="150" rx="10" ry="4" fill={light} />
      <ellipse cx="200" cy="178" rx="10" ry="4" fill={light} />
    </g>
  );
};

export const ghanaIllustrations: Record<string, IllustrationDefinition> = {
  "ataudes-de-fantasia": { component: AtaudesDeFantasia },
  "kente-tejido-de-reyes": { component: KenteTejidoDeReyes },
  "taburete-dorado-ashanti": { component: TaburereDoradoAshanti, variant: "medallion" },
  "simbolos-adinkra": { component: SimbolosAdinkra },
  "castillo-de-cape-coast": { component: CastilloDeCapeCoast },
  "primera-independencia-africana": { component: PrimeraIndependenciaAfricana, variant: "medallion" },
  "segundo-mayor-productor-de-cacao": { component: SegundoMayorProductorDeCacao },
  "puente-de-copas-de-kakum": { component: PuenteDeCopasDeKakum },
  "festival-homowo": { component: FestivalHomowo },
  "tambores-parlantes": { component: TamboresParlantes },
};
