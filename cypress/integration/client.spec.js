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
        cy.get('#login').should('be.disabled')
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
        cy.get('#login').should('be.enabled')
    })
})

describe('Error messages appear if incorrect format of username and password are entered', () => {
    it('navigates to client login page and all input fields are blank', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Client Login').click()
        cy.get('#userNameInput').should('be.empty')
            .should('have.value', '')
         cy.get('#passwordInput').should('be.empty')
            .should('have.value', '')
        cy.get('#login').should('be.disabled')
    })

    it('enters in the wrong format for username and gets error message', () => {
        cy.get('#userNameInput').type('no')
        cy.contains('5 characters long')
    })

    it('enters in the wrong format for password and gets error message', () => {
        cy.get('#passwordInput').type('nope')
        cy.contains('7 characters long')
    })
})

describe('Enters in valid input and submits the data for an unknown user', () => {
    it('navigates to client login page and all input fields are blank', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Client Login').click()
        cy.get('#userNameInput').should('be.empty')
            .should('have.value', '')
         cy.get('#passwordInput').should('be.empty')
            .should('have.value', '')
        cy.get('#login').should('be.disabled')
    })

    it('enters in data form for unknown user ', () => {
        cy.get('#userNameInput').type('namename')
        cy.get('#passwordInput').type('password')
        cy.get('#login').click()
        cy.contains('Unfortunately')
    })
})