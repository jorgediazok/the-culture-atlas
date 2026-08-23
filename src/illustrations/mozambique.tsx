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

const LaOrquestaDeXilofonosQueEncantaAUnPueblo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  return (
    <g>
      {/* Xylophone frame with keys of decreasing length */}
      <rect x="150" y="190" width="150" height="14" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
      <rect x="160" y="176" width="128" height="12" fill="#D9A94A" stroke="#6B4A1E" strokeWidth="2" />
      <rect x="170" y="163" width="106" height="12" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
      <ellipse cx="175" cy="208" rx="12" ry="8" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="1.8" />
      <ellipse cx="220" cy="212" rx="14" ry="9" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="1.8" />
      <ellipse cx="268" cy="208" rx="12" ry="8" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="1.8" />
      {person(150, 225, 1.05, dark, accentColor)}
      <path d="M162 190 L178 165" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="180" cy="162" r="4" fill="#3A2A1E" />
      {person(300, 225, 1, dark, tint(accentColor, 0.15))}
      <path d="M288 176 L272 155" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="270" cy="152" r="4" fill="#3A2A1E" />
    </g>
  );
};

const LaTelaQueVisteCargaBebesYCuentaHistorias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.35);
  return (
    <g>
      <circle cx="200" cy="118" r="16" fill="#3A2A1E" stroke={dark} strokeWidth="2" />
      <path d="M170 140 Q200 128 230 140 L238 235 Q200 248 162 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${172 + i * 18} 150 L${168 + i * 18} 232`} stroke={light} strokeWidth="4" opacity="0.8" />
      ))}
      <path d="M170 150 Q150 165 155 190" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <path d="M230 150 Q250 165 245 190" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      {/* baby wrapped on the back */}
      <ellipse cx="205" cy="205" rx="20" ry="24" fill="#D9346B" stroke={dark} strokeWidth="2.2" />
      <circle cx="205" cy="188" r="9" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const LaIslaDeCoralQueFueCapitalDeUnImperio: IllustrationComponent = () => (
  <g>
    <rect x="90" y="205" width="230" height="45" fill="#1B7A9C" opacity="0.5" />
    <path d="M90 240 Q140 230 190 240 T320 240" fill="none" stroke="#F5F0E6" strokeWidth="2.5" opacity="0.6" />
    <rect x="140" y="140" width="130" height="70" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2.6" />
    <path d="M140 140 L145 120 L155 140 M165 140 L170 118 L180 140 M195 140 L200 116 L205 140 M225 140 L230 120 L240 140 M255 140 L260 122 L270 140" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2.4" />
    <rect x="185" y="165" width="30" height="45" fill="#8B7355" stroke="#5C4A3A" strokeWidth="2" />
    <path d="M270 175 L300 175 L294 195 Q282 202 270 195 Z" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2.2" />
    <path d="M285 175 L285 158" stroke="#5C4A3A" strokeWidth="2" />
  </g>
);

