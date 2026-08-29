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

const DosCapitalesFrenteAFrenteEnElRioCongo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="170" width="230" height="70" fill="#1B7A9C" opacity="0.5" />
      {[[110, 168, 22], [140, 160, 30], [170, 172, 18]].map(([x, y, h], i) => (
        <rect key={i} x={x} y={y} width="20" height={h} fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="1.8" />
      ))}
      {[[250, 168, 24], [278, 158, 34], [300, 172, 20]].map(([x, y, h], i) => (
        <rect key={i} x={x} y={y} width="20" height={h} fill={accentColor} stroke={dark} strokeWidth="1.8" />
      ))}
      <path d="M175 210 L225 210 L215 195 L185 195 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <path d="M200 195 L200 175" stroke={dark} strokeWidth="2.4" />
      <path d="M90 240 Q205 232 320 240" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const LosSapeursQueVistenComoSiFueraUnDesfile: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="200" cy="130" r="12" fill="#3A2A1E" stroke={dark} strokeWidth="1.8" />
      <path d="M186 122 Q200 105 214 122 L212 128 Q200 118 188 128 Z" fill={dark} stroke={dark} strokeWidth="1.6" />
      <path d="M178 155 Q200 145 222 155 L226 235 Q200 248 174 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M186 155 L214 155 L210 200 L190 200 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="1.6" />
      <rect x="193" y="160" width="14" height="18" fill="#D9A227" stroke={dark} strokeWidth="1.4" />
      <path d="M178 165 Q160 175 158 210" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <path d="M222 165 Q245 180 250 225" fill="none" stroke={accentColor} strokeWidth="9" strokeLinecap="round" />
      <rect x="245" y="222" width="4" height="35" fill="#8B5A2B" />
      <ellipse cx="247" cy="258" rx="8" ry="4" fill="#8B5A2B" />
      <rect x="180" y="235" width="15" height="25" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <rect x="205" y="235" width="15" height="25" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
    </g>
  );
};

