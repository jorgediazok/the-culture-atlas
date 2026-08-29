import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PiramidesGiza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const sand = "#D9BE8F";
  return (
    <g>
      <path d="M90 245 Q205 235 320 245 L320 250 L90 250 Z" fill={sand} />
      <circle cx="290" cy="115" r="26" fill="#F4C430" opacity="0.85" />
      <polygon points="130,235 175,150 220,235" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="170,235 225,120 280,235" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="225,120 250,235 200,235" fill={dark} opacity="0.5" />
      <polygon points="220,235 258,165 296,235" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2.5" />
    </g>
  );
};

const PiedraRosetta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M155 235 L155 145 Q155 130 175 130 L235 130 Q255 130 255 145 L255 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[148, 172, 196].map((y) => (
        <g key={y}>
          {[165, 185, 205, 225].map((x) => (
            <rect key={x} x={x - 4} y={y} width="8" height="10" fill={light} opacity="0.75" />
          ))}
        </g>
      ))}
      <line x1="155" y1="180" x2="255" y2="180" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="155" y1="205" x2="255" y2="205" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const NiloCrecidas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const green = "#4A8F4E";
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={green} opacity="0.5" />
      <path d="M90 150 Q140 130 175 155 Q210 180 245 150 Q280 125 320 155 L320 200 Q280 175 245 200 Q210 225 175 200 Q140 175 90 200 Z" fill={water} stroke={dark} strokeWidth="2" />
      <path d="M90 155 Q140 135 175 160 Q210 185 245 155 Q280 130 320 160" fill="none" stroke={tint(water, 0.4)} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const Momificacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4AF37";
  return (
    <g>
      <path d="M175 235 L165 150 Q163 120 205 112 Q247 120 245 150 L235 235 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <path d="M180 155 Q205 148 230 155 L226 175 Q205 168 184 175 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="135" rx="24" ry="20" fill={tint(gold, 0.3)} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <path d="M188 128 Q205 118 222 128" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M190 195 L220 195 M190 210 L220 210" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M185 145 Q178 135 185 122 M225 145 Q232 135 225 122" fill="none" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const AbuSimbel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="130" width="210" height="105" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[130, 185, 240, 285].map((x, i) => (
        <g key={x}>
          <path d="M0 0 L18 0 L20 65 L-2 65 Z" fill={light} stroke={dark} strokeWidth="2" transform={`translate(${x - 9} 145)`} />
          <ellipse cx={x} cy="150" rx="9" ry="10" fill={i % 2 === 0 ? light : shade(light, 0.15)} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <path d="M100 128 L310 128 L310 118 L100 118 Z" fill={dark} opacity="0.5" />
    </g>
  );
};

const KhanElKhalili: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="110" y="180" width="200" height="55" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="2.5" />
      {[125, 175, 225, 275].map((x) => (
        <rect key={x} x={x} y="150" width="30" height="30" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      {[140, 190, 240, 290].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 145 Q${x + 6} 130 ${x} 118 Q${x - 6} 130 ${x} 145 Z`} fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.5" />
          <line x1={x} y1="145" x2={x} y2="165" stroke={dark} strokeWidth="1.2" opacity={0.7 - i * 0.05} />
        </g>
      ))}
    </g>
  );
};

const PapiroEgipcio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  return (
    <g>
      {[150, 175, 200].map((x, i) => (
        <path key={x} d={`M${x} 235 Q${x - 6} 190 ${x} 150 Q${x + 4} 190 ${x} 235 Z`} fill={green} stroke={shade(green, 0.3)} strokeWidth="2" opacity={1 - i * 0.08} />
      ))}
      {[150, 175, 200].map((x) => (
        <path key={`t${x}`} d={`M${x} 152 L${x - 10} 130 M${x} 152 L${x} 125 M${x} 152 L${x + 10} 130`} stroke={green} strokeWidth="2" fill="none" />
      ))}
      <rect x="245" y="150" width="55" height="70" fill={tint(accentColor, 0.6)} stroke={dark} strokeWidth="2.5" transform="rotate(8 272 185)" />
      {[165, 180, 195].map((y) => (
        <line key={y} x1="255" y1={y} x2="290" y2={y} stroke={dark} strokeWidth="1.2" opacity="0.4" transform="rotate(8 272 185)" />
      ))}
    </g>
  );
};

const Tutankamon: IllustrationComponent = ({ accentColor }) => {
  const blue = "#1D3F6E";
  return (
    <g>
      <path d="M170 235 L165 150 Q163 118 205 112 Q247 118 245 150 L240 235 Z" fill="#FFD700" stroke={shade("#FFD700", 0.3)} strokeWidth="3" />
      <path d="M182 150 L182 235 M198 150 L198 235 M212 150 L212 235 M228 150 L228 235" stroke={blue} strokeWidth="7" />
      <ellipse cx="205" cy="135" rx="26" ry="22" fill="#FFD700" stroke={shade("#FFD700", 0.3)} strokeWidth="2.5" />
      <path d="M180 128 L165 145 L172 130 Z" fill={blue} />
      <path d="M230 128 L245 145 L238 130 Z" fill={blue} />
      <path d="M190 158 Q205 165 220 158" fill="none" stroke={accentColor} strokeWidth="3" />
    </g>
  );
};

const CanalSuez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const sand = "#D9BE8F";
  return (
    <g>
      <rect x="90" y="80" width="115" height="170" fill={sand} opacity="0.6" />
      <rect x="205" y="80" width="115" height="170" fill={sand} opacity="0.6" />
      <rect x="150" y="80" width="110" height="170" fill={water} />
      <path d="M170 200 L170 175 L245 175 L245 195 L225 195 L225 210 L195 210 L195 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="175" x2="205" y2="160" stroke={dark} strokeWidth="2.5" />
      <path d="M190 160 Q205 150 220 160" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const FaroAlejandria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const flame = "#F4A300";
  const water = "#1D6FA5";
  return (
    <g>
      <path d="M90 240 Q205 230 320 240 L320 250 L90 250 Z" fill={water} />
      <path d="M180 235 L190 130 L220 130 L230 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="105" width="40" height="25" fill={dark} />
      <path d="M195 105 Q205 80 215 105 Q210 92 205 90 Q200 92 195 105 Z" fill={flame} />
      {[145, 175].map((x) => (
        <path key={x} d={`M${x} 100 Q${x + 10} 90 ${x + 20} 100`} fill="none" stroke={flame} strokeWidth="2" opacity="0.5" />
      ))}
    </g>
  );
};

const KarnakLuxor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.4);
  const cols = [
    { x: 110, y: 120, h: 120 },
    { x: 155, y: 105, h: 135 },
    { x: 205, y: 95, h: 145 },
    { x: 255, y: 105, h: 135 },
    { x: 300, y: 120, h: 120 },
  ];
  return (
    <g>
      <path d="M90 240 L320 240 L320 250 L90 250 Z" fill={dark} opacity="0.5" />
      {cols.map((c) => (
        <g key={c.x}>
          <rect x={c.x - 15} y={c.y} width="30" height={c.h} fill={accentColor} stroke={dark} strokeWidth="3" />
          <path d={`M${c.x - 20} ${c.y} Q${c.x} ${c.y - 16} ${c.x + 20} ${c.y} Z`} fill={light} stroke={dark} strokeWidth="2.5" />
          <rect x={c.x - 22} y={c.y - 8} width="44" height="8" fill={dark} />
          {[0.3, 0.55, 0.8].map((f) => (
            <line key={f} x1={c.x - 10} y1={c.y + c.h * f} x2={c.x + 10} y2={c.y + c.h * f} stroke={dark} strokeWidth="1.5" opacity="0.5" />
          ))}
        </g>
      ))}
      <rect x="88" y="90" width="244" height="9" fill={dark} opacity="0.55" />
    </g>
  );
};

const Hatshepsut: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cliff = "#9C5B3B";
  const stone = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M90 235 L90 90 Q150 60 210 78 Q280 60 320 95 L320 235 Z" fill={cliff} opacity="0.55" />
      {[
        { y: 200, w: 210, x: 100 },
        { y: 165, w: 165, x: 120 },
        { y: 130, w: 120, x: 145 },
      ].map((t) => (
        <g key={t.y}>
          <rect x={t.x} y={t.y} width={t.w} height="35" fill={stone} stroke={dark} strokeWidth="2.5" />
          {Array.from({ length: Math.floor(t.w / 22) }).map((_, i) => (
            <rect key={i} x={t.x + 8 + i * 22} y={t.y + 6} width="7" height="23" fill={dark} opacity="0.55" />
          ))}
        </g>
      ))}
      <rect x="188" y="200" width="34" height="35" fill={dark} />
      <path d="M150 130 L260 130" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const GranEsfinge: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = tint(accentColor, 0.35);
  const nemes = "#3556A0";
  return (
    <g>
      <path d="M90 240 L320 240 L320 250 L90 250 Z" fill={dark} opacity="0.4" />
      {/* lion body, drawn first */}
      <path d="M120 235 Q120 175 175 170 L285 175 Q300 178 300 200 L300 235 Z" fill={stone} stroke={dark} strokeWidth="3" />
      <path d="M275 235 L275 200 M235 235 L235 205 M150 235 L150 200" stroke={dark} strokeWidth="2.5" opacity="0.55" />
      <path d="M290 178 Q305 165 300 150" fill="none" stroke={dark} strokeWidth="3" />
      {/* head sits on the front of the body */}
      <path d="M120 175 Q108 130 140 112 L178 112 Q196 140 188 178 Z" fill={nemes} stroke={shade(nemes, 0.3)} strokeWidth="3" />
      <ellipse cx="150" cy="150" rx="24" ry="26" fill={stone} stroke={dark} strokeWidth="2.5" />
      <path d="M138 150 l6 5 -7 4" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M132 138 q6 -5 13 -1 M158 138 q5 -4 11 0" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M140 168 q10 6 20 0" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const AlAzhar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = tint(accentColor, 0.45);
  const gold = "#C9A24B";
  return (
    <g>
      <rect x="110" y="150" width="200" height="90" fill={stone} stroke={dark} strokeWidth="3" />
      <path d="M110 150 Q210 120 310 150" fill={stone} stroke={dark} strokeWidth="3" />
      {[150, 270].map((x) => (
        <g key={x}>
          <rect x={x - 12} y="90" width="24" height="150" fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x - 15} 90 Q${x} 68 ${x + 15} 90 Z`} fill={gold} stroke={dark} strokeWidth="2" />
          <line x1={x} y1="68" x2={x} y2="56" stroke={dark} strokeWidth="2" />
          <circle cx={x} cy="53" r="4" fill={gold} />
          <line x1={x - 12} y1="140" x2={x + 12} y2="140" stroke={dark} strokeWidth="2" opacity="0.5" />
        </g>
      ))}
      <path d="M195 240 L195 185 Q210 168 225 185 L225 240 Z" fill={dark} />
      <path d="M188 165 Q210 135 232 165 Q222 150 210 148 Q198 150 188 165 Z" fill={gold} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Cleopatra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C89263";
  const gold = "#D4AF37";
  const robe = tint(accentColor, 0.3);
  return (
    <g>
      <path d="M165 240 L172 165 Q210 148 248 165 L255 240 Z" fill={robe} stroke={dark} strokeWidth="3" />
      <rect x="196" y="140" width="28" height="30" fill={skin} />
      <ellipse cx="210" cy="120" rx="26" ry="28" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      {/* straight black wig */}
      <path d="M182 118 Q182 82 210 78 Q238 82 238 118 L238 150 L226 150 L226 112 L194 112 L194 150 L182 150 Z" fill="#20232B" />
      <path d="M182 96 L238 96 L238 108 L182 108 Z" fill={gold} />
      {/* uraeus cobra rising from the brow */}
      <path d="M210 88 Q206 72 214 64 Q222 60 218 74 Q216 82 210 88 Z" fill={gold} stroke={dark} strokeWidth="1.5" />
      <path d="M198 124 q6 4 12 0 M222 124 q-6 4 -12 0" fill="none" stroke={dark} strokeWidth="1.6" />
      <path d="M204 134 q6 4 12 0" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M188 172 Q210 182 232 172" fill="none" stroke={gold} strokeWidth="4" />
    </g>
  );
};

