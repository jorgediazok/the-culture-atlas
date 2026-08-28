import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AsentirParaDecirNoYNegarParaDecirSi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* stylized head in profile */}
      <circle cx="185" cy="195" r="20" fill={skin} stroke={dark} strokeWidth="1.5" />
      <path d="M203 190 L215 197 L203 204 Z" fill={skin} stroke={dark} strokeWidth="1.5" />
      <circle cx="192" cy="188" r="2.2" fill={dark} />
      {/* curved vertical arrow: the up-down nod that here actually means "no" */}
      <line x1="178" y1="122" x2="178" y2="156" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M171 129 L178 120 L185 129" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M171 149 L178 158 L185 149" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="190" y="144" fontSize="13" fontWeight="700" fill={dark} fontFamily="sans-serif">NO</text>
      {/* curved horizontal arrow: the side-to-side shake that here actually means "yes" */}
      <line x1="222" y1="176" x2="254" y2="176" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M229 169 L220 176 L229 183" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M247 169 L256 176 L247 183" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="222" y="198" fontSize="13" fontWeight="700" fill={dark} fontFamily="sans-serif">SÍ</text>
    </g>
  );
};

const ElAlfabetoCirilicoNacioAqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const paper = tint(shade(accentColor, 0.1), 0.7);
  return (
    <g>
      {/* open book */}
      <path d="M140 175 L198 166 L198 220 L140 229 Z" fill={paper} stroke={dark} strokeWidth="1.5" />
      <path d="M198 166 L256 175 L256 229 L198 220 Z" fill={tint(paper, 0.2)} stroke={dark} strokeWidth="1.5" />
      <line x1="198" y1="166" x2="198" y2="220" stroke={dark} strokeWidth="2" />
      {/* Cyrillic letters across both pages */}
      <text x="152" y="200" fontSize="22" fontWeight="700" fill={accentColor} fontFamily="serif">Б</text>
      <text x="176" y="212" fontSize="16" fontWeight="700" fill={dark} fontFamily="serif">Я</text>
      <text x="212" y="198" fontSize="22" fontWeight="700" fill={accentColor} fontFamily="serif">Ж</text>
      <text x="236" y="212" fontSize="16" fontWeight="700" fill={dark} fontFamily="serif">Ѕ</text>
      {/* bookmark ribbon */}
      <path d="M190 166 L190 148 L196 154 L202 148 L202 166 Z" fill={dark} />
    </g>
  );
};

const LaBacteriaDelYogurLlevaElNombreDelPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  const cream = tint(shade(accentColor, 0.05), 0.4);
  return (
    <g>
      {/* glass jar */}
      <path d="M172 165 L172 155 Q172 150 178 150 L204 150 Q210 150 210 155 L210 165 L214 220 Q214 228 206 228 L176 228 Q168 228 168 220 Z" fill="none" stroke={dark} strokeWidth="2" />
      {/* creamy yogurt filling */}
      <path d="M170 195 L212 195 L214 220 Q214 228 206 228 L176 228 Q168 228 168 220 Z" fill={cream} />
      <path d="M170 195 Q191 188 212 195" fill="none" stroke={shade(cream, 0.2)} strokeWidth="1.5" />
      {/* lid */}
      <rect x="169" y="144" width="42" height="8" rx="2" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {/* spoon dipped in, dripping */}
      <line x1="228" y1="160" x2="200" y2="206" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="230" cy="154" rx="7" ry="10" fill={light} stroke={dark} strokeWidth="1.5" transform="rotate(-25 230 154)" />
      <circle cx="203" cy="212" r="2" fill={cream} />
    </g>
  );
};

const ROSE_PETAL_ANGLES = [0, 60, 120, 180, 240, 300];

