import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Mate: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const metal = "#B0B8BF";
  return (
    <g>
      {/* mate gourd with bombilla */}
      <path d="M160 175 a35 40 0 1 0 70 0 a35 40 0 1 0 -70 0 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="195" cy="175" rx="26" ry="12" fill={light} />
      <line x1="205" y1="168" x2="235" y2="120" stroke={metal} strokeWidth="7" strokeLinecap="round" />
      <circle cx="235" cy="120" r="6" fill={metal} />
      {/* thermos beside it */}
      <path d="M260 130 h34 v90 a17 17 0 0 1 -34 0 Z" fill={dark} />
      <rect x="266" y="112" width="22" height="20" rx="3" fill={dark} />
      <rect x="260" y="150" width="34" height="10" fill={light} opacity="0.7" />
    </g>
  );
};

const PepeMujica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.65);
  const skin = "#D9A46A";
  return (
    <g>
      {/* older man wearing a beret */}
      <circle cx="155" cy="140" r="18" fill={skin} />
      <path d="M137 133 Q140 112 158 110 Q178 110 178 130 Q160 122 137 133 Z" fill={dark} />
      <path d="M138 160 Q155 150 172 160 L166 210 L144 210 Z" fill={accentColor} />
      <path d="M144 168 L120 185" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      {/* small tractor beside him */}
      <rect x="210" y="175" width="60" height="30" rx="4" fill={dark} />
      <rect x="222" y="150" width="26" height="28" rx="3" fill={light} />
      <circle cx="225" cy="215" r="18" fill="#2E2E2E" />
      <circle cx="225" cy="215" r="7" fill={light} />
      <circle cx="272" cy="212" r="12" fill="#2E2E2E" />
      <circle cx="272" cy="212" r="5" fill={light} />
      <rect x="258" y="140" width="6" height="35" fill={dark} />
    </g>
  );
};

const Mundial1930: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const goldDark = shade(gold, 0.3);
  return (
    <g>
      {/* golden trophy cup */}
      <path d="M175 118 Q175 155 200 158 Q225 155 225 118 Z" fill={gold} stroke={goldDark} strokeWidth="3" />
      <path d="M175 122 Q150 122 150 140 Q150 158 172 158" fill="none" stroke={gold} strokeWidth="6" />
      <path d="M225 122 Q250 122 250 140 Q250 158 228 158" fill="none" stroke={gold} strokeWidth="6" />
      <rect x="193" y="158" width="14" height="26" fill={goldDark} />
      {/* sky-blue pedestal */}
      <path d="M165 184 L235 184 L245 218 L155 218 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="170" y="222" width="60" height="14" fill={dark} />
    </g>
  );
};

