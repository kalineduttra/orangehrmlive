const { validUser, validPassword } = Cypress.env()
const username = 'Ana25'
const requiredMessage = 'Required'


describe('Given that the user navigates to the Admin screen', () => {
  beforeEach(() => {
    cy.createSession(validUser, validPassword)
    cy.visit('/dashboard/index')
    cy.get('.oxd-sidepanel-body').contains('Admin').click()
  })
  context('When searching for a user that does not exist in the system', () => {
    it(`Then it should display a message that it was not found`, () => {
      cy.get('.oxd-table-filter').find(':nth-child(2) > .oxd-input').type(username)
      cy.get('.oxd-form-actions > .oxd-button--secondary').click()
      cy.get('[id="oxd-toaster_1"]').contains('No Records Found')

      cy.request('GET', '/admin/viewSystemUsers')
        .then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body).is.not.empty
        })
    })
  })

  context.only('When click on add a user', () => {
    beforeEach(() => {
      cy.get('.orangehrm-header-container > .oxd-button').click()
    })
    it('Then when leaving the form blank it should display a message', () => {
      cy.get('.oxd-button--secondary').click()
      cy.contains(requiredMessage)
      cy.contains('Passwords do not match')
    })
    it('Then when they click on cancel the user should be redirected to the User Management screen', () => {
      cy.get('.oxd-button--ghost').click()
      cy.url().should('contain', '/admin/viewSystemUsers')
    })
  })
})


      //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      //cy.get('.oxd-select-dropdown > :nth-child(2)').click()