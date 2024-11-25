describe("Register Patient", () => {
	beforeEach(() => {
		cy.login();
		cy.language();
		cy.visit("/patient-registration");
	});

	//CRIANDO PACIENTE SEM LOCALIZAÇÃO - VITOR DE FREITAS COIMBRA

	it(`Test don't import by image too big`, () => {
		cy.get("#givenName").type("Teste");
		cy.get("#middleName").type("Teste");
		cy.get("#familyName").type("TESTE");
		cy.get(
			":nth-child(1) > .cds--radio-button__label > .cds--radio-button__appearance"
		).click();
		cy.get('[aria-label="Calendar"]').click();
		cy.get('[aria-label="Thursday, November 7, 2024"]').click();
		cy.get(
			".-esm-patient-registration__patient-registration__submitButton___FPRJM"
		).click();
	});
});
