/* eslint-disable no-undef */

describe('Navigates to page and loads', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })
})