const { validUser, validPassword, invalidUser, invalidPassword, caseSensitivePassword } = Cypress.env()
const invalidCredentialMessage = 'Invalid credentials'
const requiredMessage = 'Required'

describe('Given that the user is on the login screen', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  context('When he fills in the form correctly and clicks on the login button', () => {
    it('Then he should be redirected to the home page', () => {
      cy.login(validUser, validPassword)
      cy.url().should('contain', '/dashboard/index')
    })
  })

  context('When the user fills in the field incorrectly', () => {
    it('Invalid Username', () => {
      cy.login(invalidUser, validPassword)
      cy.contains(invalidCredentialMessage).should('be.visible')
    })
    it('Invalid Password', () => {
      cy.login(validUser, invalidPassword)
      cy.contains(invalidCredentialMessage).should('be.visible')
    })
    it('Case Sensitive Password', () => {
      cy.login(validUser, caseSensitivePassword)
      cy.contains(invalidCredentialMessage).should('be.visible')
    })
    it('Unfilled credentials', () => {
      cy.login(' ', ' ')
      cy.contains(requiredMessage).should('be.visible')
    })
  })
})