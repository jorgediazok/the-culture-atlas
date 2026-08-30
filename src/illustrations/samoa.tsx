import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElSistemaDeJefesQueTodaviaGobiernaLaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="235" rx="95" ry="14" fill="#D9C9A3" stroke={dark} strokeWidth="2.4" />
      <circle cx="205" cy="150" r="18" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <path d="M175 195 Q175 165 205 165 Q235 165 235 195 L235 225 Q205 235 175 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M180 155 Q190 145 200 155 M210 155 Q220 145 230 155" fill="none" stroke="#F5F0E6" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="140" cy="230" rx="10" ry="4" fill="#8C8C74" opacity="0.7" />
      <ellipse cx="270" cy="230" rx="10" ry="4" fill="#8C8C74" opacity="0.7" />
    </g>
  );
};

const ElTatuajeQueTomaSemanasDeDolorCompartido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M175 100 L175 240 Q205 250 235 240 L235 100 Z" fill="#D9A97A" stroke={dark} strokeWidth="3" />
      {[120, 150, 180, 210].map((y) => (
        <g key={y}>
          <rect x="182" y={y} width="36" height="10" fill={accentColor} opacity="0.9" />
          {[0, 1, 2, 3].map((j) => (
            <polygon key={j} points={`${188 + j * 8},${y} ${192 + j * 8},${y + 10} ${196 + j * 8},${y}`} fill="#1A1A1A" />
          ))}
        </g>
      ))}
      <path d="M175 100 L175 240" stroke={dark} strokeWidth="3" />
      <path d="M235 100 L235 240" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const ElJardinHundidoDentroDeUnCraterDeLava: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 150 Q150 90 205 90 Q260 90 320 150 L320 250 L90 250 Z" fill="#2F6B3A" opacity="0.5" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="185" rx="70" ry="55" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="185" rx="45" ry="34" fill={tint(accentColor, 0.3)} opacity="0.7" />
      <rect x="198" y="90" width="14" height="90" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="196" y={95 + i * 16} width="18" height="4" fill="#5C3A21" />
      ))}
    </g>
  );
};

const LaCasaSinParedesQueSeAbreAlVecindario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 165 Q205 105 290 165 Q205 150 120 165 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.8" />
      {[130, 165, 205, 245, 280].map((x) => (
        <line key={x} x1={x} y1="165" x2={x} y2="235" stroke="#5C3A21" strokeWidth="6" />
      ))}
      <ellipse cx="205" cy="235" rx="90" ry="10" fill="#D9C9A3" opacity="0.7" />
      <path d="M140 200 Q205 190 270 200" fill="none" stroke={accentColor} strokeWidth="4" opacity="0.6" />
    </g>
  );
};

const LaBebidaCeremonialQueSeCompartEnCirculo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 195 Q140 230 205 235 Q270 230 270 195 L260 210 Q205 220 150 210 Z" fill="#5C3A21" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="205" cy="195" rx="65" ry="18" fill="#8B5A2B" stroke={dark} strokeWidth="2.8" />
      <ellipse cx="205" cy="193" rx="48" ry="10" fill={accentColor} opacity="0.85" />
      {[[140, 220], [270, 220], [110, 235], [300, 235]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill="#D9A97A" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const ElEscritorEscocesQueEligioMorirEnLaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q150 150 205 145 Q260 150 320 250 Z" fill="#2F6B3A" opacity="0.55" stroke={dark} strokeWidth="2.4" />
      <path d="M190 175 L220 175 L215 200 L195 200 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.6" />
      <path d="M195 175 Q205 160 215 175" fill="none" stroke={dark} strokeWidth="2.4" />
      <rect x="197" y="180" width="16" height="14" fill={accentColor} opacity="0.5" />
      <path d="M120 235 Q205 220 290 235" fill="none" stroke="#1B5E7A" strokeWidth="5" opacity="0.6" />
    </g>
  );
};

