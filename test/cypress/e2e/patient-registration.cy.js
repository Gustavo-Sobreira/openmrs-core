describe('Register Patient', () => {
  
  beforeEach(() => {
    cy.login()
    cy.language()
    cy.visit('/patient-registration')
  })

  it(`Test don't import by image too big`, () => {

    cy.contains('Patient Registration', { timeout: 15000 })
      .should('be.visible')
    cy.get('button').contains('Add image +').click()
    cy.get('.cds--file-input').selectFile('cypress/import/LargeImage.jpg', { force: true })
    cy.contains('The file "LargeImage.jpg" exceeds the size limit of 1 MB.')
  })

  it(`Test import image with success`, () => {

    cy.contains('Patient Registration', { timeout: 15000 })
      .should('be.visible')
    cy.get('button').contains('Add image +').click()
    cy.get('.cds--file-input').selectFile('cypress/import/SmallImage.jpeg', { force: true })
    cy.get('button').contains('Add Attachment').click({ force: true })
    cy.contains('Upload complete', { timeout: 15000 })
  })

  it(`Testar cadastro de visita com data sem formatação`, () => {

    cy.contains('Patient Registration', { timeout: 15000 })
      .should('be.visible')
    cy.get('#givenName').type("Eduardo")
    cy.get('#familyName').type("Almada")
    cy.get(':nth-child(1) > .cds--radio-button__label').click()
    cy.get('.cds--date-picker-container').type('999999999999')
    cy.get('button').contains('Register Patient').click({ force: true })
    cy.contains('Upload complete', { timeout: 15000 })
  })
})
