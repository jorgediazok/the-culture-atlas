import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const UnicoPaisAnglohablanteSudamerica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="196" y="128" width="6" height="42" fill={dark} transform="rotate(12 199 149)" />
      <ellipse cx="199" cy="170" rx="10" ry="5" fill={accentColor} transform="rotate(12 199 170)" />
      <circle cx="214" cy="150" r="6" fill={light} />
    </g>
  );
};

const CataratasKaieteur: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M188 132 L212 132 L212 166 Q212 176 200 178 Q188 176 188 166 Z" fill={light} />
      <path d="M192 132 L192 164 M200 132 L200 168 M208 132 L208 164" stroke={accentColor} strokeWidth="2" opacity="0.7" />
      <ellipse cx="200" cy="178" rx="18" ry="4" fill={dark} opacity="0.5" />
    </g>
  );
};

const MitoDeElDorado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="188" y="160" width="24" height="18" fill={accentColor} />
      <path d="M186 160 L194 144 L200 156 L206 144 L214 160 Z" fill={light} />
      <circle cx="194" cy="146" r="2" fill={dark} />
      <circle cx="206" cy="146" r="2" fill={dark} />
    </g>
  );
};

const MosaicoIndoguyanesAfroguyanes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 168 Q190 150 200 156 L200 172 Q190 178 182 168 Z" fill={accentColor} />
      <path d="M218 168 Q210 150 200 156 L200 172 Q210 178 218 168 Z" fill={dark} />
      <rect x="196" y="134" width="8" height="24" fill={light} />
    </g>
  );
};

const SabanaRupununiBiodiversidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="18" ry="11" fill={accentColor} />
      <circle cx="216" cy="152" r="6" fill={accentColor} />
      <circle cx="192" cy="154" r="1.8" fill={dark} />
      <circle cx="198" cy="150" r="1.8" fill={dark} />
      <circle cx="204" cy="154" r="1.8" fill={dark} />
      <path d="M182 168 Q200 176 218 168" fill="none" stroke={light} strokeWidth="2" opacity="0.7" />
    </g>
  );
};

const GeorgetownBajoElNivelDelMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="180" y="168" width="40" height="10" fill={dark} />
      <path d="M186 168 L186 152 L196 144 L196 168 Z" fill={accentColor} />
      <path d="M204 168 L204 148 L214 140 L214 168 Z" fill={light} />
      <rect x="189" y="156" width="4" height="4" fill={dark} opacity="0.6" />
    </g>
  );
};

const DisputaEsequiboVenezuela: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M182 178 L182 140 L218 132 L218 178 Z" fill={light} />
      <path d="M182 148 Q200 142 200 178" fill="none" stroke={dark} strokeWidth="2.4" strokeDasharray="4 3" />
      <path d="M182 148 Q200 142 200 132 L182 140 Z" fill={accentColor} opacity="0.55" />
    </g>
  );
};

const BoomPetroleroReciente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="192" y="140" width="16" height="6" fill={dark} />
      <line x1="200" y1="146" x2="200" y2="172" stroke={dark} strokeWidth="3" />
      <line x1="188" y1="160" x2="200" y2="150" stroke={dark} strokeWidth="2.4" />
      <line x1="212" y1="160" x2="200" y2="150" stroke={dark} strokeWidth="2.4" />
      <circle cx="188" cy="172" r="4" fill={light} />
      <circle cx="200" cy="176" r="4" fill={accentColor} />
      <circle cx="212" cy="172" r="4" fill={light} />
    </g>
  );
};

const CricketEquipoCaribeno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="196" y="130" width="6" height="40" fill={dark} transform="rotate(-14 199 150)" />
      <ellipse cx="199" cy="168" rx="9" ry="5" fill={accentColor} transform="rotate(-14 199 168)" />
      <circle cx="216" cy="140" r="6" fill={light} />
    </g>
  );
};

const CaricomIdentidadCaribena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="186" y="140" width="28" height="38" fill={light} />
      <rect x="192" y="148" width="6" height="6" fill={dark} opacity="0.6" />
      <rect x="202" y="148" width="6" height="6" fill={dark} opacity="0.6" />
      <rect x="192" y="160" width="6" height="6" fill={dark} opacity="0.6" />
      <rect x="202" y="160" width="6" height="6" fill={dark} opacity="0.6" />
      <path d="M186 140 L192 128 L200 140 Z" fill={accentColor} />
    </g>
  );
};

export const guyanaIllustrations: Record<string, IllustrationDefinition> = {
  "unico-pais-anglohablante-sudamerica": { component: UnicoPaisAnglohablanteSudamerica },
  "cataratas-kaieteur": { component: CataratasKaieteur, variant: "medallion" },
  "mito-de-el-dorado": { component: MitoDeElDorado },
  "mosaico-indoguyanes-afroguyanes": { component: MosaicoIndoguyanesAfroguyanes },
  "sabana-rupununi-biodiversidad": { component: SabanaRupununiBiodiversidad },
  "georgetown-bajo-el-nivel-del-mar": { component: GeorgetownBajoElNivelDelMar },
  "disputa-esequibo-venezuela": { component: DisputaEsequiboVenezuela, variant: "medallion" },
  "boom-petrolero-reciente": { component: BoomPetroleroReciente },
  "cricket-equipo-caribeno": { component: CricketEquipoCaribeno },
  "caricom-identidad-caribena": { component: CaricomIdentidadCaribena },
};
