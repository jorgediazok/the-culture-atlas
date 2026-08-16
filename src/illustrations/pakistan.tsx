import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MohenjoDaroLaCiudadConPlomeriaMilenaria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect key={`${row}-${col}`} x={130 + col * 26} y={140 + row * 16} width="24" height="14" fill={(row + col) % 2 === 0 ? accentColor : dark} stroke={shade(dark, 0.2)} strokeWidth="1" />
        ))
      )}
      <path d="M115 225 L115 200 Q115 190 130 190 L280 190 Q295 190 295 200 L295 225 Q295 240 280 240 L130 240 Q115 240 115 225 Z" fill="none" stroke={dark} strokeWidth="8" />
      <path d="M120 225 L290 225" fill="none" stroke={water} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const K2LaMontanaSalvajeMasDificilQueElEverest: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  const cloud = "#E8E4DC";
  return (
    <g>
      <polygon points="110,240 205,100 300,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="165,190 205,100 245,190" fill={snow} />
      <path d="M165 190 L185 175 L205 190 L225 172 L245 190" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      <path d="M95 200 L145 200 Q155 200 160 210 L250 210 Q255 200 265 200 L315 200" fill="none" stroke={cloud} strokeWidth="16" opacity="0.85" />
    </g>
  );
};

const ElArteDeLosCamionesPintadosAMano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#F4A300", "#C1272D", "#2E7D32"];
  return (
    <g>
      <path d="M130 235 L130 165 Q130 155 145 155 L265 155 Q280 155 280 165 L280 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="170" width="110" height="35" fill="#fff" opacity="0.85" stroke={dark} strokeWidth="2" />
      {[[175, 190], [205, 185], [235, 192]].map(([x, y], i) => (
        <g key={x as number}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 6} rx="6" ry="8" fill={colors[i % colors.length]} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      {[145, 265].map((x) => (
        <path key={x} d={`M${x} 210 Q${x} 225 ${x} 240`} fill="none" stroke="#B0B8BF" strokeWidth="4" strokeDasharray="3 4" />
      ))}
      <circle cx="150" cy="240" r="7" fill="#B0B8BF" />
      <circle cx="260" cy="240" r="7" fill="#B0B8BF" />
    </g>
  );
};

const LaMezquitaBadshahiUnaJoyaMogol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const white = "#F5F0E6";
  return (
    <g>
      <rect x="130" y="190" width="150" height="50" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="188" rx="34" ry="22" fill={white} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="160" r="4" fill={white} />
      <line x1="205" y1="166" x2="205" y2="150" stroke={dark} strokeWidth="2" />
      {[125, 285].map((x) => (
        <g key={x}>
          <rect x={x - 6} y="140" width="12" height="100" fill={accentColor} stroke={dark} strokeWidth="2" />
          <ellipse cx={x} cy="138" rx="9" ry="8" fill={white} stroke={dark} strokeWidth="2" />
          <line x1={x} y1="130" x2={x} y2="118" stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const LaMinaDeSalConUnaMezquitaAdentro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const salt = tint(accentColor, 0.5);
  return (
    <g>
      {[[130, 220, 40, 30], [180, 225, 46, 25], [235, 218, 38, 32], [275, 228, 32, 22]].map(([x, y, w, h], i) => (
        <rect key={x as number} x={(x as number) - (w as number) / 2} y={y} width={w} height={h} fill={i % 2 === 0 ? salt : accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M150 200 Q150 165 205 165 Q260 165 260 200 L260 210 L150 210 Z" fill="none" stroke={dark} strokeWidth="6" />
      <path d="M195 210 L195 165 M215 210 L215 165" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const LosKalashUnaCulturaAisladaEnLaMontana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      <path d="M145 235 Q140 170 175 145 Q205 128 235 145 Q270 170 265 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[165, 175], [185, 155], [205, 148], [225, 155], [245, 175]].map(([x, y], i) => (
        <g key={x as number}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 5} rx="5" ry="7" fill={i % 2 === 0 ? "#EC407A" : "#fff"} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      {[170, 190, 210, 230, 250].map((x) => (
        <circle key={x} cx={x} cy="225" r="6" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElQawwaliElCantoSufiQueBuscaElExtasis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="165" cy="150" rx="20" ry="24" fill={light} stroke={dark} strokeWidth="3" />
      <rect x="160" y="172" width="10" height="55" fill={dark} />
      <path d="M150 227 Q165 220 180 227" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M155 200 Q145 195 148 180" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* tabla double drum beside it */}
      <ellipse cx="255" cy="230" rx="26" ry="10" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M229 230 L229 195 Q229 185 255 185 Q281 185 281 195 L281 230" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="255" cy="185" rx="26" ry="10" fill={light} stroke={dark} strokeWidth="2.5" />
      <circle cx="255" cy="185" r="10" fill={dark} opacity="0.5" />
    </g>
  );
};

const LaCarreteraPavimentadaMasAltaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  const road = "#5C5C5C";
  return (
    <g>
      <polygon points="95,240 175,105 250,240" fill={dark} opacity="0.85" />
      <polygon points="230,240 300,130 320,240" fill={accentColor} opacity="0.7" />
      <polygon points="145,175 175,105 205,175" fill={snow} />
      <path d="M110 240 Q140 200 120 175 Q100 155 130 130 Q160 108 175 105" fill="none" stroke={road} strokeWidth="14" strokeLinecap="round" />
      <path d="M110 240 Q140 200 120 175 Q100 155 130 130 Q160 108 175 105" fill="none" stroke="#F5F0E6" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.7" />
    </g>
  );
};

const LosJardinesShalimarUnParaisoEnTerrazas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={120 + i * 20} y={150 + i * 30} width={160 - i * 40} height="24" fill={i % 2 === 0 ? accentColor : "#4A8F4E"} stroke={dark} strokeWidth="2" />
      ))}
      {[[150, 162], [255, 162], [175, 195], [235, 225]].map(([x, y]) => (
        <g key={x as number}>
          <circle cx={x} cy={y} r="8" fill={water} stroke={dark} strokeWidth="1.5" />
          <path d={`M${x} ${(y as number) - 8} L${x} ${(y as number) - 18}`} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {[[135, 240], [175, 245], [225, 242], [270, 245]].map(([x, y]) => (
        <g key={x as number}>
          {[0, 90, 180, 270].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 4} rx="4" ry="6" fill="#EC407A" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
    </g>
  );
};

const LaMayorRedDeAmbulanciasVoluntariasDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M115 235 L115 195 Q115 185 128 185 L235 185 L260 210 L280 210 Q290 210 290 220 L290 235 Z" fill="#fff" stroke={dark} strokeWidth="3" />
      <rect x="150" y="197" width="40" height="26" fill={light} />
      <path d="M164 200 L164 220 M154 210 L174 210" stroke="#C1272D" strokeWidth="5" strokeLinecap="round" />
      <rect x="235" y="200" width="30" height="24" fill={accentColor} opacity="0.5" />
      <circle cx="150" cy="240" r="16" fill="none" stroke={dark} strokeWidth="4" />
      <circle cx="255" cy="240" r="16" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M115 220 L290 220" stroke={dark} strokeWidth="1.5" opacity="0.3" />
    </g>
  );
};

export const pakistanIllustrations: Record<string, IllustrationDefinition> = {
  "mohenjo-daro-la-ciudad-con-plomeria-milenaria": { component: MohenjoDaroLaCiudadConPlomeriaMilenaria },
  "k2-la-montana-salvaje-mas-dificil-que-el-everest": { component: K2LaMontanaSalvajeMasDificilQueElEverest },
  "el-arte-de-los-camiones-pintados-a-mano": { component: ElArteDeLosCamionesPintadosAMano },
  "la-mezquita-badshahi-una-joya-mogol": { component: LaMezquitaBadshahiUnaJoyaMogol },
  "la-mina-de-sal-con-una-mezquita-adentro": { component: LaMinaDeSalConUnaMezquitaAdentro },
  "los-kalash-una-cultura-aislada-en-la-montana": { component: LosKalashUnaCulturaAisladaEnLaMontana },
  "el-qawwali-el-canto-sufi-que-busca-el-extasis": { component: ElQawwaliElCantoSufiQueBuscaElExtasis },
  "la-carretera-pavimentada-mas-alta-del-mundo": { component: LaCarreteraPavimentadaMasAltaDelMundo },
  "los-jardines-shalimar-un-paraiso-en-terrazas": { component: LosJardinesShalimarUnParaisoEnTerrazas },
  "la-mayor-red-de-ambulancias-voluntarias-del-mundo": { component: LaMayorRedDeAmbulanciasVoluntariasDelMundo },
};
