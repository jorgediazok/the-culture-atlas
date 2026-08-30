import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

function longhornCow(x: number, y: number, scale: number, dark: string, body = "#F5F0E6") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-30 10 Q-32 -14 -18 -18 Q-8 -24 0 -18 Q10 -24 20 -16 Q32 -12 30 10 Z" fill={body} stroke={dark} strokeWidth="2.4" />
      <circle cx="24" cy="-20" r="9" fill={body} stroke={dark} strokeWidth="2" />
      <path d="M18 -26 Q6 -36 -2 -30 M30 -26 Q42 -36 50 -30" stroke={dark} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M-30 8 L-33 32 M-14 10 L-16 32 M8 10 L8 32 M24 8 L26 32" stroke={dark} strokeWidth="4.5" strokeLinecap="round" />
    </g>
  );
}

const ElPaisMasJovenDeTodoElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(150, 240, 0.9, dark, accentColor)}
      {person(200, 235, 1, dark, "#D9A227")}
      {person(250, 240, 0.9, dark, tint(accentColor, 0.25))}
      <rect x="185" y="150" width="30" height="45" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <rect x="185" y="150" width="30" height="15" fill="#1B1B1B" />
      <rect x="185" y="180" width="30" height="15" fill="#D9A227" />
      <path d="M200 150 L200 130" stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const ElGranPantanoQueDetuvoALosExploradores: IllustrationComponent = () => (
  <g>
    <rect x="90" y="140" width="230" height="110" fill="#1B7A9C" opacity="0.3" />
    {[[110, 200], [150, 190], [190, 205], [230, 192], [270, 200], [300, 195]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 15} ${y - 30} ${x + 5} ${y - 55} Q${x - 5} ${y - 30} ${x} ${y}`} fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.6" />
    ))}
    <path d="M160 230 L220 230 L208 215 L172 215 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
  </g>
);

const ElGanadoQueValeMasQueCualquierOtraCosa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {longhornCow(200, 210, 1.3, dark)}
      {person(160, 245, 0.8, dark, accentColor)}
      <path d="M172 235 Q180 220 190 218" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const LosPastoresQueSeCubrenDeCenizaDeEstiercol: IllustrationComponent = () => (
  <g>
    {longhornCow(230, 205, 1.1, "#6B6458", "#D9D2C0")}
    {person(150, 240, 0.9, "#6B6458", "#D9D2C0", "#B0AFA8")}
    <ellipse cx="130" cy="205" rx="18" ry="10" fill="#3A2A1E" opacity="0.8" />
    <path d="M120 200 Q130 185 140 200" fill="none" stroke="#8C7B6B" strokeWidth="3" opacity="0.7" />
    <path d="M135 195 Q145 180 150 190" fill="none" stroke="#C9C2B0" strokeWidth="2" opacity="0.6" />
  </g>
);

const LaMigracionSalvajeQueCasiNadieConoce: IllustrationComponent = () => (
  <g>
    <rect x="90" y="150" width="230" height="100" fill="#D9C08A" opacity="0.3" />
    {/* a smaller, further-back row for a sense of a much larger herd */}
    {[[120, 175], [160, 168], [200, 178], [240, 168], [280, 176]].map(([x, y], i) => (
      <g key={`back${i}`} transform={`translate(${x} ${y}) scale(0.5)`} opacity="0.6">
        <path d="M-20 10 Q-22 -6 -10 -10 Q0 -16 10 -10 Q20 -6 18 10 Z" fill="#B5651D" stroke="#7A4010" strokeWidth="2" />
        <path d="M8 -12 Q14 -22 20 -18" stroke="#7A4010" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M-20 8 L-22 22 M0 10 L0 22 M16 8 L18 22" stroke="#7A4010" strokeWidth="3" strokeLinecap="round" />
      </g>
    ))}
    {[[110, 215], [145, 205], [180, 220], [215, 200], [250, 218], [285, 208]].map(([x, y], i) => (
      <g key={i} transform={`translate(${x} ${y}) scale(0.9)`}>
        <path d="M-20 10 Q-22 -6 -10 -10 Q0 -16 10 -10 Q20 -6 18 10 Z" fill="#B5651D" stroke="#7A4010" strokeWidth="2" />
        <path d="M8 -12 Q14 -22 20 -18" stroke="#7A4010" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M-20 8 L-22 22 M0 10 L0 22 M16 8 L18 22" stroke="#7A4010" strokeWidth="3" strokeLinecap="round" />
      </g>
    ))}
  </g>
);

const LaLuchaQueEnfrentaACampamentosEnteros: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="240" rx="110" ry="14" fill="#D9C08A" opacity="0.5" />
    <g transform="translate(175 215)">
      <circle cx="0" cy="-30" r="11" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.8" />
      <path d="M-14 -20 Q0 -26 14 -20 L16 20 Q0 28 -16 20 Z" fill="#8B1A1A" stroke="#5C1010" strokeWidth="2.2" />
      <path d="M14 -16 Q30 -8 26 10" fill="none" stroke="#8B1A1A" strokeWidth="8" strokeLinecap="round" />
    </g>
    <g transform="translate(225 217)">
      <circle cx="0" cy="-30" r="11" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.8" />
      <path d="M-14 -20 Q0 -26 14 -20 L16 20 Q0 28 -16 20 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.2" />
      <path d="M-14 -16 Q-30 -8 -26 10" fill="none" stroke="#D9A227" strokeWidth="8" strokeLinecap="round" />
    </g>
    {[[130, 235], [270, 235]].map(([x, y], i) => (
      person(x, y, 0.65, "#3A2A1E", i % 2 === 0 ? "#3A7A45" : "#E8558A")
    ))}
  </g>
);

const LasPiraguasTalladasQueNaveganElNilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="190" width="230" height="60" fill="#1B7A9C" opacity="0.5" />
      <path d="M150 225 L270 225 L250 205 L170 205 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      {person(200, 198, 0.95, dark, accentColor)}
      <path d="M215 175 L235 155" stroke="#3A2A1E" strokeWidth="3" />
      <polygon points="232,150 244,158 232,162" fill="#8C7B6B" stroke="#3A2A1E" strokeWidth="1.6" />
    </g>
  );
};

const LosCorsesDeCuentasQueCuentanLaEdadDeUnaMujer: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(200, 240, 1.15, dark, "#3A2A1E")}
      <path d="M182 165 Q200 158 218 165 L216 205 Q200 212 184 205 Z" fill="none" stroke={dark} strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={187 + col * 6.5}
            cy={168 + row * 7}
            r="2.6"
            fill={[accentColor, "#D9A227", "#E8558A", "#3A7A45"][(row + col) % 4]}
          />
        ))
      )}
    </g>
  );
};

const LaCapitalMasJovenDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="210" width="230" height="40" fill="#1B7A9C" opacity="0.5" />
      {[[120, 170, 40], [160, 155, 55], [210, 165, 45], [260, 150, 60], [295, 170, 40]].map(([x, y, h], i) => (
        <rect key={i} x={x} y={y} width="26" height={h} fill={i % 2 === 0 ? tint(accentColor, 0.2) : "#F5F0E6"} stroke={dark} strokeWidth="1.8" />
      ))}
      <path d="M90 235 Q205 225 320 235" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
      <polygon points="175,225 240,225 225,210 190,210" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaPastaDeSorgoQueAcompanaCadaComida: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="90" ry="24" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="185" cy="195" rx="32" ry="26" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.4" />
    <ellipse cx="245" cy="205" rx="22" ry="15" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.8" />
    {[[235, 200], [250, 210], [260, 198]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x + 6} ${y - 8}`} stroke="#1B4B1E" strokeWidth="2" strokeLinecap="round" />
    ))}
  </g>
);

