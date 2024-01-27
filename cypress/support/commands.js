/// <reference types="cypress" />
const element = require("../fixtures/login.json")

Cypress.Commands.add('Login', (email, password ) => {
    cy.get(element.input_email).type(email)
    cy.get(element.input_password).type(password, { log: false })
    cy.get(element.btn_login).click()

    cy.wait(2000)

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/home') 
    })
})

Cypress.Commands.add('MsgLoginFalho', () => {
    cy.get(element.msg_alert)
        .should('be.visible')
        .should('have.text','E-mail e/ou senha inválidos')
})