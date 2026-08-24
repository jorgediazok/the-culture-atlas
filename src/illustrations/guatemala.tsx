import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const TikalLaCiudadMayaSobreLaSelva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const temple = (x: number, h: number, scale: number) => (
    <g key={x} transform={`scale(${scale})`}>
      <polygon points={`${x - 24},${240 / scale} ${x + 24},${240 / scale} ${x + 14},${(240 - h) / scale} ${x - 14},${(240 - h) / scale}`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x={x - 8} y={(240 - h - 20) / scale} width="16" height="24" fill={dark} opacity="0.6" />
    </g>
  );
  return (
    <g>
      <path d="M90 245 Q205 225 320 245 L320 250 L90 250 Z" fill="#2E6B45" opacity="0.7" />
      {temple(150, 150, 1)}
      {temple(270, 110, 0.85)}
      <path d="M90 230 Q150 210 205 225 Q260 205 320 225 L320 240 Q260 220 205 238 Q150 222 90 240 Z" fill="#2E6B45" opacity="0.85" />
    </g>
  );
};

const AntiguaGuatemalaLaCiudadColonialEntreVolcanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="230,150 280,90 330,150" fill="#8C8C8C" stroke={dark} strokeWidth="2.5" opacity="0.8" />
      <circle cx="280" cy="98" r="6" fill="#B8B8B8" opacity="0.8" />
      <rect x="100" y="180" width="220" height="60" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[120, 170, 220, 270].map((x) => (
        <rect key={x} x={x} y="195" width="20" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      ))}
      <ellipse cx="205" cy="245" rx="120" ry="6" fill="#8C8C8C" opacity="0.5" />
    </g>
  );
};

const ElQuetzalElAveQueNoSobreviveEnjaulada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="195" cy="150" rx="30" ry="22" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <circle cx="170" cy="135" r="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="158,135 148,132 158,140" fill="#C9A227" />
      <ellipse cx="200" cy="165" rx="18" ry="12" fill="#C1272D" opacity="0.9" />
      <path d="M215 155 Q260 160 250 220 M212 158 Q250 168 238 225 M210 162 Q240 178 228 230" fill="none" stroke={dark} strokeWidth="3" opacity="0.7" />
      <line x1="170" y1="200" x2="170" y2="225" stroke={dark} strokeWidth="4" />
      <line x1="185" y1="200" x2="188" y2="225" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const ElMercadoDeChichicastenango: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C1440E", "#8B1A6E", "#C9A227"];
  return (
    <g>
      <path d="M170 240 L170 150 L240 150 L240 240 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="177" y={155 + i * 15} width="26" height="9" fill={dark} opacity="0.4" />
      ))}
      {[[110, colors[0]], [140, colors[1]], [260, colors[2]], [290, colors[3]]].map(([x, c]) => (
        <g key={x as number}>
          <rect x={x as number} y="200" width="24" height="35" fill={c as string} stroke={dark} strokeWidth="2" />
          <path d={`M${(x as number) - 4} 200 L${(x as number) + 28} 200 L${(x as number) + 20} 185 L${(x as number) + 4} 185 Z`} fill={dark} opacity="0.5" />
        </g>
      ))}
    </g>
  );
};

const ElLagoDeAtitlanYSusTresVolcanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="110,190 145,120 180,190" fill="#5C6B6E" stroke={dark} strokeWidth="2.5" />
      <polygon points="190,195 225,110 260,195" fill="#6B7A7C" stroke={dark} strokeWidth="2.5" />
      <polygon points="255,190 285,135 315,190" fill="#5C6B6E" stroke={dark} strokeWidth="2.5" />
      <path d="M90 195 Q205 180 320 195 L320 240 L90 240 Z" fill={accentColor} opacity="0.85" />
      <ellipse cx="150" cy="200" rx="14" ry="5" fill="#F5F0E6" opacity="0.6" />
      <ellipse cx="250" cy="205" rx="14" ry="5" fill="#F5F0E6" opacity="0.6" />
    </g>
  );
};

const ElHuipilElTextilQueIdentificaCadaPueblo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C1440E", "#C9A227", "#1F5C3A"];
  return (
    <g>
      <path d="M140 130 L270 130 L270 240 L140 240 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M140 130 L110 155 L130 165 L140 150 Z M270 130 L300 155 L280 165 L270 150 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          {[0, 1, 2, 3, 4].map((col) => (
            <rect key={col} x={150 + col * 24} y={150 + row * 18} width="14" height="10" fill={colors[(row + col) % colors.length]} opacity="0.85" />
          ))}
        </g>
      ))}
    </g>
  );
};

