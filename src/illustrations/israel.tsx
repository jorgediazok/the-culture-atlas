import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MarMuerto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const skinDark = shade(skin, 0.35);
  const paper = "#F5F0E6";
  return (
    <g>
      {/* salty water, hazy hills behind */}
      <path d="M90 190 Q140 178 200 190 Q260 178 320 190 L320 250 L90 250 Z" fill={accentColor} />
      {[110, 150, 190, 230, 270, 300].map((x, i) => (
        <path
          key={x}
          d={`M${x - 12} ${196 + (i % 2) * 6} Q${x} ${190 + (i % 2) * 6} ${x + 12} ${196 + (i % 2) * 6}`}
          fill="none"
          stroke={tint(accentColor, 0.4)}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      {/* legs trailing off the far side, at the surface — drawn first so
          the torso's own outline (below) paints over and absorbs the
          seam where they meet, instead of the two same-color shapes
          blurring into one blob with no visible boundary */}
      <path d="M162 192 Q136 197 118 190" fill="none" stroke={skin} strokeWidth="11" strokeLinecap="round" />
      {/* floating figure, on their back — head kept clearly separate from
          the torso (no overlap), and both get their own outline so the
          silhouette reads as a person, not a single blob */}
      <ellipse cx="196" cy="190" rx="38" ry="16" fill={skin} stroke={skinDark} strokeWidth="2" />
      {/* both arms bent up out of the water to hold the newspaper above */}
      <path d="M216 180 Q220 154 234 143" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M236 180 Q248 154 260 143" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <circle cx="250" cy="176" r="15" fill={skin} stroke={skinDark} strokeWidth="2" />
      {/* newspaper held up */}
      <rect x="216" y="108" width="46" height="32" fill={paper} stroke={dark} strokeWidth="2" transform="rotate(-6 239 124)" />
      <line x1="224" y1="118" x2="254" y2="115" stroke={dark} strokeWidth="1.5" transform="rotate(-6 239 124)" />
      <line x1="224" y1="127" x2="254" y2="124" stroke={dark} strokeWidth="1.5" transform="rotate(-6 239 124)" />
      {/* salt crystal shore */}
      {[[100, 235], [130, 240], [300, 238]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} L${x + 8} ${y - 10} L${x + 16} ${y} Z`} fill="#F0F0F0" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const Masada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rock = shade(accentColor, 0.15);
  return (
    <g>
      {/* rocky plateau rising from the desert floor */}
      <path d="M100 245 L140 150 L270 150 L310 245 Z" fill={rock} stroke={dark} strokeWidth="3" />
      <path d="M120 245 L150 170 L260 170 L290 245 Z" fill={accentColor} opacity="0.35" />
      {/* fortress wall along the top edge */}
      <rect x="145" y="128" width="120" height="26" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[150, 175, 200, 225, 250].map((x) => (
        <rect key={x} x={x} y="118" width="10" height="14" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      {/* corner tower */}
      <rect x="150" y="100" width="24" height="54" fill={dark} />
      {[155, 165].map((x) => (
        <rect key={x} x={x} y="94" width="6" height="10" fill={dark} />
      ))}
      {/* winding snake path down the cliff */}
      <path
        d="M300 150 Q280 165 290 185 Q300 205 275 215 Q255 222 260 245"
        fill="none"
        stroke={tint(accentColor, 0.6)}
        strokeWidth="4"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
    </g>
  );
};

const Hummus: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F0DFA8";
  const chickpea = "#D9BC6B";
  return (
    <g>
      {/* wide shallow bowl */}
      <ellipse cx="205" cy="205" rx="105" ry="34" fill={dark} />
      <ellipse cx="205" cy="196" rx="98" ry="30" fill={cream} stroke={dark} strokeWidth="3" />
      {/* swirled surface, spoon-drag pattern */}
      <path d="M140 196 Q170 178 205 196 Q240 214 270 196" fill="none" stroke={shade(cream, 0.15)} strokeWidth="4" strokeLinecap="round" />
      {/* pool of olive oil in the center well */}
      <ellipse cx="205" cy="192" rx="26" ry="12" fill={accentColor} opacity="0.85" />
      {/* whole chickpeas scattered on top */}
      {[[165, 185], [185, 178], [225, 182], [245, 190], [205, 172]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="6" fill={chickpea} stroke={shade(chickpea, 0.3)} strokeWidth="1" />
      ))}
      {/* sprinkle of paprika + parsley */}
      {[[175, 200], [235, 205], [200, 210]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2" fill="#B5432A" />
      ))}
      {/* pita bread wedge, torn, dipping in */}
      <path d="M270 165 L300 150 L292 185 Z" fill="#E8C572" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CiudadBlancaTelAviv: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const white = "#F2F0E6";
  return (
    <g>
      {/* main Bauhaus building block */}
      <rect x="140" y="110" width="130" height="130" fill={white} stroke={dark} strokeWidth="3" />
      {/* horizontal ribbon windows */}
      {[130, 155, 180, 205].map((y) => (
        <rect key={y} x="150" y={y} width="110" height="14" fill={accentColor} opacity="0.75" />
      ))}
      {/* curved corner balcony, signature Bauhaus feature */}
      <path d="M270 150 Q305 150 305 185 Q305 220 270 220 L270 205 Q290 205 290 185 Q290 165 270 165 Z" fill={white} stroke={dark} strokeWidth="3" />
      <rect x="276" y="172" width="18" height="8" fill={accentColor} opacity="0.75" />
      <rect x="276" y="192" width="18" height="8" fill={accentColor} opacity="0.75" />
      {/* rounded railing posts along the roof */}
      {[150, 165, 180].map((x) => (
        <circle key={x} cx={x} cy="106" r="4" fill={dark} />
      ))}
      <line x1="146" y1="106" x2="184" y2="106" stroke={dark} strokeWidth="2" />
      {/* palm tree beside the building */}
      <line x1="115" y1="240" x2="118" y2="180" stroke="#8B6B3D" strokeWidth="6" />
      {[[-18, -10], [0, -18], [18, -10], [-10, 4], [12, 2]].map(([dx, dy], i) => (
        <path key={i} d={`M118 180 Q${118 + dx} ${178 + dy} ${118 + dx * 1.6} ${180 + dy * 1.4}`} fill="none" stroke="#4A8F4E" strokeWidth="5" strokeLinecap="round" />
      ))}
    </g>
  );
};

function danceFigure(x: number, dark: string, color: string, skin: string) {
  return (
    <g key={x}>
      <circle cx={x} cy="145" r="14" fill={skin} />
      <path d={`M${x - 15} 159 Q${x} 152 ${x + 15} 159 L${x + 11} 222 L${x - 11} 222 Z`} fill={color} stroke={dark} strokeWidth="2" />
      {/* legs mid-step */}
      <path d={`M${x - 8} 218 L${x - 18} 245 M${x + 8} 218 L${x + 2} 245`} stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
}

const LaHora: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const positions = [130, 205, 280];
  return (
    <g>
      {positions.map((x, i) => danceFigure(x, dark, i % 2 === 0 ? accentColor : dark, skin))}
      {/* linked arms over shoulders connecting the circle */}
      <path d="M144 165 L191 165 M219 165 L266 165" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* motion arcs suggesting the circle spinning */}
      <path d="M95 200 Q100 150 145 130" fill="none" stroke={tint(accentColor, 0.5)} strokeWidth="3" strokeDasharray="3 7" strokeLinecap="round" />
      <path d="M315 200 Q310 150 265 130" fill="none" stroke={tint(accentColor, 0.5)} strokeWidth="3" strokeDasharray="3 7" strokeLinecap="round" />
    </g>
  );
};

const RenacimientoDelHebreo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const skin = "#D9A46A";
  const letters = ["א", "ב", "ש", "ל", "ם"];
  const letterPositions: [number, number, number][] = [
    [130, 110, -8],
    [165, 95, 5],
    [245, 100, -4],
    [280, 118, 10],
    [205, 85, 0],
  ];
  return (
    <g>
      {/* floating hebrew letters above */}
      {letterPositions.map(([x, y, rot], i) => (
        <text
          key={i}
          x={x}
          y={y}
          fontSize="26"
          fontWeight="700"
          fill={accentColor}
          opacity="0.85"
          transform={`rotate(${rot} ${x} ${y})`}
        >
          {letters[i]}
        </text>
      ))}
      {/* seated figure writing */}
      <circle cx="205" cy="165" r="18" fill={skin} />
      <path d="M180 182 Q205 172 230 182 L224 240 L186 240 Z" fill={dark} />
      {/* desk / notebook */}
      <rect x="165" y="225" width="90" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M175 232 L235 232 M175 238 L220 238" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      {/* writing arm */}
      <path d="M215 195 Q235 205 232 225" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const JardinesBahai: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const terraces = [240, 222, 204, 186, 168];
  return (
    <g>
      {terraces.map((y, i) => (
        <g key={y}>
          <rect x={95 + i * 8} y={y} width={210 - i * 16} height="16" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="1.5" />
          {/* clipped hedge line along each terrace */}
          <path
            d={`M${100 + i * 8} ${y} Q${150 + i * 4} ${y - 6} ${205} ${y} Q${260 - i * 4} ${y - 6} ${300 - i * 8} ${y}`}
            fill="none"
            stroke={shade(accentColor, 0.2)}
            strokeWidth="2"
          />
        </g>
      ))}
      {/* golden-domed shrine at the top */}
      <rect x="180" y="118" width="50" height="34" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M180 118 Q205 92 230 118 Z" fill={gold} stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="88" r="4" fill={gold} />
      {/* central staircase running down the terraces */}
      <path d="M205 152 L205 240" stroke="#E8E3D3" strokeWidth="10" opacity="0.8" />
    </g>
  );
};

const RiegoPorGoteo: IllustrationComponent = ({ accentColor }) => {
  const soil = "#8B6B3D";
  return (
    <g>
      {/* mound of soil */}
      <path d="M110 245 Q205 200 300 245 Z" fill={soil} />
      {/* thriving plant */}
      <path d="M205 200 L205 245" stroke="#4A8F4E" strokeWidth="6" />
      {[[-30, -8], [30, -14], [-18, -32], [20, -36], [0, -46]].map(([dx, dy], i) => (
        <ellipse key={i} cx={205 + dx * 0.9} cy={200 + dy} rx="20" ry="12" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} transform={`rotate(${dx > 0 ? 25 : -25} ${205 + dx * 0.9} ${200 + dy})`} />
      ))}
      {/* drip irrigation tube */}
      <path d="M100 130 Q205 118 310 130" fill="none" stroke="#3A3A3A" strokeWidth="6" />
      {/* emitter dripping directly onto the root */}
      <line x1="205" y1="130" x2="205" y2="150" stroke="#3A3A3A" strokeWidth="4" />
      <circle cx="205" cy="130" r="6" fill="#3A3A3A" />
      {/* falling drops */}
      {[160, 178, 196].map((y, i) => (
        <path key={y} d={`M205 ${y} Q202 ${y + 6} 205 ${y + 12} Q208 ${y + 6} 205 ${y}`} fill="#7FB3D9" opacity={1 - i * 0.25} />
      ))}
      {/* dry cracked desert ground beyond the mound */}
      {[[120, 235], [280, 238]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} L${x + 10} ${y - 6} M${x + 4} ${y} L${x + 12} ${y + 5}`} stroke={shade(soil, 0.3)} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const Shakshuka: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const iron = "#3A3A3A";
  const sauce = "#C8492A";
  return (
    <g>
      {/* cast iron skillet */}
      <ellipse cx="205" cy="200" rx="100" ry="36" fill={iron} />
      <ellipse cx="205" cy="192" rx="92" ry="30" fill={sauce} stroke={shade(sauce, 0.3)} strokeWidth="3" />
      {/* skillet handle */}
      <rect x="295" y="185" width="55" height="14" fill={iron} transform="rotate(6 322 192)" />
      {/* poached eggs sunk into the sauce */}
      {[[170, 188], [235, 195]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="24" ry="15" fill="#F5F0E6" />
          <circle cx={x + 3} cy={y} r="8" fill="#E8A83A" />
        </g>
      ))}
      {/* pepper and tomato chunks in the sauce */}
      {[[150, 205], [270, 202], [205, 212]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill={accentColor} opacity="0.8" />
      ))}
      {/* torn pita dipping in */}
      <path d="M120 155 L150 140 L142 175 Z" fill="#E8C572" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Klezmer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const wood = "#6B4A2A";
  return (
    <g>
      {/* clarinetist */}
      <circle cx="150" cy="140" r="17" fill={skin} />
      <path d="M128 156 Q150 148 172 156 L166 225 L134 225 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M150 150 L185 175 L192 232" fill="none" stroke="#2A2A2A" strokeWidth="7" strokeLinecap="round" />
      <circle cx="188" cy="200" r="2.5" fill="#F5F0E6" />
      <circle cx="190" cy="212" r="2.5" fill="#F5F0E6" />
      {/* violinist */}
      <circle cx="270" cy="135" r="17" fill={skin} />
      <path d="M248 151 Q270 143 292 151 L286 225 L254 225 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      {/* violin body under the chin */}
      <path d="M255 150 Q248 165 255 180 Q262 195 255 205 Q248 195 245 178 Q248 162 255 150 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
      <path d="M270 138 L255 158" stroke={wood} strokeWidth="4" />
      {/* bow arm */}
      <path d="M290 165 L245 190" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="290" y1="165" x2="315" y2="150" stroke="#D9C89A" strokeWidth="2" />
    </g>
  );
};

function ibexFigure(x: number, y: number, scale: number, dark: string, coat: string) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* long horn, drawn first and rooted into the head circle below it,
          sweeping back and up over the body in a wide tapered arc — an
          ibex's single most distinctive feature, so it gets the most
          visual weight. */}
      <path d="M28 -25 Q44 -39 32 -51 Q22 -59 12 -51 Q22 -47 26 -37 Q16 -43 2 -41 Q-10 -39 -16 -31 Q-4 -35 8 -33 Q20 -31 24 -21 Q26 -21 28 -25 Z" fill={dark} />
      {/* body, side profile */}
      <path d="M-34 21 Q-38 -1 -8 -5 Q14 -8 28 1 Q36 7 28 15 Q0 25 -26 27 Q-34 27 -34 21 Z" fill={coat} stroke={dark} strokeWidth="2.5" />
      {/* neck, connecting the body up into the head */}
      <path d="M6 11 Q2 -9 16 -21 L30 -15 Q26 -1 18 11 Q12 17 6 11 Z" fill={coat} stroke={dark} strokeWidth="2.5" />
      {/* head, a distinct rounded mass with its own snout */}
      <circle cx="28" cy="-23" r="15" fill={coat} stroke={dark} strokeWidth="2.5" />
      <path d="M40 -27 L52 -23 L40 -15 Z" fill={coat} stroke={dark} strokeWidth="2" />
      <circle cx="32" cy="-27" r="2.2" fill={dark} />
      <path d="M14 -33 Q20 -39 26 -35" fill="none" stroke={dark} strokeWidth="2" strokeLinecap="round" />
      {/* legs, front and back pairs */}
      <path d="M-26 25 L-30 45 M-12 27 L-15 45 M6 25 L8 43 M22 17 L26 35" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      {/* short tail */}
      <path d="M-34 15 Q-44 17 -42 27" fill="none" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

const CabrasDeEinGuedi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const coat = tint(accentColor, 0.35);
  return (
    <g>
      {/* rocky ledge */}
      <path d="M90 220 L140 190 L200 215 L260 185 L320 220 L320 250 L90 250 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      {ibexFigure(190, 195, 1.15, dark, coat)}
      {ibexFigure(280, 220, 0.75, shade(dark, 0.1), shade(coat, 0.1))}
    </g>
  );
};

