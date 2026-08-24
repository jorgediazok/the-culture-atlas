import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Cafe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* steaming cup on a saucer */}
      <ellipse cx="180" cy="222" rx="52" ry="10" fill={dark} />
      <path d="M148 165 h64 v40 a32 28 0 0 1 -64 0 Z" fill={accentColor} />
      <path d="M212 178 a18 16 0 0 1 0 32 h-8 v-32 Z" fill={dark} />
      <path d="M165 150 q7 -14 0 -24" fill="none" stroke={light} strokeWidth="5" strokeLinecap="round" opacity="0.75" />
      <path d="M185 150 q7 -14 0 -24" fill="none" stroke={light} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      {/* roasted beans beside the cup */}
      {[[260, 165], [285, 195], [255, 210]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="16" ry="11" fill={dark} transform={`rotate(${x % 3 === 0 ? 20 : -15} ${x} ${y})`} />
          <path d={`M${x} ${y - 9} Q${x} ${y} ${x} ${y + 9}`} stroke={light} strokeWidth="2" fill="none" />
        </g>
      ))}
    </g>
  );
};

const GarciaMarquez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  const yellow = "#F4C430";
  return (
    <g>
      {/* seated man with a mustache */}
      <circle cx="165" cy="140" r="17" fill={skin} />
      <path d="M156 148 Q165 154 174 148" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M148 160 Q165 150 182 160 L178 210 L152 210 Z" fill={accentColor} />
      {/* typewriter */}
      <rect x="195" y="185" width="90" height="34" rx="4" fill={dark} />
      <rect x="205" y="170" width="70" height="20" rx="3" fill={dark} />
      {[212, 226, 240, 254, 268].map((x) => (
        <circle key={x} cx={x} cy="178" r="4" fill={light} />
      ))}
      <rect x="230" y="160" width="20" height="12" rx="2" fill={light} />
      {/* yellow butterflies */}
      <g transform="translate(230,110) rotate(-10)">
        <path d="M0 0 Q-14 -14 -16 -2 Q-14 10 0 4 Z" fill={yellow} />
        <path d="M0 0 Q14 -14 16 -2 Q14 10 0 4 Z" fill={yellow} />
      </g>
      <g transform="translate(270,135) rotate(15)">
        <path d="M0 0 Q-10 -10 -11 -1 Q-10 7 0 3 Z" fill={yellow} opacity="0.85" />
        <path d="M0 0 Q10 -10 11 -1 Q10 7 0 3 Z" fill={yellow} opacity="0.85" />
      </g>
      <g transform="translate(120,110) rotate(-25)">
        <path d="M0 0 Q-9 -9 -10 -1 Q-9 6 0 3 Z" fill={yellow} opacity="0.8" />
        <path d="M0 0 Q9 -9 10 -1 Q9 6 0 3 Z" fill={yellow} opacity="0.8" />
      </g>
    </g>
  );
};

const Vallenato: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const skin = "#D9A46A";
  return (
    <g>
      {/* musician playing the accordion */}
      <circle cx="150" cy="130" r="16" fill={skin} />
      <path d="M134 146 Q150 138 166 146 L162 190 L138 190 Z" fill={accentColor} />
      <rect x="160" y="150" width="16" height="46" fill={dark} />
      {[157, 166, 175, 184, 193].map((x) => (
        <rect key={x} x={x} y="148" width="7" height="50" fill={x % 2 === 0 ? light : dark} />
      ))}
      <rect x="196" y="150" width="16" height="46" fill={dark} />
      <path d="M138 152 L162 160" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M162 190 L204 190" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* caja vallenata drum beside him */}
      <path d="M240 170 L280 170 L272 232 L248 232 Z" fill={dark} />
      <ellipse cx="260" cy="170" rx="20" ry="9" fill={light} stroke={shade(light, 0.3)} strokeWidth="2" />
    </g>
  );
};

