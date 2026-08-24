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

const OuroPretoBarroco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#D8D2C4";
  const stoneDark = shade(stone, 0.3);
  return (
    <g>
      {/* twin bell towers, drawn first so the onion domes paint over their tops */}
      <rect x="120" y="100" width="26" height="145" fill={accentColor} />
      <rect x="254" y="100" width="26" height="145" fill={accentColor} />
      {/* onion domes: bulge outward past the tower width, then taper to a point */}
      <path d="M118 118 Q112 85 133 65 Q154 85 148 118 Z" fill={dark} />
      <path d="M252 118 Q246 85 267 65 Q288 85 282 118 Z" fill={dark} />
      <line x1="133" y1="40" x2="133" y2="65" stroke={dark} strokeWidth="4" />
      <line x1="124" y1="49" x2="142" y2="49" stroke={dark} strokeWidth="4" />
      <line x1="267" y1="40" x2="267" y2="65" stroke={dark} strokeWidth="4" />
      <line x1="258" y1="49" x2="276" y2="49" stroke={dark} strokeWidth="4" />
      {/* facade */}
      <rect x="150" y="155" width="90" height="90" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      <polygon points="150,170 195,120 240,170" fill={accentColor} stroke={dark} strokeWidth="3" strokeLinejoin="round" />
      {/* shadowed arched doorway */}
      <path d="M180 245 L180 210 Q180 190 200 190 Q220 190 220 210 L220 245 Z" fill={dark} />
      {/* soapstone statue on a pedestal, cobblestones underfoot */}
      <ellipse cx="205" cy="248" rx="90" ry="8" fill={dark} opacity="0.15" />
      <rect x="283" y="222" width="32" height="24" fill={stoneDark} />
      <path d="M291 175 L305 175 L309 224 L287 224 Z" fill={stone} stroke={stoneDark} strokeWidth="2" />
      <circle cx="298" cy="178" r="16" fill={stone} stroke={stoneDark} strokeWidth="2" />
    </g>
  );
};

const Candomble: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5E3C";
  const white = "#F5F0E6";
  const gold = "#D4A017";
  return (
    <g>
      {/* flowing white dress, drawn first so the head paints over the neckline seam */}
      <path d="M158 185 Q190 168 222 185 L238 250 Q190 264 142 250 Z" fill={white} stroke={dark} strokeWidth="3" />
      <path d="M170 200 L166 246 M190 198 L190 248 M210 200 L214 246" stroke={tint(accentColor, 0.5)} strokeWidth="3" opacity="0.5" />
      {/* arms reaching toward the altar */}
      <path d="M168 196 Q145 210 138 230" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M212 196 Q235 205 248 218" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="190" cy="180" r="18" fill={skin} />
      <path d="M172 166 Q190 148 208 166" fill="none" stroke={gold} strokeWidth="7" strokeLinecap="round" />
      <circle cx="182" cy="205" r="4" fill={gold} />
      <circle cx="190" cy="211" r="4" fill={gold} />
      <circle cx="198" cy="205" r="4" fill={gold} />
      {/* small altar with candles and an offering bowl */}
      <rect x="255" y="225" width="55" height="9" fill={dark} />
      <line x1="262" y1="234" x2="262" y2="248" stroke={dark} strokeWidth="4" />
      <line x1="303" y1="234" x2="303" y2="248" stroke={dark} strokeWidth="4" />
      <rect x="264" y="196" width="6" height="30" fill={white} stroke={dark} strokeWidth="1.5" />
      <rect x="291" y="202" width="6" height="24" fill={white} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="267" cy="193" rx="5" ry="7" fill="#F4A300" />
      <ellipse cx="294" cy="199" rx="5" ry="7" fill="#F4A300" />
      <ellipse cx="280" cy="221" rx="15" ry="5" fill={gold} opacity="0.8" />
    </g>
  );
};