const LagoDeTiberiades: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const hills = tint(accentColor, 0.3);
  const wood = "#8B6B3D";
  return (
    <g>
      {/* green hills along the far shore */}
      <path d="M90 165 Q140 140 200 160 Q260 138 320 162 L320 180 L90 180 Z" fill={hills} />
      {/* lake water */}
      <rect x="90" y="175" width="230" height="70" fill={accentColor} />
      {[110, 150, 190, 230, 270].map((x, i) => (
        <path key={x} d={`M${x - 12} ${200 + (i % 2) * 8} Q${x} ${194 + (i % 2) * 8} ${x + 12} ${200 + (i % 2) * 8}`} fill="none" stroke={tint(accentColor, 0.45)} strokeWidth="2" strokeLinecap="round" />
      ))}
      {/* wooden fishing boat */}
      <path d="M160 210 L250 210 L235 230 L175 230 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      <line x1="205" y1="210" x2="205" y2="175" stroke={wood} strokeWidth="4" />
      <path d="M205 178 L205 205 L232 205 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      {/* fishing net cast beside the boat */}
      <path d="M150 220 Q135 235 145 248" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="2 4" />
    </g>
  );
};

export const israelIllustrations: Record<string, IllustrationDefinition> = {
  "mar-muerto": { component: MarMuerto },
  masada: { component: Masada },
  hummus: { component: Hummus },
  "ciudad-blanca-tel-aviv": { component: CiudadBlancaTelAviv },
  "la-hora": { component: LaHora },
  "renacimiento-del-hebreo": { component: RenacimientoDelHebreo },
  "jardines-bahai": { component: JardinesBahai },
  "riego-por-goteo": { component: RiegoPorGoteo },
  shakshuka: { component: Shakshuka },
  klezmer: { component: Klezmer },
  "cabras-de-ein-guedi": { component: CabrasDeEinGuedi },
  "lago-de-tiberiades": { component: LagoDeTiberiades },
};
