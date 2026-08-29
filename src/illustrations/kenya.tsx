import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GranMigracionMasaiMara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 235 Q205 220 320 235 L320 250 L90 250 Z" fill={water} />
      {[[130, 220, 0], [170, 210, 1], [210, 225, 0], [250, 208, 1], [280, 222, 0]].map(([x, y, stripes]) => (
        <g key={x}>
          <path d={`M${x} ${y} Q${x - 8} ${y - 18} ${x + 4} ${y - 20} Q${x + 16} ${y - 18} ${x + 10} ${y} Z`} fill={stripes ? "#F5F0E6" : accentColor} stroke={dark} strokeWidth="2" />
          {stripes === 1 && [0, 1, 2].map((s) => (
            <line key={s} x1={x + s * 3} y1={y - 5} x2={x + s * 3} y2={y - 16} stroke={dark} strokeWidth="1.5" />
          ))}
          <line x1={x + 5} y1={y} x2={x + 3} y2={y + 12} stroke={dark} strokeWidth="3" />
          <line x1={x + 8} y1={y} x2={x + 10} y2={y + 12} stroke={dark} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const PuebloMasai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#F4A300", "#00838F", "#2E7D32", "#fff"];
  return (
    <g>
      <path d="M150 235 L150 155 Q150 145 205 145 Q260 145 260 155 L260 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[165, 190, 215, 240].map((x) => (
        <line key={x} x1={x} y1="150" x2={x} y2="235" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <circle cx="290" cy="180" r="34" fill="none" stroke={dark} strokeWidth="3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <circle key={deg} cx="290" cy="150" r="5" fill={colors[i % colors.length]} transform={`rotate(${deg} 290 180)`} />
      ))}
    </g>
  );
};

const MPesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="120" width="80" height="140" rx="10" fill="#1A1A1A" stroke={dark} strokeWidth="3" />
      <rect x="175" y="135" width="60" height="95" fill={light} />
      <circle cx="205" cy="180" r="26" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <text x="205" y="188" fontSize="24" fontWeight="700" fill="#fff" textAnchor="middle">$</text>
      <circle cx="205" cy="245" r="6" fill={dark} />
    </g>
  );
};

const CorredoresKeniatas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4B3A";
  const dirt = "#B5651D";
  return (
    <g>
      <path d="M90 240 Q205 225 320 240 L320 250 L90 250 Z" fill={dirt} opacity="0.5" />
      <circle cx="180" cy="150" r="12" fill={skin} />
      <path d="M170 165 Q182 160 194 165 L188 200 L198 235 L186 235 L178 205 L170 235 L158 235 L164 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M194 170 Q220 160 235 135" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M170 170 Q150 180 145 205" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <polygon points="150,220 205,145 260,220" fill={dark} opacity="0.25" />
    </g>
  );
};

