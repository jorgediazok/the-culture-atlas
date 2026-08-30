import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContinentChips from "./ContinentChips";
import type { Continent } from "@/content/types";

const labels: Record<Continent, string> = {
  europe: "Europa",
  "south-america": "Sudamérica",
  "north-america": "Norteamérica",
  asia: "Asia",
  africa: "África",
  oceania: "Oceanía",
};

function baseCounts(overrides: Partial<Record<Continent, number>> = {}) {
  return {
    europe: 0,
    "south-america": 0,
    "north-america": 0,
    asia: 0,
    africa: 0,
    oceania: 0,
    ...overrides,
  } as Record<Continent, number>;
}

const colors: Record<Continent, string> = {
  europe: "#111111",
  "south-america": "#222222",
  "north-america": "#333333",
  asia: "#444444",
  africa: "#555555",
  oceania: "#666666",
};

describe("ContinentChips", () => {
  it("only renders chips for continents with at least one country", () => {
    render(
      <ContinentChips
        labels={labels}
        counts={baseCounts({ europe: 44, africa: 54 })}
        colors={colors}
        countriesLabel="países"
      />
    );

    expect(screen.getByText("Europa")).toBeInTheDocument();
    expect(screen.getByText("África")).toBeInTheDocument();
    expect(screen.queryByText("Asia")).not.toBeInTheDocument();
  });

  it("shows the country count next to each continent", () => {
    render(
      <ContinentChips
        labels={labels}
        counts={baseCounts({ europe: 44 })}
        colors={colors}
        countriesLabel="países"
      />
    );

    expect(screen.getByText("44 países")).toBeInTheDocument();
  });

  it("scrolls to the matching shelf when a chip is clicked", async () => {
    render(
      <ContinentChips
        labels={labels}
        counts={baseCounts({ europe: 44 })}
        colors={colors}
        countriesLabel="países"
      />
    );

    const shelf = document.createElement("div");
    shelf.id = "shelf-europe";
    document.body.appendChild(shelf);

    await userEvent.click(screen.getByText("Europa"));

    expect(shelf.scrollIntoView).toHaveBeenCalled();
    shelf.remove();
  });
});