const Shakira: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const skin = "#D9A46A";
  return (
    <g>
      {/* long wavy hair flowing on both sides */}
      <path d="M180 130 Q150 150 158 190 Q164 220 150 236 Q176 232 178 200" fill={dark} />
      <path d="M220 130 Q250 150 242 190 Q236 220 250 236 Q224 232 222 200" fill={dark} />
      <circle cx="200" cy="140" r="26" fill={skin} />
      {/* torso and raised arm holding the mic */}
      <path d="M178 168 Q200 158 222 168 L216 220 L184 220 Z" fill={accentColor} />
      <path d="M212 172 Q232 168 238 142" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <circle cx="240" cy="132" r="10" fill={light} stroke={dark} strokeWidth="2" />
      <line x1="240" y1="142" x2="240" y2="156" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const Cartagena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const blue = "#3D8FB0";
  const pink = "#E88CA8";
  return (
    <g>
      {/* colonial houses behind the wall */}
      <rect x="110" y="120" width="40" height="70" fill={accentColor} />
      <polygon points="106,120 130,98 154,120" fill={dark} />
      <rect x="155" y="105" width="44" height="85" fill={pink} />
      <rect x="204" y="128" width="40" height="62" fill={light} />
      <polygon points="200,128 224,105 248,128" fill={dark} />
      <rect x="249" y="115" width="42" height="75" fill={blue} />
      {[123, 168, 218, 264].map((x) => (
        <rect key={x} x={x} y="145" width="14" height="20" rx="2" fill={dark} opacity="0.6" />
      ))}
      {/* fortified stone wall along the front, with battlements */}
      <rect x="90" y="205" width="230" height="26" fill={shade(accentColor, 0.55)} />
      {[100, 130, 160, 190, 220, 250, 280].map((x) => (
        <rect key={x} x={x} y="193" width="18" height="14" fill={shade(accentColor, 0.55)} />
      ))}
      {/* sea beyond */}
      <rect x="90" y="231" width="230" height="10" fill={blue} opacity="0.6" />
    </g>
  );
};

const Esmeraldas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  const skin = "#D9A46A";
  return (
    <g>
      {/* open hand, palm up */}
      <path d="M140 220 Q135 175 155 165 L155 145 Q155 135 163 135 Q171 135 171 145 L171 168 L175 140 Q175 130 183 130 Q191 130 191 140 L191 168 L195 142 Q195 132 203 132 Q211 132 211 142 L211 170 L218 150 Q220 141 227 144 Q234 147 231 156 L220 195 Q225 220 205 232 L160 232 Q145 228 140 220 Z" fill={skin} />
      {/* cut emerald resting on the palm */}
      <polygon points="182,150 205,162 200,192 164,192 159,162" fill={accentColor} stroke={dark} strokeWidth="3" strokeLinejoin="round" />
      <polygon points="182,150 205,162 182,175 159,162" fill={light} opacity="0.8" />
      <line x1="182" y1="150" x2="182" y2="175" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      {/* sparkle */}
      <path d="M225 120 L229 132 L241 136 L229 140 L225 152 L221 140 L209 136 L221 132 Z" fill={light} />
    </g>
  );
};

