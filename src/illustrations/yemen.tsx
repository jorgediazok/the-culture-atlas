import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const ElCascoAntiguoDeSanaa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const towers = [
    { x: 115, w: 45, h: 130 },
    { x: 170, w: 55, h: 155 },
    { x: 235, w: 42, h: 115 },
    { x: 285, w: 30, h: 95 },
  ];
  return (
    <g>
      {towers.map((t) => (
        <g key={t.x}>
          <rect x={t.x} y={240 - t.h} width={t.w} height={t.h} fill={accentColor} stroke={dark} strokeWidth="2.5" />
          {Array.from({ length: Math.floor(t.h / 26) }).map((_, row) =>
            Array.from({ length: Math.floor(t.w / 18) }).map((__, col) => (
              <rect
                key={`${row}-${col}`}
                x={t.x + 6 + col * 18}
                y={240 - t.h + 10 + row * 26}
                width="9"
                height="12"
                fill="#F5F0E6"
                stroke={dark}
                strokeWidth="1"
              />
            ))
          )}
        </g>
      ))}
    </g>
  );
};

const SocotraYSusArbolesDeSangreDeDrago: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 240 Q160 220 205 235 Q260 215 320 240 L320 250 L90 250 Z" fill="#C9A87C" />
      <rect x="196" y="150" width="16" height="90" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      {[
        [204, 150, -70],
        [204, 150, -40],
        [204, 150, -10],
        [204, 150, 20],
        [204, 150, 50],
        [204, 150, 80],
      ].map(([cx, cy, dx]) => (
        <path
          key={dx}
          d={`M${cx} ${cy} Q${cx + dx * 0.5} ${cy - 22} ${cx + dx} ${cy - 8}`}
          fill="none"
          stroke="#3F7D2E"
          strokeWidth="7"
          strokeLinecap="round"
        />
      ))}
      <ellipse cx="204" cy="150" rx="70" ry="14" fill="#3F7D2E" opacity="0.5" />
      <circle cx="150" cy="238" r="10" fill="#8B8B8B" opacity="0.6" />
      <circle cx="260" cy="240" r="14" fill="#8B8B8B" opacity="0.6" />
    </g>
  );
};

