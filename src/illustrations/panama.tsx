import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const CanalDePanama: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="182" y="140" width="8" height="40" fill={dark} />
      <rect x="210" y="140" width="8" height="40" fill={dark} />
      <path d="M190 165 L210 165 L206 175 L194 175 Z" fill={accentColor} />
      <rect x="178" y="180" width="44" height="6" fill={light} opacity="0.7" />
    </g>
  );
};

const IstmoPuenteBiologico: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="185" cy="165" rx="14" ry="10" fill={accentColor} />
      <ellipse cx="215" cy="165" rx="14" ry="10" fill={dark} />
      <rect x="196" y="162" width="8" height="6" fill={light} />
    </g>
  );
};

const MolasGuna: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="182" y="140" width="36" height="36" fill={accentColor} />
      <rect x="190" y="148" width="20" height="20" fill={light} />
      <rect x="196" y="154" width="8" height="8" fill={dark} />
    </g>
  );
};

const SombreroPanamaMito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="168" rx="26" ry="7" fill={light} />
      <path d="M186 168 Q186 148 200 148 Q214 148 214 168 Z" fill={light} />
      <ellipse cx="200" cy="168" rx="26" ry="7" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.6" />
      <rect x="186" y="163" width="28" height="4" fill={accentColor} />
    </g>
  );
};

const CascoViejoSkyline: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="160" width="14" height="20" fill={light} />
      <rect x="198" y="135" width="10" height="45" fill={accentColor} />
      <rect x="212" y="145" width="10" height="35" fill={dark} />
    </g>
  );
};

const RanaDorada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="165" rx="14" ry="11" fill={accentColor} />
      <circle cx="192" cy="158" r="4" fill={light} />
      <circle cx="208" cy="158" r="4" fill={light} />
      <circle cx="195" cy="168" r="2" fill={dark} />
      <circle cx="205" cy="168" r="2" fill={dark} />
    </g>
  );
};

const AutonomiaGunaYala: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="182" cy="168" r="8" fill={light} />
      <circle cx="200" cy="172" r="10" fill={accentColor} />
      <circle cx="218" cy="166" r="7" fill={dark} />
      <path d="M170 178 Q200 184 230 176" fill="none" stroke={light} strokeWidth="2" opacity="0.6" />
    </g>
  );
};

const DiablosRojos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="178" y="148" width="44" height="24" rx="4" fill={accentColor} />
      <rect x="182" y="152" width="12" height="10" fill={light} />
      <rect x="198" y="152" width="12" height="10" fill={light} />
      <circle cx="188" cy="176" r="4" fill={dark} />
      <circle cx="212" cy="176" r="4" fill={dark} />
    </g>
  );
};

const TaponDelDarien: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M178 178 Q182 150 190 158 Q196 140 202 158 Q208 145 214 160 Q220 150 222 178 Z" fill={accentColor} />
      <path d="M190 178 L190 165 M202 178 L202 160" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const DolarizacionBalboa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="160" r="16" fill={accentColor} />
      <circle cx="200" cy="160" r="16" fill="none" stroke={dark} strokeWidth="2" />
      <text x="200" y="167" fontSize="16" fontWeight="700" textAnchor="middle" fill={light}>
        $
      </text>
    </g>
  );
};

export const panamaIllustrations: Record<string, IllustrationDefinition> = {
  "canal-de-panama": { component: CanalDePanama },
  "istmo-puente-biologico": { component: IstmoPuenteBiologico },
  "molas-guna": { component: MolasGuna, variant: "medallion" },
  "sombrero-panama-mito": { component: SombreroPanamaMito },
  "casco-viejo-skyline": { component: CascoViejoSkyline },
  "rana-dorada": { component: RanaDorada, variant: "medallion" },
  "autonomia-guna-yala": { component: AutonomiaGunaYala },
  "diablos-rojos": { component: DiablosRojos },
  "tapon-del-darien": { component: TaponDelDarien },
  "dolarizacion-balboa": { component: DolarizacionBalboa, variant: "medallion" },
};
