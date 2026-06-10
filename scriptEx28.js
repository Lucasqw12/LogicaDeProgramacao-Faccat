/* 28) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.      */

 alert("=== Sistema de Duração do Jogo de Xadrez ===")


let inicio = parseInt(prompt("Digite o horário de Início da partida (VALOR INTEIRO! SEM MINUTOS):"))
let fim = parseInt(prompt("Digite o horário do Fim da partida (VALOR INTEIRO! SEM MINUTOS):"))

let duracao 

if (inicio < fim) {
    duracao = fim - inicio
} else {
    duracao = (24 - inicio) + fim
}

alert("A duração do jogo de Xadrez foi de " + duracao + " hora(s)!")