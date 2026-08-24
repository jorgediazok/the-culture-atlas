import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Haka: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <ellipse cx="205" cy="180" rx="42" ry="48" fill={skin} stroke={dark} strokeWidth="3" />
      <ellipse cx="188" cy="170" rx="9" ry="12" fill="#fff" />
      <ellipse cx="222" cy="170" rx="9" ry="12" fill="#fff" />
      <circle cx="188" cy="170" r="4" fill="#1A1A1A" />
      <circle cx="222" cy="170" r="4" fill="#1A1A1A" />
      <path d="M195 205 Q205 235 215 205 L212 195 L198 195 Z" fill="#C1272D" stroke={dark} strokeWidth="2" />
      <path d="M165 155 Q175 145 190 148 M245 155 Q235 145 220 148" stroke={dark} strokeWidth="3" fill="none" />
    </g>
  );
};

const SenorDeLosAnillos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  return (
    <g>
      <path d="M90 245 Q205 210 320 245" fill={accentColor} opacity="0.4" />
      <path d="M120 240 Q120 200 165 200 Q210 200 210 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="165" cy="215" rx="24" ry="30" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="3" />
      <circle cx="165" cy="215" r="14" fill="#3A2818" />
      {[[135, 175], [200, 170], [155, 190]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="8" ry="10" fill={tint(accentColor, 0.3)} opacity="0.8" />
      ))}
    </g>
  );
};

