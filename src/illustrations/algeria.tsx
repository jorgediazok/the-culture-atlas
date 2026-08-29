import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MayorPaisAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M90 245 Q140 190 190 240 Q230 195 270 238 Q300 210 320 235 L320 250 L90 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M90 235 Q145 205 195 232 Q235 205 275 230" fill="none" stroke={light} strokeWidth="3" opacity="0.7" />
      <circle cx="270" cy="120" r="30" fill={light} opacity="0.7" />
    </g>
  );
};

const CasbahArgel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 245 Q205 235 320 245 L320 250 L90 250 Z" fill={water} />
      {[[110, 235, 34, 44], [150, 220, 40, 60], [195, 205, 36, 75], [235, 190, 38, 90], [278, 200, 32, 80]].map(([x, y, w, h], i) => (
        <rect key={x as number} x={(x as number) - (w as number) / 2} y={y} width={w} height={h} fill={i % 2 === 0 ? "#fff" : tint(accentColor, 0.6)} stroke={dark} strokeWidth="2" />
      ))}
      {[130, 175, 215, 255, 295].map((x) => (
        <rect key={x} x={x - 4} y="215" width="8" height="8" fill={dark} opacity="0.4" />
      ))}
    </g>
  );
};

const TassiliNajjer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rock = "#C4A66B";
  return (
    <g>
      <path d="M100 240 L110 130 L320 130 L310 240 Z" fill={rock} stroke={shade(rock, 0.3)} strokeWidth="3" />
      {/* rock painting of an elephant */}
      <path d="M150 210 Q150 185 175 185 Q195 185 195 205 L195 225 L150 225 Z" fill="none" stroke={accentColor} strokeWidth="4" />
      <path d="M150 195 Q140 205 145 220" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      <line x1="160" y1="225" x2="160" y2="235" stroke={accentColor} strokeWidth="4" />
      <line x1="185" y1="225" x2="185" y2="235" stroke={accentColor} strokeWidth="4" />
      {/* giraffe */}
      <path d="M245 235 L248 175 Q248 165 258 165 Q262 175 258 185 L255 235" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <line x1="258" y1="165" x2="252" y2="150" stroke={dark} strokeWidth="3" />
      <line x1="270" y1="235" x2="272" y2="200" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const TuaregArgelia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const indigo = "#1D3F6E";
  const skin = "#C68A5A";
  return (
    <g>
      <path d="M175 235 Q170 190 205 175 Q240 190 235 235 Z" fill={indigo} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="185" rx="26" ry="30" fill={indigo} stroke={dark} strokeWidth="2.5" />
      <path d="M182 188 Q205 178 228 188 L226 200 Q205 195 184 200 Z" fill={skin} />
      <circle cx="196" cy="192" r="3" fill="#1A1A1A" />
      <circle cx="214" cy="192" r="3" fill="#1A1A1A" />
      <path d="M175 220 Q160 235 165 250" fill="none" stroke={indigo} strokeWidth="8" strokeLinecap="round" opacity="0.8" />
    </g>
  );
};

const RaiMusica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68A5A";
  return (
    <g>
      <circle cx="175" cy="150" r="16" fill={skin} />
      <path d="M160 165 Q175 158 190 165 L188 220 L162 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="175" cy="220" rx="16" ry="8" fill={dark} />
      <rect x="171" y="228" width="8" height="20" fill="#B0B8BF" />
      <ellipse cx="175" cy="252" rx="20" ry="6" fill="#B0B8BF" />
      {/* saxophone beside */}
      <path d="M250 165 L255 220 Q255 235 275 235 Q290 235 288 220 Q286 205 268 200 L262 165 Z" fill="#D4A017" stroke={shade("#D4A017", 0.3)} strokeWidth="2.5" />
      {[175, 190, 205].map((y) => (
        <circle key={y} cx="260" cy={y} r="3" fill={shade("#D4A017", 0.3)} />
      ))}
    </g>
  );
};

const GuerraIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const red = "#C1272D";
  return (
    <g>
      <rect x="105" y="150" width="90" height="80" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="150" width="90" height="80" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M225 190 L235 180 L245 190 L255 175 L265 190" fill="none" stroke={red} strokeWidth="4" strokeLinecap="round" />
      <circle cx="245" cy="185" r="8" fill={red} />
      <line x1="105" y1="145" x2="105" y2="235" stroke={dark} strokeWidth="4" />
      {/* dove */}
      <path d="M175 115 Q185 105 200 110 Q195 118 205 122 Q190 128 178 122 Q170 120 175 115 Z" fill="#fff" stroke={dark} strokeWidth="2" />
      <path d="M175 115 L165 112" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ValleMzab: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mud = "#B8860B";
  return (
    <g>
      {[0, 1, 2, 3].map((ring) => (
        <circle key={ring} cx="205" cy="185" r={90 - ring * 20} fill="none" stroke={mud} strokeWidth="14" opacity={0.9 - ring * 0.1} />
      ))}
      <rect x="185" y="140" width="40" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="192" y="128" width="26" height="16" fill={dark} />
    </g>
  );
};

const GasArgelia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      {[140, 205, 270].map((x, i) => (
        <g key={x}>
          <rect x={x - 8} y={140 + i * 6} width="16" height={100 - i * 6} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x} ${135 + i * 6} Q${x - 8} ${118 + i * 6} ${x} ${100 + i * 6} Q${x + 8} ${118 + i * 6} ${x} ${135 + i * 6} Z`} fill={flame} />
        </g>
      ))}
      <path d="M105 240 Q205 230 320 240" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const CouscousArgelia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const grain = "#F5F0E6";
  return (
    <g>
      <ellipse cx="205" cy="215" rx="90" ry="24" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2.5" />
      <ellipse cx="205" cy="208" rx="75" ry="18" fill={grain} stroke={dark} strokeWidth="2" />
      {[[175, 200], [205, 195], [235, 202], [190, 210], [220, 212]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="8" fill={i % 2 === 0 ? accentColor : "#4A8F4E"} />
      ))}
      <path d="M165 195 Q170 175 190 175 M245 195 Q240 175 220 175" fill="none" stroke="#B0AFA8" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const KabiliaAmazigh: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const stone = "#8B8378";
  return (
    <g>
      <polygon points="90,240 205,110 320,240" fill={accentColor} opacity="0.4" />
      {[[140, 215, 26, 34], [180, 200, 30, 46], [225, 210, 28, 38], [265, 220, 24, 28]].map(([x, y, w, h], i) => (
        <rect key={x as number} x={(x as number) - (w as number) / 2} y={y} width={w} height={h} fill={i % 2 === 0 ? stone : dark} stroke={shade(stone, 0.3)} strokeWidth="2" />
      ))}
      {[140, 180, 225].map((x) => (
        <path key={x} d={`M${x - 15} ${x === 180 ? 200 : x === 140 ? 215 : 210} L${x} ${(x === 180 ? 200 : x === 140 ? 215 : 210) - 14} L${x + 15} ${x === 180 ? 200 : x === 140 ? 215 : 210}`} fill={dark} />
      ))}
    </g>
  );
};

const ConstantinaPuentes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gorge = "#3A3A42";
  const light = tint(accentColor, 0.4);
  return (
    <g>
      {/* left cliff */}
      <path d="M90 250 L90 160 L150 130 L175 165 L170 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* right cliff */}
      <path d="M235 250 L230 160 L270 120 L320 150 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* gorge between the two halves */}
      <path d="M170 250 L175 165 L230 160 L235 250 Z" fill={gorge} />
      {/* houses on left cliff */}
      <rect x="100" y="150" width="20" height="26" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="125" y="140" width="18" height="30" fill={light} stroke={dark} strokeWidth="2" />
      {/* houses on right cliff */}
      <rect x="245" y="135" width="20" height="28" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="275" y="115" width="20" height="30" fill={light} stroke={dark} strokeWidth="2" />
      {/* suspension bridge deck + pylon + cables */}
      <line x1="172" y1="195" x2="233" y2="185" stroke={dark} strokeWidth="5" />
      <line x1="202" y1="130" x2="202" y2="195" stroke={dark} strokeWidth="4" />
      <line x1="172" y1="195" x2="202" y2="140" stroke={dark} strokeWidth="2" />
      <line x1="233" y1="185" x2="202" y2="140" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const TimgadRomana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <rect x="90" y="230" width="230" height="18" fill={dark} opacity="0.25" />
      {/* triumphal arch */}
      <rect x="172" y="120" width="18" height="110" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="242" y="120" width="18" height="110" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M172 120 Q206 92 260 120 L260 138 Q206 112 172 138 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="196" y="150" width="22" height="80" fill="none" stroke={dark} strokeWidth="2.5" />
      {/* broken columns flanking the arch */}
      <rect x="109" y="150" width="12" height="80" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="134" y="170" width="12" height="60" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="289" y="140" width="12" height="90" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="309" y="165" width="12" height="65" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const EmirAbdelkader: IllustrationComponent = ({ accentColor }) => {
  const horseColor = "#5C4433";
  const dark = shade(horseColor, 0.3);
  const skin = "#C68A5A";
  const trim = shade(accentColor, 0.4);
  return (
    <g>
      {/* neck+head, tail, and legs drawn first so the body absorbs the seams */}
      <path d="M245 195 Q275 175 285 150 Q292 145 288 155 Q278 180 255 200 Z" fill={horseColor} stroke={dark} strokeWidth="2.5" />
      <path d="M155 200 Q125 210 120 235" fill="none" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      <line x1="165" y1="210" x2="158" y2="252" stroke={horseColor} strokeWidth="8" strokeLinecap="round" />
      <line x1="188" y1="212" x2="196" y2="254" stroke={horseColor} strokeWidth="8" strokeLinecap="round" />
      <line x1="212" y1="212" x2="204" y2="254" stroke={horseColor} strokeWidth="8" strokeLinecap="round" />
      <line x1="235" y1="210" x2="244" y2="252" stroke={horseColor} strokeWidth="8" strokeLinecap="round" />
      {/* body, painted over the neck/tail/leg attachment points */}
      <ellipse cx="200" cy="205" rx="55" ry="26" fill={horseColor} stroke={dark} strokeWidth="2.5" />
      <path d="M250 180 Q262 163 256 148" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      {/* rider torso + robe */}
      <path d="M183 195 Q200 135 219 195 L214 212 Q200 204 188 212 Z" fill={accentColor} stroke={trim} strokeWidth="2.5" />
      {/* rider head + turban */}
      <circle cx="201" cy="160" r="13" fill={skin} />
      <path d="M187 158 Q201 138 215 158 Q215 147 201 144 Q187 147 187 158 Z" fill="#fff" stroke={trim} strokeWidth="2" />
      {/* raised arm + sword */}
      <path d="M216 190 Q236 168 246 142" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="246" y1="142" x2="262" y2="104" stroke="#D8D8D8" strokeWidth="4" strokeLinecap="round" />
      <line x1="241" y1="137" x2="251" y2="147" stroke={trim} strokeWidth="4" />
    </g>
  );
};

const JoyeriaAthYenni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const coral = "#C1440E";
  const enamel = "#2E7D5B";
  // 8 points precomputed offline on a radius-55 circle centered at (205,175), 45° apart.
  const CORAL_BEADS: [number, number][] = [
    [205, 120], [260, 175], [205, 230], [150, 175],
    [244, 136], [244, 214], [166, 136], [166, 214],
  ];
  return (
    <g>
      <circle cx="205" cy="175" r="55" fill={accentColor} stroke={dark} strokeWidth="4" />
      <circle cx="205" cy="175" r="38" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="175" x2="205" y2="120" stroke={dark} strokeWidth="2.5" transform="rotate(0 205 175)" />
      <line x1="205" y1="175" x2="205" y2="120" stroke={dark} strokeWidth="2.5" transform="rotate(45 205 175)" />
      <line x1="205" y1="175" x2="205" y2="120" stroke={dark} strokeWidth="2.5" transform="rotate(90 205 175)" />
      <line x1="205" y1="175" x2="205" y2="120" stroke={dark} strokeWidth="2.5" transform="rotate(135 205 175)" />
      {CORAL_BEADS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill={coral} stroke={shade(coral, 0.3)} strokeWidth="1.5" />
      ))}
      <circle cx="205" cy="175" r="16" fill={enamel} stroke={dark} strokeWidth="2.5" />
      <path d="M195 226 L205 250 L215 226" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const DatilesDegletNour: IllustrationComponent = ({ accentColor }) => {
  const trunk = "#8B6B4A";
  const dark = shade(trunk, 0.35);
  const leaf = shade(accentColor, 0.15);
  // Frond tip offsets from the crown point, precomputed by hand (not trig at render time).
  const FRONDS: [number, number][] = [
    [-70, -10], [-40, -35], [0, -45], [40, -35], [70, -10],
  ];
  return (
    <g>
      <path d="M195 250 Q198 180 205 120 Q212 180 215 250 Z" fill={trunk} stroke={dark} strokeWidth="2.5" />
      <line x1="197" y1="160" x2="213" y2="160" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="197" y1="190" x2="213" y2="190" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="197" y1="220" x2="213" y2="220" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {FRONDS.map(([dx, dy]) => (
        <path key={`${dx}-${dy}`} d={`M205 115 Q${205 + dx * 0.6} ${115 + dy * 0.6} ${205 + dx} ${115 + dy}`} fill="none" stroke={leaf} strokeWidth="7" strokeLinecap="round" />
      ))}
      <path d="M205 150 Q225 165 220 190" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="212" cy="165" r="8" fill={accentColor} stroke={shade(accentColor, 0.35)} strokeWidth="1.5" />
      <circle cx="222" cy="172" r="8" fill={accentColor} stroke={shade(accentColor, 0.35)} strokeWidth="1.5" />
      <circle cx="214" cy="180" r="8" fill={accentColor} stroke={shade(accentColor, 0.35)} strokeWidth="1.5" />
      <circle cx="224" cy="186" r="8" fill={accentColor} stroke={shade(accentColor, 0.35)} strokeWidth="1.5" />
      <circle cx="210" cy="192" r="8" fill={accentColor} stroke={shade(accentColor, 0.35)} strokeWidth="1.5" />
      <ellipse cx="205" cy="252" rx="90" ry="10" fill={tint(accentColor, 0.6)} opacity="0.5" />
    </g>
  );
};

export const algeriaIllustrations: Record<string, IllustrationDefinition> = {
  "mayor-pais-africa": { component: MayorPaisAfrica },
  "casbah-argel": { component: CasbahArgel },
  "tassili-najjer": { component: TassiliNajjer },
  "tuareg-argelia": { component: TuaregArgelia },
  "rai-musica": { component: RaiMusica },
  "guerra-independencia": { component: GuerraIndependencia },
  "valle-mzab": { component: ValleMzab },
  "gas-argelia": { component: GasArgelia },
  "couscous-argelia": { component: CouscousArgelia },
  "kabilia-amazigh": { component: KabiliaAmazigh },
  "constantina-puentes": { component: ConstantinaPuentes },
  "timgad-romana": { component: TimgadRomana },
  "emir-abdelkader": { component: EmirAbdelkader },
  "joyeria-ath-yenni": { component: JoyeriaAthYenni },
  "datiles-deglet-nour": { component: DatilesDegletNour },
};
