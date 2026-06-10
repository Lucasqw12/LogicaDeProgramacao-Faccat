/* 34) Ler três valores (considere que não serão informados valores iguais) e escrever a soma dos dois 
maiores.  */

 alert("=== Soma dos dois maiores valores  ===")
let valor01 = Number(prompt("Digite o primeiro valor: "))
let valor02 = Number(prompt("Digite o Segundo valor: "))
let valor03 = Number(prompt("Digite o terceiro valor: "))

let soma = 0 

if(valor01 > valor02 && valor01 > valor03){
   if(valor02 > valor03){
       soma = valor01 + valor02
    alert(`${valor01} + ${valor02} = ${soma}`)
   }else{
      soma = valor01 + valor03
      alert(`${valor01} + ${valor03} = ${soma}`)
   }
        
}else if ( valor02 > valor01 && valor02 > valor03){
    if(valor01 > valor03){
       soma = valor02 + valor01
          alert(`${valor02} + ${valor01} = ${soma}`)
    }else{
       soma = valor02 + valor03
          alert(`${valor02} + ${valor03} = ${soma}`)
    }
}else{
    if(valor01 > valor02){
       soma = valor03 + valor01
          alert(`${valor03} + ${valor01} = ${soma}`)
    } else{
       soma = valor03 + valor02
          alert(`${valor03} + ${valor02} = ${soma}`)
    }
}