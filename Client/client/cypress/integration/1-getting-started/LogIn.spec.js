describe('Login Component', () => {
    it('Should fill out inputs correctly and submit the form', () => {
        cy.visit('http://localhost:3000/');

        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('test')

        cy.get('button[type="submit"]').click()
      
        cy.get('nav').within(()=> {
            cy.get('h1').contains('Hi test!')
        })
    })
})