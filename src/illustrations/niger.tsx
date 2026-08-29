import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

function camel(x: number, y: number, scale: number, dark: string, loadColor?: string) {
  return (
    <g key={`camel-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-22 12 L-24 40 M-9 12 L-11 40 M9 10 L11 38 M22 9 L25 37" stroke={dark} strokeWidth="4.4" strokeLinecap="round" />
      <path d="M-32 14 Q-28 -8 -12 -14 Q0 -22 10 -13 Q26 -9 32 14 Q16 22 0 20 Q-16 22 -32 14 Z" fill={dark} stroke="#2A1A0E" strokeWidth="2.4" />
      <path d="M24 -4 Q38 -18 42 -34 Q43 -40 38 -41 L31 -37 Q29 -26 20 -14 Z" fill={dark} stroke="#2A1A0E" strokeWidth="2.4" />
      <ellipse cx="40" cy="-38" rx="4" ry="3" fill="#2A1A0E" />
      <path d="M-30 12 Q-38 20 -35 32" stroke={dark} strokeWidth="3.4" fill="none" strokeLinecap="round" />
      {loadColor && (
        <>
          <rect x="-8" y="-24" width="18" height="12" fill={loadColor} stroke="#2A1A0E" strokeWidth="1.8" transform="rotate(-8)" />
          <rect x="-6" y="-30" width="16" height="10" fill={tint(loadColor, 0.25)} stroke="#2A1A0E" strokeWidth="1.6" transform="rotate(-8)" />
        </>
      )}
    </g>
  );
}

function horse(x: number, y: number, scale: number, dark: string) {
  return (
    <g key={`horse-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-30 10 Q-33 -10 -12 -14 Q10 -17 28 -6 Q33 0 28 11 Q10 18 -10 17 Q-24 18 -30 10 Z" fill={dark} stroke="#1A0F08" strokeWidth="2.4" />
      <path d="M24 -6 Q37 -20 38 -33 Q38 -38 33 -38 L26 -31 Q23 -20 15 -11 Z" fill={dark} stroke="#1A0F08" strokeWidth="2.4" />
      <path d="M26 -33 L20 -24 M31 -35 L26 -25 M34 -36 L30 -25" stroke="#1A0F08" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M-30 12 Q-42 20 -37 34" stroke={dark} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M-20 13 L-23 38 M-6 16 L-9 40 M8 13 L6 38 M22 10 L25 35" stroke={dark} strokeWidth="4.6" strokeLinecap="round" />
    </g>
  );
}

const LasUltimasJirafasSalvajesDeAfricaOccidental: IllustrationComponent = () => (
  <g>
    <path d="M110 250 Q108 150 130 100 Q140 90 150 100 Q160 150 140 250 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.4" />
    <ellipse cx="130" cy="95" rx="30" ry="20" fill="#5C7A3A" stroke="#3A5222" strokeWidth="2" />
    <ellipse cx="105" cy="105" rx="22" ry="16" fill="#6B8A45" stroke="#3A5222" strokeWidth="2" />
    <ellipse cx="155" cy="108" rx="20" ry="15" fill="#6B8A45" stroke="#3A5222" strokeWidth="2" />
    <g transform="translate(235 165)">
      <path d="M-40 45 L-42 78 M-20 48 L-22 82 M15 48 L17 82 M35 45 L38 78" stroke="#B5651D" strokeWidth="6" strokeLinecap="round" />
      <path d="M-15 22 Q-25 -55 -18 -85 Q-14 -95 -8 -95 Q-2 -95 -4 -80 Q2 -50 10 22 Z" fill="#D9A227" stroke="#8A5A10" strokeWidth="3" />
      <ellipse cx="-5" cy="35" rx="50" ry="30" fill="#D9A227" stroke="#8A5A10" strokeWidth="3" />
      <ellipse cx="-10" cy="-95" rx="16" ry="13" fill="#D9A227" stroke="#8A5A10" strokeWidth="2.6" />
      <circle cx="-4" cy="-108" r="4" fill="#B5651D" stroke="#8A5A10" strokeWidth="1.4" />
      <circle cx="-16" cy="-108" r="4" fill="#B5651D" stroke="#8A5A10" strokeWidth="1.4" />
      <circle cx="-18" cy="-93" r="2.2" fill="#3A2A1E" />
      {[[-30, 20, 6], [-10, 10, 5], [10, 25, 6], [-20, 45, 5], [15, 50, 6], [-2, -30, 5], [-10, -55, 4]].map(([px, py, r], i) => (
        <ellipse key={i} cx={px} cy={py} rx={r} ry={Number(r) * 0.8} fill="#8A5A10" opacity="0.85" />
      ))}
      <path d="M-42 40 Q-52 55 -46 68" stroke="#D9A227" strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
    {[100, 130, 170, 200, 280, 300].map((mx, i) => (
      <g key={i} transform={`translate(${mx} 248)`}>
        <path d="M0 0 L0 -22" stroke="#5C7A3A" strokeWidth="2.4" />
        <ellipse cx="0" cy="-24" rx="4" ry="7" fill="#D9A227" stroke="#8A5A10" strokeWidth="1.4" />
      </g>
    ))}
  </g>
);

const LasCaravanasDeSalQueCruzanElSahara: IllustrationComponent = () => (
  <g>
    <path d="M90 235 Q160 218 230 232 Q280 240 320 228" fill="none" stroke="#D9C08A" strokeWidth="3" opacity="0.7" />
    <path d="M90 250 Q170 228 260 246 Q290 250 320 240" fill="#E8D3A0" opacity="0.6" />
    {camel(150, 195, 1, "#B5651D", "#F5F0E6")}
    {camel(225, 205, 1.1, "#8B5A2B", "#C1272D")}
    {camel(295, 200, 0.95, "#A0522D", "#D9A227")}
    {person(150, 158, 0.55, "#5C3A21", "#1B3A5C")}
  </g>
);

const LaMezquitaDeBarroMasAltaDelMundo: IllustrationComponent = () => (
  <g>
    <path d="M150 250 L150 210 L250 210 L250 250 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2.6" />
    <rect x="185" y="220" width="30" height="30" fill="#5C3A21" />
    <path d="M175 210 L182 100 Q200 88 218 100 L225 210 Z" fill="#C97C3D" stroke="#7A4A20" strokeWidth="2.8" />
    {[112, 130, 148, 166, 184, 200].map((yy, i) => (
      <g key={i}>
        <line x1={182 + i * 0.9} y1={yy} x2={168 + i * 0.9} y2={yy - 6} stroke="#7A4A20" strokeWidth="3" strokeLinecap="round" />
        <line x1={218 - i * 0.9} y1={yy} x2={232 - i * 0.9} y2={yy - 6} stroke="#7A4A20" strokeWidth="3" strokeLinecap="round" />
      </g>
    ))}
    <rect x="192" y="88" width="16" height="14" fill="#7A4A20" />
    <path d="M120 250 L120 225 Q120 215 130 215 L140 215 Q150 215 150 225 L150 250 Z" fill="#A0522D" stroke="#6B3A18" strokeWidth="2.2" />
    <path d="M250 250 L250 225 Q250 215 260 215 L270 215 Q280 215 280 225 L280 250 Z" fill="#A0522D" stroke="#6B3A18" strokeWidth="2.2" />
  </g>
);

const LaCruzDePlataQueIdentificaACadaClanTuareg: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M150 250 Q200 240 260 250 L260 258 Q200 250 150 258 Z" fill="#3A2A1E" opacity="0.5" />
      {person(155, 220, 0.95, dark, accentColor)}
      <rect x="195" y="200" width="55" height="16" fill="#4A4A4A" stroke="#1A1A1A" strokeWidth="2.4" />
      <rect x="210" y="216" width="10" height="26" fill="#2A2A2A" />
      <g transform="translate(232 175) rotate(20)">
        <rect x="-4" y="-30" width="8" height="55" fill="#C9CDD3" stroke="#6B6F76" strokeWidth="2" />
        <rect x="-22" y="-8" width="44" height="8" fill="#C9CDD3" stroke="#6B6F76" strokeWidth="2" />
      </g>
      <path d="M195 165 L182 190 L206 190 Z" fill="#C1272D" opacity="0.75" />
      <path d="M195 165 L182 190 L206 190 Z" fill="none" stroke="#8A1010" strokeWidth="1.6" />
      <circle cx="146" cy="205" r="7" fill="#C1272D" opacity="0.7" />
      <circle cx="140" cy="212" r="5" fill="#D9A227" opacity="0.8" />
    </g>
  );
};

