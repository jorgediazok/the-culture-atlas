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

// Legs/arms are drawn first so the torso (drawn after) covers their root seams,
// then the head is drawn last, overlapping ~19 units into the torso's top edge.
function chimp(x: number, y: number, scale: number) {
  const dark = "#2A1F18";
  return (
    <g key={`chimp-${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-10 20 Q-16 32 -10 42" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M10 20 Q18 30 14 42" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M14 -6 Q30 -22 34 -40" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M-16 -4 Q-26 10 -22 26" stroke={dark} strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="0" cy="10" rx="22" ry="26" fill={dark} stroke="#150F0A" strokeWidth="2.4" />
      <circle cx="0" cy="-12" r="15" fill={dark} stroke="#150F0A" strokeWidth="2.4" />
      <ellipse cx="0" cy="-9" rx="8" ry="9" fill="#C9A27A" stroke="#150F0A" strokeWidth="1.6" />
      <circle cx="-3" cy="-11" r="1.6" fill="#150F0A" />
      <circle cx="3" cy="-11" r="1.6" fill="#150F0A" />
      <circle cx="-14" cy="-14" r="5" fill={dark} stroke="#150F0A" strokeWidth="1.8" />
      <circle cx="14" cy="-14" r="5" fill={dark} stroke="#150F0A" strokeWidth="1.8" />
    </g>
  );
}

const ElPuertoFundadoParaAcogerALaLibertad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="90" y="205" width="230" height="45" fill="#1B4B7A" opacity="0.5" />
      <path d="M90 218 Q200 208 320 220" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" fill="none" />
      <path d="M110 195 Q108 210 130 213 L190 213 Q212 210 210 195 Z" fill="#5C3A21" stroke="#2A1A0E" strokeWidth="2.4" />
      <line x1="155" y1="205" x2="155" y2="140" stroke="#2A1A0E" strokeWidth="3" />
      <path d="M155 145 L155 195 L200 190 Z" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2" />
      <path d="M230 250 Q270 235 320 245 L320 250 Z" fill="#D9C08A" />
      {person(250, 232, 0.6, dark, accentColor)}
      {person(275, 236, 0.55, dark, accentColor)}
      {person(298, 230, 0.58, dark, accentColor)}
    </g>
  );
};

const ElArbolCentenarioQueVioNacerUnaCiudad: IllustrationComponent = () => (
  <g>
    <rect x="95" y="205" width="45" height="45" fill="#C68642" stroke="#6B4423" strokeWidth="2.2" />
    <path d="M95 205 L117 188 L140 205 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    <rect x="265" y="200" width="45" height="50" fill="#C68642" stroke="#6B4423" strokeWidth="2.2" />
    <path d="M265 200 L287 183 L310 200 Z" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
    <path d="M175 250 Q165 235 178 220 L185 250 Z" fill="#5C3A21" stroke="#2A1A0E" strokeWidth="2" />
    <path d="M225 250 Q235 235 222 220 L215 250 Z" fill="#5C3A21" stroke="#2A1A0E" strokeWidth="2" />
    <path d="M182 250 L182 155 L218 155 L218 250 Z" fill="#6B4423" stroke="#2A1A0E" strokeWidth="2.6" />
    <ellipse cx="200" cy="135" rx="75" ry="55" fill="#3A7A45" stroke="#1B4B1E" strokeWidth="2.8" />
    <ellipse cx="150" cy="150" rx="35" ry="28" fill="#4A8A52" stroke="#1B4B1E" strokeWidth="2.2" />
    <ellipse cx="255" cy="148" rx="32" ry="26" fill="#4A8A52" stroke="#1B4B1E" strokeWidth="2.2" />
    {person(160, 238, 0.4, "#2A1A0E", "#C1272D")}
    {person(240, 240, 0.4, "#2A1A0E", "#1B4B7A")}
  </g>
);

const ElFuerteInsularQueUneDosOrillasDelAtlantico: IllustrationComponent = () => (
  <g>
    <rect x="90" y="215" width="230" height="35" fill="#1B4B7A" opacity="0.45" />
    <path d="M90 225 Q200 215 320 228" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" fill="none" />
    <path d="M120 220 Q200 205 280 220 L280 235 Q200 222 120 235 Z" fill="#8C7B6B" stroke="#5C4A3A" strokeWidth="2" />
    <rect x="150" y="150" width="110" height="72" fill="#9C9282" stroke="#4A4A4A" strokeWidth="2.8" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} x={156 + i * 18} y="140" width="12" height="14" fill="#9C9282" stroke="#4A4A4A" strokeWidth="2" />
    ))}
    <path d="M195 222 L195 190 Q195 178 205 178 L210 178 Q220 178 220 190 L220 222 Z" fill="#2A2A2A" />
    <rect x="235" y="120" width="30" height="105" fill="#8C8272" stroke="#4A4A4A" strokeWidth="2.8" />
    <ellipse cx="165" cy="148" rx="16" ry="10" fill="#3A7A45" opacity="0.85" />
    <ellipse cx="255" cy="118" rx="14" ry="9" fill="#3A7A45" opacity="0.85" />
  </g>
);

const LaMascaraQueSoloLasMujeresPuedenLlevar: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="200" cy="245" rx="90" ry="10" fill="#1B1B1B" opacity="0.25" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1={165 + i * 10} y1="205" x2={160 + i * 10} y2="248" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
      ))}
      <path d="M172 200 Q200 188 228 200 L232 235 Q200 245 168 235 Z" fill={dark} stroke="#0A0A0A" strokeWidth="2.4" />
      <ellipse cx="200" cy="196" rx="26" ry="11" fill="#1B1B1B" stroke="#000" strokeWidth="2" />
      <ellipse cx="200" cy="184" rx="24" ry="11" fill="#1B1B1B" stroke="#000" strokeWidth="2" />
      <ellipse cx="200" cy="174" rx="22" ry="11" fill="#1B1B1B" stroke="#000" strokeWidth="2" />
      <ellipse cx="200" cy="148" rx="30" ry="34" fill="#1B1B1B" stroke="#000" strokeWidth="2.6" />
      <path d="M180 122 Q200 108 220 122" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      <path d="M184 130 Q200 118 216 130" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="190" cy="150" rx="3" ry="2" fill="#F5F0E6" />
      <ellipse cx="210" cy="150" rx="3" ry="2" fill="#F5F0E6" />
      <path d="M194 166 Q200 170 206 166" stroke="#F5F0E6" strokeWidth="1.6" fill="none" />
    </g>
  );
};

const ElSantuarioQueRescataALosUltimosChimpances: IllustrationComponent = () => (
  <g>
    <path d="M110 250 L110 170 L122 170 L122 250 Z" fill="#5C3A21" stroke="#2A1A0E" strokeWidth="2.2" />
    <ellipse cx="116" cy="150" rx="45" ry="38" fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2.4" />
    <path d="M290 250 L290 180 L302 180 L302 250 Z" fill="#5C3A21" stroke="#2A1A0E" strokeWidth="2.2" />
    <ellipse cx="296" cy="162" rx="40" ry="34" fill="#2F6B3A" stroke="#1B4B1E" strokeWidth="2.4" />
    <path d="M150 160 Q220 130 270 155" stroke="#5C3A21" strokeWidth="6" fill="none" strokeLinecap="round" />
    <ellipse cx="180" cy="120" rx="30" ry="22" fill="#3A7A45" opacity="0.8" />
    {chimp(215, 195, 1.15)}
  </g>
);

const LaTelaQueSeAnudaYSeTineAMano: IllustrationComponent = () => (
  <g>
    <rect x="120" y="110" width="160" height="130" fill="#F5F0E6" stroke="#8C7B6B" strokeWidth="2.6" />
    <line x1="100" y1="105" x2="300" y2="105" stroke="#5C3A21" strokeWidth="2.4" />
    <line x1="150" y1="105" x2="150" y2="112" stroke="#5C3A21" strokeWidth="2" />
    <line x1="250" y1="105" x2="250" y2="112" stroke="#5C3A21" strokeWidth="2" />
    <circle cx="165" cy="155" r="28" fill="none" stroke="#1B3A6B" strokeWidth="5" />
    <circle cx="165" cy="155" r="16" fill="none" stroke="#1B3A6B" strokeWidth="4" />
    <circle cx="165" cy="155" r="6" fill="#1B3A6B" />
    <circle cx="235" cy="200" r="24" fill="none" stroke="#1B3A6B" strokeWidth="5" />
    <circle cx="235" cy="200" r="13" fill="none" stroke="#1B3A6B" strokeWidth="4" />
    <circle cx="235" cy="200" r="5" fill="#1B3A6B" />
    <circle cx="210" cy="130" r="9" fill="#1B3A6B" stroke="#0F2340" strokeWidth="1.8" />
    <path d="M203 130 L217 130 M210 123 L210 137" stroke="#0F2340" strokeWidth="1.4" />
    <ellipse cx="200" cy="248" rx="55" ry="12" fill="#1B3A6B" opacity="0.7" stroke="#0F2340" strokeWidth="2" />
  </g>
);

const ElArrozQueAquiSeConsideraLaUnicaComidaReal: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 130 Q150 105 210 125 Q270 110 320 130 L320 150 Q270 132 210 148 Q150 128 90 150 Z" fill="#3A7A45" opacity="0.5" />
      <rect x="90" y="190" width="230" height="55" fill="#6B9AC4" opacity="0.55" />
      <path d="M90 205 Q200 195 320 208" stroke="#F5F0E6" strokeWidth="2" opacity="0.5" fill="none" />
      {[[110, 220], [135, 225], [160, 218], [240, 222], [265, 226], [290, 219]].map(([sx, sy], i) => (
        <g key={i} transform={`translate(${sx} ${sy})`}>
          <path d="M0 0 L-3 -14 M0 0 L0 -16 M0 0 L4 -13" stroke="#3A7A45" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </g>
      ))}
      <g transform="translate(200 205) rotate(18)">
        <circle cx="0" cy="-30" r="9" fill={dark} stroke="#1A120C" strokeWidth="1.6" />
        <path d="M-12 -22 Q0 -27 12 -22 L14 10 Q0 16 -14 10 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
        <path d="M12 -18 Q30 -8 27 12" fill="none" stroke={accentColor} strokeWidth="6" strokeLinecap="round" />
        <line x1="-6" y1="10" x2="-9" y2="36" stroke={dark} strokeWidth="4" strokeLinecap="round" />
        <line x1="6" y1="10" x2="9" y2="36" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      </g>
    </g>
  );
};

const ElVinoDePalmaQueSeRecolectaGotaAGota: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="196" y="130" width="8" height="110" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="2" />
      <path d="M200 130 Q165 118 155 90 M200 130 Q235 116 245 88 M200 130 Q200 105 198 80 M200 130 Q175 115 168 92 M200 130 Q225 118 235 95" stroke="#3A7A45" strokeWidth="6" fill="none" strokeLinecap="round" />
      {person(200, 195, 0.9, dark, accentColor)}
      <path d="M188 195 Q200 185 212 195" fill="none" stroke="#5C3A21" strokeWidth="3" />
      <ellipse cx="222" cy="165" rx="10" ry="14" fill="#8B5A2B" stroke="#5C3A21" strokeWidth="1.8" />
      <path d="M212 165 L204 150" stroke="#3A2A1E" strokeWidth="1.6" />
    </g>
  );
};

const ElGuisoDeHojaDeMandiocaQueReuneALaMesa: IllustrationComponent = () => (
  <g>
    <ellipse cx="200" cy="215" rx="90" ry="24" fill="#F5F0E6" stroke="#8B6F47" strokeWidth="2.6" />
    <ellipse cx="180" cy="195" rx="32" ry="26" fill="#FFFDF5" stroke="#D9C9A3" strokeWidth="2.4" />
    <ellipse cx="248" cy="205" rx="40" ry="27" fill="#2E5E2E" stroke="#16330F" strokeWidth="2.6" />
    {[[228, 198], [250, 192], [268, 203]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${x + 5} ${y - 10}`} stroke="#16330F" strokeWidth="2" strokeLinecap="round" />
    ))}
    <ellipse cx="248" cy="200" rx="14" ry="6" fill="#8A2A1A" opacity="0.6" />
  </g>
);

