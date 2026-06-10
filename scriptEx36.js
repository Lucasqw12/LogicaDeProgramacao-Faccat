/* 36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades 
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma 
das idades do homem mais velho com a mulher mais nova, e o produto (multiplicação) das idades do 
homem mais novo com a mulher mais velha.   */

 alert("=== Cálculo de Idades ===")

let h1 = parseInt(prompt("Digite a idade do homem 1:"))
let h2 = parseInt(prompt("Digite a idade do homem 2:"))
let m1 = parseInt(prompt("Digite a idade da mulher 1:"))
let m2 = parseInt(prompt("Digite a idade da mulher 2:"))


let homemMaisVelho = Math.max(h1, h2)
let homemMaisNovo = Math.min(h1, h2)


let mulherMaisVelha = Math.max(m1, m2)
let mulherMaisNova = Math.min(m1, m2)


let soma = homemMaisVelho + mulherMaisNova
let produto = homemMaisNovo * mulherMaisVelha

alert("Soma (homem mais velho + mulher mais nova): " + soma)
alert("Produto (homem mais novo * mulher mais velha): " + produto)