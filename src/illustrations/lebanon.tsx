import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BiblosLaCunaDelAlfabeto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 Q205 225 320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.55" />
      <path d="M150 240 L150 110 Q150 95 168 95 L232 95 Q250 95 250 110 L250 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="165" y1="125" x2="235" y2="125" stroke={dark} strokeWidth="3" />
      <path d="M175 145 L175 165 M190 145 L200 165 L190 165 M215 150 Q225 150 225 165 M170 185 L195 185 L182 205 Z M215 185 L235 185" stroke="#F5F0E6" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M170 215 Q182 200 195 215 M215 215 L225 200 L235 215" stroke="#F5F0E6" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M105 235 Q130 210 165 220 L160 235 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <line x1="130" y1="212" x2="130" y2="185" stroke="#5C3A21" strokeWidth="3" />
      <path d="M130 185 L150 200 L130 210 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BaalbekYElTrilithon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const columns = [110, 150, 190, 230, 270];
  return (
    <g>
      {columns.map((x) => (
        <g key={x}>
          <rect x={x} y="90" width="18" height="115" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
          <rect x={x - 5} y="82" width="28" height="12" fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <line x1={x + 3} y1="95" x2={x + 3} y2="200" stroke={dark} strokeWidth="1" opacity="0.4" />
          <line x1={x + 13} y1="95" x2={x + 13} y2="200" stroke={dark} strokeWidth="1" opacity="0.4" />
        </g>
      ))}
      <rect x="95" y="205" width="230" height="20" fill="#8C8C74" stroke={dark} strokeWidth="3" />
      <rect x="95" y="225" width="230" height="22" fill="#7A7A64" stroke={dark} strokeWidth="3" />
      <rect x="150" y="248" width="120" height="22" fill="#6B6B58" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const LosCedrosDeDios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const cedar = (cx: number, scale: number, opacity: number) => (
    <g key={cx} transform={`translate(${cx} 0) scale(${scale})`} opacity={opacity}>
      <rect x="-6" y="150" width="12" height="35" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <polygon points="-40,150 40,150 25,128 -25,128" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="-30,132 30,132 18,112 -18,112" fill={tint(accentColor, 0.12)} stroke={dark} strokeWidth="2.5" />
      <polygon points="-20,116 20,116 10,98 -10,98" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="-11,100 11,100 0,82" fill={tint(accentColor, 0.12)} stroke={dark} strokeWidth="2.5" />
    </g>
  );
  return (
    <g>
      <path d="M90 240 L320 240 L280 150 L200 200 L140 160 Z" fill="#B8B0A0" opacity="0.5" />
      {cedar(140, 0.75, 0.6)}
      {cedar(205, 1, 1)}
      {cedar(265, 0.85, 0.75)}
    </g>
  );
};

const LaPurpuraDeTiro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path
        d="M160 235 Q150 200 175 175 Q195 155 190 130 Q210 145 205 170 Q225 165 220 190 Q245 195 235 220 Q210 240 185 232 Q170 240 160 235 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      <path d="M190 130 Q200 150 190 170 Q180 155 190 130 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="1.5" />
      <path d="M255 150 Q280 165 275 195 Q270 220 245 225 Q260 200 255 175 Q252 160 255 150 Z" fill="#D9D2C0" stroke={dark} strokeWidth="2.5" />
      <path d="M255 150 Q270 170 265 195" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="205" cy="245" rx="120" ry="8" fill="#1B5E7A" opacity="0.4" />
    </g>
  );
};

const ElPalacioDeBeiteddine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const arches = [120, 165, 210, 255];
  return (
    <g>
      <rect x="100" y="150" width="210" height="90" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      {arches.map((x) => (
        <path key={x} d={`M${x} 240 L${x} 190 Q${x + 15} 165 ${x + 30} 190 L${x + 30} 240 Z`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="95" y="140" width="220" height="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[110, 150, 190, 230, 270].map((x) => (
        <polygon key={x} points={`${x},140 ${x + 10},125 ${x + 20},140`} fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
      <rect x="150" y="215" width="110" height="25" fill="#C9A227" opacity="0.6" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={160 + i * 25} y="218" width="20" height="19" fill={i % 2 === 0 ? "#8B1A2B" : "#2E4A6B"} opacity="0.7" />
      ))}
    </g>
  );
};

const LaDebkeDanzaTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, kick: boolean, color: string) => (
    <g key={x}>
      <circle cx={x} cy="115" r="14" fill="#E8C39E" stroke={dark} strokeWidth="2" />
      <rect x={x - 16} y="128" width="32" height="55" fill={color} stroke={dark} strokeWidth="2.5" />
      <line x1={x - 16} y1="140" x2={x - 34} y2="150" stroke="#E8C39E" strokeWidth="7" strokeLinecap="round" />
      <line x1={x + 16} y1="140" x2={x + 34} y2="150" stroke="#E8C39E" strokeWidth="7" strokeLinecap="round" />
      {kick ? (
        <>
          <line x1={x - 6} y1="183" x2={x - 10} y2="215" stroke={dark} strokeWidth="8" strokeLinecap="round" />
          <line x1={x + 6} y1="183" x2={x + 22} y2="195" stroke={dark} strokeWidth="8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1={x - 6} y1="183" x2={x - 8} y2="230" stroke={dark} strokeWidth="8" strokeLinecap="round" />
          <line x1={x + 6} y1="183" x2={x + 8} y2="230" stroke={dark} strokeWidth="8" strokeLinecap="round" />
        </>
      )}
    </g>
  );
  return (
    <g>
      <line x1="124" y1="150" x2="286" y2="150" stroke={dark} strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      {dancer(140, false, accentColor)}
      {dancer(180, true, tint(accentColor, 0.18))}
      {dancer(220, false, accentColor)}
      {dancer(260, true, tint(accentColor, 0.18))}
    </g>
  );
};

const ElMezzeYElTabule: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dish = (cx: number, cy: number, r: number, fill: string) => (
    <g key={`${cx}-${cy}`}>
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.65} fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <ellipse cx={cx} cy={cy} rx={r * 0.7} ry={r * 0.45} fill={fill} />
    </g>
  );
  return (
    <g>
      <rect x="95" y="150" width="220" height="90" fill="#C9A96E" stroke={dark} strokeWidth="3" />
      {dish(150, 165, 34, "#D9A441")}
      {dish(255, 165, 34, "#5C7A3A")}
      {dish(150, 220, 30, "#6B4A2A")}
      {dish(255, 220, 30, "#C1440E")}
      <rect x="188" y="185" width="30" height="45" rx="6" fill="#E8C88A" stroke={dark} strokeWidth="2" />
      <rect x="188" y="150" width="30" height="45" rx="6" fill="#E8C88A" stroke={dark} strokeWidth="2" opacity="0.85" />
    </g>
  );
};

const FairuzYLosHermanosRahbani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="26" fill="#E8C39E" stroke={dark} strokeWidth="2.5" />
      <path d="M182 118 Q205 95 228 118 L228 128 Q205 108 182 128 Z" fill="#2B2018" stroke={dark} strokeWidth="2" />
      <path d="M170 240 L170 175 Q170 156 205 156 Q240 156 240 175 L240 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="200" y="175" width="10" height="60" fill="#5C3A21" />
      <ellipse cx="205" cy="178" rx="16" ry="10" fill="#8C8C8C" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="188" x2="205" y2="240" stroke="#5C3A21" strokeWidth="4" />
      <path d="M140 130 Q150 115 145 100 M270 140 Q262 122 270 105 M120 165 Q130 150 122 135" stroke={dark} strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round" />
    </g>
  );
};

