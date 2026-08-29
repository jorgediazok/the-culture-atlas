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

const ElKrakDeLosCaballeros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const hill = "#8B7355";
  return (
    <g>
      {/* hill */}
      <path d="M85 245 Q205 210 320 245 L320 250 L85 250 Z" fill={hill} opacity="0.6" />
      {/* outer wall */}
      <rect x="105" y="185" width="200" height="55" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      {/* inner wall, taller and set back */}
      <rect x="140" y="140" width="130" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* round towers on the outer wall */}
      {[125, 175, 235, 285].map((x) => (
        <g key={x}>
          <rect x={x - 14} y="165" width="28" height="75" fill={dark} opacity="0.3" />
          <circle cx={x} cy="165" r="16" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
        </g>
      ))}
      {/* taller corner towers on the inner wall */}
      {[155, 255].map((x) => (
        <g key={x}>
          <rect x={x - 14} y="120" width="28" height="90" fill={dark} opacity="0.2" />
          <circle cx={x} cy="120" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
        </g>
      ))}
      {/* crenellations on the inner wall */}
      {[150, 175, 200, 225, 250].map((x) => (
        <rect key={x} x={x} y="132" width="12" height="10" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const MaalulaElPuebloQueTodaviaHablaArameo: IllustrationComponent = () => {
  const rock = "#A89078";
  const dark = shade(rock, 0.4);
  const blue = "#3D7EA6";
  return (
    <g>
      {/* rocky cliff */}
      <path d="M85 245 L110 160 L150 190 L190 130 L230 175 L270 145 L320 200 L320 250 L85 250 Z" fill={rock} stroke={dark} strokeWidth="2.5" />
      {/* stacked blue houses set into the cliff */}
      {[
        [130, 190, 30, 26],
        [175, 155, 32, 26],
        [220, 175, 30, 24],
        [260, 150, 28, 24],
      ].map(([x, y, w, h]) => (
        <g key={x}>
          <rect x={x} y={y} width={w} height={h} fill={blue} stroke={shade(blue, 0.35)} strokeWidth="2" />
          <rect x={x + w / 2 - 4} y={y + h - 12} width="8" height="12" fill="#2C4A5E" />
        </g>
      ))}
      {/* carved stairways connecting them */}
      <path d="M160 216 L175 181 M205 179 L220 199" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ElKibbehElPlatoNacionalSirio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* plate */}
      <ellipse cx="205" cy="220" rx="95" ry="24" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="3" />
      {/* stacked football-shaped kibbeh croquettes */}
      {[
        [150, 205, -15],
        [205, 195, 5],
        [260, 205, -8],
        [178, 220, 10],
        [232, 218, -5],
      ].map(([x, y, rot]) => (
        <ellipse key={x} cx={x} cy={y} rx="26" ry="14" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="2.5" transform={`rotate(${rot} ${x} ${y})`} />
      ))}
      {/* browned tips */}
      {[
        [128, 205],
        [184, 195],
        [286, 205],
      ].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="6" ry="8" fill={shade(gold, 0.35)} opacity="0.7" />
      ))}
    </g>
  );
};

const LosQududHalabiyaCancionesClasicasDeAlepo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* singer */}
      <circle cx="150" cy="140" r="16" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M132 155 Q150 145 168 155 L163 235 L137 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M140 165 Q125 175 130 195" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      {/* musician with oud */}
      <circle cx="260" cy="150" r="15" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M243 164 Q260 155 277 164 L272 235 L248 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      {/* oud pear body and neck */}
      <path d="M270 190 Q245 195 245 215 Q245 232 270 235 Q295 232 295 215 Q295 195 270 190 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      <path d="M270 190 L300 165" stroke={wood} strokeWidth="8" strokeLinecap="round" />
      <line x1="272" y1="192" x2="296" y2="167" stroke="#F5F0E6" strokeWidth="1.5" opacity="0.8" />
    </g>
  );
};

const LosMueblesDeMaderaConIncrustacionesDeNacarDeDamasco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const nacre = "#E8E4DC";
  return (
    <g>
      {/* chest body */}
      <rect x="120" y="160" width="170" height="80" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* lid */}
      <path d="M115 160 L205 135 L295 160 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      {/* legs */}
      <rect x="130" y="240" width="10" height="16" fill={dark} />
      <rect x="270" y="240" width="10" height="16" fill={dark} />
      {/* eight-pointed star inlays */}
      {[
        [160, 200],
        [205, 190],
        [250, 200],
      ].map(([x, y]) => (
        <g key={x}>
          {[0, 45, 90, 135].map((deg) => (
            <line key={deg} x1={x - 10} y1={y} x2={x + 10} y2={y} stroke={nacre} strokeWidth="3" transform={`rotate(${deg} ${x} ${y})`} opacity="0.9" />
          ))}
        </g>
      ))}
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
  "el-krak-de-los-caballeros": { component: ElKrakDeLosCaballeros },
  "maalula-el-pueblo-que-todavia-habla-arameo": { component: MaalulaElPuebloQueTodaviaHablaArameo },
  "el-kibbeh-el-plato-nacional-sirio": { component: ElKibbehElPlatoNacionalSirio },
  "los-qudud-halabiya-canciones-clasicas-de-alepo": { component: LosQududHalabiyaCancionesClasicasDeAlepo },
  "los-muebles-de-madera-con-incrustaciones-de-nacar-de-damasco": { component: LosMueblesDeMaderaConIncrustacionesDeNacarDeDamasco },
};
