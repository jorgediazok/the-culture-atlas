import { shade } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

function person(x: number, y: number, scale: number, dark: string, robe: string, skin = "#3A2A1E") {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="0" cy="-38" r="10" fill={skin} stroke={dark} strokeWidth="1.6" />
      <path d="M-14 -28 Q0 -34 14 -28 L18 10 Q0 18 -18 10 Z" fill={robe} stroke={dark} strokeWidth="2" />
      <path d="M-14 -24 Q-22 -14 -18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
      <path d="M14 -24 Q22 -14 18 0" fill="none" stroke={robe} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
}

// Side-profile sea turtle. Head, flippers, and tail are drawn first (each with
// coordinates checked to sit well inside the shell ellipse's true curve, not its
// bounding box), then the shell ellipse is drawn last so its opaque fill absorbs
// every seam, leaving only the parts that extend past the shell's edge visible.
function turtleSide(x: number, y: number, scale: number, shellColor: string, dark: string) {
  return (
    <g key="turtle" transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-72 -2 Q-60 -16 -46 -10 L-24 0 L-26 12 Q-44 10 -72 -2 Z" fill={dark} stroke="#0D3A2E" strokeWidth="2" />
      <circle cx="-62" cy="-8" r="2.4" fill="#0D3A2E" />
      <path d="M-46 40 Q-50 20 -34 6 L-24 4 L-10 8 Q-16 24 -20 36 Z" fill={dark} stroke="#0D3A2E" strokeWidth="2" />
      <path d="M46 38 Q50 18 34 5 L24 3 L10 7 Q16 22 20 34 Z" fill={dark} stroke="#0D3A2E" strokeWidth="2" />
      <path d="M50 -4 L28 -9 L26 3 Z" fill={dark} stroke="#0D3A2E" strokeWidth="2" />
      <ellipse cx="0" cy="0" rx="42" ry="24" fill={shellColor} stroke="#0D3A2E" strokeWidth="2.6" />
      <path
        d="M-20 -14 Q0 -20 20 -14 M-26 0 L26 0 M-20 14 Q0 20 20 14 M-8 -18 L-8 18 M8 -18 L8 18"
        fill="none"
        stroke="#0D3A2E"
        strokeWidth="1.6"
        opacity="0.55"
      />
    </g>
  );
}

const ElTratadoDe1648QuePartioUnaIslaEnDos: IllustrationComponent = () => (
  <g>
    <rect x="90" y="80" width="230" height="170" fill="#DCE9C8" />
    <path d="M90 250 L320 250 L320 170 Q205 155 90 170 Z" fill="#CDE6E0" opacity="0.55" />
    <path d="M95 250 Q205 185 315 95" fill="none" stroke="#D9C08A" strokeWidth="18" strokeLinecap="round" />
    <path d="M95 250 Q205 185 315 95" fill="none" stroke="#E8D3A0" strokeWidth="11" strokeLinecap="round" />
    <g transform="translate(205 172)">
      <rect x="-6" y="-8" width="12" height="50" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.4" />
      <path d="M-11 -4 L0 -26 L11 -4 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.2" />
    </g>
    <g transform="translate(140 205)">
      <path d="M-24 32 L-24 -2 L0 -20 L24 -2 L24 32 Z" fill="#1B4B7A" stroke="#0D2C4A" strokeWidth="2.4" />
      <rect x="-8" y="10" width="14" height="22" fill="#0D2C4A" />
    </g>
    <g transform="translate(270 190)">
      <path d="M-22 30 L-22 -2 L0 -18 L22 -2 L22 30 Z" fill="#C1272D" stroke="#7A1414" strokeWidth="2.4" />
      <rect x="-7" y="8" width="13" height="22" fill="#7A1414" />
    </g>
    {person(205, 233, 0.8, "#5C4A3A", "#8B5A2B")}
  </g>
);

