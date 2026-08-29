import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AngkorWatElTemploReligiosoMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const towers = [
    { x: 200, h: 90, w: 26 },
    { x: 150, h: 65, w: 20 },
    { x: 250, h: 65, w: 20 },
    { x: 115, h: 48, w: 16 },
    { x: 285, h: 48, w: 16 },
  ];
  return (
    <g>
      <rect x="95" y="215" width="215" height="10" fill="#1B5E7A" opacity="0.4" />
      {towers.map((t) => (
        <g key={t.x}>
          <rect x={t.x - t.w / 2} y={225 - t.h} width={t.w} height={t.h} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <path d={`M${t.x - t.w / 2 - 4} ${225 - t.h} Q${t.x} ${225 - t.h - 26} ${t.x + t.w / 2 + 4} ${225 - t.h} Z`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
        </g>
      ))}
      <rect x="95" y="225" width="215" height="20" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      {towers.map((t) => (
        <path key={`r-${t.x}`} d={`M${t.x - t.w / 2} 245 L${t.x + t.w / 2} 245 L${t.x} ${245 + t.h * 0.5} Z`} fill={dark} opacity="0.25" />
      ))}
    </g>
  );
};

const ElBayonElTemploDeLosRostrosSonrientes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 240 L150 110 Q200 85 250 110 L250 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="178" cy="145" rx="8" ry="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <ellipse cx="222" cy="145" rx="8" ry="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="178" cy="145" r="3.5" fill={dark} />
      <circle cx="222" cy="145" r="3.5" fill={dark} />
      <path d="M195 150 L200 168 L205 150" fill="none" stroke={dark} strokeWidth="2.5" />
      <path d="M172 190 Q200 205 228 190" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <rect x="115" y="150" width="24" height="90" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      <rect x="261" y="150" width="24" height="90" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaDanzaApsaraPatrimonioDeLaUnesco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 95 L200 60 L220 95 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M188 95 L200 72 L212 95 Z" fill={tint(accentColor, 0.4)} />
      <circle cx="200" cy="112" r="16" fill="#D9B48A" stroke={dark} strokeWidth="2.5" />
      <path d="M172 135 Q200 118 228 135 L222 225 L178 225 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M172 135 Q150 150 145 175 Q158 178 168 165" fill="#D9B48A" stroke={dark} strokeWidth="2.5" />
      <path d="M228 135 Q250 150 255 175 Q242 178 232 165" fill="#D9B48A" stroke={dark} strokeWidth="2.5" />
      <circle cx="147" cy="176" r="5" fill="#D9B48A" stroke={dark} strokeWidth="1.5" />
      <circle cx="253" cy="176" r="5" fill="#D9B48A" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElTonleSapYSusPueblosFlotantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const houses = [
    { x: 140, w: 55, h: 40 },
    { x: 220, w: 65, h: 48 },
    { x: 295, w: 45, h: 34 },
  ];
  return (
    <g>
      <ellipse cx="205" cy="240" rx="120" ry="12" fill="#1B5E7A" opacity="0.5" />
      {houses.map((h) => (
        <g key={h.x}>
          <rect x={h.x - h.w / 2} y={225 - h.h} width={h.w} height={h.h} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <polygon points={`${h.x - h.w / 2 - 6},${225 - h.h} ${h.x},${225 - h.h - 22} ${h.x + h.w / 2 + 6},${225 - h.h}`} fill="#8B5A2B" stroke={dark} strokeWidth="2" />
          <rect x={h.x - 4} y="225" width="8" height="12" fill={dark} opacity="0.5" />
        </g>
      ))}
      <path d="M100 235 Q120 228 145 235" fill="none" stroke="#5C3A21" strokeWidth="3" />
    </g>
  );
};

const CoulChnamTmeyElAnoNuevoJemer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="150" cy="130" r="14" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M136 150 Q150 138 164 150 L160 225 L140 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="260" cy="130" r="14" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M246 150 Q260 138 274 150 L270 225 L250 225 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M170 150 Q200 130 230 150" fill="none" stroke="#3E8E7E" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
      {[[195, 128], [205, 118], [215, 128]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill="#3E8E7E" opacity="0.6" />
      ))}
      <rect x="140" y="175" width="20" height="30" fill="#F5F0E6" opacity="0.7" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElHolLaSedaIkatJemer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cols = ["#8B1A3A", accentColor, "#D4941E", "#3E8E7E", "#8B1A3A", accentColor];
  return (
    <g>
      <rect x="105" y="90" width="200" height="15" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <rect x="105" y="220" width="200" height="15" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <line x1="115" y1="90" x2="115" y2="235" stroke="#5C3A21" strokeWidth="6" />
      <line x1="295" y1="90" x2="295" y2="235" stroke="#5C3A21" strokeWidth="6" />
      {cols.map((c, i) => (
        <rect key={i} x={130 + i * 30} y="105" width="24" height="115" fill={c} opacity="0.85" />
      ))}
      {[130, 150, 170].map((y) => (
        <line key={y} x1="130" y1={y} x2="290" y2={y} stroke={dark} strokeWidth="1" opacity="0.3" />
      ))}
    </g>
  );
};

