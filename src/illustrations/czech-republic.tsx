import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RelojAstronomicoQueSigueFuncionando: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="120" width="35" height="130" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      <rect x="285" y="120" width="35" height="130" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="160" r="88" fill="#F5F0E6" stroke={dark} strokeWidth="4" />
      <circle cx="205" cy="160" r="62" fill="none" stroke={accentColor} strokeWidth="3" />
      <line x1="205" y1="160" x2="205" y2="105" stroke={dark} strokeWidth="4" />
      <line x1="205" y1="160" x2="248" y2="178" stroke={dark} strokeWidth="3.5" />
      <circle cx="205" cy="160" r="7" fill={dark} />
      <rect x="175" y="248" width="60" height="16" fill={dark} opacity="0.6" />
    </g>
  );
};

const PilsnerLaCervezaQueLeDioNombreAUnEstilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 130 L230 130 L220 250 L160 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M158 150 Q190 138 222 150 Q214 165 190 162 Q166 165 158 150 Z" fill="#F5F0E6" />
      <path d="M230 155 Q262 155 262 185 Q262 208 230 202" fill="none" stroke={dark} strokeWidth="5" />
      <rect x="255" y="200" width="55" height="50" fill="#8B5A2B" opacity="0.8" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="282" cy="200" rx="27" ry="8" fill="#5C4A3A" />
    </g>
  );
};

const PragaLaCiudadDeLasCienTorres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M85 250 Q205 238 325 250 L325 258 L85 258 Z" fill="#3D8FB0" opacity="0.5" />
      {[[110, 220, 55], [155, 185, 80], [205, 200, 65], [255, 180, 85], [300, 210, 60]].map(([x, y, h], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 18} y={y as number} width="34" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
          <polygon points={`${(x as number) - 18},${y} ${x},${(y as number) - 26} ${(x as number) + 16},${y}`} fill={dark} />
        </g>
      ))}
    </g>
  );
};

const RevolucionDeTerciopeloSinDerramarSangre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="130" rx="24" ry="18" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="130" r="8" fill="none" stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="148" x2="205" y2="220" stroke={dark} strokeWidth="5" />
      {[120, 290].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="160" rx="22" ry="17" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
          <circle cx={x} cy="160" r="6" fill="none" stroke={dark} strokeWidth="2" />
          <line x1={x} y1="177" x2={x} y2="235" stroke={dark} strokeWidth="4.5" />
        </g>
      ))}
    </g>
  );
};

const ElOrigenChecoDeLaPalabraRobot: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="155" y="150" width="100" height="100" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      <rect x="170" y="115" width="70" height="40" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="3" />
      <circle cx="190" cy="133" r="7" fill={dark} />
      <circle cx="220" cy="133" r="7" fill={dark} />
      <rect x="178" y="185" width="54" height="14" fill={dark} opacity="0.5" />
      <line x1="155" y1="185" x2="115" y2="225" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <line x1="255" y1="185" x2="295" y2="225" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <circle cx="205" cy="97" r="8" fill={dark} />
    </g>
  );
};

