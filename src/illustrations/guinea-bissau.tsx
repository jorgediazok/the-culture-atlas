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

const ElArchipielagoDondeLosHipopotamosNadanEnElMar: IllustrationComponent = () => (
  <g>
    <rect x="90" y="90" width="230" height="160" fill="#1B7A9C" opacity="0.35" />
    <path d="M235 220 Q250 200 275 210 Q290 205 285 225 Q290 245 265 245 Q240 245 235 220 Z" fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2.6" />
    {[[248, 200], [268, 195]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 10} ${y - 14} ${x + 18} ${y - 4}`} fill="none" stroke="#3A7A45" strokeWidth="5" strokeLinecap="round" />
    ))}
    <ellipse cx="150" cy="205" rx="42" ry="24" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2.6" />
    <ellipse cx="182" cy="196" rx="12" ry="10" fill="#4A5A5C" stroke="#2A3A3A" strokeWidth="2.2" />
    <circle cx="176" cy="192" r="2.6" fill="#0A0805" />
    <circle cx="188" cy="190" r="2.6" fill="#0A0805" />
    <path d="M120 220 Q140 214 150 222" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
  </g>
);

const LasIslasDondeLasMujeresEligenASusEsposos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="230" y="180" width="55" height="60" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <path d="M225 180 Q257 160 290 180" fill="none" stroke={dark} strokeWidth="2.6" />
      {person(160, 235, 1, dark, accentColor)}
      {person(220, 240, 0.95, dark, "#D9A227")}
      <ellipse cx="190" cy="215" rx="16" ry="10" fill="#D9A227" stroke={dark} strokeWidth="2" />
      <path d="M175 220 Q190 210 205 218" fill="none" stroke="#B8860B" strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const LasMascarasQueTomanLasCallesAntesDeCuaresma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(200, 245, 1.05, dark, accentColor)}
      <ellipse cx="200" cy="185" rx="26" ry="20" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <path d="M180 170 Q170 150 178 138 Q188 148 186 168" fill="#5C3A21" stroke={dark} strokeWidth="2.2" />
      <path d="M220 170 Q230 150 222 138 Q212 148 214 168" fill="#5C3A21" stroke={dark} strokeWidth="2.2" />
      <circle cx="190" cy="185" r="3" fill="#1B1B1B" />
      <circle cx="210" cy="185" r="3" fill="#1B1B1B" />
      {[[130, 150], [270, 160], [150, 200], [260, 210]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={i % 2 === 0 ? "#D9A227" : "#1B7A9C"} opacity="0.85" />
      ))}
    </g>
  );
};

const LaFrutaQueSostieneLaEconomiaDeTodoUnPais: IllustrationComponent = () => (
  <g>
    <path d="M197 95 L197 200" stroke="#3A5F3A" strokeWidth="5" />
    <path d="M195 130 Q170 150 178 190 Q195 210 200 195 Q210 165 195 130 Z" fill="#D9A227" stroke="#B8860B" strokeWidth="2.8" />
    <path d="M188 175 Q195 205 210 210 Q225 208 222 195 Q210 178 188 175 Z" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="2.6" />
    <path d="M140 100 Q150 85 170 92" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.8" />
    <ellipse cx="260" cy="230" rx="45" ry="14" fill="#8B5A2B" opacity="0.4" />
  </g>
);

const LaFortalezaQueVigiloSiglosDeComercioCostero: IllustrationComponent = () => (
  <g>
    <rect x="90" y="200" width="230" height="50" fill="#1B7A9C" opacity="0.4" />
    <rect x="130" y="160" width="140" height="60" fill="#8B7355" stroke="#5C3A21" strokeWidth="2.8" />
    {[130, 165, 200, 235, 260].map((x, i) => (
      <rect key={i} x={x} y="148" width="14" height="16" fill="#8B7355" stroke="#5C3A21" strokeWidth="2" />
    ))}
    <rect x="150" y="230" width="16" height="20" fill="#3A2A1E" />
    <rect x="230" y="190" width="24" height="7" fill="#3A2A1E" transform="rotate(-8 242 193)" />
    <circle cx="256" cy="196" r="4" fill="#1B1B1B" />
  </g>
);

const LasSemanasQueMarcanElPasoALaEdadAdulta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(150, 240, 0.85, dark, accentColor)}
      {person(200, 245, 0.9, dark, "#D9A227")}
      {person(250, 240, 0.85, dark, tint(accentColor, 0.25))}
      {[[150, 205], [200, 208], [250, 205]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x - 8} ${y} L${x} ${y - 14} L${x + 8} ${y}`} fill="none" stroke="#C1440E" strokeWidth="2.4" />
          <path d={`M${x - 6} ${y + 8} L${x + 6} ${y + 8}`} stroke="#D9A227" strokeWidth="2.4" />
        </g>
      ))}
      <path d="M110 250 Q205 240 320 250" fill="none" stroke="#3A5F3A" strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const ElRitmoQueNacioEnLasCallesDeBisau: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(150, 235, 0.85, dark, accentColor)}
      <ellipse cx="178" cy="210" rx="20" ry="26" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      {person(220, 240, 0.85, dark, tint(accentColor, 0.2))}
      <rect x="235" y="185" width="6" height="45" fill="#5C3A21" transform="rotate(-12 238 208)" />
      <ellipse cx="240" cy="185" rx="10" ry="6" fill="#D9A227" transform="rotate(-12 240 185)" />
      {person(280, 238, 0.8, dark, "#D9A227")}
      <path d="M260 205 Q272 195 284 205" fill="none" stroke="#B8860B" strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const LaLenguaQueUneAUnPaisDeMuchasLenguas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(160, 240, 0.85, dark, accentColor)}
      {person(230, 238, 0.85, dark, tint(accentColor, 0.25))}
      <path d="M182 200 Q200 190 210 205" fill="none" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="200" cy="195" rx="16" ry="10" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      {[[190, 180, "#D9A227"], [220, 178, "#C1440E"], [255, 185, "#3A7A45"]].map(([x, y, c], i) => (
        <rect key={i} x={Number(x)} y={Number(y)} width="20" height="14" fill={c as string} stroke={dark} strokeWidth="1.4" />
      ))}
    </g>
  );
};

