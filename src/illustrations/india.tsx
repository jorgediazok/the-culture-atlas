import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const KumbhMelaLaMayorReunionHumana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[188, 194, 200, 206, 212].map((x, i) => (
        <circle key={x} cx={x} cy={172 - (i % 2) * 3} r="3" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <path d="M182 178 L218 178" stroke={light} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const ElCeroElRegaloMatematicoDeLaIndia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <circle cx="200" cy="164" r="10" fill="none" stroke={accentColor} strokeWidth="4" />
      <line x1="184" y1="178" x2="216" y2="178" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const LosDabbawalasQueNuncaSeEquivocan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="152" width="16" height="10" rx="1" fill={light} stroke={dark} strokeWidth="1" />
      <rect x="192" y="162" width="16" height="10" rx="1" fill={accentColor} stroke={dark} strokeWidth="1" />
      <rect x="192" y="172" width="16" height="8" rx="1" fill={light} stroke={dark} strokeWidth="1" />
      <path d="M196 152 Q200 146 204 152" fill="none" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const VaranasiUnaDeLasCiudadesMasAntiguas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="154" width="28" height="4" fill={accentColor} />
      <rect x="188" y="160" width="24" height="4" fill={dark} />
      <rect x="190" y="166" width="20" height="4" fill={accentColor} />
      <rect x="192" y="172" width="16" height="4" fill={dark} />
      <circle cx="216" cy="158" r="2" fill={light} />
    </g>
  );
};

const ElJuegoQueSeVolvioElAjedrezDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={186 + col * 7}
            y={154 + row * 7}
            width="7"
            height="7"
            fill={(row + col) % 2 === 0 ? light : dark}
          />
        ))
      )}
      <path d="M198 160 Q200 156 202 160 L202 166 L198 166 Z" fill={accentColor} />
    </g>
  );
};

const LosPozosEscalonadosTalladosBajoTierra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={186 + i * 6}
          y={152 + i * 5.5}
          width={28 - i * 6}
          height="4"
          fill={i % 2 === 0 ? accentColor : dark}
        />
      ))}
      <rect x="186" y="174" width="4" height="4" fill={light} />
    </g>
  );
};

const ElArbolUnicoQueParaceUnBosque: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <ellipse cx="200" cy="156" rx="22" ry="8" fill={accentColor} />
      {[188, 194, 200, 206, 212].map((x) => (
        <line key={x} x1={x} y1={160} x2={x} y2={178} stroke={dark} strokeWidth="2" />
      ))}
      <ellipse cx="200" cy="180" rx="18" ry="2" fill={light} opacity="0.6" />
    </g>
  );
};

const LaMisionAMarteMasBarataQueUnaPelicula: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <circle cx="210" cy="170" r="9" fill={dark} />
      <path d="M186 160 L198 156 L198 164 Z" fill={accentColor} />
      <rect x="186" y="158" width="8" height="4" fill={light} />
      <line x1="200" y1="162" x2="206" y2="166" stroke={accentColor} strokeWidth="1" opacity="0.6" />
    </g>
  );
};

const VeintidosLenguasOficialesSinUnaNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M186 154 Q186 150 190 150 L204 150 Q208 150 208 154 L208 162 Q208 166 204 166 L196 166 L190 172 L191 166 L190 166 Q186 166 186 162 Z" fill={accentColor} />
      <path d="M196 160 Q196 156 200 156 L212 156 Q216 156 216 160 L216 168 Q216 172 212 172 L206 172 L206 176 L202 172 L200 172 Q196 172 196 168 Z" fill={light} />
    </g>
  );
};

const LasManosQueHablanEnLaDanzaClasica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M190 178 Q188 164 194 158 Q196 156 198 158 L198 178 Z" fill={accentColor} />
      <path d="M210 178 Q212 164 206 158 Q204 156 202 158 L202 178 Z" fill={dark} />
    </g>
  );
};

export const indiaIllustrations: Record<string, IllustrationDefinition> = {
  "kumbh-mela-la-mayor-reunion-humana": { component: KumbhMelaLaMayorReunionHumana },
  "el-cero-el-regalo-matematico-de-la-india": { component: ElCeroElRegaloMatematicoDeLaIndia, variant: "medallion" },
  "los-dabbawalas-que-nunca-se-equivocan": { component: LosDabbawalasQueNuncaSeEquivocan },
  "varanasi-una-de-las-ciudades-mas-antiguas": { component: VaranasiUnaDeLasCiudadesMasAntiguas },
  "el-juego-que-se-volvio-el-ajedrez-del-mundo": { component: ElJuegoQueSeVolvioElAjedrezDelMundo },
  "los-pozos-escalonados-tallados-bajo-tierra": { component: LosPozosEscalonadosTalladosBajoTierra, variant: "medallion" },
  "el-arbol-unico-que-parece-un-bosque": { component: ElArbolUnicoQueParaceUnBosque },
  "la-mision-a-marte-mas-barata-que-una-pelicula": { component: LaMisionAMarteMasBarataQueUnaPelicula },
  "veintidos-lenguas-oficiales-sin-una-nacional": { component: VeintidosLenguasOficialesSinUnaNacional },
  "las-manos-que-hablan-en-la-danza-clasica": { component: LasManosQueHablanEnLaDanzaClasica },
};
