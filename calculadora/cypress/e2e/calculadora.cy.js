/// <reference types="cypress"/>

// const operacao = (value1, value2, operador, valorEsperado) =>{
//   describe(`Testando ${value1}${operador}${value2}`, ()=>{
//     it(`Testando ${value1}${operador}${value2}`, ()=>{
//       cy.get('#value1').click()
//       cy.get('#value1').type(`${value1}`)
//       cy.get('#value2').click()
//       cy.get('#value2').type(`${value2}`)
//       cy.get('#btnSum').click()
//       cy.get('#output').should("have.text", `${valorEsperado}`)
//       cy.get('#btnClear').click()
//     })
//   })
// }

beforeEach(() =>{
  cy.visit('localhost:5500/calculator.html')
})

// it('Testando soma', () =>{
//   operacao('10', '10', '+', '20' )
// })


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
  it("Testando 0.5 - 1", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type('0.5')
    cy.get('#value2').click()
    cy.get('#value2').type(1)
    cy.get('#btnSub').click() 
    cy.get('#output').should("have.text", '-0.5')
    cy.get('#btnClear').click()
  })
})

describe('Testando multiplicação', ()=>{
  it("testando 5 * 4", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type(5)
    cy.get('#value2').click()
    cy.get('#value2').type(4)
    cy.get('#btnMulti').click()
    cy.get('#output').should('have.text', '20')
    cy.get('#btnClear').click()
  })

  it("testando 5 * 0.3", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type(5)
    cy.get('#value2').click()
    cy.get('#value2').type(0.3)
    cy.get('#btnMulti').click()
    cy.get('#output').should('have.text', '1.5')
    cy.get('#btnClear').click()
  })
})

describe('Testando divisão', ()=>{
  it("testando 10 / 5", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type(10)
    cy.get('#value2').click()
    cy.get('#value2').type(5)
    cy.get('#btnDiv').click()
    cy.get('#output').should('have.text', '2.00')
    cy.get('#btnClear').click()
  })

  it("testando 10 / 4", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type(10)
    cy.get('#value2').click()
    cy.get('#value2').type(4)
    cy.get('#btnDiv').click()
    cy.get('#output').should('have.text', '2.50')
    cy.get('#btnClear').click()
  })
})


describe('Testando raiz', ()=>{
  it("testando 64", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type(64)
    cy.get('#btnRaiz').click()
    cy.get('#output').should('have.text', '8')
    cy.get('#btnClear').click()
  })

})


describe('Testando fatorial', ()=>{
  it("testando 5", ()=>{
    cy.get('#value1').click()
    cy.get('#value1').type(5)
    cy.get('#btnFatorial').click()
    cy.get('#output').should('have.text', '120')
    cy.get('#btnClear').click()
  })

})



