/* 22)) Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).   */

    alert("===  Verificação de valor Positivo ou negativo ===")
    
let valor = Number(prompt("Digite um valor e descubra se é Positivou ou negativo:"))
let maiorQue = (valor >= 0) ? `Valor ${valor} é Positivo` : `Valor ${valor} é Negativo`

alert(maiorQue)