describe('UserCloset Component', () => {
    it('Should change whats rendered when new search terms are typed', () => {
        cy.visit('http://localhost:3000/');

        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('test')

        cy.get('button[type="submit"]').click()
      
       cy.get('.search-bar').type('test')

       cy.get('.search-follow').within(() => {
           cy.get('.is-4').first().click({force: true})
       })

       cy.url().should('include', 'http://localhost:3000/UserCloset/')
       cy.get('.body').within(() => {
           cy.get('.mt-5').contains("test's Closet")
       })
    })
})