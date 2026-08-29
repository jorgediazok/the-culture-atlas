import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

const LaRepublicaFundadaPorEsclavosLiberados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#1B7A9C" opacity="0.5" />
      <path d="M170 220 L230 220 L215 190 L185 190 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <path d="M200 190 L200 165" stroke={dark} strokeWidth="2.4" />
      <path d="M200 165 L225 172 L200 178 Z" fill={accentColor} stroke={dark} strokeWidth="1.6" />
      {person(150, 232, 0.85, dark, accentColor)}
      {person(185, 238, 0.75, dark, tint(accentColor, 0.2))}
      {person(215, 234, 0.75, dark, "#F5F0E6")}
    </g>
  );
};

const LaBanderaQueParecOtraPeroNoLoEs: IllustrationComponent = () => (
  <g>
    <rect x="150" y="90" width="14" height="150" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    <rect x="164" y="100" width="140" height="90" fill="#F5F0E6" stroke="#5C3A21" strokeWidth="2.4" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} x="164" y={100 + i * 15} width="140" height="7.5" fill="#BF0A30" />
    ))}
    <rect x="164" y="100" width="55" height="45" fill="#002868" />
    <polygon points="191,110 195,122 208,122 197,130 201,142 191,134 181,142 185,130 174,122 187,122" fill="#F5F0E6" />
  </g>
);

const ElPequenoHipopotamoQueViveEscondidoEnLaSelva: IllustrationComponent = () => (
  <g>
    {[[100, 250], [320, 250]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 22} ${y - 55} ${x + 48} ${y - 15} Q${x + 24} ${y} ${x} ${y}`} fill="#2F6B3A" opacity="0.55" />
    ))}
    {[[130, 100], [270, 110]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x + 10} ${y - 30} ${x + 4} ${y - 50}`} fill="none" stroke="#3A7A45" strokeWidth="6" strokeLinecap="round" />
    ))}
    <ellipse cx="200" cy="215" rx="45" ry="26" fill="#2A1F1A" stroke="#1B140E" strokeWidth="2.6" />
    <ellipse cx="240" cy="208" rx="14" ry="11" fill="#2A1F1A" stroke="#1B140E" strokeWidth="2.2" />
    <circle cx="236" cy="203" r="2.4" fill="#0A0805" />
    <circle cx="246" cy="202" r="2.4" fill="#0A0805" />
    <path d="M170 235 L165 248 M190 238 L188 250 M215 238 L217 250" stroke="#2A1F1A" strokeWidth="7" strokeLinecap="round" />
  </g>
);

const LasMascarasQueSoloLasMujeresPuedenPortar: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="170" rx="38" ry="52" fill="#1B1B1B" stroke="#0A0805" strokeWidth="2.8" />
    <path d="M175 125 Q200 108 225 125 Q228 138 218 135 Q200 122 182 135 Q172 138 175 125 Z" fill="#0A0805" />
    <path d="M188 155 Q195 148 202 155" fill="none" stroke="#3A3A3A" strokeWidth="2.2" />
    <path d="M205 155 Q212 148 219 155" fill="none" stroke="#3A3A3A" strokeWidth="2.2" />
    <path d="M182 200 L218 200 M180 212 L220 212 M182 224 L218 224" fill="none" stroke="#3A3A3A" strokeWidth="2" opacity="0.6" />
    <rect x="178" y="235" width="44" height="15" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="1.8" />
  </g>
);

const LaPlantacionDeCauchoMasGrandeJamasPlantada: IllustrationComponent = () => (
  <g>
    <rect x="90" y="220" width="230" height="30" fill="#8B5A2B" opacity="0.4" />
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2].map((col) => (
        <g key={`${row}-${col}`} transform={`translate(${115 + col * 70} ${230 - row * 4})`}>
          <rect x="-4" y="-70" width="8" height="70" fill="#5C3A21" />
          <ellipse cx="0" cy="-85" rx="22" ry="18" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="1.8" />
          <ellipse cx="-6" cy="-55" rx="4" ry="6" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="1" />
        </g>
      ))
    )}
  </g>
);

const LaCapitalQueLlevaElNombreDeUnPresidente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="190" width="230" height="60" fill="#1B7A9C" opacity="0.5" />
      {[[120, 150, 30], [160, 130, 50], [210, 145, 35], [255, 120, 60], [290, 150, 30]].map(([x, y, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width="26" height={h} fill={i % 2 === 0 ? "#F5F0E6" : tint(accentColor, 0.2)} stroke={dark} strokeWidth="1.8" />
          <path d={`M${x - 3} ${y} L${x + 13} ${y - 14} L${x + 29} ${y}`} fill="none" stroke={dark} strokeWidth="1.6" />
        </g>
      ))}
      <path d="M90 235 Q205 225 320 235" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ElInglesQueSuenaDistintoACualquierOtro: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(155, 235, 0.9, dark, accentColor)}
      {person(240, 240, 0.9, dark, tint(accentColor, 0.25))}
      <path d="M185 200 Q210 190 225 205" fill="none" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="205" cy="190" rx="26" ry="16" fill="#F5F0E6" stroke={dark} strokeWidth="2" opacity="0.9" />
      <path d="M195 190 L200 190 M205 185 L215 185 M198 196 L212 196" stroke={dark} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M195 200 L188 210 L200 202 Z" fill="#F5F0E6" stroke={dark} strokeWidth="1.6" />
      <rect x="130" y="220" width="20" height="16" fill="#D9A227" stroke={dark} strokeWidth="1.4" />
      <rect x="270" y="222" width="20" height="16" fill="#3A7A45" stroke={dark} strokeWidth="1.4" />
    </g>
  );
};

