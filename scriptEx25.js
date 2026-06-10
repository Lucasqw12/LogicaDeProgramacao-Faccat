/* 25) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).    */

    alert("=== Pode votar?  ===")

const anoAtual = new Date().getFullYear()

const nascimento = Number(prompt("Digite o seu ano de Nascimento"))

const idade = anoAtual - nascimento

if (idade < 16){
    alert(`Sua idade é de ${idade}. Isso significa que não Pode votar`)
}else if (idade < 18){
    alert(`Sua idade é de ${idade}. Isso significa que o voto não é Obrigatório`)
} else {
    alert(`Sua idade é de ${idade}. Isso significa que o voto é OBRIGATÓRIO`)
}



