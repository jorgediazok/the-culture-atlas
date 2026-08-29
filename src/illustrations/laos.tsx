import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LuangPrabang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const sky = "#F4C87A";
  return (
    <g>
      <rect x="95" y="80" width="225" height="90" fill={sky} opacity="0.5" />
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={165 - (i % 2) * 6} r="11" fill={skin} />
          <path d={`M${x - 12} ${178 - (i % 2) * 6} Q${x} ${170 - (i % 2) * 6} ${x + 12} ${178 - (i % 2) * 6} L${x + 9} ${230 - (i % 2) * 6} L${x - 9} ${230 - (i % 2) * 6} Z`} fill={accentColor} />
        </g>
      ))}
      <path d="M95 235 Q210 225 320 235" stroke={dark} strokeWidth="2" opacity="0.4" fill="none" />
    </g>
  );
};

const LlanuraDeLasJarras: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#6B9B4A";
  return (
    <g>
      <rect x="95" y="200" width="225" height="45" fill={green} />
      {[[130, 200, 30, 40], [190, 195, 26, 45], [250, 205, 32, 35], [285, 210, 22, 30]].map(([x, y, w, h], i) => (
        <g key={x}>
          <path d={`M${(x as number) - (w as number) / 2} ${y} Q${x} ${(y as number) - 6} ${(x as number) + (w as number) / 2} ${y} L${(x as number) + (w as number) / 2 - 4} ${(y as number) + (h as number)} Q${x} ${(y as number) + (h as number) + 8} ${(x as number) - (w as number) / 2 + 4} ${(y as number) + (h as number)} Z`} fill={i % 2 === 0 ? accentColor : dark} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const MekongLaos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#3D8FB0";
  return (
    <g>
      <polygon points="95,190 150,120 205,190" fill={dark} opacity="0.5" />
      <polygon points="180,190 250,110 320,190" fill={accentColor} opacity="0.5" />
      <path d="M95 210 Q210 195 320 210 L320 250 L95 250 Z" fill={water} />
      <path d="M150 205 L250 205 L235 220 L165 220 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x="185" y="185" width="30" height="20" fill={dark} opacity="0.7" />
    </g>
  );
};

const QueLao: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <path d="M180 235 L180 155 Q180 145 190 145 L220 145 Q230 145 230 155 L230 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="192" y="115" width="16" height="30" fill={dark} />
      <rect x="188" y="105" width="24" height="12" fill={shade(dark, 0.2)} />
      <rect x="178" y="180" width="54" height="30" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <circle cx="205" cy="195" r="10" fill="#fff" opacity="0.85" />
    </g>
  );
};

const TextilesLaosianos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#D4A017", "#C1272D", "#4A8F4E"];
  return (
    <g>
      <rect x="110" y="95" width="10" height="150" fill={dark} />
      <rect x="300" y="95" width="10" height="150" fill={dark} />
      <rect x="105" y="95" width="220" height="10" fill={dark} />
      <rect x="105" y="235" width="220" height="10" fill={dark} />
      {[0, 1, 2, 3, 4, 5].map((col) => (
        <line key={col} x1={130 + col * 30} y1="105" x2={130 + col * 30} y2="235" stroke={colors[col % colors.length]} strokeWidth="6" />
      ))}
      {[130, 165, 200].map((y) => (
        <line key={y} x1="120" y1={y} x2="300" y2={y} stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
    </g>
  );
};

const ArrozPegajoso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rice = "#F5F0E6";
  return (
    <g>
      <path d="M150 235 L260 235 L245 155 Q205 140 165 155 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[170, 185, 200, 215, 230].map((x) => (
        <line key={x} x1={x} y1="160" x2={x} y2="232" stroke={dark} strokeWidth="1.2" opacity="0.4" />
      ))}
      <ellipse cx="205" cy="160" rx="42" ry="16" fill={rice} stroke={dark} strokeWidth="2" />
      <circle cx="190" cy="158" r="3" fill={dark} opacity="0.3" />
      <circle cx="215" cy="162" r="3" fill={dark} opacity="0.3" />
    </g>
  );
};

