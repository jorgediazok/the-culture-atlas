import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElIstanaNurulImanElPalacioMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.4" />
      <rect x="110" y="180" width="200" height="60" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="180" y="130" width="60" height="110" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <path d="M180 130 L240 130 L210 100 Z" fill={dark} />
      {[120, 155, 265, 290].map((x) => (
        <rect key={x} x={x} y="160" width="20" height="80" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2" />
      ))}
      {[120, 155, 265, 290].map((x) => (
        <path key={"r" + x} d={`M${x} 160 L${x + 20} 160 L${x + 10} 145 Z`} fill={dark} opacity="0.6" />
      ))}
      <circle cx="210" cy="115" r="5" fill="#C9A227" />
    </g>
  );
};

const LaMezquitaOmarAliSaifuddienYSuBarcazaReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <rect x="165" y="185" width="80" height="55" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="150" rx="42" ry="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="105" r="6" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="130" y="215" width="60" height="14" fill="#8C8C8C" stroke={dark} strokeWidth="2" />
      <path d="M130 215 Q160 200 190 215" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <polygon points="135,215 145,205 155,215" fill="#8C8C8C" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const KampongAyerLaVeneciaDelOriente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const houses = [
    { x: 110, w: 45, h: 55 },
    { x: 170, w: 55, h: 65 },
    { x: 245, w: 45, h: 50 },
  ];
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      {houses.map((h) => (
        <g key={h.x}>
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={h.x + 6 + i * 12} y1="240" x2={h.x + 6 + i * 12} y2="220" stroke="#5C3A21" strokeWidth="3" />
          ))}
          <rect x={h.x} y={220 - h.h} width={h.w} height={h.h} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <path d={`M${h.x - 5} ${220 - h.h} L${h.x + h.w + 5} ${220 - h.h} L${h.x + h.w / 2} ${220 - h.h - 20} Z`} fill={dark} opacity="0.6" />
        </g>
      ))}
      <line x1="90" y1="240" x2="320" y2="240" stroke="#5C3A21" strokeWidth="4" opacity="0.6" />
    </g>
  );
};

const ElParqueNacionalDeUluTemburong: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,245 140,110 175,150 205,90 240,145 275,120 320,245" fill="#2E6B45" stroke={dark} strokeWidth="2.5" />
      <rect x="198" y="90" width="14" height="150" fill="#8C8C8C" stroke={dark} strokeWidth="2.2" />
      {[100, 130, 160, 190, 220].map((y) => (
        <line key={y} x1="188" y1={y} x2="222" y2={y} stroke="#8C8C8C" strokeWidth="4" />
      ))}
      <ellipse cx="205" cy="175" rx="70" ry="12" fill="#F5F0E6" opacity="0.4" />
    </g>
  );
};

const ElAmbuyatPlatoNacionalDeBrunei: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="195" rx="60" ry="35" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M170 175 Q205 160 240 175 Q230 200 205 205 Q180 200 170 175 Z" fill="#E8E0C8" opacity="0.9" />
      <g transform="translate(260 150) rotate(20)">
        <line x1="0" y1="0" x2="0" y2="70" stroke="#8B5A2B" strokeWidth="4" />
        <path d="M-8 0 L0 -14 L8 0" fill="none" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
      </g>
      <path d="M195 180 Q200 165 210 178" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const LaColeccionDeAutosDelSultan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const car = (x: number, fill: string) => (
    <g key={x}>
      <rect x={x} y="195" width="55" height="20" rx="4" fill={fill} stroke={dark} strokeWidth="2" />
      <path d={`M${x + 10} 195 L${x + 18} 178 L${x + 40} 178 L${x + 46} 195 Z`} fill={fill} stroke={dark} strokeWidth="2" />
      <circle cx={x + 14} cy="217" r="7" fill="#3A3A3A" stroke={dark} strokeWidth="1.5" />
      <circle cx={x + 42} cy="217" r="7" fill="#3A3A3A" stroke={dark} strokeWidth="1.5" />
    </g>
  );
  return (
    <g>
      <rect x="95" y="225" width="220" height="15" fill="#8C8C8C" opacity="0.5" />
      {car(115, accentColor)}
      {car(180, "#8B1A1A")}
      {car(245, tint(accentColor, 0.25))}
    </g>
  );
};