const ElFestivalDondeLosHombresSePintanParaSeducir: IllustrationComponent = () => {
  function dancer(x: number, y: number, scale: number) {
    return (
      <g key={x} transform={`translate(${x} ${y}) scale(${scale})`}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={-18 + i * 7} y1="-52" x2={-30 + i * 12} y2="-90" stroke="#D9A227" strokeWidth="3.4" strokeLinecap="round" />
        ))}
        <ellipse cx="0" cy="-40" rx="11" ry="12" fill="#D9A227" stroke="#3A2A1E" strokeWidth="1.8" />
        <path d="M-4 -44 L-4 -32 M0 -45 L0 -32 M4 -44 L4 -32" stroke="#C1272D" strokeWidth="2" />
        <path d="M-13 -30 Q0 -36 13 -30 L16 8 Q0 15 -16 8 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.2" />
        <path d="M-13 -26 Q-24 -14 -30 4" fill="none" stroke="#C1272D" strokeWidth="6" strokeLinecap="round" />
        <path d="M13 -26 Q24 -14 30 4" fill="none" stroke="#C1272D" strokeWidth="6" strokeLinecap="round" />
        <line x1="-8" y1="10" x2="-10" y2="35" stroke="#3A2A1E" strokeWidth="4" strokeLinecap="round" />
        <line x1="8" y1="10" x2="6" y2="35" stroke="#3A2A1E" strokeWidth="4" strokeLinecap="round" />
      </g>
    );
  }
  return (
    <g>
      <ellipse cx="205" cy="245" rx="115" ry="10" fill="#D9A227" opacity="0.3" />
      {dancer(160, 220, 1.1)}
      {dancer(225, 225, 1.05)}
      {dancer(280, 222, 1)}
    </g>
  );
};

