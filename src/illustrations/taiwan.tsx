import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElTaipei101YSuAmortiguadorGigante: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const segments = [
    { y: 240, h: 30, w: 70 },
    { y: 210, h: 28, w: 62 },
    { y: 182, h: 26, w: 68 },
    { y: 156, h: 24, w: 58 },
    { y: 132, h: 22, w: 64 },
    { y: 110, h: 20, w: 54 },
  ];
  return (
    <g>
      {segments.map((s, i) => (
        <g key={s.y}>
          <rect x={205 - s.w / 2} y={s.y - s.h} width={s.w} height={s.h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.2" />
          <polygon points={`${205 - s.w / 2 - 4},${s.y} ${205 + s.w / 2 + 4},${s.y} ${205 + s.w / 2 - 6},${s.y - 6} ${205 - s.w / 2 + 6},${s.y - 6}`} fill={dark} opacity="0.5" />
        </g>
      ))}
      <line x1="205" y1="90" x2="205" y2="60" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="150" r="16" fill="#C9A227" stroke={dark} strokeWidth="2.5" opacity="0.9" />
    </g>
  );
};

const LosMercadosNocturnosYElTofuApestoso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="175" width="130" height="55" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="130" y="165" width="150" height="12" fill={dark} opacity="0.6" />
      <ellipse cx="205" cy="160" rx="24" ry="10" fill="#3A3A3A" stroke={dark} strokeWidth="2" />
      <path d="M195 152 Q198 135 192 122 M215 152 Q213 138 220 126" fill="none" stroke="#D9D2C0" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      {[160, 250].map((x) => (
        <g key={x}>
          <circle cx={x} cy="110" r="14" fill="#C1272D" stroke={dark} strokeWidth="2" />
          <line x1={x} y1="96" x2={x} y2="80" stroke="#5C3A21" strokeWidth="2.5" />
        </g>
      ))}
    </g>
  );
};

const ElTeDeBurbujasNacidoEnTaichung: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 240 L165 140 L245 140 L240 240 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      <path d="M170 200 L166 240 L244 240 L240 200 Z" fill={accentColor} opacity="0.85" />
      {Array.from({ length: 10 }).map((_, i) => (
        <circle key={i} cx={180 + (i % 5) * 15} cy={215 + Math.floor(i / 5) * 15} r="5" fill="#3A2418" />
      ))}
      <rect x="198" y="90" width="14" height="60" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const ElMuseoDelPalacioNacionalYLaColDeJade: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="200" width="110" height="18" fill="#8C8C8C" stroke={dark} strokeWidth="2" />
      <path
        d="M175 200 Q160 175 175 150 Q170 130 190 118 Q205 128 200 148 Q220 135 230 152 Q240 165 225 178 Q235 190 220 200 Z"
        fill="#5C7A3A"
        stroke={dark}
        strokeWidth="2.8"
      />
      <path d="M190 118 Q205 128 200 148" fill="none" stroke={tint("#5C7A3A", 0.3)} strokeWidth="2" opacity="0.7" />
      <path d="M175 150 Q185 155 195 150" fill="none" stroke={tint("#5C7A3A", 0.3)} strokeWidth="2" opacity="0.6" />
      <ellipse cx="210" cy="160" rx="6" ry="3" fill="#3A2418" transform="rotate(20 210 160)" />
    </g>
  );
};

const ElLagoSolLunaYElPuebloThao: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="150" cy="185" r="40" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.85" />
      <path d="M255 150 Q290 150 290 185 Q290 220 255 220 Q275 205 275 185 Q275 165 255 150 Z" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.85" />
      <ellipse cx="205" cy="185" rx="14" ry="30" fill="#5C7A3A" stroke={dark} strokeWidth="2.2" />
      <path d="M90 130 Q205 100 320 130 L320 145 Q205 118 90 145 Z" fill="#8C8C8C" opacity="0.5" />
    </g>
  );
};

const ElCanonDeTarokoTalladoEnMarmol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,240 150,90 190,240" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <polygon points="320,240 260,90 220,240" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      {[110, 130, 150].map((x, i) => (
        <line key={x} x1={x} y1={230 - i * 30} x2={x + 30} y2={220 - i * 30} stroke={dark} strokeWidth="2" opacity="0.35" />
      ))}
      {[290, 270, 250].map((x, i) => (
        <line key={x} x1={x} y1={230 - i * 30} x2={x - 30} y2={220 - i * 30} stroke={dark} strokeWidth="2" opacity="0.35" />
      ))}
      <path d="M190 240 Q205 220 220 240" fill="#1B5E7A" opacity="0.6" />
    </g>
  );
};

