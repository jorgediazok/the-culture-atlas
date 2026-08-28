import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const VinoGeorgianoLaCunaMasAntiguaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 220 L320 220 L320 250 Z" fill="#8B7355" opacity="0.4" />
      <path d="M165 220 Q150 190 165 160 Q175 140 205 140 Q235 140 245 160 Q260 190 245 220 Z" fill="#C68642" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="220" rx="80" ry="12" fill={dark} opacity="0.3" />
      <circle cx="205" cy="130" r="10" fill={dark} opacity="0.6" />
      {[[130, 175], [155, 165], [255, 165], [280, 175]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="12" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const ElAlfabetoGeorgianoQueNoSeParaceANingunOtro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 140 Q170 120 205 140 L205 235 Q170 218 100 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M205 140 Q240 120 310 140 L310 235 Q240 218 205 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M130 190 Q130 165 150 165 Q165 165 165 180 Q165 195 150 195 Q140 195 140 210" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <path d="M245 195 Q245 165 270 165 Q285 165 285 180 M255 180 L275 180" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const ElSupraElBanqueteConUnMaestroDeBrindis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <rect x="90" y="200" width="230" height="16" fill="#8B5A2B" />
      {[120, 160, 240, 280].map((x, i) => (
        <ellipse key={x} cx={x} cy="192" rx="18" ry="10" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      <circle cx="205" cy="150" r="15" fill={skin} />
      <path d="M190 172 Q205 160 220 172 L215 216 L195 216 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="220" y1="175" x2="240" y2="155" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="243" cy="150" rx="7" ry="10" fill="#8B1A2B" opacity="0.8" />
    </g>
  );
};

const GergetiLaIglesiaEnLaCimaDeLaMontana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L170 100 L250 250 Z" fill="#F5F0E6" opacity="0.5" />
      <path d="M170 100 L200 130 L140 130 Z" fill="#B0D8E8" opacity="0.7" />
      <rect x="180" y="205" width="50" height="40" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="175,205 205,180 235,205" fill={dark} opacity="0.7" />
      <line x1="205" y1="180" x2="205" y2="165" stroke={dark} strokeWidth="3" />
      <line x1="198" y1="172" x2="212" y2="172" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const VardziaLaCiudadTalladaEnUnAcantilado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L110 90 L320 90 L320 250 Z" fill="#8B7355" opacity="0.6" stroke={dark} strokeWidth="2" />
      {[[130, 130], [165, 150], [200, 120], [235, 155], [270, 135], [150, 190], [220, 195], [280, 190]].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 10} y={y} width="20" height="24" fill={accentColor} opacity="0.75" stroke={dark} strokeWidth="1.8" />
      ))}
    </g>
  );
};

const KhachapuriElPanDeQuesoConUnHuevoArriba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 230 Q110 190 150 185 L260 185 Q300 190 300 230 Q220 250 110 230 Z" fill="#D4941E" stroke={dark} strokeWidth="3" />
      <path d="M140 205 Q205 195 270 205 Q205 220 140 205 Z" fill="#F5E7A8" opacity="0.9" />
      <circle cx="205" cy="205" r="16" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="205" r="7" fill={accentColor} />
    </g>
  );
};

