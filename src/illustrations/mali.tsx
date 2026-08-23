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
};
