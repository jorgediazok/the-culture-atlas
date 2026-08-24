import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElArchipielagoDeMas700Islas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const isle = (x: number, y: number, r: number, fill: string) => (
    <ellipse key={x + "-" + y} cx={x} cy={y} rx={r} ry={r * 0.6} fill={fill} stroke={dark} strokeWidth="1.8" />
  );
  return (
    <g>
      <rect x="90" y="90" width="230" height="150" fill="#1B5E7A" opacity="0.45" />
      {isle(130, 130, 20, accentColor)}
      {isle(180, 160, 14, tint(accentColor, 0.2))}
      {isle(230, 120, 18, accentColor)}
      {isle(260, 180, 12, "#C9A227")}
      {isle(160, 200, 16, tint(accentColor, 0.15))}
      {isle(290, 150, 10, accentColor)}
    </g>
  );
};

const ElJunkanooElDesfileDeNochevieja: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="150" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 26} 140 L${x} 95 L${x + 26} 140`} fill="none" stroke="#C9A227" strokeWidth="4" strokeLinecap="round" />
      <path d={`M${x - 16} 230 Q${x - 19} 190 ${x} 185 Q${x + 19} 190 ${x + 16} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
    </g>
  );
  return (
    <g>
      {dancer(160, accentColor)}
      {dancer(255, "#C1272D")}
      <rect x="90" y="238" width="230" height="8" fill="#3A3A3A" opacity="0.5" />
    </g>
  );
};

const ElArrecifeDeAndrosYLosAgujerosAzules: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 90 L320 90 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.35" />
      <circle cx="205" cy="180" r="55" fill="#0D3D50" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="180" r="70" fill="none" stroke={accentColor} strokeWidth="10" opacity="0.7" />
    </g>
  );
};

const LosCerdosNadadoresDeExuma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 220 L320 220 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <ellipse cx="205" cy="205" rx="35" ry="22" fill="#E8A9BC" stroke={dark} strokeWidth="2.6" />
      <circle cx="235" cy="195" r="14" fill="#E8A9BC" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="245" cy="198" rx="6" ry="4" fill="#C97A94" />
      <circle cx="228" cy="188" r="2" fill="#3A2418" />
      <path d="M180 215 Q170 225 180 235 M195 218 Q188 228 195 238" stroke="#E8A9BC" strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  );
};

const LosLucayosYElPrimerDesembarcoDeColon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <path d="M140 230 L140 190 Q170 180 200 190 L200 230 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="170" cy="188" rx="32" ry="8" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <line x1="240" y1="235" x2="240" y2="150" stroke="#5C3A21" strokeWidth="4" />
      <path d="M240 150 L280 165 L240 180 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const ElRakeAndScrapeLaMusicaDeLaSierra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="185" cy="150" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x="170" y="165" width="30" height="55" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M150 200 L260 175 L262 185 L152 210 Z" fill="#B8B8B8" stroke={dark} strokeWidth="2" />
      <line x1="215" y1="195" x2="235" y2="190" stroke="#5C3A21" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const ElCaracolElAlimentoYSimboloNacional: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <path
        d="M205 240 Q170 235 165 200 Q162 175 185 165 Q170 160 172 140 Q175 120 200 118 Q225 118 230 138 Q232 150 220 155 Q235 160 232 178 Q248 175 250 195 Q252 220 220 235 Q212 238 205 240 Z"
        fill={accentColor}
        stroke="#7A1818"
        strokeWidth="2.6"
      />
      <ellipse cx="205" cy="200" rx="20" ry="30" fill="#F5D6DE" opacity="0.9" />
    </g>
  );
};

const NassauYLaRepublicaDeLosPiratas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <path d="M140 240 L140 190 L270 190 L260 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="205" y1="190" x2="205" y2="130" stroke="#5C3A21" strokeWidth="4" />
      <path d="M205 130 L205 160 L245 145 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
      <circle cx="218" cy="142" r="4" fill="#F5F0E6" />
    </g>
  );
};

