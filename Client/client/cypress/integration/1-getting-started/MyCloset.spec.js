describe('HomeDash Component', () => {
it('Should change to MyCloset page when MyCloset button is pressed', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('test')

    cy.get('button[type="submit"]').click()
  
    cy.get('nav').within(()=> {
        cy.get('h1').contains('Hi test!')
    })

    cy.get('.body').within(() => {
        cy.get('.is-info').click()
    })
    cy.url().should('include', 'http://localhost:3000/MyCloset')

 })

 it('Should change whats rendered when top nav links are clicked', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('test')

    cy.get('button[type="submit"]').click()
  
    cy.get('nav').within(()=> {
        cy.get('h1').contains('Hi test!')
    })

    cy.get('.body').within(() => {
        cy.get('.is-info').click()
    })

    cy.get('.categories').within(()=> {
    cy.get('li').click({multiple: true, force: true}) 
          
    })
})

it('Should change to ItemDetails Page when a item is clicked', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('test')

    cy.get('button[type="submit"]').click()
  
    cy.get('.body').within(() => {
        cy.get('.is-info').click()
    })

    cy.get('.categories').within(()=> {
    cy.get('li').click({multiple: true, force: true}) 
          
    })

    cy.get('.pt-2').within(()=> {
        cy.get('div').within(() => {
          cy.get('img').last().click() 
         
        })
    })
    cy.url().should('include', 'http://localhost:3000/itemDetail')

})
})