const ElBarrioAntiguoTalladoEnRelievesDeBarro: IllustrationComponent = () => (
  <g>
    <rect x="110" y="110" width="180" height="130" fill="#C68642" stroke="#6B4423" strokeWidth="3" />
    <path d="M150 240 L150 175 Q150 160 168 160 L192 160 Q210 160 210 175 L210 240 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.6" />
    <path d="M150 160 Q180 140 210 160" fill="none" stroke="#4A2E14" strokeWidth="2.6" />
    {[130, 160].map((yy, i) => (
      <path key={i} d={`M120 ${yy} L135 ${yy - 12} L150 ${yy} L165 ${yy - 12} L180 ${yy} L195 ${yy - 12} L210 ${yy} L225 ${yy - 12} L240 ${yy} L255 ${yy - 12} L270 ${yy} L280 ${yy - 12}`} fill="none" stroke="#6B4423" strokeWidth="3.2" />
    ))}
    {[[125, 200], [235, 195], [260, 210]].map(([dx, dy], i) => (
      <g key={i} transform={`translate(${dx} ${dy}) rotate(45)`}>
        <rect x="-9" y="-9" width="18" height="18" fill="none" stroke="#6B4423" strokeWidth="3" />
      </g>
    ))}
    <rect x="118" y="118" width="18" height="18" fill="none" stroke="#6B4423" strokeWidth="3" />
    <rect x="264" y="118" width="18" height="18" fill="none" stroke="#6B4423" strokeWidth="3" />
  </g>
);