const Koshari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bowl = tint(accentColor, 0.4);
  const rice = "#EFE3C8";
  const lentil = "#7A5230";
  const sauce = "#B5341F";
  const onion = "#C98A3C";
  return (
    <g>
      <path d="M120 165 Q120 240 210 240 Q300 240 300 165 Z" fill={bowl} stroke={dark} strokeWidth="3" />
      <ellipse cx="210" cy="165" rx="90" ry="20" fill={rice} stroke={dark} strokeWidth="2.5" />
      <path d="M128 172 Q160 200 210 200 Q260 200 292 172 Q292 150 210 150 Q128 150 128 172 Z" fill={lentil} opacity="0.85" />
      <path d="M150 168 Q210 190 270 168 Q250 158 210 158 Q170 158 150 168 Z" fill={sauce} />
      {[180, 205, 230, 195, 220].map((x, i) => (
        <path key={i} d={`M${x} ${150 - (i % 2) * 6} q6 -8 12 0`} fill="none" stroke={onion} strokeWidth="3" />
      ))}
      <path d="M300 150 L330 100" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="330" cy="96" rx="10" ry="14" fill={bowl} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const UmmKulthum: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C89263";
  const dress = tint(accentColor, 0.3);
  const scarf = "#E8E2D0";
  return (
    <g>
      <path d="M150 240 L160 160 Q210 138 260 160 L270 240 Z" fill={dress} stroke={dark} strokeWidth="3" />
      {/* scarf in raised hands */}
      <path d="M150 175 Q160 120 210 150 Q260 120 270 175" fill="none" stroke={scarf} strokeWidth="8" strokeLinecap="round" />
      <path d="M158 170 Q150 150 150 135 M262 170 Q270 150 270 135" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <rect x="200" y="140" width="20" height="24" fill={skin} />
      <ellipse cx="210" cy="122" rx="24" ry="26" fill={skin} stroke={shade(skin, 0.3)} strokeWidth="2" />
      <path d="M186 118 Q186 86 210 84 Q234 86 234 118 L234 132 Q210 122 186 132 Z" fill="#2A2A2E" />
      {/* dark glasses */}
      <rect x="190" y="114" width="17" height="11" rx="3" fill="#1B1B1F" />
      <rect x="213" y="114" width="17" height="11" rx="3" fill="#1B1B1F" />
      <line x1="207" y1="118" x2="213" y2="118" stroke="#1B1B1F" strokeWidth="2.5" />
      {/* microphone */}
      <line x1="210" y1="188" x2="210" y2="240" stroke={dark} strokeWidth="4" />
      <circle cx="210" cy="180" r="10" fill={dark} />
    </g>
  );
};

