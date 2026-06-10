/* 39) Escreva um programa que leia o código de origem de um produto e imprima na tela a região de sua 
procedência conforme a tabela abaixo: 

|=============================================================================================================|
|                          código 1 : Sul          |        código 5 ou 6      : Nordeste                     |
|                          código 2 : Norte        |        código 7, 8 ou 9   : Sudeste                      |
|                          código 3 : Leste        |        código 10          : Centro-Oeste                 |
|                          código 4 : Oeste        |        código 11          : Noroeste                     |
|=============================================================================================================|

Observação: Caso o código não seja nenhum dos especificados na tabela acima, o produto deve ser 
encarado como Importado.   */

alert("=== Origem do Produto ===")

let codigo = parseInt(prompt("Digite o código de origem do produto:"))

let origem = ""

switch (codigo) {
  case 1:
    origem = "Sul"
    break

  case 2:
    origem = "Norte"
    break

  case 3:
    origem = "Leste"
    break

  case 4:
    origem = "Oeste"
    break

  case 5:
  case 6:
    origem = "Nordeste"
    break

  case 7:
  case 8:
  case 9:
    origem = "Sudeste"
    break

  case 10:
    origem = "Centro-Oeste"
    break

  case 11:
    origem = "Noroeste"
    break

  default:
    origem = "Importado"
}

alert("Origem do produto: " + origem)