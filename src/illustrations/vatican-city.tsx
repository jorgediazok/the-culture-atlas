import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElPaisSoberanoMasPequenoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  const stone = tint(shade(accentColor, 0.2), 0.7);
  return (
    <g>
      {/* ground */}
      <path d="M120 220 Q200 208 280 220 L280 240 L120 240 Z" fill={light} opacity="0.5" />
      {/* walled enclosure */}
      <rect x="145" y="165" width="110" height="55" fill={stone} stroke={dark} strokeWidth="2" />
      {/* crenellations along the top of the wall */}
      {[148, 160, 172, 184, 196, 208, 220, 232, 244].map((x) => (
        <rect key={x} x={x} y="159" width="7" height="8" fill={stone} stroke={dark} strokeWidth="1.5" />
      ))}
      {/* gate */}
      <path d="M195 220 L195 200 Q200 194 205 200 L205 220 Z" fill={dark} />
      {/* the single building the enclosure surrounds */}
      <rect x="185" y="176" width="30" height="26" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M185 176 Q200 152 215 176 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <line x1="200" y1="152" x2="200" y2="142" stroke={dark} strokeWidth="2" />
      <line x1="196" y1="145" x2="204" y2="145" stroke={dark} strokeWidth="2" />
      {/* small flag marking sovereignty over such a tiny territory */}
      <line x1="252" y1="159" x2="252" y2="142" stroke={dark} strokeWidth="1.5" />
      <path d="M252 142 L264 146 L252 150 Z" fill={dark} />
    </g>
  );
};

const ElPapaLaUltimaMonarquiaAbsolutaDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const gold = tint(shade(accentColor, 0.1), 0.35);
  const goldDark = shade(gold, 0.3);
  return (
    <g>
      {/* tasseled cushion */}
      <path d="M150 210 Q150 194 200 194 Q250 194 250 210 Q250 222 200 222 Q150 222 150 210 Z" fill={dark} />
      <circle cx="150" cy="212" r="4" fill={dark} />
      <circle cx="250" cy="212" r="4" fill={dark} />
      <line x1="150" y1="216" x2="150" y2="226" stroke={dark} strokeWidth="2" />
      <line x1="250" y1="216" x2="250" y2="226" stroke={dark} strokeWidth="2" />
      {/* three-tiered papal tiara, tapering upward */}
      <path d="M172 194 Q172 180 200 178 Q228 180 228 194 Z" fill={gold} stroke={goldDark} strokeWidth="1.5" />
      <path d="M178 178 Q178 166 200 164 Q222 166 222 178 Z" fill={gold} stroke={goldDark} strokeWidth="1.5" />
      <path d="M184 164 Q184 154 200 152 Q216 154 216 164 Z" fill={gold} stroke={goldDark} strokeWidth="1.5" />
      {/* jewel band */}
      <circle cx="188" cy="187" r="2" fill={light} />
      <circle cx="200" cy="187" r="2" fill={light} />
      <circle cx="212" cy="187" r="2" fill={light} />
      {/* orb and cross on top */}
      <circle cx="200" cy="148" r="3.5" fill={gold} stroke={goldDark} strokeWidth="1.2" />
      <line x1="200" y1="144" x2="200" y2="134" stroke={goldDark} strokeWidth="2" />
      <line x1="195" y1="138" x2="205" y2="138" stroke={goldDark} strokeWidth="2" />
    </g>
  );
};

const LaGuardiaSuizaElEjercitoMasAntiguoActivo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const steel = "#B0B4B8";
  const steelDark = shade(steel, 0.35);
  const plume = "#F4A300";
  return (
    <g>
      {/* two crossed halberd poles */}
      <line x1="150" y1="232" x2="185" y2="100" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <line x1="250" y1="232" x2="215" y2="100" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      {/* halberd heads: a top spike plus a solid crescent axe blade, clearly metallic */}
      <polygon points="185,100 178,78 192,78" fill={steel} stroke={steelDark} strokeWidth="1.5" />
      <path d="M185 104 L182 118 Q162 128 148 112 Q150 96 168 96 Q178 96 185 104 Z" fill={steel} stroke={steelDark} strokeWidth="1.5" />
      <polygon points="215,100 208,78 222,78" fill={steel} stroke={steelDark} strokeWidth="1.5" />
      <path d="M215 104 L218 118 Q238 128 252 112 Q250 96 232 96 Q222 96 215 104 Z" fill={steel} stroke={steelDark} strokeWidth="1.5" />
      {/* plumed helmet, resting lower and clear of the crossing blades */}
      <path d="M178 212 Q178 190 200 188 Q222 190 222 212 L217 224 L183 224 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <rect x="182" y="224" width="36" height="8" fill={dark} />
      <path d="M200 188 Q188 172 194 152 Q200 168 200 188 Z" fill={plume} stroke={shade(plume, 0.3)} strokeWidth="1.2" />
      <path d="M200 188 Q212 170 206 150 Q200 166 200 188 Z" fill={shade(plume, 0.15)} stroke={shade(plume, 0.3)} strokeWidth="1.2" />
    </g>
  );
};

