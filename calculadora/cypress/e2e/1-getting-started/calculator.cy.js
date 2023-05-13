/// <reference types="cypress"/>

beforeEach(() =>{
    cy.visit('http://127.0.0.1:5500/index.html')
})

describre('testando função soma', () =>{
    it('testando a soma de 2+2', ()=>{
        cy.get('input[type="number"]').type('2')
    })
})