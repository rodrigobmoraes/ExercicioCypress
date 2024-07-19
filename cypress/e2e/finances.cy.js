describe('Transações',()=>{
    it ('Cadastrar uma entrada',()=>{
        cy.visit("https://devfinance-agilizei.netlify.app/")

        cy.contains("Nova Transação").click()
        cy.get('#description').type("Freela")
        cy.get('#amount').type("250")
        cy.get('#date').type("2024-07-18")
        cy.contains('button', 'Salvar').click()

        cy.contains("Nova Transação").click()
        cy.get('#description').type("Gastos")
        cy.get('#amount').type("-200")
        cy.get('#date').type("2024-07-19")
        cy.contains('button', 'Salvar').click()
    });
});