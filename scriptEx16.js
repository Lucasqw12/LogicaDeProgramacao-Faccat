/* 16)Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
final é:  */

alert("===  Média do aluno ===")

let nota1 = Number(prompt("Nota 01:"))
let nota2 = Number(prompt("Nota 02:"))
let nota3 = Number(prompt("Nota 03:"))

let mediaFinal = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / (2 + 3 + 5)

alert(`A média final do aluno é: ${mediaFinal.toFixed(2)}`)