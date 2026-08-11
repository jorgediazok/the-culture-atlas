import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AsmaraLaPequenaRoma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="156" width="32" height="22" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <circle cx="200" cy="164" r="6" fill="none" stroke={accentColor} strokeWidth="2" />
      <path d="M184 156 Q200 148 216 156" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CeremoniaDelCafeBuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 160 Q186 168 190 176 L210 176 Q214 168 210 160 Z" fill={accentColor} />
      <path d="M188 164 Q180 164 180 170 Q180 174 186 173" fill="none" stroke={dark} strokeWidth="2" />
      <rect x="197" y="150" width="6" height="10" fill={dark} />
      <ellipse cx="200" cy="178" rx="12" ry="2.5" fill={light} opacity="0.7" />
    </g>
  );
};

const ArchipielagoDeDahlak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="190" cy="172" rx="8" ry="4" fill={accentColor} />
      <ellipse cx="208" cy="176" rx="6" ry="3" fill={accentColor} />
      <ellipse cx="200" cy="164" rx="5" ry="2.5" fill={accentColor} />
      <path d="M180 178 L220 178" stroke={light} strokeWidth="3" opacity="0.6" />
      <path d="M180 178 L220 178" stroke={dark} strokeWidth="1" opacity="0.4" />
    </g>
  );
};

const GuerraDeIndependenciaDe30Anos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <path d="M200 150 Q210 156 208 166 Q206 174 200 176 Q194 174 192 166 Q190 156 200 150 Z" fill="#fff" stroke={dark} strokeWidth="1.5" />
      <path d="M186 168 Q200 162 214 168" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const NueveEtniasNueveLenguas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M186 156 Q186 150 194 150 L200 150 Q208 150 208 156 Q208 162 200 162 L196 162 L192 167 L193 162 Q186 162 186 156 Z" fill={accentColor} />
      <path d="M198 166 Q198 162 204 162 L212 162 Q218 162 218 167 Q218 172 212 172 L210 172 L213 176 L207 172 Q198 172 198 166 Z" fill={light} />
      <path d="M180 160 L212 172" stroke={dark} strokeWidth="0" />
    </g>
  );
};

const VestidoBlancoZuria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M192 150 L208 150 L212 178 L188 178 Z" fill="#fdfdf8" stroke={dark} strokeWidth="1" />
      <path d="M188 178 L212 178" stroke={accentColor} strokeWidth="4" />
      <path d="M190 172 L210 172" stroke={accentColor} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const PuertoOtomanoDeMassawa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="186" y="158" width="28" height="20" fill={accentColor} />
      <path d="M186 158 Q200 148 214 158" fill="none" stroke={dark} strokeWidth="2" />
      <rect x="194" y="166" width="12" height="12" fill={light} />
      <circle cx="200" cy="163" r="2" fill={light} />
    </g>
  );
};

const PastaConBerbere: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="200" cy="172" rx="20" ry="8" fill={light} stroke={dark} strokeWidth="1" />
      <path d="M186 168 Q200 176 214 168" fill="none" stroke={accentColor} strokeWidth="3" opacity="0.8" />
      <circle cx="196" cy="169" r="2" fill={accentColor} />
      <circle cx="206" cy="171" r="2" fill={accentColor} />
    </g>
  );
};

const RashaidaNomadesDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 150 Q200 146 210 150 L208 172 Q200 178 192 172 Z" fill={accentColor} />
      <circle cx="196" cy="158" r="1.6" fill={light} />
      <circle cx="204" cy="158" r="1.6" fill={light} />
      <path d="M192 165 L208 165" stroke={dark} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const MercadoDeCamellosDeKeren: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M184 178 Q186 164 192 164 Q194 158 198 162 Q200 156 204 162 L204 178 Z" fill={accentColor} />
      <line x1="188" y1="178" x2="188" y2="184" stroke={dark} strokeWidth="2.5" />
      <line x1="200" y1="178" x2="200" y2="184" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

export const eritreaIllustrations: Record<string, IllustrationDefinition> = {
  "asmara-la-pequena-roma": { component: AsmaraLaPequenaRoma },
  "ceremonia-del-cafe-buna": { component: CeremoniaDelCafeBuna },
  "archipielago-de-dahlak": { component: ArchipielagoDeDahlak },
  "guerra-de-independencia-de-30-anos": { component: GuerraDeIndependenciaDe30Anos, variant: "medallion" },
  "nueve-etnias-nueve-lenguas": { component: NueveEtniasNueveLenguas },
  "vestido-blanco-zuria": { component: VestidoBlancoZuria },
  "puerto-otomano-de-massawa": { component: PuertoOtomanoDeMassawa },
  "pasta-con-berbere": { component: PastaConBerbere },
  "rashaida-nomades-del-desierto": { component: RashaidaNomadesDelDesierto, variant: "medallion" },
  "mercado-de-camellos-de-keren": { component: MercadoDeCamellosDeKeren },
};
