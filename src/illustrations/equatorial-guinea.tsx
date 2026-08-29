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

const LaIslaSelvaticaDondeVivenMonosUnicos: IllustrationComponent = () => (
  <g>
    {[[100, 250], [320, 250], [140, 90]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 22} ${y - 45} ${x + 50} ${y - 10} Q${x + 26} ${y} ${x} ${y}`} fill="#2F6B3A" opacity="0.5" />
    ))}
    <path d="M150 240 Q200 220 260 235" fill="none" stroke="#5C3A21" strokeWidth="12" strokeLinecap="round" />
    <ellipse cx="205" cy="185" rx="34" ry="30" fill="#3A2A1E" stroke="#1B140E" strokeWidth="2.6" />
    <ellipse cx="205" cy="200" rx="18" ry="14" fill="#0EA5B8" />
    <path d="M195 202 Q205 210 215 202" fill="none" stroke="#C1440E" strokeWidth="4" />
    <circle cx="193" cy="180" r="4.5" fill="#0A0805" />
    <circle cx="217" cy="180" r="4.5" fill="#0A0805" />
    <path d="M180 215 Q170 235 178 250" fill="none" stroke="#3A2A1E" strokeWidth="10" strokeLinecap="round" />
    <path d="M230 215 Q240 235 232 250" fill="none" stroke="#3A2A1E" strokeWidth="10" strokeLinecap="round" />
  </g>
);

const LaCiudadColonialDeFachadasDeColores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[110, 150, "#D9A227"], [175, 140, accentColor], [245, 155, "#C1440E"], [285, 145, tint(accentColor, 0.3)]].map(([x, y, color], i) => (
        <g key={i}>
          <rect x={Number(x)} y={Number(y)} width="55" height={250 - Number(y)} fill={color as string} stroke={dark} strokeWidth="2.2" />
          <path d={`M${Number(x) - 4} ${y} L${Number(x) + 27} ${Number(y) - 20} L${Number(x) + 59} ${y}`} fill="none" stroke={dark} strokeWidth="2" />
          <rect x={Number(x) + 8} y={Number(y) + 18} width="14" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.4" />
          <rect x={Number(x) + 32} y={Number(y) + 18} width="14" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1.4" />
          <line x1={Number(x) + 2} y1={Number(y) + 45} x2={Number(x) + 53} y2={Number(y) + 45} stroke={dark} strokeWidth="2" opacity="0.6" />
        </g>
      ))}
      <path d="M90 250 Q205 244 320 250" fill="none" stroke="#8B7355" strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const LasFigurasQueGuardabanHuesosDeAntepasados: IllustrationComponent = () => (
  <g>
    <rect x="178" y="150" width="44" height="70" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="2.6" />
    <path d="M178 150 Q200 138 222 150" fill="none" stroke="#3A2A1E" strokeWidth="2.2" />
    <ellipse cx="200" cy="120" rx="20" ry="30" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="2.8" />
    <ellipse cx="200" cy="140" rx="14" ry="10" fill="#5C3A21" />
    <circle cx="192" cy="112" r="2.6" fill="#3A2A1E" />
    <circle cx="208" cy="112" r="2.6" fill="#3A2A1E" />
    <path d="M190 128 Q200 133 210 128" fill="none" stroke="#3A2A1E" strokeWidth="2" />
    <path d="M178 158 L222 158 M178 175 L222 175 M178 192 L222 192" stroke="#5C3A21" strokeWidth="1.6" opacity="0.5" />
  </g>
);

const LaIslaQueHablaUnaLenguaQueNoExisteEnOtroLugar: IllustrationComponent = () => (
  <g>
    <rect x="90" y="180" width="230" height="70" fill="#1B7A9C" opacity="0.5" />
    <path d="M150 200 L170 150 L230 150 L250 200 Z" fill="#2E7D46" stroke="#1B4F2E" strokeWidth="2.8" />
    <rect x="175" y="190" width="16" height="20" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="1.6" />
    <rect x="205" y="188" width="16" height="22" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="1.6" />
    <path d="M90 235 Q205 225 320 235" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
    <path d="M110 220 L130 210 L150 222" fill="none" stroke="#3A2A1E" strokeWidth="2.4" />
    <path d="M135 210 L120 208" stroke="#5C3A21" strokeWidth="2" />
  </g>
);

const ElRitualQuePurificaAlPuebloBubi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(150, 240, 0.85, dark, accentColor)}
      {person(250, 242, 0.85, dark, tint(accentColor, 0.2))}
      {person(200, 250, 0.85, dark, "#D9A227")}
      <path d="M190 210 L195 175 L200 210 L205 172 L210 210" fill="none" stroke="#C1440E" strokeWidth="4" strokeLinecap="round" />
      <path d="M185 210 L215 210" stroke="#5C3A21" strokeWidth="6" />
      <path d="M160 220 Q170 205 178 218" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.6" />
      <path d="M222 218 Q232 205 242 220" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.6" />
    </g>
  );
};

const ElBaileQueMarcaElPasoALaVidaAdulta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="160" cy="150" r="11" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <path d="M148 158 Q160 150 172 158 L178 195 Q160 210 142 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M144 195 L142 235 M152 195 L150 238 M160 197 L160 240 M168 195 L170 238 M176 195 L178 235" stroke="#D9A227" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      <circle cx="255" cy="150" r="11" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <path d="M243 158 Q255 150 267 158 L273 195 Q255 210 237 195 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.4" />
      <path d="M239 195 L237 235 M247 195 L245 238 M255 197 L255 240 M263 195 L265 238 M271 195 L273 235" stroke="#D9A227" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      <ellipse cx="205" cy="235" rx="20" ry="12" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <rect x="200" y="215" width="10" height="22" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const ElEspanolQueSeHablaAlSurDelSahara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="185" y="90" width="10" height="90" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      <rect x="130" y="95" width="130" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <path d="M145 112 L155 128 M155 112 L145 128 M170 112 L170 128 M165 112 L175 112 M165 128 L175 128" stroke={dark} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M190 112 Q198 105 206 112 L206 128 Q198 120 190 128 Z" fill={accentColor} opacity="0.7" />
      <rect x="120" y="185" width="90" height="60" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <line x1="132" y1="200" x2="198" y2="200" stroke={dark} strokeWidth="2" />
      <line x1="132" y1="212" x2="198" y2="212" stroke={dark} strokeWidth="2" opacity="0.7" />
      <line x1="132" y1="224" x2="180" y2="224" stroke={dark} strokeWidth="2" opacity="0.7" />
      <rect x="255" y="200" width="30" height="20" fill="#CE1126" stroke={dark} strokeWidth="1.8" />
      <rect x="255" y="220" width="30" height="20" fill="#D9A227" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const ElParqueDondeLosGorilasConvivenConElefantes: IllustrationComponent = () => (
  <g>
    {[[100, 250], [320, 250]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 22} ${y - 45} ${x + 50} ${y - 10} Q${x + 26} ${y} ${x} ${y}`} fill="#2F6B3A" opacity="0.5" />
    ))}
    <ellipse cx="150" cy="205" rx="42" ry="35" fill="#2A1F1A" stroke="#1B140E" strokeWidth="2.8" />
    <circle cx="150" cy="160" r="24" fill="#2A1F1A" stroke="#1B140E" strokeWidth="2.6" />
    <circle cx="143" cy="158" r="3" fill="#0A0805" />
    <circle cx="157" cy="158" r="3" fill="#0A0805" />
    <path d="M245 240 Q245 195 275 190 Q290 195 292 215 Q305 210 310 230 Q310 250 285 250 Q260 252 245 240 Z" fill="#5C5C5C" stroke="#3A3A3A" strokeWidth="2.6" />
    <path d="M232 210 Q220 225 230 245" fill="none" stroke="#5C5C5C" strokeWidth="8" strokeLinecap="round" />
    <path d="M248 235 L246 250 M262 240 L262 252 M278 240 L278 252" stroke="#5C5C5C" strokeWidth="7" strokeLinecap="round" />
    <path d="M280 205 L292 195" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
  </g>
);

