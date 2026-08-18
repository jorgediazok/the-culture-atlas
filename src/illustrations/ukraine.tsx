import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElKyivPecherskLavraMonasterioDeLasCuevas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="150" width="60" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="192" y="100" width="26" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M188 100 Q205 65 222 100 Q214 88 205 88 Q196 88 188 100 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="65" x2="205" y2="50" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="48" r="3" fill={accentColor} />
      <rect x="120" y="200" width="45" height="40" fill="#8B7355" stroke={dark} strokeWidth="2.5" />
      <path d="M130 200 Q142 185 155 200" fill="none" stroke={dark} strokeWidth="2" />
      {[[145, 218], [130, 222]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill="#F5C518" opacity="0.9" />
      ))}
    </g>
  );
};

const LaPysankaElHuevoDePascuaUcraniano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M205 100 Q260 100 260 175 Q260 235 205 240 Q150 235 150 175 Q150 100 205 100 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M150 155 Q205 140 260 155" fill="none" stroke={accentColor} strokeWidth="10" />
      <path d="M150 185 Q205 200 260 185" fill="none" stroke="#3E5C40" strokeWidth="10" />
      {[170, 205, 240].map((x) => (
        <line key={x} x1={x} y1="118" x2={x} y2="222" stroke="#D4941E" strokeWidth="5" />
      ))}
      <rect x="270" y="190" width="10" height="45" rx="3" fill="#B8860B" stroke={dark} strokeWidth="2" transform="rotate(20 275 212)" />
    </g>
  );
};

const LaVyshyvankaLaCamisaBordadaUcraniana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 120 L170 100 L190 90 L220 90 L240 100 L240 120 L270 140 L255 165 L240 150 L240 235 L170 235 L170 150 L155 165 L140 140 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M190 90 Q205 108 220 90" fill="none" stroke={accentColor} strokeWidth="4" />
      {[178, 232].map((x) => (
        <rect key={x} x={x - 5} y="110" width="10" height="40" fill={accentColor} opacity="0.8" />
      ))}
      <rect x="185" y="215" width="40" height="14" fill={accentColor} opacity="0.85" />
      {[190, 200, 210, 220].map((x) => (
        <rect key={x} x={x} y="217" width="4" height="10" fill="#1A1A1A" opacity="0.6" />
      ))}
    </g>
  );
};

const ChernobilLaNaturalezaQueReclamoLaZona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="130" width="70" height="100" fill="#8B8378" stroke={dark} strokeWidth="2.5" />
      <rect x="210" y="150" width="55" height="80" fill="#9E9A92" stroke={dark} strokeWidth="2.5" />
      {[[130, 150], [155, 180], [140, 200], [220, 170], [240, 200]].map(([x, y]) => (
        <path key={x + "-" + y} d={`M${x} ${y} Q${x + 15} ${y - 10} ${x + 5} ${y + 20} Q${x - 5} ${y + 35} ${x + 10} ${y + 45}`} fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M100 235 L115 210 L130 220 L150 200 L165 218 L180 235 Z" fill="#5B5B5B" stroke={dark} strokeWidth="2.5" />
      <polygon points="119,207 116,196 123,203" fill="#5B5B5B" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosCosacosDeZaporiyiaJinetesLibres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 225 Q110 195 135 185 Q140 165 165 168 Q195 155 225 168 Q255 175 260 200 Q265 220 245 228 L135 230 Z" fill="#5C3A21" stroke={dark} strokeWidth="3" />
      <path d="M165 168 Q175 140 200 130 Q210 128 208 138 Q205 148 195 155" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <path d="M120 225 L108 245 M150 230 L148 250 M215 230 L217 250 M245 228 L250 248" stroke="#3E2E24" strokeWidth="4" strokeLinecap="round" />
      <path d="M165 168 Q160 155 168 145" fill="none" stroke="#1A1A1A" strokeWidth="3" opacity="0.6" />
      <circle cx="195" cy="150" r="14" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M195 138 Q195 118 202 108" stroke="#1A1A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M180 172 Q195 160 215 172 L212 210 L183 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="215" y1="180" x2="255" y2="150" stroke="#C9C9C9" strokeWidth="3.5" strokeLinecap="round" />
    </g>
  );
};

const ElBorschtPatrimonioCulturalDeUcrania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="210" rx="70" ry="22" fill="#8B7355" stroke={dark} strokeWidth="3" />
      <path d="M140 205 Q140 165 205 165 Q270 165 270 205 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 190 Q205 178 240 190 Q220 198 205 196 Q190 198 170 190 Z" fill="#F5F0E6" opacity="0.9" />
      {[[185, 175], [220, 178]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill="#3F7D2E" opacity="0.8" />
      ))}
    </g>
  );
};