const CarnavalMontevideo: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  const dark = shade(accentColor, 0.35);
  const skin = "#D9A46A";
  const singers = [
    { x: 140, hat: accentColor },
    { x: 205, hat: dark },
    { x: 270, hat: light },
  ];
  return (
    <g>
      {singers.map((s, i) => (
        <g key={s.x}>
          {/* tall colorful murga hat */}
          <path d={`M${s.x - 16} 128 L${s.x + 16} 128 L${s.x + 10} 88 L${s.x - 10} 88 Z`} fill={s.hat} stroke={dark} strokeWidth="2" />
          <circle cx={s.x} cy="145" r="14" fill={skin} />
          <path d={`M${s.x - 18} 158 Q${s.x} 150 ${s.x + 18} 158 L${s.x + 14} 205 L${s.x - 14} 205 Z`} fill={i % 2 === 0 ? accentColor : dark} />
          {/* drum */}
          <ellipse cx={s.x} cy="212" rx="16" ry="9" fill={light} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const PuntaDelEste: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const sand = "#E8C87A";
  return (
    <g>
      {/* sand mound */}
      <path d="M95 235 Q210 210 320 235 L320 250 L95 250 Z" fill={sand} />
      {/* five giant fingers emerging from the sand */}
      <path
        d="M150 236 L150 150 Q150 138 160 138 Q170 138 170 150 L170 175
           L172 120 Q172 108 182 108 Q192 108 192 120 L192 175
           L194 100 Q194 88 205 88 Q216 88 216 100 L216 175
           L218 115 Q218 103 228 103 Q238 103 238 115 L238 175
           L240 145 Q240 133 250 133 Q260 133 260 145 L260 236 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
    </g>
  );
};

const ColoniaSacramento: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const stone = "#C9B896";
  return (
    <g>
      {/* cobblestone street */}
      <rect x="95" y="225" width="225" height="25" fill={stone} />
      {[105, 130, 155, 180, 205, 230, 255, 280, 305].map((x) => (
        <circle key={x} cx={x} cy="237" r="6" fill={shade(stone, 0.2)} opacity="0.6" />
      ))}
      {/* low colonial houses */}
      <rect x="105" y="175" width="50" height="52" fill={accentColor} />
      <rect x="160" y="185" width="45" height="42" fill={light} />
      <rect x="210" y="170" width="48" height="57" fill={dark} />
      {[125, 178, 230].map((x) => (
        <rect key={x} x={x} y="200" width="14" height="18" fill={shade(accentColor, 0.5)} opacity="0.7" />
      ))}
      {/* lighthouse in the background */}
      <path d="M285 227 L285 130 Q285 122 292 122 Q299 122 299 130 L299 227 Z" fill={light} stroke={dark} strokeWidth="2" />
      <rect x="280" y="112" width="24" height="14" fill={dark} />
      <path d="M304 118 L320 108 M304 122 L322 120" stroke="#F4C430" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    </g>
  );
};

const AsadoUruguayo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const meat = "#B5651D";
  const ember = "#E85D25";
  return (
    <g>
      {/* embers glowing below */}
      {[130, 155, 180, 205, 230, 255, 280].map((x, i) => (
        <ellipse key={x} cx={x} cy="228" rx="10" ry="6" fill={ember} opacity={0.5 + (i % 3) * 0.15} />
      ))}
      {/* grill grate */}
      <rect x="110" y="200" width="190" height="10" fill={dark} />
      {[120, 150, 180, 210, 240, 270, 295].map((x) => (
        <line key={x} x1={x} y1="196" x2={x} y2="214" stroke={dark} strokeWidth="4" />
      ))}
      {/* cuts of meat on the grill */}
      <path d="M130 188 Q150 178 170 190 Q165 200 140 198 Z" fill={meat} />
      <path d="M190 190 Q215 180 240 192 Q232 202 198 200 Z" fill={shade(meat, 0.2)} />
      <path d="M255 186 Q278 178 292 190 Q285 198 258 196 Z" fill={meat} />
    </g>
  );
};

const LegalizacionMarihuana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* regulatory ring */}
      <circle cx="205" cy="165" r="78" fill="none" stroke={dark} strokeWidth="10" />
      <circle cx="205" cy="165" r="78" fill="none" stroke={light} strokeWidth="3" opacity="0.6" />
      {/* stylized cannabis leaf, five leaflets */}
      <path d="M205 108 Q212 140 205 165 Q198 140 205 108 Z" fill={accentColor} />
      <path d="M205 165 Q225 130 250 118 Q235 150 205 165 Z" fill={accentColor} />
      <path d="M205 165 Q185 130 160 118 Q175 150 205 165 Z" fill={accentColor} />
      <path d="M205 165 Q235 155 258 168 Q235 178 205 165 Z" fill={shade(accentColor, 0.15)} />
      <path d="M205 165 Q175 155 152 168 Q175 178 205 165 Z" fill={shade(accentColor, 0.15)} />
    </g>
  );
};

const EduardoGaleano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* open book */}
      <path d="M205 115 L108 130 L108 220 L205 208 Z" fill={accentColor} />
      <path d="M205 115 L302 130 L302 220 L205 208 Z" fill={dark} />
      <line x1="205" y1="115" x2="205" y2="208" stroke={light} strokeWidth="2" />
      {/* simplified Latin America silhouette spanning both pages */}
      <path
        d="M195 130 L210 128 L218 145 L212 160 L222 172 L214 195 L200 205 L192 185 L198 165 L188 150 Z"
        fill={light}
      />
      <circle cx="204" cy="150" r="3" fill={dark} />
    </g>
  );
};

