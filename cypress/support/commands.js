// Login
Cypress.Commands.add('login', (username,password) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    cy.get('.oxd-button').click();
})

// Reset Password
Cypress.Commands.add('resetPassword', (username) => {
    cy.get('.orangehrm-login-forgot > .oxd-text').click();
    cy.get('.oxd-input').type(username); 
})

// Admin
Cypress.Commands.add('admin', (username, employeName) => {
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(2) > .oxd-input').type(username);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown > :nth-child(2)').click();
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })