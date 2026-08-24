import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const DiversidadLinguistica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA", "#C1272D"];
  return (
    <g>
      {[[140, 190, 0], [190, 155, 1], [240, 195, 2], [180, 225, 3], [270, 150, 4]].map(([x, y, i], idx) => (
        <path key={idx} d={`M${(x as number) - 28} ${(y as number) - 17} Q${(x as number) - 32} ${y} ${(x as number) - 13} ${y} L${(x as number) - 8} ${y} L${(x as number) - 11} ${(y as number) + 11} L${x} ${y} L${(x as number) + 28} ${y} Q${(x as number) + 32} ${y} ${(x as number) + 32} ${(y as number) - 17} Q${(x as number) + 32} ${(y as number) - 32} ${(x as number) + 28} ${(y as number) - 32} L${(x as number) - 28} ${(y as number) - 32} Q${(x as number) - 32} ${(y as number) - 32} ${(x as number) - 28} ${(y as number) - 17} Z`} fill={colors[i as number]} stroke={dark} strokeWidth="1.5" opacity="0.9" />
      ))}
    </g>
  );
};

const TokPisin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin1 = "#6B4B3A";
  const skin2 = "#8B5A2B";
  return (
    <g>
      <circle cx="150" cy="180" r="16" fill={skin1} />
      <path d="M135 195 Q150 188 165 195 L162 235 L138 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="260" cy="175" r="16" fill={skin2} />
      <path d="M245 190 Q260 183 275 190 L272 235 L248 235 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2.5" />
      <path d="M165 175 Q195 165 200 175 Q205 185 175 185 Z" fill="#fff" stroke={dark} strokeWidth="1.5" />
      <path d="M245 165 Q215 155 210 165 Q205 175 235 175 Z" fill="#fff" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const SingSing: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const colors = ["#F4A300", "#C1272D", "#00838F", "#F4C430"];
  return (
    <g>
      <ellipse cx="205" cy="190" rx="26" ry="32" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M185 178 Q205 190 225 178" fill="none" stroke={accentColor} strokeWidth="4" />
      <circle cx="196" cy="172" r="2.5" fill="#1A1A1A" />
      <circle cx="214" cy="172" r="2.5" fill="#1A1A1A" />
      {[-40, -25, -10, 5, 20, 35].map((deg, i) => (
        <ellipse key={deg} cx="205" cy="130" rx="6" ry="34" fill={colors[i % colors.length]} stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 205 165)`} />
      ))}
    </g>
  );
};

const AveDelParaiso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#F4A300";
  return (
    <g>
      <ellipse cx="195" cy="170" rx="20" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="175" cy="165" r="10" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M166 165 L155 162 L163 170 Z" fill={dark} />
      {[[210, 175, 20], [220, 185, 35], [225, 195, 48], [222, 205, 60]].map(([x, y, deg]) => (
        <path key={x as number} d="M0 0 Q40 -6 60 4" fill="none" stroke={gold} strokeWidth="4" strokeLinecap="round" transform={`translate(${x} ${y}) rotate(${deg})`} />
      ))}
      <circle cx="172" cy="163" r="2" fill="#1A1A1A" />
    </g>
  );
};

const KulaRing: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const shell1 = "#C1272D";
  const shell2 = "#F5F0E6";
  return (
    <g>
      <circle cx="205" cy="180" r="55" fill="none" stroke={dark} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      {[0, 60, 120, 240, 300].map((deg, i) => (
        <circle key={deg} cx="205" cy="125" r="9" fill={i % 2 === 0 ? shell1 : shell2} stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 205 180)`} />
      ))}
      <circle cx="205" cy="125" r="9" fill={shell1} stroke={dark} strokeWidth="1.5" transform="rotate(180 205 180)" />
    </g>
  );
};

const PrimerContactoHighlands: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <polygon points="90,240 160,140 220,240" fill={accentColor} opacity="0.5" />
      <polygon points="180,240 250,120 320,240" fill={dark} opacity="0.4" />
      <path d="M250 155 L285 145 L295 150 L260 165 L262 175 L245 168 Z" fill="#B0B8BF" stroke={dark} strokeWidth="2" />
      <line x1="270" y1="150" x2="265" y2="140" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const BetelNut: IllustrationComponent = () => {
  const red = "#B22222";
  return (
    <g>
      <ellipse cx="205" cy="170" rx="26" ry="34" fill="#4A8F4E" stroke={shade("#4A8F4E", 0.3)} strokeWidth="3" />
      <path d="M195 155 Q205 145 215 155" fill="none" stroke={shade("#4A8F4E", 0.35)} strokeWidth="2" opacity="0.5" />
      {[[150, 225], [260, 230], [190, 240], [230, 220]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="12" ry="6" fill={red} opacity={0.8 - i * 0.1} />
      ))}
    </g>
  );
};

const ArteSepik: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 235 L165 155 Q163 120 205 112 Q247 120 245 155 L240 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M180 150 Q205 165 230 150 L226 175 Q205 190 184 175 Z" fill={dark} opacity="0.35" />
      <circle cx="192" cy="145" r="8" fill={dark} opacity="0.6" />
      <circle cx="218" cy="145" r="8" fill={dark} opacity="0.6" />
      <path d="M190 200 Q205 215 220 200" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={180 + i * 15} y1="215" x2={180 + i * 15} y2="230" stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
    </g>
  );
};

