describe("Home page", () => {
  it("redirects the bare root to a locale", () => {
    cy.visit("/");
    cy.location("pathname").should("match", /^\/(es|en)$/);
  });

  it("renders the hero, search box, and continent shelves in Spanish", () => {
    cy.visit("/es");
    cy.contains("h1", "Atlas de la Cultura").should("be.visible");
    cy.get("input[placeholder='Buscar un país...']").should("be.visible");
    cy.contains("h2", "Europa").should("be.visible");
  });

  it("renders the hero in English", () => {
    cy.visit("/en");
    cy.contains("h1", "The Culture Atlas").should("be.visible");
    cy.get("input[placeholder='Search a country...']").should("be.visible");
  });

  it("switches locale via the language switcher, preserving the route", () => {
    cy.visit("/es/spain");
    cy.contains("a", "EN").click();
    cy.location("pathname").should("eq", "/en/spain");
  });

  it("scrolls to a continent shelf when its chip is clicked", () => {
    cy.visit("/es");
    cy.contains("button", "África").click();
    cy.get("#shelf-africa").should("be.visible");
  });
});
