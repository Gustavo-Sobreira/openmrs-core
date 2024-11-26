describe('Patient Appointments', () => {

	beforeEach(() => {
	  cy.login();
	  cy.language();
	  cy.visit('/home');
	});
  
	it('Deve marcar uma consulta para o paciente Edward', () => {
	  cy.get('.-esm-primary-navigation__navbar__headerMenuButton___k6m5W').click();
	  cy.get('[data-extension-id="clinical-appointments-dashboard-link"] > .cds--side-nav__link').click();
	  cy.get('[data-extension-slot-name="patient-search-button-slot"] > div > .cds--btn').click();
	  cy.get('[data-testid="patientSearchBar"]').type('Edward');
	  cy.get('.-esm-patient-search__patient-search-bar__searchArea___VV9u7 > .cds--btn').click();
	  cy.contains('Edward Robinson').click();
  
	  cy.get('#service').select('General Medicine service'); 
	  cy.get('#appointmentType').select('Scheduled')
	  cy.get('#duration').type('15');
	  cy.get('.-esm-appointments__appointments-form__tablet___b0loO > .cds--btn--primary').click()
	});

	it('Marcar uma consulta com a data errada', () => {
		cy.get('.-esm-primary-navigation__navbar__headerMenuButton___k6m5W').click();
		cy.get('[data-extension-id="clinical-appointments-dashboard-link"] > .cds--side-nav__link').click();
		cy.get('[data-extension-slot-name="patient-search-button-slot"] > div > .cds--btn').click();
		cy.get('[data-testid="patientSearchBar"]').type('Edward');
		cy.get('.-esm-patient-search__patient-search-bar__searchArea___VV9u7 > .cds--btn').click();
		cy.contains('Edward Odinga').click();
	
		cy.get('#service').select('General Medicine service'); 
		cy.get('#appointmentType').select('Scheduled')
		cy.get('#datePickerInput').type('99999999999999991312312')
		cy.get('#duration').type('15');
		cy.get('.-esm-appointments__appointments-form__tablet___b0loO > .cds--btn--primary').click()
	  });
  });
  