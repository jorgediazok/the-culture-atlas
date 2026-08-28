import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const LosTemplosMasViejosQueLasPiramidesYStonehenge: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 Q100 200 140 190 L270 190 Q310 200 310 250 Z" fill="#E8DCC0" opacity="0.4" />
      {[[120, 220], [155, 205], [190, 195], [225, 195], [260, 205], [295, 220]].map(([x, y], i) => (
        <rect key={x} x={x - 12} y={y} width="24" height={250 - y} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      ))}
    </g>
  );
};

const LaValetaLaCiudadConstruidaPorCaballeros: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L90 190 L130 160 L170 190 L170 160 L210 190 L210 160 L250 190 L250 160 L290 190 L320 190 L320 250 Z" fill="#E8C078" stroke={dark} strokeWidth="3" />
      <rect x="150" y="200" width="30" height="50" fill={accentColor} opacity="0.6" />
      <rect x="240" y="200" width="30" height="50" fill={accentColor} opacity="0.6" />
    </g>
  );
};

const ElUnicoIdiomaSemiticoOficialDeLaUnionEuropea: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="110" y="130" width="200" height="80" rx="6" fill="#F5F0E6" stroke={dark} strokeWidth="3.5" />
      <line x1="130" y1="155" x2="290" y2="155" stroke={accentColor} strokeWidth="6" opacity="0.85" />
      <line x1="130" y1="180" x2="260" y2="180" stroke={dark} strokeWidth="5" opacity="0.5" />
      <path d="M150 210 L150 250 L260 250 L260 210 L205 190 Z" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const LasLuzzuLosBotesConOjosPintados: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="245" rx="115" ry="8" fill="#1B5E7A" opacity="0.5" />
      <path d="M110 230 Q110 190 150 185 L260 185 Q300 190 300 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="160" cy="205" r="14" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="160" cy="205" r="6" fill="#1A1A1A" />
      <circle cx="250" cy="205" r="14" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <circle cx="250" cy="205" r="6" fill="#1A1A1A" />
      <rect x="195" y="140" width="6" height="45" fill="#8B5A2B" />
      <path d="M201 145 L240 165 L201 175 Z" fill="#F5F0E6" opacity="0.9" />
    </g>
  );
};

const ElGranSitioDe1565LaBatallaQueDefinioAMalta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 250 L100 170 L130 170 L130 150 L160 150 L160 170 L250 170 L250 150 L280 150 L280 170 L310 170 L310 250 Z" fill="#E8C078" stroke={dark} strokeWidth="3" />
      <rect x="180" y="190" width="50" height="60" fill={dark} opacity="0.4" />
      <path d="M195 130 L195 100 M205 130 L205 100 M215 130 L215 100" stroke={accentColor} strokeWidth="6" opacity="0.6" />
    </g>
  );
};

const LaUnicaIslaCondecoradaPorUnRey: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="90" width="230" height="160" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <rect x="90" y="90" width="90" height="70" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="118" y="105" width="34" height="34" fill="#8B8378" stroke="#5C5850" strokeWidth="3" />
      <rect x="126" y="98" width="18" height="48" fill="#8B8378" stroke="#5C5850" strokeWidth="3" />
    </g>
  );
};

const MdinaLaCiudadSilenciosaSinAutos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L110 130 L170 130 L170 250 Z" fill="#E8C078" stroke={dark} strokeWidth="3" />
      <path d="M320 250 L300 130 L240 130 L240 250 Z" fill="#DCB264" stroke={dark} strokeWidth="3" />
      <rect x="170" y="230" width="70" height="20" fill="#B8A484" opacity="0.5" />
      <rect x="140" y="170" width="16" height="24" fill={accentColor} opacity="0.6" />
      <rect x="255" y="170" width="16" height="24" fill={accentColor} opacity="0.6" />
    </g>
  );
};

