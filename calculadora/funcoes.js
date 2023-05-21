function numeroPrimo(resultado){
    var divisores = 0
    for(var count=1 ; count<=resultado ; count++)
    if(resultado % count == 0)
        divisores++;
   
   if(divisores==2)
       outputPrimo.textContent= 'É primo'
   else
       outputPrimo.textContent = 'Não é primo'
 }   
 function sumOperation(){
     var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 + value2
    output.textContent = resultado
    numeroPrimo(resultado)
}   
function subOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = (value1) - (value2)
    output.textContent = resultado
    numeroPrimo(resultado)
    
    
}
function multiOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 * value2
    output.textContent = resultado
    numeroPrimo(resultado)
    
}
function divOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 / value2
    output.textContent = resultado.toFixed(2)
    numeroPrimo(resultado)
    
}
function potenOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 ** value2
    output.textContent = resultado.toFixed(2)
    numeroPrimo(resultado)
}

function raiz(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = Math.sqrt(value1)
    output.textContent = resultado
    numeroPrimo(resultado)

    
}
function fatorial(){
   var value1 = Number(input1.value)

    var resultado = 1
    for(let i = value1; i > 1; i--){
        resultado = resultado * i
    }
    output.textContent = resultado
    numeroPrimo(resultado)

}
function limparCampos(){
    input1.value = ''
    input2.value = ''
    output.textContent = ''
    outputPrimo.textContent = ''
}
