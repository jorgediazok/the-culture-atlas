import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Borobudur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={120 + i * 12} y={225 - i * 24} width={170 - i * 24} height="24" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="1.5" />
      ))}
      {[150, 180, 210, 240, 270].map((x) => (
        <g key={x}>
          <path d={`M${x - 8} 118 Q${x} 100 ${x + 8} 118 Z`} fill={dark} />
          <circle cx={x} cy="112" r="3" fill={light} />
        </g>
      ))}
    </g>
  );
};

const WayangKulit: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <rect x="110" y="95" width="200" height="150" fill={light} opacity="0.6" />
      <line x1="205" y1="240" x2="205" y2="115" stroke={dark} strokeWidth="4" />
      <path d="M195 118 Q195 100 210 100 Q222 100 220 115 Q235 108 238 96" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="207" cy="140" rx="18" ry="30" fill={dark} />
      <path d="M195 165 Q170 175 160 200" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M220 165 Q248 158 258 130" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M198 168 L192 220" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M216 168 L222 220" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const DragonKomodo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9BE8F";
  return (
    <g>
      <path d="M95 240 Q210 228 320 240 L320 250 L95 250 Z" fill={sand} />
      <path d="M130 220 Q125 200 145 195 Q190 185 240 200 Q265 208 260 222 L253 235 L240 235 L237 222 L165 222 L160 235 L148 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="125" cy="200" rx="16" ry="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="120" cy="196" r="2.5" fill="#1A1A1A" />
      <path d="M110 202 Q95 205 85 198 M110 206 Q95 210 88 215" stroke="#C1272D" strokeWidth="2" fill="none" />
      <path d="M260 222 Q285 218 300 205" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${150 + i * 30} 197 L${155 + i * 30} 186`} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const Batik: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="105" y="105" width="200" height="140" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}-${col}`} transform={`translate(${140 + col * 44}, ${140 + row * 40})`}>
            <circle cx="0" cy="0" r="14" fill="none" stroke={light} strokeWidth="2" />
            <path d="M0 -14 Q6 0 0 14 Q-6 0 0 -14 Z" fill={light} opacity="0.7" />
          </g>
        ))
      )}
    </g>
  );
};

const Archipielago: IllustrationComponent = ({ accentColor }) => {
  const water = "#3D8FB0";
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.5" />
      {[[130, 130, 26, green], [180, 165, 34, accentColor], [235, 120, 22, green], [270, 175, 30, accentColor], [155, 205, 20, green]].map(([x, y, r, c], i) => (
        <circle key={i} cx={x as number} cy={y as number} r={r as number} fill={c as string} />
      ))}
    </g>
  );
};

const Gamelan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="150" r={20 - i * 2} fill="none" stroke={gold} strokeWidth="6" />
          <circle cx={x} cy="150" r="5" fill={dark} />
        </g>
      ))}
      <rect x="115" y="200" width="180" height="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[130, 155, 180, 205, 230, 255, 280].map((x) => (
        <rect key={x} x={x} y="205" width="16" height="20" fill={gold} opacity="0.85" />
      ))}
    </g>
  );
};

const AnilloDeFuego: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  const smoke = "#B0AFA8";
  return (
    <g>
      <polygon points="130,240 205,120 280,240" fill={dark} />
      <path d="M205 128 Q195 108 205 90 Q215 108 205 90" fill="none" stroke={smoke} strokeWidth="8" strokeLinecap="round" opacity="0.75" />
      {[0, 1, 2, 3].map((row) => (
        <path key={row} d={`M${95 - row * 5} ${230 - row * 14} L${315 + row * 5} ${230 - row * 14} L${315 + row * 5} ${222 - row * 14} L${95 - row * 5} ${222 - row * 14} Z`} fill={row % 2 === 0 ? green : accentColor} />
      ))}
    </g>
  );
};

const Rendang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M130 175 Q125 230 205 235 Q285 230 280 175 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="75" ry="16" fill={dark} />
      <ellipse cx="205" cy="172" rx="58" ry="10" fill="#3E2817" />
      <path d="M175 155 q6 -14 0 -24" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <path d="M200 155 q6 -14 0 -24" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <path d="M225 155 q6 -14 0 -24" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </g>
  );
};

