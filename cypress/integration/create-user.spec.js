/// <reference types="cypress" />

const faker = require('faker')
import signup from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'
import loginPage from '../pages/LoginPage'

describe('Parabank sanity test', function () {
    it('Should visit page and assert title', () => {
        signup.go()        
    })
})


describe('Criando usuarios', function () {

    it.skip('Criando usuario para testes automatizados', function () {
        signup.go()
        signup.clickRegister()
        signup.validateFormUserCreate('Signing up is easy!')
        var deliver = signupFactory.deliverDefault()                 
        signup.fillForm(deliver)
        signup.submit()
        signup.validateUserloggedIn(`Welcome ${deliver.username}`)

    })

    it('Criando usuario com sucesso', function () {
        signup.go()
        signup.clickRegister()
        signup.validateFormUserCreate('Signing up is easy!')
        var deliver = signupFactory.deliver()                 
        signup.fillForm(deliver)
        signup.submit()
        signup.validateUserloggedIn(`Welcome ${deliver.username}`)

    })

    it('Mensagem de usuario duplicado', function () {
        signup.go()
        signup.clickRegister()
        signup.validateFormUserCreate('Signing up is easy!')       

        var deliver = signupFactory.deliver()

        const firstname = faker.name.firstName()
        const lastname = faker.name.lastName()
        const username = firstname + '_' + lastname

        deliver.firstName = firstname
        deliver.lastName  = lastname
        deliver.username  = username
        
        signup.fillForm(deliver)
        signup.submit()
        
        signup.validateUserloggedIn(`Welcome ${deliver.username}`)
        
        loginPage.logout()
         
        signup.clickRegister()
        signup.validateFormUserCreate('Signing up is easy!')

        signup.fillForm(deliver)
        signup.submit()
       
        signup.validateErrorMessage('This username already exists.')
    })

    it('Formulario vazio submetido', function () {
        signup.go()
        signup.clickRegister()
        signup.validateFormUserCreate('Signing up is easy!')
        signup.submit()        
    })

    context('Required fields', function () {
        const messages = [
            { field: 'First name', output: 'First name is required.', locator: "span[id='customer.firstName.errors']" },
            { field: 'Last name', output: 'Last name is required.', locator: "span[id='customer.lastName.errors']" },
            { field: 'Address', output: 'Address is required.', locator: "span[id='customer.address.street.errors']" },
            { field: 'City', output: 'City is required.', locator: "span[id='customer.address.city.errors']" },
            { field: 'State', output: 'State is required.', locator: "span[id='customer.address.state.errors']" },
            { field: 'Zip Code', output: 'Zip Code is required.', locator: "span[id='customer.address.zipCode.errors']" },
            { field: 'Social Security Number', output: 'Social Security Number is required.', locator: "span[id='customer.ssn.errors']" },
            { field: 'Username', output: 'Username is required.' , locator: "span[id='customer.username.errors']" },
            { field: 'Password', output: 'Password is required.' , locator: "span[id='customer.password.errors']" },
            { field: 'Password confimation', output: 'Password confirmation is required.' , locator: "span[id='repeatedPassword.errors']" }
        ]

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signup.validateContainsObject(msg.locator, msg.output)
            })
        })
    })






})