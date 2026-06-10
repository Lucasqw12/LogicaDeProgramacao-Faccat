/* 38) Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja 
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a 
mensagem “Usuário inválido!”. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se 
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a 
senha esteja correta, deve ser mostrada a mensagem “Acesso permitido”.   */

alert("=== Sistema de Acesso ===")

let codigo = parseInt(prompt("Digite o código do usuário:"))

const codigoCorreto = 1234
const senhaCorreta = 9999

if (codigo !== codigoCorreto) {
  alert("Usuário inválido!")
} else {
  let senha = parseInt(prompt("Digite a senha:"))

  if (senha !== senhaCorreta) {
    alert("Senha incorreta")
  } else {
    alert("Acesso permitido")
  }
}