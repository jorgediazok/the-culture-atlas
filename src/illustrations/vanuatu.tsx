import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LandDivingPentecost: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M150 240 L150 115 L165 100 L165 240 M235 240 L235 110 L250 100 L250 240" stroke="#8B5A2B" strokeWidth="5" fill="none" />
      {[130, 165, 200].map((y) => (
        <line key={y} x1="150" y1={y} x2="250" y2={y - 8} stroke="#8B5A2B" strokeWidth="4" />
      ))}
      <circle cx="200" cy="140" r="10" fill={skin} />
      <path d="M188 152 Q200 148 212 152 L208 190 L192 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M192 190 Q195 220 192 235 M208 190 Q205 220 208 235" stroke="#4A8F4E" strokeWidth="3" fill="none" />
      <path d="M188 165 L165 155 M212 165 L235 155" stroke={skin} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const CultoCargoJohnFrum: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#C1272D";
  return (
    <g>
      <rect x="140" y="130" width="90" height="60" fill="#3D5A9C" stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="140" y={130 + i * 15} width="90" height="7.5" fill={i % 2 === 0 ? "#fff" : "#C1272D"} opacity="0.6" />
      ))}
      {[[160, 150], [180, 145], [200, 155]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="3" fill="#fff" />
      ))}
      <line x1="270" y1="230" x2="270" y2="140" stroke="#8B5A2B" strokeWidth="4" />
      <line x1="255" y1="165" x2="285" y2="165" stroke={red} strokeWidth="8" />
    </g>
  );
};

const PaisMasFelizPlaneta: IllustrationComponent = () => {
  const gold = "#F4A300";
  return (
    <g>
      <path d="M90 240 Q205 225 320 240 L320 250 L90 250 Z" fill="#4A8F4E" opacity="0.4" />
      <circle cx="205" cy="165" r="42" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <circle cx="190" cy="155" r="4" fill="#1A1A1A" />
      <circle cx="220" cy="155" r="4" fill="#1A1A1A" />
      <path d="M185 178 Q205 195 225 178" fill="none" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1="205" y1="120" x2="205" y2="105" stroke={gold} strokeWidth="4" transform={`rotate(${deg} 205 165)`} />
      ))}
    </g>
  );
};

const VolcanYasur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const lava = "#F4A300";
  return (
    <g>
      <polygon points="110,240 205,120 300,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="170,170 205,120 240,170" fill={dark} opacity="0.5" />
      <path d="M195 130 Q188 110 200 90 Q198 105 210 95 Q205 118 200 130 Z" fill={lava} />
      <path d="M180 135 Q175 118 185 105 M225 130 Q232 115 222 100" stroke={lava} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M175 175 Q185 190 175 235 L195 235 Q200 195 195 175 Z" fill={lava} opacity="0.7" />
    </g>
  );
};

const IdiomasVanuatu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA", "#C1272D"];
  return (
    <g>
      {[[140, 190, 0], [190, 155, 1], [240, 195, 2], [180, 225, 3], [270, 150, 4]].map(([x, y, i], idx) => (
        <path key={idx} d={`M${(x as number) - 28} ${(y as number) - 17} Q${(x as number) - 32} ${y} ${(x as number) - 13} ${y} L${(x as number) - 8} ${y} L${(x as number) - 11} ${(y as number) + 11} L${x} ${y} L${(x as number) + 28} ${y} Q${(x as number) + 32} ${y} ${(x as number) + 32} ${(y as number) - 17} Q${(x as number) + 32} ${(y as number) - 32} ${(x as number) + 28} ${(y as number) - 32} L${(x as number) - 28} ${(y as number) - 32} Q${(x as number) - 32} ${(y as number) - 32} ${(x as number) - 28} ${(y as number) - 17} Z`} fill={colors[i as number]} stroke={dark} strokeWidth="1.5" opacity="0.9" />
      ))}
    </g>
  );
};

// Ripple points around two splash centers, precomputed offline.
const RIPPLE_A: [number, number][] = [[150, 210], [170, 195], [185, 215], [160, 230], [135, 225]];
const RIPPLE_B: [number, number][] = [[255, 200], [275, 190], [285, 210], [265, 225], [240, 218]];

