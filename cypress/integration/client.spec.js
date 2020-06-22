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

describe('Clicks on Client page button and loads Client page', () => {
    it('navigates to the site and clicks the client button', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Client').click()
    }) 

    it('Client page loads correctly', () => {
        cy.contains('Client Login')
    })


})