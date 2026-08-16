import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CanalDePanama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      {/* lock chamber walls */}
      <rect x="95" y="120" width="30" height="120" fill={dark} />
      <rect x="285" y="120" width="30" height="120" fill={dark} />
      {/* water in the lock */}
      <rect x="125" y="150" width="160" height="90" fill={water} />
      {/* lock gates, open */}
      <rect x="120" y="130" width="10" height="80" fill={accentColor} transform="rotate(25 120 130)" />
      <rect x="280" y="130" width="10" height="80" fill={accentColor} transform="rotate(-25 280 130)" />
      {/* ship passing through */}
      <path d="M155 175 L255 175 L245 200 L165 200 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="190" y="155" width="30" height="22" fill={dark} />
    </g>
  );
};

const IstmoPuenteBiologico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.5" />
      {/* two landmasses */}
      <path d="M95 130 Q140 110 170 140 Q150 170 110 175 Q90 160 95 130 Z" fill={accentColor} />
      <path d="M320 220 Q275 240 245 210 Q265 180 305 175 Q325 190 320 220 Z" fill={shade(accentColor, 0.15)} />
      {/* thin land bridge connecting them */}
      <path d="M170 150 Q210 175 245 205 L235 220 Q200 190 160 165 Z" fill={dark} />
    </g>
  );
};

const MolasGuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const colors = ["#F4C430", "#1565C0", "#2E7D32"];
  return (
    <g>
      {/* layered reverse-appliqué panel */}
      <rect x="105" y="95" width="200" height="150" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="125" y="115" width="160" height="110" fill={colors[0]} />
      <rect x="145" y="135" width="120" height="70" fill={colors[1]} />
      {/* central animal-like figure cut through the layers */}
      <path d="M205 145 Q185 150 185 170 Q185 190 205 195 Q225 190 225 170 Q225 150 205 145 Z" fill={colors[2]} />
      <circle cx="197" cy="165" r="4" fill={accentColor} />
      <circle cx="213" cy="165" r="4" fill={accentColor} />
      {[125, 285].map((x) => (
        <line key={x} x1={x} y1="115" x2={x} y2="225" stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
    </g>
  );
};

const SombreroPanamaMito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.3);
  return (
    <g>
      <ellipse cx="205" cy="185" rx="115" ry="26" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[-90, -60, 195, 155, 115, 75, 35, 0].map((deg) => (
        <line key={deg} x1="205" y1="185" x2="205" y2="163" stroke={light} strokeWidth="1.5" opacity="0.5" transform={`rotate(${deg} 205 185)`} />
      ))}
      <path d="M175 178 Q175 138 205 132 Q235 138 235 178 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      <path d="M175 172 Q205 184 235 172" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const CascoViejoSkyline: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* modern skyscrapers behind */}
      {[[240, 100, 26], [270, 80, 30], [300, 120, 22]].map(([x, y, h], i) => (
        <rect key={x} x={x} y={y} width="24" height={240 - Number(y)} fill={i % 2 === 0 ? dark : light} />
      ))}
      {/* low colonial building in front */}
      <rect x="110" y="170" width="110" height="70" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="105,170 165,142 225,170" fill={dark} />
      <rect x="150" y="205" width="30" height="35" fill={dark} />
      {[125, 200].map((x) => (
        <rect key={x} x={x} y="185" width="16" height="20" fill={light} />
      ))}
    </g>
  );
};

const RanaDorada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M95 240 Q210 225 320 240 L320 250 L95 250 Z" fill={shade(accentColor, 0.1)} opacity="0.3" />
      <ellipse cx="205" cy="180" rx="42" ry="34" fill={accentColor} />
      <circle cx="178" cy="150" r="15" fill={accentColor} />
      <circle cx="232" cy="150" r="15" fill={accentColor} />
      <circle cx="172" cy="144" r="6" fill="#1A1A1A" />
      <circle cx="238" cy="144" r="6" fill="#1A1A1A" />
      {[[190, 175], [220, 185], [200, 200], [175, 190]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill="#1A1A1A" />
      ))}
      <path d="M172 205 L155 225 M238 205 L255 225 M188 215 L180 235 M222 215 L230 235" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const AutonomiaGunaYala: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const sand = "#E8C87A";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={accentColor} opacity="0.55" />
      {[[130, 190], [175, 175], [220, 195], [265, 170], [300, 200]].map(([x, y], i) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx={18 - (i % 2) * 4} ry="10" fill={sand} stroke={dark} strokeWidth="1.5" />
          <circle cx={x} cy={Number(y) - 8} r="8" fill={shade(accentColor, 0.1)} />
        </g>
      ))}
    </g>
  );
};

const DiablosRojos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#F4C430";
  const red = "#C1272D";
  return (
    <g>
      {/* school bus body */}
      <path d="M110 140 L110 210 Q110 220 120 220 L295 220 Q305 220 305 210 L305 155 Q305 140 290 140 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[130, 165, 200, 235, 270].map((x) => (
        <rect key={x} x={x} y="150" width="24" height="26" fill={tint(accentColor, 0.6)} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* vibrant painted decoration */}
      <path d="M115 195 Q160 185 205 195 Q250 205 300 195" fill="none" stroke={gold} strokeWidth="5" />
      <circle cx="150" cy="205" r="8" fill={red} />
      <circle cx="260" cy="205" r="8" fill={gold} />
      {[150, 230].map((x) => (
        <circle key={x} cx={x} cy="232" r="16" fill="#2E2E2E" />
      ))}
    </g>
  );
};

const TaponDelDarien: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      <circle cx="130" cy="130" r="34" fill={dark} />
      <circle cx="165" cy="105" r="30" fill={accentColor} />
      <circle cx="120" cy="180" r="32" fill={accentColor} />
      <circle cx="280" cy="115" r="32" fill={accentColor} />
      <circle cx="255" cy="170" r="30" fill={dark} />
      <circle cx="295" cy="205" r="28" fill={light} opacity="0.85" />
      <circle cx="105" cy="225" r="26" fill={light} opacity="0.85" />
      <circle cx="200" cy="150" r="36" fill={accentColor} opacity="0.9" />
      <circle cx="210" cy="210" r="30" fill={dark} opacity="0.85" />
    </g>
  );
};

const DolarizacionBalboa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const gold = "#D4A017";
  return (
    <g>
      {/* green banknotes */}
      <rect x="130" y="140" width="130" height="68" rx="4" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="145" y="152" width="100" height="44" rx="20" fill="none" stroke={light} strokeWidth="2" />
      {/* balboa coin overlapping */}
      <circle cx="255" cy="205" r="38" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <circle cx="255" cy="205" r="26" fill="none" stroke={shade(gold, 0.3)} strokeWidth="2" />
      <text x="255" y="216" fontSize="34" fontWeight="700" fill={shade(gold, 0.3)} textAnchor="middle" fontFamily="serif">$</text>
    </g>
  );
};

export const panamaIllustrations: Record<string, IllustrationDefinition> = {
  "canal-de-panama": { component: CanalDePanama },
  "istmo-puente-biologico": { component: IstmoPuenteBiologico },
  "molas-guna": { component: MolasGuna },
  "sombrero-panama-mito": { component: SombreroPanamaMito },
  "casco-viejo-skyline": { component: CascoViejoSkyline },
  "rana-dorada": { component: RanaDorada },
  "autonomia-guna-yala": { component: AutonomiaGunaYala },
  "diablos-rojos": { component: DiablosRojos },
  "tapon-del-darien": { component: TaponDelDarien },
  "dolarizacion-balboa": { component: DolarizacionBalboa },
};
