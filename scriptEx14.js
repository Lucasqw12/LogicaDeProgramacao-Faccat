/* 14) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor. */

alert("===  O custo de um carro novo ===")

let custoFabrica = Number(prompt("Custo de fábrica do carro: "))
if (custoFabrica <= 0){
    alert("Erro: custo de fábrica inválido")
} else{
    let percentualDistribuidor = 0.28
    let percentualImpostos = 0.45
    let custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * percentualImpostos)

    alert(`O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`)
}
