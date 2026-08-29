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

const ElRitoQueAbreLaPuertaALosAntepasados: IllustrationComponent = () => (
  <g>
    <rect x="150" y="190" width="100" height="55" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="2.4" />
    {[[165, 195], [195, 195], [225, 195]].map(([x, y], i) => (
      <g key={i}>
        <ellipse cx={x} cy={y} rx="5" ry="10" fill="#D9A227" opacity="0.9" />
        <path d={`M${x} ${y - 10} Q${x + 3} ${y - 20} ${x - 1} ${y - 28}`} fill="none" stroke="#C1440E" strokeWidth="2" opacity="0.7" />
      </g>
    ))}
    <circle cx="200" cy="150" r="24" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2.4" />
    <circle cx="192" cy="146" r="2.6" fill="#1B1B1B" />
    <circle cx="208" cy="146" r="2.6" fill="#1B1B1B" />
    <path d="M188 158 Q200 164 212 158" fill="none" stroke="#8B7355" strokeWidth="2" />
    <path d="M176 175 Q200 165 224 175 L228 245 Q200 258 172 245 Z" fill="#3A2A5C" stroke="#1B1030" strokeWidth="2.6" />
  </g>
);

const LosHipopotamosQueSurfeanEnElOceanoAtlantico: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#1B7A9C" opacity="0.35" />
    <path d="M90 220 Q140 200 190 222 Q240 200 290 222 L320 250 L90 250 Z" fill="#F5D9A8" opacity="0.7" />
    {[0, 1, 2].map((i) => (
      <path key={i} d={`M${110 + i * 60} 200 Q${130 + i * 60} 190 ${150 + i * 60} 200`} fill="none" stroke="#F5F0E6" strokeWidth="3" opacity="0.7" />
    ))}
    <ellipse cx="200" cy="205" rx="48" ry="28" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2.8" />
    <ellipse cx="235" cy="195" rx="14" ry="12" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2.4" />
    <ellipse cx="222" cy="188" rx="3" ry="4" fill="#1B1B1B" />
    <ellipse cx="240" cy="185" rx="3" ry="3" fill="#1B1B1B" />
    <path d="M225 200 Q235 206 245 200" fill="none" stroke="#2A3A3A" strokeWidth="2.4" />
    {[[130, 90], [280, 90]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y + 160} Q${x + 20} ${y + 120} ${x + 45} ${y + 150} Q${x + 25} ${y + 160} ${x} ${y + 160}`} fill="#2F6B3A" opacity="0.5" />
    ))}
  </g>
);

const LasMascarasBlancasQueInspiraronAlArteModerno: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="165" rx="45" ry="60" fill="#F5F0E6" stroke="#C9C2B0" strokeWidth="2.8" />
    <path d="M170 115 Q200 100 230 115 Q235 130 225 128 Q200 118 175 128 Q165 130 170 115 Z" fill="#1B1B1B" />
    <path d="M180 145 Q188 138 196 145" fill="none" stroke="#1B1B1B" strokeWidth="2.4" />
    <path d="M204 145 Q212 138 220 145" fill="none" stroke="#1B1B1B" strokeWidth="2.4" />
    <path d="M185 195 Q200 205 215 195 Q212 210 200 212 Q188 210 185 195 Z" fill="#C1272D" stroke="#8B1A1A" strokeWidth="1.6" />
    <path d="M200 155 L197 178 L203 178 Z" fill="none" stroke="#8B7355" strokeWidth="1.4" />
    <rect x="185" y="225" width="30" height="20" fill="#3A2A5C" opacity="0.6" />
  </g>
);

const ElArteRupestreEscondidoEnPlenaSelva: IllustrationComponent = () => (
  <g>
    <path d="M140 250 L155 165 L245 165 L260 250 Z" fill="#8B7355" stroke="#5C3A21" strokeWidth="2.8" />
    <circle cx="185" cy="200" r="12" fill="none" stroke="#3A2A1E" strokeWidth="2.4" />
    <path d="M210 190 L225 205 M225 190 L210 205" stroke="#3A2A1E" strokeWidth="2.4" />
    <path d="M175 225 Q200 215 220 228" fill="none" stroke="#3A2A1E" strokeWidth="2.2" />
    {[[110, 250], [300, 250]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 22} ${y - 55} ${x + 48} ${y - 15} Q${x + 24} ${y} ${x} ${y}`} fill="#2F6B3A" opacity="0.55" />
    ))}
  </g>
);

