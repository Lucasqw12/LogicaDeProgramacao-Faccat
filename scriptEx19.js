/* 19)Um motorista de táxi deseja calcular o rendimento de seu carro na praça. Sabendo-se que o preço 
do combustível é de R$ 2.90, escreva um programa para ler: a marcação do odômetro (Km) no início 
do dia, a marcação (Km) no final do dia, o número de litros de combustível gasto e o valor total (R$) 
recebido dos passageiros. Calcular e escrever: a média do consumo em Km/L e o lucro (líquido) do 
dia.   */

    alert("===  Rendimento do táxi ===")

let kmInicio = Number(prompt("Marcação do odômetro no início do dia (Km): "))
let kmFim = Number(prompt("Marcação do odômetro no final do dia (Km): "))
let litrosGastos = Number(prompt("Número de litros de combustível gasto: "))
let valorRecebido = Number(prompt("Valor total recebido dos passageiros (R$): "))
if (kmInicio < 0 || kmFim < 0 || litrosGastos <= 0 || valorRecebido < 0){
    alert("Erro: dados inválidos")
}
else{
    let distanciaPercorrida = kmFim - kmInicio
    let consumoMedio = distanciaPercorrida / litrosGastos
    let custoCombustivel = litrosGastos * 2.90
    let lucroLiquido = valorRecebido - custoCombustivel
    alert(`Média do consumo: ${consumoMedio.toFixed(2)} Km/L\nLucro líquido do dia: R$ ${lucroLiquido.toFixed(2)}`)
}
