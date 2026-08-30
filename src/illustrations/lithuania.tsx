import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElEstadoMasGrandeDeLaEuropaMedieval: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      {/* Baltic coast on the left and Black Sea coast on the right, so the shaded
          shape between them reads as a landmass, not a floating blob */}
      <path d="M90 130 Q100 170 90 210" fill="none" stroke={water} strokeWidth="10" opacity="0.5" strokeLinecap="round" />
      <path d="M320 140 Q308 175 320 220" fill="none" stroke={water} strokeWidth="10" opacity="0.5" strokeLinecap="round" />

      {/* territory outline, an irregular polygon rather than a smooth lens so it reads as a map */}
      <path
        d="M120 145 L155 112 L200 108 L225 128 L255 105 L288 130 L300 165 L295 195 L275 225 L235 245 L190 240 L155 220 L130 195 L112 170 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      <path d="M140 180 Q195 168 250 185" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" strokeDasharray="3 4" />

      {/* three cities marked as dots */}
      <circle cx="150" cy="165" r="4" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
      <circle cx="210" cy="175" r="4" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
      <circle cx="265" cy="195" r="4" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
    </g>
  );
};

const CaminoBalticoCadenaHumanaDeDosMillones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="175" r="12" fill={skin} />
          <path d={`M${x - 14} 187 Q${x} 180 ${x + 14} 187 L${x + 12} 235 L${x - 12} 235 Z`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <line x1="142" y1="210" x2="163" y2="210" stroke={dark} strokeWidth="4" />
      <line x1="187" y1="210" x2="208" y2="210" stroke={dark} strokeWidth="4" />
      <line x1="232" y1="210" x2="253" y2="210" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const BaloncestoLaSegundaReligionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="90" width="10" height="130" fill={dark} />
      <ellipse cx="205" cy="90" rx="55" ry="10" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="230" cy="170" r="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M200 170 L260 170 M230 140 L230 200 M208 150 Q230 170 208 190 M252 150 Q230 170 252 190" stroke={dark} strokeWidth="2" fill="none" opacity="0.7" />
    </g>
  );
};

const AmbarElOroBaltico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 150 Q160 180 175 220 Q190 245 210 240 Q230 235 232 205 Q234 175 210 155 Q195 145 180 150 Z" fill={accentColor} opacity="0.8" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="195" rx="8" ry="5" fill={dark} opacity="0.6" />
      <path d="M195 190 L200 195 L195 200" stroke={dark} strokeWidth="1.5" fill="none" opacity="0.5" />
    </g>
  );
};

const CastilloDeTrakaiEnUnaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 230 Q205 245 320 230 L320 250 L90 250 Z" fill="#3D8FB0" opacity="0.6" />
      <rect x="160" y="170" width="90" height="60" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="150" width="20" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="240" y="150" width="20" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <polygon points="150,150 160,135 170,150" fill={dark} />
      <polygon points="240,150 250,135 260,150" fill={dark} />
      <rect x="197" y="200" width="16" height="30" fill={dark} opacity="0.6" />
    </g>
  );
};

const ColinaDeLasCrucesSimboloDeResistencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 Q205 210 320 250 Z" fill={accentColor} opacity="0.3" />
      {[[140, 235, 25], [170, 220, 35], [200, 225, 20], [230, 215, 40], [260, 230, 25], [290, 240, 18]].map(([x, y, h]) => (
        <g key={x as number}>
          <line x1={x} y1={y} x2={x} y2={(y as number) - (h as number)} stroke={dark} strokeWidth="2.5" />
          <line x1={(x as number) - 8} y1={(y as number) - (h as number) * 0.55} x2={(x as number) + 8} y2={(y as number) - (h as number) * 0.55} stroke={dark} strokeWidth="2.5" />
        </g>
      ))}
    </g>
  );
};

const CepelinaiElPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="80" ry="14" fill="#E8E4DC" opacity="0.6" />
      <ellipse cx="175" cy="195" rx="35" ry="22" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="245" cy="200" rx="32" ry="20" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M150 195 Q175 205 200 195" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      <path d="M220 200 Q245 210 270 200" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const UzupisLaRepublicaDeUnBarrio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 235 Q205 250 320 235 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.5" />

      {/* small stone bridge arching over the river */}
      <path
        d="M140 220 Q205 190 270 220 L270 232 Q205 208 140 232 Z"
        fill="#8B8378"
        stroke={dark}
        strokeWidth="2.5"
      />
      <line x1="150" y1="223" x2="150" y2="212" stroke={dark} strokeWidth="3" />
      <line x1="180" y1="205" x2="180" y2="196" stroke={dark} strokeWidth="3" />
      <line x1="230" y1="205" x2="230" y2="196" stroke={dark} strokeWidth="3" />
      <line x1="260" y1="223" x2="260" y2="212" stroke={dark} strokeWidth="3" />

      {/* welcome sign standing beside the bridge — the post's bottom (y=210) reaches a few
          units past the deck's own top surface at x=205 (y=205, from the deck's Bezier
          curve), so it plants into the bridge instead of floating above it */}
      <line x1="205" y1="161" x2="205" y2="210" stroke="#8B7355" strokeWidth="4" />
      <rect x="185" y="143" width="40" height="18" rx="3" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const DunasDeCurlandiaElSaharaBaltico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q140 170 205 210 Q260 165 320 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M90 250 Q205 230 320 250" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      {/* small pines scattered along the ridge — a triangle canopy plus a trunk, not a bare line */}
      {[
        [198, 205, 22],
        [225, 190, 26],
        [252, 168, 20],
      ].map(([x, y, h]) => (
        <g key={x as number}>
          <rect x={(x as number) - 2} y={y} width="4" height={(h as number) * 0.4} fill="#5C4A3A" />
          <polygon
            points={`${x},${(y as number) - h} ${(x as number) + (h as number) * 0.4},${y} ${(x as number) - (h as number) * 0.4},${y}`}
            fill="#2E4A3E"
          />
        </g>
      ))}
    </g>
  );
};

const ElUltimoPaisPaganoDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M195 250 L200 160 L210 160 L215 250 Z" fill="#5C4A3A" />
      <path d="M205 160 Q170 155 165 120 Q195 130 205 150 Q215 130 245 120 Q240 155 205 160 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[175, 230], [235, 235]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="10" ry="14" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="1.5" opacity="0.8" />
      ))}
    </g>
  );
};

const LaUniversidadDeVilnaUnaDeLasMasAntiguasDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="180" width="130" height="60" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[160, 190, 220, 250].map((x) => (
        <path key={x} d={`M${x - 10} 180 Q${x} 160 ${x + 10} 180`} fill="none" stroke={dark} strokeWidth="2.5" />
      ))}
      {/* observatory tower */}
      <rect x="195" y="120" width="20" height="60" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="110" r="14" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="2.5" />
      {/* zodiac star accents */}
      <circle cx="185" cy="100" r="2.5" fill="#D4AF37" />
      <circle cx="225" cy="95" r="2.5" fill="#D4AF37" />
      <circle cx="205" cy="80" r="2.5" fill="#D4AF37" />
    </g>
  );
};

