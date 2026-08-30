import { tint } from "./palette";

type Props = {
  accentColor: string;
  variant?: "ground" | "medallion";
  alt: string;
  children: React.ReactNode;
};

export default function IllustrationFrame({
  accentColor,
  variant = "ground",
  alt,
  children,
}: Props) {
  return (
    <svg
      viewBox="0 0 400 275"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt}
      style={{
        display: "block",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <rect width="400" height="275" fill={tint(accentColor, 0.85)} />
      {variant === "ground" ? (
        <rect
          x="0"
          y="180"
          width="400"
          height="95"
          fill={tint(accentColor, 0.32)}
        />
      ) : (
        <circle cx="200" cy="138" r="88" fill={tint(accentColor, 0.22)} />
      )}
      {children}
    </svg>
  );
}
