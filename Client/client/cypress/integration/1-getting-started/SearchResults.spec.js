describe('SearchResults Component', () => {
    it('Should change whats rendered when new search terms are typed', () => {
        cy.visit('http://localhost:3000/');

        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('test')

        cy.get('button[type="submit"]').click()
      
       cy.get('.search-bar').type('test')

       cy.get('.search-follow').within(() => {
           cy.get('.is-4').contains('test')
       })
    })
    it('Should change screen when an item is clicked from the search results', () => {
        cy.visit('http://localhost:3000/');

        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('test')

        cy.get('button[type="submit"]').click()
      
       cy.get('.search-bar').type('shirt')

       cy.get('.search-follow').within(() => {
           cy.get('.search-item-box').within(() => {
               cy.get('img').last().click({force: true})
           })
       })
       cy.url().should('include', 'http://localhost:3000/itemDetail')

})
})