import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LosJeepneysArtePopularSobreRuedas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const chrome = "#D8D8D0";
  const colors = ["#F4A300", "#C1272D", "#00838F"];
  return (
    <g>
      <path d="M105 230 L105 195 Q105 185 118 185 L295 185 Q305 185 305 200 L305 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="130" y="150" width="150" height="42" fill="#fff" opacity="0.85" stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={140 + i * 48} y="158" width="36" height="26" fill={colors[i]} opacity="0.4" />
      ))}
      <ellipse cx="115" cy="182" rx="12" ry="9" fill={chrome} stroke={dark} strokeWidth="2" />
      <path d="M103 178 L127 178 M107 186 Q115 176 123 186" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="150" cy="235" r="16" fill="none" stroke={dark} strokeWidth="5" />
      <circle cx="260" cy="235" r="16" fill="none" stroke={dark} strokeWidth="5" />
      <line x1="105" y1="210" x2="305" y2="210" stroke={chrome} strokeWidth="4" />
    </g>
  );
};

const LaTemporadaNavidenaMasLargaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {[0, 90, 180, 270].map((deg) => (
        <path key={deg} d="M205 165 L222 200 L188 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" transform={`rotate(${deg} 205 200)`} />
      ))}
      {[45, 135, 225, 315].map((deg) => (
        <path key={deg} d="M205 178 L214 200 L196 200 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" transform={`rotate(${deg} 205 200)`} />
      ))}
      <circle cx="205" cy="200" r="14" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <line x1="205" y1="150" x2="205" y2="120" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LasColinasDeChocolateDeBohol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const brown = "#8D6E63";
  return (
    <g>
      {[[120, 230, 40], [175, 235, 46], [230, 232, 42], [280, 236, 36]].map(([x, y, w], i) => (
        <polygon key={x as number} points={`${(x as number) - (w as number) / 2},${y} ${x},${(y as number) - 55} ${(x as number) + (w as number) / 2},${y}`} fill={i % 2 === 0 ? brown : dark} stroke={shade(brown, 0.3)} strokeWidth="2" />
      ))}
      {[[150, 236, 30], [205, 240, 34], [255, 234, 28]].map(([x, y, w], i) => (
        <polygon key={x as number} points={`${(x as number) - (w as number) / 2},${y} ${x},${(y as number) - 40} ${(x as number) + (w as number) / 2},${y}`} fill={i % 2 === 0 ? dark : brown} stroke={shade(brown, 0.3)} strokeWidth="2" opacity="0.9" />
      ))}
    </g>
  );
};

const LosTarsiersPrimatesDiminutosDeOjosEnormes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const fur = "#6D4C41";
  return (
    <g>
      <ellipse cx="205" cy="205" rx="38" ry="34" fill={fur} stroke={dark} strokeWidth="2.5" />
      <circle cx="185" cy="190" r="24" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      <circle cx="225" cy="190" r="24" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      <circle cx="185" cy="190" r="12" fill="#1A1A1A" />
      <circle cx="225" cy="190" r="12" fill="#1A1A1A" />
      <circle cx="181" cy="186" r="3" fill="#fff" />
      <circle cx="221" cy="186" r="3" fill="#fff" />
      <path d="M198 210 Q205 215 212 210" stroke={dark} strokeWidth="2" fill="none" />
      <path d="M175 245 L175 220 M235 245 L235 220" stroke={fur} strokeWidth="8" strokeLinecap="round" />
      <path d="M165 165 L172 150 M245 165 L238 150" stroke={fur} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const ElInventoFilipinoDetrasDelKaraoke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="205" y="130" width="100" height="70" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      {[145, 160, 175].map((y) => (
        <rect key={y} x="220" y={y} width={70 - Math.abs(y - 160) * 2} height="8" fill={light} opacity="0.85" />
      ))}
      <ellipse cx="150" cy="150" rx="16" ry="22" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="145" y="170" width="10" height="55" fill={dark} />
      <path d="M130 225 Q150 218 170 225" fill="none" stroke={dark} strokeWidth="3" />
      {[130, 145, 160].map((y) => (
        <line key={y} x1="140" y1={y} x2="160" y2={y} stroke={dark} strokeWidth="1.2" opacity="0.5" />
      ))}
    </g>
  );
};

