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

const ElCriquetLaPasionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#C9A876";
  const ballRed = "#8B1A1A";
  return (
    <g>
      {/* pitch ground */}
      <rect x="85" y="225" width="235" height="20" fill={accentColor} opacity="0.35" />
      {/* three stumps */}
      {[195, 210, 225].map((x) => (
        <rect key={x} x={x} y="150" width="6" height="80" fill={wood} stroke={dark} strokeWidth="1.5" />
      ))}
      <rect x="192" y="146" width="18" height="6" fill={wood} stroke={dark} strokeWidth="1.5" />
      <rect x="212" y="146" width="18" height="6" fill={wood} stroke={dark} strokeWidth="1.5" />
      {/* bat leaning */}
      <path d="M130 230 L155 130 L168 133 L145 233 Z" fill={wood} stroke={dark} strokeWidth="2" />
      <rect x="122" y="225" width="20" height="35" rx="6" fill={dark} />
      {/* ball */}
      <circle cx="270" cy="205" r="16" fill={ballRed} stroke={shade(ballRed, 0.3)} strokeWidth="2" />
      <path d="M258 195 Q270 205 258 215 M282 195 Q270 205 282 215" fill="none" stroke="#F5F0E6" strokeWidth="1.5" />
    </g>
  );
};

const HunzaElValleDeLaLongevidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const snow = "#F5F0E6";
  const mountain = "#78909C";
  const blossom = "#F4C6D8";
  return (
    <g>
      {/* mountains */}
      <polygon points="85,180 150,110 200,180" fill={mountain} stroke={dark} strokeWidth="2" />
      <polygon points="105,180 150,120 175,180" fill={snow} opacity="0.85" />
      <polygon points="220,180 280,100 320,180" fill={mountain} stroke={dark} strokeWidth="2" />
      <polygon points="245,180 280,112 305,180" fill={snow} opacity="0.85" />
      {/* valley floor */}
      <rect x="85" y="178" width="235" height="30" fill={accentColor} opacity="0.3" />
      {/* apricot blossom trees */}
      {[130, 175, 230, 270].map((x) => (
        <g key={x}>
          <line x1={x} y1="208" x2={x} y2="185" stroke="#6B4A2F" strokeWidth="5" />
          <circle cx={x - 8} cy="180" r="11" fill={blossom} stroke={dark} strokeWidth="1.5" />
          <circle cx={x + 8} cy="178" r="11" fill={blossom} stroke={dark} strokeWidth="1.5" />
          <circle cx={x} cy="170" r="11" fill={blossom} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const ElPoloDeShandurEnElTechoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  const horse1 = "#6B4A2F";
  const horse2 = "#B0A08A";
  return (
    <g>
      {/* ground */}
      <rect x="85" y="230" width="235" height="18" fill={accentColor} opacity="0.3" />
      {/* horse + rider 1 */}
      <path d="M120 210 Q100 195 108 175 Q120 165 140 175 Q160 170 165 195 L160 225 L118 225 Z" fill={horse1} stroke={dark} strokeWidth="2.5" />
      <line x1="120" y1="220" x2="115" y2="245" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="150" y1="222" x2="155" y2="245" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <circle cx="138" cy="165" r="10" fill={skin} />
      <path d="M128 172 Q138 168 148 172 L146 195 L130 195 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M148 178 L175 160" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <line x1="175" y1="160" x2="195" y2="205" stroke="#3E2A1A" strokeWidth="3" strokeLinecap="round" />
      {/* horse + rider 2 */}
      <path d="M260 210 Q280 195 272 175 Q260 165 240 175 Q220 170 215 195 L220 225 L262 225 Z" fill={horse2} stroke={dark} strokeWidth="2.5" />
      <line x1="260" y1="220" x2="265" y2="245" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="230" y1="222" x2="225" y2="245" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <circle cx="242" cy="165" r="10" fill={skin} />
      <path d="M232 172 Q242 168 252 172 L250 195 L234 195 Z" fill="#8E24AA" stroke={dark} strokeWidth="2" />
      <path d="M232 178 L205 160" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <line x1="205" y1="160" x2="185" y2="205" stroke="#3E2A1A" strokeWidth="3" strokeLinecap="round" />
      {/* ball */}
      <circle cx="190" cy="215" r="6" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElAjrakElTextilSindhi: IllustrationComponent = () => {
  const indigo = "#26428B";
  const crimson = "#A0332B";
  const cream = "#F0E6D2";
  const dark = shade(indigo, 0.4);
  return (
    <g>
      {/* fabric */}
      <rect x="100" y="120" width="210" height="120" fill={cream} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="100" y={128 + i * 22} width="210" height="14" fill={i % 2 === 0 ? indigo : crimson} opacity="0.9" />
      ))}
      {/* geometric motif band */}
      <path d="M100 200 L125 185 L150 200 L175 185 L200 200 L225 185 L250 200 L275 185 L300 200 L310 195" fill="none" stroke={cream} strokeWidth="4" opacity="0.8" />
      {/* small diamond motifs */}
      {[130, 175, 220, 265].map((x) => (
        <polygon key={x} points={`${x},140 ${x + 10},150 ${x},160 ${x - 10},150`} fill={cream} stroke={dark} strokeWidth="1" opacity="0.85" />
      ))}
    </g>
  );
};

const PeshawarYElPasoJaiber: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rock = "#8A7B5C";
  return (
    <g>
      {/* rocky gorge walls */}
      <polygon points="85,250 85,120 140,160 140,250" fill={rock} stroke={dark} strokeWidth="2.5" />
      <polygon points="320,250 320,110 265,155 265,250" fill={shade(rock, 0.2)} stroke={dark} strokeWidth="2.5" />
      {/* caravan path */}
      <path d="M140 235 Q205 225 265 235" fill="none" stroke={dark} strokeWidth="3" opacity="0.4" />
      {/* camel caravan */}
      {[170, 205, 240].map((x, i) => (
        <g key={x} opacity={1 - i * 0.15}>
          <ellipse cx={x} cy="215" rx="20" ry="12" fill={accentColor} stroke={dark} strokeWidth="2" />
          <path d={`M${x - 14} 208 Q${x - 24} 195 ${x - 16} 185`} fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
          <line x1={x - 10} y1="225" x2={x - 12} y2="242" stroke={dark} strokeWidth="5" strokeLinecap="round" />
          <line x1={x + 10} y1="225" x2={x + 12} y2="242" stroke={dark} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const ElMangoLaFrutaNacional: IllustrationComponent = () => {
  const yellow = "#F5C518";
  const red = "#D9481F";
  const green = "#4A7A52";
  const dark = shade(yellow, 0.4);
  const basket = "#8B5A2B";
  return (
    <g>
      {/* basket */}
      <path d="M110 235 L300 235 L285 200 L125 200 Z" fill={basket} stroke={shade(basket, 0.3)} strokeWidth="2.5" />
      {[130, 160, 190, 220, 250, 280].map((x) => (
        <line key={x} x1={x} y1="200" x2={x - 4} y2="235" stroke={shade(basket, 0.3)} strokeWidth="1.5" opacity="0.6" />
      ))}
      {/* mangoes piled */}
      {[
        [150, 190, yellow],
        [190, 180, red],
        [230, 190, yellow],
        [170, 165, red],
        [210, 160, yellow],
        [250, 175, red],
      ].map(([x, y, c], i) => (
        <ellipse
          key={i}
          cx={x as number}
          cy={y as number}
          rx="22"
          ry="17"
          fill={c as string}
          stroke={dark}
          strokeWidth="2"
          transform={`rotate(${((i * 29) % 40) - 20} ${x} ${y})`}
        />
      ))}
      {/* leaf */}
      <path d="M175 150 Q160 135 175 120 Q190 135 175 150 Z" fill={green} stroke={shade(green, 0.3)} strokeWidth="1.5" />
    </g>
  );
};

const LaMezquitaFaisalUnIconoModerno: IllustrationComponent = () => {
  const concrete = "#B0BEC5";
  const dark = shade(concrete, 0.4);
  return (
    <g>
      {/* triangular tent-shaped roof */}
      <polygon points="205,95 130,225 280,225" fill={concrete} stroke={dark} strokeWidth="3" />
      <polygon points="205,95 165,225 245,225" fill={shade(concrete, 0.15)} opacity="0.6" />
      {/* four angular minarets */}
      {[95, 150, 260, 315].map((x) => (
        <g key={x}>
          <rect x={x - 6} y="130" width="12" height="105" fill={concrete} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 8},130 ${x},108 ${x + 8},130`} fill={dark} />
        </g>
      ))}
      {/* ground */}
      <rect x="85" y="225" width="235" height="14" fill={dark} opacity="0.5" />
    </g>
  );
};

const ElLagoAttabadTurquesaEnLasMontanas: IllustrationComponent = () => {
  const water = "#00ACC1";
  const waterLight = "#5FD3E0";
  const mountain = "#6B7A6F";
  const dark = shade(mountain, 0.3);
  return (
    <g>
      {/* mountains framing the lake */}
      <polygon points="85,200 140,120 195,200" fill={mountain} stroke={dark} strokeWidth="2" />
      <polygon points="215,200 270,105 320,200" fill={shade(mountain, 0.15)} stroke={dark} strokeWidth="2" />
      {/* lake */}
      <path d="M85 200 Q205 185 320 200 L320 250 L85 250 Z" fill={water} stroke={shade(water, 0.3)} strokeWidth="2" />
      <path d="M100 210 Q205 198 305 210" fill="none" stroke={waterLight} strokeWidth="6" opacity="0.6" />
      <path d="M100 225 Q205 215 305 225" fill="none" stroke={waterLight} strokeWidth="4" opacity="0.4" />
    </g>
  );
};

const ElBasantFestivalDeCometas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA"];
  return (
    <g>
      {/* rooftops */}
      <rect x="85" y="220" width="100" height="30" fill="#B0A08A" stroke={dark} strokeWidth="2" />
      <rect x="220" y="215" width="100" height="35" fill="#8B7355" stroke={dark} strokeWidth="2" />
      {/* kites */}
      {[
        [140, 120, 0],
        [210, 90, 1],
        [270, 140, 2],
        [100, 160, 3],
      ].map(([x, y, ci]) => (
        <g key={x as number}>
          <polygon
            points={`${x},${(y as number) - 22} ${(x as number) + 16},${y} ${x},${(y as number) + 22} ${(x as number) - 16},${y}`}
            fill={colors[ci as number]}
            stroke={dark}
            strokeWidth="2"
          />
          <path d={`M${x} ${(y as number) + 22} Q${(x as number) + 10} ${(y as number) + 50} ${x} ${(y as number) + 80}`} fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
        </g>
      ))}
    </g>
  );
};

const MuhammadAliJinnahPadreDeLaNacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  const cap = "#1A1A1A";
  return (
    <g>
      {/* head */}
      <circle cx="200" cy="150" r="26" fill={skin} stroke={dark} strokeWidth="2.5" />
      {/* traditional cap */}
      <path d="M176 138 Q200 115 224 138 L224 128 Q200 108 176 128 Z" fill={cap} stroke={dark} strokeWidth="2" />
      {/* formal suit shoulders */}
      <path d="M165 174 Q200 161 235 174 L245 240 L155 240 Z" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      {/* collar and tie */}
      <path d="M188 178 L200 195 L212 178" fill="none" stroke="#F5F0E6" strokeWidth="6" />
      <path d="M197 195 L203 195 L206 225 L200 232 L194 225 Z" fill={accentColor} />
      {/* document and pen beside him */}
      <rect x="255" y="205" width="45" height="32" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {[213, 221, 229].map((y) => (
        <line key={y} x1="262" y1={y} x2="293" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      <path d="M300 200 L320 175 L326 181 L306 206 Z" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
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
  "el-criquet-la-pasion-nacional": { component: ElCriquetLaPasionNacional },
  "hunza-el-valle-de-la-longevidad": { component: HunzaElValleDeLaLongevidad },
  "el-polo-de-shandur-en-el-techo-del-mundo": { component: ElPoloDeShandurEnElTechoDelMundo },
  "el-ajrak-el-textil-sindhi": { component: ElAjrakElTextilSindhi },
  "peshawar-y-el-paso-jaiber": { component: PeshawarYElPasoJaiber },
  "el-mango-la-fruta-nacional": { component: ElMangoLaFrutaNacional },
  "la-mezquita-faisal-un-icono-moderno": { component: LaMezquitaFaisalUnIconoModerno },
  "el-lago-attabad-turquesa-en-las-montanas": { component: ElLagoAttabadTurquesaEnLasMontanas },
  "el-basant-festival-de-cometas": { component: ElBasantFestivalDeCometas },
  "muhammad-ali-jinnah-padre-de-la-nacion": { component: MuhammadAliJinnahPadreDeLaNacion },
};
