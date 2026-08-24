import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CuatroHemisferios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <circle cx="205" cy="165" r="70" fill={water} opacity="0.6" stroke={dark} strokeWidth="3" />
      <line x1="135" y1="165" x2="275" y2="165" stroke={accentColor} strokeWidth="3" />
      <path d="M205 95 Q175 130 205 165 Q235 200 205 235" fill="none" stroke={accentColor} strokeWidth="3" />
      <circle cx="205" cy="165" r="5" fill={dark} />
    </g>
  );
};

const LineaFechaKiribati: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      {[[140, 170, 16], [190, 150, 12], [240, 190, 18]].map(([x, y, r]) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M280 90 Q250 130 270 165 Q290 200 260 240" fill="none" stroke={dark} strokeWidth="2.5" strokeDasharray="6 6" />
    </g>
  );
};

const KiritimatiAtolon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const lagoon = "#26C6DA";
  return (
    <g>
      <ellipse cx="205" cy="180" rx="95" ry="55" fill={accentColor} stroke={dark} strokeWidth="4" />
      <ellipse cx="205" cy="180" rx="65" ry="34" fill={lagoon} stroke={shade(lagoon, 0.3)} strokeWidth="2" />
      {[[150, 155], [260, 160]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 10} ${(y as number) - 6} ${(x as number) + 20} ${y}`} fill="none" stroke="#4A8F4E" strokeWidth="5" strokeLinecap="round" />
      ))}
    </g>
  );
};

const AreaMarinaProtegida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.65" />
      {[[130, 150], [190, 175], [250, 140], [280, 190], [150, 210]].map(([x, y], i) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="14" ry="8" fill={accentColor} stroke={dark} strokeWidth="1.5" opacity={0.9 - i * 0.05} />
          <path d={`M${(x as number) - 14} ${y} L${(x as number) - 22} ${(y as number) - 5} M${(x as number) - 14} ${y} L${(x as number) - 22} ${(y as number) + 5}`} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      {[[170, 220], [230, 225]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 10} ${(y as number) - 16} ${x} ${(y as number) - 32} Q${(x as number) + 10} ${(y as number) - 16} ${x} ${y} Z`} fill="#F4A300" opacity="0.75" />
      ))}
    </g>
  );
};

const BanabaFosfatoReubicacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 220 Q205 235 320 220 L320 250 L90 250 Z" fill={water} />
      <ellipse cx="150" cy="215" rx="55" ry="20" fill="#B0AFA8" stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="185" width="12" height="30" fill={dark} />
      <path d="M130 185 L124 175 L142 175 L136 185 Z" fill={accentColor} />
      <path d="M250 195 L280 175 L285 200 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M270 200 Q290 195 300 175" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const ManeabaCasaReunion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const thatch = "#D4A017";
  return (
    <g>
      <path d="M110 200 Q205 130 300 200 L285 210 Q205 150 125 210 Z" fill={thatch} stroke={shade(thatch, 0.3)} strokeWidth="2.5" />
      {[130, 165, 205, 245, 280].map((x) => (
        <line key={x} x1={x} y1="205" x2={x} y2="240" stroke="#8B5A2B" strokeWidth="6" />
      ))}
      <path d="M115 205 Q205 145 295 205" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const CompraTierraFiyi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="140" width="230" height="90" fill={water} opacity="0.45" />
      {[[140, 180, 20], [270, 175, 26]].map(([x, y, r]) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M165 180 Q205 165 245 178" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="5 5" />
      <path d="M240 173 L248 178 L240 183 Z" fill={dark} />
      <path d="M195 220 L195 205 L215 205 L215 220 L225 225 L185 225 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BatallaTarawa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9BE8F";
  return (
    <g>
      <path d="M90 235 Q205 225 320 235 L320 250 L90 250 Z" fill={sand} />
      <ellipse cx="205" cy="185" rx="34" ry="18" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M180 180 Q205 165 230 180" fill="none" stroke={dark} strokeWidth="3" />
      <rect x="255" y="205" width="45" height="25" fill="#6B4B3A" stroke={dark} strokeWidth="2.5" opacity="0.7" />
      <line x1="260" y1="230" x2="255" y2="245" stroke={dark} strokeWidth="4" />
      <line x1="295" y1="230" x2="300" y2="245" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const TeBikeDanza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="205" cy="150" r="14" fill={skin} />
      <rect x="197" y="164" width="16" height="60" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M197 175 Q160 165 135 130" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M213 175 Q250 165 275 130" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M135 130 L120 122 L128 138 Z" fill={dark} />
      <path d="M275 130 L290 122 L282 138 Z" fill={dark} />
      <circle cx="199" cy="147" r="1.8" fill="#1A1A1A" />
      <circle cx="211" cy="147" r="1.8" fill="#1A1A1A" />
    </g>
  );
};

const IndependenciaGilbert: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 225 Q205 215 320 225 L320 250 L90 250 Z" fill={water} />
      {[[150, 220, 20], [220, 225, 26], [280, 218, 16]].map(([x, y, r]) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill={accentColor} opacity="0.5" />
      ))}
      <path d="M175 145 Q190 130 210 138 Q202 148 215 155 Q195 165 178 155 Q168 150 175 145 Z" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <path d="M175 145 L162 138" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="142" r="2.5" fill={dark} />
    </g>
  );
};

