import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Carnaval: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#FFCC00";
  const skin = "#C97C4A";
  // Feather fan base at (200,168), feathers point up/outward before rotation.
  const feathers = [-80, -60, -40, -20, 0, 20, 40, 60, 80];
  const featherColors = [dark, gold, accentColor];
  return (
    <g>
      {feathers.map((deg, i) => (
        <path
          key={deg}
          d="M200 168 Q190 120 200 66 Q210 120 200 168 Z"
          fill={featherColors[i % featherColors.length]}
          transform={`rotate(${deg} 200 168)`}
        />
      ))}
      {/* dancer: costume torso, raised arms, kicking leg */}
      <circle cx="200" cy="172" r="16" fill={skin} />
      <path d="M182 190 Q200 178 218 190 L224 232 Q200 244 176 232 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="192" cy="200" r="4" fill={gold} />
      <circle cx="208" cy="200" r="4" fill={gold} />
      <circle cx="200" cy="212" r="4" fill={gold} />
      <path d="M180 195 Q158 180 148 155" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M220 195 Q246 178 258 160" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M188 232 L178 250" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M212 232 Q232 236 244 220" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const Futebol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const sand = "#E8C87A";
  const skin = "#C97C4A";
  return (
    <g>
      {/* beach */}
      <path d="M95 235 Q200 218 320 235 L320 250 L95 250 Z" fill={sand} />
      <circle cx="290" cy="105" r="20" fill={tint(accentColor, 0.4)} opacity="0.8" />
      {/* barefoot player balanced on one leg, juggling on the raised knee */}
      <circle cx="180" cy="120" r="15" fill={skin} />
      {/* short jersey, hip-length, so the legs read clearly below it */}
      <path d="M164 136 L196 136 L200 178 L160 178 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* standing leg, straight down to a bare foot planted on the sand */}
      <path d="M172 178 L166 222" stroke={skin} strokeWidth="13" strokeLinecap="round" />
      <path d="M155 228 L178 228 L180 220 L160 218 Z" fill={skin} />
      {/* raised leg, knee bent up and out, ball balanced right at the knee */}
      <path d="M190 178 Q214 182 218 160" fill="none" stroke={skin} strokeWidth="13" strokeLinecap="round" />
      {/* arms out for balance */}
      <path d="M166 142 Q140 148 126 168" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M192 142 Q210 132 220 112" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* ball resting directly on the raised knee */}
      <circle cx="222" cy="148" r="17" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <polygon points="222,136 230,142 227,152 217,152 214,142" fill={dark} />
    </g>
  );
};

const Feijoada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  const orange = "#F4A300";
  return (
    <g>
      {/* clay pot */}
      <path d="M140 190 Q140 235 200 240 Q260 235 260 190 Z" fill={accentColor} stroke={dark} strokeWidth="4" />
      <ellipse cx="200" cy="190" rx="60" ry="16" fill={dark} />
      <ellipse cx="200" cy="188" rx="46" ry="10" fill="#1A1A1A" opacity="0.75" />
      <path d="M126 178 Q140 168 154 178" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M246 178 Q260 168 274 178" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* steam curling up */}
      <path d="M182 160 Q172 135 186 110" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.75" />
      <path d="M204 160 Q196 130 210 100" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      {/* orange slices beside the pot */}
      <circle cx="290" cy="210" r="20" fill={orange} stroke={shade(orange, 0.3)} strokeWidth="2" />
      <path d="M290 194 L290 226 M278 202 L302 218 M278 218 L302 202" stroke={shade(orange, 0.3)} strokeWidth="2" />
      <circle cx="112" cy="215" r="16" fill={orange} stroke={shade(orange, 0.3)} strokeWidth="2" />
      <path d="M112 202 L112 228 M102 208 L122 222 M102 222 L122 208" stroke={shade(orange, 0.3)} strokeWidth="2" />
    </g>
  );
};

