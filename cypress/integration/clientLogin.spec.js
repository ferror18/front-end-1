/* eslint-disable no-undef */

describe('Navigates to login page and loads', () => {
    it('navigates to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('loads page correctly', () => {
        cy.contains('Anywhere Fitness')
        cy.contains('Login')
    })
})

describe('Able to input data into the form', () => {

    it('it navigates to the login page and all input fields are blank and button the login is disabled', () => {
        cy.visit('http://localhost:3000')
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

/*Due to React 2 changes to the code this error no longer shows due to the call happening on the React 2 side and he didn't have a way to give the error back to display the error message */
// describe('Enters in valid input and submits the data for an unknown user', () => {
//     it('navigates to client login page and all input fields are blank', () => {
//         cy.visit('http://localhost:3000')
//         cy.get('#userNameInput').should('be.empty')
//             .should('have.value', '')
//          cy.get('#passwordInput').should('be.empty')
//             .should('have.value', '')
//         cy.get('#login').should('be.disabled')
//     })

//     it('enters in data form for unknown user ', () => {
//         cy.get('#userNameInput').type('NameName')
//         cy.get('#passwordInput').type('password')
//         cy.get('#login').click()
//         cy.contains('Unfortunately')
//     })
// })

describe('Enters in valid input and submits data for a konwn user', () => {
    it('navigates to client login page and all input fields are blank', () => {
        cy.visit('http://localhost:3000')
        cy.get('#userNameInput').should('be.empty')
            .should('have.value', '')
         cy.get('#passwordInput').should('be.empty')
            .should('have.value', '')
        cy.get('#login').should('be.disabled')
    })

    it('enters in valid data for a known user', () => {
        cy.get('#userNameInput').type('duellje')
        cy.get('#passwordInput').type('password')
        cy.get('#login').click()
        
    })
})