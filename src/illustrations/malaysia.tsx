import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LasTorresPetronasYSuPuenteAereo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const tower = (x: number) => (
    <g key={x}>
      <polygon points={`${x - 22},240 ${x + 22},240 ${x + 16},100 ${x - 16},100`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points={`${x - 16},100 ${x + 16},100 ${x},75`} fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.2" />
      <line x1={x} y1="75" x2={x} y2="55" stroke={dark} strokeWidth="3" />
      {[130, 160, 190, 220].map((y) => (
        <line key={y} x1={x - 18} y1={y} x2={x + 18} y2={y} stroke={dark} strokeWidth="1" opacity="0.35" />
      ))}
    </g>
  );
  return (
    <g>
      {tower(155)}
      {tower(255)}
      <rect x="177" y="150" width="56" height="14" fill={dark} opacity="0.6" />
    </g>
  );
};

const LasCuevasDeBatuYElFestivalThaipusam: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 240 L110 130 Q140 110 155 130 L155 240 Z" fill="#C9A227" stroke={dark} strokeWidth="3" />
      <circle cx="132" cy="108" r="18" fill="#C9A227" stroke={dark} strokeWidth="2.5" />
      <path d="M118 96 L128 82 L136 96 M120 90 L144 90" stroke={dark} strokeWidth="2" fill="none" />
      {[195, 215, 235, 255, 275].map((x, i) => (
        <rect key={x} x={x} y={240 - i * 12 - 14} width="20" height="14" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M180 130 Q220 105 300 130 L300 145 Q220 122 180 145 Z" fill="#8B7355" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const GeorgeTownLaCiudadPatrimonioDePenang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#5C7A9A", tint(accentColor, 0.2)];
  return (
    <g>
      {[110, 175, 240].map((x, i) => (
        <g key={x}>
          <rect x={x} y="160" width="55" height="80" fill={colors[i]} stroke={dark} strokeWidth="2.5" />
          <rect x={x - 4} y="150" width="63" height="12" fill={dark} opacity="0.5" />
          <rect x={x + 12} y="180" width="14" height="18" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
          <rect x={x + 30} y="180" width="14" height="18" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <path d="M120 130 Q140 118 160 132 Q150 108 175 112" fill="none" stroke="#C1272D" strokeWidth="4" strokeLinecap="round" />
      <circle cx="145" cy="122" r="4" fill="#C9A227" />
    </g>
  );
};

const ElMonteKinabaluElTechoDeBorneo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,240 180,110 210,150 240,95 320,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="230,120 240,95 252,118" fill="#F5F0E6" opacity="0.85" />
      <polygon points="170,135 180,110 192,130" fill="#F5F0E6" opacity="0.85" />
      <ellipse cx="205" cy="175" rx="70" ry="14" fill="#F5F0E6" opacity="0.55" />
      <ellipse cx="150" cy="200" rx="50" ry="10" fill="#F5F0E6" opacity="0.4" />
    </g>
  );
};

const LosOrangutanesDeSepilok: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 100 Q145 200 140 240" fill="none" stroke="#5C7A3A" strokeWidth="10" strokeLinecap="round" />
      <path d="M140 130 Q205 90 270 100" fill="none" stroke="#5C7A3A" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="215" cy="130" rx="26" ry="24" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M190 118 Q180 95 195 85 Q192 105 205 112 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M240 118 Q252 98 240 86 Q240 105 228 112 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="207" cy="128" r="3.5" fill="#3A2418" />
      <circle cx="223" cy="128" r="3.5" fill="#3A2418" />
      <path d="M195 165 L180 195 M235 165 L245 200" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <path d="M205 150 L200 175 M225 150 L230 178" stroke={dark} strokeWidth="4" opacity="0.4" fill="none" />
    </g>
  );
};

const ElNasiLemakPlatoNacionalDeMalasia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 230 L290 230 L270 150 Q205 130 140 150 Z" fill="#5C7A3A" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="195" rx="65" ry="20" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[[175, 190], [205, 186], [235, 190]].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="8" ry="5" fill="#C9A227" opacity="0.85" />
      ))}
      <rect x="170" y="205" width="16" height="10" fill="#8B5A2B" />
      <circle cx="240" cy="205" r="8" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <circle cx="240" cy="205" r="4" fill="#C9A227" />
    </g>
  );
};