const LaPlayaDondeLosAvionesRozanLaArena: IllustrationComponent = () => (
  <g>
    <rect x="90" y="80" width="230" height="90" fill="#8ECFE8" />
    <path d="M90 165 Q205 155 320 165 L320 250 L90 250 Z" fill="#EAD9A8" />
    <g stroke="#8C7B6B" strokeWidth="3">
      {[110, 140, 170, 200, 230].map((lx, i) => (
        <line key={i} x1={lx} y1="205" x2={lx} y2="180" />
      ))}
      <line x1="105" y1="188" x2="235" y2="188" />
      <line x1="105" y1="200" x2="235" y2="200" />
    </g>
    {[
      [150, 220],
      [190, 228],
      [225, 219],
    ].map(([sx, sy], i) => (
      <g key={i} transform={`translate(${sx} ${sy})`}>
        <circle cx="-16" cy="-2" r="6" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.4" />
        <ellipse cx="0" cy="0" rx="18" ry="8" fill="#D9A227" stroke="#8A5A10" strokeWidth="1.8" />
      </g>
    ))}
    <g transform="translate(230 118) rotate(-8)">
      <path
        d="M-75 0 Q-75 -7 -58 -8 L35 -8 L48 -26 L56 -8 L60 -8 Q70 -6 70 0 Q70 6 60 8 L48 8 L12 24 L-4 24 L-6 8 L-58 8 Q-75 7 -75 0 Z"
        fill="#F5F0E6"
        stroke="#8C7B6B"
        strokeWidth="2.4"
      />
      <circle cx="-40" cy="0" r="2.2" fill="#8C7B6B" />
      <circle cx="-25" cy="0" r="2.2" fill="#8C7B6B" />
      <circle cx="-10" cy="0" r="2.2" fill="#8C7B6B" />
      <circle cx="5" cy="0" r="2.2" fill="#8C7B6B" />
    </g>
  </g>
);

const ElCarnavalQueEnciendeLasCallesDePhilipsburg: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  function dancer(dx: number, dy: number, scale: number, featherColor: string, bodyColor: string, bodyDark: string) {
    return (
      <g key={`dancer-${dx}`} transform={`translate(${dx} ${dy}) scale(${scale})`}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1={-16 + i * 6.4}
            y1="-46"
            x2={-27 + i * 10.8}
            y2="-88"
            stroke={featherColor}
            strokeWidth="3.6"
            strokeLinecap="round"
          />
        ))}
        <ellipse cx="0" cy="-38" rx="11" ry="13" fill="#8B5A2B" stroke={bodyDark} strokeWidth="1.8" />
        <path d="M-13 -28 Q0 -34 13 -28 L15 10 Q0 17 -15 10 Z" fill={bodyColor} stroke={bodyDark} strokeWidth="2.2" />
        <path d="M-9 -20 Q-22 -10 -18 8" fill="none" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M9 -20 Q22 -10 18 8" fill="none" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
        <line x1="-9" y1="8" x2="-11" y2="34" stroke={bodyDark} strokeWidth="4" strokeLinecap="round" />
        <line x1="9" y1="8" x2="7" y2="34" stroke={bodyDark} strokeWidth="4" strokeLinecap="round" />
      </g>
    );
  }
  return (
    <g>
      <ellipse cx="205" cy="245" rx="115" ry="10" fill="#3A2A1E" opacity="0.2" />
      {dancer(150, 220, 1.05, "#D9A227", accentColor, dark)}
      {dancer(210, 226, 1, "#F5F0E6", "#C1272D", "#7A1414")}
      <g transform="translate(275 222)">
        <ellipse cx="0" cy="0" rx="26" ry="9" fill="#C9CDD3" stroke="#6B6F76" strokeWidth="2.2" />
        <rect x="-26" y="0" width="52" height="20" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2.2" />
        <ellipse cx="0" cy="0" rx="20" ry="6" fill="none" stroke="#6B6F76" strokeWidth="1.6" />
        <ellipse cx="0" cy="0" rx="12" ry="3.6" fill="none" stroke="#6B6F76" strokeWidth="1.4" />
      </g>
    </g>
  );
};