const CarnavalBarranquilla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#F4C430";
  const skin = "#D9A46A";
  const wedges = [0, 45, 90, 135, 180, 225, 270, 315];
  const wedgeColors = [accentColor, gold, dark];
  return (
    <g>
      {/* wide flared skirt, twirling — alternating wedges to sell the spin */}
      {wedges.map((deg, i) => (
        <path
          key={deg}
          d="M205 205 L205 120 A85 85 0 0 1 265 148 Z"
          fill={wedgeColors[i % wedgeColors.length]}
          transform={`rotate(${deg} 205 205)`}
        />
      ))}
      {/* torso sitting above the skirt, arms out mid-twirl */}
      <path d="M188 168 Q205 156 222 168 L218 208 L192 208 Z" fill={dark} />
      <circle cx="205" cy="148" r="18" fill={skin} />
      <path d="M190 172 Q160 168 148 186" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M220 172 Q250 168 262 186" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const Ciclismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const slope = shade(accentColor, 0.2);
  const skin = "#D9A46A";
  return (
    <g>
      {/* steep mountain slope */}
      <polygon points="90,240 300,240 300,220 150,110 90,175" fill={slope} opacity="0.5" />
      {/* bicycle */}
      <circle cx="180" cy="205" r="26" fill="none" stroke={dark} strokeWidth="6" />
      <circle cx="248" cy="205" r="26" fill="none" stroke={dark} strokeWidth="6" />
      <path d="M180 205 L215 160 L248 205 M215 160 L205 205 M215 160 L200 148" stroke={dark} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M192 145 h18" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      {/* rider leaning forward in the leader's jersey */}
      <circle cx="205" cy="122" r="13" fill={skin} />
      <path d="M200 133 Q220 140 232 165 L205 165 Q192 148 200 133 Z" fill={accentColor} />
      <path d="M205 150 L200 148" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M228 163 L248 205" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const Biodiversidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const pink = "#E85D8A";
  return (
    <g>
      {/* tropical flower */}
      <circle cx="160" cy="200" r="14" fill="#F4C430" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse key={deg} cx="160" cy="172" rx="11" ry="22" fill={pink} transform={`rotate(${deg} 160 200)`} />
      ))}
      {/* hovering hummingbird */}
      <path d="M230 150 Q255 145 260 132" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="232" cy="160" rx="24" ry="14" fill={accentColor} transform="rotate(-15 232 160)" />
      <circle cx="205" cy="152" r="10" fill={light} />
      <path d="M195 150 L172 146" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M240 155 Q265 135 280 145 Q262 150 246 165 Z" fill={dark} opacity="0.85" />
      <path d="M212 170 Q206 190 216 200" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const Arepa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  const filling = "#F4E3C1";
  return (
    <g>
      {/* split arepa halves with the filling showing between them */}
      <path d="M110 175 a70 55 0 0 1 90 -50 Z" fill={dark} transform="translate(-6,10)" />
      <ellipse cx="150" cy="178" rx="58" ry="42" fill={accentColor} />
      <ellipse cx="150" cy="178" rx="58" ry="42" fill="none" stroke={dark} strokeWidth="3" />
      <ellipse cx="250" cy="178" rx="58" ry="42" fill={light} />
      <ellipse cx="250" cy="178" rx="58" ry="42" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M195 150 Q200 178 195 206 Q205 178 205 150 Q200 178 195 150" fill={filling} />
      <ellipse cx="200" cy="178" rx="10" ry="30" fill={filling} />
    </g>
  );
};

const ElDorado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  const blue = "#3D8FB0";
  return (
    <g>
      {/* hazy mountains behind the lake */}
      <polygon points="95,165 165,95 235,165" fill={dark} opacity="0.2" />
      <polygon points="180,170 240,110 300,170" fill={dark} opacity="0.15" />
      {/* lake water */}
      <rect x="90" y="196" width="230" height="42" fill={blue} opacity="0.7" />
      <ellipse cx="200" cy="196" rx="115" ry="8" fill={blue} />
      {/* reed raft on the water */}
      <rect x="138" y="186" width="124" height="12" rx="5" fill={dark} />
      {[150, 175, 200, 225, 250].map((x) => (
        <line key={x} x1={x} y1="186" x2={x} y2="198" stroke={shade(dark, 0.3)} strokeWidth="2" />
      ))}
      {/* the gilded chief standing on the raft */}
      <path d="M180 140 Q200 130 220 140 L214 194 L186 194 Z" fill={accentColor} />
      <circle cx="200" cy="124" r="16" fill={skin} />
      {/* feathered headdress */}
      <polygon points="200,90 194,112 206,112" fill={light} transform="rotate(-18 200 108)" />
      <polygon points="200,86 194,112 206,112" fill={light} />
      <polygon points="200,90 194,112 206,112" fill={light} transform="rotate(18 200 108)" />
      {/* arm raised, about to throw a gold piece */}
      <path d="M204 152 Q234 140 246 118" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <polygon points="246,108 253,116 246,124 239,116" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* other arm resting along the body */}
      <path d="M192 154 Q172 165 176 186" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* gold offerings sinking into the water */}
      <polygon points="150,208 155,214 150,220 145,214" fill={accentColor} opacity="0.85" />
      <polygon points="255,215 260,221 255,227 250,221" fill={accentColor} opacity="0.7" />
      <circle cx="200" cy="222" r="5" fill={light} opacity="0.8" />
    </g>
  );
};

