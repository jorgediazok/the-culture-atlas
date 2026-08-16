import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LagoDeBledLaIslaConIglesia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="220" rx="125" ry="35" fill="#3D8FB0" opacity="0.6" />
      <ellipse cx="185" cy="212" rx="48" ry="18" fill="#2E6B5E" stroke={dark} strokeWidth="2.5" />
      <rect x="170" y="175" width="30" height="38" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <polygon points="170,175 200,175 185,150" fill="#B71C1C" />
      <path d="M255 218 L270 130 L300 130 L315 218 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="278" y="150" width="14" height="20" fill={dark} opacity="0.5" />
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
      <path d="M105 195 Q150 170 210 185 Q270 198 288 218 Q265 232 210 218 Q150 210 105 195 Z" fill="#F0D8C8" stroke={dark} strokeWidth="3" />
      <circle cx="120" cy="192" r="6" fill="#1A1A1A" opacity="0.4" />
      <line x1="165" y1="208" x2="152" y2="228" stroke="#F0D8C8" strokeWidth="6" />
      <line x1="200" y1="214" x2="192" y2="234" stroke="#F0D8C8" strokeWidth="6" />
      <line x1="235" y1="216" x2="230" y2="236" stroke="#F0D8C8" strokeWidth="6" />
    </g>
  );
};

const LiublianaLaCiudadDelDragon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="225" width="200" height="18" fill="#8B7355" />
      <path d="M150 225 Q130 185 160 155 Q178 172 178 202 Q195 172 222 180 Q212 200 190 214 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M222 180 Q250 160 272 178 Q252 190 236 198 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <circle cx="164" cy="180" r="4.5" fill="#1A1A1A" />
      <path d="M150 225 Q145 200 155 190" fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ColmenasPintadasArteApicola: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="130" width="150" height="115" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="152" y="152" width="106" height="45" fill={accentColor} opacity="0.85" />
      <path d="M162 210 Q205 195 248 210" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.6" />
      {[[95, 165], [315, 190], [205, 100]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <ellipse cx={x} cy={y} rx="13" ry="8" fill="#F4A300" />
          <path d="M-9 0 L9 0" stroke="#1A1A1A" strokeWidth="2" transform={`translate(${x} ${y})`} />
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
      <rect x="110" y="105" width="190" height="145" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <path d="M150 245 Q135 190 165 155 Q150 115 180 90" fill="none" stroke="#5C4A3A" strokeWidth="9" strokeLinecap="round" />
      <path d="M165 155 Q195 165 210 145" fill="none" stroke="#5C4A3A" strokeWidth="7" strokeLinecap="round" />
      {[[180, 90], [150, 130], [172, 150], [140, 175], [200, 155], [160, 205]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="13" fill={accentColor} stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

const DondeSeCruzanCuatroMundosCulturales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="165" r="26" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M205 139 L205 90 M205 191 L205 240 M179 165 L120 165 M231 165 L290 165" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      {[[205, 82], [205, 248], [110, 165], [300, 165]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="14" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="3" />
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