const ElLicorDeUnaBayaQueSoloCreceEnLaIsla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path
        d="M175 245 L175 140 Q175 128 185 122 L185 100 L205 100 L205 122 Q215 128 215 140 L215 245 Z"
        fill="#7A2E2E"
        stroke="#4A1414"
        strokeWidth="2.6"
      />
      <rect x="183" y="96" width="24" height="10" fill="#3A2A1E" stroke="#1A120C" strokeWidth="1.8" />
      <ellipse cx="195" cy="180" rx="15" ry="24" fill="#F5F0E6" opacity="0.2" />
      <path
        d="M240 160 Q260 145 275 120 M245 155 Q265 138 280 112"
        stroke="#3A7A45"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {[
        [262, 130],
        [270, 118],
        [278, 112],
        [250, 145],
      ].map(([bx, by], i) => (
        <circle key={i} cx={bx} cy={by} r="6" fill="#7A2E2E" stroke="#4A1414" strokeWidth="1.6" />
      ))}
      {person(255, 226, 0.85, dark, accentColor)}
      <g transform="translate(288 195) rotate(25)">
        <ellipse cx="0" cy="0" rx="9" ry="13" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
      </g>
    </g>
  );
};

const LaLagunaDondeVivenLosVeleros: IllustrationComponent = () => (
  <g>
    <rect x="90" y="140" width="230" height="110" fill="#1A7A6E" opacity="0.5" />
    <path d="M90 150 Q205 138 320 150" fill="none" stroke="#F5F0E6" strokeWidth="2.2" opacity="0.5" />
    <path d="M90 170 Q205 158 320 172" fill="none" stroke="#F5F0E6" strokeWidth="2.2" opacity="0.4" />
    {[
      { bx: 140, by: 205, s: 1, hull: "#2E5C8A" },
      { bx: 200, by: 220, s: 0.85, hull: "#C1272D" },
      { bx: 255, by: 210, s: 1.1, hull: "#1B4B7A" },
    ].map(({ bx, by, s, hull }, i) => (
      <g key={i} transform={`translate(${bx} ${by}) scale(${s})`}>
        <rect x="-2" y="-34" width="4" height="52" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="1.4" />
        <path d="M0 -32 L0 10 L20 10 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
        <path d="M-18 6 Q-20 20 0 24 Q20 20 18 6 Q0 12 -18 6 Z" fill={hull} stroke={shade(hull, 0.4)} strokeWidth="2" />
      </g>
    ))}
    <g transform="translate(300 150)">
      <rect x="-14" y="-40" width="6" height="40" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="1.8" />
      <rect x="8" y="-40" width="6" height="40" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="1.8" />
      <path d="M-14 -37 L-14 -55 L-2 -66 L-2 -46 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="1.8" />
      <path d="M14 -37 L14 -55 L2 -66 L2 -46 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="1.8" />
    </g>
  </g>
);

const LasCasasDeJengibreQueVistenCadaCalle: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="140" y="170" width="120" height="75" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M132 174 L200 118 L268 174 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.6" />
      <path
        d="M140 172 L152 160 L164 172 L176 160 L188 172 L200 160 L212 172 L224 160 L236 172 L248 160 L260 172"
        fill="none"
        stroke="#F5F0E6"
        strokeWidth="3"
      />
      <rect x="182" y="200" width="36" height="45" fill="#5C3A21" stroke="#3A2410" strokeWidth="2.2" />
      <rect x="150" y="195" width="24" height="24" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2" />
      <rect x="226" y="195" width="24" height="24" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2" />
      <path d="M285 245 Q280 200 292 165" fill="none" stroke="#8B5A2B" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M292 165 Q270 150 255 158 M292 165 Q315 148 330 158 M292 165 Q292 140 288 128 M292 165 Q276 152 268 138 M292 165 Q308 150 316 136"
        stroke="#3A7A45"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
};

