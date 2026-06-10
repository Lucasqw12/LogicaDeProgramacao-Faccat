/* 41) Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é 
Equilátero, Isósceles ou Escaleno. Sendo que: - Triângulo Equilátero: possui os 3 lados iguais. - Triângulo Isósceles: possui 2 lados iguais. - Triângulo Escaleno: possui 3 lados diferentes.  */

alert("=== Classificação de Triângulo ===")

let a = parseFloat(prompt("Digite o lado A:"))
let b = parseFloat(prompt("Digite o lado B:"))
let c = parseFloat(prompt("Digite o lado C:"))

let tipo = ""


if (a === b && b === c) {
  tipo = "Equilátero"
}

else if (a === b || a === c || b === c) {
  tipo = "Isósceles"
}


else {
  tipo = "Escaleno"
}

alert("O triângulo é: " + tipo)