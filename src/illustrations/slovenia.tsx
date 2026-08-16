import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LagoDeBledLaIslaConIglesia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="110" ry="30" fill="#3D8FB0" opacity="0.6" />
      <ellipse cx="205" cy="215" rx="35" ry="14" fill="#2E6B5E" stroke={dark} strokeWidth="2" />
      <rect x="195" y="190" width="20" height="25" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <polygon points="195,190 215,190 205,175" fill="#B71C1C" />
      <path d="M270 210 L280 160 L300 160 L310 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const CuevaDePostojnaTrenSubterraneo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 230 320 250 L320 130 Q205 150 90 130 Z" fill="#2E4A3E" opacity="0.35" />
      <rect x="170" y="195" width="70" height="35" rx="8" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="185" cy="235" r="9" fill={dark} />
      <circle cx="225" cy="235" r="9" fill={dark} />
      {[150, 260].map((x) => (
        <path key={x} d={`M${x} 200 L${x - 5} 165 M${x} 200 L${x + 5} 165`} stroke="#F5F0E6" strokeWidth="2.5" opacity="0.7" />
      ))}
    </g>
  );
};

const ElPezHumanoQueViveCienAnos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#3D8FB0" opacity="0.35" />
      <path d="M140 190 Q170 175 210 185 Q250 195 260 210 Q245 220 210 210 Q170 205 140 190 Z" fill="#F0D8C8" stroke={dark} strokeWidth="2.5" />
      <circle cx="150" cy="188" r="4" fill="#1A1A1A" opacity="0.4" />
      <line x1="180" y1="200" x2="172" y2="212" stroke="#F0D8C8" strokeWidth="4" />
      <line x1="200" y1="203" x2="196" y2="216" stroke="#F0D8C8" strokeWidth="4" />
    </g>
  );
};

const LiublianaLaCiudadDelDragon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="220" width="110" height="10" fill="#8B7355" />
      <path d="M170 220 Q160 200 175 185 Q185 195 185 210 Q195 195 210 200 Q205 212 195 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M210 195 Q225 185 235 195 Q225 200 218 205 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="178" cy="195" r="2.5" fill="#1A1A1A" />
    </g>
  );
};

const ColmenasPintadasArteApicola: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="160" y="150" width="90" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="175" y="165" width="60" height="30" fill={accentColor} opacity="0.8" />
      <path d="M185 210 Q205 200 225 210" fill="none" stroke={dark} strokeWidth="2" opacity="0.6" />
      {[[110, 130], [300, 150]].map(([x, y]) => (
        <g key={x as number}>
          <ellipse cx={x} cy={y} rx="8" ry="5" fill="#F4A300" />
          <path d="M-6 0 L6 0" stroke="#1A1A1A" strokeWidth="1.5" transform={`translate(${x} ${y})`} />
        </g>
      ))}
    </g>
  );
};

const TriglavLaMontanaEnLaBandera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 250 L165 160 L180 190 L205 130 L230 190 L245 160 L290 250 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M185 175 L205 130 L225 175 L215 175 L205 155 L195 175 Z" fill="#F5F0E6" />
    </g>
  );
};

const KarstLaPalabraQueNacioAqui: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q140 220 170 240 Q200 260 230 240 Q260 220 320 240 L320 250 L90 250 Z" fill={accentColor} opacity="0.5" stroke={dark} strokeWidth="2" />
      <ellipse cx="170" cy="235" rx="30" ry="14" fill="#2E241A" opacity="0.6" />
      <ellipse cx="255" cy="230" rx="24" ry="12" fill="#2E241A" opacity="0.5" />
    </g>
  );
};

const PiranElPuebloVeneciano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 240 320 250 L320 255 L90 255 Z" fill="#3D8FB0" opacity="0.5" />
      {[[130, 220, 40], [175, 200, 55], [220, 215, 45], [265, 205, 50]].map(([x, y, h], i) => (
        <rect key={x as number} x={(x as number) - 20} y={y as number} width="36" height={h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const LaVidMasViejaDelMundo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="130" width="110" height="120" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <path d="M170 240 Q160 200 180 175 Q170 150 190 135" fill="none" stroke="#5C4A3A" strokeWidth="6" strokeLinecap="round" />
      {[[190, 150], [175, 175], [188, 195], [172, 215]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="8" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const DondeSeCruzanCuatroMundosCulturales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="180" r="16" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M205 164 L205 130 M205 196 L205 230 M189 180 L155 180 M221 180 L255 180" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      {[[205, 125], [205, 235], [150, 180], [260, 180]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="8" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

export const sloveniaIllustrations: Record<string, IllustrationDefinition> = {
  "lago-de-bled-la-isla-con-iglesia": { component: LagoDeBledLaIslaConIglesia },
  "cueva-de-postojna-tren-subterraneo": { component: CuevaDePostojnaTrenSubterraneo },
  "el-pez-humano-que-vive-cien-anos": { component: ElPezHumanoQueViveCienAnos },
  "liubliana-la-ciudad-del-dragon": { component: LiublianaLaCiudadDelDragon },
  "colmenas-pintadas-arte-apicola": { component: ColmenasPintadasArteApicola },
  "triglav-la-montana-en-la-bandera": { component: TriglavLaMontanaEnLaBandera },
  "karst-la-palabra-que-nacio-aqui": { component: KarstLaPalabraQueNacioAqui },
  "piran-el-pueblo-veneciano": { component: PiranElPuebloVeneciano },
  "la-vid-mas-vieja-del-mundo": { component: LaVidMasViejaDelMundo },
  "donde-se-cruzan-cuatro-mundos-culturales": { component: DondeSeCruzanCuatroMundosCulturales },
};
