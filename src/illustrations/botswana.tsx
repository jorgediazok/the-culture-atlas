import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DeltaOkavango: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const skin = "#6B4B3A";
  return (
    <g>
      <path d="M90 210 Q150 195 205 215 Q260 235 320 210 L320 250 L90 250 Z" fill={water} />
      {[130, 150, 170, 250, 270, 290].map((x) => (
        <path key={x} d={`M${x} 210 Q${x - 3} 190 ${x} 170`} fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M175 225 Q170 205 185 195 Q205 185 220 195 Q235 200 232 215 L228 232 L215 232 L212 220 L192 220 L188 232 L178 232 Z" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M175 200 Q160 205 152 190 Q165 188 175 198 Z" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M155 192 L142 188 L148 200 Z" fill={dark} />
      <path d="M232 210 Q250 205 260 190" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const DiamantesBotswana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const sand = "#D9BE8F";
  return (
    <g>
      <path d="M95 245 Q205 225 320 245 L320 250 L95 250 Z" fill={sand} />
      <polygon points="205,120 245,165 205,235 165,165" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="205,120 165,165 245,165" fill="#fff" opacity="0.6" />
      <polygon points="180,165 230,165 205,235" fill={accentColor} opacity="0.5" />
      <line x1="165" y1="165" x2="245" y2="165" stroke={dark} strokeWidth="1.5" />
      <line x1="205" y1="120" x2="205" y2="235" stroke={dark} strokeWidth="1" opacity="0.4" />
    </g>
  );
};

const SanKalahari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M95 240 Q160 220 205 235 Q260 250 320 230 L320 250 L95 250 Z" fill={accentColor} opacity="0.5" />
      <circle cx="200" cy="150" r="12" fill={skin} />
      <path d="M188 165 Q195 160 205 165 L200 220 L185 235 M205 165 L215 220 L228 235" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M175 170 Q160 165 155 145 Q162 143 175 155" fill="none" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <path d="M215 175 Q245 145 245 110" fill="none" stroke="#5C3A1E" strokeWidth="4" strokeLinecap="round" />
      <line x1="245" y1="110" x2="220" y2="180" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElefantesBotswana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[120, 220, 1], [175, 215, 0.85], [235, 218, 0.75], [285, 222, 0.6]].map(([x, y, scale], i) => (
        <g key={x as number} transform={`translate(${x} ${y}) scale(${scale})`}>
          <path d="M0 0 Q-8 -40 20 -45 Q55 -48 62 -20 Q68 -5 60 5 L55 15 L45 15 L42 3 L10 3 L6 15 L-4 15 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" opacity={1 - i * 0.06} />
          <path d="M-4 -25 Q-20 -18 -22 5 Q-23 15 -14 17 Q-6 15 -3 3" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" opacity={1 - i * 0.06} />
          <path d="M-6 -30 L-18 -35 L-12 -20 Z" fill={dark} opacity={0.7 - i * 0.06} />
        </g>
      ))}
      <path d="M90 240 Q205 228 320 240" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const Kgotla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M205 100 Q170 95 155 125 Q195 118 205 100 Q215 118 255 125 Q240 95 205 100 Z" fill="#4A8F4E" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="100" x2="205" y2="145" stroke="#6B4423" strokeWidth="6" />
      {[[160, 210], [190, 220], [220, 220], [250, 210], [205, 228]].map(([x, y]) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 14} r="8" fill={skin} />
          <path d={`M${(x as number) - 9} ${y} Q${x} ${(y as number) - 10} ${(x as number) + 9} ${y} L${(x as number) + 7} ${(y as number) + 16} L${(x as number) - 7} ${(y as number) + 16} Z`} fill={accentColor} />
        </g>
      ))}
    </g>
  );
};

const ChobeSafari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const mane = "#8B5A2B";
  return (
    <g>
      <path d="M90 235 Q205 245 320 235 L320 250 L90 250 Z" fill={water} />
      <rect x="140" y="200" width="120" height="30" rx="8" fill="#8B8378" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="220" cy="195" rx="26" ry="22" fill={mane} />
      <ellipse cx="220" cy="197" rx="16" ry="14" fill={accentColor} />
      <ellipse cx="180" cy="200" rx="28" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={155 + i * 8} y1="212" x2={148 + i * 8} y2="225" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      ))}
      <circle cx="228" cy="192" r="2.5" fill="#1A1A1A" />
    </g>
  );
};

