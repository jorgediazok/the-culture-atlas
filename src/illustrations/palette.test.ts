import { averageColor, readableTextColor, shade, tint } from "./palette";

describe("tint", () => {
  it("returns the same color unchanged at amount 0", () => {
    expect(tint("#ff0000", 0)).toBe("#ff0000");
  });

  it("moves all the way to white at amount 1, regardless of hue", () => {
    expect(tint("#ff0000", 1)).toBe("#ffffff");
    expect(tint("#003366", 1)).toBe("#ffffff");
  });
});

describe("shade", () => {
  it("returns the same color unchanged at amount 0", () => {
    expect(shade("#ff0000", 0)).toBe("#ff0000");
  });

  it("moves all the way to black at amount 1, regardless of hue", () => {
    expect(shade("#ff0000", 1)).toBe("#000000");
    expect(shade("#e8b923", 1)).toBe("#000000");
  });
});

describe("readableTextColor", () => {
  it("picks dark text on a bright background", () => {
    expect(readableTextColor("#ffffff")).toBe("#1a1a1a");
  });

  it("picks white text on a dark background", () => {
    expect(readableTextColor("#000000")).toBe("#fff");
  });

  it("picks dark text on a bright saturated yellow, not white", () => {
    // Regression case: HSL lightness alone reads #ffcc00 as mid-tone (L=50%),
    // but perceived brightness (YIQ) is what should decide the text color.
    expect(readableTextColor("#ffcc00")).toBe("#1a1a1a");
  });
});

describe("averageColor", () => {
  it("averages channel-by-channel across multiple colors", () => {
    expect(averageColor(["#ff0000", "#0000ff"])).toBe("#800080");
  });

  it("returns the same color when given a single color", () => {
    expect(averageColor(["#336699"])).toBe("#336699");
  });
});
