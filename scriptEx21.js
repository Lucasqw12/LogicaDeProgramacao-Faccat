/* 21) Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso 
contrário, escrever NÃO É MAIOR QUE 10! .   */

    alert("===  Verificação de valor ===")
    
let valor = Number(prompt("Digite um valor:"))
let maiorQue = (valor >= 10) ? "Valor maior que 10" : "Valor menor que 10"

alert(maiorQue)