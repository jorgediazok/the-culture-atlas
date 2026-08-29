import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElMerlionSimboloDeSingapur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <path d="M175 245 Q160 200 175 165 Q195 190 200 220 L200 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${178 + i * 6} ${240 - i * 8} Q${185 + i * 6} ${230 - i * 8} ${180 + i * 6} ${222 - i * 8}`} fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      <ellipse cx="200" cy="150" rx="30" ry="26" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M172 140 Q160 120 175 108 Q172 128 185 132 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M228 140 Q240 120 225 108 Q228 128 215 132 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="190" cy="148" r="4" fill="#0F3D45" />
      <circle cx="210" cy="148" r="4" fill="#0F3D45" />
      <path d="M195 165 Q200 172 205 165" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M200 172 Q192 190 195 210" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
    </g>
  );
};

const LosSupertreesDeGardensByTheBay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const tree = (x: number, h: number, scale: number) => (
    <g key={x} transform={`translate(${x} 0) scale(${scale})`}>
      <rect x="-6" y={240 - h} width="12" height={h} fill="#8B7355" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="0" cy={240 - h - 8} rx="34" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="0" cy={240 - h - 20} rx="24" ry="10" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <circle cx="-15" cy={240 - h - 5} r="3" fill="#C9A227" />
      <circle cx="10" cy={240 - h - 12} r="3" fill="#C9A227" />
    </g>
  );
  return (
    <g>
      {tree(140, 110, 0.85)}
      {tree(205, 145, 1)}
      {tree(270, 100, 0.8)}
      <line x1="140" y1="110" x2="270" y2="112" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const LasCasasPeranakanYLaCulturaBabaNyonya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C9A227", tint(accentColor, 0.25)];
  const houses = [110, 172, 234];
  return (
    <g>
      {houses.map((x, i) => (
        <g key={x}>
          <rect x={x} y="150" width="58" height="90" fill={colors[i]} stroke={dark} strokeWidth="2.5" />
          <rect x={x - 4} y="140" width="66" height="14" fill={dark} opacity="0.6" />
          {[0, 1].map((r) => (
            <rect key={r} x={x + 10} y={170 + r * 35} width="16" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
          ))}
          <rect x={x + 34} y="205" width="16" height="30" fill="#5C3A21" stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const LosCentrosDeComidaHawkerPatrimonioDeLaUnesco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="180" width="110" height="45" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="140" y="170" width="130" height="12" fill={dark} opacity="0.6" />
      <ellipse cx="205" cy="165" rx="22" ry="10" fill="#3A3A3A" stroke={dark} strokeWidth="2" />
      <path d="M195 158 Q200 140 195 130 M215 158 Q212 142 218 132" fill="none" stroke="#D9D2C0" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <rect x="110" y="225" width="190" height="10" fill="#8B7355" opacity="0.6" />
      {[130, 175, 220, 265].map((x) => (
        <rect key={x} x={x} y="235" width="20" height="8" fill="#5C3A21" />
      ))}
    </g>
  );
};

const ElSinglishLaLenguaCriollaDeSingapur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[
        { x: 140, fill: accentColor },
        { x: 260, fill: tint(accentColor, 0.2) },
      ].map((p) => (
        <g key={p.x}>
          <circle cx={p.x} cy="150" r="18" fill="#E8C39E" stroke={dark} strokeWidth="2" />
          <path d={`M${p.x - 22} 235 Q${p.x - 25} 190 ${p.x} 185 Q${p.x + 25} 190 ${p.x + 22} 235 Z`} fill={p.fill} stroke={dark} strokeWidth="2.2" />
        </g>
      ))}
      <path d="M155 120 Q180 100 205 115 Q195 100 210 95 L215 115 Q195 130 155 120 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M255 120 Q230 100 205 115 Q215 100 200 95 L195 115 Q215 130 255 120 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElRafflesHotelYElSingaporeSling: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 240 L175 175 Q205 195 235 175 L235 240 Z" fill="#D9A9B0" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="30" ry="13" fill={tint("#D9A9B0", 0.3)} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="175" x2="205" y2="140" stroke="#8B7355" strokeWidth="4" />
      {[[190, 118], [220, 118], [190, 155], [220, 155]].map(([x, y]) => (
        <line key={x + "-" + y} x1="205" y1="140" x2={x} y2={y} stroke="#5C3A21" strokeWidth="3" strokeLinecap="round" />
      ))}
      <circle cx="190" cy="200" r="5" fill="#5C7A3A" opacity="0.7" />
      <circle cx="220" cy="205" r="5" fill="#5C7A3A" opacity="0.7" />
    </g>
  );
};

