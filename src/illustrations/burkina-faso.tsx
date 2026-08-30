import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElFestivalDeCineMasGrandeDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="220" width="230" height="20" fill="#8B1A1A" opacity="0.7" />
      <circle cx="205" cy="150" r="30" fill="#3A3A3A" stroke={dark} strokeWidth="2.6" />
      <circle cx="205" cy="150" r="10" fill={accentColor} />
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const positions: [number, number][] = [
          [205, 128],
          [223, 141],
          [216, 163],
          [194, 163],
          [187, 141],
        ];
        const [px, py] = positions[i];
        return <circle key={deg} cx={px} cy={py} r="5" fill="#8C8C8C" />;
      })}
      <rect x="200" y="180" width="10" height="45" fill="#3A3A3A" />
      <ellipse cx="205" cy="228" rx="30" ry="8" fill="#8C8C74" opacity="0.6" />
    </g>
  );
};

const LasRuinasDePiedraDeUnaRutaDelOroOlvidada: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 240 L100 160 L140 160 L140 200 L170 200 L170 150 L210 150 L210 195 L245 195 L245 155 L290 155 L290 240 Z" fill={accentColor} stroke={dark} strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M100 240 L100 160 L140 160 L140 200 L170 200 L170 150" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
      {[[115, 200], [180, 220], [255, 210]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#2F6B3A" opacity="0.6" />
      ))}
      <rect x="90" y="240" width="230" height="8" fill="#8B5A2B" opacity="0.5" />
    </g>
  );
};

const LasAgujasDePiedraQueSeElevanDelBosque: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="200" width="230" height="50" fill="#2F6B3A" opacity="0.3" />
      <polygon points="130,240 145,120 160,240" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <polygon points="175,240 195,90 215,240" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="2.8" />
      <polygon points="235,240 255,140 275,240" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M195 90 L195 130" stroke="#F5F0E6" strokeWidth="3" opacity="0.4" />
    </g>
  );
};

const LasMascarasDeMaderaMasAltasQueUnaPersona: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M180 240 L180 100 Q205 85 230 100 L230 240 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="187" y={110 + i * 30} width="26" height="12" fill={i % 2 === 0 ? "#C1272D" : "#1A1A1A"} />
      ))}
      <circle cx="205" cy="150" r="4" fill="#1A1A1A" />
      <circle cx="205" cy="210" r="4" fill="#C1272D" />
      <line x1="205" y1="240" x2="205" y2="250" stroke="#3A2418" strokeWidth="6" />
    </g>
  );
};

const LaMezquitaDeBarroConEspinasDeMadera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="120" y="170" width="170" height="70" fill={accentColor} stroke={dark} strokeWidth="2.8" />
      <polygon points="150,170 165,110 180,170" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.4" />
      <polygon points="225,170 240,95 255,170" fill={tint(accentColor, 0.1)} stroke={dark} strokeWidth="2.6" />
      {[120, 135, 150, 165].map((y) => (
        <g key={y}>
          <line x1="155" y1={y} x2="175" y2={y} stroke="#5C3A21" strokeWidth="3" />
          <line x1="230" y1={y - 25} x2="250" y2={y - 25} stroke="#5C3A21" strokeWidth="3" />
        </g>
      ))}
      <rect x="90" y="240" width="230" height="8" fill="#8C7B6B" opacity="0.5" />
    </g>
  );
};

const ElReyQueCadaViernesFingePartirALaGuerra: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="16" fill="#3A2418" stroke={dark} strokeWidth="2.2" />
      <path d="M180 155 Q205 145 230 155 L225 235 Q205 245 185 235 Z" fill="#C1272D" stroke="#7A1818" strokeWidth="2.6" />
      <rect x="195" y="115" width="20" height="10" fill="#C9A227" opacity="0.85" />
      <line x1="230" y1="170" x2="270" y2="150" stroke="#3A2418" strokeWidth="7" strokeLinecap="round" />
      <polygon points="265,148 285,140 280,158" fill="#8C8C8C" stroke={dark} strokeWidth="1.8" />
      <circle cx="140" cy="180" r="10" fill="#3A2418" opacity="0.8" />
      <rect x="130" y="190" width="20" height="30" fill={accentColor} opacity="0.8" />
    </g>
  );
};

