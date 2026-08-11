import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CunaDelSteelpan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="158" rx="20" ry="8" fill={accentColor} />
      <path d="M180 158 L184 176 L216 176 L220 158 Z" fill={dark} />
      <circle cx="192" cy="156" r="3" fill="none" stroke={light} strokeWidth="1.4" />
      <circle cx="206" cy="158" r="3.6" fill="none" stroke={light} strokeWidth="1.4" />
      <circle cx="199" cy="150" r="2.4" fill="none" stroke={light} strokeWidth="1.4" />
    </g>
  );
};

const CarnavalDeTrinidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 176 L196 140 Q200 132 204 140 Z" fill={accentColor} />
      <path d="M188 172 L182 138 Q188 130 192 140 Z" fill={dark} />
      <path d="M212 172 L218 138 Q212 130 208 140 Z" fill={light} />
    </g>
  );
};

const DosIslasUnaNacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="190" cy="162" rx="16" ry="12" fill={accentColor} />
      <ellipse cx="216" cy="150" rx="8" ry="6" fill={dark} />
      <path d="M180 172 Q200 178 220 172" fill="none" stroke={light} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const CalypsoYSoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="148" rx="9" ry="12" fill={accentColor} />
      <rect x="197" y="158" width="6" height="16" fill={dark} />
      <path d="M190 178 Q200 172 210 178" fill="none" stroke={dark} strokeWidth="2.4" />
      <circle cx="216" cy="146" r="1.6" fill={light} />
      <circle cx="222" cy="152" r="1.6" fill={light} />
    </g>
  );
};

const MosaicoIndoYAfrotrinitense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 168 Q190 150 200 156 L200 172 Q190 178 182 168 Z" fill={accentColor} />
      <path d="M218 168 Q210 150 200 156 L200 172 Q210 178 218 168 Z" fill={dark} />
      <rect x="196" y="134" width="8" height="24" fill={light} />
    </g>
  );
};

const LagoDeBrea: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="24" ry="14" fill={dark} />
      <path d="M182 156 Q192 152 200 156 Q208 160 218 156" fill="none" stroke={light} strokeWidth="1.6" opacity="0.5" />
      <path d="M186 164 Q196 160 204 164 Q212 168 216 164" fill="none" stroke={accentColor} strokeWidth="1.6" opacity="0.6" />
    </g>
  );
};

const CunaDelLimbo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <line x1="182" y1="158" x2="218" y2="158" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M182 150 Q178 158 182 166" fill="none" stroke={accentColor} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M218 150 Q222 158 218 166" fill="none" stroke={light} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
};

const RiquezaPetroleraCaribena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="140" width="16" height="6" fill={dark} />
      <line x1="200" y1="146" x2="200" y2="168" stroke={dark} strokeWidth="3" />
      <path d="M186 168 L214 168 L210 178 L190 178 Z" fill={accentColor} />
      <path d="M184 178 Q200 184 216 178" fill="none" stroke={light} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const DiwaliYHosay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="188" cy="172" rx="8" ry="5" fill={accentColor} />
      <ellipse cx="200" cy="172" rx="8" ry="5" fill={dark} />
      <ellipse cx="212" cy="172" rx="8" ry="5" fill={accentColor} />
      <path d="M188 167 Q190 160 188 156 Q186 160 188 167 Z" fill={light} />
      <path d="M200 167 Q202 160 200 156 Q198 160 200 167 Z" fill={light} />
      <path d="M212 167 Q214 160 212 156 Q210 160 212 167 Z" fill={light} />
    </g>
  );
};

const IbisEscarlataCaroni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="158" rx="12" ry="9" fill={accentColor} />
      <path d="M210 156 L222 154 L212 160 Z" fill={dark} />
      <line x1="196" y1="166" x2="192" y2="178" stroke={dark} strokeWidth="2" strokeLinecap="round" />
      <line x1="204" y1="166" x2="208" y2="178" stroke={dark} strokeWidth="2" strokeLinecap="round" />
      <path d="M186 172 Q200 178 214 172" fill="none" stroke={light} strokeWidth="1.6" opacity="0.6" />
    </g>
  );
};

export const trinidadAndTobagoIllustrations: Record<string, IllustrationDefinition> = {
  "cuna-del-steelpan": { component: CunaDelSteelpan, variant: "medallion" },
  "carnaval-de-trinidad": { component: CarnavalDeTrinidad },
  "dos-islas-una-nacion": { component: DosIslasUnaNacion },
  "calypso-y-soca": { component: CalypsoYSoca },
  "mosaico-indo-y-afrotrinitense": { component: MosaicoIndoYAfrotrinitense },
  "lago-de-brea": { component: LagoDeBrea, variant: "medallion" },
  "cuna-del-limbo": { component: CunaDelLimbo },
  "riqueza-petrolera-caribena": { component: RiquezaPetroleraCaribena },
  "diwali-y-hosay": { component: DiwaliYHosay },
  "ibis-escarlata-caroni": { component: IbisEscarlataCaroni },
};
