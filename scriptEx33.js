/* 33) Ler três valores (considere que não serão informados valores iguais) e escrever o maior deles   */

 alert("=== Maior Valor + Resultado em Ordem Decrescente ===")

let valor01 = Number(prompt("Digite o primeiro valor: "))
let valor02 = Number(prompt("Digite o Segundo valor: "))
let valor03 = Number(prompt("Digite o terceiro valor: "))

if(valor01 > valor02 && valor01 > valor03){
   if(valor02 > valor03){
    alert(`${valor01}, ${valor02}, ${valor03}`)
   }else{
      alert(`${valor01}, ${valor03}, ${valor02}`)
   }
        
}else if ( valor02 > valor01 && valor02 > valor03){
    if(valor01 > valor03){
          alert(`${valor02}, ${valor01}, ${valor03}`)
    }else{
          alert(`${valor02}, ${valor03}, ${valor01}`)
    }
}else{
    if(valor01 > valor02){
          alert(`${valor03}, ${valor01}, ${valor02}`)
    } else{
          alert(`${valor03}, ${valor02}, ${valor01}`)
    }
}