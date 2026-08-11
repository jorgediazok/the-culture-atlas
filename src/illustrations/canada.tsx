import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const JarabeArceReserva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M185 145 L188 165 Q188 178 200 178 Q212 178 212 165 L215 145 Z" fill={accentColor} />
      <rect x="192" y="132" width="16" height="13" fill={dark} />
      <circle cx="200" cy="160" r="7" fill={light} />
    </g>
  );
};

const HockeyCunaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path
        d="M195 130 L195 170 Q195 178 210 178 L222 178"
        fill="none"
        stroke={accentColor}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <ellipse cx="182" cy="182" rx="12" ry="5" fill={dark} />
    </g>
  );
};

const MulticulturalismoOficial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const points: [number, number][] = [
    [222, 158],
    [211, 177],
    [189, 177],
    [178, 158],
    [189, 139],
    [211, 139],
  ];
  return (
    <g>
      {points.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="7" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <circle cx="200" cy="158" r="10" fill={light} />
    </g>
  );
};

const BilinguismoFrancesIngles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M172 145 Q172 133 186 133 L204 133 Q214 133 214 145 Q214 155 204 155 L182 155 L174 164 L178 154 Q172 152 172 145 Z"
        fill={light}
      />
      <path
        d="M200 165 Q200 155 212 155 L226 155 Q234 155 234 165 Q234 173 226 173 L215 173 L210 180 L213 172 Q200 171 200 165 Z"
        fill={dark}
      />
    </g>
  );
};

const ArteTotemsCostaNoroeste: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="128" width="16" height="52" fill={accentColor} />
      <circle cx="200" cy="138" r="9" fill={light} />
      <rect x="188" y="150" width="24" height="14" fill={dark} />
      <circle cx="200" cy="172" r="9" fill={light} />
    </g>
  );
};

const PoliciaMontadaRcmp: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="165" rx="30" ry="8" fill={accentColor} />
      <path d="M180 165 Q180 145 200 143 Q220 145 220 165 Z" fill={dark} />
      <circle cx="200" cy="150" r="6" fill={light} />
    </g>
  );
};

const PoutinePlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 150 L218 150 L206 182 L194 182 Z" fill={light} />
      <rect x="188" y="135" width="5" height="20" fill={accentColor} />
      <rect x="197" y="130" width="5" height="25" fill={accentColor} />
      <rect x="206" y="135" width="5" height="20" fill={accentColor} />
      <circle cx="195" cy="165" r="3" fill={dark} />
      <circle cx="205" cy="170" r="3" fill={dark} />
    </g>
  );
};

const TerryFoxMaratonEsperanza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 175 Q175 165 190 163 L210 163 Q216 168 210 175 Z" fill={accentColor} />
      <rect x="195" y="135" width="7" height="30" rx="2" fill={dark} />
      <circle cx="198" cy="133" r="6" fill={light} />
    </g>
  );
};

const GrupoDeLosSiete: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="135" width="40" height="30" fill={light} />
      <path d="M188 165 L195 130 M212 165 L205 130 M200 178 L200 135" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <path d="M186 160 L196 145 L206 158 L214 148" fill="none" stroke={accentColor} strokeWidth="2.5" />
    </g>
  );
};

const NaismithBasquetbol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="188" cy="165" r="16" fill={accentColor} />
      <path
        d="M172 165 L204 165 M188 149 L188 181 M177 154 Q188 165 177 176 M199 154 Q188 165 199 176"
        stroke={dark}
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse cx="220" cy="145" rx="12" ry="4" fill="none" stroke={light} strokeWidth="3" />
    </g>
  );
};

export const canadaIllustrations: Record<string, IllustrationDefinition> = {
  "jarabe-arce-reserva": { component: JarabeArceReserva, variant: "medallion" },
  "hockey-cuna-nacional": { component: HockeyCunaNacional },
  "multiculturalismo-oficial": { component: MulticulturalismoOficial, variant: "medallion" },
  "bilinguismo-frances-ingles": { component: BilinguismoFrancesIngles },
  "arte-totems-costa-noroeste": { component: ArteTotemsCostaNoroeste },
  "policia-montada-rcmp": { component: PoliciaMontadaRcmp },
  "poutine-plato-nacional": { component: PoutinePlatoNacional },
  "terry-fox-maraton-esperanza": { component: TerryFoxMaratonEsperanza },
  "grupo-de-los-siete": { component: GrupoDeLosSiete },
  "naismith-basquetbol": { component: NaismithBasquetbol, variant: "medallion" },
};
