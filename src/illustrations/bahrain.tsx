import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElCaminoDeLasPerlasDeMuharraq: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 100 L320 100 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <path d="M175 175 Q160 195 175 215 Q190 235 205 220 Q230 210 220 185 Q210 160 190 165 Q178 168 175 175 Z" fill="#D9D2C0" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="200" cy="196" rx="20" ry="15" fill={tint(accentColor, 0.3)} opacity="0.85" />
      <circle cx="205" cy="196" r="14" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <g transform="translate(140 90)">
        <path d="M0 60 Q-8 30 5 5 Q12 -10 20 5 Q30 30 20 60 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
        <circle cx="10" cy="8" r="6" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      </g>
      <line x1="150" y1="90" x2="150" y2="60" stroke="#F5F0E6" strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const QalatAlBahreinYLaCivilizacionDilmun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.4" />
      <polygon points="110,240 320,240 300,190 130,190" fill="#B8A678" opacity="0.6" />
      <rect x="150" y="150" width="120" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="140" y="140" width="18" height="24" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <rect x="262" y="140" width="18" height="24" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={140 + i * 14} y="145" width="6" height="8" fill="#0F3D45" />
      ))}
      <rect x="195" y="200" width="30" height="40" fill="#0F3D45" />
    </g>
  );
};

const ElArbolDeLaVidaEnPlenoDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#D9C9A3" opacity="0.7" />
      <path d="M200 240 L200 180 Q205 175 198 160 Q210 155 205 140 Q195 130 205 118 Q185 110 190 130 Q175 130 185 150 Q170 155 185 165 Q180 175 195 180 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      {[
        [190, 130, -30, 20],
        [205, 118, 15, -25],
        [185, 150, -25, 15],
        [198, 160, 20, -15],
      ].map(([x, y, dx, dy], i) => (
        <path key={i} d={`M${x} ${y} Q${x + dx} ${y + dy} ${x + dx * 1.6} ${y + dy * 0.6}`} fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      ))}
      <ellipse cx="200" cy="240" rx="60" ry="8" fill="#B8A060" opacity="0.6" />
    </g>
  );
};

const LosTumulosFunerariosDeAali: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mounds = [
    { x: 130, r: 35 },
    { x: 200, r: 48 },
    { x: 270, r: 32 },
  ];
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#D9C9A3" opacity="0.7" />
      {mounds.map((m) => (
        <ellipse key={m.x} cx={m.x} cy="240" rx={m.r} ry={m.r * 0.75} fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
      {mounds.map((m) => (
        <path key={"l" + m.x} d={`M${m.x - m.r * 0.6} 232 Q${m.x} ${240 - m.r * 0.9} ${m.x + m.r * 0.6} 232`} fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
    </g>
  );
};

const LasCasasDeCoralYTorresDeVientoDeMuharraq: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="170" width="150" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="175" y="120" width="40" height="50" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="171" y="112" width="48" height="10" fill={dark} />
      <rect x="180" y="112" width="8" height="16" fill="none" stroke={dark} strokeWidth="2" />
      <rect x="202" y="112" width="8" height="16" fill="none" stroke={dark} strokeWidth="2" />
      {[[140, 190], [230, 190], [140, 215], [230, 215]].map(([x, y]) => (
        <rect key={x + "-" + y} x={x} y={y} width="20" height="16" fill="none" stroke={dark} strokeWidth="2" />
      ))}
      <path d="M160 165 Q205 100 250 165" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" />
    </g>
  );
};

const LosSellosDilmunDelComercioAntiguo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="165" r="55" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      <circle cx="205" cy="165" r="42" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <path d="M175 175 Q185 150 205 155 Q225 150 235 175 Q225 165 205 168 Q185 165 175 175 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="190" cy="158" r="3" fill="#0F3D45" />
      <circle cx="220" cy="158" r="3" fill="#0F3D45" />
      <path d="M180 190 L230 190" stroke="#F5F0E6" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const ElCircuitoInternacionalDeBahrein: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q160 260 220 235 Q270 215 320 240" fill="none" stroke="#3A3A3A" strokeWidth="22" strokeLinecap="round" />
      <path d="M90 240 Q160 260 220 235 Q270 215 320 240" fill="none" stroke="#F5F0E6" strokeWidth="2" strokeDasharray="10 10" strokeLinecap="round" />
      <g transform="translate(150 195) rotate(-8)">
        <path d="M0 15 L55 15 L48 0 L18 0 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
        <rect x="-6" y="10" width="14" height="10" fill={dark} />
        <rect x="47" y="10" width="14" height="10" fill={dark} />
      </g>
      <path d="M270 150 Q285 130 280 105" fill="none" stroke="#B8A060" strokeWidth="10" opacity="0.6" />
    </g>
  );
};

