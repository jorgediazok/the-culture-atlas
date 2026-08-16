import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Wai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      {/* two hands pressed together, prayer-like, at chest height */}
      <path d="M205 235 L205 130 Q205 115 195 108 Q186 102 186 115 L186 155 L186 235 Z" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M205 235 L205 130 Q205 115 215 108 Q224 102 224 115 L224 155 L224 235 Z" fill={tint(skin, 0.15)} stroke={dark} strokeWidth="2" />
      <path d="M186 155 Q205 148 224 155" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[168, 182, 196].map((y) => (
        <path key={y} d="M186 235 Q195 232 205 235 Q215 232 224 235" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" transform={`translate(0, ${y - 235})`} />
      ))}
    </g>
  );
};

const MuayThai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      {/* fighter in a combat stance, wrapped hands raised */}
      <circle cx="205" cy="130" r="18" fill={skin} />
      <path d="M188 148 Q205 138 222 148 L216 210 L194 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* raised guard arms with wrapped fists */}
      <path d="M195 155 Q170 150 160 130" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <circle cx="158" cy="122" r="12" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M215 155 Q240 150 250 130" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <circle cx="252" cy="122" r="12" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {/* back leg braced, front leg raised in a knee strike */}
      <path d="M195 210 L182 240" stroke={skin} strokeWidth="12" strokeLinecap="round" />
      <path d="M213 210 Q235 210 240 195" fill="none" stroke={skin} strokeWidth="12" strokeLinecap="round" />
      {/* mongkol headband */}
      <path d="M192 118 Q205 112 218 118" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const PadThai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  const noodle = "#F0D080";
  return (
    <g>
      {/* wok */}
      <path d="M115 180 Q115 225 205 225 Q295 225 295 180 L275 180 Q275 205 205 205 Q135 205 135 180 Z" fill={dark} />
      <path d="M115 180 Q205 195 295 180" fill="none" stroke={dark} strokeWidth="6" />
      {/* noodles */}
      <path d="M150 165 Q170 150 155 130 M175 170 Q195 152 180 130 M200 165 Q220 150 205 128 M225 170 Q245 155 230 132" fill="none" stroke={noodle} strokeWidth="9" strokeLinecap="round" />
      {/* shrimp */}
      <path d="M245 165 Q265 155 260 175 Q250 185 240 175 Z" fill="#E85D25" stroke={shade("#E85D25", 0.3)} strokeWidth="1.5" />
      {/* crushed peanuts on top */}
      {[[165, 155], [190, 148], [215, 158], [180, 172]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill={light} />
      ))}
    </g>
  );
};

const TemplosDorados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* golden temple, tiered stepped roofs */}
      <rect x="155" y="180" width="100" height="60" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="145,180 205,150 265,180" fill={dark} />
      <polygon points="165,150 205,128 245,150" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="180,128 205,110 230,128" fill={dark} />
      <line x1="205" y1="110" x2="205" y2="90" stroke={dark} strokeWidth="4" />
      <path d="M205 90 L198 98 L212 98 Z" fill={light} />
      {[170, 240].map((x) => (
        <rect key={x} x={x - 8} y="200" width="16" height="30" fill={light} />
      ))}
    </g>
  );
};

const Songkran: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const water = "#7FCBE0";
  return (
    <g>
      <circle cx="180" cy="150" r="18" fill={skin} />
      <path d="M162 168 Q180 158 198 168 L192 225 L168 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M186 200 Q180 195 174 200" fill="none" stroke={dark} strokeWidth="2.5" />
      {/* arms out, smiling, being sprayed */}
      <path d="M166 175 Q145 180 135 200" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M194 175 Q215 180 225 200" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      {/* water spray from a gun */}
      <rect x="245" y="185" width="34" height="14" rx="4" fill={dark} />
      <rect x="279" y="188" width="14" height="8" fill={dark} />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={220 - i * 12} cy={185 - i * 4} r={4 - i * 0.5} fill={water} />
      ))}
    </g>
  );
};

const Elefantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  return (
    <g>
      {/* elephant body */}
      <path d="M130 235 Q115 200 140 175 Q165 155 210 160 Q250 163 265 190 Q272 205 260 215 L255 235 L235 235 L232 218 L175 218 L170 235 L150 235 L148 220 Q135 225 130 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head + trunk */}
      <path d="M130 190 Q110 195 100 220 Q98 235 112 238 Q125 235 128 218" fill="none" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
      <ellipse cx="130" cy="185" rx="10" ry="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* ear */}
      <path d="M140 168 Q165 158 170 185 Q150 190 140 168 Z" fill={dark} opacity="0.5" />
      {/* small headdress ornament */}
      <path d="M155 158 L165 145 L175 158 Z" fill={gold} />
      <circle cx="165" cy="150" r="4" fill={gold} />
    </g>
  );
};

const MercadosFlotantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const fruit = ["#C1272D", "#F4C430", "#4A8F4E"];
  return (
    <g>
      <path d="M95 210 Q210 195 320 210 L320 250 L95 250 Z" fill={water} opacity="0.65" />
      {/* wooden canoe */}
      <path d="M120 205 Q150 225 205 225 Q260 225 290 205 L275 200 L135 200 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      {/* fruit piled inside */}
      {[[160, 185], [185, 178], [210, 185], [235, 178], [175, 195], [220, 195]].map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r="12" fill={fruit[i % fruit.length]} />
      ))}
    </g>
  );
};

const Monarquia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* cushion */}
      <path d="M135 210 Q135 235 165 235 L245 235 Q275 235 275 210 L270 195 L140 195 Z" fill={accentColor} />
      <ellipse cx="205" cy="196" rx="70" ry="10" fill={dark} />
      {/* tall tiered crown */}
      <path d="M155 195 L155 165 L175 182 L192 145 L208 172 L226 145 L242 182 L263 165 L263 195 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" strokeLinejoin="round" />
      <path d="M195 145 L208 105 L221 145 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <circle cx="208" cy="103" r="6" fill={gold} />
    </g>
  );
};

const Durian: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* two halves split open */}
      <path d="M115 235 Q100 190 130 150 Q165 115 205 130 L205 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M295 235 Q310 190 280 150 Q245 115 205 130 L205 235 Z" fill={shade(accentColor, 0.1)} stroke={dark} strokeWidth="3" />
      {/* spikes */}
      {[[130, 150], [150, 128], [175, 118], [280, 150], [260, 128], [235, 118]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} L${Number(x) + (i < 3 ? -8 : 8)} ${Number(y) - 14} L${Number(x) + (i < 3 ? -14 : 14)} ${Number(y) - 2} Z`} fill={accentColor} />
      ))}
      {/* creamy interior */}
      <ellipse cx="205" cy="195" rx="34" ry="30" fill={light} />
      <circle cx="205" cy="195" r="10" fill="#8B5A2B" />
    </g>
  );
};

const TukTuk: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* colorful roof */}
      <path d="M140 165 Q205 145 270 165 L265 178 L145 178 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* body */}
      <path d="M140 178 L275 178 L268 225 L147 225 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      <rect x="160" y="185" width="40" height="28" fill="#BFE3F0" opacity="0.7" />
      {/* three wheels */}
      <circle cx="165" cy="235" r="15" fill="#2E2E2E" />
      <circle cx="255" cy="235" r="15" fill="#2E2E2E" />
      <circle cx="205" cy="240" r="12" fill="#2E2E2E" />
      {/* handlebar front */}
      <line x1="140" y1="185" x2="120" y2="180" stroke={dark} strokeWidth="4" />
    </g>
  );
};

export const thailandIllustrations: Record<string, IllustrationDefinition> = {
  wai: { component: Wai },
  "muay-thai": { component: MuayThai },
  "pad-thai": { component: PadThai },
  "templos-dorados": { component: TemplosDorados },
  songkran: { component: Songkran },
  elefantes: { component: Elefantes },
  "mercados-flotantes": { component: MercadosFlotantes },
  monarquia: { component: Monarquia },
  durian: { component: Durian },
  "tuk-tuk": { component: TukTuk },
};