const LaCatedralDeSantaSofiaDeKiev: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const domes = [
    { x: 150, h: 30 },
    { x: 205, h: 42 },
    { x: 260, h: 30 },
  ];
  return (
    <g>
      <rect x="120" y="185" width="170" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {domes.map((d) => (
        <g key={d.x}>
          <rect x={d.x - 12} y={185 - d.h} width="24" height={d.h} fill="#F5F0E6" stroke={dark} strokeWidth="2" />
          <path d={`M${d.x - 14} ${185 - d.h} Q${d.x} ${185 - d.h - 28} ${d.x + 14} ${185 - d.h} Z`} fill="#D9A521" stroke={dark} strokeWidth="2" />
          <line x1={d.x} y1={185 - d.h - 28} x2={d.x} y2={185 - d.h - 38} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      {[145, 175, 205, 235, 265].map((x) => (
        <rect key={x} x={x - 6} y="200" width="12" height="40" fill={accentColor} opacity="0.5" />
      ))}
    </g>
  );
};

const LaBanduraYLosBardosKobzari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const strings = [155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255];
  return (
    <g>
      <ellipse cx="205" cy="185" rx="70" ry="55" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      {strings.map((x) => (
        <line key={x} x1={x} y1="140" x2={x + 15} y2="230" stroke="#D9C9A3" strokeWidth="1.8" />
      ))}
      <rect x="185" y="95" width="14" height="50" fill="#5C3A21" stroke={dark} strokeWidth="2.5" transform="rotate(-8 192 120)" />
      <circle cx="205" cy="185" r="18" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElHopakLaDanzaNacionalDeUcrania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="16" fill="#D9B48A" stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="90" width="40" height="14" fill="#1E5631" stroke={dark} strokeWidth="2" />
      <path d="M188 148 Q205 138 222 148 L228 180 L182 180 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M188 178 Q140 185 115 220" fill="none" stroke="#D9B48A" strokeWidth="16" strokeLinecap="round" />
      <path d="M222 178 Q280 175 300 200" fill="none" stroke="#D9B48A" strokeWidth="16" strokeLinecap="round" />
      <path d="M115 220 L100 235 M300 200 L318 195" stroke="#5C3A21" strokeWidth="6" strokeLinecap="round" />
      <path d="M195 175 Q170 200 175 235" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" opacity="0.85" />
    </g>
  );
};

const LosGirasolesElPaisajeDoradoDeUcrania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const flowers = [
    [130, 130, 26], [190, 100, 32], [250, 125, 28], [160, 175, 22], [225, 180, 24], [290, 160, 20],
  ];
  return (
    <g>
      <rect x="90" y="80" width="230" height="90" fill="#1B5FAE" opacity="0.25" />
      {flowers.map(([x, y, r], i) => (
        <g key={i}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
            <ellipse key={rot} cx={x} cy={y - r * 0.65} rx="6" ry="12" fill={accentColor} transform={`rotate(${rot} ${x} ${y})`} />
          ))}
          <circle cx={x} cy={y} r={r * 0.35} fill="#5C3A21" stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <rect x="90" y="220" width="230" height="30" fill="#3F7D2E" opacity="0.5" />
    </g>
  );
};

export const ukraineIllustrations: Record<string, IllustrationDefinition> = {
  "el-kyiv-pechersk-lavra-monasterio-de-las-cuevas": { component: ElKyivPecherskLavraMonasterioDeLasCuevas },
  "la-pysanka-el-huevo-de-pascua-ucraniano": { component: LaPysankaElHuevoDePascuaUcraniano },
  "la-vyshyvanka-la-camisa-bordada-ucraniana": { component: LaVyshyvankaLaCamisaBordadaUcraniana },
  "chernobil-la-naturaleza-que-reclamo-la-zona": { component: ChernobilLaNaturalezaQueReclamoLaZona },
  "los-cosacos-de-zaporiyia-jinetes-libres": { component: LosCosacosDeZaporiyiaJinetesLibres },
  "el-borscht-patrimonio-cultural-de-ucrania": { component: ElBorschtPatrimonioCulturalDeUcrania },
  "la-catedral-de-santa-sofia-de-kiev": { component: LaCatedralDeSantaSofiaDeKiev },
  "la-bandura-y-los-bardos-kobzari": { component: LaBanduraYLosBardosKobzari },
  "el-hopak-la-danza-nacional-de-ucrania": { component: ElHopakLaDanzaNacionalDeUcrania },
  "los-girasoles-el-paisaje-dorado-de-ucrania": { component: LosGirasolesElPaisajeDoradoDeUcrania },
};