const ElPescadoSaladoQueDefineCadaPlato: IllustrationComponent = () => (
  <g>
    <ellipse cx="175" cy="215" rx="70" ry="22" fill="#F5F0E6" stroke="#8B6F47" strokeWidth="2.6" />
    <ellipse cx="165" cy="205" rx="42" ry="16" fill="#C1272D" opacity="0.85" stroke="#7A1414" strokeWidth="2" />
    <path d="M150 200 Q165 194 180 200 L178 212 Q165 217 152 212 Z" fill="#F5F0E6" opacity="0.5" />
    <ellipse cx="255" cy="210" rx="30" ry="20" fill="#D9A227" stroke="#8A5A10" strokeWidth="2.4" />
    <ellipse cx="255" cy="205" rx="22" ry="12" fill="#EFC55A" opacity="0.7" />
    <ellipse cx="130" cy="235" rx="26" ry="16" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.2" />
    {[
      [118, 230],
      [132, 234],
      [144, 228],
    ].map(([fx, fy], i) => (
      <path key={i} d={`M${fx} ${fy} L${fx + 5} ${fy - 8}`} stroke="#1B4B1E" strokeWidth="2" strokeLinecap="round" />
    ))}
  </g>
);

const LasTortugasQueRegresanALaMismaArena: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="80" width="230" height="170" fill="#1B6B5C" opacity="0.35" />
      <path
        d="M110 250 Q108 200 130 170 Q140 155 150 170 Q158 200 148 250 Z"
        fill="#D9822B"
        opacity="0.8"
        stroke="#8A5A10"
        strokeWidth="2"
      />
      <path
        d="M270 250 Q272 210 258 185 Q250 172 242 185 Q236 210 244 250 Z"
        fill="#C1272D"
        opacity="0.75"
        stroke="#7A1414"
        strokeWidth="2"
      />
      <ellipse cx="225" cy="230" rx="26" ry="14" fill="#D9A227" opacity="0.8" stroke="#8A5A10" strokeWidth="1.8" />
      {turtleSide(205, 155, 1.05, accentColor, dark)}
      <path d="M110 100 Q130 92 148 100 L142 108 Q126 102 116 108 Z" fill="#F5F0E6" opacity="0.85" />
    </g>
  );
};

const UnIdiomaOficialQueCasiNadieUsaADiario: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="200" y="150" width="50" height="60" fill="#D9822B" stroke="#8A5A10" strokeWidth="2.2" />
      <path d="M192 154 L225 118 L258 154 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
      <rect x="120" y="160" width="42" height="55" fill="#1A7A6E" stroke="#0D4A40" strokeWidth="2.2" />
      <path d="M113 164 L141 132 L169 164 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2.2" />
      {person(170, 235, 1, dark, accentColor)}
      {person(225, 238, 0.95, "#5C3A21", "#C1272D")}
      <g transform="translate(150 175)">
        <path d="M-8 9 L-16 20 L0 10 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.6" />
        <ellipse cx="0" cy="0" rx="20" ry="13" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
        <text x="0" y="4" fontSize="11" textAnchor="middle" fill="#3A2A1E">
          EN
        </text>
      </g>
      <g transform="translate(250 185)">
        <path d="M8 8 L16 18 L-2 9 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.6" />
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
        <text x="0" y="4" fontSize="10" textAnchor="middle" fill="#3A2A1E">
          NL
        </text>
      </g>
    </g>
  );
};

const LaEconomiaQueLlegaEnCrucerosYVeleros: IllustrationComponent = () => (
  <g>
    <rect x="90" y="190" width="230" height="60" fill="#2E5C8A" opacity="0.5" />
    <rect x="100" y="130" width="150" height="50" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2.6" />
    <rect x="100" y="112" width="150" height="20" fill="#D9822B" stroke="#8A5A10" strokeWidth="2.2" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} x={112 + i * 24} y="140" width="14" height="14" fill="#8ECFE8" stroke="#5C4A3A" strokeWidth="1.4" />
    ))}
    <rect x="130" y="98" width="10" height="16" fill="#8C7B6B" />
    <g transform="translate(280 200)">
      <rect x="-2" y="-38" width="4" height="52" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="1.4" />
      <path d="M0 -36 L0 8 L22 8 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="1.8" />
      <path d="M-20 4 Q-22 20 0 24 Q22 20 20 4 Q0 10 -20 4 Z" fill="#1B4B7A" stroke="#0D2C4A" strokeWidth="2.2" />
    </g>
  </g>
);

