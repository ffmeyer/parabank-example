/// <reference types="cypress" />

const faker = require('faker')
import signup from '../pages/SignupPage'
import loginPage from '../pages/LoginPage'
import accountPage from '../pages/AccountPage'


describe('Parabank sanity test', function () {
    it('Should visit page and assert title', () => {
        signup.go()
        loginPage.typeUsername('ffmeyer')
        loginPage.typePassword('abc123')
        loginPage.submit()
        loginPage.validateHeader('Accounts Overview')
        accountPage.fasda()
        

    })
})
