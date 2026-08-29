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

const DesmondTutu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C3A22";
  const wood = "#7A4A2B";
  return (
    <g>
      <path d="M170 240 L165 145 Q205 122 245 145 L240 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="195" y="130" width="20" height="35" fill="#F2EFE6" />
      <ellipse cx="205" cy="118" rx="17" ry="18" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M205 100 Q225 106 225 122 Q216 118 205 118 Q194 118 185 122 Q185 106 205 100 Z" fill="#3A3A3A" opacity="0.6" />
      <path d="M188 128 Q205 140 222 128" fill="none" stroke={dark} strokeWidth="3" />
      {/* gavel */}
      <path d="M215 200 Q235 185 250 200" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <rect x="242" y="185" width="26" height="14" rx="3" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" transform="rotate(-30 255 192)" />
      <line x1="268" y1="198" x2="284" y2="212" stroke={wood} strokeWidth="5" />
    </g>
  );
};

const CunaHumanidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rock = tint(accentColor, 0.3);
  const bone = "#EDE6D6";
  return (
    <g>
      <path d="M90 250 L90 150 Q150 90 210 130 Q260 90 320 150 L320 250 Z" fill={rock} stroke={dark} strokeWidth="3" />
      <path d="M90 155 Q205 200 320 155 L320 250 L90 250 Z" fill={shade(rock, 0.15)} />
      {/* excavation pit + skeleton */}
      <rect x="150" y="190" width="110" height="45" rx="4" fill={shade(rock, 0.25)} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="175" cy="208" rx="10" ry="9" fill={bone} stroke={shade(bone, 0.3)} strokeWidth="2" />
      <path d="M188 205 L235 200 M195 215 L240 220" stroke={bone} strokeWidth="5" strokeLinecap="round" />
      {[200, 215, 230].map((x) => (
        <line key={x} x1={x} y1="200" x2={x} y2="212" stroke={bone} strokeWidth="3" />
      ))}
      {/* small brush */}
      <line x1="270" y1="175" x2="290" y2="150" stroke="#8A6A3C" strokeWidth="4" />
      <path d="M288 148 l8 -10 4 6 -8 10 Z" fill="#D8D0C4" />
    </g>
  );
};

const ArteRupestreSan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rock = tint(accentColor, 0.35);
  const ochre = "#B5651D";
  return (
    <g>
      <rect x="95" y="90" width="220" height="150" fill={rock} stroke={dark} strokeWidth="3" />
      {/* antelope */}
      <path d="M140 170 L175 165 L180 145 L188 165 L188 190 L140 190 Z" fill="none" stroke={ochre} strokeWidth="4" strokeLinejoin="round" />
      <path d="M175 165 L172 150 M180 150 L184 138" stroke={ochre} strokeWidth="3" />
      <path d="M140 190 L136 210 M155 190 L152 210 M175 190 L178 210 M186 190 L190 210" stroke={ochre} strokeWidth="3" />
      {/* hunters with bows */}
      {[[225, 195], [255, 205], [285, 190]].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y - 30} x2={x} y2={y} stroke={ochre} strokeWidth="3" />
          <circle cx={x} cy={y - 36} r="5" fill={ochre} />
          <path d={`M${x - 12} ${y - 20} q12 -18 12 0`} fill="none" stroke={ochre} strokeWidth="2.5" />
          <line x1={x} y1={y} x2={x - 10} y2={y + 14} stroke={ochre} strokeWidth="3" />
          <line x1={x} y1={y} x2={x + 8} y2={y + 14} stroke={ochre} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const BoKaapCocinaMalaya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const houses = ["#D9542E", "#2E86AB", "#E0A82E", "#5B9A5B", "#9C5B8F"];
  return (
    <g>
      {houses.map((c, i) => {
        const x = 100 + i * 44;
        const h = 130 + (i % 2) * 15;
        return (
          <g key={i}>
            <rect x={x} y={240 - h} width="40" height={h} fill={c} stroke={dark} strokeWidth="2.5" />
            <rect x={x + 6} y={250 - h} width="28" height="8" fill={shade(c, 0.25)} />
            {[0.25, 0.55].map((f) => (
              <rect key={f} x={x + 10} y={240 - h + h * f} width="10" height="14" fill={tint(c, 0.5)} stroke={dark} strokeWidth="1.2" />
            ))}
            <rect x={x + 14} y="216" width="12" height="24" fill={dark} opacity="0.5" />
          </g>
        );
      })}
      <path d="M90 240 L320 240 L320 250 L90 250 Z" fill={dark} opacity="0.3" />
    </g>
  );
};

