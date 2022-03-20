/// <reference types="cypress" />
import BasePage  from './BasePage'
class SignupPage extends BasePage {


    fillForm(deliver) {

        cy.get("input[id='customer.firstName']").type(deliver.firstName)
        cy.get("input[id='customer.lastName']").type(deliver.lastName)
        cy.get("input[id='customer.address.street']").type(deliver.address.street)
        cy.get("input[id='customer.address.city']").type(deliver.address.city)
        cy.get("input[id='customer.address.state']").type(deliver.address.state)
        cy.get("input[id='customer.address.zipCode']").type(deliver.address.zipCode)
        cy.get("input[id='customer.phoneNumber']").type(deliver.phoneNumber)
        cy.get("input[id='customer.ssn']").type(deliver.ssn)
        cy.get("input[id='customer.username']").type(deliver.username)
        cy.get("input[id='customer.password']").type(deliver.password)
        cy.get("input[id='repeatedPassword']").type(deliver.repeatedpassword)
    }

    submit() {
        cy.get("form[id='customerForm'] input[type='submit'] ").click()
    }

    clickRegister() {
        cy.get('#loginPanel > p > a[href^=register]').click()
    }

    validateUserloggedIn(message) {
        const selector = "div[id='rightPanel'] > h1[class='title']"
        this.validateContainsObject(selector, message)
    }

    validateFormUserCreate(message) {
        const selector = "div[id='rightPanel'] > h1[class='title']"
        this.validateContainsObject(selector, message)
    }

    validateErrorMessage(message) {
        const selector = "span[id='customer.username.errors']"
        this.validateContainsObject(selector, message)
    }
}
export default new SignupPage;