const ElDiaQueSamoaBorroDelCalendario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="110" width="130" height="120" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="140" y="110" width="130" height="28" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect key={`${r}-${c}`} x={155 + c * 27} y={150 + r * 20} width="20" height="14" fill={r === 2 && c === 1 ? "#8B1A1A" : tint(accentColor, 0.4)} opacity={r === 2 && c === 1 ? 0.9 : 0.5} />
        ))
      )}
      <line x1="180" y1="150" x2="240" y2="210" stroke="#8B1A1A" strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const ElGusanoDeCoralQueLaIslaEsperaCadaAno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="180" width="230" height="70" fill="#1B5E7A" opacity="0.4" />
      <circle cx="155" cy="150" r="11" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M140 200 L145 165 L165 165 L170 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <polygon points="145,145 130,130 148,135" fill="#C9A227" opacity="0.85" />
      <path d="M170 190 L200 190" stroke="#C9A227" strokeWidth="3" opacity="0.6" />
      <path d="M220 215 Q235 205 250 215 Q235 222 220 215 Z" fill="#8B1A1A" opacity="0.75" />
      <path d="M245 200 Q260 192 275 202 Q260 208 245 200 Z" fill="#C1272D" opacity="0.7" />
      <rect x="225" y="240" width="14" height="10" fill="#3A3A3A" opacity="0.6" />
    </g>
  );
};

const ElBaileFinalQueSoloBailaUnaPersona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="14" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <path d="M205 144 L205 200" stroke="#8B5A2B" strokeWidth="8" />
      <path d="M205 155 Q170 140 150 115 M205 155 Q240 140 260 115" fill="none" stroke="#8B5A2B" strokeWidth="7" strokeLinecap="round" />
      <path d="M170 200 Q170 225 205 235 Q240 225 240 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={180 + i * 12} y1="200" x2={175 + i * 12} y2="235" stroke={tint(accentColor, 0.3)} strokeWidth="3" />
      ))}
    </g>
  );
};

const ElEquipoDeRugbyQueHaceTemblarAGigantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="180" cy="140" r="13" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
      <rect x="160" y="153" width="40" height="45" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <ellipse cx="230" cy="185" rx="26" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" transform="rotate(-20 230 185)" />
      <path d="M204 175 L230 185" stroke="#3A2418" strokeWidth="2" />
      <line x1="170" y1="198" x2="160" y2="235" stroke="#3A2418" strokeWidth="5" />
      <line x1="190" y1="198" x2="200" y2="235" stroke="#3A2418" strokeWidth="5" />
      <rect x="90" y="240" width="230" height="8" fill="#2F6B3A" opacity="0.5" />
    </g>
  );
};

export const samoaIllustrations: Record<string, IllustrationDefinition> = {
  "el-sistema-de-jefes-que-todavia-gobierna-la-isla": { component: ElSistemaDeJefesQueTodaviaGobiernaLaIsla },
  "el-tatuaje-que-toma-semanas-de-dolor-compartido": { component: ElTatuajeQueTomaSemanasDeDolorCompartido },
  "el-jardin-hundido-dentro-de-un-crater-de-lava": { component: ElJardinHundidoDentroDeUnCraterDeLava },
  "la-casa-sin-paredes-que-se-abre-al-vecindario": { component: LaCasaSinParedesQueSeAbreAlVecindario },
  "la-bebida-ceremonial-que-se-comparte-en-circulo": { component: LaBebidaCeremonialQueSeCompartEnCirculo },
  "el-escritor-escoces-que-eligio-morir-en-la-isla": { component: ElEscritorEscocesQueEligioMorirEnLaIsla },
  "el-dia-que-samoa-borro-del-calendario": { component: ElDiaQueSamoaBorroDelCalendario },
  "el-gusano-de-coral-que-la-isla-espera-cada-ano": { component: ElGusanoDeCoralQueLaIslaEsperaCadaAno },
  "el-baile-final-que-solo-baila-una-persona": { component: ElBaileFinalQueSoloBailaUnaPersona },
  "el-equipo-de-rugby-que-hace-temblar-a-gigantes": { component: ElEquipoDeRugbyQueHaceTemblarAGigantes },
};