const LaSopaPicanteQueAbreCadaComidaImportante: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="210" rx="85" ry="24" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="200" cy="200" rx="70" ry="16" fill="#C1440E" />
    {[[170, 195], [210, 198], [235, 205]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="10" ry="7" fill="#F5D9A8" stroke="#8B5A2B" strokeWidth="1.6" />
    ))}
    {[[160, 190], [200, 185], [230, 192]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 4} ${y - 14} ${x - 2} ${y - 24}`} fill="none" stroke="#D9D2C0" strokeWidth="2.4" opacity="0.6" strokeLinecap="round" />
    ))}
    <path d="M130 200 Q140 188 150 200" fill="none" stroke="#3A7A45" strokeWidth="3" />
  </g>
);

const ElCacaoQuePerfumoLaEconomiaDeLaIsla: IllustrationComponent = () => (
  <g>
    <rect x="192" y="200" width="10" height="50" fill="#5C3A21" />
    <path d="M197 90 L197 200" stroke="#3A5F3A" strokeWidth="5" />
    <path d="M175 120 Q160 150 175 190 Q195 200 205 190 Q220 150 205 120 Q195 105 175 120 Z" fill="#D9A227" stroke="#8B5A2B" strokeWidth="2.8" />
    <path d="M180 135 Q190 155 180 180 M200 135 Q210 155 200 180" fill="none" stroke="#B8860B" strokeWidth="1.8" opacity="0.6" />
    <path d="M140 95 Q150 80 165 90" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.6" />
    <ellipse cx="260" cy="230" rx="45" ry="14" fill="#8B5A2B" opacity="0.4" />
    {[[235, 228], [255, 232], [275, 226], [290, 230]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="9" ry="6" fill="#6B4226" stroke="#3A2A1E" strokeWidth="1.4" />
    ))}
  </g>
);

const IvangaCantoAncestralNdowe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M150 235 L150 150 Q150 130 175 128 Q200 126 200 150 L200 235 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" />
      <ellipse cx="175" cy="150" rx="25" ry="10" fill={shade(wood, 0.2)} stroke={shade(wood, 0.3)} strokeWidth="2.4" />
      <path d="M150 235 L200 235" stroke={shade(wood, 0.3)} strokeWidth="4" />
      <path d="M235 130 Q265 110 295 130 Q305 165 280 205 Q265 220 250 205 Q225 165 235 130 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="255" cy="155" rx="8" ry="11" fill={dark} />
      <ellipse cx="280" cy="155" rx="8" ry="11" fill={dark} />
      <path d="M255 185 Q267 195 280 185" stroke={dark} strokeWidth="3" fill="none" />
      <path d="M245 140 L250 125 M290 140 L285 125" stroke={dark} strokeWidth="2.4" opacity="0.6" />
    </g>
  );
};

const TopeVinoDePalma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const trunk = "#8B5A2B";
  return (
    <g>
      <path d="M195 240 Q200 180 190 120" stroke={trunk} strokeWidth="16" strokeLinecap="round" fill="none" />
      {[-60, -20, 20, 60, 100].map((deg) => (
        <path key={deg} d="M190 120 Q220 100 250 108" fill="none" stroke="#2E7D32" strokeWidth="10" strokeLinecap="round" transform={`rotate(${deg} 190 120)`} />
      ))}
      <path d="M180 150 Q175 165 178 180" fill="none" stroke="#5C4A3E" strokeWidth="2" />
      <ellipse cx="175" cy="188" rx="16" ry="20" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <ellipse cx="230" cy="238" rx="35" ry="12" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.4" />
    </g>
  );
};

export const equatorialGuineaIllustrations: Record<string, IllustrationDefinition> = {
  "la-isla-selvatica-donde-viven-monos-unicos": { component: LaIslaSelvaticaDondeVivenMonosUnicos },
  "la-ciudad-colonial-de-fachadas-de-colores": { component: LaCiudadColonialDeFachadasDeColores },
  "las-figuras-que-guardaban-huesos-de-antepasados": { component: LasFigurasQueGuardabanHuesosDeAntepasados },
  "la-isla-donde-se-habla-una-lengua-que-no-existe-en-ningun-otro-lugar": { component: LaIslaQueHablaUnaLenguaQueNoExisteEnOtroLugar },
  "el-ritual-que-purifica-al-pueblo-bubi": { component: ElRitualQuePurificaAlPuebloBubi },
  "el-baile-que-marca-el-paso-a-la-vida-adulta": { component: ElBaileQueMarcaElPasoALaVidaAdulta },
  "el-espanol-que-se-habla-al-sur-del-sahara": { component: ElEspanolQueSeHablaAlSurDelSahara },
  "el-parque-donde-los-gorilas-conviven-con-elefantes": { component: ElParqueDondeLosGorilasConvivenConElefantes },
  "la-sopa-picante-que-abre-cada-comida-importante": { component: LaSopaPicanteQueAbreCadaComidaImportante },
  "el-cacao-que-perfumo-la-economia-de-la-isla": { component: ElCacaoQuePerfumoLaEconomiaDeLaIsla },
  "ivanga-canto-ancestral-ndowe": { component: IvangaCantoAncestralNdowe },
  "tope-vino-de-palma": { component: TopeVinoDePalma },
};
