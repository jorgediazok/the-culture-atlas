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
};
