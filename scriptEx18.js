/* 18)Escreva um programa para ler as dimensões de uma cozinha retangular (comprimento, largura e 
altura), calcular e escrever a quantidade de caixas de azulejos para se colocar em todas as suas 
paredes (considere que não será descontada a área ocupada por portas e janelas). Cada caixa de 
azulejos possui 1.5 m2.   */

    alert("===  Número de lâmpadas necessárias ===")

let comprimentoCozinha = Number(prompt("Comprimento da cozinha (em metros): "))
let larguraCozinha = Number(prompt("Largura da cozinha (em metros): "))
let alturaCozinha = Number(prompt("Altura da cozinha (em metros): "))
if (comprimentoCozinha <= 0 || larguraCozinha <= 0 || alturaCozinha <= 0){
    alert("Erro: dados inválidos")
} else{
    let areaParedes = 2 * (comprimentoCozinha * alturaCozinha) + 2 * (larguraCozinha * alturaCozinha)
    let caixasAzulejos = Math.ceil(areaParedes / 1.5)
    alert(`Quantidade de caixas de azulejos necessárias: ${caixasAzulejos}`)
}