const LaUniversidadQueSeGanoElApodoDeAtenas: IllustrationComponent = () => (
  <g>
    <rect x="90" y="215" width="230" height="35" fill="#1B4B7A" opacity="0.4" />
    <path d="M90 250 Q200 190 320 235 L320 250 Z" fill="#6B8A45" stroke="#3A5222" strokeWidth="2.2" />
    <rect x="150" y="165" width="110" height="60" fill="#C68642" stroke="#6B4423" strokeWidth="2.6" />
    <path d="M150 165 L205 140 L260 165 Z" fill="#8C6239" stroke="#4A2E14" strokeWidth="2.4" />
    {[168, 190, 212, 234].map((wx, i) => (
      <rect key={i} x={wx} y="185" width="12" height="20" fill="#4A2E14" opacity="0.7" />
    ))}
    <rect x="196" y="110" width="18" height="45" fill="#C68642" stroke="#6B4423" strokeWidth="2.4" />
    <path d="M196 110 L205 92 L214 110 Z" fill="#8C6239" stroke="#4A2E14" strokeWidth="2.2" />
    {person(140, 235, 0.4, "#2A1A0E", "#1B4B7A")}
    {person(285, 232, 0.4, "#2A1A0E", "#8A2A1A")}
  </g>
);

const MonteBintumaniMontanasLoma: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 250 L170 110 L230 180 L270 130 L320 250 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M150 150 L170 110 L190 150 Z" fill="#8C8C8C" stroke={dark} strokeWidth="2.4" />
      <ellipse cx="150" cy="130" rx="30" ry="12" fill="#F5F0E6" opacity="0.7" />
      <ellipse cx="230" cy="150" rx="26" ry="10" fill="#F5F0E6" opacity="0.6" />
      <path d="M90 240 Q140 220 170 235 Q210 250 250 230 Q280 218 320 235" fill="none" stroke={dark} strokeWidth="2" opacity="0.4" />
    </g>
  );
};