const TaiwanYElOrigenDeLasLenguasAustronesias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const points = [
    [120, 220],
    [90, 150],
    [280, 100],
    [300, 210],
    [150, 90],
  ];
  return (
    <g>
      <ellipse cx="205" cy="165" rx="18" ry="26" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {points.map(([x, y]) => (
        <g key={x + "-" + y}>
          <line x1="205" y1="165" x2={x} y2={y} stroke={dark} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
          <circle cx={x} cy={y} r="7" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const ElBudaixiElTeatroDeTiteresDeGuante: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 240 L170 165 Q170 145 205 145 Q240 145 240 165 L235 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="125" r="20" fill="#E8C39E" stroke={dark} strokeWidth="2.5" />
      <path d="M185 115 Q205 95 225 115 Q225 100 205 92 Q185 100 185 115 Z" fill="#C1272D" stroke={dark} strokeWidth="2.2" />
      <circle cx="198" cy="122" r="2.5" fill="#3A2418" />
      <circle cx="212" cy="122" r="2.5" fill="#3A2418" />
      <path d="M160 200 Q140 180 150 155" fill="none" stroke="#E8C39E" strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const ElFerrocarrilForestalDeAlishan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 235 Q205 210 320 235 L320 245 Q205 220 90 245 Z" fill="#8C8C8C" opacity="0.5" />
      <rect x="150" y="195" width="100" height="30" rx="6" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <rect x="160" y="180" width="35" height="20" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.2" />
      <circle cx="165" cy="230" r="9" fill="#3A3A3A" stroke={dark} strokeWidth="1.8" />
      <circle cx="195" cy="230" r="9" fill="#3A3A3A" stroke={dark} strokeWidth="1.8" />
      <circle cx="230" cy="230" r="9" fill="#3A3A3A" stroke={dark} strokeWidth="1.8" />
      <path d="M100 175 L130 210 M320 175 L290 210" stroke="#2E6B45" strokeWidth="10" strokeLinecap="round" opacity="0.7" />
      <ellipse cx="205" cy="105" rx="55" ry="16" fill="#F5F0E6" opacity="0.6" />
    </g>
  );
};

const ElTemploLongshanYLaReligionPopular: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="180" width="110" height="60" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M130 180 Q205 150 280 180 L280 192 Q205 165 130 192 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M120 182 Q140 165 130 178" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M290 182 Q270 165 280 178" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[170, 240].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="150" rx="8" ry="12" fill="#C1272D" stroke={dark} strokeWidth="1.8" />
          <line x1={x} y1="162" x2={x} y2="180" stroke="#5C3A21" strokeWidth="2" />
        </g>
      ))}
      <rect x="190" y="200" width="30" height="40" fill="#0F3D45" />
    </g>
  );
};

export const taiwanIllustrations: Record<string, IllustrationDefinition> = {
  "el-taipei-101-y-su-amortiguador-gigante": { component: ElTaipei101YSuAmortiguadorGigante },
  "los-mercados-nocturnos-y-el-tofu-apestoso": { component: LosMercadosNocturnosYElTofuApestoso },
  "el-te-de-burbujas-nacido-en-taichung": { component: ElTeDeBurbujasNacidoEnTaichung },
  "el-museo-del-palacio-nacional-y-la-col-de-jade": { component: ElMuseoDelPalacioNacionalYLaColDeJade },
  "el-lago-sol-luna-y-el-pueblo-thao": { component: ElLagoSolLunaYElPuebloThao },
  "el-canon-de-taroko-tallado-en-marmol": { component: ElCanonDeTarokoTalladoEnMarmol },
  "taiwan-y-el-origen-de-las-lenguas-austronesias": { component: TaiwanYElOrigenDeLasLenguasAustronesias },
  "el-budaixi-el-teatro-de-titeres-de-guante": { component: ElBudaixiElTeatroDeTiteresDeGuante },
  "el-ferrocarril-forestal-de-alishan": { component: ElFerrocarrilForestalDeAlishan },
  "el-templo-longshan-y-la-religion-popular": { component: ElTemploLongshanYLaReligionPopular },
};
