import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElInciensoDeDofarTesoroMilenario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 240 Q185 190 200 150 Q195 120 215 100 Q210 130 220 150 Q235 190 225 240 Z" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <path d="M200 150 Q175 145 165 165 M220 150 Q245 145 255 165" fill="none" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
      {[[175, 175], [190, 195], [230, 190], [245, 170]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} Q${x + 4} ${y + 8} ${x} ${y + 16} Q${x - 4} ${y + 8} ${x} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      {[[150, 230], [175, 235], [205, 232], [235, 235], [260, 230]].map(([x, y]) => (
        <polygon key={x} points={`${x},${y} ${x+6},${y+10} ${x-6},${y+10}`} fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="1.2" />
      ))}
    </g>
  );
};

const ElFuerteDeNizwaCorazonDelOmanAntiguo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="200" width="170" height="40" fill={shade(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="160" r="70" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      <circle cx="205" cy="160" r="52" fill={tint(accentColor, 0.15)} opacity="0.6" />
      {Array.from({ length: 10 }).map((_, i) => {
        const positions: [number, number][] = [
          [205, 92], [253, 108], [273, 160], [253, 212], [205, 228], [157, 212], [137, 160], [157, 108], [180, 95], [230, 95],
        ];
        const [x, y] = positions[i];
        return <rect key={i} x={x - 6} y={y - 6} width="12" height="12" fill={accentColor} stroke={dark} strokeWidth="1.5" />;
      })}
      <rect x="192" y="185" width="26" height="30" fill={dark} opacity="0.5" />
    </g>
  );
};

const ElKhanjarSimboloNacionalDeOman: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g transform="rotate(-8 205 165)">
      <path d="M205 90 Q230 115 225 150 Q222 175 200 178 Q178 175 182 150 Q180 115 205 90 Z" fill="#C9A227" stroke={dark} strokeWidth="2.5" />
      <rect x="192" y="175" width="26" height="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M188 189 Q205 220 222 189 L215 235 Q205 245 195 235 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="228" width="110" height="20" rx="4" fill="#8B1A2B" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="238" r="6" fill="#C9A227" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LasArenasDeWahiba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q150 200 205 225 Q260 195 320 235 L320 250 L90 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M90 245 Q150 215 205 235 Q260 210 320 245" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" />
      {[[130, 220], [165, 210], [200, 218], [235, 208]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="9" ry="7" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
          <line x1={x} y1={y - 7} x2={x} y2={y - 16} stroke="#3E2E24" strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const LosAflajCanalesDeAguaMilenarios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 100 Q150 140 140 180 Q130 220 170 240" fill="none" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
      <path d="M110 100 Q150 140 140 180 Q130 220 170 240" fill="none" stroke={tint(accentColor, 0.35)} strokeWidth="6" strokeLinecap="round" />
      {[[130, 120], [160, 160], [150, 200]].map(([x, y]) => (
        <g key={x}>
          <line x1={x} y1={y} x2={x} y2={y - 30} stroke="#5C3A21" strokeWidth="5" />
          <path d={`M${x} ${y - 30} Q${x - 14} ${y - 24} ${x - 12} ${y - 10} M${x} ${y - 30} Q${x + 14} ${y - 24} ${x + 12} ${y - 10}`} fill="none" stroke="#3F7D2E" strokeWidth="4" />
        </g>
      ))}
      <rect x="220" y="200" width="80" height="45" fill="#D9C9A3" stroke={dark} strokeWidth="2.5" />
      <polygon points="215,200 260,175 305,200" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElDhowOmaniElBarcoQueLlegoHastaChina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="238" rx="120" ry="10" fill="#1B5E7A" opacity="0.5" />
      <path d="M130 220 Q140 200 190 200 L250 200 Q270 205 265 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="200" y1="200" x2="200" y2="105" stroke="#5C3A21" strokeWidth="5" />
      <polygon points="200,108 260,145 200,170" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const MusandamLosFiordosDeArabia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,240 95,120 160,150 175,90 200,160 230,100 260,155 300,110 320,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M90 240 Q205 220 320 240 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.6" />
      <path d="M120 240 Q205 225 290 240" fill="none" stroke="#1B5E7A" strokeWidth="4" opacity="0.7" />
    </g>
  );
};

