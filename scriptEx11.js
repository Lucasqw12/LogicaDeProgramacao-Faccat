/* 11) - Faça um algoritmo que pergunte quanto a pessoa ganha por hora (salário por hora) e o número de 
horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.*/
alert("=== Ganho por hora ===")



let ganhoHora = parseFloat(prompt("Digite o valor que você ganha por Hora: "))
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "))

let salarioMes = ganhoHora * horasTrabalhadas

alert(`O seu ganho por Hora R$${ganhoHora} mais ${horasTrabalhadas}h trabalhadas vai dar um total de: R$${salarioMes.toFixed(2)}`)