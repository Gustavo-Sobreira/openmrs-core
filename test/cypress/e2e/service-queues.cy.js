describe('Service queues', () => {
  
  beforeEach(() => {
    cy.login()
    cy.language()
    cy.visit('/home/service-queues')
  })

  it(`Test start a patient visit`, () => {

    cy.get('[data-extension-slot-name="patient-search-button-slot"] > div > .cds--btn').click()
    cy.get('[data-testid="patientSearchBar"]').type('sergio')
    cy.get(':nth-child(1) > .-esm-patient-search__patient-banner__buttonCol___vpdUH > [data-extension-slot-name="start-visit-button-slot"] > div > .cds--btn').click()
    cy.get('.-esm-patient-chart__visit-header__startVisitButton___sPV4T').click()
    cy.get(':nth-child(2) > .cds--radio-button__label > .cds--radio-button__appearance').click()
    cy.get('.-esm-patient-chart__visit-form__tablet___HslaG > .cds--btn--primary').click()
    
    
    


  })
})