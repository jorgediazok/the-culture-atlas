import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaMecaYLaKaabaElCentroDelIslam: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dots: [number, number][] = [
    [140, 235], [160, 245], [185, 250], [225, 250], [250, 245], [270, 235], [130, 210], [280, 210], [150, 190], [260, 190],
  ];
  return (
    <g>
      <rect x="165" y="130" width="80" height="90" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      <rect x="165" y="150" width="80" height="14" fill="#D9A521" />
      <rect x="197" y="130" width="16" height="90" fill="#2A2A2A" opacity="0.6" />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      <ellipse cx="205" cy="245" rx="95" ry="10" fill={tint(accentColor, 0.3)} opacity="0.6" />
    </g>
  );
};

const HegraLaPetraSecretaDeArabiaSaudita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,250 130,90 280,90 320,250" fill={shade(accentColor, 0.15)} opacity="0.4" />
      <rect x="155" y="150" width="100" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[172, 197, 222].map((x) => (
        <rect key={x} x={x} y="150" width="10" height="90" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="1.5" />
      ))}
      <polygon points="150,150 205,118 260,150" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="192" y="195" width="26" height="45" fill={dark} opacity="0.55" />
    </g>
  );
};

const LaPoesiaNabatiVersosDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="165" cy="140" r="13" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M150 158 Q165 148 180 158 L175 225 L155 225 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M180 175 L215 160" stroke="#5C3A21" strokeWidth="3" strokeLinecap="round" />
      {[[240, 200], [270, 210], [290, 195]].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y - 18} r="9" fill="#D9B48A" stroke={dark} strokeWidth="1.5" />
          <path d={`M${x - 10} ${y} Q${x} ${y - 10} ${x + 10} ${y} L${x + 8} ${y + 15} L${x - 8} ${y + 15} Z`} fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <polygon points="125,225 135,205 145,225" fill="#D4941E" opacity="0.8" />
    </g>
  );
};

const LaCeteriaTradicionBeduinaProtegida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 235 L280 235 L270 220 L150 220 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="180" rx="45" ry="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="160,175 130,165 155,190" fill={dark} />
      <path d="M205 142 Q195 125 175 122 Q185 135 195 145" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M205 142 Q215 122 240 118 Q225 132 215 145" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="180" cy="172" rx="8" ry="10" fill="#F5F0E6" />
    </g>
  );
};

const ElKabsaPlatoNacionalDeArabiaSaudita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="105" ry="32" fill="#B8A484" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="85" ry="23" fill="#D4941E" opacity="0.85" />
      {[[175, 190, 20], [225, 185, 22]].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.6} fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      ))}
      {[[150, 185], [180, 175], [210, 170], [240, 178], [265, 188]].map(([x, y]) => (
        <ellipse key={x + "-" + y} cx={x} cy={y} rx="3" ry="4" fill="#3E2E24" opacity="0.8" />
      ))}
    </g>
  );
};

const LaArdahDanzaDeEspadasYPoesia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rowA = [140, 175, 210];
  const rowB = [140, 175, 210];
  return (
    <g>
      {rowA.map((x) => (
        <g key={"a" + x}>
          <circle cx={x} cy="120" r="11" fill="#D9B48A" stroke={dark} strokeWidth="2" />
          <path d={`M${x - 14} 136 Q${x} 128 ${x + 14} 136 L${x + 10} 200 L${x - 10} 200 Z`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <line x1={x + 10} y1="160" x2={x + 30} y2="120" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      {rowB.map((x) => {
        const mx = x + 90;
        return (
          <g key={"b" + x}>
            <circle cx={mx} cy="120" r="11" fill="#D9B48A" stroke={dark} strokeWidth="2" />
            <path d={`M${mx - 14} 136 Q${mx} 128 ${mx + 14} 136 L${mx + 10} 200 L${mx - 10} 200 Z`} fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
            <line x1={mx - 10} y1="160" x2={mx - 30} y2="120" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
          </g>
        );
      })}
    </g>
  );
};

const ElDatilAlimentoYSimboloSaudita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="160" y1="240" x2="165" y2="130" stroke="#5C3A21" strokeWidth="8" />
      <path d="M165 130 Q125 122 115 145 M165 130 Q135 105 140 85 M165 130 Q195 118 205 138 M165 130 Q180 100 172 82" fill="none" stroke="#3F7D2E" strokeWidth="7" strokeLinecap="round" />
      {[[145, 150], [155, 160], [165, 155]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill={accentColor} />
      ))}
      <ellipse cx="255" cy="220" rx="45" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      {[[230, 210], [250, 205], [270, 210], [285, 218]].map(([x, y], i) => (
        <ellipse key={x} cx={x} cy={y} rx="9" ry="12" fill={i % 2 === 0 ? accentColor : "#5C3A21"} stroke={dark} strokeWidth="1.2" />
      ))}
    </g>
  );
};

