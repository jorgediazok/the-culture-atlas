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

const ElAveExtintaQueSeConvirtioEnSimboloNacional: IllustrationComponent = () => (
  <g>
    <path d="M180 235 Q120 230 118 175 Q116 130 165 118 Q210 108 245 135 Q270 155 260 185 Q290 175 296 155 Q300 175 278 195 Q260 210 230 218 Q225 235 190 238 Z" fill="#8C7B6B" stroke="#3A2A1E" strokeWidth="3" />
    <circle cx="255" cy="140" r="22" fill="#8C7B6B" stroke="#3A2A1E" strokeWidth="3" />
    <path d="M275 138 Q305 135 318 145 Q305 150 288 150 Q300 158 296 168 Q282 160 274 150 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.4" />
    <circle cx="262" cy="134" r="3" fill="#1A1A1A" />
    <path d="M195 220 L192 245 M225 222 L228 246" stroke="#3A2A1E" strokeWidth="6" strokeLinecap="round" />
    <path d="M186 246 L198 246 M220 248 L232 248" stroke="#D9A227" strokeWidth="5" strokeLinecap="round" />
    <path d="M150 165 Q130 158 128 175 Q145 182 158 172 Z" fill="#5C4A3A" stroke="#3A2A1E" strokeWidth="2" />
    <path d="M110 220 Q120 195 108 175" fill="none" stroke="#3A7A45" strokeWidth="5" strokeLinecap="round" />
    <path d="M108 175 Q98 168 92 178 M108 175 Q118 165 128 172" fill="none" stroke="#3A7A45" strokeWidth="5" strokeLinecap="round" />
  </g>
);

const ElBaileQueNacioDelDolorDeLaEsclavitud: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 95 Q200 82 320 95 L320 105 Q200 92 90 105 Z" fill="#D9A227" opacity="0.5" />
      <circle cx="270" cy="100" r="22" fill="#D9A227" opacity="0.6" />
      <g transform="translate(160 220)">
        <circle cx="0" cy="-38" r="10" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.6" />
        <path d="M-16 -28 Q0 -22 20 -30 L26 6 Q0 22 -24 8 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
        <path d="M18 -24 Q30 -10 26 6" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M-14 -12 L-22 15 M4 -10 L10 16" stroke="#3A2A1E" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(215 218)">
        <circle cx="0" cy="-38" r="10" fill="#5C4A3A" stroke="#1A120C" strokeWidth="1.6" />
        <path d="M-18 -28 Q0 -20 16 -28 L22 8 Q0 24 -26 8 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2.2" />
        <path d="M-16 -24 Q-30 -12 -24 6" fill="none" stroke="#F5F0E6" strokeWidth="6" strokeLinecap="round" />
        <path d="M-16 4 L-30 20 M18 4 L28 18" stroke="#3A2A1E" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(255 222)">
        <ellipse cx="0" cy="0" rx="26" ry="10" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
        <path d="M-26 0 Q-30 -18 -14 -22 Q10 -26 24 -14 Q30 -6 26 0" fill="#D9C08A" stroke="#5C3A21" strokeWidth="2.4" />
        <path d="M-8 -20 L-4 -2 M6 -22 L10 -4" stroke="#5C3A21" strokeWidth="1.4" />
      </g>
    </g>
  );
};

