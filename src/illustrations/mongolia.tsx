import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElNaadamLosTresJuegosViriles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M150 235 Q120 190 150 145 Q160 130 175 130" fill="none" stroke={wood} strokeWidth="7" strokeLinecap="round" />
      <line x1="150" y1="145" x2="150" y2="220" stroke={dark} strokeWidth="2" opacity="0.6" />
      <path d="M140 145 L150 130 L160 145 Z" fill={dark} />
      <line x1="145" y1="185" x2="200" y2="185" stroke={dark} strokeWidth="2.5" />
      <path d="M240 130 L215 235 M280 130 L305 235" stroke={accentColor} strokeWidth="16" strokeLinecap="round" />
      <path d="M240 130 Q262 145 280 130" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LaEstatuaDeGenghisKhanMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const steel = "#B0B8BF";
  return (
    <g>
      <path d="M120 235 Q115 195 150 185 Q195 172 245 190 Q275 200 278 220 L272 235 L255 235 L250 220 L155 220 L148 235 Z" fill={steel} stroke={dark} strokeWidth="2.5" />
      <path d="M120 200 Q100 205 90 225 Q88 235 100 238 Q112 235 116 220" fill="none" stroke={steel} strokeWidth="13" strokeLinecap="round" />
      <ellipse cx="120" cy="192" rx="10" ry="14" fill={steel} stroke={dark} strokeWidth="2" />
      <path d="M180 172 Q195 150 220 155 L228 190 L175 195 Z" fill={dark} opacity="0.6" />
      <circle cx="228" cy="155" r="10" fill={steel} stroke={dark} strokeWidth="2" />
      <path d="M215 145 L242 145" stroke={dark} strokeWidth="3" />
      <path d="M220 148 L215 130" stroke={dark} strokeWidth="2" />
      {[[170, 100], [200, 90], [230, 100]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} L${(x as number) - 3} ${(y as number) + 12} L${(x as number) + 3} ${(y as number) + 12} Z`} fill={accentColor} opacity="0.4" />
      ))}
    </g>
  );
};

const ElGerLaCasaPortatilDisenadaParaElViento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M130 235 L130 195 Q130 185 145 185 L265 185 Q280 185 280 195 L280 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 195 Q205 130 280 195 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      {[160, 190, 220, 250].map((x) => (
        <line key={x} x1={x} y1="195" x2="205" y2="145" stroke={wood} strokeWidth="2" opacity="0.6" />
      ))}
      <circle cx="205" cy="145" r="10" fill={dark} />
      <rect x="195" y="210" width="20" height="25" fill={wood} />
    </g>
  );
};

const ElKhoomiiDosNotasDesdeUnaSolaGarganta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <ellipse cx="185" cy="180" rx="34" ry="42" fill={skin} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="185" cy="200" rx="12" ry="9" fill="#5C3A2E" />
      <path d="M215 195 Q245 175 275 178 Q295 180 300 165" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      <path d="M215 205 Q250 210 285 220 Q300 224 310 212" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const UlanBatorLaCapitalMasFriaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#C1272D";
  return (
    <g>
      <rect x="195" y="100" width="18" height="120" rx="9" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <circle cx="204" cy="228" r="22" fill={red} stroke={dark} strokeWidth="2.5" />
      <rect x="199" y="150" width="10" height="75" fill={red} />
      {[120, 140, 160, 180, 200].map((y) => (
        <line key={y} x1="213" y1={y} x2="225" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      {[[130, 130], [155, 150], [265, 140], [280, 165]].map(([x, y]) => (
        <g key={x as number}>
          {[0, 60, 120].map((deg) => (
            <line key={deg} x1={x} y1={(y as number) - 6} x2={x} y2={(y as number) + 6} stroke={accentColor} strokeWidth="1.5" opacity="0.6" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
    </g>
  );
};

const ElYamElCorreoMasVelozDelImperioMongol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <path d="M110 230 Q140 215 165 225 Q185 232 210 220 Q235 210 265 218 Q290 224 300 210" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" strokeDasharray="1 8" strokeLinecap="round" />
      <path d="M150 220 Q145 195 175 190 Q210 185 225 200 L225 225 L150 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M225 205 Q240 195 250 205" stroke={accentColor} strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M150 220 Q130 218 120 230 L118 240 L155 240 Z" fill={dark} />
      <circle cx="130" cy="240" r="10" fill="none" stroke={dark} strokeWidth="4" />
      <circle cx="200" cy="240" r="10" fill="none" stroke={dark} strokeWidth="4" />
      <circle cx="200" cy="175" r="10" fill={skin} />
      <path d="M215 185 Q235 175 250 185 L245 200 Z" fill={dark} />
    </g>
  );
};

const LosCazadoresConAguilasDoradasDelOeste: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const skin = "#D9A46A";
  return (
    <g>
      <path d="M115 225 L115 205 Q115 195 130 195 L215 195 Q225 195 225 205 L225 235 L115 235 Z" fill={skin} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="230" cy="180" rx="22" ry="18" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <path d="M230 180 Q195 150 155 160 Q190 168 208 185 Z" fill={dark} />
      <path d="M230 180 Q265 150 305 160 Q270 168 252 185 Z" fill={dark} />
      <path d="M215 172 L200 168 L210 178 Z" fill="#F4A300" />
      <circle cx="238" cy="176" r="3" fill="#1A1A1A" />
    </g>
  );
};

const LaTumbaDeGenghisKhanNuncaEncontrada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const grass = "#8FA05A";
  return (
    <g>
      <path d="M90 230 Q205 215 320 230 L320 250 L90 250 Z" fill={grass} opacity="0.55" />
      <path d="M90 205 Q205 192 320 205" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      <path d="M195 230 L200 195 L215 197 L212 232 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      <ellipse cx="205" cy="232" rx="20" ry="6" fill={dark} opacity="0.3" />
    </g>
  );
};

const MasCaballosQuePersonasYElUltimoCaballoSalvaje: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 235 Q125 195 155 180 Q170 172 185 180 L215 175 Q230 172 235 185 Q245 195 240 210 L235 235 L220 235 L218 218 L155 218 L150 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M215 178 Q225 165 240 168 L235 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${150 + i * 8} 178 L${146 + i * 8} 158`} stroke={dark} strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M130 200 Q105 210 95 235" stroke={accentColor} strokeWidth="10" strokeLinecap="round" fill="none" />
    </g>
  );
};

const ElPaisMenosDensamentePobladoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#8FA05A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={green} opacity="0.4" />
      <path d="M90 165 Q205 150 320 165" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      <path d="M90 200 Q205 188 320 200" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      <circle cx="205" cy="180" r="8" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElDeelLaTunicaTradicionalMongola: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const sash = "#D4A017";
  return (
    <g>
      <circle cx="205" cy="115" r="20" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M180 148 Q160 155 155 190" stroke={accentColor} strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M230 148 Q250 155 255 190" stroke={accentColor} strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M180 128 Q205 118 230 128 L245 235 L165 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M180 128 Q195 160 175 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      <path d="M230 128 Q215 160 235 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      <rect x="170" y="175" width="70" height="20" fill={sash} stroke={shade(sash, 0.3)} strokeWidth="2" />
    </g>
  );
};

const ElAiragLaLecheDeYeguaFermentada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  const milk = "#F5F0E6";
  return (
    <g>
      {/* leather sack (khokhuur) */}
      <path d="M110 235 Q100 180 130 150 Q150 130 175 145 Q195 158 185 190 Q180 220 165 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="145" y1="135" x2="150" y2="150" stroke={dark} strokeWidth="4" />
      {/* wooden bowl */}
      <path d="M215 210 Q215 240 260 242 Q305 240 305 210 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      <ellipse cx="260" cy="210" rx="45" ry="13" fill={milk} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      {[
        [240, 207],
        [260, 204],
        [280, 208],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill="#fff" opacity="0.8" />
      ))}
    </g>
  );
};

const LosAcantiladosLlameantesYLosPrimerosHuevosDeDinosaurio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = accentColor;
  return (
    <g>
      {/* cliff */}
      <path d="M85 235 L85 160 L140 130 L200 165 L260 120 L320 155 L320 235 Z" fill={sand} stroke={dark} strokeWidth="3" />
      <path d="M85 160 L140 130 L200 165 L260 120 L320 155" fill="none" stroke={shade(sand, 0.25)} strokeWidth="2" opacity="0.6" />
      {/* nest of eggs */}
      <ellipse cx="205" cy="222" rx="55" ry="14" fill={shade(sand, 0.15)} opacity="0.6" />
      {[
        [175, 220, -8],
        [205, 215, 5],
        [235, 220, -3],
        [190, 232, 9],
        [220, 232, -6],
      ].map(([x, y, rot]) => (
        <ellipse key={x} cx={x} cy={y} rx="12" ry="16" fill="#F5EEDD" stroke={dark} strokeWidth="2" transform={`rotate(${rot} ${x} ${y})`} />
      ))}
    </g>
  );
};