const CiudadPerdida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const stone = "#8C8577";
  const stoneDark = shade(stone, 0.35);
  const steps: [number, number][] = [
    [270, 235],
    [255, 222],
    [240, 209],
    [228, 196],
    [218, 183],
    [210, 170],
    [204, 157],
  ];
  return (
    <g>
      {/* jungle mountain silhouette */}
      <polygon points="95,245 140,120 200,90 260,140 305,245" fill={dark} opacity="0.55" />
      {/* jungle canopy at the base */}
      <circle cx="115" cy="235" r="26" fill={accentColor} opacity="0.8" />
      <circle cx="150" cy="242" r="22" fill={accentColor} opacity="0.7" />
      <circle cx="285" cy="238" r="24" fill={accentColor} opacity="0.75" />
      {/* stone staircase climbing through the mist */}
      {steps.map(([x, y], i) => (
        <rect key={i} x={x - 14} y={y - 6} width="28" height="10" rx="2" fill={stoneDark} />
      ))}
      {/* circular stone terraces stepping up the slope */}
      <ellipse cx="175" cy="205" rx="34" ry="14" fill="none" stroke={stone} strokeWidth="5" />
      <ellipse cx="188" cy="175" rx="27" ry="11" fill="none" stroke={stone} strokeWidth="5" />
      <ellipse cx="198" cy="148" rx="20" ry="8" fill="none" stroke={stone} strokeWidth="5" />
      <ellipse cx="205" cy="126" rx="14" ry="6" fill="none" stroke={stone} strokeWidth="4" />
      {/* drifting mist */}
      <ellipse cx="230" cy="180" rx="55" ry="16" fill="#FFFFFF" opacity="0.25" />
      <ellipse cx="200" cy="210" rx="65" ry="18" fill="#FFFFFF" opacity="0.2" />
    </g>
  );
};

const Botero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  return (
    <g>
      {/* voluminous woman */}
      <ellipse cx="185" cy="185" rx="52" ry="58" fill={accentColor} />
      <circle cx="185" cy="112" r="30" fill={skin} />
      <ellipse cx="160" cy="170" rx="16" ry="34" fill={skin} />
      <ellipse cx="155" cy="200" rx="16" ry="14" fill={skin} />
      {/* rounded plump cat beside her */}
      <ellipse cx="275" cy="215" rx="34" ry="26" fill={dark} />
      <circle cx="290" cy="178" r="18" fill={dark} />
      <polygon points="280,168 284,150 292,168" fill={dark} />
      <polygon points="296,168 300,150 304,168" fill={dark} />
      <path d="M308 220 Q330 210 326 190" fill="none" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <circle cx="284" cy="176" r="3" fill={light} />
      <circle cx="296" cy="176" r="3" fill={light} />
    </g>
  );
};

const Comuna13: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const muralColors = [accentColor, light, "#2A9D8F", "#F4C430", dark];
  const houses: { x: number; y: number; w: number; h: number; roofColor: string }[] = [
    { x: 95, y: 195, w: 42, h: 50, roofColor: dark },
    { x: 140, y: 165, w: 42, h: 60, roofColor: light },
    { x: 185, y: 135, w: 42, h: 70, roofColor: dark },
    { x: 230, y: 105, w: 42, h: 80, roofColor: light },
    { x: 275, y: 85, w: 40, h: 78, roofColor: dark },
  ];
  return (
    <g>
      {/* colorful houses stacked up the hillside */}
      {houses.map((h, i) => (
        <g key={i}>
          <rect x={h.x} y={h.y} width={h.w} height={h.h} fill={muralColors[i % muralColors.length]} />
          <polygon
            points={`${h.x - 4},${h.y} ${h.x + h.w / 2},${h.y - 14} ${h.x + h.w + 4},${h.y}`}
            fill={h.roofColor}
          />
          <rect x={h.x + h.w / 2 - 6} y={h.y + h.h - 20} width="12" height="20" fill={shade(accentColor, 0.55)} />
        </g>
      ))}
      {/* outdoor escalator climbing the hillside */}
      <path d="M100 245 L305 90" stroke={shade(accentColor, 0.6)} strokeWidth="16" strokeLinecap="round" />
      <path d="M92 236 L297 81" stroke={dark} strokeWidth="3" fill="none" />
    </g>
  );
};

