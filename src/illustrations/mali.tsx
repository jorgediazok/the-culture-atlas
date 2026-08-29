import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

function camel(x: number, y: number, scale: number, dark: string, body = "#C9A063") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-30 10 Q-32 -18 -18 -22 Q-10 -30 0 -22 Q10 -30 20 -20 Q34 -16 32 10 Z" fill={body} stroke={dark} strokeWidth="2.4" />
      <path d="M22 -18 Q34 -34 42 -30 Q46 -18 34 -8 L26 -6 Z" fill={body} stroke={dark} strokeWidth="2.2" />
      <circle cx="42" cy="-30" r="7" fill={body} stroke={dark} strokeWidth="2" />
      <path d="M-30 8 L-34 34 M-14 10 L-16 34 M8 10 L8 34 M26 8 L28 34" stroke={dark} strokeWidth="4.5" strokeLinecap="round" />
    </g>
  );
}

const LaCiudadLegendariaDeLosManuscritosDorados: IllustrationComponent = () => (
  <g>
    <rect x="90" y="220" width="230" height="30" fill="#D9C08A" opacity="0.4" />
    <path d="M150 220 L250 220 L235 150 L165 150 Z" fill="#B5651D" stroke="#5C3A21" strokeWidth="2.6" />
    <rect x="190" y="130" width="20" height="24" fill="#B5651D" stroke="#5C3A21" strokeWidth="2.2" />
    {[[110, 210], [140, 200], [270, 205], [290, 215]].map(([x, y], i) => (
      <g key={i} transform={`translate(${x} ${y}) rotate(${i % 2 === 0 ? -8 : 6})`}>
        <rect x="-16" y="0" width="32" height="8" fill="#D9C08A" stroke="#8A6A10" strokeWidth="1.4" />
        <rect x="-16" y="10" width="32" height="8" fill="#D9C08A" stroke="#8A6A10" strokeWidth="1.4" />
      </g>
    ))}
  </g>
);

const LaMezquitaDeBarroQueSeReparaAManoCadaAno: IllustrationComponent = () => (
  <g>
    <path d="M140 250 L145 150 L255 150 L260 250 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2.8" />
    <rect x="188" y="118" width="24" height="32" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2.4" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line key={i} x1={155 + i * 18} y1="150" x2={155 + i * 18} y2="245" stroke="#8B5A2B" strokeWidth="3" />
    ))}
    {[0, 1].map((i) => (
      <line key={i} x1={160 + i * 80} y1="185" x2={160 + i * 80 + 20} y2="185" stroke="#5C3A21" strokeWidth="4" />
    ))}
  </g>
);

const ElHombreMasRicoQueExistioJamas: IllustrationComponent = () => (
  <g>
    {person(180, 240, 1.1, "#8A6A10", "#D9A227")}
    <path d="M168 200 Q180 190 192 200 L194 210 Q180 216 166 210 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.8" />
    {camel(255, 215, 0.8, "#5C3A21")}
    <rect x="240" y="188" width="20" height="14" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.6" />
  </g>
);

const ElPuebloQueConstruyoSuHogarEnUnAcantilado: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L100 140 L320 130 L310 250 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.8" />
    {[[130, 200, 22, 26], [175, 175, 26, 30], [225, 195, 20, 24], [265, 165, 24, 28]].map(([x, y, w, h], i) => (
      <rect key={i} x={x} y={y} width={w} height={h} fill="#B5651D" stroke="#5C3A21" strokeWidth="1.8" />
    ))}
  </g>
);

const LaCartaDeDerechosMasAntiguaDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 90 L205 90 L205 180 L195 180 Z" fill="#5C3A21" />
      <ellipse cx="200" cy="150" rx="70" ry="16" fill="#3A7A45" opacity="0.5" />
      {[[150, 220], [200, 232], [250, 220], [175, 240], [225, 240]].map(([x, y], i) => (
        person(x, y, 0.6, dark, i % 2 === 0 ? accentColor : tint(accentColor, 0.25))
      ))}
    </g>
  );
};

