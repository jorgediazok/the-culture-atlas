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
};
