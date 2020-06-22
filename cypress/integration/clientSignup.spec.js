/* eslint-disable no-undef */

describe('Navigates to home page and loads', () => {
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