const NadieNaceSiendoCiudadanoVaticano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* open passport booklet */}
      <path d="M140 165 L198 158 L198 205 L140 212 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M198 158 L256 165 L256 212 L198 205 Z" fill={shade(accentColor, 0.15)} stroke={dark} strokeWidth="1.5" />
      <circle cx="169" cy="182" r="9" fill="none" stroke={light} strokeWidth="1.5" />
      <line x1="210" y1="175" x2="246" y2="177" stroke={light} strokeWidth="1.5" />
      <line x1="210" y1="183" x2="246" y2="185" stroke={light} strokeWidth="1.5" />
      <line x1="210" y1="191" x2="238" y2="193" stroke={light} strokeWidth="1.5" />
      {/* round stamp with an expiration mark, overlapping the passport */}
      <circle cx="222" cy="145" r="20" fill="none" stroke={dark} strokeWidth="3" opacity="0.85" />
      <line x1="208" y1="145" x2="236" y2="145" stroke={dark} strokeWidth="2" opacity="0.85" />
      <line x1="222" y1="131" x2="222" y2="159" stroke={dark} strokeWidth="1.2" opacity="0.6" transform="rotate(35 222 145)" />
    </g>
  );
};

const MonedaSelloPostalYRadioPropios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* radio tower */}
      <path d="M235 100 L223 210 M235 100 L247 210 M227 150 L243 150 M225 180 L245 180" stroke={dark} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* broadcast waves fanning from the tower top */}
      <path d="M247 118 Q259 106 271 118" fill="none" stroke={light} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M251 129 Q259 121 267 129" fill="none" stroke={light} strokeWidth="2" strokeLinecap="round" />
      <path d="M223 118 Q211 106 199 118" fill="none" stroke={light} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M219 129 Q211 121 203 129" fill="none" stroke={light} strokeWidth="2" strokeLinecap="round" />
      {/* stamped envelope beside the tower */}
      <rect x="138" y="196" width="46" height="30" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M138 196 L161 214 L184 196" fill="none" stroke={dark} strokeWidth="1.5" />
      <rect x="160" y="184" width="17" height="18" fill={light} stroke={dark} strokeWidth="1.2" />
    </g>
  );
};

const ElTechoDeLaCapillaSixtinaCuatroAnosPintando: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* hint of the fresco overhead: the famous almost-touching hands */}
      <path d="M140 118 Q200 96 260 118" fill="none" stroke={dark} strokeWidth="1.2" opacity="0.45" />
      <path d="M162 116 Q174 110 187 114" stroke={skin} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M238 116 Q226 109 213 114" stroke={skin} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* palette */}
      <path d="M146 200 Q136 178 164 170 Q196 161 208 184 Q213 199 196 206 Q189 209 182 201 Q175 209 158 206 Q144 204 146 200 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
      <circle cx="166" cy="185" r="4.5" fill={accentColor} />
      <circle cx="180" cy="178" r="4.5" fill={light} />
      <circle cx="193" cy="189" r="4.5" fill={dark} />
      <circle cx="176" cy="197" r="4.5" fill={tint(dark, 0.4)} />
      {/* paintbrush resting across it */}
      <g transform="rotate(35 225 165)">
        <rect x="222" y="130" width="6" height="55" rx="2" fill={dark} />
        <rect x="220" y="150" width="10" height="10" fill={light} />
        <path d="M218 190 L232 190 L225 205 Z" fill={accentColor} />
      </g>
    </g>
  );
};

