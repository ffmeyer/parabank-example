var faker = require('faker')

export default {

    deliver: function() {

      var username = faker.name.firstName();
      var lastname = faker.name.lastName();

        const data =  {
                firstName: `${username}`,
                lastName: `${lastname}`,
                phoneNumber: "11999999999",
                ssn: "123456789",
                username: `${username}_${lastname}`,
                password: "123456",
                repeatedpassword: "123456",
                address: {
                  street: "Rua Joaquim Floriano",
                  city: "São Paulo",
                  state: "São Paulo/SP",
                  zipCode: "04534011"
            }
          }
        return data
    },

    deliverDefault: function() {

        const data =  {
                firstName: `Felipe`,
                lastName: `Meyer`,
                phoneNumber: "11999999999",
                ssn: "123456789",
                username: `ffmeyer`,
                password: "123456",
                repeatedpassword: "123456",
                address: {
                  street: "Rua Joaquim Floriano",
                  city: "São Paulo",
                  state: "São Paulo/SP",
                  zipCode: "04534011"
            }
          }
        return data
    }


}