const LaCatedralDeTejasVerdesJuntoAlRio: IllustrationComponent = () => {
  const dark = shade("#2F8F5B", 0.4);
  return (
    <g>
      <rect x="150" y="180" width="100" height="65" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <path d="M140 180 L200 95 L260 180 Z" fill="#2F8F5B" stroke={dark} strokeWidth="3" />
      <path d="M140 180 L200 95 L260 180" fill="none" stroke="#1B4F2E" strokeWidth="1.6" opacity="0.5" />
      <path d="M155 180 L200 118 L245 180" fill="none" stroke="#1B4F2E" strokeWidth="1.4" opacity="0.4" />
      <rect x="192" y="88" width="16" height="26" fill="#2F8F5B" stroke={dark} strokeWidth="2" />
      <path d="M192 88 L200 68 L208 88 Z" fill="#2F8F5B" stroke={dark} strokeWidth="2" />
      <rect x="196" y="55" width="8" height="16" fill={dark} />
      <rect x="185" y="200" width="30" height="45" fill="#D9C9A3" stroke={dark} strokeWidth="2" />
      <path d="M185 200 Q200 190 215 200" fill="none" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LosGorilasQueVivenSinMiedoAlSerHumano: IllustrationComponent = () => {
  const dark = "#1B3A20";
  return (
    <g>
      {[[100, 250], [320, 250], [130, 90]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q${x + 20} ${y - 40} ${x + 45} ${y - 10} Q${x + 25} ${y} ${x} ${y}`} fill="#2F6B3A" opacity="0.5" />
      ))}
      <ellipse cx="200" cy="205" rx="55" ry="45" fill="#2A1F1A" stroke={dark} strokeWidth="3" />
      <circle cx="200" cy="140" r="34" fill="#2A1F1A" stroke={dark} strokeWidth="3" />
      <ellipse cx="200" cy="152" rx="18" ry="14" fill="#4A3A2E" />
      <circle cx="190" cy="138" r="4" fill="#0A0805" />
      <circle cx="210" cy="138" r="4" fill="#0A0805" />
      <path d="M180 168 Q200 178 220 168" fill="none" stroke="#0A0805" strokeWidth="2.4" />
      <path d="M150 210 Q135 225 145 245" fill="none" stroke="#2A1F1A" strokeWidth="14" strokeLinecap="round" />
      <path d="M250 210 Q265 225 255 245" fill="none" stroke="#2A1F1A" strokeWidth="14" strokeLinecap="round" />
      <path d="M170 245 L165 260 M230 245 L235 260" stroke="#2A1F1A" strokeWidth="12" strokeLinecap="round" />
    </g>
  );
};

const LasPiraguasQueTodaviaAlimentanAlRioCongo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="180" width="230" height="65" fill="#1B7A9C" opacity="0.5" />
      <path d="M140 220 L260 220 L245 200 L155 200 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      {person(200, 195, 0.95, dark, accentColor)}
      <path d="M215 168 Q245 158 265 170" fill="none" stroke="#3A2A1E" strokeWidth="3" />
      <ellipse cx="270" cy="172" rx="14" ry="8" fill="none" stroke="#3A2A1E" strokeWidth="2.6" />
      <path d="M270 172 L272 195" stroke="#3A2A1E" strokeWidth="2" opacity="0.6" />
      <path d="M90 235 Q205 225 320 235" fill="none" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ElRitmoQueLaUnescoDeclaroPatrimonioMundial: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(140, 235, 0.85, dark, accentColor)}
      <ellipse cx="168" cy="205" rx="24" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" transform="rotate(-15 168 205)" />
      <rect x="188" y="175" width="5" height="38" fill={dark} transform="rotate(-15 190 194)" />
      {person(215, 238, 0.85, dark, tint(accentColor, 0.2))}
      <rect x="200" y="205" width="20" height="30" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {person(280, 240, 0.85, dark, "#D9A227")}
      {person(305, 238, 0.8, dark, tint(accentColor, 0.35))}
      <path d="M275 205 Q292 195 305 205" fill="none" stroke="#B8860B" strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const ElBarrioQueSeConvirtioEnEscuelaDePintores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(150, 235, 1, dark, accentColor)}
      <path d="M195 150 L195 235 L230 235 L230 150 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <path d="M170 150 L255 145 L255 240 L170 245 Z" fill="none" stroke="#8B5A2B" strokeWidth="4" />
      <path d="M205 210 Q215 195 225 210 Q220 225 210 222 Q200 218 205 210" fill="#D9A227" />
      <path d="M198 195 Q208 180 218 195" fill="none" stroke="#8B1A1A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="212" cy="170" r="10" fill="#1B7A9C" opacity="0.8" />
      <rect x="130" y="200" width="26" height="9" fill="#B8860B" transform="rotate(-25 143 204)" />
    </g>
  );
};

const LasFigurasDePoderQueGuardanElEspiritu: IllustrationComponent = () => {
  const dark = "#3A2A1E";
  return (
    <g>
      <path d="M175 250 L175 130 Q175 100 200 95 Q225 100 225 130 L225 250 Z" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      <circle cx="200" cy="105" r="18" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <circle cx="193" cy="100" r="2.6" fill={dark} />
      <circle cx="207" cy="100" r="2.6" fill={dark} />
      <path d="M191 112 Q200 118 209 112" fill="none" stroke={dark} strokeWidth="2" />
      {[[185, 145], [200, 135], [215, 150], [190, 165], [210, 172], [195, 190], [212, 195], [188, 210], [206, 218], [198, 235]].map(([x, y], i) => (
        <g key={i} transform={`rotate(${(i * 37) % 40 - 20} ${x} ${y})`}>
          <line x1={x} y1={y} x2={x} y2={y - 14} stroke="#B0B0B0" strokeWidth="2.6" />
          <circle cx={x} cy={y - 14} r="2.4" fill="#D9D9D9" />
        </g>
      ))}
    </g>
  );
};

const ElPolloEnSalsaDeNuezDePalmaDeCadaDomingo: IllustrationComponent = () => {
  const dark = "#5C3A21";
  return (
    <g>
      <ellipse cx="200" cy="215" rx="95" ry="24" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="185" cy="205" rx="55" ry="18" fill="#C1440E" opacity="0.9" />
      {[[165, 200], [195, 208], [220, 198]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="14" ry="10" fill="#8B5A2B" stroke={dark} strokeWidth="1.8" />
      ))}
      <g transform="translate(255 205)">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={i * 6 - 15} y="-8" width="4" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="1" />
        ))}
      </g>
      <path d="M120 205 Q135 190 150 205 Q135 215 120 205" fill="#D9A227" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const ElCanonDeTierraRojaQueCreceCadaAno: IllustrationComponent = () => {
  const dark = "#6B2E0E";
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#F5D9A8" opacity="0.3" />
      <path d="M90 250 L110 150 L140 190 L170 110 L200 175 L230 100 L260 180 L290 140 L320 250 Z" fill="#C1440E" stroke={dark} strokeWidth="2.8" />
      <path d="M90 250 L110 150 L140 190 L170 110 L200 175" fill="none" stroke="#E07B39" strokeWidth="2" opacity="0.6" />
      <path d="M200 175 L230 100 L260 180 L290 140 L320 250" fill="none" stroke="#8B3010" strokeWidth="2" opacity="0.5" />
      <path d="M150 250 Q200 240 250 250" fill="none" stroke="#5C3A21" strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const ParqueNouabaleNdoki: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gorilla = "#2A1F1A";
  const elephantColor = "#8C8478";
  return (
    <g>
      <ellipse cx="205" cy="230" rx="120" ry="22" fill={tint(accentColor, 0.5)} opacity="0.5" />
      <g transform="translate(135, 205)">
        <path d="M-20 6 L-20 22 M-6 8 L-6 24 M8 8 L8 24 M20 6 L20 22" stroke={dark} strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="0" cy="-4" rx="26" ry="15" fill={elephantColor} stroke={dark} strokeWidth="2.2" />
        <ellipse cx="22" cy="-8" rx="11" ry="10" fill={elephantColor} stroke={dark} strokeWidth="2" />
        <path d="M26 -4 Q34 2 30 16 Q27 24 20 26" fill="none" stroke={elephantColor} strokeWidth="5" strokeLinecap="round" />
      </g>
      <g transform="translate(270, 220)">
        <circle cx="0" cy="-32" r="17" fill={gorilla} stroke={shade(gorilla, 0.3)} strokeWidth="2.2" />
        <ellipse cx="0" cy="0" rx="30" ry="24" fill={gorilla} stroke={shade(gorilla, 0.3)} strokeWidth="2.4" />
        <ellipse cx="0" cy="-24" rx="9" ry="7" fill="#4A3A2E" />
        <circle cx="-6" cy="-34" r="2.4" fill="#0A0805" />
        <circle cx="6" cy="-34" r="2.4" fill="#0A0805" />
        <path d="M-20 -8 Q-30 2 -24 16" fill="none" stroke={gorilla} strokeWidth="9" strokeLinecap="round" />
        <path d="M20 -8 Q30 2 24 16" fill="none" stroke={gorilla} strokeWidth="9" strokeLinecap="round" />
      </g>
    </g>
  );
};

const CataratasDeLoufoulakari: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rock = "#8B7355";
  return (
    <g>
      <path d="M100 250 L100 140 Q150 110 200 140 L200 250 Z" fill={rock} stroke={shade(rock, 0.3)} strokeWidth="2.8" />
      <path d="M230 250 L230 150 Q270 125 310 150 L310 250 Z" fill={shade(rock, 0.1)} stroke={shade(rock, 0.3)} strokeWidth="2.8" />
      <path d="M200 140 L230 150 L225 250 L205 250 Z" fill={accentColor} opacity="0.85" stroke={dark} strokeWidth="2.4" />
      <path d="M205 150 L205 245 M215 145 L215 248 M222 148 L222 246" stroke="#fff" strokeWidth="3" opacity="0.5" />
      <ellipse cx="215" cy="248" rx="55" ry="14" fill={tint(accentColor, 0.4)} opacity="0.7" />
      <path d="M90 235 Q115 245 130 235 M300 240 Q315 248 320 236" fill="none" stroke="#2F6B3A" strokeWidth="6" opacity="0.5" />
    </g>
  );
};

export const republicOfTheCongoIllustrations: Record<string, IllustrationDefinition> = {
  "dos-capitales-frente-a-frente-en-el-rio-congo": { component: DosCapitalesFrenteAFrenteEnElRioCongo },
  "los-sapeurs-que-visten-como-si-fuera-un-desfile": { component: LosSapeursQueVistenComoSiFueraUnDesfile },
  "la-catedral-de-tejas-verdes-junto-al-rio": { component: LaCatedralDeTejasVerdesJuntoAlRio },
  "los-gorilas-que-viven-sin-miedo-al-ser-humano": { component: LosGorilasQueVivenSinMiedoAlSerHumano },
  "las-piraguas-que-todavia-alimentan-al-rio-congo": { component: LasPiraguasQueTodaviaAlimentanAlRioCongo },
  "el-ritmo-que-la-unesco-declaro-patrimonio-mundial": { component: ElRitmoQueLaUnescoDeclaroPatrimonioMundial },
  "el-barrio-que-se-convirtio-en-escuela-de-pintores": { component: ElBarrioQueSeConvirtioEnEscuelaDePintores },
  "las-figuras-de-poder-que-guardan-el-espiritu": { component: LasFigurasDePoderQueGuardanElEspiritu },
  "el-pollo-en-salsa-de-nuez-de-palma-de-cada-domingo": { component: ElPolloEnSalsaDeNuezDePalmaDeCadaDomingo },
  "el-canon-de-tierra-roja-que-crece-cada-ano": { component: ElCanonDeTierraRojaQueCreceCadaAno },
  "parque-nouabale-ndoki": { component: ParqueNouabaleNdoki },
  "cataratas-de-loufoulakari": { component: CataratasDeLoufoulakari },
};