const ElTemploSubterraneoDescubiertoPorAccidente: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 130 L320 130 L320 250 L90 250 Z" fill="#4A2C2A" opacity="0.15" />
      <ellipse cx="150" cy="180" rx="45" ry="30" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <ellipse cx="260" cy="210" rx="50" ry="32" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M195 180 Q220 195 220 210" stroke={dark} strokeWidth="4" fill="none" />
      <circle cx="150" cy="180" r="10" fill={accentColor} opacity="0.7" />
    </g>
  );
};

const FenkataElPlatoDeConejoQueMarcoLaResistencia: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 190 L260 190 L250 240 Q250 250 240 250 L170 250 Q160 250 160 240 Z" fill="#5C3A21" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="190" rx="55" ry="14" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <path d="M150 190 L130 175 M260 190 L280 175" stroke="#3E2A1A" strokeWidth="5" strokeLinecap="round" fill="none" />
      {[180, 205, 230].map((x) => (
        <circle key={x} cx={x} cy="195" r="8" fill={accentColor} opacity="0.7" />
      ))}
    </g>
  );
};

const MaltaElCruceDeCivilizacionesDelMediterraneo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 240 Q110 200 140 180 Q160 165 190 175 Q220 160 250 175 Q290 185 290 220 Q290 240 260 245 Q200 255 150 248 Q125 245 120 240 Z" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <rect x="150" y="140" width="18" height="35" fill={accentColor} opacity="0.7" />
      <rect x="195" y="120" width="18" height="55" fill={tint(accentColor, 0.3)} opacity="0.7" />
      <rect x="240" y="150" width="18" height="25" fill={dark} opacity="0.5" />
    </g>
  );
};

const ElCarnavalDeMaltaUnaTradicionDe1535: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* mask face */}
      <path d="M155 130 Q205 105 255 130 Q265 175 240 210 Q205 235 170 210 Q145 175 155 130 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="180" cy="160" rx="12" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <ellipse cx="230" cy="160" rx="12" ry="18" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M190 195 Q205 205 220 195" fill="none" stroke={dark} strokeWidth="3" />
      {/* plume on top */}
      <path d="M205 105 Q195 80 205 55 Q215 80 205 105 Z" fill="#D4A017" stroke={dark} strokeWidth="2" />
      {/* streamers */}
      <path d="M120 220 Q100 200 110 175" stroke="#F4A300" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M290 220 Q310 200 300 175" stroke="#0E7C86" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* confetti */}
      {[[120, 140], [290, 150], [140, 235], [270, 235]].map(([x, y]) => (
        <circle key={x as number} cx={x} cy={y} r="5" fill={tint(accentColor, 0.4)} />
      ))}
    </g>
  );
};

const ElHalconMaltesElTributoAnualAUnRey: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {/* leather glove/perch */}
      <path d="M150 250 L150 220 Q150 210 165 210 L245 210 Q260 210 260 220 L260 250 Z" fill="#8B5A2B" stroke={dark} strokeWidth="3" />
      {/* falcon body and head */}
      <ellipse cx="205" cy="175" rx="28" ry="38" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="140" r="18" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M223 140 L240 145 L223 150 Z" fill="#D4A017" />
      <circle cx="212" cy="136" r="2.5" fill="#1A1A1A" />
      <path d="M180 165 Q160 175 155 195 M230 165 Q250 175 255 195" stroke={dark} strokeWidth="4" fill="none" opacity="0.6" />
      {/* scroll */}
      <rect x="270" y="220" width="35" height="14" rx="7" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaSacraInfermeriaElHospitalMasAvanzadoDeEuropa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="100" y="150" width="220" height="20" fill={dark} opacity="0.3" />
      {[120, 200, 280].map((x) => (
        <rect key={x} x={x} y="170" width="60" height="30" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      ))}
      {[120, 200, 280].map((x) => (
        <rect key={`p-${x}`} x={x + 5} y="160" width="50" height="12" fill="#F5F0E6" stroke={dark} strokeWidth="1.5" />
      ))}
      {/* silver plate */}
      <ellipse cx="205" cy="225" rx="35" ry="12" fill="#B0B4B8" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="222" rx="25" ry="8" fill="#D8DADC" />
    </g>
  );
};

