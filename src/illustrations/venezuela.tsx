import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SaltoAngel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const jungle = "#2E7D32";
  return (
    <g>
      {/* jungle floor far below */}
      <ellipse cx="205" cy="240" rx="120" ry="14" fill={jungle} opacity="0.6" />
      {/* rocky tepuy plateau at the top */}
      <path d="M155 100 L255 100 L245 130 L165 130 Z" fill={dark} />
      {/* long thin waterfall */}
      <path d="M195 128 Q188 175 194 232 L206 232 Q212 175 205 128 Z" fill={light} opacity="0.9" />
      <path d="M198 128 Q194 175 197 232" stroke="#fff" strokeWidth="3" opacity="0.5" fill="none" />
      {/* mist pool at the base */}
      <ellipse cx="200" cy="235" rx="34" ry="9" fill={light} opacity="0.5" />
    </g>
  );
};

const TepuyesRoraima: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const jungle = "#2E7D32";
  return (
    <g>
      {/* jungle at the base */}
      <path d="M95 240 Q160 220 210 238 Q260 218 320 240 L320 250 L95 250 Z" fill={jungle} />
      {/* flat-topped mountain, vertical walls */}
      <path d="M130 232 L150 122 L260 122 L280 232 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="150" y="112" width="110" height="14" fill={dark} />
      <line x1="150" y1="122" x2="130" y2="232" stroke={dark} strokeWidth="2" opacity="0.5" />
      <line x1="260" y1="122" x2="280" y2="232" stroke={dark} strokeWidth="2" opacity="0.5" />
      {/* eroded rock texture on top */}
      <rect x="175" y="130" width="18" height="14" fill={light} opacity="0.7" />
      <rect x="210" y="135" width="22" height="12" fill={light} opacity="0.7" />
    </g>
  );
};

const SimonBolivar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const goldDark = shade(gold, 0.3);
  return (
    <g>
      {/* sheathed sword */}
      <path d="M245 100 L268 123 L200 191 L188 179 Z" fill={dark} />
      <rect x="180" y="172" width="18" height="14" fill={dark} transform="rotate(45 189 179)" />
      <line x1="176" y1="196" x2="196" y2="216" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <line x1="212" y1="160" x2="228" y2="176" stroke={goldDark} strokeWidth="4" />
      {/* golden presidential sash with a star medal */}
      <path d="M120 110 L165 240 L185 233 L140 103 Z" fill={gold} stroke={goldDark} strokeWidth="2" />
      <circle cx="152" cy="205" r="18" fill="#fff" stroke={goldDark} strokeWidth="3" />
      <path d="M152 194 L156 203 L166 203 L158 209 L161 219 L152 213 L143 219 L146 209 L138 203 L148 203 Z" fill={gold} />
    </g>
  );
};

const RayoDelCatatumbo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.2);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      {/* dark lake at night */}
      <rect x="95" y="80" width="225" height="120" fill={dark} />
      <path d="M95 200 Q210 190 320 200 L320 245 L95 245 Z" fill={shade(dark, 0.3)} />
      <path d="M110 210 Q210 200 305 210" stroke={light} strokeWidth="2" opacity="0.4" fill="none" />
      {/* several lightning bolts across the sky */}
      <path d="M150 90 L130 140 L148 140 L120 195" stroke={light} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M220 82 L204 130 L222 130 L198 178" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M285 95 L270 138 L286 138 L262 185" stroke={light} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </g>
  );
};

const MissVenezuela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#D4A017";
  const jewel = "#C2185B";
  return (
    <g>
      {/* cushion */}
      <path d="M130 210 Q130 235 160 235 L250 235 Q280 235 280 210 L275 195 L135 195 Z" fill={accentColor} />
      <ellipse cx="205" cy="196" rx="72" ry="10" fill={dark} />
      {/* sparkling crown */}
      <path d="M155 195 L155 165 L175 182 L195 150 L215 182 L235 165 L255 195 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="195" cy="165" r="8" fill={jewel} />
      <circle cx="165" cy="180" r="4" fill="#fff" />
      <circle cx="225" cy="180" r="4" fill="#fff" />
      <path d="M195 135 L199 145 L209 145 L201 151 L204 161 L195 155 L186 161 L189 151 L181 145 L191 145 Z" fill="#fff" opacity="0.85" />
    </g>
  );
};

