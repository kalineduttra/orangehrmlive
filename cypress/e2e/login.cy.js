describe('Test Scenario', () => {
  beforeEach ('URL visit', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })
  it('Fill in the login fields with valid data and authenticate the user on the page', () => {
    cy.login(Cypress.env('validUser'), Cypress.env('validPassword'));
  })
  it('Invalid Username', () => {
    cy.login(Cypress.env('invalidUser'), Cypress.env('validPassword'))
    cy.contains('Invalid credentials').should('be.visible');
  })
  it('Invalid Password', () => {
    cy.login(Cypress.env('validUser'), Cypress.env('invalidPassword'))
    cy.contains('Invalid credentials').should('be.visible');
  })
  it('Case Sensitive Username', () => {
    cy.login(Cypress.env('caseSensitiveUsername'), Cypress.env('validPassword'))
    cy.contains('Invalid credentials').should('be.visible');
  })
  it('Case Sensitive Password', () => {
    cy.login(Cypress.env('validUser'), Cypress.env('caseSensitivePassword'))
    cy.contains('Invalid credentials').should('be.visible');
  })
  it('Unfilled credentials', () => {
    cy.login(' ', ' ')
    cy.contains('Required').should('be.visible');
  })
})