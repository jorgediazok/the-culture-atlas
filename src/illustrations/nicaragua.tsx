import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaIslaDeOmetepeYSusDosVolcanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.5" />
      <polygon points="110,240 165,120 220,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="200,240 250,150 300,240" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M160 128 Q165 118 170 128" fill="#8C8C8C" opacity="0.7" />
      <ellipse cx="205" cy="238" rx="120" ry="8" fill="#1B5E7A" opacity="0.6" />
    </g>
  );
};

const LosTiburonesDeAguaDulceDelLagoDeNicaragua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 L320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.6" />
      <path d="M140 180 Q170 165 220 180 Q245 185 250 175 Q255 165 265 168 Q258 178 258 185 Q245 200 205 198 Q165 200 140 180 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <polygon points="255,175 268,160 262,178" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="165" cy="180" r="3" fill="#0F3D45" />
      <path d="M170 192 L178 200 L166 200 Z" fill="#F5F0E6" opacity="0.85" />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={i} x1={150 + i * 10} y1="200" x2={150 + i * 10} y2="215" stroke="#5C7A3A" strokeWidth="3" opacity="0.5" />
      ))}
    </g>
  );
};

const GranadaLaCiudadMasAntiguaDelContinente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#C1272D", tint(accentColor, 0.2)];
  return (
    <g>
      {[110, 175, 240].map((x, i) => (
        <g key={x}>
          <rect x={x} y="170" width="55" height="70" fill={colors[i]} stroke={dark} strokeWidth="2.5" />
          <rect x={x - 4} y="160" width="63" height="12" fill={dark} opacity="0.5" />
          <rect x={x + 15} y="195" width="14" height="18" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
      <ellipse cx="205" cy="245" rx="120" ry="6" fill="#8C8C8C" opacity="0.4" />
    </g>
  );
};

const LaCatedralDeLeonYLaTumbaDeRubenDario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="160" width="110" height="80" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <ellipse cx="180" cy="150" rx="20" ry="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="230" cy="150" rx="20" ry="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="195" y="230" width="20" height="10" fill={accentColor} />
      <polygon points="185,240 195,220 205,240" fill="#C9A227" stroke={dark} strokeWidth="2" />
      <path d="M190 238 L188 228 L195 232 L198 224 L205 230 L210 222 L215 232 L222 228 L220 238 Z" fill={dark} opacity="0.7" />
    </g>
  );
};

const RubenDarioElPadreDelModernismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 235 L140 150 L270 150 L270 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="150" x2="205" y2="235" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      {[170, 195, 220].map((y) => (
        <line key={y} x1="150" y1={y} x2="198" y2={y - 4} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      <path d="M245 130 L268 100 L275 108 L252 138 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="248,133 258,131 250,141" fill={dark} />
      <path d="M170 110 Q190 95 205 108 Q195 112 190 122 Q178 118 170 110 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const ElVolcanMasayaYSuLagoDeLava: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,240 205,110 320,240" fill="#3A2418" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="205" rx="55" ry="20" fill="#3A2418" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="205" rx="40" ry="13" fill={accentColor} />
      <ellipse cx="205" cy="205" rx="22" ry="7" fill="#F5D060" opacity="0.9" />
      <path d="M170 150 Q180 135 175 118 M240 155 Q232 140 238 122" stroke="#8C8C8C" strokeWidth="4" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
};

const ElGuegueenseElTeatroQueSeBurloDeEspana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="140" r="30" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M185 130 Q205 118 225 130 Q220 138 205 138 Q190 138 185 130 Z" fill="#3A2418" />
      <circle cx="192" cy="145" r="4" fill="#0F3D45" />
      <circle cx="218" cy="145" r="4" fill="#0F3D45" />
      <path d="M195 158 Q205 165 215 158" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M175 240 L175 175 Q205 165 235 175 L235 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="160" y1="240" x2="160" y2="170" stroke="#5C3A21" strokeWidth="4" />
      <ellipse cx="160" cy="165" rx="8" ry="5" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElSacuanjocheLaFlorNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const petals = [
    [205, 130],
    [235, 150],
    [225, 185],
    [185, 185],
    [175, 150],
  ];
  return (
    <g>
      {petals.map(([cx, cy], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="22" ry="14" fill="#F5F0E6" stroke={dark} strokeWidth="2.2" transform={`rotate(${i * 72} ${cx} ${cy})`} />
      ))}
      <circle cx="205" cy="163" r="14" fill="#D9A441" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="200" x2="205" y2="240" stroke="#3E5C2E" strokeWidth="4" />
    </g>
  );
};

const LaGigantonaYElEnanoCabezon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="180" cy="110" r="16" fill="#E8C39E" stroke={dark} strokeWidth="2.2" />
      <path d="M160 235 L155 130 Q155 122 180 122 Q205 122 205 130 L200 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <circle cx="260" cy="205" r="26" fill="#E8C39E" stroke={dark} strokeWidth="2.5" />
      <path d="M245 230 L242 235 L278 235 L275 230 Q260 220 245 230 Z" fill="#C1272D" stroke={dark} strokeWidth="2" />
      <line x1="260" y1="235" x2="260" y2="240" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const LasIslasDelMaizYLaCulturaCreole: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 220 Q205 205 320 220 L320 250 L90 250 Z" fill="#1B7A8C" opacity="0.6" />
      <ellipse cx="205" cy="215" rx="55" ry="14" fill="#D9C9A3" stroke={dark} strokeWidth="2.5" />
      <line x1="185" y1="215" x2="185" y2="170" stroke="#5C3A21" strokeWidth="4" />
      <path d="M185 170 Q160 175 155 195 M185 172 Q210 170 220 190 M185 175 Q175 155 190 140" fill="none" stroke="#5C7A3A" strokeWidth="6" strokeLinecap="round" />
      {[[130, 200], [270, 195]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) + 15} ${(y as number) - 10} ${(x as number) + 30} ${y}`} fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" opacity="0.6" />
      ))}
    </g>
  );
};

const LaMarimbaDeArcoNicaraguense: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C8996B";
  return (
    <g>
      {/* seated body, neck rises into the head's interior */}
      <path d="M180 148 L212 148 L226 185 L232 235 L170 235 Q162 205 172 185 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="196" cy="148" r="16" fill={skin} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="180" cy="238" rx="10" ry="5" fill={skin} />
      <ellipse cx="222" cy="238" rx="10" ry="5" fill={skin} />
      {/* marimba resting on the lap, keys stepped to suggest the curved bow */}
      <rect x="150" y="218" width="150" height="10" fill={dark} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={158 + i * 17} y={208 - Math.abs(3 - i) * 3} width="13" height={18 + Math.abs(3 - i) * 2} fill={i % 2 === 0 ? "#D9B36B" : "#C9A227"} stroke={dark} strokeWidth="1" />
      ))}
      <line x1="205" y1="170" x2="185" y2="205" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <circle cx="183" cy="207" r="5" fill={dark} />
      <line x1="215" y1="172" x2="245" y2="205" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <circle cx="247" cy="207" r="5" fill={dark} />
    </g>
  );
};

const LasRosquillasDeSomotoYElQueso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D9B36B";
  return (
    <g>
      {[
        [160, 215],
        [210, 225],
        [260, 210],
        [185, 195],
        [235, 190],
      ].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="30" ry="18" fill={gold} stroke={dark} strokeWidth="2.5" />
          <ellipse cx={x} cy={y} rx="12" ry="7" fill="#F5F0E6" />
        </g>
      ))}
      <path d="M270 235 L270 205 L310 205 L310 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="290" cy="205" rx="20" ry="6" fill="#5C3A21" />
      <path d="M310 212 Q325 212 325 222 Q325 232 310 230" fill="none" stroke={dark} strokeWidth="3" />
    </g>
  );
};

export const nicaraguaIllustrations: Record<string, IllustrationDefinition> = {
  "la-isla-de-ometepe-y-sus-dos-volcanes": { component: LaIslaDeOmetepeYSusDosVolcanes },
  "los-tiburones-de-agua-dulce-del-lago-de-nicaragua": { component: LosTiburonesDeAguaDulceDelLagoDeNicaragua },
  "granada-la-ciudad-mas-antigua-del-continente": { component: GranadaLaCiudadMasAntiguaDelContinente },
  "la-catedral-de-leon-y-la-tumba-de-ruben-dario": { component: LaCatedralDeLeonYLaTumbaDeRubenDario },
  "ruben-dario-el-padre-del-modernismo": { component: RubenDarioElPadreDelModernismo },
  "el-volcan-masaya-y-su-lago-de-lava": { component: ElVolcanMasayaYSuLagoDeLava },
  "el-guegueense-el-teatro-que-se-burlo-de-espana": { component: ElGuegueenseElTeatroQueSeBurloDeEspana },
  "el-sacuanjoche-la-flor-nacional": { component: ElSacuanjocheLaFlorNacional },
  "la-gigantona-y-el-enano-cabezon": { component: LaGigantonaYElEnanoCabezon },
  "las-islas-del-maiz-y-la-cultura-creole": { component: LasIslasDelMaizYLaCulturaCreole },
  "la-marimba-de-arco-nicaraguense": { component: LaMarimbaDeArcoNicaraguense },
  "las-rosquillas-de-somoto-y-el-queso": { component: LasRosquillasDeSomotoYElQueso },
};