const ElSongketTejidoConHiloDeOro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="110" width="170" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <polygon
            key={`${row}-${col}`}
            points={`${140 + col * 32},${130 + row * 28} ${152 + col * 32},${122 + row * 28} ${164 + col * 32},${130 + row * 28} ${152 + col * 32},${138 + row * 28}`}
            fill="#C9A227"
            opacity="0.85"
          />
        ))
      )}
    </g>
  );
};

const ElWauBulanLaCometaLuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path
        d="M110 150 Q160 90 210 130 Q260 90 300 150 Q260 200 210 175 Q160 200 110 150 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      <path d="M150 130 Q205 110 260 130" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
      <circle cx="205" cy="140" r="10" fill="#C9A227" stroke={dark} strokeWidth="2" />
      <path d="M205 175 Q195 210 205 240 M205 175 Q215 210 205 240" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <line x1="205" y1="140" x2="130" y2="230" stroke="#8B7355" strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const ElReyQueRotaEntreNueveSultanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const small = [
    [140, 210],
    [170, 220],
    [270, 220],
    [300, 210],
    [155, 230],
    [285, 230],
  ];
  return (
    <g>
      <rect x="160" y="220" width="90" height="20" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <path d="M175 220 L180 175 L195 200 L205 165 L215 200 L230 175 L235 220 Z" fill="#C9A227" stroke={dark} strokeWidth="2.8" />
      <circle cx="205" cy="160" r="6" fill="#8B1A1A" stroke={dark} strokeWidth="1.5" />
      {small.map(([x, y]) => (
        <path key={x} d={`M${x - 10} ${y + 12} L${x - 8} ${y} L${x} ${y - 10} L${x + 8} ${y} L${x + 10} ${y + 12} Z`} fill="#C9A227" opacity="0.6" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const AFamosaYElSultanatoDeMalaca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="130" width="110" height="110" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M175 240 L175 155 Q205 135 235 155 L235 240 Z" fill="#0F3D45" />
      <rect x="140" y="118" width="20" height="18" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      <rect x="250" y="118" width="20" height="18" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      <polygon points="195,155 205,135 215,155" fill="#C9A227" stroke={dark} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={155 + i * 45} y="200" width="12" height="16" fill="#0F3D45" opacity="0.7" />
      ))}
    </g>
  );
};

