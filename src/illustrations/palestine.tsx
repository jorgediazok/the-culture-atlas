import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const Tatreez: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const gold = "#D4A017";
  const green = "#4A8F4E";
  return (
    <g>
      <rect x="110" y="105" width="190" height="140" fill="#F5EFE0" stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={130 + col * 32}
            y={125 + row * 28}
            width="18"
            height="18"
            fill={(row + col) % 3 === 0 ? accentColor : (row + col) % 3 === 1 ? gold : green}
            transform={`rotate(45 ${139 + col * 32} ${134 + row * 28})`}
          />
        ))
      )}
    </g>
  );
};

const OlivosMilenarios: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const trunk = "#6B5439";
  return (
    <g>
      {/* gnarled, twisted trunk */}
      <path d="M190 240 Q180 200 195 175 Q175 165 180 140 Q195 150 200 170 Q210 145 195 120 Q215 130 210 160 Q225 150 220 175 Q230 195 215 240 Z" fill={trunk} stroke={dark} strokeWidth="2" />
      {/* canopy of olive leaves */}
      <circle cx="175" cy="120" r="32" fill={accentColor} />
      <circle cx="215" cy="105" r="34" fill={shade(accentColor, 0.1)} />
      <circle cx="240" cy="130" r="28" fill={accentColor} />
      {/* olives */}
      {[[165, 125], [225, 115], [245, 135]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill="#2E4A1E" />
      ))}
    </g>
  );
};

const Dabke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const skin = "#D9A46A";
  const people = [140, 205, 270];
  return (
    <g>
      {people.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="140" r="15" fill={skin} />
          <path d={`M${x - 16} 155 Q${x} 148 ${x + 16} 155 L${x + 12} 220 L${x - 12} 220 Z`} fill={i % 2 === 0 ? accentColor : dark} />
          <path d={`M${x - 12} 200 L${x - 22} 230 M${x + 12} 200 L${x + 4} 230`} stroke={skin} strokeWidth="9" strokeLinecap="round" />
        </g>
      ))}
      {/* shoulders linked */}
      <path d="M155 160 L190 160 M220 160 L255 160" stroke={skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
};

const Keffiyeh: IllustrationComponent = ({ accentColor }) => {
  const dark = "#1A1A1A";
  return (
    <g>
      <path d="M130 105 L280 105 L300 190 Q260 230 205 240 Q150 230 110 190 Z" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          (row + col) % 2 === 0 && (
            <rect key={`${row}-${col}`} x={135 + col * 32} y={115 + row * 18} width="30" height="17" fill={dark} opacity="0.85" />
          )
        ))
      )}
      <rect x="120" y="200" width="170" height="8" fill={dark} opacity="0.6" transform="rotate(-3 205 204)" />
      {/* tassled fringe along the bottom edge, in the page's accent color */}
      {[130, 150, 170, 190, 210, 230, 250, 270].map((x) => (
        <line key={x} x1={x} y1="230" x2={x - 3} y2="248" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      ))}
    </g>
  );
};

const Maqluba: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const rice = "#F0D080";
  const green = "#4A8F4E";
  const purple = "#6B4B8A";
  return (
    <g>
      {/* platter */}
      <ellipse cx="205" cy="220" rx="95" ry="20" fill="#F5EFE0" stroke={dark} strokeWidth="2.5" />
      {/* layered dome shape */}
      <path d="M140 220 Q140 160 205 150 Q270 160 270 220 Z" fill={rice} stroke={dark} strokeWidth="2.5" />
      {[[175, 190], [235, 195], [205, 175]].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="16" ry="9" fill={purple} />
      ))}
      {[[160, 205], [250, 205]].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx="14" ry="8" fill={green} />
      ))}
      {/* the pot, tilted, being lifted off */}
      <path d="M175 130 L235 130 L228 155 L182 155 Z" fill={dark} opacity="0.7" transform="rotate(-12 205 142)" />
    </g>
  );
};

const MahmoudDarwish: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M205 150 L120 165 L120 225 L205 215 Z" fill={accentColor} />
      <path d="M205 150 L290 165 L290 225 L205 215 Z" fill={dark} />
      <line x1="205" y1="150" x2="205" y2="215" stroke={light} strokeWidth="2" />
      {[170, 185, 200].map((y) => (
        <line key={y} x1="135" y1={y} x2="190" y2={y - 3} stroke={light} strokeWidth="1.5" opacity="0.7" />
      ))}
      {/* quill pen */}
      <path d="M255 110 Q280 118 262 145 L235 200 L223 196 L250 145 Q236 122 255 110 Z" fill={dark} />
      <line x1="235" y1="200" x2="225" y2="220" stroke={dark} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
};

const JabonNablus: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const soap = "#D9E0B0";
  return (
    <g>
      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          {[0, 1].map((col) => (
            <rect
              key={col}
              x={160 + col * 55 - row * 3}
              y={225 - row * 32}
              width="50"
              height="26"
              fill={soap}
              stroke={dark}
              strokeWidth="2"
            />
          ))}
        </g>
      ))}
    </g>
  );
};

