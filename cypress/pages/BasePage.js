/// <reference types="cypress" />

class BasePage{

    go() {
        cy.visit('https://parabank.parasoft.com/parabank/')
        cy.title()
            .should('be.equal', 'ParaBank | Welcome | Online Banking')
            .should('contain', 'ParaBank')
            .and('contain', 'Online Banking')
    }


    validateContainsObject(selector, message) {
        cy.get(selector)
            .should('contain', message)
    }

    write(selector, text) {
        cy.get(selector).type(text)            
    }


}

export default BasePage;
    