const ElRioQueLeDaNombreAlPaisYASuGente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q200 185 320 205 L320 250 L90 250 Z" fill="#1B7A9C" opacity="0.55" />
      <path d="M90 215 Q200 202 320 218" fill="none" stroke="#F5F0E6" strokeWidth="2.4" opacity="0.6" />
      <path d="M90 232 Q200 218 320 236" fill="none" stroke="#F5F0E6" strokeWidth="2.4" opacity="0.5" />
      <path d="M150 205 Q205 190 265 202 L268 220 Q205 210 148 222 Z" fill="#8B5A2B" stroke="#4A2E14" strokeWidth="2.6" />
      <g transform="translate(210 165)">
        <circle cx="0" cy="-30" r="9" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.6" />
        <path d="M-11 -22 Q0 -27 11 -22 L13 14 Q0 20 -13 14 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      </g>
      <ellipse cx="235" cy="188" rx="16" ry="8" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="1.6" />
      <path d="M235 188 L255 178" stroke="#5C4A3A" strokeWidth="2" />
    </g>
  );
};

const ElArbolMasSolitarioDelMundo: IllustrationComponent = () => (
  <g>
    <path d="M90 235 Q150 210 200 232 Q260 250 320 220 L320 250 L90 250 Z" fill="#D9822B" opacity="0.4" />
    <path d="M90 220 Q160 195 230 218 Q280 232 320 205" fill="none" stroke="#B5651D" strokeWidth="2.4" opacity="0.5" />
    <path d="M197 235 L203 235 L206 130 L194 130 Z" fill="#5C3A21" stroke="#3A2410" strokeWidth="2.4" />
    <path d="M200 135 Q160 120 145 90 M200 135 Q235 115 250 82 M200 135 Q200 105 198 78 M200 135 Q175 118 168 95 M200 135 Q222 122 232 98" stroke="#8B5A2B" strokeWidth="5" fill="none" strokeLinecap="round" />
    {[[145, 90], [250, 82], [198, 78], [168, 95], [232, 98]].map(([px, py], i) => (
      <ellipse key={i} cx={px} cy={py} rx="14" ry="8" fill="#D9822B" opacity="0.85" stroke="#B5651D" strokeWidth="1.6" />
    ))}
  </g>
);

