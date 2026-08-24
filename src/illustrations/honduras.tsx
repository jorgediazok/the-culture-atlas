import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaEscalinataJeroglificaDeCopan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const steps = Array.from({ length: 8 });
  return (
    <g>
      {steps.map((_, i) => (
        <rect key={i} x={150 - i * 4} y={240 - i * 16} width={110 + i * 8} height="16" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      ))}
      {steps.map((_, i) => (
        <circle key={"g" + i} cx={175 + (i % 3) * 25} cy={232 - i * 16} r="4" fill={dark} opacity="0.5" />
      ))}
      <rect x="175" y="95" width="60" height="20" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const RoatanYElArrecifeMesoamericano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const fish = (x: number, y: number, fill: string) => (
    <g key={x + "-" + y}>
      <ellipse cx={x} cy={y} rx="14" ry="8" fill={fill} stroke={dark} strokeWidth="1.8" />
      <polygon points={`${x - 14},${y} ${x - 22},${y - 6} ${x - 22},${y + 6}`} fill={fill} stroke={dark} strokeWidth="1.5" />
    </g>
  );
  return (
    <g>
      <path d="M90 245 Q205 225 320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.4" />
      {[[130, 210], [200, 195], [180, 230], [260, 200], [230, 225]].map(([x, y]) => (
        <path key={x + "-" + y} d={`M${x} ${y} Q${(x as number) + 15} ${(y as number) - 20} ${(x as number) + 30} ${y}`} fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" opacity="0.6" />
      ))}
      {fish(150, 140, "#C1272D")}
      {fish(230, 120, "#C9A227")}
      {fish(280, 160, tint(accentColor, 0.2))}
    </g>
  );
};

const LasGuacamayasDeMacawMountain: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="24" ry="30" fill="#C1272D" stroke={dark} strokeWidth="2.8" />
      <circle cx="195" cy="130" r="15" fill="#C1272D" stroke={dark} strokeWidth="2.5" />
      <path d="M180 130 Q165 132 168 142 Q178 138 183 132 Z" fill="#3A3A3A" stroke={dark} strokeWidth="1.5" />
      <circle cx="192" cy="126" r="2.5" fill="#3A2418" />
      <path d="M218 150 Q260 145 250 100 M215 158 Q255 160 250 120 M212 165 Q245 175 245 145" fill="none" stroke="#1B4F72" strokeWidth="6" strokeLinecap="round" />
      <path d="M216 154 Q250 152 245 110" fill="none" stroke="#C9A227" strokeWidth="5" strokeLinecap="round" />
      <line x1="190" y1="190" x2="185" y2="225" stroke={dark} strokeWidth="4" />
      <line x1="205" y1="190" x2="212" y2="225" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LaCeramicaNegraDeLosLencas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const jar = (x: number, scale: number) => (
    <g key={x} transform={`translate(${x} 0) scale(${scale})`}>
      <path d="M0 90 Q-20 70 -14 40 Q-16 22 0 18 Q16 22 14 40 Q20 70 0 90 Z" fill="#2A2A2A" stroke="#141414" strokeWidth="2.5" />
      <path d="M-10 45 L10 45 M-12 55 L12 55" stroke="#5C5C5C" strokeWidth="2" />
    </g>
  );
  return (
    <g>
      <rect x="90" y="235" width="230" height="10" fill={accentColor} stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {jar(150, 1)}
      {jar(210, 1.2)}
      {jar(270, 0.85)}
    </g>
  );
};

const LaCulturaGarifunaYLaMusicaPunta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="150" r="13" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 16} 235 Q${x - 18} 190 ${x} 185 Q${x + 18} 190 ${x + 16} 235 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
    </g>
  );
  return (
    <g>
      <path d="M90 240 L320 240 L320 250 L90 250 Z" fill="#D9C9A3" opacity="0.6" />
      {dancer(150, accentColor)}
      {dancer(260, "#C9A227")}
      <rect x="185" y="200" width="40" height="40" rx="6" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="200" rx="22" ry="8" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LasBaleadasElPlatoCotidianoDeHonduras: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 165 Q205 145 280 165 Q270 210 205 220 Q140 210 130 165 Z" fill="#EAD9A0" stroke={dark} strokeWidth="3" />
      <path d="M150 175 Q205 190 260 175" fill="none" stroke="#8B5A2B" strokeWidth="10" opacity="0.85" />
      <path d="M160 185 Q205 198 250 185" fill="none" stroke="#F5F0E6" strokeWidth="8" opacity="0.9" />
      <path d="M130 165 Q205 180 280 165" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const ElLagoDeYojoaYElCafeDeAltura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,200 140,140 190,200" fill="#3E5C40" stroke={dark} strokeWidth="2.5" />
      <polygon points="220,200 270,130 320,200" fill="#3E5C40" stroke={dark} strokeWidth="2.5" />
      <path d="M90 200 Q205 185 320 200 L320 240 L90 240 Z" fill={accentColor} opacity="0.85" />
      {[[130, 170], [155, 165], [250, 165], [280, 170]].map(([x, y]) => (
        <g key={x as number}>
          <line x1={x as number} y1={y as number} x2={x as number} y2={(y as number) + 15} stroke="#3E5C40" strokeWidth="2" />
          <circle cx={x as number} cy={y as number} r="4" fill="#C1272D" />
        </g>
      ))}
    </g>
  );
};

