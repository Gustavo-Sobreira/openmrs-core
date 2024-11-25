describe('Caso de Teste 1', () => {

  beforeEach('Teste deve efetuar login com sucesso', () => {

    //Função de login não teria sido implementada nesse teste. Considerar os comandos abaixo como se fossem uma função cy.login().
    cy.visit('https://o3.openmrs.org/openmrs/spa/login')
    cy.get('#username').type('admin').type('{enter}')
    cy.get('#password').type('Admin123').type('{enter}')
    cy.visit('https://o3.openmrs.org/openmrs/spa/home')
  })

  it('[CRUD] Incluir novo paciente.', () => {

    //O correto seria a utilização de um arquivo de fixture aqui para parametrização de dados, mas para evitar complexidades, utilizarei inputs diretos.
    cy.get('[data-extension-id="add-patient-action"] > .cds--popover-container > .cds--tooltip-trigger__wrapper > .cds--btn--icon-only').click()
    cy.get('.-esm-patient-registration__field__nameField___tUkky > .cds--content-switcher > .cds--content-switcher--selected').click()
    cy.get('#givenName').type("Paciente de Teste de Inclusão")
    cy.get('#familyName').type("[Nome da família]")

    //Atribuir o sexo masculino ao paciente
    cy.get(':nth-child(1) > .cds--radio-button__label > .cds--radio-button__appearance').click()
    //Selecionar a data de nascimento como "desconhecida"
    cy.get(':nth-child(3) > :nth-child(2) > .cds--content-switcher > [tabindex="-1"]').click()
    //Inserir idade estimada do paciente como 50 anos de idade.
    cy.get('#yearsEstimated').type("50")

    //Atribuir um endereço ao paciente
    cy.get('#address1').click()
      .type('Linha de Endereço do "Paciente de Teste de Inclusão"')
    
    //Submeter registro
    cy.get('.-esm-patient-registration__patient-registration__submitButton___FPRJM').click()
  })

  it('[CRUD] Editar paciente.', () => {

    //Esse teste utilizará o paciente incluído pelo teste anterior. Um teste não pode depender de outro, mas mais uma vez, para fins de simplificação, será utilizado o mesmo registro.
    cy.wait(5000)
    cy.get('[data-testid="searchPatientIcon"]').click()
    cy.get('[data-testid="patientSearchBar"]').click()
      .type('Paciente de Teste de Inclusão [Nome da família]').type('{enter}')
    cy.wait(3000)
    cy.get('.-esm-patient-search__patient-banner__patientBanner___KiO__').click()
    cy.wait(3000)
    cy.get('#custom-actions-overflow-menu-trigger').click()
    cy.get('[data-extension-id="edit-patient-details-button"] > .cds--overflow-menu-options__option > .cds--overflow-menu-options__btn > .cds--overflow-menu-options__option-content').click()
    cy.wait(3000)
    cy.get('#givenName').clear()
      .type('Paciente de Teste de Inclusão [EDITADO]')
    cy.get('.-esm-patient-registration__patient-registration__submitButton___FPRJM').click()
  })

  it.only('[CRUD] Excluir paciente.', () => {

    //Esse teste utilizará o paciente editado pelo teste anterior. Um teste não pode depender de outro, mas mais uma vez, para fins de simplificação, será utilizado o mesmo registro.
    cy.wait(5000)
    cy.get('[data-testid="searchPatientIcon"]').click()
    cy.get('[data-testid="patientSearchBar"]').click()
      .type('Paciente de Teste de Inclusão [EDITADO]').type('{enter}')
    cy.wait(3000)
    cy.get('.-esm-patient-search__patient-banner__patientBanner___KiO__').click()
    cy.wait(3000)
    cy.get('#custom-actions-overflow-menu-trigger').click()
    cy.get('[data-extension-id="mark-patient-deceased-button"] > .cds--overflow-menu-options__option > .cds--overflow-menu-options__btn').click()
    cy.wait(3000)
    cy.get('.cds--btn-set > .cds--btn--primary').click()
    //cy.get('[data-extension-id="edit-patient-details-button"] > .cds--overflow-menu-options__option > .cds--overflow-menu-options__btn > .cds--overflow-menu-options__option-content').click()
    //cy.wait(3000)
  })
})