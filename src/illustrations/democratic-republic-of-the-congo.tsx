import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill="#3A2A1E" stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

const ElRioMasProfundoDelPlanetaEntero: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#2F6B3A" opacity="0.25" />
      <path d="M90 150 Q160 130 205 160 Q250 190 320 150 L320 210 Q250 240 205 210 Q160 180 90 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M120 168 Q160 158 190 172 M230 185 Q260 195 290 178" stroke="#fff" strokeWidth="2" opacity="0.4" fill="none" />
      <path d="M105 130 L105 160 M300 135 L300 165" stroke="#3A5F3A" strokeWidth="10" opacity="0.5" />
    </g>
  );
};

const LaSegundaSelvaMasGrandeDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[130, 190, 34], [180, 170, 40], [230, 185, 38], [280, 195, 30]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={i % 2 === 0 ? accentColor : "#2F6B3A"} opacity="0.75" stroke={dark} strokeWidth="1.8" />
      ))}
      {[[150, 175], [205, 165], [255, 178]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q${x + 8} ${y - 10} ${x + 16} ${y}`} fill="none" stroke="#1B4B1E" strokeWidth="1.6" opacity="0.5" />
      ))}
      <ellipse cx="205" cy="245" rx="120" ry="10" fill="#8B5A2B" opacity="0.4" />
    </g>
  );
};

const ElParqueMasViejoDeAfricaYSusGorilas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L180 110 L270 250 Z" fill="#5C6B3A" opacity="0.4" />
      <ellipse cx="220" cy="220" rx="35" ry="30" fill="#3A2A1E" stroke={dark} strokeWidth="2.6" />
      <circle cx="220" cy="180" r="22" fill="#3A2A1E" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="220" cy="189" rx="10" ry="6" fill="#5C4A3E" />
      <circle cx="212" cy="177" r="3" fill="#fff" />
      <circle cx="228" cy="177" r="3" fill="#fff" />
      <path d="M190 205 Q175 195 180 220" fill="none" stroke="#3A2A1E" strokeWidth="9" strokeLinecap="round" />
      <path d="M250 205 Q262 198 258 218" fill="none" stroke="#3A2A1E" strokeWidth="9" strokeLinecap="round" />
    </g>
  );
};

const ElLagoDeLavaMasGrandeJamasObservado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q205 120 320 240 Z" fill="#1A1A1A" opacity="0.6" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="205" cy="220" rx="80" ry="24" fill="#C1272D" stroke={dark} strokeWidth="3" />
      <path d="M170 215 Q190 200 210 215 Q230 200 245 215" fill="none" stroke="#F5A623" strokeWidth="4" opacity="0.85" />
      <path d="M150 180 L165 195 M260 180 L245 195" stroke="#8B1A1A" strokeWidth="4" opacity="0.6" strokeLinecap="round" />
    </g>
  );
};

const LaRumbaQueHizoBailarATodaAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(175, 235, 1, dark, accentColor)}
      <path d="M195 190 L195 100 Q210 96 210 110 L210 190" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <path d="M180 205 Q170 175 200 172 Q225 175 218 205 Q200 218 180 205 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.2" />
      <circle cx="199" cy="188" r="10" fill="#5C3A21" stroke={dark} strokeWidth="1.4" />
      <rect x="255" y="150" width="6" height="70" fill={dark} />
      <ellipse cx="258" cy="145" rx="14" ry="9" fill="#8B8378" stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const LasTelasGeometricasTejidasPorUnReinoReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="115" y="120" width="180" height="120" fill="#D9C9A3" stroke={dark} strokeWidth="2.6" />
      {[0, 1, 2, 3].map((i) => (
        <path key={`a${i}`} d={`M${135 + i * 40} 120 L${155 + i * 40} 180 L${135 + i * 40} 240`} fill="none" stroke={accentColor} strokeWidth="3" />
      ))}
      {[0, 1, 2].map((i) => (
        <path key={`b${i}`} d={`M115 ${140 + i * 35} L295 ${140 + i * 35}`} fill="none" stroke="#8B5A2B" strokeWidth="1.4" opacity="0.5" />
      ))}
    </g>
  );
};

const LasArpasYTocadosDeUnaCorteOlvidada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 240 Q168 160 195 130 L215 130 Q225 140 218 152" fill="none" stroke="#8B5A2B" strokeWidth="10" strokeLinecap="round" />
      <path d="M200 120 Q195 100 205 88 Q215 100 210 120 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="205" cy="112" rx="13" ry="14" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <circle cx="209" cy="108" r="1.8" fill="#1a1a1a" />
      <path d="M197 124 Q205 130 213 124" fill="none" stroke={dark} strokeWidth="1.6" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${180 + i * 8} 230 L${203 + i * 3} 135`} stroke="#D9A227" strokeWidth="1.6" />
      ))}
      <path d="M170 230 Q195 240 220 228" fill="none" stroke="#8B5A2B" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

