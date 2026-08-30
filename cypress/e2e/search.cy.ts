describe("Country search", () => {
  it("filters countries as you type and navigates to the chosen country", () => {
    cy.visit("/es");
    cy.get("input[placeholder='Buscar un país...']").type("Espa");
    cy.get("[data-testid='country-search-results']")
      .find("a[href='/es/spain']")
      .should("be.visible")
      .click();
    cy.location("pathname").should("eq", "/es/spain");
  });

  it("shows no results dropdown for a query with no matches", () => {
    cy.visit("/es");
    cy.get("input[placeholder='Buscar un país...']").type("zzzznotacountry");
    cy.get("[data-testid='country-search-results']").should("not.exist");
  });
});
