import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BelovezhskayaPushchaBosquePrimigenio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[130, 60], [180, 80], [230, 55], [280, 75]].map(([x, h], i) => (
        <g key={x as number}>
          <rect x={(x as number) - 6} y={250 - (h as number)} width="12" height={h} fill="#5C4A3A" />
          <polygon points={`${x},${190 - (h as number)} ${(x as number) + 26},${250 - (h as number)} ${(x as number) - 26},${250 - (h as number)}`} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
        </g>
      ))}
      <path d="M90 230 Q205 245 320 230" fill="none" stroke="#F5F0E6" strokeWidth="10" opacity="0.15" />
    </g>
  );
};

const BisonteEuropeoSalvadoDeLaExtincion: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 250 L120 210 Q120 165 165 150 Q220 135 270 155 Q300 165 295 195 L290 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M135 175 Q95 168 82 195 Q76 218 100 222 Q122 218 132 195 Z" fill={dark} opacity="0.85" />
      <path d="M100 205 Q88 225 93 245 Q104 250 112 240 Q108 220 100 205 Z" fill={dark} opacity="0.6" />
      <path d="M115 175 Q95 165 80 172" fill="none" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <path d="M122 180 Q108 172 96 180" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
      <circle cx="100" cy="197" r="4" fill="#1A1A1A" />
      <rect x="140" y="215" width="16" height="35" fill={dark} />
      <rect x="180" y="200" width="16" height="50" fill={dark} />
      <rect x="250" y="195" width="14" height="40" fill={dark} opacity="0.85" />
      <rect x="278" y="205" width="14" height="35" fill={dark} opacity="0.85" />
      <path d="M292 195 Q305 205 298 220" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ChernobilLaMayorParteCayoEnBielorrusia: IllustrationComponent = () => (
  <g>
    <rect x="150" y="200" width="110" height="45" fill="#5C4A3A" opacity="0.7" />
    <polygon points="205,90 235,150 175,150" fill="none" stroke="#F4A300" strokeWidth="4" />
    <circle cx="205" cy="130" r="6" fill="#F4A300" />
    <path d="M205 100 L205 118 M195 135 L211 135 M199 138 L188 128 M211 138 L222 128" stroke="#F4A300" strokeWidth="3" />
    <rect x="170" y="220" width="15" height="25" fill="#3E2712" />
    <rect x="225" y="215" width="15" height="30" fill="#3E2712" />
  </g>
);

const FortalezaDeBrestLaFortalezaHeroe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 250 L130 180 L155 180 L150 210 L175 210 L170 175 L195 175 L200 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M215 250 L220 170 L245 170 L240 205 L265 205 L260 180 L285 180 L290 250 Z" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <path d="M205 175 L200 130 L215 130 Z" fill={dark} />
      <path d="M215 130 Q235 132 235 145 L215 142 Z" fill="#B71C1C" />
    </g>
  );
};

const KhatynMemorialALasAldeasQuemadas: IllustrationComponent = () => (
  <g>
    <rect x="185" y="120" width="40" height="90" fill="#4A4A4A" />
    <ellipse cx="205" cy="115" rx="24" ry="14" fill="#6B6355" stroke="#3A3A3A" strokeWidth="2" />
    <path d="M195 130 L205 155 L215 130" fill="none" stroke="#3A3A3A" strokeWidth="2.5" />
    <path d="M90 240 L320 240" stroke="#8B7355" strokeWidth="3" opacity="0.5" />
    {[140, 175, 245, 280].map((x) => (
      <rect key={x} x={x - 8} y="220" width="16" height="20" fill="#5C4A3A" opacity="0.5" />
    ))}
  </g>
);

const CinturonesDeSlutskUnSimboloNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="150" width="200" height="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="110" y="150" width="200" height="30" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="8 4" />
      {[130, 165, 200, 235, 270].map((x, i) => (
        <polygon key={x} points={`${x},155 ${x + 8},165 ${x},175 ${x - 8},165`} fill={i % 2 === 0 ? "#D4AF37" : "#F5F0E6"} />
      ))}
      <path d="M110 180 L100 210 M310 180 L320 210" stroke={dark} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const VytinankaArteDelPapelRecortado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="110" width="110" height="130" fill="#3D8FB0" opacity="0.25" />
      <path d="M205 130 L215 155 L240 155 L220 172 L228 197 L205 182 L182 197 L190 172 L170 155 L195 155 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="205" cy="163" r="10" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const DranikiElPlatoNacional: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="70" ry="16" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      {[[160, 200], [205, 195], [250, 202]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="30" ry="12" fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
      <ellipse cx="205" cy="188" rx="14" ry="7" fill="#F5F0E6" opacity="0.9" />
    </g>
  );
};

const MinskReconstruidaDesdeLosEscombros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 240 Q205 250 320 240 L320 246 L100 246 Z" fill={dark} opacity="0.4" />
      {[[140, 100], [190, 130], [240, 95], [285, 120]].map(([x, h], i) => (
        <rect key={x as number} x={(x as number) - 20} y={240 - (h as number)} width="40" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      ))}
      <path d="M120 240 L300 240" stroke="#F5F0E6" strokeWidth="4" opacity="0.5" />
    </g>
  );
};

const GranDucadoDeLituaniaCorazonBelaruso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M190 240 L190 130 L220 130 L220 240 Z" fill="#B0B8BF" stroke={dark} strokeWidth="2.5" />
      <polygon points="175,145 205,110 235,145" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="175" y="145" width="15" height="55" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2" />
      <path d="M140 220 Q170 205 195 220 L190 240 L145 240 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <line x1="150" y1="222" x2="182" y2="222" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

export const belarusIllustrations: Record<string, IllustrationDefinition> = {
  "belovezhskaya-pushcha-bosque-primigenio": { component: BelovezhskayaPushchaBosquePrimigenio },
  "bisonte-europeo-salvado-de-la-extincion": { component: BisonteEuropeoSalvadoDeLaExtincion },
  "chernobil-la-mayor-parte-cayo-en-bielorrusia": { component: ChernobilLaMayorParteCayoEnBielorrusia },
  "fortaleza-de-brest-la-fortaleza-heroe": { component: FortalezaDeBrestLaFortalezaHeroe },
  "khatyn-memorial-a-las-aldeas-quemadas": { component: KhatynMemorialALasAldeasQuemadas },
  "cinturones-de-slutsk-un-simbolo-nacional": { component: CinturonesDeSlutskUnSimboloNacional },
  "vytinanka-arte-del-papel-recortado": { component: VytinankaArteDelPapelRecortado },
  "draniki-el-plato-nacional": { component: DranikiElPlatoNacional },
  "minsk-reconstruida-desde-los-escombros": { component: MinskReconstruidaDesdeLosEscombros },
  "gran-ducado-de-lituania-corazon-belaruso": { component: GranDucadoDeLituaniaCorazonBelaruso },
};
