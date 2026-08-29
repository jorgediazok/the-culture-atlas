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

const LaFortalezaDeMonjesGuerrerosEnSusa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="170" width="160" height="70" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.6" />
      {[130, 155, 180, 205, 230, 255].map((x) => (
        <rect key={x} x={x} y="158" width="14" height="14" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="1.8" />
      ))}
      <rect x="185" y="90" width="45" height="150" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      {[195, 210].map((x) => (
        <rect key={x} x={x} y="78" width="10" height="14" fill={accentColor} stroke={dark} strokeWidth="1.8" />
      ))}
      <path d="M195 240 Q207 210 220 240 Z" fill="#3A2418" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElMuseoConLosMosaicosRomanosMasGrandesDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="100" width="230" height="140" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      {[110, 130, 150, 170, 190, 210, 230, 250, 270, 290].map((x) => (
        <line key={x} x1={x} y1="100" x2={x} y2="240" stroke="#C9C0A8" strokeWidth="1" opacity="0.5" />
      ))}
      <path
        d="M140 170 Q180 145 230 170 Q260 180 272 170 L260 192 Q230 198 180 198 Q150 198 140 170 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="2.4"
      />
      <polygon points="130,170 145,160 145,180" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="220" cy="168" r="4" fill="#F5F0E6" />
    </g>
  );
};

const LaSinagogaMasAntiguaDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="150" width="120" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <path d="M180 150 Q180 115 200 105 Q220 115 220 150" fill="none" stroke={accentColor} strokeWidth="4" />
      <rect x="150" y="165" width="18" height="24" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="1.6" />
      <rect x="232" y="165" width="18" height="24" fill={accentColor} opacity="0.7" stroke={dark} strokeWidth="1.6" />
      <path d="M185 240 L185 190 Q200 172 215 190 L215 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
    </g>
  );
};

const ElPlatoQueCuatroPaisesDeclararonJuntosAnteLaUnesco: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="210" rx="95" ry="30" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.8" />
      <ellipse cx="205" cy="195" rx="80" ry="24" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="180" cy="188" r="10" fill="#C1272D" stroke={dark} strokeWidth="1.8" />
      <circle cx="225" cy="185" r="9" fill="#2F6B3A" stroke={dark} strokeWidth="1.8" />
      <path d="M180 170 Q175 150 182 135" fill="none" stroke="#C9C0A8" strokeWidth="3" opacity="0.6" />
      <path d="M205 165 Q200 145 208 128" fill="none" stroke="#C9C0A8" strokeWidth="3" opacity="0.6" />
      <path d="M230 170 Q226 150 233 135" fill="none" stroke="#C9C0A8" strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const LaChispaQueEncendioLaPrimaveraArabe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[130, 165, 245, 280].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="110" r="12" fill="#8C8C74" opacity="0.55" />
          <path d={`M${x - 14} 200 L${x - 10} 130 Q${x} 122 ${x + 10} 130 L${x + 14} 200 Z`} fill="#8C8C74" opacity="0.55" />
        </g>
      ))}
      <rect x="170" y="190" width="70" height="14" fill={accentColor} stroke={dark} strokeWidth="2.4" transform="rotate(-18 205 197)" />
      {[[185, 175], [200, 165], [215, 178]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill="#C9A227" stroke={dark} strokeWidth="1.8" />
      ))}
      <path d="M160 240 L170 200 M250 240 L240 200" stroke="#3A2418" strokeWidth="4" />
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
  "la-fortaleza-de-monjes-guerreros-en-susa": { component: LaFortalezaDeMonjesGuerrerosEnSusa },
  "el-museo-con-los-mosaicos-romanos-mas-grandes-del-mundo": { component: ElMuseoConLosMosaicosRomanosMasGrandesDelMundo },
  "la-sinagoga-mas-antigua-de-africa": { component: LaSinagogaMasAntiguaDeAfrica },
  "el-plato-que-cuatro-paises-declararon-juntos-ante-la-unesco": { component: ElPlatoQueCuatroPaisesDeclararonJuntosAnteLaUnesco },
  "la-chispa-que-encendio-la-primavera-arabe": { component: LaChispaQueEncendioLaPrimaveraArabe },
};