const ElInstrumentoDeMaderaQueSuenaComoLluvia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 210 L300 190" stroke="#5C3A21" strokeWidth="18" strokeLinecap="round" />
      {[120, 155, 190, 225, 260, 290].map((x, i) => (
        <ellipse key={x} cx={x} cy={225 + i * 1.5} rx="12" ry="16" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
      <line x1="140" y1="170" x2="170" y2="200" stroke="#3A2418" strokeWidth="5" strokeLinecap="round" />
      <line x1="230" y1="160" x2="200" y2="192" stroke="#3A2418" strokeWidth="5" strokeLinecap="round" />
      <circle cx="140" cy="165" r="6" fill="#8B5A2B" />
      <circle cx="230" cy="155" r="6" fill="#8B5A2B" />
    </g>
  );
};

const ElPaisQueEligioUnNombrePropioEn1984: IllustrationComponent = ({ accentColor }) => {
  return (
    <g>
      <circle cx="170" cy="205" r="26" fill="none" stroke="#3A3A3A" strokeWidth="6" />
      <circle cx="240" cy="205" r="26" fill="none" stroke="#3A3A3A" strokeWidth="6" />
      <line x1="196" y1="205" x2="214" y2="205" stroke="#3A3A3A" strokeWidth="6" />
      <path d="M175 180 L205 130 L235 180" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="200" y="130" width="8" height="6" fill="#8B5A2B" />
      <rect x="90" y="240" width="230" height="8" fill="#5C3A21" opacity="0.5" />
    </g>
  );
};

const LaPastaDeMijoQueAcompanaCadaComida: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="160" cy="215" rx="55" ry="16" fill="#5C5C5C" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="160" cy="205" rx="42" ry="24" fill="#F5F0E6" stroke={dark} strokeWidth="2.4" />
      <circle cx="260" cy="195" r="35" fill="#5C5C5C" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="260" cy="188" rx="26" ry="14" fill="#2F6B3A" opacity="0.85" />
      <path d="M240 180 Q260 170 280 180" fill="none" stroke={tint(accentColor, 0.2)} strokeWidth="3" opacity="0.7" />
    </g>
  );
};

const LaReservaDondeLosElefantesCruzanElCamino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="230" width="230" height="20" fill="#1B5E7A" opacity="0.4" />
      <path d="M150 235 Q145 190 175 175 Q205 165 230 178 Q255 190 250 235 Z" fill="#5C5C5C" stroke={dark} strokeWidth="2.6" />
      <path d="M245 190 Q265 195 260 220 Q255 230 245 225" fill="none" stroke="#5C5C5C" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="180" cy="175" rx="16" ry="12" fill="#5C5C5C" stroke={dark} strokeWidth="2.2" />
      <polygon points="170,168 158,158 165,175" fill="#5C5C5C" stroke={dark} strokeWidth="1.8" />
      <line x1="165" y1="230" x2="162" y2="245" stroke={dark} strokeWidth="5" />
      <line x1="235" y1="230" x2="238" y2="245" stroke={dark} strokeWidth="5" />
    </g>
  );
};

const FasoDanFaniTelaSankara: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  const STRIPES = [120, 138, 156, 174, 192];
  return (
    <g>
      <rect x="110" y="110" width="10" height="120" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
      <rect x="290" y="110" width="10" height="120" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2" />
      <rect x="105" y="105" width="200" height="10" fill={wood} />
      <rect x="105" y="225" width="200" height="10" fill={wood} />
      {STRIPES.map((y, i) => (
        <rect key={y} x="130" y={y} width="150" height="14" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="1.5" />
      ))}
      <rect x="200" y="120" width="8" height="100" fill="#F5F0E6" opacity="0.7" />
    </g>
  );
};

const DoloCervezaDeMijo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const clay = "#8B5A2B";
  return (
    <g>
      <path d="M150 235 Q145 175 175 165 Q205 155 235 165 Q265 175 260 235 Z" fill={clay} stroke={shade(clay, 0.3)} strokeWidth="3" />
      <ellipse cx="205" cy="165" rx="55" ry="14" fill={shade(clay, 0.15)} stroke={shade(clay, 0.3)} strokeWidth="2.4" />
      <path d="M180 155 Q175 130 190 110 M205 152 Q205 125 205 100 M230 155 Q235 130 220 110" fill="none" stroke="#D9D0C0" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="120" cy="230" rx="18" ry="10" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="120" cy="222" rx="14" ry="6" fill={shade(accentColor, 0.2)} />
      <ellipse cx="290" cy="230" rx="18" ry="10" fill={accentColor} stroke={dark} strokeWidth="2.2" />
      <ellipse cx="290" cy="222" rx="14" ry="6" fill={shade(accentColor, 0.2)} />
    </g>
  );
};

