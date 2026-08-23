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

const ElLagoDeSalMasBajoDeAfrica: IllustrationComponent = () => (
  <g>
    <path d="M90 220 L130 170 L170 210 L210 160 L250 200 L290 150 L320 200 L320 250 L90 250 Z" fill="#2A1F1A" opacity="0.85" />
    <ellipse cx="200" cy="225" rx="110" ry="30" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="2.4" />
    <path d="M120 220 Q160 212 200 220 Q240 228 280 220" fill="none" stroke="#D9D2C0" strokeWidth="2" opacity="0.7" />
    <path d="M140 235 L150 235 M175 240 L188 240 M215 238 L228 238 M250 233 L262 233" stroke="#C9C2B0" strokeWidth="3" strokeLinecap="round" />
  </g>
);

const LasChimeneasDePiedraQueParecenDeOtroPlaneta: IllustrationComponent = () => (
  <g>
    <rect x="90" y="200" width="230" height="50" fill="#C1440E" opacity="0.25" />
    {[[130, 250, 90], [170, 250, 60], [220, 250, 110], [265, 250, 75], [300, 250, 50]].map(([x, y, h], i) => (
      <g key={i}>
        <path d={`M${x - 8} ${y} Q${x - 12} ${y - h * 0.6} ${x} ${y - h} Q${x + 12} ${y - h * 0.6} ${x + 8} ${y} Z`} fill="#F5F0E6" stroke="#8B7355" strokeWidth="2" />
        <path d={`M${x} ${y - h} Q${x + 4} ${y - h - 12} ${x - 2} ${y - h - 22}`} fill="none" stroke="#D9D2C0" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
      </g>
    ))}
    <path d="M90 250 Q205 240 320 250" fill="none" stroke="#8B5A2B" strokeWidth="2" opacity="0.4" />
  </g>
);

const LosTiburonesGigantesQueVisitanCadaInvierno: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#1B7A9C" opacity="0.35" />
    <path d="M110 195 Q180 165 260 190 Q290 195 290 205 Q260 215 260 220 Q290 228 290 235 Q180 245 110 205 Z" fill="#3A6B8C" stroke="#1B4F72" strokeWidth="2.8" />
    <path d="M150 190 Q160 175 175 185" fill="none" stroke="#1B4F72" strokeWidth="4" />
    {[[140, 195], [160, 200], [180, 193], [200, 202], [220, 195]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="4" fill="#F5F0E6" opacity="0.85" />
    ))}
    <circle cx="122" cy="193" r="4" fill="#0A0805" />
    {person(250, 150, 0.7, "#1B4F72", "#0EA5B8")}
  </g>
);

const ElEstrechoQueLosMarinosLlamaronLaPuertaDelLlanto: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#1B4F72" opacity="0.3" />
    <path d="M90 250 L90 190 Q130 175 90 150 L90 90 L140 90 Q120 150 145 190 Q120 225 145 250 Z" fill="#8B5A2B" opacity="0.7" />
    <path d="M320 250 L320 190 Q280 175 320 150 L320 90 L270 90 Q290 150 265 190 Q290 225 265 250 Z" fill="#8B5A2B" opacity="0.7" />
    <path d="M175 205 L245 205 L235 190 L185 190 Z" fill="#F5F0E6" stroke="#1B4F72" strokeWidth="2.6" />
    <rect x="192" y="175" width="6" height="18" fill="#5C3A21" />
    <rect x="215" y="180" width="6" height="13" fill="#5C3A21" />
    {[[160, 220], [260, 218]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 10} ${y - 6} ${x + 20} ${y}`} fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
    ))}
  </g>
);

const LasCaravanasDeCamellosQueCarganSalDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#D9C08A" opacity="0.5" />
      {camel(130, 210, 0.9, dark)}
      {camel(215, 215, 0.85, dark)}
      {camel(295, 218, 0.75, dark)}
      {[[130, 178], [215, 183], [295, 186]].map(([x, y], i) => (
        <rect key={i} x={x - 14} y={y} width="28" height="14" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      ))}
    </g>
  );
};

const LaLecheDeCamellaQueSostieneALosNomadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  return (
    <g>
      {camel(190, 200, 1.15, dark, "#C9A063")}
      {person(150, 245, 0.85, dark, accentColor)}
      <ellipse cx="182" cy="255" rx="18" ry="9" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M165 235 Q175 248 182 250" fill="none" stroke="#F5F0E6" strokeWidth="4" opacity="0.8" />
    </g>
  );
};

const LaReunionDeLaTardeAlrededorDeUnaHojaVerde: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  return (
    <g>
      {person(150, 240, 0.85, dark, accentColor)}
      {person(200, 245, 0.85, dark, tint(accentColor, 0.2))}
      {person(250, 240, 0.85, dark, "#D9A227")}
      <ellipse cx="200" cy="225" rx="70" ry="14" fill="#F5F0E6" stroke={dark} strokeWidth="2" opacity="0.6" />
      {[[170, 220], [200, 224], [230, 219]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q${x + 10} ${y - 12} ${x + 18} ${y - 2} Q${x + 10} ${y + 4} ${x} ${y}`} fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.4" />
      ))}
    </g>
  );
};