const ElValleQuePerfumaAlMundoConRosas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const leafGreen = tint(shade("#3E7D32", 0.1), 0.15);
  return (
    <g>
      {/* stem */}
      <path d="M200 210 Q196 190 200 168" fill="none" stroke={shade(leafGreen, 0.1)} strokeWidth="3" strokeLinecap="round" />
      {/* thorns */}
      <path d="M199 200 L192 196 M201 186 L209 182" stroke={shade(leafGreen, 0.1)} strokeWidth="2" strokeLinecap="round" />
      {/* leaves */}
      <path d="M200 202 Q186 200 182 212 Q194 212 200 202 Z" fill={leafGreen} />
      <path d="M200 190 Q214 186 220 196 Q206 198 200 190 Z" fill={leafGreen} />
      {/* open rose bloom: a rosette of overlapping petals around a bud */}
      {ROSE_PETAL_ANGLES.map((angle) => (
        <ellipse
          key={angle}
          cx="200"
          cy="138"
          rx="8"
          ry="15"
          fill={accentColor}
          stroke={dark}
          strokeWidth="1"
          opacity="0.92"
          transform={`rotate(${angle} 200 150)`}
        />
      ))}
      <circle cx="200" cy="150" r="7" fill={light} stroke={dark} strokeWidth="1" />
      <circle cx="200" cy="150" r="3" fill={dark} opacity="0.6" />
    </g>
  );
};

const LosTesorosDeOroEnterradosPorLosTracios: IllustrationComponent = ({ accentColor }) => {
  const gold = tint(shade(accentColor, 0.05), 0.3);
  const goldDark = shade(gold, 0.3);
  const earth = tint(shade("#6D4C41", 0.1), 0.3);
  return (
    <g>
      {/* mound of earth the vessel was unearthed from */}
      <path d="M150 220 Q200 206 250 220 L250 228 L150 228 Z" fill={earth} />
      {/* ornate golden vessel */}
      <path d="M182 172 Q178 190 182 210 Q188 220 200 220 Q212 220 218 210 Q222 190 218 172 Z" fill={gold} stroke={goldDark} strokeWidth="1.5" />
      <ellipse cx="200" cy="172" rx="18" ry="6" fill={tint(gold, 0.2)} stroke={goldDark} strokeWidth="1.5" />
      {/* handles */}
      <path d="M182 180 Q170 182 172 196 Q178 194 182 188" fill="none" stroke={goldDark} strokeWidth="3" />
      <path d="M218 180 Q230 182 228 196 Q222 194 218 188" fill="none" stroke={goldDark} strokeWidth="3" />
      {/* relief bands */}
      <line x1="184" y1="192" x2="216" y2="192" stroke={goldDark} strokeWidth="1.2" opacity="0.7" />
      <line x1="185" y1="202" x2="215" y2="202" stroke={goldDark} strokeWidth="1.2" opacity="0.7" />
      {/* loose coins beside it in the earth */}
      <circle cx="160" cy="220" r="5" fill={gold} stroke={goldDark} strokeWidth="1" />
      <circle cx="242" cy="222" r="4" fill={gold} stroke={goldDark} strokeWidth="1" />
    </g>
  );
};

