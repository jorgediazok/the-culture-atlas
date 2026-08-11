import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SagradaFamiliaObraInconclusa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 178 L190 140 L196 128 L202 140 L202 178 Z" fill={accentColor} />
      <path d="M204 178 L204 148 L210 136 L216 148 L216 178 Z" fill={dark} />
      <line x1="216" y1="136" x2="222" y2="130" stroke={light} strokeWidth="2.4" />
      <line x1="216" y1="136" x2="220" y2="140" stroke={light} strokeWidth="2.4" />
    </g>
  );
};

const FlamencoArteAndaluz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 176 Q182 168 182 144 Q191 156 200 158 Q209 156 218 144 Q218 168 200 176 Z" fill={accentColor} />
      <path d="M200 158 L200 176" stroke={dark} strokeWidth="1.6" opacity="0.6" />
      <circle cx="196" cy="150" r="2" fill={light} />
      <circle cx="204" cy="150" r="2" fill={light} />
    </g>
  );
};

const EuskeraLenguaMasAntigua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M178 148 Q178 135 195 135 L212 135 Q222 135 222 148 Q222 159 212 159 L190 159 L182 168 L186 158 Q178 156 178 148 Z"
        fill={light}
      />
      <circle cx="192" cy="147" r="3" fill="none" stroke={dark} strokeWidth="1.8" />
      <circle cx="208" cy="147" r="3" fill={accentColor} />
    </g>
  );
};

const CaminoDeSantiago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 140 Q184 148 188 164 Q194 158 200 158 Q206 158 212 164 Q216 148 200 140 Z" fill={accentColor} />
      <line x1="188" y1="164" x2="200" y2="158" stroke={dark} strokeWidth="1.4" opacity="0.6" />
      <line x1="200" y1="158" x2="212" y2="164" stroke={dark} strokeWidth="1.4" opacity="0.6" />
      <line x1="200" y1="164" x2="200" y2="180" stroke={light} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
};

const AlhambraLegadoAndalusi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 178 L186 158 Q186 144 200 144 Q214 144 214 158 L214 178 Z" fill={accentColor} />
      <path d="M192 178 L192 160 Q192 150 200 150 Q208 150 208 160 L208 178 Z" fill={light} />
      <rect x="188" y="150" width="6" height="6" fill={dark} opacity="0.6" />
      <rect x="206" y="150" width="6" height="6" fill={dark} opacity="0.6" />
    </g>
  );
};

const LaTomatina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="158" r="16" fill={accentColor} />
      <path d="M196 144 Q200 138 204 144" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="182" cy="150" r="3" fill={light} opacity="0.85" />
      <circle cx="218" cy="166" r="4" fill={light} opacity="0.85" />
      <circle cx="190" cy="174" r="2.4" fill={light} opacity="0.85" />
    </g>
  );
};

const SanFerminEncierro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="162" rx="20" ry="11" fill={dark} />
      <path d="M186 154 Q182 146 186 142 M214 154 Q218 146 214 142" fill="none" stroke={dark} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M182 172 L192 178 L188 168 Z" fill={light} />
    </g>
  );
};

const HorarioNocturnoEspanol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="158" r="18" fill={light} />
      <circle cx="200" cy="158" r="18" fill="none" stroke={accentColor} strokeWidth="2.4" />
      <line x1="200" y1="158" x2="200" y2="146" stroke={dark} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="200" y1="158" x2="208" y2="160" stroke={dark} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
};

const TapasCulturaDeCompartir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="168" width="40" height="6" fill={dark} />
      <ellipse cx="190" cy="164" rx="9" ry="4" fill={accentColor} />
      <ellipse cx="210" cy="164" rx="9" ry="4" fill={light} />
      <circle cx="188" cy="162" r="1.6" fill={dark} opacity="0.6" />
      <circle cx="212" cy="162" r="1.6" fill={dark} opacity="0.6" />
    </g>
  );
};

const PaellaOrigenValenciano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="22" ry="12" fill={dark} />
      <ellipse cx="200" cy="158" rx="18" ry="9" fill={accentColor} />
      <circle cx="192" cy="156" r="2" fill={light} />
      <circle cx="200" cy="154" r="2" fill={light} />
      <circle cx="208" cy="158" r="2" fill={light} />
      <rect x="176" y="158" width="8" height="4" fill={dark} />
      <rect x="216" y="158" width="8" height="4" fill={dark} />
    </g>
  );
};

export const spainIllustrations: Record<string, IllustrationDefinition> = {
  "sagrada-familia-obra-inconclusa": { component: SagradaFamiliaObraInconclusa },
  "flamenco-arte-andaluz": { component: FlamencoArteAndaluz },
  "euskera-lengua-mas-antigua": { component: EuskeraLenguaMasAntigua },
  "camino-de-santiago": { component: CaminoDeSantiago, variant: "medallion" },
  "alhambra-legado-andalusi": { component: AlhambraLegadoAndalusi },
  "la-tomatina": { component: LaTomatina, variant: "medallion" },
  "san-fermin-encierro": { component: SanFerminEncierro },
  "horario-nocturno-espanol": { component: HorarioNocturnoEspanol, variant: "medallion" },
  "tapas-cultura-de-compartir": { component: TapasCulturaDeCompartir },
  "paella-origen-valenciano": { component: PaellaOrigenValenciano },
};