const LaCiudadQueNacioLibreJuntoAlOceano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#1B7A9C" opacity="0.5" />
      <path d="M170 220 L230 220 L215 195 L185 195 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      {person(150, 232, 0.8, dark, accentColor)}
      {person(185, 238, 0.75, dark, tint(accentColor, 0.2))}
      {person(215, 236, 0.75, dark, "#F5F0E6")}
      {[[260, 150, 24], [290, 165, 34]].map(([x, y, h], i) => (
        <rect key={i} x={x} y={y} width="18" height={h} fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      ))}
    </g>
  );
};

const LaMaderaRosadaQueConquistoElMundo: IllustrationComponent = () => (
  <g>
    <rect x="90" y="220" width="230" height="30" fill="#1B7A9C" opacity="0.4" />
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${120 + i * 45} 200)`}>
        <ellipse cx="0" cy="0" rx="18" ry="14" fill="#E0A898" stroke="#8B5A2B" strokeWidth="2.4" />
        <circle cx="0" cy="0" r="6" fill="#C97C3D" opacity="0.6" />
      </g>
    ))}
    <path d="M110 214 Q200 205 300 214" fill="none" stroke="#5C3A21" strokeWidth="3" opacity="0.5" />
  </g>
);

const LaCascadaQueCaeEnMedioDeLaSelvaIntacta: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#2F6B3A" opacity="0.2" />
    <path d="M175 90 Q170 150 180 210 Q185 230 165 250 L235 250 Q215 230 220 210 Q230 150 225 90 Z" fill="#BFE3F0" opacity="0.85" stroke="#1B7A9C" strokeWidth="2" />
    <path d="M185 110 Q182 160 190 200" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.7" />
    <path d="M210 110 Q213 160 205 200" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.7" />
    <ellipse cx="200" cy="245" rx="55" ry="12" fill="#F5F0E6" opacity="0.6" />
    {[[100, 250], [320, 250]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 22} ${y - 55} ${x + 48} ${y - 15} Q${x + 24} ${y} ${x} ${y}`} fill="#2F6B3A" opacity="0.6" />
    ))}
  </g>
);

const ElPoemaCantadoQueGuardaTodaLaHistoriaFang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(160, 235, 1, dark, accentColor)}
      <path d="M195 175 L195 235" stroke="#8B5A2B" strokeWidth="4" />
      <ellipse cx="195" cy="235" rx="16" ry="10" fill="#D9A227" stroke="#8B5A2B" strokeWidth="2" />
      <ellipse cx="195" cy="200" rx="12" ry="8" fill="#D9A227" stroke="#8B5A2B" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="185" y1={180 + i * 12} x2="230" y2={175 + i * 12} stroke="#F5F0E6" strokeWidth="1.4" opacity="0.8" />
      ))}
    </g>
  );
};

const ElPolloEnSalsaDeNuezDePalmaDeLosDomingos: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="95" ry="24" fill="#F5F0E6" stroke="#5C3A21" strokeWidth="2.6" />
    <ellipse cx="185" cy="205" rx="58" ry="18" fill="#E0752A" opacity="0.9" />
    {[[165, 200], [195, 208], [220, 198]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="14" ry="10" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.8" />
    ))}
    <g transform="translate(255 205)">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={i * 6 - 15} y="-8" width="4" height="20" fill="#F5F0E6" stroke="#5C3A21" strokeWidth="1" />
      ))}
    </g>
    <path d="M120 205 Q135 190 150 205 Q135 215 120 205" fill="#D9A227" stroke="#5C3A21" strokeWidth="1.8" />
  </g>
);

const LasMascarasQueImpartianJusticiaEnSecreto: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="165" rx="38" ry="58" fill="#F5F0E6" stroke="#1B1B1B" strokeWidth="3" />
    <path d="M175 140 Q200 128 225 140" fill="none" stroke="#1B1B1B" strokeWidth="3" />
    <ellipse cx="185" cy="150" rx="6" ry="9" fill="#1B1B1B" />
    <ellipse cx="215" cy="150" rx="6" ry="9" fill="#1B1B1B" />
    <path d="M200 158 L195 185 L205 185 Z" fill="none" stroke="#1B1B1B" strokeWidth="2" />
    <path d="M180 205 Q200 215 220 205" fill="none" stroke="#1B1B1B" strokeWidth="3" />
    <rect x="170" y="223" width="60" height="27" fill="#3A2A1E" opacity="0.7" />
  </g>
);

