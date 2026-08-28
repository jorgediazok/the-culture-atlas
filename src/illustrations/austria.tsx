import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const VienaCapitalMusicaClasica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* music stand with sheet music */}
      <path d="M255 120 h20 v34 h-20 Z" fill={light} />
      <line x1="259" y1="128" x2="271" y2="128" stroke={dark} strokeWidth="1.2" opacity="0.6" />
      <line x1="259" y1="136" x2="271" y2="136" stroke={dark} strokeWidth="1.2" opacity="0.6" />
      <line x1="259" y1="144" x2="271" y2="144" stroke={dark} strokeWidth="1.2" opacity="0.6" />
      <line x1="265" y1="154" x2="265" y2="220" stroke={dark} strokeWidth="3" />
      <path d="M250 220 h30" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      {/* violin body: upper bout, pinched C-bout waist, wider lower bout */}
      <path
        d="M200 150
           C182 150 170 158 170 172
           C170 180 176 184 180 190
           C172 196 164 206 164 220
           C164 236 180 246 200 246
           C220 246 236 236 236 220
           C236 206 228 196 220 190
           C224 184 230 180 230 172
           C230 158 218 150 200 150 Z"
        fill={accentColor}
      />
      <line x1="200" y1="152" x2="200" y2="244" stroke={dark} strokeWidth="1.2" opacity="0.5" />
      <path d="M188 196 q5 8 0 18 M212 196 q-5 8 0 18" fill="none" stroke={dark} strokeWidth="2" />
      {/* neck and spiral scroll */}
      <rect x="196" y="96" width="8" height="56" fill={dark} />
      <path d="M200 96 a9 9 0 1 1 -0.1 0 a4.5 4.5 0 1 0 0.1 0" fill="none" stroke={dark} strokeWidth="3" />
      {/* bow resting across */}
      <line x1="150" y1="236" x2="245" y2="140" stroke={light} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const CafesVienesesPatrimonio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* marble table */}
      <ellipse cx="200" cy="205" rx="90" ry="14" fill={light} opacity="0.6" />
      {/* the cup with a swirl of cream */}
      <path d="M162 158 h56 v26 a28 22 0 0 1 -56 0 Z" fill={accentColor} />
      <ellipse cx="190" cy="158" rx="28" ry="7" fill={light} />
      <path d="M182 154 q4 -6 8 0 q4 -6 8 0" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M218 166 a10 8 0 0 1 0 16" fill="none" stroke={accentColor} strokeWidth="3" />
      <ellipse cx="190" cy="188" rx="50" ry="8" fill={dark} opacity="0.35" />
      {/* the traditional glass of water beside it */}
      <path d="M238 168 h20 v34 h-20 Z" fill={light} opacity="0.7" />
      {/* newspaper */}
      <path d="M130 190 l40 -10 v18 l-40 10 Z" fill={dark} opacity="0.5" />
    </g>
  );
};

const EmperatrizSissiMito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* oval hand mirror */}
      <ellipse cx="230" cy="160" rx="26" ry="34" fill={light} stroke={dark} strokeWidth="4" />
      <rect x="226" y="192" width="8" height="30" fill={dark} />
      {/* a small crown */}
      <path d="M148 178 L148 158 L160 172 L172 150 L184 172 L196 158 L196 178 Z" fill={accentColor} />
      <rect x="146" y="178" width="52" height="8" fill={dark} />
      <circle cx="172" cy="150" r="3" fill={light} />
      {/* her signature braid coiling below */}
      <path d="M155 190 q35 10 15 34 q-20 20 15 34" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const AlpesQueCubrenElPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M108 210 L155 120 L185 165 L215 105 L250 175 L292 210 Z" fill={accentColor} />
      <path d="M155 120 L165 140 L145 140 Z" fill={light} />
      <path d="M215 105 L226 128 L204 128 Z" fill={light} />
      {/* a small chalet at the base */}
      <rect x="168" y="190" width="30" height="20" fill={dark} />
      <path d="M164 190 L183 174 L202 190 Z" fill={dark} />
      {/* a tiny skier on the slope */}
      <path d="M230 178 L238 190 L226 198" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" />
      <circle cx="230" cy="174" r="4" fill={light} />
    </g>
  );
};

