import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const N365PlayasUnaParaCadaDiaDelAno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q140 175 180 195 Q220 170 260 195 Q290 175 320 200 L320 250 L90 250 Z" fill="#E8D9A8" stroke={dark} strokeWidth="2.5" />
      <path d="M90 200 Q140 175 180 195 Q220 170 260 195 Q290 175 320 200" fill="none" stroke={accentColor} strokeWidth="6" opacity="0.85" />
      <line x1="150" y1="150" x2="150" y2="195" stroke="#5C3A21" strokeWidth="4" />
      <path d="M150 150 Q130 140 120 155 M150 150 Q170 138 182 152" fill="none" stroke="#5C7A3A" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const ElAstilleroDeNelsonEnEnglishHarbour: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <rect x="120" y="185" width="180" height="55" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[140, 175, 210, 245, 275].map((x) => (
        <rect key={x} x={x} y="195" width="14" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M220 190 L220 130 Q250 145 255 185 Q235 175 220 190 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" />
      <line x1="200" y1="245" x2="200" y2="130" stroke="#5C3A21" strokeWidth="3" />
    </g>
  );
};

const ElSantuarioDeFragatasDeBarbuda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 L120 210 L160 240 L200 205 L240 240 L280 215 L320 240 L320 250 L90 250 Z" fill="#2E6B45" opacity="0.6" />
      <path d="M180 170 Q150 150 130 160 Q160 165 175 180 Q190 165 240 155 Q210 150 195 170 Q210 175 205 185 Q195 172 180 170 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="197" cy="185" rx="16" ry="22" fill={accentColor} stroke="#7A1818" strokeWidth="2.4" />
      <circle cx="178" cy="163" r="3" fill="#F5F0E6" />
    </g>
  );
};

const LaPlayaRosaDeBarbuda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <path d="M90 200 Q205 180 320 200 L320 245 L90 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[140, 220], [200, 210], [260, 225]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 10} ${(y as number) - 8} ${(x as number) + 20} ${y}`} fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.7" />
      ))}
    </g>
  );
};

const LaSemanaDeVelaDeAntigua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const boat = (x: number, fill: string) => (
    <g key={x}>
      <path d="M0 0 L40 0 L34 15 L6 15 Z" fill={fill} stroke={dark} strokeWidth="2" transform={`translate(${x} 210)`} />
      <path d="M20 210 L20 165 L38 205 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" transform={`translate(${x} 0)`} />
    </g>
  );
  return (
    <g>
      <path d="M90 235 L320 235 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      {boat(120, accentColor)}
      {boat(190, "#C9A227")}
      {boat(250, tint(accentColor, 0.2))}
    </g>
  );
};

const BettysHopeLosMolinosDeLaCana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mill = (x: number) => (
    <g key={x}>
      <path d="M-18 90 L18 90 L12 0 L-12 0 Z" fill="#D9CBA3" stroke={dark} strokeWidth="2.4" transform={`translate(${x} 150)`} />
      <line x1={x} y1="150" x2={x - 30} y2="120" stroke="#5C3A21" strokeWidth="5" />
      <line x1={x} y1="150" x2={x + 30} y2="120" stroke="#5C3A21" strokeWidth="5" />
      <line x1={x} y1="150" x2={x - 30} y2="180" stroke="#5C3A21" strokeWidth="5" />
      <line x1={x} y1="150" x2={x + 30} y2="180" stroke="#5C3A21" strokeWidth="5" />
    </g>
  );
  return (
    <g>
      {mill(150)}
      {mill(270)}
      <rect x="90" y="238" width="230" height="8" fill="#5C7A3A" opacity="0.5" />
    </g>
  );
};

const ElCarnavalDeAntigua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="150" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 22} 130 L${x} 90 L${x + 22} 130`} fill="none" stroke="#C9A227" strokeWidth="4" strokeLinecap="round" />
      <path d={`M${x - 14} 230 Q${x - 17} 190 ${x} 185 Q${x + 17} 190 ${x + 14} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
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

