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

const LoyKrathong: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#0F2A44";
  const gold = "#D4A017";
  const flame = "#F4A300";
  return (
    <g>
      {/* dark water */}
      <rect x="85" y="190" width="235" height="60" fill={water} />
      {/* krathong baskets floating */}
      {[150, 205, 260].map((x) => (
        <g key={x}>
          <path d={`M${x - 22} 205 Q${x} 218 ${x + 22} 205 Q${x + 18} 195 ${x} 195 Q${x - 18} 195 ${x - 22} 205 Z`} fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x} cy="197" rx="4" ry="7" fill="#F4A6C1" transform={`rotate(${deg} ${x} 200)`} />
          ))}
          <path d={`M${x} 190 Q${x - 2} 182 ${x} 174`} fill="none" stroke={flame} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ))}
      {/* sky lanterns rising above */}
      {[120, 205, 290].map((x, i) => (
        <ellipse key={x} cx={x} cy={110 - (i % 2) * 20} rx="14" ry="18" fill={gold} opacity="0.85" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const SedaTailandesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const shine = tint(accentColor, 0.5);
  return (
    <g>
      {/* rolled bolt of silk */}
      <ellipse cx="140" cy="180" rx="22" ry="55" fill={shine} stroke={dark} strokeWidth="2.5" />
      <path
        d="M140 125 Q260 110 300 150 Q305 190 260 235 Q200 250 140 235 L140 210 Q220 225 265 200 Q285 175 260 150 Q220 135 140 150 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="2.5"
      />
      {/* shimmer highlights */}
      <path d="M160 155 Q220 148 270 165" fill="none" stroke={shine} strokeWidth="4" opacity="0.6" />
      <path d="M155 195 Q215 205 255 190" fill="none" stroke={shine} strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const Ayutthaya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const stone = "#B8A99A";
  const green = "#4A7A52";
  return (
    <g>
      {/* tree canopy */}
      <path d="M110 250 Q100 180 150 140 Q170 120 205 118 Q240 120 260 140 Q310 180 300 250 Z" fill={green} opacity="0.35" />
      {/* roots behind the head */}
      <path d="M150 140 Q170 165 165 200 Q160 225 175 245" fill="none" stroke="#6B4A2F" strokeWidth="10" strokeLinecap="round" />
      <path d="M260 140 Q245 165 250 200 Q255 225 240 245" fill="none" stroke="#6B4A2F" strokeWidth="10" strokeLinecap="round" />
      {/* stone buddha head */}
      <circle cx="205" cy="185" r="42" fill={stone} stroke={dark} strokeWidth="3" />
      <path d="M175 165 Q205 150 235 165" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <ellipse cx="190" cy="180" rx="4" ry="6" fill={dark} opacity="0.6" />
      <ellipse cx="220" cy="180" rx="4" ry="6" fill={dark} opacity="0.6" />
      <path d="M195 205 Q205 212 215 205" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* a root crossing over the face for the trapped look */}
      <path d="M160 175 Q205 195 250 172" fill="none" stroke="#6B4A2F" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
    </g>
  );
};

const MasajeTailandes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const mat = tint(accentColor, 0.4);
  return (
    <g>
      {/* floor mat */}
      <rect x="90" y="220" width="230" height="20" rx="6" fill={mat} stroke={dark} strokeWidth="2" />
      {/* person lying down being stretched */}
      <circle cx="130" cy="200" r="14" fill={skin} />
      <path d="M126 212 Q160 205 220 212 L225 225 L128 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M220 213 Q245 195 255 165" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      {/* practitioner kneeling, guiding the stretch */}
      <circle cx="280" cy="150" r="12" fill={skin} />
      <path d="M268 160 Q280 154 292 160 L288 200 L262 200 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <path d="M270 168 Q258 175 255 165" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const Kathoey: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const gold = "#D4A017";
  return (
    <g>
      {/* elaborate headdress */}
      <path d="M175 130 Q205 95 235 130 L228 140 Q205 115 182 140 Z" fill={gold} stroke={dark} strokeWidth="2" />
      {[185, 205, 225].map((x) => (
        <circle key={x} cx={x} cy="128" r="5" fill={gold} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* head with makeup */}
      <circle cx="205" cy="155" r="24" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M188 150 Q193 145 198 150" fill="none" stroke="#8B2942" strokeWidth="2" />
      <path d="M212 150 Q217 145 222 150" fill="none" stroke="#8B2942" strokeWidth="2" />
      <path d="M195 168 Q205 174 215 168" fill="none" stroke="#8B2942" strokeWidth="2.5" />
      {/* sparkling stage dress */}
      <path d="M178 176 Q205 166 232 176 L245 240 L165 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[190, 205, 220].map((x, i) => (
        <circle key={x} cx={x} cy={195 + i * 10} r="3" fill={gold} opacity="0.8" />
      ))}
    </g>
  );
};

const BolasDeFuegoDelMekong: IllustrationComponent = () => {
  const water = "#0F2A44";
  const glow = "#E8630A";
  const glowLight = "#F4A26B";
  return (
    <g>
      {/* dark river */}
      <path d="M85 220 Q205 205 320 220 L320 250 L85 250 Z" fill={water} />
      <path d="M90 228 Q205 218 315 228" fill="none" stroke="#1B4B6B" strokeWidth="2" opacity="0.5" />
      {/* rising fireballs */}
      {[
        [130, 190],
        [205, 150],
        [260, 205],
        [175, 110],
      ].map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y} r={10 - i} fill={glow} opacity="0.85" />
          <circle cx={x} cy={y} r={(10 - i) * 0.5} fill={glowLight} />
        </g>
      ))}
      {/* faint trail lines */}
      {[
        [130, 220, 130, 195],
        [205, 220, 205, 158],
        [260, 220, 260, 212],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={glow} strokeWidth="1.5" opacity="0.3" />
      ))}
    </g>
  );
};

