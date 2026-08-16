import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const BookOfKellsElManuscritoIluminado: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M100 130 Q170 110 205 130 L205 235 Q170 218 100 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <path d="M205 130 Q240 110 310 130 L310 235 Q240 218 205 235 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="150" cy="175" r="16" fill="none" stroke={accentColor} strokeWidth="4" />
      <circle cx="150" cy="175" r="8" fill={accentColor} />
      <path d="M255 155 Q270 165 255 180 Q270 190 255 200" fill="none" stroke="#D4AF37" strokeWidth="4" />
      {[150, 168, 186].map((y) => (
        <line key={y} x1="115" y1={y} x2="185" y2={y - 8} stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
    </g>
  );
};

const NewgrangeMasViejoQueLasPiramides: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 Q90 150 205 140 Q320 150 320 250 Z" fill="#E8DCC0" stroke={dark} strokeWidth="3" />
      <rect x="185" y="200" width="40" height="50" fill="#8B8378" stroke={dark} strokeWidth="2.5" />
      <path d="M205 100 L205 200" stroke="#F4B400" strokeWidth="10" opacity="0.7" />
      {[[130, 225], [160, 215], [250, 215], [280, 225]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const LasSesionesDeMusicaEnLosPubs: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      <ellipse cx="205" cy="230" rx="70" ry="16" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <circle cx="140" cy="150" r="14" fill={skin} />
      <path d="M126 172 Q140 160 154 172 L150 220 L130 220 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <ellipse cx="118" cy="178" rx="16" ry="9" fill="#8B5A2B" stroke={dark} strokeWidth="2" transform="rotate(-25 118 178)" />
      <line x1="100" y1="165" x2="140" y2="185" stroke="#5C3A21" strokeWidth="3" />
      <line x1="130" y1="165" x2="115" y2="195" stroke={dark} strokeWidth="2.5" />
      <circle cx="270" cy="150" r="14" fill={skin} />
      <path d="M256 172 Q270 160 284 172 L280 220 L260 220 Z" fill={tint(accentColor, 0.25)} stroke={dark} strokeWidth="2.5" />
      <circle cx="270" cy="195" r="18" fill="#E8DCC0" stroke={dark} strokeWidth="2.5" />
      <line x1="270" y1="195" x2="285" y2="185" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const HalloweenNacioEnSamhain: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 250 Q140 220 148 195 Q152 175 175 172 Q198 175 202 195 Q210 220 200 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <polygon points="160,205 168,192 176,205" fill="#1A1A1A" />
      <polygon points="182,205 190,192 198,205" fill="#1A1A1A" />
      <path d="M158 222 Q175 235 192 222" fill="none" stroke="#1A1A1A" strokeWidth="4" />
      <path d="M175 172 Q165 155 175 140 M175 172 Q185 158 180 145" fill="none" stroke="#3E5C4A" strokeWidth="3" opacity="0.7" />
      <ellipse cx="270" cy="220" rx="30" ry="34" fill="#B8860B" stroke={dark} strokeWidth="2.5" />
      <polygon points="258,210 265,198 272,210" fill="#1A1A1A" />
      <polygon points="278,210 285,198 292,210" fill="#1A1A1A" />
      <path d="M255 228 Q270 238 285 228" fill="none" stroke="#1A1A1A" strokeWidth="3" />
      <line x1="270" y1="186" x2="270" y2="172" stroke="#3E5C4A" strokeWidth="4" />
    </g>
  );
};

const ElShowQueNacioDeUnIntervaloDe7Minutos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#C68642";
  return (
    <g>
      {[150, 205, 260].map((x, i) => {
        const lift = i % 2 === 0 ? 0 : 15;
        const kickOut = i % 2 === 0 ? 1 : -1;
        return (
          <g key={x}>
            <circle cx={x} cy={130 + lift} r="13" fill={skin} />
            <path
              d={`M${x - 15} ${150 + lift} L${x + 15} ${150 + lift} L${x + 20} ${210 + lift} L${x - 20} ${210 + lift} Z`}
              fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)}
              stroke={dark}
              strokeWidth="2.5"
            />
            <line x1={x - 15} y1={165 + lift} x2={x - 15} y2={205 + lift} stroke={dark} strokeWidth="4" opacity="0.7" />
            <line x1={x + 15} y1={165 + lift} x2={x + 15} y2={205 + lift} stroke={dark} strokeWidth="4" opacity="0.7" />
            <line x1={x - 5} y1={210 + lift} x2={x - 5 - 8 * kickOut} y2="245" stroke={dark} strokeWidth="5" strokeLinecap="round" />
            <line x1={x + 5} y1={210 + lift} x2={x + 5 + 8 * kickOut} y2="245" stroke={dark} strokeWidth="5" strokeLinecap="round" />
          </g>
        );
      })}
    </g>
  );
};

