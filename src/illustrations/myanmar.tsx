import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BaganMilesDeTemplos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mist = "#E8E4DC";
  return (
    <g>
      {[[110, 235, 30, 65], [155, 240, 42, 90], [215, 238, 36, 78], [265, 242, 34, 72]].map(([x, y, w, h], i) => (
        <g key={x}>
          <rect x={(x as number) - (w as number) / 2} y={(y as number) - (h as number)} width={w} height={h} fill={i % 2 === 0 ? accentColor : dark} stroke={dark} strokeWidth="2" />
          <path d={`M${(x as number) - (w as number) / 2 - 6} ${(y as number) - (h as number)} L${x} ${(y as number) - (h as number) - 34} L${(x as number) + (w as number) / 2 + 6} ${(y as number) - (h as number)} Z`} fill={i % 2 === 0 ? accentColor : dark} stroke={dark} strokeWidth="2" />
          <path d={`M${x} ${(y as number) - (h as number) - 34} L${x} ${(y as number) - (h as number) - 52}`} stroke={dark} strokeWidth="3" />
        </g>
      ))}
      <rect x="90" y="175" width="230" height="30" fill={mist} opacity="0.75" />
      <rect x="90" y="150" width="230" height="18" fill={mist} opacity="0.55" />
    </g>
  );
};