const LaIslaDondeConvivenCuatroReligionesEnPaz: IllustrationComponent = () => (
  <g>
    <rect x="95" y="195" width="230" height="45" fill="#D9C08A" opacity="0.4" />
    <g transform="translate(140 235)">
      <rect x="-24" y="-70" width="48" height="70" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.6" />
      <path d="M-24 -70 L-14 -95 L-4 -78 L0 -105 L4 -78 L14 -95 L24 -70 Z" fill="#C1272D" stroke="#8A6A10" strokeWidth="2" />
      <rect x="-8" y="-40" width="16" height="40" fill="#8A6A10" opacity="0.6" />
    </g>
    <g transform="translate(200 240)">
      <rect x="-26" y="-55" width="52" height="55" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2.6" />
      <path d="M-26 -55 Q0 -100 26 -55 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2.6" />
      <circle cx="0" cy="-100" r="7" fill="#1B7A9C" stroke="#0E4A5C" strokeWidth="1.8" />
      <path d="M-8 -112 Q0 -122 8 -112" fill="none" stroke="#0E4A5C" strokeWidth="2.4" />
      <rect x="-16" y="-32" width="10" height="32" fill="#8C7B6B" opacity="0.6" />
      <rect x="6" y="-32" width="10" height="32" fill="#8C7B6B" opacity="0.6" />
    </g>
    <g transform="translate(262 238)">
      <rect x="-22" y="-58" width="44" height="58" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.6" />
      <path d="M-22 -58 L0 -90 L22 -58 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.6" />
      <path d="M0 -90 L0 -108 M-6 -102 L6 -102" stroke="#5C4A3A" strokeWidth="3" />
      <rect x="-8" y="-34" width="16" height="34" fill="#5C4A3A" opacity="0.6" />
    </g>
  </g>
);

const LaMontanaRefugioDeLosEsclavosQueEscaparon: IllustrationComponent = () => (
  <g>
    <rect x="90" y="220" width="230" height="30" fill="#1B7A9C" opacity="0.5" />
    <path d="M120 235 Q150 215 148 190 Q170 195 178 165 Q186 200 210 175 Q222 200 245 170 Q252 205 280 195 Q300 205 300 235 Z" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="3" />
    <ellipse cx="168" cy="185" rx="12" ry="8" fill="#1B4B1E" opacity="0.7" />
    <ellipse cx="228" cy="178" rx="10" ry="7" fill="#1B4B1E" opacity="0.7" />
    <path d="M90 238 Q140 228 200 238 Q260 248 320 238" fill="none" stroke="#F5F0E6" strokeWidth="2.4" opacity="0.6" />
    <path d="M95 232 Q150 222 200 230" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
  </g>
);

const ElPuertoDondeLlegoMedioMillonDeTrabajadores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="212" width="230" height="30" fill="#1B7A9C" opacity="0.5" />
      <rect x="120" y="150" width="90" height="65" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.6" />
      <rect x="140" y="170" width="16" height="24" fill="#3A2A1E" opacity="0.6" />
      <rect x="174" y="170" width="16" height="24" fill="#3A2A1E" opacity="0.6" />
      <path d="M120 150 L165 130 L210 150" fill="none" stroke="#5C4A3A" strokeWidth="2.4" />
      <path d="M235 210 L235 155 L290 175 L290 210 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.6" />
      <rect x="258" y="150" width="4" height="45" fill="#5C3A21" />
      <path d="M262 152 L262 178 L286 172 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
      {person(215, 220, 0.7, dark, accentColor)}
      {person(232, 222, 0.7, "#3A2A1E", "#F5F0E6")}
    </g>
  );
};

const ElPlatoCallejeroQueTodoMauricianoAma: IllustrationComponent = () => (
  <g>
    <rect x="130" y="205" width="140" height="10" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    <rect x="140" y="150" width="4" height="55" fill="#5C3A21" />
    <rect x="260" y="150" width="4" height="55" fill="#5C3A21" />
    <path d="M136 150 L268 150 L255 130 L149 130 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.4" />
    <ellipse cx="175" cy="222" rx="26" ry="9" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.2" />
    <ellipse cx="175" cy="218" rx="24" ry="6" fill="#F5D98A" />
    <ellipse cx="215" cy="225" rx="24" ry="9" fill="#D9A227" stroke="#8A6A10" strokeWidth="2.2" />
    <ellipse cx="215" cy="221" rx="22" ry="6" fill="#F5D98A" />
    {[[240, 205], [255, 210], [248, 198]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="7" fill="#C1272D" stroke="#7A1818" strokeWidth="1.8" />
    ))}
  </g>
);

