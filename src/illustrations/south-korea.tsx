import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Hangul: IllustrationComponent = ({ accentColor }) => {
  const stone = "#8B8378";
  return (
    <g>
      <rect x="130" y="110" width="150" height="130" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="3" />
      <rect x="140" y="120" width="130" height="110" fill="none" stroke={shade(stone, 0.35)} strokeWidth="1.5" opacity="0.5" />
      {/* carved hangul-style strokes: circle + horizontal + vertical, forming stylized syllable blocks */}
      <circle cx="175" cy="150" r="12" fill="none" stroke={accentColor} strokeWidth="5" />
      <line x1="200" y1="140" x2="230" y2="140" stroke={accentColor} strokeWidth="6" />
      <line x1="200" y1="160" x2="230" y2="160" stroke={accentColor} strokeWidth="6" />
      <line x1="160" y1="190" x2="160" y2="220" stroke={accentColor} strokeWidth="6" />
      <line x1="185" y1="190" x2="185" y2="220" stroke={accentColor} strokeWidth="6" />
      <line x1="160" y1="205" x2="185" y2="205" stroke={accentColor} strokeWidth="6" />
      <circle cx="230" cy="200" r="14" fill="none" stroke={accentColor} strokeWidth="5" />
      <line x1="215" y1="220" x2="245" y2="220" stroke={accentColor} strokeWidth="5" />
    </g>
  );
};

const MilagroRioHan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const light = tint(accentColor, 0.4);
  return (
    <g>
      <path d="M90 235 Q205 245 320 235 L320 250 L90 250 Z" fill={water} />
      {[[120, 235, 30, 60], [160, 240, 26, 90], [200, 238, 34, 75], [245, 240, 24, 100], [280, 236, 28, 65]].map(([x, y, w, h], i) => (
        <rect key={x as number} x={(x as number) - (w as number) / 2} y={(y as number) - (h as number)} width={w} height={h} fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M100 218 L310 218 L310 226 L100 226 Z" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      {[130, 170, 210, 250, 285].map((x) => (
        <circle key={x} cx={x} cy="215" r="3" fill="#F4C430" />
      ))}
      <path d="M100 218 Q205 200 310 218" fill="none" stroke="#B0B8BF" strokeWidth="4" />
    </g>
  );
};

const HallyuKpop: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4C430", "#00E5FF", "#8E24AA"];
  return (
    <g>
      <ellipse cx="205" cy="230" rx="12" ry="16" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="246" x2="205" y2="120" stroke="#5C5C5C" strokeWidth="4" />
      <path d="M195 120 Q205 105 215 120" fill="none" stroke="#5C5C5C" strokeWidth="4" />
      {[[130, 100], [170, 90], [240, 90], [280, 100]].map(([x, y], i) => (
        <path key={x as number} d={`M${x} ${y} L${(x as number) - 20} ${(y as number) + 140} L${(x as number) + 20} ${(y as number) + 140} Z`} fill={colors[i % colors.length]} opacity="0.35" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={130 + i * 40} cy={230} r="6" fill={colors[i % colors.length]} opacity="0.85" />
      ))}
    </g>
  );
};