const ElPopolVuhElLibroSagradoKiche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 160 L205 150 L205 235 L110 245 Z" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M300 160 L205 150 L205 235 L300 245 Z" fill="#DCCFA8" stroke={dark} strokeWidth="3" />
      {[172, 192, 212].map((y) => (
        <g key={y}>
          <rect x="125" y={y} width="10" height="10" fill={accentColor} opacity="0.8" transform={`translate(0 ${(y - 172) * -0.08})`} />
          <rect x="145" y={y - 3} width="10" height="10" fill={accentColor} opacity="0.6" />
          <rect x="245" y={y - 2} width="10" height="10" fill={accentColor} opacity="0.6" />
          <rect x="265" y={y} width="10" height="10" fill={accentColor} opacity="0.8" />
        </g>
      ))}
      <line x1="205" y1="150" x2="205" y2="235" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const LasAlfombrasDeAserrinDeSemanaSanta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C1440E", "#C9A227", "#1F5C3A", "#8B1A6E"];
  return (
    <g>
      <rect x="100" y="170" width="210" height="60" fill="#5C3A21" opacity="0.15" />
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse key={i} cx={130 + i * 40} cy="200" rx="16" ry="24" fill={colors[i % colors.length]} opacity="0.85" />
      ))}
      <path d="M100 170 L310 170 M100 230 L310 230" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const LaMarimbaElInstrumentoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bars = [100, 120, 138, 155, 171, 186, 200, 213, 225, 236];
  return (
    <g>
      <rect x="90" y="215" width="230" height="10" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      {bars.map((x, i) => (
        <rect key={x} x={x + 90} y={195 - i * 1.5} width="16" height="8" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      {bars.slice(0, 6).map((x) => (
        <rect key={"r" + x} x={x + 96} y="203" width="4" height="30" fill="#8C8C8C" opacity="0.6" />
      ))}
    </g>
  );
};

const ElJadeLaPiedraSagradaDeLosMayas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M160 240 L160 150 Q160 130 205 125 Q250 130 250 150 L250 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="150" width="8" height="20" fill="#F5F0E6" opacity="0.7" />
      <rect x="217" y="150" width="8" height="20" fill="#F5F0E6" opacity="0.7" />
      <path d="M195 185 Q205 200 215 185" fill="none" stroke="#F5F0E6" strokeWidth="3" />
      <path d="M175 145 Q205 120 235 145" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      <circle cx="180" cy="200" r="8" fill="#C9A227" stroke={dark} strokeWidth="1.5" />
      <circle cx="230" cy="200" r="8" fill="#C9A227" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

// Two rings of 16 points, 22.5° apart, centered on (205,165) — radii 82 (outer, glyph
// tick marks) and 60 (inner, spoke endpoints) — precomputed offline, not at render time.
const CALENDAR_OUTER_RING: [number, number][] = [
  [287, 165], [280.76, 196.38], [262.98, 222.98], [236.38, 240.76], [205, 247],
  [173.62, 240.76], [147.02, 222.98], [129.24, 196.38], [123, 165], [129.24, 133.62],
  [147.02, 107.02], [173.62, 89.24], [205, 83], [236.38, 89.24], [262.98, 107.02], [280.76, 133.62],
];
const CALENDAR_INNER_RING: [number, number][] = [
  [265, 165], [260.43, 187.96], [247.43, 207.43], [227.96, 220.43], [205, 225],
  [182.04, 220.43], [162.57, 207.43], [149.57, 187.96], [145, 165], [149.57, 142.04],
  [162.57, 122.57], [182.04, 109.57], [205, 105], [227.96, 109.57], [247.43, 122.57], [260.43, 142.04],
];

const ElCalendarioMayaDeCuentaLarga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="165" r="95" fill={dark} opacity="0.2" />
      <circle cx="205" cy="165" r="88" fill={accentColor} stroke={dark} strokeWidth="4" />
      {CALENDAR_OUTER_RING.map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={CALENDAR_INNER_RING[i][0]} y2={CALENDAR_INNER_RING[i][1]} stroke={dark} strokeWidth="2" opacity="0.55" />
      ))}
      {CALENDAR_OUTER_RING.map(([x, y], i) => (
        <rect key={"g" + i} x={x - 5} y={y - 5} width="10" height="10" fill={dark} opacity="0.85" />
      ))}
      <circle cx="205" cy="165" r="50" fill={dark} />
      <circle cx="205" cy="165" r="26" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M191 155 L205 143 L219 155 M191 175 L205 187 L219 175" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const ElRabinalAchiElTeatroMasAntiguo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (cx: number, costume: string, mirror: boolean) => {
    const armStart = mirror ? cx + 20 : cx - 20;
    const armMidX = mirror ? cx - 10 : cx + 10;
    const armEndX = mirror ? cx - 45 : cx + 45;
    return (
      <g key={cx}>
        <polygon points={`${cx - 20},150 ${cx + 20},150 ${cx + 35},245 ${cx - 35},245`} fill={costume} stroke={dark} strokeWidth="3" />
        <path d={`M${armStart} 172 Q${armMidX} 195 ${armEndX} 210`} fill="none" stroke={costume} strokeWidth="10" strokeLinecap="round" />
        <rect x={cx - 6} y="110" width="12" height="35" fill={dark} />
        <polygon points={`${cx - 4},128 ${cx - 32},90 ${cx - 16},126`} fill="#C9A227" stroke={dark} strokeWidth="1.5" />
        <polygon points={`${cx - 4},128 ${cx},82 ${cx + 4},128`} fill="#2E8B6E" stroke={dark} strokeWidth="1.5" />
        <polygon points={`${cx + 16},126 ${cx + 32},90 ${cx + 4},128`} fill="#C1440E" stroke={dark} strokeWidth="1.5" />
        <circle cx={cx} cy="145" r="22" fill="#D9A066" stroke={dark} strokeWidth="2.5" />
        <line x1={cx - 8} y1="148" x2={cx + 8} y2="148" stroke={dark} strokeWidth="2" />
      </g>
    );
  };
  return (
    <g>
      <ellipse cx="205" cy="248" rx="140" ry="8" fill={dark} opacity="0.15" />
      {dancer(150, accentColor, false)}
      {dancer(260, "#C9A227", true)}
      <circle cx="205" cy="210" r="20" fill="#5C3A21" stroke={dark} strokeWidth="3" />
      <path d="M195 210 L215 210 M205 200 L205 220" stroke="#C9A227" strokeWidth="2.5" />
    </g>
  );
};

