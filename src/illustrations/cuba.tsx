import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const AutosClasicosCuba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 172 Q165 155 185 152 L215 152 Q232 155 232 172 Z" fill={accentColor} />
      <rect x="185" y="140" width="30" height="16" rx="4" fill={dark} />
      <circle cx="180" cy="175" r="8" fill={dark} />
      <circle cx="218" cy="175" r="8" fill={dark} />
      <circle cx="180" cy="175" r="3" fill={light} />
      <circle cx="218" cy="175" r="3" fill={light} />
    </g>
  );
};

const HabanosTabaco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="155" width="66" height="14" rx="7" fill={light} transform="rotate(-12 198 162)" />
      <rect x="180" y="155" width="10" height="14" fill={accentColor} transform="rotate(-12 198 162)" />
      <path d="M225 145 Q231 138 225 130 Q231 132 229 124" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
};

const SonCubanoBuenaVista: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="180" cy="165" rx="10" ry="14" fill={accentColor} />
      <line x1="180" y1="179" x2="180" y2="190" stroke={dark} strokeWidth="4" />
      <ellipse cx="200" cy="158" rx="10" ry="14" fill={dark} transform="rotate(20 200 158)" />
      <line x1="196" y1="171" x2="190" y2="181" stroke={accentColor} strokeWidth="4" />
      <path d="M215 150 L235 145 L232 160 Z" fill={light} />
    </g>
  );
};

const RevolucionCubana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 165 Q170 145 200 143 Q230 145 230 165 Q200 172 170 165 Z" fill={dark} />
      <circle cx="200" cy="150" r="6" fill={light} />
      <path
        d="M200 144 L202 149 L207 149 L203 152 L205 157 L200 154 L195 157 L197 152 L193 149 L198 149 Z"
        fill={accentColor}
      />
    </g>
  );
};

const SanteriaReligion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  const offsets = [0, -4, -7, -8, -7, -4, 0];
  return (
    <g>
      {offsets.map((dy, i) => (
        <circle key={i} cx={168 + i * 9} cy={158 + dy} r="5" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <rect x="228" y="138" width="6" height="24" fill={light} />
      <path d="M231 138 Q226 130 231 124 Q236 130 231 138 Z" fill={dark} />
    </g>
  );
};

const BeisbolPasionNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="196" y="128" width="7" height="55" rx="3" fill={dark} transform="rotate(25 200 155)" />
      <circle cx="180" cy="165" r="12" fill={light} />
      <path d="M172 160 Q180 163 172 170 M188 160 Q180 163 188 170" fill="none" stroke={accentColor} strokeWidth="1.5" />
    </g>
  );
};

const BalletNacionalCuba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 178 Q168 160 182 155 Q192 158 190 172 Q186 180 170 178 Z" fill={light} />
      <path d="M205 178 Q203 160 217 155 Q227 158 225 172 Q221 180 205 178 Z" fill={accentColor} />
      <line x1="182" y1="155" x2="176" y2="140" stroke={dark} strokeWidth="2" />
      <line x1="217" y1="155" x2="223" y2="140" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const CampanaAlfabetizacion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 160 Q165 150 185 150 L185 178 Q165 178 165 168 Z" fill={accentColor} />
      <path d="M215 160 Q215 150 195 150 L195 178 Q215 178 215 168 Z" fill={dark} />
      <line x1="190" y1="150" x2="190" y2="178" stroke={light} strokeWidth="2" />
    </g>
  );
};

const RonCubaLibre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 140 L218 140 L212 185 L188 185 Z" fill={light} opacity="0.85" />
      <circle cx="195" cy="150" r="4" fill={accentColor} />
      <circle cx="205" cy="158" r="4" fill={dark} />
      <path d="M225 138 Q233 138 233 148 Q233 155 225 153 Q220 148 225 138 Z" fill={accentColor} />
    </g>
  );
};

const MedicosCubanosMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="172" y="155" width="56" height="34" rx="6" fill={accentColor} />
      <path d="M190 155 L190 145 Q190 138 200 138 Q210 138 210 145 L210 155" fill="none" stroke={dark} strokeWidth="4" />
      <rect x="195" y="165" width="10" height="18" fill={light} />
      <rect x="190" y="170" width="20" height="8" fill={light} />
    </g>
  );
};

export const cubaIllustrations: Record<string, IllustrationDefinition> = {
  "autos-clasicos-cuba": { component: AutosClasicosCuba },
  "habanos-tabaco": { component: HabanosTabaco, variant: "medallion" },
  "son-cubano-buena-vista": { component: SonCubanoBuenaVista },
  "revolucion-cubana": { component: RevolucionCubana },
  "santeria-religion": { component: SanteriaReligion },
  "beisbol-pasion-nacional": { component: BeisbolPasionNacional, variant: "medallion" },
  "ballet-nacional-cuba": { component: BalletNacionalCuba, variant: "medallion" },
  "campana-alfabetizacion": { component: CampanaAlfabetizacion },
  "ron-cuba-libre": { component: RonCubaLibre, variant: "medallion" },
  "medicos-cubanos-mundo": { component: MedicosCubanosMundo },
};
