function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  if (max === min) return [0, 0, l * 100];

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  switch (max) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0);
      break;
    case g:
      h = (b - r) / d + 2;
      break;
    default:
      h = (r - g) / d + 4;
  }
  return [h * 60, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  const sNorm = s / 100;
  const lNorm = l / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = sNorm * Math.min(lNorm, 1 - lNorm);
  const f = (n: number) =>
    lNorm - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (n: number) =>
    Math.round(f(n) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(0)}${toHex(8)}${toHex(4)}`;
}

/** Moves a hex color's lightness toward white. amount: 0 (no change) to 1 (white). */
export function tint(hex: string, amount: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, l + (100 - l) * amount);
}

/** Moves a hex color's lightness toward black. amount: 0 (no change) to 1 (black). */
export function shade(hex: string, amount: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, l * (1 - amount));
}

/** Picks white or near-black text so it stays readable against a given background color. */
export function readableTextColor(hex: string): string {
  const [, , l] = hexToHsl(hex);
  return l > 65 ? "#1a1a1a" : "#fff";
}

/** Averages a list of hex colors channel-by-channel (RGB space). */
export function averageColor(hexColors: string[]): string {
  const [r, g, b] = hexColors
    .reduce(
      (sums, hex) => [
        sums[0] + parseInt(hex.slice(1, 3), 16),
        sums[1] + parseInt(hex.slice(3, 5), 16),
        sums[2] + parseInt(hex.slice(5, 7), 16),
      ],
      [0, 0, 0]
    )
    .map((sum) => Math.round(sum / hexColors.length));
  return `#${[r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}
