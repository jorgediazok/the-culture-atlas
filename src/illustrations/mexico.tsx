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

const Teotihuacan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  const gold = "#D4A017";
  return (
    <g>
      {/* Pyramid of the Moon, smaller, in the background */}
      <path d="M95 210 L140 210 L128 155 L107 155 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" opacity="0.6" />
      {/* Avenue of the Dead leading toward the main pyramid */}
      <path d="M170 250 L280 250 L255 240 L195 240 Z" fill={light} opacity="0.5" />
      {/* Pyramid of the Sun, four talud-tablero tiers */}
      <path d="M140 240 L310 240 L297.5 208 L152.5 208 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M152.5 208 L297.5 208 L285 176 L165 176 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      <path d="M165 176 L285 176 L272.5 144 L177.5 144 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M177.5 144 L272.5 144 L260 112 L190 112 Z" fill={light} stroke={dark} strokeWidth="2.5" />
      {/* central staircase */}
      <path d="M212 240 L238 240 L228 112 L222 112 Z" fill={dark} opacity="0.55" />
      {/* temple platform on top */}
      <rect x="195" y="95" width="55" height="17" fill={dark} />
      <path d="M205 95 L245 95 L235 80 L215 80 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      {/* sun with rays, upper right, echoing the pyramid's name */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect key={deg} x="293" y="65" width="4" height="14" fill={gold} transform={`rotate(${deg} 297 85)`} />
      ))}
      <circle cx="297" cy="85" r="14" fill={gold} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const TequilaMezcal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const leaf = shade(accentColor, 0.1);
  const gold = "#D4A017";
  const glass = "#EADFC8";
  return (
    <g>
      {/* blue agave rosette, spiky pointed leaves radiating from a base */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <path
          key={deg}
          d="M175 205 Q166 165 172 118 Q175 108 178 118 Q186 165 175 205 Z"
          fill={leaf}
          stroke={dark}
          strokeWidth="2"
          transform={`rotate(${deg} 175 205)`}
        />
      ))}
      <circle cx="175" cy="205" r="14" fill={dark} />
      {/* bottle */}
      <rect x="238" y="130" width="42" height="95" rx="4" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="252" y="100" width="14" height="34" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="249" y="88" width="20" height="16" rx="3" fill={dark} />
      <rect x="244" y="160" width="30" height="34" fill={glass} stroke={dark} strokeWidth="1.5" opacity="0.9" />
      {/* caballito (shot glass) in front */}
      <path d="M285 210 L305 210 L300 240 L290 240 Z" fill={glass} stroke={dark} strokeWidth="2.5" />
      <path d="M287 212 L303 212 L301 224 L289 224 Z" fill={gold} />
    </g>
  );
};

function rifleShape(color: string, guardColor: string) {
  return (
    <>
      <path d="M130 150 L100 145 L98 172 L130 167 Z" fill={color} />
      <rect x="128" y="153" width="150" height="8" fill={color} />
      <rect x="270" y="154" width="16" height="6" fill={shade(color, 0.25)} />
      <path d="M186 161 Q186 179 202 179 Q216 179 216 161" fill="none" stroke={guardColor} strokeWidth="3.5" />
    </>
  );
}

const RevolucionMexicana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const gold = "#D4A017";
  const brim = shade(accentColor, 0.15);
  return (
    <g>
      {/* crossed rifles */}
      <g transform="rotate(38 205 158)">{rifleShape(dark, gold)}</g>
      <g transform="rotate(-38 205 158)">{rifleShape(dark, gold)}</g>
      {/* wide sombrero below */}
      <ellipse cx="205" cy="222" rx="82" ry="17" fill={brim} stroke={dark} strokeWidth="3" />
      <path d="M168 220 Q168 178 205 172 Q242 178 242 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M178 200 Q205 191 232 200" fill="none" stroke={gold} strokeWidth="3" />
      {/* bandolier draped across the brim with cartridge loops */}
      <path d="M135 210 Q205 232 275 210" fill="none" stroke="#4A3222" strokeWidth="9" />
      {[150, 172, 194, 216, 238, 260].map((x, i) => (
        <ellipse key={x} cx={x} cy={210 + (i % 2 === 0 ? 6 : 10)} rx="4.5" ry="8" fill={gold} stroke="#4A3222" strokeWidth="1" />
      ))}
    </g>
  );
};