const ThatLuang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="155" y="215" width="100" height="25" fill={gold} stroke={dark} strokeWidth="2" />
      <path d="M170 215 L240 215 L225 180 L185 180 Z" fill={gold} stroke={dark} strokeWidth="2" />
      <path d="M185 180 L225 180 L212 145 L198 145 Z" fill={gold} stroke={dark} strokeWidth="2" />
      <path d="M198 145 L212 145 L205 95 Z" fill={gold} stroke={dark} strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${175 - i * 3} ${212 - i * 32} L${235 + i * 3} ${212 - i * 32}`} stroke={shade(gold, 0.3)} strokeWidth="1.5" opacity="0.5" />
      ))}
    </g>
  );
};

const HmongLaos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#D4A017", "#1565C0", "#4A8F4E"];
  return (
    <g>
      <path d="M160 130 L250 130 L260 240 L150 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect key={`${row}-${col}`} x={168 + col * 22} y={155 + row * 25} width="16" height="16" fill={colors[(row + col) % colors.length]} transform={`rotate(45 ${176 + col * 22} ${163 + row * 25})`} />
        ))
      )}
    </g>
  );
};

const LanXang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  return (
    <g>
      <path d="M130 235 Q115 200 140 175 Q165 155 210 160 Q250 163 265 190 Q272 205 260 215 L255 235 L235 235 L232 218 L175 218 L170 235 L150 235 L148 220 Q135 225 130 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M130 190 Q110 195 100 220 Q98 235 112 238 Q125 235 128 218" fill="none" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
      <ellipse cx="130" cy="185" rx="10" ry="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* golden cloth draped over the back */}
      <path d="M155 168 L235 172 L228 195 L162 192 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <path d="M140 168 Q165 158 170 185 Q150 190 140 168 Z" fill={dark} opacity="0.5" />
    </g>
  );
};

const BounBangFai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#D4A017", "#C1272D"];
  return (
    <g>
      {/* bamboo rocket launching */}
      <path d="M195 235 L195 130 Q195 110 205 100 Q215 110 215 130 L215 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[150, 170, 190, 210].map((y) => (
        <line key={y} x1="195" y1={y} x2="215" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {[colors[0], colors[1]].map((c, i) => (
        <path key={c} d={`M${195 + i * 12} 235 L${185 + i * 30} 250 L${205 + i * 8} 245 Z`} fill={c} />
      ))}
      {/* smoke trail */}
      <path d="M205 240 Q195 260 205 270" fill="none" stroke="#B0AFA8" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      {/* motion lines */}
      <path d="M180 100 L172 80 M230 100 L238 80" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const VatPhou: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const stone = "#B8A484";
  const terraces: [number, number, number, number][] = [
    [110, 235, 70, 26],
    [150, 205, 60, 24],
    [185, 178, 50, 20],
    [210, 155, 42, 18],
  ];
  return (
    <g>
      <polygon points="90,240 180,110 240,150 320,240" fill={accentColor} opacity="0.3" />
      {terraces.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill={stone} stroke={dark} strokeWidth="2" opacity={0.95 - i * 0.05} />
      ))}
      <path d="M225 155 L225 120 L245 120 L245 155 Z" fill={stone} stroke={dark} strokeWidth="2.5" />
      <polygon points="220,120 235,100 250,120" fill={dark} opacity="0.6" />
      {[120, 150, 180].map((x) => (
        <rect key={x} x={x} y="215" width="8" height="20" fill={dark} opacity="0.4" />
      ))}
    </g>
  );
};

const PiMaiLao: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const water = "#4FA8E8";
  const splashes: [number, number, number][] = [
    [195, 140, 4],
    [205, 150, 3],
    [215, 135, 4],
    [190, 155, 3],
    [210, 160, 3],
  ];
  return (
    <g>
      <circle cx="150" cy="150" r="15" fill={skin} />
      <path d="M132 158 Q150 150 168 158 L162 235 L138 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M162 178 Q190 165 210 150" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <circle cx="260" cy="155" r="15" fill={skin} />
      <path d="M242 163 Q260 155 278 163 L272 235 L248 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M248 183 Q220 172 200 158" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {splashes.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={water} opacity="0.85" />
      ))}
      <path d="M190 130 Q205 115 220 130" fill="none" stroke={water} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

export const laosIllustrations: Record<string, IllustrationDefinition> = {
  "luang-prabang": { component: LuangPrabang },
  "llanura-de-las-jarras": { component: LlanuraDeLasJarras },
  "mekong-laos": { component: MekongLaos },
  "que-lao": { component: QueLao },
  "textiles-laosianos": { component: TextilesLaosianos },
  "arroz-pegajoso": { component: ArrozPegajoso },
  "that-luang": { component: ThatLuang },
  "hmong-laos": { component: HmongLaos },
  "lan-xang": { component: LanXang },
  "boun-bang-fai": { component: BounBangFai },
  "vat-phou": { component: VatPhou },
  "pi-mai-lao": { component: PiMaiLao },
};