const LasSieteTierrasDeColoresQueNuncaSeMezclan: IllustrationComponent = () => (
  <g>
    <path d="M95 235 Q140 195 200 220 Q260 245 315 210 L315 250 L95 250 Z" fill="#8A4B2E" stroke="#5C3018" strokeWidth="2.8" />
    <path d="M95 235 Q140 195 200 220 Q260 245 315 210" fill="none" stroke="#5C3018" strokeWidth="2.4" />
    <path d="M100 220 Q145 182 200 205 Q255 228 310 195" fill="none" stroke="#6E3AA0" strokeWidth="9" opacity="0.85" />
    <path d="M105 205 Q150 170 200 190 Q250 210 305 178" fill="none" stroke="#C1272D" strokeWidth="9" opacity="0.85" />
    <path d="M112 190 Q155 158 200 176 Q245 194 298 162" fill="none" stroke="#3A7A45" strokeWidth="9" opacity="0.85" />
    <path d="M120 176 Q160 148 200 163 Q240 178 288 148" fill="none" stroke="#D9A227" strokeWidth="9" opacity="0.85" />
    <path d="M130 163 Q165 138 200 150 Q235 162 278 135" fill="none" stroke="#1B7A9C" strokeWidth="9" opacity="0.85" />
  </g>
);

const LasCasasColonialesDeTechosDeLataColoridos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  return (
    <g>
      <rect x="145" y="145" width="120" height="70" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.6" />
      <path d="M138 145 L205 108 L272 145 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <path d="M138 145 L145 148 M272 145 L265 148" stroke={dark} strokeWidth="2" />
      <rect x="160" y="120" width="14" height="6" fill={dark} />
      <path d="M145 195 L265 195 L265 215 Q205 225 145 215 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2.2" />
      <path d="M150 195 L155 205 L160 195 L165 205 L170 195 L175 205 L180 195" fill="none" stroke="#8C7B6B" strokeWidth="1.6" />
      <path d="M190 195 L195 205 L200 195 L205 205 L210 195 L215 205 L220 195" fill="none" stroke="#8C7B6B" strokeWidth="1.6" />
      <rect x="180" y="150" width="40" height="65" fill={dark} opacity="0.5" />
      <rect x="192" y="160" width="16" height="24" fill="#3A2A1E" opacity="0.5" />
      <rect x="120" y="215" width="8" height="35" fill="#8C7B6B" />
      <rect x="282" y="215" width="8" height="35" fill="#8C7B6B" />
    </g>
  );
};

const LaPeregrinacionHinduHastaUnLagoDeCrater: IllustrationComponent = () => (
  <g>
    <path d="M100 190 L150 130 L190 190 Z" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.6" />
    <path d="M180 195 L230 120 L280 195 Z" fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2.6" />
    <ellipse cx="205" cy="215" rx="100" ry="28" fill="#1B7A9C" stroke="#0E4A5C" strokeWidth="2.8" />
    <ellipse cx="205" cy="210" rx="80" ry="18" fill="#4AA9CC" opacity="0.6" />
    <g transform="translate(250 178)">
      <rect x="-8" y="0" width="16" height="26" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.8" />
      <path d="M-10 0 L0 -18 L10 0 Z" fill="#B8451D" stroke="#8A6A10" strokeWidth="1.8" />
    </g>
    {[[140, 235, "#C1272D"], [160, 240, "#D9A227"], [180, 244, "#C1272D"]].map(([x, y, c], i) => (
      <g key={i} transform={`translate(${x} ${y})`}>
        <circle cx="0" cy="-20" r="6" fill="#3A2A1E" />
        <path d="M-8 -14 Q0 -10 8 -14 L9 6 Q0 10 -9 6 Z" fill={c as string} stroke="#5C3A21" strokeWidth="1.6" />
        <path d="M0 -30 L0 -14" stroke="#8A6A10" strokeWidth="2" />
        <path d="M-6 -30 L6 -30 L4 -22 L-4 -22 Z" fill="#D9A227" stroke="#8A6A10" strokeWidth="1.2" />
      </g>
    ))}
  </g>
);