const ElCantoPolifonicoGeorgianoPatrimonioDeLaHumanidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[140, 205, 270].map((x, i) => {
        const lift = i === 1 ? -15 : 0;
        return (
          <g key={x}>
            <circle cx={x} cy={140 + lift} r="15" fill={skin} />
            <ellipse cx={x} cy={155 + lift} rx="6" ry="5" fill="#1A1A1A" />
            <path d={`M${x - 16} ${172 + lift} Q${x} ${160 + lift} ${x + 16} ${172 + lift} L${x + 13} 250 L${x - 13} 250 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
          </g>
        );
      })}
    </g>
  );
};

const LosBanosDeAzufreQueLeDieronNombreATiflis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#8B7355" opacity="0.5" />
      {[[150, 220, 45], [230, 210, 55]].map(([x, y, r]) => (
        <path key={x} d={`M${x - r} ${y} Q${x - r} ${y - r} ${x} ${y - r} Q${x + r} ${y - r} ${x + r} ${y} Z`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
      <path d="M150 175 Q140 155 150 135 M230 155 Q220 135 230 115" stroke="#B0ACA2" strokeWidth="8" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
};

const LaRevolucionDeLasRosasSinUnSoloDisparo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <rect x="150" y="90" width="110" height="140" fill="#9E9A92" stroke={dark} strokeWidth="2.5" />
      {[170, 205, 240].map((x) => (
        <rect key={x} x={x - 10} y="115" width="20" height="30" fill="#B0D8E8" opacity="0.6" stroke={dark} strokeWidth="1.5" />
      ))}
      {[130, 165, 245, 280].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="210" r="12" fill={skin} />
          <path d={`M${x - 12} 225 Q${x} 218 ${x + 12} 225 L${x + 9} 250 L${x - 9} 250 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <circle cx={x} cy="200" r="6" fill="#8B1A2B" />
        </g>
      ))}
    </g>
  );
};

const StalinNacioEnEstePais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[110, 320].map((x) => (
        <line key={x} x1={x} y1="130" x2={x} y2="250" stroke={dark} strokeWidth="6" />
      ))}
      <line x1="110" y1="130" x2="320" y2="130" stroke={dark} strokeWidth="6" />
      {[130, 300].map((x) => (
        <line key={`c-${x}`} x1={x} y1="130" x2={x} y2="90" stroke={dark} strokeWidth="5" />
      ))}
      <line x1="130" y1="90" x2="300" y2="90" stroke={dark} strokeWidth="5" />
      <rect x="170" y="180" width="80" height="60" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <polygon points="165,180 210,155 255,180" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="200" y="205" width="20" height="35" fill={dark} opacity="0.5" />
    </g>
  );
};

const LasTorresDefensivasDeSvaneti: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L110 210 L150 220 L180 180 L210 250 Z" fill="#B0B8BF" opacity="0.4" />
      {/* tall stone tower */}
      <rect x="185" y="110" width="45" height="140" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="180,110 207,85 235,110" fill={dark} />
      {[135, 160, 185, 210].map((y) => (
        <line key={y} x1="185" y1={y} x2="230" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* family house beside it */}
      <rect x="245" y="200" width="55" height="50" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <polygon points="240,200 272,178 305,200" fill={dark} opacity="0.7" />
    </g>
  );
};

const KhinkaliLasEmpanadillasQueSeComenConLasManos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="70" ry="16" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <path d="M150 200 Q150 150 205 145 Q260 150 260 200 Q260 215 205 220 Q150 215 150 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* pleats radiating up to the knot */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1="205" y1="150" x2="205" y2="130" stroke={dark} strokeWidth="2" transform={`rotate(${deg} 205 150)`} opacity="0.5" />
      ))}
      {/* the topknot */}
      <circle cx="205" cy="148" r="12" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const ShotaRustaveliYElCaballeroDeLaPielDePantera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 130 L205 118 L205 232 L110 244 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M205 118 L300 130 L300 244 L205 232 Z" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      {/* knight figure on the left page */}
      <circle cx="150" cy="170" r="10" fill={accentColor} stroke={dark} strokeWidth="2" />
      <line x1="150" y1="180" x2="150" y2="215" stroke={dark} strokeWidth="4" />
      <line x1="140" y1="195" x2="160" y2="195" stroke={dark} strokeWidth="3" />
      {/* panther silhouette on the right page */}
      <path d="M240 190 Q225 180 235 165 Q250 160 265 170 Q275 185 265 200 Q250 210 240 190 Z" fill="#B8703A" stroke={dark} strokeWidth="2" />
      <line x1="265" y1="195" x2="280" y2="205" stroke="#B8703A" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ElKartuliLaDanzaDondeLaMujerPareceFlotar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {/* male dancer, arms extended */}
      <circle cx="150" cy="140" r="16" fill={skin} />
      <path d="M135 158 Q150 148 165 158 L160 230 L140 230 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M138 165 Q110 155 100 125" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M162 165 Q195 158 210 175" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* female dancer gliding in a long skirt */}
      <circle cx="255" cy="140" r="16" fill={skin} />
      <path d="M225 250 Q225 170 255 152 Q285 170 285 250 Z" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.5" />
      <path d="M242 162 Q220 150 222 130" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M268 162 Q290 150 288 130" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
    </g>
  );
};

