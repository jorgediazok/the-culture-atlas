import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnicoPaisAnglohablante: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M110 105 Q110 85 133 85 L280 85 Q303 85 303 105 L303 165 Q303 185 280 185 L220 185 L195 210 L202 185 L133 185 Q110 185 110 165 Z" fill={accentColor} />
      <text x="205" y="150" fontSize="60" fontWeight="700" fill={light} textAnchor="middle" fontFamily="serif">EN</text>
    </g>
  );
};

const ArrecifeHoyoAzul: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const turquoise = "#4FBFB0";
  return (
    <g>
      {/* turquoise coral ring */}
      <circle cx="205" cy="165" r="95" fill={turquoise} opacity="0.5" />
      {[[150, 130], [255, 135], [270, 200], [155, 210], [230, 230]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="14" fill={turquoise} opacity="0.8" />
      ))}
      {/* the near-perfect dark blue circle of the Great Blue Hole */}
      <circle cx="205" cy="165" r="65" fill={accentColor} stroke={dark} strokeWidth="4" />
      <circle cx="205" cy="165" r="65" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.25" />
    </g>
  );
};

const CulturaGarifuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#E8C87A";
  const green = "#4A8F4E";
  return (
    <g>
      {/* beach with palm */}
      <path d="M95 235 Q210 220 320 235 L320 250 L95 250 Z" fill={sand} />
      <path d="M270 235 Q265 195 278 160" fill="none" stroke="#8B5A2B" strokeWidth="8" strokeLinecap="round" />
      <path d="M278 160 Q255 148 242 158 M278 160 Q300 145 313 155 M278 160 Q278 130 278 112" fill="none" stroke={green} strokeWidth="10" strokeLinecap="round" />
      {/* cylindrical drum in front */}
      <path d="M135 175 L175 175 L168 235 L142 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="155" cy="175" rx="20" ry="9" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <path d="M138 195 L172 195 M136 215 L170 215" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const RuinasMayasCaracol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const jungle = "#2E7D32";
  return (
    <g>
      {/* treetop canopy */}
      {[[120, 200], [155, 215], [255, 210], [290, 195], [190, 220]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="30" fill={jungle} />
      ))}
      {/* pyramid peeking above */}
      <polygon points="175,235 205,110 235,235" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((row) => (
        <line key={row} x1={190 - row * 4} y1={235 - row * 30} x2={220 + row * 4} y2={235 - row * 30} stroke={dark} strokeWidth="2" opacity="0.5" />
      ))}
    </g>
  );
};

const BajaDensidadPoblacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M95 240 L320 240" stroke={dark} strokeWidth="3" opacity="0.3" />
      {/* single large tree, isolated */}
      <rect x="196" y="180" width="18" height="60" fill="#8B5A2B" />
      <circle cx="205" cy="150" r="55" fill={accentColor} />
      <circle cx="175" cy="170" r="30" fill={shade(accentColor, 0.1)} />
      <circle cx="240" cy="165" r="32" fill={shade(accentColor, 0.1)} />
      <ellipse cx="205" cy="242" rx="60" ry="8" fill={dark} opacity="0.15" />
    </g>
  );
};

const MosaicoMulticultural: IllustrationComponent = ({ accentColor }) => {
  const colors = [accentColor, "#D4A017", "#1565C0", "#2E7D32", "#6A1B9A", "#C1272D"];
  const pieces: [number, number, "right" | "bottom"][] = [
    [130, 105, "right"],
    [200, 105, "bottom"],
    [270, 105, "right"],
    [130, 175, "right"],
    [200, 175, "right"],
    [270, 175, "bottom"],
  ];
  return (
    <g>
      {pieces.map(([x, y], i) => (
        <rect key={x} x={x - 32} y={y - 32} width="64" height="64" rx="8" fill={colors[i % colors.length]} />
      ))}
      {pieces.map(([x, y, tab], i) => (
        <circle
          key={`tab-${x}`}
          cx={tab === "right" ? x + 32 : x}
          cy={tab === "right" ? y : y + 32}
          r="12"
          fill={colors[i % colors.length]}
        />
      ))}
    </g>
  );
};

