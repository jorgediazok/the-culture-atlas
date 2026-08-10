import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MuroDeBerlin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="155" y="120" width="90" height="55" fill={accentColor} />
      {[0, 1, 2].map((row) => (
        <line key={row} x1="155" y1={135 + row * 15} x2="245" y2={135 + row * 15} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M170 150 q10 -10 20 0 M210 130 q10 10 20 -4" fill="none" stroke={light} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const Oktoberfest: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M175 130 h40 v50 h-40 Z" fill={accentColor} />
      <ellipse cx="195" cy="130" rx="20" ry="8" fill={light} />
      <path d="M175 118 q20 -14 40 0 q-6 10 -40 0 Z" fill="#fff" />
      <rect x="212" y="145" width="12" height="8" fill={dark} />
    </g>
  );
};

const HermanosGrimm: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 130 h40 v50 h-40 Z" fill={accentColor} />
      <path d="M200 130 h40 v50 h-40 Z" fill={light} />
      <line x1="200" y1="130" x2="200" y2="180" stroke={dark} strokeWidth="2" />
      <path d="M170 145 q10 10 0 20 M230 145 q-10 10 0 20" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Autobahn: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M170 185 L192 110 L208 110 L230 185 Z" fill={dark} />
      <path d="M188 185 L197 130 L203 130 L212 185 Z" fill={light} />
      <rect x="195" y="150" width="10" height="18" fill={accentColor} />
    </g>
  );
};

const Beethoven: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 150 h80" stroke={dark} strokeWidth="2" fill="none" />
      <path d="M160 160 h80 M160 170 h80" stroke={dark} strokeWidth="2" fill="none" />
      <circle cx="185" cy="150" r="5" fill={accentColor} />
      <circle cx="205" cy="165" r="5" fill={light} />
      <circle cx="220" cy="155" r="5" fill={accentColor} />
    </g>
  );
};

const MercadosNavidenos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M200 105 L215 135 H185 Z" fill={accentColor} />
      <path d="M200 125 L220 160 H180 Z" fill={dark} />
      <path d="M200 148 L228 185 H172 Z" fill={light} />
      <rect x="196" y="185" width="8" height="10" fill={dark} />
    </g>
  );
};

const GutenbergImprenta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="140" width="70" height="12" fill={dark} />
      <rect x="180" y="110" width="40" height="30" fill={accentColor} />
      <rect x="175" y="152" width="50" height="30" fill={light} />
    </g>
  );
};

const Bauhaus: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="180" cy="140" r="16" fill={accentColor} />
      <rect x="205" y="128" width="26" height="26" fill={light} />
      <path d="M175 175 L200 155 L225 175 Z" fill={dark} />
    </g>
  );
};

const SistemaPfand: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M188 120 h24 v15 h-24 Z" fill={dark} />
      <path d="M185 135 h30 l-4 50 h-22 Z" fill={accentColor} />
      <path d="M191 150 h18 v10 h-18 Z" fill={light} />
    </g>
  );
};

const LeyPurezaCerveza: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 140 h26 v45 h-26 Z" fill={accentColor} transform="rotate(-8 183 162)" />
      <path d="M204 130 h26 v55 h-26 Z" fill={light} transform="rotate(6 217 157)" />
      <ellipse cx="183" cy="140" rx="13" ry="5" fill={dark} transform="rotate(-8 183 140)" />
    </g>
  );
};

const Neuschwanstein: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="170" y="140" width="60" height="45" fill={light} />
      <rect x="180" y="105" width="14" height="40" fill={accentColor} />
      <rect x="206" y="115" width="14" height="30" fill={accentColor} />
      <path d="M180 105 L187 92 L194 105 Z" fill={dark} />
      <path d="M206 115 L213 100 L220 115 Z" fill={dark} />
    </g>
  );
};

const FutbolAlemania: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 175 h80 v10 h-80 Z" fill={dark} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={164 + i * 15} y={140 + (i % 2) * 15} width="10" height={35 - (i % 2) * 15} fill={i % 2 === 0 ? accentColor : light} />
      ))}
    </g>
  );
};

