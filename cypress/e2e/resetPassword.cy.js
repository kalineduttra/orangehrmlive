describe('Test Scenario', () => {
    beforeEach ('URL visit', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it(`Reset a valid user's password`, () => {
        cy.resetPassword('Admin')
        cy.get('.oxd-button--secondary').click()
        cy.contains('Reset Password link sent successfully').should('be.visible')
    })
    // false positive
    it(`reset password with an invalid username`, () => {
        cy.resetPassword('Owner')
        cy.get('.oxd-button--secondary').click()
        cy.contains('user not registered in the system').should('be.visible')
    })
    it('Required message when leaving name field empty', () => {
        cy.resetPassword(' ')
        cy.contains('Required').should('be.visible')
    })
    it('Cancel reset password', () => {
        cy.resetPassword(' ')
        cy.get('.oxd-button--ghost').click()
        cy.url().should('include', '/login')
    })
  })
