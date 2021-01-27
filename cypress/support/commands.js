Cypress.Commands.add("signIn", (url, email, password) => { 
    cy.visit(url)
    cy.get('[name=Email]').clear().type(email)
    cy.get('.password').clear().type(password)
    cy.get('[type=submit]').click()
 })


 Cypress.Commands.add("signOut", () => { 
    cy.get('.nav.navbar-nav>li:nth-of-type(3)').click();
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
