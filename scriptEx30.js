/* 30)  Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00, mais 5% sobre o que 
ultrapassar este valor, calcular e escrever o seu salário total.       */

 alert("=== Comissão de vendas ===")

 let salarioFixo = Number(prompt("Digite seu salário fixo! "))
 let vendasMensal = Number(prompt("Digite o valor total vendido por VOCÊ! "))

 if(vendasMensal <= 1500){
  let comissao = (vendasMensal * 3 ) / 100
  let soma = comissao + salarioFixo
    alert(`Você vendeu um total de: ${vendasMensal} ou seja terá um bônus de 3%.  
        O salário sairá de: ${salarioFixo} para: ${soma} `)
 }else{
    let comissaofixa =  (1500 * 3) / 100 
    let comissaoExcedente =  vendasMensal - 1500
    let somaExcedente = (comissaoExcedente * 5) / 100 
    let somaComissao = comissaofixa + somaExcedente
    let somaTotal = somaComissao + salarioFixo
    alert(`Você vendeu um total de: ${vendasMensal} ou seja terá um bônus de 5%.  
        O salário sairá de: ${salarioFixo.toFixed(2)} para: ${somaTotal.toFixed(2)} `)
 }