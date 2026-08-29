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

const ElMercadoMasGrandeDelMundoDeMedicinaVudu: IllustrationComponent = () => (
  <g>
    <rect x="120" y="200" width="160" height="16" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    {[[140, 190], [175, 185], [210, 195], [245, 188]].map(([x, y], i) => (
      <g key={i} transform={`translate(${x} ${y})`}>
        <ellipse cx="0" cy="0" rx="12" ry="9" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
        <circle cx="-5" cy="-2" r="2.4" fill="#1A1A1A" />
        <circle cx="5" cy="-2" r="2.4" fill="#1A1A1A" />
      </g>
    ))}
    <path d="M130 200 L130 175 M170 200 L170 170 M220 200 L220 178" stroke="#3A2A1E" strokeWidth="2" opacity="0.6" />
  </g>
);

const ElPuebloLacustreDondeNacioUnCulto: IllustrationComponent = () => (
  <g>
    <rect x="90" y="190" width="230" height="60" fill="#1B7A9C" opacity="0.5" />
    <rect x="175" y="155" width="50" height="45" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2.4" />
    <path d="M175 155 L200 130 L225 155 Z" fill="none" stroke="#8B7355" strokeWidth="2.2" />
    <rect x="195" y="122" width="10" height="12" fill="#8B7355" />
    <path d="M170 175 L155 165 L140 175 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    <path d="M90 235 Q205 225 320 235" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
  </g>
);

const LaLuchaQueConvierteAUnNinoEnHombre: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="240" rx="110" ry="14" fill="#D9C08A" opacity="0.5" />
    <g transform="translate(175 215)">
      <circle cx="0" cy="-28" r="10" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.8" />
      <path d="M-13 -19 Q0 -24 13 -19 L15 18 Q0 25 -15 18 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
      <path d="M13 -15 Q28 -6 24 9" fill="none" stroke="#8B5A2B" strokeWidth="7" strokeLinecap="round" />
    </g>
    <g transform="translate(225 217)">
      <circle cx="0" cy="-28" r="10" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.8" />
      <path d="M-13 -19 Q0 -24 13 -19 L15 18 Q0 25 -15 18 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.2" />
      <path d="M-13 -15 Q-28 -6 -24 9" fill="none" stroke="#D9A227" strokeWidth="7" strokeLinecap="round" />
    </g>
  </g>
);

const LasMujeresQueConstruyeronUnImperioDeTela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(200, 240, 1.15, dark, accentColor)}
      <path d="M182 165 Q200 158 218 165 L216 205 Q200 212 184 205 Z" fill="none" stroke={dark} strokeWidth="1" />
      <rect x="140" y="215" width="35" height="28" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="1.8" />
      <rect x="225" y="212" width="35" height="30" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.8" />
    </g>
  );
};

const LasTelasTejidasEnTirasAngostasDeColores: IllustrationComponent = () => (
  <g>
    <rect x="120" y="120" width="160" height="120" fill="#D9C08A" stroke="#5C3A21" strokeWidth="2.6" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect key={i} x={120 + i * 22.8} y="120" width="22.8" height="120" fill={["#C8102E", "#D9A227", "#3A7A45", "#F5F0E6", "#1B7A9C"][i % 5]} stroke="#5C3A21" strokeWidth="1" />
    ))}
  </g>
);

const ElPuertoQueGuardaLaMemoriaDeUnComercioDoloroso: IllustrationComponent = () => (
  <g>
    <rect x="90" y="200" width="230" height="50" fill="#1B7A9C" opacity="0.5" />
    <rect x="150" y="150" width="100" height="70" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.6" />
    <rect x="170" y="170" width="18" height="26" fill="#3A2A1E" opacity="0.7" />
    <rect x="212" y="170" width="18" height="26" fill="#3A2A1E" opacity="0.7" />
    <path d="M150 150 L200 130 L250 150" fill="none" stroke="#5C4A3A" strokeWidth="2.2" />
  </g>
);

