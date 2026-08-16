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
};