const AngelaMerkel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="150" width="70" height="30" rx="4" fill={accentColor} />
      <circle cx="200" cy="145" r="12" fill={light} />
      <path d="M188 145 h24 M200 133 v24" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const FilosofiaAlemana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 185 V140 a20 20 0 0 1 40 0 v45 Z" fill={accentColor} />
      <rect x="170" y="185" width="60" height="8" fill={dark} />
      <circle cx="200" cy="140" r="7" fill={light} />
    </g>
  );
};

const KraftwerkMusicaElectronica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="165" y="140" width="70" height="35" rx="3" fill={dark} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={172 + i * 16} y="148" width="10" height={12 + (i % 3) * 6} fill={i % 2 === 0 ? accentColor : light} />
      ))}
    </g>
  );
};

const RelojCucu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M175 140 L200 110 L225 140 L225 180 L175 180 Z" fill={accentColor} />
      <circle cx="200" cy="160" r="12" fill={light} />
      <rect x="196" y="128" width="8" height="10" fill={dark} />
    </g>
  );
};

const CulturaDelPan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <ellipse cx="185" cy="165" rx="25" ry="16" fill={accentColor} />
      <ellipse cx="222" cy="170" rx="18" ry="12" fill={light} />
      <path d="M175 158 q10 -8 20 0 M165 168 q10 -8 20 0" stroke={dark} strokeWidth="2" fill="none" />
    </g>
  );
};

const CastillosRin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M160 185 Q170 150 185 185 Z" fill={dark} />
      <rect x="188" y="145" width="24" height="40" fill={accentColor} />
      <path d="M188 145 h24 l-4 -14 h-16 Z" fill={light} />
      <path d="M215 185 Q225 155 240 185 Z" fill={dark} />
    </g>
  );
};

const KarlMarx: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="170" y="120" width="60" height="50" rx="2" fill={accentColor} />
      <rect x="176" y="126" width="48" height="38" fill={dark} />
      <line x1="200" y1="126" x2="200" y2="164" stroke={light} strokeWidth="2" />
    </g>
  );
};

const EscarabajoVolkswagen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 175 Q170 130 200 130 Q230 130 240 175 Z" fill={accentColor} />
      <circle cx="178" cy="178" r="10" fill={dark} />
      <circle cx="222" cy="178" r="10" fill={dark} />
      <ellipse cx="200" cy="145" rx="18" ry="10" fill={light} />
    </g>
  );
};

export const germanyIllustrations: Record<string, IllustrationDefinition> = {
  "muro-de-berlin": { component: MuroDeBerlin },
  oktoberfest: { component: Oktoberfest, variant: "medallion" },
  "hermanos-grimm": { component: HermanosGrimm },
  autobahn: { component: Autobahn },
  beethoven: { component: Beethoven, variant: "medallion" },
  "mercados-navidenos": { component: MercadosNavidenos },
  "gutenberg-imprenta": { component: GutenbergImprenta },
  bauhaus: { component: Bauhaus, variant: "medallion" },
  "sistema-pfand": { component: SistemaPfand },
  "ley-pureza-cerveza": { component: LeyPurezaCerveza },
  neuschwanstein: { component: Neuschwanstein },
  "futbol-alemania": { component: FutbolAlemania },
  "angela-merkel": { component: AngelaMerkel, variant: "medallion" },
  "filosofia-alemana": { component: FilosofiaAlemana },
  "kraftwerk-musica-electronica": { component: KraftwerkMusicaElectronica },
  "reloj-cucu": { component: RelojCucu, variant: "medallion" },
  "cultura-del-pan": { component: CulturaDelPan },
  "castillos-rin": { component: CastillosRin },
  "karl-marx": { component: KarlMarx, variant: "medallion" },
  "escarabajo-volkswagen": { component: EscarabajoVolkswagen },
};