const BelenNatividad: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const silver = "#C8CDD3";
  return (
    <g>
      {/* stone grotto floor */}
      <rect x="100" y="150" width="210" height="95" fill={accentColor} opacity="0.6" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={110 + i * 42} y1="150" x2={110 + i * 42} y2="245" stroke={dark} strokeWidth="1.5" opacity="0.4" />
      ))}
      {/* silver star embedded in the floor */}
      <path d="M205 175 L214 197 L238 197 L219 211 L226 234 L205 220 L184 234 L191 211 L172 197 L196 197 Z" fill={silver} stroke={dark} strokeWidth="2" />
    </g>
  );
};

const Handala: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.5);
  const skin = "#D9A46A";
  return (
    <g>
      {/* small child, back to viewer, hands clasped behind */}
      <circle cx="205" cy="140" r="20" fill={dark} />
      <path d="M185 158 Q205 148 225 158 L218 225 L192 225 Z" fill={accentColor} stroke={dark} strokeWidth="2.5" />
      {/* patched clothing marks */}
      <rect x="195" y="180" width="14" height="14" fill={shade(accentColor, 0.2)} stroke={dark} strokeWidth="1" />
      {/* arms crossed behind the back */}
      <path d="M188 165 Q205 200 222 165" fill="none" stroke={skin} strokeWidth="9" strokeLinecap="round" />
      {/* bare legs and feet */}
      <path d="M195 225 L190 245 M215 225 L220 245" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      {/* prickly hair, characteristic silhouette */}
      <path d="M188 122 L192 108 M198 118 L200 102 M212 118 L210 102 M222 122 L218 108" stroke={dark} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
};

const CeramicaJerusalen: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  return (
    <g>
      <circle cx="205" cy="175" r="80" fill="#F5F0E6" stroke={dark} strokeWidth="3" />
      <circle cx="205" cy="175" r="65" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse key={deg} cx="205" cy="130" rx="10" ry="20" fill={accentColor} transform={`rotate(${deg} 205 175)`} />
      ))}
      <circle cx="205" cy="175" r="16" fill={accentColor} />
    </g>
  );
};

const KnafehNabulsi: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const cheese = "#F5F0E6";
  const pistachio = "#7CB342";
  const crumbs: [number, number][] = [
    [170, 180],
    [195, 172],
    [220, 178],
    [240, 185],
    [150, 192],
  ];
  return (
    <g>
      <ellipse cx="205" cy="220" rx="95" ry="18" fill="#C9A227" stroke={dark} strokeWidth="2.5" />
      <ellipse cx="205" cy="195" rx="85" ry="30" fill={accentColor} stroke={dark} strokeWidth="3" />
      <path d="M175 190 L235 190 L225 215 L185 215 Z" fill={cheese} stroke={dark} strokeWidth="2" />
      <path d="M160 175 Q170 185 165 195 M245 178 Q255 188 248 198" fill="none" stroke="#D4941E" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      {crumbs.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={pistachio} />
      ))}
    </g>
  );
};

const KaakAlQuds: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const wood = "#8B5A2B";
  const bread = "#D9A521";
  const breads = [150, 180, 205, 230, 260];
  const sesame: [number, number][] = [
    [-6, -10],
    [4, -14],
    [-10, 0],
    [8, 4],
    [0, 14],
    [-4, -4],
  ];
  return (
    <g>
      <rect x="110" y="220" width="190" height="20" fill={wood} stroke={shade(wood, 0.3)} strokeWidth="2.5" />
      <circle cx="140" cy="245" r="12" fill="#3A3A3A" stroke={dark} strokeWidth="2" />
      <circle cx="270" cy="245" r="12" fill="#3A3A3A" stroke={dark} strokeWidth="2" />
      <line x1="205" y1="220" x2="205" y2="110" stroke={wood} strokeWidth="6" />
      <line x1="150" y1="120" x2="260" y2="120" stroke={wood} strokeWidth="5" />
      {breads.map((x, i) => {
        const cy = 155 + (i % 2) * 8;
        return (
          <g key={x}>
            <line x1={x} y1="120" x2={x} y2={135 + (i % 2) * 8} stroke={dark} strokeWidth="1.5" />
            <ellipse cx={x} cy={cy} rx="16" ry="22" fill="none" stroke={bread} strokeWidth="7" />
            {sesame.map(([dx, dy], j) => (
              <circle key={j} cx={x + dx} cy={cy + dy} r="1.3" fill="#F5F0E6" />
            ))}
          </g>
        );
      })}
    </g>
  );
};

export const palestineIllustrations: Record<string, IllustrationDefinition> = {
  tatreez: { component: Tatreez },
  "olivos-milenarios": { component: OlivosMilenarios },
  dabke: { component: Dabke },
  keffiyeh: { component: Keffiyeh },
  maqluba: { component: Maqluba },
  "mahmoud-darwish": { component: MahmoudDarwish },
  "jabon-nablus": { component: JabonNablus },
  "belen-natividad": { component: BelenNatividad },
  handala: { component: Handala },
  "ceramica-jerusalen": { component: CeramicaJerusalen },
  "knafeh-nabulsi": { component: KnafehNabulsi },
  "kaak-al-quds": { component: KaakAlQuds },
};