const BorjomiElAguaMineralQueConquistoUnImperio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2E7D32";
  return (
    <g>
      <path d="M90 250 Q205 260 320 250 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.4" />
      <path d="M110 220 L150 150 L190 220 Z" fill={tint(accentColor, 0.3)} opacity="0.6" />
      <path d="M200 220 L240 160 L280 220 Z" fill={tint(accentColor, 0.15)} opacity="0.6" />
      {/* bottle */}
      <path d="M190 245 L190 175 Q190 165 200 165 L210 165 Q220 165 220 175 L220 245 Z" fill={green} stroke={dark} strokeWidth="3" />
      <rect x="198" y="145" width="14" height="22" fill={green} stroke={dark} strokeWidth="2.5" />
      {/* rising bubbles */}
      <circle cx="205" cy="200" r="4" fill="#F5F0E6" opacity="0.7" />
      <circle cx="212" cy="215" r="3" fill="#F5F0E6" opacity="0.7" />
    </g>
  );
};

export const georgiaIllustrations: Record<string, IllustrationDefinition> = {
  "vino-georgiano-la-cuna-mas-antigua-del-mundo": { component: VinoGeorgianoLaCunaMasAntiguaDelMundo },
  "el-alfabeto-georgiano-que-no-se-parece-a-ningun-otro": { component: ElAlfabetoGeorgianoQueNoSeParaceANingunOtro },
  "el-supra-el-banquete-con-un-maestro-de-brindis": { component: ElSupraElBanqueteConUnMaestroDeBrindis },
  "gergeti-la-iglesia-en-la-cima-de-la-montana": { component: GergetiLaIglesiaEnLaCimaDeLaMontana },
  "vardzia-la-ciudad-tallada-en-un-acantilado": { component: VardziaLaCiudadTalladaEnUnAcantilado },
  "khachapuri-el-pan-de-queso-con-un-huevo-arriba": { component: KhachapuriElPanDeQuesoConUnHuevoArriba },
  "el-canto-polifonico-georgiano-patrimonio-de-la-humanidad": { component: ElCantoPolifonicoGeorgianoPatrimonioDeLaHumanidad },
  "los-banos-de-azufre-que-le-dieron-nombre-a-tiflis": { component: LosBanosDeAzufreQueLeDieronNombreATiflis },
  "la-revolucion-de-las-rosas-sin-un-solo-disparo": { component: LaRevolucionDeLasRosasSinUnSoloDisparo },
  "stalin-nacio-en-este-pais": { component: StalinNacioEnEstePais },
  "las-torres-defensivas-de-svaneti": { component: LasTorresDefensivasDeSvaneti },
  "khinkali-las-empanadillas-que-se-comen-con-las-manos": { component: KhinkaliLasEmpanadillasQueSeComenConLasManos },
  "shota-rustaveli-y-el-caballero-de-la-piel-de-pantera": { component: ShotaRustaveliYElCaballeroDeLaPielDePantera },
  "el-kartuli-la-danza-donde-la-mujer-parece-flotar": { component: ElKartuliLaDanzaDondeLaMujerPareceFlotar },
  "borjomi-el-agua-mineral-que-conquisto-un-imperio": { component: BorjomiElAguaMineralQueConquistoUnImperio },
};
