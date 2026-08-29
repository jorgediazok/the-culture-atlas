import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ArirangJuegosMasivos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4C430", "#1565C0", "#fff"];
  return (
    <g>
      {/* stadium bowl */}
      <path d="M95 245 Q205 210 320 245 L320 250 L95 250 Z" fill={dark} />
      <path d="M95 245 Q205 150 320 245" fill="none" stroke={dark} strokeWidth="14" />
      {/* colored card grid forming a pattern */}
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((col) => {
          const cx = 120 + col * 26;
          const cy = 225 - row * 16 - Math.abs(col - 3.5) * 4;
          if (cy < 160) return null;
          return <rect key={`${row}-${col}`} x={cx} y={cy} width="20" height="12" fill={colors[(row + col) % colors.length]} />;
        })
      )}
    </g>
  );
};

const Naengmyeon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  const yellow = "#F4C430";
  return (
    <g>
      <path d="M120 185 Q120 235 205 235 Q290 235 290 185 Z" fill={light} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="185" rx="85" ry="18" fill={accentColor} opacity="0.7" />
      {/* noodle coils */}
      <path d="M160 178 Q170 165 160 155 Q150 168 160 178" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M190 178 Q200 165 190 152 Q178 167 190 178" fill="none" stroke={dark} strokeWidth="4" />
      {/* ice cubes */}
      <rect x="220" y="168" width="14" height="14" fill="#fff" opacity="0.8" transform="rotate(15 227 175)" />
      <rect x="240" y="178" width="14" height="14" fill="#fff" opacity="0.75" transform="rotate(-10 247 185)" />
      {/* egg slices */}
      <circle cx="215" cy="198" r="12" fill={yellow} stroke={dark} strokeWidth="1.5" />
      <circle cx="215" cy="198" r="5" fill="#F4A300" />
    </g>
  );
};

const EstadioRungrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="105" ry="45" fill={light} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="200" rx="70" ry="28" fill={accentColor} opacity="0.5" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M${115 + i * 30} 200 Q${130 + i * 30} 130 ${145 + i * 30} 200`}
          fill="none"
          stroke={dark}
          strokeWidth="6"
        />
      ))}
    </g>
  );
};

const MontePaektu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#1D6FA5";
  const snow = "#F5F0E6";
  return (
    <g>
      <polygon points="95,240 205,110 320,240" fill={dark} />
      <polygon points="160,180 205,110 250,180" fill={snow} opacity="0.7" />
      {/* crater lake, deep blue */}
      <ellipse cx="205" cy="195" rx="55" ry="30" fill={water} stroke={shade(water, 0.3)} strokeWidth="2" />
      <ellipse cx="205" cy="190" rx="35" ry="16" fill={tint(water, 0.3)} opacity="0.6" />
    </g>
  );
};

const IdeologiaJuche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      <rect x="130" y="150" width="90" height="70" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="150" width="12" height="70" fill={dark} />
      {/* torch beside it */}
      <rect x="260" y="180" width="16" height="55" fill="#8B5A2B" />
      <path d="M268 180 Q255 160 268 138 Q273 155 275 145 Q282 160 268 180 Z" fill={flame} />
    </g>
  );
};

const ArquitecturaPyongyang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* pyramidal tower */}
      <polygon points="205,100 240,235 170,235" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={195 + i * 3} y1={130 + i * 22} x2={215 - i * 3} y2={130 + i * 22} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* symmetrical buildings beside it */}
      <rect x="115" y="175" width="40" height="60" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="255" y="175" width="40" height="60" fill={light} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const TaekwondoNorcoreano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* knotted belt */}
      <path d="M115 170 Q205 155 295 170" fill="none" stroke={accentColor} strokeWidth="16" strokeLinecap="round" />
      <path d="M195 170 Q205 185 195 200 M215 170 Q205 185 215 200" fill="none" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
      <circle cx="205" cy="172" r="10" fill={dark} />
      {/* split wooden board */}
      <path d="M150 220 L245 210 L250 232 L155 242 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      <path d="M195 213 L205 240" stroke={dark} strokeWidth="3" strokeDasharray="4 3" />
    </g>
  );
};

const SistemaSongbun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#8B0000";
  return (
    <g>
      <path d="M130 130 L280 130 L280 220 L205 235 L130 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="115" width="150" height="20" fill={dark} />
      <circle cx="205" cy="175" r="26" fill="none" stroke={red} strokeWidth="4" />
      <text x="205" y="183" fontSize="20" fontWeight="700" fill={red} textAnchor="middle" fontFamily="serif">印</text>
    </g>
  );
};

const TurismoRestringido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* closed passport */}
      <rect x="130" y="130" width="90" height="110" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="175" cy="175" r="18" fill="none" stroke={light} strokeWidth="2" />
      <path d="M175 165 L175 195 M165 175 L185 175" stroke={light} strokeWidth="2" />
      {/* camera beside it */}
      <rect x="245" y="165" width="60" height="45" rx="4" fill={dark} />
      <circle cx="275" cy="188" r="16" fill={light} stroke={shade(light, 0.2)} strokeWidth="2" />
      <circle cx="275" cy="188" r="8" fill={dark} />
      <rect x="260" y="155" width="16" height="12" fill={dark} />
    </g>
  );
};

const ZonaDesmilitarizada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* barbed wire fence */}
      {[130, 160, 190, 220, 250, 280].map((x) => (
        <line key={x} x1={x} y1="240" x2={x} y2="150" stroke={dark} strokeWidth="3" />
      ))}
      <line x1="115" y1="170" x2="300" y2="170" stroke={dark} strokeWidth="3" />
      <line x1="115" y1="200" x2="300" y2="200" stroke={dark} strokeWidth="3" />
      {[130, 160, 190, 220, 250, 280].map((x) => (
        <g key={`barb-${x}`}>
          <line x1={x - 8} y1="170" x2={x + 8} y2="164" stroke={dark} strokeWidth="2" />
          <line x1={x - 8} y1="200" x2={x + 8} y2="194" stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {/* watchtower */}
      <rect x="245" y="110" width="50" height="30" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M255 140 L245 240 M285 140 L295 240" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LasTumbasDeGoguryeoYSusMuralesMilenarios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#8C8C7A";
  return (
    <g>
      {/* stone chamber walls */}
      <rect x="95" y="90" width="220" height="150" fill={stone} stroke={dark} strokeWidth="3" />
      {/* painted blue dragon mural on left wall */}
      <path d="M120 190 Q135 150 165 155 Q185 158 180 180 Q195 175 200 195 Q180 210 155 200 Q130 210 120 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* painted white tiger mural on right wall */}
      <path d="M290 190 Q275 150 245 155 Q225 158 230 180 Q215 175 210 195 Q230 210 255 200 Q280 210 290 190 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {/* floral/geometric border */}
      {[120, 160, 200, 240, 280].map((x) => (
        <circle key={x} cx={x} cy="110" r="6" fill="#C1272D" opacity="0.7" />
      ))}
    </g>
  );
};

const ElGinsengDeKaesongCultivadoDuranteSiglos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leaf = "#4A7A52";
  return (
    <g>
      {/* human-shaped root */}
      <path d="M205 130 Q195 150 200 175 Q185 180 175 205 Q180 215 190 210 Q195 225 205 240 Q215 225 220 210 Q230 215 235 205 Q225 180 210 175 Q215 150 205 130 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* root tendrils */}
      <path d="M185 210 Q175 220 170 235 M225 210 Q235 220 240 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* leaves sprouting on top */}
      <line x1="205" y1="130" x2="205" y2="100" stroke={leaf} strokeWidth="4" />
      {[
        [190, 95],
        [220, 95],
        [205, 80],
      ].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} Q${x + 10} ${y - 8} ${x + 18} ${y} Q${x + 10} ${y + 8} ${x} ${y} Z`} fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElSsireumLaLuchaTradicionalCoreana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  return (
    <g>
      {/* sand ring */}
      <ellipse cx="205" cy="230" rx="110" ry="16" fill="#E8D2A0" opacity="0.6" />
      {/* wrestler 1 */}
      <circle cx="175" cy="155" r="15" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M160 168 Q175 160 190 168 L195 220 L155 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* wrestler 2, grappling from the right */}
      <circle cx="245" cy="160" r="15" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M230 173 Q245 165 260 173 L255 222 L220 222 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      {/* satba belt and gripping arms */}
      <path d="M190 195 Q210 205 230 195" fill="none" stroke="#C1272D" strokeWidth="8" strokeLinecap="round" />
      <path d="M185 185 L215 210 M225 185 L195 210" stroke={skin} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const ElMonteKumgangLaMontanaDeLosDiamantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mist = "#E8E4DC";
  return (
    <g>
      {/* jagged peaks */}
      <polygon points="90,240 130,140 160,190 200,90 240,180 270,130 320,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* mist bands */}
      <ellipse cx="150" cy="195" rx="70" ry="12" fill={mist} opacity="0.7" />
      <ellipse cx="260" cy="210" rx="60" ry="10" fill={mist} opacity="0.7" />
      {/* waterfall */}
      <path d="M205 90 L200 170 L212 170 L205 90 Z" fill="#A8D8E0" opacity="0.85" />
      <ellipse cx="205" cy="175" rx="18" ry="6" fill="#A8D8E0" opacity="0.7" />
    </g>
  );
};

