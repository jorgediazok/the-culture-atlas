import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaRepublicaMasAntiguaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const parchment = tint(shade(accentColor, 0.1), 0.65);
  const wax = "#B71C1C";
  return (
    <g>
      {/* rolled parchment */}
      <rect x="130" y="155" width="140" height="55" rx="5" fill={parchment} stroke={dark} strokeWidth="3" />
      <ellipse cx="130" cy="182" rx="12" ry="28" fill={tint(parchment, 0.25)} stroke={dark} strokeWidth="3" />
      <ellipse cx="270" cy="182" rx="12" ry="28" fill={tint(parchment, 0.25)} stroke={dark} strokeWidth="3" />
      {[168, 182, 196].map((y) => (
        <line key={y} x1="155" y1={y} x2="245" y2={y} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* ribbon and old wax seal */}
      <path d="M190 210 L190 235 L200 226 L210 235 L210 210 Z" fill={dark} />
      <circle cx="200" cy="238" r="16" fill={wax} stroke={shade(wax, 0.3)} strokeWidth="2" />
      <circle cx="200" cy="238" r="8" fill="none" stroke={shade(wax, 0.5)} strokeWidth="1.5" />
    </g>
  );
};

const LasTresTorresDelMonteTitano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      {/* mountain ridge */}
      <polygon points="90,240 150,200 200,215 250,190 310,240" fill={dark} opacity="0.25" />
      {/* Guaita */}
      <rect x="120" y="170" width="24" height="50" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="116,170 132,148 148,170" fill={dark} />
      {/* Cesta, tallest, center */}
      <rect x="188" y="140" width="26" height="80" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="184,140 201,115 218,140" fill={dark} />
      {/* Montale, smallest */}
      <rect x="256" y="180" width="20" height="40" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="253,180 266,160 279,180" fill={dark} />
    </g>
  );
};

const chairAt = (x: number, accentColor: string, dark: string) => (
  <g key={x}>
    <rect x={x} y="140" width="44" height="60" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    <rect x={x - 4} y="190" width="52" height="12" rx="3" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    <line x1={x} y1="202" x2={x} y2="230" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    <line x1={x + 44} y1="202" x2={x + 44} y2="230" stroke={dark} strokeWidth="5" strokeLinecap="round" />
  </g>
);

const DosJefesDeEstadoQueCambianCadaSeisMeses: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {chairAt(120, accentColor, dark)}
      {chairAt(220, accentColor, dark)}
    </g>
  );
};

const ElCuerpoDeBallesterosQueDesfilaHaceSiglos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#6B4423";
  const metal = "#8A8A8A";
  return (
    <g>
      {/* banner behind */}
      <path d="M150 165 L250 165 L250 225 L200 210 L150 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* crossbow, kept above the banner so its own silhouette reads clearly */}
      <rect x="192" y="110" width="16" height="70" fill={wood} stroke={dark} strokeWidth="2" />
      <path d="M120 130 Q160 110 200 130 Q240 110 280 130" fill="none" stroke={metal} strokeWidth="7" strokeLinecap="round" />
      <line x1="125" y1="133" x2="275" y2="133" stroke={dark} strokeWidth="2" opacity="0.7" />
      {/* bolt nocked on the string */}
      <line x1="200" y1="133" x2="200" y2="105" stroke={dark} strokeWidth="3" strokeLinecap="round" />
      <polygon points="196,105 200,95 204,105" fill={dark} />
    </g>
  );
};

const SHELTER_HOUSE_X = [130, 175, 220];

const ElPaisQueRefugioAMasGenteDeLaQueTenia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* one big protective roof over everything */}
      <path d="M100 190 L200 120 L300 190 Z" fill={dark} opacity="0.85" />
      {/* small houses huddled beneath it */}
      {SHELTER_HOUSE_X.map((x, i) => (
        <g key={x}>
          <rect x={x} y="185" width="35" height="45" fill={i % 2 === 0 ? accentColor : light} stroke={dark} strokeWidth="2" />
          <polygon points={`${x - 4},185 ${x + 17.5},165 ${x + 39},185`} fill={dark} opacity="0.6" />
        </g>
      ))}
    </g>
  );
};

const ElPrimerGobiernoComunistaElectoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* ballot box */}
      <path d="M150 190 L250 190 L240 235 L160 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="178" width="100" height="14" fill={dark} />
      <rect x="188" y="178" width="24" height="6" fill="#000" opacity="0.5" />
      {/* voting slip dropping in */}
      <g transform="rotate(-8 200 145)">
        <rect x="190" y="130" width="20" height="30" fill={light} stroke={dark} strokeWidth="2" />
        <line x1="196" y1="140" x2="204" y2="140" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      </g>
    </g>
  );
};

