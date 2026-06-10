/* 26) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.    */

    alert("=== Ler dois valores  ===")

    let valor01 = Number(prompt("Digite o primeiro Valor"))
    let valor02 = Number(prompt("Digite o Segundo Valor"))

   if (valor01 === valor02 ){
    alert(`Erro: Os valores não podem ser iguais. Recarregue e digite números diferentes `)
   } else{
    const maior = (valor01 > valor02) ? valor01 : valor02
      alert("O maior valor é: " + maior);
   }


