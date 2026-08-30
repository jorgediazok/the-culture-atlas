import { render, screen } from "@testing-library/react";
import LanguageSwitcher from "./LanguageSwitcher";

jest.mock("next/navigation", () => ({
  usePathname: () => "/es/spain",
}));

describe("LanguageSwitcher", () => {
  it("renders a link per locale, pointing at the same route in that locale", () => {
    render(<LanguageSwitcher locale="es" />);

    expect(screen.getByRole("link", { name: "ES" })).toHaveAttribute(
      "href",
      "/es/spain"
    );
    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute(
      "href",
      "/en/spain"
    );
  });

  it("styles the active locale differently from the inactive one", () => {
    render(<LanguageSwitcher locale="es" />);

    const es = screen.getByRole("link", { name: "ES" });
    const en = screen.getByRole("link", { name: "EN" });
    expect(es.className).not.toBe(en.className);
  });
});
