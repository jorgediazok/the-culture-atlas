import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AsmaraLaPequenaRoma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M120 235 L120 165 Q120 130 205 130 Q290 130 290 165 L290 235 Z" fill={light} stroke={dark} strokeWidth="3" />
      <path d="M120 165 Q120 118 205 118 Q290 118 290 165" fill="none" stroke={dark} strokeWidth="4" />
      {[150, 205, 260].map((x, i) => (
        <circle key={x} cx={x} cy="185" r="18" fill={i === 1 ? accentColor : dark} opacity={i === 1 ? 1 : 0.7} stroke={dark} strokeWidth="2" />
      ))}
      <rect x="180" y="215" width="50" height="20" fill={dark} opacity="0.5" />
    </g>
  );
};

const CeremoniaDelCafeBuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const clay = "#B5651D";
  return (
    <g>
      <path d="M175 200 Q170 235 205 238 Q240 235 235 200 L232 165 Q205 155 178 165 Z" fill={clay} stroke={shade(clay, 0.3)} strokeWidth="2.5" />
      <path d="M232 175 Q255 178 258 200 Q255 215 235 210" fill="none" stroke={clay} strokeWidth="6" strokeLinecap="round" />
      <path d="M205 155 L205 135" stroke={shade(clay, 0.3)} strokeWidth="3" />
      {[[125, 235], [155, 240], [265, 235]].map(([x, y]) => (
        <g key={x as number}>
          <path d={`M${(x as number) - 10} ${y} L${(x as number) - 10} ${(y as number) - 14} L${(x as number) + 10} ${(y as number) - 14} L${(x as number) + 10} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
          <path d={`M${(x as number) + 10} ${(y as number) - 10} Q${(x as number) + 18} ${(y as number) - 10} ${(x as number) + 18} ${(y as number) - 5} Q${(x as number) + 18} 0 ${(x as number) + 10} 0`} fill="none" stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const ArchipielagoDeDahlak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const sand = "#D9BE8F";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={accentColor} opacity="0.55" />
      {[[130, 150, 20], [175, 190, 26], [220, 145, 18], [260, 195, 22], [290, 155, 14], [150, 220, 16]].map(([x, y, r]) => (
        <circle key={x as number} cx={x} cy={y} r={r} fill={sand} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const GuerraDeIndependenciaDe30Anos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <polygon points="90,240 160,150 220,240" fill={dark} opacity="0.6" />
      <polygon points="180,240 250,130 320,240" fill={dark} opacity="0.4" />
      <path d="M175 145 Q190 130 210 135 Q205 143 215 148 Q198 156 182 148 Q173 145 175 145 Z" fill="#fff" stroke={dark} strokeWidth="2" />
      <path d="M175 145 L162 140" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="140" r="2" fill={dark} />
    </g>
  );
};

const NueveEtniasNueveLenguas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA", "#C1272D"];
  return (
    <g>
      {[[140, 190, 0], [190, 160, 1], [235, 195, 2], [180, 220, 3], [270, 155, 4]].map(([x, y, i], idx) => (
        <path key={idx} d={`M${(x as number) - 32} ${(y as number) - 18} Q${(x as number) - 36} ${y} ${(x as number) - 16} ${y} L${(x as number) - 10} ${y} L${(x as number) - 14} ${(y as number) + 12} L${x} ${y} L${(x as number) + 32} ${y} Q${(x as number) + 36} ${y} ${(x as number) + 36} ${(y as number) - 18} Q${(x as number) + 36} ${(y as number) - 36} ${(x as number) + 32} ${(y as number) - 36} L${(x as number) - 32} ${(y as number) - 36} Q${(x as number) - 36} ${(y as number) - 36} ${(x as number) - 32} ${(y as number) - 18} Z`} fill={colors[i as number]} stroke={dark} strokeWidth="1.5" opacity="0.9" />
      ))}
    </g>
  );
};

const VestidoBlancoZuria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const colors = [accentColor, "#F4A300", "#C1272D"];
  return (
    <g>
      <path d="M180 235 L175 145 Q175 130 205 128 Q235 130 235 145 L230 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <path d="M175 145 Q205 135 235 145" fill="none" stroke={dark} strokeWidth="2" />
      {colors.map((c, i) => (
        <path key={c} d={`M${180 + i} ${228 - i * 3} L${230 - i} ${228 - i * 3}`} stroke={c} strokeWidth="4" opacity="0.9" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={182 + i * 12} y1="222" x2={182 + i * 12} y2="234" stroke={colors[i % colors.length]} strokeWidth="3" />
      ))}
    </g>
  );
};

const PuertoOtomanoDeMassawa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const coral = "#D9A98A";
  return (
    <g>
      <rect x="130" y="150" width="150" height="90" fill={coral} stroke={shade(coral, 0.3)} strokeWidth="3" />
      {[155, 205, 255].map((x) => (
        <g key={x}>
          <path d={`M${x - 16} 190 L${x - 16} 175 Q${x} 160 ${x + 16} 175 L${x + 16} 190 Z`} fill="none" stroke={accentColor} strokeWidth="3" />
        </g>
      ))}
      <rect x="140" y="210" width="140" height="8" fill={accentColor} opacity="0.6" />
      {[150, 260].map((x) => (
        <rect key={x} x={x - 6} y="150" width="12" height="90" fill={dark} opacity="0.3" />
      ))}
    </g>
  );
};

const PastaConBerbere: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const pasta = "#F4C87A";
  return (
    <g>
      <ellipse cx="205" cy="215" rx="90" ry="24" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2.5" />
      <ellipse cx="205" cy="208" rx="75" ry="18" fill={pasta} stroke={shade(pasta, 0.3)} strokeWidth="2" />
      {[[175, 200], [200, 205], [225, 198], [190, 210], [215, 212]].map(([x, y]) => (
        <path key={x as number} d={`M${(x as number) - 8} ${y} Q${x} ${(y as number) - 6} ${(x as number) + 8} ${y}`} fill="none" stroke={shade(pasta, 0.35)} strokeWidth="2.5" strokeLinecap="round" />
      ))}
      <path d="M170 198 Q205 188 240 198 Q230 205 205 202 Q180 205 170 198 Z" fill={accentColor} opacity="0.85" />
    </g>
  );
};

const RashaidaNomadesDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const gold = "#D4A017";
  return (
    <g>
      <circle cx="205" cy="175" r="34" fill={skin} />
      <path d="M172 170 Q205 150 238 170 L235 195 Q205 185 175 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[185, 205, 225].map((x) => (
        <circle key={x} cx={x} cy="188" r="4" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1" />
      ))}
      {[[185, 195], [205, 200], [225, 195]].map(([x, y]) => (
        <line key={x as number} x1={x} y1={y} x2={x} y2={(y as number) + 20} stroke={gold} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const MercadoDeCamellosDeKeren: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dust = "#D9BE8F";
  return (
    <g>
      <path d="M90 245 Q205 235 320 245 L320 250 L90 250 Z" fill={dust} />
      <path d="M150 235 Q145 200 165 190 Q178 178 190 190 Q195 178 205 188 Q220 178 225 195 Q235 200 230 220 L225 235 L215 235 L212 222 L165 222 L162 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 210 Q140 200 135 185" fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
      <path d="M135 185 L128 175 L133 190 Z" fill={dark} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={165 + i * 18} y1="222" x2={162 + i * 18} y2="238" stroke={dark} strokeWidth="4" />
      ))}
    </g>
  );
};

export const eritreaIllustrations: Record<string, IllustrationDefinition> = {
  "asmara-la-pequena-roma": { component: AsmaraLaPequenaRoma },
  "ceremonia-del-cafe-buna": { component: CeremoniaDelCafeBuna },
  "archipielago-de-dahlak": { component: ArchipielagoDeDahlak },
  "guerra-de-independencia-de-30-anos": { component: GuerraDeIndependenciaDe30Anos },
  "nueve-etnias-nueve-lenguas": { component: NueveEtniasNueveLenguas },
  "vestido-blanco-zuria": { component: VestidoBlancoZuria },
  "puerto-otomano-de-massawa": { component: PuertoOtomanoDeMassawa },
  "pasta-con-berbere": { component: PastaConBerbere },
  "rashaida-nomades-del-desierto": { component: RashaidaNomadesDelDesierto },
  "mercado-de-camellos-de-keren": { component: MercadoDeCamellosDeKeren },
};
