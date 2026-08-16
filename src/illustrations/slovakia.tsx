import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CastilloDeBratislavaLaMesaInvertida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="150" width="110" height="80" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[150, 232].map((x) => (
        <rect key={x} x={x} y="130" width="28" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="197" y="200" width="16" height="30" fill={dark} opacity="0.5" />
      <rect x="165" y="170" width="16" height="16" fill={accentColor} opacity="0.7" />
      <rect x="230" y="170" width="16" height="16" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const IglesiasDeMaderaDeLosCarpatos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="185" width="60" height="55" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="175,185 235,185 220,160 190,160" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
      <rect x="195" y="145" width="20" height="20" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="195,145 215,145 205,125" fill={dark} />
      <rect x="197" y="210" width="16" height="30" fill={dark} opacity="0.5" />
    </g>
  );
};

const AltosTatrasLaCordilleraAlpinaMasPequena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L140 130 L190 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M170 250 L220 100 L270 250 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M250 250 L285 160 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M200 150 L220 100 L240 150 Z" fill="#F5F0E6" opacity="0.9" />
      <ellipse cx="205" cy="240" rx="30" ry="8" fill="#3D8FB0" opacity="0.6" />
    </g>
  );
};

const CastilloDeDevinSimboloNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L130 150 L280 150 L320 250 Z" fill="#8B8378" opacity="0.6" />
      <path d="M150 250 L150 190 Q150 175 165 175 L190 175 Q205 175 205 190 L205 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="220" y="200" width="20" height="50" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <path d="M90 250 Q205 235 320 250" fill="none" stroke="#3D8FB0" strokeWidth="4" opacity="0.6" />
    </g>
  );
};

const BryndzoveHaluskyElPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="225" rx="75" ry="16" fill="#E8E4DC" stroke={dark} strokeWidth="2.5" />
      {[[155, 205], [180, 195], [205, 200], [230, 193], [255, 205]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="14" ry="10" fill={i % 2 === 0 ? "#F5F0E6" : tint(accentColor, 0.35)} stroke={dark} strokeWidth="1.5" />
      ))}
      <ellipse cx="205" cy="215" rx="60" ry="10" fill={accentColor} opacity="0.5" />
    </g>
  );
};

const FujaraLaFlautaGigante: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="175" cy="140" r="13" fill={skin} />
      <path d="M165 155 Q175 148 190 158 L185 200 L160 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="185" y1="160" x2="255" y2="245" stroke="#8B5A2B" strokeWidth="8" strokeLinecap="round" />
      {[190, 205, 220].map((v, i) => (
        <circle key={v} cx={190 + i * 22} cy={175 + i * 22} r="3" fill={dark} opacity="0.6" />
      ))}
    </g>
  );
};

const HockeySobreHieloPasionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="20" fill="#B0D8E8" opacity="0.7" />
      <path d="M180 130 L175 220 L200 220 L235 145 L215 145 L200 190 L195 130 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="250" cy="222" rx="14" ry="6" fill="#1A1A1A" />
    </g>
  );
};

const DivorcioDeTerciopeloSeparacionPacifica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="150" width="90" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="210" y="150" width="90" height="90" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="140" x2="205" y2="250" stroke={dark} strokeWidth="3" strokeDasharray="8 6" />
    </g>
  );
};

const CuevasDeAragonitoUnicasEnElMundo: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <path d="M90 250 Q205 230 320 250 L320 130 Q205 150 90 130 Z" fill="#2E4A3E" opacity="0.4" />
      {[[150, 200], [205, 180], [260, 210]].map(([x, y], i) => (
        <path key={x as number} d={`M${x} ${y} L${(x as number) - 10} ${(y as number) + 25} M${x} ${y} L${(x as number) + 10} ${(y as number) + 25} M${x} ${y} L${x} ${(y as number) + 30}`} stroke={i % 2 === 0 ? accentColor : "#F5F0E6"} strokeWidth="3" strokeLinecap="round" />
      ))}
    </g>
  );
};

const AndyWarholRaicesEslovacas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="130" width="110" height="110" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="175" r="28" fill="#F5F0E6" />
      <path d="M180 205 Q205 195 230 205 L225 235 L185 235 Z" fill="#F5F0E6" />
      <path d="M180 155 Q205 145 230 155" fill="none" stroke={dark} strokeWidth="4" opacity="0.6" />
    </g>
  );
};

export const slovakiaIllustrations: Record<string, IllustrationDefinition> = {
  "castillo-de-bratislava-la-mesa-invertida": { component: CastilloDeBratislavaLaMesaInvertida },
  "iglesias-de-madera-de-los-carpatos": { component: IglesiasDeMaderaDeLosCarpatos },
  "altos-tatras-la-cordillera-alpina-mas-pequena": { component: AltosTatrasLaCordilleraAlpinaMasPequena },
  "castillo-de-devin-simbolo-nacional": { component: CastilloDeDevinSimboloNacional },
  "bryndzove-halusky-el-plato-nacional": { component: BryndzoveHaluskyElPlatoNacional },
  "fujara-la-flauta-gigante": { component: FujaraLaFlautaGigante },
  "hockey-sobre-hielo-pasion-nacional": { component: HockeySobreHieloPasionNacional },
  "divorcio-de-terciopelo-separacion-pacifica": { component: DivorcioDeTerciopeloSeparacionPacifica },
  "cuevas-de-aragonito-unicas-en-el-mundo": { component: CuevasDeAragonitoUnicasEnElMundo },
  "andy-warhol-raices-eslovacas": { component: AndyWarholRaicesEslovacas },
};
