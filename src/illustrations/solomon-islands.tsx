import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CasiMilIslasSetentaLenguas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="190" cy="170" rx="7" ry="4" fill={accentColor} />
      <ellipse cx="206" cy="176" rx="9" ry="4.5" fill={accentColor} />
      <ellipse cx="212" cy="162" rx="5" ry="3" fill={dark} />
      <path d="M180 178 Q200 182 220 178" stroke={light} strokeWidth="2" fill="none" opacity="0.6" />
    </g>
  );
};

const SonidoDeHierroDeGuadalcanal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <line x1="200" y1="150" x2="200" y2="172" stroke={dark} strokeWidth="3" />
      <path d="M196 154 L204 154 L200 150 Z" fill={dark} />
      <path d="M186 172 Q200 178 214 172 L214 178 L186 178 Z" fill={accentColor} />
      <path d="M180 178 L220 178" stroke={light} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const DineroDeConchasDeLangaLanga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 158 Q200 172 216 158" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      {[186, 192, 198, 204, 210, 214].map((x, i) => (
        <circle key={x} cx={x} cy={158 + Math.abs(3 - i) * 4} r="3" fill={i % 2 === 0 ? accentColor : light} />
      ))}
    </g>
  );
};

const TierraBajoTenenciaConsuetudinaria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="184" y="160" width="32" height="18" fill={light} stroke={dark} strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M196 160 Q192 150 198 146 Q200 152 200 160" fill={accentColor} />
    </g>
  );
};

const IslasDePiedraArtificiales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="176" rx="20" ry="6" fill={dark} />
      <rect x="192" y="160" width="8" height="14" fill={accentColor} />
      <path d="M190 160 L196 152 L202 160 Z" fill={light} />
    </g>
  );
};

const SantuariosDeCraneos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="184" y="172" width="32" height="6" fill={dark} />
      {[190, 200, 210].map((x) => (
        <g key={x}>
          <circle cx={x} cy="164" r="5" fill={light} stroke={dark} strokeWidth="1" />
          <circle cx={x - 1.5} cy="163" r="0.8" fill={dark} />
          <circle cx={x + 1.5} cy="163" r="0.8" fill={dark} />
        </g>
      ))}
    </g>
  );
};

const OrquestasDeFlautasDePan: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={186 + i * 6}
          y={150 + i * 3}
          width="4"
          height={28 - i * 3}
          fill={i % 2 === 0 ? accentColor : light}
          stroke={dark}
          strokeWidth="0.5"
        />
      ))}
    </g>
  );
};

const ElAtolonDeCoralMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.65);
  return (
    <g>
      <circle cx="200" cy="164" r="18" fill="none" stroke={accentColor} strokeWidth="6" />
      <circle cx="200" cy="164" r="10" fill={light} />
      <circle cx="200" cy="164" r="18" fill="none" stroke={dark} strokeWidth="1" opacity="0.5" />
    </g>
  );
};

const CulturaDeLaNuezDeBetel: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="192" cy="164" r="8" fill={dark} />
      <circle cx="192" cy="164" r="4" fill={accentColor} />
      <path d="M204 156 Q214 160 210 172 Q206 176 202 170 Q200 162 204 156 Z" fill={light} />
    </g>
  );
};

const CanoasDeGuerraYElNguzunguzu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 176 Q200 168 218 176 L214 180 L186 180 Z" fill={accentColor} />
      <path d="M182 176 Q176 172 178 166 Q184 168 186 174 Z" fill={dark} />
      <circle cx="180" cy="170" r="2.4" fill={light} />
    </g>
  );
};

export const solomonIslandsIllustrations: Record<string, IllustrationDefinition> = {
  "casi-mil-islas-setenta-lenguas": { component: CasiMilIslasSetentaLenguas },
  "sonido-de-hierro-de-guadalcanal": { component: SonidoDeHierroDeGuadalcanal },
  "dinero-de-conchas-de-langa-langa": { component: DineroDeConchasDeLangaLanga },
  "tierra-bajo-tenencia-consuetudinaria": { component: TierraBajoTenenciaConsuetudinaria },
  "islas-de-piedra-artificiales": { component: IslasDePiedraArtificiales },
  "santuarios-de-craneos": { component: SantuariosDeCraneos },
  "orquestas-de-flautas-de-pan": { component: OrquestasDeFlautasDePan },
  "el-atolon-de-coral-mas-grande-del-mundo": { component: ElAtolonDeCoralMasGrandeDelMundo, variant: "medallion" },
  "cultura-de-la-nuez-de-betel": { component: CulturaDeLaNuezDeBetel },
  "canoas-de-guerra-y-el-nguzunguzu": { component: CanoasDeGuerraYElNguzunguzu, variant: "medallion" },
};