const GibranKhalilGibranYElProfeta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 160 L205 150 L205 235 L110 245 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M300 160 L205 150 L205 235 L300 245 Z" fill="#EAE2D0" stroke={dark} strokeWidth="3" />
      {[172, 190, 208].map((y) => (
        <line key={y} x1="125" y1={y} x2="190" y2={y - 5} stroke={dark} strokeWidth="2" opacity="0.5" />
      ))}
      {[172, 190, 208].map((y) => (
        <line key={"r" + y} x1="220" y1={y - 5} x2="285" y2={y} stroke={dark} strokeWidth="2" opacity="0.5" />
      ))}
      <line x1="205" y1="150" x2="205" y2="235" stroke={dark} strokeWidth="2.5" />
      <path d="M245 130 L268 100 L275 108 L252 138 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="248,135 258,133 250,143" fill={dark} />
      <path d="M150 110 Q165 95 180 108 Q165 115 158 128 Q148 118 150 110 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M180 108 Q195 100 205 112" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LosVinedosDelValleDeLaBekaa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rows = [
    { y: 230, w: 260, x: 75 },
    { y: 214, w: 220, x: 95 },
    { y: 200, w: 185, x: 112 },
    { y: 188, w: 155, x: 127 },
  ];
  return (
    <g>
      <path d="M90 185 L160 130 L230 175 L320 120 L320 190 L90 190 Z" fill="#B8B0A0" opacity="0.5" />
      {rows.map((r) => (
        <line key={r.y} x1={r.x} y1={r.y} x2={r.x + r.w} y2={r.y} stroke="#5C7A3A" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      ))}
      {rows.map((r) =>
        Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`${r.y}-${i}`}
            x1={r.x + (r.w / 5) * i}
            y1={r.y - 8}
            x2={r.x + (r.w / 5) * i}
            y2={r.y}
            stroke="#3F5C2A"
            strokeWidth="3"
          />
        ))
      )}
      <path d="M200 175 L235 175 L228 205 Q217 218 207 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="217" y1="175" x2="217" y2="150" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const LosFeniciosYLaInvencionDelVidrioSoplado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const glass = "#A8D8E0";
  return (
    <g>
      {/* artisan */}
      <circle cx="150" cy="140" r="16" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M132 155 Q150 145 168 155 L163 235 L137 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* arms holding the blowpipe to the mouth */}
      <path d="M162 160 Q185 165 210 155" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      {/* blowpipe */}
      <line x1="150" y1="150" x2="260" y2="150" stroke="#5C3A21" strokeWidth="5" strokeLinecap="round" />
      {/* incandescent glass bubble */}
      <circle cx="280" cy="165" r="30" fill={glass} stroke={shade(glass, 0.35)} strokeWidth="2.5" opacity="0.9" />
      <ellipse cx="270" cy="155" rx="8" ry="5" fill="#fff" opacity="0.6" />
      {/* glow */}
      <circle cx="280" cy="165" r="38" fill="none" stroke="#F4A300" strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const LaGrutaDeJeitaElRioSubterraneo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      {/* cave wall */}
      <path d="M85 90 Q205 70 320 90 L320 250 L85 250 Z" fill={tint(accentColor, 0.15)} opacity="0.5" />
      {/* stalactites hanging from ceiling */}
      {[120, 160, 205, 250, 290].map((x, i) => (
        <path key={x} d={`M${x - 10} 90 L${x} ${120 + (i % 2) * 20} L${x + 10} 90 Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      {/* underground river */}
      <path d="M85 210 Q205 195 320 210 L320 250 L85 250 Z" fill={water} opacity="0.75" />
      {/* small boat */}
      <path d="M170 215 Q205 205 240 215 L230 225 L180 225 Z" fill="#8B5A2B" stroke={shade("#8B5A2B", 0.3)} strokeWidth="2.5" />
    </g>
  );
};

const ElValleDeQadishaYSusMonasteriosEnLosAcantilados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#B0A48A";
  return (
    <g>
      {/* canyon walls */}
      <path d="M85 250 L85 130 L170 90 L200 140 L230 85 L320 130 L320 250 Z" fill={stone} stroke={dark} strokeWidth="2.5" />
      {/* small chapel wedged into a ledge */}
      <rect x="150" y="155" width="55" height="45" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M150 155 L177 130 L205 155 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="177" cy="180" r="6" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="1.5" />
      {/* cross on the chapel */}
      <line x1="177" y1="130" x2="177" y2="118" stroke={dark} strokeWidth="2.5" />
      <line x1="171" y1="122" x2="183" y2="122" stroke={dark} strokeWidth="2.5" />
      {/* second smaller hermitage further right */}
      <rect x="245" y="175" width="30" height="30" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElKebbehNayyehElTartarDeCorderoLibanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* plate */}
      <ellipse cx="205" cy="210" rx="95" ry="26" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {/* mound of meat */}
      <path d="M140 205 Q145 180 205 178 Q265 180 270 205 Q265 220 205 222 Q145 220 140 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* finger-drawn lines */}
      <path d="M160 195 Q205 190 250 195 M160 205 Q205 200 250 205 M160 213 Q205 208 250 213" stroke={dark} strokeWidth="1.5" opacity="0.4" fill="none" />
      {/* olive oil drizzle */}
      <path d="M180 188 Q205 182 230 188" stroke="#8FA05A" strokeWidth="3" opacity="0.7" fill="none" />
      {/* mint leaf and onion beside */}
      <path d="M290 200 Q300 190 310 200 Q300 210 290 200 Z" fill="#4A7A52" stroke={dark} strokeWidth="1.5" />
      <ellipse cx="120" cy="215" rx="14" ry="10" fill="#F5EFE0" stroke={dark} strokeWidth="1.5" opacity="0.85" />
    </g>
  );
};

const LaDiasporaLibanesaMasFueraQueDentro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leather = "#8B5A2B";
  return (
    <g>
      {/* open suitcase */}
      <path d="M110 235 L110 175 Q110 165 120 165 L290 165 Q300 165 300 175 L300 235 Z" fill={leather} stroke={shade(leather, 0.3)} strokeWidth="3" />
      <rect x="100" y="230" width="210" height="14" fill={shade(leather, 0.15)} stroke={dark} strokeWidth="2" />
      {/* folded clothes inside */}
      {[135, 190, 245].map((x) => (
        <rect key={x} x={x - 25} y={x === 190 ? 195 : 190} width="50" height="24" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" opacity="0.9" />
      ))}
      {/* cedar tree sprouting from the middle */}
      <line x1="205" y1="180" x2="205" y2="150" stroke="#5C3A21" strokeWidth="4" />
      <polygon points="180,150 230,150 215,128 195,128" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="190,132 220,132 205,112" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

export const lebanonIllustrations: Record<string, IllustrationDefinition> = {
  "biblos-la-cuna-del-alfabeto": { component: BiblosLaCunaDelAlfabeto },
  "baalbek-y-el-trilithon": { component: BaalbekYElTrilithon },
  "los-cedros-de-dios": { component: LosCedrosDeDios },
  "la-purpura-de-tiro": { component: LaPurpuraDeTiro },
  "el-palacio-de-beiteddine": { component: ElPalacioDeBeiteddine },
  "la-debke-danza-tradicional": { component: LaDebkeDanzaTradicional },
  "el-mezze-y-el-tabule": { component: ElMezzeYElTabule },
  "fairuz-y-los-hermanos-rahbani": { component: FairuzYLosHermanosRahbani },
  "gibran-khalil-gibran-y-el-profeta": { component: GibranKhalilGibranYElProfeta },
  "los-vinedos-del-valle-de-la-bekaa": { component: LosVinedosDelValleDeLaBekaa },
  "los-fenicios-y-la-invencion-del-vidrio-soplado": { component: LosFeniciosYLaInvencionDelVidrioSoplado },
  "la-gruta-de-jeita-el-rio-subterraneo": { component: LaGrutaDeJeitaElRioSubterraneo },
  "el-valle-de-qadisha-y-sus-monasterios-en-los-acantilados": { component: ElValleDeQadishaYSusMonasteriosEnLosAcantilados },
  "el-kebbeh-nayyeh-el-tartar-de-cordero-libanes": { component: ElKebbehNayyehElTartarDeCorderoLibanes },
  "la-diaspora-libanesa-mas-fuera-que-dentro": { component: LaDiasporaLibanesaMasFueraQueDentro },
};
