import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElLagoDeMedusasSinPicadura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M192 158 Q192 150 200 150 Q208 150 208 158 Q208 166 200 166 Q192 166 192 158 Z" fill={light} />
      <path d="M195 166 Q195 172 193 176 M200 166 L200 178 M205 166 Q205 172 207 176" stroke={dark} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>
  );
};

const LasIslasRocosasConFormaDeHongo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 152 Q186 164 194 168 L206 168 Q214 164 210 152 Z" fill={accentColor} />
      <rect x="197" y="168" width="6" height="10" fill={dark} />
      <ellipse cx="200" cy="180" rx="14" ry="2.5" fill={light} opacity="0.7" />
    </g>
  );
};

const LasCasasComunalesBaiPintadas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 178 L200 146 L216 178 Z" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <path d="M194 178 L200 160 L206 178 Z" fill={accentColor} />
      <line x1="188" y1="170" x2="212" y2="170" stroke={dark} strokeWidth="1" opacity="0.5" />
    </g>
  );
};

const ElPrimerSantuarioDeTiburonesDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 168 Q194 158 210 164 Q216 166 212 170 Q198 176 188 172 Z" fill={accentColor} />
      <path d="M184 168 L178 164 L180 172 Z" fill={dark} />
      <circle cx="204" cy="166" r="1.4" fill={light} />
    </g>
  );
};

const ElSelloEcologicoQueFirmanLosTuristas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <rect x="186" y="152" width="28" height="20" fill={light} stroke={dark} strokeWidth="1" />
      <circle cx="200" cy="162" r="6" fill="none" stroke={accentColor} strokeWidth="2" />
      <path d="M197 162 L199 165 L204 159" fill="none" stroke={accentColor} strokeWidth="1.5" />
    </g>
  );
};

const LaSociedadMatrilinealQueEligeJefes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M192 176 Q186 164 200 158 Q214 164 208 176 Z" fill="none" stroke={accentColor} strokeWidth="2" />
      {[194, 200, 206].map((x) => (
        <circle key={x} cx={x} cy={172} r="2" fill={light} />
      ))}
      <circle cx="200" cy="152" r="3" fill={dark} />
    </g>
  );
};

const LosRestosDeGuerraDePeleliu: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 172 Q188 164 200 164 Q212 164 212 172 L212 176 L188 176 Z" fill={accentColor} />
      <rect x="196" y="158" width="8" height="8" fill={dark} />
      <line x1="184" y1="178" x2="216" y2="178" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const LosTaroGigantesQueCultivanLasMujeres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M200 178 Q182 172 186 156 Q198 158 200 178 Z" fill={accentColor} />
      <path d="M200 178 Q218 172 214 156 Q202 158 200 178 Z" fill={light} />
      <line x1="200" y1="178" x2="200" y2="160" stroke={dark} strokeWidth="1.2" opacity="0.5" />
    </g>
  );
};

const ElMitoDeLaGiganteQueFormoLasIslas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <ellipse cx="200" cy="170" rx="22" ry="6" fill={accentColor} />
      <circle cx="182" cy="168" r="5" fill={dark} />
      <ellipse cx="216" cy="172" rx="4" ry="3" fill={dark} />
    </g>
  );
};

const ElDineroDeVidrioDeOrigenMisterioso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M184 160 Q200 172 216 160" fill="none" stroke={dark} strokeWidth="1.2" opacity="0.4" />
      {[186, 193, 200, 207, 213].map((x, i) => (
        <circle key={x} cx={x} cy={158 + Math.abs(2 - i) * 5} r="3.2" fill={i % 2 === 0 ? accentColor : light} />
      ))}
    </g>
  );
};

export const palauIllustrations: Record<string, IllustrationDefinition> = {
  "el-lago-de-medusas-sin-picadura": { component: ElLagoDeMedusasSinPicadura, variant: "medallion" },
  "las-islas-rocosas-con-forma-de-hongo": { component: LasIslasRocosasConFormaDeHongo },
  "las-casas-comunales-bai-pintadas": { component: LasCasasComunalesBaiPintadas },
  "el-primer-santuario-de-tiburones-del-mundo": { component: ElPrimerSantuarioDeTiburonesDelMundo },
  "el-sello-ecologico-que-firman-los-turistas": { component: ElSelloEcologicoQueFirmanLosTuristas },
  "la-sociedad-matrilineal-que-elige-jefes": { component: LaSociedadMatrilinealQueEligeJefes, variant: "medallion" },
  "los-restos-de-guerra-de-peleliu": { component: LosRestosDeGuerraDePeleliu },
  "los-taro-gigantes-que-cultivan-las-mujeres": { component: LosTaroGigantesQueCultivanLasMujeres },
  "el-mito-de-la-gigante-que-formo-las-islas": { component: ElMitoDeLaGiganteQueFormoLasIslas },
  "el-dinero-de-vidrio-de-origen-misterioso": { component: ElDineroDeVidrioDeOrigenMisterioso },
};
