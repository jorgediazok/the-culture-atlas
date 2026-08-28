import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElCastilloQueSeVolvioLaCasaDeDracula: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* full moon */}
      <circle cx="230" cy="125" r="55" fill="#EDEAE0" />
      {/* castle silhouette on the horizon */}
      <path d="M100 250 L100 195 L125 195 L125 170 L150 170 L150 200 L180 200 L180 160 L205 160 L205 200 L235 200 L235 175 L260 175 L260 195 L290 195 L290 250 Z" fill={dark} />
      {/* bat, wings spread, crossing the moon */}
      <path d="M205 130 Q185 100 150 105 Q170 112 178 125 Q155 118 135 130 Q165 128 183 138 Q195 130 205 130 Q215 130 227 138 Q245 128 275 130 Q255 118 232 125 Q240 112 260 105 Q225 100 205 130 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="199" cy="128" r="2.5" fill={dark} />
      <circle cx="211" cy="128" r="2.5" fill={dark} />
    </g>
  );
};

const SighisoaraLaCunaRealDeVladElEmpalador: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[110, "#D4A017"], [155, accentColor], [200, "#C1272D"], [245, tint(accentColor, 0.3)]].map(([x, color]) => (
        <g key={x as number}>
          <rect x={x as number} y="190" width="38" height="55" fill={color as string} stroke={dark} strokeWidth="2" />
          <polygon points={`${x},190 ${(x as number) + 19},165 ${(x as number) + 38},190`} fill={dark} opacity="0.7" />
        </g>
      ))}
      {/* clock tower */}
      <rect x="270" y="150" width="40" height="95" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.5" />
      <polygon points="265,150 290,110 315,150" fill={dark} />
      <circle cx="290" cy="130" r="8" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const ElEdificioMasPesadoDelPlaneta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="160" width="220" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="100" y="140" width="220" height="20" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      {[120, 150, 180, 210, 240, 270, 300].map((x) => (
        <rect key={x} x={x - 6} y="165" width="12" height="70" fill={dark} opacity="0.5" />
      ))}
      <rect x="190" y="210" width="40" height="40" fill={dark} opacity="0.7" />
    </g>
  );
};

const LosMonasteriosPintadosPorFuera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const blue = "#1F4E8C";
  return (
    <g>
      <rect x="120" y="130" width="170" height="110" fill={blue} stroke={dark} strokeWidth="3" />
      <polygon points="110,130 205,90 300,130" fill={dark} />
      {[160, 205, 250].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="165" r="10" fill="#F5F0E6" opacity="0.9" />
          <path d={`M${x - 12} 172 Q${x} 163 ${x + 12} 172 L${x + 9} 230 L${x - 9} 230 Z`} fill={i % 2 === 0 ? tint(accentColor, 0.4) : "#D4A017"} opacity="0.9" />
        </g>
      ))}
    </g>
  );
};

const ElCementerioAlegreConTumbasQueHacenReir: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="192" y="120" width="26" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="150" width="110" height="26" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="140" r="8" fill="#F4A300" />
      <line x1="175" y1="163" x2="185" y2="163" stroke="#F4A300" strokeWidth="4" />
      <line x1="225" y1="163" x2="235" y2="163" stroke="#F4A300" strokeWidth="4" />
      <circle cx="205" cy="210" r="10" fill="#C68642" />
    </g>
  );
};

const LasIglesiasDeMaderaSinUnSoloClavo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="165" y="200" width="80" height="50" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="160,200 205,150 250,200" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <polygon points="188,150 205,90 222,150" fill={dark} />
      <line x1="205" y1="90" x2="205" y2="75" stroke={dark} strokeWidth="3" />
      <line x1="198" y1="80" x2="212" y2="80" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElDiezPerfectoQueNadieEsperaba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <rect x="110" y="220" width="200" height="14" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="140" r="17" fill={skin} />
      <path d="M188 158 Q205 148 222 158 L218 210 L192 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M210 200 Q245 190 265 155" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M198 205 Q170 215 150 220" stroke={skin} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M192 165 Q160 150 145 120" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M218 165 Q250 150 265 120" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
    </g>
  );
};

const ElDeltaMejorConservadoDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 235 320 250 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.5" />
      {[[130, 5], [160, 4], [250, 4], [280, 5]].map(([x, w]) => (
        <path key={x} d={`M${x} 250 Q${(x as number) - 5} 210 ${(x as number) + 3} 170`} stroke="#4A7A3C" strokeWidth={w} fill="none" strokeLinecap="round" />
      ))}
      <ellipse cx="205" cy="205" rx="30" ry="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M225 195 Q245 185 260 175" stroke={dark} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="255" cy="178" r="9" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M264 178 L275 175 L264 182 Z" fill={dark} />
      <line x1="195" y1="222" x2="188" y2="250" stroke={dark} strokeWidth="4" />
      <line x1="215" y1="222" x2="222" y2="250" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const LaIslaLatinaRodeadaDeIdiomasEslavos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <circle cx="205" cy="175" r="95" fill="none" stroke={water} strokeWidth="6" opacity="0.35" />
      <circle cx="205" cy="175" r="70" fill="none" stroke={water} strokeWidth="6" opacity="0.45" />
      <ellipse cx="205" cy="185" rx="55" ry="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="195" y="120" width="20" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="188" y="112" width="34" height="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <rect x="188" y="188" width="34" height="10" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaMinaDeSalConvertidaEnParqueDeDiversiones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 160 Q160 120 205 130 Q250 120 320 160 L320 250 Z" fill="#B0A489" opacity="0.5" />
      <circle cx="205" cy="180" r="50" fill="none" stroke={accentColor} strokeWidth="6" />
      <circle cx="205" cy="180" r="8" fill={dark} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line key={deg} x1="205" y1="180" x2="205" y2="130" stroke={dark} strokeWidth="2.5" transform={`rotate(${deg} 205 180)`} />
      ))}
      <rect x="185" y="235" width="40" height="12" fill={dark} opacity="0.6" />
    </g>
  );
};