const ElTejidoTradicionalDeBaniJamra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C9A227", "#8B1A1A", tint(accentColor, 0.3)];
  return (
    <g>
      <rect x="110" y="110" width="20" height="130" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <rect x="280" y="110" width="20" height="130" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <rect x="120" y="105" width="170" height="10" fill="#5C3A21" />
      <rect x="120" y="235" width="170" height="10" fill="#5C3A21" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={130 + i * 21} y="120" width="14" height="110" fill={colors[i % colors.length]} opacity="0.85" />
      ))}
      {[150, 175, 200].map((y) => (
        <line key={y} x1="120" y1={y} x2="290" y2={y} stroke={dark} strokeWidth="1" opacity="0.3" />
      ))}
    </g>
  );
};

const LaAlfareriaDeAali: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const jar = (x: number, scale: number) => (
    <g key={x} transform={`translate(${x} 0) scale(${scale})`}>
      <path d="M0 90 Q-14 60 -8 35 Q-10 20 0 15 Q10 20 8 35 Q14 60 0 90 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="0" cy="15" rx="9" ry="4" fill={dark} opacity="0.6" />
    </g>
  );
  return (
    <g>
      <rect x="90" y="230" width="230" height="15" fill="#8B6F47" />
      {jar(150, 1)}
      {jar(205, 1.2)}
      {jar(260, 0.9)}
      <path d="M120 235 Q205 200 290 235" fill="none" stroke="#8B6F47" strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const ElMachbusPlatoNacionalDeBahrein: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="90" ry="24" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="192" rx="70" ry="15" fill={accentColor} opacity="0.85" />
      <rect x="175" y="170" width="60" height="24" rx="6" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {[[160, 188], [190, 184], [220, 188], [250, 184]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill="#8B1A1A" />
      ))}
    </g>
  );
};

export const bahrainIllustrations: Record<string, IllustrationDefinition> = {
  "el-camino-de-las-perlas-de-muharraq": { component: ElCaminoDeLasPerlasDeMuharraq },
  "qalat-al-bahrein-y-la-civilizacion-dilmun": { component: QalatAlBahreinYLaCivilizacionDilmun },
  "el-arbol-de-la-vida-en-pleno-desierto": { component: ElArbolDeLaVidaEnPlenoDesierto },
  "los-tumulos-funerarios-de-aali": { component: LosTumulosFunerariosDeAali },
  "las-casas-de-coral-y-torres-de-viento-de-muharraq": { component: LasCasasDeCoralYTorresDeVientoDeMuharraq },
  "los-sellos-dilmun-del-comercio-antiguo": { component: LosSellosDilmunDelComercioAntiguo },
  "el-circuito-internacional-de-bahrein": { component: ElCircuitoInternacionalDeBahrein },
  "el-tejido-tradicional-de-bani-jamra": { component: ElTejidoTradicionalDeBaniJamra },
  "la-alfareria-de-aali": { component: LaAlfareriaDeAali },
  "el-machbus-plato-nacional-de-bahrein": { component: ElMachbusPlatoNacionalDeBahrein },
};
