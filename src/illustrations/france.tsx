import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Baguette: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="150" width="140" height="26" rx="13" fill={accentColor} transform="rotate(-8 200 163)" />
      {[-30, -10, 10, 30].map((dx) => (
        <line key={dx} x1={200 + dx} y1="145" x2={195 + dx} y2="180" stroke={dark} strokeWidth="3" transform="rotate(-8 200 163)" />
      ))}
    </g>
  );
};

const Vino: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.85);
  return (
    <g>
      <path d="M175 100 C175 130 185 145 200 145 C215 145 225 130 225 100 Z" fill={light} stroke={accentColor} strokeWidth="4" />
      <path d="M180 108 C182 128 190 138 200 140 C210 138 218 128 220 108 Z" fill={accentColor} />
      <rect x="196" y="145" width="8" height="34" fill={accentColor} />
      <rect x="180" y="179" width="40" height="8" rx="3" fill={accentColor} />
    </g>
  );
};

const CafesTerrazas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="34" ry="10" fill={accentColor} />
      <line x1="200" y1="160" x2="200" y2="200" stroke={dark} strokeWidth="6" />
      <line x1="150" y1="220" x2="164" y2="188" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="250" y1="220" x2="236" y2="188" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      <line x1="160" y1="196" x2="176" y2="196" stroke={dark} strokeWidth="5" />
      <line x1="224" y1="196" x2="240" y2="196" stroke={dark} strokeWidth="5" />
    </g>
  );
};

const Moda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="200" y1="90" x2="200" y2="105" stroke={dark} strokeWidth="4" />
      <path d="M160 105 h80 l-8 12 h-64 Z" fill={dark} />
      <path d="M180 117 C160 140 150 175 165 195 h70 c15,-20 5,-55 -15,-78 Z" fill={accentColor} />
    </g>
  );
};

const Queso: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <polygon points="200,100 250,190 150,190" fill={accentColor} />
      <circle cx="195" cy="150" r="6" fill={light} />
      <circle cx="215" cy="168" r="5" fill={light} />
      <circle cx="185" cy="172" r="4" fill={light} />
    </g>
  );
};

const Monumentos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const gold = "#F4A300";
  return (
    <g>
      {/* night sky */}
      {[
        [130, 95],
        [270, 90],
        [110, 130],
        [290, 140],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2" fill={gold} opacity="0.7" />
      ))}

      {/* Eiffel Tower */}
      <g stroke={dark} strokeWidth="5" fill="none" strokeLinecap="round">
        <line x1="200" y1="90" x2="160" y2="210" />
        <line x1="200" y1="90" x2="240" y2="210" />
        <line x1="178" y1="150" x2="222" y2="150" />
        <line x1="170" y1="180" x2="230" y2="180" />
        <line x1="150" y1="210" x2="250" y2="210" strokeWidth="7" />
      </g>
      {/* the tower's own lights, lit up at night per the imageAlt */}
      {[
        [185, 120],
        [215, 120],
        [180, 165],
        [220, 165],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill={gold} />
      ))}

      {/* people picnicking on the Champ de Mars — a skin-toned head clearly separated from
          an accentColor body reads as a seated person; same-tone head+body blended into one
          blob in an earlier version of this fix */}
      <ellipse cx="200" cy="228" rx="55" ry="10" fill={accentColor} opacity="0.5" />
      {[175, 222].map((x) => (
        <g key={x}>
          <circle cx={x} cy="208" r="6" fill="#C68642" />
          <path d={`M${x - 10} 230 Q${x - 10} 210 ${x} 210 Q${x + 10} 210 ${x + 10} 230 Z`} fill={accentColor} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const Huelgas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <rect x="192" y="120" width="8" height="70" fill={dark} />
      <path d="M200 100 h50 l-14 16 14 16 h-50 Z" fill={accentColor} />
      <circle cx="200" cy="95" r="16" fill={dark} />
    </g>
  );
};

const Cine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <circle cx="200" cy="138" r="52" fill={accentColor} />
      <circle cx="200" cy="138" r="14" fill={dark} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle key={deg} cx={200 + Math.cos((deg * Math.PI) / 180) * 32} cy={138 + Math.sin((deg * Math.PI) / 180) * 32} r="7" fill={dark} />
      ))}
    </g>
  );
};

const TourDeFrancia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  return (
    <g>
      <circle cx="200" cy="200" r="42" fill="none" stroke={dark} strokeWidth="8" />
      <rect x="182" y="115" width="36" height="50" rx="8" fill={accentColor} />
      <circle cx="200" cy="105" r="12" fill={dark} />
    </g>
  );
};

const SavoirVivre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="200" cy="160" r="46" fill={light} stroke={accentColor} strokeWidth="4" />
      <line x1="150" y1="120" x2="150" y2="170" stroke={dark} strokeWidth="4" />
      <line x1="144" y1="120" x2="144" y2="140" stroke={dark} strokeWidth="3" />
      <line x1="156" y1="120" x2="156" y2="140" stroke={dark} strokeWidth="3" />
      <path d="M250 120 v50 M250 120 c8 0 8 16 0 20" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const Braille: IllustrationComponent = ({ accentColor }) => {
  const light = tint(accentColor, 0.7);
  const dots = [
    [180, 115],
    [180, 138],
    [180, 161],
    [220, 115],
    [220, 138],
    [220, 161],
  ];
  return (
    <g>
      <rect x="160" y="100" width="80" height="76" rx="8" fill={accentColor} />
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="8" fill={light} />
      ))}
    </g>
  );
};