const ElAmokPlatoNacionalDeCamboya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 200 Q205 175 280 200 Q270 240 205 245 Q140 240 130 200 Z" fill="#3F7D2E" stroke={dark} strokeWidth="3" />
      <path d="M150 205 Q205 190 260 205 Q252 225 205 230 Q158 225 150 205 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M175 160 Q180 180 175 200 M205 155 Q208 178 205 200 M235 160 Q232 180 235 200" stroke="#F5F0E6" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
    </g>
  );
};

const LaEscrituraJemerHerederaDelBrahmi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const rows = [120, 145, 170, 195];
  return (
    <g transform="rotate(-3 205 165)">
      <rect x="120" y="100" width="170" height="130" rx="6" fill={accentColor} stroke={dark} strokeWidth="3" />
      {rows.map((y) => (
        <g key={y}>
          {[145, 175, 205, 235, 265].map((x) => (
            <g key={x}>
              <circle cx={x} cy={y} r="6" fill="none" stroke={dark} strokeWidth="2" />
              <path d={`M${x} ${y + 6} Q${x + 4} ${y + 14} ${x} ${y + 18}`} fill="none" stroke={dark} strokeWidth="2" />
            </g>
          ))}
        </g>
      ))}
    </g>
  );
};

const ElKramaLaPrendaMasCamboyana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cells = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      cells.push([120 + col * 30, 100 + row * 28]);
    }
  }
  return (
    <g transform="rotate(6 205 165)">
      <rect x="110" y="90" width="190" height="150" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {cells.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="15" height="14" fill={(Math.floor(x / 30) + Math.floor(y / 28)) % 2 === 0 ? accentColor : "#F5F0E6"} />
      ))}
    </g>
  );
};

const TaProhmElTemploDevoradoPorLaSelva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="140" width="110" height="100" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="100" width="40" height="45" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M120 105 Q160 95 175 130 Q185 160 165 175 Q195 185 200 220 L185 225 Q175 195 150 190 Q125 185 118 155 Q113 125 120 105 Z" fill="#3F7D2E" stroke={dark} strokeWidth="2.5" />
      <path d="M290 110 Q255 100 245 135 Q238 165 260 178 Q235 188 232 220 L248 225 Q255 195 275 190 Q298 185 298 155 Q300 128 290 110 Z" fill="#3F7D2E" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="90" rx="55" ry="20" fill="#3F7D2E" opacity="0.6" />
    </g>
  );
};

const ElBokatorElArteMarcialQueRenacioDeLasRuinas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C9946B";
  return (
    <g>
      {/* torso in fighting stance */}
      <path d="M170 165 Q205 155 240 165 L235 235 L175 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head */}
      <circle cx="205" cy="145" r="18" fill={skin} stroke={dark} strokeWidth="2.5" />
      {/* raised guarding arm */}
      <path d="M175 175 Q150 165 145 135" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* striking arm extended */}
      <path d="M235 175 Q270 180 285 160" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* waist sash */}
      <rect x="175" y="215" width="60" height="16" fill="#C1272D" stroke={shade("#C1272D", 0.3)} strokeWidth="2" />
      {/* stance legs */}
      <path d="M188 233 Q170 242 158 248" stroke={dark} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M222 233 Q245 238 256 248" stroke={dark} strokeWidth="8" strokeLinecap="round" fill="none" />
    </g>
  );
};

