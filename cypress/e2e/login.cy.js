describe('Test Scenario', () => {
  
  it('Fill in the login fields with valid data and authenticate the user on the page', () => {
    cy.login(Cypress.env('validUser'), Cypress.env('validPassword'))
    cy.url().should('contain', '/dashboard/index')
  })
  it('Invalid Username', () => {
    cy.login(Cypress.env('invalidUser'), Cypress.env('validPassword'))
    cy.contains('Invalid credentials').should('be.visible')
  })
  it('Invalid Passw ord', () => {
    cy.login(Cypress.env('validUser'), Cypress.env('invalidPassword'))
    cy.contains('Invalid credentials').should('be.visible')
  })
  it('Case Sensitive Username', () => {
    cy.login(Cypress.env('caseSensitiveUsername'), Cypress.env('validPassword'))
    cy.contains('Invalid credentials').should('be.visible')
  })
  it('Case Sensitive Password', () => {
    cy.login(Cypress.env('validUser'), Cypress.env('caseSensitivePassword'))
    cy.contains('Invalid credentials').should('be.visible')
  })
  it('Unfilled credentials', () => {
    cy.login(' ', ' ')
    cy.contains('Required').should('be.visible')
  })
})