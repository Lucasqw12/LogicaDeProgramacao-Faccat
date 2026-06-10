/* 37)Uma fruteira está vendendo frutas com a seguinte tabela de preços: 

|=================================================================================================================|
|            |       Até 5 Kg                             |    Acima de 5 Kg                                      |
|=================================================================================================================|
| Morango    |      R$ 2.50 por Kg                        |    R$ 2.20 por Kg                                     |
| Maçã       |      R$ 1.80 por Kg                        |    R$ 1.50 por Kg                                     |
|=================================================================================================================|

Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25.00, receberá 
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.    */

alert("=== Fruteira ===")

let morango = parseFloat(prompt("Quantidade de morangos (Kg):"))
let maca = parseFloat(prompt("Quantidade de maçãs (Kg):"))


let precoMorango = 0
let precoMaca = 0


if (morango <= 5) {
  precoMorango = 2.50
} else {
  precoMorango = 2.20
}


if (maca <= 5) {
  precoMaca = 1.80
} else {
  precoMaca = 1.50
}


let totalKg = morango + maca

let totalMorango = morango * precoMorango
let totalMaca = maca * precoMaca

let total = totalMorango + totalMaca


if (totalKg > 8 || total > 25) {
  total = total - (total * 0.10)
}

alert("Total a pagar: R$ " + total.toFixed(2))