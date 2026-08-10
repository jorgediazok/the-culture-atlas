import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ArirangJuegosMasivos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={168 + col * 17}
            y={128 + row * 16}
            width="12"
            height="12"
            fill={(row + col) % 2 === 0 ? accentColor : light}
          />
        ))
      )}
      <rect x="168" y="128" width="65" height="48" fill="none" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const Naengmyeon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M165 150 a35 20 0 1 0 70 0 Z" fill={light} />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${175 + i * 15} 150 q0 -20 5 -30`} stroke={accentColor} strokeWidth="3" fill="none" />
      ))}
      <circle cx="200" cy="140" r="6" fill={dark} />
    </g>
  );
};

const EstadioRungrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="155" rx="45" ry="25" fill={light} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${165 + i * 14} 165 q7 -30 14 0`}
          fill="none"
          stroke={i % 2 === 0 ? accentColor : dark}
          strokeWidth="3"
        />
      ))}
    </g>
  );
};

const MontePaektu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 185 L200 120 L240 185 Z" fill={dark} />
      <ellipse cx="200" cy="160" rx="18" ry="10" fill={accentColor} />
      <ellipse cx="200" cy="158" rx="12" ry="6" fill={light} />
    </g>
  );
};

const IdeologiaJuche: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="130" width="50" height="45" fill={accentColor} />
      <rect x="180" y="136" width="40" height="4" fill={light} />
      <rect x="180" y="146" width="30" height="4" fill={light} />
      <path d="M225 130 l10 45 -10 -10 Z" fill={dark} />
    </g>
  );
};

const ArquitecturaPyongyang: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 185 L190 120 L200 105 L210 120 L210 185 Z" fill={accentColor} />
      <rect x="165" y="150" width="20" height="35" fill={dark} />
      <rect x="215" y="160" width="20" height="25" fill={light} />
    </g>
  );
};

const TaekwondoNorcoreano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="155" width="60" height="8" fill={accentColor} />
      <path d="M195 155 l10 -8 l10 8" fill="none" stroke={dark} strokeWidth="3" />
      <circle cx="200" cy="140" r="8" fill={light} />
    </g>
  );
};

const SistemaSongbun: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="175" y="130" width="50" height="40" rx="2" fill={light} />
      <rect x="175" y="130" width="50" height="10" fill={dark} />
      <circle cx="215" cy="160" r="9" fill={accentColor} />
    </g>
  );
};

const TurismoRestringido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="125" width="40" height="55" rx="3" fill={accentColor} />
      <rect x="187" y="135" width="26" height="18" fill={light} />
      <circle cx="200" cy="144" r="6" fill={dark} />
    </g>
  );
};

const ZonaDesmilitarizada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={165 + i * 18} y1="130" x2={165 + i * 18} y2="180" stroke={accentColor} strokeWidth="3" />
      ))}
      <line x1="160" y1="145" x2="240" y2="145" stroke={dark} strokeWidth="2" />
      <line x1="160" y1="165" x2="240" y2="165" stroke={light} strokeWidth="2" />
    </g>
  );
};

export const northKoreaIllustrations: Record<string, IllustrationDefinition> = {
  "arirang-juegos-masivos": { component: ArirangJuegosMasivos },
  naengmyeon: { component: Naengmyeon, variant: "medallion" },
  "estadio-rungrado": { component: EstadioRungrado },
  "monte-paektu": { component: MontePaektu },
  "ideologia-juche": { component: IdeologiaJuche },
  "arquitectura-pyongyang": { component: ArquitecturaPyongyang },
  "taekwondo-norcoreano": { component: TaekwondoNorcoreano, variant: "medallion" },
  "sistema-songbun": { component: SistemaSongbun },
  "turismo-restringido": { component: TurismoRestringido, variant: "medallion" },
  "zona-desmilitarizada": { component: ZonaDesmilitarizada },
};