const JollibeeLaCadenaQueLeGanaAMcdonalds: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bun = "#E8A33D";
  const yellow = "#F4C430";
  return (
    <g>
      <path d="M120 195 Q120 178 145 178 L185 178 Q210 178 210 195 L210 202 L120 202 Z" fill={bun} stroke={dark} strokeWidth="2.5" />
      <rect x="122" y="202" width="86" height="10" fill="#4A8F4E" />
      <rect x="122" y="212" width="86" height="14" fill="#6D4C41" stroke={dark} strokeWidth="1.5" />
      <path d="M120 226 Q120 240 145 240 L185 240 Q210 240 210 226 Z" fill={bun} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="270" cy="230" rx="45" ry="12" fill={yellow} stroke={shade(yellow, 0.3)} strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${240 + i * 12} 230 Q${250 + i * 12} 205 ${260 + i * 12} 195`} fill="none" stroke={yellow} strokeWidth="4" strokeLinecap="round" />
      ))}
      <ellipse cx="290" cy="215" rx="12" ry="8" fill="#C1272D" />
    </g>
  );
};

const LaBahayKuboUnaCasaPensadaParaElTropico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const thatch = "#D4A017";
  return (
    <g>
      <path d="M135 190 Q205 130 275 190 Z" fill={thatch} stroke={shade(thatch, 0.3)} strokeWidth="2.5" />
      <rect x="145" y="190" width="120" height="45" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[150, 165, 180, 195, 210, 225, 240, 255].map((x) => (
        <line key={x} x1={x} y1="192" x2={x} y2="233" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      {[130, 175, 235, 280].map((x) => (
        <line key={x} x1={x} y1="235" x2={x} y2="200" stroke="#8B5A2B" strokeWidth="6" />
      ))}
      <rect x="195" y="200" width="20" height="20" fill="#5C3A2E" />
    </g>
  );
};

const LasTerrazasDeArrozLaOctavaMaravilla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#3D8FB0";
  return (
    <g>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={110 + i * 3} y={235 - i * 22} width={200 - i * 24} height="20" fill={i % 2 === 0 ? accentColor : water} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const SinulogTamboresCatolicosEIndigenasJuntos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="160" cy="235" rx="46" ry="12" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M114 235 L114 175 Q114 165 160 165 Q206 165 206 175 L206 235" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="160" cy="165" rx="46" ry="12" fill={light} stroke={dark} strokeWidth="2.5" />
      {[130, 155, 180].map((x) => (
        <line key={x} x1={x} y1="177" x2={x} y2="223" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      <ellipse cx="275" cy="230" rx="14" ry="6" fill="#B0AFA8" />
      <rect x="269" y="185" width="12" height="45" fill="#F4C430" />
      <path d="M275 185 Q265 165 275 148 Q285 165 275 148" fill="none" stroke="#F4A300" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const ElRioSubterraneoNavegableMasLargo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#1D6FA5";
  return (
    <g>
      <path d="M90 100 Q95 190 150 240 L260 240 Q315 190 320 100 Z" fill={dark} opacity="0.55" />
      <path d="M100 235 Q205 220 310 235 L310 250 L100 250 Z" fill={water} />
      <path d="M155 230 L255 230 L240 210 L170 210 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M185 210 L185 195 L225 195 L225 210" fill="none" stroke={dark} strokeWidth="2" />
      {[[130, 150, 14], [280, 165, 18], [200, 130, 10]].map(([x, y, r]) => (
        <path key={x as number} d={`M${x} ${y} L${(x as number) - (r as number)} ${(y as number) + (r as number) * 1.6} L${(x as number) + (r as number)} ${(y as number) + (r as number) * 1.6} Z`} fill={dark} opacity="0.7" />
      ))}
    </g>
  );
};

export const philippinesIllustrations: Record<string, IllustrationDefinition> = {
  "los-jeepneys-arte-popular-sobre-ruedas": { component: LosJeepneysArtePopularSobreRuedas },
  "la-temporada-navidena-mas-larga-del-mundo": { component: LaTemporadaNavidenaMasLargaDelMundo },
  "las-colinas-de-chocolate-de-bohol": { component: LasColinasDeChocolateDeBohol },
  "los-tarsiers-primates-diminutos-de-ojos-enormes": { component: LosTarsiersPrimatesDiminutosDeOjosEnormes },
  "el-invento-filipino-detras-del-karaoke": { component: ElInventoFilipinoDetrasDelKaraoke },
  "jollibee-la-cadena-que-le-gana-a-mcdonalds": { component: JollibeeLaCadenaQueLeGanaAMcdonalds },
  "la-bahay-kubo-una-casa-pensada-para-el-tropico": { component: LaBahayKuboUnaCasaPensadaParaElTropico },
  "las-terrazas-de-arroz-la-octava-maravilla": { component: LasTerrazasDeArrozLaOctavaMaravilla },
  "sinulog-tambores-catolicos-e-indigenas-juntos": { component: SinulogTamboresCatolicosEIndigenasJuntos },
  "el-rio-subterraneo-navegable-mas-largo": { component: ElRioSubterraneoNavegableMasLargo },
};
