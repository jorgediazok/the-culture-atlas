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
};
