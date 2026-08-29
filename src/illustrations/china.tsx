import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const GranMuralla: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      <polygon points="95,240 150,180 200,220 250,160 320,220 320,250 95,250" fill={light} opacity="0.5" />
      <path d="M100 235 Q140 195 180 215 Q220 170 260 195 Q290 175 315 200" fill="none" stroke={accentColor} strokeWidth="20" strokeLinecap="round" />
      {[110, 150, 190, 230, 270, 305].map((x, i) => (
        <rect key={x} x={x} y={[220, 195, 205, 175, 190, 180][i] - 22} width="14" height="22" fill={dark} />
      ))}
    </g>
  );
};

const CuatroGrandesInventos: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* compass */}
      <circle cx="165" cy="175" r="45" fill={light} stroke={dark} strokeWidth="3" />
      <circle cx="165" cy="175" r="34" fill="none" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <polygon points="165,140 174,175 165,210 156,175" fill={accentColor} stroke={dark} strokeWidth="1.5" />
      <circle cx="165" cy="175" r="5" fill={dark} />
      {/* rolled sheet of paper */}
      <path d="M240 150 L290 150 L290 220 L240 220 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <ellipse cx="240" cy="150" rx="10" ry="10" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <ellipse cx="240" cy="220" rx="10" ry="10" fill="#F5EFE0" stroke={dark} strokeWidth="2" />
      <line x1="255" y1="165" x2="280" y2="165" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      <line x1="255" y1="180" x2="280" y2="180" stroke={dark} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
};

const Confucio: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      {/* rolled scroll */}
      <path d="M130 145 L130 225 L200 225 L200 145 Z" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="130" cy="185" rx="10" ry="40" fill={accentColor} stroke={dark} strokeWidth="2" />
      <ellipse cx="200" cy="185" rx="10" ry="40" fill={accentColor} stroke={dark} strokeWidth="2" />
      <text x="165" y="195" fontSize="30" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">仁</text>
      {/* writing brush beside it */}
      <path d="M240 235 L270 150 L280 153 L252 238 Z" fill="#B5651D" stroke={dark} strokeWidth="1.5" />
      <path d="M264 128 Q280 133 275 150 L258 145 Q260 132 264 128 Z" fill="#1A1A1A" />
      <rect x="248" y="118" width="16" height="20" fill={light} transform="rotate(15 256 128)" />
    </g>
  );
};