const ElVestidoDeColoresQueFlotaConCadaPaso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="200" cy="120" r="13" fill="#3A2A1E" stroke={dark} strokeWidth="1.8" />
      <path d="M180 128 Q200 115 220 128 L228 145 Q200 135 172 145 Z" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2" />
      <path d="M170 150 Q200 138 230 150 L245 240 Q200 258 155 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M180 165 Q200 175 220 165 L225 220 Q200 232 175 220 Z" fill={tint(accentColor, 0.35)} opacity="0.7" />
      <path d="M170 155 Q150 175 155 210" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <path d="M230 155 Q250 175 245 210" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const ElArrozEspeciadoQueSeSirveEnCadaCelebracion: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="95" ry="26" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="200" cy="208" rx="80" ry="18" fill="#D9A227" />
    {[[160, 200], [200, 205], [240, 198]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="15" ry="10" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.8" />
    ))}
    {[[170, 195], [210, 198], [240, 210], [180, 212]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x + 6} ${y - 8}`} stroke="#3A7A45" strokeWidth="2.4" strokeLinecap="round" />
    ))}
  </g>
);

const ElTrenQueUnioElMarConLasMontanasDeEtiopia: IllustrationComponent = () => (
  <g>
    <rect x="90" y="235" width="230" height="15" fill="#5C3A21" />
    {[110, 140, 170, 200, 230, 260, 290].map((x, i) => (
      <rect key={i} x={x} y="238" width="6" height="10" fill="#3A2A1E" />
    ))}
    <rect x="130" y="185" width="70" height="45" fill="#1B4F72" stroke="#0A2A40" strokeWidth="2.6" />
    <circle cx="150" cy="175" r="16" fill="#3A2A1E" stroke="#0A0805" strokeWidth="2.2" />
    <rect x="145" y="150" width="10" height="26" fill="#3A2A1E" />
    <path d="M150 150 Q160 135 155 120 Q170 128 165 145" fill="#D9D2C0" opacity="0.7" />
    <rect x="200" y="200" width="90" height="30" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
    {[145, 165, 185, 205].map((x, i) => (
      <circle key={i} cx={x} cy="230" r="10" fill="#3A2A1E" />
    ))}
    <path d="M90 232 L320 232" stroke="#C1440E" strokeWidth="1.6" opacity="0.4" />
  </g>
);

export const djiboutiIllustrations: Record<string, IllustrationDefinition> = {
  "el-lago-de-sal-mas-bajo-de-africa": { component: ElLagoDeSalMasBajoDeAfrica },
  "las-chimeneas-de-piedra-que-parecen-de-otro-planeta": { component: LasChimeneasDePiedraQueParecenDeOtroPlaneta },
  "los-tiburones-gigantes-que-visitan-cada-invierno": { component: LosTiburonesGigantesQueVisitanCadaInvierno },
  "el-estrecho-que-los-marinos-llamaron-la-puerta-del-llanto": { component: ElEstrechoQueLosMarinosLlamaronLaPuertaDelLlanto },
  "las-caravanas-de-camellos-que-cargan-sal-del-desierto": { component: LasCaravanasDeCamellosQueCarganSalDelDesierto },
  "la-leche-de-camella-que-sostiene-a-los-nomadas": { component: LaLecheDeCamellaQueSostieneALosNomadas },
  "la-reunion-de-la-tarde-alrededor-de-una-hoja-verde": { component: LaReunionDeLaTardeAlrededorDeUnaHojaVerde },
  "el-vestido-de-colores-que-flota-con-cada-paso": { component: ElVestidoDeColoresQueFlotaConCadaPaso },
  "el-arroz-especiado-que-se-sirve-en-cada-celebracion": { component: ElArrozEspeciadoQueSeSirveEnCadaCelebracion },
  "el-tren-que-unio-el-mar-con-las-montanas-de-etiopia": { component: ElTrenQueUnioElMarConLasMontanasDeEtiopia },
};
