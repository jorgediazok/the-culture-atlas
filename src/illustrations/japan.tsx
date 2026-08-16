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
  return (
    <g>
      <path d="M155 235 Q140 200 150 160 Q160 125 205 118 Q250 125 260 160 Q270 200 255 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 150 Q190 175 180 210 M230 155 Q210 180 220 220 M205 118 Q205 160 205 235" stroke={gold} strokeWidth="4" strokeLinecap="round" fill="none" />
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
};
