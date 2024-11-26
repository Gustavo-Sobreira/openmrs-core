describe('Register Patient - Null Object Validation', () => {
    beforeEach(() => {
      cy.login();
      cy.language();
      cy.visit('/patient-registration');
    });
  
    it('Deve mostrar um erro ao tentar enviar um objeto nulo', () => {
      cy.contains('Patient Registration', { timeout: 15000 }).should('be.visible');
      cy.get('button').contains('Register Patient').click();
  
      cy.contains("Incomplete form").should('be.visible');
      cy.contains("First Name").should('be.visible');
      cy.contains("Family Name").should('be.visible');
      cy.contains("Sex").should('be.visible');
      cy.contains("birthdate").should('be.visible');
    });
  });
  