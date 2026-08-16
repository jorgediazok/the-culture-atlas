import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElReinoEnElCieloTodoPorEncimaDeMilMetros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  return (
    <g>
      <polygon points="90,240 150,150 210,240" fill={dark} opacity="0.6" />
      <polygon points="170,240 250,110 320,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="215,175 250,110 285,175" fill={snow} />
      <polygon points="120,200 150,150 175,200" fill={snow} opacity="0.85" />
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const ElPaisRodeadoPorCompletoPorOtroPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <circle cx="205" cy="165" r="80" fill={light} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="165" r="30" fill={accentColor} stroke={dark} strokeWidth="3" />
    </g>
  );
};

const LaMantaBasothoQueMarcaCadaEtapaDeLaVida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#8B5A2B", "#F4C87A"];
  return (
    <g>
      <path d="M150 235 L145 140 Q145 128 165 128 L245 128 Q265 128 265 140 L260 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[150, 170, 190].map((y, i) => (
        <rect key={y} x="150" y={y} width="110" height="14" fill={colors[i % colors.length]} opacity="0.85" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${160 + i * 22} 210 L${170 + i * 22} 225 L${160 + i * 22} 230`} stroke={dark} strokeWidth="2" fill="none" opacity="0.5" />
      ))}
    </g>
  );
};

const ElPoniBasothoQueDominaSenderosImposibles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M145 235 Q140 200 165 190 Q195 178 230 190 Q255 198 250 220 L245 235 L232 235 L228 218 L165 218 L160 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M145 205 Q125 200 118 180 Q130 178 145 195 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M118 182 L105 178 L112 192 Z" fill={dark} />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={130 + i * 6} y1="182" x2={126 + i * 6} y2="165" stroke={dark} strokeWidth="2.5" />
      ))}
      <polygon points="90,235 205,150 320,235" fill={dark} opacity="0.15" />
    </g>
  );
};

const ElBarMasAltoDeTodaAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  const beer = "#F4A300";
  return (
    <g>
      <polygon points="90,240 205,110 320,240" fill={accentColor} opacity="0.5" />
      <polygon points="160,190 205,110 250,190" fill={snow} />
      <path d="M255 230 L260 165 Q260 158 268 158 L280 158 Q288 158 288 165 L293 230 Z" fill="#fff" opacity="0.4" stroke={dark} strokeWidth="2.5" />
      <rect x="258" y="185" width="33" height="45" fill={beer} opacity="0.85" />
      <ellipse cx="274" cy="185" rx="16" ry="6" fill="#fff" opacity="0.7" />
    </g>
  );
};

const ElAguaComoPrincipalProductoDeExportacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M110 240 L110 175 Q110 165 130 160 L280 160 Q300 165 300 175 L300 240 Z" fill="#B0B8BF" stroke={dark} strokeWidth="3" />
      <rect x="130" y="180" width="150" height="45" fill={water} opacity="0.6" />
      {[150, 190, 230, 265].map((x) => (
        <rect key={x} x={x - 8} y="165" width="16" height="15" fill="#8B8378" />
      ))}
      <path d="M205 130 Q195 150 205 165 Q215 150 205 130 Z" fill={water} stroke={shade(water, 0.3)} strokeWidth="2" />
    </g>
  );
};

const MoshoeshoeIElReyQueNegocioConTodosParaSobrevivir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <ellipse cx="185" cy="200" rx="30" ry="40" fill={skin} stroke={dark} strokeWidth="2.5" transform="rotate(-15 185 200)" />
      <line x1="245" y1="235" x2="270" y2="115" stroke="#6B4423" strokeWidth="6" strokeLinecap="round" />
      <path d="M258 128 L270 115 L275 132 Z" fill={dark} />
      <path d="M258 128 L282 122 L275 132 Z" fill={dark} />
    </g>
  );
};

const ThabaBosiuLaMontanaFortalezaJamasTomada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M90 240 L150 150 L175 150 L185 130 L225 130 L235 150 L260 150 L320 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="150" y1="150" x2="260" y2="150" stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={160 + i * 4} y1="150" x2={165 + i * 4} y2="130" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
    </g>
  );
};

const EsquiarEnAfricaUnaDeLasPocasPistasDelContinente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const snow = "#F5F0E6";
  return (
    <g>
      <polygon points="90,240 320,240 205,120" fill={snow} stroke={dark} strokeWidth="2" opacity="0.5" />
      <line x1="180" y1="240" x2="220" y2="130" stroke={accentColor} strokeWidth="10" strokeLinecap="round" transform="rotate(-15 200 185)" />
      <line x1="180" y1="240" x2="220" y2="130" stroke={accentColor} strokeWidth="10" strokeLinecap="round" transform="rotate(15 200 185)" />
      <circle cx="200" cy="185" r="8" fill={dark} />
    </g>
  );
};

const ElMokorotloElSombreroQueEstaEnLaBandera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="215" rx="90" ry="18" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M155 215 Q155 165 205 145 Q255 165 255 215 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M205 145 Q198 130 205 118 Q212 130 205 145 Z" fill={dark} />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${175 + i * 15} 205 Q${180 + i * 15} 185 ${195 + i * 15} 165`} stroke={dark} strokeWidth="1.5" opacity="0.35" fill="none" />
      ))}
    </g>
  );
};

export const lesothoIllustrations: Record<string, IllustrationDefinition> = {
  "el-reino-en-el-cielo-todo-por-encima-de-mil-metros": { component: ElReinoEnElCieloTodoPorEncimaDeMilMetros },
  "el-pais-rodeado-por-completo-por-otro-pais": { component: ElPaisRodeadoPorCompletoPorOtroPais },
  "la-manta-basotho-que-marca-cada-etapa-de-la-vida": { component: LaMantaBasothoQueMarcaCadaEtapaDeLaVida },
  "el-poni-basotho-que-domina-senderos-imposibles": { component: ElPoniBasothoQueDominaSenderosImposibles },
  "el-bar-mas-alto-de-toda-africa": { component: ElBarMasAltoDeTodaAfrica },
  "el-agua-como-principal-producto-de-exportacion": { component: ElAguaComoPrincipalProductoDeExportacion },
  "moshoeshoe-i-el-rey-que-nego-con-todos-para-sobrevivir": { component: MoshoeshoeIElReyQueNegocioConTodosParaSobrevivir },
  "thaba-bosiu-la-montana-fortaleza-jamas-tomada": { component: ThabaBosiuLaMontanaFortalezaJamasTomada },
  "esquiar-en-africa-una-de-las-pocas-pistas-del-continente": { component: EsquiarEnAfricaUnaDeLasPocasPistasDelContinente },
  "el-mokorotlo-el-sombrero-que-esta-en-la-bandera": { component: ElMokorotloElSombreroQueEstaEnLaBandera },
};
