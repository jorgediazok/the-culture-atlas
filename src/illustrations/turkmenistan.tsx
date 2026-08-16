import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const PuertaAlInfierno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#D9BE8F";
  return (
    <g>
      <path d="M95 240 Q210 225 320 240 L320 250 L95 250 Z" fill={sand} />
      <ellipse cx="205" cy="235" rx="100" ry="18" fill={dark} />
      <ellipse cx="205" cy="230" rx="80" ry="12" fill="#1A1A1A" />
      {/* orange flames rising from the crater */}
      {[[150, 210], [180, 195], [205, 190], [230, 195], [260, 210]].map(([x, y], i) => (
        <path
          key={x}
          d={`M${x} ${y} Q${(x as number) - 10} ${(y as number) - 30} ${x} ${(y as number) - (i % 2 === 0 ? 60 : 45)} Q${(x as number) + 10} ${(y as number) - 30} ${x} ${y} Z`}
          fill={accentColor}
        />
      ))}
    </g>
  );
};

const CaballosAkhalTeke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#F4C430";
  return (
    <g>
      <path d="M150 200 Q145 175 165 165 Q175 155 195 158 Q225 150 245 165 Q260 168 262 185 L258 210 L245 210 L242 195 L180 195 L175 215 L162 215 Z" fill={gold} stroke={dark} strokeWidth="2.5" />
      <path d="M245 165 Q265 155 278 138" fill="none" stroke={gold} strokeWidth="14" strokeLinecap="round" />
      <ellipse cx="280" cy="132" rx="10" ry="14" fill={gold} stroke={dark} strokeWidth="2" />
      <path d="M255 150 L245 135" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <path d="M150 200 Q135 215 130 235 M175 215 L168 240 M242 195 Q250 215 245 240" stroke={gold} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M150 175 Q130 180 118 165" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const AsjabatMarmolBlanco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const gold = "#D4A017";
  return (
    <g>
      {[110, 155, 200, 245, 290].map((x, i) => (
        <rect key={x} x={x} y={200 - (i % 2) * 30} width="34" height={40 + (i % 2) * 30} fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      ))}
      {/* golden fountain in front */}
      <ellipse cx="205" cy="235" rx="45" ry="10" fill={gold} />
      <path d="M205 235 L205 205" stroke={gold} strokeWidth="4" />
      <path d="M205 205 Q190 215 180 235 M205 205 Q220 215 230 235" fill="none" stroke={gold} strokeWidth="3" opacity="0.8" />
    </g>
  );
};

const Ruhnama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* golden stand */}
      <path d="M175 240 L235 240 L225 220 L185 220 Z" fill={gold} />
      <rect x="200" y="200" width="10" height="22" fill={gold} />
      {/* thick open book */}
      <path d="M205 175 L130 190 L130 220 L205 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M205 175 L280 190 L280 220 L205 210 Z" fill={dark} stroke={dark} strokeWidth="2.5" />
      <path d="M130 190 L130 196 L205 216 L205 210 Z" fill={shade(accentColor, 0.2)} />
      <path d="M280 190 L280 196 L205 216 L205 210 Z" fill={shade(dark, 0.2)} />
    </g>
  );
};

const NeutralidadPermanente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      {/* stylized olive branch */}
      <path d="M120 235 Q150 190 195 175" fill="none" stroke="#6B7A3A" strokeWidth="6" strokeLinecap="round" />
      {[[140, 215], [160, 195], [180, 180], [195, 172]].map(([x, y], i) => (
        <ellipse key={x} cx={x} cy={y} rx="10" ry="6" fill={accentColor} transform={`rotate(${i % 2 === 0 ? -30 : 30} ${x} ${y})`} />
      ))}
      {/* sealed document beside it */}
      <rect x="220" y="130" width="80" height="100" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      {[150, 165, 180, 195].map((y) => (
        <line key={y} x1="232" y1={y} x2="288" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <circle cx="260" cy="215" r="14" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
    </g>
  );
};

const AntiguaMerv: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="115" y="180" width="180" height="60" fill={accentColor} opacity="0.7" />
      <path d="M150 180 Q150 130 205 125 Q260 130 260 180 Z" fill={light} stroke={dark} strokeWidth="3" />
      <path d="M170 145 Q205 100 240 145" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      {/* crumbling gaps in the dome */}
      <path d="M225 130 L240 145 L220 148 Z" fill="#F5F0E6" />
      <rect x="130" y="200" width="18" height="40" fill={dark} opacity="0.6" />
      <rect x="260" y="195" width="16" height="45" fill={dark} opacity="0.6" />
    </g>
  );
};

const AlfombrasTurcomanas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="110" y="110" width="190" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="125" y="125" width="160" height="100" fill="none" stroke={gold} strokeWidth="3" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <path
            key={`${row}-${col}`}
            d={`M${145 + col * 40} ${150 + row * 30} l10 -10 l10 10 l-10 10 Z`}
            fill={gold}
          />
        ))
      )}
    </g>
  );
};

const ReservasDeGas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flame = "#4FA8E8";
  return (
    <g>
      <rect x="185" y="150" width="20" height="90" fill={dark} />
      <path d="M165 150 L225 150 L215 130 L175 130 Z" fill={dark} />
      <line x1="175" y1="150" x2="175" y2="240" stroke={dark} strokeWidth="6" />
      <line x1="215" y1="150" x2="215" y2="240" stroke={dark} strokeWidth="6" />
      {/* blue gas flame on top */}
      <path d={`M195 130 Q185 105 195 85 Q198 100 200 90 Q205 105 195 130 Z`} fill={flame} />
      <path d={`M195 125 Q189 108 195 95`} fill="none" stroke="#fff" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const CultoALaPersonalidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="195" y="130" width="20" height="105" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M175 235 L235 235 L225 210 L185 210 Z" fill={dark} />
      {/* golden figure on top */}
      <circle cx="205" cy="110" r="14" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <path d="M192 122 Q205 116 218 122 L214 145 L196 145 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
      <path d="M192 128 Q205 138 218 128" fill="none" stroke={gold} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const CulturaNomadaTurcomana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const sand = "#D9BE8F";
  return (
    <g>
      <path d="M95 240 Q210 228 320 240 L320 250 L95 250 Z" fill={sand} />
      {/* circular felt tent */}
      <path d="M140 235 Q140 190 205 185 Q270 190 270 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M165 235 Q165 205 205 200 Q245 205 245 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      <rect x="195" y="200" width="20" height="8" fill={dark} opacity="0.6" />
      <path d="M195 235 L195 210 L215 210 L215 235 Z" fill="#1A1A1A" opacity="0.7" />
    </g>
  );
};

export const turkmenistanIllustrations: Record<string, IllustrationDefinition> = {
  "puerta-al-infierno": { component: PuertaAlInfierno },
  "caballos-akhal-teke": { component: CaballosAkhalTeke },
  "asjabat-marmol-blanco": { component: AsjabatMarmolBlanco },
  ruhnama: { component: Ruhnama },
  "neutralidad-permanente": { component: NeutralidadPermanente },
  "antigua-merv": { component: AntiguaMerv },
  "alfombras-turcomanas": { component: AlfombrasTurcomanas },
  "reservas-de-gas": { component: ReservasDeGas },
  "culto-a-la-personalidad": { component: CultoALaPersonalidad },
  "cultura-nomada-turcomana": { component: CulturaNomadaTurcomana },
};