const MusicaAguaMujeres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={water} opacity="0.6" />
      {[RIPPLE_A, RIPPLE_B].map((points, gi) => (
        <g key={gi}>
          {points.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={6 + i} fill="none" stroke={tint(water, 0.3)} strokeWidth="1.5" opacity={0.7 - i * 0.1} />
          ))}
        </g>
      ))}
      <circle cx="160" cy="185" r="10" fill={skin} />
      <path d="M150 195 Q160 190 170 195 L166 210 L154 210 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="265" cy="180" r="10" fill={skin} />
      <path d="M255 190 Q265 185 275 190 L271 205 L259 205 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BislamaIdioma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const parchment = "#E8DCC0";
  return (
    <g>
      <path d="M130 130 Q120 135 120 150 L120 220 Q120 235 130 240 L280 240 Q290 235 290 220 L290 150 Q290 135 280 130 Z" fill={parchment} stroke={dark} strokeWidth="3" />
      <text x="150" y="175" fontSize="18" fontWeight="700" fill={accentColor} fontFamily="serif">gud</text>
      <text x="210" y="200" fontSize="18" fontWeight="700" fill={shade(accentColor, 0.2)} fontFamily="serif">moning</text>
    </g>
  );
};

const BuceoPresidentCoolidge: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.7" />
      <path d="M120 200 L290 200 L275 220 L145 220 Z" fill={dark} opacity="0.7" />
      <rect x="160" y="175" width="16" height="28" fill={dark} opacity="0.7" />
      <rect x="220" y="180" width="14" height="22" fill={dark} opacity="0.7" />
      {[[150, 205], [190, 195], [230, 210], [260, 200]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="6" fill={accentColor} opacity="0.6" />
      ))}
      <path d="M170 235 Q175 225 185 223 M240 232 Q245 222 255 220" fill="none" stroke="#F4A300" strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const IndependenciaCondominio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="180" width="110" height="60" fill={dark} opacity="0.3" />
      <line x1="170" y1="180" x2="170" y2="120" stroke={dark} strokeWidth="4" />
      <line x1="240" y1="180" x2="240" y2="115" stroke={dark} strokeWidth="4" />
      <g>
        <rect x="170" y="120" width="24" height="14" fill="#0055A4" />
        <rect x="194" y="120" width="24" height="14" fill="#fff" />
        <rect x="218" y="120" width="24" height="14" fill="#EF4135" />
      </g>
      <g>
        <rect x="240" y="115" width="60" height="35" fill={accentColor} />
        <rect x="240" y="115" width="60" height="12" fill="#00247D" />
        <rect x="240" y="138" width="60" height="12" fill="#C1272D" />
      </g>
    </g>
  );
};

const VulnerabilidadDesastres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cloud = "#8B8378";
  return (
    <g>
      <ellipse cx="150" cy="120" rx="55" ry="24" fill={cloud} opacity="0.75" />
      <ellipse cx="255" cy="110" rx="45" ry="20" fill={cloud} opacity="0.65" />
      <path d="M150 145 L130 175 M160 145 L145 180 M180 145 L170 175" stroke="#1D6FA5" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M165 235 L165 200 L205 175 L245 200 L245 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="195" y="210" width="20" height="25" fill={dark} opacity="0.5" />
    </g>
  );
};

const NitusDibujoArena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9BE8F";
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={sand} />
      <path d="M140 220 L140 150 L270 150 L270 190 L180 190 L180 220 L240 220 L240 170" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M225 160 Q235 150 245 158" fill={skin} stroke={dark} strokeWidth="2" />
      <ellipse cx="240" cy="168" rx="9" ry="13" fill={skin} stroke={dark} strokeWidth="2" transform="rotate(20 240 168)" />
    </g>
  );
};

