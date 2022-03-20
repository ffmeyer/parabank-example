/// <reference types="cypress" />
import BasePage from './BasePage'


class AccountPage extends BasePage {
    
    fasda() {
        var values = []

        cy.get("tbody tr[class='ng-scope'")
            .each(($e1, index, array) => { //iterating through array of elements
                var StoreText = $e1.text(); //storing iterated element in text
                var data = {
                    accountId: StoreText.split('\n')[1],
                    balance: StoreText.split('\n')[2],
                    availableAmount: StoreText.split('\n')[3]
                }

                values.push(data)
            })
                
        values.forEach(value => {
            cy.log(value)
        })
    }
}
export default new AccountPage


/*fasda() {
    const values = []        
    var tableRow  = ""
   //var tr = cy.get("tbody tr[class='ng-scope'").get("td").each($td => {
    cy.get("tbody tr[class='ng-scope'").then(table => {
        table.each((linha) => {
            //cy.log(type($do))
            var line = cy.wrap(linha)
            tableRow = line.find('tr')
                var acconuntId = tableRow.get('tbody tr td :nth-child(1)')
            console.log(acconuntId)
            //cy.log(acconuntId)
        })                
    //console.log($td.innerHtml)
})

}*/