const LaTelaQueSeTineConBarroFermentado: IllustrationComponent = () => (
  <g>
    <rect x="120" y="120" width="160" height="120" fill="#D9C08A" stroke="#5C3A21" strokeWidth="2.6" />
    {[[150, 150], [200, 150], [250, 150], [150, 190], [200, 190], [250, 190], [150, 220], [200, 220], [250, 220]].map(([x, y], i) => (
      <path key={i} d={`M${x - 12} ${y} L${x} ${y - 12} L${x + 12} ${y} L${x} ${y + 12} Z`} fill="#3A2A1E" opacity="0.8" />
    ))}
  </g>
);

const ElDeltaDondeUnRioSeMultiplicaEnMilCanales: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#1B7A9C" opacity="0.35" />
    <path d="M90 180 Q160 160 200 190 Q240 220 320 195" fill="none" stroke="#1B7A9C" strokeWidth="8" opacity="0.6" />
    <path d="M90 220 Q160 210 200 230 Q250 245 320 225" fill="none" stroke="#1B7A9C" strokeWidth="6" opacity="0.5" />
    <path d="M175 195 L235 195 L222 178 L188 178 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
    {[[130, 160], [270, 170]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x + 4} ${y - 20} M${x + 8} ${y} L${x + 12} ${y - 24} M${x + 16} ${y} L${x + 18} ${y - 18}`} stroke="#3A7A45" strokeWidth="2.4" strokeLinecap="round" />
    ))}
  </g>
);

const LasCaravanasQueTodaviaCruzanElDesiertoPorSal: IllustrationComponent = () => (
  <g>
    <rect x="90" y="220" width="230" height="30" fill="#D9C08A" opacity="0.5" />
    {camel(130, 210, 0.9, "#5C3A21")}
    {camel(215, 215, 0.85, "#5C3A21")}
    {camel(295, 218, 0.75, "#5C3A21")}
    {[[130, 178], [215, 183], [295, 186]].map(([x, y], i) => (
      <rect key={i} x={x - 14} y={y} width="28" height="14" fill="#F5F0E6" stroke="#8B7355" strokeWidth="1.8" />
    ))}
  </g>
);

const LaBolaDeMijoQueAlimentaAlSahel: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="90" ry="24" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="185" cy="195" rx="32" ry="26" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.4" />
    <ellipse cx="245" cy="205" rx="20" ry="14" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.8" />
  </g>
);

const ElBluesDelDesiertoQueNacioEntreGuitarrasTuareg: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q140 220 200 235 Q260 250 320 220 L320 250 Z" fill="#D9C08A" opacity="0.5" />
      {person(200, 240, 1.1, dark, accentColor)}
      <ellipse cx="220" cy="205" rx="24" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" transform="rotate(-15 220 205)" />
      <rect x="238" y="178" width="5" height="38" fill={dark} transform="rotate(-15 240 197)" />
    </g>
  );
};

const TumbaAskiaGao: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const STAKES = [0, 1, 2, 3];
  return (
    <g>
      <path d="M130 240 L175 130 L235 130 L280 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M155 240 L190 155 L220 155 L255 240 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.4" />
      {STAKES.map((i) => (
        <g key={i}>
          <line x1={150 + i * 15} y1={220 - i * 15} x2={165 + i * 15} y2={220 - i * 15} stroke="#5C3A21" strokeWidth="3" />
          <line x1={260 - i * 15} y1={220 - i * 15} x2={245 - i * 15} y2={220 - i * 15} stroke="#5C3A21" strokeWidth="3" />
        </g>
      ))}
      <rect x="195" y="200" width="20" height="40" fill="#3A2A1E" opacity="0.6" />
    </g>
  );
};

const ChiwaraTocadoAntilope: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M187 165 Q165 155 170 130" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M213 165 Q235 175 230 200" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <line x1="194" y1="205" x2="188" y2="240" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="206" y1="205" x2="215" y2="240" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M187 165 Q200 158 213 165 L206 205 L194 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="200" cy="150" r="13" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M188 140 Q200 100 212 140 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.2" />
      <path d="M195 105 Q188 85 195 70 M205 105 Q212 85 205 70" fill="none" stroke={wood} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const SalifKeitaVozDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9BE8F";
  return (
    <g>
      <ellipse cx="205" cy="150" rx="70" ry="70" fill={tint(accentColor, 0.3)} opacity="0.5" />
      <path d="M187 185 Q165 195 168 215" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M213 185 Q235 190 232 165" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M187 178 Q200 168 213 178 L207 220 Q200 226 193 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="200" cy="163" r="14" fill={skin} stroke={dark} strokeWidth="2" />
      <ellipse cx="232" cy="160" rx="9" ry="13" fill="#3A3A3A" />
      <rect x="230" y="172" width="4" height="30" fill="#5C5C5C" />
    </g>
  );
};

const CruceGanadoDiafarabe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cow = "#8B5A2B";
  const COWS: [number, number][] = [
    [140, 200], [190, 210], [240, 195], [280, 215],
  ];
  return (
    <g>
      <rect x="90" y="150" width="230" height="100" fill="#1B7A9C" opacity="0.4" />
      {COWS.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path d={`M${x - 18} ${y - 10} Q${x - 22} ${y - 16} ${x - 16} ${y - 14} M${x - 10} ${y - 10} Q${x - 6} ${y - 16} ${x - 12} ${y - 14}`} stroke="#F5F0E6" strokeWidth="2" fill="none" />
          <ellipse cx={x - 14} cy={y - 6} rx="7" ry="6" fill={cow} stroke={dark} strokeWidth="1.6" />
          <ellipse cx={x} cy={y} rx="16" ry="10" fill={cow} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <circle cx="115" cy="235" r="11" fill="#3A2A1E" stroke={dark} strokeWidth="2" />
      <path d="M105 248 Q115 240 125 248 L120 250 L110 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const AttayaCeremoniaDelTe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 130 Q160 128 155 145 Q158 155 172 150" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M180 130 Q175 110 195 105 L230 108 Q245 112 240 130 L235 160 L190 160 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <rect x="200" y="95" width="8" height="14" fill={dark} />
      <path d="M212 160 Q210 190 208 215" fill="none" stroke={tint(accentColor, 0.4)} strokeWidth="3" opacity="0.7" />
      <path d="M195 235 L195 210 Q195 202 205 202 Q215 202 215 210 L215 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="205" cy="210" rx="10" ry="4" fill="#3A7A45" opacity="0.7" />
    </g>
  );
};

export const maliIllustrations: Record<string, IllustrationDefinition> = {
  "la-ciudad-legendaria-de-los-manuscritos-dorados": { component: LaCiudadLegendariaDeLosManuscritosDorados },
  "la-mezquita-de-barro-que-se-repara-a-mano-cada-ano": { component: LaMezquitaDeBarroQueSeReparaAManoCadaAno },
  "el-hombre-mas-rico-que-existio-jamas": { component: ElHombreMasRicoQueExistioJamas },
  "el-pueblo-que-construyo-su-hogar-en-un-acantilado": { component: ElPuebloQueConstruyoSuHogarEnUnAcantilado },
  "la-carta-de-derechos-mas-antigua-de-africa": { component: LaCartaDeDerechosMasAntiguaDeAfrica },
  "la-tela-que-se-tine-con-barro-fermentado": { component: LaTelaQueSeTineConBarroFermentado },
  "el-delta-donde-el-rio-se-multiplica-en-mil-canales": { component: ElDeltaDondeUnRioSeMultiplicaEnMilCanales },
  "las-caravanas-que-todavia-cruzan-el-desierto-por-sal": { component: LasCaravanasQueTodaviaCruzanElDesiertoPorSal },
  "la-bola-de-mijo-que-alimenta-al-sahel": { component: LaBolaDeMijoQueAlimentaAlSahel },
  "el-blues-del-desierto-que-nacio-entre-guitarras-tuareg": { component: ElBluesDelDesiertoQueNacioEntreGuitarrasTuareg },
  "tumba-askia-gao": { component: TumbaAskiaGao },
  "chiwara-tocado-antilope": { component: ChiwaraTocadoAntilope },
  "salif-keita-voz-de-africa": { component: SalifKeitaVozDeAfrica },
  "cruce-ganado-diafarabe": { component: CruceGanadoDiafarabe },
  "attaya-ceremonia-del-te": { component: AttayaCeremoniaDelTe },
};
