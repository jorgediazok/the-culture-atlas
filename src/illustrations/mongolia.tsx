import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElNaadamLosTresJuegosViriles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 176 Q186 156 200 150 Q214 156 214 176" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <line x1="186" y1="176" x2="214" y2="176" stroke={accentColor} strokeWidth="2" />
      <path d="M196 166 L204 174 M204 166 L196 174" stroke={dark} strokeWidth="1.5" />
      <circle cx="200" cy="158" r="2" fill={light} />
    </g>
  );
};

const LaEstatuaDeGenghisKhanMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 178 Q188 164 200 162 Q212 164 214 178 Z" fill={accentColor} />
      <path d="M200 162 L200 148" stroke={dark} strokeWidth="2.5" />
      <path d="M196 152 L206 152" stroke={light} strokeWidth="2" />
    </g>
  );
};

const ElGerLaCasaPortatilDisenadaParaElViento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 178 L188 160 L212 160 L216 178 Z" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <path d="M188 160 Q200 150 212 160" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="200" cy="153" r="2" fill={dark} />
    </g>
  );
};

const ElKhoomiiDosNotasDesdeUnaSolaGarganta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="172" rx="6" ry="8" fill={accentColor} />
      <path d="M206 166 Q216 162 218 152" fill="none" stroke={dark} strokeWidth="1.5" />
      <path d="M206 172 Q216 172 220 166" fill="none" stroke={light} strokeWidth="1.5" />
    </g>
  );
};

const UlanBatorLaCapitalMasFriaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="196" y="150" width="6" height="22" rx="3" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <circle cx="199" cy="176" r="5" fill={accentColor} />
      <line x1="196" y1="158" x2="192" y2="158" stroke={dark} strokeWidth="1.2" />
      <line x1="196" y1="164" x2="192" y2="164" stroke={dark} strokeWidth="1.2" />
    </g>
  );
};

const ElYamElCorreoMasVelozDelImperioMongol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 176 Q196 170 200 158 Q204 170 216 176" fill="none" stroke={dark} strokeWidth="1.2" opacity="0.4" />
      <path d="M192 172 L200 156 L200 172 Z" fill={accentColor} />
      <circle cx="200" cy="156" r="2" fill={light} />
    </g>
  );
};

const LosCazadoresConAguilasDoradasDelOeste: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M200 176 Q182 168 184 156 Q198 160 200 176 Q202 160 216 156 Q218 168 200 176 Z" fill={accentColor} />
      <path d="M200 176 L200 166" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaTumbaDeGenghisKhanNuncaEncontrada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="184" y1="178" x2="216" y2="178" stroke={accentColor} strokeWidth="2" />
      <path d="M196 178 L200 168 L204 178 Z" fill={dark} opacity="0.6" />
      <path d="M186 176 Q200 172 214 176" fill="none" stroke={dark} strokeWidth="1" opacity="0.3" />
    </g>
  );
};

const MasCaballosQuePersonasYElUltimoCaballoSalvaje: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 178 L190 164 Q192 156 200 158 Q206 160 204 168 L210 178 Z" fill={accentColor} />
      <path d="M192 158 L188 150 M195 157 L193 149 M198 157 L198 149" stroke={dark} strokeWidth="1.4" />
    </g>
  );
};

const ElPaisMenosDensamentePobladoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <path d="M184 178 Q200 174 216 178" fill="none" stroke={dark} strokeWidth="1" opacity="0.4" />
      <circle cx="200" cy="168" r="3.5" fill={accentColor} />
    </g>
  );
};

export const mongoliaIllustrations: Record<string, IllustrationDefinition> = {
  "el-naadam-los-tres-juegos-viriles": { component: ElNaadamLosTresJuegosViriles },
  "la-estatua-de-genghis-khan-mas-grande-del-mundo": { component: LaEstatuaDeGenghisKhanMasGrandeDelMundo },
  "el-ger-la-casa-portatil-disenada-para-el-viento": { component: ElGerLaCasaPortatilDisenadaParaElViento },
  "el-khoomii-dos-notas-desde-una-sola-garganta": { component: ElKhoomiiDosNotasDesdeUnaSolaGarganta, variant: "medallion" },
  "ulan-bator-la-capital-mas-fria-del-mundo": { component: UlanBatorLaCapitalMasFriaDelMundo },
  "el-yam-el-correo-mas-veloz-del-imperio-mongol": { component: ElYamElCorreoMasVelozDelImperioMongol },
  "los-cazadores-con-aguilas-doradas-del-oeste": { component: LosCazadoresConAguilasDoradasDelOeste, variant: "medallion" },
  "la-tumba-de-genghis-khan-nunca-encontrada": { component: LaTumbaDeGenghisKhanNuncaEncontrada },
  "mas-caballos-que-personas-y-el-ultimo-caballo-salvaje": { component: MasCaballosQuePersonasYElUltimoCaballoSalvaje },
  "el-pais-menos-densamente-poblado-del-mundo": { component: ElPaisMenosDensamentePobladoDelMundo },
};
