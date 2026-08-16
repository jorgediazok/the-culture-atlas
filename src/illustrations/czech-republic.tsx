import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const RelojAstronomicoQueSigueFuncionando: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="165" r="65" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="165" r="45" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <line x1="205" y1="165" x2="205" y2="125" stroke={dark} strokeWidth="3" />
      <line x1="205" y1="165" x2="235" y2="175" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="165" r="5" fill={dark} />
      <rect x="190" y="235" width="30" height="12" fill={dark} opacity="0.6" />
    </g>
  );
};

const PilsnerLaCervezaQueLeDioNombreAUnEstilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 150 L235 150 L228 240 L182 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M180 165 Q205 155 230 165 Q225 175 205 173 Q185 175 180 165 Z" fill="#F5F0E6" />
      <path d="M235 175 Q255 175 255 195 Q255 210 235 205" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const PragaLaCiudadDeLasCienTorres: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 240 320 250 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.5" />
      {[[140, 220, 50], [180, 190, 70], [225, 200, 60], [265, 210, 55]].map(([x, y, h], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 15} y={y as number} width="28" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
          <polygon points={`${(x as number) - 15},${y} ${x},${(y as number) - 20} ${(x as number) + 13},${y}`} fill={dark} />
        </g>
      ))}
    </g>
  );
};

const RevolucionDeTerciopeloSinDerramarSangre: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="150" rx="18" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="150" r="6" fill="none" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="164" x2="205" y2="210" stroke={dark} strokeWidth="4" />
      {[170, 240].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="170" rx="14" ry="11" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
          <line x1={x} y1="181" x2={x} y2="215" stroke={dark} strokeWidth="3" />
        </g>
      ))}
    </g>
  );
};

const ElOrigenChecoDeLaPalabraRobot: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="175" y="150" width="60" height="70" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="185" y="130" width="40" height="25" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
      <circle cx="197" cy="142" r="4" fill={dark} />
      <circle cx="213" cy="142" r="4" fill={dark} />
      <rect x="190" y="165" width="30" height="8" fill={dark} opacity="0.5" />
      <line x1="175" y1="180" x2="155" y2="200" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <line x1="235" y1="180" x2="255" y2="200" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const ElArsenalDeVidrioDeBohemia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M190 150 L220 150 L215 200 Q225 210 220 225 Q205 235 190 225 Q185 210 195 200 Z" fill={accentColor} opacity="0.75" stroke={dark} strokeWidth="2.5" />
      <line x1="192" y1="160" x2="218" y2="160" stroke="#F5F0E6" strokeWidth="1.5" opacity="0.6" />
      <line x1="195" y1="175" x2="215" y2="175" stroke="#F5F0E6" strokeWidth="1.5" opacity="0.6" />
      <path d="M175 240 L235 240" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const KafkaElEscritorQueNuncaVioSuObraPublicada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="200" width="90" height="12" fill="#8B5A2B" />
      <rect x="185" y="150" width="40" height="50" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <line x1="192" y1="160" x2="218" y2="160" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <line x1="192" y1="170" x2="218" y2="170" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="255" cy="195" rx="14" ry="6" fill="#1A1A1A" />
      <line x1="245" y1="192" x2="240" y2="188" stroke="#1A1A1A" strokeWidth="2" />
      <line x1="245" y1="198" x2="240" y2="202" stroke="#1A1A1A" strokeWidth="2" />
    </g>
  );
};

const ElPaisQueMasCervezaTomaPorPersona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M165 160 L195 160 L190 235 L170 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" transform="rotate(-8 180 197)" />
      <path d="M215 155 L245 155 L240 230 L220 230 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" transform="rotate(8 230 192)" />
      <path d="M175 165 Q180 155 190 158" fill="#F5F0E6" opacity="0.9" />
      <path d="M225 160 Q230 150 240 153" fill="#F5F0E6" opacity="0.9" />
    </g>
  );
};

const KrtekElTopoQueConquistoMedioMundo: IllustrationComponent = () => (
  <g>
    <ellipse cx="205" cy="200" rx="45" ry="35" fill="#1A1A1A" />
    <path d="M180 175 Q170 155 185 145 Q195 155 190 172 Z" fill="#1A1A1A" />
    <circle cx="195" cy="190" r="5" fill="#F5F0E6" />
    <circle cx="220" cy="190" r="5" fill="#F5F0E6" />
    <ellipse cx="207" cy="205" rx="8" ry="5" fill="#C68642" />
    <path d="M195 215 Q207 222 219 215" fill="none" stroke="#F5F0E6" strokeWidth="2.5" />
  </g>
);

const KarlovyVaryElBalnearioDeLasAguasTermales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="180" width="110" height="15" fill={accentColor} stroke={dark} strokeWidth="2" />
      {[165, 205, 245].map((x) => (
        <rect key={x} x={x - 6} y="140" width="12" height="40" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      ))}
      <path d="M205 130 Q200 115 210 100 Q218 115 208 130 Z" fill="#3D8FB0" opacity="0.7" />
    </g>
  );
};

export const czechRepublicIllustrations: Record<string, IllustrationDefinition> = {
  "reloj-astronomico-que-sigue-funcionando": { component: RelojAstronomicoQueSigueFuncionando },
  "pilsner-la-cerveza-que-le-dio-nombre-a-un-estilo": { component: PilsnerLaCervezaQueLeDioNombreAUnEstilo },
  "praga-la-ciudad-de-las-cien-torres": { component: PragaLaCiudadDeLasCienTorres },
  "revolucion-de-terciopelo-sin-derramar-sangre": { component: RevolucionDeTerciopeloSinDerramarSangre },
  "el-origen-checo-de-la-palabra-robot": { component: ElOrigenChecoDeLaPalabraRobot },
  "el-arsenal-de-vidrio-de-bohemia": { component: ElArsenalDeVidrioDeBohemia },
  "kafka-el-escritor-que-nunca-vio-su-obra-publicada": { component: KafkaElEscritorQueNuncaVioSuObraPublicada },
  "el-pais-que-mas-cerveza-toma-por-persona": { component: ElPaisQueMasCervezaTomaPorPersona },
  "krtek-el-topo-que-conquisto-medio-mundo": { component: KrtekElTopoQueConquistoMedioMundo },
  "karlovy-vary-el-balneario-de-las-aguas-termales": { component: KarlovyVaryElBalnearioDeLasAguasTermales },
};
