import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaEscrituraCuneiformePrimeraDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const rows = [110, 128, 146, 164, 182];
  return (
    <g transform="rotate(-4 200 165)">
      <rect x="120" y="95" width="150" height="115" rx="4" fill={accentColor} stroke={dark} strokeWidth="3" />
      {rows.map((y) => (
        <g key={y}>
          {[140, 158, 176, 194, 212, 230, 248].map((x) => (
            <polygon key={x} points={`${x},${y} ${x + 8},${y - 3} ${x + 8},${y + 3}`} fill={dark} opacity="0.75" />
          ))}
        </g>
      ))}
      <rect x="130" y="200" width="34" height="6" rx="3" fill="#8B5A2B" stroke={dark} strokeWidth="2" transform="rotate(35 147 203)" />
    </g>
  );
};

const ElZiguratDeUr: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.25);
  return (
    <g>
      <rect x="110" y="205" width="180" height="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="130" y="170" width="140" height="35" fill={light} stroke={dark} strokeWidth="3" />
      <rect x="150" y="135" width="100" height="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="110" width="30" height="25" fill={light} stroke={dark} strokeWidth="2.5" />
      <rect x="196" y="222" width="8" height="18" fill={dark} opacity="0.6" />
      <rect x="196" y="187" width="8" height="18" fill={dark} opacity="0.6" />
      <rect x="196" y="152" width="8" height="18" fill={dark} opacity="0.6" />
    </g>
  );
};

const ElCodigoDeHammurabi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const lines = [150, 162, 174, 186, 198, 210, 222];
  return (
    <g>
      <path d="M175 95 Q205 75 235 95 L240 235 L170 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="192" cy="112" r="9" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
      <path d="M183 128 L201 128 L198 140 L186 140 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="1.5" />
      {lines.map((y) => (
        <line key={y} x1="180" y1={y} x2="232" y2={y} stroke={dark} strokeWidth="2" opacity="0.7" />
      ))}
    </g>
  );
};

const LaPuertaDeIshtarDeBabilonia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#C9A227";
  return (
    <g>
      <rect x="110" y="100" width="45" height="145" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="255" y="100" width="45" height="145" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M155 100 L155 160 Q205 130 255 160 L255 100 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 150 Q120 165 130 178 Q140 165 130 150 Z" fill={gold} />
      <path d="M120 178 L140 178 L138 210 L122 210 Z" fill={gold} opacity="0.85" />
      <path d="M280 150 Q270 165 280 178 Q290 165 280 150 Z" fill={gold} />
      <path d="M270 178 L290 178 L288 210 L272 210 Z" fill={gold} opacity="0.85" />
      <path d="M188 140 Q205 128 222 140 L222 150 L188 150 Z" fill={gold} opacity="0.9" />
    </g>
  );
};

const LaCasaDeLaSabiduriaDeBagdad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 235 L120 140 Q205 90 290 140 L290 235 Z" fill="none" stroke={dark} strokeWidth="4" />
      <rect x="130" y="150" width="140" height="85" fill={tint(accentColor, 0.55)} />
      {[160, 185, 210].map((y) => (
        <rect key={y} x="138" y={y} width="124" height="14" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      <rect x="145" y="163" width="18" height="8" rx="4" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
      <rect x="180" y="188" width="18" height="8" rx="4" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
      <rect x="220" y="163" width="14" height="14" fill="#8B5A2B" stroke={dark} strokeWidth="1" />
      <rect x="245" y="213" width="14" height="14" fill="#8B5A2B" stroke={dark} strokeWidth="1" />
    </g>
  );
};

const LaTorreMalwiyaDeSamarra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M205 90 L255 235 L155 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M205 90 L226 140 L184 140 Z" fill={dark} opacity="0.35" />
      <path d="M184 140 L226 140 L242 180 L168 180 Z" fill={dark} opacity="0.22" />
      <path d="M168 180 L242 180 L255 235 L155 235 Z" fill={dark} opacity="0.12" />
      <path d="M205 90 Q184 115 189 143 Q194 168 172 182 Q152 195 160 220" fill="none" stroke="#F5F0E6" strokeWidth="3.5" opacity="0.85" />
      <rect x="197" y="80" width="16" height="14" fill={dark} />
    </g>
  );
};