const PezLuchadorDeSiam: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const fin = tint(accentColor, 0.35);
  return (
    <g>
      {/* body */}
      <ellipse cx="190" cy="175" rx="38" ry="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* flowing tail */}
      <path d="M225 175 Q270 140 300 150 Q280 175 300 200 Q270 210 225 178 Z" fill={fin} stroke={dark} strokeWidth="2" />
      {/* dorsal + ventral fins */}
      <path d="M180 158 Q170 130 195 140 Q195 155 185 162 Z" fill={fin} stroke={dark} strokeWidth="1.5" />
      <path d="M180 192 Q170 218 195 210 Q195 195 185 188 Z" fill={fin} stroke={dark} strokeWidth="1.5" />
      {/* head + eye */}
      <circle cx="158" cy="175" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="152" cy="172" r="3" fill="#1A1A1A" />
      {/* bubble nest at the surface */}
      {[
        [130, 120],
        [145, 110],
        [160, 118],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill="#F5F0E6" opacity="0.7" stroke={dark} strokeWidth="1" />
      ))}
    </g>
  );
};

const Khon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* mask face */}
      <path d="M155 140 Q205 110 255 140 L250 210 Q205 230 160 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* fierce eyes */}
      <path d="M170 155 L190 165 L170 175 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <path d="M240 155 L220 165 L240 175 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      {/* bared fangs */}
      <path d="M180 195 L188 210 L196 195 Z" fill="#F5F0E6" />
      <path d="M214 195 L222 210 L230 195 Z" fill="#F5F0E6" />
      {/* horns */}
      <path d="M170 138 Q150 105 130 95" fill="none" stroke={gold} strokeWidth="8" strokeLinecap="round" />
      <path d="M240 138 Q260 105 280 95" fill="none" stroke={gold} strokeWidth="8" strokeLinecap="round" />
      {/* golden crown ornament */}
      <polygon points="185,118 205,90 225,118" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
    </g>
  );
};

const Amuletos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const wood = "#8B5A2B";
  return (
    <g>
      {/* market stall table */}
      <rect x="90" y="215" width="230" height="14" fill={wood} stroke={dark} strokeWidth="2" />
      {/* rows of small amulets on the table */}
      {[110, 140, 170, 200, 230, 260, 290].map((x, i) => (
        <rect key={x} x={x - 9} y="195" width="18" height="20" rx="3" fill={i % 2 === 0 ? accentColor : gold} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* cord with hanging amulets above */}
      <path d="M110 130 Q205 110 300 130" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[140, 175, 210, 245, 275].map((x, i) => {
        const y = 130 + (i % 3) * 8;
        return (
          <g key={x}>
            <line x1={x} y1={y} x2={x} y2={y + 12} stroke={dark} strokeWidth="1.5" opacity="0.5" />
            <circle cx={x} cy={y + 20} r="9" fill={i % 2 === 0 ? gold : accentColor} stroke={dark} strokeWidth="1.5" />
          </g>
        );
      })}
    </g>
  );
};

const ArrozJazmin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bowl = "#F5F0E6";
  const grain = "#FAF6EC";
  return (
    <g>
      {/* bowl of rice */}
      <path d="M140 210 Q140 240 205 240 Q270 240 270 210 Z" fill={bowl} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="210" rx="65" ry="16" fill={grain} stroke={dark} strokeWidth="2" />
      {/* steam */}
      <path d="M190 195 Q184 180 190 165" fill="none" stroke={dark} strokeWidth="2" opacity="0.35" />
      <path d="M220 195 Q214 180 220 165" fill="none" stroke={dark} strokeWidth="2" opacity="0.35" />
      {/* golden rice stalks beside it */}
      {[0, 1].map((i) => {
        const x = 100 + i * 10;
        const topX = x - 5 + i * 10;
        return (
          <g key={i}>
            <line x1={x} y1="240" x2={topX} y2="140" stroke="#6B7A3A" strokeWidth="4" strokeLinecap="round" />
            {[0, 1, 2, 3, 4].map((n) => (
              <ellipse
                key={n}
                cx={topX + (n % 2 === 0 ? -6 : 6)}
                cy={150 + n * 16}
                rx="6"
                ry="9"
                fill={accentColor}
                stroke={dark}
                strokeWidth="1"
                transform={`rotate(${n % 2 === 0 ? -20 : 20} ${topX + (n % 2 === 0 ? -6 : 6)} ${150 + n * 16})`}
              />
            ))}
          </g>
        );
      })}
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
  "loy-krathong": { component: LoyKrathong },
  "seda-tailandesa": { component: SedaTailandesa },
  ayutthaya: { component: Ayutthaya },
  "masaje-tailandes": { component: MasajeTailandes },
  kathoey: { component: Kathoey },
  "bolas-de-fuego-del-mekong": { component: BolasDeFuegoDelMekong },
  "pez-luchador-de-siam": { component: PezLuchadorDeSiam },
  khon: { component: Khon },
  amuletos: { component: Amuletos },
  "arroz-jazmin": { component: ArrozJazmin },
};
