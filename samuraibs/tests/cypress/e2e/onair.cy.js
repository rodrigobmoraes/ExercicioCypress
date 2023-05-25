beforeEach(function () {
    cy.fixture('example')
        .then(example => {
            this.example = example;
        })
})

it('Webapp deve estar online', function(){
    cy.visit(this.example.baseUrl)
    cy.title().should('eq', 'Samurai Barbershop by QAninja')
})