import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DinastiaImperialMasAntigua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* golden folding fan */}
      {[-70, -45, -20, 5, 30, 55, 80].map((deg) => (
        <path key={deg} d="M205 225 L200 130 L210 130 Z" fill={gold} transform={`rotate(${deg} 205 225)`} />
      ))}
      <path d="M140 225 Q205 245 270 225" fill="none" stroke={dark} strokeWidth="4" />
      {/* red lacquer seal beside it */}
      <rect x="255" y="150" width="45" height="45" rx="4" fill="#B71C1C" stroke={shade("#B71C1C", 0.3)} strokeWidth="2" />
      <text x="277" y="180" fontSize="20" fontWeight="700" fill="#F5EFE0" textAnchor="middle" fontFamily="serif">印</text>
    </g>
  );
};

const ShinkansenPuntualidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M115 210 Q98 200 115 185 L165 172 L295 172 L295 210 Z" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <path d="M115 185 Q140 176 165 176" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <rect x="175" y="180" width="100" height="6" fill={accentColor} />
      {[190, 220, 250, 275].map((x) => (
        <rect key={x} x={x} y="188" width="18" height="14" fill={light} />
      ))}
      <line x1="95" y1="220" x2="320" y2="220" stroke={dark} strokeWidth="4" />
      <line x1="95" y1="200" x2="65" y2="200" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <line x1="95" y1="212" x2="75" y2="212" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.35" />
    </g>
  );
};

const SumoDeporteSagrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* mawashi belt, knotted */}
      <path d="M120 185 Q205 170 290 185 L290 220 Q205 205 120 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="200" rx="20" ry="16" fill={dark} />
      <path d="M205 200 L205 235" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      {/* grains of salt beside it */}
      {[[260, 145], [275, 155], [250, 158], [268, 165]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill={light} stroke={dark} strokeWidth="1" />
      ))}
    </g>
  );
};

const OnsenCulturaTermal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const steam = "#E8E4DC";
  return (
    <g>
      <ellipse cx="205" cy="205" rx="95" ry="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="200" rx="72" ry="24" fill={light} opacity="0.8" />
      {[[130, 195], [150, 170], [265, 190], [280, 165]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="14" fill={dark} />
      ))}
      <path d="M180 175 Q170 155 180 135 M220 175 Q225 155 218 138" fill="none" stroke={steam} strokeWidth="5" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const KintsugiArteDeReparar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const cracks = "M170 150 Q190 175 180 210 M230 155 Q210 180 220 220 M205 118 Q205 160 205 235";
  return (
    <g>
      <path d="M155 235 Q140 200 150 160 Q160 125 205 118 Q250 125 260 160 Q270 200 255 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* a dark halo under the gold crack lines keeps them visible even when an entry's own
          accentColor happens to be the same gold as the crack color (as it is here) */}
      <path d={cracks} stroke={dark} strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d={cracks} stroke={gold} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </g>
  );
};

const IkigaiRazonDeSer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M95 220 Q210 200 320 220" stroke={dark} strokeWidth="2" opacity="0.4" fill="none" />
      <circle cx="205" cy="200" r="46" fill={accentColor} />
      {[0, 30, 60, 90, 120, 150].map((deg) => (
        <line key={deg} x1="205" y1="200" x2="205" y2="140" stroke={accentColor} strokeWidth="4" opacity="0.6" transform={`rotate(${deg} 205 200)`} />
      ))}
      {/* small compass beside it */}
      <circle cx="285" cy="150" r="22" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="285,135 291,150 285,165 279,150" fill={dark} />
    </g>
  );
};

const MangaYAnimeInfluenciaGlobal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="115" y="105" width="180" height="140" fill={light} stroke={dark} strokeWidth="3" />
      <circle cx="175" cy="165" r="24" fill={accentColor} />
      <circle cx="167" cy="160" r="3" fill={dark} />
      <circle cx="185" cy="160" r="3" fill={dark} />
      {[210, 225, 240, 255].map((x) => (
        <line key={x} x1={x} y1="140" x2={x + 40} y2="150" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      ))}
      {[210, 225, 240].map((x) => (
        <line key={x} x1={x} y1="200" x2={x + 45} y2="192" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      ))}
    </g>
  );
};

const HanamiFlorDeCerezo: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <path d="M115 235 Q140 190 130 145 Q125 115 155 95" fill="none" stroke="#6B4423" strokeWidth="7" strokeLinecap="round" />
      {[[135, 140], [122, 165], [150, 115], [165, 100], [175, 130]].map(([x, y]) => (
        <g key={x}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 7} rx="6" ry="8" fill={accentColor} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      {/* falling petals */}
      {[[220, 130], [250, 170], [280, 120], [260, 210]].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="6" ry="8" fill={accentColor} opacity="0.8" transform={`rotate(30 ${x} ${y})`} />
      ))}
    </g>
  );
};

