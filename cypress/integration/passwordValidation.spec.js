describe("Password validation testing", () => {
    it("shows password validation errors", () => {
      cy.visit("/");
      cy.get('button').eq(1).click();
      cy.get('button').eq(1).should('be.disabled');
      cy.get('input').eq(0).type("A");
      cy.get('button').eq(1).should('be.disabled');
      cy.get('p').should('have.length', 5);
      cy.get('input').eq(1).type("A");
      cy.get('button').eq(1).should('be.disabled');
      cy.get('p').should('have.length', 4);
      cy.get('input').eq(0).type("Aa1");
      cy.get('input').eq(1).type("Aa1");
      cy.get('button').eq(1).should('be.disabled');
      cy.get('p').should('have.length', 3);
      cy.get('input').eq(0).type("Alvaro123.");
      cy.get('input').eq(1).type("Alvaro123.");
      cy.get('button').eq(1).should('not.be.disabled');
      cy.get('p').should('have.length', 2);
    });
  });