const IglesiaCopta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wall = tint(accentColor, 0.4);
  const dome = shade(accentColor, 0.15);
  return (
    <g>
      <path d="M90 240 L320 240 L320 250 L90 250 Z" fill={dark} opacity="0.35" />
      <rect x="110" y="170" width="200" height="70" fill={wall} stroke={dark} strokeWidth="3" />
      <rect x="150" y="120" width="110" height="60" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 120 Q205 78 260 120 Z" fill={dome} stroke={dark} strokeWidth="3" />
      <line x1="205" y1="78" x2="205" y2="58" stroke={dark} strokeWidth="3" />
      <line x1="196" y1="66" x2="214" y2="66" stroke={dark} strokeWidth="3" />
      <path d="M192 240 L192 200 Q205 184 218 200 L218 240 Z" fill={dark} />
      {[130, 290].map((x) => (
        <rect key={x} x={x - 10} y="150" width="20" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
      <path d="M120 200 h16 M284 200 h16" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const PueblosNubios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const houses = ["#2E86AB", "#E4B02A", "#D96B3C", "#3F9E6E"];
  return (
    <g>
      <path d="M90 232 Q205 222 320 232 L320 250 L90 250 Z" fill={water} />
      {houses.map((c, i) => {
        const x = 108 + i * 52;
        return (
          <g key={i}>
            <rect x={x} y="150" width="42" height="82" fill={c} stroke={dark} strokeWidth="2.5" />
            <path d={`M${x} 150 Q${x + 21} 128 ${x + 42} 150 Z`} fill={shade(c, 0.2)} stroke={dark} strokeWidth="2.5" />
            <rect x={x + 14} y="196" width="14" height="36" fill={dark} opacity="0.7" />
            <rect x={x + 6} y="164" width="9" height="9" fill={tint(c, 0.5)} />
            <rect x={x + 27} y="164" width="9" height="9" fill={tint(c, 0.5)} />
          </g>
        );
      })}
      <line x1="300" y1="232" x2="300" y2="150" stroke={shade("#3F9E6E", 0.3)} strokeWidth="4" />
      {[-1, 0, 1].map((d) => (
        <path key={d} d={`M300 150 q${d * 22} -6 ${d * 30} -20`} fill="none" stroke="#3F9E6E" strokeWidth="4" />
      ))}
    </g>
  );
};

const ShamElNessim: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const blanket = tint(accentColor, 0.35);
  const basket = "#A9762F";
  const eggs = ["#E4574C", "#3F86C4", "#E8B93C", "#5BA35B"];
  return (
    <g>
      <path d="M95 235 L320 200 L320 245 L95 250 Z" fill={blanket} stroke={dark} strokeWidth="2.5" />
      {[130, 165, 200, 235].map((x, i) => (
        <line key={x} x1={x} y1={240 - i * 4} x2={x + 4} y2={202 - i * 4} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* basket */}
      <path d="M110 215 Q118 245 150 245 Q182 245 190 213 Z" fill={basket} stroke={shade(basket, 0.3)} strokeWidth="2.5" />
      <path d="M110 213 Q150 195 190 211" fill="none" stroke={shade(basket, 0.3)} strokeWidth="4" />
      <path d="M118 210 Q150 172 182 208" fill="none" stroke={shade(basket, 0.3)} strokeWidth="3" />
      {/* painted eggs */}
      {eggs.map((c, i) => (
        <ellipse key={i} cx={215 + i * 26} cy={218 - (i % 2) * 6} rx="11" ry="14" fill={c} stroke={shade(c, 0.3)} strokeWidth="2" />
      ))}
      {/* spring onions */}
      {[250, 262, 274].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="245" x2={x + i * 3} y2="205" stroke="#4A8F4E" strokeWidth="4" />
          <circle cx={x} cy="247" r="5" fill="#EDEDE0" />
        </g>
      ))}
    </g>
  );
};

export const egyptIllustrations: Record<string, IllustrationDefinition> = {
  "piramides-giza": { component: PiramidesGiza },
  "piedra-rosetta": { component: PiedraRosetta },
  "nilo-crecidas": { component: NiloCrecidas },
  momificacion: { component: Momificacion },
  "abu-simbel": { component: AbuSimbel },
  "khan-el-khalili": { component: KhanElKhalili },
  "papiro-egipcio": { component: PapiroEgipcio },
  tutankamon: { component: Tutankamon },
  "canal-suez": { component: CanalSuez },
  "faro-alejandria": { component: FaroAlejandria },
  "karnak-luxor": { component: KarnakLuxor },
  hatshepsut: { component: Hatshepsut },
  "gran-esfinge": { component: GranEsfinge },
  "al-azhar": { component: AlAzhar },
  cleopatra: { component: Cleopatra },
  koshari: { component: Koshari },
  "umm-kulthum": { component: UmmKulthum },
  "iglesia-copta": { component: IglesiaCopta },
  "pueblos-nubios": { component: PueblosNubios },
  "sham-el-nessim": { component: ShamElNessim },
};
