import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElMayorBosqueDeManglaresDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mud = "#8B6F47";
  return (
    <g>
      <rect x="90" y="190" width="230" height="60" fill={mud} opacity="0.6" />
      {[[120, 245], [160, 248], [200, 244], [240, 248], [280, 245]].map(([x, y], i) => (
        <g key={x as number}>
          <path d={`M${x} ${y} Q${(x as number) - 14} ${(y as number) - 30} ${(x as number) - 6} ${(y as number) - 55}`} fill="none" stroke={i % 2 === 0 ? accentColor : dark} strokeWidth="5" strokeLinecap="round" />
          <path d={`M${x} ${y} Q${(x as number) + 6} ${(y as number) - 26} ${(x as number) + 14} ${(y as number) - 50}`} fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
          <path d={`M${x} ${y} Q${x} ${(y as number) - 20} ${x} ${(y as number) - 40}`} fill="none" stroke={i % 2 === 0 ? dark : accentColor} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
      {/* tiger eyes peering through the roots */}
      <ellipse cx="240" cy="165" rx="8" ry="6" fill="#F4A300" opacity="0.9" />
      <circle cx="237" cy="165" r="2" fill="#1A1A1A" />
      <circle cx="243" cy="165" r="2" fill="#1A1A1A" />
      <path d="M225 158 L235 162 M255 158 L245 162" stroke="#1A1A1A" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LasEscuelasFlotantesQueEsquivanLaInundacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M110 225 Q205 240 300 225 L285 240 L125 240 Z" fill={water} />
      <path d="M120 220 L290 220 L275 240 L135 240 Z" fill={dark} />
      <rect x="140" y="160" width="130" height="55" fill={light} stroke={dark} strokeWidth="2.5" />
      <path d="M130 160 L280 160 L260 140 L150 140 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[165, 195, 225, 255].map((x) => (
        <rect key={x} x={x} y="170" width="18" height="20" fill="#fff" opacity="0.7" />
      ))}
      <rect x="195" y="128" width="12" height="12" fill={dark} transform="rotate(15 201 134)" />
      <line x1="201" y1="128" x2="201" y2="112" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LosViejosVaporesDeRuedaQueSiguenNavegando: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <path d="M115 225 Q205 240 295 225 L280 240 L130 240 Z" fill={water} />
      <path d="M120 220 L290 220 L270 200 L140 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="155" y="165" width="100" height="38" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      <rect x="195" y="130" width="20" height="40" fill={dark} />
      <ellipse cx="205" cy="128" rx="12" ry="5" fill="#B0AFA8" opacity="0.7" />
      <circle cx="255" cy="200" r="30" fill="none" stroke={dark} strokeWidth="6" />
      {[0, 45, 90, 135].map((deg) => (
        <line key={deg} x1="255" y1="170" x2="255" y2="230" stroke={dark} strokeWidth="5" transform={`rotate(${deg} 255 200)`} />
      ))}
    </g>
  );
};