const KimjangKimchi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const clay = "#B5651D";
  const green = "#4A8F4E";
  return (
    <g>
      {[[145, 220, 40], [220, 225, 46], [280, 218, 34]].map(([x, y, w], i) => (
        <path key={x as number} d={`M${(x as number) - (w as number) / 2} ${y} Q${(x as number) - (w as number) / 2 - 6} ${(y as number) - 30} ${x} ${(y as number) - 38} Q${(x as number) + (w as number) / 2 + 6} ${(y as number) - 30} ${(x as number) + (w as number) / 2} ${y} Q${(x as number) + (w as number) / 2 - 4} ${(y as number) + 14} ${x} ${(y as number) + 16} Q${(x as number) - (w as number) / 2 + 4} ${(y as number) + 14} ${(x as number) - (w as number) / 2} ${y} Z`} fill={clay} stroke={shade(clay, 0.3)} strokeWidth="2.5" opacity={1 - i * 0.06} />
      ))}
      <path d="M170 165 Q160 190 175 205 Q195 215 205 195 Q215 175 200 160 Q195 150 185 155 Q175 155 170 165 Z" fill={green} stroke={shade(green, 0.3)} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${175 + i * 4} 165 Q${180 + i * 4} 178 ${175 + i * 4} 195`} stroke={shade(green, 0.35)} strokeWidth="1.5" fill="none" opacity="0.5" />
      ))}
      <ellipse cx="255" cy="175" rx="22" ry="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M235 175 Q255 168 275 175" fill="none" stroke={shade(accentColor, 0.2)} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const Jjimjilbang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      {[[150, 225], [255, 225]].map(([x, y], i) => (
        <g key={x as number}>
          <ellipse cx={x} cy={(y as number) - 30} rx="16" ry="18" fill={skin} />
          {/* sheep-ear towel */}
          <path d={`M${(x as number) - 16} ${(y as number) - 44} Q${(x as number) - 26} ${(y as number) - 58} ${(x as number) - 14} ${(y as number) - 60} Q${(x as number) - 8} ${(y as number) - 52} ${(x as number) - 10} ${(y as number) - 42} Z`} fill="#fff" stroke={dark} strokeWidth="1.5" />
          <path d={`M${(x as number) + 16} ${(y as number) - 44} Q${(x as number) + 26} ${(y as number) - 58} ${(x as number) + 14} ${(y as number) - 60} Q${(x as number) + 8} ${(y as number) - 52} ${(x as number) + 10} ${(y as number) - 42} Z`} fill="#fff" stroke={dark} strokeWidth="1.5" />
          <path d={`M${(x as number) - 18} ${(y as number) - 34} Q${x} ${(y as number) - 42} ${(x as number) + 18} ${(y as number) - 34} L${(x as number) + 14} ${y} L${(x as number) - 14} ${y} Z`} fill={i === 0 ? accentColor : tint(accentColor, 0.35)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <path d="M100 235 Q205 245 320 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" />
      <path d="M180 190 Q185 175 195 168 M225 190 Q220 175 210 168" fill="none" stroke="#E8E4DC" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const HaenyeoJeju: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const skin = "#D9A46A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.55" />
      <path d="M90 220 Q205 210 320 220 L320 250 L90 250 Z" fill={water} opacity="0.4" />
      <circle cx="200" cy="170" r="14" fill={skin} />
      <path d="M188 155 Q200 148 212 155 Q210 165 200 165 Q190 165 188 155 Z" fill={accentColor} />
      <path d="M186 182 Q200 175 214 182 L210 220 L190 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M214 195 Q230 200 235 185" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <ellipse cx="270" cy="215" rx="26" ry="14" fill="none" stroke="#F4A300" strokeWidth="4" />
      {[[250, 210], [265, 218], [280, 208], [285, 220]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="6" ry="4" fill="#8B5A2B" opacity="0.8" />
      ))}
    </g>
  );
};

const DmzSantuario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[130, 160, 190, 220, 250, 280].map((x) => (
        <line key={x} x1={x} y1="240" x2={x} y2="150" stroke={dark} strokeWidth="3" />
      ))}
      <line x1="115" y1="170" x2="300" y2="170" stroke={dark} strokeWidth="3" />
      <line x1="115" y1="200" x2="300" y2="200" stroke={dark} strokeWidth="3" />
      {[130, 160, 190, 220, 250, 280].map((x) => (
        <g key={`b${x}`}>
          <line x1={x - 8} y1="170" x2={x + 8} y2="164" stroke={dark} strokeWidth="2" />
          <line x1={x - 8} y1="200" x2={x + 8} y2="194" stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <rect x="245" y="115" width="45" height="28" fill="#8B8378" stroke={dark} strokeWidth="2" />
      <path d="M255 145 L250 240 M280 145 L288 240" stroke={dark} strokeWidth="4" />
      {/* red-crowned crane perched on the wire */}
      <path d="M150 168 Q145 150 158 145 Q168 142 172 152 Q178 148 182 155 Q180 165 168 168 Q158 172 150 168 Z" fill="#fff" stroke={dark} strokeWidth="2" />
      <line x1="172" y1="150" x2="182" y2="140" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="176" cy="146" r="3" fill={accentColor} />
      <line x1="158" y1="168" x2="155" y2="180" stroke="#1A1A1A" strokeWidth="2.5" />
      <line x1="168" y1="168" x2="172" y2="180" stroke="#1A1A1A" strokeWidth="2.5" />
    </g>
  );
};

const AlphagoBaduk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const wood = "#C68642";
  return (
    <g>
      <rect x="120" y="120" width="170" height="130" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={`v${i}`} x1={140 + i * 26} y1="135" x2={140 + i * 26} y2="235" stroke={dark} strokeWidth="1.2" opacity="0.6" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={`h${i}`} x1="140" y1={140 + i * 24} x2="270" y2={140 + i * 24} stroke={dark} strokeWidth="1.2" opacity="0.6" />
      ))}
      {[[166, 140], [192, 164], [140, 188], [218, 188], [166, 212], [244, 140]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="9" fill={i % 2 === 0 ? "#1A1A1A" : "#F5F0E6"} stroke={dark} strokeWidth="1" />
      ))}
      {[[192, 140], [218, 164], [166, 164], [140, 212]].map(([x, y], i) => (
        <circle key={`w${x}`} cx={x} cy={y} r="9" fill={i % 2 === 0 ? "#F5F0E6" : "#1A1A1A"} stroke={dark} strokeWidth="1" />
      ))}
    </g>
  );
};

const Taekwondo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <circle cx="185" cy="140" r="14" fill={skin} />
      <path d="M172 152 Q185 145 198 152 L192 195 L178 195 Z" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <path d="M175 190 Q170 200 180 205" stroke={accentColor} strokeWidth="6" fill="none" />
      <path d="M192 165 Q225 160 250 145" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M178 195 Q170 210 168 230" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M192 195 Q235 190 275 175" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M270 170 L280 165 L278 178 Z" fill={skin} />
      <path d="M162 225 L155 245 M175 232 L172 250" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const EdadCoreana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="140" y="120" width="130" height="115" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="140" y="120" width="130" height="28" fill={accentColor} />
      <line x1="160" y1="112" x2="160" y2="128" stroke={dark} strokeWidth="3" />
      <line x1="250" y1="112" x2="250" y2="128" stroke={dark} strokeWidth="3" />
      <text x="205" y="205" fontSize="46" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">1</text>
      <line x1="178" y1="165" x2="232" y2="215" stroke="#C1272D" strokeWidth="5" strokeLinecap="round" />
      <rect x="285" y="205" width="10" height="35" fill="#F4C430" />
      <path d="M285 205 Q290 190 295 205" fill="none" stroke="#F4A300" strokeWidth="3" />
      <ellipse cx="290" cy="245" rx="26" ry="8" fill={light} stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const southKoreaIllustrations: Record<string, IllustrationDefinition> = {
  hangul: { component: Hangul },
  "milagro-rio-han": { component: MilagroRioHan },
  "hallyu-kpop": { component: HallyuKpop },
  "kimjang-kimchi": { component: KimjangKimchi },
  jjimjilbang: { component: Jjimjilbang },
  "haenyeo-jeju": { component: HaenyeoJeju },
  "dmz-santuario": { component: DmzSantuario },
  "alphago-baduk": { component: AlphagoBaduk },
  taekwondo: { component: Taekwondo },
  "edad-coreana": { component: EdadCoreana },
};
