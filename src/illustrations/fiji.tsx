import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const KavaYaqona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const liquid = "#8B5A2B";
  return (
    <g>
      <path d="M140 195 Q140 225 205 228 Q270 225 270 195 L262 195 Q255 215 205 217 Q155 215 148 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="65" ry="16" fill={liquid} stroke={shade(liquid, 0.3)} strokeWidth="2.5" />
      <path d="M135 195 Q125 195 122 205 Q125 215 138 212" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="280" cy="215" rx="20" ry="12" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="280" cy="212" rx="14" ry="6" fill={liquid} />
    </g>
  );
};

const RugbyOroOlimpico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      <circle cx="180" cy="180" r="38" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="4" />
      <circle cx="180" cy="180" r="26" fill="none" stroke={shade(gold, 0.3)} strokeWidth="1.5" />
      <path d="M175 190 L185 190 L182 172 Q186 168 182 165 Q178 162 174 165 Q170 168 174 172 Z" fill={shade(gold, 0.35)} />
      <ellipse cx="270" cy="200" rx="34" ry="18" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-20 270 200)" />
      <line x1="252" y1="205" x2="288" y2="195" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const AguaEmbotelladaFiji: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#4A90D9";
  return (
    <g>
      <path d="M255 235 Q245 215 250 190 Q262 178 285 178 Q305 178 305 200 Q305 220 295 235 Z" fill="#4A8F4E" stroke={dark} strokeWidth="2.5" />
      <path d="M263 230 Q258 215 270 205" fill="none" stroke="#4A8F4E" strokeWidth="6" strokeLinecap="round" />
      <rect x="150" y="150" width="60" height="90" fill={water} opacity="0.55" stroke={dark} strokeWidth="2.5" />
      <rect x="160" y="135" width="40" height="18" fill={dark} opacity="0.5" />
      <rect x="155" y="180" width="50" height="35" fill="#fff" opacity="0.5" />
    </g>
  );
};

const Archipielago330Islas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      {[[130, 160, 22], [175, 195, 28], [220, 150, 18], [260, 190, 24], [290, 140, 14], [150, 220, 16]].map(([x, y, r]) => (
        <path key={x as number} d={`M${(x as number) - (r as number)} ${y} Q${x} ${(y as number) - (r as number) * 1.3} ${(x as number) + (r as number)} ${y} Q${x} ${(y as number) + (r as number) * 0.4} ${(x as number) - (r as number)} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const IndoFiyianos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin1 = "#8B5A2B";
  const skin2 = "#D9A46A";
  return (
    <g>
      <path d="M140 220 Q135 195 160 190 L200 195 L200 205 L165 205 Q158 208 155 220 Z" fill={skin1} stroke={dark} strokeWidth="2.5" />
      <path d="M270 220 Q275 195 250 190 L210 195 L210 205 L245 205 Q252 208 255 220 Z" fill={skin2} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={165 + i * 12} y="198" width="10" height="8" fill={accentColor} opacity="0.7" />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={`r${i}`} x={225 + i * 12} y="198" width="10" height="8" fill="#C1272D" opacity="0.6" />
      ))}
    </g>
  );
};

const ArrecifeArcoiris: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#E91E8C", "#8E24AA", "#F4A300"];
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1D6FA5" opacity="0.5" />
      {[[130, 210], [190, 225], [250, 205], [280, 220]].map(([x, y], i) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 12} ${(y as number) - 22} ${x} ${(y as number) - 38} Q${(x as number) + 12} ${(y as number) - 22} ${x} ${y} Z`} fill={colors[i % colors.length]} stroke={dark} strokeWidth="1.5" opacity="0.85" />
      ))}
      {[[150, 160], [210, 175], [260, 155]].map(([x, y]) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="12" ry="7" fill="#F4C430" stroke={dark} strokeWidth="1.2" />
          <path d={`M${(x as number) - 12} ${y} L${(x as number) - 20} ${(y as number) - 5} M${(x as number) - 12} ${y} L${(x as number) - 20} ${(y as number) + 5}`} stroke={dark} strokeWidth="1.2" />
        </g>
      ))}
    </g>
  );
};