const RamblaMontevideo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const sea = "#3D8FB0";
  const skin = "#D9A46A";
  return (
    <g>
      {/* sea */}
      <path d="M95 190 Q210 170 320 190 L320 155 Q210 140 95 155 Z" fill={sea} opacity="0.75" />
      {/* curving coastal walkway */}
      <path d="M95 220 Q210 195 320 220 L320 240 Q210 218 95 240 Z" fill={light} />
      <path d="M95 210 Q210 187 320 210" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      {/* people strolling */}
      <circle cx="160" cy="205" r="8" fill={skin} />
      <path d="M160 213 L155 232 M160 213 L166 232" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <circle cx="230" cy="212" r="8" fill={skin} />
      <path d="M230 220 L224 238 M230 220 L237 238" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Candombe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.55);
  const skin = "#8B5A3C";
  const drummers = [
    { x: 140, drumR: 20, tone: accentColor },
    { x: 205, drumR: 26, tone: dark },
    { x: 270, drumR: 16, tone: light },
  ];
  return (
    <g>
      {drummers.map((d) => (
        <g key={d.x}>
          {/* drum strap, drawn before the torso so the torso fill covers its root */}
          <path d={`M${d.x - 16} 150 L${d.x + 16} 190`} stroke={dark} strokeWidth="4" opacity="0.6" />
          {/* torso; top edge curves to overlap the head circle's true boundary */}
          <path d={`M${d.x - 9} 148 Q${d.x} 168 ${d.x + 9} 148 L${d.x + 18} 205 L${d.x - 18} 205 Z`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          {/* head, painted over the neckline */}
          <circle cx={d.x} cy="152" r="14" fill={skin} />
          {/* drum body worn at the waist */}
          <rect x={d.x - d.drumR} y="205" width={d.drumR * 2} height="34" rx="6" fill={d.tone} stroke={dark} strokeWidth="2" />
          <ellipse cx={d.x} cy="205" rx={d.drumR} ry="8" fill={light} stroke={dark} strokeWidth="2" />
          {/* arms with drumsticks, strokes starting well inside the torso fill */}
          <path d={`M${d.x - 10} 175 Q${d.x - 24} 190 ${d.x - 20} 210`} fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
          <path d={`M${d.x + 10} 175 Q${d.x + 24} 190 ${d.x + 20} 210`} fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const JoseArtigas: IllustrationComponent = ({ accentColor }) => {
  const dark = "#3A2A22";
  const skin = "#8B5A3C";
  const flagColor = "#5B8AC7";
  return (
    <g>
      {/* horse tail and legs, drawn first so the body ellipse covers their roots */}
      <path d="M145 190 Q120 205 110 230" fill="none" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      <path d="M165 210 L155 245 M185 214 L178 248 M215 212 L222 246 M235 206 L245 240" stroke={dark} strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* neck, drawn before the body and head so both cover its roots */}
      <path d="M218 182 Q248 145 268 155" fill="none" stroke={dark} strokeWidth="24" strokeLinecap="round" />
      {/* horse body */}
      <ellipse cx="190" cy="197" rx="58" ry="28" fill={dark} />
      {/* horse head and mane */}
      <circle cx="270" cy="152" r="18" fill={dark} />
      <path d="M282 145 Q300 150 298 162 Q285 162 280 152 Z" fill={dark} />
      <path d="M228 168 Q245 150 262 148" fill="none" stroke={dark} strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      <polygon points="260,138 265,126 270,138" fill={dark} />
      {/* rider torso; top edge curves to overlap the head circle's true boundary */}
      <path d="M182 148 Q200 168 218 148 L226 210 L174 210 Z" fill={accentColor} stroke={shade(accentColor, 0.4)} strokeWidth="3" />
      <circle cx="200" cy="158" r="15" fill={skin} />
      {/* wide-brimmed hat */}
      <ellipse cx="200" cy="148" rx="24" ry="7" fill={dark} />
      <path d="M188 148 Q200 132 212 148 Z" fill={dark} />
      {/* raised arm holding a flag */}
      <path d="M212 175 Q235 165 240 140" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <line x1="240" y1="140" x2="240" y2="90" stroke={dark} strokeWidth="4" />
      <path d="M240 92 L280 100 L240 118 Z" fill={flagColor} stroke={shade(flagColor, 0.3)} strokeWidth="2" />
      {/* other arm at rest */}
      <path d="M190 175 Q170 185 160 200" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const EnergiaEolicaUruguay: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const hill = "#6FA05A";
  const towerColor = "#F5F0E6";
  const turbine = (x: number, topY: number, scale: number) => (
    <g key={x}>
      <line x1={x} y1="235" x2={x} y2={topY} stroke={towerColor} strokeWidth={4 * scale} />
      <circle cx={x} cy={topY} r={4 * scale} fill={dark} />
      <path d={`M${x} ${topY} L${x - 4 * scale} ${topY + 2} L${x - 34 * scale} ${topY - 25 * scale} L${x - 4 * scale} ${topY - 2} Z`} fill={towerColor} stroke={dark} strokeWidth="1.5" />
      <path d={`M${x} ${topY} L${x + 2 * scale} ${topY + 4} L${x + 20 * scale} ${topY + 35 * scale} L${x - 2 * scale} ${topY + 8} Z`} fill={towerColor} stroke={dark} strokeWidth="1.5" />
      <path d={`M${x} ${topY} L${x - 2 * scale} ${topY + 4} L${x - 28 * scale} ${topY + 28 * scale} L${x + 2 * scale} ${topY + 2} Z`} fill={towerColor} stroke={dark} strokeWidth="1.5" />
    </g>
  );
  return (
    <g>
      <path d="M95 230 Q200 205 320 230 L320 250 L95 250 Z" fill={hill} />
      {turbine(150, 110, 1)}
      {turbine(230, 130, 0.8)}
      {turbine(285, 150, 0.6)}
    </g>
  );
};

const CasapuebloPaezVilaro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const white = "#F5F0E6";
  const cliff = "#8B7355";
  const sunset = "#F4A300";
  return (
    <g>
      {/* sunset sky and sea */}
      <circle cx="290" cy="110" r="30" fill={sunset} opacity="0.7" />
      <rect x="90" y="150" width="230" height="60" fill={accentColor} opacity="0.4" />
      {/* rocky cliff */}
      <path d="M95 250 L95 200 Q160 180 210 205 Q260 185 320 210 L320 250 Z" fill={cliff} />
      {/* curved white building, no straight lines or right angles */}
      <path d="M120 205 Q140 165 190 168 Q230 150 260 175 Q280 190 265 210 Q235 225 195 215 Q150 225 120 205 Z" fill={white} stroke={dark} strokeWidth="3" />
      <circle cx="165" cy="190" r="10" fill={dark} opacity="0.5" />
      <circle cx="215" cy="180" r="9" fill={dark} opacity="0.5" />
      <circle cx="245" cy="195" r="8" fill={dark} opacity="0.5" />
    </g>
  );
};

const CaboPolonio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const dune = "#E8C87A";
  const wood = "#8B5A3C";
  return (
    <g>
      {/* sand dunes */}
      <path d="M95 250 Q160 210 230 240 Q280 215 320 245 L320 250 Z" fill={dune} />
      {/* rustic cabins */}
      <path d="M120 230 L120 205 L145 190 L170 205 L170 230 Z" fill={wood} stroke={dark} strokeWidth="2.5" />
      <path d="M185 235 L185 212 L205 199 L225 212 L225 235 Z" fill={shade(wood, 0.15)} stroke={dark} strokeWidth="2.5" />
      {/* lighthouse */}
      <rect x="260" y="150" width="20" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[160, 180, 200, 220].map((y) => (
        <rect key={y} x="260" y={y} width="20" height="10" fill={accentColor} opacity="0.7" />
      ))}
      <polygon points="255,150 285,150 270,128" fill={dark} />
      {/* sea lion silhouette on the rocks */}
      <ellipse cx="245" cy="240" rx="22" ry="10" fill={dark} opacity="0.8" />
    </g>
  );
};

export const uruguayIllustrations: Record<string, IllustrationDefinition> = {
  mate: { component: Mate },
  "pepe-mujica": { component: PepeMujica },
  "mundial-1930": { component: Mundial1930 },
  "carnaval-montevideo": { component: CarnavalMontevideo },
  "punta-del-este": { component: PuntaDelEste },
  "colonia-sacramento": { component: ColoniaSacramento },
  "asado-uruguayo": { component: AsadoUruguayo },
  "legalizacion-marihuana": { component: LegalizacionMarihuana },
  "eduardo-galeano": { component: EduardoGaleano },
  "rambla-montevideo": { component: RamblaMontevideo },
  candombe: { component: Candombe },
  "jose-artigas": { component: JoseArtigas },
  "energia-eolica-uruguay": { component: EnergiaEolicaUruguay },
  "casapueblo-paez-vilaro": { component: CasapuebloPaezVilaro },
  "cabo-polonio": { component: CaboPolonio },
};
