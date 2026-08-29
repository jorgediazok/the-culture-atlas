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

const ElAdoboElPlatoNacionalFilipino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* pot */}
      <path d="M120 165 L290 165 L275 235 L135 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="165" rx="85" ry="14" fill={dark} />
      <ellipse cx="205" cy="163" rx="70" ry="10" fill={light} opacity="0.7" />
      {/* handles */}
      <path d="M120 175 Q95 175 95 195 Q95 210 118 205" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M290 175 Q315 175 315 195 Q315 210 292 205" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      {/* meat chunks + bay leaves */}
      {[
        [170, 195],
        [205, 205],
        [235, 192],
        [190, 215],
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="16" ry="11" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M215 175 Q222 165 230 175 Q222 180 215 175 Z" fill="#4A7A52" stroke={dark} strokeWidth="1" />
      <path d="M180 172 Q187 162 195 172 Q187 177 180 172 Z" fill="#4A7A52" stroke={dark} strokeWidth="1" />
    </g>
  );
};

const ElBalutElHuevoFermentadoCallejero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const shell = "#F5EFE0";
  return (
    <g>
      {/* plate */}
      <ellipse cx="205" cy="225" rx="80" ry="16" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
      {/* egg in shell, cracked open at top */}
      <path d="M165 220 Q160 160 205 145 Q250 160 245 220 Q225 230 205 230 Q185 230 165 220 Z" fill={shell} stroke={dark} strokeWidth="3" />
      <path d="M185 155 L200 148 L190 165 L210 158 L198 175" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      {/* steam */}
      <path d="M195 140 Q190 125 196 110" fill="none" stroke={dark} strokeWidth="2" opacity="0.35" />
      <path d="M215 140 Q210 125 216 110" fill="none" stroke={dark} strokeWidth="2" opacity="0.35" />
      {/* salt and vinegar dish beside it */}
      <circle cx="290" cy="215" r="18" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const MannyPacquiaoYElBoxeoFilipino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  return (
    <g>
      {/* head */}
      <circle cx="205" cy="135" r="22" fill={skin} stroke={dark} strokeWidth="2.5" />
      {/* torso */}
      <path d="M182 155 Q205 146 228 155 L235 230 L175 230 Z" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="2.5" />
      {/* raised guarding arm */}
      <path d="M188 158 Q160 150 150 170" fill="none" stroke={skin} strokeWidth="14" strokeLinecap="round" />
      <circle cx="146" cy="172" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* extended punching arm */}
      <path d="M222 160 Q265 155 290 130" fill="none" stroke={skin} strokeWidth="14" strokeLinecap="round" />
      <circle cx="296" cy="124" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* legs */}
      <line x1="192" y1="228" x2="180" y2="250" stroke={dark} strokeWidth="12" strokeLinecap="round" />
      <line x1="218" y1="228" x2="235" y2="250" stroke={dark} strokeWidth="12" strokeLinecap="round" />
    </g>
  );
};

const ElTnalakTejidoSagradoDeLosTboli: IllustrationComponent = () => {
  const cream = "#F0E4D0";
  const rust = "#8B4A3A";
  const brown = "#5C3A2E";
  const dark = shade(brown, 0.3);
  return (
    <g>
      <rect x="100" y="120" width="210" height="120" fill={cream} stroke={dark} strokeWidth="2.5" />
      {/* ikat geometric bands */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="100" y={130 + i * 24} width="210" height="14" fill={i % 2 === 0 ? rust : brown} opacity="0.85" />
      ))}
      {/* diamond motifs */}
      {[140, 180, 220, 260].map((x) => (
        <polygon key={x} points={`${x},150 ${x + 12},166 ${x},182 ${x - 12},166`} fill={cream} stroke={dark} strokeWidth="1" opacity="0.9" />
      ))}
    </g>
  );
};

