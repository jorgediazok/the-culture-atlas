import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GranMigracionMasaiMara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 235 Q205 220 320 235 L320 250 L90 250 Z" fill={water} />
      {[[130, 220, 0], [170, 210, 1], [210, 225, 0], [250, 208, 1], [280, 222, 0]].map(([x, y, stripes]) => (
        <g key={x}>
          <path d={`M${x} ${y} Q${x - 8} ${y - 18} ${x + 4} ${y - 20} Q${x + 16} ${y - 18} ${x + 10} ${y} Z`} fill={stripes ? "#F5F0E6" : accentColor} stroke={dark} strokeWidth="2" />
          {stripes === 1 && [0, 1, 2].map((s) => (
            <line key={s} x1={x + s * 3} y1={y - 5} x2={x + s * 3} y2={y - 16} stroke={dark} strokeWidth="1.5" />
          ))}
          <line x1={x + 5} y1={y} x2={x + 3} y2={y + 12} stroke={dark} strokeWidth="3" />
          <line x1={x + 8} y1={y} x2={x + 10} y2={y + 12} stroke={dark} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const PuebloMasai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#F4A300", "#00838F", "#2E7D32", "#fff"];
  return (
    <g>
      <path d="M150 235 L150 155 Q150 145 205 145 Q260 145 260 155 L260 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[165, 190, 215, 240].map((x) => (
        <line key={x} x1={x} y1="150" x2={x} y2="235" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <circle cx="290" cy="180" r="34" fill="none" stroke={dark} strokeWidth="3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <circle key={deg} cx="290" cy="150" r="5" fill={colors[i % colors.length]} transform={`rotate(${deg} 290 180)`} />
      ))}
    </g>
  );
};

const MPesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="120" width="80" height="140" rx="10" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      <rect x="175" y="135" width="60" height="95" fill={light} />
      <circle cx="205" cy="180" r="26" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <text x="205" y="188" fontSize="24" fontWeight="700" fill="#fff" textAnchor="middle">$</text>
      <circle cx="205" cy="245" r="6" fill={dark} />
    </g>
  );
};

const CorredoresKeniatas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  const dirt = "#B5651D";
  return (
    <g>
      <path d="M90 240 Q205 225 320 240 L320 250 L90 250 Z" fill={dirt} opacity="0.5" />
      <circle cx="180" cy="150" r="12" fill={skin} />
      <path d="M170 165 Q182 160 194 165 L188 200 L198 235 L186 235 L178 205 L170 235 L158 235 L164 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M194 170 Q220 160 235 135" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M170 170 Q150 180 145 205" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <polygon points="150,220 205,145 260,220" fill={dark} opacity="0.25" />
    </g>
  );
};

const MonteKenia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  return (
    <g>
      <polygon points="100,240 205,110 310,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="165,190 205,110 245,190" fill={snow} />
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
      {[[135, 220], [275, 215]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 10} ${(y as number) - 20} ${x} ${(y as number) - 40} Q${(x as number) + 10} ${(y as number) - 20} ${x} ${y} Z`} fill="#2E7D32" opacity="0.6" />
      ))}
    </g>
  );
};

const CafeKeniata: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bean = "#4A2C2A";
  return (
    <g>
      <path d="M170 195 Q165 235 205 238 Q245 235 240 195 L235 175 L175 175 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="175" rx="30" ry="10" fill={accentColor} />
      <path d="M235 185 Q255 188 258 205 Q255 220 238 216" fill="none" stroke="#F5F0E6" strokeWidth="6" strokeLinecap="round" />
      <path d="M195 165 Q190 150 198 138" fill="none" stroke="#B0AFA8" strokeWidth="2.5" opacity="0.6" />
      {[[130, 220], [150, 235], [115, 235]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="9" ry="6" fill={bean} stroke={shade(bean, 0.3)} strokeWidth="1" transform={`rotate(15 ${x} ${y})`} />
      ))}
    </g>
  );
};

const LenguaSwahili: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M120 130 Q120 115 140 115 L185 115 Q195 115 193 128 L195 150 L172 130 L140 130 Q120 130 120 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M290 160 Q290 145 270 145 L225 145 Q215 145 217 158 L215 180 L238 160 L270 160 Q290 160 290 160 Z" fill={water} stroke={dark} strokeWidth="2.5" />
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const FlamencosLagoNakuru: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 220 Q205 205 320 220 L320 250 L90 250 Z" fill={water} />
      {[[130, 205, 1], [165, 195, 0.9], [200, 210, 0.85], [235, 198, 0.95], [270, 212, 0.8]].map(([x, y, scale], i) => (
        <g key={x as number} transform={`translate(${x} ${y}) scale(${scale})`}>
          <ellipse cx="0" cy="0" rx="10" ry="15" fill={accentColor} stroke={dark} strokeWidth="1.5" />
          <path d="M-2 -12 Q-2 -30 -14 -38" stroke={accentColor} strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M-14 -38 L-22 -35 L-15 -30 Z" fill={dark} opacity={0.7 - i * 0.05} />
          <line x1="0" y1="12" x2="-3" y2="30" stroke={dark} strokeWidth="2" />
          <line x1="4" y1="12" x2="7" y2="30" stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const CostaSwahiliMombasa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 235 Q205 245 320 235 L320 250 L90 250 Z" fill={water} />
      <rect x="120" y="150" width="90" height="85" fill="#D9BE8F" stroke={shade("#D9BE8F", 0.3)} strokeWidth="3" />
      {[135, 165, 195].map((x) => (
        <rect key={x} x={x - 6} y="130" width="12" height="20" fill="#D9BE8F" stroke={shade("#D9BE8F", 0.3)} strokeWidth="2" />
      ))}
      <path d="M250 235 L250 165 L295 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="250" y1="235" x2="250" y2="155" stroke={dark} strokeWidth="3" />
      <path d="M235 232 L250 220 L265 232 Z" fill="#8B5A2B" />
    </g>
  );
};

const GranValleDelRift: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#3D8FB0";
  return (
    <g>
      <polygon points="90,240 165,120 210,240" fill={accentColor} opacity="0.6" />
      <polygon points="200,240 250,110 320,240" fill={dark} opacity="0.6" />
      <polygon points="175,240 205,150 235,240" fill="#5C3A1E" opacity="0.85" />
      <ellipse cx="205" cy="235" rx="20" ry="8" fill={water} />
    </g>
  );
};

export const kenyaIllustrations: Record<string, IllustrationDefinition> = {
  "gran-migracion-masai-mara": { component: GranMigracionMasaiMara },
  "pueblo-masai": { component: PuebloMasai },
  "m-pesa": { component: MPesa },
  "corredores-keniatas": { component: CorredoresKeniatas },
  "monte-kenia": { component: MonteKenia },
  "cafe-keniata": { component: CafeKeniata },
  "lengua-swahili": { component: LenguaSwahili },
  "flamencos-lago-nakuru": { component: FlamencosLagoNakuru },
  "costa-swahili-mombasa": { component: CostaSwahiliMombasa },
  "gran-valle-del-rift": { component: GranValleDelRift },
};