const CanoCristales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const yellow = "#E9C46A";
  const green = "#588157";
  const black = "#2B2B2B";
  return (
    <g>
      {/* winding river bed, sandy banks around a red-tinted current */}
      <path
        d="M100 90 Q160 120 130 160 Q100 195 160 215 Q220 235 260 210 Q300 190 300 150"
        fill="none"
        stroke={yellow}
        strokeWidth="46"
        strokeLinecap="round"
      />
      <path
        d="M100 90 Q160 120 130 160 Q100 195 160 215 Q220 235 260 210 Q300 190 300 150"
        fill="none"
        stroke={accentColor}
        strokeWidth="30"
        strokeLinecap="round"
      />
      {/* patches of red aquatic plants along the bed */}
      <ellipse cx="135" cy="140" rx="16" ry="22" fill={dark} transform="rotate(20 135 140)" />
      <ellipse cx="150" cy="205" rx="18" ry="14" fill={dark} />
      <ellipse cx="245" cy="205" rx="20" ry="15" fill={dark} />
      {/* green algae patches */}
      <ellipse cx="190" cy="225" rx="14" ry="10" fill={green} opacity="0.85" />
      <ellipse cx="280" cy="165" rx="12" ry="16" fill={green} opacity="0.8" />
      {/* black rocks along the banks */}
      <ellipse cx="105" cy="100" rx="10" ry="8" fill={black} />
      <ellipse cx="285" cy="135" rx="12" ry="9" fill={black} />
      <ellipse cx="230" cy="235" rx="11" ry="8" fill={black} />
    </g>
  );
};

const Wayuu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  const stripeColors = [accentColor, "#2A9D8F", "#F4C430", dark];
  return (
    <g>
      {/* seated woman weaving */}
      <path d="M150 165 Q170 150 190 165 L184 230 L156 230 Z" fill={dark} />
      <circle cx="170" cy="140" r="17" fill={skin} />
      <path d="M160 172 Q135 178 128 202" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M180 172 Q206 176 214 198" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* mochila bag taking shape in her hands, patterned with kanaas stripes */}
      <path d="M165 175 L225 175 L221 225 Q195 233 169 225 Z" fill={accentColor} />
      {stripeColors.map((c, i) => (
        <rect key={i} x="169" y={181 + i * 10} width="52" height="6" fill={c} opacity="0.9" />
      ))}
      {/* crochet hook and yarn ball */}
      <circle cx="120" cy="210" r="12" fill={light} stroke={dark} strokeWidth="2" />
      <line x1="214" y1="198" x2="228" y2="188" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const Tejo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  const clay = "#8C5A3B";
  return (
    <g>
      {/* standing figure mid-throw */}
      <path d="M112 165 Q128 152 144 165 L138 220 L118 220 Z" fill={accentColor} />
      <circle cx="128" cy="140" r="16" fill={skin} />
      <path d="M132 172 Q160 158 172 138" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M124 175 Q104 190 110 215" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* legs mid-stance */}
      <path d="M122 214 L108 250" stroke={dark} strokeWidth="10" strokeLinecap="round" />
      <path d="M134 214 L148 250" stroke={dark} strokeWidth="10" strokeLinecap="round" />
      {/* the tejo disc in flight */}
      <ellipse cx="188" cy="122" rx="10" ry="6" fill={dark} />
      {/* clay target board with the bocín ring */}
      <path d="M225 250 L245 130 L305 130 L305 250 Z" fill={clay} />
      <ellipse cx="270" cy="150" rx="16" ry="8" fill="none" stroke={light} strokeWidth="5" />
      {/* exploding mecha of gunpowder */}
      <polygon
        points="270,150 280,138 286,148 296,140 292,156 302,158 288,166 292,178 278,168 272,180 268,166 256,168 264,154"
        fill="#F4C430"
      />
    </g>
  );
};