const ElGuisoDeManiQueEspesaCadaAlmuerzo: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="90" ry="24" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="190" cy="205" rx="60" ry="17" fill="#C97C3D" opacity="0.9" />
    {[[165, 200], [200, 206], [225, 198]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="12" ry="9" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="1.8" />
    ))}
    <g transform="translate(255 208)">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={i * 6 - 15} y="-8" width="4" height="20" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="1" />
      ))}
    </g>
  </g>
);

const ElPensadorQueImaginoLaLiberacionDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(200, 245, 1.1, dark, accentColor)}
      <path d="M185 195 Q200 185 215 195 Q216 205 200 203 Q184 205 185 195 Z" fill="#1B1B1B" />
      <rect x="188" y="205" width="7" height="4" fill="#F5F0E6" stroke={dark} strokeWidth="0.8" />
      <rect x="205" y="205" width="7" height="4" fill="#F5F0E6" stroke={dark} strokeWidth="0.8" />
      <rect x="170" y="225" width="26" height="20" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2" transform="rotate(-8 183 235)" />
      {person(140, 240, 0.7, dark, tint(accentColor, 0.3))}
      {person(260, 242, 0.7, dark, "#D9A227")}
    </g>
  );
};

const BolamaCiudadFantasma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const vine = "#3A7A45";
  return (
    <g>
      <rect x="130" y="150" width="140" height="90" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <polygon points="120,150 200,110 280,150" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2.4" />
      {[150, 190, 230].map((x) => (
        <rect key={x} x={x} y="170" width="14" height="70" fill={shade(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M270 240 L275 200 L265 150" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      <path d="M140 240 Q130 200 145 160 Q150 190 138 220 Q148 210 150 195" fill="none" stroke={vine} strokeWidth="5" strokeLinecap="round" />
      {[[145, 180], [135, 205], [148, 225]].map(([x, y], i) => (
        <ellipse key={i} cx={x as number} cy={y as number} rx="8" ry="5" fill={vine} opacity="0.8" transform={`rotate(${i * 30} ${x} ${y})`} />
      ))}
      <path d="M255 150 Q260 120 245 105 Q265 100 270 120 Q275 140 255 150 Z" fill={shade(accentColor, 0.1)} opacity="0.6" />
    </g>
  );
};

const VinhoDeCaju: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const fruit = "#F4C430";
  return (
    <g>
      <path d="M175 240 L170 170 Q170 155 190 152 Q210 155 210 170 L205 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M210 180 Q235 185 232 205 Q230 220 210 215" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="190" cy="152" rx="20" ry="8" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      {[[250, 210], [280, 225], [260, 235]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x} ${y} Q${(x as number) - 10} ${(y as number) - 18} ${x} ${(y as number) - 30} Q${(x as number) + 10} ${(y as number) - 18} ${x} ${y} Z`} fill={fruit} stroke={shade(fruit, 0.3)} strokeWidth="2" opacity={0.9 - i * 0.1} />
          <path d={`M${x} ${(y as number) - 28} Q${(x as number) + 10} ${(y as number) - 34} ${(x as number) + 14} ${(y as number) - 24} Q${(x as number) + 8} ${(y as number) - 18} ${x} ${(y as number) - 28} Z`} fill="#8B5A2B" stroke={shade("#8B5A2B", 0.3)} strokeWidth="1.6" />
        </g>
      ))}
    </g>
  );
};

export const guineaBissauIllustrations: Record<string, IllustrationDefinition> = {
  "el-archipielago-donde-los-hipopotamos-nadan-en-el-mar": { component: ElArchipielagoDondeLosHipopotamosNadanEnElMar },
  "las-islas-donde-las-mujeres-eligen-a-sus-esposos": { component: LasIslasDondeLasMujeresEligenASusEsposos },
  "las-mascaras-que-toman-las-calles-antes-de-cuaresma": { component: LasMascarasQueTomanLasCallesAntesDeCuaresma },
  "la-fruta-que-sostiene-la-economia-de-todo-un-pais": { component: LaFrutaQueSostieneLaEconomiaDeTodoUnPais },
  "la-fortaleza-que-vigilo-siglos-de-comercio-costero": { component: LaFortalezaQueVigiloSiglosDeComercioCostero },
  "las-semanas-que-marcan-el-paso-a-la-edad-adulta": { component: LasSemanasQueMarcanElPasoALaEdadAdulta },
  "el-ritmo-que-nacio-en-las-calles-de-bisau": { component: ElRitmoQueNacioEnLasCallesDeBisau },
  "la-lengua-que-une-a-un-pais-de-muchas-lenguas": { component: LaLenguaQueUneAUnPaisDeMuchasLenguas },
  "el-guiso-de-mani-que-espesa-cada-almuerzo": { component: ElGuisoDeManiQueEspesaCadaAlmuerzo },
  "el-pensador-que-imagino-la-liberacion-de-africa": { component: ElPensadorQueImaginoLaLiberacionDeAfrica },
  "bolama-ciudad-fantasma": { component: BolamaCiudadFantasma },
  "vinho-de-caju": { component: VinhoDeCaju },
};
