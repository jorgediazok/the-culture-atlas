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

const JemaaElFnaa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stall = tint(accentColor, 0.35);
  const smoke = tint(accentColor, 0.55);
  const skin = "#B07C4A";
  return (
    <g>
      <path d="M90 240 Q205 232 320 240 L320 250 L90 250 Z" fill={dark} opacity="0.4" />
      {[110, 250].map((x) => (
        <g key={x}>
          <rect x={x} y="150" width="60" height="14" fill={dark} />
          <rect x={x + 4} y="164" width="52" height="70" fill={stall} stroke={dark} strokeWidth="2.5" />
          <line x1={x} y1="150" x2={x - 6} y2="130" stroke={dark} strokeWidth="3" />
          <line x1={x + 60} y1="150" x2={x + 66} y2="130" stroke={dark} strokeWidth="3" />
          {[-6, 6, 18].map((d) => (
            <path key={d} d={`M${x + 28 + d} 150 q${d} -14 0 -28`} fill="none" stroke={smoke} strokeWidth="4" opacity="0.55" />
          ))}
        </g>
      ))}
      {/* circle of listeners around a seated musician */}
      <ellipse cx="205" cy="210" rx="55" ry="20" fill="none" stroke={dark} strokeWidth="2" opacity="0.3" />
      <ellipse cx="205" cy="205" rx="12" ry="13" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M197 218 q8 8 16 0 l4 18 -24 0 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[[160, 208], [250, 208], [180, 226], [230, 226]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="1.5" />
          <path d={`M${x - 7} ${y + 8} q7 5 14 0 l2 12 -18 0 Z`} fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const Cuscus: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const pot = shade(accentColor, 0.1);
  const semol = "#E8C87A";
  const steam = tint(accentColor, 0.55);
  return (
    <g>
      {/* lower pot */}
      <path d="M130 235 Q120 175 205 175 Q290 175 280 235 Z" fill={pot} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="82" ry="16" fill={shade(pot, 0.15)} stroke={dark} strokeWidth="2.5" />
      {/* upper steamer */}
      <path d="M145 172 Q140 130 205 130 Q270 130 265 172 Z" fill={shade(pot, 0.05)} stroke={dark} strokeWidth="3" />
      {[160, 185, 210, 235].map((x) => (
        <circle key={x} cx={x} cy="168" r="2.5" fill={dark} opacity="0.5" />
      ))}
      {/* mound of couscous */}
      <path d="M155 130 Q205 92 255 130 Z" fill={semol} stroke={shade(semol, 0.3)} strokeWidth="2.5" />
      {[[190, 118], [215, 122], [205, 108]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill={shade(semol, 0.25)} />
      ))}
      {[-14, 0, 14].map((d) => (
        <path key={d} d={`M${205 + d} 92 q${d} -16 0 -32`} fill="none" stroke={steam} strokeWidth="4" opacity="0.6" />
      ))}
    </g>
  );
};

const CurtiembresFez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dyes = ["#C0392B", "#E0A82E", "#4A8F4E", "#2E6E9E", "#8A5A2B", "#D06A2E"];
  const rim = shade(accentColor, 0.2);
  const centers = [
    [140, 130], [200, 120], [262, 132],
    [130, 190], [195, 185], [260, 192],
    [165, 235], [230, 235],
  ];
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill={rim} />
      {centers.map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="28" ry="20" fill={dark} />
          <ellipse cx={x} cy={y - 2} rx="24" ry="16" fill={dyes[i % dyes.length]} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {/* tanner standing in one vat */}
      <ellipse cx="195" cy="183" rx="7" ry="8" fill="#B07C4A" />
      <path d="M190 190 h10 v14 h-10 Z" fill="#6B4A2E" />
    </g>
  );
};

const Zellige: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const c1 = accentColor;
  const c2 = "#2E6E9E";
  const c3 = "#E0A82E";
  const c4 = tint(accentColor, 0.5);
  const stars = [
    [150, 130, c1], [205, 120, c3], [260, 130, c2],
    [150, 190, c2], [205, 180, c1], [260, 190, c3],
    [175, 235, c3], [235, 235, c2],
  ];
  return (
    <g>
      <rect x="100" y="90" width="210" height="160" fill={c4} stroke={dark} strokeWidth="3" />
      {stars.map(([x, y, c], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <polygon points="0,-22 6,-6 22,0 6,6 0,22 -6,6 -22,0 -6,-6" fill={c as string} stroke={dark} strokeWidth="1.5" />
          <polygon points="0,-14 4,-4 14,0 4,4 0,14 -4,4 -14,0 -4,-4" fill={tint(c as string, 0.4)} />
        </g>
      ))}
      {stars.map(([x, y], i) => (
        <g key={`b${i}`}>
          <line x1={x} y1={y} x2={(x as number) + 28} y2={y} stroke={dark} strokeWidth="1" opacity="0.35" />
          <line x1={x} y1={y} x2={x} y2={(y as number) + 28} stroke={dark} strokeWidth="1" opacity="0.35" />
        </g>
      ))}
    </g>
  );
};