const ElPepianElPlatoNacionalDeGuatemala: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="238" rx="90" ry="10" fill={dark} opacity="0.15" />
      <path d="M120 175 Q120 235 205 235 Q290 235 290 175 L280 165 L130 165 Z" fill="#D9C7A3" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="168" rx="75" ry="16" fill="#D9C7A3" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="168" rx="62" ry="12" fill={accentColor} />
      <circle cx="175" cy="164" r="11" fill="#E8C89A" stroke={dark} strokeWidth="1.5" />
      <circle cx="205" cy="170" r="10" fill="#E8C89A" stroke={dark} strokeWidth="1.5" />
      <rect x="222" y="160" width="16" height="14" fill="#4E7A3D" opacity="0.9" />
      <circle cx="188" cy="176" r="8" fill="#C9A227" opacity="0.9" />
      <path d="M180 150 Q184 130 178 118 M205 148 Q207 126 200 112 M228 152 Q233 132 228 120" fill="none" stroke="#F5F0E6" strokeWidth="3" opacity="0.7" strokeLinecap="round" />
      <ellipse cx="298" cy="225" rx="20" ry="6" fill="#F0E4C8" stroke={dark} strokeWidth="2" />
      <ellipse cx="298" cy="215" rx="20" ry="6" fill="#F5EBD2" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElCafeDeAlturaDeLasTierrasVolcanicas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="243,165 283,105 318,165" fill="#6B7A7C" stroke={dark} strokeWidth="2.5" opacity="0.85" />
      <circle cx="283" cy="112" r="7" fill="#D8D8D8" opacity="0.7" />
      <path d="M90 235 Q205 215 320 235 L320 250 L90 250 Z" fill="#4F7942" opacity="0.5" />
      <path d="M105 235 Q160 190 210 200 Q255 208 272 150" fill="none" stroke="#4E3620" strokeWidth="5" strokeLinecap="round" />
      <polygon points="140,205 118,188 128,182 152,196" fill="#3D8361" stroke={dark} strokeWidth="1.5" />
      <polygon points="205,199 183,178 195,172 217,192" fill="#3D8361" stroke={dark} strokeWidth="1.5" />
      <polygon points="262,163 244,140 254,133 274,155" fill="#3D8361" stroke={dark} strokeWidth="1.5" />
      <line x1="150" y1="212" x2="158" y2="222" stroke="#4E3620" strokeWidth="2" />
      <circle cx="160" cy="225" r="8" fill="#A61C1C" stroke={dark} strokeWidth="1.5" />
      <circle cx="172" cy="230" r="7" fill="#C1272D" stroke={dark} strokeWidth="1.5" />
      <line x1="222" y1="204" x2="230" y2="215" stroke="#4E3620" strokeWidth="2" />
      <circle cx="233" cy="218" r="8" fill="#A61C1C" stroke={dark} strokeWidth="1.5" />
      <circle cx="245" cy="222" r="7" fill="#C1272D" stroke={dark} strokeWidth="1.5" />
      <line x1="266" y1="155" x2="270" y2="168" stroke="#4E3620" strokeWidth="2" />
      <circle cx="272" cy="172" r="8" fill="#A61C1C" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaCeibaElArbolSagradoMaya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="120" ry="7" fill={dark} opacity="0.15" />
      <ellipse cx="205" cy="120" rx="95" ry="42" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.9" />
      <ellipse cx="205" cy="112" rx="70" ry="28" fill={accentColor} opacity="0.6" />
      <polygon points="183,245 227,245 213,140 197,140" fill="#8C6239" stroke={dark} strokeWidth="3" />
      <polygon points="135,248 190,248 205,232" fill="#8C6239" stroke={dark} strokeWidth="2.5" />
      <polygon points="275,248 220,248 205,230" fill="#8C6239" stroke={dark} strokeWidth="2.5" />
      <polygon points="193.67,165 175,168 192.07,177" fill={dark} />
      <polygon points="218.07,178 236,181 219.67,190" fill={dark} />
      <polygon points="188.6,203 170,206 187,215" fill={dark} />
      <polygon points="222.07,208 240,211 223.67,220" fill={dark} />
      <polygon points="185.67,225 168,228 184.07,237" fill={dark} />
    </g>
  );
};