const BaliHindu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  return (
    <g>
      {/* palm leaf */}
      <path d="M150 235 L260 220 L255 235 L155 250 Z" fill={green} stroke={dark} strokeWidth="2" />
      {/* small offering: flowers, rice, incense */}
      {[[180, 220], [210, 215], [235, 220]].map(([x, y], i) => (
        <g key={x}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x as number} cy={(y as number) - 6} rx="5" ry="7" fill={i % 2 === 0 ? accentColor : "#F4C430"} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
      <line x1="200" y1="205" x2="196" y2="170" stroke="#8B5A2B" strokeWidth="2" />
      <path d="M196 170 Q192 160 196 150" fill="none" stroke="#B0AFA8" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const BuluTangkis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* racket */}
      <ellipse cx="165" cy="150" rx="42" ry="52" fill="none" stroke={dark} strokeWidth="6" />
      <ellipse cx="165" cy="150" rx="42" ry="52" fill={light} opacity="0.3" />
      {[-24, -8, 8, 24].map((dx) => (
        <line key={dx} x1={165 + dx} y1="102" x2={165 + dx} y2="198" stroke={dark} strokeWidth="1.2" opacity="0.5" />
      ))}
      <line x1="165" y1="202" x2="165" y2="240" stroke={dark} strokeWidth="10" />
      {/* shuttlecock mid-flight */}
      <ellipse cx="255" cy="150" rx="10" ry="8" fill="#fff" stroke={dark} strokeWidth="2" />
      <path d="M255 145 L280 105 M250 148 L268 108 M260 148 L288 112" stroke="#F5F0E6" strokeWidth="2.5" strokeOpacity="0.9" />
      <circle cx="257" cy="150" r="3" fill={accentColor} />
    </g>
  );
};

const Prambanan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      {/* two flanking smaller towers */}
      {[130, 280].map((x) => (
        <g key={x}>
          <polygon points={`${x - 20},235 ${x - 20},170 ${x},140 ${x + 20},170 ${x + 20},235`} fill={light} stroke={dark} strokeWidth="2" />
          <rect x={x - 14} y="195" width="28" height="40" fill={dark} opacity="0.4" />
        </g>
      ))}
      {/* central tall tower */}
      <polygon points="175,235 175,150 190,120 205,95 220,120 235,150 235,235" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="190" y="180" width="30" height="55" fill={dark} opacity="0.4" />
      {[160, 190].map((y) => (
        <rect key={y} x="182" y={y} width="46" height="6" fill={dark} opacity="0.5" />
      ))}
    </g>
  );
};

const Orangutanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const face = "#4A3B2E";
  return (
    <g>
      {/* branch */}
      <path d="M85 130 L320 155" stroke="#6B4A2F" strokeWidth="10" strokeLinecap="round" />
      {/* body hanging */}
      <ellipse cx="205" cy="185" rx="34" ry="42" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head */}
      <circle cx="205" cy="145" r="26" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="150" rx="14" ry="12" fill={face} />
      <circle cx="197" cy="146" r="3" fill="#1A1A1A" />
      <circle cx="213" cy="146" r="3" fill="#1A1A1A" />
      {/* arm reaching up to the branch */}
      <path d="M195 155 Q170 140 165 132" fill="none" stroke={accentColor} strokeWidth="16" strokeLinecap="round" />
      {/* other arm holding lower */}
      <path d="M225 175 Q255 190 260 215" fill="none" stroke={accentColor} strokeWidth="15" strokeLinecap="round" />
      {/* legs */}
      <path d="M185 220 Q175 245 185 260" fill="none" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
      <path d="M220 220 Q230 245 220 260" fill="none" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
    </g>
  );
};

const Kris: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const steel = "#B0B8BF";
  const gold = "#D4A017";
  return (
    <g>
      {/* sheath in the background */}
      <path d="M235 95 L262 95 L255 235 Q248 245 240 235 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      {/* wavy blade, built as a thick stroke to avoid self-intersecting fill */}
      <path
        d="M135 225 Q155 202 132 182 Q162 165 136 148 Q166 130 140 112 Q170 96 148 82"
        fill="none"
        stroke={steel}
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M135 225 Q155 202 132 182 Q162 165 136 148 Q166 130 140 112 Q170 96 148 82"
        fill="none"
        stroke={shade(steel, 0.3)}
        strokeWidth="2"
        opacity="0.6"
      />
      {/* guard */}
      <ellipse cx="148" cy="86" rx="20" ry="8" fill={gold} stroke={dark} strokeWidth="2" />
      {/* carved handle */}
      <path d="M138 82 Q128 62 145 48 Q165 42 174 58 Q176 74 158 80 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="155" cy="60" r="5" fill={gold} />
    </g>
  );
};

