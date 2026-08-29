import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElPaisContinentalMasPequenoDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const land = "#4A8F4E";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={land} opacity="0.35" />
      <path d="M100 150 Q160 130 210 155 Q260 178 310 160 L308 190 Q258 208 208 185 Q158 160 100 180 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M100 165 Q160 150 210 170 Q260 190 310 175" fill="none" stroke={tint(accentColor, 0.4)} strokeWidth="3" opacity="0.6" />
    </g>
  );
};

const LaIslaQueInspiroElPeregrinajeDeRaices: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const stone = "#A89380";
  return (
    <g>
      <path d="M90 220 Q205 210 320 220 L320 250 L90 250 Z" fill={water} />
      <ellipse cx="205" cy="215" rx="85" ry="18" fill={accentColor} opacity="0.4" />
      <rect x="170" y="165" width="70" height="50" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2.5" />
      <rect x="180" y="145" width="50" height="20" fill={stone} stroke={shade(stone, 0.3)} strokeWidth="2" />
      {[185, 205, 225].map((x) => (
        <rect key={x} x={x - 5} y="180" width="10" height="20" fill={dark} opacity="0.5" />
      ))}
      <circle cx="270" cy="115" r="22" fill="#F4C430" opacity="0.85" />
    </g>
  );
};

const LosCirculosDePiedraCuyoPropositoNadieConfirmo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const stone = "#8B8378";
  return (
    <g>
      {[[150, 200], [205, 195], [260, 205], [180, 220], [230, 222]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="20" ry="24" fill={i % 2 === 0 ? stone : accentColor} stroke={shade(stone, 0.3)} strokeWidth="2.5" transform={`rotate(${i * 8} ${x} ${y})`} />
      ))}
      <path d="M100 240 Q205 230 320 240" stroke={dark} strokeWidth="2" opacity="0.3" fill="none" />
    </g>
  );
};

const ElKankurangElEspirituCubiertoDeHojas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const green = "#4A8F4E";
  return (
    <g>
      <path d="M180 235 L175 155 Q175 130 205 125 Q235 130 235 155 L230 235 Z" fill={green} stroke={shade(green, 0.3)} strokeWidth="2.5" />
      {[[185, 150], [200, 140], [215, 148], [190, 175], [220, 172], [180, 200], [230, 198], [195, 220], [215, 218]].map(([x, y], i) => (
        <ellipse key={x as number} cx={x} cy={y} rx="9" ry="6" fill={i % 2 === 0 ? accentColor : shade(green, 0.15)} transform={`rotate(${(i * 37) % 60} ${x} ${y})`} />
      ))}
      <path d="M240 200 L265 175 L260 210 Z" fill={dark} />
      <line x1="240" y1="200" x2="260" y2="185" stroke={dark} strokeWidth="3" />
    </g>
  );
};

const MasDe560EspeciesDeAvesEnUnTerritorioDiminuto: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const yellow = "#F4C430";
  const red = "#C1272D";
  return (
    <g>
      <path d="M175 235 L180 175" stroke="#6B4423" strokeWidth="6" />
      <path d="M175 200 Q150 205 140 190" fill="none" stroke="#6B4423" strokeWidth="4" strokeLinecap="round" />
      <path d="M185 175 Q175 145 205 130 Q235 122 250 145 Q255 165 235 175 Q215 182 185 175 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M195 155 Q210 148 225 158 Q212 165 195 155 Z" fill={yellow} />
      <path d="M235 150 Q255 145 265 155 L235 158 Z" fill={dark} />
      <circle cx="240" cy="140" r="3" fill="#1A1A1A" />
      <path d="M195 170 Q180 185 165 180 Q180 195 200 185 Z" fill={red} />
    </g>
  );
};