const ElPrahokLaPastaDePescadoFermentado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const paste = "#7A8060";
  return (
    <g>
      {/* clay jar */}
      <path d="M160 240 Q150 200 165 175 Q175 160 205 158 Q235 160 245 175 Q260 200 250 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="42" ry="12" fill={paste} stroke={shade(paste, 0.3)} strokeWidth="2.5" />
      <ellipse cx="205" cy="172" rx="32" ry="8" fill={shade(paste, 0.15)} opacity="0.9" />
      {/* fish drying on a line above */}
      <line x1="270" y1="110" x2="320" y2="110" stroke="#8B5A2B" strokeWidth="3" />
      {[280, 300, 315].map((x) => (
        <path key={x} d={`M${x - 14} 110 Q${x} 100 ${x + 14} 110 Q${x} 120 ${x - 14} 110 Z`} fill="#D9A46A" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElNorryElTrenDeBambuDeBattambang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bamboo = "#A0822E";
  return (
    <g>
      {/* rusty rails */}
      <line x1="85" y1="235" x2="320" y2="235" stroke="#8C8C6E" strokeWidth="5" />
      <line x1="85" y1="222" x2="320" y2="222" stroke="#8C8C6E" strokeWidth="5" />
      {[110, 150, 190, 230, 270, 300].map((x) => (
        <rect key={x} x={x - 4} y="220" width="8" height="18" fill="#6B5B3A" />
      ))}
      {/* bamboo platform */}
      <rect x="150" y="180" width="110" height="30" fill={bamboo} stroke={shade(bamboo, 0.3)} strokeWidth="2.5" />
      {[160, 178, 196, 214, 232, 250].map((x) => (
        <line key={x} x1={x} y1="180" x2={x} y2="210" stroke={shade(bamboo, 0.25)} strokeWidth="2" />
      ))}
      {/* wheels/axles */}
      <circle cx="175" cy="215" r="10" fill="#4A4A4A" stroke={dark} strokeWidth="2" />
      <circle cx="235" cy="215" r="10" fill="#4A4A4A" stroke={dark} strokeWidth="2" />
      {/* small motor at the back */}
      <rect x="245" y="165" width="22" height="18" fill="#5B5B5B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaPagodaDePlataDelPalacioReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  const silver = "#C8CDD2";
  return (
    <g>
      {/* silver tiled floor */}
      <rect x="90" y="215" width="230" height="30" fill={silver} stroke={dark} strokeWidth="2" />
      {[105, 135, 165, 195, 225, 255, 285].map((x) => (
        <line key={x} x1={x} y1="215" x2={x} y2="245" stroke={shade(silver, 0.2)} strokeWidth="1.5" opacity="0.6" />
      ))}
      {/* temple body */}
      <rect x="150" y="140" width="110" height="80" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      {/* stepped roof */}
      <path d="M140 140 L270 140 L250 110 L160 110 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M160 110 L250 110 L235 88 L175 88 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M175 88 L235 88 L205 65 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="65" x2="205" y2="50" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ElKoupreyElBueySalvajeQueNadieHaVistoEnDecadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const grass = "#8FA05A";
  return (
    <g>
      {/* tall grassland */}
      {[100, 130, 270, 300].map((x) => (
        <path key={x} d={`M${x} 250 Q${x - 6} 220 ${x} 195`} fill="none" stroke={grass} strokeWidth="5" opacity="0.6" strokeLinecap="round" />
      ))}
      {/* body */}
      <path d="M150 225 Q145 190 190 185 Q245 180 265 205 Q272 213 262 220 L258 240 L155 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head */}
      <circle cx="162" cy="200" r="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* long upward-curving horns */}
      <path d="M155 186 Q140 155 155 125 Q160 112 172 110" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M172 186 Q160 155 175 128 Q182 115 195 113" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* legs */}
      {[175, 200, 225, 245].map((x) => (
        <line key={x} x1={x} y1="238" x2={x} y2="250" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      ))}
    </g>
  );
};

export const cambodiaIllustrations: Record<string, IllustrationDefinition> = {
  "angkor-wat-el-templo-religioso-mas-grande-del-mundo": { component: AngkorWatElTemploReligiosoMasGrandeDelMundo },
  "el-bayon-el-templo-de-los-rostros-sonrientes": { component: ElBayonElTemploDeLosRostrosSonrientes },
  "la-danza-apsara-patrimonio-de-la-unesco": { component: LaDanzaApsaraPatrimonioDeLaUnesco },
  "el-tonle-sap-y-sus-pueblos-flotantes": { component: ElTonleSapYSusPueblosFlotantes },
  "choul-chnam-thmey-el-ano-nuevo-jemer": { component: CoulChnamTmeyElAnoNuevoJemer },
  "el-hol-la-seda-ikat-jemer": { component: ElHolLaSedaIkatJemer },
  "el-amok-plato-nacional-de-camboya": { component: ElAmokPlatoNacionalDeCamboya },
  "la-escritura-jemer-heredera-del-brahmi": { component: LaEscrituraJemerHerederaDelBrahmi },
  "el-krama-la-prenda-mas-camboyana": { component: ElKramaLaPrendaMasCamboyana },
  "ta-prohm-el-templo-devorado-por-la-selva": { component: TaProhmElTemploDevoradoPorLaSelva },
  "el-bokator-el-arte-marcial-que-renacio-de-las-ruinas": { component: ElBokatorElArteMarcialQueRenacioDeLasRuinas },
  "el-prahok-la-pasta-de-pescado-fermentado": { component: ElPrahokLaPastaDePescadoFermentado },
  "el-norry-el-tren-de-bambu-de-battambang": { component: ElNorryElTrenDeBambuDeBattambang },
  "la-pagoda-de-plata-del-palacio-real": { component: LaPagodaDePlataDelPalacioReal },
  "el-kouprey-el-buey-salvaje-que-nadie-ha-visto-en-decadas": { component: ElKoupreyElBueySalvajeQueNadieHaVistoEnDecadas },
};
