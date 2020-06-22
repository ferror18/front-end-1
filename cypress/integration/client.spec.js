/* eslint-disable no-undef */

describe('Navigates to page and loads', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('loads page correctly', () => {
        cy.contains('Anywhere Fitness')
        cy.contains('Client Login/Signup')
    })
})