const ColmilloCerdoCirculo: IllustrationComponent = () => {
  const ivory = "#F0E6D2";
  return (
    <g>
      <path d="M205 115 Q260 120 268 175 Q272 220 225 235 Q185 245 165 210 Q152 185 170 165" fill="none" stroke={ivory} strokeWidth="18" strokeLinecap="round" />
      <path d="M150 200 Q135 190 130 170 Q145 175 155 190 Z" fill="#4A8F4E" stroke={shade("#4A8F4E", 0.3)} strokeWidth="2" />
      <path d="M150 210 Q132 212 122 200 Q138 198 150 205 Z" fill="#4A8F4E" stroke={shade("#4A8F4E", 0.3)} strokeWidth="2" />
    </g>
  );
};

const NakamalKava: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const thatch = "#8B5A2B";
  const skin = "#6B4423";
  const liquid = "#8B5A2B";
  return (
    <g>
      <path d="M110 175 L205 110 L300 175 L280 185 L205 135 L130 185 Z" fill={thatch} stroke={shade(thatch, 0.3)} strokeWidth="3" />
      <line x1="140" y1="185" x2="140" y2="240" stroke={dark} strokeWidth="4" />
      <line x1="270" y1="185" x2="270" y2="240" stroke={dark} strokeWidth="4" />
      <ellipse cx="205" cy="222" rx="38" ry="11" fill={liquid} stroke={shade(liquid, 0.3)} strokeWidth="2" />
      {[[160, 235], [250, 235]].map(([x, y]) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 30} r="10" fill={skin} />
          <path d={`M${(x as number) - 14} ${(y as number) - 12} Q${x} ${(y as number) - 20} ${(x as number) + 14} ${(y as number) - 12} L${(x as number) + 10} ${y} L${(x as number) - 10} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const MascarasRomAmbrym: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leaf = "#7A9A4A";
  return (
    <g>
      <path d="M205 110 L165 235 L245 235 Z" fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="3" />
      {[130, 150, 170, 190, 210].map((y, i) => (
        <path key={y} d={`M${175 - i * 2} ${y + 20} Q205 ${y + 8} ${235 + i * 2} ${y + 20}`} fill="none" stroke={shade(leaf, 0.35)} strokeWidth="2" opacity="0.5" />
      ))}
      <path d="M188 128 Q205 118 222 128 L218 165 Q205 175 192 165 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="197" cy="140" r="3" fill="#1A1A1A" />
      <circle cx="213" cy="140" r="3" fill="#1A1A1A" />
      <path d="M198 155 Q205 160 212 155" stroke="#1A1A1A" strokeWidth="2" fill="none" />
    </g>
  );
};

const PasaportesPorInversion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      <rect x="140" y="120" width="90" height="120" rx="6" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="185" cy="160" r="16" fill="none" stroke="#F5F0E6" strokeWidth="2.5" />
      <path d="M175 160 L182 168 L196 148" fill="none" stroke="#F5F0E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="160" y1="200" x2="210" y2="200" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
      <line x1="160" y1="212" x2="200" y2="212" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
      {[[255, 220], [280, 205], [270, 235]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r={14 - i} fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      ))}
    </g>
  );
};

export const vanuatuIllustrations: Record<string, IllustrationDefinition> = {
  "land-diving-pentecost": { component: LandDivingPentecost },
  "culto-cargo-john-frum": { component: CultoCargoJohnFrum },
  "pais-mas-feliz-planeta": { component: PaisMasFelizPlaneta },
  "volcan-yasur": { component: VolcanYasur },
  "idiomas-vanuatu": { component: IdiomasVanuatu },
  "musica-agua-mujeres": { component: MusicaAguaMujeres },
  "bislama-idioma": { component: BislamaIdioma },
  "buceo-president-coolidge": { component: BuceoPresidentCoolidge },
  "independencia-condominio": { component: IndependenciaCondominio },
  "vulnerabilidad-desastres": { component: VulnerabilidadDesastres },
  "el-dibujo-en-arena-nitus": { component: NitusDibujoArena },
  "el-colmillo-de-cerdo-moneda-y-bandera": { component: ColmilloCerdoCirculo },
  "los-nakamal-y-el-origen-del-kava": { component: NakamalKava },
  "las-mascaras-rom-de-ambrym": { component: MascarasRomAmbrym },
  "pasaportes-por-inversion": { component: PasaportesPorInversion },
};