const LosArtesanosQueConstruyenBarcosEnMiniatura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="205" width="180" height="12" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
      {person(155, 205, 0.85, dark, accentColor)}
      <path d="M220 205 L216 175 Q216 165 236 165 Q256 165 256 175 L252 205 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
      <rect x="234" y="128" width="3" height="42" fill="#5C3A21" />
      <path d="M237 132 L237 165 L262 158 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
      <path d="M234 130 L234 165 L214 160 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
      <path d="M216 185 L256 185" stroke="#5C3A21" strokeWidth="1.6" />
    </g>
  );
};

const GargantasDelRioNegro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="150" cy="110" rx="60" ry="24" fill="#3A7A45" opacity="0.3" />
      <ellipse cx="270" cy="130" rx="50" ry="20" fill="#3A7A45" opacity="0.25" />
      <path d="M150 240 L270 225" stroke="#5C4A3E" strokeWidth="8" strokeLinecap="round" />
      <circle cx="225" cy="195" r="15" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <ellipse cx="238" cy="205" rx="32" ry="24" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M213 193 L202 189 L213 198 Z" fill="#5C3A21" />
      <circle cx="220" cy="190" r="2" fill="#1A1A1A" />
      <path d="M258 218 L275 224 M258 194 L273 186" stroke={accentColor} strokeWidth="4" opacity="0.7" />
      <line x1="228" y1="228" x2="228" y2="231" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="248" y1="228" x2="248" y2="230" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const CascadaSubmarinaDeLeMorne: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const shallow = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={shallow} />
      <path d="M90 150 L200 150 Q220 150 225 170 Q235 200 220 230 Q210 245 195 250 L90 250 Z" fill={dark} opacity="0.9" />
      <path d="M120 160 Q150 165 160 180 Q170 200 155 220 Q145 235 130 240" fill="none" stroke={shade(dark, 0.2)} strokeWidth="4" opacity="0.6" />
      <path d="M150 158 Q175 168 185 190 Q195 212 180 232" fill="none" stroke={shade(dark, 0.2)} strokeWidth="4" opacity="0.5" />
    </g>
  );
};

export const mauritiusIllustrations: Record<string, IllustrationDefinition> = {
  "el-ave-extinta-que-se-convirtio-en-simbolo-nacional": { component: ElAveExtintaQueSeConvirtioEnSimboloNacional },
  "el-baile-que-nacio-del-dolor-de-la-esclavitud": { component: ElBaileQueNacioDelDolorDeLaEsclavitud },
  "la-isla-donde-conviven-cuatro-religiones-en-paz": { component: LaIslaDondeConvivenCuatroReligionesEnPaz },
  "la-montana-refugio-de-los-esclavos-que-escaparon": { component: LaMontanaRefugioDeLosEsclavosQueEscaparon },
  "el-puerto-donde-llego-medio-millon-de-trabajadores": { component: ElPuertoDondeLlegoMedioMillonDeTrabajadores },
  "el-plato-callejero-que-todo-mauriciano-ama": { component: ElPlatoCallejeroQueTodoMauricianoAma },
  "las-siete-tierras-de-colores-que-nunca-se-mezclan": { component: LasSieteTierrasDeColoresQueNuncaSeMezclan },
  "las-casas-coloniales-de-techos-de-lata-coloridos": { component: LasCasasColonialesDeTechosDeLataColoridos },
  "la-peregrinacion-hindu-hasta-un-lago-de-crater": { component: LaPeregrinacionHinduHastaUnLagoDeCrater },
  "los-artesanos-que-construyen-barcos-en-miniatura": { component: LosArtesanosQueConstruyenBarcosEnMiniatura },
  "gargantas-del-rio-negro": { component: GargantasDelRioNegro },
  "cascada-submarina-de-le-morne": { component: CascadaSubmarinaDeLeMorne },
};
