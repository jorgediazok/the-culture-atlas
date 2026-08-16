import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElMayorProductorDeCacaoQueCasiNoComeChocolate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5EFE0";
  return (
    <g>
      <path d="M205 235 Q160 225 155 175 Q152 130 205 110 Q258 130 255 175 Q250 225 205 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M205 120 Q205 175 205 228" stroke={dark} strokeWidth="2" opacity="0.4" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${205 - 8 - i * 6} 130 Q${190 - i * 10} 175 ${205 - 8 - i * 6} 220`} stroke={dark} strokeWidth="1.5" opacity="0.3" fill="none" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <path key={`r${i}`} d={`M${205 + 8 + i * 6} 130 Q${220 + i * 10} 175 ${205 + 8 + i * 6} 220`} stroke={dark} strokeWidth="1.5" opacity="0.3" fill="none" />
      ))}
      <line x1="205" y1="110" x2="205" y2="95" stroke={dark} strokeWidth="3" />
      {[[175, 170], [230, 165], [205, 195]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="10" ry="8" fill={cream} opacity="0.5" />
      ))}
    </g>
  );
};

const LaBasilicaMasGrandeQueLaDeSanPedro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="140" y="185" width="130" height="55" fill={light} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="185" rx="55" ry="18" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 185 Q170 140 205 130 Q240 140 240 185 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="205" y1="130" x2="205" y2="105" stroke={dark} strokeWidth="3" />
      <path d="M198 105 L212 105 M205 98 L205 112" stroke={dark} strokeWidth="3" />
      {[155, 180, 230, 255].map((x) => (
        <rect key={x} x={x - 6} y="200" width="12" height="40" fill={dark} opacity="0.35" />
      ))}
    </g>
  );
};

const LosCocodrilosSagradosDelLagoPresidencial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 220 Q205 210 320 220 L320 250 L90 250 Z" fill={water} />
      <path d="M120 205 Q115 195 130 192 Q160 185 195 190 Q225 193 235 205 Q240 212 232 218 L225 225 L215 225 L212 215 L155 215 L150 225 L138 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M130 192 Q110 188 95 195 L100 200 Q118 196 132 198 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="112" cy="193" r="2.5" fill="#1A1A1A" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${145 + i * 20} 190 L${150 + i * 20} 180`} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M235 208 Q255 205 270 195" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const LasMascarasDanQueInspiraronAlArteModerno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#5C3A1E";
  return (
    <g>
      <path d="M175 235 L165 155 Q165 120 205 115 Q245 120 245 155 L235 235 Z" fill={wood} stroke={shade(wood, 0.25)} strokeWidth="3" />
      <polygon points="185,165 205,150 225,165 220,190 190,190" fill={accentColor} opacity="0.7" />
      <polygon points="192,175 205,168 218,175" fill="#1A1A1A" />
      <polygon points="200,195 210,195 205,215" fill={dark} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={180 + i * 10} y1="215" x2={180 + i * 10} y2="230" stroke={accentColor} strokeWidth="2" opacity="0.6" />
      ))}
    </g>
  );
};

const GrandBassamLaCapitalQueLaNaturalezaRecupera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="140" y="150" width="130" height="90" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="2.5" />
      <rect x="140" y="150" width="130" height="14" fill={dark} opacity="0.3" />
      {[160, 195, 230].map((x) => (
        <rect key={x} x={x} y="175" width="20" height="35" fill="none" stroke={dark} strokeWidth="2" />
      ))}
      <path d="M140 240 Q150 190 145 155 Q160 200 155 240 Z" fill={green} opacity="0.85" />
      <path d="M270 240 Q262 200 268 160 Q278 200 275 240 Z" fill={green} opacity="0.85" />
      <path d="M180 240 Q190 210 210 220 Q225 230 240 210" fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const TambienElMayorProductorMundialDeAnacardos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 210 Q150 205 148 175 Q147 155 165 148 Q185 145 195 165 Q205 175 200 195 Q210 200 205 220 Q195 230 180 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M200 195 Q225 185 240 200 Q248 210 240 220 Q225 226 210 215 Z" fill="#D9BE8F" stroke={shade("#D9BE8F", 0.3)} strokeWidth="2.5" />
    </g>
  );
};

