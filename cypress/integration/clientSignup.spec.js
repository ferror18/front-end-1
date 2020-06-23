/* eslint-disable no-undef */
describe('Navigates to client signup page and loads', () => {
    it('navigates to the site and then to client signup page', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Signup').click()
    })

    it('loads signup page correctly', () => {
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
        cy.contains('Signup').click()
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

describe('Able to enter in data correctly', () => {
    it('navigates to the page', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Signup').click()
    })

    it('signup button is disabled', () => {
        cy.get('#signup').should('be.disabled')
    })

    it('enters data into the username field', () => {
        cy.get('#userNameInput').type('SomeName')
            .should('have.value', 'SomeName')
    })

    it('signup button is disabled', () => {
        cy.get('#signup').should('be.disabled')
    })

    it('enters data into the password field', () => {
        cy.get('#passwordInput').type('password')
            .should('have.value', 'password')
    })

    it('signup button is disabled', () => {
        cy.get('#signup').should('be.disabled')
    })

    it('enters data into the first name field', () => {
        cy.get('#firstNameInput').type('First Name')
            .should('have.value', 'First Name')
    })

    it('signup button is disabled', () => {
        cy.get('#signup').should('be.disabled')
    })

    it('enters data into the last name field', () => {
        cy.get('#lastNameInput').type('Last Name')
            .should('have.value', 'Last Name')
    })

    it('signup button is disabled', () => {
        cy.get('#signup').should('be.disabled')
    })

    it('enters data into the email field', () => {
        cy.get('#emailInput').type('anemail@gmail.com')
            .should('have.value', 'anemail@gmail.com')
    })

    it('signup button is disabled', () => {
        cy.get('#signup').should('be.disabled')
    })

    it('selects a role', () => {
        cy.get('#roleInput').select('Instructor')
            .should('have.value', 'Instructor')
    })

    it('signup button is enabled', () => {
        cy.get('#signup').should('be.enabled')
    })


})

describe('Signs up a new user', () => {
    it('navigates to the client signup page', () => {
        cy.visit('http://localhost:3000/signup')
    })

    it('enters in the data', () => {
        cy.get('#userNameInput').type('Aname123456')
        cy.get('#passwordInput').type('password')
        cy.get('#firstNameInput').type('AFirst-Name1234')
        cy.get('#lastNameInput').type('Last-Name1234')
        cy.get('#emailInput').type('anemail@gmail.com')
        cy.get('#roleInput').select('Client')
    })

    it('submits the form', ()=> {
        cy.get('#signup').click()
    })
})