const LaSopaDeOkraQueSeBebeCasiTantoComoSeCome: IllustrationComponent = () => (
  <g>
    <ellipse cx="185" cy="220" rx="55" ry="18" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.4" />
    <ellipse cx="270" cy="222" rx="35" ry="24" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.4" />
    {[[165, 215], [190, 220], [210, 213]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x + 6} ${y - 10}`} stroke="#1B4B1E" strokeWidth="2" strokeLinecap="round" />
    ))}
  </g>
);

const LaBolaDeMaizQueAcompanaCadaGuiso: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="90" ry="24" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="185" cy="195" rx="32" ry="26" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.4" />
    <ellipse cx="245" cy="205" rx="22" ry="15" fill="#C1272D" stroke="#7A1818" strokeWidth="1.8" />
  </g>
);

const ElVinoQueGoteaDirectamenteDeLaPalmera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="196" y="140" width="8" height="100" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
      <path d="M200 140 Q170 130 165 105 M200 140 Q230 128 238 100 M200 140 Q200 115 200 95" stroke="#3A7A45" strokeWidth="6" fill="none" strokeLinecap="round" />
      {person(200, 210, 0.85, dark, accentColor)}
      <ellipse cx="225" cy="175" rx="10" ry="14" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.8" />
      <path d="M215 175 L204 160" stroke="#3A2A1E" strokeWidth="1.6" />
    </g>
  );
};

const LaMontanaMasAltaCubiertaDeCafeYCacao: IllustrationComponent = () => (
  <g>
    <path d="M100 250 L170 110 L230 110 L300 250 Z" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.8" />
    {[[150, 220, 24], [180, 200, 28], [220, 205, 26], [250, 220, 24]].map(([x, y, r], i) => (
      <g key={i} transform={`translate(${x} ${y})`}>
        <rect x="-3" y="0" width="6" height="26" fill="#5C3A21" />
        <ellipse cx="0" cy="-6" rx={r} ry={Number(r) * 0.55} fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="1.6" />
      </g>
    ))}
    <path d="M150 130 Q200 118 250 130" fill="none" stroke="#F5F0E6" strokeWidth="3" opacity="0.6" />
  </g>
);

const EmmanuelAdebayorMundial2006: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  return (
    <g>
      <path d="M185 175 Q160 165 155 145" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M215 175 Q240 165 245 145" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M188 185 Q200 178 212 185 L206 225 Q200 231 194 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="200" cy="170" r="13" fill={skin} stroke={dark} strokeWidth="2" />
      <circle cx="260" cy="215" r="12" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" />
      <path d="M254 209 L266 221 M266 209 L254 221" stroke={dark} strokeWidth="1.6" opacity="0.5" />
    </g>
  );
};

const BellaBellowCantante: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  return (
    <g>
      <path d="M187 195 Q170 205 175 225" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M213 190 Q230 178 232 160" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M185 200 Q200 190 215 200 L220 245 Q200 253 180 245 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <circle cx="200" cy="178" r="14" fill={skin} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="232" cy="155" rx="9" ry="13" fill="#3A3A3A" />
      <rect x="230" y="167" width="4" height="28" fill="#5C5C5C" />
    </g>
  );
};

const ParqueFazaoMalfakassa: IllustrationComponent = ({ accentColor }) => {
  const fur = "#2E2418";
  return (
    <g>
      <path d="M90 250 Q140 190 205 200 Q270 210 320 180 L320 250 Z" fill={accentColor} opacity="0.4" />
      <path d="M170 225 Q150 232 148 250" fill="none" stroke={fur} strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="200" cy="225" rx="35" ry="26" fill={fur} stroke={shade(fur, 0.4)} strokeWidth="2.6" />
      <circle cx="200" cy="185" r="22" fill={fur} stroke={shade(fur, 0.4)} strokeWidth="2.6" />
      <ellipse cx="200" cy="192" rx="12" ry="9" fill="#5C4433" />
      <circle cx="192" cy="180" r="2.5" fill="#1A1A1A" />
      <circle cx="208" cy="180" r="2.5" fill="#1A1A1A" />
    </g>
  );
};

const SylvanusOlympioIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  return (
    <g>
      <rect x="255" y="110" width="6" height="130" fill="#5C3A21" />
      <path d="M261 115 L300 130 L261 145 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M188 178 Q165 190 170 215" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="170" y1="215" x2="168" y2="238" stroke="#5C3A21" strokeWidth="4" strokeLinecap="round" />
      <path d="M212 178 Q235 190 228 210" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M184 172 Q200 163 216 172 L210 235 Q200 242 190 235 Z" fill="#1B1B1B" stroke={dark} strokeWidth="2.6" />
      <circle cx="200" cy="155" r="14" fill={skin} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const FestivalYekeYekeGlidji: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  const CROWD: [number, number][] = [
    [130, 240], [160, 245], [250, 245], [280, 240],
  ];
  return (
    <g>
      {CROWD.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y - 16} r="9" fill={skin} opacity="0.6" />
          <path d={`M${x - 8} ${y} Q${x} ${y - 12} ${x + 8} ${y}`} fill={dark} opacity="0.5" />
        </g>
      ))}
      <rect x="185" y="150" width="40" height="70" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <path d="M185 150 L205 120 L225 150 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.4" />
      <line x1="160" y1="150" x2="160" y2="120" stroke="#5C3A21" strokeWidth="3" />
      <path d="M160 120 L180 128 L160 136 Z" fill={accentColor} />
      <line x1="250" y1="150" x2="250" y2="120" stroke="#5C3A21" strokeWidth="3" />
      <path d="M250 120 L230 128 L250 136 Z" fill="#C1272D" />
    </g>
  );
};

export const togoIllustrations: Record<string, IllustrationDefinition> = {
  "el-mercado-mas-grande-del-mundo-de-medicina-vudu": { component: ElMercadoMasGrandeDelMundoDeMedicinaVudu },
  "el-pueblo-lacustre-donde-nacio-un-culto": { component: ElPuebloLacustreDondeNacioUnCulto },
  "la-lucha-que-convierte-a-un-nino-en-hombre": { component: LaLuchaQueConvierteAUnNinoEnHombre },
  "las-mujeres-que-construyeron-un-imperio-de-tela": { component: LasMujeresQueConstruyeronUnImperioDeTela },
  "las-telas-tejidas-en-tiras-angostas-de-colores": { component: LasTelasTejidasEnTirasAngostasDeColores },
  "el-puerto-que-guarda-la-memoria-de-un-comercio-doloroso": { component: ElPuertoQueGuardaLaMemoriaDeUnComercioDoloroso },
  "la-sopa-de-okra-que-se-bebe-casi-tanto-como-se-come": { component: LaSopaDeOkraQueSeBebeCasiTantoComoSeCome },
  "la-bola-de-maiz-que-acompana-cada-guiso": { component: LaBolaDeMaizQueAcompanaCadaGuiso },
  "el-vino-que-gotea-directamente-de-la-palmera": { component: ElVinoQueGoteaDirectamenteDeLaPalmera },
  "la-montana-mas-alta-cubierta-de-cafe-y-cacao": { component: LaMontanaMasAltaCubiertaDeCafeYCacao },
  "emmanuel-adebayor-mundial-2006": { component: EmmanuelAdebayorMundial2006 },
  "bella-bellow-cantante": { component: BellaBellowCantante },
  "parque-fazao-malfakassa": { component: ParqueFazaoMalfakassa },
  "sylvanus-olympio-independencia": { component: SylvanusOlympioIndependencia },
  "festival-yeke-yeke-glidji": { component: FestivalYekeYekeGlidji },
};