const ElArsenalDeVidrioDeBohemia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 120 L235 120 L226 200 Q242 214 234 236 Q205 252 176 236 Q168 214 184 200 Z" fill={accentColor} opacity="0.8" stroke={dark} strokeWidth="3" />
      <line x1="180" y1="140" x2="230" y2="140" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
      <line x1="185" y1="165" x2="225" y2="165" stroke="#F5F0E6" strokeWidth="2" opacity="0.6" />
      <path d="M110 245 L300 245" stroke={dark} strokeWidth="4" />
      <ellipse cx="130" cy="230" rx="26" ry="15" fill={tint(accentColor, 0.3)} opacity="0.7" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="285" cy="228" rx="24" ry="14" fill={tint(accentColor, 0.15)} opacity="0.7" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const KafkaElEscritorQueNuncaVioSuObraPublicada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="205" width="205" height="16" fill="#8B5A2B" />
      <rect x="150" y="130" width="55" height="75" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <line x1="160" y1="145" x2="195" y2="145" stroke={dark} strokeWidth="2" opacity="0.4" />
      <line x1="160" y1="160" x2="195" y2="160" stroke={dark} strokeWidth="2" opacity="0.4" />
      <line x1="160" y1="175" x2="195" y2="175" stroke={dark} strokeWidth="2" opacity="0.4" />
      <ellipse cx="270" cy="195" rx="26" ry="12" fill="#1A1A1A" />
      <line x1="250" y1="188" x2="240" y2="180" stroke="#1A1A1A" strokeWidth="3" />
      <line x1="250" y1="200" x2="240" y2="208" stroke="#1A1A1A" strokeWidth="3" />
      <rect x="215" y="160" width="10" height="45" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const ElPaisQueMasCervezaTomaPorPersona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 140 L175 140 L167 245 L138 245 Z" fill={accentColor} stroke={dark} strokeWidth="3" transform="rotate(-10 152 192)" />
      <path d="M235 132 L280 132 L272 240 L243 240 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" transform="rotate(10 258 186)" />
      <path d="M135 155 Q142 140 158 145" fill="#F5F0E6" opacity="0.9" />
      <path d="M240 148 Q247 132 263 137" fill="#F5F0E6" opacity="0.9" />
      <path d="M100 250 Q205 260 310 250" fill="none" stroke={dark} strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const KrtekElTopoQueConquistoMedioMundo: IllustrationComponent = () => (
  <g>
    <ellipse cx="205" cy="195" rx="82" ry="60" fill="#1A1A1A" />
    <path d="M160 155 Q142 118 172 100 Q192 118 182 150 Z" fill="#1A1A1A" />
    <circle cx="182" cy="175" r="9" fill="#F5F0E6" />
    <circle cx="228" cy="175" r="9" fill="#F5F0E6" />
    <ellipse cx="205" cy="200" rx="14" ry="8" fill="#C68642" />
    <path d="M182 220 Q205 232 228 220" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
  </g>
);