const LaChozaDondeSeResuelvenLosConflictosDelPueblo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 210 L200 130 L260 210 Z" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <path d="M150 205 L200 145 L250 205" fill="none" stroke="#5C3A21" strokeWidth="1.6" opacity="0.5" />
      <rect x="155" y="205" width="90" height="20" fill="none" stroke={dark} strokeWidth="2.4" />
      {[[160, 240], [200, 245], [240, 240]].map(([x, y], i) => (
        person(x, y, 0.7, dark, i % 2 === 0 ? accentColor : tint(accentColor, 0.2))
      ))}
    </g>
  );
};

const LasHojasVerdesQueDefinenLaMesaLiberiana: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="90" ry="24" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="2.6" />
    <ellipse cx="195" cy="205" rx="70" ry="17" fill="#1B4B1E" />
    {[[165, 200], [200, 205], [225, 198]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="12" ry="9" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.8" />
    ))}
    <g transform="translate(255 208)">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={i * 6 - 15} y="-8" width="4" height="20" fill="#F5F0E6" stroke="#8B5A2B" strokeWidth="1" />
      ))}
    </g>
  </g>
);

const LosBailarinesQueCaminanSobreZancosDeMadera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="180" y="130" width="6" height="90" fill="#5C3A21" />
      <rect x="216" y="130" width="6" height="90" fill="#5C3A21" />
      <ellipse cx="200" cy="120" rx="18" ry="14" fill="#1B1B1B" stroke="#0A0805" strokeWidth="2.4" />
      <path d="M180 145 Q200 130 220 145 L228 205 Q200 220 172 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M172 200 L172 235 M180 200 L178 238 M200 202 L200 240 M220 200 L222 238 M228 200 L228 235" stroke="#D9A227" strokeWidth="2.6" strokeLinecap="round" opacity="0.85" />
    </g>
  );
};

const SociedadPoro: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="175" rx="42" ry="55" fill="#2A1F1A" stroke="#1B140E" strokeWidth="2.8" />
    <path d="M170 140 Q140 120 130 95 Q160 100 178 125 Z" fill="#1B140E" />
    <path d="M230 140 Q260 120 270 95 Q240 100 222 125 Z" fill="#1B140E" />
    <path d="M180 160 L192 172 L180 180" fill="none" stroke="#8B1A1A" strokeWidth="3" />
    <path d="M220 160 L208 172 L220 180" fill="none" stroke="#8B1A1A" strokeWidth="3" />
    <path d="M185 205 L192 220 L200 205 L208 220 L215 205" fill="none" stroke="#D9D2C0" strokeWidth="3" strokeLinecap="round" />
    <rect x="178" y="240" width="44" height="15" fill="#8B5A2B" stroke="#3A2A1E" strokeWidth="1.8" />
  </g>
);

const SurfDeRobertsport: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M90 245 Q150 235 205 240 Q260 245 320 238" stroke="#3A7A45" strokeWidth="10" fill="none" opacity="0.4" />
      <path d="M150 240 Q160 200 130 160 Q170 165 195 195 Q230 175 260 190 Q280 210 260 235 Q220 250 180 245 Q160 248 150 240 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M170 200 Q190 210 200 230" fill="none" stroke="#fff" strokeWidth="3" opacity="0.6" />
      <ellipse cx="205" cy="212" rx="34" ry="9" fill="#5C3A21" stroke={dark} strokeWidth="2" transform="rotate(-12 205 212)" />
      <path d="M198 210 L206 195" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M212 210 L216 197" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <path d="M208 197 Q198 180 206 165" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="203" cy="158" r="10" fill={skin} />
      <path d="M206 175 Q192 178 184 190" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
      <path d="M206 180 Q220 175 228 186" fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

export const liberiaIllustrations: Record<string, IllustrationDefinition> = {
  "la-republica-fundada-por-esclavos-liberados": { component: LaRepublicaFundadaPorEsclavosLiberados },
  "la-bandera-que-parece-otra-pero-no-lo-es": { component: LaBanderaQueParecOtraPeroNoLoEs },
  "el-pequeno-hipopotamo-que-vive-escondido-en-la-selva": { component: ElPequenoHipopotamoQueViveEscondidoEnLaSelva },
  "las-mascaras-que-solo-las-mujeres-pueden-portar": { component: LasMascarasQueSoloLasMujeresPuedenPortar },
  "la-plantacion-de-caucho-mas-grande-jamas-plantada": { component: LaPlantacionDeCauchoMasGrandeJamasPlantada },
  "la-capital-que-lleva-el-nombre-de-un-presidente": { component: LaCapitalQueLlevaElNombreDeUnPresidente },
  "el-ingles-que-suena-distinto-a-cualquier-otro": { component: ElInglesQueSuenaDistintoACualquierOtro },
  "la-choza-donde-se-resuelven-los-conflictos-del-pueblo": { component: LaChozaDondeSeResuelvenLosConflictosDelPueblo },
  "las-hojas-verdes-que-definen-la-mesa-liberiana": { component: LasHojasVerdesQueDefinenLaMesaLiberiana },
  "los-bailarines-que-caminan-sobre-zancos-de-madera": { component: LosBailarinesQueCaminanSobreZancosDeMadera },
  "sociedad-poro": { component: SociedadPoro },
  "surf-de-robertsport": { component: SurfDeRobertsport },
};