const Independencia17Agosto1960: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="198" y="100" width="5" height="120" fill={dark} />
      <rect x="203" y="105" width="55" height="16" fill="#2E7D32" stroke={dark} strokeWidth="1.6" />
      <rect x="203" y="121" width="55" height="16" fill="#F4C430" stroke={dark} strokeWidth="1.6" />
      <rect x="203" y="137" width="55" height="16" fill="#1B7A9C" stroke={dark} strokeWidth="1.6" />
      {[[130, 235], [155, 240], [180, 232], [250, 238], [275, 232], [300, 240]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x as number} cy={(y as number) - 18} r="7" fill="#3A2A1E" />
          <path d={`M${(x as number) - 9} ${(y as number) - 6} Q${x} ${(y as number) - 13} ${(x as number) + 9} ${(y as number) - 6} L${(x as number) + 8} ${y} Q${x} ${(y as number) + 6} ${(x as number) - 8} ${y} Z`} fill={i % 2 === 0 ? accentColor : "#F5F0E6"} stroke={dark} strokeWidth="1.6" />
        </g>
      ))}
      <ellipse cx="200" cy="245" rx="120" ry="10" fill={dark} opacity="0.2" />
    </g>
  );
};

const LoroGrisAfricano: IllustrationComponent = () => (
  <g>
    <path d="M150 240 L270 230" stroke="#5C4A3E" strokeWidth="8" strokeLinecap="round" />
    <ellipse cx="215" cy="205" rx="28" ry="24" fill="#B0B0B0" stroke="#6E6E6E" strokeWidth="2.4" />
    <circle cx="198" cy="192" r="14" fill="#B0B0B0" stroke="#6E6E6E" strokeWidth="2.2" />
    <path d="M186 190 L172 186 L186 196 Z" fill="#1A1A1A" />
    <circle cx="192" cy="188" r="2" fill="#fff" />
    <path d="M235 220 Q262 228 285 222 Q292 220 288 228 Q265 236 238 230 Z" fill="#C1272D" stroke="#8B1A1A" strokeWidth="1.8" />
    <line x1="205" y1="225" x2="203" y2="242" stroke="#6E6E6E" strokeWidth="3" strokeLinecap="round" />
    <line x1="225" y1="225" x2="227" y2="242" stroke="#6E6E6E" strokeWidth="3" strokeLinecap="round" />
  </g>
);

export const gabonIllustrations: Record<string, IllustrationDefinition> = {
  "el-rito-que-abre-la-puerta-a-los-antepasados": { component: ElRitoQueAbreLaPuertaALosAntepasados },
  "los-hipopotamos-que-surfean-en-el-oceano-atlantico": { component: LosHipopotamosQueSurfeanEnElOceanoAtlantico },
  "las-mascaras-blancas-que-inspiraron-al-arte-moderno": { component: LasMascarasBlancasQueInspiraronAlArteModerno },
  "el-arte-rupestre-escondido-en-plena-selva": { component: ElArteRupestreEscondidoEnPlenaSelva },
  "la-ciudad-que-nacio-libre-junto-al-oceano": { component: LaCiudadQueNacioLibreJuntoAlOceano },
  "la-madera-rosada-que-conquisto-el-mundo": { component: LaMaderaRosadaQueConquistoElMundo },
  "la-cascada-que-cae-en-medio-de-la-selva-intacta": { component: LaCascadaQueCaeEnMedioDeLaSelvaIntacta },
  "el-poema-cantado-que-guarda-toda-la-historia-fang": { component: ElPoemaCantadoQueGuardaTodaLaHistoriaFang },
  "el-pollo-en-salsa-de-nuez-de-palma-de-los-domingos": { component: ElPolloEnSalsaDeNuezDePalmaDeLosDomingos },
  "las-mascaras-que-impartian-justicia-en-secreto": { component: LasMascarasQueImpartianJusticiaEnSecreto },
  "independencia-17-agosto-1960": { component: Independencia17Agosto1960 },
  "loro-gris-africano": { component: LoroGrisAfricano },
};
