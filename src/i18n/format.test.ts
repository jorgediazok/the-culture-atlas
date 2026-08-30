import { formatNumber } from "./format";

describe("formatNumber", () => {
  it("uses a dot as thousands separator for es", () => {
    expect(formatNumber(47700000, "es")).toBe("47.700.000");
  });

  it("uses a comma as thousands separator for en", () => {
    expect(formatNumber(47700000, "en")).toBe("47,700,000");
  });

  it("doesn't add a separator to numbers under 1000", () => {
    expect(formatNumber(999, "es")).toBe("999");
    expect(formatNumber(0, "en")).toBe("0");
  });

  it("handles exact thousands boundaries", () => {
    expect(formatNumber(1000, "es")).toBe("1.000");
    expect(formatNumber(1000000, "en")).toBe("1,000,000");
  });
});