const ElGolMasRapidoEnLaHistoriaDeLosMundiales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* goal net */}
      <rect x="220" y="130" width="80" height="70" fill="none" stroke={dark} strokeWidth="3" />
      {[235, 250, 265, 280, 295].map((x) => (
        <line key={`v-${x}`} x1={x} y1="130" x2={x} y2="200" stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      {[145, 160, 175, 190].map((y) => (
        <line key={`h-${y}`} x1="220" y1={y} x2="300" y2={y} stroke={dark} strokeWidth="1" opacity="0.4" />
      ))}
      {/* ball with speed lines behind it */}
      <circle cx="180" cy="170" r="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="180,158 188,166 185,176 175,176 172,166" fill={dark} opacity="0.7" />
      <line x1="100" y1="150" x2="150" y2="160" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      <line x1="100" y1="170" x2="150" y2="172" stroke={dark} strokeWidth="2.5" opacity="0.5" />
      <line x1="100" y1="190" x2="150" y2="182" stroke={dark} strokeWidth="2.5" opacity="0.5" />
    </g>
  );
};

const SHIP_WATER = "#4A7A9C";

const ElRegistroNavalDeUnPaisQueNoTieneMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* stylized waves */}
      <path d="M90 210 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={SHIP_WATER} strokeWidth="5" />
      <path d="M90 225 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke={tint(SHIP_WATER, 0.3)} strokeWidth="5" />
      {/* hull */}
      <polygon points="140,195 260,195 245,220 155,220" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* cargo containers */}
      <rect x="155" y="165" width="30" height="30" fill={dark} />
      <rect x="190" y="170" width="30" height="25" fill={dark} opacity="0.7" />
      {/* bridge */}
      <rect x="225" y="160" width="20" height="35" fill={dark} opacity="0.9" />
    </g>
  );
};

const STAMP_TEETH_X = [130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 270];

const LasEstampillasCodiciadasPorColeccionistas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="130" y="140" width="140" height="100" fill="#fff" stroke={dark} strokeWidth="2" />
      {STAMP_TEETH_X.map((x) => (
        <circle key={`t-${x}`} cx={x} cy="140" r="6" fill="#F5F0E6" />
      ))}
      {STAMP_TEETH_X.map((x) => (
        <circle key={`b-${x}`} cx={x} cy="240" r="6" fill="#F5F0E6" />
      ))}
      {[150, 190, 230].map((y) => (
        <circle key={`l-${y}`} cx="130" cy={y} r="6" fill="#F5F0E6" />
      ))}
      {[150, 190, 230].map((y) => (
        <circle key={`r-${y}`} cx="270" cy={y} r="6" fill="#F5F0E6" />
      ))}
      {/* colorful stamp design inside */}
      <rect x="145" y="155" width="110" height="70" fill={accentColor} />
      <polygon points="170,215 200,165 230,215" fill={light} />
      <circle cx="200" cy="180" r="12" fill={dark} />
    </g>
  );
};

const LaTelecabinaQueConectaSusDosCiudades: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* tilted cable, mountain town to the valley town */}
      <line x1="120" y1="130" x2="290" y2="220" stroke={dark} strokeWidth="3" opacity="0.6" />
      <line x1="120" y1="140" x2="290" y2="230" stroke={dark} strokeWidth="2" opacity="0.4" />
      {/* mountain town at the top */}
      <polygon points="100,150 130,120 160,150" fill={dark} opacity="0.4" />
      {/* cabin hanging from the cable */}
      <line x1="205" y1="175" x2="205" y2="190" stroke={dark} strokeWidth="2" />
      <rect x="180" y="190" width="50" height="34" rx="6" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="190" y="198" width="14" height="16" fill={light} />
      <rect x="208" y="198" width="14" height="16" fill={light} />
    </g>
  );
};

export const sanMarinoIllustrations: Record<string, IllustrationDefinition> = {
  "la-republica-mas-antigua-del-mundo": { component: LaRepublicaMasAntiguaDelMundo },
  "las-tres-torres-del-monte-titano": { component: LasTresTorresDelMonteTitano },
  "dos-jefes-de-estado-que-cambian-cada-seis-meses": { component: DosJefesDeEstadoQueCambianCadaSeisMeses },
  "el-cuerpo-de-ballesteros-que-desfila-hace-siglos": { component: ElCuerpoDeBallesterosQueDesfilaHaceSiglos },
  "el-pais-que-refugio-a-mas-gente-de-la-que-tenia": { component: ElPaisQueRefugioAMasGenteDeLaQueTenia },
  "el-primer-gobierno-comunista-electo-del-mundo": { component: ElPrimerGobiernoComunistaElectoDelMundo },
  "el-gol-mas-rapido-en-la-historia-de-los-mundiales": { component: ElGolMasRapidoEnLaHistoriaDeLosMundiales },
  "el-registro-naval-de-un-pais-que-no-tiene-mar": { component: ElRegistroNavalDeUnPaisQueNoTieneMar },
  "las-estampillas-codiciadas-por-coleccionistas": { component: LasEstampillasCodiciadasPorColeccionistas },
  "la-telecabina-que-conecta-sus-dos-ciudades": { component: LaTelecabinaQueConectaSusDosCiudades },
};
