describe('Test Scenario', () => {
    beforeEach ('URL visit', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it(`search for a user that doesn't exist in the system`, () => {
      cy.login('Admin','admin123')
      cy.admin('Ana')

      cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        .then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body).is.not.empty
        })
      cy.get('.oxd-button--ghost').click()
    })
})