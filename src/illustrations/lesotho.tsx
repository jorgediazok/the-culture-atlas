import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElReinoEnElCieloTodoPorEncimaDeMilMetros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M182 178 L194 154 L202 168 L210 156 L218 178 Z" fill={accentColor} />
      <path d="M194 154 L198 160 L190 162 Z" fill={light} />
      <path d="M210 156 L213 161 L207 162 Z" fill={light} />
      <line x1="182" y1="178" x2="218" y2="178" stroke={dark} strokeWidth="1" opacity="0.4" />
    </g>
  );
};

const ElPaisRodeadoPorCompletoPorOtroPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <circle cx="200" cy="166" r="16" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="200" cy="166" r="6" fill={accentColor} />
    </g>
  );
};

const LaMantaBasothoQueMarcaCadaEtapaDeLaVida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="156" width="28" height="22" fill={accentColor} />
      <line x1="186" y1="164" x2="214" y2="164" stroke={dark} strokeWidth="2" />
      <line x1="186" y1="172" x2="214" y2="172" stroke={light} strokeWidth="2" />
    </g>
  );
};

const ElPoniBasothoQueDominaSenderosImposibles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 178 L190 164 Q192 156 200 158 Q206 160 204 168 L210 178 Z" fill={accentColor} />
      <path d="M192 158 L189 151 M195 157 L194 150 M198 157 L199 150" stroke={dark} strokeWidth="1.4" />
    </g>
  );
};

const ElBarMasAltoDeTodaAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M192 178 L192 158 L204 158 L200 178 Z" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <line x1="192" y1="166" x2="203" y2="166" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElAguaComoPrincipalProductoDeExportacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 150 Q210 166 200 176 Q190 166 200 150 Z" fill={accentColor} />
      <circle cx="197" cy="166" r="1.6" fill={light} />
      <rect x="188" y="176" width="24" height="4" fill={dark} />
    </g>
  );
};

const MoshoeshoeIElReyQueNegoConTodosParaSobrevivir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="190" y1="178" x2="210" y2="152" stroke={accentColor} strokeWidth="2.5" />
      <path d="M188 178 L188 164 L196 168 L196 178 Z" fill={dark} />
    </g>
  );
};

const ThabaBosiuLaMontanaFortalezaJamasTomada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M186 178 L192 158 L208 158 L214 178 Z" fill={accentColor} />
      <rect x="192" y="158" width="16" height="4" fill={dark} />
    </g>
  );
};

const EsquiarEnAfricaUnaDeLasPocasPistasDelContinente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="190" y1="178" x2="196" y2="150" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="210" y1="178" x2="204" y2="150" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const ElMokorotloElSombreroQueEstaEnLaBandera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M188 174 Q188 154 200 148 Q212 154 212 174 Z" fill={light} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="200" cy="174" rx="18" ry="4" fill={accentColor} />
      <circle cx="200" cy="148" r="1.6" fill={dark} />
    </g>
  );
};

export const lesothoIllustrations: Record<string, IllustrationDefinition> = {
  "el-reino-en-el-cielo-todo-por-encima-de-mil-metros": { component: ElReinoEnElCieloTodoPorEncimaDeMilMetros },
  "el-pais-rodeado-por-completo-por-otro-pais": { component: ElPaisRodeadoPorCompletoPorOtroPais, variant: "medallion" },
  "la-manta-basotho-que-marca-cada-etapa-de-la-vida": { component: LaMantaBasothoQueMarcaCadaEtapaDeLaVida },
  "el-poni-basotho-que-domina-senderos-imposibles": { component: ElPoniBasothoQueDominaSenderosImposibles },
  "el-bar-mas-alto-de-toda-africa": { component: ElBarMasAltoDeTodaAfrica },
  "el-agua-como-principal-producto-de-exportacion": { component: ElAguaComoPrincipalProductoDeExportacion, variant: "medallion" },
  "moshoeshoe-i-el-rey-que-nego-con-todos-para-sobrevivir": { component: MoshoeshoeIElReyQueNegoConTodosParaSobrevivir },
  "thaba-bosiu-la-montana-fortaleza-jamas-tomada": { component: ThabaBosiuLaMontanaFortalezaJamasTomada },
  "esquiar-en-africa-una-de-las-pocas-pistas-del-continente": { component: EsquiarEnAfricaUnaDeLasPocasPistasDelContinente },
  "el-mokorotlo-el-sombrero-que-esta-en-la-bandera": { component: ElMokorotloElSombreroQueEstaEnLaBandera },
};