const MocaYElNacimientoDelComercioDelCafe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="238" rx="120" ry="10" fill="#1B5E7A" opacity="0.5" />
      <path d="M130 210 L280 210 L260 235 L150 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="205" y1="210" x2="205" y2="130" stroke="#5C3A21" strokeWidth="4" />
      <path d="M205 132 L255 175 Q225 190 205 185 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M205 132 L165 170 Q190 190 205 185 Z" fill="#F5F0E6" opacity="0.8" stroke={dark} strokeWidth="2" />
      {[[145, 220], [165, 224], [185, 220]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} L${x + 22} ${y} L${x + 18} ${y + 14} L${x + 4} ${y + 14} Z`} fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
      ))}
    </g>
  );
};

const LaPresaDeMaribYLaReinaDeSaba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const blocks = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      blocks.push([120 + col * 30 + (row % 2 === 0 ? 0 : 15), 150 + row * 22]);
    }
  }
  return (
    <g>
      <rect x="110" y="150" width="195" height="90" fill={accentColor} stroke={dark} strokeWidth="3" />
      {blocks.map(([x, y]) => (
        <rect key={x + "-" + y} x={x} y={y} width="28" height="20" fill="none" stroke={dark} strokeWidth="1.2" opacity="0.6" />
      ))}
      <path d="M90 150 Q205 130 320 150 L320 165 Q205 145 90 165 Z" fill="#1B5E7A" opacity="0.7" />
      <ellipse cx="205" cy="150" rx="115" ry="10" fill="#3E82A6" opacity="0.6" />
    </g>
  );
};

const LaJambiyaDagaCeremonialYemeni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g transform="rotate(-10 205 165)">
      <path d="M205 95 Q225 130 215 175 Q205 190 195 175 Q188 130 205 95 Z" fill="#C9A227" stroke={dark} strokeWidth="2.5" />
      <rect x="192" y="172" width="26" height="14" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M188 186 Q205 210 222 186 L218 230 Q205 240 192 230 Z" fill="#7A5230" stroke={dark} strokeWidth="2.5" />
      <rect x="150" y="220" width="110" height="20" rx="4" fill="#5C3A21" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="230" r="6" fill="#C9A227" stroke={dark} strokeWidth="1.5" />
      <path d="M150 220 L150 240 M260 220 L260 240" stroke={dark} strokeWidth="2" opacity="0.5" />
    </g>
  );
};

const ShibamLaCiudadDeLasTorresDeAdobe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const towers = [
    { x: 105, w: 30, h: 100 },
    { x: 138, w: 34, h: 140 },
    { x: 175, w: 30, h: 115 },
    { x: 208, w: 36, h: 150 },
    { x: 247, w: 28, h: 105 },
    { x: 278, w: 32, h: 125 },
  ];
  return (
    <g>
      {towers.map((t, i) => (
        <g key={t.x}>
          <rect x={t.x} y={240 - t.h} width={t.w} height={t.h} fill={i % 2 === 0 ? accentColor : tint(accentColor, 0.18)} stroke={dark} strokeWidth="2.5" />
          {Array.from({ length: Math.floor(t.h / 20) }).map((_, row) => (
            <rect key={row} x={t.x + t.w / 2 - 3} y={240 - t.h + 8 + row * 20} width="6" height="7" fill="#F5F0E6" opacity="0.85" />
          ))}
        </g>
      ))}
    </g>
  );
};

const HEX_POINTS: [number, number][] = [
  [9, 0],
  [4.5, 7.8],
  [-4.5, 7.8],
  [-9, 0],
  [-4.5, -7.8],
  [4.5, -7.8],
];

const LaMielSidrDeHadramaut: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const centers: [number, number][] = [
    [185, 145], [203, 145], [221, 145],
    [194, 160], [212, 160],
    [185, 175], [203, 175], [221, 175],
  ];
  return (
    <g>
      {centers.map(([cx, cy], i) => (
        <polygon
          key={cx + "-" + cy}
          points={HEX_POINTS.map(([px, py]) => `${cx + px},${cy + py}`).join(" ")}
          fill={i % 2 === 0 ? "#C9A227" : "#D9B84A"}
          stroke={dark}
          strokeWidth="1.5"
        />
      ))}
      <path d="M203 188 Q195 205 203 220 Q211 205 203 188 Z" fill={accentColor} opacity="0.85" stroke={dark} strokeWidth="1.5" />
      <path d="M255 110 L280 145 L268 190 M260 130 L275 150" stroke="#5C3A21" strokeWidth="5" fill="none" strokeLinecap="round" />
      <polygon points="272,135 278,128 280,140" fill="#5C3A21" />
    </g>
  );
};

const LaRutaDelIncienso: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const camel = (x: number, scale: number, opacity: number) => (
    <g key={x} transform={`translate(${x} 0) scale(${scale})`} opacity={opacity}>
      <path d="M0 235 Q-5 190 15 175 Q10 155 25 150 Q35 148 32 165 Q45 168 50 185 L50 235 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M32 165 Q38 140 30 120 Q45 122 46 145 Q50 150 45 168" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="8" y1="235" x2="8" y2="250" stroke={dark} strokeWidth="4" />
      <line x1="24" y1="235" x2="24" y2="250" stroke={dark} strokeWidth="4" />
      <line x1="38" y1="235" x2="38" y2="250" stroke={dark} strokeWidth="4" />
      <rect x="10" y="168" width="20" height="14" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
    </g>
  );
  return (
    <g>
      <path d="M90 245 Q205 225 320 245 L320 250 L90 250 Z" fill="#D4C098" />
      {camel(100, 0.85, 0.55)}
      {camel(175, 1, 1)}
      {camel(255, 0.9, 0.75)}
    </g>
  );
};

const LaFiligranaDePlataYemeni: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M140 120 Q205 175 270 120" fill="none" stroke="#B8B8B8" strokeWidth="4" />
      <path d="M155 125 Q205 165 255 125" fill="none" stroke="#B8B8B8" strokeWidth="3" opacity="0.7" />
      <circle cx="205" cy="185" r="24" fill="#D9D9D9" stroke={dark} strokeWidth="2.5" />
      <circle cx="205" cy="185" r="15" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="205" cy="185" r="6" fill={accentColor} />
      <circle cx="160" cy="140" r="10" fill="#D9D9D9" stroke={dark} strokeWidth="2" />
      <circle cx="250" cy="140" r="10" fill="#D9D9D9" stroke={dark} strokeWidth="2" />
      <circle cx="160" cy="140" r="4" fill={accentColor} />
      <circle cx="250" cy="140" r="4" fill={accentColor} />
    </g>
  );
};

const ElSaltahPlatoNacionalDeYemen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 175 L260 175 L245 230 Q205 245 165 230 Z" fill="#6B6B6B" stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="175" rx="55" ry="12" fill="#7C7C7C" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="172" rx="45" ry="9" fill="#8FA85E" opacity="0.9" />
      <path d="M180 168 Q190 158 200 168 Q210 158 220 168 Q230 158 232 168" fill="none" stroke="#5C7A3A" strokeWidth="3" opacity="0.8" />
      <path d="M170 150 Q175 130 165 115 M205 145 Q210 122 200 108 M235 150 Q242 130 232 115" stroke="#D9D9D9" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
};

export const yemenIllustrations: Record<string, IllustrationDefinition> = {
  "el-casco-antiguo-de-sanaa": { component: ElCascoAntiguoDeSanaa },
  "socotra-y-sus-arboles-de-sangre-de-drago": { component: SocotraYSusArbolesDeSangreDeDrago },
  "moca-y-el-nacimiento-del-comercio-del-cafe": { component: MocaYElNacimientoDelComercioDelCafe },
  "la-presa-de-marib-y-la-reina-de-saba": { component: LaPresaDeMaribYLaReinaDeSaba },
  "la-jambiya-daga-ceremonial-yemeni": { component: LaJambiyaDagaCeremonialYemeni },
  "shibam-la-ciudad-de-las-torres-de-adobe": { component: ShibamLaCiudadDeLasTorresDeAdobe },
  "la-miel-sidr-de-hadramaut": { component: LaMielSidrDeHadramaut },
  "la-ruta-del-incienso": { component: LaRutaDelIncienso },
  "la-filigrana-de-plata-yemeni": { component: LaFiligranaDePlataYemeni },
  "el-saltah-plato-nacional-de-yemen": { component: ElSaltahPlatoNacionalDeYemen },
};
