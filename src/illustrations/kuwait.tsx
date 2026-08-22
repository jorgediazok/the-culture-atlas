import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LasTorresDeKuwait: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.4" />
      <rect x="197" y="150" width="14" height="95" fill="#D9D2C0" stroke={dark} strokeWidth="2.5" />
      <circle cx="204" cy="140" r="36" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="204" cy="105" r="18" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line key={deg} x1="204" y1="140" x2="204" y2="106" stroke={dark} strokeWidth="1" opacity="0.35" transform={`rotate(${deg} 204 140)`} />
      ))}
      <rect x="265" y="185" width="10" height="60" fill="#D9D2C0" stroke={dark} strokeWidth="2" />
      <circle cx="270" cy="178" r="18" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ElZocoAlMubarakiya: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stalls = [
    { x: 105, fill: accentColor },
    { x: 160, fill: "#C9A227" },
    { x: 215, fill: "#8B1A1A" },
    { x: 270, fill: tint(accentColor, 0.2) },
  ];
  return (
    <g>
      <path d="M90 150 Q205 120 320 150 L320 165 Q205 138 90 165 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      {stalls.map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="165" width="40" height="60" fill={s.fill} stroke={dark} strokeWidth="2" />
          <path d={`M${s.x - 4} 165 L${s.x + 44} 165 L${s.x + 40} 150 L${s.x} 150 Z`} fill={dark} opacity="0.7" />
        </g>
      ))}
      <ellipse cx="205" cy="240" rx="115" ry="8" fill="#8B7355" opacity="0.5" />
    </g>
  );
};

const LosDhowsKuwaitiesYSuTradicionNaval: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 235 L320 235 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <path d="M120 235 L290 235 L265 205 L145 205 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="205" y1="205" x2="205" y2="100" stroke="#5C3A21" strokeWidth="4" />
      <path d="M205 105 L270 190 Q235 195 205 180 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <line x1="150" y1="235" x2="150" y2="248" stroke={dark} strokeWidth="3" opacity="0.5" />
      <line x1="260" y1="235" x2="260" y2="248" stroke={dark} strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const LaAsambleaNacionalPioneraDelGolfo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="180" width="170" height="60" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M110 180 Q140 145 205 150 Q270 145 300 180 Q205 165 110 180 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M140 178 Q170 158 205 160 Q240 158 270 178" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {[145, 175, 205, 235, 265].map((x) => (
        <rect key={x} x={x - 6} y="195" width="12" height="35" fill={dark} opacity="0.5" />
      ))}
    </g>
  );
};

const LaDiwaniyaLaSalaDeReunionKuwaiti: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const person = (x: number, fill: string) => (
    <g key={x}>
      <circle cx={x} cy="185" r="12" fill="#E8C39E" stroke={dark} strokeWidth="1.8" />
      <path d={`M${x - 18} 240 Q${x - 20} 205 ${x} 200 Q${x + 20} 205 ${x + 18} 240 Z`} fill={fill} stroke={dark} strokeWidth="2" />
    </g>
  );
  return (
    <g>
      <ellipse cx="205" cy="230" rx="110" ry="16" fill="#C9A96E" opacity="0.5" />
      {person(140, accentColor)}
      {person(205, tint(accentColor, 0.2))}
      {person(270, accentColor)}
      <ellipse cx="205" cy="225" rx="30" ry="12" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M195 218 Q205 205 215 218" fill="none" stroke="#F5F0E6" strokeWidth="3" />
    </g>
  );
};

const ElQarqeeanLaNocheDeLosNinosDisfrazados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const kid = (x: number, fill: string, h: number) => (
    <g key={x}>
      <circle cx={x} cy={230 - h} r="11" fill="#E8C39E" stroke={dark} strokeWidth="1.8" />
      <path d={`M${x - 14} 240 L${x - 12} ${240 - h + 8} Q${x} ${230 - h} ${x + 12} ${240 - h + 8} L${x + 14} 240 Z`} fill={fill} stroke={dark} strokeWidth="2" />
      <path d={`M${x - 8} 238 L${x - 4} 226 L${x + 4} 234 L${x + 10} 224`} fill="none" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
  return (
    <g>
      <rect x="110" y="150" width="60" height="90" fill="#D9C9A3" stroke={dark} strokeWidth="3" />
      <rect x="130" y="180" width="20" height="60" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      {kid(200, accentColor, 65)}
      {kid(240, "#8B1A1A", 55)}
      {kid(275, tint(accentColor, 0.25), 60)}
    </g>
  );
};

const FailakaLaIslaDeDilmunYAlejandro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const columns = [140, 175, 210, 245];
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      {columns.map((x, i) => (
        <rect key={x} x={x} y={i % 2 === 0 ? 140 : 160} width="16" height={i % 2 === 0 ? 105 : 85} fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="130" y="235" width="140" height="10" fill="#6B6B58" />
      <path d="M280 200 Q290 180 285 160" fill="none" stroke="#5C7A3A" strokeWidth="5" opacity="0.6" />
    </g>
  );
};

const ElTejidoSaduDeLosBeduinos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#A0522D", accentColor, "#C9A227", "#5C3A21"];
  return (
    <g>
      <rect x="110" y="130" width="190" height="100" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x="110" y={130 + i * 12.5} width="190" height="8" fill={colors[i % colors.length]} opacity="0.85" />
      ))}
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${140 + i * 60} 130 L${150 + i * 60} 230`} stroke={dark} strokeWidth="1" opacity="0.25" />
      ))}
    </g>
  );
};

const LaColeccionAlSabahDeArteIslamico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="120" width="150" height="115" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M150 175 L150 145 L205 130 L260 145 L260 175 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="130" x2="205" y2="175" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <path d="M150 195 Q170 185 190 195 Q210 185 230 195 Q250 185 260 195" fill="none" stroke="#C9A227" strokeWidth="3" />
      <circle cx="205" cy="210" r="8" fill="#C9A227" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaGranMezquitaDeKuwait: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="180" width="150" height="60" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="150" rx="55" ry="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="170" y="150" width="70" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="112" r="6" fill="#C9A227" stroke={dark} strokeWidth="1.5" />
      <rect x="285" y="130" width="16" height="110" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.5" />
      <polygon points="285,130 301,130 293,110" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M180 240 L180 205 Q205 190 230 205 L230 240 Z" fill="#0F3D45" />
    </g>
  );
};

export const kuwaitIllustrations: Record<string, IllustrationDefinition> = {
  "las-torres-de-kuwait": { component: LasTorresDeKuwait },
  "el-zoco-al-mubarakiya": { component: ElZocoAlMubarakiya },
  "los-dhows-kuwaities-y-su-tradicion-naval": { component: LosDhowsKuwaitiesYSuTradicionNaval },
  "la-asamblea-nacional-pionera-del-golfo": { component: LaAsambleaNacionalPioneraDelGolfo },
  "la-diwaniya-la-sala-de-reunion-kuwaiti": { component: LaDiwaniyaLaSalaDeReunionKuwaiti },
  "el-qarqeean-la-noche-de-los-ninos-disfrazados": { component: ElQarqeeanLaNocheDeLosNinosDisfrazados },
  "failaka-la-isla-de-dilmun-y-alejandro": { component: FailakaLaIslaDeDilmunYAlejandro },
  "el-tejido-sadu-de-los-beduinos": { component: ElTejidoSaduDeLosBeduinos },
  "la-coleccion-al-sabah-de-arte-islamico": { component: LaColeccionAlSabahDeArteIslamico },
  "la-gran-mezquita-de-kuwait": { component: LaGranMezquitaDeKuwait },
};
