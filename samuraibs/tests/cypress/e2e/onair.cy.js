beforeEach(function () {
    cy.fixture('example')
        .then(example => {
            this.example = example;
        })
        cy.viewport(1440, 900)
})

it('Webapp deve estar online', function(){
    cy.visit(this.example.baseUrl)
    cy.title().should('eq', 'Samurai Barbershop by QAninja')
})

it ('Fazer login',function(){
    cy.visit(this.example.baseUrl)
    cy.get('[placeholder=E-mail]').type(this.example.email)
    cy.get('[placeholder=Senha]').type(this.example.senha)
    cy.get('[type=submit]').click()
})