const LosPrimatesPacificosQueSoloVivenAqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 230 Q205 195 320 230 L320 250 L90 250 Z" fill="#8B5A2B" opacity="0.4" />
      <path d="M110 230 Q108 160 120 100 M300 230 Q302 160 290 100" stroke="#2F6B3A" strokeWidth="9" opacity="0.5" fill="none" />
      <ellipse cx="205" cy="205" rx="32" ry="26" fill="#4A3A2E" stroke={dark} strokeWidth="2.4" />
      <circle cx="205" cy="168" r="20" fill="#4A3A2E" stroke={dark} strokeWidth="2.2" />
      <ellipse cx="205" cy="176" rx="9" ry="6" fill="#6B5A4C" />
      <circle cx="198" cy="163" r="3" fill="#fff" />
      <circle cx="212" cy="163" r="3" fill="#fff" />
      <path d="M175 200 Q160 190 165 215 M235 200 Q250 190 245 215" fill="none" stroke="#4A3A2E" strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const LosCazadoresQueConocenCadaSonidoDeLaSelva: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M170 250 Q170 190 205 185 Q240 190 240 250 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <path d="M180 190 Q205 160 230 190" fill="none" stroke="#2F6B3A" strokeWidth="6" />
      <rect x="200" y="220" width="10" height="22" fill="#3A2A1E" opacity="0.7" />
      <path d="M100 250 L112 165 Q116 150 128 150 M310 250 L298 165 Q294 150 282 150" stroke="#2F6B3A" strokeWidth="9" opacity="0.5" fill="none" />
      <ellipse cx="120" cy="145" rx="14" ry="8" fill="#3A5F3A" opacity="0.6" />
      <ellipse cx="282" cy="145" rx="14" ry="8" fill="#3A5F3A" opacity="0.6" />
    </g>
  );
};

const ElPanDeMandiocaQueEnvuelveCadaComida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="185" width="60" height="45" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <path d="M140 185 L130 175 L200 175 L210 185" fill="#2F6B3A" opacity="0.6" />
      <path d="M140 200 L200 200 M140 215 L200 215" stroke={dark} strokeWidth="1.2" opacity="0.4" />
      <ellipse cx="255" cy="220" rx="45" ry="16" fill="#1B4B1E" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="255" cy="214" rx="28" ry="9" fill={accentColor} opacity="0.8" />
      {[[240, 208], [255, 204], [270, 208]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="3" fill="#3A2A1E" opacity="0.5" />
      ))}
    </g>
  );
};