const OrigamiArteDelPapel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      {/* origami crane */}
      <polygon points="205,150 260,200 205,235 150,200" fill={accentColor} stroke={dark} strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="205,150 260,200 205,180" fill={light} opacity="0.6" />
      <polygon points="260,200 300,175 275,195" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="150,200 118,180 140,200" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="205,180 195,120 215,140" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CeremoniaDelTe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#6B9B4A";
  return (
    <g>
      <path d="M155 200 Q155 235 205 235 Q255 235 255 200 L255 180 L155 180 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="180" rx="50" ry="14" fill={green} stroke={dark} strokeWidth="2" />
      {/* bamboo whisk beside it */}
      <line x1="290" y1="235" x2="290" y2="160" stroke="#8B5A2B" strokeWidth="6" />
      {[-8, -4, 0, 4, 8].map((dx) => (
        <path key={dx} d={`M${290 + dx} 160 Q${290 + dx * 1.5} 130 ${290 + dx * 0.6} 118`} fill="none" stroke="#C9A66B" strokeWidth="2" />
      ))}
    </g>
  );
};

const MonteFujiLaMontanaSagrada: IllustrationComponent = () => {
  const snow = "#F5F0E6";
  const rock = "#5C6B73";
  const dark = shade(rock, 0.3);
  const sky = "#F4A300";
  return (
    <g>
      {/* sunrise glow */}
      <circle cx="205" cy="150" r="45" fill={sky} opacity="0.25" />
      {/* mountain */}
      <polygon points="90,240 205,95 320,240" fill={rock} stroke={dark} strokeWidth="2.5" />
      {/* snow cap */}
      <path d="M205 95 L245 155 Q230 165 215 155 Q205 165 195 155 Q180 165 165 155 Z" fill={snow} stroke={dark} strokeWidth="2" />
      {/* small pilgrims climbing the trail */}
      {[
        [165, 200],
        [185, 215],
        [150, 225],
      ].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y - 8} r="4" fill={dark} />
          <path d={`M${x - 4} ${y} L${x} ${y - 6} L${x + 4} ${y} Z`} fill={dark} />
        </g>
      ))}
    </g>
  );
};

const SamuraiYElCodigoBushido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const metal = "#78909C";
  const gold = "#D4A017";
  return (
    <g>
      {/* helmet (kabuto) */}
      <path d="M165 140 Q205 105 245 140 L250 165 Q205 155 160 165 Z" fill={metal} stroke={dark} strokeWidth="2.5" />
      {/* horns */}
      <path d="M180 138 Q165 105 150 95" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      <path d="M230 138 Q245 105 260 95" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      {/* face mask */}
      <path d="M180 165 Q205 158 230 165 L225 195 Q205 202 185 195 Z" fill={dark} />
      {/* sheathed sword beside it */}
      <rect x="120" y="200" width="120" height="12" rx="4" fill={accentColor} stroke={dark} strokeWidth="2" transform="rotate(-8 180 206)" />
      <rect x="105" y="196" width="24" height="20" fill={gold} stroke={dark} strokeWidth="2" transform="rotate(-8 117 206)" />
      <line x1="240" y1="197" x2="255" y2="230" stroke={dark} strokeWidth="4" strokeLinecap="round" transform="rotate(-8 180 206)" />
    </g>
  );
};

const ElKaraokeInventoJapones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* screen with lyrics */}
      <rect x="130" y="95" width="150" height="95" fill={light} stroke={dark} strokeWidth="2.5" />
      <rect x="145" y="115" width="110" height="8" fill={dark} opacity="0.4" />
      <rect x="145" y="135" width="90" height="8" fill={dark} opacity="0.9" />
      <rect x="145" y="155" width="105" height="8" fill={dark} opacity="0.4" />
      <rect x="185" y="190" width="20" height="14" fill={dark} />
      {/* microphone */}
      <ellipse cx="235" cy="225" rx="22" ry="26" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[210, 218, 226, 234, 242].map((y) => (
        <line key={y} x1="220" y1={y} x2="250" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
    </g>
  );
};

