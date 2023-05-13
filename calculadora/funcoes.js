function sumOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 + value2
    output.textContent = resultado
}   
function subOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 - value2
    output.textContent = resultado
}
function multiOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 * value2
    output.textContent = resultado
}
function divOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 / value2
    output.textContent = resultado.toFixed(2)
}
function potenOperation(){
    var value1 = Number(input1.value)
    var value2 = Number(input2.value)
    var resultado = value1 ** value2
    output.textContent = resultado.toFixed(2)
}
function limparCampos(){
    input1.value = ''
    input2.value = ''
    output.textContent = ''
}