const MonteKenia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const snow = "#F5F0E6";
  return (
    <g>
      <polygon points="100,240 205,110 310,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="165,190 205,110 245,190" fill={snow} />
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
      {[[135, 220], [275, 215]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 10} ${(y as number) - 20} ${x} ${(y as number) - 40} Q${(x as number) + 10} ${(y as number) - 20} ${x} ${y} Z`} fill="#2E7D32" opacity="0.6" />
      ))}
    </g>
  );
};

const CafeKeniata: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bean = "#4A2C2A";
  return (
    <g>
      <path d="M170 195 Q165 235 205 238 Q245 235 240 195 L235 175 L175 175 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="175" rx="30" ry="10" fill={accentColor} />
      <path d="M235 185 Q255 188 258 205 Q255 220 238 216" fill="none" stroke="#F5F0E6" strokeWidth="6" strokeLinecap="round" />
      <path d="M195 165 Q190 150 198 138" fill="none" stroke="#B0AFA8" strokeWidth="2.5" opacity="0.6" />
      {[[130, 220], [150, 235], [115, 235]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="9" ry="6" fill={bean} stroke={shade(bean, 0.3)} strokeWidth="1" transform={`rotate(15 ${x} ${y})`} />
      ))}
    </g>
  );
};

const LenguaSwahili: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M120 130 Q120 115 140 115 L185 115 Q195 115 193 128 L195 150 L172 130 L140 130 Q120 130 120 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M290 160 Q290 145 270 145 L225 145 Q215 145 217 158 L215 180 L238 160 L270 160 Q290 160 290 160 Z" fill={water} stroke={dark} strokeWidth="2.5" />
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const FlamencosLagoNakuru: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 220 Q205 205 320 220 L320 250 L90 250 Z" fill={water} />
      {[[130, 205, 1], [165, 195, 0.9], [200, 210, 0.85], [235, 198, 0.95], [270, 212, 0.8]].map(([x, y, scale], i) => (
        <g key={x as number} transform={`translate(${x} ${y}) scale(${scale})`}>
          <ellipse cx="0" cy="0" rx="10" ry="15" fill={accentColor} stroke={dark} strokeWidth="1.5" />
          <path d="M-2 -12 Q-2 -30 -14 -38" stroke={accentColor} strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M-14 -38 L-22 -35 L-15 -30 Z" fill={dark} opacity={0.7 - i * 0.05} />
          <line x1="0" y1="12" x2="-3" y2="30" stroke={dark} strokeWidth="2" />
          <line x1="4" y1="12" x2="7" y2="30" stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const CostaSwahiliMombasa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 235 Q205 245 320 235 L320 250 L90 250 Z" fill={water} />
      <rect x="120" y="150" width="90" height="85" fill="#D9BE8F" stroke={shade("#D9BE8F", 0.3)} strokeWidth="3" />
      {[135, 165, 195].map((x) => (
        <rect key={x} x={x - 6} y="130" width="12" height="20" fill="#D9BE8F" stroke={shade("#D9BE8F", 0.3)} strokeWidth="2" />
      ))}
      <path d="M250 235 L250 165 L295 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="250" y1="235" x2="250" y2="155" stroke={dark} strokeWidth="3" />
      <path d="M235 232 L250 220 L265 232 Z" fill="#8B5A2B" />
    </g>
  );
};

const GranValleDelRift: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#3D8FB0";
  return (
    <g>
      <polygon points="90,240 165,120 210,240" fill={accentColor} opacity="0.6" />
      <polygon points="200,240 250,110 320,240" fill={dark} opacity="0.6" />
      <polygon points="175,240 205,150 235,240" fill="#5C3A1E" opacity="0.85" />
      <ellipse cx="205" cy="235" rx="20" ry="8" fill={water} />
    </g>
  );
};

const WangariMaathai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leaf = "#4A8F4E";
  const soil = "#7A4A2B";
  const skin = "#7A5230";
  return (
    <g>
      <path d="M90 235 Q205 225 320 235 L320 250 L90 250 Z" fill={soil} opacity="0.6" />
      {[120, 155, 285, 310].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="235" x2={x} y2={190 - i * 6} stroke={soil} strokeWidth="4" />
          <circle cx={x} cy={185 - i * 6} r={14 + i} fill={leaf} stroke={shade(leaf, 0.3)} strokeWidth="2" />
        </g>
      ))}
      {/* woman kneeling, planting a sapling */}
      <path d="M195 235 Q188 200 210 190 Q235 195 240 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="172" rx="14" ry="15" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M191 170 Q191 150 205 148 Q219 150 219 170 Z" fill="#2A2A2E" />
      <path d="M210 198 Q235 200 250 220" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      {/* sapling being planted */}
      <line x1="255" y1="228" x2="255" y2="208" stroke={soil} strokeWidth="3" />
      <path d="M255 208 q-12 -4 -16 -16 M255 208 q12 -4 16 -16 M255 205 q0 -10 0 -18" fill="none" stroke={leaf} strokeWidth="3" />
    </g>
  );
};

const TeKeniata: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bush = "#4A8F4E";
  const skin = "#7A5230";
  return (
    <g>
      {[210, 195, 180, 165].map((y, i) => (
        <path key={y} d={`M90 ${y + 20} Q205 ${y + 6} 320 ${y + 20} L320 ${y + 40} Q205 ${y + 26} 90 ${y + 40} Z`} fill={i % 2 ? shade(bush, 0.12) : bush} stroke={shade(bush, 0.3)} strokeWidth="2" />
      ))}
      {/* picker with basket on back */}
      <path d="M175 210 Q170 175 195 168 Q220 174 222 210 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <path d="M215 178 Q238 172 244 150" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="192" cy="152" rx="13" ry="14" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M179 150 Q179 132 192 130 Q205 132 205 150 Z" fill="#3A2A1E" />
      <path d="M158 165 L150 205 L182 205 L176 168 Z" fill="#8A6A3C" stroke={dark} strokeWidth="2.5" />
      <path d="M158 165 Q167 130 176 168" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const NyamaChoma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const grill = "#4A4A4A";
  const meat = "#8A3B22";
  const ember = "#E8571F";
  const ugali = "#F2EFE0";
  return (
    <g>
      <rect x="105" y="185" width="150" height="14" rx="3" fill={grill} />
      {[120, 150, 180, 210].map((x) => (
        <line key={x} x1={x} y1="199" x2={x} y2="235" stroke={grill} strokeWidth="4" />
      ))}
      {[118, 200].map((x) => (
        <rect key={x} x={x} y="200" width="70" height="8" rx="2" fill={ember} opacity="0.8" />
      ))}
      {[[125, 175], [160, 172], [195, 175]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} q14 -10 28 0 q4 10 -10 14 q-16 2 -18 -14 Z`} fill={meat} stroke={shade(meat, 0.3)} strokeWidth="2" />
      ))}
      {/* ugali block + kachumbari bowl */}
      <path d="M262 235 L268 180 L308 180 L314 235 Z" fill={ugali} stroke={dark} strokeWidth="3" />
      <path d="M268 180 Q288 168 308 180" fill={ugali} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="288" cy="160" rx="24" ry="9" fill="#C0392B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Lamu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wall = tint(accentColor, 0.4);
  const doorwood = "#6B4A2E";
  return (
    <g>
      <rect x="95" y="95" width="90" height="145" fill={wall} stroke={dark} strokeWidth="3" />
      <rect x="235" y="110" width="90" height="130" fill={shade(wall, 0.1)} stroke={dark} strokeWidth="3" />
      <path d="M185 240 L185 100 L235 100 L235 240 Z" fill={tint(wall, 0.2)} stroke={dark} strokeWidth="2" />
      {/* carved door */}
      <rect x="128" y="165" width="34" height="75" fill={doorwood} stroke={shade(doorwood, 0.3)} strokeWidth="2.5" />
      <path d="M128 165 Q145 150 162 165" fill={doorwood} stroke={shade(doorwood, 0.3)} strokeWidth="2.5" />
      {[175, 195, 215].map((y) => (
        <line key={y} x1="132" y1={y} x2="158" y2={y} stroke={shade(doorwood, 0.35)} strokeWidth="1.5" />
      ))}
      {[[110, 120], [150, 120], [255, 135], [295, 135]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="16" height="20" fill={dark} opacity="0.5" />
      ))}
      {/* donkey in the alley */}
      <g transform="translate(198 205)">
        <ellipse cx="0" cy="0" rx="20" ry="11" fill="#9A9A9A" stroke={dark} strokeWidth="2" />
        <path d="M-18 -4 Q-28 -12 -26 -22 L-20 -20 L-16 -6 Z" fill="#9A9A9A" stroke={dark} strokeWidth="2" />
        <path d="M-24 -22 l-3 -9 5 3 M-20 -22 l2 -9 3 5" fill="#9A9A9A" stroke={dark} strokeWidth="1.5" />
        <path d="M-12 10 L-12 26 M-4 10 L-4 26 M8 9 L8 26 M15 9 L15 26" stroke={dark} strokeWidth="3" />
      </g>
    </g>
  );
};

