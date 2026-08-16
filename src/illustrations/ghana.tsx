import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AtaudesDeFantasia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M110 200 Q100 195 108 185 L150 175 Q165 172 178 180 L280 200 Q295 205 288 218 L245 232 Q225 238 205 230 L118 210 Q108 208 110 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M108 185 Q95 182 92 195 Q90 205 100 208" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M280 200 Q298 198 305 208 Q308 218 298 220" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M150 190 Q175 185 200 195" fill="none" stroke={light} strokeWidth="3" opacity="0.7" />
      <circle cx="180" cy="197" r="3" fill="#1A1A1A" />
    </g>
  );
};

const KenteTejidoDeReyes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const colors = [accentColor, gold, "#C1272D", "#2E7D32"];
  return (
    <g>
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <rect key={row} x="115" y={110 + row * 24} width="190" height="20" fill={colors[row % colors.length]} stroke={dark} strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect key={`${row}-${col}`} x={125 + col * 38} y={112 + row * 24} width="18" height="16" fill={colors[(row + col + 1) % colors.length]} opacity="0.7" />
        ))
      )}
    </g>
  );
};

const TaburoteDoradoAshanti: IllustrationComponent = ({ accentColor }) => {
  const gold = "#D4AF37";
  return (
    <g>
      <ellipse cx="205" cy="235" rx="70" ry="12" fill={accentColor} opacity="0.4" />
      <ellipse cx="205" cy="185" rx="60" ry="12" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <path d="M155 185 Q145 210 165 220 Q185 228 205 225 Q225 228 245 220 Q265 210 255 185" fill="none" stroke={gold} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="205" cy="220" rx="45" ry="10" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" />
      <path d="M170 200 Q160 195 155 205 M240 200 Q250 195 255 205" fill="none" stroke={gold} strokeWidth="3" />
    </g>
  );
};

const SimbolosAdinkra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="180" r="70" fill="#F5EFE0" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M175 175 Q185 155 210 158 Q225 160 228 145" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <circle cx="175" cy="175" r="10" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M167 172 L172 178 M167 178 L172 172" stroke={dark} strokeWidth="1.5" />
      <path d="M228 145 L220 138 M228 145 L222 150" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <path d="M195 210 Q205 225 220 210" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M195 210 Q188 220 178 218" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const CastilloDeCapeCoast: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 240 Q205 232 320 240 L320 250 L90 250 Z" fill={water} />
      <rect x="130" y="150" width="150" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[145, 265].map((x) => (
        <rect key={x} x={x - 12} y="130" width="24" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="190" y="185" width="30" height="55" fill="#1A1A1A" />
      {[150, 180, 240, 270].map((x) => (
        <rect key={x} x={x - 8} y="170" width="16" height="16" fill={accentColor} opacity="0.6" />
      ))}
    </g>
  );
};

const PrimeraIndependenciaAfricana: IllustrationComponent = () => {
  const red = "#C1272D";
  return (
    <g>
      <rect x="100" y="110" width="210" height="140" fill={red} />
      <polygon points="205,140 218,178 258,178 226,200 238,238 205,215 172,238 184,200 152,178 192,178" fill="#1A1A1A" stroke="#000" strokeWidth="1" />
    </g>
  );
};

const SegundoMayorProductorDeCacao: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5EFE0";
  return (
    <g>
      <path d="M150 235 Q135 195 150 155 Q165 125 205 118 Q245 125 260 155 Q275 195 260 235 Q205 220 150 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${175 + i * 12} 130 Q${170 + i * 12} 175 ${175 + i * 12} 225`} stroke={dark} strokeWidth="1.5" opacity="0.35" fill="none" />
      ))}
      {[[180, 175], [205, 165], [225, 180], [195, 200], [215, 205]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="12" ry="9" fill={cream} stroke={shade(cream, 0.25)} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const PuenteDeCopasDeKakum: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2E7D32";
  return (
    <g>
      {[[130, 175], [280, 165]].map(([x, y]) => (
        <g key={x as number}>
          <path d={`M${x} 240 Q${(x as number) - 20} 200 ${x} ${y}`} fill="none" stroke="#6B4423" strokeWidth="8" strokeLinecap="round" />
          <circle cx={x} cy={y} r="40" fill={green} opacity="0.7" />
        </g>
      ))}
      <path d="M130 175 Q205 200 280 165" fill="none" stroke="#8B5A2B" strokeWidth="5" />
      {[150, 175, 200, 225, 250].map((x, i) => (
        <line key={x} x1={x} y1={175 + i * 5} x2={x} y2={185 + i * 5} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M130 172 Q205 197 280 162" fill="none" stroke="#5C3A1E" strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const FestivalHomowo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const corn = "#F4C430";
  return (
    <g>
      <path d="M155 195 L155 225 Q155 240 180 240 L230 240 Q255 240 255 225 L255 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="50" ry="14" fill={corn} stroke={shade(corn, 0.3)} strokeWidth="2" />
      <path d="M185 175 Q180 160 190 148 M225 175 Q230 160 220 148" fill="none" stroke="#B0AFA8" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      {[[130, 130], [280, 130]].map(([x, y], i) => (
        <path key={x as number} d={`M${x} ${y} L${x} ${(y as number) + 60}`} stroke={i === 0 ? "#C1272D" : "#2E7D32"} strokeWidth="6" />
      ))}
      <path d="M130 130 L120 145 L140 145 Z" fill="#C1272D" />
      <path d="M280 130 L270 145 L290 145 Z" fill="#2E7D32" />
    </g>
  );
};

const TamboresParlantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M175 145 Q175 175 165 190 Q160 200 165 210 Q175 225 175 265 L235 265 Q235 225 245 210 Q250 200 245 190 Q235 175 235 145 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="145" rx="30" ry="10" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="265" rx="30" ry="10" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={180 + i * 10} y1="150" x2={175 + i * 10} y2="260" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      <path d="M260 130 L290 115 M260 130 L285 130" stroke={wood} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

export const ghanaIllustrations: Record<string, IllustrationDefinition> = {
  "ataudes-de-fantasia": { component: AtaudesDeFantasia },
  "kente-tejido-de-reyes": { component: KenteTejidoDeReyes },
  "taburete-dorado-ashanti": { component: TaburoteDoradoAshanti },
  "simbolos-adinkra": { component: SimbolosAdinkra },
  "castillo-de-cape-coast": { component: CastilloDeCapeCoast },
  "primera-independencia-africana": { component: PrimeraIndependenciaAfricana },
  "segundo-mayor-productor-de-cacao": { component: SegundoMayorProductorDeCacao },
  "puente-de-copas-de-kakum": { component: PuenteDeCopasDeKakum },
  "festival-homowo": { component: FestivalHomowo },
  "tambores-parlantes": { component: TamboresParlantes },
};
