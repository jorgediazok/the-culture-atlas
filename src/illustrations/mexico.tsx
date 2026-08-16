import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DiaDeLosMuertos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#F4A300";
  const purple = "#7B3FA0";
  return (
    <g>
      {/* skull */}
      <path d="M155 235 L155 190 Q155 130 205 130 Q255 130 255 190 L255 235 Q255 250 235 250 L175 250 Q155 250 155 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M178 235 L188 250 M232 235 L222 250" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M172 190 Q185 175 198 190 Q185 200 172 190 Z" fill={dark} />
      <path d="M212 190 Q225 175 238 190 Q225 200 212 190 Z" fill={dark} />
      <path d="M195 205 L205 220 L215 205" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M180 235 Q205 245 230 235" fill="none" stroke={dark} strokeWidth="3" />
      {/* colorful flowers decorating it */}
      {[[172, 160, gold], [205, 148, accentColor], [238, 160, purple], [190, 172, purple], [220, 172, gold]].map(([x, y, c], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={Number(x)} cy={Number(y) - 8} rx="6" ry="9" fill={c as string} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
          <circle cx={Number(x)} cy={Number(y)} r="4" fill={dark} />
        </g>
      ))}
    </g>
  );
};

const Mariachi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* large charro hat */}
      <ellipse cx="165" cy="185" rx="75" ry="16" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M132 182 Q132 138 165 130 Q198 138 198 182 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M140 165 Q165 155 190 165" fill="none" stroke={gold} strokeWidth="3" />
      <path d="M132 182 Q165 195 198 182" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* guitar beside it: proper figure-eight acoustic body, waisted, with a soundhole */}
      <path
        d="M262 148 Q283 148 283 166 Q283 180 270 185 Q291 190 291 209 Q291 227 262 227 Q233 227 233 209 Q233 190 254 185 Q241 180 241 166 Q241 148 262 148 Z"
        fill={dark}
        stroke={shade(dark, 0.3)}
        strokeWidth="2.5"
      />
      <circle cx="262" cy="200" r="12" fill={shade(dark, 0.3)} />
      <rect x="258" y="95" width="8" height="55" fill={dark} />
      <path d="M250 95 L274 95 L270 78 L254 78 Z" fill={dark} />
      {[83, 90].map((y) => (
        <circle key={y} cx="248" cy={y} r="2.5" fill={gold} />
      ))}
      {[260, 263, 266].map((x) => (
        <line key={x} x1={x} y1="95" x2="262" y2="188" stroke={gold} strokeWidth="1" opacity="0.7" />
      ))}
    </g>
  );
};

const ChocolateOrigen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* open cacao pod */}
      <path d="M140 235 Q120 190 140 145 Q158 105 195 98 Q170 145 172 190 Q170 220 155 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M240 235 Q260 190 240 145 Q222 105 185 98 Q210 145 208 190 Q210 220 225 235 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      {[[175, 150], [188, 175], [180, 200], [200, 160], [205, 190], [195, 215]].map(([x, y]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="10" ry="13" fill={light} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* loose beans beside it */}
      <ellipse cx="290" cy="200" rx="13" ry="10" fill={dark} transform="rotate(20 290 200)" />
      <ellipse cx="270" cy="222" rx="13" ry="10" fill={dark} transform="rotate(-15 270 222)" />
    </g>
  );
};

const LuchaLibre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* wrestling mask, front view */}
      <path d="M155 235 L155 165 Q155 110 205 108 Q255 110 255 165 L255 235 Q255 245 245 245 L165 245 Q155 245 155 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M155 165 Q120 175 130 210 L155 205 Z" fill={dark} />
      <path d="M255 165 Q290 175 280 210 L255 205 Z" fill={dark} />
      <path d="M175 165 L200 155 L200 178 L175 185 Z" fill="#fff" />
      <path d="M235 165 L210 155 L210 178 L235 185 Z" fill="#fff" />
      <circle cx="187" cy="171" r="6" fill={dark} />
      <circle cx="223" cy="171" r="6" fill={dark} />
      <path d="M180 210 Q205 220 230 210" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M205 108 L205 130" stroke={gold} strokeWidth="6" />
      <path d="M165 130 L185 118 M245 130 L225 118" stroke={gold} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ChichenItza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2, 3, 4].map((row) => (
        <rect
          key={row}
          x={135 + row * 14}
          y={218 - row * 26}
          width={140 - row * 28}
          height="22"
          fill={row % 2 === 0 ? accentColor : light}
          stroke={dark}
          strokeWidth="1.5"
        />
      ))}
      {/* central staircase */}
      <path d="M195 240 L215 240 L209 110 L201 110 Z" fill={dark} opacity="0.7" />
      <rect x="192" y="98" width="26" height="16" fill={dark} />
    </g>
  );
};

