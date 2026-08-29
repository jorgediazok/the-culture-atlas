import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BakuBajoElNivelDelMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 200 320 240 L320 250 L90 250 Z" fill="#3D8FB0" opacity="0.6" />
      {[[140, 235, 40], [190, 220, 55], [245, 230, 45], [280, 210, 35]].map(([x, y, h], i) => (
        <rect key={x as number} x={(x as number) - 15} y={(y as number) - (h as number)} width="30" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M215 175 Q205 150 195 175 L195 220 L215 220 Z" fill={dark} />
    </g>
  );
};

const YanarDagMontanaEnLlamas: IllustrationComponent = () => (
  <g>
    <path d="M100 250 Q150 200 205 220 Q260 200 310 250 Z" fill="#5C4A3A" />
    {[[140, 220], [175, 205], [210, 215], [245, 200], [280, 225]].map(([x, y], i) => (
      <path key={x as number} d={`M${x} ${y} Q${(x as number) - 8} ${(y as number) - 25} ${x} ${(y as number) - 40} Q${(x as number) + 8} ${(y as number) - 25} ${x} ${y} Z`} fill={i % 2 === 0 ? "#F4A300" : "#E85D04"} opacity="0.9" />
    ))}
  </g>
);

const AteshgahTemploDelFuego: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="205,90 300,155 265,250 145,250 110,155" fill="none" stroke={dark} strokeWidth="3" />
      <polygon points="205,90 300,155 265,250 145,250 110,155" fill={accentColor} opacity="0.15" />
      {[[145, 220], [180, 235], [230, 235], [265, 220]].map(([x, y]) => (
        <rect key={x as number} x={(x as number) - 10} y={(y as number) - 25} width="20" height="25" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M195 210 Q205 175 200 150 Q212 178 215 210 Z" fill="#F4A300" />
    </g>
  );
};

const AlfombrasAzerbaiyanasUnesco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="130" width="170" height="110" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="140" y="150" width="130" height="70" fill="none" stroke="#F5F0E6" strokeWidth="3" />
      {[[170, 165], [205, 165], [240, 165], [170, 205], [205, 205], [240, 205]].map(([x, y]) => (
        <polygon key={`${x}-${y}`} points={`${x},${(y as number) - 10} ${(x as number) + 10},${y} ${x},${(y as number) + 10} ${(x as number) - 10},${y}`} fill="#F5F0E6" opacity="0.85" />
      ))}
    </g>
  );
};

