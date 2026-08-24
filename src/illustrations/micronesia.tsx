import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const NanMadol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#26C6DA";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.45" />
      {[[130, 180, 50, 45], [200, 165, 60, 55], [270, 190, 40, 40]].map(([x, y, w, h], i) => (
        <g key={x as number}>
          {[0, 1, 2, 3].map((c) => (
            <rect key={c} x={(x as number) - (w as number) / 2 + c * 12} y={(y as number) - (h as number) + c * 2} width="10" height={h as number} fill={i % 2 === 0 ? accentColor : shade(accentColor, 0.15)} stroke={dark} strokeWidth="1" />
          ))}
        </g>
      ))}
    </g>
  );
};

const PiedrasRai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="175" r="75" fill={accentColor} stroke={dark} strokeWidth="4" />
      <circle cx="205" cy="175" r="24" fill="#F5EFE0" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="240" rx="80" ry="10" fill={dark} opacity="0.25" />
    </g>
  );
};

const CompactoLibreAsociacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin1 = "#8B5A2B";
  const skin2 = "#D9A46A";
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.35" />
      <path d="M130 205 Q140 195 160 200 L200 205 L200 217 L165 215 Q145 217 135 207 Z" fill={skin1} stroke={dark} strokeWidth="2.5" />
      <path d="M280 205 Q270 195 250 200 L210 205 L210 217 L245 215 Q265 217 275 207 Z" fill={skin2} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const PeciosChuuk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.7" />
      <path d="M140 200 L280 200 L265 220 L155 220 Z" fill={dark} opacity="0.7" />
      <rect x="175" y="175" width="16" height="28" fill={dark} opacity="0.7" />
      <path d="M155 220 Q140 225 130 210" stroke={dark} strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.7" />
      {[[160, 205], [200, 195], [240, 208]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="6" fill={accentColor} opacity="0.6" />
      ))}
      <path d="M170 230 Q175 220 185 218 M220 232 Q225 222 235 220" fill="none" stroke="#F4A300" strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const CuatroEstados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA"];
  return (
    <g>
      {[[135, 150], [200, 130], [265, 155], [230, 210]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="24" fill={colors[i]} stroke={dark} strokeWidth="2.5" />
      ))}
      <line x1="135" y1="150" x2="200" y2="130" stroke={dark} strokeWidth="1.5" opacity="0.4" strokeDasharray="3 3" />
      <line x1="200" y1="130" x2="265" y2="155" stroke={dark} strokeWidth="1.5" opacity="0.4" strokeDasharray="3 3" />
      <line x1="265" y1="155" x2="230" y2="210" stroke={dark} strokeWidth="1.5" opacity="0.4" strokeDasharray="3 3" />
    </g>
  );
};

const NavegacionTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      {[[130, 130, 280, 220], [280, 130, 130, 220], [130, 175, 280, 175]].map(([x1, y1, x2, y2]) => (
        <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={wood} strokeWidth="3" strokeLinecap="round" />
      ))}
      {[[150, 150], [205, 175], [260, 145], [190, 205]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="7" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const SakauPohnpei: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#8B8378";
  return (
    <g>
      <ellipse cx="205" cy="220" rx="70" ry="16" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2.5" />
      {[[170, 213], [200, 217], [230, 212]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 8} ${(y as number) - 8} ${x} ${(y as number) - 14} Q${(x as number) + 8} ${(y as number) - 8} ${x} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      <ellipse cx="205" cy="170" rx="16" ry="24" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2.5" transform="rotate(20 205 170)" />
    </g>
  );
};

const IdiomasMicronesia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA", "#C1272D"];
  return (
    <g>
      {[[140, 190, 0], [190, 160, 1], [240, 195, 2], [180, 225, 3], [270, 155, 4]].map(([x, y, i], idx) => (
        <path key={idx} d={`M${(x as number) - 28} ${(y as number) - 17} Q${(x as number) - 32} ${y} ${(x as number) - 13} ${y} L${(x as number) - 8} ${y} L${(x as number) - 11} ${(y as number) + 11} L${x} ${y} L${(x as number) + 28} ${y} Q${(x as number) + 32} ${y} ${(x as number) + 32} ${(y as number) - 17} Q${(x as number) + 32} ${(y as number) - 32} ${(x as number) + 28} ${(y as number) - 32} L${(x as number) - 28} ${(y as number) - 32} Q${(x as number) - 32} ${(y as number) - 32} ${(x as number) - 28} ${(y as number) - 17} Z`} fill={colors[i as number]} stroke={dark} strokeWidth="1.5" opacity="0.9" />
      ))}
    </g>
  );
};

const PescaAtun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <path d="M90 225 Q205 240 320 225 L320 250 L90 250 Z" fill={water} />
      <path d="M130 180 Q170 160 220 175 Q255 185 260 200 Q255 215 220 210 Q170 200 130 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M260 200 L285 185 L280 210 Z" fill={dark} />
      <circle cx="145" cy="185" r="3" fill="#1A1A1A" />
      <path d="M170 165 Q175 150 185 145 M195 168 Q200 155 208 148" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M150 235 L260 235 L245 210 L165 210 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" opacity="0.7" />
    </g>
  );
};