const PagodaShwedagonDeOro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4AF37";
  return (
    <g>
      <path d="M150 240 L260 240 L250 205 L160 205 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <path d="M160 205 L250 205 L240 175 L170 175 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <ellipse cx="205" cy="175" rx="42" ry="14" fill={shade(gold, 0.15)} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <path d="M178 175 Q178 130 205 118 Q232 130 232 175 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <path d="M195 118 Q205 95 215 118 Q210 108 205 105 Q200 108 195 118 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <line x1="205" y1="105" x2="205" y2="85" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="82" r="4" fill="#C1272D" />
      {[[168, 150], [242, 150], [180, 195], [230, 195]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} L${(x as number) - 4} ${(y as number) - 10} L${(x as number) + 4} ${(y as number) - 10} Z`} fill="#fff" opacity="0.85" />
      ))}
    </g>
  );
};

const LongyiVestimentaTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M155 235 Q155 175 165 140 Q205 128 245 140 Q255 175 255 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={170 + i * 18} y1="145" x2={170 + i * 18} y2="232" stroke={i % 2 === 0 ? light : dark} strokeWidth="4" opacity="0.6" />
      ))}
      <path d="M175 140 Q205 155 235 140 Q225 130 205 128 Q185 130 175 140 Z" fill={dark} />
      <path d="M195 140 L185 165 L215 160 L205 140 Z" fill={light} opacity="0.9" />
    </g>
  );
};

const ThanakaMaquillajeTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  const paste = accentColor;
  return (
    <g>
      <path d="M120 210 L120 165 Q120 155 132 155 L175 155 Q187 155 187 165 L187 210 Z" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      {[165, 178, 191, 204].map((y) => (
        <line key={y} x1="120" y1={y} x2="187" y2={y} stroke={shade(wood, 0.4)} strokeWidth="1.5" opacity="0.5" />
      ))}
      <ellipse cx="255" cy="225" rx="45" ry="14" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <ellipse cx="255" cy="218" rx="34" ry="12" fill={paste} stroke={dark} strokeWidth="2" />
      <path d="M215 175 L245 200" stroke={wood} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const LagoInleRemerosDePierna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const sky = "#F4C87A";
  const skin = "#D9A46A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="95" fill={sky} opacity="0.55" />
      <circle cx="290" cy="115" r="24" fill="#F4A300" opacity="0.85" />
      <path d="M90 178 Q205 165 320 178 L320 250 L90 250 Z" fill={water} />
      <path d="M130 205 Q140 175 200 172 Q245 170 250 190 L245 210 L135 215 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      {/* standing figure rowing with one leg */}
      <circle cx="205" cy="150" r="10" fill={skin} />
      <path d="M198 158 L212 158 L216 195 L194 195 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M198 175 Q170 180 165 165" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M212 195 Q225 210 240 225" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M199 195 Q195 215 205 235" stroke={accentColor} strokeWidth="6" strokeLinecap="round" fill="none" />
      <line x1="220" y1="150" x2="250" y2="230" stroke={dark} strokeWidth="3" />
      {/* cone fishing net */}
      <path d="M165 165 L145 200 L185 200 Z" fill="none" stroke={dark} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const RocaDoradaKyaiktiyo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4AF37";
  return (
    <g>
      <path d="M95 240 L165 165 L245 195 L320 240 Z" fill={dark} />
      <path d="M150 220 Q155 175 205 165 Q255 155 265 195 Q270 220 240 228 Q195 236 165 228 Q148 224 150 220 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <path d="M175 200 Q185 185 210 183" stroke="#fff" strokeWidth="3" opacity="0.5" fill="none" />
      <rect x="196" y="150" width="18" height="18" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <path d="M196 150 L205 132 L214 150 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <line x1="205" y1="132" x2="205" y2="118" stroke={dark} strokeWidth="2" />
      {[[130, 245], [290, 250]].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={(y as number) - 16} r="7" fill="#D9A46A" />
          <path d={`M${(x as number) - 8} ${(y as number) - 6} L${x} ${(y as number) - 12} L${(x as number) + 8} ${(y as number) - 6} L${(x as number) + 5} ${y} L${(x as number) - 5} ${y} Z`} fill={accentColor} />
        </g>
      ))}
    </g>
  );
};

const MosaicoDe135Etnias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C1272D", "#00838F"];
  return (
    <g>
      {[[110, 100, colors[0]], [175, 90, colors[1]], [240, 100, colors[2]]].map(([x, y, c], idx) => (
        <g key={x as number}>
          <rect x={x} y={y} width="70" height="130" fill={c as string} stroke={dark} strokeWidth="2.5" />
          {[0, 1, 2, 3, 4].map((row) => (
            <rect key={row} x={(x as number) + 8} y={(y as number) + 10 + row * 24} width="54" height="14" fill={idx % 2 === 0 ? "#fff" : shade(c as string, 0.3)} opacity="0.55" />
          ))}
          {[0, 1, 2].map((col) => (
            <rect key={col} x={(x as number) + 10 + col * 20} y={(y as number) + 8} width="10" height="118" fill={"#fff"} opacity="0.25" />
          ))}
        </g>
      ))}
    </g>
  );
};

const GatosBirmanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const brown = "#4E342E";
  const gold = "#D4AF37";
  return (
    <g>
      <ellipse cx="205" cy="215" rx="70" ry="24" fill={brown} stroke={dark} strokeWidth="2.5" />
      <path d="M175 205 Q170 165 205 155 Q240 165 235 205 Z" fill={brown} stroke={dark} strokeWidth="2.5" />
      <path d="M180 165 L172 145 L192 158 Z" fill={brown} stroke={dark} strokeWidth="2" />
      <path d="M230 165 L238 145 L218 158 Z" fill={brown} stroke={dark} strokeWidth="2" />
      <circle cx="192" cy="183" r="7" fill={gold} />
      <circle cx="218" cy="183" r="7" fill={gold} />
      <circle cx="192" cy="183" r="3" fill="#1A1A1A" />
      <circle cx="218" cy="183" r="3" fill="#1A1A1A" />
      <path d="M205 192 L200 198 L210 198 Z" fill="#2A1A15" />
      <path d="M175 198 L150 195 M175 202 L150 205 M235 198 L260 195 M235 202 L260 205" stroke={dark} strokeWidth="1.5" />
      <path d="M270 225 Q290 210 285 180" fill="none" stroke={brown} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const ShinbyuNoviciosBudistas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 235 Q170 190 180 155 Q185 140 205 138 Q225 140 230 155 Q240 190 235 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="128" r="14" fill="#D9A46A" stroke={dark} strokeWidth="2" />
      <path d="M180 165 Q160 175 155 200" stroke={accentColor} strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M230 165 Q250 175 255 200" stroke={accentColor} strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M185 155 Q205 165 225 155" stroke={dark} strokeWidth="2" opacity="0.5" fill="none" />
      {/* alms bowl beside */}
      <path d="M255 225 Q255 245 285 245 Q315 245 315 225 L310 210 L260 210 Z" fill={dark} />
      <ellipse cx="285" cy="210" rx="27" ry="9" fill={shade(dark, 0.15)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ChinloneDeporteSinCompetencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      {/* woven wicker ball mid-air */}
      <circle cx="205" cy="130" r="26" fill="none" stroke={accentColor} strokeWidth="4" />
      {[0, 30, 60, 90, 120, 150].map((deg) => (
        <line key={deg} x1="179" y1="130" x2="231" y2="130" stroke={accentColor} strokeWidth="3" transform={`rotate(${deg} 205 130)`} />
      ))}
      <circle cx="205" cy="130" r="26" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {/* three figures in a circle, mid-motion */}
      {[[130, 225], [205, 240], [280, 225]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 42} r="9" fill={skin} />
          <path d={`M${(x as number) - 10} ${(y as number) - 32} Q${x} ${(y as number) - 38} ${(x as number) + 10} ${(y as number) - 32} L${(x as number) + 8} ${y} L${(x as number) - 8} ${y} Z`} fill={i === 1 ? dark : accentColor} />
          <path d={`M${(x as number) - 8} ${(y as number) - 20} L${(x as number) - 22} ${(y as number) - 30}`} stroke={skin} strokeWidth="5" strokeLinecap="round" />
          <path d={`M${(x as number) + 8} ${(y as number) - 20} L${(x as number) + 22} ${(y as number) - 8}`} stroke={skin} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const PuenteUBeinDeTeca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D6EA5";
  const sun = "#F4A300";
  return (
    <g>
      <rect x="90" y="80" width="230" height="90" fill={tint(accentColor, 0.5)} opacity="0.4" />
      <circle cx="205" cy="130" r="34" fill={sun} opacity="0.85" />
      <path d="M90 175 Q205 165 320 175 L320 250 L90 250 Z" fill={water} opacity="0.7" />
      {/* bridge deck */}
      <path d="M95 195 Q205 180 315 195 L315 205 Q205 190 95 205 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2" />
      {/* posts */}
      {[110, 150, 190, 230, 270, 300].map((x, i) => {
        const y = 195 - (i % 2 === 0 ? 3 : 0);
        return <line key={x} x1={x} y1={y} x2={x} y2={y + 45} stroke={dark} strokeWidth="4" />;
      })}
      {/* walking silhouettes */}
      {[
        [150, 185],
        [230, 180],
      ].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y - 14} r="6" fill="#2A2A2A" />
          <path d={`M${x - 6} ${y - 8} L${x + 6} ${y - 8} L${x + 4} ${y} L${x - 4} ${y} Z`} fill="#2A2A2A" />
        </g>
      ))}
    </g>
  );
};

const YokeTheMarionetasTradicionales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const gold = "#D4AF37";
  return (
    <g>
      {/* control bar */}
      <rect x="170" y="85" width="70" height="6" fill="#6B4A2F" />
      {/* strings */}
      {[
        [178, 91, 160, 150],
        [205, 91, 205, 140],
        [232, 91, 250, 150],
        [190, 91, 175, 190],
        [220, 91, 235, 190],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={dark} strokeWidth="1" opacity="0.6" />
      ))}
      {/* torso/robe drawn first so head fill absorbs the neck seam */}
      <path d="M186 158 Q205 145 224 158 L235 225 L175 225 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* head */}
      <circle cx="205" cy="150" r="18" fill={skin} stroke={dark} strokeWidth="2.5" />
      {/* crown */}
      <path d="M190 140 L200 122 L210 136 L220 122 L222 140 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      {/* arms hanging with strings */}
      <path d="M180 175 Q165 185 175 190" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M230 175 Q245 185 235 190" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      {/* legs */}
      <line x1="195" y1="225" x2="190" y2="245" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="215" y1="225" x2="220" y2="245" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const LacaBirmanaDeBagan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const black = "#1A1A1A";
  const gold = "#D4AF37";
  return (
    <g>
      {/* pedestal drawn first so the bowl's fill absorbs the seam */}
      <path d="M175 220 L235 220 L225 250 L185 250 Z" fill={black} stroke={dark} strokeWidth="2.5" />
      {/* bowl body */}
      <path d="M140 175 Q140 230 205 235 Q270 230 270 175 Z" fill={black} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="65" ry="16" fill={shade(black, 0.1)} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="172" rx="55" ry="11" fill={accentColor} opacity="0.9" />
      {/* engraved gold lines */}
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${160 + i * 5} ${195 + i * 8} Q205 ${205 + i * 8} ${250 - i * 5} ${195 + i * 8}`} fill="none" stroke={gold} strokeWidth="2" opacity="0.8" />
      ))}
    </g>
  );
};

const MohingaDesayunoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const broth = "#C2703D";
  const noodle = "#F5E6C8";
  const eggWhite = "#F5F0E6";
  const eggYolk = "#F4A300";
  return (
    <g>
      {/* bowl */}
      <path d="M120 190 Q120 240 205 245 Q290 240 290 190 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="190" rx="85" ry="20" fill={broth} stroke={dark} strokeWidth="2.5" />
      {/* noodles */}
      {[
        [160, 185],
        [190, 190],
        [220, 185],
        [250, 190],
      ].map(([x, y]) => (
        <path key={x} d={`M${x - 15} ${y} Q${x} ${y - 10} ${x + 15} ${y}`} fill="none" stroke={noodle} strokeWidth="4" strokeLinecap="round" />
      ))}
      {/* egg half */}
      <circle cx="230" cy="180" r="16" fill={eggWhite} stroke={dark} strokeWidth="2" />
      <circle cx="230" cy="180" r="7" fill={eggYolk} />
      {/* steam */}
      {[175, 205, 235].map((x) => (
        <path key={x} d={`M${x} 160 Q${x - 8} 135 ${x} 110 Q${x + 8} 90 ${x} 70`} fill="none" stroke="#E8E4DC" strokeWidth="4" opacity="0.55" strokeLinecap="round" />
      ))}
    </g>
  );
};