const FuerteAmsterdamElPrimerFuerteHolandesDelCaribe: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 245 Q205 230 320 245 L320 250 L90 250 Z" fill="#1B5E7A" opacity="0.4" />
      <polygon points="110,245 150,150 260,150 300,245" fill={accentColor} opacity="0.5" />
      <path d="M140 220 L140 165 L190 165 L190 220 Z" fill="#8C8C74" stroke={dark} strokeWidth="3" />
      {[150, 165, 180].map((x) => (
        <rect key={x} x={x} y="155" width="8" height="10" fill="#8C8C74" stroke={dark} strokeWidth="1.5" />
      ))}
      <path d="M220 220 L220 175 Q220 165 235 165 Q250 165 250 175 L250 220 Z" fill="#A69880" stroke={dark} strokeWidth="2.5" opacity="0.85" />
    </g>
  );
};

const ElDiaDeLaConcordiaUnaIslaQueCelebraJunta: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {person(140, 235, 1.1, dark, accentColor)}
      {person(270, 235, 1.1, "#5C3A21", "#C1272D")}
      <rect x="195" y="200" width="20" height="45" fill="#8C8C74" stroke={dark} strokeWidth="2.5" />
      <polygon points="195,200 205,188 215,200" fill="#8C8C74" stroke={dark} strokeWidth="2" />
      <line x1="160" y1="200" x2="160" y2="160" stroke="#5C3A21" strokeWidth="3" />
      <path d="M160 160 L185 168 L160 176 Z" fill="#1B4B7A" stroke={dark} strokeWidth="1.5" />
      <line x1="250" y1="200" x2="250" y2="160" stroke="#5C3A21" strokeWidth="3" />
      <path d="M250 160 L225 168 L250 176 Z" fill="#C1272D" stroke={dark} strokeWidth="1.5" />
    </g>
  );
};

export const sintMaartenIllustrations: Record<string, IllustrationDefinition> = {
  "el-tratado-de-1648-que-partio-una-isla-en-dos": { component: ElTratadoDe1648QuePartioUnaIslaEnDos },
  "la-playa-donde-los-aviones-rozan-la-arena": { component: LaPlayaDondeLosAvionesRozanLaArena },
  "el-carnaval-que-enciende-las-calles-de-philipsburg": { component: ElCarnavalQueEnciendeLasCallesDePhilipsburg },
  "el-licor-de-una-baya-que-solo-crece-en-la-isla": { component: ElLicorDeUnaBayaQueSoloCreceEnLaIsla },
  "la-laguna-donde-viven-los-veleros": { component: LaLagunaDondeVivenLosVeleros },
  "las-casas-de-jengibre-que-visten-cada-calle": { component: LasCasasDeJengibreQueVistenCadaCalle },
  "el-pescado-salado-que-define-cada-plato": { component: ElPescadoSaladoQueDefineCadaPlato },
  "las-tortugas-que-regresan-a-la-misma-arena": { component: LasTortugasQueRegresanALaMismaArena },
  "un-idioma-oficial-que-casi-nadie-usa-a-diario": { component: UnIdiomaOficialQueCasiNadieUsaADiario },
  "la-economia-que-llega-en-cruceros-y-veleros": { component: LaEconomiaQueLlegaEnCrucerosYVeleros },
  "fuerte-amsterdam-el-primer-fuerte-holandes-del-caribe": { component: FuerteAmsterdamElPrimerFuerteHolandesDelCaribe },
  "el-dia-de-la-concordia-una-isla-que-celebra-junta": { component: ElDiaDeLaConcordiaUnaIslaQueCelebraJunta },
};
