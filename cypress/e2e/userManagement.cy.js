describe('Test Scenario', () => {
    
    it(`search for a user that doesn't exist in the system`, () => {
      cy.login('Admin','admin123')
      cy.admin('Ana', ' ')
      cy.contains('No Records Found').should('be.visible')
      cy.get('.oxd-toast').should('be.visible').contains('No Records Found');

      cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        .then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body).is.not.empty
        })
      cy.get('.oxd-button--ghost').click()
    })
})