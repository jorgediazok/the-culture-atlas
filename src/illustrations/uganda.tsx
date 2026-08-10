import { shade, tint } from "./palette";
import type { IllustrationComponent, IllustrationDefinition } from "./types";

const FuentesNilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="180" cy="160" rx="35" ry="20" fill={light} />
      <path d="M210 160 q30 0 40 25" fill="none" stroke={accentColor} strokeWidth="8" strokeLinecap="round" />
      <rect x="196" y="128" width="8" height="18" fill={dark} />
    </g>
  );
};

const GorilasMontana: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <ellipse cx="200" cy="160" rx="35" ry="30" fill={accentColor} />
      <circle cx="200" cy="122" r="20" fill={dark} />
      <ellipse cx="192" cy="118" rx="4" ry="5" fill={light} />
      <ellipse cx="208" cy="118" rx="4" ry="5" fill={light} />
    </g>
  );
};

const PerlaDeAfrica: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.75);
  return (
    <g>
      <ellipse cx="200" cy="140" rx="26" ry="32" fill={light} stroke={accentColor} strokeWidth="4" />
      <ellipse cx="192" cy="128" rx="6" ry="8" fill="#fff" opacity="0.6" />
      <path d="M150 190 q50 -10 100 0" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const BobiWine: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M186 140 h28 v20 a14 14 0 0 1 -28 0 Z" fill={accentColor} />
      <rect x="192" y="120" width="16" height="14" fill={dark} />
      <circle cx="200" cy="180" r="4" fill={light} />
    </g>
  );
};

const LagoVictoria: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <ellipse cx="200" cy="150" rx="55" ry="32" fill={light} stroke={accentColor} strokeWidth="4" />
      <ellipse cx="185" cy="145" rx="6" ry="4" fill={dark} />
      <ellipse cx="215" cy="158" rx="8" ry="5" fill={dark} />
    </g>
  );
};

const Matoke: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.3);
  const light = tint(accentColor, 0.5);
  return (
    <g>
      {[-20, -5, 10, 25].map((dx, i) => (
        <path
          key={dx}
          d="M0 -22 C10 -18 10 18 0 22 C-10 18 -10 -18 0 -22 Z"
          fill={i % 2 === 0 ? accentColor : dark}
          transform={`translate(${200 + dx} 150) rotate(${dx}) scale(0.9)`}
        />
      ))}
      <ellipse cx="200" cy="185" rx="45" ry="8" fill={light} />
    </g>
  );
};

const ReinoBuganda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.7);
  return (
    <g>
      <path d="M170 175 L175 130 L185 150 L200 115 L215 150 L225 130 L230 175 Z" fill={accentColor} />
      <rect x="168" y="175" width="64" height="10" fill={dark} />
      <circle cx="200" cy="110" r="6" fill={light} />
    </g>
  );
};

const BodaBoda: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.4);
  const light = tint(accentColor, 0.7);
  return (
    <g fill="none" stroke={dark} strokeWidth="5">
      <circle cx="175" cy="182" r="12" />
      <circle cx="225" cy="182" r="12" />
      <path d="M175 182 L195 150 L225 182 M195 150 L205 130" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="180" y="128" width="20" height="16" rx="3" fill={light} stroke="none" />
      <circle cx="215" cy="140" r="6" fill={accentColor} stroke="none" />
    </g>
  );
};

const Rolex: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M170 140 a30 22 0 1 0 60 0 a30 22 0 1 0 -60 0 Z" fill={light} stroke={accentColor} strokeWidth="4" />
      <path d="M180 140 q20 12 40 0" fill="none" stroke={dark} strokeWidth="4" />
    </g>
  );
};

const RaftingNilo: IllustrationComponent = ({ accentColor }) => {
  const dark = shade(accentColor, 0.35);
  const light = tint(accentColor, 0.6);
  return (
    <g>
      <path d="M160 165 q40 -14 80 0 l-6 15 h-68 Z" fill={accentColor} />
      <path d="M150 175 q50 -25 100 0" fill="none" stroke={light} strokeWidth="6" strokeLinecap="round" />
      <circle cx="185" cy="160" r="7" fill={dark} />
      <circle cx="215" cy="160" r="7" fill={dark} />
    </g>
  );
};

export const ugandaIllustrations: Record<string, IllustrationDefinition> = {
  "fuentes-nilo": { component: FuentesNilo },
  "gorilas-montana": { component: GorilasMontana },
  "perla-de-africa": { component: PerlaDeAfrica, variant: "medallion" },
  "bobi-wine": { component: BobiWine, variant: "medallion" },
  "lago-victoria": { component: LagoVictoria },
  matoke: { component: Matoke },
  "reino-buganda": { component: ReinoBuganda },
  "boda-boda": { component: BodaBoda },
  rolex: { component: Rolex, variant: "medallion" },
  "rafting-nilo": { component: RaftingNilo },
};
