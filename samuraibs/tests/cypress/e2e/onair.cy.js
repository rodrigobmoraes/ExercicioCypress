it('Webapp deve estar online', function(){
    cy.visit('http://localhost:3000/')
    cy.title().should('eq', 'Samurai Barbershop by QAninja')
})