const Hammam: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wall = tint(accentColor, 0.4);
  const steam = tint(accentColor, 0.6);
  const skin = "#B07C4A";
  return (
    <g>
      <rect x="95" y="95" width="230" height="145" fill={wall} stroke={dark} strokeWidth="3" />
      {[130, 205, 280].map((x) => (
        <path key={x} d={`M${x - 22} 175 L${x - 22} 130 Q${x} 100 ${x + 22} 130 L${x + 22} 175 Z`} fill={shade(wall, 0.12)} stroke={dark} strokeWidth="2.5" />
      ))}
      {/* stone bench + bather scrubbing */}
      <rect x="110" y="205" width="200" height="16" fill={shade(wall, 0.2)} stroke={dark} strokeWidth="2" />
      <ellipse cx="180" cy="188" rx="12" ry="13" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M172 200 q8 6 16 0 l4 5 -24 0 Z" fill={steam} stroke={dark} strokeWidth="1.5" />
      <path d="M186 196 L210 188" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <rect x="206" y="182" width="14" height="10" rx="2" fill={dark} />
      {/* buckets */}
      {[235, 265].map((x) => (
        <path key={x} d={`M${x} 224 l4 14 h12 l4 -14 Z`} fill={shade(wall, 0.25)} stroke={dark} strokeWidth="2" />
      ))}
      {[140, 240, 290].map((x, i) => (
        <path key={x} d={`M${x} 130 q${8 - i * 4} -16 0 -30`} fill="none" stroke={steam} strokeWidth="4" opacity="0.55" />
      ))}
    </g>
  );
};

const LenguaAmazigh: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = tint(accentColor, 0.3);
  const carve = shade(accentColor, 0.3);
  return (
    <g>
      <rect x="120" y="80" width="160" height="170" rx="8" fill={stone} stroke={dark} strokeWidth="3.5" />
      {/* big yaz symbol ⵣ */}
      <g stroke={carve} strokeWidth="9" fill="none" strokeLinecap="round">
        <path d="M175 110 L175 150 Q175 172 200 172 Q225 172 225 150 L225 110" />
        <line x1="200" y1="150" x2="200" y2="220" />
        <line x1="180" y1="205" x2="220" y2="205" />
      </g>
      {/* small tifinagh signs */}
      <g stroke={carve} strokeWidth="4" fill="none">
        <circle cx="145" cy="105" r="7" />
        <path d="M240 100 l12 12 M252 100 l-12 12" />
        <path d="M140 235 l0 -16 8 8 8 -8 0 16" />
        <path d="M245 228 h16 M253 220 v16" />
      </g>
    </g>
  );
};

const Volubilis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = tint(accentColor, 0.35);
  const olive = "#6E8F4C";
  return (
    <g>
      <path d="M90 235 Q205 218 320 235 L320 250 L90 250 Z" fill={shade(accentColor, 0.15)} opacity="0.6" />
      {/* triumphal arch */}
      <path d="M180 235 L180 120 L250 120 L250 235 L232 235 L232 150 Q215 132 198 150 L198 235 Z" fill={stone} stroke={dark} strokeWidth="3" />
      <rect x="172" y="105" width="86" height="16" fill={shade(stone, 0.15)} stroke={dark} strokeWidth="2.5" />
      {/* columns */}
      {[110, 135, 285, 310].map((x, i) => (
        <g key={x}>
          <rect x={x - 7} y={130 + (i > 1 ? 6 : 0)} width="14" height={105 - (i > 1 ? 6 : 0)} fill={stone} stroke={dark} strokeWidth="2.5" />
          <rect x={x - 10} y={124 + (i > 1 ? 6 : 0)} width="20" height="8" fill={shade(stone, 0.15)} />
        </g>
      ))}
      {[130, 285].map((x) => (
        <circle key={x} cx={x} cy="200" r="12" fill={olive} opacity="0.7" />
      ))}
    </g>
  );
};

