/// <reference types="cypress" />
import BasePage  from './BasePage'

class LoginPage extends BasePage {
    
    typeUsername(text) {
        var locator = "input[name='username']"
        this.write(locator, text)
    }
    
    typePassword(text) {
        var locator = "input[name='password']"
        this.write(locator, text)
    }

    submit() {        
        cy.get("input[value='Log In']").click()
    }

    validateHeader(message) {
        const selector = "div[id='rightPanel'] h1"
        this.validateContainsObject(selector, message)
    }

    validateBody(message) {
        const selector = "div[id='rightPanel'] p"
        this.validateContainsObject(selector, message)
    }

    logout() {    
        cy.get("a[href^='/parabank/logout']").click();
    }

}
export default new LoginPage;
