describe('Register Component', () => {
    it('Should fill out inputs correctly and submit the form', () => {
        cy.visit('http://localhost:3000/register');
        cy.get('input[name="email"]').type('email11@test.com')
        cy.get('input[name="username"]').type('test')
        cy.get('input[name="password"]').type('test')
        cy.get('input[name="firstName"]').type('tester')
        cy.get('input[name="lastName"]').type('testing')

        cy.get('button[type="submit"]').click()
        cy.get(".is-info").contains('Next').click()
        cy.get(".is-rounded").contains('Finish').click()

        cy.url().should('include', 'http://localhost:3000/')
    })
})