const ElTsamLaDanzaBudistaDeMascaras: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const gold = "#D4A017";
  return (
    <g>
      <path d="M150 235 Q140 160 205 140 Q270 160 260 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* gold crown */}
      {[
        [170, 150],
        [205, 138],
        [240, 150],
      ].map(([x, y]) => (
        <path key={x} d={`M${x - 10} ${y + 15} L${x} ${y} L${x + 10} ${y + 15} Z`} fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      ))}
      {/* bulging eyes */}
      <circle cx="180" cy="180" r="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="230" cy="180" r="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="180" cy="180" r="7" fill="#1A1A1A" />
      <circle cx="230" cy="180" r="7" fill="#1A1A1A" />
      {/* fangs */}
      <path d="M190 215 L185 235 L198 218 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <path d="M220 215 L225 235 L212 218 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosCamellosBactrianosDeDosJorobasDelGobi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#E8D2A0";
  return (
    <g>
      {/* dunes */}
      <path d="M85 235 Q150 210 210 232 Q270 210 320 230 L320 250 L85 250 Z" fill={sand} opacity="0.6" />
      {/* neck + head drawn first so the body absorbs the seam */}
      <path d="M145 205 Q120 200 110 175 Q108 165 118 165 Q128 175 148 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="112" cy="168" r="10" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* body with two humps */}
      <path d="M140 210 Q145 175 165 178 Q170 155 190 158 Q195 175 210 178 Q215 155 235 158 Q245 175 250 195 Q255 210 240 215 L150 215 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* legs */}
      {[160, 185, 210, 235].map((x) => (
        <line key={x} x1={x} y1="213" x2={x - 4} y2="240" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      ))}
      <circle cx="108" cy="166" r="2" fill="#1A1A1A" />
    </g>
  );
};

export const mongoliaIllustrations: Record<string, IllustrationDefinition> = {
  "el-naadam-los-tres-juegos-viriles": { component: ElNaadamLosTresJuegosViriles },
  "la-estatua-de-genghis-khan-mas-grande-del-mundo": { component: LaEstatuaDeGenghisKhanMasGrandeDelMundo },
  "el-ger-la-casa-portatil-disenada-para-el-viento": { component: ElGerLaCasaPortatilDisenadaParaElViento },
  "el-khoomii-dos-notas-desde-una-sola-garganta": { component: ElKhoomiiDosNotasDesdeUnaSolaGarganta },
  "ulan-bator-la-capital-mas-fria-del-mundo": { component: UlanBatorLaCapitalMasFriaDelMundo },
  "el-yam-el-correo-mas-veloz-del-imperio-mongol": { component: ElYamElCorreoMasVelozDelImperioMongol },
  "los-cazadores-con-aguilas-doradas-del-oeste": { component: LosCazadoresConAguilasDoradasDelOeste },
  "la-tumba-de-genghis-khan-nunca-encontrada": { component: LaTumbaDeGenghisKhanNuncaEncontrada },
  "mas-caballos-que-personas-y-el-ultimo-caballo-salvaje": { component: MasCaballosQuePersonasYElUltimoCaballoSalvaje },
  "el-pais-menos-densamente-poblado-del-mundo": { component: ElPaisMenosDensamentePobladoDelMundo },
  "el-deel-la-tunica-tradicional-mongola": { component: ElDeelLaTunicaTradicionalMongola },
  "el-airag-la-leche-de-yegua-fermentada": { component: ElAiragLaLecheDeYeguaFermentada },
  "los-acantilados-llameantes-y-los-primeros-huevos-de-dinosaurio": { component: LosAcantiladosLlameantesYLosPrimerosHuevosDeDinosaurio },
  "el-tsam-la-danza-budista-de-mascaras": { component: ElTsamLaDanzaBudistaDeMascaras },
  "los-camellos-bactrianos-de-dos-jorobas-del-gobi": { component: LosCamellosBactrianosDeDosJorobasDelGobi },
};
