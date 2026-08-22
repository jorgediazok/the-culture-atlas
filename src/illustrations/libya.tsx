import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LaCiudadRomanaQueElDesiertoConservoIntacta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="240" width="230" height="8" fill="#C9A227" opacity="0.4" />
      {[130, 175, 220, 265].map((x, i) => (
        <g key={x}>
          <rect x={x} y="140" width="18" height="100" fill={accentColor} stroke={dark} strokeWidth="2.4" />
          <rect x={x - 4} y="132" width="26" height="10" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="1.8" />
        </g>
      ))}
      <path d="M120 132 Q205 100 290 132" fill="none" stroke={dark} strokeWidth="3" opacity="0.5" />
    </g>
  );
};

const LaCiudadBlancaConstruidaParaEsconderseDelSol: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 240 L110 160 Q160 130 205 160 L205 240 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2.8" />
      <path d="M205 240 L205 160 Q250 130 300 160 L300 240 Z" fill="#EDE6D6" stroke={dark} strokeWidth="2.8" />
      <rect x="140" y="195" width="24" height="45" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <rect x="235" y="195" width="24" height="45" fill="#8B1A1A" stroke={dark} strokeWidth="2.2" />
      <path d="M110 175 Q205 155 300 175" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ElArteRupestreDeUnSaharaQueFueVerde: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 90 L320 90 L320 250 L90 250 Z" fill="#D9A97A" opacity="0.35" />
      <path d="M150 200 Q160 170 190 175 Q200 180 195 195 Q180 210 150 200 Z" fill="#8B1A1A" opacity="0.75" />
      <path d="M155 195 L145 220 M195 190 L205 215" stroke="#8B1A1A" strokeWidth="4" opacity="0.7" />
      <circle cx="240" cy="150" r="14" fill="#8B1A1A" opacity="0.75" />
      <path d="M240 164 L235 195 M240 164 L248 192" stroke="#8B1A1A" strokeWidth="4" opacity="0.7" />
      <path d="M225 145 L215 130 M255 145 L268 132" stroke="#8B1A1A" strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const LosVelosAzulesDeLosNomadasDelSahara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="150" rx="30" ry="34" fill="#1B4F72" stroke={dark} strokeWidth="2.6" />
      <path d="M175 140 Q205 120 235 140" fill="none" stroke="#123048" strokeWidth="4" />
      <rect x="192" y="140" width="26" height="14" fill="#7A9AB0" opacity="0.6" />
      <circle cx="199" cy="147" r="2.5" fill="#0A0A0A" />
      <circle cx="211" cy="147" r="2.5" fill="#0A0A0A" />
      <path d="M170 220 Q160 190 205 185 Q250 190 240 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
    </g>
  );
};

const ElRioArtificialMasGrandeJamasConstruido: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q150 190 205 200 Q260 210 320 195" fill="none" stroke="#5C5C5C" strokeWidth="16" strokeLinecap="round" />
      <path d="M90 200 Q150 190 205 200 Q260 210 320 195" fill="none" stroke="#2E6B8C" strokeWidth="7" strokeLinecap="round" opacity="0.8" />
      <rect x="195" y="150" width="20" height="50" fill="#8B5A2B" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="140" rx="30" ry="20" fill="#2F6B3A" opacity="0.7" />
      <rect x="270" y="170" width="14" height="30" fill="#5C3A21" />
    </g>
  );
};

const ElTeatroRomanoQueMiraTodaviaAlMar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="30" fill="#1B5E7A" opacity="0.4" />
      <path d="M120 220 Q205 235 290 220 L290 210 Q205 225 120 210 Z" fill="#8C8C74" stroke={dark} strokeWidth="2.4" />
      {[140, 170, 200, 230, 260].map((x, i) => (
        <rect key={x} x={x} y={190 - i * 3} width="16" height={30 + i * 3} fill={accentColor} stroke={dark} strokeWidth="2" opacity="0.9" />
      ))}
    </g>
  );
};

const ElCraterVolcanicoConLagosDeColoresImposibles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 130 320 240 Z" fill="#1A1A1A" opacity="0.55" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="220" rx="70" ry="24" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="180" cy="215" rx="18" ry="8" fill="#C1272D" opacity="0.7" />
      <ellipse cx="225" cy="222" rx="16" ry="7" fill="#2F6B3A" opacity="0.7" />
      {[[160, 170], [220, 160], [190, 150]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="8" ry="16" fill="#2F6B3A" opacity="0.6" />
      ))}
    </g>
  );
};

const LosLagosQueSeEsconenEntreDunasGigantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q140 150 200 240 Z" fill="#C9A227" opacity="0.75" stroke={dark} strokeWidth="2.4" />
      <path d="M180 240 Q240 120 320 240 Z" fill="#B8860B" opacity="0.75" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="230" cy="225" rx="55" ry="16" fill="#1B4F72" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="150" cy="220" rx="14" ry="24" fill="#2F6B3A" opacity="0.8" />
      <ellipse cx="170" cy="215" rx="12" ry="20" fill="#3A7A45" opacity="0.8" />
    </g>
  );
};

const LaCiudadGriegaQueRivalizoConAtenas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 200 320 240" fill="none" stroke="#3A5F3A" strokeWidth="10" opacity="0.4" />
      <rect x="150" y="150" width="110" height="70" fill="#F5F0E6" stroke={dark} strokeWidth="2.8" />
      {[160, 185, 210, 235].map((x) => (
        <rect key={x} x={x} y="150" width="10" height="70" fill="#EDE6D6" stroke={dark} strokeWidth="1.8" />
      ))}
      <polygon points="140,150 205,115 270,150" fill={accentColor} stroke={dark} strokeWidth="2.6" />
    </g>
  );
};

const ElCuscusQueSeCocinaDistintoEnCadaCasa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="215" rx="80" ry="20" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      <path d="M175 210 Q205 185 235 210 Q225 220 205 218 Q185 220 175 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <ellipse cx="205" cy="212" rx="25" ry="10" fill="#8B1A1A" opacity="0.75" />
      <circle cx="270" cy="200" r="18" fill="#8B1A1A" opacity="0.6" />
    </g>
  );
};

export const libyaIllustrations: Record<string, IllustrationDefinition> = {
  "la-ciudad-romana-que-el-desierto-conservo-intacta": { component: LaCiudadRomanaQueElDesiertoConservoIntacta },
  "la-ciudad-blanca-construida-para-esconderse-del-sol": { component: LaCiudadBlancaConstruidaParaEsconderseDelSol },
  "el-arte-rupestre-de-un-sahara-que-fue-verde": { component: ElArteRupestreDeUnSaharaQueFueVerde },
  "los-velos-azules-de-los-nomadas-del-sahara": { component: LosVelosAzulesDeLosNomadasDelSahara },
  "el-rio-artificial-mas-grande-jamas-construido": { component: ElRioArtificialMasGrandeJamasConstruido },
  "el-teatro-romano-que-mira-todavia-al-mar": { component: ElTeatroRomanoQueMiraTodaviaAlMar },
  "el-crater-volcanico-con-lagos-de-colores-imposibles": { component: ElCraterVolcanicoConLagosDeColoresImposibles },
  "los-lagos-que-se-esconden-entre-dunas-gigantes": { component: LosLagosQueSeEsconenEntreDunasGigantes },
  "la-ciudad-griega-que-rivalizo-con-atenas": { component: LaCiudadGriegaQueRivalizoConAtenas },
  "el-cuscus-que-se-cocina-distinto-en-cada-casa": { component: ElCuscusQueSeCocinaDistintoEnCadaCasa },
};