const PinguinosBouldersBeach: IllustrationComponent = () => {
  const sand = "#E8D6A8";
  const rock = "#8C8272";
  return (
    <g>
      <rect x="90" y="150" width="230" height="100" fill={sand} />
      <path d="M90 190 Q205 175 320 190 L320 150 L90 150 Z" fill="#2E86AB" />
      {[[130, 190, 30], [230, 205, 40], [290, 195, 26]].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.7} fill={rock} stroke={shade(rock, 0.25)} strokeWidth="2.5" />
      ))}
      {[[165, 225], [200, 232], [255, 228]].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="12" ry="18" fill="#1B1B1F" />
          <ellipse cx={x} cy={y + 3} rx="7" ry="13" fill="#F2EFE6" />
          <path d={`M${x} ${y - 16} l-4 -6 4 2 4 -2 Z`} fill="#E8571F" />
          <circle cx={x - 2} cy={y - 14} r="1.5" fill="#1B1B1F" />
          <path d={`M${x - 12} ${y} q-6 4 -8 12 M${x + 12} ${y} q6 4 8 12`} fill="none" stroke="#1B1B1F" strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const Shweshwe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const indigo = "#2E4E8F";
  const pattern = tint(indigo, 0.35);
  return (
    <g>
      <rect x="100" y="150" width="150" height="90" fill={indigo} stroke={dark} strokeWidth="3" />
      {Array.from({ length: 5 }).flatMap((_, r) =>
        Array.from({ length: 7 }).map((__, c) => (
          <circle key={`${r}-${c}`} cx={112 + c * 20} cy={162 + r * 16} r="3" fill={pattern} />
        ))
      )}
      {/* rolled bolt end */}
      <ellipse cx="100" cy="195" rx="14" ry="46" fill={shade(indigo, 0.15)} stroke={dark} strokeWidth="3" />
      <ellipse cx="100" cy="195" rx="6" ry="38" fill={indigo} />
      <path d="M250 150 L285 140 L285 250 L250 240 Z" fill={shade(indigo, 0.1)} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const Ubuntu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skins = ["#8A5C38", "#C99A6B", "#5C3A22", "#D8B48A"];
  return (
    <g>
      {skins.map((c, i) => {
        const angle = i * 90;
        return (
          <g key={i} transform={`rotate(${angle} 205 165)`}>
            <path d="M205 165 L205 120" stroke={c} strokeWidth="16" strokeLinecap="round" />
            <circle cx="205" cy="112" r="11" fill={c} stroke={shade(c, 0.3)} strokeWidth="2" />
          </g>
        );
      })}
      <circle cx="205" cy="165" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const VinedosStellenbosch: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mountain = "#8C8FA0";
  const vine = "#4A7C3A";
  const house = "#F2EFE6";
  return (
    <g>
      <path d="M90 170 L150 100 L210 170 Z" fill={mountain} opacity="0.6" />
      <path d="M180 175 L240 110 L300 175 Z" fill={shade(mountain, 0.1)} opacity="0.6" />
      {[150, 175, 200, 225, 250, 275].map((x) => (
        <line key={x} x1={x} y1="235" x2={x - 20} y2="180" stroke={vine} strokeWidth="6" />
      ))}
      {/* Cape Dutch gabled house */}
      <rect x="110" y="200" width="60" height="35" fill={house} stroke={dark} strokeWidth="2.5" />
      <path d="M118 200 Q118 178 140 172 Q162 178 162 200 Z" fill={house} stroke={dark} strokeWidth="2.5" />
      <path d="M118 200 h44" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const Kwaito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C3A22";
  return (
    <g>
      <rect x="240" y="140" width="55" height="95" rx="4" fill="#2C2C30" stroke={dark} strokeWidth="2.5" />
      <circle cx="267" cy="170" r="15" fill="#4A4A50" stroke="#1B1B1F" strokeWidth="2" />
      <circle cx="267" cy="205" r="9" fill="#4A4A50" stroke="#1B1B1F" strokeWidth="2" />
      {/* DJ */}
      <path d="M140 240 L136 175 Q160 160 184 175 L180 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="160" cy="160" rx="15" ry="16" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M144 158 Q144 140 160 138 Q176 140 176 158 Q168 148 160 148 Q152 148 144 158 Z" fill="#1B1B1F" />
      <path d="M148 154 Q160 148 172 154" fill="none" stroke="#1B1B1F" strokeWidth="6" strokeLinecap="round" />
      {/* dancers */}
      {[[205, 215], [225, 208]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y - 20} r="9" fill={i ? "#C99A6B" : "#8A5C38"} />
          <path d={`M${x - 8} ${y} L${x - 12} ${y + 24} L${x + 12} ${y + 24} L${x + 8} ${y} Z`} fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <path d={`M${x - 8} ${y - 4} q-14 -8 -16 -20`} fill="none" stroke={i ? "#C99A6B" : "#8A5C38"} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const DanzaJuncoUmhlanga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skins = ["#8A5C38", "#5C3A22", "#C99A6B"];
  const beads = ["#D4322A", "#E8C33A", "#2E6E9E", "#4A8F4E"];
  return (
    <g>
      {[0, 1, 2].map((i) => {
        const x = 140 + i * 70;
        const skin = skins[i % skins.length];
        return (
          <g key={i}>
            {/* beaded skirt */}
            <path d={`M${x - 20} 235 L${x - 16} 195 L${x + 16} 195 L${x + 20} 235 Z`} fill={beads[i % beads.length]} stroke={dark} strokeWidth="2.5" />
            {[204, 214, 224].map((y) => (
              <line key={y} x1={x - 18} y1={y} x2={x + 18} y2={y} stroke={shade(beads[i % beads.length], 0.3)} strokeWidth="2" />
            ))}
            <ellipse cx={x} cy="180" rx="13" ry="14" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
            {/* long reed carried */}
            <line x1={x - 30} y1="140" x2={x + 34} y2="200" stroke="#C99A45" strokeWidth="5" strokeLinecap="round" />
            <path d={`M${x - 6} 192 Q${x - 20} 188 ${x - 26} 170`} fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
          </g>
        );
      })}
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
  "desmond-tutu-crv": { component: DesmondTutu },
  "cuna-humanidad": { component: CunaHumanidad },
  "arte-rupestre-san": { component: ArteRupestreSan },
  "bo-kaap-cocina-malaya": { component: BoKaapCocinaMalaya },
  "pinguinos-boulders-beach": { component: PinguinosBouldersBeach },
  shweshwe: { component: Shweshwe },
  ubuntu: { component: Ubuntu },
  "vinedos-stellenbosch": { component: VinedosStellenbosch },
  kwaito: { component: Kwaito },
  "danza-junco-umhlanga": { component: DanzaJuncoUmhlanga },
};