const ReservaJaguares: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const jungle = "#2E7D32";
  return (
    <g>
      {[[105, 220], [305, 215], [95, 130], [315, 125]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="26" fill={jungle} opacity="0.5" />
      ))}
      {/* jaguar walking */}
      <path d="M140 200 Q135 180 155 175 Q195 168 225 182 Q238 188 233 200 L226 214 L214 212 L211 200 L165 200 L162 214 L149 212 Z" fill={accentColor} />
      <circle cx="147" cy="178" r="15" fill={accentColor} />
      <path d="M138 172 L134 162 M156 172 L160 162" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      {[[152, 183], [167, 177], [182, 181], [197, 177], [212, 183]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill={dark} />
      ))}
      <path d="M226 182 Q248 176 254 158" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const Independencia1981: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="180" y="120" width="8" height="120" fill={dark} />
      <path d="M188 122 L275 140 L255 160 L275 180 L188 165 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* fireworks bursting above */}
      {[[130, 110], [235, 90], [290, 130]].map(([x, y], i) => (
        <g key={x}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1={x} y1={y} x2={x} y2={Number(y) - 18} stroke={i % 2 === 0 ? gold : accentColor} strokeWidth="3" strokeLinecap="round" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
    </g>
  );
};

const CuevaSagradaAtm: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* rock face */}
      <rect x="95" y="80" width="225" height="170" fill={dark} />
      {/* dark cave entrance */}
      <path d="M155 250 Q145 170 205 150 Q265 170 255 250 Z" fill="#0A0A0A" />
      {/* stalactites hanging from the top of the entrance */}
      {[170, 190, 205, 220, 240].map((x, i) => (
        <path key={x} d={`M${x - 6} 158 L${x} ${158 + 18 + (i % 2) * 10} L${x + 6} 158 Z`} fill={light} opacity="0.85" />
      ))}
    </g>
  );
};

const ComunidadesMenonitas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.3);
  return (
    <g>
      {/* wide-brimmed straw hat */}
      <ellipse cx="170" cy="200" rx="70" ry="16" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M140 198 Q140 158 170 150 Q200 158 200 198 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2" />
      {/* fabric suspender strap beside it */}
      <path d="M255 120 L270 120 L280 240 L265 240 Z" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="248" y="130" width="34" height="12" fill={dark} />
    </g>
  );
};

const ElCacaoMayaDeToledo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 140 Q120 170 140 220 Q160 235 175 220 Q190 170 175 140 Q160 128 140 140 Z" fill="#C1440E" stroke={dark} strokeWidth="3" />
      <ellipse cx="157" cy="180" rx="14" ry="30" fill="#F5F0E6" opacity="0.9" />
      {[165, 178, 191, 204].map((y) => (
        <ellipse key={y} cx="157" cy={y} rx="8" ry="6" fill="#6B3E26" />
      ))}
      <rect x="215" y="175" width="90" height="55" rx="4" fill="#6B3E26" stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={245 + i * 20} y1="175" x2={245 + i * 20} y2="230" stroke={dark} strokeWidth="2" opacity="0.5" />
      ))}
      <line x1="215" y1="202" x2="305" y2="202" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const LaBatallaDeCayoSanJorge: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="235" rx="60" ry="12" fill="#C9B27A" />
      <circle cx="190" cy="220" r="14" fill="#2E7D32" />
      <circle cx="215" cy="215" r="16" fill="#2E7D32" />
      <path d="M100 218 L92 232 L172 232 L164 218 Z" fill="#3A2418" stroke={dark} strokeWidth="2.5" />
      <line x1="132" y1="218" x2="132" y2="130" stroke="#3A2418" strokeWidth="4" />
      <polygon points="132,135 168,165 132,195" fill={accentColor} stroke={dark} strokeWidth="2" />
      <line x1="164" y1="222" x2="185" y2="222" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M240 214 L232 228 L312 228 L304 214 Z" fill="#3A2418" stroke={dark} strokeWidth="2.5" />
      <line x1="272" y1="214" x2="272" y2="126" stroke="#3A2418" strokeWidth="4" />
      <polygon points="272,131 236,161 272,191" fill="#D4A017" stroke={dark} strokeWidth="2" />
      <line x1="240" y1="218" x2="219" y2="218" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

export const belizeIllustrations: Record<string, IllustrationDefinition> = {
  "unico-pais-anglohablante": { component: UnicoPaisAnglohablante },
  "arrecife-hoyo-azul": { component: ArrecifeHoyoAzul },
  "cultura-garifuna": { component: CulturaGarifuna },
  "ruinas-mayas-caracol": { component: RuinasMayasCaracol },
  "baja-densidad-poblacional": { component: BajaDensidadPoblacional },
  "mosaico-multicultural": { component: MosaicoMulticultural },
  "reserva-jaguares": { component: ReservaJaguares },
  "independencia-1981": { component: Independencia1981 },
  "cueva-sagrada-atm": { component: CuevaSagradaAtm },
  "comunidades-menonitas": { component: ComunidadesMenonitas },
  "el-cacao-maya-de-toledo": { component: ElCacaoMayaDeToledo },
  "la-batalla-de-cayo-san-jorge": { component: LaBatallaDeCayoSanJorge },
};
