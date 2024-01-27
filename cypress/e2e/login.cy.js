/// <reference types="cypress" />
const element = require("../fixtures/login.json")

beforeEach(() => {
    cy.visit('/login')
})

afterEach(() => {
    cy.screenshot()
})

describe('Login', () => {
    it('Login com sucesso', () => {
        const email = Cypress.env('EMAIL')
        const password = Cypress.env('PASSWORD')
        cy.Login(email, password)
    })
    
    it('Login com e-mail válido e a senha inválida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'))
        cy.get(element.input_password).type(Cypress.env('PASSWORD_INVALID'), { log: false })
        cy.get(element.btn_login).click()
        cy.MsgLoginFalho()
    })

    it('Login com e-mail inválido e a senha válida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL_INVALID'))
        cy.get(element.input_password).type(Cypress.env('PASSWORD'), { log: false })
        cy.get(element.btn_login).click()
        cy.MsgLoginFalho()
    })
})


