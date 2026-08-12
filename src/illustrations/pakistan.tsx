import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const MohenjoDaroLaCiudadConPlomeriaMilenaria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={190 + col * 12}
            y={156 + row * 8}
            width="10"
            height="6"
            fill={(row + col) % 2 === 0 ? accentColor : dark}
          />
        ))
      )}
      <path d="M186 178 L214 178" stroke={light} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const K2LaMontanaSalvajeMasDificilQueElEverest: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M182 178 L200 148 L218 178 Z" fill={accentColor} />
      <path d="M200 148 L206 160 L196 160 Z" fill={light} />
      <path d="M182 178 L218 178" stroke={dark} strokeWidth="1" opacity="0.4" />
    </g>
  );
};

const ElArteDeLosCamionesPintadosAMano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="158" width="24" height="16" fill={accentColor} />
      <path d="M186 174 Q188 180 192 180 Q194 180 194 176" stroke={dark} strokeWidth="1.5" fill="none" />
      <path d="M198 174 Q200 180 204 180 Q206 180 206 176" stroke={dark} strokeWidth="1.5" fill="none" />
      <circle cx="194" cy="164" r="2" fill={light} />
      <circle cx="202" cy="168" r="2" fill={light} />
    </g>
  );
};

const LaMezquitaBadshahiUnaJoyaMogol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="186" y="164" width="28" height="14" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <path d="M194 164 Q200 152 206 164 Z" fill={accentColor} />
      <rect x="186" y="150" width="4" height="14" fill={dark} />
      <rect x="210" y="150" width="4" height="14" fill={dark} />
    </g>
  );
};

const LaMinaDeSalConUnaMezquitaAdentro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <rect x="188" y="164" width="10" height="10" fill={light} stroke={accentColor} strokeWidth="1" />
      <rect x="200" y="160" width="10" height="14" fill={accentColor} stroke={dark} strokeWidth="1" />
      <path d="M200 160 Q205 154 210 160" fill="none" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LosKalashUnaCulturaAisladaEnLaMontana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 176 Q188 158 200 154 Q212 158 210 176 Z" fill={accentColor} />
      <circle cx="194" cy="164" r="2" fill={light} />
      <circle cx="200" cy="160" r="2" fill={light} />
      <circle cx="206" cy="164" r="2" fill={dark} />
    </g>
  );
};

const ElQawwaliElCantoSufiQueBuscaElExtasis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="172" rx="12" ry="6" fill={accentColor} />
      <ellipse cx="200" cy="172" rx="12" ry="6" fill="none" stroke={dark} strokeWidth="1" />
      <line x1="200" y1="166" x2="200" y2="178" stroke={dark} strokeWidth="1" opacity="0.5" />
      <circle cx="200" cy="156" r="4" fill={light} />
      <line x1="200" y1="160" x2="200" y2="166" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

const LaCarreteraPavimentadaMasAltaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M184 178 Q192 160 200 178 Q208 160 216 178" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
      <path d="M186 176 Q196 156 206 176" fill="none" stroke={accentColor} strokeWidth="2.5" strokeDasharray="3 2" />
    </g>
  );
};

const LosJardinesShalimarUnParaisoEnTerrazas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="152" width="28" height="7" fill={accentColor} />
      <rect x="190" y="161" width="20" height="7" fill={dark} />
      <rect x="194" y="170" width="12" height="7" fill={accentColor} />
      <circle cx="200" cy="164" r="1.6" fill={light} />
    </g>
  );
};

const LaMayorRedDeAmbulanciasVoluntariasDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="184" y="160" width="26" height="14" rx="2" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <path d="M193 163 L193 171 M189 167 L197 167" stroke={dark} strokeWidth="2" />
      <circle cx="190" cy="176" r="3" fill={dark} />
      <circle cx="204" cy="176" r="3" fill={dark} />
    </g>
  );
};

export const pakistanIllustrations: Record<string, IllustrationDefinition> = {
  "mohenjo-daro-la-ciudad-con-plomeria-milenaria": { component: MohenjoDaroLaCiudadConPlomeriaMilenaria },
  "k2-la-montana-salvaje-mas-dificil-que-el-everest": { component: K2LaMontanaSalvajeMasDificilQueElEverest },
  "el-arte-de-los-camiones-pintados-a-mano": { component: ElArteDeLosCamionesPintadosAMano },
  "la-mezquita-badshahi-una-joya-mogol": { component: LaMezquitaBadshahiUnaJoyaMogol },
  "la-mina-de-sal-con-una-mezquita-adentro": { component: LaMinaDeSalConUnaMezquitaAdentro, variant: "medallion" },
  "los-kalash-una-cultura-aislada-en-la-montana": { component: LosKalashUnaCulturaAisladaEnLaMontana },
  "el-qawwali-el-canto-sufi-que-busca-el-extasis": { component: ElQawwaliElCantoSufiQueBuscaElExtasis, variant: "medallion" },
  "la-carretera-pavimentada-mas-alta-del-mundo": { component: LaCarreteraPavimentadaMasAltaDelMundo },
  "los-jardines-shalimar-un-paraiso-en-terrazas": { component: LosJardinesShalimarUnParaisoEnTerrazas },
  "la-mayor-red-de-ambulancias-voluntarias-del-mundo": { component: LaMayorRedDeAmbulanciasVoluntariasDelMundo },
};
