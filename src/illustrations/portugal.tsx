import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElFadoLaMusicaDeLaNostalgiaPortuguesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <circle cx="150" cy="140" r="16" fill={skin} />
      <path d="M120 155 Q150 140 180 155 L172 250 L128 250 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <path d="M115 165 Q100 175 105 195" stroke="#1A1A1A" strokeWidth="6" fill="none" opacity="0.7" />
      <circle cx="255" cy="195" r="38" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <circle cx="255" cy="195" r="14" fill="#3E2A1A" />
      <line x1="255" y1="157" x2="255" y2="140" stroke={dark} strokeWidth="4" />
      <circle cx="248" cy="140" r="3" fill={dark} />
      <circle cx="262" cy="140" r="3" fill={dark} />
    </g>
  );
};

const LaEraDeLosDescubrimientosUnImperioDiminuto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 230 L290 230 L270 250 L140 250 Z" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="230" x2="205" y2="120" stroke="#5C3A21" strokeWidth="5" />
      <path d="M205 130 L270 165 Q260 175 205 180 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M205 150 L155 180 Q165 190 205 195 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#1B5E7A" opacity="0.5" />
    </g>
  );
};

const BacalaoMilManerasDeCocinarUnPescadoQueNoTienen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="150" y1="90" x2="260" y2="90" stroke="#5C3A21" strokeWidth="4" />
      <path d="M205 95 Q170 100 165 150 Q160 190 190 210 Q205 218 220 210 Q250 190 245 150 Q240 100 205 95 Z" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="95" x2="205" y2="210" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="150" cy="230" rx="90" ry="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[120, 150, 180].map((x) => (
        <rect key={x} x={x - 8} y="205" width="16" height="30" fill="#E8C078" stroke={dark} strokeWidth="2" />
      ))}
      <circle cx="255" cy="225" r="10" fill={accentColor} opacity="0.8" />
    </g>
  );
};

const LosAzulejosQueCubrenFachadasEnteras: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="100" width="220" height="150" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (
          <rect key={`${row}-${col}`} x={110 + col * 34} y={110 + row * 28} width="30" height="24" fill={(row + col) % 2 === 0 ? accentColor : tint(accentColor, 0.35)} stroke={dark} strokeWidth="1" opacity="0.85" />
        ))
      )}
    </g>
  );
};

const ElTerremotoDeLisboaDe1755: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="150" width="70" height="100" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-4 135 200)" />
      <rect x="180" y="130" width="70" height="120" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" transform="rotate(3 215 190)" />
      <rect x="255" y="160" width="65" height="90" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-2 288 205)" />
      <path d="M150 150 L160 190 L145 220 L155 250" stroke={dark} strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M90 250 L320 250" stroke={dark} strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const LaTorreDeBelemPuntoDePartidaDeUnImperio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="150" width="60" height="100" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <rect x="165" y="120" width="80" height="35" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      {[175, 195, 215, 230].map((x) => (
        <rect key={x} x={x} y="112" width="8" height="12" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#1B5E7A" opacity="0.5" />
      {[190, 220].map((x) => (
        <rect key={x} x={x} y="185" width="14" height="20" fill={accentColor} opacity="0.6" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ElPastelDeNataYSuRecetaDeMonjas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 240 Q150 190 205 190 Q260 190 260 240 Z" fill="#E8C078" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="55" ry="16" fill="#F5E7A8" stroke={dark} strokeWidth="2.5" />
      <path d="M170 195 Q205 205 240 195" fill="none" stroke="#8B5A2B" strokeWidth="3" opacity="0.7" />
      {[170, 200, 230].map((x) => (
        <path key={x} d={`M${x} 240 Q${x} 220 ${x + 8} 210`} stroke={accentColor} strokeWidth="2.5" fill="none" opacity="0.6" />
      ))}
    </g>
  );
};

const FatimaElSantuarioDeLasAparicionesDe1917: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="170" y="160" width="70" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="195" y="110" width="20" height="60" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="192,110 205,90 218,110" fill={dark} opacity="0.5" />
      <ellipse cx="205" cy="245" rx="115" ry="10" fill="#9E9A92" opacity="0.4" />
      {[130, 160, 250, 280].map((x) => (
        <circle key={x} cx={x} cy="235" r="5" fill={accentColor} opacity="0.8" />
      ))}
    </g>
  );
};

const ElPaisConLasFronterasMasViejasDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="140" width="170" height="110" rx="4" fill="#E8DCC0" stroke={dark} strokeWidth="3" transform="rotate(-3 205 195)" />
      <ellipse cx="125" cy="195" rx="10" ry="55" fill="#D4C098" stroke={dark} strokeWidth="2" transform="rotate(-3 125 195)" />
      <ellipse cx="285" cy="195" rx="10" ry="55" fill="#D4C098" stroke={dark} strokeWidth="2" transform="rotate(-3 285 195)" />
      <circle cx="240" cy="220" r="20" fill={accentColor} stroke={dark} strokeWidth="2.5" opacity="0.85" />
    </g>
  );
};

const ElNumeroDeEmigrantesPortuguesesEnElMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="170" width="110" height="80" rx="8" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="155" width="40" height="20" rx="4" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="150" y1="210" x2="260" y2="210" stroke={dark} strokeWidth="2" opacity="0.4" />
      {[[110, 190], [290, 200], [270, 140]].map(([x, y], i) => (
        <rect key={`${x}-${y}`} x={x - 12} y={y - 10} width="24" height="18" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.8" transform={`rotate(${i % 2 === 0 ? -10 : 10} ${x} ${y})`} />
      ))}
    </g>
  );
};

const CristianoRonaldoDeMadeiraAlMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* soccer ball */}
      <circle cx="160" cy="195" r="45" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M160 165 L178 178 L172 198 L148 198 L142 178 Z" fill="#1A1A1A" />
      <path d="M160 165 L160 150 M178 178 L195 168 M172 198 L182 218 M148 198 L138 218 M142 178 L125 168" stroke="#1A1A1A" strokeWidth="2" />
      {/* trophy */}
      <path d="M255 150 L295 150 L290 185 Q275 195 260 185 Z" fill={gold} stroke={shade(gold, 0.35)} strokeWidth="2.5" />
      <rect x="270" y="195" width="10" height="20" fill={gold} />
      <rect x="258" y="215" width="34" height="10" fill={shade(gold, 0.2)} />
      <path d="M255 155 Q240 158 245 172 M295 155 Q310 158 305 172" fill="none" stroke={shade(gold, 0.35)} strokeWidth="2.5" />
    </g>
  );
};

const ElVinoDeOportoYElValleDelDuero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* glass of dark red wine */}
      <path d="M175 130 L225 130 L215 190 Q200 198 185 190 Z" fill="none" stroke={dark} strokeWidth="3" />
      <path d="M180 145 L220 145 L212 185 Q200 191 188 185 Z" fill={accentColor} opacity="0.85" />
      <line x1="200" y1="198" x2="200" y2="225" stroke={dark} strokeWidth="3" />
      <rect x="185" y="225" width="30" height="8" fill={dark} />
      {/* terraced vineyard hillside */}
      {[[250, 235], [270, 220], [290, 205], [310, 190]].map(([x, y], i) => (
        <rect key={i} x={x - 10} y={y} width="60" height="12" fill={tint(accentColor, i * 0.15)} stroke={dark} strokeWidth="1.5" opacity="0.8" />
      ))}
    </g>
  );
};

const PortugalElMayorProductorDeCorcho: IllustrationComponent = () => {
  const bark = "#8B5A2B";
  const trunk = "#B5651D";
  const leaf = "#5B8C3E";
  return (
    <g>
      {/* peeled tree trunk */}
      <path d="M175 240 L175 130 Q175 110 200 108 Q225 110 225 130 L225 240 Z" fill={trunk} stroke={shade(trunk, 0.35)} strokeWidth="2.5" />
      {/* remaining bark patch */}
      <path d="M175 200 L175 240 L195 240 L195 195 Z" fill={bark} stroke={shade(bark, 0.35)} strokeWidth="2" />
      <path d="M205 240 L205 210 L225 210 L225 240 Z" fill={bark} stroke={shade(bark, 0.35)} strokeWidth="2" />
      {/* leafy canopy */}
      <circle cx="200" cy="95" r="38" fill={leaf} opacity="0.85" />
      <circle cx="170" cy="105" r="26" fill={leaf} opacity="0.7" />
      <circle cx="230" cy="105" r="26" fill={leaf} opacity="0.7" />
    </g>
  );
};

