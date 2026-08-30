describe("Country page book carousel", () => {
  it("opens on the cover and turns to the next page", () => {
    cy.visit("/es/spain");
    cy.contains("h1", "España").should("exist");
    cy.contains("Portada").should("be.visible");

    cy.get("button[aria-label='Siguiente']").click();
    cy.contains(/^1 \/ \d+$/).should("be.visible");
  });

  it("goes back to the index", () => {
    cy.visit("/es/spain");
    cy.contains("a", "Volver al índice").click();
    cy.location("pathname").should("eq", "/es");
  });
});

describe("Country page 404s", () => {
  it("shows the localized not-found page for an unknown country slug", () => {
    cy.request({ url: "/es/not-a-real-country", failOnStatusCode: false }).then(
      (res) => {
        expect(res.status).to.eq(404);
      }
    );
    cy.visit("/es/not-a-real-country", { failOnStatusCode: false });
    cy.contains("Página no encontrada").should("be.visible");
    cy.contains("a", "Volver al índice").click();
    cy.location("pathname").should("eq", "/es");
  });
});