const ElRelojDeComayaguaElMasAntiguoDeAmerica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="165" y="140" width="80" height="100" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="140" r="38" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="140" r="4" fill={dark} />
      <line x1="205" y1="140" x2="205" y2="115" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="140" x2="222" y2="150" stroke={dark} strokeWidth="3" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line key={deg} x1="205" y1="106" x2="205" y2="112" stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 205 140)`} />
      ))}
      <polygon points="185,95 205,80 225,95" fill={accentColor} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const ElTabacoHondurenoYSusPuros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 130 Q115 160 125 190 M150 125 Q145 158 155 195 M180 132 Q175 162 185 188" fill="none" stroke="#3E5C2E" strokeWidth="10" strokeLinecap="round" opacity="0.75" />
      {[[190, 220], [220, 226], [250, 222], [280, 228]].map(([x, y], i) => (
        <rect key={x as number} x={x as number} y={y as number} width="60" height="9" rx="4" fill="#6B4A2A" stroke={dark} strokeWidth="1.6" transform={`rotate(${-3 + i} ${x} ${y})`} />
      ))}
      <ellipse cx="255" cy="200" rx="20" ry="6" fill="#8B7355" opacity="0.5" />
    </g>
  );
};

const ElCarnavalDeLaCeiba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dancer = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="150" r="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d={`M${x - 20} 130 L${x} 95 L${x + 20} 130`} fill="none" stroke="#C9A227" strokeWidth="4" strokeLinecap="round" />
      <path d={`M${x - 15} 230 Q${x - 18} 185 ${x} 180 Q${x + 18} 185 ${x + 15} 230 Z`} fill={fill} stroke={dark} strokeWidth="2.2" />
    </g>
  );
  return (
    <g>
      {dancer(160, accentColor)}
      {dancer(250, "#C1272D")}
      <rect x="90" y="235" width="230" height="10" fill="#8C8C8C" opacity="0.5" />
      <circle cx="205" cy="110" r="6" fill="#C9A227" />
      <circle cx="185" cy="100" r="5" fill={accentColor} />
      <circle cx="225" cy="100" r="5" fill="#C1272D" />
    </g>
  );
};

const LempiraElCaciqueQueResistioLaConquista: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <polygon points="90,240 150,150 210,240" fill={dark} opacity="0.5" />
      <polygon points="180,240 250,130 320,240" fill={accentColor} opacity="0.4" />
      {/* feathered headdress, fanned around a fixed base inside the head */}
      {[-50, -25, 0, 25, 50].map((deg) => (
        <path key={deg} d="M205 138 L198 90 L212 90 Z" fill="#C9A227" stroke={dark} strokeWidth="1" transform={`rotate(${deg} 205 138)`} />
      ))}
      {/* torso, neck rises into the head's interior */}
      <path d="M195 152 L215 152 L230 185 L225 235 L185 235 L180 185 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head drawn last so it covers the headdress and neck seams */}
      <circle cx="205" cy="150" r="16" fill={skin} stroke={dark} strokeWidth="2.5" />
      {/* arm holding the spear */}
      <path d="M228 188 L250 202" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <line x1="250" y1="90" x2="250" y2="230" stroke={dark} strokeWidth="5" />
      <polygon points="240,90 260,90 250,65" fill="#B0B8BF" stroke={dark} strokeWidth="1.5" />
      {/* feet */}
      <path d="M185 235 L179 240 L197 240 L197 235 Z" fill={skin} />
      <path d="M225 235 L231 240 L213 240 L213 235 Z" fill={skin} />
    </g>
  );
};

const LasAlfombrasDeAserrinDeComayagua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C9A227", "#1B7A8C", "#C1272D", tint(accentColor, 0.3)];
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#D9CBB3" />
      {[100, 130, 160, 190, 220].map((y) => (
        <line key={y} x1="90" y1={y} x2="320" y2={y} stroke="#B8A888" strokeWidth="1" opacity="0.4" />
      ))}
      {[70, 55, 40, 25, 10].map((r, i) => (
        <polygon key={r} points={`205,${170 - r} ${205 + r},170 205,${170 + r} ${205 - r},170`} fill={colors[i % colors.length]} stroke={dark} strokeWidth="1.5" />
      ))}
      <circle cx="140" cy="120" r="8" fill={colors[2]} />
      <circle cx="270" cy="120" r="8" fill={colors[3]} />
      <circle cx="140" cy="220" r="8" fill={colors[3]} />
      <circle cx="270" cy="220" r="8" fill={colors[2]} />
    </g>
  );
};

export const hondurasIllustrations: Record<string, IllustrationDefinition> = {
  "la-escalinata-jeroglifica-de-copan": { component: LaEscalinataJeroglificaDeCopan },
  "roatan-y-el-arrecife-mesoamericano": { component: RoatanYElArrecifeMesoamericano },
  "las-guacamayas-de-macaw-mountain": { component: LasGuacamayasDeMacawMountain },
  "la-ceramica-negra-de-los-lencas": { component: LaCeramicaNegraDeLosLencas },
  "la-cultura-garifuna-y-la-musica-punta": { component: LaCulturaGarifunaYLaMusicaPunta },
  "las-baleadas-el-plato-cotidiano-de-honduras": { component: LasBaleadasElPlatoCotidianoDeHonduras },
  "el-lago-de-yojoa-y-el-cafe-de-altura": { component: ElLagoDeYojoaYElCafeDeAltura },
  "el-reloj-de-comayagua-el-mas-antiguo-de-america": { component: ElRelojDeComayaguaElMasAntiguoDeAmerica },
  "el-tabaco-hondureno-y-sus-puros": { component: ElTabacoHondurenoYSusPuros },
  "el-carnaval-de-la-ceiba": { component: ElCarnavalDeLaCeiba },
  "lempira-el-cacique-que-resistio-la-conquista": { component: LempiraElCaciqueQueResistioLaConquista },
  "las-alfombras-de-aserrin-de-comayagua": { component: LasAlfombrasDeAserrinDeComayagua },
};
