import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const WillemstadColorida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 178 L182 158 L191 148 L200 158 L200 178 Z" fill={accentColor} />
      <path d="M200 178 L200 154 L210 142 L220 154 L220 178 Z" fill={light} />
      <rect x="186" y="164" width="6" height="8" fill={dark} />
      <rect x="205" y="160" width="6" height="8" fill={dark} />
    </g>
  );
};

const CurazaoAzulLicor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M195 132 L205 132 L205 142 L210 150 L210 178 L190 178 L190 150 L195 142 Z" fill={accentColor} />
      <rect x="196" y="126" width="8" height="8" fill={dark} />
      <rect x="192" y="156" width="16" height="10" fill={light} opacity="0.85" />
    </g>
  );
};

const IdiomaPapiamento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M178 140 Q178 128 195 128 L212 128 Q222 128 222 140 Q222 151 212 151 L190 151 L182 160 L186 150 Q178 148 178 140 Z" fill={accentColor} />
      <text x="200" y="144" fontSize="11" fontWeight="700" textAnchor="middle" fill={dark}>
        P
      </text>
    </g>
  );
};

const PaisConstituyenteHolanda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 165 L186 150 Q186 135 200 132 Q214 135 214 150 L214 165 Z" fill={accentColor} />
      <circle cx="200" cy="130" r="4" fill={light} />
      <rect x="184" y="165" width="32" height="8" fill={dark} />
    </g>
  );
};

const FueraCinturonHuracanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="150" r="16" fill={accentColor} />
      <line x1="200" y1="126" x2="200" y2="120" stroke={light} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="222" y1="150" x2="228" y2="150" stroke={light} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="216" y1="134" x2="220" y2="130" stroke={light} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="216" y1="166" x2="220" y2="170" stroke={light} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M178 178 Q200 168 222 178" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const RebelionTula1795: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <circle cx="192" cy="145" r="8" fill="none" stroke={accentColor} strokeWidth="4" />
      <circle cx="192" cy="145" r="8" fill="none" stroke={dark} strokeWidth="4" strokeDasharray="6 20" transform="rotate(30 192 145)" />
      <path d="M204 152 L215 163" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      <circle cx="219" cy="167" r="6" fill="none" stroke={accentColor} strokeWidth="4" />
    </g>
  );
};

const ArrecifesBuceo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 152 Q200 144 214 152 Q206 156 206 152 L200 158 L194 152 Q194 156 186 152 Z" fill={accentColor} />
      <circle cx="209" cy="150" r="1.6" fill={dark} />
      <path d="M182 168 Q200 160 218 168 Q200 174 182 168 Z" fill={light} opacity="0.85" />
    </g>
  );
};

const MosaicoNacionalidades: IllustrationComponent = ({ accentColor }) => {
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

const PuenteReinaEmma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="188" cy="172" rx="7" ry="4" fill={light} />
      <ellipse cx="200" cy="170" rx="7" ry="4" fill={light} />
      <ellipse cx="212" cy="172" rx="7" ry="4" fill={light} />
      <path d="M182 168 Q200 154 218 168" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <circle cx="186" cy="160" r="2.4" fill={dark} />
      <circle cx="214" cy="160" r="2.4" fill={dark} />
    </g>
  );
};

const KuraHulandaMemoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M195 150 L205 150 L203 178 L197 178 Z" fill={accentColor} />
      <path d="M200 132 Q205 140 200 146 Q195 140 200 132 Z" fill={light} />
      <path d="M200 138 Q203 143 200 147 Q197 143 200 138 Z" fill={dark} />
    </g>
  );
};

export const curacaoIllustrations: Record<string, IllustrationDefinition> = {
  "willemstad-colorida": { component: WillemstadColorida },
  "curazao-azul-licor": { component: CurazaoAzulLicor, variant: "medallion" },
  "idioma-papiamento": { component: IdiomaPapiamento },
  "pais-constituyente-holanda": { component: PaisConstituyenteHolanda },
  "fuera-cinturon-huracanes": { component: FueraCinturonHuracanes, variant: "medallion" },
  "rebelion-tula-1795": { component: RebelionTula1795 },
  "arrecifes-buceo": { component: ArrecifesBuceo },
  "mosaico-nacionalidades": { component: MosaicoNacionalidades, variant: "medallion" },
  "puente-reina-emma": { component: PuenteReinaEmma },
  "kura-hulanda-memoria": { component: KuraHulandaMemoria, variant: "medallion" },
};