const SeretseKhama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  const gold = "#D4AF37";
  return (
    <g>
      <path d="M170 235 L170 190 Q170 175 205 175 Q240 175 240 190 L240 235 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <path d="M195 178 L215 178 L212 200 L198 200 Z" fill="#fff" />
      <circle cx="205" cy="150" r="20" fill={skin} />
      <path d="M188 145 Q205 130 222 145 L220 138 Q205 128 190 138 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${196 + i * 9} 132 L${196 + i * 9} 122`} stroke={gold} strokeWidth="3" />
      ))}
    </g>
  );
};

const BasarwaArte: IllustrationComponent = ({ accentColor }) => {
  const rock = "#B5651D";
  return (
    <g>
      <rect x="100" y="110" width="220" height="130" fill={rock} stroke={shade(rock, 0.3)} strokeWidth="3" />
      {/* running figures */}
      {[[150, 200], [190, 190], [230, 205]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 22} r="6" fill={accentColor} />
          <path d={`M${x} ${(y as number) - 16} L${x} ${y} M${x} ${(y as number) - 10} L${(x as number) - 12} ${(y as number) - 18} M${x} ${(y as number) - 10} L${(x as number) + 14} ${(y as number) - 4} M${x} ${y} L${(x as number) - 10} ${(y as number) + 16} M${x} ${y} L${(x as number) + 10} ${(y as number) + 14}`} stroke={accentColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity={1 - i * 0.15} />
        </g>
      ))}
      {/* antelope */}
      <path d="M275 195 L290 175 M285 200 Q265 195 260 205 Q270 200 280 205" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const Makgadikgadi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const salt = "#F5F0E6";
  return (
    <g>
      <rect x="90" y="150" width="230" height="90" fill={salt} stroke={dark} strokeWidth="2" />
      {[[130, 150, 170, 240], [190, 150, 200, 240], [250, 150, 270, 240], [110, 190, 150, 240]].map(([x1, y1, x2, y2]) => (
        <line key={x1 as number} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
      ))}
      <line x1="90" y1="190" x2="320" y2="190" stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="205" cy="120" rx="60" ry="14" fill={tint(accentColor, 0.6)} opacity="0.4" />
    </g>
  );
};

const GanadoRiqueza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M140 235 L140 190 Q140 180 155 180 L245 180 Q260 180 260 190 L260 235 Z" fill="none" stroke="#8B5A2B" strokeWidth="5" />
      {[160, 190, 220, 245].map((x) => (
        <line key={x} x1={x} y1="180" x2={x} y2="235" stroke="#8B5A2B" strokeWidth="4" />
      ))}
      <path d="M150 220 Q145 195 175 190 Q205 185 225 195 Q245 200 240 218 L235 232 L225 232 L222 220 L165 220 L162 232 L152 232 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      <path d="M148 205 Q120 210 112 195 Q108 188 118 185 Q135 188 150 202 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M118 188 Q100 180 90 190 Q100 198 118 195 Z" fill={dark} />
      <path d="M118 188 Q108 178 95 178 Q102 190 118 192 Z" fill={dark} />
    </g>
  );
};

export const botswanaIllustrations: Record<string, IllustrationDefinition> = {
  "delta-okavango": { component: DeltaOkavango },
  "diamantes-botswana": { component: DiamantesBotswana },
  "san-kalahari": { component: SanKalahari },
  "elefantes-botswana": { component: ElefantesBotswana },
  kgotla: { component: Kgotla },
  "chobe-safari": { component: ChobeSafari },
  "seretse-khama": { component: SeretseKhama },
  "basarwa-arte": { component: BasarwaArte },
  makgadikgadi: { component: Makgadikgadi },
  "ganado-riqueza": { component: GanadoRiqueza },
};