const SalsaCali: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  return (
    <g>
      {/* woman's dress flaring mid-spin */}
      <path d="M150 165 Q110 175 118 215 Q150 235 182 215 Q188 175 150 165 Z" fill={accentColor} />
      <path d="M150 168 Q130 178 132 208 Q150 220 168 208 Q170 178 150 168 Z" fill={light} opacity="0.85" />
      <circle cx="150" cy="142" r="15" fill={skin} />
      <path d="M136 155 Q150 148 164 155 L160 178 L140 178 Z" fill={dark} />
      <path d="M148 165 Q170 158 182 138" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      {/* man beside her, legs bent mid-step */}
      <circle cx="245" cy="140" r="15" fill={skin} />
      <path d="M231 153 Q245 146 259 153 L255 195 L235 195 Z" fill={dark} />
      <path d="M245 190 Q222 205 228 240" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M249 190 Q276 202 270 236" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M247 158 Q205 150 192 132" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const Cumbia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  const flame = "#F4C430";
  return (
    <g>
      {/* woman in a wide pollera skirt, candles raised */}
      <path d="M150 195 Q108 205 112 240 Q150 255 188 240 Q192 205 150 195 Z" fill={accentColor} />
      <circle cx="150" cy="150" r="15" fill={skin} />
      <path d="M138 162 Q150 156 162 162 L158 198 L142 198 Z" fill={dark} />
      <path d="M144 168 Q126 152 128 128" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <rect x="122" y="112" width="6" height="20" fill="#F4E3C1" />
      <path d="M125 112 Q128 104 131 112" fill={flame} />
      {/* man playing the tambora drum */}
      <circle cx="245" cy="150" r="15" fill={skin} />
      <path d="M233 162 Q245 156 257 162 L253 205 L237 205 Z" fill={light} />
      <rect x="255" y="180" width="46" height="34" rx="6" fill={dark} />
      <ellipse cx="255" cy="197" rx="8" ry="17" fill={shade(dark, 0.3)} />
      <path d="M249 168 Q270 178 275 190" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const Paramo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const silver = "#C9CBB8";
  const snow = "#F4F6F0";
  const plants: [number, number, number][] = [
    [135, 220, 1],
    [175, 235, 0.8],
    [255, 225, 0.9],
  ];
  return (
    <g>
      {/* snow-capped volcano in the background */}
      <polygon points="150,240 230,100 310,240" fill={dark} opacity="0.5" />
      <polygon points="230,100 212,145 220,152 230,146 240,152 248,145" fill={snow} opacity="0.9" />
      {/* rolling páramo hills */}
      <path d="M90 245 Q150 200 220 235 Q270 210 320 240 L320 250 L90 250 Z" fill={accentColor} opacity="0.7" />
      {/* frailejones scattered across the slope */}
      {plants.map(([x, y, scale], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${scale})`}>
          <rect x="-4" y="-20" width="8" height="24" fill={shade(accentColor, 0.55)} />
          <ellipse cx="0" cy="-30" rx="7" ry="16" fill={silver} transform="rotate(-25 0 -30)" />
          <ellipse cx="0" cy="-30" rx="7" ry="16" fill={silver} />
          <ellipse cx="0" cy="-30" rx="7" ry="16" fill={silver} transform="rotate(25 0 -30)" />
          <ellipse cx="0" cy="-30" rx="7" ry="16" fill={silver} transform="rotate(-50 0 -30)" />
          <ellipse cx="0" cy="-30" rx="7" ry="16" fill={silver} transform="rotate(50 0 -30)" />
        </g>
      ))}
    </g>
  );
};

export const colombiaIllustrations: Record<string, IllustrationDefinition> = {
  cafe: { component: Cafe },
  "garcia-marquez": { component: GarciaMarquez },
  vallenato: { component: Vallenato },
  shakira: { component: Shakira },
  cartagena: { component: Cartagena },
  esmeraldas: { component: Esmeraldas },
  "carnaval-barranquilla": { component: CarnavalBarranquilla },
  ciclismo: { component: Ciclismo },
  biodiversidad: { component: Biodiversidad },
  arepa: { component: Arepa },
  "el-dorado": { component: ElDorado },
  "ciudad-perdida": { component: CiudadPerdida },
  botero: { component: Botero },
  "comuna-13": { component: Comuna13 },
  "cano-cristales": { component: CanoCristales },
  wayuu: { component: Wayuu },
  tejo: { component: Tejo },
  "salsa-cali": { component: SalsaCali },
  cumbia: { component: Cumbia },
  paramo: { component: Paramo },
};