const ElRuegoFutbolisticoQueFrenoUnaGuerraCivil: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="180" cy="180" r="38" fill="#fff" stroke={dark} strokeWidth="3" />
      <polygon points="180,155 195,168 189,187 171,187 165,168" fill="#1A1A1A" />
      <path d="M155 155 L165 168 M205 155 L195 168 M148 185 L165 187 M212 185 L195 187 M171 210 L180 195 M189 210 L180 195" stroke="#1A1A1A" strokeWidth="2" />
      <ellipse cx="270" cy="220" rx="18" ry="14" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <line x1="270" y1="234" x2="270" y2="245" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElAbissaLaSemanaEnQueSeInvierteElOrden: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA"];
  return (
    <g>
      <ellipse cx="205" cy="180" rx="42" ry="52" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="188" cy="170" rx="9" ry="12" fill="#1A1A1A" />
      <ellipse cx="222" cy="170" rx="9" ry="12" fill="#1A1A1A" />
      <path d="M185 205 Q205 218 225 205" fill="none" stroke={dark} strokeWidth="3" />
      {[[130, 130], [280, 140], [150, 220], [270, 210], [190, 110], [230, 250]].map(([x, y], i) => (
        <rect key={x as number} x={x} y={y} width="8" height="8" fill={colors[i % colors.length]} transform={`rotate(${i * 30} ${x} ${y})`} />
      ))}
    </g>
  );
};

const ComoeSelvaYSabanaEnUnMismoParque: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D9BE8F";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={gold} opacity="0.5" />
      <line x1="205" y1="235" x2="205" y2="150" stroke="#6B4423" strokeWidth="7" />
      <path d="M205 150 Q160 155 150 130 Q195 130 205 150 Q215 125 260 128 Q250 155 205 150 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M90 240 Q205 228 320 240" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const ElDipriElRitualDondeNadieSangra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const night = "#1A2340";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={night} />
      <circle cx="255" cy="120" r="28" fill="#F5F0E6" opacity="0.9" />
      <path d="M100 240 L150 175 L210 240 Z" fill={dark} opacity="0.5" />
      <path d="M170 240 L230 165 L300 240 Z" fill={dark} opacity="0.7" />
      <circle cx="150" cy="210" r="6" fill={accentColor} opacity="0.8" />
      <path d="M144 218 Q150 228 156 218" stroke={accentColor} strokeWidth="3" fill="none" />
    </g>
  );
};

export const ivoryCoastIllustrations: Record<string, IllustrationDefinition> = {
  "el-mayor-productor-de-cacao-que-casi-no-come-chocolate": { component: ElMayorProductorDeCacaoQueCasiNoComeChocolate },
  "la-basilica-mas-grande-que-la-de-san-pedro": { component: LaBasilicaMasGrandeQueLaDeSanPedro },
  "los-cocodrilos-sagrados-del-lago-presidencial": { component: LosCocodrilosSagradosDelLagoPresidencial },
  "las-mascaras-dan-que-inspiraron-al-arte-moderno": { component: LasMascarasDanQueInspiraronAlArteModerno },
  "grand-bassam-la-capital-que-la-naturaleza-recupera": { component: GrandBassamLaCapitalQueLaNaturalezaRecupera },
  "tambien-el-mayor-productor-mundial-de-anacardos": { component: TambienElMayorProductorMundialDeAnacardos },
  "el-ruego-futbolistico-que-freno-una-guerra-civil": { component: ElRuegoFutbolisticoQueFrenoUnaGuerraCivil },
  "el-abissa-la-semana-en-que-se-invierte-el-orden": { component: ElAbissaLaSemanaEnQueSeInvierteElOrden },
  "comoe-selva-y-sabana-en-un-mismo-parque": { component: ComoeSelvaYSabanaEnUnMismoParque },
  "el-dipri-el-ritual-donde-nadie-sangra": { component: ElDipriElRitualDondeNadieSangra },
};
