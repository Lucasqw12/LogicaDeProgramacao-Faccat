/* 29)  A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
(considere que o mês possua 4 semanas exatas).      */

 alert("=== Jornada de trabalho semanal ===")

let horasTrabalhadas = Number(prompt("Digite as horas trabalhadas no mês: "))
let salarioHora = Number(prompt("Digite o valor da sua hora: "))

let horasNormais = 160
let salarioTotal = 0

if (horasTrabalhadas <= horasNormais) {
    salarioTotal = horasTrabalhadas * salarioHora
} else {
    let horasExtras = horasTrabalhadas - horasNormais
    let valorHoraExtra = salarioHora * 1.5

    salarioTotal = (horasNormais * salarioHora) + (horasExtras * valorHoraExtra)
}

alert("Salário total: R$ " + salarioTotal.toFixed(2))