const CataratasIguazu: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.35);
  const rock = "#6B5544";
  const jungle = "#2F6B3A";
  return (
    <g>
      {/* jungle framing both sides */}
      <circle cx="105" cy="115" r="28" fill={jungle} />
      <circle cx="118" cy="178" r="26" fill={shade(jungle, 0.2)} />
      <circle cx="315" cy="122" r="28" fill={jungle} />
      <circle cx="304" cy="182" r="26" fill={shade(jungle, 0.2)} />
      {/* rock ledge at the top of the falls */}
      <path d="M100 95 L320 95 L320 112 Q210 132 100 112 Z" fill={rock} />
      {/* four cascading streams */}
      <path d="M150 100 Q144 155 152 218" fill="none" stroke={light} strokeWidth="17" strokeLinecap="round" />
      <path d="M190 100 Q196 155 188 218" fill="none" stroke={accentColor} strokeWidth="17" strokeLinecap="round" />
      <path d="M230 100 Q224 155 232 218" fill="none" stroke={light} strokeWidth="17" strokeLinecap="round" />
      <path d="M270 100 Q276 155 268 218" fill="none" stroke={accentColor} strokeWidth="17" strokeLinecap="round" />
      {/* mist basin */}
      <ellipse cx="210" cy="224" rx="112" ry="18" fill="#F5F0E6" opacity="0.55" />
      {/* rainbow over the mist */}
      <path d="M140 140 Q210 88 280 140" fill="none" stroke="#E63946" strokeWidth="5" opacity="0.8" />
      <path d="M148 148 Q210 100 272 148" fill="none" stroke="#FFCC00" strokeWidth="5" opacity="0.8" />
      <path d="M156 156 Q210 112 264 156" fill="none" stroke="#2E6F95" strokeWidth="5" opacity="0.8" />
    </g>
  );
};