const ElLituanoElIdiomaVivoMasParecidoAlIndoeuropeo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="205" y1="240" x2="205" y2="180" stroke="#5C4A3A" strokeWidth="8" />
      <path d="M205 200 Q170 190 150 160" stroke="#5C4A3A" strokeWidth="5" fill="none" />
      <path d="M205 190 Q240 175 260 145" stroke="#5C4A3A" strokeWidth="5" fill="none" />
      <path d="M205 180 Q205 150 205 110" stroke={accentColor} strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="205" cy="100" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" opacity="0.9" />
      <circle cx="150" cy="155" r="8" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <circle cx="260" cy="140" r="8" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const KaziukoMugeLaFeriaDeLasVerbasDecoradas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const blooms: [number, number, string][] = [
    [180, 180, accentColor],
    [230, 175, tint(accentColor, 0.3)],
    [195, 155, "#D4AF37"],
    [220, 150, "#C1272D"],
    [205, 130, tint(accentColor, 0.5)],
  ];
  return (
    <g>
      <line x1="205" y1="240" x2="205" y2="160" stroke="#B7752E" strokeWidth="6" />
      {/* each bloom is a 5-petal paper flower (rotate-transform, not Math.sin/cos, per the
          project's no-trig-at-render rule) instead of a flat dot, so it reads as a flower */}
      {blooms.map(([x, y, color], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse
              key={deg}
              cx={x}
              cy={(y as number) - 9}
              rx="5"
              ry="8"
              fill={color}
              stroke={dark}
              strokeWidth="1.2"
              transform={`rotate(${deg} ${x} ${y})`}
            />
          ))}
          <circle cx={x} cy={y} r="4" fill={dark} opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const ElPanNegroDeCentenoCasiSagradoParaLituania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="220" width="150" height="16" fill="#8B5A2B" />
      <path d="M155 220 Q155 175 205 170 Q255 175 255 220 Z" fill="#3E2712" stroke={dark} strokeWidth="3" />
      <path d="M165 210 Q205 195 245 210" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <path d="M175 195 Q205 182 235 195" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.3" />
    </g>
  );
};

const ElParqueGrutoUnMuseoDeEstatuasSovieticas: IllustrationComponent = () => {
  const stone = "#8B8378";
  const dark = shade(stone, 0.4);
  return (
    <g>
      <path d="M90 250 L120 160 L150 250 Z" fill="#2E4A3E" opacity="0.5" />
      <path d="M260 250 L290 150 L320 250 Z" fill="#2E4A3E" opacity="0.4" />
      {/* statue on a pedestal */}
      <rect x="180" y="220" width="50" height="20" fill="#6B6355" stroke={dark} strokeWidth="2" />
      <rect x="198" y="180" width="14" height="40" fill={stone} stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="168" r="14" fill={stone} stroke={dark} strokeWidth="2" />
      <line x1="192" y1="190" x2="180" y2="210" stroke={stone} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

export const lithuaniaIllustrations: Record<string, IllustrationDefinition> = {
  "el-estado-mas-grande-de-la-europa-medieval": { component: ElEstadoMasGrandeDeLaEuropaMedieval },
  "camino-baltico-cadena-humana-de-dos-millones": { component: CaminoBalticoCadenaHumanaDeDosMillones },
  "baloncesto-la-segunda-religion-nacional": { component: BaloncestoLaSegundaReligionNacional },
  "ambar-el-oro-baltico": { component: AmbarElOroBaltico },
  "castillo-de-trakai-en-una-isla": { component: CastilloDeTrakaiEnUnaIsla },
  "colina-de-las-cruces-simbolo-de-resistencia": { component: ColinaDeLasCrucesSimboloDeResistencia },
  "cepelinai-el-plato-nacional": { component: CepelinaiElPlatoNacional },
  "uzupis-la-republica-de-un-barrio": { component: UzupisLaRepublicaDeUnBarrio },
  "dunas-de-curlandia-el-sahara-baltico": { component: DunasDeCurlandiaElSaharaBaltico },
  "el-ultimo-pais-pagano-de-europa": { component: ElUltimoPaisPaganoDeEuropa },
  "la-universidad-de-vilna-una-de-las-mas-antiguas-de-europa": { component: LaUniversidadDeVilnaUnaDeLasMasAntiguasDeEuropa },
  "el-lituano-el-idioma-vivo-mas-parecido-al-indoeuropeo": { component: ElLituanoElIdiomaVivoMasParecidoAlIndoeuropeo },
  "kaziuko-muge-la-feria-de-las-verbas-decoradas": { component: KaziukoMugeLaFeriaDeLasVerbasDecoradas },
  "el-pan-negro-de-centeno-casi-sagrado-para-lituania": { component: ElPanNegroDeCentenoCasiSagradoParaLituania },
  "el-parque-gruto-un-museo-de-estatuas-sovieticas": { component: ElParqueGrutoUnMuseoDeEstatuasSovieticas },
};