const LaMasaDeMijoQueSostieneCadaComida: IllustrationComponent = () => (
  <g>
    <ellipse cx="185" cy="218" rx="90" ry="24" fill="#F5F0E6" stroke="#8B6F47" strokeWidth="2.6" />
    <ellipse cx="180" cy="198" rx="34" ry="27" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.4" />
    <ellipse cx="248" cy="208" rx="38" ry="26" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.6" />
    {[[230, 200], [250, 195], [268, 205]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x + 5} ${y - 9}`} stroke="#1B4B1E" strokeWidth="2" strokeLinecap="round" />
    ))}
    <g transform="translate(115 235)">
      <path d="M0 0 L0 -30" stroke="#8B6F47" strokeWidth="2.6" />
      <ellipse cx="0" cy="-33" rx="5" ry="9" fill="#D9A227" stroke="#8A5A10" strokeWidth="1.6" />
    </g>
    <g transform="translate(133 238)">
      <path d="M0 0 L0 -24" stroke="#8B6F47" strokeWidth="2.6" />
      <ellipse cx="0" cy="-27" rx="5" ry="9" fill="#D9A227" stroke="#8A5A10" strokeWidth="1.6" />
    </g>
  </g>
);

const ElDesfileDeJinetesQueHonraAlSultan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="120" ry="10" fill="#1B4B1E" opacity="0.3" />
      {horse(205, 195, 1.3, "#5C3A21")}
      <path d="M175 175 Q205 165 235 175 L232 200 Q205 192 178 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M180 178 Q205 172 230 178 L228 186 Q205 180 182 186 Z" fill="#D9A227" opacity="0.8" />
      <g transform="translate(205 150)">
        <circle cx="0" cy="0" r="10" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.6" />
        <path d="M-11 -8 Q0 -16 11 -8 Q13 2 8 8 Q0 4 -8 8 Q-13 2 -11 -8 Z" fill="#F5F0E6" stroke="#C9B98A" strokeWidth="1.6" />
        <path d="M-11 6 Q0 14 11 6 L14 34 Q0 40 -14 34 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      </g>
      <path d="M248 180 L260 172 L266 178 L254 186 Z" fill="#C9CDD3" stroke="#6B6F76" strokeWidth="1.6" />
    </g>
  );
};

const ParqueNacionalDelW: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M90 230 Q140 210 170 235 Q200 260 230 235 Q260 210 320 230" fill="none" stroke="#1B7A9C" strokeWidth="10" opacity="0.5" />
      <ellipse cx="205" cy="205" rx="55" ry="26" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <circle cx="245" cy="195" r="22" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path key={deg} d="M245 195 L245 170" stroke={dark} strokeWidth="7" strokeLinecap="round" transform={`rotate(${deg} 245 195)`} />
      ))}
      <circle cx="238" cy="190" r="2" fill="#1A1A1A" />
      <circle cx="252" cy="190" r="2" fill="#1A1A1A" />
      {[175, 195, 220, 240].map((x) => (
        <line key={x} x1={x} y1="225" x2={x - 4} y2="248" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      ))}
      <path d="M160 205 Q140 200 130 215" stroke={accentColor} strokeWidth="8" strokeLinecap="round" fill="none" />
    </g>
  );
};

const GogeHausa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  const wood = "#8B5A2B";
  return (
    <g>
      <circle cx="195" cy="140" r="14" fill={skin} stroke={dark} strokeWidth="1.8" />
      <path d="M178 150 Q195 138 212 150 L218 235 Q195 248 172 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <ellipse cx="248" cy="210" rx="26" ry="22" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.4" />
      <rect x="246" y="150" width="4" height="60" fill={shade(wood, 0.3)} />
      <path d="M205 175 Q225 180 244 190" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M200 205 Q220 200 240 210" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M230 155 Q260 175 230 235" stroke={wood} strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
};

export const nigerIllustrations: Record<string, IllustrationDefinition> = {
  "las-ultimas-jirafas-salvajes-de-africa-occidental": { component: LasUltimasJirafasSalvajesDeAfricaOccidental },
  "las-caravanas-de-sal-que-cruzan-el-sahara": { component: LasCaravanasDeSalQueCruzanElSahara },
  "la-mezquita-de-barro-mas-alta-del-mundo": { component: LaMezquitaDeBarroMasAltaDelMundo },
  "la-cruz-de-plata-que-identifica-a-cada-clan-tuareg": { component: LaCruzDePlataQueIdentificaACadaClanTuareg },
  "el-festival-donde-los-hombres-se-pintan-para-seducir": { component: ElFestivalDondeLosHombresSePintanParaSeducir },
  "el-barrio-antiguo-tallado-en-relieves-de-barro": { component: ElBarrioAntiguoTalladoEnRelievesDeBarro },
  "el-rio-que-le-da-nombre-al-pais-y-a-su-gente": { component: ElRioQueLeDaNombreAlPaisYASuGente },
  "el-arbol-mas-solitario-del-mundo": { component: ElArbolMasSolitarioDelMundo },
  "la-masa-de-mijo-que-sostiene-cada-comida": { component: LaMasaDeMijoQueSostieneCadaComida },
  "el-desfile-de-jinetes-que-honra-al-sultan": { component: ElDesfileDeJinetesQueHonraAlSultan },
  "parque-nacional-del-w": { component: ParqueNacionalDelW },
  "goge-hausa": { component: GogeHausa },
};