const Arepa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  const filling = "#F5E6C8";
  return (
    <g>
      <ellipse cx="150" cy="185" rx="58" ry="42" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="260" cy="185" rx="58" ry="42" fill={light} stroke={dark} strokeWidth="3" />
      {/* filling peeking out between the two halves */}
      <path d="M198 155 Q205 185 198 215 Q212 185 212 155 Q205 185 198 155" fill={filling} />
      <ellipse cx="205" cy="185" rx="12" ry="34" fill={filling} />
      <circle cx="200" cy="172" r="3" fill="#E8A33D" />
      <circle cx="210" cy="195" r="3" fill="#E8A33D" />
    </g>
  );
};

const Joropo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const gold = "#D4A017";
  return (
    <g>
      {/* llanera harp */}
      <path d="M140 232 Q130 150 165 100 Q172 96 178 102 Q195 150 195 232 Z" fill={dark} />
      <path d="M165 100 Q215 108 240 165 L228 172 Q210 122 168 112 Z" fill={dark} />
      <ellipse cx="167" cy="232" rx="30" ry="9" fill={accentColor} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={173 + i * 8} y1="228" x2={188 + i * 6} y2="112" stroke={gold} strokeWidth="1.6" />
      ))}
      {/* small cuatro beside it */}
      <path d="M260 190 Q245 190 245 208 Q245 226 265 226 Q285 226 285 208 Q285 194 273 190 Q285 184 280 165 Q272 156 264 165 Q258 178 260 190 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="265" cy="208" r="10" fill={dark} />
      <line x1="264" y1="165" x2="264" y2="142" stroke={dark} strokeWidth="5" />
    </g>
  );
};

const BeisbolVenezolano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  const wood = "#B5651D";
  return (
    <g>
      {/* glove */}
      <path d="M110 220 Q100 175 130 150 Q140 142 148 150 L148 130 Q148 120 156 120 Q164 120 164 130 L164 148 Q164 136 172 136 Q180 136 180 148 L180 152 Q180 142 188 142 Q196 142 196 152 L196 160 Q205 158 208 172 Q210 205 190 222 Q150 235 110 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M120 208 Q150 218 185 205" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      {/* ball */}
      <circle cx="215" cy="205" r="18" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M203 195 Q212 205 203 216 M227 195 Q218 205 227 216" stroke="#C1272D" strokeWidth="2" fill="none" />
      {/* wooden bat */}
      <path d="M255 235 L300 100 Q303 92 296 90 Q289 88 286 96 L241 231 Z" fill={wood} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ReservasPetroleo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {/* storage tank */}
      <rect x="230" y="150" width="70" height="80" fill={light} stroke={dark} strokeWidth="3" />
      <ellipse cx="265" cy="150" rx="35" ry="9" fill={dark} />
      <rect x="230" y="185" width="70" height="8" fill={dark} opacity="0.4" />
      {/* drilling rig */}
      <path d="M120 230 L155 100 L190 230 Z" fill="none" stroke={dark} strokeWidth="7" strokeLinejoin="round" />
      <path d="M128 205 L182 205 M133 175 L177 175 M138 145 L172 145" stroke={dark} strokeWidth="5" />
      <rect x="145" y="228" width="20" height="14" fill={accentColor} />
    </g>
  );
};

const OrinocoLlanos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#3D8FB0";
  return (
    <g>
      {/* green plain */}
      <rect x="95" y="150" width="225" height="100" fill={accentColor} opacity="0.65" />
      {/* wide winding river */}
      <path d="M95 200 Q150 180 180 205 Q220 235 260 210 Q290 192 320 205 L320 230 Q290 218 262 235 Q220 258 178 230 Q150 210 95 228 Z" fill={water} />
      {/* capybara on the bank */}
      <ellipse cx="150" cy="165" rx="26" ry="15" fill={dark} />
      <circle cx="125" cy="160" r="10" fill={dark} />
      {/* caiman silhouette near the water */}
      <path d="M250 175 Q280 172 300 180 L296 188 Q270 182 250 185 Z" fill={dark} opacity="0.85" />
      <path d="M298 178 L308 172 L310 182 Z" fill={dark} opacity="0.85" />
    </g>
  );
};

