import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CountrySearch from "./CountrySearch";

const countries = [
  { slug: "spain", name: "España", flagEmoji: "🇪🇸" },
  { slug: "france", name: "Francia", flagEmoji: "🇫🇷" },
  { slug: "italy", name: "Italia", flagEmoji: "🇮🇹" },
];

describe("CountrySearch", () => {
  it("shows no results before typing anything", () => {
    render(
      <CountrySearch
        locale="es"
        countries={countries}
        placeholder="Buscar un país..."
      />
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("filters countries case-insensitively as the user types", async () => {
    render(
      <CountrySearch
        locale="es"
        countries={countries}
        placeholder="Buscar un país..."
      />
    );

    await userEvent.type(
      screen.getByPlaceholderText("Buscar un país..."),
      "fra"
    );

    expect(screen.getByText("Francia")).toBeInTheDocument();
    expect(screen.queryByText("España")).not.toBeInTheDocument();
    expect(screen.queryByText("Italia")).not.toBeInTheDocument();
  });

  it("links each result to its country page in the given locale", async () => {
    render(
      <CountrySearch
        locale="en"
        countries={countries}
        placeholder="Search a country..."
      />
    );

    await userEvent.type(
      screen.getByPlaceholderText("Search a country..."),
      "it"
    );

    expect(screen.getByRole("link", { name: /Italia/ })).toHaveAttribute(
      "href",
      "/en/italy"
    );
  });

  it("shows no matches for a query that matches nothing", async () => {
    render(
      <CountrySearch
        locale="es"
        countries={countries}
        placeholder="Buscar un país..."
      />
    );

    await userEvent.type(
      screen.getByPlaceholderText("Buscar un país..."),
      "zzz"
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("caps results at 6 matches", async () => {
    const many = Array.from({ length: 10 }, (_, i) => ({
      slug: `country-${i}`,
      name: `Testland ${i}`,
      flagEmoji: "🏳️",
    }));

    render(
      <CountrySearch
        locale="es"
        countries={many}
        placeholder="Buscar un país..."
      />
    );

    await userEvent.type(
      screen.getByPlaceholderText("Buscar un país..."),
      "testland"
    );

    expect(screen.getAllByRole("link")).toHaveLength(6);
  });
});