const RumbleInTheJungle1974: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin1 = "#3A2A1E";
  const skin2 = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="200" width="230" height="10" fill={dark} opacity="0.3" />
      <line x1="90" y1="120" x2="90" y2="210" stroke={dark} strokeWidth="4" />
      <line x1="320" y1="120" x2="320" y2="210" stroke={dark} strokeWidth="4" />
      <line x1="90" y1="130" x2="320" y2="130" stroke="#fff" strokeWidth="3" opacity="0.6" />
      <line x1="90" y1="160" x2="320" y2="160" stroke="#fff" strokeWidth="3" opacity="0.6" />
      <circle cx="160" cy="165" r="13" fill={skin1} stroke={dark} strokeWidth="2" />
      <path d="M148 180 Q160 172 172 180 L168 210 Q160 216 152 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <path d="M150 185 Q235 175 245 180" fill="none" stroke={skin1} strokeWidth="9" strokeLinecap="round" />
      <circle cx="245" cy="178" r="9" fill="#C0392B" />
      <circle cx="250" cy="165" r="13" fill={skin2} stroke={dark} strokeWidth="2" />
      <path d="M238 180 Q250 172 262 180 L258 210 Q250 216 242 210 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.2" />
      <path d="M240 185 Q200 200 195 210" fill="none" stroke={skin2} strokeWidth="9" strokeLinecap="round" />
      <circle cx="195" cy="210" r="9" fill="#C0392B" />
    </g>
  );
};

const LaSapeKinshasa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  return (
    <g>
      <path d="M182 172 Q160 185 165 210" fill="none" stroke="#1A1A1A" strokeWidth="8" strokeLinecap="round" />
      <path d="M228 172 Q250 185 245 210" fill="none" stroke="#1A1A1A" strokeWidth="8" strokeLinecap="round" />
      <line x1="245" y1="210" x2="248" y2="245" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
      <circle cx="248" cy="248" r="4" fill="#8B5A2B" />
      <path d="M182 165 Q205 152 228 165 L222 225 Q205 235 188 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <rect x="197" y="168" width="16" height="30" fill="#F5F0E6" />
      <path d="M200 178 L210 178 L205 188 Z" fill="#C0392B" />
      <circle cx="205" cy="145" r="15" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M188 133 Q205 118 222 133 Q222 125 205 122 Q188 125 188 133 Z" fill="#1A1A1A" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const PavoRealDelCongo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#2F6B3A";
  return (
    <g>
      <ellipse cx="200" cy="205" rx="38" ry="26" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M225 190 Q238 178 245 170" stroke={green} strokeWidth="11" strokeLinecap="round" fill="none" />
      <circle cx="245" cy="170" r="16" fill={green} stroke={shade(green, 0.3)} strokeWidth="2.2" />
      <path d="M245 154 L240 140 M250 154 L255 138 M245 152 L245 136" stroke={green} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M165 195 Q135 190 125 205 Q140 212 165 207" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.2" />
      <line x1="180" y1="225" x2="175" y2="248" stroke={dark} strokeWidth="4" />
      <line x1="215" y1="225" x2="220" y2="248" stroke={dark} strokeWidth="4" />
      <circle cx="254" cy="166" r="2.5" fill="#1A1A1A" />
    </g>
  );
};

const CobaltoCongoleno: IllustrationComponent = ({ accentColor }) => {
  const skin = "#5C4433";
  const rock = "#3D5A80";
  const dark = shade(rock, 0.3);
  return (
    <g>
      <polygon points="90,250 130,180 175,220 210,160 250,220 290,190 320,250" fill={rock} stroke={dark} strokeWidth="2.6" />
      <path d="M172 172 Q150 178 145 160" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <line x1="145" y1="160" x2="125" y2="130" stroke="#8B5A2B" strokeWidth="5" strokeLinecap="round" />
      <path d="M118 122 L132 128 L128 142 Z" fill="#8C8C8C" stroke={dark} strokeWidth="1.6" />
      <path d="M188 185 Q210 195 215 215" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M167 165 Q180 158 193 165 L188 200 Q180 206 172 200 Z" fill={accentColor} stroke={shade(accentColor, 0.4)} strokeWidth="2.2" />
      <circle cx="180" cy="150" r="13" fill={skin} stroke={shade(accentColor, 0.4)} strokeWidth="2" />
    </g>
  );
};