const TourDuFasoCiclismo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <path d="M90 245 Q205 235 320 245" stroke={dark} strokeWidth="3" opacity="0.4" fill="none" />
      <circle cx="150" cy="220" r="26" fill="none" stroke="#3A3A3A" strokeWidth="6" />
      <circle cx="245" cy="220" r="26" fill="none" stroke="#3A3A3A" strokeWidth="6" />
      <line x1="150" y1="220" x2="195" y2="180" stroke="#3A3A3A" strokeWidth="5" />
      <line x1="195" y1="180" x2="245" y2="220" stroke="#3A3A3A" strokeWidth="5" />
      <line x1="195" y1="180" x2="175" y2="220" stroke="#3A3A3A" strokeWidth="5" />
      <line x1="150" y1="220" x2="215" y2="205" stroke="#3A3A3A" strokeWidth="5" />
      <circle cx="200" cy="150" r="14" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M185 168 Q200 158 215 168 L205 195 L188 195 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M188 175 Q170 185 175 205" fill="none" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="205" y1="195" x2="215" y2="205" stroke={skin} strokeWidth="7" strokeLinecap="round" />
      <line x1="260" y1="140" x2="285" y2="115" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M280 105 L300 100 L300 130 L280 120 Z" fill={accentColor} stroke={dark} strokeWidth="1.8" />
    </g>
  );
};

const LagoTengrelaHipopotamos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const hippo = "#6B7B7A";
  return (
    <g>
      <rect x="90" y="190" width="230" height="60" fill={accentColor} opacity="0.35" />
      <path d="M120 225 Q205 205 290 225 L275 240 Q205 225 135 240 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.6" />
      <ellipse cx="150" cy="215" rx="10" ry="7" fill={hippo} stroke={shade(hippo, 0.3)} strokeWidth="2" />
      <circle cx="245" cy="205" r="24" fill={hippo} stroke={shade(hippo, 0.3)} strokeWidth="2.6" />
      <ellipse cx="234" cy="198" rx="4" ry="3" fill="#1A1A1A" />
      <ellipse cx="256" cy="198" rx="4" ry="3" fill="#1A1A1A" />
      <ellipse cx="234" cy="190" rx="3" ry="2.5" fill={hippo} stroke={shade(hippo, 0.3)} strokeWidth="1.5" />
      <ellipse cx="256" cy="190" rx="3" ry="2.5" fill={hippo} stroke={shade(hippo, 0.3)} strokeWidth="1.5" />
    </g>
  );
};

const AugeDelOroBurkines: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  const sand = "#D9BE8F";
  return (
    <g>
      <ellipse cx="150" cy="235" rx="45" ry="12" fill={sand} opacity="0.6" />
      <ellipse cx="270" cy="240" rx="35" ry="10" fill={sand} opacity="0.6" />
      <circle cx="205" cy="150" r="14" fill={skin} stroke={dark} strokeWidth="2" />
      <path d="M190 168 Q205 155 220 168 L215 200 Q205 208 195 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.4" />
      <path d="M192 180 Q160 195 155 215" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M218 180 Q245 195 250 215" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="200" cy="220" rx="45" ry="14" fill="#8B5A2B" stroke={shade("#8B5A2B", 0.3)} strokeWidth="2.4" />
      <circle cx="185" cy="218" r="4" fill="#D4A017" />
      <circle cx="205" cy="222" r="4" fill="#D4A017" />
      <circle cx="220" cy="216" r="4" fill="#D4A017" />
    </g>
  );
};

export const burkinaFasoIllustrations: Record<string, IllustrationDefinition> = {
  "el-festival-de-cine-mas-grande-de-africa": { component: ElFestivalDeCineMasGrandeDeAfrica },
  "las-ruinas-de-piedra-de-una-ruta-del-oro-olvidada": { component: LasRuinasDePiedraDeUnaRutaDelOroOlvidada },
  "las-agujas-de-piedra-que-se-elevan-del-bosque": { component: LasAgujasDePiedraQueSeElevanDelBosque },
  "las-mascaras-de-madera-mas-altas-que-una-persona": { component: LasMascarasDeMaderaMasAltasQueUnaPersona },
  "la-mezquita-de-barro-con-espinas-de-madera": { component: LaMezquitaDeBarroConEspinasDeMadera },
  "el-rey-que-cada-viernes-finge-partir-a-la-guerra": { component: ElReyQueCadaViernesFingePartirALaGuerra },
  "el-instrumento-de-madera-que-suena-como-lluvia": { component: ElInstrumentoDeMaderaQueSuenaComoLluvia },
  "el-pais-que-eligio-un-nombre-propio-en-1984": { component: ElPaisQueEligioUnNombrePropioEn1984 },
  "la-pasta-de-mijo-que-acompana-cada-comida": { component: LaPastaDeMijoQueAcompanaCadaComida },
  "la-reserva-donde-los-elefantes-cruzan-el-camino": { component: LaReservaDondeLosElefantesCruzanElCamino },
  "faso-dan-fani-tela-sankara": { component: FasoDanFaniTelaSankara },
  "dolo-cerveza-de-mijo": { component: DoloCervezaDeMijo },
  "tour-du-faso-ciclismo": { component: TourDuFasoCiclismo },
  "lago-tengrela-hipopotamos": { component: LagoTengrelaHipopotamos },
  "auge-del-oro-burkines": { component: AugeDelOroBurkines },
};
