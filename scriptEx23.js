/* 23) As maçãs custam R$ 1.30 cada se forem compradas menos de uma dúzia, e R$ 1.00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra   */

    alert("===  Valor da compra de maçãs ===")
    
let compraMacas = Number(prompt("Digite a quantidade de maçãs compradas: "))

if (compraMacas < 12){
    let somaSemDesconto = compraMacas * 1.30
    alert(`O valor total de ${compraMacas} foi de: ${somaSemDesconto} Reais`)
} else{
    let somaComDesconto = compraMacas * 1.00
   alert(`O valor total de ${compraMacas} foi de: ${somaComDesconto} Reais`)
}
