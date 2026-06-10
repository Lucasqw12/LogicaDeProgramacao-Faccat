/* 35) Um posto está vendendo combustíveis com a seguinte tabela de descontos: 

|================================================|
|Álcool até 20 litros, desconto de 3% por litro  |
|------------------------------------------------|
|acima de 20 litros, desconto de 5% por litro    |
|================================================|
|Gasolina até 20 litros, desconto de 4% por litro|
|------------------------------------------------|
|acima de 20 litros, desconto de 6% por litro    |
|================================================|

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da 
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se 
que o preço do litro da gasolina é R$ 3.30 e o preço do litro do álcool é R$ 2.90.  */

 alert("=== Soma dos dois maiores valores  ===")

let tipo = prompt("Digite o tipo de combustível (A - Álcool / G - Gasolina):").toUpperCase()
let litros = parseFloat(prompt("Digite a quantidade de litros:"))

let precoLitro, descontos, valorBruto, valorFinal = 0

switch (tipo) {
  case "A":
    precoLitro = 2.90

    if (litros <= 20) {
      desconto = 0.03
    } else {
      desconto = 0.05
    }
    break

  case "G":
    precoLitro = 3.30

    if (litros <= 20) {
      desconto = 0.04
    } else {
      desconto = 0.06
    }
    break

  default:
    alert("Tipo de combustível inválido!")
}

valorBruto = litros * precoLitro
valorFinal = valorBruto - (valorBruto * desconto)

alert("Valor a pagar: R$ " + valorFinal.toFixed(2))
