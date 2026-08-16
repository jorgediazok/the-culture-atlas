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
};
