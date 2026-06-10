alert("=== Área do Hexágono ===")

let lado = Number(prompt("Digite o lado do hexágono:"))
let apotema = Number(prompt("Digite o apótema:"))

let perimetro = 6 * lado
let area = (perimetro * apotema) / 2

alert(`Área do hexágono: ${area}`)