const TeMataanaArmadura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const wood = "#6B4A2E";
  return (
    <g>
      <path d="M180 135 L185 113 L192 132 L199 108 L206 132 L213 108 L220 132 L227 113 L232 135 Q205 120 180 135 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="142" r="15" fill={skin} />
      <circle cx="200" cy="140" r="1.8" fill="#1A1A1A" />
      <circle cx="210" cy="140" r="1.8" fill="#1A1A1A" />
      <path d="M182 162 L172 232 L238 232 L228 162 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M182 175 L228 175 M180 190 L230 190 M177 205 L233 205 M174 220 L236 220" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <path d="M182 175 L172 232 M228 175 L238 232 M205 162 L205 232" stroke={dark} strokeWidth="1.2" opacity="0.4" />
      <path d="M255 165 L290 100 L282 175 Z" fill={wood} stroke={dark} strokeWidth="2.5" />
      <path d="M290 100 L285 108 L280 105 L277 113 L272 110 L268 120" fill="none" stroke="#F5F0E6" strokeWidth="2" strokeLinecap="round" />
      <path d="M228 200 Q245 185 260 165" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const KareweToddy: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const trunk = "#8B6F47";
  return (
    <g>
      <path d="M205 245 Q195 180 200 120" fill="none" stroke={trunk} strokeWidth="14" strokeLinecap="round" />
      <path d="M200 120 Q160 95 130 105" fill="none" stroke="#4A8F4E" strokeWidth="7" strokeLinecap="round" />
      <path d="M200 118 Q175 80 155 65" fill="none" stroke="#4A8F4E" strokeWidth="7" strokeLinecap="round" />
      <path d="M202 116 Q230 85 255 70" fill="none" stroke="#4A8F4E" strokeWidth="7" strokeLinecap="round" />
      <path d="M203 120 Q245 100 270 112" fill="none" stroke="#4A8F4E" strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="198" cy="128" rx="10" ry="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="192" y="138" width="12" height="16" fill={shade(accentColor, 0.1)} stroke={dark} strokeWidth="1.5" />
      <circle cx="185" cy="185" r="11" fill={skin} />
      <path d="M175 200 Q185 190 195 200 L192 235 L178 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M195 205 Q210 180 200 145" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="176" cy="222" rx="10" ry="6" fill={dark} opacity="0.6" />
    </g>
  );
};

export const kiribatiIllustrations: Record<string, IllustrationDefinition> = {
  "cuatro-hemisferios": { component: CuatroHemisferios },
  "linea-fecha-kiribati": { component: LineaFechaKiribati },
  "kiritimati-atolon": { component: KiritimatiAtolon },
  "area-marina-protegida": { component: AreaMarinaProtegida },
  "banaba-fosfato-reubicacion": { component: BanabaFosfatoReubicacion },
  "maneaba-casa-reunion": { component: ManeabaCasaReunion },
  "compra-tierra-fiyi": { component: CompraTierraFiyi },
  "batalla-tarawa": { component: BatallaTarawa },
  "te-bike-danza": { component: TeBikeDanza },
  "independencia-gilbert": { component: IndependenciaGilbert },
  "te-mataana-armadura": { component: TeMataanaArmadura },
  "karewe-toddy": { component: KareweToddy },
};