const FernandoPessoaYSusHeteronimos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* hat */}
      <ellipse cx="200" cy="140" rx="46" ry="10" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M170 140 Q170 108 200 108 Q230 108 230 140 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* round glasses */}
      <circle cx="180" cy="175" r="16" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="220" cy="175" r="16" fill="none" stroke={dark} strokeWidth="3" />
      <line x1="196" y1="175" x2="204" y2="175" stroke={dark} strokeWidth="3" />
      {/* several different pens */}
      <line x1="130" y1="240" x2="145" y2="195" stroke="#5C3A21" strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="245" x2="205" y2="200" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
      <line x1="270" y1="240" x2="258" y2="198" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const LaRevolucionDeLosClavelesDe1974: IllustrationComponent = () => {
  const metal = "#8A8F98";
  const dark = shade(metal, 0.4);
  const carnation = "#C1272D";
  return (
    <g>
      {/* rifle barrel diagonal */}
      <rect x="120" y="220" width="180" height="18" rx="6" fill={metal} stroke={dark} strokeWidth="2.5" transform="rotate(-18 210 229)" />
      {/* carnation flower emerging from barrel */}
      <circle cx="290" cy="150" r="10" fill={carnation} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse key={deg} cx="290" cy="150" rx="14" ry="7" fill={carnation} opacity="0.85" transform={`rotate(${deg} 290 150)`} />
      ))}
      <circle cx="290" cy="150" r="5" fill="#F4D35E" />
      <line x1="290" y1="160" x2="285" y2="195" stroke="#5B8C3E" strokeWidth="3" />
    </g>
  );
};

const SintraYSusPalaciosDeCuento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mist = "#B0BEC5";
  return (
    <g>
      {/* misty hills */}
      <ellipse cx="120" cy="230" rx="60" ry="22" fill={mist} opacity="0.4" />
      <ellipse cx="290" cy="235" rx="55" ry="20" fill={mist} opacity="0.35" />
      {/* palace with pointed towers */}
      <rect x="160" y="175" width="90" height="65" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="130" width="24" height="70" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <path d="M150 130 L162 105 L174 130 Z" fill="#F4A300" />
      <rect x="236" y="120" width="24" height="80" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <path d="M236 120 L248 95 L260 120 Z" fill="#F4A300" />
    </g>
  );
};

const LaTouradaLaCorridaPortuguesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  const horse = "#8B5A2B";
  return (
    <g>
      {/* horse body */}
      <path d="M120 235 L120 195 Q120 178 150 175 L200 178 Q212 182 210 200 L206 235 Z" fill={horse} stroke={shade(horse, 0.35)} strokeWidth="2.5" />
      <path d="M195 178 Q210 168 220 175" fill="none" stroke={horse} strokeWidth="6" strokeLinecap="round" />
      {/* rider */}
      <circle cx="165" cy="150" r="12" fill={skin} />
      <path d="M155 160 Q165 155 178 160 L175 195 L155 195 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* short lance */}
      <line x1="178" y1="165" x2="240" y2="155" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
      {/* bull facing */}
      <path d="M260 235 L260 195 Q260 178 285 175 Q305 178 302 200 L298 235 Z" fill={dark} />
      <path d="M255 178 Q245 165 235 168 M300 178 Q312 165 322 168" stroke={dark} strokeWidth="4" fill="none" />
    </g>
  );
};

const NazareYSusOlasGigantes: IllustrationComponent = () => {
  const wave = "#0A4D68";
  const foam = "#F5F0E6";
  return (
    <g>
      {/* enormous curling wave */}
      <path d="M90 240 Q100 140 200 110 Q300 90 300 170 Q280 150 250 165 Q270 180 255 200 Q230 175 210 195 Q225 210 205 220 Q190 200 170 215 Q180 230 160 235 Q140 220 120 235 Q110 240 90 240 Z" fill={wave} stroke={shade(wave, 0.3)} strokeWidth="2.5" />
      <path d="M270 100 Q290 110 295 135" fill="none" stroke={foam} strokeWidth="6" opacity="0.8" />
      {/* tiny surfer */}
      <circle cx="215" cy="150" r="5" fill="#E8B989" />
      <line x1="215" y1="155" x2="212" y2="168" stroke="#1A1A1A" strokeWidth="2.5" />
      <rect x="200" y="165" width="22" height="4" rx="2" fill="#F4A300" transform="rotate(-15 211 167)" />
    </g>
  );
};