const GuerraDeLaSachertorte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      {/* the whole cake, glazed dark chocolate */}
      <ellipse cx="160" cy="200" rx="52" ry="13" fill={dark} />
      <path d="M108 200 A52 34 0 0 1 212 200 Z" fill={dark} />
      <ellipse cx="160" cy="166" rx="52" ry="11" fill={accentColor} />
      {/* a wedge cut away, showing the apricot jam layer between the cake */}
      <path d="M228 145 L272 170 L228 195 Z" fill={dark} />
      <path d="M228 165 L258 170 L228 176 Z" fill={light} />
      <path d="M228 145 L272 170 L228 195" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {/* a dollop of whipped cream, the classic Viennese garnish */}
      <path d="M244 152 Q248 142 254 152 Q260 146 258 156 Q262 156 258 162 L246 162 Q240 158 244 152 Z" fill={light} />
    </g>
  );
};

const PalacioSchonbrunnHabsburgos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      {/* palace facade */}
      <rect x="120" y="130" width="160" height="60" fill={accentColor} />
      <path d="M120 130 L200 108 L280 130 Z" fill={dark} />
      {[132, 154, 176, 198, 220, 242, 260].map((x) => (
        <rect key={x} x={x} y="144" width="12" height="24" fill={light} />
      ))}
      <rect x="192" y="168" width="16" height="22" fill={dark} />
      {/* geometric gardens in front */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={126 + i * 22} y="196" width="16" height="12" fill={dark} opacity="0.5" />
      ))}
      <path d="M110 220 h180" stroke={light} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const CoroNinosCantoresViena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const skin = tint(shade(accentColor, 0.1), 0.6);
  return (
    <g>
      <circle cx="200" cy="148" r="20" fill={skin} />
      <ellipse cx="200" cy="158" rx="6" ry="8" fill={dark} opacity="0.6" />
      {/* sailor collar */}
      <path d="M168 178 L200 168 L232 178 L224 214 L176 214 Z" fill={accentColor} />
      <path d="M168 178 L200 195 L232 178" fill="none" stroke={light} strokeWidth="6" />
      <circle cx="200" cy="200" r="4" fill={light} />
      {/* a musical note, since he's mid-song */}
      <circle cx="252" cy="196" r="7" fill={dark} />
      <line x1="259" y1="196" x2="259" y2="160" stroke={dark} strokeWidth="3" />
      <path d="M259 160 q14 0 14 12" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const FreudNacimientoPsicoanalisis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      {/* the couch, seen from the side with a headrest pillow */}
      <rect x="120" y="180" width="150" height="30" rx="12" fill={accentColor} />
      <rect x="112" y="152" width="26" height="58" rx="10" fill={dark} />
      <ellipse cx="150" cy="168" rx="20" ry="12" fill={light} />
      {/* the armchair beside it, with a curved back and two arms */}
      <path d="M246 150 Q246 132 264 132 Q282 132 282 150 L282 168 L246 168 Z" fill={dark} />
      <rect x="240" y="164" width="12" height="30" rx="5" fill={dark} />
      <rect x="276" y="164" width="12" height="30" rx="5" fill={dark} />
      <rect x="246" y="182" width="36" height="26" rx="6" fill={dark} />
      {/* a wall clock over the couch, the classic consultation-hour prop */}
      <circle cx="200" cy="130" r="24" fill={light} stroke={dark} strokeWidth="3" />
      <line x1="200" y1="130" x2="200" y2="114" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <line x1="200" y1="130" x2="212" y2="126" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="130" r="2.5" fill={dark} />
    </g>
  );
};

const TradicionDelKrampus: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* furred body */}
      <path d="M172 218 C160 190 168 158 200 156 C232 158 240 190 228 218 Z" fill={dark} />
      {[168, 178, 188, 198, 208, 218, 228].map((x) => (
        <path key={x} d={`M${x} 210 q3 -10 0 -20`} stroke={dark} strokeWidth="4" fill="none" opacity="0.6" />
      ))}
      {/* demon face with thick, curved goat horns */}
      <path d="M185 130 Q163 122 158 96 Q178 104 190 124 Z" fill={dark} />
      <path d="M215 130 Q237 122 242 96 Q222 104 210 124 Z" fill={dark} />
      <ellipse cx="200" cy="150" rx="26" ry="24" fill={accentColor} />
      <circle cx="191" cy="146" r="3.5" fill={light} />
      <circle cx="209" cy="146" r="3.5" fill={light} />
      <path d="M184 160 Q200 174 216 160 L216 166 Q200 180 184 166 Z" fill={dark} />
      <path d="M191 162 L188 172 L195 164 Z" fill="#fff" />
      <path d="M209 162 L212 172 L205 164 Z" fill="#fff" />
      <path d="M198 166 L200 176 L202 166" fill="#c1272d" />
      {/* dragging chains */}
      {[[168, 220], [176, 224], [184, 228]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill="none" stroke={light} strokeWidth="2.5" />
      ))}
    </g>
  );
};