const KarlovyVaryElBalnearioDeLasAguasTermales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="95" y="195" width="220" height="20" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[125, 175, 235, 285].map((x) => (
        <rect key={x} x={x - 9} y="130" width="18" height="65" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      ))}
      <path d="M205 110 Q195 88 210 62 Q222 88 208 110 Z" fill="#3D8FB0" opacity="0.7" />
      <path d="M100 245 Q205 258 310 245" fill="none" stroke={dark} strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const AlphonseMuchaElPadreDelArtNouveau: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#E8C9A0";
  return (
    <g>
      {/* ornamental halo frame */}
      <circle cx="205" cy="150" r="65" fill="none" stroke={accentColor} strokeWidth="6" opacity="0.6" />
      <circle cx="205" cy="150" r="80" fill="none" stroke={tint(accentColor, 0.3)} strokeWidth="3" opacity="0.5" />
      {/* elongated female figure */}
      <circle cx="205" cy="130" r="20" fill={skin} />
      <path d="M188 148 Q205 138 222 148 L214 245 L196 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* flowing hair */}
      <path d="M188 135 Q160 150 165 190 Q175 170 190 155" fill={dark} opacity="0.7" />
      <path d="M222 135 Q250 150 245 190 Q235 170 220 155" fill={dark} opacity="0.7" />
      {/* floral border accents */}
      <circle cx="130" cy="220" r="10" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="1.5" />
      <circle cx="280" cy="220" r="10" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const GregorMendelElMonjeQueFundoLaGenetica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {/* monk in a robe */}
      <circle cx="160" cy="140" r="17" fill={skin} />
      <path d="M143 160 Q160 150 179 160 L172 240 L148 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* rows of pea plants */}
      {[220, 250, 280].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="240" x2={x} y2="190" stroke="#2E7D32" strokeWidth="3" />
          <circle cx={x} cy="185" r="8" fill={i % 2 === 0 ? "#F5F0E6" : tint(accentColor, 0.4)} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const LaTradicionChecaDeLosTiteresDeMadera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {/* control bar and strings */}
      <line x1="150" y1="90" x2="260" y2="90" stroke={dark} strokeWidth="4" />
      <line x1="170" y1="90" x2="185" y2="130" stroke={dark} strokeWidth="1.5" />
      <line x1="240" y1="90" x2="225" y2="130" stroke={dark} strokeWidth="1.5" />
      <line x1="205" y1="90" x2="205" y2="150" stroke={dark} strokeWidth="1.5" />
      {/* puppet head with pointed cap */}
      <circle cx="205" cy="150" r="18" fill={skin} />
      <polygon points="188,140 205,105 222,140" fill="#C1272D" stroke={dark} strokeWidth="2" />
      {/* puppet body */}
      <path d="M185 168 Q205 158 225 168 L218 235 L192 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* dangling arms and legs */}
      <line x1="185" y1="130" x2="170" y2="185" stroke={dark} strokeWidth="3" />
      <line x1="225" y1="130" x2="240" y2="185" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElOroDeHockeyEnNagano1998: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <rect x="90" y="225" width="230" height="12" fill="#B0D8E8" opacity="0.7" />
      {/* player */}
      <circle cx="180" cy="145" r="17" fill={skin} />
      <path d="M162 165 Q180 155 200 165 L192 225 L170 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* raised arm holding the medal */}
      <line x1="196" y1="170" x2="235" y2="120" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <circle cx="240" cy="112" r="18" fill="#D4AF37" stroke={dark} strokeWidth="2.5" />
      <circle cx="240" cy="112" r="10" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      {/* hockey stick */}
      <line x1="165" y1="180" x2="150" y2="228" stroke="#6B4C3A" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const ElBuenSoldadoSvejkLaSatiraNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="205" cy="140" r="20" fill={skin} />
      {/* round cap */}
      <path d="M186 128 Q205 108 224 128 Q205 122 186 128 Z" fill={dark} />
      {/* uniform */}
      <path d="M182 162 Q205 150 228 162 L220 240 L190 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* buttons */}
      {[175, 195, 215].map((y) => (
        <circle key={y} cx="205" cy={y} r="3.5" fill={dark} opacity="0.7" />
      ))}
      {/* content, oblivious smile */}
      <path d="M195 145 Q205 152 215 145" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
};

export const czechRepublicIllustrations: Record<string, IllustrationDefinition> = {
  "reloj-astronomico-que-sigue-funcionando": { component: RelojAstronomicoQueSigueFuncionando },
  "pilsner-la-cerveza-que-le-dio-nombre-a-un-estilo": { component: PilsnerLaCervezaQueLeDioNombreAUnEstilo },
  "praga-la-ciudad-de-las-cien-torres": { component: PragaLaCiudadDeLasCienTorres },
  "revolucion-de-terciopelo-sin-derramar-sangre": { component: RevolucionDeTerciopeloSinDerramarSangre },
  "el-origen-checo-de-la-palabra-robot": { component: ElOrigenChecoDeLaPalabraRobot },
  "el-arsenal-de-vidrio-de-bohemia": { component: ElArsenalDeVidrioDeBohemia },
  "kafka-el-escritor-que-nunca-vio-su-obra-publicada": { component: KafkaElEscritorQueNuncaVioSuObraPublicada },
  "el-pais-que-mas-cerveza-toma-por-persona": { component: ElPaisQueMasCervezaTomaPorPersona },
  "krtek-el-topo-que-conquisto-medio-mundo": { component: KrtekElTopoQueConquistoMedioMundo },
  "karlovy-vary-el-balneario-de-las-aguas-termales": { component: KarlovyVaryElBalnearioDeLasAguasTermales },
  "alphonse-mucha-el-padre-del-art-nouveau": { component: AlphonseMuchaElPadreDelArtNouveau },
  "gregor-mendel-el-monje-que-fundo-la-genetica": { component: GregorMendelElMonjeQueFundoLaGenetica },
  "la-tradicion-checa-de-los-titeres-de-madera": { component: LaTradicionChecaDeLosTiteresDeMadera },
  "el-oro-de-hockey-en-nagano-1998": { component: ElOroDeHockeyEnNagano1998 },
  "el-buen-soldado-svejk-la-satira-nacional": { component: ElBuenSoldadoSvejkLaSatiraNacional },
};
