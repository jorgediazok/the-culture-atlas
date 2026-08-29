import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Mundial2022PrimerArabe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 235 L150 165 Q160 145 205 140 Q250 145 260 165 L270 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M160 170 Q205 155 250 170 L245 200 Q205 188 165 200 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" opacity="0.6" />
      <circle cx="205" cy="230" r="20" fill="#fff" stroke={dark} strokeWidth="2.5" />
      <polygon points="205,218 212,224 209,233 201,233 198,224" fill="#1A1A1A" />
    </g>
  );
};

const AlJazeeraCadenaQueCambioMedios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="140" rx="40" ry="14" fill="none" stroke="#B0B8BF" strokeWidth="4" transform="rotate(15 205 140)" />
      <circle cx="205" cy="140" r="8" fill="#78909C" />
      <line x1="205" y1="148" x2="205" y2="180" stroke="#78909C" strokeWidth="5" />
      <rect x="160" y="180" width="90" height="60" rx="4" fill="#1A1A1A" stroke={dark} strokeWidth="2.5" />
      <rect x="170" y="190" width="70" height="40" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const GasNaturalRiquezaPerCapita: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#1D6FA5";
  const gold = "#D4AF37";
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill={water} opacity="0.5" />
      <rect x="195" y="150" width="20" height="60" fill="#8B8378" stroke={dark} strokeWidth="2" />
      <path d="M175 150 L235 150 L225 165 L185 165 Z" fill="#8B8378" stroke={dark} strokeWidth="2" />
      {[[150, 225], [175, 218], [200, 228], [225, 220], [250, 226]].map(([x, y], i) => (
        <circle key={x as number} cx={x} cy={y} r="10" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="1.5" opacity={0.95 - i * 0.05} />
      ))}
    </g>
  );
};

const BloqueoVacasVoladoras: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 200 L270 200 L260 175 L150 175 Z" fill="#B0B8BF" stroke={dark} strokeWidth="3" />
      <path d="M270 200 L290 190 L285 175 L260 175 Z" fill="#78909C" stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="230" rx="35" ry="18" fill="#fff" stroke={dark} strokeWidth="2.5" />
      {[[185, 222], [220, 226]].map(([x, y]) => (
        <ellipse key={x as number} cx={x} cy={y} rx="8" ry="6" fill="#1A1A1A" />
      ))}
      <path d="M170 235 L170 245 M240 235 L240 245" stroke={dark} strokeWidth="4" />
      <path d="M100 180 Q120 175 140 180" fill="none" stroke="#E8E4DC" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const BuceoPerlasAntesDelPetroleo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={accentColor} opacity="0.45" />
      <circle cx="205" cy="165" r="14" fill={skin} />
      <path d="M192 178 Q205 170 218 178 L212 220 L198 220 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M212 190 Q230 195 235 210" stroke={skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M225 195 Q240 190 250 205 Q240 215 225 210 Q220 202 225 195 Z" fill="#E8DCC0" stroke={shade("#E8DCC0", 0.3)} strokeWidth="2" />
      <circle cx="238" cy="203" r="6" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const HospitalHalconesDoha: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="195" width="110" height="40" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="200" cy="180" rx="20" ry="26" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-10 200 180)" />
      <path d="M212 165 Q230 158 238 145" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M195 200 Q185 210 195 218" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <path d="M205 158 L213 148 L217 162 Z" fill="#F4A300" />
      <circle cx="270" cy="215" r="10" fill="#C1272D" opacity="0.85" />
      <path d="M270 209 L270 221 M264 215 L276 215" stroke="#fff" strokeWidth="2" />
    </g>
  );
};

const MuseoNacionalRosaDelDesierto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[140, 225, 60, 12, -8], [175, 210, 70, 14, 5], [215, 220, 65, 13, -4], [250, 200, 55, 12, 10], [180, 235, 80, 10, 2]].map(([x, y, w, h, deg], i) => (
        <rect key={i} x={(x as number) - (w as number) / 2} y={(y as number) - (h as number) / 2} width={w} height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" transform={`rotate(${deg} ${x} ${y})`} opacity="0.9" />
      ))}
    </g>
  );
};

