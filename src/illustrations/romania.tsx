import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElCastilloQueSeVolvioLaCasaDeDracula: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M200 158 Q188 152 184 160 Q194 160 198 166 Q188 168 186 176 Q198 174 200 166 Q202 174 214 176 Q212 168 202 166 Q206 160 216 160 Q212 152 200 158 Z" fill={dark} />
      <circle cx="196" cy="162" r="0.8" fill={accentColor} />
      <circle cx="204" cy="162" r="0.8" fill={accentColor} />
    </g>
  );
};

const SighisoaraLaCunaRealDeVladElEmpalador: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="162" width="10" height="16" fill={accentColor} />
      <rect x="200" y="158" width="10" height="20" fill={dark} />
      <rect x="203" y="150" width="4" height="8" fill={light} />
      <circle cx="205" cy="148" r="1.4" fill={dark} />
    </g>
  );
};

const ElEdificioMasPesadoDelPlaneta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="164" width="28" height="14" fill={accentColor} />
      {[189, 195, 201, 207].map((x) => (
        <rect key={x} x={x} y="166" width="3" height="10" fill={dark} />
      ))}
      <rect x="186" y="160" width="28" height="4" fill={light} />
    </g>
  );
};

const LosMonasteriosPintadosPorFuera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="154" width="24" height="24" fill={accentColor} />
      <circle cx="200" cy="162" r="4" fill={light} />
      <path d="M196 170 L204 170 M198 174 L202 174" stroke={dark} strokeWidth="1" opacity="0.6" />
    </g>
  );
};

const ElCementerioAlegreConTumbasQueHacenReir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M197 178 L197 156 L203 156 L203 178 Z" fill={accentColor} />
      <path d="M190 162 L210 162 L210 168 L190 168 Z" fill={dark} />
      <circle cx="200" cy="152" r="2" fill={light} />
    </g>
  );
};

const LasIglesiasDeMaderaSinUnSoloClavo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M194 178 L194 158 L206 158 L206 178 Z" fill={accentColor} />
      <path d="M197 158 L200 138 L203 158 Z" fill={dark} />
      <circle cx="200" cy="140" r="1.4" fill={dark} />
    </g>
  );
};

const ElDiezPerfectoQueNadieEsperaba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <text x="200" y="172" fontSize="20" fill={accentColor} textAnchor="middle" fontWeight="bold">10</text>
      <circle cx="200" cy="154" r="2" fill={light} />
      <circle cx="192" cy="158" r="1.4" fill={dark} />
    </g>
  );
};

const ElDeltaMejorConservadoDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <line x1="196" y1="178" x2="196" y2="160" stroke={dark} strokeWidth="2" />
      <path d="M196 160 Q188 156 190 150 M196 164 Q204 160 206 154" fill="none" stroke={accentColor} strokeWidth="2" />
      <ellipse cx="196" cy="178" rx="14" ry="2.5" fill={light} opacity="0.6" />
    </g>
  );
};

const LaIslaLatinaRodeadaDeIdiomasEslavos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="170" rx="12" ry="6" fill={light} />
      <path d="M186 166 Q192 162 198 166 M202 166 Q208 162 214 166" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="200" cy="168" r="1.6" fill={dark} />
    </g>
  );
};

const LaMinaDeSalConvertidaEnParqueDeDiversiones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="164" r="12" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <line x1="200" y1="152" x2="200" y2="176" stroke={dark} strokeWidth="1" opacity="0.5" />
      <line x1="188" y1="164" x2="212" y2="164" stroke={dark} strokeWidth="1" opacity="0.5" />
      <circle cx="200" cy="164" r="2" fill={light} />
    </g>
  );
};

export const romaniaIllustrations: Record<string, IllustrationDefinition> = {
  "el-castillo-que-se-volvio-la-casa-de-dracula": { component: ElCastilloQueSeVolvioLaCasaDeDracula, variant: "medallion" },
  "sighisoara-la-cuna-real-de-vlad-el-empalador": { component: SighisoaraLaCunaRealDeVladElEmpalador },
  "el-edificio-mas-pesado-del-planeta": { component: ElEdificioMasPesadoDelPlaneta },
  "los-monasterios-pintados-por-fuera": { component: LosMonasteriosPintadosPorFuera },
  "el-cementerio-alegre-con-tumbas-que-hacen-reir": { component: ElCementerioAlegreConTumbasQueHacenReir },
  "las-iglesias-de-madera-sin-un-solo-clavo": { component: LasIglesiasDeMaderaSinUnSoloClavo },
  "el-diez-perfecto-que-nadie-esperaba": { component: ElDiezPerfectoQueNadieEsperaba, variant: "medallion" },
  "el-delta-mejor-conservado-de-europa": { component: ElDeltaMejorConservadoDeEuropa },
  "la-isla-latina-rodeada-de-idiomas-eslavos": { component: LaIslaLatinaRodeadaDeIdiomasEslavos },
  "la-mina-de-sal-convertida-en-parque-de-diversiones": { component: LaMinaDeSalConvertidaEnParqueDeDiversiones },
};