const RugbyLeague: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="180" rx="60" ry="32" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="150" y1="180" x2="260" y2="180" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[170, 190, 210, 240].map((x) => (
        <line key={x} x1={x} y1="165" x2={x} y2="195" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {[[110, 140], [300, 140], [120, 220], [290, 225]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} L${(x as number) + (x < 205 ? 20 : -20)} ${y}`} stroke={dark} strokeWidth="2" opacity="0.4" />
      ))}
    </g>
  );
};

const SelvaBiodiversidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.3);
  return (
    <g>
      {[[120, 220, 45], [180, 200, 55], [240, 215, 50], [290, 205, 40]].map(([x, y, r], i) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="2" opacity="0.9" />
      ))}
      {[150, 210, 265].map((x) => (
        <line key={x} x1={x} y1="235" x2={x} y2="250" stroke="#5C3A1E" strokeWidth="5" />
      ))}
    </g>
  );
};

const BilumBolsaTejida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="180" cy="130" r="14" fill={skin} />
      <path d="M166 142 Q180 135 194 142 L190 175 L170 175 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <path d="M180 118 Q225 108 255 150" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M225 150 Q195 175 205 220 Q212 245 255 240 Q275 210 262 175 Q250 150 225 150 Z" fill={accentColor} stroke={dark} strokeWidth="3" opacity="0.85" />
      <path d="M215 170 L255 225 M235 155 L220 235 M255 165 L210 215 M215 195 L260 200" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const HombresPelucaHuli: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#6B4423";
  return (
    <g>
      <circle cx="205" cy="170" r="18" fill={skin} />
      <path d="M185 158 Q205 100 225 158 Q235 130 245 140 Q235 155 240 165 Q225 150 205 150 Q185 150 170 165 Q175 155 165 140 Q175 130 185 158 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="118" rx="10" ry="16" fill="#F4A300" stroke={dark} strokeWidth="2" />
      <path d="M175 200 Q205 190 235 200 L228 240 L182 240 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <circle cx="197" cy="168" r="2" fill="#1A1A1A" />
      <circle cx="213" cy="168" r="2" fill="#1A1A1A" />
    </g>
  );
};

const KukAgricultura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="150" width="230" height="100" fill={tint(accentColor, 0.35)} />
      {[130, 180, 230, 280].map((x) => (
        <rect key={x} x={x - 6} y="150" width="12" height="100" fill="#3D8FB0" opacity="0.6" />
      ))}
      {[150, 200, 250, 300].map((x) => (
        <path key={x} d={`M${x - 20} 165 Q${x} 158 ${x + 20} 165`} fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      ))}
      {[150, 200, 250, 300].map((x) => (
        <path key={`b${x}`} d={`M${x - 18} 200 Q${x} 193 ${x + 18} 200`} fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M90 250 L320 250" stroke={dark} strokeWidth="1" opacity="0.2" />
    </g>
  );
};

const PagoCompensacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const pig = "#D9A46A";
  return (
    <g>
      <ellipse cx="160" cy="205" rx="28" ry="16" fill={pig} stroke={shade(pig, 0.3)} strokeWidth="2.5" />
      <circle cx="188" cy="198" r="10" fill={pig} stroke={shade(pig, 0.3)} strokeWidth="2" />
      <ellipse cx="245" cy="210" rx="26" ry="15" fill={pig} stroke={shade(pig, 0.3)} strokeWidth="2.5" />
      <circle cx="272" cy="203" r="9" fill={pig} stroke={shade(pig, 0.3)} strokeWidth="2" />
      <rect x="190" y="160" width="30" height="18" rx="2" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="185" y="170" width="30" height="18" rx="2" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      <path d="M140 230 L280 230" stroke={dark} strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
    </g>
  );
};

const SendaKokoda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M100 240 Q170 190 205 155 Q245 120 310 100" fill="none" stroke="#8B6F47" strokeWidth="16" strokeLinecap="round" opacity="0.55" />
      <circle cx="150" cy="205" r="11" fill={skin} />
      <path d="M137 218 Q150 210 163 218 L159 240 L141 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="163" y1="222" x2="205" y2="215" stroke={dark} strokeWidth="4" />
      <rect x="163" y="215" width="42" height="9" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <ellipse cx="255" cy="140" rx="18" ry="12" fill="#4A8F4E" opacity="0.7" />
      <ellipse cx="280" cy="120" rx="14" ry="10" fill="#4A8F4E" opacity="0.6" />
    </g>
  );
};

export const papuaNewGuineaIllustrations: Record<string, IllustrationDefinition> = {
  "diversidad-linguistica": { component: DiversidadLinguistica },
  "tok-pisin": { component: TokPisin },
  "sing-sing": { component: SingSing },
  "ave-del-paraiso": { component: AveDelParaiso },
  "kula-ring": { component: KulaRing },
  "primer-contacto-highlands": { component: PrimerContactoHighlands },
  "betel-nut": { component: BetelNut },
  "arte-sepik": { component: ArteSepik },
  "rugby-league": { component: RugbyLeague },
  "selva-biodiversidad": { component: SelvaBiodiversidad },
  "el-bilum-la-bolsa-tejida-que-se-estira": { component: BilumBolsaTejida },
  "los-hombres-peluca-huli": { component: HombresPelucaHuli },
  "kuk-uno-de-los-lugares-donde-nacio-la-agricultura": { component: KukAgricultura },
  "el-pago-de-compensacion-y-la-paz-tribal": { component: PagoCompensacion },
  "la-senda-kokoda-y-los-angeles-de-fuzzy-wuzzy": { component: SendaKokoda },
};