const Samba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const skin = "#C97C4A";
  const musicians = [
    { x: 130, drum: "surdo" as const },
    { x: 200, drum: "pandeiro" as const },
    { x: 270, drum: "surdo" as const },
  ];
  return (
    <g>
      {musicians.map((m, i) => (
        <g key={m.x}>
          <circle cx={m.x} cy="140" r="14" fill={skin} />
          <path d={`M${m.x - 16} 154 L${m.x + 16} 154 L${m.x + 12} 200 L${m.x - 12} 200 Z`} fill={i % 2 === 0 ? accentColor : dark} />
          {m.drum === "surdo" ? (
            <>
              <ellipse cx={m.x} cy="216" rx="22" ry="12" fill={light} stroke={dark} strokeWidth="3" />
              <path d={`M${m.x - 6} 200 L${m.x - 10} 214 M${m.x + 6} 200 L${m.x + 10} 214`} stroke={dark} strokeWidth="4" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx={m.x} cy="212" r="16" fill={light} stroke={dark} strokeWidth="3" />
              <path d={`M${m.x - 4} 200 L${m.x + 10} 210`} stroke={dark} strokeWidth="4" strokeLinecap="round" />
            </>
          )}
        </g>
      ))}
    </g>
  );
};

const Amazonia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.4);
  const river = "#5FA8D3";
  return (
    <g>
      {/* dense canopy clusters flanking the river */}
      <circle cx="120" cy="120" r="34" fill={dark} />
      <circle cx="150" cy="95" r="30" fill={accentColor} />
      <circle cx="115" cy="175" r="32" fill={accentColor} />
      <circle cx="290" cy="110" r="32" fill={accentColor} />
      <circle cx="270" cy="165" r="30" fill={dark} />
      <circle cx="305" cy="200" r="28" fill={light} opacity="0.85" />
      <circle cx="105" cy="225" r="26" fill={light} opacity="0.85" />
      {/* winding river cutting through */}
      <path
        d="M160 90 Q120 130 165 155 Q210 178 175 205 Q145 226 190 245"
        fill="none"
        stroke={river}
        strokeWidth="20"
        strokeLinecap="round"
      />
      <path
        d="M160 90 Q120 130 165 155 Q210 178 175 205 Q145 226 190 245"
        fill="none"
        stroke={tint(river, 0.4)}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </g>
  );
};

const Capoeira: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C97C4A";
  return (
    <g>
      {/* roda: circle of onlookers marked as small dots on the ground */}
      <ellipse cx="205" cy="238" rx="95" ry="10" fill={dark} opacity="0.18" />
      {/* grounded player, crouched, one hand down */}
      <circle cx="150" cy="185" r="14" fill={skin} />
      <path d="M140 198 Q160 192 172 210 L158 232 L128 224 Z" fill={dark} />
      <path d="M172 210 L192 224" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M140 198 Q120 210 116 232" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M158 232 L150 234" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* airborne player, body tilted horizontal, one leg extended in a high kick */}
      <circle cx="248" cy="128" r="14" fill={skin} />
      <path d="M240 138 L263 133 L286 178 L268 188 Z" fill={accentColor} />
      {/* extended kicking leg, straight and high */}
      <path d="M280 180 L326 122" stroke={skin} strokeWidth="13" strokeLinecap="round" />
      {/* tucked leg, bent under the body */}
      <path d="M272 184 Q262 205 275 218" fill="none" stroke={skin} strokeWidth="12" strokeLinecap="round" />
      {/* bracing arm reaching down toward the ground */}
      <path d="M244 140 Q225 165 215 195" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* trailing arm, up and back with the momentum of the kick */}
      <path d="M258 132 Q272 112 292 104" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* motion arc behind the kick, selling the mid-air spin */}
      <path d="M295 190 Q330 165 320 118" fill="none" stroke={dark} strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" opacity="0.5" />
    </g>
  );
};