const LosArchivosSecretosQueEnRealidadSonPrivados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.55);
  const wood = tint(shade(accentColor, 0.25), 0.55);
  const bookColors = [accentColor, dark, light, shade(accentColor, 0.2), tint(accentColor, 0.4)];
  return (
    <g>
      {/* two shelf tiers */}
      <rect x="140" y="150" width="120" height="8" fill={wood} />
      <rect x="140" y="200" width="120" height="8" fill={wood} />
      <rect x="140" y="150" width="6" height="58" fill={wood} />
      <rect x="254" y="150" width="6" height="58" fill={wood} />
      {/* top row of books, resting on the upper shelf */}
      {[148, 158, 168, 178, 188, 198, 208, 218, 228, 238].map((x, i) => {
        const h = 40 + (i % 3) * 4;
        return <rect key={`t${x}`} x={x} y={158 - h} width="8" height={h} fill={bookColors[i % bookColors.length]} />;
      })}
      {/* bottom row of books, resting on the lower shelf */}
      {[148, 158, 168, 178, 188, 198, 208, 218, 228, 238].map((x, i) => {
        const h = 26 + (i % 2) * 3;
        return <rect key={`b${x}`} x={x} y={208 - h} width="8" height={h} fill={bookColors[(i + 2) % bookColors.length]} />;
      })}
      {/* ladder leaning against the shelving */}
      <line x1="256" y1="146" x2="270" y2="222" stroke={wood} strokeWidth="3" strokeLinecap="round" />
      <line x1="248" y1="150" x2="262" y2="222" stroke={wood} strokeWidth="3" strokeLinecap="round" />
      <line x1="253" y1="170" x2="265" y2="169" stroke={wood} strokeWidth="2" />
      <line x1="251" y1="190" x2="263" y2="189" stroke={wood} strokeWidth="2" />
    </g>
  );
};

const LaBasilicaDeSanPedroLaIglesiaMasGrande: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* facade */}
      <rect x="168" y="190" width="64" height="30" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {[174, 186, 198, 210, 222].map((x) => (
        <rect key={x} x={x} y="196" width="6" height="24" fill={light} />
      ))}
      {/* drum and dome */}
      <rect x="180" y="168" width="40" height="22" fill={shade(accentColor, 0.1)} stroke={dark} strokeWidth="1.5" />
      <path d="M180 168 Q200 128 220 168 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M186 168 Q200 138 214 168 Z" fill="none" stroke={dark} strokeWidth="1" opacity="0.5" />
      {/* lantern and cross on top */}
      <rect x="196" y="118" width="8" height="10" fill={light} stroke={dark} strokeWidth="1" />
      <line x1="200" y1="118" x2="200" y2="104" stroke={dark} strokeWidth="2" />
      <line x1="195" y1="109" x2="205" y2="109" stroke={dark} strokeWidth="2" />
      {/* Bernini's colonnade, sweeping out from the facade in curving rows of columns */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={`l${i}`} x={160 - i * 11} y={210 + i * 3} width="4" height="16" fill={dark} opacity={0.85 - i * 0.08} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={`r${i}`} x={240 + i * 11} y={210 + i * 3} width="4" height="16" fill={dark} opacity={0.85 - i * 0.08} />
      ))}
    </g>
  );
};

const ElBancoVaticanoUnaInstitucionFinancieraUnica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const gold = tint(shade(accentColor, 0.05), 0.35);
  const goldDark = shade(gold, 0.35);
  return (
    <g>
      {/* stack of coins */}
      <ellipse cx="200" cy="206" rx="26" ry="8" fill={gold} stroke={goldDark} strokeWidth="1.5" />
      <ellipse cx="200" cy="198" rx="26" ry="8" fill={tint(gold, 0.15)} stroke={goldDark} strokeWidth="1.5" />
      <ellipse cx="200" cy="190" rx="26" ry="8" fill={gold} stroke={goldDark} strokeWidth="1.5" />
      <circle cx="200" cy="190" r="9" fill="none" stroke={goldDark} strokeWidth="1.2" />
      {/* two crossed keys, the Vatican's own emblem */}
      <g transform="rotate(-35 175 155)">
        <line x1="175" y1="120" x2="175" y2="185" stroke={goldDark} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="175" cy="118" r="9" fill="none" stroke={goldDark} strokeWidth="3.5" />
        <line x1="175" y1="178" x2="184" y2="178" stroke={goldDark} strokeWidth="3" />
        <line x1="175" y1="170" x2="182" y2="170" stroke={goldDark} strokeWidth="3" />
      </g>
      <g transform="rotate(35 225 155)">
        <line x1="225" y1="120" x2="225" y2="185" stroke={dark} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="225" cy="118" r="9" fill="none" stroke={dark} strokeWidth="3.5" />
        <line x1="225" y1="178" x2="216" y2="178" stroke={dark} strokeWidth="3" />
        <line x1="225" y1="170" x2="218" y2="170" stroke={dark} strokeWidth="3" />
      </g>
    </g>
  );
};

const LaMayorTasaDeDelitosPerCapitaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* open wallet */}
      <path d="M145 185 L145 215 Q145 221 151 221 L225 221 Q231 221 231 215 L231 185 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <path d="M145 185 Q188 170 231 185" fill="none" stroke={dark} strokeWidth="1.5" />
      <path d="M158 185 Q188 174 218 185" fill={light} opacity="0.7" />
      <line x1="160" y1="203" x2="216" y2="203" stroke={dark} strokeWidth="1" opacity="0.5" />
      {/* cash sticking out */}
      <g transform="rotate(-8 191 173)">
        <rect x="168" y="160" width="46" height="26" rx="2" fill={tint(accentColor, 0.35)} stroke={dark} strokeWidth="1.5" />
        <circle cx="191" cy="173" r="6" fill="none" stroke={dark} strokeWidth="1.2" />
      </g>
      {/* the puzzling question mark */}
      <path d="M252 175 Q252 162 264 162 Q276 162 276 174 Q276 182 266 186 L266 192" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <circle cx="266" cy="202" r="3" fill={dark} />
    </g>
  );
};

const LosJardinesVaticanosLaMitadDelTerritorio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  const hedge = shade(accentColor, 0.15);
  return (
    <g>
      {/* geometric parterre beds framing the fountain */}
      <rect x="150" y="165" width="45" height="45" fill={hedge} stroke={dark} strokeWidth="1.5" />
      <rect x="205" y="165" width="45" height="45" fill={hedge} stroke={dark} strokeWidth="1.5" />
      <rect x="150" y="165" width="100" height="8" fill={dark} opacity="0.5" />
      {/* central fountain */}
      <ellipse cx="200" cy="212" rx="30" ry="9" fill={light} stroke={dark} strokeWidth="1.5" />
      <rect x="192" y="188" width="16" height="24" fill={light} stroke={dark} strokeWidth="1.5" />
      <path d="M200 188 Q192 172 200 160 Q208 172 200 188 Z" fill={tint(accentColor, 0.4)} opacity="0.8" />
      {/* clipped topiary flanking the beds */}
      <circle cx="172" cy="150" r="10" fill={hedge} stroke={dark} strokeWidth="1.2" />
      <circle cx="228" cy="150" r="10" fill={hedge} stroke={dark} strokeWidth="1.2" />
    </g>
  );
};

const LaFumataLaSenalDeUnPapaNuevo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const light = tint(accentColor, 0.6);
  const smoke = "#F5F0E6";
  return (
    <g>
      {/* rooftop */}
      <polygon points="140,210 200,175 260,210" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <rect x="140" y="210" width="120" height="14" fill={dark} opacity="0.5" />
      {/* chimney */}
      <rect x="208" y="150" width="20" height="45" fill={light} stroke={dark} strokeWidth="1.5" />
      {/* rising smoke */}
      <path d="M218 150 Q205 130 220 112 Q232 96 218 78" fill="none" stroke={smoke} strokeWidth="10" strokeLinecap="round" opacity="0.9" />
      <path d="M218 150 Q205 130 220 112 Q232 96 218 78" fill="none" stroke={dark} strokeWidth="10.5" strokeLinecap="round" opacity="0.12" />
    </g>
  );
};

export const vaticanCityIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-soberano-mas-pequeno-del-mundo": { component: ElPaisSoberanoMasPequenoDelMundo },
  "el-papa-la-ultima-monarquia-absoluta-de-europa": { component: ElPapaLaUltimaMonarquiaAbsolutaDeEuropa },
  "la-guardia-suiza-el-ejercito-mas-antiguo-activo": { component: LaGuardiaSuizaElEjercitoMasAntiguoActivo },
  "nadie-nace-siendo-ciudadano-vaticano": { component: NadieNaceSiendoCiudadanoVaticano },
  "moneda-sello-postal-y-radio-propios": { component: MonedaSelloPostalYRadioPropios },
  "el-techo-de-la-capilla-sixtina-cuatro-anos-pintando": { component: ElTechoDeLaCapillaSixtinaCuatroAnosPintando },
  "los-archivos-secretos-que-en-realidad-son-privados": { component: LosArchivosSecretosQueEnRealidadSonPrivados },
  "la-basilica-de-san-pedro-la-iglesia-mas-grande": { component: LaBasilicaDeSanPedroLaIglesiaMasGrande },
  "el-banco-vaticano-una-institucion-financiera-unica": { component: ElBancoVaticanoUnaInstitucionFinancieraUnica },
  "la-mayor-tasa-de-delitos-per-capita-del-mundo": { component: LaMayorTasaDeDelitosPerCapitaDelMundo },
  "los-jardines-vaticanos-la-mitad-del-territorio": { component: LosJardinesVaticanosLaMitadDelTerritorio },
  "la-fumata-la-senal-de-un-papa-nuevo": { component: LaFumataLaSenalDeUnPapaNuevo },
};
