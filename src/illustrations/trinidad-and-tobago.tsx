import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CunaDelSteelpan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#C1272D", "#1565C0", "#2E7D32", "#6A1B9A"];
  return (
    <g>
      {/* metal drum body */}
      <path d="M130 240 L120 150 Q120 130 145 128 L265 128 Q290 130 290 150 L280 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* concave top with colorful dents/notes */}
      <ellipse cx="205" cy="128" rx="85" ry="18" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      {[[170, 122, colors[0]], [205, 116, colors[1]], [240, 122, colors[2]], [205, 132, colors[3]]].map(([x, y, c], i) => (
        <ellipse key={i} cx={x as number} cy={y as number} rx="16" ry="8" fill={c as string} opacity="0.85" />
      ))}
    </g>
  );
};

const CarnavalDeTrinidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const colors = [accentColor, "#F4C430", "#C1272D", "#1565C0"];
  return (
    <g>
      {[-70, -35, 0, 35, 70].map((deg, i) => (
        <path key={deg} d="M205 175 Q195 130 205 75 Q215 130 205 175 Z" fill={colors[i % colors.length]} transform={`rotate(${deg} 205 175)`} />
      ))}
      <circle cx="205" cy="180" r="26" fill={dark} />
    </g>
  );
};

const DosIslasUnaNacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="80" width="225" height="170" fill={water} opacity="0.5" />
      <path d="M100 150 Q140 110 195 130 Q230 145 210 185 Q170 210 125 195 Q95 180 100 150 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M280 190 Q305 175 312 195 Q318 215 298 222 Q278 225 272 208 Q270 195 280 190 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CalypsoYSoca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* vintage microphone */}
      <ellipse cx="200" cy="160" rx="24" ry="30" fill={dark} />
      {[145, 154, 163, 172].map((y) => (
        <line key={y} x1="180" y1={y} x2="220" y2={y} stroke={light} strokeWidth="1.5" opacity="0.6" />
      ))}
      <rect x="193" y="190" width="14" height="42" fill={dark} />
      <path d="M172 232 L228 232" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {/* musical notes */}
      <g transform="translate(255,120)">
        <circle cx="0" cy="20" r="7" fill={accentColor} />
        <line x1="7" y1="20" x2="7" y2="-15" stroke={accentColor} strokeWidth="3" />
        <path d="M7 -15 Q18 -12 16 -2" fill="none" stroke={accentColor} strokeWidth="3" />
      </g>
      <g transform="translate(285,155) scale(0.8)">
        <circle cx="0" cy="20" r="7" fill={dark} />
        <line x1="7" y1="20" x2="7" y2="-15" stroke={dark} strokeWidth="3" />
        <path d="M7 -15 Q18 -12 16 -2" fill="none" stroke={dark} strokeWidth="3" />
      </g>
    </g>
  );
};

const MosaicoIndoYAfrotrinitense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skinA = "#C97C4A";
  const skinB = "#5C4033";
  return (
    <g>
      <path d="M130 200 Q150 175 175 190 Q195 200 195 220 L195 235 L130 235 Z" fill={skinA} stroke={dark} strokeWidth="2" />
      <path d="M280 200 Q260 175 235 190 Q215 200 215 220 L215 235 L280 235 Z" fill={skinB} stroke={dark} strokeWidth="2" />
      <path d="M195 220 Q205 210 215 220" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LagoDeBrea: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const shine = "#5A5652";
  return (
    <g>
      <ellipse cx="205" cy="180" rx="110" ry="55" fill={dark} />
      <path d="M115 165 Q160 150 205 165 Q250 180 295 160" fill="none" stroke={shine} strokeWidth="4" opacity="0.6" />
      <path d="M125 195 Q170 210 215 195 Q260 180 285 200" fill="none" stroke={shine} strokeWidth="4" opacity="0.5" />
      <ellipse cx="170" cy="160" rx="18" ry="7" fill={shine} opacity="0.3" />
    </g>
  );
};

const CunaDelLimbo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      <line x1="130" y1="165" x2="280" y2="165" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <line x1="130" y1="165" x2="130" y2="235" stroke={dark} strokeWidth="6" />
      <line x1="280" y1="165" x2="280" y2="235" stroke={dark} strokeWidth="6" />
      <path d="M130 165 Q122 150 130 132 Q138 150 130 165 Z" fill={flame} />
      <path d="M280 165 Q272 150 280 132 Q288 150 280 165 Z" fill={flame} />
    </g>
  );
};

const RiquezaPetroleraCaribena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="205" width="225" height="35" fill={water} opacity="0.6" />
      <rect x="165" y="150" width="70" height="18" fill={dark} />
      <line x1="175" y1="168" x2="160" y2="230" stroke={dark} strokeWidth="6" />
      <line x1="225" y1="168" x2="240" y2="230" stroke={dark} strokeWidth="6" />
      <line x1="200" y1="168" x2="200" y2="230" stroke={dark} strokeWidth="6" />
      <rect x="192" y="120" width="8" height="32" fill={accentColor} />
      <path d="M200 118 L214 108" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const DiwaliYHosay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#F4A300";
  return (
    <g>
      {[130, 175, 220, 265].map((x) => (
        <g key={x}>
          <path d={`M${x - 22} 220 Q${x} 200 ${x + 22} 220 L${x + 18} 232 L${x - 18} 232 Z`} fill={accentColor} stroke={dark} strokeWidth="2" />
          <path d={`M${x} 200 Q${x - 6} 185 ${x} 170 Q${x + 6} 185 ${x} 200 Z`} fill={flame} />
        </g>
      ))}
    </g>
  );
};

const IbisEscarlataCaroni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2E7D32";
  return (
    <g>
      {/* mangrove branch */}
      <path d="M95 235 Q210 220 320 235" stroke="#5C4033" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M150 235 L150 210 M250 235 L250 205" stroke="#5C4033" strokeWidth="7" fill="none" />
      <circle cx="150" cy="200" r="20" fill={green} />
      <circle cx="250" cy="195" r="24" fill={green} />
      {/* scarlet ibis perched */}
      <ellipse cx="205" cy="180" rx="34" ry="24" fill={accentColor} />
      <circle cx="245" cy="165" r="14" fill={accentColor} />
      <path d="M259 165 L278 160 L262 172 Z" fill={dark} />
      <circle cx="250" cy="160" r="2" fill="#1A1A1A" />
      <path d="M185 200 L178 232 M195 202 L190 234" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

export const trinidadAndTobagoIllustrations: Record<string, IllustrationDefinition> = {
  "cuna-del-steelpan": { component: CunaDelSteelpan },
  "carnaval-de-trinidad": { component: CarnavalDeTrinidad },
  "dos-islas-una-nacion": { component: DosIslasUnaNacion },
  "calypso-y-soca": { component: CalypsoYSoca },
  "mosaico-indo-y-afrotrinitense": { component: MosaicoIndoYAfrotrinitense },
  "lago-de-brea": { component: LagoDeBrea },
  "cuna-del-limbo": { component: CunaDelLimbo },
  "riqueza-petrolera-caribena": { component: RiquezaPetroleraCaribena },
  "diwali-y-hosay": { component: DiwaliYHosay },
  "ibis-escarlata-caroni": { component: IbisEscarlataCaroni },
};