const ElCeladonDeGoryeoLaCeramicaColorJade: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const inlay = "#F5F0E6";
  return (
    <g>
      {/* vase body */}
      <path d="M175 240 Q160 200 175 165 Q165 140 205 135 Q245 140 235 165 Q250 200 235 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* neck */}
      <path d="M190 135 Q205 120 220 135 L218 145 L192 145 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* inlaid crane/floral motif */}
      <path d="M190 190 Q205 175 220 190" fill="none" stroke={inlay} strokeWidth="4" opacity="0.9" />
      <circle cx="205" cy="210" r="10" fill="none" stroke={inlay} strokeWidth="3" opacity="0.85" />
      {[
        [185, 205],
        [225, 205],
      ].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} Q${x + 6} ${y - 8} ${x + 12} ${y}`} fill="none" stroke={inlay} strokeWidth="2.5" opacity="0.8" />
      ))}
    </g>
  );
};

export const northKoreaIllustrations: Record<string, IllustrationDefinition> = {
  "arirang-juegos-masivos": { component: ArirangJuegosMasivos },
  naengmyeon: { component: Naengmyeon },
  "estadio-rungrado": { component: EstadioRungrado },
  "monte-paektu": { component: MontePaektu },
  "ideologia-juche": { component: IdeologiaJuche },
  "arquitectura-pyongyang": { component: ArquitecturaPyongyang },
  "taekwondo-norcoreano": { component: TaekwondoNorcoreano },
  "sistema-songbun": { component: SistemaSongbun },
  "turismo-restringido": { component: TurismoRestringido },
  "zona-desmilitarizada": { component: ZonaDesmilitarizada },
  "las-tumbas-de-goguryeo-y-sus-murales-milenarios": { component: LasTumbasDeGoguryeoYSusMuralesMilenarios },
  "el-ginseng-de-kaesong-cultivado-durante-siglos": { component: ElGinsengDeKaesongCultivadoDuranteSiglos },
  "el-ssireum-la-lucha-tradicional-coreana": { component: ElSsireumLaLuchaTradicionalCoreana },
  "el-monte-kumgang-la-montana-de-los-diamantes": { component: ElMonteKumgangLaMontanaDeLosDiamantes },
  "el-celadon-de-goryeo-la-ceramica-color-jade": { component: ElCeladonDeGoryeoLaCeramicaColorJade },
};
