import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const SigiriyaLaRocaDelLeon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="150,245 175,95 225,85 250,245" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="185" y="90" width="40" height="20" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M155 245 Q155 210 175 210 L175 245 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <path d="M245 245 Q245 210 225 210 L225 245 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      {[[163, 220], [237, 220]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="6" ry="4" fill="#3E2E24" />
          <ellipse cx={x - 8} cy={y + 6} rx="5" ry="3" fill="#3E2E24" />
          <ellipse cx={x + 8} cy={y + 6} rx="5" ry="3" fill="#3E2E24" />
        </g>
      ))}
      <rect x="195" y="215" width="20" height="30" fill="#B8A484" opacity="0.7" />
    </g>
  );
};

const ElTeDeCeilanYLasMontanasDeSriLanka: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const rows = [95, 120, 145, 170, 195, 220];
  return (
    <g>
      {rows.map((y, i) => (
        <path key={y} d={`M90 ${y} Q205 ${y - 15} 320 ${y}`} fill="none" stroke={i % 2 === 0 ? accentColor : tint(accentColor, 0.25)} strokeWidth="14" />
      ))}
      <circle cx="230" cy="140" r="13" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M215 155 Q230 148 245 155 L240 210 L220 210 Z" fill="#B71C1C" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="255" cy="190" rx="18" ry="10" fill="#8B5A2B" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const LaEsalaPeraheraDeKandy: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M120 235 Q110 190 130 170 Q125 150 145 145 Q160 143 158 160 Q180 163 185 185 L285 195 L285 235 Z" fill="#5B5B5B" stroke={dark} strokeWidth="3" />
      <path d="M158 160 Q165 130 150 105" fill="none" stroke="#5B5B5B" strokeWidth="10" strokeLinecap="round" />
      <line x1="132" y1="235" x2="132" y2="255" stroke={dark} strokeWidth="6" />
      <line x1="155" y1="235" x2="155" y2="255" stroke={dark} strokeWidth="6" />
      <line x1="255" y1="235" x2="255" y2="255" stroke={dark} strokeWidth="6" />
      <rect x="170" y="150" width="45" height="30" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <rect x="180" y="140" width="25" height="16" fill="#B8860B" stroke={dark} strokeWidth="2" />
      {[190, 210, 230, 250].map((x) => (
        <rect key={x} x={x} y="175" width="10" height="18" fill="#B71C1C" opacity="0.8" />
      ))}
    </g>
  );
};

const AdamsPeakLaMontanaDeLasCuatroReligiones: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="90,245 205,95 320,245" fill={accentColor} stroke={dark} strokeWidth="3" />
      <rect x="192" y="88" width="26" height="18" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      {[[150, 190], [175, 165], [130, 215], [220, 160], [245, 195]].map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y} r="6" fill="#D9B48A" stroke={dark} strokeWidth="1.5" />
          <circle cx={x - 3} cy={y + 12} r="3" fill="#F5F0E6" opacity={0.6 + i * 0.05} />
        </g>
      ))}
      <path d="M90 245 Q150 210 192 106 M320 245 Q260 210 218 106" fill="none" stroke={dark} strokeWidth="2" opacity="0.35" />
    </g>
  );
};

const LosPescadoresDeZancosDeSriLanka: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <ellipse cx="205" cy="240" rx="120" ry="10" fill="#1B5E7A" opacity="0.5" />
      <line x1="205" y1="240" x2="205" y2="120" stroke="#5C3A21" strokeWidth="7" />
      <line x1="180" y1="200" x2="230" y2="200" stroke="#5C3A21" strokeWidth="5" />
      <circle cx="205" cy="150" r="14" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M191 165 Q205 158 219 165 L215 205 L195 205 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <line x1="215" y1="175" x2="255" y2="160" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
      <line x1="255" y1="160" x2="260" y2="210" stroke="#3E2E24" strokeWidth="1.5" />
    </g>
  );
};

const LaCanelaDeCeilanLaCanelaVerdadera: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      {[[160, 175, 20], [200, 165, 24], [240, 180, 18], [270, 170, 16]].map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill="none" stroke={accentColor} strokeWidth="4" />
          <circle cx={x} cy={y} r={r * 0.6} fill="none" stroke={tint(accentColor, 0.3)} strokeWidth="3" />
        </g>
      ))}
      <path d="M120 220 L160 190 L155 205 L175 200 L130 235 Z" fill="#8B7355" stroke={dark} strokeWidth="2.5" />
    </g>
  );
};

const LosTanquesDeAguaDeAnuradhapura: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 200 Q205 180 320 200 L320 235 Q205 215 90 235 Z" fill="#8B7355" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="175" rx="110" ry="35" fill={accentColor} stroke={dark} strokeWidth="3" />
      <ellipse cx="205" cy="172" rx="90" ry="26" fill={tint(accentColor, 0.3)} opacity="0.7" />
      {[[130, 220], [175, 225], [225, 222], [270, 218]].map(([x, y]) => (
        <path key={x} d={`M${x - 12} ${y} Q${x} ${y - 10} ${x + 12} ${y}`} fill="none" stroke="#3F7D2E" strokeWidth="4" />
      ))}
    </g>
  );
};

