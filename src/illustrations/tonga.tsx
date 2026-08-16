import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnicaMonarquiaPacifico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      <ellipse cx="205" cy="215" rx="60" ry="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M155 200 L165 155 L185 185 L205 145 L225 185 L245 155 L255 200 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="165" cy="150" r="5" fill={gold} />
      <circle cx="205" cy="140" r="6" fill={gold} />
      <circle cx="245" cy="150" r="5" fill={gold} />
    </g>
  );
};

const ErupcionHungaTonga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={water} opacity="0.6" />
      <path d="M195 200 L205 100 L215 200 Z" fill={dark} opacity="0.5" />
      <path d="M175 170 Q205 130 235 170 Q225 155 205 150 Q185 155 175 170 Z" fill={accentColor} opacity="0.7" />
      <ellipse cx="205" cy="100" rx="45" ry="20" fill={accentColor} opacity="0.5" />
      <ellipse cx="230" cy="85" rx="30" ry="14" fill={tint(accentColor, 0.3)} opacity="0.5" />
    </g>
  );
};

const NadarConBallenas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1D6FA5" opacity="0.5" />
      <path d="M130 190 Q150 165 195 168 Q245 172 265 195 Q270 205 260 210 L250 212 L245 202 L155 202 L148 212 L135 208 Q125 202 130 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M265 195 Q285 190 295 175" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <path d="M150 175 L140 160 L155 170 Z" fill={dark} />
      <circle cx="195" cy="225" r="9" fill={skin} />
      <path d="M186 235 Q195 228 204 235 L200 240 L190 240 Z" fill="#000" opacity="0.5" />
    </g>
  );
};

const VakaNavegacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 225 Q205 240 320 225 L320 250 L90 250 Z" fill={water} />
      <path d="M120 215 Q150 205 180 215 L180 222 Q150 212 120 222 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M230 215 Q260 205 290 215 L290 222 Q260 212 230 222 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="150" y="205" width="110" height="12" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
      <line x1="205" y1="205" x2="205" y2="130" stroke="#5C3A1E" strokeWidth="4" />
      <path d="M205 130 L250 195 L205 195 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const DomingoSagrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="120" width="130" height="120" fill={tint(accentColor, 0.5)} stroke={dark} strokeWidth="3" />
      <rect x="160" y="160" width="40" height="80" fill={dark} opacity="0.5" />
      <circle cx="192" cy="200" r="3" fill="#F5F0E6" />
      <rect x="205" y="150" width="45" height="30" rx="4" fill="#C1272D" stroke={shade("#C1272D", 0.3)} strokeWidth="2" transform="rotate(-6 227 165)" />
      <text x="227" y="170" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle" transform="rotate(-6 227 165)">CERRADO</text>
    </g>
  );
};

const NgatuTapa: IllustrationComponent = ({ accentColor }) => {
  const brown = "#8B5A2B";
  return (
    <g>
      <rect x="110" y="115" width="190" height="130" fill="#E8DCC0" stroke={shade("#E8DCC0", 0.3)} strokeWidth="3" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <polygon key={`${row}-${col}`} points={`${145 + col * 45},${140 + row * 40} ${162 + col * 45},${157 + row * 40} ${145 + col * 45},${174 + row * 40} ${128 + col * 45},${157 + row * 40}`} fill={col % 2 === 0 ? brown : accentColor} opacity="0.8" />
        ))
      )}
    </g>
  );
};

const RugbyTonga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      <ellipse cx="180" cy="180" rx="50" ry="28" fill={accentColor} stroke={dark} strokeWidth="3" transform="rotate(-15 180 180)" />
      <line x1="140" y1="175" x2="220" y2="185" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <path d="M255 235 L255 195 Q255 185 265 185 L280 185 Q290 185 290 195 L290 235 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <ellipse cx="272" cy="185" rx="17" ry="6" fill={tint(gold, 0.3)} stroke={shade(gold, 0.3)} strokeWidth="2" />
    </g>
  );
};

const PrimerPaisNuevoDia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      <circle cx="205" cy="180" r="45" fill="#F4A300" stroke={dark} strokeWidth="2.5" />
      <rect x="90" y="180" width="230" height="70" fill={water} opacity="0.35" />
      {[0, 30, 60, 90, 120, 150].map((deg) => (
        <line key={deg} x1="205" y1="180" x2="205" y2="115" stroke="#F4A300" strokeWidth="3" opacity="0.6" transform={`rotate(${deg} 205 180)`} />
      ))}
    </g>
  );
};

const TuimalilaTortuga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const shell = "#8B5A2B";
  return (
    <g>
      <rect x="245" y="140" width="60" height="70" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2.5" />
      <polygon points="240,140 275,110 310,140" fill={dark} opacity="0.5" />
      <ellipse cx="175" cy="200" rx="42" ry="30" fill={shell} stroke={shade(shell, 0.3)} strokeWidth="3" />
      {[[160, 190], [190, 195], [175, 210]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="9" ry="7" fill={shade(shell, 0.2)} stroke={shade(shell, 0.35)} strokeWidth="1" />
      ))}
      <ellipse cx="135" cy="205" rx="10" ry="8" fill={shell} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={160 + i * 10} y1="225" x2={158 + i * 10} y2="235" stroke={shell} strokeWidth="4" />
      ))}
    </g>
  );
};

const RemesasTonga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="150" width="230" height="90" fill={water} opacity="0.45" />
      <circle cx="230" cy="205" r="26" fill="#4A8F4E" stroke={dark} strokeWidth="2" />
      <rect x="120" y="140" width="70" height="48" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M120 140 L155 165 L190 140" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M195 165 Q210 160 220 175" fill="none" stroke={dark} strokeWidth="2" strokeDasharray="4 4" />
      <path d="M212 170 L220 175 L212 182" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

export const tongaIllustrations: Record<string, IllustrationDefinition> = {
  "unica-monarquia-pacifico": { component: UnicaMonarquiaPacifico },
  "erupcion-hunga-tonga": { component: ErupcionHungaTonga },
  "nadar-con-ballenas": { component: NadarConBallenas },
  "vaka-navegacion": { component: VakaNavegacion },
  "domingo-sagrado": { component: DomingoSagrado },
  "ngatu-tapa": { component: NgatuTapa },
  "rugby-tonga": { component: RugbyTonga },
  "primer-pais-nuevo-dia": { component: PrimerPaisNuevoDia },
  "tuimalila-tortuga": { component: TuimalilaTortuga },
  "remesas-tonga": { component: RemesasTonga },
};
