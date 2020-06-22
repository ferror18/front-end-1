/* eslint-disable no-undef */

describe('Navigates to page and loads', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('loads page correctly', () => {
        cy.contains('Anywhere Fitness')
        cy.contains('Client Login')
        cy.contains('Client Signup')
    })
})

describe('Clicks on Client page button and loads Client page', () => {
    it('navigates to the site and clicks the client button', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Client Login').click()
    }) 

    it('Client page loads correctly', () => {
        cy.contains('Client Login')
        cy.contains('Anywhere Fitness')
        cy.contains('UserName')
        cy.contains('Password')
        cy.contains('Home')
        cy.contains('Client Login')
        cy.contains('Client Signup')
    })
})

describe('Able to input data into the form', () => {
    it('navigates to client login page', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Client Login').click()
    })

    it('all input fields are blank and button the lobin is disabled', () => {
        cy.get('#userNameInput').should('be.empty')
            .should('have.value', '')
        cy.get('#passwordInput').should('be.empty')
            .should('have.value', '')
        cy.get('#submit').should('be.disabled')
    })

    it('enters input into the username field', () => {
        cy.get('#userNameInput').type('username')
            .should('have.value', 'username')
    })

    it('enters input into the password field', () => {
        cy.get('#passwordInput').type('password')
            .should('have.value', 'password')
    })

    it('login button is now enabled', () => {
        cy.get('#submit').should('be.enabled')
    })
})