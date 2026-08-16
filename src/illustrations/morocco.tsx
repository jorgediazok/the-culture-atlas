import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MedinaFez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const ochre = "#C68642";
  return (
    <g>
      {[[110, 235, 40, 65], [150, 240, 34, 55], [185, 232, 42, 70], [230, 238, 36, 58], [270, 233, 40, 68]].map(([x, y, w, h], i) => (
        <rect key={x as number} x={(x as number) - (w as number) / 2} y={(y as number) - (h as number)} width={w} height={h} fill={i % 2 === 0 ? ochre : tint(ochre, 0.25)} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M170 240 L170 200 L200 200 L200 240 Z" fill={dark} opacity="0.6" />
      {[[110, 165], [230, 160]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="4" fill={accentColor} />
      ))}
    </g>
  );
};

const Chefchaouen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const blue = "#1D6FA5";
  return (
    <g>
      <rect x="110" y="140" width="90" height="100" fill={tint(blue, 0.3)} stroke={dark} strokeWidth="2.5" />
      <rect x="210" y="150" width="90" height="90" fill={blue} stroke={dark} strokeWidth="2.5" />
      <path d="M175 200 L175 240 L225 240 L225 200 Z" fill={tint(blue, 0.6)} stroke={dark} strokeWidth="2.5" />
      {[150, 175, 200, 225, 250].map((x) => (
        <line key={x} x1={x} y1="240" x2={x} y2="245" stroke={dark} strokeWidth="1" opacity="0.3" />
      ))}
      <rect x="120" y="165" width="18" height="20" fill={accentColor} opacity="0.5" />
      <rect x="255" y="175" width="18" height="20" fill={tint(blue, 0.5)} opacity="0.7" />
    </g>
  );
};

const TeMenta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const silver = "#C9D3DB";
  return (
    <g>
      <path d="M150 145 Q135 148 138 165 L145 158 Q140 160 175 158 Q195 158 195 175 Q195 195 175 195 L165 195 L160 210 Q195 215 200 185 Q205 160 175 148 L150 145 Z" fill={silver} stroke={shade(silver, 0.3)} strokeWidth="2.5" />
      <path d="M195 175 Q225 195 225 235" fill="none" stroke="#F5EFE0" strokeWidth="4" opacity="0.7" />
      <path d="M215 225 Q220 230 225 235 Q230 230 235 225 L230 250 L220 250 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const SaharaErgChebbi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M90 245 Q140 195 190 235 Q230 200 270 230 Q300 210 320 235 L320 250 L90 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M90 235 Q140 190 190 225" fill="none" stroke={light} strokeWidth="3" opacity="0.6" />
      <path d="M225 220 Q220 210 228 205 Q235 208 233 218 Q245 213 250 220 Q248 228 238 227 L212 227 Q208 220 214 216 Q218 214 225 220 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <line x1="230" y1="205" x2="228" y2="185" stroke={dark} strokeWidth="2" />
      <path d="M220 190 L228 185 L236 192 Z" fill={dark} />
    </g>
  );
};

const AlfombrasBereberes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5EFE0";
  return (
    <g>
      <rect x="115" y="115" width="180" height="130" fill={cream} stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <polygon key={`${row}-${col}`} points={`${150 + col * 40},${140 + row * 38} ${165 + col * 40},${155 + row * 38} ${150 + col * 40},${170 + row * 38} ${135 + col * 40},${155 + row * 38}`} fill={accentColor} opacity="0.8" />
        ))
      )}
    </g>
  );
};

const Gnawa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="180" cy="145" r="14" fill={skin} />
      <path d="M168 160 Q180 155 192 160 L188 235 L172 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M192 165 Q220 175 235 155" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M168 175 Q150 185 145 210" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M235 155 Q255 165 255 195 Q255 220 235 225 Q220 228 218 210 L222 190 Q225 165 235 155 Z" fill="#D9BE8F" stroke={shade("#D9BE8F", 0.3)} strokeWidth="2.5" />
      <line x1="235" y1="155" x2="235" y2="220" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const Tayin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      <ellipse cx="205" cy="220" rx="70" ry="18" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 205 Q150 150 205 130 Q260 150 260 205 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="130" r="6" fill={dark} />
      {[[120, 240], [150, 245], [260, 245], [290, 240]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${x} ${(y as number) - 12} ${(x as number) + 6} ${(y as number) - 18}`} fill="none" stroke={flame} strokeWidth="3" strokeLinecap="round" />
      ))}
    </g>
  );
};

const AtlasBereber: IllustrationComponent = ({ accentColor }) => {
  const clay = "#C68642";
  return (
    <g>
      <polygon points="90,240 205,120 320,240" fill={accentColor} opacity="0.35" />
      {[[130, 220, 26, 30], [165, 205, 32, 45], [205, 215, 28, 35], [245, 200, 30, 50], [280, 218, 24, 32]].map(([x, y, w, h], i) => (
        <rect key={x as number} x={(x as number) - (w as number) / 2} y={y} width={w} height={h} fill={i % 2 === 0 ? clay : tint(clay, 0.2)} stroke={shade(clay, 0.3)} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const HassanIiMezquita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 235 Q205 245 320 235 L320 250 L90 250 Z" fill={water} />
      <rect x="190" y="130" width="30" height="105" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M190 130 L220 130 L205 108 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[150, 155].map((x) => (
        <path key={x} d={`M${x} 235 Q${x - 4} 225 ${x} 218 Q${x + 4} 225 ${x} 235 Z`} fill={water} opacity="0.6" />
      ))}
      <path d="M255 225 Q250 215 258 208 Q265 215 260 225 Z" fill={water} opacity="0.6" />
    </g>
  );
};

const ArganAceite: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#F5F0E6";
  return (
    <g>
      <path d="M205 240 L205 175 Q180 165 175 145 M205 200 Q225 190 235 165 M205 190 Q185 180 168 190" fill="none" stroke="#6B4423" strokeWidth="7" strokeLinecap="round" />
      <path d="M150 165 Q160 130 205 125 Q250 130 260 165 Q235 150 205 150 Q175 150 150 165 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[178, 150, -10], [232, 165, 15]].map(([x, y, deg]) => (
        <g key={x as number} transform={`rotate(${deg} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx="10" ry="14" fill={skin} stroke={dark} strokeWidth="1.5" />
          <path d={`M${(x as number) - 4} ${(y as number) + 12} L${(x as number) - 4} ${(y as number) + 22}`} stroke={dark} strokeWidth="3" />
          <path d={`M${(x as number) + 4} ${(y as number) + 12} L${(x as number) + 4} ${(y as number) + 20}`} stroke={dark} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

export const moroccoIllustrations: Record<string, IllustrationDefinition> = {
  "medina-fez": { component: MedinaFez },
  chefchaouen: { component: Chefchaouen },
  "te-menta": { component: TeMenta },
  "sahara-erg-chebbi": { component: SaharaErgChebbi },
  "alfombras-bereberes": { component: AlfombrasBereberes },
  gnawa: { component: Gnawa },
  tayin: { component: Tayin },
  "atlas-bereber": { component: AtlasBereber },
  "hassan-ii-mezquita": { component: HassanIiMezquita },
  "argan-aceite": { component: ArganAceite },
};