const LaGranHambrunaYLaDiasporaMasGrandeQueElPais: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="225" width="230" height="25" fill="#3D8FB0" opacity="0.5" />
      <path d="M120 225 L120 190 L280 190 L300 225 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="180" y="150" width="16" height="40" fill="#5C5C5C" stroke={dark} strokeWidth="2" />
      <path d="M196 150 Q220 145 220 165 Q210 175 196 170 Z" fill="#9E9A92" opacity="0.7" />
      {[140, 165, 190, 215, 250, 275].map((x) => (
        <circle key={x} cx={x} cy="200" r="5" fill={dark} opacity="0.6" />
      ))}
    </g>
  );
};

const ElGaelicoElIdiomaQueVuelveALasSenales: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <line x1="150" y1="250" x2="150" y2="110" stroke="#8B7355" strokeWidth="8" />
      <rect x="105" y="120" width="180" height="70" rx="6" fill="#F5F0E6" stroke={dark} strokeWidth="3.5" />
      <line x1="125" y1="145" x2="265" y2="145" stroke={accentColor} strokeWidth="6" opacity="0.85" />
      <line x1="125" y1="170" x2="245" y2="170" stroke={dark} strokeWidth="5" opacity="0.6" />
    </g>
  );
};

const GuinnessYElRitualDeLos119Segundos: IllustrationComponent = () => (
  <g>
    <path d="M160 130 L250 130 L240 250 L170 250 Z" fill="#1A1A1A" stroke="#000000" strokeWidth="2.5" />
    <path d="M164 165 Q205 152 246 165 L244 185 Q205 172 166 185 Z" fill="#F5F0E6" />
    <ellipse cx="205" cy="165" rx="41" ry="10" fill="#F5F0E6" opacity="0.9" />
  </g>
);

const LosAcantiladosDeMoher: IllustrationComponent = () => (
  <g>
    <rect x="90" y="80" width="230" height="170" fill="#B0D8E8" opacity="0.4" />
    <path d="M90 250 L90 130 Q160 100 200 130 L200 250 Z" fill="#5C6C62" stroke="#3E5C4A" strokeWidth="2.5" />
    <path d="M320 250 L320 150 Q270 120 230 150 L230 250 Z" fill="#4A5A52" stroke="#3E5C4A" strokeWidth="2.5" />
    <ellipse cx="205" cy="245" rx="100" ry="8" fill="#1B5E7A" opacity="0.5" />
    {[[140, 175], [270, 190]].map(([x, y]) => (
      <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="12" ry="6" fill="#F5F0E6" opacity="0.8" />
    ))}
  </g>
);

const LosFuertesDeHadasQueNadieSeAnimaATocar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="230" rx="115" ry="20" fill="#7A8B5A" opacity="0.5" />
      <path d="M120 230 Q120 175 205 165 Q290 175 290 230 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[[150, 170], [205, 155], [260, 170]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="16" fill="#3E5C4A" stroke={dark} strokeWidth="2" />
      ))}
    </g>
  );
};

export const irelandIllustrations: Record<string, IllustrationDefinition> = {
  "book-of-kells-el-manuscrito-iluminado": { component: BookOfKellsElManuscritoIluminado },
  "newgrange-mas-viejo-que-las-piramides": { component: NewgrangeMasViejoQueLasPiramides },
  "las-sesiones-de-musica-en-los-pubs": { component: LasSesionesDeMusicaEnLosPubs },
  "halloween-nacio-en-samhain": { component: HalloweenNacioEnSamhain },
  "riverdance-nacio-de-un-intervalo-de-eurovision": { component: ElShowQueNacioDeUnIntervaloDe7Minutos },
  "la-gran-hambruna-y-la-diaspora-mas-grande-que-el-pais": { component: LaGranHambrunaYLaDiasporaMasGrandeQueElPais },
  "el-gaelico-el-idioma-que-vuelve-a-las-senales": { component: ElGaelicoElIdiomaQueVuelveALasSenales },
  "guinness-y-el-ritual-de-los-119-segundos": { component: GuinnessYElRitualDeLos119Segundos },
  "los-acantilados-de-moher": { component: LosAcantiladosDeMoher },
  "los-fuertes-de-hadas-que-nadie-se-anima-a-tocar": { component: LosFuertesDeHadasQueNadieSeAnimaATocar },
};