const GritoDeDolores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bronze = "#B08D57";
  const gold = "#D4A017";
  return (
    <g>
      {/* mounting bracket, drawn first so the bell's fill absorbs the seam */}
      <rect x="150" y="72" width="110" height="10" fill={dark} />
      <rect x="195" y="78" width="20" height="42" fill={shade(bronze, 0.2)} />
      {/* bell */}
      <path d="M180 130 Q175 100 205 95 Q235 100 230 130 Q246 152 240 176 Q237 196 205 199 Q173 196 170 176 Q164 152 180 130 Z" fill={bronze} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="196" rx="35" ry="7" fill={shade(bronze, 0.3)} />
      <line x1="205" y1="150" x2="205" y2="205" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="209" r="7" fill={shade(bronze, 0.3)} />
      {/* balcony rail below */}
      <rect x="140" y="228" width="140" height="9" fill={dark} />
      {[150, 170, 190, 210, 230, 250, 270].map((x) => (
        <rect key={x} x={x} y="237" width="4" height="13" fill={dark} />
      ))}
      {/* banners strung above */}
      <path d="M120 90 Q205 70 290 90" fill="none" stroke={dark} strokeWidth="2" />
      {[[135, 92], [165, 84], [195, 79], [225, 80], [255, 86], [280, 91]].map(([x, y], i) => (
        <path key={x} d={`M${x} ${y} L${Number(x) - 8} ${Number(y) + 20} L${Number(x) + 8} ${Number(y) + 20} Z`} fill={i % 3 === 0 ? gold : i % 3 === 1 ? accentColor : "#F5F0E6"} />
      ))}
    </g>
  );
};

const MolePoblanoCocinaRegional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mole = "#3D2418";
  const gold = "#D4A017";
  const plate = "#F5F0E6";
  return (
    <g>
      {/* plate with mole sauce */}
      <ellipse cx="205" cy="222" rx="95" ry="26" fill={plate} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="219" rx="72" ry="18" fill={mole} />
      {/* legs, drawn first so the body's fill covers the seam */}
      <path d="M188 155 L184 208 L172 218 M188 155 L192 208" stroke="#8C5A2B" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M218 155 L226 208 L238 218 M218 155 L218 208" stroke="#8C5A2B" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* body */}
      <ellipse cx="200" cy="150" rx="35" ry="28" fill="#8C5A2B" stroke={dark} strokeWidth="2.5" />
      {/* neck and head, drawn so the neck base sits well inside the body (verified numerically: both base points 15-20 units inside the body ellipse) */}
      <path d="M216 147 Q222 122 238 100 Q244 92 250 96 Q238 122 219 154 Z" fill="#8C5A2B" stroke={dark} strokeWidth="2" />
      <circle cx="248" cy="90" r="12" fill="#8C5A2B" stroke={dark} strokeWidth="2" />
      <path d="M258 90 L272 86 L258 96 Z" fill={gold} />
      <path d="M248 100 Q244 112 250 118 Q256 112 250 100 Z" fill="#C1272D" />
      {/* tail feathers fanning from the back, base inside the body */}
      {[-40, -20, 0, 20, 40].map((deg, i) => (
        <path
          key={deg}
          d="M180 150 Q150 140 128 110 Q150 138 175 148 Z"
          fill={i % 2 === 0 ? accentColor : gold}
          stroke={dark}
          strokeWidth="1.5"
          transform={`rotate(${deg} 180 150)`}
        />
      ))}
      {/* steam */}
      <path d="M170 175 Q160 155 172 140 M205 178 Q195 158 207 143" stroke="#fff" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
    </g>
  );
};

const TextilesIndigenasOaxacaChiapas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5F0E6";
  const bandColors = [accentColor, "#D4A017", "#1B7F79", "#6B3FA0", "#E67E22"];
  return (
    <g>
      {/* huipil tunic silhouette */}
      <path d="M140 100 L270 100 L282 240 L128 240 Z" fill={cream} stroke={dark} strokeWidth="3" />
      <path d="M188 100 Q205 88 222 100 Q205 112 188 100 Z" fill={dark} />
      {/* embroidered geometric bands */}
      {[135, 158, 181, 204, 227].map((y, i) => {
        const w = 130 + i * 5;
        const x0 = 205 - w / 2;
        const pts: string[] = [];
        for (let x = x0; x <= x0 + w; x += 14) {
          pts.push(`${x},${y + ((x - x0) / 14) % 2 === 0 ? -6 : 6}`);
        }
        return <polyline key={y} points={pts.join(" ")} fill="none" stroke={bandColors[i % bandColors.length]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />;
      })}
      {/* small diamond accents between bands */}
      {[146, 192].map((y, i) => (
        <rect key={y} x="197" y={y - 8} width="16" height="16" fill={bandColors[(i + 2) % bandColors.length]} transform={`rotate(45 205 ${y})`} />
      ))}
    </g>
  );
};