const ElMonasterioARayasEnLoAltoDeLaMontana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const stripeRed = "#B71C1C";
  const stripeWhite = "#F5F0E6";
  const mountain = tint(shade(accentColor, 0.2), 0.5);
  return (
    <g>
      {/* mountains behind */}
      <path d="M130 190 L165 140 L195 190 Z" fill={mountain} opacity="0.6" />
      <path d="M190 190 L230 130 L270 190 Z" fill={mountain} opacity="0.8" />
      {/* monastery block */}
      <rect x="160" y="185" width="80" height="35" fill={light} stroke={dark} strokeWidth="1.5" />
      {/* striped archway */}
      <path d="M178 220 L178 198 Q200 184 222 198 L222 220 Z" fill="#fff" stroke={dark} strokeWidth="1.5" />
      {[178, 185, 193, 200, 208, 215].map((x, i) => (
        <rect key={x} x={x} y="198" width="8" height="22" fill={i % 2 === 0 ? stripeRed : stripeWhite} />
      ))}
      {/* dome roof */}
      <path d="M188 185 Q200 168 212 185 Z" fill={dark} />
      <line x1="200" y1="168" x2="200" y2="158" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosKukeriFigurasCubiertasDeCascabeles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const bell = "#D4A017";
  return (
    <g>
      {/* shaggy fur mask, head shape */}
      <path d="M175 178 Q168 156 200 150 Q232 156 225 178 Q229 198 200 203 Q171 198 175 178 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {/* shaggy fur tufts all around the perimeter */}
      {[
        [172, 172], [174, 158], [180, 146], [188, 140], [196, 138], [204, 138],
        [212, 140], [220, 146], [226, 158], [228, 172], [226, 186], [174, 186],
      ].map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x} ${y} l-5 -6 l8 1 Z`} fill={dark} opacity="0.55" />
      ))}
      {/* thick curved horns */}
      <path d="M183 148 Q160 140 154 114 Q176 122 189 146 Z" fill={dark} />
      <path d="M217 148 Q240 140 246 114 Q224 122 211 146 Z" fill={dark} />
      {/* exaggerated eyes */}
      <circle cx="189" cy="174" r="5" fill="#fff" />
      <circle cx="211" cy="174" r="5" fill="#fff" />
      <circle cx="189" cy="174" r="2.2" fill={dark} />
      <circle cx="211" cy="174" r="2.2" fill={dark} />
      {/* open mouth with fangs */}
      <path d="M186 188 Q200 200 214 188 L214 194 Q200 206 186 194 Z" fill={dark} />
      <path d="M191 190 L188 198 L195 191 Z" fill="#fff" />
      <path d="M209 190 L212 198 L205 191 Z" fill="#fff" />
      {/* hanging bells along the bottom edge */}
      {[180, 192, 200, 208, 220].map((x) => (
        <g key={x}>
          <line x1={x} y1="203" x2={x} y2="213" stroke={dark} strokeWidth="1.5" />
          <circle cx={x} cy="218" r="4" fill={bell} stroke={shade(bell, 0.3)} strokeWidth="1" />
        </g>
      ))}
    </g>
  );
};

const ElMonumentoComunistaConFormaDeOvni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* mountain peak */}
      <path d="M130 220 L185 150 L240 220 Z" fill={tint(shade(accentColor, 0.2), 0.55)} opacity="0.7" />
      {/* support pylon */}
      <rect x="196" y="180" width="8" height="30" fill={dark} />
      {/* saucer-shaped disc */}
      <ellipse cx="200" cy="172" rx="42" ry="14" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="200" cy="168" rx="30" ry="9" fill={light} opacity="0.5" />
      {/* cracked, broken windows showing abandonment */}
      <rect x="182" y="164" width="6" height="6" fill={dark} opacity="0.6" />
      <rect x="196" y="162" width="6" height="6" fill={dark} opacity="0.4" />
      <rect x="212" y="164" width="6" height="6" fill={dark} opacity="0.6" />
      {/* star-shaped tower on top */}
      <line x1="200" y1="158" x2="200" y2="128" stroke={dark} strokeWidth="2.5" />
      <path d="M200 118 L204 128 L214 128 L206 134 L209 144 L200 138 L191 144 L194 134 L186 128 L196 128 Z" fill={dark} />
    </g>
  );
};

const UnoDeLosEstadosMasAntiguosDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const parchment = tint(shade(accentColor, 0.1), 0.65);
  const wax = "#B71C1C";
  return (
    <g>
      {/* rolled parchment */}
      <rect x="160" y="175" width="90" height="34" rx="4" fill={parchment} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="160" cy="192" rx="7" ry="17" fill={tint(parchment, 0.3)} stroke={dark} strokeWidth="1.5" />
      <ellipse cx="250" cy="192" rx="7" ry="17" fill={tint(parchment, 0.3)} stroke={dark} strokeWidth="1.5" />
      {/* faint text lines */}
      <line x1="178" y1="184" x2="232" y2="184" stroke={dark} strokeWidth="1" opacity="0.4" />
      <line x1="178" y1="192" x2="228" y2="192" stroke={dark} strokeWidth="1" opacity="0.4" />
      <line x1="178" y1="200" x2="220" y2="200" stroke={dark} strokeWidth="1" opacity="0.4" />
      {/* ribbon and wax seal */}
      <path d="M198 209 L198 222 L202 218 L206 222 L206 209 Z" fill={dark} />
      <circle cx="202" cy="222" r="10" fill={wax} stroke={shade(wax, 0.3)} strokeWidth="1.5" />
      <circle cx="202" cy="222" r="5" fill="none" stroke={shade(wax, 0.5)} strokeWidth="1" />
    </g>
  );
};

const ElCantoAGargantaAbiertaQueGanoUnGrammy: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  const gold = "#D4A017";
  const singer = (x: number, fill: string) => (
    <g key={x}>
      <path d={`M${x - 10} 210 Q${x - 10} 192 ${x} 190 Q${x + 10} 192 ${x + 10} 210 Z`} fill={fill} />
      <circle cx={x} cy="178" r="12" fill={skin} />
      <ellipse cx={x} cy="184" rx="4" ry="6" fill={dark} />
    </g>
  );
  return (
    <g>
      {singer(172, dark)}
      {singer(200, accentColor)}
      {singer(228, dark)}
      {/* music notes rising above */}
      <circle cx="160" cy="152" r="3" fill={dark} />
      <line x1="163" y1="152" x2="163" y2="136" stroke={dark} strokeWidth="1.5" />
      <circle cx="240" cy="146" r="3" fill={dark} />
      <line x1="243" y1="146" x2="243" y2="130" stroke={dark} strokeWidth="1.5" />
      {/* small gramophone trophy referencing the Grammy win */}
      <path d="M196 220 Q196 210 204 210 Q212 210 212 220 L212 226 L196 226 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.2" />
      <path d="M204 210 Q198 200 190 202" fill="none" stroke={shade(gold, 0.3)} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
};

const MartenitsaElHiloRojoYBlancoDeBabaMarta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* tree branch with blossoms */}
      <path d="M150 220 Q180 200 220 195 Q250 190 270 175" fill="none" stroke="#6D4C41" strokeWidth="6" strokeLinecap="round" />
      {[[190, 200], [225, 192], [255, 180]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="8" fill="#F5D6E0" stroke={dark} strokeWidth="1.2" />
      ))}
      {/* braided red-white cord tied to the branch */}
      <path d="M200 198 Q195 215 202 232 Q209 215 204 198" fill="none" stroke="#C1272D" strokeWidth="6" strokeLinecap="round" />
      <path d="M204 198 Q209 215 202 232 Q195 215 200 198" fill="none" stroke="#F5F0E6" strokeWidth="6" strokeLinecap="round" />
      {/* Pizho and Penda doll charms */}
      <circle cx="196" cy="234" r="6" fill="#C1272D" />
      <circle cx="208" cy="234" r="6" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
    </g>
  );
};

const NestinarstvoElBaileDescalzoSobreBrasas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = tint(shade(accentColor, 0.1), 0.55);
  return (
    <g>
      {/* bed of embers */}
      <ellipse cx="200" cy="222" rx="55" ry="14" fill="#B71C1C" opacity="0.5" />
      {[[175, 220], [200, 224], [225, 220], [188, 218], [212, 218]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="5" fill="#F4A300" opacity="0.85" />
      ))}
      {/* dancer mid-step */}
      <circle cx="200" cy="168" r="12" fill={skin} />
      <path d="M188 184 Q200 176 212 184 L206 214 L194 214 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M194 210 Q182 218 178 212" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M206 210 Q220 216 222 208" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M190 188 Q172 182 165 168" stroke={skin} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M210 188 Q228 182 235 168" stroke={skin} strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
  );
};

const ElJineteDeMadaraTalladoEnUnAcantilado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* cliff face */}
      <rect x="150" y="130" width="120" height="100" fill={tint(shade(accentColor, 0.2), 0.5)} stroke={dark} strokeWidth="2" />
      {/* horse body and legs */}
      <ellipse cx="205" cy="185" rx="35" ry="16" fill={accentColor} stroke={dark} strokeWidth="2" />
      <line x1="185" y1="198" x2="180" y2="220" stroke={dark} strokeWidth="4" />
      <line x1="225" y1="198" x2="230" y2="220" stroke={dark} strokeWidth="4" />
      {/* neck and rider */}
      <path d="M235 178 Q250 165 245 150" fill="none" stroke={accentColor} strokeWidth="10" strokeLinecap="round" />
      <circle cx="243" cy="145" r="7" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      {/* spear striking down at the fallen lion */}
      <line x1="240" y1="155" x2="195" y2="200" stroke={dark} strokeWidth="2.5" />
      <path d="M175 205 Q160 195 165 210 Q172 218 185 212 Z" fill={dark} opacity="0.7" />
    </g>
  );
};

const JohnAtanasoffElPadreBulgaroDeLaComputadora: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="150" width="90" height="70" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[172, 190, 208, 226].map((x) => (
        <rect key={x} x={x} y="158" width="10" height="24" rx="5" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      ))}
      {[172, 188, 204, 220, 236].map((x) => (
        <rect key={x} x={x} y="196" width="6" height="14" fill={dark} opacity="0.6" />
      ))}
      <line x1="205" y1="220" x2="205" y2="235" stroke={dark} strokeWidth="3" />
      <rect x="185" y="235" width="40" height="8" fill={dark} opacity="0.5" />
    </g>
  );
};

const LosSieteLagosDeRilaEnFormaDeCollar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1F6FA5";
  const lakes: [number, number, number, number][] = [
    [150, 220, 14, 8],
    [175, 200, 16, 9],
    [200, 180, 18, 10],
    [225, 160, 15, 9],
    [248, 142, 13, 8],
    [268, 126, 11, 7],
    [285, 112, 9, 6],
  ];
  return (
    <g>
      <path d="M130 235 L290 105 L300 118 L140 245 Z" fill={tint(accentColor, 0.2)} opacity="0.5" />
      {lakes.map(([x, y, rx, ry]) => (
        <ellipse key={x} cx={x} cy={y} rx={rx} ry={ry} fill={water} stroke={dark} strokeWidth="1.5" opacity="0.85" />
      ))}
    </g>
  );
};

export const bulgariaIllustrations: Record<string, IllustrationDefinition> = {
  "asentir-para-decir-no-y-negar-para-decir-si": { component: AsentirParaDecirNoYNegarParaDecirSi },
  "el-alfabeto-cirilico-nacio-aqui": { component: ElAlfabetoCirilicoNacioAqui },
  "la-bacteria-del-yogur-lleva-el-nombre-del-pais": { component: LaBacteriaDelYogurLlevaElNombreDelPais },
  "el-valle-que-perfuma-al-mundo-con-rosas": { component: ElValleQuePerfumaAlMundoConRosas },
  "los-tesoros-de-oro-enterrados-por-los-tracios": { component: LosTesorosDeOroEnterradosPorLosTracios },
  "el-monasterio-a-rayas-en-lo-alto-de-la-montana": { component: ElMonasterioARayasEnLoAltoDeLaMontana },
  "los-kukeri-figuras-cubiertas-de-cascabeles": { component: LosKukeriFigurasCubiertasDeCascabeles },
  "el-monumento-comunista-con-forma-de-ovni": { component: ElMonumentoComunistaConFormaDeOvni },
  "uno-de-los-estados-mas-antiguos-de-europa": { component: UnoDeLosEstadosMasAntiguosDeEuropa },
  "el-canto-a-garganta-abierta-que-gano-un-grammy": { component: ElCantoAGargantaAbiertaQueGanoUnGrammy },
  "martenitsa-el-hilo-rojo-y-blanco-de-baba-marta": { component: MartenitsaElHiloRojoYBlancoDeBabaMarta },
  "nestinarstvo-el-baile-descalzo-sobre-brasas": { component: NestinarstvoElBaileDescalzoSobreBrasas },
  "el-jinete-de-madara-tallado-en-un-acantilado": { component: ElJineteDeMadaraTalladoEnUnAcantilado },
  "john-atanasoff-el-padre-bulgaro-de-la-computadora": { component: JohnAtanasoffElPadreBulgaroDeLaComputadora },
  "los-siete-lagos-de-rila-en-forma-de-collar": { component: LosSieteLagosDeRilaEnFormaDeCollar },
};