const GolpesEstado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="205" y1="130" x2="205" y2="220" stroke={dark} strokeWidth="4" />
      <line x1="150" y1="155" x2="260" y2="185" stroke={dark} strokeWidth="4" />
      <path d="M150 155 L135 190 L165 190 Z" fill="none" stroke={accentColor} strokeWidth="3" />
      <path d="M260 185 L248 210 L272 214 Z" fill="none" stroke={accentColor} strokeWidth="3" />
      <rect x="185" y="220" width="40" height="15" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="128" width="14" height="10" fill={dark} />
      <rect x="242" y="128" width="14" height="10" fill={dark} />
    </g>
  );
};

const BureTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const thatch = "#D4A017";
  return (
    <g>
      <path d="M135 195 Q205 135 275 195 Z" fill={thatch} stroke={shade(thatch, 0.3)} strokeWidth="2.5" />
      <path d="M150 195 Q205 150 260 195 Z" fill={thatch} opacity="0.6" />
      <rect x="150" y="195" width="110" height="45" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[160, 175, 190, 205, 220, 235, 250].map((x) => (
        <line key={x} x1={x} y1="197" x2={x} y2="238" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      <rect x="195" y="210" width="20" height="30" fill={dark} opacity="0.5" />
    </g>
  );
};

const IslasCanibalesHistoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const map = "#E8DCC0";
  return (
    <g>
      <rect x="115" y="110" width="180" height="130" fill={map} stroke={shade(map, 0.3)} strokeWidth="3" />
      <path d="M150 165 Q200 145 250 170" fill="none" stroke={shade(map, 0.5)} strokeWidth="1.5" opacity="0.5" />
      <path d="M140 200 Q190 220 260 195" fill="none" stroke={shade(map, 0.5)} strokeWidth="1.5" opacity="0.5" />
      <rect x="195" y="130" width="10" height="80" fill="#5C3A1E" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${185 + i * 7} 130 L${185 + i * 7} 150 L${188 + i * 7} 155 L${182 + i * 7} 155 Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const MekeDanza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      {[[155, 220], [255, 220]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 62} r="10" fill={skin} />
          <path d={`M${(x as number) - 16} ${(y as number) - 25} Q${x} ${(y as number) - 40} ${(x as number) + 16} ${(y as number) - 25} L${(x as number) + 12} ${y} L${(x as number) - 12} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
          {[0, 1, 2, 3, 4].map((s) => (
            <line key={s} x1={(x as number) - 10 + s * 5} y1={(y as number) - 12} x2={(x as number) - 10 + s * 5} y2={y} stroke={dark} strokeWidth="1.2" opacity="0.5" />
          ))}
          <line x1={x} y1={(y as number) - 40} x2={x} y2={(y as number) - 90} stroke="#6B4423" strokeWidth="4" strokeLinecap="round" transform={`rotate(${i === 0 ? -10 : 10} ${x} ${(y as number) - 40})`} />
        </g>
      ))}
    </g>
  );
};

const TabuaDienteDeBallena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const ivory = "#F0E6D2";
  return (
    <g>
      <path d="M160 130 Q140 170 150 210 Q158 235 185 240 Q210 242 215 220 Q218 190 200 160 Q185 135 160 130 Z" fill={ivory} stroke={shade(ivory, 0.3)} strokeWidth="3" />
      <path d="M165 145 Q150 175 158 205" fill="none" stroke={shade(ivory, 0.2)} strokeWidth="1.5" opacity="0.5" />
      <path d="M160 130 Q220 120 260 145 Q290 160 285 190" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <path d="M200 160 Q230 150 250 165" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const VilavilairevoFuego: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const stone = "#5C5C5C";
  return (
    <g>
      <ellipse cx="205" cy="225" rx="90" ry="20" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2.5" />
      {[[160, 222], [185, 228], [210, 220], [235, 226], [260, 222]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="12" fill={shade(stone, 0.1)} stroke={shade(stone, 0.35)} strokeWidth="1.5" />
      ))}
      <path d="M170 215 Q175 205 165 200 M200 210 Q205 198 195 195 M235 213 Q240 202 230 198" stroke="#F4A300" strokeWidth="2.5" opacity="0.7" fill="none" />
      <circle cx="205" cy="150" r="14" fill={skin} />
      <path d="M191 164 Q205 158 219 164 L215 210 L195 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M197 208 L190 222 M213 208 L220 222" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M191 170 Q170 175 160 190 M219 170 Q240 175 250 190" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
    </g>
  );
};

const MasiTelaDeCorteza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cloth = "#E8DCC0";
  return (
    <g>
      <rect x="120" y="110" width="170" height="130" fill={cloth} stroke={shade(cloth, 0.3)} strokeWidth="3" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect key={`${row}-${col}`} x={135 + col * 35} y={125 + row * 28} width="26" height="18" fill={(row + col) % 2 === 0 ? accentColor : dark} opacity="0.8" />
        ))
      )}
      <path d="M120 110 L290 240 M290 110 L120 240" stroke={dark} strokeWidth="1.2" opacity="0.25" />
    </g>
  );
};

const LevukaAntiguaCapital: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="215" width="230" height="35" fill={water} opacity="0.5" />
      {[[120, 215, 45], [175, 215, 55], [235, 215, 50], [285, 215, 35]].map(([x, y, w]) => (
        <g key={x as number}>
          <rect x={(x as number) - (w as number) / 2} y={(y as number) - 45} width={w} height="45" fill={accentColor} stroke={dark} strokeWidth="2" />
          <polygon points={`${(x as number) - (w as number) / 2 - 4},${(y as number) - 45} ${x},${(y as number) - 62} ${(x as number) + (w as number) / 2 + 4},${(y as number) - 45}`} fill={dark} opacity="0.6" />
          <rect x={(x as number) - 8} y={(y as number) - 20} width="16" height="20" fill={shade(accentColor, 0.3)} />
        </g>
      ))}
      <line x1="270" y1="215" x2="290" y2="185" stroke="#5C3A1E" strokeWidth="3" />
    </g>
  );
};

const CascosAzulesFiyianos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const uniform = "#4A6741";
  return (
    <g>
      <circle cx="205" cy="145" r="15" fill={skin} />
      <path d="M188 135 Q205 118 222 135 Q222 145 205 145 Q188 145 188 135 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M190 168 Q205 160 220 168 L216 235 L194 235 Z" fill={uniform} stroke={dark} strokeWidth="2.5" />
      <rect x="196" y="185" width="18" height="14" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <text x="205" y="196" fontSize="10" fontWeight="700" fill={dark} textAnchor="middle">UN</text>
      <path d="M190 175 L165 200 M220 175 L245 200" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    </g>
  );
};

export const fijiIllustrations: Record<string, IllustrationDefinition> = {
  "kava-yaqona": { component: KavaYaqona },
  "rugby-oro-olimpico": { component: RugbyOroOlimpico },
  "agua-embotellada-fiji": { component: AguaEmbotelladaFiji },
  "archipielago-330-islas": { component: Archipielago330Islas },
  "indo-fiyianos": { component: IndoFiyianos },
  "arrecife-arcoiris": { component: ArrecifeArcoiris },
  "golpes-estado": { component: GolpesEstado },
  "bure-tradicional": { component: BureTradicional },
  "islas-canibales-historia": { component: IslasCanibalesHistoria },
  "meke-danza": { component: MekeDanza },
  "tabua-diente-de-ballena": { component: TabuaDienteDeBallena },
  "vilavilairevo-caminata-de-fuego": { component: VilavilairevoFuego },
  "masi-tela-de-corteza": { component: MasiTelaDeCorteza },
  "levuka-antigua-capital": { component: LevukaAntiguaCapital },
  "cascos-azules-fiyianos": { component: CascosAzulesFiyianos },
};