const MartisorElHiloRojoYBlancoDeLaPrimavera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 100 Q150 130 120 160 Q150 190 120 220" fill="none" stroke="#C1272D" strokeWidth="10" strokeLinecap="round" />
      <path d="M140 100 Q170 130 140 160 Q170 190 140 220" fill="none" stroke="#F5F0E6" strokeWidth="10" strokeLinecap="round" />
      <line x1="140" y1="220" x2="215" y2="215" stroke={dark} strokeWidth="2" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse key={deg} cx="230" cy="215" rx="16" ry="9" fill={accentColor} stroke={dark} strokeWidth="2" transform={`rotate(${deg} 230 215)`} />
      ))}
      <circle cx="230" cy="215" r="9" fill="#F4A300" />
    </g>
  );
};

const GeorgeEnescuElCompositorQueDefinioLaMusicaRumana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M205 140 Q180 145 178 175 Q176 200 195 210 Q205 215 215 210 Q234 200 232 175 Q230 145 205 140 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M198 165 Q205 160 212 165 Q212 190 205 200 Q198 190 198 165 Z" fill={dark} opacity="0.3" />
      <line x1="205" y1="140" x2="205" y2="95" stroke={dark} strokeWidth="4" />
      <circle cx="205" cy="92" r="7" fill={dark} />
      <line x1="150" y1="230" x2="260" y2="150" stroke="#6B4C3A" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ConstantinBrancusiElEscultorQueRedujoLaFormaALoEsencial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="210" width="60" height="40" fill={dark} opacity="0.6" />
      <path d="M205 215 Q185 200 190 150 Q192 110 205 90 Q218 110 220 150 Q225 200 205 215 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const LaIeLaBlusaBordadaQueInspiroAYvesSaintLaurent: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 L150 170 Q150 150 175 145 L235 145 Q260 150 260 170 L260 250 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M175 145 Q205 165 235 145" fill="none" stroke={accentColor} strokeWidth="8" />
      <line x1="150" y1="190" x2="120" y2="200" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <line x1="260" y1="190" x2="290" y2="200" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      {[190, 210, 230].map((y) => (
        <circle key={y} cx="205" cy={y} r="5" fill="#C1272D" />
      ))}
    </g>
  );
};

const LaRevolucionDe1989YLaCaidaDeCeausescu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const person = (cx: number, cy: number, color: string) => (
    <g key={cx}>
      <circle cx={cx} cy={cy} r="10" fill={skin} />
      <path d={`M${cx - 10} ${cy + 8} Q${cx} ${cy + 2} ${cx + 10} ${cy + 8} L${cx + 8} 250 L${cx - 8} 250 Z`} fill={color} stroke={dark} strokeWidth="1.5" />
    </g>
  );
  return (
    <g>
      <rect x="150" y="120" width="110" height="80" fill={dark} />
      <rect x="165" y="132" width="80" height="55" fill="#3D8FB0" opacity="0.7" />
      {person(110, 205, accentColor)}
      {person(150, 215, tint(accentColor, 0.3))}
      {person(255, 215, tint(accentColor, 0.3))}
      {person(295, 205, accentColor)}
    </g>
  );
};

export const romaniaIllustrations: Record<string, IllustrationDefinition> = {
  "el-castillo-que-se-volvio-la-casa-de-dracula": { component: ElCastilloQueSeVolvioLaCasaDeDracula },
  "sighisoara-la-cuna-real-de-vlad-el-empalador": { component: SighisoaraLaCunaRealDeVladElEmpalador },
  "el-edificio-mas-pesado-del-planeta": { component: ElEdificioMasPesadoDelPlaneta },
  "los-monasterios-pintados-por-fuera": { component: LosMonasteriosPintadosPorFuera },
  "el-cementerio-alegre-con-tumbas-que-hacen-reir": { component: ElCementerioAlegreConTumbasQueHacenReir },
  "las-iglesias-de-madera-sin-un-solo-clavo": { component: LasIglesiasDeMaderaSinUnSoloClavo },
  "el-diez-perfecto-que-nadie-esperaba": { component: ElDiezPerfectoQueNadieEsperaba },
  "el-delta-mejor-conservado-de-europa": { component: ElDeltaMejorConservadoDeEuropa },
  "la-isla-latina-rodeada-de-idiomas-eslavos": { component: LaIslaLatinaRodeadaDeIdiomasEslavos },
  "la-mina-de-sal-convertida-en-parque-de-diversiones": { component: LaMinaDeSalConvertidaEnParqueDeDiversiones },
  "martisor-el-hilo-rojo-y-blanco-de-la-primavera": { component: MartisorElHiloRojoYBlancoDeLaPrimavera },
  "george-enescu-el-compositor-que-definio-la-musica-rumana": { component: GeorgeEnescuElCompositorQueDefinioLaMusicaRumana },
  "constantin-brancusi-el-escultor-que-redujo-la-forma-a-lo-esencial": { component: ConstantinBrancusiElEscultorQueRedujoLaFormaALoEsencial },
  "la-ie-la-blusa-bordada-que-inspiro-a-yves-saint-laurent": { component: LaIeLaBlusaBordadaQueInspiroAYvesSaintLaurent },
  "la-revolucion-de-1989-y-la-caida-de-ceausescu": { component: LaRevolucionDe1989YLaCaidaDeCeausescu },
};