const LosPeranakanLaCulturaBabaNyonya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const porcelain = "#F5F0E6";
  return (
    <g>
      {/* beaded slipper */}
      <path d="M110 220 Q100 200 130 190 Q180 180 220 200 Q225 220 200 230 Q150 240 110 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[
        [135, 205],
        [160, 198],
        [185, 202],
        [150, 215],
        [175, 212],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={gold} opacity="0.9" />
      ))}
      {/* porcelain teapot */}
      <path d="M245 210 Q245 185 275 185 Q305 185 305 210 Q305 228 275 228 Q245 228 245 210 Z" fill={porcelain} stroke={dark} strokeWidth="2.5" />
      <path d="M305 205 L322 195" stroke={porcelain} strokeWidth="7" strokeLinecap="round" />
      <path d="M225 200 Q215 200 215 212 Q215 222 228 218" fill="none" stroke={porcelain} strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="275" cy="182" rx="10" ry="5" fill={dark} opacity="0.5" />
      <path d="M258 200 Q275 192 292 200" fill="none" stroke={accentColor} strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const ElSilatMelayuArteMarcialTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  return (
    <g>
      {/* fighter 1, low crouching stance */}
      <circle cx="155" cy="150" r="15" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M140 163 Q155 155 170 163 L175 210 L135 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M140 208 L118 235" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
      <path d="M170 208 L195 228" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
      <path d="M144 170 Q115 178 105 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M166 170 Q195 168 210 185" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* fighter 2, mirrored */}
      <circle cx="255" cy="150" r="15" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M240 163 Q255 155 270 163 L265 210 L235 205 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <path d="M240 205 L215 228" stroke={tint(accentColor, 0.3)} strokeWidth="12" strokeLinecap="round" />
      <path d="M264 208 L286 235" stroke={tint(accentColor, 0.3)} strokeWidth="12" strokeLinecap="round" />
      <path d="M244 170 Q272 168 288 185" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M266 170 Q295 178 300 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const LasCuevasDeGunungMulu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const sky = "#F4C87A";
  return (
    <g>
      {/* cave rock silhouette */}
      <path d="M85 250 L85 160 Q130 100 205 110 Q280 100 320 160 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* cave mouth opening */}
      <path d="M150 250 L155 190 Q205 160 255 190 L260 250 Z" fill={sky} opacity="0.7" />
      {/* spiraling bats */}
      {[
        [190, 220],
        [210, 195],
        [230, 215],
        [195, 175],
        [240, 180],
        [170, 200],
        [220, 155],
      ].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} L${x - 6} ${y - 5} M${x} ${y} L${x + 6} ${y - 5}`} stroke={dark} strokeWidth="2" strokeLinecap="round" />
      ))}
    </g>
  );
};

const ElTehTarikElTeEstirado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C9946B";
  const tea = "#8B4513";
  return (
    <g>
      {/* person */}
      <circle cx="150" cy="140" r="15" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M135 153 Q150 146 165 153 L170 220 L130 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* raised arm holding upper cup */}
      <path d="M162 158 Q195 140 215 110" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M138 158 Q120 175 118 200" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* upper vessel */}
      <path d="M200 100 L230 100 L226 118 L204 118 Z" fill={tea} stroke={dark} strokeWidth="2" />
      {/* pouring stream */}
      <path d="M215 118 Q210 155 205 190" fill="none" stroke={tea} strokeWidth="3" opacity="0.8" />
      {/* lower vessel with foam */}
      <path d="M188 195 L222 195 L216 225 L194 225 Z" fill={tea} opacity="0.7" stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="195" rx="17" ry="6" fill="#F5F0E6" opacity="0.85" />
    </g>
  );
};

const LaRafflesiaLaFlorMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const spot = "#F5F0E6";
  const ground = "#4A7A52";
  return (
    <g>
      {/* forest floor */}
      <ellipse cx="205" cy="240" rx="120" ry="15" fill={ground} opacity="0.4" />
      {/* five petals */}
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse key={deg} cx="205" cy="165" rx="30" ry="55" fill={accentColor} stroke={dark} strokeWidth="2.5" transform={`rotate(${deg} 205 200)`} />
      ))}
      {/* white spots on petals */}
      {[
        [175, 170],
        [230, 175],
        [205, 145],
        [190, 210],
        [220, 205],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={spot} opacity="0.8" />
      ))}
      {/* central opening */}
      <circle cx="205" cy="200" r="30" fill={dark} opacity="0.6" />
      <circle cx="205" cy="200" r="18" fill={shade(accentColor, 0.5)} />
    </g>
  );
};

export const malaysiaIllustrations: Record<string, IllustrationDefinition> = {
  "las-torres-petronas-y-su-puente-aereo": { component: LasTorresPetronasYSuPuenteAereo },
  "las-cuevas-de-batu-y-el-festival-thaipusam": { component: LasCuevasDeBatuYElFestivalThaipusam },
  "george-town-la-ciudad-patrimonio-de-penang": { component: GeorgeTownLaCiudadPatrimonioDePenang },
  "el-monte-kinabalu-el-techo-de-borneo": { component: ElMonteKinabaluElTechoDeBorneo },
  "los-orangutanes-de-sepilok": { component: LosOrangutanesDeSepilok },
  "el-nasi-lemak-plato-nacional-de-malasia": { component: ElNasiLemakPlatoNacionalDeMalasia },
  "el-songket-tejido-con-hilo-de-oro": { component: ElSongketTejidoConHiloDeOro },
  "el-wau-bulan-la-cometa-luna": { component: ElWauBulanLaCometaLuna },
  "el-rey-que-rota-entre-nueve-sultanes": { component: ElReyQueRotaEntreNueveSultanes },
  "a-famosa-y-el-sultanato-de-malaca": { component: AFamosaYElSultanatoDeMalaca },
  "los-peranakan-la-cultura-baba-nyonya": { component: LosPeranakanLaCulturaBabaNyonya },
  "el-silat-melayu-arte-marcial-tradicional": { component: ElSilatMelayuArteMarcialTradicional },
  "las-cuevas-de-gunung-mulu": { component: LasCuevasDeGunungMulu },
  "el-teh-tarik-el-te-estirado": { component: ElTehTarikElTeEstirado },
  "la-rafflesia-la-flor-mas-grande-del-mundo": { component: LaRafflesiaLaFlorMasGrandeDelMundo },
};