const SouqWaqifMercadoTradicional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const adobe = "#C68642";
  return (
    <g>
      <rect x="110" y="170" width="200" height="70" fill={adobe} stroke={shade(adobe, 0.3)} strokeWidth="3" />
      <path d="M100 175 Q205 155 320 175 L320 185 Q205 168 100 185 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="185" x2={x} y2="165" stroke="#8B5A2B" strokeWidth="2" />
          <ellipse cx={x} cy="160" rx="6" ry="9" fill="#F4A300" opacity={0.9 - i * 0.05} />
        </g>
      ))}
      <rect x="150" y="200" width="30" height="40" fill={dark} opacity="0.4" />
      <rect x="240" y="200" width="30" height="40" fill={dark} opacity="0.4" />
    </g>
  );
};

const DhowBarcosTradicionales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <path d="M90 225 Q205 240 320 225 L320 250 L90 250 Z" fill={water} />
      <path d="M130 215 Q160 200 220 210 Q255 215 260 225 L255 232 L140 232 Q128 225 130 215 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="190" y1="205" x2="190" y2="130" stroke="#8B5A2B" strokeWidth="4" />
      <path d="M190 130 L245 195 L190 195 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const InversionesGlobalesFondoSoberano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <circle cx="150" cy="220" r="14" fill={skin} />
      <path d="M138 225 Q150 218 162 225" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      {[[195, 200, 40], [245, 180, 55], [290, 210, 30]].map(([x, y, h], i) => (
        <rect key={x as number} x={(x as number) - 12} y={y} width="24" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.4)} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const ArdhaDanzaEspadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const steel = "#B0B8BF";
  const dancers: [number, number][] = [
    [150, 1],
    [260, -1],
  ];
  return (
    <g>
      {dancers.map(([x, dir], i) => (
        <g key={i}>
          <circle cx={x} cy="150" r="14" fill={skin} />
          <path d={`M${x - 20} 160 Q${x} 148 ${x + 20} 160 L${x + 15} 235 L${x - 15} 235 Z`} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x + 12 * dir} 172 Q${x + 30 * dir} 150 ${x + 35 * dir} 120`} fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
          <path d={`M${x + 35 * dir} 120 Q${x + 55 * dir} 100 ${x + 45 * dir} 80`} fill="none" stroke={steel} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
      <ellipse cx="205" cy="225" rx="22" ry="10" fill={dark} opacity="0.5" />
      <rect x="188" y="205" width="34" height="22" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="205" rx="17" ry="7" fill="#E8DCC0" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const KarakTeCallejero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const metal = "#B0B8BF";
  const metalDark = shade(metal, 0.3);
  const tea = "#8B5A2B";
  return (
    <g>
      <rect x="100" y="215" width="220" height="25" fill={dark} opacity="0.35" />
      <path d="M175 205 Q160 205 160 185 Q158 160 180 155 Q182 145 198 144 Q214 145 216 155 Q232 158 230 175 L226 205 Z" fill={metal} stroke={metalDark} strokeWidth="3" />
      <path d="M172 185 Q135 178 118 162 Q131 172 152 176 Q162 178 168 188 Z" fill={metal} stroke={metalDark} strokeWidth="2.5" />
      <ellipse cx="198" cy="142" rx="9" ry="4" fill={metalDark} />
      <path d="M214 185 Q244 180 244 198 Q244 212 228 212" fill="none" stroke={metalDark} strokeWidth="5" strokeLinecap="round" />
      <path d="M117 163 Q108 172 102 185" stroke={tea} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M82 190 L106 190 L102 212 L86 212 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <rect x="86" y="198" width="16" height="10" fill={accentColor} opacity="0.7" />
    </g>
  );
};

export const qatarIllustrations: Record<string, IllustrationDefinition> = {
  "mundial-2022-primer-arabe": { component: Mundial2022PrimerArabe },
  "al-jazeera-cadena-que-cambio-medios": { component: AlJazeeraCadenaQueCambioMedios },
  "gas-natural-riqueza-per-capita": { component: GasNaturalRiquezaPerCapita },
  "bloqueo-vacas-voladoras": { component: BloqueoVacasVoladoras },
  "buceo-perlas-antes-del-petroleo": { component: BuceoPerlasAntesDelPetroleo },
  "hospital-halcones-doha": { component: HospitalHalconesDoha },
  "museo-nacional-rosa-del-desierto": { component: MuseoNacionalRosaDelDesierto },
  "souq-waqif-mercado-tradicional": { component: SouqWaqifMercadoTradicional },
  "dhow-barcos-tradicionales": { component: DhowBarcosTradicionales },
  "inversiones-globales-fondo-soberano": { component: InversionesGlobalesFondoSoberano },
  "ardha-danza-espadas": { component: ArdhaDanzaEspadas },
  "karak-te-callejero": { component: KarakTeCallejero },
};
