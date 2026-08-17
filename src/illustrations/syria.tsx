import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DamascoLaCapitalHabitadaMasAntiguaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="180" width="200" height="60" fill={accentColor} opacity="0.85" stroke={dark} strokeWidth="2.5" />
      {[115, 140, 165, 190, 215, 240, 265, 285].map((x, i) => (
        <rect key={x} x={x} y={180 - (10 + (i % 3) * 8)} width="18" height={10 + (i % 3) * 8 + 60} fill={i % 2 === 0 ? tint(accentColor, 0.2) : accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M170 150 Q205 105 240 150 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="100" width="8" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <polygon points="126,100 134,84 142,100" fill={dark} opacity="0.7" />
    </g>
  );
};

const LaMezquitaOmeyaDeDamasco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#C9A227";
  return (
    <g>
      <rect x="120" y="160" width="160" height="75" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[135, 165, 195, 225, 255].map((x) => (
        <rect key={x} x={x} y="175" width="16" height="60" fill={gold} opacity="0.55" stroke={dark} strokeWidth="1.2" />
      ))}
      <rect x="188" y="90" width="24" height="145" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="188,90 200,68 212,90" fill={dark} />
      <path d="M120 160 Q200 130 280 160" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="150" cy="150" r="3" fill={gold} />
      <circle cx="200" cy="140" r="3" fill={gold} />
      <circle cx="250" cy="150" r="3" fill={gold} />
    </g>
  );
};