const NeutralidadPermanente1955: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      {/* balanced scale */}
      <line x1="200" y1="120" x2="200" y2="200" stroke={dark} strokeWidth="4" />
      <line x1="150" y1="140" x2="250" y2="140" stroke={dark} strokeWidth="3" />
      <path d="M150 140 L138 172 L162 172 Z" fill="none" stroke={dark} strokeWidth="2.5" />
      <path d="M250 140 L238 172 L262 172 Z" fill="none" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="200" cy="204" rx="26" ry="7" fill={dark} />
      {/* the dove above, in flight with a spread wing and fanned tail */}
      <ellipse cx="205" cy="98" rx="17" ry="10" fill={light} transform="rotate(-12 205 98)" />
      <circle cx="222" cy="89" r="7" fill={light} />
      <path d="M228 88 L238 85 L229 93 Z" fill={dark} />
      <path d="M201 94 Q180 68 152 76 Q176 90 194 100 Z" fill={light} />
      <path d="M190 104 L170 99 L177 112 L188 110 Z" fill={light} />
    </g>
  );
};

const MozartElNinoQueComponiaSinfonias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#E8B989";
  const white = "#F5F0E6";
  return (
    <g>
      {/* piano body */}
      <rect x="130" y="185" width="140" height="20" fill={dark} />
      <path d="M270 185 L295 165 L295 205 L270 205 Z" fill={dark} />
      {[145, 158, 171, 184, 197, 210, 223, 236, 249].map((x, i) => (
        <rect key={x} x={x} y="185" width="12" height="16" fill={i % 2 === 0 ? white : dark} stroke={dark} strokeWidth="0.5" />
      ))}
      {/* child with powdered wig */}
      <circle cx="200" cy="150" r="22" fill={skin} />
      <path d="M180 140 Q178 108 200 105 Q222 108 220 140 Q222 130 226 132 Q228 145 220 150 L180 150 Q172 145 174 132 Q178 130 180 140 Z" fill={white} stroke={shade(white, 0.2)} strokeWidth="2" />
      <circle cx="192" cy="152" r="2.5" fill="#1A1A1A" />
      <circle cx="208" cy="152" r="2.5" fill="#1A1A1A" />
      <rect x="188" y="172" width="24" height="14" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaNoviciaRebeldeYSalzburgo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      {/* curtain-fabric dress on a hanger shape */}
      <path d="M175 120 L200 100 L225 120 L235 240 L165 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[178, 195, 212].map((x) => (
        <line key={x} x1={x} y1="122" x2={x} y2="238" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <path d="M175 120 Q200 132 225 120" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* bouquet of alpine flowers */}
      <g>
        <circle cx="270" cy="180" r="9" fill="#FBFBFB" stroke={dark} strokeWidth="1.5" />
        <circle cx="286" cy="190" r="8" fill={light} stroke={dark} strokeWidth="1.5" />
        <circle cx="272" cy="200" r="7" fill="#FBFBFB" stroke={dark} strokeWidth="1.5" />
        <line x1="278" y1="205" x2="278" y2="235" stroke="#4A7C59" strokeWidth="3" />
      </g>
    </g>
  );
};

const WienerSchnitzelElOrigenDisputado: IllustrationComponent = () => {
  const gold = "#D9A441";
  const goldDark = shade(gold, 0.35);
  const lemon = "#F4D35E";
  return (
    <g>
      {/* plate */}
      <ellipse cx="200" cy="210" rx="95" ry="24" fill="#FBFBFB" stroke="#B0BEC5" strokeWidth="2.5" />
      {/* breaded cutlet */}
      <path d="M140 190 Q135 160 165 152 Q210 140 245 160 Q260 172 250 195 Q240 210 200 208 Q155 210 140 190 Z" fill={gold} stroke={goldDark} strokeWidth="3" />
      <circle cx="170" cy="175" r="3" fill={goldDark} opacity="0.5" />
      <circle cx="195" cy="165" r="3" fill={goldDark} opacity="0.5" />
      <circle cx="220" cy="180" r="3" fill={goldDark} opacity="0.5" />
      <circle cx="205" cy="195" r="3" fill={goldDark} opacity="0.5" />
      {/* lemon slice */}
      <circle cx="270" cy="205" r="18" fill={lemon} stroke={shade(lemon, 0.3)} strokeWidth="2.5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line key={deg} x1="270" y1="205" x2="270" y2="190" stroke={shade(lemon, 0.3)} strokeWidth="1.2" transform={`rotate(${deg} 270 205)`} opacity="0.6" />
      ))}
    </g>
  );
};