const LasMascarasTalladasQueCobranVidaAlBailar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <ellipse cx="200" cy="245" rx="100" ry="14" fill="#3A2A1E" opacity="0.35" />
      <path d="M175 170 Q200 235 175 235 L165 245 Q200 258 235 245 L225 235 Q200 235 225 170 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M170 200 Q140 190 130 210" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M230 200 Q260 190 270 210" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="200" cy="140" rx="34" ry="40" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="3" />
      <path d="M175 128 L185 122 L192 130" fill="none" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
      <path d="M225 128 L215 122 L208 130" fill="none" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="200" cy="148" rx="8" ry="12" fill="#3A2A1E" />
      <path d="M182 165 Q200 175 218 165" fill="none" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
      <path d="M172 105 L166 88 M186 100 L182 82 M200 98 L200 78 M214 100 L218 82 M228 105 L234 88" stroke="#5C3A21" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ElPequenoChileQueConquistoLasCocinasDelMundo: IllustrationComponent = () => (
  <g>
    <path d="M140 235 L260 235 L250 200 L150 200 Z" fill="#3A2A1E" stroke="#1A1208" strokeWidth="2.4" />
    <path d="M150 200 L145 190 M170 200 L166 188 M190 200 L188 186 M210 200 L212 186 M230 200 L234 188 M250 200 L255 190" stroke="#5C3A21" strokeWidth="2.2" />
    <ellipse cx="200" cy="195" rx="55" ry="16" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2.6" />
    <path d="M160 190 Q200 178 240 190" fill="none" stroke="#8A5A10" strokeWidth="2" opacity="0.6" />
    {[[130, 175], [150, 160], [270, 172]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 6} ${y - 14} ${x - 2} ${y - 26} Q${x - 10} ${y - 32} ${x - 6} ${y - 40}`} fill="none" stroke="#C1272D" strokeWidth="6" strokeLinecap="round" />
    ))}
    <rect x="270" y="205" width="24" height="38" rx="4" fill="#8B1A1A" stroke="#5C1010" strokeWidth="2.2" />
    <rect x="277" y="196" width="10" height="12" fill="#8B1A1A" stroke="#5C1010" strokeWidth="2" />
  </g>
);

const LaEstacionDeTrenQuePareceUnPalacioDorado: IllustrationComponent = () => (
  <g>
    <rect x="120" y="165" width="160" height="75" fill="#D9C9A3" stroke="#8B7355" strokeWidth="2.6" />
    <path d="M150 165 L150 195 M175 165 L175 195 M225 165 L225 195 M250 165 L250 195" stroke="#8B7355" strokeWidth="3" opacity="0.7" />
    <path d="M150 165 Q162 150 175 165 M175 165 Q187 150 200 165 M200 165 Q212 150 225 165 M225 165 Q237 150 250 165" fill="none" stroke="#5C4A3A" strokeWidth="2.4" />
    <path d="M160 130 Q200 100 240 130 Q235 148 200 148 Q165 148 160 130 Z" fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2.6" />
    <rect x="192" y="98" width="16" height="20" fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2" />
    <circle cx="200" cy="120" r="10" fill="#F5F0E6" stroke="#8B7355" strokeWidth="2" />
    <path d="M200 114 L200 120 L204 122" stroke="#3A2A1E" strokeWidth="1.6" />
  </g>
);

const LosBarcosDeVelaQueAunSurcanLaCostaAMano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 225 Q205 215 320 225" fill="none" stroke="#0EA5B8" strokeWidth="4" opacity="0.7" />
      <path d="M100 235 Q205 227 310 235" fill="none" stroke="#0EA5B8" strokeWidth="3" opacity="0.5" />
      <path d="M160 220 L250 220 L235 240 Q200 248 175 240 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
      <path d="M205 220 L205 110" stroke="#5C3A21" strokeWidth="3" />
      <path d="M205 112 Q245 150 208 218 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      {person(190, 215, 0.75, dark, tint(accentColor, 0.2))}
    </g>
  );
};

const ElGranRioQueParteElPaisEnDosMitades: IllustrationComponent = () => (
  <g>
    <path d="M100 250 L130 90 L270 90 L300 250 Z" fill="#5C8A3A" stroke="#2F5B22" strokeWidth="2.6" />
    <path d="M320 90 Q270 130 260 170 Q250 210 200 205 Q150 200 130 235 Q115 250 90 250 L90 90 Z" fill="#4A6B8A" stroke="#2A4560" strokeWidth="2.4" />
    <path d="M300 100 Q265 135 255 168" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
    <path d="M175 220 L155 210 L175 235 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    {[[140, 170, 14], [255, 200, 12]].map(([x, y, r], i) => (
      <g key={i} transform={`translate(${x} ${y})`}>
        <rect x="-2.5" y="0" width="5" height="18" fill="#5C3A21" />
        <ellipse cx="0" cy="-6" rx={r} ry={Number(r) * 0.6} fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.6" />
      </g>
    ))}
  </g>
);

const LasArmasDeUnaGuerraConvertidasEnEsculturas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="225" width="100" height="18" fill="#5C4A3A" stroke="#3A2A1E" strokeWidth="2.2" />
      <path d="M200 225 L200 175 Q170 165 180 140 Q186 150 200 150 L200 130 Q214 150 220 140 Q230 165 200 175 Z" fill="#8C7B6B" stroke="#3A2A1E" strokeWidth="2.6" />
      <path d="M182 175 L168 160 M218 175 L232 160" stroke="#8C7B6B" strokeWidth="6" strokeLinecap="round" />
      <circle cx="200" cy="118" r="12" fill="#8C7B6B" stroke="#3A2A1E" strokeWidth="2.4" />
      {person(275, 225, 0.9, dark, accentColor)}
      <path d="M262 195 L245 175" stroke="#3A2A1E" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M243 172 L253 178 M243 172 L237 180" stroke="#D9A227" strokeWidth="2.4" strokeLinecap="round" />
    </g>
  );
};

const ElGuisoDeHojasDeMandiocaConManiYCoco: IllustrationComponent = () => (
  <g>
    <ellipse cx="215" cy="220" rx="70" ry="22" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.6" />
    <ellipse cx="215" cy="212" rx="60" ry="14" fill="#5C8A3A" opacity="0.7" />
    <ellipse cx="140" cy="225" rx="30" ry="10" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
    <rect x="132" y="180" width="16" height="46" rx="6" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    {[[170, 165], [190, 155], [210, 168]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 10} ${y - 12} ${x + 4} ${y - 26} Q${x - 2} ${y - 14} ${x - 8} ${y - 8} Z`} fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="1.8" />
    ))}
    <path d="M270 205 Q280 195 275 182" fill="none" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
  </g>
);

export const mozambiqueIllustrations: Record<string, IllustrationDefinition> = {
  "la-orquesta-de-xilofonos-que-encanta-a-un-pueblo": { component: LaOrquestaDeXilofonosQueEncantaAUnPueblo },
  "la-tela-que-viste-carga-bebes-y-cuenta-historias": { component: LaTelaQueVisteCargaBebesYCuentaHistorias },
  "la-isla-de-coral-que-fue-capital-de-un-imperio": { component: LaIslaDeCoralQueFueCapitalDeUnImperio },
  "las-mascaras-talladas-que-cobran-vida-al-bailar": { component: LasMascarasTalladasQueCobranVidaAlBailar },
  "el-pequeno-chile-que-conquisto-las-cocinas-del-mundo": { component: ElPequenoChileQueConquistoLasCocinasDelMundo },
  "la-estacion-de-tren-que-parece-un-palacio-dorado": { component: LaEstacionDeTrenQuePareceUnPalacioDorado },
  "los-barcos-de-vela-que-aun-surcan-la-costa-a-mano": { component: LosBarcosDeVelaQueAunSurcanLaCostaAMano },
  "el-gran-rio-que-parte-el-pais-en-dos-mitades": { component: ElGranRioQueParteElPaisEnDosMitades },
  "las-armas-de-una-guerra-convertidas-en-esculturas": { component: LasArmasDeUnaGuerraConvertidasEnEsculturas },
  "el-guiso-de-hojas-de-mandioca-con-mani-y-coco": { component: ElGuisoDeHojasDeMandiocaConManiYCoco },
};
