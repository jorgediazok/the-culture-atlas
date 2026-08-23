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

function camel(x: number, y: number, scale: number, dark: string, body: string) {
  return (
    <g key={`camel-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-30 10 Q-20 -18 0 -12 Q10 -22 22 -14 Q30 -10 28 6 L26 20 L-28 20 Z"
        fill={body}
        stroke={dark}
        strokeWidth="2.4"
      />
      <path d="M22 -14 Q34 -26 40 -20 Q44 -14 36 -6 L28 6" fill={body} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="42" cy="-24" rx="7" ry="6" fill={body} stroke={dark} strokeWidth="2" />
      <path d="M-28 20 L-30 38 M-14 20 L-16 38 M14 20 L16 38 M24 20 L26 38" stroke={dark} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M40 -22 Q42 -28 38 -30" fill="none" stroke={dark} strokeWidth="1.6" />
    </g>
  );
}

const LaCiudadSantaDeLosManuscritosDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="246" rx="130" ry="12" fill="#D9C08A" opacity="0.4" />
      <rect x="110" y="145" width="130" height="90" fill="#D9C08A" stroke={dark} strokeWidth="3" />
      <rect x="123" y="160" width="46" height="60" fill="#5C4A3A" stroke={dark} strokeWidth="2" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={127 + col * 10}
            y={165 + row * 18}
            width="7"
            height="14"
            fill={["#C1272D", "#1B7A9C", "#3A7A45", "#F5F0E6"][(row + col) % 4]}
          />
        ))
      )}
      <rect x="182" y="200" width="30" height="35" fill="#5C4A3A" stroke={dark} strokeWidth="2" />
      <rect x="255" y="130" width="26" height="105" fill="#C9A277" stroke={dark} strokeWidth="2.6" />
      <path d="M255 130 Q246 106 268 92 Q290 106 281 130 Z" fill="#C9A277" stroke={dark} strokeWidth="2.6" />
      <circle cx="268" cy="88" r="4" fill={dark} />
    </g>
  );
};

const LosGriotsQueCantanLaHistoriaConUnLaud: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="248" rx="120" ry="12" fill="#D9C08A" opacity="0.4" />
      {person(150, 220, 1.1, dark, accentColor)}
      <ellipse cx="185" cy="185" rx="15" ry="21" fill="#8B5A2B" stroke="#4A2E12" strokeWidth="2.4" transform="rotate(-25 185 185)" />
      <path d="M178 168 L155 130" stroke="#4A2E12" strokeWidth="4" strokeLinecap="round" />
      <path d="M180 175 L160 140 M186 180 L166 145 M192 186 L172 151" stroke="#4A2E12" strokeWidth="1.3" />
      {person(265, 215, 1.05, dark, tint(accentColor, 0.2))}
      <ellipse cx="290" cy="222" rx="16" ry="22" fill="#8B5A2B" stroke="#4A2E12" strokeWidth="2.4" />
      <path d="M288 200 Q312 168 305 128" fill="none" stroke="#4A2E12" strokeWidth="4" strokeLinecap="round" />
      <path d="M290 205 L305 133 M285 210 L298 140 M281 216 L292 148" stroke="#4A2E12" strokeWidth="1.3" />
    </g>
  );
};

const LasUltimasCaravanasDeCamellosYSalDelSahara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 235 Q160 205 240 230 Q280 240 320 225 L320 250 L90 250 Z" fill="#D9C08A" stroke={dark} strokeWidth="2" />
      <circle cx="290" cy="105" r="18" fill="#D9A227" opacity="0.85" />
      <rect x="128" y="178" width="20" height="16" fill="#8A6A10" stroke={dark} strokeWidth="1.8" />
      {camel(150, 210, 1.0, dark, "#C9A277")}
      {camel(205, 218, 0.9, dark, "#B5651D")}
      {camel(255, 210, 1.05, dark, "#C9A277")}
    </g>
  );
};

const ElTurbanteAzulQueProtegeDelSolYLaArena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 Q200 220 320 245 L320 250 L90 250 Z" fill="#D9C08A" />
      <path d="M110 240 Q150 200 130 165 Q160 190 175 235 Z" fill="#D9C08A" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      {person(200, 225, 1.5, dark, accentColor)}
      <path d="M186 175 Q200 160 214 175 Q220 185 210 192 Q200 182 190 192 Q180 185 186 175 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M214 178 Q232 190 224 208" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M197 179 L197 173 M204 180 L206 174" stroke={dark} strokeWidth="1.2" />
    </g>
  );
};

const ElTeQueSeSirveTresVecesYNuncaSeApura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(160, 220, 1.2, dark, accentColor)}
      <path d="M178 165 Q210 150 225 120" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M225 120 Q230 110 240 112 Q248 114 244 124 L230 130 Z" fill="#3A2A1E" stroke={dark} strokeWidth="2.2" />
      <path d="M225 120 Q222 150 220 185" stroke="#8A6A10" strokeWidth="2" fill="none" opacity="0.85" />
      <rect x="205" y="185" width="20" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2" opacity="0.9" />
      <ellipse cx="215" cy="185" rx="10" ry="4" fill="#D9C08A" />
      <rect x="245" y="205" width="55" height="10" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <ellipse cx="255" cy="205" rx="8" ry="12" fill="#F5F0E6" stroke={dark} strokeWidth="1.6" />
      <ellipse cx="275" cy="205" rx="8" ry="12" fill="#F5F0E6" stroke={dark} strokeWidth="1.6" />
      <ellipse cx="295" cy="205" rx="8" ry="12" fill="#F5F0E6" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const LosPescadoresQueLlamanALosDelfinesSilvestres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="205" width="230" height="45" fill={accentColor} opacity="0.45" />
      <path d="M130 200 Q200 185 270 200 L260 220 Q200 230 140 220 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      {person(175, 195, 0.9, dark, "#2C3E7A")}
      <path d="M160 190 L145 175" stroke="#5C3A21" strokeWidth="3" strokeLinecap="round" />
      <path d="M245 215 Q260 205 275 212 Q285 216 278 224 Q262 232 248 224 Q242 220 245 215 Z" fill="#6E6E6E" stroke="#3A3A3A" strokeWidth="2.2" />
      <path d="M278 216 Q288 212 286 220" fill="none" stroke="#3A3A3A" strokeWidth="2" />
      {[
        [110, 150],
        [130, 140],
        [300, 155],
        [285, 145],
      ].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q${x + 6} ${y - 6} ${x + 12} ${y}`} stroke="#F5F0E6" strokeWidth="2" fill="none" strokeLinecap="round" />
      ))}
    </g>
  );
};

