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
        <circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill={i % 2 === 0 ? "#1A1A1A" : "#F5F0E6"} stroke={dark} strokeWidth="1" />
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

const Hanbok: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const jacket = tint(accentColor, 0.3);
  return (
    <g>
      <circle cx="205" cy="120" r="20" fill={skin} stroke={dark} strokeWidth="2.5" />
      {/* short jacket (jeogori) */}
      <path d="M180 138 Q205 128 230 138 L235 175 L175 175 Z" fill={jacket} stroke={dark} strokeWidth="2.5" />
      <path d="M195 145 L205 158 L215 145" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* wide high-waisted skirt (chima) */}
      <path d="M170 172 Q205 165 240 172 L265 245 L145 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* sleeves */}
      <path d="M180 145 Q150 155 145 185" fill="none" stroke={jacket} strokeWidth="12" strokeLinecap="round" />
      <path d="M230 145 Q260 155 265 185" fill="none" stroke={jacket} strokeWidth="12" strokeLinecap="round" />
      {/* ribbon tie */}
      <path d="M198 158 L192 185 M212 158 L218 185" stroke={accentColor} strokeWidth="4" opacity="0.85" />
    </g>
  );
};

const GogiguiParrillaCoreana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const coal = "#3A3A3A";
  const meat = "#C97C4A";
  return (
    <g>
      {/* round grill */}
      <ellipse cx="205" cy="200" rx="95" ry="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="80" ry="22" fill={dark} opacity="0.5" />
      {/* coals beneath */}
      {[160, 205, 250].map((x) => (
        <ellipse key={x} cx={x} cy="210" rx="14" ry="6" fill={coal} opacity="0.6" />
      ))}
      {/* meat pieces on the grill */}
      {[
        [170, 190],
        [205, 182],
        [240, 192],
        [190, 205],
      ].map(([x, y], i) => (
        <rect key={i} x={x - 14} y={y - 8} width="28" height="16" rx="4" fill={meat} stroke={dark} strokeWidth="1.5" transform={`rotate(${((i * 23) % 30) - 15} ${x} ${y})`} />
      ))}
      {/* tongs */}
      <path d="M300 150 L270 190 M310 155 L280 195" stroke="#8B8378" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Suneung: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const paper = "#F5F0E6";
  return (
    <g>
      {/* exam sheet */}
      <rect x="130" y="120" width="150" height="115" fill={paper} stroke={dark} strokeWidth="2.5" />
      {[135, 150, 165, 180, 195].map((y) => (
        <line key={y} x1="145" y1={y + 10} x2="265" y2={y + 10} stroke={dark} strokeWidth="1.5" opacity="0.3" />
      ))}
      {/* filled bubble answers */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx="255" cy={140 + i * 15} r="4" fill={accentColor} opacity="0.8" />
      ))}
      {/* pencil resting diagonally */}
      <path d="M195 250 L280 165 L292 177 L207 262 Z" fill="#F4A300" stroke={dark} strokeWidth="2" />
      <path d="M280 165 L292 177 L296 160 Z" fill="#B0B0B0" />
      {/* clock */}
      <circle cx="300" cy="115" r="22" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <line x1="300" y1="115" x2="300" y2="100" stroke={dark} strokeWidth="2" />
      <line x1="300" y1="115" x2="310" y2="120" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Chimaek: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bucket = "#C1272D";
  const foam = "#F5F0E6";
  return (
    <g>
      {/* bucket of fried chicken */}
      <path d="M100 180 L270 180 L258 240 L112 240 Z" fill={bucket} stroke={dark} strokeWidth="3" />
      {[
        [130, 180],
        [165, 172],
        [200, 176],
        [235, 182],
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="22" ry="16" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      {/* beer glass */}
      <path d="M285 160 L292 240 L322 240 L329 160 Z" fill="#F4C430" opacity="0.6" stroke={dark} strokeWidth="2.5" />
      <path d="M282 150 Q307 138 332 150 Q328 162 307 158 Q286 162 282 150 Z" fill={foam} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Templestay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const gold = "#D4A017";
  return (
    <g>
      {/* temple in background */}
      <polygon points="140,150 205,110 270,150" fill={dark} opacity="0.4" />
      <rect x="155" y="150" width="100" height="45" fill={tint(accentColor, 0.3)} opacity="0.5" stroke={dark} strokeWidth="1.5" />
      {/* seated meditating figure */}
      <circle cx="205" cy="185" r="16" fill={skin} />
      <path d="M186 198 Q205 190 224 198 L228 225 L182 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M182 220 Q160 228 165 245 Q205 235 245 245 Q250 228 228 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* small offering candle */}
      <rect x="270" y="220" width="6" height="18" fill={gold} />
      <path d="M273 220 Q270 212 273 205" fill="none" stroke="#F4A300" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
};

const Gyeongbokgung: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const skin = "#D9A46A";
  return (
    <g>
      {/* palace gate behind */}
      <rect x="90" y="130" width="230" height="90" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <polygon points="80,130 205,95 330,130" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      {/* guard figure */}
      <circle cx="205" cy="175" r="16" fill={skin} />
      <path d="M186 188 Q205 180 224 188 L230 240 L180 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* pointed guard hat */}
      <path d="M190 165 Q205 148 220 165 Z" fill={dark} />
      {/* spear */}
      <line x1="255" y1="235" x2="255" y2="150" stroke="#8B5A2B" strokeWidth="5" strokeLinecap="round" />
      <polygon points="248,150 255,130 262,150" fill="#B0B8BF" stroke={dark} strokeWidth="1.5" />
      <path d="M224 195 Q245 200 255 190" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const Webtoons: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const screen = "#1A1A1A";
  return (
    <g>
      {/* phone */}
      <rect x="150" y="90" width="110" height="190" rx="14" fill={screen} stroke={dark} strokeWidth="3" />
      <rect x="160" y="105" width="90" height="160" fill="#F5F0E6" />
      {/* comic panels scrolling vertically */}
      <rect x="165" y="112" width="80" height="45" fill={accentColor} opacity="0.7" />
      <rect x="165" y="162" width="80" height="45" fill={tint(accentColor, 0.3)} opacity="0.8" />
      <rect x="165" y="212" width="80" height="45" fill={accentColor} opacity="0.5" />
      {/* hand holding the phone */}
      <path d="M130 250 Q150 220 170 250 L175 290 L135 290 Z" fill={skin} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Jesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#6B4A2F";
  const white = "#F5F0E6";
  return (
    <g>
      {/* low table */}
      <rect x="110" y="200" width="190" height="12" fill={wood} stroke={dark} strokeWidth="2" />
      <line x1="125" y1="212" x2="120" y2="240" stroke={wood} strokeWidth="6" strokeLinecap="round" />
      <line x1="285" y1="212" x2="290" y2="240" stroke={wood} strokeWidth="6" strokeLinecap="round" />
      {/* dishes arranged in rows */}
      {[130, 165, 200, 235, 270].map((x, i) => (
        <ellipse key={x} cx={x} cy={195 - (i % 2) * 8} rx="14" ry="8" fill={i % 2 === 0 ? accentColor : white} stroke={dark} strokeWidth="1.5" />
      ))}
      {[150, 205, 260].map((x) => (
        <ellipse key={x} cx={x} cy="178" rx="12" ry="7" fill={white} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* candles */}
      <rect x="140" y="150" width="6" height="24" fill={dark} />
      <path d="M143 150 Q140 142 143 135" stroke="#F4A300" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="260" y="150" width="6" height="24" fill={dark} />
      <path d="M263 150 Q260 142 263 135" stroke="#F4A300" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  );
};

const EsportsStarcraft: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const screen = "#1A1A2E";
  return (
    <g>
      {/* monitor screen glow behind */}
      <rect x="150" y="90" width="180" height="110" rx="6" fill={screen} stroke={dark} strokeWidth="2.5" />
      <rect x="160" y="100" width="160" height="90" fill={accentColor} opacity="0.25" />
      {/* stage lights */}
      {[
        [100, 80],
        [330, 80],
      ].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} L${x - 14} ${y + 40} L${x + 14} ${y + 40} Z`} fill={accentColor} opacity="0.3" />
      ))}
      {/* player */}
      <circle cx="205" cy="215" r="18" fill={skin} />
      <path d="M182 230 Q205 220 228 230 L232 250 L178 250 Z" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="2.5" />
      {/* headset */}
      <path d="M186 210 Q205 192 224 210" fill="none" stroke="#1A1A1A" strokeWidth="5" />
      <circle cx="186" cy="212" r="6" fill="#1A1A1A" />
      <circle cx="224" cy="212" r="6" fill="#1A1A1A" />
    </g>
  );
};

const FanaticosDeBeisbol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const pompom1 = "#F4A300";
  return (
    <g>
      {/* stadium tier */}
      <path d="M85 240 Q205 220 320 240 L320 250 L85 250 Z" fill={dark} opacity="0.3" />
      {/* fans waving pompoms */}
      {[130, 190, 250, 300].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="200" r="12" fill={skin} />
          <rect x={x - 10} y="210" width="20" height="28" fill={i % 2 === 0 ? accentColor : pompom1} stroke={dark} strokeWidth="1.5" />
          <circle cx={x - 18} cy="185" r="10" fill={pompom1} opacity="0.85" />
          <circle cx={x + 18} cy="185" r="10" fill={accentColor} opacity="0.85" />
          <line x1={x - 10} y1="215" x2={x - 18} y2="188" stroke={skin} strokeWidth="6" strokeLinecap="round" />
          <line x1={x + 10} y1="215" x2={x + 18} y2="188" stroke={skin} strokeWidth="6" strokeLinecap="round" />
        </g>
      ))}
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
  hanbok: { component: Hanbok },
  "gogigui-parrilla-coreana": { component: GogiguiParrillaCoreana },
  suneung: { component: Suneung },
  chimaek: { component: Chimaek },
  templestay: { component: Templestay },
  gyeongbokgung: { component: Gyeongbokgung },
  webtoons: { component: Webtoons },
  jesa: { component: Jesa },
  "esports-starcraft": { component: EsportsStarcraft },
  "fanaticos-de-beisbol": { component: FanaticosDeBeisbol },
};
