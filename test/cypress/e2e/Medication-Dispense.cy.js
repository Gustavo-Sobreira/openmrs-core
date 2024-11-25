describe('MedicationDispense by ID', () => {

 beforeEach(() => {
   cy.login() // Function to log into the system
   cy.language() // Function to set the language, if necessary
   cy.visit('/home/medication-dispensation') // URL of the medication dispensing page
 })

 it(`Test retrieval of existing MedicationDispense by valid ID`, () => {
 
 it(`Test retrieval of MedicationDispense by boundary ID values`, () => {
     const minValidId = 1;
     const maxValidId = 9999;
  
  cy.get('[data-testid="searchPatientIcon"]').click()
  cy.get('[data-testid="patientSearchBar"]').type(`test test`)
  cy.get(':nth-child(1) > .-esm-patient-search__patient-banner__patientBanner___KiO__ > .-esm-patient-search__patient-banner__patientNameRow___A4Avr > :nth-child(1) > .-esm-patient-search__patient-banner__patientName___N_jP7').click()
  cy.get('.cds--overflow-menu__wrapper > .cds--popover-container > .cds--tooltip-trigger__wrapper > .cds--btn--icon-only').click()
  cy.get('#discontinue')
  cy.get('.-esm-patient-orders__order-basket__buttonSet___me45x > .cds--btn--primary').click()
  
  cy.get('.-esm-patient-chart__root__patientChartWrapper___TUT4b > .cds--header > .cds--header__menu-trigger').click()
  //lista dos medicamentos dispensados
  cy.get('.-esm-appointments__card-header__tabletHeader___iKL3m > h4').click()
 })
})
