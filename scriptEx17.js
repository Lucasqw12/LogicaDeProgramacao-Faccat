/* 17)Escreva um programa para calcular e imprimir o número de lâmpadas necessárias para iluminar 
um determinado cômodo de uma residência. Dados de entrada: a potência da lâmpada utilizada (em 
watts), as dimensões (largura e comprimento, em metros) do cômodo. Considere que a potência 
necessária é de 18 watts por metro quadrado.  */

alert("===  Número de lâmpadas necessárias ===")

let potenciaLampada = Number(prompt("Potência da lâmpada (em watts): "))
let larguraComodo = Number(prompt("Largura do cômodo (em metros): "))
let comprimentoComodo = Number(prompt("Comprimento do cômodo (em metros): "))
if (potenciaLampada <= 0 || larguraComodo <= 0 || comprimentoComodo <= 0){
    alert("Erro: dados inválidos")
} else{ 
    let areaComodo = larguraComodo * comprimentoComodo
    let potenciaNecessaria = areaComodo * 18
    let numLampadas = Math.ceil(potenciaNecessaria / potenciaLampada)
    alert(`Número de lâmpadas necessárias: ${numLampadas}`)
}