const JerudongParkElParqueRealQueCerroSusPuertas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="150" cy="155" r="45" fill="none" stroke={accentColor} strokeWidth="6" />
      <circle cx="150" cy="155" r="6" fill={dark} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line key={deg} x1="150" y1="155" x2={150 + [45, 32, 0, -32, -45, -32, 0, 32][i]} y2={155 + [0, 32, 45, 32, 0, -32, -45, -32][i]} stroke={accentColor} strokeWidth="2.5" opacity="0.6" />
      ))}
      <line x1="150" y1="200" x2="150" y2="240" stroke="#8C8C8C" strokeWidth="6" />
      <path d="M230 240 L230 170 L250 150 L270 170 L270 240 Z" fill="#8B7355" stroke={dark} strokeWidth="2.5" opacity="0.85" />
      <line x1="180" y1="245" x2="300" y2="245" stroke="#3A3A3A" strokeWidth="6" opacity="0.6" />
      {[190, 220, 250, 280].map((x) => (
        <line key={x} x1={x} y1="245" x2={x} y2="220" stroke="#3A3A3A" strokeWidth="3" />
      ))}
    </g>
  );
};

const ElPetroleoYElEstadoSinImpuestoALaRenta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="195" y="110" width="20" height="100" fill="#3A3A3A" stroke={dark} strokeWidth="2.5" />
      <polygon points="175,110 235,110 220,90 190,90" fill="#3A3A3A" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="90" x2="205" y2="70" stroke="#3A3A3A" strokeWidth="4" />
      {[[150, 220], [175, 232], [200, 224], [230, 234], [255, 222]].map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r={10 - (i % 2) * 2} fill="#C9A227" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const MelayuIslamBerajaLaFilosofiaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 240 L140 130 L205 115 L270 130 L270 240 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="120" x2="205" y2="235" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {[150, 170, 190].map((y) => (
        <line key={y} x1="150" y1={y} x2="198" y2={y - 4} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <path d="M175 105 Q195 85 215 105 Q200 100 190 108 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="195,95 205,78 215,95" fill="#C9A227" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LosCanonesDeBronceCeremoniales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="205" width="130" height="20" rx="4" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="180" width="110" height="30" rx="14" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="255" cy="195" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="255" cy="195" r="7" fill="#0F3D45" />
      {[170, 195, 220].map((x) => (
        <path key={x} d={`M${x} 180 Q${x + 10} 170 ${x + 20} 180`} fill="none" stroke="#C9A227" strokeWidth="2" opacity="0.7" />
      ))}
      <circle cx="150" cy="230" r="8" fill="#8B7355" stroke={dark} strokeWidth="1.5" />
      <circle cx="260" cy="230" r="8" fill="#8B7355" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

export const bruneiIllustrations: Record<string, IllustrationDefinition> = {
  "el-istana-nurul-iman-el-palacio-mas-grande-del-mundo": { component: ElIstanaNurulImanElPalacioMasGrandeDelMundo },
  "la-mezquita-omar-ali-saifuddien-y-su-barcaza-real": { component: LaMezquitaOmarAliSaifuddienYSuBarcazaReal },
  "kampong-ayer-la-venecia-del-oriente": { component: KampongAyerLaVeneciaDelOriente },
  "el-parque-nacional-de-ulu-temburong": { component: ElParqueNacionalDeUluTemburong },
  "el-ambuyat-plato-nacional-de-brunei": { component: ElAmbuyatPlatoNacionalDeBrunei },
  "la-coleccion-de-autos-del-sultan": { component: LaColeccionDeAutosDelSultan },
  "jerudong-park-el-parque-real-que-cerro-sus-puertas": { component: JerudongParkElParqueRealQueCerroSusPuertas },
  "el-petroleo-y-el-estado-sin-impuesto-a-la-renta": { component: ElPetroleoYElEstadoSinImpuestoALaRenta },
  "melayu-islam-beraja-la-filosofia-nacional": { component: MelayuIslamBerajaLaFilosofiaNacional },
  "los-canones-de-bronce-ceremoniales": { component: LosCanonesDeBronceCeremoniales },
};