const ViganLaCiudadColonialDePiedra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.35);
  const stone = "#B0A08A";
  return (
    <g>
      {/* colonial houses */}
      <rect x="90" y="140" width="90" height="90" fill={light} stroke={dark} strokeWidth="2.5" />
      <rect x="230" y="130" width="90" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* balconies */}
      <rect x="95" y="165" width="80" height="10" fill={dark} opacity="0.4" />
      <rect x="235" y="155" width="80" height="10" fill={dark} opacity="0.4" />
      {/* windows */}
      {[110, 150].map((x) => (
        <rect key={x} x={x} y="180" width="24" height="30" fill={dark} opacity="0.5" />
      ))}
      {[250, 290].map((x) => (
        <rect key={x} x={x} y="175" width="24" height="30" fill={dark} opacity="0.5" />
      ))}
      {/* cobblestone street */}
      <rect x="85" y="230" width="235" height="20" fill={stone} />
      {[100, 130, 160, 190, 220, 250, 280, 310].map((x, i) => (
        <circle key={x} cx={x} cy={238 + (i % 2) * 4} r="7" fill={shade(stone, 0.2)} opacity="0.6" />
      ))}
    </g>
  );
};

const ElEskrimaArteMarcialDeLosBastones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  const stick = "#8B5A2B";
  return (
    <g>
      {/* fighter 1 */}
      <circle cx="155" cy="150" r="14" fill={skin} />
      <path d="M141 162 Q155 155 169 162 L173 210 L137 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M143 168 Q120 175 108 155" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <line x1="108" y1="155" x2="145" y2="120" stroke={stick} strokeWidth="5" strokeLinecap="round" />
      <path d="M167 168 Q190 178 195 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* fighter 2 */}
      <circle cx="255" cy="150" r="14" fill={skin} />
      <path d="M241 162 Q255 155 269 162 L265 210 L237 208 Z" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="2.5" />
      <path d="M267 168 Q290 175 302 155" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <line x1="302" y1="155" x2="265" y2="120" stroke={stick} strokeWidth="5" strokeLinecap="round" />
      <path d="M243 168 Q220 178 215 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* crossed sticks meeting point */}
      <circle cx="205" cy="140" r="4" fill={stick} opacity="0.8" />
    </g>
  );
};

const ElBarongTagalogCamisaDePina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const cream = tint(accentColor, 0.5);
  return (
    <g>
      {/* hanger */}
      <path d="M195 95 Q205 80 215 95" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="95" x2="205" y2="105" stroke={dark} strokeWidth="3" />
      <line x1="140" y1="105" x2="270" y2="105" stroke={dark} strokeWidth="2" />
      {/* shirt body, semi-transparent */}
      <path d="M150 105 L150 235 L260 235 L260 105 L225 105 L225 130 L185 130 L185 105 Z" fill={cream} opacity="0.55" stroke={dark} strokeWidth="2.5" />
      {/* sleeves */}
      <path d="M150 105 L110 140 L125 165 L150 145 Z" fill={cream} opacity="0.55" stroke={dark} strokeWidth="2.5" />
      <path d="M260 105 L300 140 L285 165 L260 145 Z" fill={cream} opacity="0.55" stroke={dark} strokeWidth="2.5" />
      {/* embroidered floral pattern down the placket */}
      {[140, 165, 190, 215].map((y) => (
        <circle key={y} cx="205" cy={y} r="5" fill={accentColor} opacity="0.7" />
      ))}
    </g>
  );
};

