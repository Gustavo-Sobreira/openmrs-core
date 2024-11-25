describe('Patient Lists', () => {
  
  beforeEach(() => {
    cy.login()
    cy.language()
    cy.visit('/home/patient-lists')
  })

  it(`Test don't import by image too big`, () => {

    cy.get('.-esm-patient-list-management__header__newListButton___QPXmk').click()
    cy.get('input').type('Teste2')
    cy.get('textarea').type('Teste2')
    cy.get('button').contains('Create list').click()
  })
})