const Harambee: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#7A4A2B";
  const skins = ["#7A5230", "#5C3A22", "#8A6440", "#6B4A2E"];
  return (
    <g>
      <rect x="95" y="150" width="220" height="16" rx="6" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" transform="rotate(-4 205 158)" />
      {[120, 170, 230, 285].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy={128 - (i % 2) * 4} rx="14" ry="15" fill={skins[i]} stroke={shade(skins[i], 0.3)} strokeWidth="2" />
          <path d={`M${x - 4} 142 L${x - 12} 235 L${x + 12} 235 L${x + 4} 142 Z`} fill={i % 2 ? accentColor : tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x - 2} 150 Q${x} 158 ${x + 2} 150`} fill="none" stroke={skins[i]} strokeWidth="6" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const ElefantesHuerfanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const eleph = "#8C8F98";
  const skin = "#7A5230";
  const bottle = "#EDE9DC";
  return (
    <g>
      {/* baby elephant */}
      <ellipse cx="180" cy="195" rx="52" ry="42" fill={eleph} stroke={shade(eleph, 0.3)} strokeWidth="3" />
      <path d="M150 235 L150 205 M175 238 L175 208 M205 235 L205 205" stroke={dark} strokeWidth="6" />
      <ellipse cx="150" cy="165" rx="26" ry="24" fill={eleph} stroke={shade(eleph, 0.3)} strokeWidth="3" />
      <path d="M128 158 Q110 150 106 170 Q112 182 130 176 Z" fill={shade(eleph, 0.12)} stroke={shade(eleph, 0.3)} strokeWidth="2" />
      <path d="M144 182 Q136 210 150 224 Q158 214 156 196" fill={eleph} stroke={shade(eleph, 0.3)} strokeWidth="2.5" />
      <circle cx="152" cy="160" r="3" fill={dark} />
      {/* keeper with giant bottle */}
      <path d="M250 235 L246 175 Q265 162 284 175 L280 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <ellipse cx="265" cy="158" rx="13" ry="14" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M252 178 Q230 172 210 168" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <rect x="188" y="150" width="20" height="40" rx="5" fill={bottle} stroke={dark} strokeWidth="2.5" transform="rotate(35 198 170)" />
    </g>
  );
};

const MusicaBenga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#2E86AB";
  const guitar = "#B5451F";
  const skin = "#7A5230";
  return (
    <g>
      <path d="M90 235 Q205 225 320 235 L320 250 L90 250 Z" fill={water} />
      {/* speaker */}
      <rect x="248" y="150" width="60" height="85" rx="4" fill="#2C2C30" stroke={dark} strokeWidth="2.5" />
      <circle cx="278" cy="180" r="16" fill="#4A4A50" stroke="#1B1B1F" strokeWidth="2" />
      <circle cx="278" cy="212" r="9" fill="#4A4A50" stroke="#1B1B1F" strokeWidth="2" />
      {/* guitarist */}
      <path d="M130 235 L128 165 Q160 150 190 165 L188 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <ellipse cx="159" cy="140" rx="14" ry="15" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M145 138 Q145 120 159 118 Q173 120 173 138 Z" fill="#2A2A2E" />
      <ellipse cx="185" cy="200" rx="26" ry="20" fill={guitar} stroke={shade(guitar, 0.3)} strokeWidth="3" transform="rotate(-18 185 200)" />
      <circle cx="185" cy="200" r="6" fill={dark} transform="rotate(-18 185 200)" />
      <rect x="150" y="150" width="10" height="46" rx="2" fill="#3A2A1E" transform="rotate(-18 185 200)" />
      <path d="M150 155 Q140 175 145 195" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const ParqueNairobi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const grass = "#B5892E";
  const lion = "#C89A5B";
  const bldg = tint(accentColor, 0.25);
  return (
    <g>
      <rect x="90" y="205" width="230" height="35" fill={grass} opacity="0.6" />
      {[[240, 90], [258, 120], [276, 70], [294, 105], [312, 85]].map(([x, h], i) => (
        <rect key={i} x={x} y={205 - h} width="15" height={h} fill={bldg} stroke={dark} strokeWidth="2" />
      ))}
      {/* giraffe */}
      <g transform="translate(150 150)">
        <ellipse cx="0" cy="55" rx="26" ry="16" fill="#D2A45B" stroke={dark} strokeWidth="2.5" />
        <path d="M-10 44 Q-18 15 -14 -8 L-4 -8 Q-2 20 4 44 Z" fill="#D2A45B" stroke={dark} strokeWidth="2.5" />
        <ellipse cx="-9" cy="-12" rx="8" ry="7" fill="#D2A45B" stroke={dark} strokeWidth="2" />
        <path d="M-14 55 L-14 78 M8 55 L8 78" stroke={dark} strokeWidth="4" />
      </g>
      {/* lion */}
      <g transform="translate(150 210)">
        <ellipse cx="0" cy="0" rx="30" ry="14" fill={lion} stroke={shade(lion, 0.3)} strokeWidth="2.5" />
        <circle cx="-26" cy="-6" r="13" fill={shade(lion, 0.15)} stroke={shade(lion, 0.3)} strokeWidth="2" />
        <circle cx="-26" cy="-6" r="8" fill={lion} />
        <path d="M-14 10 L-14 20 M6 10 L6 20 M22 8 L22 20" stroke={dark} strokeWidth="3" />
      </g>
    </g>
  );
};

const Kanga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cloth = tint(accentColor, 0.4);
  const border = shade(accentColor, 0.1);
  return (
    <g>
      <rect x="100" y="95" width="210" height="150" fill={cloth} stroke={dark} strokeWidth="3" />
      <rect x="100" y="95" width="210" height="150" fill="none" stroke={border} strokeWidth="14" />
      {[118, 292].map((x) => (
        <line key={x} x1={x} y1="120" x2={x} y2="220" stroke={dark} strokeWidth="2" opacity="0.3" />
      ))}
      {/* central medallion */}
      <circle cx="205" cy="155" r="30" fill={border} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="155" r="16" fill={cloth} />
      {[0, 45, 90, 135].map((a) => (
        <line key={a} x1="205" y1="155" x2="205" y2="120" stroke={dark} strokeWidth="3" transform={`rotate(${a} 205 155)`} />
      ))}
      {/* proverb strip */}
      <rect x="120" y="205" width="170" height="20" fill={border} />
      {[128, 150, 172, 194, 216, 238, 260].map((x) => (
        <rect key={x} x={x} y="212" width="14" height="6" rx="1" fill={cloth} />
      ))}
    </g>
  );
};

const AbaloriosMasai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const beads = ["#D4322A", "#2E6E9E", "#4A8F4E", "#E8C33A", "#EDE9DC"];
  const red = "#C0392B";
  return (
    <g>
      {/* red checked shuka draped behind */}
      <path d="M215 90 L315 110 L300 245 L200 235 Z" fill={red} stroke={shade(red, 0.3)} strokeWidth="3" />
      {[130, 165, 200].map((y) => (
        <line key={y} x1="205" y1={y} x2="312" y2={y + 12} stroke="#7A1E17" strokeWidth="3" opacity="0.6" />
      ))}
      {[240, 270, 300].map((x) => (
        <line key={x} x1={x} y1="95" x2={x - 10} y2="245" stroke="#7A1E17" strokeWidth="3" opacity="0.6" />
      ))}
      {/* wide beaded collar */}
      <ellipse cx="150" cy="150" rx="60" ry="55" fill="none" stroke={dark} strokeWidth="1" opacity="0.2" />
      {beads.map((c, i) => (
        <path
          key={i}
          d={`M95 ${150 + i * 3} Q150 ${210 + i * 9} 205 ${150 + i * 3}`}
          fill="none"
          stroke={c}
          strokeWidth="7"
          strokeLinecap="round"
        />
      ))}
      <circle cx="150" cy="120" r="10" fill={dark} opacity="0.15" />
    </g>
  );
};

export const kenyaIllustrations: Record<string, IllustrationDefinition> = {
  "gran-migracion-masai-mara": { component: GranMigracionMasaiMara },
  "pueblo-masai": { component: PuebloMasai },
  "m-pesa": { component: MPesa },
  "corredores-keniatas": { component: CorredoresKeniatas },
  "monte-kenia": { component: MonteKenia },
  "cafe-keniata": { component: CafeKeniata },
  "lengua-swahili": { component: LenguaSwahili },
  "flamencos-lago-nakuru": { component: FlamencosLagoNakuru },
  "costa-swahili-mombasa": { component: CostaSwahiliMombasa },
  "gran-valle-del-rift": { component: GranValleDelRift },
  "wangari-maathai": { component: WangariMaathai },
  "te-keniata": { component: TeKeniata },
  "nyama-choma": { component: NyamaChoma },
  lamu: { component: Lamu },
  harambee: { component: Harambee },
  "elefantes-huerfanos": { component: ElefantesHuerfanos },
  "musica-benga": { component: MusicaBenga },
  "parque-nairobi": { component: ParqueNairobi },
  kanga: { component: Kanga },
  "abalorios-masai": { component: AbaloriosMasai },
};
