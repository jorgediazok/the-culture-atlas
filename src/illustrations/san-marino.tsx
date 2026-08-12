import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaRepublicaMasAntiguaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="152" width="24" height="18" rx="2" fill={light} stroke={accentColor} strokeWidth="1.5" />
      <line x1="192" y1="158" x2="208" y2="158" stroke={dark} strokeWidth="1" opacity="0.6" />
      <line x1="192" y1="162" x2="208" y2="162" stroke={dark} strokeWidth="1" opacity="0.6" />
      <circle cx="200" cy="176" r="4" fill={accentColor} />
    </g>
  );
};

const LasTresTorresDelMonteTitano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  return (
    <g>
      <rect x="184" y="162" width="8" height="16" fill={accentColor} />
      <path d="M184 162 L188 154 L192 162 Z" fill={dark} />
      <rect x="196" y="156" width="9" height="22" fill={accentColor} />
      <path d="M196 156 L200.5 146 L205 156 Z" fill={dark} />
      <rect x="209" y="164" width="7" height="14" fill={accentColor} />
      <path d="M209 164 L212.5 156 L216 164 Z" fill={dark} />
    </g>
  );
};

const DosJefesDeEstadoQueCambianCadaSeisMeses: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 178 L188 160 L196 160 L196 178 Z" fill="none" stroke={accentColor} strokeWidth="2" />
      <path d="M204 178 L204 160 L212 160 L212 178 Z" fill="none" stroke={dark} strokeWidth="2" />
      <line x1="188" y1="160" x2="196" y2="160" stroke={accentColor} strokeWidth="2" />
      <line x1="204" y1="160" x2="212" y2="160" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElCuerpoDeBallesterosQueDesfilaHaceSiglos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="184" y1="160" x2="216" y2="176" stroke={dark} strokeWidth="2.5" />
      <path d="M192 156 Q200 168 208 156" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <line x1="196" y1="163" x2="204" y2="163" stroke={accentColor} strokeWidth="1.5" />
    </g>
  );
};

const ElPaisQueRefugioAMasGenteDeLaQueTenia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 178 L184 166 L192 158 L200 166 L200 178 Z" fill={accentColor} />
      <path d="M198 178 L198 168 L206 160 L214 168 L214 178 Z" fill={light} />
      <path d="M188 178 L184 178 L184 166 L192 158 L196 161" fill="none" stroke={dark} strokeWidth="1" opacity="0.4" />
    </g>
  );
};

const ElPrimerGobiernoComunistaElectoDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 156 L212 156 L212 174 L188 174 Z" fill="none" stroke={accentColor} strokeWidth="2" />
      <rect x="196" y="150" width="8" height="6" fill={dark} />
      <path d="M196 162 L204 162 L204 172 L196 172 Z" fill={light} />
    </g>
  );
};

const ElGolMasRapidoEnLaHistoriaDeLosMundiales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <circle cx="200" cy="164" r="8" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <path d="M196 160 L200 164 L205 159 M196 168 L200 164" stroke={dark} strokeWidth="1.2" fill="none" />
      <path d="M182 176 L192 172" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
      <path d="M182 170 L191 169" stroke={accentColor} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const ElRegistroNavalDeUnPaisQueNoTieneMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 172 L214 172 L208 180 L192 180 Z" fill={accentColor} />
      <line x1="200" y1="172" x2="200" y2="152" stroke={dark} strokeWidth="2" />
      <path d="M200 154 L212 162 L200 166 Z" fill={light} />
    </g>
  );
};

const LasEstampillasCodiciadasPorColeccionistas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="152" width="24" height="28" fill={light} stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 1.5" />
      <rect x="193" y="158" width="14" height="12" fill={accentColor} />
      <circle cx="200" cy="164" r="3" fill={dark} />
    </g>
  );
};

const LaTelecabinaQueConectaSusDosCiudades: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <line x1="184" y1="150" x2="216" y2="178" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      <rect x="192" y="158" width="14" height="10" rx="2" fill={accentColor} />
      <line x1="196" y1="158" x2="196" y2="154" stroke={dark} strokeWidth="1.5" />
      <line x1="202" y1="158" x2="202" y2="154" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

export const sanMarinoIllustrations: Record<string, IllustrationDefinition> = {
  "la-republica-mas-antigua-del-mundo": { component: LaRepublicaMasAntiguaDelMundo },
  "las-tres-torres-del-monte-titano": { component: LasTresTorresDelMonteTitano },
  "dos-jefes-de-estado-que-cambian-cada-seis-meses": { component: DosJefesDeEstadoQueCambianCadaSeisMeses },
  "el-cuerpo-de-ballesteros-que-desfila-hace-siglos": { component: ElCuerpoDeBallesterosQueDesfilaHaceSiglos },
  "el-pais-que-refugio-a-mas-gente-de-la-que-tenia": { component: ElPaisQueRefugioAMasGenteDeLaQueTenia, variant: "medallion" },
  "el-primer-gobierno-comunista-electo-del-mundo": { component: ElPrimerGobiernoComunistaElectoDelMundo },
  "el-gol-mas-rapido-en-la-historia-de-los-mundiales": { component: ElGolMasRapidoEnLaHistoriaDeLosMundiales, variant: "medallion" },
  "el-registro-naval-de-un-pais-que-no-tiene-mar": { component: ElRegistroNavalDeUnPaisQueNoTieneMar },
  "las-estampillas-codiciadas-por-coleccionistas": { component: LasEstampillasCodiciadasPorColeccionistas },
  "la-telecabina-que-conecta-sus-dos-ciudades": { component: LaTelecabinaQueConectaSusDosCiudades },
};