const VolcanesDeLodoMasNumerosos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[140, 240, 40], [205, 250, 55], [270, 240, 42]].map(([x, y, r], i) => (
        <g key={x as number}>
          <path d={`M${(x as number) - (r as number)} ${y} Q${x} ${(y as number) - (r as number) * 1.6} ${(x as number) + (r as number)} ${y} Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
          <ellipse cx={x} cy={(y as number) - (r as number) * 1.5} rx="8" ry="5" fill={dark} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const TorresDeLaLlamaBaku: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 Q140 170 165 130 Q175 110 185 130 Q195 170 180 250 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <path d="M185 250 Q175 150 205 95 Q215 75 225 95 Q245 150 225 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M225 250 Q218 175 240 140 Q250 122 260 140 Q272 175 255 250 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <line x1="185" y1="130" x2="225" y2="130" stroke="#F4A300" strokeWidth="2" opacity="0.7" />
      <line x1="185" y1="170" x2="225" y2="170" stroke="#F4A300" strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const CaviarEsturionDelCaspio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 170 Q160 155 220 165 Q270 172 300 180 Q270 190 220 187 Q160 185 110 170 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="290,178 315,168 315,192" fill={dark} />
      <circle cx="140" cy="167" r="3" fill="#1A1A1A" />
      <circle cx="205" cy="230" r="35" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {Array.from({ length: 10 }).map((_, i) => (
        <circle key={i} cx={190 + (i % 5) * 8} cy={220 + Math.floor(i / 5) * 12} r="3" fill="#1C2833" />
      ))}
    </g>
  );
};

const AshiqLosBardosViajeros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="200" cy="140" r="22" fill={skin} />
      <path d="M180 165 Q200 155 225 168 L235 240 L170 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="235" y1="175" x2="270" y2="90" stroke="#8B5A2B" strokeWidth="4" />
      <ellipse cx="255" cy="175" rx="26" ry="16" fill="#D9BE8F" stroke={dark} strokeWidth="2" transform="rotate(-30 255 175)" />
      <line x1="245" y1="165" x2="265" y2="185" stroke={dark} strokeWidth="1.5" opacity="0.7" />
    </g>
  );
};

const NowruzAnoNuevoPersa: IllustrationComponent = () => (
  <g>
    <ellipse cx="140" cy="245" rx="20" ry="6" fill="#F4A300" opacity="0.8" />
    <path d="M130 245 Q135 220 140 210 Q145 220 150 245 Z" fill="#E85D04" />
    <ellipse cx="270" cy="245" rx="20" ry="6" fill="#F4A300" opacity="0.8" />
    <path d="M260 245 Q265 220 270 210 Q275 220 280 245 Z" fill="#E85D04" />
    <circle cx="205" cy="150" r="18" fill="#8B5A2B" />
    <path d="M190 175 L220 175 L225 220 L235 240 L175 240 L185 220 Z" fill="#2E7D32" />
    <path d="M180 210 Q205 195 230 210" fill="none" stroke="#F5F0E6" strokeWidth="3" />
  </g>
);

const BoomPetroleroPrimerPozo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 90 L215 90 L235 190 L175 190 Z" fill="none" stroke="#5C4A3A" strokeWidth="4" />
      <line x1="180" y1="150" x2="230" y2="150" stroke="#5C4A3A" strokeWidth="3" />
      <line x1="185" y1="120" x2="225" y2="120" stroke="#5C4A3A" strokeWidth="3" />
      {[[150, 240], [180, 230], [210, 245], [240, 232], [270, 240]].map(([x, y], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 12} y={y as number} width="24" height="30" rx="3" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const GobustanArteRupestreDe40000Anos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* large rock slab */}
      <path d="M100 240 L110 130 Q205 100 300 130 L310 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* carved human figures with raised arms */}
      {[150, 205, 260].map((x) => (
        <g key={x}>
          <circle cx={x} cy="170" r="9" fill="none" stroke={dark} strokeWidth="2.5" />
          <path d={`M${x} 179 L${x} 210 M${x - 14} 190 L${x} 179 L${x + 14} 190 M${x - 10} 225 L${x} 210 L${x + 10} 225`} stroke={dark} strokeWidth="2.5" fill="none" />
        </g>
      ))}
      {/* carved boat with curved prow */}
      <path d="M140 220 Q180 205 230 220 L225 228 L145 228 Z" fill="none" stroke={dark} strokeWidth="2.5" />
      <path d="M225 224 Q235 210 228 198" fill="none" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ElShebekeVentanasDeVidrioSinClavosNiPegamento: IllustrationComponent = () => {
  const wood = "#6B4A2F";
  const colors = ["#C1272D", "#1B5E7A", "#D4AF37", "#4A7A52"];
  return (
    <g>
      {/* wooden frame */}
      <rect x="105" y="95" width="200" height="150" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="4" />
      {/* geometric grid of colored glass panes */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect key={`${row}-${col}`} x={120 + col * 44} y={110 + row * 34} width="36" height="26" fill={colors[(row + col) % colors.length]} opacity="0.75" stroke={wood} strokeWidth="3" />
        ))
      )}
      {/* central star motif overlay */}
      <path d="M205 145 L225 165 L205 185 L185 165 Z" fill="none" stroke="#F5F0E6" strokeWidth="2.5" opacity="0.8" />
    </g>
  );
};

const ElTeEnVasoArmuduRitualCotidiano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const tea = "#A0522D";
  return (
    <g>
      {/* pear-shaped glass outline */}
      <path d="M175 235 Q160 210 175 185 Q168 160 190 145 Q205 138 220 145 Q242 160 235 185 Q250 210 235 235 Z" fill="none" stroke={dark} strokeWidth="3" />
      {/* tea fill */}
      <path d="M178 232 Q165 210 178 187 Q172 163 190 149 L190 232 Z" fill={tea} opacity="0.85" />
      <path d="M232 232 Q245 210 232 187 Q238 163 220 149 L220 232 Z" fill={tea} opacity="0.85" />
      <path d="M190 149 Q205 141 220 149 L220 232 L190 232 Z" fill={tea} opacity="0.9" />
      {/* plate with jam beside */}
      <ellipse cx="280" cy="225" rx="30" ry="10" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="280" cy="222" r="10" fill="#8B1A2B" opacity="0.85" />
    </g>
  );
};

const ElPlovAzerbaiyanoArrozConCostraDorada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const crust = "#B5651D";
  return (
    <g>
      {/* overturned pot revealing the golden crust dome */}
      <path d="M140 210 Q140 150 205 145 Q270 150 270 210 Q270 235 205 240 Q140 235 140 210 Z" fill={crust} stroke={shade(crust, 0.3)} strokeWidth="3" />
      {/* rice on top */}
      <ellipse cx="205" cy="175" rx="60" ry="20" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      {[
        [170, 168],
        [190, 172],
        [210, 166],
        [230, 172],
        [245, 178],
      ].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="6" ry="3" fill="#E8D2A0" opacity="0.85" />
      ))}
      {/* dried apricots and raisins */}
      <circle cx="185" cy="182" r="4" fill="#D9A521" />
      <circle cx="225" cy="185" r="4" fill="#3E2712" />
    </g>
  );
};

const ElMughamElGeneroMusicalClasicoAzerbaiyano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* singer */}
      <circle cx="150" cy="140" r="16" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M132 155 Q150 145 168 155 L163 235 L137 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* tar player */}
      <circle cx="260" cy="150" r="15" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M245 163 Q260 155 275 163 L270 235 L250 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      {/* figure-eight tar body: two overlapping circles */}
      <circle cx="265" cy="200" r="22" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      <circle cx="278" cy="228" r="17" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      <line x1="270" y1="182" x2="298" y2="150" stroke={wood} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

export const azerbaijanIllustrations: Record<string, IllustrationDefinition> = {
  "baku-bajo-el-nivel-del-mar": { component: BakuBajoElNivelDelMar },
  "yanar-dag-montana-en-llamas": { component: YanarDagMontanaEnLlamas },
  "ateshgah-templo-del-fuego": { component: AteshgahTemploDelFuego },
  "alfombras-azerbaiyanas-unesco": { component: AlfombrasAzerbaiyanasUnesco },
  "volcanes-de-lodo-mas-numerosos": { component: VolcanesDeLodoMasNumerosos },
  "torres-de-la-llama-baku": { component: TorresDeLaLlamaBaku },
  "caviar-esturion-del-caspio": { component: CaviarEsturionDelCaspio },
  "ashiq-los-bardos-viajeros": { component: AshiqLosBardosViajeros },
  "nowruz-ano-nuevo-persa": { component: NowruzAnoNuevoPersa },
  "boom-petrolero-primer-pozo": { component: BoomPetroleroPrimerPozo },
  "gobustan-arte-rupestre-de-40000-anos": { component: GobustanArteRupestreDe40000Anos },
  "el-shebeke-ventanas-de-vidrio-sin-clavos-ni-pegamento": { component: ElShebekeVentanasDeVidrioSinClavosNiPegamento },
  "el-te-en-vaso-armudu-ritual-cotidiano": { component: ElTeEnVasoArmuduRitualCotidiano },
  "el-plov-azerbaiyano-arroz-con-costra-dorada": { component: ElPlovAzerbaiyanoArrozConCostraDorada },
  "el-mugham-el-genero-musical-clasico-azerbaiyano": { component: ElMughamElGeneroMusicalClasicoAzerbaiyano },
};
