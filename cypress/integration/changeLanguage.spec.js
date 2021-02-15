describe("Language testing", () => {
    it("Change Language", () => {
      cy.visit("/");
      cy.get('button').eq(0).contains('Cancel');
      cy.get('button').eq(1).contains('Next');
      cy.get('button').eq(2).click();
      cy.get('button').eq(0).contains('Cancelar');
      cy.get('button').eq(1).contains('Siguiente');
    });
  });