/* 31) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
ou igual a zero escrever a mensagem “Saldo Positivo”, senão escrever a mensagem “Saldo Negativo”.      */

 alert("=== Saldo da conta ===")

let numeroConta = Number(prompt("Digite o número da sua conta: "))
let saldo = Number(prompt("Digite o saldo(o que eu tinha) da sua conta: "))
let debito = Number(prompt("Digite o Débito(- o que saiu) da sua conta: "))
let credito = Number(prompt("Digite o crédito(+ o que entrou) da sua conta: "))

let saldoAtual =  (saldo - debito) + credito

let resultado = (saldoAtual >= 0) ? `Positivo: ${saldoAtual.toFixed(2)}` : `negativo: ${saldoAtual.tofixed(2)}`

alert(resultado)