const KampongGlamYLaMezquitaDelSultan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="185" width="130" height="55" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="155" rx="48" ry="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      {Array.from({ length: 5 }).map((_, i) => (
        <circle key={i} cx={185 + i * 10} cy={168 - Math.abs(i - 2) * 2} r="3" fill="#F5F0E6" opacity="0.7" />
      ))}
      <circle cx="205" cy="112" r="6" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="130" y="150" width="14" height="90" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <rect x="266" y="150" width="14" height="90" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <polygon points="130,150 144,150 137,132" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="266,150 280,150 273,132" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaVandaMissJoaquimFlorNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const petals = [
    [205, 130, -30],
    [235, 165, 35],
    [175, 165, -35],
    [220, 195, 60],
    [190, 195, -60],
  ];
  return (
    <g>
      {petals.map(([cx, cy, rot], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="26" ry="12" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" transform={`rotate(${rot} ${cx} ${cy})`} />
      ))}
      <circle cx="205" cy="170" r="14" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" />
      <circle cx="205" cy="170" r="6" fill="#C9A227" />
      <line x1="205" y1="200" x2="205" y2="240" stroke="#3A6B45" strokeWidth="4" />
    </g>
  );
};

const ElSkyparkDeMarinaBaySands: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const towers = [130, 205, 280];
  return (
    <g>
      {towers.map((x) => (
        <rect key={x} x={x - 15} y="110" width="30" height="130" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      ))}
      <path d="M100 108 Q205 85 310 108 L310 130 Q205 108 100 130 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M120 118 Q205 100 290 118 L290 124 Q205 108 120 124 Z" fill="#1B5E7A" opacity="0.6" />
    </g>
  );
};

const LaProhibicionDelChicleYElOrdenSingapurense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 165 Q160 185 175 200 Q195 215 210 200 Q225 185 215 165 Q200 150 170 165 Z" fill="#E8A9BC" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="205" r="55" fill="none" stroke={accentColor} strokeWidth="10" />
      <line x1="165" y1="165" x2="245" y2="245" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const ElKopiYElCodigoSecretoDelCafe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const saucer = tint(accentColor, 0.5);
  const cream = "#F5EFE0";
  return (
    <g>
      {/* stall counter */}
      <rect x="90" y="220" width="230" height="20" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {/* saucer + cup */}
      <ellipse cx="205" cy="215" rx="55" ry="14" fill={saucer} stroke={dark} strokeWidth="2" />
      <path d="M175 210 L235 210 L228 175 Q205 165 182 175 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="26" ry="9" fill={cream} />
      {/* steam */}
      <path d="M195 165 Q190 150 196 135" fill="none" stroke={dark} strokeWidth="2" opacity="0.35" />
      <path d="M215 165 Q210 150 216 135" fill="none" stroke={dark} strokeWidth="2" opacity="0.35" />
      {/* handle */}
      <path d="M228 185 Q250 185 250 198 Q250 210 230 205" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const LosHdbLaViviendaPublicaDeSingapur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const window = "#F5F0E6";
  return (
    <g>
      {/* main tower */}
      <rect x="140" y="95" width="130" height="150" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* rows of windows/balconies */}
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <g key={row}>
          {[0, 1, 2].map((col) => (
            <rect key={col} x={150 + col * 38} y={108 + row * 22} width="28" height="16" fill={window} stroke={dark} strokeWidth="1.5" opacity="0.9" />
          ))}
        </g>
      ))}
      {/* ground level void deck */}
      <rect x="140" y="230" width="130" height="15" fill={dark} opacity="0.3" />
      {[160, 205, 250].map((x) => (
        <line key={x} x1={x} y1="230" x2={x} y2="245" stroke={dark} strokeWidth="4" />
      ))}
    </g>
  );
};