const CasasKrioDeFreetown: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="150" y="150" width="100" height="90" fill={accentColor} stroke={dark} strokeWidth="2.6" />
      <path d="M140 150 L200 115 L260 150 Z" fill={dark} stroke={shade(dark, 0.2)} strokeWidth="2.4" />
      <rect x="155" y="170" width="90" height="14" fill={shade(accentColor, 0.2)} />
      <path d="M150 170 L145 184 M250 170 L255 184" stroke={dark} strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={155 + i * 13} y1="170" x2={155 + i * 13} y2="184" stroke={dark} strokeWidth="1.4" opacity="0.6" />
      ))}
      <rect x="165" y="195" width="20" height="24" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      <rect x="215" y="195" width="20" height="24" fill="#F5F0E6" stroke={dark} strokeWidth="1.8" />
      <rect x="190" y="210" width="20" height="30" fill="#5C3A21" stroke="#3A2A1E" strokeWidth="1.8" />
      <path d="M150 240 L150 250 M250 240 L250 250" stroke={dark} strokeWidth="6" strokeLinecap="round" />
    </g>
  );
};

export const sierraLeoneIllustrations: Record<string, IllustrationDefinition> = {
  "el-puerto-fundado-para-acoger-a-la-libertad": { component: ElPuertoFundadoParaAcogerALaLibertad },
  "el-arbol-centenario-que-vio-nacer-una-ciudad": { component: ElArbolCentenarioQueVioNacerUnaCiudad },
  "el-fuerte-insular-que-une-dos-orillas-del-atlantico": { component: ElFuerteInsularQueUneDosOrillasDelAtlantico },
  "la-mascara-que-solo-las-mujeres-pueden-llevar": { component: LaMascaraQueSoloLasMujeresPuedenLlevar },
  "el-santuario-que-rescata-a-los-ultimos-chimpances": { component: ElSantuarioQueRescataALosUltimosChimpances },
  "la-tela-que-se-anuda-y-se-tine-a-mano": { component: LaTelaQueSeAnudaYSeTineAMano },
  "el-arroz-que-aqui-se-considera-la-unica-comida-real": { component: ElArrozQueAquiSeConsideraLaUnicaComidaReal },
  "el-vino-de-palma-que-se-recolecta-gota-a-gota": { component: ElVinoDePalmaQueSeRecolectaGotaAGota },
  "el-guiso-de-hoja-de-mandioca-que-reune-a-la-mesa": { component: ElGuisoDeHojaDeMandiocaQueReuneALaMesa },
  "la-universidad-que-se-gano-el-apodo-de-atenas": { component: LaUniversidadQueSeGanoElApodoDeAtenas },
  "monte-bintumani-montanas-loma": { component: MonteBintumaniMontanasLoma },
  "casas-krio-de-freetown": { component: CasasKrioDeFreetown },
};