const PinturaPopularCongolenaCheriSamba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#5C4433";
  return (
    <g>
      <rect x="200" y="110" width="110" height="130" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M215 220 Q240 190 260 215 Q280 180 300 210" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
      <circle cx="235" cy="150" r="14" fill="#C0392B" stroke={shade("#C0392B", 0.3)} strokeWidth="2" />
      <path d="M215 130 L295 225" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      <path d="M122 172 Q105 185 110 210" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M138 172 Q165 175 190 165" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="190" cy="163" r="5" fill="#8B5A2B" />
      <path d="M116 165 Q130 158 144 165 L138 210 Q130 218 122 210 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.2" />
      <circle cx="130" cy="150" r="14" fill={skin} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const PatriceLumumbaIndependencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  const CROWD: [number, number][] = [
    [130, 235], [165, 240], [245, 240], [280, 235],
  ];
  return (
    <g>
      {CROWD.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y - 18} r="9" fill={skin} opacity="0.6" />
          <path d={`M${x - 8} ${y} Q${x} ${y - 14} ${x + 8} ${y}`} fill={dark} opacity="0.5" />
        </g>
      ))}
      <path d="M225 178 Q245 165 250 130" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M185 178 Q165 195 172 225" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="250" cy="122" r="9" fill={skin} stroke={dark} strokeWidth="1.8" />
      <path d="M185 172 Q205 162 225 172 L218 235 Q205 244 192 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <circle cx="205" cy="150" r="16" fill={skin} stroke={dark} strokeWidth="2.2" />
      <path d="M188 145 L222 145" stroke="#1A1A1A" strokeWidth="3" />
      <circle cx="196" cy="147" r="6" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="214" cy="147" r="6" fill="none" stroke="#1A1A1A" strokeWidth="2" />
    </g>
  );
};

const ParqueGarambaRinocerontes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <rect x="90" y="225" width="230" height="25" fill={accentColor} opacity="0.35" />
      <path d="M150 225 Q145 175 180 165 Q215 158 235 175 Q255 190 248 225 Z" fill="#8C8C8C" stroke={dark} strokeWidth="2.6" />
      <path d="M235 185 Q255 190 250 215 Q245 225 235 220" fill="none" stroke="#8C8C8C" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="180" cy="168" rx="16" ry="12" fill="#8C8C8C" stroke={dark} strokeWidth="2.2" />
      <polygon points="168,160 155,150 163,168" fill="#8C8C8C" stroke={dark} strokeWidth="1.8" />
      <line x1="165" y1="220" x2="162" y2="240" stroke={dark} strokeWidth="5" />
      <line x1="230" y1="220" x2="233" y2="240" stroke={dark} strokeWidth="5" />
      <circle cx="120" cy="175" r="12" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M108 190 Q120 182 132 190 L128 225 Q120 232 112 225 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.2" />
    </g>
  );
};

const LukasaMemoriaLuba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const BEADS: [number, number, string][] = [
    [180, 155, "#F5F0E6"], [205, 150, "#C1272D"], [230, 158, "#F5F0E6"],
    [175, 180, "#C1272D"], [205, 178, "#F5F0E6"], [235, 182, "#C1272D"],
    [185, 205, "#F5F0E6"], [210, 208, "#C1272D"], [230, 200, "#F5F0E6"],
  ];
  return (
    <g>
      <path d="M160 130 Q205 115 250 130 L245 220 Q205 235 165 220 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {BEADS.map(([x, y, color]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={color} stroke={dark} strokeWidth="1.4" />
      ))}
      <path d="M175 140 L235 140 M170 195 L240 195" stroke={dark} strokeWidth="1.5" opacity="0.4" />
    </g>
  );
};

