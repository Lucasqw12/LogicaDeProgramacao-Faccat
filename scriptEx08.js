alert("=== Área do Pentágono ===")

let lado = Number(prompt("Digite o lado do pentágono:"))
let apotema = Number(prompt("Digite o apótema:"))

let perimetro = 5 * lado
let area = (perimetro * apotema) / 2

alert(`Área do pentágono: ${area}`)