describe('HomeDash Component', () => {
    it('Should change whats rendered when top nav links are clicked', () => {
        cy.visit('http://localhost:3000/');

        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('test')

        cy.get('button[type="submit"]').click()
      
        cy.get('nav').within(()=> {
            cy.get('h1').contains('Hi test!')
        })

        cy.get('.categories').within(()=> {
            cy.get('li').contains('Pants').click({force: true});
        })
        cy.get('.categories').within(()=> {
            cy.get('li').contains('Coats & Outerwear').click({force: true});
        })
    })

    it('Should chnage screen to the ItemDetails page when a item is clicked', () => {
        cy.visit('http://localhost:3000/');

        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('test')

        cy.get('button[type="submit"]').click()
      
        cy.get('nav').within(()=> {
            cy.get('h1').contains('Hi test!')
        })

        cy.get('.pt-2').within(()=> {
            cy.get('div').within(() => {
              cy.get('img').last().click() 
             
            })
        })
        cy.url().should('include', 'http://localhost:3000/itemDetail/249')


    })
})
