import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Mandela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  const water = "#3D8FB0";
  return (
    <g>
      <polygon points="250,240 260,150 300,145 310,240" fill={dark} opacity="0.45" />
      <path d="M90 235 Q205 245 320 235 L320 250 L90 250 Z" fill={water} />
      <rect x="188" y="185" width="16" height="60" fill={skin} />
      <path d="M175 195 Q196 170 205 175 Q214 170 235 195 Q225 200 205 190 Q185 200 175 195 Z" fill={skin} />
      <path d="M196 175 L192 150 Q192 143 199 143 L201 143 Q208 143 208 150 L204 175 Z" fill={skin} />
      {[0, 1].map((i) => (
        <path key={i} d={`M195 ${143 + i * 3} Q193 ${135 - i * 3} 197 ${128 - i * 3} M205 ${143 + i * 3} Q207 ${135 - i * 3} 203 ${128 - i * 3}`} stroke={skin} strokeWidth="5" fill="none" />
      ))}
    </g>
  );
};

const RugbySpringboks: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#FFB612";
  const skin = "#6B4B3A";
  return (
    <g>
      <circle cx="205" cy="150" r="14" fill={skin} />
      <path d="M190 165 Q205 158 220 165 L215 225 L195 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M215 172 Q235 165 245 145" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M190 172 Q170 165 165 148" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
      <ellipse cx="205" cy="115" rx="18" ry="26" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" transform="rotate(15 205 115)" />
      <path d="M195 100 L215 130" stroke={shade(gold, 0.3)} strokeWidth="1.5" opacity="0.5" transform="rotate(15 205 115)" />
    </g>
  );
};

const KrugerSafari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mane = "#8B5A2B";
  return (
    <g>
      <path d="M150 205 Q145 185 165 178 Q195 168 235 180 Q260 188 260 205 Q262 218 250 222 L245 235 L235 235 L232 220 L170 220 L165 235 L155 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M150 190 Q130 195 122 175 Q135 170 150 185 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M126 178 L112 173 L118 188 Z" fill={dark} />
      <path d="M260 205 Q280 200 295 185" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="280" cy="215" rx="22" ry="18" fill={mane} />
      <ellipse cx="280" cy="217" rx="13" ry="12" fill="#D9A46A" />
      <circle cx="286" cy="212" r="2.5" fill="#1A1A1A" />
    </g>
  );
};

const TableMountain: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const cloud = "#E8E4DC";
  return (
    <g>
      <path d="M100 240 L130 150 L280 150 L310 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="130" y1="150" x2="280" y2="150" stroke={dark} strokeWidth="3" />
      <path d="M205 150 L205 100" stroke="#B0B8BF" strokeWidth="3" />
      <rect x="200" y="95" width="10" height="8" fill="#B0B8BF" />
      <path d="M90 210 L150 210 Q160 210 165 220 L245 220 Q250 210 260 210 L320 210" fill="none" stroke={cloud} strokeWidth="16" opacity="0.85" />
    </g>
  );
};

const OnceIdiomas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA", "#C1272D"];
  return (
    <g>
      {[[145, 190, 0], [200, 160, 1], [250, 195, 2], [180, 225, 3], [280, 155, 4]].map(([x, y, i], idx) => (
        <path key={idx} d={`M${(x as number) - 30} ${(y as number) - 18} Q${(x as number) - 34} ${y} ${(x as number) - 14} ${y} L${(x as number) - 8} ${y} L${(x as number) - 12} ${(y as number) + 12} L${x} ${y} L${(x as number) + 30} ${y} Q${(x as number) + 34} ${y} ${(x as number) + 34} ${(y as number) - 18} Q${(x as number) + 34} ${(y as number) - 34} ${(x as number) + 30} ${(y as number) - 34} L${(x as number) - 30} ${(y as number) - 34} Q${(x as number) - 34} ${(y as number) - 34} ${(x as number) - 30} ${(y as number) - 18} Z`} fill={colors[i as number]} stroke={dark} strokeWidth="1.5" opacity="0.9" />
      ))}
    </g>
  );
};

