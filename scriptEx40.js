/* 40) Escreva um programa para ler dois valores inteiros e uma das seguintes operações a serem 
executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação). 
Calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere 
que só serão lidos os valores 1, 2, 3 ou 4.   */

alert("=== Calculadora Simples ===")

let num1 = parseFloat(prompt("Digite o primeiro número:"))
let num2 = parseFloat(prompt("Digite o segundo número:"))

let operacao = parseInt(
  prompt(
    "Escolha a operação:\n1 - Adição\n2 - Subtração\n3 - Divisão\n4 - Multiplicação"
  )
)

let resultado = 0

switch (operacao) {
  case 1:
    resultado = num1 + num2
    break

  case 2:
    resultado = num1 - num2
    break

  case 3:
    resultado = num1 / num2
    break

  case 4:
    resultado = num1 * num2
    break
}

alert("Resultado: " + resultado)