const PulauUbinLaUltimaIslaKampong: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  const green = tint(accentColor, 0.1);
  return (
    <g>
      {/* jungle backdrop */}
      <ellipse cx="270" cy="150" rx="70" ry="60" fill={green} opacity="0.5" />
      {/* stilt house */}
      <rect x="130" y="160" width="90" height="55" fill={wood} stroke={dark} strokeWidth="2.5" />
      <polygon points="120,160 175,130 230,160" fill={shade(wood, 0.2)} stroke={dark} strokeWidth="2.5" />
      <line x1="140" y1="215" x2="140" y2="240" stroke={dark} strokeWidth="6" />
      <line x1="210" y1="215" x2="210" y2="240" stroke={dark} strokeWidth="6" />
      {/* bicycle leaning against the house */}
      <circle cx="255" cy="225" r="16" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="290" cy="225" r="16" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M255 225 L272 195 L290 225 M272 195 L265 225 M272 195 L280 180 L295 180" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
};

const ElTemploSriMariammanEnChinatown: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  const colors = [accentColor, gold, "#4A7A52", "#2C5F8A"];
  return (
    <g>
      {/* stepped gopuram tower */}
      {[0, 1, 2, 3, 4].map((i) => {
        const w = 170 - i * 26;
        const y = 230 - i * 38;
        return <rect key={i} x={205 - w / 2} y={y - 30} width={w} height="34" fill={colors[i % colors.length]} stroke={dark} strokeWidth="2" />;
      })}
      {/* small sculpted figures on each tier */}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx="205" cy={210 - i * 38} r="8" fill={gold} opacity="0.85" />
      ))}
      {/* base entrance */}
      <rect x="175" y="225" width="60" height="25" fill={dark} opacity="0.5" />
    </g>
  );
};

const ElDesfileChingay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const colors = [accentColor, "#F4A300", "#8E24AA"];
  return (
    <g>
      {[130, 205, 280].map((x, i) => (
        <g key={x}>
          {/* stilts */}
          <line x1={x - 6} y1="200" x2={x - 10} y2="250" stroke={dark} strokeWidth="4" />
          <line x1={x + 6} y1="200" x2={x + 10} y2="250" stroke={dark} strokeWidth="4" />
          {/* performer */}
          <circle cx={x} cy="150" r="13" fill={skin} stroke={dark} strokeWidth="2" />
          <path d={`M${x - 13} 162 Q${x} 155 ${x + 13} 162 L${x + 16} 205 L${x - 16} 205 Z`} fill={colors[i]} stroke={dark} strokeWidth="2.5" />
          {/* banner held up */}
          <line x1={x} y1="165" x2={x} y2="110" stroke={dark} strokeWidth="2" />
          <path d={`M${x} 110 L${x + 26} 118 L${x} 128 Z`} fill={colors[(i + 1) % 3]} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

export const singaporeIllustrations: Record<string, IllustrationDefinition> = {
  "el-merlion-simbolo-de-singapur": { component: ElMerlionSimboloDeSingapur },
  "los-supertrees-de-gardens-by-the-bay": { component: LosSupertreesDeGardensByTheBay },
  "las-casas-peranakan-y-la-cultura-baba-nyonya": { component: LasCasasPeranakanYLaCulturaBabaNyonya },
  "los-centros-de-comida-hawker-patrimonio-de-la-unesco": { component: LosCentrosDeComidaHawkerPatrimonioDeLaUnesco },
  "el-singlish-la-lengua-criolla-de-singapur": { component: ElSinglishLaLenguaCriollaDeSingapur },
  "el-raffles-hotel-y-el-singapore-sling": { component: ElRafflesHotelYElSingaporeSling },
  "kampong-glam-y-la-mezquita-del-sultan": { component: KampongGlamYLaMezquitaDelSultan },
  "la-vanda-miss-joaquim-flor-nacional": { component: LaVandaMissJoaquimFlorNacional },
  "el-skypark-de-marina-bay-sands": { component: ElSkyparkDeMarinaBaySands },
  "la-prohibicion-del-chicle-y-el-orden-singapurense": { component: LaProhibicionDelChicleYElOrdenSingapurense },
  "el-kopi-y-el-codigo-secreto-del-cafe": { component: ElKopiYElCodigoSecretoDelCafe },
  "los-hdb-la-vivienda-publica-de-singapur": { component: LosHdbLaViviendaPublicaDeSingapur },
  "pulau-ubin-la-ultima-isla-kampong": { component: PulauUbinLaUltimaIslaKampong },
  "el-templo-sri-mariamman-en-chinatown": { component: ElTemploSriMariammanEnChinatown },
  "el-desfile-chingay": { component: ElDesfileChingay },
};
