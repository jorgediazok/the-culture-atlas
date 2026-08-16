import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const KumbhMelaLaMayorReunionHumana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 225 Q205 210 320 225 L320 250 L90 250 Z" fill={water} />
      {[[105, 210], [125, 215], [145, 205], [165, 212], [185, 200], [205, 208], [225, 198], [245, 210], [265, 202], [285, 212], [300, 205]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 16} r="6" fill={dark} />
          <path d={`M${(x as number) - 6} ${y} Q${x} ${(y as number) - 12} ${(x as number) + 6} ${y} L${(x as number) + 4} ${(y as number) + 20} L${(x as number) - 4} ${(y as number) + 20} Z`} fill={i % 2 === 0 ? accentColor : dark} />
        </g>
      ))}
      <path d="M90 175 Q205 160 320 175" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" />
    </g>
  );
};

const ElCeroElRegaloMatematicoDeLaIndia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#B8A99A";
  return (
    <g>
      <circle cx="150" cy="160" r="34" fill="none" stroke={accentColor} strokeWidth="9" />
      <rect x="215" y="130" width="90" height="105" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2.5" />
      {[[240, 165], [278, 165], [240, 200], [278, 200]].map(([x, y], i) => (
        <text key={x as number} x={x} y={y} fontSize="26" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">{["1", "2", "3", "0"][i]}</text>
      ))}
      <path d="M100 235 Q205 220 320 235" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const LosDabbawalasQueNuncaSeEquivocan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <ellipse cx="175" cy={230 - i * 26} rx="34" ry="10" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="2" />
          <rect x="141" y={220 - i * 26} width="68" height="12" fill={i % 2 === 0 ? light : accentColor} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <path d="M175 148 L175 130" stroke={dark} strokeWidth="3" />
      <path d="M160 130 Q175 118 190 130" fill="none" stroke={dark} strokeWidth="3" />
      {/* bicycle beside it */}
      <circle cx="255" cy="225" r="22" fill="none" stroke={dark} strokeWidth="4" />
      <circle cx="300" cy="225" r="22" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M255 225 L280 190 L300 225 M280 190 L270 225 M280 190 L290 165 L305 165" fill="none" stroke={dark} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="255" y1="225" x2="242" y2="200" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const VaranasiUnaDeLasCiudadesMasAntiguas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const flame = "#F4A300";
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={150 - i * 8} y={150 + i * 18} width={110 + i * 16} height="16" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <path d="M95 240 Q205 228 320 240 L320 250 L95 250 Z" fill={water} />
      {[[130, 245], [170, 248], [230, 246], [280, 249]].map(([x, y]) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="10" ry="4" fill="#F5EFE0" stroke={dark} strokeWidth="1.2" />
          <path d={`M${x} ${(y as number) - 4} Q${(x as number) - 3} ${(y as number) - 12} ${x} ${(y as number) - 18}`} fill="none" stroke={flame} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const ElJuegoQueSeVolvioElAjedrezDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <rect x="115" y="105" width="180" height="140" fill={light} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (row + col) % 2 === 0 && (
          <rect key={`${row}-${col}`} x={115 + col * 30} y={105 + row * 28} width="30" height="28" fill={accentColor} />
        ))
      )}
      {/* elephant piece */}
      <path d="M175 195 Q170 165 190 155 Q200 150 205 158 Q212 150 218 158 Q225 150 222 165 Q235 172 230 195 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      {/* chariot piece */}
      <path d="M250 195 L280 195 L275 165 L255 165 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      <rect x="252" y="155" width="26" height="10" fill={dark} />
    </g>
  );
};

const LosPozosEscalonadosTalladosBajoTierra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <path d={`M${105 + i * 18} ${100 + i * 4} L${300 - i * 18} ${100 + i * 4} L${290 - i * 18} ${120 + i * 4} L${115 + i * 18} ${120 + i * 4} Z`} fill={i % 2 === 0 ? accentColor : dark} stroke={shade(dark, 0.2)} strokeWidth="1" />
        </g>
      ))}
      <ellipse cx="205" cy="228" rx="35" ry="14" fill={water} />
    </g>
  );
};

