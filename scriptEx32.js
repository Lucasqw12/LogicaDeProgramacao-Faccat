/* 32) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
a quantidade média escrever a mensagem “Não efetuar compra”, senão escrever a mensagem “Efetuar 
compra”.      */

 alert("=== Análise de Estoque ===")

 let quantidadeAtual = Number(prompt("Digite a Quantidade Atual do Estoque: "))
 let quantidadeMaxima = Number(prompt("Digite a Quantidade Máxima do Estoque: "))
 let quantidadeMinima = Number(prompt("Digite a Quantidade Mínima do Estoque: "))

 let quantidadeMedia = ((quantidadeMaxima + quantidadeMinima) / 2 )
 
 let quantidade = (quantidadeAtual >= quantidadeMedia) ? `Não efetuar a compa` : `Efetuar compra`