export const guatemalaIllustrations: Record<string, IllustrationDefinition> = {
  "tikal-la-ciudad-maya-sobre-la-selva": { component: TikalLaCiudadMayaSobreLaSelva },
  "antigua-guatemala-la-ciudad-colonial-entre-volcanes": { component: AntiguaGuatemalaLaCiudadColonialEntreVolcanes },
  "el-quetzal-el-ave-que-no-sobrevive-enjaulada": { component: ElQuetzalElAveQueNoSobreviveEnjaulada },
  "el-mercado-de-chichicastenango": { component: ElMercadoDeChichicastenango },
  "el-lago-de-atitlan-y-sus-tres-volcanes": { component: ElLagoDeAtitlanYSusTresVolcanes },
  "el-huipil-el-textil-que-identifica-cada-pueblo": { component: ElHuipilElTextilQueIdentificaCadaPueblo },
  "el-popol-vuh-el-libro-sagrado-kiche": { component: ElPopolVuhElLibroSagradoKiche },
  "las-alfombras-de-aserrin-de-semana-santa": { component: LasAlfombrasDeAserrinDeSemanaSanta },
  "la-marimba-el-instrumento-nacional": { component: LaMarimbaElInstrumentoNacional },
  "el-jade-la-piedra-sagrada-de-los-mayas": { component: ElJadeLaPiedraSagradaDeLosMayas },
  "el-calendario-maya-de-cuenta-larga": { component: ElCalendarioMayaDeCuentaLarga },
  "el-rabinal-achi-el-teatro-mas-antiguo": { component: ElRabinalAchiElTeatroMasAntiguo },
  "el-pepian-el-plato-nacional-de-guatemala": { component: ElPepianElPlatoNacionalDeGuatemala },
  "el-cafe-de-altura-de-las-tierras-volcanicas": { component: ElCafeDeAlturaDeLasTierrasVolcanicas },
  "la-ceiba-el-arbol-sagrado-maya": { component: LaCeibaElArbolSagradoMaya },
};