const Charreria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const horse = "#4A3222";
  const horseDark = shade(horse, 0.3);
  const gold = "#D4A017";
  return (
    <g>
      {/* tail, drawn first so the body covers its base */}
      <path d="M140 180 Q95 190 82 225 Q100 195 150 182 Z" fill={horseDark} />
      {/* legs, drawn first so the body covers their tops (verified numerically: top points sit 15-25 units inside the body path) */}
      <path d="M235 182 Q250 205 262 224" fill="none" stroke={horseDark} strokeWidth="8" strokeLinecap="round" />
      <path d="M215 175 Q218 200 222 223" fill="none" stroke={horseDark} strokeWidth="8" strokeLinecap="round" />
      <path d="M153 175 Q135 205 122 228" fill="none" stroke={horseDark} strokeWidth="8" strokeLinecap="round" />
      <path d="M173 175 Q178 202 184 226" fill="none" stroke={horseDark} strokeWidth="8" strokeLinecap="round" />
      {/* neck and head, drawn first so the body covers the base seam */}
      <path d="M225 175 Q245 150 262 128 Q270 116 280 114 L286 124 Q276 134 264 150 Q248 168 233 186 Z" fill={horse} stroke={dark} strokeWidth="2" />
      <path d="M275 112 L268 100 L282 108 Z" fill={horse} />
      {/* body */}
      <path d="M120 190 Q110 165 140 158 Q190 148 230 160 Q255 168 250 195 Q245 215 210 218 Q160 220 130 210 Q118 202 120 190 Z" fill={horse} stroke={dark} strokeWidth="2.5" />
      {[[232, 118], [245, 128], [220, 115]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} L${Number(x) - 6} ${Number(y) - 10} L${Number(x) + 2} ${Number(y) - 12}`} stroke={horseDark} strokeWidth="4" fill="none" strokeLinecap="round" />
      ))}
      {/* rider seated on top, torso overlapping into the horse's back */}
      <path d="M175 108 Q175 92 200 90 Q220 92 220 108 L216 170 L180 170 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="198" cy="80" r="15" fill="#D9A46A" />
      <ellipse cx="198" cy="68" rx="24" ry="8" fill={dark} />
      <path d="M186 62 Q198 52 210 62 Q210 68 198 68 Q186 68 186 62 Z" fill={dark} />
      {/* arm and lasso */}
      <path d="M212 110 Q250 108 280 130" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="305" cy="140" rx="19" ry="15" fill="none" stroke={gold} strokeWidth="3.5" />
    </g>
  );
};

// Film reel hole angles precomputed offline (0°, 60°, ... 300°), placed via SVG rotate transforms.
const REEL_HOLE_ANGLES = [0, 60, 120, 180, 240, 300];

const EpocaDeOroCineMexicano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const filmBlack = "#2A2A2A";
  const silver = "#D8D8D8";
  return (
    <g>
      {/* film reel */}
      <circle cx="155" cy="165" r="58" fill={filmBlack} stroke={dark} strokeWidth="3" />
      <circle cx="155" cy="165" r="50" fill="none" stroke={silver} strokeWidth="2" opacity="0.5" />
      {REEL_HOLE_ANGLES.map((deg) => (
        <circle key={deg} cx="155" cy="133" r="10" fill={accentColor} transform={`rotate(${deg} 155 165)`} />
      ))}
      <circle cx="155" cy="165" r="9" fill={accentColor} />
      {/* film strip streaming toward the clapperboard */}
      <path d="M205 150 Q225 145 245 155" fill="none" stroke={filmBlack} strokeWidth="14" strokeLinecap="round" />
      {[212, 224, 236].map((x) => (
        <rect key={x} x={x - 4} y="146" width="8" height="8" fill={silver} transform={`rotate(-8 ${x} 150)`} />
      ))}
      {/* clapperboard */}
      <rect x="228" y="158" width="82" height="64" fill={filmBlack} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${232 + i * 20} 158 L${248 + i * 20} 158 L${240 + i * 20} 178 L${224 + i * 20} 178 Z`} fill={i % 2 === 0 ? silver : filmBlack} stroke={dark} strokeWidth="1" />
      ))}
      <rect x="228" y="140" width="86" height="16" fill={filmBlack} stroke={dark} strokeWidth="2.5" transform="rotate(-14 232 156)" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={232 + i * 20} y="140" width="12" height="16" fill={i % 2 === 0 ? silver : filmBlack} transform="rotate(-14 232 156)" />
      ))}
    </g>
  );
};

