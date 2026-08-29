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

const LasMontanasQueDanNacimientoALosGrandesRios: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L90 210 L140 210 L140 180 L190 180 L190 150 L240 150 L240 190 L290 190 L290 250 Z" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.6" />
    <path d="M195 150 Q190 190 200 230 Q205 245 195 250 L215 250 Q207 245 210 230 Q214 190 210 150 Z" fill="#BFE3F0" stroke="#1B7A9C" strokeWidth="2" />
    <path d="M140 210 L140 180 L190 180" fill="none" stroke="#1B4B1E" strokeWidth="1.6" opacity="0.5" />
    <path d="M190 150 L240 150 L240 190" fill="none" stroke="#1B4B1E" strokeWidth="1.6" opacity="0.5" />
  </g>
);

const ElTamborQueHizoBailarAlMundoEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(200, 240, 1.15, dark, accentColor)}
      <path d="M175 175 Q160 210 172 235 Q200 250 228 235 Q240 210 225 175 Q200 160 175 175 Z" fill="#D9A227" stroke="#8B5A2B" strokeWidth="2.6" />
      <ellipse cx="200" cy="175" rx="26" ry="10" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.2" />
      <path d="M175 175 L165 220 M225 175 L235 220" stroke="#5C3A21" strokeWidth="2" opacity="0.6" />
      <path d="M180 155 L185 172 M220 155 L215 172" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const LaMascaraQueRepresentaALaMadrePerfecta: IllustrationComponent = () => (
  <g>
    <path d="M170 250 L175 130 Q200 105 225 130 L230 250 Z" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="2.8" />
    <ellipse cx="200" cy="135" rx="20" ry="16" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="2.4" />
    <ellipse cx="180" cy="175" rx="12" ry="16" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="2.2" />
    <ellipse cx="220" cy="175" rx="12" ry="16" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="2.2" />
    <path d="M188 112 Q200 100 212 112" fill="none" stroke="#3A2A1E" strokeWidth="3" />
    <path d="M188 118 Q194 112 200 118" fill="none" stroke="#3A2A1E" strokeWidth="2" />
    <path d="M200 118 Q206 112 212 118" fill="none" stroke="#3A2A1E" strokeWidth="2" />
    <rect x="165" y="235" width="70" height="15" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="1.8" />
  </g>
);

const LaCompaniaQueLlevoLaDanzaGuineanaAlMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(150, 240, 0.9, dark, accentColor)}
      {person(205, 245, 0.95, dark, "#D9A227")}
      {person(260, 238, 0.85, dark, tint(accentColor, 0.25))}
      <path d="M130 210 Q150 195 170 210" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      <ellipse cx="195" cy="215" rx="18" ry="10" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
      <rect x="190" y="195" width="10" height="20" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.6" />
    </g>
  );
};

const LosPoetasQueGuardanLaMemoriaDeUnImperio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(160, 240, 1, dark, accentColor)}
      <path d="M190 180 Q220 175 235 200 Q225 215 210 215 L190 190 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={198 + i * 8} y1="185" x2={225 + i * 4} y2="205" stroke="#D9A227" strokeWidth="1.4" />
      ))}
      {person(270, 235, 0.75, dark, "#D9A227")}
      {person(295, 238, 0.7, dark, tint(accentColor, 0.2))}
    </g>
  );
};

const LaReservaDondeLosChimpancesUsanHerramientas: IllustrationComponent = () => (
  <g>
    <path d="M90 250 L130 160 L170 250 Z" fill="#5C6B3A" stroke="#2A3A1E" strokeWidth="2.6" />
    <path d="M180 250 L230 130 L280 250 Z" fill="#3A5F3A" stroke="#1B4B1E" strokeWidth="2.6" />
    <ellipse cx="180" cy="220" rx="30" ry="24" fill="#2A1F1A" stroke="#1B140E" strokeWidth="2.6" />
    <circle cx="180" cy="190" r="16" fill="#2A1F1A" stroke="#1B140E" strokeWidth="2.4" />
    <circle cx="174" cy="188" r="2.6" fill="#0A0805" />
    <circle cx="186" cy="188" r="2.6" fill="#0A0805" />
    <path d="M155 215 Q145 225 155 235" fill="none" stroke="#2A1F1A" strokeWidth="8" strokeLinecap="round" />
    <ellipse cx="150" cy="238" rx="9" ry="6" fill="#6B6B6B" stroke="#3A3A3A" strokeWidth="1.6" />
  </g>
);