const FestaJuninaForro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C97C4A";
  const gold = "#FFCC00";
  return (
    <g>
      {/* bunting flags strung across the top */}
      <path d="M105 92 L305 92" fill="none" stroke={dark} strokeWidth="2" />
      {[130, 165, 200, 235, 270].map((x, i) => (
        <polygon key={x} points={`${x - 9},92 ${x + 9},92 ${x},110`} fill={[accentColor, dark, gold][i % 3]} />
      ))}
      {/* bonfire */}
      <rect x="182" y="240" width="42" height="7" fill="#5C4033" transform="rotate(-8 203 243)" />
      <rect x="182" y="240" width="42" height="7" fill="#5C4033" transform="rotate(10 203 243)" />
      <path d="M203 240 Q188 212 200 188 Q206 175 200 158 Q222 178 214 202 Q226 220 203 240 Z" fill="#E63946" />
      <path d="M203 235 Q194 214 202 196 Q216 212 210 228 Q214 236 203 235 Z" fill={gold} />
      {/* dancing couple, close embrace */}
      <circle cx="168" cy="168" r="15" fill={skin} />
      <path d="M152 179 Q168 172 184 179 L180 225 Q168 232 156 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M162 225 L157 248 M175 225 L181 246" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M180 185 Q198 178 210 188" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <circle cx="222" cy="168" r="15" fill={skin} />
      <path d="M206 179 Q222 172 238 179 L234 225 Q222 232 210 225 Z" fill={dark} stroke={accentColor} strokeWidth="2.5" />
      <path d="M215 225 L219 247 M229 225 L233 246" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M210 185 Q196 195 184 205" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      {/* accordion player beside them */}
      <circle cx="288" cy="176" r="13" fill={skin} />
      <path d="M276 186 Q288 181 300 186 L296 224 Q288 229 280 224 Z" fill={dark} />
      <path d="M280 233 L277 246 M296 233 L299 246" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <rect x="270" y="196" width="36" height="30" rx="4" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <line x1="280" y1="198" x2="280" y2="224" stroke={dark} strokeWidth="2" />
      <line x1="288" y1="198" x2="288" y2="224" stroke={dark} strokeWidth="2" />
      <line x1="296" y1="198" x2="296" y2="224" stroke={dark} strokeWidth="2" />
      <path d="M278 189 Q270 202 276 214" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M298 189 Q306 202 300 214" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const LiteraturaDeCordel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5E3C";
  // Points precomputed along the quadratic string M110,112 Q205,128 300,112 at t=0.15..0.85.
  const pamphlets: [number, number, number][] = [
    [139, 116, -6],
    [167, 119, 4],
    [196, 120, -3],
    [215, 120, 5],
    [243, 119, -4],
    [272, 116, 6],
  ];
  return (
    <g>
      {/* stall poles */}
      <rect x="105" y="105" width="9" height="140" fill={wood} />
      <rect x="298" y="105" width="9" height="140" fill={wood} />
      <ellipse cx="205" cy="248" rx="105" ry="7" fill={dark} opacity="0.15" />
      {/* sagging string tied between the poles */}
      <path d="M110 112 Q205 128 300 112" fill="none" stroke={dark} strokeWidth="2.5" />
      {pamphlets.map(([x, y, rot], i) => (
        <g key={x} transform={`rotate(${rot} ${x} ${y + 15})`}>
          <line x1={x} y1={y} x2={x} y2={y + 6} stroke={dark} strokeWidth="1.5" />
          <rect x={x - 8} y={y + 5} width="16" height="22" fill={accentColor} stroke={dark} strokeWidth="1.5" />
          {i % 2 === 0 ? (
            <polygon points={`${x},${y + 10} ${x + 5},${y + 19} ${x - 5},${y + 19}`} fill="#1A1A1A" />
          ) : (
            <circle cx={x} cy={y + 15} r="5" fill="#1A1A1A" />
          )}
          <line x1={x - 5} y1={y + 24} x2={x + 5} y2={y + 24} stroke="#1A1A1A" strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const BrasiliaNiemeyer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const lawn = "#4C8C5C";
  // Cathedral columns fan out from a single base point; rotate is an SVG string transform, not runtime trig.
  const columnDegrees = [-60, -40, -20, 0, 20, 40, 60];
  return (
    <g>
      <ellipse cx="205" cy="238" rx="115" ry="9" fill={dark} opacity="0.15" />
      {/* Metropolitan Cathedral: sixteen curved columns, drawn here as a bold fan of seven */}
      {columnDegrees.map((deg) => (
        <path
          key={deg}
          d="M170 220 Q157 165 170 105 Q183 165 170 220 Z"
          fill={deg === 0 ? accentColor : light}
          stroke={dark}
          strokeWidth="2"
          transform={`rotate(${deg} 170 220)`}
        />
      ))}
      {/* National Congress: lawn, twin towers, dome, and inverted bowl */}
      <rect x="228" y="222" width="88" height="18" fill={lawn} />
      <rect x="255" y="140" width="10" height="88" fill={dark} />
      <rect x="271" y="140" width="10" height="88" fill={dark} />
      <path d="M217 228 Q217 200 235 200 Q253 200 253 228 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M270 228 Q270 200 297 200 Q324 200 324 228 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" opacity="0.9" />
    </g>
  );
};

const PueblosIndigenasBrasil: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C97C4A";
  const thatch = "#8B6F47";
  const feathers = ["#C1272D", "#F4A300", "#8B4513"];
  return (
    <g>
      <ellipse cx="220" cy="240" rx="130" ry="10" fill={dark} opacity="0.15" />
      {/* maloca: wall drawn first, curved thatched roof painted over its top for a clean seam */}
      <rect x="195" y="175" width="120" height="65" fill={thatch} stroke={shade(thatch, 0.3)} strokeWidth="3" />
      <rect x="235" y="205" width="30" height="35" fill={shade(thatch, 0.4)} />
      <path d="M182 190 Q255 90 328 190 Z" fill={shade(thatch, 0.15)} stroke={shade(thatch, 0.35)} strokeWidth="3" strokeLinejoin="round" />
      {/* man with feathered headdress and geometric body paint */}
      {[-60, -40, -20, 0, 20, 40, 60].map((deg, i) => (
        <path
          key={deg}
          d="M130 178 Q120 145 130 105 Q140 145 130 178 Z"
          fill={feathers[i % feathers.length]}
          transform={`rotate(${deg} 130 178)`}
        />
      ))}
      <circle cx="130" cy="175" r="15" fill={skin} />
      <path d="M114 186 Q130 180 146 186 L142 235 Q130 240 118 235 Z" fill={skin} />
      <path d="M116 200 L142 208 M116 216 L142 224" stroke="#F5F0E6" strokeWidth="3" opacity="0.85" />
      <path d="M122 235 L118 250 M136 235 L142 250" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M118 190 Q102 200 96 218" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M142 190 Q158 196 166 210" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const CafeBrasileno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C97C4A";
  const foliage = "#3D6B35";
  const cherry = "#B5342E";
  const sack = "#C7A36B";
  return (
    <g>
      {/* hillside */}
      <path d="M90 250 Q205 205 320 250 L320 250 Z" fill="#E8D6A8" />
      {/* coffee bush with cherries */}
      <circle cx="205" cy="150" r="32" fill={foliage} />
      <circle cx="225" cy="128" r="26" fill={shade(foliage, 0.15)} />
      <circle cx="188" cy="130" r="24" fill={shade(foliage, 0.15)} />
      {[[195, 145], [215, 138], [200, 165], [222, 158], [182, 152], [210, 118]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill={cherry} />
      ))}
      {/* picker reaching up to the bush */}
      <circle cx="152" cy="152" r="14" fill={skin} />
      <path d="M138 162 Q152 157 166 162 L162 205 Q152 210 142 205 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <path d="M146 205 L142 245 M158 205 L163 244" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M162 166 Q180 155 190 138" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M140 168 Q122 178 116 198" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M104 196 L128 196 L124 216 L100 216 Z" fill={sack} stroke={shade(sack, 0.3)} strokeWidth="2" />
      {/* burlap sacks piled beside the bush */}
      <path d="M250 195 Q246 160 268 158 Q290 160 286 195 Q290 235 268 240 Q246 235 250 195 Z" fill={sack} stroke={shade(sack, 0.3)} strokeWidth="2.5" />
      <path d="M262 165 L274 165" stroke={shade(sack, 0.4)} strokeWidth="4" />
      <path d="M285 210 Q283 182 300 180 Q317 182 314 210 Q317 240 300 244 Q283 240 285 210 Z" fill={shade(sack, 0.1)} stroke={shade(sack, 0.35)} strokeWidth="2.5" />
      {[[266, 172], [271, 176], [261, 178]].map(([cx, cy]) => (
        <circle key={`bean-${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill={cherry} />
      ))}
    </g>
  );
};

const FunkCarioca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const gold = "#FFCC00";
  const silhouette = "#241A2E";
  return (
    <g>
      {/* light beams */}
      <polygon points="170,80 138,250 202,250" fill={accentColor} opacity="0.22" />
      <polygon points="230,80 198,250 262,250" fill={gold} opacity="0.18" />
      {/* speaker stacks */}
      {[110, 250].map((x) => (
        <g key={x}>
          <rect x={x} y="120" width="40" height="36" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="2" />
          <rect x={x} y="160" width="40" height="36" fill={silhouette} stroke={shade(dark, 0.3)} strokeWidth="2" />
          <rect x={x} y="200" width="40" height="34" fill={dark} stroke={shade(dark, 0.3)} strokeWidth="2" />
          <circle cx={x + 20} cy="138" r="10" fill="none" stroke={gold} strokeWidth="2.5" />
          <circle cx={x + 20} cy="178" r="10" fill="none" stroke={gold} strokeWidth="2.5" />
          <circle cx={x + 20} cy="217" r="9" fill="none" stroke={gold} strokeWidth="2.5" />
        </g>
      ))}
      {/* DJ behind the turntable */}
      <rect x="176" y="196" width="48" height="12" fill={silhouette} />
      <circle cx="188" cy="202" r="6" fill={dark} />
      <circle cx="212" cy="202" r="6" fill={dark} />
      <circle cx="200" cy="140" r="13" fill={silhouette} />
      <path d="M187 150 Q200 145 213 150 L209 196 Q200 200 191 196 Z" fill={silhouette} />
      <path d="M190 155 Q178 170 182 190" fill="none" stroke={silhouette} strokeWidth="7" strokeLinecap="round" />
      <path d="M210 155 Q222 170 218 190" fill="none" stroke={silhouette} strokeWidth="7" strokeLinecap="round" />
      {/* dancing crowd */}
      {[160, 200, 240].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="222" r="8" fill={silhouette} />
          <path d={`M${x - 7} 229 Q${x} 226 ${x + 7} 229 L${x + 5} 250 Q${x} 253 ${x - 5} 250 Z`} fill={silhouette} />
          <path d={`M${x - 6} 231 Q${x - 16} ${i % 2 === 0 ? 218 : 224} ${x - 18} ${i % 2 === 0 ? 206 : 214}`} fill="none" stroke={silhouette} strokeWidth="5" strokeLinecap="round" />
          <path d={`M${x + 6} 231 Q${x + 16} ${i % 2 === 0 ? 224 : 218} ${x + 18} ${i % 2 === 0 ? 214 : 206}`} fill="none" stroke={silhouette} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const PantanalVidaSilvestre: IllustrationComponent = () => {
  const fur = "#D9A441";
  const furDark = shade(fur, 0.35);
  const water = "#5FA8D3";
  const capyBrown = "#8B6B3D";
  const macawBlue = "#3B5FCB";
  return (
    <g>
      {/* jaguar: legs and tail drawn first so the body ellipse paints over their tops */}
      <path d="M215 196 L212 232" stroke={furDark} strokeWidth="14" strokeLinecap="round" />
      <path d="M155 193 L150 230" stroke={furDark} strokeWidth="14" strokeLinecap="round" />
      <path d="M150 185 Q125 175 118 140 Q116 120 130 108" fill="none" stroke={furDark} strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="190" cy="190" rx="55" ry="28" fill={fur} stroke={shade(fur, 0.3)} strokeWidth="2.5" />
      <circle cx="232" cy="172" r="22" fill={fur} stroke={shade(fur, 0.3)} strokeWidth="2.5" />
      <polygon points="220,155 226,140 232,156" fill={fur} />
      <polygon points="244,154 250,139 254,156" fill={fur} />
      <ellipse cx="250" cy="178" rx="8" ry="6" fill={tint(fur, 0.3)} />
      {[[175, 178], [195, 185], [160, 195], [205, 172], [180, 200]].map(([cx, cy]) => (
        <circle key={`spot-${cx}-${cy}`} cx={cx} cy={cy} r="4" fill={furDark} opacity="0.75" />
      ))}
      <circle cx="240" cy="167" r="2.5" fill="#1A1A1A" />
      {/* wading water, drawn over the paws */}
      <ellipse cx="200" cy="232" rx="120" ry="16" fill={water} opacity="0.55" />
      {/* capybara resting on the bank */}
      <path d="M283 218 L280 230" stroke={shade(capyBrown, 0.3)} strokeWidth="8" strokeLinecap="round" />
      <path d="M297 218 L299 230" stroke={shade(capyBrown, 0.3)} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="290" cy="215" rx="28" ry="16" fill={capyBrown} stroke={shade(capyBrown, 0.3)} strokeWidth="2" />
      <circle cx="308" cy="205" r="14" fill={capyBrown} stroke={shade(capyBrown, 0.3)} strokeWidth="2" />
      <circle cx="303" cy="194" r="4" fill={shade(capyBrown, 0.3)} />
      {/* hyacinth macaw in flight */}
      <path d="M248 112 Q222 100 205 122 Q228 122 250 118 Z" fill={shade(macawBlue, 0.2)} />
      <path d="M262 112 Q288 100 305 122 Q282 122 260 118 Z" fill={shade(macawBlue, 0.2)} />
      <ellipse cx="255" cy="115" rx="14" ry="20" fill={macawBlue} />
      <circle cx="255" cy="104" r="11" fill={macawBlue} />
      <polygon points="248,102 240,108 249,111" fill="#2A2A2A" />
      <polygon points="245,133 255,148 250,132" fill={shade(macawBlue, 0.25)} />
      <polygon points="265,133 255,148 260,132" fill={shade(macawBlue, 0.25)} />
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
  "ouro-preto-barroco": { component: OuroPretoBarroco },
  candomble: { component: Candomble },
  "cataratas-iguazu": { component: CataratasIguazu },
  "festa-junina-forro": { component: FestaJuninaForro },
  "literatura-de-cordel": { component: LiteraturaDeCordel },
  "brasilia-niemeyer": { component: BrasiliaNiemeyer },
  "pueblos-indigenas-brasil": { component: PueblosIndigenasBrasil },
  "cafe-brasileno": { component: CafeBrasileno },
  "funk-carioca": { component: FunkCarioca },
  "pantanal-vida-silvestre": { component: PantanalVidaSilvestre },
};