const ZocaloCatedralMetropolitana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const gold = "#D4A017";
  return (
    <g>
      {/* plaza foreground */}
      <path d="M100 250 L310 250 L280 218 L130 218 Z" fill={light} stroke={dark} strokeWidth="1.5" />
      {[150, 180, 210, 240, 270].map((x) => (
        <line key={x} x1={x} y1="250" x2={x - 8} y2="218" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      {/* flagpole in the plaza */}
      <line x1="205" y1="245" x2="205" y2="200" stroke={dark} strokeWidth="2" />
      <path d="M205 200 L225 206 L205 212 Z" fill="#2E7D32" />
      {/* left tower */}
      <rect x="140" y="112" width="38" height="112" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="145" y="98" width="28" height="18" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M147 98 L172 98 L159 74 Z" fill={dark} />
      {/* right tower */}
      <rect x="232" y="112" width="38" height="112" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="237" y="98" width="28" height="18" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M239 98 L264 98 L251 74 Z" fill={dark} />
      {/* central nave facade */}
      <rect x="175" y="130" width="60" height="94" fill={shade(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <path d="M175 130 L235 130 L205 105 Z" fill={dark} />
      <path d="M195 224 Q195 195 205 195 Q215 195 215 224 Z" fill={dark} />
      <circle cx="205" cy="150" r="10" fill={gold} opacity="0.85" />
    </g>
  );
};

function monarchButterfly(x: number, y: number, scale: number, rotation: number) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotation})`}>
      {/* wings drawn first so the body's fill absorbs the seam at the base */}
      <path d="M-2 -4 Q-22 -30 -16 -6 Q-14 4 -2 2 Z" fill="#E67E22" stroke="#1A1A1A" strokeWidth="1.5" />
      <path d="M2 -4 Q22 -30 16 -6 Q14 4 2 2 Z" fill="#E67E22" stroke="#1A1A1A" strokeWidth="1.5" />
      <path d="M-2 2 Q-16 20 -8 10 Q-6 4 -2 4 Z" fill="#E67E22" stroke="#1A1A1A" strokeWidth="1.5" />
      <path d="M2 2 Q16 20 8 10 Q6 4 2 4 Z" fill="#E67E22" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="-9" cy="-14" r="1.6" fill="#fff" />
      <circle cx="9" cy="-14" r="1.6" fill="#fff" />
      <circle cx="-5" cy="8" r="1.3" fill="#fff" />
      <circle cx="5" cy="8" r="1.3" fill="#fff" />
      <ellipse cx="0" cy="0" rx="2.2" ry="15" fill="#1A1A1A" />
      <path d="M-2 -13 L-6 -20 M2 -13 L6 -20" stroke="#1A1A1A" strokeWidth="1" />
    </g>
  );
}

const MariposaMonarca: IllustrationComponent = () => {
  const branch = "#5C4A3A";
  const needle = "#3D5C3A";
  return (
    <g>
      {/* oyamel fir branch */}
      <path d="M95 175 Q200 160 315 178" fill="none" stroke={branch} strokeWidth="8" strokeLinecap="round" />
      {[115, 145, 175, 205, 235, 265, 295].map((x, i) => (
        <path key={x} d={`M${x} ${170 - (i % 2) * 4} L${x - 6} ${152 - (i % 2) * 4} M${x} ${170 - (i % 2) * 4} L${x + 4} ${150 - (i % 2) * 4}`} stroke={needle} strokeWidth="4" strokeLinecap="round" />
      ))}
      {monarchButterfly(140, 118, 1.15, -12)}
      {monarchButterfly(185, 100, 0.9, 18)}
      {monarchButterfly(225, 125, 1.2, -6)}
      {monarchButterfly(265, 105, 0.95, 22)}
      {monarchButterfly(200, 148, 0.8, -18)}
      {monarchButterfly(150, 160, 0.85, 10)}
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
  teotihuacan: { component: Teotihuacan },
  "tequila-mezcal": { component: TequilaMezcal },
  "revolucion-mexicana": { component: RevolucionMexicana },
  "grito-de-dolores": { component: GritoDeDolores },
  "mole-poblano-cocina-regional": { component: MolePoblanoCocinaRegional },
  "textiles-indigenas-oaxaca-chiapas": { component: TextilesIndigenasOaxacaChiapas },
  charreria: { component: Charreria },
  "epoca-de-oro-cine-mexicano": { component: EpocaDeOroCineMexicano },
  "zocalo-catedral-metropolitana": { component: ZocaloCatedralMetropolitana },
  "mariposa-monarca": { component: MariposaMonarca },
};
