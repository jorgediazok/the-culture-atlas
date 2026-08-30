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
        <text key={`${x}-${y}`} x={x} y={y} fontSize="26" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">{["1", "2", "3", "0"][i]}</text>
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

const ElTajMahalMonumentoAlAmor: IllustrationComponent = () => {
  const marble = "#F5F0E6";
  const dark = shade(marble, 0.35);
  const gold = "#D4A017";
  const water = "#8BAFC4";
  return (
    <g>
      {/* reflecting pool */}
      <path d="M95 240 Q205 228 315 240 L315 250 L95 250 Z" fill={water} opacity="0.6" />
      {/* four minarets */}
      {[110, 300].map((x) => (
        <g key={x}>
          <rect x={x - 7} y="140" width="14" height="95" fill={marble} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 9},140 ${x},122 ${x + 9},140`} fill={gold} />
        </g>
      ))}
      {[155, 255].map((x) => (
        <g key={x}>
          <rect x={x - 6} y="128" width="12" height="107" fill={marble} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 8},128 ${x},110 ${x + 8},128`} fill={gold} />
        </g>
      ))}
      {/* main building */}
      <rect x="150" y="165" width="110" height="70" fill={marble} stroke={dark} strokeWidth="2.5" />
      <path d="M175 165 Q175 130 205 130 Q235 130 235 165 Z" fill={marble} stroke={dark} strokeWidth="2.5" />
      {/* central dome */}
      <ellipse cx="205" cy="120" rx="38" ry="34" fill={marble} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="88" r="6" fill={gold} />
      <line x1="205" y1="82" x2="205" y2="70" stroke={gold} strokeWidth="3" />
      {/* archway */}
      <path d="M195 235 L195 200 Q195 185 205 185 Q215 185 215 200 L215 235 Z" fill={dark} opacity="0.3" />
    </g>
  );
};

