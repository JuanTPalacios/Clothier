describe('ItemDetails Component', () => {
    it('Should add item to MyCloset when button is clicked',  () => {
        cy.visit('http://localhost:3000/');

        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('test')

        cy.get('button[type="submit"]').click()

        cy.get('.tile').within(()=> {
            cy.get('div').within(() => {
              cy.get('img').last().click() 
             
            })
        })
        if(cy.get('h6').contains('Added to MyCloset')) {
            (cy.get('button').contains('Buy').click())
        } else {
            cy.get('button').contains('Add to MyCloset').click()
        }

        
    })
    it('Should change whats rendered when clicking on similar items in the list', () => {
        cy.visit('http://localhost:3000/');

        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('test')

        cy.get('button[type="submit"]').click()

        cy.get('.tile').within(()=> {
            cy.get('div').within(() => {
              cy.get('img').first().click() 
             
            })
        })
        cy.get('.search-follow').within(()=> {
            cy.get('div').within(() => {
              cy.get('img').last().click() 
             
            })
        })
        cy.url().should('include', 'http://localhost:3000/itemDetail/279')
        cy.get('button').contains('Buy').click()


    })
})