const LasMascarasKolamYLaDanzaDeLosDemonios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M150 100 Q205 80 260 100 Q270 160 205 220 Q140 160 150 100 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <circle cx="178" cy="140" r="14" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="232" cy="140" r="14" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <circle cx="178" cy="140" r="6" fill="#1A1A1A" />
      <circle cx="232" cy="140" r="6" fill="#1A1A1A" />
      <path d="M170 185 Q205 175 240 185 L235 200 L215 190 L205 200 L195 190 L175 200 Z" fill="#F5F0E6" stroke={dark} strokeWidth="2" />
      <path d="M140 110 Q125 95 135 80 M270 110 Q285 95 275 80" fill="none" stroke="#B71C1C" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
};

const RatnapuraLaCiudadDeLasGemas: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <path d="M90 220 Q205 200 320 220 L320 240 Q205 222 90 240 Z" fill="#1B5E7A" opacity="0.5" />
      <circle cx="180" cy="175" r="15" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M165 190 Q180 182 195 190 L188 225 L172 225 Z" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="195" cy="215" rx="35" ry="12" fill="#B8A484" stroke={dark} strokeWidth="2" transform="rotate(-15 195 215)" />
      <polygon points="255,150 268,168 255,190 242,168" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="255,150 262,168 255,178 248,168" fill={tint(accentColor, 0.4)} opacity="0.7" />
    </g>
  );
};

const LaDanzaKandianaYSusTambores: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <polygon points="205,60 218,95 205,90 192,95" fill="#C9C9C9" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="60" x2="205" y2="40" stroke="#C9C9C9" strokeWidth="3" />
      <circle cx="205" cy="112" r="14" fill="#D9B48A" stroke={dark} strokeWidth="2" />
      <path d="M188 130 Q205 120 222 130 L232 210 L178 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M232 145 Q260 150 265 175" fill="none" stroke="#D9B48A" strokeWidth="8" strokeLinecap="round" />
      <rect x="248" y="165" width="40" height="24" rx="4" fill="#8B5A2B" stroke={dark} strokeWidth="2.5" transform="rotate(20 268 177)" />
    </g>
  );
};

const GalleFortLaFortalezaColonialHolandesa: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const roof = "#A0332B";
  return (
    <g>
      {/* stone rampart wall */}
      <rect x="85" y="200" width="235" height="50" fill={accentColor} stroke={dark} strokeWidth="3" />
      {[110, 150, 190, 230, 270, 300].map((x) => (
        <rect key={x} x={x} y="200" width="4" height="50" fill={dark} opacity="0.3" />
      ))}
      {/* houses with red-tiled roofs behind the wall */}
      <rect x="130" y="150" width="60" height="50" fill={tint(accentColor, 0.3)} stroke={dark} strokeWidth="2" />
      <polygon points="120,150 160,120 200,150" fill={roof} stroke={shade(roof, 0.3)} strokeWidth="2" />
      <rect x="220" y="160" width="55" height="40" fill={tint(accentColor, 0.2)} stroke={dark} strokeWidth="2" />
      <polygon points="212,160 247,135 282,160" fill={roof} stroke={shade(roof, 0.3)} strokeWidth="2" />
      {/* white lighthouse */}
      <rect x="290" y="110" width="18" height="90" fill="#F5F0E6" stroke={dark} strokeWidth="2.5" />
      <rect x="286" y="100" width="26" height="14" fill={dark} />
      <rect x="292" y="130" width="14" height="10" fill={dark} opacity="0.6" />
    </g>
  );
};

const ElOrfanatoDeElefantesDePinnawala: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = "#3D8FB0";
  return (
    <g>
      {/* river */}
      <path d="M85 200 Q205 190 320 200 L320 250 L85 250 Z" fill={water} opacity="0.6" />
      {/* two baby elephants bathing */}
      {[
        [160, 215],
        [260, 220],
      ].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx="38" ry="26" fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <circle cx={x - 32} cy={y - 8} r="20" fill={accentColor} stroke={dark} strokeWidth="2.5" />
          <path d={`M${x - 48} ${y - 4} Q${x - 58} ${y + 8} ${x - 50} ${y + 20}`} fill="none" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
          <ellipse cx={x - 38} cy={y - 14} rx="8" ry="10" fill={dark} opacity="0.5" />
          {/* water splash droplets */}
          <circle cx={x + 10} cy={y - 20} r="3" fill="#F5F0E6" opacity="0.7" />
          <circle cx={x + 20} cy={y - 14} r="2.5" fill="#F5F0E6" opacity="0.7" />
        </g>
      ))}
    </g>
  );
};