const RasAlJinzSantuarioDeTortugasVerdes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="120" fill="#0B1E3A" />
      <circle cx="270" cy="110" r="18" fill="#F5F0E6" opacity="0.9" />
      <path d="M90 195 Q205 180 320 195 L320 250 L90 250 Z" fill="#C9A87C" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="190" cy="220" rx="48" ry="32" fill="#3F7D2E" stroke={dark} strokeWidth="3" />
      <circle cx="150" cy="212" r="14" fill="#3F7D2E" stroke={dark} strokeWidth="2.5" />
      {[[170, 195], [165, 245], [220, 195], [222, 245]].map(([x, y]) => (
        <ellipse key={x + "-" + y} cx={x} cy={y} rx="10" ry="7" fill="#3F7D2E" stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M150 225 Q190 218 230 225" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const ElHalwaElDulceDeLaHospitalidadOmani: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="185" cy="205" rx="55" ry="20" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <path d="M140 200 Q150 180 185 182 Q220 180 230 200 Q210 195 185 197 Q160 195 140 200 Z" fill="#B8763F" opacity="0.9" />
      <rect x="260" y="185" width="40" height="35" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="268" y="165" width="24" height="24" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <path d="M292 195 L310 188" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const LaGranMezquitaSultanQaboos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 220 Q110 130 205 110 Q300 130 300 220 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="205,130 240,220 170,220" fill="none" stroke="#B8860B" strokeWidth="2" opacity="0.5" />
      <line x1="205" y1="150" x2="205" y2="200" stroke="#B8860B" strokeWidth="3" />
      <circle cx="205" cy="150" r="14" fill="#D9A521" stroke={dark} strokeWidth="2" />
      {[[190, 205], [220, 205], [175, 218], [235, 218]].map(([x, y]) => (
        <circle key={x + "-" + y} cx={x} cy={y} r="5" fill="#D9A521" opacity="0.8" />
      ))}
      <rect x="105" y="220" width="200" height="20" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ElKhareefMonzonDeSalalah: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const fog = "#E8EDE8";
  const water = "#7EC8E3";
  return (
    <g>
      <path d="M90 240 Q150 175 205 200 Q260 165 320 220 L320 250 L90 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M90 240 Q150 190 205 210 Q260 180 320 225" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" />
      <ellipse cx="150" cy="195" rx="55" ry="14" fill={fog} opacity="0.7" />
      <ellipse cx="250" cy="175" rx="50" ry="12" fill={fog} opacity="0.6" />
      <path d="M205 200 Q200 215 203 235" fill="none" stroke={water} strokeWidth="8" strokeLinecap="round" opacity="0.85" />
      <ellipse cx="203" cy="238" rx="14" ry="5" fill={water} opacity="0.6" />
    </g>
  );
};

const Renacimiento1970SultanQaboos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const road = "#5C5C5C";
  const roller = "#B0B8BF";
  return (
    <g>
      <path d="M90 235 Q205 225 320 235 L320 245 L90 245 Z" fill={road} stroke={dark} strokeWidth="2" />
      <path d="M90 235 Q205 225 320 235" fill="none" stroke="#F5F0E6" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.5" />
      <rect x="115" y="205" width="30" height="20" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="122" cy="230" r="12" fill={roller} stroke={dark} strokeWidth="2" />
      <circle cx="145" cy="230" r="10" fill={roller} stroke={dark} strokeWidth="2" />
      <rect x="210" y="165" width="90" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="205,165 255,140 305,165" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="245" y="200" width="20" height="35" fill={dark} opacity="0.6" />
      {[225, 280].map((x) => (
        <rect key={x} x={x} y="180" width="16" height="16" fill="none" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

export const omanIllustrations: Record<string, IllustrationDefinition> = {
  "el-incienso-de-dofar-tesoro-milenario": { component: ElInciensoDeDofarTesoroMilenario },
  "el-fuerte-de-nizwa-corazon-del-oman-antiguo": { component: ElFuerteDeNizwaCorazonDelOmanAntiguo },
  "el-khanjar-simbolo-nacional-de-oman": { component: ElKhanjarSimboloNacionalDeOman },
  "las-arenas-de-wahiba": { component: LasArenasDeWahiba },
  "los-aflaj-canales-de-agua-milenarios": { component: LosAflajCanalesDeAguaMilenarios },
  "el-dhow-omani-el-barco-que-llego-hasta-china": { component: ElDhowOmaniElBarcoQueLlegoHastaChina },
  "musandam-los-fiordos-de-arabia": { component: MusandamLosFiordosDeArabia },
  "ras-al-jinz-santuario-de-tortugas-verdes": { component: RasAlJinzSantuarioDeTortugasVerdes },
  "el-halwa-el-dulce-de-la-hospitalidad-omani": { component: ElHalwaElDulceDeLaHospitalidadOmani },
  "la-gran-mezquita-sultan-qaboos": { component: LaGranMezquitaSultanQaboos },
  "el-khareef-monzon-de-salalah": { component: ElKhareefMonzonDeSalalah },
  "renacimiento-1970-sultan-qaboos": { component: Renacimiento1970SultanQaboos },
};