const ZaireMundial1974: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#3A2A1E";
  return (
    <g>
      <path d="M140 175 Q120 190 128 210" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M160 175 Q185 195 200 205" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="150" cy="155" r="13" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M136 168 Q150 160 164 168 L158 205 Q150 212 142 205 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M270 170 Q290 185 282 205" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M250 170 Q225 190 210 200" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <circle cx="260" cy="150" r="13" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M246 163 Q260 155 274 163 L268 200 Q260 207 252 200 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.4" />
      <circle cx="205" cy="220" r="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <path d="M195 212 L215 212 L212 228 L198 228 Z" fill={dark} opacity="0.5" />
    </g>
  );
};

const LingalaIdiomaMusical: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M148 118 Q148 100 148 90 M148 90 Q158 88 158 96 Q158 104 148 104" fill="none" stroke={dark} strokeWidth="2.5" />
      <circle cx="144" cy="118" r="4" fill={dark} />
      <path d="M270 140 L270 115 M280 138 L280 113 M270 115 L280 113" stroke={dark} strokeWidth="2.5" fill="none" />
      <circle cx="266" cy="140" r="4" fill={dark} />
      <circle cx="276" cy="138" r="4" fill={dark} />
      <path d="M150 130 Q135 122 138 105 Q120 112 122 130 Q130 145 150 140 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <path d="M260 150 Q278 142 278 122 Q296 130 292 150 Q282 165 260 158 Z" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <ellipse cx="205" cy="150" rx="24" ry="30" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <rect x="200" y="178" width="10" height="45" fill="#5C5C5C" />
      <ellipse cx="205" cy="228" rx="30" ry="8" fill="#5C5C5C" opacity="0.7" />
    </g>
  );
};

export const democraticRepublicOfTheCongoIllustrations: Record<string, IllustrationDefinition> = {
  "el-rio-mas-profundo-del-planeta-entero": { component: ElRioMasProfundoDelPlanetaEntero },
  "la-segunda-selva-mas-grande-del-mundo": { component: LaSegundaSelvaMasGrandeDelMundo },
  "el-parque-mas-viejo-de-africa-y-sus-gorilas-de-montana": { component: ElParqueMasViejoDeAfricaYSusGorilas },
  "el-lago-de-lava-mas-grande-jamas-observado": { component: ElLagoDeLavaMasGrandeJamasObservado },
  "la-rumba-que-hizo-bailar-a-toda-africa": { component: LaRumbaQueHizoBailarATodaAfrica },
  "las-telas-geometricas-tejidas-por-un-reino-real": { component: LasTelasGeometricasTejidasPorUnReinoReal },
  "las-arpas-y-tocados-de-una-corte-olvidada": { component: LasArpasYTocadosDeUnaCorteOlvidada },
  "los-primates-pacificos-que-solo-viven-aqui": { component: LosPrimatesPacificosQueSoloVivenAqui },
  "los-cazadores-que-conocen-cada-sonido-de-la-selva": { component: LosCazadoresQueConocenCadaSonidoDeLaSelva },
  "el-pan-de-mandioca-que-envuelve-cada-comida": { component: ElPanDeMandiocaQueEnvuelveCadaComida },
  "rumble-in-the-jungle-1974": { component: RumbleInTheJungle1974 },
  "la-sape-kinshasa": { component: LaSapeKinshasa },
  "pavo-real-del-congo": { component: PavoRealDelCongo },
  "cobalto-congoleno": { component: CobaltoCongoleno },
  "pintura-popular-congolena-cheri-samba": { component: PinturaPopularCongolenaCheriSamba },
  "patrice-lumumba-independencia": { component: PatriceLumumbaIndependencia },
  "parque-garamba-rinocerontes": { component: ParqueGarambaRinocerontes },
  "lukasa-memoria-luba": { component: LukasaMemoriaLuba },
  "zaire-mundial-1974": { component: ZaireMundial1974 },
  "lingala-idioma-musical": { component: LingalaIdiomaMusical },
};