const ElBonefishingLaCapitalMundialDeLaPescaDeLlano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 220 L320 220 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.4" />
      <line x1="150" y1="150" x2="260" y2="210" stroke="#5C3A21" strokeWidth="3" />
      <path d="M260 210 Q270 200 280 215" fill="none" stroke="#8C8C8C" strokeWidth="1.5" />
      <path d="M195 200 Q210 185 230 195 Q220 205 195 200 Z" fill="#C9D2D6" stroke={dark} strokeWidth="2.2" />
      <polygon points="195,200 185,196 190,206" fill="#C9D2D6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const PinkSandsBeachLaPlayaRosaDeHarbourIsland: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <path d="M90 205 Q205 185 320 205 L320 245 L90 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[130, 170, 210, 250].map((x, i) => (
        <g key={x}>
          <rect x={x} y="165" width="18" height="30" fill={i % 2 === 0 ? tint(accentColor, 0.25) : "#C9A227"} stroke={dark} strokeWidth="1.8" />
          <path d={`M${x - 4} 165 L${x + 22} 165 L${x + 18} 155 L${x} 155 Z`} fill={dark} opacity="0.5" />
        </g>
      ))}
    </g>
  );
};

const LaIndependenciaDe1973: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#FFC72C";
  return (
    <g>
      <rect x="180" y="90" width="8" height="155" fill={dark} />
      <rect x="188" y="95" width="120" height="30" fill={accentColor} />
      <rect x="188" y="125" width="120" height="30" fill={gold} />
      <rect x="188" y="155" width="120" height="30" fill={accentColor} />
      <polygon points="188,95 188,185 255,140" fill="#1A1A1A" />
    </g>
  );
};

const ElBatikDeAndrosia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const fishMotif = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <ellipse cx={x} cy={y} rx="12" ry="7" fill="#F5F0E6" opacity="0.9" />
      <polygon points={`${x - 12},${y} ${x - 19},${y - 5} ${x - 19},${y + 5}`} fill="#F5F0E6" opacity="0.9" />
    </g>
  );
  return (
    <g>
      <rect x="110" y="120" width="180" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="110" cy="165" rx="14" ry="45" fill={dark} opacity="0.5" />
      {fishMotif(150, 145)}
      {fishMotif(195, 180)}
      {fishMotif(250, 150)}
      <path d="M120 195 Q150 185 180 195 Q210 205 240 195 Q260 190 280 198" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.7" />
      <rect x="230" y="225" width="50" height="16" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x="245" y="205" width="20" height="22" fill="#6B4226" stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const bahamasIllustrations: Record<string, IllustrationDefinition> = {
  "el-archipielago-de-mas-de-700-islas": { component: ElArchipielagoDeMas700Islas },
  "el-junkanoo-el-desfile-de-nochevieja": { component: ElJunkanooElDesfileDeNochevieja },
  "el-arrecife-de-andros-y-los-agujeros-azules": { component: ElArrecifeDeAndrosYLosAgujerosAzules },
  "los-cerdos-nadadores-de-exuma": { component: LosCerdosNadadoresDeExuma },
  "los-lucayos-y-el-primer-desembarco-de-colon": { component: LosLucayosYElPrimerDesembarcoDeColon },
  "el-rake-and-scrape-la-musica-de-la-sierra": { component: ElRakeAndScrapeLaMusicaDeLaSierra },
  "el-caracol-el-alimento-y-simbolo-nacional": { component: ElCaracolElAlimentoYSimboloNacional },
  "nassau-y-la-republica-de-los-piratas": { component: NassauYLaRepublicaDeLosPiratas },
  "el-bonefishing-la-capital-mundial-de-la-pesca-de-llano": { component: ElBonefishingLaCapitalMundialDeLaPescaDeLlano },
  "pink-sands-beach-la-playa-rosa-de-harbour-island": { component: PinkSandsBeachLaPlayaRosaDeHarbourIsland },
  "la-independencia-de-1973": { component: LaIndependenciaDe1973 },
  "el-batik-de-androsia": { component: ElBatikDeAndrosia },
};
