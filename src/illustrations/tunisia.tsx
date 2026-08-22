import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaCiudadQueDesafioARomaYPerdio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="230" rx="90" ry="16" fill="#8C8C74" opacity="0.5" />
      <ellipse cx="225" cy="185" rx="45" ry="28" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <path d="M225 185 Q245 165 260 150 L268 158 Q250 172 235 190" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <circle cx="150" cy="180" r="14" fill="#C1272D" stroke={dark} strokeWidth="2.2" />
      <path d="M136 172 Q150 155 164 172" fill="none" stroke="#8B1A1A" strokeWidth="3" />
      <rect x="142" y="192" width="16" height="35" fill="#C1272D" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElAnfiteatroRomanoMasGrandeDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="200" rx="110" ry="55" fill="none" stroke={accentColor} strokeWidth="14" />
      <ellipse cx="205" cy="200" rx="70" ry="30" fill="#D9C9A3" opacity="0.7" />
      {[100, 140, 180, 220, 260, 300].map((x) => (
        <rect key={x} x={x} y="185" width="10" height="30" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="1.6" />
      ))}
    </g>
  );
};

const ElPuebloBajoTierraQueConocioLaGalaxia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="150" rx="100" ry="20" fill="#D9A97A" opacity="0.5" />
      <ellipse cx="205" cy="150" rx="60" ry="14" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <path d="M175 155 L175 220 Q205 235 235 220 L235 155" fill="#5C3A21" stroke={dark} strokeWidth="2.4" />
      <rect x="188" y="180" width="20" height="16" fill={accentColor} opacity="0.85" />
      <rect x="150" y="185" width="16" height="14" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const LaMezquitaQueFundoElIslamEnAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="180" width="150" height="60" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.6" />
      <rect x="190" y="100" width="30" height="80" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <rect x="185" y="90" width="40" height="12" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M160 180 Q205 150 250 180" fill="none" stroke={dark} strokeWidth="2.4" />
      <rect x="195" y="200" width="20" height="40" fill="#3A2418" />
    </g>
  );
};

const ElPuebloAzulYBlancoSobreElAcantilado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 200 Q205 175 320 200 L320 250 Z" fill="#8C8C74" opacity="0.5" />
      <rect x="150" y="155" width="60" height="55" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <rect x="220" y="140" width="65" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <rect x="170" y="180" width="16" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="240" y="165" width="16" height="30" fill={accentColor} stroke={dark} strokeWidth="2" />
      <rect x="90" y="248" width="230" height="6" fill="#1B5E7A" opacity="0.5" />
    </g>
  );
};

const ElLagoDeSalDondeElDesiertoSeVuelveEspejo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="150" width="230" height="100" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <path d="M90 180 L150 180 M150 150 L150 220 M150 220 L230 220 M230 190 L230 250 M230 190 L320 190" stroke="#C9C0A8" strokeWidth="2.5" />
      <ellipse cx="205" cy="150" rx="115" ry="6" fill="#7A9AB0" opacity="0.5" />
    </g>
  );
};

const LaPastaPicanteQueEstaEnCadaMesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="195" rx="55" ry="35" fill="#8B1A1A" stroke={dark} strokeWidth="2.8" />
      <ellipse cx="205" cy="185" rx="40" ry="18" fill="#C1272D" opacity="0.85" />
      {[[130, 175, -10], [270, 180, 12], [150, 220, 20]].map(([x, y, rot], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${rot})`}>
          <path d="M0 0 Q10 -18 0 -30 Q-10 -18 0 0 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2" />
          <path d="M0 -30 Q4 -34 8 -32" stroke="#2F6B3A" strokeWidth="2.5" fill="none" />
        </g>
      ))}
    </g>
  );
};

const LaFlorQueSeRegalaEnLaCalleCadaTarde: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="150" r="16" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {[[230, 130], [240, 145], [235, 160]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7" fill="#F5F0E6" stroke="#C9C0A8" strokeWidth="1.6" />
          <circle cx={x} cy={y} r="2.5" fill="#C9A227" />
        </g>
      ))}
      <path d="M175 200 Q175 175 205 172 Q235 175 235 200" fill="none" stroke={dark} strokeWidth="2.6" />
      <path d="M175 200 L175 240 M235 200 L235 240" stroke={accentColor} strokeWidth="14" strokeLinecap="round" />
    </g>
  );
};

const LaCiudadRomanaQueNadieReconstruyoEncima: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q150 220 205 240 Q260 220 320 250" fill="none" stroke="#2F6B3A" strokeWidth="8" opacity="0.4" />
      <rect x="170" y="170" width="70" height="70" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      <polygon points="160,170 205,140 250,170" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      {[185, 210].map((x) => (
        <rect key={x} x={x} y="170" width="10" height="70" fill="#C9C0A8" stroke={dark} strokeWidth="1.6" />
      ))}
    </g>
  );
};

const ElPaisArabeDondeVotaronLasMujeres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="150" width="60" height="70" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <rect x="185" y="140" width="40" height="14" fill="#5C3A21" stroke={dark} strokeWidth="2" />
      <path d="M195 150 L215 120 L225 130 L210 150 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="195" y="180" width="20" height="6" fill="#F5F0E6" />
    </g>
  );
};

export const tunisiaIllustrations: Record<string, IllustrationDefinition> = {
  "la-ciudad-que-desafio-a-roma-y-perdio": { component: LaCiudadQueDesafioARomaYPerdio },
  "el-anfiteatro-romano-mas-grande-de-africa": { component: ElAnfiteatroRomanoMasGrandeDeAfrica },
  "el-pueblo-bajo-tierra-que-conocio-la-galaxia": { component: ElPuebloBajoTierraQueConocioLaGalaxia },
  "la-mezquita-que-fundo-el-islam-en-africa": { component: LaMezquitaQueFundoElIslamEnAfrica },
  "el-pueblo-azul-y-blanco-sobre-el-acantilado": { component: ElPuebloAzulYBlancoSobreElAcantilado },
  "el-lago-de-sal-donde-el-desierto-se-vuelve-espejo": { component: ElLagoDeSalDondeElDesiertoSeVuelveEspejo },
  "la-pasta-picante-que-esta-en-cada-mesa": { component: LaPastaPicanteQueEstaEnCadaMesa },
  "la-flor-que-se-regala-en-la-calle-cada-tarde": { component: LaFlorQueSeRegalaEnLaCalleCadaTarde },
  "la-ciudad-romana-que-nadie-reconstruyo-encima": { component: LaCiudadRomanaQueNadieReconstruyoEncima },
  "el-primer-parlamento-arabe-elegido-por-mujeres": { component: ElPaisArabeDondeVotaronLasMujeres },
};
