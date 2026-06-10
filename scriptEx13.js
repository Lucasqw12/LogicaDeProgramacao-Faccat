/* 13) - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor.. */
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