const ElArbolUnicoQueParaceUnBosque: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#2E7D32";
  return (
    <g>
      <path d="M100 235 Q210 220 310 235" stroke={dark} strokeWidth="2" opacity="0.4" fill="none" />
      {[110, 140, 170, 205, 240, 270, 300].map((x, i) => (
        <line key={x} x1={x} y1="235" x2={x - 4 + (i % 2) * 8} y2={185 - (i % 3) * 8} stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
      ))}
      <path d="M95 190 Q120 130 205 125 Q290 130 315 190 Q290 175 205 172 Q120 175 95 190 Z" fill={green} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const LaMisionAMarteMasBarataQueUnaPelicula: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mars = "#C1440E";
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="245" cy="180" r="55" fill={mars} />
      <circle cx="225" cy="160" r="10" fill={shade(mars, 0.25)} opacity="0.6" />
      <circle cx="260" cy="200" r="14" fill={shade(mars, 0.25)} opacity="0.6" />
      {/* small probe */}
      <rect x="110" y="155" width="34" height="22" fill={light} stroke={dark} strokeWidth="2.5" />
      <line x1="95" y1="145" x2="120" y2="155" stroke={dark} strokeWidth="3" />
      <line x1="95" y1="185" x2="120" y2="177" stroke={dark} strokeWidth="3" />
      <rect x="140" y="130" width="18" height="18" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(20 149 139)" />
      <path d="M110 178 L100 200 M144 178 L152 200" stroke={dark} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const VeintidosLenguasOficialesSinUnaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA"];
  const letters = ["अ", "அ", "ব", "اردو"];
  return (
    <g>
      {[[145, 200, 0], [205, 175, 1], [265, 205, 2], [175, 145, 3]].map(([x, y, i], idx) => (
        <g key={idx}>
          <path d={`M${(x as number) - 40} ${(y as number) - 24} Q${(x as number) - 44} ${y} ${(x as number) - 20} ${y} L${(x as number) - 12} ${y} L${(x as number) - 18} ${(y as number) + 14} L${x} ${y} L${(x as number) + 40} ${y} Q${(x as number) + 44} ${y} ${(x as number) + 44} ${(y as number) - 24} Q${(x as number) + 44} ${(y as number) - 48} ${(x as number) + 40} ${(y as number) - 48} L${(x as number) - 40} ${(y as number) - 48} Q${(x as number) - 44} ${(y as number) - 48} ${(x as number) - 40} ${(y as number) - 24} Z`} fill={colors[i as number]} stroke={dark} strokeWidth="2" />
          <text x={x as number} y={(y as number) - 20} fontSize="22" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="serif">{letters[i as number]}</text>
        </g>
      ))}
    </g>
  );
};

const LasManosQueHablanEnLaDanzaClasica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <path d="M150 220 Q145 190 165 175 Q175 168 185 175 L190 205 Q192 218 180 222 Q160 226 150 220 Z" fill={skin} stroke={dark} strokeWidth="2.5" />
      {[[165, 172, -60], [178, 168, -30], [190, 168, -5]].map(([x, y, deg]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="4" ry="16" fill={skin} stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} ${x} ${y})`} />
      ))}
      <path d="M260 220 Q265 190 245 175 Q235 168 225 175 L220 205 Q218 218 230 222 Q250 226 260 220 Z" fill={skin} stroke={dark} strokeWidth="2.5" />
      {[[245, 172, 60], [232, 168, 30], [220, 168, 5]].map(([x, y, deg]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="4" ry="16" fill={skin} stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} ${x} ${y})`} />
      ))}
      <path d="M190 195 Q205 205 220 195" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

export const indiaIllustrations: Record<string, IllustrationDefinition> = {
  "kumbh-mela-la-mayor-reunion-humana": { component: KumbhMelaLaMayorReunionHumana },
  "el-cero-el-regalo-matematico-de-la-india": { component: ElCeroElRegaloMatematicoDeLaIndia },
  "los-dabbawalas-que-nunca-se-equivocan": { component: LosDabbawalasQueNuncaSeEquivocan },
  "varanasi-una-de-las-ciudades-mas-antiguas": { component: VaranasiUnaDeLasCiudadesMasAntiguas },
  "el-juego-que-se-volvio-el-ajedrez-del-mundo": { component: ElJuegoQueSeVolvioElAjedrezDelMundo },
  "los-pozos-escalonados-tallados-bajo-tierra": { component: LosPozosEscalonadosTalladosBajoTierra },
  "el-arbol-unico-que-parece-un-bosque": { component: ElArbolUnicoQueParaceUnBosque },
  "la-mision-a-marte-mas-barata-que-una-pelicula": { component: LaMisionAMarteMasBarataQueUnaPelicula },
  "veintidos-lenguas-oficiales-sin-una-nacional": { component: VeintidosLenguasOficialesSinUnaNacional },
  "las-manos-que-hablan-en-la-danza-clasica": { component: LasManosQueHablanEnLaDanzaClasica },
};
