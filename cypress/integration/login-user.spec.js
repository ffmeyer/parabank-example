/// <reference types="cypress" />

const faker = require('faker')
import signup from '../pages/SignupPage'
import loginPage from '../pages/LoginPage'


describe('Login tests', function () {
    it('Login com sucesso', function () {
        signup.go()
        loginPage.typeUsername('ffmeyer')
        loginPage.typePassword('abc123')
        loginPage.submit()
        loginPage.validateHeader('Accounts Overview')
        loginPage.logout()

    })

    it('Usuario sem senha', function () {
        signup.go()        
        loginPage.typeUsername('ffmeyer')
        loginPage.submit()
        loginPage.validateHeader('Error')
        loginPage.validateBody('Please enter a username and password.')
    })

    it('Senha sem usuario', function () {
        signup.go()        
        loginPage.typePassword('abc123')
        loginPage.submit()
        loginPage.validateHeader('Error')
        loginPage.validateBody('Please enter a username and password.')
    })

})