const ElMasgoufPescadoALaOrillaDelTigris: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="205" y1="235" x2="205" y2="110" stroke="#5C3A21" strokeWidth="5" />
      <path d="M170 120 Q195 95 240 120 Q225 155 205 165 Q185 155 170 120 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 120 L150 108 L155 132 Z" fill={dark} opacity="0.8" />
      <circle cx="212" cy="118" r="4" fill="#1A1A1A" />
      {[
        [175, 240, 15],
        [195, 250, 8],
        [215, 250, 8],
        [235, 240, 15],
      ].map(([x, y, h]) => (
        <polygon key={x} points={`${x},${y} ${x + 5},${y - h} ${x + 10},${y}`} fill="#D9622B" opacity="0.85" />
      ))}
    </g>
  );
};

const LosArabesDeLasMarismasYSusCasasMudhif: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const arches = [130, 165, 200, 235, 270];
  return (
    <g>
      <ellipse cx="200" cy="235" rx="120" ry="12" fill="#1B5E7A" opacity="0.4" />
      {arches.map((x) => (
        <path key={x} d={`M${x - 28} 220 Q${x} 140 ${x + 28} 220`} fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      ))}
      <path d="M100 220 Q200 195 300 220 L300 232 Q200 210 100 232 Z" fill={dark} opacity="0.5" />
      <path d="M92 224 Q200 175 308 224" fill="none" stroke={dark} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const ElMaqamIraqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="155" cy="120" r="16" fill="#D9B48A" stroke={dark} strokeWidth="2.5" />
      <path d="M135 145 Q155 130 175 145 L172 225 L138 225 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="155" cy="128" rx="6" ry="4" fill="#1A1A1A" opacity="0.8" />
      <path d="M235 150 L285 150 L275 210 L245 210 Z" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      {[248, 258, 268].map((x) => (
        <line key={x} x1={x} y1="155" x2={x - 3} y2="205" stroke={dark} strokeWidth="1.5" />
      ))}
      <rect x="255" y="130" width="10" height="24" fill="#5C3A21" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LosPalmeralesDeDatilesDeIraq: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const trunkX = [140, 210, 275];
  const trunkH = [95, 70, 100];
  return (
    <g>
      <rect x="90" y="228" width="230" height="14" fill="#1B5E7A" opacity="0.5" />
      {trunkX.map((x, i) => {
        const topY = 228 - trunkH[i];
        return (
          <g key={x}>
            <line x1={x} y1="228" x2={x + 4} y2={topY} stroke="#7A5230" strokeWidth="7" />
            <path d={`M${x + 4} ${topY} Q${x - 35} ${topY - 8} ${x - 45} ${topY + 15}`} fill="none" stroke="#3F7D2E" strokeWidth="6" strokeLinecap="round" />
            <path d={`M${x + 4} ${topY} Q${x + 40} ${topY - 10} ${x + 48} ${topY + 12}`} fill="none" stroke="#3F7D2E" strokeWidth="6" strokeLinecap="round" />
            <path d={`M${x + 4} ${topY} Q${x - 5} ${topY - 30} ${x + 2} ${topY - 40}`} fill="none" stroke="#3F7D2E" strokeWidth="6" strokeLinecap="round" />
            <path d={`M${x + 4} ${topY} Q${x + 18} ${topY - 26} ${x + 26} ${topY - 34}`} fill="none" stroke="#3F7D2E" strokeWidth="6" strokeLinecap="round" />
            {[[-8, 8], [4, 14], [14, 9]].map(([dx, dy]) => (
              <circle key={dx} cx={x + dx} cy={topY + dy} r="4" fill={accentColor} stroke={dark} strokeWidth="1" />
            ))}
          </g>
        );
      })}
    </g>
  );
};

export const iraqIllustrations: Record<string, IllustrationDefinition> = {
  "la-escritura-cuneiforme-primera-del-mundo": { component: LaEscrituraCuneiformePrimeraDelMundo },
  "el-zigurat-de-ur": { component: ElZiguratDeUr },
  "el-codigo-de-hammurabi": { component: ElCodigoDeHammurabi },
  "la-puerta-de-ishtar-de-babilonia": { component: LaPuertaDeIshtarDeBabilonia },
  "la-casa-de-la-sabiduria-de-bagdad": { component: LaCasaDeLaSabiduriaDeBagdad },
  "la-torre-malwiya-de-samarra": { component: LaTorreMalwiyaDeSamarra },
  "el-masgouf-pescado-a-la-orilla-del-tigris": { component: ElMasgoufPescadoALaOrillaDelTigris },
  "los-arabes-de-las-marismas-y-sus-casas-mudhif": { component: LosArabesDeLasMarismasYSusCasasMudhif },
  "el-maqam-iraqui": { component: ElMaqamIraqui },
  "los-palmerales-de-datiles-de-iraq": { component: LosPalmeralesDeDatilesDeIraq },
};