const SushiYWashokuPatrimonioCulinario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const rice = "#F5F0E6";
  const nori = "#1A1A1A";
  const salmon = "#E8875A";
  const roe = "#E85D2A";
  return (
    <g>
      {/* wooden board */}
      <rect x="90" y="215" width="230" height="20" rx="4" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {/* nigiri with salmon */}
      <ellipse cx="140" cy="205" rx="30" ry="16" fill={rice} stroke={dark} strokeWidth="2" />
      <path d="M113 200 Q140 185 167 200 Q167 210 140 212 Q113 210 113 200 Z" fill={salmon} stroke={dark} strokeWidth="1.5" />
      {/* nigiri with a nori belt */}
      <ellipse cx="205" cy="205" rx="30" ry="16" fill={rice} stroke={dark} strokeWidth="2" />
      <rect x="190" y="192" width="30" height="24" fill={nori} />
      <circle cx="205" cy="196" r="6" fill="#F5E7B8" />
      {/* maki roll */}
      <circle cx="270" cy="205" r="22" fill={nori} stroke={dark} strokeWidth="2" />
      <circle cx="270" cy="205" r="15" fill={rice} />
      <circle cx="270" cy="205" r="6" fill={roe} />
    </g>
  );
};

const FushimiInariLosMilTorii: IllustrationComponent = () => {
  const vermilion = "#D9481F";
  const dark = shade(vermilion, 0.4);
  const gates = [
    { scale: 0.45, y: 85 },
    { scale: 0.6, y: 108 },
    { scale: 0.78, y: 136 },
    { scale: 1, y: 170 },
  ];
  return (
    <g>
      {gates.map((g, i) => {
        const width = 170 * g.scale;
        const cx = 205;
        const legH = 60 * g.scale;
        return (
          <g key={i}>
            <rect x={cx - width / 2 - 8 * g.scale} y={g.y + 16 * g.scale} width={width + 16 * g.scale} height={10 * g.scale} fill={vermilion} stroke={dark} strokeWidth="1.5" />
            <rect x={cx - width / 2} y={g.y} width={width} height={10 * g.scale} fill={vermilion} stroke={dark} strokeWidth="1.5" />
            <rect x={cx - width / 2 + 6 * g.scale} y={g.y + 10 * g.scale} width={9 * g.scale} height={legH} fill={vermilion} stroke={dark} strokeWidth="1.5" />
            <rect x={cx + width / 2 - 15 * g.scale} y={g.y + 10 * g.scale} width={9 * g.scale} height={legH} fill={vermilion} stroke={dark} strokeWidth="1.5" />
          </g>
        );
      })}
    </g>
  );
};