const FantasiaTbourida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const horse = "#6B4A2E";
  const robe = "#EDE6D6";
  const smoke = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M90 240 Q205 233 320 240 L320 250 L90 250 Z" fill={dark} opacity="0.35" />
      {[0, 60, 120].map((off, i) => (
        <g key={i} transform={`translate(${110 + off} ${150 + i * 4})`} opacity={1 - i * 0.12}>
          {/* horse */}
          <path d="M0 60 Q0 30 40 28 L70 30 Q80 32 80 48 L80 62" fill={horse} stroke={shade(horse, 0.3)} strokeWidth="2.5" />
          <path d="M70 30 Q84 18 80 2 L72 6 L60 32 Z" fill={horse} stroke={shade(horse, 0.3)} strokeWidth="2" />
          <path d="M74 6 Q64 -2 58 8" fill="none" stroke="#3A2A1E" strokeWidth="3" />
          <path d="M8 60 L2 82 M28 60 L34 82 M55 58 L50 82 M72 58 L80 82" stroke={shade(horse, 0.3)} strokeWidth="4" />
          <path d="M0 40 Q-14 46 -18 64" fill="none" stroke="#3A2A1E" strokeWidth="4" />
          {/* rider */}
          <path d="M28 30 Q26 8 40 4 Q54 8 52 34 Z" fill={robe} stroke={dark} strokeWidth="2" />
          <circle cx="40" cy="-4" r="7" fill="#B07C4A" />
          {/* raised rifle */}
          <line x1="42" y1="8" x2="72" y2="-24" stroke="#3A2A1E" strokeWidth="3" />
          <path d="M72 -24 q4 -8 -2 -12" fill="none" stroke={smoke} strokeWidth="4" opacity="0.6" />
        </g>
      ))}
    </g>
  );
};

const AitBenhaddou: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mud = accentColor;
  const mud2 = shade(accentColor, 0.15);
  return (
    <g>
      <path d="M90 240 L120 210 L320 240 L320 250 L90 250 Z" fill={dark} opacity="0.35" />
      <path d="M110 240 L130 150 L300 210 L300 240 Z" fill={mud2} stroke={dark} strokeWidth="2" />
      {[
        { x: 135, y: 165, w: 34, h: 75 },
        { x: 172, y: 140, w: 38, h: 100 },
        { x: 214, y: 120, w: 34, h: 120 },
        { x: 250, y: 150, w: 40, h: 90 },
      ].map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width={t.w} height={t.h} fill={i % 2 ? mud : mud2} stroke={dark} strokeWidth="2.5" />
          {/* crenellations */}
          {[0, 1, 2].map((k) => (
            <rect key={k} x={t.x + 3 + k * (t.w / 3)} y={t.y - 8} width={t.w / 5} height="8" fill={shade(mud, 0.25)} />
          ))}
          <path d={`M${t.x + t.w / 2 - 5} ${t.y + t.h} v-18 h10 v18`} fill={dark} opacity="0.55" />
          {[0.35, 0.6].map((f) => (
            <rect key={f} x={t.x + 6} y={t.y + t.h * f} width="7" height="9" fill={dark} opacity="0.4" />
          ))}
        </g>
      ))}
    </g>
  );
};

const Caftan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const velvet = accentColor;
  const gold = "#D4AF37";
  return (
    <g>
      {/* gown */}
      <path d="M205 90 Q188 92 185 108 L150 150 L168 165 L178 150 L160 240 L250 240 L232 150 L242 165 L260 150 L225 108 Q222 92 205 90 Z" fill={velvet} stroke={dark} strokeWidth="3" />
      {/* gold embroidery placket */}
      <line x1="205" y1="100" x2="205" y2="240" stroke={gold} strokeWidth="4" />
      {[118, 138, 158, 178, 198, 218].map((y) => (
        <circle key={y} cx="205" cy={y} r="3" fill={gold} />
      ))}
      {/* wide belt */}
      <rect x="162" y="150" width="86" height="18" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      {[175, 190, 205, 220, 235].map((x) => (
        <path key={x} d={`M${x} 152 l4 7 -4 7 -4 -7 Z`} fill={shade(velvet, 0.1)} />
      ))}
      {/* hem embroidery */}
      <path d="M160 233 Q205 226 250 233" fill="none" stroke={gold} strokeWidth="4" />
      <ellipse cx="205" cy="82" rx="10" ry="11" fill="#B07C4A" />
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
  "jemaa-el-fnaa": { component: JemaaElFnaa },
  cuscus: { component: Cuscus },
  "curtiembres-fez": { component: CurtiembresFez },
  zellige: { component: Zellige },
  hammam: { component: Hammam },
  "lengua-amazigh": { component: LenguaAmazigh },
  volubilis: { component: Volubilis },
  "fantasia-tbourida": { component: FantasiaTbourida },
  "ait-benhaddou": { component: AitBenhaddou },
  caftan: { component: Caftan },
};
