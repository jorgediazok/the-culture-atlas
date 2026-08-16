import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const WillemstadColorida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const pink = "#E85D8A";
  const turquoise = "#4FBFB0";
  return (
    <g>
      {[
        [100, 130, 60, pink],
        [165, 105, 55, "#F4C430"],
        [225, 120, 60, turquoise],
        [290, 140, 50, accentColor],
      ].map(([x, y, h, c], i) => (
        <g key={i}>
          <rect x={x as number} y={y as number} width="55" height={h as number} fill={c as string} stroke={dark} strokeWidth="2" />
          <polygon points={`${(x as number) - 3},${y} ${(x as number) + 27.5},${(y as number) - 20} ${(x as number) + 58},${y}`} fill={dark} />
          <rect x={(x as number) + 15} y={(y as number) + 15} width="12" height="18" fill="#fff" opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const CurazaoAzulLicor: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const orange = "#F4A300";
  return (
    <g>
      {/* bottle of bright blue liquid */}
      <path d="M175 235 L175 155 Q175 145 185 145 L195 145 Q205 145 205 155 L205 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="183" y="115" width="14" height="32" fill={dark} />
      <rect x="180" y="105" width="20" height="12" fill={shade(dark, 0.2)} />
      <rect x="178" y="190" width="24" height="14" fill="#fff" opacity="0.85" />
      {/* orange beside it */}
      <circle cx="255" cy="200" r="32" fill={orange} stroke={shade(orange, 0.3)} strokeWidth="2" />
      <path d="M255 168 L255 178" stroke="#4A8F4E" strokeWidth="4" strokeLinecap="round" />
      <path d="M240 185 Q255 195 270 185 M235 200 Q255 210 275 200 M240 215 Q255 222 270 215" fill="none" stroke={shade(orange, 0.2)} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const IdiomaPapiamento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M105 110 Q105 90 128 90 L195 90 Q218 90 218 110 Q218 130 195 130 L165 130 L150 148 L155 130 L128 130 Q105 130 105 110 Z" fill={accentColor} />
      <path d="M195 138 Q195 120 216 120 L280 120 Q301 120 301 138 Q301 156 280 156 L258 156 L270 172 L246 156 L216 156 Q195 156 195 138 Z" fill={dark} />
      {[125, 145, 165, 185].map((x) => (
        <circle key={x} cx={x} cy="108" r="4" fill={light} />
      ))}
      {[220, 240, 260, 280].map((x) => (
        <circle key={x} cx={x} cy="138" r="4" fill={light} />
      ))}
    </g>
  );
};

const PaisConstituyenteHolanda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="120" y="160" width="65" height="75" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="113,160 152,135 191,160" fill={dark} />
      <rect x="225" y="160" width="65" height="75" fill={light} stroke={dark} strokeWidth="2.5" />
      <polygon points="218,160 257,135 296,160" fill={dark} />
      {/* short bridge connecting them */}
      <rect x="185" y="210" width="40" height="10" fill={dark} />
      <line x1="190" y1="210" x2="190" y2="220" stroke={dark} strokeWidth="3" />
      <line x1="220" y1="210" x2="220" y2="220" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const FueraCinturonHuracanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cloud = "#B0BEC5";
  return (
    <g>
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <path key={deg} d="M150 165 Q143 130 150 95 Q157 130 150 165 Z" fill={accentColor} opacity="0.85" transform={`rotate(${deg} 150 165)`} />
      ))}
      <circle cx="150" cy="165" r="38" fill={accentColor} />
      {/* crossed-out storm cloud */}
      <path d="M245 195 Q230 195 230 180 Q230 168 244 168 Q248 155 265 155 Q282 155 285 170 Q300 170 300 185 Q300 198 285 198 Z" fill={cloud} stroke={dark} strokeWidth="2" />
      <circle cx="265" cy="177" r="34" fill="none" stroke="#B71C1C" strokeWidth="7" />
      <line x1="244" y1="198" x2="286" y2="156" stroke="#B71C1C" strokeWidth="7" />
    </g>
  );
};

