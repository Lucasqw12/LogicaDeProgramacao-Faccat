/* 20)A equipe Red Bull Racing de Fórmula 1 deseja calcular o número mínimo de litros que deverá 
colocar no tanque de seu carro para que ele possa percorrer um determinado número de voltas até o 
primeiro reabastecimento. Escreva um programa que leia o comprimento da pista (em metros), o 
número total de voltas a serem percorridas no grande prêmio, o número de reabastecimentos 
desejados e o consumo de combustível do carro (em Km/L). Calcular e escrever o número mínimo de 
litros necessários para percorrer até o primeiro reabastecimento. Observação: Considere que o 
número de voltas entre os reabastecimentos é o mesmo.   */

    alert("===  Número mínimo de litros ===")

let comprimentoPista = Number(prompt("Comprimento da pista (em metros): "))
let numVoltas = Number(prompt("Número total de voltas a serem percorridas: "))
let numReabastecimentos = Number(prompt("Número de reabastecimentos desejados: "))
let consumoCombustivel = Number(prompt("Consumo de combustível do carro (em Km/L): "))
if (comprimentoPista <= 0 || numVoltas <= 0 || numReabastecimentos < 0 || consumoCombustivel <= 0){
    alert("Erro: dados inválidos")
} else{
    let distanciaTotal = (comprimentoPista / 1000) * numVoltas
    let voltasPorReabastecimento = numVoltas / (numReabastecimentos + 1)
    let distanciaPorReabastecimento = (comprimentoPista / 1000) * voltasPorReabastecimento
    let litrosNecessarios = distanciaPorReabastecimento / consumoCombustivel
    alert(`Número mínimo de litros necessários para percorrer até o primeiro reabastecimento: ${litrosNecessarios.toFixed(2)} L`)
}