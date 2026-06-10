/* 12) - Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores. */
alert("=== Eleitores de um município ===")

let total = Number(prompt("Total de eleitores: "))

let brancos = Number(prompt("Votos brancos: "))
let nulos = Number(prompt("Votos nulos: "))
let validos = Number(prompt("Votos validos: "))

if (total <= 0 || 
brancos < 0 || 
nulos < 0 || 
validos < 0 || 
(brancos + nulos + validos !== total)
){
    alert("Erro: dados inválidos")
} else{

let percBrancos = (brancos / total) * 100
let percNulos = (nulos / total) * 100
let percValidos = (validos / total) * 100


alert(`
    Brancos: ${percBrancos}%
==========================
    Nulos: ${percNulos}%
==========================
    Validos: ${percValidos}%`)
    }