const LaConfederacionConSenegalQueNuncaCuajo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M110 150 L200 150 L200 175 Q210 175 210 185 Q210 195 200 195 L200 235 L110 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M300 150 L215 150 L215 175 Q205 175 205 185 Q205 195 215 195 L215 235 L300 235 Z" fill={tint(accentColor, 0.4)} stroke={dark} strokeWidth="3" />
      <line x1="207" y1="150" x2="207" y2="235" stroke={dark} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
    </g>
  );
};

const LaVidaALoLargoDelRioQueLoEsTodo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill={water} opacity="0.45" />
      <path d="M130 210 Q160 195 205 205 Q250 215 280 200 L275 218 Q245 230 205 220 Q165 212 135 225 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <path d="M155 200 L155 180 L175 185 L175 205" fill="none" stroke={dark} strokeWidth="2" />
      <line x1="280" y1="205" x2="300" y2="185" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const ElManiQueMarcoSuHistoriaColonial: IllustrationComponent = () => {
  const shell = "#D9BE8F";
  return (
    <g>
      <path d="M150 230 Q140 195 165 180" fill="none" stroke="#4A8F4E" strokeWidth="6" strokeLinecap="round" />
      {[[160, 200], [180, 185], [140, 215]].map(([x, y]) => (
        <path key={x as number} d={`M${x} ${y} Q${(x as number) - 8} ${(y as number) - 14} ${x} ${(y as number) - 26} Q${(x as number) + 8} ${(y as number) - 14} ${x} ${y} Z`} fill="#4A8F4E" stroke={shade("#4A8F4E", 0.3)} strokeWidth="1.5" />
      ))}
      {[[210, 200, 0], [245, 210, 15], [275, 195, -10]].map(([x, y, deg]) => (
        <g key={x as number} transform={`rotate(${deg} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx="14" ry="22" fill={shell} stroke={shade(shell, 0.35)} strokeWidth="2" />
          <ellipse cx={x} cy={(y as number) - 22} rx="12" ry="18" fill={shell} stroke={shade(shell, 0.35)} strokeWidth="2" />
          <line x1={x} y1={(y as number) - 8} x2={x} y2={(y as number) - 14} stroke={shade(shell, 0.4)} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const LaLuchaTradicionalConAmuletosYTambores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#8B5A2B";
  return (
    <g>
      <ellipse cx="205" cy="235" rx="100" ry="14" fill="#D9BE8F" opacity="0.6" />
      {[[165, 190, -1], [245, 190, 1]].map(([x, y, dir]) => (
        <g key={x as number}>
          <circle cx={x} cy={y} r="12" fill={skin} />
          <path d={`M${x} ${(y as number) + 12} L${x} ${(y as number) + 55} L${(x as number) + (dir as number) * 22} ${(y as number) + 45}`} fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
          <path d={`M${(x as number) - 8} ${(y as number) + 20} L${(x as number) + (dir as number) * -20} ${(y as number) + 30}`} stroke={skin} strokeWidth="8" strokeLinecap="round" />
          <rect x={x - 10} y={(y as number) + 18} width="20" height="24" fill={accentColor} stroke={dark} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
};

const LaCostaSonrienteQueSeVolvioUnaMarca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  const sand = "#F4C87A";
  return (
    <g>
      <rect x="90" y="80" width="230" height="120" fill={water} opacity="0.5" />
      <path d="M90 195 Q205 175 320 195 L320 250 L90 250 Z" fill={sand} />
      <path d="M90 195 Q205 178 320 195" fill="none" stroke="#fff" strokeWidth="3" opacity="0.7" />
      <path d="M205 235 L205 165" stroke={dark} strokeWidth="4" />
      <path d="M205 165 Q165 175 165 200 Q205 190 245 200 Q245 175 205 165 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const BenachinRaizDelJollof: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rice = "#F0DFAE";
  const fish = "#8B98A5";
  const tomato = "#C1272D";
  const carrot = "#F4A300";
  return (
    <g>
      <path d="M140 195 L140 225 Q140 245 170 245 L240 245 Q270 245 270 225 L270 195 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="195" rx="65" ry="17" fill={rice} stroke={shade(rice, 0.3)} strokeWidth="2.5" />
      <path d="M165 190 Q175 178 195 182 Q210 176 200 190 Q185 196 165 190 Z" fill={fish} stroke={shade(fish, 0.3)} strokeWidth="2" />
      <circle cx="182" cy="185" r="2" fill="#1A1A1A" />
      {[[220, 188], [235, 193], [195, 196]].map(([x, y]) => (
        <circle key={x as number} cx={x as number} cy={y as number} r="7" fill={tomato} stroke={shade(tomato, 0.3)} strokeWidth="1.5" />
      ))}
      {[[210, 182], [245, 185]].map(([x, y]) => (
        <circle key={x as number} cx={x as number} cy={y as number} r="6" fill={carrot} stroke={shade(carrot, 0.3)} strokeWidth="1.5" />
      ))}
      <path d="M150 180 Q145 165 155 155 M255 178 Q260 163 250 153" fill="none" stroke="#B0AFA8" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </g>
  );
};

const EstanqueSagradoDeKachikally: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = tint(accentColor, 0.35);
  const croc = "#5B7553";
  return (
    <g>
      <circle cx="120" cy="100" r="38" fill={shade(accentColor, 0.1)} opacity="0.5" />
      <circle cx="300" cy="95" r="34" fill={shade(accentColor, 0.1)} opacity="0.5" />
      <path d="M90 220 Q205 205 320 220 L320 250 L90 250 Z" fill={water} stroke={dark} strokeWidth="2.5" />
      <path d="M150 220 Q140 208 155 202 Q175 196 195 204 Q225 200 245 208 Q265 204 270 216 Q260 226 235 222 Q205 228 175 222 Q160 226 150 220 Z" fill={croc} stroke={shade(croc, 0.3)} strokeWidth="2.5" />
      <circle cx="158" cy="206" r="4" fill={dark} />
      <circle cx="170" cy="203" r="4" fill={dark} />
      {[190, 215, 240].map((x) => (
        <path key={x} d={`M${x - 8} 202 L${x} 194 L${x + 8} 202 Z`} fill={shade(croc, 0.2)} />
      ))}
      <path d="M150 220 Q130 224 118 214" fill="none" stroke={croc} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

export const gambiaIllustrations: Record<string, IllustrationDefinition> = {
  "el-pais-continental-mas-pequeno-de-africa": { component: ElPaisContinentalMasPequenoDeAfrica },
  "la-isla-que-inspiro-el-peregrinaje-de-raices": { component: LaIslaQueInspiroElPeregrinajeDeRaices },
  "los-circulos-de-piedra-cuyo-proposito-nadie-confirmo": { component: LosCirculosDePiedraCuyoPropositoNadieConfirmo },
  "el-kankurang-el-espiritu-cubierto-de-hojas": { component: ElKankurangElEspirituCubiertoDeHojas },
  "mas-de-560-especies-de-aves-en-un-territorio-diminuto": { component: MasDe560EspeciesDeAvesEnUnTerritorioDiminuto },
  "la-confederacion-con-senegal-que-nunca-cuajo": { component: LaConfederacionConSenegalQueNuncaCuajo },
  "la-vida-a-lo-largo-del-rio-que-lo-es-todo": { component: LaVidaALoLargoDelRioQueLoEsTodo },
  "el-mani-que-marco-su-historia-colonial": { component: ElManiQueMarcoSuHistoriaColonial },
  "la-lucha-tradicional-con-amuletos-y-tambores": { component: LaLuchaTradicionalConAmuletosYTambores },
  "la-costa-sonriente-que-se-volvio-una-marca": { component: LaCostaSonrienteQueSeVolvioUnaMarca },
  "benachin-raiz-del-jollof": { component: BenachinRaizDelJollof },
  "estanque-sagrado-de-kachikally": { component: EstanqueSagradoDeKachikally },
};