const DelfinesDelIrrawaddyPescaCooperativa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D6EA5";
  const grey = "#8A9199";
  return (
    <g>
      <path d="M85 200 Q205 190 320 200 L320 250 L85 250 Z" fill={water} opacity="0.65" />
      {/* dolphin body */}
      <path d="M140 195 Q160 165 210 168 Q250 170 260 190 Q220 200 180 198 Q155 197 140 195 Z" fill={grey} stroke={dark} strokeWidth="2.5" />
      {/* rounded forehead */}
      <circle cx="155" cy="185" r="16" fill={grey} stroke={dark} strokeWidth="2.5" />
      {/* short snout */}
      <path d="M142 190 Q125 192 118 185" fill="none" stroke={grey} strokeWidth="8" strokeLinecap="round" />
      {/* dorsal fin */}
      <path d="M210 170 Q215 150 225 170 Z" fill={grey} stroke={dark} strokeWidth="2" />
      {/* tail */}
      <path d="M255 188 L280 178 L275 195 L280 205 L255 196 Z" fill={grey} stroke={dark} strokeWidth="2" />
      {/* eye */}
      <circle cx="150" cy="182" r="2.5" fill="#1A1A1A" />
      {/* net */}
      <path d="M270 200 L300 235 M300 200 L270 235 M280 195 L280 240" stroke={dark} strokeWidth="2" opacity="0.6" />
      <path d="M260 195 Q285 185 310 200 Q310 225 285 235 Q260 225 260 195 Z" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.7" />
    </g>
  );
};

export const myanmarIllustrations: Record<string, IllustrationDefinition> = {
  "bagan-miles-de-templos": { component: BaganMilesDeTemplos },
  "pagoda-shwedagon-de-oro": { component: PagodaShwedagonDeOro },
  "longyi-vestimenta-tradicional": { component: LongyiVestimentaTradicional },
  "thanaka-maquillaje-tradicional": { component: ThanakaMaquillajeTradicional },
  "lago-inle-remeros-de-pierna": { component: LagoInleRemerosDePierna },
  "roca-dorada-kyaiktiyo": { component: RocaDoradaKyaiktiyo },
  "mosaico-de-135-etnias": { component: MosaicoDe135Etnias },
  "gatos-birmanos": { component: GatosBirmanos },
  "shinbyu-novicios-budistas": { component: ShinbyuNoviciosBudistas },
  "chinlone-deporte-sin-competencia": { component: ChinloneDeporteSinCompetencia },
  "puente-u-bein-de-teca": { component: PuenteUBeinDeTeca },
  "yoke-the-marionetas-tradicionales": { component: YokeTheMarionetasTradicionales },
  "laca-birmana-de-bagan": { component: LacaBirmanaDeBagan },
  "mohinga-desayuno-nacional": { component: MohingaDesayunoNacional },
  "delfines-del-irrawaddy-pesca-cooperativa": { component: DelfinesDelIrrawaddyPescaCooperativa },
};
