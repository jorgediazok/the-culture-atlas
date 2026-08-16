import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const YerevanMasAntiguaQueRoma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 250 L130 150 L310 150 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="130" y="150" width="180" height="14" fill={dark} />
      {[150, 185, 220, 255, 290].map((x, i) => (
        <rect key={x} x={x - 8} y="115" width="16" height="35" fill={i % 2 === 0 ? tint(accentColor, 0.3) : accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M205 115 L205 90 L225 100 L205 110" fill={dark} />
    </g>
  );
};

const PrimerPaisCristiano301: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="150" width="90" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 150 Q205 100 240 150 Z" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.5" />
      <rect x="199" y="70" width="12" height="40" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <rect x="188" y="83" width="34" height="12" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M175 240 Q175 210 205 205 Q235 210 235 240 Z" fill="#8B5A2B" />
      <circle cx="205" cy="220" r="10" fill="#F4A300" />
    </g>
  );
};

const AlfabetoArmenioMesropMashtots: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[120, 200, "Ա"], [175, 190, "Բ"], [230, 205, "Գ"], [285, 195, "Դ"]].map(([x, y, ch], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 20} y={y as number} width="40" height="55" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
          <text x={x as number} y={(y as number) + 38} textAnchor="middle" fontSize="28" fontWeight="700" fill="#F5F0E6">
            {ch}
          </text>
        </g>
      ))}
    </g>
  );
};

const DudukInstrumentoMilenario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="205" cy="150" r="26" fill={skin} />
      <path d="M205 176 Q195 195 200 235" stroke={accentColor} strokeWidth="18" strokeLinecap="round" fill="none" />
      <path d="M188 205 Q205 200 222 205" stroke={dark} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M188 218 Q205 213 222 218" stroke={dark} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M180 175 Q205 180 205 176" stroke={skin} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M150 130 Q160 120 175 130" fill="none" stroke={dark} strokeWidth="2" opacity="0.7" />
      <path d="M260 130 Q250 120 235 130" fill="none" stroke={dark} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const VinoAreniCuevaMasAntigua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 Q95 150 150 100 L260 100 Q315 150 310 250 Z" fill="#5C4A3A" opacity="0.85" />
      <ellipse cx="205" cy="215" rx="45" ry="20" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 200 L170 160 Q170 150 180 150 L230 150 Q240 150 240 160 L240 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[150, 130], [175, 120], [200, 128], [225, 118]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="9" fill="#6B2C39" stroke={dark} strokeWidth="1.5" opacity={0.9 - i * 0.05} />
      ))}
    </g>
  );
};

const AjedrezAsignaturaObligatoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="150" width="130" height="130" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {Array.from({ length: 4 }).flatMap((_, row) =>
        Array.from({ length: 4 }).map((_, col) =>
          (row + col) % 2 === 0 ? (
            <rect key={`${row}-${col}`} x={140 + col * 32.5} y={150 + row * 32.5} width="32.5" height="32.5" fill={accentColor} />
          ) : null
        )
      )}
      <path d="M195 210 L195 235 L185 245 L225 245 L215 235 L215 210 Z" fill={dark} />
      <circle cx="205" cy="200" r="10" fill={dark} />
    </g>
  );
};

const KhachkarsPiedrasCruz: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M160 250 L160 110 Q160 95 205 95 Q250 95 250 110 L250 250 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      <rect x="190" y="115" width="30" height="80" fill={accentColor} opacity="0.8" />
      <rect x="170" y="140" width="70" height="20" fill={accentColor} opacity="0.8" />
      <circle cx="205" cy="105" r="14" fill="none" stroke={dark} strokeWidth="3" />
      {[[175, 210], [235, 210], [175, 230], [235, 230]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={dark} opacity="0.6" />
      ))}
    </g>
  );
};

const LavashPanPatrimonioUnesco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 250 Q205 90 300 250 Z" fill="#8B5A2B" opacity="0.85" />
      <path d="M140 240 Q205 130 270 240 Z" fill="#1A1A1A" opacity="0.5" />
      <path d="M160 220 Q205 150 250 220 Q230 200 205 195 Q180 200 160 220 Z" fill={accentColor} stroke={dark} strokeWidth="2" opacity="0.95" />
    </g>
  );
};

const AlasDeTatevTelefico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 240 Q150 180 200 240 Q250 300 310 200" fill="none" stroke="#8B7355" strokeWidth="4" opacity="0.5" />
      <line x1="120" y1="100" x2="300" y2="150" stroke={dark} strokeWidth="3" />
      <rect x="195" y="130" width="30" height="22" rx="3" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="120" x2="205" y2="130" stroke={dark} strokeWidth="2" />
      <line x1="218" y1="122" x2="218" y2="130" stroke={dark} strokeWidth="2" />
      <path d="M270 130 L320 145 L320 175 L280 175 Q270 155 270 130 Z" fill="#5C4A3A" stroke={dark} strokeWidth="2.5" />
      <path d="M285 175 L285 190 L300 190 L300 175" stroke={dark} strokeWidth="2" fill="none" />
    </g>
  );
};

const Tsitsernakaberd1915: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[130, 240, -12], [165, 235, -6], [245, 235, 6], [280, 240, 12]].map(([x, y, deg], i) => (
        <rect key={x as number} x={(x as number) - 10} y="150" width="20" height={y as number} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" transform={`rotate(${deg} ${x} 240)`} />
      ))}
      <path d="M195 235 Q205 190 200 150 Q210 190 215 235 Z" fill="#F4A300" />
      <ellipse cx="205" cy="230" rx="14" ry="8" fill="#F9C74F" opacity="0.8" />
    </g>
  );
};

export const armeniaIllustrations: Record<string, IllustrationDefinition> = {
  "yerevan-mas-antigua-que-roma": { component: YerevanMasAntiguaQueRoma },
  "primer-pais-cristiano-301": { component: PrimerPaisCristiano301 },
  "alfabeto-armenio-mesrop-mashtots": { component: AlfabetoArmenioMesropMashtots },
  "duduk-instrumento-milenario": { component: DudukInstrumentoMilenario },
  "vino-areni-cueva-mas-antigua": { component: VinoAreniCuevaMasAntigua },
  "ajedrez-asignatura-obligatoria": { component: AjedrezAsignaturaObligatoria },
  "khachkars-piedras-cruz": { component: KhachkarsPiedrasCruz },
  "lavash-pan-patrimonio-unesco": { component: LavashPanPatrimonioUnesco },
  "alas-de-tatev-telefico": { component: AlasDeTatevTelefico },
  "tsitsernakaberd-memorial-1915": { component: Tsitsernakaberd1915 },
};