const GustavKlimtYElBeso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* two embracing silhouettes wrapped in a shared golden robe */}
      <path d="M170 240 Q160 180 195 155 Q200 140 210 155 Q245 180 235 240 Z" fill={gold} stroke={dark} strokeWidth="2.5" />
      <circle cx="192" cy="140" r="16" fill="#E8B989" />
      <circle cx="214" cy="132" r="14" fill="#E8B989" />
      {[[180, 190], [200, 175], [190, 210], [215, 200], [205, 225]].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="10" height="10" fill={accentColor} opacity="0.6" transform={`rotate(20 ${x} ${y})`} />
      ))}
      <circle cx="185" cy="230" r="4" fill={dark} opacity="0.5" />
      <circle cx="220" cy="215" r="4" fill={dark} opacity="0.5" />
    </g>
  );
};

const HallstattElPuebloDelLago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#5B7B9A";
  return (
    <g>
      {/* mountain backdrop */}
      <path d="M90 200 L160 110 L230 200 Z" fill={dark} opacity="0.6" />
      <path d="M200 200 L260 130 L320 200 Z" fill={dark} opacity="0.4" />
      {/* stacked cottages */}
      {[[130, 175, 30], [165, 165, 34], [200, 178, 28], [235, 168, 32]].map(([x, y, h], i) => (
        <g key={x}>
          <rect x={x} y={y} width="30" height={h as number} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 2},${y} ${(x as number) + 15},${(y as number) - 14} ${(x as number) + 32},${y}`} fill={dark} />
        </g>
      ))}
      {/* lake with reflection */}
      <rect x="90" y="210" width="230" height="30" fill={water} opacity="0.5" />
    </g>
  );
};

const ElWienerRiesenradLaRuedaGigante: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <circle cx="200" cy="170" r="70" fill="none" stroke={accentColor} strokeWidth="8" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1="200" y1="170" x2="200" y2="100" stroke={accentColor} strokeWidth="3" transform={`rotate(${deg} 200 170)`} opacity="0.8" />
      ))}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <rect key={deg} x="192" y="94" width="16" height="14" fill={wood} stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 200 170)`} />
      ))}
      <circle cx="200" cy="170" r="8" fill={dark} />
      <rect x="185" y="240" width="30" height="10" fill={dark} />
    </g>
  );
};