const ElJabonDeAlepo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rows = [{ y: 220, w: 130 }, { y: 195, w: 105 }, { y: 170, w: 82 }, { y: 145, w: 60 }, { y: 120, w: 40 }];
  return (
    <g>
      {rows.map((r) => (
        <rect key={r.y} x={205 - r.w / 2} y={r.y} width={r.w} height="22" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
      {rows.map((r, i) => (
        <rect key={`s-${r.y}`} x={205 - r.w / 2 + 8} y={r.y + 6} width={Math.max(r.w - 16, 8)} height="4" fill={tint(accentColor, 0.4)} opacity={0.7 - i * 0.05} />
      ))}
    </g>
  );
};

const UgaritYElAlfabetoCuneiforme: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const cols = [145, 175, 205, 235, 265];
  return (
    <g transform="rotate(3 205 165)">
      <rect x="125" y="100" width="160" height="130" rx="4" fill={accentColor} stroke={dark} strokeWidth="3" />
      {cols.map((x) => (
        <g key={x}>
          {[118, 138, 158, 178, 198, 218].map((y) => (
            <polygon key={y} points={`${x},${y} ${x + 6},${y - 4} ${x + 6},${y + 4}`} fill={dark} opacity="0.75" />
          ))}
        </g>
      ))}
    </g>
  );
};

const PalmiraLaNoviaDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cols = [
    { x: 110, h: 100 },
    { x: 140, h: 115 },
    { x: 170, h: 95 },
    { x: 230, h: 90 },
    { x: 260, h: 108 },
    { x: 290, h: 78 },
  ];
  return (
    <g>
      <path d="M90 240 Q205 220 320 240 L320 250 L90 250 Z" fill="#D4C098" />
      {cols.map((c) => (
        <g key={c.x}>
          <rect x={c.x} y={240 - c.h} width="12" height={c.h} fill={accentColor} stroke={dark} strokeWidth="2" />
          <rect x={c.x - 3} y={240 - c.h - 8} width="18" height="8" fill={accentColor} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <path d="M185 240 L185 150 Q205 125 225 150 L225 240" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const ElAceroDeDamasco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g transform="rotate(-18 205 165)">
      <polygon points="205,95 218,120 214,205 205,225 196,205 192,120" fill="#B8BEC4" stroke={dark} strokeWidth="3" />
      <path d="M199 118 Q205 140 200 165 Q209 190 202 205" fill="none" stroke={dark} strokeWidth="2" opacity="0.65" />
      <path d="M211 118 Q205 145 210 168 Q201 188 208 205" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <rect x="190" y="205" width="30" height="10" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="196" y="215" width="18" height="26" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="245" r="7" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaRosaDamascena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const petals = [
    [205, 130, 0],
    [230, 145, 45],
    [237, 172, 90],
    [225, 198, 135],
    [200, 205, 180],
    [175, 195, 225],
    [168, 168, 270],
    [180, 142, 315],
  ];
  return (
    <g>
      <line x1="205" y1="205" x2="205" y2="245" stroke="#4A6B3A" strokeWidth="4" />
      {petals.map(([x, y, rot]) => (
        <ellipse key={x + "-" + y} cx={x} cy={y} rx="17" ry="11" fill={accentColor} stroke={dark} strokeWidth="1.5" transform={`rotate(${rot} ${x} ${y})`} />
      ))}
      <circle cx="203" cy="170" r="12" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="1.5" />
      <rect x="255" y="180" width="35" height="45" rx="4" fill="#CFE3D8" opacity="0.8" stroke={dark} strokeWidth="2.5" />
      <rect x="264" y="165" width="17" height="18" fill="#CFE3D8" opacity="0.8" stroke={dark} strokeWidth="2" />
      <rect x="260" y="200" width="27" height="16" fill={accentColor} opacity="0.4" />
    </g>
  );
};

const ElZocoAlHamidiyahDeDamasco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const holes = [
    [140, 105], [165, 98], [190, 100], [215, 97], [240, 103], [260, 99],
    [150, 115], [180, 112], [210, 116], [235, 113], [255, 118],
  ];
  return (
    <g>
      <path d="M100 200 Q205 145 310 200 L310 215 Q205 165 100 215 Z" fill={accentColor} opacity="0.5" stroke={dark} strokeWidth="2.5" />
      {holes.map(([x, y]) => (
        <circle key={x + "-" + y} cx={x} cy={y} r="2.2" fill="#F5F0E6" />
      ))}
      {[130, 175, 235, 280].map((x, i) => (
        <rect key={x} x={x - 18} y="215" width="36" height="30" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const ElTawleElBackgammonSirio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const triXs = [115, 140, 165, 190, 215, 240, 265];
  return (
    <g>
      <rect x="105" y="150" width="200" height="90" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      {triXs.map((x, i) => (
        <polygon key={x} points={`${x},158 ${x + 12},158 ${x + 6},205`} fill={i % 2 === 0 ? accentColor : "#5C3A21"} />
      ))}
      {triXs.map((x, i) => (
        <polygon key={`b-${x}`} points={`${x},232 ${x + 12},232 ${x + 6},185`} fill={i % 2 === 0 ? "#5C3A21" : accentColor} opacity="0.85" />
      ))}
      <circle cx="130" cy="170" r="7" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <circle cx="130" cy="185" r="7" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <circle cx="255" cy="220" r="7" fill="#1A1A1A" stroke={dark} strokeWidth="1.5" />
      <rect x="280" y="205" width="16" height="16" rx="3" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="284" cy="209" r="1.5" fill="#1A1A1A" />
      <circle cx="292" cy="217" r="1.5" fill="#1A1A1A" />
    </g>
  );
};

const ElBordadoAghabani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#C9A227";
  const flowers = [
    [150, 130],
    [210, 115],
    [265, 140],
    [175, 175],
    [235, 190],
  ];
  return (
    <g>
      <rect x="110" y="95" width="190" height="145" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {flowers.map(([x, y]) => (
        <g key={x + "-" + y}>
          {[0, 72, 144, 216, 288].map((rot) => (
            <ellipse key={rot} cx={x} cy={y - 9} rx="5" ry="8" fill={gold} opacity="0.85" transform={`rotate(${rot} ${x} ${y})`} />
          ))}
          <circle cx={x} cy={y} r="4" fill={accentColor} />
        </g>
      ))}
      <path d="M150 130 Q182 152 210 115 Q245 155 265 140" fill="none" stroke={gold} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

export const syriaIllustrations: Record<string, IllustrationDefinition> = {
  "damasco-la-capital-habitada-mas-antigua-del-mundo": { component: DamascoLaCapitalHabitadaMasAntiguaDelMundo },
  "la-mezquita-omeya-de-damasco": { component: LaMezquitaOmeyaDeDamasco },
  "el-jabon-de-alepo": { component: ElJabonDeAlepo },
  "ugarit-y-el-alfabeto-cuneiforme": { component: UgaritYElAlfabetoCuneiforme },
  "palmira-la-novia-del-desierto": { component: PalmiraLaNoviaDelDesierto },
  "el-acero-de-damasco": { component: ElAceroDeDamasco },
  "la-rosa-damascena": { component: LaRosaDamascena },
  "el-zoco-al-hamidiyah-de-damasco": { component: ElZocoAlHamidiyahDeDamasco },
  "el-tawle-el-backgammon-sirio": { component: ElTawleElBackgammonSirio },
  "el-bordado-aghabani": { component: ElBordadoAghabani },
};
