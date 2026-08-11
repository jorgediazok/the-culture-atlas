import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PaisMasBoscosoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="188" cy="158" rx="16" ry="12" fill={accentColor} />
      <ellipse cx="200" cy="148" rx="20" ry="15" fill={dark} />
      <ellipse cx="214" cy="160" rx="16" ry="12" fill={accentColor} />
      <ellipse cx="200" cy="168" rx="14" ry="10" fill={light} opacity="0.85" />
    </g>
  );
};

const ParamariboPatrimonioColonial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="148" width="32" height="30" fill={light} />
      <path d="M180 148 L200 132 L220 148 Z" fill={dark} />
      <rect x="196" y="160" width="8" height="18" fill={accentColor} />
      <rect x="188" y="154" width="6" height="6" fill={accentColor} opacity="0.7" />
      <rect x="206" y="154" width="6" height="6" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const MezquitaYSinagogaVecinas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 178 L182 156 Q182 146 190 146 Q198 146 198 156 L198 178 Z" fill={accentColor} />
      <circle cx="190" cy="140" r="5" fill={dark} />
      <path d="M202 178 L202 158 L210 158 L210 148 L218 158 L218 178 Z" fill={light} />
      <circle cx="210" cy="144" r="2.4" fill={dark} />
    </g>
  );
};

const CimarronesCulturaMarron: IllustrationComponent = ({ accentColor }) => {
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

const HindustanosDeLaIndia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="165" rx="20" ry="8" fill={light} />
      <path d="M188 158 Q200 148 212 158 Q206 162 200 158 Q194 162 188 158 Z" fill={accentColor} />
      <circle cx="185" cy="150" r="2.4" fill={dark} />
      <circle cx="215" cy="150" r="2.4" fill={dark} />
      <circle cx="200" cy="146" r="2.4" fill={dark} />
    </g>
  );
};

const JavanesesDeIndonesia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M198 132 L198 178" stroke={dark} strokeWidth="2" />
      <path d="M186 140 Q200 132 214 140 Q210 158 200 172 Q190 158 186 140 Z" fill={accentColor} />
      <path d="M194 148 L198 156 L204 146" fill="none" stroke={light} strokeWidth="1.8" opacity="0.8" />
    </g>
  );
};

const SrananTongoLenguaFranca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path
        d="M178 148 Q178 135 195 135 L212 135 Q222 135 222 148 Q222 159 212 159 L190 159 L182 168 L186 158 Q178 156 178 148 Z"
        fill={light}
      />
      <circle cx="192" cy="147" r="2.6" fill={dark} />
      <circle cx="200" cy="147" r="2.6" fill={accentColor} />
      <circle cx="208" cy="147" r="2.6" fill={dark} />
    </g>
  );
};

const UnicoPaisNeerlandofonoDeSudamerica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="197" y="140" width="6" height="38" fill={dark} />
      <path d="M200 142 L182 132 L200 148 Z" fill={accentColor} />
      <path d="M200 142 L218 136 L200 152 Z" fill={accentColor} />
      <path d="M200 142 L192 158 L200 154 Z" fill={light} />
      <path d="M200 142 L208 158 L200 154 Z" fill={light} />
    </g>
  );
};

const ReservaNaturalCentralSuriname: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 150 Q182 140 178 152 Q192 154 200 150 Z" fill={accentColor} />
      <path d="M200 150 Q218 140 222 152 Q208 154 200 150 Z" fill={dark} />
      <path d="M200 150 Q182 160 178 148 Q192 146 200 150 Z" fill={dark} />
      <path d="M200 150 Q218 160 222 148 Q208 146 200 150 Z" fill={accentColor} />
      <circle cx="200" cy="150" r="3" fill={light} />
      <line x1="200" y1="153" x2="200" y2="172" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const AntonDeKomIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="152" width="28" height="22" fill={light} />
      <rect x="186" y="152" width="28" height="4" fill={dark} />
      <path d="M214 140 L218 168 L210 160 L206 168 Z" fill={accentColor} />
      <path d="M192 130 L184 148" stroke={dark} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

export const surinameIllustrations: Record<string, IllustrationDefinition> = {
  "pais-mas-boscoso-del-mundo": { component: PaisMasBoscosoDelMundo },
  "paramaribo-patrimonio-colonial": { component: ParamariboPatrimonioColonial },
  "mezquita-y-sinagoga-vecinas": { component: MezquitaYSinagogaVecinas },
  "cimarrones-cultura-marron": { component: CimarronesCulturaMarron },
  "hindustanos-de-la-india": { component: HindustanosDeLaIndia, variant: "medallion" },
  "javaneses-de-indonesia": { component: JavanesesDeIndonesia },
  "sranan-tongo-lengua-franca": { component: SrananTongoLenguaFranca },
  "unico-pais-neerlandofono-de-sudamerica": { component: UnicoPaisNeerlandofonoDeSudamerica },
  "reserva-natural-central-suriname": { component: ReservaNaturalCentralSuriname, variant: "medallion" },
  "anton-de-kom-independencia": { component: AntonDeKomIndependencia },
};