const ElCuartoVacioUnMarDeDunasSinFin: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <circle cx="290" cy="100" r="22" fill="#F5C542" opacity="0.85" />
      {[210, 190, 170, 150].map((y, i) => (
        <path key={y} d={`M90 ${y} Q205 ${y - 25} 320 ${y} L320 250 L90 250 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} opacity={0.55 + i * 0.1} />
      ))}
    </g>
  );
};

const LosConcursosDeBellezaDeCamellos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path
        d="M135 220 Q118 195 135 172 Q150 150 178 155 Q200 135 222 155 Q242 165 236 188 Q252 168 258 140 Q261 124 272 121 Q283 118 283 130 Q283 142 272 148 Q262 153 252 168 Q246 182 242 198 Q238 214 218 218 L165 218 Q140 218 135 220 Z"
        fill="#C9A87C"
        stroke={dark}
        strokeWidth="3"
      />
      <polygon points="258,128 250,120 254,136" fill="#C9A87C" stroke={dark} strokeWidth="2" />
      <circle cx="266" cy="132" r="3" fill="#1A1A1A" />
      <path d="M132 212 Q124 220 128 236" fill="none" stroke="#8B7355" strokeWidth="3" strokeLinecap="round" />
      <circle cx="128" cy="238" r="4" fill="#8B7355" />
      <line x1="160" y1="216" x2="158" y2="250" stroke="#3E2E24" strokeWidth="5" strokeLinecap="round" />
      <line x1="178" y1="217" x2="180" y2="252" stroke="#3E2E24" strokeWidth="5" strokeLinecap="round" />
      <line x1="205" y1="217" x2="200" y2="252" stroke="#3E2E24" strokeWidth="5" strokeLinecap="round" />
      <line x1="222" y1="215" x2="222" y2="250" stroke="#3E2E24" strokeWidth="5" strokeLinecap="round" />
      <path d="M165 158 Q195 145 220 160 Q210 172 195 172 Q178 172 165 158 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[280, 225], [300, 215], [300, 240]].map(([x, y]) => (
        <rect key={x + "-" + y} x={x} y={y} width="14" height="18" fill="#8B7355" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const DiriyahCunaDelEstadoSaudita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const towers = [
    { x: 120, w: 40, h: 90 },
    { x: 170, w: 55, h: 120 },
    { x: 235, w: 45, h: 100 },
    { x: 285, w: 35, h: 80 },
  ];
  return (
    <g>
      {towers.map((t) => (
        <g key={t.x}>
          <rect x={t.x} y={240 - t.h} width={t.w} height={t.h} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={t.x + 4 + i * 6} y={240 - t.h - 8} width="4" height="10" fill={accentColor} stroke={dark} strokeWidth="1" />
          ))}
        </g>
      ))}
    </g>
  );
};

const ElQahwaElRitualDelCafeArabe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* dallah coffee pot */}
      <path d="M140 235 L140 175 Q140 150 165 145 L175 145 Q195 148 195 170 L195 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M175 145 Q185 120 200 118 L215 122 Q210 140 195 148" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="167" cy="145" rx="10" ry="5" fill={gold} />
      <path d="M140 190 Q120 190 118 210" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      {/* pour stream */}
      <path d="M213 122 Q225 140 232 165" fill="none" stroke={gold} strokeWidth="3" opacity="0.7" />
      {/* small cups */}
      {[245, 275, 300].map((x, i) => (
        <path key={x} d={`M${x - 10} 220 L${x + 10} 220 L${x + 7} 235 L${x - 7} 235 Z`} fill={gold} stroke={dark} strokeWidth="1.5" opacity={i === 0 ? 1 : 0.7} />
      ))}
    </g>
  );
};

const ElMajlisElSalonDeLaHospitalidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  const rug = "#8B5A2B";
  return (
    <g>
      {/* rug */}
      <ellipse cx="205" cy="200" rx="105" ry="50" fill={rug} stroke={dark} strokeWidth="2" opacity="0.5" />
      <ellipse cx="205" cy="200" rx="80" ry="38" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* cushions arranged around the perimeter */}
      {[
        [120, 170],
        [150, 225],
        [205, 240],
        [260, 225],
        [290, 170],
        [205, 155],
      ].map(([x, y], i) => (
        <rect key={`${x}-${y}`} x={x - 20} y={y - 12} width="40" height="24" rx="8" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const LosSuqsMercadosTradicionales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const fabric = "#8B2942";
  return (
    <g>
      {/* awning */}
      <path d="M90 130 L320 130 L305 155 L105 155 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[110, 150, 190, 230, 270, 300].map((x) => (
        <line key={x} x1={x} y1="142" x2={x} y2="155" stroke={dark} strokeWidth="2" opacity="0.5" />
      ))}
      {/* stall table */}
      <rect x="100" y="200" width="210" height="16" fill="#6B4A2F" stroke={dark} strokeWidth="2" />
      {/* piled fabrics */}
      <rect x="120" y="170" width="45" height="30" fill={fabric} stroke={dark} strokeWidth="2" />
      <rect x="128" y="160" width="35" height="16" fill={tint(fabric, 0.3)} stroke={dark} strokeWidth="1.5" />
      {/* spice mounds */}
      {[
        [220, 195, gold],
        [250, 195, "#B5651D"],
        [280, 195, "#8B2942"],
      ].map(([x, y, c]) => (
        <path key={x as number} d={`M${(x as number) - 16} ${y} Q${x} ${(y as number) - 24} ${(x as number) + 16} ${y} Z`} fill={c as string} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElOudLaMusicaDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* pear-shaped body */}
      <path d="M175 165 Q140 175 140 215 Q140 250 205 250 Q270 250 270 215 Q270 175 235 165 Q205 155 175 165 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* sound hole */}
      <circle cx="205" cy="210" r="18" fill={dark} opacity="0.6" />
      <circle cx="205" cy="210" r="18" fill="none" stroke={wood} strokeWidth="2" />
      {/* neck */}
      <rect x="195" y="110" width="20" height="60" fill={wood} stroke={dark} strokeWidth="2" />
      {/* curved pegbox bent back */}
      <path d="M195 112 Q160 100 150 75" fill="none" stroke={wood} strokeWidth="14" strokeLinecap="round" />
      {[160, 168, 176].map((y) => (
        <circle key={y} cx="152" cy={y} r="3" fill={dark} />
      ))}
      {/* strings */}
      {[190, 198, 206, 214].map((x) => (
        <line key={x} x1={x} y1="112" x2={x} y2="245" stroke={dark} strokeWidth="1" opacity="0.5" />
      ))}
    </g>
  );
};

const AlAhsaElOasisMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FE0";
  const trunk = "#6B4A2F";
  return (
    <g>
      {/* water canal */}
      <path d="M85 235 Q205 225 320 235 L320 250 L85 250 Z" fill={water} opacity="0.6" />
      {/* palm trees */}
      {[110, 150, 190, 230, 270, 300].map((x, i) => {
        const h = 60 + (i % 3) * 10;
        return (
          <g key={x}>
            <rect x={x - 4} y={225 - h} width="8" height={h} fill={trunk} stroke={dark} strokeWidth="1.5" />
            {[0, 72, 144, 216, 288].map((deg) => (
              <path
                key={deg}
                d={`M${x} ${225 - h} Q${x + 22} ${225 - h - 6} ${x + 18} ${225 - h - 22}`}
                fill="none"
                stroke={accentColor}
                strokeWidth="5"
                strokeLinecap="round"
                transform={`rotate(${deg} ${x} ${225 - h})`}
              />
            ))}
          </g>
        );
      })}
    </g>
  );
};

const LosHombresFlorDeAsir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  const green = "#4A7A52";
  const colors = [accentColor, "#F4A300", "#8E24AA", "#F5F0E6"];
  return (
    <g>
      {/* head and face */}
      <circle cx="205" cy="165" r="30" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M188 190 Q205 200 222 190" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      {/* flower crown ring */}
      <ellipse cx="205" cy="140" rx="36" ry="14" fill={green} stroke={dark} strokeWidth="2" />
      {[
        [172, 138],
        [188, 128],
        [205, 124],
        [222, 128],
        [238, 138],
      ].map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r="9" fill={colors[i % colors.length]} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* shoulders */}
      <path d="M170 192 Q205 178 240 192 L235 250 L175 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const LaPescaDePerlasAntesDelPetroleo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C9946B";
  const water = "#2C6E8A";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* water */}
      <rect x="85" y="140" width="235" height="110" fill={water} opacity="0.4" />
      {/* dhow boat at surface */}
      <path d="M110 150 L300 150 L280 175 L130 175 Z" fill={wood} stroke={dark} strokeWidth="2.5" />
      <path d="M240 150 L260 100 L268 152 Z" fill={tint(wood, 0.4)} stroke={dark} strokeWidth="2" />
      {/* diver descending */}
      <circle cx="185" cy="205" r="12" fill={skin} />
      <path d="M173 215 Q185 209 197 215 L200 245 L170 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M175 220 Q155 225 148 240" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M195 220 Q212 228 210 245" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      {/* bubbles */}
      {[
        [210, 190],
        [220, 175],
        [215, 160],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill="#F5F0E6" opacity="0.6" />
      ))}
    </g>
  );
};

const ElBordeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sky = "#F4C87A";
  return (
    <g>
      {/* sky */}
      <rect x="85" y="80" width="235" height="90" fill={sky} opacity="0.4" />
      {/* cliff edge */}
      <path d="M85 170 L200 170 L215 140 L235 175 L320 165 L320 250 L85 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* desert floor far below */}
      <path d="M85 250 Q205 235 320 250" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      {/* distant horizon dunes */}
      <path d="M85 175 Q150 165 205 172 Q260 165 320 175" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ElSaduTejidoBeduinoAncestral: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const black = "#1A1A1A";
  const white = "#F5F0E6";
  return (
    <g>
      {/* woven fabric with geometric stripes */}
      <rect x="100" y="120" width="210" height="120" fill={white} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="100" y={120 + i * 20} width="210" height="20" fill={i % 2 === 0 ? accentColor : black} opacity={i % 3 === 2 ? 0.7 : 1} />
      ))}
      {/* zigzag motif overlay */}
      <path d="M100 180 L130 165 L160 180 L190 165 L220 180 L250 165 L280 180 L310 165" fill="none" stroke={white} strokeWidth="4" opacity="0.7" />
    </g>
  );
};

const LaCaligrafiaArabe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const parchment = "#F0E6D2";
  const gold = "#D4A017";
  return (
    <g>
      {/* parchment */}
      <rect x="110" y="110" width="190" height="130" fill={parchment} stroke={dark} strokeWidth="2.5" />
      {/* flowing calligraphic strokes */}
      <path d="M135 160 Q160 130 190 160 Q210 180 235 150 Q255 130 280 165" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M135 195 Q170 210 200 190 Q225 175 260 200 Q275 210 285 195" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* gold dots for diacritics */}
      {[
        [150, 150],
        [205, 145],
        [260, 155],
        [175, 205],
        [240, 192],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill={gold} />
      ))}
      {/* brush */}
      <path d="M290 100 L320 70 L328 78 L298 108 Z" fill="#B5651D" stroke={dark} strokeWidth="1.5" />
      <path d="M312 62 Q328 68 322 82 L305 76 Q306 65 312 62 Z" fill="#1A1A1A" />
    </g>
  );
};

export const saudiArabiaIllustrations: Record<string, IllustrationDefinition> = {
  "la-meca-y-la-kaaba-el-centro-del-islam": { component: LaMecaYLaKaabaElCentroDelIslam },
  "hegra-la-petra-secreta-de-arabia-saudita": { component: HegraLaPetraSecretaDeArabiaSaudita },
  "la-poesia-nabati-versos-del-desierto": { component: LaPoesiaNabatiVersosDelDesierto },
  "la-ceteria-tradicion-beduina-protegida": { component: LaCeteriaTradicionBeduinaProtegida },
  "el-kabsa-plato-nacional-de-arabia-saudita": { component: ElKabsaPlatoNacionalDeArabiaSaudita },
  "la-ardah-danza-de-espadas-y-poesia": { component: LaArdahDanzaDeEspadasYPoesia },
  "el-datil-alimento-y-simbolo-saudita": { component: ElDatilAlimentoYSimboloSaudita },
  "el-cuarto-vacio-un-mar-de-dunas-sin-fin": { component: ElCuartoVacioUnMarDeDunasSinFin },
  "los-concursos-de-belleza-de-camellos": { component: LosConcursosDeBellezaDeCamellos },
  "diriyah-cuna-del-estado-saudita": { component: DiriyahCunaDelEstadoSaudita },
  "el-qahwa-el-ritual-del-cafe-arabe": { component: ElQahwaElRitualDelCafeArabe },
  "el-majlis-el-salon-de-la-hospitalidad": { component: ElMajlisElSalonDeLaHospitalidad },
  "los-suqs-mercados-tradicionales": { component: LosSuqsMercadosTradicionales },
  "el-oud-la-musica-del-desierto": { component: ElOudLaMusicaDelDesierto },
  "al-ahsa-el-oasis-mas-grande-del-mundo": { component: AlAhsaElOasisMasGrandeDelMundo },
  "los-hombres-flor-de-asir": { component: LosHombresFlorDeAsir },
  "la-pesca-de-perlas-antes-del-petroleo": { component: LaPescaDePerlasAntesDelPetroleo },
  "el-borde-del-mundo": { component: ElBordeDelMundo },
  "el-sadu-tejido-beduino-ancestral": { component: ElSaduTejidoBeduinoAncestral },
  "la-caligrafia-arabe": { component: LaCaligrafiaArabe },
};