const LaUniversidadDeCoimbra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* ornate gilded shelves */}
      <rect x="120" y="120" width="170" height="120" fill="#5C3A21" stroke={dark} strokeWidth="3" />
      {[135, 160, 185, 210].map((y) => (
        <line key={y} x1="130" y1={y} x2="280" y2={y} stroke={gold} strokeWidth="2" opacity="0.7" />
      ))}
      {[130, 155, 180, 205, 230, 255].map((x, i) => (
        <rect key={x} x={x} y="130" width="14" height="20" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} />
      ))}
      {/* small bat flying */}
      <path d="M255 100 Q245 90 235 98 Q245 95 255 100 Q265 95 275 98 Q265 90 255 100 Z" fill="#1A1A1A" />
    </g>
  );
};

const ElGaloDeBarcelos: IllustrationComponent = () => {
  const black = "#1A1A1A";
  const gold = "#D4A017";
  const red = "#C1272D";
  return (
    <g>
      {/* rooster body */}
      <path d="M170 240 Q160 200 180 175 Q195 155 220 160 Q245 165 245 195 Q245 220 220 235 Z" fill={black} stroke={shade(black, 0.3)} strokeWidth="2.5" />
      {/* comb and beak */}
      <path d="M195 158 Q198 145 210 148 Q205 155 195 158 Z" fill={red} />
      <path d="M225 165 L245 168 L228 178 Z" fill="#F4A300" />
      {/* floral patterns on body */}
      {[[195, 195], [215, 210], [200, 220]].map(([x, y], i) => (
        <circle key={i} cx={x as number} cy={y as number} r="6" fill={i % 2 === 0 ? gold : "#F5F0E6"} opacity="0.9" />
      ))}
      <circle cx="210" cy="170" r="3" fill="#F5F0E6" />
    </g>
  );
};

export const portugalIllustrations: Record<string, IllustrationDefinition> = {
  "el-fado-la-musica-de-la-nostalgia-portuguesa": { component: ElFadoLaMusicaDeLaNostalgiaPortuguesa },
  "la-era-de-los-descubrimientos-un-imperio-diminuto": { component: LaEraDeLosDescubrimientosUnImperioDiminuto },
  "bacalao-mil-maneras-de-cocinar-un-pescado-que-no-tienen": { component: BacalaoMilManerasDeCocinarUnPescadoQueNoTienen },
  "los-azulejos-que-cubren-fachadas-enteras": { component: LosAzulejosQueCubrenFachadasEnteras },
  "el-terremoto-de-lisboa-de-1755": { component: ElTerremotoDeLisboaDe1755 },
  "la-torre-de-belem-punto-de-partida-de-un-imperio": { component: LaTorreDeBelemPuntoDePartidaDeUnImperio },
  "el-pastel-de-nata-y-su-receta-de-monjas": { component: ElPastelDeNataYSuRecetaDeMonjas },
  "fatima-el-santuario-de-las-apariciones-de-1917": { component: FatimaElSantuarioDeLasAparicionesDe1917 },
  "el-pais-con-las-fronteras-mas-viejas-de-europa": { component: ElPaisConLasFronterasMasViejasDeEuropa },
  "el-numero-de-emigrantes-portugueses-en-el-mundo": { component: ElNumeroDeEmigrantesPortuguesesEnElMundo },
  "cristiano-ronaldo-de-madeira-al-mundo": { component: CristianoRonaldoDeMadeiraAlMundo },
  "el-vino-de-oporto-y-el-valle-del-duero": { component: ElVinoDeOportoYElValleDelDuero },
  "portugal-el-mayor-productor-de-corcho": { component: PortugalElMayorProductorDeCorcho },
  "fernando-pessoa-y-sus-heteronimos": { component: FernandoPessoaYSusHeteronimos },
  "la-revolucion-de-los-claveles-de-1974": { component: LaRevolucionDeLosClavelesDe1974 },
  "sintra-y-sus-palacios-de-cuento": { component: SintraYSusPalaciosDeCuento },
  "la-tourada-la-corrida-portuguesa": { component: LaTouradaLaCorridaPortuguesa },
  "nazare-y-sus-olas-gigantes": { component: NazareYSusOlasGigantes },
  "la-universidad-de-coimbra": { component: LaUniversidadDeCoimbra },
  "el-galo-de-barcelos": { component: ElGaloDeBarcelos },
};