const LasFigurasDePiedraQueNadieSabeQuienTallo: IllustrationComponent = () => (
  <g>
    <rect x="90" y="220" width="230" height="30" fill="#8B5A2B" opacity="0.5" />
    <ellipse cx="200" cy="180" rx="26" ry="52" fill="#6B6B6B" stroke="#3A3A3A" strokeWidth="2.8" />
    <circle cx="192" cy="150" r="3" fill="#3A3A3A" />
    <circle cx="208" cy="150" r="3" fill="#3A3A3A" />
    <path d="M190 165 Q200 172 210 165" fill="none" stroke="#3A3A3A" strokeWidth="2.2" />
    <path d="M175 195 Q200 202 225 195" fill="none" stroke="#3A3A3A" strokeWidth="1.8" opacity="0.6" />
    {[[150, 230], [255, 235]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x + 14} ${y - 10}`} stroke="#5C3A21" strokeWidth="4" strokeLinecap="round" />
    ))}
  </g>
);

const ElXilofonoSagradoQueSoloSeTocaUnaVezAlAno: IllustrationComponent = () => (
  <g>
    <path d="M150 130 L250 130 L260 155 L140 155 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
    <path d="M140 155 L145 130" stroke="#5C3A21" strokeWidth="4" />
    <path d="M260 155 L255 130" stroke="#5C3A21" strokeWidth="4" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} x={155 + i * 15} y="200" width="10" height={20 + i * 3} fill="#D9A227" stroke="#8B5A2B" strokeWidth="1.6" />
    ))}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <ellipse key={i} cx={160 + i * 15} cy="245" rx="8" ry="5" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.4" />
    ))}
    <rect x="195" y="190" width="4" height="18" fill="#5C3A21" />
  </g>
);

const ElGranoMilenarioQueAlimentoAAfricaOccidental: IllustrationComponent = () => (
  <g>
    <path d="M195 245 L200 130" stroke="#3A7A45" strokeWidth="3" />
    <path d="M210 245 L207 135" stroke="#3A7A45" strokeWidth="3" />
    <path d="M180 245 L188 140" stroke="#3A7A45" strokeWidth="3" />
    {[0, 1, 2].map((i) =>
      Array.from({ length: 8 }).map((_, j) => (
        <ellipse key={`${i}-${j}`} cx={[195, 210, 180][i] + (j % 2 === 0 ? -4 : 4)} cy={140 + j * 12} rx="4" ry="6" fill="#D9A227" stroke="#B8860B" strokeWidth="0.8" />
      ))
    )}
    <path d="M170 245 Q195 238 220 245" fill="none" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
  </g>
);

const ElArrozGrasoQueReuneATodaLaFamilia: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="95" ry="26" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="200" cy="205" rx="80" ry="18" fill="#C1440E" opacity="0.9" />
    {[[165, 198], [200, 202], [235, 196]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="13" ry="9" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.8" />
    ))}
    {[[150, 210], [250, 208]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="6" ry="10" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.4" />
    ))}
  </g>
);

const BauxitaGuineana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const ore = "#C1440E";
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill={ore} opacity="0.3" />
      <rect x="150" y="235" width="30" height="14" fill="#8C8C74" stroke={dark} strokeWidth="2" />
      <circle cx="158" cy="249" r="6" fill="#1A1A1A" />
      <circle cx="172" cy="249" r="6" fill="#1A1A1A" />
      <path d="M230 200 Q195 195 175 220 Q195 210 220 208" fill={ore} stroke={shade(ore, 0.3)} strokeWidth="2.4" />
      <circle cx="175" cy="222" r="10" fill={ore} stroke={shade(ore, 0.3)} strokeWidth="2" />
      <rect x="230" y="190" width="70" height="40" fill="#F5D020" stroke={dark} strokeWidth="2.4" />
      <rect x="215" y="230" width="18" height="14" fill="#3A3A3A" />
      <rect x="270" y="230" width="18" height="14" fill="#3A3A3A" />
    </g>
  );
};

const Referendum1958SekouToure: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  return (
    <g>
      <path d="M188 232 Q170 235 165 220" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <path d="M175 225 Q195 210 205 225 L200 245 Q195 250 190 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="192" cy="222" r="10" fill={skin} stroke={dark} strokeWidth="1.8" />
      <rect x="150" y="130" width="110" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="160" r="16" fill="none" stroke="#1A1A1A" strokeWidth="4" />
      <path d="M195 152 L216 172 M216 152 L195 172" stroke="#C1272D" strokeWidth="4" strokeLinecap="round" />
      <line x1="165" y1="195" x2="245" y2="195" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <line x1="165" y1="205" x2="220" y2="205" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const MoryKanteYekeYeke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  const STRINGS = [140, 145, 150, 155];
  return (
    <g>
      <path d="M188 190 Q210 195 220 190" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <rect x="235" y="165" width="45" height="60" fill="#3A3A3A" stroke={dark} strokeWidth="2.2" />
      <circle cx="257" cy="190" r="14" fill="#1A1A1A" stroke="#5C5C5C" strokeWidth="1.8" />
      <line x1="220" y1="190" x2="235" y2="190" stroke="#1A1A1A" strokeWidth="2" />
      <ellipse cx="150" cy="205" rx="26" ry="34" fill="#D9A227" stroke="#8B5A2B" strokeWidth="2.6" />
      <rect x="146" y="150" width="6" height="60" fill="#5C3A21" />
      {STRINGS.map((x) => (
        <line key={x} x1={x} y1="160" x2={x} y2="230" stroke="#F5F0E6" strokeWidth="1.2" />
      ))}
      <circle cx="180" cy="150" r="13" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M167 165 Q180 158 193 165 L188 220 Q180 226 172 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
    </g>
  );
};

const IslasDeLos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const leaf = "#3A7A45";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      <path d="M150 220 Q160 195 210 195 Q260 195 270 220 Q220 235 210 232 Q195 235 150 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <line x1="190" y1="195" x2="185" y2="150" stroke="#5C3A21" strokeWidth="5" />
      <path d="M185 150 Q165 148 155 165 Q175 160 185 158" fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="2" />
      <path d="M185 150 Q205 145 215 160 Q195 158 185 158" fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="2" />
      <line x1="230" y1="195" x2="225" y2="160" stroke="#5C3A21" strokeWidth="4" />
      <path d="M225 160 Q210 158 202 172 Q218 168 225 168" fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="1.8" />
      <path d="M225 160 Q240 156 248 170 Q233 166 225 168" fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="1.8" />
    </g>
  );
};

const CamaraLayeNinoNegro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M130 235 Q140 220 155 218 Q150 230 158 235" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
      <circle cx="230" cy="195" r="10" fill={skin} stroke={dark} strokeWidth="1.8" />
      <path d="M218 205 Q230 200 242 205 L238 225 Q230 230 222 225 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <line x1="265" y1="215" x2="265" y2="240" stroke="#3A2A1E" strokeWidth="3" />
      <ellipse cx="265" cy="240" rx="10" ry="4" fill="#3A2A1E" opacity="0.6" />
      <path d="M110 230 L205 210 L300 230 L300 245 L205 225 L110 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <line x1="205" y1="210" x2="205" y2="225" stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const guineaIllustrations: Record<string, IllustrationDefinition> = {
  "las-montanas-que-dan-nacimiento-a-los-grandes-rios": { component: LasMontanasQueDanNacimientoALosGrandesRios },
  "el-tambor-que-hizo-bailar-al-mundo-entero": { component: ElTamborQueHizoBailarAlMundoEntero },
  "la-mascara-que-representa-a-la-madre-perfecta": { component: LaMascaraQueRepresentaALaMadrePerfecta },
  "la-compania-que-llevo-la-danza-guineana-al-mundo": { component: LaCompaniaQueLlevoLaDanzaGuineanaAlMundo },
  "los-poetas-que-guardan-la-memoria-de-un-imperio": { component: LosPoetasQueGuardanLaMemoriaDeUnImperio },
  "la-reserva-donde-los-chimpances-usan-herramientas": { component: LaReservaDondeLosChimpancesUsanHerramientas },
  "las-figuras-de-piedra-que-nadie-sabe-quien-tallo": { component: LasFigurasDePiedraQueNadieSabeQuienTallo },
  "el-xilofono-sagrado-que-solo-se-toca-una-vez-al-ano": { component: ElXilofonoSagradoQueSoloSeTocaUnaVezAlAno },
  "el-grano-milenario-que-alimento-a-africa-occidental": { component: ElGranoMilenarioQueAlimentoAAfricaOccidental },
  "el-arroz-graso-que-reune-a-toda-la-familia": { component: ElArrozGrasoQueReuneATodaLaFamilia },
  "bauxita-guineana": { component: BauxitaGuineana },
  "referendum-1958-sekou-toure": { component: Referendum1958SekouToure },
  "mory-kante-yeke-yeke": { component: MoryKanteYekeYeke },
  "islas-de-los": { component: IslasDeLos },
  "camara-laye-nino-negro": { component: CamaraLayeNinoNegro },
};