const Tempeh: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bean = "#D9C08A";
  return (
    <g>
      {/* cutting board */}
      <rect x="100" y="215" width="210" height="16" rx="4" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {/* tempeh block */}
      <rect x="130" y="140" width="150" height="80" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* visible soybeans */}
      {[
        [150, 160],
        [175, 175],
        [160, 195],
        [195, 155],
        [210, 185],
        [230, 165],
        [250, 200],
        [145, 205],
        [265, 150],
        [220, 205],
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="8" ry="6" fill={bean} stroke={dark} strokeWidth="1" transform={`rotate(${(i * 37) % 180} ${x} ${y})`} />
      ))}
    </g>
  );
};

const TanaToraja: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#6B4A2F";
  const skin = "#B08968";
  return (
    <g>
      {/* tongkonan house with dramatic curved roof */}
      <path d="M100 175 Q205 100 310 175 L300 190 Q205 130 110 190 Z" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="2" />
      <rect x="150" y="188" width="110" height="45" fill={wood} stroke={dark} strokeWidth="2" />
      {[165, 185, 205, 225, 245].map((x) => (
        <line key={x} x1={x} y1="188" x2={x} y2="233" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* tau-tau effigy beside it */}
      <circle cx="290" cy="205" r="13" fill={skin} />
      <path d="M277 216 Q290 210 303 216 L300 245 L280 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M280 220 Q268 225 265 240" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <path d="M300 220 Q312 225 315 240" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const RajaAmpat: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const coral1 = "#E8875A";
  const coral2 = "#F4A300";
  const fish1 = "#F4C430";
  return (
    <g>
      {/* coral formations */}
      <path d="M100 245 Q100 200 130 190 Q140 210 125 245 Z" fill={coral1} stroke={dark} strokeWidth="2" />
      <path d="M270 245 Q280 195 310 200 Q305 225 295 245 Z" fill={coral2} stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="240" rx="60" ry="16" fill="#0E7C7B" opacity="0.4" />
      {/* fish swimming */}
      {[
        [150, 150],
        [200, 120],
        [240, 160],
        [170, 190],
        [260, 130],
      ].map(([x, y], i) => {
        const c = i % 2 === 0 ? fish1 : accentColor;
        return (
          <g key={i}>
            <ellipse cx={x} cy={y} rx="14" ry="8" fill={c} stroke={dark} strokeWidth="1.5" />
            <polygon points={`${x - 13},${y} ${x - 22},${y - 6} ${x - 22},${y + 6}`} fill={c} stroke={dark} strokeWidth="1.5" />
          </g>
        );
      })}
    </g>
  );
};

const Sate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const coal = "#3A3A3A";
  const ember = "#E85D2A";
  const sauce = "#8B5A2B";
  return (
    <g>
      {/* coals */}
      {[110, 150, 190, 230, 270, 300].map((x, i) => (
        <ellipse key={x} cx={x} cy="235" rx="18" ry="9" fill={i % 2 === 0 ? coal : ember} opacity="0.85" />
      ))}
      {/* skewers with meat chunks */}
      {[140, 205, 270].map((x) => (
        <g key={x}>
          <line x1={x - 45} y1="195" x2={x + 45} y2="195" stroke="#C9A876" strokeWidth="4" strokeLinecap="round" />
          {[-30, -10, 10, 30].map((dx) => (
            <rect key={dx} x={x + dx - 9} y="182" width="18" height="26" rx="4" fill={accentColor} stroke={dark} strokeWidth="2" />
          ))}
        </g>
      ))}
      {/* peanut sauce bowl */}
      <ellipse cx="205" cy="150" rx="38" ry="14" fill={sauce} stroke={dark} strokeWidth="2" />
      <path d="M167 150 Q167 165 205 168 Q243 165 243 150" fill={sauce} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const PencakSilat: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const white = "#F5F0E6";
  return (
    <g>
      {/* fighter 1, low crouching stance */}
      <circle cx="160" cy="140" r="14" fill={skin} />
      <path d="M146 152 Q160 145 174 152 L180 200 L140 200 Z" fill={white} stroke={dark} strokeWidth="3" />
      <path d="M144 198 L120 230" stroke={white} strokeWidth="12" strokeLinecap="round" />
      <path d="M176 198 L205 218" stroke={white} strokeWidth="12" strokeLinecap="round" />
      <path d="M150 158 Q120 165 105 190" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M170 158 Q195 155 210 170" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* fighter 2, mirrored kick stance */}
      <circle cx="255" cy="135" r="14" fill={skin} />
      <path d="M241 147 Q255 140 269 147 L263 195 L227 190 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M231 192 L255 225" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
      <path d="M255 190 L290 175" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
      <path d="M245 153 Q270 158 285 145" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M265 153 Q285 165 275 190" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const Angklung: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bamboo = "#C9A876";
  const bambooDark = shade(bamboo, 0.3);
  return (
    <g>
      {/* frame */}
      <rect x="110" y="100" width="10" height="140" fill={bamboo} stroke={dark} strokeWidth="1.5" />
      <rect x="290" y="100" width="10" height="140" fill={bamboo} stroke={dark} strokeWidth="1.5" />
      <rect x="105" y="95" width="200" height="10" fill={bamboo} stroke={dark} strokeWidth="1.5" />
      {/* hanging bamboo tubes of varying length */}
      {[130, 160, 190, 220, 250, 280].map((x, i) => {
        const h = 70 + (i % 3) * 20;
        return (
          <g key={x}>
            <rect x={x - 8} y="110" width="16" height={h} rx="4" fill={bamboo} stroke={bambooDark} strokeWidth="2" />
            <line x1={x - 8} y1={110 + h * 0.4} x2={x + 8} y2={110 + h * 0.4} stroke={bambooDark} strokeWidth="1.5" opacity="0.6" />
          </g>
        );
      })}
    </g>
  );
};

const KawahIjen: IllustrationComponent = () => {
  const rock = "#2E2E2E";
  const dark = shade(rock, 0.3);
  const blue = "#3D8FE0";
  const blueLight = "#7CC8F0";
  return (
    <g>
      {/* crater rock silhouette */}
      <path d="M85 245 L130 190 L170 220 L205 160 L245 215 L280 185 L320 245 Z" fill={rock} stroke={dark} strokeWidth="2.5" />
      {/* cracks with blue flames */}
      {[
        [150, 205],
        [205, 175],
        [260, 200],
      ].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x - 6} ${y + 10} L${x} ${y} L${x + 6} ${y + 10}`} fill="none" stroke="#1A1A1A" strokeWidth="3" />
          <path d={`M${x} ${y - 2} Q${x - 8} ${y - 20} ${x} ${y - 38} Q${x + 8} ${y - 20} ${x} ${y - 2} Z`} fill={blue} opacity="0.85" />
          <path d={`M${x} ${y - 6} Q${x - 4} ${y - 18} ${x} ${y - 30} Q${x + 4} ${y - 18} ${x} ${y - 6} Z`} fill={blueLight} opacity="0.9" />
        </g>
      ))}
    </g>
  );
};

export const indonesiaIllustrations: Record<string, IllustrationDefinition> = {
  borobudur: { component: Borobudur },
  "wayang-kulit": { component: WayangKulit },
  "dragon-komodo": { component: DragonKomodo },
  batik: { component: Batik },
  archipielago: { component: Archipielago },
  gamelan: { component: Gamelan },
  "anillo-de-fuego": { component: AnilloDeFuego },
  rendang: { component: Rendang },
  "bali-hindu": { component: BaliHindu },
  "bulu-tangkis": { component: BuluTangkis },
  prambanan: { component: Prambanan },
  orangutanes: { component: Orangutanes },
  kris: { component: Kris },
  tempeh: { component: Tempeh },
  "tana-toraja": { component: TanaToraja },
  "raja-ampat": { component: RajaAmpat },
  sate: { component: Sate },
  "pencak-silat": { component: PencakSilat },
  angklung: { component: Angklung },
  "kawah-ijen": { component: KawahIjen },
};