const CacaoVenezolano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const podColor = "#C9A02C";
  const seedColor = "#5C3A21";
  const chocolate = "#4A2C17";
  const chocolateDark = shade(chocolate, 0.3);
  return (
    <g>
      {/* opened cacao pod, ridged husk split open */}
      <path d="M110 110 Q95 165 120 225 Q140 245 165 232 Q150 170 160 108 Q135 95 110 110 Z" fill={podColor} stroke={dark} strokeWidth="3" />
      <path d="M118 118 Q108 168 128 220 M138 108 Q128 168 142 228" stroke={dark} strokeWidth="2" opacity="0.5" fill="none" />
      {/* seeds inside the open half */}
      <ellipse cx="150" cy="150" rx="11" ry="15" fill={seedColor} />
      <ellipse cx="168" cy="170" rx="11" ry="15" fill={seedColor} />
      <ellipse cx="152" cy="192" rx="11" ry="15" fill={seedColor} />
      <ellipse cx="172" cy="205" rx="11" ry="15" fill={seedColor} />
      {/* chocolate bar */}
      <rect x="210" y="150" width="100" height="70" rx="4" fill={chocolate} stroke={chocolateDark} strokeWidth="3" />
      <line x1="235" y1="150" x2="235" y2="220" stroke={chocolateDark} strokeWidth="3" />
      <line x1="260" y1="150" x2="260" y2="220" stroke={chocolateDark} strokeWidth="3" />
      <line x1="285" y1="150" x2="285" y2="220" stroke={chocolateDark} strokeWidth="3" />
      <line x1="210" y1="185" x2="310" y2="185" stroke={chocolateDark} strokeWidth="3" />
    </g>
  );
};

const Hallaca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  const string = "#D4A017";
  return (
    <g>
      {/* plantain-leaf wrapped bundle */}
      <path d="M130 140 L270 140 Q290 140 290 170 L290 200 Q290 230 270 230 L130 230 Q110 230 110 200 L110 170 Q110 140 130 140 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M110 170 Q200 155 290 170 M110 200 Q200 215 290 200" stroke={dark} strokeWidth="2" opacity="0.4" fill="none" />
      {/* folded leaf ends */}
      <path d="M110 170 L90 150 L90 220 L110 200 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M290 170 L310 150 L310 220 L290 200 Z" fill={light} stroke={dark} strokeWidth="2" />
      {/* tied string, criss-cross */}
      <line x1="140" y1="140" x2="140" y2="230" stroke={string} strokeWidth="4" />
      <line x1="200" y1="140" x2="200" y2="230" stroke={string} strokeWidth="4" />
      <line x1="260" y1="140" x2="260" y2="230" stroke={string} strokeWidth="4" />
      <line x1="110" y1="165" x2="290" y2="165" stroke={string} strokeWidth="4" />
      <line x1="110" y1="205" x2="290" y2="205" stroke={string} strokeWidth="4" />
      {/* steam */}
      <path d="M175 130 Q168 105 180 82" stroke={light} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M215 130 Q208 100 222 78" stroke={light} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
    </g>
  );
};