const LaVentanaAzulElArcoDePiedraQueDesaparecio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q205 235 320 250 L320 255 L90 255 Z" fill="#1F6FA5" opacity="0.5" />
      <path d="M130 250 L130 160 Q130 145 150 145 L165 145 L165 250 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M280 250 L280 160 Q280 145 260 145 L245 145 L245 250 Z" fill={tint(accentColor, 0.15)} stroke={dark} strokeWidth="3" />
      <path d="M165 145 Q205 110 245 145" fill="none" stroke={accentColor} strokeWidth="20" strokeLinecap="round" />
      <path d="M120 230 Q150 225 180 235" stroke="#F5F0E6" strokeWidth="3" opacity="0.6" fill="none" />
    </g>
  );
};

const IlFestaLosFuegosArtificialesDeCadaPueblo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const bursts: [number, number][] = [
    [130, 110],
    [280, 120],
    [100, 170],
  ];
  return (
    <g>
      <rect x="185" y="180" width="40" height="70" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="180,180 205,150 230,180" fill={dark} />
      <rect x="198" y="200" width="14" height="30" fill={dark} opacity="0.5" />
      {/* fireworks bursts */}
      {bursts.map(([x, y], i) => (
        <g key={x}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1={x} y1={y} x2={x} y2={y - 16} stroke={i % 2 === 0 ? "#F4A300" : "#0E7C86"} strokeWidth="3" strokeLinecap="round" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
    </g>
  );
};

export const maltaIllustrations: Record<string, IllustrationDefinition> = {
  "los-templos-mas-viejos-que-las-piramides-y-stonehenge": { component: LosTemplosMasViejosQueLasPiramidesYStonehenge },
  "la-valeta-la-ciudad-construida-por-caballeros": { component: LaValetaLaCiudadConstruidaPorCaballeros },
  "el-unico-idioma-semitico-oficial-de-la-union-europea": { component: ElUnicoIdiomaSemiticoOficialDeLaUnionEuropea },
  "las-luzzu-los-botes-con-ojos-pintados": { component: LasLuzzuLosBotesConOjosPintados },
  "el-gran-sitio-de-1565-la-batalla-que-definio-a-malta": { component: ElGranSitioDe1565LaBatallaQueDefinioAMalta },
  "la-unica-isla-condecorada-por-un-rey": { component: LaUnicaIslaCondecoradaPorUnRey },
  "mdina-la-ciudad-silenciosa-sin-autos": { component: MdinaLaCiudadSilenciosaSinAutos },
  "el-templo-subterraneo-descubierto-por-accidente": { component: ElTemploSubterraneoDescubiertoPorAccidente },
  "fenkata-el-plato-de-conejo-que-marco-la-resistencia": { component: FenkataElPlatoDeConejoQueMarcoLaResistencia },
  "malta-el-cruce-de-civilizaciones-del-mediterraneo": { component: MaltaElCruceDeCivilizacionesDelMediterraneo },
  "el-carnaval-de-malta-una-tradicion-de-1535": { component: ElCarnavalDeMaltaUnaTradicionDe1535 },
  "el-halcon-maltes-el-tributo-anual-a-un-rey": { component: ElHalconMaltesElTributoAnualAUnRey },
  "la-sacra-infermeria-el-hospital-mas-avanzado-de-europa": { component: LaSacraInfermeriaElHospitalMasAvanzadoDeEuropa },
  "la-ventana-azul-el-arco-de-piedra-que-desaparecio": { component: LaVentanaAzulElArcoDePiedraQueDesaparecio },
  "il-festa-los-fuegos-artificiales-de-cada-pueblo": { component: IlFestaLosFuegosArtificialesDeCadaPueblo },
};
