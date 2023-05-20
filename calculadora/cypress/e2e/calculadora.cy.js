/// <reference types="cypress"/>

beforeEach(() =>{
  cy.visit('localhost:5500/calculator.html')
})


describe('Testando soma', ()=>{
  it("Testando 6 + 10", () =>{
    cy.get('#value1').click()
    cy.get('#value1').type('6')
    cy.get('#value2').click()
    cy.get('#value2').type('10')
    cy.get('#btnSum').click()
    cy.get('#output').should("have.text", '16')
    cy.get('#btnClear').click()
    })

    it("Testando 0.3 + 0.02", ()=>{
      cy.get('#value1').click()
      cy.get('#value1').type('0.3')
      cy.get('#value2').click()
      cy.get('#value2').type('0.02')
      cy.get('#btnSum').click()
      cy.get('#output').should("have.text", '0.32')
      cy.get('#btnClear').click()
    })
})

describe('Testando subtração', () =>{
  it("Testando 5 - 3", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type(5)
    cy.get('#value2').click()
    cy.get('#value2').type(3)
    cy.get('#btnSub').click()
    cy.get('#output').should('have.text', '2')
    cy.get('#btnClear').click()
  })

  it("Testando -4 - 4", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type(-4)
    cy.get('#value2').click()
    cy.get('#value2').type(4)
    cy.get('#btnSub').click()
    cy.get('#output').should('have.text', '0')
    cy.get('#btnClear').click()
  })
})


