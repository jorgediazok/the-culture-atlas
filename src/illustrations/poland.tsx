import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const WieliczkaLaMinaDeSalConCatedralIncluida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 150 Q205 120 320 150 L320 250 Z" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M150 250 L150 190 Q150 170 175 170 L235 170 Q260 170 260 190 L260 250 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="175" cy="150" r="8" fill={accentColor} opacity="0.8" />
      <circle cx="235" cy="150" r="8" fill={accentColor} opacity="0.8" />
      <path d="M175 150 L175 170 M235 150 L235 170" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M205 170 L205 140 L195 150 M205 140 L215 150" stroke={dark} strokeWidth="2.5" fill="none" />
    </g>
  );
};

const PierogiElPlatoQueCadaRegionDefiende: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="215" rx="110" ry="30" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      {[130, 165, 200, 235, 270].map((x, i) => (
        <path key={x} d={`M${x - 20} 205 Q${x} 185 ${x + 20} 205 Q${x} 220 ${x - 20} 205 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      ))}
    </g>
  );
};

const SolidarnoscElSindicatoQueTumboAlComunismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="270" y1="250" x2="270" y2="100" stroke="#8B8378" strokeWidth="7" opacity="0.6" />
      <line x1="270" y1="110" x2="220" y2="140" stroke="#8B8378" strokeWidth="6" opacity="0.6" />
      <line x1="220" y1="140" x2="220" y2="200" stroke="#8B8378" strokeWidth="3" opacity="0.4" />
      <rect x="120" y="150" width="70" height="80" rx="14" fill="#C68642" stroke={dark} strokeWidth="3" />
      {[135, 155, 175].map((x) => (
        <rect key={x} x={x} y="120" width="14" height="45" rx="6" fill="#C68642" stroke={dark} strokeWidth="2.5" />
      ))}
      <rect x="105" y="165" width="22" height="45" rx="10" fill="#C68642" stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="245" width="50" height="10" fill={accentColor} />
    </g>
  );
};

const CopernicoElHombreQueDetuvoAlSol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="160" cy="140" r="18" fill={skin} />
      <path d="M140 165 Q160 150 180 165 L175 250 L145 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="255" cy="185" r="22" fill="#F4A300" />
      <circle cx="255" cy="185" r="38" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      <circle cx="290" cy="185" r="6" fill="#3D8FB0" />
      <circle cx="255" cy="220" r="5" fill="#B7410E" />
      <line x1="180" y1="180" x2="220" y2="185" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElCorazonDeChopinGuardadoEnUnaColumna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 220 L110 180 Q110 170 130 168 L200 160 L200 220 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <rect x="105" y="220" width="100" height="12" fill="#1A1A1A" />
      {[120, 135, 150, 165, 180].map((x) => (
        <rect key={x} x={x} y="215" width="10" height="15" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
      ))}
      <rect x="255" y="130" width="40" height="120" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M267 175 Q275 165 283 175 Q283 190 275 198 Q267 190 267 175 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const BialowiezaElUltimoBosquePrimitivoDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[110, 300].map((x) => (
        <path key={x} d={`M${x} 250 L${x} 130 M${x - 15} 160 L${x} 140 L${x + 15} 160`} stroke="#2E4A3A" strokeWidth="6" fill="none" opacity="0.6" />
      ))}
      <path d="M130 230 Q125 165 155 145 Q165 130 185 132 Q210 128 225 145 Q260 150 275 175 Q290 190 280 210 Q275 230 250 230 Z" fill="#4A2C2A" stroke={dark} strokeWidth="3" />
      <path d="M160 140 Q150 128 155 115 Q165 122 168 135 M182 132 Q178 118 188 108 Q195 118 192 132" fill="#3E2A1A" />
      <ellipse cx="163" cy="165" rx="8" ry="14" fill="#3E2A1A" opacity="0.8" />
      <circle cx="158" cy="155" r="3" fill="#1A1A1A" />
      {[150, 175, 235, 260].map((x) => (
        <rect key={x} x={x} y="225" width="12" height="20" fill="#4A2C2A" />
      ))}
      <path d="M275 200 Q290 210 285 225" stroke="#4A2C2A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="205" cy="245" rx="115" ry="8" fill={accentColor} opacity="0.3" />
    </g>
  );
};

const VarsoviaLaCiudadReconstruidaConPinturas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[95, 160, 90], [150, 140, 110], [205, 155, 95], [260, 145, 105]].map(([x, y, h], i) => (
        <g key={x}>
          <rect x={x} y={y} width="50" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
          <polygon points={`${x},${y} ${x + 25},${y - 20} ${x + 50},${y}`} fill={dark} opacity="0.7" />
        </g>
      ))}
      <ellipse cx="205" cy="248" rx="115" ry="8" fill="#9E9A92" opacity="0.4" />
    </g>
  );
};

const VodkaElOrigenQuePoloniaYRusiaSeDisputan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 250 L170 160 Q170 145 185 145 L195 145 Q210 145 210 160 L210 250 Z" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M175 250 L175 165 Q175 150 187 150 L193 150 Q205 150 205 165 L205 250 Z" fill={tint(accentColor, 0.4)} opacity="0.4" />
      <rect x="172" y="200" width="36" height="30" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {[100, 130, 250, 280, 310].map((x) => (
        <path key={x} d={`M${x} 250 L${x} 200 Q${x - 4} 190 ${x} 180`} stroke="#D4941E" strokeWidth="4" fill="none" />
      ))}
    </g>
  );
};

const ElDragonDeWawelQueEscupeFuegoDeVerdad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M130 250 Q120 200 150 180 Q145 160 160 150 Q175 160 172 180 Q210 175 230 195 Q220 210 195 205 Q200 230 180 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M230 195 Q260 185 280 200" stroke={accentColor} strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M280 195 Q300 190 310 175 Q305 200 315 210 Q295 210 280 200 Z" fill="#F4A300" opacity="0.9" />
      <path d="M150 165 L140 150 M158 158 L152 142" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <circle cx="165" cy="163" r="3" fill="#1A1A1A" />
    </g>
  );
};

const ElAlfabetoQueTieneNueveLetrasQueNoExistenEnIngles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 140 Q170 120 205 140 L205 235 Q170 218 100 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M205 140 Q240 120 310 140 L310 235 Q240 218 205 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <text x="118" y="195" fontSize="42" fontWeight="700" fill={accentColor}>
        ą
      </text>
      <text x="225" y="180" fontSize="38" fontWeight="700" fill={dark}>
        ł
      </text>
      <text x="255" y="215" fontSize="38" fontWeight="700" fill={accentColor}>
        ż
      </text>
    </g>
  );
};

const MarieCurieUnicaConNobelEnDosCiencias: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* glowing vial */}
      <rect x="175" y="140" width="50" height="90" rx="8" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      <rect x="185" y="120" width="30" height="24" fill={dark} />
      <circle cx="200" cy="185" r="22" fill="#7CFC00" opacity="0.55" />
      <circle cx="200" cy="185" r="34" fill="#7CFC00" opacity="0.2" />
      {/* two Nobel medals */}
      <circle cx="120" cy="110" r="24" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="3" />
      <circle cx="280" cy="110" r="24" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="3" />
      <circle cx="120" cy="110" r="14" fill="none" stroke={shade(gold, 0.35)} strokeWidth="2" />
      <circle cx="280" cy="110" r="14" fill="none" stroke={shade(gold, 0.35)} strokeWidth="2" />
    </g>
  );
};

const LosHusaresAladosCaballeriaConAlas: IllustrationComponent = ({ accentColor }) => {
  const metal = "#9AA0A6";
  return (
    <g>
      {/* helmet */}
      <path d="M175 200 Q170 160 200 150 Q230 160 225 200 Z" fill={metal} stroke={shade(metal, 0.4)} strokeWidth="3" />
      <rect x="192" y="192" width="16" height="18" fill={shade(metal, 0.5)} />
      {/* wing frame, left */}
      <path d="M175 165 Q140 150 120 100 Q150 130 165 145 Q145 110 135 75 Q165 115 178 150" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      {/* wing frame, right */}
      <path d="M225 165 Q260 150 280 100 Q250 130 235 145 Q255 110 265 75 Q235 115 222 150" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const LosMatematicosQueRompieronEnigmaPrimero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const metal = "#8A8F98";
  return (
    <g>
      {/* machine body */}
      <rect x="140" y="150" width="120" height="80" rx="6" fill={metal} stroke={shade(metal, 0.4)} strokeWidth="3" />
      {/* rotors */}
      {[165, 200, 235].map((x) => (
        <circle key={x} cx={x} cy="150" r="18" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
      ))}
      {/* broken gear pieces scattered */}
      <path d="M100 190 L112 178 L124 190 L112 202 Z" fill={accentColor} opacity="0.75" />
      <path d="M280 205 L292 195 L302 208 L290 218 Z" fill={accentColor} opacity="0.6" />
      <circle cx="100" cy="230" r="8" fill={dark} opacity="0.6" />
    </g>
  );
};

const WigiliaLaCenaConUnPlatoVacioDeMas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const white = "#FBFBFB";
  return (
    <g>
      {/* table */}
      <rect x="90" y="205" width="220" height="14" fill="#8B5A2B" />
      {/* small dishes */}
      {[130, 170, 235, 275].map((x, i) => (
        <ellipse key={x} cx={x} cy="196" rx="20" ry="8" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
      {/* empty plate with dashed outline, extra place */}
      <ellipse cx="202" cy="196" rx="24" ry="9" fill={white} stroke={dark} strokeWidth="2.5" strokeDasharray="4 4" />
    </g>
  );
};

const ElHejnalMariackiLaTrompetaQueSeCorta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const brass = "#B87333";
  return (
    <g>
      {/* gothic tower */}
      <rect x="150" y="120" width="100" height="130" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 120 L200 80 L250 120 Z" fill={dark} />
      {/* window */}
      <path d="M185 165 Q185 148 200 148 Q215 148 215 165 L215 200 L185 200 Z" fill="#1A1A1A" />
      {/* trumpet poking out */}
      <line x1="200" y1="182" x2="260" y2="182" stroke={brass} strokeWidth="5" strokeLinecap="round" />
      <path d="M255 170 L280 182 L255 194 Z" fill={brass} stroke={shade(brass, 0.3)} strokeWidth="1.5" />
    </g>
  );
};

const MalborkElCastilloDeLadrilloMasGrande: IllustrationComponent = () => {
  const brick = "#8C3B2E";
  const brickDark = shade(brick, 0.3);
  const river = "#4A90A4";
  return (
    <g>
      {/* river */}
      <path d="M90 250 Q200 240 320 250 L320 260 L90 260 Z" fill={river} opacity="0.5" />
      {/* fortress body */}
      <rect x="110" y="150" width="180" height="95" fill={brick} stroke={brickDark} strokeWidth="3" />
      {/* towers */}
      {[120, 195, 265].map((x, i) => (
        <g key={x}>
          <rect x={x} y={i === 1 ? 95 : 120} width="26" height={i === 1 ? 130 : 105} fill={brick} stroke={brickDark} strokeWidth="2.5" />
          <polygon points={`${x - 3},${i === 1 ? 95 : 120} ${x + 13},${(i === 1 ? 95 : 120) - 22} ${x + 29},${i === 1 ? 95 : 120}`} fill={brickDark} />
        </g>
      ))}
    </g>
  );
};

const PiernikiElPanDeJengibreDeTorun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const icing = "#FBFBFB";
  return (
    <g>
      {/* heart-shaped gingerbread */}
      <path d="M150 145 Q150 120 172 120 Q188 120 188 138 Q188 120 204 120 Q226 120 226 145 Q226 175 188 205 Q150 175 150 145 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M162 150 Q162 135 175 135 M200 135 Q213 135 213 150" fill="none" stroke={icing} strokeWidth="3" opacity="0.8" />
      {/* star gingerbread */}
      <path d="M270 155 L278 175 L300 175 L282 188 L289 210 L270 197 L251 210 L258 188 L240 175 L262 175 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <circle cx="270" cy="180" r="4" fill={icing} opacity="0.85" />
    </g>
  );
};

const LasCabrasDePoznanQueEmbistenAlMediodia: IllustrationComponent = () => {
  const metal = "#8A8F98";
  const dark = shade(metal, 0.4);
  return (
    <g>
      {/* clock tower window ledge */}
      <rect x="120" y="200" width="160" height="14" fill="#8B5A2B" />
      {/* left goat */}
      <path d="M155 200 Q145 175 165 165 Q180 160 185 175 L185 200 Z" fill={metal} stroke={dark} strokeWidth="2.5" />
      <path d="M155 172 Q148 160 140 162" fill="none" stroke={dark} strokeWidth="3" />
      {/* right goat, mirrored, heads meeting */}
      <path d="M245 200 Q255 175 235 165 Q220 160 215 175 L215 200 Z" fill={metal} stroke={dark} strokeWidth="2.5" />
      <path d="M245 172 Q252 160 260 162" fill="none" stroke={dark} strokeWidth="3" />
      {/* impact mark between heads */}
      <path d="M197 168 L203 176 L197 184 L203 176" stroke="#F4A300" strokeWidth="3" fill="none" />
    </g>
  );
};

const EsperantoElIdiomaInventadoEnPolonia: IllustrationComponent = () => {
  const green = "#0B7A3B";
  const blue = "#1565C0";
  return (
    <g>
      {/* globe */}
      <circle cx="180" cy="185" r="55" fill={tint(blue, 0.5)} stroke={shade(blue, 0.3)} strokeWidth="3" />
      <path d="M130 165 Q180 150 230 165 M125 195 Q180 210 235 195 M180 130 Q160 185 180 240 M180 130 Q200 185 180 240" fill="none" stroke={shade(blue, 0.3)} strokeWidth="1.5" opacity="0.6" />
      {/* green star */}
      <path d="M270 120 L278 140 L300 140 L282 153 L289 175 L270 162 L251 175 L258 153 L240 140 L262 140 Z" fill={green} stroke={shade(green, 0.3)} strokeWidth="2.5" />
    </g>
  );
};

const GrzybobranieElFinDeSemanaDeBuscarHongos: IllustrationComponent = () => {
  const wicker = "#B5834D";
  const cap = "#8B4513";
  const leaf = "#C1272D";
  const leaf2 = "#D4941E";
  return (
    <g>
      {/* wicker basket */}
      <path d="M140 205 L260 205 L245 245 L155 245 Z" fill={wicker} stroke={shade(wicker, 0.35)} strokeWidth="3" />
      {[150, 175, 200, 225, 250].map((x) => (
        <line key={x} x1={x} y1="205" x2={x - 5} y2="245" stroke={shade(wicker, 0.35)} strokeWidth="1.5" opacity="0.5" />
      ))}
      <path d="M150 205 Q200 180 250 205" fill="none" stroke={shade(wicker, 0.35)} strokeWidth="4" />
      {/* mushrooms poking out */}
      <ellipse cx="180" cy="195" rx="18" ry="12" fill={cap} stroke={shade(cap, 0.3)} strokeWidth="2" />
      <rect x="175" y="195" width="10" height="18" fill="#F5F0E6" />
      <ellipse cx="220" cy="192" rx="14" ry="10" fill={tint(cap, 0.25)} stroke={shade(cap, 0.3)} strokeWidth="2" />
      {/* autumn leaves */}
      <path d="M105 220 Q95 205 110 195 Q120 210 105 220 Z" fill={leaf} />
      <path d="M280 225 Q290 210 275 200 Q265 215 280 225 Z" fill={leaf2} />
    </g>
  );
};

export const polandIllustrations: Record<string, IllustrationDefinition> = {
  "wieliczka-la-mina-de-sal-con-catedral-incluida": { component: WieliczkaLaMinaDeSalConCatedralIncluida },
  "pierogi-el-plato-que-defiende-cada-region": { component: PierogiElPlatoQueCadaRegionDefiende },
  "solidarnosc-el-sindicato-que-tumbo-al-comunismo": { component: SolidarnoscElSindicatoQueTumboAlComunismo },
  "copernico-el-hombre-que-detuvo-al-sol": { component: CopernicoElHombreQueDetuvoAlSol },
  "el-corazon-de-chopin-guardado-en-una-columna": { component: ElCorazonDeChopinGuardadoEnUnaColumna },
  "bialowieza-el-ultimo-bosque-primitivo-de-europa": { component: BialowiezaElUltimoBosquePrimitivoDeEuropa },
  "varsovia-la-ciudad-reconstruida-con-pinturas": { component: VarsoviaLaCiudadReconstruidaConPinturas },
  "vodka-el-origen-que-polonia-y-rusia-se-disputan": { component: VodkaElOrigenQuePoloniaYRusiaSeDisputan },
  "el-dragon-de-wawel-que-escupe-fuego-de-verdad": { component: ElDragonDeWawelQueEscupeFuegoDeVerdad },
  "el-alfabeto-que-tiene-nueve-letras-que-no-existen-en-ingles": { component: ElAlfabetoQueTieneNueveLetrasQueNoExistenEnIngles },
  "marie-curie-unica-con-nobel-en-dos-ciencias": { component: MarieCurieUnicaConNobelEnDosCiencias },
  "los-husares-alados-caballeria-con-alas": { component: LosHusaresAladosCaballeriaConAlas },
  "los-matematicos-que-rompieron-enigma-primero": { component: LosMatematicosQueRompieronEnigmaPrimero },
  "wigilia-la-cena-con-un-plato-vacio-de-mas": { component: WigiliaLaCenaConUnPlatoVacioDeMas },
  "el-hejnal-mariacki-la-trompeta-que-se-corta": { component: ElHejnalMariackiLaTrompetaQueSeCorta },
  "malbork-el-castillo-de-ladrillo-mas-grande": { component: MalborkElCastilloDeLadrilloMasGrande },
  "pierniki-el-pan-de-jengibre-de-torun": { component: PiernikiElPanDeJengibreDeTorun },
  "las-cabras-de-poznan-que-embisten-al-mediodia": { component: LasCabrasDePoznanQueEmbistenAlMediodia },
  "esperanto-el-idioma-inventado-en-polonia": { component: EsperantoElIdiomaInventadoEnPolonia },
  "grzybobranie-el-fin-de-semana-de-buscar-hongos": { component: GrzybobranieElFinDeSemanaDeBuscarHongos },
};