const LaCiudadDelDesiertoPintadaConGeometria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="246" rx="120" ry="12" fill="#D9C08A" opacity="0.4" />
      <rect x="115" y="130" width="170" height="110" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="180" y="180" width="40" height="60" fill="#5C4A3A" stroke={dark} strokeWidth="2.2" />
      <rect x="130" y="150" width="30" height="30" fill="#F5F0E6" stroke={accentColor} strokeWidth="3" />
      <rect x="240" y="150" width="30" height="30" fill="#F5F0E6" stroke={accentColor} strokeWidth="3" />
      <path d="M125 140 L145 125 L165 140 Z M270 140 L290 125 L310 140 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M120 195 L135 195 L127 210 Z M265 195 L280 195 L272 210 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M115 220 L285 220" stroke={accentColor} strokeWidth="4" strokeDasharray="10 6" />
    </g>
  );
};

const LaCarpaQueSeConvierteEnCasaYEnRefugio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="246" rx="120" ry="12" fill="#D9C08A" opacity="0.4" />
      <path d="M120 235 L150 130 L250 130 L280 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 130 L200 90 L250 130" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="200" y1="90" x2="200" y2="235" stroke={dark} strokeWidth="1.6" opacity="0.5" />
      <path d="M170 235 L170 190 L230 190 L230 235" fill="#3A2A1E" stroke={dark} strokeWidth="2" opacity="0.85" />
      {person(150, 240, 0.85, dark, tint(accentColor, 0.25))}
      {person(255, 240, 0.85, dark, tint(accentColor, 0.4))}
      <rect x="105" y="210" width="20" height="10" fill="#8A6A10" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const LaLecheDeCamellaEspumosaQueSellaUnaVisita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(180, 215, 1.2, dark, "#2C3E7A")}
      <ellipse cx="230" cy="210" rx="26" ry="22" fill={accentColor} stroke="#4A2E12" strokeWidth="2.6" />
      <ellipse cx="230" cy="196" rx="18" ry="7" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="1.8" />
      <path d="M204 175 Q218 190 226 198" stroke="#4A2E12" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="226" cy="196" r="3" fill="#FFFDF5" />
      <circle cx="236" cy="192" r="2.4" fill="#FFFDF5" />
      <circle cx="218" cy="192" r="2" fill="#FFFDF5" />
    </g>
  );
};

const LaPlataYElAmbarQueCuentanUnaHistoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(190, 220, 1.3, dark, "#2C3E7A")}
      <path d="M178 178 Q190 195 202 178" fill="none" stroke={accentColor} strokeWidth="3.5" />
      {[
        [182, 183],
        [190, 190],
        [198, 183],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#B5651D" stroke="#7A4A20" strokeWidth="1.4" />
      ))}
      <path d="M190 190 L186 205 Q190 214 194 205 Z" fill={accentColor} stroke="#3A3A3A" strokeWidth="2" />
      <circle cx="190" cy="203" r="3" fill="#3A3A3A" />
      {[
        [240, 210],
        [260, 215],
        [280, 208],
        [300, 213],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill="#B5651D" stroke="#7A4A20" strokeWidth="1.8" />
      ))}
    </g>
  );
};

export const mauritaniaIllustrations: Record<string, IllustrationDefinition> = {
  "la-ciudad-santa-de-los-manuscritos-del-desierto": { component: LaCiudadSantaDeLosManuscritosDelDesierto },
  "los-griots-que-cantan-la-historia-con-un-laud": { component: LosGriotsQueCantanLaHistoriaConUnLaud },
  "las-ultimas-caravanas-de-camellos-y-sal-del-sahara": { component: LasUltimasCaravanasDeCamellosYSalDelSahara },
  "el-turbante-azul-que-protege-del-sol-y-la-arena": { component: ElTurbanteAzulQueProtegeDelSolYLaArena },
  "el-te-que-se-sirve-tres-veces-y-nunca-se-apura": { component: ElTeQueSeSirveTresVecesYNuncaSeApura },
  "los-pescadores-que-llaman-a-los-delfines-silvestres": { component: LosPescadoresQueLlamanALosDelfinesSilvestres },
  "la-ciudad-del-desierto-pintada-con-geometria": { component: LaCiudadDelDesiertoPintadaConGeometria },
  "la-carpa-que-se-convierte-en-casa-y-en-refugio": { component: LaCarpaQueSeConvierteEnCasaYEnRefugio },
  "la-leche-de-camella-espumosa-que-sella-una-visita": { component: LaLecheDeCamellaEspumosaQueSellaUnaVisita },
  "la-plata-y-el-ambar-que-cuentan-una-historia": { component: LaPlataYElAmbarQueCuentanUnaHistoria },
};
