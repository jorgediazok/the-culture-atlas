import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LosJeepneysArtePopularSobreRuedas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="162" width="32" height="12" rx="2" fill={accentColor} />
      <rect x="188" y="166" width="8" height="6" fill={light} />
      <circle cx="190" cy="176" r="3" fill={dark} />
      <circle cx="210" cy="176" r="3" fill={dark} />
      <path d="M200 162 L198 156 L202 156 Z" fill={light} />
    </g>
  );
};

const LaTemporadaNavidenaMasLargaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 150 L204 160 L214 160 L206 166 L209 176 L200 170 L191 176 L194 166 L186 160 L196 160 Z" fill={accentColor} stroke={dark} strokeWidth="1" />
      <line x1="200" y1="170" x2="200" y2="178" stroke={light} strokeWidth="1.5" />
    </g>
  );
};

const LasColinasDeChocolateDeBohol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M184 178 Q188 160 192 178 Z" fill={accentColor} />
      <path d="M194 178 Q200 156 206 178 Z" fill={dark} />
      <path d="M208 178 Q212 162 216 178 Z" fill={light} />
    </g>
  );
};

const LosTarsiersPrimatesDiminutosDeOjosEnormes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <circle cx="200" cy="166" r="9" fill={accentColor} />
      <circle cx="195" cy="163" r="4" fill={light} />
      <circle cx="205" cy="163" r="4" fill={light} />
      <circle cx="195" cy="163" r="1.6" fill={dark} />
      <circle cx="205" cy="163" r="1.6" fill={dark} />
    </g>
  );
};

const ElInventoFilipinoDetrasDelKaraoke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="154" width="24" height="16" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <line x1="192" y1="160" x2="208" y2="160" stroke={dark} strokeWidth="1.5" />
      <line x1="192" y1="165" x2="202" y2="165" stroke={dark} strokeWidth="1.5" />
      <ellipse cx="200" cy="176" rx="5" ry="3" fill={accentColor} />
    </g>
  );
};

const JollibeeLaCadenaQueLeGanaAMcdonalds: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 168 Q188 158 200 158 Q212 158 212 168 Z" fill={accentColor} />
      <rect x="188" y="168" width="24" height="4" fill={dark} />
      <circle cx="200" cy="163" r="2" fill={light} />
    </g>
  );
};

const LaBahayKuboUnaCasaPensadaParaElTropico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 168 L200 152 L214 168 Z" fill={accentColor} />
      <rect x="192" y="168" width="16" height="10" fill={light} />
      {[184, 194, 204, 214].map((x) => (
        <line key={x} x1={x} y1="178" x2={x} y2="170" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const LasTerrazasDeArrozLaOctavaMaravilla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="188" y="172" width="24" height="6" fill={light} />
      <rect x="191" y="166" width="18" height="6" fill={accentColor} />
      <rect x="194" y="160" width="12" height="6" fill={dark} />
    </g>
  );
};

const SinulogTamboresCatolicosEIndigenasJuntos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="190" y="158" width="20" height="14" rx="2" fill={accentColor} />
      <ellipse cx="200" cy="158" rx="10" ry="3" fill={light} />
      <ellipse cx="200" cy="172" rx="10" ry="3" fill={dark} />
    </g>
  );
};

const ElRioSubterraneoNavegableMasLargo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 158 Q200 150 216 158 L216 178 L184 178 Z" fill={dark} opacity="0.5" />
      <path d="M186 176 Q200 168 214 176" fill="none" stroke={accentColor} strokeWidth="3" />
      <circle cx="200" cy="172" r="2" fill={light} />
    </g>
  );
};

export const philippinesIllustrations: Record<string, IllustrationDefinition> = {
  "los-jeepneys-arte-popular-sobre-ruedas": { component: LosJeepneysArtePopularSobreRuedas },
  "la-temporada-navidena-mas-larga-del-mundo": { component: LaTemporadaNavidenaMasLargaDelMundo, variant: "medallion" },
  "las-colinas-de-chocolate-de-bohol": { component: LasColinasDeChocolateDeBohol },
  "los-tarsiers-primates-diminutos-de-ojos-enormes": { component: LosTarsiersPrimatesDiminutosDeOjosEnormes, variant: "medallion" },
  "el-invento-filipino-detras-del-karaoke": { component: ElInventoFilipinoDetrasDelKaraoke },
  "jollibee-la-cadena-que-le-gana-a-mcdonalds": { component: JollibeeLaCadenaQueLeGanaAMcdonalds },
  "la-bahay-kubo-una-casa-pensada-para-el-tropico": { component: LaBahayKuboUnaCasaPensadaParaElTropico },
  "las-terrazas-de-arroz-la-octava-maravilla": { component: LasTerrazasDeArrozLaOctavaMaravilla },
  "sinulog-tambores-catolicos-e-indigenas-juntos": { component: SinulogTamboresCatolicosEIndigenasJuntos },
  "el-rio-subterraneo-navegable-mas-largo": { component: ElRioSubterraneoNavegableMasLargo },
};