const Braai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const smoke = "#B0AFA8";
  return (
    <g>
      <path d="M140 220 L270 220 L255 240 L155 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[150, 165, 180, 195, 210, 225, 240, 255].map((x) => (
        <line key={x} x1={x} y1="220" x2={x - 3} y2="240" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <path d="M160 220 Q170 205 160 195 Q185 200 190 220 M190 220 Q200 205 190 195 Q215 200 220 220 M220 220 Q230 205 220 195 Q245 200 250 220" fill="none" stroke="#8B4513" strokeWidth="9" strokeLinecap="round" />
      <path d="M170 195 Q165 175 175 160 M205 190 Q200 170 210 155" fill="none" stroke={smoke} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <line x1="140" y1="240" x2="140" y2="255" stroke={dark} strokeWidth="4" />
      <line x1="270" y1="240" x2="270" y2="255" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const RainbowNation: IllustrationComponent = () => {
  const colors = ["#007A4D", "#FFB612", "#DE3831", "#002395", "#000000", "#fff"];
  return (
    <g>
      <path d="M120 110 L195 175 L195 240 L215 240 L215 175 L290 110" fill="none" stroke={colors[0]} strokeWidth="10" />
      <path d="M120 130 L185 178 L185 240 L205 240 L205 178 L270 130" fill="none" stroke={colors[1]} strokeWidth="8" />
      <path d="M130 100 L200 172 L200 240 L225 240 L225 172 L300 100" fill="none" stroke={colors[2]} strokeWidth="6" opacity="0.8" />
    </g>
  );
};

const Rooibos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#C1440E";
  return (
    <g>
      <path d="M160 200 Q155 235 195 238 Q235 235 230 200 L226 178 L164 178 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="195" cy="178" rx="32" ry="10" fill={red} opacity="0.7" />
      <path d="M230 190 Q252 193 254 210 Q252 224 235 220" fill="none" stroke="#F5F0E6" strokeWidth="6" strokeLinecap="round" />
      <path d="M255 235 Q245 200 265 175" fill="none" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
      {[[255, 210], [270, 195], [248, 190]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="9" ry="5" fill={red} stroke={shade(red, 0.3)} strokeWidth="1" transform={`rotate(25 ${x} ${y})`} />
      ))}
    </g>
  );
};

const DiamantesKimberley: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="95" ry="25" fill="none" stroke={dark} strokeWidth="5" />
      {[0, 1, 2].map((i) => (
        <ellipse key={i} cx="205" cy="220" rx={80 - i * 20} ry={20 - i * 5} fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <polygon points="205,120 235,155 205,200 175,155" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="205,120 175,155 235,155" fill="#fff" opacity="0.6" />
    </g>
  );
};

const MiriamMakeba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  return (
    <g>
      <circle cx="195" cy="155" r="18" fill={skin} />
      <path d="M180 165 Q195 158 210 165 L204 235 L186 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="255" cy="185" rx="10" ry="14" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <line x1="255" y1="199" x2="255" y2="240" stroke={dark} strokeWidth="3" />
      <line x1="210" y1="180" x2="248" y2="188" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      {[[290, 130], [300, 155], [270, 110]].map(([x, y], i) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 8} ${(y as number) - 4} ${(x as number) + 14} ${y}`} stroke={accentColor} strokeWidth="2.5" fill="none" opacity={0.8 - i * 0.1} />
      ))}
    </g>
  );
};

export const southAfricaIllustrations: Record<string, IllustrationDefinition> = {
  mandela: { component: Mandela },
  "rugby-springboks": { component: RugbySpringboks },
  "kruger-safari": { component: KrugerSafari },
  "table-mountain": { component: TableMountain },
  "once-idiomas": { component: OnceIdiomas },
  braai: { component: Braai },
  "rainbow-nation": { component: RainbowNation },
  rooibos: { component: Rooibos },
  "diamantes-kimberley": { component: DiamantesKimberley },
  "miriam-makeba": { component: MiriamMakeba },
};