const JudoElArteMarcialOlimpico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const white = "#F5F0E6";
  return (
    <g>
      {/* mat */}
      <rect x="90" y="225" width="230" height="20" fill={accentColor} opacity="0.4" />
      {/* thrower, standing and gripping */}
      <circle cx="160" cy="140" r="14" fill={skin} />
      <path d="M146 152 Q160 145 174 152 L178 195 L142 195 Z" fill={white} stroke={dark} strokeWidth="3" />
      <path d="M148 193 L130 225" stroke={white} strokeWidth="12" strokeLinecap="round" />
      <path d="M172 193 L192 225" stroke={white} strokeWidth="12" strokeLinecap="round" />
      <path d="M176 160 Q210 158 232 178" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* opponent, mid-throw */}
      <circle cx="255" cy="178" r="12" fill={skin} />
      <path d="M244 188 Q255 182 266 188 L262 222 L236 215 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M244 190 L222 172" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M264 192 L288 205" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const BonsaiElArteDeLosArbolesMiniatura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const pot = "#8B5A2B";
  const green = "#4A7A52";
  return (
    <g>
      {/* pot */}
      <path d="M150 225 L260 225 L250 250 L160 250 Z" fill={pot} stroke={dark} strokeWidth="2.5" />
      <rect x="145" y="218" width="120" height="10" fill={pot} stroke={dark} strokeWidth="2" />
      {/* trunk */}
      <path d="M200 220 Q195 190 210 165 Q220 150 205 130" fill="none" stroke="#6B4A2F" strokeWidth="9" strokeLinecap="round" />
      <path d="M205 175 Q185 165 170 175" fill="none" stroke="#6B4A2F" strokeWidth="6" strokeLinecap="round" />
      {/* canopy clusters */}
      <ellipse cx="205" cy="125" rx="34" ry="18" fill={green} stroke={dark} strokeWidth="2" />
      <ellipse cx="165" cy="172" rx="24" ry="14" fill={green} stroke={dark} strokeWidth="2" />
      <ellipse cx="220" cy="160" rx="20" ry="12" fill={green} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const UkiyoELaGranOlaDeHokusai: IllustrationComponent = () => {
  const waveBlue = "#2C5F8A";
  const waveDark = shade(waveBlue, 0.35);
  const foam = "#F5F0E6";
  const boat = "#5D4037";
  return (
    <g>
      {/* the great wave curling over */}
      <path
        d="M85 210 Q100 130 190 110 Q170 150 200 160 Q230 145 235 105 Q260 135 245 175 Q290 165 315 190 L315 250 L85 250 Z"
        fill={waveBlue}
        stroke={waveDark}
        strokeWidth="3"
      />
      {/* small boats riding the water */}
      {[
        [140, 225],
        [200, 235],
        [260, 220],
      ].map(([x, y]) => (
        <path key={x} d={`M${x - 20} ${y} Q${x} ${y - 10} ${x + 20} ${y} L${x + 15} ${y + 8} L${x - 15} ${y + 8} Z`} fill={boat} stroke={shade(boat, 0.3)} strokeWidth="1.5" />
      ))}
      {/* foam claws at the crest */}
      {[
        [190, 112],
        [210, 118],
        [230, 108],
        [248, 128],
      ].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} L${x - 6} ${y - 14} L${x + 6} ${y - 2} Z`} fill={foam} />
      ))}
    </g>
  );
};

const LaKatanaElArmaYElArte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const steel = "#B0B8BF";
  const wood = "#3E2A1A";
  return (
    <g>
      {/* anvil */}
      <path d="M230 210 L300 210 L290 225 L215 225 Z" fill={dark} />
      <rect x="245" y="225" width="20" height="20" fill={dark} />
      {/* blade */}
      <path d="M110 130 L250 205 L242 218 L100 148 Z" fill={steel} stroke={shade(steel, 0.4)} strokeWidth="2" />
      {/* hamon temper line */}
      <path d="M118 138 Q150 150 130 158 Q170 168 150 178 Q190 188 170 196" fill="none" stroke="#E8E4DC" strokeWidth="2" opacity="0.7" />
      {/* handle */}
      <rect x="80" y="118" width="45" height="16" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" transform="rotate(30 100 126)" />
      {/* guard (tsuba) */}
      <circle cx="112" cy="140" r="12" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const IkebanaElArteFloralJapones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const green = "#4A7A52";
  const flower = "#E8875A";
  return (
    <g>
      {/* low vase */}
      <path d="M175 225 L235 225 L245 250 L165 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* three branches: heaven, earth, humanity */}
      <path d="M205 228 Q195 170 160 110" fill="none" stroke={green} strokeWidth="5" strokeLinecap="round" />
      <path d="M205 228 Q215 190 260 165" fill="none" stroke={green} strokeWidth="5" strokeLinecap="round" />
      <path d="M205 228 Q205 200 205 165" fill="none" stroke={green} strokeWidth="5" strokeLinecap="round" />
      {/* blossoms */}
      <circle cx="160" cy="108" r="9" fill={flower} stroke={dark} strokeWidth="1.5" />
      <circle cx="205" cy="163" r="7" fill={flower} stroke={dark} strokeWidth="1.5" />
      <circle cx="262" cy="163" r="7" fill={flower} stroke={dark} strokeWidth="1.5" />
      {/* a single leaf */}
      <path d="M195 190 Q175 195 178 210" fill="none" stroke={green} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

export const japanIllustrations: Record<string, IllustrationDefinition> = {
  "dinastia-imperial-mas-antigua": { component: DinastiaImperialMasAntigua },
  "shinkansen-puntualidad": { component: ShinkansenPuntualidad },
  "sumo-deporte-sagrado": { component: SumoDeporteSagrado },
  "onsen-cultura-termal": { component: OnsenCulturaTermal },
  "kintsugi-arte-de-reparar": { component: KintsugiArteDeReparar },
  "ikigai-razon-de-ser": { component: IkigaiRazonDeSer },
  "manga-y-anime-influencia-global": { component: MangaYAnimeInfluenciaGlobal },
  "hanami-flor-de-cerezo": { component: HanamiFlorDeCerezo },
  "origami-arte-del-papel": { component: OrigamiArteDelPapel },
  "ceremonia-del-te": { component: CeremoniaDelTe },
  "monte-fuji-la-montana-sagrada": { component: MonteFujiLaMontanaSagrada },
  "samurai-y-el-codigo-bushido": { component: SamuraiYElCodigoBushido },
  "el-karaoke-invento-japones": { component: ElKaraokeInventoJapones },
  "sushi-y-washoku-patrimonio-culinario": { component: SushiYWashokuPatrimonioCulinario },
  "fushimi-inari-los-mil-torii": { component: FushimiInariLosMilTorii },
  "judo-el-arte-marcial-olimpico": { component: JudoElArteMarcialOlimpico },
  "bonsai-el-arte-de-los-arboles-miniatura": { component: BonsaiElArteDeLosArbolesMiniatura },
  "ukiyo-e-la-gran-ola-de-hokusai": { component: UkiyoELaGranOlaDeHokusai },
  "la-katana-el-arma-y-el-arte": { component: LaKatanaElArmaYElArte },
  "ikebana-el-arte-floral-japones": { component: IkebanaElArteFloralJapones },
};
