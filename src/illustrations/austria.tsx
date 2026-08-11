import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const VienaCapitalMusicaClasica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M196 140 Q188 148 192 158 Q194 166 200 166 Q206 166 208 158 Q212 148 204 140 Z" fill={accentColor} />
      <rect x="198" y="128" width="4" height="16" fill={dark} />
      <line x1="192" y1="150" x2="188" y2="148" stroke={light} strokeWidth="1.6" />
      <line x1="208" y1="150" x2="212" y2="148" stroke={light} strokeWidth="1.6" />
    </g>
  );
};

const CafesVienesesPatrimonio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="172" rx="20" ry="5" fill={light} />
      <path d="M188 148 h24 v18 a12 10 0 0 1 -24 0 Z" fill={accentColor} />
      <ellipse cx="200" cy="148" rx="12" ry="3" fill={dark} />
      <path d="M212 154 a8 6 0 0 1 0 12" fill="none" stroke={accentColor} strokeWidth="2.4" />
    </g>
  );
};

const EmperatrizSissiMito: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="158" rx="14" ry="18" fill="none" stroke={accentColor} strokeWidth="3" />
      <rect x="197" y="176" width="6" height="6" fill={dark} />
      <path d="M190 138 L196 130 L200 138 L204 130 L210 138 Z" fill={light} />
    </g>
  );
};

const AlpesQueCubrenElPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M180 178 L196 144 L206 160 L214 148 L222 178 Z" fill={accentColor} />
      <path d="M196 144 L200 152 L192 152 Z" fill={light} />
      <path d="M214 148 L217 154 L211 154 Z" fill={light} />
      <path d="M180 178 L222 178" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const GuerraDeLaSachertorte: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M186 172 L200 140 L214 172 Z" fill={accentColor} />
      <path d="M188 168 L200 148 L212 168 Z" fill={dark} opacity="0.5" />
      <line x1="188" y1="158" x2="212" y2="158" stroke={light} strokeWidth="2.4" />
    </g>
  );
};

const PalacioSchonbrunnHabsburgos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="182" y="152" width="36" height="22" fill={accentColor} />
      <rect x="188" y="158" width="6" height="10" fill={light} />
      <rect x="197" y="158" width="6" height="10" fill={light} />
      <rect x="206" y="158" width="6" height="10" fill={light} />
      <rect x="182" y="148" width="36" height="4" fill={dark} />
    </g>
  );
};

const CoroNinosCantoresViena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <circle cx="200" cy="148" r="9" fill={light} />
      <path d="M188 178 Q188 160 200 160 Q212 160 212 178 Z" fill={accentColor} />
      <path d="M192 160 L200 168 L208 160" fill="none" stroke={dark} strokeWidth="2.4" />
    </g>
  );
};

const FreudNacimientoPsicoanalisis: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <rect x="182" y="158" width="36" height="14" rx="4" fill={accentColor} />
      <rect x="182" y="150" width="8" height="14" rx="2" fill={dark} />
      <rect x="205" y="140" width="5" height="18" fill={light} />
      <ellipse cx="207" cy="138" rx="8" ry="4" fill={light} />
    </g>
  );
};

const TradicionDelKrampus: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="14" ry="16" fill={accentColor} />
      <path d="M192 146 L188 136 M208 146 L212 136" stroke={dark} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="195" cy="156" r="1.8" fill={light} />
      <circle cx="205" cy="156" r="1.8" fill={light} />
      <path d="M188 172 Q200 178 212 172" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const NeutralidadPermanente1955: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <line x1="182" y1="150" x2="218" y2="150" stroke={dark} strokeWidth="2.4" />
      <line x1="200" y1="140" x2="200" y2="150" stroke={dark} strokeWidth="2.4" />
      <path d="M182 150 L178 162 L186 162 Z" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M218 150 L214 162 L222 162 Z" fill="none" stroke={dark} strokeWidth="2" />
      <path d="M192 134 Q188 128 194 126 Q198 130 200 134 Q202 130 206 126 Q212 128 208 134 Q204 140 200 142 Q196 140 192 134 Z" fill={light} />
    </g>
  );
};

export const austriaIllustrations: Record<string, IllustrationDefinition> = {
  "viena-capital-musica-clasica": { component: VienaCapitalMusicaClasica },
  "cafes-vieneses-patrimonio": { component: CafesVienesesPatrimonio, variant: "medallion" },
  "emperatriz-sissi-mito": { component: EmperatrizSissiMito },
  "alpes-que-cubren-el-pais": { component: AlpesQueCubrenElPais },
  "guerra-de-la-sachertorte": { component: GuerraDeLaSachertorte },
  "palacio-schonbrunn-habsburgos": { component: PalacioSchonbrunnHabsburgos },
  "coro-ninos-cantores-viena": { component: CoroNinosCantoresViena, variant: "medallion" },
  "freud-nacimiento-psicoanalisis": { component: FreudNacimientoPsicoanalisis },
  "tradicion-del-krampus": { component: TradicionDelKrampus },
  "neutralidad-permanente-1955": { component: NeutralidadPermanente1955 },
};