const ElYogaElRegaloEspiritualDeIndia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  return (
    <g>
      {/* subtle aura rays */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg) => (
        <line key={deg} x1="205" y1="150" x2="205" y2="95" stroke={accentColor} strokeWidth="2" opacity="0.25" transform={`rotate(${deg} 205 150)`} />
      ))}
      {/* head */}
      <circle cx="205" cy="130" r="18" fill={skin} />
      {/* seated torso */}
      <path d="M182 145 Q205 136 228 145 L232 190 Q205 200 178 190 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* crossed legs */}
      <path d="M178 188 Q150 195 150 210 Q175 222 205 210 Q235 222 260 210 Q260 195 232 188 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* arms resting on knees */}
      <path d="M182 155 Q160 175 165 205" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M228 155 Q250 175 245 205" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const BollywoodLaFabricaDeCineMasGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const gold = "#D4A017";
  return (
    <g>
      {/* marquee with lights */}
      <rect x="90" y="90" width="220" height="30" fill={dark} />
      {[105, 130, 155, 180, 205, 230, 255, 280].map((x) => (
        <circle key={x} cx={x} cy="120" r="4" fill={gold} />
      ))}
      {/* spotlight rays */}
      <path d="M205 120 L150 200 L260 200 Z" fill={gold} opacity="0.15" />
      {/* dancer 1 */}
      <circle cx="175" cy="165" r="13" fill={skin} />
      <path d="M162 176 Q175 170 188 176 L192 225 L158 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M164 180 Q140 168 132 145" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M186 180 Q200 195 195 215" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      {/* dancer 2 */}
      <circle cx="235" cy="165" r="13" fill={gold} />
      <path d="M222 176 Q235 170 248 176 L244 225 L210 225 Z" fill={gold} stroke={dark} strokeWidth="2.5" />
      <path d="M246 180 Q270 168 278 145" fill="none" stroke={gold} strokeWidth="7" strokeLinecap="round" />
      <path d="M224 180 Q210 195 215 215" fill="none" stroke={gold} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const DiwaliElFestivalDeLasLuces: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const clay = "#C97B4A";
  const flame = "#F4A300";
  return (
    <g>
      {[115, 155, 195, 235, 275].map((x, i) => (
        <g key={x}>
          <path d={`M${x - 16} 220 Q${x} 236 ${x + 16} 220 Q${x + 12} 208 ${x} 208 Q${x - 12} 208 ${x - 16} 220 Z`} fill={clay} stroke={dark} strokeWidth="2" />
          <path d={`M${x} 206 Q${x - 4} 194 ${x} 184 Q${x + 4} 194 ${x} 206 Z`} fill={flame} opacity={i % 2 === 0 ? 1 : 0.85} />
        </g>
      ))}
      {/* fireworks */}
      {[[110, 110], [300, 130]].map(([x, y]) => (
        <g key={x as number}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1={x as number} y1={y as number} x2={x as number} y2={(y as number) - 15} stroke={accentColor} strokeWidth="3" strokeLinecap="round" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
    </g>
  );
};

const HoliElFestivalDeLosColores: IllustrationComponent = () => {
  const skin = "#D9A46A";
  const colors = ["#E0457B", "#00ACC1", "#F4A300", "#7CB342", "#8E24AA"];
  return (
    <g>
      {[[145, 190], [260, 195]].map(([x, y], idx) => (
        <g key={x as number}>
          <circle cx={x as number} cy={(y as number) - 45} r="13" fill={skin} />
          <path
            d={`M${(x as number) - 15} ${(y as number) - 33} Q${x} ${(y as number) - 42} ${(x as number) + 15} ${(y as number) - 33} L${(x as number) + 18} ${y} L${(x as number) - 18} ${y} Z`}
            fill={colors[idx * 2]}
            stroke={shade(colors[idx * 2], 0.4)}
            strokeWidth="2.5"
          />
          <path
            d={`M${(x as number) - 12} ${(y as number) - 30} Q${(x as number) - 40} ${(y as number) - 45} ${(x as number) - 48} ${(y as number) - 70}`}
            fill="none"
            stroke={skin}
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      ))}
      {/* colored powder clouds */}
      {[[95, 100, 0], [130, 80, 1], [165, 95, 2], [235, 85, 3], [275, 100, 4], [305, 80, 0]].map(([x, y, ci]) => (
        <circle key={`${x}-${y}`} cx={x as number} cy={y as number} r={10 + ((y as number) % 5)} fill={colors[ci as number]} opacity="0.75" />
      ))}
    </g>
  );
};

const ElAyurvedaLaMedicinaMilenaria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const wood = "#6B4A2F";
  const oil = "#D4A017";
  return (
    <g>
      {/* mortar */}
      <path d="M155 210 Q150 240 195 245 Q240 245 235 210 Z" fill={wood} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="195" cy="208" rx="42" ry="10" fill={tint(wood, 0.3)} stroke={dark} strokeWidth="2" />
      {/* herbs inside */}
      <path d="M180 205 Q185 190 178 178" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      <path d="M200 205 Q198 185 208 172" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      <path d="M212 205 Q220 195 218 182" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      {/* pestle */}
      <path d="M250 165 L268 195 L255 205 L237 175 Z" fill={wood} stroke={dark} strokeWidth="2.5" />
      {/* oil bottles */}
      <rect x="270" y="195" width="16" height="34" fill={oil} opacity="0.7" stroke={dark} strokeWidth="1.5" />
      <rect x="276" y="185" width="4" height="12" fill={dark} />
    </g>
  );
};

const LasCuevasDeElloraUnTemploTalladoEnRoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const sky = "#DCE6E0";
  return (
    <g>
      {/* mountain / cliff */}
      <path d="M85 245 L110 130 Q205 95 300 130 L325 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* carved hollow */}
      <path d="M140 245 L155 165 Q205 145 255 165 L270 245 Z" fill={sky} stroke={dark} strokeWidth="2" />
      {/* temple carved inside, drawn after so it sits inside the hollow */}
      <rect x="172" y="195" width="66" height="50" fill={dark} opacity="0.85" />
      {[182, 198, 214, 226].map((x) => (
        <rect key={x} x={x} y="205" width="6" height="40" fill={sky} opacity="0.5" />
      ))}
      <path d="M190 195 Q205 172 220 195 Z" fill={dark} opacity="0.85" />
      <path d="M198 245 L198 218 Q205 210 212 218 L212 245 Z" fill={sky} opacity="0.4" />
    </g>
  );
};

const ElSitarYLaMusicaClasicaIndia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* gourd resonator */}
      <ellipse cx="270" cy="215" rx="28" ry="20" fill={wood} stroke={dark} strokeWidth="2.5" />
      {/* long neck */}
      <rect x="130" y="168" width="145" height="14" fill={wood} stroke={dark} strokeWidth="2" transform="rotate(-4 200 175)" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={140 + i * 22} y1="172" x2={140 + i * 22} y2="184" stroke={dark} strokeWidth="1" opacity="0.5" transform="rotate(-4 200 175)" />
      ))}
      {/* tuning pegs */}
      <circle cx="128" cy="164" r="6" fill={dark} />
      <circle cx="128" cy="180" r="6" fill={dark} />
      {/* seated player */}
      <circle cx="205" cy="140" r="14" fill={skin} />
      <path d="M190 152 Q205 145 220 152 L224 195 L186 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M192 163 Q170 178 160 195" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M218 163 Q240 178 250 200" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const LosFerrocarrilesIndiosUnaRedInmensa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.55);
  const skin = "#D9A46A";
  return (
    <g>
      {/* train body */}
      <rect x="100" y="170" width="200" height="55" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[120, 150, 180, 210, 240, 270].map((x) => (
        <rect key={x} x={x} y="180" width="18" height="20" fill={light} stroke={dark} strokeWidth="1.5" />
      ))}
      <line x1="90" y1="235" x2="320" y2="235" stroke={dark} strokeWidth="4" />
      {/* passengers riding on the roof */}
      {[130, 175, 220, 260].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={162 - (i % 2) * 3} r="8" fill={skin} />
          <path d={`M${x - 7} ${170 - (i % 2) * 3} Q${x} ${164 - (i % 2) * 3} ${x + 7} ${170 - (i % 2) * 3} L${x + 6} 178 L${x - 6} 178 Z`} fill={dark} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const ElSariLaPrendaSinCosturas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const gold = "#D4A017";
  return (
    <g>
      <circle cx="200" cy="128" r="17" fill={skin} />
      {/* draped body */}
      <path d="M178 143 Q200 134 222 143 L232 235 L168 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* pallu draped over the shoulder */}
      <path d="M220 148 Q250 165 245 220 Q225 228 215 210 Q235 175 210 155 Z" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.5" />
      {/* pleats */}
      {[188, 198, 208].map((x) => (
        <line key={x} x1={x} y1="150" x2={x - 4} y2="233" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* gold trim */}
      <path d="M168 235 L232 235" stroke={gold} strokeWidth="4" />
      <path d="M220 148 Q250 165 245 220" fill="none" stroke={gold} strokeWidth="3" opacity="0.8" />
      <path d="M182 148 Q200 140 218 148" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
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
  "el-taj-mahal-monumento-al-amor": { component: ElTajMahalMonumentoAlAmor },
  "el-yoga-el-regalo-espiritual-de-india": { component: ElYogaElRegaloEspiritualDeIndia },
  "bollywood-la-fabrica-de-cine-mas-grande": { component: BollywoodLaFabricaDeCineMasGrande },
  "diwali-el-festival-de-las-luces": { component: DiwaliElFestivalDeLasLuces },
  "holi-el-festival-de-los-colores": { component: HoliElFestivalDeLosColores },
  "el-ayurveda-la-medicina-milenaria": { component: ElAyurvedaLaMedicinaMilenaria },
  "las-cuevas-de-ellora-un-templo-tallado-en-roca": { component: LasCuevasDeElloraUnTemploTalladoEnRoca },
  "el-sitar-y-la-musica-clasica-india": { component: ElSitarYLaMusicaClasicaIndia },
  "los-ferrocarriles-indios-una-red-inmensa": { component: LosFerrocarrilesIndiosUnaRedInmensa },
  "el-sari-la-prenda-sin-costuras": { component: ElSariLaPrendaSinCosturas },
};