const VesakElFestivalDeLosFaroles: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const houseColor = tint(accentColor, 0.4);
  return (
    <g>
      {/* house silhouette, lit at night */}
      <rect x="90" y="170" width="130" height="80" fill={houseColor} stroke={dark} strokeWidth="2.5" />
      <polygon points="80,170 155,130 230,170" fill={shade(houseColor, 0.2)} stroke={dark} strokeWidth="2.5" />
      <rect x="130" y="200" width="30" height="50" fill={dark} opacity="0.6" />
      {/* string of lanterns across */}
      <path d="M225 130 Q270 110 315 135" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[240, 265, 290, 310].map((x, i) => {
        const y = 135 + (i % 2) * 10;
        return (
          <g key={x}>
            <line x1={x} y1={y - 10} x2={x} y2={y} stroke={dark} strokeWidth="1.5" opacity="0.5" />
            <ellipse cx={x} cy={y + 12} rx="11" ry="14" fill={i % 2 === 0 ? accentColor : gold} stroke={dark} strokeWidth="1.5" />
          </g>
        );
      })}
    </g>
  );
};

const ElAvistamientoDeBallenasAzules: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const water = tint(accentColor, 0.3);
  const boatColor = "#8B5A2B";
  return (
    <g>
      {/* water */}
      <rect x="85" y="150" width="235" height="100" fill={water} opacity="0.5" />
      {/* whale body surfacing */}
      <path d="M110 200 Q140 175 210 180 Q260 183 280 200 Q250 210 190 208 Q140 208 110 200 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* dorsal fin */}
      <path d="M225 182 Q235 165 245 182 Z" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* water spout */}
      <path d="M150 178 Q145 160 150 145 M150 178 Q155 158 160 148" stroke={dark} strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />
      {/* eye */}
      <circle cx="120" cy="196" r="3" fill={dark} />
      {/* small boat */}
      <path d="M270 220 L310 220 L302 235 L278 235 Z" fill={boatColor} stroke={dark} strokeWidth="2" />
      <line x1="290" y1="220" x2="290" y2="200" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const ElCriquetLaPasionDe1996: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const wood = "#C9A876";
  return (
    <g>
      {/* trophy */}
      <path d="M180 160 Q180 200 205 205 Q230 200 230 160 Z" fill={gold} stroke={shade(gold, 0.3)} strokeWidth="2.5" />
      <path d="M180 165 Q160 165 160 180 Q160 195 182 190" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      <path d="M230 165 Q250 165 250 180 Q250 195 228 190" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      <rect x="195" y="205" width="20" height="15" fill={gold} />
      <rect x="180" y="220" width="50" height="10" fill={shade(gold, 0.2)} />
      {/* bat leaning */}
      <path d="M120 235 L145 140 L158 143 L133 238 Z" fill={wood} stroke={dark} strokeWidth="2" />
      <rect x="112" y="230" width="20" height="30" rx="6" fill={dark} />
      {/* confetti */}
      {[
        [100, 110, accentColor],
        [270, 120, gold],
        [290, 160, accentColor],
        [110, 170, gold],
        [260, 90, accentColor],
      ].map(([x, y, c], i) => (
        <rect key={i} x={x as number} y={y as number} width="8" height="4" fill={c as string} transform={`rotate(${(i * 37) % 90} ${x} ${y})`} />
      ))}
    </g>
  );
};

export const sriLankaIllustrations: Record<string, IllustrationDefinition> = {
  "sigiriya-la-roca-del-leon": { component: SigiriyaLaRocaDelLeon },
  "el-te-de-ceilan-y-las-montanas-de-sri-lanka": { component: ElTeDeCeilanYLasMontanasDeSriLanka },
  "la-esala-perahera-de-kandy": { component: LaEsalaPeraheraDeKandy },
  "adams-peak-la-montana-de-las-cuatro-religiones": { component: AdamsPeakLaMontanaDeLasCuatroReligiones },
  "los-pescadores-de-zancos-de-sri-lanka": { component: LosPescadoresDeZancosDeSriLanka },
  "la-canela-de-ceilan-la-canela-verdadera": { component: LaCanelaDeCeilanLaCanelaVerdadera },
  "los-tanques-de-agua-de-anuradhapura": { component: LosTanquesDeAguaDeAnuradhapura },
  "las-mascaras-kolam-y-la-danza-de-los-demonios": { component: LasMascarasKolamYLaDanzaDeLosDemonios },
  "ratnapura-la-ciudad-de-las-gemas": { component: RatnapuraLaCiudadDeLasGemas },
  "la-danza-kandiana-y-sus-tambores": { component: LaDanzaKandianaYSusTambores },
  "galle-fort-la-fortaleza-colonial-holandesa": { component: GalleFortLaFortalezaColonialHolandesa },
  "el-orfanato-de-elefantes-de-pinnawala": { component: ElOrfanatoDeElefantesDePinnawala },
  "vesak-el-festival-de-los-faroles": { component: VesakElFestivalDeLosFaroles },
  "el-avistamiento-de-ballenas-azules": { component: ElAvistamientoDeBallenasAzules },
  "el-criquet-la-pasion-de-1996": { component: ElCriquetLaPasionDe1996 },
};