const TacosComidaCallejera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#6B9B3F";
  const red = "#C1272D";
  const white = "#F5F0E6";
  return (
    <g>
      {/* folded tortilla */}
      <path d="M115 210 Q205 250 295 210 Q290 190 205 195 Q120 190 115 210 Z" fill={white} stroke={dark} strokeWidth="3" />
      {/* colorful filling peeking out the top */}
      <path d="M130 195 Q160 165 190 195 Q220 165 250 195 Q280 175 285 200 L120 200 Z" fill="#B5651D" />
      {[[150, 180], [180, 175], [210, 182], [240, 178]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="6" fill={green} />
      ))}
      {[[165, 190], [225, 190]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill={red} />
      ))}
    </g>
  );
};

const FridaKahlo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const gold = "#F4A300";
  return (
    <g>
      {/* face */}
      <ellipse cx="205" cy="175" rx="48" ry="58" fill={skin} />
      {/* unibrow */}
      <path d="M172 150 Q205 138 238 150" fill="none" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="185" cy="165" r="4" fill="#1A1A1A" />
      <circle cx="225" cy="165" r="4" fill="#1A1A1A" />
      <path d="M195 195 Q205 202 215 195" fill="none" stroke={dark} strokeWidth="3" />
      {/* flowers in the hair */}
      {[[170, 128], [205, 115], [240, 128]].map(([x, y], i) => (
        <g key={x}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx={x} cy={y - 7} rx="6" ry="8" fill={i % 2 === 0 ? accentColor : gold} transform={`rotate(${deg} ${x} ${y})`} />
          ))}
          <circle cx={x} cy={y} r="3.5" fill={dark} />
        </g>
      ))}
    </g>
  );
};

const MuralismoMexicano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const red = "#C1272D";
  return (
    <g>
      {/* colorful mural fragment */}
      <rect x="90" y="105" width="150" height="130" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M90 200 Q140 170 190 200 L240 185 L240 235 L90 235 Z" fill={accentColor} />
      <circle cx="140" cy="140" r="20" fill={red} />
      <path d="M170 150 L220 120 L225 145 L180 165 Z" fill={dark} opacity="0.7" />
      {/* large paintbrush beside it */}
      <path d="M260 235 L295 140 L305 143 L275 238 Z" fill="#B5651D" />
      <rect x="288" y="118" width="20" height="26" fill={dark} transform="rotate(18 298 131)" />
      <path d="M295 108 Q310 112 305 128 L288 122 Q290 110 295 108 Z" fill={red} transform="rotate(18 298 131)" />
    </g>
  );
};

const TenochtitlanLago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.55" />
      {[[140, 140], [210, 120], [270, 165], [155, 205], [230, 210]].map(([x, y], i) => (
        <rect key={x} x={x} y={y} width={60 - (i % 2) * 10} height={40 - (i % 2) * 6} rx="4" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M95 175 Q210 165 320 178" stroke="#fff" strokeWidth="3" opacity="0.4" fill="none" />
    </g>
  );
};

const VirgenDeGuadalupe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const night = "#1B2A4A";
  return (
    <g>
      {/* golden rays radiating outward */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <path key={deg} d="M205 165 Q198 120 205 75 Q212 120 205 165 Z" fill={gold} opacity="0.85" transform={`rotate(${deg} 205 165)`} />
      ))}
      {/* starry cloak */}
      <path d="M205 110 Q160 130 165 190 Q170 230 205 245 Q240 230 245 190 Q250 130 205 110 Z" fill={night} stroke={dark} strokeWidth="3" />
      {[[185, 150], [220, 145], [200, 180], [230, 190], [180, 205]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2.5" fill="#fff" />
      ))}
    </g>
  );
};

export const mexicoIllustrations: Record<string, IllustrationDefinition> = {
  "dia-de-los-muertos": { component: DiaDeLosMuertos },
  mariachi: { component: Mariachi },
  "chocolate-origen": { component: ChocolateOrigen },
  "lucha-libre": { component: LuchaLibre },
  "chichen-itza": { component: ChichenItza },
  "tacos-comida-callejera": { component: TacosComidaCallejera },
  "frida-kahlo": { component: FridaKahlo },
  "muralismo-mexicano": { component: MuralismoMexicano },
  "tenochtitlan-lago": { component: TenochtitlanLago },
  "virgen-de-guadalupe": { component: VirgenDeGuadalupe },
};
