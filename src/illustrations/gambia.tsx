import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElPaisContinentalMasPequenoDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 176 Q192 168 200 172 Q208 176 216 168" fill="none" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      <circle cx="184" cy="176" r="2" fill={light} />
      <circle cx="216" cy="168" r="2" fill={dark} />
    </g>
  );
};

const LaIslaQueInspiroElPeregrinajeDeRaices: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="174" rx="18" ry="6" fill={light} />
      <rect x="192" y="158" width="6" height="16" fill={accentColor} />
      <rect x="202" y="162" width="6" height="12" fill={dark} />
    </g>
  );
};

const LosCirculosDePiedraCuyoPropositoNadieConfirmo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {[[190, 170], [200, 164], [210, 170], [205, 178], [195, 178]].map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill={i % 2 === 0 ? accentColor : dark} />
      ))}
      <circle cx="200" cy="172" r="1.4" fill={light} />
    </g>
  );
};

const ElKankurangElEspirituCubiertoDeHojas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <path d="M200 178 Q188 172 190 158 Q200 162 200 178 Z" fill={accentColor} />
      <path d="M200 178 Q212 172 210 158 Q200 162 200 178 Z" fill={dark} />
      <circle cx="200" cy="156" r="1.6" fill={light} />
    </g>
  );
};

const MasDe560EspeciesDeAvesEnUnTerritorioDiminuto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M190 172 Q194 160 206 162 Q214 164 212 172 Q206 176 198 174 Z" fill={accentColor} />
      <path d="M212 168 L218 164 L216 170 Z" fill={dark} />
      <circle cx="197" cy="168" r="1.2" fill={light} />
    </g>
  );
};

const LaConfederacionConSenegalQueNuncaCuajo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <path d="M188 158 L188 174 L200 174 L200 166 L196 166 L196 158 Z" fill={accentColor} />
      <path d="M204 162 L212 162 L212 178 L200 178 L200 170 L204 170 Z" fill={dark} />
    </g>
  );
};

const LaVidaALoLargoDelRioQueLoEsTodo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M184 174 Q200 168 216 174 L212 178 L188 178 Z" fill={accentColor} />
      <line x1="200" y1="174" x2="200" y2="160" stroke={dark} strokeWidth="1.5" />
      <path d="M200 160 L208 156 L206 162 Z" fill={light} />
    </g>
  );
};

const ElManiQueMarcoSuHistoriaColonial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.55);
  return (
    <g>
      <path d="M196 156 Q186 160 188 170 Q190 178 200 176 Q206 174 204 166 Q210 162 208 156 Q202 152 196 156 Z" fill={accentColor} />
      <circle cx="204" cy="158" r="4" fill={light} />
      <circle cx="204" cy="158" r="4" fill="none" stroke={dark} strokeWidth="1" />
    </g>
  );
};

const LaLuchaTradicionalConAmuletosYTambores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  return (
    <g>
      <circle cx="192" cy="164" r="6" fill={accentColor} />
      <circle cx="208" cy="164" r="6" fill={dark} />
      <line x1="197" y1="168" x2="203" y2="168" stroke={accentColor} strokeWidth="2" />
      <line x1="192" y1="172" x2="192" y2="178" stroke={dark} strokeWidth="1.5" />
      <line x1="208" y1="172" x2="208" y2="178" stroke={accentColor} strokeWidth="1.5" />
    </g>
  );
};

const LaCostaSonrienteQueSeVolvioUnaMarca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 178 Q200 168 212 178" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <path d="M200 178 L200 154 Q210 156 210 164 Q200 164 200 154" fill={light} stroke={dark} strokeWidth="1" />
    </g>
  );
};

export const gambiaIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-continental-mas-pequeno-de-africa": { component: ElPaisContinentalMasPequenoDeAfrica },
  "la-isla-que-inspiro-el-peregrinaje-de-raices": { component: LaIslaQueInspiroElPeregrinajeDeRaices },
  "los-circulos-de-piedra-cuyo-proposito-nadie-confirmo": { component: LosCirculosDePiedraCuyoPropositoNadieConfirmo, variant: "medallion" },
  "el-kankurang-el-espiritu-cubierto-de-hojas": { component: ElKankurangElEspirituCubiertoDeHojas },
  "mas-de-560-especies-de-aves-en-un-territorio-diminuto": { component: MasDe560EspeciesDeAvesEnUnTerritorioDiminuto },
  "la-confederacion-con-senegal-que-nunca-cuajo": { component: LaConfederacionConSenegalQueNuncaCuajo, variant: "medallion" },
  "la-vida-a-lo-largo-del-rio-que-lo-es-todo": { component: LaVidaALoLargoDelRioQueLoEsTodo },
  "el-mani-que-marco-su-historia-colonial": { component: ElManiQueMarcoSuHistoriaColonial },
  "la-lucha-tradicional-con-amuletos-y-tambores": { component: LaLuchaTradicionalConAmuletosYTambores },
  "la-costa-sonriente-que-se-volvio-una-marca": { component: LaCostaSonrienteQueSeVolvioUnaMarca },
};
