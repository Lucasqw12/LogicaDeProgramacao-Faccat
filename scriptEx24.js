/* 24) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que média igual ou maior que 6.0 
o aluno é aprovado). Escrever também a média calculada.    */

    alert("===  Ler as notas dos alunos ===")
    
let primeiraAvaliacao = Number(prompt("Digite a nota da primeira Avaliação"))
let segundaAvaliacao = Number(prompt("Digite a nota da Segunda Avaliação"))

let media = (primeiraAvaliacao + segundaAvaliacao) / 2

const statusNota = (media >= 6.0) ? `Sua nota foi de ${media} e o Status é: APROVADO` : `Sua nota foi de ${media} e o Status é: REPROVADO`

alert(statusNota)


