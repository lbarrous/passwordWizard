describe("Workflow testing", () => {
    it("reaches the whole workflow", () => {
      cy.visit("/");
      cy.get('button').eq(1).click();
      cy.get('input').eq(0).type("Alvaro123.");
      cy.get('input').eq(1).type("Alvaro123.");
      cy.get('input').eq(2).type("Hint");
      cy.get('button').eq(0).click();
      cy.get('img').should('have.length', 4);
      cy.get('button').eq(1).click();
      cy.get('input').eq(0).should("have.value", "Alvaro123.");
      cy.get('input').eq(1).should("have.value", "Alvaro123.");
      cy.get('input').eq(2).should("have.value", "Hint");
      cy.get('button').eq(1).click();
      cy.wait(3500);
      cy.get('button').should('have.length', 3);
    });
  });