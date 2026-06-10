/* 42)  Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço 
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total 
a pagar (total a pagar = total - desconto), sabendo-se que: 

|======================================================================================|
| - Se quantidade  <= 5  o desconto será de 2%                                         |
| - Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3%                     |
| - Se quantidade  >  10 o desconto será de 5%                                         |
|======================================================================================| 
 */
alert("=== Sistema de Compra ===")

let produto = prompt("Nome do produto:")
let quantidade = parseInt(prompt("Quantidade adquirida:"))
let precoUnitario = parseFloat(prompt("Preço unitário:"))

let total = quantidade * precoUnitario
let desconto = 0


if (quantidade <= 5) {
  desconto = 0.02
} 
else if (quantidade <= 10) {
  desconto = 0.03
} 
else {
  desconto = 0.05
}

let valorDesconto = total * desconto
let totalAPagar = total - valorDesconto

alert(
  "Produto: " + produto +
  "\nTotal: R$ " + total.toFixed(2) +
  "\nDesconto: R$ " + valorDesconto.toFixed(2) +
  "\nTotal a pagar: R$ " + totalAPagar.toFixed(2)
)