const GaarEscarificacionNuerDinka: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="180" rx="48" ry="60" fill="#3A2A1E" stroke="#1B140E" strokeWidth="2.8" />
    <path d="M170 150 L185 145 M185 148 L200 143 M200 143 L215 148 M215 145 L230 150" stroke="#D9C2B0" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="182" cy="190" r="4" fill="#1A1210" />
    <circle cx="218" cy="190" r="4" fill="#1A1210" />
    <path d="M188 215 Q200 222 212 215" stroke="#1A1210" strokeWidth="3" fill="none" />
    <rect x="170" y="235" width="60" height="15" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="1.8" />
  </g>
);

const BasquetbolSursudanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  return (
    <g>
      <rect x="255" y="95" width="45" height="35" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <rect x="265" y="128" width="25" height="4" fill={dark} />
      <path d="M265 132 Q277 145 289 132" stroke="#C1440E" strokeWidth="2.4" fill="none" />
      <path d="M180 245 L185 190 Q188 175 200 172" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="203" cy="160" r="13" fill={skin} />
      <path d="M195 172 Q210 168 220 155 L228 130" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="232" cy="122" r="12" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M222 122 L242 122 M232 112 L232 132" stroke={dark} strokeWidth="1.2" opacity="0.6" />
      <path d="M200 172 L192 245" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M180 245 L165 250 M192 245 L207 250" stroke={skin} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

export const southSudanIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-mas-joven-de-todo-el-mundo": { component: ElPaisMasJovenDeTodoElMundo },
  "el-gran-pantano-que-detuvo-a-los-exploradores": { component: ElGranPantanoQueDetuvoALosExploradores },
  "el-ganado-que-vale-mas-que-cualquier-otra-cosa": { component: ElGanadoQueValeMasQueCualquierOtraCosa },
  "los-pastores-que-se-cubren-de-ceniza-de-estiercol": { component: LosPastoresQueSeCubrenDeCenizaDeEstiercol },
  "la-migracion-salvaje-que-nadie-conoce": { component: LaMigracionSalvajeQueCasiNadieConoce },
  "la-lucha-que-enfrenta-a-campamentos-enteros": { component: LaLuchaQueEnfrentaACampamentosEnteros },
  "las-piraguas-talladas-que-navegan-el-nilo": { component: LasPiraguasTalladasQueNaveganElNilo },
  "los-corsets-de-cuentas-que-cuentan-la-edad-de-una-mujer": { component: LosCorsesDeCuentasQueCuentanLaEdadDeUnaMujer },
  "la-capital-mas-joven-del-mundo": { component: LaCapitalMasJovenDelMundo },
  "la-pasta-de-sorgo-que-acompana-cada-comida": { component: LaPastaDeSorgoQueAcompanaCadaComida },
  "gaar-escarificacion-nuer-dinka": { component: GaarEscarificacionNuerDinka },
  "basquetbol-sursudanes": { component: BasquetbolSursudanes },
};
