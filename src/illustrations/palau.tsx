import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElLagoDeMedusasSinPicadura: IllustrationComponent = () => {
  const water = "#26C6DA";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      {[[150, 180, 1], [220, 150, 0.7], [255, 205, 0.55], [175, 220, 0.6]].map(([x, y, scale], i) => (
        <g key={x as number} transform={`translate(${x} ${y}) scale(${scale})`}>
          <path d="M-22 0 Q0 -26 22 0 Q10 4 0 2 Q-10 4 -22 0 Z" fill="#F4C430" stroke={shade("#F4C430", 0.3)} strokeWidth="2" opacity={0.95 - i * 0.05} />
          {[-14, -6, 2, 10, 18].map((dx) => (
            <path key={dx} d={`M${dx} 2 Q${dx + 2} 16 ${dx} 30`} stroke="#F4C430" strokeWidth="2" fill="none" opacity="0.7" />
          ))}
        </g>
      ))}
    </g>
  );
};

const LasIslasRocosasConFormaDeHongo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#26C6DA";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.5" />
      {[[150, 220, 55], [230, 210, 65], [280, 225, 40]].map(([x, y, w], i) => (
        <g key={x as number}>
          <path d={`M${x} ${(y as number) - 30} Q${(x as number) - (w as number) / 2} ${(y as number) - 40} ${(x as number) - (w as number) / 2 + 4} ${y} Q${x} ${(y as number) + 6} ${(x as number) + (w as number) / 2 - 4} ${y} Q${(x as number) + (w as number) / 2} ${(y as number) - 40} ${x} ${(y as number) - 30} Z`} fill={accentColor} stroke={dark} strokeWidth="2.5" opacity={1 - i * 0.05} />
          <path d={`M${(x as number) - 10} ${y} L${(x as number) - 8} ${(y as number) + 12} L${(x as number) + 8} ${(y as number) + 12} L${(x as number) + 10} ${y} Z`} fill={dark} opacity="0.5" />
        </g>
      ))}
    </g>
  );
};

const LasCasasComunalesBaiPintadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = ["#D4A017", "#C1272D", "#2E7D32"];
  return (
    <g>
      <path d="M130 235 Q205 130 280 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="200" width="110" height="35" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      {[[170, 217], [205, 217], [235, 217]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="9" fill={colors[i]} stroke={shade(colors[i], 0.3)} strokeWidth="1.5" />
      ))}
      <line x1="205" y1="130" x2="205" y2="112" stroke="#5C3A1E" strokeWidth="4" />
    </g>
  );
};

const ElPrimerSantuarioDeTiburonesDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.65" />
      <path d="M130 190 Q140 175 165 175 Q210 175 245 195 Q255 200 250 208 L240 210 L235 202 L165 202 L155 210 L140 205 Q128 200 130 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M165 175 Q160 158 175 150 Q178 165 175 175 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M245 195 Q265 190 275 175" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <circle cx="150" cy="185" r="2.5" fill="#1A1A1A" />
      {[[200, 130], [230, 145]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="4" fill="#fff" opacity="0.5" />
      ))}
    </g>
  );
};

const ElSelloEcologicoQueFirmanLosTuristas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2E7D32";
  return (
    <g>
      <path d="M130 235 L130 130 Q130 120 145 120 L205 130 L265 120 Q280 120 280 130 L280 235 Q280 245 265 245 L145 245 Q130 245 130 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="130" x2="205" y2="240" stroke={dark} strokeWidth="1.5" opacity="0.3" />
      <circle cx="235" cy="190" r="26" fill="none" stroke={green} strokeWidth="4" transform="rotate(-15 235 190)" />
      <path d="M223 190 L232 199 L249 178" fill="none" stroke={green} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
};

const LaSociedadMatrilinealQueEligeJefes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      <circle cx="160" cy="185" r="52" fill="none" stroke={accentColor} strokeWidth="6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <circle key={deg} cx="160" cy="133" r="6" fill={accentColor} stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} 160 185)`} />
      ))}
      <path d="M240 220 Q235 190 260 180 Q285 190 280 220 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <path d="M235 220 L285 220 L280 235 L240 235 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2" />
    </g>
  );
};