const ElValsYElDanubioAzul: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#E8B989";
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {/* couple dancing in a circular sweep */}
      <path d="M175 230 Q160 190 180 160 Q195 145 210 155" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <path d="M225 230 Q240 190 220 160 Q205 145 210 155" fill="none" stroke={light} strokeWidth="10" strokeLinecap="round" />
      <circle cx="182" cy="148" r="12" fill={skin} />
      <circle cx="218" cy="148" r="12" fill={skin} />
      {/* musical notes floating */}
      <circle cx="270" cy="120" r="6" fill={dark} />
      <line x1="276" y1="120" x2="276" y2="90" stroke={dark} strokeWidth="2.5" />
      <circle cx="130" cy="110" r="5" fill={dark} opacity="0.7" />
      <line x1="135" y1="110" x2="135" y2="85" stroke={dark} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const StilleNachtNocheDePaz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      {/* acoustic guitar */}
      <path d="M150 240 Q135 220 145 195 Q152 182 165 188 Q160 175 172 168 Q186 176 182 192 Q195 200 190 220 Q180 245 150 240 Z" fill={wood} stroke={dark} strokeWidth="2.5" />
      <circle cx="167" cy="205" r="14" fill={shade(wood, 0.3)} />
      <line x1="167" y1="168" x2="167" y2="130" stroke={dark} strokeWidth="4" />
      {/* candle */}
      <rect x="245" y="180" width="18" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <path d="M254 180 Q248 165 254 155 Q260 165 254 180 Z" fill="#F4A300" />
      {/* snowflakes */}
      {[[220, 100], [280, 130], [300, 90]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <line x1={x} y1={(y as number) - 6} x2={x} y2={(y as number) + 6} stroke={accentColor} strokeWidth="1.5" />
          <line x1={(x as number) - 6} y1={y} x2={(x as number) + 6} y2={y} stroke={accentColor} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const AlmabtriebElDescensoDelGanado: IllustrationComponent = () => {
  const cow = "#F5F0E6";
  const dark = shade(cow, 0.5);
  const patch = "#4A2C1E";
  return (
    <g>
      {/* cow body */}
      <path d="M140 220 L140 175 Q140 158 165 155 L235 155 Q260 158 260 175 L260 220 Z" fill={cow} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="180" cy="180" rx="16" ry="14" fill={patch} opacity="0.8" />
      <ellipse cx="225" cy="195" rx="14" ry="12" fill={patch} opacity="0.8" />
      {/* head */}
      <ellipse cx="255" cy="165" rx="20" ry="18" fill={cow} stroke={dark} strokeWidth="2.5" />
      {/* flower crown */}
      {[240, 255, 270, 285].map((x, i) => (
        <circle key={x} cx={x} cy="148" r="6" fill={i % 2 === 0 ? "#F4D35E" : "#C1272D"} stroke={dark} strokeWidth="1" />
      ))}
      {/* large cowbell */}
      <path d="M190 220 L190 235 L210 235 L210 220 Z" fill="#D4A017" stroke={shade("#D4A017", 0.35)} strokeWidth="2" />
      <circle cx="200" cy="238" r="3" fill={shade("#D4A017", 0.35)} />
    </g>
  );
};

const ArnoldSchwarzeneggerDeAustriaAHollywood: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* dumbbell */}
      <line x1="150" y1="200" x2="250" y2="200" stroke={dark} strokeWidth="8" />
      <circle cx="150" cy="200" r="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="250" cy="200" r="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="150" cy="200" r="12" fill={dark} opacity="0.5" />
      <circle cx="250" cy="200" r="12" fill={dark} opacity="0.5" />
      {/* dark sunglasses */}
      <rect x="255" y="110" width="40" height="22" rx="10" fill="#1A1A1A" />
      <rect x="215" y="110" width="35" height="22" rx="10" fill="#1A1A1A" />
      <line x1="250" y1="118" x2="255" y2="118" stroke="#1A1A1A" strokeWidth="4" />
    </g>
  );
};

export const austriaIllustrations: Record<string, IllustrationDefinition> = {
  "viena-capital-musica-clasica": { component: VienaCapitalMusicaClasica },
  "cafes-vieneses-patrimonio": { component: CafesVienesesPatrimonio },
  "emperatriz-sissi-mito": { component: EmperatrizSissiMito },
  "alpes-que-cubren-el-pais": { component: AlpesQueCubrenElPais },
  "guerra-de-la-sachertorte": { component: GuerraDeLaSachertorte },
  "palacio-schonbrunn-habsburgos": { component: PalacioSchonbrunnHabsburgos },
  "coro-ninos-cantores-viena": { component: CoroNinosCantoresViena },
  "freud-nacimiento-psicoanalisis": { component: FreudNacimientoPsicoanalisis },
  "tradicion-del-krampus": { component: TradicionDelKrampus },
  "neutralidad-permanente-1955": { component: NeutralidadPermanente1955 },
  "mozart-el-nino-que-componia-sinfonias": { component: MozartElNinoQueComponiaSinfonias },
  "la-novicia-rebelde-y-salzburgo": { component: LaNoviciaRebeldeYSalzburgo },
  "wiener-schnitzel-el-origen-disputado": { component: WienerSchnitzelElOrigenDisputado },
  "gustav-klimt-y-el-beso": { component: GustavKlimtYElBeso },
  "hallstatt-el-pueblo-del-lago": { component: HallstattElPuebloDelLago },
  "el-wiener-riesenrad-la-rueda-gigante": { component: ElWienerRiesenradLaRuedaGigante },
  "el-vals-y-el-danubio-azul": { component: ElValsYElDanubioAzul },
  "stille-nacht-noche-de-paz": { component: StilleNachtNocheDePaz },
  "almabtrieb-el-descenso-del-ganado": { component: AlmabtriebElDescensoDelGanado },
  "arnold-schwarzenegger-de-austria-a-hollywood": { component: ArnoldSchwarzeneggerDeAustriaAHollywood },
};
