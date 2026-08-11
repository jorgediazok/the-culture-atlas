import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SegundaBarreraDeCoralMasLarga: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 178 Q188 160 196 168 Q200 156 204 168 Q212 158 216 178 Z" fill={accentColor} />
      <circle cx="192" cy="170" r="2" fill={light} />
      <circle cx="208" cy="172" r="1.6" fill={dark} />
    </g>
  );
};

const LaGranChozaKanak: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M186 178 L186 168 Q200 148 214 168 L214 178 Z" fill={accentColor} />
      <line x1="200" y1="148" x2="200" y2="136" stroke={dark} strokeWidth="2.5" />
      <path d="M196 138 L200 132 L204 138 Z" fill={dark} />
    </g>
  );
};

const UnCuartoDelNiquelDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M184 178 Q192 158 200 178 Q208 162 216 178 Z" fill={accentColor} />
      <line x1="204" y1="178" x2="208" y2="152" stroke={dark} strokeWidth="3" />
      <path d="M206 150 L212 154 L206 158 Z" fill={light} />
    </g>
  );
};

const ElCagouElAveQueLadra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="168" rx="10" ry="14" fill={accentColor} />
      <path d="M194 156 Q196 148 202 152" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="196" cy="160" r="1.4" fill={light} />
      <line x1="196" y1="180" x2="196" y2="188" stroke={dark} strokeWidth="2" />
      <line x1="204" y1="180" x2="204" y2="188" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaBougnaAlHornoDeTierra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 160 Q200 150 214 160 Q216 172 200 178 Q184 172 186 160 Z" fill={accentColor} />
      <path d="M188 162 Q200 156 212 162" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      <line x1="200" y1="150" x2="200" y2="178" stroke={light} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
};

const LosPinosQueSeInclinanHaciaElEcuador: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M200 178 L200 140" stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={200}
          y1={144 + i * 7}
          x2={210 + i * 1.4}
          y2={140 + i * 7}
          stroke={accentColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
};

const LaIslaDeLosPinos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <circle cx="200" cy="170" r="16" fill={light} />
      <circle cx="200" cy="170" r="16" fill="none" stroke={accentColor} strokeWidth="3" />
      <line x1="188" y1="154" x2="188" y2="140" stroke={dark} strokeWidth="2" />
      <line x1="212" y1="156" x2="212" y2="144" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElNameCultivoSagrado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M192 152 Q184 164 190 176 Q196 182 202 176 Q212 168 206 154 Q200 146 192 152 Z" fill={accentColor} />
      <path d="M194 156 Q200 164 198 174" stroke={dark} strokeWidth="1.5" fill="none" opacity="0.5" />
      <ellipse cx="200" cy="180" rx="14" ry="2.5" fill={light} opacity="0.7" />
    </g>
  );
};

const DosBanderasParaUnMismoTerritorio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <line x1="188" y1="150" x2="188" y2="180" stroke={dark} strokeWidth="2.5" />
      <path d="M188 152 L204 156 L188 162 Z" fill={accentColor} />
      <line x1="210" y1="154" x2="210" y2="180" stroke={dark} strokeWidth="2.5" />
      <path d="M210 156 L224 160 L210 166 Z" fill={light} />
    </g>
  );
};

const ElRefugioDeDugongosDelPacifico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 168 Q194 158 208 164 Q216 168 212 174 Q200 180 190 174 Z" fill={accentColor} />
      <path d="M186 168 L180 164 L182 172 Z" fill={dark} />
      <circle cx="204" cy="166" r="1.4" fill={light} />
    </g>
  );
};

export const newCaledoniaIllustrations: Record<string, IllustrationDefinition> = {
  "segunda-barrera-de-coral-mas-larga": { component: SegundaBarreraDeCoralMasLarga },
  "la-gran-choza-kanak": { component: LaGranChozaKanak },
  "un-cuarto-del-niquel-del-mundo": { component: UnCuartoDelNiquelDelMundo },
  "el-cagou-el-ave-que-ladra": { component: ElCagouElAveQueLadra, variant: "medallion" },
  "la-bougna-al-horno-de-tierra": { component: LaBougnaAlHornoDeTierra },
  "los-pinos-que-se-inclinan-hacia-el-ecuador": { component: LosPinosQueSeInclinanHaciaElEcuador },
  "la-isla-de-los-pinos": { component: LaIslaDeLosPinos, variant: "medallion" },
  "el-name-cultivo-sagrado": { component: ElNameCultivoSagrado },
  "dos-banderas-para-un-mismo-territorio": { component: DosBanderasParaUnMismoTerritorio },
  "el-refugio-de-dugongos-del-pacifico": { component: ElRefugioDeDugongosDelPacifico },
};