const NivelMarAmenaza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.65" />
      <ellipse cx="205" cy="195" rx="55" ry="24" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.85" />
      <path d="M90 210 Q205 200 320 210" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
      {[[185, 190], [225, 188]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 6} ${(y as number) - 10} ${(x as number) + 12} ${y}`} fill="none" stroke="#4A8F4E" strokeWidth="4" strokeLinecap="round" />
      ))}
    </g>
  );
};

const NahnmwarkiTitulos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const skin2 = "#D9A46A";
  const yam = "#C9A227";
  return (
    <g>
      <rect x="145" y="215" width="100" height="20" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <circle cx="195" cy="148" r="15" fill={skin} />
      <path d="M180 138 Q195 120 210 138 L206 128 Q195 116 184 128 Z" fill="#4A8F4E" stroke={dark} strokeWidth="2" />
      <path d="M178 166 Q195 156 212 166 L208 215 L182 215 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="275" cy="188" r="12" fill={skin2} />
      <path d="M264 202 Q275 194 286 202 L283 240 L267 240 Z" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2" />
      <path d="M264 205 Q235 195 220 190" fill="none" stroke={skin2} strokeWidth="7" strokeLinecap="round" />
      <path d="M212 192 Q220 175 240 178 Q255 180 250 198 Q245 210 225 205 Q212 200 212 192 Z" fill={yam} stroke={shade(yam, 0.3)} strokeWidth="2" />
    </g>
  );
};

const PwohlBetel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const leaf = "#4A8F4E";
  return (
    <g>
      <circle cx="180" cy="150" r="14" fill={skin} />
      <path d="M165 168 Q180 158 195 168 L191 230 L169 230 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M195 195 Q225 185 245 195" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="255" cy="195" rx="30" ry="20" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="2.5" />
      {[[240, 190], [255, 198], [270, 188]].map(([x, y]) => (
        <g key={x as number}>
          <circle cx={x} cy={y} r="8" fill="#8B4513" stroke={dark} strokeWidth="1.5" />
          <path d={`M${(x as number) - 10} ${(y as number) - 2} Q${x} ${(y as number) - 14} ${(x as number) + 10} ${(y as number) - 2} Q${x} ${(y as number) + 6} ${(x as number) - 10} ${(y as number) - 2} Z`} fill={leaf} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

export const micronesiaIllustrations: Record<string, IllustrationDefinition> = {
  "nan-madol": { component: NanMadol },
  "piedras-rai": { component: PiedrasRai },
  "compacto-libre-asociacion": { component: CompactoLibreAsociacion },
  "pecios-chuuk": { component: PeciosChuuk },
  "cuatro-estados": { component: CuatroEstados },
  "navegacion-tradicional": { component: NavegacionTradicional },
  "sakau-pohnpei": { component: SakauPohnpei },
  "idiomas-micronesia": { component: IdiomasMicronesia },
  "pesca-atun": { component: PescaAtun },
  "nivel-mar-amenaza": { component: NivelMarAmenaza },
  "nahnmwarki-titulos": { component: NahnmwarkiTitulos },
  "nuez-de-areca-pwohl": { component: PwohlBetel },
};