const Kiwi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="195" rx="45" ry="40" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${175 + i * 10} ${170 + i * 8} Q${185 + i * 10} ${175 + i * 8} ${180 + i * 10} ${190 + i * 8}`} stroke={dark} strokeWidth="1" opacity="0.3" fill="none" />
      ))}
      <path d="M170 190 Q140 195 130 205" fill="none" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
      <circle cx="172" cy="185" r="4" fill="#1A1A1A" />
      <path d="M195 235 L192 250 M215 235 L218 250" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const RugbyAllBlacks: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <circle cx="205" cy="150" r="14" fill={skin} />
      <path d="M188 165 Q205 158 222 165 L215 225 L235 240 L225 250 L200 232 L195 225 L188 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M222 172 Q245 178 255 200" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
      <ellipse cx="260" cy="205" rx="14" ry="9" fill="#8B5A2B" stroke={dark} strokeWidth="2" transform="rotate(20 260 205)" />
      <path d="M188 172 Q170 180 168 200 L175 235" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
    </g>
  );
};

const Moko: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <path d="M170 230 Q160 190 175 155 Q190 125 205 122 Q220 125 235 155 Q250 190 240 230 Q205 245 170 230 Z" fill={skin} stroke={dark} strokeWidth="2.5" />
      <circle cx="187" cy="175" r="4" fill="#1A1A1A" />
      <circle cx="223" cy="175" r="4" fill="#1A1A1A" />
      <path d="M170 195 Q160 200 165 215 Q170 225 180 220 M170 195 Q175 190 180 195" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <path d="M240 195 Q250 200 245 215 Q240 225 230 220 M240 195 Q235 190 230 195" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <path d="M195 210 Q205 220 215 210 M200 225 Q205 232 210 225" fill="none" stroke={accentColor} strokeWidth="2.5" />
    </g>
  );
};

const Fiordos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const water = "#1D6FA5";
  return (
    <g>
      <path d="M90 240 Q205 230 320 240 L320 250 L90 250 Z" fill={water} />
      <polygon points="90,240 155,110 220,240" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="200,240 260,130 320,240" fill={dark} opacity="0.7" />
      <path d="M175 150 Q170 190 175 235" fill="none" stroke="#fff" strokeWidth="4" opacity="0.7" />
    </g>
  );
};

const Hangi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const smoke = "#E8E4DC";
  return (
    <g>
      <path d="M130 230 Q130 210 155 205 L255 205 Q280 210 280 230 L280 240 L130 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[165, 215], [195, 210], [225, 215], [250, 212]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="14" ry="8" fill="#8B8378" stroke={shade("#8B8378", 0.3)} strokeWidth="1.5" />
      ))}
      <path d="M170 205 Q165 185 175 165 M205 205 Q200 180 210 155 M240 205 Q245 185 235 165" fill="none" stroke={smoke} strokeWidth="6" strokeLinecap="round" opacity="0.75" />
    </g>
  );
};

const Sufragio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <path d="M175 230 L175 205 Q175 195 190 195 L220 195 Q235 195 235 205 L235 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="195" y="200" width="20" height="6" fill={dark} opacity="0.4" />
      <rect x="192" y="140" width="26" height="35" fill="#F5F0E6" stroke={dark} strokeWidth="2" transform="rotate(-8 205 157)" />
      <path d="M185 160 Q185 145 200 145 L215 175" stroke={skin} strokeWidth="8" strokeLinecap="round" fill="none" />
    </g>
  );
};

const Bungee: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <line x1="150" y1="110" x2="290" y2="110" stroke="#5C5C5C" strokeWidth="8" />
      <line x1="150" y1="110" x2="150" y2="90" stroke={dark} strokeWidth="4" />
      <line x1="290" y1="110" x2="290" y2="90" stroke={dark} strokeWidth="4" />
      <path d="M220 110 Q225 160 218 215" fill="none" stroke={accentColor} strokeWidth="4" />
      <circle cx="212" cy="230" r="12" fill={skin} />
      <path d="M212 242 L212 220 M212 225 L195 210 M212 225 L228 235 M212 220 L200 200 M212 220 L222 200" stroke={skin} strokeWidth="5" strokeLinecap="round" fill="none" />
    </g>
  );
};

const CeroMamiferos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const colors = [accentColor, "#40916C", "#BC6C25"];
  return (
    <g>
      <line x1="90" y1="200" x2="320" y2="200" stroke="#4A8F4E" strokeWidth="6" />
      {[[130, 195, 0], [205, 190, 1], [270, 198, 2]].map(([x, y, i]) => (
        <g key={x as number}>
          <ellipse cx={x} cy={(y as number) - 18} rx="16" ry="14" fill={colors[i as number]} stroke={dark} strokeWidth="2" />
          <circle cx={(x as number) + 6} cy={(y as number) - 22} r="2.5" fill="#1A1A1A" />
          <path d={`M${(x as number) + 16} ${(y as number) - 20} L${(x as number) + 26} ${(y as number) - 16}`} stroke={dark} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const TratadoDeWaitangi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const parchment = "#E8DCC0";
  return (
    <g>
      <path d="M130 110 Q120 115 120 130 L120 220 Q120 235 130 240 L280 240 Q290 235 290 220 L290 130 Q290 115 280 110 Z" fill={parchment} stroke={dark} strokeWidth="3" />
      <line x1="145" y1="150" x2="265" y2="150" stroke={shade(parchment, 0.35)} strokeWidth="2" opacity="0.6" />
      <line x1="145" y1="170" x2="265" y2="170" stroke={shade(parchment, 0.35)} strokeWidth="2" opacity="0.6" />
      <line x1="145" y1="190" x2="265" y2="190" stroke={shade(parchment, 0.35)} strokeWidth="2" opacity="0.6" />
      <path d="M150 215 Q165 205 180 218 Q190 210 205 220" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <line x1="240" y1="120" x2="270" y2="90" stroke="#5C3A1E" strokeWidth="4" strokeLinecap="round" />
      <path d="M265 95 L275 85 L280 90 L270 100 Z" fill={accentColor} stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const GuerraDelPavlova: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cream = "#F5F0E6";
  return (
    <g>
      <ellipse cx="205" cy="210" rx="80" ry="24" fill={cream} stroke={shade(cream, 0.3)} strokeWidth="3" />
      <path d="M135 210 Q150 165 205 160 Q260 165 275 210 Q260 195 205 190 Q150 195 135 210 Z" fill="#fff" stroke={shade(cream, 0.3)} strokeWidth="2.5" />
      <ellipse cx="205" cy="185" rx="50" ry="14" fill="#fff" opacity="0.9" />
      {[[170, 180], [205, 175], [240, 180], [190, 190], [220, 190]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="8" ry="6" fill={i % 2 === 0 ? accentColor : "#F4C430"} stroke={dark} strokeWidth="1.2" />
      ))}
    </g>
  );
};

const SilverFernsNetball: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  return (
    <g>
      <circle cx="270" cy="120" r="26" fill="none" stroke={dark} strokeWidth="5" />
      <line x1="270" y1="94" x2="270" y2="145" stroke={dark} strokeWidth="4" />
      <circle cx="180" cy="160" r="12" fill={skin} />
      <path d="M166 173 Q180 165 194 173 L190 220 L170 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M188 178 Q220 165 245 135" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="248" cy="130" r="10" fill="#F4A300" stroke={dark} strokeWidth="2" />
      <path d="M170 220 L160 245 M188 220 L195 245" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const LibreDeDepredadores2050: IllustrationComponent = ({ accentColor }) => {
  const rat = "#5C4A3A";
  return (
    <g>
      <circle cx="205" cy="170" r="65" fill="none" stroke={accentColor} strokeWidth="6" />
      <line x1="160" y1="125" x2="250" y2="215" stroke={accentColor} strokeWidth="6" />
      <ellipse cx="195" cy="180" rx="30" ry="16" fill={rat} stroke={shade(rat, 0.3)} strokeWidth="2.5" />
      <circle cx="165" cy="175" r="10" fill={rat} stroke={shade(rat, 0.3)} strokeWidth="2" />
      <path d="M155 168 L145 160 M155 182 L145 190" stroke={rat} strokeWidth="3" strokeLinecap="round" />
      <path d="M225 190 Q245 200 255 215" stroke={rat} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="160" cy="172" r="1.8" fill="#1A1A1A" />
    </g>
  );
};

const AguasTermalesDeRotorua: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const mud = "#8B6F47";
  return (
    <g>
      <ellipse cx="150" cy="225" rx="45" ry="20" fill={mud} stroke={shade(mud, 0.3)} strokeWidth="2.5" />
      {[[130, 220], [150, 218], [170, 222]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="5" fill={shade(mud, 0.15)} stroke={shade(mud, 0.35)} strokeWidth="1.2" />
      ))}
      <path d="M255 240 Q248 190 258 150 Q262 130 268 150 Q272 190 262 240 Z" fill="#fff" stroke={dark} strokeWidth="2.5" opacity="0.85" />
      <path d="M245 240 Q250 220 260 210 Q270 220 275 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M255 145 Q260 120 255 100 M262 148 Q270 125 268 105" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.6" fill="none" />
    </g>
  );
};

const HongiYPowhiri: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin1 = "#8B5A2B";
  const skin2 = "#D9A46A";
  return (
    <g>
      <circle cx="175" cy="170" r="26" fill={skin1} stroke={dark} strokeWidth="2.5" />
      <circle cx="235" cy="170" r="26" fill={skin2} stroke={dark} strokeWidth="2.5" />
      <path d="M175 195 Q175 215 165 235 L185 235 Q182 215 178 198 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <path d="M235 195 Q235 215 225 235 L245 235 Q242 215 238 198 Z" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <circle cx="168" cy="166" r="2.5" fill="#1A1A1A" />
      <circle cx="242" cy="166" r="2.5" fill="#1A1A1A" />
    </g>
  );
};

const TerrazasPerdidasDelTarawera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="205,100 260,240 150,240" fill="#5C5C5C" stroke={shade("#5C5C5C", 0.3)} strokeWidth="3" />
      <path d="M195 130 Q210 125 220 130 L225 150 Q210 145 195 150 Z" fill="#8B5A2B" opacity="0.6" />
      {[[240, 215, 50], [255, 195, 35], [270, 175, 22]].map(([x, y, w], i) => (
        <rect key={x as number} x={(x as number) - (w as number) / 2} y={y} width={w} height="12" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const CalleMasEmpinadaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,250 320,250 320,190 90,240" fill="#5C5C5C" stroke={dark} strokeWidth="2.5" />
      <line x1="100" y1="245" x2="310" y2="197" stroke="#F5F0E6" strokeWidth="2" strokeDasharray="8 6" opacity="0.7" />
      <rect x="110" y="200" width="40" height="40" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="skewY(-8)" />
      <rect x="260" y="150" width="40" height="45" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2.5" transform="skewY(-8)" />
      <circle cx="230" cy="220" r="9" fill="#C1272D" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const RenacimientoDelIdiomaMaori: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="205" cy="150" r="14" fill={skin} />
      <path d="M188 165 Q205 155 222 165 L217 210 L193 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[[150, 215], [175, 225], [235, 225], [260, 215]].map(([x, y], i) => (
        <g key={x as number}>
          <circle cx={x} cy={(y as number) - 16} r="9" fill={skin} />
          <path d={`M${(x as number) - 11} ${(y as number) - 3} Q${x} ${(y as number) - 9} ${(x as number) + 11} ${(y as number) - 3} L${(x as number) + 8} ${y} L${(x as number) - 8} ${y} Z`} fill={i % 2 === 0 ? tint(accentColor, 0.3) : shade(accentColor, 0.1)} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const MentalidadDelAlambreNumero8: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="180" cy="150" r="13" fill={skin} />
      <path d="M166 163 Q180 155 194 163 L190 210 L170 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M190 175 Q220 180 235 165" stroke={skin} strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="248" cy="185" r="26" fill="none" stroke="#5C5C5C" strokeWidth="5" />
      <circle cx="248" cy="185" r="17" fill="none" stroke="#5C5C5C" strokeWidth="4" />
      <rect x="200" y="200" width="45" height="8" fill="#5C5C5C" stroke={dark} strokeWidth="1.5" transform="rotate(-20 222 204)" />
    </g>
  );
};

export const newZealandIllustrations: Record<string, IllustrationDefinition> = {
  haka: { component: Haka },
  "senor-de-los-anillos": { component: SenorDeLosAnillos },
  kiwi: { component: Kiwi },
  "rugby-all-blacks": { component: RugbyAllBlacks },
  moko: { component: Moko },
  fiordos: { component: Fiordos },
  hangi: { component: Hangi },
  sufragio: { component: Sufragio },
  bungee: { component: Bungee },
  "cero-mamiferos": { component: CeroMamiferos },
  "el-tratado-de-waitangi": { component: TratadoDeWaitangi },
  "la-guerra-del-pavlova": { component: GuerraDelPavlova },
  "los-silver-ferns-y-el-netball": { component: SilverFernsNetball },
  "libre-de-depredadores-2050": { component: LibreDeDepredadores2050 },
  "las-aguas-termales-de-rotorua": { component: AguasTermalesDeRotorua },
  "el-hongi-y-el-powhiri": { component: HongiYPowhiri },
  "las-terrazas-perdidas-del-tarawera": { component: TerrazasPerdidasDelTarawera },
  "la-calle-mas-empinada-del-mundo": { component: CalleMasEmpinadaDelMundo },
  "el-renacimiento-del-idioma-maori": { component: RenacimientoDelIdiomaMaori },
  "la-mentalidad-del-alambre-numero-8": { component: MentalidadDelAlambreNumero8 },
};