const LosRoques: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const sand = "#F2E4C1";
  const reef = "#E85D75";
  const water = tint(accentColor, 0.35);
  return (
    <g>
      {/* turquoise water */}
      <rect x="90" y="80" width="230" height="170" fill={water} />
      {/* reef patches under the water */}
      <ellipse cx="150" cy="220" rx="34" ry="10" fill={reef} opacity="0.6" />
      <ellipse cx="250" cy="230" rx="28" ry="8" fill={reef} opacity="0.5" />
      {/* two small sandy islets with a palm each */}
      <ellipse cx="160" cy="170" rx="46" ry="16" fill={sand} stroke={dark} strokeWidth="2" />
      <path d="M130 168 Q145 148 165 160 Q158 150 170 145" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="255" cy="150" rx="30" ry="11" fill={sand} stroke={dark} strokeWidth="2" />
      <path d="M240 148 Q250 132 264 142" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
      {/* small sailboat */}
      <path d="M292 200 L292 235 L272 235 Z" fill={dark} />
      <path d="M292 165 L292 200 L305 200 Z" fill="#fff" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const DiablosDanzantesCorpusChristi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#C97C4A";
  const white = "#F5F0E6";
  const black = "#2A2A2A";
  return (
    <g>
      {/* horns, drawn first so the mask's fill covers their roots */}
      <path d="M195 105 Q165 85 140 100 Q160 108 190 112 Z" fill={dark} />
      <path d="M205 105 Q235 85 260 100 Q240 108 210 112 Z" fill={dark} />
      {/* robed torso; top edge curves to overlap the mask circle's true boundary at every x */}
      <path d="M175 105 Q200 124 225 105 L245 215 L155 215 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* mask, painted over the horn roots and the torso's neckline */}
      <circle cx="200" cy="110" r="28" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="190" cy="105" r="5" fill={white} />
      <circle cx="210" cy="105" r="5" fill={white} />
      <circle cx="190" cy="105" r="2" fill={black} />
      <circle cx="210" cy="105" r="2" fill={black} />
      <path d="M188 122 L192 132 L196 122 M204 122 L208 132 L212 122" fill={white} />
      {/* raised arms, strokes starting well inside the torso fill */}
      <path d="M188 140 Q160 120 145 90" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <path d="M212 140 Q240 120 255 90" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <circle cx="142" cy="85" r="9" fill={dark} />
      <circle cx="258" cy="85" r="9" fill={dark} />
      {/* legs mid-step, strokes starting well inside the torso fill */}
      <path d="M185 205 Q170 225 150 245" fill="none" stroke={black} strokeWidth="11" strokeLinecap="round" />
      <path d="M215 205 Q235 220 250 240" fill="none" stroke={black} strokeWidth="11" strokeLinecap="round" />
    </g>
  );
};

const TelefericoMerida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.5);
  const snow = "#F5F0E6";
  const rock = "#6B7280";
  return (
    <g>
      {/* snowy Andean peak */}
      <path d="M180 90 L230 90 L280 220 L130 220 Z" fill={rock} />
      <path d="M188 96 L222 96 L210 130 L200 130 Z" fill={snow} />
      {/* cable line */}
      <line x1="110" y1="235" x2="255" y2="105" stroke={dark} strokeWidth="3" />
      {/* cable car cabin midway on the line */}
      <path d="M175 155 L205 155 L200 180 L180 180 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="188" y1="150" x2="188" y2="155" stroke={dark} strokeWidth="4" />
      <rect x="180" y="158" width="9" height="10" fill={light} />
      <rect x="192" y="158" width="9" height="10" fill={light} />
      {/* frailejón plants at the base */}
      <ellipse cx="130" cy="238" rx="14" ry="6" fill="#8FA05A" />
      <ellipse cx="150" cy="242" rx="16" ry="7" fill="#8FA05A" />
    </g>
  );
};

export const venezuelaIllustrations: Record<string, IllustrationDefinition> = {
  "salto-angel": { component: SaltoAngel },
  "tepuyes-roraima": { component: TepuyesRoraima },
  "simon-bolivar": { component: SimonBolivar },
  "rayo-del-catatumbo": { component: RayoDelCatatumbo },
  "miss-venezuela": { component: MissVenezuela },
  arepa: { component: Arepa },
  joropo: { component: Joropo },
  "beisbol-venezolano": { component: BeisbolVenezolano },
  "reservas-petroleo": { component: ReservasPetroleo },
  "orinoco-llanos": { component: OrinocoLlanos },
  "cacao-venezolano": { component: CacaoVenezolano },
  hallaca: { component: Hallaca },
  "los-roques": { component: LosRoques },
  "diablos-danzantes-corpus-christi": { component: DiablosDanzantesCorpusChristi },
  "teleferico-merida": { component: TelefericoMerida },
};
