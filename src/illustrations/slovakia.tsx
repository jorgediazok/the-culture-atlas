import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CastilloDeBratislavaLaMesaInvertida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="145" width="170" height="100" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[105, 265].map((x) => (
        <rect key={x} x={x} y="115" width="40" height="40" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      ))}
      <rect x="190" y="205" width="24" height="40" fill={dark} opacity="0.5" />
      <rect x="145" y="170" width="22" height="22" fill={accentColor} opacity="0.75" />
      <rect x="237" y="170" width="22" height="22" fill={accentColor} opacity="0.75" />
      <path d="M95 250 Q205 262 315 250" fill="none" stroke="#3D8FB0" strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const IglesiasDeMaderaDeLosCarpatos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="185" width="130" height="65" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="140,185 270,185 245,148 165,148" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <rect x="178" y="118" width="54" height="35" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="178,118 232,118 205,80" fill={dark} />
      <rect x="190" y="215" width="20" height="35" fill={dark} opacity="0.5" />
      <path d="M95 250 Q205 262 315 250" fill="none" stroke="#3D8FB0" strokeWidth="4" opacity="0.4" />
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
      <ellipse cx="205" cy="215" rx="115" ry="30" fill="#E8E4DC" stroke={dark} strokeWidth="3" />
      {[[125, 195], [160, 178], [195, 188], [230, 175], [265, 190], [290, 205]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="20" ry="15" fill={i % 2 === 0 ? "#F5F0E6" : tint(accentColor, 0.35)} stroke={dark} strokeWidth="2" />
      ))}
      <ellipse cx="205" cy="198" rx="95" ry="16" fill={accentColor} opacity="0.5" />
    </g>
  );
};

const FujaraLaFlautaGigante: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="140" cy="120" r="20" fill={skin} />
      <path d="M124 145 Q140 133 162 148 L152 220 L112 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="152" y1="155" x2="290" y2="248" stroke="#8B5A2B" strokeWidth="13" strokeLinecap="round" />
      {[175, 205, 235, 262].map((v, i) => (
        <circle key={v} cx={v} cy={155 + i * 24} r="4.5" fill={dark} opacity="0.6" />
      ))}
      <path d="M95 250 Q205 260 315 250" fill="none" stroke="#3D8FB0" strokeWidth="4" opacity="0.4" />
    </g>
  );
};

const HockeySobreHieloPasionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="88" y="222" width="235" height="26" fill="#B0D8E8" opacity="0.7" />
      <path d="M155 100 L148 222 L182 222 L228 130 L200 130 L182 178 L175 100 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="270" cy="228" rx="20" ry="8" fill="#1A1A1A" />
      <path d="M100 235 Q205 245 310 235" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
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
      <rect x="110" y="110" width="190" height="140" fill={accentColor} stroke={dark} strokeWidth="3.5" />
      <circle cx="205" cy="170" r="42" fill="#F5F0E6" />
      <path d="M170 210 Q205 195 240 210 L232 250 L178 250 Z" fill="#F5F0E6" />
      <path d="M170 145 Q205 130 240 145" fill="none" stroke={dark} strokeWidth="5" opacity="0.6" />
    </g>
  );
};

const LudovitSturPadreDelEslovacoEscrito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <rect x="120" y="194" width="170" height="12" fill={dark} />
      <rect x="130" y="206" width="14" height="44" fill={dark} />
      <rect x="266" y="206" width="14" height="44" fill={dark} />
      <path d="M148 172 L204 180 L204 194 L148 190 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M204 180 L262 172 L262 190 L204 194 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <line x1="158" y1="180" x2="196" y2="184" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="212" y1="184" x2="252" y2="180" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <circle cx="185" cy="120" r="22" fill={skin} />
      <path d="M167 148 Q185 133 205 151 L198 195 L158 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="203" y1="152" x2="240" y2="118" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M240 118 L253 103 L246 116 L256 113 L242 128 Z" fill={dark} />
      <text x="252" y="92" fontSize="26" fontWeight="700" fill={accentColor} fontFamily="serif">Ľ</text>
      <text x="278" y="115" fontSize="20" fontWeight="700" fill={dark} fontFamily="serif">š</text>
      <text x="246" y="142" fontSize="18" fontWeight="700" fill={accentColor} fontFamily="serif" opacity="0.85">ä</text>
    </g>
  );
};

const KrojElTrajeFolcloricoRegional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const embroider = "#C1272D";
  return (
    <g>
      <path d="M140 250 Q205 150 270 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M175 250 Q205 190 235 250 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {[[190, 225], [205, 210], [220, 225], [205, 238]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={embroider} />
      ))}
      <path d="M168 150 Q205 135 242 150 L232 195 L178 195 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      <circle cx="160" cy="155" r="20" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="250" cy="155" r="20" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="118" r="24" fill={skin} />
      {[[185, 100], [205, 92], [225, 100]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill={embroider} />
      ))}
      <path d="M188 108 Q180 130 185 150" fill="none" stroke={embroider} strokeWidth="3" />
      <path d="M222 108 Q230 130 225 150" fill="none" stroke={embroider} strokeWidth="3" />
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
  "ludovit-stur-padre-del-eslovaco-escrito": { component: LudovitSturPadreDelEslovacoEscrito },
  "kroj-el-traje-folclorico-regional": { component: KrojElTrajeFolcloricoRegional },
};