const EjercitoTerracota: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}-${col}`} transform={`translate(${130 + col * 45 - row * 10}, ${230 - row * 22})`}>
            <rect x="0" y="0" width="24" height="34" fill={row % 2 === 0 ? accentColor : dark} />
            <circle cx="12" cy="-8" r="10" fill={light} />
          </g>
        ))
      )}
    </g>
  );
};

const TeChino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* small clay teapot */}
      <path d="M130 200 Q130 175 165 175 Q200 175 200 200 Q200 220 165 220 Q130 220 130 200 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M108 195 Q95 195 95 210 Q95 222 112 218" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <path d="M200 195 L222 180" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="165" cy="172" rx="12" ry="6" fill={dark} />
      {/* steaming cup */}
      <path d="M250 210 L280 210 L276 235 L254 235 Z" fill={light} stroke={dark} strokeWidth="2" />
      <path d="M262 200 Q256 190 262 180" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </g>
  );
};

const AnoNuevoChino: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  return (
    <g>
      <rect x="165" y="140" width="70" height="90" rx="4" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M165 140 L200 175 L235 140" fill="none" stroke={dark} strokeWidth="2" />
      <circle cx="200" cy="195" r="14" fill={gold} />
      <text x="200" y="201" fontSize="16" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">福</text>
      {/* fireworks */}
      {[[280, 120], [110, 150]].map(([x, y], i) => (
        <g key={x}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1={x} y1={y} x2={x} y2={(y as number) - 16} stroke={i % 2 === 0 ? gold : "#C1272D"} strokeWidth="3" strokeLinecap="round" transform={`rotate(${deg} ${x} ${y})`} />
          ))}
        </g>
      ))}
    </g>
  );
};

const CaligrafiaChina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <rect x="130" y="115" width="150" height="130" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      <text x="205" y="215" fontSize="90" fontWeight="700" fill={dark} textAnchor="middle" fontFamily="serif">道</text>
      {/* ink brush tracing it */}
      <path d="M255 145 L300 100 L310 103 L268 152 Z" fill="#B5651D" stroke={dark} strokeWidth="1.5" />
      <path d="M293 85 Q310 90 302 108 L285 100 Q287 88 293 85 Z" fill="#1A1A1A" />
    </g>
  );
};

const KungFuShaolin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  return (
    <g>
      {/* temple with curved roofs behind */}
      <polygon points="230,180 280,150 330,180" fill={dark} opacity="0.5" />
      <rect x="245" y="180" width="70" height="55" fill={light} opacity="0.5" />
      {/* monk in fighting stance */}
      <circle cx="180" cy="140" r="16" fill={skin} />
      <path d="M165 156 Q180 148 195 156 L188 210 L172 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M170 160 Q145 165 138 145" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M190 160 Q212 172 205 195" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M172 210 L160 240" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <path d="M188 210 Q210 210 218 190" fill="none" stroke={skin} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
};

const PandasGigantes: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.7);
  const green = "#4A8F4E";
  return (
    <g>
      {/* panda body, sitting */}
      <ellipse cx="205" cy="200" rx="55" ry="42" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="150" r="35" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="180" cy="128" r="12" fill={dark} />
      <circle cx="230" cy="128" r="12" fill={dark} />
      <ellipse cx="190" cy="150" rx="10" ry="13" fill={dark} />
      <ellipse cx="220" cy="150" rx="10" ry="13" fill={dark} />
      <circle cx="192" cy="150" r="3" fill="#fff" />
      <circle cx="222" cy="150" r="3" fill="#fff" />
      <ellipse cx="205" cy="165" rx="8" ry="6" fill={dark} />
      <ellipse cx="180" cy="200" rx="16" ry="24" fill={dark} />
      <ellipse cx="230" cy="200" rx="16" ry="24" fill={dark} />
      {/* bamboo stalk */}
      <path d="M195 210 L210 175" stroke={green} strokeWidth="9" strokeLinecap="round" />
      <path d="M198 195 L192 188 M202 183 L196 178" stroke={green} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const TrenAltaVelocidad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      {/* long-nosed bullet train */}
      <path d="M110 210 Q95 200 110 185 L150 175 L300 175 L300 210 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <path d="M110 185 Q130 178 150 178" fill="none" stroke={dark} strokeWidth="2" opacity="0.5" />
      {[160, 190, 220, 250, 280].map((x) => (
        <rect key={x} x={x} y="182" width="20" height="16" fill={light} />
      ))}
      <line x1="95" y1="220" x2="320" y2="220" stroke={dark} strokeWidth="4" />
      {/* speed lines */}
      <line x1="95" y1="200" x2="60" y2="200" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <line x1="95" y1="215" x2="70" y2="215" stroke={dark} strokeWidth="4" strokeLinecap="round" opacity="0.35" />
    </g>
  );
};

const CiudadProhibida: IllustrationComponent = () => {
  const gold = "#D4A017";
  const goldDark = shade(gold, 0.35);
  const stone = "#C9C2B4";
  const stoneDark = shade(stone, 0.35);
  const red = "#9E2B25";
  const redDark = shade(red, 0.4);
  return (
    <g>
      {/* stone platform */}
      <rect x="90" y="220" width="220" height="25" fill={stone} stroke={stoneDark} strokeWidth="2" />
      <rect x="105" y="208" width="190" height="14" fill={stone} stroke={stoneDark} strokeWidth="1.5" />
      {/* red walls with pillars */}
      <rect x="115" y="152" width="170" height="70" fill={red} stroke={redDark} strokeWidth="2.5" />
      {[130, 155, 180, 205, 230, 255, 275].map((x) => (
        <rect key={x} x={x} y="152" width="7" height="70" fill={redDark} opacity="0.6" />
      ))}
      {/* golden roof */}
      <polygon points="95,152 145,115 255,115 305,152" fill={gold} stroke={goldDark} strokeWidth="2.5" />
      <rect x="150" y="103" width="100" height="14" fill={goldDark} />
      {/* upturned eaves */}
      <path d="M95 152 Q80 138 98 120" fill="none" stroke={gold} strokeWidth="7" strokeLinecap="round" />
      <path d="M305 152 Q320 138 302 120" fill="none" stroke={gold} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
};

const OperaDePekin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#E8B98A";
  const white = "#F5F0E6";
  const gold = "#D4A017";
  return (
    <g>
      {/* headdress plumes */}
      <path d="M170 95 Q160 60 145 40" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      <path d="M230 95 Q240 60 255 40" fill="none" stroke={gold} strokeWidth="6" strokeLinecap="round" />
      <circle cx="168" cy="108" r="9" fill={accentColor} stroke={dark} strokeWidth="2" />
      <circle cx="232" cy="108" r="9" fill={accentColor} stroke={dark} strokeWidth="2" />
      {/* painted face */}
      <circle cx="200" cy="140" r="30" fill={skin} stroke={dark} strokeWidth="2.5" />
      <path d="M172 130 Q200 118 228 130 L224 148 Q200 138 176 148 Z" fill={accentColor} />
      <path d="M186 150 L192 162 L200 152 L208 162 L214 150" fill="none" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      {/* robe with water sleeves */}
      <path d="M160 168 Q200 155 240 168 L255 235 L145 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M160 168 Q118 188 104 228 Q126 246 152 224 Z" fill={white} stroke={dark} strokeWidth="2" />
      <path d="M240 168 Q282 188 296 228 Q274 246 248 224 Z" fill={white} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const FestivalBoteDelDragon: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const gold = "#D4A017";
  const water = "#3A7CA5";
  const skin = "#E8B98A";
  return (
    <g>
      {/* water */}
      <path d="M85 235 Q140 225 200 235 Q260 245 315 235 L315 250 L85 250 Z" fill={water} opacity="0.5" />
      {/* boat hull */}
      <path d="M110 220 Q200 205 290 220 L280 235 L120 235 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      {/* dragon head at bow */}
      <path d="M100 210 Q80 200 78 218 Q80 232 100 225 L112 222 L110 208 Z" fill={gold} stroke={dark} strokeWidth="2.5" />
      <circle cx="88" cy="212" r="3.5" fill={dark} />
      <path d="M78 205 Q68 195 74 188" fill="none" stroke={gold} strokeWidth="5" strokeLinecap="round" />
      {/* tail fin at stern */}
      <path d="M290 213 L308 198 L302 222 Z" fill={gold} stroke={dark} strokeWidth="2" />
      {/* three rowers */}
      {[145, 195, 245].map((x) => (
        <g key={x}>
          <circle cx={x} cy="196" r="10" fill={skin} />
          <rect x={x - 9} y="204" width="18" height="20" fill="#C1272D" />
          <path d={`M${x - 9} 210 L${x - 28} 200`} stroke={skin} strokeWidth="6" strokeLinecap="round" />
          <line x1={x - 28} y1="200" x2={x - 40} y2="215" stroke="#8B5A2B" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
};

const PorcelanaAzulYBlanca: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const cream = "#F5F0E6";
  return (
    <g>
      <rect x="150" y="230" width="100" height="14" fill={dark} />
      <path
        d="M180 230 L175 190 Q160 170 165 145 Q168 120 200 112 Q232 120 235 145 Q240 170 225 190 L220 230 Z"
        fill={cream}
        stroke={dark}
        strokeWidth="3"
      />
      <ellipse cx="200" cy="112" rx="18" ry="7" fill={cream} stroke={dark} strokeWidth="2.5" />
      <path d="M172 200 Q190 190 200 200 Q210 190 228 200" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M175 160 Q200 145 225 160" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="140" r="10" fill="none" stroke={accentColor} strokeWidth="2.5" />
      <path d="M195 135 Q200 128 205 135 Q200 142 195 135 Z" fill={accentColor} />
    </g>
  );
};

const RutaDeLaSeda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const sand = tint(accentColor, 0.6);
  const skin = "#D9A46A";
  return (
    <g>
      {/* dunes */}
      <path d="M85 245 Q140 220 200 240 Q260 215 320 240 L320 250 L85 250 Z" fill={sand} opacity="0.6" />
      {/* background small camel */}
      <g opacity="0.55" transform="translate(50,6)">
        <ellipse cx="120" cy="205" rx="24" ry="14" fill={dark} />
        <path d="M118 192 Q108 175 118 168" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
        <line x1="105" y1="215" x2="102" y2="235" stroke={dark} strokeWidth="6" strokeLinecap="round" />
        <line x1="135" y1="215" x2="138" y2="235" stroke={dark} strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* neck and head, drawn first so the body's fill absorbs the seam */}
      <path
        d="M145 215 Q118 200 110 178 Q106 165 116 158 Q126 160 128 175 Q133 197 158 213 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      <ellipse cx="118" cy="160" rx="9" ry="7" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* body with two humps, on top of the neck's attach point */}
      <path
        d="M140 220 Q150 195 168 205 Q178 190 190 205 Q205 195 215 218 L215 225 L140 225 Z"
        fill={accentColor}
        stroke={dark}
        strokeWidth="3"
      />
      {/* legs */}
      <line x1="155" y1="223" x2="152" y2="248" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      <line x1="200" y1="223" x2="204" y2="248" stroke={dark} strokeWidth="8" strokeLinecap="round" />
      {/* tail */}
      <path d="M215 220 Q228 225 226 240" fill="none" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      {/* packs tied between the humps */}
      <rect x="172" y="198" width="18" height="16" fill="#8B5A2B" stroke={dark} strokeWidth="1.5" />
      {/* rider */}
      <circle cx="180" cy="180" r="9" fill={skin} />
      <path d="M170 188 Q180 182 190 188 L187 210 L173 210 Z" fill="#8B2942" stroke={dark} strokeWidth="2" />
    </g>
  );
};

const FestivalDelMedioOtono: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const moonColor = "#F5E7B8";
  const plate = "#E8DCC8";
  return (
    <g>
      {/* full moon */}
      <circle cx="270" cy="115" r="38" fill={moonColor} stroke={dark} strokeWidth="2" opacity="0.9" />
      {/* lantern */}
      <ellipse cx="130" cy="140" rx="26" ry="32" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      <line x1="130" y1="108" x2="130" y2="96" stroke={dark} strokeWidth="2" />
      <rect x="122" y="90" width="16" height="8" fill={dark} />
      <path d="M130 172 L130 190" stroke="#D4A017" strokeWidth="3" strokeLinecap="round" />
      <circle cx="130" cy="194" r="4" fill="#D4A017" />
      {[112, 148].map((x) => (
        <line key={x} x1={x} y1="115" x2={x} y2="165" stroke={dark} strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* plate with mooncakes */}
      <ellipse cx="205" cy="225" rx="70" ry="14" fill={plate} stroke={dark} strokeWidth="2" />
      {[175, 205, 235].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={210 - (i % 2) * 4} r="20" fill={accentColor} stroke={dark} strokeWidth="2" />
          <path
            d={`M${x - 10} ${210 - (i % 2) * 4} L${x + 10} ${210 - (i % 2) * 4} M${x} ${200 - (i % 2) * 4} L${x} ${220 - (i % 2) * 4}`}
            stroke={dark}
            strokeWidth="1.5"
            opacity="0.6"
          />
        </g>
      ))}
    </g>
  );
};

const TaiChi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const skin = "#D9A46A";
  const green = "#4A7A52";
  return (
    <g>
      {/* tree in the park */}
      <ellipse cx="290" cy="130" rx="26" ry="24" fill={green} opacity="0.5" />
      <rect x="286" y="150" width="8" height="40" fill="#6B4A2F" opacity="0.5" />
      <line x1="95" y1="235" x2="320" y2="235" stroke={dark} strokeWidth="2" opacity="0.4" />
      {/* figure in tai chi stance */}
      <circle cx="195" cy="120" r="16" fill={skin} />
      <path d="M175 134 Q195 126 215 134 L225 210 Q195 220 165 210 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M178 140 Q150 130 140 105" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M212 142 Q230 165 205 185" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      <path d="M180 208 L155 235" stroke={accentColor} strokeWidth="13" strokeLinecap="round" />
      <path d="M210 208 L245 235" stroke={accentColor} strokeWidth="13" strokeLinecap="round" />
    </g>
  );
};

const Mahjong: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const tileColor = "#F5F0E6";
  const skin = "#D9A46A";
  return (
    <g>
      {/* table */}
      <rect x="90" y="215" width="230" height="30" fill={accentColor} opacity="0.5" />
      {/* wall of stacked tiles */}
      {[120, 145, 170, 195, 220, 245, 270].map((x, i) => (
        <g key={x}>
          <rect x={x} y="190" width="20" height="28" fill={tileColor} stroke={dark} strokeWidth="2" />
          <rect x={x} y="162" width="20" height="28" fill={tileColor} stroke={dark} strokeWidth="2" />
          {i % 3 === 0 && <circle cx={x + 10} cy="176" r="4" fill="#3A7CA5" />}
          {i % 3 === 1 && <line x1={x + 10} y1="168" x2={x + 10} y2="184" stroke="#4A7A52" strokeWidth="3" />}
          {i % 3 === 2 && (
            <text x={x + 10} y="182" fontSize="12" fill="#8B2942" textAnchor="middle" fontFamily="serif">
              中
            </text>
          )}
        </g>
      ))}
      {/* hand placing a tile */}
      <path d="M330 150 L300 185 L280 200" stroke={skin} strokeWidth="14" strokeLinecap="round" fill="none" />
      <rect x="272" y="188" width="20" height="26" fill={tileColor} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Guqin: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const wood = "#6B4A2F";
  return (
    <g>
      {/* low table */}
      <rect x="120" y="215" width="180" height="10" fill={wood} />
      <line x1="135" y1="225" x2="130" y2="245" stroke={wood} strokeWidth="6" strokeLinecap="round" />
      <line x1="285" y1="225" x2="290" y2="245" stroke={wood} strokeWidth="6" strokeLinecap="round" />
      {/* instrument */}
      <path d="M110 205 Q200 195 310 205 L305 218 Q200 210 115 218 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={120 + i * 27} y1="207" x2={120 + i * 27} y2="216" stroke={dark} strokeWidth="1" opacity="0.6" />
      ))}
      {/* seated figure */}
      <circle cx="205" cy="150" r="15" fill={skin} />
      <path d="M188 163 Q205 156 222 163 L228 205 L182 205 Z" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M190 175 Q170 190 160 205" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M220 175 Q240 190 250 205" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const MedicinaTradicionalChina: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.45);
  const skin = "#D9A46A";
  const needle = "#B0B0B0";
  return (
    <g>
      {/* back silhouette, seen from behind */}
      <circle cx="200" cy="110" r="20" fill={skin} />
      <ellipse cx="185" cy="98" rx="14" ry="10" fill={dark} />
      <path
        d="M170 128 Q200 115 230 128 Q240 180 225 235 L175 235 Q160 180 170 128 Z"
        fill={skin}
        stroke={dark}
        strokeWidth="2.5"
      />
      <line x1="200" y1="135" x2="200" y2="225" stroke={dark} strokeWidth="1.5" opacity="0.4" strokeDasharray="3,4" />
      {/* acupuncture needles at marked points */}
      {[
        [185, 150],
        [215, 150],
        [180, 175],
        [220, 175],
        [195, 200],
        [205, 145],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <line x1={x} y1={y} x2={x} y2={y - 16} stroke={needle} strokeWidth="1.5" />
          <circle cx={x} cy={y - 16} r="2.5" fill={dark} />
        </g>
      ))}
    </g>
  );
};

export const chinaIllustrations: Record<string, IllustrationDefinition> = {
  "gran-muralla": { component: GranMuralla },
  "cuatro-grandes-inventos": { component: CuatroGrandesInventos },
  confucio: { component: Confucio },
  "ejercito-terracota": { component: EjercitoTerracota },
  "te-chino": { component: TeChino },
  "ano-nuevo-chino": { component: AnoNuevoChino },
  "caligrafia-china": { component: CaligrafiaChina },
  "kung-fu-shaolin": { component: KungFuShaolin },
  "pandas-gigantes": { component: PandasGigantes },
  "tren-alta-velocidad": { component: TrenAltaVelocidad },
  "ciudad-prohibida": { component: CiudadProhibida },
  "opera-de-pekin": { component: OperaDePekin },
  "festival-bote-del-dragon": { component: FestivalBoteDelDragon },
  "porcelana-azul-y-blanca": { component: PorcelanaAzulYBlanca },
  "ruta-de-la-seda": { component: RutaDeLaSeda },
  "festival-medio-otono": { component: FestivalDelMedioOtono },
  "tai-chi": { component: TaiChi },
  mahjong: { component: Mahjong },
  guqin: { component: Guqin },
  "medicina-tradicional-china": { component: MedicinaTradicionalChina },
};
