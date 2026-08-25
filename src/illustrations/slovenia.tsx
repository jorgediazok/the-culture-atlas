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
      <path d="M90 250 L90 190 Q130 160 160 185 Q185 145 215 180 Q250 150 280 185 Q305 165 320 190 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="150" cy="220" rx="34" ry="20" fill="#2E241A" opacity="0.65" />
      <ellipse cx="150" cy="214" rx="26" ry="14" fill="#4A3A28" opacity="0.5" />
      <ellipse cx="250" cy="228" rx="28" ry="17" fill="#2E241A" opacity="0.6" />
      <ellipse cx="250" cy="223" rx="20" ry="11" fill="#4A3A28" opacity="0.45" />
      <path d="M110 200 Q120 185 135 195 M270 195 Q282 180 298 192" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.4" />
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

const KurentovanjeElCarnavalQueEspantaAlInvierno: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="130" r="26" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="3" />
      <path d="M182 115 Q160 104 149 117 Q168 121 181 129 Z" fill={dark} />
      <path d="M228 115 Q250 104 261 117 Q242 121 229 129 Z" fill={dark} />
      <circle cx="195" cy="124" r="3.5" fill="#1A1A1A" />
      <circle cx="215" cy="124" r="3.5" fill="#1A1A1A" />
      <ellipse cx="205" cy="144" rx="13" ry="8" fill={dark} opacity="0.75" />
      <polygon
        points="165,250 150,210 172,222 155,178 180,196 168,150 190,134 205,135 220,134 242,150 230,196 255,178 232,222 250,210 245,250"
        fill={accentColor}
        stroke={dark}
        strokeWidth="2.5"
      />
      {[172, 188, 205, 222, 238].map((x) => (
        <circle key={x} cx={x} cy="228" r="6" fill="#D4AF37" stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M172 248 L158 232" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <path d="M238 248 L252 232" stroke={dark} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const LipicaCunaDelCaballoLipizzano: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const white = "#F5F0E6";
  return (
    <g>
      <path d="M90 248 Q205 232 320 248 L320 252 L90 252 Z" fill="#8FA85C" opacity="0.55" />
      <path d="M140 180 Q105 165 92 130 Q80 118 88 115 Q100 135 118 158 Q135 172 143 195 Z" fill={white} stroke={dark} strokeWidth="2.5" />
      <path d="M225 185 Q260 165 280 135 Q290 122 283 116 Q268 130 250 155 Q235 172 222 195 Z" fill={white} stroke={dark} strokeWidth="3" />
      <ellipse cx="185" cy="190" rx="68" ry="30" fill={white} stroke={dark} strokeWidth="3" />
      <path d="M283 116 L297 106 L291 121 Z" fill={dark} />
      <circle cx="272" cy="132" r="3" fill="#1A1A1A" />
      <path d="M255 148 Q266 143 277 150 M245 160 Q256 154 267 161 M235 172 Q246 166 257 173" stroke={dark} strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M150 200 L136 248" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      <path d="M172 202 L168 250" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      <path d="M200 202 L218 248" stroke={dark} strokeWidth="9" strokeLinecap="round" />
      <path d="M222 198 L246 236" stroke={dark} strokeWidth="9" strokeLinecap="round" />
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
  "kurentovanje-el-carnaval-que-espanta-al-invierno": { component: KurentovanjeElCarnavalQueEspantaAlInvierno },
  "lipica-cuna-del-caballo-lipizzano": { component: LipicaCunaDelCaballoLipizzano },
};
