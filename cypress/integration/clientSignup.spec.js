/* eslint-disable no-undef */
describe('Navigates to client signup page and loads', () => {
    it('navigates to the site and then to client signup page', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Client Signup').click()
    })

    it('loads client signup page correctly', () => {
        cy.contains('Username:')
        cy.contains('Password:')
        cy.contains('First Name:')
        cy.contains('Last Name:')
        cy.contains('Email:')
        cy.contains('Role:')
        cy.get('#signup').should('be.disabled')
    })
})

describe('Enters in data input and gets appropiate errors', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Client Signup').click()
    })

    it('enters wrong format for username and gets appropiate error message', () => {
        cy.get('#userNameInput').type('na')
        cy.contains('5 characters')
    })

    it('enters wrong format for password and gets appropiate error message', () => {
        cy.get('#passwordInput').type('pass')
        cy.contains('7 characters')
    })

    it('enters wrong email format and receives appopriate error message', () => {
        cy.get('#emailInput').type('email')
        cy.contains('valid email format')
    })

    it('does not pick role and receives appropiate error message', () => {
        cy.get('#roleInput').select('Client')
            .select('')
        cy.contains('A role is required.')
    })
})