const LosRestosDeGuerraDePeleliu: IllustrationComponent = () => {
  const rust = "#8B5A2B";
  return (
    <g>
      <path d="M90 245 Q205 235 320 245" stroke="#4A8F4E" strokeWidth="30" opacity="0.3" fill="none" />
      <path d="M170 220 Q170 195 205 195 Q240 195 240 220 L235 225 L175 225 Z" fill={rust} stroke={shade(rust, 0.3)} strokeWidth="2.5" />
      <path d="M180 195 Q205 185 230 195" fill="none" stroke={shade(rust, 0.35)} strokeWidth="2" opacity="0.5" />
      {[[130, 235], [280, 230]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${x} ${(y as number) - 14} ${(x as number) + 6} ${(y as number) - 22}`} stroke="#4A8F4E" strokeWidth="5" strokeLinecap="round" fill="none" />
      ))}
    </g>
  );
};

const LosTaroGigantesQueCultivanLasMujeres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={water} opacity="0.5" />
      {[[140, 200], [205, 195], [270, 205]].map(([x, y], i) => (
        <g key={x as number}>
          <line x1={x} y1={y} x2={x} y2={(y as number) + 30} stroke="#4A8F4E" strokeWidth="3" />
          <path d={`M${x} ${y} Q${(x as number) - 30} ${(y as number) - 20} ${(x as number) - 20} ${(y as number) - 45} Q${(x as number) + 5} ${(y as number) - 35} ${x} ${y} Q${(x as number) + 5} ${(y as number) - 35} ${(x as number) + 30} ${(y as number) - 20} Q${(x as number) + 20} ${(y as number) + 2} ${x} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="2" opacity={1 - i * 0.06} />
        </g>
      ))}
    </g>
  );
};

const ElMitoDeLaGiganteQueFormoLasIslas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={water} opacity="0.4" />
      <path d="M110 200 Q140 190 170 202 Q195 210 220 200 Q250 188 285 205 Q290 210 285 218 Q250 200 220 212 Q195 222 170 214 Q140 202 112 212 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" opacity="0.85" />
      <circle cx="110" cy="205" r="14" fill={accentColor} stroke={dark} strokeWidth="2" opacity="0.85" />
    </g>
  );
};

const ElDineroDeVidrioDeOrigenMisterioso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#F4A300", "#00838F", "#8E24AA", "#C1272D"];
  return (
    <g>
      <path d="M120 150 Q205 235 290 150" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const t = i / 7;
        const x = 120 + t * 170;
        const y = 150 + Math.abs(t - 0.5) * -160 + 90;
        return <ellipse key={i} cx={x} cy={y} rx="12" ry="9" fill={colors[i % colors.length]} stroke={dark} strokeWidth="1.5" />;
      })}
    </g>
  );
};

export const palauIllustrations: Record<string, IllustrationDefinition> = {
  "el-lago-de-medusas-sin-picadura": { component: ElLagoDeMedusasSinPicadura },
  "las-islas-rocosas-con-forma-de-hongo": { component: LasIslasRocosasConFormaDeHongo },
  "las-casas-comunales-bai-pintadas": { component: LasCasasComunalesBaiPintadas },
  "el-primer-santuario-de-tiburones-del-mundo": { component: ElPrimerSantuarioDeTiburonesDelMundo },
  "el-sello-ecologico-que-firman-los-turistas": { component: ElSelloEcologicoQueFirmanLosTuristas },
  "la-sociedad-matrilineal-que-elige-jefes": { component: LaSociedadMatrilinealQueEligeJefes },
  "los-restos-de-guerra-de-peleliu": { component: LosRestosDeGuerraDePeleliu },
  "los-taro-gigantes-que-cultivan-las-mujeres": { component: LosTaroGigantesQueCultivanLasMujeres },
  "el-mito-de-la-gigante-que-formo-las-islas": { component: ElMitoDeLaGiganteQueFormoLasIslas },
  "el-dinero-de-vidrio-de-origen-misterioso": { component: ElDineroDeVidrioDeOrigenMisterioso },
};
