/* 15)  Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor. */

alert("===  Salário do vendedor ===")

let numCarrosVendidos = Number(prompt("número de carros vendidos:"))
let valorTotalVendas = Number(prompt("Valor total das vendas: R$"))
let salarioFixo = Number(prompt("Salário fixo: R$"))
let comissaoPorCarro = Number(prompt("Valor da comissão por carro vendido: R$"))

if (numCarrosVendidos < 0 || valorTotalVendas < 0 || salarioFixo < 0 || comissaoPorCarro < 0){
    alert("Erro: dados inválidos")
} else{
    let comissaoTotal = (numCarrosVendidos * comissaoPorCarro) + (valorTotalVendas * 0.05)
    let salarioFinal = salarioFixo + comissaoTotal
    alert(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`)
}

