/* 43)   Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
estar em condições, um dos seguintes requisitos deve ser satisfeito: 

|=========================================================================|
| - Ter no mínimo 65 anos de idade.                                       |
| - Ter trabalhado no mínimo 30 anos.                                     |
| - Ter no mínimo 60 anos  e  ter trabalhado no mínimo 25 anos.           |
|=========================================================================|

      Com base nas informações acima, faça um algoritmo que leia: o número do empregado 
(código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a 
idade e o tempo de trabalho do empregado e a mensagem “Requerer aposentadoria”  ou  “Não requerer 
aposentadoria”.
 */

alert("=== Sistema de Aposentadoria ===")

let codigo = parseInt(prompt("Código do empregado:"))
let anoNascimento = parseInt(prompt("Ano de nascimento:"))
let anoIngresso = parseInt(prompt("Ano de ingresso na empresa:"))

const anoAtual = new Date().getFullYear()


let idade = anoAtual - anoNascimento
let tempoTrabalho = anoAtual - anoIngresso


let podeAposentar = false

if (idade >= 65) {
  podeAposentar = true
} 
else if (tempoTrabalho >= 30) {
  podeAposentar = true
} 
else if (idade >= 60 && tempoTrabalho >= 25) {
  podeAposentar = true
}


alert(
  "Código: " + codigo +
  "\nIdade: " + idade +
  "\nTempo de trabalho: " + tempoTrabalho +
  "\nSituação: " + (podeAposentar ? "Requerer aposentadoria" : "Não requerer aposentadoria")
)