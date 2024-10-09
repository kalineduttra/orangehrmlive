describe('Test Scenario', () => {
  beforeEach ('URL visit', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
  it('Fill in the login fields with valid data and authenticate the user on the page', () => {
    cy.login('Admin','admin123')
  })
  it('Invalid Username', () => {
    cy.login('Owner','admin123')
    cy.contains('Invalid credentials').should('be.visible');
  })
  it('Invalid Password', () => {
    cy.login('Admin','owner12')
    cy.contains('Invalid credentials').should('be.visible');
  })
})