const ElCriquetYSirVivianRichards: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="16" fill="#E8C39E" stroke={dark} strokeWidth="2.2" />
      <path d="M185 200 L200 160 L210 160 L225 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="200" width="20" height="35" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <circle cx="250" cy="150" r="8" fill="#C1272D" stroke={dark} strokeWidth="1.8" />
      <line x1="150" y1="240" x2="260" y2="240" stroke="#5C7A3A" strokeWidth="4" opacity="0.6" />
    </g>
  );
};

const ElFungeeYPepperpotPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="160" cy="200" rx="45" ry="16" fill="#E8DCA0" stroke={dark} strokeWidth="2.8" />
      <ellipse cx="255" cy="200" rx="45" ry="16" fill="#2E6B45" stroke={dark} strokeWidth="2.8" />
      <path d="M235 195 Q245 188 255 195 Q265 188 275 195" fill="none" stroke={accentColor} strokeWidth="4" opacity="0.8" />
    </g>
  );
};

const WadadliElNombreOriginalDeLaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 240 L180 150 Q180 140 205 138 Q230 140 230 150 L230 240 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      <rect x="188" y="130" width="34" height="10" fill={dark} opacity="0.6" />
      <rect x="170" y="180" width="14" height="60" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M155 220 Q160 200 155 185 M170 225 Q175 205 170 190" stroke="#5C7A3A" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const LaIndependenciaDel1DeNoviembreDe1981: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#F5B800";
  return (
    <g>
      <rect x="185" y="90" width="8" height="150" fill={dark} />
      <polygon points="193,95 193,185 300,140" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="193,110 193,170 260,140" fill="#1A1A1A" />
      <circle cx="220" cy="140" r="22" fill={gold} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1="220" y1="140" x2="220" y2="112" stroke={gold} strokeWidth="3" transform={`rotate(${deg} 220 140)`} />
      ))}
      {[
        [130, 110],
        [300, 100],
      ].map(([x, y], i) => (
        <g key={i}>
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line key={deg} x1={x} y1={y} x2={x} y2={y - 14} stroke={i % 2 === 0 ? gold : accentColor} strokeWidth="3" strokeLinecap="round" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
    </g>
  );
};

const RedondaElTercerReinoDiminutoDelPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <polygon points="140,240 205,110 245,150 230,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="230,240 245,150 270,180 260,240" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M280 130 L286 112 L294 126 L302 108 L310 126 L316 112 L322 130 Z" fill="#F5B800" stroke={dark} strokeWidth="2" />
      <rect x="280" y="130" width="42" height="8" fill="#F5B800" stroke={dark} strokeWidth="1.5" />
      <path d="M150 150 Q165 140 180 150" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

export const antiguaAndBarbudaIllustrations: Record<string, IllustrationDefinition> = {
  "365-playas-una-para-cada-dia-del-ano": { component: N365PlayasUnaParaCadaDiaDelAno },
  "el-astillero-de-nelson-en-english-harbour": { component: ElAstilleroDeNelsonEnEnglishHarbour },
  "el-santuario-de-fragatas-de-barbuda": { component: ElSantuarioDeFragatasDeBarbuda },
  "la-playa-rosa-de-barbuda": { component: LaPlayaRosaDeBarbuda },
  "la-semana-de-vela-de-antigua": { component: LaSemanaDeVelaDeAntigua },
  "bettys-hope-los-molinos-de-la-cana": { component: BettysHopeLosMolinosDeLaCana },
  "el-carnaval-de-antigua": { component: ElCarnavalDeAntigua },
  "el-criquet-y-sir-vivian-richards": { component: ElCriquetYSirVivianRichards },
  "el-fungee-y-pepperpot-plato-nacional": { component: ElFungeeYPepperpotPlatoNacional },
  "wadadli-el-nombre-original-de-la-isla": { component: WadadliElNombreOriginalDeLaIsla },
  "la-independencia-del-1-de-noviembre-de-1981": { component: LaIndependenciaDel1DeNoviembreDe1981 },
  "redonda-el-tercer-reino-diminuto-del-pais": { component: RedondaElTercerReinoDiminutoDelPais },
};