const CristoRedentor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const sea = "#5FA8D3";
  return (
    <g>
      {/* mountain */}
      <polygon points="95,238 200,110 305,238" fill={dark} />
      {/* coastal city at the foot of the mountain */}
      <rect x="100" y="222" width="200" height="16" fill={sea} opacity="0.6" />
      {[110, 132, 154, 176, 198, 220, 242, 264, 286].map((x, i) => (
        <rect key={x} x={x} y={222 - 8 - (i % 3) * 6} width="14" height={8 + (i % 3) * 6} fill={light} opacity="0.85" />
      ))}
      {/* statue, open arms */}
      <rect x="192" y="150" width="16" height="72" fill={accentColor} />
      <rect x="140" y="148" width="120" height="14" rx="5" fill={accentColor} />
      <circle cx="200" cy="132" r="16" fill={accentColor} />
      <path d="M188 210 L172 222 M212 210 L228 222" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const BossaNova: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sun = "#F4A300";
  return (
    <g>
      {/* sunset beach */}
      <circle cx="200" cy="165" r="34" fill={sun} opacity="0.9" />
      <path d="M95 200 L320 200" stroke={dark} strokeWidth="3" opacity="0.5" />
      <path d="M95 240 Q200 226 320 240 L320 250 L95 250 Z" fill={tint(accentColor, 0.5)} />
      {/* guitar */}
      <path d="M150 168 Q132 168 132 190 Q132 214 158 214 Q184 214 184 190 Q184 172 168 168 Q184 160 178 138 Q168 128 158 138 Q152 152 150 168 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="158" cy="192" r="14" fill={dark} />
      <line x1="158" y1="138" x2="158" y2="100" stroke={dark} strokeWidth="8" />
      <line x1="152" y1="105" x2="145" y2="100" stroke={dark} strokeWidth="3" />
      <line x1="152" y1="115" x2="145" y2="112" stroke={dark} strokeWidth="3" />
      <line x1="152" y1="125" x2="145" y2="124" stroke={dark} strokeWidth="3" />
      {/* microphone on a stand */}
      <rect x="248" y="130" width="16" height="24" rx="8" fill={dark} />
      <line x1="256" y1="154" x2="256" y2="220" stroke={dark} strokeWidth="4" />
      <line x1="234" y1="220" x2="278" y2="220" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const CachacaCaipirinha: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const drink = "#C7D96F";
  const lime = "#4A9B3C";
  return (
    <g>
      {/* glass */}
      <path d="M165 130 L235 130 L222 232 L178 232 Z" fill="none" stroke={dark} strokeWidth="4" />
      <path d="M170 160 L230 160 L222 228 L178 228 Z" fill={drink} />
      {/* ice cubes */}
      <rect x="182" y="170" width="18" height="18" fill="#fff" opacity="0.85" transform="rotate(-8 191 179)" />
      <rect x="205" y="190" width="16" height="16" fill="#fff" opacity="0.8" transform="rotate(10 213 198)" />
      {/* muddled lime pieces */}
      <circle cx="196" cy="205" r="12" fill={lime} opacity="0.9" />
      <path d="M196 195 L196 215 M188 200 L204 210 M188 210 L204 200" stroke={shade(lime, 0.4)} strokeWidth="2" />
      <path d="M172 130 Q200 116 228 130" fill="none" stroke={dark} strokeWidth="4" />
      <line x1="230" y1="128" x2="248" y2="112" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const PortuguesBrasileiro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const skin = "#C97C4A";
  return (
    <g>
      {/* two people facing each other */}
      <circle cx="150" cy="200" r="18" fill={skin} />
      <path d="M124 220 Q150 208 176 220 L172 250 L128 250 Z" fill={accentColor} />
      <circle cx="260" cy="200" r="18" fill={skin} />
      <path d="M234 220 Q260 208 286 220 L282 250 L238 250 Z" fill={dark} />
      {/* speech bubbles, same word spelled differently */}
      <path d="M105 110 Q105 90 128 90 L172 90 Q195 90 195 110 Q195 130 172 130 L150 130 L138 146 L142 130 L128 130 Q105 130 105 110 Z" fill={accentColor} />
      <text x="150" y="118" fontSize="26" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="sans-serif">FATO</text>
      <path d="M205 100 Q205 82 226 82 L286 82 Q307 82 307 100 Q307 118 286 118 L258 118 L246 132 L250 118 L226 118 Q205 118 205 100 Z" fill={dark} />
      <text x="256" y="107" fontSize="22" fontWeight="700" fill={light} textAnchor="middle" fontFamily="sans-serif">FACTO</text>
    </g>
  );
};

export const brazilIllustrations: Record<string, IllustrationDefinition> = {
  carnaval: { component: Carnaval },
  futebol: { component: Futebol },
  feijoada: { component: Feijoada },
  samba: { component: Samba },
  amazonia: { component: Amazonia },
  capoeira: { component: Capoeira },
  "cristo-redentor": { component: CristoRedentor },
  "bossa-nova": { component: BossaNova },
  "cachaca-caipirinha": { component: CachacaCaipirinha },
  "portugues-brasileiro": { component: PortuguesBrasileiro },
};