const ElMovimientoPorElIdiomaQueSeVolvioGlobal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const red = "#C1272D";
  return (
    <g>
      <path d="M110 155 L205 145 L205 235 L110 225 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      <path d="M300 155 L205 145 L205 235 L300 225 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      {[165, 185, 205].map((y) => (
        <line key={y} x1="125" y1={y} x2="190" y2={y - 5} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {[165, 185, 205].map((y) => (
        <line key={`r${y}`} x1="220" y1={y - 5} x2="285" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <path d="M205 145 L205 235" stroke={dark} strokeWidth="2" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse key={deg} cx="205" cy="163" rx="7" ry="10" fill={red} transform={`rotate(${deg} 205 170)`} />
      ))}
    </g>
  );
};

const ElJamdaniLaTelaQueLlamabanAireTejido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <rect x="115" y="105" width="180" height="140" fill={light} stroke={dark} strokeWidth="2.5" opacity="0.9" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}-${col}`} transform={`translate(${150 + col * 40}, ${140 + row * 40})`}>
            {[0, 72, 144, 216, 288].map((deg) => (
              <ellipse key={deg} cx="0" cy="-6" rx="5" ry="7" fill={accentColor} opacity="0.75" transform={`rotate(${deg} 0 0)`} />
            ))}
          </g>
        ))
      )}
      <rect x="115" y="105" width="180" height="140" fill="none" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const DhakaLaCapitalMundialDelRickshawPintado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#F4A300", "#C1272D", "#2E7D32"];
  return (
    <g>
      <path d="M150 235 L150 175 Q150 165 165 165 L235 165 Q250 165 250 175 L250 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[180, 200], [220, 195], [200, 215]].map(([x, y], i) => (
        <g key={x as number}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 6} rx="6" ry="8" fill={colors[i % colors.length]} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      <path d="M150 175 Q200 150 250 175" fill="none" stroke={dark} strokeWidth="4" />
      <circle cx="170" cy="240" r="20" fill="none" stroke={dark} strokeWidth="5" />
      <circle cx="240" cy="240" r="20" fill="none" stroke={dark} strokeWidth="5" />
      <circle cx="205" cy="240" r="20" fill="none" stroke={dark} strokeWidth="5" />
    </g>
  );
};

const ElHilsaElPezNacionalQueDefineUnaCocina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const silver = "#C9D3DB";
  return (
    <g>
      <path d="M130 180 Q170 150 240 165 Q275 172 285 185 Q275 198 240 205 Q170 220 130 190 Z" fill={silver} stroke={dark} strokeWidth="2.5" />
      <path d="M285 185 L310 165 L305 185 L310 205 Z" fill={dark} />
      <circle cx="160" cy="178" r="4" fill="#1A1A1A" />
      <path d="M155 190 Q190 195 225 190 M150 175 Q190 165 230 172" stroke={dark} strokeWidth="1.5" opacity="0.4" fill="none" />
      {[[180, 130], [210, 115], [150, 140], [240, 235]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="5" fill={accentColor} opacity="0.5" />
      ))}
    </g>
  );
};

const LaMezquitaDeSesentaCupulasDeBagerhat: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const brick = "#B5651D";
  return (
    <g>
      <rect x="115" y="180" width="180" height="60" fill={brick} stroke={dark} strokeWidth="2.5" />
      {[135, 165, 195, 225, 255, 275].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy="178" rx="16" ry={i % 2 === 0 ? 16 : 12} fill={brick} stroke={dark} strokeWidth="2" />
          <path d={`M${x - 16} 178 Q${x} 155 ${x + 16} 178`} fill={brick} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {[135, 195, 255].map((x) => (
        <rect key={x} x={x - 8} y="205" width="16" height="30" fill={dark} opacity="0.4" />
      ))}
    </g>
  );
};

const ElMicrocreditoQueNacioParaLosMasPobres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  const skin = "#D9A46A";
  return (
    <g>
      <circle cx="205" cy="150" r="26" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <text x="205" y="159" fontSize="22" fontWeight="700" fill={shade(gold, 0.4)} textAnchor="middle">৳</text>
      <path d="M120 235 Q125 200 165 195 L210 210 L165 220 Z" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M290 235 Q285 200 245 195 L200 210 L245 220 Z" fill={skin} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ElMayorDeltaFluvialDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const land = tint(accentColor, 0.55);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={land} opacity="0.5" />
      <path d="M205 90 L205 140 Q205 155 185 165 L150 200 Q135 215 140 235" fill="none" stroke={water} strokeWidth="12" strokeLinecap="round" />
      <path d="M205 140 Q220 155 250 165 L285 200 Q300 215 295 235" fill="none" stroke={water} strokeWidth="12" strokeLinecap="round" />
      <path d="M205 155 Q205 190 205 235" fill="none" stroke={water} strokeWidth="10" strokeLinecap="round" />
      <path d="M90 245 Q205 235 320 245 L320 250 L90 250 Z" fill={dark} opacity="0.6" />
    </g>
  );
};

const PohelaBoishakhElAnoNuevoBengali: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const white = "#F5F0E6";
  return (
    <g>
      {/* owl mask */}
      <circle cx="150" cy="160" r="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="135" cy="150" r="12" fill={white} stroke={dark} strokeWidth="2" />
      <circle cx="165" cy="150" r="12" fill={white} stroke={dark} strokeWidth="2" />
      <circle cx="135" cy="150" r="5" fill={dark} />
      <circle cx="165" cy="150" r="5" fill={dark} />
      <polygon points="150,165 143,178 157,178" fill={gold} />
      {[130, 140, 160, 170].map((x) => (
        <path key={x} d={`M${x} 128 L${x} 108`} stroke={dark} strokeWidth="4" strokeLinecap="round" />
      ))}
      {/* elephant mask */}
      <circle cx="260" cy="175" r="34" fill={gold} stroke={dark} strokeWidth="3" />
      <path d="M245 195 Q235 215 245 230" fill="none" stroke={gold} strokeWidth="10" strokeLinecap="round" />
      <circle cx="248" cy="168" r="7" fill={dark} />
      <path d="M225 155 Q210 150 205 165 Q210 178 225 172" fill={tint(gold, 0.2)} stroke={dark} strokeWidth="2" />
      {/* held on poles */}
      <line x1="150" y1="198" x2="150" y2="245" stroke="#8B5A2B" strokeWidth="4" />
      <line x1="260" y1="209" x2="260" y2="245" stroke="#8B5A2B" strokeWidth="4" />
    </g>
  );
};

const LosBaulMusicosMisticosErrantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  return (
    <g>
      <circle cx="205" cy="140" r="18" fill={skin} stroke={dark} strokeWidth="2.5" />
      {/* wrapped headscarf */}
      <path d="M188 132 Q205 115 222 132" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      {/* robe */}
      <path d="M182 156 Q205 148 228 156 L235 245 L175 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* arm plucking */}
      <path d="M188 165 Q160 175 150 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* ektara, one-stringed instrument */}
      <ellipse cx="140" cy="210" rx="20" ry="26" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <line x1="140" y1="184" x2="140" y2="140" stroke="#6B4A2F" strokeWidth="4" />
      <line x1="150" y1="150" x2="128" y2="220" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      {/* other arm resting */}
      <path d="M222 165 Q245 175 240 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const CoxBazarLaPlayaNaturalMasLarga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#E8D5A8";
  const wave = tint(accentColor, 0.3);
  return (
    <g>
      {/* sea */}
      <rect x="85" y="90" width="235" height="90" fill={accentColor} opacity="0.6" />
      <path d="M85 150 Q205 140 320 150" fill="none" stroke={wave} strokeWidth="4" opacity="0.7" />
      <path d="M85 165 Q205 158 320 165" fill="none" stroke={wave} strokeWidth="3" opacity="0.5" />
      {/* sand */}
      <path d="M85 180 Q205 165 320 180 L320 250 L85 250 Z" fill={sand} stroke={dark} strokeWidth="2" />
      {/* umbrellas */}
      {[
        [150, 195, "#C1272D"],
        [240, 200, "#F4A300"],
      ].map(([x, y, c]) => (
        <g key={x as number}>
          <line x1={x as number} y1={y as number} x2={x as number} y2={(y as number) + 40} stroke="#6B4A2F" strokeWidth="3" />
          <path d={`M${(x as number) - 24} ${y} Q${x} ${(y as number) - 26} ${(x as number) + 24} ${y} Z`} fill={c as string} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const ElNakshiKanthaMantasBordadasConHistorias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const cream = "#F0E4D0";
  const gold = "#D4A017";
  return (
    <g>
      <rect x="100" y="115" width="210" height="130" fill={cream} stroke={dark} strokeWidth="2.5" />
      {/* radiating lotus center */}
      <circle cx="205" cy="180" r="22" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1="205" y1="180" x2="205" y2="150" stroke={gold} strokeWidth="3" strokeLinecap="round" transform={`rotate(${deg} 205 180)`} />
      ))}
      {/* border pattern */}
      {[120, 150, 260, 290].map((x) => (
        <polygon key={x} points={`${x},130 ${x + 10},142 ${x},154 ${x - 10},142`} fill={accentColor} stroke={dark} strokeWidth="1" opacity="0.8" />
      ))}
      {[120, 150, 260, 290].map((x) => (
        <polygon key={`b-${x}`} points={`${x},220 ${x + 10},232 ${x},244 ${x - 10},232`} fill={gold} stroke={dark} strokeWidth="1" opacity="0.8" />
      ))}
    </g>
  );
};

const LaFibraDoradaDelYute: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#6B4A2F";
  return (
    <g>
      {/* stacked bundles of golden fiber */}
      {[
        [130, 215],
        [190, 220],
        [250, 215],
      ].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="35" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
          {[-20, -6, 8, 22].map((dx) => (
            <line key={dx} x1={x + dx} y1={y - 14} x2={x + dx} y2={y + 14} stroke={dark} strokeWidth="1" opacity="0.4" />
          ))}
        </g>
      ))}
      {/* loom frame behind */}
      <rect x="95" y="110" width="220" height="10" fill={wood} />
      <line x1="105" y1="120" x2="105" y2="200" stroke={wood} strokeWidth="6" />
      <line x1="305" y1="120" x2="305" y2="200" stroke={wood} strokeWidth="6" />
      {[120, 140, 160, 180, 200, 220, 240, 260, 280].map((x) => (
        <line key={x} x1={x} y1="120" x2={x} y2="195" stroke={tint(accentColor, 0.3)} strokeWidth="1.5" opacity="0.6" />
      ))}
    </g>
  );
};

const PaharpurElMonasterioBudistaPerdido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.35);
  return (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={130 + i * 10} y={225 - i * 28} width={150 - i * 20} height="28" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* decorated niches */}
      {[150, 175, 200, 225, 250].map((x) => (
        <rect key={x} x={x} y="200" width="14" height="20" fill={dark} opacity="0.4" />
      ))}
      {[160, 190, 220].map((x) => (
        <rect key={x} x={x} y="172" width="12" height="16" fill={dark} opacity="0.4" />
      ))}
    </g>
  );
};

const ElFuerteLalbaghDeDhaka: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  return (
    <g>
      {/* gate walls */}
      <rect x="100" y="140" width="70" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="240" y="140" width="70" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* central arch */}
      <path d="M170 240 L170 175 Q170 140 205 140 Q240 140 240 175 L240 240 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      {/* domes */}
      <circle cx="135" cy="130" r="20" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <circle cx="275" cy="130" r="20" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <circle cx="205" cy="115" r="24" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <line x1="205" y1="91" x2="205" y2="80" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LosJardinesDeTeDeSylhet: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const hillFar = tint(accentColor, 0.4);
  return (
    <g>
      {/* rolling hills */}
      <path d="M85 190 Q150 150 205 175 Q260 150 320 185 L320 250 L85 250 Z" fill={hillFar} opacity="0.6" />
      <path d="M85 220 Q150 195 205 215 Q260 190 320 220 L320 250 L85 250 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* rows of tea bushes */}
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          {[0, 1, 2, 3, 4, 5, 6].map((col) => (
            <ellipse key={col} cx={100 + col * 32 + row * 4} cy={222 + row * 6} rx="14" ry="8" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="1" opacity="0.85" />
          ))}
        </g>
      ))}
    </g>
  );
};

const ElCriquetLaObsesionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#C9A876";
  const ball = "#8B1A1A";
  return (
    <g>
      {/* stadium lights */}
      {[110, 300].map((x) => (
        <g key={x}>
          <line x1={x} y1="95" x2={x} y2="130" stroke={dark} strokeWidth="3" />
          {[0, 30, -30].map((deg) => (
            <line key={deg} x1={x} y1="95" x2={x} y2="70" stroke={accentColor} strokeWidth="3" strokeLinecap="round" opacity="0.6" transform={`rotate(${deg} ${x} 95)`} />
          ))}
        </g>
      ))}
      {/* pitch */}
      <rect x="90" y="225" width="230" height="20" fill={accentColor} opacity="0.3" />
      {/* stumps */}
      {[195, 210, 225].map((x) => (
        <rect key={x} x={x} y="155" width="6" height="75" fill={wood} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* bat leaning */}
      <path d="M130 232 L155 135 L168 138 L145 235 Z" fill={wood} stroke={dark} strokeWidth="2" />
      <rect x="122" y="228" width="20" height="32" rx="6" fill={dark} />
      {/* ball */}
      <circle cx="270" cy="205" r="15" fill={ball} stroke={shade(ball, 0.3)} strokeWidth="2" />
    </g>
  );
};

const NazrulYTagoreLosPoetasDeBengala: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const paper = "#F5F0E6";
  return (
    <g>
      {/* open book */}
      <path d="M105 220 Q155 200 205 215 L205 165 Q155 150 105 170 Z" fill={paper} stroke={dark} strokeWidth="2.5" />
      <path d="M205 215 Q255 200 305 220 L305 170 Q255 150 205 165 Z" fill={paper} stroke={dark} strokeWidth="2.5" />
      {[175, 190, 205].map((y) => (
        <line key={y} x1="120" y1={y} x2="190" y2={y - 8} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {[175, 190, 205].map((y) => (
        <line key={`r-${y}`} x1="220" y1={y - 8} x2="290" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* quill */}
      <path d="M270 155 L310 105 L320 115 L280 165 Z" fill="#B5651D" stroke={dark} strokeWidth="1.5" />
      <path d="M300 92 Q320 100 312 122 L292 112 Q294 98 300 92 Z" fill="#1A1A1A" />
    </g>
  );
};

export const bangladeshIllustrations: Record<string, IllustrationDefinition> = {
  "el-mayor-bosque-de-manglares-del-mundo": { component: ElMayorBosqueDeManglaresDelMundo },
  "las-escuelas-flotantes-que-esquivan-la-inundacion": { component: LasEscuelasFlotantesQueEsquivanLaInundacion },
  "los-viejos-vapores-de-rueda-que-siguen-navegando": { component: LosViejosVaporesDeRuedaQueSiguenNavegando },
  "el-movimiento-por-el-idioma-que-se-volvio-global": { component: ElMovimientoPorElIdiomaQueSeVolvioGlobal },
  "el-jamdani-la-tela-que-llamaban-aire-tejido": { component: ElJamdaniLaTelaQueLlamabanAireTejido },
  "dhaka-la-capital-mundial-del-rickshaw-pintado": { component: DhakaLaCapitalMundialDelRickshawPintado },
  "el-hilsa-el-pez-nacional-que-define-una-cocina": { component: ElHilsaElPezNacionalQueDefineUnaCocina },
  "la-mezquita-de-sesenta-cupulas-de-bagerhat": { component: LaMezquitaDeSesentaCupulasDeBagerhat },
  "el-microcredito-que-nacio-para-los-mas-pobres": { component: ElMicrocreditoQueNacioParaLosMasPobres },
  "el-mayor-delta-fluvial-del-mundo": { component: ElMayorDeltaFluvialDelMundo },
  "pohela-boishakh-el-ano-nuevo-bengali": { component: PohelaBoishakhElAnoNuevoBengali },
  "los-baul-musicos-misticos-errantes": { component: LosBaulMusicosMisticosErrantes },
  "cox-bazar-la-playa-natural-mas-larga": { component: CoxBazarLaPlayaNaturalMasLarga },
  "el-nakshi-kantha-mantas-bordadas-con-historias": { component: ElNakshiKanthaMantasBordadasConHistorias },
  "la-fibra-dorada-del-yute": { component: LaFibraDoradaDelYute },
  "paharpur-el-monasterio-budista-perdido": { component: PaharpurElMonasterioBudistaPerdido },
  "el-fuerte-lalbagh-de-dhaka": { component: ElFuerteLalbaghDeDhaka },
  "los-jardines-de-te-de-sylhet": { component: LosJardinesDeTeDeSylhet },
  "el-criquet-la-obsesion-nacional": { component: ElCriquetLaObsesionNacional },
  "nazrul-y-tagore-los-poetas-de-bengala": { component: NazrulYTagoreLosPoetasDeBengala },
};