const Daguerrotipo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="155" y="130" width="90" height="55" rx="6" fill={accentColor} />
      <circle cx="200" cy="157" r="22" fill={dark} />
      <circle cx="200" cy="157" r="12" fill={light} />
      <rect x="180" y="118" width="40" height="16" fill={dark} />
    </g>
  );
};

const Napoleon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4AF37";
  return (
    <g>
      {/* bicorne hat on the left, kept clear of the sash so the two-cornered
          silhouette (its whole reason for reading as a bicorne) isn't cut across */}
      <path
        d="M100 165 Q122 118 158 138 Q180 148 202 138 Q238 118 260 165 Q222 148 180 150 Q138 148 100 165 Z"
        fill={dark}
        stroke={shade(dark, 0.3)}
        strokeWidth="2.5"
      />
      <circle cx="180" cy="143" r="9" fill={gold} stroke={dark} strokeWidth="1.5" />

      {/* sash with medals, to the right of the hat */}
      <path d="M270 110 L288 116 L250 232 L232 226 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[
        [262, 143],
        [251, 178],
        [240, 213],
      ].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="9" fill={gold} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const MarieCurie: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M180 190 v-50 a20 30 0 0 1 40 0 v50 Z" fill={light} stroke={accentColor} strokeWidth="4" />
      <circle cx="200" cy="140" r="14" fill={dark} opacity="0.7" />
      <circle cx="192" cy="150" r="6" fill={dark} opacity="0.5" />
      <circle cx="210" cy="155" r="5" fill={dark} opacity="0.5" />
    </g>
  );
};

const Impresionismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="180" cy="130" r="18" fill={accentColor} opacity="0.8" />
      <circle cx="215" cy="150" r="22" fill={light} opacity="0.8" />
      <circle cx="195" cy="170" r="16" fill={dark} opacity="0.7" />
      <circle cx="235" cy="120" r="10" fill={dark} opacity="0.6" />
    </g>
  );
};

const EdithPiaf: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="20" ry="28" fill={accentColor} />
      <circle cx="200" cy="114" r="14" fill={light} />
      <rect x="196" y="178" width="8" height="16" fill={dark} />
      <circle cx="225" cy="118" r="4" fill={light} />
    </g>
  );
};

const Louvre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="150" y="178" width="100" height="10" fill={dark} />
      <polygon points="200,120 240,178 160,178" fill={light} stroke={accentColor} strokeWidth="3" />
    </g>
  );
};

const PerfumeGrasse: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M185 140 h30 v45 a15 12 0 0 1 -30 0 Z" fill={light} stroke={accentColor} strokeWidth="3" />
      <rect x="192" y="122" width="16" height="18" fill={dark} />
      <rect x="188" y="114" width="24" height="10" rx="3" fill={accentColor} />
    </g>
  );
};

const AcademiaFrancesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M155 120 h85 v65 h-85 Z" fill={accentColor} />
      <rect x="163" y="130" width="69" height="6" fill={light} />
      <rect x="163" y="145" width="69" height="6" fill={light} />
      <rect x="163" y="160" width="45" height="6" fill={light} />
      <line x1="220" y1="115" x2="245" y2="90" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Semana35Horas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <circle cx="200" cy="145" r="42" fill={light} stroke={accentColor} strokeWidth="6" />
      <line x1="200" y1="145" x2="200" y2="118" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <line x1="200" y1="145" x2="222" y2="145" stroke={dark} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

export const franceIllustrations: Record<string, IllustrationDefinition> = {
  baguette: { component: Baguette, variant: "medallion" },
  vino: { component: Vino, variant: "medallion" },
  "cafes-terrazas": { component: CafesTerrazas },
  moda: { component: Moda, variant: "medallion" },
  queso: { component: Queso, variant: "medallion" },
  monumentos: { component: Monumentos },
  huelgas: { component: Huelgas, variant: "medallion" },
  cine: { component: Cine, variant: "medallion" },
  "tour-de-francia": { component: TourDeFrancia },
  "savoir-vivre": { component: SavoirVivre, variant: "medallion" },
  braille: { component: Braille },
  daguerrotipo: { component: Daguerrotipo },
  napoleon: { component: Napoleon },
  "marie-curie": { component: MarieCurie },
  impresionismo: { component: Impresionismo, variant: "medallion" },
  "edith-piaf": { component: EdithPiaf, variant: "medallion" },
  louvre: { component: Louvre },
  "perfume-grasse": { component: PerfumeGrasse, variant: "medallion" },
  "academia-francesa": { component: AcademiaFrancesa },
  "semana-35-horas": { component: Semana35Horas, variant: "medallion" },
};