const ElHaloHaloPostreDeCapas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const ube = "#7B68EE";
  const ice = "#EAF6FB";
  return (
    <g>
      {/* tall glass */}
      <path d="M155 130 L165 235 Q205 245 245 235 L255 130 Z" fill="none" stroke={dark} strokeWidth="3" />
      {/* layered contents */}
      <path d="M158 200 L165 235 Q205 245 245 235 L252 200 Z" fill={ice} opacity="0.85" />
      {[
        [165, 190, "#F4A300"],
        [185, 180, "#8B2942"],
        [205, 195, "#4A7A52"],
        [225, 182, "#F5C518"],
      ].map(([x, y, c], i) => (
        <circle key={i} cx={x as number} cy={y as number} r="8" fill={c as string} opacity="0.85" />
      ))}
      <path d="M160 165 L245 165 L240 200 L165 200 Z" fill={ice} />
      {/* scoop of ube ice cream on top */}
      <circle cx="205" cy="145" r="26" fill={ube} stroke={dark} strokeWidth="2.5" />
      <circle cx="196" cy="136" r="6" fill={tint(ube, 0.3)} opacity="0.7" />
    </g>
  );
};

const ElGaleonDeManilaLaRutaQueUnioContinentes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sail = "#F5F0E6";
  return (
    <g>
      {/* hull */}
      <path d="M110 210 L300 210 L280 235 L130 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* masts */}
      <line x1="160" y1="210" x2="160" y2="110" stroke={dark} strokeWidth="4" />
      <line x1="250" y1="210" x2="250" y2="95" stroke={dark} strokeWidth="4" />
      {/* sails */}
      <path d="M160 115 L215 130 L160 150 Z" fill={sail} stroke={dark} strokeWidth="2" />
      <path d="M250 100 L300 118 L250 145 Z" fill={sail} stroke={dark} strokeWidth="2" />
      <path d="M250 150 L210 165 L250 180 Z" fill={sail} stroke={dark} strokeWidth="2" />
      {/* crates and bundled fabric on deck */}
      <rect x="140" y="195" width="24" height="18" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
      <rect x="200" y="192" width="24" height="21" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
      <path d="M240 195 Q255 188 268 198 Q260 210 245 208 Z" fill="#C1272D" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElBayanihanLaCasaQueSeCargaEntreTodos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C9946B";
  const house = "#C9A876";
  return (
    <g>
      {/* small house being carried */}
      <rect x="165" y="150" width="80" height="45" fill={house} stroke={dark} strokeWidth="2.5" />
      <polygon points="155,150 205,120 255,150" fill={shade(house, 0.2)} stroke={dark} strokeWidth="2.5" />
      {/* bamboo carrying poles beneath */}
      <line x1="130" y1="200" x2="280" y2="200" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
      <line x1="130" y1="213" x2="280" y2="213" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
      {/* people carrying it */}
      {[130, 170, 240, 280].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="222" r="9" fill={skin} />
          <path d={`M${x - 8} 231 Q${x} 226 ${x + 8} 231 L${x + 7} 250 L${x - 7} 250 Z`} fill={i % 2 === 0 ? accentColor : dark} />
          <line x1={x} y1="231" x2={x} y2="207" stroke={skin} strokeWidth="5" strokeLinecap="round" />
        </g>
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
  "el-adobo-el-plato-nacional-filipino": { component: ElAdoboElPlatoNacionalFilipino },
  "el-balut-el-huevo-fermentado-callejero": { component: ElBalutElHuevoFermentadoCallejero },
  "manny-pacquiao-y-el-boxeo-filipino": { component: MannyPacquiaoYElBoxeoFilipino },
  "el-tnalak-tejido-sagrado-de-los-tboli": { component: ElTnalakTejidoSagradoDeLosTboli },
  "vigan-la-ciudad-colonial-de-piedra": { component: ViganLaCiudadColonialDePiedra },
  "el-eskrima-arte-marcial-de-los-bastones": { component: ElEskrimaArteMarcialDeLosBastones },
  "el-barong-tagalog-camisa-de-pina": { component: ElBarongTagalogCamisaDePina },
  "el-halo-halo-postre-de-capas": { component: ElHaloHaloPostreDeCapas },
  "el-galeon-de-manila-la-ruta-que-unio-continentes": { component: ElGaleonDeManilaLaRutaQueUnioContinentes },
  "el-bayanihan-la-casa-que-se-carga-entre-todos": { component: ElBayanihanLaCasaQueSeCargaEntreTodos },
};