const RebelionTula1795: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      {/* broken chain */}
      <g stroke={dark} strokeWidth="7" fill="none">
        <ellipse cx="130" cy="150" rx="16" ry="20" transform="rotate(20 130 150)" />
        <ellipse cx="160" cy="165" rx="16" ry="20" transform="rotate(-15 160 165)" />
      </g>
      <path d="M195 155 L188 145 M200 165 L210 158" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      {/* raised fist */}
      <path d="M240 235 L240 190 Q240 175 255 175 Q258 165 268 165 Q278 165 280 175 Q290 172 294 182 Q300 178 302 188 Q305 198 295 205 L295 235 Z" fill={skin} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ArrecifesBuceo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const coral = "#E8912D";
  const fishColors = ["#F4C430", "#C1272D", "#fff"];
  return (
    <g>
      {/* coral */}
      <path d="M110 240 L110 190 Q110 175 125 178 Q130 165 145 170 Q150 158 165 165 Q170 190 160 240 Z" fill={coral} />
      <path d="M290 240 L290 200 Q290 185 278 188 Q275 175 262 180 Q265 210 270 240 Z" fill={shade(coral, 0.2)} />
      {/* tropical fish */}
      {[[170, 140, fishColors[0]], [220, 175, fishColors[1]], [250, 130, fishColors[2]]].map(([x, y, c], i) => (
        <g key={i}>
          <ellipse cx={x as number} cy={y as number} rx="20" ry="13" fill={c as string} stroke={dark} strokeWidth="1.5" />
          <polygon points={`${(x as number) - 20},${y} ${(x as number) - 32},${(y as number) - 8} ${(x as number) - 32},${(y as number) + 8}`} fill={c as string} stroke={dark} strokeWidth="1.5" />
          <circle cx={(x as number) + 10} cy={(y as number) - 3} r="2" fill={dark} />
        </g>
      ))}
    </g>
  );
};

const MosaicoNacionalidades: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#D4A017", "#1565C0", "#2E7D32", "#C1272D", "#6A1B9A"];
  return (
    <g>
      {colors.map((c, i) => (
        <g key={c}>
          <line x1={115 + i * 34} y1="235" x2={115 + i * 34} y2="120" stroke={dark} strokeWidth="4" strokeLinecap="round" />
          <polygon points={`${115 + i * 34},120 ${145 + i * 34},128 ${115 + i * 34},136`} fill={c} />
        </g>
      ))}
    </g>
  );
};

const PuenteReinaEmma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="95" y="200" width="225" height="50" fill={water} opacity="0.6" />
      {/* pedestrian bridge deck */}
      <rect x="105" y="175" width="210" height="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* floating pontoons beneath */}
      {[120, 150, 180, 210, 240, 270, 300].map((x) => (
        <ellipse key={x} cx={x} cy="196" rx="14" ry="8" fill={dark} />
      ))}
      {/* railing */}
      {[110, 150, 190, 230, 270, 310].map((x) => (
        <line key={x} x1={x} y1="175" x2={x} y2="160" stroke={dark} strokeWidth="2" />
      ))}
      <line x1="105" y1="160" x2="315" y2="160" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const KuraHulandaMemoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const flame = "#F4A300";
  return (
    <g>
      {/* stone colonial courtyard */}
      <rect x="105" y="150" width="200" height="90" fill={accentColor} opacity="0.5" />
      {[120, 150, 180, 210, 240, 270].map((x) => (
        <rect key={x} x={x} y="150" width="24" height="90" fill={dark} opacity="0.15" />
      ))}
      <path d="M105 150 L155 105 L255 105 L305 150 Z" fill={dark} />
      {/* archway */}
      <path d="M180 240 L180 190 Q180 165 205 165 Q230 165 230 190 L230 240 Z" fill="#1A1A1A" opacity="0.7" />
      {/* lit candle */}
      <rect x="255" y="205" width="14" height="35" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      <path d="M262 205 Q257 192 262 180 Q267 192 262 205 Z" fill={flame} />
    </g>
  );
};

export const curacaoIllustrations: Record<string, IllustrationDefinition> = {
  "willemstad-colorida": { component: WillemstadColorida },
  "curazao-azul-licor": { component: CurazaoAzulLicor },
  "idioma-papiamento": { component: IdiomaPapiamento },
  "pais-constituyente-holanda": { component: PaisConstituyenteHolanda },
  "fuera-cinturon-huracanes": { component: FueraCinturonHuracanes },
  "rebelion-tula-1795": { component: RebelionTula1795 },
  "arrecifes-buceo": { component: ArrecifesBuceo },
  "mosaico-nacionalidades": { component: MosaicoNacionalidades },
  "puente-reina-emma": { component: PuenteReinaEmma },
  "kura-hulanda-memoria": { component: KuraHulandaMemoria },
};
